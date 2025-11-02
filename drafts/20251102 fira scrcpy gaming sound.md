# 1

how to use wasd to play a game on scrcpy on ubuntu, while binding some keys to a certain position.

---

To use WASD keys in scrcpy on Ubuntu while binding other keys to specific screen positions, you have a few options:

## Method 1: Using scrcpy with ADB key events

First, install scrcpy if you haven't:

```bash
sudo apt update
sudo apt install scrcpy
```

Run scrcpy with keyboard control:

```bash
scrcpy --keyboard
```

Then you can create a script to map keys:

## Method 2: Python script with pynput and ADB

Create a Python script that captures keyboard input and sends corresponding touch events:

```python
#!/usr/bin/env python3
import subprocess
from pynput import keyboard

# Define your bindings
KEY_BINDINGS = {
    # WASD for movement
    'w': '100,500',  # Up position
    'a': '50,550',   # Left position
    's': '100,600',  # Down position
    'd': '150,550',  # Right position

    # Additional bindings
    'j': '300,800',  # Jump button
    'k': '400,800',  # Attack button
    'space': '500,800'  # Special action
}

def send_tap(x, y):
    """Send tap event to device via ADB"""
    subprocess.run(['adb', 'shell', 'input', 'tap', str(x), str(y)])

def on_press(key):
    try:
        key_char = key.char
        if key_char in KEY_BINDINGS:
            x, y = KEY_BINDINGS[key_char].split(',')
            send_tap(int(x), int(y))
            print(f"Sent tap to ({x}, {y}) for key '{key_char}'")
    except AttributeError:
        # Special keys
        if key == keyboard.Key.space:
            x, y = KEY_BINDINGS['space'].split(',')
            send_tap(int(x), int(y))

def on_release(key):
    if key == keyboard.Key.esc:
        # Stop listener
        return False

# Start listening
with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    print("Keyboard listener started. Press ESC to stop.")
    listener.join()
```

**Requirements:**

```bash
pip install pynput
```

## Method 3: Using xdotool and scrcpy together

Create a bash script that monitors keys and sends taps:

```bash
#!/bin/bash

# Function to send tap via ADB
send_tap() {
    adb shell input tap $1 $2
}

echo "WASD controller started. Press Ctrl+C to stop."

# Monitor keys (you'll need to adapt this based on your window focus)
while true; do
    read -rsn1 key
    case $key in
        w) send_tap 100 500 ;;  # Up
        a) send_tap 50 550 ;;   # Left
        s) send_tap 100 600 ;;  # Down
        d) send_tap 150 550 ;;  # Right
        j) send_tap 300 800 ;;  # Action 1
        k) send_tap 400 800 ;;  # Action 2
        q) break ;;
    esac
done
```

## Method 4: Advanced Python script with key combinations

```python
#!/usr/bin/env python3
import subprocess
from pynput import keyboard
import threading

class GameController:
    def __init__(self):
        self.active_keys = set()
        self.bindings = {
            'w': '100,500',    # Move up
            'a': '50,550',     # Move left
            's': '100,600',    # Move down
            'd': '150,550',    # Move right
            'f': '700,800',    # Interact
            '1': '300,100',    # Skill 1
            '2': '400,100',    # Skill 2
        }

    def send_tap(self, coords):
        x, y = coords.split(',')
        subprocess.Popen(['adb', 'shell', 'input', 'tap', x, y])

    def on_press(self, key):
        try:
            key_char = key.char
            if key_char in self.bindings:
                self.active_keys.add(key_char)
                self.send_tap(self.bindings[key_char])
        except AttributeError:
            pass

    def on_release(self, key):
        try:
            key_char = key.char
            if key_char in self.active_keys:
                self.active_keys.remove(key_char)
        except AttributeError:
            pass

        if key == keyboard.Key.esc:
            return False

    def start(self):
        with keyboard.Listener(on_press=self.on_press, on_release=self.on_release) as listener:
            print("Game controller started. Press ESC to stop.")
            print("Bindings:", self.bindings)
            listener.join()

if __name__ == "__main__":
    controller = GameController()
    controller.start()
```

## Usage instructions:

1. **Enable USB debugging** on your Android device
2. **Connect your device** via USB
3. **Authorize the connection** on your device
4. **Run the script** in one terminal:
   ```bash
   python3 game_controller.py
   ```
5. **Make sure scrcpy window is focused** when pressing keys

## Finding screen coordinates:

To find the exact coordinates for your bindings:

```bash
adb shell getevent -l
```

Or enable "Pointer location" in Developer Options on your Android device.

The coordinates in the examples are placeholders - you'll need to replace them with the actual coordinates from your game's interface.

# 2

how to use the laptop's microphone and speaker for sounds.

---

To use your laptop's microphone and speaker with scrcpy for audio, you have several options:

## Method 1: Using sndcpy (Recommended)

**sndcpy** is the official audio forwarding solution for scrcpy:

### Installation:

```bash
# Download sndcpy
wget https://github.com/rom1v/sndcpy/releases/download/v2.0/sndcpy-v2.0.zip
unzip sndcpy-v2.0.zip
cd sndcpy

# Make it executable
chmod +x sndcpy
```

### Usage:

```bash
# Install the APK on your device
./sndcpy

# Or specify custom APK
adb install sndcpy.apk

# Run sndcpy
./sndcpy
```

**Note:** sndcpy requires Android 10+ and may not work with all apps.

## Method 2: Using usbaudio (Alternative)

```bash
# Clone and build usbaudio
git clone https://github.com/rom1v/usbaudio
cd usbaudio
./build.sh

# Install on device
adb install app/build/outputs/apk/release/app-release.apk

# Start audio forwarding
adb shell am start -n com.rom1v.usbaudio/.MainActivity
```

## Method 3: Using PulseAudio Loopback

This method forwards audio through PulseAudio:

### Step 1: Create null sinks and loopbacks

```bash
# Create a null sink for Android audio
pactl load-module module-null-sink sink_name=android_out sink_properties=device.description=Android-Output

# Create a null source for Android microphone
pactl load-module module-null-sink sink_name=android_in sink_properties=device.description=Android-Input
pactl load-module module-virtual-source source_name=android_mic master=android_in.monitor

# Create loopback from Android output to speakers
pactl load-module module-loopback source=android_out.monitor sink=@DEFAULT_SINK@

# Create loopback from microphone to Android input
pactl load-module module-loopback source=@DEFAULT_SOURCE@ sink=android_in
```

### Step 2: Use with audio forwarding tool

Combine with sndcpy or usbaudio, then use `pavucontrol` to route audio.

## Method 4: Using OBS Studio with Virtual Audio Cables

### Install required packages:

```bash
sudo apt update
sudo apt install obs-studio pulseaudio pulsemixer

# Install pulseaudio modules
sudo apt install pulseaudio-module-jack pulseaudio-module-loopback
```

### Setup OBS:

1. **Install OBS Studio** (if not already installed)
2. **Create Audio Source**: Add "Audio Output Capture" for Android audio
3. **Create Microphone Source**: Add "Audio Input Capture" for your laptop mic
4. **Use Virtual Camera**: Start Virtual Camera in OBS
5. **In your Android app**: Select OBS Virtual Camera as the camera source

## Method 5: Complete Audio/Video Setup Script

Create a comprehensive setup script:

```bash
#!/bin/bash
# audio_scrcpy_setup.sh

# Check if device is connected
if ! adb devices | grep -q "device$"; then
    echo "No device connected. Please connect your Android device."
    exit 1
fi

# Load PulseAudio modules
echo "Setting up audio routing..."
pactl load-module module-null-sink sink_name=android_audio sink_properties=device.description=Android-Audio
pactl load-module module-null-sink sink_name=android_mic sink_properties=device.description=Android-Microphone
pactl load-module module-virtual-source source_name=virtual_mic master=android_mic.monitor

# Create loopbacks
pactl load-module module-loopback source=android_audio.monitor sink=@DEFAULT_SINK@
pactl load-module module-loopback source=@DEFAULT_SOURCE@ sink=android_mic

echo "Audio routing setup complete."

# Start sndcpy in background
echo "Starting audio forwarding..."
cd /path/to/sndcpy
./sndcpy &

# Start scrcpy with controls
echo "Starting scrcpy..."
scrcpy --keyboard --turn-screen-off --max-size 1024

# Cleanup on exit
cleanup() {
    echo "Cleaning up..."
    pkill -f sndcpy
    # Unload PulseAudio modules
    pactl unload-module module-loopback
    pactl unload-module module-null-sink
    pactl unload-module module-virtual-source
}
trap cleanup EXIT
```

## Method 6: Using SoundWire (Network-based)

**SoundWire** streams audio over network:

### On Ubuntu:

```bash
# Download SoundWire server
wget https://www.soundwire.org/downloads/SoundWireServer_linux64.zip
unzip SoundWireServer_linux64.zip
chmod +x SoundWireServer

# Run SoundWire server
./SoundWireServer
```

### On Android:

1. Install SoundWire app from Play Store
2. Connect to your laptop's IP address

## Method 7: Manual Audio Routing with Pavucontrol

```bash
# Install pavucontrol
sudo apt install pavucontrol

# Setup audio routing manually
pactl load-module module-loopback latency_msec=1

# Use pavucontrol to route audio
pavucontrol
```

In pavucontrol:

- Go to "Recording" tab to see active audio streams
- Go to "Playback" tab to control output destinations
- Go to "Configuration" tab to manage audio devices

## Troubleshooting Tips:

1. **Check audio devices:**

   ```bash
   pactl list sinks short
   pactl list sources short
   ```

2. **Reload PulseAudio:**

   ```bash
   pulseaudio -k
   pulseaudio --start
   ```

3. **Check Android audio permissions:**

   - Enable USB debugging
   - Grant audio permissions to sndcpy/usbaudio app

4. **Monitor audio levels:**
   ```bash
   pulsemixer
   ```

## Complete Example with Game Controls + Audio:

```bash
#!/bin/bash
# game_stream_setup.sh

# Setup audio
pactl load-module module-null-sink sink_name=game_audio
pactl load-module module-loopback source=game_audio.monitor sink=@DEFAULT_SINK@

# Start audio forwarding
/path/to/sndcpy/sndcpy &

# Start scrcpy
scrcpy --keyboard --turn-screen-off --max-size 1024 &

# Start keyboard controller
python3 game_controller.py

# Cleanup
pkill -f sndcpy
pkill -f scrcpy
pactl unload-module module-loopback
pactl unload-module module-null-sink
```

The **sndcpy** method is usually the most reliable for basic audio forwarding, while the PulseAudio loopback method gives you more control over audio routing.
