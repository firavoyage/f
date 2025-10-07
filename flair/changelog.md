# flair

## 1.0 20250920

- initial release

## 1.1 20250920

- import generate fn from f1.1
- add default glossary and theme

## 1.2 20250920

- add svg support to glossary

## 1.3 20250921

- fix: add default value (length) to stroke

## 1.4 20250922

- fix: use f.merge instead of obj.assign to handle deeply nested obj
- feat: add none, current, inherit, transparent to default theme.color

## 1.5 20250928

- feat: export flair to window.flair
- refactor: bundle a dependency, f inside flair

## 1.6 20250929

- fix!: correct merge logic
- fix: use iife to hide some global variables
- fix: make utility-[]! work
- feat!: support a lot of tailwind css v4.1 utilities

## 1.7

- feat!: support all tailwind css v4.1 utilities
  - only a few are not implemented, find all "todo" in the code
- fix!: make "bg-#99a1b330" work
  - handle the edge case when an item in glossary does not have default
  - from `type = item.default;`
  - to `type = has(item, "default") ? item.default : types[0]`
