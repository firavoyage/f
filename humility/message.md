follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - es module
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions, predicate for bools
- style:
  - functional programming
  - modular and cohesive
  - object params
  - async if needed
  - always function statement, arrow function only as props
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`.
  - no `===` `!==`, use `==` `!=` instead.
  - no `try catch` unless external libraries throw
  - no `throw`
- notes:
  - add simple logging
  - give me full working code of all changed files.

---

Follow these conventions.

- environment:
  - ubuntu
  - zsh
  - pnpm
- mindset:
  - prefer modern proven tech
- style:
  - follow verb noun naming convention. use one simple english word for all methods whenever possible (not conflicting).
  - always use snake case. never use camel case or pascal case.
  - use functional programming
  - be modular and cohesive
  - prefer object params
  - prefer async
  - use es module, always named, never default.
  - use jsdoc.
  - avoid `undefined` or `null`. just omit.
  - avoid try catch as possible. use result instead.
  - if you really have to catch (like external libraries that throw), catch on high level.
  - avoid throw completely. use log instead.
  - avoid nested if. if err, return/continue/break.
  - never add type check like `typeof` or `instanceof`.
- notes:
  - add logging.
  - import everything needed. no unused imports. be careful with path of deeply nested files.
  - use node assert when testing pure fn.
  - give me full working code of all changed files.

---


humility, an autonomous continuous ai agent.

---

folder shape.

```
 ...f/humility/backend % tree -I "node_modules"         
.
├── compute
│   ├── act.js
│   ├── ask.js
│   ├── begin.js
│   ├── decide.js
│   ├── load.js
│   ├── loop.js
│   ├── parse.js
│   ├── plan.js
│   ├── prepare.js
│   ├── rest.js
│   ├── spec.md
│   ├── test
│   │   ├── act.js
│   │   ├── ask.js
│   │   ├── computer_graphics.js
│   │   ├── load.js
│   │   ├── parse.js
│   │   ├── prepare.js
│   │   └── tools.js
│   └── tools
│       ├── edit.js
│       ├── read.js
│       ├── shell.js
│       └── write.js
├── connect
│   ├── browser.js
│   ├── chatgpt.js
│   ├── deepseek.js
│   ├── listen.js
│   ├── mock.js
│   ├── ollama.js
│   ├── readme.md
│   ├── send.js
│   ├── sessions.js
│   └── test
│       ├── browse.js
│       └── send.js
├── lib
│   └── log.js
├── package.json
├── readme.md
├── reference.md
├── serve
│   └── serve.js
├── spec.md
├── store
│   ├── index.js
│   ├── init.js
│   ├── moves.js
│   ├── schema.js
│   ├── sessions.js
│   └── test
│       └── test.js
└── types.d.ts

10 directories, 46 files
```

---

types

...

log

...

---

now it works.

but i want to let it narrow properly.

in rescue if, it must be err.

later, it must be ok.

i dont want to unwrap anything. dont make ok an object.

```
type ok<T> = Exclude<T, err>
type err = { type: string, message: string }

declare global {
  type result<T> = ok<T> | err;
}

export function ok<T>(value: ok<T>): ok<T> {
  return value
}

const err_prototype = {}

export function err(error: err): err {
  return Object.create(err_prototype, {
    type: {
      value: error.type,
      writable: false,
      enumerable: true
    },
    message: {
      value: error.message,
      writable: false,
      enumerable: true
    }
  })
}

export function rescue<T>(result: result<T>): boolean {
  return result instanceof err
}

function foo(): result<boolean> {
  if (Math.random() > 0.5) {
    return ok(true)
  } else {
    return err({ type: "bad luck", message: "damn" })
  }
}

function test() {
  let bar = foo()

  if (rescue(bar)) {
    console.log(bar);
    return;
  }

  console.log(bar);
}

test()
```


