// extension/content.js

const pending = new Map();

// listen for page → content responses
window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  const msg = event.data;
  if (!msg || msg.__any__ !== true) return;

  // Only handle responses, not requests
  if (msg.type !== "response") return;
  const resolver = pending.get(msg.id);
  if (!resolver) return;

  pending.delete(msg.id);
  resolver(msg);
});

// listen for background → content requests
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  const id = msg.id;

  pending.set(id, (resp) => {
    sendResponse({
      v: msg.v,
      id,
      result: resp.result,
      error: resp.error,
    });
  });

  // forward request into page context
  window.postMessage(
    {
      __any__: true,
      type: "request", // NEW: mark as request
      id,
      method: msg.method,
      params: msg.params,
    },
    "*"
  );

  return true; // async
});
