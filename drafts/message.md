Take these as conventions, not personal preferences. You must not mention. You must not say you are following these style.

- environment:
  - ubuntu
  - zsh
  - pnpm
- style:
  - follow verb noun naming convention. use one simple english word for all methods whenever possible (not conflicting). 
  - always use snake case. never use camel case or pascal case.
  - use functional programming
  - be modular and cohesive
  - prefer object params
  - prefer async
  - use es module, always named, never default.
  - use jsdoc
  - for void, never write `undefined` or `null`. just omit.

---

im creating humility, an autonomous continuous ai agent.

---

folder shape.

```
fira@Fira ~/Documents/f/humility
 % tree -I 'node_modules|legacy'

.
├── backend
│   ├── compute
│   │   ├── ask.js
│   │   ├── load.js
│   │   ├── parse.js
│   │   ├── spec.md
│   │   ├── test
│   │   │   ├── ask.js
│   │   │   ├── load.js
│   │   │   ├── parse.js
│   │   │   └── tools.js
│   │   └── tools
│   │       ├── edit.js
│   │       ├── read.js
│   │       ├── shell.js
│   │       └── write.js
│   ├── connect
│   │   ├── browser.js
│   │   ├── chatgpt.js
│   │   ├── deepseek.js
│   │   ├── listen.js
│   │   ├── ollama.js
│   │   ├── readme.md
│   │   ├── send.js
│   │   ├── sessions.js
│   │   └── test
│   │       ├── browse.js
│   │       └── send.js
│   ├── humility.log
│   ├── log.js
│   ├── package.json
│   ├── readme.md
│   ├── reference.md
│   ├── serve
│   │   └── serve.js
│   ├── spec.md
│   ├── store
│   │   ├── index.js
│   │   ├── init.js
│   │   ├── moves.js
│   │   ├── schema.js
│   │   ├── sessions.js
│   │   └── test
│   │       └── test.js
│   └── types.d.ts
├── eslint.config.js
├── frontend
│   ├── app.jsx
│   ├── design
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── readme.md
│   ├── index.html
│   ├── main.jsx
│   ├── package.json
│   ├── postcss.config.js
│   ├── readme.md
│   ├── storybook.jsx
│   ├── tailwind.config.js
│   ├── tailwind.css
│   └── vite.config.js
├── jsconfig.json
├── misc
│   └── document.md
├── notes.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── readme.md
├── roadmap.md
└── script
    ├── ports.js
    └── run.js

14 directories, 60 files
```

---

types.d.ts

```
type ok = { type: 'ok'; value?: any }
type err = { type: 'err'; error: string }
export type result = ok | err

export type context = {
  working_directory: string
}
```

load it load this

```
/** @typedef {import('path/to/types').result} result */
```

ask

```
import { send } from "../connect/send.js";

/**
 * ask — sends a prompt to a model and returns the markdown result
 * @param {object} options
 * @param {string} options.prompt
 * @param {string} [options.model]
 * @param {number} [options.timeout]
 */
export const ask = async ({ prompt, model, timeout }) => {
  const result = await send({
    message: prompt,
    model,
    timeout,
  });

  return { result };
};
```

test/ask

```
// test/ask.js
import { ask } from "../ask.js";
import { log } from "../../log.js";

const prompt = "hello, what can you do";

const run = async () => {
  log({ message: `Ask: ${prompt}` });

  try {
    const { result } = await ask({ prompt });
    log({ message: `Test response: ${result}` });
  } catch (err) {
    log({ message: `Test failed: ${err.message}` });
  }
};

run();
```

send 

```
// todo: feat (secure): cleanup after timeout failure.

import * as chatgpt from "./chatgpt.js";
import * as deepseek from "./deepseek.js";
import * as ollama from "./ollama.js";

const DEFAULT_TIMEOUT = 90_000;

/**
 * with_timeout — wraps an async function with a timeout
 * @param {object} options
 * @param {function(): Promise<any>} options.task
 * @param {number} options.ms
 */
export const with_timeout = async ({ task, ms }) => {
  return Promise.race([
    task(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), ms)
    ),
  ]);
};

/**
 * send — sends a message to a model with timeout protection
 * @param {object} options
 * @param {string} options.message
 * @param {string} [options.model="chatgpt"]
 * @param {number} [options.timeout=90000]
 */
export const send = async ({
  message,
  model = "chatgpt",
  timeout = DEFAULT_TIMEOUT,
}) => {
  const sites_map = {
    chatgpt,
    deepseek,
    ollama,
  };

  const site = sites_map[model];

  if (!site || typeof site.send !== "function") {
    throw new Error(`invalid model: ${model}`);
  }

  return with_timeout({
    task: () => site.send(message),
    ms: timeout,
  });
};
```

log

```
// log.js
import fs from "fs";

/**
 * Append a timestamped log line to humility.log and print to console.
 *
 * @async
 * @function log
 * @param {object} params - Log parameters.
 * @param {string} params.message - The message to record.
 * @param {"info"|"warn"|"error"|"debug"} [params.level="info"] - Log severity level.
 * @param {string} [params.location] - Optional location string (file and/or function).
 * @returns {Promise<void>}
 *
 * @example
 * await log({
 *   message: "agent start"
 * });
 * // 2026-02-19T12:00:00.000Z INFO agent start
 *
 * @example
 * await log({
 *   level: "warn",
 *   location: "compute/ask.js:run",
 *   message: "model slow response"
 * });
 * // 2026-02-19T12:00:01.000Z WARN compute/ask.js:run model slow response
 */
export const log = async ({
  message,
  level = "info",
  location = "",
}) => {
  const time = new Date().toISOString();
  const upper_level = level.toUpperCase();
  const clean_message = message.replace(/\s+/g, " ").trim();

  const parts = [
    time,
    upper_level,
    location,
    clean_message,
  ].filter(Boolean);

  const line = parts.join(" ") + "\n";

  const file_path = new URL("./humility.log", import.meta.url);

  await fs.promises.appendFile(file_path, line, "utf-8");

  if (upper_level === "ERROR") {
    console.error(line.trim());
    return;
  }

  if (upper_level === "WARN") {
    console.warn(line.trim());
    return;
  }

  console.log(line.trim());
};
```

edit.

use the result type. use the updated log. 

ask dont log. test/ask log.



---

compute spec.

````
## compute — implementation spec

---

### 0. purpose

`compute` defines the core runtime of the agent.

It owns:

- continuity
- decision
- asking
- interpretation
- action

It does not own:

- storage implementation
- environment setup
- tool definitions
- intelligence content

Everything here is verbs.

---

### 1. directory

```
compute
├── begin.js
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── ask.js
├── parse.js
└── act.js
```

Each file exports exactly one verb.

---

### 2. begin

**file**
`begin.js`

**role**
entry point

**behavior**

- receives all external inputs
- passes everything directly to `prepare`
- receives prepared output
- passes prepared output to `loop`

`begin` contains no logic of its own.
It only chains `prepare → loop`.

---

### 3. prepare

**file**
`prepare.js`

**role**
initialization and wrapping

**behavior**

- initializes state
- loads config as-is
- state contains working directory
- receives decorators

decorators:

- each decorator declares a step name
- each decorator provides a decorator function
- decorators wrap verbs by step name
- wrapping happens only here

**output**

- state
- config
- wrapped verbs

`prepare` does not mutate state or config beyond initialization.

---

### 4. loop

**file**
`loop.js`

**role**
continuity

**behavior**

- runs continuously
- calls `decide`
- if decision is rest:

  - calls `rest`

- if decision is move:

  - calls `plan`
  - passes result to `ask`
  - passes markdown to `parse`
  - iterates tool calls
  - calls `act` once per tool call

- repeats

`loop` owns repetition and ordering only.

---

### 5. decide

**file**
`decide.js`

**role**
motion selection

**behavior**

- inspects state
- may inspect recent outcomes
- determines whether to move or rest

**output**

- move
- rest

This is the only place that chooses action vs stillness.

---

### 6. rest

**file**
`rest.js`

**role**
intentional inactivity

**behavior**

- takes no input
- returns no output

If undecorated, it performs no operation.

---

### 7. plan

**file**
`plan.js`

**role**
asking strategy

**behavior**

- receives state
- may inspect config
- constructs a prompt string
- decides how to ask

**output**

- a value consumed directly by `ask`

`plan` always outputs something.
`plan` does not request intelligence.

---

### 8. ask

**file**
`ask.js`

**role**
intelligence request

**behavior**

- receives output of `plan`
- sends prompt to a model
- receives markdown
- stores the interaction

**output**

- markdown

`ask` does not interpret responses.

---

### 9. parse

**file**
`parse.js`

**role**
interpretation

**behavior**

- receives markdown
- extracts all yaml code blocks
- converts them into an ordered list of tool calls

Non-tool content is ignored.

**output**

- list of tool calls (may be empty)

---

### 10. act

**file**
`act.js`

**role**
execution

**behavior**

- receives a single tool call
- invokes the specified tool with parameters
- observes the result
- stores the action and result

`act` executes exactly one tool call.
Iteration is controlled by `loop`.

---

### 11. decorators

Decorators are wrappers.

- decorators wrap verbs
- decorators are applied in `prepare`
- decorators are identified by step name
- decorators may observe, log, block, or substitute behavior

There is no event system.
There is no runtime registration.

---

### 12. boundaries

- compute defines flow
- intelligence defines decisions
- tools define effects
- storage records history

compute remains literal, finite, and readable.
````

---

this is the next checkpoint.

let the agent write a lib fn in computer graphics. test. self correct.

prepare: home/test.

plan: tell reply in yaml. give tools. give tree and context. tell it to write context. (give prev tool results.)

ask.

parse.

act. load the tool and call.

you give it one more tool called stop. 

if you parse it you stop.

write all the code.

(dont trust! although you can. decide the context first. plan first.)

---

what does rust tradeoff. see some code.

---

what are the folder names widely used across git repos

example

my pref

---

fix: chatgpt scroll.

remove system prompt (first msg, very short answer) since they dont carry meaning. assume they are auto picked (based on the general category). assume they are default.

---

what are quirks in english, like singular they.

---

what makes an app non trivial.

---



