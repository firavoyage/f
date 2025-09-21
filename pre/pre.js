// todo: flair (react, saba), precious, material, mdx

const { h, p, e, r } = voyage;

const stylesheet = {
  ".pre": {
    "": `pos-fixed inset-0 max-w-full box-border m-0 
    px-[15%] md:px-[10%] sm:px-[5%] pt-12
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
  font: {
    paragraph: "Ubuntu, sans-serif",
    code: "Fira Code, monospace",
    math: "XITS Math, math",
  },
};

const pre = ({ slides, settings, extensions }) => {
  const { map } = f;

  const container = p();
  const style = p();
  const page = p(1);

  const currentSettings = p(
    map(settings, ([item, value]) => [item, value.default])
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
    // todo: test flair library
    settings.theme.options.flair = flair({ stylesheet, theme });

    // todo: apply not only themes
    const _ =
      settings.theme.options[currentSettings().theme] +
      settings.codeTheme.options[currentSettings().codeTheme];

    actions.setTheme(_);

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
