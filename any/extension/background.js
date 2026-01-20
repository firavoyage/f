import { log } from "./logger.js";

const SERVER = "http://localhost:8000";
let ws = null;

function connectWS() {
  ws = new WebSocket("ws://localhost:8000/events");

  ws.onopen = () => log("info", "WS connected");
  ws.onclose = () => {
    log("error", "WS disconnected, retrying");
    setTimeout(connectWS, 2000);
  };
  ws.onerror = (e) => log("error", "WS error", e);

  ws.onmessage = async (msg) => {
    const task = JSON.parse(msg.data);
    await executeTask(task);
  };
}

connectWS();

async function ensureRunner(tabId) {
  await chrome.scripting.executeScript({
    target: { tabId },
    files: ["runner.js"],
    world: "MAIN"
  });
}

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

    if (!tab?.id) throw new Error("No active tab");
    if (tab.url.startsWith("chrome://")) {
      throw new Error("Cannot inject into chrome:// URLs");
    }

    await ensureRunner(tab.id);

    const response = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      world: "MAIN",
      func: (taskId, expr) => {
        return new Promise((resolve) => {
          function handler(event) {
            if (event.source !== window) return;
            if (event.data?.type !== "ANY_RESULT") return;
            if (event.data.taskId !== taskId) return;

            window.removeEventListener("message", handler);
            resolve(event.data);
          }

          window.addEventListener("message", handler);

          window.postMessage({
            type: "ANY_EXEC",
            taskId,
            expr
          });
        });
      },
      args: [task.id, task.script]
    });

    const payload = response?.[0]?.result;

    if (payload.status === "failed") {
      throw payload.error;
    }

    result.status = "completed";
    result.output = payload.output;
  } catch (e) {
    result.error = {
      name: e.name || "Error",
      message: e.message || String(e),
      stack: e.stack || null
    };
  }

  log("info", "Task finished", result);

  await fetch(`${SERVER}/task/${task.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result)
  });
}
