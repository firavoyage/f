(() => {
  // utility fn
  const { is, has, keys, values, each, flatten, map, generate, merge } = f;

  const glossarydefault = {
    // layout
    aspect: { ratio: "aspect-ratio" },
    "aspect-square": "aspect-ratio: 1 / 1",
    "aspect-video": "aspect-ratio: 16 / 9",
    columns: { size: "columns" },
    "break-after": "break-after",
    "break-before": "break-before",
    "break-inside": "break-inside",
    "box-decoration": "box-decoration-break",
    "box-border": "box-sizing:border-box",
    "box-content": "box-sizing:content-box",
    display: "display",
    block: "display:block",
    inline: "display:inline",
    "inline-block": "display:inline-block",
    "flow-root": "display:flow-root",
    // overwritten
    // flex: "display:flex",
    "inline-flex": "display:inline-flex",
    grid: "display:grid",
    "inline-grid": "display:inline-grid",
    contents: "display:contents",
    table: "display:table",
    "inline-table": "display:inline-table",
    "table-caption": "display:table-caption",
    "table-cell": "display:table-cell",
    "table-column": "display:table-column",
    "table-column-group": "display:table-column-group",
    "table-footer-group": "display:table-footer-group",
    "table-header-group": "display:table-header-group",
    "table-row-group": "display:table-row-group",
    "table-row": "display:table-row",
    "list-item": "display:list-item",
    hidden: "display:none",
    float: "float",
    "float-start": "float:inline-start",
    "float-end": "float:inline-end",
    clear: "clear",
    "clear-start": "clear:inline-start",
    "clear-end": "clear:inline-end",
    isolation: "isolation",
    isolate: "isolation: isolate",
    object: "object-position",
    "object-contain": "object-fit: contain",
    "object-cover": "object-fit: cover",
    "object-fill": "object-fit: fill",
    "object-none": "object-fit: none",
    "object-scale-down": "object-fit: scale-down",
    overflow: "overflow",
    "overflow-x": "overflow-x",
    "overflow-y": "overflow-y",
    overscroll: "overscroll-behavior",
    "overscroll-x": "overscroll-behavior-x",
    "overscroll-y": "overscroll-behavior-y",
    pos: "position",
    static: "position:static",
    fixed: "position:fixed",
    absolute: "position:absolute",
    relative: "position:relative",
    sticky: "position:sticky",
    inset: {
      length: "inset",
      fraction: "inset",
      default: "length",
    },
    "inset-x": {
      length: "inset-inline",
      fraction: "inset-inline",
      default: "length",
    },
    "inset-y": {
      length: "inset-block",
      fraction: "inset-block",
      default: "length",
    },
    start: {
      length: "inset-inline-start",
      fraction: "inset-inline-start",
      default: "length",
    },
    end: {
      length: "inset-inline-end",
      fraction: "inset-inline-end",
      default: "length",
    },
    top: {
      length: "top",
      fraction: "top",
      default: "length",
    },
    right: {
      length: "right",
      fraction: "right",
      default: "length",
    },
    bottom: {
      length: "bottom",
      fraction: "bottom",
      default: "length",
    },
    left: {
      length: "left",
      fraction: "left",
      default: "length",
    },
    visible: "visibility: visible",
    invisible: "visibility: hidden",
    collapse: "visibility: collapse",
    z: "z-index",

    // flexbox & grid
    basis: {
      length: "flex-basis",
      fraction: "flex-basis",
      size: "flex-basis",
      default: "length",
    },
    "basis-full": "flex-basis: 100%",
    "basis-auto": "flex-basis: auto",
    "flex-row": "flex-direction: row",
    "flex-row-reverse": "flex-direction: row-reverse",
    "flex-col": "flex-direction: column",
    "flex-col-reverse": "flex-direction: column-reverse",
    "flex-nowrap": "flex-wrap: nowrap",
    "flex-wrap": "flex-wrap: wrap",
    "flex-wrap-reverse": "flex-wrap: wrap-reverse",
    flex: {
      "": "display:flex",
      number: "flex",
      fraction: "flex",
      default: "number",
    },
    "flex-auto": "flex: auto",
    "flex-initial": "flex: 0 auto",
    "flex-none": "flex: none",
    grow: {
      "": "flex-grow: 1",
      number: "flex-grow",
      default: "number",
    },
    shrink: {
      "": "flex-shrink: 1",
      number: "flex-shrink",
      default: "number",
    },
    order: "order",
    "order-first": "order: -9999",
    "order-last": "order: 9999",
    "order-none": "order: 0",
    "grid-cols": {
      // todo: repeat(<number>, minmax(0, 1fr))
      repeat: "grid-template-columns",
    },
    "grid-cols-none": "grid-template-columns: none",
    "grid-cols-subgrid": "grid-template-columns: subgrid",
    col: "grid-column",
    "col-span": {
      // todo: span <number> / span <number>;
      span: "grid-column",
    },
    "col-span-full": "grid-column: 1 / -1",
    "col-start": "grid-column-start",
    "col-end": "grid-column-end",
    "grid-rows": {
      // todo: repeat(<number>, minmax(0, 1fr))
      repeat: "grid-template-rows",
    },
    "grid-rows-none": "grid-template-rows: none",
    "grid-rows-subgrid": "grid-template-rows: subgrid",
    row: "grid-row",
    "row-span": {
      // todo: span <number> / span <number>;
      span: "grid-row",
    },
    "row-span-full": "grid-row: 1 / -1",
    "row-start": "grid-row-start",
    "row-end": "grid-row-end",
    "grid-flow": "grid-auto-flow",
    "grid-flow-col": "grid-auto-flow: column",
    "grid-flow-row-dense": "grid-auto-flow: row dense",
    "grid-flow-col-dense": "grid-auto-flow: column dense",
    "auto-cols": "grid-auto-columns",
    "auto-cols-min": "grid-auto-columns: min-content",
    "auto-cols-max": "grid-auto-columns: max-content",
    "auto-cols-fr": "grid-auto-columns: minmax(0, 1fr)",
    "auto-rows": "grid-auto-rows",
    "auto-rows-min": "grid-auto-rows: min-content",
    "auto-rows-max": "grid-auto-rows: max-content",
    "auto-rows-fr": "grid-auto-rows: minmax(0, 1fr)",
    gap: {
      length: "gap",
    },
    "gap-x": {
      length: "column-gap",
    },
    "gap-y": {
      length: "row-gap",
    },
    justify: "justify-content",
    "justify-start": "justify-content: flex-start",
    "justify-end": "justify-content: flex-end",
    "justify-end-safe": "justify-content: safe flex-end",
    "justify-center": "justify-content: center",
    "justify-center-safe": "justify-content: safe center",
    "justify-between": "justify-content: space-between",
    "justify-around": "justify-content: space-around",
    "justify-evenly": "justify-content: space-evenly",
    "justify-items": "justify-items",
    "justify-items-end-safe": "justify-items: safe end",
    "justify-items-center-safe": "justify-items: safe center",
    "justify-self": "justify-self",
    "justify-self-end-safe": "justify-self: safe end",
    "justify-self-center-safe": "justify-self: safe center",
    "content-normal": "align-content: normal",
    "content-center": "align-content: center",
    "content-start": "align-content: flex-start",
    "content-end": "align-content: flex-end",
    "content-between": "align-content: space-between",
    "content-around": "align-content: space-around",
    "content-evenly": "align-content: space-evenly",
    "content-baseline": "align-content: baseline",
    "content-stretch": "align-content: stretch",
    items: "align-items",
    "items-start": "align-items: flex-start",
    "items-end": "align-items: flex-end",
    "items-end-safe": "align-items: safe flex-end",
    "items-center": "align-items: center",
    "items-center-safe": "align-items: safe center",
    "items-baseline": "align-items: baseline",
    "items-baseline-last": "align-items: last baseline",
    "items-stretch": "align-items: stretch",
    self: "align-self",
    "self-auto": "align-self: auto",
    "self-start": "align-self: flex-start",
    "self-end": "align-self: flex-end",
    "self-end-safe": "align-self: safe flex-end",
    "self-center": "align-self: center",
    "self-center-safe": "align-self: safe center",
    "self-stretch": "align-self: stretch",
    "self-baseline": "align-self: baseline",
    "self-baseline-last": "align-self: last baseline",
    "place-content": "place-content",
    "place-content-center": "place-content: center",
    "place-content-center-safe": "place-content: safe center",
    "place-content-start": "place-content: start",
    "place-content-end": "place-content: end",
    "place-content-end-safe": "place-content: safe end",
    "place-content-between": "place-content: space-between",
    "place-content-around": "place-content: space-around",
    "place-content-evenly": "place-content: space-evenly",
    "place-content-baseline": "place-content: baseline",
    "place-content-stretch": "place-content: stretch",
    "place-items-start": "place-items: start",
    "place-items-end": "place-items: end",
    "place-items-end-safe": "place-items: safe end",
    "place-items-center": "place-items: center",
    "place-items-center-safe": "place-items: safe center",
    "place-items-baseline": "place-items: baseline",
    "place-items-stretch": "place-items: stretch",
    "place-self-auto": "place-self: auto",
    "place-self-start": "place-self: start",
    "place-self-end": "place-self: end",
    "place-self-end-safe": "place-self: safe end",
    "place-self-center": "place-self: center",
    "place-self-center-safe": "place-self: safe center",
    "place-self-stretch": "place-self: stretch",

    // spacing
    p: {
      length: "padding",
    },
    px: {
      length: "padding-inline",
    },
    py: {
      length: "padding-block",
    },
    ps: {
      length: "padding-inline-start",
    },
    pe: {
      length: "padding-inline-end",
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
    m: {
      length: "margin",
    },
    mx: {
      length: "margin-inline",
    },
    my: {
      length: "margin-block",
    },
    ms: {
      length: "margin-inline-start",
    },
    me: {
      length: "margin-inline-end",
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
    // todo: add better support for space x y
    // a style even contains selector? edge case!
    // ref: https://tailwindcss.com/docs/margin

    // sizing
    w: {
      length: "width",
      percentage: "width",
      size: "width",
      default: "length",
    },
    "w-screen": "width:100vw",
    "min-w": {
      length: "min-width",
      percentage: "min-width",
      size: "min-width",
      default: "length",
    },
    "min-w-screen": "min-width:100vw",
    "max-w": {
      length: "max-width",
      percentage: "max-width",
      size: "max-width",
      default: "length",
    },
    "max-w-screen": "max-width:100vw",
    // todo: container ref https://tailwindcss.com/docs/max-width
    h: {
      length: "height",
      percentage: "height",
      size: "height",
      default: "length",
    },
    "h-screen": "height:100vh",
    "min-h": {
      length: "min-height",
      percentage: "min-height",
      size: "min-height",
      default: "length",
    },
    "min-h-screen": "min-height:100vh",
    "max-h": {
      length: "max-height",
      percentage: "max-height",
      size: "max-height",
      default: "length",
    },
    "max-h-screen": "max-height:100vh",
    size: {
      length: ["width", "height"],
      percentage: ["width", "height"],
      size: ["width", "height"],
      default: "length",
    },

    // typography
    font: "font-family",
    text: {
      // todo theme.fontsize https://tailwindcss.com/docs/font-size
      fontsize: "font-size",
      length: "font-size",
      color: "color",
      weight: "font-weight",
      default: "color",
    },
    antialiased:
      "-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;",
    "subpixel-antialiased":
      "-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;",
    italic: "font-style: italic",
    "not-italic": "font-style: normal",
    "font-stretch": "font-stretch",
    "normal-nums": "font-variant-numeric: normal",
    ordinal: "font-variant-numeric: ordinal",
    "slashed-zero": "font-variant-numeric: slashed-zero",
    "lining-nums": "font-variant-numeric: lining-nums",
    "oldstyle-nums": "font-variant-numeric: oldstyle-nums",
    "proportional-nums": "font-variant-numeric: proportional-nums",
    "tabular-nums": "font-variant-numeric: tabular-nums",
    "diagonal-fractions": "font-variant-numeric: diagonal-fractions",
    "stacked-fractions": "font-variant-numeric: stacked-fractions",
    // todo add tracking to theme https://tailwindcss.com/docs/letter-spacing
    tracking: "letter-spacing",
    // todo: line-clamp https://tailwindcss.com/docs/line-clamp
    leading: { length: "line-height" },
    "leading-none": "line-height: 1;",
    "list-image": "list-style-image",
    "list-inside": "list-style-position:inside",
    "list-outside": "list-style-position:outside",
    list: "list-style-type",
    "list-disc": "list-style-type: disc",
    "list-decimal": "list-style-type: decimal",
    "list-none": "list-style-type: none",
    "text-left": "text-align: left",
    "text-center": "text-align: center",
    "text-right": "text-align: right",
    "text-justify": "text-align: justify",
    "text-start": "text-align: start",
    "text-end": "text-align: end",
    "list-style-type": "none",
    // todo: theme.color built in palette https://tailwindcss.com/docs/color
    underline: "underline",
    overline: "overline",
    "line-through": "line-through",
    "no-underline": "none",
    decoration: {
      color: "text-decoration-color",
      // todo: theme.lengthpx <number>px https://tailwindcss.com/docs/text-underline-offset
      lengthpx: "text-decoration-thickness",
    },
    "decoration-solid": "text-decoration-style: solid",
    "decoration-double": "text-decoration-style: double",
    "decoration-dotted": "text-decoration-style: dotted",
    "decoration-dashed": "text-decoration-style: dashed",
    "decoration-wavy": "text-decoration-style: wavy",
    "underline-offset": {
      lengthpx: "text-underline-offset",
    },
    "underline-offset-auto": "text-underline-offset: auto;",
    uppercase: "text-transform: uppercase",
    lowercase: "text-transform: lowercase",
    capitalize: "text-transform: capitalize",
    "normal-case": "text-transform: none",
    truncate: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    "text-ellipsis": "text-overflow: ellipsis",
    "text-clip": "text-overflow: clip",
    "text-wrap": "wrap",
    "text-nowrap": "nowrap",
    "text-balance": "balance",
    "text-pretty": "pretty",
    indent: {
      length: "text-indent",
    },
    align: "vertical-align",
    whitespace: "white-space",
    "break-normal": "word-break: normal",
    "break-all": "word-break: break-all",
    "break-keep": "word-break: keep-all",
    wrap: "overflow-wrap",
    hyphens: "hyphens",
    content: "content",

    // backgrounds
    "bg-fixed": "background-attachment: fixed",
    "bg-local": "background-attachment: local",
    "bg-scroll": "background-attachment: scroll",
    "bg-clip-border": "background-clip: border-box",
    "bg-clip-padding": "background-clip: padding-box",
    "bg-clip-content": "background-clip: content-box",
    "bg-clip-text": "background-clip: text",
    // todo: image https://tailwindcss.com/docs/background-image
    bg: { color: "background-color", background: "background-image" },
    "bg-origin-border": "background-origin: border-box",
    "bg-origin-padding": "background-origin: padding-box",
    "bg-origin-content": "background-origin: content-box",
    "bg-position": "background-position",
    "bg-top-left": "background-position: top left",
    "bg-top": "background-position: top",
    "bg-top-right": "background-position: top right",
    "bg-left": "background-position: left",
    "bg-center": "background-position: center",
    "bg-right": "background-position: right",
    "bg-bottom-left": "background-position: bottom left",
    "bg-bottom": "background-position: bottom",
    "bg-bottom-right": "background-position: bottom right",
    "bg-repeat": "background-repeat: repeat",
    "bg-repeat-x": "background-repeat: repeat-x",
    "bg-repeat-y": "background-repeat: repeat-y",
    "bg-repeat-space": "background-repeat: space",
    "bg-repeat-round": "background-repeat: round",
    "bg-no-repeat": "background-repeat: no-repeat",
    "bg-auto": "background-size: auto",
    "bg-cover": "background-size: cover",
    "bg-contain": "background-size: contain",
    "bg-size": "background-size",

    // borders
    rounded: "border-radius",
    "rounded-s": {
      rounded: ["border-start-start-radius", "border-end-start-radius"],
    },
    "rounded-e": {
      rounded: ["border-start-end-radius", "border-end-end-radius"],
    },
    "rounded-t": {
      rounded: ["border-top-left-radius", "border-top-right-radius"],
    },
    "rounded-r": {
      rounded: ["border-top-right-radius", "border-bottom-right-radius"],
    },
    "rounded-b": {
      rounded: ["border-bottom-left-radius", "border-bottom-right-radius"],
    },
    "rounded-l": {
      rounded: ["border-top-left-radius", "border-bottom-left-radius"],
    },
    "rounded-ss": {
      rounded: "border-start-start-radius",
    },
    "rounded-se": {
      rounded: "border-start-end-radius",
    },
    "rounded-ee": {
      rounded: "border-end-end-radius",
    },
    "rounded-es": {
      rounded: "border-end-start-radius",
    },
    "rounded-tl": {
      rounded: "border-top-left-radius",
    },
    "rounded-tr": {
      rounded: "border-top-right-radius",
    },
    "rounded-bl": {
      rounded: "border-bottom-left-radius",
    },
    "rounded-br": {
      rounded: "border-bottom-right-radius",
    },
    border: {
      "": "border-width: 1px;",
      lengthpx: "border-width",
      color: "border-color",
      default: "color",
    },
    "border-x": {
      "": "border-inline-width: 1px;",
      lengthpx: "border-inline-width",
    },
    "border-y": {
      "": "border-block-width: 1px;",
      lengthpx: "border-block-width",
    },
    "border-s": {
      "": "border-inline-start-width: 1px;",
      lengthpx: "border-inline-start-width",
    },
    "border-e": {
      "": "border-inline-end-width: 1px;",
      lengthpx: "border-inline-end-width",
    },
    "border-t": {
      "": "border-top-width: 1px;",
      lengthpx: "border-top-width",
    },
    "border-r": {
      "": "border-right-width: 1px;",
      lengthpx: "border-right-width",
    },
    "border-b": {
      "": "border-bottom-width: 1px;",
      lengthpx: "border-bottom-width",
    },
    "border-l": {
      "": "border-left-width: 1px;",
      lengthpx: "border-left-width",
    },
    // todo: divide https://tailwindcss.com/docs/border-width
    "border-solid": "border-style: solid",
    "border-dashed": "border-style: dashed",
    "border-dotted": "border-style: dotted",
    "border-double": "border-style: double",
    "border-hidden": "border-style: hidden",
    "border-none": "border-style: none",
    outline: {
      "": "outline-width: 1px;",
      lengthpx: "outline-width",
      color: "outline-color",
      default: "color",
    },
    "outline-solid": "outline-style: solid",
    "outline-dashed": "outline-style: dashed",
    "outline-dotted": "outline-style: dotted",
    "outline-double": "outline-style: double",
    "outline-none": "outline-style: none",
    "outline-hidden": "outline: 2px solid transparent; outline-offset: 2px;",
    "outline-offset": {
      lengthpx: "outline-offset",
    },

    // effects
    // todo: effects
    shadow: "box-shadow",
    opacity: "opacity",

    // filters
    // todo: filters
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

    // todo: tables

    // transitions & animation
    // todo: transitions & animation
    transition: "transition",
    "transition-normal": "transition-behavior: normal",
    "transition-discrete": "transition-behavior: allow-discrete",
    duration: "transition-duration",
    ease: "transition-timing-function",
    delay: "transition-delay",

    // transforms
    // todo: transforms
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

    // interactivity
    // todo: interactivity
    cursor: "cursor",
    pointer: "cursor:pointer",
    "not-allowed": "cursor:not-allowed",

    // svg
    // todo: svg
    fill: {
      color: "fill",
    },
    stroke: {
      color: "stroke",
      length: "stroke-width",
      default: "length",
    },
  };

  const spacing = 0.25;

  // todo: add ratio, fraction, number
  // percentage means fraction*100%
  const themedefault = {
    // special type of no param. used by flex
    "": {
      "": "",
    },
    // spacing
    length: {
      ...generate((n) => `${spacing * n}rem`, 1, 100),
      full: "100%",
      px: "1px",
      dvw: "100dvw",
      dvh: "100dvh",
      lvw: "100lvw",
      lvh: "100lvh",
      svw: "100svw",
      svh: "100svh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      none: "none",
      lh: "1lh",
    },
    size: {
      // size: container size
      ...generate((n) => `${spacing * n}rem`, 1, 100),
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
    ratio: {
      "1/2": "1/2",
      "3/2": "3/2",
    },
    percentage: {
      ...generate((n) => `${n}%`, 0, 200),
    },
    angle: {
      ...generate((n) => `${n}deg`, 0, 180),
    },
    // typography
    font: {
      sans: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    color: {
      none: "none",
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
    },
    fontsize: {
      // fontsize: font size
      ...generate((n) => `${spacing * n}rem`, 1, 100),
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

  const flair = ({ stylesheet = {}, theme = {}, glossary = {} }) => {
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

      const important = false;
      if (style.endsWith("!")) {
        important = true;
        style = style.slice(0, -1);
      }

      const pair = style.split("[");

      const key = pair[0].endsWith("-") ? pair[0].slice(0, -1) : pair[0];
      let prop;
      const value =
        pair[1].slice(0, -1).replaceAll("_", " ") +
        (important ? " !important" : "");

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
        let item = glossary[key];
        if (is(item, "string") && item.includes(":")) {
          if (item.includes(";")) {
            if (item.endsWith(";")) {
              // support both "a:b;c:d" and "a:b;c:d;"
              item = item.slice(0, -1);
            }
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
              // done: fix: make "bg-#99a1b330" work
              // type = item.default;
              type = has(item, "default") ? item.default : types[0];
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

    stylesheet = flatten(
      stylesheet,
      (parent, children) => `${parent} :is(${children})`
    );

    // done: merge deeply nested obj with f
    glossary = merge(glossary, glossarydefault);
    theme = map(merge(theme, themedefault), ([type, variables]) => [
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
        const { prop, value } =
          style.endsWith("]") || style.endsWith("]!")
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
      // value.length == 0, when prop = "display:flex" and value = ""
      return `${variant}{${map(styles, ([prop, value]) =>
        value.length == 0 ? `${prop};` : `${prop}:${value};`
      ).join("")}}`;
    }).join("");
  };

  window.flair = flair;
})();
