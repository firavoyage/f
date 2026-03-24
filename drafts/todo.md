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

write `android.md`. 

config from fresh.

(parallel to ubuntu on readme)

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

use parcel.

---

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

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

revise: copy to markdown

i think it's good to just store things in html.

just write html in markdown, keeping the original computed styling, image size, etc. while stripping things like bg color.

markdown is not designed to store extracted main content.

export google ai & gemini. find a way (markdown?)

upd: sometimes, just use html in md and clear some tags. use contenteditable.

upd: high priority. with that, i dont have to fit google ai whatever. just copy html for any "document like element".

(btw, extracting the main content of a blog is completely another thing.)

it's easy. research and solve some cases. there are many. you can do it progressively. original is good enough. stripping tailwind classes if needed.

upd: lobehub uses jina ai. just add r.jina.ai before your url.

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

result with d.ts are available everywhere.

---

```js
// first
if result.ok do something
else handle error.

// second
if !result.ok handle return

do something

// third
if result.err handle return

do something

// fourth
if result.type === "ok" ...

else if result.type === "err" ...
```

i feel the third one is the best.

```ts
// simpler
type result

- err: false | whatever truthy
- value

// better

type result

- err: bool
- value?
- error?

// flexible

type result

- ok: bool
- err: bool
- value?
- error?

```

you would never write if else with many layers which is dirty.

if result ok sounds good. it carries delight. but you would not like it.

normally if ok you just proceed, if err you handle and return. you could not return in ok block.

and you wont like `!ok`. since you dont if ok, let's accept the tradeoff. 

`type == "ok" | "err"` is akin to rust. rust is loved. but simplicity is better. also, it avoids the `===` syntax of js.

you can also just access the value. if err, value does not exist, so it will fail loudly. (or undefined, actually)

---

write down the result type myself. it's easy. 

write manually. learn ts.

```
  - no try catch unless external libraries need, (... instead)
  - no throw
  - no nested if. if err, return/continue/break.
```

---

figure out weird yaml loc

---


