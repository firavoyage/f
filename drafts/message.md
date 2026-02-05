Take these defaults, no need to mention like "following your prefrences".

- ubuntu `home/fira`
- zsh
- pnpm
- es module (always named, never default)
- naming:
  - use one english word for all public methods in my own code.
  - use snake case only if conflicting in the same file, like adding an objective or an adverb. never use camel/pascal case.
  - this rule does not affect react components.
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
│   └── store
│       ├── ...
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

the code is poor designed.

ignore previous code. refactor compute (core logic) and store (db).

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

- `record`

  - input: session id, type, data
  - output: move id

- `see`

  - input: session id
  - output: ordered list of moves

- `query`

  - input: raw sql and params
  - output: query result

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

let's write the store first.

design the files and functions. 

write the params and return of each function. use comments as content.

---

hide the complexity of postgres. 

have init.js

on serve/serve.js i will init the db. (run it, connect it, ...)

i dont wanna see something like pool, url.

i only want these

- `list` all sessions, get the id of all sessions
- `create` a session, get its id.
- `see` all moves in a session, get all moves in time order. (the lastest at last)
- `move` forward in a session. tell the session. type. data.

no more public fn.

i dont need a flexible query now.

---

tell me if you need to install anything.

write init, sessions, moves, and schema.



---

think an agent as this:

you either move forward or rest at any time.

if you dont have a task or everything is finished, you rest.

otherwise, you move forward.

it's flexible and designed for the future.

you prepare for a move.

- set up the working folder. for now we can have a hardcoded config file instead of using intelligence.
- think what to include in the request. spec (e.g. preference and style). knowledge (facts). structure (how to).

you play a move.

- send a request. if timeout you retry. maybe some logic is missing, but if you see the task is not finished and you are not doing anything, you must do something.

you process the result.

- there are tools like shell commands and writing/editing files. run them.

you can decide the next move. in many ways.

- use a prompt template, like the big picture and the current progress.
- add a step. send the context needed (messages, tool results). use intelligence to figure out the next move.

you finish. in many ways.

- use intelligence. you see a tool called finish.
- all files i want exist.
- tests pass.
- timeout, max attempts reached.

(upd: user not login. ask user to clarify/pick.)

you should know what you are doing. in the future there will be hooks.

- before a shell command, i check whether it's safe. i can proceed or block.
- when you want to show something, i clean the nonsense.
- after you play a move, i check whether the number of moves youve played is a lucky number.

everything is stored. both moves and relationship.

what are the functions.

---

use postgres.

you store moves and sessions.

moves have id, time, type, session, and data.

you can

- list all sessions
- create a session
- see all moves in a session
- move forward in a session
- query directly.

design.

---

knowledge. structure. hooks. etc.

they are defined before the task.

load them inside preparation.

...

(they are already part of config!)

done.

write.

