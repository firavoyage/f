import { h, render } from "preact";
import { useState } from "preact/hooks";
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from "$";
import "./popup.css";

// 1. Define the Popup Component using pure Hyperscript function calls
function PopupConfig({ onClose }) {
  const [apiKey, setApiKey] = useState(GM_getValue("apiKey", ""));

  const handleSave = () => {
    GM_setValue("apiKey", apiKey.trim());
    console.log("[Userscript] Saved Key via Pure Hyperscript:", apiKey.trim());
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "my-userscript-overlay") {
      onClose();
    }
  };

  // Structure: h(tag_or_component, attributes_object, ...children)
  return h(
    "div",
    { className: "my-userscript-overlay", onClick: handleOverlayClick },
    h(
      "div",
      { className: "my-userscript-popup" },
      h("h3", null, "Configure API Key"),
      h("input", {
        type: "text",
        value: apiKey,
        onInput: (e) => setApiKey(e.target.value),
        placeholder: "Enter key...",
      }),
      h(
        "div",
        { className: "button-group" },
        h("button", { className: "btn-cancel", onClick: onClose }, "Cancel"),
        h("button", { className: "btn-save", onClick: handleSave }, "Save")
      )
    )
  );
}

// 2. Control Mount / Unmount State
function openPureHyperscriptPopup() {
  if (document.querySelector(".my-userscript-overlay")) return;

  const container = document.createElement("div");
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove();
  };

  // Mount the component root element
  render(h(PopupConfig, { onClose: closePopup }), container);
}

// 3. Register the menu command into the extension UI
GM_registerMenuCommand(
  "⚙️ Configure API Key (Pure H)",
  openPureHyperscriptPopup
);

/**
 * Convert DOM to HTML
 *
 * @param {Object} config
 * @param {Node|null} config.targetNode - Direct live DOM element to process (for explicit node extraction).
 * @param {Range|null} config.range - Active user selection range object.
 * @param {string} [config.mode='selection'] - 'selection' (slice exact text), or 'parent' (grab whole parent container if range exists).
 * @param {string} [config.baseUrl=document.baseURI] - URL to resolve relative assets.
 * @returns {string} Fully styled inline HTML string.
 */
function compileDomToHtmlString({
  targetNode = null,
  range = null,
  mode = "selection",
  baseUrl = document.baseURI,
}) {
  const liveNodeMap = new Map();
  let idCounter = 0;

  // Determine the true baseline node we want to start compiling from
  let rootAnchor = targetNode;
  if (range && !targetNode) {
    const commonAncestor = range.commonAncestorContainer;
    rootAnchor =
      commonAncestor.nodeType === Node.ELEMENT_NODE
        ? commonAncestor
        : commonAncestor.parentElement;

    // OPTION TOGGLE: If mode is 'parent', we discard the strict range filtering
    // for the top-level nodes, treating the parent as a full target node extraction.
    if (mode === "parent") {
      range = null;
    }
  }

  if (!rootAnchor) return "";

  // Helper to evaluate if a live node falls inside active selection bounds
  function isNodeSelected(node) {
    if (!range) return true; // If no range, everything under the anchor is captured

    if (node.nodeType === Node.TEXT_NODE) {
      const testRange = document.createRange();
      testRange.selectNodeContents(node);
      const startsBeforeEnd =
        range.compareBoundaryPoints(Range.END_TO_START, testRange) <= 0;
      const endsAfterStart =
        range.compareBoundaryPoints(Range.START_TO_END, testRange) >= 0;
      return startsBeforeEnd && endsAfterStart;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return false;

    let current = node;
    while (current) {
      try {
        if (
          current.nodeType === Node.ELEMENT_NODE &&
          range.intersectsNode(current)
        ) {
          return true;
        }
      } catch (e) {}

      if (current instanceof ShadowRoot) {
        current = current.host;
      } else {
        current = current.parentNode;
      }
    }
    return false;
  }

  // --- PHASE 1: Crawl & Tag the True Live Tree ---
  function annotateLiveTree(node) {
    if (!node) return;

    if (node.nodeType === Node.ELEMENT_NODE && isNodeSelected(node)) {
      const id = `copy-${idCounter++}`;
      node.setAttribute("data-copy-id", id);
      liveNodeMap.set(id, node);
    }

    for (const child of node.childNodes) {
      annotateLiveTree(child);
    }

    if (node.shadowRoot) {
      for (const shadowChild of node.shadowRoot.childNodes) {
        annotateLiveTree(shadowChild);
      }
    }
  }

  // --- PHASE 2: Reconstruct & Style the Tree Manually ---
  function compileTree(liveNode) {
    if (!liveNode) return null;

    if (liveNode.nodeType === Node.TEXT_NODE) {
      if (!isNodeSelected(liveNode)) return null;

      let textValue = liveNode.nodeValue;
      if (range) {
        if (liveNode === range.startContainer) {
          textValue = textValue.substring(range.startOffset);
        }
        if (liveNode === range.endContainer) {
          textValue = textValue.substring(0, range.endOffset);
        }
      }
      return document.createTextNode(textValue);
    }

    if (liveNode.nodeType !== Node.ELEMENT_NODE) {
      return isNodeSelected(liveNode) ? liveNode.cloneNode(true) : null;
    }

    const clone = liveNode.cloneNode(false);
    clone.removeAttribute("data-copy-id");

    // Inline computed CSS styles
    const computedStyle = window.getComputedStyle(liveNode);
    let cssText = "";
    for (const key of computedStyle) {
      cssText += `${key}:${computedStyle.getPropertyValue(key)};`;
    }
    clone.setAttribute("style", cssText);

    // Resolve URLs
    const urlAttributes = ["src", "href", "poster", "action"];
    for (const attr of urlAttributes) {
      if (liveNode.hasAttribute(attr)) {
        try {
          clone.setAttribute(
            attr,
            new URL(liveNode.getAttribute(attr), baseUrl).href
          );
        } catch (e) {}
      }
    }

    // Process Light DOM children
    for (const child of liveNode.childNodes) {
      const compiledChild = compileTree(child);
      if (compiledChild) clone.appendChild(compiledChild);
    }

    // Flatten Shadow DOM children
    if (liveNode.shadowRoot) {
      const shadowWrapper = document.createElement("div");
      shadowWrapper.setAttribute("data-shadow-host", "");

      for (const shadowChild of liveNode.shadowRoot.childNodes) {
        const compiledShadowChild = compileTree(shadowChild);
        if (compiledShadowChild) shadowWrapper.appendChild(compiledShadowChild);
      }

      if (shadowWrapper.childNodes.length > 0) {
        clone.appendChild(shadowWrapper);
      }
    }

    return clone;
  }

  // --- PHASE 3: Clean up Tracking Attributes ---
  function cleanLiveTree(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
    node.removeAttribute("data-copy-id");
    for (const child of node.childNodes) cleanLiveTree(child);
    if (node.shadowRoot) {
      for (const shadowChild of node.shadowRoot.childNodes)
        cleanLiveTree(shadowChild);
    }
  }

  const container = document.createElement("div");

  try {
    annotateLiveTree(rootAnchor);
    const finalCompiledTree = compileTree(rootAnchor);
    if (finalCompiledTree) {
      container.appendChild(finalCompiledTree);
    }
    cleanLiveTree(rootAnchor);
  } catch (error) {
    cleanLiveTree(rootAnchor);
    console.error("Compilation error, cleaning up DOM:", error);
  }

  return container.innerHTML;
}

document.addEventListener(
  "copy",
  (event) => {
    // 1. Bypass the page's own copy listeners completely
    event.stopImmediatePropagation();

    // 2. Get the user's current selection
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    // 3. Extract the actual HTML content of the selection
    const range = selection.getRangeAt(0);
    const clonedSelection = range.cloneContents(); // Returns a DocumentFragment

    // Convert the DocumentFragment into an HTML string
    const div = document.createElement("div");
    div.appendChild(clonedSelection);
    const copiedHTML = div.innerHTML;
    const copiedText = selection.toString();

    // --- Your Custom Logic Here ---
    console.log("Intercepted HTML:", copiedHTML);
    console.log("Intercepted Text:", copiedText);

    // Optional: Modify what actually goes into the clipboard
    // event.preventDefault();
    // event.clipboardData.setData('text/html', copiedHTML + '<p>Added by userscript</p>');
    // event.clipboardData.setData('text/plain', copiedText);
  },
  { capture: true }
); // Crucial: forces your script to execute first
