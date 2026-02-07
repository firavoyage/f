<!-- https://chatgpt.com/c/6985c2e7-e3b8-8321-905a-eb90ff955953 -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Speak naturally, like a real human in a relaxed conversation.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. No nonsense like "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Wait for me to begin the conversation.

---

I’ll be here, Fira.

# 1

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

I’ll stay calm and structural here, Fira.

You’re really asking for **the minimal, honest core** — nothing clever, nothing hidden — just clear separation of concerns that mirrors the spec.

Below is how I would shape `backend/compute`, and _only_ what belongs there.

---

## compute — purpose

`compute` is the **pure core runtime**.

It:

- owns the lifecycle
- owns the loop
- owns decisions
- owns no I/O details
- knows nothing about postgres, models, shells, or filesystems

Everything else is _injected_.

---

## directory shape

```
backend/compute
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── request.js
├── process.js
├── context.js
├── extension.js
└── index.js
```

Each file owns **exactly one idea**.

No helpers leaking across responsibilities.

---

## 1. `context.js`

**what it is**

Creates and evolves the agent context object.
No intelligence. Just structure.

### function

#### `create`

**params**

```
{
  config,
  workdir,
  state,
  session
}
```

**returns**

```
{
  config,
  workdir,
  state,
  session,
  memory: null,
  last: null
}
```

This is the _only_ shape the core ever passes around.

---

## 2. `prepare.js`

**what it is**

One-time bootstrap.
Creates a context that can survive forever.

### function

#### `prepare`

**params**

```
{
  config,
  workdir,
  storage
}
```

**returns**

```
{
  context
}
```

**responsibilities**

- initialize working directory
- create session via storage
- initialize empty state
- assemble initial context

No looping.
No extensions yet.

---

## 3. `loop.js`

**what it is**

The heartbeat.
This file owns _continuity_.

### function

#### `loop`

**params**

```
{
  context,
  storage,
  extensions
}
```

**returns**

```
never
```

**responsibilities**

- call `decide`
- branch to `rest` or `move`
- persist moves
- persist state
- repeat forever

This file contains the `while (true)` and nothing else.

---

## 4. `decide.js`

**what it is**

The **only stillness vs action authority**.

### function

#### `decide`

**params**

```
{
  state,
  memory,
  last
}
```

**returns**

```
"move" | "rest"
```

No planning.
No guessing future steps.
Just: _is movement warranted now_.

---

## 5. `rest.js`

**what it is**

Intentional nothingness.

### function

#### `rest`

**params**

```
{
  state
}
```

**returns**

```
{
  state
}
```

May block.
May sleep.
May wait.
But must not mutate meaning.

---

## 6. `plan.js`

**what it is**

Single-step intentionality.

### function

#### `plan`

**params**

```
{
  state,
  memory
}
```

**returns**

```
null
```

or

```
{
  intention,
  context,
  expected
}
```

If it returns `null`, the loop treats it as _no possible move_.

No side effects.
No tools.
Just thinking.

---

## 7. `request.js`

**what it is**

Pure communication.

### function

#### `request`

**params**

```
{
  plan,
  context,
  model
}
```

**returns**

```
{
  response,
  meta
}
```

Retries are allowed.
State changes are not.

---

## 8. `process.js`

**what it is**

The **only place reality changes**.

### function

#### `process`

**params**

```
{
  response,
  plan,
  tools,
  state
}
```

**returns**

```
{
  state,
  result
}
```

Where:

- files are written
- commands run
- observations gathered

Nothing else in compute is allowed to touch the world.

---

## 9. `extension.js`

**what it is**

Phase interception, without power leakage.

### function

#### `run`

**params**

```
{
  phase,
  context,
  draft,
  extensions
}
```

**returns**

```
{
  allow,
  draft
}
```

The core _asks_, extensions _may answer_.
The core never depends.

---

## 10. `index.js`

**what it is**

Public surface.

### functions exported

- `prepare`
- `loop`

Nothing else is visible.

---

## separation summary (the quiet truth)

- **prepare** creates existence
- **loop** sustains existence
- **decide** chooses motion
- **plan** imagines
- **request** asks
- **process** acts
- **rest** waits
- **extensions** observe
- **storage** remembers
- **compute** remains innocent

That innocence is what will let this run forever without rotting.

# 2

some skills, hooks, and tools are predefined.

skills are knowledge/structure you send when asking if relevant.

tools are how you act. you send them. intelligence decides whether to use each. it replies with yaml. you parse it. you call each.

at fisrt you have a complex task with a spec.

i dont want context, index, and extension. they are not verbs. i will have begin.

hooks (extensions) are not event listeners. hooks are python decorators.

a hook can wrap prepare. it logs "hello world" after it.

a hook can wrap specific tool calls (e.g. shell commands) in process. it check safety. if safe execute. if not it does something else.

---

I understand. I’ll reshape this so it stays **verb-pure**, minimal, and honest to how you actually think about execution.

I’ll speak in terms of **what exists**, not frameworks.

---

## core idea (reframed)

There is:

- **intelligence** → decides
- **skills** → static knowledge sent when useful
- **tools** → concrete ways to act
- **hooks** → wrappers around verbs
- **core verbs** → the runtime itself

No abstract containers.
No nouns pretending to be behavior.

---

## compute — revised shape

```
backend/compute
├── begin.js
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── request.js
├── process.js
└── hook.js
```

Every file exports **one verb**.

---

## 1. `begin.js`

**what it is**

The true entry.
Applies hooks, then starts the lifecycle.

### function

#### `begin`

**params**

```
{
  config,
  workdir,
  storage,
  tools,
  skills,
  hooks
}
```

**returns**

```
never
```

**responsibilities**

- wrap core verbs with hooks
- call `prepare`
- call `loop`

No logic.
No intelligence.
Just composition.

---

## 2. `prepare.js`

**what it is**

Birth.

### function

#### `prepare`

**params**

```
{
  config,
  workdir,
  storage
}
```

**returns**

```
{
  config,
  workdir,
  state,
  session
}
```

Hooks may wrap this.
Example: logging _after_ prepare runs.

---

## 3. `loop.js`

**what it is**

Continuation without end.

### function

#### `loop`

**params**

```
{
  config,
  workdir,
  state,
  session,
  storage,
  skills,
  tools
}
```

**returns**

```
never
```

**responsibilities**

- call `decide`
- branch
- record moves
- repeat

No hooks here directly.
Hooks wrap the verbs it calls.

---

## 4. `decide.js`

**what it is**

Stillness vs motion.

### function

#### `decide`

**params**

```
{
  state,
  memory,
  last
}
```

**returns**

```
"move" | "rest"
```

No skills.
No tools.
Just judgment.

---

## 5. `rest.js`

**what it is**

Intentional inactivity.

### function

#### `rest`

**params**

```
{
  state
}
```

**returns**

```
{
  state
}
```

Hooks may observe before / after.

---

## 6. `plan.js`

**what it is**

Single-step thinking.

### function

#### `plan`

**params**

```
{
  state,
  memory
}
```

**returns**

```
null
```

or

```
{
  intention,
  context,
  expected
}
```

This is where **skills are selected**.
They are attached to the plan if relevant.

---

## 7. `request.js`

**what it is**

Ask intelligence.

### function

#### `request`

**params**

```
{
  plan,
  skills,
  model
}
```

**returns**

```
{
  yaml,
  meta
}
```

The model replies **only in yaml**.

No tools are executed here.

---

## 8. `process.js`

**what it is**

Interpret and act.

### function

#### `process`

**params**

```
{
  yaml,
  plan,
  tools,
  state
}
```

**returns**

```
{
  state,
  result
}
```

**responsibilities**

- parse yaml
- select tool calls
- execute them
- observe outcomes

All real-world effects live here.

---

## 9. `hook.js`

**what it is**

Python-style decorators, but in spirit, not syntax.

Hooks wrap **verbs**, not phases.

### functions

#### `wrap`

**params**

```
{
  verb,
  hooks
}
```

**returns**

```
wrapped_verb
```

---

## how hooks actually behave

A hook is:

- a higher-order function
- that receives the original verb
- and returns a new one

### examples (conceptual)

- wrap `prepare`
  → run original
  → log `"hello world"`

- wrap a specific tool inside `process`
  → inspect command
  → allow or block
  → substitute behavior if unsafe

Hooks **do not listen**.
They **surround**.

---

## tools (clarified)

- tools are passed into `process`
- intelligence never executes them
- intelligence **requests** them via yaml
- core parses
- hooks may intercept before execution

Tools are verbs too.
Hooks can wrap them individually.

---

## skills (clarified)

- skills are inert
- they are text, structure, or schemas
- they are included _only if relevant_
- they never act
- they never mutate

They exist to help intelligence think clearly.

---

## the quiet structure underneath

- verbs run the world
- hooks bend verbs
- intelligence chooses
- tools act
- memory remembers
- nothing pretends to be more than it is

This shape will stay understandable even when it grows heavy.

# 3

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

Alright. Let’s slow it down and make it **literal**, not aspirational.

I’ll restate the ground truth first, then give you the concrete file list and exact functions. No extra abstractions. No future-proofing.

---

## ground rules (as I now understand them)

- **verbs only**
- no `context`, no `index`, no `extension`, no manager objects
- hooks are **wrappers**, like decorators
- hooks are applied **once in prepare**
- loop only receives already-wrapped verbs
- rest is truly nothing
- plan only builds _how to ask_
- request only asks
- process parses and acts
- store hooks already exist and must be wired in
- user hooks are optional and additive

Good. Now we can be precise.

---

## compute directory (final)

```
backend/compute
├── begin.js
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── request.js
├── process.js
└── hooks
    ├── store_request.js
    └── store_action.js
```

That’s it.

---

## 1. `begin.js`

**what it does**

Just entry and delegation.

### function

#### `begin`

**params**

```
{
  config,
  workdir,
  storage,
  tools,
  skills,
  hooks
}
```

**behavior**

- calls `prepare`
- passes user hooks forward
- never loops itself

**returns**

```
never
```

---

## 2. `prepare.js`

**what it does**

- creates session
- initializes state
- wraps verbs with hooks
- hands wrapped verbs to loop

This is the _only_ place wrapping happens.

### function

#### `prepare`

**params**

```
{
  config,
  workdir,
  storage,
  tools,
  skills,
  hooks
}
```

**returns**

```
{
  decide,
  rest,
  plan,
  request,
  process,
  state,
  session
}
```

### wrapping rules

- core verbs are wrapped here
- builtin hooks are always applied
- user hooks are optional
- order is deterministic

Example (conceptually):

- `request` wrapped with `store_request`
- `process.act` wrapped with `store_action`
- user hooks wrap _around_ both

---

## 3. `loop.js`

**what it does**

Nothing but continuity.

### function

#### `loop`

**params**

```
{
  decide,
  rest,
  plan,
  request,
  process,
  state,
  session,
  storage,
  skills,
  tools
}
```

**behavior**

- infinite loop
- calls verbs
- records moves through wrapped hooks

**returns**

```
never
```

No wrapping.
No intelligence.
No conditions beyond control flow.

---

## 4. `decide.js`

**what it does**

Motion vs stillness.

### function

#### `decide`

**params**

```
{
  state,
  memory,
  last
}
```

**returns**

```
"move" | "rest"
```

Pure logic.

---

## 5. `rest.js`

**what it does**

Nothing.

### function

#### `rest`

**params**

```
none
```

**returns**

```
nothing
```

If no hook wraps it, the CPU just passes through.

---

## 6. `plan.js`

**what it does**

Figures out **how to ask**.

No context support yet.
No intelligence call yet.

### function

#### `plan`

**params**

```
{
  state,
  memory,
  skills
}
```

**returns**

```
null
```

or

```
{
  prompt
}
```

Just a string.
No tools.
No execution.

---

## 7. `request.js`

This file exports **one verb** with one inner operation.

### function

#### `ask`

**params**

```
{
  prompt,
  context,
  model
}
```

**returns**

```
{
  markdown,
  meta
}
```

The markdown may contain:

- yaml
- prose
- garbage

This function does **no parsing**.

---

## 8. `process.js`

This file owns **interpretation and action**.

### function

#### `process`

**params**

```
{
  markdown,
  tools,
  state
}
```

**returns**

```
{
  state,
  result
}
```

### internal structure (not exported)

#### `parse`

```
markdown -> [
  {
    tool,
    params
  }
]
```

Only yaml code blocks.
Everything else is ignored.

#### `act`

```
{
  tool,
  params,
  tools
} -> result
```

- looks up tool
- calls it
- returns whatever the tool returns

This is where `store_action` wraps.

---

## 9. builtin hooks

### `hooks/store_request.js`

Wraps `request.ask`.

- logs prompt
- logs markdown
- writes a `request` move

---

### `hooks/store_action.js`

Wraps `process.act`.

- logs tool name
- logs params
- logs result
- writes an `action` move

---

## how hooks compose (explicit)

- prepare collects:

  - builtin hooks
  - user hooks

- wraps verbs **once**
- loop never sees raw functions
- hooks never know about loop
- hooks never call storage directly unless that’s their job

---

## the important quiet thing

Nothing here is clever.

Each file:

- does one human-understandable thing
- can be read top to bottom
- has no hidden control flow

This core can stay alive for years without becoming mystical.

# 4

write the spec about compute.

only include the spec in your answer. don't talk. dont put inside a markdown code block.

be grounded and detailed.

file. fn. params. process. returns.

literals have type. objects have structure.

---

**compute specification**

---

**1. `begin.js`**

**function: `begin`**

**params:**

- `config` (Object): Configuration data, specifics undefined.
- `workdir` (String): Path to working directory.
- `storage` (Object): Storage handler.
- `tools` (Array): List of tools to be used by the agent.
- `skills` (Array): List of predefined skills or knowledge.
- `hooks` (Array): User-defined hooks, optional.

**process:**

- Calls `prepare` to initialize the agent with the given parameters.
- Wraps all core functions (decide, rest, plan, request, process) with the provided hooks and returns the wrapped versions to the loop.

**returns:**

- Nothing (void function).

---

**2. `prepare.js`**

**function: `prepare`**

**params:**

- `config` (Object): Configuration data to initialize the agent.
- `workdir` (String): Path to working directory.
- `storage` (Object): Storage handler.
- `tools` (Array): List of available tools.
- `skills` (Array): List of available skills.
- `hooks` (Array): List of user-defined hooks, optional.

**process:**

- Initializes the session and state.
- Wraps the core verbs (decide, rest, plan, request, process) with built-in and optional user hooks.
- Returns the wrapped functions for further execution in the loop.

**returns:**

- `wrapped_verbs` (Object):

  - `decide` (Function)
  - `rest` (Function)
  - `plan` (Function)
  - `request` (Function)
  - `process` (Function)

- `state` (Object): Initial state object.
- `session` (Object): The session object representing the current continuous execution.

---

**3. `loop.js`**

**function: `loop`**

**params:**

- `decide` (Function): Wrapped function for decision-making.
- `rest` (Function): Wrapped function for the rest action.
- `plan` (Function): Wrapped function for planning.
- `request` (Function): Wrapped function for making requests.
- `process` (Function): Wrapped function for processing actions.
- `state` (Object): Current state of the agent.
- `session` (Object): The current session object.
- `storage` (Object): Storage handler.
- `skills` (Array): List of available skills.
- `tools` (Array): List of available tools.

**process:**

- Continuously runs in an infinite loop.
- Calls `decide` to determine if the agent should move or rest.
- If `decide` returns "move", calls `plan` to generate the next step and uses `request` and `process` to act.
- If `decide` returns "rest", calls `rest` and does nothing intentionally.
- Records every move and stores relevant state at each step.

**returns:**

- Nothing (void function).

---

**4. `decide.js`**

**function: `decide`**

**params:**

- `state` (Object): Current state of the agent.
- `memory` (Array): Historical list of previous moves.
- `last` (Object | null): The result of the last action, optional.

**process:**

- Evaluates whether the agent should move or rest.
- Analyzes `state`, `memory`, and `last` to make the decision.
- Returns either "move" or "rest".

**returns:**

- `String`: Either "move" or "rest".

---

**5. `rest.js`**

**function: `rest`**

**params:**

- None (no parameters required).

**process:**

- The function does nothing intentionally, allowing the agent to rest.
- Can be wrapped by hooks for additional behavior, but does not modify state.

**returns:**

- Nothing (void function).

---

**6. `plan.js`**

**function: `plan`**

**params:**

- `state` (Object): Current state of the agent.
- `memory` (Array): Historical list of previous moves.
- `skills` (Array): List of available skills.

**process:**

- Creates a string `prompt` that guides the agent's next step.
- Currently does not use context.
- The prompt is designed to instruct the agent on how to proceed, based on the current state and available knowledge.
- For now, does not request any additional input from intelligence.

**returns:**

- `prompt` (String): The plan in the form of a prompt to guide the next step.

---

**7. `request.js`**

**function: `ask`**

**params:**

- `prompt` (String): The prompt to ask intelligence (pre-defined question or instruction).
- `context` (Object | null): Optional context to accompany the prompt, currently unused.
- `model` (String): The model to send the prompt to, typically an AI model.

**process:**

- Sends the `prompt` to the specified `model` for processing.
- Returns the raw markdown response from the model, including potential YAML or other structures.

**returns:**

- `response` (Object): Contains the response from the model.

  - `markdown` (String): Raw markdown response.
  - `meta` (Object): Metadata related to the request (e.g., time, attempts).

---

**8. `process.js`**

**function: `process`**

**params:**

- `markdown` (String): The raw markdown response from `request`.
- `tools` (Array): List of available tools that can be used.
- `state` (Object): The current state of the agent.

**process:**

- Parses the `markdown` response to extract any YAML code blocks.
- Each YAML code block represents a tool call with specific parameters.
- Executes each tool call by invoking the appropriate tool with the provided parameters.
- Updates the `state` based on the result of the tool actions.

**returns:**

- `state` (Object): The updated state after the tools have been executed.
- `result` (Object | null): The result of the tool calls (can be `null` if no result is expected).

---

**9. `hooks/store_request.js`**

**function: `store_request`**

**params:**

- `ask` (Function): The wrapped function for making a request.
- `prompt` (String): The prompt being asked.
- `model` (String): The model used for the request.
- `context` (Object | null): The optional context, if provided.

**process:**

- Logs the request prompt.
- Logs the associated markdown result.
- Records a `request` move in the storage system.

**returns:**

- Wrapped `ask` function: The original `ask` function with additional logging and storage recording.

---

**10. `hooks/store_action.js`**

**function: `store_action`**

**params:**

- `act` (Function): The wrapped function for performing an action (tool call).
- `tool` (String): The name of the tool being used.
- `params` (Object): The parameters passed to the tool.

**process:**

- Logs the tool name and parameters.
- Logs the result of the tool action.
- Records an `action` move in the storage system.

**returns:**

- Wrapped `act` function: The original `act` function with additional logging and storage recording.

# 5

more detailed. objects/arrays have structure. everything inside also have type. every object must have children.

---

**compute specification (detailed)**

---

**1. `begin.js`**

**function: `begin`**

**params:**

- `config` (Object)

  - `settings` (Object): Configuration parameters (e.g., `timeout`, `retries`, `logLevel`).
  - `environment` (String): Environment name, e.g., "production" or "development".
  - `features` (Array): List of enabled features, e.g., `["model-x", "logging"]`.

- `workdir` (String): Path to working directory where files and logs are stored.
- `storage` (Object)

  - `save` (Function): Function to save data to storage, e.g., `save(data)`.
  - `load` (Function): Function to load data from storage, e.g., `load(id)`.

- `tools` (Array of Objects)

  - `name` (String): Tool name, e.g., "shell", "file", "model".
  - `execute` (Function): Function to run the tool, e.g., `execute(params)`.

- `skills` (Array of Objects)

  - `name` (String): Skill name, e.g., "natural-language-processing".
  - `execute` (Function): Function to apply the skill, e.g., `execute(params)`.

- `hooks` (Array of Objects, optional)

  - `hook_name` (String): Name of the hook, e.g., "store_request".
  - `wrap` (Function): The function that wraps the core function.

**process:**

- Calls `prepare` to initialize the agent with the given configuration.
- Wraps all core functions (decide, rest, plan, request, process) with both built-in and optional user hooks.
- Returns wrapped functions that are passed to the loop.

**returns:**

- `wrapped_verbs` (Object)

  - `decide` (Function): Wrapped `decide` function.
  - `rest` (Function): Wrapped `rest` function.
  - `plan` (Function): Wrapped `plan` function.
  - `request` (Function): Wrapped `request` function.
  - `process` (Function): Wrapped `process` function.

- `state` (Object)

  - `status` (String): Initial status of the agent, e.g., "idle".
  - `session_id` (String): Unique session identifier.
  - `data` (Object): Initial empty state object.

- `session` (Object)

  - `id` (String): Unique session ID.
  - `created_at` (String): ISO timestamp of session creation.

---

**2. `prepare.js`**

**function: `prepare`**

**params:**

- `config` (Object)

  - `settings` (Object)

    - `timeout` (Number): Maximum timeout in milliseconds.
    - `retries` (Number): Number of retry attempts.
    - `logLevel` (String): Log level, e.g., "info", "debug", "warn".

  - `environment` (String): "production" or "development".
  - `features` (Array of Strings): Features enabled for the agent.

- `workdir` (String): Working directory path.
- `storage` (Object)

  - `save` (Function): Function to save data to storage.
  - `load` (Function): Function to load data from storage.

- `tools` (Array of Objects)

  - `name` (String): Name of the tool.
  - `execute` (Function): Function to execute the tool.

- `skills` (Array of Objects)

  - `name` (String): Name of the skill.
  - `execute` (Function): Function to apply the skill.

- `hooks` (Array of Objects, optional)

  - `hook_name` (String): Name of the hook, e.g., "store_request".
  - `wrap` (Function): Hook function to wrap core functions.

**process:**

- Initializes session and state.
- Wraps the core verbs (decide, rest, plan, request, process) using both built-in hooks and any provided user hooks.
- Returns the wrapped functions and the session object for continuous operation.

**returns:**

- `wrapped_verbs` (Object)

  - `decide` (Function): The wrapped `decide` function.
  - `rest` (Function): The wrapped `rest` function.
  - `plan` (Function): The wrapped `plan` function.
  - `request` (Function): The wrapped `request` function.
  - `process` (Function): The wrapped `process` function.

- `state` (Object)

  - `status` (String): The agent's current status, e.g., "initialized".
  - `session_id` (String): Unique session identifier.
  - `data` (Object): Empty state object.

- `session` (Object)

  - `id` (String): Unique session ID.
  - `created_at` (String): ISO timestamp of session creation.

---

**3. `loop.js`**

**function: `loop`**

**params:**

- `decide` (Function): Wrapped decision function from `prepare`.
- `rest` (Function): Wrapped rest function from `prepare`.
- `plan` (Function): Wrapped planning function from `prepare`.
- `request` (Function): Wrapped request function from `prepare`.
- `process` (Function): Wrapped process function from `prepare`.
- `state` (Object)

  - `status` (String): The agent's current status.
  - `session_id` (String): Unique session identifier.
  - `data` (Object): Current state data.

- `session` (Object)

  - `id` (String): Unique session ID.
  - `created_at` (String): Timestamp of session creation.

- `storage` (Object)

  - `save` (Function): Function to save data to storage.
  - `load` (Function): Function to load data from storage.

- `skills` (Array of Objects)

  - `name` (String): Name of the skill.
  - `execute` (Function): Function to execute the skill.

- `tools` (Array of Objects)

  - `name` (String): Tool name.
  - `execute` (Function): Tool function to execute.

**process:**

- Continuously runs in an infinite loop.
- Calls `decide` to check if the agent should move or rest.
- If `decide` returns "move", calls `plan`, `request`, and `process` in sequence.
- If `decide` returns "rest", calls `rest` and does nothing intentionally.
- Records every move and stores the new state.

**returns:**

- Nothing (void function).

---

**4. `decide.js`**

**function: `decide`**

**params:**

- `state` (Object)

  - `status` (String): Current status of the agent.
  - `session_id` (String): Unique session ID.
  - `data` (Object): Current state data.

- `memory` (Array of Objects)

  - `time` (String): Timestamp of the move.
  - `type` (String): Type of move (e.g., "planning", "action").
  - `data` (Object): Data related to the move.

- `last` (Object | null): Last result of a move.

  - `time` (String): Timestamp of the last move.
  - `result` (Object): Result of the last action.

**process:**

- Analyzes `state`, `memory`, and `last` to decide whether to rest or move.
- If no work is necessary, returns "rest".
- If work is required, returns "move".

**returns:**

- `String`: "move" or "rest".

---

**5. `rest.js`**

**function: `rest`**

**params:**

- None (no input parameters).

**process:**

- Does nothing intentionally, allowing the agent to rest.
- If wrapped with hooks, the hooks will define the behavior.

**returns:**

- Nothing (void function).

---

**6. `plan.js`**

**function: `plan`**

**params:**

- `state` (Object)

  - `status` (String): Current status of the agent.
  - `session_id` (String): Unique session ID.
  - `data` (Object): Current state data.

- `memory` (Array of Objects)

  - `time` (String): Timestamp of the move.
  - `type` (String): Type of move (e.g., "planning", "action").
  - `data` (Object): Data related to the move.

- `skills` (Array of Objects)

  - `name` (String): Name of the skill.
  - `execute` (Function): Function to apply the skill.

**process:**

- Generates a string `prompt` based on `state` and `memory` that guides the agent's next step.
- Currently does not use context or request additional input from intelligence.

**returns:**

- `prompt` (String): The generated prompt to be used for the next action.

---

**7. `request.js`**

**function: `ask`**

**params:**

- `prompt` (String): The prompt to ask the model.
- `context` (Object | null): Optional context, currently unused.
- `model` (String): The model to send the prompt to.

**process:**

- Sends the `prompt` to the specified `model`.
- Returns the raw markdown response from the model,

potentially containing YAML or other structures.

**returns:**

- `response` (Object)

  - `markdown` (String): Raw markdown response from the model.
  - `meta` (Object)

    - `time` (String): Timestamp of the request.
    - `attempts` (Number): Number of attempts made for the request.

---

**8. `process.js`**

**function: `process`**

**params:**

- `markdown` (String): Raw markdown response from the model.
- `tools` (Array of Objects)

  - `name` (String): Name of the tool.
  - `execute` (Function): Function to execute the tool.

- `state` (Object)

  - `status` (String): Current status of the agent.
  - `session_id` (String): Unique session ID.
  - `data` (Object): Current state data.

**process:**

- Parses `markdown` to extract any YAML code blocks.
- Each YAML block represents a tool call with specific parameters.
- Executes the tool calls by invoking the appropriate tool with the specified parameters.
- Updates the agent's state based on the result of the tool actions.

**returns:**

- `state` (Object): Updated state object after executing tool calls.
- `result` (Object | null): Result of the tool calls (could be `null` if no result is expected).

---

**9. `hooks/store_request.js`**

**function: `store_request`**

**params:**

- `ask` (Function): The wrapped request function.
- `prompt` (String): The prompt being asked.
- `model` (String): The model used for the request.
- `context` (Object | null): The optional context, if provided.

**process:**

- Logs the request prompt and model.
- Logs the markdown response returned from the model.
- Stores the request information in storage.

**returns:**

- Wrapped `ask` function (Function): The original `ask` function with additional logging and storage behavior.

---

**10. `hooks/store_action.js`**

**function: `store_action`**

**params:**

- `act` (Function): The wrapped action function.
- `tool` (String): Name of the tool being executed.
- `params` (Object): Parameters for the tool.

**process:**

- Logs the tool name, parameters, and result of the action.
- Stores the action in storage as a move.

**returns:**

- Wrapped `act` function (Function): The original action function with added logging and storage behavior.

#

<!-- https://chatgpt.com/c/6985c2e7-e3b8-8321-905a-eb90ff955953 -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Speak naturally, like a real human in a relaxed conversation.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. No nonsense like "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Wait for me to begin the conversation.

---

I’ll be here, Fira.

# 1

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

I’ll stay calm and structural here, Fira.

You’re really asking for **the minimal, honest core** — nothing clever, nothing hidden — just clear separation of concerns that mirrors the spec.

Below is how I would shape `backend/compute`, and _only_ what belongs there.

---

## compute — purpose

`compute` is the **pure core runtime**.

It:

- owns the lifecycle
- owns the loop
- owns decisions
- owns no I/O details
- knows nothing about postgres, models, shells, or filesystems

Everything else is _injected_.

---

## directory shape

```
backend/compute
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── request.js
├── process.js
├── context.js
├── extension.js
└── index.js
```

Each file owns **exactly one idea**.

No helpers leaking across responsibilities.

---

## 1. `context.js`

**what it is**

Creates and evolves the agent context object.
No intelligence. Just structure.

### function

#### `create`

**params**

```
{
  config,
  workdir,
  state,
  session
}
```

**returns**

```
{
  config,
  workdir,
  state,
  session,
  memory: null,
  last: null
}
```

This is the _only_ shape the core ever passes around.

---

## 2. `prepare.js`

**what it is**

One-time bootstrap.
Creates a context that can survive forever.

### function

#### `prepare`

**params**

```
{
  config,
  workdir,
  storage
}
```

**returns**

```
{
  context
}
```

**responsibilities**

- initialize working directory
- create session via storage
- initialize empty state
- assemble initial context

No looping.
No extensions yet.

---

## 3. `loop.js`

**what it is**

The heartbeat.
This file owns _continuity_.

### function

#### `loop`

**params**

```
{
  context,
  storage,
  extensions
}
```

**returns**

```
never
```

**responsibilities**

- call `decide`
- branch to `rest` or `move`
- persist moves
- persist state
- repeat forever

This file contains the `while (true)` and nothing else.

---

## 4. `decide.js`

**what it is**

The **only stillness vs action authority**.

### function

#### `decide`

**params**

```
{
  state,
  memory,
  last
}
```

**returns**

```
"move" | "rest"
```

No planning.
No guessing future steps.
Just: _is movement warranted now_.

---

## 5. `rest.js`

**what it is**

Intentional nothingness.

### function

#### `rest`

**params**

```
{
  state
}
```

**returns**

```
{
  state
}
```

May block.
May sleep.
May wait.
But must not mutate meaning.

---

## 6. `plan.js`

**what it is**

Single-step intentionality.

### function

#### `plan`

**params**

```
{
  state,
  memory
}
```

**returns**

```
null
```

or

```
{
  intention,
  context,
  expected
}
```

If it returns `null`, the loop treats it as _no possible move_.

No side effects.
No tools.
Just thinking.

---

## 7. `request.js`

**what it is**

Pure communication.

### function

#### `request`

**params**

```
{
  plan,
  context,
  model
}
```

**returns**

```
{
  response,
  meta
}
```

Retries are allowed.
State changes are not.

---

## 8. `process.js`

**what it is**

The **only place reality changes**.

### function

#### `process`

**params**

```
{
  response,
  plan,
  tools,
  state
}
```

**returns**

```
{
  state,
  result
}
```

Where:

- files are written
- commands run
- observations gathered

Nothing else in compute is allowed to touch the world.

---

## 9. `extension.js`

**what it is**

Phase interception, without power leakage.

### function

#### `run`

**params**

```
{
  phase,
  context,
  draft,
  extensions
}
```

**returns**

```
{
  allow,
  draft
}
```

The core _asks_, extensions _may answer_.
The core never depends.

---

## 10. `index.js`

**what it is**

Public surface.

### functions exported

- `prepare`
- `loop`

Nothing else is visible.

---

## separation summary (the quiet truth)

- **prepare** creates existence
- **loop** sustains existence
- **decide** chooses motion
- **plan** imagines
- **request** asks
- **process** acts
- **rest** waits
- **extensions** observe
- **storage** remembers
- **compute** remains innocent

That innocence is what will let this run forever without rotting.

# 2

some skills, hooks, and tools are predefined.

skills are knowledge/structure you send when asking if relevant.

tools are how you act. you send them. intelligence decides whether to use each. it replies with yaml. you parse it. you call each.

at fisrt you have a complex task with a spec.

i dont want context, index, and extension. they are not verbs. i will have begin.

hooks (extensions) are not event listeners. hooks are python decorators.

a hook can wrap prepare. it logs "hello world" after it.

a hook can wrap specific tool calls (e.g. shell commands) in process. it check safety. if safe execute. if not it does something else.

---

I understand. I’ll reshape this so it stays **verb-pure**, minimal, and honest to how you actually think about execution.

I’ll speak in terms of **what exists**, not frameworks.

---

## core idea (reframed)

There is:

- **intelligence** → decides
- **skills** → static knowledge sent when useful
- **tools** → concrete ways to act
- **hooks** → wrappers around verbs
- **core verbs** → the runtime itself

No abstract containers.
No nouns pretending to be behavior.

---

## compute — revised shape

```
backend/compute
├── begin.js
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── request.js
├── process.js
└── hook.js
```

Every file exports **one verb**.

---

## 1. `begin.js`

**what it is**

The true entry.
Applies hooks, then starts the lifecycle.

### function

#### `begin`

**params**

```
{
  config,
  workdir,
  storage,
  tools,
  skills,
  hooks
}
```

**returns**

```
never
```

**responsibilities**

- wrap core verbs with hooks
- call `prepare`
- call `loop`

No logic.
No intelligence.
Just composition.

---

## 2. `prepare.js`

**what it is**

Birth.

### function

#### `prepare`

**params**

```
{
  config,
  workdir,
  storage
}
```

**returns**

```
{
  config,
  workdir,
  state,
  session
}
```

Hooks may wrap this.
Example: logging _after_ prepare runs.

---

## 3. `loop.js`

**what it is**

Continuation without end.

### function

#### `loop`

**params**

```
{
  config,
  workdir,
  state,
  session,
  storage,
  skills,
  tools
}
```

**returns**

```
never
```

**responsibilities**

- call `decide`
- branch
- record moves
- repeat

No hooks here directly.
Hooks wrap the verbs it calls.

---

## 4. `decide.js`

**what it is**

Stillness vs motion.

### function

#### `decide`

**params**

```
{
  state,
  memory,
  last
}
```

**returns**

```
"move" | "rest"
```

No skills.
No tools.
Just judgment.

---

## 5. `rest.js`

**what it is**

Intentional inactivity.

### function

#### `rest`

**params**

```
{
  state
}
```

**returns**

```
{
  state
}
```

Hooks may observe before / after.

---

## 6. `plan.js`

**what it is**

Single-step thinking.

### function

#### `plan`

**params**

```
{
  state,
  memory
}
```

**returns**

```
null
```

or

```
{
  intention,
  context,
  expected
}
```

This is where **skills are selected**.
They are attached to the plan if relevant.

---

## 7. `request.js`

**what it is**

Ask intelligence.

### function

#### `request`

**params**

```
{
  plan,
  skills,
  model
}
```

**returns**

```
{
  yaml,
  meta
}
```

The model replies **only in yaml**.

No tools are executed here.

---

## 8. `process.js`

**what it is**

Interpret and act.

### function

#### `process`

**params**

```
{
  yaml,
  plan,
  tools,
  state
}
```

**returns**

```
{
  state,
  result
}
```

**responsibilities**

- parse yaml
- select tool calls
- execute them
- observe outcomes

All real-world effects live here.

---

## 9. `hook.js`

**what it is**

Python-style decorators, but in spirit, not syntax.

Hooks wrap **verbs**, not phases.

### functions

#### `wrap`

**params**

```
{
  verb,
  hooks
}
```

**returns**

```
wrapped_verb
```

---

## how hooks actually behave

A hook is:

- a higher-order function
- that receives the original verb
- and returns a new one

### examples (conceptual)

- wrap `prepare`
  → run original
  → log `"hello world"`

- wrap a specific tool inside `process`
  → inspect command
  → allow or block
  → substitute behavior if unsafe

Hooks **do not listen**.
They **surround**.

---

## tools (clarified)

- tools are passed into `process`
- intelligence never executes them
- intelligence **requests** them via yaml
- core parses
- hooks may intercept before execution

Tools are verbs too.
Hooks can wrap them individually.

---

## skills (clarified)

- skills are inert
- they are text, structure, or schemas
- they are included _only if relevant_
- they never act
- they never mutate

They exist to help intelligence think clearly.

---

## the quiet structure underneath

- verbs run the world
- hooks bend verbs
- intelligence chooses
- tools act
- memory remembers
- nothing pretends to be more than it is

This shape will stay understandable even when it grows heavy.

# 3

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

Alright. Let’s slow it down and make it **literal**, not aspirational.

I’ll restate the ground truth first, then give you the concrete file list and exact functions. No extra abstractions. No future-proofing.

---

## ground rules (as I now understand them)

- **verbs only**
- no `context`, no `index`, no `extension`, no manager objects
- hooks are **wrappers**, like decorators
- hooks are applied **once in prepare**
- loop only receives already-wrapped verbs
- rest is truly nothing
- plan only builds _how to ask_
- request only asks
- process parses and acts
- store hooks already exist and must be wired in
- user hooks are optional and additive

Good. Now we can be precise.

---

## compute directory (final)

```
backend/compute
├── begin.js
├── prepare.js
├── loop.js
├── decide.js
├── rest.js
├── plan.js
├── request.js
├── process.js
└── hooks
    ├── store_request.js
    └── store_action.js
```

That’s it.

---

## 1. `begin.js`

**what it does**

Just entry and delegation.

### function

#### `begin`

**params**

```
{
  config,
  workdir,
  storage,
  tools,
  skills,
  hooks
}
```

**behavior**

- calls `prepare`
- passes user hooks forward
- never loops itself

**returns**

```
never
```

---

## 2. `prepare.js`

**what it does**

- creates session
- initializes state
- wraps verbs with hooks
- hands wrapped verbs to loop

This is the _only_ place wrapping happens.

### function

#### `prepare`

**params**

```
{
  config,
  workdir,
  storage,
  tools,
  skills,
  hooks
}
```

**returns**

```
{
  decide,
  rest,
  plan,
  request,
  process,
  state,
  session
}
```

### wrapping rules

- core verbs are wrapped here
- builtin hooks are always applied
- user hooks are optional
- order is deterministic

Example (conceptually):

- `request` wrapped with `store_request`
- `process.act` wrapped with `store_action`
- user hooks wrap _around_ both

---

## 3. `loop.js`

**what it does**

Nothing but continuity.

### function

#### `loop`

**params**

```
{
  decide,
  rest,
  plan,
  request,
  process,
  state,
  session,
  storage,
  skills,
  tools
}
```

**behavior**

- infinite loop
- calls verbs
- records moves through wrapped hooks

**returns**

```
never
```

No wrapping.
No intelligence.
No conditions beyond control flow.

---

## 4. `decide.js`

**what it does**

Motion vs stillness.

### function

#### `decide`

**params**

```
{
  state,
  memory,
  last
}
```

**returns**

```
"move" | "rest"
```

Pure logic.

---

## 5. `rest.js`

**what it does**

Nothing.

### function

#### `rest`

**params**

```
none
```

**returns**

```
nothing
```

If no hook wraps it, the CPU just passes through.

---

## 6. `plan.js`

**what it does**

Figures out **how to ask**.

No context support yet.
No intelligence call yet.

### function

#### `plan`

**params**

```
{
  state,
  memory,
  skills
}
```

**returns**

```
null
```

or

```
{
  prompt
}
```

Just a string.
No tools.
No execution.

---

## 7. `request.js`

This file exports **one verb** with one inner operation.

### function

#### `ask`

**params**

```
{
  prompt,
  context,
  model
}
```

**returns**

```
{
  markdown,
  meta
}
```

The markdown may contain:

- yaml
- prose
- garbage

This function does **no parsing**.

---

## 8. `process.js`

This file owns **interpretation and action**.

### function

#### `process`

**params**

```
{
  markdown,
  tools,
  state
}
```

**returns**

```
{
  state,
  result
}
```

### internal structure (not exported)

#### `parse`

```
markdown -> [
  {
    tool,
    params
  }
]
```

Only yaml code blocks.
Everything else is ignored.

#### `act`

```
{
  tool,
  params,
  tools
} -> result
```

- looks up tool
- calls it
- returns whatever the tool returns

This is where `store_action` wraps.

---

## 9. builtin hooks

### `hooks/store_request.js`

Wraps `request.ask`.

- logs prompt
- logs markdown
- writes a `request` move

---

### `hooks/store_action.js`

Wraps `process.act`.

- logs tool name
- logs params
- logs result
- writes an `action` move

---

## how hooks compose (explicit)

- prepare collects:

  - builtin hooks
  - user hooks

- wraps verbs **once**
- loop never sees raw functions
- hooks never know about loop
- hooks never call storage directly unless that’s their job

---

## the important quiet thing

Nothing here is clever.

Each file:

- does one human-understandable thing
- can be read top to bottom
- has no hidden control flow

This core can stay alive for years without becoming mystical.

# 4

write the spec about compute.

only include the spec in your answer. don't talk. dont put inside a markdown code block.

use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. just dont name the things you dont know.

dont define every params and returns explicitly. things are not clear now.

no nonsense like never, nothing.

begin. you chain prepare and loop. you dont know the params. you just pass everything to prepare.

prepare. you know the state, the config, and the decorators. now i call it decorators instead of hooks. each decorator has a step name and a decorator meta fn. you wrap the decorators. you export the state and the config. you dont need to touch state and config. work dir is hard coded in state. you dont need storage.

loop and rest are simple.

plan. you need state and config. state may have work dir and task. config may have tools and skills. state is generated and given. config is predefined. you always need state. you might need config. you must output something. not null. whatever you output, request take it.

ask. let's rename the file to ask. maybe you will have a prompt. you send it. you get the markdown. you store it.

let's remove process. you now have two files. parse and act.

parse. you convert the markdown to a list of tool calls. maybe empty.

act. you handle one tool call. you get the result. you store it. (loop will iterate.)

no built in hooks. ask and act store directly.

some words i say are to change the previous thoughts, like "no built in hooks". they are not the definition. they are telling you dont mention the deprecated definition. you dont need to write them down.

i want to have a final spec.

---

autonomous continuous agent — compute spec

purpose

compute defines the core runtime of the agent.
it is responsible for continuity, intention, asking, interpretation, and action.
it contains no storage implementation details and no environment-specific logic.
it operates only through verbs.

---

principles

- the agent is continuous
- there is no task lifecycle
- there is no completion state
- history is append-only and external
- intelligence decides; tools act
- decorators wrap behavior; they do not introduce new behavior
- compute owns flow, not meaning

---

runtime shape

the runtime is a chain of verbs:

begin → prepare → loop → decide → (rest | plan → ask → parse → act → loop)

there is no internal termination.
the process may be stopped externally.

---

begin

begin is the entry point.

it receives all inputs without interpretation.
it passes them directly to prepare.
it then invokes loop with the result of prepare.

begin contains no logic.
it only composes.

---

prepare

prepare runs once.

it initializes the agent’s state.
the working directory is defined inside state.
configuration is loaded as-is.

prepare receives decorators.
each decorator specifies:

- a step name
- a decorator function

prepare wraps the corresponding verbs with the decorators.
wrapping happens only here.

prepare exports:

- state
- config
- wrapped verbs

prepare does not modify state or config beyond initialization.

---

loop

loop is infinite.

each iteration:

- consults decide
- if resting is chosen, calls rest
- if moving is chosen:

  - calls plan
  - passes the result to ask
  - passes the markdown to parse
  - iterates over tool calls
  - calls act for each

loop owns repetition.
it owns no intelligence and no action logic.

---

decide

decide determines motion or stillness.

it inspects the current state.
it may inspect recent outcomes.

it outputs a choice:

- move
- rest

decide is the only place that selects between action and waiting.

---

rest

rest represents intentional inactivity.

it takes no input.
it returns no output.

if undecorated, it performs no operation.
decorators may observe or delay.

---

plan

plan determines how to ask.

it receives state.
it may inspect config.

it constructs a prompt string.
it may include structure or instructions.

plan always outputs something.
whatever it outputs is passed directly to ask.

plan performs no requests and no actions.

---

ask

ask sends a prompt to intelligence.

it receives the output of plan.
it sends the request to a model.
it receives markdown.

ask stores the interaction as a side effect.

ask does not interpret the markdown.

---

parse

parse interprets markdown.

it extracts structured tool calls.
only explicit tool call representations are considered.
all other content is ignored.

the result is an ordered list of tool calls.
the list may be empty.

parse performs no actions.

---

act

act executes a single tool call.

it receives:

- a tool identifier
- parameters

it invokes the tool.
it observes the result.

act stores the action and its outcome.

act does not decide what to run next.
loop controls iteration.

---

decorators

decorators are wrappers around verbs.

a decorator:

- receives a verb
- returns a wrapped verb

decorators may:

- observe inputs or outputs
- log
- block or alter execution
- substitute behavior

decorators are applied in prepare.
they are identified by step name.
there is no dynamic registration during runtime.

---

non-goals

- no task abstraction
- no success semantics
- no internal storage logic
- no implicit context propagation
- no event system
- no hidden control flow

compute remains small, literal, and inspectable.

# 5

i said

use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style. use your previous style.

i mean you should write down the filenames and functions.

i mean the exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact exact markdown styling.

---

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

