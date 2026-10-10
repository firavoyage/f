# /// script
# dependencies = [
#   "matplotlib",
#   "pyyaml",
#   "numpy",
# ]
# ///

import argparse
import logging
import os
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import numpy as np
import yaml

# ==========================================
# CONFIGURABLE CONSTANTS
# ==========================================
AGGREGATION_MINUTES = 5  # Window size for averaging (e.g., 10 minutes)

# Angle boundary ranges in degrees (0 to 360, where 0 is East/Right)
RIGHT_ANGLE_MIN_1 = 0
RIGHT_ANGLE_MAX_1 = 45
RIGHT_ANGLE_MIN_2 = 315
RIGHT_ANGLE_MAX_2 = 360

LEFT_ANGLE_MIN = 135
LEFT_ANGLE_MAX = 225

# Visual Transparency for bars
COLOR_ALPHA = 0.85
# ==========================================

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def parse_timestamp(key):
    try:
        return datetime.strptime(str(key), "%Y%m%d_%H%M%S")
    except ValueError:
        return None

def visualize_mse_trends(yaml_path, output_img="mse_10min_trend.png"):
    logging.info(f"Loading data from: {yaml_path}")
    if not os.path.exists(yaml_path):
        raise FileNotFoundError(f"Target YAML file not found at {yaml_path}")
        
    with open(yaml_path, 'r') as f:
        data = yaml.safe_load(f)
        
    if not data:
        logging.error("The provided YAML data is empty.")
        return

    # 1. Group frames into custom minute window buckets
    buckets = {}
    for key, metrics in data.items():
        dt = parse_timestamp(key)
        if dt is None:
            continue
        
        # Calculate the start of the current N-minute bucket window
        minute_offset = dt.minute % AGGREGATION_MINUTES
        bucket_ts = dt.replace(second=0, microsecond=0) - timedelta(minutes=minute_offset)
        
        if bucket_ts not in buckets:
            buckets[bucket_ts] = {"volumes": [], "directions": [], "lengths": []}
            
        buckets[bucket_ts]["volumes"].append(metrics["volume"])
        buckets[bucket_ts]["directions"].append(metrics["direction"])
        buckets[bucket_ts]["lengths"].append(metrics["length"])

    sorted_windows = sorted(buckets.keys())
    if not sorted_windows:
        logging.error("No valid timestamp identifiers could be parsed for aggregation.")
        return

    logging.info(f"Aggregated dataset into {len(sorted_windows)} distinct {AGGREGATION_MINUTES}-minute intervals.")

    window_mses = []
    colors = []

    # 2. Analyze direction distributions per window to generate dynamic blends
    for window_ts in sorted_windows:
        bucket = buckets[window_ts]
        avg_mse = np.mean(bucket["volumes"])
        window_mses.append(avg_mse)
        
        total_frames = len(bucket["lengths"])
        static_count = 0
        left_count = 0
        right_count = 0
        
        for deg, length in zip(bucket["directions"], bucket["lengths"]):
            if length == 0:
                static_count += 1
            else:
                # Classify horizontal directions using constants
                if (RIGHT_ANGLE_MIN_1 <= deg <= RIGHT_ANGLE_MAX_1) or (RIGHT_ANGLE_MIN_2 <= deg < RIGHT_ANGLE_MAX_2):
                    right_count += 1
                elif (LEFT_ANGLE_MIN <= deg <= LEFT_ANGLE_MAX):
                    left_count += 1
                else:
                    # Treat vertical/diagonal drift as static context for color blend mapping
                    static_count += 1
                    
        # Calculate percentages
        p_static = static_count / total_frames if total_frames > 0 else 1.0
        p_left = left_count / total_frames if total_frames > 0 else 0.0
        p_right = right_count / total_frames if total_frames > 0 else 0.0
        
        # Color mapping logic: Map distributions to RGB channels
        # Red = Left, Green = Static, Blue = Right
        r = p_left
        g = p_static
        b = p_right
        colors.append((r, g, b, COLOR_ALPHA))

    # 3. Plotting the colored timeline
    fig, ax = plt.subplots(figsize=(16, 7))
    fig.suptitle(f"{AGGREGATION_MINUTES}-Minute Averaged MSE Timeline with Directional Color Coding", fontsize=14, fontweight='bold')
    
    # Draw bars stretching across the defined window width dimensions
    widths = [timedelta(minutes=AGGREGATION_MINUTES) for _ in range(len(sorted_windows))]
    
    ax.bar(sorted_windows, window_mses, width=widths, color=colors, edgecolor='none', align='edge')
    
    ax.set_ylabel(f"Average Mean Squared Error (MSE) over {AGGREGATION_MINUTES}m", fontsize=11)
    ax.set_xlabel("Timeline", fontsize=11)
    ax.grid(True, linestyle='--', alpha=0.3)
    
    # Format dates beautifully along X-axis
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%m/%d %H:%M'))
    fig.autofmt_xdate(bottom=0.2, rotation=30, ha='right')
    
    # 4. Construct a custom visual color legend manually
    from matplotlib.patches import Patch
    legend_elements = [
        Patch(facecolor=(0.0, 1.0, 0.0, COLOR_ALPHA), label='Static (No Movement) Dominance'),
        Patch(facecolor=(1.0, 0.0, 0.0, COLOR_ALPHA), label='Left (Westbound Motion) Dominance'),
        Patch(facecolor=(0.0, 0.0, 1.0, COLOR_ALPHA), label='Right (Eastbound Motion) Dominance'),
        Patch(facecolor=(0.5, 0.0, 0.5, COLOR_ALPHA), label='Mixed Traffic (Left + Right Shares)')
    ]
    ax.legend(handles=legend_elements, loc='upper right', title="Color Blends Index")

    logging.info(f"Saving trend dashboard visualization to: {output_img}")
    plt.savefig(output_img, bbox_inches='tight', dpi=150)
    plt.close()
    logging.info("Visualization generated successfully!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Visualize aggregated tracking metrics colored by movement context ratios.")
    parser.add_argument("--yaml", required=True, help="Path targeting parsed movement stats.yaml dataset.")
    parser.add_argument("--output", default="mse_10min_trend.png", help="Filepath destination map for dashboard PNG.")
    
    args = parser.parse_args()
    visualize_mse_trends(args.yaml, args.output)
