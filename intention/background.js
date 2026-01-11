// background.js
// Calm, simple, intention-revealing structure

// Called when extension starts
console.log("[Intention] Background worker started");

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
  // We don’t suggest anything yet
  suggest([]);
});

// Clear default suggestion — quiet
chrome.omnibox.onInputEntered.addListener((text) => {
  console.log("[Intention] Omnibox entered:", text);
});

logAllTabs();
