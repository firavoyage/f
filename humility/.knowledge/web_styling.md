# 0.0

## Philosophy

- Vanilla CSS only
- Modern CSS features are powerful enough.

## Architecture

- normalize css
- Flat file structure: `my_design.css` only one css file for a design system

## Color System

- **OKLCH** color space (perceptually uniform).
- Raw LCH values: `--lch-blue: 54% 0.15 255`
- Semantic colors: `--color-link: oklch(var(--lch-blue))`
- Dark mode via single `@media (prefers-color-scheme: dark)` query.
- `color-mix()`: derive palette from one variable.

## Spacing

- Character-based: `--inline-space: 1ch` (horizontal), `--block-space: 1rem` (vertical).
- Responsive breakpoints use character count: `@media (min-width: 100ch)`.

## Utility Classes

- no.
- use the component name as the classname of the root element
- use kebab for children
- every element should only have one semantic class
- use data attr for states

## Modern CSS Features Used

- Custom properties (variables)
- Container queries
- `color-mix()` for dynamic colors
- `clamp()`, `min()`, `max()` for responsive sizing
- `@starting-style` for entrance animations
- View Transitions API
- CSS masks for spinners

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
.Card {
  padding: var(--...);
}
.Card-title {
  font-size: var(--...);
}
.Card-desc {
  color: var(--...);
}

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title {
  color: var(--...);
}
```



# 0.1

## Philosophy

- Vanilla CSS only
- Modern CSS features are powerful enough.

## Architecture

- normalize css
- Flat file structure: `my_design.css` only one css file for a design system

## Color System

- **OKLCH** color space (perceptually uniform).
- Raw LCH values: `--lch-blue: 54% 0.15 255`
- Semantic colors: `--color-link: oklch(var(--lch-blue))`
- Dark mode via single `@media (prefers-color-scheme: dark)` query.
- `color-mix()`: derive palette from one variable.

## Spacing

- Character-based: `--inline-space: 1ch` (horizontal), `--block-space: 1rem` (vertical).
- Responsive breakpoints use character count: `@media (min-width: 100ch)`.

## Utility Classes

- no.
- use the component name as the classname of the root element
- use kebab for children
- every element should only have one semantic class
- use data attr for states

## Modern CSS Features Used

- Custom properties (variables)
- Nesting
- `color-mix()` for dynamic colors
- `clamp()`, `min()`, `max()` for responsive sizing
- `@starting-style` for entrance animations
- View Transitions API
- CSS masks for spinners

## Example

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
.Card {
  padding: var(--...);
}
.Card-title {
  font-size: var(--...);
}
.Card-desc {
  color: var(--...);
}

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title {
  color: var(--...);
}
```
