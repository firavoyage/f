<!-- it's a bit more complex to have hierachy and interwinded deps in docs. but it worths i guess. -->

# 0.0

follow these:

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
  - lowercase for what and why, title case for where, sentence case in docs
  - never uppercase anywhere
  - no ascii styling, never fancy
- notes:
  - prefer modern proven libraries, do not reinvent wheels

# 0.1

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
