// update 2025.09.21 23:24 fix!: make "ctrl 0" work

/**
 * @typedef {Object.<string, function(KeyboardEvent): void>} KeyBindings
 * An object mapping key combinations to callback functions.
 * Key combinations are space-separated strings (e.g., 'ctrl c', 'a b c').
 * Callbacks receive the native KeyboardEvent as an argument.
 */

/**
 * Creates a keyboard shortcut listener that handles multiple key combinations.
 * @param {KeyBindings} bindings - An object where keys are key combinations and values are callback functions.
 * @returns {function(): void} A cleanup function that removes all event listeners when called.
 *
 * @example
 * // Basic usage with single key combination
 * const unsubscribe = listen({
 *   'ctrl c': (event) => {
 *     console.log('Copy triggered', event);
 *   },
 *   'ctrl v': (event) => {
 *     console.log('Paste triggered', event);
 *   }
 * });
 *
 * @example
 * // Multi-key combination and cleanup
 * const unsubscribe = listen({
 *   'a b c': (event) => {
 *     console.log('A, B, and C pressed together');
 *     event.preventDefault();
 *   },
 *   'shift space': (event) => {
 *     console.log('Shift + Space pressed');
 *   }
 * });
 *
 * // Later, to remove all listeners:
 * unsubscribe();
 *
 * @example
 * // Order normalization (these are equivalent)
 * listen({
 *   'ctrl alt delete': (e) => { /* handler *\/ },
 *   'alt delete ctrl': (e) => { /* same handler *\/ } // Will trigger same callback
 * });
 */
const listen = (bindings) => {
  const keyStates = {};
  const activeBindings = new Map();

  // Key mapping for normalization
  const keyMapping = {
    ctrl: "control",
    esc: "escape",
    left: "arrowleft",
    right: "arrowright",
    up: "arrowup",
    down: "arrowdown",
    " ": "space",
    space: "space",
  };

  // Normalize and store bindings
  Object.entries(bindings).forEach(([keys, callback]) => {
    const keyArr = keys
      .toLowerCase()
      .split(" ")
      .map((k) => keyMapping[k] || k) // Map keys to normalized names
      .filter(Boolean); // Remove empty strings

    const normalizedKeys = keyArr.sort().join(" ");
    activeBindings.set(normalizedKeys, callback);
  });

  const resetKeyStates = () => {
    for (const key in keyStates) {
      keyStates[key] = false;
    }
  };

  const handleKeyDown = (e) => {
    // Normalize key name using mapping or default to lowercase
    let key = keyMapping[e.key.toLowerCase()] || e.key.toLowerCase();
    keyStates[key] = true;

    // Get current combination of pressed keys
    const currentCombo = Object.keys(keyStates)
      .filter((k) => keyStates[k])
      .sort()
      .join(" ");

    if (activeBindings.has(currentCombo)) {
      e.preventDefault();
      activeBindings.get(currentCombo)(e);
    }
  };

  const handleKeyUp = (e) => {
    let key = keyMapping[e.key.toLowerCase()] || e.key.toLowerCase();
    keyStates[key] = false;
  };

  const handleBlur = () => {
    resetKeyStates();
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  window.addEventListener("blur", handleBlur);

  // Return unsubscribe function
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
    window.removeEventListener("blur", handleBlur);
    resetKeyStates();
    activeBindings.clear();
  };
};

// const listen = (bindings) => {
//   const keyStates = {};
//   const activeBindings = new Map();

//   // Parse and store the bindings
//   Object.entries(bindings).forEach(([keys, callback]) => {
//     const keyArr = keys.toLowerCase().split(" ");
//     const normalizedKeys = keyArr.sort().join(" ");
//     activeBindings.set(normalizedKeys, callback);
//   });

//   const resetKeyStates = () => {
//     for (const key in keyStates) {
//       keyStates[key] = false;
//     }
//   };

//   const handleKeyDown = (e) => {
//     const key = e.key.toLowerCase();
//     keyStates[key] = true;

//     // Get current combination of pressed keys
//     const currentCombo = Object.keys(keyStates)
//       .filter((k) => keyStates[k])
//       .sort()
//       .join(" ");

//     if (activeBindings.has(currentCombo)) {
//       e.preventDefault();
//       activeBindings.get(currentCombo)(e);
//     }
//   };

//   const handleKeyUp = (e) => {
//     const key = e.key.toLowerCase();
//     keyStates[key] = false;
//   };

//   const handleBlur = () => {
//     resetKeyStates();
//   };

//   document.addEventListener("keydown", handleKeyDown);
//   document.addEventListener("keyup", handleKeyUp);
//   window.addEventListener("blur", handleBlur);

//   // Return unsubscribe function
//   return () => {
//     document.removeEventListener("keydown", handleKeyDown);
//     document.removeEventListener("keyup", handleKeyUp);
//     window.removeEventListener("blur", handleBlur);
//     Object.keys(bindings).forEach((key) => {
//       activeBindings.delete(key.toLowerCase().split(" ").sort().join(" "));
//     });
//     resetKeyStates();
//   };
// };
