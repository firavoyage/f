<!-- https://claude.ai/chat/54a91699-a874-488a-bfaf-af9f14b1ecb6 -->

<!-- chatgpt: Error in message stream (search enabled, google account). same problem yesterday, idk. -->

<!-- pasting text claude code becomes something like attachment... might be good. but weird, unexpected. and even... i could not find the setting to turn it off. -->

<!-- https://chatgpt.com/c/6968d100-89a0-832b-9a3b-28752b85b247 -->

# 1

creating a web extension

fix:

- the browser could not be launched. when there's only one tab, dont close it.
- does not support incognito mode

some code maybe related. feel free to ask for more.

folder shape

```
fira@Fira ~/Documents/f/intention
 % ls
background.js  manifest.json  newtab.css  newtab.html  newtab.js  settings.html  settings.js
```

manifest.json

```
{
  "manifest_version": 3,
  "name": "Intention",
  "version": "1.0",
  "description": "A focused, full-screen workflow with minimal distractions.",
  "permissions": [
    "tabs",
    "storage"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "chrome_url_overrides": {
    "newtab": "newtab.html"
  },
  "action": {
    "default_popup": "settings.html",
    "default_title": "Intention Settings"
  }
}
```

background.js

```
console.log("[Intention] Background started");

// When a new tab is created, if it's the default new tab,
// close it and open your custom newtab page normally.
chrome.tabs.onCreated.addListener(async (tab) => {
  try {
    // 'chrome://newtab/' is how Chrome names a freshly created new tab
    if (tab.pendingUrl === "chrome://newtab/") {
      console.log("[Intention] Detected new tab, replacing…");

      // Close the default new tab
      await chrome.tabs.remove(tab.id);

      // Open your custom new tab page as a normal tab
      const newTab = await chrome.tabs.create({
        url: chrome.runtime.getURL("newtab.html"),
      });
      console.log("[Intention] Opened custom tab:", newTab);
    }
  } catch (err) {
    console.error("[Intention] Error handling new tab:", err);
  }
});
```

newtab.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Intention</title>
    <link rel="stylesheet" href="newtab.css" />
  </head>
  <body>
    <div id="wallpaper"></div>
    <input
      id="omnibox"
      type="text"
      placeholder=""
      autocomplete="off"
    />

    <script src="newtab.js"></script>
  </body>
</html>
```

newtab.js

```
/* newtab.js
 *
 * Clear, small modules:
 *  - getSettings / saveSettings: storage access
 *  - applyWallpaper: keeps existing wallpaper behavior (non-visible in settings UI)
 *  - isProbablyURL / normalizeURL: concrete URL detection + normalization (accepts "chatgpt.com")
 *  - handleEnter: main behavior
 *
 * Behaviors:
 *  - Empty input: if settings.enterUrl is set, navigate there
 *  - Probable URL: normalize + navigate
 *  - Otherwise: perform search using settings.searchUrl (supporting %s)
 */

console.log("[Intention] New tab script loaded");

const omnibox = document.getElementById("omnibox");
const wallpaperDiv = document.getElementById("wallpaper");

/* Storage helpers */
async function getSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get({ settings: {} }, (res) => {
      resolve(res.settings || {});
    });
  });
}

async function saveSettings(settings) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ settings }, () => resolve());
  });
}

/* Wallpaper: if a wallpaper exists in storage, keep showing it.
   Settings UI no longer exposes wallpaper, but we preserve it. */
async function applyWallpaper(settings) {
  if (settings.wallpaper) {
    wallpaperDiv.style.background = `url(${settings.wallpaper}) center/cover no-repeat`;
  } else {
    wallpaperDiv.style.background = "black";
  }
}

/* URL detection:
   - If input contains whitespace -> not a URL (search)
   - If input starts with a known scheme (http(s)://, about:, chrome:) -> URL
   - If input equals 'localhost' or starts with 'localhost:' -> URL
   - If input looks like an IPv4 address (e.g. 127.0.0.1 or 192.168.0.5:3000) -> URL
   - If input contains a dot and no spaces (e.g. chatgpt.com, sub.domain.org) -> URL
*/
function isProbablyURL(input) {
  if (!input) return false;
  const trimmed = input.trim();

  // whitespace -> not a URL (treat as search)
  if (/\s/.test(trimmed)) return false;

  // scheme present
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed) || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
    return true;
  }

  // localhost or localhost:port
  if (/^localhost(:\d+)?$/i.test(trimmed)) return true;

  // IPv4 (with optional port)
  if (/^\d{1,3}(\.\d{1,3}){3}(:\d+)?$/.test(trimmed)) return true;

  // contains dot (domain-like) and not starting with a dash
  if (/^[^\s@\/]+?\.[^\s@\/]{2,}/.test(trimmed)) return true;

  return false;
}

/* Normalize URL to include a protocol when missing.
   If a scheme is already present, return as-is.
   Otherwise, prefix with https://
*/
function normalizeURL(input) {
  const trimmed = input.trim();

  // If it already has a scheme like http:// or https://, or other scheme, return as is
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
    return trimmed;
  }

  // Prepend https:// for domain-like input (e.g. chatgpt.com) and for IP/localhost
  return `https://${trimmed}`;
}

/* Build search URL.
   If settings.searchUrl contains '%s', replace it with the encoded query.
   Otherwise, append the encoded query to the end (simple behavior).
*/
function buildSearchUrl(searchTemplate, query) {
  const encoded = encodeURIComponent(query);
  if (!searchTemplate || typeof searchTemplate !== "string") {
    return `https://www.google.com/search?q=${encoded}`;
  }
  if (searchTemplate.includes("%s")) {
    return searchTemplate.replace(/\%s/g, encoded);
  }
  // If the template already has a query parameter keylike ?q= or =, append with &
  if (searchTemplate.includes("?")) {
    // If it ends with ? or &, just append
    if (/[?&]$/.test(searchTemplate)) {
      return `${searchTemplate}${encoded}`;
    }
    // Otherwise add &q=...
    return `${searchTemplate}&q=${encoded}`;
  }
  // default: append encoded search as path segment
  return `${searchTemplate.replace(/\/$/, "")}/${encoded}`;
}

/* Main enter handler */
async function handleEnter(value, settings) {
  const val = (value || "").trim();

  // empty -> open configured 'enterUrl' if present, else do nothing
  if (!val) {
    if (settings.enterUrl) {
      const url = isProbablyURL(settings.enterUrl)
        ? normalizeURL(settings.enterUrl)
        : settings.enterUrl;
      window.location.href = url;
    }
    return;
  }

  // If input looks like a URL (including bare domains like 'chatgpt.com'), open it
  if (isProbablyURL(val)) {
    const url = normalizeURL(val);
    window.location.href = url;
    return;
  }

  // Otherwise, do a search using settings.searchUrl (or default google)
  const searchTemplate = settings.searchUrl || "https://www.google.com/search?q=%s";
  const searchUrl = buildSearchUrl(searchTemplate, val);
  window.location.href = searchUrl;
}

/* Event listeners */
omnibox.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const settings = await getSettings();
    handleEnter(omnibox.value, settings);
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  // Focus after render
  omnibox.focus();

  // Load settings and apply wallpaper if present (we keep wallpaper if it exists)
  const settings = await getSettings();
  await applyWallpaper(settings);

  // Optional: set a placeholder that hints where Enter goes
  if (settings.enterUrl) {
    omnibox.placeholder = ``;
  } else {
    omnibox.placeholder = "";
  }
});
```

make the change as gentle as possible.

write code that is clear, simple, and intention-revealing; modular and cohesive; reliable and maintainable, following SOLID principles.

show me the full code of changed files.

---

I'll help you fix those two issues. Let me analyze the problems:

1. **Browser crash when closing the only tab**: Your `background.js` removes a tab without checking if it's the last one
2. **Incognito mode support**: Need to add the permission to the manifest

Here are the updated files:

## manifest.json

```json
{
  "manifest_version": 3,
  "name": "Intention",
  "version": "1.0",
  "description": "A focused, full-screen workflow with minimal distractions.",
  "permissions": ["tabs", "storage"],
  "background": {
    "service_worker": "background.js"
  },
  "chrome_url_overrides": {
    "newtab": "newtab.html"
  },
  "action": {
    "default_popup": "settings.html",
    "default_title": "Intention Settings"
  },
  "incognito": "split"
}
```

## background.js

```javascript
console.log("[Intention] Background started");

/**
 * Checks if removing a tab would close the browser.
 * Returns true if the tab is the only tab in the only window.
 */
async function isLastTabInBrowser(tabId) {
  try {
    const tab = await chrome.tabs.get(tabId);
    const window = await chrome.windows.get(tab.windowId, { populate: true });

    // If this is the only tab in the window
    if (window.tabs.length === 1) {
      // Check if this is the only window
      const allWindows = await chrome.windows.getAll();
      return allWindows.length === 1;
    }

    return false;
  } catch (err) {
    console.error("[Intention] Error checking tab status:", err);
    return false;
  }
}

/**
 * Replaces the default new tab with our custom new tab page.
 * Avoids closing the tab if it would close the browser entirely.
 */
chrome.tabs.onCreated.addListener(async (tab) => {
  try {
    // 'chrome://newtab/' is how Chrome names a freshly created new tab
    if (tab.pendingUrl === "chrome://newtab/") {
      console.log("[Intention] Detected new tab, replacing…");

      // Check if this is the last tab before closing
      const isLast = await isLastTabInBrowser(tab.id);

      if (isLast) {
        // If it's the last tab, update it instead of closing
        console.log(
          "[Intention] Last tab detected, updating instead of closing"
        );
        await chrome.tabs.update(tab.id, {
          url: chrome.runtime.getURL("newtab.html"),
        });
      } else {
        // Safe to close and create new tab
        await chrome.tabs.remove(tab.id);
        const newTab = await chrome.tabs.create({
          url: chrome.runtime.getURL("newtab.html"),
        });
        console.log("[Intention] Opened custom tab:", newTab);
      }
    }
  } catch (err) {
    console.error("[Intention] Error handling new tab:", err);
  }
});
```

## Changes made:

### manifest.json

- **Added `"incognito": "split"`**: This enables the extension to work in incognito mode with its own separate storage and state

### background.js

- **Added `isLastTabInBrowser()` function**: Checks if closing a tab would close the browser by verifying it's the only tab in the only window
- **Modified tab replacement logic**: When it's the last tab, uses `chrome.tabs.update()` instead of removing and creating, preventing the browser from closing
- **Preserved all existing behavior**: The extension still replaces the default new tab page with your custom one

The solution is minimal and surgical—it only adds safety checks without changing the core functionality. The code remains clear and maintainable with well-named functions that reveal their intent.
