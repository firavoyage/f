import { log } from "./logger.js";

const SERVER_HTTP = "http://localhost:8000";
const SERVER_WS = "ws://localhost:8000/events";

let ws = null;
let serverAlive = false;

log("info", "Background service worker loaded");

/**
 * Poll server until it is alive
 */
async function checkServer() {
  try {
    const res = await fetch(`${SERVER_HTTP}/health`);
    if (res.ok) {
      if (!serverAlive) {
        log("info", "Server is alive");
      }
      serverAlive = true;
      ensureWS();
      return;
    }
  } catch (e) {
    // ignore
  }

  if (serverAlive) {
    log("error", "Server went away");
  }

  serverAlive = false;
}

/**
 * Ensure WebSocket connection exists
 */
function ensureWS() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    return;
  }

  if (ws) {
    try {
      ws.close();
    } catch {}
    ws = null;
  }

  log("info", "Opening WebSocket");

  try {
    ws = new WebSocket(SERVER_WS);
  } catch (e) {
    log("error", "WS constructor failed", e);
    return;
  }

  ws.onopen = () => {
    log("info", "WS connected");
  };

  ws.onmessage = async (msg) => {
    log("info", "WS message received", msg.data);
    try {
      const task = JSON.parse(msg.data);
      await executeTask(task);
    } catch (e) {
      log("error", "WS message handling failed", e);
    }
  };

  ws.onerror = (e) => {
    log("error", "WS error", e);
  };

  ws.onclose = () => {
    log("error", "WS closed");
    ws = null;
  };
}

/**
 * Execute injected script
 */
async function executeTask(task) {
  log("info", "Task received", task);

  const result = {
    task_id: task.id,
    status: "failed",
    output: null,
    error: null
  };

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    });

    if (!tab?.id) {
      throw new Error("No active tab");
    }

    if (tab.url.startsWith("chrome://")) {
      throw new Error("Invalid tab URL");
    }

    const injection = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      world: "MAIN",
      func: (script) => {
        try {
          return new Function(
            "return (async () => { " + script + " })();"
          )();
        } catch (e) {
          return { __error__: e };
        }
      },
      args: [task.script]
    });

    const res = injection?.[0]?.result;

    if (res?.__error__) {
      throw res.__error__;
    }

    result.status = "completed";
    result.output = res;
  } catch (e) {
    result.error = {
      name: e.name,
      message: e.message,
      stack: e.stack || null
    };
  }

  log("info", "Task finished", result);

  await fetch(`${SERVER_HTTP}/task/${task.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result)
  });
}

/**
 * Keep worker alive and polling
 */
setInterval(() => {
  log("info", "Heartbeat");
  checkServer();
}, 2000);

// Initial probe
checkServer();
