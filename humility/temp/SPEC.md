# Dual Design System Web App Specification

## 1. Project Overview

- **Project Name**: Adwaita-MD3 Web App
- **Type**: React Web Application
- **Core Functionality**: A showcase web app demonstrating dual design system support (GNOME Adwaita + Material Design 3) with semantic CSS, featuring a theme switcher to toggle between systems
- **Target Users**: Developers exploring cross-design-system UI implementation

## 2. UI/UX Specification

### Layout Structure

- **Header**: Fixed top bar with app title + theme switcher dropdown
- **Main Content**: Centered container (max-width: 800px) with component showcase sections
- **Sections**: Buttons, Inputs, Cards, Lists - organized vertically with clear labels

### Responsive Breakpoints

- Mobile: < 600px (single column, full-width components)
- Desktop: >= 600px (centered layout with padding)

### Visual Design

#### Theme: GNOME Adwaita (Dark)
- Background: `#1e1e1e`
- Surface: `#2d2d2d`
- Primary: `#3584e4`
- On Primary: `#ffffff`
- Text Primary: `#ffffff`
- Text Secondary: `#9a9996`
- Border: `#454545`

#### Theme: Material Design 3
- Background: `#1c1b1f`
- Surface: `#2b2930`
- Primary: `#d0bcff`
- On Primary: `#381e72`
- Text Primary: `#e6e1e5`
- Text Secondary: `#cac4d0`
- Outline: `#938f99`

### Components

1. **Button**
   - States: default, hover, active, disabled
   - Variants: filled, outlined, text

2. **Input**
   - Text input with label
   - States: default, focus, error

3. **Card**
   - Surface container with elevation
   - Contains title, description, action button

4. **List Item**
   - Row with icon, title, subtitle

5. **Theme Switcher**
   - Dropdown or toggle to select design system

## 3. Functionality Specification

### Core Features

1. **Theme Switching**
   - Dropdown in header to select: "Adwaita (GNOME)" or "Material 3"
   - Persists selection to localStorage
   - Instant switch without page reload

2. **Component Showcase**
   - Each component displayed in both design systems
   - Clear visual distinction between systems
   - Components match each system's actual specifications

3. **Responsive Layout**
   - Adapts to mobile/desktop gracefully

### Data Handling

- Theme preference stored in localStorage key: `design-system`
- Default: Adwaita

### Edge Cases

- First visit: default to Adwaita
- Invalid stored preference: fallback to Adwaita

## 4. Technical Architecture

### CSS Strategy

- **Semantic CSS**: Use semantic HTML class names (`.button`, `.card`, `.input`)
- **CSS Custom Properties**: Define design tokens per theme
- **CSS Cascade**: Theme class on `<body>` determines active design tokens

```
/* Example structure */
:root, [data-theme="adwaita"] {
  --color-background: #1e1e1e;
  --color-surface: #2d2d2d;
  --color-primary: #3584e4;
  ...
}

[data-theme="md3"] {
  --color-background: #1c1b1f;
  --color-surface: #2b2930;
  --color-primary: #d0bcff;
  ...
}
```

### File Structure

```
/src
  /components
    header.tsx
    button.tsx
    input.tsx
    card.tsx
    list_item.tsx
    theme_switcher.tsx
  /styles
    global.css        # Reset + design tokens
    semantic.css      # Component styles
  /hooks
    use_theme.ts      # Theme state management
  app.tsx
  index.tsx
```

### Dependencies

- React 18
- ParcelJS (bundler)
- No CSS frameworks - vanilla semantic CSS

## 5. Acceptance Criteria

- [ ] App loads without errors
- [ ] Theme switcher changes between Adwaita and MD3
- [ ] Theme persists across page reloads
- [ ] All components (button, input, card, list) render correctly in both themes
- [ ] Responsive layout works on mobile and desktop
- [ ] No console errors
- [ ] ESLint passes
- [ ] TypeScript compiles without errors