# Centralizing Design Tokens

I have extracted the design tokens from `adwaita.css` and organized them into a three-layer YAML structure:

1.  **`ref` (Primitives)**: All raw values (colors, spacing, font sizes, etc.) are stored here.
2.  **`sys` (Semantic)**: Semantic tokens that reference primitives (e.g., `sys.color.accent-bg` references `ref.color.accent-blue`).
3.  **`comp` (Component)**: Component-specific tokens that reference `ref` or `sys` (e.g., `comp.button.bg-color`).

## Observations & Actions

- **Naming**: I standardized many variable names. For example, `blue-1` through `blue-5` are now consistently in `ref.color`.
- **Normalization**: I moved semantic groupings (like `radius-button`) to `ref` to allow them to be used as single values if needed, but also kept the semantic intent.
- **Verification**: I ensured that `sys` tokens do not contain raw values (except for specific color-mix or hardcoded gray scales where appropriate, though I've tried to keep them linked to `ref` where possible). I also checked that `comp` tokens only reference `ref` or `sys`.

## Next Steps
- Update `adwaita.css` to use these YAML-derived tokens (eventually).
- Proceed to research missing tokens from `libadwaita`.
