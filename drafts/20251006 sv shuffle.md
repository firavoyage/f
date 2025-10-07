write a js fn.

- use const arrow fn. write jsdoc with examples.
- name: shuffle
- param: array
- shuffle the array
- returns: shuffled array

---

Here's the JavaScript function using the Fisher-Yates shuffle algorithm:

```javascript
/**
 * Shuffles an array using the Fisher-Yates algorithm and returns a new shuffled array.
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} A new shuffled array.
 * @example
 * // Returns a shuffled array (results may vary)
 * shuffle([1, 2, 3, 4]);
 * // Example output: [3, 1, 4, 2]
 *
 * // Works with any array type
 * shuffle(['apple', 'banana', 'cherry']);
 * // Example output: ['banana', 'cherry', 'apple']
 */
const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
```

This implementation:

1. Uses the modern Fisher-Yates shuffle algorithm for uniform distribution
2. Creates a copy of the original array to avoid mutation
3. Uses array destructuring for efficient swapping
4. Works with arrays of any type (numbers, strings, objects, etc.)
5. Returns a new array rather than modifying the original

The JSDoc includes:

- Clear parameter and return descriptions
- Two usage examples showing different data types
- Notes about the non-mutating behavior and random nature of results
