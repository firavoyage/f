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
