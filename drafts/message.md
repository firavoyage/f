Take these as universal defaults, not my personal preferences. No need to mention.

- ubuntu `home/fira`
- zsh
- pnpm
- es module (always named, never default)
- naming:
  - use one simple english word for all methods. add an objective or an adverb only if conflicting.
  - always use snake case. never use camel case or pascal case.
- style:
  - use functional programming
  - be modular and cohesive
  - prefer using an object as params

---

creating an autonomous continuous ai agent.

```
fira@Fira ~/Documents/f/humility
 % tree -I 'node_modules|legacy'

.
├── backend
│   ├── compute
│   │   ├── ...
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
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── readme.md
│   ├── reference.md
│   ├── serve
│   │   └── serve.js
│   ├── spec.md
│   └── store
│       ├── init.js
│       ├── moves.js
│       ├── schema.js
│       ├── sessions.js
│       └── test
│           └── test.js
├── frontend
│   ├── app.jsx
│   ├── design
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── readme.md
│   ├── index.html
│   ├── main.jsx
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── postcss.config.js
│   ├── readme.md
│   ├── storybook.jsx
│   ├── tailwind.config.js
│   ├── tailwind.css
│   └── vite.config.js
├── misc
│   └── document.md
├── notes.md
├── readme.md
├── roadmap.md
└── script
    ├── ports.js
    └── run.js
```

spec.

```
## autonomous continuous agent — implementation spec

### 0. principles

- the agent is **continuous**, not task-based
- at any moment, it either **moves** or **rests**
- resting means: _do nothing intentionally_
- there is no concept of “done” in the core
- history is append-only and never rewritten
- intelligence plans; tools change the world
- extensions observe or intercept; they never define core logic

---

### 1. runtime model

#### lifecycle

prepare → loop (infinite)

There is no internal termination.
The process may be stopped externally.

---

### 2. core functions

Only these functions exist in the core.

#### 2.1 prepare

**runs once**

**input**

- static config (hardcoded for now)
- working directory path

**process**

- initialize working directory
- load config into memory
- initialize empty state
- initialize memory access (postgres)

**output**

- agent context:

  - config
  - working directory
  - state
  - session id

---

#### 2.2 loop

**input**

- agent context

**process**

- call `decide`
- if decision is `rest` → call `rest`
- if decision is `move`:

  - call `plan`
  - call `request`
  - call `process`

- persist state
- repeat forever

**output**

- none

---

#### 2.3 decide

**input**

- current state
- memory (past moves in session)
- last result (optional)

**process**

- determine whether there is actionable work
- determine whether the agent must wait
- determine whether to stay idle

**output**

- `"move"` or `"rest"`

This is the only function that chooses action vs stillness.

---

#### 2.4 rest

**input**

- state

**process**

- do nothing intentionally
- optionally block, sleep, or wait

**output**

- unchanged state

Rest is reversible by external stimulus.

---

#### 2.5 plan

**input**

- state
- memory

**process**

- understand overall intention
- understand current progress
- select exactly one next step
- assemble the context needed for that step

**output**

- plan object:

  - intention
  - context
  - expected outcome

Evaluation happens here implicitly:
if no sensible step exists, no plan is produced.

---

#### 2.6 request

**input**

- plan
- context

**process**

- build prompt (spec, knowledge, structure)
- send request to a model
- retry on timeout

**output**

- response
- metadata (attempts, timing)

No side effects beyond communication.

---

#### 2.7 process

**input**

- response
- plan

**process**

- interpret response
- derive concrete actions
- execute actions (shell, file writes, edits)
- update working directory and state

**output**

- result:

  - actions taken
  - artifacts produced
  - observations

All real-world effects happen here.

---

### 3. extension model

Extensions are **intercepts**, not features.

The core must work fully with zero extensions.

#### extension contract

**input**

- phase name
- immutable snapshot of context
- mutable draft (optional)

**process**

- inspect
- optionally modify
- optionally block

**output**

- continue or stop
- possibly modified draft

---

#### extension phases

The core exposes fixed phase names:

- `after_prepare`
- `before_plan`
- `after_plan`
- `before_request`
- `after_request`
- `before_process`
- `before_action`
- `after_action`
- `after_process`
- `before_rest`
- `after_rest`

The core never assumes extensions exist.

---

### 4. persistence (postgres)

Postgres is the source of truth.

Only one module owns SQL.

---

#### 4.1 sessions

A session represents a continuous run.

**table: `session`**

- `id` — primary key
- `time` — creation timestamp
- `state` — json (current mutable state)
- `note` — optional text

Sessions are stable identities.
Only `state` evolves.

---

#### 4.2 moves

A move is an atomic event.

**table: `move`**

- `id` — primary key
- `time` — timestamp
- `type` — one word
- `session` — foreign key to session
- `data` — json (inputs, outputs, observations)

Moves are append-only.
History is never rewritten.

---

### 5. storage api

All functions take a single object as params.

#### sessions

- `list`

  - output: all sessions, ordered by time

- `create`

  - input: initial state, optional note
  - output: session id

---

#### moves

- `move`

  - input: session id, type, data
  - output: move id

- `see`

  - input: session id
  - output: ordered list of moves

Direct querying is intentional.

---

### 6. agent ↔ storage interaction

- a session is created in `prepare`
- every meaningful step records a move:

  - planning → `plan`
  - requesting → `request`
  - processing → `process`
  - resting → `rest`

- state is convenience
- moves are truth

---

### 7. moving forward in a session

“Move forward” is not a database operation.

It is:

- load session state
- load relevant moves
- run one loop iteration
- record resulting move(s)

This is replayable and inspectable.

---

### 8. non-goals (explicit)

- no task abstraction
- no success semantics
- no implicit completion
- no hidden control flow
- no intelligence inside storage
- no extensions baked into core
```

what files will you create in compute (core logic) to separate the concerns.

what are functions inside. params. returns.

---

some skills, hooks, and tools are predefined.

skills are knowledge/structure you send when asking if relevant.

tools are how you act. you send them. intelligence decides whether to use each. it replies with yaml. you parse it. you call each.

at fisrt you have a complex task with a spec.

i dont want context, index, and extension. they are not verbs. i will have begin.

hooks (extensions) are not event listeners. hooks are python decorators.

a hook can wrap prepare. it logs "hello world" after it.

a hook can wrap specific tool calls (e.g. shell commands) in process. it check safety. if safe execute. if not it does something else.

what's the data flow.

---

be grounded.

rest has no input or output. if no hooks wrap it, it does nothing.

plan create a string prompt and an optional object context. it decides how to ask. for now i will not support a context.

plan might use request (intelligence) to ask how to ask. for now it does not.

request has

ask: prompt, optional context, model -> markdown. it might output yaml or something else.

process has

parse: markdown -> all yaml code blocks -> a list of tool calls (tool name, params).

act: tool name and params -> call it -> result (defined by the tool, maybe void, maybe terminal log or something else)

you dont have hooks.js

in prepare, you wrap all methods with their hooks and give these methods to loop.

store is already written. storage hooks are builtin.

you have compute/hooks/store_request and compute/hooks/store_action.

prepare see both optional user hooks (from begin) and builtin hooks.

---

write the spec about compute.

only include the spec in your answer. don't talk. dont put inside a markdown code block.

be grounded and detailed.

file. fn. params. process. returns.

literals have type. objects have structure.


