const flair = ({ stylesheet: _stylesheet, theme: _theme, glossary }) => {
  // utility fn
  const { is, has, keys, values, each, flatten, map } = f;

  // separate variant and style
  const separate = (selector, _style) => {
    // only support screen media query
    let media = "";
    const states = _style
      .split(":")
      .slice(0, -1)
      // variant is a set. styles on the same variant should be merged.
      .sort()
      .filter((item) => {
        if (has(theme, "screen", item)) {
          media = `@media (min-width: ${theme.screen[item]})`;
          return false;
        } else {
          return true;
        }
      });

    const variant = `${media}${selector}${["", ...states].join(":")}`;
    const style = _style.split(":").at(-1);
    return [variant, style];
  };
  // key-foo-[value] -> {prop, value}
  const arbitrary = (style) => {
    // const key = style.split("-")[0];
    // const style = style.split("-").slice(1).join("-");

    const pair = style.split("[");

    const key = pair[0].endsWith("-") ? pair[0].slice(0, -1) : pair[0];
    let prop;
    const value = pair[1].slice(0, -1).replaceAll("_", " ");

    if (has(glossary, key)) {
      const item = glossary[key];
      if (is(item, "string")) {
        prop = item;
      } else if (has(item, "default")) {
        prop = item.default;
      } else {
        prop = values(item)[0];
      }
    } else {
      prop = key;
    }

    return { prop, value };
  };
  // key-foo-bar-abc -> {prop, value}
  const regular = (_style) => {
    // Process modifiers
    const negative = _style.startsWith("-");
    const important = _style.endsWith("!");
    const style = _style.slice(negative ? 1 : 0, ...(important ? [-1] : []));

    // lookup glossary to decide where to split to the key and the variable
    let key, variable;
    let found = false;
    const split = style.split("-");
    for (const i of each(split.length - 1)) {
      const _key = split.slice(0, split.length - i).join("-");
      if (has(glossary, _key)) {
        key = _key;
        variable = split.slice(split.length - i).join("-");
        found = true;
        break;
      }
    }

    // lookup glossary and theme to resolve the prop and the value
    let prop, value;
    if (!found) {
      prop = split.slice(0, split.length - 1).join("-");
      value = split.slice(-1)[0];
    } else {
      const item = glossary[key];
      if (is(item, "string") && item.includes(":")) {
        if (item.includes(";")) {
          prop = [];
          value = [];
          map(item.split(";"), (style) => {
            const [_prop, _value] = style.split(":");
            prop.push(_prop);
            value.push(_value);
          });
        } else {
          [prop, value] = item.split(":");
        }
      } else if (is(item, "string") && !item.includes(":")) {
        prop = item;
        value = has(theme, key, variable) ? theme[key][variable] : variable;
      } else if (is(item, "object")) {
        // type is used for variable -> value
        let type;
        const types = keys(item);
        if (types.length == 1) {
          type = types[0];
        } else {
          let found = false;
          for (const _ of types) {
            if (has(theme, _, variable)) {
              type = _;
              found = true;
              break;
            }
          }
          if (!found) {
            type = item.default;
          }
        }

        prop = item[type];
        value = has(theme, key, variable)
          ? theme[key][variable]
          : has(theme, type, variable)
          ? theme[type][variable]
          : variable;
      }
    }

    // Apply value modifiers
    if (negative) {
      value = `-${value}`;
    }
    if (important) {
      value = `${value} !important`;
    }
    return { prop, value };
  };
  // handle composite props
  const compile = (_styles) => {
    const styles = {};
    map(_styles, ([_prop, _value]) => {
      if (_prop.includes(".")) {
        const [prop, modifier] = _prop.split(".");
        // modifiers that may have multiple values
        // e.g.
        // blur-sm while sm: 2px
        // drop-shadow-sm while sm: "drop-shadow(a) drop-shadow(b)"
        // only the former should be wrapped with blur()
        const multiple = ["drop-shadow"].includes(modifier);
        const value = multiple ? _value : `${modifier}(${_value}) `;
        if (!has(styles, prop)) {
          styles[prop] = "";
        }
        styles[prop] += value;
      } else {
        styles[_prop] = _value;
      }
    });
    return styles;
  };

  const stylesheet = flatten(
    _stylesheet,
    (parent, children) => `${parent} :is(${children})`
  );
  const theme = map(_theme, ([type, variables]) => [
    type,
    flatten(variables, "-"),
  ]);

  const variants = {};
  map(stylesheet, ([selector, styles]) => {
    // split by white space, not only space
    map(styles.split(/\s+/), (_style) => {
      const [variant, style] = separate(selector, _style);
      if (!has(variants, variant)) {
        // init variants[variant]
        variants[variant] = {};
      }
      const { prop, value } = style.endsWith("]")
        ? arbitrary(style)
        : regular(style);

      // handle array prop (e.g. mx -> margin left, margin right)
      if (is(prop, "string")) {
        variants[variant][prop] = value;
      } else if (is(prop, "array")) {
        const props = prop;
        if (is(value, "array")) {
          map(props, (prop, index) => {
            variants[variant][prop] = value[index];
          });
        } else {
          map(props, (prop) => {
            variants[variant][prop] = value;
          });
        }
      }
    });
  });

  return map(variants, ([variant, _styles]) => {
    const styles = compile(_styles);
    return `${variant}{${map(
      styles,
      ([prop, value]) => `${prop}:${value};`
    ).join("")}}`;
  }).join("");
};
