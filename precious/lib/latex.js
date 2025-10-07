const renderMath = (content, alignment = "c", displayMode = false) => {
  function cleanMathJaxSVG(svgString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const assistiveMml = doc.querySelector("mjx-assistive-mml");
    if (assistiveMml) {
      assistiveMml.remove();
    }
    return doc.documentElement.outerHTML;
  }
  try {
    if (content.includes("\\\\")) {
      const lines = content.split("\\\\");
      const hasColumns = lines[0].includes("&");

      if (hasColumns) {
        // For matrix-like content
        content = `\\begin{matrix}${content}\\end{matrix}`;
      } else {
        // For simple line breaks, use array with specified alignment
        const arrayContent = lines.map((line) => line.trim()).join("\\\\");
        const alignChar =
          alignment === "c" ? "c" : alignment === "r" ? "r" : "l";
        content = `\\begin{array}{@{}${alignChar}@{}}${arrayContent}\\end{array}`;
      }
    }

    const html = MathJax.tex2svg(content, {
      display: displayMode,
      em: 16,
      ex: 8,
      lineWidth: 100000,
      scale: 1,
    });

    let htmlString = MathJax.startup.adaptor.outerHTML(html);

    htmlString = cleanMathJaxSVG(htmlString);

    // Use the specified alignment
    const alignStyle =
      alignment === "c" ? "center" : alignment === "r" ? "right" : "left";

    return displayMode
      ? `<div style="text-align: ${alignStyle}; display: block;">${htmlString}</div>`
      : `<span style="text-align: ${alignStyle}; display: inline-block;">${htmlString}</span>`;
  } catch (error) {
    return `<span style="color: #cc0000;">LaTeX Error: ${error.message}</span>`;
  }
};
