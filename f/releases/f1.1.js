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
};
