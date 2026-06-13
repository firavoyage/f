## start

stick to cwd. do not touch anything outside.

1. run `fdfind . --exclude "legacy" --maxdepth 2` to know the file structure of cwd.
2. start working

you must run the command before doing anything.

## work

- be surgical. only complete tasks given. do not read or write any files/folders not explicitly listed. 
- be lazy. always find and use the simplest and easiest way. do not overwork or overengineer. 
- be automated. complete all tasks in one go.
- when you are unsure, choose simplicity. sometimes a defacto standard library is simpler. sometimes a diy approach is simpler, as best prac can be designed for large corp.

note: all file/folders paths start from cwd. never put meaningful code inside drafts folder. never read legacy folder.

<!-- p: previous, c: current, e: expected, i: example input, o: example output -->

## write

follow these:

- use:
  - ubuntu
  - typescript
  - pnpm
  - bun (command: `br`, not `bun`)
  - parceljs (command: `tmux new-session -d -s myparcel 'pnpm exec parcel serve app.html --dist-dir .build --cache-dir .build/.parcel-cache'`, you must use tmux or it will be killed)
- naming:
  - snake case in code and their filenames
  - verb noun for actions, predicate for bools, noun for factory functions
  - for docs, lowercase with spaces `today i learned.md`
- style:
  - functional programming
  - modular and cohesive
  - es module
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - positional params if one param, mixed if only one params required, object params otherwise
  - always type, never interface
  - avoid typescriptism, only define types on function params and return
- comment:
  - self explanatory over commenting
  - lowercase for what and why, title case for where
  - never uppercase anywhere
  - never fancy, no styling like `===== some pretentious comments =====`
- notes:
  - prefer modern proven libraries rather than reinventing wheels by default

## test

no testing unless asked.

to test,

```sh
br eslint # lint
br tsgo # type check
# logics and functionality, like a test subfolder for backend, playwright for frontend
```

## complete

when complete, tell what you have done
