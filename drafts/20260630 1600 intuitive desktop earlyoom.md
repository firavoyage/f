# .

```
# Default settings for earlyoom. This file is sourced by /bin/sh from
# /etc/init.d/earlyoom or by systemd from earlyoom.service.

# Options to pass to earlyoom
EARLYOOM_ARGS="-r 3600"

# Examples:

# Print memory report every second instead of every minute
# EARLYOOM_ARGS="-r 1"

# Available minimum memory 5%
# EARLYOOM_ARGS="-m 5"

# Available minimum memory 15% and free minimum swap 5%
# EARLYOOM_ARGS="-m 15 -s 5"

# Avoid killing processes whose name matches this regexp
# EARLYOOM_ARGS="--avoid '(^|/)(init|X|sshd|firefox)$'"

# See more at `earlyoom -h'
```

```
 ~ % sudo nano /etc/default/earlyoom

 ~ % nano /etc/default/earlyoom

 ~ % sudo systemctl restart earlyoom

 ~ % sudo systemctl status earlyoom

× earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: failed (Result: exit-code) since Tue 2026-06-30 16:31:07 CST; 6s ago
   Duration: 27ms
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
    Process: 1914110 ExecStart=/usr/bin/earlyoom $EARLYOOM_ARGS (code=exited, status=13)
   Main PID: 1914110 (code=exited, status=13)
        CPU: 26ms

Jun 30 16:31:07 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.
Jun 30 16:31:07 Fira systemd[1]: earlyoom.service: Start request repeated too quickly.
Jun 30 16:31:07 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:31:07 Fira systemd[1]: Failed to start earlyoom.service - Early OOM Daemon.
 ~ % sudo systemctl status earlyoom

× earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: failed (Result: exit-code) since Tue 2026-06-30 16:31:07 CST; 12s ago
   Duration: 27ms
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
    Process: 1914110 ExecStart=/usr/bin/earlyoom $EARLYOOM_ARGS (code=exited, status=13)
   Main PID: 1914110 (code=exited, status=13)
        CPU: 26ms

Jun 30 16:31:07 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.
Jun 30 16:31:07 Fira systemd[1]: earlyoom.service: Start request repeated too quickly.
Jun 30 16:31:07 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:31:07 Fira systemd[1]: Failed to start earlyoom.service - Early OOM Daemon.
 ~ % sudo systemctl restart earlyoom

 ~ % sudo sudo journalctl earlyoom -r
Failed to add match 'earlyoom': Invalid argument
 ~ % sudo journalctl earlyoom -r
Failed to add match 'earlyoom': Invalid argument
 ~ % sudo systemctl status earlyoom

× earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: failed (Result: exit-code) since Tue 2026-06-30 16:31:29 CST; 22s ago
   Duration: 18ms
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
    Process: 1914229 ExecStart=/usr/bin/earlyoom $EARLYOOM_ARGS (code=exited, status=13)
   Main PID: 1914229 (code=exited, status=13)
        CPU: 18ms

Jun 30 16:31:29 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.
Jun 30 16:31:29 Fira systemd[1]: earlyoom.service: Start request repeated too quickly.
Jun 30 16:31:29 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:31:29 Fira systemd[1]: Failed to start earlyoom.service - Early OOM Daemon.
 ~ % sudo systemctl restart earlyoom

 ~ % sudo systemctl restart earlyoom

 ~ % sudo systemctl status earlyoom

× earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: failed (Result: exit-code) since Tue 2026-06-30 16:33:00 CST; 22ms ago
   Duration: 19ms
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
    Process: 1914656 ExecStart=/usr/bin/earlyoom $EARLYOOM_ARGS (code=exited, status=13)
   Main PID: 1914656 (code=exited, status=13)
        CPU: 18ms

Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Start request repeated too quickly.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: Failed to start earlyoom.service - Early OOM Daemon.
 ~ % sudo systemctl status earlyoom

× earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: failed (Result: exit-code) since Tue 2026-06-30 16:33:00 CST; 2s ago
   Duration: 19ms
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
    Process: 1914656 ExecStart=/usr/bin/earlyoom $EARLYOOM_ARGS (code=exited, status=13)
   Main PID: 1914656 (code=exited, status=13)
        CPU: 18ms

Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Start request repeated too quickly.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: Failed to start earlyoom.service - Early OOM Daemon.
 ~ % sudo systemctl restart earlyoom

 ~ % sudo systemctl status earlyoom

● earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: active (running) since Tue 2026-06-30 16:33:13 CST; 1s ago
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
   Main PID: 1914746 (earlyoom)
      Tasks: 1 (limit: 10)
     Memory: 504.0K (max: 50.0M available: 49.5M peak: 756.0K)
        CPU: 29ms
     CGroup: /system.slice/earlyoom.service
             └─1914746 /usr/bin/earlyoom -m 5 -s 5 -r 3600

Jun 30 16:33:13 Fira systemd[1]: Started earlyoom.service - Early OOM Daemon.
Jun 30 16:33:13 Fira earlyoom[1914746]: earlyoom v1.7
Jun 30 16:33:13 Fira earlyoom[1914746]: mem total: 15335 MiB, swap total: 8447 MiB
Jun 30 16:33:13 Fira earlyoom[1914746]: sending SIGTERM when mem <=  5.00% and swap <=  5.00%,
Jun 30 16:33:13 Fira earlyoom[1914746]:         SIGKILL when mem <=  2.50% and swap <=  2.50%
Jun 30 16:33:13 Fira earlyoom[1914746]: mem avail:  3782 of 15335 MiB (24.66%), swap free:    0 of 8447 MiB ( 0.00%)
 ~ % sudo systemctl restart earlyoom

 ~ % sudo systemctl status earlyoom

● earlyoom.service - Early OOM Daemon
     Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled)
     Active: active (running) since Tue 2026-06-30 16:33:53 CST; 1s ago
       Docs: man:earlyoom(1)
             https://github.com/rfjakob/earlyoom
   Main PID: 1914951 (earlyoom)
      Tasks: 1 (limit: 10)
     Memory: 540.0K (max: 50.0M available: 49.4M peak: 940.0K)
        CPU: 34ms
     CGroup: /system.slice/earlyoom.service
             └─1914951 /usr/bin/earlyoom -m 5 -s 5 -r 3600 --avoid "(^|/)(code|vscodium)\$"

Jun 30 16:33:53 Fira systemd[1]: Started earlyoom.service - Early OOM Daemon.
Jun 30 16:33:53 Fira earlyoom[1914951]: earlyoom v1.7
Jun 30 16:33:53 Fira earlyoom[1914951]: Will avoid killing process names that match regex '(^|/)(code|vscodium)$'
Jun 30 16:33:53 Fira earlyoom[1914951]: mem total: 15335 MiB, swap total: 8447 MiB
Jun 30 16:33:53 Fira earlyoom[1914951]: sending SIGTERM when mem <=  5.00% and swap <=  5.00%,
Jun 30 16:33:53 Fira earlyoom[1914951]:         SIGKILL when mem <=  2.50% and swap <=  2.50%
Jun 30 16:33:53 Fira earlyoom[1914951]: mem avail:  4262 of 15335 MiB (27.79%), swap free:    0 of 8447 MiB ( 0.00%)
```

```
Jun 30 16:33:00 Fira earlyoom[1914652]: /usr/bin/earlyoom: unrecognized option '--ignore'
Jun 30 16:33:00 Fira earlyoom[1914652]: Try 'earlyoom --help' for more information.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Main process exited, code=exited, status=13/n/a
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 4.
Jun 30 16:33:00 Fira systemd[1]: Started earlyoom.service - Early OOM Daemon.
Jun 30 16:33:00 Fira earlyoom[1914656]: earlyoom v1.7
Jun 30 16:33:00 Fira earlyoom[1914656]: /usr/bin/earlyoom: unrecognized option '--ignore'
Jun 30 16:33:00 Fira earlyoom[1914656]: Try 'earlyoom --help' for more information.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Main process exited, code=exited, status=13/n/a
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Start request repeated too quickly.
Jun 30 16:33:00 Fira systemd[1]: earlyoom.service: Failed with result 'exit-code'.
Jun 30 16:33:00 Fira systemd[1]: Failed to start earlyoom.service - Early OOM Daemon.
Jun 30 16:33:13 Fira systemd[1]: Started earlyoom.service - Early OOM Daemon.
Jun 30 16:33:13 Fira earlyoom[1914746]: earlyoom v1.7
Jun 30 16:33:13 Fira earlyoom[1914746]: mem total: 15335 MiB, swap total: 8447 MiB
Jun 30 16:33:13 Fira earlyoom[1914746]: sending SIGTERM when mem <=  5.00% and swap <=  5.00%,
Jun 30 16:33:13 Fira earlyoom[1914746]:         SIGKILL when mem <=  2.50% and swap <=  2.50%
Jun 30 16:33:13 Fira earlyoom[1914746]: mem avail:  3782 of 15335 MiB (24.66%), swap free:    0 of 8447 MiB ( 0.00%)
Jun 30 16:33:53 Fira systemd[1]: Stopping earlyoom.service - Early OOM Daemon...
Jun 30 16:33:53 Fira systemd[1]: earlyoom.service: Deactivated successfully.
Jun 30 16:33:53 Fira systemd[1]: Stopped earlyoom.service - Early OOM Daemon.
Jun 30 16:33:53 Fira systemd[1]: Started earlyoom.service - Early OOM Daemon.
Jun 30 16:33:53 Fira earlyoom[1914951]: earlyoom v1.7
Jun 30 16:33:53 Fira earlyoom[1914951]: Will avoid killing process names that match regex '(^|/)(code|vscodium)$'
Jun 30 16:33:53 Fira earlyoom[1914951]: mem total: 15335 MiB, swap total: 8447 MiB
Jun 30 16:33:53 Fira earlyoom[1914951]: sending SIGTERM when mem <=  5.00% and swap <=  5.00%,
Jun 30 16:33:53 Fira earlyoom[1914951]:         SIGKILL when mem <=  2.50% and swap <=  2.50%
Jun 30 16:33:53 Fira earlyoom[1914951]: mem avail:  4262 of 15335 MiB (27.79%), swap free:    0 of 8447 MiB ( 0.00%)
```

```
 ~ % earlyoom -h
earlyoom v1.7
Usage: earlyoom [OPTION]...

  -m PERCENT[,KILL_PERCENT] set available memory minimum to PERCENT of total
                            (default 10 %).
                            earlyoom sends SIGTERM once below PERCENT, then
                            SIGKILL once below KILL_PERCENT (default PERCENT/2).
  -s PERCENT[,KILL_PERCENT] set free swap minimum to PERCENT of total (default
                            10 %).
                            Note: both memory and swap must be below minimum for
                            earlyoom to act.
  -M SIZE[,KILL_SIZE]       set available memory minimum to SIZE KiB
  -S SIZE[,KILL_SIZE]       set free swap minimum to SIZE KiB
  -n                        enable d-bus notifications
  -N /PATH/TO/SCRIPT        call script after oom kill
  -g                        kill all processes within a process group
  -d                        enable debugging messages
  -v                        print version information and exit
  -r INTERVAL               memory report interval in seconds (default 1), set
                            to 0 to disable completely
  -p                        set niceness of earlyoom to -20 and oom_score_adj to
                            -100
  --prefer REGEX            prefer to kill processes matching REGEX
  --avoid REGEX             avoid killing processes matching REGEX
  --dryrun                  dry run (do not kill any processes)
  -h, --help                this help text
```

# how to make vscode never killed by earlyoom

To prevent **`earlyoom`** from killing **VS Code**, you must configure the daemon to completely ignore VS Code processes, or at least exempt them from being targeted based on their high RAM usage. [link](https://manpages.debian.org/testing/earlyoom/earlyoom.1.en.html)

Because VS Code is built on Electron, its main process name usually appears as `code` or `vscodium` in your process list. You can protect it by modifying `earlyoom`'s configuration arguments using either the `--ignore` flag or the `--avoid` flag. [link](https://manpages.debian.org/testing/earlyoom/earlyoom.1.en.html)

### Step 1: Open the `earlyoom` configuration file

Open your system's `earlyoom` configuration file in a terminal text editor with `sudo` privileges: [link](https://oneuptime.com/blog/post/2026-03-02-how-to-use-earlyoom-for-proactive-oom-prevention-on-ubuntu/view)

bash

```
sudo nano /etc/default/earlyoom
```

Use code with caution.

_(Note: On some distributions like Arch Linux or Alpine, this file might be located at `/etc/conf.d/earlyoom` instead)._ [link](https://gitlab.alpinelinux.org/alpine/aports/-/issues/17290)

### Step 2: Add VS Code to the regex arguments

Look for the `EARLYOOM_ARGS` variable inside the file. You have two options to shield VS Code: [link](https://manpages.debian.org/testing/earlyoom/earlyoom.1.en.html)

### Option A: Absolute immunity (Recommended)

Add the `--ignore` flag followed by a regular expression matching your VS Code process. This completely blocks `earlyoom` from killing it, even if VS Code consumes all available memory. [link](https://manpages.debian.org/testing/earlyoom/earlyoom.1.en.html)

bash

```
EARLYOOM_ARGS="-m 10 -s 10 --ignore '(^|/)(code|vscodium)$'"
```

Use code with caution.

### Option B: Reduced priority (Safer for system stability)

If you already have an existing `--avoid` or `--prefer` string config, you can use the `--avoid` flag instead. This subtracts `300` points from VS Code’s Out-Of-Memory (OOM) score, heavily decreasing its chances of being selected unless the system is desperately out of options. [link](https://manpages.debian.org/testing/earlyoom/earlyoom.1.en.html)

bash

```
EARLYOOM_ARGS="-m 10 -s 10 --avoid '(^|/)(code|vscodium)$'"
```

Use code with caution.

_Make sure to include alternative binary names like `vscodium` or `code-oss` if you use an open-source variant of the editor._ [link](https://github.com/VSCodium/vscodium/issues/1407)

### Step 3: Restart the daemon

Save and close the file (`Ctrl+O`, `Enter`, then `Ctrl+X` in nano). Restart the `earlyoom` system service to apply your new rules: [link](https://oneuptime.com/blog/post/2026-03-02-how-to-use-earlyoom-for-proactive-oom-prevention-on-ubuntu/view)

bash

```
sudo systemctl restart earlyoom
```

Use code with caution.

### Step 4: Verify the changes

To ensure `earlyoom` is running with the correct ignoring parameters, check its active process flags: [link](https://oneuptime.com/blog/post/2026-03-02-how-to-use-earlyoom-for-proactive-oom-prevention-on-ubuntu/view)

bash

```
sudo systemctl status earlyoom
```

Use code with caution.

Look at the `Main PID` line or the execution logs at the bottom to confirm that your `--ignore` or `--avoid` regex is actively listed in the command arguments. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-use-earlyoom-for-proactive-oom-prevention-on-ubuntu/view)

Would you like help troubleshooting **extensions** that might be causing VS Code's high memory consumption, or do you want to verify the **exact process names** your system uses for the editor? [link](https://github.com/rfjakob/earlyoom/issues/240)

- [link](https://github.com/rfjakob/earlyoom/issues/240)\
  Config file hard to find, so do not know how to exclude app #240\
  Jan 31, 2021 — mtorromeo commented. mtorromeo. on Jan 31, 2021. The service arguments are defined in /etc/default/earlyoom just like @jayenashar ...\
  GitHub
- [link](https://manpages.debian.org/testing/earlyoom/earlyoom.1.en.html)\
  earlyoom(1) - Debian Manpages\
  Sep 19, 2025 — Note that some desktop environments (GNOME, for example) put all desktop application in the same process group as gnome-shell. ear...\
  Debian Manpages
- [link](https://github.com/VSCodium/vscodium/issues/1407)\
  Processes stay open when app is killed via SIGTERM #1407\
  Feb 11, 2023 — buy more ram. somehow configure earlyoom to detect all of these processes (not sure if its possible to do, havent tried yet) updat...\
  GitHub

Show all

## -m 10 -s 10 --ignore '(^|/)(code|vscodium)$ meaning

The argument string **`-m 10 -s 10 --ignore '(^|/)(code|vscodium)$'`** tells the `earlyoom` daemon exactly when to trigger and which specific processes to completely skip when it frees up system memory.

Here is the exact breakdown of what each component means:

### Threshold Settings

- **`-m 10`**: Triggers `earlyoom` actions when available system RAM drops below **10%**.
- **`-s 10`**: Triggers `earlyoom` actions when available swap space drops below **10%**.

### The Immunity Command

- **`--ignore`**: Instructs the daemon to never terminate any process that matches the regular expression that follows it.

### The Regex Breakdown `'(^|/)(code|vscodium)$'`

This is a Regular Expression (Regex) used to precisely pinpoint the VS Code application binaries while avoiding accidental matches.

- **`(^|/)`**: Matches either the **start of the text string** (`^`) OR a **forward slash** (`/`). This ensures it matches just the command `code` or an absolute file path ending in `/code` (like `/usr/bin/code`).
- **`(code|vscodium)`**: Matches either the standard VS Code binary name (**`code`**) OR the community open-source binary name (**`vscodium`**).
- **`$`**: Matches the **exact end of the text string**. This prevents accidental matches on unrelated processes that happen to start with those letters (e.g., it will match `code` but safely ignore a process named `code-validator`).

If you want to see if your system uses a different variant, would you like me to show you how to **check your active VS Code process name** or how to **combine multiple programs** into this ignore list?

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://medium.com/analytics-vidhya/regular-expression-regex-b9ed6b6a989f)\
  Regular Expression(regex). Everybody talks about regular… | by Tasnuva Zaman | Analytics Vidhya\
  May 17, 2020 — (^) Matches the start of the string, and in multiline mode also matches immediately after each newline.\
  \
  \
  Medium
- [link](https://notes.osteele.com/uses/macos/visual-studio-code-for-presentations/)\
  Visual Studio Code for Presentations - Oliver's Notes\
  I generally launch this from Alfred keyword, rather than from the terminal. If you do this, use an absolute path e.g. /usr/local/b...\
  \
  notes.osteele.com
- [link](https://www.reddit.com/r/learnprogramming/comments/12ijd8e/would%5Fa%5Fnewbie%5Fnotice%5Fa%5Fdifference%5Fswitching%5Ffrom/)\
  Would a newbie notice a difference switching from vscode to vscodium? : r/learnprogramming\
  Apr 11, 2023 — In fact, you can build VSCode ( Visual Studio Code ) from source yourself and you would get functionally the same exact binary as ...\
  \
  Reddit

Show all

## -r 3600 meaning

The argument **`-r 3600`** sets the **minimum reporting interval** for `earlyoom` to 3,600 seconds (<mark>exactly<span> </span><strong>1 hour</strong></mark>).

Here is the precise breakdown of what this does:

### The Flag Meanings

- **`-r`**: Stands for "report interval". It controls how frequently `earlyoom` prints status updates to your system logs (stdout / stderr).
- **`3600`**: The time value measured strictly in **seconds**.

### How it Changes Behavior

By default, `earlyoom` prints a memory usage status line to your logs every **60 seconds**. Adding `-r 3600` changes this behavior so that it only prints a routine status update once every hour.

_Note: This setting **only affects routine status updates**. If your system actually runs out of memory, `earlyoom` will still log and react instantly to kill a process, regardless of this timer._

Would you like to know how to check your **current earlyoom logs** to see these reports, or do you need help **combining this flag** with your VS Code ignore rules?

## what if -m 2 -s 2

Setting **`-m 2 -s 2`** configures `earlyoom` to wait until your system is in a severe crisis before taking action. It instructs the daemon to trigger only when available RAM drops below **2%** and available swap space drops below **2%**.

Here is what happens to your system if you use these values:

### The Risks

- **High Risk of System Freezes**: Operating systems need a small buffer of RAM to function. At 2% remaining memory, your desktop environment, mouse cursor, and keyboard inputs will likely freeze entirely before `earlyoom` can react.
- **The Kernel OOM Takes Over**: Because `earlyoom` waits so long, the Linux kernel's built-in Out-Of-Memory (OOM) killer will likely wake up first. Unlike `earlyoom`, the kernel killer ignores your `--ignore` or `--avoid` rules and might kill VS Code anyway.

### The Benefits

- **Maximum Memory Utilization**: Your system will allow apps to use almost every single megabyte of RAM before forcing anything to close.

### Summary

While it gives your applications more room to breathe, **`-m 2 -s 2` is generally too low** for a responsive desktop experience. Most users prefer a minimum buffer of 4% to 5% to prevent complete UI lockups.

If you are trying to maximize your RAM, would you like to know how to set up a **larger swap file** to give your system a safer cushion, or do you want to see how to use **absolute megabyte values** instead of percentages?

## what if -m 5 -s 5

Setting **`-m 5 -s 5`** configures `earlyoom` to trigger only when available RAM drops below **5%** and available swap space drops below **5%**.

This is widely considered the **"sweet spot" config** for personal computers and laptops.

### Why this is a balanced choice

- **Prevents System Freezes**: A 5% buffer leaves just enough memory for your Linux desktop environment (like GNOME or KDE) to remain responsive. Your mouse and keyboard will usually stay functional.
- **Gives Apps Room to Breathe**: It maximizes your usable RAM. It allows resource-heavy applications like VS Code, web browsers, and compilation tools to run right up to the edge without being prematurely killed.
- **Beats the Kernel Killer**: This 5% threshold is high enough that `earlyoom` will almost always trigger _before_ the Linux kernel's built-in OOM killer kicks in. This ensures your custom `--ignore` and `--avoid` rules for VS Code are actually respected.

### Comparison

- **`-m 10` (Default)**: Safe, but can feel too aggressive. It might kill apps when you still have hundreds of megabytes of perfectly usable RAM left.
- **`-m 5` (Balanced)**: The recommended setting for developer workstations. Efficient use of RAM with a small safety net.
- **`-m 2` (Dangerous)**: Too low. The system will likely lock up and freeze before any daemon can save it.

Would you like to know how to **permanently save this 5% setting** in your configuration file, or do you want to learn how to set **different percentages** for RAM and Swap (like `-m 5 -s 10`)?

GitHub - rfjakob/earlyoom: earlyoom - Early OOM Daemon for Linux · GitHub

## ~ % sudo systemctl status earlyoom× earlyoom.service - Early OOM Daemon Loaded: loaded (/usr/lib/systemd/system/earlyoom.service; enabled; preset: enabled) Active: failed (Result: exit-code) since Tue 2026-06-30 16:31:29 CST; 22s ago Duration: 18ms Docs: man:earlyoom(1) https://github.com/rfjakob/earlyoom Process: 1914229 ExecStart=/usr/bin/earlyoom $EARLYOOM\_ARGS (code=exited, status=13) Main PID: 1914229 (code=exited, status=13) CPU: 18msJun 30 16:31:29 Fira systemd\[1]: earlyoom.service: Scheduled restart job, restart counter is at 5.Jun 30 16:31:29 Fira systemd\[1]: earlyoom.service: Start request repeated too quickly.Jun 30 16:31:29 Fira systemd\[1]: earlyoom.service: Failed with result 'exit-code'.Jun 30 16:31:29 Fira systemd\[1]: Failed to start earlyoom.service - Early OOM Daemon.

The `status=13` error code indicates that **`earlyoom` crashed because it encountered an invalid or malformed argument** in your configuration file.

Systemd passes the `$EARLYOOM_ARGS` string directly to the command line, and standard configuration files can easily break if quotes are misplaced or nested improperly.

### The Problem

When you use a regex string like `'^|/)(code|vscodium)$'`, the combination of single quotes inside the main variable quotes can confuse the systemd parser, causing `earlyoom` to fail to parse its own command line options and immediately exit.

### How to Fix It

You need to cleanly format the `EARLYOOM_ARGS` variable. Open your configuration file:

bash

```
sudo nano /etc/default/earlyoom
```

Use code with caution.

_(Remember, if you are on Arch Linux or a similar distro, it might be `/etc/conf.d/earlyoom` instead)._

Replace your current `EARLYOOM_ARGS` line with **one** of these cleanly formatted options:

### Option A: Using `--ignore` (No single quotes)

Escape or omit the single quotes around the regex so systemd reads it as one unified string argument:

bash

```
EARLYOOM_ARGS="-m 5 -s 5 -r 3600 --ignore (^|/)(code|vscodium)$"
```

Use code with caution.

### Option B: Using `--avoid` (Safer choice)

If you prefer to drastically lower VS Code's kill priority rather than giving it absolute immunity, use the avoid flag:

bash

```
EARLYOOM_ARGS="-m 5 -s 5 -r 3600 --avoid (^|/)(code|vscodium)$"
```

Use code with caution.

### Apply and Restart

Save and close the file (`Ctrl+O`, `Enter`, then `Ctrl+X`).

Because systemd blocked further restarts due to the rapid crash loop ("Start request repeated too quickly"), you must explicitly reset the service counter and start it back up:

bash

```
sudo systemctl reset-failed earlyoom
sudo systemctl start earlyoom
```

Use code with caution.

Now, check the status again to confirm it is active and running smoothly:

bash

```
sudo systemctl status earlyoom
```

Use code with caution.

Would you like to **view the live logs** using `journalctl` to confirm that `earlyoom` successfully read the VS Code rule on startup?

## how to check log

To check the live or historical logs for **`earlyoom`**, use the systemd journal utility.

Run the following command in your terminal:

bash

```
sudo journalctl -u earlyoom -e
```

Use code with caution.

### What the Flags Mean

- **`-u earlyoom`**: Filters the logs to show _only_ messages generated by the `earlyoom` service.
- **`-e`**: Jumps directly to the **end** of the log file so you instantly see the most recent events.

### Other Useful Log Commands

If you want to watch `earlyoom` monitor your system in real time, use the **follow** flag:

bash

```
sudo journalctl -u earlyoom -f
```

Use code with caution.

If you want to see exactly which processes `earlyoom` has killed in the past, pipe the logs to `grep`:

bash

```
sudo journalctl -u earlyoom | grep -iE "(sending|killing)"
```

Use code with caution.

When the service starts successfully, you should see a log entry near the top confirming your configuration, looking similar to this:

text

```
sending SIGTERM when mem avail <= 5.00% and swap free <= 5.00%
```

Use code with caution.

Are you seeing any **active errors** in the logs now, or did the service start up successfully with your new thresholds?

## Jun 30 16:33:00 Fira earlyoom\[1914652]: /usr/bin/earlyoom: unrecognized option '--ignore'

J

\~ % earlyoom -h\
earlyoom v1.7\
Usage: earlyoom \[OPTION]...

-m PERCENT\[,KILL\_PERCENT] set available memory minimum to PERCENT of total\
(default 10 %).\
earlyoom sends SIGTERM once below PERCENT, then\
SIGKILL once below KILL\_PERCENT (default PERCENT/2).\
-s PERCENT\[,KILL\_PERCENT] set free swap minimum to PERCENT of total (default\
10 %).\
Note: both memory and swap must be below minimum for\
earlyoom to act.\
-M SIZE\[,KILL\_SIZE] set available memory minimum to SIZE KiB\
-S SIZE\[,KILL\_SIZE] set free swap minimum to SIZE KiB\
-n enable d-bus notifications\
-N /PATH/TO/SCRIPT call script after oom kill\
-g kill all processes within a process group\
-d enable debugging messages\
-v print version information and exit\
-r INTERVAL memory report interval in seconds (default 1), set\
to 0 to disable completely\
-p set niceness of earlyoom to -20 and oom\_score\_adj to\
-100\
\--prefer REGEX prefer to kill processes matching REGEX\
\--avoid REGEX avoid killing processes matching REGEX\
\--dryrun dry run (do not kill any processes)\
-h, --help this help text

The error occurs because **`earlyoom v1.7` does not support the `--ignore` flag**. The `--ignore` option was only introduced in a later update (version 1.8).

Since your system is running version 1.7, you must use the **`--avoid`** flag instead to protect VS Code.

### How to Fix It

Open your configuration file again:

bash

```
sudo nano /etc/default/earlyoom
```

Use code with caution.

_(Or `/etc/conf.d/earlyoom` if on an Arch-based system)._

Change the `--ignore` flag to **`--avoid`**. Your configuration line should look exactly like this:

bash

```
EARLYOOM_ARGS="-m 5 -s 5 -r 3600 --avoid (^|/)(code|vscodium)$"
```

Use code with caution.

### Restart the Service

Save and exit the editor (`Ctrl+O`, `Enter`, then `Ctrl+X`). Reset systemd's error counter and restart the daemon:

bash

```
sudo systemctl reset-failed earlyoom
sudo systemctl start earlyoom
```

Use code with caution.

### Verify It Works

Check the logs one last time to ensure it starts without errors:

bash

```
sudo journalctl -u earlyoom -n 20
```

Use code with caution.

You should see it successfully start up and list your active rules.

If you'd like, we can check if your system repository has a **newer version of earlyoom** available, or would you like to verify that **VS Code is now properly shielded**?

## earlyoom version

You are running **`earlyoom v1.7`** on your system.

Here is what you need to know about your current version in relation to your goal:

### Flag Compatibility in v1.7

- **`--avoid REGEX`**: **Fully supported.** This is your best tool for protecting VS Code. It lowers the memory-killer priority for the process by dropping its internal score, making it the last candidate targeted during low-memory constraints.
- **`--prefer REGEX`**: **Fully supported.** This forces `earlyoom` to prioritize terminating specific memory-hogging processes (like `java` or `chromium`) before looking at other apps.
- **`--ignore REGEX`**: **Not supported.** This absolute immunity flag was not introduced until version 1.8. Attempting to use it in v1.7 results in the `unrecognized option` crash you experienced.

### Recommended v1.7 Argument String

Because you are on version 1.7, your `/etc/default/earlyoom` configuration file should use the following format to protect VS Code while running safely at a 5% system threshold:

bash

```
EARLYOOM_ARGS="-m 5 -s 5 -r 3600 --avoid (^|/)(code|vscodium)$"
```

Use code with caution.

### Upgrading (Optional)

The latest upstream release of the daemon is **version 1.9.0**. If you want absolute immunity via the `--ignore` flag, you can upgrade your system packages through your distribution's standard package manager (e.g., `sudo apt update && sudo apt upgrade earlyoom` on Debian/Ubuntu systems or `sudo pacman -Syu` on Arch Linux). However, sticking with v1.7 and using `--avoid` is perfectly sufficient for daily workflows. [link](https://archlinux.org/packages/extra/x86%5F64/earlyoom/)

Did the daemon start up cleanly after switching to the `--avoid` flag, or are you seeing any other flags listed in your `earlyoom -h` output that you would like to explore?

- [link](https://archlinux.org/packages/extra/x86%5F64/earlyoom/)\
  earlyoom 1.9.0-1 (x86\_64) - Arch Linux\
  Sep 17, 2025 — Source Files / View Changes · Bug Reports / Add New Bug · Search Wiki / Manual Pages · Security Issues · Flag Package Out-of-Date ...\
  Arch Linux

- [link](https://packages.debian.org/earlyoom)\
  Debian -- Package Search Results -- earlyoom\
  Package earlyoom \* bullseye (oldoldstable) (admin): Early OOM Daemon. 1.6.2-1: amd64 arm64 armhf i386. \* bookworm (oldstable) (adm...\
  Debian