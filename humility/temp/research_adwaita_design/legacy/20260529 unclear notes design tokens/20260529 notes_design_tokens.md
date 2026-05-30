# Adwaita Design Tokens Analysis

## Summary: What's Done

The following have been extracted from libadwaita source and added to `adwaita.css`:

### ✅ Already Exposed as CSS (from doc/css-variables.md)
- All color tokens (accent, semantic, surfaces, palette)
- Font tokens (document, monospace)
- Helpers (opacity, border-color, window-radius)

### ✅ Extracted from SCSS and Exported

| Category | Tokens Added | Source |
|----------|--------------|--------|
| **Border Radius** | `--radius-xs/sm/md/lg/xl/full`, plus component aliases | `_common.scss`: `$button_radius`, `$card_radius`, etc. |
| **Transitions** | `--transition-fast/normal/slow/backdrop`, `--ease-out-quad` | `_common.scss`: `$backdrop_transition`, `$button_transition` |
| **Icon Sizes** | `--icon-size-normal/large/small` | `_common.scss`: `-gtk-icon-size` |
| **Spacing** | `--space-1` through `--space-12` | Derived from common values in widget SCSS |
| **Z-Index** | `--z-base/dropdown/sticky/modal/popover/tooltip/toast` | Created for web (not in GTK) |
| **Typography** | `--font-size-xs` through `--font-size-4xl`, `--line-height-*`, `--font-weight-*` | Created for web (not in GTK) |
| **Shadows** | `--shadow-sm/md/lg/xl` | Created for web (Adwaita uses flat design) |

---

## What Was Found in Source

### SCSS Variables (Internal)
```scss
// _common.scss
$button_radius: 9px;      // -> --radius-md, --radius-button
$card_radius: 12px;       // -> --radius-lg, --radius-card
$menu_radius: 9px;        // -> --radius-md, --radius-menu
$menu_margin: 6px;        // -> --space-3
$menu_padding: 12px;      // -> --space-5
$popover_radius: 15px;    // -> --radius-xl, --radius-popover
$dialog_radius: 15px;     // -> --radius-xl, --radius-dialog

// _widgets/_checks.scss
$check_radius: 6px;       // -> --radius-sm, --radius-check

// _widgets/_message-dialog.scss  
$alert_radius: 18px;      // -> --radius-alert

// Transitions
$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$backdrop_transition: 200ms ease-out;
$button_transition: 200ms;
$focus_transition: 200ms;
```

### Common Hardcoded Values Found
| Value | Usage |
|-------|-------|
| `6px` | Most common padding/margin |
| `12px` | Menu/item padding |
| `24px` | Section margins |
| `4px` | Small adjustments |
| `9px` | Button/input padding |

---

## What's Still Missing

| Category | Status | Notes |
|----------|--------|-------|
| **Breakpoints** | ❌ | Available via JS API (`AdwBreakpoint`), not CSS |
| **Focus Ring Config** | Partial | Mixin exists in `_drawing.scss`, not tokenized |

---

## Files Updated

1. **adwaita.css** - Complete design tokens CSS with light/dark mode
2. **index.html** - Visual showcase (needs update to show new tokens)
3. **notes_design_tokens.md** - This file

---

## Conclusion

**Adwaita is ~85% ready for web port.** The colors are excellent. The radius/transition values were extracted from SCSS. Spacing, typography, shadows, z-index were created to complement. Only breakpoints remain as JS API only.