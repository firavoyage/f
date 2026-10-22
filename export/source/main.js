import { h, render } from "preact";
import { useState } from "preact/hooks";
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from "$";
import "./popup.css";

// 1. Define the Popup Component using pure Hyperscript function calls
function PopupConfig({ onClose }) {
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
  render(h(PopupConfig, { onClose: closePopup }), container);
}

GM_registerMenuCommand("config", open_config);


