# 37signals CSS Styling Patterns

## Philosophy
- Vanilla CSS only. No build tools, no Sass, no PostCSS.
- Modern CSS features are powerful enough.
- Three products analyzed: Campfire, Writebook, Fizzy (~14,000 lines CSS, 105 files).

## Architecture
- Flat file structure: `_reset.css`, `base.css`, `colors.css`, `utilities.css`, `[component].css`
- No subdirectories, no partials, no complex imports.
- One file per concept, named semantically.

## Color System
- **OKLCH** color space (perceptually uniform).
- Raw LCH values: `--lch-blue: 54% 0.15 255`
- Semantic colors: `--color-link: oklch(var(--lch-blue))`
- Dark mode via single `@media (prefers-color-scheme: dark)` query.
- `color-mix()` in Fizzy: derive palette from one variable.

## Spacing
- Character-based: `--inline-space: 1ch` (horizontal), `--block-space: 1rem` (vertical).
- Responsive breakpoints use character count: `@media (min-width: 100ch)`.

## Utility Classes
- Additive, not foundational. Used for exceptions.
- Core styling in semantic component classes.

## Modern CSS Features Used
- Custom properties (variables)
- Native nesting
- Container queries
- `:has()` selector (parent selection)
- CSS Layers (`@layer`) for specificity
- `color-mix()` for dynamic colors
- `clamp()`, `min()`, `max()` for responsive sizing
- `@starting-style` for entrance animations
- View Transitions API
- CSS masks for spinners

## Progression Across Products
- **Campfire**: OKLCH, custom properties, character spacing, flat files, View Transitions
- **Writebook**: Container queries, `@starting-style`
- **Fizzy**: CSS Layers, `color-mix()`, complex `:has()` chains

## Specific Techniques

### Loading Spinner
- CSS masks only. No images/SVGs/JS.
- Uses `background: currentColor` for automatic color inheritance.

### Custom `<mark>`
- Hand-drawn circle using border-radius + pseudo-elements.
- `mix-blend-mode: multiply` (light mode) / `screen` (dark mode).

### Dialog Animation
- `@starting-style` + `allow-discrete` for transitions on `<dialog>` elements.

### `:has()` Examples
- Sidebar toggle: `:has(#sidebar-toggle:checked) #sidebar`
- Kanban columns: `.card-columns:has(.cards:not(.is-collapsed))`
- Circle buttons: `.btn:where(:has(.for-screen-reader):has(img))`