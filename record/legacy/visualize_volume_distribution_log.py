# /// script
# dependencies = [
#     "matplotlib",
#     "numpy",
# ]
# ///

import os
import sys
import subprocess
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path

def extract_raw_db_array(file_path, target_fps=20):
    """Directly streams raw mono PCM byte chunks from FFmpeg."""
    cmd = [
        "ffmpeg", "-v", "error", "-i", str(file_path),
        "-ac", "1",                      # Mono
        "-ar", str(target_fps),          # 20 samples/sec
        "-f", "u8",                      # Raw 8-bit unsigned PCM
        "-"                              # Stream stdout
    ]
    
    try:
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        raw_bytes = result.stdout
        
        if len(raw_bytes) == 0:
            return None
            
        samples = np.frombuffer(raw_bytes, dtype=np.uint8).astype(float)
        amplitude = np.abs(samples - 128) / 128.0
        amplitude = np.clip(amplitude, 1e-4, 1.0)
        db_array = 20 * np.log10(amplitude)
        return db_array
        
    except Exception as e:
        print(f"  [X] System error decoding streaming data for {file_path.name}: {e}")
        return None

def generate_log_distribution_chart(file_path, db_array):
    """Generates a logarithmic Y-axis volume density distribution map."""
    if db_array is None or len(db_array) == 0:
        print(f"  [!] Skipped chart for {file_path.name}: Empty stream.")
        return
        
    plt.figure(figsize=(10, 6), facecolor='#121212')
    ax = plt.axes()
    ax.set_facecolor('#1e1e1e')
    
    # 130 bins between -65 and 0 gives an exact 0.5dB bin resolution width
    bins = np.linspace(-65, 0, 130)
    
    # Plot histogram with log=True to mathematically compress the vertical dominance
    plt.hist(db_array, bins=bins, color='#ff2e63', alpha=0.6, edgecolor='#ff5e84', 
             linewidth=0.5, density=False, log=True, label='Time Share Density (Log Scale)')
    
    # Standard threshold alignment marker overlays
    plt.axvline(x=-18.0, color='#21bf73', linestyle=':', alpha=0.7, label='Speech Sweet Spot Lower Limit (-18 dB)')
    plt.axvline(x=-45.0, color='#fe9801', linestyle=':', alpha=0.7, label='Ambient Noise Floor Limit (-45 dB)')
    
    # Styling, labels, and log titles
    plt.title(f"Logarithmic Volume Density Distribution: {file_path.name}", color='#ffffff', fontsize=13, pad=15)
    plt.xlabel("Volume Intensity Level (dBFS)", color='#aaaaaa', fontsize=11)
    plt.ylabel("Total Snapshots Count (Logarithmic Scaling)", color='#aaaaaa', fontsize=11)
    
    plt.xlim(-65, 2)
    plt.grid(True, color='#333333', linestyle='-', linewidth=0.5, which="both")
    
    # Dark Theme layout adjustments
    ax.tick_params(colors='#aaaaaa', which="both")
    for spine in ax.spines.values():
        spine.set_color('#333333')
        
    plt.legend(loc='upper right', facecolor='#1e1e1e', edgecolor='#333333', labelcolor='#ffffff')
    
    # Export explicitly named format target alongside parent asset code
    output_png = file_path.parent / f"{file_path.stem}.volume.log.png"
    plt.savefig(output_png, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"   SUCCESSFULLY GENERATED LOG DISTRIBUTION MAP: {output_png.name}")

def main():
    if len(sys.argv) < 2:
        print("Error: Target path parameter missing.")
        print("Usage: uv run volume_log_distribution.py /path/to/audio_folder")
        sys.exit(1)
        
    raw_path = sys.argv[1]
    folder_path = Path(os.path.expanduser(raw_path))
    
    if not folder_path.is_dir():
        print(f"Error: Target path '{folder_path}' is not a valid directory registry.")
        sys.exit(1)
        
    valid_extensions = {'.wav', '.mp3', '.m4a', '.flac', '.ogg'}
    
    print(f"Scanning directory: {folder_path.resolve()}\nProcessing logarithmic distribution profiles...")
    
    found_files = 0
    for file in folder_path.iterdir():
        if file.is_file() and file.suffix.lower() in valid_extensions:
            found_files += 1
            print(f"Processing log array map for: {file.name}")
            db_array = extract_raw_db_array(file)
            generate_log_distribution_chart(file, db_array)
            
    if found_files == 0:
        print("No compatible audio files found.")

if __name__ == "__main__":
    main()
