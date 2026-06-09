# how to receive stdin for a nodejs app

To receive standard input (stdin) in a [Node.js](https://nodejs.org/en) application, you can read from the **`process.stdin`** stream. Depending on how your application consumes data, you can implement this using built-in modules or modern asynchronous patterns. \[[1](https://jonlinnell.co.uk/articles/node-stdin), [2](https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/)]

### 1. Read Line-by-Line (Interactive CLI) \[[1](https://www.geeksforgeeks.org/node-js/node-js-built-in-modules-for-command-line-input/)]

If your app asks a user questions sequentially in the terminal, the built-in [Node.js Readline Module](https://nodejs.org/api/stream.html) is the most effective approach. \[[1](https://stackoverflow.com/questions/58143781/the-correct-way-to-read-from-stdin-in-nodejs), [2](https://www.youtube.com/watch?v=LblW3tq9Y88)]

javascript

```
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close(); // Crucial to close the interface, or the app won't exit
});
```

Use code with caution.

### 2. Stream Data Chunk-by-Chunk (Piping Data) \[[1](https://www.codecademy.com/article/getting-user-input-in-node-js)]

If you are piping large files or terminal commands into your script (e.g., `cat file.txt | node app.js`), use an event listener to capture incoming chunks asynchronously. \[[1](https://forum.freecodecamp.org/t/node-functions-process/96340), [2](https://dustinpfister.github.io/2019/07/09/nodejs-process-stdin/), [3](https://jonlinnell.co.uk/articles/node-stdin)]

javascript

```
let totalData = '';

// Set the encoding so you receive strings instead of raw Buffer objects
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  totalData += chunk;
});

process.stdin.on('end', () => {
  console.log('--- Finished receiving all stdin ---');
  console.log(totalData);
});
```

Use code with caution.

### 3. Read Line-by-Line Using Async Iterators (Modern Approach) \[[1](https://medium.com/deno-the-complete-reference/reading-lines-in-deno-249af92e3a71)]

If your application loops through an indefinite text pipeline sequentially, you can iterate over `process.stdin` directly using `for await...of`. \[[1](https://jonlinnell.co.uk/articles/node-stdin), [2](https://stackoverflow.com/questions/58143781/the-correct-way-to-read-from-stdin-in-nodejs)]

javascript

```
const readline = require('node:readline');

async function processInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  for await (const line of rl) {
    console.log(`Processing line: ${line}`);
  }
}

processInput();
```

Use code with caution.

### How to Test It in Your Terminal

You can pass data into your Node.js script using either of these shell techniques: \[[1](https://stackoverflow.com/questions/20086849/how-to-read-from-stdin-line-by-line-in-node)]

- **Using echo or piping:**\
  bash

<!---->

```
echo "Hello from terminal" | node app.js
```

Use code with caution.

- **Using a text file:**\
  bash

<!---->

```
node app.js < input.txt
```

Use code with caution.\
\[[1](https://unix.stackexchange.com/questions/385771/writing-to-stdin-of-a-process)]

Would you like help handling a specific format like **parsing JSON from stdin**, or do you need to create a completely **interactive multi-question CLI menu**? \[[1](https://www.youtube.com/watch?v=LblW3tq9Y88), [2](https://stackoverflow.com/questions/57103381/how-to-read-a-file-from-stdin-with-nodejs)]

- [link](https://forum.freecodecamp.org/t/node-functions-process/96340)\
  Node functions process - The freeCodeCamp Forum\
  Mar 13, 2017 — cat is a unix program that simply combines text from one or more files (or from directly typing in some text, as above), and spits...\
  The freeCodeCamp Forum
- [link](https://dustinpfister.github.io/2019/07/09/nodejs-process-stdin/)\
  Piping with nodejs thanks to the process stdin global\
  Jul 9, 2019 — I just attach an event handler for the readable event of the stream, and then use that to read incoming chunks. 1. 2. 3. 4. 5. 6. ...\
  GitHub
- [link](https://stackoverflow.com/questions/57103381/how-to-read-a-file-from-stdin-with-nodejs)\
  How to read a file from stdin with nodeJS - Stack Overflow\
  Jul 18, 2019 — \* 1 Answer. Sorted by: Take a look at https://gist.github.com/kristopherjohnson/5065599. If you prefer a promise based approach he...\
  Stack Overflow

Show all

## You said: it's a converter ci. i will app < a file > an output

For a file-to-file converter CLI that handles standard input redirection (`node app.js < input.txt > output.txt`), you must capture the entire stream, process the text, and write it directly to standard output.

### Recommended Pattern: Async Buffer

This approach reads the complete file into memory before executing the conversion. It is ideal for JSON, YAML, or any format that requires full context to parse.

javascript

```
import { stdin, stdout } from 'node:process';

async function runConverter() {
  try {
    // 1. Accumulate all chunks from stdin
    let rawInput = '';
    stdin.setEncoding('utf8');

    for await (const chunk of stdin) {
      rawInput += chunk;
    }

    // 2. Perform your conversion logic
    const convertedOutput = convertData(rawInput);

    // 3. Write directly to stdout (the "> output" part handles the file writing)
    stdout.write(convertedOutput);
  } catch (error) {
    process.stderr.write(`Conversion Error: ${error.message}\n`);
    process.exit(1);
  }
}

function convertData(data) {
  // Replace this with your actual conversion logic (e.g., CSV to JSON)
  return data.toUpperCase();
}

runConverter();
```

Use code with caution.

### High-Performance Pattern: Transform Streams

If you are converting massive files line-by-line (e.g., converting log formats or lowercasing text), streaming prevents high memory usage by processing data sequentially.

javascript

```
import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// Define the conversion rules
const converterStream = new Transform({
  transform(chunk, encoding, callback) {
    const transformedData = chunk.toString().toUpperCase();
    callback(null, transformedData);
  }
});

// Safely pipe input -> converter -> output
await pipeline(stdin, converterStream, stdout)
  .catch((err) => {
    process.stderr.write(`Pipeline failed: ${err.message}\n`);
    process.exit(1);
  });
```

Use code with caution.

### How to Run and Test

Execution is handled entirely by your terminal shell system:

bash

```
node app.js < source.txt > results.txt
```

Use code with caution.

To help optimize your configuration, what **file formats** are you converting (e.g., CSV to JSON, Markdown to HTML), and how **large** are the typical input files?

## You said: async read in and write out

javascript

```
import { stdin, stdout } from 'node:process';

// 1. Read all input asynchronously
let input = '';
stdin.setEncoding('utf8');

for await (const chunk of stdin) {
  input += chunk;
}

// 2. Process data
const output = input.toUpperCase();

// 3. Write directly to stdout
stdout.write(output);
```

Use code with caution.

What specific **data format** (like JSON or CSV) are you parsing in your converter?

## You said: do not use the weird for await syntax

Here is the standard, event-driven asynchronous pattern using explicit event listeners instead of the `for await` loop.

javascript

```
import { stdin, stdout } from 'node:process';

let input = '';
stdin.setEncoding('utf8');

// 1. Asynchronously read incoming data chunks
stdin.on('data', (chunk) => {
  input += chunk;
});

// 2. Process and write out once the input stream finishes
stdin.on('end', () => {
  try {
    const output = input.toUpperCase(); // Your conversion logic here
    stdout.write(output);
  } catch (error) {
    process.stderr.write(`Error: ${error.message}\n`);
    process.exit(1);
  }
});
```

Use code with caution.

Would you like help implementing the **error handling** for invalid file contents, or should we look at how to **parse a specific format** like JSON or CSV?

## You said: can i like "input = await mystdin()", "await mystdout(data)"

Yes. You can achieve this clean syntax by wrapping the event listeners in custom `Promise` functions, or by using Node.js's built-in `fs/promises` module which treats standard input and output like files.

Here are the two ways to achieve your exact syntax.

### Option 1: Built-in File System Promises (Recommended)

Node.js maps standard input to file descriptor `0` and standard output to file descriptor `1`. You can read and write them using standard `await`.

javascript

```
import fs from 'node:fs/promises';

async function main() {
  // Read everything from stdin (fd: 0)
  const input = await fs.readFile(0, 'utf-8');

  // Your conversion logic here
  const data = input.toUpperCase();

  // Write everything to stdout (fd: 1)
  await fs.writeFile(1, data);
}

main();
```

Use code with caution.

### Option 2: Wrapping Event Listeners in Custom Functions

If you want explicit `mystdin()` and `mystdout()` abstraction functions, you can wrap the stream logic inside a `Promise`.

javascript

```
import { stdin, stdout } from 'node:process';

function mystdin() {
  return new Promise((resolve) => {
    let input = '';
    stdin.setEncoding('utf8');
    stdin.on('data', (chunk) => input += chunk);
    stdin.on('end', () => resolve(input));
  });
}

function mystdout(data) {
  return new Promise((resolve) => {
    stdout.write(data, () => resolve());
  });
}

async function main() {
  const input = await mystdin();

  const data = input.toUpperCase(); // Your conversion logic

  await mystdout(data);
}

main();
```

Use code with caution.

Which option fits your project structure better, or do you need help **validating the input** before writing it out?

## You said: use native async await

**To use clean, native `async/await` syntax without stream events or the `for await` syntax, use the built-in Node.js File System Promises Module.**

Node.js allows you to `await` standard input and standard output by using their global file descriptors: `0` for `stdin` and `1` for `stdout`. \[[1](https://humanwhocodes.com/snippets/2019/05/nodejs-read-stream-promise/), [2](https://transloadit.com/devtips/efficiently-read-files-in-node-js-with-the-fs-module/)]

javascript

```
import fs from 'node:fs/promises';

async function main() {
  try {
    // 1. Await the complete standard input stream
    const input = await fs.readFile(0, 'utf-8');

    // 2. Process your data
    const data = input.toUpperCase();

    // 3. Await the output write straight to the redirection file
    await fs.writeFile(1, data);

  } catch (error) {
    process.stderr.write(`Converter Error: ${error.message}\n`);
    process.exit(1);
  }
}

main();
```

Use code with caution.

### Why this fits a CLI Converter:

- **Zero Event Listeners**: No manual buffering logic or `.on('data')` code blocks to maintain.
- **Top-to-Bottom Execution**: The variables line up sequentially exactly how you envisioned (`input = await ...`).
- **Complete Redirection Compatibility**: Fully respects your `< file.txt > output.txt` terminal piping commands without locks or missing data buffers.

Would you like to extend this script to **automatically parse JSON/CSV strings** right after reading the input, or do you need to handle **command-line arguments** alongside your file inputs?

- [link](https://humanwhocodes.com/snippets/2019/05/nodejs-read-stream-promise/)\
  Reading streams with promises in Node.js - Human Who Codes\
  May 13, 2019 — The fs. promises API doesn't provide a way to read streams in Node. js. Here's how to do it. May 13, 2019 • 2 min read. JavaScript...\
  Human Who Codes
- [link](https://transloadit.com/devtips/efficiently-read-files-in-node-js-with-the-fs-module/)\
  Efficiently read files in Node.js with the fs module | Transloadit\
  Apr 22, 2025 — The fs/promises API is the modern standard for asynchronous file operations in Node. js. It integrates seamlessly with async/await...\
  \
  \
  Transloadit

## You said: what? fs promises can handle stdin and stdout, not just files?

Yes. In any operating system (like Linux, macOS, or Windows), **everything is treated as a file**. \[[1](https://dcli.onepub.dev/dart-basics/stdin-stdout-stderr), [2](https://enodev.fr/posts/notifications-with-file-descriptors.html)]

Instead of passing a string path like `'./file.txt'`, you can pass standard **Integer File Descriptors** directly into `fs` methods: \[[1](https://stackoverflow.com/questions/54481995/how-does-fs-readfilebuffer-integer-work)]

- **`0`** is always `stdin` (Standard Input)
- **`1`** is always `stdout` (Standard Output)
- **`2`** is always `stderr` (Standard Error) \[[1](https://stackoverflow.com/questions/54481995/how-does-fs-readfilebuffer-integer-work), [2](https://www.youtube.com/watch?v=mgv9AwQS4Sc\&vl=en-US), [3](https://technology.amis.nl/tech/linux-background-process-and-redirecting-the-standard-input-output-and-error-stream/), [4](https://labex.io/questions/how-does-2-dev-null-work-218062), [5](https://subscription.packtpub.com/book/programming/9781789951288/2/ch02lvl1sec13/redirecting-stdin-stdout-and-stderr)]

Node's `fs/promises` module fully accepts these file descriptors. \[[1](https://stackoverflow.com/questions/54481995/how-does-fs-readfilebuffer-integer-work), [2](https://www.thenodebook.com/file-system/file-descriptors-and-handles)]

### Why this works perfectly for your CLI app

When you run your tool using shell redirection:

bash

```
node app.js < input.txt > output.txt
```

Use code with caution.

The terminal shell connects `input.txt` straight to File Descriptor `0`, and hooks up File Descriptor `1` directly to `output.txt`. \[[1](https://www.youtube.com/watch?v=mgv9AwQS4Sc\&vl=en-US)]

Because `fs.readFile(0)` instructs Node to read directly from File Descriptor `0` until it hits the end of the stream, it naturally reads the entire redirected input file. It executes this completely asynchronously using standard `async/await` syntax, bypassing all manual event listeners and streams. \[[1](https://stackoverflow.com/questions/54481995/how-does-fs-readfilebuffer-integer-work), [2](https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js), [3](https://www.memberstack.com/blog/reading-files-in-node-js)]

Would you like to see how to write logs or errors to **File Descriptor 2 (`stderr`)** so they show up in the terminal instead of corrupting your output file?

- [link](https://stackoverflow.com/questions/54481995/how-does-fs-readfilebuffer-integer-work)\
  How does fs.readFile( |\
  Feb 1, 2019 — \* 2 Answers. Sorted by: The integer argument that you can pass should represent a valid file descriptor. For example, stdin typica...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=mgv9AwQS4Sc\&vl=en-US)\
  126\. Understanding stdin, stdout, stderr in Node.js\
  Jul 10, 2025 — hi guys this is Leela. welcome back to my channel Leela webd. in this video we will learn about the NodeJS processing the stream. ...\
  14:04\
  YouTube·Leela Web Dev
- [link](https://dcli.onepub.dev/dart-basics/stdin-stdout-stderr)\
  stdin/stdout/stderr a primer | dcli\
  Aug 30, 2022 — In the Unix world, EVERYTHING is a file. Even devices and processes are treated as files.\
  \
  \
  OnePub

Show all

# should i name design tokens like primary-bg or bg-primary

You should name your design tokens like **`bg-primary`** rather than `primary-bg`. \[[1](https://medium.com/@sandeepsalmon/designing-a-scalable-design-token-system-in-figma-f7aed90084fa), [2](https://midrocket.com/en/guides/design-tokens-guide/), [3](https://zeroheight.com/blog/why-should-you-use-design-tokens/)]

In design token architecture, the industry standard is to structure names from the **broadest category to the most specific variant** (a top-down hierarchy). Starting with the property or category (`bg` or `color-bg`) ensures your tokens group together logically in code autocomplete menus, design tools like Figma, and documentation. \[[1](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/), [2](https://www.linkedin.com/posts/zanderwhitehurst%5Fux-ui-designsystems-activity-7241395799970967552-iSQU), [3](https://midrocket.com/en/guides/design-tokens-guide/), [4](https://medium.com/@sandeepsalmon/designing-a-scalable-design-token-system-in-figma-f7aed90084fa), [5](https://medium.com/@NateBaldwin/creating-a-flexible-design-token-taxonomy-for-intuits-design-system-81c8ff55c59b)]

### Why `bg-primary` Wins: The Power of Hierarchy

Design token frameworks use a systematic taxonomy to remain scalable. A common industry framework follows this sequence: `Category ➔ Property ➔ Variant ➔ State`. \[[1](https://www.alwaystwisted.com/articles/design-token-naming-conventions), [2](https://uxdesign.cc/naming-design-tokens-347f630ba4f9), [3](https://midrocket.com/en/guides/design-tokens-guide/), [4](https://www.figma.com/resource-library/design-tokens/), [5](https://medium.com/@NateBaldwin/creating-a-flexible-design-token-taxonomy-for-intuits-design-system-81c8ff55c59b)]

```
🟢 GOOD (Hierarchical):  color-bg-primary, color-bg-secondary, color-text-primary
🔴 BAD (Scattered):      primary-bg, secondary-bg, primary-text-color
```

Here is a comparison of how both approaches impact your design system workflow:

| Feature \[[1](https://docs.tokens.studio/manage-tokens/token-names/), [2](https://www.linkedin.com/posts/zanderwhitehurst%5Fux-ui-designsystems-activity-7241395799970967552-iSQU), [3](https://midrocket.com/en/guides/design-tokens-guide/), [4](https://www.alwaystwisted.com/articles/design-token-naming-conventions)] | `bg-primary` (Category-First)                                       | `primary-bg` (Variant-First)                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Code Autocomplete**                                                                                                                                                                                                                                                                                                       | **Excellent.** Typing `bg-` lists all background options instantly. | **Poor.** Typing `primary-` mixes backgrounds, text, and borders together.       |
| **Figma/Tool Organization**                                                                                                                                                                                                                                                                                                 | **Structured.** Automatically groups by UI property layers.         | **Fragmented.** Clusters unrelated elements by their priority level.             |
| **Scalability**                                                                                                                                                                                                                                                                                                             | **High.** Seamlessly expands to states (`bg-primary-hover`).        | **Low.** Becomes messy and confusing (`primary-bg-hover` vs `primary-hover-bg`). |

### Recommended Token Structure Examples

To make your semantic tokens highly scalable, prepend the foundational category (`color`) to the property: \[[1](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/), [2](https://midrocket.com/en/guides/design-tokens-guide/)]

- `color-bg-primary` (The main background surface)
- `color-bg-secondary` (The secondary background surface, like a sidebar)
- `color-text-primary` (The primary body text color)
- `color-border-disabled` (The border color for a disabled element) \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA), [2](https://medium.com/@sandeepsalmon/designing-a-scalable-design-token-system-in-figma-f7aed90084fa), [3](https://midrocket.com/en/guides/design-tokens-guide/), [4](https://design.dev/guides/design-systems/), [5](https://medium.com/@branda.bg/the-art-of-naming-and-organizing-design-tokens-cdf7632ccda9), [6](https://shoreline.vtex.com/foundations/color/best-practices)]

If you choose to omit the `color-` prefix because the token is housed within a dedicated color JSON file, stick strictly to `bg-primary` and `text-primary`. \[[1](https://www.fourzerothree.in/p/semantic-colour-tokens-in-action), [2](https://shoreline.vtex.com/foundations/color/best-practices), [3](https://www.contentful.com/blog/design-token-system/)]

If you want to refine your system further, let me know:

- Are you naming **primitive (raw) tokens** or **semantic (intent-based) tokens**?

- What **design tool** (e.g., Figma Variables, Tokens Studio) are you integrating with?

- Do you need to support **dark mode or multi-brand theming**? \[[1](https://medium.com/design-bootcamp/my-way-for-naming-design-tokens-and-components-ce10cfa55e22), [2](https://design.dev/guides/design-systems/), [3](https://compound.thephoenixgroup.com/latest/guidelines/foundations/tokens/naming-approach-sMf2dkF9), [4](https://docs.tokens.studio/manage-tokens/token-names/), [5](https://designstrategy.guide/design-tokens-101/), [6](https://www.reddit.com/r/DesignSystems/comments/1ja96hb/how%5Fi%5Flearned%5Fthe%5Fhard%5Fway%5Fthat%5Ftoken/)]

- [link](https://www.alwaystwisted.com/articles/design-token-naming-conventions)\
  Design Token Naming Conventions: A Practical Guide\
  Apr 23, 2026 — If you have ever stared at a long token list and wondered whether a name should be button-primary-bg , primary-button-background ,\
  Always Twisted

- [link](https://www.youtube.com/watch?v=CJyJN0ZdEGA)\
  Design Tokens for Dummies | A Complete Guide\
  Feb 17, 2025 — so Google defines design tokens as small reusable design decisions that make up a design systems visual style. but what does that ...\
  50:19\
  YouTube·UI Collective

- [link](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/)\
  The developer’s guide to design tokens and CSS variables - Penpot\
  Dec 4, 2025 — Structuring names like this prevents naming collisions, improves organization, and makes the token's purpose clear. When translati...\
  Penpot

Show all

## You said: fg or text

You should use **`text`** for your primary semantic tokens, but you can use **`fg`** (foreground) if you are building a highly abstract, multi-brand design system.

For most teams, **`text`** wins because it is intuitive, universally understood, and prevents design-to-developer communication friction.

### Why `text` is Generally Better

- **Universal Clarity:** Anyone—from a junior designer to a marketing manager—instantly knows what `color-text-primary` means. `fg` requires cognitive overhead.
- **W3C Draft Alignment:** The W3C Design Tokens Community Group specifications heavily lean toward explicit, semantic naming conventions like `text`.
- **CSS Native:** Web developers are already accustomed to properties like `text-align` or `text-transform`.

### When to Use `fg` (Foreground)

You should only choose `fg` if you want a strict structural symmetry where everything that sits _on top_ of a background is classified under one massive umbrella.

```
🟢 text-primary       (Explicit & intuitive)
🟢 fg-text-primary    (Strict architectural hierarchy)
```

Use `fg` only in these scenarios:

- **Icon and Text Sharing:** If your icons and text always share the exact same color token (e.g., `color-fg-primary` colors both the label and the chevron next to it).
- **Strict Multi-Brand Theming:** When you need a pure logical counter-partner to `bg` (Background) and want to keep token paths perfectly balanced (`theme.bg` vs `theme.fg`).

### The Compromise: The Three-Tier Hierarchy

The cleanest industry approach uses **both**, utilizing `fg` as an broad middle category, and `text` or `icon` as the specific element property:

- `color-fg-text-primary` (The primary text color)
- `color-fg-icon-primary` (The primary icon color)
- `color-fg-border-primary` (The primary border color)

If you use this three-tier system, you can easily collapse it to `color-text-primary` if you want to keep your code lines short and punchy.

To help you lock down this decision, let me know:

- Will your **icons and text** always share the exact same color palette?
- Are you using **Tailwind CSS** or a custom CSS/CSS-in-JS framework?
- How large is the **team** that needs to adopt these naming rules?

# should i name ref design tokens palette and sys color or all color

Use the **palette and sys color** approach (often called `palette` and `semantic` tokens).

Splitting your reference tokens from your system tokens is a global industry standard for modern design systems. Putting everything under a single `color` folder creates a flat list that is difficult to maintain and scale.

### 🎨 Why "Palette" and "Sys Color" is Better

- **Separates Purpose**: `palette` stores your raw, literal values (e.g., `blue-50`). `sys` stores the meaning or context (e.g., `sys-color-primary`).
- **Enables Dark Mode**: You can map `sys-color-background` to `palette-white` for light mode, and change it to `palette-gray-900` for dark mode without changing your component code.
- **Simplifies Theming**: Brand changes only require updating the `palette` layer, leaving your component layouts completely untouched. \[[1](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026/), [2](https://zoewave.medium.com/material-3-design-system-e91a15d303a0)]

### 🛠️ Recommended Structure

### 1. Reference Tokens (`ref` or `palette`)

These are your global, raw color choices. They should use literal names based on hue and lightness scale. \[[1](https://www.boldare.com/blog/design-tokens-explained/)]

- ❌ Avoid: `color-blue`
- `palette-blue-500` \[[1](https://www.pushoperations.com/blog/how-to-use-the-psychology-of-menu-design-to-influence-customer-spending)]

### 2. System Tokens (`sys`)

These apply meaning to your palette tokens. They define _how_ a color is used across the system. \[[1](https://www.reddit.com/r/reactjs/comments/1dz2iqv/how%5Fto%5Funderstand%5Fschadcn%5Fcss%5Fcolor%5Fnaming/), [2](https://www.reddit.com/r/FigmaDesign/comments/u1u1ud/how%5Fare%5Fdesign%5Ftokens%5Fpractically%5Fused%5Fin/)]

- ❌ Avoid: `color-button-background`
- `sys-color-background-primary`
- `sys-color-text-disabled` \[[1](https://atmos.style/blog/working-with-colors-in-code)]

### 🚀 How to Structure Your Files

text

```
├── tokens/
│   ├── base/ (or global/)
│   │   └── palette.json       <-- Raw hues (blue-500, red-600)
│   ├── semantic/ (or sys/)
│   │   ├── sys-color.json    <-- Meaningful mappings (surface, text)
│   │   └── sys-size.json     <-- Spacing mappings (padding, margin)
```

Use code with caution.

***

To help tailor this to your workflow, could you tell me:

- What **design tool** are you using? (Figma, Token Studio, Style Dictionary?)

- How **large** is your team or product ecosystem?

- Do you need to support **multiple brands** or just dark mode?

- [link](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026/)\
  Design Tokens That Scale in 2026 (Tailwind v4 + CSS Variables)\
  Jan 20, 2026 — Layer 1: Base Tokens (Primitives) Raw values with no semantic meaning. These are your palette.\
  \
  www.maviklabs.com

- [link](https://zoewave.medium.com/material-3-design-system-e91a15d303a0)\
  Material 3 Design System. Personal, Adaptive, and Expressive by… | by YLabZ | Medium\
  Oct 31, 2025 — sys. color. primary might point to a reference token like md. ref. palette. primary40 . This layer defines the character and logic...\
  \
  \
  Medium

- [link](https://www.boldare.com/blog/design-tokens-explained/)\
  Design tokens explained: a practical guide\
  Jun 2, 2026 — Global tokens Global tokens are raw values – they define every possible value in your visual palette, every colour, every spacing ...\
  \
  \
  Boldare

Show all

## You said: i mean ref-palette-blue-1, sys-color-accent or ref-color-blue-1, sys-color-accent

Use **ref-palette-blue-1** and **sys-color-accent**.

Using `palette` for your reference layer is highly superior to using `color` for both tiers.

### 🔍 Why "palette" is better than "color" for reference tokens

- **Prevents Namespace Clashes**: If you use `ref-color` and `sys-color`, your code and auto-complete dropdowns get cluttered with the word "color" everywhere.
- **Instant Visual Clarity**: Developers and designers instantly know that `palette` means a raw, static hue value, while `sys-color` means a dynamic, semantic value.
- **Matches Industry Standards**: Major design frameworks (like Google's Material Design 3) explicitly use the term **"Ref Palette"** (Reference Palette) to feed into system tokens.

### 📐 Example of how they map together

json

```
{
  "ref-palette-blue-500": "#007BFF",
  "sys-color-accent": "{ref-palette-blue-500}"
}
```

Use code with caution.

***

To help you lock down the exact naming convention, could you tell me:

- Are you using **numbers like 1, 2, 3** or **scales like 100, 200, 300** for your palette?
- Do you plan to add **component-level tokens** (like `comp-button-bg`) later on?

# how to create a file link in markdown that contain spaces

To create a file link in Markdown that contains spaces, you must <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">encode the spaces or wrap the path to prevent the link from breaking</mark>. \[[1](https://www.reddit.com/r/ObsidianMD/comments/1mj1vp7/why%5Fdo%5Finternal%5Fand%5Fexternal%5Flinks%5Ftext/)]

### Method 1: Percent-Encoding (Recommended)

Replace every space in your file path with `%20`. This is the most universal and web-standard method. \[[1](https://github.com/microsoft/vscode/issues/235422)]

- **Format:** `[Link Text](path/to/my%20file.md)`
- **Example:** `[Read Notes](documents/meeting%20notes%202026.md)`

### Method 2: Angle Brackets (Extended Markdown)

Enclose the entire path inside angle brackets `< >`. This works in GitHub, Obsidian, and many modern Markdown editors. \[[1](https://www.codecademy.com/resources/docs/markdown/links), [2](https://github.com/facebook/docusaurus/issues/8867), [3](https://obsidian.md/help/links), [4](https://www.phpkb.com/features/markdown-support)]

- **Format:**
- **Example:**

### Method 3: Reference-Style Links

Define the link at the bottom of your document using percent-encoding or angle brackets to keep your main text clean. \[[1](https://www.markdowntutorial.com/lesson/3/)]

- **Format in text:** `[Read Notes][notes]`
- **Format at bottom:** `[notes]: documents/meeting%20notes%202026.md`

### Method 4: HTML Anchor Tags

Use standard HTML if your Markdown renderer supports it. Space characters are automatically handled by browser engines. \[[1](https://www.markdownguide.org/basic-syntax/)]

- **Format:**

***

To help tailor this, let me know **which platform or editor** you are using (e.g., GitHub, Obsidian, VS Code) so I can recommend the **best method for your environment**.

- [link](https://www.reddit.com/r/ObsidianMD/comments/1mj1vp7/why%5Fdo%5Finternal%5Fand%5Fexternal%5Flinks%5Ftext/)\
  Why do internal and external links text replacements have different syntaxes in Obsidian markdown? : r/ObsidianMD\
  Aug 6, 2025 — With regards to your markdown links not working the same when there are spaces, it is because markdown links need to encode these ...\
  \
  Reddit
- [link](https://github.com/microsoft/vscode/issues/235422)\
  Format markdown links containing space in filename \[]\(<>) without greater and smaller sign and maintain URL encoding · Issue #235422 · microsoft/vscode\
  Dec 5, 2024 — Replace: %20 to find all spaces in Markdownlinks and replace it with %20. Replace ]\(< with ]\( and also >) with ) .\
  \
  \
  GitHub
- [link](https://www.codecademy.com/resources/docs/markdown/links)\
  Markdown | Links\
  Aug 5, 2021 — 2. How do you Markdown a URL with spaces? Either encode spaces as %20 or enclose the entire URL in angle brackets: . For file path...\
  \
  Codecademy

Show all

# 

