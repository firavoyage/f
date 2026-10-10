# /// script
# dependencies = [
#   "opencv-python-headless",
#   "numpy",
#   "matplotlib",
# ]
# ///

import os
import glob
import argparse
import logging
import numpy as np
import cv2
import matplotlib.pyplot as plt

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def analyze_threshold_distribution(folder_path, bg_path, output_img="threshold_diagnostic.png", scale_factor=0.5):
    logging.info("Initializing threshold diagnostic scan...")
    
    # 1. Load and process background
    bg_img = cv2.imread(bg_path)
    if bg_img is None:
        raise FileNotFoundError(f"Static background image not found at {bg_path}")
    bg_gray = cv2.cvtColor(bg_img, cv2.COLOR_BGR2GRAY)
    if scale_factor != 1.0:
        bg_gray = cv2.resize(bg_gray, (0, 0), fx=scale_factor, fy=scale_factor, interpolation=cv2.INTER_AREA)
        
    total_pixels = bg_gray.size

    # 2. Gather images
    extensions = ('*.jpg', '*.jpeg', '*.png')
    image_paths = []
    for ext in extensions:
        image_paths.extend(glob.glob(os.path.join(folder_path, ext)))
    image_paths.sort()
    
    total_images = len(image_paths)
    logging.info(f"Found {total_images} images to analyze.")
    
    # We will track the count of non-zero foreground pixels per frame
    # using a standard conservative pixel delta threshold of 25
    pixel_counts = []
    
    # 3. Process differences
    for i, path in enumerate(image_paths):
        img = cv2.imread(path)
        if img is None:
            continue
            
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        if scale_factor != 1.0:
            gray = cv2.resize(gray, (0, 0), fx=scale_factor, fy=scale_factor, interpolation=cv2.INTER_AREA)
            
        # Absolute difference against background
        diff = cv2.absdiff(gray, bg_gray)
        
        # Segment foreground pixels that changed by more than 25 grayscale units
        _, thresh = cv2.threshold(diff, 25, 255, cv2.THRESH_BINARY)
        nonzero_count = cv2.countNonZero(thresh)
        pixel_counts.append(nonzero_count)
        
        if (i + 1) % 500 == 0 or i == 0:
            logging.info(f"Scanned {i + 1}/{total_images} frames...")

    pixel_counts = np.array(pixel_counts)
    
    # 4. Generate Visual Distributions
    logging.info("Generating distribution plots...")
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 6))
    fig.suptitle("Foreground Pixel Count Distribution Diagnostic", fontsize=14, fontweight='bold')
    
    # Left Plot: Raw Pixel Count Histogram
    ax1.hist(pixel_counts, bins=100, color='#2ca02c', alpha=0.7, edgecolor='black', linewidth=0.5)
    ax1.set_title("Histogram of Foreground Pixel Counts", fontsize=12, fontweight='bold')
    ax1.set_xlabel("Number of Moving Pixels Detected (after absdiff threshold 25)", fontsize=10)
    ax1.set_ylabel("Frame Count", fontsize=10)
    ax1.grid(True, linestyle='--', alpha=0.5)
    
    # Right Plot: Cumulative Sorted Sequence (Helps pinpoint the cutoff valley)
    sorted_counts = np.sort(pixel_counts)
    ax2.plot(sorted_counts, color='#ff7f0e', linewidth=2)
    ax2.set_title("Sorted Frame Pixel Counts (S-Curve Profile)", fontsize=12, fontweight='bold')
    ax2.set_xlabel("Frames (Sorted by Activity Level)", fontsize=10)
    ax2.set_ylabel("Number of Moving Pixels", fontsize=10)
    ax2.grid(True, linestyle='--', alpha=0.5)
    
    # Calculate and log summary benchmarks
    logging.info(f"Min non-zero pixels found: {int(np.min(pixel_counts))}")
    logging.info(f"Max non-zero pixels found: {int(np.max(pixel_counts))}")
    logging.info(f"Median non-zero pixels found: {int(np.median(pixel_counts))}")
    
    # Save visualization dashboard
    plt.savefig(output_img, bbox_inches='tight', dpi=150)
    plt.close()
    logging.info(f"Diagnostic chart saved to {output_img}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Analyze foreground metrics to establish non-empty cutoff criteria.")
    parser.add_argument("--folder", required=True, help="Path containing sequential targets.")
    parser.add_argument("--bg", required=True, help="Path targeting background model image.")
    parser.add_argument("--output", default="threshold_diagnostic.png", help="Destination map for output PNG chart.")
    parser.add_argument("--scale", type=float, default=0.5, help="Internal frame processing downscale ratio.")
    
    args = parser.parse_args()
    analyze_threshold_distribution(args.folder, args.bg, args.output, args.scale)
