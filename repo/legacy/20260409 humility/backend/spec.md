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
