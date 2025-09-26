// /**
//  * Converts LaTeX expressions in HTML string to rendered HTML
//  * @param {string} html - HTML string containing LaTeX expressions
//  * @returns {string} Converted HTML string with rendered math
//  */
// const convertLatex = (html) => {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");

//   const ignoredTags = [
//     "SCRIPT",
//     "STYLE",
//     "TEXTAREA",
//     "PRE",
//     "CODE",
//     "SELECT",
//     "OPTION",
//     "BUTTON",
//   ];
//   const ignoredSelectors = [
//     ".math-disable",
//     ".latex-ignore",
//     "[data-latex-ignore]",
//   ];

//   const treeWalker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, {
//     acceptNode: (node) => {
//       if (node.parentNode.nodeType !== Node.ELEMENT_NODE)
//         return NodeFilter.FILTER_REJECT;
//       const el = node.parentNode;

//       if (ignoredTags.includes(el.tagName)) return NodeFilter.FILTER_REJECT;
//       if (ignoredSelectors.some((selector) => el.matches(selector)))
//         return NodeFilter.FILTER_REJECT;
//       if (el.closest(ignoredSelectors.join(",")))
//         return NodeFilter.FILTER_REJECT;

//       return /(\$\$[^$]+\$\$|\$[^$]+\$)/.test(node.textContent)
//         ? NodeFilter.FILTER_ACCEPT
//         : NodeFilter.FILTER_REJECT;
//     },
//   });

//   const textNodes = [];
//   while (treeWalker.nextNode()) textNodes.push(treeWalker.currentNode);

//   textNodes.forEach((node) => {
//     const tempDiv = document.createElement("div");
//     let text = node.textContent;

//     text = text
//       .replace(/\$\$([^$]+)\$\$/g, (_, latex) => renderLatex(latex, true))
//       .replace(/\$([^$]+)\$/g, (_, latex) => renderLatex(latex, false));

//     tempDiv.innerHTML = text;

//     const newNodes = Array.from(tempDiv.childNodes);
//     const parent = node.parentNode;
//     newNodes.forEach((newNode) => parent.insertBefore(newNode, node));
//     parent.removeChild(node);
//   });

//   return doc.body.innerHTML;
// };

// Main renderer creation (function composition)
const render = (text) => {
  // Pure functions for math token handling
  const createMathToken = (type, content, markup, isBlock = false) => ({
    type,
    content,
    markup,
    block: isBlock,
  });

  const renderMath = (content, displayMode = false) => {
    try {
      const html = katex.renderToString(content, {
        throwOnError: false,
        displayMode,
        errorColor: "#cc0000",
        strict: "warn",
        trust: false,
        // both mathml and html may have different rendering issues
        // htmlAndMathml equals to html. (mathml will be hidden then.)
        // output: "htmlAndMathml",
        output: "mathml",
        macros: {},
      });
      return displayMode ? `<div class="math-display">${html}</div>` : html;
    } catch (error) {
      return `<span style="color: #cc0000;">LaTeX Error: ${error.message}</span>`;
    }
  };

  // Markdown rules as pure functions
  const createInlineMathRule = () => {
    const inlineRule = /^\$([^$]+)\$/;

    return (state, silent) => {
      const match = inlineRule.exec(state.src.slice(state.pos));
      if (!match) return false;

      if (!silent) {
        const token = createMathToken("math_inline", match[1], "$");
        state.push(token.type, token.markup, 0);
        state.tokens[state.tokens.length - 1].content = token.content;
      }

      state.pos += match[0].length;
      return true;
    };
  };

  const createBlockMathRule = () => {
    return (state, startLine, endLine, silent) => {
      const pos = state.bMarks[startLine] + state.tShift[startLine];
      const max = state.eMarks[startLine];

      if (state.src.slice(pos, max).trim() !== "$$") return false;

      let nextLine = startLine + 1;
      let haveEndMarker = false;

      while (nextLine <= endLine) {
        const nextPos = state.bMarks[nextLine] + state.tShift[nextLine];
        const nextMax = state.eMarks[nextLine];

        if (state.src.slice(nextPos, nextMax).trim() === "$$") {
          haveEndMarker = true;
          break;
        }
        nextLine++;
      }

      if (!haveEndMarker) return false;

      if (!silent) {
        const content = state.getLines(
          startLine + 1,
          nextLine,
          state.tShift[startLine],
          true
        );
        const token = createMathToken("math_block", content, "$$", true);

        state.push(token.type, token.markup, 0);
        const lastToken = state.tokens[state.tokens.length - 1];
        lastToken.content = token.content;
        lastToken.block = token.block;
        lastToken.map = [startLine, nextLine + 1];
      }

      state.line = nextLine + 1;
      return true;
    };
  };

  // LaTeX environment processing
  const processLatexEnvironments = (text) => {
    const environmentPatterns = [
      [/\\begin{equation}([\s\S]*?)\\end{equation}/g, "$$$1$$"],
      [/\\begin{align}([\s\S]*?)\\end{align}/g, "$$$1$$"],
      [/\\begin{pmatrix}([\s\S]*?)\\end{pmatrix}/g, "$$$1$$"],
      [/\\ce{([^}]*)}/g, "$$\\ce{$1}$$"],
    ];

    return environmentPatterns.reduce(
      (processedText, [pattern, replacement]) =>
        processedText.replace(pattern, replacement),
      text
    );
  };

  // Renderer setup as pure functions
  const setupMathRules = (md) => {
    // Add inline math rule
    md.inline.ruler.before("emphasis", "math_inline", createInlineMathRule());

    // Add block math rule
    md.block.ruler.before("fence", "math_block", createBlockMathRule());

    // Setup renderers
    md.renderer.rules.math_inline = (tokens, idx) =>
      renderMath(tokens[idx].content, false);

    md.renderer.rules.math_block = (tokens, idx) =>
      renderMath(tokens[idx].content, true);

    return md;
  };

  const md = window
    .markdownit({
      html: true,
      xhtmlOut: true,
      breaks: false,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang == "precious") {
          return renderMath(precious(str));
        }
        if (lang && window.Prism && window.Prism.languages[lang]) {
          console.log(
            window.Prism.highlight(str, window.Prism.languages[lang], lang)
          );
          return window.Prism.highlight(
            str,
            window.Prism.languages[lang],
            lang
          );
        }
        return "";
      },
    })
    .use(window.markdownitEmoji)
    .use(window.markdownitTaskLists);

  const configuredMd = setupMathRules(md);

  return configuredMd.render(processLatexEnvironments(text));
};

// Usage remains the same:
// const renderer = createLatexRenderer();
// renderer.render("Some markdown with $math$");
// renderer.renderWithEnvironments("Text with \\begin{equation}...");

/**
 * Converts Markdown to HTML slides, splitting on top-level headers and horizontal rules.
 * @param {string} markdown - The markdown content to convert.
 * @param {object} [config] - Optional configuration.
 * @param {number} [config.header=6] - Maximum header level to split on (1-6).
 * @returns {string[]} Array of HTML slide strings.
 */
const convertMarkdownToSlides = (markdown, config = {}) => {
  // todo: fix md process $_a_$ as italic before convert latex

  // Convert markdown to HTML and process LaTeX
  let html = render(markdown);
  // html = convertLatex(html); // Assumed to be available in scope

  // todo: fix overkill
  html = html.replaceAll(`<code class="language-precious">`, "");
  html = html.replaceAll(`<pre><span class="katex">`, `<span class="katex">`);

  // Parse HTML into DOM
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const body = doc.body;

  // Configuration
  const maxHeaderLevel = config.header || 6;
  const headerTags = Array.from(
    { length: maxHeaderLevel },
    (_, i) => `H${i + 1}`
  );

  // Split slides
  const slides = [];
  let currentSlide = [];
  const nodes = Array.from(body.childNodes);

  const isBlockElement = (node) =>
    node.nodeType === 1 && // ELEMENT_NODE
    ["BLOCKQUOTE", "DETAILS", "PRE", "FIGURE", "TABLE"].includes(node.tagName);

  const isEmptySlide = (slideNodes) => {
    if (slideNodes.length === 0) return true;
    return slideNodes.every((node) => {
      if (node.nodeType === 3) {
        // TEXT_NODE
        return node.textContent.trim() === "";
      }
      if (node.nodeType === 1 && node.tagName === "BR") {
        // ELEMENT_NODE <br>
        return true;
      }
      return false;
    });
  };

  nodes.forEach((node) => {
    // Check if node is a splitting element
    if (node.nodeType === 1) {
      // ELEMENT_NODE
      const isSplittingHeader = headerTags.includes(node.tagName);
      const isSplittingHr = node.tagName === "HR";

      if ((isSplittingHeader || isSplittingHr) && !isBlockElement(node)) {
        // Start new slide only if current slide has content
        if (!isEmptySlide(currentSlide)) {
          slides.push(currentSlide);
        }
        currentSlide = [];

        // Keep headers (discard HR)
        if (isSplittingHeader) {
          currentSlide.push(node);
        }
        return;
      }
    }

    // Add node to current slide
    currentSlide.push(node);
  });

  // Add final slide if it has content
  if (!isEmptySlide(currentSlide)) {
    slides.push(currentSlide);
  }

  // Convert slide nodes to HTML strings
  return slides.map((slide) => {
    const div = doc.createElement("div");
    slide.forEach((node) => div.appendChild(node.cloneNode(true)));
    return div.innerHTML;
  });
};
