## start

stick to cwd. do not touch anything outside.

- run `fdfind . --maxdepth 2` to know the file structure of cwd.
- start working

## work

- be surgical. only complete what you are told to do. do not overwork. always find and use the simplest and easiest way. do not over engineer.
- use `fdfind --exclude "legacy" -- "search pattern"` to find filenames. use `rg -g "!legacy/" -- "search pattern"` to search content.
- for newly created folders (except build and deps), write `readme.md`
- verify your work if possible. for programming, run and see result on terminal or playwright. for planning, it might not be feasible to predict ahead of time, stop and wait for human review instead.
- for complex tasks, create a `test` subfolder. loop through inputs and expected outputs. only test if you know it can be easily tested (e.g. backend pure fn) and it's really hard and it will fail at first and you might rerun the tests.
- when you are unsure, choose simplicity over defacto standard over guess work

## write

follow these:

- use:
  - ubuntu
  - typescript
  - pnpm
  - bun (command: `br`, not `bun`)
  - react and parceljs (command: `tmux new-session -d -s myparcel 'pnpm exec parcel serve app.html --dist-dir .build --cache-dir .build/.parcel-cache'`, you must use tmux or it will be killed)
- naming:
  - snake case by default, for code filenames `fix_typos.ts`, functions, and variables
  - to name a function, verb noun for actions, predicate for bools, noun for factory functions
  - in react, override all previous rules, use pascal case for both component function and its filename `MyComponent.tsx`
  - for docs filenames, lowercase with spaces `today i learned.md`
  - no need to alias external libraries
- style:
  - functional programming
  - modular and cohesive
  - es module
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
  - no ascii styling like `===== some pretentious comments =====`, never fancy
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
