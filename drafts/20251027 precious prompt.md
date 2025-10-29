# 1

write a llm prompt for precious language, a sweeter latex.

learn the syntax from the precious compiler

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

in markdown, the usage can be either inline and block.

inline examples:

`ax^2 + bx + c`

`log(a,b) = log(a,b) * log(c,a) / log(c,a) = log(c,a^log(a,b)) / log(c,a) = log(c,b) / log(c,a)`

block examples:

```precious
forall x in [0, +inf), f(x) = f(1/(x+1))
{f(x)|x in [0,a]} = {f(x)|x in [0,+inf)}
求 a 范围.
```

```precious
f(x), D=R
forall a<c<b, c 为 M 点 <=>
exists 开区间 I
{
  c in I cap [a,b]
  forall x in I cap [a,b] cap {x|x!=c}, f(x)<f(c)
}
判断:
1. f(c) = max(f(x), x in [a,b]) => c 为 M 点
2. forall a<b, b 为 M 点 => f(x) 严增
```

```precious
f(x) = {
  x^3/e^x, x>=0
  ax^2, x<0
}
恰有两组点, 关于原点对称
求 a 范围
```

the prompt should be without headers.

---

## Precious Language to LaTeX Conversion Guide

### Overview

Precious is a simplified mathematical language that compiles to LaTeX. It provides a cleaner syntax for mathematical expressions while maintaining full LaTeX capabilities.

### Basic Syntax Rules

#### Literals and Variables

- **Numbers**: `123`, `0.456`
- **Variables**: Single letters like `x`, `y`, `z`
- **Text**: Use quotes for text `"text here"`
- **CJK characters**: Supported directly `中文 日本語`

#### Operators

```
+ - * /           // Basic arithmetic
^ _               // Superscript and subscript
= != < > <= >=    // Comparison operators
-> <- <=>         // Arrow operators
```

#### Special Operator Handling

- Multiplication: `*` becomes `\cdot`
- Division: `/` becomes `\frac{numerator}{denominator}`
- Floor division: `//` becomes `\lfloor\frac{a}{b}\rfloor`
- Modulo: `%%` becomes `a \bmod b`

### Symbol Dictionary

#### Greek Letters

```precious
alpha beta gamma     // lowercase
Gamma Delta Theta    // uppercase
```

#### Mathematical Symbols

```precious
infty inf            // ∞
partial nabla        // ∂ ∇
in notin subset      // ∈ ∉ ⊂
and or not           // ∧ ∨ ¬
implies iff          // ⇒ ⇔
int sum prod         // ∫ ∑ ∏
```

#### Arrow Symbols

```precious
-> =>                // → ⇒
<- <=                // ← ⇐
<=>                  // ⇔
```

### Function Syntax

#### Basic Functions

```precious
sqrt(x)              // \sqrt{x}
root(n,x)            // \sqrt[n]{x}
log(a,b)             // \log_{a}{b}
ln(x)                // \ln{x}
sin(x) cos(x) tan(x) // Trigonometric
abs(x)               // |x|
floor(x) ceil(x)     // ⌊x⌋ ⌈x⌉
```

#### Special Functions

```precious
max(a)               // \max a
max(a, n=1)          // \max\limits_{n=1} a
min(a)               // \min a
sum(i=1, n, term)    // \sum_{i=1}^{n}{term}
v(x)                 // \vec{x}
```

#### Brace Function (Sets and Cases)

```precious
{1,2,3}              // Simple set: \{1,2,3\}
{x | x>0}            // Set builder: \{x \mid x>0\}
{
  x+1, x>=0 \\
  x-1, x<0
}                    // Cases: \begin{cases} x+1 & x\geq 0 \\ x-1 & x<0 \end{cases}
```

### Advanced Features

#### Precedence Rules

Operators are processed in this order:

1. `_` (subscript)
2. `^` (superscript)
3. `//`, `%%`
4. `*`, `/`

#### Interval Notation

```precious
[0,1]                // [0,1]
(0,1)                // (0,1)
[a,b)                // [a,b)
```

#### Vector and Special Notation

```precious
v(x)                 // Vector: \vec{x}
case(x)              // Degrees: x^{\circ}
```

### Examples

#### Inline Examples

- Quadratic: `ax^2 + bx + c`
- Logarithm identity: `log(a,b) = log(a,b) * log(c,a) / log(c,a) = log(c,a^log(a,b)) / log(c,a) = log(c,b) / log(c,a)`

#### Block Examples

```precious
forall x in [0, +inf), f(x) = f(1/(x+1))
{f(x)|x in [0,a]} = {f(x)|x in [0,+inf)}
求 a 范围.
```

```precious
f(x), D=R
forall a<c<b, c 为 M 点 <=>
exists 开区间 I
{
  c in I cap [a,b]
  forall x in I cap [a,b] cap {x|x!=c}, f(x)<f(c)
}
判断:
1. f(c) = max(f(x), x in [a,b]) => c 为 M 点
2. forall a<b, b 为 M 点 => f(x) 严增
```

```precious
f(x) = {
  x^3/e^x, x>=0
  ax^2, x<0
}
恰有两组点, 关于原点对称
求 a 范围
```

### Key Points to Remember

1. **Spaces matter** - they help separate tokens
2. **Use braces** `{}` for sets and piecewise functions
3. **Functions use parentheses** `()` for arguments
4. **Mix Chinese/English text** freely with math
5. **Complex expressions** are automatically parenthesized when needed

The compiler automatically handles:

- Proper fraction formatting
- Operator spacing
- Parenthesis balancing
- Token type detection
- Multi-line expressions with `\\`

# 2

revise

- it's a prompt for llm, not a guide for human. dont use markdown headers in your reply. use imperative sentences and unordered lists.
- it's not a precious to latex conversion guide. it's about how to write in precious. it could be added to llm's knowledge for writing math stuff, like a chapter of a textbook, a problem solution.

---

Learn the Precious language syntax for writing mathematical expressions. Use this syntax whenever generating mathematical content.

Key syntax rules:

- Write numbers as plain digits: `123`, `0.456`
- Write variables as single letters: `x`, `y`, `z`
- Use quotes for text literals: `"text here"`
- CJK characters work directly: `中文 日本語`

Operator syntax:

- Basic arithmetic: `+ - * /`
- Superscript and subscript: `^ _`
- Comparisons: `= != < > <= >=`
- Arrows: `-> <- <=> =>`
- Multiplication `*` becomes `\cdot`
- Division `/` becomes proper fractions
- Floor division: `//`
- Modulo: `%%`

Greek letters:

- Lowercase: `alpha beta gamma delta`
- Uppercase: `Gamma Delta Theta`

Mathematical symbols:

- Infinity: `infty` or `inf`
- Calculus: `partial nabla int sum prod`
- Set theory: `in notin subset subseteq`
- Logic: `and or not implies iff`
- Arrows: `-> => <- <= <=>`

Function syntax:

- Square root: `sqrt(x)`
- Nth root: `root(n,x)`
- Logarithms: `log(a,b)` `ln(x)`
- Trigonometry: `sin(x)` `cos(x)` `tan(x)`
- Absolute value: `abs(x)`
- Floor and ceiling: `floor(x)` `ceil(x)`
- Vector: `v(x)`
- Degrees: `case(x)`

Special functions:

- Maximum: `max(expr)` or `max(expr, limitation)`
- Minimum: `min(expr)` or `min(expr, limitation)`
- Summation: `sum(start, end, term)`

Brace syntax for sets and cases:

- Simple set: `{1,2,3}`
- Set builder: `{x | x>0}`
- Piecewise functions:

```
{
  x+1, x>=0 \\
  x-1, x<0
}
```

Interval notation:

- Closed: `[a,b]`
- Open: `(a,b)`
- Half-open: `[a,b)`

Operator precedence order:

1. Subscript `_`
2. Superscript `^`
3. Floor division `//` and modulo `%%`
4. Multiplication `*` and division `/`

Examples to follow:

- Quadratic equation: `ax^2 + bx + c = 0`
- Logarithm change: `log(a,b) = log(c,b) / log(c,a)`
- Mixed text and math: `forall x in [0, +inf), f(x) = f(1/(x+1))`
- Piecewise functions:

```
f(x) = {
  x^3/e^x, x>=0 \\
  ax^2, x<0
}
```

- Set notation: `{f(x) | x in [0,a]} = {f(x) | x in [0,+inf)}`

Remember to use spaces between tokens for proper parsing. Mix Chinese and English text freely with mathematical expressions. Use `\\` for line breaks in multi-line expressions.

# 3 (d)

revise.

- never write `\\`, which is only used inside compiler as a temp state or a middle step.
- give a few examples.

---

Learn the Precious mathematical language syntax. Use this when writing mathematical expressions.

Basic elements:

- Write numbers as digits: 123, 0.456
- Write variables as single letters: x, y, z
- Use quotes for text: "text here"
- CJK characters work directly: 中文 日本語

Operators:

- Arithmetic: + - \* /
- Powers and indices: ^ \_
- Comparisons: = != < > <= >=
- Arrows: -> <- <=> =>
- - becomes multiplication dot, / becomes fraction

Mathematical symbols:

- Greek: alpha beta gamma Gamma Delta Theta
- Infinity: infty or inf
- Calculus: partial nabla int sum prod
- Set theory: in notin subset subseteq
- Logic: and or not implies iff

Functions:

- Roots: sqrt(x) root(n,x)
- Logarithms: log(a,b) ln(x)
- Trigonometry: sin(x) cos(x) tan(x)
- Absolute value: abs(x)
- Floor/ceiling: floor(x) ceil(x)
- Vector: v(x)
- Maximum/minimum: max(expr) or max(expr, condition)

Sets and piecewise functions:

- Simple set: {1,2,3}
- Set builder: {x | x > 0}
- Piecewise functions use multiple lines inside braces

Intervals:

- [a,b] for closed intervals
- (a,b) for open intervals
- [a,b) for half-open intervals

Examples:

Quadratic equation: ax^2 + bx + c = 0

Logarithm identity: log(a,b) = log(c,b) / log(c,a)

Mixed text and math: forall x in [0, +inf), f(x) = f(1/(x+1))

Piecewise function:
f(x) = {
x^3/e^x, x >= 0
ax^2, x < 0
}

Set notation: {f(x) | x in [0,a]} = {f(x) | x in [0,+inf)}

Complex condition: forall a < c < b, c in M <=> exists open interval I such that c in I and forall x in I where x != c, f(x) < f(c)

Use spaces between tokens. Mix languages freely. The compiler handles proper formatting automatically.

# 3

revise.

- never write `\\`, which is only used inside compiler as a temp state or a middle step.
- provide knowledge about usage in markdown. inline code and block code with precious language tag.
- add examples.

---

Learn the Precious mathematical language syntax for generating mathematical content. Use this syntax when writing mathematical expressions in both inline and block contexts.

Basic elements:

- Write numbers as plain digits: `123`, `0.456`
- Write variables as single letters: `x`, `y`, `z`
- Use quotes for text literals: `"text here"`
- CJK characters work directly without special formatting
- Use spaces between tokens for proper parsing

Operators:

- Basic arithmetic: `+ - * /`
- Superscript and subscript: `^ _`
- Comparisons: `= != < > <= >=`
- Arrows: `-> <- <=> =>`
- Multiplication automatically becomes `\cdot`
- Division automatically becomes proper fractions
- Special operators: `//` for floor division, `%%` for modulo

Symbols and Greek letters:

- Greek: `alpha beta gamma Delta Theta`
- Infinity: `infty` or `inf`
- Calculus: `partial nabla int sum prod`
- Set theory: `in notin subset subseteq`
- Logic: `and or not implies iff`

Functions:

- Roots: `sqrt(x)`, `root(n,x)`
- Logarithms: `log(a,b)`, `ln(x)`
- Trigonometry: `sin(x)`, `cos(x)`, `tan(x)`
- Special: `abs(x)`, `floor(x)`, `ceil(x)`, `v(x)` for vectors, `case(x)` for degrees
- Optimization: `max(expr)`, `max(expr, limitation)`, `min(expr)`, `min(expr, limitation)`
- Summation: `sum(start, end, term)`

Sets and piecewise functions:

- Simple sets: `{1,2,3}`
- Set builder: `{x | x>0}`
- Piecewise functions use multiple lines within braces:

```
{
  x+1, x>=0
  x-1, x<0
}
```

Intervals:

- Closed: `[a,b]`
- Open: `(a,b)`
- Half-open: `[a,b)`

Markdown usage:

- For inline mathematics, use single backticks: `` `ax^2 + bx + c` ``
- For block mathematics, use code blocks with precious language tag:

```precious
f(x) = {
  x^2, x>=0
  -x^2, x<0
}
```

Examples:

Inline examples:

- Quadratic formula: `` `x = (-b +- sqrt(b^2 - 4ac))/(2a)` ``
- Logarithm identity: `` `log(a,b) = ln(b)/ln(a)` ``
- Mixed language: `` `forall epsilon > 0, exists delta > 0` ``

Block examples:

```precious
f(x) = {
  x^3/e^x, x>=0
  ax^2, x<0
}
求 a 使得 f(x) 在 x=0 处可导
```

```precious
S = sum(n=1, inf, 1/n^2)
lim(n->inf, (1 + 1/n)^n) = e
```

```precious
A = {x in R | x^2 < 2}
B = {y | y = 2x + 1, x in A}
```

Remember to use actual line breaks (not backslashes) for multi-line expressions in block code. Mix Chinese and English text freely with mathematical expressions. The compiler automatically handles proper formatting, fraction creation, and parenthesis balancing.
