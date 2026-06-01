how to disable one ui update forever

May 30, 2026

To **completely disable One UI software updates forever**, standard settings menus are not enough because Samsung and wireless carriers will eventually force critical updates. You must either <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use a computer to block the system update packages via Android Debug Bridge (ADB) or use an on-device package disabler app</mark>. \[[1](https://www.youtube.com/watch?v=txGtOY2wcq4), [2](https://www.tiktok.com/@innercircle.studio/video/7268209403931692331), [3](https://www.reddit.com/r/GalaxyS21/comments/r9u2r3/how%5Fto%5Fstop%5Fphone%5Ffrom%5Fperforming%5Fsoftware%5Fupdate/), [4](https://www.reddit.com/r/GalaxyA55/comments/1qea8zu/how%5Fto%5Fstop%5For%5Fdisable%5Fthe%5Fone%5Fui%5F7%5Fupdate/), [5](https://gist.github.com/jackblk/27ae042363c9ea543cd1f444a3068068)]

Method 1: The Permanent ADB Method (No Root Required)

This is the most reliable, free way to kill updates permanently by telling the phone's operating system to freeze the updater tools. \[[1](https://gist.github.com/jackblk/27ae042363c9ea543cd1f444a3068068)]

1. **Prepare your phone**: Go to **Settings** > **About phone** > **Software information**. Tap **Build number** 7 times until it says "Developer mode enabled".
2. **Enable Debugging**: Go back to the main Settings menu, open the newly appeared **Developer options**, and toggle on **USB debugging**.
3. **Connect to PC**: Plug your phone into a computer using a USB cable.
4. **Set up ADB**: Download the official Android SDK Platform-Tools for Windows, Mac, or Linux and extract the folder.
5. **Open Terminal**: Inside the extracted folder, hold `Shift`, right-click empty space, and choose **Open PowerShell / Command Prompt here**.
6. **Authorize connection**: Type `adb devices` and press Enter. Check your phone screen and grant permission to allow USB debugging.
7. **Run the kill commands**: Copy and paste the following commands one by one, pressing Enter after each:

- `adb shell pm disable-user --user 0 com.sec.android.soagent`
- `adb shell pm disable-user --user 0 com.wssyncmldm`
- _Optional (if the above says error):_ Replace `disable-user --user 0` with `uninstall --user 0`. \[[1](https://us.community.samsung.com/t5/Galaxy-S23/How-to-prevent-firmware-update-software-update-and-allow-only/td-p/3529671), [2](https://github.com/PixelCode01/UIBloatwareRegistry), [3](https://www.youtube.com/watch?v=txGtOY2wcq4), [4](https://www.tiktok.com/@innercircle.studio/video/7268209403931692331), [5](https://gist.github.com/jackblk/27ae042363c9ea543cd1f444a3068068)]

Once these packages are disabled, your phone will completely lose its ability to check for, download, or notify you about One UI updates. \[[1](https://discuss.grapheneos.org/d/4449-is-it-possible-to-disable-automatic-system-updates?page=2), [2](https://gist.github.com/jackblk/27ae042363c9ea543cd1f444a3068068)]

Method 2: On-Device Disabler (No Computer)

If you don't have a PC, you can use local device management tools to freeze the same packages.

1. Set up an environment framework like **Shizuku** (available on the Google Play Store) to grant elevated system privileges to your device.
2. Download a package manager app like **Canta** or **Alliance Shield X** from the web or GitHub.
3. Open the app, search for **System Update**, and look for the packages `com.sec.android.soagent` and `com.wssyncmldm`.
4. Select them and hit **Disable** or **Freeze**. \[[1](https://www.reddit.com/r/samsunggalaxy/comments/1c76jl3/cancelling%5Fone%5Fui%5Fupdate/), [2](https://gist.github.com/jackblk/27ae042363c9ea543cd1f444a3068068), [3](https://www.reddit.com/r/GalaxyA55/comments/1qea8zu/how%5Fto%5Fstop%5For%5Fdisable%5Fthe%5Fone%5Fui%5F7%5Fupdate/)]

Method 3: Standard Settings (Temporary Delay Only)

If you prefer not to use third-party tools, you can pause updates for a long time, though a major carrier update may eventually override this. \[[1](https://learn.microsoft.com/en-us/windows/deployment/update/update-policies), [2](https://www.tiktok.com/@innercircle.studio/video/7268209403931692331)]

- **Turn off System Auto-Update**: Go to **Settings** > **Developer options** and turn off **Auto update system**.
- **Turn off Wi-Fi Downloading**: Go to **Settings** > **Software update** and toggle off **Auto download over Wi-Fi**. \[[1](https://www.tiktok.com/@innercircle.studio/video/7268209403931692331), [2](https://us.community.samsung.com/t5/Galaxy-S23/How-to-prevent-firmware-update-software-update-and-allow-only/td-p/3529671)]

If you ever change your mind and want to update your phone in the future, simply run the ADB commands again but replace the word `disable-user` with `enable`. \[[1](https://gist.github.com/jackblk/27ae042363c9ea543cd1f444a3068068)]

Would you like step-by-step guidance on **setting up Shizuku** on your phone, or do you need help **downloading the ADB tools** onto your computer?

- [link](https://www.reddit.com/r/samsunggalaxy/comments/1c76jl3/cancelling%5Fone%5Fui%5Fupdate/)\
  Cancelling One UI update : r/samsunggalaxy - Reddit\
  Comments Section \* breadmanlima. • 2y ago. You can't cancel updates. lenasdad52214. • 2y ago. Auto updates are set to only happen ...\
  Reddit
- [link](https://www.youtube.com/watch?v=txGtOY2wcq4)\
  How to Disable Forced Auto Update on Samsung ...\
  Disable forced auto updates on Samsung Galaxy One UI by uninstalling software update packages using ADB commands.\
  6:51\
  YouTube·TechnoGenuine
- [link](https://www.reddit.com/r/GalaxyS21/comments/r9u2r3/how%5Fto%5Fstop%5Fphone%5Ffrom%5Fperforming%5Fsoftware%5Fupdate/)\
  How to stop phone from performing software update? : r/GalaxyS21\
  It worked great. There is no way to turn off updates normally. Samsung forces updates and doesn't allow you to turn them off. I ha...\
  Reddit

Show all

You said: I have canta

May 30, 2026

Since you already have **Canta** installed, disabling One UI updates permanently will take less than two minutes.

Because Canta requires an active connection to **Shizuku** to freeze system apps, make sure Shizuku is running in the background first.

Follow these steps to block the updates:

1\. Freeze the Update Packages

1. Open the **Canta** app.
2. Grant it permission to use **Shizuku** if prompted.
3. Tap the **Search icon** at the top.
4. Type **`soagent`** into the search bar.
5. Select **`com.sec.android.soagent`** and tap the **Trash/Disable** icon at the bottom.
6. Clear your search, then type **`wssyncmldm`**.
7. Select **`com.wssyncmldm`** and tap the **Trash/Disable** icon.

2\. Verify and Clean Up

1. Go to your phone's main **Settings** menu.
2. Scroll down to **Software update**.
3. Tap it. The menu should either crash immediately, freeze, or give you an error message saying the service is unavailable. This means it worked perfectly.
4. If you have an active, annoying "Update Available" notification stuck on your screen right now, simply **restart your phone**. The notification will disappear and never return.

If you ever want to update your phone in the future, just open Canta, go to the **Uninstalled/Disabled** tab, find those two packages, and restore them.

Are you seeing any **error messages** in Canta, or did the software update menu **successfully stop working**?

You said: is it safe

May 30, 2026

**Yes, it is entirely safe for the daily operation of your phone**, but it introduces long-term digital security risks.

Disabling these specific update packages will not crash your operating system, delete your personal photos, or slow down your hardware.

Why It Is System-Safe

- **No Boot Loops:** The two packages you disabled (`soagent` and `wssyncmldm`) only control the background updater tool. They are not core system frameworks like the phone interface or the cellular modem.
- **Easily Reversible:** You have not deleted any critical files. Because Canta utilizes Shizuku to manipulate the app state on the user level, you can reverse the process instantly inside Canta by hitting "Restore" if you change your mind.

The Long-Term Risks

While your phone will run perfectly fine today, keeping updates turned off forever introduces a few distinct trade-offs:

- **Security Vulnerabilities:** You will no longer receive monthly Android security patches. Over time, your phone will become vulnerable to newly discovered malware, browser exploits, or remote hacks.
- **App Incompatibility:** In 2 to 3 years, newer apps or banking updates on the Google Play Store may require a newer version of Android/One UI than the one you are locked into.
- **Unresolved Bugs:** If your current software version has minor bugs, battery drain issues, or camera glitches, they will never be patched or fixed.

Safety Recommendations

If you are keeping updates blocked to avoid a bad One UI version or a glitchy update, consider unfreezing them once or twice a year to pull major security patches, then freezing them again immediately after.

Are you disabling updates to **avoid a specific bug**, or do you just prefer the **current design** of your phone's interface?

You said: I've seen expert label instead of recommended on these on canta

May 30, 2026

The <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>"Expert" label in Canta is a warning that disabling this app will break core phone functions</strong></mark>. It acts as a safety guard to stop people from accidentally breaking their devices. \[[1](https://github.com/samolego/Canta/issues/242), [2](https://www.makeuseof.com/remove-pre-installed-android-apps-safely-with-canta/), [3](https://awesome-android-root.org/general-guides/android-apps-debloating)]

What Canta's Labels Mean

Canta imports its database from the \[Universal Android Debloater (UAD)]\(1.3.4, 1.3.10) to rate how safe an app is to delete. \[[1](https://github.com/awesome-android-root/awesome-android-root/blob/main/docs/general-guides/android-apps-debloating.md)]

- **🟢 Recommended / Safe**: Basic bloatware (like pre-installed Facebook or booking apps) that you can safely remove without losing any system functionality. \[[1](https://www.androidauthority.com/best-shizuku-apps-android-3659353/), [2](https://www.makeuseof.com/remove-pre-installed-android-apps-safely-with-canta/), [3](https://awesome-android-root.org/general-guides/android-apps-debloating)]
- **🟡 Advanced / Caution**: Apps that control minor features. Disabling them might break a secondary feature like a specific casting tool or a widget. \[[1](https://awesome-android-root.org/general-guides/android-apps-debloating), [2](https://www.makeuseof.com/remove-pre-installed-android-apps-safely-with-canta/)]
- **🟠 Expert**: Core framework packages. Removing these will **permanently stop a primary phone feature from working** (which, in your case, is exactly what you want). \[[1](https://awesome-android-root.org/general-guides/android-apps-debloating), [2](https://www.makeuseof.com/remove-pre-installed-android-apps-safely-with-canta/)]
- **🔴 Unsafe**: Critical core operating system files. Touching these can cause your phone to "soft-brick" or get stuck in an endless loop of restarting. \[[1](https://www.reddit.com/r/degoogle/comments/1it2bbb/canta%5Funinstall%5Fapps/), [2](https://awesome-android-root.org/general-guides/android-apps-debloating)]

Why the Updater is Labeled "Expert"

For 99% of normal phone users, completely destroying the phone's ability to pull software and security updates is considered a bad thing that breaks a vital feature. Because the software update menu will crash or freeze when you click it, Canta appropriately tags `soagent` and `wssyncmldm` as **Expert** to make sure users read up on it before pressing delete. \[[1](https://www.makeuseof.com/remove-pre-installed-android-apps-safely-with-canta/), [2](https://awesome-android-root.org/general-guides/android-apps-debloating)]

Since your specific goal is to block One UI updates forever, this is the exact result you are looking for.

Are you ready to proceed with freezing them, or would you like to know how to **restore them** later just in case?

- [link](https://www.reddit.com/r/degoogle/comments/1it2bbb/canta%5Funinstall%5Fapps/)\
  Canta uninstall apps : r/degoogle - Reddit\
  Now to your question: any app in the "recommended" list should be safe to disable, in that disabling them are very unlikely to cau...\
  Reddit
- [link](https://awesome-android-root.org/general-guides/android-apps-debloating)\
  Android Debloating | Awesome Android Root\
  🟢 Safe (Recommended): Can be removed without issues. 🟡 Caution (Advanced): May break minor functionality. 🟠 Expert: May break i...\
  Awesome Android Root
- [link](https://www.makeuseof.com/remove-pre-installed-android-apps-safely-with-canta/)\
  This app tells you which pre-installed Android apps ...\
  When you're unsure about removing a mysterious app, the safest move is to simply Google it and understand what it actually does. T...\
  MakeUseOf

Show all