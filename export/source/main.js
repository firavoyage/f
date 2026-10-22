import { h, render } from "preact";
import { useState } from "preact/hooks";
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from "$";
import "./popup.css";

// 1. Define the Popup Component using pure Hyperscript function calls
function PopupConfig({ onClose }) {
  const [apiKey, setApiKey] = useState(GM_getValue("export_config", ""));

  const handleSave = () => {
    GM_setValue("export_config", apiKey.trim());
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
    { className: "export_config", onClick: handleOverlayClick },
    h(
      "div",
      { className: "my-userscript-popup" },
      h("h3", null, "Configure API Key"),
      h("textarea", {
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

function open_config() {
  if (document.querySelector(".my-userscript-overlay")) return;

  const container = document.createElement("div");
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove();
  };

  // Mount the component root element
  render(h(PopupConfig, { onClose: closePopup }), container);
}

GM_registerMenuCommand(
  "config",
  open_config
);

// 1. Use useCapture = true (the 3rd parameter) to intercept during the capturing phase.
window.addEventListener(
  "keydown",
  (event) => {
    const isCopyKey =
      (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c";
    if (!isCopyKey) return;

    // 2. Kill the event immediately. Prevents other listeners on the same element
    // and elements further down the tree from firing.
    event.stopImmediatePropagation();

    const TEXT_LENGTH_THRESHOLD = 15;
    const selection = window.getSelection();
    let targetNode = null;

    if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
      const selectedText = selection.toString();

      // If below threshold, we want default browser behavior, but since we stopped
      // propagation, we must manually trigger a safe clipboard text write.
      if (selectedText.length < TEXT_LENGTH_THRESHOLD) {
        event.preventDefault(); // Stop default browser actions to maintain clean state
        try {
          navigator.clipboard.writeText(selectedText);
        } catch (err) {
          console.error("Fallback plaintext copy failed:", err);
        }
        return;
      }

      const range = selection.getRangeAt(0);
      targetNode = range.commonAncestorContainer;
      if (targetNode.nodeType === Node.TEXT_NODE) {
        targetNode = targetNode.parentElement;
      }
    }

    if (!targetNode) {
      targetNode = document.body;
    }

    // 3. Prevent standard browser behavior for our custom HTML payload pipeline
    event.preventDefault();

    try {
      const stylizedHtml = elementToHtmlWithStyles(targetNode);
      navigator.clipboard.writeText(stylizedHtml);
      console.log("Successfully hijacked copy event and pushed stylized HTML!");
    } catch (error) {
      console.error("Failed to copy stylized HTML:", error);
    }
  },
  true
); // <--- CRITICAL: 'true' turns on the event capturing phase

// document.addEventListener(
//   "copy",
//   (event) => {
//     // 1. Bypass the page's own copy listeners completely
//     event.stopImmediatePropagation();

//     // 2. Get the user's current selection
//     const selection = window.getSelection();
//     if (!selection || selection.rangeCount === 0) return;

//     // 3. Extract the actual HTML content of the selection
//     const range = selection.getRangeAt(0);
//     const clonedSelection = range.cloneContents(); // Returns a DocumentFragment

//     // Convert the DocumentFragment into an HTML string
//     const div = document.createElement("div");
//     div.appendChild(clonedSelection);
//     const copiedHTML = div.innerHTML;
//     const copiedText = selection.toString();

//     // --- Your Custom Logic Here ---
//     console.log("Intercepted HTML:", copiedHTML);
//     console.log("Intercepted Text:", copiedText);

//     // Optional: Modify what actually goes into the clipboard
//     // event.preventDefault();
//     // event.clipboardData.setData('text/html', copiedHTML + '<p>Added by userscript</p>');
//     // event.clipboardData.setData('text/plain', copiedText);
//   },
//   { capture: true }
// ); // Crucial: forces your script to execute first

/**
 * Converts a DOM node into a complete HTML string with all computed styles inlined,
 * relative links resolved to absolute URLs, and Shadow DOM contents flattened.
 *
 * @param {Element} node - The root DOM element to convert.
 * @param {string} [baseUrl=window.location.href] - Base URL to resolve relative links.
 * @returns {string} The fully processed HTML string.
 */
function elementToHtmlWithStyles(node, baseUrl = window.location.href) {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  // Helper function to resolve relative URLs
  const resolveUrl = (url) => {
    try {
      return new URL(url, baseUrl).href;
    } catch {
      return url;
    }
  };

  // Main recursive cloning and transformation function
  const cloneAndProcess = (element) => {
    // 1. Create a shallow clone of the element tag
    const clone = element.cloneNode(false);

    // 2. Inline Computed CSS Styles
    // We fetch the computed styles from the live document context
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle && computedStyle.cssText) {
      clone.setAttribute("style", computedStyle.cssText);
    } else if (computedStyle) {
      // Fallback for browsers that don't populate cssText completely
      let cssText = "";
      for (let i = 0; i < computedStyle.length; i++) {
        const prop = computedStyle[i];
        cssText += `${prop}: ${computedStyle.getPropertyValue(prop)}; `;
      }
      if (cssText) clone.setAttribute("style", cssText.trim());
    }

    // 3. Resolve Relative Links (href, src, data, etc.)
    const urlAttributes = ["src", "href", "data", "poster", "action"];
    urlAttributes.forEach((attr) => {
      if (element.hasAttribute(attr)) {
        // Use element[attr] if available to get resolved URL naturally, otherwise fallback
        const rawValue = element.getAttribute(attr);
        clone.setAttribute(attr, resolveUrl(rawValue));
      }
    });

    // 4. Handle Shadow DOM and Light DOM Children
    // Process Shadow DOM if it exists, otherwise process standard light DOM children
    const shadowRoot = element.shadowRoot;
    if (shadowRoot) {
      // Create a wrapper or container if you want to visually segment it,
      // or simply append shadow children directly into the cloned tag to flatten it.
      Array.from(shadowRoot.childNodes).forEach((child) => {
        appendProcessedChild(clone, child);
      });
    } else {
      Array.from(element.childNodes).forEach((child) => {
        appendProcessedChild(clone, child);
      });
    }

    return clone;
  };

  // Helper to process and append different node types safely
  const appendProcessedChild = (parentClone, child) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      parentClone.appendChild(cloneAndProcess(child));
    } else if (child.nodeType === Node.TEXT_NODE) {
      parentClone.appendChild(document.createTextNode(child.textContent));
    } else if (child.nodeType === Node.COMMENT_NODE) {
      parentClone.appendChild(document.createComment(child.textContent));
    }
  };

  // Execute the processing loop and return the outerHTML string
  const processedElement = cloneAndProcess(node);
  return processedElement.outerHTML;
}
