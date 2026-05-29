# Adwaita Web Component Library

Research and implementation of porting libadwaita (GNOME GTK4 widget library) to web via React + Base UI.

## Overview

- **Goal**: Port GNOME's Adwaita design system to web
- **Stack**: React 19, Base UI (headless), Vanilla CSS
- **Styling**: CSS variables (adwaita.css)

## Key Files

- `adwaita.css` - Design tokens and base styles
- `index.html` - Entry HTML file
- `index.tsx` - React entry point
- `app.tsx` - Demo app for design tokens

## Project Structure

- `ref/` - Reference implementations and research
  - `libadwaita/` - Original GTK4 library
  - `adwaita_web/` - Web port reference
  - `adwave/` - Alternative implementation
  - `gnome_hig/` - Human Interface Guidelines
- `legacy/` - Previous experiments
- `.build/` - Build output (generated)

## Commands

```sh
br start  # Start dev server with parcel
br clean  # Clean build output
```

## References

- libadwaita docs: https://gnome.pages.gitlab.gnome.org/libadwaita/doc/
- GNOME HIG: https://developer.gnome.org/hig/
- Base UI: https://mui.com/base-ui/