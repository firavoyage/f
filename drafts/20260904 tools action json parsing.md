# compare json and js object syntax

<!-- ref: 20260719 web react state management usecontext zustand jotai custom hook routing (no idea why it was there) -->

## compare json and js object syntax

The core difference between them is that <mark><strong>JSON is a strict, text-based data serialization format</strong>, whereas a<span> </span><strong>JavaScript object is an active in-memory data structure</strong><span> </span>used in application logic</mark>.

### Quick Comparison Table

| Feature                   | JSON Syntax                        | JavaScript Object Syntax                                  |
| ------------------------- | ---------------------------------- | --------------------------------------------------------- |
| **Data Format**           | Text string only                   | Live memory structure                                     |
| **Keys / Property Names** | Must be double-quoted strings      | Unquoted, single/double quotes, or numbers                |
| **String Values**         | Must use double quotes (`" "`)     | Single (`' '`), double (`" "`), or backticks (\`\`\`\`\`) |
| **Trailing Commas**       | Strictly forbidden                 | Allowed and fully valid                                   |
| **Comments**              | Not allowed                        | Allowed (`//` or `/* */`)                                 |
| **Methods / Functions**   | Forbidden                          | Allowed                                                   |
| **Permitted Primitives**  | Strings, numbers, booleans, `null` | Any JS type (`undefined`, `Symbol`, `NaN`, etc.)          |

***

### Syntax Differences in Action

#### 1. Key and String Enclosure

In JSON, you cannot have unquoted keys. Both the keys and any string values must use standard double quotes. [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON)

- **Valid JSON:** `{"name": "Alice"}`
- **Valid JS Object:** `{name: 'Alice'}` or `{name: "Alice"}`

#### 2. Methods and Executable Logic

JavaScript objects can contain functions (methods) to compute properties or handle operations. JSON is strictly a static data format and cannot store executable code. [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON)

javascript

```
// Valid JavaScript Object
const user = {
  name: "Amit",
  greet: function() { return "Hello"; } // ❌ Forbidden in JSON
};
```

Use code with caution.

#### 3. Trailing Commas and Comments

If you leave a comma after the final item in JSON, parser tools will throw a syntax error. Standard JSON files also completely reject code comments. [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/JSON)

json

```
/* ❌ This comment breaks JSON */
{
  "id": 101,
  "status": "active", ❌ Trailing comma breaks JSON
}
```

Use code with caution.

### Native Conversion Methods

JavaScript provides a global [MDN JSON API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/JSON) to quickly swap between these formats: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/JSON)

- Use `JSON.stringify(object)` to serialize an active JavaScript object into a flat JSON data string.
- Use `JSON.parse(text)` to turn an incoming text-based JSON payload back into a functional JavaScript object. [link](https://www.w3schools.com/jS/js%5Fjson.asp)

If you are currently debugging data, tell me **how your object is stored** (e.g., in a `.json` file, a database, or directly inside script tags) or if you are running into a **specific parsing error** so I can help troubleshoot the syntax.

- [link](https://www.reddit.com/r/learnprogramming/comments/10jpt2i/im%5Fa%5Fbit%5Fconfused%5Fby%5Fjson/)\
  I'm a bit confused by JSON\
  Jan 23, 2023 — JSON stands for JavaScript Object Notation. It's a standard that defines how data transfer format looks like as text. JSON is simi...\
  Reddit
- [link](https://stackoverflow.com/questions/2904131/what-is-the-difference-between-json-and-object-literal-notation)\
  What is the difference between JSON and Object Literal ...\
  May 25, 2010 — Main differences: \* All object keys in JSON must be strings. In Javascript object keys can be strings or numbers. \* All strings in...\
  Stack Overflow
- [link](https://medium.com/geekculture/json-object-v-javascript-object-f00ae788cc1f)\
  JSON Object v. JavaScript Object\
  Apr 4, 2021 — A JSON object is a string that contains a key/value pair. JSON stands for JavaScript Object Notation. JSON syntax is derived from ...\
  Medium

Show all

## how to let json parse work flexibly as if js object

To make a JSON string parse flexibly without throwing strict syntax errors, you cannot use the native, rigid `JSON.parse()`. Instead, you must use alternative evaluation tools or specialized third-party parsing libraries.

Here are the best ways to safely and flexibly parse non-strict JSON data.

### 1. Use the `json5` Library (Recommended for Production)

The [JSON5 library](https://json5.org/) is explicitly designed to expand JSON syntax to match the flexibility of ECMAScript 5. It seamlessly handles unquoted keys, single quotes, trailing commas, and comments.

- **Installation:** `npm install json5`

javascript

```
const JSON5 = require('json5');

const flexibleString = `{
  // Comments are totally fine
  name: 'Alice',
  age: 30, // Trailing commas are fine too
}`;

const obj = JSON5.parse(flexibleString);
console.log(obj.name); // Output: Alice
```

Use code with caution.

### 2. Use `dirty-json` (Best for Broken/Malformed Text)

If you are scraping text or dealing with poorly formatted API outputs that miss brackets or quotes entirely, [dirty-json](https://www.npmjs.com/package/dirty-json) acts as a highly forgiving parser.

- **Installation:** `npm install dirty-json`

javascript

```
const dJSON = require('dirty-json');

// Missing quotes on keys and values, mixed styles
const badlyMalformed = "{name: Al, age: 25}";

const obj = dJSON.parse(badlyMalformed);
console.log(obj.name); // Output: Al
```

Use code with caution.

### 3. Use `Function()` Constructor (No-Dependency Alternative)

If you cannot install third-party NPM packages, you can execute the string as code by wrapping it in a self-executing function block.

- **Warning:** Only use this method if you **100% trust the data source**. Because it executes the string as live JavaScript code, it presents extreme security risks (XSS/Code Injection) if exposed to untrusted user input.

javascript

```
const flexibleString = "{name: 'Bob', age: 22,}"; // Valid JS object literal syntax

// Wrap the string to return an evaluated object expression safely
const obj = new Function(`return ${flexibleString}`)();

console.log(obj.name); // Output: Bob
```

Use code with caution.

### Comparison of Solutions

| Method           | Handles Single Quotes & Comments | No Package Dependencies | Security Level                   |
| ---------------- | -------------------------------- | ----------------------- | -------------------------------- |
| **`JSON5`**      | Yes                              | No (`npm install`)      | **High** (Safe parser)           |
| **`dirty-json`** | Yes (plus broken syntax)         | No (`npm install`)      | **High** (Safe parser)           |
| **`Function()`** | Yes                              | Yes (Native JS)         | 🚨 **Dangerous** (Executes code) |

If you are dealing with a specific breaking edge case, paste a **sample snippet of your flexible string data** or tell me if you are building in a **Node.js environment or a browser client** so I can recommend the exact setup you need.

- [link](https://www.test-king.com/blog/parsing-json-in-javascript-a-step-by-step-guide/)\
  Parsing JSON in JavaScript: A Step-by-Step Guide\
  Importance of Proper Syntax JSON syntax is strict. Every key must be enclosed in double quotes. String values must also use double...\
  \
  Test-king.com
- [link](https://javascript.info/json)\
  JSON methods, toJSON\
  Jan 24, 2024 — There's another format named JSON5, which allows unquoted keys, comments etc. But this is a standalone library, not in the specifi...\
  \
  \
  The Modern JavaScript Tutorial
- [link](https://www.analyticsvidhya.com/blog/2024/02/ways-to-convert-string-to-json-object/)\
  Ways to Convert String to JSON Object\
  Mar 21, 2024 — Using the eval() Function The eval() function in Python can also be utilized to convert a string to a JSON object. It evaluates th...\
  \
  \
  Analytics Vidhya

Show all

## what non standard syntax can json5 or dirty json handle what can not

While both libraries are designed to break the strict rules of native JSON, they serve entirely different purposes. **[JSON5](https://json5.org/) extends the JSON spec to support a clean, predictable subset of ES5 JavaScript** (perfect for human-written config files). Meanwhile, <mark><strong><span><a rel="noopener" href="https://www.npmjs.com/package/dirty-json">dirty-json</a></span><span> </span>is a specialized error-recovery tool</strong><span> </span>designed to guess the meaning of broken, malformed, or scraped data</mark>. [link](https://spec.json5.org/)

The exact capabilities and strict limits of what both libraries can and cannot handle include:

***

### What JSON5 Can Handle (The ES5 Standard)

JSON5 permits specific features defined in the ECMAScript 5.1 specification: [link](https://spec.json5.org/)

- **Comments:** Both single-line (`//`) and multi-line (`/* ... */`) code comments.
- **Unquoted Keys:** Object keys that are valid ECMAScript identifiers (e.g., `name: "Alice"` instead of `"name": "Alice"`).
- **Single Quotes:** Wrapping strings or keys in single quotes (`'Alice'`).
- **Trailing Commas:** Dangling commas at the end of objects and arrays.
- **Advanced Numbers:** Hexadecimal literals (`0xFF`), explicit plus signs (`+42`), leading/trailing decimal points (`.5` and `42.`), and global numeric concepts like `Infinity`, `-Infinity`, and `NaN`.
- **Multi-line Strings:** Escaping a newline inside a string using a trailing backslash (`\`). [link](https://json5.org/)

### What JSON5 CANNOT Handle

Because JSON5 is built to be a predictable, valid language specification, it **will throw a syntax error** on anything that breaks ES5 formatting: [link](https://spec.json5.org/)

- 🚨 **Unescaped Nested Quotes:** Passing `"He said "Hello""` will fail. Internal quotes must still be cleanly escaped (`\"`).
- 🚨 **Actual Multi-line Strings:** Literal line breaks without an escaping backslash will crash the parser.
- 🚨 **Functions / Methods:** It does not allow executable code logic (`greet() { ... }`).
- 🚨 **Missing Brackets or Commas:** If you miss an intermediate comma between two distinct properties or forget a closing `}`, it immediately errors out.
- 🚨 **Non-Identifier Unquoted Keys:** Keys containing spaces or hyphens must still be explicitly quoted (e.g., `user-id: 1` fails, but `"user-id": 1` passes).

***

### What `dirty-json` Can Handle (The Forgiving Scraper)

The dirty-json parser uses a custom lexer and a hand-written LR(1) parser designed specifically to ingest entirely broken text strings: [link](https://github.com/ryanmarcus/dirty-json)

- 🔥 **Unescaped Nested Quotes:** It successfully parses strings like `{"html": "<div class="box">Text</div>"}` by recognizing the context of the outer wrappers.
- 🔥 **Literal Newlines in Strings:** It parses text that wraps physically across lines without needing escape slashes (`\n`).
- 🔥 **Completely Unquoted Values:** It handles text entirely stripped of value quotes, such as `{name: Alice, role: Admin}`.
- 🔥 **Duplicate Keys:** Rather than blindly overwriting the value, it lets you configure alternative behaviors for duplicate properties. [link](https://rmarcus.info/blog/2014/10/05/dirty-json-parser.html)

### What `dirty-json` CANNOT Handle

Despite its resilience, `dirty-json` has strict structural boundaries:

- 🚨 **Unbalanced Arrays or Structural Chaos:** If your raw text has nesting syntax errors—like three opening braces but only one closing brace (`{{{`)—the parser engine will fail to map the structural tree.
- 🚨 **Functions / Methods:** Just like JSON5, it is strictly data-focused and cannot execute or evaluate functional code strings.
- 🚨 **Speed/Performance Requirements:** It is heavily advised not to use dirty-json in production systems that require rapid or predictable results, as its algorithmic guessing logic makes it slow and computationally heavy. [link](https://www.npmjs.com/package/dirty-json)

***

### Summary Matrix

| Breakage Scenario                       | Native `JSON.parse()` | `JSON5`  | `dirty-json` |
| --------------------------------------- | --------------------- | -------- | ------------ |
| Single quotes / Trailing commas         | ❌ Error              | Valid    | Valid        |
| Unquoted keys (`{age: 30}`)             | ❌ Error              | Valid    | Valid        |
| Hex, `NaN`, or `Infinity` numbers       | ❌ Error              | Valid    | Valid        |
| Code comments (`// comment`)            | ❌ Error              | Valid    | Valid        |
| Unescaped internal quotes (`"a "b" c"`) | ❌ Error              | ❌ Error | Valid        |
| Raw unescaped string newlines           | ❌ Error              | ❌ Error | Valid        |
| Missing structure (`{user: "Joe"`)      | ❌ Error              | ❌ Error | ❌ Error     |

If you are trying to automate the cleanup of incoming logs, let me know **where the bad data originates** (e.g., a web scraper, system logs, or a legacy API) so we can figure out the safest parser configuration for your pipeline.

- [link](https://json5.org/)\
  JSON5 – JSON for Humans\
  Other features of JSON5 include: \* Numbers can be hexadecimal. \* Numbers can have a leading or trailing decimal point. \* Numbers c...\
  JSON5
- [link](https://news.ycombinator.com/item?id=4031699)\
  Show HN: JSON5 — modern JSON | Hacker News\
  May 28, 2012 — enneff on May 28, 2012 | root | parent | prev | next \[–]. It's not JSON, so why does it need to look like JSON? If you want a comp...\
  Hacker News
- [link](https://medium.com/@prule70/using-json5-053787906c2b)\
  Using JSON5. The thing about Json is that it’s hard… | by PRULE70 | Medium\
  Mar 6, 2025 — Here's an example of adding comments to the file: \* \*\*sample.json5\*\* \* // Main title of the document \* title: 'json5 example', // ...\
  Medium

Show all


# npm libs for json parsing

## npm libs for json parsing

When standard `JSON.parse()` isn't enough, the npm ecosystem offers several excellent libraries tailored to specific use cases like **streaming large files**, **handling comments**, **improving error messages**, or **repairing broken JSON**.

Here is a breakdown of the best npm libraries for JSON parsing based on your specific requirements:

### 1. For Streaming Huge JSON Files

If your JSON data is too large to fit into memory, standard parsing will crash your application. These streaming utilities process data piece-by-piece.

- **[stream-json](https://www.npmjs.com/package/stream-json)**: A micro-library designed for parsing massive JSON streams with a minimal memory footprint. It includes a pipeline system to tokenise, filter, and assemble JavaScript objects on the fly. [link](https://www.npmjs.com/package/stream-json)
- **[@streamparser/json](https://www.npmjs.com/package/@streamparser/json)**: A fast, pure JavaScript stream parser. It offers ecosystem adapters like **[@streamparser/json-node](https://www.npmjs.com/package/%40streamparser/json-node)** for Node streams and **[@streamparser/json-whatwg](https://www.npmjs.com/package/@streamparser/json-whatwg)** for browser-compatible web streams. [link](https://www.npmjs.com/package/%40streamparser/json-node)

### 2. For Better Error Debugging

Native `JSON.parse()` gives cryptic error messages (e.g., _"Unexpected token... in JSON at position 42"_). These libraries make debugging malformed JSON much easier.

- **[parse-json](https://www.npmjs.com/package/parse-json)**: Provides helpful, human-friendly error messages that pinpoint the exact line and column where the syntax error occurred.
- **[json-parse-even-better-errors](https://npmjs.com/package/json-parse-even-better-errors)**: Delivers clear context around parsing errors. An extra perk is that it automatically preserves the original newline and indentation styles of your JSON. [link](https://www.npmjs.com/package/parse-json)

### 3. For Fixing Broken JSON (AI Outputs)

If you are dealing with messy strings or LLM-generated outputs that frequently miss closing brackets or trailing commas, use an automatic repair library.

- **[jsonrepair](https://www.npmjs.com/package/jsonrepair)**: A highly reliable library that takes a broken JSON string (like `[1, 2, 3,`) and fixes it into valid JSON format.
- **[jaison](https://www.npmjs.com/package/jaison)**: Specifically designed for handling malformed strings. It features intelligent error correction and can strip out problematic markdown wrappers (like \`\`\`\`\`\`\`json\`\`\`\` blocks) automatically. [link](https://www.npmjs.com/package/jsonrepair)

### 4. For Special Formats (Comments & Non-Standard Types)

- **[jsonc-parser](https://www.npmjs.com/package/jsonc-parser)**: Developed by Microsoft to power VS Code, this scanner can parse **JSONC** (JSON with Comments). It acts as a fault-tolerant parser capable of generating a hierarchical DOM tree out of your files. [link](https://www.npmjs.com/package/jsonc-parser)
- **[lossless-json](https://www.npmjs.com/package/lossless-json)**: Ideal if you need to handle `BigInt` or extremely high-precision decimals without losing information due to JavaScript's floating-point limitations. [link](https://www.npmjs.com/package/lossless-json)

***

### Quick Comparison

| Library            | Primary Use Case    | Key Benefit                                     |
| ------------------ | ------------------- | ----------------------------------------------- |
| **`stream-json`**  | Large datasets      | Minimal memory footprint                        |
| **`parse-json`**   | Debugging           | Outputs exact lines & columns for syntax errors |
| **`jsonrepair`**   | Cleaning bad data   | Fixes missing brackets and trailing commas      |
| **`jsonc-parser`** | Configuration files | Safely parses JSON with comments                |

Could you tell me a bit more about **what kind of JSON data** you are working with (e.g., configuration files, huge database exports, or AI text outputs) so I can **recommend the perfect fit?**

- [link](https://www.npmjs.com/package/parse-json)\
  NPM\
  parse-json - NPM\
  Apr 9, 2025 — npm install parse-json Usage import parseJson, {JSONError} from 'parse-json'; const json = '{\n\t"foo": true,\n}'; JSON. parse(jso...
- [link](https://www.npmjs.com/package/stream-json)\
  NPM\
  stream-json - NPM\
  Jul 7, 2026 — stream-json is a micro-library of components for processing JSON files and streams, with a minimal memory footprint. Point it at a...
- [link](https://www.npmjs.com/package/lossless-json)\
  NPM\
  lossless-json - NPM\
  Jul 31, 2026 — You can adjust the logic to your liking, using utility functions like isInteger , isNumber , isSafeNumber . The number parser show...

Show all

## compare dirty-json

The npm library **[dirty-json](https://www.npmjs.com/package/dirty-json)** is a classic, hand-written LR(1) parser specifically designed to handle and salvage non-conforming or unescaped JSON. [link](https://www.npmjs.com/package/dirty-json)

However, depending on your project needs, it is highly useful to compare **`dirty-json`** against its main modern alternative, **`jsonrepair`**. [link](https://www.npmjs.com/package/jsonrepair)

***

### Comparison: `dirty-json` vs. `jsonrepair`

| Feature / Aspect              | **dirty-json**                                                                                      | **jsonrepair**                                                                                    |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Output Type**               | **JavaScript Object** (Directly parses and outputs memory objects)                                  | **Valid JSON String** (Fixes the text, requiring a subsequent `JSON.parse()`)                     |
| **Handling Unescaped Quotes** | **Excellent.** Intelligently fixes internal quotes like `{"user": "<div class="user">Ryan</div>"}`. | **Moderate.** Can struggle if unescaped quotes break the structural boundary of the string.       |
| **Incomplete/Truncated Data** | **Poor.** Tends to fail or throw errors if the file abruptly ends.                                  | **Excellent.** Automatically injects missing closing brackets `}` or `]` to close truncated text. |
| **Maintenance & Ecosystem**   | **Legacy.** Has not seen major updates in years, but remains stable for its specific use cases.     | **Active & Modern.** Actively maintained with native streaming support (`jsonrepairTransform`).   |
| **Bundle Size / Speed**       | Lightweight and very fast for individual dirty strings.                                             | Fast, heavily tested, and optimized for both CLI and stream parsing pipelines.                    |

***

### Comprehensive Feature Breakdown

#### 1. What `dirty-json` Does Exceptionally Well

- **Unescaped Quotes inside Strings:** This is its superpower. If your data contains unescaped HTML or inner quotes (e.g., `{ "key": "He said "Hello" to me" }`), `dirty-json` handles this better than almost any other library.
- **Javascript-like Literals:** It easily parses unquoted keys (`{ name: 'John' }`) and single-quoted strings.
- **Malformed Decimals:** It cleans up non-standard numbers like `.5` into standard `0.5`. [link](https://www.npmjs.com/package/dirty-json)

#### 2. Where `jsonrepair` Wins

- **LLM / AI Text Outputs:** AI models frequently cut off due to token limits or output surrounding Markdown wrappers (like \`\`\`\`\`\`\`json\`\`\`\`). `jsonrepair` is vastly superior at stripping these wrappers and mathematically closing truncated elements. [link](https://ai-sdk.dev/resources/recipes/node/repair-json-with-jsonrepair)
- **Streaming Support:** If you have massive files, `jsonrepair` offers an integrated streaming API, whereas `dirty-json` requires the entire string to be loaded directly into memory. [link](https://www.npmjs.com/package/jsonrepair)

***

### Summary Recommendation

- **Choose dirty-json if:** You are parsing messy, legacy database dumps or web-scraped data containing unescaped HTML/nested quotation marks inside text values. [link](https://www.npmjs.com/package/dirty-json)
- **Choose [jsonrepair](https://www.npmjs.com/package/jsonrepair) if:** You are working with **AI/LLM generated content** that cuts off unexpectedly, or you need an actively maintained library capable of handling streams. [link](https://www.npmjs.com/package/jsonrepair)

Would you like a quick **code example** showing how to implement either library to handle your data, or are you trying to resolve a **specific error pattern**?

- [link](https://aijsonmedic.com/blog/llmjsonfixer-alternative)\
  aijsonmedic.com\
  LLMJsonFixer Alternative: 5 Better AI JSON Repair Tools in ...\
  Aug 1, 2026 — Yes, LLMJsonFixer.com appears to be free as of August 2026. AI JSONMedic is also fully free — repair, validate, format, minify, JS...
- [link](https://medium.com/@gtdevice/architecting-resilient-llm-interactions-a-definitive-guide-to-robust-json-handling-in-java-0caa6947ea73)\
  Medium·Oleg Konstantinov\
  A Definitive Guide to Robust JSON Handling in Java - Medium\
  Sep 14, 2025 — For the Java ecosystem, there are not many solutions: the io.github.haibiiin:json-repair library is the only choice, providing fun...
- [link](https://aijsonmedic.com/blog/jsonic-alternative)\
  aijsonmedic.com\
  Jsonic Alternative: 5 JSON Tools with AI-Powered Repair (2026)\
  Aug 23, 2026 — 1. AI JSONMedic — Best for LLM Output and API Repair. AI JSONMedic is built specifically for the JSON failures that LLMs and APIs ...

Show all

## how to use dirty-json in esm

Because **[dirty-json](https://www.npmjs.com/package/dirty-json)** was published as a legacy CommonJS module, it does not have a native `export default` for ES Modules (ESM). [link](https://www.npmjs.com/package/dirty-json)

To use it in an ESM environment (e.g., using `"type": "module"` in your `package.json`), you have two main approaches: [link](https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/)

### Option 1: Standard ESM Import (Recommended)

Node.js automatically wraps CommonJS packages so you can import them via default imports. You can import the entire module and use its `.parse()` method like this: [link](https://www.npmjs.com/package/dirty-json)

javascript

```
// index.js
import dJSON from 'dirty-json';

const malformedString = "{ test: 'this is a test', unescaped: \"He said \"Hello\"\" }";

try {
  const result = dJSON.parse(malformedString);
  console.log(result);
  // Output: { test: 'this is a test', unescaped: 'He said "Hello"' }
} catch (error) {
  console.error("Parsing failed:", error);
}
```

Use code with caution.

### Option 2: Using Node's `createRequire`

If your tooling, bundler, or specific Node environment throws a `Named export not found` error, you can use Node's native `module` utility to explicitly create a `require` function inside your ESM file. [link](https://dev.to/stefanjudis/how-to-import-json-files-in-es-modules-node-js-3b24)

javascript

```
// index.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const dJSON = require('dirty-json');

const result = dJSON.parse("{ key: 'value' }");
console.log(result);
```

Use code with caution.

***

Are you using a **bundler like Webpack or Vite**, or writing a raw **Node.js script**? Let me know if you run into any build errors so I can help you troubleshoot!

- [link](https://www.npmjs.com/package/dirty-json)\
  NPM\
  dirty-json - NPM\
  Aug 28, 2020 — npm install dirty-json A JSON parser that tries to handle non-conforming or otherwise invalid JSON. You can play around with a dem...
- [link](https://medium.com/codetodeploy/the-module-system-es-modules-vs-commonjs-c903a3cee6a7)\
  Medium·Budhdev kaushik\
  The Module System: ES Modules vs CommonJS - Medium\
  Jul 15, 2026 — Key Takeaways \* CommonJS uses require() / module. exports , loads synchronously, and has been the Node. js default since 2009. \* E...
- [link](https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/)\
  LogRocket Blog\
  How to transpile ES modules with webpack and Node.js\
  Dec 15, 2021 — The setup above makes all files that are at the same level of the folder structure as the package. json file default to ESM. Alter...

Show all

# npm libs for flexible json parsing

The right **npm library for flexible JSON parsing** depends heavily on what kind of "flexibility" you need. If you are dealing with **malformed LLM outputs, relaxed syntax, streaming huge files, or large integers**, specialized parsers exist to handle those cases safely.

Here is a breakdown of the best tools categorized by your specific use case.

***

### 1. For Malformed Text & LLM Outputs (Auto-Recovery)

If you are parsing responses from AI models that contain markdown fences, unquoted keys, trailing commas, or missing brackets:

- [ai-json-safe-parse](https://www.npmjs.com/package/jsonapi-parse): Purpose-built for LLM outputs. It automatically strips markdown code blocks, fixes trailing commas, handles unquoted keys, and attempts bracket matching. [link](https://www.reddit.com/r/node/comments/1s0njjq/small%5Fnpm%5Fpackage%5Ffor%5Fsafely%5Fparsing%5Fmalformed/)
- [jaison](https://www.npmjs.com/package/jaison): Highly intelligent error recovery. It auto-completes missing brackets (`}` or `]`), strips trailing content, and supports non-standard number formats like hex and binary. [link](https://www.npmjs.com/package/jaison)
- [free-text-json-parser](https://www.npmjs.com/package/free-text-json-parser): Ideal if your JSON is buried inside normal conversational text. It uses a lexer to scan text and cleanly pull out embedded arrays or objects.

### 2. For Relaxed Syntax (Comments, Single Quotes, No Brackets)

If you want to allow a loose configuration format where developers or users don't have to follow strict JSON specifications:

- [jsonic](https://www.npmjs.com/package/jsonic): A highly extensible, "relaxed" parser. It handles missing quotes, single quotes, unquoted keys, and inline comments seamlessly (e.g., parsing `a:1, b:2` directly into an object). [link](https://www.npmjs.com/package/jsonic)
- **Destructive alternative (built-in)**: Keep in mind that `JSON5` or `HJSON` are also popular choices for human-written config files that allow comments and trailing commas.

### 3. For Massive Datasets (Streaming & Asynchronous)

Standard `JSON.parse` blocks the event loop. If you are parsing multi-gigabyte files or handling high-concurrency apps, you need a stream or asynchronous parser: [link](https://www.npmjs.com/package/yieldable-json)

- [stream-json](https://www.npmjs.com/package/stream-json): A micro-library designed to stream massive documents straight through a pipeline with a minimal memory footprint, using a SAX-inspired event API.
- [@streamparser/json](https://www.npmjs.com/package/@streamparser/json): A powerful, modern chunk-by-chunk tokenization parser built for streaming JSON objects.
- [yieldable-json](https://www.npmjs.com/package/yieldable-json): An asynchronous drop-in version of `JSON.parse`. It yields control back to the Node.js event loop during heavy lifting so your app stays responsive. [link](https://www.npmjs.com/package/stream-json)

### 4. For High-Precision Numbers (BigInt Support)

JavaScript converts extremely large numbers to `Infinity` or loses precision because of standard floating-point limits.

- [lossless-json](https://www.npmjs.com/package/lossless-json): Parses numbers into a special loss-free format or custom types so you don't lose numeric precision.
- _Note on modern vanilla JS:_ If you are using modern Node.js, you can now natively use the `reviver` callback context argument (`context.source`) inside the standard `JSON.parse()` to safely convert huge numbers to `BigInt` without an external library. [link](https://www.npmjs.com/package/lossless-json)

### 5. For Better Debugging & Error Handling

- [json-parse-even-better-errors](https://npmjs.com/package/json-parse-even-better-errors): Provides context, exact positions, and snippet previews for syntax errors, while preserving newline and indentation styles.
- [parse-json](https://www.npmjs.com/package/parse-json): Generates highly readable and helpful error messages rather than the cryptic standard V8 engine syntax errors. [link](https://www.npmjs.com/package/parse-json)

***

To help point you to the perfect package, tell me a bit more about your project:

- **Where is the JSON coming from?** (e.g., an LLM API, a giant `.json` file, user-written configuration?)

- **What kind of errors or non-standard formats** are you trying to bypass?

- [link](https://www.reddit.com/r/node/comments/1s0njjq/small%5Fnpm%5Fpackage%5Ffor%5Fsafely%5Fparsing%5Fmalformed/)\
  Reddit\
  Small npm package for safely parsing malformed JSON from ...\
  Mar 23, 2026 — Small npm package for safely parsing malformed JSON from LLM model output : r/node Skip to main content Small npm package for safe...

- [link](https://www.npmjs.com/package/yieldable-json)\
  NPM\
  yieldable-json - NPM\
  Oct 18, 2024 — This library provides asynchronous version of standard JSON.parse and JSON.stringify APIs. Use Case. Node.js based web application...

- [link](https://www.npmjs.com/package/stream-json)\
  NPM\
  stream-json - NPM\
  Jul 7, 2026 — stream-json is a micro-library of components for processing JSON files and streams, with a minimal memory footprint. Point it at a...

Show all

# compare npm libs for relaxed/forgiving json parsing

## compare npm libs for relaxed/forgiving json parsing

When parsing invalid, malformed, or human-authored JSON strings, a variety of popular **npm libraries** fill the gap left by the strict `JSON.parse()`. They fall into two main categories: **Leniency Engines** (for parsing human-friendly configurations) and **Repair Engines** (for fixing broken data streams, such as LLM outputs).

### Core Comparison of Top Contenders

| Library                                                                        | Primary Use Case                | Key Features                                                                                        | Best Suited For                                          |
| ------------------------------------------------------------------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [**`json5`**](https://github.com/json5/json5)                                  | Human-authored configurations   | Comments, trailing commas, unquoted keys, single quotes.                                            | **Project configurations** (e.g., Babel, Next.js).       |
| [**`jsonrepair`**](https://github.com/josdejong/jsonrepair)                    | Fixing broken or truncated data | Replaces Python constants, strips MongoDB types, fixes missing punctuation, extracts from Markdown. | **LLM responses** and corrupted data structures.         |
| [**`jsonic`**](https://www.npmjs.com/package/jsonic)                           | Hyper-relaxed, fast parsing     | Omits outer brackets, optional commas, completely bare string support.                              | **CLI parameters** or very minimalist shorthand inputs.  |
| [**`really-relaxed-json`**](https://www.npmjs.com/package/really-relaxed-json) | High-tolerance JSON conversions | Backtick string pairs, multi-line blocks, custom value-model manipulation.                          | **Pre-processing pipelines** to force valid JSON output. |

***

### Detailed Breakdown

#### 1. [JSON5](https://json5.org/) — The Configuration Standard

Designed to align JSON directly with ES5 syntax rules. Rather than "guessing" what broken code means, it natively supports a standardized, expanded version of the JSON spec. [link](https://www.npmjs.com/package/fixjson)

- **What it tolerates:** Single-line and multi-line comments, unquoted object keys, single-quoted strings, trailing commas, and hexadecimal numbers.
- **Pros:** Highly trusted; backed by massive projects like Chromium and Next.js.
- **Cons:** It won't fix truncated or actual broken tokens (e.g., an unclosed bracket will still throw a crash). [link](https://github.com/json5/json5)

#### 2. jsonrepair — The AI & LLM Savior

If you are streaming text from a generative AI model that arbitrarily cuts off or forgets syntax validation rules, `jsonrepair` is the current industry workhorse. [link](https://www.npmjs.com/package/json-repair-js)

- **What it tolerates:** Strips partial trailing items, inserts missing quotes around text blocks, converts non-JSON constants (like Python's `True`, `False`, `None`), and wraps truncated objects safely.
- **Pros:** Exceptionally aggressive at returning _something_ valid instead of throwing errors.
- **Cons:** Runs slightly heavier because it parses and rebuilds the string layout rather than just executing native mappings. [link](https://github.com/josdejong/jsonrepair)

#### 3. jsonic — Short-Hand & Shorthand Scripts

`jsonic` assumes you already know what you meant. It treats syntax rules as purely optional formatting guides. [link](https://www.npmjs.com/package/jsonic)

- **What it tolerates:** Missing opening/closing object brackets (`foo: bar` parses directly into `{"foo": "bar"}`), string arrays without wrapper quotes, and implied comma placement.
- **Pros:** Extremely extensible and heavily tailored toward minimalist environments.
- **Cons:** Too forgiving for data validation layers; structural errors might silently map into unexpected shapes. [link](https://www.npmjs.com/package/jsonic)

#### 4. really-relaxed-json — Heavy Utility Converter

This library uses Relaxed JavaScript Object Notation (RJSON) parsing logic to cleanly step data down to vanilla layouts. [link](https://www.npmjs.com/package/really-relaxed-json)

- **What it tolerates:** JavaScript backtick strings, omitted key quotes, and complex unquoted values.
- **Pros:** Provides helper tools like `toJson()` and `toJs()` specifically designed to intercept messy formats and pipeline clean strings straight to native `JSON.parse` engines. [link](https://www.relaxedjson.org/)

***

To recommend the ideal library for your project, tell me a bit more about your objective:

- What is the **source of the malformed data**? (e.g., user-written configuration, LLM/AI output, old API payloads)

- Do you need to **preserve comments and formatting**, or do you just need a clean JavaScript object returned?

- How critical is **parsing speed and bundle size** for this feature?

- [link](https://www.npmjs.com/package/really-relaxed-json)\
  NPM\
  really-relaxed-json - NPM\
  Nov 18, 2022 — Use this library as: A pre-processor for ease-of-authoring An input/output protocol Converting to and from JSON, RJSON, and Javasc...

- [link](https://github.com/json5/json5)\
  GitHub\
  JSON5 — JSON for Humans - GitHub\
  JSON5 was started in 2012, and as of 2022, now gets >65M downloads/week, ranks in the top 0.1% of the most depended-upon packages ...

- [link](https://github.com/josdejong/jsonrepair)\
  GitHub\
  josdejong/jsonrepair: Repair invalid JSON documents · GitHub\
  Jsonrepair is a library that can repair invalid JSON documents. It can fix issues such as: \* Special white space characters replac...

Show all

## compare json5 and really-relaxed-json

While both **`json5`** and **`really-relaxed-json`** (RJSON) are built to parse JSON strings that depart from strict JSON standards, they serve different philosophies.

The core difference is that **`json5` adheres to a strict, predictable spec (ECMAScript 5 syntax)**, whereas **`really-relaxed-json` is an aggressive, "anything goes" parsing utility** designed to coerce highly malformed or shorthand text into a valid JavaScript object.

### Quick Feature Comparison

| Feature / Capability                         | `json5`                           | `really-relaxed-json`             |
| -------------------------------------------- | --------------------------------- | --------------------------------- |
| **Primary Philosophy**                       | Standardized JSON extension (ES5) | High-tolerance, lenient parsing   |
| **Unquoted Keys**                            | Yes                               | Yes                               |
| **Single Quotes (`'`)**                      | Yes                               | Yes                               |
| **Template Literals (Backticks \`\`\`\`\`)** | No                                | **Yes**                           |
| **Comments Allowed**                         | Yes (Single & Multi-line)         | **No** (Stripped or cause errors) |
| **Trailing Commas**                          | Yes                               | Yes                               |
| **Implicit Commas (Omitted)**                | No                                | **Yes**                           |
| **Implicit Braces (Omitted `{}`)**           | No                                | **Yes**                           |
| **Strict Specification**                     | **Yes** (Formal JSON5 spec)       | No (Heuristic-driven)             |

***

### Key Differences in Action

#### 1. Handling Missing Structure

`really-relaxed-json` is highly forgiving with missing punctuation, whereas `json5` will fail if the structure isn't valid ES5.

- **Input string:** `foo: "bar" baz: "qux"` (No brackets, no middle comma)
- **`json5` result:** ❌ **SyntaxError**. It requires outer braces `{}` and separating commas.
- **`really-relaxed-json` result:** **`{"foo": "bar", "baz": "qux"}`**. It automatically infers the structural boundaries.

#### 2. Comments vs. Advanced Strings

- **`json5`** allows you to document your data. It perfectly parses code comments (`// comment` or `/* comment */`). However, it only supports single and double quotes for strings.
- **`really-relaxed-json`** does **not** support comments. However, it supports JavaScript backticks (\`\`\`\`\`), making it excellent for parsing multi-line text blocks pasted into an object field.

#### 3. String Conversion Utilities

- **`json5`** acts like a drop-in replacement for the native JSON global, providing `JSON5.parse()` and `JSON5.stringify()`.
- **`really-relaxed-json`** acts as a compiler tool. It provides a `.toJson()` method which accepts messy text and returns a _strictly valid JSON string_, allowing you to pass it directly to native `JSON.parse()`.

***

### Which one should you choose?

- **Choose `json5` if:** You are building configuration files, settings panels, or data files meant to be **written by human developers**. It provides a clear, documented standard that ensures developers get helpful errors if they make a genuine typo, while still enjoying comments and unquoted keys.
- **Choose `really-relaxed-json` if:** You are dealing with **unpredictable, machine-generated, or highly shorthand user inputs** (like CLI arguments, web forms, or raw data pipelines) where getting a valid JavaScript object out of the mess is more important than enforcing a specific syntax standard.

If you'd like to test a specific edge case, tell me **what your raw input looks like**, and I can show you exactly how each library will parse it!

## compare jsonrepair jsonic and really-relaxed-json

While [jsonrepair](https://github.com/josdejong/jsonrepair), [jsonic](https://www.npmjs.com/package/jsonic), and [really-relaxed-json](https://www.npmjs.com/package/really-relaxed-json) all deal with non-standard or messy JSON, they approach the problem from completely opposite angles.

The core difference lies in intent: **`jsonrepair` fixes broken, corrupted, or truncated text** (usually machine-generated), while **`jsonic` and `really-relaxed-json` parse lazy, shorthand, or human-optimized text** by intentionally omitting strict syntax.

### Quick Comparison Matrix

| Feature                      | jsonrepair                                | jsonic                 | really-relaxed-json                  |
| ---------------------------- | ----------------------------------------- | ---------------------- | ------------------------------------ |
| **Primary Goal**             | **Fix/Repair** broken data                | **Shorthand** notation | **Lenient Conversion** to valid JSON |
| **Handles Truncated Data?**  | **Yes** (Closes open brackets)            | No (Throws error)      | No (Throws error)                    |
| **Omits Outer Braces `{}`?** | No                                        | **Yes**                | **Yes**                              |
| **Omits Commas entirely?**   | No                                        | **Yes**                | **Yes**                              |
| **Python/JS Constants?**     | **Yes** (`True`, `None` → `true`, `null`) | No                     | No                                   |
| **Comments Allowed?**        | Strips them safely                        | **Yes**                | No (Causes syntax errors)            |
| **Output Type**              | Valid JSON String                         | JS Object              | Valid JSON String or JS Object       |

***

### Deep Dive: How They Differ in Action

To see how differently these libraries think, look at how they handle specific types of messy text:

#### 1. The "Truncated/Broken AI Response" Test

- **Input Text:** `{"status": "success", "data": [{"id": 1, "name": "Alice"}, {"id": 2` _(The stream was cut off here)_
- **`jsonrepair`:** Returns `{"status": "success", "data": [{"id": 1, "name": "Alice"}]}`. It analyzes the balance of brackets and cleanly truncates the broken object while closing the array and main object.
- **`jsonic` & `really-relaxed-json`:** Both will crash with a **SyntaxError** because the structure is fundamentally broken rather than just "relaxed."

#### 2. The "Lazy Human Shorthand" Test

- **Input Text:** `user: admin role: manager permissions: read write`
- **`jsonic`:** Returns `{"user": "admin", "role": "manager", "permissions": "read write"}`. It natively handles unquoted strings with spaces, completely skips commas, and infers the root object without braces.
- **`really-relaxed-json`:** Returns `{"user": "admin", "role": "manager", "permissions": ["read", "write"]}` or throws an error depending on your config, as it expects keys and values to have cleaner separation but handles the omitted structure well.
- **`jsonrepair`:** Will crash. It expects standard text tokens and cannot guess where words start and stop without quotes or commas.

#### 3. The "Cross-Language Copy-Paste" Test

- **Input Text:** `{"active": True, "timeout": None}` _(Python-style syntax)_
- **`jsonrepair`:** Returns `{"active": true, "timeout": null}`. It maps specific cross-language quirks directly to valid JSON.
- **`jsonic` & `really-relaxed-json`:** Will treat `True` and `None` as unquoted strings, parsing them literally into standard text words (`"True"` and `"None"`) rather than booleans or nulls.

***

### Structural Summary: Which One To Choose?

- **Choose jsonrepair if your data source is an LLM or an API.** If a generative AI model outputs markdown blocks, drops closing brackets, or formats things like Python dictionaries, `jsonrepair` is the standard tool to sanitize it into a predictable object.
- **Choose jsonic if you are building CLI tools, configuration loaders, or CSS-in-JS style parsers.** It is uniquely excellent at letting users type minimal, fast shorthand without worrying about quotes, brackets, or commas.
- **Choose really-relaxed-json if you need JavaScript-specific leniency.** It is a solid middle-ground if you explicitly want to allow users to use template literal backticks (\`\`\`\`\`) or multi-line strings without breaking your pipeline.

To narrow down your best option, could you share **what exactly is breaking your current JSON parser** or what your raw string input looks like?

## compare jsonic and really-relaxed-json

While both **`jsonic`** and **`really-relaxed-json`** are designed to parse highly permissive, human-friendly shorthand data structures, their internal parsing logic targets slightly different use cases.

The core difference is that **`jsonic` is built for hyper-minimalist speed and configuration shorthand** (often omitting syntax entirely), while **`really-relaxed-json` focuses on processing JavaScript-style objects** that use modern ES6 features like template literals (backticks).

### Feature Comparison Matrix

| Feature                           | `jsonic`                             | `really-relaxed-json`                      |
| --------------------------------- | ------------------------------------ | ------------------------------------------ |
| **Primary Focus**                 | Minimal shorthand & CLI args \[1]    | Converting lenient text into strict JSON   |
| **Omits Outer Braces `{}`**       | **Yes** (Native core feature)        | **Yes** (Via relaxed parsing rules)        |
| **Omits Commas**                  | **Yes** (Spaces act as separators)   | **Yes** (But relies on line-breaks/keys)   |
| **Backtick Strings (\`\`\`\`\`)** | No (Treated as raw text or error)    | **Yes** (Supports multi-line blocks)       |
| **Unquoted Strings with Spaces**  | **Yes** (Captures sequences eagerly) | No (Usually splits them or throws)         |
| **Comments**                      | **Yes** (`//` or `#`)                | No (Causes syntax errors)                  |
| **Pipeline Integration**          | Parsed directly to JS Object         | Compiles messy string to strict JSON first |

***

### Key Behavioral Differences

#### 1. Handling Spaces in Unquoted Strings

Because `jsonic` was built to handle raw inputs from command-line arguments, it treats words following a colon aggressively.

- **Input:** `message: Hello World color: blue`
- **`jsonic`:** Returns `{"message": "Hello World", "color": "blue"}`. It understands that "Hello World" belongs to the message key before encountering the next key-value token.
- **`really-relaxed-json`:** ❌ **Fails or misinterprets**. It expects a quote or comma separation and will likely view `World` as an invalid isolated token or a broken key.

#### 2. Multi-line Strings and Backticks

If your input text contains copy-pasted multi-line strings, `really-relaxed-json` handles it beautifully using JavaScript template literal syntax.

- **Input:**\
  javascript

<!---->

```
text: `This is a long
multi-line string`
```

Use code with caution.

- **`really-relaxed-json`:** **Success**. It natively maps JavaScript backticks into a standard JSON string payload.
- **`jsonic`:** ❌ **Fails**. It does not support backtick literal blocks out of the box and will throw a syntax exception.

#### 3. Comments and Documentation

- **`jsonic`** lets you document your shorthand. It supports inline comments using standard JS syntax (`//`) as well as shell-style scripting comments (`#`).
- **`really-relaxed-json`** is strictly a structural converter and **does not tolerate comments** inside the payload string.

***

### Which One Should You Choose?

- **Choose `jsonic` if:** You are parsing user-typed command line flags, configuration short-codes, or setting strings where you want the user to type as _few characters as possible_ (e.g., omitting quotes, braces, and commas entirely).
- **Choose `really-relaxed-json` if:** You are building an interface where users write or paste raw, relaxed JavaScript Object literals directly into your app, particularly if those payloads contain backticks or complex multi-line text strings.

To help you decide between the two, what does a **typical sample string** look like in your application?

## how to use each of the four

Here is a quick-start guide on how to install and use each of the four libraries in your Node.js or JavaScript project.

### 1. JSON5

Perfect for human-written configuration files. It acts as a drop-in replacement for the native `JSON` global object.

- **Installation:** `npm install json5`
- **Code Example:**

javascript

```
const JSON5 = require('json5');

const rawData = `
{
  // This is a comment
  unquotedKey: 'single quotes work',
  trailingComma: [1, 2, 3,],
  hexadecimal: 0xFF,
}
`;

const obj = JSON5.parse(rawData);
console.log(obj.unquotedKey); // Output: "single quotes work"
```

Use code with caution.

***

### 2. jsonrepair

The best tool for fixing broken, cut-off, or poorly formatted data generated by AI/LLMs.

- **Installation:** `npm install jsonrepair`
- **Code Example:**

javascript

```
const { jsonrepair } = require('jsonrepair');

// Missing closing brackets, python constants, and missing quotes
const brokenLLMString = "{ 'status': True, 'data': [ { 'id': 1";

try {
  // 1. Repair it into a strictly valid JSON string
  const repairedString = jsonrepair(brokenLLMString);
  console.log(repairedString);
  // Output: {"status": true, "data": [{"id": 1}]}

  // 2. Pass it to the native parser
  const obj = JSON.parse(repairedString);
  console.log(obj.status); // Output: true
} catch (error) {
  console.error("Could not repair:", error);
}
```

Use code with caution.

***

### 3. jsonic

The ultimate choice for lazy shorthand, configs without braces, or parsing command-line parameters.

- **Installation:** `npm install jsonic`
- **Code Example:**

javascript

```
const jsonic = require('jsonic');

// No outer braces, no commas, spaces inside unquoted strings
const shorthandText = "user: admin role: manager permissions: read write";

const obj = jsonic(shorthandText);
console.log(obj);
/* Output:
{
  user: 'admin',
  role: 'manager',
  permissions: 'read write'
}
*/
```

Use code with caution.

***

### 4. really-relaxed-json

Designed to take raw, messy JavaScript object mappings (including ES6 template literal backticks) and force them into valid JSON structures.

- **Installation:** `npm install really-relaxed-json`
- **Code Example:**

javascript

```
const rjson = require('really-relaxed-json');

const messyJSLayout = `
  title: 'My Document'
  content: \`This is a multi-line
  string using backticks\`
`;

// Option A: Compile directly into a JavaScript object
const obj = rjson.parse(messyJSLayout);
console.log(obj.content);

// Option B: Convert the text structure into a strict standard JSON string
const strictJsonString = rjson.toJson(messyJSLayout);
console.log(strictJsonString);
// Output: {"title": "My Document", "content": "This is a multi-line\n  string using backticks"}
```

Use code with caution.

***

Which of these libraries feels like the best fit for your **current codebase setup**? I can help you write custom error-handling wrappers or setup functions if you are ready to integrate one!

## how to use each in esm

Here is how to use each library using modern **ES Modules (ESM)** syntax (`import`/`export`). [link](https://dmitripavlutin.com/javascript-json-modules/)

_Note: For older packages that don't explicitly export native ESM wrappers, you must import the default bundle or use namespace imports._

### 1. JSON5

`json5` fully supports ESM out of the box via a **default import**. [link](https://json5.org/)

javascript

```
import JSON5 from 'json5';

const rawData = `{ unquoted: 'hello', }`;
const obj = JSON5.parse(rawData);

console.log(obj.unquoted); // "hello"
```

Use code with caution.

***

### 2. jsonrepair

`jsonrepair` exports a **named import** specifically designed for modern environments. [link](https://www.npmjs.com/package/jsonrepair)

javascript

```
import { jsonrepair } from 'jsonrepair';

try {
  const broken = "{'name': 'John', }"; // Invalid JSON
  const repaired = jsonrepair(broken);

  const obj = JSON.parse(repaired);
  console.log(obj.name); // "John"
} catch (err) {
  console.error(err);
}
```

Use code with caution.

***

### 3. jsonic

Because `jsonic` is an older module structured around CommonJS exports, you must capture it using a **namespace import** (`* as ...`) to safely invoke it as a function in strict ESM environments.

javascript

```
import * as jsonicModule from 'jsonic';

// CommonJS fallback resolution for ESM bundlers/runtimes
const jsonic = jsonicModule.default || jsonicModule;

const shorthand = "user: admin role: manager";
const obj = jsonic(shorthand);

console.log(obj.user); // "admin"
```

Use code with caution.

***

### 4. really-relaxed-json

Similar to `jsonic`, `really-relaxed-json` is wrapped primarily as a legacy module. In an ESM environment, you extract its core functions from the **default import** object.

javascript

```
import rjsonModule from 'really-relaxed-json';

const rjson = rjsonModule.default || rjsonModule;

const messy = "title: 'Relaxed' description: `Using backticks`";

// Using the parse method directly
const obj = rjson.parse(messy);
console.log(obj.description); // "Using backticks"
```

Use code with caution.

***

Are you planning to run this setup natively in **Node.js** (using `"type": "module"` in your `package.json`), or are you using a frontend bundler like **Vite** or **Webpack**? I can help you configure any path aliases or compiler configurations required for your environment. [link](https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed)

- [link](https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed)\
  DEV Community\
  Configuring CommonJS & ES Modules for Node.js - DEV Community\
  Jan 3, 2022 — Gotchas. The package. json 's "type" field changes the . js file extension to mean either commonjs or ES module respectively. It i...
- [link](https://www.npmjs.com/package/jsonrepair)\
  NPM\
  jsonrepair - NPM\
  Jul 3, 2026 — Use. ES module. Use the jsonrepair function using an ES modules import: import { jsonrepair } from 'jsonrepair' try { // The follo...
- [link](https://www.pluralsight.com/resources/blog/guides/load-a-json-file-with-es6-modules-implementation)\
  Pluralsight\
  Load a JSON File with ES6 Modules Implementation\
  Sep 29, 2020 — Notice the ES6 import statement that imports the local JSON file, which you created previously. Using the ES6 import statement alo...

Show all



