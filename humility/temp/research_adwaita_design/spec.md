# web styling

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

# design tokens

Visual Categories Included in Design Tokens

A comprehensive design system built using methodologies like the [Atlassian Design System](https://atlassian.design/tokens/design-tokens) or Adobe's [Spectrum](https://spectrum.adobe.com/page/design-tokens/) tokenizes almost every core visual style:

- **Color**: Brand palettes, semantic fills (success, error, warning), backgrounds, text colors, and borders.
- **Spacing**: Paddings, margins, grid gaps, and layout separations, often organized into modular scales (e.g., `spacing-small = 8px`).
- **Typography**: Font families, font weights, font sizes, line heights, and letter spacing.
- **Borders**: Border thickness, border styles, and corner/border radii.
- **Elevation & Shadows**: Box shadows, blur values, offsets, and surface layering levels.
- **Motion**: Animation curves, easing profiles, and transition durations.
- **Opacity**: Alpha transparency values for overlays, disabled states, or masked layers.
- **Breakpoints**: Responsive screen-width dimensions for layout transitions.

Structural Layers Included in Design Tokens

According to architectural structures mapped out by [Material Design 3](https://m3.material.io/foundations/design-tokens) and platforms like [Figma Learn](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles), token structures generally include three layers of abstraction:

```
[ Primitive Token ] ----> [ Semantic Token ] ----> [ Component Token ]
 (e.g., color-blue-500)     (e.g., color-bg-brand)     (e.g., comp-button-primary-bg)
```

1. **Primitive / Global Tokens**: The raw foundations of your system. They define flat options, mapping a hard value directly to a literal name (e.g., `color-blue-500: #0055ff` or `spacing-4: 16px`). They are strictly used for reference and are not applied directly to UI elements.
2. **Semantic / Alias Tokens**: These assign design meaning and intent to primitive tokens. Instead of pointing to a hex code, they alias a primitive token (e.g., `color-text-primary` points to `color-gray-900`). This allows you to completely swap themes (like light mode to dark mode) by simply redirecting the primitive values assigned to the semantic keys.
3. **Component Tokens**: These are tied to highly specific UI components. They isolate a component's stylistic choices so changes do not break other elements (e.g., `comp-button-primary-bg` maps to `color-bg-brand`).
