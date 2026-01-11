// newtab.js
console.log("[Intention] New tab loaded");

// We capture tabs again here optionally
chrome.tabs.query({}, (tabs) => {
  console.log("[Intention] Tabs in new tab page:", tabs);
});
