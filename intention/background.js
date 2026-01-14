console.log("[Intention] Background service worker started");

// Observe all current tabs once at startup
async function logAllTabs() {
  try {
    const tabs = await chrome.tabs.query({});
    console.log("[Intention] Current tabs:", tabs);
  } catch (err) {
    console.error("[Intention] Error fetching tabs:", err);
  }
}

// Listen for omnibox input
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  console.log("[Intention] Omnibox input:", text);
  suggest([]);
});

chrome.omnibox.onInputEntered.addListener((text) => {
  console.log("[Intention] Omnibox entered:", text);
  // Optional: could open tab or search here
});

logAllTabs();