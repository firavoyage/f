<!-- archived from humility research libadwaita: spec -->

<!-- `sys.color.button.bg` wont be reused by other components. no need to autocomplete on bg. group button tokens together. -->

# 0.0

Visual Categories Included in Design Tokens

A comprehensive design system built using methodologies like the [Atlassian Design System](https://atlassian.design/tokens/design-tokens) or Adobe's [Spectrum](https://spectrum.adobe.com/page/design-tokens/) tokenizes almost every core visual style:

- **Color**: Brand palettes, semantic fills (success, error, warning), backgrounds, text colors, and borders.
- **Spacing**: Paddings, margins, grid gaps, and layout separations, often organized into modular scales (e.g., `spacing-small = 8px`).
- **Typography**: Font families, font weights, font sizes, line heights, and letter spacing.
- **Borders**: Border thickness, border styles, and corner/border radii.
- **Elevation & Shadows**: Box shadows, blur values, offsets, and surface layering levels.
- **Motion**: Animation curves, easing profiles, and transition durations.
- **Opacity**: Alpha transparency values for overlays, disabled states, or masked layers.
- **Breakpoints**: Responsive screen-width dimensions for layout transitions.

Structural Layers Included in Design Tokens

According to architectural structures mapped out by [Material Design 3](https://m3.material.io/foundations/design-tokens) and platforms like [Figma Learn](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles), token structures generally include three layers of abstraction:

```
[ Primitive Token ] ----> [ Semantic Token ] ----> [ Component Token ]
 (e.g., color-blue-500)     (e.g., color-bg-brand)     (e.g., comp-button-primary-bg)
```

1. **Primitive / Global Tokens**: The raw foundations of your system. They define flat options, mapping a hard value directly to a literal name (e.g., `color-blue-500: #0055ff` or `spacing-4: 16px`). They are strictly used for reference and are not applied directly to UI elements.
2. **Semantic / Alias Tokens**: These assign design meaning and intent to primitive tokens. Instead of pointing to a hex code, they alias a primitive token (e.g., `color-text-primary` points to `color-gray-900`). This allows you to completely swap themes (like light mode to dark mode) by simply redirecting the primitive values assigned to the semantic keys.
3. **Component Tokens**: These are tied to highly specific UI components. They isolate a component's stylistic choices so changes do not break other elements (e.g., `comp-button-primary-bg` maps to `color-bg-brand`).

# 0.1

design tokens can include

- **Color**: Brand palettes, semantic fills (success, error, warning), backgrounds, text colors, and borders.
- **Spacing**: Paddings, margins, grid gaps, and layout separations, often organized into modular scales.
- **Typography**: Font families, font weights, font sizes, line heights, and letter spacing.
- **Borders**: Border thickness, border styles, and corner/border radii.
- **Elevation & Shadows**: Box shadows, blur values, offsets, and surface layering levels.
- **Motion**: Animation curves, easing profiles, and transition durations.
- **Opacity**: Alpha transparency values for overlays, disabled states, or masked layers.
- **Breakpoints**: Responsive screen-width dimensions for layout transitions.

# 0.2

## categories

- **Color**: Brand palettes, semantic fills (success, error, warning), backgrounds, text colors, and borders.
- **Spacing**: Paddings, margins, grid gaps, and layout separations, often organized into modular scales.
- **Typography**: Font families, font weights, font sizes, line heights, and letter spacing.
- **Borders**: Border thickness, border styles, and corner/border radii.
- **Elevation & Shadows**: Box shadows, blur values, offsets, and surface layering levels.
- **Motion**: Animation curves, easing profiles, and transition durations.
- **Opacity**: Alpha transparency values for overlays, disabled states, or masked layers.
- **Breakpoints**: Responsive screen-width dimensions for layout transitions.

## naming on ref

the **de facto standard token names on the Reference layer** use a predictable **`ref.[category].[variant].[modifier]`** architectural structure. These tokens store context-agnostic, raw visual materials and are grouped into standard taxonomy namespaces:

### 🎨 Color Primitive Tokens (`color.*`)

De facto standard design systems explicitly separate color hue from usage at this layer. They universally adopt either a **100–900 scale** (like Tailwind and Adobe) or a **0–100 luminance scale** (like Material Design).

- `color.blue.50` to `900` _(or `color.blue.10` to `100` for luminance)_
- `color.gray.50` to `900`
- `color.red.50` to `900` _(Standard error base)_
- `color.green.50` to `900` _(Standard success base)_
- `color.amber.50` to `900` _(Standard warning base)_
- `color.white` / `color.black` _(Absolute scale boundaries)_

### 📐 Dimension & Spacing Primitive Tokens (`dimension.*` or `spacing.*`)

To ensure mathematical consistency across layouts, reference layers use an **8px grid scale** or a geometric t-shirt/numeric scale.

- `spacing.0` (0px)
- `spacing.1` (4px / extra-small)
- `spacing.2` (8px / small)
- `spacing.3` (12px)
- `spacing.4` (16px / medium)
- `spacing.5` (24px / large)
- `spacing.6` (32px / extra-large)
- `spacing.8` (48px)
- `spacing.10` (64px)

### 🔤 Typography Reference Tokens (`font.*` or `typography.*`)

- **Families:** `font.family.sans` / `font.family.serif` / `font.family.mono`
- **Weights:** `font.weight.regular` (400) / `font.weight.medium` (500) / `font.weight.bold` (700)
- **Sizes (Rem/Px):** `font.size.xs` / `font.size.sm` / `font.size.base` / `font.size.lg` / `font.size.xl` to `4xl`
- **Line Heights:** `font.line-height.none` (1) / `font.line-height.tight` (1.25) / `font.line-height.normal` (1.5)

### 🔲 Border Radius & Width Tokens (`border.*` or `radius.*`)

- **Radii:** `border.radius.none` (0px) / `border.radius.sm` (2px-4px) / `border.radius.md` (8px) / `border.radius.lg` (12px-16px) / `border.radius.full` (9999px)
- **Widths:** `border.width.none` (0px) / `border.width.thin` (1px) / `border.width.thick` (2px)

### 👥 Shadows & Elevation Tokens (`asset.*` or `shadow.*`)

- `shadow.none`
- `shadow.1` or `shadow.sm` (Low elevation, e.g., cards)
- `shadow.2` or `shadow.md` (Medium elevation, e.g., dropdowns)
- `shadow.3` or `shadow.lg` (High elevation, e.g., modals)

### ⏱️ Motion & Animation Tokens (`motion.*` or `duration.*`)

Raw durations (in milliseconds) and transition curve coordinates (Bézier values).

- **Durations:** `motion.duration.fast` (100ms) / `motion.duration.normal` (200ms-300ms) / `motion.duration.slow` (500ms)
- **Easings:** `motion.easing.linear` / `motion.easing.in` / `motion.easing.out` / `motion.easing.in-out`

## naming on sys

Across major design systems (such as Adobe Spectrum, Salesforce Lightning, and [W3C DTCG implementations](https://www.designtokens.org/)), the de facto standard syntax for this layer follows the **`[category].[semantic-role].[variant].[state/modifier]`** format.

The universal, de facto standard design token names on the System layer include:

### 🎨 Color Semantic Tokens (`color.*`)

Rather than naming a hue, standard system-layer color tokens are categorized by **UI Surfaces, Borders, Text, and Interactive Actions** across themes (light, dark, high-contrast).

### Surfaces & Backgrounds

- `color.surface.primary` (Main application canvas background)
- `color.surface.secondary` (Cards, sidebars, or structural blocks)
- `color.surface.tertiary` (Wells, code blocks, or deeply nested panels)
- `color.surface.brand` (Accent backgrounds using the core brand identity)
- `color.surface.inverse` (Opposing background theme, like a dark dark-mode tooltip over a light theme)

### Text & Typography Elements

- `color.text.primary` (Body text and high-priority copy)
- `color.text.secondary` (Subtitles, secondary labels, or helper text)
- `color.text.tertiary` (Placeholder text, disabled labels, or legal fine print)
- `color.text.brand` (Main color emphasis for text links or headings)
- `color.text.inverse` (White or high-contrast text overlaying dark backgrounds)

### Borders & Dividers

- `color.border.subtle` (Very soft lines for list items and horizontal rules)
- `color.border.muted` (Standard component strokes, form borders, or dividers)
- `color.border.strong` (Focus rings or highly visible bounding boxes)

### Interactive & Feedback Intents

Feedback tokens map universally to standardized interaction states (`default`, `hover`, `active`, `focus`, `disabled`) and explicit notification meanings:

- `color.action.primary.[state]` (Primary interactive button/link color states)
- `color.action.secondary.[state]` (Secondary button or secondary interactive element states)
- `color.feedback.success.[state]` (Confirmation alerts, badges, green feedback states)
- `color.feedback.error.[state]` (Destructive buttons, critical errors, red alert states)
- `color.feedback.warning.[state]` (Caution prompts, intermediate badges, amber states)
- `color.feedback.info.[state]` (Non-critical tooltips, banner updates, blue states)

### 📐 Layout & Spacing Semantic Tokens (`spacing.*`)

While reference values use mathematical units (4px, 8px), system-level tokens assign **layout context** so layouts remain scalable and uniform.

- `spacing.layout.xs` to `xl` (Grid padding, margins, and major sections)
- `spacing.component.xs` to `xl` (Internal component padding, button padding)
- `spacing.gap.xs` to `xl` (Flexbox or grid gutter spacing between elements)

### 🔤 Typography Semantic Styles (`typography.*`)

According to the [W3C DTCG Format Specification](https://www.designtokens.org/tr/drafts/format/), system typography combines separate reference tokens (size, weight, line-height) into single, unified **composite text object styles**:

- `typography.display.[sm|md|lg]` (Massive, expressive marketing copy)
- `typography.heading.[sm|md|lg]` (Standard page layout hierarchies, H1-H6)
- `typography.body.[sm|md|lg]` (Paragraph text and readable default interface copy)
- `typography.code.[sm|md]` (Fixed-width technical and monospace output layouts) \[[1](https://medium.com/@wicar/streamlining-your-design-system-a-guide-to-tokens-and-naming-conventions-3e4553aa8821)]

### 🔲 Shape & Border Semantics (`shape.*` or `radius.*`)

Rather than relying on abstract sizes like `radius.8`, the system layer ties geometry directly to **component categories based on size or scale**.

- `shape.radius.small` (Pinned elements, badges, checkboxes)
- `shape.radius.medium` (Standard inputs, select boxes, regular buttons)
- `shape.radius.large` (Cards, layout panels, modal dialog windows)
- `shape.radius.full` (Pill buttons, tag elements, avatars)

### 👥 Elevation & Shadow Layers (`elevation.*`)

System-level elevation tokens describe the **perceived depth and stacking order (z-index structure)** of standard web items.

- `elevation.flat` (0 shadow, standard resting elements)
- `elevation.raised` (Low card hovering elevation)
- `elevation.overlay` (Dropdown selectors, tooltips, flyout popovers)
- `elevation.sticky` (Fixed navigation banners staying atop scrolling windows)
- `elevation.modal` (Full-page backdrop blocking dialog windows)

## naming on comp

no comp layer.

on component css, reference `sys.color.bg.primary` directly. 

if some buttons have a special bg for example, name like `sys.color.button.bg` (put button first if they are not supposed to be reused by other components)

# 0.3

## categories

- **Color**: Brand palettes, semantic fills (success, error, warning), backgrounds, text colors, and borders.
- **Spacing**: Paddings, margins, grid gaps, and layout separations, often organized into modular scales.
- **Typography**: Font families, font weights, font sizes, line heights, and letter spacing.
- **Borders**: Border thickness, border styles, and corner/border radii.
- **Elevation & Shadows**: Box shadows, blur values, offsets, and surface layering levels.
- **Motion**: Animation curves, easing profiles, and transition durations.
- **Opacity**: Alpha transparency values for overlays, disabled states, or masked layers.
- **Breakpoints**: Responsive screen-width dimensions for layout transitions.

## naming on ref

the **de facto standard token names on the Reference layer** use a predictable **`ref.[category].[variant].[modifier]`** architectural structure. These tokens store context-agnostic, raw visual materials and are grouped into standard taxonomy namespaces:

### 🎨 Color Primitive Tokens (`color.*`)

De facto standard design systems explicitly separate color hue from usage at this layer. They universally adopt either a **100–900 scale** (like Tailwind and Adobe) or a **0–100 luminance scale** (like Material Design).

- `color.blue.50` to `900` _(or `color.blue.10` to `100` for luminance)_
- `color.gray.50` to `900`
- `color.red.50` to `900` _(Standard error base)_
- `color.green.50` to `900` _(Standard success base)_
- `color.amber.50` to `900` _(Standard warning base)_
- `color.white` / `color.black` _(Absolute scale boundaries)_

### 📐 Dimension & Spacing Primitive Tokens (`dimension.*` or `spacing.*`)

To ensure mathematical consistency across layouts, reference layers use an **8px grid scale** or a geometric t-shirt/numeric scale.

- `spacing.0` (0px)
- `spacing.1` (4px / extra-small)
- `spacing.2` (8px / small)
- `spacing.3` (12px)
- `spacing.4` (16px / medium)
- `spacing.5` (24px / large)
- `spacing.6` (32px / extra-large)
- `spacing.8` (48px)
- `spacing.10` (64px)

### 🔤 Typography Reference Tokens (`font.*` or `typography.*`)

- **Families:** `font.family.sans` / `font.family.serif` / `font.family.mono`
- **Weights:** `font.weight.regular` (400) / `font.weight.medium` (500) / `font.weight.bold` (700)
- **Sizes (Rem/Px):** `font.size.xs` / `font.size.sm` / `font.size.base` / `font.size.lg` / `font.size.xl` to `4xl`
- **Line Heights:** `font.line-height.none` (1) / `font.line-height.tight` (1.25) / `font.line-height.normal` (1.5)

### 🔲 Border Radius & Width Tokens (`border.*` or `radius.*`)

- **Radii:** `border.radius.none` (0px) / `border.radius.sm` (2px-4px) / `border.radius.md` (8px) / `border.radius.lg` (12px-16px) / `border.radius.full` (9999px)
- **Widths:** `border.width.none` (0px) / `border.width.thin` (1px) / `border.width.thick` (2px)

### 👥 Shadows & Elevation Tokens (`asset.*` or `shadow.*`)

- `shadow.none`
- `shadow.1` or `shadow.sm` (Low elevation, e.g., cards)
- `shadow.2` or `shadow.md` (Medium elevation, e.g., dropdowns)
- `shadow.3` or `shadow.lg` (High elevation, e.g., modals)

### ⏱️ Motion & Animation Tokens (`motion.*` or `duration.*`)

Raw durations (in milliseconds) and transition curve coordinates (Bézier values).

- **Durations:** `motion.duration.fast` (100ms) / `motion.duration.normal` (200ms-300ms) / `motion.duration.slow` (500ms)
- **Easings:** `motion.easing.linear` / `motion.easing.in` / `motion.easing.out` / `motion.easing.in-out`

## naming on sys

Across major design systems (such as Adobe Spectrum, Salesforce Lightning, and [W3C DTCG implementations](https://www.designtokens.org/)), the de facto standard syntax for this layer follows the **`[category].[semantic-role].[variant].[state/modifier]`** format.

The universal, de facto standard design token names on the System layer include:

### 🎨 Color Semantic Tokens (`color.*`)

Rather than naming a hue, standard system-layer color tokens are categorized by **UI Surfaces, Borders, Text, and Interactive Actions** across themes (light, dark, high-contrast).

### Surfaces & Backgrounds

- `color.surface.primary` (Main application canvas background)
- `color.surface.secondary` (Cards, sidebars, or structural blocks)
- `color.surface.tertiary` (Wells, code blocks, or deeply nested panels)
- `color.surface.brand` (Accent backgrounds using the core brand identity)
- `color.surface.inverse` (Opposing background theme, like a dark dark-mode tooltip over a light theme)

### Text & Typography Elements

- `color.text.primary` (Body text and high-priority copy)
- `color.text.secondary` (Subtitles, secondary labels, or helper text)
- `color.text.tertiary` (Placeholder text, disabled labels, or legal fine print)
- `color.text.brand` (Main color emphasis for text links or headings)
- `color.text.inverse` (White or high-contrast text overlaying dark backgrounds)

### Borders & Dividers

- `color.border.subtle` (Very soft lines for list items and horizontal rules)
- `color.border.muted` (Standard component strokes, form borders, or dividers)
- `color.border.strong` (Focus rings or highly visible bounding boxes)

### Interactive & Feedback Intents

Feedback tokens map universally to standardized interaction states (`default`, `hover`, `active`, `focus`, `disabled`) and explicit notification meanings:

- `color.action.primary.[state]` (Primary interactive button/link color states)
- `color.action.secondary.[state]` (Secondary button or secondary interactive element states)
- `color.feedback.success.[state]` (Confirmation alerts, badges, green feedback states)
- `color.feedback.error.[state]` (Destructive buttons, critical errors, red alert states)
- `color.feedback.warning.[state]` (Caution prompts, intermediate badges, amber states)
- `color.feedback.info.[state]` (Non-critical tooltips, banner updates, blue states)

### 📐 Layout & Spacing Semantic Tokens (`spacing.*`)

While reference values use mathematical units (4px, 8px), system-level tokens assign **layout context** so layouts remain scalable and uniform.

- `spacing.layout.xs` to `xl` (Grid padding, margins, and major sections)
- `spacing.component.xs` to `xl` (Internal component padding, button padding)
- `spacing.gap.xs` to `xl` (Flexbox or grid gutter spacing between elements)

### 🔤 Typography Semantic Styles (`typography.*`)

According to the [W3C DTCG Format Specification](https://www.designtokens.org/tr/drafts/format/), system typography combines separate reference tokens (size, weight, line-height) into single, unified **composite text object styles**:

- `typography.display.[sm|md|lg]` (Massive, expressive marketing copy)
- `typography.heading.[sm|md|lg]` (Standard page layout hierarchies, H1-H6)
- `typography.body.[sm|md|lg]` (Paragraph text and readable default interface copy)
- `typography.code.[sm|md]` (Fixed-width technical and monospace output layouts) \[[1](https://medium.com/@wicar/streamlining-your-design-system-a-guide-to-tokens-and-naming-conventions-3e4553aa8821)]

### 🔲 Shape & Border Semantics (`shape.*` or `radius.*`)

Rather than relying on abstract sizes like `radius.8`, the system layer ties geometry directly to **component categories based on size or scale**.

- `shape.radius.small` (Pinned elements, badges, checkboxes)
- `shape.radius.medium` (Standard inputs, select boxes, regular buttons)
- `shape.radius.large` (Cards, layout panels, modal dialog windows)
- `shape.radius.full` (Pill buttons, tag elements, avatars)

### 👥 Elevation & Shadow Layers (`elevation.*`)

System-level elevation tokens describe the **perceived depth and stacking order (z-index structure)** of standard web items.

- `elevation.flat` (0 shadow, standard resting elements)
- `elevation.raised` (Low card hovering elevation)
- `elevation.overlay` (Dropdown selectors, tooltips, flyout popovers)
- `elevation.sticky` (Fixed navigation banners staying atop scrolling windows)
- `elevation.modal` (Full-page backdrop blocking dialog windows)

## naming on comp

no comp layer.

on component css, reference `sys.color.bg.primary` directly. 

if some buttons have a special bg for example, name like `ref.palette.button.bg` (put  button first if they are not supposed to be reused by other components) and reference. no need to map to sys.

comp should reference sys when possible. it's ok to have exceptions.

all sys must reference ref.
