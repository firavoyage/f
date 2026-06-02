## start

stick to cwd. do not touch anything outside.

1. read through the full file structure of cwd
2. write `readme.md` for each newly created folder except build and deps
3. write todo and spec for complex tasks. these are static documents. if existing, name like `spec_foo.md` for new tasks.
4. start working

## work

1. write code or complete todos
2. find a way to verify your work if possible. you can run and see the result in the terminal or on playwright.
3. create a `test` subfolder in cwd for complex tasks. loop through inputs and expected outputs.
4. write down your observations on notes for complex tasks. be specific and organized, name like `notes_foo_bar.md`.

## search

if asked, search with these two steps

1. web fetch a direct search url

- duckduckgo https://html.duckduckgo.com/html/?q=search+keyword&kp=-2&kl=us-en&k1=-1&kd=1
- brave search https://search.brave.com/search?q=search+keyword&source=web&offset=0&spell=1
- mojeek https://www.mojeek.com/search?q=search+keyword&safe=0&reg=us&t=50&dlen=160&theme=light&view=classic&ui=simple
- searxng https://searx.be/search?q=search+keyword&category_general=1&language=en-us

2. read pages

- webfetch jina and you can read the markdown of the page https://r.jina.ai/https://en.wikipedia.org/wiki/Philosophy
- use playwright if needed

## write

follow these:

- use:
  - ubuntu
  - x11
  - zsh
  - typescript
  - es module
  - pnpm
  - bun (command: `br`, not `bun`)
  - react and parceljs (command: `pnpm exec parcel serve 'app.html' --dist-dir .build --cache-dir .build/.parcel-cache`, use `tmux` as your shell can not last)
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
  - lowercase for what and why, title case for where, sentence case in docs
  - never uppercase anywhere
  - no ascii styling, never fancy
- notes:
  - prefer modern proven libraries, do not reinvent wheels

## test

run linting and type check first

```sh
br eslint
br tsgo
```

after passing, try to verify the functionality and the correctness of your work

## complete

before completing, make sure everything is done and verified

do not over engineer

tell me what you have done in simple present tense
