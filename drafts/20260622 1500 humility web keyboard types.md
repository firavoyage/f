<!-- the auto pair does not feel right. i guess you should Set<...> when i "set" -->

# . fix

p

```ts
bindings[shortcutid] = { shortcut }
```

c

```ts
bindings[shortcutid] = shortcut
```

well, i should type it.

p

```ts
let bindings = {}
```

c

```ts
let bindings: Record<number, string> = {}
```

ts is great!

# cleanup interval in react useeffect and vue

To clean up an interval and prevent memory leaks, you must explicitly clear it using **`clearInterval()`** when the component unmounts or before the effect re-runs. \[[1](https://stackoverflow.com/questions/76700653/is-cleanup-clearinterval-really-needed-in-this-useeffect-scenario), [2](https://www.youtube.com/watch?v=KnKXHcsde5A)]

Here is how to properly manage and clean up intervals in both **React (`useEffect`)** and **Vue (Composition API)**. \[[1](https://dev.to/edriso/useeffect-cleanup-function-1j8i), [2](https://www.geeksforgeeks.org/reactjs/how-to-use-setinterval-method-inside-react-components/)]

### React: `useEffect`

In React, you clean up an interval by **returning a function** from the [`useEffect` hook](https://react.dev/reference/react/useEffect). React will automatically execute this returned function when the component unmounts or right before the effect re-runs due to dependency changes. \[[1](https://medium.com/@m.rybczonek/react-for-vue-devs-4-from-watch-and-watcheffect-to-useeffect-bf01999e2561), [2](https://react.dev/reference/react/useEffect), [3](https://www.youtube.com/watch?v=KnKXHcsde5A)]

jsx

```
import { useState, useEffect } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Establish the interval
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // 2. Return the cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty array means this runs only on mount and unmount

  return <div>Count: {count}</div>;
}
```

Use code with caution.

### Vue: Composition API

In Vue 3, you have two primary ways to manage interval cleanup depending on how you initialize it.

### Option A: Using `onUnmounted` (Recommended for general timers) \[[1](https://coreui.io/answers/how-to-use-onunmounted-in-vue/), [2](https://www.linkedin.com/pulse/build-scale-avoid-memory-leaks-reactnative-malik-chohra-zkobe)]

If you start an interval inside the setup phase or `onMounted`, register the cleanup natively inside the `onUnmounted` lifecycle hook.

vue

```
<script setup>
import { ref, onUnmounted } from 'vue';

const count = ref(0);

// 1. Establish the interval
const intervalId = setInterval(() => {
  count.value++;
}, 1000);

// 2. Register the teardown
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div>Count: {{ count }}</div>
</template>
```

Use code with caution.

### Option B: Inside a `watch` or `watchEffect`

If your interval depends on reactive data and needs to restart when that data changes, pass the **`onCleanup`** callback provided natively inside Vue's `watchEffect`. \[[1](https://medium.com/@m.rybczonek/react-for-vue-devs-4-from-watch-and-watcheffect-to-useeffect-bf01999e2561)]

vue

```
<script setup>
import { ref, watchEffect } from 'vue';

const userId = ref(1);

watchEffect((onCleanup) => {
  // Starts a new interval every time userId changes
  const intervalId = setInterval(() => {
    console.log(`Fetching data for user: ${userId.value}`);
  }, 5000);

  // Vue runs this before re-running the effect AND on unmount
  onCleanup(() => {
    clearInterval(intervalId);
  });
});
</script>
```

Use code with caution.

### Key Functional Differences

| Feature \[[1](https://medium.com/@m.rybczonek/react-for-vue-devs-4-from-watch-and-watcheffect-to-useeffect-bf01999e2561), [2](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/), [3](https://stackoverflow.com/questions/78726953/why-does-setting-interval-in-react-useeffect-and-then-clearing-it-in-the-interva), [4](https://tech.visasq.com/react%5Fvs%5Fvue%5Fen), [5](https://stackoverflow.com/questions/72626555/when-cleanup-function-of-useeffect-triggering-clearinterval-function)] | React (`useEffect`)                                                                                                   | Vue (`watchEffect` / Hooks)                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Cleanup Method**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Returns a function from the effect block.                                                                             | Uses explicit `onUnmounted` hook or `onCleanup` parameter.                       |
| **Re-run Behavior**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Clears and restarts automatically if items in the dependency array change.                                            | Automatically clears via `onCleanup` if any evaluated reactive variable changes. |
| **Dev Environment**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | In `StrictMode`, React mounts, unmounts, and remounts components intentionally to force you to write proper cleanups. | Runs predictably exactly once upon mounting.                                     |

Are you looking to **conditionally pause/resume** this interval based on user interaction, or are you fetching **asynchronous API data** inside the timer loop?

- [link](https://medium.com/@m.rybczonek/react-for-vue-devs-4-from-watch-and-watcheffect-to-useeffect-bf01999e2561)\
  React for Vue Devs #4 — From watch and watchEffect to ...\
  Jun 17, 2026 — Cleanup: the function you return. ... You added an event listener, you opened a subscription, you started an interval — something ...\
  Medium·Mateusz Rybczonek
- [link](https://react.dev/reference/react/useEffect)\
  useEffect - React\
  You need to pass two arguments to useEffect : \* A setup function with setup code that connects to that system. It should return a ...\
  React
- [link](https://www.youtube.com/watch?v=KnKXHcsde5A)\
  React useEffect Cleanup: Prevent Memory Leaks Like a Pro!\
  Aug 21, 2025 — let's explore the use effect cleanup function and how it prevents memory leaks in React applications. cleanup is a function that r...\
  3:08\
  YouTube·CodeLucky

Show all

## You said: is there automatic way to setup cleanup whenever you call interval in an effect

Yes. <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">You can abstract this pattern into <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">custom hooks</strong> (React) or <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">composables</strong> (Vue)</mark>. This creates a reusable wrapper that automatically registers the `clearInterval` cleanup for you every time you start an interval.

### ⚛️ The React Way: `useIntervalEffect`

In React, you can build a custom hook that manages the lifecycle of the interval automatically. This avoids writing the boilerplate `return () => clearInterval(id)` every time. \[[1](https://www.dhiwise.com/post/understanding-the-useinterval-hook-in-react)]

jsx

```
import { useEffect } from 'react';

// 1. Create the abstraction hook
export function useIntervalEffect(callback, delay) {
  useEffect(() => {
    // Prevent setting interval if delay is null or false
    if (delay === null || delay === false) return;

    const id = setInterval(callback, delay);

    // Automatic cleanup
    return () => clearInterval(id);
  }, [callback, delay]); // Restarts automatically if callback or delay changes
}

// 2. How to use it in a component
function AutoTimer() {
  useIntervalEffect(() => {
    console.log('Tick!');
  }, 1000); // Just pass callback and time. Cleanup is handled!

  return <div>Timer Running</div>;
}
```

Use code with caution.

_Note: If your callback modifies state frequently, you may want to look up "Dan Abramov's `useInterval`" which uses a `useRef` to store the latest callback and avoid interval resets._ \[[1](https://medium.com/@a.gunjad11/create-a-custom-useinterval-react-hook-0ec02d7cc95b), [2](https://www.dhiwise.com/post/understanding-the-useinterval-hook-in-react)]

***

### 🟢 The Vue Way: `useIntervalComposables`

In Vue, the standard approach is to use a composable function. Vue's composition scope automatically ties lifecycle hooks (like `onUnmounted`) to whichever component calls the composable.

### Option 1: DIY Custom Composable

javascript

```
import { onUnmounted } from 'vue';

// 1. Define the composable wrapper
export function useInterval(callback, delay) {
  const id = setInterval(callback, delay);

  // Vue automatically attaches this to the current component's unmount lifecycle
  onUnmounted(() => {
    clearInterval(id);
  });

  return id;
}
```

Use code with caution.

### Option 2: Use VueUse (Industry Standard)

Instead of writing your own, you can use the production-ready utility library **VueUse**, which provides a highly optimized version called [`useIntervalFn`](https://vueuse.org/shared/useIntervalFn/). It handles automatic lifecycle cleanup and gives you manual controls.

vue

```
<script setup>
import { useIntervalFn } from '@vueuse/core';

// Automatically starts on mount and cleans up on unmount
const { pause, resume, isActive } = useIntervalFn(() => {
  console.log('Tick!');
}, 1000);
</script>

<template>
  <button @click="pause">Pause</button>
  <button @click="resume">Resume</button>
</template>
```

Use code with caution.

Would you like to see how to adjust these hooks to handle **changing dynamic delays** (like speeding up the timer over time) or incorporating **asynchronous fetches** safely?

- [link](https://www.dhiwise.com/post/understanding-the-useinterval-hook-in-react)\
  Boosting Performance in React Applications with useInterval\
  Jan 4, 2024 — useInterval is a custom hook that lets you easily use intervals in your React components . It encapsulates the logic for setting u...\
  \
  \
  DhiWise
- [link](https://medium.com/@a.gunjad11/create-a-custom-useinterval-react-hook-0ec02d7cc95b)\
  Create a custom useInterval React Hook | by Anuj Gunjad\
  Feb 2, 2025 — Create a custom useInterval React Hook const savedCallback = useRef<() => void>(); : The useRef hook is used here to hold the most...\
  \
  \
  Medium
- [link](https://www.dhiwise.com/post/understanding-the-useinterval-hook-in-react)\
  Boosting Performance in React Applications with useInterval\
  Jan 4, 2024 — One of the key advantages of useInterval is its ability to maintain the latest callback function without the need to clean up and ...\
  \
  \
  DhiWise

## You said: lib in react

The most popular, highly stable utility libraries in React that provide a drop-in `useInterval` hook with **automatic lifecycle cleanup** include: \[[1](https://www.brilworks.com/blog/react-state-management-libraries/)]

### 1. `usehooks-ts` \[[1](https://reactuse.com/blog/)]

A widely used TypeScript-first library. Its [usehooks-ts `useInterval`](https://usehooks-ts.com/react-hook/use-interval) hook implements the standard declarative approach. Passing a `null` delay completely pauses the interval. \[[1](https://overreacted.io/making-setinterval-declarative-with-react-hooks/), [2](https://usehooks-ts.com/react-hook/use-interval), [3](https://medium.com/@BartWaardenburg/creating-a-react-component-library-using-storybook-e7c3fd105fd5)]

- **Installation:** `npm i usehooks-ts`
- **Usage:**

tsx

```
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

function Timer() {
  const [count, setCount] = useState(0);

  // Automatically sets up and cleans up on unmount
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>Count: {count}</div>;
}
```

Use code with caution.

### 2. `@uidotdev/usehooks` \[[1](https://reactuse.com/blog/)]

Another excellent general-purpose hooks library. The [useHooks `useInterval`](https://usehooks.com/useinterval) utility gives you immediate automatic cleanup but also returns a functional handle allowing you to manually break or clear the execution on demand. \[[1](https://usehooks.com/useinterval), [2](https://scalac.io/blog/frontend-app-building-dilemma-custom-solution-or-using-a-library/), [3](https://jonas.io/resources/react/knowledge)]

- **Installation:** `npm i @uidotdev/usehooks`
- **Usage:**

jsx

```
import { useInterval } from "@uidotdev/usehooks";

function AlertComponent() {
  // Returns a method to manually force clear early if needed
  const clear = useInterval(() => {
    console.log("Ping!");
  }, 5000);

  return <button onClick={clear}>Stop Logs</button>;
}
```

Use code with caution.

### 3. `@mantine/hooks` \[[1](https://blog.logrocket.com/create-responsive-navbar-react-css/), [2](https://www.reddit.com/r/reactjs/comments/1dk4dsf/state%5Fmanagement%5Fin%5Freact/)]

If you use the Mantine ecosystem, its [Mantine `useInterval`](https://mantine.dev/hooks/use-interval/) hook offers extensive control options over your loops. Rather than activating immediately, it returns explicit `start`, `stop`, and `toggle` mechanisms. \[[1](https://mantine.dev/hooks/use-interval/), [2](https://mantine.dev/hooks/use-interval/)]

- **Installation:** `npm i @mantine/hooks`
- **Usage:**

tsx

```
import { useInterval } from '@mantine/hooks';

function Stopwatch() {
  const interval = useInterval(() => console.log('Tick'), 1000, { autoInvoke: true });

  // Handled automatically on unmount, but also interactive:
  return <button onClick={interval.toggle}>{interval.active ? 'Pause' : 'Start'}</button>;
}
```

Use code with caution.

### Why use a library here instead of a basic wrapper?

All three libraries handle the **stale closure problem** under the hood by internally implementing a mutable React `useRef` pointing to your latest callback function. This means your intervals never drop state or stutter when your component triggers frequent updates. \[[1](https://www.reddit.com/r/javascript/comments/jfi42y/polling%5Fin%5Freact%5Fusing%5Fthe%5Fuseinterval%5Fcustom%5Fhook/), [2](https://github.com/streamich/react-use/blob/master/src/useInterval.ts)]

Would you like help deciding **which package fits best** into your current stack setup, or would you like to see how to implement that safe `useRef` pattern manually in your code?

- [link](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)\
  Making setInterval Declarative with React Hooks\
  Feb 4, 2019 — 🥁🥁🥁 function Counter() { let \[count, setCount] = useState(0); let \[delay, setDelay] = useState(1000); useInterval(() => { // Yo...\
  Overreacted.io
- [link](https://www.reddit.com/r/javascript/comments/jfi42y/polling%5Fin%5Freact%5Fusing%5Fthe%5Fuseinterval%5Fcustom%5Fhook/)\
  Polling in React using the useInterval Custom Hook - Reddit\
  Oct 21, 2020 — ... or \[insert other side effect library here] to handle the data fetching. ShellbertShellbach. •. 6y ago. • Edited 6y ago. The pe...\
  Reddit·r/javascript
- [link](https://mantine.dev/hooks/use-interval/)\
  use-interval - Mantine\
  Arguments: fn – function that is called at each interval tick; interval – amount of milliseconds between each tick. Return object:\
  Mantine

Show all

# dom event in typescript

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">TypeScript natively provides built-in type definitions for DOM events</strong> through its standard library</mark> (`lib.dom.d.ts`). This ensures complete type safety and provides auto-completion for standard browser interactions. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html), [2](https://www.youtube.com/watch?v=ZQ-EUSADLG0\&t=2), [3](https://techielearn.com/tutorials/typescript/T925/A3789), [4](https://cgjennings.ca/articles/typescript-events/)]

### Common Built-In Event Types

Instead of typing every event as a generic `Event`, you should use the specific sub-type corresponding to the action: \[[1](https://developer.mozilla.org/en-US/docs/Web/API/Event), [2](https://codefinity.com/courses/v2/8a5ca2d9-7dec-4ae4-988a-d80ab24a269d/f313fede-742d-46be-8230-427a5ad89a0f/561b8d2f-edec-4a6b-841f-cf5f66a12bc1)]

- `MouseEvent`: Triggers on user interactions like `click`, `dblclick`, `mouseover`, or `contextmenu`.
- `KeyboardEvent`: Fired during keyboard input, such as `keydown`, `keyup`, or `keypress`.
- `InputEvent`: Captures value changes on form controls like , , or .
- `FocusEvent`: Occurs when elements gain or lose focus (`focus`, `blur`).
- `SubmitEvent`: Fires when a element is submitted. \[[1](https://www.youtube.com/watch?v=hcuKd-Q%5FtP8\&t=2), [2](https://stackoverflow.com/questions/38660518/adding-window-event-handler-to-typescript), [3](https://data-flair.training/blogs/javascript-event-types/), [4](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Events), [5](https://codefinity.com/courses/v2/8a5ca2d9-7dec-4ae4-988a-d80ab24a269d/f313fede-742d-46be-8230-427a5ad89a0f/561b8d2f-edec-4a6b-841f-cf5f66a12bc1)]

***

### Implementation Patterns

### 1. Inline Event Handlers (Automatic Inference) \[[1](https://blog.openreplay.com/tsx-rise-typed-frontend/), [2](https://www.telerik.com/blogs/using-typescript-react)]

When passing an anonymous function directly into `addEventListener`, **TypeScript automatically infers the event type**. You do not need to explicitly declare any types here. \[[1](https://cgjennings.ca/articles/typescript-events/), [2](https://www.youtube.com/watch?v=Q-KddXKfOJc), [3](https://javascript.plainenglish.io/react-typescript-handling-events-ab13d9778411)]

typescript

```
const button = document.querySelector('button');

// TypeScript automatically knows 'e' is a MouseEvent
button?.addEventListener('click', (e) => {
  console.log(e.clientX);
});
```

Use code with caution.

### 2. Extracted Event Handlers (Explicit Typing)

If you define the callback function separately, **you must explicitly type the event parameter** so TypeScript knows which properties are available. \[[1](https://react.dev/learn/typescript), [2](https://codefinity.com/courses/v2/8a5ca2d9-7dec-4ae4-988a-d80ab24a269d/f313fede-742d-46be-8230-427a5ad89a0f/561b8d2f-edec-4a6b-841f-cf5f66a12bc1)]

typescript

```
// Explicitly declare the type as KeyboardEvent
function handleKeyDown(event: KeyboardEvent): void {
  console.log(event.key);
}

const inputElement = document.getElementById('search-box');
inputElement?.addEventListener('keydown', handleKeyDown);
```

Use code with caution.

### 3. Handling `event.target` (Type Assertions)

By default, TypeScript types `event.target` safely as a generic `EventTarget` rather than a specific HTML element. To safely read element-specific attributes (like `.value` from an input), **you must cast the target using `as`**. \[[1](https://www.youtube.com/watch?v=hcuKd-Q%5FtP8\&t=2), [2](https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript), [3](https://stackoverflow.com/questions/49693981/how-to-use-eventtarget-in-typescript)]

typescript

```
function handleInputChange(event: Event): void {
  // Cast EventTarget to the specific HTML wrapper
  const target = event.target as HTMLInputElement;

  console.log(target.value);
}
```

Use code with caution.

***

### Summary Checklist for Frameworks

If you are working inside a frontend library, be aware that events are handled differently than vanilla DOM environments:

- **React**: Uses synthetic event wrappers. You must use types provided by the library, such as or .
- **Vanilla DOM**: Rely strictly on global definitions like `MouseEvent` and cast target elements to their respective type schemas (e.g., `HTMLButtonElement`). \[[1](https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript), [2](https://stevekinney.com/courses/react-typescript/typing-dom-and-react-events), [3](https://stackoverflow.com/questions/48879342/what-s-the-difference-between-react-event-and-dom-event), [4](https://www.reddit.com/r/reactjs/comments/100geoa/in%5Ftypescript%5Freact%5Fhow%5Fam%5Fi%5Fsupposed%5Fto%5Fknow%5Fthe/), [5](https://www.totaltypescript.com/event-types-in-react-and-typescript), [6](https://stackoverflow.com/questions/49226309/what-are-the-proper-typescript-types-for-addeventlistener-mousemove-and-its-even)]

If you would like, I can show you how to set up a **custom event payload** using `CustomEvent`, or provide a full **React-specific event mapping example**. Let me know what you want to explore next! \[[1](https://stackoverflow.com/questions/43001679/how-do-you-create-custom-event-in-typescript), [2](https://techielearn.com/tutorials/typescript/T925/A3789), [3](https://stevekinney.com/courses/react-typescript/typing-dom-and-react-events), [4](https://www.totaltypescript.com/event-types-in-react-and-typescript), [5](https://blog.openreplay.com/javascript-custom-events/)]

- [link](https://www.youtube.com/watch?v=hcuKd-Q%5FtP8\&t=2)\
  TypeScript Tutorial #11 - The DOM & Type Casting\
  May 18, 2020 — all right then gang. so just like in regular JavaScript. we can use TypeScript to interact with the DOM to query elements update o...\
  10m\
  YouTube·Net Ninja
- [link](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)\
  Documentation - DOM Manipulation - TypeScript\
  Jun 3, 2026 — An exploration into the HTMLElement type. In the 20+ years since its standardization, JavaScript has come a very long way. While i...\
  TypeScript
- [link](https://developer.mozilla.org/en-US/docs/Web/API/Event)\
  Event - Web APIs | MDN\
  Feb 15, 2026 — Event itself contains the properties and methods which are common to all events. Many DOM elements can be set up to accept (or "li...\
  MDN Web Docs

Show all

# function type in ts

In TypeScript, you can define and enforce types for functions in several different ways, ranging from simple inline annotations to reusable type aliases. \[[1](https://www.typescriptlang.org/docs/handbook/2/functions.html), [2](https://dmitripavlutin.com/typescript-function-type/), [3](https://www.typescriptlang.org/docs/handbook/functions.html), [4](https://graphite.com/guides/typescript-function-types), [5](https://devchallenges.io/learn/3-javascript/typescript-generics)]

### 1. Basic Inline Function Types

You can type a function directly in its declaration by annotating the **parameters** and the **return type**. \[[1](https://www.w3schools.com/typescript/typescript%5Ffunctions.php)]

typescript

```
function add(x: number, y: number): number {
  return x + y;
}

// Arrow function variant
const multiply = (x: number, y: number): number => x * y;
```

Use code with caution.

### 2. Function Type Expressions (Type Aliases)

If you are passing functions as arguments (callbacks) or storing them in variables, you can create a reusable **type alias** using arrow-like syntax `(parameters) => returnType`. \[[1](https://stackoverflow.com/questions/29689966/how-to-define-type-for-a-function-callback-as-any-function-type-not-universal), [2](https://www.typescriptlang.org/docs/handbook/2/functions.html)]

typescript

```
// Define the function structure
type MathOperation = (a: number, b: number) => number;

// Assign it to a variable
const divide: MathOperation = (a, b) => a / b;
```

Use code with caution.

_Note: Parameter names in the type definition (like `a` and `b`) are mandatory placeholders but do not have to match the names used in the actual implementation._ \[[1](https://www.typescriptlang.org/fr/docs/handbook/2/functions.html), [2](https://www.cynoteck.com/blog-post/interfaces-in-typescript), [3](https://www.wscubetech.com/resources/cpp/functions)]

### 3. Interface Call Signatures

For more complex scenarios, you can define a function type using an **interface**. This is especially useful if the function also has custom properties attached to it (like a hybrid object/function). \[[1](https://www.convex.dev/typescript/core-concepts/functions-methods/typescript-function-type), [2](https://www.youtube.com/watch?v=43X6CpxQUro\&t=1), [3](https://medium.com/@itsayu/understanding-typescript-interfaces-your-blueprint-for-better-code-18c7b4cc7953), [4](https://blog.logrocket.com/understanding-using-interfaces-typescript/)]

typescript

```
interface StringValidator {
  (input: string): boolean; // Notice the colon ':' instead of the arrow '=>'
}

const isEmail: StringValidator = (input) => input.includes("@");
```

Use code with caution.

### 4. Optional, Default, and Rest Parameters \[[1](https://www.youtube.com/watch?v=s7kyOtFF120\&t=4), [2](https://help.gooddata.com/cloudconnect/manual/string-functions-ctl1), [3](https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1)]

TypeScript offers flexible rules for handling dynamic function arguments. \[[1](https://www.youtube.com/watch?v=s7kyOtFF120\&t=4), [2](https://www.youtube.com/watch?v=m8O-Bo3I8pc\&t=1)]

typescript

```
// Optional parameter (greet may be undefined)
type GreetFn = (name: string, title?: string) => string;

// Default parameter (no special type syntax needed, inferred from value)
function logMessage(message: string, userId = "Guest"): void {
  console.log(`${userId}: ${message}`);
}

// Rest parameters (accepts any number of arguments as an array)
type SumAllFn = (...numbers: number[]) => number;
```

Use code with caution.

### 5. Special Return Types

- **`void`**: Used when a function deliberately returns nothing.
- **`never`**: Used when a function never completes execution (e.g., it throws an error or runs an infinite loop). \[[1](https://www.youtube.com/watch?v=s7kyOtFF120\&t=4), [2](https://www.w3schools.com/typescript/typescript%5Ffunctions.php)]

### ⚠️ Best Practice Warning: Avoid uppercase `Function`

Never use the generic global `Function` class as a type. It accepts any function-like value but offers **zero type safety**. \[[1](https://stackoverflow.com/questions/29689966/how-to-define-type-for-a-function-callback-as-any-function-type-not-universal), [2](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html), [3](https://www.totaltypescript.com/dont-use-function-keyword-in-typescript)]

typescript

```
// ❌ BAD: No parameter or return type checking
let badCallback: Function;

//  GOOD: Explicitly safely typed
let goodCallback: (args: string[]) => void;
```

Use code with caution.

To help you choose the best pattern, are you typing a **callback function**, a **component prop**, or trying to implement **function overloading**?

- [link](https://stackoverflow.com/questions/29689966/how-to-define-type-for-a-function-callback-as-any-function-type-not-universal)\
  typescript - How to define type for a function callback (as any ...\
  Apr 17, 2015 — The Function type accepts any function-like value. It provides no type safety when calling the function, which can be a common sou...\
  Stack Overflow
- [link](https://www.typescriptlang.org/docs/handbook/2/functions.html)\
  Documentation - More on Functions - TypeScript\
  May 20, 2026 — Functions are the basic building block of any application, whether they're local functions, imported from another module, or metho...\
  TypeScript
- [link](https://dmitripavlutin.com/typescript-function-type/)\
  TypeScript Function Types: A Beginner's Guide - Dmitri Pavlutin\
  Mar 27, 2023 — Posted March 27, 2023. typescriptfunction. 5 Comments. Functions are the small pieces of logic that together form applications. If...\
  dmitripavlutin.com

Show all

## You said: callback function type

Typing a **callback function** in TypeScript is best done using a <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Function Type Expression</strong> inside your main function's parameter list</mark>. \[[1](https://ios-course.cornellappdev.com/resources/textbook/networking-i/callbacks), [2](https://stackoverflow.com/questions/49611827/how-call-callback-in-typescript)]

### 1. Inline Callback Typing

Use the arrow syntax `(parameter: type) => returnType` directly in the function signature. Use `void` if the main function ignores the callback's return value. \[[1](https://www.convex.dev/typescript/core-concepts/functions-methods/typescript-arrow-function), [2](https://docs.yumaworks.com/en/latest/dev/transaction-callbacks.html), [3](https://www.angulartraining.com/daily-newsletter/understanding-angular-typescript-types/?srsltid=AfmBOoowaYufHqlr05ExWYOSf8N9COOX46374AryNw-YFnNBIBHZz8yb), [4](https://docs.progress.com/bundle/abl-reference/page/SET-CALLBACK-method.html)]

typescript

```
function processNumbers(
  nums: number[],
  callback: (num: number, index: number) => void
): void {
  nums.forEach((num, index) => callback(num, index));
}

// Usage: TypeScript automatically infers that 'n' is a number
processNumbers([1, 2, 3], (n) => console.log(n * 2));
```

Use code with caution.

### 2. Reusable Type Alias (Cleaner Approach)

If your callback structure is complex or reused in multiple places, extract it into a named `type`. \[[1](https://javascript.plainenglish.io/debugging-javascript-code-in-asynchronous-callbacks-and-nested-functions-53fb4a5271be)]

typescript

```
// Define the callback structure
type ClickHandler = (event: string, targetId: number) => void;

// Use it in your function or component props
function setupButton(onClick: ClickHandler) {
  onClick("click", 42);
}
```

Use code with caution.

### 3. Generic Callbacks (For Flexible Data)

If your callback handles different types of data depending on the situation, use a **Generic Type** . \[[1](https://www.reddit.com/r/learnpython/comments/106k4ay/proper%5Fway%5Fof%5Ftype%5Fhinting%5Fa%5Fmethod%5Ffor/)]

typescript

```
// 'T' acts as a placeholder for any type
function fetchData<T>(url: string, callback: (data: T) => void): void {
  // Fetch logic here...
  // callback(result);
}

// Usage with a specific type (e.g., User object)
interface User { name: string }
fetchData<User>("/api/user", (user) => {
  console.log(user.name); // Safely typed as User
});
```

Use code with caution.

### 4. Optional Callbacks

If the callback is not mandatory, add a question mark `?` after its name. Always check if it exists before calling it.

typescript

```
function completeTask(id: number, onComplete?: () => void) {
  console.log(`Task ${id} finished`);

  // Safe execution
  onComplete?.();
}
```

Use code with caution.

Would you like to see how to implement this for a specific framework like **React component props**, or do you need help handling **asynchronous async/await** callbacks?

- [link](https://ios-course.cornellappdev.com/resources/textbook/networking-i/callbacks)\
  Callbacks\
  Apr 11, 2024 — So this completion parameter needs to have a type, as with any parameter inside of a function header. Well, we want this parameter...\
  \
  \
  Cornell AppDev
- [link](https://stackoverflow.com/questions/49611827/how-call-callback-in-typescript)\
  typescript2.0 - How call callback in Typescript?\
  Apr 2, 2018 — How call callback in Typescript? You say you declare the function, where ? You need to include more of your code if you want a goo...\
  \
  Stack Overflow
- [link](https://www.convex.dev/typescript/core-concepts/functions-methods/typescript-arrow-function)\
  Arrow | TypeScript Guide by Convex\
  Final Thoughts on TypeScript Arrow Functions Arrow functions give you cleaner syntax and automatic this binding, which makes them ...\
  \
  \
  Convex

Show all

## You said: callback fn can either take it or not, but i will always pass one param

To handle a callback that can either accept your parameter or ignore it entirely, you must make that parameter **optional** inside the callback's type definition by using a question mark (`?`).

Here is exactly how to structure it.

### The Solution

typescript

```
// The '?' means the callback implementation can ignore this argument
type MyCallback = (data?: string) => void;

function execute(callback: MyCallback) {
  const value = "Hello World";

  // You ALWAYS pass the parameter here safely
  callback(value);
}
```

Use code with caution.

### Why this works perfectly

TypeScript allows a function implementation to have _fewer_ arguments than its type definition specifies. Because the type marks it as optional (`data?`), both of these usages are now 100% valid:

typescript

```
// Scenario A: The callback TAKES the parameter
execute((data) => {
  console.log(data); // Works! 'data' is passed
});

// Scenario B: The callback IGNORES the parameter
execute(() => {
  console.log("Done!"); // Also works perfectly!
});
```

Use code with caution.

Are you looking to make the callback function **itself** optional to call, or are you good to go with typing its **parameters**?

## You said: when i define like this, i could not simply take it in the callback as ts thinks it might be undefined

You are completely right. By using `data?: string`, TypeScript forces you to check for `undefined` inside the callback because the type says the parameter might not be passed. \[[1](https://timmousk.com/blog/typescript-check-for-undefined/), [2](https://stackoverflow.com/questions/77924984/type-void-is-not-assignable-to-type-undefined-why-is-my-useref-und)]

To fix this so you can use the variable directly **without** `undefined` checks, you must remove the `?` from the callback's type definition. \[[1](https://thoughtspile.github.io/2023/01/31/typescript-safe-narrow/)]

### The Solution: Keep the parameter required in the type

In TypeScript, **a callback is always allowed to ignore arguments** that the main function sends. You do not need to mark it optional in the type definition to allow people to ignore it.

typescript

```
// 1. Define it as REQUIRED here. This guarantees it is never undefined.
type MyCallback = (data: string) => void;

function execute(callback: MyCallback) {
  // 2. You always pass it safely.
  callback("Hello World");
}
```

Use code with caution.

### Why this fixes your problem

Now, both scenarios work perfectly without any `undefined` errors:

typescript

```
// Scenario A: You want to use the data.
// TypeScript knows 'data' is definitely a string. No 'undefined' error!
execute((data) => {
  console.log(data.toUpperCase());
});

// Scenario B: You want to ignore the data.
// This is 100% legal in TypeScript. Functions can always ignore incoming arguments.
execute(() => {
  console.log("Done!");
});
```

Use code with caution.

### Summary Rule

- Define the callback type based on **what the main function will send** (a guaranteed string).
- Do not define it based on **what the user might choose to use**.

Does this remove the error in your code, or are you dealing with a **destructured object** as your parameter?

- [link](https://timmousk.com/blog/typescript-check-for-undefined/)\
  How To Check For Undefined In TypeScript? – Tim Mouskhelichvili\
  Jul 12, 2022 — How to check for undefined before calling a function? In TypeScript, you can use the optional chaining operator to check if an obj...\
  \
  \
  timmousk.com
- [link](https://stackoverflow.com/questions/77924984/type-void-is-not-assignable-to-type-undefined-why-is-my-useref-und)\
  "Type '() => void' is not assignable to type 'undefined'" - Why is my useRef undefined?\
  Feb 2, 2024 — "Type '() => void' is not assignable to type 'undefined'" - Why is my useRef undefined? 1 The return type of a useRef call is infe...\
  \
  Stack Overflow
- [link](https://thoughtspile.github.io/2023/01/31/typescript-safe-narrow/)\
  The complete guide to safe type narrowing in TypeScript\
  Jan 31, 2023 — No matter what you expect the URL to be, the user might manually put anything into the ? tab parameter, or remove it altogether, p...\
  \
  \
  GitHub

## You said: how does ts regulate arguments

TypeScript regulates function arguments using a core design principle called **Assignability based on behavior** (specifically, _subtyping_ or _contravariant parameters_). \[[1](https://codefinity.com/courses/v2/f901939e-348e-4d8f-a926-ed62433e6c67/1d8ec7c9-d554-4348-af28-d35083cba200/7a53f00a-8fbf-4a89-b5f6-f114407f365c), [2](https://www.reddit.com/r/typescript/comments/muyl55/understanding%5Fargs%5Fnever%5Fin%5Ftypescript%5Fhandbook/), [3](https://typing.python.org/en/latest/spec/concepts.html)]

Here is exactly how TypeScript enforces argument counts and types behind the scenes:

### 1. The "Fewer Arguments is OK" Rule \[[1](https://basarat.gitbook.io/typescript/type-system/type-compatibility)]

TypeScript **always** allows a function to accept _fewer_ arguments than the caller provides. \[[1](https://www.typescriptlang.org/docs/handbook/2/functions.html)]

typescript

```
// Expected: A function that takes TWO numbers
let process: (a: number, b: number) => void;

// Allowed: A function that takes ZERO numbers
process = () => console.log("Done"); // Valid!
```

Use code with caution.

- **Why?** JavaScript routinely passes extra arguments that get ignored (like `Array.prototype.forEach` passing `value, index, array`). If TypeScript blocked this, standard JavaScript array methods wouldn't work. \[[1](https://www.typescriptlang.org/docs/handbook/2/functions.html)]

### 2. The "Extra Arguments are Blocked" Rule

TypeScript **never** allows a function to accept _more_ arguments than the caller provides.

typescript

```
// Expected: A function that takes ONE number
let process: (a: number) => void;

// Error: Type expects 1 argument, but target requires 2.
process = (a: number, b: number) => console.log(a, b);
```

Use code with caution.

- **Why?** The caller is only going to pass one argument. If the function expects two, the second argument (`b`) would crash or be `undefined` inside the function execution. This creates a type-safety runtime bug.

### 3. Structural Compatibility (Bivariance & Contravariance)

TypeScript checks the types of the arguments using **structural typing** instead of nominal (name-based) typing: \[[1](https://medium.com/@AlexanderObregon/why-typescript-structural-typing-works-026de9710737), [2](https://blog.suniltechtips.com/structural-type-system-in-typescript-6c3f4d6f0e8d)]

- **Object Arguments:** A function expecting a small object can accept a function that expects a larger object (as long as the required properties match).
- **Strict Function Types:** Under the standard `strictFunctionTypes: true` compiler setting, parameter types are strictly checked to ensure they can safely handle what is being sent. \[[1](https://learntypescript.dev/11/l6-strictness/), [2](https://medium.com/@bill%5F62246/2025-angular-strict-cheatsheet-2c1a5cc1fa53), [3](https://kinsta.com/blog/what-is-typescript/)]

### Summary Chart

| Caller Sends \[[1](https://www.typescriptlang.org/docs/handbook/2/functions.html), [2](https://leanylabs.com/blog/typescript-vs-javascript/)] | Function Wants  | Status         | Why?                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------- | ------------------------------------------------------- |
| **2 Arguments**                                                                                                                               | **1 Argument**  | **Allowed** ✅ | The extra argument is simply ignored safely.            |
| **1 Argument**                                                                                                                                | **2 Arguments** | **Error** ❌   | The second argument would be `undefined`, causing bugs. |
| **1 Argument**                                                                                                                                | **1 Argument**  | **Allowed** ✅ | Perfect structural match.                               |

Would you like to see how this rule changes when dealing with **rest parameters (`...args`)** or **optional flags (`?`)**?

- [link](https://codefinity.com/courses/v2/f901939e-348e-4d8f-a926-ed62433e6c67/1d8ec7c9-d554-4348-af28-d35083cba200/7a53f00a-8fbf-4a89-b5f6-f114407f365c)\
  Learn Typing Functions with Parameters and Returns | Transitioning from JavaScript to TypeScript\
  Adding type annotations to your functions is a key step when moving from JavaScript to TypeScript. In JavaScript, functions accept...\
  \
  \
  Codefinity
- [link](https://www.reddit.com/r/typescript/comments/muyl55/understanding%5Fargs%5Fnever%5Fin%5Ftypescript%5Fhandbook/)\
  Understanding \`(...args: never\[]) => ...\` in TypeScript Handbook : r/typescript\
  Apr 21, 2021 — TypeScript's main notion of supertype/subtype is assignability. TypeScript also has an elaborate structural type system with inter...\
  \
  Reddit
- [link](https://typing.python.org/en/latest/spec/concepts.html)\
  Type system concepts — typing documentation\
  The assignable-to (or consistent subtyping) relation ¶ Given the materialization relation and the subtyping relation, we can defin...\
  \
  Python.org

Show all

# all browser types in ts

[TypeScript](https://www.typescriptlang.org/) includes built-in type definitions for web browsers through its **Document Object Model (DOM) type definitions**. These definitions represent every global object, HTML element, and browser event available in a standard client-side environment. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html), [2](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)]

To use these types, your `tsconfig.json` must include `"DOM"` in the `lib` array. Below is a categorized breakdown of the essential browser types provided by TypeScript: \[[1](https://npmjs.com/package/@types/web), [2](https://www.typescriptlang.org/tsconfig/lib.html)]

### Global Window & Document API

These types represent the root execution context of the browser environment. \[[1](https://www.typescriptlang.org/tsconfig/lib.html), [2](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)]

- `Window`: The global execution context, giving access to properties like `window.localStorage` and `window.location`.
- `Document`: The web page loaded in the browser, used for querying elements (`document.getElementById`).
- `Navigator`: State and identity information about the browser agent (`navigator.userAgent`).
- `History`: The browser session history web API.
- `Location`: The current URL or location of the object it is linked to. \[[1](https://medium.com/design-bootcamp/understanding-types-globals-interfaces-constants-and-props-in-typescript-b91490a024a8), [2](https://html.spec.whatwg.org/multipage/system-state.html), [3](https://shravanmeena.medium.com/mastering-the-browser-object-model-essential-objects-and-methods-for-web-development-47cb729ae6dc), [4](https://blog.carlosrojas.dev/exploring-the-browser-object-model-bom-b7f158831738)]

### HTML Elements (DOM Nodes)

TypeScript matches every HTML tag to a specific element type. They all inherit from a generic base element. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)]

- `Element`: The most general base class from which all element objects in a `Document` inherit.
- `HTMLElement`: The base type for all standard HTML elements.
- `HTMLInputElement`: Specifically used for fields, providing type-safe access to `.value` or `.checked`.
- `HTMLButtonElement`: Specifically for elements.
- `HTMLDivElement`: Specifically for container tags.
- `HTMLCanvasElement`: Specifically for elements, allowing access to the rendering context (`.getContext('2d')`).
- `HTMLImageElement`: Specifically for tags, featuring properties like `.src` and `.alt`. \[[1](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html), [2](https://joyofcode.xyz/typescript-fundamentals), [3](https://betterstack.com/community/guides/scaling-nodejs/type-assertions-casting/), [4](https://dev.to/wisdombits/working-with-html-elements-in-typescript-a-complete-guide13-1b3k), [5](https://www.telerik.com/blogs/getting-started-typescript-react)]

### Browser Events

These types ensure type safety when dealing with user interactions and event listeners. \[[1](https://graphite.com/guides/typescript-typing)]

- `Event`: A generic event that takes place in the DOM.
- `UIEvent`: Simple user interface events.
- `MouseEvent`: Triggered by physical pointing devices (e.g., `click`, `dblclick`, `mouseover`).
- `KeyboardEvent`: Describes a user interaction with the keyboard (`keydown`, `keyup`).
- `TouchEvent`: Sent when the state of touches on a touch-sensitive surface changes.
- `SubmitEvent`: Fired when a is submitted.
- `DragEvent`: Represents a drag-and-drop interaction. \[[1](https://www.reddit.com/r/typescript/comments/aaw6tp/do%5Fyou%5Fever%5Fthink%5Fbrowsers%5Fwill%5Fdirectly%5Fsupport/), [2](https://www.reddit.com/r/javascript/comments/1ozcnl3/typescript%5Fhas%5Fnative%5Fsupport%5Fin%5Fall%5Fmajor/), [3](https://www.w3schools.com/jsref/jsref%5Fevent.asp)]

### Modern Web & Network APIs

These represent async network actions and data streaming APIs built directly into modern browsers.

- `Fetch`: Not a type itself, but returns a .
- `Request`: Represents a resource request used in the Fetch API.
- `Response`: Represents the response to a network request.
- `Headers`: Represents HTTP request/response headers.
- `WebSocket`: Manages a persistent, two-way connection to a server.
- `Worker`: Represents a background task that can be easily created and can script execution in parallel. \[[1](https://www.reddit.com/r/typescript/comments/aaw6tp/do%5Fyou%5Fever%5Fthink%5Fbrowsers%5Fwill%5Fdirectly%5Fsupport/), [2](https://www.reddit.com/r/javascript/comments/1ozcnl3/typescript%5Fhas%5Fnative%5Fsupport%5Fin%5Fall%5Fmajor/)]

### Storage & State APIs

Types utilized to interact with browser-side databases and data persistence layers.

- `Storage`: Used to type `localStorage` and `sessionStorage`.
- `IDBDatabase`: Represents a connection to an IndexedDB database.
- `CookieStore`: Modern asynchronous API for managing browser cookies. \[[1](https://dev.to/muszynov/typescript-wrapper-class-for-browser-storage-55pd), [2](https://www.reddit.com/r/typescript/comments/aaw6tp/do%5Fyou%5Fever%5Fthink%5Fbrowsers%5Fwill%5Fdirectly%5Fsupport/), [3](https://privacytests.org/), [4](https://dev.to/arunish/all-methods-of-persistent-browser-storage-5ae7)]

### Summary Example

Here is how you would use these browser types in a regular TypeScript application:

typescript

```
// Explicitly typing a button element
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

// Typing a browser event handler
submitBtn.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();

  // Accessing a specific input value safely
  const inputEl = document.querySelector("#username") as HTMLInputElement;
  const username: string = inputEl.value;

  console.log(`Submitting form for ${username} at ${window.location.href}`);
});
```

Use code with caution.

If you are looking for specific types, let me know **which browser API** (like Web Audio, WebRTC, or Service Workers) you are working with, or if you need help configuring your **tsconfig.json file** to read these types correctly.

- [link](https://npmjs.com/package/@types/web)\
  types/web - NPM\
  May 2, 2026 — @types/web - Types for the DOM and most web-related APIs. This module contains the DOM types for the majority of the web APIs used...\
  NPM
- [link](https://www.typescriptlang.org/tsconfig/lib.html)\
  TypeScript: TSConfig Option: lib\
  High Level libraries. ... Additional APIs available in ES2015 (also known as ES6) - array. find , Promise , Proxy , Symbol , Map ,\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)\
  DOM Manipulation - TypeScript: Documentation\
  Jun 3, 2026 — An exploration into the HTMLElement type In the 20+ years since its standardization, JavaScript has come a very long way. While in...\
  TypeScript

Show all

# what about having some custom hooks wo use prefix

If you omit the **`use` prefix** from a function containing React Hooks, the code will technically still compile and run, but it creates **severe development risks and breaks linting tools**. \[[1](https://stackoverflow.com/questions/72851622/why-do-have-to-use-use-before-custom-hook-in-react), [2](https://stackoverflow.com/questions/66151248/do-react-hooks-really-have-to-start-with-use)]

Here is exactly what happens, why the prefix is mandatory in practice, and when you should avoid it. \[[1](https://www.robinwieruch.de/react-custom-hook/)]

### The Immediate Consequences

- **Linter Blindness**: The official ESLint plugin (`eslint-plugin-react-hooks`) relies entirely on the `use` prefix to identify Hooks. Without it, the linter will not analyze your function.
- **Undetected Rule Violations**: If your un-prefixed function breaks the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) (e.g., calling a Hook inside an `if` statement or loop), React will not catch it during static analysis.
- **Silent Runtime Bugs**: Breaking the rules without a linter warning leads to unpredictable bugs, mismatched state arrays, and rendering crashes that are incredibly difficult to debug at runtime. \[[1](https://stackoverflow.com/questions/68340626/is-it-ok-to-create-react-custom-hooks-that-dont-actually-call-other-hooks), [2](https://react.dev/reference/rules/rules-of-hooks), [3](https://stackoverflow.com/questions/72851622/why-do-have-to-use-use-before-custom-hook-in-react), [4](https://stackoverflow.com/questions/66151248/do-react-hooks-really-have-to-start-with-use), [5](https://dev.to/johnschibelli/advanced-react-hooks-custom-hooks-and-performance-optimization-21nl)]

***

### Why React Requires the `use` Prefix

React requires this convention for two major reasons:

1. **Enforcing Call Orders**: React tracks state based on the exact order in which Hooks are called. The `use` prefix signals to developers and tools that this function **must only be called unconditionally at the top level** of a component or another Hook.
2. **Code Readability**: When reading code, seeing `const data = fetchData()` vs `const data = useFetchData()` immediately tells a developer whether the function triggers internal React reactive lifecycles or if it is just a pure utility function. \[[1](https://www.reddit.com/r/reactjs/comments/yambrk/is%5Fusing%5Fthe%5Fterm%5Fhooks%5Fin%5Fthis%5Fcircumstance%5Fnot/), [2](https://stackoverflow.com/questions/72851622/why-do-have-to-use-use-before-custom-hook-in-react), [3](https://react.dev/reference/rules/rules-of-hooks), [4](https://blog.logrocket.com/create-your-own-custom-react-hooks/), [5](https://www.scaler.com/topics/react/custom-hooks-react/)]

***

### When Should You NOT Use the `use` Prefix?

If your custom function **does not call any internal React Hooks** (`useState`, `useEffect`, etc.), you should **not** use the `use` prefix. \[[1](https://react.dev/learn/reusing-logic-with-custom-hooks), [2](https://www.robinwieruch.de/react-custom-hook/)]

javascript

```
// ❌ BAD CONVENTION: Doesn't use any hooks inside.
function useFormatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// ✅ GOOD: Plain utility function.
function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}
```

Use code with caution.

Keeping the prefix off regular JavaScript utilities ensures you can safely call them inside conditional blocks, loops, or event handlers without triggering false linter errors. \[[1](https://medium.com/@mehmet.r.river/create-a-custom-hook-ffb9b68e64b2), [2](https://react.dev/reference/rules/rules-of-hooks)]

Are you trying to resolve a **specific linter error**, or are you working on a **utility function** where the prefix feels unnecessary? I can help you structure it correctly!

- [link](https://www.reddit.com/r/reactjs/comments/yambrk/is%5Fusing%5Fthe%5Fterm%5Fhooks%5Fin%5Fthis%5Fcircumstance%5Fnot/)\
  Is using the term hooks in this circumstance not being used properly.\
  Oct 22, 2022 — Nope, a hook is just a function that follows the rules of hooks, there is no rule of hooks that requires it to call another hook. ...\
  Reddit·r/reactjs
- [link](https://react.dev/learn/reusing-logic-with-custom-hooks)\
  Reusing Logic with Custom Hooks - React\
  You should give use prefix to a function (and thus make it a Hook) if it uses at least one Hook inside of it: \* // ✅ Good: A Hook ...\
  React
- [link](https://www.robinwieruch.de/react-custom-hook/)\
  React: How to create a Custom Hook - Robin Wieruch\
  Apr 6, 2022 — Custom Hooks are named with “use” as prefix. For example, a custom hook could be named useLocalStorage or useAuthentication. In ou...\
  Robin Wieruch

Show all

## You said: rules of hooks

The **Rules of Hooks** are two strict requirements enforced by React to ensure your application state remains stable, predictable, and bug-free. \[[1](https://www.dhiwise.com/post/the-essential-guide-to-understanding-the-rules-of-hooks), [2](https://dev.to/a1guy/react-hooks-deep-dive-patterns-pitfalls-and-practical-hooks-424k), [3](https://uniquedevs.com/en/blog/react-hooks/), [4](https://nareshit.com/blogs/react-hooks-beginners-guide), [5](https://www.linkedin.com/pulse/react-why-cannot-call-hooks-conditionally-imad-eddine-nouali-mcmve)]

### 1. Only Call Hooks at the Top Level \[[1](https://www.dhiwise.com/post/the-essential-guide-to-understanding-the-rules-of-hooks), [2](https://www.codecademy.com/article/how-to-use-hooks-in-react-js-with-examples)]

You must call Hooks at the very top level of your React function. \[[1](https://www.dhiwise.com/post/the-essential-guide-to-understanding-the-rules-of-hooks)]

- **The Rule**: Do not call Hooks inside loops, conditions, nested functions, or `try/catch` blocks.
- **The Reason**: React relies on the **exact order** in which Hooks are called to map state to your components across multiple renders. Changing this order breaks that mapping. \[[1](https://react.dev/reference/rules/rules-of-hooks), [2](https://www.codecademy.com/article/how-to-use-hooks-in-react-js-with-examples), [3](https://builtin.com/software-engineering-perspectives/react-hooks), [4](https://www.greatfrontend.com/react-interview-playbook/react-hooks), [5](https://github.com/reactjs/react.dev/issues/2492)]

javascript

```
// ❌ BAD: Conditional Hook call breaks the call order
if (isLoggedIn) {
  useEffect(() => { ... }, []);
}

// ✅ GOOD: Move the condition INSIDE the Hook
useEffect(() => {
  if (isLoggedIn) { ... }
}, [isLoggedIn]);
```

Use code with caution.

### 2. Only Call Hooks from React Functions

You cannot call Hooks from regular JavaScript utility functions. \[[1](https://namastedev.com/blog/react-hook-rules-you-must-know-6/)]

- **The Rule**: Only call Hooks from **React Function Components** or **Custom Hooks** (functions named with a `use` prefix).
- **The Reason**: React needs to associate the Hook's internal state with a specific component instance in the virtual DOM tree. \[[1](https://namastedev.com/blog/react-hook-rules-you-must-know-6/), [2](https://medium.com/zestgeek/react-js-rules-of-hooks-best-practices-for-building-react-applications-12bf924500b2), [3](https://namastedev.com/blog/react-hook-rules-you-must-know-2/), [4](https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-react-hooks), [5](https://www.deepintodev.com/blog/how-to-create-your-own-simple-use-state-hook)]

javascript

```
// ❌ BAD: Regular JavaScript helper cannot use Hooks
function calculateData() {
  const [value, setValue] = useState(0);
}

// ✅ GOOD: Call it inside a component or custom Hook
function MyComponent() {
  const [value, setValue] = useState(0);
}
```

Use code with caution.

### How to Automatically Enforce the Rules

You do not have to memorize these rules manually. Install the official ESLint plugin to catch violations instantly inside your code editor: \[[1](https://www.mpt.solutions/the-five-hooks-that-change-how-you-ship-with-claude-code/)]

bash

```
npm install eslint-plugin-react-hooks --save-dev
```

Use code with caution.

Would you like me to look at a **specific component** you are building to see if it violates these rules, or help you convert a **regular helper function** into a proper custom Hook?

- [link](https://www.dhiwise.com/post/the-essential-guide-to-understanding-the-rules-of-hooks)\
  Mastering the Basics: A Comprehensive Overview of React Hooks\
  Oct 31, 2023 — This rule ensures that every stateful logic in a component's source code is clearly visible. By following these rules, you can avo...\
  \
  \
  DhiWise
- [link](https://dev.to/a1guy/react-hooks-deep-dive-patterns-pitfalls-and-practical-hooks-424k)\
  React Hooks Deep Dive: Patterns, Pitfalls, and Practical Hooks\
  Aug 16, 2025 — React officially gives you two rules for hooks, but the truth is… there are more. They're just not printed in bold in the docs. Th...\
  \
  \
  DEV Community
- [link](https://uniquedevs.com/en/blog/react-hooks/)\
  Introduction to hooks and their role in React.js\
  Oct 9, 2024 — What are the rules for using hooks? The rules for using hooks are very important because they help maintain the stability of the s...\
  \
  \
  UniqueDevs

Show all

## You said: how does vue do

\*\***Vue does not have the "Rules of Hooks"** because its Composition API relies on a fundamentally different reactivity engine than React \[1]. \[[1](https://vuejs.org/guide/reusability/composables), [2](https://www.reddit.com/r/vuejs/comments/17togid/other%5Fframeworks%5Fare%5Fbecoming%5Fvue/)]

In Vue, you **can** safely call composition functions (called "Composables") inside `if` statements, loops, or nested functions under the right conditions. \[[1](https://vuejs.org/guide/reusability/composables)]

***

### The Fundamental Difference: React vs. Vue

| Feature \[[1](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32), [2](https://blog.logrocket.com/vue-composition-api-vs-react-hooks/), [3](https://www.vuemastery.com/blog/coding-better-composables-1-of-5/), [4](https://www.syncfusion.com/blogs/post/vue-composition-api-vs-react-hooks), [5](https://medium.com/@oguzhannsaritas/composable-and-mixins-f0166332de48)] | React Hooks                                       | Vue Composables                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| **Execution**                                                                                                                                                                                                                                                                                                                                                                                            | Runs on **every single render** \[1].             | Runs **only once** during setup \[1].                               |
| **State Tracking**                                                                                                                                                                                                                                                                                                                                                                                       | Relies on strict **call order** (array indexing). | Relies on persistent **reactive objects** (`ref`, `reactive`) \[4]. |
| **Conditionals**                                                                                                                                                                                                                                                                                                                                                                                         | **Strictly forbidden** (breaks state mapping).    | **Allowed** (objects maintain their own identity).                  |

***

### How Vue Avoids React's Limitations

React needs a strict call order because `useState` doesn't know its own name; it just knows it is the "first" or "second" Hook in line.

Vue uses explicit reactive objects \[4]. When you create a `ref` in Vue, it returns a self-contained, reactive object pointer \[4]. Vue does not care _when_ or _in what order_ that object is accessed, because the object itself tracks its own reactivity. \[[1](https://www.reddit.com/r/vuejs/comments/1jmsbzh/shifting%5Ffrom%5Freact%5Fto%5Fvue%5Flooking%5Ffor%5Fguidance/), [2](https://medium.com/@percipero/what-is-the-difference-between-ref-and-reactive-in-vue-3-using-the-composition-api-468266e9865f), [3](https://vuejs.org/guide/components/props), [4](https://awad.dev/blog/forcing-recomputation-of-computed-properties/), [5](https://fadamakis.com/10-mistakes-to-avoid-when-starting-with-vue-3-1d1ced8552ae)]

### React (Forbidden)

javascript

```
// ❌ CRASHES IN REACT
if (isLoggedIn) {
  useEffect(() => { ... }, []); // Breaks React's internal call index
}
```

Use code with caution.

### Vue (Perfectly Legal)

javascript

```
// ✅ WORKS PERFECTLY IN VUE
if (isLoggedIn) {
  // Vue creates this watcher dynamically without breaking other state
  watch(userData, () => { ... });
}
```

Use code with caution.

***

### Vue's Only Rule: The "Sync" Requirement

While Vue does not care about loops or conditions, it has **one major rule**: you must call Composables **synchronously** during a component's initial setup phase. \[[1](https://mokkapps.de/vue-tips/use-your-composables-synchronously)]

- **The Rule**: You cannot call a Composable _after_ an `await` statement or inside an asynchronous callback (like `setTimeout`).
- **The Reason**: Vue uses a global variable to track which component is currently initializing. Once the synchronous execution finishes, that tracker turns off. An asynchronous delay causes the Composable to execute too late, losing its connection to the component instance. \[[1](https://medium.com/@danielvgrinevich/is-onmounted-async-valid-in-vue-3-68fb388531c7), [2](https://antfu.me/posts/async-with-composition-api), [3](https://dev.to/aloisseckar/nuxt-tutorial-6-vuejs-intermezzo-45aa)]

javascript

```
import { ref, onMounted } from 'vue';

// ❌ BAD: Called after an await statement
async function setup() {
  const data = await fetchUser();
  onMounted(() => { ... }); // Error: Current instance is lost! [3]
}

// ✅ GOOD: Call your lifecycle hooks before the await
async function setup() {
  onMounted(() => { ... }); // Connected safely [3]
  const data = await fetchUser();
}
```

Use code with caution.

***

### Naming Conventions: `use` vs `use`

Vue adopted React's **`use` prefix** naming convention (e.g., `useFetch`, `useAuth`) entirely for **readability**, not for compiler constraints \[5]. It helps developers instantly recognize that a function returns reactive state rather than plain JavaScript values \[5]. \[[1](https://blog.logrocket.com/inheritance-vs-composition-vue/)]

Are you migrating a project from **React to Vue**, or are you trying to decide **which framework's state model** fits your next application better?

- [link](https://vuejs.org/guide/reusability/composables)\
  Composables\
  Composition API was in part inspired by React hooks, and Vue composables are indeed similar to React hooks in terms of logic compo...\
  \
  Vue.js
- [link](https://www.reddit.com/r/vuejs/comments/17togid/other%5Fframeworks%5Fare%5Fbecoming%5Fvue/)\
  Other frameworks are becoming Vue : r/vuejs\
  Nov 12, 2023 — Except react hooks have so many limitations on where and how you can use them (ie. no hooks in hooks) whereas Vue hooks can used a...\
  \
  Reddit
- [link](https://vuejs.org/guide/reusability/composables)\
  Composables\
  In the context of Vue ( Vue.js ) applications, a "composable" is a function that leverages Vue ( Vue.js ) 's Composition API to en...\
  \
  Vue.js

Show all

## You said: does vue rerun component function, if so how does it know which is which

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, </span><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Vue does not rerun the component function</strong> when state changes</mark>. \[[1](https://blog.logrocket.com/correctly-force-vue-component-re-render/)]

In Vue's Composition API, the `setup()` function (or the code inside ) executes **exactly once** when the component instance is first created. \[[1](https://medium.com/front-end-weekly/whats-new-with-vue3-5b6562d3898b), [2](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32), [3](https://vuejs.org/api/sfc-spec)]

Because it only runs once, Vue does not need to guess "which state is which" on subsequent updates. The memory references are created once and persist for the entire lifecycle of the component. \[[1](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32)]

***

### How Vue Keeps Track Without Rerunning Code

Instead of rerunning your function, Vue uses **Reactivity Proxies** and a concept called **Dependency Tracking**. \[[1](https://vuejs.org/guide/extras/reactivity-in-depth), [2](https://gitnation.com/contents/ref-vs-reactive-what-to-choose-using-vue-3-composition-api), [3](https://vuejs.org/guide/components/props)]

Here is exactly how it works under the hood in three steps:

### 1. The Setup Phase (Runs Once)

When the component initializes, Vue runs your script. Every time you declare a `ref()` or `reactive()`, Vue wraps that data in a JavaScript `Proxy` object. \[[1](https://www.syncfusion.com/blogs/post/vue-composition-api-vs-react-hooks), [2](https://cloudinary.com/guides/front-end-development/vue-reactivity-explained), [3](https://www.codingexplorations.com/blog/understanding-and-using-ref-in-vue-3)]

javascript

```
// This line runs exactly ONCE.
// Vue creates a permanent Proxy object in memory for 'count'.
const count = ref(0);
```

Use code with caution.

### 2. The Dependency Capture (The Getter) \[[1](https://codeinterview.io/interview-questions/vue-js-questions-answers), [2](https://medium.com/@Adekola%5FOlawale/understanding-vue-js-reactivity-system-ce5f27c51a5f)]

Vue then runs your template's render function for the first time. When the template reads `count.value`, it triggers the Proxy’s **Getter** function.\
Vue secretly notes: _"Ah, the Render Function depends on `count`."_ It saves this relationship in a dependency map. \[[1](https://stackoverflow.com/questions/59636004/are-methods-in-vue-reactive), [2](https://medium.com/@vasanthancomrads/vue-reactivity-internals-for-performance-ce4ead284af2), [3](https://leapcell.io/blog/demystifying-vue-3-reactivity-a-deep-dive-into-ref-reactive-and-effect), [4](https://szymonklimek.com/a-deep-dive-into-vue-js-reactivity-system/)]

### 3. The Targeted Update (The Setter)

When you change the value (e.g., `count.value++`), it triggers the Proxy's **Setter** function.\
Instead of rerunning your entire script, the Setter looks at its map, sees that only the template relies on `count`, and surgically updates that specific part of the DOM. \[[1](https://kxming.medium.com/understanding-v-model-in-vue3-27a0ad023187), [2](https://www.thisdot.co/blog/vue-3-composition-api-ref-and-reactive), [3](https://brightmarbles.io/blog/basic-change-detection-vuejs/)]

***

### A Direct Comparison

To see why Vue avoids React's tracking problems, look at how variables behave during an update:

### React: The Snapshot Model

javascript

```
function ReactComponent() {
  const [count, setCount] = useState(0);
  // EVERY single line below reruns on every click.
  // React relies on the execution index (1st useState, 2nd useState) to match data.

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Use code with caution.

### Vue: The Persistent Instance Model

html

```
<script setup>
import { ref } from 'vue';
// Everything in this block runs exactly ONCE.
// Local variables keep their exact identity in memory forever.
const count = ref(0);
</script>

<template>
  <!-- Only this template part gets re-evaluated when count changes -->
  <button @click="count++">{{ count }}</button>
</template>
```

Use code with caution.

### Why This Architecture Matters

Because your Vue component code never reruns:

- You **never** need a Vue equivalent of React's `useMemo` or `useCallback` to prevent functions from being recreated.
- Regular JavaScript variables do not reset on every render.
- Closures, event handlers, and child components do not trigger accidental, cascading recalculations. \[[1](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32)]

Are you dealing with an issue where a function or calculation in your Vue component is **running more often than you expect**, or are you planning how to structure your **component's reactive state**?

- [link](https://blog.logrocket.com/correctly-force-vue-component-re-render/)\
  How to correctly force a Vue component to re-render\
  Dec 20, 2024 — As a result, Vue does not trigger a re-render because the component remains in the DOM and does not re-enter its lifecycle stages ...\
  \
  \
  LogRocket Blog
- [link](https://medium.com/front-end-weekly/whats-new-with-vue3-5b6562d3898b)\
  What’s new in Vue 3 — a roundup. Vue 3 — The Progressive Javascript… | by Mariappan | Frontend Weekly\
  Apr 9, 2022 — Unlike normal\
  \
  \
  Medium
- [link](https://dev.to/voluntadpear/comparing-react-hooks-with-vue-composition-api-4b32)\
  Comparing React Hooks with Vue Composition API\
  Sep 6, 2019 — This is one of the first differences we can identify between React Hooks and Vue Composition API, React hooks run each time the co...\
  \
  \
  DEV Community

Show all

## You said: does it use something like fine grained reactivity in solid or svelte

Yes, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Vue uses fine-grained reactivity</strong></mark>, operating on the exact same fundamental principles as SolidJS and Svelte. \[[1](https://blog.openreplay.com/reactivity-react-vue-angular-svelte/), [2](https://news.ycombinator.com/item?id=35458075), [3](https://blog.devgenius.io/how-to-use-solid-js-2ee09d7ca08f)]

While all three frameworks track dependencies to update only what is necessary, they differ significantly in **how** they compile and execute that reactivity under the hood. \[[1](https://mb21.github.io/blog/2023/09/18/building-a-modern-website-ssg-vs-ssr-spa-vs-mpa-svelte-vs-solid), [2](https://forum.ionicframework.com/t/an-angular-dev-tries-svelte/220030)]

***

### How the Big Three Compare

| Feature \[[1](https://blog.openreplay.com/reactivity-react-vue-angular-svelte/), [2](https://dev.to/kouta222/the-next-big-things-in-frontend-svelte-astro-qwik-solid-2025-edition-2fnf), [3](https://leapcell.io/blog/understanding-virtual-dom-and-why-svelte-solidjs-opt-out), [4](https://blog.openreplay.com/reactivity-react-vue-angular-svelte/), [5](https://www.reddit.com/r/webdev/comments/12dx02i/whats%5Fthe%5Fgeneral%5Fsentiment%5Fon%5Fsolidjs/)] | Vue 3                              | SolidJS                              | Svelte (v5 Runes)            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------ | ---------------------------- |
| **Reactivity Mechanism**                                                                                                                                                                                                                                                                                                                                                                                                                                         | Runtime JavaScript `Proxy` objects | Runtime Functions/Closures (Signals) | Compiler-driven Signals      |
| **Component Reruns**                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Never** reruns the script.       | **Never** reruns the script.         | **Never** reruns the script. |
| **DOM Update Strategy**                                                                                                                                                                                                                                                                                                                                                                                                                                          | Virtual DOM (VDOM) patch           | Direct, surgical DOM updates         | Direct, surgical DOM updates |
| **Granularity Level**                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Component-level** (by default)   | **Element/Text-node level**          | **Element/Text-node level**  |

***

### The Crucial Difference: Vue's VDOM vs. Pure Fine-Grained

While Vue shares the "Signals" concept with Solid and Svelte, its architectural layout introduces a hybrid approach. \[[1](https://www.reddit.com/r/sveltejs/comments/1fi1lmx/isnt%5Fthe%5Flack%5Fof%5Fproper%5Ftypings%5Fof%5Frunes%5Fin/), [2](https://leapcell.io/blog/next-gen-reactivity-rethink-preact-solidjs-signals-vs-svelte-5-runes)]

### 1. Vue: Coarse-Grained Virtual DOM Patching

Vue tracks dependencies at the **component level**. When a `ref` changes, Vue knows exactly which component needs to update, but it does not inherently know which specific HTML element changed. \[[1](https://cloudinary.com/guides/front-end-development/vue-reactivity-explained)]

- Vue passes the update to a **Virtual DOM**.
- The VDOM compares the old layout with the new layout.
- It patches only the changed HTML nodes.\
  _(Note: Newer versions of Vue use Vapor Mode, a compilation strategy that removes the VDOM entirely to achieve pure SolidJS-like granularity)._ \[[1](https://vuejs.org/guide/extras/reactivity-in-depth)]

### 2. SolidJS & Svelte 5: Pure Fine-Grained Reactivity \[[1](https://www.reddit.com/r/solidjs/comments/1o3bqcx/performance%5Fand%5Fbundle%5Fsize%5Fvs%5Fsvelte/)]

Solid and Svelte bypass the Virtual DOM completely. They compile your template into direct, surgical JavaScript DOM operations. \[[1](https://dev.to/ucodes/exploring-frontend-technologies-svelte-vs-solidjs-1gjh), [2](https://leapcell.io/blog/understanding-virtual-dom-and-why-svelte-solidjs-opt-out), [3](https://goodspace.ai/interview-questions/svelte), [4](https://dev.to/omher/intro-to-solidjs-how-to-create-fast-reactive-web-apps-15cn), [5](https://www.lukeshafer.com/blog/solid-vs-svelte/)]

- When a state variable changes, it triggers an independent wrapper function bound **directly to a specific HTML text node**.
- The rest of the component—even other elements within the same template—is completely oblivious to the update.

***

### Code Comparison: Under the Hood

To understand why they are considered cousins, look at how similar their syntax and internal structures are:

### Vue 3 (`ref` Proxy)

Vue wraps your primitive data in an object with a `.value` property. \[[1](https://blog.logrocket.com/your-guide-to-reactivity-in-vue-js/), [2](https://dev.to/jacobandrewsky/why-your-vue-app-is-reactive-too-much-and-how-to-fix-it-4n7m)]

javascript

```
const count = ref(0); // Under the hood: reactive proxy object
count.value++;        // Triggers the proxy setter
```

Use code with caution.

### SolidJS (`createSignal` Functions) \[[1](https://www.reddit.com/r/reactjs/comments/1m0ib3k/i%5Ftried%5Fsolidjs%5Fas%5Fa%5Freact%5Fdev%5Fand%5Fheres%5Fwhat%5Fi/), [2](https://javascript.plainenglish.io/digging-deeper-into-solidjss-perfect-fusion-with-remix-and-much-more-8d26b3f98034), [3](https://www.wisp.blog/blog/what-is-solidjs-understanding-the-modern-reactive-library)]

Solid gives you a getter function and a setter function. \[[1](https://www.reddit.com/r/reactjs/comments/1m0ib3k/i%5Ftried%5Fsolidjs%5Fas%5Fa%5Freact%5Fdev%5Fand%5Fheres%5Fwhat%5Fi/)]

javascript

```
const [count, setCount] = createSignal(0);
setCount(count() + 1); // Triggers the subscriber list
```

Use code with caution.

### Svelte 5 (`$state` Runes) \[[1](https://www.youtube.com/watch?v=tErKyuUTzsM), [2](https://strapi.io/blog/svelte-vs-react-comparison)]

Svelte uses a compiler to turn plain-looking variables into fine-grained signals.

javascript

```
let count = $state(0); // Compiler converts this into a signal
count++;               // Compiler rewrites this to a signal update
```

Use code with caution.

### Summary

Vue is absolutely part of the fine-grained reactivity family. The main distinction is that Vue manages its fine-grained updates via **runtime Proxies and a Virtual DOM**, whereas Solid and Svelte use **pure functions or compilation** to touch the browser DOM directly without a Virtual DOM middleman. \[[1](https://blog.openreplay.com/reactivity-react-vue-angular-svelte/), [2](https://webreference.com/javascript/frameworks/solid-js/), [3](https://baltech.in/blog/exploring-modern-javascript-frameworks-svelte-qwik-astro-and-solidjs/)]

Are you evaluating these frameworks for a **performance-critical application**, or are you curious about how **Vue's upcoming Vapor Mode** closes the performance gap with Solid?

- [link](https://blog.openreplay.com/reactivity-react-vue-angular-svelte/)\
  Reactivity Models Compared: React, Vue, Angular, Svelte\
  Mar 7, 2026 — React uses coarse-grained reactivity (re-running component functions and diffing a virtual DOM), while Vue, Angular Signals, and S...\
  \
  \
  OpenReplay Blog
- [link](https://news.ycombinator.com/item?id=35458075)\
  If speed is your primary concern, sticking with solid is a good idea. But given ...\
  \> The state issues we have right now are non-issues with SolidJS. They don't trigger re-renders and thereby don't degrade the user...\
  \
  Hacker News
- [link](https://blog.devgenius.io/how-to-use-solid-js-2ee09d7ca08f)\
  How to use Solid js. What is the next of React? | by Kyosuke Ito\
  Sep 5, 2022 — The concept of Solid. js is similar to Svelte but svelte's syntax is similar to Vue. Although Solid. js's syntax similar to React,\
  \
  \
  Dev Genius

Show all

## You said: what is the the tradeoff of fine grained reactivity on dx

The Developer Experience (DX) tradeoff of fine-grained reactivity can be summarized in one sentence: **You trade a slightly higher mental model and stricter rules during data access for zero-effort performance and predictable code execution.**

While frameworks like React require you to constantly think about _performance optimization_ (`useMemo`, `useCallback`), fine-grained frameworks shift your focus to thinking about _data reactivity boundaries_.

Here are the specific pros and cons of fine-grained reactivity on your day-to-day coding experience.

***

### The DX Wins (The Good)

- **No Performance Optimization Overhead**: You completely stop writing `useMemo`, `useCallback`, or `React.memo`. Performance is optimal by default because only the exact elements using the data ever update.
- **Intuitive Control Flow**: Variables are just variables. If you use a standard JavaScript `if` statement, a `for` loop, or a `setTimeout`, they work exactly as you expect. You never have to worry about a variable "resetting" because a component function reran.
- **Easy Global State**: Passing reactive state across your entire app is trivial. Because fine-grained signals are independent of the UI components, you can export a `ref` or `signal` from a plain JavaScript file and import it anywhere. It will just work.
- **Perfect Debugging Stack Traces**: When a bug happens in React, your stack trace is often buried deep within the Virtual DOM scheduler. In fine-grained reactivity, a state change triggers a direct path to the function or element that relies on it, making bugs easier to trace.

***

### The DX Tradeoffs (The Quirks & The Bad)

- **The "Destructuring" Trap**: You cannot use standard JavaScript destructuring on reactive objects without breaking reactivity. This is the single biggest stumbling block for developers moving from React.\
  javascript

<!---->

```
// ❌ DESTROYED REACTIVITY (Vue/Solid)
// This extracts the raw value. The framework loses the ability to track updates.
const { name, age } = useUserProfile();

// ✅ REQUIRED DX PATTERN
// You must keep the object intact, or use framework helpers
const profile = useUserProfile(); // profile.name remains reactive
const { name, age } = toRefs(useUserProfile()); // Vue specific helper
```

Use code with caution.

- **Varying Access Syntax (Mental Tax)**: Depending on the framework, you have to remember _how_ to read and write values to keep them reactive. This can feel clunky compared to plain JavaScript objects.
  - **Vue**: You must append `.value` in JavaScript, but omit it in the template.
  - **Solid**: You must call the state as a function: `count()`. If you write `count`, you pass the function itself, not the value.
  - **Svelte 5**: Avoids this via a compiler, but requires learning proprietary syntax macros called "Runes" (`$state()`, `$derived()`).
- **Stale Closure Safety vs. Tracking Safety**: While fine-grained reactivity protects you from React's infamous "stale closure" bugs (where a function captures an old state value), it introduces a new risk: **accidental dependency tracking**. If you read a reactive variable inside an effect or computed property just to log it, the framework will now rerun that entire effect whenever that logged variable changes.
- **Ecosystem Fragmentation**: Because fine-grained reactivity bypasses standard JavaScript object behavior, you cannot easily drop standard JavaScript utility libraries (like Lodash or deep-cloning tools) onto your reactive state without inadvertently breaking the reactivity chain or causing massive performance degradation.

***

### The Bottom Line

| If you use React...                                                                                                     | If you use Fine-Grained (Vue/Solid/Svelte)...                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Your code looks like **plain JS**, but you spend your DX budget managing **when components rerun and memoizing hooks**. | Your code has **strict syntax rules** (no destructuring, `.value`, `()`), but your DX budget is spent purely on **building features**. |

Are you experiencing friction with a **specific syntax pattern** (like Vue's `.value` or Solid's getters), or are you trying to decide if the **learning curve** is worth the trade-off for a team of React developers?

# what about using snake case in js

**JavaScript completely supports `snake_case` syntactically, but it goes against the language's deeply ingrained community standards.** \[[1](https://forum.freecodecamp.org/t/can-the-snake-case-be-used-in-js/431304), [2](https://www.quora.com/Is-using-snake-case-in-JavaScript-considered-a-good-practice)]

While the JavaScript engine will execute `snake_case` identifiers perfectly fine, the universal standard for JS variables and functions is `camelCase`. \[[1](https://www.reddit.com/r/AskProgramming/comments/xm2i0s/is%5Fit%5Fokay%5Fto%5Fuse%5Fsnake%5Fcase%5Fover%5Fcamelcase%5Fin/), [2](https://dev.to/westernal/naming-conventions-in-react-camelcase-vs-snakecase-g5c), [3](https://johnkavanagh.co.uk/articles/converting-between-camel-snake-and-kebab-case-in-javascript/), [4](https://forum.freecodecamp.org/t/can-the-snake-case-be-used-in-js/431304)]

### ⚖️ The Pros and Cons of Using `snake_case` in JS

Using underscores instead of camel casing breaks down into a few distinct advantages and structural trade-offs: \[[1](https://medium.com/@jjcx/web-programming-naming-conventions-when-to-use-camelcase-and-when-to-avoid-it-b97eaaf003ad)]

### The Advantages

- **API and Database Alignment**: Many relational databases (like PostgreSQL) and backend languages (like Python or Ruby) default to `snake_case`. Matching your frontend variable names to your backend schema eliminates the need to map or transform object keys when sending API payloads.
- **Visual Contrast**: Some developers find `snake_case` drastically easier to scan visually because the underscores provide consistent spacing and high-contrast boundaries between words.
- **Acronym Resolution**: Acronyms cause annoying inconsistencies in `camelCase` (e.g., `userId` vs. `userID`, or the native `XMLHttpRequest`). In `snake_case`, it is always lowercased cleanly as `user_id` or `xml_http_request`. \[[1](https://stackoverflow.com/questions/21503430/snake-case-or-camelcase-in-node-js), [2](https://www.reddit.com/r/webdev/comments/1f17qvw/jsts%5Fand%5Fpostgres%5Fnaming%5Fconventions/), [3](https://www.reddit.com/r/django/comments/11a95zd/javascript%5Fvariables%5Fas%5Fsnake%5Fcase%5Fwhen%5Fusing/), [4](https://stackoverflow.com/questions/5543490/json-naming-convention-snake-case-camelcase-or-pascalcase), [5](https://medium.com/@bhuvaneshcj/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-understanding-code-naming-conventions-6f500676e3fd), [6](https://dev.to/alexleduc76/why-we-use-snakecase-for-variables-and-camelcase-for-functions-4hm9), [7](https://www.reddit.com/r/sveltejs/comments/191sfnp/i%5Frevised%5Fmy%5Fwhole%5Fsveltekit%5Fcodebase%5Fto%5Fsnake/), [8](https://www.youtube.com/watch?v=VW1%5FPkLwL4Y), [9](https://www.reddit.com/r/rust/comments/w2nxrw/snake%5Fcase%5Fvs%5Fcamel%5Fcase/)]

### The Disadvantages

- **Ecosystem Clashing**: All built-in browser web APIs, the Document Object Model (DOM), Node.js core modules, and nearly all third-party npm libraries natively use `camelCase`. If you adopt `snake_case`, your code will become a messy, inconsistent mix of both conventions.
- **Linter and Team Friction**: Popular code quality tooling like ESLint flags `snake_case` variable names as style errors by default under the `camelcase` rule.
- **Employability Hurdles**: Writing pure `snake_case` in a JavaScript-focused interview or public portfolio can be viewed by recruiters or senior developers as a lack of familiarity with the ecosystem. \[[1](https://www.reddit.com/r/AskProgramming/comments/xm2i0s/is%5Fit%5Fokay%5Fto%5Fuse%5Fsnake%5Fcase%5Fover%5Fcamelcase%5Fin/), [2](https://stackoverflow.com/questions/21503430/snake-case-or-camelcase-in-node-js), [3](https://news.ycombinator.com/item?id=6777600), [4](https://www.reddit.com/r/learnprogramming/comments/ssf3tp/is%5Fit%5Fwrong%5Fto%5Fuse%5Fsnake%5Fcase%5Fon%5Fjsons/), [5](https://forum.freecodecamp.org/t/would-using-snake-case-be-looked-down-upon/241951)]

***

### 🛠️ Common Structural Exceptions

There are two major instances where `snake_case` (or its variations) is widely accepted or even encouraged within modern JavaScript architectures:

### 1. Screaming Snake Case for Constants \[[1](https://khalilstemmler.com/blogs/camel-case-snake-case-pascal-case/)]

When declaring global immutable constants, JavaScript developers use all-caps snake case (`SCREAMING_SNAKE_CASE`). This mimics native constants like `Number.MAX_SAFE_INTEGER`: \[[1](https://developer.mozilla.org/en-US/docs/Glossary/Snake%5Fcase), [2](https://medium.com/@sodiq.akanmu001/javascript-casing-conventions-a-must-know-for-every-developer-770a4474a7f0)]

javascript

```
const API_TIMEOUT_MS = 5000;
const MAX_FILE_SIZE_BYTES = 10485760;
```

Use code with caution.

### 2. Network Payload Boundaries

If you parse network responses from a Python or PHP API that transmits data in `snake_case`, it is common to isolate those names inside JavaScript object properties: \[[1](https://stackoverflow.com/questions/21503430/snake-case-or-camelcase-in-node-js), [2](https://stackoverflow.com/questions/5543490/json-naming-convention-snake-case-camelcase-or-pascalcase)]

javascript

```
// Accessing raw payload data using string keys preserves the backend standard safely
const userId = serverResponse['user_id'];
```

Use code with caution.

***

### 🔄 The Ideal Solution: Interceptors and Transformers

Instead of compromising your JavaScript styling to match a `snake_case` database or API, the standard industry practice is to **intercept and map the data format dynamically at the network boundary**. \[[1](https://www.reddit.com/r/javascript/comments/brzfiw/camelcase%5Fin%5Ffront%5Fsnake%5Fcase%5Fin%5Fthe%5Fback/), [2](https://www.reddit.com/r/learnpython/comments/1rfek4y/python%5Fbackend%5Fjs%5Ffrontend%5Fsnakecase%5For%5Fcamelcase/)]

Libraries like Axios can run global request and response interceptors utilizing lightweight utility packages (such as camelize or Lodash's `_.camelCase` and `_.snakeCase` methods) to transparently flip casings: \[[1](https://www.geeksforgeeks.org/javascript/how-to-convert-camel-case-string-to-snake-case-in-javascript/), [2](https://www.geeksforgeeks.org/javascript/how-to-convert-a-string-to-snake-case-using-javascript/)]

javascript

```
// Example logic conceptually transforming an API payload at the network layer
const snakePayload = { user_first_name: "Alex" };

// Automatically convert it to camelCase for your internal JS logic
const localUser = customPayloadTransformer(snakePayload);
console.log(localUser.userFirstName); // "Alex"
```

Use code with caution.

If you would like, I can show you how to set up an **Axios interceptor** or a **Fetch wrapper** to automatically convert incoming `snake_case` keys into `camelCase`. Would that help with your current project?

- [link](https://www.reddit.com/r/AskProgramming/comments/xm2i0s/is%5Fit%5Fokay%5Fto%5Fuse%5Fsnake%5Fcase%5Fover%5Fcamelcase%5Fin/)\
  Is it okay to use snake\_case over camelCase in JavaScript?\
  Sep 23, 2022 — It's fine, as long as you don't use any libraries that follow js conventions, or don't make anyone else work with the ensuing mess...\
  Reddit·r/AskProgramming
- [link](https://stackoverflow.com/questions/21503430/snake-case-or-camelcase-in-node-js)\
  Snake\_case or camelCase in node.js \[closed] - Stack Overflow\
  Feb 1, 2014 — Comments. Add a comment. 12. Personally, when I have to deal with snake case in javascript, I use it only with square brackets: da...\
  Stack Overflow
- [link](https://www.reddit.com/r/django/comments/11a95zd/javascript%5Fvariables%5Fas%5Fsnake%5Fcase%5Fwhen%5Fusing/)\
  Javascript Variables as snake\_case when using Django - Reddit\
  Feb 23, 2023 — Just use snake\_case for the data. \* edu2004eu. • 3y ago. You'll likely end up with mixed cases anyways. If you use any 3rd party l...\
  Reddit·r/django

Show all

## You said: what about using snake case everywhere within your own code in js

\*\***Using `snake_case` everywhere in your own JavaScript code will work perfectly fine, but it will significantly hurt your development speed and tool compatibility.**

The JavaScript engine does not care how you name things. However, because the entire language ecosystem is built around `camelCase`, choosing to ignore this standard within your own codebase creates friction. \[[1](https://jackmt9.medium.com/react-rails-snake-or-camel-7b7e5b275c23)]

### 🛑 The Core Problems with Total `snake_case`

### 1. Visual Mismatch with Language Built-ins

Even if you use `snake_case` for all of your own variables, you cannot change the native language. Your code will constantly fight against itself, resulting in a hybrid style that looks disjointed and hard to read: \[[1](https://dev.to/westernal/naming-conventions-in-react-camelcase-vs-snakecase-g5c), [2](https://blog.gopenai.com/the-ai-code-styler-a-deep-dive-into-how-llms-are-silently-rewriting-softwares-dna-5f66e635b7e0)]

javascript

```
// A jarring mix of styles is unavoidable
const user_profile = document.getElementById('user-id');
const first_name = user_profile.value.trim().toLowerCase();
const item_count = Array.from(all_items).length;
```

Use code with caution.

### 2. Severe Third-Party Library Friction

Every major framework (React, Vue, Angular) and npm package (Lodash, Express, Prisma) uses `camelCase` for properties, methods, and configurations. When you pull in external tools, your code will look like this:

javascript

```
// React component example
function user_dashboard({ user_id }) {
  const [user_data, set_user_data] = useState(null); // Fighting React's hook naming convention

  useEffect(() => {
    fetch_data(user_id);
  }, [user_id]); // React linters will flag this dependency array
}
```

Use code with caution.

### 3. Breaking IDE and Tooling Automation

Modern development relies heavily on linters, formatters, and AI autocomplete.

- **ESLint**: Will flood your screen with errors unless you manually disable the default `camelcase` rule.
- **Prettier**: Can format code structure, but it cannot fix casing inconsistencies.
- **Autocomplete**: Copilot, Cursor, or VS Code IntelliSense will constantly suggest `camelCase` for native APIs and `snake_case` for your code, slowing down your typing speed. \[[1](https://www.reddit.com/r/laravel/comments/dd8l90/using%5Fsnake%5Fcase%5Fdatabase%5Ffields%5Fis%5Fmaking/)]

***

### 💡 Is it Ever Worth It?

The only scenario where this approach makes sense is **if you are building a completely isolated, standalone JavaScript utility script** that heavily interacts with a `snake_case` system (like a pure Python/PostgreSQL stack) and uses zero external npm packages.

Even in that case, the moment another developer joins your project or you need to install a third-party tool, the naming convention conflict will become a headache.

***

If you want to move forward with this approach, I can give you the **exact configuration lines to add to your ESLint file** to completely silence camelCase warnings. Would you like me to provide that setup?

- [link](https://jackmt9.medium.com/react-rails-snake-or-camel-7b7e5b275c23)\
  React-Rails — Snake or Camel ?. 🐍 vs. 🐪 | by Jack | Medium\
  Feb 12, 2021 — One option is to ignore the convention in the backend and create our model columns using camelCase. That way, there's no need for ...\
  \
  \
  Medium
- [link](https://dev.to/westernal/naming-conventions-in-react-camelcase-vs-snakecase-g5c)\
  Naming Conventions in React: camelCase or snake\_case?\
  Jul 31, 2025 — Using snake\_case Only Well, nobody prohibits you from using a naming convention other than the one advised by the language you use...\
  \
  \
  DEV Community
- [link](https://blog.gopenai.com/the-ai-code-styler-a-deep-dive-into-how-llms-are-silently-rewriting-softwares-dna-5f66e635b7e0)\
  The AI Code-Styler: A Deep Dive into How LLMs are Silently Rewriting Software’s DNA\
  Jun 17, 2025 — The paper suggests we are not just witnessing the rise of a new tool, but the emergence of a new, hybrid human-machine coding styl...\
  \
  \
  GoPenAI

Show all

## You said: why can it be wise

While it is heavily discouraged by standard style guides, choosing to use `snake_case` everywhere in your own JavaScript code can actually be a highly strategic, wise choice under specific conditions.

It comes down to prioritizing **cognitive load reduction** over ecosystem conformity.

***

### 1. Eliminating Cognitive Overhead in Polyglot Monoliths

If you are a solo developer or part of a small team building a full-stack application using a `snake_case` backend (like Python/FastAPI, Ruby on Rails, or Rust) and a PostgreSQL database, you face a constant mental tax.

Switching between backend files (`user_id`) and frontend files (`userId`) requires a continuous micro-shift in your brain. Using `snake_case` everywhere creates a unified, single-language mental model across your entire repository.

### 2. Perfect Data Transparency Without Mapping Layers

In standard web development, developers spend significant time and CPU cycles writing "mapping layers" (interceptors) to convert API data:

- **Incoming**: `snake_case` (API) ➔ `camelCase` (JS)
- **Outgoing**: `camelCase` (JS) ➔ `snake_case` (API)

By using `snake_case` natively in your JavaScript, **your database schema, backend models, API payloads, and frontend state become identical.** You can pass objects directly from your database straight into a frontend form or UI component without a single transformation step. This drastically reduces bugs caused by typos during manual key renaming.

### 3. Superior Readability and Accessibility

For many human brains, `snake_case` is objectively easier to read than `camelCase`.

- **The "Word Boundary" Advantage**: Underscores act like actual spaces, allowing the eye to rest between words. `this_is_a_very_long_variable_name` reads like a sentence, whereas `thisIsAVeryLongVariableName` can turn into a visual blur.
- **Dyslexia and Neurodiversity**: Many developers with dyslexia or visual processing differences find that `snake_case` prevents words from running together, significantly speeding up their reading and debugging time.

### 4. Flawless Handle of Complex Acronyms

`camelCase` breaks down completely when dealing with multiple acronyms or abbreviations, leading to confusing team debates:

- Is it `getXmlHttpRequest()` or `getXMLHTTPRequest()`?
- Is it `parseJsonApiData()` or `parseJSONAPIData()`?

In `snake_case`, the rule is always absolute and uniform because everything is strictly lowercase: `get_xml_http_request()` and `parse_json_api_data()`. There is never any ambiguity.

***

### 🚀 When is it _Actually_ Wise?

To make this a successful strategy, your project should fit this specific profile:

- **Internal Tools / Microservices**: Private projects where you control the entire stack end-to-end.
- **Heavy Database/AI Scripting**: Node.js scripts that primarily orchestrate SQL databases or interface with Python AI/Data Science libraries.
- **Small, Aligned Teams**: Where everyone explicitly agrees that data uniformity matters more than standard JS styling.

***

If you want to try this setup out, I can show you how to write an **ESLint rule configuration override** so that your editor doesn't yell at you with red squiggly lines for every underscore. Would that be helpful?

## You said: why can it be wise even wo the api consistency stuff

Stripping away any benefits of API or database consistency, choosing `snake_case` in JavaScript boils down to a deliberate choice to prioritize **human readability, code maintainability, and cognitive comfort** over standard convention.

Here is why it can be a wise choice entirely on its own merits:

### 1. Superior Typing Flow and Muscle Memory

For touch-typists, typing `snake_case` can be significantly more fluid than typing `camelCase`:

- **No Shift Key Timing Issues:** `camelCase` requires hitting the `Shift` key exactly when typing the first letter of a new word. If your timing is off, you get typos like `useriD` or `userId`.
- **Standard Keyboard Rhythm:** Typing an underscore (`Shift` + `-`) keeps your hands anchored in their standard position. It mimics the natural rhythm of hitting the spacebar between words, reducing finger strain over long coding sessions.

### 2. Cleaner Destructuring and Text Selection

`snake_case` plays much nicer with text editors and standard OS shortcuts:

- **Flawless Double-Click Selection:** In many code editors, terminals, and operating systems, double-clicking a word selects the entire `snake_case_variable`. With `camelCase`, double-clicking sometimes only selects the single sub-word (like just `Name` inside `userFirstName`), forcing you to click and drag.
- **Regex and Search Friendliness:** Searching for word boundaries using Regular Expressions (`\b`) or simple text filters is much cleaner with explicit underscore separators than with case-insensitive camel matching.

### 3. Absolute Freedom from "Naming Committee" Debates

`camelCase` introduces a surprising amount of styling ambiguity that wastes developer time during code reviews. Teams constantly argue over rules like:

- Do we capitalize the first letter of an acronym? (`fetchDbData` vs `fetchDBData`)
- How do we handle numbers? (`heading1Text` vs `headingOneText`)

With `snake_case`, the rule is absolute, mechanical, and leaves zero room for debate: **everything is lowercase, and words are separated by an underscore.** `fetch_db_data` and `heading_1_text` are clear, unarguable, and require zero thought.

### 4. Intentional Visual Separation from Third-Party Code

When your codebase is a mix of your own custom logic and external npm packages, `snake_case` creates a massive visual advantage called **domain separation**.

By glancing at a line of code, you instantly know what belongs to _you_ and what belongs to the _framework_:

javascript

```
// You instantly know 'get_active_metrics' is your code,
// while 'map' and 'filter' belong to the language/library.
const report = get_active_metrics(user_list)
  .map(item => item.value)
  .filter(val => val > threshold_limit);
```

Use code with caution.

This contrast acts like a visual security boundary, making it immediately obvious if you are accidentally overriding a native language method or a library function.

***

If you decide to adopt this style, we should make sure your development environment doesn't fight you. I can show you how to **configure VS Code settings** or **ESLint rules** to make writing `snake_case` completely seamless. Would you like to see that configuration?

## You said: why can it be wise to make your own code stand out and scannable

Making your own code stand out from language built-ins and third-party libraries is one of the most effective ways to lower your **cognitive load** during debugging.

When your custom logic looks visually distinct, you create an immediate mental map of ownership. This visual contrast provides several powerful advantages:

### 1. Instant Bug Isolation

When an application crashes, the error usually stems from your custom code, not the battle-tested library you imported.

- If your code blends in with `camelCase`, your eyes must carefully read every word to figure out what you wrote versus what you imported.
- If your code stands out (e.g., using `snake_case`), your eyes can instantly skip past the framework boilerplate and home in directly on your custom logic to find the typo or logic flaw. \[[1](https://www.reddit.com/r/learnpython/comments/q5xg03/personal%5Fvs%5Fprofessional%5Fcoding/)]

### 2. Safeguard Against Accidental Overrides (Shadowing)

JavaScript allows you to overwrite variables and functions easily. If you name a custom helper function the same way the language names its built-ins, you risk "shadowing" or breaking native behavior. \[[1](https://www.educative.io/blog/javascript-tips-simplify-code), [2](https://news.ycombinator.com/item?id=43903705)]

javascript

```
// Dangerous camelCase: Did I write this, or is it a native/library hook?
const open = () => { ... };

// Safe snake_case: Visually distinct from native APIs like window.open()
const open_modal_window = () => { ... };
```

Use code with caution.

Making your code visually distinct creates a natural safety barrier, ensuring you never accidentally overwrite a built-in method like `fetch()`, `map()`, or `push()`.

### 3. Rapid Code Audits and Code Reviews

During a pull request or a code review, developers need to evaluate the risk of a change. \[[1](https://apiiro.com/blog/best-practices-to-transform-your-code-review-process/), [2](https://sigute.medium.com/improving-pull-request-process-with-complexity-labels-e47a59c54f21)]

- When you scan a file, seeing a distinct style tells you exactly where the developer's unique business logic lives.
- You can quickly audit how your custom data flows through the application without getting bogged down by the syntax of the underlying framework.

### 4. Effortless Context Switching

When returning to a project you haven't touched in six months, you spend the first hour just trying to remember how your own system works. Visual scannability acts like a roadmap left behind by your past self. It allows you to immediately recognize your custom architectural patterns without needing to re-read your documentation. \[[1](https://arjancodes.com/blog/effective-use-of-design-patterns-in-software-development/)]

***

If you want to maximize this visual scannability, we can look into **advanced editor themes** or **color-token customizers** in VS Code that can color your custom variables differently than native properties. Would you like to explore how to set that up?

- [link](https://www.reddit.com/r/learnpython/comments/q5xg03/personal%5Fvs%5Fprofessional%5Fcoding/)\
  Personal vs professional coding : r/learnpython\
  Oct 11, 2021 — So don't be shy about getting feedback from others, having other eyes on your code can often spot bugs & logic flaws that you didn...\
  \
  Reddit
- [link](https://www.educative.io/blog/javascript-tips-simplify-code)\
  10 JavaScript tips: Best practices to simplify your code\
  May 30, 2025 — Prevents conflicts: Global variables can unintentionally overwrite built-in JavaScript objects.\
  \
  \
  Educative
- [link](https://news.ycombinator.com/item?id=43903705)\
  Inheritance was invented as a performance hack (2021)\
  May 8, 2025 — At least that had been the case till ES6 came around, but good luck finding anyone actually using classes in JavaScript. Mainly be...\
  \
  Hacker News

Show all

# the syntax change of svelte

The syntax change in Svelte <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">refers to the shift from <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Svelte 4's compile-time implicit reactivity</strong> to <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Svelte 5's runtime explicit reactivity via "Runes"</strong></mark>. This complete architectural rewrite fixes edge cases in complex applications, supports native TypeScript, and unlocks "universal reactivity," meaning you can now write reactive logic directly inside standard `.js` or `.ts` files rather than just inside `.svelte` components. \[[1](https://www.reddit.com/r/sveltejs/comments/1jydg0w/why%5Fdoes%5Fsvelte%5F5%5Fcompiler%5Frequire%5Fspecial%5Fsyntax/), [2](https://www.puruvj.dev/blog/svelte-5-magic-debunked), [3](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55), [4](https://www.youtube.com/watch?v=%5Fq5FZ3Z9Fz8\&t=1), [5](https://www.reddit.com/r/sveltejs/comments/1f8om3f/how%5Flong%5Funtil%5Fsvelte4%5Fwill%5Fbe%5Fdeprecated%5Fis/)]

Svelte 5 maintains backward compatibility with Svelte 4 code, but the new syntax changes are highly encouraged for modern projects. \[[1](https://svelte.dev/blog/svelte-5-is-alive), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55)]

***

### Core Syntax Changes: Svelte 4 vs. Svelte 5 \[[1](https://github.com/storybookjs/storybook/discussions/27092), [2](https://www.reddit.com/r/sveltejs/comments/1crpj0r/svelte%5F5%5Fis%5Freact%5Fand%5Fi%5Fwanna%5Fcry/)]

The major differences between the two systems are organized into categories below. \[[1](https://www.youtube.com/watch?v=%5F-uq--CLjbQ), [2](https://www.youtube.com/watch?v=OETs1LKhW0A\&t=15)]

### 1. Reactivity Primitives (Runes)

Runes are special functions prefixed with a `$` that serve as compiler instructions. \[[1](https://svelte.dev/docs/svelte/v5-migration-guide), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55)]

| Feature \[[1](https://www.youtube.com/watch?v=%5F-uq--CLjbQ), [2](https://www.reddit.com/r/sveltejs/comments/1fqn8e2/svelte%5F4%5Fvs%5F5/), [3](https://strapi.io/blog/svelte-vs-react-comparison), [4](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55), [5](https://vercel.com/blog/whats-new-in-svelte-5)] | Svelte 4 Syntax                            | Svelte 5 Syntax                           | Key Benefit                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Component State**                                                                                                                                                                                                                                                                                            | `let count = 0;`                           | `let count = $state(0);`                  | Deep, proxy-based reactivity that works seamlessly with nested object or array mutations (no more `arr = arr` re-assignments required). |
| **Derived State**                                                                                                                                                                                                                                                                                              | `$: doubled = count * 2;`                  | `let doubled = $derived(count * 2);`      | Pure, calculated values that automatically track dependencies without accidental side-effects.                                          |
| **Side Effects**                                                                                                                                                                                                                                                                                               | `$: console.log(count);` or `onMount(...)` | `$effect(() => { console.log(count); });` | Explicitly handles asynchronous or external side effects, executing exclusively on the client side.                                     |

### 2. Component Properties (Props)

Passing data to components has moved from using the `export` keyword to an explicit destructured object approach. \[[1](https://www.reddit.com/r/sveltejs/comments/1f8om3f/how%5Flong%5Funtil%5Fsvelte4%5Fwill%5Fbe%5Fdeprecated%5Fis/), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55)]

- **Svelte 4:**\
  svelte

<!---->

```
<script>
  export let name = 'Guest';
  export let status;
</script>
```

Use code with caution.

- **Svelte 5:**\
  svelte

<!---->

```
<script>
  let { name = 'Guest', status } = $props();
</script>
```

Use code with caution.\
_This clarifies component boundaries and lets you easily bundle fallback values and group unhandled props together using standard JavaScript destructuring._ \[[1](https://www.reddit.com/r/sveltejs/comments/1f8om3f/how%5Flong%5Funtil%5Fsvelte4%5Fwill%5Fbe%5Fdeprecated%5Fis/), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55), [3](https://www.reddit.com/r/sveltejs/comments/1ig23sh/why%5Fdoes%5Fit%5Fsay%5Flegacy%5Fmode/), [4](https://svelte.dev/docs/kit/form-actions)]

### 3. DOM Event Listeners & Modifiers

The distinct framework syntax for handling element events has been simplified into standard HTML/JS property patterns. \[[1](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55), [2](https://www.youtube.com/watch?v=OETs1LKhW0A\&t=15)]

- **Svelte 4:** Uses `on:` prefix and pipe-separated modifiers.\
  html

<!---->

```
<button on:click|preventDefault={handleClick}>Click</button>
```

Use code with caution.

- **Svelte 5:** Uses standard attributes with native JavaScript function handling.\
  html

<!---->

```
<button onclick={(e) => { e.preventDefault(); handleClick(); }}>Click</button>
```

Use code with caution.\
\[[1](https://www.youtube.com/watch?v=%5Fq5FZ3Z9Fz8\&t=1), [2](https://www.reddit.com/r/sveltejs/comments/1khu3v6/is%5Fthere%5Fany%5Fdisadvantage%5Fto%5Fusing%5Flegacy%5For/), [3](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55)]

### 4. Component Events & Forwarding

Custom event handling no longer requires a separate dispatch system, converting fully to standard callback properties. \[[1](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55), [2](https://manuelsanchezdev.com/blog/svelte-5-features-you-should-know/)]

- **Svelte 4:**\
  svelte

<!---->

```
<!-- Child.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>
<button on:click={() => dispatch('greet', 'Hello')}>Greet</button>
```

Use code with caution.

- **Svelte 5:**\
  svelte

<!---->

```
<!-- Child.svelte -->
<script>
  let { ongreet } = $props();
</script>
<button onclick={() => ongreet('Hello')}>Greet</button>
```

Use code with caution.\
\[[1](https://svelte.dev/docs/svelte/v5-migration-guide), [2](https://betterprogramming.pub/6-ways-to-do-component-communications-in-svelte-b3f2a483913c), [3](https://svelte.dev/docs/v4-migration-guide), [4](https://github.com/sveltejs/svelte/issues/6771)]

### 5. Reusable UI Templates (Snippets replacing Slots) \[[1](https://fullstacksveltekit.com/blog/svelte-snippets), [2](https://codesignal.com/learn/courses/svelte-advanced-concepts/lessons/reusable-code-blocks-with-snippets-in-svelte), [3](https://svelte.dev/docs/svelte/v5-migration-guide)]

Svelte 5 replaces zones and complex `let:` abstractions with more predictable code blocks called "snippets". \[[1](https://www.youtube.com/watch?v=%5Fq5FZ3Z9Fz8\&t=1), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55)]

- **Svelte 4:**\
  svelte

<!---->

```
<!-- Card.svelte -->
<div class="card">
  <slot name="header"></slot>
</div>
```

Use code with caution.

- **Svelte 5:**\
  svelte

<!---->

```
<!-- Card.svelte -->
<script>
  let { header } = $props();
</script>
<div class="card">
  {@render header()}
</div>
```

Use code with caution.\
\[[1](https://medium.com/@ryanneilparker/how-to-setup-a-sveltekit-project-7de6962a1389), [2](https://svelte.dev/docs/svelte/v5-migration-guide)]

***

### How to Automatically Upgrade Your Syntax

You can quickly upgrade your existing projects to Svelte 5 utilizing official tools: \[[1](https://www.youtube.com/watch?v=%5Fq5FZ3Z9Fz8\&t=1), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55)]

1. **Entire Project Migration**: Use the official [Svelte CLI (sv)](https://svelte.dev/docs/svelte/v5-migration-guide) command in your terminal:\
   bash

<!---->

```
npx sv migrate svelte-5
```

Use code with caution.
2\. **File-by-File Migration**: Open a component file in VS Code with the Svelte extension, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac), and execute **Migrate Component to Svelte 5 Syntax**. \[[1](https://svelte.dev/docs/svelte/v5-migration-guide), [2](https://www.youtube.com/watch?v=31CyquY8RNE\&t=55), [3](https://github.com/sveltejs/svelte/discussions/14131), [4](https://svelte.dev/blog/svelte-5-is-alive)]

If you would like, please specify **which area of syntax** (such as global stores, TypeScript typing, or parent-child component communication) you want to look at more closely, and I can provide targeted code comparisons. \[[1](https://www.youtube.com/watch?v=%5Fq5FZ3Z9Fz8\&t=1), [2](https://www.youtube.com/watch?v=OETs1LKhW0A\&t=15)]

- [link](https://www.youtube.com/watch?v=%5F-uq--CLjbQ)\
  Svelte 5 VS Svelte 4 Syntax | Code Snippet Comparisons\
  Oct 19, 2024 — what's going on guys it's Cooper Codes. and in this video we are going to be comparing a bunch of different code examples from spe...\
  22:43\
  YouTube·Cooper Codes
- [link](https://www.reddit.com/r/sveltejs/comments/1fqn8e2/svelte%5F4%5Fvs%5F5/)\
  Svelte 4 vs 5 : r/sveltejs - Reddit\
  Sep 27, 2024 — \* zBrain0. • 2y ago. Svelte 5 is way less confusing. In v4, you had to know: Its state if I declare it by using let. But only if i...\
  Reddit·r/sveltejs
- [link](https://svelte.dev/docs/svelte/v5-migration-guide)\
  Svelte 5 migration guide\
  Version 5 comes with an overhauled syntax and reactivity system. While it may look different at first, you'll soon notice many sim...\
  Svelte

Show all

## You said: the backlash

The backlash against the Svelte 5 syntax changes centers on the feeling that **Svelte sacrificed its unique, lightweight "HTML-first" simplicity to look and act like React**. \[[1](https://github.com/sveltejs/svelte/discussions/12455), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]

While the Svelte core team implemented Runes to fix scaling bugs and handle complex UI scenarios, many long-time developers felt alienated by what they viewed as a departure from Svelte’s original philosophy. \[[1](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/), [2](https://imfeld.dev/writing/how%5Fsvelte%5F5%5Frunes%5Fwill%5Ffix%5Flong%5Fstanding%5Fsvelte%5Fbugs)]

***

### The Core Criticisms Behind the Backlash

### 1. "The Loss of Svelte's Magic"

- **The Grievance**: Svelte’s initial appeal was that it looked like standard HTML, CSS, and basic JavaScript (`let count = 0`).
- **The Reaction**: Replacing implicit compiler magic with explicit functions like `$state()` and `$derived()` made the code feel much more verbose. Developers complained that Svelte was experiencing "convergent evolution," turning into a clone of React Hooks or Vue Compositions instead of maintaining its own distinct identity. \[[1](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11), [3](https://medium.com/@mjmmattoni/my-unpopular-opinion-i-dont-like-svelte-s-runes-b10a22243cd8)]

### 2. Boilerplate Inflation (Especially for Props)

- **The Grievance**: In Svelte 4, declaring a property took a single line: `export let user;`.
- **The Reaction**: In Svelte 5, using `$props()` requires object destructuring. When adding TypeScript interfaces, a single-line property can easily balloon into five or six lines of boilerplate code. Developers argued that strongly-typed properties went from being effortless to a major hassle. \[[1](https://www.loopwerk.io/articles/2025/svelte-5-runes/)]

### 3. Increased Cognitive Load & API Complexity

- **The Grievance**: Svelte used to have a very shallow learning curve.
- **The Reaction**: With Svelte 5, developers now have to learn and choose between multiple variations of the same concepts (e.g., `$state`, `$state.raw`, and `$state.snapshot`). Managing `Proxy`-based states under the hood introduced new, non-trivial architectural nuances that developers have to actively think about. \[[1](https://svelte.dev/docs/svelte/v5-migration-guide), [2](https://news.ycombinator.com/item?id=43093037)]

### 4. Dislike of Snippets over Native Slots

- **The Grievance**: The replacement of standard HTML-like tags with `{#snippet}` blocks and `{@render}` tags drew significant criticism.
- **The Reaction**: Many community members felt that the template engine became wonkier and less intuitive. While snippets are objectively more powerful because they can accept parameters, critics argued they feel less like native web layout syntax. \[[1](https://www.reddit.com/r/sveltejs/comments/1ehgerj/not%5Fa%5Fbig%5Ffan%5Fof%5Fsvelte%5F5%5Fsyntax/)]

***

### How the Community Looks at it Now

Despite the initial wave of backlash, the narrative surrounding Svelte 5 has shifted as the ecosystem matured:

- **The Enterprise Perspective**: Developers working on large, production-grade applications largely welcomed the change. The old Svelte 4 syntax was prone to hidden reactivity bugs and fragile component boundaries when scale increased. Runes solved these structural issues completely. \[[1](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11), [3](https://imfeld.dev/writing/how%5Fsvelte%5F5%5Frunes%5Fwill%5Ffix%5Flong%5Fstanding%5Fsvelte%5Fbugs)]
- **Universal Reactivity**: The backlash cooled significantly once developers realized they could finally write reactive code inside standard `.ts` or `.js` files without needing global Svelte stores, dramatically improving application architecture. \[[1](https://github.com/sveltejs/svelte/discussions/12455), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]

For a deeper look into the community debate and why the framework underwent this transformation, watch this analysis:

4m

[JavaScript framework reinvents itself… Did "runes" just ruin ...FireshipYouTube · Oct 24, 2024](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)

If you are facing these changes in an ongoing project, let me know:

- Are you **migrating an existing Svelte 4 codebase**, or starting fresh?
- What **specific piece of the new syntax** is giving you the most friction?

I can provide practical patterns to minimize the boilerplate and ease the transition.

- [link](https://www.reddit.com/r/sveltejs/comments/1ehgerj/not%5Fa%5Fbig%5Ffan%5Fof%5Fsvelte%5F5%5Fsyntax/)\
  Not a big fan of Svelte 5 syntax : r/sveltejs - Reddit\
  Aug 1, 2024 — Snippets are... questionable. They're a good addition that solves the problem of not being able to have more components in one fil...\
  Reddit·r/sveltejs
- [link](https://svelte.dev/docs/svelte/v5-migration-guide)\
  Svelte 5 migration guide\
  By deprecating createEventDispatcher and the on: directive in favour of callback props and normal element properties, we: \* reduce...\
  Svelte
- [link](https://news.ycombinator.com/item?id=43093037)\
  The part of Svelte 5 which bothers me the most isn't the syntax ...\
  Feb 18, 2025 — The part of Svelte 5 which bothers me the most isn't the syntax changes for Runes, but rather the significant increase in complexi...\
  Hacker News

Show all

## You said: when

The timeline for the introduction of Runes and the subsequent community response followed a clear progression:

- **September 2023 (The Announcement & Immediate Backlash)**: The Svelte core team first introduced the concept of "Runes" to the public in a [Svelte Blog post previewing Svelte 5](https://svelte.dev/blog/svelte-5-is-alive). This initial announcement immediately triggered intense community debate and backlash on forums like Reddit and Hacker News as developers realized the framework's core syntax was fundamentally changing. \[[1](https://svelte.dev/blog/svelte-5-is-alive), [2](https://www.reddit.com/r/sveltejs/comments/1fvtjp7/what%5Fare%5Fthe%5Freasons%5Fyou%5Fwill%5Fnot%5Fuse%5Fsvelte/)]
- **May 2024 (The Release Candidate)**: After months of active community discussion and internal adjustments, Svelte 5 entered its [Release Candidate phase](https://www.infoworld.com/article/2337237/svelte-5-moves-to-release-candidate-stage.html). This allowed developers to widely test Runes in pre-production projects. \[[1](https://www.infoworld.com/article/2337237/svelte-5-moves-to-release-candidate-stage.html)]
- **October 19, 2024 (The Stable Release)**: Svelte 5 was officially launched as stable during the [Fall 2024 Svelte Summit](https://en.wikipedia.org/wiki/Svelte). \[[1](https://en.wikipedia.org/wiki/Svelte)]

If you are trying to contextualize this timeline for your work, let me know:

- Are you deciding whether to **upgrade a legacy project** built before the 2024 shift?

- Do you need to see **how long Svelte 4 will be supported** before making a decision?

- [link](https://www.reddit.com/r/sveltejs/comments/1fvtjp7/what%5Fare%5Fthe%5Freasons%5Fyou%5Fwill%5Fnot%5Fuse%5Fsvelte/)\
  What are the reasons you will not use svelte (svelte 5 ... - Reddit\
  Oct 5, 2024 — For me biggest block is ui libraries like skeleton and shadcn-svelte hasn't come out with fully compatible versions for svelte 5. ...\
  Reddit·r/sveltejs

- [link](https://en.wikipedia.org/wiki/Svelte)\
  Svelte - Wikipedia\
  Version 5 of Svelte was released on October 19, 2024 at Svelte Summit Fall 2024 with Rich Harris cutting the release live while jo...\
  Wikipedia

- [link](https://svelte.dev/blog/svelte-5-is-alive)\
  Svelte 5 is alive\
  Oct 22, 2024 — Svelte 5 is alive. Our biggest release yet. The Svelte team Oct 22 2024. After almost 18 months of development, comprising thousan...\
  Svelte

Show all

## You said: what do ppl say

Public sentiment on Svelte 5 is highly divided, creating **a sharp split between solo developers building side projects and engineering teams managing large codebases**. While casual hobbyists mourn the loss of Svelte’s original "magical" simplicity, enterprise developers have widely embraced Runes for making large applications drastically easier to scale and maintain. \[[1](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/), [2](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181), [3](https://www.nitorinfotech.com/blog/svelte-5-in-2026-runes-first-engineering-for-developers/)]

The community consensus splits into two distinct perspectives:

### The "Pro-Runes" Camp (Enterprise & Scale)

Developers working on production-grade applications largely view Svelte 5 as a massive upgrade. \[[1](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]

- **"Goodbye, Glitchy State"**: Developers are glad to be rid of Svelte 4's compiler quirks, where updating an array element required awkward syntax like `arr = arr` just to trigger a re-render. Runes provide granular, proxy-based deep reactivity. \[[1](https://www.reddit.com/r/sveltejs/comments/1fqn8e2/svelte%5F4%5Fvs%5F5/), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]
- **Universal Logic**: Moving reactivity out of tags and allowing it in standard `.js` and `.ts` files completely eliminated the need for complex, boilerplate-heavy Svelte "stores". \[[1](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]
- **Code Review Friendliness**: Because reactivity is explicit (`$state`), code reviews are much easier. Peers no longer have to guess which variables are reactive and which are static. \[, [2](https://www.nitorinfotech.com/blog/svelte-5-in-2026-runes-first-engineering-for-developers/)]

### The "Anti-Runes" Camp (Hobbyists & Purists)

Developers who fell in love with Svelte for its lean, HTML-like approach feel the framework has lost its identity. \[[1](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]

- **The "Reactification" Grievance**: Critics frequently complain that Svelte looks too much like React now. They point out that `$state` feels exactly like `useState`, and `$effect` introduces the exact same mental overhead as `useEffect`. \[[1](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]
- **Too Much Boilerplate**: Taking a simple variable and wrapping it in a function, or using destructured objects for properties via `$props()`, frustrates developers who valued Svelte’s original ultra-minimalism. \[[1](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]
- **Template Clutter**: Replacing straightforward tags with custom syntax blocks like `{#snippet}` and `{@render}` makes the template files look clunky and less like standard HTML. \[[1](https://www.reddit.com/r/sveltejs/comments/1l1f3ya/which%5Fai%5Fmodels%5Fcan%5Fwrite%5Fsvelte%5F5%5Fcode%5Fi%5Fbuilt%5Fa/), [2](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181)]

***

### What the Community is Saying

Here is how developers describe their experiences on platforms like Reddit and Hacker News:

### On Complexity and Scaling

The shift is widely seen as a turning point where Svelte outgrew its "toy project" status to become a serious enterprise tool. \[[1](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/)]

“If you didn't see the problems with Svelte 4, you weren't building anything substantial and was most likely a toy project”

[Reddit · 1 year ago](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/)

“Convergent evolution is happening... React trying to get simpler like Svelte, Svelte 5 trying to handle more complex UI scenarios”

[Reddit · 1 year ago](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/)

### On the Experience Shift

While the old syntax felt effortless at first, many find the explicit nature of Runes to be much sturdier over time. \[[1](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181), [2](https://www.youtube.com/watch?v=aYyZUDFZTrM\&t=11)]

“Svelte 4's magic was real magic—impressive, but sometimes unpredictable... Svelte 5's “magic” is just good old-fashioned syntactic sugar.”

[Puru Vijay · 11 months ago](https://www.puruvj.dev/blog/svelte-5-magic-debunked)

***

If you'd like to explore how these changes impact day-to-day writing, let me know:

- Would you like to see a **side-by-side comparison** of a complex state logic file in Svelte 4 vs Svelte 5?

- Are you curious about **how AI code assistants** handle writing the new Svelte 5 code? \[[1](https://www.reddit.com/r/sveltejs/comments/1hbqo0j/thoughts%5Fon%5Fsvelte%5F5%5Fafter%5Fwriting%5Fa%5Ffew%5Fthousand/), [2](https://www.reddit.com/r/sveltejs/comments/1l1f3ya/which%5Fai%5Fmodels%5Fcan%5Fwrite%5Fsvelte%5F5%5Fcode%5Fi%5Fbuilt%5Fa/)]

- [link](https://www.reddit.com/r/sveltejs/comments/1hx7ksl/im%5Fso%5Ftired%5Fof%5Fpeople%5Fhating%5Fsvelte%5F5%5Fyou%5Fdont/)\
  I'm so tired of people hating Svelte 5. You don't hate it, what you hate is working with complicated codebases : r/sveltejs\
  Jan 9, 2025 — According to a post on r/sveltejs, some people are tired of people hating Svelte 5 because they don't hate it, but rather working ...\
  Reddit

- [link](https://www.reddit.com/r/sveltejs/comments/1l1f3ya/which%5Fai%5Fmodels%5Fcan%5Fwrite%5Fsvelte%5F5%5Fcode%5Fi%5Fbuilt%5Fa/)\
  Which AI models can write Svelte 5 code? I built a ...\
  Jun 2, 2025 — model it still frequently writes incorrect Swelt 5 code moving on to Gemini 2.5 Pro is where we get a big surprise gemini 2.5 Pro ...\
  [1m](https://www.reddit.com/r/sveltejs/comments/1l1f3ya/which%5Fai%5Fmodels%5Fcan%5Fwrite%5Fsvelte%5F5%5Fcode%5Fi%5Fbuilt%5Fa/)\
  Reddit·Code with Stanislav

- [link](https://www.youtube.com/watch?v=cz1f4hG7ook\&t=181)\
  Svelte 5 Ruined Svelte (and that's why I love it)\
  Oct 22, 2024 — but that's enough complaining i want to get into the stuff that I think is really good and the first one is going to be the new ru...\
  2m\
  YouTube·Ben Davis

Show all

## You said: prev quirk examples

To understand why Svelte 5 introduced Runes, you have to look at the architectural quirks of Svelte 4. Because Svelte 4 relied entirely on a build-time compiler to inject reactivity, it had strict limitations that forced developers into awkward workarounds.

Here are the specific, real-world code quirks that frustrated developers in Svelte 4, and how Svelte 5 fixes them.

***

### 1. The Array/Object Mutation Quirks (The `arr = arr` Hack)

In Svelte 4, the compiler looked for the assignment operator (`=`) to trigger a DOM update. If you updated an array or object using native JavaScript methods like `.push()`, the UI would not update because no re-assignment occurred.

- **Svelte 4 Quirky Code:**\
  svelte

<!---->

```
<script>
  let list =;

  function addItem() {
    list.push(4); // ❌ The array updates, but the UI changes nothing!
    list = list;  // 💡 Mandatory, unintuitive workaround to force a re-render.
  }
</script>
```

Use code with caution.

- **Svelte 5 Fix:** Runes use standard JavaScript `Proxy` objects under the hood. Reactivity is truly deep and tracking handles mutations automatically.\
  svelte

<!---->

```
<script>
  let list = $state([1, 2, 3]);

  function addItem() {
    list.push(4); //  Works natively. The UI updates instantly.
  }
</script>
```

Use code with caution.

***

### 2. The Multi-Variable Dependency Chain Quirk

Svelte 4 used standard JavaScript label syntax (`$:`) to create reactive statements (derived values). However, if a statement depended on multiple variables, the order of declaration inside your script tag mattered deeply, often causing unexpected execution orders or unhandled glitches.

- **Svelte 4 Quirky Code:**\
  svelte

<!---->

```
<script>
  let count = 1;

  // If you chain multiple reactive declarations, tracking could break
  // or evaluate out of order during complex local state updates.
  $: doubled = count * 2;
  $: quadrupled = doubled * 2;
</script>
```

Use code with caution.

- **Svelte 5 Fix:** `$derived` creates an explicit runtime dependency graph that guarantees values evaluate correctly, instantly, and on-demand.\
  svelte

<!---->

```
<script>
  let count = $state(1);
  let doubled = $derived(count * 2);
  let quadrupled = $derived(doubled * 2); // Always perfectly synchronized.
</script>
```

Use code with caution.

***

### 3. The "Component Boundary Isolation" Quirk

In Svelte 4, reactive logic using `let` and `$` _only_ worked inside `.svelte` files. If you wanted to move a piece of complex state logic out of a giant component and into a standalone helper file, you had to throw away your standard syntax and completely refactor your code to use Svelte Stores (`writable`, `derived`).

- **Svelte 4 Quirky Code:**\
  javascript

<!---->

```
// counterStore.js (Had to use an entirely separate API)
import { writable } from 'svelte/store';
export const count = writable(0);

// Component.svelte
<script>
  import { count } from './counterStore.js';
  // Had to prefix everything with a $ to auto-subscribe to stores
  console.log($count);
</script>
```

Use code with caution.

- **Svelte 5 Fix:** "Universal Reactivity" means Runes work anywhere. You can write your exact same reactive code inside standard JavaScript/TypeScript files.\
  javascript

<!---->

```
// counter.js
export function createCounter() {
  let count = $state(0);
  return {
    get count() { return count; },
    increment: () => count++
  };
}
```

Use code with caution.

***

### 4. The Infinite Loop Effect Quirk

In Svelte 4, the `$: ` syntax acted as both a computed value _and_ a side-effect runner. If you modified a variable inside a reactive block that also read that variable, you would easily trigger a hidden infinite rendering loop.

- **Svelte 4 Quirky Code:**\
  svelte

<!---->

```
<script>
  let count = 0;
  let history = [];

  // Reading count to update history, but updating history triggers this again
  $: {
    history.push(count);
    history = history; // ❌ DANGER: Can trigger infinite compile loops
  }
</script>
```

Use code with caution.

- **Svelte 5 Fix:** Runes cleanly separate side-effects (`$effect`) from pure calculated state (`$derived`), preventing cycles by design.\
  svelte

<!---->

```
<script>
  let count = $state(0);
  let history = $state([]);

  $effect(() => {
    // Safe: Effects explicitly untrack mutations made inside their own scope
    history.push(count);
  });
</script>
```

Use code with caution.

***

If you want to see how these changes alter setup architecture, let me know:

- Do you want to see **how to handle global state** using Svelte 5's new pattern?
- Are you looking for the equivalent of **Svelte 4's `onMount` or `onDestroy`** in the new system?

# what about naming like use\_hook over useHook in react

Using `use_hook` (snake\_case) instead of `useHook` (camelCase) in React **will break the official React ESLint tooling**, even though the JavaScript compiler itself will execute the function perfectly fine.

### 🛠️ Why `useHook` is Strictly Required \[[1](https://blog.stackademic.com/useeffect-in-functional-component-vs-class-component-methods-also-starting-a-learn-react-hooks-626923fac5b5)]

The choice between the two conventions comes down to how React handles static analysis and code safety.

- **Broken ESLint Rules:** React relies on the eslint-plugin-react-hooks package to enforce the critical Rules of Hooks (e.g., preventing hooks from being called conditionally or inside loops). This linter **strictly looks for a `use` prefix followed by a capital letter** (`use[A-Z]`).
- **The `use_hook` Blindspot:** If you name a custom hook `use_my_hook`, the linter will fail to recognize it as a React hook. It will treat it as a standard JavaScript function. This means if you mistakenly call `use_my_hook` inside an `if` statement, your linter will remain silent, opening the door to catastrophic runtime bugs and desynced component state.
- **Ecosystem Compatibility:** JavaScript and the React ecosystem globally standardize on **camelCase** for function and variable naming. Using snake\_case breaks community conventions and makes your codebase feel alien to onboarding developers. \[[1](https://react.dev/learn/reusing-logic-with-custom-hooks), [2](https://hygraph.com/blog/react-hooks), [3](https://stackoverflow.com/questions/72920133/is-it-okay-to-change-the-name-of-the-custom-react-hook-in-3rd-party-library), [4](https://stackoverflow.com/questions/66151248/do-react-hooks-really-have-to-start-with-use), [5](https://www.sufle.io/blog/naming-conventions-in-react)]

### 📋 Visual Breakdown of Naming Impacts

| Naming Convention          | Example          | Linter Enforces Rules? | Safe to Use?                         |
| -------------------------- | ---------------- | ---------------------- | ------------------------------------ |
| **Standard camelCase**     | `useFetchData`   | ✅ **Yes**             | ✅ **Yes**                           |
| **snake\_case**             | `use_fetch_data` | ❌ **No**              | 🔴 **No** (Risks runtime state bugs) |
| **Alternative PascalCase** | `UseFetchData`   | ❌ **No**              | 🔴 **No** (Confused with components) |

If you are using an automated code formatter like **Prettier** or linting configurations like **ESLint**, they will flag snake\_case function names as warnings or errors depending on your `camelcase` rule settings. Stick to `useHook` to keep your code safe, standard, and fully supported by React's internal mechanisms. \[[1](https://dev.to/anikcreative/react-hooks-explained-useimperativehandle-5g44), [2](https://www.reddit.com/r/reactjs/comments/1i6ij9i/why%5Fhook%5Fstarts%5Fwith%5Fuse%5Finstead%5Fof%5Fother%5Fwords/)]

If you are trying to **group your hooks** or make them easier to read, what specific problem are you hoping snake\_case will solve? I can suggest a clean, React-compliant architecture pattern for it!

- [link](https://react.dev/learn/reusing-logic-with-custom-hooks)\
  Reusing Logic with Custom Hooks - React\
  Hook names always start with use. React applications are built from components. Components are built from Hooks, whether built-in ...\
  React
- [link](https://stackoverflow.com/questions/66151248/do-react-hooks-really-have-to-start-with-use)\
  Do React hooks really have to start with "use"? - Stack Overflow\
  Feb 11, 2021 — Comments. ... Imagine that your project js code will be compressed and confused when it is released, and all your methods starting...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/72920133/is-it-okay-to-change-the-name-of-the-custom-react-hook-in-3rd-party-library)\
  Is it okay to change the name of the custom React Hook in 3rd party ...\
  Jul 9, 2022 — Is it okay to change the name of the custom React Hook in 3rd party library? ... There is a rule that react hooks should not be us...\
  Stack Overflow

Show all

## You said: i do not use linting on it and i love snake case

If you do not use ESLint and love snake\_case, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the JavaScript engine will run your code perfectly</strong></mark>. React does not check your code styling at runtime, so using `use_my_hook` will work exactly like `useMyHook`.

However, you must watch out for two specific technical behaviors that happen under the hood.

### ⚠️ The Core Risks Without Linting

- **The Conditional Bug Trap:** React hooks rely on a strict execution order. If you accidentally put `use_my_hook` inside an `if` statement or a loop, React will mix up the state of every hook below it. Without a linter, you will get zero warnings until your app UI suddenly breaks or crashes at runtime.
- **The `use` Prefix Exception:** React recently introduced a native `use()` function (for consuming Promises and Context). While your custom `use_my_hook` works, avoid naming any custom function _exactly_ `use`, as that is a reserved React feature.

### 💡 Compromise: Hybrid Styling

If you want to keep your project purely snake\_case but want to stay completely safe with React's internals, you can use snake\_case for your logic and only use a capital letter right after the `use` prefix.

- `useFetch_user_data()`
- `useTrack_shopping_cart()`

This tiny tweak triggers React's internal recognition system (`use` followed by a capital letter) while letting you use snake\_case for the rest of the function name.

Are you working on a **personal project** or a **team codebase**? I can show you how to structure your files to keep that clean snake\_case look across your entire folder tree!

## You said: why can it be wise if my team feel better with snake case

Allowing your team to use snake\_case for custom hooks can be a wise choice if it **maximizes developer velocity and alignment**. When a team operates in an environment that matches their natural preferences, it eliminates unnecessary mental friction.

### 🧠 The Cognitive and Cultural Benefits

- **Zero Cognitive Switching:** If your team primarily writes backend code in Python, Ruby, or SQL, their brains are trained to read snake\_case. Forcing camelCase in React creates a constant "syntax tax" as developers switch context between the backend and frontend.
- **Higher Team Morale:** Forcing developers to use styling they actively dislike breeds resentment toward the frontend codebase. Giving the team autonomy over their code style creates a strong sense of ownership and psychological safety.
- **Faster Scanning:** Many developers genuinely find `use_user_authentication_status` significantly faster to read and parse at a glance than `useUserAuthenticationStatus`.

### 🛡️ How to Make It Work Safely

If your team agrees on snake\_case, you can make this a highly viable strategy by implementing alternative safety guardrails to replace the missing linter protection.

- **Strict Code Reviews:** Since you do not use ESLint, human eyes must be the shield. Make it a mandatory team rule that **no hook can ever sit inside an `if` statement, loop, or nested function**.
- **File Naming Alignment:** Pair your function naming with your file naming. Your team will likely love keeping filenames consistent as `use_fetch_data.js` instead of camelCase.

Would you like help writing a **short team style guide** to ensure everyone uses snake\_case consistently across components and hooks?

# all typescript builtin types

TypeScript provides several categories of built-in types, ranging from standard JavaScript primitives to unique types used exclusively for type-checking and code structure. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

### 1. Primitive Types

These map directly to the foundational data types available in JavaScript. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

- **`string`**: Textual data like `"hello"`.
- **`number`**: Floating-point numeric values, including integers, decimals, and `NaN`.
- **`bigint`**: Whole numbers of arbitrary precision, denoted with an `n` suffix (e.g., `100n`).
- **`boolean`**: True or false values.
- **`symbol`**: Unique, immutable identifiers typically used as object keys.
- **`null`**: Explicitly represents an empty or absent value.
- **`undefined`**: Variables that have been declared but not yet assigned a value. \[[1](https://www.geeksforgeeks.org/typescript/data-types-in-typescript/), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [3](https://dev.to/joyontokumar/the-string-type-in-typescript-2916), [4](https://intellipaat.com/blog/javascript-data-types/), [5](https://medium.com/jspoint/typescript-working-with-types-f1829384851f)]

### 2. Special and Top/Bottom Types

These are specialized tools used to handle variable flexibility or strict constraints. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

- **`any`**: Turns off type-checking entirely, allowing a variable to act exactly like standard JavaScript.
- **`unknown`**: The type-safe counterpart to `any`; forces you to perform a type check before interacting with the value.
- **`void`**: Indicates the absence of a return value, commonly used for functions that don't return anything.
- **`never`**: Represents a value or state that should logically never occur, such as a function that throws an error or runs infinitely. \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://medium.com/@hrishikesh.pandey9955/all-about-types-in-typescript-c2da772b6339), [3](https://www.totaltypescript.com/concepts/any-type), [4](https://www.youtube.com/watch?v=bz0Onkw2MPo\&t=3), [5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)]

### 3. Object and Structural Types

These represent more complex data shapes and native JavaScript constructors. \[[1](https://medium.com/nerdjacking/mastering-typescript-data-types-the-complete-guide-with-performance-hacks-30097eb3367a)]

- **`object`**: Represents any value that is not a primitive (anything except number, string, boolean, etc.).
- **`Array`** (or `type[]`): A collection of elements sharing a specific type structure.
- **`Tuple`**: An array with a fixed number of elements where each position has a specific type assigned to it.
- **Function**: Defines standard execution blocks with strongly-typed parameters and return values. \[[1](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html), [2](https://www.geeksforgeeks.org/typescript/data-types-in-typescript/), [3](https://www.freecodecamp.org/news/learn-typescript-data-types-from-zero-to-hero/), [4](https://www.youtube.com/watch?v=RHgPgdhqpUw), [5](https://data-flair.training/blogs/typescript-syntax-for-programming/)]

### 4. Code Structuring Types

These are TypeScript-specific structures that compile down to structural objects or values at runtime. \[[1](https://mimo.org/glossary/typescript/data-types), [2](https://blog.logrocket.com/exploring-typescript-5-features-smaller-simpler-faster/), [3](https://news.ycombinator.com/item?id=36637221)]

- **`enum`**: A set of named constants, enabling readable numeric or string-based code groupings. \[[1](https://www.geeksforgeeks.org/typescript/data-types-in-typescript/)]

***

### 5. Built-in Utility Types

TypeScript includes a set of global [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) to quickly transform existing object structures: \[[1](https://www.typescriptlang.org/docs/handbook/utility-types.html), [2](https://www.wisdomgeek.com/development/web-development/typescript/)]

| Utility Type \[[1](https://www.typescriptlang.org/play/typescript/type-primitives/built-in-utility-types.ts.html), [2](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [3](https://mimo.org/glossary/typescript/utility-types), [4](https://www.w3schools.com/typescript/typescript%5Futility%5Ftypes.php), [5](https://www.typescriptlang.org/docs/handbook/utility-types.html)] | Action |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Converts all properties of an object type to optional.                                                                                                                                                                                                                                                                                                                                                                             |        |
| Converts all optional properties of an object type to required.                                                                                                                                                                                                                                                                                                                                                                    |        |
| Marks all properties as immutable, blocking reassignment.                                                                                                                                                                                                                                                                                                                                                                          |        |
| Maps keys `K` to values of type `T` to build dictionaries.                                                                                                                                                                                                                                                                                                                                                                         |        |
| Creates a new type choosing only specific keys `K` from `T`.                                                                                                                                                                                                                                                                                                                                                                       |        |
| Creates a new type removing specific keys `K` from `T`.                                                                                                                                                                                                                                                                                                                                                                            |        |
| Excludes types from a union that match type `U`.                                                                                                                                                                                                                                                                                                                                                                                   |        |
| Extracts types from a union that match type `U`.                                                                                                                                                                                                                                                                                                                                                                                   |        |
| Drops `null` and `undefined` options from a type union.                                                                                                                                                                                                                                                                                                                                                                            |        |
| Extracts a function's parameters into a tuple type.                                                                                                                                                                                                                                                                                                                                                                                |        |
| Extracts the returned type of a function signature.                                                                                                                                                                                                                                                                                                                                                                                |        |
| Recursively unwraps promises to find their resolution value.                                                                                                                                                                                                                                                                                                                                                                       |        |

If you are trying to solve a specific problem, tell me **what kind of data structure** you are building or **which type error** you are encountering so I can provide a targeted solution.

- [link](https://www.typescriptlang.org/docs/handbook/utility-types.html)\
  Documentation - Utility Types - TypeScript\
  Jun 19, 2026 — Utility Types. Utility Types. TypeScript provides several utility types to facilitate common type transformations. These utilities...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/basic-types.html)\
  Handbook - Basic Types - TypeScript\
  Jun 15, 2026 — About Number , String , Boolean , Symbol and Object. It can be tempting to think that the types Number , String , Boolean , Symbol...\
  TypeScript
- [link](https://mimo.org/glossary/typescript/data-types)\
  TypeScript Data Types: Syntax, Usage, and Examples - Mimo\
  What Are TypeScript Data Types? TypeScript data types define the kind of values a variable can hold. This system includes primitiv...\
  Mimo

Show all

## You said: all typescript builtin utility types

TypeScript provides a wide array of globally available \*\***[built-in Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)** that allow you to transform and manipulate existing types. \[[1](https://www.typescriptlang.org/docs/handbook/utility-types.html), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

Here is the complete, comprehensive list categorized by their core functionality. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/)]

### Object Modification Types

These types manipulate the properties and modifiers (like `?` or `readonly`) of an existing object shape. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

- : Makes all properties of an object type optional.
- : Makes all optional properties of an object type mandatory.
- : Adds a `readonly` modifier to all properties, preventing reassignment.
- : Constructs an object type with keys `K` mapped to values of type `T`.
- : Creates a new type by choosing a specific set of keys `K` from object `T`.
- : Creates a new type by removing a specific set of keys `K` from object `T`. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide), [3](https://www.codecademy.com/resources/docs/typescript/utility-types), [4](https://www.scaler.com/topics/typescript/typescript-utility-types/)]

### Union Manipulation Types

These types are used to filter, isolate, or clean up specific members within a type union. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide), [3](https://mimo.org/glossary/typescript/utility-types), [4](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [5](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-exclude)]

- : Excludes all union members from `T` that are assignable to type `U`.
- : Extracts all union members from `T` that are assignable to type `U`.
- : Removes `null` and `undefined` variants from a type union. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)]

### Function and Class Types

These types inspect and extract information directly out of function or class constructor definitions. \[[1](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

- : Extracts the argument types of a function into a tuple array.
- : Grabs the underlying return type of a function signature.
- : Extracts the parameter types of a class constructor into a tuple array.
- : Evaluates the instance type returned by a class constructor function. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)]

### Async and Execution Context Types

These types manage asynchronous resolutions or tweak the evaluation rules of the execution context. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://generalistprogrammer.com/tutorials/typescript-utility-types-complete-guide)]

- : Recursively unwraps `Promise` chains to find their final resolved value type.
- : Extracts the type of the `this` parameter from a function signature.
- : Removes the explicit `this` parameter requirement from a function signature.
- : Acts as a marker type to explicitly declare the type of `this` inside an object literal. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [3](https://blog.logrocket.com/using-built-in-utility-types-typescript/), [4](https://flow.org/en/docs/types/utilities/), [5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)]

### String Literal Manipulation Types

These types alter the casing rules of string literal values during compile-time type-checking. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types), [2](https://blog.webdevsimplified.com/2025-10/typescript-utility-types/)]

- : Converts a string literal type completely to uppercase.
- : Converts a string literal type completely to lowercase.
- : Converts the first character of a string literal type to uppercase.
- : Converts the first character of a string literal type to lowercase. \[[1](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)]

***

### Reference Code Examples

typescript

```
// Base definition
interface User {
  id: string;
  name: string;
  email?: string;
}

// 1. Partial & Required
type OptionalUser = Partial<User>;   // { id?: string; name?: string; email?: string; }
type StrictUser = Required<User>;     // { id: string; name: string; email: string; }

// 2. Pick & Omit
type UserContact = Pick<User, "name" | "email">; // { name: string; email?: string; }
type UserWithoutId = Omit<User, "id">;           // { name: string; email?: string; }

// 3. Union Filtering
type Status = "active" | "inactive" | "pending";
type ActiveOnly = Exclude<Status, "inactive" | "pending">; // "active"

// 4. Function Inspection
function saveUser(id: string, data: User) { return true; }
type SaveArgs = Parameters<typeof saveUser>; // [id: string, data: User]
type SaveReturn = ReturnType<typeof saveUser>; // boolean
```

Use code with caution.

If you are debugging a complex type layout, tell me **which built-in type** you are trying to implement or **paste your current error** so we can solve it.

- [link](https://www.typescriptlang.org/docs/handbook/utility-types.html)\
  Documentation - Utility Types - TypeScript\
  Jun 19, 2026 — Example. ts. declare function f1 (): { a : number; b : string }; type T0 = ReturnType <() => string>; type T0 = string. type T1 = ...\
  TypeScript
- [link](https://www.convex.dev/typescript/advanced/utility-types-mapped-types/typescript-utility-types)\
  Utility Types | TypeScript Guide by Convex\
  Table\_title: Understanding TypeScript utility types Table\_content: | Utility Type | Description | | --- | --- | | Partial | Constr...\
  Convex
- [link](https://blog.logrocket.com/using-built-in-utility-types-typescript/)\
  Using built-in utility types in TypeScript - LogRocket Blog\
  May 29, 2023 — Exploring built-in utility type functions in TypeScript. Value transformation types. Awaited Object manipulation types. Partial Re...\
  LogRocket Blog

Show all

## You said: all typescript builtin js types

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">TypeScript natively supports all standard JavaScript types</strong></mark> and supplies ambient globally-declared type definitions (`lib.d.ts`) matching every runtime API found in modern ECMAScript standard environments. \[[1](https://basarat.gitbook.io/typescript/type-system/lib.d.ts), [2](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)]

The complete map of TypeScript's built-in definitions for native JavaScript types is categorized below.

### 1. Primitives (Lower-case)

These types directly mirror the behavior of the `typeof` operator for native JavaScript primitives. \[[1](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)]

- **`string`**: Textual data lines or template literals (e.g., `"hello"`).
- **`number`**: Floating-point values including integers, decimals, `NaN`, and `Infinity`.
- **`bigint`**: Arbitrary precision integers, marked with an `n` suffix (e.g., `100n`).
- **`boolean`**: Conditional logical operators `true` or `false`.
- **`symbol`**: Unique memory-reference identifiers initialized via `Symbol()`.
- **`null`**: An intentional absence of object identification.
- **`undefined`**: Variables initialized without any bound assignment. \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [3](https://www.w3schools.com/typescript/typescript%5Fsimple%5Ftypes.php), [4](https://js2ts.com/typescript-types-guide), [6](https://medium.com/@itsayu/built-in-types-in-typescript-4250af50ef4a)]

### 2. Standard Structural Objects

These match global JavaScript constructor instances and execution objects. \[[1](https://basarat.gitbook.io/typescript/type-system/lib.d.ts)]

- **`object`**: Represents any non-primitive data structure (anything not a string, number, etc.).
- (or `T[]`): Indexed arrays containing matching type records.
- **`Function`**: The base signature blueprint describing JavaScript executable function structures.
- **`Date`**: Handles native date stamps, epoch clocks, and calendar parsing.
- **`RegExp`**: Pattern matching expressions instantiated by `/regex/` blocks. \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://medium.com/jspoint/typescript-working-with-types-f1829384851f), [3](https://graphite.com/guides/typescript-types), [4](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects), [5](https://basarat.gitbook.io/typescript/type-system/lib.d.ts), [6](https://mimo.org/glossary/typescript/object-type)]

### 3. Collection Objects (ES6+) \[[1](https://itechcraft.com/blog/typescript-vs-javascript/)]

Built-in hash, key, and sequence arrays introduced across modern ECMAScript revisions. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

- : Key-value collections capable of accepting arbitrary object types as lookups.
- : Ordered arrays configured to keep unique entries.
- / : Garbage-collection safe maps/sets restricted exclusively to object keys. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

### 4. Advanced Asynchronous & Runtime Objects

Structural wrappers mapping out JavaScript asynchronous behaviors and memory abstractions. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects)]

- : Represents asynchronous execution values pending deferred fulfillment.
- **`ArrayBuffer`** / **`DataView`**: Low-level binary memory buffers and reader layouts.
- **`Int8Array`** / **`Float64Array`** (etc.): Specialized TypedArrays parsing explicitly structured raw bytes.
- **`Error`** / **`TypeError`** / **`SyntaxError`**: Error schemas thrown during runtime failures.
- **`JSON`**: Globally exposed namespace checking static `parse()` and `stringify()` calls. \[[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects), [2](https://www.wecreateproblems.com/interview-questions/typescript-interview-questions), [3](https://www.reddit.com/r/typescript/comments/7vwl84/does%5Fanybody%5Felse%5Fwish%5Ffor%5F81632big%5Finteger%5Ftypes/), [4](https://github.com/ericelliott/rtype)]

### 5. Global Boxed Objects (Avoid Using)

JavaScript possesses capital-letter object wrappers for primitive types, which TypeScript mirrors. **Avoid using these as type annotations** because they map to wrapper objects instead of literals. \[[1](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [2](https://www.linode.com/docs/guides/typescript-types-get-started/), [3](https://refine.dev/blog/javascript-vs-typescript/)]

- **`String`**, **`Number`**, **`Boolean`**, **`Symbol`**, **`Object`** \[[1](https://www.typescriptlang.org/docs/handbook/basic-types.html), [2](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)]

***

### Comparison Matrix: `typeof` Runtime vs. TypeScript Compilation \[[1](https://en.wikipedia.org/wiki/TypeScript), [2](https://sumeetpanchal-21.medium.com/typescript-beyond-the-basics-mastering-typeof-keyof-and-indexed-access-types-e291b307fd30)]

| JavaScript Runtime Value \[[1](https://www.simplilearn.com/tutorials/javascript-tutorial/types-in-javascript), [2](https://medium.com/@pranayrah108/understanding-primitive-data-types-in-typescript-boolean-719f2ac09674), [3](https://dev.to/barinbritva/typescript-spelling-out-tsconfig-part-1-3nak), [4](https://luigicavalieri.com/blog/typescript-intro-for-react-developers/), [5](https://www.edureka.co/blog/data-types-in-javascript/)] | JavaScript `typeof` Output | Standard TypeScript Annotation |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------ |
| `"text"`                                                                                                                                                                                                                                                                                                                                                                                                                                           | `"string"`                 | **`string`**                   |
| `42`                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"number"`                 | **`number`**                   |
| `true`                                                                                                                                                                                                                                                                                                                                                                                                                                             | `"boolean"`                | **`boolean`**                  |
| `Symbol('id')`                                                                                                                                                                                                                                                                                                                                                                                                                                     | `"symbol"`                 | **`symbol`**                   |
| `() => {}`                                                                                                                                                                                                                                                                                                                                                                                                                                         | `"function"`               | **`Function`** or `() => void` |
| `[]`                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"object"`                 | **`any[]`** or                 |
| `{}`                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"object"`                 | **`object`** or                |
| `null`                                                                                                                                                                                                                                                                                                                                                                                                                                             | `"object"`                 | **`null`**                     |

If you are seeing an implicit typing issue, tell me **which JavaScript API** (like `fetch`, a `Map`, or a `Timeout`) you are configuring so I can provide the exact type declaration syntax.

- [link](https://www.typescriptlang.org/docs/handbook/basic-types.html)\
  Handbook - Basic Types - TypeScript\
  Jun 15, 2026 — On this page \* Boolean. \* Number. \* String. \* Array. \* Tuple. \* Enum. \* Unknown. \* Any. \* Void. \* Null and Undefined. \* Never. \* O...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)\
  Documentation - Everyday Types - TypeScript\
  Jun 15, 2026 — JavaScript has three very commonly used primitives: string , number , and boolean . Each has a corresponding type in TypeScript. A...\
  TypeScript
- [link](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html)\
  TypeScript: Documentation - Type Declarations\
  Jun 1, 2026 — Built-in Type Definitions TypeScript includes declaration files for all of the standardized built-in APIs available in JavaScript ...\
  TypeScript

Show all

# does the latest react run effect twice during dev

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, the latest versions of React (including React 18 and React 19) intentionally run effects twice during development</strong></mark>**.** This behavior occurs specifically when [React Strict Mode](https://react.dev/reference/react/StrictMode) is enabled, which is the default setup for almost all modern React project templates. \[[1](https://react.dev/reference/react/StrictMode), [2](https://dev.to/pockit%5Ftools/why-is-useeffect-running-twice-the-complete-guide-to-react-19-strict-mode-and-effect-cleanup-1n60), [3](https://stackoverflow.com/questions/62631053/useeffect-being-called-multiple-times), [4](https://sentry.io/answers/react-useeffect-running-twice/)]

### Why React Does This

The React team introduced this to **stress-test your components** and help you catch bugs early. In development, React will immediately execute a cycle of: \[[1](https://www.linkedin.com/posts/hrithikagarwal%5Freact-strict-mode-why-does-my-component-activity-7372523746827436032-t-o4), [2](https://dev.to/pockit%5Ftools/why-is-useeffect-running-twice-the-complete-guide-to-react-19-strict-mode-and-effect-cleanup-1n60), [3](https://medium.com/@evansosei0707/why-is-useeffect-running-twice-in-react-18-the-real-reason-behind-it-and-how-to-handle-it-c31aa96fe383)]

1. `mount` (runs your effect setup)
2. `unmount` (runs your effect cleanup)
3. `remount` (runs your effect setup a second time) \[[1](https://taig.medium.com/prevent-react-from-triggering-useeffect-twice-307a475714d7), [2](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)]

This ensures your effects are **idempotent** and resilient to being created and destroyed. It uncovers memory leaks, missing cleanup functions, or issues that would otherwise break when users navigate back and forth in production. \[[1](https://www.youtube.com/watch?v=xlyitEaN2ac), [2](https://taig.medium.com/prevent-react-from-triggering-useeffect-twice-307a475714d7), [3](https://www.linkedin.com/posts/hrithikagarwal%5Freact-strict-mode-why-does-my-component-activity-7372523746827436032-t-o4), [4](https://dev.to/pockit%5Ftools/why-is-useeffect-running-twice-the-complete-guide-to-react-19-strict-mode-and-effect-cleanup-1n60), [5](https://sentry.io/answers/react-useeffect-running-twice/)]

***

### How to Deal With It Correctly

Instead of trying to force the effect to run once, the correct mindset is to ensure that running it twice does not break your application. \[[1](https://www.reddit.com/r/reactjs/comments/1epir3s/why%5Fis%5Fmy%5Fuseeffect%5Fbeing%5Fcalled%5Ftwice%5Feven/), [2](https://medium.com/@evansosei0707/why-is-useeffect-running-twice-in-react-18-the-real-reason-behind-it-and-how-to-handle-it-c31aa96fe383)]

### 1. Always Write a Cleanup Function

If your effect connects to something, your cleanup function must disconnect from it. \[[1](https://itspatricku.medium.com/react-18-and-my-useeffects-run-twice-45a9f5c5b313)]

javascript

```
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();

  // Cleanup function fixes the double-trigger issue safely
  return () => dialog.close();
}, []);
```

Use code with caution.

### 2. Cancel or Ignore API Fetches \[[1](https://www.dhiwise.com/post/solving-the-error-can't-perform-a-react-state-update)]

If you are fetching data inside an effect, use an `AbortController` to cancel the first request, or use a local boolean flag to ignore the result. \[[1](https://www.reddit.com/r/reactjs/comments/wa7371/useeffect%5Fempty%5Fdependencies%5Ftriggers%5Ftwice%5Fand/), [2](https://itspatricku.medium.com/react-18-and-my-useeffects-run-twice-45a9f5c5b313)]

javascript

```
useEffect(() => {
  let ignore = false;

  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      if (!ignore) setData(data);
    });

  return () => {
    ignore = true; // Prevents updating state on an unmounted component
  };
}, []);
```

Use code with caution.

### 3. Use Modern Alternatives

In modern React development, you should generally try to avoid using useEffect for data fetching. \[[1](https://www.reddit.com/r/reactjs/comments/1epir3s/why%5Fis%5Fmy%5Fuseeffect%5Fbeing%5Fcalled%5Ftwice%5Feven/), [2](https://dev.to/parsajiravand/react-in-2026-start-from-scratch-the-right-way-cheat-sheet-2j9f)]

- For fetching data, use frameworks like Next.js/Remix, or libraries like TanStack Query (React Query) which handle caching and deduplicate requests automatically.
- For form submissions or user events, handle the logic inside **event handlers** or React 19 Actions rather than tracking them via state-driven effects. \[[1](https://www.reddit.com/r/reactjs/comments/1f1hdom/how%5Fdo%5Fyou%5Fdeal%5Fwith%5Fstrict%5Fmode%5Fdouble%5Fuseeffect/), [2](https://dev.to/parsajiravand/react-in-2026-start-from-scratch-the-right-way-cheat-sheet-2j9f), [3](https://medium.com/@sudhisudhi0834/react-18-vs-react-19-whats-new-and-why-it-matters-fad12a33b4d4), [4](https://www.moravio.com/blog/react-18-new-features-in-real-working-projects-the-good-and-the-issues), [5](https://www.reddit.com/r/reactjs/comments/1pnkm1c/common%5Fuseeffect%5Fantipatterns%5Fi%5Fsee%5Fin%5Fcode/)]

***

### How to Turn It Off (Not Recommended)

If you have a specific reason to disable this behavior, you can remove the tags wrapping your application component tree (usually located in your `main.jsx` or `index.js` file). However, keeping it enabled is highly recommended to protect your production app from hidden bugs. \[[1](https://www.reddit.com/r/reactjs/comments/13s4sz4/anyone%5Felse%5Fsick%5Fof%5Fhooks%5Frunning%5Ftwice%5Fin/), [2](https://www.reddit.com/r/reactjs/comments/wa7371/useeffect%5Fempty%5Fdependencies%5Ftriggers%5Ftwice%5Fand/), [3](https://www.reddit.com/r/reactjs/comments/1epir3s/why%5Fis%5Fmy%5Fuseeffect%5Fbeing%5Fcalled%5Ftwice%5Feven/)]

Would you like help rewriting a **specific effect** that is giving you trouble, or do you want to see how to handle **event-driven logic** without an effect?

- [link](https://taig.medium.com/prevent-react-from-triggering-useeffect-twice-307a475714d7)\
  Prevent React from triggering useEffect twice | Medium\
  Jan 14, 2023 — What is actually happening? When you have the Strict Mode enabled (which you should), React performs additional runtime checks in ...\
  Medium·Niklas Klein
- [link](https://www.reddit.com/r/reactjs/comments/1epir3s/why%5Fis%5Fmy%5Fuseeffect%5Fbeing%5Fcalled%5Ftwice%5Feven/)\
  Why is my useEffect being called twice, even though im not on ...\
  Aug 11, 2024 — React also does this if you're in dev mode, so if you're running your app in dev mode, you'll also be exhibiting this behaviour. A...\
  Reddit·r/reactjs
- [link](https://www.youtube.com/watch?v=xlyitEaN2ac)\
  Why Does React Render Components Twice? #reactjs # ...\
  Sep 3, 2023 — have you ever wondered why React renders your components twice. when you open them this happens because of React's strict mode whi...\
  1:01\
  YouTube·Coding in Flow

Show all

## You said: why does the error disappear when i reload the page. i use parceljs.

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>The error disappears on reload because refreshing the page completely resets your application's state, whereas Parcel’s Fast Refresh retains your state between file saves.</strong></strong></mark>

When you save a file, [Parcel's Hot Module Replacement (HMR)](https://parceljs.org/features/development/) patches your updated code into the running browser tab without forcing a full refresh. This creates a specific side effect: **it keeps your old application state alive.** \[[1](https://parceljs.org/features/development/)]

Here is exactly why this combo causes an error that vanishes on reload:

### 1. The Fast Refresh "Stale State" Bug

If you write a bug (like mutating an array directly or making an incorrect API call), that corrupted state gets stored in your active browser tab.

- **When you save a fix:** Parcel injects your new code, but React tries to re-render using that _already-corrupted_ state still sitting in memory. The error persists.
- **When you reload:** The entire browser memory is wiped. React starts with a completely clean, fresh state, so the error disappears. \[[1](https://parceljs.org/features/development/)]

### 2. Effects Duplicating via HMR

Because [React Strict Mode](https://react.dev/reference/react/StrictMode) mounts, unmounts, and remounts your components, using it alongside a hot-reloader like Parcel can sometimes compound setup logic if you don't clean it up. \[[1](https://parceljs.org/features/development/), [2](https://www.youtube.com/watch?v=3JyRV3ZiIss)]

- If your `useEffect` attaches a global event listener, instantiates a WebSocket, or appends a DOM element **without a cleanup function**, saving a file in Parcel can cause those items to pile up in memory.
- Eventually, the browser crashes or throws a duplicate key/event error.
- Reloading the page clears the duplicated listeners or DOM elements entirely, making the app work normally again. \[[1](https://parceljs.org/features/development/), [2](https://www.youtube.com/watch?v=3JyRV3ZiIss)]

***

### How to Fix It

To stop this from breaking your development flow, apply these three habits:

- **Always write a cleanup return:** Ensure every `useEffect` that establishes a connection or listener destroys it on unmount. \[[1](https://www.youtube.com/watch?v=3JyRV3ZiIss)]
- **Look at the console right after a hard refresh:** A full reload reveals the _true_ state of your app. If the error doesn't happen on a clean reload, your code logic is likely correct, and you were just seeing cached HMR artifacts. \[[1](https://parceljs.org/features/development/)]
- **Separate non-React exports:** If a file exports both a React Component and a plain JavaScript object/variable, Parcel's Fast Refresh can fail and behave unpredictably. Move plain variables or configurations into their own separate utility files. \[[1](https://www.reddit.com/r/nextjs/comments/14th212/how%5Fto%5Fdiagnose%5Ffast%5Frefresh%5Fhad%5Fto%5Fperform%5Fa/), [2](https://github.com/parcel-bundler/parcel/issues/4146)]

Are you seeing a specific error message (like a **duplicate key**, **null pointer**, or **network error**) when you save your files? If you share the error message or the code inside your component, I can point out exactly what is leaking or getting stuck in your state.

- [link](https://www.youtube.com/watch?v=3JyRV3ZiIss)\
  Why useEffect running twice and how to handle it well in ...\
  Dec 10, 2024 — hey there welcome back to IAST. today we are diving into a common rack challenge that many developers face the use effect hook run...\
  10:09\
  YouTube·AyyazTech
- [link](https://parceljs.org/features/development/)\
  Development - Parcel\
  As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default,\
  Parcel.js
- [link](https://www.reddit.com/r/nextjs/comments/14th212/how%5Fto%5Fdiagnose%5Ffast%5Frefresh%5Fhad%5Fto%5Fperform%5Fa/)\
  How to Diagnose "Fast Refresh had to perform a full reload"?\
  Jul 7, 2023 — According to a Reddit user, you might be getting "Fast Refresh had to perform a full reload" warnings in your dev logs because: \* ...\
  Reddit

Show all

## You said: i mean i guess my cleanup might be flawed. but i do nothing and reload. it's fixed.

That is exactly the hallmark of a **state leak or event leak** in development! Doing absolutely nothing to the code and just hitting reload fixes it because a browser refresh wipes away the "ghosts" created by the combination of React Strict Mode and Parcel.

When you edit code, Parcel injects the changes without refreshing. This means your component **unmounts and remounts** behind the scenes. If your cleanup function has even a tiny gap, the old code's effects are left running in the background alongside the new code's effects.

Here are the three most common "invisible leaks" that pile up during development and vanish instantly on a reload:

### 1. Global Event Listeners (`window` or `document`)

If you attach an event listener to the global `window` object, it stays there forever until the tab is closed or reloaded.

javascript

```
useEffect(() => {
  // If this runs 5 times due to Parcel updates, you now have 5 listeners
  window.addEventListener('resize', handleResize);

  // FLAW: If you forget this, the old listeners keep firing old code!
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

Use code with caution.

On a reload, the browser destroys the `window` object and builds a fresh one, deleting all the duplicate listeners you accidentally accumulated.

### 2. Double timers (`setInterval` or `setTimeout`)

If your effect kicks off an interval, every single time Parcel hot-reloads your file, a _new_ background timer is spawned.

- The old timers don't stop; they keep ticking and trying to trigger state updates on components that technically don't exist anymore.
- This leads to chaotic state updates and console errors. A page reload kills all background timers instantly.

### 3. Non-React DOM Mutations

If your effect manually pushes elements into the DOM (like mounting a third-party chart, a Leaflet map, or appending a modal div to `document.body`), that element sticks around.

- When Parcel reloads, the effect runs again and appends _another_ copy of the element.
- Suddenly, your layout breaks or libraries throw "Node already exists" errors. Reloading gives you a clean HTML file again.

***

### How to verify your cleanup is the issue

You can prove if your cleanup is the culprit with a quick test. Add a console log to both your setup and cleanup:

javascript

```
useEffect(() => {
  console.log("🟢 EFFECT SETUP RUNNING");

  return () => {
    console.log("🔴 EFFECT CLEANUP RUNNING");
  };
}, []);
```

Use code with caution.

If you save a file in Parcel and see **🟢 SETUP** print in your console, but you **do not** see **🔴 CLEANUP** right before it, your cleanup logic is being bypassed or is failing.

Would you like to drop the code for your `useEffect` here? We can check it together to see if there is an accidental leak hiding in it!

## You said: now it's fixed, and i see my cleanup \*is\* flawed

It is a great feeling when you catch the root cause! Finding out that the cleanup is flawed is a huge win because it explains exactly why those "ghost bugs" were haunting your Parcel development server.

Since you confirmed the cleanup isn't working quite right, here is a quick checklist of the most common reasons a cleanup function fails or gets bypassed:

### 1. The Variable Reference Changed

This is the number one trap in React. If you reference something in your cleanup that changed during the render, you might be trying to clean up the wrong thing.

javascript

```
// ❌ FLAWED: The ref value might change before cleanup runs
useEffect(() => {
  myRef.current.addEventListener('scroll', handleScroll);
  return () => myRef.current.removeEventListener('scroll', handleScroll);
}, []);

//  FIX: Capture the element in a local variable inside the effect
useEffect(() => {
  const element = myRef.current;
  element.addEventListener('scroll', handleScroll);
  return () => element.removeEventListener('scroll', handleScroll);
}, []);
```

Use code with caution.

### 2. Missing Dependencies

If your cleanup relies on a specific state or prop variable, but you left that variable out of the dependency array `[]`, the cleanup function gets trapped in a closure with stale data. It might try to remove a listener or clear an ID that doesn't match reality anymore.

### 3. Asynchronous Code Finished Too Late

If you start a promise or an API fetch, you cannot stop the network request itself from completing natively without an `AbortController`. If the request finishes after the component has already unmounted, it will try to touch state or DOM that is no longer there. \[[1](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)]

***

If you want to paste the code for that specific `useEffect` block, we can spot exactly where the leak is happening and rewrite it so it survives both React Strict Mode and Parcel's hot-reloading perfectly! **What does the effect do?**

- [link](https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm)\
  React useEffect cleanup: How and when to use it\
  May 14, 2020 — Don't update the state on an unmounted component One common implementation is to update the component state once an async function...\
  \
  \
  DEV Community

## You said: i forget to define some types, and it's within ts's reach

That makes total sense! When TypeScript types are missing or set to implicit `any`, it creates a silent blind spot right where React and Parcel interact.

In a `useEffect`, missing types usually break your cleanup in one of two ways:

### 1. The `any` Reference Trap

If TypeScript doesn't know the exact type of a variable or a ref object, it can't warn you if your cleanup method is slightly misspelled or mismatched.

- For example, typing something as `any` allows you to call `.off()` instead of `.removeEventListener()`, or `.disconnect()` instead of `.clear()`.
- TypeScript won't flag it as an error during compilation, but the browser will quietly fail to execute the cleanup at runtime. \[[1](https://betterstack.com/community/guides/scaling-nodejs/typescript-interfaces/)]

### 2. Event Listener Signature Mismatches

If your handler functions don't have explicit parameter types, TypeScript can't verify if the function you are passing to `removeEventListener` exactly matches the one you passed to `addEventListener`. If the signatures don't align, the browser treats them as two completely different functions and refuses to remove the old listener.

***

### Quick Fix: Explicitly Type Your Refs and Timers

To bring this back within TypeScript's safety net, make sure your React refs and background handles are explicitly typed:

**For DOM Elements:**

typescript

```
// Explicitly type the HTML element so TS knows exactly what methods exist
const elementRef = useRef<HTMLDivElement | null>(null);
```

Use code with caution.

**For Timers (`setTimeout` / `setInterval`):**

typescript

```
// In a browser environment, use ReturnType<typeof setTimeout>
const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
```

Use code with caution.

**For Event Handlers:**

typescript

```
// Explicitly type your event object to prevent signature mismatches
const handleScroll = (event: Event) => {
  // logic here
};
```

Use code with caution.

Once those types are explicitly declared, TypeScript will immediately highlight any broken paths or typos in your cleanup function right inside your editor, preventing Parcel from getting stuck.

What kind of object or API were you working with inside the effect? If you want, we can write out the **exact TypeScript interface or ref definition** for it so you don't have to worry about it leaking again.

- [link](https://betterstack.com/community/guides/scaling-nodejs/typescript-interfaces/)\
  Interfaces in TypeScript\
  Nov 21, 2025 — TypeScript compiles successfully without errors because the function parameter has implicit any type. The compiler treats the para...\
  \
  \
  Better Stack

## You said: i mean why it's false positive when reload

The reason TypeScript’s missing types caused a "false positive" (working perfectly on reload, but throwing errors during hot-reloads) is due to how **JavaScript closures** and **module caching** behave when Parcel patches your code in real-time.

When you don't define your types, TypeScript cannot guide you, leaving JavaScript to fall into one of two silent runtime traps during development:

### 1. The Retained Closure Trap (Stale Code)

Without explicit types, it is incredibly easy to accidentally create a closure that captures an old version of a variable or function.

- **During a Hot-Reload:** Parcel injects your new code, but because your cleanup function was flawed, the _old, implicitly typed function_ is still actively running in the browser's memory. It attempts to read variables or call methods that no longer exist in the new version of your code, triggering a runtime error.
- **During a Reload:** The browser flings away the old code and memory entirely. The app starts fresh, executes your latest code _once_, and because there is no older code running concurrently to clash with it, no error is triggered.

### 2. The Shared Module State Trap

If you initialize a variable outside of your component (at the top of the file) without proper typing, it becomes a global variable within that module's scope.

typescript

```
// If this is untyped/implicitly handled outside the component:
let connection;

export const MyComponent = () => {
  useEffect(() => {
    connection = connectToService(); // Sets the module-level variable
  });
};
```

Use code with caution.

- **During a Hot-Reload:** Parcel swaps the component code, but it **caches and preserves** that module-level `connection` variable in the background. Your new code tries to re-assign or read from a connection that was instantiated by dead code, crashing your app.
- **During a Reload:** The module is re-evaluated from scratch. `let connection` starts as `undefined`, preventing the collision.

***

### Summary

The error wasn't a fake bug—it was a **real memory leak** that only exposed itself when the app was updated alive. Reloading simply swept the leak under the rug by resetting the clock.

By defining your types, TypeScript forced you to align your references properly, which naturally fixed the memory leak and made your code resilient to hot-reloading!

Now that the types are locked in, is your project building cleanly in production mode as well, or are you running into any other TypeScript strictness warnings with Parcel?

## You said: i mean it's actually "read from undefined" as i accidentally wrapped an object one layer further. only cleanup triggers this. why reload fixes.

Ah! That makes perfect sense. The classic `Cannot read property of undefined` error because an object was nested one layer deeper than expected (like `data.user.name` instead of `data.name`). \[[1](https://github.com/nexus-mods/vortex/issues/19148)]

The reason this exploded **only during cleanup** and was **instantly fixed by a reload** comes down to how React handles unmounting during a Parcel Hot-Reload versus a fresh page refresh.

Here is exactly what happened step-by-step:

### 1. During a Hot-Reload (Why it crashes)

When you edit a file and save it, Parcel triggers a "Fast Refresh." React wants to replace the old component with your new one, so it must **unmount the old component first**.

1. React triggers the **cleanup function of the old code**.
2. Because your object was accidentally wrapped one layer deeper, your cleanup code tries to read a property from `undefined` (e.g., trying to call `cleanupRef.current.destroy()`, but `current` is `undefined`).
3. **Boom!** The app crashes right there in the browser. \[[1](https://github.com/woocommerce/woocommerce/issues/64537)]

Because it crashed _during_ the hot-reload process, the screen freezes, showing you the error. \[[1](https://github.com/ChilliCream/graphql-platform/issues/5803)]

### 2. During a Reload (Why it "fixes" itself)

When you hit the refresh button in your browser, you are doing a **hard reset** on the entire environment.

1. The browser completely destroys the JavaScript runtime, the memory, and the DOM.
2. Because the browser is violently tearing down the whole tab, **React does not run component cleanup functions.**
3. The page loads completely fresh with your latest, corrected code.
4. Since the old, broken cleanup function never gets a chance to execute, the error never triggers, and everything looks perfectly fixed! \[[1](https://medium.com/@ashishjadhav28999/fixing-popup-state-loss-in-vue-js-after-hard-refresh-a-real-world-mobile-ui-challenge-979a7469fdd8), [2](https://stackoverflow.com/questions/79737518/will-calling-window-location-reload-trigger-the-clean-up-function-inside-a-use)]

### Summary

The error was sitting like a landmine inside the old cleanup code. A hot-reload stepped right on the landmine by forcing the old cleanup to run. A page reload bypassed the landmine completely by wiping out the whole map and starting over.

It is a classic React development trap, but now you know exactly why it happens! Are your types and nesting all lined up correctly now, or is there any other part of that object structure giving you trouble? \[[1](https://medium.com/beingcoders/how-to-fix-ng-ps1-cannot-be-loaded-error-in-angular-on-windows-15b9cf71408e)]

- [link](https://github.com/nexus-mods/vortex/issues/19148)\
  error: Cannot read properties of undefined (reading 'isFileInUse') Affected dependencies: input\_loader\_v0.2.3.zip-4575-0-2-3-1752939429, redscript-1511-0-5-31-1757113888, BrowserExtensionFramework-10038-0-9-6-1757050385, CET 1.37.0 - Patch 2.31-107-1-37- · Issue #19148 · Nexus-Mods/Vortex\
  Dec 25, 2025 — Activity BinToss IDCs IDCs mentioned this mentioned this closed this as completed in #19228 on Dec 26, 2025 on Jan 5 on Jan 8 erro...\
  \
  GitHub
- [link](https://github.com/woocommerce/woocommerce/issues/64537)\
  Checkout broken when global \`wc\` is shadowed: \`wc.customPlaceOrderButton.\_\_cleanup is undefined\` regression in 10.7.0 · Issue #64537 · woocommerce/woocommerce\
  May 1, 2026 — Console: TypeError: Cannot read properties of undefined (reading '\_\_cleanup') from checkout. min. js:1:1092 , originating at the i...\
  \
  \
  GitHub
- [link](https://github.com/ChilliCream/graphql-platform/issues/5803)\
  Hot Reload -- Operation is not valid due to the current state of the object · Issue #5803 · ChilliCream/graphql-platform\
  Feb 7, 2023 — The only way this exception @glen-84 mentions Operation is not valid due to the current state of the object. could be triggered is...\
  \
  \
  GitHub

Show all

## You said: does it actually run twice

\*\***No, the cleanup function does not run during a full page reload.**

When you hit refresh, the browser immediately destroys the entire JavaScript memory heap and tears down the page. It does not wait for React to gracefully unmount components, so your cleanup functions are completely skipped.

The "running twice" behavior only happens during **active development inside the running page** in two specific scenarios:

### 1. The Strict Mode Double-Run (On Mount)

When your page first loads (or reloads), React Strict Mode intentionally runs your effect cycle twice **forward** to test it: \[[1](https://unwiredlearning.com/blog/react-strict-mode)]

1. Mount (Setup)
2. Unmount (**Cleanup runs here**)
3. Remount (Setup)

During this initial page load, your cleanup _did_ run, but it didn't crash your app because your state and refs were freshly initialized and valid.

### 2. The Parcel Hot-Reload (On Save)

When you edited your code and saved the file, Parcel forced a live swap. To do this, React had to tear down the old component:

1. Unmount (**Old Cleanup runs here**) ❌ _CRASH_

Because your object structure was broken in that specific version of the code, stepping on this cleanup step caused the crash.

### Why the Reload "Fixed" It

When you clicked reload after it crashed, the browser wiped the memory, skipped the broken cleanup entirely, and loaded your newly corrected code from scratch.

Are you all set with this component now, or would you like to double-check how to **safely guard** your cleanup functions against `undefined` errors in the future?

- [link](https://unwiredlearning.com/blog/react-strict-mode)\
  React Strict Mode: Why useEffect Runs Twice in Dev\
  Feb 10, 2026 — This confirms React is testing your cleanup logic. Key Takeaways React Strict Mode is a development helper, not a bug. It intentio...\
  \
  \
  Unwired Learning

## You said: how to make it strict

To make TypeScript or React "strict" and catch these nested object and `undefined` errors before they ever hit the browser, you need to enable strict settings in two places: <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">TypeScript (<code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">tsconfig.json</code>)</strong> and <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">React (<code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">main.tsx</code> / <code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">index.tsx</code>)</strong></mark>.

Here is exactly how to lock both down.

***

### 1. Make TypeScript Strict (Catch Nested Typos)

To force TypeScript to error out when you try to read properties from an object that might be `undefined` (like your nested object issue), you must enable **`strictNullChecks`** and **`strict`** mode.

Open your `tsconfig.json` file in the root of your Parcel project and update your `compilerOptions`:

json

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],

    /* 🔴 THE STRICTION CONTROLS */
    "strict": true,                  // Enables a broad suite of type-checking behaviors
    "strictNullChecks": true,        // Disallows reading properties of undefined/null
    "noImplicitAny": true,           // Forces you to type variables instead of letting them slide as 'any'
    "noUnusedLocals": true,          // Errors if you declare a variable but don't use it

    "moduleResolution": "NodeNext",
    "jsx": "react-jsx"
  }
}
```

Use code with caution.

### What this does to your code:

If you accidentally wrap an object one layer too deep, TypeScript will immediately highlight the code in red in your IDE and **Parcel will refuse to build**, showing this error in your terminal:

> `Object is possibly 'undefined'.`

***

### 2. Make React Strict (Force the Double-Run)

To guarantee that React stress-tests your cleanups by running them twice in development, ensure your root component is wrapped in . \[[1](https://www.upgrad.com/blog/react-strict-mode/), [2](https://blogs.purecode.ai/blogs/react-strict-mode)]

Open your entry file (usually `index.tsx` or `main.tsx`) and check your setup:

typescript

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  </StrictMode>
);
}
```

Use code with caution.

***

### 💡 Pro-Tip: Defend Your Cleanup Logic

Even with strict mode on, cleanup functions run during unmounting when state might already be clearing out. To completely immunize your cleanup blocks against `Cannot read property of undefined`, use JavaScript's **optional chaining (`?.`)**:

typescript

```
useEffect(() => {
  const channel = apiRef.current?.connection;
  channel?.subscribe();

  return () => {
    // 🛡️ The '?.' safely aborts if channel or unsubscribe is undefined
    channel?.unsubscribe?.();
  };
}, []);
```

Use code with caution.

Would you like help setting up a **linter (ESLint)** to automatically catch unhandled promises or missing dependencies in your effects as well?

- [link](https://www.upgrad.com/blog/react-strict-mode/)\
  React Strict Mode: Key Benefits and How to Use It Right\
  Aug 29, 2025 — Explanation: This React code demonstrates how Strict Mode intentionally runs the useEffect cleanup and setup twice during developm...\
  \
  \
  upGrad
- [link](https://blogs.purecode.ai/blogs/react-strict-mode)\
  How React Strict Mode Works For Great Development - Blogs\
  Feb 19, 2024 — Enable at the Top Level: Wrap your entire application or the root component with to apply the Strict Mode checks throughout the co...\
  \
  \
  Purecode.AI

## You said: does react take the strict prop from tsconfig and run twice by default

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, React does not read your <code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">tsconfig.json</code> at all.</strong></mark> They are completely independent tools. \[[1](https://stackoverflow.com/questions/76598366/is-there-any-way-to-check-if-react-strict-mode-is-enforced-in-typescript), [2](https://js2ts.com/typescript-strict-mode)]

The `"strict": true` setting in your `tsconfig.json` is **strictly for type-checking at compile time**. TypeScript strips away all type rules when your code compiles, so it cannot change how React runs in the browser. \[[1](https://oneuptime.com/blog/post/2026-01-15-strict-typescript-configuration-react/view), [2](https://www.typescriptlang.org/tsconfig/strict.html), [3](https://js2ts.com/typescript-strict-mode)]

### The True Defaults

React runs effects twice _solely_ because modern project templates (like Vite, Next.js, or Create React App) automatically generate a `main.tsx` or `index.js` file that explicitly wraps your application inside code tags: \[[1](https://unwiredlearning.com/blog/react-strict-mode), [2](https://stackoverflow.com/questions/53183362/what-is-strictmode-in-react)]

tsx

```
// This HTML-like component tag is what actually forces the double-run
<React.StrictMode>
  <App />
</React.StrictMode>
```

Use code with caution.

If you delete from your layout, your components will immediately stop running twice in development, **even if `"strict": true` is enabled in your TypeScript configuration**. \[[1](https://sentry.io/answers/react-useeffect-running-twice/), [2](https://chanduthedev.medium.com/why-react-app-rendering-twice-e31339ed9461)]

### How the Two "Stricts" Compare

| Tool \[[1](https://www.typescriptlang.org/tsconfig/strict.html), [2](https://dev.to/krunalkanojiya/how-to-enable-strict-mode-and-why-you-should-always-use-it-4fc1), [3](https://oneuptime.com/blog/post/2026-01-15-strict-typescript-configuration-react/view), [4](https://js2ts.com/typescript-strict-mode), [5](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/), [6](https://unwiredlearning.com/blog/react-strict-mode), [7](https://taig.medium.com/prevent-react-from-triggering-useeffect-twice-307a475714d7)] | Trigger                             | Primary Purpose                                                               | Impact on Browser Runtime                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **TypeScript Strict**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `"strict": true` in `tsconfig.json` | Catches typos, unhandled `undefined` data, and type gaps in your code editor. | **None.** The browser never sees this configuration.                      |
| **React Strict Mode**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | wrapper in your entry JSX file      | Exposes hidden memory leaks, uncleaned intervals, and flawed effects.         | **High (Dev only).** Intentionally forces code components to mount twice. |

Now that your TypeScript configurations are solid, do you want to ensure your layout correctly includes the tags, or are you ready to jump back into debugging your application features? \[[1](https://unwiredlearning.com/blog/react-strict-mode)]

- [link](https://taig.medium.com/prevent-react-from-triggering-useeffect-twice-307a475714d7)\
  Prevent React from triggering useEffect twice | Medium\
  Jan 14, 2023 — React 18.0 introduced a new development-only check to Strict Mode. This check automatically unmounts and remounts every component ...\
  Medium
- [link](https://sentry.io/answers/react-useeffect-running-twice/)\
  React useEffect running twice - Sentry\
  Feb 15, 2024 — Although it is not recommended, in React 18 you can disable Strict Mode by removing the tag from the return statement in your root...\
  Sentry
- [link](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)\
  What is React Strict Mode, and why is my Application Double Re-Rendering?\
  Jun 19, 2024 — React StrictMode is a development tool that helps identify potential issues in React applications. It applies a set of behaviors a...\
  SciChart

Show all

## You said: what? does react run twice if i just write code normally

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Yes, React will run your effects twice if you just write code normally.</strong></strong></mark> \[[1](https://dev.to/jahid6597/why-useeffect-is-running-twice-in-react-18c6)]

The reason it feels like it happens "by default" is because almost every tool you use to start a project automatically turns it on for you.

Here is exactly how it works:

### 1. The React Code Itself

If you create a component file and write a normal `useEffect` block, React's core library doesn't inherently know whether it is in development or production.

javascript

```
// This is just normal code
useEffect(() => {
  console.log("Hello!");
}, []);
```

Use code with caution.

### 2. The Invisible "Helper" (Why it runs twice)

When you start a modern project using a template or tool (like Vite, Next.js, or Create React App), the generator secretly creates a root file for you (usually called `index.js`, `main.tsx`, or `app.js`).

Inside that file, it wraps your entire application inside a component tag called . \[[1](https://unwiredlearning.com/blog/react-strict-mode)]

jsx

```
// This wrapper is added automatically by project templates
<StrictMode>
  <App />
</StrictMode>
```

Use code with caution.

Because that tag is sitting at the very top of your project, **every single component you write normally underneath it will run its effects twice during development.** It acts as a blanket rule for your whole codebase. \[[1](https://news.ycombinator.com/item?id=42331207)]

### How to Check Your Project

Since you are using **Parcel**, look inside your project's main entry file (the one that hooks into your `index.html`). \[[1](https://ramajha.medium.com/the-5-minute-guide-to-starting-a-react-project-fa68b4e79126)]

- If you see or wrapped around your , your code will run twice.
- If you delete those tags and just render by itself, your code will instantly drop down to running only once. \[[1](https://dev.to/dristy03/using-useeffect-hook-avoiding-excessive-re-rendering-3khm)]

If you want, you can check that root entry file right now. Does your Parcel project have the tags wrapping your app components?

- [link](https://dev.to/jahid6597/why-useeffect-is-running-twice-in-react-18c6)\
  Why useeffect is running twice in react\
  Feb 11, 2023 — Yes, when using React ( react, javascript ) . StrictMode in development, your components will be rendered twice, causing useEffect...\
  \
  \
  DEV Community
- [link](https://unwiredlearning.com/blog/react-strict-mode)\
  React Strict Mode: Why useEffect Runs Twice in Dev\
  Feb 10, 2026 — These checks are completely removed in production builds, so they don't affect performance for your users. Everything wrapped insi...\
  \
  \
  Unwired Learning
- [link](https://news.ycombinator.com/item?id=42331207)\
  React 19\
  Dec 5, 2024 — StrictMode unmounts and remounts every component causing every useEffect to fire at least twice. Which means a useEffect with an e...\
  \
  Hacker News

Show all

## You said: well, only one run in console. export function App() {

useEffect(()=>{\
console.log('run')\
})

No. If your snippet only prints `'run'` **exactly once** in the console on a fresh page load, then **React Strict Mode is not active in your project.**

Unlike frameworks like Next.js or Vite (which build Strict Mode in by default), a plain **Parcel setup is 100% zero-config.** It does not generate or inject for you. If you just write standard React code and mount it to the DOM, React will defaults to running your effects exactly **once**. \[[1](https://www.linkedin.com/posts/priyanshu-mishra-27613b1b6%5Freact-parcel-frontend-activity-7370873549265362944-GlJo)]

tsx

```
// Your code:
export function App() {
  useEffect(() => {
    console.log('run'); // Only runs ONCE because StrictMode is missing
  });
}
```

Use code with caution.

### Why it crashed during the hot-reload anyway

Even without Strict Mode forcing a double-run on page load, **Parcel's Hot Module Replacement (HMR)** forces an unmount when you edit your file.

1. You saved your code changes.
2. Parcel tore down the old component tree, which **forced the broken cleanup function to run**.
3. The app crashed because of the nesting issue (`undefined` error).
4. You hit refresh. The page loaded clean, ran your effect _once_, and bypassed the cleanup entirely because you didn't trigger another hot-reload. \[[1](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)]

### How to turn on the double-run check

If you _want_ React to catch these cleanup errors automatically the moment the page loads, you have to manually wrap your entry file in : \[[1](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)]

tsx

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Manually wrap it here to get the double-run benefit
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Use code with caution.

Once you add those tags, that console log will instantly switch to printing **twice** every time you refresh the page! \[[1](https://www.reddit.com/r/reactjs/comments/1as97tw/console%5Flogging%5Ftwice%5Feven%5Fthough%5Fi%5Flog%5Fit%5Fonly/), [2](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)]

Are you planning to add `StrictMode` to keep stress-testing your cleanups, or are you happy keeping it at a single run for now? \[[1](https://www.reddit.com/r/reactjs/comments/1as97tw/console%5Flogging%5Ftwice%5Feven%5Fthough%5Fi%5Flog%5Fit%5Fonly/)]

- [link](https://www.reddit.com/r/reactjs/comments/1as97tw/console%5Flogging%5Ftwice%5Feven%5Fthough%5Fi%5Flog%5Fit%5Fonly/)\
  Console Logging twice even though I log it only once?\
  Feb 16, 2024 — According to a Reddit user, console logging twice even though you only log it once is due to React's Strict Mode: \* \*\*Multiple run...\
  Reddit
- [link](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)\
  What is React Strict Mode and why is my App Double Re ...\
  Jun 19, 2024 — What is Strict Mode in React? React StrictMode applies a set of behaviours and warnings that can help spotting different kinds of ...\
  SciChart
- [link](https://www.linkedin.com/posts/priyanshu-mishra-27613b1b6%5Freact-parcel-frontend-activity-7370873549265362944-GlJo)\
  Seamless React project with Parcel: Zero config, fast builds\
  Sep 8, 2025 — ✨ Key Highlights of Parcel: Zero configuration setup Native support for React, TypeScript, CSS, and images Hot module replacement ...\
  LinkedIn·Priyanshu Mishra

## You said: can it toggle it on parcel

Because Parcel is designed to be zero-configuration, **there is no configuration setting or feature flag in Parcel to toggle React Strict Mode.** \[[1](https://cravencode.com/post/javascript/react-with-parcel-bundler/), [2](https://medium.com/@robinviktorsson/setting-up-a-modern-typescript-project-with-parcel-as-bundler-no-framework-b56055890eff)]

Since Parcel only acts as a compiler for your files, it has no direct control over React's runtime behavior. To toggle it dynamically without manually editing the JSX tags every time, you can implement a toggle yourself directly inside your codebase. \[[1](https://parceljs.org/recipes/react/)]

### Method 1: The Dev Environment Toggle (Most Popular)

You can use an environment variable to automatically enable Strict Mode in development, while keeping it off elsewhere.

Parcel automatically exposes `process.env.NODE_ENV`. Update your main entry file (like `index.tsx`) to conditionally apply the wrapper: \[[1](https://parceljs.org/recipes/react/)]

tsx

```
import { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// If in dev mode, use StrictMode. Otherwise, use an empty Fragment.
const Wrapper = process.env.NODE_ENV === 'development' ? StrictMode : Fragment;

createRoot(document.getElementById('root')!).render(
  <Wrapper>
    <App />
  </Wrapper>
);
```

Use code with caution.

### Method 2: The Browser Console Toggle (On-The-Fly)

If you want to manually flip a switch directly inside your browser tab without restarting Parcel or rebuilding your code, you can use `localStorage`. \[[1](https://www.abtasty.com/blog/feature-flags-react-app/)]

Update your entry file to read a flag from the browser's storage: \[[1](https://www.abtasty.com/blog/feature-flags-react-app/)]

tsx

```
import { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Checks if 'useStrict' is set to 'true' in your browser's localStorage
const useStrict = localStorage.getItem('useStrict') === 'true';
const Wrapper = useStrict ? StrictMode : Fragment;

createRoot(document.getElementById('root')!).render(
  <Wrapper>
    <App />
  </Wrapper>
);
```

Use code with caution.

### How to toggle it on-the-fly:

1. Open your browser developer tools (F12) to the **Console** tab.
2. To turn double-running **ON**, type: `localStorage.setItem('useStrict', 'true')` and reload the page.
3. To turn double-running **OFF**, type: `localStorage.removeItem('useStrict')` and reload the page. \[[1](https://www.abtasty.com/blog/feature-flags-react-app/)]

Would you like to try setting up the **environment variable approach** so it dynamically handles itself based on your Parcel run commands (`parcel src/index.html` vs `parcel build`), or does the browser `localStorage` toggle work better for your workflow?

- [link](https://parceljs.org/recipes/react/)\
  React\
  Parcel is a tool for building single or multi-page React applications. It includes support for: \* \*\*JSX\*\* Automatic support when R...\
  Parcel.js
- [link](https://cravencode.com/post/javascript/react-with-parcel-bundler/)\
  Bundling React applications with minimal configuration and full control\
  Jan 16, 2019 — For my team, replacing Webpack with something that requires less work, complexity, and attention is extremely desirable (so I don'\
  cravencode.com
- [link](https://www.abtasty.com/blog/feature-flags-react-app/)\
  Set up Feature Flags in a React JS App - abtasty\
  Jun 10, 2021 — The first step is to get the feature from localStorage and see if it is set to active or not. If the feature is active, we can ren...\
  AB Tasty

Show all

## You said: what does react run twice

When [React Strict Mode](https://react.dev/reference/react/StrictMode) is active during development, React does not just run your `useEffect` blocks twice—it intentionally **double-invokes almost all functions that are supposed to be pure**. \[[1](https://react.dev/reference/react/StrictMode)]

This behavior helps you spot unexpected side effects, memory leaks, and state bugs before shipping code to production. According to the official React documentation, here is the exact list of what React executes twice in development: \[[1](https://react.dev/reference/react/StrictMode), [2](https://javascript.plainenglish.io/react-strict-mode-explained-for-2026-5fca1c3fa786), [3](https://www.youtube.com/watch?v=xlyitEaN2ac), [4](https://unwiredlearning.com/blog/react-strict-mode)]

### 1. The Component Function Itself (The Render)

React runs the actual body of your function component twice. \[[1](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)]

- **The Reason:** Rendering must be a pure calculation. If you are accidentally mutating global variables or modifying external data inside the component body, the double-render will immediately expose the resulting UI glitch or state mismatch. \[[1](https://react.dev/reference/react/StrictMode), [2](https://react.dev/learn/queueing-a-series-of-state-updates), [3](https://react.dev/learn/render-and-commit)]

### 2. Side Effect Hooks

React runs both parts of your lifecycle hooks twice by executing a rapid sequence: \[[1](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/), [2](https://unwiredlearning.com/blog/react-strict-mode), [3](https://www.upgrad.com/blog/react-strict-mode/)]

- **`useEffect`** (Setup → Cleanup → Setup)
- **`useLayoutEffect`** (Setup → Cleanup → Setup)
- **`useInsertionEffect`** (Setup → Cleanup → Setup) \[[1](https://unwiredlearning.com/blog/react-strict-mode), [2](https://chudovo.com/react-useeffect-common-mistakes-and-how-to-avoid-them/), [3](https://dev.to/somshekhar/understanding-the-flow-of-react-s-effect-hook-ej7), [4](https://hygraph.com/blog/react-useeffect-a-complete-guide), [5](https://codingcops.com/react-interview-questions-and-answers/)]

### 3. State Initializer Functions

If you pass a function to initialize a state hook to avoid calculating a heavy value on every single render, React will execute that initializer function twice. \[]

- **Example:** `useState(() => getHeavyData())`

### 4. Reducer and State Updater Functions

The functions you pass to modify state are required to be pure. React will call them twice to ensure they do not produce different results on subsequent calculations: \[[1](https://react.dev/reference/react/StrictMode), [2](https://react.dev/reference/react/useRef), [3](https://github.com/facebook/react/issues/12856)]

- The **`useReducer`** reducer function.
- The functional updates passed to state setters (e.g., `setCount(prev => prev + 1)`). \[[1](https://react.dev/reference/react/useActionState), [2](https://www.freecodecamp.org/news/shared-state-complexity-in-react-handbook/), [3](https://www.credosystemz.com/blog/react-hooks/), [4](https://www.ignek.com/blog/react-batching-for-performance-optimization), [5](https://docureacten.github.io/State/2-8-Understanding%20the%20Asynchronous%20Nature%20of%20State%20Update%20Functions,%20Utilizing%20Previous%20States,%20and%20State%20Resetting)]

***

### What React does _NOT_ run twice

To avoid completely breaking the operational logic of your application, React excludes certain blocks from the double-execution rule:

- **Event Handlers:** Code inside button clicks (`onClick`), form submissions (`onSubmit`), or text inputs (`onChange`) only fires **once** per actual user action.
- **Cleanup on Final Unmount:** When you naturally navigate away from a page or close a component, the `useEffect` cleanup function runs exactly **once** to gracefully close the connection. \[[1](https://stackoverflow.com/questions/63127173/react-how-to-run-a-function-only-once-after-page-enter-or-refresh), [2](https://javascript.plainenglish.io/why-does-useeffect-run-twice-in-react-de871c303735)]

Are you seeing console logs or operations from one of these other areas (like a state updater or reducer) firing twice, or does everything make sense now that you know what React is testing under the hood?

- [link](https://unwiredlearning.com/blog/react-strict-mode)\
  React Strict Mode: Why useEffect Runs Twice in Dev\
  Feb 10, 2026 — Why Effects Run Twice in Development. This is the behavior that confuses most beginners. When Strict Mode is enabled, React intent...\
  Unwired Learning
- [link](https://react.dev/reference/react/StrictMode)\
  – React\
  In this example, Strict Mode checks will not run against the Header and Footer components. However, they will run on Sidebar and C...\
  React
- [link](https://www.scichart.com/blog/what-is-react-strict-mode-and-why-is-my-application-double-re-rendering/)\
  What is React Strict Mode, and why is my Application Double Re-Rendering?\
  Jun 19, 2024 — React StrictMode is a development tool that helps identify potential issues in React applications. It applies a set of behaviors a...\
  SciChart

Show all

## You said: Error: Cannot find module 'react'

i do have react installed and vscode shows perfectly.

\*\***This discrepancy happens because VSCode and Parcel use two completely different algorithms to locate your `node_modules`.**

VSCode reads your local file path starting directly from the workspace folder you have open. Parcel, however, starts searching from the location of the **entry file you passed to it** (e.g., your `index.html` or `src/index.tsx`) and travels _upward_ through parent directories. \[[1](https://oneuptime.com/blog/post/2026-01-24-typescript-cannot-find-module/view)]

If VSCode sees `react` perfectly but Parcel throws a `Cannot find module 'react'` error, your project structure likely has a directory mismatch. Here is how to fix the three most common causes in a Parcel setup:

### 1. The Entry Point Path Mismatch

If your `index.html` is in a subdirectory (like a `/src` folder), and you started Parcel pointing straight to it, Parcel might be looking for `node_modules` _inside_ the `/src` folder instead of your project root.

- **The Broken Command:** `npx parcel src/index.html` (If Parcel gets confused by local directory boundaries)

- **The Fix:** Move your `index.html` to the project root directory (right next to your `package.json` and `node_modules`), then run:\
  bash

<!---->

```
npx parcel index.html
```

Use code with caution.

### 2. A Stale Parcel Cache File \[[1](https://reactnavigation.org/docs/5.x/troubleshooting/)]

Parcel caches everything aggressively to make builds fast. If you recently ran an installation command, updated your `tsconfig.json`, or restructured folders, Parcel's hidden internal cache database can get out of sync and fail to map the module correctly. \[[1](https://github.com/parcel-bundler/parcel/issues/1904)]

Wipe the internal development cache entirely and restart the compilation process:

bash

```
# Delete the hidden cache directory and local build distribution folders
rm -rf .parcel-cache dist

# Start the dev server again fresh
npx parcel index.html
```

Use code with caution.

### 3. Your `tsconfig.json` is Overriding Module Resolution \[[1](https://stackoverflow.com/questions/67047525/cannot-find-module-fortawesome-react-fontawesome)]

If you modified your `tsconfig.json` to make your TypeScript strict earlier, you might have inadvertently altered how modules resolve globally. If `moduleResolution` isn't configured for modern bundlers, TypeScript forces Parcel to look in the wrong directory structures. \[[1](https://github.com/parcel-bundler/parcel/issues/1904), [2](https://oneuptime.com/blog/post/2026-01-24-typescript-cannot-find-module/view)]

Open your `tsconfig.json` file and make sure your **`moduleResolution`** setting is updated to **`bundler`** or **`NodeNext`**: \[[1](https://github.com/parcel-bundler/parcel/issues/1904)]

json

```
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "bundler", /* 👈 Tells TS to let your bundler (Parcel) handle node_modules */
    "jsx": "react-jsx"
  }
}
```

Use code with caution.

### 💡 Quick Test to Confirm

Run `ls node_modules/react` in your project terminal. If the terminal screams that the directory doesn't exist, you are simply running your Parcel terminal commands from the wrong parent directory level! \[[1](https://www.reddit.com/r/react/comments/1eyi8h2/i%5Fcant%5Fstart%5Freact%5Fin%5Fvisual%5Fcode%5Fstudio%5Fcant/), [2](https://oneuptime.com/blog/post/2026-01-24-typescript-cannot-find-module/view)]

Which folder directory is your `index.html` located in right now, and what **exact terminal command** are you running to start Parcel?

- [link](https://github.com/parcel-bundler/parcel/issues/1904)\
  My tsconfig.json somehow causes "Error: Cannot find module 'react'" · Issue #1904 · parcel-bundler/parcel\
  Aug 16, 2018 — You might get an error message like "Cannot find module 'react'" in the browser console if you're having trouble importing React f...\
  GitHub
- [link](https://www.reddit.com/r/react/comments/1eyi8h2/i%5Fcant%5Fstart%5Freact%5Fin%5Fvisual%5Fcode%5Fstudio%5Fcant/)\
  I can't start REACT in Visual Code Studio - "Can't find package.json"\
  Aug 22, 2024 — If you're getting an error that npm can't find package.json when trying to start React with \`npm start\`, you can try these steps: ...\
  Reddit
- [link](https://oneuptime.com/blog/post/2026-01-24-typescript-cannot-find-module/view)\
  How to Fix 'Cannot Find Module' Declaration Errors\
  Jan 24, 2026 — Is it installed? npm install package-name. Has built-in types? Check moduleResolution. @types available? npm install @types/packag...\
  OneUptime

Show all

## You said: what the hell? i commented import { StrictMode } from 'react';, it's now reference error. and i uncommented it. it now works! i did nothing.

You just ran directly into a classic **Parcel Cache Corruption glitch**! You actually _did_ do something by editing that file: you forced Parcel to completely re-parse the import statement, which cleared out a corrupted cache entry.

Here is exactly what went on behind the scenes to cause that chaotic behavior:

### Why commenting it out broke it (The Reference Error)

When you commented out `import { StrictMode }`, you removed the definition for `StrictMode`. However, your code was still trying to use lower down in the file. JavaScript instantly threw a `ReferenceError: StrictMode is not defined` because it was trying to render a tag that no longer existed in memory.

### Why uncommenting it magically "fixed" everything

When you uncommented the line and hit save, two things happened at the exact same moment:

1. **File Watcher Trigger:** Parcel noticed the file timestamp changed and forced a brand-new compilation pass for that specific file.
2. **Cache Busting:** Re-writing the import statement forced Parcel to throw out its old, broken cached version of your `node_modules` map and re-look for `'react'` from scratch.

Suddenly, it found React perfectly, and the `Cannot find module 'react'` error vanished. \[[1](https://github.com/parcel-bundler/parcel/issues/1904)]

### The Takeaway

Your project files, types, and paths are completely correct. Parcel's internal `.parcel-cache` directory simply got stuck on an old snapshot of your folder structure while you were rearranging code and configurations earlier.

If this weird behavior happens again, you don't have to fiddle with your code to fix it. Just stop your terminal server and run this command to blow away the broken cache manually:

bash

```
rm -rf .parcel-cache dist && npx parcel index.html
```

Use code with caution.

Now that the cache is clear and your imports are working smoothly, are your console logs finally back to printing **exactly twice** on load like you wanted, or is the app behaving itself with a single run?

- [link](https://github.com/parcel-bundler/parcel/issues/1904)\
  My tsconfig.json somehow causes "Error: Cannot find module 'react'" · Issue #1904 · parcel-bundler/parcel\
  Aug 16, 2018 — 🐛 bug report Previously I have used React with Parcel without any problems. But for some reason a new, small project isn't workin...\
  \
  \
  GitHub

## You said: well, how helpful is strictmode. now i see console log "run" twice. a bit weird, lol.

It definitely looks and feels weird at first! Seeing your logs duplicate can make you feel like your app is broken, but it is actually the best insurance policy you have against shipping slow, buggy code to production.

React Strict Mode is incredibly helpful because it exposes severe bugs that are otherwise invisible until real users start clicking around your site. Here is exactly why that weird double-log is worth keeping: \[[1](https://www.upgrad.com/blog/react-strict-mode/), [2](https://dev.to/codeofrelevancy/what-is-strict-mode-in-react-3p5b)]

### 1. It Kills Memory Leaks

If you set up a global event listener, a WebSocket, or a `setInterval` timer in your `useEffect`, it works fine the first time. But what happens if the user leaves the page and comes back?

- **Without Strict Mode:** You might not notice that every visit creates a _new_ listener, slowly draining the user's phone battery and crashing their browser.
- **With Strict Mode:** Because it mounts, unmounts, and remounts instantly, a broken effect will immediately spawn **two active listeners** on page load. You will catch the bug in 5 seconds instead of 5 weeks. \[[1](https://www.upgrad.com/blog/react-strict-mode/)]

### 2. It Prepares You for Future React Features \[[1](https://www.upgrad.com/blog/react-strict-mode/)]

The React team is actively building features like **Concurrent Rendering** and **Server-Side Suspense**. In future versions of React, components will routinely unmount and remount in the background to preserve performance or swap layouts seamlessly. Strict Mode guarantees your current code is resilient enough to handle these upgrades without rewriting everything later. \[[1](https://refine.dev/blog/react-strict-mode-in-react-18/)]

### 3. It Catches "Impure" Renders

If you do something illegal inside your component body—like mutating a global variable or modifying a state object directly—the double-run will cause your UI to glitch or display completely different values on the second pass. It forces you to write pure, predictable functions. \[[1](https://www.scaler.com/topics/react/react-strict-mode/), [2](https://refine.dev/blog/react-strict-mode-in-react-18/)]

***

### Pro-Tip: How to Clean Up Your Console

If the double `console.log('run')` is driving you crazy while debugging layout changes, you can filter your browser console to clean things up without turning Strict Mode off:

1. Open your Browser DevTools Console.

2. In the Filter box, type `-react` or look for the "Create Component Tree" source tags.

3. Alternatively, add a tiny bit of context to your logs so you know _why_ it's firing:\
   javascript

<!---->

```
useEffect(() => {
  console.log("🚀 Component Mounted / Updated");
  return () => console.log("🧹 Component Cleaned Up");
}, []);
```

Use code with caution.\
\[[1](https://www.linkedin.com/posts/hrithikagarwal%5Freact-strict-mode-why-does-my-component-activity-7372523746827436032-t-o4)]

Now that you can see the lifecycle firing completely in order (`🚀` → `🧹` → `🚀`), does the structure of how your component mounts and unmounts make a bit more sense?

- [link](https://www.upgrad.com/blog/react-strict-mode/)\
  React Strict Mode: Key Benefits and How to Use It Right\
  Aug 29, 2025 — It's especially useful when starting a project with modern React practices in mind. However, be aware that Strict Mode can cause e...\
  \
  \
  upGrad
- [link](https://dev.to/codeofrelevancy/what-is-strict-mode-in-react-3p5b)\
  What is Strict Mode in React?\
  Mar 24, 2023 — Strict mode can help you catch subtle bugs Sometimes bugs in React ( react, javascript ) applications can be difficult to track do...\
  \
  \
  DEV Community
- [link](https://www.upgrad.com/blog/react-strict-mode/)\
  React Strict Mode: Key Benefits and How to Use It Right\
  Aug 29, 2025 — Yes, React Strict Mode helps expose memory leaks by simulating component mount and unmount cycles more than once. This repeated mo...\
  \
  \
  upGrad

Show all

## You said: how to import a collocated json file of dev or prod flag

To import a collocated JSON file containing your environment configurations, you can take advantage of **Parcel's native JSON support** and JavaScript's **conditional logic**.

Because Parcel automatically parses JSON files into standard JavaScript objects, you don't need any special loaders or plugins. \[[1](https://webpack.js.org/migrate/3/)]

Here is the cleanest way to set this up right next to your component.

### 1. Create Your Collocated JSON File

Create a file named `config.json` in the exact same folder as your `App.tsx` or component file: \[[1](https://ajimbong.medium.com/a-simple-guide-to-configuring-express-applications-4ccb50a088d9)]

json

```
{
  "development": {
    "apiUrl": "http://localhost:4000",
    "enableStrictLogs": true
  },
  "production": {
    "apiUrl": "https://productionapp.com",
    "enableStrictLogs": false
  }
}
```

Use code with caution.

### 2. Import and Select the Environment Dynamic Flag

Inside your component file, import the JSON file directly. Then, use Parcel’s built-in `process.env.NODE_ENV` variable as a dynamic key to pick the correct configuration: \[[1](https://www.reddit.com/r/nextjs/comments/rpxpli/correct%5Fway%5Fto%5Fimport%5Fa%5Fstatic%5Fjson%5Ffile%5Fpublic/)]

tsx

```
import { useEffect } from 'react';
// 1. Import the collocated JSON file normally
import envConfig from './config.json';

// 2. Safely determine the environment string ('development' or 'production')
const currentEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// 3. Extract the active configuration block
const config = envConfig[currentEnv];

export function App() {
  useEffect(() => {
    // Now you can safely use your environment-specific flags!
    console.log(`[${currentEnv.toUpperCase()}] App API URL is:`, config.apiUrl);
  }, []);

  return (
    <div>
      <h1>Environment: {currentEnv}</h1>
    </div>
  );
}
```

Use code with caution.

***

### Why this works perfectly in Parcel

- **Automatic Dead-Code Elimination:** When you run `parcel build` for production, Parcel notices that `process.env.NODE_ENV` evaluates strictly to `"production"`. It will automatically strip out the `"development"` block of the JSON entirely from your final bundled file to keep it tiny. \[[1](https://developers.cloudflare.com/workers/wrangler/bundling/)]
- **Type Safety:** If you are using TypeScript, it will automatically look at `config.json` and provide full autocomplete for `config.apiUrl` and `config.enableStrictLogs` right inside your editor.

If you want, you can use these settings to dynamically toggle your component too! Would you like to see how to wire this JSON configuration directly into your **Strict Mode layout wrapper**?

- [link](https://webpack.js.org/migrate/3/)\
  To v2 or v3 from v1\
  json-loader is not required anymore When no loader has been configured for a JSON file, webpack will automatically try to load the...\
  \
  \
  webpack
- [link](https://ajimbong.medium.com/a-simple-guide-to-configuring-express-applications-4ccb50a088d9)\
  A simple guide for configuring Express applications | by AJIM | Medium\
  Feb 11, 2023 — Setup Then create a folder called config in that same directory. This is where all your config files will be saved. All the common...\
  \
  \
  Medium
- [link](https://www.reddit.com/r/nextjs/comments/rpxpli/correct%5Fway%5Fto%5Fimport%5Fa%5Fstatic%5Fjson%5Ffile%5Fpublic/)\
  Correct way to import a static json file (public folder or api folder) : r/nextjs\
  Dec 27, 2021 — Put it anywhere you want and just import it into your component or page file. Then it's accessible anywhere in the file. No need f...\
  \
  Reddit

Show all

## You said: why can browser console show the second log slightly dimmer

The reason the second log appears slightly dimmer in your browser console is because **React intentionally hacks the browser's console logging methods to visually de-emphasize the second strict mode execution.** \[[1](https://github.com/reactwg/react-18/discussions/96)]

When React Strict Mode runs your component functions twice, it wants you to see the log to spot bugs, but it doesn't want the secondary log to distract you from the true application flow.

Here is exactly how and why this happens:

### 1. The Console Override Mechanism

When `StrictMode` is active, React temporarily intercepts the global `console.log` (along with `console.info`, `console.warn`, and `console.error`) during the second rendering pass.

- On the **first run**, your code uses the browser's native, normal `console.log`.
- On the **second run**, React wraps the log, applying a CSS opacity style or a muted color string (like `%c`) behind the scenes before forwarding it to the browser. This forces the browser to render the text in a light gray or semi-transparent color. \[[1](https://github.com/reactwg/react-18/discussions/96)]

### 2. The Browser's Native Feature Interaction

Depending on which browser you are using, you might also be seeing a native developer tools feature called **Console Grouping / Deduplication**:

- When a console log outputs the _exact same text_ from the _exact same file and line number_ in immediate succession, browsers like Chrome, Edge, and Safari try to save space.
- Instead of creating a brand new line, they often bundle them together, incrementing a number badge next to the text and dimming the previous log line to indicate it is a repeated, cached trace.

### How to Check It

You can prove React is doing this by looking at your log output. If you expand the log details or right-click it, you will notice that the second log is marked with a subtle gray styling tag or grouped directly underneath the first one.

Are your double logs appearing stacked on top of each other, or are they showing up as a single log line with a small number counter next to it?

- [link](https://github.com/reactwg/react-18/discussions/96)\
  Update to React Strict Mode Double Rendering · reactwg react-18 · Discussion #96\
  Sep 8, 2021 — In Strict Mode, React double invokes render methods in order to flush out potential side effects. During the second render, React ...\
  \
  \
  GitHub
- [link](https://github.com/reactwg/react-18/discussions/96)\
  Update to React Strict Mode Double Rendering · reactwg react-18 · Discussion #96\
  Sep 8, 2021 — Going forward, React will no longer suppress logs during the second render by default. If you have React DevTools > 4.18. 0 instal...\
  \
  \
  GitHub

# how to eliminate Comments are not permitted in JSON.(521) in vscode

To eliminate the **"Comments are not permitted in JSON.(521)"** error in Visual Studio Code, you must <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">change the file's language mode to <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">JSON with Comments (JSONC)</strong></mark>. Standard JSON syntax strictly prohibits comments, but VS Code includes a built-in `jsonc` mode to bypass this restriction. \[[1](https://stackoverflow.com/questions/47834825/in-vs-code-disable-error-comments-are-not-permitted-in-json), [2](https://www.reddit.com/r/vscode/comments/pt0a8j/how%5Fcan%5Fi%5Fenable%5Fjson%5Fwith%5Fcomments/), [3](https://formatarc.com/en/blog/json-comments/), [4](https://www.reddit.com/r/learnjavascript/comments/18hqjfr/json%5Fdoes%5Fnot%5Fsupport%5Fhaving%5Fcomments%5Fin%5Fit%5Fthen/)]

You can apply this fix using any of the methods outlined below.

### Method 1: Fix for the Current File Only

Use this method if you only want to clear the error from the active tab without affecting other JSON files. \[[1](https://stackoverflow.com/questions/47834825/in-vs-code-disable-error-comments-are-not-permitted-in-json)]

1. Look at the bottom-right corner of the VS Code status bar and **click on the word JSON**.
2. A dropdown command menu will open at the top of your screen.
3. Type **`jsonc`** into the search bar.
4. Select **JSON with Comments** from the list. \[[1](https://zaiste.net/editors/vscode/howtos/enable-json-comments/), [2](https://stackoverflow.com/questions/47834825/in-vs-code-disable-error-comments-are-not-permitted-in-json), [3](https://www.reddit.com/r/vscode/comments/pt0a8j/how%5Fcan%5Fi%5Fenable%5Fjson%5Fwith%5Fcomments/)]

### Method 2: Fix Globally for All JSON Files

Use this method if you want VS Code to permanently allow comments in every single `.json` file you open. \[[1](https://www.eliostruyf.com/ignoring-json-comment-errors-spfx-solutions/)]

1. Open your global settings file by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac).

2. Search for and select **Preferences: Open User Settings (JSON)**.

3. Paste the following configuration inside the root of your JSON object:\
   json

<!---->

```
"files.associations": {
  "*.json": "jsonc"
}
```

Use code with caution.
4\. Save the file. \[[1](https://stackoverflow.com/questions/69379869/how-to-set-json-with-comment-in-vscode)]

### Method 3: Fix for Specific Project Folders or Files

If you are worried that global activation might accidentally hide errors in strict production files (like `package.json`), you can isolate the rule to specific configuration names or directories. \[[1](https://www.eliostruyf.com/ignoring-json-comment-errors-spfx-solutions/), [2](https://builtin.com/articles/json-with-comments)]

1. Open your global **User Settings (JSON)** file as described in Method 2.
2. Use targeting rules inside your `"files.associations"` object:

- **To target only specific filenames** (e.g., app manifests or custom scripts):\
  json

<!---->

```
"files.associations": {
  "*.manifest.json": "jsonc"
}
```

Use code with caution.

- **To target only a specific workspace folder** (like a `.devcontainer` or snippet directory):\
  json

<!---->

```
"files.associations": {
  "**/.devcontainer/*.json": "jsonc"
}
```

Use code with caution.\
\[[1](https://github.com/microsoft/vscode/issues/215446), [2](https://stackoverflow.com/questions/69379869/how-to-set-json-with-comment-in-vscode), [3](https://www.eliostruyf.com/ignoring-json-comment-errors-spfx-solutions/), [4](https://builtin.com/articles/json-with-comments), [5](https://github.com/microsoft/vscode/issues/139599)]

### Method 4: Fix via the Graphical UI

If you prefer not to edit configuration text blocks manually, you can use the built-in settings panel. \[[1](https://tahoeninja.blog/posts/getting-rid-of-json-validation-errors-on-comments/)]

1. Open the UI settings panel by pressing `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (Mac).
2. Type **`Associations`** into the settings search bar.
3. Locate the **Files: Associations** section and click the **Add Item** button.
4. In the **Item** column, type `*.json`.
5. In the **Value** column, type `jsonc`.
6. Click **OK** to apply the changes. \[[1](https://tahoeninja.blog/posts/getting-rid-of-json-validation-errors-on-comments/), [2](https://glitteringkatie.com/posts/katies-vscode-cheatsheet), [3](https://tms-outsource.com/blog/posts/how-to-open-settings-json-in-vscode/), [4](https://superuser.com/questions/1228596/visual-studio-code-disable-sidebar-code-slider-thing)]

If you'd like to tailor this setup further, feel free to tell me:

- What **specific filename** or project folder is causing this error?
- Do you need these comments to work inside a **production package** or a **personal configuration** tool?

I can help you build the exact workspace rule to keep your environments clean.

- [link](https://stackoverflow.com/questions/47834825/in-vs-code-disable-error-comments-are-not-permitted-in-json)\
  In VS Code, disable error "Comments are not permitted in JSON"\
  Dec 15, 2017 — 4 Answers. Sorted by: 483. Follow these steps: Click on the letters JSON in the bottom right corner. (A drop-down will appear to "\
  Stack Overflow
- [link](https://github.com/microsoft/vscode/issues/215446)\
  Silence the "Comments are not permitted in JSON." error for ...\
  Jun 13, 2024 — turbotimon commented. turbotimon. on May 7, 2025. Last edited by turbotimon. More actions. I can confirm this with Version: 1.99.1...\
  GitHub
- [link](https://www.reddit.com/r/learnjavascript/comments/18hqjfr/json%5Fdoes%5Fnot%5Fsupport%5Fhaving%5Fcomments%5Fin%5Fit%5Fthen/)\
  JSON does not support having // comments in it. Then ... - Reddit\
  Dec 13, 2023 — How is that possible? Thanks. Upvote 4 Downvote 7 Go to comments Share. Comments Section. senocular. • 3y ago. VSCode has its own ...\
  Reddit·r/learnjavascript

Show all

## You said: will it cause problems in ci

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, changing this setting in VS Code </span><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">can cause hidden failures in your CI (Continuous Integration) pipeline.</strong></mark> \[[1](https://www.sciencedirect.com/topics/computer-science/continuous-integration)]

VS Code's `jsonc` mode only hides the error _inside your local editor_. It does not change how external tools read the file.

### Why CI Pipelines Break

Most standard build tools, servers, and runtimes use strict JSON parsers. If a file containing comments passes through your CI pipeline, the pipeline will likely crash.

Common environments that will fail include:

- **Node.js / npm**: Running `npm install` will crash if your `package.json` contains comments.
- **Python**: Standard `json.load()` scripts will throw a `JSONDecodeError`.
- **GitHub Actions / GitLab CI**: Built-in YAML or JSON linters will flag the file and fail the build.

### Safe Files vs. Unsafe Files

Whether comments are safe depends entirely on what tool reads the file:

- **🟢 Safe for CI:** Configurations explicitly designed for Microsoft/VS Code tools (e.g., `.vscode/settings.json`, `tsconfig.json`, `jsconfig.json`). These ecosystems natively support comments.
- **🔴 Unsafe for CI:** Standard ecosystem files (e.g., `package.json`, `composer.json`, `turbo.json`, or any custom data payloads processed by your backend API).

### How to Fix It Safely for CI

If you absolutely need comments in a file that goes through CI, choose one of these three solutions:

1. **Switch to a Comment-Friendly Format:** Rename the file from `.json` to `.json5` or `.yaml`. Both formats naturally support comments, and most modern CI tools parse them natively.
2. **Use Native JSON Strippers in Your Build:** If your CI pipeline executes a custom build step, configure it to strip comments before processing. For example, in a Node.js pipeline, use packages like `strip-json-comments` or `jsonc-parser`.
3. **Use Configuration Tools That Support It:** For TypeScript projects, ensure your CI tool leverages `tsconfig.json` parsers rather than strict standard JSON engines.

To help you prevent a pipeline failure, let me know:

- What **exact file** (e.g., `package.json`, a custom data file) has the comments?

- What **language or build tool** (Node, Python, Docker, etc.) processes this file in your CI?

- [link](https://www.sciencedirect.com/topics/computer-science/continuous-integration)\
  Continuous Integration - an overview

2.1. 1 Continuous Integration (CI)\
\
\
ScienceDirect.com

# 
