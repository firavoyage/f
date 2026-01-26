// ==UserScript==
// @name         any
// @namespace    https://any.local
// @version      0.1
// @description Simple automation surface for the `any` library
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  globalThis.__any__ = globalThis.__any__ || {};
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  globalThis.__any__.pageInfo = async ({ delay = 500 } = {}) => {
    await sleep(delay);

    const info = {
      title: document.title,
      url: location.href,
      readyState: document.readyState,
    };

    document.body.style.outline = "3px solid red";
    await sleep(300);
    document.body.style.outline = "";

    return info;
  };

  // page bridge (userscript side)
  window.addEventListener("message", async (event) => {
    if (event.source !== window) return;
    const msg = event.data;
    if (!msg || msg.__any__ !== true) return;

    // Only handle requests from content script
    if (msg.type !== "request") return;

    const { id, method, params } = msg;

    try {
      const fn = globalThis.__any__?.[method];
      if (typeof fn !== "function") {
        throw new Error(`method not found: ${method}`);
      }

      const result = await fn(params);

      window.postMessage({ __any__: true, type: "response", id, result }, "*");
    } catch (err) {
      window.postMessage(
        {
          __any__: true,
          type: "response",
          id,
          error: {
            name: err.name,
            message: err.message,
            stack: err.stack,
          },
        },
        "*"
      );
    }
  });
})();
