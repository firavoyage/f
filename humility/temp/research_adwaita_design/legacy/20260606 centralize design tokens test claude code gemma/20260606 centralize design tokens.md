# Task 1: Centralize design tokens

I have read `adwaita.css` and the component CSS files to identify all design tokens used.

## Observations

### Primitives (ref)
From `adwaita.css`:
- **Colors**:
  - `blue-1` to `blue-5`
  - `green-1` to `green-5`
  - `yellow-1` to `yellow-5`
  - `orange-1` to `orange-5`
  - `red-1` to `red-5`
  - `purple-1` to `purple-5`
  - `brown-1` to `brown-5`
  - `light-1` to `light-5`
  - `dark-1` to `dark-5`
  - `accent-blue`, `accent-teal`, `accent-green`, `accent-yellow`, `accent-orange`, `accent-red`, `accent-pink`, `accent-purple`, `accent-slate`
- **Spacing**: `space-1`, `space-2`, `space-3`, `space-4`, `space-5`, `space-6`, `space-8`, `space-10`, `space-12`
- **Typography**:
  - `font-size-xs`, `font-size-sm`, `font-size-base`, `font-size-lg`, `font-size-xl`, `font-size-2xl`, `font-size-3xl`, `font-size-4xl`
  - `line-height-tight`, `line-height-normal`, `line-height-relaxed`
  - `font-weight-normal`, `font-weight-medium`, `font-weight-semibold`, `font-weight-bold`
  - `document-font-family`, `document-font-size`
  - `monospace-font-family`, `monospace-font-size`
- **Border Radius**: `radius-xs`, `radius-sm`, `radius-md`, `radius-lg`, `radius-xl`, `radius-xxl`, `radius-full`
- **Transitions**: `transition-fast`, `transition-normal`, `transition-slow`, `transition-backdrop`, `ease-out-quad`
- **Z-Index**: `z-base`, `z-dropdown`, `z-sticky`, `z-modal`, `z-popover`, `z-tooltip`, `z-toast`
- **Shadows**: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Icon Sizes**: `icon-size-small`, `icon-size-normal`, `icon-size-large`
- **Other**: `border-opacity`, `dim-opacity`, `disabled-opacity`, `window-radius`, `focus-ring-color`, `focus-ring-width`, `focus-ring-offset`, `size-button-mini`, `size-button-small`, `size-button-medium`, `size-button-large`, `size-button-huge`, `size-button-mega`, `input-height`, `input-padding`, `input-radius`, `scrollbar-width`, `scrollbar-thumb`, `scrollbar-thumb-hover`, `scrollbar-thumb-active`

### System (sys)
From `adwaita.css`:
- **Colors**:
  - `accent-color`
  - `accent-bg-color`
  - `accent-fg-color`
  - `destructive-color`
  - `destructive-bg-color`
  - `destructive-fg-color`
  - `success-color`
  - `success-bg-color`
  - `success-fg-color`
  - `warning-color`
  - `warning-bg-color`
  - `error-color`
  - `error-bg-color`
  - `error-fg-color`
  - `window-bg-color`
  - `window-fg-color`
  - `view-bg-color`
  - `view-fg-color`
  - `secondary-bg`
  - `headerbar-bg-color`
  - `headerbar-fg-color`
  - `headerbar-border-color`
  - `headerbar-backdrop-color`
  - `headerbar-shade-color`
  - `headerbar-darker-shade-color`
  - `sidebar-bg-color`
  - `sidebar-fg-color`
  - `sidebar-backdrop-color`
  - `sidebar-border-color`
  - `sidebar-shade-color`
  - `secondary-sidebar-bg-color`
  - `secondary-sidebar-fg-color`
  - `secondary-sidebar-backdrop-color`
  - `secondary-sidebar-border-color`
  - `secondary-sidebar-shade-color`
  - `card-bg-color`
  - `card-fg-color`
  - `card-shade-color`
  - `overview-bg-color`
  - `overview-fg-color`
  - `thumbnail-bg-color`
  - `thumbnail-fg-color`
  - `active-toggle-bg-color`
  - `active-toggle-fg-color`
  - `dialog-bg-color`
  - `dialog-fg-color`
  - `popover-bg-color`
  - `popover-fg-color`
  - `popover-shade-color`
  - `shade-color`
  - `scrollbar-outline-color`
  - `border-color`
  - `text-secondary`
  - `text-dimmed`
  - `btn-bg`
  - `btn-hover`
  - `btn-pressed`
  - `btn-border`
  - `warning-fg-color`
- **Radius**:
  - `radius-button`
  - `radius-card`
  - `radius-menu`
  - `radius-popover`
  - `radius-dialog`
  - `radius-check`
  - `radius-alert`

### Component (comp)
Extracted from component CSS files:
- **Button**: `btn-bg`, `btn-hover`, `btn-pressed`, `btn-border`, `radius-button`, `font-size-sm`, `space-2`, `space-4`, `disabled-opacity`
- **Input**: `view-bg-color`, `btn-border`, `radius-md`, `font-size-sm`, `space-2`, `space-3`, `accent-color`
- **Select**: `view-bg-color`, `btn-border`, `radius-md`, `font-size-sm`, `space-2`, `space-3`, `z-dropdown`, `popover-bg-color`, `radius-md`, `shadow-md`, `space-1`, `radius-sm`, `accent-color`
- **Checkbox**: `view-bg-color`, `btn-border`, `radius-check`, `space-2`, `font-size-sm`, `accent-color`, `disabled-opacity`
- **ScrollArea**: `radius-md`, `light-3`, `light-4`, `light-5`, `space-2`
- **Slider**: `light-3`, `accent-color`, `light-1`, `space-2`
- **Switch**: `light-3`, `radius-full` (implied), `accent-color`, `disabled-opacity`
- **Tooltip**: `headerbar-bg-color`, `radius-md`, `headerbar-fg-color`, `font-size-xs`, `space-2`, `space-3`, `shadow-lg`

I will now generate the `adwaita.yaml` file with this structure.
