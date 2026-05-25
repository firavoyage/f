naming: pascal case for react components

styling:

have a global css file for each design system. use link element. load everything. disable not needed.

classname of the root element is the same as the component name. use kebab for children.

an element can only have one class.

use data attr for states.

example:

```jsx
export function Card({ active }) {
  return (
    <div className="Card" data-active={active}>
      <h1 className="Card-title">Component Title</h1>
      <p className="Card-desc">Perfect, flat string literals.</p>
    </div>
  );
}
```

```css
.Card { padding: var(--...); }
.Card-title { font-size: var(--...); }
.Card-desc { color: var(--...); }

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title { color: var(--...); }
```

dark mode: `@media (prefers-color-scheme: dark)`

use css variables.

sematic colors: `oklch`, `color-mix()` for variants and transparency

spacing: `--inline-space: 1ch` (horizontal), `--block-space: 1rem` (vertical).

use character count for responsive breakpoints: `@media (min-width: 100ch)`.
