const flair = ({
  stylesheet: _stylesheet,
  theme: _theme,
  glossary: _glossary,
}) => {
  // utility fn
  const { is, has, keys, values, each, flatten, map, generate, merge } = f;

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

  // todo: merge deeply nested obj with f
  const themedefault = {
    // color
    color: {
      none: "none",
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
    },
    // text
    size: {
      ...generate((n) => `${0.25 * n}rem`, 1, 100),
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    weight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    leading: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    // margin, paddings
    length: {
      ...generate((n) => `${0.25 * n}rem`, 1, 100),
      full: "100%",
      min: "min-content",
      max: "max-content",
      none: "none",
    },
    percentage: {
      ...generate((n) => `${n}%`, 0, 200),
    },
    angle: {
      ...generate((n) => `${n}deg`, 0, 180),
    },
    // border radius
    rounded: {
      "": "0.25rem",
      "2xl": "0rem",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    // filter.drop-shadow
    "drop-shadow": {
      sm: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05))",
      "": "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))",
      md: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
      lg: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",
      xl: "drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))",
      "2xl": "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
      none: "drop-shadow(0 0 #0000)",
    },
    // media query
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  };
  const theme = map(merge(themedefault, _theme), ([type, variables]) => [
    type,
    flatten(variables, "-"),
  ]);

  const glossarydefault = {
    // Layout utilities
    display: "display",
    block: "display:block",
    inline: "display:inline",
    hidden: "display:none",
    table: "display:table",
    "table-row": "display:table-row",
    "table-cell": "display:table-cell",

    // Position utilities
    pos: "position",
    static: "position:static",
    relative: "position:relative",
    absolute: "position:absolute",
    fixed: "position:fixed",
    sticky: "position:sticky",
    top: {
      length: "top",
    },
    right: {
      length: "right",
    },
    bottom: {
      length: "bottom",
    },
    left: {
      length: "left",
    },
    inset: {
      length: ["top", "bottom", "left", "right"],
    },
    "inset-x": {
      length: ["left", "right"],
    },
    "inset-y": {
      length: ["top", "bottom"],
    },
    z: "z-index",

    // Sizing utilities
    w: {
      length: "width",
    },
    h: {
      length: "height",
    },
    "min-w": {
      length: "min-width",
    },
    "max-w": {
      length: "max-width",
    },
    "min-h": {
      length: "min-height",
    },
    "max-h": {
      length: "max-height",
    },
    "w-full": "width:100%",
    "h-full": "height:100%",
    "w-screen": "width:100vw",
    "h-screen": "height:100vh",
    "box-border": "box-sizing:border-box",
    "box-content": "box-sizing:content-box",

    // Margin utilities
    m: {
      length: "margin",
    },
    mt: {
      length: "margin-top",
    },
    mr: {
      length: "margin-right",
    },
    mb: {
      length: "margin-bottom",
    },
    ml: {
      length: "margin-left",
    },
    mx: {
      length: ["margin-left", "margin-right"],
    },
    my: {
      length: ["margin-top", "margin-bottom"],
    },

    // Padding utilities
    p: {
      length: "padding",
    },
    pt: {
      length: "padding-top",
    },
    pr: {
      length: "padding-right",
    },
    pb: {
      length: "padding-bottom",
    },
    pl: {
      length: "padding-left",
    },
    px: {
      length: ["padding-left", "padding-right"],
    },
    py: {
      length: ["padding-top", "padding-bottom"],
    },

    // Flexbox utilities
    flex: "flex",
    "flex-row": "flex-direction:row",
    "flex-col": "flex-direction:column",
    "flex-wrap": "flex-wrap:wrap",
    "flex-nowrap": "flex-wrap:nowrap",
    "flex-1": "flex:1 1 0%",
    "flex-auto": "flex:1 1 auto",
    "flex-initial": "flex:0 1 auto",
    "flex-none": "flex:none",
    justify: "justify-content",
    items: "align-items",
    content: "align-content",
    self: "align-self",

    // Grid utilities
    grid: "display:grid",
    "grid-cols": "grid-template-columns",
    "grid-rows": "grid-template-rows",
    "col-span": "grid-column",
    "row-span": "grid-row",
    gap: "gap",
    "gap-x": "column-gap",
    "gap-y": "row-gap",

    // Overflow utilities
    overflow: {
      overflow: "overflow",
    },
    "overflow-x": {
      overflow: "overflow-x",
    },
    "overflow-y": {
      overflow: "overflow-y",
    },

    // Typography utilities
    text: {
      color: "color",
      size: "font-size",
      weight: "font-weight",
      default: "color",
    },
    font: "font-family",
    style: "font-style",
    decoration: "text-decoration",
    underline: "text-decoration:underline",
    linethrough: "text-decoration:line-through",
    leading: "line-height",
    tracking: {
      size: "letter-spacing",
    },
    list: "list-style-type",
    truncate: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap",
    "text-left": "text-align:left",
    "text-center": "text-align:center",
    "text-right": "text-align:right",
    "text-justify": "text-align:justify",
    uppercase: "text-transform:uppercase",
    lowercase: "text-transform:lowercase",
    capitalize: "text-transform:capitalize",
    "normal-case": "text-transform:none",

    // Color utilities
    bg: {
      color: "background-color",
    },
    border: {
      color: "border-color",
    },

    // Background utilities
    "bg-cover": "background-size:cover",
    "bg-contain": "background-size:contain",
    "bg-center": "background-position:center",
    "bg-repeat": "background-repeat:repeat",
    "bg-no-repeat": "background-repeat:no-repeat",
    "bg-fixed": "background-attachment:fixed",

    // Border utilities
    border: {
      width: "border-width",
    },
    "border-t": {
      width: "border-top-width",
    },
    "border-r": {
      width: "border-right-width",
    },
    "border-b": {
      width: "border-bottom-width",
    },
    "border-l": {
      width: "border-left-width",
    },
    "border-x": {
      width: ["border-left-width", "border-right-width"],
    },
    "border-y": {
      width: ["border-top-width", "border-bottom-width"],
    },
    rounded: "border-radius",

    // Float utilities
    float: "float",
    "float-left": "float:left",
    "float-right": "float:right",
    "float-none": "float:none",
    clear: "clear",
    "clear-left": "clear:left",
    "clear-right": "clear:right",
    "clear-both": "clear:both",
    "clear-none": "clear:none",

    // Effect utilities
    shadow: "box-shadow",
    opacity: "opacity",

    // Transform utilities
    transform: "transform",
    origin: "transform-origin",
    "transform-3d": "transform-style: preserve-3d",
    "transform-flat": "transform-style: flat",
    backface: "backface-visibility",
    rotate: {
      angle: "rotate",
    },
    "rotate-x": {
      angle: "transform.rotateX",
    },
    "rotate-y": {
      angle: "transform.rotateY",
    },
    "rotate-z": {
      angle: "transform.rotateZ",
    },
    scale: {
      percentage: "scale",
    },
    translate: {
      length: ["transform.translateX", "transform.translateY"],
    },
    "translate-x": {
      length: "transform.translateX",
    },
    "translate-y": {
      length: "transform.translateY",
    },
    "translate-z": {
      length: "transform.translateZ",
    },
    skew: {
      angle: ["transform.skewX", "transform.skewY"],
    },
    "skew-x": {
      angle: "transform.skewX",
    },
    "skew-y": {
      angle: "transform.skewY",
    },

    // Transition utilities
    transition: "transition",
    "transition-normal": "transition-behavior: normal",
    "transition-discrete": "transition-behavior: allow-discrete",
    duration: "transition-duration",
    ease: "transition-timing-function",
    delay: "transition-delay",

    // Cursor utilities
    cursor: "cursor",
    pointer: "cursor:pointer",
    "not-allowed": "cursor:not-allowed",

    // Visibility utilities
    visible: "visibility:visible",
    invisible: "visibility:hidden",

    // Filter utilities
    filter: "filter",
    "filter-none": "filter:none",
    blur: {
      length: "filter.blur",
    },
    brightness: {
      percentage: "filter.brightness",
    },
    contrast: {
      percentage: "filter.contrast",
    },
    grayscale: {
      percentage: "filter.grayscale",
    },
    "hue-rotate": {
      angle: "filter.hue-rotate",
    },
    invert: {
      percentage: "filter.invert",
    },
    saturate: {
      percentage: "filter.saturate",
    },
    sepia: {
      percentage: "filter.sepia",
    },
    "drop-shadow": "filter.drop-shadow",

    // Backdrop filter utilities
    "backdrop-filter": "backdrop-filter",
    "backdrop-blur": {
      length: "backdrop-filter.blur",
    },
    "backdrop-brightness": {
      percentage: "backdrop-filter.brightness",
    },
    "backdrop-contrast": {
      percentage: "backdrop-filter.contrast",
    },
    "backdrop-grayscale": {
      percentage: "backdrop-filter.grayscale",
    },
    "backdrop-hue-rotate": {
      angle: "backdrop-filter.hue-rotate",
    },
    "backdrop-invert": {
      percentage: "backdrop-filter.invert",
    },
    "backdrop-opacity": {
      percentage: "backdrop-filter.opacity",
    },
    "backdrop-saturate": {
      percentage: "backdrop-filter.saturate",
    },
    "backdrop-sepia": {
      percentage: "backdrop-filter.sepia",
    },

    // svg
    fill: {
      color: "fill",
    },
    stroke: {
      color: "stroke",
      length: "stroke-width",
      default: "length",
    },
  };
  const glossary = merge(glossarydefault, _glossary);

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

window.flair = flair;
