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

```
 ~ % sudo systemctl restart launch
```


