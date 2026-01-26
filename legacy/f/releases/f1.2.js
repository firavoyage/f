const f = {
  /**
   * check type equality
   *
   * the jsdoc is for auto complete
   * @param {*} a
   * @param {"number"|"string"|"boolean"|"bigint"|"symbol"
   * |"array"|"object"|"function"|Function} type
   * @returns
   */
  is(a, type) {
    // invalid value does not belong to any type
    if (a === undefined || a === null) {
      return false;
    }
    if (type == "array") {
      return Array.isArray(a);
    } else if (typeof type == "function") {
      return a instanceof type;
    } else {
      return typeof a == type;
    }
  },
  has(obj, ...keys) {
    const { is } = f;
    if (!is(obj, "object")) return false;

    let current = obj;
    for (const key of keys) {
      // Check if current level has the property
      if (!Object.prototype.hasOwnProperty.call(current, key)) {
        return false;
      }

      // Move to next level
      current = current[key];
    }

    return true;
  },
  keys(obj) {
    return Object.keys(obj);
  },
  values(obj) {
    return Object.values(obj);
  },
  each(n) {
    return Array.from({ length: n + 1 }, (_, i) => i);
  },
  /**
   * flatten an object. "" key will not have a connector before it.
   * @param {*} obj
   * @param {string|function} connector
   * @returns
   */
  flatten(obj, connector) {
    const { is, map } = f;
    let result = {},
      current = obj;
    while (true) {
      const next = {};
      map(current, ([key, value]) => {
        if (typeof value == "object") {
          map(value, ([_key, _value]) => {
            if (_key == "") {
              next[key] = _value;
            } else {
              if (is(connector, "string")) {
                next[`${key}${connector}${_key}`] = _value;
              } else if (is(connector, "function")) {
                next[connector(key, _key)] = _value;
              }
            }
          });
        } else {
          result[key] = value;
        }
      });
      current = next;
      if (Object.keys(current).length == 0) {
        break;
      }
    }
    return result;
  },
  /**
   * map an array or entries of an object to a fn
   * @param {Array|object} obj
   * @param {function} fn
   * @returns
   */
  map(obj, fn) {
    if (Array.isArray(obj)) {
      return obj.map(fn);
    } else {
      const results = Object.entries(obj).map(fn);

      // Check if ALL results are valid entries (arrays with at least 2 elements)
      const entries = results.every(
        (result) => Array.isArray(result) && result.length >= 2
      );

      if (entries) {
        return Object.fromEntries(results);
      } else {
        return results;
      }
    }
  },
  generate: (fn, a, b) =>
    Object.fromEntries(
      Array.from({ length: b - a + 1 }, (_, i) => a + i).map((n) => [n, fn(n)])
    ),
  /**
   * Deeply merges two objects, returning a new object without modifying the originals.
   * If both objects have the same key and both values are objects, they are merged recursively.
   * If both objects have the same key and either value is not an object, the target's value is kept.
   *
   * @param {Object|any} target - The target object to merge into
   * @param {Object|any} source - The source object to merge from
   * @returns {Object|any} A new merged object (or primitive if inputs aren't objects)
   *
   * @example
   * // Basic merge
   * merge({ a: 1 }, { b: 2 });
   * // Returns: { a: 1, b: 2 }
   *
   * @example
   * // Nested merge
   * merge(
   *   { a: 1, b: { c: 2 } },
   *   { b: { d: 3 }, e: 4 }
   * );
   * // Returns: { a: 1, b: { c: 2, d: 3 }, e: 4 }
   *
   * @example
   * // Conflicting keys (non-object)
   * merge(
   *   { a: 1, b: { c: 2 } },
   *   { a: 9, b: 42 }
   * );
   * // Returns: { a: 1, b: { c: 2 } } (keeps target's values)
   */
  merge(target, source) {
    /**
     * Checks if a value is a non-null object
     * @param {any} obj - Value to check
     * @returns {boolean} True if object
     */
    const isObject = (obj) => typeof obj === "object" && obj !== null;

    /**
     * Creates a deep copy of an object/array using iterative DFS
     * @param {Object|any} obj - Object to copy
     * @returns {Object|any} Deep copy
     */
    const deepCopy = (obj) => {
      if (!isObject(obj)) return obj;

      const copy = Array.isArray(obj) ? [...obj] : { ...obj };
      const stack = [{ original: obj, copy }];

      while (stack.length > 0) {
        const { original, copy: currentCopy } = stack.pop();

        for (const key in original) {
          if (original.hasOwnProperty(key)) {
            const val = original[key];
            if (isObject(val)) {
              const newCopy = Array.isArray(val) ? [...val] : { ...val };
              currentCopy[key] = newCopy;
              stack.push({ original: val, copy: newCopy });
            }
          }
        }
      }
      return copy;
    };

    // Create deep copy of target
    const result = deepCopy(target);

    // Only merge if both are objects
    if (isObject(result) && isObject(source)) {
      const stack = [{ source, result }];

      while (stack.length > 0) {
        const { source: currentSource, result: currentResult } = stack.pop();

        for (const key in currentSource) {
          if (currentSource.hasOwnProperty(key)) {
            const sourceVal = currentSource[key];
            const resultVal = currentResult[key];

            if (currentResult.hasOwnProperty(key)) {
              // Merge only if both values are objects
              if (isObject(resultVal) && isObject(sourceVal)) {
                stack.push({
                  source: sourceVal,
                  result: resultVal,
                });
              }
            } else {
              // Copy source value if key doesn't exist in target
              currentResult[key] = deepCopy(sourceVal);
            }
          }
        }
      }
    }

    return result;
  },
};
