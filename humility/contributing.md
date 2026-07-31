## work

all paths start from cwd. do not touch anything outside current working dir.

never read legacy, dependencies, or build folders.

never write code inside drafts folder.

p: previous, c: current, e: expected, i: example input, o: example output

## write

- use:
  - typescript
  - pnpm
  - bun (you must not run bun)
  - parceljs (you must not run parcel)
- naming:
  - snake case by default
  - verb noun for actions, predicate for bools, noun for factory functions
- style:
  - functional programming
  - modular and cohesive
  - es module
  - always function statement, only arrow function for props
  - always type, never interface
  - self explanatory, no comments
- notes:
  - prefer modern proven libraries when needed
