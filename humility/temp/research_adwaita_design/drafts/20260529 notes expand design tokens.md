# Adwaita Design Tokens Expansion Notes

## 1. What the Mimics Have

### adwaita_web (build.css)

| Category | Tokens/Values |
|----------|----------------|
| **Button Heights** | 18px (mini), 22px (small), 28px (medium), 36px (large), 42px (huge), 58px (mega) |
| **Button Radius** | 5px (not in tokens - hardcoded) |
| **Input Padding** | 8px |
| **Input Height** | 28px (medium), scales with button sizes |
| **Input Radius** | 5px |
| **Focus Ring** | `rgba(53, 132, 228, 0.5)` - 2px, offset -2px |
| **Scrollbar** | 8px width, thumb #bbb, hover #999, active #888 |
| **Label Sizes** | mini (18px), small (22px), medium (28px), large (36px), huge (42px), mega (58px) |
| **Font** | Cantarell (not in tokens) |

### adwave (variables.scss)

| Category | Tokens/Values |
|----------|----------------|
| **Backgrounds** | bg1 (100%), bg2 (96%), bg3 (91%), bg4 (100%), bg5 (86%), bg6 (80%) |
| **Text** | text (rgba(0,0,0,0.8)), text-secondary (#686868) |
| **Button States** | btn, btn-toggled, btn-hover, btn-pressed, btn-adaptive, btn-adaptive-* |
| **Focus** | focus (#5f9be3), focus-accent (#a816c6) |
| **Border** | border (uses bg3 or light) |
| **Primary Scale** | primary-000 to primary-900 (accent color variations) |
| **Danger Scale** | danger-000 to danger-900 (red color variations) |
| **List Elements** | list-elem, list-elem-border, list-elem-hover |
| **Interactive** | slider-thumb, spinner-bg, spinner-fg |
| **Border Radius** | --border-radius: 8px |
| **Theme Classes** | .light-theme, .dark-theme |

---

## 2. What's Missing in adwaita.css

| Category | Missing |
|----------|---------|
| **Focus Ring Token** | No dedicated token for focus ring color |
| **Button Size Tokens** | No tokens for button heights/sizes |
| **Input Tokens** | No tokens for input height/padding |
| **Scrollbar Tokens** | No scrollbar styling tokens |
| **Text Variants** | No text-secondary, dimmed tokens |
| **Button State Tokens** | No btn-hover, btn-pressed, btn-adaptive tokens |
| **Border Token** | No border color token |
| **Primary/Danger Scales** | No 000-900 color scales |

---

## 3. Expansion Plan

### Keep from libadwaita (Official)
- All existing palette colors (blue-1 to blue-5, green, yellow, orange, red, purple, brown, light, dark)
- All accent colors
- All semantic colors (light/dark mode)
- Border radius tokens (--radius-*)
- Transition tokens

### Add from Mimics

**New Primitives to Add:**
1. `--focus-ring: rgba(53, 132, 228, 0.5)` - focus ring color
2. `--focus-ring-width: 2px`
3. `--focus-ring-offset: -2px`

**Button Size Tokens (from adwaita_web):**
- `--size-button-mini: 18px`
- `--size-button-small: 22px`
- `--size-button-medium: 28px`
- `--size-button-large: 36px`
- `--size-button-huge: 42px`
- `--size-button-mega: 58px`

**Input Tokens:**
- `--input-height: 28px`
- `--input-padding: 8px`
- `--input-radius: 5px`

**Scrollbar Tokens:**
- `--scrollbar-width: 8px`
- `--scrollbar-thumb: #bbb`
- `--scrollbar-thumb-hover: #999`

**Text Tokens:**
- `--text-secondary: #686868` (light) / #a0a0a0 (dark)
- `--text-dimmed: rgba(0, 0, 0, 0.55)` (light) / rgba(255, 255, 255, 0.55) (dark)

**Button State Tokens (from adwave):**
- `--btn-bg: #f6f5f4` (light) / #464646 (dark)
- `--btn-hover: #f9f9f8` (light) / #5a5a5a (dark)
- `--btn-pressed: #e8e7e6` (light) / #3a3a3a (dark)
- `--btn-border: #cdc7c2` (light) / #1e1e20 (dark)

**Border Token:**
- `--border-color: #d8d4d0` (light) / #1e1e20 (dark)

---

## 4. Thoughts / Summary

**Why the mimics have more:**
- adwaita_web is a practical web port - button sizes are hardcoded because GTK buttons are sized by content, not fixed dimensions
- adwave is more comprehensive for component authors - provides state colors (hover, pressed, toggled) that GTK handles internally
- Both fill gaps where libadwaita's CSS variables are sparse

**What to prioritize:**
1. Focus ring token is critical for web accessibility
2. Button/input size tokens are useful for consistent component sizing
3. Text secondary/dimmed tokens are standard in design systems
4. Scrollbar tokens are nice-to-have

**What NOT to add:**
- Don't add --border-radius: 8px - keep official 9px (--radius-md)
- Don't replicate every button state color - keep it simple
- Don't add primary-000 to primary-900 - the 5-step palette is sufficient

**Tradeoffs:**
- The mimics use slightly different values (button radius 5px vs 9px). Using 5px from adwaita_web may look more modern but differs from GTK.
- adwave's button state colors are more complex. Keeping simple hover/pressed from adwaita_web is more maintainable.