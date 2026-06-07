fix safari can't open page on legacy MacBook

June 3, 2026

If Safari cannot open pages on your legacy MacBook, the root cause is almost always <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>outdated root security certificates</strong> or an <strong>outdated browser version</strong> that cannot handle modern web encryptions</mark> (\\(HTTPS\\)). \[[1](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/), [2](https://www.allianceinteractive.com/blog/how-to-fix-safari-cant-establish-a-secure-connection-to-the-server-error/)]

### 1. Update Your Root Certificates \[[1](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/)]

Older macOS versions (like High Sierra, Mojave, or Catalina) use expired security certificates, forcing Safari to block connections. \[[1](https://mackeeper.com/blog/how-to-fix-common-macos-high-sierra-problems/), [2](https://setapp.com/how-to/safari-cant-establish-secure-connection), [3](https://www.reddit.com/r/MacOS/comments/1ng4eo5/cant%5Fget%5Fold%5Fmac%5Fto%5Fwork%5Fwell%5Fon%5Fwebsites/), [4](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/), [5](https://www.allianceinteractive.com/blog/how-to-fix-safari-cant-establish-a-secure-connection-to-the-server-error/)]

1. Open **Keychain Access** using Spotlight search (`Command + Space`).
2. Search for **ISRG Root X1** in the top right corner.
3. If it is missing or marked with a red "X", you must manually download the valid active certificate.
4. Open another device, download the **Active ISRG Root X1** certificate (`.der` or `.pem` extension) from the official Let's Encrypt Certificate Authority, and transfer it via USB drive.
5. Drag the file into Keychain Access under **System**, double-click it, expand **Trust**, and change the setting to **Always Trust**. \[[1](https://runcloud.io/blog/safari-cant-establish-a-secure-connection), [2](https://www.allianceinteractive.com/blog/how-to-fix-safari-cant-establish-a-secure-connection-to-the-server-error/)]

### 2. Switch to a Modern Browser \[[1](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/)]

Legacy versions of Safari cannot be updated independently of macOS. If your Mac is stuck on an old operating system, Safari will remain permanently outdated and fail to open modern websites. \[[1](https://support.apple.com/en-sa/102564), [2](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/), [3](https://www.allianceinteractive.com/blog/how-to-fix-safari-cant-establish-a-secure-connection-to-the-server-error/)]

- **Alternative Browsers**: Download a browser that manages its own security certificates independent of macOS.
- **Compatibility**: While current versions of Chrome and Firefox require newer operating systems, Chromium Legacy or the OpenCore Legacy Patcher community can breathe new life into older hardware by allowing you to install modern, supported web tools. \[[1](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/)]

### 3. Synchronize Date and Time Settings \[[1](https://elementor.com/blog/safari-cant-establish-a-secure-connection/)]

Secured websites will reject your connection immediately if your system clock differs from the actual time by even a few minutes. \[[1](https://www.youtube.com/watch?v=swPCG%5FkDvVw), [2](https://www.allianceinteractive.com/blog/how-to-fix-safari-cant-establish-a-secure-connection-to-the-server-error/)]

1. Click the **Apple Menu** and open **System Preferences**.
2. Click **Date & Time**.
3. Click the padlock icon in the bottom corner to make changes.
4. Check the box for **Set date and time automatically**. \[[1](https://www.youtube.com/watch?v=swPCG%5FkDvVw)]

### 4. Clear Safari Website Data & Cache \[[1](https://shoulder.co.il/safari-not-working-on-mac-fix-safari-can-t-open-the-page-loading-issues/)]

Corrupted caches or broken cookies can cause server connection loops on legacy browsers. \[[1](https://shoulder.co.il/safari-not-working-on-mac-fix-safari-can-t-open-the-page-loading-issues/), [2](https://www.manageengine.com/mobile-device-management/kb/safari-couldnt-open-the-page-because-the-server-stopped-responding.html)]

1. Open Safari, click **Safari** in the top menu bar, and choose **Clear History**.
2. Select **all history** and click the confirm button.
3. Navigate back to the Safari menu, choose **Preferences** (or **Settings**), and click the **Advanced** tab.
4. Check the box at the bottom for **Show Develop menu in menu bar**.
5. Click **Develop** in the main menu bar at the top of your screen and select **Empty Caches**. \[[1](https://support.apple.com/en-vn/102564), [2](https://www.youtube.com/watch?v=49cdXOx-2Hw), [3](https://support.apple.com/en-au/102564), [4](https://sslinsights.com/fix-safari-cant-establish-a-secure-connection-error/), [5](https://macpaw.com/how-to/fix-slow-safari)]

To provide the exact files or steps required, could you share your **macOS version** (e.g., High Sierra 10.13, Catalina 10.15) and your **MacBook model year**?

- [link](https://www.reddit.com/r/applehelp/comments/18tbv55/old%5Fmac%5Fwont%5Fload%5Fsafari%5Fpages/)\
  Old Mac won't load safari pages : r/applehelp - Reddit\
  Restart holding Option-Command-R, so as to erase the internal storage device and install a fresh (non-upgraded) copy of macOS Cata...\
  Reddit
- [link](https://www.youtube.com/watch?v=swPCG%5FkDvVw)\
  How to Fix Safari Cannot Open The Page on MacBook ...\
  This video provides guidance on how to resolve the issue of Safari not being able to open pages on a MacBook. The initial step inv...\
  1:59\
  YouTube·1Click Guides
- [link](https://support.apple.com/en-sa/102564)\
  If Safari doesn't work as expected on Mac - Apple Support (SA)\
  Install software updates and restart Safari is included with macOS. If a later version of Safari is available for your device, you...\
  Apple Support

Show all

## You said: the cert is missing. I have a spare ubuntu. my cables might not be compatible. I guess I wanna use Bluetooth.

June 3, 2026

To transfer the certificate file from Ubuntu to your legacy MacBook using Bluetooth, follow these step-by-step instructions.

### 1. Download the Certificate on Ubuntu

1. Open a browser on your Ubuntu machine.
2. Go to the official Let's Encrypt page: `letsencrypt.org/certificates`
3. Locate the **Active** section.
4. Click and download the **ISRG Root X1** file in **der** format (`isrgrootx1.der`).

### 2. Turn on Bluetooth on both Machines

- **On Ubuntu**: Open **Settings**, click **Bluetooth**, and ensure the toggle is switched **ON**.
- **On Mac**: Open **System Preferences**, click **Bluetooth**, and ensure it is **ON** and status shows **Discoverable**.

### 3. Pair the Devices

1. On your Ubuntu Bluetooth settings, look for your MacBook's name under "Devices".
2. Click your MacBook's name to pair.
3. Confirm that the **PIN code** matches on both screens and click **Accept/Pair**.

### 4. Send the File via Bluetooth

1. **On Ubuntu**: Open your Files app, right-click the `isrgrootx1.der` file, and select **Send To...** (or **Send via Bluetooth**).
2. Select your paired MacBook from the list.
3. **On Mac**: A pop-up prompt will appear asking to accept the incoming file. Click **Accept**.
4. By default, the file will save directly into your Mac's **Downloads** folder.

### 5. Install and Trust the Certificate on Mac

1. Open **Keychain Access** on your Mac (`Command + Space` -> type Keychain Access).
2. Select **System** from the left sidebar (under Keychains) and **Certificates** from the category list below it.
3. Drag and drop the downloaded `isrgrootx1.der` file from your Downloads folder directly into the Keychain window.
4. Double-click the newly added **ISRG Root X1** certificate.
5. Click the small arrow next to **Trust** to expand the options.
6. Change the top dropdown box "When using this certificate" to **Always Trust**.
7. Close the window and enter your Mac administrator password to lock in the changes.
8. Restart Safari and try loading a webpage.

If the file transfer fails or the devices refuse to pair, would you like instructions on how to host a **local web server** on Ubuntu or use **Local File Sharing** over your home Wi-Fi network instead?

## You said: how to send via Bluetooth. it's paired. no send via on context menu

June 3, 2026

If the "Send via Bluetooth" option is missing from the right-click menu on Ubuntu, you can send the file using the built-in Bluetooth settings window or a terminal command.

### Method 1: Use Ubuntu Bluetooth Settings

1. Open **Settings** on Ubuntu and click **Bluetooth**.
2. Click on your paired **MacBook** from the device list.
3. Look for a **Send Files...** button or link inside that device's detail window.
4. Select the `isrgrootx1.der` file from your Downloads folder and send it.

### Method 2: Use the Terminal (Fastest Backup)

If the graphical interface does not show a send button, Ubuntu has a built-in terminal tool to force the file transfer.

1. Open the Terminal (`Ctrl + Alt + T`).
2. Install the Bluetooth utility tool by running:\
   `sudo apt install bluez-tools`
3. Find your MacBook's MAC address by running:\
   `bt-device -l`\
   _(This will list your paired devices. Look for your Mac and copy the address format like `AA:BB:CC:DD:EE:FF`)_.
4. Send the file by running this command (replace `AA:BB:CC:DD:EE:FF` with your Mac's actual address):\
   `bt-obex -p AA:BB:CC:DD:EE:FF ~/Downloads/isrgrootx1.der`
5. Look at your MacBook screen and click **Accept** on the incoming file prompt.

### Method 3: Use a Python Local Web Server (No Bluetooth Needed)

If Bluetooth file transfer protocol (OBEX) is blocked or failing between the two operating systems, you can instantly bypass it using your home Wi-Fi network.

1. On Ubuntu, open the terminal and navigate to your Downloads folder:\
   `cd ~/Downloads`
2. Start a temporary web server by running:\
   `python3 -m http.server 8000`
3. Find your Ubuntu local IP address by opening a new terminal tab and typing:\
   `hostname -I`\
   _(It will look like `192.168.1.X`)_.
4. Go to your MacBook, open **Safari**, and type that IP address followed by the port into the address bar:\
   `http://192.168.1.X:8000`
5. A page listing your Ubuntu downloads will appear. Click `isrgrootx1.der` to download it directly onto the Mac.

Did the file successfully transfer to your Mac using one of these methods, or did you encounter any **error messages**?

## You said: unable to find service record

June 3, 2026

The "unable to find service record" error means your Ubuntu machine and your MacBook are paired, but they cannot agree on a mutual wireless protocol (OBEX File Transfer) to move the file \[1].

Since Bluetooth protocols between older macOS versions and modern Ubuntu often conflict, the easiest solution is to bypass Bluetooth entirely and transfer the file over your home Wi-Fi network using a built-in Python tool.

### The Wi-Fi Workaround (Takes 60 Seconds)

Both computers must be connected to the **same Wi-Fi network**.

**Step 1: Start a temporary server on Ubuntu**

1. Open the Terminal on Ubuntu (`Ctrl + Alt + T`).

2. Move to your downloads folder by running:\
   bash

<!---->

```
cd ~/Downloads
```

Use code with caution.
3\. Start a network share by running:\
bash

```
python3 -m http.server 8000
```

Use code with caution.\
_(Leave this terminal window open)_.

**Step 2: Find your Ubuntu network address**

1. Open a second terminal window or tab (`Ctrl + Shift + T`).

2. Run this command to find your local IP address:\
   bash

<!---->

```
hostname -I
```

Use code with caution.
3\. Look at the very first numbers that pop up (it will look exactly like `192.168.1.50` or `10.0.0.15`).

**Step 3: Download the file on your Mac**

1. Go to your MacBook and open **Safari**.
2. Type your Ubuntu IP address followed by `:8000` into the address bar and press Enter.

- _Example:_ `http://192.168.1.50:8000`

3. A webpage will appear listing the files in your Ubuntu Downloads folder.
4. Click **isrgrootx1.der** to download it straight to your Mac.

Once the file downloads, you can close the Ubuntu terminal to shut down the server.

Did the website load up on your MacBook, or do you need help **installing the certificate** into the Mac Keychain now?

## You said: I copied to a u disk. I can plug in. how to see on MacBook.

June 3, 2026

To see and access your USB flash drive (U disk) on your legacy MacBook, look in the two main areas where macOS automatically mounts external drives.

### 1. Check the Desktop

- Look closely at your Mac's **Desktop screen**.
- External drives usually appear as a **white or yellow drive icon** on the right side of the screen.
- Double-click that icon to open it.

### 2. Check the Finder Sidebar

If it is hidden from your desktop, open a folder window to find it.

1. Click the **Finder icon** (the blue smiling face) on the bottom-left of your Dock.
2. Look at the left-hand sidebar under the **Devices** or **Locations** section.
3. You will see the name of your USB drive listed there. Click it to view the `isrgrootx1.der` file.

### What to do if the drive is not showing up

If the drive does not appear in either location, macOS might not recognize the file format used by Ubuntu. You can force it to mount using Disk Utility:

1. Press `Command + Space` to open Spotlight search, type **Disk Utility**, and press Enter.
2. Look at the left sidebar under the **External** section.
3. If you see your USB drive listed there but it looks greyed out, click on its name, then click the **Mount** button at the top of the window.

Once you can see the file, **double-click the `isrgrootx1.der` file** to automatically launch Keychain Access and begin the installation process.

Are you able to see your file inside the USB drive now, or do you need help **setting the certificate to "Always Trust"** in Keychain Access?

## You said: no effect

June 3, 2026

If double-clicking the certificate file from the USB drive had **no effect**, it means the automatic installer is failing because Safari and the Mac system are completely blocking the file extension.

You must manually force the certificate into your system using **Terminal commands**.

### 1. Open Terminal on your Mac

1. Disconnect and reconnect your USB drive.
2. Press **`Command + Space`** to open Spotlight search.
3. Type **`Terminal`** and press **Enter**.

### 2. Run the Manual Import Command

Copy and paste the exact command below into the Terminal window, then press **Enter**:

bash

```
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /Volumes/*/isrgrootx1.der
```

Use code with caution.

- **Note:** Terminal will ask for your Mac user password. Type it in (you will not see characters moving or asterisks as you type) and press **Enter**.
- This command completely bypasses the broken graphical interface and forces the **ISRG Root X1** certificate directly into your Mac's global System Keychain.

### 3. Clear the Frozen Safari State

If the command finishes without error but Safari still fails, the old security rules are stuck in Safari's temporary memory.

1. Completely close Safari by pressing **`Command + Q`** while inside the app.
2. Reopen Safari and try navigating to a secure website like Google.

If the Terminal says "No such file or directory," what is the **exact name of your USB drive** as it appears on your Mac?

## You said: I mean I can not see the u disk

June 3, 2026

If your MacBook cannot see the USB drive at all, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the drive is likely formatted in an <strong>Ubuntu file system (like ext4)</strong> that macOS cannot read</mark> \[1].

To fix this, you must reformat the USB drive on your Ubuntu machine so that both computers can read it, or use a completely different network transfer trick.

### Fix 1: Reformat the USB Drive on Ubuntu

_Warning: This will delete everything currently on the USB drive._

1. Plug the USB drive back into your **Ubuntu** machine.
2. Open the **Disks** application (search for "Disks" in your Ubuntu applications).
3. Select your USB flash drive from the left sidebar.
4. Click the **three dots menu** (or gears icon) in the top right and select **Format Disk**.
5. Under "Format", choose **FAT32** (or **exFAT** / **MS-DOS**). These are universal formats that work perfectly on both Ubuntu and older MacBooks.
6. Once formatted, copy the `isrgrootx1.der` certificate file back onto the USB drive.
7. Safely eject the drive and plug it into your MacBook. It will now pop up on your Mac Desktop.

### Fix 2: Skip the USB and Use Netcat (Terminal to Terminal)

If you do not want to format your USB drive, you can pipe the file directly from your Ubuntu terminal into your Mac terminal over Wi-Fi. Make sure both machines are on the same Wi-Fi network.

**Step 1: Get your Mac's Local IP Address**

1. On your MacBook, open **Terminal** (`Command + Space` -> type `Terminal`).

2. Run this command:\
   bash

<!---->

```
ipconfig getifaddr en0
```

Use code with caution.\
_(If your Mac is on Wi-Fi, it will output an IP address like `192.168.1.45`)_.

**Step 2: Prepare the Mac to Receive the File**

1. In that same Mac Terminal window, run this command to open a listening port:\
   bash

<!---->

```
nc -l 9999 > ~/Desktop/isrgrootx1.der
```

Use code with caution.\
_(Your Mac terminal will look frozen/blank. It is waiting for the file)_.

**Step 3: Send the File from Ubuntu**

1. Open the Terminal on Ubuntu (`Ctrl + Alt + T`).

2. Run this command (replace `YOUR_MAC_IP` with the numbers from Step 1):\
   bash

<!---->

```
nc YOUR_MAC_IP 9999 < ~/Downloads/isrgrootx1.der
```

Use code with caution.
3\. Within 2 seconds, the file will cleanly land on your **MacBook Desktop**. You can press `Ctrl + C` on both computers to close the connection.

Did the USB drive show up after reformatting it to **FAT32**, or did the **Netcat Wi-Fi command** send the certificate file over?

## You said: I have the cert now

June 3, 2026

Awesome! Now that you have the `isrgrootx1.der` file on your Mac, you just need to manually install it and tell the system to trust it.

Follow these steps to activate the certificate and fix Safari:

### 1. Import the Certificate into Keychain

1. Press **`Command + Space`** to open Spotlight search, type **Keychain Access**, and press **Enter**.
2. In the left-hand sidebar, look under the "Keychains" section and click on **System**.
3. Under the "Category" section below it, click on **Certificates**.
4. Drag and drop the `isrgrootx1.der` file directly into the main white list area on the right side of the window.
5. Enter your Mac administrator password when prompted to authorize the change.

### 2. Set the Certificate to "Always Trust"

1. In that same list, locate **ISRG Root X1**.
2. Double-click it to open a new settings window.
3. Click the small arrow next to **Trust** to expand the hidden menu options.
4. Change the very top dropdown menu ("When using this certificate") to **Always Trust**.
5. Close the window. It will prompt you for your Mac password one more time to lock it in.

### 3. Restart Safari

1. Completely close Safari by pressing **`Command + Q`** while inside the app.
2. Reopen Safari and try loading a secured website like `google.com` or `wikipedia.org`.

Did Safari successfully load the web pages now, or are you getting a **specific error code/message** when trying to connect?

## You said: how is chrome 49

June 3, 2026

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Chrome 49 is completely obsolete</span></strong> and will not work for modern web browsing</mark>. Released in **March 2016**, it is roughly a decade out of date and lacks the necessary core code to handle modern web security, JavaScript, or CSS. \[[1](https://chromereleases.googleblog.com/2016/03/stable-channel-update.html), [2](https://www.reddit.com/r/developersIndia/comments/1s7qic3/why%5Fdo%5Fwebsites%5Fstill%5Fnot%5Fwork%5Fon%5Fall%5Fbrowsers%5Fin/), [3](https://www.tripwire.com/state-of-security/google-chrome-49-fixes-security-bugs-displays-extensions-in-toolbar)]

Using Chrome 49 on a legacy MacBook presents several critical issues:

- **Severe Security Risks**: It has hundreds of unpatched security vulnerabilities. A remote attacker can easily compromise an old browser. \[[1](https://www.tripwire.com/state-of-security/google-chrome-49-fixes-security-bugs-displays-extensions-in-toolbar)]
- **Website Crashes**: Almost all modern websites (including Google, YouTube, and Wikipedia) will either refuse to load entirely, throw SSL certificate errors, or look completely broken because Chrome 49 does not understand modern web programming. \[[1](https://primetechinsights.com/best-browser-2026/), [2](https://www.reddit.com/r/developersIndia/comments/1s7qic3/why%5Fdo%5Fwebsites%5Fstill%5Fnot%5Fwork%5Fon%5Fall%5Fbrowsers%5Fin/)]
- **No Extension Support**: You cannot download extensions, ad blockers, or tools from the Chrome Web Store, as they all require modern versions of Chrome.

Instead of using Chrome 49, you can install specialized browsers that are explicitly designed to backport modern web rendering engines to ancient versions of macOS.

- **Chromium Legacy**: This is a community-maintained fork that brings the absolute newest, fully updated version of Chromium (the foundation of Chrome) to older operating systems like OS X Mavericks (10.9) up to High Sierra (10.13). It allows you to browse the modern web safely on a legacy Mac.
- **Legacy Web Development / InterWeb**: Lightweight, community-updated browsers built on Firefox codebases that are actively optimized to run on old Mac hardware.

If you want to completely revitalize your MacBook, what **macOS version** is it running? Knowing the OS version will help pinpoint exactly which modern browser download link will work for your system.

- [link](https://www.tripwire.com/state-of-security/google-chrome-49-fixes-security-bugs-displays-extensions-in-toolbar)\
  Google Releases Security Update for Chrome 49 - Tripwire\
  Published on March 9, 2016. Google has patched three security issues in Chrome 49, the most recent version of its popular web brow...\
  Tripwire
- [link](https://www.reddit.com/r/developersIndia/comments/1s7qic3/why%5Fdo%5Fwebsites%5Fstill%5Fnot%5Fwork%5Fon%5Fall%5Fbrowsers%5Fin/)\
  Why do websites still not work on all browsers in 2026? - Reddit\
  It's 2026, and developers are still having problems with websites that work fine in one browser but not in others. You make and te...\
  Reddit
- [link](https://chromereleases.googleblog.com/2016/03/stable-channel-update.html)\
  Stable Channel Update - Chrome Releases\
  Wednesday, March 2, 2016. The Chrome team is delighted to announce the promotion of Chrome 49 to the stable channel for Windows, M...\
  blog.google

Show all

### Better Alternatives for Your Legacy Mac

## You said: what will happen if I include it in my target on package json with parcel js

June 3, 2026

If you map your Parcel JS target to build specifically for **Chrome 49** in your `package.json`, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Parcel will aggressively transpile your JavaScript and CSS code backwards into 2016-era code.</strong></mark>

Parcel relies on [Browserslist](https://web.dev/articles/use-baseline-with-browserslist) to decide how much of your modern code needs to be altered for compatibility. Targeting an ancient browser triggers several deep modifications during the build process: \[[1](https://parceljs.org/), [2](https://www.youtube.com/watch?v=64xUrzYXTn8), [3](https://parceljs.org/getting-started/webapp/)]

### 1. Massive JavaScript Transpilation

Parcel will run all of your code through its internal compiler (SWC/Babel). \[[1](https://parceljs.org/)]

- Modern features like **Optional Chaining** (`?.`), **Nullish Coalescing** (`??`), and **Async/Await** will be completely unwrapped into heavy, verbose ES5 syntax (like standard functions, complex `var` assignments, and switch-statement state machines).
- This will significantly increase your final bundle's file size.

### 2. Automated CSS Down-leveling

Chrome 49 does not understand modern CSS features. \[[1](https://parceljs.org/)]

- Parcel will automatically generate old-school **vendor prefixes** (like `-webkit-`) for layouts.
- Modern layouts like advanced CSS Grid or modern CSS nesting properties will be rewritten or stripped out so Chrome 49's basic rendering engine doesn't break. \[[1](https://parceljs.org/)]

### 3. Dynamic "Nomodule" Splitting

If you are building a web application, Parcel's differential bundling will kick in. Chrome 49 does not support ES modules (). \[[1](https://parceljs.org/blog/rc0/)]

- Parcel will compile a fallback **`nomodule` bundle** specifically for Chrome 49.
- Modern browsers visiting your site will get clean, lightweight modern code, while Chrome 49 will be served the heavy, transpiled legacy fallback file. \[[1](https://parceljs.org/blog/rc0/)]

### How to configure this in your `package.json`

You can declare this by specifying Chrome 49 inside your global `browserslist` or within a dedicated target configuration: \[[1](https://parcel2-docs.vercel.app/configuration/package-json/), [2](https://parceljs.org/getting-started/webapp/)]

json

```
{
  "name": "legacy-mac-app",
  "source": "src/index.html",
  "targets": {
    "legacy_build": {
      "engines": {
        "browsers": "Chrome 49"
      }
    }
  }
}
```

Use code with caution.

_(To build this specific target, you would run `parcel build --target legacy_build` in your terminal)._ \[[1](https://stackoverflow.com/questions/71709223/how-to-set-dev-and-prod-targets-in-parcel), [2](https://parceljs.org/features/development/)]

### A Crucial Warning on Polyfills

While Parcel will rewrite the **syntax** (changing `const` to `var`), it does **not** automatically inject global object polyfills for missing browser methods. \[[1](https://parceljs.org/getting-started/webapp/)]

Chrome 49 completely lacks modern APIs like `fetch()`, `Promise.allSettled()`, or `Object.values()`. If your modern JavaScript code uses these, the code will compile fine, but Chrome 49 will immediately throw a **`Runtime Error: [Method] is not a function`** when the page loads. You will need to manually import a global polyfill library (like `core-js` and `whatwg-fetch`) at the very top of your entry script to make the website operational.

Would you like a template script showing how to **manually import the core-js polyfills** so your code safely executes without crashing Chrome 49?

- [link](https://stackoverflow.com/questions/71709223/how-to-set-dev-and-prod-targets-in-parcel)\
  How to set dev and prod targets in Parcel - Stack Overflow\
  Sorted by: 2. I figured it out. The CLI commands in the "scripts" portion of package.json can include the --target flag. This way ...\
  Stack Overflow
- [link](https://parceljs.org/features/development/)\
  Development - Parcel\
  Development target ... When using the dev server, only a single target can be built at once. By default, Parcel uses a development...\
  Parcel.js
- [link](https://parceljs.org/blog/rc0/)\
  Parcel 2 RC\
  Differential bundling using the module/nomodule pattern is now completely automated in Parcel 2. Just use a becomes: This happens ...\
  Parcel.js

Show all

## You said: can I serve normal browsers like 2019 and serve it as legacy

June 3, 2026

Yes, you can absolutely do this. You can configure Parcel to build **two separate versions** of your website from the exact same codebase: one optimized for modern browsers (like 2019 onward) and a legacy fallback bundle for browsers like Chrome 49 \[^1].

To make this work seamlessly, you will use **differential bundling** (also known as the module/nomodule pattern) \[^1]. Modern browsers will download a fast, lightweight file, while old browsers will automatically fetch the heavily compiled legacy file \[^1].

***

### Step 1: Configure `package.json`

Add a `browserslist` block to your `package.json`. You can target modern browsers globally, and specify Chrome 49 inside your HTML entry point later.

json

```
{
  "name": "my-dual-build-app",
  "version": "1.0.0",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "browserslist": [
    "since 2019",
    "not dead"
  ],
  "devDependencies": {
    "parcel": "^2.12.0"
  }
}
```

Use code with caution.

***

### Step 2: Set Up Your `index.html` Entry Point

Parcel looks at your HTML file to determine how to build your JavaScript. By using the and tags, **Parcel will automatically output two distinct builds** \[^1].

Create your `src/index.html` file like this:

html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Legacy and Modern App</title>
</head>
<body>
    <div id="app">Loading...</div>

    <!-- 1. Served to 2019+ modern browsers -->
    <script type="module" src="./index.js"></script>

    <!-- 2. Automatically compiled fallback served to Chrome 49 -->
    <script nomodule src="./index.js"></script>
</body>
</html>
```

Use code with caution.

### How Parcel Handles This Script Setup:

1. **The `type="module"` script**: Parcel compiles your `index.js` strictly according to your `browserslist` directive (`since 2019`). The code remains highly optimized, using native ES modules, async/await, and minimal code rewrites. Chrome 49 will ignore this tag completely.
2. **The `nomodule` script**: Parcel automatically detects this tag and treats it as a legacy target \[^1]. It bypasses your 2019 settings and compiles a second copy of `index.js` down to ancient ES5 code. Modern browsers will ignore this tag, while Chrome 49 will run it.

***

### Step 3: Handle Missing APIs (The Polyfill Strategy)

While Parcel will rewrite the _syntax_ for the legacy bundle, it will not natively add missing global functions (like `fetch` or `Promise`). Chrome 49 will crash immediately without them.

To fix this safely without bloating your modern 2019 bundle, create a dedicated entry point for your legacy users.

1. Create a `src/legacy-entry.js` file:\
   javascript

<!---->

```
// 1. Load polyfills FIRST so Chrome 49 has modern APIs available
import 'core-js/stable';
import 'whatwg-fetch';

// 2. Load your actual application logic
import './index.js';
```

Use code with caution.
2\. Change your `src/index.html` to point the legacy script to this file instead:\
html

```
<!-- Modern -->
<script type="module" src="./index.js"></script>

<!-- Legacy (With Polyfills Included) -->
<script nomodule src="./legacy-entry.js"></script>
```

Use code with caution.

To make this polyfill trick work, you just need to run `npm install core-js whatwg-fetch` in your terminal.

Are you using any specific **modern frontend libraries** (like React, Vue, or Tailwind) that we need to ensure are compatible with Chrome 49?