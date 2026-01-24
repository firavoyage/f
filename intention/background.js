console.log("[Intention] Background started");

/**
 * Checks if removing a tab would close the browser.
 * Returns true if the tab is the only tab in the only window.
 */
async function isLastTabInBrowser(tabId) {
  try {
    const tab = await chrome.tabs.get(tabId);
    const window = await chrome.windows.get(tab.windowId, { populate: true });
    
    if (window.tabs.length === 1) {
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
 * Handle new tab creation.
 */
chrome.tabs.onCreated.addListener(async (tab) => {
  try {
    if (tab.pendingUrl === "chrome://newtab/") {
      console.log("[Intention] Detected new tab, replacing…");

      const isLast = await isLastTabInBrowser(tab.id);
      
      if (isLast) {
        // Update the last tab instead of removing it
        console.log("[Intention] Last tab detected, updating instead of closing");
        await chrome.tabs.update(tab.id, {
          url: chrome.runtime.getURL("newtab.html")
        });
      } else {
        // Safe to remove and create a new one
        await chrome.tabs.remove(tab.id);
        const newTab = await chrome.tabs.create({
          url: chrome.runtime.getURL("newtab.html")
        });
        console.log("[Intention] Opened custom tab:", newTab);
      }
    }
  } catch (err) {
    console.error("[Intention] Error handling new tab:", err);
  }
});

/**
 * Handle Ctrl+N (new window) by opening a custom new tab in a new window.
 */
chrome.commands.onCommand.addListener(async (command) => {
  if (command === "open_custom_new_window") {
    console.log("[Intention] Ctrl+N pressed, opening new window…");
    await chrome.windows.create({
      url: chrome.runtime.getURL("newtab.html"),
      type: "normal"
    });
  }
});
