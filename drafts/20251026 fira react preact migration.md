# 1

react to preact migration guide

---

Of course! Here is a reaction to and a breakdown of the typical Preact migration guide, highlighting its key principles, potential pain points, and overall value.

### Overall Reaction: Positive and Pragmatic

The Preact migration guide is generally **excellent, practical, and reassuring**. It's clearly written by developers who understand the real-world concerns of migrating a production React application. The tone isn't "throw everything away and start over," but rather "let's make a few strategic changes to get a massive performance and bundle size win."

---

### Key Themes and Strengths of the Guide

#### 1. The "Compat" Layer is the Star

The single most important concept in the guide is `preact/compat`. This is a brilliant strategy.

- **What it is:** A drop-in replacement for `react` and `react-dom` that lets most React code run unmodified.
- **Why it's great:** It drastically lowers the migration barrier. You don't have to rewrite your components immediately. This allows for a **gradual, low-risk migration** where you can swap the underlying library and then refactor at your own pace.

#### 2. Focus on the Biggest Win First: Bundle Size

The guide immediately highlights the primary benefit: **drastically reduced bundle size** (typically from ~40kb gzipped for React to ~4kb for Preact). This is a compelling, quantifiable reason to migrate, and the guide correctly puts it front and center.

#### 3. Practical, Tool-Based Solutions

The guide doesn't just say "change your imports." It provides specific configurations for all major bundlers (Webpack, Vite, Parcel, etc.) using **aliasing**. This is the correct, sustainable approach rather than relying on find-and-replace in your source code.

**Example Webpack Alias:**

```js
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
};
```

#### 4. It's Honest About the Rough Edges

A good migration guide tells you what _won't_ work, and the Preact guide does this well. It clearly outlines the main differences:

- **PropTypes:** Removed by default to save size; you must re-add the package if you need them.
- **Synthetic Events:** Preact's events are closer to the DOM standard. They bubble correctly, but `event.persist()` is a no-op and `event` is reused (which can cause issues in asynchronous code if you don't cache the values you need).
- **Uncommon APIs:** Features like `React.createFactory`, `React.unstable_act`, and the legacy `ReactDOM.render` for hydration are clearly called out as unsupported.

---

### Potential "Gotchas" and Pain Points (The "Devil in the Details")

While the guide is great, a developer's reaction should also be one of caution regarding these areas:

1.  **Third-Party Libraries:** This is the **biggest risk**. A library that does deep, strange things with React internals, uses deprecated APIs, or relies heavily on non-standard event behavior might break. The guide's advice to test thoroughly is critical.
2.  **Hooks and Asynchronous Events:** The event pooling/persistence difference is the most common source of bugs. If you have code that uses `event` properties inside a `setTimeout` or `Promise` without calling `event.persist()` (which does nothing in Preact), it will break. The solution is to destructure the needed properties immediately.

    ```jsx
    // Problematic in Preact
    const handleChange = (e) => {
      setTimeout(() => {
        console.log(e.target.value); // This might be null!
      }, 1000);
    };

    // Solution: Cache the value
    const handleChange = (e) => {
      const { value } = e.target;
      setTimeout(() => {
        console.log(value); // This works!
      }, 1000);
    };
    ```

3.  **Development Tooling:** Swapping `React Developer Tools` for `Preact Developer Tools` is a minor change, but it's a workflow adjustment. The Preact DevTools are good, but some developers might miss specific features of the React ones.

---

### Who Should Use This Guide?

- **Greenfield Projects:** The guide makes it trivial to start a new project with Preact + Compat. It's a no-brainer for performance-conscious teams.
- **Established React Apps (with technical debt):** Perfect candidates. The `compat` layer allows them to get the bundle size benefits immediately while they work on modernizing their codebase (e.g., removing deprecated lifecycles).
- **Bundle-Size-Critical Projects:** (e.g., Progressive Web Apps, embedded web views, low-bandwidth scenarios) Preact is arguably the best choice, and this guide is the essential first step.

### Final Verdict

The Preact migration guide is a **masterclass in library adoption strategy**. It successfully reframes the migration from a daunting rewrite into a manageable engineering task. By leveraging `preact/compat` and straightforward bundler configuration, it delivers immense value with minimal initial risk.

**My reaction in a nutshell:** "This is a surprisingly smooth and well-thought-out process. The benefits are huge, the risks are manageable, and the guide provides a clear, honest path to success."

# 2

preact to react migration guide

---

Here's a comprehensive guide for migrating from Preact to React:

## 1. Installation and Setup

### Remove Preact Dependencies

```bash
npm uninstall preact preact-compat
# or
yarn remove preact preact-compat
```

### Install React

```bash
npm install react react-dom
# or
yarn add react react-dom
```

## 2. Update Imports

### Before (Preact)

```jsx
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { render } from "preact";
import { Router } from "preact-router";
```

### After (React)

```jsx
import React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
```

## 3. Key API Differences

### Component Creation

```jsx
// Preact - often uses h() directly
export function MyComponent() {
  return h("div", { className: "test" }, "Hello");
}

// React - uses JSX or createElement
export function MyComponent() {
  return <div className="test">Hello</div>;
}
```

### Event Handlers

```jsx
// Preact
<button onClick={handleClick} />

// React
<button onClick={handleClick} />
// Note: Events work mostly the same, but React uses SyntheticEvent
```

## 4. Router Migration

### Preact Router

```jsx
import { Router, Route } from "preact-router";

<Router>
  <Route path="/" component={Home} />
  <Route path="/users" component={Users} />
</Router>;
```

### React Router

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
  </Routes>
</Router>;
```

## 5. Context API

### Preact

```jsx
import { createContext } from "preact";

const MyContext = createContext();

function App() {
  return h(MyContext.Provider, { value: data }, children);
}
```

### React

```jsx
import { createContext } from "react";

const MyContext = createContext();

function App() {
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
```

## 6. Hook Differences

### useEffect Cleanup Timing

```jsx
// Both Preact and React use the same API, but cleanup timing might differ
useEffect(() => {
  // effect
  return () => {
    // cleanup - timing might be slightly different
  };
}, []);
```

### useCallback/useMemo

```jsx
// Works the same in both
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

## 7. Server-Side Rendering

### Preact

```jsx
import render from "preact-render-to-string";
const html = render(<App />);
```

### React

```jsx
import { renderToString } from "react-dom/server";
const html = renderToString(<App />);
```

## 8. Testing Updates

### Preact Testing

```jsx
import { render } from "@testing-library/preact";
```

### React Testing

```jsx
import { render } from "@testing-library/react";
```

## 9. Build Configuration

### Webpack (remove Preact aliases)

```js
// Remove these aliases if they exist
resolve: {
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat'
  }
}
```

### Vite

```js
// Remove Preact plugin and add React
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
};
```

## 10. Common Pitfalls

### 1. Default Props

```jsx
// Preact - might rely on defaultProps
class Component extends Component {
  static defaultProps = { value: 0 };
}

// React - defaultProps is being deprecated, use default parameters instead
function Component({ value = 0 }) {
  return <div>{value}</div>;
}
```

### 2. Ref Handling

```jsx
// Both support similar ref patterns, but implementation details may differ
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

### 3. Error Boundaries

```jsx
// Both have similar error boundary implementations
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## 11. Migration Strategy

### 1. Incremental Migration

- Use both libraries side-by-side during transition
- Migrate components one by one
- Set up a proxy system if needed

### 2. Update Package.json

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0"
  }
}
```

### 3. TypeScript Updates

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["react", "react-dom"]
  }
}
```

## 12. Performance Considerations

- React bundle size is larger than Preact
- Consider code splitting strategies
- Use React.memo() for performance optimization
- Profile your application after migration

## Verification Checklist

- [ ] All imports updated
- [ ] Router configuration migrated
- [ ] Event handlers tested
- [ ] Context usage verified
- [ ] SSR updated (if applicable)
- [ ] Tests updated and passing
- [ ] Build configuration updated
- [ ] Performance benchmarks compared

The migration is generally straightforward since Preact was designed to be compatible with React's API. The main differences are in routing, some lifecycle timing, and bundle configuration.
