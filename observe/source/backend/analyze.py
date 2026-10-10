# /// script
# dependencies = [
#   "opencv-python-headless",
#   "numpy",
#   "pyyaml",
# ]
# ///

import os
import glob
import math
import argparse
import logging
import numpy as np
import cv2
import yaml

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def calculate_stats(folder_path, bg_path, output_yaml="stats.yaml", scale_factor=0.5):
    logging.info("Starting processing workflow with custom bimodal thresholds...")
    
    # 1. Load and process background image
    bg_img = cv2.imread(bg_path)
    if bg_img is None:
        raise FileNotFoundError(f"Static background image not found at {bg_path}")
        
    bg_gray = cv2.cvtColor(bg_img, cv2.COLOR_BGR2GRAY)
    if scale_factor != 1.0:
        bg_gray = cv2.resize(bg_gray, (0, 0), fx=scale_factor, fy=scale_factor, interpolation=cv2.INTER_AREA)
    
    # 2. Gather and sort target images
    extensions = ('*.jpg', '*.jpeg', '*.png')
    image_paths = []
    for ext in extensions:
        image_paths.extend(glob.glob(os.path.join(folder_path, ext)))
    
    image_paths.sort()  # Sort chronologically by filename
    total_images = len(image_paths)
    logging.info(f"Found {total_images} images to process in targets directory.")
    
    if total_images < 2:
        logging.warning("Not enough images found to compute sequential shifts (minimum 2 required).")
        return

    stats_output = {}
    
    # Define a clean fallback threshold based on your turning point diagnostics
    # Setting base native threshold to 35,000 pixels based on the 25k-50k blank gap
    BASE_THRESHOLD_CLEAN = 35000
    min_pixels = int(BASE_THRESHOLD_CLEAN * (scale_factor ** 2))
    logging.info(f"Applying adjusted internal pixel threshold filter: {min_pixels} pixels (at scale factor {scale_factor})")

    # Helper function to prep frame states
    def process_frame(path):
        img = cv2.imread(path)
        if img is None:
            return None, None
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        if scale_factor != 1.0:
            gray = cv2.resize(gray, (0, 0), fx=scale_factor, fy=scale_factor, interpolation=cv2.INTER_AREA)
        blur = cv2.GaussianBlur(gray, (5, 5), 0)
        return gray, blur

    # Prime processing pipeline with frame index zero
    logging.info(f"Loading initial base frame: {os.path.basename(image_paths[0])}")
    prev_gray, prev_blur = process_frame(image_paths[0])
    
    # 3. Iterate through images
    for i in range(1, total_images):
        curr_path = image_paths[i]
        curr_name, _ = os.path.splitext(os.path.basename(curr_path))
        
        # Enforce writing keys explicitly as strings to prevent PyYAML float/date inference bugs
        yaml_key = str(curr_name)
        
        # Read and compute current frame elements
        curr_gray, curr_blur = process_frame(curr_path)
        
        if curr_gray is None or prev_gray is None:
            logging.warning(f"Skipping unreadable frame index: {i} ({os.path.basename(curr_path)})")
            prev_gray, prev_blur = curr_gray, curr_blur
            continue
            
        if i % 500 == 0 or i == 1:
            logging.info(f"Processing progress: {i}/{total_images-1} frames handled...")

        # Calculate Mean Squared Error (Volume of Change)
        mse = np.mean((prev_blur.astype(np.float32) - curr_blur.astype(np.float32)) ** 2)
        
        # Subtract background to isolate foreground masks
        prev_fg = cv2.absdiff(prev_gray, bg_gray)
        curr_fg = cv2.absdiff(curr_gray, bg_gray)
        
        # Apply standard binary thresholding to clean noise
        _, prev_thresh = cv2.threshold(prev_fg, 25, 255, cv2.THRESH_BINARY)
        _, curr_thresh = cv2.threshold(curr_fg, 25, 255, cv2.THRESH_BINARY)
        
        prev_nonzero = cv2.countNonZero(prev_thresh)
        curr_nonzero = cv2.countNonZero(curr_thresh)
        
        # Bimodal verification filter
        if prev_nonzero > min_pixels and curr_nonzero > min_pixels:
            M_prev = cv2.moments(prev_thresh)
            M_curr = cv2.moments(curr_thresh)
            
            if M_prev["m00"] != 0 and M_curr["m00"] != 0:
                cX_prev = M_prev["m10"] / M_prev["m00"]
                cY_prev = M_prev["m01"] / M_prev["m00"]
                
                cX_curr = M_curr["m10"] / M_curr["m00"]
                cY_curr = M_curr["m01"] / M_curr["m00"]
                
                # Rescale shifts back up to real native pixel units
                dx = (cX_curr - cX_prev) / scale_factor
                dy = (cY_curr - cY_prev) / scale_factor
                
                length = math.sqrt(dx**2 + dy**2)
                angle_rad = math.atan2(dy, dx)
                angle_deg = math.degrees(angle_rad) % 360.0
            else:
                angle_deg, length = 0.0, 0.0
        else:
            # Drop inside blank baseline zone, assign safe null vector values
            angle_deg, length = 0.0, 0.0
            
        # Store metadata
        stats_output[yaml_key] = {
            "volume": float(round(mse, 4)),
            "direction": float(round(angle_deg, 2)),
            "length": float(round(length, 2))
        }
        
        # PIPELINE PROMOTION
        prev_gray, prev_blur = curr_gray, curr_blur
        
    # 4. Write data to disk
    logging.info(f"Writing calculated statistics to output file: {output_yaml}")
    with open(output_yaml, 'w') as f:
        # sort_keys=False preserves chronological file structure sorting
        yaml.dump(stats_output, f, default_flow_style=False, sort_keys=False)
        
    logging.info("Processing job successfully finalized!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Highly optimized structural shift analytics pipeline using inline UV context.")
    parser.add_argument("--folder", required=True, help="Path containing sequential targets.")
    parser.add_argument("--bg", required=True, help="Path targeting background model image.")
    parser.add_argument("--output", default="stats.yaml", help="Path map destination path for YAML output.")
    parser.add_argument("--scale", type=float, default=0.5, help="Internal frame processing downscale ratio (default: 0.5).")
    
    args = parser.parse_args()
    calculate_stats(args.folder, args.bg, args.output, args.scale)
