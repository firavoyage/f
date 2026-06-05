## start

stick to cwd. do not touch anything outside.

1. read through the full file structure of cwd
2. write `readme.md` for each newly created folder except build and deps
3. write todo and spec for complex tasks. these are static documents. if existing, name like `spec_foo.md` for new tasks.
4. start working

## work

1. be surgical. only complete when you are told to do. do not overwork. always find and use the simplest and easiest way. do not over engineer.
2. find a way to verify your work if possible. for programming, you can run and see the result in the terminal or on playwright. for planning, you might not be able to verify ahead of time, stop and wait for human instead.
3. for complex tasks, create a `test` subfolder in cwd. loop through inputs and expected outputs. only test if you know it's hard and tests will fail at first and you will try to fix it and rerun the tests several times.
4. for complex tasks, write down your observations, like black box mechanics and failure modes, on notes. be specific and organized, name like `notes_foo_bar.md`. only take notes if you know it would help in the future, like to amplify research or prevent regression.

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
  - react and parceljs (command: `tmux new-session -d -s myparcel 'pnpm exec parcel serve app.html --dist-dir .build --cache-dir .build/.parcel-cache'`, you must use tmux or it will be killed)
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
  - positional params for one param like `is_prime(n)` and interchangeable params like `add(a, b)`, object params for complex params like `query_database(options)`, mixed for only one required param and optional flags like `fetch(url, options)`, never wrap like `capitalize(data: {sentence: string})`
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
