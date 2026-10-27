purpose

oct 2026

27

keep it simple stupid.

- launch a server on a fixed port for simplicity
  - for any payload, store it in data folder
  - i may choose text or sqlite
  - both jsonl and sqlite can work i guess
  - yaml might not work at scale
  - text is generally easier to work w, maybe jsonl is the choice
- have a userscript
  - use mousetrap and listen for q
  - when it's pressed and there is some selection
  - send it, and
  - log it (e.g. in console)
  - no need to remove duplicate entries for now
- for ui
  - i may use spa normally
  - or i can build it, for perf, and it's also easier to host on github for example
  - i have no experience of ssg
  - i guess i can csr anyway, it's not really hard to iterate a json array, compared w the complexity of ssr
