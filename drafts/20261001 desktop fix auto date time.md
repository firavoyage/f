<!-- pvzge -->

# how to fix automatic timezone on ubuntu

## how to fix automatic timezone on ubuntu

To fix the automatic timezone feature on Ubuntu, you must <mark><strong>ensure that Location Services are enabled</strong></mark>, as Ubuntu uses the Geoclue service to detect your location and match your timezone. [link](https://unix.stackexchange.com/questions/90325/automatically-set-linux-timezone-according-to-location)

If your automatic timezone isn't working, follow these troubleshooting steps:

### 1. Enable Location Services & Re-Toggle Settings (GUI)

1. Open your system **Settings**.
2. Navigate to **Privacy & Security** (or **Privacy**) and ensure **Location Services** is toggled **ON**.
3. Go back to the main settings menu and click on **System** -> **Date & Time** (or just **Date & Time** depending on your Ubuntu version).
4. Toggle **Automatic Time Zone** and **Automatic Date & Time** to **OFF**, wait a few seconds, and toggle them back **ON**. [link](https://community.frame.work/t/fw13-not-updating-time-despite-automatic-time-zone-enabled/68101)

### 2. Verify or Install the Geoclue Service

If the automatic feature still doesn't respond, the system geolocation service might be missing or broken. You can fix it via the terminal: [link](https://askubuntu.com/questions/726399/auto-timezone-doesnt-update)

1. Open your terminal (`Ctrl` + `Alt` + `T`).

2. Run the following command to reinstall the location agent:\
   bash

<!---->

```
sudo apt update && sudo apt install --reinstall geoclue-2.0
```

Use code with caution.
3\. Restart your computer to apply the changes. [link](https://unix.stackexchange.com/questions/90325/automatically-set-linux-timezone-according-to-location)

### 3. Fix Dual-Boot "Time Flipping" (If using Windows)

If you are dual-booting Ubuntu and Windows, the two operating systems fight over how the hardware clock is read, which breaks automatic sync. Windows reads it as local time, while Ubuntu reads it as UTC.\
To fix this, force Ubuntu to match Windows' standard by running: [link](https://www.digitalocean.com/community/tutorials/how-to-set-up-time-synchronization-on-ubuntu-20-04)

bash

```
timedatectl set-local-rtc 1 --adjust-system-clock
```

Use code with caution.

***

### The Most Reliable Workaround: Set It Manually

If you are on a desktop that rarely travels, or you are running an Ubuntu Server, the automatic location service can be unreliable. Setting your timezone manually is the most bulletproof solution. [link](https://www.askdavetaylor.com/how-to-fix-timezone-problems-on-ubuntu-linux/)

- **Via Terminal (Recommended):**
  1. Find your exact zone name:\
     bash

<!---->

```
timedatectl list-timezones
```

Use code with caution.\
_(Press `Space` to scroll, `q` to quit)_.
2\. Set your timezone (e.g., matching America/New\_York): [link](https://linuxize.com/post/how-to-set-or-change-timezone-in-linux/)\
bash

```
sudo timedatectl set-timezone America/New_York
```

Use code with caution.

- **Via Graphical Interface:**\
  Go to **Settings** -> **Date & Time**, turn **Automatic Time Zone** to **OFF**, click on **Time Zone**, and manually select your city on the map or type it into the search bar. [link](https://help.ubuntu.com/stable/ubuntu-help/clock-timezone.html.en)

Are you running Ubuntu on a **laptop/desktop** or a **remote server**? If you are dual-booting with **Windows**, letting me know can help narrow down why it keeps breaking.

- [link](https://askubuntu.com/questions/726399/auto-timezone-doesnt-update)\
  Ask Ubuntu\
  Auto Timezone doesn't update\
  Jan 27, 2016 — It's that my computer cannot figure out where it is, via the geoclue system. That's what changes the timezone. The "time" is accur...
- [link](https://community.frame.work/t/fw13-not-updating-time-despite-automatic-time-zone-enabled/68101)\
  Framework Community\
  FW13 not updating time despite Automatic Time Zone enabled\
  The article explains how to activate or deactivate location services in Ubuntu Linux. Location services, reliant on cell tower pos...
- [link](https://unix.stackexchange.com/questions/90325/automatically-set-linux-timezone-according-to-location)\
  Unix & Linux Stack Exchange\
  Automatically set Linux timezone according to location\
  Sep 12, 2013 — Go to Settings -> Privacy -> set Location Services to 'On'. Location services; Go to Settings -> Date & Time -> Set Automatic Time...

Show all

## how to fix the time now

To fix the incorrect time immediately, you need to trigger a manual sync or override the clock via the terminal. Open your terminal (`Ctrl` + `Alt` + `T`) and follow these steps to force the correct time:

### 1. Force network time synchronization

Ubuntu uses the `systemd-timesyncd` service to sync time over the internet. You can restart and force it to update by running:

bash

```
sudo systemctl restart systemd-timesyncd
```

Use code with caution.

To check if it worked and see your current system clock status, type:

bash

```
timedatectl
```

Use code with caution.

Look for **System clock synchronized: yes** and **NTP service: active**.

### 2. Turn NTP synchronization on

If the status shows that the network time protocol (NTP) is disabled, force it on with this command:

bash

```
sudo timedatectl set-ntp true
```

Use code with caution.

### 3. Set the time manually (If internet sync fails)

If your internet connection is blocking the time servers, you can manually force the correct time right now.

1. **Turn off NTP** temporarily:\
   bash

<!---->

```
sudo timedatectl set-ntp false
```

Use code with caution.
2\. **Set the exact date and time** (use the format `YYYY-MM-DD HH:MM:SS`):\
bash

```
sudo timedatectl set-time "2026-09-30 22:58:00"
```

Use code with caution.\
_(Adjust the hour and minutes in that string to match your exact local time right now)._

Did forcing the **NTP sync** fix the clock, or did you have to **manually type the time**? If the time changes back to being incorrect after a reboot, let me know if you are **dual-booting Windows** on this machine.

## wow interesting, why doesnt auto date time toggle run sudo systemctl restart systemd-timesyncd under the hood

The **Automatic Date & Time** toggle actually _does_ interact with the same underlying time management system, but it handles things a bit differently than a hard service restart.

Here is why toggling it off and on doesn't always fix a stuck clock, while running `sudo systemctl restart systemd-timesyncd` does:

### 1. Toggling only changes "Permission," not state

When you flip the **Automatic Date & Time** switch to **ON**, you are telling Ubuntu: _"You have permission to use the network to sync the time."_

- Under the hood, the graphical toggle simply executes `timedatectl set-ntp true`.
- If the `systemd-timesyncd` service is already running but has entered a **frozen, misconfigured, or glitched state**, telling it "you still have permission to sync" doesn't force it to clear its internal cache or re-establish a broken connection to the network time (NTP) servers.

### 2. Network timeouts and "Back-off" algorithms

To prevent crashing or overloading public time servers, `systemd-timesyncd` uses a **back-off algorithm**.

- If your computer boots up and doesn't have an internet connection right away, the time sync fails.
- Instead of constantly retrying every second, the system waits longer and longer between attempts (e.g., 5 minutes, then 15 minutes, then an hour).
- Toggling the switch in the GUI doesn't reset this internal failure timer. However, a `systemctl restart` kills the active process, flushes the timer, and forces an **immediate, aggressive network request** the second the service starts back up.

### 3. The privilege gap

The GUI settings app runs in your user space. While Ubuntu handles the background permissions via a tool called **Polkit** to let you toggle the switch without typing a password, it prefers to make the least invasive change possible. Fully restarting a core system-level daemon (`systemd-timesyncd`) is a heavy-handed action that Linux generally avoids automating through a simple desktop toggle, reserving it for explicit administrator (`sudo`) commands.

Is your clock **holding the correct time** now after forcing the sync, or does it seem to **drift or change** when you restart the computer?

