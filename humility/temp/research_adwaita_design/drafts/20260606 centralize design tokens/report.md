20260606 centralize design tokens

what i did:

1. created adwaita.yaml with three-layer design tokens system

   - ref layer: primitives
     - color palettes (blue, green, yellow, orange, red, purple, brown, light, dark)
     - accent colors
     - spacing values
     - font sizes
     - line heights
     - font weights
     - font families
     - border radii
     - transitions
     - z-index values
     - shadows
     - icon sizes
     - button and input sizes
     - scrollbar styles
     - focus ring styles
     - helper opacities

   - sys layer: semantic tokens
     - accent, destructive, success, warning, error colors
     - text colors (secondary, dimmed)
     - border radii for common UI elements (button, menu, popover, dialog, check, alert)
     - light theme colors (window, view, headerbar, sidebar, card, dialog, popover, btn states)
     - dark theme colors (same as light but with dark mode values)

   - comp layer: component-specific tokens
     - button: border radius, font size, font weight, padding, transitions, bg/border colors for states
     - input: border radius, font size, padding, colors, focus ring
     - checkbox: size, border radius, colors for checked/unchecked/hover states
     - select: trigger, popup, item styles
     - switch: track and thumb dimensions and colors
     - slider: track, indicator, thumb dimensions and colors
     - number-field: group, input, button styles
     - tooltip: border radius, font size, padding, colors
     - scroll-area: viewport, scrollbar, thumb styles
     - app: global styles

2. followed the spec constraints:
   - all sys tokens reference ref (no raw values)
   - all comp tokens reference sys when possible (e.g., sys.light.color.view-bg)
   - no component names in sys layer (e.g., no "bg-card", using generic names like "view-bg", "card-bg")
   - comp tokens end with type (e.g., bg-color, border-color, font-size)

3. improved naming:
   - renamed some unclear variable names to be more descriptive
   - organized colors into logical groups
   - separated light/dark theme colors under sys.light and sys.dark

what i want to tell you:

- the three-layer system creates clear separation: primitives (ref) -> meaning (sys) -> component (comp)
- sys layer now has no component-specific names, making it reusable across components
- comp layer uses semantic tokens from sys, making it easy to theme all components by changing sys values
- dark theme colors are organized under sys.dark for clarity
- some raw values remain in comp layer for component-specific tweaks that don't need semantic meaning