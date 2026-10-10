# /// script
# dependencies = [
#   "matplotlib",
#   "pyyaml",
# ]
# ///

import argparse
import logging
import math
import os
import matplotlib.pyplot as plt
import yaml

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def visualize_stats(yaml_path, output_img="motion_dashboard.png"):
    logging.info(f"Loading statistical data from: {yaml_path}")
    
    # 1. Parse YAML dataset
    if not os.path.exists(yaml_path):
        raise FileNotFoundError(f"Target YAML file not found at {yaml_path}")
        
    with open(yaml_path, 'r') as f:
        data = yaml.safe_load(f)
        
    if not data:
        logging.error("The provided YAML file is empty.")
        return

    # Extract timeline keys and metrics
    timestamps = list(data.keys())
    volumes = [metrics["volume"] for metrics in data.values()]
    directions = [metrics["direction"] for metrics in data.values()]
    lengths = [metrics["length"] for metrics in data.values()]
    
    total_points = len(timestamps)
    logging.info(f"Successfully loaded metrics for {total_points} timestamps.")

    # 2. Build Dashboard Layout using GridSpec
    fig = plt.figure(figsize=(15, 10))
    fig.suptitle(f"Motion Tracker Analytics Dashboard\nSource: {os.path.basename(yaml_path)}", fontsize=16, fontweight='bold')
    
    gs = fig.add_gridspec(2, 2, hspace=0.3, wspace=0.25)
    
    # Generate tick spacing to prevent cluttered X-axis labels
    step = max(1, total_points // 8)
    visible_ticks = timestamps[::step]

    # --- Plot 1: Volume of Change Timeline ---
    ax1 = fig.add_subplot(gs[0, 0])
    ax1.plot(timestamps, volumes, color='#1f77b4', linewidth=1.5, label='Volume (MSE)')
    ax1.set_title("Volume of Change Over Time (MSE)", fontsize=12, fontweight='semibold')
    ax1.set_xlabel("Timestamp Identifier", fontsize=10)
    ax1.set_ylabel("Mean Squared Error (MSE)", fontsize=10)
    ax1.set_xticks(visible_ticks)
    ax1.set_xticklabels(visible_ticks, rotation=35, ha='right')
    ax1.grid(True, linestyle='--', alpha=0.5)

    # --- Plot 2: Centroid Shift Length Timeline ---
    ax2 = fig.add_subplot(gs[1, 0])
    ax2.plot(timestamps, lengths, color='#d62728', linewidth=1.5, label='Shift Length')
    ax2.set_title("Centroid Shift Distance Over Time", fontsize=12, fontweight='semibold')
    ax2.set_xlabel("Timestamp Identifier", fontsize=10)
    ax2.set_ylabel("Distance (Native Pixels)", fontsize=10)
    ax2.set_xticks(visible_ticks)
    ax2.set_xticklabels(visible_ticks, rotation=35, ha='right')
    ax2.grid(True, linestyle='--', alpha=0.5)

    # --- Plot 3: Polar Motion Vector Map (Direction vs Length) ---
    ax3 = fig.add_subplot(gs[:, 1], projection='polar')
    
    # Convert degrees to radians for matplotlib polar projections
    angles_rad = [math.radians(d) for d in directions]
    
    # Filter out stationary vectors (length = 0) to highlight clean directional trends
    active_angles = [a for a, l in zip(angles_rad, lengths) if l > 0]
    active_lengths = [l for l in lengths if l > 0]
    
    # Map polar scatter plot
    scatter = ax3.scatter(active_angles, active_lengths, c=active_lengths, cmap='viridis', alpha=0.75, edgecolors='none')
    
    # Adjust polar configuration to align to default image orientations
    ax3.set_theta_zero_location("E")  # 0 Degrees points Right (Positive X)
    ax3.set_theta_direction(1)       # Counter-clockwise configuration
    
    ax3.set_title("Motion Direction & Magnitude Distribution", fontsize=12, fontweight='semibold', pad=15)
    cbar = fig.colorbar(scatter, ax=ax3, orientation='horizontal', pad=0.1)
    cbar.set_label('Shift Magnitude Vector (Pixels)', fontsize=10)

    # 3. Finalize Layout and Save to disk
    logging.info(f"Saving dashboard visualization to: {output_img}")
    plt.savefig(output_img, bbox_inches='tight', dpi=150)
    plt.close()
    
    logging.info("Dashboard rendering complete!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Visualize output structures compiled from tracking pipelines.")
    parser.add_argument("--yaml", required=True, help="Path targeting parsed movement stats.yaml dataset.")
    parser.add_argument("--output", default="motion_dashboard.png", help="Filepath destination map for dashboard PNG.")
    
    args = parser.parse_args()
    visualize_stats(args.yaml, args.output)
