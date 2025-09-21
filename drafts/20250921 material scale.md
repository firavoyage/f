write a js fn.

- use const arrow fn. write jsdoc with examples.
- no param
- listen to ctrl scroll and ctrl +/-
- dont let browser use default zoom
- ctrl wheel forward or ctrl +: call scale(1)
- ctrl wheel backward or ctrl -: call scale(0)
- returns unsubscriber fn.

---

Here's the JavaScript function that meets your requirements:

```javascript
/**
 * Listens to Ctrl + scroll and Ctrl + /- keyboard events for zoom control.
 * Prevents default browser zoom behavior and triggers custom scale function.
 *
 * @returns {Function} Unsubscriber function to remove event listeners.
 *
 * @example
 * const unsubscribe = zoomHandler();
 * // Later call unsubscribe to remove event listeners
 * unsubscribe();
 */
const zoomHandler = () => {
  /**
   * Handles wheel events for Ctrl + scroll zoom control.
   * @param {WheelEvent} event - The wheel event object.
   */
  const handleWheel = (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
      scale(event.deltaY < 0 ? 1 : 0);
    }
  };

  /**
   * Handles keydown events for Ctrl + /- zoom control.
   * @param {KeyboardEvent} event - The keydown event object.
   */
  const handleKeydown = (event) => {
    if (event.ctrlKey) {
      if (event.code === "Equal" || event.code === "NumpadAdd") {
        event.preventDefault();
        scale(1);
      } else if (event.code === "Minus" || event.code === "NumpadSubtract") {
        event.preventDefault();
        scale(0);
      }
    }
  };

  // Add event listeners
  document.addEventListener("wheel", handleWheel, { passive: false });
  document.addEventListener("keydown", handleKeydown);

  // Return unsubscriber function
  return () => {
    document.removeEventListener("wheel", handleWheel);
    document.removeEventListener("keydown", handleKeydown);
  };
};

// Example scale function (to be implemented separately)
const scale = (direction) => {
  console.log(`Zoom ${direction ? "in" : "out"}`);
};
```

Key features:

1. Uses `passive: false` on wheel event to allow `preventDefault()`
2. Handles both mouse wheel and keyboard zoom shortcuts
3. Returns an unsubscriber function for cleanup
4. Uses proper event codes for keyboard handling
5. Prevents default browser zoom behavior for these interactions

To use this:

1. Call `zoomHandler()` to activate the listeners
2. The returned function will remove all listeners when called
3. Implement your own `scale()` function with actual zoom logic

The handler supports:

- Ctrl + Scroll wheel (forward/backward)
- Ctrl + +/= (both main and numpad)
- Ctrl + - (both main and numpad)
