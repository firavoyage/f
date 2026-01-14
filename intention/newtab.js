console.log("[Intention] New tab loaded");

const omnibox = document.getElementById("omnibox");
const wallpaperDiv = document.getElementById("wallpaper");

async function loadSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get({ settings: {} }, (res) => {
      resolve(res.settings || {});
    });
  });
}

async function applyWallpaper(settings) {
  if (settings.wallpaper) {
    wallpaperDiv.style.background = `url(${settings.wallpaper}) center/cover no-repeat`;
  } else {
    wallpaperDiv.style.background = "black";
  }
}

async function handleEnter(value, settings) {
  value = value.trim();
  if (!value) {
    if (settings.enter) {
      window.location.href = settings.enter;
    }
    return;
  }

  try {
    const url = new URL(value);
    window.location.href = url.href;
  } catch {
    // Not a valid URL → treat as search
    const searchUrl =
      settings.search?.replace("%s", encodeURIComponent(value)) ||
      `https://www.google.com/search?q=${encodeURIComponent(value)}`;
    window.location.href = searchUrl;
  }
}

omnibox.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const settings = await loadSettings();
    handleEnter(omnibox.value, settings);
  }
});

omnibox.focus();

(async () => {
  const settings = await loadSettings();
  await applyWallpaper(settings);

  // Log current tabs for debugging
  chrome.tabs.query({}, (tabs) => {
    console.log("[Intention] Tabs in new tab page:", tabs);
  });
})();