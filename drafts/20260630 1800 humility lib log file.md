# get utc time in js

To get the UTC time in JavaScript, you can use the **`toISOString()`** or **`toUTCString()`** methods on a standard `Date` object. [link](https://attacomsian.com/blog/javascript-get-current-date-time-in-utc)

### Format as an ISO String (Recommended)

The `toISOString()` method returns a standardized string in ISO 8601 format. The **`Z`** at the very end denotes **Zulu time (UTC)**. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)

javascript

```
const utcString = new Date().toISOString();
console.log(utcString);
// Output: "2026-06-30T09:57:00.000Z"
```

Use code with caution.

### Format as an RFC 7231 String

The `toUTCString()` method returns the date formatted according to the universal time zone using the classic GMT standard. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/toUTCString)

javascript

```
const utcStandardString = new Date().toUTCString();
console.log(utcStandardString);
// Output: "Tue, 30 Jun 2026 09:57:00 GMT"
```

Use code with caution.

### Get a Unix Timestamp (Milliseconds)

If you just need a raw numerical timestamp, **`Date.now()`** automatically returns the total number of milliseconds elapsed since January 1, 1970, in **pure UTC**. [link](https://coreui.io/answers/how-to-get-current-timestamp-in-javascript/)

javascript

```
const utcTimestamp = Date.now();
console.log(utcTimestamp);
// Output: 1772272620000
```

Use code with caution.

### Get Individual UTC Components

If you want to extract individual pieces of the date without your local browser's timezone interfering, use the specific **`getUTC*`** methods: [link](https://coreui.io/answers/how-to-get-the-utc-date-in-javascript/)

javascript

```
const now = new Date();

const year    = now.getUTCFullYear(); // e.g., 2026
const month   = now.getUTCMonth();     // 0-11 (0 = January)
const day     = now.getUTCDate();      // 1-31
const hours   = now.getUTCHours();     // 0-23
const minutes = now.getUTCMinutes();   // 0-59
const seconds = now.getUTCSeconds();   // 0-59
```

Use code with caution.

If you are trying to complete a specific task with this date, let me know if you need to **format it into a specific custom template**, **calculate the difference between two timezones**, or **parse an existing date string into UTC**.

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/toUTCString)\
  Date.prototype.toUTCString() - JavaScript - MDN Web Docs\
  Jul 10, 2025 — Using toUTCString() js Copy. const d = new Date(0); console. log(d. toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'\
  MDN Web Docs
- [link](https://attacomsian.com/blog/javascript-get-current-date-time-in-utc)\
  How to get current date and time in UTC using JavaScript - Atta\
  Sep 12, 2022 — In JavaScript, the toUTCString() method can be used to get the current date and time in UTC. This method converts a Date object to...\
  attacomsian.com
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)\
  Date - JavaScript - MDN Web Docs\
  Dec 8, 2025 — Other ways to format a date \* toISOString() returns a string in the format 1970-01-01T00:00:00.000Z (the date time string format i...\
  MDN Web Docs

Show all

# nodejs yaml stringify default style

In Node.js, setting the default style for `YAML.stringify` depends entirely on which npm library you use, as **there is no native `YAML` module in Node.js**.

The two most popular packages are **`yaml`** (the modern standard) and **`js-yaml`** (the legacy favorite). Here is how to configure the default string style for both. [link](https://dev.to/%5Fd7eb1c1703182e3ce1782/how-to-validate-yaml-in-javascript-and-nodejs-320k)

### 1. Using the `yaml` library

The modern [`yaml` package](https://www.npmjs.com/package/yaml) uses an options object where you pass `collectionStyle` to control block vs. flow layout, and you can target `defaultStringType` or use the `Document` API to force quote styles. [link](https://eemeli.org/yaml/v1/)

javascript

```
const YAML = require('yaml');

const data = { name: "John Doe", items: [1, 2, 3] };

// Control block vs flow (JSON-like) style
const blockYaml = YAML.stringify(data, { collectionStyle: 'block' });
const flowYaml = YAML.stringify(data, { collectionStyle: 'flow' });

// Force specific string quoting styles globally via scalarOptions
YAML.scalarOptions.str.defaultType = 'QUOTE_DOUBLE';
const quotedYaml = YAML.stringify({ text: "Hello" });
```

Use code with caution.

### 2. Using the `js-yaml` library

If you are using [`js-yaml`](https://www.npmjs.com/package/js-yaml), style configurations are passed via the second argument (`options`) of the `.dump()` or `.safeDump()` methods. [link](https://npmx.dev/package/js-yaml/v/4.1.1)

- **`flowLevel`**: Controls when collections switch from block format to inline JSON style (`-1` forces block everywhere).
- **`quotingType`**: Determines if single (`'`) or double (`"`) quotes should be used.
- **`forceQuotes`**: Forces all strings to be explicitly wrapped in quotes. [link](https://www.npmjs.com/package/js-yaml)

javascript

```
const yaml = require('js-yaml');

const data = { name: "John Doe", active: true };

const output = yaml.dump(data, {
  flowLevel: -1,         // Always use block style instead of inline flow style
  quotingType: '"',      // Use double quotes instead of single quotes
  forceQuotes: true,     // Force quotes on all text strings
  lineWidth: -1          // Prevent automatic line wrapping
});

console.log(output);
```

Use code with caution.

### Option Comparison

| Option Intent            | `yaml` Property                      | `js-yaml` Property        |
| ------------------------ | ------------------------------------ | ------------------------- |
| **Force Block Layout**   | `collectionStyle: 'block'`           | `flowLevel: -1`           |
| **Force Flow (Inline)**  | `collectionStyle: 'flow'`            | `flowLevel: 0`            |
| **Set Quote Mark Style** | `YAML.scalarOptions.str.defaultType` | `quotingType: '"'` or `'` |
| **Force Always Quote**   | _Handled via Document AST_           | `forceQuotes: true`       |

If you can tell me **which library** you are using and **what specific style output** you want (e.g., forcing double quotes or preventing inline brackets), I can provide the exact code snippet for your project.

- [link](https://eemeli.org/yaml/v1/)\
  YAML\
  stringify(value, options = {}): string. value can be of any type. The returned string will always include \n as the last character...\
  eemeli.org
- [link](https://www.npmjs.com/package/js-yaml)\
  js-yaml - NPM\
  Jun 26, 2026 — quoteStyle ( single or double , default: single ) - quoting style to use when a string needs quotes. forceQuotes (default: false )\
  NPM
- [link](https://github.com/eemeli/yaml/issues/391)\
  string "yes" is always converted to boolean · Issue #391 · eemeli/yaml\
  May 16, 2022 — eemeli commented ... The scalar value yes is parsed as a boolean true in YAML 1.1, but not in the YAML 1.2 that this library defau...\
  GitHub

Show all

## yaml lib default style

To configure the default style in the modern npm **`yaml`** library, you can pass options directly into `YAML.stringify()` or modify the global defaults.

### 1. Block vs. Flow Style (Arrays and Objects)

By default, the library automatically switches to inline flow style (JSON-like brackets `{}`) for deeply nested data. You can force a specific layout using the `collectionStyle` option.

javascript

```
const YAML = require('yaml');
const data = { user: { name: 'Alice', roles: ['admin', 'dev'] } };

// Force everything to stay as clean, indented block lines
const blockStyle = YAML.stringify(data, { collectionStyle: 'block' });

// Force everything into compact, inline brackets and braces
const flowStyle = YAML.stringify(data, { collectionStyle: 'flow' });
```

Use code with caution.

### 2. Default String and Quote Style

To change how text strings are rendered (plain, single quotes, or double quotes), configure the `scalarOptions` settings.

### Global Configuration

Modify the global object before calling your stringify operations to apply changes project-wide.

javascript

```
const YAML = require('yaml');

// Options: 'PLAIN', 'QUOTE_SINGLE', 'QUOTE_DOUBLE'
YAML.scalarOptions.str.defaultType = 'QUOTE_DOUBLE';

// All strings will now output with double quotes: "hello"
console.log(YAML.stringify({ message: "hello" }));
```

Use code with caution.

### Document-Level Configuration (Recommended)

If you want to avoid changing global settings, use the `Document` API to control styles safely per file.

javascript

```
const YAML = require('yaml');

const doc = new YAML.Document({ message: "hello" });

// Set default type specifically for this document instance
doc.options.scalarOptions.str.defaultType = 'QUOTE_SINGLE';

// Outputs: message: 'hello'
console.log(doc.toString());
```

Use code with caution.

### 3. Multiline Text Style (Folded vs. Literal)

You can also set the default behavior for strings that contain newlines.

javascript

```
// Options: 'PLAIN', 'BLOCK_FOLDED' (>), 'BLOCK_LITERAL' (|)
YAML.scalarOptions.str.defaultKeyType = 'BLOCK_LITERAL';
```

Use code with caution.

Would you like help formatting a specific **data structure**, or do you need to see how to apply these styles to **individual keys** instead of globally?

- [link](https://www.educative.io/courses/introduction-to-yaml/overview-of-yaml-syntax)\
  Overview of YAML syntax\
  Flow style YAML has an alternate syntax called flow style, it allows sequences and mappings to be written inline without having to...\
  \
  \
  Educative
- [link](https://rubystyle.guide/)\
  Ruby Style Guide\
  Jun 19, 2025 — The string literals in this guide are using single quotes by default.\
  \
  rubystyle.guide

## example

Here is a complete, runnable example showing how these different default styles change the exact same JavaScript object into different YAML outputs.

### Code Setup

javascript

```
const YAML = require('yaml');

const data = {
  project: "Web App",
  tags: ["production", "frontend"],
  description: "Line one.\nLine two."
};

// 1. Standard Default Style (Auto-detects)
console.log("--- 1. STANDARD DEFAULT ---");
console.log(YAML.stringify(data));

// 2. Forced Block Style (Clean indentation, no brackets)
console.log("--- 2. FORCED BLOCK STYLE ---");
console.log(YAML.stringify(data, { collectionStyle: 'block' }));

// 3. Forced Double Quotes & Literal Multiline
console.log("--- 3. QUOTED & LITERAL TEXT ---");
// Set global defaults
YAML.scalarOptions.str.defaultType = 'QUOTE_DOUBLE';
YAML.scalarOptions.str.defaultKeyType = 'BLOCK_LITERAL';

console.log(YAML.stringify(data, { collectionStyle: 'block' }));
```

Use code with caution.

### Resulting Outputs

### Output 1: Standard Default

yaml

```
project: Web App
tags:
  - production
  - frontend
description: |-
  Line one.
  Line two.
```

Use code with caution.

### Output 2: Forced Block Style

yaml

```
project: Web App
tags:
  - production
  - frontend
description: |-
  Line one.
  Line two.
```

Use code with caution.

### Output 3: Quoted & Literal Text

yaml

```
"project": "Web App"
"tags":
  - "production"
  - "frontend"
"description": |-
  Line one.
  Line two.
```

Use code with caution.

If you want to see how to handle **nested objects**, **null values**, or **boolean formatting**, let me know what your data looks like!

## output examples of default style

The standard output examples below show how the default formatting behaviors of the npm `yaml` library handle your data if you **do not override any styles**.

### 1. Simple Strings (Plain Style)

By default, the library serializes clean alphanumeric strings **without any quotes**, known as the **`PLAIN`** scalar style.

javascript

```
YAML.stringify({ item: "banana", code: 123 });
```

Use code with caution.

**Default Output:**

yaml

```
item: banana
code: 123
```

Use code with caution.

### 2. Strings Requiring Quotes (Auto-Quoting)

If a string contains special YAML characters (like `:`, `{`, `[`, or boolean-like keywords), the library automatically wraps it in **single quotes** (`'`) to ensure valid syntax.

javascript

```
YAML.stringify({
  time: "12:00",
  flag: "true",
  message: "Hello: World"
});
```

Use code with caution.

**Default Output:**

yaml

```
time: '12:00'
flag: 'true'
message: 'Hello: World'
```

Use code with caution.

### 3. Collections and Deep Nesting (Auto-Flow Style)

The default behavior for shallow arrays and objects is **Block format** (indented lines). However, if an object or array is nested too deeply, the library defaults to **Flow format** (JSON-like brackets) to prevent infinite indentation expansion.

javascript

```
YAML.stringify({
  shallowArray: ["apple", "orange"],
  deeplyNested: { level1: { level2: { level3: ["item"] } } }
});
```

Use code with caution.

**Default Output:**

yaml

```
shallowArray:
  - apple
  - orange
deeplyNested:
  level1:
    level2: { level3: [ item ] } # Notice auto-flow style switches here
```

Use code with caution.

### 4. Multiline Text (Chomped Block Style)

When strings contain a newline (`\n`), the default style converts the value into a literal multi-line block using the **`|-`** operator (literal block style with stripped trailing newlines).

javascript

```
YAML.stringify({
  bio: "Hello world.\nThis is a new line."
});
```

Use code with caution.

**Default Output:**

yaml

```
bio: |-
  Hello world.
  This is a new line.
```

Use code with caution.

Are you running into an issue where **unwanted brackets** are showing up in nested data, or do you want to ensure a **specific quote type** is enforced on strings?

## |- or |

In YAML, **`|-`** and **`|`** are both valid, but **`|`** is a syntax error.

Here is the exact difference between how they handle trailing whitespace and newlines at the end of your text block.

### 1. `|` (Strip / Chomp) — **The Default**

The minus sign tells YAML to **strip all trailing newlines** from the end of the text block. It will keep only the single newline necessary to end the line.

- **Input text:** `"Line 1\nLine 2\n\n\n"`

- **YAML Output:**\
  yaml

<!---->

```
example: |-
  Line 1
  Line 2
```

Use code with caution.

### 2. `|` (Clip) — **Standard Behavior**

Using `|` without any modifier tells YAML to **keep exactly one trailing newline** at the end of the block, discarding any extra ones.

- **Input text:** `"Line 1\nLine 2\n\n\n"`

- **YAML Output:**\
  yaml

```
example: |
  Line 1
  Line 2

```

Use code with caution.

### 3. `|+` (Keep)

The plus sign tells YAML to **keep every single trailing newline** exactly as typed.

- **Input text:** `"Line 1\nLine 2\n\n\n"`

- **YAML Output:**\
  yaml

```
example: |+
  Line 1
  Line 2

```

Use code with caution.

### Summary Comparison

| Syntax | Name    | Trailing Newline Behavior |
| ------ | ------- | ------------------------- |
| \*\*\` | -\`\*\* | Strip                     |
| \*\*\` | \`\*\*  | Clip                      |
| \*\*\` | +\`\*\* | Keep                      |
| \*\*\` | \`\*\*  | _Error_                   |

Do you need to configure the Node.js `yaml` library to output a **specific one** of these styles for your multiline strings?

## what does it mean Using | without any modifier tells YAML to keep exactly one trailing newline at the end of the block, discarding any extra ones.

It means that <mark>YAML looks at the very end of your multi-line text string and standardizes it</mark>. No matter how many empty lines you hit "Enter" on at the end of your string, YAML normalizes the file to ensure the text block ends with exactly one newline.

Here is a clear look at how the **Clip (`|`)** behavior processes different string inputs:

### Scenario A: Your text has many trailing newlines

If your JavaScript string has three newlines at the end:

javascript

```
const text = "Hello\nWorld\n\n\n";
```

Use code with caution.

When stringified using `|`, YAML discards the extra empty lines and forces exactly **one** newline at the end:

yaml

```
example: |
  Hello
  World
# The file safely moves to the next line here, leaving one empty line.
```

Use code with caution.

### Scenario B: Your text has zero trailing newlines

If your JavaScript string ends abruptly with no newline at all:

javascript

```
const text = "Hello\nWorld";
```

Use code with caution.

When stringified using `|`, YAML will automatically **add one** newline to the end so it clips correctly:

yaml

```
example: |
  Hello
  World
# YAML automatically added a newline here to satisfy the rule.
```

Use code with caution.

### Why does YAML do this?

In programming, it is standard practice for text files to end with a trailing newline. The default `|` (Clip) operator ensures that your multi-line data stays clean, uniform, and compliant with file standards, preventing accidental massive blocks of whitespace from breaking your layout.

Would you like to see how to **configure your Node.js code** to switch between these three modes (`|`, `|-`, or `|+`)?

- [link](https://oneuptime.com/blog/post/2026-02-21-how-to-fix-ansible-lint-yaml-formatting-warnings/view)\
  How to Fix ansible-lint YAML Formatting Warnings\
  Feb 21, 2026 — yaml\[new-line-at-end-of-file]: Missing Final Newline POSIX standard says text files should end with a newline character. The fix: ...\
  \
  \
  OneUptime
- [link](https://www.baeldung.com/yaml-multi-line)\
  Breaking YAML Strings Over Multiple Lines\
  Aug 28, 2025 — We'll also learn how YAML handles leading and ending line breaks represented by empty lines at the beginning and end of a block. 3...\
  \
  \
  Baeldung
- [link](https://github.com/ansible/ansible/issues/54944)\
  Option for copy module to include newline · Issue #54944 · ansible/ansible\
  Apr 6, 2019 — agaffney commented on Apr 21, 2019 This works because the YAML block syntax using | automatically appends a newline. With there be...\
  \
  \
  GitHub

Show all