# changelog

## 1.0 20250925

- initial release

## 1.1 20250925

- refactor!: let precious return unrendered latex. put render latex to test.

## 1.2 20250930

- feat: add `inf: "\\infty"` to dict
- feat: support `[1,2)` for 1 <= x < 2
  - it will cause unmatched closing paratheses error before
- feat: support set and series
  - `{}` without linebreaks inside will be considered set and series, with braces symbol escaped
  - otherwise it will be fn cases or a list of true statements
- feat: `sum(i=1, n, f(i))` fn
- fix: consider `\\\\` as a separated token
- rejected: align
  - auto adding & before relational operators has too many edge cases
- refactor: use iife
- fix: make wrapping logic more comprehensive
  - `a+b` should be wrapped as (a+b)
  - `\frac{a}{b}` need not

## 1.3 20251001

- feat: fn `v()` vector
- feat: support literal spaces by escaping
  - the math renderer omits spaces by default
- feat: append arrows like `-> <- <=>` to dict
  - except `<=` which is reserved for leq.

## 1.4 20251002

- fix: handle cjk characters properly
  - on `type()`
- rejected: add common math set symbols like `R` `N` to dict
  - coz mathbb (double-struck/hollow) is the standard but causing pain in eyes
  - mathbf is not the standard
- feat: add fn `max(a)` `max(a, limitation)` and `min`
- feat: add fn `case(a)` -> `a^\circ`
- feat: support literal `"`

## 1.5 20251010

- fix: use `varnothing` instead of `emptyset`
  - varnothing displays better
