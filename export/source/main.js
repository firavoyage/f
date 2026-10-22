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
    { className: "export_config", onClick: handleOverlayClick },
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

// const TEXT_LENGTH_THRESHOLD = 300;

// // 1. Use useCapture = true (the 3rd parameter) to intercept during the capturing phase.
// window.addEventListener(
//   "keydown",
//   (event) => {
//     const isCopyKey =
//       (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c";
//     if (!isCopyKey) return;

//     // 2. Kill the event immediately. Prevents other listeners on the same element
//     // and elements further down the tree from firing.
//     event.stopImmediatePropagation();

//     const selection = window.getSelection();
//     let targetNode = null;

//     if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
//       const selectedText = selection.toString();

//       // If below threshold, we want default browser behavior, but since we stopped
//       // propagation, we must manually trigger a safe clipboard text write.
//       if (selectedText.length < TEXT_LENGTH_THRESHOLD) {
//         event.preventDefault(); // Stop default browser actions to maintain clean state
//         try {
//           navigator.clipboard.writeText(selectedText);
//         } catch (err) {
//           console.error("Fallback plaintext copy failed:", err);
//         }
//         return;
//       }

//       const range = selection.getRangeAt(0);
//       targetNode = range.commonAncestorContainer;
//       if (targetNode.nodeType === Node.TEXT_NODE) {
//         targetNode = targetNode.parentElement;
//       }
//     }

//     if (!targetNode) {
//       targetNode = document.body;
//     }

//     // 3. Prevent standard browser behavior for our custom HTML payload pipeline
//     event.preventDefault();

//     try {
//       const stylizedHtml = elementToHtmlWithStyles(targetNode);
//       navigator.clipboard.writeText(stylizedHtml);
//       console.log("Successfully hijacked copy event and pushed stylized HTML!");
//     } catch (error) {
//       console.error("Failed to copy stylized HTML:", error);
//     }
//   },
//   { capture: true }
// );

// // document.addEventListener(
// //   "copy",
// //   (event) => {
// //     // 1. Bypass the page's own copy listeners completely
// //     event.stopImmediatePropagation();

// //     // 2. Get the user's current selection
// //     const selection = window.getSelection();
// //     if (!selection || selection.rangeCount === 0) return;

// //     // 3. Extract the actual HTML content of the selection
// //     const range = selection.getRangeAt(0);
// //     const clonedSelection = range.cloneContents(); // Returns a DocumentFragment

// //     // Convert the DocumentFragment into an HTML string
// //     const div = document.createElement("div");
// //     div.appendChild(clonedSelection);
// //     const copiedHTML = div.innerHTML;
// //     const copiedText = selection.toString();

// //     // --- Your Custom Logic Here ---
// //     console.log("Intercepted HTML:", copiedHTML);
// //     console.log("Intercepted Text:", copiedText);

// //     // Optional: Modify what actually goes into the clipboard
// //     // event.preventDefault();
// //     // event.clipboardData.setData('text/html', copiedHTML + '<p>Added by userscript</p>');
// //     // event.clipboardData.setData('text/plain', copiedText);
// //   },
// //   { capture: true }
// // ); // Crucial: forces your script to execute first

// /**
//  * Converts a DOM node into an HTML string with ONLY non-default styles inlined,
//  * relative links resolved, and Shadow DOM contents flattened.
//  * 
//  * @param {Element} node - The root DOM element to convert.
//  * @param {string} [baseUrl=window.location.href] - Base URL to resolve relative links.
//  * @returns {string} The fully processed HTML string.
//  */
// function elementToHtmlWithStyles(node, baseUrl = window.location.href) {
//   if (!node || node.nodeType !== Node.ELEMENT_NODE) {
//     return '';
//   }

//   // Cache to store default browser styles per tag type to maximize speed
//   const defaultStylesCache = {};

//   // Helper function to resolve relative URLs
//   const resolveUrl = (url) => {
//     try {
//       return new URL(url, baseUrl).href;
//     } catch {
//       return url; 
//     }
//   };

//   /**
//    * Generates a style map of standard browser defaults for a specific tag name
//    * by constructing a temporary, unstyled element in isolation.
//    */
//   const getDefaultStylesForTag = (tagName) => {
//     if (defaultStylesCache[tagName]) return defaultStylesCache[tagName];

//     // Create an isolated sandbox element matching the target tag type
//     const tempElement = document.createElement(tagName);
//     document.body.appendChild(tempElement); 
    
//     const computedDefaults = window.getComputedStyle(tempElement);
//     const defaultsMap = {};

//     // Copy out standard property values into our persistent cache layer
//     for (let i = 0; i < computedDefaults.length; i++) {
//       const prop = computedDefaults[i];
//       defaultsMap[prop] = computedDefaults.getPropertyValue(prop);
//     }

//     tempElement.remove(); // Instantly clean up the DOM footprint
//     defaultStylesCache[tagName] = defaultsMap;
//     return defaultsMap;
//   };

//   // Main recursive cloning and transformation function
//   const cloneAndProcess = (element) => {
//     const clone = element.cloneNode(false);

//     // 1. Omit Default Styles by checking against the Baseline Sandbox Cache
//     const computedStyle = window.getComputedStyle(element);
//     const defaultStyleMap = getDefaultStylesForTag(element.tagName);
//     let filteredCssText = '';

//     for (let i = 0; i < computedStyle.length; i++) {
//       const prop = computedStyle[i];
//       const liveValue = computedStyle.getPropertyValue(prop);
//       const defaultValue = defaultStyleMap[prop];

//       // CRITICAL STRIPPER: Only capture the style if it deviates from the native element default
//       if (liveValue !== defaultValue) {
//         filteredCssText += `${prop}: ${liveValue}; `;
//       }
//     }

//     if (filteredCssText) {
//       clone.setAttribute('style', filteredCssText.trim());
//     }

//     // 2. Resolve Relative Links (href, src, etc.)
//     const urlAttributes = ['src', 'href', 'data', 'poster', 'action'];
//     urlAttributes.forEach(attr => {
//       if (element.hasAttribute(attr)) {
//         const rawValue = element.getAttribute(attr);
//         clone.setAttribute(attr, resolveUrl(rawValue));
//       }
//     });

//     // 3. Handle Shadow DOM and Light DOM Children
//     const shadowRoot = element.shadowRoot;
//     if (shadowRoot) {
//       Array.from(shadowRoot.childNodes).forEach(child => {
//         appendProcessedChild(clone, child);
//       });
//     } else {
//       Array.from(element.childNodes).forEach(child => {
//         appendProcessedChild(clone, child);
//       });
//     }

//     return clone;
//   };

//   const appendProcessedChild = (parentClone, child) => {
//     if (child.nodeType === Node.ELEMENT_NODE) {
//       parentClone.appendChild(cloneAndProcess(child));
//     } else if (child.nodeType === Node.TEXT_NODE) {
//       parentClone.appendChild(document.createTextNode(child.textContent));
//     } else if (child.nodeType === Node.COMMENT_NODE) {
//       parentClone.appendChild(document.createComment(child.textContent));
//     }
//   };

//   const processedElement = cloneAndProcess(node);
//   return processedElement.outerHTML;
// }

// // /**
// //  * Converts a DOM node into a complete HTML string with all computed styles inlined,
// //  * relative links resolved to absolute URLs, and Shadow DOM contents flattened.
// //  *
// //  * @param {Element} node - The root DOM element to convert.
// //  * @param {string} [baseUrl=window.location.href] - Base URL to resolve relative links.
// //  * @returns {string} The fully processed HTML string.
// //  */
// // function elementToHtmlWithStyles(node, baseUrl = window.location.href) {
// //   if (!node || node.nodeType !== Node.ELEMENT_NODE) {
// //     return "";
// //   }

// //   // Helper function to resolve relative URLs
// //   const resolveUrl = (url) => {
// //     try {
// //       return new URL(url, baseUrl).href;
// //     } catch {
// //       return url;
// //     }
// //   };

// //   // Main recursive cloning and transformation function
// //   const cloneAndProcess = (element) => {
// //     // 1. Create a shallow clone of the element tag
// //     const clone = element.cloneNode(false);

// //     // 2. Inline Computed CSS Styles
// //     // We fetch the computed styles from the live document context
// //     const computedStyle = window.getComputedStyle(element);
// //     if (computedStyle && computedStyle.cssText) {
// //       clone.setAttribute("style", computedStyle.cssText);
// //     } else if (computedStyle) {
// //       // Fallback for browsers that don't populate cssText completely
// //       let cssText = "";
// //       for (let i = 0; i < computedStyle.length; i++) {
// //         const prop = computedStyle[i];
// //         cssText += `${prop}: ${computedStyle.getPropertyValue(prop)}; `;
// //       }
// //       if (cssText) clone.setAttribute("style", cssText.trim());
// //     }

// //     // 3. Resolve Relative Links (href, src, data, etc.)
// //     const urlAttributes = ["src", "href", "data", "poster", "action"];
// //     urlAttributes.forEach((attr) => {
// //       if (element.hasAttribute(attr)) {
// //         // Use element[attr] if available to get resolved URL naturally, otherwise fallback
// //         const rawValue = element.getAttribute(attr);
// //         clone.setAttribute(attr, resolveUrl(rawValue));
// //       }
// //     });

// //     // 4. Handle Shadow DOM and Light DOM Children
// //     // Process Shadow DOM if it exists, otherwise process standard light DOM children
// //     const shadowRoot = element.shadowRoot;
// //     if (shadowRoot) {
// //       // Create a wrapper or container if you want to visually segment it,
// //       // or simply append shadow children directly into the cloned tag to flatten it.
// //       Array.from(shadowRoot.childNodes).forEach((child) => {
// //         appendProcessedChild(clone, child);
// //       });
// //     } else {
// //       Array.from(element.childNodes).forEach((child) => {
// //         appendProcessedChild(clone, child);
// //       });
// //     }

// //     return clone;
// //   };

// //   // Helper to process and append different node types safely
// //   const appendProcessedChild = (parentClone, child) => {
// //     if (child.nodeType === Node.ELEMENT_NODE) {
// //       parentClone.appendChild(cloneAndProcess(child));
// //     } else if (child.nodeType === Node.TEXT_NODE) {
// //       parentClone.appendChild(document.createTextNode(child.textContent));
// //     } else if (child.nodeType === Node.COMMENT_NODE) {
// //       parentClone.appendChild(document.createComment(child.textContent));
// //     }
// //   };

// //   // Execute the processing loop and return the outerHTML string
// //   const processedElement = cloneAndProcess(node);
// //   return processedElement.outerHTML;
// // }

  // --- 1. CRITICAL HIJACK FOR CLOSED SHADOW DOMs ---
  // We must track closed roots before they get instantiated. 
  // Map to store reference to shadow roots for any element.
  const shadowRootRegistry = new WeakMap();

  const originalAttachShadow = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function(init) {
    const shadowRoot = originalAttachShadow.call(this, init);
    // Secure a permanent reference to the root regardless of open/closed status
    shadowRootRegistry.set(this, shadowRoot);
    return shadowRoot;
  };

  const TEXT_LENGTH_THRESHOLD = 15;
  const defaultStylesCache = {};

  // Helper to isolate default styles per tag name
  const getDefaultStylesForTag = (tagName) => {
    if (defaultStylesCache[tagName]) return defaultStylesCache[tagName];
    const tempElement = document.createElement(tagName);
    document.body.appendChild(tempElement); 
    const computedDefaults = window.getComputedStyle(tempElement);
    const defaultsMap = {};
    for (let i = 0; i < computedDefaults.length; i++) {
      const prop = computedDefaults[i];
      defaultsMap[prop] = computedDefaults.getPropertyValue(prop);
    }
    tempElement.remove();
    defaultStylesCache[tagName] = defaultsMap;
    return defaultsMap;
  };

  /**
   * Main deep element processor
   */
  function elementToHtmlWithStyles(node, baseUrl = window.location.href) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return '';

    const resolveUrl = (url) => {
      try { return new URL(url, baseUrl).href; } catch { return url; }
    };

    const cloneAndProcess = (element) => {
      // 1. Tag identification & setup
      const clone = element.cloneNode(false);
      const tagName = element.tagName;

      // 2. Safe Style Retrieval (handles elements hidden inside custom roots safely)
      let computedStyle;
      try {
        // Look up the active window element view layer context
        const view = element.ownerDocument.defaultView || window;
        computedStyle = view.getComputedStyle(element);
      } catch (e) {
        computedStyle = null;
      }

      if (computedStyle) {
        const defaultStyleMap = getDefaultStylesForTag(tagName);
        let filteredCssText = '';

        for (let i = 0; i < computedStyle.length; i++) {
          const prop = computedStyle[i];
          const liveValue = computedStyle.getPropertyValue(prop);
          const defaultValue = defaultStyleMap[prop];

          if (liveValue !== defaultValue) {
            filteredCssText += `${prop}: ${liveValue}; `;
          }
        }
        if (filteredCssText) {
          clone.setAttribute('style', filteredCssText.trim());
        }
      }

      // 3. Resolve links
      const urlAttributes = ['src', 'href', 'data', 'poster', 'action'];
      urlAttributes.forEach(attr => {
        if (element.hasAttribute(attr)) {
          clone.setAttribute(attr, resolveUrl(element.getAttribute(attr)));
        }
      });

      // 4. Robust Shadow DOM Lookup (Handles Open, Closed, and Light DOM Nodes)
      const shadowRoot = element.shadowRoot || shadowRootRegistry.get(element);
      
      if (shadowRoot) {
        // Flatten the contents of the shadow root straight into the host clone
        Array.from(shadowRoot.childNodes).forEach(child => {
          appendProcessedChild(clone, child);
        });
      } else {
        // Fallback directly to native tree children
        Array.from(element.childNodes).forEach(child => {
          appendProcessedChild(clone, child);
        });
      }

      return clone;
    };

    const appendProcessedChild = (parentClone, child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        parentClone.appendChild(cloneAndProcess(child));
      } else if (child.nodeType === Node.TEXT_NODE) {
        parentClone.appendChild(document.createTextNode(child.textContent));
      } else if (child.nodeType === Node.COMMENT_NODE) {
        parentClone.appendChild(document.createComment(child.textContent));
      }
    };

    return cloneAndProcess(node).outerHTML;
  }

  // --- 2. KEYDOWN INTERCEPTOR (FIRE-AND-FORGET COURIER) ---
  window.addEventListener('keydown', (event) => {
    const isCopyKey = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c';
    if (!isCopyKey) return;

    event.stopImmediatePropagation();
    event.preventDefault();

    const selection = window.getSelection();
    let targetNode = null;

    if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
      const selectedText = selection.toString();

      if (selectedText.length < TEXT_LENGTH_THRESHOLD) {
        navigator.clipboard.writeText(selectedText).catch(() => {});
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

    // Process deeply nested shadow structures and push directly to background microtask
    const stylizedHtml = elementToHtmlWithStyles(targetNode);
    navigator.clipboard.writeText(stylizedHtml).catch(() => {});
  }, true);

  console.log("🚀 Advanced Shadow DOM copy pipeline injected!");