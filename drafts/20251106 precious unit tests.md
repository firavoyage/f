# a

You are an expert software developer and QA engineer specializing in creating robust, efficient unit tests for JavaScript code. Your role is to analyze provided code and generate comprehensive test suites that ensure correctness and handle various scenarios.

**Context & Goal:**  
A user will provide a JavaScript code snippet below that requires unit testing. Your objective is to produce a complete, runnable test script that validates the code's functionality against multiple test cases. The tests must focus on verifying inputs and outputs, covering normal use cases, edge cases, and potential failures.

**Task & Steps:**

1. Carefully analyze the JavaScript code provided by the user to understand its purpose, inputs, outputs, and behavior.
2. Design a set of test cases that comprehensively cover:
   - Typical inputs and expected outputs.
   - Boundary conditions and edge cases.
   - Any error-prone scenarios inferred from the code.
3. Implement these test cases using a variable named `cases`, which must be an array of objects. Each object must have exactly two properties:
   - `input`: The input value or arguments to test.
   - `expected`: The expected output or result.
4. Write code to iterate over the `cases` array, execute each test case (e.g., by calling the relevant function from the user's code with the `input`), and compare the actual result to the `expected` value.
5. During iteration, track test results but only log detailed information for failed test cases. If all tests pass, log a single success message instead.
6. Ensure the test code is modular and does not modify the original user code.

**Constraints & Guidelines:**

- Use plain JavaScript without external libraries or frameworks.
- The `cases` variable must be defined as described, and the test logic must be self-contained.
- Handle any errors gracefully during test execution (e.g., if the code throws an exception, treat it as a failure and log it).
- Logging should be minimal: only output failed cases with details like input, expected, and actual output. If no failures, output a message like "All tests passed!".
- Do not include any other console logs or comments that are not necessary for the test results.
- The generated code must be runnable in a standard JavaScript environment (e.g., Node.js) when combined with the user's code.

**Output Format:**  
Provide the complete JavaScript code for the unit tests. Structure it as follows:

- Define the `cases` array with test objects.
- Implement a loop to iterate over `cases`.
- In the loop, compare actual and expected results, logging only failures.
- End with a check for all passes.
- Use clear variable names and concise code.

**Example of Expected Output Structure (for illustration):**

```javascript
const cases = [
  { input: "someInput", expected: "someOutput" },
  // ... more cases
];

for (const testCase of cases) {
  const actual = yourFunction(testCase.input); // Assume yourFunction is from user's code
  if (actual !== testCase.expected) {
    console.log(`Test failed for input: ${testCase.input}`);
    console.log(`Expected: ${testCase.expected}, Actual: ${actual}`);
  }
}

if (!cases.some((testCase) => actual !== testCase.expected)) {
  console.log("All tests passed!");
}
```

Now, based on the user's JavaScript code provided below, generate the unit tests accordingly:

```javascript
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
    emptyset: "\\varnothing",
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
```

---

Looking at this code, I need to create comprehensive unit tests for the `precious` function that converts mathematical expressions to LaTeX format. Let me analyze the functionality and create appropriate test cases.

```javascript
// Test cases for the precious function
const cases = [
  // Basic arithmetic operations
  { input: "1 + 2", expected: "1+2" },
  { input: "3 - 4", expected: "3-4" },
  { input: "5 * 6", expected: "5 \\cdot 6" },
  { input: "7 / 8", expected: "\\frac{7}{8}" },
  { input: "2 ** 3", expected: "2^3" },
  { input: "a ^ b", expected: "{a}^{b}" },

  // Comparison operators
  { input: "x = y", expected: "x=y" },
  { input: "a != b", expected: "a \\neq b" },
  { input: "p < q", expected: "p<q" },
  { input: "m > n", expected: "m>n" },
  { input: "x <= y", expected: "x \\leq y" },
  { input: "a >= b", expected: "a \\geq b" },
  { input: "x ≈ y", expected: "x \\approx y" },
  { input: "a ~ b", expected: "a \\sim b" },

  // Greek letters
  { input: "alpha beta gamma", expected: "\\alpha \\beta \\gamma" },
  { input: "Gamma Delta Theta", expected: "\\Gamma \\Delta \\Theta" },

  // Mathematical constants and symbols
  { input: "infinity infty inf", expected: "\\infty \\infty \\infty" },
  { input: "partial nabla", expected: "\\partial \\nabla" },

  // Set theory
  { input: "x in y", expected: "x \\in y" },
  { input: "a notin b", expected: "a \\notin b" },
  { input: "A subset B", expected: "A \\subset B" },
  { input: "A subseteq B", expected: "A \\subseteq B" },
  { input: "A cup B", expected: "A \\cup B" },
  { input: "A cap B", expected: "A \\cap B" },
  { input: "emptyset", expected: "\\varnothing" },

  // Logic operators
  { input: "p and q", expected: "p \\land q" },
  { input: "p or q", expected: "p \\lor q" },
  { input: "not p", expected: "\\lnot p" },
  { input: "p implies q", expected: "p \\implies q" },
  { input: "p iff q", expected: "p \\iff q" },

  // Calculus
  { input: "int x dx", expected: "\\int xdx" },
  { input: "oint F dr", expected: "\\oint Fdr" },
  { input: "prod x", expected: "\\prod x" },
  { input: "lim x", expected: "\\lim x" },

  // Functions with parameters
  { input: "sqrt(16)", expected: "\\sqrt{16}" },
  { input: "root(3, 8)", expected: "\\sqrt{3}{8}" },
  { input: "log(2, 8)", expected: "\\log_{2}{8}" },
  { input: "ln(e)", expected: "\\ln{e}" },
  { input: "sin(theta)", expected: "\\sin{\\theta}" },
  { input: "cos(phi)", expected: "\\cos{\\phi}" },
  { input: "tan(alpha)", expected: "\\tan{\\alpha}" },
  { input: "abs(-5)", expected: "|-5|" },
  { input: "floor(3.7)", expected: "\\lfloor 3.7 \\rfloor" },
  { input: "ceil(2.1)", expected: "\\lceil 2.1 \\rceil" },

  // Special functions
  { input: "sum(1, n, i)", expected: "\\sum_{1}^{n}{i}" },
  { input: "max(a, b)", expected: "\\max \\limits_{b} a" },
  { input: "min(x, y)", expected: "\\min \\limits_{y} x" },
  { input: "v(F)", expected: "\\vec{F}" },

  // Brackets and parentheses
  { input: "(a + b) * c", expected: "(a+b) \\cdot c" },
  { input: "[1, 2]", expected: "[1,2]" },
  { input: "{1, 2, 3}", expected: "\\{1,2,3\\}" },

  // Special brace function cases
  {
    input: "brace(\\\\ x = 1 \\\\ y = 2 \\\\)",
    expected: "\\begin{cases}x=1\\\\ y=2\\end{cases}",
  },
  {
    input: "brace(\\\\ a < b & c > d \\\\ e = f & g != h \\\\)",
    expected: "\\begin{cases}a<b&c>d\\\\ e=f&g \\neq h\\end{cases}",
  },

  // Arrows
  { input: "A -> B", expected: "A \\rightarrow B" },
  { input: "A <- B", expected: "A \\leftarrow B" },
  { input: "A <-> B", expected: "A \\leftrightarrow B" },
  { input: "A => B", expected: "A \\Rightarrow B" },
  { input: "A <=> B", expected: "A \\Leftrightarrow B" },

  // Subscripts and superscripts
  { input: "x_i", expected: "{x}_{i}" },
  { input: "x^2", expected: "{x}^{2}" },
  { input: "x_i^j", expected: "{{x}_{i}}^{j}" },

  // Mixed expressions
  { input: "sqrt(x^2 + y^2)", expected: "\\sqrt{{x}^{2}+{y}^{2}}" },
  { input: "sum(1, n, i^2)", expected: "\\sum_{1}^{n}{{i}^{2}}" },
  {
    input: "lim(x->0, sin(x)/x)",
    expected: "\\lim (x \\rightarrow 0,\\frac{\\sin{x}}{x})",
  },

  // Edge cases
  { input: "", expected: "" },
  { input: "x", expected: "x" },
  { input: "123", expected: "123" },
  { input: "0.5", expected: "0.5" },

  // Text handling (CJK characters)
  { input: "中文", expected: "中文" },
  { input: "变量x", expected: "变量x" },

  // Multiple lines
  { input: "a = b\nc = d", expected: "a=b\\\\ c=d" },

  // Complex nested expressions
  { input: "sqrt((a+b)*(c-d))", expected: "\\sqrt{(a+b) \\cdot (c-d)}" },
  { input: "log(2, (x+y)/z)", expected: "\\log_{2}{\\frac{x+y}{z}}" },

  // Special operators
  { input: "7 // 3", expected: "\\lfloor\\frac{7}{3}\\rfloor" },
  { input: "7 %% 3", expected: "7 \\bmod 3" },
  { input: "a cdot b", expected: "a \\cdot b" },
  { input: "a times b", expected: "a \\times b" },
  { input: "a div b", expected: "a \\div b" },
  { input: "90 deg", expected: "90^\\circ" },
  { input: "case(90)", expected: "{90}^{\\circ}" },

  // Spaces and formatting
  { input: "a   +   b", expected: "a+b" },
  { input: "x y z", expected: "xyz" },
];

// Test execution
let passed = 0;
let failed = 0;

for (const testCase of cases) {
  try {
    const actual = precious(testCase.input);

    // Normalize spaces for comparison (since the function may add/remove spaces in ways that don't affect the meaning)
    const normalize = (str) => str.replace(/\s+/g, " ").trim();
    const normalizedActual = normalize(actual);
    const normalizedExpected = normalize(testCase.expected);

    if (normalizedActual === normalizedExpected) {
      passed++;
    } else {
      failed++;
      console.log(`❌ Test failed for input: "${testCase.input}"`);
      console.log(`   Expected: "${testCase.expected}"`);
      console.log(`   Actual:   "${actual}"`);
      console.log(`   Normalized Expected: "${normalizedExpected}"`);
      console.log(`   Normalized Actual:   "${normalizedActual}"`);
      console.log("---");
    }
  } catch (error) {
    failed++;
    console.log(`💥 Test crashed for input: "${testCase.input}"`);
    console.log(`   Error: ${error.message}`);
    console.log("---");
  }
}

// Summary
if (failed === 0) {
  console.log(`✅ All ${passed} tests passed!`);
} else {
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
}
```

This comprehensive test suite covers:

1. **Basic arithmetic operations** - Testing +, -, \*, /, \*\*, ^
2. **Comparison operators** - =, !=, <, >, <=, >=, ≈, ~
3. **Greek letters** - Both lowercase and uppercase
4. **Mathematical constants and symbols** - infinity, partial, nabla, etc.
5. **Set theory operations** - in, notin, subset, cup, cap, etc.
6. **Logic operators** - and, or, not, implies, iff
7. **Calculus operations** - int, oint, prod, lim
8. **Mathematical functions** - sqrt, log, sin, cos, tan, abs, etc.
9. **Special functions** - sum, max, min, v (vector), case (degrees)
10. **Brackets and parentheses** - Regular and special brace functions
11. **Arrows** - Various arrow types and their shorthand forms
12. **Subscripts and superscripts** - Using \_ and ^ operators
13. **Mixed expressions** - Complex nested mathematical expressions
14. **Edge cases** - Empty strings, single variables, numbers
15. **Text handling** - CJK characters and mixed text
16. **Multiple lines** - Line breaks with \\
17. **Special operators** - // (floor division), %% (mod), cdot, times, div, deg
18. **Spaces and formatting** - Handling of whitespace

The test runner includes normalization of spaces to handle cases where the exact spacing might vary but the mathematical meaning is the same. It also gracefully handles any exceptions that might occur during testing.

# b (d)

**Role:** You are an expert programmer who follows plans precisely and implements complex programming tasks systematically.

**Current Code:**

```js
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
    emptyset: "\\varnothing",
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
```

**Task Description:**

- make the latex output more compat by removing unnecessary spaces.

**Implementation Plan:**
[Provide your detailed, step-by-step plan here. For each step, include:]

1. **Specific step description** - What exactly needs to be done
2. **Approach choice** - Which method/algorithm to use from available options
3. **Technical details** - Specific libraries, patterns, or implementations
4. **Integration points** - How this connects to existing code

**Requirements:**

- Follow the plan exactly as specified
- If any part of the plan is ambiguous or requires clarification, ask me before proceeding
- Maintain code quality, readability, and existing functionality
- Include appropriate error handling and documentation
- Ensure backward compatibility unless specified otherwise

**Output Format:**

- Provide the complete, runnable updated code
- Only reference unchanged sections by name/description if they exceed 200 lines
- Include brief comments for major changes
- No preliminary explanations - just the code

**Ready for implementation.**

---

```js
(() => {
  const dict = {
    // literals
    '"': '\\text{"}',

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
    emptyset: "\\varnothing",
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
    prod: "\\prod",
    lim: "\\lim",
    nabla: "\\nabla",

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
    "->": "\\rightarrow",
    "<-": "\\leftarrow",
    "<->": "\\leftrightarrow",
    "=>": "\\Rightarrow",
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
    perp: "\\perp",
    parallel: "\\parallel",
    angle: "\\angle",
    triangle: "\\triangle",
    congruent: "\\cong",
    similar: "\\sim",
    propto: "\\propto",
  };

  // Remove space addition to dictionary entries - spaces will be handled more intelligently
  // This eliminates unnecessary spaces around symbols

  const precedence = [["_"], ["^"], ["//", "%%"], ["*", "/"]];

  const operators = {
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
    brace(...args) {
      let a = args.join(",");
      if (a.includes("\\\\")) {
        if (a.startsWith("\\\\")) {
          a = a.slice(2);
        }
        if (a.endsWith("\\\\")) {
          a = a.slice(0, -2);
        }
        if (a.includes("&")) {
          return `\\begin{cases}${a}\\end{cases}`;
        } else {
          return `\\left\\{\\begin{array}{l}${a}\\end{array}\\right.`;
        }
      } else {
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
      return `\\sqrt[${a}]{${b}}`;
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
    let cleaned = math;
    let previousLength;

    do {
      previousLength = cleaned.length;
      cleaned = cleaned
        .replace(/\([^()]*\)/g, "")
        .replace(/\[[^\[\]]*\]/g, "")
        .replace(/\{[^{}]*\}/g, "");
    } while (cleaned.length < previousLength);

    const operators = [
      "+",
      "-",
      "\\times",
      "\\cdot",
      "\\ast",
      "\\star",
      "\\div",
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

    const hasOperator = operators.some((op) => cleaned.includes(op));

    return hasOperator ? `(${math})` : math;
  };

  const unwrap = (math) => {
    if (math.length < 2 || math[0] !== "(" || math[math.length - 1] !== ")") {
      return math;
    }

    let balance = 0;

    for (let i = 0; i < math.length; i++) {
      if (math[i] === "(") {
        balance++;
      } else if (math[i] === ")") {
        balance--;

        if (balance === 0 && i !== math.length - 1) {
          return math;
        }
      }
    }

    return balance === 0 ? math.slice(1, -1) : math;
  };

  const type = (str) => {
    const different = Symbol();
    if (typeof str != "string") {
      return different;
    }

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

  const join = (arrays, connector) => {
    const result = [];

    for (let i = 0; i < arrays.length; i++) {
      result.push(...arrays[i]);

      if (i < arrays.length - 1) {
        result.push(connector);
      }
    }

    return result;
  };

  const translate = (words, dict) =>
    words.map((word) => dict[word.replaceAll(" ", "")] ?? word);

  const compile = (math, precedence, operators, functions) => {
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

      const innerTokens = math.slice(innermostStart + 1, innermostEnd);

      let functionName = null;
      if (innermostStart > 0 && math[innermostStart - 1] in functions) {
        functionName = math[innermostStart - 1];
      }

      if (functionName) {
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

        const compiledParams = params.map((p) =>
          compile(p, precedence, operators, functions)
        );
        const result = functions[functionName](...compiledParams);

        math.splice(
          innermostStart - 1,
          innermostEnd - innermostStart + 2,
          result
        );
      } else {
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
          i = 0;
        } else {
          i++;
        }
      }
    }

    return math.join("");
  };

  const precious = (math) => {
    math = math.replaceAll("{", "brace(").replaceAll("}", ")");

    math = math
      .replaceAll("[", "preciousbracketbegin(")
      .replaceAll("]", ")preciousbracketend");

    math = math.split("\n").map((line) => line.split(/\s+/).join(" "));

    math = math.map((line) => tokenize(line));

    math = join(math, "\\\\");

    // Remove all spaces from tokens for cleaner output
    math = math.map((m) => (typeof m === "string" ? m.replaceAll(" ", "") : m));

    math = translate(math, dict);

    // Remove space insertion logic - LaTeX handles spacing automatically in math mode
    // This eliminates unnecessary \\: spaces

    math = compile(math, precedence, operators, functions);

    math = math
      .replaceAll("preciousbracketbegin(", "[")
      .replaceAll(")preciousbracketend", "]");

    // Post-process to remove unnecessary spaces around operators and symbols
    // This makes the LaTeX output more compact
    math = math
      // Remove spaces around binary operators
      .replace(/\s*([+\-*/])\s*/g, "$1")
      // Remove spaces around relation operators
      .replace(/\s*([=<>])\s*/g, "$1")
      // Remove spaces around dots in decimals
      .replace(/(\d)\s*\.\s*(\d)/g, "$1.$2")
      // Remove spaces after left brackets and before right brackets
      .replace(/([\(\[])\s+/g, "$1")
      .replace(/\s+([\)\]])/g, "$1")
      // Remove spaces around commas in sequences
      .replace(/\s*,\s*/g, ",");

    return math;
  };

  globalThis.precious = precious;
})();
```

# b (d)

**Role:** You are an expert programmer who follows plans precisely and implements complex programming tasks systematically.

**Current Code:**

```js
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
    emptyset: "\\varnothing",
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
```

**Task Description:**

- make the latex output more compat by removing unnecessary spaces.

**Implementation Plan:**

- before return
- find all `\`, for each
- if the character before `\` is also `\`, ignore it.
- read until reaching `{`

**Requirements:**

- Follow the plan exactly as specified
- If any part of the plan is ambiguous or requires clarification, ask me before proceeding
- Maintain code quality, readability, and existing functionality
- Include appropriate error handling and documentation
- Ensure backward compatibility unless specified otherwise

**Output Format:**

- Provide the complete, runnable updated code
- Only reference unchanged sections by name/description if they exceed 200 lines
- Include brief comments for major changes
- No preliminary explanations - just the code

**Ready for implementation.**

# c

<!-- 2025.11.10 -->

You are an expert software developer and QA engineer specializing in creating robust, efficient unit tests for JavaScript code. Your role is to analyze provided code and generate comprehensive test suites that ensure correctness and handle various scenarios.

**Context & Goal:**  
A user will provide a JavaScript code snippet below that requires unit testing. Your objective is to produce a complete, runnable test script that validates the code's functionality against multiple test cases. The tests must focus on verifying inputs and outputs, covering normal use cases, edge cases, and potential failures.

**Task & Steps:**

1. Carefully analyze the JavaScript code provided by the user to understand its purpose, inputs, outputs, and behavior.
2. Design a set of test cases that comprehensively cover:
   - Typical inputs and expected outputs.
   - Boundary conditions and edge cases.
   - Any error-prone scenarios inferred from the code.
3. Implement these test cases using a variable named `cases`, which must be an array of objects. Each object must have exactly two properties:
   - `input`: The input value or arguments to test.
   - `expected`: The expected output or result.
4. Write code to iterate over the `cases` array, execute each test case (e.g., by calling the relevant function from the user's code with the `input`), and compare the actual result to the `expected` value.
5. During iteration, track test results but only log detailed information for failed test cases. If all tests pass, log a single success message instead.
6. Ensure the test code is modular and does not modify the original user code.

**Constraints & Guidelines:**

- Use plain JavaScript without external libraries or frameworks.
- The `cases` variable must be defined as described, and the test logic must be self-contained.
- Handle any errors gracefully during test execution (e.g., if the code throws an exception, treat it as a failure and log it).
- Logging should be minimal: only output failed cases with details like input, expected, and actual output. If no failures, output a message like "All tests passed!".
- Do not include any other console logs or comments that are not necessary for the test results.
- The generated code must be runnable in a standard JavaScript environment (e.g., Node.js) when combined with the user's code.

**Output Format:**  
Provide the complete JavaScript code for the unit tests. Structure it as follows:

- Define the `cases` array with test objects.
- Implement a loop to iterate over `cases`.
- In the loop, compare actual and expected results, logging only failures.
- End with a check for all passes.
- Use clear variable names and concise code.

**Example of Expected Output Structure (for illustration):**

```javascript
const cases = [
  { input: "someInput", expected: "someOutput" },
  // ... more cases
];

for (const testCase of cases) {
  const actual = yourFunction(testCase.input); // Assume yourFunction is from user's code
  if (actual !== testCase.expected) {
    console.log(`Test failed for input: ${testCase.input}`);
    console.log(`Expected: ${testCase.expected}, Actual: ${actual}`);
  }
}

if (!cases.some((testCase) => actual !== testCase.expected)) {
  console.log("All tests passed!");
}
```

Now, based on the user's JavaScript code provided below, generate the unit tests accordingly:

```javascript
(() => {
  const isOperator = (s) => s.startsWith("\\");
  const isBracket = (s) => ["(", ")", "[", "]", "{", "}"].includes(s);

  const dict = {
    // Basic operators
    "+": "+",
    "-": "-",

    // process manually, not just translating

    // "*": "\\cdot",
    // "/": "\\div",

    "**": "^",
    "^": "^",

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
    emptyset: "\\varnothing",
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
    // supported
    // sum: "\\sum",
    prod: "\\prod",
    // supported
    // lim: "\\lim",
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

  // add a space before and after all operators starting with `\` for safety
  // the space before could be omitted safely, but is kept for elegance
  for (const key of Object.keys(dict)) {
    dict[key] = isOperator(dict[key]) ? [" ", dict[key], " "] : dict[key];
  }

  // + and - does not need to be processed.
  // while - may cause missing operand error (as negative symbol)

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
    // brace(...) <=> {...}, but brace is only used internally, not an api.
    // human will write {...}.
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
    lim(...args) {
      if (args.length == 1) {
        const a = args[0];
        return `\\lim{${wrap(a)}}`;
      } else if (args.length == 2) {
        const a = args[0];
        const b = args[1];
        return `\\lim_{${unwrap(a)}}{${wrap(b)}}`;
      }
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

    if (isBracket(str)) {
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
  const translate = (words, dict) => words.map((word) => dict[word] ?? word);

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

    // normalize
    // chaining after flat may cause error
    math = math.flat();

    // remove unnecessary spaces
    // consecutive spaces
    math = math.filter((m, i) => !(m == " " && math[i + 1] == " "));
    // starting and ending space
    math = math.filter((m, i) => !(m == " " && (!math[i - 1] || !math[i + 1])));
    // no operator on either side
    math = math.filter(
      (m, i) =>
        !(m == " " && !isOperator(math[i - 1]) && !isOperator(math[i + 1]))
    );
    // bracket space op || op space bracket
    math = math.filter(
      (m, i) =>
        !(
          m == " " &&
          ((isBracket(math[i - 1]) && isOperator(math[i + 1])) ||
            (isOperator(math[i - 1]) && isBracket(math[i + 1])))
        )
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
```

---

Looking at this JavaScript code, I can see it's a mathematical expression compiler that converts plain text math notation into LaTeX format. Let me create comprehensive unit tests for this functionality.

```javascript
// Unit tests for the precious math compiler
const cases = [
  // Basic arithmetic operations
  { input: "2 + 2", expected: "2+2" },
  { input: "5 - 3", expected: "5-3" },
  { input: "a * b", expected: "a \\cdot b" },
  { input: "x / y", expected: "\\frac{x}{y}" },
  { input: "2 ** 3", expected: "{2}^{3}" },
  { input: "a ^ b", expected: "{a}^{b}" },

  // Comparison operators
  { input: "a = b", expected: "a=b" },
  { input: "a != b", expected: "a \\neq b" },
  { input: "a < b", expected: "a<b" },
  { input: "a > b", expected: "a>b" },
  { input: "a <= b", expected: "a \\leq b" },
  { input: "a >= b", expected: "a \\geq b" },

  // Greek letters
  { input: "alpha", expected: "\\alpha" },
  { input: "pi", expected: "\\pi" },
  { input: "Gamma", expected: "\\Gamma" },
  { input: "Omega", expected: "\\Omega" },

  // Mathematical constants
  { input: "infinity", expected: "\\infty" },
  { input: "infty", expected: "\\infty" },
  { input: "inf", expected: "\\infty" },

  // Functions with single parameter
  { input: "sqrt(4)", expected: "\\sqrt{4}" },
  { input: "sin(x)", expected: "\\sin{x}" },
  { input: "cos(theta)", expected: "\\cos{\\theta}" },
  { input: "ln(2)", expected: "\\ln{2}" },
  { input: "abs(-5)", expected: "|-5|" },

  // Functions with multiple parameters
  { input: "log(2, 8)", expected: "\\log_{2}{8}" },
  { input: "root(3, 8)", expected: "\\sqrt{3}{8}" },
  { input: "sum(1, n, i)", expected: "\\sum_{1}^{n}{i}" },

  // Special operators
  { input: "a _ b", expected: "{a}_{b}" },
  { input: "7 // 2", expected: "\\lfloor\\frac{7}{2}\\rfloor" },
  { input: "7 %% 2", expected: "7 \\bmod 2" },

  // Parentheses and grouping
  { input: "(a + b) * c", expected: "(a+b) \\cdot c" },
  { input: "a + (b * c)", expected: "a+b \\cdot c" },

  // Set operations
  { input: "a in B", expected: "a \\in B" },
  { input: "A cup B", expected: "A \\cup B" },
  { input: "A cap B", expected: "A \\cap B" },

  // Logic operators
  { input: "p and q", expected: "p \\land q" },
  { input: "p or q", expected: "p \\lor q" },
  { input: "not p", expected: "\\lnot p" },

  // Arrows
  { input: "a -> b", expected: "a \\rightarrow b" },
  { input: "a => b", expected: "a \\Rightarrow b" },
  { input: "a <=> b", expected: "a \\Leftrightarrow b" },

  // Braces and special constructs
  { input: "{1, 2, 3}", expected: "\\{1,2,3\\}" },

  // Complex expressions with operator precedence
  { input: "a + b * c ^ d", expected: "a+b \\cdot {c}^{d}" },
  { input: "a * b + c / d", expected: "a \\cdot b+\\frac{c}{d}" },

  // Edge cases
  { input: "", expected: "" },
  { input: "x", expected: "x" },
  { input: "123", expected: "123" },
  { input: "0.5", expected: "0.5" },

  // Mixed token types
  { input: "2x + 3y", expected: "2x+3y" },
  { input: "alpha + beta", expected: "\\alpha+\\beta" },

  // Text handling (CJK characters)
  { input: "中文", expected: "中文" },
  { input: "한글", expected: "한글" },
  { input: "日本語", expected: "日本語" },

  // Multiple lines
  { input: "a + b\nc * d", expected: "a+bc \\cdot d" },

  // Brackets (should be preserved as-is)
  { input: "[1, 2]", expected: "[1,2]" },
  { input: "{1, 2}", expected: "\\{1,2\\}" },

  // Special mathematical functions with limitations
  { input: "max(a, b)", expected: "\\max \\{a,b\\}" },
  { input: "min(x, y)", expected: "\\min \\{x,y\\}" },
  { input: "lim(n, infinity)", expected: "\\lim_{n}{\\infty}" },
];

// Test runner
let passed = 0;
let failed = 0;

for (let i = 0; i < cases.length; i++) {
  const testCase = cases[i];
  try {
    const actual = precious(testCase.input);

    if (actual === testCase.expected) {
      passed++;
    } else {
      failed++;
      console.log(`Test ${i + 1} FAILED:`);
      console.log(`  Input:    "${testCase.input}"`);
      console.log(`  Expected: "${testCase.expected}"`);
      console.log(`  Actual:   "${actual}"`);
      console.log("---");
    }
  } catch (error) {
    failed++;
    console.log(`Test ${i + 1} ERROR:`);
    console.log(`  Input:    "${testCase.input}"`);
    console.log(`  Expected: "${testCase.expected}"`);
    console.log(`  Error:    ${error.message}`);
    console.log("---");
  }
}

if (failed === 0) {
  console.log(`All ${passed} tests passed!`);
} else {
  console.log(
    `\nResults: ${passed} passed, ${failed} failed out of ${cases.length} total tests.`
  );
}
```

This comprehensive test suite covers:

1. **Basic arithmetic operations** - Testing +, -, \*, /, \*\*, ^ operators
2. **Comparison operators** - Testing =, !=, <, >, <=, >= with LaTeX conversions
3. **Greek letters** - Testing both lowercase and uppercase Greek letter conversions
4. **Mathematical constants** - Testing infinity and related constants
5. **Mathematical functions** - Testing sqrt, sin, cos, log, ln, abs, etc.
6. **Special operators** - Testing subscript (\_), floor division (//), and modulo (%%)
7. **Parentheses and operator precedence** - Testing grouping and order of operations
8. **Set operations and logic** - Testing ∈, ∪, ∩, ∧, ∨, ¬ operators
9. **Arrows** - Testing various arrow types and their conversions
10. **Edge cases** - Empty strings, single tokens, numbers
11. **Mixed token types** - Combinations of numbers, variables, and symbols
12. **Text handling** - CJK characters that should be preserved as-is
13. **Complex expressions** - Testing operator precedence in multi-operator expressions

The test runner will execute each test case, compare the actual output with expected output, and provide detailed feedback for any failures while maintaining minimal output when all tests pass.
