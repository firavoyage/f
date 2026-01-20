export function log(level, message, data = null) {
  const entry = {
    ts: new Date().toISOString(),
    level,
    message,
    data
  };

  console[level === "error" ? "error" : "log"]("[any]", entry);

  chrome.storage.local.get({ logs: [] }, (res) => {
    res.logs.push(entry);
    chrome.storage.local.set({ logs: res.logs });
  });
}
