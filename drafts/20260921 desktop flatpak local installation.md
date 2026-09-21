<!-- on cs61a it dl the .py file directly instead of opening a web ide or code viewer or sth. and it's binded to gnome builder. well i would rather simply uninstall it. i never intended to use it to edit anything, how dare could it auto bind. -->

## i disable a flatpak app wo uninstallation

<mark><span>Yes, you can<span> </span></span><strong>disable or restrict a Flatpak application without completely uninstalling it</strong></mark>. While Flatpak doesn't have a single literal "disable" button that freezes the app, you can achieve the exact same result using a few different methods depending on what "disabling" means to you.

### 1. Block the app from running (Masking)

If you want to prevent the app from being launched entirely (by you or background processes) without deleting its files, you can **mask** its permissions using Flatseal or the command line.

By stripping the app of its ability to talk to your system, it effectively becomes completely inert. Run this command:

bash

```
flatpak override --user --nosocket=x11 --nosocket=wayland --nosocket=fallback-x11 --no-talk-name=* <org.example.AppName>
```

Use code with caution.

_Replace `<org.example.AppName>` with your app's actual ID (which you can find by running `flatpak list`)._

### 2. Hide the app from your menus

If you just want to get the app out of your sight so it doesn't show up in your desktop application menu or search bar, you can hide its `.desktop` shortcut.

1. Find the application's desktop file (usually located in `/var/lib/flatpak/exports/share/applications/` or `~/.local/share/flatpak/exports/share/applications/`).

2. Copy it to your local user directory to override it:\
   bash

<!---->

```
cp /var/lib/flatpak/exports/share/applications/<org.example.AppName>.desktop ~/.local/share/applications/
```

Use code with caution.
3\. Open that copied file in a text editor and add this line to the bottom:\
ini

```
NoDisplay=true
```

Use code with caution.

### 3. Freeze updates for the app

If you want to keep using the app but "disable" it from receiving any changes or updates when you update the rest of your system, you can use the **mask** command: [link](https://forum.manjaro.org/t/is-there-a-way-to-disable-a-flatpak-app-from-being-updated-in-pamac/170255)

bash

```
flatpak mask <org.example.AppName>
```

Use code with caution.

To undo this later and allow updates again, simply run `flatpak unmask <org.example.AppName>`.

### 4. Alternative: Uninstall the app but keep ALL your data

If you are trying to disable the app just to save disk space or system resources, a better approach might be to **uninstall the application binaries but keep your configurations, logins, and data completely intact**.

When you run a standard uninstall, Flatpak explicitly leaves your personal settings and app data untouched inside your `~/.var/app/` directory: [link](https://discourse.flathub.org/t/how-to-completely-uninstall-any-flatpak-app-on-ubuntu/709)

bash

```
flatpak uninstall <org.example.AppName>
```

Use code with caution.

If you ever reinstall the app in the future, it will launch instantly with all of your settings, preferences, and data exactly how you left them. [link](https://www.reddit.com/r/linuxquestions/comments/mlhpw0/how%5Fto%5Ffully%5Fremove%5Fa%5Fflatpak%5Fapp%5Fand%5Fits%5Fsettings/)

Which of these approaches matches what you are trying to do? If you need help finding the exact **Application ID** or need a specific script to toggle an app on and off, let me know!

- [link](https://www.reddit.com/r/linuxquestions/comments/mlhpw0/how%5Fto%5Ffully%5Fremove%5Fa%5Fflatpak%5Fapp%5Fand%5Fits%5Fsettings/)\
  Reddit\
  How to fully remove a flatpak app and its settings?\
  Apr 6, 2021 — To fully remove a flatpak app and its settings, you can try these steps: \* \*\*Remove user config files\*\* \* \*\*Run \`flatpak uninstall...
- [link](https://forum.manjaro.org/t/is-there-a-way-to-disable-a-flatpak-app-from-being-updated-in-pamac/170255)\
  Manjaro Linux Forum\
  Is there a way to disable a Flatpak app from being updated in Pamac?\
  Nov 4, 2024 — anon39617291: after running the command flatpak mask ABC , Pamac still show upgrade available. I tried flatpak mask Application ID...
- [link](https://discourse.flathub.org/t/how-to-completely-uninstall-any-flatpak-app-on-ubuntu/709)\
  Flathub Discourse\
  How to completely uninstall any Flatpak App on Ubuntu\
  Sep 2, 2020 — Hi there! I wonder if there is any way to completely uninstall a Flatpak application on Ubuntu. The reason for this doubt is that ...

Show all

## how to keep a copy so i can reinstall locally later

To keep a local copy of a Flatpak application so you can reinstall it later without an internet connection, you can <mark><strong>export the application as a standalone<span> </span><code dir="ltr">.flatpak</code><span> </span>bundle file</strong></mark>.

You can accomplish this by using the `flatpak build-bundle` command.

### Step 1: Find the Application ID

First, look up the exact name of the application you want to save by running:

bash

```
flatpak list --app
```

Use code with caution.

Identify your app's ID from the list (for example, `org.gimp.GIMP` or `com.vlc.VLC`).

### Step 2: Export the App to a Local File

Run the following command to bundle the installed app into a single, offline installable file on your system.

bash

```
flatpak build-bundle /var/lib/flatpak/repo my-app-backup.flatpak <Application-ID>
```

Use code with caution.

- **`/var/lib/flatpak/repo`**: This is the default location of the local system repository. If you installed the app as a user (`--user`), change this path to `~/.local/share/flatpak/repo`.
- **`my-app-backup.flatpak`**: This is the destination name of your file. You can change this to whatever you'd like (e.g., `vlc-backup.flatpak`) and save it to an external drive.
- **`<Application-ID>`**: Replace this with the ID you found in Step 1.

***

### How to Reinstall It Later (Locally)

When you want to reinstall the app later from your saved file without using the internet, simply navigate to the folder where you saved the bundle and run:

bash

```
flatpak install --user my-app-backup.flatpak
```

Use code with caution.

_(You can omit `--user` if you prefer to install it system-wide)._

### ⚠️ Important Note About Runtimes

Flatpak applications rely on shared **runtimes** (like GNOME, KDE, or Freedesktop platforms) to work.

- The `.flatpak` bundle you create using the steps above contains **only the application itself**, not its underlying runtime.
- When you reinstall the app locally, it will work perfectly as long as your system still has that specific runtime version installed. If you plan to install this on a completely fresh Linux setup with zero internet, you will also need to export the corresponding runtime using the same `build-bundle` command.

Would you like me to show you how to find and **bundle the required runtime** alongside the app for a 100% true offline backup?

## error refspec not found

The **`error: Refspec... not found`** happens because <mark>Flatpak cannot find the exact combination of the<span> </span><strong>application ID</strong><span> </span>and its<span> </span><strong>branch</strong><span> </span>inside the specified directory repository</mark>. [link](https://github.com/flatpak/flatpak/issues/3026)

This usually happens for two reasons:

### 1. The app was installed as `--user` instead of system-wide

If the app was installed locally for your user account, its tracking data lives in your home directory, not the system directory. [link](https://docs.flatpak.org/en/latest/flatpak-command-reference.html)

- **Fix:** Change `/var/lib/flatpak/repo` to your local repository path:

bash

```
flatpak build-bundle ~/.local/share/flatpak/repo my-app-backup.flatpak <Application-ID>
```

Use code with caution.

### 2. The default branch is wrong

If you don't explicitly type the branch name at the end of the command, Flatpak defaults to looking for a branch called `master`. However, almost all Flathub apps use the `stable` branch. [link](https://discourse.flathub.org/t/help-me-to-create-flatpak-of-my-program/6600?page=3)

- **Fix:** Explicitly append **`stable`** to the very end of your command:

bash

```
flatpak build-bundle /var/lib/flatpak/repo my-app-backup.flatpak <Application-ID> stable
```

Use code with caution.

***

### The Universal Fix

To completely avoid guesswork, check your `flatpak list` output again to see if your app is listed under the "system" or "user" installation column, and note its exact branch. Then, run the matching command below:

**If the app is a System installation:**

bash

```
flatpak build-bundle /var/lib/flatpak/repo my-app-backup.flatpak <Application-ID> stable
```

Use code with caution.

**If the app is a User installation:**

bash

```
flatpak build-bundle ~/.local/share/flatpak/repo my-app-backup.flatpak <Application-ID> stable
```

Use code with caution.

If it still throws an error, paste the **exact command** you ran along with the **full error text**, and I will point out the exact syntax tweak you need!

- [link](https://discourse.flathub.org/t/help-me-to-create-flatpak-of-my-program/6600?page=3)\
  Flathub Discourse\
  Help me to create FLATPAK of my program\
  Help me to create FLATPAK of my program enrico94 May 3, 2024, 7:47pm 43 From what I understand by reading the documentation the fl...
- [link](https://github.com/flatpak/flatpak/issues/3026)\
  GitHub\
  “flatpak build-bundle” fails on system repo #3026 - GitHub\
  Linux distribution and version Fedora 30 / Endless OS 3.7.0 (development branch) Flatpak version 1.4.2 / 1.3.3 Description of the ...
- [link](https://github.com/flatpak/flatpak/issues/2268)\
  GitHub\
  Cannot build bundle · Issue #2268 · flatpak/flatpak\
  margre8 commented margre8 on Oct 21, 2018 Last edited by margre8 Author flatpak build-bundle /var/lib/flatpak/repo gimp.flatpak or...

Show all

## how long will it take

The process is very fast and will usually take anywhere from **5 seconds to 2 minutes** to complete.

Because Flatpak is copying files that are already downloaded and stored locally on your hard drive, it doesn't need to download anything from the internet. The exact time depends entirely on two factors:

1. **The size of the app:** A lightweight utility like an image viewer takes a few seconds, while a massive application like Blender or GIMP might take 30 to 60 seconds.
2. **Your hard drive speed:** The process will finish much faster on an SSD than on a traditional mechanical hard drive (HDD).

Once the command finishes, you will immediately see the new `.flatpak` file appear in your folder, and your terminal will return to a blank prompt ready for the next command.

Did the command **finish successfully** this time, or are you running into a different **terminal message**?

## why does flatpak save at home instead. i have specified /var/lib/flatpak/repo and my cwd is home.

Flatpak is saving the bundle file to your home directory <mark>because of your<span> </span><strong>current working directory (CWD)</strong>, not the repository path</mark>.

In the command structure, there are two distinct paths being used:

bash

```
flatpak build-bundle [SOURCE_REPO] [DESTINATION_FILE] [APP_ID]
```

Use code with caution.

1. **`/var/lib/flatpak/repo`** is the **source**. You are telling Flatpak: _"Look inside this system folder to find the installed application files."_
2. **`my-app-backup.flatpak`** is the **destination**. Because you didn't provide an absolute folder path for this file (like `/media/usb/backup.flatpak`), Linux automatically creates it inside your **CWD**, which is your home directory (`~`).

Flatpak reads the application data _from_ `/var/lib/flatpak/repo` and writes the resulting package file _to_ your home directory.

### How to save it somewhere else

If you want to save the backup file somewhere specific instead of your home folder, you must **specify the full path** in the second argument of the command.

For example, to save it directly to an external drive or a dedicated backup folder:

bash

```
flatpak build-bundle /var/lib/flatpak/repo /media/user/ExternalDrive/my-app-backup.flatpak <Application-ID> stable
```

Use code with caution.

Did the bundle file finish generating successfully in your home folder, or do you need help **moving it to a different drive**?

## how to move instead

To safely move the backup file out of your home folder to your desired location, you can use the terminal or your graphical file manager.

### Method 1: Using the Terminal

You can use the `mv` (move) command. Open your terminal (which is already in your home directory) and run:

bash

```
mv my-app-backup.flatpak /path/to/destination/
```

Use code with caution.

**Common Examples:**

- To move it to your **Documents** folder:\
  bash

<!---->

```
mv my-app-backup.flatpak ~/Documents/
```

Use code with caution.

- To move it to an **External USB Drive** (replace `USB_NAME` with your actual drive's name):\
  bash

<!---->

```
mv my-app-backup.flatpak /media/$USER/USB_NAME/
```

Use code with caution.

### Method 2: Create it directly in the new location next time

If you want to skip the moving step entirely in the future, just change to your destination folder _before_ running the Flatpak command. For example:

bash

```
cd /media/$USER/USB_NAME/
flatpak build-bundle /var/lib/flatpak/repo my-app-backup.flatpak <Application-ID> stable
```

Use code with caution.

Because your current working directory is now the USB drive, Flatpak will generate the file directly onto the drive.

Where are you trying to **store this backup** (e.g., an external drive, a network folder, or another local directory)? If you're unsure of the exact path, let me know and I can help you **find the right destination path**.

## can i move to /var/lib/flatpak/repo

<mark><strong><span>No, do not move your backup file into<span> </span></span></strong></mark>**`/var/lib/flatpak/repo`.**

That folder is a system-managed, internal repository structure used by Flatpak to track and store application binaries. Manually placing random files inside it can **corrupt Flatpak's database**, disrupt your system updates, or flatpak might just automatically delete your backup file during its next automatic cleanup process (`flatpak uninstall --unused`).

### Where should you store it instead?

If you want to keep the backup on your system drive (but out of your home folder), you should use a standard system storage path instead.

Here are the proper alternatives:

- **Option A: A dedicated folder inside `/var/` (Recommended for system-wide access)**\
  You can safely create a custom backup folder under `/var/local/` or `/var/backups/`.\
  bash

<!---->

```
sudo mkdir -p /var/local/flatpak-backups
sudo mv my-app-backup.flatpak /var/local/flatpak-backups/
```

Use code with caution.

- **Option B: Keep it in your user home folder**\
  Leaving it in your Home directory (like `~/Downloads` or `~/Documents`) is the safest and most standard approach. It won't interfere with any system files, and it doesn't require root permissions to move or reinstall later.

Do you need help **checking how much disk space** you have available in your home directory before deciding where to leave it?

