// extension/background.js

// Top‑level registration of alarm and listener
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("periodicTask", {
    periodInMinutes: 0.5,
  });
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "periodicTask") {
    console.log("⏰ Woke up for periodic work…");

    await safeDoInternalWork();
  }
});

async function safeDoInternalWork() {
  // Wait a tiny moment before touching storage to avoid 'undefined'
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Pause a bit so storage has time to initialize
  await sleep(50);

  // Now safely use storage
  try {
    const result = await chrome.storage.local.get({ counter: 0 });
    const newCount = (result.counter ?? 0) + 1;

    await chrome.storage.local.set({ counter: newCount });
    console.log("Updated counter:", newCount);
  } catch (err) {
    console.warn("Storage still not ready, retry next alarm", err);
  }

  // Other internal cleanup or bookkeeping …
}

let ws = null;
let watchdog = null;

function connect() {
  console.log("any: attempting connect");

  ws = new WebSocket("ws://localhost:8765/ws");

  watchdog = setTimeout(() => {
    if (ws && ws.readyState !== WebSocket.OPEN) {
      ws.close();
    }
  }, 1000);

  ws.onopen = () => {
    clearTimeout(watchdog);
    console.log("any: connected");
  };

  ws.onclose = () => {
    clearTimeout(watchdog);
    console.log("any: disconnected");
    setTimeout(connect, 1000);
  };

  ws.onerror = () => {
    ws.close();
  };

  ws.onmessage = async (event) => {
    const msg = JSON.parse(event.data);

    try {
      const tab = await openAndWait(msg.page);
      const result = await sendWithRetry(tab.id, msg);
      ws.send(JSON.stringify(result));
    } catch (err) {
      ws.send(
        JSON.stringify({
          v: msg.v,
          id: msg.id,
          error: {
            name: err.name,
            message: err.message,
            stack: err.stack,
          },
        })
      );
    }
  };
}

async function openAndWait(url) {
  const tab = await chrome.tabs.create({ url });

  await new Promise((resolve) => {
    const listener = (tabId, info) => {
      if (tabId === tab.id && info.status === "complete") {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };
    chrome.tabs.onUpdated.addListener(listener);
  });

  return tab;
}

async function sendWithRetry(tabId, msg, retries = 10) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await sendToTab(tabId, msg);
      if (result) return result;
    } catch (_) {}
    await sleep(100);
  }
  throw new Error("content script not responding");
}

function sendToTab(tabId, msg) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, msg, (resp) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(resp);
      }
    });
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

connect();
