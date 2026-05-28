## start

stick to cwd. do not touch anything outside.

1. read through the full file structure of cwd
2. write `readme.md` on each folder/subfolder except build and dependencies, be simple and concise
3. write a static `spec.md` for each task. if existing, write `spec_foo.md`, `spec_bar.md` instead.
4. write `todo.md` on cwd.
5. start working

## work

1. for backend code, create a `test` subfolder on cwd. declare inputs and expected outputs in an object and loop through it. only write meaningful tests.
2. write code, complete todos
3. test
4. if tests fail, search for official docs or community guides.
5. write down observations possibly helpful in the future on `notes.md`. if needed, categorize like `notes_foo.md`, `notes_bar.md` to be specific.

## search

do not hesitate to search if things are not obvious

1. web fetch the direct search url

- duckduckgo https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1
- brave search https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- mojeek https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- searxng https://searx.be/search?q=search+keyword&category_general=1&language=en-us

if blocked, choose another engine or use playwright

2. read pages

- webfetch jina https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- if failed, use playwright

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

always run eslint and tsgo first

```sh
br eslint
br tsgo
```

for backend code, run the logical tests in test subfolder

for frontend code, use tmux and parcel to serve, and use playwright mcp to see

## complete

1. write `changes.md` w the time. only use imperative sentences in simple present tense.
2. clear `todo.md`

