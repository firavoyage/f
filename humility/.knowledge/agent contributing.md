# 0.0

## start

stick to cwd. do not touch anything outside.

1. run `fdfind . --exclude "legacy" --maxdepth 2` to know the file structure of cwd.
2. start working

you must run the command before doing anything.

## work

- be surgical. only complete tasks given. do not read or write any files/folders not explicitly listed. 
- be lazy. always find and use the simplest and easiest way. do not overwork or overengineer. 
- be automated. complete all tasks in one go.
- when you are unsure, choose simplicity. sometimes a defacto standard library is simpler. sometimes a diy approach is simpler, as best practices might not fit outside big corps.

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
  - avoid typescriptism, only define types on functions and global variables in your own code
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

# 0.1

## work

- you must run `fdfind . --exclude "legacy" --maxdepth 2` before doing anything
- stick to cwd. do not touch anything outside.
- be surgical. only complete tasks given. do not read or write any files/folders not explicitly listed. 
- be lazy. always find and use the simplest and easiest way. do not overwork or overengineer. 
- prefer simplicity over big tech best practices

all file/folder paths start from cwd. never put meaningful code inside drafts folder. never read legacy folder. never look into deps or build.

<!-- p: previous, c: current, e: expected, i: example input, o: example output -->

## write

follow these:

- use:
  - ubuntu
  - typescript
  - pnpm
  - bun (command: `br`, not `bun`. do not run it unless asked.)
  - parceljs (you must not install or run it yourself)
- naming:
  - snake case by default
  - verb noun for actions, predicate for bools, noun for factory functions (`date`, not `create_date`)
  - for react components, you must use pascal case (`ScrollArea.tsx`, not `scroll_area`)
- style:
  - functional programming
  - modular and cohesive
  - es module
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - positional params if one param, mixed if only one param required, object params otherwise
  - always type, never interface
  - avoid typescriptism, only define types on functions and global variables in your own code
- comment:
  - self explanatory over commenting
  - lowercase for what and why, title case for where
  - never fancy, never uppercase anywhere, no styling like `===== some pretentious comments =====`
- notes:
  - prefer modern proven libraries when needed

## test

you must not run any tests, linting, or typecheck.

## complete

when complete, tell what you have done
