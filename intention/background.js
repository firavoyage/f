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

// normalize (secure): try to make the service worker always active, or the new tab page might fail to load
// method 1
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20000);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();

// method 2 (more reliable but complex)
async function setupOffscreen() {
  const offscreenUrl = chrome.runtime.getURL('offscreen.html');

  // Check if it already exists to avoid errors
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [offscreenUrl]
  });

  if (existingContexts.length > 0) return;

  // Create the document. 'WORKERS' is a common reason for lifecycle management.
  await chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: ['WORKERS'],
    justification: 'Keep service worker running to prevent New Tab load failures'
  });
}

// Ensure the document stays alive
chrome.runtime.onStartup.addListener(setupOffscreen);
chrome.runtime.onInstalled.addListener(setupOffscreen);

// Listen for the heartbeat pings
chrome.runtime.onMessage.addListener((message) => {
  if (message.keepAlive) console.log('Heartbeat received');
});

