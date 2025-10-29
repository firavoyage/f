# 1

why it does not work

const { html, render } = window.preact;

html is not a fn

---

The issue is that `html` is not directly exported from Preact. You're likely trying to use the `htm` library (which is commonly used with Preact) but it's not properly set up.

Here are the correct ways to fix this:

## Solution 1: Use HTM with Preact (Recommended)

First, make sure you have both Preact and HTM:

```html
<script type="module">
  import { html, render } from "https://esm.sh/htm/preact/standalone";

  // Now you can use html`` template literals
  function App() {
    return html`<h1>Hello World</h1>`;
  }

  render(html`<${App} />`, document.body);
</script>
```

## Solution 2: Import HTM separately

```html
<script type="module">
  import { h, render } from "https://esm.sh/preact";
  import htm from "https://esm.sh/htm";

  // Bind htm to Preact's h function
  const html = htm.bind(h);

  // Now use html
  function App() {
    return html`<h1>Hello World</h1>`;
  }

  render(html`<${App} />`, document.body);
</script>
```

## Solution 3: Use JSX instead (if using build tools)

If you're using a bundler like Vite, you can use JSX directly:

```jsx
import { render } from "preact";

function App() {
  return <h1>Hello World</h1>;
}

render(<App />, document.body);
```

## Solution 4: Using global scripts (no modules)

```html
<script src="https://unpkg.com/preact"></script>
<script src="https://unpkg.com/htm"></script>
<script>
  const { h, render } = Preact;
  const html = htm.bind(h);

  function App() {
    return html`<h1>Hello World</h1>`;
  }

  render(html`<${App} />`, document.body);
</script>
```

The key points:

- `html` comes from the `htm` library, not Preact itself
- You need to bind `htm` to Preact's `h` (hyperscript) function
- The standalone import (`htm/preact/standalone`) is the easiest approach

Choose the solution that best fits your setup!

# 2

why not just use preact.h

---

You're absolutely right! You can use `preact.h` directly, and in many cases it's actually simpler and more straightforward. Here's why and how:

## Using `preact.h` directly:

```javascript
const { h, render } = window.preact;

// Simple component
function Hello(props) {
  return h("h1", null, `Hello ${props.name}!`);
}

// Render it
render(h(Hello, { name: "World" }), document.body);
```

## Benefits of using `h` directly:

1. **No dependencies** - Don't need the `htm` library
2. **Explicit** - Clear what's happening without template literal magic
3. **Smaller bundle** - One less library to load
4. **Better debugging** - Stack traces are clearer

## Comparison:

```javascript
// With htm/html
html`<div class="header"><h1>Hello ${name}</h1></div>`;

// With h directly
h("div", { class: "header" }, h("h1", null, `Hello ${name}`));
```

## When you might prefer `htm`:

- **Familiar JSX-like syntax** - Easier transition from React
- **Complex nested elements** - More readable for deep structures
- **Team preference** - If your team is used to JSX

## Simple example with components:

```javascript
const { h, render } = window.preact;

function Header(props) {
  return h(
    "header",
    null,
    h("h1", null, props.title),
    h(
      "nav",
      null,
      h("a", { href: "/" }, "Home"),
      h("a", { href: "/about" }, "About")
    )
  );
}

function App() {
  return h(
    "div",
    null,
    h(Header, { title: "My Site" }),
    h("main", null, "Content here")
  );
}

render(h(App), document.body);
```

So yes, **`preact.h` is perfectly valid and often better** for simple cases or when you want to minimize dependencies. The `htm` library is just syntactic sugar that some people find more readable.

Which approach do you prefer for your project?
