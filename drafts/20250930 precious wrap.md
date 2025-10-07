revise this fn.

sometimes it returns the original string, sometimes it wrap it with `()`

make the operators list more comprehensive. (dont add relational operators, which wont appear as params of a math fn.)

use this logic:

- remove all content inside brackets (`()` `[]` `{}`)
- if operators still exists, wrap.

also write unit tests using console.log

usage:

`log(a,b)`: `\\log_{${a}}{${wrap(b)}}`

e.g.

`a+b` should be wrapped.

`a \times b` should be wrapped.

`(a - b)` need not. (it's already wrapped)

`\frac{a}{b}` need not.

`\sqrt{a}` need not.

`a` need not

```js
const wrap = (math) => {
  let flag = false;
  // todo: make it more comprehensive
  const operators = ["+", "-", "\\times", "\\cdot", "\\div"];
  operators.map((o) => {
    if (math.includes(o)) {
      flag = true;
    }
  });
  return flag ? `(${math})` : math;
};
```

---

Here's the revised function with improved logic and comprehensive operators:

```js
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

// Unit tests
console.log("=== Unit Tests for wrap() function ===");

// Test cases that should be wrapped (contain operators at top level)
console.log("Should be wrapped:");
console.log(`"a+b" -> "${wrap("a+b")}"`); // Has +
console.log(`"a-b" -> "${wrap("a-b")}"`); // Has -
console.log(`"a \\\\times b" -> "${wrap("a \\times b")}"`); // Has \times
console.log(`"a \\\\cdot b" -> "${wrap("a \\cdot b")}"`); // Has \cdot
console.log(`"x \\\\oplus y" -> "${wrap("x \\oplus y")}"`); // Has \oplus
console.log(`"a + b - c" -> "${wrap("a + b - c")}"`); // Multiple operators

// Test cases that should NOT be wrapped (already wrapped or no top-level operators)
console.log("\nShould NOT be wrapped:");
console.log(`"(a - b)" -> "${wrap("(a - b)")}"`); // Already wrapped
console.log(`"\\\\frac{a}{b}" -> "${wrap("\\frac{a}{b}")}"`); // Fraction
console.log(`"\\\\sqrt{a}" -> "${wrap("\\sqrt{a}")}"`); // Square root
console.log(`"a" -> "${wrap("a")}"`); // Single variable
console.log(`"[a \\\\times b]" -> "${wrap("[a \\times b]")}"`); // Already in brackets
console.log(`"{a + b}" -> "${wrap("{a + b}")}"`); // Already in braces
console.log(`"\\\\sin(x)" -> "${wrap("\\sin(x)")}"`); // Function with parameter

// Complex test cases
console.log("\nComplex cases:");
console.log(`"a + (b \\\\times c)" -> "${wrap("a + (b \\times c)")}"`); // Should wrap - operator outside
console.log(`"(a + b) \\\\cdot c" -> "${wrap("(a + b) \\cdot c")}"`); // Should wrap - operator outside
console.log(
  `"((a + b) \\\\times (c - d))" -> "${wrap("((a + b) \\times (c - d))")}"`
); // Already fully wrapped
console.log(`"\\\\frac{a + b}{c}" -> "${wrap("\\frac{a + b}{c}")}"`); // No wrap - fraction
console.log(
  `"a \\\\times (\\\\frac{b}{c})" -> "${wrap("a \\times (\\frac{b}{c})")}"`
); // Should wrap - operator outside

// Edge cases
console.log("\nEdge cases:");
console.log(`"empty" -> "${wrap("")}"`); // Empty string
console.log(`"()" -> "${wrap("()")}"`); // Only brackets
console.log(`"(a)" -> "${wrap("(a)")}"`); // Single variable in brackets
console.log(`"a\\\\cdot" -> "${wrap("a\\cdot")}"`); // Incomplete operator
```

**Key improvements:**

1. **Better bracket removal logic**: Uses a loop to recursively remove all nested brackets until no more brackets remain
2. **More comprehensive operators**: Added many LaTeX mathematical operators including set operators, various multiplication symbols, etc.
3. **Correct wrapping logic**: Only wraps when operators exist at the top level after removing all bracketed content
4. **Comprehensive unit tests**: Tests various scenarios including nested expressions, functions, and edge cases

The function now correctly handles cases like:

- `a+b` → wraps because `+` remains after bracket removal
- `(a-b)` → doesn't wrap because after removing `(a-b)`, no operators remain
- `\frac{a}{b}` → doesn't wrap because it's treated as a single unit
- Complex nested expressions are handled correctly by recursively removing all brackets
