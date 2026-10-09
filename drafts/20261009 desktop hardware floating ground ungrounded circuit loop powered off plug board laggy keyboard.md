# how to restart laggy physical input device on ubuntu

## how to restart laggy physical input device on ubuntu

12:19 AM

To restart a laggy physical input device (like a USB mouse, keyboard, or trackpad) on **Ubuntu** without rebooting your entire computer, you can <mark>reload its driver module, reset the USB bus, or restart the input subsystem</mark>.

Here are the most effective ways to do it, ordered from easiest to most advanced.

***

### Method 1: Reload the Linux Input Kernel Modules

The quickest way to "power cycle" the input subsystem software is to remove and reinsert the core input drivers (`psmouse` for touchpads/mice or `usbhid` for USB keyboards and mice).

Open your terminal (`Ctrl` + `Alt` + `T`) and run the appropriate command:

- **For Touchpads / Mice:**\
  bash

<!---->

```
sudo rmmod psmouse && sudo modprobe psmouse
```

Use code with caution.

- **For USB Keyboards / Mice / Dongles:**\
  bash

<!---->

```
sudo rmmod usbhid && sudo modprobe usbhid
```

Use code with caution.

_(Note: If you run the `usbhid` command, your keyboard and mouse will temporarily disconnect for a split second before restarting automatically)._

***

### Method 2: Restart the X11 / Wayland Input Driver (`libinput`)

Ubuntu uses `libinput` to manage physical input signals. If the lag is caused by a frozen or stuttering desktop environment daemon, restarting the graphical systemd manager can force the input device to re-initialize. [link](https://discourse.ubuntu.com/t/random-loss-of-keyboard-input-on-random-applications/50985)

Run this command to safely restart the login and device mapping daemon without closing your open applications:

bash

```
sudo systemctl restart systemd-logind
```

Use code with caution.

If you are on an older version of Ubuntu using **X11** (instead of Wayland), you can restart the entire window manager by pressing `Alt` + `F2`, typing `r`, and hitting `Enter`.

***

### Method 3: Programmatically "Unplug and Replig" the USB Port

If you are using a wireless USB transceiver or a wired mouse that is lagging due to power-saving issues, you can force the system to unbind and rebind the device. [link](https://askubuntu.com/questions/1036341/unplug-and-plug-in-again-a-usb-device-in-the-terminal)

1. **Find your device's USB ID** by running:\
   bash

<!---->

```
lsusb
```

Use code with caution.\
_(Look for your device, e.g., `Bus 001 Device 004: ID 046d:c534 Logitech, Inc. Unifying Receiver`)_.
2\. **Unbind and re-detect all devices on that bus** by authorization toggle:\
bash

```
echo "0" | sudo tee /sys/bus/usb/devices/usb1/authorized
echo "1" | sudo tee /sys/bus/usb/devices/usb1/authorized
```

Use code with caution.\
_(Replace `usb1` with the bus number your device is connected to, such as `usb2`, `usb3`, etc.)_

***

### Method 4: Fix Persistent Lag (Disable USB Autosufpend)

If your input device starts lagging after a few seconds of idle time, Ubuntu’s aggressive power management is likely putting the device to sleep. You can turn this off permanently: [link](https://askubuntu.com/questions/1036341/unplug-and-plug-in-again-a-usb-device-in-the-terminal)

1. Open the terminal and run:\
   bash

<!---->

```
sudo nano /etc/default/grub
```

Use code with caution.
2\. Find the line starting with `GRUB_CMDLINE_LINUX_DEFAULT` and add `usbcore.autosuspend=-1` inside the quotes. It should look something like this:\
text

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash usbcore.autosuspend=-1"
```

Use code with caution.
3\. Save and exit (`Ctrl` + `O`, then `Enter`, then `Ctrl` + `X`).
4\. Update your boot settings and restart your computer one final time: [link](https://www.youtube.com/watch?v=I2rHRi2ll9Q\&t=64)\
bash

```
sudo update-grub
```

Use code with caution.

To give you the most accurate fix, could you tell me:

- What **specific input device** is lagging? (e.g., Bluetooth mouse, USB wireless keyboard, laptop trackpad)

- Which **Ubuntu version** are you running? (e.g., 22.04, 24.04)

- Does the lag happen **constantly**, or only **after the device sits idle** for a moment?

- [link](https://askubuntu.com/questions/1036341/unplug-and-plug-in-again-a-usb-device-in-the-terminal)\
  Ask Ubuntu\
  Unplug and plug in again a USB device in the terminal\
  Ubuntu bug where my mouse freezes. To fix it, I have to physically unplug the usb transceiver for the mouse and plug it back in. F...

- [link](https://askubuntu.com/questions/1029256/keyboard-input-lag-in-ubuntu-18-04)\
  Ask Ubuntu\
  Keyboard input lag in Ubuntu 18.04\
  Sorted by: Reset to default. Highest score (default), Date modified (newest first), Date created (oldest first). This answer is us...

- [link](https://discourse.ubuntu.com/t/random-loss-of-keyboard-input-on-random-applications/50985)\
  Ubuntu Discourse\
  Random loss of keyboard input on random applications\
  To restart the Display Manager in addition to the shell (found this while searching) you can run # systemctl restart systemd-login...

Show all

# how to fix laggy keyboard on ubuntu laptop

## how to fix laggy keyboard on ubuntu laptop

12:23 AM

To fix a laggy keyboard on an Ubuntu laptop, <mark><strong>the most common and immediate fix is to disable the "Slow Keys" or "Filter Keys" accessibility feature</strong></mark>, which is frequently turned on by accident. [link](https://askubuntu.com/questions/1029256/keyboard-input-lag-in-ubuntu-18-04)

Depending on your exact Ubuntu version and hardware setup, use the steps below to systematically resolve the issue.

### 1. Disable Accessibility "Slow Keys" (Most Common)

If you hold down the `Shift` key for 8 seconds, Ubuntu can accidentally trigger "Slow Keys," which forces the system to wait a moment before accepting a keystroke. [link](https://askubuntu.com/questions/1029256/keyboard-input-lag-in-ubuntu-18-04)

- Open your **Settings** application.
- Navigate to **Accessibility** -> **Keyboard** (or **Hearing & Typing**).
- Locate **Slow Keys** and **Bounce Keys** and toggle them completely **Off**.

### 2. Adjust Your Repeat Rate

If your letters take too long to appear when holding down a key, your system's keyboard repeat rate may be configured too low.

- Go to **Settings** -> **Keyboard**.
- Find the **Repeat Rate** and **Delay** sliders.
- Turn the **Repeat Rate to Fast** and lower the **Delay** to a shorter timeframe.
- Alternatively, you can instantly boost this via the Terminal by typing: `xset r rate 250 60`. [link](https://www.reddit.com/r/Ubuntu/comments/n4qgfe/my%5Fsolution%5Fto%5Fget%5Ffaster%5Fkeyboard%5Fkey%5Finput/)

### 3. Switch the IBus Input Method (For Ubuntu 24.10+)

If you are running a recent version of Ubuntu and notice severe lag specifically when switching between letters, symbols, or backspaces, a known bug in the `ibus` software package might be the culprit. [link](https://askubuntu.com/questions/1522560/ubuntu-24-04-with-keyboard-input-lag)

- Open **Language Support** from your application menu.
- Look for **Keyboard input method system**.
- Change the dropdown menu from **IBus** to **XIM**.
- Restart your laptop for the changes to take full effect. [link](https://discourse.ubuntu.com/t/how-to-fix-keyboard-latency-occured-during-gameplay-on-ubuntu-24-10/50042)

### 4. Check for Bluetooth/Hardware Interference

If you are using an external Bluetooth keyboard or mouse alongside your laptop keyboard, Ubuntu's Bluetooth driver can sometimes lag under dual-device strain. [link](https://askubuntu.com/questions/1463834/bluetooth-keyboard-input-lag-goes-away-if-bluetooth-mouse-disconnected-ubuntu)

- Try **turning off your Bluetooth mouse** temporarily to see if the laptop keyboard lag instantly vanishes.
- If you have dedicated graphics, go to **Settings** -> **About** to check your windowing system. Switching from **Wayland** to **X11** (or vice versa) on your login screen can fix rendering lag that mimics keyboard delay. [link](https://askubuntu.com/questions/1240958/20-04-usb-keyboard-and-mouse-lag)

To narrow down the exact issue, could you tell me:

- What **version of Ubuntu** are you using?

- Does this lag happen **everywhere** (like the terminal) or only in **specific apps / games**?

- Are you running Ubuntu **directly on the laptop**, or inside a **virtual machine**?

- [link](https://askubuntu.com/questions/1029256/keyboard-input-lag-in-ubuntu-18-04)\
  Ask Ubuntu\
  Keyboard input lag in Ubuntu 18.04\
  This may be the slow keys feature. It is toggled on and off by holding down the shift key for 8 seconds. Press the Shift key for 8...

- [link](https://askubuntu.com/questions/1240958/20-04-usb-keyboard-and-mouse-lag)\
  Ask Ubuntu

20.04 USB keyboard and mouse lag\
The issue is also present in both Xorg and Wayland sessions and in the login screen, but is not present in UEFI settings menu.

- [link](https://www.youtube.com/watch?v=Xgk0kVjeSSI)\
  YouTube\
  How to Fix Keyboard Slow Response or Keyboard lagging issue\
  first method you can try is adjust keyboard repeat rate for this click on this search box and type control. turn off filter keys. ...

Show all

## everywhere, give me commands to test

everywhere, give me commands to test

12:25 AM

Here are the core terminal commands to test, diagnose, and temporarily fix system-wide keyboard lag in Ubuntu. Open your terminal (`Ctrl` + `Alt` + `T`) and run these diagnostic steps:

### 1. Test the Hardware/Kernel Level (Evtest)

This tool tests if the lag is happening at the core hardware level before it even reaches your desktop interface.

1. Install the event tester:\
   bash

<!---->

```
sudo apt update && sudo apt install evtest
```

Use code with caution.
2\. Run it:\
bash

```
sudo evtest
```

Use code with caution.
3\. Select your internal keyboard from the list (usually numbered, type the number, and hit Enter).
4\. Type a few characters.

- **If the timestamps pop up instantly** in the terminal but text lags elsewhere, your hardware is fine—the issue is with Ubuntu's desktop environment or graphics.
- **If the terminal output itself lags**, it is a low-level driver, kernel, or power-management issue.
- Press `Ctrl` + `C` to exit.

### 2. Bypass & Reset Desktop Input Lag

If the issue is caused by the Ubuntu desktop manager (GNOME/Wayland/X11) or accessibility loops, these commands force-reset or bypass those settings.

- **Force-reset keyboard repeat speed & clear accessibility filters:**\
  bash

<!---->

```
xset r rate 200 40
```

Use code with caution.\
_(Note: This applies if you are running an X11 session. If it returns an error about a missing display, you are on Wayland)._

- **Restart the GNOME Shell (Only if you are on an X11 session):**\
  Press `Alt` + `F2`, type `r`, and press `Enter`. This restarts the graphical interface without closing your open applications to see if a memory leak was causing the lag.

### 3. Check for Interfereing Logs or High CPU usage

Sometimes a rogue process or a flood of system errors causes typing lag because the CPU is choked.

- **Check live CPU usage:**\
  bash

<!---->

```
top
```

Use code with caution.\
_(Look at the `%CPU` column. If a process like `gnome-shell`, `Xorg`, or `ibus-daemon` is constantly hovering near 100%, that process is stalling your inputs. Press `q` to exit)._

- **Check for active keyboard driver errors:**\
  bash

<!---->

```
dmesg | grep -i -E "input|keyb|atkbd" | tail -n 20
```

Use code with caution.\
_(This prints the last 20 keyboard system events. Look for errors like "failed to accept command" or "timeout")._

Let me know what you find:

- Did **evtest** show the keystrokes instantly, or was the tool itself lagging?
- Did any process show a **high %CPU** when running the `top` command?

## evtest itself lags, some hits no effect

evtest itself lags, some hits no effect

12:29 AM

Because `evtest` is lagging and missing strokes entirely, **this confirms you have a kernel, driver, or hardware-level bottleneck**, completely ruling out standard desktop interface settings, apps, or accessibility bugs. The signals are dropping or queueing before Ubuntu's interface even gets to see them. [link](https://github.com/pop-os/pop/issues/2247)

Try these highly specific kernel-level fixes sequentially:

### 1. Reset the AT Keyboard Driver at Boot (Most Likely Fix)

Most Ubuntu laptops interface with their built-in keyboard using the legacy `atkbd` kernel driver. If this driver falls out of sync or experiences packet timeouts, it drops strokes and severely buffers inputs. [link](https://bbs.archlinux.org/viewtopic.php?id=285327)

1. Open your GRUB configuration file:\
   bash

<!---->

```
sudo nano /etc/default/grub
```

Use code with caution.
2\. Look for the line that says: `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"`
3\. Append `atkbd.reset` to the parameters. It should look like this:\
text

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash atkbd.reset"
```

Use code with caution.
4\. Save the file (`Ctrl` + `O`, then `Enter`) and exit (`Ctrl` + `X`).
5\. Update your bootloader:\
bash

```
sudo update-grub
```

Use code with caution.
6\. **Reboot your laptop** and see if `evtest` is fully responsive. [link](https://askubuntu.com/questions/1418676/keyboard-not-working-after-suspend-on-ubuntu-22-04)

### 2. Disconnect a Stuck Hardware Controller (The Hard Reset)

Sometimes the laptop's embedded controller (EC)—the firmware piece handling the power and low-level inputs—gets stuck in a bad loop, physically queueing up strokes. [link](https://superuser.com/questions/1043020/lagging-keyboard-missing-keystrokes)

1. Shut down your laptop completely.
2. Unplug the power charger.
3. If your laptop has a removable battery, take it out. _(If it's sealed inside, just keep the power cord unplugged)._
4. Press and **hold the physical Power Button down for 30 full seconds**. This completely drains any residual capacitance stalling the hardware microcontrollers.
5. Plug it back in, turn it on, and re-test. [link](https://superuser.com/questions/1043020/lagging-keyboard-missing-keystrokes)

### 3. Check for Virtual Machine Extensions (If applicable)

_Are you running Ubuntu inside a virtual machine environment (like VMware or VirtualBox) on a host computer?_\
If yes, a missing Input/Output Memory Management Unit config causes severe `evtest` lag. [link](https://blog.milliondollarserver.com/2024/10/fix-keyboard-laginput-delay-on-ubuntu.html)

- **VMware Fix:** Shut down the VM, open your Virtual Machine Settings, navigate to **Processors**, and check the box to enable **Virtualize IOMMU**. [link](https://blog.milliondollarserver.com/2024/10/fix-keyboard-laginput-delay-on-ubuntu.html)

### 4. Isolate USB/Bluetooth Device Interferences

Even if you are typing on an internal laptop keyboard, a plugged-in USB hub, external mouse, or flawed Bluetooth controller can saturate the input bus (`evdev`). [link](https://bbs.archlinux.org/viewtopic.php?id=239268)

- Unplug **every single external device** (mice, monitors, dongles, hubs).
- Disable Bluetooth via your top-bar menu toggles, and check `evtest` again.

If the lag continues after the reboot, let me know:

- Did adding **`atkbd.reset`** alter or improve the behavior at all?

- What is the **make and model of your laptop**? (Certain models, like specific Lenovo ThinkPads or Dell Inspirons, have known kernel bugs with specific fixes).

- [link](https://bbs.archlinux.org/viewtopic.php?id=239268)\
  Arch Linux Forums\
  Sometimes some keyboard keys don't work / Kernel ...\
  Sometimes, four keys don't work(silent, vol+, vol-,calculator), these keys should work out-of-box, other keys work well. usb keybo...

- [link](https://superuser.com/questions/1043020/lagging-keyboard-missing-keystrokes)\
  Super User\
  Lagging keyboard; missing keystrokes - linux mint - Super User\
  Turn off computer, disconnect the power cord, remove the battery. Shutdown, remove battery, boot up.

- [link](https://www.reddit.com/r/Ubuntu/comments/1vg0cqa/thinkpad%5Fubuntu%5F2404%5Fkeyboard%5Frandomly%5Fstops/)\
  Reddit\
  ThinkPad Ubuntu 24.04 – keyboard randomly stops detecting ...\
  strange keyboard/touchpad issue. Everything works normally after a restart, but after around 5–10 minutes the issue starts. The ke...

Show all

## wait what? why is it fixed when i unplug the power cable, and it's reproducible even if i connect it on power again. previously i charge the same and there is no issue.

This behavior isolates the issue completely: **you are experiencing a hardware grounding or electrical noise issue, not a software bug.**

When your laptop is plugged in, the charger is introducing "AC ripple noise" or an electrical ground loop into the laptop's chassis. The internal keyboard matrix communicates via incredibly low-voltage electrical signals. When the charger leaks stray currents, it floods the motherboard with electrical interference, causing the hardware microcontroller to miss your keystrokes entirely (which is why `evtest` was dropping inputs). When you unplug it, the clean, steady DC power from the battery instantly resolves the interference.

Even if you have used this exact charger without issue before, components age, degrade, and fail. The main culprits and fixes include:

### 1. The Charger's Internal Capacitors are Degrading

This is the most common reason it worked fine previously but fails now. Chargers contain capacitors designed to smooth out the dirty AC electricity from your wall into smooth DC power. Over time, these capacitors wear down or leak. When they do, they stop filtering the power cleanly, allowing high-frequency electrical "noise" to pass directly into your laptop's sensitive components.

- **The Test:** Try charging the laptop using a different, high-quality power adapter (or a compatible USB-C charger). If the keyboard stops lagging on a different charger, your original power brick is failing and needs to be replaced.

### 2. A Wall Outlet Grounding Fault

If your charger is fine, the actual wall outlet or surge protector you are plugged into might have lost its ground connection, or an appliance on the same circuit (like a refrigerator, AC unit, or a fan) is feeding noise back into the electrical line.

- **The Test:** Move your laptop to a completely different room (or a different building entirely) and plug it directly into the wall, bypassing any power strips. If the lag disappears, your original wall outlet or surge protector has an electrical grounding fault.

### 3. A Degrading Charging Port or Internal Shielding

The physical charging port inside your laptop or the ground shielding tape around your internal keyboard cable may have loosened or oxidized. When plugged in, the electricity can jump slightly (micro-arcing) or bleed directly onto the keyboard's data lanes.

- **Temporary Workaround:** If you use a Thunderbolt or USB-C dock that also charges the laptop, try plugging the charger into a port on the opposite side of the laptop to physically move the electrical current away from the internal keyboard's data traces. [link](https://askubuntu.com/questions/1339240/why-is-my-laptop-keyboard-laggy-after-ubuntu-upgrade)

To narrow this down safely, tell me:

- Are you charging via a standard **barrel plug** or a **USB-C port**?

- Does this lag happen on **every wall outlet** in your home, or have you only noticed it at **one specific desk / plug**?

- [link](https://askubuntu.com/questions/1339240/why-is-my-laptop-keyboard-laggy-after-ubuntu-upgrade)\
  Ask Ubuntu\
  Why is my laptop keyboard laggy after Ubuntu upgrade?\
  May 18, 2021 — if I am charging via Thunderbolt the keyboard is too laggy to use but an external keyboard is fine; if I stop charging via Thunder...

- Google\
  90W USB-C Charger (with selectable power-plug)\
  Order a USB Type-C charger for your laptop, ideal for home or office, so you never have to drag that annoying charger around again...

## wait ive found the issue. i can connect to the cable and charge normally. there is no hardware issue. but i did not power on the board where many plugs are inserted.

That makes perfect sense, and you have diagnosed a classic electrical engineering quirk. **You are experiencing a floating ground (ungrounded circuit) loop.**

When your multi-plug power board is turned **Off** (or if it doesn't have a solid connection to the wall's grounding pin), it breaks the path to the physical earth ground for any device plugged into it.

### Why this happens when the power board is turned off:

1. **The Ground Path is Severed:** Many multi-plug power strips only bridge the ground connection when the master switch is physically flipped to "On," or they rely on active circuitry to route ground faults.
2. **Induced Stray Voltage:** When the board is off, your laptop charger might still be pulling power or trying to bleed off tiny amounts of static and alternating current (AC) leakage. Because the board has no path to the earth ground, that stray electricity has nowhere to go.
3. **The Laptop Becomes the Ground:** The stray electricity travels up the charging cable and uses your laptop's metal frame—and your hands touching the keyboard—as the path to ground. This tiny, invisible electrical charge disrupts the low-voltage matrix sensors under your keyboard, causing the missing strokes and severe lag you saw in `evtest`.

### What to do next:

- **Always turn the power board On:** If you want to charge or run the laptop safely through that power board without input lag, the board itself needs to be switched on and active.
- **Inspect the power board:** If the board is on but the lag returns when you plug other heavy devices into it, the board's internal surge protection or grounding component might be worn out. If it only happens when the board is switched off, the board is structurally working exactly as designed when unpowered.

You saved yourself a lot of software troubleshooting—this was a textbook electrical interference loop!

Now that the source of the electrical interference is found, let me know:

- Is your keyboard **typing perfectly now** with the power board switched on?
- Did you need to revert any of the testing commands we used earlier, like removing the **`atkbd.reset`** boot flag?

## why does the multi plug power board have sth to do when off

It seems completely counterintuitive that a power board can affect your laptop when it is switched **off**, but it comes down to how electrical switches are built.

When you flip the switch on a multi-plug power board to "Off," **it only disconnects the Live (Hot) wire.** It does **not** disconnect the Neutral or the Ground wires. They remain physically connected in a continuous loop between the wall and your charger.

Here is exactly why that creates the keyboard lag when the board is off:

### 1. The "Capacitive Coupling" Leak

Even though the main power is cut, your charger is still sitting inside a socket next to other wires. Alternating Current (AC) electricity generates an invisible electromagnetic field. Because the Neutral and Ground wires are still connected inside the unpowered board, a tiny amount of voltage from the main wall outlet can "jump" across the air gap inside the power board via a phenomenon called **capacitive coupling**. This induces a small ghost current (stray voltage) that travels straight up your charger cable into your laptop.

### 2. No Escape Path (The Floating Ground)

Normally, if a charger gets stray electricity, it safely dumps it down the Ground wire into the earth. However, many power strips isolate or disrupt the true earth ground connection when switched off, or the presence of other unpowered appliances plugged into the same board creates an "antenna" effect.

The stray electricity gets trapped. Because it has nowhere else to go, **it uses your laptop chassis as a giant capacitor** to store that tiny electrical charge.

### 3. Disrupted Keyboard Matrix

Your laptop keyboard doesn't use mechanical physical valves; it uses a grid of highly sensitive, low-voltage electrical traces. When you press a key, the laptop registers a tiny drop in voltage at that specific grid coordinate.

When the unpowered power board floods your laptop with trapped stray voltage, it alters the electrical balance of the motherboard. The keyboard controller gets confused by the noise, can't tell if a key is actually being pressed, and starts dropping or buffering your keystrokes.

When you turn the power board **On**, the circuit stabilizes, proper grounding is enforced across the whole rail, and the stray voltage is instantly swept away—making your keyboard work perfectly again!

Now that the mystery is solved, let me know:

- Did you need help **reverting the `atkbd.reset` command** we added to your Ubuntu boot settings earlier so your system goes back to default?

- Is your laptop keyboard **fully responsive** now?

