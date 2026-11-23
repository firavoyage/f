# how to restart desktop wo killing all windows on gnome Ubuntu

4:36 AM

### how to restart desktop wo killing all windows on gnome Ubuntu

To restart the GNOME desktop on Ubuntu without closing your open windows, **press `Alt + F2`, type `r`, and press `Enter`**. 

Whether this preserves your windows depends on whether your session is running on **X11 (Xorg)** or **Wayland**. [](https://superuser.com/questions/1164174/how-can-i-restart-the-gnome-shell-on-wayland)

#### 1\. On X11 / Xorg (Preserves Windows)

On X11, the window manager and display server are separate, allowing GNOME Shell to reload cleanly in place: 

* **Keyboard shortcut.** Press `Alt + F2` to open the "Run a Command" box, type `r`, and hit `Enter`. Your screen will flicker briefly and reload without closing apps.
* **Terminal or TTY command.** If the UI is unresponsive to `Alt + F2`, switch to a virtual terminal (`Ctrl + Alt + F3`), log in, and run `DISPLAY=:0 gnome-shell --replace &` (or send a quit signal via `killall -3 gnome-shell`, though experiences on [Ask Ubuntu](https://askubuntu.com/questions/455301/how-can-i-restart-gnome-shell-after-it-freezes-or-becomes-unresponsive) are mixed on whether `killall` always preserves every window or extension). [](https://askubuntu.com/questions/455301/how-can-i-restart-gnome-shell-after-it-freezes-or-becomes-unresponsive)

#### 2\. On Wayland (Closes Windows)

Modern Ubuntu versions default to Wayland, where GNOME Shell acts as the compositor itself: [](https://superuser.com/questions/1164174/how-can-i-restart-the-gnome-shell-on-wayland)

* **No seamless reload.** Running `Alt + F2` \-> `r` will display _"Restart is not available on Wayland"_.
* **Display manager restart.** Because the compositor owns the window connections, restarting GNOME Shell on Wayland (`sudo systemctl restart gdm` or `killall -HUP gnome-shell`) terminates all open GUI applications, a consensus noted by users on both [Reddit](https://www.reddit.com/r/Ubuntu/comments/184tgi4/how%5Fdo%5Fi%5Freboot%5Fmy%5Fgraphical%5Finterface%5Fwithout/) and [Super User](https://superuser.com/questions/1164174/how-can-i-restart-the-gnome-shell-on-wayland). Save your work before restarting the session on Wayland. [](https://www.reddit.com/r/Ubuntu/comments/184tgi4/how%5Fdo%5Fi%5Freboot%5Fmy%5Fgraphical%5Finterface%5Fwithout/)

_(Tip: You can check which display server you are running by executing `echo $XDGSESSIONTYPE` in a terminal.)_

If you're still stuck, let me know:

* Your **Ubuntu version** and **session type** (`x11` or `wayland`)
* Whether your desktop is **completely frozen** or just glitching

I can share specific recovery steps or ways to switch to X11.

* [](https://www.fosslinux.com/3495/how-to-refresh-desktop-in-ubuntu-without-rebooting-pc.htm)  
FOSS Linux  
How to Refresh the Ubuntu Desktop Without Rebooting (2026)  
Press Alt + F2 on your keyboard. A small “Run a Command” box appears in the center of your screen. Type the letter r and hit Enter...
* [](https://superuser.com/questions/1164174/how-can-i-restart-the-gnome-shell-on-wayland)  
Super User  
How can I restart the GNOME shell on Wayland? - Super User  
To forcefully restart the GNOME Shell on Wayland, the command \`killall -HUP gnome-shell\` can be executed from the command runner (
* [](https://askubuntu.com/questions/455301/how-can-i-restart-gnome-shell-after-it-freezes-or-becomes-unresponsive)  
Ask Ubuntu  
How can I restart GNOME Shell, after it freezes or becomes unresponsive?  
Command Line Shell Restart (Signals): Sending a \`SIGQUIT\` signal … process is often suggested to restart the shell without closing...

Show all

## It's x11\. It's stuck. After a sleep network manager isn't working, the laptop black for a while, though all apps run and any system control stuck

It's x11\. It's stuck. After a sleep network manager isn't working, the laptop black for a while, though all apps run and any system control stuck

4:38 AM

### It's x11\. It's stuck. After a sleep network manager isn't working, the laptop black for a while, though all apps run and any system control stuck

Since you are on **X11**, you can force GNOME Shell to reload and restart NetworkManager from a virtual console (TTY) without closing your open apps.

#### Step 1: Switch to a TTY and Restart GNOME Shell

1. Press **`Ctrl + Alt + F3`** (or `F4`/`F5`) to switch to a text-only terminal screen.
2. Log in with your Ubuntu username and password.
3. Reload the desktop shell in place by running:  
bash  
```  
DISPLAY=:0 gnome-shell --replace &  
```  
  
_(If you run a multi-monitor setup or customized display number, check `echo $DISPLAY` first or use `killall -3 gnome-shell` to trigger an automatic X11 respawn.)_

#### Step 2: Fix the Stuck NetworkManager

Because sleep/suspend often hangs the network daemon and freezes system settings panels waiting on D-Bus responses, restart NetworkManager while still in the TTY:

bash

```
sudo systemctl restart NetworkManager

```



_(Optional: If your Wi-Fi card is still unresponsive after suspend, reload its driver or run `sudo nmcli networking off && sudo nmcli networking on`.)_

#### Step 3: Return to Your Desktop

1. Press **`Ctrl + Alt + F2`** (or `Ctrl + Alt + F1`, depending on your Ubuntu version) to switch back to your graphical session.
2. Your open windows should still be intact, and the top bar and system controls should respond normally.

If the desktop or Wi-Fi still won't respond after trying this, let me know:

* Your **Ubuntu version** (e.g., 22.04 or 24.04)
* Your **laptop model or Wi-Fi chipset** (`lspci | grep -i network`)

I can help you troubleshoot the suspend/resume bug so it stops happening after sleep.

## Why does it often happen after sleep

Why does it often happen after sleep

4:38 AM

### Why does it often happen after sleep

This happens because **waking from sleep triggers a cascade where a stalled hardware driver blocks NetworkManager, which then freezes GNOME Shell over D-Bus**.

While your background apps keep running independently, the desktop interface and network controls lock up due to three connected bottlenecks:

#### 1\. Hardware & Driver Wake-Up Failure

* **Power state mismatch.** When a laptop enters sleep (`s2idle` or `deep` suspend), the kernel powers down the Wi-Fi and Ethernet chips. On wake, certain Wi-Fi firmware or PCIe power-management states fail to reinitialize properly.
* **Kernel wait states.** When the network card refuses to respond, the Linux kernel driver hangs while waiting for the hardware to answer.

#### 2\. NetworkManager & D-Bus Deadlock

* **Synchronous calls.** GNOME Shell's top bar, quick settings, and system control panels communicate with `NetworkManager` and `systemd-logind` using **D-Bus**.
* **UI thread blocking.** When `NetworkManager` gets stuck waiting on the frozen Wi-Fi driver, it stops replying to D-Bus status queries. Because GNOME Shell executes many of these desktop UI checks on its main thread, the entire shell and system settings panel freeze waiting for a reply that never arrives.

#### 3\. Display & GPU Resume Lag (The Black Screen)

* **Framebuffer reinitialization.** The brief black screen happens when Xorg and your GPU driver (especially NVIDIA proprietary drivers or certain Intel/AMD power-saving states) take several seconds to restore video memory and re-detect displays.
* **GNOME Shell timeouts.** If the GPU wake-up overlaps with `NetworkManager` hanging, GNOME Shell's compositor loop stalls completely, leaving your existing X11 app windows rendering while the desktop shell itself becomes unresponsive.

---

#### How to Prevent It Permanently

You can usually stop this from recurring with one of two targeted fixes:

1. **Automate the NetworkManager restart on wake.** Create a small systemd sleep hook script in `/lib/systemd/system-sleep/` that automatically restarts `NetworkManager` (or reloads your Wi-Fi kernel module) every time the laptop resumes from suspend.
2. **Switch sleep modes (`s2idle` vs. `deep`).** Modern laptops often default to Windows-style Modern Standby (`s2idle`), which frequently glitches Linux Wi-Fi and GPU drivers. Checking `cat /sys/power/mem_sleep` and switching to `deep` (S3) sleep in GRUB often resolves wake freezes completely.

If you want to set up a permanent fix, share:

* Your **Ubuntu version**
* Output of **`lspci | grep -i network`** (your Wi-Fi card)
* Output of **`cat /sys/power/mem_sleep`** (your supported sleep modes)

I can give you the exact systemd wake script or GRUB setting for your hardware.

This is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode&gl=us)

## Search for this issue

Search for this issue

4:39 AM

### Search for this issue

Yes—this exact combination of **a prolonged black screen, broken NetworkManager, and frozen GNOME Shell controls after suspend** is a well-documented set of bugs across recent Ubuntu releases (especially 22.04, 24.04, and 26.04).

#### 1\. Why the Black Screen & Frozen Shell Happen Together

* **GPU & Framebuffer Wake Delays:** According to troubleshooting guides from [CloudHouse Technologies](https://cloudhousetechnologies.com/blog/how-to-fix-ubuntu-black-screen-after-suspend-2026) and Ubuntu Discourse, the prolonged black screen on resume is most commonly caused by GPU drivers—particularly **NVIDIA** (550/560+ series) and hybrid Intel/NVIDIA setups—failing to restore video memory allocations immediately. [](https://discourse.ubuntu.com/t/laptop-screen-having-trouble-turning-on-after-sleep-being-off/81112)
* **GNOME Shell Compositor Stalls:** As noted in upstream GNOME bug reports on [Launchpad](https://bugs.launchpad.net/bugs/2106697) and [GitHub](https://github.com/trycua/cua/issues/3236), X11 GNOME Shell can experience a silent compositor stall or a 30-second lock-screen timeout during wake-up. Your background apps stay alive in X11, while the shell interface itself stops responding to clicks. [](https://github.com/trycua/cua/issues/3236)

#### 2\. Why NetworkManager Dies on Resume

* **Wi-Fi Driver Crash / Deep Sleep:** Technical guides from [CloudHouse Technologies](https://cloudhousetechnologies.com/blog/how-to-fix-ubuntu-wifi-dropping-after-sleep-or-suspend-2026-guide) and [Medium](https://elizariy.medium.com/ubuntu-24-04-wi-fi-not-reconnecting-after-suspend-the-fix-that-worked-on-my-thinkpad-t14-gen-5-bc429c5d3c99) highlight that Intel (`iwlwifi`), Qualcomm (`ath11k_pci`), and Realtek Wi-Fi adapters frequently fail to wake from PCIe deep sleep states, crashing the kernel module. [](https://cloudhousetechnologies.com/blog/how-to-fix-ubuntu-wifi-dropping-after-sleep-or-suspend-2026-guide)
* **D-Bus Chain Reaction:** Because `NetworkManager` and `ModemManager` hold active sleep inhibitors (detailed by [It's FOSS](https://itsfoss.com/linux-laptop-suspend-inhibitor-lock/)) and feed live status to GNOME's Quick Settings menu over D-Bus, a hung network daemon blocks GNOME's system controls from responding.

---

#### Most Effective Fixes Found Across Community Reports

Depending on your hardware, users and maintainers recommend three targeted fixes:

| Root Cause                     | Proven Permanent Fix                                                                                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Wi-Fi Power Saving**         | Disable NetworkManager power saving by creating /etc/NetworkManager/conf.d/wifi-powersave-off.conf containing \[connection\] and wifi.powersave = 2, then restarting NetworkManager.                   |
| **Frozen Wi-Fi Kernel Module** | Place an executable script in /usr/lib/systemd/system-sleep/ that runs modprobe -r <your\_wifi\_driver> and modprobe <your\_wifi\_driver> followed by systemctl restart NetworkManager upon post wake. |
| **NVIDIA Black Screen Delay**  | Enable NVreg\_PreserveVideoMemoryAllocations=1 in your NVIDIA kernel module options and ensure nvidia-suspend.service, nvidia-hibernate.service, and nvidia-resume.service are enabled.                |

_(Note: If you want to inspect the exact stall on your machine after it happens, run `journalctl -b -p err` or `sudo dmesg | grep -iE "iwlwifi|ath|rtw|nvidia|error"` in a terminal to see which driver timed out.)_

If you'd like to narrow down which fix applies to your laptop, paste the output of:

* **`lspci | grep -iE "vga|3d|network"`** (shows your GPU and Wi-Fi chip)
* **`sudo dmesg -T | tail -n 30`** right after a wake freeze

I can identify the exact culprit and give you the exact config file to fix it.

* [](https://discourse.ubuntu.com/t/laptop-screen-having-trouble-turning-on-after-sleep-being-off/81112)  
Ubuntu Discourse  
Laptop Screen Having Trouble Turning On After Sleep/Being Off  
Laptops with Intel iGPU and NVIDIA dGPU ・ often experience delayed display turn-on, flashing black/frozen screens, and potential r...
* [](https://cloudhousetechnologies.com/blog/how-to-fix-ubuntu-wifi-dropping-after-sleep-or-suspend-2026-guide)  
CloudHouse Technologies  
How to Fix Ubuntu WiFi Dropping After Sleep or Suspend (2026 Guide)  
Ubuntu WiFi drops after sleep because. The most reliable fix is disabling WiFi power saving mode via NetworkManager configuration.
* [](https://elizariy.medium.com/ubuntu-24-04-wi-fi-not-reconnecting-after-suspend-the-fix-that-worked-on-my-thinkpad-t14-gen-5-bc429c5d3c99)  
Medium·Elizariy Drozdovskiy  
Medium  
Wi-Fi fails to reconnect after suspend … firmware crashes on resume. Troubleshooting: Toggling Wi-Fi and restarting NetworkManager...

Show all

## Will debian solve this

Will debian solve this

4:40 AM

### Will debian solve this

**Switching to Debian will likely reduce GNOME Shell crashes, though it won't automatically fix hardware sleep issues.**

Because this bug is a mix of GNOME Shell regressions and Linux kernel power management, moving to Debian splits the problem in half:

#### What Debian Will Likely Improve

* **Fewer GNOME Shell freezes:** Debian Stable (currently Debian 13 "Trixie") runs an older, thoroughly patched version of GNOME without Ubuntu's custom extensions (like Ubuntu Dock or Desktop Icons NG), which are frequent culprits behind X11 shell locks during resume.
* **Predictable updates:** Debian avoids mid-cycle kernel and graphics stack jumps (like Ubuntu's HWE kernels) that often introduce new suspend regressions.

#### What Will Likely Stay the Same

* **Wi-Fi & GPU wake bugs are kernel-level:** Debian uses the same upstream Linux kernel, `NetworkManager`, and NVIDIA/Intel/AMD firmware. If your Wi-Fi card or GPU fails to wake from `s2idle` sleep on Ubuntu, it will usually behave the exact same way on Debian unless you apply the same kernel flags or systemd wake scripts.
* **Older hardware support:** If you have a very new laptop (released in the last 1–2 years), Debian Stable's older kernel might actually handle sleep _worse_ than Ubuntu unless you install a newer kernel from `debian-backports`.

#### What I Would Do

I would **keep Ubuntu and fix the sleep hook first**, since reinstalling an entire OS takes far more time than adding a 5-line `systemd-sleep` script or disabling Wi-Fi power saving—and you'd likely have to apply that exact same tweak on Debian anyway.

If you're still considering a switch or want to test a fix first, let me know:

* Your **laptop model** and **approximate release year**
* Whether you have an **NVIDIA GPU**

I can tell you whether Debian's kernel supports your hardware well or give you a quick fix for Ubuntu.

## Search

Search

4:40 AM

### Search

Yes—search results confirm that **Debian experiences the exact same sleep/resume issues**, alongside some clear stability trade-offs when compared to Ubuntu. [](https://www.reddit.com/r/debian/comments/1pnyvj6/any%5Fway%5Fto%5Ffix%5Fcoming%5Fback%5Ffrom%5Fsuspendedsleep/)

#### 1\. Debian Still Suffers From the Same Sleep Bugs

* **Wi-Fi dropping after sleep:** Users on the Debian User Forums and [Linux.org](https://www.linux.org/threads/wireless-disabled-after-debian-13-goes-to-sleep.61938/) regularly report wireless adapters disappearing or getting disabled after suspend on Debian 13 (Trixie). A discussion on the [Framework Community](https://community.frame.work/t/amd-350-debian-13-trixie-rc3-failing-to-suspend-wifi/73466) shows that Debian users rely on the exact same `systemd` `modprobe -r` / `modprobe` sleep-hook workaround to unload and reload Wi-Fi kernel modules. [](https://community.frame.work/t/amd-350-debian-13-trixie-rc3-failing-to-suspend-wifi/73466)
* **Black screens & GNOME Shell glitches:** On [NVIDIA Developer Forums](https://forums.developer.nvidia.com/t/after-recent-debian-upgrades-black-screen-upon-resume/346519), Debian Trixie users report black screens on resume that require switching TTYs (`Ctrl+Alt+F3` and back) or tweaking `nvidia-suspend`/`nvidia-resume` services. Additionally, one point of agreement among users on [Reddit](https://www.reddit.com/r/debian/comments/1pnyvj6/any%5Fway%5Fto%5Ffix%5Fcoming%5Fback%5Ffrom%5Fsuspendedsleep/) is that GNOME's screen blanking and automatic lock settings frequently trigger display resume issues on Debian unless disabled. [](https://forums.developer.nvidia.com/t/after-recent-debian-upgrades-black-screen-upon-resume/346519)

#### 2\. Where Debian Does Beat Ubuntu

* **Overall desktop stability:** Users on [Reddit](https://www.reddit.com/r/debian/comments/1wtyqug/recently%5Fswitched%5Ffrom%5Fubuntu%5Fto%5Fdebian%5Fand%5Fit/) who switched from Ubuntu to Debian generally agree that Debian's minimalist setup (without Ubuntu's custom GNOME extensions or aggressive background services) feels noticeably more stable day-to-day. [](https://www.reddit.com/r/debian/comments/1wtyqug/recently%5Fswitched%5Ffrom%5Fubuntu%5Fto%5Fdebian%5Fand%5Fit/)
* **Fewer mid-cycle regressions:** Because Ubuntu ships newer kernels and graphics stacks faster, it occasionally hits regressions—such as a long-standing [Ubuntu NVIDIA suspend/resume bug](https://www.phoronix.com/news/NVIDIA-Ubuntu-2025-SnR) tracked by Phoronix—whereas Debian freezes its package versions for years. [](https://www.phoronix.com/news/NVIDIA-Ubuntu-2025-SnR)

#### Bottom Line

Switching to Debian will give you a cleaner, less modified GNOME desktop, **but it will not cure a stubborn Wi-Fi card or GPU driver failing to wake from sleep**. You will almost certainly still need a `systemd` sleep script or driver tweak on either distro. [](https://forums.developer.nvidia.com/t/after-recent-debian-upgrades-black-screen-upon-resume/346519)

If you'd like to fix this right now on your current Ubuntu system without reinstalling, share:

* Output of **`lspci -nnk | grep -iA3 -E "network|vga|3d"`** (shows your exact Wi-Fi and GPU kernel drivers)
* Whether your screen **unlocks normally** after the black screen or stays frozen at the login prompt

I can write the exact `systemd` sleep hook for your hardware.

* [](https://www.reddit.com/r/debian/comments/1wtyqug/recently%5Fswitched%5Ffrom%5Fubuntu%5Fto%5Fdebian%5Fand%5Fit/)  
Reddit·r/debian  
Recently switched from Ubuntu to Debian, and it feels much more ...  
Debian is widely regarded as more stable and reliable than Ubuntu. features like sleep mode and power profiles working without iss...
* [](https://forums.developer.nvidia.com/t/after-recent-debian-upgrades-black-screen-upon-resume/346519)  
NVIDIA Developer Forums  
After recent Debian upgrades: Black screen upon resume - Linux  
I also made a script to do the same automatically on wake from sleep but it may not work on screen sleep alone.
* [](https://community.frame.work/t/amd-350-debian-13-trixie-rc3-failing-to-suspend-wifi/73466)  
Framework Community  
AMD 350 / Debian 13 (trixie RC3) failing to suspend  
I solved this using the following systemd service: \[Unit\] Before=sleep.target … you have to reload the systemd daemon and enable t...

Show all

## It's permanently restarting... And i can move cursor and nothing reacts

It's permanently restarting... And i can move cursor and nothing reacts

4:41 AM

### It's permanently restarting... And i can move cursor and nothing reacts

That means `gnome-shell` is stuck in a crash/restart loop, or Xorg is running without a working window manager. Because the cursor moves, your system isn't completely dead—your X11 display server is still alive, and you can recover from a TTY.

#### Step 1: Break the Restart Loop in TTY

1. Press **`Ctrl + Alt + F3`** to drop into the text terminal and log in.
2. Stop any runaway `gnome-shell` processes:  
bash  
```  
killall -9 gnome-shell  
```  

3. Check why it is crashing so you don't hit the same error again:  
bash  
```  
journalctl /usr/bin/gnome-shell -n 20 --no-pager  
```  
  
_(Common culprit after sleep: a broken GNOME extension crashing the shell on reload.)_

#### Step 2: Relaunch GNOME Shell Cleanly

Before restarting the shell, temporarily disable extensions (which are the #1 cause of endless shell restart loops on X11) and start a single clean instance:

bash

```
gsettings set org.gnome.shell disable-user-extensions true
DISPLAY=:0 setsid gnome-shell --replace >/dev/null 2>&1 &

```



_(Using `setsid` detaches it from your TTY so it doesn't crash when you switch screens.)_

#### Step 3: Switch Back to Your Desktop

1. Press **`Ctrl + Alt + F2`** (or `Ctrl + Alt + F1`) to return to your graphical session.
2. Your open windows should still be there, and the top bar and clicks should respond again.

---

#### If It Still Loops or Won't Respond

If `gnome-shell` refuses to stay up even with extensions disabled, **save your open work first** before restarting the display manager:

* **Save via terminal (if needed):** If you have unsaved files in editors like Vim/Nano or terminal apps, handle them in TTY3.
* **Last resort (closes GUI windows):** Restart the display manager cleanly with:  
bash  
```  
sudo systemctl restart gdm3  
```  


Once you're back in (or if it threw a specific error in `journalctl`), let me know:

* What **error message** appeared in the `journalctl` output
* Whether disabling extensions **stopped the restart loop**

I can help you pinpoint which extension or driver caused the loop and prevent it from happening again.

## Search. Does kde solve it

Search. Does kde solve it

4:43 AM

### Search. Does kde solve it

 \[Highlight start\] **KDE Plasma solves the shell-lockup and NVIDIA black-screen symptoms better than GNOME, though it still cannot prevent kernel-level Wi-Fi or suspend failures on its own.** \[Highlight end\] 

Search results show a clear distinction between how KDE handles the _desktop crash_ versus the _underlying hardware sleep bug_:

#### 1\. Where KDE Actually Helps

* **Absorbs GPU & compositor glitches:** According to a 2026 technical comparison on [mfaruk.com](https://mfaruk.com/blog/kde-vs-gnome-nvidia-suspend-rescue), KDE's compositor (`KWin`) handles NVIDIA suspend/resume driver bugs much more gracefully than GNOME Shell—often preventing the prolonged black screen and complete desktop lockup even when the underlying driver hiccups.
* **Modular recovery without losing windows:** Unlike GNOME Shell (where the panel, window manager, and compositor are fused into a single process that crashes everything together), KDE separates its desktop shell (`plasmashell`) from its window manager (`KWin`). As noted on [FOSS Linux](https://www.fosslinux.com/43890/how-to-restart-kde-plasma-desktop-without-rebooting.htm) and [KDE Discuss](https://discuss.kde.org/t/how-to-restart-plasmashell-wayland-from-a-tty/25319), if your panels freeze on KDE, you can restart `plasmashell` (`systemctl --user restart plasma-plasmashell.service`) or `kwin_x11 --replace &` on both X11 and Wayland without closing your open application windows. [](https://discuss.kde.org/t/how-to-restart-plasmashell-wayland-from-a-tty/25319)

#### 2\. What KDE Does _Not_ Solve

* **Kernel & Wi-Fi driver hangs:** Because KDE uses the exact same Linux kernel, `systemd-logind`, and `NetworkManager` stack, a Wi-Fi card or PCIe device failing to wake from sleep will still drop your network or stall suspend—a behavior tracked across [KDE Bugzilla](https://bugs.kde.org/show%5Fbug.cgi?id=510992) and [KDE Discuss](https://discuss.kde.org/t/black-screen-after-sleep/34149).
* **KDE has its own power-daemon quirks:** Users on [KDE Discuss](https://discuss.kde.org/t/some-issues-with-screen-lock-sleep-and-freezing-desktop/31210) and [KDE Discuss (Plasma 6.6 thread)](https://discuss.kde.org/t/panels-randomly-freeze-on-wake-from-sleep-since-6-6-update/44950) note that KDE's power manager (`powerdevil`) can occasionally freeze panels on wake, requiring a quick `systemctl --user restart plasma-powerdevil`. [](https://discuss.kde.org/t/black-screen-after-sleep/34149)

#### Verdict: Should You Switch?

* **If you have an NVIDIA GPU or hate GNOME's single-process freezes:** Switching to **Kubuntu** (or installing `kde-standard` alongside Ubuntu) is a worthwhile upgrade because `KWin` isolates panel crashes from your running apps. [](https://www.fosslinux.com/43890/how-to-restart-kde-plasma-desktop-without-rebooting.htm)
* **If your primary pain is Wi-Fi dying after sleep:** Changing desktop environments won't fix a hardware driver failing to wake—you will still need a `systemd` sleep script or GRUB `mem_sleep_default` tweak regardless of whether you use GNOME, KDE, or Debian. [](https://discussion.fedoraproject.org/t/black-screen-after-sleep-fedora-42-kde-plasma/150325)

If you want to decide whether switching to KDE is worth it for your exact laptop, let me know:

* Whether you have an **NVIDIA, AMD, or Intel GPU**
* Your **Ubuntu version** (e.g., 24.04 or 26.04)

I can tell you how well KDE Plasma handles your specific GPU or help you install it safely alongside GNOME to test it out.

* [](https://discuss.kde.org/t/black-screen-after-sleep/34149)  
KDE Discuss  
Black screen after sleep - Help - KDE Discuss  
When resuming after sleep (for pressing power button to wake up) the screen is black. No cursor. the computer is completely frozen...
* [](https://discuss.kde.org/t/some-issues-with-screen-lock-sleep-and-freezing-desktop/31210)  
KDE Discuss  
Some issues with screen lock/sleep and freezing desktop - KDE Discuss  
Restarting powerdevil: Running the command \`systemctl --user restart plasma-powerdevil\` may temporarily fix the desktop freezing i...
* [](https://www.fosslinux.com/43890/how-to-restart-kde-plasma-desktop-without-rebooting.htm)  
FOSS Linux  
Restart KDE Plasma Desktop Without Rebooting (2026)  
If your panel works, but your actual application windows are frozen, refusing to move, the issue is not the shell. It is KWin, the...

Show all

## Search about this issue on different os, and how Linux users fix it via some standard proven commonly used setup or doesn't exist in general

Search about this issue on different os, and how Linux users fix it via some standard proven commonly used setup or doesn't exist in general

4:44 AM

### Search about this issue on different os, and how Linux users fix it via some standard proven commonly used setup or doesn't exist in general

**There is no single "one-size-fits-all" fix on Linux, because sleep reliability depends on your laptop's firmware, GPU, and Wi-Fi chipset—though there is a standard, proven checklist that experienced Linux users apply.**

Sleep/resume is actually a cross-OS headache caused by a hardware shift called **Modern Standby (`s2idle` / S0ix)**, which replaced traditional **S3 (`deep`)** sleep on modern laptops. 

#### 1\. How Sleep/Resume Compares Across Operating Systems

* **macOS:** Works seamlessly because Apple controls both the silicon (Apple Silicon) and the OS, eliminating third-party BIOS/ACPI firmware mismatches.
* **Windows:** Suffers heavily from Modern Standby (`s2idle`) bugs too—such as waking up hot inside a backpack, draining battery overnight, or Wi-Fi adapters failing to wake. However, hardware vendors write and test their proprietary ACPI drivers specifically for Windows first. [](https://community.frame.work/t/is-framework-13-amd-s2idle-modern-standby-efficient-enough/46431)
* **Linux (Ubuntu, Fedora, Arch, Debian):** Because manufacturers often ship broken ACPI tables meant only for Windows and lock down firmware specs, Linux kernels have to reverse-engineer or work around quirky power states. As a result, whether a Linux laptop sleeps cleanly out of the box comes down to hardware compatibility (which is why Linux-first brands like ThinkPad, System76, and Framework have dedicated kernel patches).

---

#### 2\. The Standard Linux Power-User Checklist

While there isn't a single magic switch, the Linux community (documented heavily on the [Arch Wiki](https://wiki.archlinux.org/title/Power%5Fmanagement/Suspend%5Fand%5Fhibernate) and distro forums) relies on a **four-step standard setup** to permanently eliminate sleep issues: [](https://wiki.archlinux.org/title/Power%5Fmanagement/Suspend%5Fand%5Fhibernate)

1. **Force `deep` (S3) sleep over `s2idle` (if supported):**
  * Many laptops default to buggy `s2idle` even when traditional `deep` sleep is available in firmware.
  * **Standard setup:** Add `mem_sleep_default=deep` to `GRUB_CMDLINE_LINUX_DEFAULT` in `/etc/default/grub` and update GRUB. [](https://gist.github.com/julianlam/166823c982fd20ee4a748442cc77bbef?permalink%5Fcomment%5Fid=4361796)
2. **Automate hardware resets with a `systemd-sleep` hook:**
  * Because Wi-Fi cards and Bluetooth chips frequently fail to reinitialize after sleep, users drop a small script in `/usr/lib/systemd/system-sleep/` that automatically unloads/reloads the Wi-Fi kernel module (`modprobe -r` / `modprobe`) and restarts `NetworkManager` on `post` wake. [](https://bbs.archlinux.org/viewtopic.php?id=296394)
3. **Disable PCIe & Wi-Fi aggressive power saving:**
  * Aggressive PCIe Active State Power Management (`pcie_aspm`) and NetworkManager Wi-Fi power saving frequently crash network cards during suspend transitions.
  * **Standard setup:** Set `wifi.powersave = 2` in `/etc/NetworkManager/conf.d/` and, on stubborn laptops, pass `pcie_aspm=off` (or `nvme_core.default_ps_max_latency_us=0` for NVMe SSD wake freezes) in GRUB. [](https://askubuntu.com/questions/1550245/wifi-not-working-after-suspend-action)
4. **Switch to Hibernate (Suspend-to-Disk) for total reliability:**
  * When a laptop's firmware is too broken for reliable RAM sleep, many Linux developers bypass sleep altogether and configure **Hibernate** (saving RAM to a swap partition/file and powering off completely) or **Suspend-then-Hibernate**—which takes a few extra seconds to wake, but never drops Wi-Fi, drains battery, or freezes the desktop.

If you want to apply the right steps from this checklist to your laptop, share:

* Your **laptop brand/model**
* Output of **`cat /sys/power/mem_sleep`**

I can tell you right away whether your laptop supports `deep` sleep or if a `systemd-sleep` hook / Hibernate setup is your best permanent fix.

* [](https://wiki.archlinux.org/title/Power%5Fmanagement/Suspend%5Fand%5Fhibernate)  
ArchWiki  
Power management/Suspend and hibernate  
Suspending and hibernation are delicate tasks, requiring system and device state to be preserved while they are powered off. Bugs ...
* [](https://blog.authon.dev/how-to-fix-linux-suspend-draining-your-battery-overnight)  
blog.authon.dev  
How to Fix Linux Suspend Draining Your Battery Overnight  
S3 support entirely from their ACPI tables. Linux sees only s2idle as available and uses it by default the s2idle implementation i...
* [](https://community.frame.work/t/is-framework-13-amd-s2idle-modern-standby-efficient-enough/46431)  
Framework Community  
Is Framework 13 AMD s2idle (modern standby) efficient enough?  
Current Linux distributions lack full support for the background activities inherent in modern standby (s2idle), such as handling ...

Show all

## is it better to expect occasional restart on desktop, and scale servers rather than trying to make one machine perfectly reliable

### is it better to expect occasional restart on desktop, and scale servers rather than trying to make one machine perfectly reliable

 \[Highlight start\] **Yes—treating your desktop as disposable and offloading persistent workloads to servers is the far smarter, industry-standard approach.** \[Highlight end\] 

Trying to engineer 100% uptime out of a consumer Linux laptop with complex sleep/wake states is fighting an uphill battle against proprietary firmware. Separating your **interface** (your laptop) from your **state** (your work) eliminates the stress of desktop crashes entirely.

#### Why This Architecture Wins

| Aspect                 | "Make One Laptop Bulletproof"                                     | "Disposable Desktop + Persistent Servers"                                    |
| ---------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Maintenance effort** | High (constant kernel tweaks, sleep scripts, driver babysitting). | Low (apply basic fixes, then stop worrying).                                 |
| **Impact of a freeze** | Losing open terminals, running scripts, and mental context.       | Reboot takes 15 seconds; all processes keep running untouched on the server. |
| **Scalability**        | Limited by laptop thermal/battery/RAM constraints.                | Scale compute, RAM, and uptime independently on servers.                     |

#### How to Make Your Desktop Truly "Disposable"

If you accept that your laptop might need an occasional reboot after sleep, you can set up a workflow where a reboot costs you almost zero friction:

1. **Keep stateful work off the laptop:**
  * Run long-lived processes, Docker containers, builds, and dev environments on a remote Linux server (or home server) where sleep/suspend doesn't exist.
  * Use **`tmux`** or **`zellij`** on the server so when your laptop's Wi-Fi drops or X11 freezes, you simply SSH back in and reattach to your exact terminal panes.
2. **Use stateless / auto-restoring local tools:**
  * Enable session restore in your browser and IDE (e.g., VS Code Remote-SSH automatically reconnects and restores your remote workspace after a laptop reboot).
  * Store notes, configs (`dotfiles`), and code in Git or synced cloud storage so nothing critical lives solely in local RAM.
3. **Skip sleep when practical:**
  * If you're stepping away for hours or overnight, shutting down or hibernating takes just a few seconds on modern NVMe drives and completely bypasses `s2idle` firmware bugs.

#### Where to Draw the Line

I would still spend **10 minutes** applying the low-hanging fruit on your laptop (like disabling Wi-Fi power saving or adding a quick `NetworkManager` wake script) so it doesn't break _every_ time you close the lid—but beyond that, invest your energy in making your workflow immune to reboots rather than chasing 100% laptop uptime.

If you'd like to set up a reboot-proof workflow, let me know:

* What **kind of work** you run on your laptop (coding, heavy compute, browsing, etc.)
* Whether you already have a **home server, VPS, or cloud setup**

I can recommend the cleanest `tmux` / Remote-SSH or sync setup for your workflow.

## i mean is it better to expect occasional restart regardless of using desktop or server, and scale it rather than fighting it if you serve publicly and require uptime

### i mean is it better to expect occasional restart regardless of using desktop or server, and scale it rather than fighting it if you serve publicly and require uptime

 \[Highlight start\] **Yes—expecting occasional restarts and scaling across multiple machines is the fundamental rule of reliable public infrastructure.** \[Highlight end\] 

In modern systems engineering, this is known as designing for **High Availability (HA)** rather than **High Reliability** (often summarized by the classic "Pets vs. Cattle" principle).

#### Why Scaling Beats Making One Server "Bulletproof"

Trying to keep a single server alive forever is a losing game because **reboots are unavoidable**—even on enterprise server hardware that never sleeps:

* **Mandatory security patches:** Linux kernel updates, OpenSSL fixes, and hypervisor patches regularly require full system reboots.
* **Hardware degradation:** ECC RAM eventually throws uncorrectable errors, NVMe drives wear out, and power supplies fail.
* **Software decay:** Memory leaks, file descriptor exhaustion, and zombie processes accumulate over months of uptime.

| Strategy                    | Single "Bulletproof" Server ("Pet")                        | Scaled Redundant Nodes ("Cattle")                                    |
| --------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| **Downtime during updates** | Guaranteed outage every time you patch the kernel.         | **Zero downtime** via rolling restarts (one node reboots at a time). |
| **Hardware failure**        | Complete public outage until repaired or restored.         | Load balancer automatically routes traffic to healthy nodes.         |
| **Cost & complexity**       | Exponentially expensive specialized hardware; high stress. | Cheap commodity VPS/cloud nodes; automated recovery.                 |

#### The Standard Architecture for Public Uptime

If you serve public traffic and need high uptime, you don't fight restarts—you **make restarts invisible to users**:

1. **Stateless Application Tier (2+ Nodes):**
  * Run at least two instances of your app behind a **Load Balancer** (like Cloudflare, Nginx, HAProxy, or a cloud LB).
  * Store zero user state on the local disk of those servers—keep sessions in Redis/database and uploads in object storage (like S3 or Cloudflare R2).
2. **Automated Health Checks & Self-Healing:**
  * Configure your load balancer or orchestrator (systemd, Docker Swarm, Kubernetes) to ping a `/health` endpoint every few seconds. If a node freezes or reboots, traffic stops going to it automatically.
3. **Managed or Replicated Data Layer:**
  * Databases are the hardest part to restart cleanly. Either use a managed database with automatic failover (e.g., AWS RDS, Neon, Supabase) or run a primary/replica setup so a reboot doesn't take your data offline.
4. **Proactive Scheduled Restarts:**
  * Ironically, systems that **regularly restart on a schedule** (such as rolling weekly reboots or automated `unattended-upgrades` with staggered reboot windows) achieve much higher real-world uptime than servers people try to keep running for 500+ days straight.

#### Where to Start

If you're currently on one server, you don't need complex Kubernetes clusters to apply this mindset: simply separating your **database/storage** from your **app server** and putting **two small app nodes behind a load balancer** immediately eliminates 95% of reboot-related downtime.

If you want to design a resilient setup for your project, let me know:

* What **kind of service or stack** you're hosting (web app, API, game server, etc.)
* Your **current hosting setup** (single VPS, bare metal, cloud provider)

I can suggest the simplest, lowest-cost way to make it survive restarts with zero downtime.
