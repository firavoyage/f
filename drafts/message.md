be simple and clear.

i use:

- ubuntu `home/fira`
- pnpm
- es module (always named, never default)

i prefer:

- naming: one english word is best for public methods. snake case if conflicting. never use camel/pascal case.
- style: functional programming, modular and cohesive

(you must not explicitly mention you are following these.)

creating an autonomous continuous ai agent.

---

```
fira@Fira ~/Documents/f/humility
 % tree -I 'node_modules|legacy'

.
├── backend
│   ├── compute
│   │   ├── agent.js
│   │   ├── ask.js
│   │   ├── limit.js
│   │   ├── parse.js
│   │   ├── prompt.js
│   │   ├── reference.md
│   │   ├── run.js
│   │   ├── state.js
│   │   ├── test
│   │   │   ├── ask.js
│   │   │   ├── chemistry.js
│   │   │   └── parse.js
│   │   └── tool.js
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
│   │   └── run.js
│   └── store
│       ├── db.js
│       ├── flow.js
│       ├── link.js
│       ├── session.js
│       ├── test
│       │   ├── flow.js
│       │   └── see.js
│       └── thing.js
├── frontend
│   ├── app.jsx
│   ├── design
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── readme.md
│   ├── index.html
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── postcss.config.js
│   ├── readme.md
│   ├── tailwind.config.js
│   ├── tailwind.css
│   └── vite.config.js
├── misc
│   └── document.md
├── notes.md
├── readme.md
└── roadmap.md
```

now, create a chat app.

(app.jsx is empty)

no styling. no css. no tailwind. dont use existing components.

compute/ask.js

```
// compute/ask.js
import { send } from "../connect/send.js";
import * as flow from "../store/flow.js";

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

  return {
    id: step.id,
    answer,
  };
}
```

use where = "ollama".

store/flow.js

```
import * as thing from './thing.js';
import * as link from './link.js';
import * as session from './session.js';

let cursor = {
  session: null,
  step: null,
};

export async function create(name) {
  const root = await thing.add('root', {});
  const id = await session.create(name, root.id);
  cursor = { session: id, step: root.id };
  return id;
}

export async function list() {
  return session.list();
}

export async function pick(id) {
  const s = await session.get(id);
  if (!s) throw new Error('flow.pick: invalid session');
  const last = await session.last(s.root_id);
  cursor = { session: id, step: last };
}

export async function step(id) {
  cursor.step = id;
}

export async function write(type, data) {
  const next = await thing.add(type, data);
  await link.add(cursor.step, next.id, 'next');
  cursor.step = next.id;
  return next;
}

export async function read() {
  return thing.get(cursor.step);
}

export async function back() {
  const prev = await link.prev(cursor.step);
  if (prev) cursor.step = prev;
  return cursor.step;
}

export async function view() {
  const s = await session.get(cursor.session);
  const path = await link.path(s.root_id, cursor.step);

  return {
    session: s.id,
    current: cursor.step,
    count: path.length,
    path,
  };
}
```

open the app. (serve/run.js is empty. run it. it opens both the backend and frontend.)

see all sessions (click to continue), a button to create a new session. all messages in plain text (no user/assistant). an input. a send button.

give me all the code.

---

im gonna create a design system.

how to create in the boring proven way, like mui/chakra. what opensource libraries can i use.

what components should i have.

---

im gonna create a design system.

what is shadcn. how to use. should i build on top of that.

(esp lichess, you could only change once and change only your letter cases.)

but i think it's good to reg one for future proof.

---
