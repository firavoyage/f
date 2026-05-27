# Spec: Global and Semantic Tokens

## Philosophy

- Use OKLCH color space for perceptually uniform colors
- Follow 2-tier token system: Global (primitives) + Semantic (purpose-driven)
- No component tokens - components reference semantic tokens directly
- Dark mode via @media (prefers-color-scheme: dark)

## Global Tokens (Primitives)

Define raw color values as global tokens. Use OKLCH format: `oklch(L% C H)`

### Accent Colors (Blue)
- `--global-accent-000`: darkest
- `--global-accent-100`:
- `--global-accent-200`:
- `--global-accent-300`:
- `--global-accent-400`: base
- `--global-accent-500`:
- `--global-accent-600`:
- `--global-accent-700`:
- `--global-accent-800`:
- `--global-accent-900`: lightest

### Danger Colors (Red)
- `--global-danger-000` to `--global-danger-900`

### Neutral Colors (Gray)
- `--global-gray-000` to `--global-gray-900`

### Semantic Status Colors
- `--global-info`: info blue
- `--global-success`: green
- `--global-warning`: orange/yellow
- `--global-danger-semantic`: red

## Semantic Tokens

Map purpose-driven names to global tokens:

### Backgrounds
- `--bg-surface`: main background
- `--bg-fill`: secondary fill
- `--bg-elevated`: elevated surfaces
- `--bg-inset`: inset areas
- `--bg-interactive`: button backgrounds
- `--bg-interactive-hover`: hover state

### Text
- `--fg-primary`: main text
- `--fg-secondary`: secondary/muted text
- `--fg-disabled`: disabled text

### Borders
- `--border-subtle`: subtle borders
- `--border-contrast`: contrasting borders

### Accent
- `--accent`: primary accent (blue)
- `--accent-text`: text on accent
- `--accent-subtle`: subtle accent backgrounds
- `--accent-hover`: accent hover state

### States
- `--focus`: focus ring
- `--focus-accent`: accent focus ring

### Component-specific
- `--spinner-bg`: spinner background
- `--spinner-fg`: spinner foreground

## Implementation

CSS file structure:
```css
:root {
  /* Global tokens (primitives) */
  --global-accent-400: oklch(54% 0.15 255);
  --global-gray-100: oklch(98% 0.005 0);
  /* ... */

  /* Semantic tokens */
  --bg-surface: var(--global-gray-100);
  --fg-primary: oklch(20% 0 0);
  /* ... */
}

/* Component usage */
.Button {
  background-color: var(--bg-interactive);
  color: var(--fg-primary);
}
```

## Color Values from Adwaita Web

Light theme base colors (converted to oklch approx):
- base_color: #ffffff
- bg_color: #f6f5f4
- fg_color: #2e3436
- selected_bg_color: #3584e4
- selected_fg_color: #ffffff

Dark theme base colors:
- base_color: #241f31 (lightened)
- bg_color: #303030 (darkened)
- fg_color: #eeeeec
- selected_bg_color: #3584e4 (darkened 20%)
- selected_fg_color: #ffffff

## Naming Convention

- Global: `--global-{category}-{level}` (e.g., `--global-accent-400`)
- Semantic: `--{property}-{purpose}` (e.g., `--bg-surface`, `--fg-primary`)