# Adwaita Design Tokens Analysis

## What's in Adwaita (libadwaita)

Based on `doc/css-variables.md` and source SCSS files in `src/stylesheet/`.

### ✅ Exposed as CSS Variables

| Category | Tokens |
|----------|--------|
| **Colors - Accent** | `--accent-bg/fg/color`, `--accent-blue/teal/green/yellow/orange/red/pink/purple/slate` |
| **Colors - Semantic** | `--destructive-bg/fg/color`, `--success-bg/fg/color`, `--warning-bg/fg/color`, `--error-bg/fg/color` |
| **Colors - Surfaces** | `--window-bg/fg`, `--view-bg/fg`, `--headerbar-*`, `--sidebar-*`, `--secondary-sidebar-*`, `--card-*`, `--dialog-*`, `--popover-*`, `--overview-*`, `--thumbnail-*`, `--active-toggle-*` |
| **Colors - Palette** | `--blue-1` to `--blue-5`, `--green-*`, `--yellow-*`, `--orange-*`, `--red-*`, `--purple-*`, `--brown-*`, `--light-1` to `--light-5`, `--dark-1` to `--dark-5` |
| **Colors - Misc** | `--shade-color`, `--scrollbar-outline-color` |
| **Fonts** | `--document-font-family`, `--document-font-size`, `--monospace-font-family`, `--monospace-font-size` |
| **Helpers** | `--border-opacity`, `--dim-opacity`, `--disabled-opacity`, `--border-color`, `--window-radius` |

### ⚠️ SCSS Variables (Internal - Not Exposed as CSS)

| Category | Variables |
|----------|-----------|
| **Border Radius** | `$button_radius: 9px`, `$card_radius: 12px`, `$menu_radius: 9px`, `$menu_margin: 6px`, `$menu_padding: 12px`, `$popover_radius: 15px`, `$dialog_radius: 15px`, `$check_radius: 6px`, `$alert_radius: 18px` |
| **Transitions** | `$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94)`, `$backdrop_transition: 200ms ease-out`, `$focus_transition: 200ms`, `$button_transition: 200ms` |
| **Opacity (High Contrast)** | `$border_opacity: 15%`, `$border_opacity_hc: 50%`, `$focus_border_opacity: 50%`, `$focus_border_opacity_hc: 80%` |
| **Sizes** | `$_levelbar_size: 8px`, `-gtk-icon-size: 16px/32px` |

---

## What's Actually Missing for Web Port

| Category | Status | Notes |
|----------|--------|-------|
| **Spacing** | ❌ None | Hardcoded values throughout widget SCSS (6px, 12px, 24px, etc.) |
| **Typography Scale** | ❌ None | Only `--document-font-size` and `--monospace-font-size`. No size scale like `xs` through `4xl` |
| **Z-Index** | ❌ None | GTK uses widget stacking, not CSS z-index |
| **Elevation/Shadows** | ⚠️ Colors only | Has `--shade-color` but no elevation scale like `shadow-sm`, `shadow-md` |
| **Breakpoints** | ⚠️ JS API | Available via `AdwBreakpoint`, not as CSS variables |

---

## Gap Analysis: Adwaita vs MUI/Chakra/Mantine/shadcn

| Category | MUI | Chakra | Mantine | shadcn | Adwaita |
|----------|-----|--------|---------|--------|---------|
| **Colors** | ✅ | ✅ | ✅ | ✅ | ✅ Excellent |
| **Spacing** | ✅ 8px | ✅ rem | ✅ xs-xl | ❌ | ❌ |
| **Border Radius** | ✅ shape | ✅ none-full | ✅ sm-xl | ✅ `--radius` | ⚠️ SCSS only |
| **Shadows/Elevation** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Transitions** | ✅ | ✅ | ✅ | ❌ | ⚠️ SCSS only |
| **Z-Index** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Breakpoints** | ✅ | ✅ | ✅ | ❌ | ⚠️ JS API |
| **Typography Scale** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Font Weights** | ✅ | ✅ | ✅ | ❌ | ❌ |

---

## Findings: You're Partially Wrong

**You guessed they'd have more, but they don't expose these as CSS variables.** However, the values DO exist in the SCSS source:

### What Exists (Internally) → Needs Exporting

```scss
// From _common.scss - these should be CSS variables
$button_radius: 9px;      // -> --radius-sm or --radius-button
$card_radius: 12px;       // -> --radius-md or --radius-card
$menu_radius: 9px;        // -> --radius-sm or --radius-menu
$popover_radius: 15px;    // -> --radius-lg or --radius-popover
$dialog_radius: 15px;     // -> --radius-lg or --radius-dialog
$check_radius: 6px;       // -> --radius-xs
$menu_margin: 6px;        // could be --space-xs
$menu_padding: 12px;      // could be --space-sm

// Transitions (would need cubic-bezier exposed)
$backdrop_transition: 200ms ease-out;
$button_transition: 200ms ease-out;
$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Common Hardcoded Values Found in Widgets

| Value | Usage |
|-------|-------|
| `6px` | Most common padding/margin |
| `12px` | Menu/item padding, section margins |
| `24px` | Large section margins |
| `4px` | Small adjustments |
| `9px` | Button/input padding |
| `3px` | Tiny adjustments |

---

## Recommendations

### 1. Export These as CSS Variables

```css
:root {
  /* Border Radius - from SCSS */
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 9px;
  --radius-lg: 12px;
  --radius-xl: 15px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --transition-normal: 200ms ease-out;
  --transition-slow: 300ms ease-out;
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* Spacing - derived from common values */
  --space-1: 3px;
  --space-2: 4px;
  --space-3: 6px;
  --space-4: 9px;
  --space-5: 12px;
  --space-6: 18px;
  --space-8: 24px;
  --space-10: 36px;
  --space-12: 48px;

  /* Z-Index */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-popover: 400;
  --z-tooltip: 500;

  /* Typography Scale - NOT in Adwaita, needs creation */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;

  /* Shadows - NOT in Adwaita */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 10%);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 10%);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 10%);
}
```

### 2. Summary

Adwaita's **color system is excellent** - use as-is. The gaps are:

- **Border radius**: Values exist in SCSS, export them as CSS variables
- **Transitions**: Same, export the timing values
- **Spacing**: Create based on common values (3/4/6/9/12/18/24/36/48px)
- **Typography**: Create from scratch
- **Shadows**: Create from scratch (Adwaita uses flat design)
- **Z-index**: Create from scratch

The philosophy difference: GTK apps use widget properties for spacing/behavior, while web expects CSS token-based design.