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



