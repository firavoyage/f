# libadwaita and GNOME HIG Research Notes

## Overview

- libadwaita: GTK4 widget library implementing GNOME HIG patterns
- gnome_hig: Human Interface Guidelines - design patterns and principles

## Key libadwaita Components

### Container/Layout Widgets

| Widget | Purpose |
|--------|---------|
| AdwWindow | Main window, supports breakpoints for adaptive layouts |
| AdwApplicationWindow | Window with integrated header bar |
| AdwToolbarView | Content area with top/bottom bars |
| AdwHeaderBar | Title bar with window controls |
| AdwClamp | Constrains child max size, removes padding when narrow |
| AdwBreakpoint | Conditional layout changes based on size |
| AdwNavigationSplitView | Sidebar + content, collapses to navigation on narrow |
| AdwOverlaySplitView | Overlay sidebar on narrow, side-by-side on wide |
| AdwViewStack | Multiple pages with switcher support |
| AdwViewSwitcher | Adaptive view switcher (wide: header, narrow: bottom bar) |
| AdwLeaflet | Two-pane container with animated transitions |
| AdwSqueezer | Shows one child based on available width |
| AdwCarousel | Swipeable page container |
| AdwTabView | Dynamic tab container |
| AdwMultiLayoutView | Multiple layouts with slot-based child placement |
| AdwBottomSheet | Bottom sheet dialog |

### List Rows (for boxed lists)

| Widget | Purpose |
|--------|---------|
| AdwActionRow | Title, subtitle, icon, prefix/suffix widgets |
| AdwSwitchRow | Action row with embedded switch |
| AdwExpanderRow | Action row that expands to show children |
| AdwComboRow | Dropdown menu in a row |
| AdwEntryRow | Text entry in a row |
| AdwPasswordEntryRow | Password entry with show/hide toggle |
| AdwSpinRow | Number input with +/- buttons |
| AdwButtonRow | Button presented as a row |
| AdwPreferencesGroup | Grouped list with title/description |
| AdwPreferencesPage | Preferences window page |
| AdwPreferencesWindow | Preferences dialog window |

### Feedback/Status Components

| Widget | Purpose |
|--------|---------|
| AdwStatusPage | Empty state / placeholder page |
| AdwBanner | Dismissible message banner |
| AdwToast | Non-blocking notification |
| AdwToastOverlay | Container for toasts |
| AdwSpinner | Loading spinner |
| AdwStatusIndicator | System status indicator |

### Other Components

| Widget | Purpose |
|--------|---------|
| AdwAboutWindow | About dialog |
| AdwDialog | Adaptive dialog (floating or bottom sheet) |
| AdwSidebar | Sidebar navigation widget |
| AdwSidebarSection | Sidebar section with header |
| AdwSidebarItem | Sidebar list item |
| AdwViewSwitcherBar | Bottom bar view switcher |
| AdwInlineViewSwitcher | Inline toggle group |
| AdwClampScrollable | Scrollable clamped layout |
| AdwWrapBox | Wrapping box (like words in text) |
| AdwSplitButton | Button with dropdown |

## Style Classes

### Buttons
- `.suggested-action` - Accent color for primary action
- `.destructive-action` - Red for dangerous actions
- `.flat` - No background until hovered (default in toolbars)
- `.raised` - Standard framed appearance
- `.circular` - Round button for icons
- `.pill` - Pill-shaped for prominent actions

### Other
- `.linked` - Group controls visually (no spacing box)
- `.toolbar` - Toolbar appearance
- `.boxed-list` - Boxed list container
- `.opaque` - Solid background
- `.osd` - On-screen display style

## CSS Variables (UI Colors)

### Accent Colors Available
- Blue (#3584e4), Teal, Green, Yellow, Orange, Red, Pink, Purple

### Variable Patterns
- `--accent-bg-color` / `--accent-fg-color` - Background/foreground pair
- `--accent-color` - Standalone (for text on neutral)
- `--window-bg-color` - Window background
- `--card-bg-color` - Card backgrounds
- `--view-bg-color` - Content view background

## GNOME HIG Pattern Categories

### Containers
- Windows - Main app windows
- Header bars - Title bars with controls
- Popovers - Contextual panels
- Utility panes - Side-by-side detail panels
- Boxed lists - Preference-style lists
- Grid views - Collection display
- List/column views - Data lists

### Controls
- Buttons - Actions (imperative labels, suggested/destructive styles)
- Menus - Context and dropdown menus
- Switches - Binary on/off settings
- Text fields - Input with validation
- Checkboxes - Multiple selection
- Radio buttons - Single selection from set
- Drop-downs - Selection from list
- Sliders - Range-based input
- Spin buttons - Numeric input with steppers

### Navigation
- Browsing - Back/forward navigation
- View switchers - Switch between views
- Tabs - Tabbed interface
- Sidebars - Primary navigation
- Search - Search integration

### Feedback
- Toasts - Transient notifications
- Dialogs - Modal confirmations
- Spinners - Loading states
- Progress bars - Progress indication
- Banners - Dismissible messages
- Tooltips - Contextual help
- Placeholders - Empty states
- Notifications - System notifications

## Adaptive Layout Pattern

### Typical Approach
1. Use AdwClamp for content width constraint
2. Use AdwBreakpoint with max-width conditions
3. Switch between side-by-side and stacked layouts
4. View switcher in header (wide) vs bottom bar (narrow)
5. Navigation split view collapses to navigation on narrow

### Breakpoint Example
```xml
<condition>max-width: 550sp</condition>
<setter object="switcher_bar" property="reveal">True</setter>
```

### Common Breakpoints
- 400-500sp: Collapse sidebar to navigation/overlay
- 550-600sp: Switch view switcher to bottom bar
- 860sp+: Triple pane layout support

## Key Design Principles

1. **Semantic organization** - Group related items together
2. **Minimal width** - Lists should have min/max width for adaptive layouts
3. **Single suggested action** - Only one primary action per view
4. **Flat toolbars** - Buttons in toolbars are flat by default
5. **Icon style** - Use symbolic icons in lists (lower visual footprint)
6. **Linked controls** - Group related controls for visual cohesion
7. **Button labels** - Use imperative verbs, short labels

## Useful References

- libadwaita docs: https://gnome.pages.gitlab.gnome.org/libadwaita/doc/
- GNOME HIG: https://developer.gnome.org/hig/
- libadwaita source: ref/libadwaita/src/
- Style classes: ref/libadwaita/doc/style-classes.md
- CSS variables: ref/libadwaita/doc/css-variables.md
