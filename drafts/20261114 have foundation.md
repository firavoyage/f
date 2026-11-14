# how to install and setup persistent browser profile on patchright in js

To install and set up a persistent browser profile with **Patchright** in Node.js, install the package along with real Google Chrome and launch the browser using **`chromium.launchPersistentContext()`**. [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

### 1\. Installation

Run the following commands in your terminal to install Patchright and the recommended browser binary: [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

bash

```
npm install patchright
npx patchright install chrome

```



* **Use real Chrome.** Patchright recommends `chrome` over bundled `chromium` for maximum stealth and compatibility.
* **Verify your imports.** Ensure your project imports from `patchright` rather than `playwright`, as leaving an old import will silently use the unpatched driver. [](https://github.com/openonion/connectonion/issues/168)

### 2\. Persistent Profile Setup (JavaScript)

Instead of calling `chromium.launch()`, use `chromium.launchPersistentContext()` and pass a local folder path to `userDataDir`. Cookies, `localStorage`, IndexedDB, and active login sessions will automatically save to that folder and reload on future runs. [](https://github.com/lipski-lite/nativewright)

javascript

```
const { chromium } = require('patchright');
const path = require('path');

(async () => {
  // Define the folder where your profile data will be saved
  const userDataDir = path.join(__dirname, 'my-chrome-profile');

  // Launch persistent context using Patchright's recommended stealth settings
  const context = await chromium.launchPersistentContext(userDataDir, {
    channel: 'chrome',     // Uses real Google Chrome instead of Chromium
    headless: false,       // Headed mode avoids headless detection flags
    viewport: null         // Disables fixed viewport sizing (equivalent to no_viewport)
  });

  // Persistent contexts open with a default blank page; reuse it instead of opening a new one
  const page = context.pages()[0] || await context.newPage();

  await page.goto('https://example.com');
  console.log('Page Title:', await page.title());

  // Always close the context gracefully so session data flushes to disk
  await context.close();
})();

```



### 3\. Best Practices for Stealth & Reliability

Follow the guidelines from the [Scrapewise Patchright Guide](https://scrapewise.ai/blogs/what-is-patchright-guide-2026) to keep the profile undetected and prevent corruption: [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

* **Avoid custom overrides.** Do not set custom `userAgent` strings or extra HTTP headers in the launch options, as they create fingerprint mismatches. [](https://github.com/openonion/connectonion/issues/168)
* **Run one instance per profile.** A `userDataDir` locks while in use, so launching two scripts against the same profile folder simultaneously will cause an error. [](https://playwright.dev/mcp/configuration/user-profile)
* **Seed logins manually.** Run the script once with `headless: false` and a pause (or `page.waitForTimeout()`), log into your accounts manually, and close the browser. Subsequent runs pointing to the same `userDataDir` will start already authenticated. [](https://github.com/lipski-lite/nativewright)
* **Use a virtual display on Linux servers.** Because `headless: false` is recommended for stealth, pair your script with `xvfb-run` when deploying to headless Linux environments. [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

If you'd like to tailor this setup further, let me know:

* Whether you are running this on **Windows/macOS** or a **Linux server** (for `xvfb` setup)
* If you need **TypeScript / ES Module** syntax instead of CommonJS

I can adjust the launch configuration or provide deployment steps to match your environment.

* [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)  
Scrapewise  
What Is Patchright? Install, Patches, Limits (2026)  
October 13, 2026 — Headed Chrome on a server means a virtual display, which is a real cost in CI. pip install patchright followed by patchright insta...
* [](https://github.com/openonion/connectonion/issues/168)  
GitHub  
\[FEATURE\] Replace Playwright with Patchright for built-in anti ...  
Jun 30, 2026 — Patchright explicitly recommends: real Chrome over Chromium, do NOT set custom user\_agent / browser headers.
* [](https://github.com/lipski-lite/nativewright)  
GitHub  
GitHub - lipski-lite/nativewright: Agent-drivable Patchright ...  
Eliminates the detection signals vanilla Playwright emits out of the box, so your own automation of your own accounts looks like n...

Show all

# how to install and setup persistent browser profile on patchright in js esm

To use a persistent browser profile with [Patchright](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright-nodejs) in JavaScript (ESM), install the npm package alongside Google Chrome and launch it using `chromium.launchPersistentContext()`. [](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright-nodejs)

### 1\. Install Patchright and Chrome

Run the following commands in your project directory to install the library and the recommended browser binary: [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

bash

```
npm init -y
npm install patchright
npx patchright install chrome

```



* **Use real Chrome.** The Patchright documentation recommends installing Google Chrome instead of standard Chromium to minimize bot detection signals.
* **Enable ES Modules.** Open your `package.json` file and add `"type": "module"` at the top level, or save your script with a `.mjs` extension. [](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright-nodejs)

### 2\. Configure the Persistent Profile (ESM)

Create a file named `index.js` and use `chromium.launchPersistentContext()` to point to a local folder where cookies, cache, and login sessions will be saved across runs. [](https://playwright.dev/mcp/configuration/user-profile)

javascript

```
import { chromium } from 'patchright';
import path from 'node:path';

// Define a local directory to store your persistent browser profile
const userDataDir = path.resolve('./browser-profile');

async function run() {
  // Launch Chrome with a persistent context using recommended stealth settings
  const context = await chromium.launchPersistentContext(userDataDir, {
    channel: 'chrome',
    headless: false,
    viewport: null,
    // Avoid adding custom userAgent or extraHTTPHeaders to prevent fingerprint leaks
  });

  // Persistent contexts open with an initial blank page by default
  const page = context.pages()[0] || await context.newPage();

  await page.goto('https://example.com');
  
  // Perform your automation tasks here...

  // Closing the context saves the session state to disk
  await context.close();
}

run();

```



### Best Practices for Undetected Persistence

* **Keep fingerprint settings untouched.** Do not pass custom `userAgent` strings, custom headers, or fixed viewport dimensions into `launchPersistentContext`, as these create mismatches with your native browser profile. [](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright-nodejs)
* **Run in headed mode.** Setting `headless: false` avoids headless-specific browser flags. If you are deploying on a Linux server without a monitor, wrap your execution command in `xvfb-run node index.js` to simulate a display. [](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright-nodejs)
* **Avoid concurrent profile access.** Only one browser instance can use a given `userDataDir` folder at a time. Launching a second script against the same profile folder while the first is running will throw a profile lock error. [](https://playwright.dev/mcp/configuration/user-profile)
* **Close the context cleanly.** Always call `await context.close()` instead of killing the Node process so Chromium flushes all cookies and local storage data to disk properly.

Are you running this locally or deploying it to a **headless Linux server/Docker container**? I can provide the exact **Xvfb** or **Dockerfile** setup if needed.

* [](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright-nodejs)  
GitHub  
GitHub - Kaliiiiiiiiii-Vinyzu/patchright-nodejs: Undetected ...  
To be completely undetected, use the following configuration: headless: false, To avoid detection by this leak, patchright avoids ...
* [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)  
Scrapewise  
What Is Patchright? Install, Patches, Limits (2026)  
October 13, 2026 — Patchright is a patched version of the Playwright driver. Chromium's default launch flags, It fixes fingerprint signals, not behav...
* [](https://playwright.dev/mcp/configuration/user-profile)  
Playwright  
Profile & State | Playwright  
A profile can only be used by one browser at a time. If it is already locked, the server fails to start. Use --persistent there to...

# . install browser extensions

- ublock lite

just do it manually.

default settings would be fine guess.

# how to install and setup persistent browser profile on patchright w xvfb toggle in js esm

10:48 PM

### how to install and setup persistent browser profile on patchright w xvfb toggle in js esm

To set up [Patchright](https://scrapewise.ai/blogs/what-is-patchright-guide-2026) with a persistent browser profile and an Xvfb virtual display toggle in JavaScript (ESM), install the package alongside Google Chrome and manage the virtual display either via CLI or programmatically. [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

#### 1\. Installation & Project Setup

* **Install system dependencies (Linux).** If you are running on a headless Linux server, install `xvfb` via your package manager (`sudo apt update && sudo apt install -y xvfb`).
* **Initialize an ESM project.** Create a `package.json` file or set `"type": "module"` in your existing `package.json` so Node.js supports `import` syntax.
* **Install Patchright and Chrome.** Run `npm install patchright` followed by `npx patchright install chrome`. Patchright recommends using real Google Chrome (`channel: "chrome"`) rather than bundled Chromium for maximum stealth. [](https://github.com/openonion/connectonion/issues/168)

#### 2\. ESM Implementation with Xvfb Toggle

Patchright's recommended configuration uses `launchPersistentContext`, `headless: false`, `no_viewport: true` (in JS: `viewport: null`), and avoids custom user agents or headers. [](https://github.com/openonion/connectonion/issues/168)

Save the following as `index.js`:

javascript

```
import { chromium } from 'patchright';
import { spawn } from 'node:child_process';
import path from 'node:path';

// Toggle Xvfb via environment variable (e.g., USE_XVFB=true node index.js)
const USE_XVFB = process.env.USE_XVFB === 'true';
const DISPLAY_NUM = ':99';

function startXvfb(display) {
  const xvfb = spawn('Xvfb', [display, '-screen', '0', '1920x1080x24', '-ac'], {
    stdio: 'ignore',
    detached: true,
  });
  process.env.DISPLAY = display;
  return xvfb;
}

async function run() {
  let xvfbProcess = null;

  if (USE_XVFB) {
    console.log(`Starting Xvfb on ${DISPLAY_NUM}...`);
    xvfbProcess = startXvfb(DISPLAY_NUM);
    // Brief pause to ensure the X server socket initializes
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const userDataDir = path.resolve('./browser-profile');

  try {
    // Launch persistent context using Patchright's stealth recommendations
    const context = await chromium.launchPersistentContext(userDataDir, {
      channel: 'chrome',
      headless: false, // Must remain false even when using Xvfb
      viewport: null,  // Equivalent to no_viewport=True
      // Do NOT add custom userAgent or extraHTTPHeaders
    });

    const page = context.pages()[0] || (await context.newPage());
    await page.goto('https://sannysoft.com');
    
    // Keep open briefly or perform your automation
    await page.waitForTimeout(5000);

    await context.close();
  } finally {
    if (xvfbProcess) {
      xvfbProcess.kill();
      console.log('Xvfb stopped.');
    }
  }
}

run().catch(console.error);

```



#### 3\. Running with the Toggle

* **Standard headed mode (local desktop).** Run `node index.js` to open a visible Chrome window on your local display and save cookies/storage to `./browser-profile`.
* **Headless server mode (with Xvfb).** Run `USE_XVFB=true node index.js` to spin up the virtual display, run headed Chrome inside it, and tear down Xvfb automatically when the script finishes.
* **Alternative CLI wrapper.** Instead of spawning Xvfb inside Node.js, you can leave `USE_XVFB=false` and wrap the execution directly in your terminal using `xvfb-run --auto-servernum node index.js`.

#### Key Pitfalls to Avoid

* **Do not mix Playwright and Patchright.** If both packages exist in `node_modules`, accidentally importing from `playwright` instead of `patchright` will silently load the unpatched driver. [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)
* **Avoid concurrent profile access.** Only one browser process can safely use a single `userDataDir` at a time. If you run parallel workers, assign each worker its own separate profile directory.

If you are deploying this to a specific environment, let me know:

* Your **target OS** (Ubuntu, Debian, Docker container?)
* Whether you need **proxy authentication** or **multi-worker profile management**

I can help you adapt the launch flags or write a Dockerfile for it.

* [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)  
Scrapewise  
What Is Patchright? Install, Patches, Limits (2026)  
One trap: if both packages are installed in the same environment, an import left pointing at playwright silently gives you the unp...
* [](https://github.com/openonion/connectonion/issues/168)  
GitHub  
\[FEATURE\] Replace Playwright with Patchright for built  
Patchright explicitly recommends: real Chrome over Chromium, launch\_persistent\_context over launch , headless=False , no\_viewport=
* [](https://remote-browser.dev/remote-browser/guides/persistent-browser-profile)  
remote-browser.dev  
What is a persistent browser profile? | Remote Browser  
A persistent browser profile is saved browser data that can be reused across browser runs. It commonly helps automation reuse cook...

## what if you do not kill xvfb afterward

what if you do not kill xvfb afterward

10:54 PM

### what if you do not kill xvfb afterward

If you do not kill the **Xvfb process** after your script finishes, it remains running indefinitely in the background as a detached orphan process on that display number (e.g., `:99`).

#### What Happens Next

* **Subsequent script runs fail or collide.** If you run the script again using the same hardcoded display (`:99`), the new `Xvfb` instance will fail to start because the display lock file (`/tmp/.X99-lock`) and socket already exist.
* **Memory leaks over time.** Each unkilled `Xvfb` instance consumes roughly **30 MB to 100+ MB of RAM** depending on your configured screen resolution and color depth. Spawning a new display on every script run without cleanup will eventually exhaust your server's memory.
* **Stale `/tmp` lock files.** If the server or container restarts unexpectedly without cleaning `/tmp`, leftover `.X99-lock` files can block future Xvfb startups on that display number.

#### Intentional Persistent Xvfb (When You Want It)

Leaving Xvfb running is actually a common pattern in production when you run multiple sequential scraping jobs and want to avoid the startup overhead of initializing a virtual display every time.

To do this safely:

* **Start Xvfb once at the OS/container level.** Run `Xvfb :99 -screen 0 1920x1080x24 -ac &` via `systemd`, `supervisord`, or your Docker entrypoint script.
* **Point your Node script to the existing display.** Remove the `spawn('Xvfb', ...)` logic from JavaScript and simply pass `DISPLAY=:99 node index.js` when running your script.
* **Use `xvfb-run` for automatic cleanup.** If you prefer per-script displays without managing child processes in Node.js, `xvfb-run --auto-servernum node index.js` automatically finds an unused display number, starts Xvfb, and guarantees it gets killed when Node exits (even on crashes).

Are you running this as a **one-off cron job** or a **long-running worker service**? Let me know your setup and I can give you the cleanest process management config for it.

## shell command for long running xvfb

shell command for long running xvfb

10:56 PM

### shell command for long running xvfb

For a long-running background **Xvfb** session, run it detached using **`nohup`** so it survives when you close your terminal, or configure it as a **`systemd`** service so it starts automatically on boot and restarts if it crashes.

#### Option 1: Quick Detached Background Process (`nohup`)

Use this command to immediately launch Xvfb on display `:99` in the background and detach it from your current shell session:

bash

```
nohup Xvfb :99 -screen 0 1920x1080x24 -ac > /dev/null 2>&1 &

```



* **How to use it in your scripts.** Run your Node.js app with `DISPLAY=:99 node index.js`.
* **How to check if it is running.** Run `pgrep -a Xvfb` to verify the process ID and flags.
* **How to stop it later.** Run `pkill -f "Xvfb :99"` to cleanly terminate that specific display server.

#### Option 2: Production Auto-Restarting Service (`systemd`)

If you are on an Ubuntu or Debian server and want Xvfb to run permanently across reboots, create a dedicated `systemd` service.

**1\. Create the service file:**

bash

```
sudo tee /etc/systemd/system/xvfb.service > /dev/null << 'EOF'
[Unit]
Description=X Virtual Frame Buffer Service
After=network.target

[Service]
ExecStart=/usr/bin/Xvfb :99 -screen 0 1920x1080x24 -ac
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

```



**2\. Enable and start the service:**

bash

```
sudo systemctl daemon-reload
sudo systemctl enable --now xvfb

```



* **Check service status.** Run `sudo systemctl status xvfb` to confirm it is active.
* **Run your app against it.** Export `export DISPLAY=:99` in your `.bashrc` or process manager (like PM2) so all scripts automatically use it.

Are you running your Patchright script with **PM2**, **Docker**, or **plain cron/CLI**? Let me know and I can show you how to bind `DISPLAY=:99` directly into your runner config.

## \~ % Xvfb :99 -screen 0 1920x1080x24 -ac \_amdgpu\_device\_initialize: amdgpu\_query\_info(ACCEL\_WORKING) failed (-13) amdgpu: amdgpu\_device\_initialize failed. \_amdgpu\_device\_initialize: amdgpu\_query\_info(ACCEL\_WORKING) failed (-13) amdgpu: amdgpu\_device\_initialize failed. The XKEYBOARD keymap compiler (xkbcomp) reports: > Warning: Could not resolve keysym XF86CameraAccessEnable > Warning: Could not resolve keysym XF86CameraAccessDisable > Warning: Could not resolve keysym XF86CameraAccessToggle > Warning: Could not resolve keysym XF86NextElement > Warning: Could not resolve keysym XF86PreviousElement > Warning: Could not resolve keysym XF86AutopilotEngageToggle > Warning: Could not resolve keysym XF86MarkWaypoint > Warning: Could not resolve keysym XF86Sos > Warning: Could not resolve keysym XF86NavChart > Warning: Could not resolve keysym XF86FishingChart > Warning: Could not resolve keysym XF86SingleRangeRadar > Warning: Could not resolve keysym XF86DualRangeRadar > Warning: Could not resolve keysym XF86RadarOverlay > Warning: Could not resolve keysym XF86TraditionalSonar > Warning: Could not resolve keysym XF86ClearvuSonar > Warning: Could not resolve keysym XF86SidevuSonar > Warning: Could not resolve keysym XF86NavInfo Errors from xkbcomp are not fatal to the X server

\~ % Xvfb :99 -screen 0 1920x1080x24 -ac \_amdgpu\_device\_initialize: amdgpu\_query\_info(ACCEL\_WORKING) failed (-13) amdgpu: amdgpu\_device\_initialize failed. \_amdgpu\_device\_initialize: amdgpu\_query\_info(ACCEL\_WORKING) failed (-13) amdgpu: amdgpu\_device\_initialize failed. The XKEYBOARD keymap compiler (xkbcomp) reports: > Warning: Could not resolve keysym XF86CameraAccessEnable > Warning: Could not resolve keysym XF86CameraAccessDisable > Warning: Could not resolve keysym XF86CameraAccessToggle > Warning: Could not resolve keysym XF86NextElement > Warning: Could not resolve keysym XF86PreviousElement > Warning: Could not resolve keysym XF86AutopilotEngageToggle > Warning: Could not resolve keysym XF86MarkWaypoint > Warning: Could not resolve keysym XF86Sos > Warning: Could not resolve keysym XF86NavChart > Warning: Could not resolve keysym XF86FishingChart > Warning: Could not resolve keysym XF86SingleRangeRadar > Warning: Could not resolve keysym XF86DualRangeRadar > Warning: Could not resolve keysym XF86RadarOverlay > Warning: Could not resolve keysym XF86TraditionalSonar > Warning: Could not resolve keysym XF86ClearvuSonar > Warning: Could not resolve keysym XF86SidevuSonar > Warning: Could not resolve keysym XF86NavInfo Errors from xkbcomp are not fatal to the X server

10:57 PM

### \~ % Xvfb :99 -screen 0 1920x1080x24 -ac \_amdgpu\_device\_initialize: amdgpu\_query\_info(ACCEL\_WORKING) failed (-13) amdgpu: amdgpu\_device\_initialize failed. \_amdgpu\_device\_initialize: amdgpu\_query\_info(ACCEL\_WORKING) failed (-13) amdgpu: amdgpu\_device\_initialize failed. The XKEYBOARD keymap compiler (xkbcomp) reports: > Warning: Could not resolve keysym XF86CameraAccessEnable > Warning: Could not resolve keysym XF86CameraAccessDisable > Warning: Could not resolve keysym XF86CameraAccessToggle > Warning: Could not resolve keysym XF86NextElement > Warning: Could not resolve keysym XF86PreviousElement > Warning: Could not resolve keysym XF86AutopilotEngageToggle > Warning: Could not resolve keysym XF86MarkWaypoint > Warning: Could not resolve keysym XF86Sos > Warning: Could not resolve keysym XF86NavChart > Warning: Could not resolve keysym XF86FishingChart > Warning: Could not resolve keysym XF86SingleRangeRadar > Warning: Could not resolve keysym XF86DualRangeRadar > Warning: Could not resolve keysym XF86RadarOverlay > Warning: Could not resolve keysym XF86TraditionalSonar > Warning: Could not resolve keysym XF86ClearvuSonar > Warning: Could not resolve keysym XF86SidevuSonar > Warning: Could not resolve keysym XF86NavInfo Errors from xkbcomp are not fatal to the X server

Your **Xvfb server is running normally**. Both sets of messages are harmless, standard startup warnings on headless Linux servers and virtual machines.

#### What Each Message Means

* **`_amdgpu_device_initialize` failed (-13).** Xvfb probes for hardware GPU acceleration during startup. Because you are on a headless server or VM without a physical AMD GPU (or without render-node permissions), it logs this message and automatically falls back to software rendering (`llvmpipe`).
* **`xkbcomp` keysym warnings.** The X keyboard compiler cannot map modern media/specialty keys (like camera toggles or sonar buttons) to a virtual framebuffer without a physical keyboard attached. As the final line notes, these warnings are not fatal and do not affect browser automation.

#### Next Steps to Run Your Script

Because you ran `Xvfb` in the foreground, it is currently holding open your terminal session.

* **Test it from a second terminal.** Open a new SSH/terminal window and run `DISPLAY=:99 node index.js` to confirm Patchright connects to it cleanly.
* **Move it to the background.** Return to the first terminal, press `Ctrl + C` to stop the foreground instance, and restart it detached so you get your prompt back:

bash

```
nohup Xvfb :99 -screen 0 1920x1080x24 -ac > /dev/null 2>&1 &

```



* **Verify it is ready.** Run `DISPLAY=:99 xdpyinfo >/dev/null 2>&1 && echo "Xvfb is ready"` (if `xdpyinfo` is installed) or check `pgrep -a Xvfb`.

Did **Patchright** launch cleanly against `DISPLAY=:99`, or did Chrome throw any **sandbox or GPU flags** errors when connecting?

## what display number can i assign

what display number can i assign

10:58 PM

### what display number can i assign

You can assign any unused non-negative integer from **`:0` up to `:65535`**, though numbers between **`:10` and `:99`** are standard practice for virtual displays.

#### Recommended Display Numbers

* **`:99` (Industry convention).** Most automation scripts, CI/CD pipelines, and Docker containers default to `:99` because it sits well above standard desktop display numbers (`:0` through `:9`).
* **`:10` to `:98` (Multi-display setups).** If you run multiple isolated virtual displays on the same machine, assign sequential numbers like `:10`, `:11`, and `:12` to keep them organized.
* **Avoid `:0` through `:9`.** Desktop environments, SSH X11 forwarding (which typically starts at `:10`), and VNC sessions often claim low display numbers, which can cause lock-file conflicts.

#### How to Check Which Displays Are Already Taken

Before picking a number on a shared or active server, check existing X11 sockets and lock files so you do not collide with an active display:

bash

```
ls -la /tmp/.X11-unix/ /tmp/.X*-lock 2>/dev/null

```



* **If the output shows `X0` or `.X0-lock`.** Display `:0` is in use, so pick another number.
* **If no files appear for your chosen number.** That display number is free to use (for example, `Xvfb :42 -screen 0 1920x1080x24 -ac`).

#### Automatic Display Assignment

If you ever want the OS to pick an open display number for you instead of hardcoding one, use `xvfb-run` with the `--auto-servernum` flag (which starts at `:99` by default and increments upward until it finds a free slot):

bash

```
xvfb-run --auto-servernum --server-args="-screen 0 1920x1080x24" node index.js

```



Are you planning to run **multiple parallel browser instances** on separate displays, or will all of your scripts share a **single persistent display**?

# does xvfb require x11 and not wayland

**Yes, `Xvfb` (X Virtual Framebuffer) is an X11 display server, meaning it strictly uses the X11 protocol and does not speak Wayland** **.** However, you do not need an active X11 desktop session running on your machine to use it. [](https://pypi.org/project/xvfbwrapper/)

Because `Xvfb` _is_ a self-contained virtual X server, you can install and run it on a headless server or alongside an active Wayland desktop session. [](https://pypi.org/project/xvfbwrapper/)

### How `Xvfb` Interacts with X11 and Wayland

* **Self-contained X11 server.** `Xvfb` implements the X11 protocol entirely in memory without needing a physical monitor or graphics card. Your system only needs the `Xvfb` binary and basic X11 libraries installed, not a full Xorg desktop environment. [](https://pypi.org/project/xvfbwrapper/)
* **Running inside a Wayland desktop.** You can launch `Xvfb` while logged into a Wayland session. However, modern GUI toolkits (like GTK or Qt) will often see your active Wayland session and try to connect to it instead of `Xvfb`. To force the app onto your virtual X11 display, you must set `XDG_SESSION_TYPE=x11` alongside your `DISPLAY` variable. [](https://pypi.org/project/xvfbwrapper/)
* **Wayland-only apps will fail.** Because `Xvfb` only understands X11, an application configured to run strictly as a native Wayland client cannot connect to it.
* **Distro deprecations.** Some modern enterprise distributions—such as RHEL 10 and CentOS Stream 10—have dropped Xorg and `Xvfb` packages entirely in favor of Wayland. [](https://github.com/adoptium/infrastructure/issues/3851)

### Wayland Alternatives to `Xvfb`

If you are on a Wayland-only system or testing native Wayland applications headlessly, you have two main replacements:

* **Headless Wayland Compositors.** Tools like Weston (`weston --backend=headless-backend.so`) or `cage` can run a virtual Wayland session in memory without a physical display.
* **`xwayland-run`.** If you are on a newer distro that removed `Xvfb` (like RHEL 10), xwayland-run acts as a drop-in replacement for `xvfb-run`. It spins up a temporary headless Wayland compositor combined with `Xwayland` to run X11 apps. [](https://lists.freedesktop.org/archives/wayland-devel/2023-November/043329.html)

If you are trying to set up headless GUI testing or automation, let me know:

* Which **Linux distribution** you are using
* Whether the **application** you are running requires X11 or Wayland

I can give you the exact command or configuration to get it running.

* [](https://github.com/adoptium/infrastructure/issues/3851)  
GitHub  
Understand whether \`weston\` on Wayland can replace \`Xvfb\` · Issue #3851 · adoptium/infrastructure  
December 20, 2024 — Running \`weston --no-config --backend=headless-backend.so provides a virtual Wayland display server with X11 support. Package inst...
* [](https://pypi.org/project/xvfbwrapper/)  
PyPI  
xvfbwrapper - PyPI  
November 11, 2026 — When running Xvfb in a Wayland session, GUI toolkits may try to use the Wayland backend instead of connecting to Xvfb .
* [](https://lists.freedesktop.org/archives/wayland-devel/2023-November/043329.html)  
Freedesktop.org  
Introducing xwayland-run, a set of small utilities to run X11 ...  
Nov 29, 2023 — The idea is to run Xwayland rootful within a Wayland compositor headless as a replacement for Xvfb.

# how to run js commands in playwright js

To run JavaScript commands in Playwright JS, use the **`page.evaluate()`** method to execute code directly inside the browser page context. Because Playwright scripts run in Node.js while page scripts run in the browser, `page.evaluate()` bridges the two environments and returns the result back to your test. [](https://playwright.dev/docs/evaluating)

### 1\. Run Basic JavaScript in the Page

Use `page.evaluate()` with an arrow function to access browser globals like `window` and `document`. [](https://playwright.dev/docs/evaluating)

javascript

```
// Get the current page URL
const url = await page.evaluate(() => document.location.href);

// Scroll to the bottom of the page
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

```



* **Return values.** Any serializable value returned by the function inside `page.evaluate()` is passed back to your Node.js test script.
* **Async functions.** If the function returns a Promise, Playwright automatically waits for it to resolve before returning the result. [](https://playwright.dev/docs/evaluating)

### 2\. Pass Variables into the Browser Context

Because the browser cannot directly read variables declared in your Node.js test file, pass them explicitly as the second argument to `page.evaluate()`. [](https://playwright.dev/docs/evaluating)

javascript

```
const searchQuery = 'Playwright JS';

const resultCount = await page.evaluate((query) => {
  // 'query' is now accessible inside the browser context
  document.querySelector('#search-input').value = query;
  return document.querySelectorAll('.result-item').length;
}, searchQuery);

```



### 3\. Run JavaScript on a Specific Element

When you already have a Playwright locator, call **`locator.evaluate()`** to pass the matched DOM element directly into your function. [](https://www.youtube.com/watch?v=EMVTk%5FAzBxw)

javascript

```
const button = page.locator('#submit-btn');

// Trigger a native DOM click directly on the element
await button.evaluate((el) => el.click());

// Read a computed style property
const color = await button.evaluate((el) => getComputedStyle(el).color);

```



### 4\. Run Scripts Before Page Load

Use **`page.addInitScript()`** when you need JavaScript to execute automatically before any page scripts run on every navigation or reload. [](https://github.com/microsoft/playwright/issues/19030)

javascript

```
// Inject a variable or override a browser API before the page loads
await page.addInitScript(() => {
  window.isAutomatedTest = true;
});

await page.goto('https://example.com');

```



### Key Rules to Keep in Mind

* **Include parentheses for custom functions.** When calling an existing function defined on the `window` object, invoke it with `()` (e.g., `window.myFunction()`), as noted by users on [Stack Overflow](https://stackoverflow.com/questions/63220757/how-to-run-a-custom-js-function-in-playwright). Omitting parentheses only returns the function reference rather than executing it. [](https://stackoverflow.com/questions/63220757/how-to-run-a-custom-js-function-in-playwright)
* **Stick to built-in actions first.** Playwright recommends using standard methods like `locator.click()` and `locator.fill()` whenever possible, reserving `page.evaluate()` for custom DOM checks or edge cases where standard interactions are blocked. [](https://www.youtube.com/watch?v=EMVTk%5FAzBxw)

More details and examples are available in the [Playwright Evaluating JavaScript documentation](https://playwright.dev/docs/evaluating). 

Are you trying to **manipulate a specific DOM element**, **call a custom `window` function**, or **run Playwright CLI commands** from your terminal? Let me know your use case and I can tailor a code snippet for you.

* [](https://playwright.dev/docs/evaluating)  
Playwright  
Evaluating JavaScript | Playwright  
The page. evaluate() API can run a JavaScript function in the context of the web page and bring results back to the Playwright env...
* [](https://stackoverflow.com/questions/63220757/how-to-run-a-custom-js-function-in-playwright)  
Stack Overflow  
How to run a custom js function in playwright - Stack Overflow  
August 2, 2020 — you must include parentheses to actually call the function (\`window.giveMeSomeKebab()\`) rather than just returning the function de...
* [](https://www.youtube.com/watch?v=EMVTk%5FAzBxw)  
YouTube·Mukesh otwani  
Execute JavaScript in Playwright with Java Using Evaluate  
Dec 3, 2024 — This video explains how to execute JavaScript code within Playwright using Java, particularly in scenarios where standard Playwrig...  
12:13

Show all

# . test

```
 ~ % Xvfb :99 -screen 0 1920x1080x24 -ac > /dev/null 2>&1
^C%                                                                                                                                    ~ % Xvfb :99 -screen 0 1920x1080x24 -ac
_amdgpu_device_initialize: amdgpu_query_info(ACCEL_WORKING) failed (-13)
amdgpu: amdgpu_device_initialize failed.
_amdgpu_device_initialize: amdgpu_query_info(ACCEL_WORKING) failed (-13)
amdgpu: amdgpu_device_initialize failed.
The XKEYBOARD keymap compiler (xkbcomp) reports:
> Warning:          Could not resolve keysym XF86CameraAccessEnable
> Warning:          Could not resolve keysym XF86CameraAccessDisable
> Warning:          Could not resolve keysym XF86CameraAccessToggle
> Warning:          Could not resolve keysym XF86NextElement
> Warning:          Could not resolve keysym XF86PreviousElement
> Warning:          Could not resolve keysym XF86AutopilotEngageToggle
> Warning:          Could not resolve keysym XF86MarkWaypoint
> Warning:          Could not resolve keysym XF86Sos
> Warning:          Could not resolve keysym XF86NavChart
> Warning:          Could not resolve keysym XF86FishingChart
> Warning:          Could not resolve keysym XF86SingleRangeRadar
> Warning:          Could not resolve keysym XF86DualRangeRadar
> Warning:          Could not resolve keysym XF86RadarOverlay
> Warning:          Could not resolve keysym XF86TraditionalSonar
> Warning:          Could not resolve keysym XF86ClearvuSonar
> Warning:          Could not resolve keysym XF86SidevuSonar
> Warning:          Could not resolve keysym XF86NavInfo
Errors from xkbcomp are not fatal to the X server
^C%
```

```
 ~ % ls -la /tmp/.X11-unix/ /tmp/.X*-lock 2>/dev/null

-r--r--r-- 1 fira fira   11 Nov 14 14:57 /tmp/.X99-lock

/tmp/.X11-unix/:
total 40
drwxrwxrwt   2 root root  4096 Nov 14 14:57 .
drwxrwxrwt 185 root root 32768 Nov 14 14:57 ..
srwxrwxrwx   1 fira fira     0 Oct 26 02:08 X1
srwxrwxrwx   1 fira fira     0 Nov 14 14:57 X99
```

```yaml
- name: copy
  command: cd '/home/fira/Documents/f/apps/copy/build' && node-srv -l -i app.html
  options: 
    userspace: true
    port: true
- name: token
  command: cd '/home/fira/Documents/f/apps/token/' && node-srv -l -i token.html
  options: 
    userspace: true
    port: true
- name: pvz
  command: docker start pvz
  options: 
    userspace: true
    port: 9000
    port_flag: false
- name: blank
  command: cd '/home/fira/Documents/f/apps/' && node-srv -l -i blank.html
  options:
    port: true
- name: wordcount
  command: cd '/home/fira/Documents/f/apps/' && node-srv -l -i text.html
  options:
    port: true
- name: tools
  command: cd '/home/fira/Documents/f/apps/tools/source/web/build' && node-srv -l
  options:
    port: true
- name: quote
  # command: cd '/home/fira/Documents/f/quote' && bun run serve
  command: cd '/home/fira/Documents/f/quote' && r serve
  options:
    userspace: true
    port: 9005
- name: para
  command: cd '/home/fira/Documents/f/para' && zsh script/serve.sh
  options:
    userspace: true
    port: true
- name: virtual display
  command: Xvfb :99 -screen 0 1920x1080x24 -ac
```

```
 ~ % sudo systemctl restart launch
```


