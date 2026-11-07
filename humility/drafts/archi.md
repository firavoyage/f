archi

- store chats
  - you may list all threads, read and update a thread, or change metadata (e.g. title, folder, has deleted)
  - you may store as text (yaml) first and migrate to sqlite (or jsonl) for scalability later
    - threads
      - array of id and metadata
      - or better, id -> metadata
        - you can iterate the same, w faster query seems
    - (thread)
      - msg id -> content, metadata, ...
      - branches may share some same msg id (a msg id is of the full history of input and the random seed at the generation time)
      - ~~you may have msg id -> edits later~~ have msg position id instead (though it's highly irrelevant really feels)
  - avoid over engineering, better to store all messages in a thread (rather than external id of nodes on a tree)
  - what about editing?
    - it comes later, and i can absolutely implement the same as branching, w some additional metadata
      - i could engineer this, which makes sense. but actually, if it matters, the idiomatic way is to branch it, otherwise it's just another deleted thread (e.g. copy and mark as deleted, modify in place, and link w metadata).
        - it's easy to _extend_ it for scalability, like you may create msg position id, where all edits will share.
        - you may cache all msgs on the tree in memory. (wont have, not meaningful in the idiomatic way)
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


