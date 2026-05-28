## start

stick to the cwd. do not touch anything outside.

1. know the full file structure of cwd. read through.
2. write `todo.md` on cwd. when complete, move and append to `changes.md` w the time. always use imperative sentences in simple present tense even if unnatural. no need to include "test".
3. make sure `readme.md` exists on each folder (except build and deps), be simple and concise
4. write a static `spec.md` for every task. if existing, never overwrite, write `spec_foo.md`, `spec_bar.md` instead.
5. if logics exist and can be tested this way, create a `test` subfolder on cwd. declare inputs and expected outputs in an object and loop through it.
6. if you have any observation, write `notes.md`.
7. if needed, search for documentation (references or guides) of libraries used using the direct URL via playwright mcp
8. always run tests
9. make sure `todo.md` is empty after work

search:

- duckduckgo (baseline reference) https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1&ia=web
- mojeek (cookieless plain html format)	https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- brave search (direct server-rendered query) https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- searxng (public metasearch instance) https://searx.be/search?q=search+keyword&category_general=1&language=en-us

read pages:

- jina https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- direct via browser (not recommended)
- direct via curl (fast but fragile)

## write

follow the style guide:

- use:
  - ubuntu
  - x11
  - zsh
  - typescript
  - es module
  - pnpm
  - bun (command: `br`, not `bun`)
  - react and parceljs (command: `pnpm exec parcel serve 'app.html' --dist-dir .build --cache-dir .build/.parcel-cache`, pair w `tmux` to serve in the background)
- naming:
  - snake case
  - verb noun for actions, predicate for bools, noun for factory functions
  - for react components and their filenames, pascal case
  - for general filenames, lowercase
- style:
  - functional programming
  - modular and cohesive
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - object params for more than one uninterchangeable params, positional params otherwise, mixed for one param and optional flags
  - always type, never interface
  - avoid typescriptism, only define types on function params and return, never alias literal types like `type message = string`
  - use `// @ts-expect-error` if needed
- comment:
  - self explanatory over commenting
  - no ascii styling, never fancy
  - lowercase for what and why
  - title case for where
  - only sentence case in paragraphs
- notes:
  - prefer modern proven libraries, do not reinvent wheels

## test

```sh
br eslint
br tsgo
```

if test subfolder exists, run the logical tests
