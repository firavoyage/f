20260606 research missing design tokens

what i see:

1. libadwaita (src/stylesheet/_colors.scss)
   - interaction state colors: hover, active, selected, selected-hover, selected-active
   - view interaction states: view-hover, view-active, view-selected variants
   - trough colors for sliders: trough, trough-hover, trough-active
   - slider colors: slider, slider-hover
   - link colors: link, link-visited
   - OSD (on-screen display) colors: osd-fg, osd-bg, osd-link, osd-link-visited
   - toast colors: toast-bg, toast-fg
   - tooltip border color
   - drop target color
   - window outline color (including high contrast)
   - focus border color (including high contrast)
   - dimmer opacity (including high contrast)
   - strong disabled opacity
   - border/focus opacity high contrast variants

2. adwaita_web (packages/web-toolkit/src/lib/adwaita/build.css)
   - text utility colors: text-info, text-success, text-warning, text-danger, text-muted
   - background levels: background-low, background-default, background-medium, background-high
   - separator color
   - uses simpler color values, not as comprehensive as libadwaita

3. adwave (src/variables.scss)
   - background level system: bg-1 through bg-6 (more granular than libadwaita)
   - list element colors: list-elem, list-elem-border, list-elem-hover (with -2 variants)
   - spinner colors: spinner-bg, spinner-fg
   - button toggled states: btn-toggled, btn-hover, btn-pressed
   - adaptive button colors: btn-adaptive, btn-adaptive-toggled, btn-adaptive-hover, btn-adaptive-pressed
   - primary/danger color scales (000-900)
   - different border-radius default (8px vs libadwaita's 6px)
   - disabled cursor styles
   - separate light-theme and dark-theme classes

what i want to tell you:

- libadwaita is the definitive source and has the most comprehensive design tokens
- adwaita_web is less sophisticated and sometimes uses simpler hardcoded values
- adwave provides some additional useful tokens like background levels and button toggled states
- there are some discrepancies:
  - border-radius default: adwave uses 8px while libadwaita uses 6px (default radius-md)
  - adwave has more granular color scales (primary-000 to primary-900) vs libadwaita's palette
- the extended tokens cover interaction states, view-specific states, slider/trough, links, OSD, toast, tooltip, drag-drop, and accessibility (high contrast, disabled) concerns
- background level system from adwave (bg-1 to bg-6) provides more flexibility than libadwaita's categorical colors
- all tokens in adwaita.extended.yaml are ref or sys only, no comp layer, following the spec