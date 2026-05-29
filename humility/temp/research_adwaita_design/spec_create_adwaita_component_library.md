# Spec: Create Adwaita Component Library

**Date**: 2026-05-29
**Goal**: Port libadwaita to web via React + Base UI

---

## 1. Architecture

### 1.1 Tech Stack
- **Framework**: React 19 (ES modules)
- **Headless Library**: Base UI (@mui/base) - unstyled, accessible primitives
- **Styling**: Vanilla CSS with CSS variables (adwaita.css)
- **Build**: ParcelJS
- **Package Manager**: pnpm

### 1.2 Design Principles
- Follow knowledge_web_styling.md philosophy
- Flat CSS file structure: one file per component category
- Semantic class naming: component name as root class, kebab-case for children
- No utility classes
- Data attributes for states: `[data-active]`, `[data-disabled]`, `[data-checked]`

### 1.3 File Structure

```
/components
  /layout
    clamp.tsx
    clamp.css
    breakpoint.tsx
    split_view.tsx
    split_view.css
  /navigation
    sidebar.tsx
    sidebar.css
    tab_view.tsx
    tab_view.css
    view_switcher.tsx
    view_switcher.css
  /containers
    card.tsx
    card.css
    boxed_list.tsx
    boxed_list.css
    preferences_group.tsx
  /rows
    action_row.tsx
    action_row.css
    switch_row.tsx
    switch_row.css
    entry_row.tsx
    entry_row.css
  /inputs
    text_input.tsx
    text_input.css
    select.tsx
    select.css
    switch.tsx
    switch.css
    checkbox.tsx
    checkbox.css
    slider.tsx
    slider.css
  /buttons
    button.tsx
    button.css
    icon_button.tsx
    icon_button.css
    toggle_button.tsx
    toggle_button.css
  /feedback
    toast.tsx
    toast.css
    spinner.tsx
    spinner.css
    progress.tsx
    progress.css
    status_page.tsx
    status_page.css
    skeleton.tsx
    skeleton.css
  /overlays
    dialog.tsx
    dialog.css
    popover.tsx
    popover.css
    tooltip.tsx
    tooltip.css
  /display
    avatar.tsx
    avatar.css
    badge.tsx
    badge.css
    label.tsx
    label.css
    divider.tsx
    divider.css
    icon.tsx
/hooks
  use_breakpoint.ts
  use_toast.ts
  use_id.ts
/styles
  adwaita.css (existing, expand)
/index.ts (barrel export)
```

---

## 2. Component Patterns

### 2.1 Compound Components
Use React composition pattern for complex widgets:

```tsx
// Example: SplitView
export function SplitView({ children }) {
  return <div className="SplitView">{children}</div>;
}

export function SplitViewSidebar({ children, ...props }) {
  return <aside className="SplitView-sidebar" {...props}>{children}</aside>;
}

export function SplitViewContent({ children, ...props }) {
  return <main className="SplitView-content" {...props}>{children}</main>;
}

// Usage
<SplitView>
  <SplitViewSidebar>Sidebar</SplitViewSidebar>
  <SplitViewContent>Content</SplitViewContent>
</SplitView>
```

### 2.2 Base UI Integration
Use Base UI primitives for accessibility:

```tsx
// Select uses Base UI
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';

// Custom styling via className
<Select rootClassName="Select" slotProps={{ listbox: { className: 'Select-listbox' } }}>
  <Option value="1">Option 1</Option>
</Select>
```

### 2.3 CSS Structure
Each component has co-located CSS:

```css
/* button.css */
.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: background-color var(--transition-fast), box-shadow var(--transition-fast);
}

.Button[data-disabled="true"] {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}

/* Button variants */
.Button--suggested {
  background-color: var(--accent-bg-color);
  color: var(--accent-fg-color);
}

.Button--destructive {
  background-color: var(--red-4);
  color: white;
}

.Button--flat {
  background-color: transparent;
}

.Button--circular {
  border-radius: var(--radius-full);
  padding: var(--space-2);
}
```

---

## 3. Design Tokens

### 3.1 Existing (adwaita.css)
- Colors: `--accent-bg-color`, `--accent-fg-color`, palette (blue-1 to blue-5, etc.)
- Typography: `--font-family`, `--font-size-*`, `--font-weight-*`
- Spacing: `--space-1` to `--space-12`
- Border radius: `--radius-xs/sm/md/lg/xl/full`
- Transitions: `--transition-fast/normal/slow/backdrop`
- Z-index: `--z-dropdown/sticky/modal/popover/tooltip`

### 3.2 Expand (Phase 1)
Add from notes_expand_design_tokens.md:

```css
/* Focus */
--focus-ring: rgba(53, 132, 228, 0.5);
--focus-ring-width: 2px;
--focus-ring-offset: -2px;

/* Button sizes */
--size-button-mini: 18px;
--size-button-small: 22px;
--size-button-medium: 28px;
--size-button-large: 36px;
--size-button-huge: 42px;
--size-button-mega: 58px;

/* Input */
--input-height: 28px;
--input-padding: 8px;
--input-radius: 5px;

/* Scrollbar */
--scrollbar-width: 8px;
--scrollbar-thumb: #bbb;
--scrollbar-thumb-hover: #999;

/* Text */
--text-secondary: #686868; /* light */
--text-dimmed: rgba(0, 0, 0, 0.55);

/* Button states */
--btn-bg: #f6f5f4;
--btn-hover: #f9f9f8;
--btn-pressed: #e8e7e6;
--btn-border: #cdc7c2;

/* Border */
--border-color: #d8d4d0;
```

---

## 4. Core Components Implementation

### 4.1 Button
```tsx
type ButtonProps = {
  variant?: 'suggested' | 'destructive' | 'flat' | 'raised';
  size?: 'mini' | 'small' | 'medium' | 'large' | 'huge';
  shape?: 'normal' | 'circular' | 'pill';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ variant = 'flat', size = 'medium', shape = 'normal', disabled, loading, children, onClick }: ButtonProps) {
  const className = [
    'Button',
    variant !== 'flat' && `Button--${variant}`,
    size !== 'medium' && `Button--${size}`,
    shape !== 'normal' && `Button--${shape}`,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      data-disabled={disabled}
      data-loading={loading}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && <Spinner size="mini" />}
      {children}
    </button>
  );
}
```

### 4.2 TextInput
```tsx
type TextInputProps = {
  type?: 'text' | 'password' | 'email' | 'search' | 'number';
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
};

export function TextInput({ type = 'text', placeholder, value, disabled, error, onChange }: TextInputProps) {
  return (
    <input
      className="TextInput"
      type={type}
      placeholder={placeholder}
      value={value}
      data-disabled={disabled}
      data-error={error}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
```

### 4.3 Switch (Base UI)
```tsx
import { Switch } from '@mui/base/Switch';

type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Switch({ checked, disabled, onChange }: SwitchProps) {
  return (
    <Switch
      className="Switch"
      checked={checked}
      disabled={disabled}
      onChange={(_, checked) => onChange?.(checked)}
      slotProps={{
        root: { className: 'Switch-root' },
        thumb: { className: 'Switch-thumb' },
        track: { className: 'Switch-track' },
      }}
    />
  );
}
```

### 4.4 Clamp (Layout)
```tsx
type ClampProps = {
  maximumWidth?: number; // default 600
  children: React.ReactNode;
};

export function Clamp({ maximumWidth = 600, children }: ClampProps) {
  return (
    <div
      className="Clamp"
      style={{ '--clamp-max-width': `${maximumWidth}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
```

```css
.Clamp {
  max-width: var(--clamp-max-width, 600px);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--space-3);
}

@media (max-width: 600px) {
  .Clamp {
    padding: 0 var(--space-2);
  }
}
```

### 4.5 Breakpoint Hook
```ts
type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setBreakpoint('mobile');
      else if (width < 900) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
```

---

## 5. Accessibility

### 5.1 Requirements
- All interactive elements use semantic HTML
- Keyboard navigation (Tab, Enter, Space, Escape)
- ARIA attributes where needed
- Focus visible states using `--focus-ring`
- Color contrast meets WCAG AA

### 5.2 Focus Styles
```css
*:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}
```

---

## 6. Testing

### 6.1 Test Structure
```
/test
  button.test.ts
  text_input.test.ts
  switch.test.ts
  clamp.test.ts
  use_breakpoint.test.ts
```

### 6.2 Test Pattern
```ts
const tests = [
  {
    input: { variant: 'suggested', disabled: false },
    expected: { className: 'Button Button--suggested', disabled: false },
  },
  {
    input: { variant: 'destructive', disabled: true },
    expected: { className: 'Button Button--destructive', disabled: true },
  },
];

tests.forEach(({ input, expected }) => {
  // render and verify
});
```

---

## 7. Style Classes Reference

### Buttons
- `.suggested-action` - accent color primary
- `.destructive-action` - red danger
- `.flat` - no background (toolbar default)
- `.raised` - framed appearance
- `.circular` - round (icons)
- `.pill` - prominent rounded

### Layout
- `.linked` - group controls visually
- `.toolbar` - toolbar appearance
- `.boxed-list` - list container
- `.card` - surface container
- `.opaque` - solid background
- `.osd` - on-screen display style

### States
- `.selected` - selected item
- `.active` - current/active
- `.disabled` - non-interactive
- `.focused` - keyboard focus

---

## 8. Priority Implementation

### MVP (First 10)
1. Button + IconButton
2. TextInput
3. Switch
4. Card
5. Clamp
6. HeaderBar
7. Sidebar
8. Dialog
9. Toast
10. Spinner

### Extended (Phase 2-4)
- Input variants (Password, Number, TextArea, Search)
- Select, Checkbox, Slider
- ToggleButton, ButtonGroup
- Navigation components
- List rows
- More feedback components

### Advanced (Phase 5-8)
- Calendar, DatePicker
- DataTable
- Combobox
- Remaining display components