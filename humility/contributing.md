## work

all paths start from cwd. do not touch anything outside current working dir.

never read legacy, dependencies, or build folders.

never write code inside drafts folder.

you may see some aliases. p: previous, c: current, e: expected, i: example input, o: example output

you must not run bun, parcel, test, lint, or typecheck yourself.

## write

- use:
  - typescript
  - pnpm
  - bun
  - parceljs
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
