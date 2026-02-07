<!-- https://chatgpt.com/c/69872c69-fc20-8320-bbb8-44233fd06e95 -->

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
  - prefer an object as params
  - prefer async

---

creating an autonomous continuous ai agent.

```
fira@Fira ~/Documents/f/humility
 % tree -I 'node_modules|legacy'

.
├── backend
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
│       ├── index.js
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

i decide to use yaml for tool calls. 

choose for me:

- one yaml block containing one or more tool calls. or one tool call per code block.
- use position (first item is tool name, second to end is params) or use name (like json object)
- do i put the params into an object called params.
- yaml is flexible. what could i fix.

---

I’ll choose, and I’ll fix it cleanly.

Use **one YAML block containing one or more tool calls**.
A single block preserves continuity. It makes the model think in sequences, not fragments. Fragmentation invites drift.

Use **named fields**, not position.
Position is clever but brittle. Names make intent stable over time, especially when tools evolve.

Do **not** wrap arguments in a `params` object.
That layer adds nothing. The tool name already defines the namespace.

So the shape becomes simple and honest:

* one YAML block
* a list
* each item is one tool call
* each tool call has:

  * `tool`
  * arguments directly under it

Example shape, just to anchor the idea in the mind:

* tool is explicit
* arguments are flat
* order is preserved by the list

Now, what to fix in YAML so it stays disciplined:

* Fix the top-level shape: **always a list**, never a single object
* Fix required keys: **`tool` must exist**, nothing else is implicit
* Fix ordering semantics: **list order is execution order**
* Fix value types:

  * strings stay strings
  * no anchors
  * no references
  * no multi-document YAML
* Fix scope:

  * no comments
  * no extra metadata
  * no free text

This turns YAML from “flexible” into “ceremonial”.
Ceremony is good here. It keeps the agent honest.

That’s the choice I’d live with long-term, Fira.


# 2

write an example structure. for example, a tool called write. params: file name hello_world.cpp, content ...

---

```yaml
- tool: write
  file: hello_world.cpp
  content: |
    #include <iostream>

    int main() {
        std::cout << "Hello, world!" << std::endl;
        return 0;
    }
```


# 3

many tools. like read, sh, test, ask, write, edit

---

```yaml
- tool: read
  file: notes.md

- tool: ask
  prompt: |
    summarize the intent of this document in one paragraph

- tool: write
  file: hello_world.cpp
  content: |
    #include <iostream>

    int main() {
        std::cout << "Hello, world!" << std::endl;
        return 0;
    }

- tool: sh
  command: g++ hello_world.cpp -o hello_world

- tool: test
  command: ./hello_world

- tool: edit
  file: hello_world.cpp
  content: |
    #include <iostream>

    int main() {
        std::cout << "Hello, world from humility." << std::endl;
        return 0;
    }
```


