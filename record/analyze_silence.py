# /// script
# dependencies = [
#     "tabulate",
# ]
# ///

import os
import sys
import subprocess
import re
from pathlib import Path
from tabulate import tabulate

# Configurable constants for "At-No-Cost" Silence Removal
# -50dB catches room tone/breathing. 2.0s ensures we don't count natural conversational pauses.
SILENCE_THRESH_DB = -50
SILENCE_MIN_DURATION_SEC = 2.0

def get_audio_duration(file_path):
    """Gets total duration of an audio file using ffprobe."""
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:noclipping=1", str(file_path)
    ]
    try:
        result = subprocess.run(cmd, stdout=subprocess.run, stderr=subprocess.PIPE, text=True, check=True, capture_output=True)
        return float(result.stdout.strip())
    except Exception:
        return 0.0

def analyze_silence(file_path):
    """Runs ffmpeg silencedetect to sum up total silent periods."""
    cmd = [
        "ffmpeg", "-i", str(file_path),
        "-af", f"silencedetect=noise={SILENCE_THRESH_DB}dB:d={SILENCE_MIN_DURATION_SEC}",
        "-f", "null", "-"
    ]
    
    # ffmpeg outputs filter stats to stderr
    result = subprocess.run(cmd, stderr=subprocess.PIPE, text=True)
    stderr_output = result.stderr

    # Regex patterns to extract technical encoding stats and silence intervals
    duration_match = re.search(r"Duration:\s*(\d+):(\d+):(\d+\.\d+)", stderr_output)
    
    # Calculate total duration from standard output fallback if ffprobe fails
    total_duration = 0.0
    if duration_match:
        h, m, s = map(float, duration_match.groups())
        total_duration = h * 3600 + m * 60 + s
    else:
        total_duration = get_audio_duration(file_path)

    if total_duration == 0.0:
        return None

    # Find all occurrences of silence_duration: X.XXXX
    silence_durations = re.findall(r"silence_duration:\s*(\d+\.?\d*)", stderr_output)
    total_silence = sum(map(float, silence_durations))

    # Calculate percentages
    removable_pct = (total_silence / total_duration) * 100
    
    return {
        "filename": file_path.name,
        "total_duration": round(total_duration, 2),
        "silence_duration": round(total_silence, 2),
        "removable_pct": round(removable_pct, 2)
    }

def main():
    if len(sys.argv) < 2:
        print("Error: Please provide a folder path to analyze.")
        print("Usage: uv run analyze_silence.py /path/to/folder")
        sys.exit(1)

    folder_path = Path(sys.argv[1])
    if not folder_path.is_dir():
        print(f"Error: '{folder_path}' is not a valid directory.")
        sys.exit(1)

    # Supported extension extensions
    valid_extensions = {'.wav', '.mp3', '.m4a', '.flac', '.ogg', '.aac'}
    
    table_data = []
    print(f"Scanning target directory: {folder_path}...\n")

    for file in folder_path.iterdir():
        if file.is_file() and file.suffix.lower() in valid_extensions:
            stats = analyze_silence(file)
            if stats:
                table_data.append([
                    stats["filename"],
                    f"{stats['total_duration']}s",
                    f"{stats['silence_duration']}s",
                    f"{stats['removable_pct']}%"
                ])

    if not table_data:
        print("No valid audio files found in this folder.")
        return

    headers = ["Filename", "Total Duration", "Total Silence Detected", "Removable Data (%)"]
    print(tabulate(table_data, headers=headers, tablefmt="grid"))

if __name__ == "__main__":
    main()
