archi

- store chats
  - you may list all threads, read and update a thread, or change metadata (e.g. title, folder, has deleted)
  - you may store as text (yaml) first and migrate to sqlite (or jsonl) for scalability later
    - threads
      - array of id and metadata
      - or better, id -> metadata
        - you can iterate the same, w faster query seems
    - (thread)
      - ~~msg id -> content, metadata, ...~~
      - array of content and metadata (you may have id)
        - you would never query a msg given a thread it seems, at least currently
        - they are interchangeable in information, you can change your mind later
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


---

plugins

plugins are decorators.

~~a decorator takes the fn itself along w all args.~~ a decorator takes the fn and returns the wrapped one.

hooks are specific decorators.

for example, search

- search
  - (generate search query)
  - get search results: query -> link[]
  - decide pages to fetch: link[] -> link[]
  - fetch pages: link[] -> html[]
  - read pages: html[] -> md[]

functions are pure.

they either abstract or compose (pipe).

chances are these pages are generally static but sometimes inaccessible.

so you can cache.

it's especially useful for like codeforces.

specifically

- you would decorate the fetch fn to use caches in project have
  - you could not alter fn type though. if you wanna introduce some new param, like "no cache", you may disable the builtin fn and add your own. you may name the same as long as they are not enabled simultaneously
- you may decorate send
  - you may simulate llm tool call, like fetch, directly, if you know it needs such page content or file content
  - simply, you may just alter user msg to append or prepend such attachment
  - alternatively, ~~you may prepend tool call (assistant) and tool result (user)~~
    - well you could not start w assistant msg
      - though conceptually it could be proactive
  - or append user msg, assistant tool call, and send the tool result instead (or you may send alongside the initial msg if matters)

on web, it can get a little bit tricky, as they are not strictly pure fn.

generally you have to inspect the structure on (react) devtools first, or via agents.

you have semantic classes so it's straightforward if css alone can do it.

thanks to hyperscript lib. you can map some built components to your specific ones. you might still have to look at the implementation of the original fn if you just wanna modify a bit though. that's expected.

so, in conclusion

- on web
  - you inject css, or map some components for hyperscript
- on backend
  - you hook specific fn on tool calls
  - to implement, you may wrap everything on index, which tries to read hooks by fn name (fn -> hook[] -> hook js), and await import, so you can dynamically inject hooks on the fly

multiple decorators pipe from first to last.

for search, it doesnt even have a standard implementation. so a decorator might not have to really literally "decorate" it.

for example, you may put the foundation implementation of such decorator first.

a function wo implementation is identity fn.


