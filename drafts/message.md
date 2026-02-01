be simple and clear.

use:

- ubuntu `home/fira`
- pnpm
- es module (always named, never default)

prefer:

- naming: one word is best. snake case if really needed (e.g. two functions, the same verb, different objects).
- style: functional programming, modular and cohesive

creating an autonomous continuous ai agent.

---

```
fira@Fira ~/Documents/f/humility/backend
 % tree
.
├── compute
│   ├── ask.js
│   ├── parse.js
│   └── test
│       ├── ask.js
│       └── parse.js
├── connect
│   ├── browser.js
│   ├── chatgpt.js
│   ├── deepseek.js
│   ├── listen.js
│   ├── readme.md
│   ├── send.js
│   ├── sessions.js
│   └── test
│       ├── browse.js
│       └── send.js
├── package.json
├── readme.md
├── reference.md
├── serve
│   └── run.js
└── store
    ├── db.js
    ├── flow.js
    ├── link.js
    ├── session.js
    ├── test
    │   ├── flow.js
    │   └── see.js
    └── thing.js
```

`store/flow.js`

- `create(name)`

  - create a new session and make it current
  - string `name`: human-readable session name
  - returns string: session id

- `list()`

  - list all existing sessions
  - returns array of `{ id, name, time }`

- `pick(session_id)`

  - select an existing session
  - moves cursor to the last step of the session
  - string `session_id`: session id
  - returns void

- `step(thing_id)`

  - move the cursor to a specific step
  - next write will branch from this step
  - string `thing_id`: thing id
  - returns void

- `write(type, data)`

  - create a new thing and link it from the current step
  - advances the cursor to the new thing
  - string `type`: thing type
  - object `data`: JSON-serializable payload
  - returns `{ id, time, type, data }`

- `read()`

  - read the current step
  - returns `{ id, time, type, data }` or `null`

- `back()`

  - move the cursor to the previous step
  - does not delete or modify data
  - returns string: new current thing id

- `view()`

  - view the current session from root to cursor
  - returns object:

    - `session`: session id
    - `current`: current thing id
    - `count`: number of steps in the path
    - `path`: array of thing ids in order

notes:

- all writes are append-only
- history is defined by the current cursor
- branching happens automatically when writing from an earlier step

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

---

i want to create a design system.

i will use it in many things i create in the near future.

it should feel calm and protect intention, like google reader/gmail legacy style/iphone os 4.

i dont love showmanship like the splendid animation when scrolling on some landing pages.

i dont love the vercel style. it's very clean and efficient, but it does not feel human. 

i somewhat love material design 3's colors. but i dont think it should be applied everywhere. it's a bit opinionated. and sometimes things are too big and flat.

im standing at the beginning, what could i decide.

---

When someone uses this for an hour, how should they feel afterward?

What would make me uncomfortable if I saw it in my own product?

What old interface do I still trust, and why?

i wont answer these. because i think you could infer. and im not good at english, idk how to say feelings, like what feelings exist in the world. (that's another question im not gonna talk here).

and im not a designer. i know figma, but i have not created works on it besides exploring its features out of curiosity.

about typography, density... on a legacy google reader copy i see comfortable/cozy/compact (default to comfortable). maybe it's up to the user. and claude (web chat) offers many fonts (default sans. but you could use serif, handwritten, playful ones, ...). i dont think that's what i mean by decision.

maybe you could show me something. i could open it, see it myself, and feel it.

although idk what's the deliverables of a design system. a document? prototypes? design sheets? css values? components book? maybe everything. but what i will use at last would be the things i import in code.

---

let me be clear. you did not get me.

i do want a component system. decisions and constraints are used to infer it. documents are helping people to understand and use it properly.

give me an html. let me open it and see whether it feels right.

---

<!-- not good. i want gradients and shadows. -->

good. 

but it's like a blog site.

include more things, like buttons, inputs, etc.

in the real world, i create complex tools. like photoshop, chatgpt, figma, google calendar, linear, github, etc.

and support dark mode. (which is my system default)

---

good. 

although it's too simple (e.g. it's using the browser default select).

i appreciate it.

i wanna 

- write something down about it. everything else (e.g. new components) could be inferred from it.
- create a react component system. use the boring way like big companies.
- create apps with it.

btw, this version does not feel very human. but no need to change it. i will add a variant (buttons with top down gradient, cards with some shadow). i mean, i want to change the variants without changing app code. (headless)

now only write things down. 


