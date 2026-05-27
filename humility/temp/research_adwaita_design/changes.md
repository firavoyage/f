# Changes - Wed May 27 2026

- Create adwaita.css with full Adwaita design system tokens and component styles
- Create adwaita.html showcasing all components (typography, buttons, form controls, card, list, alert, dialog, separator, spinner)
- Implement light and dark mode via prefers-color-scheme media query
- Use flat CSS structure per spec (global + semantic tokens + component classes)
- Use BEM-style naming with component name as root class (e.g., .Button, .Input)
- Use kebab-case for children (e.g., .Switch-knob, .Dialog-title)
- Use data attributes for states (e.g., data-toggled, data-active)
- Rewrite adwaita.css with OKLCH color space (instead of HSL)
- Add global tokens (primitives) for accent, danger, gray, status colors
- Add semantic tokens for backgrounds, text, borders, accent, states
- Reference semantic tokens directly in component classes (no component tokens)
- Use color-mix with oklch for derived colors
- Based on adwaita_web color system (not adwave)
- Use OKLCH color space with primitives named by color (--accent-*, --danger-*, --gray-*)
- Move spacing, radii, transitions to primitives
- Semantic tokens reference only primitives (var(--gray-100), not hardcoded values
- Dark mode only overrides primitives (gray scale shifts), semantic tokens auto-update
- Small semantic overrides in dark mode for component-specific tokens (spinner, slider, list)

