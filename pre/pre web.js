// todo: learn from design.google, react.dev

// done?: precious: support <=>, =>. literal space.
// todo: pre web: json parse edge cases (try catch)

const theme = {
  color: {
    black: "#12110C",
  },
  font: {
    serif: "Cormorant,serif",
  },
};

const stylesheet = {
  ".app *:not(.pre, .pre *)": "font-serif italic",
  ".pre": "static!",
};

// todo: store in localstorage

const themedefault = `.pre::-webkit-scrollbar {
  width: 0.5rem;
}

.pre::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
}

.pre::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.pre::-webkit-scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.3);
}

.pre {
  position: fixed;
  inset: 0;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding-inline: 15%;
  padding-top: 3rem;
  background: linear-gradient(to bottom, #f5efdd 70%, #fef2e9 100%);
  color: #000000;
  font-size: 1.25rem;
  font-family: Lato, Ubuntu, Adobe Kaiti Std, FZKai-Z03, sans-serif;
  line-height: 1.625;
  overflow-x: hidden;
  overflow-y: auto;
}

@media (min-width: 640px) {
  .pre {
    padding-inline: 5%;
  }
}

@media (min-width: 768px) {
  .pre {
    padding-inline: 10%;
  }
}

.pre :is(h1, h2, h3, h4, h5, h6) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  background: linear-gradient(to bottom, #65bce5, #57b6e3, #91acd5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  font-family: EB Garamond, Cormorant, Adobe Kaiti Std, FZKai-Z03,
    Noto Serif CJK SC, serif;
  font-style: italic;
}

.pre h1 {
  font-size: 2.25rem;
}

.pre h2 {
  font-size: 1.875rem;
}

.pre h3 {
  font-size: 1.5rem;
}

.pre p {
  margin-block: 1rem;
}

.pre strong {
  font-weight: bold;
}

.pre em {
  font-style: italic;
}

.pre a {
  color: #57b6e3;
  text-decoration: none;
}

.pre a:hover {
  text-decoration: underline;
}

.pre :is(ul, ol) {
  margin-block: 1rem;
  padding-left: 2rem;
}

.pre ul {
  list-style-type: disc;
}

.pre ul.contains-task-list {
  list-style-type: none;
}

.pre ol {
  list-style-type: decimal;
}

.pre li {
  margin-block: 0.5rem;
}

.pre pre code {
  display: block;
  margin-inline: 0;
  margin-block: 1.5rem;
  padding: 1rem;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  overflow: auto;
  color: #000000;
}

.pre code {
  margin-inline: 0.25rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: "Fira Code", monospace;
  background-color: rgba(0, 0, 0, 0.1);
}

.pre img {
  display: block;
  margin-block: 1.5rem;
  max-width: 100%;
  height: auto;
}

.pre blockquote {
  margin-block: 2rem;
  padding-inline: 2.5rem;
  padding-block: 1rem;
  background-color: rgba(101, 188, 229, 0.1);
  border-radius: 1rem;
  border-left: 4px solid #65bce5;
}

.pre table {
  margin-block: 1.5rem;
  width: 100%;
  border-collapse: collapse;
}

.pre :is(th, td) {
  padding-inline: 0.25rem;
  padding-block: 0.5rem;
  border: 1px solid #65bce5;
}

.pre details {
  /* margin-block: 1.5rem;
  padding-inline: 0;
  padding-block: 0.5rem;
  border-radius: 1rem; */
}

.pre summary {
  display: inline;
  padding-inline: 0.5rem;
  /* padding-block: 0.5rem; */
  font-size: 1rem;
  font-weight: 700;
  list-style-type: none;
  border-radius: 9999px;
  color: #414E85;
  user-select: none;
  font-family: Playfair, serif;
  font-size: 1.5rem;
}

.pre .MathJax *,
.pre .katex * {
  font-family: "XITS Math", Adobe Kaiti Std, FZKai-Z03, math !important;
}

.pre .MathJax text,
.pre .katex text {
  scale: 1.1;
}
`;

const { useState, useRef } = preact;
const { h, p, e, r } = voyage;

const { is, map, values } = f;

/**
 * File upload button component that reads file content and passes it to a callback
 * @param {Object} props - Component properties
 * @param {Function} props.value - Callback function that receives file text content
 * @param {any} props.children - Button content (text or elements)
 * @param {Object} props... - Additional props to spread onto the button element
 * @returns {import('preact').VNode} Button element that triggers file selection
 *
 * @example
 * // Basic usage
 * FileUpload({
 *   value: (content) => console.log('File content:', content),
 *   children: 'Upload File'
 * })
 *
 * @example
 * // With additional props
 * FileUpload({
 *   value: (content) => processFile(content),
 *   children: [h('span', null, '📁'), ' Choose File'],
 *   disabled: false,
 *   title: 'Select a text file'
 * })
 */
const File = ({ value, children, ...props }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event) => {
    if (!event) {
      return;
    }
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      value(e.target?.result);
    };
    reader.onerror = () => {
      console.error("Error reading file");
    };
    reader.readAsText(file);

    // Reset input to allow selecting same file again
    event.target.value = "";
  };

  return h(
    "div",
    h(
      "button",
      {
        type: "button",
        class: "file",
        onClick: handleClick,
        ...props,
      },
      children
    ),
    h("input", {
      ref: inputRef,
      type: "file",
      style: { display: "none" },
      onChange: handleFileChange,
    })
  );
};

const preIcon = () => {
  // avatar
  return h("h1", "pre");
};

const Document = ({ value }) => {
  // h2, file, textarea
  return h(
    h("h2", "Document"),
    h(File, { value }, "upload icon"),
    h("textarea", { bind: value })
  );
};

const checkbox = ({ value, children }) => {
  return h(
    h("input", {
      type: "checkbox",
      checked: value(),
      "@change": () => value((x) => !x),
    }),
    children
  );
};

const Theme = ({ value, inlinecode }) => {
  // h2, file, textarea
  // h2, file, selector, textarea
  return h(
    h("h2", "Theme"),
    h(File, { value }, "upload icon"),
    h("textarea", { bind: value }),
    h(checkbox, { value: inlinecode }, "inline code in precious")
  );
};

// todo: toggle component

const Slides = ({ document, style, download, inlinecode }) => {
  const autodownload = p(false);
  // div toggle:autodownload button:download {html:placeholder}
  return h(
    h("h2", "Slides"),
    h("button", { "@click": download }, "download"),
    h("toggle"),
    h("style", { html: style }),
    h("div", { class: "pre", html: convert(document, { inlinecode }).join("") })
  );
};

const downloadSlides = ({ document, theme, inlinecode }) => {
  // data: {slides: html[], settings:item{}}
  // item: {options: {}, default:""}

  const config = {
    theme: {
      options: {
        theme,
      },
      default: "theme",
    },
    codeTheme: {
      options: {
        dracula:
          '/**\n     * Dracula Theme originally by Zeno Rocha [@zenorocha]\n     * https://draculatheme.com/\n     *\n     * Ported for PrismJS by Albert Vallverdu [@byverdu]\n     */\n\n    code[class*="language-"],\n    pre[class*="language-"] {\n    \tcolor: #f8f8f2;\n    \tbackground: none;\n    \ttext-shadow: 0 1px rgba(0, 0, 0, 0.3);\n    \tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n    \ttext-align: left;\n    \twhite-space: pre;\n    \tword-spacing: normal;\n    \tword-break: normal;\n    \tword-wrap: normal;\n    \tline-height: 1.5;\n    \t-moz-tab-size: 4;\n    \t-o-tab-size: 4;\n    \ttab-size: 4;\n    \t-webkit-hyphens: none;\n    \t-moz-hyphens: none;\n    \t-ms-hyphens: none;\n    \thyphens: none;\n    }\n\n    /* Code blocks */\n    pre[class*="language-"] {\n    \tpadding: 1em;\n    \tmargin: .5em 0;\n    \toverflow: auto;\n    \tborder-radius: 0.3em;\n    }\n\n    :not(pre) > code[class*="language-"],\n    pre[class*="language-"] {\n    \tbackground: #282a36;\n    }\n\n    /* Inline code */\n    :not(pre) > code[class*="language-"] {\n    \tpadding: .1em;\n    \tborder-radius: .3em;\n    \twhite-space: normal;\n    }\n\n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n    \tcolor: #6272a4;\n    }\n\n    .token.punctuation {\n    \tcolor: #f8f8f2;\n    }\n\n    .namespace {\n    \topacity: .7;\n    }\n\n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n    \tcolor: #ff79c6;\n    }\n\n    .token.boolean,\n    .token.number {\n    \tcolor: #bd93f9;\n    }\n\n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n    \tcolor: #50fa7b;\n    }\n\n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n    \tcolor: #f8f8f2;\n    }\n\n    .token.atrule,\n    .token.attr-value,\n    .token.function,\n    .token.class-name {\n    \tcolor: #f1fa8c;\n    }\n\n    .token.keyword {\n    \tcolor: #8be9fd;\n    }\n\n    .token.regex,\n    .token.important {\n    \tcolor: #ffb86c;\n    }\n\n    .token.important,\n    .token.bold {\n    \tfont-weight: bold;\n    }\n\n    .token.italic {\n    \tfont-style: italic;\n    }\n\n    .token.entity {\n    \tcursor: help;\n    }\n    ',
      },
      default: "dracula",
    },
  };

  const data = {
    slides: convert(document, { inlinecode }),
    settings: config,
  };

  const pre = render(data);
  save("pre.html", pre);
};

const app = () => {
  const document = p("");
  const theme = p(themedefault);
  const inlinecode = p(true);
  e(() => {
    // download document
  }, [document]);

  const handleDownload = () => {
    downloadSlides({
      document: document(),
      theme: theme(),
      inlinecode: inlinecode(),
    });
  };

  const style = theme;

  return h(
    h("style", { html: flair({ stylesheet, theme }) }),
    h(preIcon),
    h(Document, { value: document }),
    h(Theme, { value: theme, inlinecode }),
    h(Slides, {
      document: document(),
      style,
      download: handleDownload,
      inlinecode: inlinecode(),
    })
  );
};

r(app, document.getElementsByClassName("app")[0]);
