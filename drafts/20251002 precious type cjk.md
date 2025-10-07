modify this js fn.

write jsdoc with examples.

if any code does not comply with the jsdoc, keep the code and revise the jsdoc.

add feature: cjk character support

it returns "text" if any character in the test string is cjk

```js
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
  // added: a type for not being equal to anything
  const different = Symbol();
  if (typeof str != "string") {
    // edge case
    return different;
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
```

---

Here's the modified function with CJK character support and revised JSDoc:

```js
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
```

**Key changes:**

1. **Added CJK support** with regex that covers:

   - `\u4E00-\u9FFF`: Chinese Han characters
   - `\u3040-\u309F`: Japanese Hiragana
   - `\u30A0-\u30FF`: Japanese Katakana
   - `\uAC00-\uD7AF`: Korean Hangul

2. **Updated JSDoc** to reflect:

   - New "text" return type for CJK characters
   - The function can return a Symbol for non-strings and brackets
   - Added examples showing CJK character usage

3. **Preserved existing behavior** for all other cases while adding the new CJK detection feature that takes precedence over other type checks.

The function now returns "text" if **any character** in the string is a CJK character, regardless of what other characters might be present.
