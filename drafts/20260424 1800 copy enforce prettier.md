#

how to config to make all code blocks backticks not indentation

To configure your environment to use backticks (fenced code blocks) instead of 4-space indentation, you generally need to <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">adjust settings in your specific <strong>Markdown linter</strong>, <strong>formatter</strong>, or <strong>text editor</strong></mark>.

1\. Markdown Linting (Recommended)

If you use **[markdownlint](https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md)** (a common tool for VS Code, CI/CD, and CLI), you can enforce backticks by configuring **Rule MD046**.

- **Configuration**: Add or edit a `.markdownlint.json` file in your project root.

- **Settings**:\
  json

<!---->

```
{
  "MD046": { "style": "fenced" }
}
```

Use code with caution.\
This setting ensures that all code blocks must be fenced (using triple backticks \`\`\`); indented code blocks will be flagged as errors.

2\. VS Code Editor Settings

In **Visual Studio Code**, you can change how the editor handles Markdown formatting or snippets:

- **Keyboard Shortcut**: Instead of indenting manually, use **`Cmd + E`** (Mac) or **`Ctrl + E`** (Windows) to automatically insert triple backticks for a code block.
- **Formatter**: If you use [Prettier](https://prettier.io/), it typically defaults to fenced code blocks unless configured otherwise. Check your `.prettierrc` for any overrides that might be forcing indentation.

3\. Tool-Specific Configurations

Different tools have unique ways to handle this preference:

import \* as prettier from 'prettier/standalone';\
import \* as prettier\_plugin\_markdown from 'prettier/plugins/markdown';

To ensure **Prettier** converts all indented code blocks to backtick (fenced) code blocks in Markdown, you don't need a specific "backtick-only" flag. Prettier's [Markdown support](https://prettier.io/blog/2017/11/07/1.8.0.html) defaults to using **triple backticks** (fenced blocks) for code by design.

If you are seeing indented blocks, it is likely because the input Markdown is ambiguous or your current implementation isn't triggering a full re-format. Using the **standalone** version with the **markdown plugin**, you can force this behavior by passing the correct `parser` and `plugins` in your `format` call.

Implementation Example

javascript

````
import * as prettier from 'prettier/standalone';
import * as prettier_plugin_markdown from 'prettier/plugins/markdown';

async function formatMarkdown(text) {
  const formatted = await prettier.format(text, {
    parser: 'markdown',
    plugins: [prettier_plugin_markdown],
    // Optional: ensures consistent wrapping of non-code text
    proseWrap: 'always',
  });
  return formatted;
}

const input = '    console.log("I am currently indented");';
formatMarkdown(input).then(console.log);
// Output will be:
// ```
// console.log("I am currently indented");
// ```
````

Use code with caution.

Key Configuration Points

- **Automatic Conversion**: Prettier naturally prefers fenced code blocks (backticks) over indented ones because fenced blocks support [syntax highlighting identifiers](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) (e.g., \`\`\`\`\`\`\`js\`\`\`\`), which indented blocks do not.
- **Standalone Requirements**: In the browser or a standalone environment, you **must** explicitly include the `prettier_plugin_markdown` in the `plugins` array and set `parser: 'markdown'` for the formatting logic to apply.
- **Standard Formatting**: Unlike some other tools, Prettier does not have a "no-indented-blocks" toggle because its [opinionated nature](https://prettier.io/docs/options) defaults to fenced blocks as the cleaner, modern standard.

Would you like to see how to **automatically detect the language** for those backtick blocks during the formatting process?

- [link](https://prettier.io/docs/options#:~:text=Setting%20max%5Fline%5Flength%20in%20an%20.,behavior%20is%20known%20as%20SmartTabs.%29)\
  Options - Prettier\
  Setting max\_line\_length in an . editorconfig file will configure Prettier's print width, unless overridden. (If you don't want lin...\
  Prettier
- [link](https://prettier.io/docs/plugins#:~:text=Here's%20a%20simplified%20example%20to,%7D)\
  Plugins - Prettier\
  Here's a simplified example to give an idea of what a typical implementation of print looks like: import \* as prettier from "prett...\
  Prettier
- [link](https://prettier.io/blog/2017/11/07/1.8.0.html)\
  Prettier 1.8: Markdown Support\
  7 Nov 2017 — We've also cleaned up the logging substantially since 1.7. \* $ prettier --loglevel=debug blarg. \* $ ./bin/prettier.js --loglevel=d...\
  Prettier

Show all

it still outputs indented code blocks sometimes. how to force it.

To force Prettier to convert indented code blocks to backtick (fenced) blocks, you must <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">ensure that your input is parsed correctly as <strong>CommonMark</strong> or <strong>GitHub Flavored Markdown</strong></mark>, as Prettier's [Markdown support](https://prettier.io/blog/2017/11/07/1.8.0.html) is designed to prefer fenced blocks by default.

If you are still seeing indented blocks, it is typically because the code is **nested inside a list or a blockquote**. In these cases, Prettier may preserve indentation to maintain compatibility with specific Markdown specs like [CommonMark](https://talk.commonmark.org/t/we-should-abandon-indented-code-blocks/182), which treats 8-space indentation in lists as a code block.

How to "Force" Backticks

Since Prettier does not have a "disable-indented-blocks" flag, use these strategies to force the conversion:

1. **Add a Language Identifier**: Prettier will always use backticks if you provide a language tag (e.g., \`\`\`\`\`\`\`js\`\`\`\`) because indented blocks do not support [syntax highlighting hints](https://meta.stackoverflow.com/questions/387765/what-is-the-preferred-method-for-formatting-code).
2. **Explicitly Use Backticks in Source**: If you provide a raw string that already uses triple backticks, Prettier will maintain that format rather than "downgrading" it to indentation.
3. **Ensure Proper Newlines**: Indented blocks often persist because there isn't a clear [blank line](https://www.jetbrains.com/help/hub/markdown-syntax.html) separating them from the preceding text. Adding a newline before the code block helps the parser identify it as a distinct block that can be converted.

Standalone Implementation Check

Ensure your standalone call explicitly includes the parser. If the parser is missing or defaulted incorrectly, it may skip the logic that converts indentation to fences.

javascript

```
import * as prettier from 'prettier/standalone';
import * as prettier_plugin_markdown from 'prettier/plugins/markdown';

const result = await prettier.format(myMarkdownString, {
  parser: "markdown", // Explicitly set this
  plugins: [prettier_plugin_markdown],
  // Ensures code blocks within lists follow the same logic
  tabWidth: 2,
});
```

Use code with caution.

Limitations with Nested Code

- **Lists**: If your code is inside a list, Prettier might use indentation to avoid breaking the list structure in certain parsers.
- **Ignore Comments**: If a section is wrapped in `<!-- prettier-ignore -->`, Prettier will not touch the indentation, leaving it in its original (potentially indented) state.

Are these indented blocks occurring inside **numbered or bulleted lists**?

- [link](https://github.com/prettier/prettier/issues/3459#:~:text=CommonMark%20diverges%20from%20the%20original,item%20rather%20than%20.)\
  Markdown: Preserve code blocks within list items · Issue #3459\
  11 Dec 2017 — CommonMark diverges from the original Markdown syntax for code blocks in list items. (where 8-space indentation is indeed valid an...\
  GitHub
- [link](https://meta.stackoverflow.com/questions/387765/what-is-the-preferred-method-for-formatting-code#:~:text=Code%20fences%20satisfy%20a%20lot,to%20edit%20is%20an%20improvement.)\
  What is the preferred method for formatting code?\
  27 Jul 2019 — It is worth noting that both CTRL+K and the toolbar button still produce indented code blocks (for the feature request to change t...\
  Meta Stack Overflow
- [link](https://prettier.io/blog/2017/11/07/1.8.0.html#:~:text=JavaScript%E2%80%8B,/%2A)\
  Prettier 1.8: Markdown Support\
  7 Nov 2017 — JavaScript​ Fix indentation for JSDoc comments (#2470) by @maxdeviant​ This has been a long-time known issue with Prettier. When f...\
  Prettier

Show all

it does not seem to work. even if i put the indented code block into vscode and press format, it does not force it. is there a hard config to force conversion?

No, there is **no hard configuration flag** in Prettier to force this. Prettier is designed to be "idempotent" and safe; if it thinks converting an indented block to a fenced block might break the structure (like in complex nested lists), it will leave it alone.

However, you can force the behavior by using a **Markdown Linter** with an **autofix** feature, which is more aggressive than Prettier.

The Fix: Use Markdownlint (VS Code)

If you want VS Code to "force" this change on save or format, use the **[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)** extension.

1. **Install** the "markdownlint" extension by David Anson.

2. **Create** a file named `.markdownlint.json` in your project root (or edit your User Settings).

3. **Add this rule**:\
   json

<!---->

```
{
  "MD046": { "style": "fenced" }
}
```

Use code with caution.
4\. **To force the fix**: Open the Command Palette (`Cmd+Shift+P`), type **"markdownlint: Fix all-supported-problems"**, and hit Enter. This will physically rewrite indented blocks into backticks.

Why Prettier is failing you

Something went wrong and the content wasn't generated.

give me a node library to force it

To force all indented code blocks into backticks (fenced blocks) programmatically in Node.js, use **[remark](https://github.com/remarkjs/remark)**.

Unlike Prettier, which is conservative about rewriting your syntax, `remark` has a stringify engine that **always** defaults to fenced blocks. By running your Markdown through a simple `remark` pipeline, you can force the conversion before passing the result to Prettier.

The Solution: Remark + Remark-Stringify

Install the core libraries:

bash

```
npm install remark remark-stringify
```

Use code with caution.

Implementation Code

Use this as a pre-processing step for your `prettier` call:

javascript

````
import { remark } from 'remark';
import remarkStringify from 'remark-stringify';

async function forceFencedBlocks(markdown) {
  const result = await remark()
    .use(remarkStringify, {
      // remark-stringify defaults to backticks (fences)
      // This will convert all indented blocks to ```
      fences: true,
    })
    .process(markdown);

  return result.toString();
}

// Usage Example
const input = "    const x = 10; \n    console.log(x);"; // Indented block
const forcedMarkdown = await forceFencedBlocks(input);

console.log(forcedMarkdown);
/* Output:
````

Use code with caution.

const x = 10;\
console.log(x);

```
*/
```

Why this works

- **AST Rewriting**: `remark` parses your Markdown into a syntax tree (MDAST). In the tree, an "Indented Code Block" and a "Fenced Code Block" are often treated as the same node type (`code`). [remark-stringify](https://github.com/remarkjs/remark/tree/main/packages/remark-stringify) defaults to outputting these nodes as fenced blocks.
- **Consistency**: This library is much more aggressive than Prettier. It won't care if the block is nested in a list; it will prioritize the "fenced" style.

Integrating with your Prettier code

If you want to keep using your `prettier/standalone` setup, just chain them:

javascript

```
const forced = await forceFencedBlocks(rawInput);
const final = await prettier.format(forced, {
  parser: "markdown",
  plugins: [prettier_plugin_markdown],
});
```

Use code with caution.

Would you like a version of this script that also **automatically detects the language** (e.g., adding \`\`\`\`\`\`\`js\`\`\`\`) for these blocks?

- [link](https://github.com/remarkjs/remark-lint/blob/main/packages/remark-lint-code-block-style/readme.md#:~:text=type%20Style%20=%20'indented'%20%7C,Out)\
  readme.md - remark-lint-code-block-style - GitHub\
  type Style = 'indented' | 'fenced' Recommendation. Indentation in markdown is complex as lists and indented code interfere in unex...\
  GitHub
- [link](https://www.npmjs.com/package/remark-lint-code-block-style#:~:text=type%20Style%20=%20'indented'%20%7C,Out)\
  remark-lint-code-block-style - NPM\
  27 Jan 2025 — type Style = 'indented' | 'fenced' Recommendation. Indentation in markdown is complex as lists and indented code interfere in unex...\
  NPM
- [link](https://www.youtube.com/watch?v=9eucl-HyNAM\&t=21)\
  \#8 — Code Blocks + Syntax Highlighting — Mastering ...\
  4 Mar 2016 — so first of all if you have a block of code what you can say is like here is my code. and just take those. and you can index it an...\
  \
  1m\
  YouTube·Wes Bos

Show all

#

how to config remark.use.process to enforce rules like - unordered lists \_ italic and more to align with prettier defaults

To configure **remark** to align with [Prettier's](https://prettier.io/) default Markdown formatting—specifically using **hyphens (`-`)** for unordered lists and **underscores (`_`)** for italics—you must pass specific options to the [remark-stringify](https://www.npmjs.com/package/remark-stringify) plugin or use the `settings` property in your unified pipeline.

Configuration for `remark.process`

By default, [remark-stringify](https://github.com/remarkjs/remark/tree/main/packages/remark-stringify) uses asterisks (`*`) for both bullets and emphasis. To match Prettier, apply these settings:

javascript

```
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'

const file = await unified()
  .use(remarkParse)
  .use(remarkStringify, {
    bullet: '-',           // Prettier default for unordered lists
    emphasis: '_',         // Prettier default for italics
    strong: '*',           // Prettier default for bold (double asterisks)
    fences: true,          // Use fenced code blocks
    incrementListMarker: true // Automatically increment ordered list numbers
  })
  .process('your markdown content')

console.log(String(file))
```

Use code with caution.

Key Formatting Rules

- **Unordered Lists**: Prettier uses the hyphen (`-`) as its standard bullet marker.
- **Italics (Emphasis)**: Prettier defaults to underscores (`_`) because they have stricter "flanking" rules that prevent accidental mid-word formatting.
- **Bold (Strong)**: Prettier uses double asterisks (`**`) for bold text.
- **Ordered Lists**: Prettier typically formats ordered lists sequentially (1., 2., 3.) rather than using a static "1." for every item.

Enforcing Rules with `remark-lint`

If you want to **warn** or **error** when these styles aren't followed (rather than just auto-fixing them during stringification), you can add specific [remark-lint](https://github.com/remarkjs/remark-lint) plugins:

1. **[remark-lint-unordered-list-marker-style](https://github.com/remarkjs/remark-lint/blob/master/packages/remark-lint-unordered-list-marker-style/readme.md)**: Configure with `'-'`.
2. **remark-lint-emphasis-marker**: Configure with `'_'`.

Alternative: `remark-prettier`

If you want to ensure 1:1 parity without manual configuration, you can use [remark-prettier](https://github.com/remcohaszing/remark-prettier), which integrates the Prettier engine directly into the [remark](https://remark.js.org/) workflow.

Would you like help setting up a **pre-commit hook** to automate this formatting?

- [link](https://github.com/prettier/prettier/discussions/18741#:~:text=sunnypatell-,on%20Feb%2011,Give%20feedback.)\
  How can I change the Markdown emphasis from \_ to \* ? #18741\
  11 Feb 2026 — on Feb 11. - @lovemilk2333 prettier doesn't have a config option for this, and the team has explicitly rejected adding one. their ...\
  GitHub
- [link](https://github.com/remarkjs/remark-lint#:~:text=remark%2Dlint%2Dno%2Dunneeded,heading%20matches%20the%20directory%20name)\
  remarkjs/remark-lint: plugins to check (lint) markdown code style\
  10 Apr 2025 — remark-lint-no-unneeded-full-reference-link — check that full reference links can be collapsed. remark-lint-no-unused-definitions ...\
  GitHub
- [link](https://prettier.io/blog/2017/11/07/1.8.0.html#:~:text=Lists,to%20optimize%20for%20cleaner%20diffs.)\
  Prettier 1.8: Markdown Support\
  7 Nov 2017 — Lists. When rearranging list items, after running Prettier all the numbers will be fixed! Note: you can actually opt out of this b...\
  Prettier

Show all

why .use(remarkParse) i feel i can omit it

You can’t omit it because **remark** needs a "bridge" to turn your raw string into something it understands.

Here is the breakdown of why `remark-parse` is required:

1. **The AST Pipeline:** `unified` is an empty shell. It doesn't know what "Markdown" is. `remark-parse` takes your string and turns it into a **Syntax Tree (mdast)**.
2. **No Tree, No Transformation:** Without the parser, the subsequent plugins (like `remark-stringify` or linting rules) have no data structure to work on. They expect a tree, but they'd just be receiving a raw string.
3. **The Process Flow:**

- **`parse`**: String → Syntax Tree (`remark-parse`)
- **`run`**: Syntax Tree → Modified Syntax Tree (Linter/Plugins)
- **`stringify`**: Syntax Tree → New String (`remark-stringify`)

The Only Way to "Omit" It

The only time you don't explicitly call `.use(remarkParse)` is if you use the **`remark`** package instead of **`unified`**. The `remark` package is just a "preset" that comes with the parser and stringifier pre-installed:

javascript

```
import { remark } from 'remark'; // 'remark' already includes parse and stringify

const file = await remark()
  .data('settings', { bullet: '-', emphasis: '_' }) // Set your Prettier defaults here
  .process('- some list');
```

Use code with caution.

If you stick with the `unified` core package, you must include the parser to kick off the process.

Are you planning to run this in a **Node.js** environment or directly in the **browser**?

yeah, im exactly that. i feel it works wo parse.

If you are using the `remark` package (rather than `unified`), it **already includes** `remark-parse` and `remark-stringify` under the hood. In that specific case, you are right—you don't need to add them manually because they are baked in.

However, if you are using `unified` directly, omitting the parser will cause `.process()` to fail because there is no component to handle the **Parse** phase of the unified lifecycle.

How to tell the difference:

- **The "Baked-in" Way (`remark` package):**\
  If your code looks like this, you **can** omit it:\
  javascript

<!---->

```
import { remark } from 'remark'

// Works because 'remark' = unified + remark-parse + remark-stringify
const file = await remark()
  .data('settings', { bullet: '-' })
  .process('* item')
```

Use code with caution.

- **The "Core" Way (`unified` package):**\
  If your code looks like this, it **will fail** without `.use(remarkParse)`:\
  javascript

<!---->

```
import { unified } from 'unified'
import remarkStringify from 'remark-stringify'

// This throws an error: "Expected `parse` to be a function"
const file = await unified()
  .use(remarkStringify)
  .process('* item')
```

Use code with caution.

Why it might "feel" like it works

If you are passing an **existing Syntax Tree (AST)** instead of a string to the processor, the parse step is skipped entirely. But for raw Markdown strings, someone has to turn that text into a tree.

Are you using a **configuration file** (like `.remarkrc`) or calling it via **CLI**? That might also be why the parser is being handled automatically for you.

#

how to enforce two spaces indentation markdown = (await remark() .use(remarkStringify, { bullet: '-', // Prettier default for unordered lists emphasis: '\_', // Prettier default for italics strong: '\*', // Prettier default for bold (double asterisks) fences: true, // Use fenced code blocks incrementListMarker: true // Automatically increment ordered list numbers }) .process(markdown)).toString();

To enforce two-space indentation in your Markdown output using `remark-stringify`, you should use the `listItemIndent` option.

Setting `listItemIndent: 'one'` (which is the default in newer versions of [remark-stringify](https://github.com/remarkjs/remark/blob/main/packages/remark-stringify/readme.md)) will typically result in a two-space visual indentation for nested lists (e.g., `-` followed by 1 space). If you want to strictly control the number of spaces for deeper levels or specific list types, you can pass these settings to the plugin or through the `unified` data store.

Updated code block:

javascript

```
markdown = (await remark()
  .use(remarkStringify, {
    bullet: '-',
    emphasis: '_',
    strong: '*',
    fences: true,
    incrementListMarker: true,
    // Add this to control list item indentation
    listItemIndent: 'one'
  })
  .process(markdown)).toString();
```

Use code with caution.

Key Options for Indentation

- **`listItemIndent`**: Determines how content after a list marker is indented.
  - `'one'`: Indents content with one space after the bullet (results in 2 spaces total for standard bullets).
  - `'tab'`: Uses a full tab stop (usually 4 spaces).
  - `'mixed'`: Uses one space for tight lists and a tab for loose lists.
- **Handling Code Blocks**: Use `fences: true` (already in your code) to avoid the standard 4-space indentation used for non-fenced code blocks in [CommonMark](https://www.markdownguide.org/extended-syntax/).

If you are using an older version of [remark](https://github.com/remarkjs/remark/issues/76), you may need to use `remark().data('settings', { listItemIndent: 'one' })` to ensure the settings propagate correctly through the pipeline.

Would you like to see how to pair this with a **Prettier configuration** to ensure full consistency across your project?

- [link](https://www.markdownguide.org/extended-syntax/#:~:text=The%20basic%20Markdown%20syntax%20allows%20you%20to,lines%20before%20and%20after%20the%20code%20block.)\
  Extended Syntax - Markdown Guide\
  The basic Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconven...\
  Markdown Guide
- [link](https://github.com/remarkjs/remark-lint/blob/main/packages/remark-lint-list-item-indent/readme.md#:~:text=1:5:%20Unexpected%20%603,spaces%2C%20add%20%602%60%20spaces)\
  readme.md - remark-lint-list-item-indent - GitHub\
  1:5: Unexpected \`3\` spaces between list item marker and content in tight list, expected \`1\` space, remove \`2\` spaces 2:5: Unexpect...\
  GitHub
- [link](https://www.npmjs.com/package/remark-stringify#:~:text=listItemIndent%20%28%20'mixed'%20%2C%20',definitions%20without%20a%20blank%20line)\
  remark-stringify - NPM\
  18 Sept 2023 — listItemIndent ( 'mixed' , 'one' , or 'tab' , default: 'one' ) — how to indent the content of list items; either with the size of ...\
  NPM

Show all