(() => {
  const dict = {
    // literals
    '"': '\\text{"}',

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
    // added support
    inf: "\\infty",
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
    // sum is a special fn
    // sum: "\\sum",
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
    // done: arrows like <=>
    "->": "\\rightarrow",
    "<-": "\\leftarrow",
    "<->": "\\leftrightarrow",
    "=>": "\\Rightarrow",
    // reserved
    // "<=": "\\Leftarrow",
    "<=>": "\\Leftrightarrow",

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
    // sqrt: "\\sqrt",
    perp: "\\perp",
    parallel: "\\parallel",
    angle: "\\angle",
    triangle: "\\triangle",
    congruent: "\\cong",
    similar: "\\sim",
    propto: "\\propto",
  };

  // done: process dict

  // add a space before and after each dict entry
  // coz additional spaces will be omitted by the renderer
  // but no spaces may cause token splitting error

  for (const key of Object.keys(dict)) {
    dict[key] = ` ${dict[key]} `;
  }

  // + and - does not need to be processed.
  // while - may cause error (as negative symbol)

  const precedence = [["_"], ["^"], ["//", "%%"], ["*", "/"]];

  const operators = {
    // no need to wrap a, as an operator
    "^"(a, b) {
      return `{${a}}^{${unwrap(b)}}`;
    },
    _(a, b) {
      return `{${a}}_{${unwrap(b)}}`;
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
    // special fn for {}
    brace(...args) {
      let a = args.join(",");
      if (a.includes("\\\\")) {
        // fn cases or a list of true statements
        if (a.startsWith("\\\\")) {
          a = a.slice(2);
        }
        if (a.endsWith("\\\\")) {
          a = a.slice(0, -2);
        }
        if (a.includes("&")) {
          return `\\begin{cases}${a}\\end{cases}`;
        } else {
          // rejected: support align. auto add & before =, <, >, <=, >=
          return `\\left\\{\\begin{array}{l}${a}\\end{array}\\right.`;
        }
      } else {
        // set or series
        return `\\{${a}\\}`;
      }
    },
    max(...args) {
      if (args.length == 1) {
        const a = args[0];
        return `\\max ${wrap(a)}`;
      } else if (args.length == 2) {
        const a = args[0];
        const limitation = args[1];
        return `\\max \\limits_{${limitation}} ${wrap(a)}`;
      }
    },
    min(...args) {
      if (args.length == 1) {
        const a = args[0];
        return `\\min ${wrap(a)}`;
      } else if (args.length == 2) {
        const a = args[0];
        const limitation = args[1];
        return `\\min \\limits_{${limitation}} ${wrap(a)}`;
      }
    },
    sum(a, b, c) {
      return `\\sum_{${a}}^{${b}}{${wrap(c)}}`;
    },
    v(a) {
      return `\\vec{${a}}`;
    },
    case(a) {
      return `{${a}}^{\\circ}`;
    },
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
    // Remove all content inside brackets (both the brackets and their content)
    let cleaned = math;
    let previousLength;

    do {
      previousLength = cleaned.length;
      // Remove innermost brackets and their content
      cleaned = cleaned
        .replace(/\([^()]*\)/g, "") // Remove (...)
        .replace(/\[[^\[\]]*\]/g, "") // Remove [...]
        .replace(/\{[^{}]*\}/g, ""); // Remove {...}
    } while (cleaned.length < previousLength); // Repeat until no more brackets found

    // Comprehensive list of mathematical operators (excluding relational operators)
    const operators = [
      // Basic arithmetic
      "+",
      "-",
      // Multiplication and division
      "\\times",
      "\\cdot",
      "\\ast",
      "\\star",
      "\\div",
      // Other operators
      "\\pm",
      "\\mp",
      "\\oplus",
      "\\ominus",
      "\\otimes",
      "\\oslash",
      "\\odot",
      "\\circ",
      "\\bullet",
      "\\dagger",
      "\\ddagger",
      // Set operators
      "\\cap",
      "\\cup",
      "\\sqcap",
      "\\sqcup",
      "\\uplus",
      "\\bigcirc",
      "\\bigtriangleup",
      "\\bigtriangledown",
      "\\wr",
      "\\amalg",
    ];

    // Check if any operators exist in the cleaned string
    const hasOperator = operators.some((op) => cleaned.includes(op));

    return hasOperator ? `(${math})` : math;
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
   * - "text": contains any CJK (Chinese, Japanese, Korean) characters
   * - "symbol": any other string
   * Returns a Symbol for non-strings and bracket characters.
   *
   * @param {string} str - The input string to check
   * @returns {"number" | "variable" | "text" | "symbol" | symbol} The type of the string
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
   * type("中文"); // returns "text"
   * type("한글"); // returns "text"
   * type("日本語"); // returns "text"
   * type("Hello 世界"); // returns "text"
   * type(123); // returns Symbol()
   * type("("); // returns Symbol()
   */
  const type = (str) => {
    // added: a type for not being equal to anything
    const different = Symbol();
    if (typeof str != "string") {
      // edge case
      return different;
    }

    // Check for CJK characters first
    if (/[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/.test(str)) {
      return "text";
    }

    if (/^[0-9.]+$/.test(str)) {
      return "number";
    }
    if (/^[a-zA-Z]+$/.test(str)) {
      return "variable";
    }
    if (["(", ")", "[", "]", "{", "}"].includes(str)) {
      return different;
    }
    return "symbol";
  };

  // done: handle \ escape character specially

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
   * Joins an array of arrays by inserting a connector between each inner array.
   *
   * @param {Array[]} arrays - An array of arrays to be joined
   * @param {*} connector - The element to insert between each inner array
   * @returns {Array} A new array with all inner arrays joined by the connector
   *
   * @example
   * // Returns [1, 2, '&', 3, 4, '&', 5, 6]
   * join([[1, 2], [3, 4], [5, 6]], '&');
   *
   * @example
   * // Returns ['a', 'b', 0, 'c', 'd', 0, 'e', 'f']
   * join([['a', 'b'], ['c', 'd'], ['e', 'f']], 0);
   *
   * @example
   * // Returns [true, false]
   * join([[true, false]], 'connector');
   *
   * @example
   * // Returns []
   * join([], 'anything');
   */
  const join = (arrays, connector) => {
    const result = [];

    for (let i = 0; i < arrays.length; i++) {
      // Add all elements from the current inner array
      result.push(...arrays[i]);

      // Add connector after all inner arrays except the last one
      if (i < arrays.length - 1) {
        result.push(connector);
      }
    }

    return result;
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

  // todo: refactor it with abstraction

  // done: fix closing parenthesis matching error (for [a,b) range)

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

  const precious = (math) => {
    // convert braces to paratheses
    // since the compiler only recognizes paratheses

    math = math.replaceAll("{", "brace(").replaceAll("}", ")");

    // convert brackets to paratheses
    // fix: unmatched closing parathesis. (e.g. [1,2) for 1 <= x < 2)
    math = math
      .replaceAll("[", "preciousbracketbegin(")
      .replaceAll("]", ")preciousbracketend");

    // /\s+/ means whitespace
    math = math.split("\n").map((line) => line.split(/\s+/).join(" "));

    math = math.map((line) => tokenize(line));

    math = join(math, "\\\\");

    // " + " to "+"
    math = math.map((m) => (m == " " ? " " : m.replaceAll(" ", "")));

    math = translate(math, dict);

    // escape literal spaces (spaces are omitted in output by default)
    // only when its left and right are not operator (symbol).
    // invalid index will not produce the wrong result.
    math = math.map((m, index) =>
      m == " " &&
      type(math[index - 1]) != "symbol" &&
      type(math[index + 1]) != "symbol"
        ? " \\: "
        : m
    );

    math = compile(math, precedence, operators, functions);

    // convert brackets back to literal
    math = math
      .replaceAll("preciousbracketbegin(", "[")
      .replaceAll(")preciousbracketend", "]");

    return math;
  };

  globalThis.precious = precious;
})();
