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
