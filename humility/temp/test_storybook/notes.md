# Storybook Notes

## Quick Start

```sh
pnpm storybook
```

Opens at http://localhost:6006

## Panels

- **Controls** - Edit args via UI (radio, boolean, text inputs)
- **Actions** - See fn() spy calls (onClick, onChange)
- **Interactions** - See play function steps (userEvent, expect)

## Key Packages

```json
{
  "storybook": "^8.0.0",
  "@storybook/react": "^8.0.0",
  "@storybook/react-vite": "^8.0.0",
  "@storybook/addon-essentials": "^8.0.0",
  "@storybook/addon-interactions": "^8.0.0",
  "@storybook/test": "^8.0.0"
}
```

## Story Format

```jsx
import { Component } from './Component';
import { fn, expect, userEvent } from '@storybook/test';

export default {
  title: 'Example/Component',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    prop: { control: 'radio', options: ['a', 'b'] },
  },
};

export const StoryName = {
  args: {
    prop: 'a',
    onAction: fn(),  // tracks in Actions panel
  },
  play: async ({ canvas }) => {
    // runs automatically - shows in Interactions panel
    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('result')).toBeInTheDocument();
  },
};
```

## Failure Modes

### 1. Story files not found
```
WARN No story files found for the specified pattern: src/**/*.mdx
```
- Check `.storybook/main.js` stories array is correct: `['../src/**/*.stories.@(js|jsx)']`

### 2. Version mismatch
```
WARN @storybook/addon-essentials@8.6.14 incompatible with 8.6.18
```
- Use matching versions: `pnpm add -D @storybook/addon-essentials@8.6.18`

### 3. Import error
```
Missing "./test" specifier in "storybook" package
```
- Use `@storybook/test` not `storybook/test`

### 4. Play function error
```
input.type is not a function
```
- Use `userEvent.type(input, text)` not `input.type(text)`
- Use `userEvent.click(element)` not `element.click()`

### 5. Panels not showing
- Install `@storybook/addon-essentials` and add to addons
- Install `@storybook/addon-interactions` for Interactions panel

### 6. Port in use / connection refused
- Storybook starts on random port, check output: `Local: http://localhost:6007/`
- Kill processes: `pkill -f storybook`

### 7. Storybook exits immediately
- Use `--ci` flag: `pnpm storybook --ci`
- Use `--no-open` to prevent browser auto-open

## Testing with Playwright

```bash
# Start storybook in background
pnpm storybook --ci --no-open &
sleep 10
# Navigate to story
http://localhost:6006/?path=/story/example-counter--click-three-times
```

## Key Concepts

- **args** - Component props passed to story
- **argTypes** - Controls configuration (type, options)
- **fn()** - Spy function, logs to Actions panel
- **play** - Auto-run function, logs to Interactions panel
- **userEvent** - Simulates user actions
- **expect** - Assertions for play functions
- **canvas** - Scoped DOM queries for component

## Complete Example: Counter Component

### Component (Counter.jsx)

```jsx
import { useState } from 'react';

export function Counter({ initialCount = 0, onIncrement }) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(c => c + 1);
    onIncrement?.();  // callback
  };

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

### Stories (Counter.stories.jsx)

```jsx
import { Counter } from './Counter';
import { fn, expect, userEvent } from '@storybook/test';

export default {
  title: 'Example/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    initialCount: { control: 'number' },
  },
};

export const ClickThreeTimes = {
  args: {
    initialCount: 0,
    onIncrement: fn(),  // spy - shows in Actions panel
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Increment' });
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    await expect(canvas.getByText('Count: 3')).toBeInTheDocument();
  },
};
```

### What Each Panel Shows

| Panel | What | How |
|-------|------|-----|
| **Controls** | Edit args in UI | Define via `argTypes` in story default |
| **Actions** | See callback calls | Pass `fn()` as callback prop in args |
| **Interactions** | See play steps | Use `play` function with userEvent/expect |

### Detailed Explanation

**Controls Panel**
- Shows `initialCount` (number control)
- Allows changing props without editing code
- Click the spinbutton to change value → component re-renders

**Actions Panel**
- Shows `onIncrement` was called 3 times
- When component calls `onIncrement()`, it logs here
- Use `fn()` from @storybook/test to create spy

**Interactions Panel**
- Shows step-by-step execution of play function
- Each userEvent.click() appears as a step
- Each expect() assertion appears as a step
- Shows Pass/Fail status for each step
- Can pause/resume/rerun from this panel