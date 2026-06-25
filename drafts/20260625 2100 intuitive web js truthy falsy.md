js truesy falsy

In JavaScript, **every value is either truthy or falsy**, which determines how it behaves when evaluated inside a Boolean context like an `if` statement or loop. [link](https://www.zipy.ai/blog/truthy-and-falsy-values-in-javascript)

### The Complete List of Falsy Values

There are exactly **eight falsy values** in JavaScript. If a value is on this list, it evaluates to `false`: [link](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

- **`false`**: The boolean false keyword.
- **`0`**: The number zero.
- **`-0`**: Negative zero.
- **`0n`**: BigInt zero.
- **`""`**: Empty string (also `''` or \`\`\`\`\`).
- **`null`**: Absence of any value.
- **`undefined`**: Uninitialized variables.
- **`NaN`**: Not-a-Number. [link](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)

_(Note: The legacy browser object `document.all` is also treated as falsy, but it is rarely encountered in modern development)._ [link](https://www.trevorlasn.com/blog/javascript-truthy-and-falsy)

### What is Truthy?

**Everything else is truthy**. If a value is not explicitly on the falsy list, JavaScript coerces it to `true`. [link](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)

Common examples of truthy values that often surprise developers include: [link](https://medium.com/the-amateur-dev/truthy-and-falsy-javascripts-weird-idea-of-true-and-false-1d1c0410ad4c)

- **`[]`**: Empty arrays.
- **`{}`**: Empty objects.
- **`"0"`**: A string containing the character zero.
- **`"false"`**: A string containing the text "false".
- **`-42`**: Negative numbers. [link](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)

***

### Comparison Summary

| Value Type                | Examples (Truthy 🟩)        | Examples (Falsy 🟥)             |
| ------------------------- | --------------------------- | ------------------------------- |
| **Booleans**              | `true`                      | `false`                         |
| **Numbers**               | `1`, `-5`, `3.14`           | `0`, `-0`, `NaN`                |
| **Strings**               | `"hello"`, `"0"`, `" "`     | `""` (completely empty)         |
| **Objects / Collections** | `[]`, `{}`, `function() {}` | _None (All objects are truthy)_ |
| **Structural**            | _None_                      | `null`, `undefined`             |

***

### How to Check Truthiness

You can easily inspect whether a value is truthy or falsy using the explicit `Boolean()` function or the double-bang (`!!`) operator: [link](https://www.geeksforgeeks.org/javascript/explain-the-concept-of-truthy-falsy-values-in-javascript/)

javascript

```
Boolean("Hello"); // true
!!"Hello";        // true

Boolean(0);       // false
!!0;              // false
```

Use code with caution.

### Common Gotcha: Checking for Empty Elements

Because empty arrays `[]` and empty objects `{}` are truthy, checking them directly in an `if` statement will not tell you if they are empty. You must check their size or keys instead: [link](https://medium.com/the-amateur-dev/truthy-and-falsy-javascripts-weird-idea-of-true-and-false-1d1c0410ad4c)

javascript

```
// WRONG: This code block will run because [] is truthy
if ([]) {
  // Runs anyway!
}

// CORRECT way to check
if (myArray.length > 0) { /* ... */ }
if (Object.keys(myObject).length > 0) { /* ... */ }
```

Use code with caution.

If you are debugging a specific issue, let me know:

- What **variable value** is giving you unexpected results?
- Are you having trouble with an **`if` condition** or a **loose equality (`==`)** comparison?

I can show you exactly how JavaScript evaluates your specific code block.

- [link](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)\
  Understanding JavaScript Truthy and Falsy - Stack Overflow\
  Feb 26, 2016 — 9 Answers. Sorted by: 84. From my understanding, I believe that var a = 1; is the only truthy and the rest are falsy's - is this c...\
  Stack Overflow
- [link](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)\
  Falsy - Glossary - MDN Web Docs - Mozilla\
  Jul 11, 2025 — A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context. JavaScript use...\
  MDN Web Docs
- [link](https://sentry.io/answers/truthy-and-falsy-values-in-javascript/)\
  Truthy and falsy values in JavaScript - Sentry\
  Jan 30, 2023 — The solution. When non-boolean values are used in a boolean context, such as the condition of an if statement, they will be coerce...\
  Sentry

Show all