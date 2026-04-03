todo

message/paste · todo · tabs/things · scratch pad · weekly/projects · notes

<!--

be simple. leverage thinking.

i dont need infinite power. dont dive into tooling/methodology.

pragmatism.

an intuitive mind is sacred.

curiosity... good. but dont over do it.

learn by doing.

finish things: close, organize, think, prepare... importance over urgency.

 -->

<!-- make it work first. make it beautiful next. -->

<!-- "non trivial". -->

<!-- do things that dont scale. -->

<!--

archive.

organize.

analyze.

 -->

<!--

- **Action is the only metric.** You cannot think your way to a solution; you must build your way there.
- **Start with yourself.** The best ideas often come from solving a problem you have personally experienced.
- **Imperfect is beautiful.** A rough project that exists in the world is infinitely better than a perfect project that stays in your head.

- **The Trap of "Stealth Mode":** Hiding your idea to "protect" it usually means you are building something nobody wants. Share it early.
- **The Trap of Over-Engineering:** Do not build a complex system for thousands of users when you do not yet have one user. Solve the problem for one person first.
- **The Trap of Analysis Paralysis:** It is easy to get stuck choosing the perfect color or the perfect name. These things matter less than you think. Function comes first.

 -->

---

life

"arrange todo"

---

humility

(see humility roadmap)

---

(see things)

(see notes)

---

sync phone.

---

research manus use cases myself. find inspiration.

---

- gitignore, msrv, pnpm workspace, eslint, etc.
- find and solve friction (loop type inference etc.). ~~rm decorator maybe.~~
- runtime type check (research!) for tools

---

~~abstract sql.~~

use fs as storage. i need kv. i dont care perf (it's not gonna scale infinitely).

i dont need sql.

---

update log import. (if code does not handle it well. use linting.)

---

learn ts. migrate to ts. (src/dist? .build!)

check. plan.

build ts? do i need? how?

---

code review. rethink "loop".

---

refactor. no more jsdoc. (prev code? message?)

types? (rethink result. i think i will keep it. failures are expected, like unreliable network, invalid input, etc. try catches are dirty.)

---

lib adwaita on web.

---

openrouter api abstraction.

"chat(message)"

---

lobehub uses jina ai. just add r.jina.ai before your url.

there are a lot of things like jina, exa. find them all.

---

1m llm token: about 100,000 loc typescript

---

why

result: type ok err. value. error.

you can have

result: ok bool. value. error.

dont... or you can. since err is clearer than `!ok` sometimes maybe.

---

create a mock local openai compatible server.

(exploitation abstraction?)

and connect it! (... seems i could not manage context this way... and everyone assume it's available. let's try novita ai first. openrouter is also good.)

---

let's use opencode to make the refactor (ts, result) work.

claude code could work with workarounds. but im not gonna like it.

openrouter is good. my dollars are just sleeping there and not doing anything.

novita ai is also good. let's exploit maybe. idk if minimax could outperform or have a competitive quality with 1/10 price. let's do some simple research. and just proceed.

---

d.ts.

write big global types in it. good.

(chat message, for example. where to place?)

---

trim humility notes.

remove nonsense.

---

?

normalize

```
  - no try catch unless external libraries need, (... instead)
  - no throw
  - no nested if. if err, return/continue/break.
```

---

merge things & tabs?

---

(component libraries)

auto pass some default props like dark mode?

no need to overthink props/state. (abstraction on all frameworks / components)

i mean to be pragmatic.

---

try zed. evaluate zed.

(things, but top prior for its fun and simplicity. importance? maybe.)

~~rm flatpak one. use official.~~

~~(only those with confidence can go out of a package manager.)~~

> the editor for what's next.

(?) is that lit. fomo?

i appreciate its design!

---

fs.

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

kv.

---

ask.

---

testing. (?)

---

archive.

abstract.

---

simplify notes and research for drafts and humility.

rm most.

also simplify todos/things/tabs. (important)

---

humility project.

---

store a file. on a path. 

~~actually store the hash and map inside a folder. more features?~~

(already solved? i suppose)

---
