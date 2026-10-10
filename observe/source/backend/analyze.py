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
import numpy as np
import cv2
import yaml

def calculate_stats(folder_path, bg_path, output_yaml="stats.yaml"):
    # 1. Load and process background image
    bg_img = cv2.imread(bg_path)
    if bg_img is None:
        raise FileNotFoundError(f"Static background image not found at {bg_path}")
    bg_gray = cv2.cvtColor(bg_img, cv2.COLOR_BGR2GRAY)
    
    # 2. Gather and sort target images
    # Supports common extensions; matches your format 20261009_210742.jpg
    extensions = ('*.jpg', '*.jpeg', '*.png')
    image_paths = []
    for ext in extensions:
        image_paths.extend(glob.glob(os.path.join(folder_path, ext)))
    image_paths.sort()  # Sort by filename
    
    stats_output = {}
    
    # 3. Iterate through images
    for i in range(1, len(image_paths)):
        prev_path = image_paths[i - 1]
        curr_path = image_paths[i]
        
        # Get filename without extension for YAML key
        curr_name = os.path.splitext(os.path.basename(curr_path))[0]
        
        # Read images
        prev_img = cv2.imread(prev_path)
        curr_img = cv2.imread(curr_path)
        
        if prev_img is None or curr_img is None:
            continue
            
        # Convert to grayscale
        prev_gray = cv2.cvtColor(prev_img, cv2.COLOR_BGR2GRAY)
        curr_gray = cv2.cvtColor(curr_img, cv2.COLOR_BGR2GRAY)
        
        # Apply blur to calculate Mean Squared Error (Volume of Change)
        prev_blur = cv2.GaussianBlur(prev_gray, (5, 5), 0)
        curr_blur = cv2.GaussianBlur(curr_gray, (5, 5), 0)
        
        # MSE formula
        mse = np.mean((prev_blur.astype(np.float32) - curr_blur.astype(np.float32)) ** 2)
        
        # Subtract background to find foreground components
        # Using absolute difference to capture changes in both directions
        prev_fg = cv2.absdiff(prev_gray, bg_gray)
        curr_fg = cv2.absdiff(curr_gray, bg_gray)
        
        # Threshold to filter noise and decide if "generally non-empty"
        _, prev_thresh = cv2.threshold(prev_fg, 25, 255, cv2.THRESH_BINARY)
        _, curr_thresh = cv2.threshold(curr_fg, 25, 255, cv2.THRESH_BINARY)
        
        # Check non-zero pixel counts to ensure both frames have moving objects
        prev_nonzero = cv2.countNonZero(prev_thresh)
        curr_nonzero = cv2.countNonZero(curr_thresh)
        
        # Define a minimum threshold (e.g., 50 pixels) to consider it "non-empty"
        min_pixels = 50
        if prev_nonzero > min_pixels and curr_nonzero > min_pixels:
            # Calculate Center of Mass using Image Moments
            M_prev = cv2.moments(prev_thresh)
            M_curr = cv2.moments(curr_thresh)
            
            # Guard against division by zero in moments
            if M_prev["m00"] != 0 and M_curr["m00"] != 0:
                cX_prev = M_prev["m10"] / M_prev["m00"]
                cY_prev = M_prev["m01"] / M_prev["m00"]
                
                cX_curr = M_curr["m10"] / M_curr["m00"]
                cY_curr = M_curr["m01"] / M_curr["m00"]
                
                # Calculate vector shifts
                dx = cX_curr - cX_prev
                dy = cY_curr - cY_prev
                
                length = math.sqrt(dx**2 + dy**2)
                
                # Calculate angle in degrees (0 to 360, excluding 360)
                # atan2 returns values in radians from -pi to pi
                # In standard image coordinates, positive y goes down
                angle_rad = math.atan2(dy, dx)
                angle_deg = math.degrees(angle_rad) % 360.0
            else:
                angle_deg, length = 0.0, 0.0
        else:
            # Output a zero vector if either frame is generally empty
            angle_deg, length = 0.0, 0.0
            
        # Store metadata (rounded for clean YAML formatting)
        stats_output[curr_name] = {
            "volume": float(round(mse, 4)),
            "direction": float(round(angle_deg, 2)),
            "length": float(round(length, 2))
        }
        
    # 4. Write to YAML file
    with open(output_yaml, 'w') as f:
        yaml.dump(stats_output, f, default_flow_style=False, sort_keys=False)
        
    print(f"Successfully generated metrics for {len(stats_output)} image pairs in {output_yaml}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Track movement metrics relative to a static background.")
    parser.add_argument("--folder", required=True, help="Path to the directory containing sequential images.")
    parser.add_argument("--bg", required=True, help="Path to the static background image.")
    parser.add_argument("--output", default="stats.yaml", help="Path to output YAML file.")
    
    args = parser.parse_args()
    calculate_stats(args.folder, args.bg, args.output)
