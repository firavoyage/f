/**
 * Creates a vector data structure that maintains values and their bindings in a linked list-like structure.
 * @param {Array} [array=[]] - Initial array of values to populate the vector
 * @returns {Function} The vector function with additional methods
 * @example
 * const v = vector([1, 2, 3]);
 * v(0); // returns 1
 * v.first(); // returns 0
 * v.last(); // returns 2
 * v.replace(0, 2, 'a', 'b');
 * // Now values: {0:1, 1:2, 2:3, 3:'a', 4:'b'}
 * // Bindings: 0->3->4->2 (1 is orphaned but still in values)
 */
const vector = (array = []) => {
  const values = new Map();
  const bindings = new Map();
  let next = array.length;
  let firstKey = false;
  let lastKey = false;

  // Initialize with array values
  array.forEach((value, index) => {
    values.set(index, value);

    const prev = index > 0 ? index - 1 : false;
    const next = index < array.length - 1 ? index + 1 : false;
    bindings.set(index, { prev, next });

    if (index === 0) firstKey = index;
    if (index === array.length - 1) lastKey = index;
  });

  if (array.length === 0) {
    firstKey = false;
    lastKey = false;
  }

  /**
   * Gets the value for a given key
   * @param {number} key - The key to retrieve
   * @returns {*} The value or false if key doesn't exist
   * @example
   * v(0); // returns the value at key 0
   */
  const v = (key) => {
    return values.has(key) ? values.get(key) : false;
  };

  /**
   * Sets a value for the given key
   * @param {number} key - The key to set
   * @param {*} value - The value to set
   * @example
   * v.set(0, 'new value');
   */
  v.set = (key, value) => {
    values.set(key, value);
  };

  /**
   * Replaces a sequence between left and right keys with new values
   * @param {number} leftKey - The starting key of the sequence to replace
   * @param {number} rightKey - The ending key of the sequence to replace
   * @param {...*} valuesToInsert - Values to insert between left and right keys
   * @example
   * // Values: {0:'a', 1:'b', 2:'c'}, bindings: 0->1->2
   * v.replace(0, 2, 'x', 'y');
   * // Values: {0:'a', 1:'b', 2:'c', 3:'x', 4:'y'}
   * // Bindings: 0->3->4->2 (1 is orphaned)
   */
  v.replace = (leftKey, rightKey, ...valuesToInsert) => {
    if (!bindings.has(leftKey) || !bindings.has(rightKey)) return;

    const leftBinding = bindings.get(leftKey);
    const rightBinding = bindings.get(rightKey);

    if (valuesToInsert.length === 0) {
      // If no values to insert, just connect left to right directly
      leftBinding.next = rightKey;
      rightBinding.prev = leftKey;
      bindings.set(leftKey, leftBinding);
      bindings.set(rightKey, rightBinding);
      return;
    }

    // Create new bindings for inserted values
    let currentKey = leftKey;

    valuesToInsert.forEach((value, index) => {
      const newKey = next++;
      values.set(newKey, value);

      const newBinding = {
        prev: currentKey,
        next: false,
      };

      // Update previous binding to point to this new key
      if (currentKey === leftKey) {
        leftBinding.next = newKey;
        bindings.set(leftKey, leftBinding);
      } else {
        const prevBinding = bindings.get(currentKey);
        prevBinding.next = newKey;
        bindings.set(currentKey, prevBinding);
      }

      bindings.set(newKey, newBinding);
      currentKey = newKey;
    });

    // Connect the last inserted value to the right key
    const lastNewBinding = bindings.get(currentKey);
    lastNewBinding.next = rightKey;
    bindings.set(currentKey, lastNewBinding);

    rightBinding.prev = currentKey;
    bindings.set(rightKey, rightBinding);

    // Update first/last keys if needed
    if (leftKey === firstKey && rightBinding.prev !== false) {
      // If we inserted before the first element, update firstKey
      firstKey = leftKey;
    }
    if (rightKey === lastKey && lastNewBinding.next !== false) {
      // If we inserted after the last element, update lastKey
      lastKey = currentKey;
    }
  };

  /**
   * Inserts values after the left key (convenience method for replace)
   * @param {number} leftKey - The key to insert after
   * @param {...*} valuesToInsert - Values to insert
   * @example
   * v.insert(0, 'x', 'y'); // Inserts after key 0
   */
  v.insert = (leftKey, ...valuesToInsert) => {
    if (!bindings.has(leftKey)) return;

    const leftBinding = bindings.get(leftKey);
    const rightKey = leftBinding.next !== false ? leftBinding.next : leftKey;

    v.replace(leftKey, rightKey, ...valuesToInsert);
  };

  /**
   * Removes a key from the bindings (but keeps it in values)
   * @param {number} key - The key to remove from bindings
   * @example
   * v.remove(1); // Removes key 1 from the binding chain
   */
  v.remove = (key) => {
    if (!bindings.has(key)) return;

    const binding = bindings.get(key);
    const { prev, next } = binding;

    // Connect previous and next elements
    if (prev !== false) {
      const prevBinding = bindings.get(prev);
      prevBinding.next = next;
      bindings.set(prev, prevBinding);
    }

    if (next !== false) {
      const nextBinding = bindings.get(next);
      nextBinding.prev = prev;
      bindings.set(next, nextBinding);
    }

    // Update first and last keys if needed
    if (key === firstKey) {
      firstKey = next !== false ? next : false;
    }
    if (key === lastKey) {
      lastKey = prev !== false ? prev : false;
    }
  };

  /**
   * Clears all bindings but keeps values
   * @example
   * v.clear(); // Clears all bindings
   */
  v.clear = () => {
    bindings.clear();
    firstKey = false;
    lastKey = false;
  };

  /**
   * Checks if the vector is empty (no bindings)
   * @returns {boolean} True if empty
   * @example
   * v.empty(); // returns true if no elements are bound
   */
  v.empty = () => {
    return firstKey === false;
  };

  /**
   * Gets the first key in the binding chain
   * @returns {number|false} The first key or false if empty
   * @example
   * v.first(); // returns the first key
   */
  v.first = () => {
    return firstKey;
  };

  /**
   * Gets the last key in the binding chain
   * @returns {number|false} The last key or false if empty
   * @example
   * v.last(); // returns the last key
   */
  v.last = () => {
    return lastKey;
  };

  /**
   * Gets the previous key for a given key
   * @param {number} key - The key to get the previous for
   * @returns {number|false} The previous key or false
   * @example
   * v.prev(1); // returns the key before 1
   */
  v.prev = (key) => {
    return bindings.has(key) ? bindings.get(key).prev : false;
  };

  /**
   * Gets the next key for a given key
   * @param {number} key - The key to get the next for
   * @returns {number|false} The next key or false
   * @example
   * v.next(1); // returns the key after 1
   */
  v.next = (key) => {
    return bindings.has(key) ? bindings.get(key).next : false;
  };

  return v;
};
