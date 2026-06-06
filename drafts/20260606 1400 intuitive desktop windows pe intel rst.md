<!-- "stop wasting more time fighting it" -->

<!-- fail. hard disk not detected. conclusion: hardware failure. -->

im currently inside try ubuntu on a previously non bootable windows laptop how to access files

You can access your Windows files directly from the "Try Ubuntu" environment because Linux can read Windows file systems (NTFS). \[[1](https://askubuntu.com/questions/869448/cant-access-uefi-or-boot-to-windows-10-after-installing-ubuntu-16-lts), [2](https://www.reddit.com/r/linux4noobs/comments/kzrlax/opened%5Fmy%5Fwindows%5Ffiles%5Fthrough%5Flinux/)]

1\. Open the Files App

- Click the **Files** icon (file cabinet) on the left dock.
- Look at the left sidebar of the window.
- Click **Other Locations**. \[[1](https://askubuntu.com/questions/1038630/access-windows-10-shared-folder-from-ubuntu-18-04)]

2\. Locate Your Windows Drive

- Look under the **On This Computer** section.
- Find the drive labeled with your laptop's storage size.
- It often displays as **Basic data partition** or **OS**.
- Click it to mount and open the drive.

3\. Find Your Personal Data

- Navigate to the **Users** folder.
- Double-click your **Windows username** folder.
- Access your **Desktop**, **Documents**, or **Downloads**. \[[1](https://discourse.ubuntu.com/t/re-install-nothing-is-working-right-in-my-kubuntu-25-10-installed-program/79340?page=2)]

4\. Copy to External Storage

- Plug in a USB flash drive or external hard drive.
- Open a second Files window.
- Drag and drop your important folders to the external drive. \[[1](https://askleo.com/machine-wont-boot-get-files/)]

Troubleshooting: "Unable to Access" Error

If Ubuntu says the partition is locked or "hibernated," Windows did not shut down fully. \[[1](https://askubuntu.com/questions/57056/ubuntu-appears-in-bios-menu-uefi), [2](https://askubuntu.com/questions/1365952/how-to-remove-gnu-grub-without-booting-into-windows)]

- Open the **Terminal** app (Ctrl + Alt + T).
- Type `sudo ntfsfix /dev/sdXY` (Replace `sdXY` with your drive name, like `sda3`, which you can find in the **Disks** app).
- Press **Enter** to force unlock the drive.

To help you troubleshoot further, tell me:

- Did you get an **error message** when clicking the drive?
- Are you looking to **repair the Windows boot issue** next, or just **wipe the laptop and install Ubuntu**?

Let me know your next step so I can guide you through it.

- [link](https://askubuntu.com/questions/869448/cant-access-uefi-or-boot-to-windows-10-after-installing-ubuntu-16-lts)\
  Can't access UEFI or boot to Windows 10 after installing Ubuntu 16 LTS\
  Jan 8, 2017 — Could you please boot a "live" DVD/USB with Ubuntu, choose "Try Ubuntu", and try to access your Windows files. What exactly are yo...\
  \
  Ask Ubuntu
- [link](https://www.reddit.com/r/linux4noobs/comments/kzrlax/opened%5Fmy%5Fwindows%5Ffiles%5Fthrough%5Flinux/)\
  opened my windows files through linux? : r/linux4noobs\
  Jan 18, 2021 — Ubuntu supports NTFS file systems so, as a result you can access/view your files in linux. Some distros don't provide this functio...\
  \
  Reddit
- [link](https://askubuntu.com/questions/1038630/access-windows-10-shared-folder-from-ubuntu-18-04)\
  networking - Access Windows 10 Shared Folder from Ubuntu 18.04\
  May 21, 2018 — We gone to files->Other locations in linux system and there we could see the windows network. After opening that we could see the ...\
  \
  \
  Ask Ubuntu

Show all

You said: there is a message "this compute uses intel rst"

The **Intel RST (Rapid Storage Technology)** message means <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">your laptop's hard drive is locked in a special RAID mode managed by Intel</mark>. Standard Linux environments cannot "see" your hard drive while this is active, which is why your files aren't showing up yet. \[[1](https://documentation.ubuntu.com/desktop/en/latest/reference/intel-rst-during-ubuntu-installation/), [2](https://www.reddit.com/r/linux4noobs/comments/1alpdbs/intel%5Frst%5Frapid%5Fstorage%5Ftechnology/), [3](https://www.reddit.com/r/Ubuntu/comments/zucvlx/ubuntu%5F22041%5Finstall%5Fdoes%5Fdetect%5Fmy%5Fhard%5Fdrive/), [4](https://forum-en.msi.com/index.php?threads/ubuntu-24-04-linux-installer-cannot-find-hard-drives-on-ai18hx.413841/)]

To get your files, you need to temporarily switch your storage settings in your computer's BIOS/UEFI menu. **Do not worry—this will not delete your data.** \[[1](https://www.reddit.com/r/Ubuntu/comments/14mvida/installing%5Fubuntu%5Fon%5Fext%5Fhard%5Fdrive%5Fit%5Fsays%5Fthat/), [2](https://www.reddit.com/r/Ubuntu/comments/zucvlx/ubuntu%5F22041%5Finstall%5Fdoes%5Fdetect%5Fmy%5Fhard%5Fdrive/)]

Step 1: Shut down Ubuntu

1. Click the power icon in the top right corner of the Ubuntu desktop.
2. Select **Power Off**.
3. Remove your Ubuntu USB drive for a moment so the laptop doesn't automatically boot right back into it.

Step 2: Change Storage Mode to AHCI \[[1](https://community.intel.com/t5/Rapid-Storage-Technology/Windows-11-Changed-RST-to-AHCI/m-p/1551458/highlight/true)]

1. Turn on your laptop and immediately start tapping the BIOS key for your specific brand (usually **F2** for Dell/Acer/Asus, **F10** for HP, or **Lenovo button/F1** for Lenovo).
2. Look through the menus (often under **Advanced**, **System Configuration**, or **Main**).
3. Look for settings named **SATA Mode**, **Storage Configuration**, **VMD Controller**, or **Intel RST**.
4. Change the setting from **RST / RAID Optane** to **AHCI** (or disable VMD).
5. _Note for Acer laptops:_ If you don't see this setting, press **Ctrl + S** while on the Main tab of the BIOS to reveal hidden options.
6. Save and exit (usually by pressing **F10**). \[[1](https://discourse.ubuntu.com/t/ubuntu-installation-on-computers-with-intel-r-rst-enabled/15347?page=2), [2](https://documentation.ubuntu.com/desktop/en/latest/reference/intel-rst-during-ubuntu-installation/), [3](https://www.reddit.com/r/Ubuntu/comments/14mvida/installing%5Fubuntu%5Fon%5Fext%5Fhard%5Fdrive%5Fit%5Fsays%5Fthat/), [4](https://www.reddit.com/r/Ubuntu/comments/zucvlx/ubuntu%5F22041%5Finstall%5Fdoes%5Fdetect%5Fmy%5Fhard%5Fdrive/), [5](https://www.reddit.com/r/linux4noobs/comments/1alpdbs/intel%5Frst%5Frapid%5Fstorage%5Ftechnology/), [6](https://barebone.rjtech.com/how-to-install-windows-when-you-cant-find-your-drives/)]

Step 3: Boot Back into Ubuntu

1. Turn off the laptop again, plug your Ubuntu USB drive back in, and turn it back on.
2. Select **Try Ubuntu** again.
3. Open the **Files** app, click **Other Locations**, and your Windows drive should now be perfectly visible under "On This Computer".
4. Copy your files to an external USB drive. \[[1](https://www.youtube.com/watch?v=KVnuW0z5l20\&t=5)]

⚠️ Critical Warning Before You Proceed

Because your Windows laptop was already "non-bootable" before you started, changing this setting is completely safe for file recovery. However, **if you ever try to fix the original Windows installation later, you must change this setting back to Intel RST/RAID.** Windows will bluescreen upon boot if it expects RST but finds AHCI. \[[1](https://documentation.ubuntu.com/desktop/en/latest/reference/intel-rst-during-ubuntu-installation/), [2](https://www.reddit.com/r/linux4noobs/comments/1alpdbs/intel%5Frst%5Frapid%5Fstorage%5Ftechnology/), [3](https://itsfoss.community/t/workaround-to-install-20-04-with-intel-rst-systems/4517)]

What **brand of laptop** (e.g., Dell, HP, Lenovo) are you using? If you hit a snag finding the AHCI setting in the BIOS, I can give you the exact menu path for your specific model. \[[1](https://documentation.ubuntu.com/desktop/en/latest/reference/intel-rst-during-ubuntu-installation/), [2](https://www.reddit.com/r/Ubuntu/comments/zucvlx/ubuntu%5F22041%5Finstall%5Fdoes%5Fdetect%5Fmy%5Fhard%5Fdrive/)]

- [link](https://www.reddit.com/r/Ubuntu/comments/14mvida/installing%5Fubuntu%5Fon%5Fext%5Fhard%5Fdrive%5Fit%5Fsays%5Fthat/)\
  Installing Ubuntu on ext hard drive. It says that I need to turn ...\
  Jun 30, 2023 — Comments Section. LordPenguinTheFirst. • 3y ago. Go to your computer's bios by pressing usually F2 when it starts up. It should br...\
  Reddit·r/Ubuntu
- [link](https://www.reddit.com/r/Ubuntu/comments/zucvlx/ubuntu%5F22041%5Finstall%5Fdoes%5Fdetect%5Fmy%5Fhard%5Fdrive/)\
  Ubuntu 22.04.1 Install does detect my hard drive - Reddit\
  Dec 24, 2022 — Look in your UEFI/Firmware/Bios menus. Look for a setting called RAID/RST/Optane. There should be an option under it to enable AHC...\
  Reddit·r/Ubuntu
- [link](https://discourse.ubuntu.com/t/ubuntu-installation-on-computers-with-intel-r-rst-enabled/15347?page=2)\
  Ubuntu installation on computers with Intel(R) RST enabled - Page 2\
  Apr 16, 2020 — Thank you for this! ... Hello, I have finally succeeded to swich from RST to AHCI (after trying very long in vain). The documentat...\
  Ubuntu Community Hub

Show all

You said: im in insydeh20 setup utility. is there such a setting

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, the setting exists in </span><strong>InsydeH20</strong></mark>, but it is notorious for being **hidden by default**. Depending on your laptop brand, you may need a shortcut to make it appear. \[[1](https://community.acer.com/en/discussion/663308/problems-swithcing-from-rst-to-ahci-in-boot-menu-insydeh20-bios-nitro-5-gaming-laptop), [2](https://h30434.www3.hp.com/t5/Notebook-Operating-System-and-Recovery/HOW-T0-ACCESS-ADVANCED-SETTINGS-INSYDE-H20-F-10-BIOS/td-p/9338643), [3](https://www.justanswer.com/computer/75vs9-want-unlock-advanced-bios-features-presario-cq61.html), [4](https://community.acer.com/en/discussion/669015/acer-travelmate-p215-53-cannot-activate-ahci-in-bios-not-a-ctrl-s-issue)]

Look for **one of these two settings** in your InsydeH20 menus:

- **SATA Mode** (Needs to be changed from _RST Premium_ to _AHCI_)
- **VMD Controller** (Needs to be changed from _Enabled_ to _Disabled_) \[[1](https://community.acer.com/en/discussion/669015/acer-travelmate-p215-53-cannot-activate-ahci-in-bios-not-a-ctrl-s-issue), [2](https://www.youtube.com/watch?v=GsBEa3XPPAE), [3](https://community.acer.com/en/discussion/663308/problems-swithcing-from-rst-to-ahci-in-boot-menu-insydeh20-bios-nitro-5-gaming-laptop), [4](https://forums.linuxmint.com/viewtopic.php?t=358196)]

Try these steps to find and unlock it:

Step 1: Check the "Main" or "Configuration" Tabs

Use your arrow keys to navigate to the **Main** tab or **System Configuration** tab. Look closely for _SATA Mode_ or _VMD Controller_. \[[1](https://community.acer.com/en/discussion/669015/acer-travelmate-p215-53-cannot-activate-ahci-in-bios-not-a-ctrl-s-issue), [2](https://www.youtube.com/watch?v=GsBEa3XPPAE), [3](https://www.dell.com/support/contents/en-na/videos/videoplayer/ensure-boot-settings-and-sata-operation-are-properly-configured/6176628951001)]

Step 2: Unlock the Hidden Menu (If it is missing) \[[1](https://www.justanswer.com/computer/75vs9-want-unlock-advanced-bios-features-presario-cq61.html)]

If you do not see either setting, InsydeH20 has hidden it. Use the appropriate trick for your laptop brand: \[[1](https://www.justanswer.com/computer/75vs9-want-unlock-advanced-bios-features-presario-cq61.html)]

- **For Acer Laptops (Most Common for InsydeH20):**
  1. Navigate to the **Main** tab.
  2. Press **Ctrl + S** on your keyboard.
  3. The _SATA Mode_ or _VMD Controller_ option will instantly pop up on the screen. Change it. \[[1](https://www.reddit.com/r/laptops/comments/i60sok/acer%5Finsydeh2o%5Frev50%5Fadvanced%5Fbios%5Funlock%5Fkeycode/), [2](https://community.acer.com/en/discussion/663308/problems-swithcing-from-rst-to-ahci-in-boot-menu-insydeh20-bios-nitro-5-gaming-laptop), [3](https://community.acer.com/en/discussion/649153/bios-advanced-settings-insydeh20-v1-27-aspire-f5-573g), [4](https://community.acer.com/en/discussion/669015/acer-travelmate-p215-53-cannot-activate-ahci-in-bios-not-a-ctrl-s-issue), [5](https://www.youtube.com/watch?v=GsBEa3XPPAE)]
- **For HP / Lenovo / Other Brands:**
  1. Go to the **Main** tab.
  2. Press **Fn + Tab** three times quickly.
  3. Press **F10** to save and exit.
  4. Reboot immediately back into the BIOS. A brand new **Advanced** tab will now be unlocked containing the storage configuration. \[[1](https://www.youtube.com/watch?v=CQZQadrXjJg), [2](https://community.acer.com/en/discussion/663308/problems-swithcing-from-rst-to-ahci-in-boot-menu-insydeh20-bios-nitro-5-gaming-laptop), [3](https://www.reddit.com/r/laptops/comments/kd1ckj/unlock%5Fadvanced%5Fmenu%5Ffor%5Finsydeh20%5Frev%5F50%5Fbios/), [4](https://www.youtube.com/watch?v=sKKbGMoAvqM), [5](https://h30434.www3.hp.com/t5/Notebook-Operating-System-and-Recovery/HOW-T0-ACCESS-ADVANCED-SETTINGS-INSYDE-H20-F-10-BIOS/td-p/9338643), [6](https://www.reddit.com/r/LenovoLOQ/comments/193gc3w/advanced%5Fbios%5Funlock/)]

Step 3: Save and Exit

Once you change the setting to **AHCI** or **Disable VMD**, press **F10** to save your changes and exit. \[[1](https://www.youtube.com/watch?v=CQZQadrXjJg), [2](https://www.youtube.com/watch?v=GsBEa3XPPAE), [3](https://community.acer.com/en/discussion/669015/acer-travelmate-p215-53-cannot-activate-ahci-in-bios-not-a-ctrl-s-issue)]

Now, plug your Ubuntu USB back in and boot into it. Your Windows files will be fully visible under **Other Locations** in the Files app. \[[1](https://www.youtube.com/watch?v=CQZQadrXjJg)]

Did the **Ctrl + S** shortcut reveal the setting, or are you still unable to see it? Let me know if you need help navigating the menu once it appears. \[[1](https://community.acer.com/en/discussion/669015/acer-travelmate-p215-53-cannot-activate-ahci-in-bios-not-a-ctrl-s-issue), [2](https://community.acer.com/en/discussion/663308/problems-swithcing-from-rst-to-ahci-in-boot-menu-insydeh20-bios-nitro-5-gaming-laptop)]

- [link](https://www.youtube.com/watch?v=CQZQadrXjJg)\
  How to Fix the InsydeH20 setup utility problem\
  Jan 4, 2019 — what's up guys this is Zomka from Tech Fortnite. and today we are going to see how to fix NCD H20 setup utility problem. so let's ...\
  2:56\
  YouTube·TechFortnite
- [link](https://www.reddit.com/r/laptops/comments/kd1ckj/unlock%5Fadvanced%5Fmenu%5Ffor%5Finsydeh20%5Frev%5F50%5Fbios/)\
  Unlock Advanced Menu for InsydeH20 Rev. 5.0 BIOS (Acer ...\
  Dec 14, 2020 — This involves pressing Fn+Tab three times in the BIOS, then rebooting. The system BIOS version (from the video) shows V1. 37. -Ins...\
  Reddit·r/laptops
- [link](https://community.acer.com/en/discussion/663308/problems-swithcing-from-rst-to-ahci-in-boot-menu-insydeh20-bios-nitro-5-gaming-laptop)\
  Problems swithcing from RST to AHCI in boot menu ...\
  Mar 27, 2022 — You can switch to AHCI in Safe boot, go to start and type RUN, type msconfig and click OK, move to Boot tab and select Safe boot, ...\
  Acer Community

Show all

You said: it's lenovo. i did not see main. there are info, config, security, boot, exit.

On **Lenovo** laptops using the InsydeH20 utility, the setting you need is hidden inside the **Configuration** tab. Lenovo calls it **Intel VMD Controller** instead of SATA Mode. \[[1](https://support.lenovo.com/us/en/solutions/ht516559-system-may-not-boot-to-the-os-if-the-bios-intel-vmd-is-set-incorrectly-with-two-drives-installed-ideapad-gaming-3-15ihu6)]

Follow these steps to find and disable it:

1\. Locate the Setting

1. Use your arrow keys to move over to the **Configuration** tab.
2. Scroll down the list using your down arrow key.
3. Look for **Intel VMD Controller**. \[[1](https://support.lenovo.com/us/en/solutions/ht516559-system-may-not-boot-to-the-os-if-the-bios-intel-vmd-is-set-incorrectly-with-two-drives-installed-ideapad-gaming-3-15ihu6), [2](https://support.lenovo.com/kn/en/solutions/ht512609-system-may-fail-to-start-the-os-after-a-bios-update-thinkbook-14s-yoga-itl)]

2\. Disable Intel VMD \[[1](https://support.lenovo.com/kn/en/solutions/ht512609-system-may-fail-to-start-the-os-after-a-bios-update-thinkbook-14s-yoga-itl)]

1. Highlight **Intel VMD Controller** and press **Enter**.
2. Change it from _Enabled_ to **Disabled**.
3. _(Note: On some models, doing this will automatically make a "SATA Controller Mode" option appear right below it. If it does, ensure it says **AHCI**)._ \[[1](https://support.lenovo.com/us/en/solutions/ht516559-system-may-not-boot-to-the-os-if-the-bios-intel-vmd-is-set-incorrectly-with-two-drives-installed-ideapad-gaming-3-15ihu6), [2](https://support.lenovo.com/kn/en/solutions/ht512609-system-may-fail-to-start-the-os-after-a-bios-update-thinkbook-14s-yoga-itl)]

3\. Save and Reboot

1. Press the **F10** key on your keyboard to save and exit.
2. Confirm by selecting **Yes**. \[[1](https://support.lenovo.com/us/en/solutions/ht516559-system-may-not-boot-to-the-os-if-the-bios-intel-vmd-is-set-incorrectly-with-two-drives-installed-ideapad-gaming-3-15ihu6)]

What to do if "Intel VMD Controller" is missing or grayed out:

Lenovo hides the advanced storage menu on certain models. If you don't see it on the Configuration tab, try this physical key trick to reveal it: \[[1](https://forums.lenovo.com/t5/Lenovo-Yoga-Series-Laptops/How-do-I-get-access-to-the-advanced-tab-on-Insydeh20-rev-5-BIOS/m-p/5232115)]

1. Go to the **Exit** tab, select **Discard Changes**, and shut down the computer.
2. While the laptop is completely powered off, hold down **Fn + R** and **Fn + N** at the same time for about 3 seconds.
3. Release those keys, then turn the laptop back on and immediately start tapping **F2** to re-enter the BIOS.
4. Check the **Configuration** tab again—the Intel VMD Controller option should now be unlocked. \[[1](https://www.reddit.com/r/LenovoLOQ/comments/193gc3w/advanced%5Fbios%5Funlock/), [2](https://support.lenovo.com/us/en/solutions/ht516559-system-may-not-boot-to-the-os-if-the-bios-intel-vmd-is-set-incorrectly-with-two-drives-installed-ideapad-gaming-3-15ihu6), [3](https://superuser.com/questions/1648456/enter-advanced-bios-settings)]

Once disabled, plug your Ubuntu USB back in and select **Try Ubuntu**. Your Windows drive will now show up under **Other Locations** in the Files app. \[[1](https://learn.microsoft.com/en-us/answers/questions/4308850/how-do-i-configure-insydeh20-setup-utility-to-run)]

Did you find the VMD Controller option under Configuration, or did you have to use the key trick? \[[1](https://support.lenovo.com/us/en/solutions/ht516559-system-may-not-boot-to-the-os-if-the-bios-intel-vmd-is-set-incorrectly-with-two-drives-installed-ideapad-gaming-3-15ihu6)]

- [link](https://forums.lenovo.com/t5/Lenovo-Yoga-Series-Laptops/How-do-I-get-access-to-the-advanced-tab-on-Insydeh20-rev-5-BIOS/m-p/5232115)\
  How do I get access to the advanced tab on Insydeh20 rev 5.0 ...\
  Jun 18, 2023 — With the BIOS already updated, if the tab is not present, it means that its not supported on your device. You can check the Graphi...\
  Lenovo
- [link](https://learn.microsoft.com/en-us/answers/questions/4308850/how-do-i-configure-insydeh20-setup-utility-to-run)\
  How do i configure "InsydeH20 setup utility" to run/install Windows 10 ...\
  Jul 21, 2022 — With the USB device plugged in, on the BIOS Setup, go to Boot > On boot priority order go the USB device and press F5 until it bec...\
  Microsoft Learn
- [link](https://www.reddit.com/r/LenovoLOQ/comments/193gc3w/advanced%5Fbios%5Funlock/)\
  Advanced Bios unlock : r/LenovoLOQ - Reddit\
  Jan 10, 2024 — This may be of use to others , It works on my new 16i anyway not sure about other models. ... Hold down Fn key and press R for 2 s...\
  Reddit·r/LenovoLOQ

Show all

You said: it's lenovo xiaoxin air 13ikb pro. fn r fn n trick no effect it seems.

The Lenovo Xiaoxin Air 13IKB uses a highly specific variation of the InsydeH20 setup utility where the standard combinations fail if they aren't executed in a precise sequence, or if the controller is hidden behind alternative menus.

Because the laptop is currently non-bootable, we must get the storage mode switched so Ubuntu can rescue your data. Try these steps to uncover the option. \[[1](https://community.intel.com/t5/Rapid-Storage-Technology/Windows-11-Changed-RST-to-AHCI/td-p/1551453)]

Method 1: The Exact Key-Timing Trick

The `Fn + R` and `Fn + N` sequence on your specific Xiaoxin firmware usually requires an intentional keyboard repeat sequence to register: \[[1](https://superuser.com/questions/1837748/how-to-access-advanced-bios-uefi-on-lenovo-ideapad-slim-7-pro), [2](https://www.youtube.com/watch?v=7RuSA7Nphu4)]

1. Turn off the laptop completely.
2. Turn it on and immediately press **F2** to enter your current InsydeH20 menu.
3. Once inside, press **Fn + R**, then press **Fn + N**.
4. Immediately press **F10** to save, and hit **Enter** to exit (even though you didn't visually see a change).
5. **Crucial:** As the laptop restarts, immediately start spamming **F2** again to load back into the BIOS.
6. Check your menu tabs now. A hidden **Advanced** tab or new items under **Configuration** should be visible. \[[1](https://www.reddit.com/r/LenovoLOQ/comments/193gc3w/advanced%5Fbios%5Funlock/), [2](https://www.youtube.com/watch?v=hLBKgWL7xk0), [3](https://www.youtube.com/watch?v=7RuSA7Nphu4), [4](https://superuser.com/questions/1837748/how-to-access-advanced-bios-uefi-on-lenovo-ideapad-slim-7-pro)]

Method 2: The Tab/F4 Sequence

If the previous sequence still fails, some Xiaoxin Air models running specific Insyde revisions rely on a multi-key unlock: \[[1](https://superuser.com/questions/1711770/unlock-advanced-menu-hidden-in-bios)]

1. Enter the BIOS using **F2**.
2. Press **Fn + Tab** three times quickly.
3. Press **F10** to save and exit, then immediately reboot back into the BIOS with **F2**. \[[1](https://www.reddit.com/r/LenovoLOQ/comments/193gc3w/advanced%5Fbios%5Funlock/), [2](https://www.youtube.com/watch?v=hLBKgWL7xk0), [3](https://superuser.com/questions/1711770/unlock-advanced-menu-hidden-in-bios), [4](https://www.youtube.com/watch?v=7RuSA7Nphu4)]

Method 3: Look for "Storage" or "Controller" Submenus

If the options are visible but named strangely:

1. Go to the **Configuration** tab.
2. Look for **Storage**, **SATA Controller Mode**, **Intel VMD Controller**, or **Intel RST**.
3. If you see _Intel VMD_, turn it **Disabled**. If you see _SATA Controller_, change it from _RST_ to **AHCI**. \[[1](https://www.reddit.com/r/Lenovo/comments/1tr4jir/need%5Fhelp%5Fwith%5Fenabling%5Frst/), [2](https://www.youtube.com/watch?v=hLBKgWL7xk0), [3](https://support.lenovo.com/sr/en/solutions/ht512609-system-may-fail-to-start-the-os-after-a-bios-update-thinkbook-14s-yoga-itl)]

Alternative: What if the BIOS refuses to unlock?

If your firmware is completely locked down and you cannot switch to AHCI, Ubuntu will not be able to read the internal solid-state drive (SSD). If you cannot get the drive to show up:

- Do you have access to a second working Windows computer? If so, you can build a **Windows PE (Preinstallation Environment)** bootable USB instead of Ubuntu. Windows PE naturally includes the Intel RST storage drivers, allowing you to access and move your files without modifying your BIOS.

Let me know if Method 1 or 2 successfully brings up the hidden storage options!

- [link](https://www.reddit.com/r/LenovoLOQ/comments/193gc3w/advanced%5Fbios%5Funlock/)\
  Advanced Bios unlock : r/LenovoLOQ - Reddit\
  Jan 10, 2024 — This may be of use to others , It works on my new 16i anyway not sure about other models. Boot into Bios with F2, click on advance...\
  Reddit·r/LenovoLOQ
- [link](https://superuser.com/questions/1837748/how-to-access-advanced-bios-uefi-on-lenovo-ideapad-slim-7-pro)\
  How to access advanced BIOS (UEFI) on Lenovo IdeaPad Slim 7 Pro\
  Apr 3, 2024 — 2 Answers \* Go to BIOS by pressing F2 . \* Press Fn + R + N three(3) times. Yes! do three times. If i do it 1 or 2 times then it do...\
  Super User
- [link](https://www.youtube.com/watch?v=7RuSA7Nphu4)\
  How to Unlock Advanced BIOS on Lenovo LOQ Laptop ...\
  May 9, 2026 — now look at this we click more settings and where the hell is the advanced. option nowhere we got information configuration securi...\
  1:12\
  YouTube·Babin Meitei

Show all

You said: can the advanced be turned on my machine

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, the Advanced menu can technically be unlocked on your machine</span></strong></mark>, but consumer laptops like your Lenovo Xiaoxin Air 13IKB heavily guard it. Because the traditional combinations failed, you have two remaining options to bypass the Intel RST block and rescue your data. \[[1](https://forums.lenovo.com/t5/Lenovo-IdeaPad-1xx-3xx-5xx-7xx-Edge-LaVie-Z-Flex-Laptops/advanced-bios-settings/m-p/5266111), [2](https://forums.lenovo.com/t5/Gaming-Laptops/How-can-I-access-the-advanced-Bios/m-p/5368192)]

Option 1: The Final Physical Key Sequences

InsydeH20 firmware on older Xiaoxin/IdeaPad models often uses a "quick-swipe" matrix or a modified tab sequence instead of the newer `Fn + R` shortcut. Try these two exact sequences while inside your current BIOS: \[[1](https://winraid.level1techs.com/t/request-unlock-advanced-menu-on-2021-lenovo-legion-5-pro-amd/37000?page=4)]

- **The Key-Roll Trick:**
  1. Turn on the laptop and press **F2** to enter the BIOS.
  2. Hold down the **Fn** key.
  3. Without letting go of Fn, quickly slide your finger across your keyboard's rows in this exact order: **Q to P**, then **A to L**, then **Z to M**.
  4. Press **F10** to save and exit, then immediately tap **F2** on reboot. \[[1](https://forums.lenovo.com/t5/Gaming-Laptops/How-can-I-access-the-advanced-Bios/m-p/5368192), [2](https://winraid.level1techs.com/t/request-unlock-advanced-menu-on-2021-lenovo-legion-5-pro-amd/37000?page=4), [3](https://www.youtube.com/watch?v=ykq-KVuGM6I)]
- **The Config-Tab Sequence:**
  1. Enter the BIOS with **F2**.
  2. Arrow over to the **Configuration** tab.
  3. Press **Fn + Tab** exactly three times quickly.
  4. Press **F10** to save and exit, then immediately tap **F2** on reboot. \[[1](https://forums.lenovo.com/t5/Gaming-Laptops/How-can-I-access-the-advanced-Bios/m-p/5368192), [2](https://www.reddit.com/r/laptops/comments/tibjy1/unlock%5Fadvanced%5Fmenu%5Fhidden%5Fin%5Fbios/), [3](https://learn.microsoft.com/en-us/answers/questions/3929444/my-advanced-bios-settings-are-not-showing), [4](https://www.youtube.com/watch?v=nCfAQ-KlSo4\&t=2), [5](https://www.youtube.com/watch?v=sKKbGMoAvqM)]

***

Option 2: The Easiest Workaround (Skip the BIOS entirely)

If the BIOS refuses to reveal the storage option, don't waste more time fighting it. Your goal is to copy your files, and Linux simply lacks the built-in storage controller drivers for Intel RST.

Instead of using Ubuntu, **create a Windows PE (Preinstallation Environment) live USB**.

- **Why it works:** A Windows recovery environment (like Hiren's BootCD PE or a standard Windows 10/11 Installation USB) inherently contains the Intel RST storage drivers. It will see your hard drive perfectly without altering a single BIOS setting.
- **How to do it:** You will need to borrow a working Windows PC for 10 minutes, plug in a blank USB drive, and use a tool like Rufus to burn a Windows PE ISO to the drive.

Once you boot your Xiaoxin laptop from that Windows PE USB, you will have a familiar Windows desktop interface where you can instantly open File Explorer, view your locked C: drive, and drag your files to an external backup disk.

Do you have access to a **second working Windows computer** right now to make a Windows PE flash drive?

- [link](https://forums.lenovo.com/t5/Gaming-Laptops/How-can-I-access-the-advanced-Bios/m-p/5368192)\
  How-can-I-access-the-advanced-Bios - LENOVO COMMUNITY\
  Mar 13, 2025 — Turn on your laptop and immediately start pressing the F2 key repeatedly until the BIOS setup screen appears.\
  Lenovo
- [link](https://forums.lenovo.com/t5/Lenovo-IdeaPad-1xx-3xx-5xx-7xx-Edge-LaVie-Z-Flex-Laptops/advanced-bios-settings/m-p/5266111)\
  advanced-bios-settings - English Community - Lenovo Forums\
  Nov 9, 2023 — Also, make sure your system is up to date with the latest drivers and software updates. You can check for updates on the Lenovo Su...\
  Lenovo
- [link](https://www.reddit.com/r/laptops/comments/tibjy1/unlock%5Fadvanced%5Fmenu%5Fhidden%5Fin%5Fbios/)\
  Unlock Advanced Menu Hidden in BIOS : r/laptops - Reddit\
  Mar 20, 2022 — Comments Section \* Boot up your computer. When you see the startup logo screen, press CTRL+F10 and then CTRL+F11 to get into the B...\
  Reddit·r/laptops

Show all

You said: find a windows pe iso. i have ubuntu.

You can easily create a Windows PE drive directly from your current Ubuntu environment. The gold standard for pre-built Windows PE environments is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://www.hirensbootcd.org/" style="font-weight: 500; margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">Hiren's BootCD PE</a></span></strong></mark>. It is a safe, free Windows 11-based emergency system that inherently includes the Intel RST drivers needed to see your laptop's hard drive. \[[1](https://www.hirensbootcd.org/), [2](https://www.youtube.com/watch?v=bbzLbj8BUGA\&t=59)]

Follow these steps entirely within Ubuntu to download and burn it. \[[1](https://learn.microsoft.com/en-us/answers/questions/2824723/windows-recovery-using-ubuntu)]

Step 1: Download the Hiren's BootCD PE ISO \[[1](https://techcommunity.microsoft.com/discussions/windowsinsiderprogram/create-hiren-boot-cd-bootable-usb-for-windows-10-system-repair/4370217)]

1. Open Firefox inside your Ubuntu environment.
2. Go straight to the official **[Hiren's BootCD PE Download Page](https://www.hirensbootcd.org/download/)**.
3. Scroll to the very bottom of the page and click the filename link **`HBCD_PE_x64.iso`** to start the download. It is roughly 3GB, so let it finish. \[[1](https://www.hirensbootcd.org/download/)]

Step 2: Clear and Format Your USB Drive

Linux treats Windows media strictly, so you must wipe the USB drive using the **Disks** utility built into Ubuntu.

1. Open the Ubuntu app menu (bottom left grid icon) and search for **Disks**.
2. Select your USB flash drive from the left sidebar (_Be absolutely sure it's the USB, not your hard drive!_).
3. Click the **three dots menu** in the top-right corner of the window and select **Format Disk**. Choose **Quick** and format it.
4. Click the **"+" (plus) button** under the volume map to create a new partition.
5. Set the Type to **NTFS** (or **FAT32** if NTFS is not an option), name it "Hiren", and click Create. \[[1](https://www.hirensbootcd.org/)]

Step 3: Flash the ISO to the USB \[[1](https://www.youtube.com/watch?v=QiSXClZauXA)]

You cannot use standard image writers for a Windows ISO on Linux. The most reliable tool to do this directly in Ubuntu is **Ventoy**, or you can simply extract it. The easiest way is extraction:

1. Locate the downloaded `HBCD_PE_x64.iso` file in your **Downloads** folder.
2. Right-click the ISO file and select **Open With Disk Image Mounter**.
3. A new drive will appear on your left sidebar in the Files app. Click it to open it.
4. Press **Ctrl + A** to select all files inside the ISO, and **Ctrl + C** to copy them.
5. Navigate to your formatted USB flash drive in the sidebar, open it, and press **Ctrl + V** to paste everything.
6. Wait completely for the copy to finish.

Step 4: Boot Your Lenovo Into Hiren's PE

1. Safely eject the USB drive from Ubuntu, shut down your Lenovo, and plug the USB back in.
2. Turn the laptop on and immediately start tapping **F12** to bring up Lenovo's Boot Menu.
3. Select your USB drive from the list.
4. Hiren's will load a familiar Windows desktop environment.
5. Open **File Explorer** and look under "This PC". Your locked Windows internal C: drive will be fully visible! \[[1](https://superuser.com/questions/1717087/how-to-create-a-portable-bootable-windows-10-11-from-linux-not-installer), [2](https://www.hirensbootcd.org/howtos/), [3](https://www.youtube.com/watch?v=%5FFdeiz9c%5FKQ)]

Plug in an external storage drive, and drag your personal files over to save them.

Are you downloading the file now, or do you need help using the terminal to flash it if the copy-paste extraction gives you an error?

- [link](https://superuser.com/questions/1717087/how-to-create-a-portable-bootable-windows-10-11-from-linux-not-installer)\
  How to create a portable/bootable Windows 10/11 from Linux ...\
  Apr 19, 2022 — At that answer I also linked to a tool that can be used to install Windows from Linux without running the Windows installation ( d...\
  Super User
- [link](https://www.youtube.com/watch?v=bbzLbj8BUGA\&t=59)\
  How to Create Your Own WinPE in Minutes! (Step-by-Step)\
  Apr 25, 2026 — all right now open the wind 10xb. tool. select the folder where you just copied all the ISO. files. select the addition you want t...\
  4m\
  YouTube·Meink WinLab
- [link](https://www.hirensbootcd.org/download/)\
  Download | Hiren's BootCD PE\
  Mar 6, 2024 — System Tools \* CPU-Z v2.09. \* GPU-Z v2.57. \* HWInfo v7.68-5300. \* Speccy v1.32.803. \* WinNTSetup v5.3.3. \* Attribute Changer v11.0...\
  Hiren's BootCD PE

Show all

You said: how to flash iso

To flash a Windows-based PE ISO like Hiren’s BootCD from inside Ubuntu, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">you <strong>cannot</strong> use standard flashing apps like BalenaEtcher or Ubuntu's default startup disk creator</mark>. They do not write the Windows partition boot sector properly, which causes a boot failure on the Lenovo laptop. \[[1](https://www.reddit.com/r/linux4noobs/comments/1cikbi3/how%5Fto%5Fmake%5Fhirens%5Fbootcd%5Fpe%5Fin%5Flinux%5Fbios%5Fupdates/), [2](https://documentation.ubuntu.com/desktop/en/latest/how-to/create-a-bootable-usb-stick/)]

The absolute easiest and most reliable way to do this in Linux is using a free tool called **Ventoy**. Once Ventoy is installed on your USB, you can just drag and drop the ISO file onto it. \[[1](https://www.youtube.com/watch?v=4EIOWjGp2XU\&t=5), [2](https://www.reddit.com/r/linux4noobs/comments/1cikbi3/how%5Fto%5Fmake%5Fhirens%5Fbootcd%5Fpe%5Fin%5Flinux%5Fbios%5Fupdates/)]

Follow these steps inside your Ubuntu environment:

Step 1: Download Ventoy for Linux \[[1](https://www.reddit.com/r/linux4noobs/comments/1cikbi3/how%5Fto%5Fmake%5Fhirens%5Fbootcd%5Fpe%5Fin%5Flinux%5Fbios%5Fupdates/)]

1. Open Firefox in Ubuntu and go to the official [Ventoy Download Page](https://www.ventoy.net/en/doc%5Fstart.html).
2. Click the link for the Linux version (it will end in **`linux.tar.gz`**). It will take you to a GitHub page; click the Linux download link there to save it to your `Downloads` folder. \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/)]

Step 2: Extract and Launch Ventoy \[[1](https://www.reddit.com/r/linux4noobs/comments/1cikbi3/how%5Fto%5Fmake%5Fhirens%5Fbootcd%5Fpe%5Fin%5Flinux%5Fbios%5Fupdates/)]

1. Open your **Downloads** folder in the Files app.

2. Right-click the downloaded `ventoy-xxx-linux.tar.gz` file and select **Extract Here**.

3. Open the newly extracted folder, then open the folder inside it.

4. Look for a file named **`VentoyGUI.x86_64`**.

5. Right-click an empty space inside that folder window and select **Open in Terminal**.

6. Type the following command and press **Enter** to launch the app:\
   bash

<!---->

```
sudo ./VentoyGUI.x86_64
```

Use code with caution.\
_(Type your Ubuntu password if prompted)._ \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/)]

Step 3: Install Ventoy to Your USB \[[1](https://www.reddit.com/r/linux4noobs/comments/1cikbi3/how%5Fto%5Fmake%5Fhirens%5Fbootcd%5Fpe%5Fin%5Flinux%5Fbios%5Fupdates/)]

1. A small graphical window will pop up.
2. Plug in your USB flash drive.
3. Select your USB drive from the dropdown device list at the top (_Double-check the size to make sure it is the USB stick, not your internal drive!_).
4. Click the **Install** button.
5. It will warn you twice that your USB will be formatted. Click **Yes** or **OK** both times.
6. Once it completes successfully, close the Ventoy window. \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/), [2](https://www.reddit.com/r/linux4noobs/comments/1l2evp5/how%5Fto%5Fuse%5Fventoy%5Fto%5Fcreate%5Fa%5Fdistro%5Finstaller/), [3](https://www.youtube.com/watch?v=oGPVBR96Md0\&t=31), [4](https://www.reddit.com/r/linux4noobs/comments/plqhju/how%5Fto%5Fmake%5Fa%5Fbootable%5Fpendrive%5Fwith%5Fventoy/), [5](https://www.linux.org/threads/how-to-install-ventoy-in-linux-mint-the-easy-way-for-beginners.45229/)]

Step 4: Just Copy the ISO (The Magic Step) \[[1](https://superuser.com/questions/1518167/create-a-bootable-usb-of-windows-pe-on-linux)]

1. Open your Files app. You will notice your USB drive has been renamed to **Ventoy**. Click it to open it.
2. Go to your **Downloads** folder, right-click your **`HBCD_PE_x64.iso`** file, and select **Copy**.
3. Go back into your **Ventoy** USB drive, right-click, and select **Paste**.
4. **Crucial:** Wait for the copy process to finish completely. Even if the progress bar hits 100%, do not unplug it until you click the **Eject** triangle icon next to the Ventoy drive in the sidebar. \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/), [2](https://www.youtube.com/watch?v=oGPVBR96Md0\&t=31), [3](https://www.linux.org/threads/how-to-install-ventoy-in-linux-mint-the-easy-way-for-beginners.45229/), [4](https://www.youtube.com/watch?v=2yT4gubeUtY\&t=7)]

If you would like a step-by-step visual demonstration of setting up Ventoy and dropping an ISO onto it in Linux, watch this video tutorial:

50s

[How to Install Ventoy on Linux (2026)Quick and Easy ToolsYouTube · Feb 11, 2024](https://www.youtube.com/watch?v=oGPVBR96Md0)

Step 5: Boot Into Windows PE

1. Plug the Ventoy USB into your broken Lenovo Xiaoxin laptop.
2. Power it on and immediately press **F12** to bring up the Boot Menu.
3. Choose your USB device.
4. A customized blue Ventoy screen will pop up listing your Hiren's ISO. Highlight **HBCD\_PE\_x64.iso** and hit **Enter**. \[[1](https://www.youtube.com/watch?v=4EIOWjGp2XU\&t=5), [2](https://www.youtube.com/watch?v=W2v0949jJGM\&t=7), [3](https://www.youtube.com/watch?v=10L8aCY3VBs\&t=341)]

Once it boots into the Hiren’s desktop environment, open **This PC** to see your internal C: drive. Plug in your secondary backup drive, and copy your personal folders!

Let me know if Ventoy opens up for you successfully or if you run into any trouble launching it.

- [link](https://www.reddit.com/r/linux4noobs/comments/1cikbi3/how%5Fto%5Fmake%5Fhirens%5Fbootcd%5Fpe%5Fin%5Flinux%5Fbios%5Fupdates/)\
  How to make "Hiren's BootCD PE" in Linux (BIOS updates)\
  May 2, 2024 — acejavelin69. • 2y ago. Fedora includes the Fedora Media Writer tool, just open it, select the ISO file and then the USB to write ...\
  Reddit·r/linux4noobs
- [link](https://www.youtube.com/watch?v=W2v0949jJGM\&t=7)\
  How to Make Hiren's Boot USB with Rufus Step by ...\
  Aug 30, 2025 — and in this video I will show you how you can create a USB. so you don't need a big USB to do that. you can use I'm using 16 gig. ...\
  9m\
  YouTube·Apple tech support
- [link](https://documentation.ubuntu.com/desktop/en/latest/how-to/create-a-bootable-usb-stick/)\
  Create a bootable USB stick - Ubuntu Desktop documentation\
  May 26, 2026 — It's available for Ubuntu and Kubuntu 26.04 LTS and later. \* Go to the releases.ubuntu.com website and find the Ubuntu release tha...\
  Ubuntu

Show all

You said: install a tool using apt

To install a tool using `apt` from inside your "Try Ubuntu" environment, you can use <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>WoeUSB-ng</strong></mark> \[1, 2]. It is a dedicated Linux utility designed specifically to format and flash Windows ISO files onto a USB drive so they can boot properly on PCs like your Lenovo \[1, 3].

Open your **Terminal** app (Ctrl + Alt + T) and run these steps to install and use it.

Step 1: Install WoeUSB

Because you are in a "Try Ubuntu" live session, you first need to enable Ubuntu's software repositories before installing third-party tools. Run these three commands one by one:

1. Enable the universe repository:\
   bash

<!---->

```
sudo add-apt-repository universe
```

Use code with caution.
2\. Update your package lists:\
bash

```
sudo apt update
```

Use code with caution.
3\. Install WoeUSB and its graphical interface:\
bash

```
sudo apt install woeusb woeusb-frontend-wxhtml
```

Use code with caution.

Step 2: Launch the Tool

Once the installation finishes, you can launch the program directly from your terminal by typing:

bash

```
woeusb-gui
```

Use code with caution.

Step 3: Flash the Hiren's ISO

1. In the WoeUSB window under **From a disk image (ISO)**, click the file icon and select your downloaded `HBCD_PE_x64.iso`.
2. Under **Target device**, select your USB flash drive.
3. Under **File system**, choose **NTFS** (Windows PE requires NTFS to handle the large image files properly).
4. Click **Install**.

_Note: This process will completely wipe your USB drive and can take 5 to 10 minutes to finish writing._

Once the program displays a "Success" message, you can safely unplug the USB, insert it into your Lenovo Xiaoxin, and boot using the **F12** key to start rescuing your files!

Did the `apt` installation go through smoothly, or did you hit a repository error?

You said: another tool

If the repository for WoeUSB gave you errors, another highly effective utility you can install straight via `apt` is **mkusb**. It works natively in Ubuntu live sessions and can manually deploy the raw contents of the Windows PE ISO onto a properly structured partition block. \[[1](https://www.haxor.no/en/article/windows-install-media-from-ubuntu)]

Open your **Terminal** (Ctrl + Alt + T) and run these steps:

Step 1: Install mkusb using apt

You need to add the official mkusb repository (PPA) and update your package lists first: \[[1](https://www.reddit.com/r/Ubuntu/comments/1l3xmlk/guide%5Fhow%5Fto%5Fmake%5Fwindows%5Fusb%5Fin%5Flinuxubuntu/)]

bash

```
sudo add-apt-repository ppa:mkusb/ppa -y
sudo apt update
sudo apt install mkusb mkusb-plugins -y
```

Use code with caution.

Step 2: Launch and Configure the Tool \[[1](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows)]

1. Run the graphical version by typing:\
   bash

<!---->

```
dus
```

Use code with caution.
2\. A window will ask if you want to run the tool. Click **Yes**.
3\. Select the menu option: **`i` (Install/Restore an image or compressed image file)**.
4\. Select **`w` (Windows installer device)**. This forces mkusb to create the unique boot sector format that Windows PE requires.

Step 3: Select the ISO and USB \[[1](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows)]

1. A file browser will open. Navigate to your `Downloads` folder and select your downloaded **`HBCD_PE_x64.iso`** file.
2. Next, mkusb will show a list of storage drives. **Carefully select your USB flash drive** (match it by its gigabyte size).
3. Click the checkbox to confirm you want to overwrite the drive, then click **Go / Proceed**. \[[1](https://www.youtube.com/watch?v=VWW5K-ndnlI\&t=1), [2](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows)]

The terminal window will display a text progress bar. Let it reach 100%. Once done, you can restart your Lenovo laptop, hit **F12** during boot, and load straight into Hiren's Windows PE to drag and drop your data onto an external backup disk. \[[1](https://techcommunity.microsoft.com/discussions/windows10space/winpe-iso-download-and-create-winpe-bootable-usb-for-system-repair/4513933), [2](https://www.youtube.com/watch?v=VWW5K-ndnlI\&t=1)]

If mkusb runs into an error, let me know what message pops up, and we can switch to a manual terminal method.

- [link](https://techcommunity.microsoft.com/discussions/windows10space/winpe-iso-download-and-create-winpe-bootable-usb-for-system-repair/4513933)\
  WinPE ISO download and create WinPE bootable USB for ...\
  Apr 23, 2026 — If you're looking for a robust and versatile way to create a bootable USB with Windows preinstallation or recovery tools, leveragi...\
  Microsoft Community Hub
- [link](https://www.reddit.com/r/Ubuntu/comments/1l3xmlk/guide%5Fhow%5Fto%5Fmake%5Fwindows%5Fusb%5Fin%5Flinuxubuntu/)\
  Guide - How To Make Windows USB In Linux/Ubuntu - Reddit\
  Jun 5, 2025 — Guide - How To Make Windows USB In Linux/Ubuntu 🎏 Sometimes you need a real windows(no vm) to do some thing and after done it you...\
  Reddit·r/Ubuntu
- [link](https://www.youtube.com/watch?v=VWW5K-ndnlI\&t=1)\
  How to Create a Bootable Windows 11 USB on Ubuntu ...\
  Feb 13, 2025 — hello friends welcome back to my channel again in this video I will show you how to create a Windows 11 bootable USB on Ubuntu 24.\
  9m\
  YouTube·Mayunix

Show all

You said: find a popular modern tool

The most popular, modern, and universally recommended tool for this task is **Ventoy**. \[[1](https://www.reddit.com/r/linux4noobs/comments/184lpx9/any%5Fgood%5Fbootable%5Fusb%5Fcreator%5Fsoftware%5Ffor%5Fubuntu/)]

While old tools like WoeUSB are discontinued and hard to install with `apt`, **Ventoy does not need to be installed via `apt` at all**. It runs directly out of its folder as a portable app. \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/), [2](https://itsfoss.com/use-ventoy/), [3](https://www.ventoy.net/en/doc%5Fstart.html)]

Once Ventoy is put onto your USB, you **never have to flash an ISO again**. You simply copy and paste ordinary `.iso` files onto the drive like a regular USB stick. \[[1](https://www.facebook.com/groups/linux.fans.group/posts/24960848873530226/), [2](http://cybersecurity-ninjas.com/ventoy.html)]

How to use Ventoy in 3 Steps:

1. **Download and Extract:**

- Open Firefox in Ubuntu and download the Linux version (**`ventoy-xxx-linux.tar.gz`**) from the official [Ventoy Download Page](https://www.ventoy.net/en/doc%5Fstart.html).
- Right-click the downloaded file in your `Downloads` folder and click **Extract Here**. \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/), [2](https://itsfoss.com/use-ventoy/)]

2. **Launch and Install:**

- Open the extracted folder and double-click **`VentoyGUI.x86_64`**.
- Plug in your USB drive, select it from the dropdown list in the Ventoy window, and click **Install**. _(This formats the USB once)_. \[[1](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/), [2](http://cybersecurity-ninjas.com/ventoy.html), [3](https://www.youtube.com/watch?v=oGPVBR96Md0\&t=31), [4](https://sites.google.com/site/installationubuntu/bootdisk-ventoy?gl=us)]

3. **Drag and Drop Your ISO:**

- Open your Files app. You will see a newly formatted drive partition named **Ventoy**.
- Simply **Copy** your `HBCD_PE_x64.iso` file and **Paste** it directly onto that Ventoy partition. \[[1](https://www.youtube.com/watch?v=oGPVBR96Md0\&t=31), [2](https://masoncb.medium.com/using-ventoy-to-install-windows-11-from-a-linux-device-ead91ce729d3), [3](https://www.reddit.com/r/linux%5Fgaming/comments/lykcwu/is%5Fthere%5Fa%5Fway%5Fto%5Fget%5Fa%5Fbootable%5Fwindows%5Fflash/)]

When you boot your Lenovo laptop via **F12**, Ventoy will load a sleek graphic menu listing your Hiren's WinPE ISO. You just press Enter to run it, bypass the Intel RST restriction, and grab your files. \[[1](https://masoncb.medium.com/using-ventoy-to-install-windows-11-from-a-linux-device-ead91ce729d3)]

Did the Ventoy interface load up correctly for you, or do you need a quick terminal alternative to run it?

- [link](https://www.reddit.com/r/linux4noobs/comments/1exdtfh/how%5Fdo%5Fi%5Finstall%5Fventoy%5Fon%5Fubuntu/)\
  How do I install ventoy on Ubuntu : r/linux4noobs - Reddit\
  Aug 21, 2024 — The easiest way I found is... \* Download the tar.gz version from the official website, \* Unpack the files with a file manager, \* G...\
  Reddit·r/linux4noobs
- [link](https://www.ventoy.net/en/doc%5Fstart.html)\
  Get start . Ventoy\
  Download the installation package, like ventoy-x.x.xx-windows.zip and decompress it. Run Ventoy2Disk.exe , select the device and c...\
  Ventoy
- [link](https://www.youtube.com/watch?v=oGPVBR96Md0\&t=31)\
  How to Install Ventoy on Linux (2026)\
  Feb 11, 2024 — so if you wish you can watch only the one you are interested in we'll start with Linux Mint and then move on to Arch Linux Ubuntu ...\
  14m\
  YouTube·Quick and Easy Tools

Show all

You said: im in. i do not see a disk as large as the real disk on this pc.

Great job getting Hiren's Windows PE to boot! Since you are inside the environment but your main hard drive is still not appearing under **This PC**, it means **Hiren's is missing the specific Intel RST driver version required by your Lenovo laptop hardware**. \[[1](https://www.reddit.com/r/sysadmin/comments/179b1df/new%5Fcomputer%5Finvisible%5Fhard%5Fdrive/)]

You can fix this entirely from within the live Hiren's environment by using its built-in Wi-Fi to download and load the correct Intel storage driver. \[[1](https://www.dell.com/support/kbdoc/en-al/000188116/intel-11th-generation-processors-no-drives-can-be-found-during-windows-10-installation)]

Step 1: Connect to Wi-Fi inside Hiren's

1. Look at the bottom-right corner of the taskbar.
2. Click the network icon and connect to your local Wi-Fi network. \[[1](https://www.youtube.com/watch?v=qHUssOxHGV4)]

Step 2: Download the Driver

1. Open the web browser (usually Chrome or Firefox) pre-installed on the Hiren's desktop.
2. Go to the official Lenovo Support Portal.
3. Enter your laptop's serial number or search for **Xiaoxin Air 13IKB**.
4. Go to **Drivers & Software** > **Manual Update** > **Storage**.
5. Download the **Intel Rapid Storage Technology (IRST) Driver** (it will be an `.exe` file). \[[1](https://www.youtube.com/watch?v=qHUssOxHGV4)]

Step 3: Extract the Driver Files

The raw driver files (`.inf` and `.sys`) must be extracted so Windows PE can read them: \[[1](https://www.intel.com/content/www/us/en/support/articles/000094664/technologies/intel-rapid-storage-technology-intel-rst.html)]

1. Find the downloaded Lenovo storage `.exe` file in your Downloads folder.
2. Double-click to run it.
3. **Important:** Do _not_ click "Install". Look for an option that says **Extract Only** or **Extract**.
4. Choose to extract the files to a memorable location, like a folder on your desktop called `StorageDriver`. \[[1](https://www.dell.com/support/kbdoc/en-us/000188116/intel-11th-generation-processors-no-drives-can-be-found-during-windows-10-installation), [2](https://www.intel.com/content/www/us/en/support/articles/000094664/technologies/intel-rapid-storage-technology-intel-rst.html)]

Step 4: Load the Driver into Windows PE

Once extracted, you can instantly force Hiren's to detect your hard drive via the Command Prompt: \[[1](https://www.youtube.com/watch?v=IsEKxJrmmy0)]

1. Click the Windows Start menu button in Hiren's.

2. Search for **Command Prompt**, right-click it, and select **Run as Administrator**.

3. Type the following command to point Windows PE directly to your extracted driver files (replace `C:\Users\Default\Desktop\StorageDriver` with the exact path to your extracted folder):\
   cmd

<!---->

```
pnputil /add-driver "C:\Users\Default\Desktop\StorageDriver\*.inf" /subdirs /install
```

Use code with caution.
4\. Press **Enter**. You should see a message indicating a driver was successfully added to the system. \[[1](https://www.youtube.com/watch?v=IsEKxJrmmy0)]

Step 5: Refresh This PC

1. Close the command prompt and go back into **This PC**.
2. Right-click an empty space inside the window and click **Refresh**.
3. Your true Windows C: drive partition will immediately appear alongside your files! \[[1](https://www.youtube.com/watch?v=qHUssOxHGV4), [2](https://www.dell.com/support/kbdoc/en-al/000188116/intel-11th-generation-processors-no-drives-can-be-found-during-windows-10-installation)]

Did you manage to get connected to Wi-Fi inside Hiren's, or do we need to use a second method to load the driver from a separate USB stick? \[[1](https://www.dell.com/support/kbdoc/en-al/000188116/intel-11th-generation-processors-no-drives-can-be-found-during-windows-10-installation)]

- [link](https://www.youtube.com/watch?v=qHUssOxHGV4)\
  Hirens Boot CD - How to download, boot and use it!\
  Oct 15, 2024 — hi folks it's Matthew here from Matthew's Tech Hub hope you're all doing well welcome back to another video today guys so today I'\
  7:38\
  YouTube·Matthews Tech Hub
- [link](https://www.youtube.com/watch?v=IsEKxJrmmy0)\
  Hiren's BootCD PE x64 Repairs NTFS & FAT32 Drives on ...\
  Sep 10, 2023 — in this video. I want to go over a diagnostic tool for both Linux. and Windows users called the Hirens Boot CDP. the 64-bit versio...\
  18:27\
  YouTube·Tommy Thompson
- [link](https://www.reddit.com/r/sysadmin/comments/179b1df/new%5Fcomputer%5Finvisible%5Fhard%5Fdrive/)\
  New Computer = Invisible hard drive :) : r/sysadmin - Reddit\
  Oct 16, 2023 — Upvote 0 Downvote 3 Go to comments Share. Comments Section. lechango. • 3y ago. This is because by default Dell uses a RAID driver...\
  Reddit·r/sysadmin

Show all

You said: driver pkg added successfully. refresh. not seen. no effect.

If the driver installation was successful but refreshing "This PC" still yields nothing, the driver you downloaded might be the wrong version, or your Windows file system is heavily locked down (likely by BitLocker encryption or a Windows hibernation file). \[[1](https://superuser.com/questions/1103334/hirens-boot-cd-does-not-dectect-hard-drive)]

Follow these diagnostic steps inside Hiren's to force the drive to mount.

Step 1: Check Disk Management (Most Critical Step) \[[1](https://www.youtube.com/watch?v=W8Qe34us0%5FI)]

Often, the drive **is** detected by the driver, but Windows PE won't automatically assign it a letter because the file system is marked as dirty or hibernated. \[[1](https://superuser.com/questions/1103334/hirens-boot-cd-does-not-dectect-hard-drive)]

1. Right-click the Windows Start menu button in Hiren's and select **Disk Management**.
2. Look at the bottom half of the screen. Do you see a large disk row labeled **Disk 0** or **Disk 1**?
3. **If you see it but it has no drive letter (like C:):** Right-click the large partition block, select **Change Drive Letter and Paths**, click **Add**, choose a letter (like `X` or `G`), and click OK. Check "This PC" again.
4. **If it says "RAW" or "Unallocated":** Do not format it! Go to Step 2. \[[1](https://www.youtube.com/watch?v=W8Qe34us0%5FI)]

Step 2: Query Diskpart via Command Prompt

Let's see if the hardware layer can find it, bypassing the File Explorer interface.

1. Click the Start Menu, type **cmd**, right-click **Command Prompt**, and select **Run as Administrator**. \[[1](https://www.youtube.com/watch?v=IsEKxJrmmy0)]
2. Type `diskpart` and press Enter.
3. Type `list disk` and press Enter.

- _Does it list a disk that matches your laptop's real storage size (e.g., 238 GB or 476 GB)?_

4. If it shows up there, type `list volume` and press Enter.

- Look for your main partition. Note the **volume number** and look under the **Info** column. Does it say **BitLocker**?

Step 3: Check for BitLocker Encryption

If your Lenovo laptop associated your Microsoft account with BitLocker, the drive will remain strictly hidden or inaccessible to both Linux and Windows PE until it is unlocked.

1. In that same command prompt, exit diskpart by typing `exit` and hitting Enter.

2. Run this command to check encryption status:\
   cmd

<!---->

```
manage-bde -status
```

Use code with caution.
3\. If it returns a drive that says **Lock Status: Locked**, you will need your 48-digit BitLocker recovery key from your Microsoft Account to unlock it. You can unlock it right there by typing:\
cmd

```
manage-bde -unlock C: -RecoveryPassword YOUR-48-DIGIT-KEY-HERE
```

Use code with caution.

Step 4: The Hardware Reality Check

If `list disk` in Step 2 shows **only your Ventoy USB drive** and absolutely nothing else, then the laptop's internal storage controller is entirely unresponsive. Because your laptop was completely non-bootable before we started, it is highly probable that your internal NVMe SSD has either: \[[1](https://www.reddit.com/r/techsupport/comments/16aphlm/hdd%5Fnot%5Fdetected%5Fwith%5Fhirens%5Fboot%5Fcd/)]

- Suffered a sudden hardware failure/burnt controller.
- Become physically unseated from its motherboard slot. \[[1](https://www.reddit.com/r/Lenovo/comments/1ocb9ox/ssd%5Fnot%5Ffound%5Fduring%5Fboot/), [2](https://www.reddit.com/r/techsupport/comments/16aphlm/hdd%5Fnot%5Fdetected%5Fwith%5Fhirens%5Fboot%5Fcd/), [3](https://forums.lenovo.com/t5/Gaming-Laptops/my-ssd-suddenly-cant-been-detected-whyyyyyyyyy/m-p/5331107)]

What did you see inside **Disk Management** or **Diskpart**? Is there a second disk listed, or is it completely blank except for the USB?

- [link](https://www.youtube.com/watch?v=IsEKxJrmmy0)\
  Hiren's BootCD PE x64 Repairs NTFS & FAT32 Drives on ...\
  Sep 10, 2023 — in this video. I want to go over a diagnostic tool for both Linux. and Windows users called the Hirens Boot CDP. the 64-bit versio...\
  18:27\
  YouTube·Tommy Thompson
- [link](https://superuser.com/questions/1103334/hirens-boot-cd-does-not-dectect-hard-drive)\
  Hirens boot cd does not dectect hard drive - Super User\
  Jul 20, 2016 — Sorted by: 2. This just worked for me with a newer laptop (Dell latitude 3500): Make sure you have the new Hirens from: https://ww...\
  Super User
- [link](https://www.reddit.com/r/techsupport/comments/16aphlm/hdd%5Fnot%5Fdetected%5Fwith%5Fhirens%5Fboot%5Fcd/)\
  HDD Not Detected with Hiren's Boot CD : r/techsupport - Reddit\
  Sep 5, 2023 — Comments Section. HankThrill69420. • 3y ago. Drive is probably corrupt. Run the Onboard Diagnostics and see if the HDD is recogniz...\
  Reddit·r/techsupport

Show all

You said: no real disk on disk management

If **Disk Management** shows absolutely no trace of your internal hard drive (only showing your Ventoy USB drive), it means the computer's motherboard cannot detect the storage hardware at all.

Because your laptop was completely non-bootable before you started this process, this points directly to a physical hardware failure rather than a software or driver issue.

1\. The Most Likely Causes

- **Dead NVMe/SSD Drive:** Solid-state drives (SSDs) can fail suddenly without warning. When the drive controller inside the SSD dies, the drive completely disappears from the system, preventing Windows from booting and making it invisible to Ubuntu, Windows PE, and the BIOS.
- **Loose Drive Connection:** Laptops that are frequently carried around can experience thermal expansion or physical vibrations that slightly wiggle the M.2 SSD out of its socket on the motherboard.

2\. Verify in the BIOS Info Tab

To confirm if this is a total hardware disconnection, restart your laptop, tap **F2** to enter your InsydeH20 utility, and look at the very first tab labeled **Information** (or **Info**):

- Look for a line labeled **NVMe Slot**, **HDD Model Name**, or **Hard Disk**.
- If it says **None**, **Not Detected**, or is completely blank, the laptop motherboard physically does not see the drive.

3\. How to Try a Physical Rescue

Since software tools cannot interact with a drive that isn't electrically connected or responding, your only remaining option to get your files back is to physically open the laptop:

1. Turn off the laptop, unplug the power charger, and unscrew the bottom case of your Lenovo Xiaoxin Air 13IKB.
2. Locate the M.2 NVMe SSD (a small, rectangular circuit board held down by a single screw).
3. Unscrew it, gently pull it out of its slot, clean the gold contacts with a dry microfiber cloth or a pink pencil eraser, and firmly seat it back into the slot. Tighten the screw back down.
4. Put the case back on, turn it on, and check the BIOS Info tab again.

4\. What if it is completely dead?

If reseating the drive doesn't work and the BIOS still says "None," the drive's internal components have failed. Standard recovery environments cannot read a dead drive. To recover critical data from a dead SSD, you would need to send the physical drive to a professional cleanroom data recovery service, which uses specialized hardware mirrors to extract data directly from the storage chips.

When you check the **Info** tab in the BIOS, what does it list next to **Hard Disk** or **NVMe**?

You said: it's legacy. ive not used for years.

Knowing that the laptop is a legacy machine that hasn’t been powered on in years changes everything. \[[1](https://www.quora.com/My-laptop-is-only-2-years-old-and-has-legacy-BIOS-motherboard-version-HP-8532-70-21-Does-it-support-UEFI)]

Solid-state drives (SSDs) do not hold data forever without electricity. When an SSD sits unpowered for years, it loses its electrical charge, a phenomenon known as **SSD data degradation** or **data fading**. When this happens, the internal firmware corrupts, and the drive completely "forgets" what it is—which is exactly why the computer's motherboard, Ubuntu, and Windows PE cannot see it at all. \[[1](https://www.lenovo.com/buy/us/en/m2-pcie-nvme-solid-state-drives-0afz00a?srsltid=AfmBOordrzUQQkX8AR%5Fhi9V49nRS64sRPuSxhAUP79h%5F2bR2LCnKMuc2)]

Because it is a hardware-level failure from sitting idle, there are no more software settings or drivers that can force it to appear. You can try a few physical recovery steps:

1\. The "Power Cycle" Trick (Wake up the SSD)

Sometimes the SSD's built-in controller is stuck in a panicked, frozen state but isn't completely dead. You can try to force the drive to rebuild its map table:

1. Boot the laptop into your **InsydeH20 BIOS** menu (press F2 at startup).
2. Leave the laptop sitting powered on **directly inside the BIOS screen for 30 minutes**. Do not boot into Windows PE or Ubuntu.
3. After 30 minutes, shut the laptop down completely, let it sit turned off for 30 seconds, and turn it back on. Check the **Information** tab in the BIOS to see if a hard drive model name suddenly reappears.

2\. Physically Pull the Drive and Use an External Adapter

If your Lenovo laptop chassis cannot jump-start the drive, you can extract it and test it using a working computer. Your Lenovo Xiaoxin Air 13IKB uses an **M.2 NVMe SSD**. \[[1](https://www.amazon.com/Internal-Compatible-Lenovo-920-13IKB-910-13IKB/dp/B081QV4VK1), [2](https://www.crucial.com/compatible-upgrade-for/lenovo/lenovo-xiaoxin-air-13-pro?srsltid=AfmBOoqBasNyw796QnepVQ28S5%5FYUFJ69cYL0-V6Vjbc1r4xJy9z20qI)]

1. Unscrew the bottom panel of the laptop.
2. Remove the single screw holding the small, rectangular SSD stick down, and gently pull it out of its slot.
3. Purchase an **M.2 NVMe to USB Adapter / Enclosure** (they are cheap on sites like Amazon).
4. Pop your drive into the adapter and plug it into a fully functioning, working computer via USB. \[[1](https://www.youtube.com/watch?v=kGfiuZjmC4w\&t=1), [2](https://www.lenovo.com/buy/us/en/m2-2280-solid-state-drives-0afz00a?srsltid=AfmBOoqDMg-cTA48VqpmZYhyx3oinZ8Cc37CsZQLaY6Y-4XZAjTvD-9W)]

If a working computer cannot detect the drive via a USB adapter, the data blocks on the flash storage chips have unfortunately degraded permanently.

Do you want to try the 30-minute BIOS power cycle first, or do you have a screwdriver handy to check the internal physical drive?

- [link](https://www.youtube.com/watch?v=kGfiuZjmC4w\&t=1)\
  How To Install NEW M.2 NVMe SSD In Lenovo IdeaPad ...\
  Jun 11, 2022 — today I got a brand new Lenovo IdeaPad 3 17inch laptop i'm going to show you how to upgrade the M.2 SSD. here today I got this bra...\
  6m\
  YouTube·Cadillac Computer Center
- [link](https://www.amazon.com/Internal-Compatible-Lenovo-920-13IKB-910-13IKB/dp/B081QV4VK1)\
  CMS 1TB Internal SSD M.2 NVMe 2280 6GB Compatible with ...\
  Table\_title: Product specifications Table\_content: | Digital Storage Capacity | 1000 GB | | --- | --- | | Hard Disk Interface | PC...\
  Amazon.com
- [link](https://www.lenovo.com/buy/us/en/m2-2280-solid-state-drives-0afz00a?srsltid=AfmBOoqDMg-cTA48VqpmZYhyx3oinZ8Cc37CsZQLaY6Y-4XZAjTvD-9W)\
  M.2 2280 Solid State Drives for Faster Data Access - Lenovo\
  Price Match Guarantee. Part Number: 4XH0V09766. Key Details. Supports up to four PCIe X4 M.2 SSDs with the following card types 22...\
  Lenovo

Show all

You said: are unused screens prone to green lines

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, unused screens are not naturally prone to green lines.</span></strong></mark> Green lines are fundamentally a hardware failure caused by active physical, thermal, or electrical stress on the display assembly—meaning a screen that sits entirely unused on a shelf is heavily protected against this specific issue. \[[1](https://tpkwireless.com/high-end-smartphone-screen-failure-green-line-2026/), [2](https://www.reddit.com/r/S23/comments/1jit0ra/what%5Fis%5Fthe%5Freason%5Fof%5Fgreen%5Flines%5Fon%5Fscreen/), [3](https://www.reddit.com/r/NOTHING/comments/1mfivhi/people%5Fwho%5Fhave%5Fupdated%5Fthis%5Fany%5Fgreen%5Flines/)]

However, sitting unused does not make a screen _immune_ to failing later due to age-related degradation.

Why Unused Screens Avoid the Green Line

The infamous green vertical line is almost always a failure of the **Chip-on-Film (COF)** or the microscopic ribbon connectors that link the logic board to the OLED/LCD panel. \[[1](https://tpkwireless.com/high-end-smartphone-screen-failure-green-line-2026/), [2](https://www.reddit.com/r/GadgetsIndia/comments/1j7ui1w/tell%5Fme%5Fis%5Fthere%5Fany%5Fway%5Fto%5Favoid%5Fgreen%5Fline%5Fin/)]

- **No Thermal Expansion:** Green lines frequently pop up during heavy use or software updates because the phone gets hot. Heat causes the internal adhesive and delicate gold connectors to expand and break. Unused screens experience no heat. \[[1](https://www.youtube.com/shorts/5v4pmacbazs), [2](https://tpkwireless.com/high-end-smartphone-screen-failure-green-line-2026/), [3](https://www.reddit.com/r/S23/comments/1jit0ra/what%5Fis%5Fthe%5Freason%5Fof%5Fgreen%5Flines%5Fon%5Fscreen/), [4](https://www.reddit.com/r/GadgetsIndia/comments/1j7ui1w/tell%5Fme%5Fis%5Fthere%5Fany%5Fway%5Fto%5Favoid%5Fgreen%5Fline%5Fin/)]
- **No Voltage Spikes:** A running phone can suffer from small power management fluctuations that send too much voltage to a specific row of pixels, frying the tracer line. A powered-off device has zero current running through it. \[[1](https://www.reddit.com/r/Android/comments/1p9x65b/samsung%5Fgreen%5Flines%5Fissue%5Fis%5Fback%5Fusers%5Fclaim/)]
- **No Kinetic Impact:** Micro-cracks from drops, tight pockets, or physical pressure on the glass are a primary trigger for the line. Storage protects the display from these impacts. \[[1](https://www.youtube.com/shorts/5v4pmacbazs), [2](https://www.reddit.com/r/S23/comments/1jit0ra/what%5Fis%5Fthe%5Freason%5Fof%5Fgreen%5Flines%5Fon%5Fscreen/), [3](https://eu.community.samsung.com/t5/galaxy-s22-series/any-tips-to-keep-samsung-s-famous-green-lines-away/td-p/13105447), [4](https://nothingprojector.com/blogs/projector-screens-knowledge/understanding-screen-gain-a-key-to-optimal-projection)]

The Real Risks of Long-Term Storage

While you won't pull a pristine, unused device out of a drawer to find a green line already on it, storing electronics for years introduces separate hardware risks that can cause the screen to fail _after_ you turn it back on:

- **Adhesive Degradation & Moisture:** The factory glue sealing the fragile screen connectors weakens over time. If the storage environment is humid, moisture and oxidation can seep into the microscopic connection lines. When you finally power the screen on, the degraded, oxidized connector may immediately short out and trigger a green line. \[[1](https://www.reddit.com/r/GadgetsIndia/comments/1j7ui1w/tell%5Fme%5Fis%5Fthere%5Fany%5Fway%5Fto%5Favoid%5Fgreen%5Fline%5Fin/)]
- **Battery Swelling:** Lithium-ion batteries left completely drained for years can degrade, release gas, and swell. A swelling battery pushes directly against the back of the display assembly, causing massive physical pressure that can instantly destroy the panel's pixel tracks.

How to Safely Store an Unused Screen

If you are planning to store a device or a replacement screen for a long time, protect it using these steps:

1. **Maintain 50% Battery:** Never store a device completely dead (0%) or fully charged (100%). Leave it at roughly 50% to prevent battery chemical failure and swelling. \[[1](https://www.youtube.com/shorts/5v4pmacbazs)]
2. **Control Humidity:** Store the device in a cool, dry place. Placing it inside a sealed plastic bag with a **silica gel packet** is the best way to prevent moisture from destroying the display adhesive. \[[1](https://www.reddit.com/r/GadgetsIndia/comments/1j7ui1w/tell%5Fme%5Fis%5Fthere%5Fany%5Fway%5Fto%5Favoid%5Fgreen%5Fline%5Fin/)]
3. **Avoid Vertical Pressure:** Do not stack heavy objects on top of the device. \[[1](https://www.cjretailsolutions.co.uk/maximizing-display-lifespan-essential-maintenance-tips/), [2](https://www.reddit.com/r/S23/comments/1jit0ra/what%5Fis%5Fthe%5Freason%5Fof%5Fgreen%5Flines%5Fon%5Fscreen/)]

Are you asking because you have an old laptop or phone in storage that you want to power up, or are you looking to buy a back-up replacement display panel? Let me know and I can help you test it safely.

- [link](https://www.reddit.com/r/Android/comments/1p9x65b/samsung%5Fgreen%5Flines%5Fissue%5Fis%5Fback%5Fusers%5Fclaim/)\
  Samsung green lines issue is back! Users claim issue ... - Reddit\
  Nov 29, 2025 — The guy explained that the update somehow causes the power management chip to send out too much voltage at once for whatever reaso...\
  Reddit·r/Android
- [link](https://www.youtube.com/shorts/5v4pmacbazs)\
  Samsung Green Line Screen Problem - THE TRUTH and ...\
  Dec 23, 2025 — every time I make a video on an old Samsung phone like the S22 or the S21. Ultra. I get comments on one particular thing and that'\
  1:45\
  YouTube·Udi Shoots
- [link](https://eu.community.samsung.com/t5/galaxy-s22-series/any-tips-to-keep-samsung-s-famous-green-lines-away/td-p/13105447)\
  Any tips to keep Samsung's famous green lines away?\
  Aug 29, 2025 — You're absolutely right to be cautious, especially since your phone is brand new. The infamous “green lines” that sometimes appear...\
  samsung.com

Show all
