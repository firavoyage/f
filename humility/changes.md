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
