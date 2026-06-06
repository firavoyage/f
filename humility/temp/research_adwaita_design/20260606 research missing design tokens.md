# Research Missing Design Tokens

I have analyzed the existing `adwaita.css` and the `adwaita.yaml` structure to identify what is missing compared to the authoritative `libadwaita` and the mimics (`adwaita_web` and `adwave`).

## Observations

### 1. Content of `adwaita.css` vs. `libadwaita`
The current `adwaita.css` is a significant subset. While it covers basic colors, spacing, and typography, it lacks the depth found in a production GNOME environment.

**Missing Categories:**
- **Extended Color Palettes**: Many shades for various colors (e.g., gray, slate, etc.) that are used for subtle borders, backgrounds, and disabled states.
- **Detailed Semantic Tokens**: 
  - Specific "surface" or "card" colors for different modes.
  - More nuanced "window" vs "view" vs "sidebar" background variations.
  - Refined "overlay" and "scrolledwindow" colors.
- **Advanced Typography**: Multiple font weight/size combinations and potentially more specific line-height tokens.
- **Motion/Transition Details**: More diverse easing curves and specific duration tokens for different interaction types (e.g., popovers vs. button hovers).
- **Elevation/Shadows**: A more complete set of shadow layers for different depth levels.
- **Component-specific spacing**: Refined paddings/margins for complex widgets like `List`, `TreeView`, or `HeaderBar`.

### 2. Comparison with Mimics
- **`adwaita_web` (web-toolkit)**: This mimic uses a very structured set of CSS variables. It seems to have a better grasp of "Base States" and "Layout" utilities. It also defines explicit "Adaptive" button styles which are missing.
- **`adwave`**: This mimic uses SCSS and defines a very robust set of theme-based color maps (`$colorNames`). It distinguishes between `primary` (accent) and `danger` scales very clearly. It also uses color functions (`nativeLighten`, `nativeDarken`) to derive shades, which is a more sophisticated way to manage tokens than hardcoding all 9 shades.

## Plan for `adwaita.extended.yaml`

The extended YAML should aim to fill these gaps, focusing on `ref` and `sys` tokens.

**Proposed Additions:**
- **Ref expansion**:
  - Complete color scales (0-9) for all primary, secondary, and error colors.
  - A dedicated `gray` or `slate` scale for neutral elements.
  - More complex `shadow` and `elevation` definitions.
- **Sys expansion**:
  - Better differentiation between `window`, `view`, `sidebar`, and `popover` backgrounds.
  - Explicit `surface` and `overlay` color levels.
  - Comprehensive `text` colors (primary, secondary, disabled, muted, error, success, warning).
  - Expanded `interaction` tokens (hover, active, focus, disabled states for all semantic groups).

## Sources for Research
I will prioritize `libadwaita` documentation and source code (specifically looking for CSS/GTK theme definitions) to ensure the extended tokens are as authentic as possible.
