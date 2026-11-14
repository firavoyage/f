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

# how to save a rendered page in html alongside all static assets via patchright in js esm

11:03 PM

### how to save a rendered page in html alongside all static assets via patchright in js esm

To save a rendered page alongside all its static assets (CSS, images, fonts, scripts) using **Patchright** in JavaScript (ESM), you have two primary approaches. Since [Patchright](https://scrapewise.ai/blogs/what-is-patchright-guide-2026) is a drop-in replacement for Playwright, standard Playwright network interception and Chrome DevTools Protocol (CDP) methods apply directly. [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

#### 1\. Intercept Network Responses & Rewrite Paths (Recommended)

To save a standalone `.html` file alongside a local `./assets/` folder so it renders offline without broken links, listen to the `response` event during navigation, save each static file locally, and rewrite the asset URLs in the rendered DOM before calling `page.content()`. [](https://stackoverflow.com/questions/74845527/extract-images-from-playwright-page-without-requesting-them-again)

javascript

```
import { chromium } from 'patchright';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const TARGET_URL = 'https://example.com';
const OUT_DIR = './saved_page';
const ASSETS_DIR = path.join(OUT_DIR, 'assets');

await fs.mkdir(ASSETS_DIR, { recursive: true });

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

// Map original URLs to local relative paths
const assetMap = new Map();

// 1. Intercept and save static assets as they load
page.on('response', async (response) => {
  try {
    const url = response.url();
    const type = response.request().resourceType();
    const status = response.status();

    // Filter for static assets and successful responses
    if (
      status >= 200 &&
      status < 300 &&
      ['stylesheet', 'image', 'font', 'script', 'media'].includes(type) &&
      !url.startsWith('data:')
    ) {
      const buffer = await response.body();
      const parsedUrl = new URL(url);
      const ext = path.extname(parsedUrl.pathname) || getFallbackExt(type);
      const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 10);
      const filename = `${hash}${ext}`;
      const localFilePath = path.join(ASSETS_DIR, filename);

      await fs.writeFile(localFilePath, buffer);
      assetMap.set(url, `./assets/${filename}`);
    }
  } catch {
    // Ignore failed or aborted background requests (e.g., preflight/redirects)
  }
});

// 2. Navigate and wait for dynamic rendering to settle
await page.goto(TARGET_URL, { waitUntil: 'networkidle' });

// 3. Rewrite asset URLs inside the live DOM to point to local files
await page.evaluate((entries) => {
  const map = new Map(entries);
  const attrs = ['src', 'href', 'poster'];

  document.querySelectorAll('*').forEach((el) => {
    for (const attr of attrs) {
      const val = el.getAttribute(attr);
      if (!val) continue;
      // Resolve relative URLs against the page's base URL
      const absUrl = new URL(val, document.baseURI).href;
      if (map.has(absUrl)) {
        el.setAttribute(attr, map.get(absUrl));
      }
    }
  });
}, Array.from(assetMap.entries()));

// 4. Save the final rendered HTML
const html = await page.content();
await fs.writeFile(path.join(OUT_DIR, 'index.html'), html, 'utf-8');

await browser.close();
console.log(`Saved index.html and ${assetMap.size} assets to ${OUT_DIR}`);

function getFallbackExt(resourceType) {
  const map = { stylesheet: '.css', script: '.js', image: '.png', font: '.woff2' };
  return map[resourceType] || '.bin';
}

```



#### 2\. Single-File Archive via CDP (`MHTML`)

If you do not strictly need a separate folder of raw asset files and just want a single self-contained file that browsers can open offline with all images and styles intact, you can use Chrome's native `Page.captureSnapshot` CDP command: [](https://github.com/microsoft/playwright/issues/13629)

javascript

```
import { chromium } from 'patchright';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://example.com', { waitUntil: 'networkidle' });

// Capture full page + all assets into one .mhtml file
const cdpSession = await context.newCDPSession(page);
const { data } = await cdpSession.send('Page.captureSnapshot', { format: 'mhtml' });

await fs.writeFile('./page.mhtml', data, 'utf-8');
await browser.close();

```



#### Important Caveats to Watch For

* **CSS `url()` references.** The DOM attribute rewriter in Approach 1 updates HTML tags (`<img>`, `<link>`, `<script>`), but background images or `@font-face` rules declared inside external `.css` files still point to remote URLs unless you also run a regex replacement on saved CSS text buffers.
* **Single-Page App (SPA) hydration.** If a framework like React or Next.js re-executes saved `<script>` tags when you open `index.html` locally, it may wipe out the pre-rendered DOM or throw CORS errors; strip `<script>` tags before saving if you only want a static visual snapshot.
* **Stealth footprint.** Note that `newCDPSession` in Approach 2 interacts with the Chrome DevTools Protocol; while `Page.captureSnapshot` does not trigger Patchright's patched `Runtime.enable` leak, running it after the page finishes loading avoids detection during initial page checks. [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)

If you'd like to refine the script for your specific target site, let me know:

* Whether you also need **CSS `url()` assets** (like background images and web fonts) rewritten inside downloaded stylesheets
* If the page uses **lazy-loading** on scroll or **shadow DOM** elements
* Whether you want **JavaScript stripped** so the saved HTML stays completely static offline

I can update the ESM snippet to handle those edge cases.

* [](https://stackoverflow.com/questions/40975902/nodejs-how-to-save-a-rendered-view-as-a-static-html-file)  
Stack Overflow  
NodeJS : How to save a rendered view as a static .html file?  
This question does not show any research effort; it is unclear or not useful. Save this question. Show activity on this post. i'm ...
* [](https://scrapewise.ai/blogs/what-is-patchright-guide-2026)  
Scrapewise  
What Is Patchright? Install, Patches, Limits (2026) - Scrapewise  
Patchright is a patched version of the Playwright driver. Its main patch avoids the Runtime.enable CDP call. It fixes fingerprint ...
* [](https://github.com/microsoft/playwright/issues/13629)  
GitHub  
\[Feature\] Ability to save a web page as HTML/MHTML · Issue #13629 · microsoft/playwright  
requesting a feature to save web pages as HTML/MHTML files for large documents and debugging reproduction. provided a CDP session ...

Show all

## is the filename content addressable

is the filename content addressable

11:20 PM

### is the filename content addressable

**No, the filename in that script is URL-addressed, not content-addressed.** It hashes the request `url` string rather than the downloaded file `buffer`.

#### Why That Matters

* **URL-addressed (`update(url)`):** Two identical files served from different URLs (such as CDN mirrors or cache-busted query strings) get saved as separate duplicate files. Conversely, if a URL's content changes on a later run, it still produces the exact same filename and overwrites the old file.
* **Content-addressed (`update(buffer)`):** Hashing the actual file bytes guarantees that identical assets always share one filename, and any change to a file's contents automatically generates a brand-new filename.

#### How to Make It Content-Addressed

Swap `url` for `buffer` inside `crypto.createHash()` and use SHA-256 instead of MD5 for stronger collision resistance:

javascript

```
const buffer = await response.body();
const parsedUrl = new URL(url);
const ext = path.extname(parsedUrl.pathname) || getFallbackExt(type);

// Hash the file bytes (buffer) instead of the URL string
const hash = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 16);
const filename = `${hash}${ext}`;
const localFilePath = path.join(ASSETS_DIR, filename);

// Optional: avoid rewriting the file if an identical asset was already saved
await fs.writeFile(localFilePath, buffer);
assetMap.set(url, `./assets/${filename}`);

```



Would you like to add **deduplication checks** (skipping `fs.writeFile` when the hash already exists on disk) or **content-type header detection** so extensionless CDN URLs always get accurate file extensions?

# how to get its hash given a file path in nodejs via some esm libs for content addressable storage

You can compute a file's hash for content-addressable storage (CAS) in Node.js using **pure ESM libraries** like `hasha` or `multiformats`, or with **built-in Node.js streams**. The right choice depends on whether you want a simple hex string or a self-describing Content Identifier (CID). [](https://www.npmjs.com/package/multiformats)

### 1\. Simple File Hashing with `hasha` (Pure ESM)

If your CAS system stores files by standard cryptographic digests (like SHA-256), [hasha](https://github.com/sindresorhus/hasha) is a popular pure-ESM wrapper around Node's crypto module. It automatically streams the file in a worker thread so it won't block your event loop or exhaust memory on large files. 

bash

```
npm install hasha

```



javascript

```
import { hashFile } from 'hasha';

// Computes SHA-256 hex digest via worker thread streaming
const hash = await hashFile('./path/to/file.bin', { algorithm: 'sha256' });
console.log(hash); 
// => 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'

```



### 2\. Self-Describing CIDs with `multiformats` (IPFS / IPLD Standard)

If you are building a future-proof CAS (like IPFS or AT Protocol) where the address encodes both the hashing algorithm and data format, use [multiformats](https://www.npmjs.com/package/multiformats). Because `multiformats` hashes byte arrays in memory, you can stream the file through Node's native `crypto` module first and wrap the raw digest into a **CIDv1**. [](https://github.com/multiformats/js-cid)

bash

```
npm install multiformats

```



javascript

```
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { CID } from 'multiformats/cid';
import * as raw from 'multiformats/codecs/raw';
import { create as createDigest } from 'multiformats/hashes/digest';

const SHA2_256_CODE = 0x12; // Multicodec table code for sha2-256

async function getFileCID(filePath) {
  const hash = createHash('sha256');
  await pipeline(createReadStream(filePath), hash);
  
  // Wrap the raw SHA-256 buffer into a Multihash digest, then a CIDv1
  const digest = createDigest(SHA2_256_CODE, new Uint8Array(hash.digest()));
  const cid = CID.createV1(raw.code, digest);
  
  return cid.toString(); // Base32 string by default
}

const cid = await getFileCID('./path/to/file.bin');
console.log(cid); 
// => 'bafkreifzjut3te2nhyekklss27nh3k72ysco7y32koao5eei66wof36n5e'

```



### 3\. Zero-Dependency Built-in ESM (`node:fs` \+ `node:crypto`)

If you prefer avoiding third-party packages, Node's `crypto.Hash` class acts as a writable stream. Pairing it with `stream/promises` gives you clean, non-blocking async code. [](https://beta.docs.nodejs.org/crypto/Hash)

javascript

```
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';

async function getFileHash(filePath, algorithm = 'sha256') {
  const hash = createHash(algorithm);
  await pipeline(createReadStream(filePath), hash);
  return hash.digest('hex');
}

const hash = await getFileHash('./path/to/file.bin');
console.log(hash);

```



### Quick Comparison

| Approach               | Output Format           | Best For                                                             | Memory Footprint                          |
| ---------------------- | ----------------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| **hasha**              | Hex / Base64 string     | Simple local or S3-backed CAS, high concurrency via worker threads.  | Low (streamed)                            |
| **multiformats**       | Base32 CID (bafkrei...) | Distributed CAS, algorithm agility, and IPFS compatibility.          | Low (when paired with node:crypto stream) |
| **Native node:crypto** | Hex / Base64 / Buffer   | Zero-dependency projects needing standard SHA-256 or BLAKE2b hashes. | Low (streamed)                            |

If you're designing the storage layer next, let me know:

* **File sizes** you expect to handle (small configs vs. multi-gigabyte media)
* Whether you need **content chunking** (like FastCDC for deduplicating modified files)

I can show you how to structure the directory sharding or chunking pipeline.

* [](https://beta.docs.nodejs.org/crypto/Hash)  
Node.js  
Hash | Node.js 26.13.0 Documentation  
The Hash class is a utility for creating hash digests of data. It can be used in one of two ways: As a stream that is both readabl...
* [](https://medium.com/@Yasirgaji/understanding-hashing-in-node-js-a-comprehensive-guide-4141a8406077)  
Medium·Yasir Gaji  
Understanding Hashing in Node.js: A Comprehensive Guide | by Yasir Gaji | Medium  
December 4, 2024 — Fundamentals: Hashing transforms input data into irreversible, fixed-length, deterministic, collision-resistant strings. Algorithm...
* [](https://www.geeksforgeeks.org/node-js/node-js-hash-digest-method/)  
GeeksforGeeks  
Node.js hash.digest() Method - GeeksforGeeks  
Apr 11, 2023 — Node.js hash.digest() Method. Last Updated : 11 Apr, 2023\. The hash.digest( ) method is an inbuilt function of the crypto module's...

Show all

# compare sha256 and md5 for cas

**SHA-256 is the clear winner for almost any modern Content-Addressable Storage (CAS) system.** It prevents malicious hash collisions and runs significantly faster than MD5 on modern CPUs with hardware cryptographic extensions. [](https://mojoauth.com/security-guides/md5-vs-sha-256)

In a CAS architecture, an object's hash serves as its unique address and deduplication key. Because the storage engine assumes identical hashes mean identical data, a hash collision causes silent data corruption or allows an attacker to overwrite legitimate files with malicious payloads.

### Key Differences for CAS

| Attribute                    | SHA-256                                     | MD5                                        |
| ---------------------------- | ------------------------------------------- | ------------------------------------------ |
| **Digest Size**              | 256 bits (64 hex characters)                | 128 bits (32 hex characters)               |
| **Collision Resistance**     | Cryptographically secure (128-bit security) | Broken (practical collision attacks exist) |
| **Modern Hardware Speed**    | \~2.6 to 3.4 GB/s (with SHA extensions)     | \~0.5 to 0.98 GB/s                         |
| **Software-Only Speed**      | \~88 MB/s (without hardware acceleration)   | \~534 MB/s (simpler math in pure software) |
| **Storage & Index Overhead** | 32 bytes raw per key                        | 16 bytes raw per key                       |

### How They Impact CAS Architecture

* **Data Integrity and Security.** MD5 is vulnerable to chosen-prefix collision attacks. If untrusted users can upload data to your CAS, an attacker can craft two different files with the exact same MD5 hash, poisoning your storage deduplication. SHA-256 eliminates this risk. [](https://security.stackexchange.com/questions/203344/how-likely-is-a-collision-using-md5-compared-to-sha256-for-checking-file-integr)
* **Throughput and Compute Cost.** Modern x86 and ARM processors include dedicated SHA hardware instructions. According to benchmarks cited on [Shattered.io](https://shattered.io/md5-vs-sha-256-2026/) and [Daniel Lemire's blog](https://lemire.me/blog/2025/01/11/javascript-hashing-speed-comparison-md5-versus-sha-256/), hardware-accelerated SHA-256 hashes data over three times faster than MD5 on current chips. MD5 only outperforms SHA-256 on legacy hardware or pure-software runtimes lacking crypto extensions. [](https://lemire.me/blog/2025/01/11/javascript-hashing-speed-comparison-md5-versus-sha-256/)
* **Metadata and Memory Footprint.** SHA-256 keys require twice as much space in memory indexes, database primary keys, and file paths compared to MD5\. Unless you are storing tens of billions of tiny objects in RAM-constrained lookup tables, the extra 16 bytes per entry is negligible. [](https://mojoauth.com/security-guides/md5-vs-sha-256)
* **Filesystem Fan-Out.** Both algorithms produce evenly distributed hex strings, making them equally effective for directory sharding (such as `ab/cd/abcdef...`) to avoid filesystem bottlenecks.

### Recommendation

* **Use SHA-256** as your default for any new CAS implementation. It guarantees tamper-proof deduplication and takes full advantage of modern CPU acceleration. [](https://shattered.io/md5-vs-sha-256-2026/)
* **Use MD5** only if you are maintaining a legacy system with fixed 128-bit schemas, operating in a strictly closed environment with zero untrusted inputs, or running on older embedded hardware without SHA instructions. (If you need extreme speed without cryptographic security, consider modern non-cryptographic hashes like BLAKE3 or xxHash instead of MD5). [](https://shattered.io/md5-vs-sha-256-2026/)

Are you designing a **new CAS system** or evaluating a **migration** from an existing MD5-based store? Let me know your **target hardware** or **expected object count**, and I can help with indexing strategies or migration paths.

* [](https://mojoauth.com/security-guides/md5-vs-sha-256)  
MojoAuth  
MD5 vs SHA256: Hash Differences and Checksums | MojoAuth Security Guides  
September 28, 2026 — MD5 outputs 128 bits … is cryptographically broken with practical collisions, and fails tamper checks; ensures 128-bit security.
* [](https://shattered.io/md5-vs-sha-256-2026/)  
shattered.io  
MD5 vs SHA-256: SHA-256 Is Faster on Some CPUs \[2026\]  
October 25, 2026 — MD5 is slower than SHA-256 and not as safe.” MD5's simpler math still runs faster in pure software. Both are designed to be fast, ...
* [](https://security.stackexchange.com/questions/203344/how-likely-is-a-collision-using-md5-compared-to-sha256-for-checking-file-integr)  
Information Security Stack Exchange  
How likely is a collision using MD5 compared to SHA256 (for ...  
February 11, 2019 — MD5 is considered 'broken' because it is vulnerable to collision attacks, allowing attackers to intentionally create two different...

Show all

# how to create sha256 for cas for response.body buffer in nodejs via esm libs

To generate a SHA-256 hash for Content-Addressable Storage (CAS) from a `response.body` buffer in Node.js using ES Modules (ESM), use the built-in **`node:crypto`** module.

### Hashing a Buffer in Memory

If you have already read the response into a `Buffer` or `Uint8Array` (for example, via `response.arrayBuffer()`), pass it directly to `createHash`.

javascript

```
import { createHash } from 'node:crypto';

async function getCasHash(response) {
  // Convert the Fetch API response body into a Buffer
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Generate the SHA-256 hex digest
  const hash = createHash('sha256').update(buffer).digest('hex');
  return hash;
}

```



### Streaming Large Responses (Recommended for CAS)

In Content-Addressable Storage systems, responses can be large. Instead of loading the entire buffer into memory at once, pipe the stream directly into the hash object.

javascript

```
import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

async function streamCasHash(response) {
  const hash = createHash('sha256');
  
  // Convert the Web ReadableStream (response.body) to a Node.js stream
  const nodeStream = Readable.fromWeb(response.body);

  // Pipe the stream into the hasher
  await pipeline(nodeStream, hash);

  return hash.digest('hex');
}

```



### Key Considerations for CAS

* **Output Encoding:** Use `.digest('hex')` for standard 64-character hexadecimal keys, or `.digest('base64url')` if you need shorter, URL-safe filenames.
* **Stream Consumption:** Reading `response.body` to calculate the hash consumes the stream. If you also need to save the file to disk or S3, clone the response first using `response.clone()` or use a `PassThrough` stream to write and hash simultaneously.

If you are also writing the file to storage at the same time, would you like to see how to **simultaneously hash and save the stream** to disk without reading it twice?

# what if i pass response body buffer into writeFileSync(path, content, 'utf-8') nodejs

When you pass a Node.js `Buffer` into `fs.writeFileSync(path, content, 'utf-8')`, **the `'utf-8'` encoding option is completely ignored**. Node.js writes the raw bytes of the buffer directly to the file without trying to decode or re-encode them. [](https://blog.logrocket.com/using-writefilesync-node-js/)

### How `writeFileSync` Handles a Buffer

* **Raw byte writing.** Because a `Buffer` already represents raw binary data, Node.js bypasses character encoding conversions. It simply dumps the exact bytes from memory onto the disk. [](https://blog.logrocket.com/using-writefilesync-node-js/)
* **Encoding option behavior.** The third argument (`'utf-8'`) only applies when `content` is a JavaScript `string`. Passing a `Buffer` overrides the options parameter's encoding setting. [](https://blog.logrocket.com/using-writefilesync-node-js/)
* **Binary safety.** If your response body is a binary file (like a PDF, PNG, or ZIP), passing `'utf-8'` will **not** corrupt the file, provided `content` is genuinely a `Buffer`.

### When You Might Run Into Issues

* **Accidental string conversion.** If you converted the response body to a string before passing it in (for example, calling `response.text()` instead of `response.arrayBuffer()`), binary files will get corrupted. In that scenario, invalid UTF-8 byte sequences get replaced with the `U+FFFD` replacement character (\`\`).
* **Synchronous blocking.** Using `writeFileSync` blocks the Node.js event loop until the entire file finishes writing to disk. For large HTTP responses or concurrent server requests, `await fs.promises.writeFile(path, buffer)` is preferred. [](https://www.geeksforgeeks.org/node-js/node-js-fs-writefilesync-method/)

### Best Practice

For clarity and cleaner code, omit the encoding argument altogether when writing a `Buffer`: [](https://blog.logrocket.com/using-writefilesync-node-js/)

javascript

```
// Recommended when `buffer` is a Buffer
fs.writeFileSync(path, buffer);

// Or asynchronous (non-blocking)
await fs.promises.writeFile(path, buffer);

```



If you are seeing corrupted files or errors, let me know:

* **How you are fetching** the response (`fetch`, `axios`, `http`?)
* **What type of file** you are saving (JSON, image, PDF?)

I can help you check if the buffer is being decoded properly before it reaches `writeFileSync`.

* [](https://blog.logrocket.com/using-writefilesync-node-js/)  
LogRocket Blog  
Using the writeFileSync method in Node.js - LogRocket Blog  
Jul 28, 2022 — The encoding of the Buffer class used as the data in the writeFileSync method will override the encoding here.
* [](https://www.geeksforgeeks.org/node-js/node-js-fs-writefilesync-method/)  
GeeksforGeeks  
Node.js fs.writeFileSync() Method - GeeksforGeeks  
March 2, 2026 — Synchronous file writing, blocks event loop until complete, creates non-existent files, overwrites existing content by default.
* [](https://www.youtube.com/watch?v=ynpsQzv-OXM&t=12)  
YouTube·Arya AI  
writeFile vs writeFileSync for Absolute Beginners | Node JS  
Jul 25, 2023 — the \`writeFileSync\` method operates synchronously, blocking further code execution until the file write operation is complete.  
6m

# how to inline all url inside a string of html and its url given a map of absolute url of assets to replacements in nodejs via libs

To replace or inline all URLs inside an HTML string using Node.js, combine an HTML parser like **cheerio** (or **parse5** / **posthtml**) with Node's native **`URL`** class. [](https://nodejs.org/api/url.html)

Using a real DOM parser instead of regular expressions prevents accidentally corrupting text content, inline scripts, or complex attribute structures.

### Step 1: Install Dependencies

Install `cheerio` to parse and manipulate the HTML string, and `postcss` with `postcss-url` if you also need to rewrite `url(...)` inside `<style>` tags and inline `style=""` attributes.

bash

```
npm install cheerio postcss postcss-url

```



### Step 2: Implementation

Given `htmlString`, the page's `baseUrl`, and an `assetMap` (mapping absolute URLs to replacement strings or data URIs), you can resolve every relative URL against `baseUrl` and look it up in your map.

javascript

```
import * as cheerio from 'cheerio';
import postcss from 'postcss';
import postcssUrl from 'postcss-url';

/**
 * Replaces URLs in HTML attributes and CSS blocks using an absolute-URL lookup map.
 *
 * @param {string} html - Raw HTML string
 * @param {string} baseUrl - The URL where this HTML came from (used to resolve relative links)
 * @param {Map<string, string> | Record<string, string>} assetMap - Map of absolute URL -> replacement URL/data-URI
 * @returns {Promise<string>}
 */
export async function inlineHtmlAssets(html, baseUrl, assetMap) {
  const lookup = assetMap instanceof Map 
    ? assetMap 
    : new Map(Object.entries(assetMap));

  const $ = cheerio.load(html);

  // Helper to resolve a raw URL against baseUrl and return its replacement if found
  const resolveAndReplace = (rawUrl) => {
    if (!rawUrl || rawUrl.startsWith('data:') || rawUrl.startsWith('#')) {
      return rawUrl;
    }
    try {
      const absoluteUrl = new URL(rawUrl.trim(), baseUrl).href;
      return lookup.has(absoluteUrl) ? lookup.get(absoluteUrl) : rawUrl;
    } catch {
      // Ignore malformed URLs (e.g., template syntax like {{url}})
      return rawUrl;
    }
  };

  // Helper to rewrite url(...) inside CSS strings
  const rewriteCss = async (cssText) => {
    const result = await postcss([
      postcssUrl({
        url: (asset) => resolveAndReplace(asset.url),
      }),
    ]).process(cssText, { from: undefined });
    return result.css;
  };

  // 1. Standard single-URL attributes (src, href, poster, data, etc.)
  const urlAttributes = ['src', 'href', 'poster', 'data', 'action', 'formaction'];
  for (const attr of urlAttributes) {
    $(`[${attr}]`).each((_, el) => {
      const currentVal = $(el).attr(attr);
      const nextVal = resolveAndReplace(currentVal);
      if (nextVal !== currentVal) {
        $(el).attr(attr, nextVal);
      }
    });
  }

  // 2. Responsive image srcset attributes (comma-separated "url descriptor" pairs)
  $('[srcset]').each((_, el) => {
    const srcset = $(el).attr('srcset');
    const updatedSrcset = srcset
      .split(',')
      .map((entry) => {
        const parts = entry.trim().split(/\s+/);
        if (parts.length === 0) return entry;
        parts[0] = resolveAndReplace(parts[0]);
        return parts.join(' ');
      })
      .join(', ');
    $(el).attr('srcset', updatedSrcset);
  });

  // 3. Inline style="..." attributes
  const inlineStyledEls = $('[style]').toArray();
  for (const el of inlineStyledEls) {
    const styleVal = $(el).attr('style');
    if (styleVal && styleVal.includes('url(')) {
      $(el).attr('style', await rewriteCss(styleVal));
    }
  }

  // 4. <style> blocks
  const styleTags = $('style').toArray();
  for (const el of styleTags) {
    const cssText = $(el).html();
    if (cssText && cssText.includes('url(')) {
      $(el).html(await rewriteCss(cssText));
    }
  }

  return $.html();
}

```



### Example Usage

javascript

```
const html = `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/assets/main.css">
  <style>
    .hero { background-image: url('../img/banner.png'); }
  </style>
</head>
<body>
  <img src="logo.svg" srcset="logo.svg 1x, https://example.com 2x">
  <div style="background: url('/img/icon.png')"></div>
</body>
</html>
`;

const pageUrl = 'https://example.com';

const replacements = {
  'https://example.com': 'data:text/css;base64,Ym9keXt9',
  'https://example.com': 'data:image/png;base64,iVBORw0KGgo...',
  'https://example.comlogo.svg': 'data:image/svg+xml;utf8,<svg></svg>',
  'https://example.com': 'data:image/svg+xml;utf8,<svg></svg>',
  'https://example.com': 'data:image/png;base64,R0lGODlh...',
};

const inlinedHtml = await inlineHtmlAssets(html, pageUrl, replacements);
console.log(inlinedHtml);

```



### Key Details to Keep in Mind

* **`<base>` tag handling.** If your HTML documents might contain a `<base href="...">` tag, read `$('base').attr('href')` first and resolve it against `pageUrl` before using it as your `baseUrl`.
* **Query strings and hashes.** `new URL(rawUrl, baseUrl).href` preserves query parameters (`?v=123`) and fragments (`#section`). If your asset map keys strip query strings, normalize both sides using `urlObj.origin + urlObj.pathname`.
* **Fragment preservation.** If you only want to parse full fragments rather than wrapping output in `<html><head><body>`, pass `null, false` as the second and third arguments to `cheerio.load(html, null, false)`.

If you'd like to tailor this further, let me know:

* Whether your HTML input is a **full document** or a **partial HTML snippet**
* Whether you also need to **inline `<link rel="stylesheet">` or `<script>` tags** directly into `<style>` and `<script>` blocks instead of replacing their `href`/`src` with data URIs

I can adjust the parser configuration and tag replacement logic to fit your exact pipeline.

* [](https://nodejs.org/api/url.html)  
Node.js  
URL | Node.js v26.8.1 Documentation  
node:url provides utilities for URL resolution and parsing via WHATWG and Legacy APIs. methods like URL.createObjectURL, URL.canPa...

# use snake case. write inline_assets(*html*, *url*, *assets*), inline all url inside a string of html and its url given a map of absolute url of assets to replacements in nodejs via libs, handle srcset, use cheerio srcset postcss esm

## use snake case. write inline_assets(*html*, *url*, *assets*), inline all url inside a string of html and its url given a map of absolute url of assets to replacements in nodejs via libs, handle srcset, use cheerio srcset postcss esm

Below is an ESM implementation using `cheerio`, `srcset`, and `postcss`.

It:

- Resolves relative URLs against `url`.
- Replaces matching absolute asset URLs using `assets` (`Map` or plain object).
- Handles `src`, `href`, `poster`, `srcset`, CSS `url()` and `@import`.
- Handles inline `style` attributes and `<style>` elements.
- Preserves unmatched URLs.

### **Install**

```
npm install cheerio srcset postcss
```

### **Implementation**

```

import * as cheerio from 'cheerio';
import postcss from 'postcss';
import { parse as parse_srcset, stringify as stringify_srcset } from 'srcset';

const url_attributes = [
  'src',
  'href',
  'poster',
  'action',
  'formaction',
  'data',
  'cite',
  'background',
  'xlink:href',
];

export function inline_assets(html, url, assets) {
  const asset_map = assets instanceof Map
    ? assets
    : new Map(Object.entries(assets));

  const base_url = new URL(url);

  function replace_url(value) {
    if (!value || value.startsWith('#')) {
      return value;
    }

    let absolute_url;

    try {
      absolute_url = new URL(value, base_url).href;
    } catch {
      return value;
    }

    return asset_map.get(absolute_url) ?? value;
  }

  function replace_srcset(value) {
    try {
      const candidates = parse_srcset(value);

      return stringify_srcset(
        candidates.map(candidate => ({
          ...candidate,
          url: replace_url(candidate.url),
        })),
      );
    } catch {
      return value;
    }
  }

  function replace_css(css) {
    const root = postcss.parse(css);

    root.walkDecls(decl => {
      decl.value = replace_css_urls(decl.value);
    });

    root.walkAtRules('import', rule => {
      rule.params = replace_css_urls(rule.params);
    });

    return root.toString();
  }

  function replace_css_urls(value) {
    return value.replace(
      /url\(\s*(?:(["'])(.*?)\1|([^)]*?))\s*\)/gi,
      (match, quote, quoted_url, unquoted_url) => {
        const original_url = quoted_url ?? unquoted_url.trim();
        const replacement = replace_url(original_url);

        if (replacement === original_url) {
          return match;
        }

        const output_quote = quote || '"';

        return `url(${output_quote}${replacement}${output_quote})`;
      },
    );
  }

  const $ = cheerio.load(html, {
    decodeEntities: false,
  });

  $('*').each((_, element) => {
    const node = $(element);

    for (const attribute of url_attributes) {
      const value = node.attr(attribute);

      if (value !== undefined) {
        node.attr(attribute, replace_url(value));
      }
    }

    const srcset = node.attr('srcset');

    if (srcset !== undefined) {
      node.attr('srcset', replace_srcset(srcset));
    }

    const style = node.attr('style');

    if (style !== undefined) {
      node.attr('style', replace_css(style));
    }
  });

  $('style').each((_, element) => {
    const node = $(element);

    node.text(replace_css(node.html() ?? ''));
  });

  return $.html();
}

```

### **Usage**

```
const html = `
  <img
    src="/images/logo.png"
    srcset="/images/small.png 1x, /images/large.png 2x"
    style="background-image: url('/images/bg.png')"
  />

  <link rel="stylesheet" href="/styles/main.css" />

  <style>
    .hero {
      background: url('/images/hero.png');
    }
  </style>
`;

const assets = new Map([
  ['https://example.com/images/logo.png', 'data:image/png;base64,LOGO'],
  ['https://example.com/images/small.png', 'data:image/png;base64,SMALL'],
  ['https://example.com/images/large.png', 'data:image/png;base64,LARGE'],
  ['https://example.com/images/bg.png', 'data:image/png;base64,BG'],
  ['https://example.com/images/hero.png', 'data:image/png;base64,HERO'],
  ['https://example.com/styles/main.css', 'data:text/css;base64,CSS'],
]);

const result = inline_assets(
  html,
  'https://example.com/page/index.html',
  assets,
);

console.log(result);
```

### **Important implementation notes**

1. `srcset` must be parsed rather than split on commas because data URLs can contain commas.
2. `postcss` handles CSS declaration parsing, but the `url()` replacement above uses a regular expression. For fully robust CSS parsing (including escaped parentheses and quoted strings), I'd recommend replacing that part with a dedicated CSS value parser such as `postcss-value-parser`.
3. This implementation replaces URL references, not the contents of external stylesheets fetched through `<link>`. It also doesn't recursively inline CSS files referenced by `@import`.

I can also provide a fully recursive version that fetches linked CSS, processes its dependencies, and inlines everything into the HTML.

## it should inline <img class="central-featured-logo" src="./asset/75038605ff9e35cc.png" srcset="portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png 2x" width="200" height="183" alt=""> properly

```
Worked for 1m 20s
The srcset entry needs to be resolved against the page URL just like src; it must not be treated as a plain comma-separated string. I’m checking the package API so the corrected ESM example uses its actual parser shape.

Corrected srcset handling, updated image inlining, and tested sample output

Implemented the replacement 亚洲国产


Searched the web for npm srcset package parse stringify API JavaScript
```

The issue is the `srcset` import in my previous implementation. The `srcset` npm package exports `parseSrcset`**&#x20;and&#x20;**`stringifySrcset`, not `parse` and `stringify`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://www.npmjs.com\&sz=32)

npm



Use these named exports, and resolve every candidate against the same page URL used for `src`.

### **Corrected implementation**

```

import * as cheerio from 'cheerio';
import postcss from 'postcss';
import {
  parseSrcset as parse_srcset,
  stringifySrcset as stringify_srcset,
} from 'srcset';

export function inline_assets(html, url, assets) {
  const asset_entries = assets instanceof Map
    ? [...assets.entries()]
    : Object.entries(assets);

  const asset_map = new Map(
    asset_entries.map(([asset_url, replacement]) => [
      new URL(asset_url).href,
      replacement,
    ]),
  );

  const base_url = new URL(url);

  function replace_url(value) {
    if (!value || value.startsWith('#')) {
      return value;
    }

    try {
      const absolute_url = new URL(value.trim(), base_url).href;
      return asset_map.get(absolute_url) ?? value;
    } catch {
      return value;
    }
  }

  function replace_srcset(value) {
    try {
      const candidates = parse_srcset(value);

      return stringify_srcset(
        candidates.map(candidate => ({
          ...candidate,
          url: replace_url(candidate.url),
        })),
      );
    } catch {
      return value;
    }
  }

  function replace_css_urls(value) {
    return value.replace(
      /url\(\s*(?:(["'])(.*?)\1|([^)]*?))\s*\)/gi,
      (match, quote, quoted_url, unquoted_url) => {
        const original_url = quoted_url ?? unquoted_url.trim();
        const replacement = replace_url(original_url);

        if (replacement === original_url) {
          return match;
        }

        const output_quote = quote || '"';

        return `url(${output_quote}${replacement}${output_quote})`;
      },
    );
  }

  function replace_css(css) {
    const root = postcss.parse(css);

    root.walkDecls(decl => {
      decl.value = replace_css_urls(decl.value);
    });

    root.walkAtRules('import', rule => {
      rule.params = replace_css_urls(rule.params);

      // Handle @import "file.css" as well as @import url(file.css).
      const match = rule.params.match(/^(['"])(.*?)\1$/);

      if (match) {
        rule.params = `${match[1]}${replace_url(match[2])}${match[1]}`;
      }
    });

    return root.toString();
  }

  const $ = cheerio.load(html, {
    decodeEntities: false,
  });

  $('*').each((_, element) => {
    const node = $(element);

    for (const attribute of [
      'src',
      'href',
      'poster',
      'action',
      'formaction',
      'data',
      'cite',
      'background',
      'xlink:href',
    ]) {
      const value = node.attr(attribute);

      if (value !== undefined) {
        node.attr(attribute, replace_url(value));
      }
    }

    const srcset = node.attr('srcset');

    if (srcset !== undefined) {
      node.attr('srcset', replace_srcset(srcset));
    }

    const style = node.attr('style');

    if (style !== undefined) {
      node.attr('style', replace_css(style));
    }
  });

  $('style').each((_, element) => {
    const node = $(element);
    node.text(replace_css(node.html() ?? ''));
  });

  return $.html();
}

```

### **Your exact example**

```
const html = `
<img
  class="central-featured-logo"
  src="./asset/75038605ff9e35cc.png"
  srcset="portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png 2x"
  width="200"
  height="183"
  alt=""
>`;
```

```
const assets = new Map([
  [
    'https://www.wikipedia.org/asset/75038605ff9e35cc.png',
    'data:image/png;base64,BASE64_IMAGE_1',
  ],
  [
    'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png',
    'data:image/png;base64,BASE64_IMAGE_2',
  ],
]);

const result = inline_assets(
  html,
  'https://www.wikipedia.org/',
  assets,
);
```

Expected result

```
<img
  class="central-featured-logo"
  src="data:image/png;base64,BASE64_IMAGE_1"
  srcset="data:image/png;base64,BASE64_IMAGE_2 2x"
  width="200"
  height="183"
  alt=""
>
```

**Important:** Both relative URLs resolve independently against the supplied page URL. The `srcset` descriptor (`2x`) is preserved, and the replacement data URI is not mistaken for another candidate.

This handles HTML URL attributes and CSS references, but does not recursively fetch external stylesheets or resources.

## it doesnt fetch such 2x variant at all, but it doesnt display when you just inline the real img wo removing the srcset attr, why

Because the browser treats `src` and `srcset` as competing image sources.

When an `<img>` has `srcset`, the browser uses the `srcset` candidate-selection algorithm rather than necessarily displaying `src`.

In your example:

```
<img
  src="data:image/png;base64,..."
  srcset="portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png 2x"
>
```

The browser sees a `2x` candidate in `srcset`. Depending on device pixel ratio and browser selection, it can choose that candidate instead of `src`.

If you haven't inlined the `2x` asset, the browser attempts to fetch the original relative URL. If that URL is unavailable, the image can fail even though `src` contains valid image data.

**The correct fix:** If you cannot inline every `srcset` candidate, remove `srcset` after successfully inlining `src`.

For example, change the implementation to:

```
$('img').each((_, element) => {
  const node = $(element);
  const src = node.attr('src');

  if (src) {
    const replacement = replace_url(src);

    if (replacement !== src) {
      node.attr('src', replacement);
      node.removeAttr('srcset');
      node.removeAttr('sizes');
    }
  }
});
```

Alternatively, if you want to preserve responsive images, keep `srcset` only when **all its candidates have been successfully replaced**.

My recommendation for an HTML self-contained snapshot/inliner:

- Inline `src`.
- Inline every `srcset` candidate when available.
- If any candidate remains external, remove `srcset` and `sizes`.
- Preserve `src` as the fallback.

This prevents the browser from selecting an external image that your inliner hasn't embedded.

## update inline_assets

Updated `inline_assets` to ensure images display correctly:

- Replaces `src` and `srcset` URLs.
- Preserves `srcset` only when every candidate is successfully inlined.
- Removes `srcset` and `sizes` if any candidate remains external.
- Keeps the successfully inlined `src` as fallback.
- Handles CSS `url()`, `@import`, inline styles, and `<style>` elements.
- Uses snake_case throughout.

```

import * as cheerio from 'cheerio';
import postcss from 'postcss';
import {
  parseSrcset as parse_srcset,
  stringifySrcset as stringify_srcset,
} from 'srcset';

export function inline_assets(html, url, assets) {
  const asset_entries = assets instanceof Map
    ? [...assets.entries()]
    : Object.entries(assets);

  const asset_map = new Map(
    asset_entries.map(([asset_url, replacement]) => [
      new URL(asset_url).href,
      replacement,
    ]),
  );

  const base_url = new URL(url);

  function resolve_url(value) {
    if (!value || value.startsWith('#')) {
      return null;
    }

    try {
      return new URL(value.trim(), base_url).href;
    } catch {
      return null;
    }
  }

  function replace_url(value) {
    const absolute_url = resolve_url(value);

    if (!absolute_url) {
      return {
        value,
        replaced: false,
      };
    }

    if (!asset_map.has(absolute_url)) {
      return {
        value,
        replaced: false,
      };
    }

    return {
      value: asset_map.get(absolute_url),
      replaced: true,
    };
  }

  function replace_srcset(value) {
    try {
      const candidates = parse_srcset(value);

      if (!candidates.length) {
        return {
          value,
          replaced: false,
          complete: false,
        };
      }

      const replacements = candidates.map(candidate => ({
        ...candidate,
        ...replace_url(candidate.url),
      }));

      const complete = replacements.every(
        candidate => candidate.replaced,
      );

      return {
        value: complete
          ? stringifySrcset(replacements.map(({ replaced, ...candidate }) => candidate))
          : value,
        replaced: replacements.some(candidate => candidate.replaced),
        complete,
      };
    } catch {
      return {
        value,
        replaced: false,
        complete: false,
      };
    }
  }

  function replace_css_urls(value) {
    return value.replace(
      /url\(\s*(?:(["'])(.*?)\1|([^)]*?))\s*\)/gi,
      (match, quote, quoted_url, unquoted_url) => {
        const original_url = quoted_url ?? unquoted_url.trim();
        const replacement = replace_url(original_url);

        if (!replacement.replaced) {
          return match;
        }

        const output_quote = quote || '"';

        return `url(${output_quote}${replacement.value}${output_quote})`;
      },
    );
  }

  function replace_css(css) {
    const root = postcss.parse(css);

    root.walkDecls(decl => {
      decl.value = replace_css_urls(decl.value);
    });

    root.walkAtRules('import', rule => {
      rule.params = replace_css_urls(rule.params);

      const match = rule.params.match(/^(['"])(.*?)\1$/);

      if (match) {
        const replacement = replace_url(match[2]);

        if (replacement.replaced) {
          rule.params = `${match[1]}${replacement.value}${match[1]}`;
        }
      }
    });

    return root.toString();
  }

  const $ = cheerio.load(html, {
    decodeEntities: false,
  });

  $('*').each((_, element) => {
    const node = $(element);

    // Handle image sources separately.
    if (element.tagName === 'img') {
      const src = node.attr('src');

      if (src !== undefined) {
        const replacement = replace_url(src);

        if (replacement.replaced) {
          node.attr('src', replacement.value);
        }
      }

      const srcset = node.attr('srcset');

      if (srcset !== undefined) {
        const result = replace_srcset(srcset);

        if (result.complete) {
          node.attr('srcset', result.value);
        } else {
          // Prevent browser selection of unavailable external candidates.
          node.removeAttr('srcset');
          node.removeAttr('sizes');
        }
      }
    } else {
      for (const attribute of [
        'src',
        'href',
        'poster',
        'action',
        'formaction',
        'data',
        'cite',
        'background',
        'xlink:href',
      ]) {
        const value = node.attr(attribute);

        if (value !== undefined) {
          const replacement = replace_url(value);

          if (replacement.replaced) {
            node.attr(attribute, replacement.value);
          }
        }
      }

      const srcset = node.attr('srcset');

      if (srcset !== undefined) {
        const result = replace_srcset(srcset);

        if (result.complete) {
          node.attr('srcset', result.value);
        } else {
          node.removeAttr('srcset');
          node.removeAttr('sizes');
        }
      }
    }

    const style = node.attr('style');

    if (style !== undefined) {
      node.attr('style', replace_css(style));
    }
  });

  $('style').each((_, element) => {
    const node = $(element);
    node.text(replace_css(node.html() ?? ''));
  });

  return $.html();
}

```

**One important behavior:** If `srcset` contains even one unavailable candidate, the entire attribute is removed rather than retaining a partially inlined responsive source set. This avoids broken image selection on high-DPI displays.

For your Wikipedia example, if the 2x image is missing from `assets`, the resulting `<img>` will use the inlined `src` alone.

# use snake case. write santinize(html) in js to remove all dynamic stuff like script whatever in an html string using cheerio esm, mimicing mhtml.

Using Cheerio ESM, you can remove scripts, styles, embedded content, event handlers, dynamic attributes, and other elements that could execute or mutate the document.

This implementation uses **snake_case** and aims to produce a static, MHTML-like HTML snapshot.

```

import cheerio from "cheerio";

export function santinize(html) {
  const $ = cheerio.load(html, {
    xml: false,
    decodeEntities: false,
  });

  // Remove executable or dynamically rendered elements.
  const remove_tags = [
    "script",
    "noscript",
    "style",
    "link",
    "iframe",
    "frame",
    "frameset",
    "object",
    "embed",
    "applet",
    "portal",
    "fencedframe",
    "template",
    "canvas",
    "svg",
    "math",
    "audio",
    "video",
    "source",
    "track",
  ];

  $(remove_tags.join(",")).remove();

  // Remove elements that can execute code or submit data.
  $("form").each((_, el) => {
    $(el).replaceWith($(el).contents());
  });

  $("input, button, select, textarea").remove();

  // Remove event handlers, dynamic attributes, and unsafe URLs.
  const dynamic_attrs = [
    /^on/i,               // onclick, onload, etc.
    /^data-/i,            // data-* dynamic state
    /^aria-/i,            // optional: remove dynamic accessibility state
    /^hx-/i,              // htmx
    /^x-/i,               // Alpine.js
    /^ng-/i,              // Angular
    /^v-/i,               // Vue
    /^:|^@/,              // Vue shorthand
    /^bind:/i,
    /^wire:/i,            // Livewire
    /^phx-/i,             // Phoenix LiveView
    /^svelte-/i,
  ];

  const url_attrs = [
    "href",
    "src",
    "srcset",
    "action",
    "formaction",
    "poster",
    "xlink:href",
  ];

  $("*").each((_, el) => {
    const $el = $(el);

    for (const attr of Object.keys(el.attribs || {})) {
      const value = $el.attr(attr) || "";

      // Remove dynamic attributes.
      if (dynamic_attrs.some((pattern) => pattern.test(attr))) {
        $el.removeAttr(attr);
        continue;
      }

      // Remove inline styles.
      if (attr === "style") {
        $el.removeAttr(attr);
        continue;
      }

      // Remove dangerous URL schemes.
      if (url_attrs.includes(attr.toLowerCase())) {
        const normalized = value
          .replace(/[\u0000-\u0020]+/g, "")
          .toLowerCase();

        if (
          normalized.startsWith("javascript:") ||
          normalized.startsWith("vbscript:") ||
          normalized.startsWith("data:text/html")
        ) {
          $el.removeAttr(attr);
        }
      }
    }
  });

  // Remove empty metadata and resource hints.
  $("meta[http-equiv='refresh']").remove();

  // Remove SVG and other potentially executable namespace attributes.
  $("*").removeAttr("xmlns");

  // Remove empty elements left behind by sanitization.
  $("*").each((_, el) => {
    const $el = $(el);

    if (
      !["html", "head", "body", "br", "hr", "img"].includes(
        el.tagName?.toLowerCase()
      ) &&
      $el.contents().length === 0 &&
      !$el.text().trim()
    ) {
      // Preserve structural elements.
      if (!["div", "span", "p"].includes(el.tagName?.toLowerCase())) {
        $el.remove();
      }
    }
  });

  return $.html();
}

```

### **Important considerations**

1. **Cheerio is not a browser.** It cannot execute JavaScript or capture DOM changes produced by JavaScript. For an actual rendered snapshot, use Playwright first, then sanitize the resulting HTML.
2. **MHTML is more than static HTML.** It can preserve images, CSS, and other resources as MIME parts. The implementation above removes CSS and does not package resources.
3. **Security:** This is a conservative cleanup, not a complete security-grade HTML sanitizer. For untrusted HTML, consider an allowlist-based sanitizer such as DOMPurify with an appropriate server-side DOM implementation.

**One recommendation:** If your goal is to mimic a browser's saved-page snapshot, I'd preserve images, links, text, and semantic layout while stripping executable behavior, rather than deleting all CSS and SVG.

# use snake case. write santinize(html) in js to remove all dynamic stuff like script whatever in an html string using dompurify

## use snake case. write santinize(html) in js to remove all dynamic stuff like script whatever in an html string using dompurify


