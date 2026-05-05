#

does parceljs differ dev and prod

May 2, 2026

Yes, **[ParcelJS](https://parceljs.org/)** treats development and production builds differently by prioritizing developer experience in dev and performance in production. You trigger these modes using different CLI commands: `parcel serve` (or just `parcel`) for development and `parcel build` for production. \[[1](https://snegicodes.hashnode.dev/parcel-js), [2](https://github.com/parcel-bundler/parcel), [3](https://parceljs.org/features/cli/)]

Key Differences Between Dev and Prod

- **Optimizations**:
  - **Development**: Minification is disabled to keep the code readable for debugging.
  - **Production**: Parcel automatically **minifies** code (removing comments and whitespace), performs **tree shaking** (removing unused code), and enables **scope hoisting** to reduce bundle size.
- **Browsers & Transpilation**:
  - **Development**: By default, Parcel targets modern browsers to skip time-consuming transpilation.
  - **Production**: It uses your `browserslist` to ensure the code is transpiled for older browser compatibility.
- **Asset Handling**:
  - **Development**: Features like **Hot Module Replacement (HMR)** and an internal dev server are enabled for instant feedback.
  - **Production**: Content **hashing** is added to filenames (e.g., `main.a1b2c3.js`) to support aggressive browser caching.
- **Environment Variables**:
  - Parcel automatically sets `NODE_ENV` to `development` for dev commands and `production` for the `build` command.
- **Source Maps**:
  - **Development**: Source maps are often optimized for speed and may be inlined or automatically linked by the dev server.
  - **Production**: Source maps are typically generated as separate files or can be disabled to keep production bundles light. \[[1](https://parceljs.org/features/production/), [2](https://parceljs.org/languages/javascript/), [3](https://parceljs.org/features/development/), [4](https://parceljs.org/migration/parcel-1/), [5](https://parceljs.bootcss.com/features/development.html), [6](https://parceljs.org/features/dependency-resolution/), [7](https://parceljs.bootcss.com/features/targets/index.html), [8](https://parceljs.org/features/cli/), [9](https://snegicodes.hashnode.dev/parcel-js)]

Comparison Table

| Feature \[[1](https://parceljs.org/), [2](https://parceljs.org/blog/v2-8-0/), [3](https://parceljs.org/features/development/), [4](https://snegicodes.hashnode.dev/parcel-js), [5](https://parceljs.org/features/production/), [6](https://parceljs.org/features/cli/), [7](https://parceljs.org/languages/javascript/)] | Development (`parcel serve`)      | Production (`parcel build`)    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------------------------ |
| **Speed**                                                                                                                                                                                                                                                                                                                | Prioritizes fast rebuilds/caching | Prioritizes tiny bundle sizes  |
| **Minification**                                                                                                                                                                                                                                                                                                         | Disabled (readable)               | Enabled (compressed)           |
| **Tree Shaking**                                                                                                                                                                                                                                                                                                         | Minimal                           | Full (removes dead code)       |
| **Filenames**                                                                                                                                                                                                                                                                                                            | Simple (e.g., `index.js`)         | Hashed (e.g., `index.7f2a.js`) |
| **HMR**                                                                                                                                                                                                                                                                                                                  | Enabled                           | Disabled                       |

Are you seeing a **specific error** in production that isn't showing up in your development environment?

- [link](https://parceljs.org/features/production/)\
  Production - Parcel\
  In production builds, Parcel automatically optimizes the bundle graph in your application to reduce duplication and improve cachea...\
  Parcel.js
- [link](https://parceljs.org/features/development/)\
  Development - Parcel\
  When using the dev server, only a single target can be built at once. By default, Parcel uses a development target that supports m...\
  Parcel.js
- [link](https://snegicodes.hashnode.dev/parcel-js)\
  From Zero to Bundled: Harnessing the Magic of Parcel.js - Untitled Publication\
  Moreover, it also automatically cleans up your code, removing unnecessary comments and whitespace, resulting in a leaner and more ...\
  Hashnode

Show all

does it make react light if i only use usestate and use effect, and create element and render

May 2, 2026

While using only a few hooks like `useState` and `useEffect` results in **less total code for you to write**, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">it does <strong>not</strong> significantly make React "lighter" in terms of the library's overhead</mark>. React and React DOM are primarily monolithic libraries; importing even one small part typically includes the core engine required to manage the virtual DOM and component lifecycle. \[[1](https://stackoverflow.com/questions/69134346/react-why-usestate-magically-react-createelement-when-used-with-component), [2](https://stackoverflow.com/questions/64779199/will-switching-to-react-hooks-affect-my-apps-bundle-size)]

Key Considerations for "Lightweight" React

- **Library Overhead**: Even if you only use `useState`, the entire React runtime (~2-3 KB gzipped) and React DOM (~35-40 KB gzipped) must still be included in your bundle to make those functions work.
- **Limited Tree-Shaking**: React is not fully "tree-shakable" in a way that allows a bundler to strip away every unused hook or feature. Most of its internal logic is interconnected.
- **`createElement` vs. JSX**: Using `createElement` directly instead of JSX doesn't save weight; JSX is just a syntax that transpilers (like Babel) convert into `createElement` calls anyway. \[[1](https://stackoverflow.com/questions/69134346/react-why-usestate-magically-react-createelement-when-used-with-component), [2](https://dev.to/kkr0423/reactjs-performance-tree-shaking-and-bundle-analysis--5113), [3](https://medium.com/@basel.issmail/on-tree-shaking-and-bundle-optimization-330bacb84e6f), [4](https://react.dev/reference/react/createElement), [5](https://stackoverflow.com/questions/64779199/will-switching-to-react-hooks-affect-my-apps-bundle-size)]

Comparison: React vs. Alternatives

If your goal is absolute minimum bundle size, consider these alternatives:

| Library \[[1](https://www.reddit.com/r/reactjs/comments/17q3d1l/thoughts%5Fon%5Favoiding%5Fuseeffectusestate%5Fwhen/)] | Approx. Size (Minified + Gzipped) | Best Use Case                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **[Preact](https://preactjs.com/)**                                                                                    | **~4 KB**                         | High-performance apps where bundle size is the top priority. It uses the same `useState` and `useEffect` syntax. |
| **[SolidJS](https://www.solidjs.com/)**                                                                                | **~7 KB**                         | Fine-grained reactivity without a virtual DOM overhead.                                                          |
| **React + React DOM**                                                                                                  | **~40+ KB**                       | Large ecosystems, widespread library support, and complex state management.                                      |

How to Actually Reduce Bundle Size

Instead of limiting which hooks you use, focus on these high-impact strategies:

- **Analyze Your Bundle**: Use tools like the [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) or the [Bundle Size Investigation guide](https://www.developerway.com/posts/bundle-size-investigation) to see what is actually taking up space.
- **Code Splitting**: Use `React.lazy` and `Suspense` to load parts of your app only when they are needed.
- **Optimize Dependencies**: Large third-party libraries (like Moment.js or heavy UI frameworks) often contribute more to bundle bloat than React itself. \[[1](https://stackoverflow.com/questions/57762943/do-unused-functions-in-a-react-hook-cause-application-bundle-size-issue), [2](https://www.developerway.com/posts/bundle-size-investigation), [3](https://www.youtube.com/watch?v=gJxgjyhbGHQ\&t=1), [4](https://itnext.io/tips-tricks-for-smaller-bundles-in-react-apps-58d1b20c9c0), [5](https://medium.com/@marcom%5F45757/optimizing-bundle-sizes-in-react-applications-a-deep-dive-into-code-splitting-and-lazy-loading-8b590a8baa6a), [6](https://blog.theashishmaurya.me/how-to-minimize-react-bundle-size-for-faster-loading-times)]

Would you like to see a **comparison of how to swap React for Preact** to immediately save about 35KB?

- [link](https://stackoverflow.com/questions/64779199/will-switching-to-react-hooks-affect-my-apps-bundle-size)\
  Will switching to React Hooks affect my app's bundle size? - Stack Overflow\
  \* 1 Answer. Sorted by: 3. Dont worry it doesnt really matter as both do the same work plus when you use react hooks your bundle si...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/57762943/do-unused-functions-in-a-react-hook-cause-application-bundle-size-issue)\
  Do unused functions in a React Hook cause application bundle size ...\
  \* 1 Answer. Sorted by: 1. No, they will not adversely affect your bundle size (if they did, it would be a trivial amount). A bigge...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/69134346/react-why-usestate-magically-react-createelement-when-used-with-component)\
  why useState magically React.createElement when used with ...\
  Either way is fine. NOTE: This is a bit confusing. A function component does return all the elements, internally it'll call create...\
  Stack Overflow

Show all

does it tree shake all unused fn in react

May 2, 2026

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, </span><strong>React itself is not fully tree-shakable</strong> in the way you might expect</mark>. While modern bundlers like Parcel and Webpack use tree-shaking to remove unused functions from your _own_ code or from modern utility libraries (like **lodash-es**), they cannot effectively "strip away" the unused parts of the core React library. \[[1](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7), [2](https://stackoverflow.com/questions/78431141/is-there-a-difference-between-e-g-useeffect-react-useeffect), [3](https://www.linkedin.com/pulse/tree-shaking-simplified-optimizing-your-react-apps-production-patel-tmuic)]

Why React Doesn't Tree-Shake Well

- **Monolithic Architecture**: React is built as a single, interconnected engine. Even if you only import `useState`, the underlying code for the **reconciliation engine** (the Virtual DOM), the **event system**, and the **Fiber scheduler** must still be included for that one hook to function.
- **Side Effects**: Many parts of React are considered to have "side effects" upon execution. Bundlers are often conservative and will not remove code if they can't prove it's safe to do so, especially when functions are tightly coupled within the library's core.
- **Named vs. Namespace Imports**: While using `import { useState } from 'react'` is theoretically better for tree-shaking than `import React from 'react'`, in practice, both usually result in the entire library being bundled because the library's internal structure doesn't support fine-grained separation. \[[1](https://www.reddit.com/r/reactjs/comments/haks1w/react%5Ffunctional%5Fcomponents%5Fand%5Flodash%5Fhighorder/), [2](https://www.reddit.com/r/reactjs/comments/1coi5vz/do%5Fyou%5Fneed%5Fmultiple%5Fentrypoints%5Ffor%5Fa%5Fpackage/), [3](https://www.reddit.com/r/reactjs/comments/17q3d1l/thoughts%5Fon%5Favoiding%5Fuseeffectusestate%5Fwhen/), [4](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7), [5](https://stackoverflow.com/questions/78431141/is-there-a-difference-between-e-g-useeffect-react-useeffect)]

What DOES get Tree-Shaken?

While the React core stays largely intact, tree-shaking is highly effective for other parts of your project: \[[1](https://the-experts.nl/knowledge/understanding-tree-shaking-in-react/)]

- **Your Own Code**: If you write a utility file with 10 functions but only use one, Parcel will remove the other nine from your production build.
- **Third-Party Libraries**: Modern libraries designed for tree-shaking, such as **[React Icons](https://react-icons.github.io/react-icons/)**, allow you to import 5 icons out of 5,000 without bundling the entire set.
- **Component Libraries**: If a library uses ES modules, you can import a single `Button` component without including the `DatePicker` or `Table` components from that same library. \[[1](https://parceljs.org/features/production/), [2](https://mintlify.com/react-icons/react-icons/core-concepts/tree-shaking), [3](https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied), [4](https://coreui.io/answers/how-to-tree-shake-in-react/), [5](https://www.linkedin.com/pulse/tree-shaking-simplified-optimizing-your-react-apps-production-patel-tmuic)]

Summary of Tree-Shaking Impact

| Code Type \[[1](https://stackoverflow.com/questions/53199814/tree-shaking-are-unused-functions-included-to-a-bundle), [2](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7), [3](https://stackoverflow.com/questions/78431141/is-there-a-difference-between-e-g-useeffect-react-useeffect), [4](https://dev.to/lukasbombach/how-to-write-a-tree-shakable-component-library-4ied), [5](https://www.reddit.com/r/reactjs/comments/haks1w/react%5Ffunctional%5Fcomponents%5Fand%5Flodash%5Fhighorder/)] | Can be Tree-Shaken? | Effectiveness                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------- |
| **React / React DOM**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **No**              | Almost the entire library is always bundled.      |
| **Your Custom Hooks**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Yes**             | Very effective; unused functions are removed.     |
| **Modern UI Kits**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Yes**             | Highly effective if using named ES imports.       |
| **Legacy Libraries**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **No**              | CommonJS-based libraries often bundle everything. |

Would you like to know how to **audit your production bundle** to see exactly which parts of React or other libraries are taking up space?

- [link](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7)\
  JavaScript tree shaking, like a pro | by Daniel Brain\
  Be careful with libraries When you can, use tree-shakeable versions of libraries. If you're importing a big bundle of minified cod...\
  Medium
- [link](https://www.reddit.com/r/reactjs/comments/1coi5vz/do%5Fyou%5Fneed%5Fmultiple%5Fentrypoints%5Ffor%5Fa%5Fpackage/)\
  Do you need multiple entrypoints for a package for tree-shaking to work? - Reddit\
  tl;dr: Function declarations are side-effect free and unused function can automatically be tree-shaken. Variable assignment can ha...\
  Reddit
- [link](https://www.linkedin.com/pulse/tree-shaking-simplified-optimizing-your-react-apps-production-patel-tmuic)\
  Tree Shaking Simplified: Optimizing Your React Apps for Production - LinkedIn\
  Tree Shaking Simplified: Optimizing Your React Apps for... \* Modern web applications demand speed, efficiency, and scalability. As...\
  LinkedIn

Show all

#

can I do almost everything with only use state and use effect

May 2, 2026

Yes, technically you can build almost any application using only `useState` and `useEffect`, as they are the primary building blocks for managing data and side effects in React. However, relying solely on them can lead to **complex code**, **performance bottlenecks**, and **logic bugs** as your project grows. \[[1](https://www.reddit.com/r/reactjs/comments/13rm4nb/necessary%5Fto%5Fuse%5Fhooks%5Foutside%5Fof%5Fusestate%5Fand/), [2](https://www.reddit.com/r/reactjs/comments/13rm4nb/necessary%5Fto%5Fuse%5Fhooks%5Foutside%5Fof%5Fusestate%5Fand/), [3](https://www.linkedin.com/posts/ratheshprabakar%5Freact-hooks-performance-activity-7379502943189975040-rGdq), [4](https://www.reddit.com/r/reactjs/comments/1dtqk2s/why%5Feveryone%5Fhate%5Fuseeffect/)]

While `useState` and `useEffect` are often the first hooks developers learn, React provides others to handle specific challenges more effectively: \[[1](https://www.reddit.com/r/reactjs/comments/13rm4nb/necessary%5Fto%5Fuse%5Fhooks%5Foutside%5Fof%5Fusestate%5Fand/)]

When to Look Beyond `useState` and `useEffect`

- **For Performance Optimization**:
  - `useMemo`: Use this to cache the result of a calculation so it doesn't run on every render.
  - `useCallback`: Use this to cache a function definition, preventing child components from re-rendering unnecessarily.
- **For Complex State Logic**:
  - `useReducer`: If you find yourself managing multiple related pieces of state or complex state transitions (like in a game or a large form), `useReducer` is often more predictable and easier to test than multiple `useState` calls.
- **For Direct DOM Interaction**:
  - `useRef`: While you _could_ try to use state to track everything, `useRef` is essential for directly interacting with DOM elements (like focusing an input) or persisting values without triggering a re-render.
- **For Avoiding "Prop Drilling"**:
  - `useContext`: If you need to share data (like a user's theme or login status) across many components at different levels, `useContext` prevents you from having to pass props through every single intermediate component. \[[1](https://dev.to/satya%5Fvenna%5F1994/understanding-usestate-useeffect-and-useref-in-react-with-simple-examples-3k9a), [2](https://www.reddit.com/r/reactjs/comments/14iw163/hard%5Ftime%5Funderstanding%5Fhooks%5Fbesides%5Fusestate/), [3](https://www.robinwieruch.de/react-usereducer-vs-usestate/), [4](https://emrekurtt1655.medium.com/usereducer-vs-usestate-understanding-the-key-differences-in-react-de402fe48a94), [5](https://www.reddit.com/r/reactjs/comments/13rm4nb/necessary%5Fto%5Fuse%5Fhooks%5Foutside%5Fof%5Fusestate%5Fand/), [6](https://www.reddit.com/r/reactjs/comments/13rm4nb/necessary%5Fto%5Fuse%5Fhooks%5Foutside%5Fof%5Fusestate%5Fand/)]

Common Pitfalls of Overusing `useEffect`

Many modern React patterns actually encourage **reducing** the use of `useEffect`. Common mistakes include: \[[1](https://www.youtube.com/watch?v=MFj%5FS0Nof90)]

- **Syncing state with other state**: Often, you can just calculate a value directly during rendering rather than using an effect to update a second state variable.
- **Memory leaks**: Forgetting to include a cleanup function for subscriptions or timers can cause bugs.
- **Infinite loops**: Mismanaging the dependency array can cause your component to re-render constantly. \[[1](https://www.newline.co/@RichardBray/useeffect-in-react-best-practices-and-common-pitfalls--52b2d5d7), [2](https://medium.com/@mr.avinish/why-we-dont-use-useeffect-more-in-react-applications-30b61e8a26f3), [3](https://medium.com/@osmangonirabbi/react-hooks-usestate-and-useeffect-explained-for-beginners-8d65cc77705a), [4](https://www.reddit.com/r/reactjs/comments/1dtqk2s/why%5Feveryone%5Fhate%5Fuseeffect/)]

**Recommendation**: Start with `useState` and `useEffect`, but as soon as your component starts feeling "messy" or slow, check the [Official React Documentation](https://react.dev/reference/react/hooks) to see if a more specialized hook like `useMemo` or `useReducer` fits better. \[[1](https://www.reddit.com/r/reactjs/comments/13rm4nb/necessary%5Fto%5Fuse%5Fhooks%5Foutside%5Fof%5Fusestate%5Fand/)]

Would you like to see a **comparison** of how a piece of code looks using only `useState` versus a more specialized hook?

- [link](https://www.reddit.com/r/reactjs/comments/1dtqk2s/why%5Feveryone%5Fhate%5Fuseeffect/)\
  Why everyone hate useEffect? : r/reactjs - Reddit\
  \* one source of truth is usually the best. useEffect is often misused to sync to another source of truth (like instead of deriving...\
  Reddit
- [link](https://emrekurtt1655.medium.com/usereducer-vs-usestate-understanding-the-key-differences-in-react-de402fe48a94)\
  useReducer vs. useState: Understanding the Key Differences in React\
  useReducer vs. useState: Understanding the Key Differences in React. ... useState vs useReducer in React — When to Use What? React...\
  Medium
- [link](https://www.reddit.com/r/reactjs/comments/14iw163/hard%5Ftime%5Funderstanding%5Fhooks%5Fbesides%5Fusestate/)\
  Hard time understanding hooks besides useState and useEffect….\
  Not because there is other hooks means you have to use them! You can do a lot with useState and useEffect , and it's perfectly fin...\
  Reddit

Show all

example of others, not abstractions on these two

May 2, 2026

It’s a common misconception that all hooks are just "wrappers" for `useState` and `useEffect`. While they share the same underlying React engine, several hooks provide **native capabilities** that those two simply cannot replicate on their own.

Here are three examples of hooks that do things `useState` and `useEffect` cannot (or should not) do:

1\. `useRef` (Accessing the "Identity" of an Element)

`useState` is for data that **triggers a render**. `useRef` is for data that **persists** but **doesn't trigger a render**. You cannot use `useState` to focus a text input because setting state would refresh the whole component, potentially losing the focus you just tried to set.

- **The Task:** Focus an input field when a button is clicked.
- **The Hook:** `useRef` gives you a direct "trapdoor" to the browser’s DOM node.

javascript

```
function FocusButton() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // You are talking directly to the browser element here
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
```

Use code with caution.

2\. `useContext` (The "Teleporter")

`useState` is local to a component. To get that state to a "grandchild" component, you have to "prop drill" (pass it through every layer in between). `useContext` allows a component to "subscribe" to a value provided higher up the tree without the middle-men even knowing it exists.

- **The Task:** Applying a "Dark Mode" theme to a button deep inside a header, inside a layout, inside an app.
- **The Hook:** `useContext` skips the manual passing of props.

javascript

```
// This happens outside the components
const ThemeContext = createContext('light');

function DeeplyNestedButton() {
  // This component "grabs" the value directly from the provider above it
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am {theme} mode!</button>;
}
```

Use code with caution.

3\. `useMemo` (The "Memory Bank")

While you _could_ technically use `useState` and `useEffect` to store the result of a heavy calculation, it would require an extra render cycle (one to run the effect, one to update the state). `useMemo` does this **during the render itself**, making it much faster and more efficient for heavy data processing.

- **The Task:** Sorting a list of 10,000 items only when the "sort criteria" changes.
- **The Hook:** `useMemo` caches the result and only recalculates if the dependencies change.

javascript

```
const sortedList = useMemo(() => {
  return expensiveSort(bigDataArray);
}, [bigDataArray]); // Only re-runs if the array itself changes
```

Use code with caution.

Summary of Differences

| Hook             | Unique Power        | Why `useState`/`useEffect` can't do it well                            |
| ---------------- | ------------------- | ---------------------------------------------------------------------- |
| **`useRef`**     | Reference stability | `useState` causes a re-render; `useRef` is silent.                     |
| **`useContext`** | Global-ish access   | `useState` is trapped in its component and requires manual passing.    |
| **`useMemo`**    | Calculation caching | Doing this in `useEffect` requires an extra, visible "flicker" render. |

Do you have a **specific feature** you're trying to build where you're struggling to decide which hook to use?

#

how does parceljs transpile jsx if I'm using my own framework

May 2, 2026

By default, Parcel automatically transpiles JSX into `React.createElement` calls whenever it detects you are using React. To use your own framework, you need to redirect these calls to your custom factory function (e.g., `h` or `createElement`) using a **JSX Pragma**. \[[1](https://parceljs.org/recipes/react/), [2](https://kapilyadav22.medium.com/create-react-app-using-parcel-57337396c4b7)]

You can configure this in Parcel using one of the following three methods:

1\. `tsconfig.json` or `jsconfig.json` (Recommended) \[[1](https://parceljs.org/languages/typescript/)]

Parcel 2 reads your `tsconfig.json` or `jsconfig.json` file to determine how to handle JSX. This is often the simplest way to override the default behavior. \[[1](https://parceljs.org/blog/rc0/)]

Add or update the `compilerOptions` in your config file:

json

```
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "myLibrary.createElement",
    "jsxFragmentFactory": "myLibrary.Fragment"
  }
}
```

Use code with caution.

- **`jsxFactory`**: The function Parcel will call for every JSX element (e.g., becomes `myLibrary.createElement('div', ...)`).
- **`jsxFragmentFactory`**: The function used for JSX fragments ().

2\. File-Level Pragma

If you only want to use your framework in specific files, you can add a comment at the very top of the file. This comment tells the transpiler exactly which function to use for that specific file. \[[1](https://github.com/parcel-bundler/parcel/discussions/8457), [2](https://krzysztofzuraw.com/blog/2020/how-to-setup-emotion-css-prop-to-work-with-parcel-and-typescript/)]

javascript

```
/** @jsx myCreateElement */
import { myCreateElement } from './my-framework';

const element = <div>Hello World</div>;
```

Use code with caution.

3\. Babel Configuration

If you need more advanced control or the `tsconfig` method isn't sufficient, you can add a `.babelrc` or `babel.config.json` to your project root. Parcel will automatically detect this file and use Babel for transpilation instead of its default built-in transformer. \[[1](https://parceljs.org/), [2](https://www.youtube.com/watch?v=hCxvp3%5Fo0gM), [3](https://parceljs.org/languages/javascript/)]

You will need to install `@babel/plugin-transform-react-jsx` and configure it as follows: \[[1](https://github.com/parcel-bundler/parcel/issues/2470), [2](https://medium.com/@rodocite/customizing-your-jsx-pragma-d9854bb26aa1)]

json

```
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "h",
      "pragmaFrag": "Fragment"
    }]
  ]
}
```

Use code with caution.

**Note on modern JSX transform:** For newer versions of React (17+), a "modern" transform exists that doesn't require a pragma. If your framework supports a similar automatic import mechanism, you may need to configure `jsxImportSource` in your [TSConfig](https://parceljs.org/blog/rc0/). \[[1](https://parceljs.org/blog/rc0/)]

Would you like to see a minimal **boilerplate project structure** for a custom framework using Parcel?

- [link](https://github.com/parcel-bundler/parcel/issues/2470)\
  Allow presets to override built-in plugins · Issue #2470 · parcel-bundler/parcel - GitHub\
  🐛 bug report. I was attempting to use parcel with a react project using Emotion v10, a CSS-in-JS library. Emotion recommends usin...\
  GitHub
- [link](https://medium.com/@rodocite/customizing-your-jsx-pragma-d9854bb26aa1)\
  Customizing Your JSX Pragma. Most of you might have seen the… | by Rodolfo Yabut\
  Customizing Your JSX Pragma. Most of you might have seen the… | by Rodolfo Yabut | Medium. Rodolfo Yabut. 2 min read. Jun 24, 2017...\
  Medium
- [link](https://parceljs.org/)\
  Parcel\
  Transpilation. Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in yo...\
  Parcel.js

Show all

example

May 2, 2026

To see this in action, here is a minimal setup where Parcel transpiles JSX into a simple object-based virtual DOM for your own framework.

1\. The "Framework" (`framework.js`)

This function (often called `h` or `createElement`) is what Parcel will call for every JSX tag it finds.

javascript

```
// A simple function that returns a Virtual DOM node
export function h(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat()
  };
}
```

Use code with caution.

2\. The Component (`index.js`)

Use the `/** @jsx h */` pragma at the top to tell Parcel to use your specific function instead of `React.createElement`.

javascript

```
/** @jsx h */
import { h } from './framework.js';

const App = () => (
  <div id="wrapper">
    <h1>Hello from My Framework</h1>
    <p>Parcel transpiled this!</p>
  </div>
);

// This will log the object created by your 'h' function
console.log(App());

document.getElementById('app').innerHTML = `<pre>${JSON.stringify(App(), null, 2)}</pre>`;
```

Use code with caution.

3\. The Entry Point (`index.html`)

Parcel uses your HTML as the entry point and automatically follows the script imports.

html

```
<!DOCTYPE html>
<html>
<body>
  <div id="app"></div>
  <script type="module" src="./index.js"></script>
</body>
</html>
```

Use code with caution.

How to Run It

1. **Initialize**: `npm init -y`
2. **Install Parcel**: `npm install --save-dev parcel`
3. **Start**: `npx parcel index.html`

When you check the console or the page, you'll see that was converted into a JavaScript object: `{ tag: "div", props: { id: "wrapper" }, children: [...] }`.

Do you want to move this configuration into a **tsconfig.json** so you don't have to add the comment to every file?

tsconfig example

May 2, 2026

To use a custom framework globally without adding pragmas to every file, create a `tsconfig.json` in your project root. Parcel automatically reads this file to determine how to transpile JSX. \[[1](https://github.com/parcel-bundler/parcel/issues/8148), [2](https://parceljs.bootcss.com/languages/typescript.html)]

`tsconfig.json` Example \[[1](https://github.com/parcel-bundler/parcel/issues/1251)]

This configuration tells Parcel to replace every JSX element with a call to your custom `h` function. \[[1](https://parceljs.bootcss.com/languages/typescript.html), [2](https://www.typescriptlang.org/tsconfig/jsxFactory.html)]

json

```
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
    "allowJs": true,
    "lib": ["ESNext", "DOM"]
  }
}
```

Use code with caution.

Key Options Explained

- **`jsx`**: Set to `"react"` for the "classic" transform where Parcel replaces tags with a factory function.
- **`jsxFactory`**: The name of the function to call for elements (e.g., becomes `h('div', ...)`).
- **`jsxFragmentFactory`**: The name of the function for fragments (e.g., becomes `Fragment(...)`).
- **`allowJs`**: **Crucial** if you are writing standard JavaScript (`.js` or `.jsx`) instead of TypeScript; this ensures Parcel still applies these rules to your JS files. \[[1](https://www.typescriptlang.org/tsconfig/jsxFactory.html), [2](https://www.typescriptlang.org/tsconfig/jsxFragmentFactory.html), [3](https://github.com/parcel-bundler/parcel/issues/9771)]

Project Structure

When using this configuration, ensure your main component file imports the factory function you defined: \[[1](https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings), [2](https://www.typescriptlang.org/tsconfig/jsxFactory.html)]

javascript

```
// index.jsx
import { h, Fragment } from './my-framework';

const Layout = () => (
  <>
    <nav>Menu</nav>
    <main>Content</main>
  </>
);
```

Use code with caution.

Parcel will search upward from your source files to find this [TSConfig file](https://parceljs.org/languages/typescript/) and apply the settings automatically during the build process. \[[1](https://parceljs.org/features/dependency-resolution/)]

Would you like to know how to handle **TypeScript type definitions** for your custom JSX elements so you get autocomplete in your editor?

- [link](https://parceljs.org/features/dependency-resolution/)\
  Dependency resolution - Parcel\
  TSConfig. ... Parcel supports some settings defined in TypeScript's tsconfig. json config file, including baseUrl , paths , and mo...\
  Parcel.js
- [link](https://github.com/parcel-bundler/parcel/issues/9771)\
  Parcel does not read \`jsconfig.json\` only \`tsconfig.json\`, even with ... - GitHub\
  When no tsconfig. json is present and only a jsconfig. json , parcel will not attempt to compile any files to TypeScript and ignor...\
  GitHub
- [link](https://www.typescriptlang.org/tsconfig/jsxFragmentFactory.html)\
  jsxFragmentFactory - TSConfig Option - TypeScript\
  Specify the JSX fragment factory function to use when targeting react JSX emit with jsxFactory compiler option is specified, e.g. ...\
  TypeScript

Show all

#

telegram teact library

May 2, 2026

**Teact** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a lightweight, high-performance web framework developed by Telegram to power <strong>Telegram Web A</strong></mark>. It was created to re-implement the React paradigm with zero dependencies, optimizing for the specific needs of a fast messaging client. \[[1](https://github.com/Ajaxy/telegram-tt/blob/master/CLAUDE.md), [2](https://github.com/Ajaxy/teact), [3](https://github.com/Ajaxy/telegram-tt)]

Key Characteristics

- **Zero Dependencies**: Built from the ground up without external libraries to ensure a minimal footprint.
- **React Paradigm**: It follows familiar React concepts like JSX and built-in hooks, though they are imported from the [Teact library](https://github.com/Ajaxy/teact) itself rather than the standard React package.
- **Core of Telegram Web A**: Teact is the foundational framework for [Telegram Web A](https://github.com/Ajaxy/telegram-tt), which won the Telegram Lightweight Client Contest.
- **Performance-Focused**: Designed for high-speed rendering and complex animations, supporting modern Web APIs like WebWorkers, WebAssembly, and reactive data streams. \[[1](https://github.com/Ajaxy/teact/blob/main/README.md), [2](https://github.com/Ajaxy/telegram-tt/blob/master/CLAUDE.md), [3](https://github.com/Ajaxy/teact), [4](https://github.com/Ajaxy/telegram-tt)]

Technical Details

- **Hooks**: Supports standard hooks like `useState` and `useEffect`, but they must be imported from `Teact`.
- **Types**: React types are often available globally, but the runtime logic is entirely Teact-specific.
- **Integration**: In the Telegram Web A project, it is paired with **GramJS** (an MTProto implementation) to handle the underlying Telegram protocol. \[[1](https://github.com/Ajaxy/telegram-tt/blob/master/CLAUDE.md), [2](https://github.com/Ajaxy/telegram-tt)]

Would you like to see a **code example** of how Teact components differ from standard React components?

- [link](https://github.com/Ajaxy/telegram-tt/blob/master/CLAUDE.md)\
  CLAUDE.md - Ajaxy/telegram-tt - GitHub\
  1\. Basics & Imports \* All components use JSX and render with Teact. \* Do not import "react". React types are available globally in...\
  GitHub
- [link](https://github.com/Ajaxy/teact)\
  Ajaxy/teact - GitHub\
  Teact is a lightweight and super-performant web framework with zero dependencies implementing React paradigm. It was originally de...\
  GitHub
- [link](https://github.com/Ajaxy/telegram-tt)\
  Ajaxy/telegram-tt: Telegram Web A, GPL v3 - GitHub\
  This project won the first prize 🥇 at Telegram Lightweight Client Contest and now is an official Telegram client available to any...\
  GitHub

Show all

compare with react

May 3, 2026

Teact is a specialized reimplementation of the React paradigm specifically designed for the performance needs of the [Telegram Web A client](https://github.com/Ajaxy/telegram-tt). While it mimics React's syntax, it is not a direct clone and prioritizes extreme minimalism over feature parity. \[[1](https://github.com/Ajaxy/teact), [2](https://github.com/Ajaxy/telegram-tt), [3](https://github.com/zserge/o)]

Comparison Table: Teact vs. React

| Feature \[[1](https://dev.to/shivanim21%5F/react-vs-preact-which-javascript-library-suits-your-project-2clf), [2](https://www.quora.com/Was-Telegram-built-by-using-React-Native), [3](https://github.com/Ajaxy/teact), [4](https://medium.com/@yolandaamos016/a-tale-of-two-libraries-preact-vs-react-7f9df796b21e), [5](https://tianyaschool.medium.com/preact-a-lightweight-alternative-to-react-b3f7a423628f), [6](https://preactjs.com/guide/v10/differences-to-react/), [7](https://www.ksolves.com/blog/reactjs/preact-vs-react), [8](https://github.com/Ajaxy/teact), [9](https://github.com/Ajaxy/telegram-tt)] | React                                                                  | Teact                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Philosophy**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | General-purpose, feature-rich ecosystem.                               | Internal, specialized for Telegram's high-speed requirements.                                 |
| **Dependencies**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Requires various third-party packages for complex state or routing.    | **Zero dependencies**; everything is built into the framework.                                |
| **Bundle Size**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Significant (~45KB+ gzipped for React + ReactDOM).                     | Extremely small footprint; intended for "lightweight" clients.                                |
| **Event System**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Uses a **Synthetic Event** system for cross-browser consistency.       | Directly uses **Native Browser Events** for speed and reduced memory usage.                   |
| **Hooks**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Full suite of hooks (`useState`, `useMemo`, `useDeferredValue`, etc.). | Supports standard hooks like `useState` and `useEffect`, but tailored for its custom runtime. |
| **Ecosystem**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Thousands of compatible libraries and components.                      | Highly internal; not intended for broad third-party use outside the Telegram client.          |

Key Differences in Usage

- **Imports**: In Teact, you do not `import React from 'react'`. Instead, you import components and hooks directly from the [Teact source files](https://github.com/Ajaxy/teact) (e.g., `import { useState } from './lib/teact/teact'`).
- **Virtual DOM**: While both use a Virtual DOM, Teact's implementation is stripped of the heavy reconciliation logic that handles complex edge cases in React, making it faster for the specific UI updates needed in a messaging app.
- **React Context**: Teact uses a custom implementation for state management (often called **TeactN**) to handle global application state without the overhead of standard React Context providers. \[[1](https://github.com/Ajaxy/teact), [2](https://github.com/Ajaxy/telegram-tt), [3](https://github.com/Ajaxy/teact)]

Would you like to see a **code snippet** comparing a standard component in both frameworks?

- [link](https://github.com/Ajaxy/teact)\
  Ajaxy/teact - GitHub\
  Teact is a lightweight and super-performant web framework with zero dependencies implementing React paradigm. It was originally de...\
  GitHub
- [link](https://dev.to/shivanim21%5F/react-vs-preact-which-javascript-library-suits-your-project-2clf)\
  React vs Preact: Which JavaScript Library Suits Your Project? - DEV Community\
  Bundle Size. Preact's size is much smaller at just 3KB when gzipped. In comparison, React's size falls between 100 and 150KB when ...\
  DEV Community
- [link](https://preactjs.com/guide/v10/differences-to-react/)\
  Differences to React – Preact Guide\
  Preact is not intended to be a reimplementation of React. There are differences. Many of these differences are trivial, or can be ...\
  Preact

Show all

criticism

May 3, 2026

Criticism of Teact generally falls into two categories: its **technical limitations** compared to the mature React ecosystem and its nature as a **proprietary, "spaghetti code"** internal tool.

Technical & Ecosystem Constraints

- **Minimalist Feature Set**: Unlike React, which includes advanced features like a [Synthetic Event system](https://itnext.io/%EF%B8%8F-top-7-reasons-why-you-should-use-react-over-preact-6f9dd5ba5b42) (normalizing events across all browsers) and Concurrent Rendering, Teact strips these away to save space.
- **Lack of Tooling**: You lose access to the vast React DevTools and ecosystem libraries. While some libraries may work via compatibility layers, many standard React packages will fail because Teact does not implement the full React API.
- **Manual Optimization**: Because it lacks React's sophisticated scheduler, developers must be much more careful with how they trigger updates to avoid "jank" or blocking the main thread. \[[1](https://itnext.io/%EF%B8%8F-top-7-reasons-why-you-should-use-react-over-preact-6f9dd5ba5b42), [2](https://www.ksolves.com/blog/reactjs/preact-vs-react), [3](https://www.youtube.com/watch?v=FpITaXEOJZ0\&t=3), [4](https://medium.com/@rana2001shubham/comparing-preact-react-performance-and-key-differences-30f0c13bd784)]

Development & Maintenance Issues

- **"Spaghetti Code" Source**: Developers who have analyzed Telegram's open-source clients often describe the underlying code as [hard to read and lacking comments](https://www.reddit.com/r/androiddev/comments/8zjesq/why%5Ftelegram%5Fsource%5Fcode%5Fis%5Fso%5Fhard%5Fto%5Fread/). It is viewed as a "one-man" project style that prioritizes raw performance over modern clean-code standards.
- **Documentation Void**: There is virtually no official documentation for Teact. To use it, you must essentially reverse-engineer the [Telegram Web A source code](https://github.com/Ajaxy/telegram-tt), making it a poor choice for anyone outside of Telegram's internal team.
- **Fragility**: Critics argue that Telegram's reliance on custom-built libraries (like Teact or their custom cryptography) creates a [complex and "fragile" ecosystem](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/education/theses/report%5FTheoVonArx.pdf) that is harder for the security community to audit compared to industry-standard tools. \[[1](https://www.reddit.com/r/androiddev/comments/8zjesq/why%5Ftelegram%5Fsource%5Fcode%5Fis%5Fso%5Fhard%5Fto%5Fread/), [2](https://eprint.iacr.org/2022/595.pdf), [3](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/education/theses/report%5FTheoVonArx.pdf)]

Are you considering using Teact for a **personal project**, or are you just curious about **Telegram's architecture**?

- [link](https://www.reddit.com/r/androiddev/comments/8zjesq/why%5Ftelegram%5Fsource%5Fcode%5Fis%5Fso%5Fhard%5Fto%5Fread/)\
  Why Telegram source code is so hard to read? : r/androiddev - Reddit\
  The NativeLoader for example is pretty cool. Facebook had to solve the exact same problem. ... So, right now we have two clients a...\
  Reddit
- [link](https://itnext.io/%EF%B8%8F-top-7-reasons-why-you-should-use-react-over-preact-6f9dd5ba5b42)\
  Top 7 Reasons: Why You Should Use React over Preact | by Vitalii Shevchuk | ITNEXT\
  React has more features and capabilities than Preact, which makes it more powerful and flexible. React has a synthetic event syste...\
  itnext.io
- [link](https://ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/education/theses/report%5FTheoVonArx.pdf)\
  Analysis of Telegram Client Security - ETH Zürich\
  private keys. However, we stress that, except in Telegram's secret chats, there is no end-to-end encryption. In fact, users need t...\
  ETH Zürich

Show all