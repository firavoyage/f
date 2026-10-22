import { h, render } from "preact";
import { useState } from "preact/hooks";
import { parse } from 'yaml'
import { bind } from 'lib/web/keyboard'
import { copy } from 'lib/web/clipboard'

import { GM_registerMenuCommand, GM_setValue, GM_getValue } from "$";
import "./popup.css";

function Config({ onClose }) {
  const [config, set_config] = useState(GM_getValue("export_config", ""));

  const handleSave = () => {
    GM_setValue("export_config", config.trim());
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "export_config_overlay") {
      onClose();
    }
  };

  // Structure: h(tag_or_component, attributes_object, ...children)
  return h(
    "div",
    { className: "export_config_overlay", onClick: handleOverlayClick },
    h(
      "div",
      { className: "export_config_popup" },
      h("textarea", {
        type: "text",
        value: config,
        onInput: (e) => set_config(e.target.value),
        placeholder: "Enter key...",
      }),
      h(
        "div",
        { className: "export_config_button_group" },
        h(
          "button",
          { className: "export_config_cancel", onClick: onClose },
          "Cancel"
        ),
        h(
          "button",
          { className: "export_config_save", onClick: handleSave },
          "Save"
        )
      )
    )
  );
}

function open_config() {
  if (document.querySelector(".export_config_overlay")) return;

  const container = document.createElement("div");
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove();
  };

  // Mount the component root element
  render(h(Config, { onClose: closePopup }), container);
}

GM_registerMenuCommand("config", open_config);

/**
 * flatten shadow dom and inline styling
 */
function normalize_node(sourceNode) {
  // 1. Base case: Handle text nodes, comments, etc.
  if (sourceNode.nodeType !== Node.ELEMENT_NODE) {
    return sourceNode.cloneNode(false);
  }

  // 2. Create a shallow clone of the element
  const clonedNode = sourceNode.cloneNode(false);

  // 3. Diff and Inline Non-Default Styles
  // Create a clean dummy element of the same tag type to discover browser defaults
  const dummy = document.createElement(sourceNode.tagName);
  dummy.style.visibility = 'hidden';
  dummy.style.position = 'absolute';
  
  // Attach dummy to the active parent or body to allow correct evaluation
  const parent = sourceNode.parentElement || document.body;
  parent.appendChild(dummy);

  const liveStyles = window.getComputedStyle(sourceNode);
  const defaultStyles = window.getComputedStyle(dummy);

  // Loop through all computed properties and apply differences
  for (const property of liveStyles) {
    const liveValue = liveStyles.getPropertyValue(property);
    const defaultValue = defaultStyles.getPropertyValue(property);

    if (liveValue !== defaultValue) {
      clonedNode.style.setProperty(property, liveValue);
    }
  }
  
  // Clean up the dummy baseline immediately
  dummy.remove();

  // 4. Traverse and flatten the child nodes
  // Detect open shadow root; default to light DOM children if absent
  const hasShadow = sourceNode.shadowRoot && sourceNode.shadowRoot.mode === 'open';
  const sourceChildren = hasShadow 
    ? Array.from(sourceNode.shadowRoot.childNodes) 
    : Array.from(sourceNode.childNodes);

  for (const child of sourceChildren) {
    if (child.localName === 'slot') {
      // Re-map projected content inside web component slots
      const assignedNodes = child.assignedNodes();
      for (const assignedNode of assignedNodes) {
        clonedNode.appendChild(normalize_node(assignedNode));
      }
    } else {
      // Recurse normally into child tree branches
      clonedNode.appendChild(normalize_node(child));
    }
  }

  return clonedNode;
}


