(async () => {
  if (window.__ANY_RUNNER__) return;
  window.__ANY_RUNNER__ = true;

  window.addEventListener("message", async (event) => {
    if (event.source !== window) return;
    if (!event.data || event.data.type !== "ANY_EXEC") return;

    const { taskId, expr } = event.data;

    try {
      // SAFE expression resolution (no eval)
      let value = window;
      for (const part of expr.split(".")) {
        value = value?.[part];
      }

      window.postMessage({
        type: "ANY_RESULT",
        taskId,
        status: "completed",
        output: value
      });
    } catch (e) {
      window.postMessage({
        type: "ANY_RESULT",
        taskId,
        status: "failed",
        error: {
          name: e.name,
          message: e.message,
          stack: e.stack
        }
      });
    }
  });
})();
