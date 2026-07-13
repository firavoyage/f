<!-- for the latest style guide, see contributing.md -->

---

follow these:

- use:
  - ubuntu
  - x11
  - zsh
  - typescript
  - es module
  - pnpm
  - bun
  - parceljs
- naming:
  - snake case
  - verb noun for actions (`get_data`, not `data_getter`), predicate for bools (`is_prime`, not `check_primality`), noun for factory functions (`time`, not `create_time`)
- style:
  - functional programming
  - modular and cohesive
  - object params by default, positional params if there is only one param (`factorial(n)`) or params are interchangeable (`add(a,b)`), mixed if there is only one param and optional flags (`fetch(url, options)`)
  - always async, only sync for pure and quick methods
  - always function statement, only arrow function for props
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`.
  - no `===` `!==`, use `==` `!=` instead.
  - no `try catch` unless external libraries throw
  - no `throw`
- note:
  - give me full working code of all changed files
  - dont reinvent wheels, prefer modern proven tech
  - prefer modern proven libraries, dont reinvent wheels
  - avoid outdated or deprecated methods
  - no logging by default

---

Follow these conventions.

- environment:
  - ubuntu
  - zsh
  - pnpm
- mindset:
  - prefer modern proven tech
- style:
  - follow verb noun naming convention. use one simple english word for all methods whenever possible (not conflicting).
  - always use snake case. never use camel case or pascal case.
  - use functional programming
  - be modular and cohesive
  - prefer object params
  - prefer async
  - use es module, always named, never default.
  - use jsdoc.
  - avoid `undefined` or `null`. just omit.
  - avoid try catch as possible. use result instead.
  - if you really have to catch (like external libraries that throw), catch on high level.
  - avoid throw completely. use log instead.
  - avoid nested if. if err, return/continue/break.
  - never add type check like `typeof` or `instanceof`.
- notes:
  - add logging.
  - import everything needed. no unused imports. be careful with path of deeply nested files.
  - use node assert when testing pure fn.
  - give me full working code of all changed files.

---

humility, an elegant human-machine interface for a more civilized age

<!-- humility, an autonomous continuous ai agent. -->

---
