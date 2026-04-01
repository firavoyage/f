// Send a message every 20 seconds to keep the service worker active
setInterval(() => {
  chrome.runtime.sendMessage({ keepAlive: true });
}, 20000);
