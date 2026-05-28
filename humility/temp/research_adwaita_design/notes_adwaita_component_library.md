# Adwaita Component Library for Web

Based on libadwaita and GNOME HIG research. Target: React + vanilla CSS.

## Foundation

### Design Tokens (CSS Variables)

```css
/* Colors - Accent palette */
--accent-bg-color;
--accent-fg-color;
--accent-color; /* standalone */
--window-bg-color;
--card-bg-color;
--view-bg-color;
--popover-bg-color;
--headerbar-bg-color;

/* Neutral colors */
--light-1 through light-5;
--dark-1 through dark-5;
--blue-1 through blue-5;
--green-1 through green-5;
--yellow-1 through yellow-5;
--orange-1 through orange-5;
--red-1 through red-5;
--purple-1 through purple-5;
--pink-1 through pink-5;

/* Text colors */
--text-color;
--text-secondary;
--text-disabled;
--text-placeholder;

/* Borders and dividers */
--border-color;
--border-radius;
--divider-color;

/* Shadows and elevation */
--shadow-1, --shadow-2, --shadow-3;
--shade-color; /* for overlays */

/* Spacing */
--spacing-1: 6px;
--spacing-2: 12px;
--spacing-3: 18px;
--spacing-4: 24px;
--spacing-5: 36px;

/* Typography */
--font-family: system-ui, -apple-system, sans-serif;
--font-size-small: 13px;
--font-size-body: 14px;
--font-size-title: 16px;
--font-size-h3: 20px;
--font-size-h2: 24px;
--font-size-h1: 32px;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 600;
--line-height: 1.4;
```

---

## Component Library

### Layout Components

| Component | Description | Web Equivalent |
|-----------|-------------|----------------|
| Clamp | Constrains max-width, removes padding when narrow | `Clamp` wrapper |
| Breakpoint | Conditional layout at width thresholds | `useBreakpoint` hook + CSS |
| NavigationSplitView | Sidebar + content, collapses to nav on narrow | `SplitView` |
| OverlaySplitView | Overlay sidebar on narrow, side-by-side on wide | `OverlaySplitView` |
| Leaflet | Two-pane with animated transitions | `Leaflet` |
| Squeezer | Shows one child based on available width | `Squeezer` |
| ViewStack | Multiple pages with switcher support | `ViewStack` + `TabView` |
| MultiLayoutView | Multiple layouts with slot-based placement | `MultiLayoutView` |
| WrapBox | Wrapping container (like words in text) | CSS flex wrap |

### Navigation Components

| Component | Description |
|-----------|-------------|
| Sidebar | Navigation sidebar with items |
| SidebarSection | Sidebar section with header |
| SidebarItem | Sidebar list item |
| ViewSwitcher | Adaptive view switcher (header vs bottom bar) |
| ViewSwitcherBar | Bottom bar view switcher |
| InlineViewSwitcher | Inline toggle/pill group |
| TabView | Dynamic tab container |
| TabBar | Tab strip |
| TabOverview | Tab overview (mobile) |
| TabButton | Tab trigger button |
| Breadcrumb | Path-based navigation |

### Header/Title Components

| Component | Description |
|-----------|-------------|
| HeaderBar | Title bar with window controls |
| WindowTitle | Title/subtitle in header |
| ToolbarView | Content area with top/bottom bars |

### Container Components

| Component | Description |
|-----------|-------------|
| Card | Surface container with shadow/border |
| BoxedList | Grouped list container |
| PreferencesGroup | Boxed list with title/description |
| PreferencesPage | Preferences page |
| PreferencesWindow | Preferences dialog |

### List Row Components

| Component | Description | Variants |
|-----------|-------------|----------|
| ActionRow | Title, subtitle, icon, prefix/suffix | property style |
| SwitchRow | ActionRow with switch | |
| ExpanderRow | Expandable ActionRow | |
| ComboRow | Dropdown in a row | |
| EntryRow | Text input in a row | |
| PasswordEntryRow | Password input with show toggle | |
| SpinRow | Number input with +/- | |
| ButtonRow | Button presented as row | |
| ListItem | Generic list item | selectable, active |

### Input/Form Components

| Component | Description |
|-----------|-------------|
| TextInput | Basic text input |
| TextArea | Multi-line input |
| SearchInput | Search field with icon |
| PasswordInput | Password with visibility toggle |
| NumberInput | Numeric input with steppers |
| Checkbox | Binary selection |
| RadioGroup | Single selection from set |
| Switch | Toggle on/off |
| Slider | Range selection |
| Select | Dropdown menu |
| Dropdown | Menu trigger with list |

### Button Components

| Component | Style Classes |
|-----------|---------------|
| Button | .suggested-action, .destructive-action, .flat, .raised, .circular, .pill |
| IconButton | Circular icon-only button |
| SplitButton | Button with dropdown |
| ToggleButton | Toggle state button |
| ButtonGroup | Grouped linked buttons |
| MenuButton | Button that triggers menu |
| LinkButton | Text-style button |

### Feedback/Status Components

| Component | Description |
|-----------|-------------|
| Toast | Non-blocking notification |
| ToastOverlay | Toast container/manager |
| Banner | Dismissible message banner |
| Spinner | Loading animation |
| ProgressBar | Linear progress indicator |
| CircularProgress | Circular progress |
| Skeleton | Loading placeholder |
| StatusPage | Empty/placeholder page |
| EmptyState | No content state |
| Alert | Inline error/warning |

### Dialog/Overlay Components

| Component | Description |
|-----------|-------------|
| Dialog | Adaptive (floating or bottom sheet) |
| AlertDialog | Confirmation dialog |
| AboutDialog | About window |
| Modal | Centered overlay |
| Popover | Anchored floating panel |
| Sheet | Side/bottom sliding panel |
| BottomSheet | Bottom sheet on mobile |
| Tooltip | Hover info |
| Menu | Dropdown menu |
| ContextMenu | Right-click menu |

### Display Components

| Component | Description |
|-----------|-------------|
| Avatar | Profile image with fallback |
| Badge | Count/status indicator |
| Chip | Compact tag |
| Label | Text with style variants |
| Icon | Symbolic icon |
| Image | Responsive image |
| Divider | Visual separator |

### Utility Components

| Component | Description |
|-----------|-------------|
| Window | App window wrapper |
| ApplicationWindow | Window with header integration |
| BreakpointBin | Breakpoint container |
| Bin | Single child container |
| Portal | Render to body |

---

## Component Hierarchy

```
App
├── Window / ApplicationWindow
│   ├── HeaderBar / ToolbarView
│   │   ├── WindowTitle
│   │   ├── ViewSwitcher
│   │   ├── HeaderButtons
│   │   └── MenuButton
│   ├── Clamp
│   │   └── Content
│   │       ├── NavigationSplitView / OverlaySplitView
│   │       │   ├── Sidebar
│   │       │   │   ├── SidebarSection
│   │       │   │   └── SidebarItem
│   │       │   └── ViewStack
│   │       │       ├── ViewPage
│   │       │       └── TabView / Carousel
│   │       └── BoxedList
│   │           ├── PreferencesGroup
│   │           └── ListRow variants
│   ├── BottomBar / ViewSwitcherBar
│   └── ToastOverlay
│       └── Toast
└── Dialog (portal)
    ├── AlertDialog
    └── Popover / Sheet
```

---

## Adaptive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| max-width: 400px | Collapse sidebar to navigation |
| max-width: 550px | ViewSwitcher moves to bottom bar |
| max-width: 600px | Compact layouts |
| max-width: 860px | Triple pane collapses |

---

## Style Class Reference

### Buttons
```
.suggested-action  - accent color primary
.destructive-action - red danger
.flat              - no background (toolbar default)
.raised            - framed appearance
.circular          - round (icons)
.pill              - prominent rounded
```

### Layout
```
.linked            - group controls visually
.toolbar           - toolbar appearance
.boxed-list        - list container
.card              - surface container
.opaque            - solid background
.osd               - on-screen display style
```

### States
```
.selected          - selected item
.active            - current/active
.disabled          - non-interactive
.focused           - keyboard focus
```

---

## Implementation Notes

### Approach
1. **CSS-first styling** - Use vanilla CSS with CSS variables for theming
2. **Compound components** - React composition pattern for complex widgets
3. **Headless optional** - Build custom or use Radix primitives for accessibility
4. **No heavy dependencies** - Minimize bundle size

### File Structure Suggestion
```
/components
  /layout (Clamp, SplitView, Breakpoint)
  /navigation (Sidebar, TabView, ViewSwitcher)
  /containers (Card, BoxedList, PreferencesGroup)
  /rows (ActionRow, SwitchRow, etc.)
  /inputs (TextInput, Select, Switch)
  /buttons (Button, IconButton, ToggleButton)
  /feedback (Toast, Spinner, Progress, StatusPage)
  /overlays (Dialog, Popover, Tooltip)
  /display (Avatar, Badge, Label, Icon)
/hooks (useBreakpoint, useToast)
/styles (variables.css, components.css)
```

---

---

## Missing Components (To Be Proven)

Comparing against MUI, Radix, and shadcn/ui - these are commonly requested:

### Data Display Components

| Component | Description | Priority |
|-----------|-------------|----------|
| DataTable | Sortable, filterable, paginated table | High |
| TreeView | Hierarchical directory/folder structure | Medium |
| ImageList | Grid gallery for photos | Low |
| Timeline | Chronological event display | Low |

### Form Components

| Component | Description | Priority |
|-----------|-------------|----------|
| Calendar | Interactive date grid | High |
| DatePicker | Popover calendar input | High |
| DateRangePicker | Select date ranges | Medium |
| Combobox | Searchable dropdown | High |
| CommandPalette | Keyboard-driven command search | Medium |
| Rating | Star rating input | Medium |
| ColorPicker | Color selection input | Low |
| FileUpload | Drag-drop file input | Medium |
| OTPInput | Split-box verification codes | Low |

### Advanced Components

| Component | Description | Priority |
|-----------|-------------|----------|
| ResizablePanel | Draggable panel resize | Medium |
| TransferList | Dual-list move items back/forth | Low |
| Chart | Data visualization | Low (use wrapper) |

---

## Comparison: Adwaita vs Other Libraries

| Category | libadwaita-derived | MUI | Radix | shadcn/ui |
|----------|-------------------|-----|-------|-----------|
| Layout | ★★★★★ Unique adaptive | ★★★ | ★★ | ★★★ |
| Forms | ★★★★ | ★★★★★ | ★★★ | ★★★★ |
| Tables | ★★ | ★★★★★ | ★ | ★★★★ |
| Navigation | ★★★★ | ★★★★ | ★★ | ★★★ |
| Overlays | ★★★★ | ★★★★ | ★★★★★ | ★★★★★ |
| Accessibility | ★★★★ | ★★★ | ★★★★★ | ★★★★★ |
| Theming | ★★★★★ CSS vars | ★★★ | ★★ | ★★★★ |
| Bundle size | ★★★★★ Light | ★★ | ★★★ | ★★★★ |

**Verdict**: Sufficient for general-purpose apps. Add Calendar/DatePicker and DataTable for completeness.

---

## Priority Implementation Order

### Phase 1: Core (Already Listed)
1. Design tokens + reset
2. Button, IconButton
3. Input, Select, Switch, Checkbox
4. Card, BoxedList, ActionRow variants
5. Toast, Spinner, Progress
6. Dialog, Popover, Tooltip

### Phase 2: Navigation
1. Sidebar, SidebarItem
2. HeaderBar, ToolbarView
3. TabView, ViewSwitcher
4. Breadcrumb

### Phase 3: Adaptive
1. Clamp, Breakpoint
2. NavigationSplitView
3. ViewSwitcher (header ↔ bottom bar)

### Phase 4: Advanced (Missing)
1. Calendar + DatePicker
2. DataTable
3. Combobox
4. CommandPalette
5. ResizablePanel

---

## Key Sources

- libadwaita: `ref/libadwaita/src/`
- Style classes: `ref/libadwaita/doc/style-classes.md`
- CSS variables: `ref/libadwaita/doc/css-variables.md`
- Widget gallery: `ref/libadwaita/doc/widget-gallery.md`
- Adaptive layouts: `ref/libadwaita/doc/adaptive-layouts.md`
- Boxed lists: `ref/libadwaita/doc/boxed-lists.md`
- GNOME HIG: `ref/gnome_hig/source/patterns/`