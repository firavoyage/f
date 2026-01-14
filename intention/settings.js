/* settings.js
 *
 * Purpose:
 *  - Edit only two settings: enterUrl and searchUrl
 *  - Preserve all other stored settings (e.g. wallpaper)
 *  - Autosave gently after edits
 */

const enterInput = document.getElementById("enterUrl");
const searchInput = document.getElementById("searchUrl");
const status = document.getElementById("status");

/* Storage helpers */

function getStoredSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get({ settings: {} }, (res) => {
      resolve(res.settings || {});
    });
  });
}

function setStoredSettings(settings) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ settings }, () => resolve());
  });
}

/* Load */

async function loadSettingsToForm() {
  const settings = await getStoredSettings();
  enterInput.value = settings.enterUrl || "";
  searchInput.value =
    settings.searchUrl || "https://www.google.com/search?q=%s";
}

/* Save (merged, non-destructive) */

let saveTimeout = null;

function scheduleSave() {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(saveNow, 300);
}

async function saveNow() {
  const current = await getStoredSettings();

  const updated = {
    ...current, // preserve wallpaper and any future fields
    enterUrl: enterInput.value.trim(),
    searchUrl: searchInput.value.trim(),
  };

  await setStoredSettings(updated);

  status.textContent = "Saved";
  setTimeout(() => (status.textContent = ""), 800);
}

/* Events */

enterInput.addEventListener("input", scheduleSave);
searchInput.addEventListener("input", scheduleSave);

[enterInput, searchInput].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      el.blur();
      saveNow();
    }
  });
});

/* Init */

loadSettingsToForm();
