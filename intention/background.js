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
