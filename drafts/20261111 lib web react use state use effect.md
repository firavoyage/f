# where can you call async in react component

In a React component, you can call asynchronous functions **inside event handlers, custom hooks, the `useEffect` hook (with a nested function), or directly within Server Components**. However, you **cannot** make a standard Client Component function itself or the main `useEffect` callback `async`.

Here is exactly where and how you can use `async/await` in your React code:

### 1\. Inside Event Handlers

This is the most straightforward place to use `async`. Since event handlers are not called during the immediate rendering cycle, making them `async` is perfectly safe. [](https://medium.com/@luwen900131/async-await-in-react-b10e36dac6f1)

javascript

```
function SubmitButton() {
  // Directly declare the handler as async
  const handleClick = async () => {
    try {
      const response = await fetch('/api/submit');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleClick}>Submit</button>;
}

```



### 2\. Inside `useEffect` (Using an Inner Function)

You **cannot** make the `useEffect` callback itself `async` (e.g., `useEffect(async () => {})`) because an `async` function implicitly returns a Promise. React expects `useEffect` to return either nothing or a synchronous cleanup function. [](https://www.youtube.com/watch?v=A-epPYILd14)

To fix this, declare a nested `async` function _inside_ the hook and invoke it immediately. [](https://www.youtube.com/watch?v=A-epPYILd14)

javascript

```
import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. Define the async function inside the effect
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    // 2. Call it immediately
    fetchUser();
  }, []); // Empty array runs this once on mount

  return <div>{user ? user.name : 'Loading...'}</div>;
}

```



### 3\. Inside React 19 Actions and `useTransition`

If you are using React 19, you can pass `async` functions directly to form `action` props or wrap them inside a `startTransition` block. React will automatically manage the pending loading states for you. [](https://www.callstack.com/blog/the-complete-developer-guide-to-react-19-part-1-async-handling)

javascript

```
import { useTransition } from 'react';

function UpdateProfile() {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    // Wrap your async operation inside a transition
    startTransition(async () => {
      await saveProfileData();
    });
  };

  return <button onClick={handleUpdate} disabled={isPending}>Update</button>;
}

```



### 4\. React Server Components (RSC)

If you are using modern meta-frameworks like Next.js or Remix that support **Server Components**, you _can_ make the component function itself `async`. This is because it runs entirely on the server where rendering wait-times are natively handled. [](https://www.callstack.com/blog/the-complete-developer-guide-to-react-19-part-1-async-handling)

javascript

```
// This works ONLY in a Server Component!
async function ProductList() {
  const response = await fetch('https://example.com');
  const products = await response.json();

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

```



---

### ⚠️ Common Mistakes to Avoid

* **Directly making Client Components async:** Writing `async function MyComponent() {}` in standard client-side React will break your application and throw errors.
* **Forgetting Cleanup:** When fetching data asynchronously inside `useEffect`, always remember that the component might unmount before the network request finishes. Implement a flag or an `AbortController` to cancel state updates on unmounted components and avoid memory leaks. [](https://dev.to/alexandrudanpop/correctly-handling-async-await-in-react-components-4h74)

Are you trying to resolve a **specific error** like _"destroy is not a function"_ in a hook, or are you looking for the best way to handle **data fetching architectures** like React Query or React 19's `use` hook?

* [](https://www.youtube.com/watch?v=A-epPYILd14)  
YouTube·Code Radiance  
Beware of Async in useEffect: What You're Probably Doing ...  
Jan 11, 2024 — The recommended solutions involve creating an inner \`async\` function, using an IIFE, or working with Promises using \`.then()\` and ...  
5:29
* [](https://www.callstack.com/blog/the-complete-developer-guide-to-react-19-part-1-async-handling)  
Callstack  
Developer Guide to React 19: Async Handling  
September 2, 2024 — This is a new functionality that allows client components to call async functions executed on the server. In other words, it is a ...
* [](https://dev.to/alexandrudanpop/correctly-handling-async-await-in-react-components-4h74)  
DEV Community  
Correctly handling async/await in React components  
April 5, 2020 — While we wait for an async request, the component props can change or the component can unmount. An older request can also finish ...

Show all

# what if you pass a promise to react set state

If you pass a **Promise** directly to a React state updater function (like `setCount(promise)` or `this.setState({ data: promise })`), React will **not automatically resolve it** to store the underlying data. Instead, it will literally store the unresolved `Promise` object itself as your new state value.

Because state updates are synchronous, React treats a Promise just like any other JavaScript object.

---

### What happens if you do it?

javascript

```
const [data, setData] = useState("Initial");

const fetchData = () => {
  const myPromise = fetch('/api/user').then(res => res.json());
  
  // ⚠️ Storing the Promise object itself, NOT the user data
  setData(myPromise); 
};

```



If you do this, your state (`data`) becomes a Promise. If you try to render it directly in your JSX (e.g., `<div>{data}</div>`), React will throw an error:

> _Objects are not valid as a React child (found: \[object Promise\])_

### The Modern Way: Use React 19's `use` Hook

If you _want_ to pass a Promise into your component hierarchy and resolve it directly during rendering, React 19 introduced the [use hook](https://github.com/reactwg/async-react/discussions/3). This allows you to read a Promise directly inside the render method while pairing it with `<Suspense>` to handle the loading state: [](https://github.com/reactwg/async-react/discussions/3)

javascript

```
import { use, Suspense } from 'react';

function Profile({ userPromise }) {
  // React will automatically suspend until the promise resolves
  const user = use(userPromise); 
  return <div>{user.name}</div>;
}

```



### The Traditional Way: Resolve before setting state

If you are managing local component data and are not using React 19's `use` feature, you must explicitly wait for the Promise to finish resolving using `async/await` or `.then()` before calling your state setter: [](https://stackoverflow.com/questions/55100800/how-do-a-resolve-a-promise-to-setstate-in-react)

javascript

```
// Option A: Using async/await (Recommended)
const handleLoad = async () => {
  const response = await fetch('/api/user');
  const result = await response.json();
  setData(result); // Sets the actual data
};

// Option B: Using .then()
const handleLoad = () => {
  fetch('/api/user')
    .then(res => res.json())
    .then(result => setData(result)); // Sets the actual data
};

```



Are you trying to optimize **data fetching performance**, or are you running into a **specific error** while passing async data around your components?

* [](https://github.com/reactwg/async-react/discussions/3)  
GitHub  
New use() docs for Promise subclasses #3 - Async React  
Nov 6, 2025 — React can tell that if you resolved a Promise then you're still in "hydration mode" given the original data.
* [](https://stackoverflow.com/questions/55100800/how-do-a-resolve-a-promise-to-setstate-in-react)  
Stack Overflow  
How do a resolve a promise to setstate in react - Stack Overflow  
March 11, 2019 — When using \`setState\` with an asynchronous operation that returns a Promise, ensure the Promise is fully resolved (e.g., using \`.t...
* [](https://www.youtube.com/watch?v=ILMHl7nMf98)  
YouTube·Code The Web  
Simplify your React code by passing promises across server ...  
Jan 27, 2025 — Using \`\` with a fallback component can provide a visual indicator while the promise is being resolved on the client.  
7:59

Show all

# what do you cleanup after react use effect

You use a **cleanup function** in React’s `useEffect` hook to stop or undo "side effects" that shouldn't keep running when a component changes or leaves the screen. [](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)

Think of it as a rule: **"If you turn it on, turn it off before you leave."** If you don't, it can cause **memory leaks**, slow down your app, or trigger bugs like trying to update state on a component that no longer exists. [](https://www.reddit.com/r/reactjs/comments/prvg2k/whats%5Fthe%5Fpurpose%5Fof%5Fcleanup%5Ffunction%5Fin%5Fuseeffect/)

The cleanup function is simply a function that you **return** from inside `useEffect`: [](https://dev.to/werliton/useeffect-with-cleanup-function-in-react-what-it-is-when-to-use-it-and-why-k18)

javascript

```
useEffect(() => {
  // 1. SETUP: Start your side effect here

  return () => {
    // 2. CLEANUP: Undo the side effect here
  };
}, [dependencies]);

```



---

### What to Clean Up (Common Scenarios)

#### 1\. Timers (`setTimeout` and `setInterval`)

If you start a timer and the component disappears before the timer finishes, it will still try to run in the background. [](https://www.youtube.com/watch?v=2nrXQhNlYpg)

* **Setup:** `const timer = setTimeout(...)`
* **Cleanup:** `clearTimeout(timer)` or `clearInterval(timer)` [](https://www.youtube.com/watch?v=50EJWAnVQtM)

#### 2\. Event Listeners

If you attach a listener to global objects like `window` or `document`, a new listener will be added every time the component renders, slowing down your page. [](https://www.reddit.com/r/reactjs/comments/prvg2k/whats%5Fthe%5Fpurpose%5Fof%5Fcleanup%5Ffunction%5Fin%5Fuseeffect/)

* **Setup:** `window.addEventListener('resize', handleResize)`
* **Cleanup:** `window.removeEventListener('resize', handleResize)` [](https://www.youtube.com/watch?v=KnKXHcsde5A)

#### 3\. WebSockets and Subscriptions

Leaving chat connections, live database streams, or WebSockets open drains battery and server resources. [](https://stackoverflow.com/questions/62311957/some-questions-about-the-cleanup-of-useeffect)

* **Setup:** `const socket = new WebSocket(url)`
* **Cleanup:** `socket.close()` or `subscription.unsubscribe()` [](https://www.youtube.com/watch?v=50EJWAnVQtM)

#### 4\. Ongoing API Fetches (Race Conditions)

If a user clicks a button quickly, multiple API requests might fire. If an older request finishes _after_ a newer one, it could overwrite your screen with outdated data. [](https://reacttraining.com/blog/useEffect-cleanup)

* **Setup:** Create an `AbortController`
* **Cleanup:** Call `controller.abort()` to cancel the pending network request. [](https://www.sitepoint.com/react-useeffect-cleanup-patterns/)

---

### When exactly does the cleanup run?

According to the official [React Documentation](https://react.dev/reference/react/useEffect), React runs your cleanup function in two situations: [](https://react.dev/reference/react/useEffect)

1. **When the component unmounts:** Right before the component completely disappears from the screen.
2. **Before the effect runs again:** If your dependency array changes, React will first run the cleanup function from the _previous_ render to wipe the slate clean, and then run the new setup function. [](https://medium.com/@vinaykumarbr07/understanding-useeffect-execution-cleanup-in-react-with-examples-ad74f1c7a42b)

Are you currently experiencing a bug like a **memory leak** or **state update on an unmounted component**, or would you like to see a **code example** for one of the specific scenarios above?

* [](https://www.reddit.com/r/reactjs/comments/prvg2k/whats%5Fthe%5Fpurpose%5Fof%5Fcleanup%5Ffunction%5Fin%5Fuseeffect/)  
Reddit·r/reactjs  
Whats the purpose of cleanup function in useEffect? - Reddit  
September 20, 2021 — without cleanup, a component that adds a window resize event listener will add a new listener every time it remounts, leading to m...
* [](https://www.youtube.com/watch?v=50EJWAnVQtM)  
YouTube·Deeecode  
#19 React useEffect Cleanup Function  
Feb 8, 2024 — The \`useEffect\` hook in React manages side effects in applications, and the cleanup function is crucial for preventing memory leak...  
9:53
* [](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)  
LogRocket Blog  
Understanding React's useEffect cleanup function  
December 2, 2024 — The cleanup function prevents memory leaks — a situation where your application tries to update a state memory location that no lo...

Show all

# how does react use effect evaluate second param

In React, the **`useEffect` hook evaluates its second parameter—known as the dependency array—using shallow equality comparison via the `Object.is` algorithm**. [](https://react.dev/reference/react/useEffect)

When a component re-renders, React loops through the current items in the dependency array and compares each one to the corresponding item from the previous render. If **any single item** fails the `Object.is` check, React considers the dependencies changed, schedules the cleanup function (if defined), and runs the effect again. [](https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook)

---

### 1\. How Object.is Behaves with Different Data Types

Because React uses shallow comparison, the data type of the variables you pass into the array drastically changes how the evaluation behaves.

#### Primitive Values (Numbers, Strings, Booleans, null, undefined)

For primitives, `Object.is` compares their actual values. If the value is the same, the effect will **not** re-run.

* `Object.is(5, 5)` → `true` (No re-run)
* `Object.is('hello', 'hello')` → `true` (No re-run)

#### Reference Values (Objects, Arrays, Functions)

For references, `Object.is` checks **referential equality** (whether they point to the exact same location in memory), _not_ structural equality.

* `Object.is({}, {})` → `false`
* `Object.is([], [])` → `false`

If you declare an object or an array directly inside your component body and pass it to `useEffect`, it gets a brand-new memory reference on _every single render_. This causes `Object.is` to evaluate to `false`, **forcing your effect to run on every render**, even if the key-value pairs inside look identical.

---

### 2\. The Three Evaluation Scenarios

The evaluation also changes based on what you pass as the second argument:

| Second Parameter                                 | React's Evaluation Behavior                                                       | Effect Execution Frequency                           |
| ------------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Omitted entirely**useEffect(() => {})          | Skipping the parameter skips evaluation altogether.                               | Runs after **every single render**.                  |
| **Empty array**useEffect(() => {}, \[\])         | The array never changes its length or its contents (there is nothing to compare). | Runs **only once** when the component mounts.        |
| **Populated array**useEffect(() => {}, \[a, b\]) | Compares old\_a with new\_a, and old\_b with new\_b using Object.is.              | Runs on mount, and then **whenever a OR b changes**. |

---

### 3\. How to Handle Reference Types in the Array

If you must depend on an object, array, or function, you can prevent accidental re-runs using these common strategies:

* **Deconstruct properties:** Pass specific primitive values into the array instead of the whole object (e.g., use `[user.id]` instead of `[user]`).
* **Memoize objects/arrays:** Wrap the object or array declaration in a `useMemo` hook so it retains its reference across renders.
* **Memoize functions:** Wrap any component-scoped functions in a `useCallback` hook before putting them in the dependency array.

Are you currently experiencing an issue where an **effect is running on every render** or looping infinitely? If so, could you share the **snippet of your `useEffect`** and the variables inside it?

* [](https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook)  
Stack Overflow  
useEffect second argument variations in React hook?  
March 19, 2019 — If the second argument is omitted, the effect runs after every render. If an empty array (\`\[\]\`) is provided, the effect runs only ...
* [](https://react.dev/reference/react/useEffect)  
React  
useEffect - React  
React will compare each dependency with its previous value using the Object.is comparison. If you omit this argument, your Effect ...
* [](https://dev.to/cassidoo/when-useeffect-runs-3pf3)  
DEV Community  
When useEffect runs - DEV Community  
February 10, 2023 — That second parameter of useEffect is called the dependency array. There's 3 things that can happen here: If the dependency array ...

Show all

# what if you pass non array second param to react use effect

If you pass a non-array second parameter to React's `useEffect`, **React will throw a runtime error or a console warning**, depending on your environment and exact version.

According to the official [React Documentation](https://react.dev/reference/react/useEffect), the second argument must be a valid array (or omitted entirely). Here is what happens under the hood and what you will experience: [](https://react.dev/reference/react/useEffect)

### 1\. You will get a JavaScript Error or Warning

Because React strictly expects a dependency array (or `undefined`/`null`), passing a type like a string, number, object, or boolean breaks React's internal comparison algorithm.

* **In Development:** You will see a clear console error warning you that the dependencies must be an array. For instance, passing a primitive like `0` instead of `[]` yields console errors because it is an invalid type. [](https://stackoverflow.com/questions/62781907/react-hooks-0-vs-empty-array-as-second-argument-in-useeffect)
* **In Production / Runtime:** If code execution reaches the hook, React will usually crash with a **`TypeError: ... is not a function`** or a type checking error when it tries to iterate over or check the length of your invalid argument.

### 2\. The Linting Rule Will Catch It

If you have the official `eslint-plugin-react-hooks` configured in your project, your code editor will immediately flag this with a red underline before you even run the app. It expects an inline array format like `[dep1, dep2]`. [](https://react.dev/reference/react/useEffect)

---

### What are the only valid options?

To control your effect correctly, you only have three valid paths: [](https://www.youtube.com/watch?v=Td7WQDrdoRg&t=229)

| Second Parameter                                              | What it does                                                                  |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Omitted completely** useEffect(() => {})                    | Runs after **every single render** of the component.                          |
| **An empty array** useEffect(() => {}, \[\])                  | Runs **only once**, right after the component mounts.                         |
| **An array with dependencies** useEffect(() => {}, \[count\]) | Runs on mount, and then re-runs **only when a specified dependency changes**. |

Are you trying to resolve a **specific error message** in your console right now, or are you looking to optimize how an effect **triggers on a specific primitive value** (like a string or a number)?

* [](https://stackoverflow.com/questions/62781907/react-hooks-0-vs-empty-array-as-second-argument-in-useeffect)  
Stack Overflow  
javascript - 0 vs. empty array as second argument in useEffect  
July 7, 2020 — Using \`0\` as the second argument in \`useEffect\` instead of an empty array (\`\[\]\`) is incorrect and will lead to console warnings,
* [](https://react.dev/reference/react/useEffect)  
React  
useEffect  
The list of dependencies must have a constant number of items and be written inline like \[dep1, dep2, dep3\] . See the difference b...
* [](https://www.youtube.com/watch?v=Td7WQDrdoRg&t=229)  
YouTube·A Coder's Journey  
Mastering Hooks in React #2 - Side Effects with useEffect  
Jun 18, 2026 — The dependency array dictates when the effect runs and has three common patterns. If an empty array is passed, the effect runs onl...  
6m

Show all

# what if you pass null undefined second param to react use effect

If you pass `null` or `undefined` as the second argument to React's `useEffect`, **the effect will run on every single render**, behaving exactly as if you omitted the second argument entirely. [](https://stackoverflow.com/questions/72767464/what-happens-for-an-useeffect-with-no-second-argument-or-one-equal-to-null-or-un)

Here is what happens under the hood and what you will encounter in your code:

### 1\. The Runtime Behavior

React checks the second argument to see if it is a valid array. If you pass `null` or `undefined`, React treats it as a missing dependency array. [](https://stackoverflow.com/questions/72767464/what-happens-for-an-useeffect-with-no-second-argument-or-one-equal-to-null-or-un)

* **Initial Mount:** The effect runs once.
* **Subsequent Renders:** The effect runs again every time the component updates or re-renders. [](https://stackoverflow.com/questions/72767464/what-happens-for-an-useeffect-with-no-second-argument-or-one-equal-to-null-or-un)

### 2\. ESLint Warnings

If you have the official React hooks linting rules configured (which is standard in almost all React setups), ESLint will flag this with a warning: [](https://stackoverflow.com/questions/72767464/what-happens-for-an-useeffect-with-no-second-argument-or-one-equal-to-null-or-un)

> _React Hook useEffect was passed a dependency list that is not an array literal. This means we can't statically verify whether you've passed the correct dependencies. (react-hooks/exhaustive-deps)_

### Quick Comparison of Dependency Arguments

| Second Argument    | Behavior                                                       |
| ------------------ | -------------------------------------------------------------- |
| undefined or null  | Runs on **every single render** (same as omitting it).         |
| \[\] (Empty Array) | Runs **only once** when the component mounts.                  |
| \[dep1, dep2\]     | Runs on mount, and re-runs **only when a dependency changes**. |

---

### What if `null` or `undefined` is _inside_ the array?

If you pass an array but one of the variables _inside_ it happens to evaluate to `null` or `undefined` (e.g., `useEffect(() => {}, [props.userId])` where `userId` is missing), **that is perfectly fine**. [](https://www.reddit.com/r/reactjs/comments/xahe6r/what%5Fhappens%5Fwith%5Fuseeffect%5Fhaving%5Feither%5Fnull%5For/)

React uses `Object.is` to compare dependency values across renders. If the value stays `undefined`, the effect won't re-run. It will only trigger a re-run if the value changes (like moving from `undefined` to an actual string or number). [](https://www.reddit.com/r/reactjs/comments/xahe6r/what%5Fhappens%5Fwith%5Fuseeffect%5Fhaving%5Feither%5Fnull%5For/)

Are you seeing an **infinite loop** in your component right now, or are you trying to conditionally prevent an effect from running? If you share your **code snippet**, I can help you structure the dependency array correctly!

* [](https://stackoverflow.com/questions/72767464/what-happens-for-an-useeffect-with-no-second-argument-or-one-equal-to-null-or-un)  
Stack Overflow  
What happens for an useEffect with no second argument or ...  
Jun 27, 2022 — Eslint in your editor you would get this warning: React Hook useEffect was passed a dependency list that is not an array literal. ...
* [](https://www.reddit.com/r/reactjs/comments/xahe6r/what%5Fhappens%5Fwith%5Fuseeffect%5Fhaving%5Feither%5Fnull%5For/)  
Reddit·r/reactjs  
What happens with useEffect having either null or undefined ...  
September 10, 2022 — React's \`useEffect\` hook compares dependencies using \`Object.is\`. If a dependency is \`null\` or \`undefined\`, the effect will not re...
* [](https://blog.logrocket.com/useeffect-react-hook-complete-guide/)  
LogRocket Blog  
How to use the useEffect hook in React: A complete guide  
June 3, 2025 — When a functional component that contains a useEffect Hook is initially rendered, the code inside the useEffect block runs after t...

Show all



