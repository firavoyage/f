changes

# 0.0 ~ 0.3

nov 2026

12

- web: + mvp, finalize scaffolding and libs
  - new thread
  - send
  - delete thread
- db/config: separate env from config

16

- web: - extensions, incl. emac like scrolling shortcuts, focus on (en) input
  - doesnt feel right to hardcode on app.ts
  - await import if needed

20

- log/thread: exclude non mutative thread history, such as sub, unsub
  - that's generally irrelevant

22

archive version 0.3, functional chat app

# 0.4

22

web/design: migrate to ~~tailwind css~~ native css

style lib does not abstract much informatically.

by trying to push dx, or just conciseness actually, to the extreme, it creates a very specific workflow and unconventional tweaks on util classes, w tons of dirty imperative code and an incomplete glossary.

clearly such abstraction leaks as you lose the full power of css.

---


