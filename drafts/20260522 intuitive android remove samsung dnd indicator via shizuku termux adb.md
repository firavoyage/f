how to remove icons like do not disturb on one ui

May 21, 2026

To remove system indicators like the Do Not Disturb (DND) icon from your Samsung status bar, you will need to <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use Samsung's official customization app, <strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://www.youtube.com/watch?v=8fkTWAGJFDk" style="font-weight: 500; margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">Good Lock</a></span></strong></mark>, as One UI does not include a native toggle to hide specific system icons. \[[1](https://www.youtube.com/watch?v=8fkTWAGJFDk), [2](https://www.youtube.com/watch?v=Q5sSnSG92gI)]

If your goal is instead to keep DND active but hide the flooded mess of incoming _app notification_ icons, you can achieve that through the native settings. \[[1](https://www.youtube.com/watch?v=VERqE2tTkLI\&t=4)]

***

Method 1: Hide the Persistent DND Icon (Using Good Lock)

This is the only method to strip away system-level icons (like DND, Alarms, Wi-Fi, or Bluetooth) while keeping those features actively running. \[[1](https://www.youtube.com/watch?v=Q5sSnSG92gI)]

1. **Install Good Lock**: Open the **Galaxy Store** on your phone, search for Good Lock, and install it.
2. **Download QuickStar**: Open the Good Lock app, locate the **QuickStar** module, and tap the download icon next to it.
3. **Open QuickStar**: Once installed, tap **QuickStar** inside Good Lock and toggle the top switch to **On**.
4. **Remove the Icons**: Tap on **Visibility of indicator icons**.
5. **Toggle off DND**: Look through the list of system icons and switch off the toggle for **Do Not Disturb** (or any other icons you want gone). \[[1](https://www.youtube.com/watch?v=8fkTWAGJFDk), [2](https://www.youtube.com/watch?v=Q5sSnSG92gI)]

_Note: If Good Lock is not available in your geographic region, you can look for an alternative launcher wrapper like [Fine Lock](https://www.reddit.com/r/samsunggalaxy/comments/1hpzaj2/how%5Fcan%5Fi%5Fhide%5Fstatus%5Fbar%5Ficons/) in the Google Play Store to run the QuickStar module._ \[[1](https://www.reddit.com/r/samsunggalaxy/comments/1hpzaj2/how%5Fcan%5Fi%5Fhide%5Fstatus%5Fbar%5Ficons/)]

***

Method 2: Hide App Icons When DND is Active (Native Settings)

If you actually want to hide the cluttered app notifications that pile up _while_ you are in Do Not Disturb mode, you can change this directly in your standard menu. \[[1](https://www.youtube.com/watch?v=VERqE2tTkLI\&t=4)]

1. Open your phone's **Settings** app.
2. Scroll down and select **Notifications**.
3. Tap on **Do not disturb**.
4. Scroll to the bottom and select **Hide notifications**.
5. Toggle on the switch next to **Hide status bar icons**. \[[1](https://www.youtube.com/watch?v=jZilAZXA3aY)]

***

Method 3: Turning Off Do Not Disturb Entirely

If the icon is there simply because the feature was accidentally turned on, you can disable it entirely via the Quick Panel. \[[1](https://www.samsung.com/us/support/answer/ANS10002889/), [2](https://www.youtube.com/watch?v=k3Xycjiar6Y\&t=11)]

1. **Swipe down** from the top of your screen with two fingers to fully expand the Quick Settings panel.
2. look for the **Do not disturb** tile (it looks like a circle with a horizontal line).
3. **Tap the tile** to turn it off. The icon will immediately disappear from your status bar. \[[1](https://www.youtube.com/watch?v=2YmpoSl2CIg), [2](https://www.reddit.com/r/GarminWatches/comments/11jihor/do%5Fnot%5Fdisturb/), [3](https://www.samsung.com/us/support/answer/ANS10002889/), [4](https://www.youtube.com/watch?v=k3Xycjiar6Y\&t=11), [5](https://www.youtube.com/watch?v=8fkTWAGJFDk)]

If you would like to clean up your screen further, let me know **which version of One UI** your phone is currently running or **which specific other icons** you are trying to get rid of!

- [link](https://www.reddit.com/r/samsunggalaxy/comments/1hpzaj2/how%5Fcan%5Fi%5Fhide%5Fstatus%5Fbar%5Ficons/)\
  How can i hide status bar icons? : r/samsunggalaxy - Reddit\
  Possible\* Some samsung phones don't have GoodLock, like my A04s, for example. Other phones may have GoodLock supported, but it isn...\
  Reddit
- [link](https://www.samsung.com/us/support/answer/ANS10002889/)\
  Use Do not disturb mode on your Galaxy phone - Samsung\
  Available screens and settings may vary by wireless service provider, software version, and phone model. Turn Do not disturb on or...\
  samsung.com
- [link](https://www.youtube.com/watch?v=Q5sSnSG92gI)\
  How To Remove Icons From Status Bar in Samsung Galaxy Smartphones\
  To remove or reduce icons from the status bar on Samsung phones, utilize Quickstar, a module within the Good Lock app. Download Go...\
  1:36\
  YouTube·Guiding Tech

Show all

You said: it's not inside quick star, where only system icons like wifi and battery exist

May 21, 2026

You are completely right, and I apologize for that mistake. <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">The active <strong>Do Not Disturb (DND) icon is classified as a ongoing notification indicator</strong>, not a hardcoded system status icon like Wi-Fi or Battery percentage</mark>. Because of this, it does not show up in QuickStar's "Visibility of indicator icons" list. \[[1](https://www.youtube.com/watch?v=8fkTWAGJFDk), [2](https://www.youtube.com/watch?v=VERqE2tTkLI\&t=4)]

To hide the DND circle icon while keeping DND active, you have two options depending on where you want it gone:

Method 1: Hide it Everywhere (The ADB Method)

To force One UI to hide the DND indicator entirely from your status bar while keeping the feature running, you have to use an ADB command via a computer. Android handles DND as an "icon slot" that can be blacklisted.

1. **Enable Developer Options**: Go to phone _Settings > About phone > Software information_ and tap **Build number** 7 times.
2. Go back to the main Settings menu, open the new **Developer Options**, and turn on **USB Debugging**.
3. Connect your phone to a PC/Mac that has SDK Platform Tools (ADB) installed.
4. Open a command prompt/terminal window on your computer and run this exact command:\
   `adb shell settings put secure icon_blacklist do_not_disturb`
5. The DND icon will instantly disappear from your status bar. _(To undo this later, run: `adb shell settings put secure icon_blacklist null`)_. \[[1](https://www.youtube.com/watch?v=1A%5Fd%5Fmuld08), [2](https://www.youtube.com/watch?v=df6sSzFWTO4)]

***

Method 2: Use Native One UI Settings (Hides it from Lock Screen/AOD)

If you do not want to use a computer, you can natively hide the DND status indicator from your **Lock Screen** and **Always On Display (AOD)**, though it will still appear when your phone is unlocked on the home screen. \[[1](https://eu.community.samsung.com/t5/galaxy-s23-series/hide-quot-do-not-disturb-quot-symbol/td-p/9329803)]

1. Open your phone's **Settings**.
2. Tap on **Notifications** and select **Do not disturb**.
3. Scroll down and tap **Hide notifications**.
4. Look for the **When the screen is off** section.
5. Toggle on **Don't show notifications** (this hides the persistent DND banner/icon from your lock screen entirely). \[[1](https://www.youtube.com/watch?v=aYP2bCTaqIQ\&t=11), [2](https://www.youtube.com/watch?v=jZilAZXA3aY), [3](https://www.youtube.com/watch?v=df6sSzFWTO4), [4](https://www.youtube.com/watch?v=VERqE2tTkLI\&t=4), [5](https://eu.community.samsung.com/t5/galaxy-s23-series/hide-quot-do-not-disturb-quot-symbol/td-p/9329803)]

***

Method 3: Use a "Snooze" Workaround (Temporary) \[]

Because Android treats it like an active notification, you can temporarily swipe it away using the Notification Snooze feature if you have it enabled. \[]

1. Go to _Settings > Notifications > Advanced settings_ and turn on **Show snooze button**.
2. Swipe down your notification shade, slightly drag the "Do Not Disturb is on" notification to the side, and tap the **bell/clock icon**.
3. Choose to snooze it for **2 hours**. The icon will disappear from your status bar for that duration. \[]

If you are open to using a computer, **Method 1** is the cleanest way to get a completely empty status bar. Let me know if you need help **setting up ADB** on your computer to run the command!

- [link](https://eu.community.samsung.com/t5/galaxy-s23-series/hide-quot-do-not-disturb-quot-symbol/td-p/9329803)\
  Hide "Do not disturb" symbol - Samsung Community\
  In the menu you described, you can change the Lock Screen option from "Show content" to "Don't show notifications". This does exac...\
  samsung.com
- [link](https://www.youtube.com/watch?v=jZilAZXA3aY)\
  How to Enable/Disable Hide Status Bar Icons During Do Not Disturb\
  To enable or disable the hiding of status bar icons during Do Not Disturb on a Samsung Galaxy S23 series device, first tap the hom...\
  1:15\
  YouTube·ITJungles
- [link](https://www.youtube.com/watch?v=VERqE2tTkLI\&t=4)\
  How to Hide App Notification Icons from Status Bar When Do Not Disturb Is On ...\
  To maintain a clean and quiet status bar when Do Not Disturb is active, you can hide all app notification icons while still keepin...\
  1m\
  YouTube·S-Series School

Show all

You said: it's an icon, not a notification

May 21, 2026

You are completely correct. The circle-and-dash symbol is a **status indicator icon** hardcoded into Android, and it is a known limitation that Samsung completely excludes it from Good Lock's QuickStar menu. \[[1](https://us.community.samsung.com/t5/Suggestions/Please-give-us-an-option-to-enable-disable-Status-Bar-icons-like/td-p/3248827), [2](https://www.asurion.com/connect/tech-tips/be-present-how-to-turn-on-your-phones-do-not-disturb-feature/)]

Because Samsung does not provide a graphic toggle to remove this specific icon while leaving the feature turned on, you can completely strip it away by using an **ADB command on a computer** to force it out of the status bar.

The Only Way to Remove It (The ADB Command)

Android tracks the status bar using specific "icon slots". Sending a command through a computer allows you to put the Do Not Disturb icon on a permanent blacklist so it never renders on your screen. \[[1](https://eu.community.samsung.com/t5/galaxy-s23-series/hide-quot-do-not-disturb-quot-symbol/td-p/9329803)]

1. **Prepare your phone**: Go to _Settings > About phone > Software information_ and tap **Build number** 7 times to unlock Developer options. Go back to the main settings page, open **Developer options**, and turn on **USB Debugging**.
2. **Connect to a computer**: Plug your phone into a PC or Mac using a USB cable.
3. **Get ADB**: Download the lightweight, official Google SDK Platform Tools on your computer and extract the folder.
4. **Open Terminal/Command Prompt**: Open the extracted folder, type `cmd` (on Windows) into the file explorer address bar and hit enter, or open Terminal (on Mac) and navigate to that folder path.
5. **Run the Blacklist Command**: Type or paste the following command into your terminal window and hit Enter:\
   `adb shell settings put secure icon_blacklist do_not_disturb`
6. **Verify**: The DND circle icon will instantly vanish from your status bar while your phone stays perfectly silenced.

_(If you ever want the icon back in the future, simply connect your phone back to the computer and run: `adb shell settings put secure icon_blacklist null`)_.

Are you running into any specific **error messages** while trying to connect your device to the computer, or would you like step-by-step help setting up **Platform Tools**?

- [link](https://eu.community.samsung.com/t5/galaxy-s23-series/hide-quot-do-not-disturb-quot-symbol/td-p/9329803)\
  Hide "Do not disturb" symbol - Samsung Community\
  In the menu you described, you can change the Lock Screen option from "Show content" to "Don't show notifications". This does exac...\
  samsung.com
- [link](https://us.community.samsung.com/t5/Suggestions/Please-give-us-an-option-to-enable-disable-Status-Bar-icons-like/td-p/3248827)\
  Please give us an option to enable/disable Status Bar icons (like ...\
  have been removed in One UI 8 (it was visible on One UI 6.1). Earlier these icons were visible at a glance, but now we have to pul...\
  us.community.samsung.com
- [link](https://www.asurion.com/connect/tech-tips/be-present-how-to-turn-on-your-phones-do-not-disturb-feature/)\
  How to turn Do Not Disturb on or off on iPhone and Android - Asurion\
  Do Not Disturb: Blocks calls, texts, and app notifications but allows alarms and certain exceptions (like Favorites) if you choose...\
  Asurion

You said: I have shizuku, how to run inside termux

May 21, 2026

To run ADB commands inside Termux using Shizuku, you need to use Shizuku's built-in terminal tool called **rish** (Remote Shell). This grants Termux full ADB privileges directly on your phone without needing a computer. \[[1](https://www.reddit.com/r/termux/comments/1h4ilne/how%5Fto%5Frun%5Fadb%5Fon%5Fandroid/), [2](https://www.reddit.com/r/termux/comments/1dhb8wi/how%5Fto%5Faccess%5Fadb%5Fpermissions%5Fusing%5Ftermux/), [3](https://www.reddit.com/r/termux/comments/1lzbe8g/how%5Fshould%5Fi%5Fuse%5Fthe%5Fdifferent%5Ftypes%5Fof%5Frish/), [4](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

Step 1: Export rish from Shizuku \[[1](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/), [2](https://www.reddit.com/r/termux/comments/1dhb8wi/how%5Fto%5Faccess%5Fadb%5Fpermissions%5Fusing%5Ftermux/)]

1. Open the **Shizuku** app.
2. Scroll down and tap **Use Shizuku in terminal apps**.
3. Tap **Export files**.
4. Save the files (`rish` and `rish_shizuku.dex`) into a folder you can easily access (e.g., your default **Download** folder). \[[1](https://oddity.oddineers.co.uk/2024/01/14/termux-shizuku-and-rish-configuration-for-android-14/), [2](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

Step 2: Allow Termux to Read Your Files \[[1](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

1. Open the **Termux** app.

2. Run the storage permission command:\
   bash

<!---->

```
termux-setup-storage
```

Use code with caution.
3\. A system prompt will appear; tap **Allow** to give Termux access to your files. \[[1](https://oddity.oddineers.co.uk/2024/01/14/termux-shizuku-and-rish-configuration-for-android-14/), [2](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/), [3](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

Step 3: Move and Edit the rish Script \[[1](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

You need to move the files into your Termux local environment and tell the `rish` file that Termux is the app executing it. \[[1](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

1. **Navigate to your internal Download folder** where the files were saved:\
   bash

<!---->

```
cd /sdcard/Download
```

Use code with caution.
2\. **Copy both files** to your Termux home directory:\
bash

```
cp rish rish_shizuku.dex ~
```

Use code with caution.
3\. **Go to your home directory**:\
bash

```
cd ~
```

Use code with caution.
4\. **Edit the script** to register Termux. You can do this quickly with this command (it replaces the default placeholder text with the Termux package name):\
bash

```
sed -i 's/PKG/com.termux/g' rish
```

Use code with caution.
5\. **Grant execution permissions** to the script:\
bash

```
chmod +x rish
```

Use code with caution.\
\[[1](https://github.com/AlexeiCrystal/termux-shizuku-tools), [2](https://oddity.oddineers.co.uk/2024/01/14/termux-shizuku-and-rish-configuration-for-android-14/), [3](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/), [4](https://www.reddit.com/r/termux/comments/1dhb8wi/how%5Fto%5Faccess%5Fadb%5Fpermissions%5Fusing%5Ftermux/)]

Step 4: Run the Command to Remove the DND Icon \[[1](https://www.howtogeek.com/you-dont-need-a-pc-for-adb-anymoreheres-how-to-do-it-in-termux/)]

Now you can start your local ADB shell environment via Shizuku!

1. Start the shell by entering:\
   bash

<!---->

```
./rish
```

Use code with caution.
2\. **Check your screen**: A pop-up notification from Shizuku will appear asking to authorize Termux. Tap **Allow all the time**.
3\. Once authorized, your prompt will change, indicating you are inside the ADB environment. Run the blacklist command directly:\
bash

```
settings put secure icon_blacklist do_not_disturb
```

Use code with caution.
4\. The Do Not Disturb icon will instantly disappear from your One UI status bar.
5\. Type `exit` to close the rish shell and go back to normal Termux. \[[1](https://github.com/RikkaApps/Shizuku/discussions/462), [2](https://www.youtube.com/watch?v=7mgZhCSdifc), [3](https://www.reddit.com/r/tasker/comments/1mee9qh/how%5Fto%5Fadb%5Fwifi%5Fon%5Fboot%5Fwith%5Fonly%5Fshizuku%5Fno/), [4](https://www.reddit.com/r/termux/comments/1lzbe8g/how%5Fshould%5Fi%5Fuse%5Fthe%5Fdifferent%5Ftypes%5Fof%5Frish/)]

Did the Shizuku authorization **pop up successfully** when you ran the script, or did Termux return a **"permission denied"** error?

- [link](https://www.reddit.com/r/termux/comments/1h4ilne/how%5Fto%5Frun%5Fadb%5Fon%5Fandroid/)\
  How to run adb on android. : r/termux - Reddit\
  Shizuku gives your Termux ADB (Shell) privileges to remove bloatware, list running processes, open listening ports, view stored Wi...\
  Reddit
- [link](https://www.reddit.com/r/termux/comments/1lzbe8g/how%5Fshould%5Fi%5Fuse%5Fthe%5Fdifferent%5Ftypes%5Fof%5Frish/)\
  How should I use the different types of rish? : r/termux - Reddit\
  Hello, I'm opening this post in hopes that you can guide me on how to use Rish in Termux with the root option provided by Shizuku.\
  Reddit
- [link](https://oddity.oddineers.co.uk/2024/01/14/termux-shizuku-and-rish-configuration-for-android-14/)\
  Termux, Shizuku and Rish configuration for Android 14 - Oddity\
  Exported the two Shizuku files: rish & rish\_shizuku. dex to a storage location that can be read by Termux. Open Shizuku > Use Shiz...\
  oddity.oddineers.co.uk

Show all

You said: not working. but it has a negative effect that some of my system indicators are on, and I have to turn off on good lock again

May 21, 2026

That makes complete sense, and I understand why it messed up your layout.

When you use the `settings put` command, Android **overwrites the entire blacklist string** with just the word `do_not_disturb`. Because Good Lock's QuickStar works by adding its own hidden text to that exact same list, running the command completely erased Good Lock's settings, turning your other hidden system indicators back on. \[[1](https://www.digitec.ch/en/page/fighting-the-notch-how-to-see-whats-important-at-the-top-of-the-screen-and-not-the-rubbish-9447), [2](https://www.youtube.com/watch?v=Q5sSnSG92gI)]

To fix this and successfully block the DND icon without breaking Good Lock, you must add `do_not_disturb` to your existing blacklist rather than overwriting it. \[[1](https://www.digitec.ch/en/page/fighting-the-notch-how-to-see-whats-important-at-the-top-of-the-screen-and-not-the-rubbish-9447)]

Step 1: Read your current list

First, find out what Good Lock is currently hiding. In Termux (inside `./rish`), run this command:

bash

```
settings get secure icon_blacklist
```

Use code with caution.

This will print a comma-separated string of the icons you already have hidden (for example: `wifi,battery,alarm_clock,volume`). \[[1](https://brain.best33.com/android-icon-blacklist), [2](https://www.digitec.ch/en/page/fighting-the-notch-how-to-see-whats-important-at-the-top-of-the-screen-and-not-the-rubbish-9447)]

Step 2: Inject DND into the list

Take the exact string that your phone printed, add a comma, and type **`do_not_disturb`** at the very end. \[[1](https://www.digitec.ch/en/page/fighting-the-notch-how-to-see-whats-important-at-the-top-of-the-screen-and-not-the-rubbish-9447)]

For example, if your terminal outputted `wifi,battery`, you will run:

bash

```
settings put secure icon_blacklist wifi,battery,do_not_disturb
```

Use code with caution.

_(Replace `wifi,battery` with your actual text from Step 1)._

If it still does not disappear (Alternative Names)

Depending on your exact version of One UI, Samsung sometimes maps the DND status icon to a different internal Android resource string. If `do_not_disturb` does not hide it, try adding these variations to your list instead: \[[1](https://wiki.orzfly.com/topics/android-icon-blacklist)]

- **`dnd`**
- **`zen`** (The official stock Android name for Do Not Disturb) \[[1](https://wiki.orzfly.com/topics/android-icon-blacklist)]

For example, try running:

bash

```
settings put secure icon_blacklist [YOUR_LIST],dnd,zen
```

Use code with caution.

What was the **exact output string** you got when you ran the `settings get` command? I can format the combined line for you if you paste it here!

- [link](https://wiki.orzfly.com/topics/android-icon-blacklist)\
  Android Status Bar Icon Blacklist - orzFly's Knowledge Base\
  Table\_title: Android Status Bar Icon Blacklist Table\_content: | Value | Description | | --- | --- | | airplane | Airplane Mode | |\
  wiki.orzfly.com
- [link](https://www.digitec.ch/en/page/fighting-the-notch-how-to-see-whats-important-at-the-top-of-the-screen-and-not-the-rubbish-9447)\
  Fighting the notch: How to see what's important at the top of the screen ...\
  Go to Settings. System. Developer Options. Activate USB debugging. Now all that remains is to quickly check whether your PC is all...\
  Digitec
- [link](https://brain.best33.com/android-icon-blacklist)\
  安卓状态栏隐藏图标 - 人工大脑\
  安卓状态栏隐藏图标- 人工大脑 android. 安卓状态栏隐藏图标 安卓状态栏隐藏图标 无需root，只需要adb，一次设置永久生效，可隐藏VPN 等图标。 # 获取当前 settings get secure icon\_blacklist # 设置 set...\
  brain.best33.com

Show all

You said: r11q:/ $ settings get secure icon\_blacklistrotate,headset,fuseboxon,rotate,headset,slimindicator\_home\_carrier,slimindicator\_lock\_carrier,slimindicator\_panel\_carrier,vpn,left\_clock\_position

May 21, 2026

Now that we have your exact Good Lock blacklist string, we can cleanly append the Do Not Disturb tokens to the end of it. This will hide the DND icon while keeping all your current Good Lock settings intact. \[[1](https://gist.github.com/kyledong/16a74f39a05efcfebbb12da152d5d34e)]

Because Samsung sometimes routes the DND icon through standard Android naming variants, we will add all three possibilities (`do_not_disturb`, `dnd`, and `zen`) simultaneously. \[[1](https://gist.github.com/kyledong/16a74f39a05efcfebbb12da152d5d34e)]

Copy and paste this exact command into your **Termux Shizuku shell (`r11q:/ $`)** and press **Enter**:

bash

```
settings put secure icon_blacklist rotate,headset,fuseboxon,rotate,headset,slimindicator_home_carrier,slimindicator_lock_carrier,slimindicator_panel_carrier,vpn,left_clock_position,do_not_disturb,dnd,zen
```

Use code with caution.

What to check next:

- **If it works:** The DND icon will disappear instantly, and your Good Lock carriers/indicators will stay perfectly hidden.
- **If it doesn't disappear:** Samsung may have completely hardcoded the DND layout block into their Quick Panel framework in your specific One UI version, bypassing the native Android `icon_blacklist` array entirely.

Let me know if the icon **vanished immediately** after pasting that or if it is still stubbornly sitting there!

- [link](https://gist.github.com/kyledong/16a74f39a05efcfebbb12da152d5d34e)\
  my\_samsung\_oneui\_settings.sh - GitHub Gist\
  settings put secure icon\_blacklist rotate,headset,fuseboxon,rotate,headset,ims\_volte,ims\_volte2,right\_clock\_position. #关闭自动旋转屏幕. s...\
  Gist

You said: great, it works

May 21, 2026

Awesome! I am glad that finally took care of it for you. Combining the Samsung framework names (`dnd`/`zen`) at the end of your existing Good Lock list is the perfect trick to keep your status bar exactly how you want it.

Keep that combined text handy just in case you ever need to toggle things in Good Lock again, as modifying things in QuickStar might reset that custom list.

If you ever want to tweak or hide any other stubborn **status bar elements**, or run into more **Shizuku / Termux** automation ideas, just let me know!