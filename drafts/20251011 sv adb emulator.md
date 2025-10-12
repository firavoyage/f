# 1

how to run an android emulator on ubuntu, install apps, and connect it with adb

---

Here's a comprehensive guide to running an Android emulator on Ubuntu, installing apps, and connecting with ADB:

## 1. Install Android Studio and Dependencies

### Install Required Packages

```bash
sudo apt update
sudo apt install openjdk-11-jdk libc6-i386 libncurses5 libstdc++6 lib32z1 qemu-kvm
```

### Install Android Studio

```bash
# Download Android Studio
wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.1.1.28/android-studio-2023.1.1.28-linux.tar.gz

# Extract and install
tar -xzf android-studio-*.tar.gz
sudo mv android-studio /opt/
cd /opt/android-studio/bin
./studio.sh
```

## 2. Set Up Android SDK and Emulator

### Through Android Studio GUI:

1. Open Android Studio
2. Go to **Tools → SDK Manager**
3. Install:
   - Android SDK Build-Tools
   - Android SDK Platform-Tools
   - Android Emulator
   - System images for your target API level

### Or via Command Line:

```bash
# Set environment variables
echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools' >> ~/.bashrc
source ~/.bashrc

# Install components using sdkmanager
cd $ANDROID_HOME/cmdline-tools/latest/bin
./sdkmanager --install "platform-tools" "emulator"
./sdkmanager --install "system-images;android-33;google_apis;x86_64"
```

## 3. Create and Run Android Virtual Device (AVD)

### Create AVD:

```bash
# List available system images
./avdmanager list avd

# Create new AVD
./avdmanager create avd -n "MyDevice" -k "system-images;android-33;google_apis;x86_64" -d "pixel_4"
```

### Or via Android Studio GUI:

1. Go to **Tools → AVD Manager**
2. Click "Create Virtual Device"
3. Choose hardware profile
4. Select system image
5. Configure AVD settings

### Start Emulator:

```bash
# List available AVDs
emulator -list-avds

# Start emulator
emulator -avd MyDevice -no-audio -no-boot-anim &
```

## 4. ADB Connection and App Installation

### Check ADB Connection:

```bash
# List connected devices
adb devices

# If device shows as unauthorized:
adb kill-server
adb start-server
adb devices
```

### Install APK:

```bash
# Install single APK
adb install app.apk

# Install with granting permissions
adb install -g app.apk

# Reinstall app
adb install -r app.apk

# Install to specific device (if multiple)
adb -s emulator-5554 install app.apk
```

### Common ADB Commands:

```bash
# Push files to device
adb push localfile.txt /sdcard/

# Pull files from device
adb pull /sdcard/file.txt ./

# Open shell
adb shell

# List packages
adb shell pm list packages

# Uninstall app
adb uninstall com.example.app

# Take screenshot
adb exec-out screencap -p > screenshot.png

# Record screen
adb shell screenrecord /sdcard/demo.mp4
```

## 5. Troubleshooting Common Issues

### Emulator Not Starting:

```bash
# Check KVM support
egrep -c '(vmx|svm)' /proc/cpuinfo

# If 0, enable virtualization in BIOS or use:
emulator -avd MyDevice -no-accel
```

### ADB Device Not Found:

```bash
# Restart ADB server
adb kill-server
adb start-server

# Check if emulator is running
adb devices

# If still not found, try:
adb connect emulator-5554
```

### Permission Issues:

```bash
# Add user to plugdev group
sudo usermod -a -G plugdev $USER

# Set permissions for Android devices
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android.rules
sudo udevadm control --reload-rules
```

## 6. Advanced Emulator Options

### Headless Mode (No GUI):

```bash
emulator -avd MyDevice -no-window -no-audio
```

### Custom Settings:

```bash
emulator -avd MyDevice -memory 2048 -sdcard sdcard.img -camera-back webcam0
```

### Network Configuration:

```bash
# Redirect ports
adb forward tcp:6100 tcp:7100

# Set proxy
emulator -avd MyDevice -http-proxy http://proxy:port
```

## 7. Useful Script Examples

### Startup Script:

```bash
#!/bin/bash
# start_emulator.sh

echo "Starting Android Emulator..."
emulator -avd MyDevice -no-audio -no-boot-anim &

echo "Waiting for device to be ready..."
adb wait-for-device

echo "Device is ready!"
adb devices
```

### Batch App Installer:

```bash
#!/bin/bash
# install_apps.sh

for apk in apps/*.apk; do
    echo "Installing $apk..."
    adb install "$apk"
done
```

This setup gives you a complete Android development environment on Ubuntu with full ADB integration for app testing and development.

# 2

how connect to my phone using adb on ubuntu. how to show the current screen on my laptop, and interact with it with mouse and keyboard. i also wanna control it by programming.

---

Here's a comprehensive guide to achieve what you want:

## 1. Install ADB on Ubuntu

```bash
# Update package list
sudo apt update

# Install ADB
sudo apt install android-tools-adb android-tools-fastboot

# Or install via snap
sudo snap install scrcpy
```

## 2. Enable Developer Options on Your Phone

1. Go to **Settings** → **About Phone**
2. Tap **Build Number** 7 times until "You are now a developer" appears
3. Go back to **Settings** → **Developer Options**
4. Enable **USB Debugging**
5. Enable **Stay Awake** (optional, but helpful)

## 3. Connect Your Phone

```bash
# Connect via USB
adb devices

# If device not found, you might need to:
sudo adb kill-server
sudo adb start-server
adb devices
```

**First time connection**: You'll get a prompt on your phone to "Allow USB debugging" - check "Always allow" and tap OK.

## 4. Screen Mirroring & Interaction

### Using scrcpy (Recommended)

```bash
# Basic screen mirroring
scrcpy

# With specific options
scrcpy --max-size 1024 --bit-rate 2M --max-fps 60

# Show touches on screen
scrcpy --show-touches

# Full screen
scrcpy --fullscreen
```

### Using Vysor Alternative

```bash
# Install if not using scrcpy
sudo apt install android-tools-adb
# Then use browser-based solutions
```

## 5. Programmatic Control with ADB Commands

### Basic ADB Commands for Automation:

```bash
# Tap at coordinates
adb shell input tap 500 500

# Swipe
adb shell input swipe 300 300 800 300 500

# Text input
adb shell input text "Hello World"

# Key events
adb shell input keyevent KEYCODE_HOME
adb shell input keyevent KEYCODE_BACK
adb shell input keyevent KEYCODE_VOLUME_UP
```

### Python Script Example:

```python
import subprocess
import time

def adb_command(cmd):
    """Execute ADB command"""
    return subprocess.run(cmd, shell=True, capture_output=True, text=True)

def tap(x, y):
    """Tap at coordinates"""
    adb_command(f"adb shell input tap {x} {y}")

def swipe(x1, y1, x2, y2, duration=500):
    """Swipe from (x1,y1) to (x2,y2)"""
    adb_command(f"adb shell input swipe {x1} {y1} {x2} {y2} {duration}")

def input_text(text):
    """Input text"""
    adb_command(f"adb shell input text '{text}'")

def key_event(keycode):
    """Send key event"""
    adb_command(f"adb shell input keyevent {keycode}")

# Example usage
if __name__ == "__main__":
    # Tap at center of screen
    tap(540, 960)

    # Open app drawer (usually center bottom)
    tap(540, 1800)

    # Type something
    input_text("Hello Android")

    # Go back
    key_event("KEYCODE_BACK")
```

## 6. Advanced Programming Control

### Using Python `pure-python-adb`:

```bash
pip install pure-python-adb
```

```python
from ppadb.client import Client as AdbClient

class AndroidController:
    def __init__(self):
        self.client = AdbClient(host="127.0.0.1", port=5037)
        self.device = self.client.devices()[0]

    def screenshot(self, filename="screenshot.png"):
        """Take screenshot"""
        result = self.device.screencap()
        with open(filename, "wb") as f:
            f.write(result)

    def get_screen_size(self):
        """Get screen dimensions"""
        output = self.device.shell("wm size")
        return output.strip()

    def launch_app(self, package_name):
        """Launch app by package name"""
        self.device.shell(f"monkey -p {package_name} -c android.intent.category.LAUNCHER 1")

# Usage
controller = AndroidController()
print(f"Screen size: {controller.get_screen_size()}")
controller.screenshot()
```

## 7. Troubleshooting

### If device not detected:

```bash
# Create ADB rules
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="18d1", MODE="0666"' | sudo tee /etc/udev/rules.d/51-android.rules

# Reload rules
sudo udevadm control --reload-rules
sudo udevadm trigger

# Restart ADB
adb kill-server
adb start-server
```

### Find vendor ID:

```bash
lsusb
# Look for your phone and note the vendor ID
```

## 8. Useful ADB Commands for Development

```bash
# Screen recording
adb shell screenrecord /sdcard/demo.mp4
adb pull /sdcard/demo.mp4

# Get device info
adb shell getprop ro.product.model
adb shell wm size
adb shell wm density

# List installed apps
adb shell pm list packages

# App installation
adb install app.apk
adb uninstall com.package.name
```

## 9. Wireless ADB (After initial USB setup)

```bash
# Connect to same WiFi as computer
adb tcpip 5555
adb connect YOUR_PHONE_IP:5555

# Disconnect USB and use wirelessly
adb devices
```

This setup gives you complete control over your Android device from Ubuntu, including visual mirroring with mouse/keyboard interaction and programmatic automation capabilities.

# 3

im not familiar with python and its libraries. can i use nodejs.

---

Absolutely! Here's how to control your Android device using Node.js instead of Python:

## 1. Install Required Tools

```bash
# Install ADB on Ubuntu
sudo apt update
sudo apt install android-tools-adb

# Install scrcpy for screen mirroring
sudo snap install scrcpy

# Initialize Node.js project (if you don't have one)
mkdir android-control
cd android-control
npm init -y
```

## 2. Node.js ADB Control Packages

### Option A: Using `adb-ts` (TypeScript/JavaScript)

```bash
npm install adb-ts
```

### Option B: Using `node-adb`

```bash
npm install adb-kit
```

### Option C: Using child_process (No additional packages)

You can directly execute ADB commands from Node.js

## 3. Basic Node.js Control Script

Create `control.js`:

```javascript
const { exec, spawn } = require("child_process");
const { promisify } = require("util");
const execAsync = promisify(exec);

class AndroidController {
  async executeCommand(cmd) {
    try {
      const { stdout, stderr } = await execAsync(cmd);
      if (stderr) console.error("Error:", stderr);
      return stdout;
    } catch (error) {
      console.error("Execution error:", error);
      return null;
    }
  }

  // Tap at coordinates
  async tap(x, y) {
    return await this.executeCommand(`adb shell input tap ${x} ${y}`);
  }

  // Swipe gesture
  async swipe(x1, y1, x2, y2, duration = 500) {
    return await this.executeCommand(
      `adb shell input swipe ${x1} ${y1} ${x2} ${y2} ${duration}`
    );
  }

  // Input text
  async inputText(text) {
    // Escape special characters for shell
    const escapedText = text.replace(/ /g, "%s").replace(/'/g, "'\"'\"'");
    return await this.executeCommand(`adb shell input text "${escapedText}"`);
  }

  // Key events
  async keyEvent(keycode) {
    return await this.executeCommand(`adb shell input keyevent ${keycode}`);
  }

  // Common keycodes
  get keys() {
    return {
      HOME: 3,
      BACK: 4,
      VOLUME_UP: 24,
      VOLUME_DOWN: 25,
      POWER: 26,
      ENTER: 66,
      MENU: 82,
    };
  }

  // Take screenshot
  async screenshot(filename = "/sdcard/screenshot.png") {
    await this.executeCommand(`adb shell screencap -p ${filename}`);
    await this.executeCommand(`adb pull ${filename} ./screenshots/`);
  }

  // Get screen info
  async getScreenSize() {
    return await this.executeCommand("adb shell wm size");
  }

  // List connected devices
  async listDevices() {
    return await this.executeCommand("adb devices");
  }

  // Launch scrcpy (screen mirroring)
  launchMirroring(options = "") {
    return spawn("scrcpy", options.split(" "));
  }
}

// Usage examples
async function main() {
  const android = new AndroidController();

  // Check connection
  console.log("Connected devices:");
  console.log(await android.listDevices());

  // Get screen size
  console.log("Screen size:", await android.getScreenSize());

  // Example automation
  console.log("Starting automation...");

  // Go home
  await android.keyEvent(android.keys.HOME);
  await delay(1000);

  // Tap at center of screen (adjust coordinates based on your screen size)
  await android.tap(500, 500);
  await delay(1000);

  // Input text
  await android.inputText("Hello from Node.js!");
  await delay(1000);

  // Press back
  await android.keyEvent(android.keys.BACK);

  console.log("Automation completed!");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = AndroidController;
```

## 4. Advanced Example with Event Handling

Create `advanced-control.js`:

```javascript
const AndroidController = require("./control.js");
const readline = require("readline");

class AdvancedAndroidController extends AndroidController {
  constructor() {
    super();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  // Interactive control
  async interactiveMode() {
    console.log("Interactive Android Control");
    console.log(
      'Commands: tap x y, swipe x1 y1 x2 y2, text "message", home, back, volumeup, volumedown, exit'
    );

    this.promptUser();
  }

  promptUser() {
    this.rl.question("Enter command: ", async (input) => {
      await this.handleCommand(input);
      if (input !== "exit") {
        this.promptUser();
      } else {
        this.rl.close();
      }
    });
  }

  async handleCommand(command) {
    const parts = command.trim().split(" ");
    const cmd = parts[0].toLowerCase();

    try {
      switch (cmd) {
        case "tap":
          if (parts.length === 3) {
            await this.tap(parseInt(parts[1]), parseInt(parts[2]));
            console.log(`Tapped at ${parts[1]}, ${parts[2]}`);
          }
          break;
        case "swipe":
          if (parts.length === 5) {
            await this.swipe(
              parseInt(parts[1]),
              parseInt(parts[2]),
              parseInt(parts[3]),
              parseInt(parts[4])
            );
            console.log(
              `Swiped from ${parts[1]},${parts[2]} to ${parts[3]},${parts[4]}`
            );
          }
          break;
        case "text":
          const text = parts.slice(1).join(" ");
          await this.inputText(text);
          console.log(`Entered text: ${text}`);
          break;
        case "home":
          await this.keyEvent(this.keys.HOME);
          console.log("Home pressed");
          break;
        case "back":
          await this.keyEvent(this.keys.BACK);
          console.log("Back pressed");
          break;
        case "volumeup":
          await this.keyEvent(this.keys.VOLUME_UP);
          console.log("Volume up");
          break;
        case "volumedown":
          await this.keyEvent(this.keys.VOLUME_DOWN);
          console.log("Volume down");
          break;
        case "exit":
          console.log("Goodbye!");
          break;
        default:
          console.log("Unknown command");
      }
    } catch (error) {
      console.error("Command failed:", error);
    }
  }

  // Automated sequence example
  async automatedSequence() {
    console.log("Starting automated sequence...");

    // Example: Open browser and search
    await this.keyEvent(this.keys.HOME);
    await delay(1000);

    // Tap browser icon (adjust coordinates)
    await this.tap(200, 800);
    await delay(3000);

    // Tap address bar (adjust coordinates)
    await this.tap(100, 150);
    await delay(1000);

    // Input search term
    await this.inputText("Node.js Android automation");
    await delay(1000);

    // Press enter
    await this.keyEvent(this.keys.ENTER);

    console.log("Automated sequence completed");
  }
}

// Helper function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Usage
async function run() {
  const controller = new AdvancedAndroidController();

  // Check connection
  const devices = await controller.listDevices();
  console.log(devices);

  // Choose mode
  console.log("1. Interactive mode");
  console.log("2. Automated sequence");
  console.log("3. Start screen mirroring");

  controller.rl.question("Select option: ", async (choice) => {
    switch (choice) {
      case "1":
        await controller.interactiveMode();
        break;
      case "2":
        await controller.automatedSequence();
        controller.rl.close();
        break;
      case "3":
        console.log("Starting screen mirroring...");
        const scrcpy = controller.launchMirroring("--max-size 1024");
        scrcpy.on("close", () => {
          console.log("Screen mirroring ended");
          controller.rl.close();
        });
        break;
      default:
        console.log("Invalid choice");
        controller.rl.close();
    }
  });
}

if (require.main === module) {
  run().catch(console.error);
}

module.exports = AdvancedAndroidController;
```

## 5. Package.json Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "start": "node control.js",
    "interactive": "node advanced-control.js",
    "mirror": "scrcpy",
    "devices": "node -e \"require('./control.js').listDevices().then(console.log)\""
  }
}
```

## 6. Running the Code

```bash
# Install dependencies (if using adb-ts)
npm install adb-ts

# Run basic control
npm start

# Run interactive mode
npm run interactive

# Start screen mirroring
npm run mirror

# Check devices
npm run devices
```

## 7. Key Features of This Setup:

- **No Python required** - Pure Node.js implementation
- **Real-time screen mirroring** with scrcpy
- **Interactive command line control**
- **Programmatic automation** capabilities
- **Event-driven architecture** for complex workflows
- **Error handling** and promise-based async operations

This gives you complete control over your Android device from Node.js with both visual feedback (via scrcpy) and programmatic automation capabilities!

# 4

i love fp. i dont wanna bother classes.

---

Perfect! Functional programming style is much cleaner for this. Here's a pure functional approach:

## 1. Basic Functional ADB Control

Create `adb-fp.js`:

```javascript
const { exec } = require("child_process");
const { promisify } = require("util");
const execAsync = promisify(exec);

// Pure functions
const executeCommand = (cmd) =>
  execAsync(cmd)
    .then(({ stdout }) => stdout)
    .catch(console.error);

// ADB operations as pure functions
const tap = (x, y) => executeCommand(`adb shell input tap ${x} ${y}`);
const swipe = (x1, y1, x2, y2, duration = 500) =>
  executeCommand(`adb shell input swipe ${x1} ${y1} ${x2} y2 ${duration}`);

const inputText = (text) => {
  const escaped = text.replace(/ /g, "%s").replace(/'/g, "'\"'\"'");
  return executeCommand(`adb shell input text "${escaped}"`);
};

const keyEvent = (keycode) =>
  executeCommand(`adb shell input keyevent ${keycode}`);

// Common key events as constants
const KEYS = {
  HOME: 3,
  BACK: 4,
  VOLUME_UP: 24,
  VOLUME_DOWN: 25,
  ENTER: 66,
};

// Utility functions
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => v.then(f), Promise.resolve(x));

// Screen functions
const getScreenSize = () => executeCommand("adb shell wm size");
const listDevices = () => executeCommand("adb devices");
const screenshot = (filename = "/sdcard/screenshot.png") =>
  executeCommand(`adb shell screencap -p ${filename}`).then(() =>
    executeCommand(`adb pull ${filename} ./`)
  );

// Composition examples
const goHome = () => keyEvent(KEYS.HOME);
const pressBack = () => keyEvent(KEYS.BACK);
const volumeUp = () => keyEvent(KEYS.VOLUME_UP);

// Functional sequences
const openApp = (x, y) =>
  pipe(
    () => goHome(),
    () => delay(1000),
    () => tap(x, y)
  );

const typeAndSend = (text) =>
  pipe(
    () => inputText(text),
    () => delay(500),
    () => keyEvent(KEYS.ENTER)
  );

// Higher-order functions
const withRetry =
  (fn, retries = 3) =>
  async (...args) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn(...args);
      } catch (error) {
        if (i === retries - 1) throw error;
        await delay(1000);
      }
    }
  };

const withDelay =
  (ms) =>
  (fn) =>
  async (...args) => {
    await delay(ms);
    return fn(...args);
  };
```

## 2. Functional Automation Script

Create `automate.js`:

```javascript
const {
  tap,
  swipe,
  inputText,
  keyEvent,
  KEYS,
  delay,
  pipe,
  goHome,
  pressBack,
  typeAndSend,
  getScreenSize,
  listDevices,
} = require("./adb-fp");

// Pure function composition - no classes, no state
const automatedWorkflow = pipe(
  () => console.log("Starting automation..."),
  () => listDevices().then(console.log),
  () => getScreenSize().then(console.log),
  () => goHome(),
  () => delay(1000),
  () => tap(540, 1800), // Adjust coordinates for your device
  () => delay(2000),
  () => inputText("Hello from FP!"),
  () => delay(1000),
  () => keyEvent(KEYS.ENTER),
  () => delay(2000),
  () => pressBack(),
  () => console.log("Automation completed!")
);

// Curried functions for specific apps
const createAppAutomator = (appIconX, appIconY) => ({
  openApp: pipe(
    () => goHome(),
    () => delay(1000),
    () => tap(appIconX, appIconY)
  ),

  searchInApp: (query) =>
    pipe(
      () => tap(100, 150), // Search bar position
      () => delay(500),
      () => inputText(query),
      () => keyEvent(KEYS.ENTER)
    ),
});

// Example app automators
const browser = createAppAutomator(200, 800);
const settings = createAppAutomator(300, 800);

// Declarative test sequences
const testScenarios = [
  {
    name: "Browser Search Test",
    sequence: pipe(
      () => browser.openApp(),
      () => delay(3000),
      () => browser.searchInApp("Functional Programming"),
      () => delay(5000),
      () => pressBack()
    ),
  },
  {
    name: "Volume Test",
    sequence: pipe(
      () => volumeUp(),
      () => delay(1000),
      () => volumeUp(),
      () => delay(1000)
    ),
  },
];

// Run all test scenarios
const runAllTests = pipe(
  ...testScenarios.flatMap((scenario) => [
    () => console.log(`\nRunning: ${scenario.name}`),
    scenario.sequence,
  ])
);

// Main execution
if (require.main === module) {
  const runMode = process.argv[2] || "basic";

  const modes = {
    basic: automatedWorkflow,
    tests: runAllTests,
    browser: pipe(
      () => browser.openApp(),
      () => delay(5000),
      () => browser.searchInApp("Node.js ADB"),
      () => console.log("Browser test completed")
    ),
  };

  (modes[runMode] || modes.basic)().catch(console.error);
}

module.exports = {
  automatedWorkflow,
  runAllTests,
  browser,
  settings,
  createAppAutomator,
};
```

## 3. Interactive REPL-style Control

Create `repl-control.js`:

```javascript
const readline = require("readline");
const {
  tap,
  swipe,
  inputText,
  keyEvent,
  KEYS,
  delay,
  goHome,
  pressBack,
  getScreenSize,
  screenshot,
} = require("./adb-fp");

// Command parser - pure function
const parseCommand = (input) => {
  const [cmd, ...args] = input.trim().split(" ");
  return { cmd: cmd.toLowerCase(), args };
};

// Command handlers - pure functions
const commandHandlers = {
  tap: ([x, y]) => tap(parseInt(x), parseInt(y)),
  swipe: ([x1, y1, x2, y2]) =>
    swipe(parseInt(x1), parseInt(y1), parseInt(x2), parseInt(y2)),
  text: (args) => inputText(args.join(" ")),
  home: () => goHome(),
  back: () => pressBack(),
  volumeup: () => keyEvent(KEYS.VOLUME_UP),
  volumedown: () => keyEvent(KEYS.VOLUME_DOWN),
  screenshot: () => screenshot().then(() => console.log("Screenshot saved!")),
  size: () => getScreenSize().then(console.log),
  help: () =>
    console.log(`
Available commands:
  tap x y
  swipe x1 y1 x2 y2
  text "your message"
  home, back, volumeup, volumedown
  screenshot, size, help, exit
  `),
};

// Process command functionally
const processCommand = ({ cmd, args }) => {
  const handler = commandHandlers[cmd];
  if (!handler) {
    console.log(`Unknown command: ${cmd}. Type 'help' for commands.`);
    return Promise.resolve();
  }
  return handler(args).catch(console.error);
};

// REPL loop
const startREPL = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = () =>
    rl.question("adb> ", async (input) => {
      if (input === "exit") {
        rl.close();
        return;
      }

      await processCommand(parseCommand(input));
      ask(); // Continue the loop
    });

  console.log("Android ADB Functional REPL");
  console.log("Type 'help' for commands, 'exit' to quit\n");
  ask();
};

// Run if called directly
if (require.main === module) {
  startREPL();
}

module.exports = {
  parseCommand,
  processCommand,
  commandHandlers,
  startREPL,
};
```

## 4. Package.json for Scripts

```json
{
  "name": "adb-fp-control",
  "type": "module",
  "scripts": {
    "repl": "node repl-control.js",
    "automate": "node automate.js",
    "automate:tests": "node automate.js tests",
    "automate:browser": "node automate.js browser",
    "screen": "scrcpy --max-size 1024"
  }
}
```

## 5. Usage Examples

```bash
# Start interactive REPL
npm run repl

# Run basic automation
npm run automate

# Run test scenarios
npm run automate:tests

# Run browser automation
npm run automate:browser

# Start screen mirroring
npm run screen
```

## In REPL, use commands like:

```
adb> tap 500 500
adb> text "Hello World"
adb> home
adb> swipe 300 500 800 500
adb> screenshot
```

## Key Functional Programming Features:

- **Pure functions** - no side effects, same input = same output
- **Function composition** - pipe and compose operations
- **Higher-order functions** - functions that take/return functions
- **Immutability** - no state mutations
- **Currying** - partial application of functions
- **Declarative style** - what to do, not how to do it

This approach is much cleaner, testable, and maintainable than class-based OOP!

# 5

whats repl

---

REPL stands for **Read-Eval-Print Loop**. It's an interactive programming environment that lets you execute code in real-time.

## What is REPL?

**R**ead → **E**val → **P**rint → **L**oop

- **Read**: Reads your input
- **Eval**: Evaluates (executes) your code
- **Print**: Shows the result
- **Loop**: Repeats the process

## Examples of REPLs You Already Know:

### 1. Browser Console (JavaScript REPL)

```javascript
// You can type directly in browser console:
> 2 + 2
4
> let name = "John"
undefined
> console.log(`Hello ${name}`)
Hello John
undefined
```

### 2. Node.js REPL

```bash
# Start Node.js REPL
node

# Then you can type:
> 5 * 5
25
> const fruits = ['apple', 'banana']
undefined
> fruits.map(f => f.toUpperCase())
[ 'APPLE', 'BANANA' ]
> .exit
```

### 3. Python REPL

```bash
python3

>>> import math
>>> math.sqrt(16)
4.0
>>> [x**2 for x in range(5)]
[0, 1, 4, 9, 16]
```

## Our ADB REPL Example:

In our code, `repl-control.js` creates a custom REPL for Android control:

```javascript
// This creates our ADB REPL
const startREPL = () => {
  const rl = readline.createInterface({
    input: process.stdin, // Read from keyboard
    output: process.stdout, // Print to screen
  });

  const ask = () =>
    rl.question("adb> ", async (input) => {
      // READ: Get user input
      if (input === "exit") {
        rl.close();
        return;
      }

      // EVAL: Execute the command
      await processCommand(parseCommand(input));

      // LOOP: Ask again
      ask();
    });

  ask(); // Start the loop
};
```

## How to Use Our ADB REPL:

```bash
# Start the REPL
node repl-control.js

# You'll see:
Android ADB Functional REPL
Type 'help' for commands, 'exit' to quit

adb>
```

Then you can type commands interactively:

```
adb> tap 500 500           # Taps at coordinates
adb> text "Hello World"    # Types text
adb> home                  # Goes to home screen
adb> swipe 300 300 800 300 # Swipes horizontally
adb> screenshot            # Takes screenshot
adb> size                  # Shows screen size
adb> help                  # Shows available commands
adb> exit                  # Quits the REPL
```

## Why REPL is Great for ADB Control:

1. **Immediate Feedback**: See results instantly
2. **Exploratory**: Test commands without writing scripts
3. **Interactive Learning**: Learn what works before automating
4. **Rapid Prototyping**: Quickly test sequences
5. **Debugging**: Isolate and test individual commands

## REPL vs Scripts:

**REPL (Interactive):**

```
adb> tap 100 200    # Try once
adb> tap 150 250    # Adjust and try again
adb> tap 180 280    # Find the perfect coordinates
```

**Scripts (Batch):**

```javascript
// automate.js - run everything at once
tap(100, 200);
tap(150, 250);
tap(180, 280);
```

## Other Common REPLs:

- **Database REPLs**: `psql` (PostgreSQL), `mysql` (MySQL)
- **Shell REPLs**: `bash`, `zsh`, `fish`
- **Language REPLs**: `irb` (Ruby), `iex` (Elixir), `ghci` (Haskell)
- **Tool REPLs**: `npx` (Node.js), `python -m http.server`

## Benefits for Your ADB Project:

1. **Discover coordinates**: Tap around to find button positions
2. **Test sequences**: Try command combinations
3. **Debug automation**: Isolate failing commands
4. **Learn ADB**: Experiment with different commands safely

Think of REPL as a "conversation" with your Android device - you speak (type commands), it responds immediately, and you have a back-and-forth dialogue to figure out what you want to do!
