// todo: move the libraries to f. the creation should be moved. 
// what about other stuff? think. just categorize them
// things might be changed.

// i love jsdoc. i dislike typescript.

// todo: flair (react, saba), precious, material, mdx

const { h, p, e, r } = voyage;

// todo: make flair a js library

/**
 * check type equality
 *
 * the jsdoc is for auto complete
 * @param {*} a
 * @param {"number"|"string"|"boolean"|"bigint"|"symbol"
 * |"array"|"object"|"function"|Function} type
 * @returns
 */
const is = (a, type) => {
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
};
const has = (obj, ...keys) => {
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
};
const keys = (obj) => {
  return Object.keys(obj);
};
const values = (obj) => {
  return Object.values(obj);
};
const each = (a) => {
  return Object.keys(Array.from({ length: a + 1 }));
};
/**
 * flatten an object. "" key will not have a connector before it.
 * @param {*} obj
 * @param {string|function} connector
 * @returns
 */
const flatten = (obj, connector) => {
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
};
/**
 * map an array or entries of an object to a fn
 * @param {Array|object} obj
 * @param {function} fn
 * @returns
 */
const map = (obj, fn) => {
  if (Array.isArray(obj)) {
    return obj.map(fn);
  } else {
    return Object.entries(obj).map(fn);
  }
};
const generate = (fn, a, b) =>
  Object.fromEntries(
    Array.from({ length: b - a + 1 }, (_, i) => a + i).map((n) => [n, fn(n)])
  );

const flair = ({ stylesheet: _stylesheet, theme: _theme, glossary }) => {
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
  const arbitary = (style) => {
    // const key = style.split("-")[0];
    // const style = style.split("-").slice(1).join("-");

    const pair = style.split("[");

    const key = pair[0].endsWith("-") ? pair[0].slice(0, -1) : pair[0];
    let prop;
    const value = pair[1].slice(0, -1).replaceAll("_", " ");

    if (has(glossary, key)) {
      if (is(glossary[key], "string")) {
        prop = glossary[key];
      } else if (has(glossary[key], "default")) {
        prop = glossary[key].default;
      } else {
        prop = values(glossary[key])[0];
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
      const item = split.slice(0, split.length - i).join("-");
      if (has(glossary, item)) {
        key = item;
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
      if (is(glossary[key], "string") && glossary[key].includes(":")) {
        [prop, value] = glossary[key].split(":");
      } else if (is(glossary[key], "string") && !glossary[key].includes(":")) {
        prop = glossary[key];
        value = has(theme, key, variable) ? theme[key][variable] : variable;
      } else if (is(glossary[key], "object")) {
        // type is used for variable -> value
        let type;
        const types = keys(glossary[key]);
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
            type = glossary[key].default;
          }
        }

        prop = glossary[key][type];
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
  // todo: curate the styles that have to be compiled
  // like bgc, bgo -> bgc. blur, ... -> filter
  const compile = (object) => object;

  const stylesheet = flatten(
    _stylesheet,
    (parent, children) => `${parent} :is(${children})`
  );
  const theme = Object.fromEntries(
    map(_theme, ([type, variables]) => [type, flatten(variables, "-")])
  );

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
        ? arbitary(style)
        : regular(style);

      // handle array prop (e.g. mx -> margin left, margin right)
      if (is(prop, "string")) {
        variants[variant][prop] = value;
      } else if (is(prop, "array")) {
        const props = prop;
        if (is(value, "array")) {
          props.map((prop, index) => {
            variants[variant][prop] = value[index];
          });
        } else {
          props.map((prop) => {
            variants[variant][prop] = value;
          });
        }
      }
      console.log(_style, { variant, prop, value });
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

const stylesheet = {
  ".pre": {
    "": `m-0 px-[15%] md:px-[10%] sm:px-[5%] pt-12
    pos-fixed inset-0 max-w-full box-border
    bg-blue-9
    text-white text-xl font-paragraph leading-relaxed
    overflow-x-hidden overflow-y-auto`,
    // headers
    "h1,h2,h3,h4,h5,h6": "mt-6 mb-3 leading-tight text-white text-bold",
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    // text
    p: "my-4",
    strong: "weight-bold",
    em: "style-italic",
    // link
    a: "text-lime-4 decoration-none hover:underline",
    // list
    "ul,ol": "my-4 pl-8",
    ul: "list-disc",
    "ul.contains-task-list": "list-none",
    ol: "list-decimal",
    li: "my-2",
    // code
    "pre code": `block mx-0 my-6 p-4 max-w-full
    bg-gray rounded overflow-auto`,
    code: "mx-1 p-1 rounded text-base font-code bg-gray-1",
    // image
    img: "block my-6 max-w-full h-auto",
    // blockqoute
    blockquote: "my-8 px-10 py-6 bg-card rounded-2xl",
    // table
    table: "my-6 w-full border-collapse",
    "th,td": "px-1 py-2",
    // details summary
    details: "my-6 px-0 py-2 rounded-2xl",
    summary: `inline px-4 py-2 text-base text-bold list-none rounded-full
    bg-card`,
    // math
    ".katex *": "font-math",
  },
};

const theme = {
  // margin, paddings
  length: {
    ...generate((n) => `${0.25 * n}rem`, 1, 100),
    full: "100%",
    min: "min-content",
    max: "max-content",
    none: "none",
  },
  // text
  color: {
    white: "#F6F7F9",
    blue: {
      9: "#23272F",
    },
    gray: {
      1: "#99a1b31a",
      9: "#16181D",
      "": "#16181D",
    },
    lime: { 4: "#58c4dc" },
    purple: {
      40: "rgb(107 117 219)",
      50: "rgb(87 95 183)",
      60: "rgb(43 52 145 / 20%)",
    },
    card: "#343a46",
  },
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
  font: {
    paragraph: "Ubuntu, sans-serif",
    code: "Fira Code, monospace",
    math: "XITS Math, math",
  },
  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  // media query
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
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
};

// todo: add items to glossary

const glossary = {
  // Margin utilities
  mt: {
    length: "margin-top",
  },
  ml: {
    length: "margin-left",
  },
  mr: {
    length: "margin-right",
  },
  mb: {
    length: "margin-bottom",
  },
  mx: {
    length: ["margin-left", "margin-right"],
  },
  my: {
    length: ["margin-top", "margin-bottom"],
  },
  m: {
    length: "margin",
  },

  // Padding utilities
  pt: {
    length: "padding-top",
  },
  pl: {
    length: "padding-left",
  },
  pr: {
    length: "padding-right",
  },
  pb: {
    length: "padding-bottom",
  },
  px: {
    length: ["padding-left", "padding-right"],
  },
  py: {
    length: ["padding-top", "padding-bottom"],
  },
  p: {
    length: "padding",
  },

  // Color utilities
  bg: {
    color: "background-color",
  },
  border: {
    color: "border-color",
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

  // Layout utilities
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
  "box-border": "box-sizing:border-box",
  "box-content": "box-sizing:content-box",

  // Flexbox utilities
  flex: "flex",
  justify: "justify-content",
  items: "align-items",
  content: "align-content",
  self: "align-self",

  // Position utilities
  pos: "position",
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

  // Border utilities
  rounded: "border-radius",

  // Effect utilities
  shadow: "box-shadow",
  opacity: "opacity",

  // Transition utilities
  transition: "transition",
  duration: "transition-duration",
  // <easing-function>
  ease: "transition-timing-function",

  // Display utilities
  display: "display",
  block: "display:block",
  inline: "display:inline",
  hidden: "display:none",
  overflow: {
    overflow: "overflow",
  },
  "overflow-x": {
    overflow: "overflow-x",
  },
  "overflow-y": {
    overflow: "overflow-y",
  },
  // Z-index utility
  z: "z-index",
};

const pre = ({ slides, settings, extensions }) => {
  const container = p();
  const style = p();
  const page = p(1);

  const currentSettings = p(
    Object.fromEntries(
      Object.entries(settings).map(([item, value]) => [item, value.default])
    )
  );

  // done: fix flash of unstyled content

  const styled = p(false);
  const scrolled = p(false);

  // scroll position
  const scroll = p(
    Object.fromEntries(
      Array.from({ length: slides.length }, (_, i) => [i + 1, 0])
    )
  );

  const range = (min, max) => ({
    includes(num) {
      return num >= min && num <= max;
    },
  });

  const actions = {
    navigate(index) {
      if (range(1, slides.length).includes(index)) {
        // save the scroll position of current page
        scroll(page(), container().scrollTop);

        // navigate to the page given
        page(index);

        // yet to be scrolled
        scrolled(false);
      }
    },
    next() {
      actions.navigate(page() + 1);
    },
    prev() {
      actions.navigate(page() - 1);
    },
    setTheme(theme) {
      style().textContent = theme;
    },
  };

  // listen to keyboard events
  e(() => {
    listen({
      j: actions.next,
      k: actions.prev,
    });
  });

  // restore scroll position of the current page
  e(() => {
    container().scrollTop = scroll()[page()];
    scrolled(true);
  }, [page]);

  // apply current settings
  e(() => {
    // todo: apply not only themes
    // const _ =
    //   settings.theme.options[currentSettings().theme] +
    //   settings.codeTheme.options[currentSettings().codeTheme];

    // todo: test flair library

    actions.setTheme(flair({ stylesheet, theme, glossary }));

    styled(true);
  }, [currentSettings]);

  return h(
    h("style", { ref: style }),
    h("style", ".pre.loading * {visibility: hidden}"),
    h("div", {
      html: slides[page() - 1],
      class: ["pre", !(styled() && scrolled()) && "loading"],
      ref: container,
    })
  );
};

const app = () => h(pre, data);

r(app, document.body);
