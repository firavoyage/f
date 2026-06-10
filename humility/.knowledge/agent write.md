<!-- it's a bit more complex to have hierachy and interwinded deps in docs. but it worths i guess. -->

<!-- "object params for more than one uninterchangeable params, positional params otherwise, mixed for one param and optional flags" seems to hard to understand. -->

<!-- i guess it's extremely not common to see functions like add(a,b,c) irl. in prod code. interchangeablility is almost exclusive for math. -->

<!-- "when revising existing code, do not change unless asked" (i guess it's already default) -->

<!-- no need to mention gnome x11 zsh i guess -->

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

# 0.2

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

# 0.2-tmux

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

# 0.3

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
  - snake case for functions and variables
  - verb noun for actions, predicate for bools, noun for factory functions
  - lowercase with spaces for filenames `today i learned.md`
  - for react components, override all previous rules, use pascal case on both component function and its filename `MyComponent.tsx`
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

# 0.4

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
