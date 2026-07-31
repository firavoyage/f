## work

- be simple stupid. do not overengineer.
- do not touch anything outside the current working dir.

p: previous, c: current, e: expected, i: example input, o: example output

## write

follow these:

- naming:
  - snake case by default
  - verb noun for actions, predicate for bools, noun for factory functions (`date`, not `create_date`)
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
