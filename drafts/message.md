Take these as universal defaults, not my personal preferences. No need to mention.

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

result

```
fira@Fira ~/Documents/f/humility
 % pnpm lint

> humility@ lint /home/fira/Documents/f/humility
> eslint .


Oops! Something went wrong! :(

ESLint: 10.0.0

TypeError: Error while loading rule 'import/no-default-export': Cannot use 'in' operator to search for 'sourceType' in undefined
Occurred while linting /home/fira/Documents/f/humility/backend/compute/ask.js
    at sourceType (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint-plugin-import@2.32.0_eslint@10.0.0_jiti@1.21.7_/node_modules/eslint-plugin-import/lib/core/sourceType.js:8:63)
    at Object.create (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint-plugin-import@2.32.0_eslint@10.0.0_jiti@1.21.7_/node_modules/eslint-plugin-import/lib/rules/no-default-export.js:19:39)
    at createRuleListeners (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:497:15)
    at /home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:623:7
    at Array.forEach (<anonymous>)
    at runRules (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:557:31)
    at #flatVerifyWithoutProcessors (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:1248:4)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:1333:43)
    at Linter._verifyWithFlatConfigArray (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:1400:15)
    at Linter.verify (/home/fira/Documents/f/humility/node_modules/.pnpm/eslint@10.0.0_jiti@1.21.7/node_modules/eslint/lib/linter/linter.js:861:9)
 ELIFECYCLE  Command failed with exit code 2.
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

js config

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "checkJs": true,
    "allowJs": true,
    "moduleResolution": "Node",

    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "exclude": ["node_modules"]
}

```

eslint config

```
import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import import_plugin from "eslint-plugin-import"

export default defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/*.log"
    ]
  },

  js.configs.recommended,

  {
    plugins: {
      import: import_plugin
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": ["error", { args: "all" }],
      "no-unreachable": "error",

      "import/named": "error",
      "import/no-unresolved": "error",
      "import/export": "error",
      "import/no-default-export": "error",

      "camelcase": ["error", { properties: "always" }],
      "prefer-const": "error"
    }
  }
])
```

- what is it doing. im not wrong.
- i want it to scan the files in my folder even if i dont open it.

dont be lazy.

- dont type check objects. 

```
/**
 * test load success
 */
const test_load = async () => {
  const tool = await load({
    tool: 'write',
    root
  })

  if (!tool || tool.name !== 'write')
    throw new Error('failed to load write')

  console.log('ok — load write')
}
```

it says tools is object. object does not have name.

```
const run = async () => {
  log({ message: `Ask: ${prompt}` });

  try {
    const { result } = await ask({ prompt });
    log({ message: `Test response: ${result}` });
  } catch (err) {
    log({ message: `Test failed: ${err.message}` });
  }
};
```

it says error is type unknown. 

- these rules are llm generated. it's likely that i dont need some, and some i need is missing.

---

- hey dont check legacy archive.
- console is not defined. are you joking?

```
{
  "files.exclude": {
    "**/node_modules/**": true,
    "**/legacy/**": true,
    "**/.git": true,
    "**/.vscode": true
  },
  "search.exclude": {
    "**/node_modules/**": true,
    "**/legacy/**": true,
    "**/.git": true,
    "**/.vscode": true
  }
}
```

```
fira@Fira ~/Documents/f/humility
 % pnpm lint

> humility@ lint /home/fira/Documents/f/humility
> eslint .


/home/fira/Documents/f/humility/backend/compute/test/load.js
  22:3  error  'console' is not defined  no-undef
  43:3  error  'console' is not defined  no-undef

/home/fira/Documents/f/humility/backend/compute/test/tools.js
   27:37  error  'process' is not defined  no-undef
  106:3   error  'console' is not defined  no-undef
  109:35  error  'process' is not defined  no-undef

/home/fira/Documents/f/humility/backend/connect/chatgpt.js
  14:19  error  'document' is not defined  no-undef
  21:17  error  'document' is not defined  no-undef
  27:29  error  'Event' is not defined     no-undef

/home/fira/Documents/f/humility/backend/connect/ollama.js
  18:11  error  Empty block statement   no-empty
  20:21  error  'fetch' is not defined  no-undef

/home/fira/Documents/f/humility/backend/connect/send.js
  18:18  error  '_' is defined but never used  no-unused-vars
  19:7   error  'setTimeout' is not defined    no-undef

/home/fira/Documents/f/humility/backend/connect/test/browse.js
   9:3   error  'console' is not defined  no-undef
  13:15  error  'console' is not defined  no-undef
  14:10  error  'console' is not defined  no-undef

/home/fira/Documents/f/humility/backend/connect/test/send.js
  10:3  error  'console' is not defined  no-undef

/home/fira/Documents/f/humility/backend/log.js
  47:25  error  'URL' is not defined      no-undef
  52:5   error  'console' is not defined  no-undef
  57:5   error  'console' is not defined  no-undef
  61:3   error  'console' is not defined  no-undef

/home/fira/Documents/f/humility/backend/store/init.js
   39:30  error  'setTimeout' is not defined  no-undef
   68:5   error  'console' is not defined     no-undef
   80:3   error  'console' is not defined     no-undef
   98:11  error  Empty block statement        no-empty
  128:3   error  'console' is not defined     no-undef

/home/fira/Documents/f/humility/backend/store/test/test.js
   6:3  error  'console' is not defined  no-undef
   7:3  error  'console' is not defined  no-undef
   9:3  error  'console' is not defined  no-undef
  11:3  error  'console' is not defined  no-undef
  13:3  error  'console' is not defined  no-undef
  26:3  error  'console' is not defined  no-undef
  27:3  error  'console' is not defined  no-undef
  29:3  error  'process' is not defined  no-undef

/home/fira/Documents/f/humility/eslint.config.js
  1:30  error  Unable to resolve path to module 'eslint/config'  import/no-unresolved

/home/fira/Documents/f/humility/frontend/vite.config.js
  2:19  error  Unable to resolve path to module '@vitejs/plugin-react'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/compute 20260205/agent.js
  3:24  error  Unable to resolve path to module '../store/flow.js'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/compute 20260205/ask.js
   2:22  error  Unable to resolve path to module '../connect/send.js'  import/no-unresolved
   3:23  error  Unable to resolve path to module '../store/flow.js'    import/no-unresolved
  17:24  error  '_' is defined but never used                          no-unused-vars
  18:13  error  'setTimeout' is not defined                            no-undef

/home/fira/Documents/f/humility/legacy/compute 20260205/parse.js
  2:10  error  'readFile' is defined but never used                 no-unused-vars
  3:25  error  Unable to resolve path to module 'unified'           import/no-unresolved
  4:25  error  Unable to resolve path to module 'remark-parse'      import/no-unresolved
  5:23  error  Unable to resolve path to module 'unist-util-visit'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/compute 20260205/prompt.js
  1:50  error  'turn' is defined but never used  no-unused-vars

/home/fira/Documents/f/humility/legacy/compute 20260205/run.js
   7:3  error  'console' is not defined  no-undef
  19:3  error  'console' is not defined  no-undef
  22:3  error  'console' is not defined  no-undef
  25:5  error  'console' is not defined  no-undef
  30:3  error  'console' is not defined  no-undef
  33:3  error  'console' is not defined  no-undef

/home/fira/Documents/f/humility/legacy/compute 20260205/test/ask.js
   3:23  error  Unable to resolve path to module '../../store/flow.js'  import/no-unresolved
   7:5   error  'console' is not defined                                no-undef
  10:5   error  'console' is not defined                                no-undef
  12:5   error  'console' is not defined                                no-undef
  15:5   error  'console' is not defined                                no-undef
  16:5   error  'console' is not defined                                no-undef
  18:5   error  'console' is not defined                                no-undef
  20:5   error  'console' is not defined                                no-undef
  25:35  error  'process' is not defined                                no-undef

/home/fira/Documents/f/humility/legacy/compute 20260205/test/parse.js
  26:5  error  'console' is not defined  no-undef

/home/fira/Documents/f/humility/legacy/store 20260205/db.js
  4:24  error  Unable to resolve path to module '@electric-sql/pglite'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/store 20260205/link.js
  1:28  error  Unable to resolve path to module 'uuid'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/store 20260205/session.js
  1:28  error  Unable to resolve path to module 'uuid'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/store 20260205/test/flow.js
  35:3  error  'console' is not defined  no-undef
  39:3  error  'console' is not defined  no-undef
  40:3  error  'process' is not defined  no-undef

/home/fira/Documents/f/humility/legacy/store 20260205/test/see.js
  36:5  error  'console' is not defined  no-undef
  37:5  error  'console' is not defined  no-undef
  39:5  error  'console' is not defined  no-undef
  40:5  error  'console' is not defined  no-undef
  42:5  error  'console' is not defined  no-undef
  43:5  error  'console' is not defined  no-undef
  45:5  error  'process' is not defined  no-undef
  48:5  error  'console' is not defined  no-undef
  49:5  error  'process' is not defined  no-undef

/home/fira/Documents/f/humility/legacy/store 20260205/thing.js
  1:28  error  Unable to resolve path to module 'uuid'  import/no-unresolved

/home/fira/Documents/f/humility/legacy/try integration userscript dog fetch/scripts/dog.js
  12:16  error  'location' is not defined    no-undef
  26:29  error  'setTimeout' is not defined  no-undef
  35:27  error  'fetch' is not defined       no-undef
  50:17  error  'fetch' is not defined       no-undef
  77:5   error  'location' is not defined    no-undef
  78:3   error  'dog' is not defined         no-undef
  80:14  error  'document' is not defined    no-undef

/home/fira/Documents/f/humility/script/run.js
  23:1  error  'setTimeout' is not defined  no-undef

✖ 85 problems (85 errors, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1.
```

- i mean vscode should not be lazy. it should show errors in project level. it's hard but you should find a workaround.

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

write a lib fn in computer graphics. test. self correct.

prepare: test.

plan: tell reply in yaml. give tools. give tree and context. tell it to write context. (give prev tool results.)

ask.

parse.

act.



