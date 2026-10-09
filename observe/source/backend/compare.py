# /// script
# dependencies = [
#   "opencv-python-headless",
#   "numpy",
# ]
# ///
import argparse
import json
import sys
import cv2
import numpy as np

def calculate_motion_scores(img1_path, img2_path):
    # Load images in Grayscale
    img1 = cv2.imread(img1_path, cv2.IMREAD_GRAYSCALE)
    img2 = cv2.imread(img2_path, cv2.IMREAD_GRAYSCALE)
    
    if img1 is None or img2 is None:
        return {"error": "Could not load one or both images. Check file paths."}

    # Apply heavy Gaussian Blur to eliminate high-frequency noise
    blur1 = cv2.GaussianBlur(img1, (21, 21), 0)
    blur2 = cv2.GaussianBlur(img2, (21, 21), 0)

    # Method A: Blur + MSE
    diff = blur1.astype(np.float32) - blur2.astype(np.float32)
    mse_score = float(np.mean(diff ** 2))

    # Method B: Blur + Threshold
    abs_diff = cv2.absdiff(blur1, blur2)
    _, thresh = cv2.threshold(abs_diff, 25, 255, cv2.THRESH_BINARY)
    
    white_pixels = int(np.sum(thresh == 255))
    total_pixels = thresh.size
    motion_percentage_score = (white_pixels / total_pixels) * 100

    return {
        "mse_score": round(mse_score, 2),
        "motion_percentage": round(motion_percentage_score, 2)
    }

if __name__ == "__main__":
    # Set up CLI argument parsing
    parser = argparse.ArgumentParser(description="Calculate motion scores between two consecutive photos.")
    parser.add_argument("image1", type=str, help="Path to the first image frame")
    parser.add_argument("image2", type=str, help="Path to the second image frame")
    
    args = parser.parse_args()

    # Calculate and output results as JSON to stdout
    results = calculate_motion_scores(args.image1, args.image2)
    
    if "error" in results:
        print(json.dumps(results), file=sys.stderr)
        sys.exit(1)
        
    print(json.dumps(results))
