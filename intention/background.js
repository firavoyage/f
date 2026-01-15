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
        console.log("[Intention] Last tab detected, updating instead of closing");
        await chrome.tabs.update(tab.id, {
          url: chrome.runtime.getURL("newtab.html")
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