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

def extract_volume_envelope(file_path, target_fps=10):
    """
    Directly reads raw PCM amplitude streams from ffmpeg.
    100% immune to metadata text changes.
    """
    # Convert audio on-the-fly to a raw 8-bit mono stream at 10 samples per second
    cmd = [
        "ffmpeg", "-v", "error", "-i", str(file_path),
        "-ac", "1",                      # Force Mono
        "-ar", str(target_fps),          # Downsample to 10 samples per second
        "-f", "u8",                      # Output raw unsigned 8-bit integers (0 to 255)
        "-"                              # Pipe directly to stdout
    ]
    
    try:
        # Read the raw byte data from standard output stream
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        raw_bytes = result.stdout
        
        if len(raw_bytes) == 0:
            return None
            
        # Convert raw bytes into a numpy array of integers
        samples = np.frombuffer(raw_bytes, dtype=np.uint8).astype(float)
        
        # Center the data and scale it down to a 0.0 to 1.0 amplitude threshold
        # (Since u8 goes 0-255, 128 is "silence")
        amplitude = np.abs(samples - 128) / 128.0
        
        # Avoid log(0) errors by forcing a microscopic baseline floor
        amplitude = np.clip(amplitude, 1e-4, 1.0)
        
        # Mathematically translate raw amplitude numbers directly into decibels (dBFS)
        db_envelope = 20 * np.log10(amplitude)
        
        return db_envelope
    except Exception as e:
        print(f"  [X] System pipeline block for {file_path.name}: {e}")
        return None

def generate_waveform_chart(file_path, db_envelope, target_fps=10):
    """Generates a color-coded volume-over-time PNG visualization next to source asset."""
    if db_envelope is None or len(db_envelope) == 0:
        print(f"  [!] Skipped chart creation for {file_path.name}: Empty buffer stream.")
        return
    
    time_axis = np.arange(len(db_envelope)) / target_fps
    
    plt.figure(figsize=(12, 5), facecolor='#121212')
    ax = plt.axes()
    ax.set_facecolor('#1e1e1e')
    
    # Plot line vector profile
    plt.plot(time_axis, db_envelope, color='#00adb5', linewidth=1.2, label='Volume Profile')
    
    # Static boundary threshold lines 
    plt.axhline(y=-0.1, color='#ff2e63', linestyle='--', alpha=0.8, label='Clipping Limit (0 dB)')
    plt.axhline(y=-18.0, color='#21bf73', linestyle=':', alpha=0.7, label='Speech Region (-10 to -18 dB)')
    plt.axhline(y=-45.0, color='#fe9801', linestyle=':', alpha=0.7, label='Ambient Noise Floor Limit (-45 dB)')
    
    # Color Block Zone Overlays
    plt.axhspan(-6.0, 0, color='#ff2e63', alpha=0.15)  # Peak Danger Zone
    plt.axhspan(-18.0, -10.0, color='#21bf73', alpha=0.1)  # Voice Intelligibility Zone
    plt.axhspan(-90.0, -50.0, color='#6c5ce7', alpha=0.1)  # Noise Floor Suppression Zone
    
    plt.title(f"Volume Statistics Profile: {file_path.name}", color='#ffffff', fontsize=14, pad=15)
    plt.xlabel("Time (Seconds)", color='#aaaaaa', fontsize=11)
    plt.ylabel("Volume Intensity (dBFS)", color='#aaaaaa', fontsize=11)
    
    plt.ylim(-60, 5) 
    plt.grid(True, color='#333333', linestyle='-', linewidth=0.5)
    
    ax.tick_params(colors='#aaaaaa')
    for spine in ax.spines.values():
        spine.set_color('#333333')
        
    plt.legend(loc='lower left', facecolor='#1e1e1e', edgecolor='#333333', labelcolor='#ffffff')
    
    output_png = file_path.with_suffix('.png')
    plt.savefig(output_png, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"   SUCCESSFULLY GENERATED IMAGE: {output_png.resolve()}")

def main():
    if len(sys.argv) < 2:
        print("Error: Missing target parameter.")
        print("Usage: uv run visualize_volume.py /absolute/path/to/audio_folder")
        sys.exit(1)
        
    raw_path = sys.argv[1]
    folder_path = Path(os.path.expanduser(raw_path))
    
    if not folder_path.is_dir():
        print(f"Error: Target path '{folder_path}' is not a valid directory registry.")
        sys.exit(1)
        
    valid_extensions = {'.wav', '.mp3', '.m4a', '.flac', '.ogg'}
    
    print(f"Scanning directory node: {folder_path.resolve()}\nProcessing streams...")
    
    found_files = 0
    for file in folder_path.iterdir():
        if file.is_file() and file.suffix.lower() in valid_extensions:
            found_files += 1
            print(f"Analyzing stream envelope: {file.name}")
            db_envelope = extract_volume_envelope(file)
            generate_waveform_chart(file, db_envelope)
            
    if found_files == 0:
        print("No compatible audio encoding formats found (.wav, .mp3, .m4a, .flac).")

if __name__ == "__main__":
    main()
