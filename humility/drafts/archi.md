archi

- store chats
  - you may list all threads, read and update a thread, or change metadata (e.g. title, folder, has deleted)
  - you may store as text (yaml) first and migrate to sqlite (or jsonl) for scalability later
    - threads
      - array of id and metadata
      - or better, id -> metadata
        - you can iterate the same, w faster query seems
    - (thread)
  - avoid over engineering, better to store all messages in a thread (rather than external id of nodes on a tree)
  - what about editing?
    - i can absolutely implement the same as branching
- query llm
  - build manually, would be easy
  - think in inputs and outputs
    - chances are existing frameworks are overly complicated and confusing
- render md
  - csr
    - perf is not a problem, considering the flexibility csr gives
  - streaming
    - better to stream blocks of text rather than characters, e.g. complete paragraphs, code blocks
    - you may stream code blocks line by line


