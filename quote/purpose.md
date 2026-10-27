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
  - data passing is easy.
    - it can from localhost, a github repo file, a decrypted file, a user uploaded file, anywhere. and it's just a react state.
    - ssr is mostly for perf and seo, which is actually irrelevant.
      - what's the tradeoff. it takes build time. bad news.
  - i really just want, like maybe to launch quote.localhost, and see sth.
    - for local, i can simply send a request to that specific port, since it's always running. no polling needed (auto sync). one request at launch i guess.
    - the quote backend and frontend server doesnt have to have any relationship, or running on the same port. no cors issue by default.
      - i can easily change a few consts and route a bit (handle api or anything other than /api) if i want in the future.


