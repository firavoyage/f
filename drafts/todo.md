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

(see things)

(see notes)

---

humility

---

research manus use cases myself. find inspiration.

---

make log lib.

i can log, fs, kv.

---

rethink "loop".

---

refactor. no more jsdoc. (prev code? message?)

types? (rethink result. i think i will keep it. failures are expected, like unreliable network, invalid input, etc. try catches are dirty.)

---

lib adwaita on web.

---

lobehub uses jina ai. just add r.jina.ai before your url.

there are a lot of things like jina, exa. find them all.

---

d.ts.

- std types
- bot types

---

?

think.

normalize

```
  - no try catch unless external libraries need, (... instead)
  - no throw
  - no nested if. if err, return/continue/break.
```

"prefer early return when err to avoid nested conditions"

---

(component libraries)

auto pass some default props like dark mode?

no need to overthink props/state. (abstraction on all frameworks / components)

i mean to be pragmatic.

how does adwaita do.

---

fs.

abstract fs like ruby.

change name: snake case. single word.

change behavior: create path when needed, like vscode. handle common issues like dangerous/invalid characters.

kv.

---

ask.

---

archive.

abstract.

---

simplify notes and research on drafts and humility.

rm most.

also simplify todos/things/tabs. (important)

merge things & tabs?

trim humility notes. remove nonsense.

---

what should i do now?

simplify. 

research, think, write, review the reality.

---

xdg spec.

folders on all platforms.

---

provider abstraction design. ~~generator.~~

ux.

---

testing (?)

i dont think we need that heavy js testing libs.

a test lib? yaml.

fn. input. output. 

you can actually dynamic import.

```ts
await import(module_path) // the same as normal import
// you get a obj of fn. 
```

write a simple testing lib.

---

watch films. there are many.

pick some bangumis from anime sedai. there are not many left.

---

lint unused?

find a config.

ci.

---

git abstraction.

i think you could even as daily backup... and sync.

---

log.

decorator?

reproduce?

---

uninteractive widgets.

- math graph
- color
- trend
- weather
- stock / currency / polymarket

research types. (maybe py lib plus google sans)

<!-- though, i wish google ai mode could show the original code... upd: well, it does. (?) no, it does not. it's not the graph code. though it's quite simple. just a bit default styling (margin, font) and pyplotlib knowledge. it shows an animation on web, but i suppose it's just fetching data, not rendering in js. -->

---

linear foss ui.

categorize and simplify todos, research, and notes.

e.g. projects.

---

github 3p ui.

---

humility: export, reproduce, copy and paste the prompt & result, proxy.

---

file lib.

tell it how to handle errors (div zero pattern)

(you might repeat div zero on var/prop name and type. but that's generally acceptable?)

(you dont have to wrap, but it's good to avoid magic consts and export the errors)

> rust builtin error types in std (e.g. file)

...

rm the "files" tab.

- success.
- fail.

just list all the failures.

name the methods.

you know them.

awa some non standard ones.

- file name too long (trim?)
- invalid name (convert? how?)
- no space
- no ram
- non existing (auto create the path.)

xdg desktop? (i think so. if we always combine two abstractions, we could simplify it as a pattern.) compatible?

symlink hash?

---

bilibili fav sync. & auto backup.

auto backup means to backup once you save. e.g. zhihu, berryberry.

though, ive no idea if those taken down within 1d are valuable for archival.

---

spec template.

---

check the time on file name by file metadata in drafts w shell script

typo lib?

a bigger and better lib?

build a cli for that.

learn

- cli
- typo lib
- time lib (file)

---

export twitter. research cli. or build my own.

---

print.


