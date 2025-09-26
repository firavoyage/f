const precious = (math) => {
  /**
   * Core function to convert LaTeX string to HTML using KaTeX
   * @param {string} latex - LaTeX expression to convert
   * @param {boolean} isDisplayMode - Whether to render in display mode (double dollars)
   * @returns {string} Rendered HTML string
   *
   * <!-- KaTeX CDN Links -->
   * <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
   * <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
   */
  const renderLatex = (latex, isDisplayMode = false) => {
    try {
      return katex.renderToString(latex, {
        displayMode: isDisplayMode,
        throwOnError: false,
        errorColor: "#cc0000",
        strict: "warn",
        trust: false,
        output: "mathml",
        macros: {},
      });
    } catch (error) {
      return `<span style="color: #cc0000;">LaTeX Error: ${error.message}</span>`;
    }
  };

  const dict = {
    // done: process these operators manually
    // // Basic operators
    // "+": "+",
    // "-": "-",
    // // done: use cdot instead of times
    // "*": "\\cdot",
    // // done: use frac
    // "/": "\\div",
    // "**": "^",
    // "^": "^",

    // Comparison operators
    "=": "=",
    "!=": "\\neq",
    "<": "<",
    ">": ">",
    "<=": "\\leq",
    ">=": "\\geq",
    "≈": "\\approx",
    "~": "\\sim",

    // Greek letters (lowercase)
    alpha: "\\alpha",
    beta: "\\beta",
    gamma: "\\gamma",
    delta: "\\delta",
    epsilon: "\\epsilon",
    zeta: "\\zeta",
    eta: "\\eta",
    theta: "\\theta",
    iota: "\\iota",
    kappa: "\\kappa",
    lambda: "\\lambda",
    mu: "\\mu",
    nu: "\\nu",
    xi: "\\xi",
    omicron: "\\omicron",
    pi: "\\pi",
    rho: "\\rho",
    sigma: "\\sigma",
    tau: "\\tau",
    upsilon: "\\upsilon",
    phi: "\\phi",
    chi: "\\chi",
    psi: "\\psi",
    omega: "\\omega",

    // Greek letters (uppercase)
    Gamma: "\\Gamma",
    Delta: "\\Delta",
    Theta: "\\Theta",
    Lambda: "\\Lambda",
    Xi: "\\Xi",
    Pi: "\\Pi",
    Sigma: "\\Sigma",
    Upsilon: "\\Upsilon",
    Phi: "\\Phi",
    Psi: "\\Psi",
    Omega: "\\Omega",

    // Mathematical constants
    infinity: "\\infty",
    infty: "\\infty",
    partial: "\\partial",
    nabla: "\\nabla",

    // Set theory
    in: "\\in",
    notin: "\\notin",
    subset: "\\subset",
    subseteq: "\\subseteq",
    supset: "\\supset",
    supseteq: "\\supseteq",
    cup: "\\cup",
    cap: "\\cap",
    emptyset: "\\emptyset",
    forall: "\\forall",
    exists: "\\exists",
    nexists: "\\nexists",

    // Logic
    and: "\\land",
    or: "\\lor",
    not: "\\lnot",
    implies: "\\implies",
    iff: "\\iff",

    // Calculus
    int: "\\int",
    oint: "\\oint",
    sum: "\\sum",
    prod: "\\prod",
    lim: "\\lim",
    nabla: "\\nabla",

    // done: process brackets manually
    // // Brackets and parentheses
    // "(": "(",
    // ")": ")",
    // "[": "[",
    // "]": "]",
    // "{": "\\{",
    // "}": "\\}",
    langle: "\\langle",
    rangle: "\\rangle",

    // Arrows
    to: "\\to",
    rightarrow: "\\rightarrow",
    leftarrow: "\\leftarrow",
    leftrightarrow: "\\leftrightarrow",
    Rightarrow: "\\Rightarrow",
    Leftarrow: "\\Leftarrow",
    Leftrightarrow: "\\Leftrightarrow",

    // Miscellaneous symbols
    cdot: "\\cdot",
    pm: "\\pm",
    mp: "\\mp",
    times: "\\times",
    div: "\\div",
    circ: "\\circ",
    deg: "^\\circ",
    prime: "\\prime",
    ldots: "\\ldots",
    cdots: "\\cdots",
    vdots: "\\vdots",
    ddots: "\\ddots",
    sqrt: "\\sqrt",
    perp: "\\perp",
    parallel: "\\parallel",
    angle: "\\angle",
    triangle: "\\triangle",
    congruent: "\\cong",
    similar: "\\sim",
    propto: "\\propto",
  };

  // done: process dict

  for (const key of Object.keys(dict)) {
    dict[key] = ` ${dict[key]} `;
  }

  // + and - does not need to be processed.
  // while - may cause error (as negative symbol)

  const precedence = [["_"], ["^"], ["//", "%%"], ["*", "/"]];

  const operators = {
    "^"(a, b) {
      return `{${a}}^{${b}}`;
    },
    _(a, b) {
      return `{${a}}_{${b}}`;
    },
    "//"(a, b) {
      return `\\lfloor\\frac{${a}}{${b}}\\rfloor`;
    },
    "%%"(a, b) {
      return `${a} \\bmod ${b}`;
    },
    "*"(a, b) {
      return `${a} \\cdot ${b}`;
    },
    "/"(a, b) {
      return `\\frac{${unwrap(a)}}{${unwrap(b)}}`;
    },
  };

  const functions = {
    sqrt(a) {
      return `\\sqrt{${a}}`;
    },
    root(a, b) {
      return `\\sqrt{${a}}{${b}}`;
    },
    log(a, b) {
      return `\\log_{${a}}{${wrap(b)}}`;
    },
    ln(a) {
      return `\\ln{${wrap(a)}}`;
    },
    sin(a) {
      return `\\sin{${wrap(a)}}`;
    },
    cos(a) {
      return `\\cos{${wrap(a)}}`;
    },
    tan(a) {
      return `\\tan{${wrap(a)}}`;
    },
    abs(a) {
      return `|${a}|`;
    },
    floor(a) {
      return `\\lfloor ${a} \\rfloor`;
    },
    ceil(a) {
      return `\\lceil ${a} \\rceil`;
    },
  };

  const wrap = (math) => {
    let flag = false;
    // todo: make it comprehensive
    const operators = ["+", "-", "\\times", "\\cdot", "\\div"];
    operators.map((o) => {
      if (math.includes(o)) {
        flag = true;
      }
    });
    return flag ? `(${math})` : math;
  };

  /**
   * Removes outermost parentheses from a mathematical expression if they form a balanced pair.
   * If the expression starts with '(' and ends with ')' and they are properly paired,
   * both parentheses are removed. Otherwise, the expression is returned unchanged.
   *
   * @param {string} math - The mathematical expression to unwrap
   * @returns {string} The unwrapped mathematical expression
   *
   * @example
   * unwrap('a+b') // returns 'a+b'
   * unwrap('(a+b)(a*b)') // returns '(a+b)(a*b)'
   * unwrap('(a+b-a*b)') // returns 'a+b-a*b'
   * unwrap('((a+b))') // returns '(a+b)'
   * unwrap('(a+(b*c))') // returns 'a+(b*c)'
   * unwrap('((a+b)*c)') // returns '(a+b)*c'
   * unwrap('()') // returns ''
   * unwrap('(a') // returns '(a'
   * unwrap('a)') // returns 'a)'
   */
  const unwrap = (math) => {
    if (math.length < 2 || math[0] !== "(" || math[math.length - 1] !== ")") {
      return math;
    }

    let balance = 0;

    // Check if the first and last parentheses form a balanced pair
    for (let i = 0; i < math.length; i++) {
      if (math[i] === "(") {
        balance++;
      } else if (math[i] === ")") {
        balance--;

        // If balance becomes zero before the last character,
        // the first parenthesis doesn't pair with the last one
        if (balance === 0 && i !== math.length - 1) {
          return math;
        }
      }
    }

    // If we end with balance zero, remove the outer parentheses
    // Otherwise, return the original string (unbalanced parentheses)
    return balance === 0 ? math.slice(1, -1) : math;
  };

  // done: brackets are not any type

  /**
   * Determines the type of a string based on its content.
   * - "number": contains only digits (0-9) and decimal points (.)
   * - "variable": contains only English letters (a-z, A-Z)
   * - "symbol": any other string
   *
   * @param {string} str - The input string to check
   * @returns {"number" | "variable" | "symbol"} The type of the string
   *
   * @example
   * type("123"); // returns "number"
   * type("0.123"); // returns "number"
   * type("0.1.2.3"); // returns "number"
   * type("hello"); // returns "variable"
   * type("World"); // returns "variable"
   * type("hello123"); // returns "symbol"
   * type("!@#"); // returns "symbol"
   * type(""); // returns "symbol"
   */
  const type = (str) => {
    if (/^[0-9.]+$/.test(str)) {
      return "number";
    }
    if (/^[a-zA-Z]+$/.test(str)) {
      return "variable";
    }
    if (["(", ")", "[", "]", "{", "}"].includes(str)) {
      return Symbol();
    }
    return "symbol";
  };

  /**
   * Splits a string into consecutive tokens of the same character type.
   * Characters are grouped based on the return value of the `type` function.
   *
   * @param {string} str - The input string to tokenize
   * @returns {string[]} Array of tokens where each token contains consecutive characters of the same type
   *
   * @example
   * // Assuming `type` function returns 'letter' for alphabetic characters and 'digit' for numbers
   * tokenize("abc123def");
   * // Returns: ['abc', '123', 'def']
   *
   * @example
   * // Mixed characters with different types
   * tokenize("Hello123World!");
   * // Returns: ['Hello', '123', 'World', '!']
   *
   * @example
   * // Empty string returns empty array
   * tokenize("");
   * // Returns: []
   *
   * @example
   * // Single character string
   * tokenize("a");
   * // Returns: ['a']
   */
  const tokenize = (str) => {
    if (str.length === 0) return [];

    const tokens = [];
    let currentToken = str[0];
    let currentType = type(str[0]);

    for (let i = 1; i < str.length; i++) {
      const char = str[i];
      const charType = type(char);

      if (charType === currentType) {
        currentToken += char;
      } else {
        tokens.push(currentToken);
        currentToken = char;
        currentType = charType;
      }
    }

    tokens.push(currentToken);
    return tokens;
  };

  /**
   * Translates an array of words by replacing words that are keys in a dictionary
   * with their corresponding values. Words not found in the dictionary remain unchanged.
   *
   * @param {string[]} words - Array of words to be translated.
   * @param {Object.<string, string>} dict - Dictionary object mapping source words to translated words.
   * @returns {string[]} New array with translated words.
   *
   * @example
   * // Basic usage
   * translate(['hello', 'world'], { hello: 'hola' });
   * // Returns: ['hola', 'world']
   *
   * @example
   * // Multiple translations
   * translate(['this', 'is', 'nice'], { this: 'este', is: 'es', nice: 'agradable' });
   * // Returns: ['este', 'es', 'agradable']
   *
   * @example
   * // No translations (empty dictionary)
   * translate(['foo', 'bar'], {});
   * // Returns: ['foo', 'bar']
   *
   * @example
   * // No translations (non-matching dictionary)
   * translate(['a', 'b'], { c: 'see', d: 'dee' });
   * // Returns: ['a', 'b']
   */
  const translate = (words, dict) =>
    words.map((word) => dict[word.replaceAll(" ", "")] ?? word);

  /**
   * Compiles an array of math tokens into a string representation using given operator precedence, operator functions, and function handlers.
   *
   * @param {string[]} math - Array of tokens representing a mathematical expression.
   * @param {string[][]} precedence - Array of arrays of operator symbols, ordered from highest to lowest precedence.
   * @param {Object} operators - Object mapping operator symbols to functions that take two arguments (left and right) and return a string.
   * @param {Object} functions - Object mapping function names to functions that take any number of arguments and return a string.
   * @returns {string} The compiled string representation of the input expression.
   *
   * @example
   * const precedence = [["_"], ["^"], ["*", "/"]];
   * const operators = {
   *   "^": (a, b) => `${a}^${b}`,
   *   "_": (a, b) => `${a}_${b}`,
   *   "*": (a, b) => `${a} \\cdot ${b}`,
   *   "/": (a, b) => `\\frac{${a}}{${b}}`
   * };
   * const functions = {
   *   sqrt: (a) => `\\sqrt{${a}}`,
   *   log: (a, b) => `\\log_{${a}}{${b}}`
   * };
   *
   * compile(["a", "+", "b", "*", "c", "^", "d", "-", "e", "/", "f"], precedence, operators, functions);
   * // returns "a+b \\cdot c^d-\\frac{e}{f}"
   *
   * @example
   * compile(["a", "*", "log", "(", "2", "^", "2", ",", "3", ")"], precedence, operators, functions);
   * // returns "a \\cdot \\log_{2^2}{3}"
   */
  const compile = (math, precedence, operators, functions) => {
    // Process parentheses from innermost to outermost
    while (true) {
      let innermostStart = -1;
      let innermostEnd = -1;
      for (let i = 0; i < math.length; i++) {
        if (math[i] === "(") {
          innermostStart = i;
        } else if (math[i] === ")") {
          if (innermostStart === -1) {
            throw new Error("Unmatched closing parenthesis");
          }
          innermostEnd = i;
          break;
        }
      }
      if (innermostEnd === -1) {
        if (innermostStart !== -1) {
          throw new Error("Unmatched opening parenthesis");
        }
        break;
      }

      // Extract tokens inside parentheses
      const innerTokens = math.slice(innermostStart + 1, innermostEnd);

      // Check for function call
      let functionName = null;
      if (innermostStart > 0 && math[innermostStart - 1] in functions) {
        functionName = math[innermostStart - 1];
      }

      if (functionName) {
        // Split parameters by top-level commas
        const params = [];
        let start = 0;
        let depth = 0;
        for (let k = 0; k < innerTokens.length; k++) {
          const token = innerTokens[k];
          if (token === "(") depth++;
          else if (token === ")") depth--;
          else if (token === "," && depth === 0) {
            params.push(innerTokens.slice(start, k));
            start = k + 1;
          }
        }
        params.push(innerTokens.slice(start));

        // Compile each parameter recursively
        const compiledParams = params.map((p) =>
          compile(p, precedence, operators, functions)
        );
        const result = functions[functionName](...compiledParams);

        // Replace function call and parentheses with result
        math.splice(
          innermostStart - 1,
          innermostEnd - innermostStart + 2,
          result
        );
      } else {
        // Compile inner expression recursively and wrap in parentheses
        const innerResult = compile(
          innerTokens,
          precedence,
          operators,
          functions
        );
        const wrappedResult = `(${innerResult})`;
        math.splice(
          innermostStart,
          innermostEnd - innermostStart + 1,
          wrappedResult
        );
      }
    }

    // Process operators by precedence levels
    for (const level of precedence) {
      const currentOps = new Set(level);
      let i = 0;
      while (i < math.length) {
        if (currentOps.has(math[i])) {
          if (i - 1 < 0 || i + 1 >= math.length) {
            throw new Error(
              `Operator '${math[i]}' at position ${i} is missing an operand`
            );
          }
          const left = math[i - 1];
          const right = math[i + 1];
          const op = math[i];
          const result = operators[op](left, right);
          math.splice(i - 1, 3, result);
          i = 0; // Restart scanning from beginning
        } else {
          i++;
        }
      }
    }

    // Join remaining tokens into final string
    return math.join("");
  };

  // /\s+/ means whitespace
  math = math
    .split("\n")
    .map((line) => line.split(/\s+/).join(" "))
    .join("\\\\");

  math = tokenize(math);

  // " + " to "+"
  math = math.map((m) => (m.length == 1 ? m : m.replaceAll(" ", "")));

  math = translate(math, dict);

  math = compile(math, precedence, operators, functions);

  return renderLatex(math);
};
