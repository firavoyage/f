# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "mediapipe==0.10.21",               # <-- Change this line to pin the version
#     "opencv-python-headless>=4.10.0.84",
#     "pyyaml>=6.0.1",
# ]
# ///

import os
import sys
import argparse
from pathlib import Path
import cv2
import yaml
import mediapipe as mp

# Supported image extensions
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.bmp', '.webp'}

def analyze_image(image_path: Path):
    """Analyzes a single image for faces and extracts bounding boxes and keypoints."""
    # Read the image using OpenCV
    image = cv2.imread(str(image_path))
    if image is None:
        print(f"⚠️  Skipping: Could not read {image_path.name}")
        return None

    # Get image dimensions
    h, w, _ = image.shape

    # Initialize MediaPipe Face Detection
    mp_face_detection = mp.solutions.face_detection
    
    faces_data = []

    # Using model_selection=1 (Full-range model, better for faces further away/general photos)
    with mp_face_detection.FaceDetection(model_selection=1, min_detection_confidence=0.5) as face_detection:
        # Convert the BGR image to RGB
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = face_detection.process(image_rgb)

        if results.detections:
            for idx, detection in enumerate(results.detections):
                bbox = detection.location_data.relative_bounding_box
                
                # Convert normalized percentages to absolute pixel integers
                x_min = int(bbox.xmin * w)
                y_min = int(bbox.ymin * h)
                box_w = int(bbox.width * w)
                box_h = int(bbox.height * h)
                
                # Extract keypoints mapping
                kp = detection.location_data.relative_keypoints
                keypoints_dict = {
                    "right_eye":     {"x": int(kp[0].x * w), "y": int(kp[0].y * h)},
                    "left_eye":      {"x": int(kp[1].x * w), "y": int(kp[1].y * h)},
                    "nose_tip":      {"x": int(kp[2].x * w), "y": int(kp[2].y * h)},
                    "mouth_center":  {"x": int(kp[3].x * w), "y": int(kp[3].y * h)},
                    "right_ear":     {"x": int(kp[4].x * w), "y": int(kp[4].y * h)},
                    "left_ear":      {"x": int(kp[5].x * w), "y": int(kp[5].y * h)},
                }

                # Construct a clean dictionary for this face
                face_info = {
                    "face_index": idx,
                    "confidence": float(round(detection.score[0], 4)),
                    "bounding_box": {
                        "pixel_xmin": x_min,
                        "pixel_ymin": y_min,
                        "pixel_width": box_w,
                        "pixel_height": box_h,
                    },
                    "keypoints": keypoints_dict
                }
                faces_data.append(face_info)

    # Document-wide metadata structural skeleton
    output_metadata = {
        "image_filename": image_path.name,
        "dimensions": {"width": w, "height": h},
        "faces_detected": len(faces_data),
        "faces": faces_data
    }

    return output_metadata

def main():
    parser = argparse.ArgumentParser(description="Analyze a flat folder of images for human faces and output metadata to companion YAML files.")
    parser.add_argument("folder", help="Path to the flat directory containing images.")
    args = parser.get_parse_args() if hasattr(parser, 'get_parse_args') else parser.parse_args()

    target_dir = Path(args.folder)
    if not target_dir.is_dir():
        print(f"❌ Error: '{target_dir}' is not a valid directory.")
        sys.exit(1)

    # Find all files with supported image extensions
    image_files = [f for f in target_dir.iterdir() if f.is_file() and f.suffix.lower() in IMAGE_EXTENSIONS]

    if not image_files:
        print(f"ℹ️  No images found matching extensions {IMAGE_EXTENSIONS} in '{target_dir}'")
        return

    print(f"🚀 Found {len(image_files)} images. Starting CPU face detection analysis...")

    for img_path in image_files:
        # Define output companion YAML file path (e.g., image.png -> image.yaml)
        yaml_path = img_path.with_suffix('.yaml')
        
        print(f"📸 Processing: {img_path.name} ... ", end="", flush=True)
        
        metadata = analyze_image(img_path)
        
        if metadata:
            # Write structured data cleanly into the YAML sidecar file
            with open(yaml_path, 'w', encoding='utf-8') as yf:
                yaml.dump(metadata, yf, default_flow_style=False, sort_keys=False)
            print(f"💾 Saved to {yaml_path.name} (Found {metadata['faces_detected']} face(s))")

    print("\n✅ Execution completed successfully.")

if __name__ == "__main__":
    main()
