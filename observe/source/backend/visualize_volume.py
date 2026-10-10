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

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def parse_timestamp(key):
    try:
        return datetime.strptime(str(key), "%Y%m%d_%H%M%S")
    except ValueError:
        return None

def visualize_mse_trends(yaml_path, output_img="mse_minute_trend.png"):
    logging.info(f"Loading data from: {yaml_path}")
    if not os.path.exists(yaml_path):
        raise FileNotFoundError(f"Target YAML file not found at {yaml_path}")
        
    with open(yaml_path, 'r') as f:
        data = yaml.safe_load(f)
        
    if not data:
        logging.error("The provided YAML data is empty.")
        return

    # 1. Group frames into 1-minute buckets
    buckets = {}
    for key, metrics in data.items():
        dt = parse_timestamp(key)
        if dt is None:
            continue
        
        # Floor to the minute
        minute_ts = dt.replace(second=0, microsecond=0)
        if minute_ts not in buckets:
            buckets[minute_ts] = {"volumes": [], "directions": [], "lengths": []}
            
        buckets[minute_ts]["volumes"].append(metrics["volume"])
        buckets[minute_ts]["directions"].append(metrics["direction"])
        buckets[minute_ts]["lengths"].append(metrics["length"])

    sorted_minutes = sorted(buckets.keys())
    if not sorted_minutes:
        logging.error("No valid timestamp identifiers could be parsed for aggregation.")
        return

    logging.info(f"Aggregated dataset into {len(sorted_minutes)} distinct 1-minute intervals.")

    minute_mses = []
    colors = []

    # 2. Analyze direction distributions per minute to generate dynamic blends
    for min_ts in sorted_minutes:
        bucket = buckets[min_ts]
        avg_mse = np.mean(bucket["volumes"])
        minute_mses.append(avg_mse)
        
        total_frames = len(bucket["lengths"])
        static_count = 0
        left_count = 0
        right_count = 0
        
        for deg, length in zip(bucket["directions"], bucket["lengths"]):
            if length == 0:
                static_count += 1
            else:
                # Classify horizontal directions
                if (0 <= deg <= 45) or (315 <= deg < 360):
                    right_count += 1
                elif (135 <= deg <= 225):
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
        colors.append((r, g, b, 0.85))  # RGBA color profile

    # 3. Plotting the colored timeline
    fig, ax = plt.subplots(figsize=(16, 7))
    fig.suptitle("Minute-Averaged MSE Timeline with Directional Color Coding", fontsize=14, fontweight='bold')
    
    # Draw bars stretching across 1-minute width dimensions
    widths = [timedelta(minutes=1) for _ in range(len(sorted_minutes))]
    
    bars = ax.bar(sorted_minutes, minute_mses, width=widths, color=colors, edgecolor='none', align='edge')
    
    ax.set_ylabel("Average Mean Squared Error (MSE)", fontsize=11)
    ax.set_xlabel("Time Timeline", fontsize=11)
    ax.grid(True, linestyle='--', alpha=0.3)
    
    # Format dates beautifully along X-axis
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%m/%d %H:%M'))
    fig.autofmt_xdate(bottom=0.2, rotation=30, ha='right')
    
    # 4. Construct a custom visual color legend manually
    from matplotlib.patches import Patch
    legend_elements = [
        Patch(facecolor=(0.0, 1.0, 0.0, 0.85), label='Static (No Movement) dominance'),
        Patch(facecolor=(1.0, 0.0, 0.0, 0.85), label='Left (Westbound Motion) dominance'),
        Patch(facecolor=(0.0, 0.0, 1.0, 0.85), label='Right (Eastbound Motion) dominance'),
        Patch(facecolor=(0.5, 0.0, 0.5, 0.85), label='Mixed Traffic (Left + Right shares)')
    ]
    ax.legend(handles=legend_elements, loc='upper right', title="Color Blends Index")

    logging.info(f"Saving trend dashboard visualization to: {output_img}")
    plt.savefig(output_img, bbox_inches='tight', dpi=150)
    plt.close()
    logging.info("Visualization generated successfully!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Visualize aggregated tracking metrics colored by movement context ratios.")
    parser.add_argument("--yaml", required=True, help="Path targeting parsed movement stats.yaml dataset.")
    parser.add_argument("--output", default="mse_minute_trend.png", help="Filepath destination map for dashboard PNG.")
    
    args = parser.parse_args()
    visualize_mse_trends(args.yaml, args.output)
