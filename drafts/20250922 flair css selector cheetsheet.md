css selector cheetsheet in markdown table

---

# CSS Selectors Cheatsheet

## Basic Selectors

| Selector            | Example           | Description                                  |
| ------------------- | ----------------- | -------------------------------------------- |
| `*`                 | `*`               | Selects all elements                         |
| `element`           | `p`               | Selects all `<p>` elements                   |
| `.class`            | `.intro`          | Selects all elements with `class="intro"`    |
| `#id`               | `#header`         | Selects the element with `id="header"`       |
| `[attribute]`       | `[target]`        | Selects all elements with a target attribute |
| `[attribute=value]` | `[target=_blank]` | Selects all elements with `target="_blank"`  |

## Combinators

| Selector                | Example   | Description                                                      |
| ----------------------- | --------- | ---------------------------------------------------------------- |
| `selector1, selector2`  | `div, p`  | Selects all `<div>` AND all `<p>` elements                       |
| `selector1 selector2`   | `div p`   | Selects all `<p>` elements inside `<div>` elements               |
| `selector1 > selector2` | `div > p` | Selects all `<p>` where the parent is a `<div>`                  |
| `selector1 + selector2` | `div + p` | Selects the first `<p>` that is placed immediately after `<div>` |
| `selector1 ~ selector2` | `div ~ p` | Selects every `<p>` that is preceded by a `<div>`                |

## Attribute Selectors

| Selector              | Example                | Description                                                          |
| --------------------- | ---------------------- | -------------------------------------------------------------------- |
| `[attribute^=value]`  | `a[href^="https"]`     | Selects every `<a>` whose href attribute value begins with "https"   |
| `[attribute$=value]`  | `a[href$=".pdf"]`      | Selects every `<a>` whose href attribute value ends with ".pdf"      |
| `[attribute*=value]`  | `a[href*="w3schools"]` | Selects every `<a>` whose href attribute value contains "w3schools"  |
| `[attribute~=value]`  | `[title~=flower]`      | Selects elements with a title attribute containing the word "flower" |
| `[attribute\|=value]` | `[lang\|=en]`          | Selects elements with a lang attribute value starting with "en"      |

## Pseudo-classes

### Structural & Position

| Selector             | Example               | Description                                                |
| -------------------- | --------------------- | ---------------------------------------------------------- |
| `:first-child`       | `p:first-child`       | Selects every `<p>` that is the first child of its parent  |
| `:last-child`        | `p:last-child`        | Selects every `<p>` that is the last child of its parent   |
| `:nth-child(n)`      | `p:nth-child(2)`      | Selects every `<p>` that is the second child of its parent |
| `:nth-last-child(n)` | `p:nth-last-child(2)` | Selects every `<p>` that is the second child from the end  |
| `:first-of-type`     | `p:first-of-type`     | Selects every `<p>` that is the first `<p>` of its parent  |
| `:last-of-type`      | `p:last-of-type`      | Selects every `<p>` that is the last `<p>` of its parent   |
| `:nth-of-type(n)`    | `p:nth-of-type(2)`    | Selects every `<p>` that is the second `<p>` of its parent |
| `:only-child`        | `p:only-child`        | Selects every `<p>` that is the only child of its parent   |
| `:empty`             | `p:empty`             | Selects every `<p>` element that has no children           |

### State & Interaction

| Selector    | Example          | Description                                          |
| ----------- | ---------------- | ---------------------------------------------------- |
| `:hover`    | `a:hover`        | Selects links on mouse over                          |
| `:active`   | `a:active`       | Selects the active link                              |
| `:focus`    | `input:focus`    | Selects the input element which has focus            |
| `:visited`  | `a:visited`      | Selects all visited links                            |
| `:link`     | `a:link`         | Selects all unvisited links                          |
| `:checked`  | `input:checked`  | Selects every checked `<input>` element              |
| `:disabled` | `input:disabled` | Selects every disabled `<input>` element             |
| `:enabled`  | `input:enabled`  | Selects every enabled `<input>` element              |
| `:required` | `input:required` | Selects input elements with the "required" attribute |
| `:valid`    | `input:valid`    | Selects input elements with a valid value            |
| `:invalid`  | `input:invalid`  | Selects input elements with an invalid value         |

## Pseudo-elements

| Selector         | Example           | Description                                                  |
| ---------------- | ----------------- | ------------------------------------------------------------ |
| `::before`       | `p::before`       | Insert content before the content of each `<p>`              |
| `::after`        | `p::after`        | Insert content after the content of each `<p>`               |
| `::first-letter` | `p::first-letter` | Selects the first letter of each `<p>`                       |
| `::first-line`   | `p::first-line`   | Selects the first line of each `<p>`                         |
| `::selection`    | `::selection`     | Selects the portion of an element that is selected by a user |

## Specificity Values (from highest to lowest)

| Selector Type                | Specificity Value |
| ---------------------------- | ----------------- |
| Inline styles                | 1000              |
| ID selectors                 | 100               |
| Class/attribute/pseudo-class | 10                |
| Element/pseudo-element       | 1                 |

## Common nth-child Patterns

| Pattern            | Example              | Description                               |
| ------------------ | -------------------- | ----------------------------------------- |
| `:nth-child(odd)`  | `li:nth-child(odd)`  | Selects every odd child                   |
| `:nth-child(even)` | `li:nth-child(even)` | Selects every even child                  |
| `:nth-child(3n)`   | `li:nth-child(3n)`   | Selects every 3rd child                   |
| `:nth-child(3n+1)` | `li:nth-child(3n+1)` | Selects every 3rd child starting from 1st |
| `:nth-child(-n+3)` | `li:nth-child(-n+3)` | Selects the first 3 children              |

## Browser Support Notes

- Most basic selectors work in all modern browsers
- Some newer pseudo-classes like `:focus-within` have limited support
- Always check [caniuse.com](https://caniuse.com) for specific feature support
- Use vendor prefixes when necessary for better compatibility

This cheatsheet covers the most commonly used CSS selectors. Bookmark this for quick reference during development!
