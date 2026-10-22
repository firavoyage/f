import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';
import './popup.css';

// 1. Define the Popup Component using pure Hyperscript function calls
function PopupConfig({ onClose }) {
  const [apiKey, setApiKey] = useState(GM_getValue("apiKey", ""));

  const handleSave = () => {
    GM_setValue("apiKey", apiKey.trim());
    console.log("[Userscript] Saved Key via Pure Hyperscript:", apiKey.trim());
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'my-userscript-overlay') {
      onClose();
    }
  };

  // Structure: h(tag_or_component, attributes_object, ...children)
  return h('div', { className: 'my-userscript-overlay', onClick: handleOverlayClick },
    h('div', { className: 'my-userscript-popup' },
      h('h3', null, 'Configure API Key'),
      h('input', {
        type: 'text',
        value: apiKey,
        onInput: (e) => setApiKey(e.target.value),
        placeholder: 'Enter key...'
      }),
      h('div', { className: 'button-group' },
        h('button', { className: 'btn-cancel', onClick: onClose }, 'Cancel'),
        h('button', { className: 'btn-save', onClick: handleSave }, 'Save')
      )
    )
  );
}

// 2. Control Mount / Unmount State
function openPureHyperscriptPopup() {
  if (document.querySelector('.my-userscript-overlay')) return;

  const container = document.createElement('div');
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove();
  };

  // Mount the component root element
  render(h(PopupConfig, { onClose: closePopup }), container);
}

// 3. Register the menu command into the extension UI
GM_registerMenuCommand("⚙️ Configure API Key (Pure H)", openPureHyperscriptPopup);
