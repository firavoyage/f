<!-- https://chatgpt.com/c/6979b095-fea4-8321-be3e-d9adc4ddfd63 -->

# 0

document it.

only include public methods.

only include the document in your answer. no more words.

dont put the document in a markdown code block.

notes are optional.

example:

```
`test/hello_world.js`

- `hello_world(message)`
  - say hello world with a message
  - string message: ...
  - returns void
- `connect()`
  - ...
  - ...
  - ...

notes:

- ...
- ...
- ...
```

compute/ask

```
// compute/ask.js
import { send } from "../connect/send.js";
import * as flow from "../store/flow.js";

/**
 * Send a message, store the prompt and response in the current session,
 * and return the new step id.
 *
 * @param {Object} params
 * @param {string} params.what - The message to send
 * @param {string} [params.where="chatgpt"] - Site key
 * @param {number} [params.timeout] - Optional timeout (ms)
 * @returns {Promise<string>} - thing id
 */
export async function ask({ what, where = "chatgpt", timeout }) {
  if (!what || typeof what !== "string") {
    throw new Error("ask: invalid what");
  }

  let answer = null;
  let status = "success";

  try {
    answer = timeout
      ? await Promise.race([
          send(what, where),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("timeout")), timeout)
          ),
        ])
      : await send(what, where);
  } catch (err) {
    status = err.message || "error";
  }

  const step = await flow.write("ask", {
    prompt: what,
    answer,
    status,
    where,
  });

  return step.id;
}
```

compute/parse

```
// compute/parse.js
import { readFile } from "fs/promises";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

/**
 * parse(markdown)
 *
 * Extract all code blocks of language "tool" from a Markdown string.
 *
 * @param {string} markdown - The Markdown content to parse.
 * @returns {Array<string>} - Array of code block contents with lang "tool".
 */
export function parse(markdown) {
    const ast = unified().use(remarkParse).parse(markdown);
    const blocks = [];

    visit(ast, "code", node => {
        if (node.lang === "tool") {
            blocks.push(node.value);
        }
    });

    return blocks;
}
```

---

`compute/ask.js`

- `ask({ what, where = "chatgpt", timeout })`

  - send a message, persist the prompt/response to the current flow session, and return the created step id
  - object params:

    - string what: message to send (required)
    - string where: site key to send to (default `"chatgpt"`)
    - number timeout: optional timeout in milliseconds

  - returns `Promise<string>`: step id

notes:

- throws an error if `what` is missing or not a string
- on send failure or timeout, the step is still written with a failure status

`compute/parse.js`

- `parse(markdown)`

  - parse markdown and extract all code blocks with language `"tool"`
  - string markdown: markdown content to parse
  - returns `Array<string>`: contents of matching code blocks

notes:

- uses a markdown AST traversal
- ignores all non-`tool` code blocks
