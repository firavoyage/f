changes

# nov 2026

## 12

- web: + mvp, finalize scaffolding and libs
  - new thread
  - send
  - delete thread
- db/config: separate env from config

## 16

- web: - extensions, incl. emac like scrolling shortcuts, focus on (en) input
  - doesnt feel right to hardcode on app.ts
  - await import if needed

## 20

- log/thread: exclude non mutative thread history, such as sub, unsub
  - that's generally irrelevant

> 0.0 ~ 0.3
> 
> functional chat app

## 22

web/design: migrate to ~~tailwind css~~ native css

style lib does not abstract much informatically.

by trying to push dx, or just conciseness actually, to the extreme, it creates a very specific workflow and unconventional tweaks on util classes, w tons of dirty imperative code and an incomplete glossary.

clearly such abstraction leaks as you lose the full power of css.

> 0.4.1

---

web/app: + `markdown` component, deprecate "dangerous html" prop

text is not considered dangerous and you can inject directly. lol. (i wonder why there is html for innerhtml but not innertext)

> 0.4.2

web/app: document web libs on contributing, refactor codebase for coding agents

llms can really handle this, even a simple and fast one wo reasoning, as long as you document a bit if you go the unconventional way.

> 0.4.3

web/utility/text: have localization

> 0.4.4

<!-- utility/generate: generate_mock_realistic, slower generate w more subtle steps -->

<!-- web/app: show response line by line w fade in animation -->

that's not what you should do right now...

> 0.4
>
> refactoring for coding agents, localization

---

implement tool calls

> 0.5

refactor codebase

- find large files and separate
  - separate for the sake of separation, maybe not reused abstractions
  - generally better for current workflow, both for humans and agents
- web/utility? utility.


