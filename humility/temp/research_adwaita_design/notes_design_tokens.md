# Adwaita Design Tokens Analysis

## 1. What's Found in libadwaita Source

### SCSS Variables (Internal - not exposed as design tokens)
```scss
// _common.scss
$button_radius: 9px;
$card_radius: 12px;
$menu_radius: 9px;
$menu_margin: 6px;
$menu_padding: 12px;
$popover_radius: 15px;
$dialog_radius: 15px;

// _widgets/_checks.scss
$check_radius: 6px;

// _widgets/_message-dialog.scss
$alert_radius: 18px;

// Transitions
$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$backdrop_transition: 200ms ease-out;
$button_transition: 200ms;
$focus_transition: 200ms;
```

### Hardcoded Common Values (in widget SCSS)
| Value | Usage |
|-------|-------|
| `6px` | Most common padding/margin |
| `12px` | Menu/item padding |
| `24px` | Section margins |
| `4px` | Small adjustments |
| `9px` | Button/input padding |

### Official CSS Variables (from doc/css-variables.md)
- All color tokens (accent, semantic, surfaces, palette)
- Font tokens (document, monospace)
- Helpers (opacity, border-color, window-radius)

---

## 2. What's Ported to adwaita.css

| Category | Tokens Added | From Source |
|----------|--------------|-------------|
| **Border Radius** | `--radius-xs/sm/md/lg/xl/full`, component aliases | `_common.scss`: `$button_radius`, `$card_radius`, etc. |
| **Transitions** | `--transition-fast/normal/slow/backdrop`, `--ease-out-quad` | `_common.scss`: `$backdrop_transition`, `$button_transition` |
| **Icon Sizes** | `--icon-size-normal/large/small` | `_common.scss`: `-gtk-icon-size` |
| **Colors** | Full palette, semantic, surfaces | doc/css-variables.md |

### Created for Web (not in GTK)
- `--space-1` through `--space-12` (spacing scale)
- `--z-base/dropdown/sticky/modal/popover/tooltip/toast` (z-index)
- `--font-size-xs` through `--font-size-4xl`, `--line-height-*`, `--font-weight-*` (typography)
- `--shadow-sm/md/lg/xl` (shadows - Adwaita uses flat design)

---

## 3. What's Made Up or Missing in adwaita.css

### Made Up for Web Compatibility
- **Spacing scale** (`--space-1` to `--space-12`) - derived from common values in widget SCSS, but not an official system
- **Typography scale** - web-focused, not in GTK
- **Shadows** - Adwaita uses flat design, shadows added for web UX
- **Z-index scale** - created for web layering needs

### Missing (Not in adwaita.css)
| Category | Status | Notes |
|----------|--------|-------|
| **Breakpoints** | ❌ Missing | Available via JS API (`AdwBreakpoint`), not CSS |
| **Focus Ring Config** | ❌ Missing | Mixin exists in `_drawing.scss`, not tokenized |
| **Motion tokens** | Partial | Only timing, no motion patterns |

---

## 4. What's Missing for Full Design System (MUI, Chakra level)

| Feature | Status |
|---------|--------|
| **Component tokens** | ❌ None - only primitives |
| **Responsive breakpoints** | ❌ CSS-only - only JS API |
| **Motion/animation patterns** | ❌ Timing only, no named transitions |
| **Dark mode tokens** | ✅ Complete |
| **Spacing system** | ⚠️ Created but ad-hoc |
| **Typography scale** | ⚠️ Created but ad-hoc |
| **Elevation/shadows** | ⚠️ Created but minimal |
| **Component composition** | ❌ None |

**Conclusion:** Adwaita is ~85% ready for web port. Colors are excellent. Radius/transition values extracted from SCSS. Spacing, typography, shadows, z-index created to complement. Breakpoints remain JS-only. No component-level tokens.