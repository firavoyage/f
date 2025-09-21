(function () {
  "use strict";

  /**
   * Normalizes and validates a key string for the mouse event.
   * @param {string} key - The key string to normalize.
   * @returns {string} The normalized key string.
   * @throws {Error} If the key contains invalid modifiers or events.
   */
  function normalizeKey(key) {
    const parts = key.trim().toLowerCase().split(/\s+/);
    const modifiers = new Set();
    let eventType = null;

    for (const part of parts) {
      if (part === "command" || part === "ctrl") {
        modifiers.add("ctrl");
      } else if (part === "alt" || part === "shift") {
        modifiers.add(part);
      } else if (part === "click" || part === "rightclick") {
        if (eventType) throw new Error(`Duplicate event type: ${key}`);
        eventType = part;
      } else {
        throw new Error(`Invalid key part: ${part}`);
      }
    }

    if (!eventType) throw new Error(`Missing event type: ${key}`);

    // Sort modifiers for consistency
    const sortedModifiers = [...modifiers].sort();
    return sortedModifiers.length
      ? [...sortedModifiers, eventType].join(" ")
      : eventType;
  }

  /**
   * @typedef {Object} Point
   * @property {number} x - The x-coordinate relative to viewport center
   * @property {number} y - The y-coordinate relative to viewport center
   */

  /**
   * Main mouse event handler function
   * @param {Object} handlers - Object with event keys and handler functions
   * @returns {function()} Unsubscribe function to remove all event listeners
   * @example
   * // Handle regular clicks
   * mouse({
   *   click: (point) => console.log(`Clicked at ${point.x}, ${point.y}`)
   * });
   * @example
   * // Handle modifier combinations
   * mouse({
   *   'ctrl click': (point) => console.log('Ctrl+Click'),
   *   'ctrl alt rightclick': (point) => console.log('Ctrl+Alt+RightClick')
   * });
   */
  const mouse = (handlers) => {
    const normalizedHandlers = new Map();
    const listener = (event) => {
      const type = event.type === "contextmenu" ? "rightclick" : "click";
      const modifiers = [];

      if (event.ctrlKey || event.metaKey) modifiers.push("ctrl");
      if (event.altKey) modifiers.push("alt");
      if (event.shiftKey) modifiers.push("shift");

      const sortedModifiers = modifiers.sort();
      const key = sortedModifiers.length
        ? [...sortedModifiers, type].join(" ")
        : type;

      if (normalizedHandlers.has(key)) {
        const point = {
          x: event.clientX,
          y: event.clientY,
        };
        normalizedHandlers.get(key)(point);
      }
    };

    // Normalize all handler keys
    Object.entries(handlers).forEach(([key, handler]) => {
      normalizedHandlers.set(normalizeKey(key), handler);
    });

    // Add event listeners
    window.addEventListener("click", listener);
    window.addEventListener("contextmenu", listener);

    // Return unsubscribe function
    return () => {
      window.removeEventListener("click", listener);
      window.removeEventListener("contextmenu", listener);
      normalizedHandlers.clear();
    };
  };

  // Export to global scope
  window.mouse = mouse;
})();
