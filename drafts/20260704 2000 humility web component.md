<!-- components? -->

<!-- functionality? -->

<!-- well, how could i do things wo a component library. i could. but it would not be maintenable. -->

<!-- atom. patterns. page. -->

<!-- i could write the page alongside though. -->

# use cases of flex or grid

July 3, 2026

The primary difference is that <mark><strong>Flexbox is designed for one-dimensional layouts</strong><span> </span>(a single row or column), while<span> </span><strong>CSS Grid is designed for two-dimensional layouts</strong><span> </span>(rows and columns simultaneously)</mark>. As a best practice, developers use Grid for macro-layouts (the overall page structure) and Flexbox for micro-layouts (content alignment inside components). [link](https://zerotomastery.io/blog/css-grid-vs-flexbox/)

The choice between them can be broken down by specific, practical use cases. [link](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-using-flexbox-and-grid)

***

### Use Cases for Flexbox (One-Dimensional)

Flexbox calculates layouts from the **content outward**. Use it when the size of the elements should dictate how they space themselves out. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid%5Flayout/Relationship%5Fwith%5Fother%5Flayout%5Fmethods)

- **Navigation Bars**: Aligning a logo on the left and a list of links on the right using `justify-content: space-between`.
- **Form Controls**: Placing a text input field and a "Submit" button side-by-side so the input fills the remaining space (`flex-grow: 1`).
- **Centering Elements**: Perfectly centering an item vertically and horizontally inside a container using `align-items: center` and `justify-content: center`.
- **Dynamic Wrapping UI**: A tagging system or a "cloud of chips" where items vary in text length and need to wrap naturally to the next line without snapping to rigid vertical columns.
- **Sticky Footers**: Forcing a footer to stay at the very bottom of a webpage by applying a column layout and setting `margin-top: auto` on the footer. [link](https://www.reddit.com/r/Frontend/comments/10izepz/flex%5Fbox%5Fvs%5Fgrid/)

***

### Use Cases for CSS Grid (Two-Dimensional)

CSS Grid calculates layouts from the **structure inward**. Use it when you want to enforce a strict geometric design regardless of the content size. [link](https://www.reddit.com/r/css/comments/vn9v5m/do%5Fyou%5Fprefer%5Fcss%5Fgrid%5For%5Fflexbox/)

- **Full Page Layouts**: Structuring major regions of a web app like a sticky top header, a left-hand sidebar, a central main feed, and a footer.
- **Card Galleries**: Displaying e-commerce products or blog posts in an even grid where every single card must maintain identical widths and strict vertical columns.
- **Bento Grid / Asymmetric Layouts**: Creating a magazine-style dashboard where featured items span across multiple grid tracks using `grid-column: span 2` or `grid-row: span 2`.
- **Overlapping Elements**: Placing an image background, a text overlay, and a badge directly on top of each other without breaking normal document flow by assigning them to the exact same `grid-area`.
- **Responsive Layouts Without Media Queries**: Creating a card layout that automatically adjusts the number of columns to fit the screen size using `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`. [link](https://www.reddit.com/r/css/comments/1ehoxcu/go%5Fto%5Fresource%5Fto%5Funderstand%5Fwhen%5Fto%5Fuse%5Fgrid%5For/)

***

### Combining Both Systems

You do not have to choose just one; they are meant to work together. For example, on an e-commerce website, you should use **CSS Grid** to create the 4-column layout of product items, but use **Flexbox** inside each individual card to vertically align the product name, price, and the "Add to Cart" button at the bottom. [link](https://penpot.app/blog/css-grid-vs-flexbox-choosing-the-right-layout-for-you/)

If you are working on a specific layout right now, I can help you pick the right tool if you describe **what the layout looks like** or how you want it to behave on **mobile screens**.

- [link](https://www.reddit.com/r/Frontend/comments/10izepz/flex%5Fbox%5Fvs%5Fgrid/)\
  Flex box vs Grid ? : r/Frontend - Reddit\
  Grid. I might add that flex is also useful for page content containers to grow the body to the appropriate size between header and...\
  Reddit
- [link](https://www.reddit.com/r/css/comments/176xc23/when%5Fdo%5Fyou%5Fuse%5Fflex%5Fand%5Fgrid/)\
  When do you use flex and grid? : r/css - Reddit\
  Hey! For me, it's pretty simple - use flex when you're dealing with one-dimensional layout and grid when you're dealing with two d...\
  Reddit
- [link](https://www.reddit.com/r/Frontend/comments/l8oajx/use%5Fcases%5Ffor%5Fflex%5Fover%5Fgrid/)\
  Use cases for Flex over Grid : r/Frontend - Reddit\
  Simplified: Grid is better for specifying placement and layout, while flex is better for flow and alignment. The real usefulness o...\
  Reddit

Show all

## for sidebar

for sidebar

July 3, 2026

For a webpage sidebar, **Flexbox is best for a simple side-by-side split**, while **CSS Grid is superior for a full-page layout** that includes a header and footer.

The optimal choice depends on how your sidebar interacts with the rest of the page structure.

***

### 1. Use CSS Grid for the Full Page Structure

If your sidebar needs to sit cleanly alongside a header, footer, and main content area, use CSS Grid on the page container. This locks the sidebar into a distinct layout column that maintains a fixed width while the content area remains fluid.

css

```
.page-container {
  display: grid;
  grid-template-columns: 250px 1fr; /* Fixed sidebar, fluid content */
  grid-template-rows: auto 1fr auto; /* Header, Content/Sidebar, Footer */
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
```

Use code with caution.

**Why Grid wins here:**

- It ensures the sidebar and main content are **exactly the same height**.
- It prevents content from accidentally pushing or overlapping the sidebar boundaries.

***

### 2. Use Flexbox for a Simple Row Split

If your webpage does not have a complex header or footer, and you just need a sidebar sitting next to your main content, use Flexbox on a wrapper element.

css

```
.wrapper {
  display: flex;
}
.sidebar {
  flex: 0 0 250px; /* Fixed width: cannot grow or shrink */
}
.main-content {
  flex: 1; /* Automatically takes up all remaining space */
}
```

Use code with caution.

**Why Flexbox wins here:**

- It requires less code for simple, one-dimensional horizontal splits.
- It makes it incredibly easy to flip the sidebar to the right side using `flex-direction: row-reverse`.

***

### 3. Use Flexbox Inside the Sidebar

Once the sidebar's outer layout is established, **always use Flexbox** to arrange the navigation links inside it. Sidebars are vertical, one-dimensional columns of content.

css

```
.sidebar-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.logout-button {
  margin-top: auto; /* Pushes the logout button to the absolute bottom of the sidebar */
}
```

Use code with caution.

**Why Flexbox wins inside:**

- It allows you to align icons next to text links cleanly.
- It lets you use `margin-top: auto` to easily pin your profile or logout buttons to the bottom of the column.

***

If you are building this right now, let me know if your sidebar needs to **collapse into a mobile menu** or if it needs to **scroll independently** of the main page content.

- [link](https://medium.com/swlh/creating-sidebars-with-react-router-64d7f170ca0a)\
  Creating Sidebars with React Router | by John Au-Yeung | The Startup\
  Conclusion We can create a sidebar easily by using flexbox and the Switch and Route components. As long as we have Switch and Rout...\
  \
  \
  Medium
- [link](https://ltheme.com/wordpress-sidebar/)\
  What is WordPress Sidebar? - LTHEME\
  Before choosing your sidebar items, think about where they'll go and how they'll work with the rest of your website. Will they be ...\
  \
  \
  ltheme
- [link](https://medium.com/wdstack/bootstrap-sidebar-examples-e363021395ff)\
  Bootstrap Sidebar Examples. Off-canvas, left, right, floating, push… | by Tom Michew | WDstack\
  Fixed width responsive sidebar, fluid layout This example shows a fixed width left column for sidebar. The sidebar scrolls indepen...\
  \
  \
  Medium

Show all

## what will happen if sidebar is display none

what will happen if sidebar is display none

July 3, 2026

If you apply `display: none` to the sidebar, <mark>it will be<span> </span><strong>completely removed from the page layout</strong>, and the remaining elements will automatically shift to fill the empty space</mark>.

How the layout fills that gap depends entirely on whether you used CSS Grid or Flexbox for the outer structure.

***

### If You Used CSS Grid (With Named Areas)

If your layout uses `grid-template-areas` (like the example in the previous response), removing the sidebar will leave an **empty, blank column column** where the sidebar used to be. The main content will not automatically expand because it is still locked into its assigned track.

- **The Problem**: You get a giant blank space on the left side of the screen.
- **The Fix**: You must use JavaScript or a media query to change the container's grid layout when the sidebar is hidden.

css

```
/* When sidebar has display: none, change the parent container layout */
.page-container.sidebar-hidden {
  grid-template-columns: 1fr; /* Reduce to a single full-width column */
  grid-template-areas:
    "header"
    "main"
    "footer";
}
```

Use code with caution.

***

### If You Used Flexbox

If you used Flexbox (`display: flex`) on the parent container, the main content will **instantly and automatically expand** to fill 100% of the screen width.

- **How it works**: Because the main content has `flex: 1` (or `flex-grow: 1`), it is explicitly told to take up all available remaining space. When the sidebar disappears, the "remaining space" suddenly becomes the entire row.
- **The Result**: A perfectly smooth, automatic transition with zero extra CSS required.

***

### General Behavior to Expect

Regardless of Grid or Flexbox, `display: none` causes these universal behaviors:

- **No Screen Space**: The element takes up 0 pixels of width and height.
- **Hidden from Screen Readers**: Visually impaired users using assistive technology will no longer be able to read or navigate the sidebar links.
- **Destructive to Focus**: If a user is using their keyboard `Tab` key to navigate your menu when it vanishes, their focus will reset to the top of the page.
- **No Transitions**: You cannot animate `display: none`. The sidebar will pop out of existence instantly. If you want a smooth sliding animation, you must use properties like `transform: translateX(-100%)` or `width: 0` instead.

If you are trying to hide the sidebar to make your layout responsive, let me know if you want it to **slide out from the side** or if you want to **toggle it with a hamburger menu button**.

- [link](https://www.linkedin.com/pulse/difference-between-displaynone-visibilityhidden-aman-varshney)\
  Difference between Display:none and visibility:hidden\
  When an element is set to "display: none", it is completely removed from the webpage's layout. This means that the element will no...\
  \
  \
  LinkedIn
- [link](https://www.freecodecamp.org/news/the-css-display-property-display-none-display-table-inline-block-and-more/)\
  The CSS Display Property – Display None, Display Table, Inline Block and More\
  display: none When you set the display property of an element to none , the element is completely taken off the page and it doesn'\
  \
  \
  freeCodeCamp
- [link](https://qodeinteractive.com/magazine/how-to-remove-sidebar-in-wordpress/)\
  How to Remove Sidebar in WordPress\
  The first is that by simply removing the sidebar, it is most likely that the main content would remain the same and not automatica...\
  \
  \
  Qode Interactive

Show all

# what if you put an effect outside useeffect

7:57 AM

If you put a side effect directly in the main body of a React component (outside of `useEffect` or an event handler), <mark><strong>the code will run on every single render</strong></mark>. [link](https://overreacted.io/a-complete-guide-to-useeffect/)

Because the component body is just a standard JavaScript function that React calls repeatedly to calculate the UI, executing side effects here violates React's rendering philosophy.

### The Risks and Consequences

- **Infinite Loops**: If your side effect updates the component's state (e.g., fetching data and calling `setData`), it triggers a new render. That new render runs the body again, triggering the effect, which updates state, and crashes your application in an endless loop.
- **Performance Bottlenecks**: Heavy operations like API calls, reading from `localStorage`, or complex calculations will block React's rendering thread. This makes the user interface laggy and unresponsive.
- **Stale Data and Memory Leaks**: Code in the component body lacks a cleanup mechanism. If you set up a `setInterval` or a WebSocket connection directly in the body, a brand-new timer or connection will be created on _every render_, quickly consuming browser memory and producing unpredictable bugs.
- **Inconsistent DOM States**: React separates rendering (calculating the UI) from committing (updating the DOM). Running DOM manipulations directly in the component body means your code executes _before_ React has even updated the screen, which can cause elements to be missing or broken. [link](https://overreacted.io/a-complete-guide-to-useeffect/)

***

### Comparison of Execution Contexts

| Scenario                      | Execution Timing                                                       | Best Used For                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Inside the Component Body** | Runs _during_ the render phase, before the DOM updates.                | Pure mathematical calculations, transforming props, or preparing local variables.                |
| **Inside `useEffect`**        | Runs _after_ the render is committed to the DOM and layout is painted. | Synchronizing with external systems, non-React APIs, logging, data fetching, or event listeners. |

***

### Examples: Bad vs. Good Practice

### 1. Data Fetching

javascript

```
// ❌ BAD: Fetches every render, causing an infinite loop when state changes
function UserProfile() {
  const [data, setData] = useState(null);
  fetch('/api/user').then(res => res.json()).then(setData);

  return <div>{data?.name}</div>;
}

// ✅ GOOD: Fetches safely once on mount
function UserProfile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setData);
  }, []);

  return <div>{data?.name}</div>;
}
```

Use code with caution.

### 2. Event Listeners

javascript

```
// ❌ BAD: Adds a new listener every render, leaking memory quickly
function WindowTracker() {
  window.addEventListener('resize', handleResize);
  return <div>Tracking...</div>;
}

// ✅ GOOD: Cleans up the listener when the component unmounts
function WindowTracker() {
  useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return <div>Tracking...</div>;
}
```

Use code with caution.

### When is it okay to omit `useEffect`?

You do not need `useEffect` if the side effect is triggered by a specific user interaction. In those cases, keep the logic inside an **event handler** (like `onClick` or `onSubmit`). You also don't need it if you are simply calculating a value from existing state or props during render. [link](https://www.reddit.com/r/reactjs/comments/17q3d1l/thoughts%5Fon%5Favoiding%5Fuseeffectusestate%5Fwhen/)

If you want to see how to rewrite a specific piece of code cleanly, let me know:

- What **action** your side effect performs (fetching, timers, DOM tweaks?)
- What **triggers** it (component loading, button clicks, state changing?)

I can help you structure it to avoid common performance pitfalls.

- [link](https://overreacted.io/a-complete-guide-to-useeffect/)\
  A Complete Guide to useEffect - Overreacted.io\
  This can happen if you're doing data fetching in an effect without the second dependencies argument. Without it, effects run after...\
  Overreacted.io
- [link](https://www.youtube.com/watch?v=PLyuk5OKlnY)\
  \#17 React useEffect Hook Simplified with examples\
  in this lesson I'll be simplifying the react use effect hook the use effect Hook is one of the fundamental hooks in react. and mos...\
  19:14\
  YouTube·Deeecode
- [link](https://stackoverflow.com/questions/60221665/react-api-call-outside-useeffect)\
  React API call outside useEffect - javascript - Stack Overflow\
  \* 3 Answers. Sorted by: is this a good way to make API requests outside useEffect/lifecycle.? It depends on your requirements. sho...\
  Stack Overflow

Show all

## when is it safe to omit useeffect for impure methods

when is it safe to omit useeffect for impure methods

8:38 AM

It is **never safe** to omit `useEffect` (or event handlers) for truly impure methods that touch the outside world during the render phase.

React requires the component body to be a **pure function** with respect to the outside world. If a method modifies data outside the component, triggers global state changes, or reads unpredictable data, running it directly in the component body will cause UI glitches, memory leaks, or infinite loops.

However, React allows you to omit `useEffect` in specific scenarios by moving those impure operations into **event handlers**, or by utilizing newer React architecture patterns.

***

### 1. In Response to User Interaction (Event Handlers)

If your impure method runs because a user clicked a button, submitted a form, or toggled a switch, **do not use `useEffect`**. Put it inside an event handler.

- **Why it is safe:** Event handlers do not run during rendering. React runs them after the UI is stable, meaning they can safely mutate state or call APIs without interrupting the render loop.

javascript

```
// ✅ SAFE: Impure POST request belongs in the event handler, not useEffect
function DeleteButton({ id }) {
  function handleClick() {
    // Impure: Modifies database state
    fetch(`/api/delete/${id}`, { method: 'POST' });
  }

  return <button onClick={handleClick}>Delete</button>;
}
```

Use code with caution.

### 2. Initializing Local State (Lazy Initialization)

If your impure method reads from the outside world _exactly once_ to set up the starting state (e.g., reading from `localStorage`), you can safely run it inside a `useState` initializer function.

- **Why it is safe:** Passing a function `useState(() => getInitialData())` tells React to run that function **only during the very first render**. React ignores it on subsequent renders.

javascript

```
// ✅ SAFE: Only reads from localStorage once on load
function Dashboard() {
  const [theme, setTheme] = useState(() => {
    // Impure: Reads external browser state
    return localStorage.getItem('theme') || 'light';
  });
}
```

Use code with caution.

### 3. Server Actions (React 19 / Next.js)

If you are using modern React 19 frameworks, you can execute database mutations directly using Server Actions inside forms.

- **Why it is safe:** React handles the lifecycle of these requests under the hood, managing loading states and transitions automatically without needing manual `useEffect` synchronization.

javascript

```
// ✅ SAFE: React 19 Form Actions manage the asynchronous impurity
function UpdateProfile() {
  async function handleSubmit(formData) {
    'use server'; // Runs safely on the server side
    await db.users.update(formData.get("email"));
  }

  return <form action={handleSubmit}>...</form>;
}
```

Use code with caution.

### 4. Data Fetching via `use()` (React 19)

If your impure action is reading/fetching data from a Promise, React 19 allows you to read it in render using the `use()` hook.

- **Why it is safe:** The `use()` hook integrates directly with React Suspense. If the promise isn't resolved, React pauses rendering and waits, preventing partial or broken UI states.

javascript

```
// ✅ SAFE: React 19 suspends rendering safely until the promise resolves
import { use } from 'react';

function Weather({ weatherPromise }) {
  const data = use(weatherPromise); // Consumes promise directly in render
  return <p>Temperature: {data.temp}°C</p>;
}
```

Use code with caution.

***

### Summary Checklist: Where to put Impure Methods

| Where does the code live?   | Safe for Impure Methods? | Rule of Thumb                                    |
| --------------------------- | ------------------------ | ------------------------------------------------ |
| **Component Body (Direct)** | ❌ **Never Safe**        | Must be 100% pure math/transformations.          |
| **Event Handlers**          | **Always Safe**          | Use for actions triggered by the user.           |
| **`useState` Initializer**  | **Safe for Reading**     | Use for one-time setup on mount.                 |
| **`useEffect` Hook**        | **Safe for Syncing**     | Use to mirror React state to an external system. |

If you are struggling to refactor a specific impure method, tell me:

- What **external system** it modifies or reads (e.g., Google Analytics, custom video player, global variable?)
- What **React hook or event** currently surrounds it?

I can show you exactly how to safely transition it out of `useEffect`.

- [link](https://www.freecodecamp.org/news/react-common-mistakes/)\
  Common React Mistakes to Avoid\
  React components should always be pure functions of their props. Impure components depend on external states and side effects, mak...\
  \
  \
  freeCodeCamp
- [link](https://medium.com/@luwen900131/react-side-effects-useeffect-uselayouteffect-useinsertioneffect-82b0067ed01a)\
  React Side-Effects: useEffect, useLayoutEffect, useInsertionEffect | by shiyi\
  Without using useEffect If you fetch data directly inside the component body, the fetch starts every time the function runs. Each ...\
  \
  \
  Medium
- [link](https://medium.com/the-amateur-dev/usestate-vs-useeffect-when-your-component-needs-memory-vs-when-it-needs-to-react-af08292cd6d8)\
  useState vs useEffect: When Your Component Needs Memory vs When It Needs to React\
  More importantly, when you start doing more complex things (like fetching data from an API or setting up subscriptions), putting t...\
  \
  \
  Medium

Show all

## like, to read something

like, to read something

8:39 AM

Reading data from an external source is an **impure operation** because the outside world can change at any time, or the reading mechanism itself might carry side effects.

It is safe to omit `useEffect` when reading data **only if you use specific React-approved escape hatches** that control how often or when that reading happens.

***

### 1. Safe: Reading Once via Lazy Initialization

If you only need to read an external value **one time** to set up your component's initial state (like a user preference or a token), wrap the reading logic inside a function inside `useState`.

- **How it works:** React executes this function **exactly once** during the component's initial mount react.dev. It completely ignores it on all future re-renders.

javascript

```
// ✅ SAFE: localStorage is only read once on load
function Settings() {
  const [volume, setVolume] = useState(() => {
    return Number(localStorage.getItem('user-volume')) || 50;
  });
}
```

Use code with caution.

### 2. Safe: Reading via React 19's `use()` Hook

If you are reading data from a Promise or a Context (like a database query or an API fetch started outside the component), you can read it directly during render using the new `use()` hook [react.dev](https://react.dev/reference/react/use).

- **How it works:** Unlike standard hooks, `use()` can be called conditionally or during loops. If the data is still loading, React will automatically pause ("suspend") rendering and show a loading fallback via [React Suspense](https://react.dev/reference/react/Suspense).

javascript

```
import { use } from 'react';

// ✅ SAFE: React handles the asynchronous read safely via Suspense
function PostComments({ commentsPromise }) {
  const comments = use(commentsPromise);
  return <ul>{comments.map(c => <li key={c.id}>{c.text}</li>)}</ul>;
}
```

Use code with caution.

### 3. Safe: Reading from Synchronous External Stores (`useSyncExternalStore`)

If you need to read from a third-party global store (like Redux, Zustand, a browser API like `navigator.onLine`, or a custom global variable) and keep your UI perfectly synced with it, use the [useSyncExternalStore hook](https://react.dev/reference/react/useSyncExternalStore).

- **How it works:** This hook safely subscribes to the external data source. It alerts React the exact moment the data changes so React can trigger a controlled re-render without tearing or UI glitches.

javascript

```
import { useSyncExternalStore } from 'react';

// ✅ SAFE: Subscribes to browser connectivity state automatically
function ConnectionStatus() {
  const isOnline = useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine // The read function
  );

  return <p>Status: {isOnline ? 'Connected' : 'Offline'}</p>;
}
```

Use code with caution.

***

### ⚠️ When it is NEVER Safe to Read Directly

You must **never** read directly from a mutable external source in the raw component body without one of the hooks above.

javascript

```
// ❌ DANGEROUS: Do not do this
function BadComponent() {
  // 1. Reads on EVERY single render, dragging down performance
  // 2. If globalValue changes, React doesn't know, causing a broken/stale UI
  const currentData = window.someGlobalObject.value;

  return <div>{currentData}</div>;
}
```

Use code with caution.

What specific data source are you trying to read from? If you tell me if it is **browser storage** (`localStorage`), a **global variable**, a **file/database**, or a **URL query string**, I can give you the exact, safest code pattern for it.

## what if you read local storage, global var, url, or anything outside useeffect directly

what if you read local storage, global var, url, or anything outside useeffect directly

8:40 AM

If you read from `localStorage`, a global variable, the URL, or any external system directly in the component body (outside of `useEffect`), the consequences depend entirely on **whether the value can change over time** while the component is on the screen.

Here is exactly what happens in each scenario, ordered from most dangerous to completely safe.

***

### 1. Global Variables: 🚨 Highly Dangerous

Reading a global variable directly in the component body breaks React’s rendering cycle completely.

javascript

```
// ❌ DANGEROUS
let globalCounter = 0;

function CounterComponent() {
  const currentCount = globalCounter; // Direct read
  return <div>{currentCount}</div>;
}
```

Use code with caution.

- **Why it breaks:** If something outside of React updates `globalCounter`, **React has no idea it changed**. Your UI will remain stale and show old data until some unrelated state change forces the component to re-render.
- **The fix:** Use `useSyncExternalStore` to subscribe to the variable, or wrap it in a state management library.

***

### 2. LocalStorage / SessionStorage: 🐢 Performance & Hydration Bugs

Reading from `localStorage` directly in the raw component body introduces performance bottlenecks and breaks Server-Side Rendering (SSR).

javascript

```
// ❌ BAD PRACTICE
function Profile() {
  const theme = localStorage.getItem('theme'); // Direct read
  return <div className={theme}>Profile</div>;
}
```

Use code with caution.

- **Performance Hit:** `localStorage` reads are synchronous and access the computer's hard drive. Putting this in the component body means you hit the disk on **every single render**, which slows down your UI.

- **SSR/Hydration Crash:** If you use Next.js or Remix, the server will crash because `localStorage` does not exist on the server (`window is not defined`). Even if you add a check, it causes "Hydration mismatch" errors because the server-generated HTML won't match the client HTML.

- **The fix:** Use **lazy state initialization** so it only reads once on mount:\
  javascript

<!---->

```
const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
```

Use code with caution.

***

### 3. URL Queries and Routes: ✅ Completely Safe (Usually)

Reading from the URL (via `window.location` or routing library hooks) directly in the component body is generally safe, provided you follow one rule.

javascript

```
// ✅ SAFE (If using your router's hook)
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // Direct read via hook

  return <div>Results for: {query}</div>;
}
```

Use code with caution.

- **Why it is safe:** Modern routing hooks (like those in [React Router](https://www.w3schools.com/react/react%5Frouter.asp), [Next.js](https://nextjs.org/), or [TanStack Router](https://tanstack.com/router/latest)) use internal React state or subscriptions under the hood. When the URL changes, the router automatically forces your component to re-render with the new value.
- **The exception:** Do **not** read `window.location.search` directly without a router hook. If the URL changes via the browser history API without a full page reload, React won't catch the change, leaving your UI out of sync.

***

### 4. DOM Elements via Refs: ⚠️ Timing Bugs

Reading dimensions or properties of a DOM element directly in the component body will result in `null` pointer crashes or stale measurements.

javascript

```
// ❌ DANGEROUS
function WidthTracker() {
  const myRef = useRef(null);
  const width = myRef.current?.getBoundingClientRect().width; // Direct read

  return <div ref={myRef}>Width: {width}</div>;
}
```

Use code with caution.

- **Why it breaks:** During the rendering phase, **the DOM has not been updated yet**. On the first render, `myRef.current` is always `null`. By the time it has a value, the render phase is already over, so your code won't read it again.
- **The fix:** Use `useLayoutEffect` or a callback ref to measure DOM nodes _after_ they are painted to the screen.

***

### Summary Checklist

| External Source           | Direct Read Status   | Primary Consequence                                         |
| ------------------------- | -------------------- | ----------------------------------------------------------- |
| **Global Variable**       | ❌ **Never Do This** | Stale UI; React won't re-render when the variable changes.  |
| **`localStorage`**        | ❌ **Bad Practice**  | Severe lag (slow disk reads) and SSR hydration crashes.     |
| **Router Hooks (URL)**    | **Safe**             | Router hooks manage the React lifecycle for you.            |
| **Raw Browser URL**       | ⚠️ **Risky**         | Stale UI if the URL updates without a page reload.          |
| **DOM Refs (`.current`)** | ❌ **Never Do This** | Always `null` or stale because the DOM hasn't rendered yet. |

Are you trying to connect one of these specific sources to your UI right now? If you share your **current component code**, I can show you exactly how to read from it without risking bugs or lag.

- [link](https://learn.microsoft.com/en-us/aspnet/core/blazor/state-management/protected-browser-storage?view=aspnetcore-10.0)\
  ASP.NET Core Blazor state management using protected browser storage\
  If one subscribed component changes the state, it rerenders and can display the updated state, but a different component on the sa...\
  \
  Microsoft Learn
- [link](https://dev.to/paripsky/using-effects-effectively-in-react-stop-misusing-useeffect-once-and-for-all-5fpm)\
  Using Effects Effectively in React: Stop Misusing useEffect Once and For All\
  We don't need useState and useEffect anymore, we just use useSyncExternalStore and give it a function to subscribe to changes and ...\
  \
  \
  DEV Community
- [link](https://medium.com/dotnet-new/10-architecture-mistakes-developers-make-in-blazor-projects-and-how-to-fix-them-e99466006e0d)\
  10 Architecture Mistakes Developers Make in Blazor Projects (And How to Fix Them)\
  Accessing browser-only APIs (like localStorage ) directly will break SSR.\
  \
  \
  Medium

Show all

## no custom hook. i mean directly.

no custom hook. i mean directly.

8:41 AM

If you read `window.location`, a global variable, or `localStorage` **completely raw and directly** in the component body (without hooks like `useState` or `useSearchParams`), your component becomes highly unstable.

Here is exactly what happens mechanically to your application when you do this.

***

### 1. Raw URL (`window.location.search`)

If you read the browser's URL directly using vanilla JavaScript inside the render path:

javascript

```
// ❌ RAW AND DIRECT
function SearchResults() {
  const query = new URLSearchParams(window.location.search).get('q');
  return <div>Results for {query}</div>;
}
```

Use code with caution.

- **The Glitch:** If the user types in a search box and you update the URL using modern client-side routing (like `history.pushState` or clicking a `<Link>` tag), **the text on your screen will not change**.
- **The Reason:** Changing the browser URL via JavaScript does not trigger a React state change. Because React doesn't know anything happened, it will not re-render your component, leaving you with a stale UI.
- **Server-Side Crash:** If this app runs in Next.js or Remix, the server will throw a `window is not defined` error and crash during rendering.

***

### 2. Raw Global Variables (`window.myGlobal`)

If you read from a global object or variable assigned outside of React:

javascript

```
// ❌ RAW AND DIRECT
function UserWidget() {
  const user = window.currentUser;
  return <div>Welcome, {user?.name}</div>;
}
```

Use code with caution.

- **The Glitch:** Just like the URL, if an external script, a WebSocket, or a separate component updates `window.currentUser`, **your component will show old data** indefinitely.
- **Zombie UI:** The component will only update its text by accident if a _different_ local state change happens to force a re-render. This leads to erratic bugs where the UI updates "sometimes."

***

### 3. Raw LocalStorage (`localStorage.getItem`)

If you read directly from storage on every render:

javascript

```
// ❌ RAW AND DIRECT
function ThemePanel() {
  const theme = localStorage.getItem('app-theme');
  return <div className={theme}>Active Theme: {theme}</div>;
}
```

Use code with caution.

- **The Glitch:** Unlike variables, this actually _will_ update if the component re-renders for other reasons. However, `localStorage` is **synchronous and reads directly from the computer's hard drive**.
- **The Reason:** React components render constantly (on parent updates, text inputs, etc.). Forcing the browser to hit the hard drive on every single render creates a massive performance bottleneck, making your app stutter and lag.

***

### The Underlying Problem: The "Tearing" Effect

When you read mutable data directly during rendering, you introduce a bug called **tearing**.

Because React 18+ can pause, split, or duplicate rendering tasks across different chunks of time (Concurrent Rendering), an external value might change **mid-render**. If this happens:

1. Component A reads the global variable and gets `value X`.
2. The browser pauses React to do background work, and an event updates the global variable to `value Y`.
3. React resumes and renders Component B, which reads `value Y`.

Your UI now shows two different values for the exact same data source on the exact same screen, completely breaking your visual layout.

***

### How to fix it with Vanilla React (No Custom Hooks)

If you refuse to use third-party libraries or custom hooks, you must use React's built-in state to bridge the gap. You do this by copying the raw value into a state variable so React can track it.

javascript

```
// ✅ THE VANILLA FIX
function SafeComponent() {
  // 1. Initialize state once (avoids repeating slow operations)
  const [query, setQuery] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('q');
    }
    return '';
  });

  // 2. Synchronize manually if the value can change
  useEffect(() => {
    const handleLocationChange = () => {
      setQuery(new URLSearchParams(window.location.search).get('q'));
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return <div>Results for {query}</div>;
}
```

Use code with caution.

Are you trying to debug an **existing component** that is acting glitchy or showing old data? Share the snippet, and I can tell you exactly which of these behaviors is breaking it.

- [link](https://stackoverflow.com/questions/73457139/react-hook-re-renders-component-only-when-another-parameter-gets-passed)\
  React hook re-renders component only when another parameter gets passed\
  1 Answer 1 Components in React are rendered based on the values and logic in the JSX. Since state is not used in your JSX, React d...\
  \
  Stack Overflow
- [link](https://react.dev/reference/rules/components-and-hooks-must-be-pure)\
  Components and Hooks must be pure – React\
  Changing values on the state variable doesn't cause the component to update, leaving your users with an outdated UI. Using the set...\
  \
  React
- [link](https://frontendbyte.com/how-to-use-react-context-api-usereducer-hooks/)\
  How To use React Context API with useReducer, useMemo Hooks\
  Congratulations, our tiny global application state is working as expected. In this example, I want to point out that changing the ...\
  \
  \
  frontendbyte.com

Show all

# install and use react-use custom hooks

To install and use **`react-use`**, a popular third-party library containing over 100 essential custom React hooks, follow the steps below. [link](https://www.npmjs.com/package/react-use)

### 1. Installation

Run one of the following commands in your project terminal, depending on your preferred package manager: [link](https://blog.logrocket.com/comparing-top-react-hooks-libraries/)

bash

```
# Using npm
npm install react-use

# Using yarn
yarn add react-use

# Using pnpm
pnpm add react-use
```

Use code with caution.

***

### 2. Common Usage Examples

You can import any hook directly from the root package. Below are three of the most commonly used hooks provided by [react-use on NPM](https://www.npmjs.com/package/react-use).

### Example A: Managing Booleans with `useToggle`

Instead of manually writing a toggle function with standard `useState`, `useToggle` handles it for you out of the box. [link](https://www.npmjs.com/package/react-use)

jsx

```
import React from 'react';
import { useToggle } from 'react-use';

export default function ToggleComponent() {
  // Pass the initial state (true or false)
  const [on, toggle] = useToggle(false);

  return (
    <div>
      <p>The light is: {on ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>Force ON</button>
      <button onClick={() => toggle(false)}>Force OFF</button>
    </div>
  );
}
```

Use code with caution.

### Example B: Tracking Window Dimensions with `useWindowSize`

The `useWindowSize` hook listens to browser resize events dynamically and triggers a re-render when the width or height changes. [link](https://github.com/streamich/react-use)

jsx

```
import React from 'react';
import { useWindowSize } from 'react-use';

export default function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h3>Browser Dimensions</h3>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
```

Use code with caution.

### Example C: Interacting with Local Storage using `useLocalStorage`

This hook acts like `useState`, but it automatically syncs and persists the value to the browser's `localStorage` array. [link](https://www.npmjs.com/package/react-use)

jsx

```
import React from 'react';
import { useLocalStorage } from 'react-use';

export default function StorageComponent() {
  // Syntax: useLocalStorage('key_name', 'default_value')
  const [name, setName] = useLocalStorage('user-name', 'Guest');

  return (
    <div>
      <p>Hello, {name}!</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type a new name..."
      />
    </div>
  );
}
```

Use code with caution.

***

### 3. Core Categories Available

The library is vast. If you want to look up more specific hooks in the [streamich/react-use GitHub repository](https://github.com/streamich/react-use), they are broken down by these categories: [link](https://github.com/streamich/react-use)

- **Sensors**: Track geolocation, mouse position, battery status, or network connection state.
- **UI**: Lock body scrolling, track element interactions, or manage full-screen viewing.
- **Animations**: Manage CSS animations or utilize custom intervals and timeouts.
- **Side Effects**: Handle async actions like fetching data, copy-to-clipboard, or site updates.
- **State**: Manage complex data arrays, numbers, lists, or custom object states. [link](https://www.npmjs.com/package/react-use)

Would you like to know **which hook** from a specific category would best solve a problem you are currently working on? Let me know **what functionality** you are trying to implement!

- [link](https://www.npmjs.com/package/react-use)\
  react-use - NPM\
  Jun 10, 2026 — useUpdateEffect — run an effect only on updates. useIsomorphicLayoutEffect — useLayoutEffect that that works on server. useDeepCom...\
  NPM
- [link](https://github.com/streamich/react-use)\
  streamich/react-use: React Hooks - GitHub\
  useIntersection — tracks an HTML element's intersection. useKey , useKeyPress , useKeyboardJs , and useKeyPressEvent — track keys.\
  GitHub
- [link](https://www.npmjs.com/package/react-use-cart)\
  react-use-cart - NPM\
  Jul 22, 2024 — CartProvider. You will need to wrap your application with the CartProvider component so that the useCart hook can access the cart ...\
  NPM

Show all

# 
