<!-- i guess a css transition or animation might be enough for the popup. yes, i would have a loading state, and a set timeout, just to be explicit. -->

# .

<!-- i no longer have to spin up an agent for this i realize -->

<!-- obviously app could not unmount or cleanup -->

```ts
import mousetrap from 'mousetrap';
import { useState, useEffect } from "react"

export function App() {
  console.log(mousetrap)
  useEffect(()=>{
    mousetrap.bind('ctrl+shift+/', (e)=>{
      console.log(e)
      console.log('open shortcuts help')
    })
    // mousetrap.bind('ctrl+?', (e)=>{
    //   console.log(e)
    //   console.log('open shortcuts help')
    // })
    mousetrap.bind('ctrl+,', (e)=>{
      console.log(e)
      console.log('open settings')
    })
  })
}
```

# (?) react transition

11:40 PM

In React, the term **"Transition"** primarily refers to two distinct concepts: <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">State Transitions</strong> (a built-in feature to keep the UI responsive during heavy state updates) and <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Visual Transitions</strong> (CSS/DOM animations for entering, exiting, or moving page elements)</mark>. \[[1](https://reactcommunity.org/react-transition-group/), [2](https://www.w3schools.com/REACT/react%5Ftransitions.asp), [3](https://react.dev/reference/react/ViewTransition), [4](https://react.dev/reference/react/useTransition), [5](https://react-router-docs-ja.techtalk.jp/explanation/react-transitions)]

***

### 1. Concurrent React State Transitions (Built-in Hook) \[[1](https://aryalskanda1.medium.com/the-react-hook-that-lets-you-update-state-without-blocking-the-ui-eaabac1f68d6), [2](https://medium.com/@aurelmirashi/usetransition-vs-usedeferredvalue-hook-the-most-underused-hooks-d274faaaaf2d)]

Introduced in React 18 (and expanded in React 19), state transitions let you mark certain state updates as **low-priority ("non-urgent")**. This ensures that heavy background rendering doesn't block urgent user interactions like typing or clicking. \[[1](https://www.youtube.com/watch?v=N5R6NL3UE7I), [2](https://reactrouter.com/explanation/react-transitions), [3](https://qiita.com/tsubasa%5Fk0814/items/cab39ad7f47cac6491cf), [4](https://www.w3schools.com/REACT/react%5Ftransitions.asp)]

### How to use `useTransition`

You wrap the slow state update function inside `startTransition`. React will render it in the background, allowing you to use `isPending` to show a loading state. \[[1](https://ja.react.dev/reference/react/useTransition), [2](https://www.youtube.com/watch?v=N5R6NL3UE7I)]

javascript

```
import { useState, useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    // High-priority interactions (like input typing) can interrupt this block
    startTransition(() => {
      setTab(nextTab); // Heavy/slow state update
    });
  }

  return (
    <div>
      <button onClick={() => selectTab('about')}>About</button>
      <button onClick={() => selectTab('posts')}>Posts</button>

      {isPending && <p>Loading heavy content...</p>}

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
    </div>
  );
}
```

Use code with caution.

***

### 2. Native View Transitions (Built-in Experimental Feature) \[[1](https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more), [2](https://react-router-docs-ja.techtalk.jp/explanation/react-transitions)]

- [link](https://ja.react.dev/reference/react/useTransition)\
  useTransition - React\
  注意点 \* useTransition はフックであるため、コンポーネント内かカスタムフック内でのみ呼び出すことができます。 他の場所（例えば、データライブラリ）でトランジションを開始する必要がある場合は、代わりにスタンドアロンの startTransitio...\
  React
- [link](https://www.youtube.com/watch?v=N5R6NL3UE7I)\
  React 18 useTransition Hook Crash Course\
  The video discusses the \`useTransition\` hook in React 18, which aims to improve application performance and responsiveness, especi...\
  7:50\
  YouTube·Web Dev Simplified
- [link](https://qiita.com/tsubasa%5Fk0814/items/cab39ad7f47cac6491cf)\
  【React18 新機能】Transitionって何？【前編】 #JavaScript - Qiita\
  トランジション（transition; 段階的推移）とは React における新たな概念であり、緊急性の高い更新 (urgent update) と高くない更新 (non-urgent update) を区別するためのものです。 ・緊急性の高い更新とはタイプ、...\
  Qiita

Show all

React includes a native component. It provides a declarative wrapper around the browser's native [View Transition API](https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more) to smoothly animate page or component switches without third-party libraries. \[[1](https://www.youtube.com/watch?v=6oL-skHq5Tk), [2](https://azukiazusa.dev/blog/declarative-page-transition-animation-with-react-viewtransition-component/), [3](https://react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more)]

javascript

```
import { ViewTransition } from 'react';

// Wraps elements to automatically trigger native browser cross-fades on update
function Thumbnail({ src }) {
  return (
    <ViewTransition>
      <img src={src} alt="Gallery item" />
    </ViewTransition>
  );
}
```

Use code with caution.

***

### 3. Visual & Animation Transition Libraries

If you want to animate components entering or leaving the DOM (like fade-ins, dropdowns, or page-slide animations), you rely on dedicated ecosystem packages: \[[1](https://www.youtube.com/watch?v=S4HYwsBRpRs), [2](https://www.telerik.com/kendo-react-ui/components/animation/types), [3](https://css-tricks.com/animating-between-views-in-react/), [4](https://ja.react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more), [5](https://reactcommunity.org/react-transition-group/)]

- \*\*\*\*Framer Motion (Recommended)\*\*: The industry standard for modern React web animations. Highly robust, intuitive, and handles complex exit layout animations with ease. \[[1](https://www.dronahq.com/react-animation-libraries/), [2](https://hackmd.io/@micha-roon/SJzI4cmDJx), [3](https://www.dhiwise.com/post/mastering-react-page-transitions-with-framer-motion), [4](https://www.youtube.com/watch?v=S4HYwsBRpRs)]
- \*\*\*\*[React Transition Group](https://reactcommunity.org/react-transition-group/)\*\*: A classic, lightweight utility that doesn't animate styles itself, but instead orchestrates adding and removing CSS class names (like `*-enter` and `*-exit`) exactly as components mount or unmount from the DOM. \[[1](http://reactcommunity.org/react-transition-group/css-transition), [2](https://reactcommunity.org/react-transition-group/)]
- \*\*\*\*Tailwind CSS (or Headless UI)\*\*: Uses standard CSS transitions by toggling utility classes based on reactive boolean flags. \[[1](https://blogs.purecode.ai/blogs/tailwind-transition), [2](https://ja.react.dev/blog/2025/04/23/react-labs-view-transitions-activity-and-more)]

To give you the most exact example code or package recommendation, could you tell me:

- Are you looking to **fix UI sluggishness** (Performance) or add **visual animation** (CSS Effects)?
- If it is for animation, are you using any specific design/styling framework like **Tailwind CSS**, **Material UI**, or **plain CSS**?

# will i have a loading state to have some animation during state transition in react

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can absolutely create loading states to show animations during state transitions in React</span></mark>. How you implement it depends on whether you are handling local state, fetching data, or transitioning between pages. \[[1](https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/), [2](https://www.reddit.com/r/reactjs/comments/10ex5tt/how%5Fto%5Flazy%5Fload%5Fwith%5Fplaceholders/)]

### Core Approaches

- **Local State Loading:** Use a simple boolean flag (`isLoading`) to toggle your animation.
- **React Suspense:** Wrap components to automatically show a fallback spinner during lazy loading.
- **Transition API (`useTransition`):** Keep the UI responsive during heavy state updates without freezing. \[[1](https://magicui.design/blog/css-loader-animation), [2](https://www.acte.in/lazy-loading-react-overview), [3](https://medium.com/@cizu64/improving-web-application-performance-with-loadingui-and-suspense-in-react-and-nextjs-46a816ea9d6d), [4](https://www.betterbugs.io/blog/reactjs-suspense-async-data), [5](https://lovleshpokra.medium.com/react-19-how-to-use-usetransition-useoptimistic-and-useactionstatehooks-d77352c03128)]

### 1. Manual State Loading (Data Fetching)

This is the most common method for API calls.

jsx

```
function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <SpinnerAnimation />;
  return <DataView data={data} />;
}
```

Use code with caution.

### 2. Smooth Transitions with `useTransition`

Introduced in React 18, this hook lets you mark a state update as a non-blocking "transition." It provides an `isPending` flag to trigger animations while the new UI renders in the background. \[[1](https://hu.react.dev/reference/react/useTransition), [2](https://blog.bitsrc.io/understanding-transition-in-react-18-using-usetransition-hook-8639d6ced0f5), [3](https://www.telerik.com/blogs/concurrent-rendering-react-18), [4](https://www.epicreact.dev/workshops/react-suspense/usetransition)]

jsx

```
import { useState, useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div>
      <TabButton onClick={() => selectTab('about')}>About</TabButton>
      {isPending && <LoadingOverlay />}
      <TabContent tab={tab} />
    </div>
  );
}
```

Use code with caution.

### 3. Page Transitions (Framers & Routers)

For animated entries and exits between pages or tabs, use a dedicated animation library alongside your router. \[[1](https://fireship.dev/react-router-v5-animated-transitions)]

- **Framer Motion:** Use to animate components as they mount and unmount.
- **React Router:** Leverage the `useNavigation` hook to detect `navigation.state === "loading"` during route changes. \[[1](https://dev.to/joserfelix/page-transitions-in-react-1c8g), [2](https://www.dhiwise.com/post/mastering-react-page-transitions-with-framer-motion)]

To help pinpoint the best solution, could you tell me:

- What **action** triggers the transition? (e.g., clicking a link, submitting a form, loading a page)

- Are you using any specific **routing library**? (e.g., React Router, Next.js)

- Do you want a **full-page spinner** or a **skeleton screen**?

- [link](https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/)\
  How to Create a Loading Animation in React from Scratch\
  Apr 7, 2023 — How to Create a Loading Animation in React The loading animation in React ( React App ) differs from how it is done in JavaScript ...\
  \
  \
  Stack Abuse

- [link](https://www.reddit.com/r/reactjs/comments/10ex5tt/how%5Fto%5Flazy%5Fload%5Fwith%5Fplaceholders/)\
  how to lazy load with placeholders? : r/reactjs\
  Jan 18, 2023 — Overview: You will need to create a loading state, and based on that you will render either the skeleton (placeholder) or the actu...\
  \
  Reddit

- [link](https://magicui.design/blog/css-loader-animation)\
  Crafting the Perfect CSS Loader Animation\
  Nov 25, 2025 — The most common way to use this is to show the loader conditionally based on your application's state. You'll typically have a boo...\
  \
  \
  Magic UI

Show all

# can i mount a react component that renders no element

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can mount a React component that renders no element</span></mark>. \[[1](https://robcc.medium.com/handling-animations-in-react-9c42409a9e77), [2](https://medium.com/@sazid7046/re-renders-in-react-js-88a48e0e85d7)]

### How to Do It

To render nothing, your component must return `null`. \[[1](https://coreui.io/answers/how-to-render-null-in-react/)]

jsx

```
const HiddenComponent = () => {
  return null;
};
```

Use code with caution.

### Key Technical Facts

- **Lifecycle execution**: The component still runs `useEffect` and lifecycle methods.
- **DOM footprint**: React creates no HTML tags in the DOM for this component.
- **State management**: The component can still hold state and trigger context updates.
- **Alternative returns**: You can also return `undefined`, empty fragments , or `false`. \[[1](https://kyleshevlin.com/renderless-components/), [2](https://dev.to/tusharkashyap63/use-refs-to-check-if-a-component-is-still-mounted-2gk7), [3](https://www.geeksforgeeks.org/reactjs/mimicking-lifecycle-methods-with-hooks-in-react/), [4](https://acko.net/blog/react-the-missing-parts/), [5](https://www.wavether.com/blog/2025/07/21/understanding-the-lifecycle-of-useref-in-react-and-avoiding-stale-reference-bugs/)]

### Common Use Cases

- **Event listeners**: Attaching global window or document listeners.
- **Analytics trackers**: Triggering page view logs on mount.
- **State providers**: Managing data logic without adding visual layout. \[[1](https://medium.com/@BlainBrawn/the-silent-killer-react-memory-leaks-and-how-to-stop-them-f941a828e2c4)]

To help apply this to your project, could you share **what logic** you want this component to handle, or if you need help with **testing a renderless component**?

- [link](https://robcc.medium.com/handling-animations-in-react-9c42409a9e77)\
  Mounting and un-mounting a React component with animation | by Roberto C. C. | Medium\
  Nov 7, 2019 — Mounting and un-mounting a React component with animation state For the initial state, mount would match whatever was passed as pr...\
  \
  \
  Medium
- [link](https://medium.com/@sazid7046/re-renders-in-react-js-88a48e0e85d7)\
  Re-renders in React Js. Re-render: Updating display in React… | by Sazid\
  Jan 8, 2024 — State updates, nested components, and re-renders Mounting occurs when a component is first displayed on the screen. Unmounting tak...\
  \
  \
  Medium
- [link](https://coreui.io/answers/how-to-render-null-in-react/)\
  How to Render Null in React · CoreUI\
  Nov 2, 2025 — Return null from a component's render method or function body to render nothing while keeping the component mounted.\
  \
  CoreUI

Show all

## You said: can i omit the return

No, you cannot completely omit the return statement if the function body uses curly braces. \[[1](https://medium.com/@gracet37/arrow-function-return-rules-4bab63961b92)]

### JavaScript Syntax Rules

- **With curly braces `{}`**: You must explicitly write `return null;`. Omitting it causes the function to return `undefined`. In older React versions, returning `undefined` threw an error, though React 18+ allows it. However, explicit returns prevent bugs.
- **With arrow functions**: You can omit the `return` keyword and the curly braces together by using an implicit return. \[[1](https://medium.com/@gracet37/arrow-function-return-rules-4bab63961b92), [2](https://dev.to/wisdomudo/javascript-function-return-statement-a-complete-beginners-guide-4213), [3](https://discuss.kotlinlang.org/t/make-return-optional/19520)]

### Correct Examples

**Implicit Return (No `return` keyword)**

jsx

```
const HiddenComponent = () => null;
```

Use code with caution.

**Explicit Return (With curly braces)**

jsx

```
const HiddenComponent = () => {
  return null;
};
```

Use code with caution.

### What to Avoid

Do not leave the block empty like this:

jsx

```
// Avoid this: returns undefined implicitly
const HiddenComponent = () => {
  // logic here
};
```

Use code with caution.

Would you like to see how to handle **TypeScript types** for this type of component, or do you need help **refactoring an existing component**?

- [link](https://medium.com/@gracet37/arrow-function-return-rules-4bab63961b92)\
  Arrow Function => Return Rules. The functional nature of Javascript… | by Grace Tan\
  Sep 10, 2019 — Curly brackets wrapped around the function body will no longer return implicitly and requires the 'return' statement (i.e. explici...\
  \
  \
  Medium
- [link](https://medium.com/@gracet37/arrow-function-return-rules-4bab63961b92)\
  Arrow Function => Return Rules. The functional nature of Javascript… | by Grace Tan\
  Sep 10, 2019 — 1. Function body wrapped in curly brackets require a return statement Curly brackets wrapped around the function body will no long...\
  \
  \
  Medium
- [link](https://dev.to/wisdomudo/javascript-function-return-statement-a-complete-beginners-guide-4213)\
  JavaScript Function Return Statement: A Complete Beginner's Guide\
  Aug 11, 2025 — A function in JavaScript that omits a return statement will always send back undefined.\
  \
  \
  DEV Community

## You said: i can absolutely omit it and have an empty block

You are correct that JavaScript allows you to write an empty block, which implicitly returns `undefined`. In modern React (React 18 and newer), returning `undefined` is perfectly valid and will not crash your application.

However, there is a major functional difference between an empty block and returning `null`.

### The Core Difference

- **`return null;`**: React explicitly treats this as a directive to render nothing. It is the standard, intentional way to signal an empty render.
- **Empty block `{ }`**: The function returns `undefined`. While React 18 allows this, it is often a source of bugs because JavaScript cannot distinguish between an intentional empty render and a function where you simply forgot to return a value.

### Risks of the Empty Block

- **Linter Warnings**: Standard ESLint configurations (like `consistent-return` or React-specific plugins) will flags empty blocks or missing returns as errors.
- **Code Readability**: Other developers reading your code may assume the missing return is a mistake or incomplete logic.
- **TypeScript Strictness**: If you use TypeScript, a function component with an empty block will fail type-checking unless you explicitly type the return as `void`.

If you prefer writing minimal code without the word `return`, the community standard is to use the implicit arrow return instead:

jsx

```
const HiddenComponent = () => null;
```

Use code with caution.

Are you running into specific **linter errors** with your empty block, or would you like to see how **TypeScript handles** these two different approaches?

# is it a good practice to have a react component that renders nothing and only popup a modal when certain keys are pressed

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, this is a common and acceptable practice</span></mark> in React, often called a **headless shortcut listener** or **global event listener component**.

While valid, there are structural trade-offs to consider regarding where the modal logic actually lives.

### Why It Is Good Practice

- **Separation of Concerns:** It isolates keyboard shortcut logic from your main layout components.
- **Reusability:** You can drop this component into any page or dashboard that needs the modal.
- **Performance:** Keeps the parent component clean and prevents unnecessary re-renders of the main UI when keys are pressed. \[[1](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/), [2](https://www.codeconcisely.com/posts/react-detect-clicks-outside-component/), [3](https://www.freecodecamp.org/news/create-react-reusable-modal-component/), [4](https://jbinternational.co.uk/article/view/3585)]

### Potential Downsides

- **Hidden Behavior:** Developers reading the parent component code won't easily see that a modal or global listener exists.
- **Unnecessary Component Layer:** Creating a full component just to host a `useEffect` can sometimes be overkill. \[[1](https://www.erzhtor.com/articles/building-a-customizable-modal-component-with-react)]

### Better Alternative: Custom Hook \[[1](https://www.reddit.com/r/reactjs/comments/uyxge7/is%5Fit%5Fbad%5Fto%5Fhave%5Fcomponents%5Fthat%5Freturn%5Fnull/), [2](https://medium.com/javascript-decoded-in-plain-english/inside-react-hooks-unveiling-the-mental-model-and-hidden-pitfalls-82306b143184)]

Instead of a component that renders nothing, the industry standard is to use a **custom React hook**. This achieves the same isolation but keeps your component tree cleaner. \[[1](https://medium.com/javascript-decoded-in-plain-english/inside-react-hooks-unveiling-the-mental-model-and-hidden-pitfalls-82306b143184)]

javascript

```
// 1. Create the hook
function useKeyboardModal(targetKey, openModalCallback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === targetKey) {
        openModalCallback();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [targetKey, openModalCallback]);
}

// 2. Use it in your actual Modal or Page component
function App() {
  const [isOpen, setIsOpen] = useState(false);

  useKeyboardModal('k', () => setIsOpen(true));

  return isOpen ? <MyModal onClose={() => setIsOpen(false)} /> : null;
}
```

Use code with caution.

### Best Practices If You Keep the Component

If you stick with a renderingless component, ensure you follow these rules: \[[1](https://www.dhiwise.com/post/conditional-rendering-in-reactjs)]

- **Clean Up Listeners:** Always remove the `keydown` event listener in the `useEffect` cleanup function to prevent memory leaks.
- **Avoid Prop Drilling:** Pass the modal trigger state through a context provider if multiple deep components need to open it.
- **Accessibility:** Ensure the modal still follows standard accessibility guidelines (focus management, closing with `Escape`) once it opens. \[[1](https://blog.openreplay.com/implementing-outside-click-in-react/), [2](https://javascript.plainenglish.io/10-react-antipatterns-to-avoid-582f652c98c3), [3](https://medium.com/@ignatovich.dm/the-hidden-power-of-react-portals-creative-use-cases-beyond-modals-b8929f07b0f4), [4](https://nearform.com/insights/exploring-react-portals/), [5](https://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/)]

To help narrow down the best approach, let me know:

- Will this shortcut be active **globally across the entire app** or just on **one specific page**?

- Do you use a **state management library** (like Redux or Zustand) or just standard **React state**?

- Do you need to support **complex key combinations** (like `Ctrl + K`)? \[[1](https://www.reddit.com/r/reactjs/comments/10ea2ih/a%5Fguide%5Fto%5Fmanaging%5Fmodals%5Fin%5Freact/), [2](https://javascript.plainenglish.io/react-avoid-unnecessary-re-rendering-of-array-components-when-using-zustand-f00cf1e8b6a2), [3](https://maybe.works/blogs/react-js-best-practices)]

- [link](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/)\
  Separation of Concerns in React –How to Use Container and Presentational Components\
  Dec 6, 2022 — Separation of Concerns in React –How to Use Container and Presentational Components Many new React developers combine logic and pr...\
  \
  \
  freeCodeCamp

- [link](https://www.codeconcisely.com/posts/react-detect-clicks-outside-component/)\
  Detecting Clicks Outside of a Component in React\
  Jul 30, 2023 — Now that you have seen how to automatically close a modal component when clicking outside of it, it is time to learn how to turn t...\
  \
  \
  www.codeconcisely.com

- [link](https://www.freecodecamp.org/news/create-react-reusable-modal-component/)\
  How to Create a Reusable Modal Component in React\
  Sep 24, 2024 — Separation of concerns: The modal is now only responsible for rendering the container (layout, title, content, and so on). The log...\
  \
  \
  freeCodeCamp

Show all

# how to listen to keyboard shortcuts in react

To listen to keyboard shortcuts in React, you can either **write a custom hook using native `useEffect` listeners** for simple requirements or **use a dedicated library** like `react-hotkeys-hook` for complex multi-key combinations. \[[1](https://github.com/JohannesKlauss/react-hotkeys-hook), [2](https://www.fullstack.com/labs/resources/blog/keyboard-shortcuts-with-react-hooks)]

***

### Option 1: Native React Hooks (Best for Simple Shortcuts) \[[1](https://medium.com/@amarkanala/introducing-react-keyboard-shortcuts-clean-performant-hook-based-keyboard-shortcuts-for-modern-f9edefbf92bb)]

You can build a reusable custom hook utilizing standard browser `keydown` events. This approach is ideal if you want to avoid third-party libraries and only need to capture straightforward combinations (e.g., `Ctrl + K` or `Escape`). \[[1](https://dev.to/barrymichaeldoyle/how-to-build-a-custom-react-hook-to-listen-for-keyboard-events-32b4), [2](https://medium.com/@meplafi/adding-keyboard-shortcuts-to-a-react-typescript-app-using-custom-hooks-1c3e2dca2b1d), [3](https://goulet.dev/posts/react-handle-keyboard-shortcuts/), [4](https://www.freecodecamp.org/news/how-to-build-a-reusable-keyboard-shortcut-listener-component-in-react/)]

### Create the Custom Hook

tsx

```
import { useEffect } from 'react';

interface ShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean; // Command key on Mac
  altKey?: boolean;
  shiftKey?: boolean;
}

export function useKeyboardShortcut(config: ShortcutConfig, callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if text inputs have focus to avoid triggering shortcuts while typing
      const activeEl = document.activeElement?.tagName;
      if (activeEl === 'INPUT' || activeEl === 'TEXTAREA' || activeEl === 'SELECT') {
        return;
      }

      const matchKey = event.key.toLowerCase() === config.key.toLowerCase();
      const matchCtrl = !!config.ctrlKey === event.ctrlKey;
      const matchMeta = !!config.metaKey === event.metaKey;
      const matchAlt = !!config.altKey === event.altKey;
      const matchShift = !!config.shiftKey === event.shiftKey;

      if (matchKey && matchCtrl && matchMeta && matchAlt && matchShift) {
        event.preventDefault(); // Stop default browser actions like Ctrl+S saving the page
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts to prevent memory leaks
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [config, callback]);
}
```

Use code with caution.

### Use the Hook in a Component \[[1](https://devtrium.com/posts/how-keyboard-shortcut)]

tsx

```
import { useKeyboardShortcut } from './useKeyboardShortcut';

export default function App() {
  // Triggers when pressing Control + K (or Cmd + K)
  useKeyboardShortcut({ key: 'k', ctrlKey: true }, () => {
    console.log('Search command palette opened!');
  });

  return <div>Press Ctrl + K to activate.</div>;
}
```

Use code with caution.

***

### Option 2: Using a Production-Ready Library (Best for Complex Apps)

For scale, handling cross-platform anomalies (like `Cmd` vs `Ctrl`), or Vim-style multi-key sequences, lean on community-tested packages: \[[1](https://vercel.com/kb/guide/adding-keyboard-shortcuts-to-react-apps-with-tanstack-hotkeys)]

### Choice A: `react-hotkeys-hook` \[[1](https://react-hotkeys-hook.vercel.app/docs/intro)]

This is the most popular, lightweight library utilizing React hooks. \[[1](https://github.com/JohannesKlauss/react-hotkeys-hook)]

1. **Install**: `npm install react-hotkeys-hook`
2. **Implement**:

tsx

```
import { useHotkeys } from 'react-hotkeys-hook';

export default function MyComponent() {
  // Automatically handles 'mod' as Ctrl on Windows and Cmd on Mac
  useHotkeys('mod+k', () => console.log('Shortcut triggered!'));

  return <div>Press Ctrl+K or Cmd+K</div>;
}
```

Use code with caution.

### Choice B: `@tanstack/react-hotkeys`

A newer, highly capable option from the TanStack family providing great type safety, scoping, and devtools. \[[1](https://vercel.com/kb/guide/adding-keyboard-shortcuts-to-react-apps-with-tanstack-hotkeys)]

1. **Install**: `npm install @tanstack/react-hotkeys`
2. **Implement**: \[[1](https://vercel.com/kb/guide/adding-keyboard-shortcuts-to-react-apps-with-tanstack-hotkeys)]

tsx

```
import { useHotkey } from '@tanstack/react-hotkeys';

export default function Component() {
  useHotkey('Control+k', () => {
    console.log('TanStack Hotkey Triggered');
  });
}
```

Use code with caution.

***

### Key Best Practices

- [link](https://dev.to/barrymichaeldoyle/how-to-build-a-custom-react-hook-to-listen-for-keyboard-events-32b4)\
  How to Build a Custom React Hook to Listen for Keyboard ...\
  Nov 12, 2023 — A More General Use Case Hook. My use case above was rather specific, but if you need to create a more generalized reusable hook, y...\
  DEV Community
- [link](https://goulet.dev/posts/react-handle-keyboard-shortcuts/)\
  Handling Keyboard Shortcuts in React - goulet.dev\
  Sep 8, 2018 — As a user, whenever I come across dialogs or modals or any other, uhh, "dismissable" UX patterns I instinctively hit the Escape ke...\
  goulet.dev
- [link](https://devtrium.com/posts/how-keyboard-shortcut)\
  How to add keyboard shortcuts to your React app - Devtrium\
  Aug 18, 2021 — The next part is the useEffect . It's used to add an event listener to the document. An event listener is just a way to tell the b...\
  Devtrium

Show all

- **Always Clean Up**: If you write custom listeners, always use the `useEffect` cleanup function (`removeEventListener`) to prevent performance leaks.
- **Input Field Filtering**: Prevent shortcuts from firing when users type into an or unless explicitly desired.
- **Override Browser Defaults**: Use `event.preventDefault()` so your keybinds do not trigger default operations (like native browser search or print prompts). \[[1](https://devtrium.com/posts/how-keyboard-shortcut), [2](https://dev.to/xenral/react-keyboard-shortcuts-boost-app-performance-using-react-keyhub-25co), [3](https://dev.to/lalitkhu/implement-keyboard-shortcuts-in-your-react-app-475c), [4](https://www.freecodecamp.org/news/how-to-build-a-reusable-keyboard-shortcut-listener-component-in-react/), [5](https://www.taniarascia.com/keyboard-shortcut-hook-react/)]

If you would like, I can help you **write the custom hook logic with TypeScript configurations**, or help you **handle sequential hotkeys** (like pressing `G` then `H`). Which route fits your project best? \[[1](https://react-hotkeys-hook.vercel.app/docs/api/use-hotkeys)]

## You said: all react-hotkeys-hook api

The primary API of **`react-hotkeys-hook`** centers on three major features: the core **`useHotkeys`** hook, the **`useRecordHotkeys`** hook for user settings, and the for global scoping. \[[1](https://react-hotkeys-hook.vercel.app/), [2](https://tanstack.com/hotkeys/latest/docs/framework/react/guides/hotkeys), [3](https://react-hotkeys-hook.vercel.app/), [4](https://vercel.com/kb/guide/adding-keyboard-shortcuts-to-react-apps-with-tanstack-hotkeys)]

***

### 1. The Core Hook: `useHotkeys`

Registers global or element-scoped keyboard listeners. \[[1](https://react-hotkeys-hook.vercel.app/)]

tsx

```
useHotkeys(keys, callback, options?, dependencies?)
```

Use code with caution.

### Function Arguments

- **`keys`** `(string | string[])`: The hotkey combination (e.g., `'ctrl+k'`, `'g>i>t'` for sequences, or `['meta+s', 'ctrl+s']` for cross-platform matching).
- **`callback`** `(event: KeyboardEvent, handler: HotkeysEvent) => void`: The function that triggers when matched.
- **`options`** `(Options)`: _Optional_ object to configure behavior (detailed below).
- **`dependencies`** `(DependencyList)`: _Optional_ dependency array ensuring you capture updated state without stale closures. \[[1](https://github.com/JohannesKlauss/react-hotkeys-hook), [2](https://github.com/JohannesKlauss/react-hotkeys-hook), [3](https://react-hotkeys-hook.vercel.app/), [4](https://vercel.com/kb/guide/adding-keyboard-shortcuts-to-react-apps-with-tanstack-hotkeys), [5](https://github.com/JohannesKlauss/react-hotkeys-hook)]

***

### 2. The `options` Configuration Object

The optional third argument provides deep control over when and how keyboard events register: \[[1](https://react-hotkeys-hook.vercel.app/docs/api/use-hotkeys)]

| Option \[[1](https://react-hotkeys-hook.vercel.app/docs/api/use-hotkeys), [3](https://github.com/JohannesKlauss/react-hotkeys-hook), [4](https://react-hotkeys-hook.vercel.app/docs/documentation/advanced-usage), [5](https://www.reshaped.so/docs/hooks/use-hotkeys)] | Type       | Default                          | Description                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **`enabled`**                                                                                                                                                                                                                                                           | `boolean   | ((e: KeyboardEvent) => boolean)` | `true`                                                                                      | Turns the hotkey on/off dynamically. If a function is passed, it evaluates upon keystroke. |
| **`enableOnFormTags`**                                                                                                                                                                                                                                                  | `boolean   | FormTags[]`                      | `false`                                                                                     | Allows hotkeys to trigger when focused on fields like `['input', 'textarea', 'select']`.   |
| **`enableOnContentEditable`**                                                                                                                                                                                                                                           | `boolean`  | `false`                          | Allows shortcuts to work on elements with the `contentEditable` property.                   |
| **`preventDefault`**                                                                                                                                                                                                                                                    | `boolean   | ((e: KeyboardEvent) => boolean)` | `false`                                                                                     | Blocks default browser mechanics (e.g., overriding browser print via `ctrl+p`).            |
| **`stopPropagation`**                                                                                                                                                                                                                                                   | `boolean`  | `false`                          | Blocks the keyboard event from bubbling up to higher DOM layers.                            |
| **`keydown`**                                                                                                                                                                                                                                                           | `boolean`  | `true`                           | Fires the hook callback when keys are pushed down.                                          |
| **`keyup`**                                                                                                                                                                                                                                                             | `boolean`  | `false`                          | Fires the hook callback when keys are released.                                             |
| **`scopes`**                                                                                                                                                                                                                                                            | `string    | string[]`                        | `['*']`                                                                                     | Restricts this hotkey to specific scopes initialized via the context provider.             |
| **`document`**                                                                                                                                                                                                                                                          | `Document` | `window.document`                | Ties events to a different canvas, which is helpful when targeting **iframes**.             |
| **`splitKey`**                                                                                                                                                                                                                                                          | `string`   | `+`                              | Overrides the character used to merge simultaneous keys (e.g., change to `-` for `ctrl-k`). |
| **`delimiter`**                                                                                                                                                                                                                                                         | `string`   | `,`                              | Overrides the character separating multiple options (e.g., `'ctrl+s, command+s'`).          |
| **`description`**                                                                                                                                                                                                                                                       | `string`   | `undefined`                      | A metadata field used to generate automated shortcut menus/dashboards.                      |
| **`sequenceTimeoutMs`**                                                                                                                                                                                                                                                 | `number`   | `1000`                           | The expiration window for sequential combinations (like typing `g` then `i`).               |

***

### 3. Element-Scoped Hotkeys (Ref Passing) \[[1](https://www.linkedin.com/posts/rammcodes%5Fkeyboard-shortcuts-in-react-got-way-easier-activity-7458796256656621568-A%5F25), [2](https://react-hotkeys-hook.vercel.app/)]

`useHotkeys` returns a React `MutableRefObject`. If assigned to a specific element, the hotkey **only triggers when that element (or its children) has active focus**. \[[1](https://react-hotkeys-hook.vercel.app/)]

tsx

```
import { useHotkeys } from 'react-hotkeys-hook';

export function ScopedComponent() {
  // 1. Capture the ref generated by the hook
  const containerRef = useHotkeys<HTMLDivElement>('space', () => {
    console.log('Spacebar hit, but only because this box has focus!');
  });

  return (
    // 2. Attach the ref and use tabIndex to make the div focusable
    <div ref={containerRef} tabIndex={0} style={{ border: '1px solid black' }}>
      Click inside me, then press Space.
    </div>
  );
}
```

Use code with caution.

***

### 4. Customizing User Binds: `useRecordHotkeys` \[[1](https://react-hotkeys-hook.vercel.app/docs/documentation/use-record-hotkeys)]

This hook listens for user typing inputs to help generate customizable layout menus. \[[1](https://react-hotkeys-hook.vercel.app/), [2](https://vercel.com/kb/guide/adding-keyboard-shortcuts-to-react-apps-with-tanstack-hotkeys)]

tsx

```
import { useRecordHotkeys } from 'react-hotkeys-hook';

export function SettingsPanel() {
  const [keys, { start, stop, isRecording, clear }] = useRecordHotkeys();

  return (
    <div>
      <p>Custom Sequence recorded: {Array.from(keys).join(' + ')}</p>
      <button onClick={isRecording ? stop : start}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
```

Use code with caution.

***

### 5. Advanced Isolation:

By wrapping sections of your tree in a `HotkeysProvider`, you can seamlessly toggle hotkeys on or off across your app using scopes. This prevents background views from capturing commands while modals or menus are open. \[]

tsx

```
import { HotkeysProvider, useHotkeysContext } from 'react-hotkeys-hook';

// 1. Setup the scoping boundaries
export default function App() {
  return (
    <HotkeysProvider initiallyActiveScopes={['dashboard']}>
      <Dashboard />
    </HotkeysProvider>
  );
}

function Dashboard() {
  // This executes because 'dashboard' is an active scope
  useHotkeys('e', () => console.log('Edit item'), { scopes: ['dashboard'] });

  // This does NOT execute until the 'settings' scope is activated
  useHotkeys('s', () => console.log('Save settings'), { scopes: ['settings'] });

  // 2. Dynamically shift scopes using context controls
  const { enableScope, disableScope } = useHotkeysContext();

  return (
    <button onClick={() => { enableScope('settings'); disableScope('dashboard'); }}>
      Open Settings View
    </button>
  );
}
```

Use code with caution.

### Context Methods Available via `useHotkeysContext()`

- **`activeScopes`**: Array of currently active scope names.
- **`enableScope(scope: string)`**: Appends a scope string to the active list.
- **`disableScope(scope: string)`**: Subtracts a scope string from the active list.
- **`toggleScope(scope: string)`**: Flips the current activation state of a scope.

If you are considering structuring your project with these tools, would you like an example of how to **dynamically map settings saved by `useRecordHotkeys` back into `useHotkeys`**, or should we look closer at **combining multiple keys**?

- [link](https://react-hotkeys-hook.vercel.app/docs/api/use-hotkeys)\
  useHotkeys - React Hotkeys Hook\
  enabled ​ enabled: Trigger // default: true. Determines if the callback should be triggered. Pass false to disable the hotkey enti...\
  Vercel
- [link](https://react-hotkeys-hook.vercel.app/docs/documentation/advanced-usage)\
  Advanced Usage | React Hotkeys Hook\
  Listening inside iframes​ If your React app runs inside an iframe, pass the iframe's document object to bind hotkeys to that docum...\
  Vercel
- [link](https://github.com/JohannesKlauss/react-hotkeys-hook)\
  GitHub - JohannesKlauss/react-hotkeys-hook\
  string. , Character that separates different hotkey combinations mapped to the same callback (e.g. ctrl+a, shift+b ) scopes. strin...\
  GitHub

Show all

## You said: how to bind or unbind shortcuts

In `react-hotkeys-hook`, you don't bind or unbind shortcuts using manual setup or teardown functions (like `.bind()` or `.unbind()`). Instead, React handles this automatically based on **declarative options** or the **component lifecycles** (mounting and unmounting). \[[1](https://steamcommunity.com/sharedfiles/filedetails/?id=314801693)]

Here are the three methods to dynamically bind, unbind, or mutate shortcuts.

***

### Method 1: The `enabled` Option (Best for Pausing/Resuming)

The most common way to unbind a shortcut without removing the component from the screen is to pass a boolean flag or a function to the `enabled` option.

When `enabled` is `false`, the hook automatically removes the internal event listeners.

tsx

```
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

export function ToggleShortcut() {
  const [isShortcutActive, setIsShortcutActive] = useState(true);

  // Bind or unbind dynamically based on state
  useHotkeys('ctrl+s', () => {
    console.log('Saved successfully!');
  }, {
    enabled: isShortcutActive // Automatically unbinds when false
  });

  return (
    <div>
      <button onClick={() => setIsShortcutActive(!isShortcutActive)}>
        {isShortcutActive ? 'Disable (Unbind) Ctrl+S' : 'Enable (Bind) Ctrl+S'}
      </button>
    </div>
  );
}
```

Use code with caution.

***

### Method 2: Conditional Component Mounting (Best for Contextual Shortcuts)

Because `react-hotkeys-hook` clears its bindings when a component unmounts, you can encapsulate your shortcuts inside conditional rendering blocks.

tsx

```
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

// This sub-component binds Escape ONLY when rendered
function ModalShortcuts({ onClose }: { onClose: () => void }) {
  useHotkeys('Escape', onClose);
  return null; // Invisible component used solely for shortcut lifecycle
}

export function ParentView() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {/*
        When isOpen is false, ModalShortcuts unmounts.
        The 'Escape' event listener is automatically unbound.
      */}
      {isOpen && <ModalShortcuts onClose={() => setIsOpen(false)} />}
    </div>
  );
}
```

Use code with caution.

***

### Method 3: Dynamic Binding (Best for Custom Re-keying)

If you are building a settings menu where users can change keybinds, update the `keys` string parameter. The hook treats the string as a dependency; if it changes, it **automatically unbinds the old key string and binds the new one**.

tsx

```
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

export function CustomizableShortcut() {
  // User starts with 'ctrl+k' but can change it later
  const [userShortcut, setUserShortcut] = useState('ctrl+k');

  // When 'userShortcut' changes, the hook safely tears down the old listener
  useHotkeys(userShortcut, () => {
    console.log(`Action triggered via: ${userShortcut}`);
  }, {}, [userShortcut]); // Add to dependencies array

  return (
    <div>
      <p>Current shortcut: <code>{userShortcut}</code></p>
      <button onClick={() => setUserShortcut('ctrl+m')}>
        Change Shortcut to Ctrl + M
      </button>
    </div>
  );
}
```

Use code with caution.

***

### Summary Checklist for Bindings

- **To bind a shortcut:** Render the component containing `useHotkeys` with `{ enabled: true }`.
- **To safely unbind a shortcut:** Either toggle `{ enabled: false }` or unmount the hosting component entirely.
- **To rebind a shortcut:** Change the first string argument passed to `useHotkeys` and ensure it is included in your dependency array.

Would you like to see how to connect this to the **`useRecordHotkeys`** hook so users can click a button, record their own keybind, and automatically rebind it?

- [link](https://steamcommunity.com/sharedfiles/filedetails/?id=314801693)\
  Guide :: How to: Scripting, Binds and Configs\
  Sep 28, 2014 — To get around this you'll have to break up long chains into aliases. More on them later. To unbind a key you have to use the - you...\
  \
  \
  Steam Community

## You said: the proven shortcut library for vanillajs

To listen to keyboard shortcuts in Vanilla JavaScript, the absolute industry-standard, time-tested library is \*\***[Mousetrap](https://craig.is/killing/mice)** \[1].

Though originally introduced years ago, it remains the gold standard for production web applications because of its ultra-lightweight footprint (~2KB gzipped) and reliable cross-browser handling of edge cases \[1]. \[[1](https://medium.com/@345490675/mousetrap-a-javascript-library-for-creating-an-efficient-keyboard-shortcut-experience-dfe2dbcd3a56), [2](https://ourcodeworld.com/articles/read/394/the-right-way-to-add-keyboard-shortcuts-in-javascript-with-mousetrap)]

***

### Why Mousetrap is the Top Choice

- **No Dependencies**: It is written in pure vanilla JavaScript and does not require jQuery or any framework \[1].
- **Cross-Platform Mapping**: It automatically maps `mod` to `command` on Mac and `ctrl` on Windows/Linux \[1].
- **Vim-Style Sequences**: It natively handles sequential combinations like pressing `g` then `i` \[1].
- **Form Field Smart Protection**: By default, shortcuts are ignored inside text fields (`input`, `textarea`) so typing doesn't accidentally trigger commands \[1].

***

### How to Install and Use Mousetrap

### 1. Installation

You can grab it via npm or load it via CDN: \[[1](https://subwaymatch.medium.com/comparing-keyboard-shortcut-libraries-in-react-mousetrap-vs-hotkeys-634877b4af9e), [2](https://geekflare.com/dev/javascript-table-libraries/), [3](https://melwinalm.medium.com/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e)]

bash

```
npm install mousetrap
```

Use code with caution.

Or via script tag:

html

```
<script src="https://cloudflare.com"></script>
```

Use code with caution.

### 2. Binding Simple & Modifier Shortcuts

javascript

```
// Single key trigger
Mousetrap.bind('4', function() { console.log('4 pressed'); });

// Multi-key modifiers (Supports ctrl, shift, alt, option, meta, command)
Mousetrap.bind('ctrl+s', function(e) {
    e.preventDefault(); // Stop default browser saving behavior
    console.log('Saving application state...');
});

// Platform agnostic mapping ("mod" dynamically evaluates to command or control)
Mousetrap.bind('mod+k', function() {
    console.log('Command Palette Opened!');
});
```

Use code with caution.

### 3. Binding Sequences (Vim/Gmail Style)

javascript

```
// Triggers only when keys are pressed in this specific sequence
Mousetrap.bind('g i', function() {
    console.log('Navigated to Inbox');
});
```

Use code with caution.

### 4. Unbinding and Modifying Behavior

javascript

```
// Safely unbind a shortcut when it is no longer needed
Mousetrap.unbind('ctrl+s');

// Force a shortcut to run even inside an input text field
Mousetrap.bind('ctrl+f', function() {
    console.log('Searching input text...');
}, 'keydown'); // Third argument can be 'keydown' or 'keyup'

// Attach Mousetrap override directly to inputs if needed
var inputEl = document.querySelector('input');
Mousetrap(inputEl).bind('escape', function() {
    inputEl.blur(); // Remove focus when hitting escape
});
```

Use code with caution.

***

### Notable Alternatives

If Mousetrap doesn't fit your needs, two other highly proven Vanilla JS options exist:

1. \*\*\*\*[Hotkeys-js](https://github.com/jaywcjlove/hotkeys-js)\*\*: A very popular, actively maintained modern alternative that offers scoped namespaces, deep modifier detection, and clean disposal features. \[[1](https://subwaymatch.medium.com/comparing-keyboard-shortcut-libraries-in-react-mousetrap-vs-hotkeys-634877b4af9e)]
2. \*\*\*\*[Keymaster](https://github.com/madrobby/keymaster)\*\*: A classic, scoped master listener library. It is widely cloned but mostly in maintenance mode today compared to Mousetrap and Hotkeys-js.

Are you looking to migrate a specific **React shortcut system over to Vanilla JS**, or would you like to see how to implement **scoped/contextual shortcuts** using Mousetrap?

- [link](https://medium.com/@345490675/mousetrap-a-javascript-library-for-creating-an-efficient-keyboard-shortcut-experience-dfe2dbcd3a56)\
  Mousetrap: A JavaScript Library for Creating an Efficient Keyboard Shortcut Experience\
  Jan 17, 2025 — Conclusion With its lightweight nature, ease of use, and powerful functions, Mousetrap has become one of the preferred libraries f...\
  \
  \
  Medium
- [link](https://ourcodeworld.com/articles/read/394/the-right-way-to-add-keyboard-shortcuts-in-javascript-with-mousetrap)\
  The Right Way to add keyboard shortcuts in Javascript with Mousetrap\
  May 24, 2017 — That's why we recommend you, if you work with keyboard combinations, use MouseTrap and end up with your suffering. It is around 2k...\
  \
  \
  Our Code World
- [link](https://subwaymatch.medium.com/comparing-keyboard-shortcut-libraries-in-react-mousetrap-vs-hotkeys-634877b4af9e)\
  Comparing keyboard shortcut libraries in React — Mousetrap vs Hotkeys\
  Aug 20, 2019 — Contender 1: Using mousetrap npm i mousetrap --save or in yarn, yarn add mousetrap To create a shortcut, bind it with Mousetrap. c...\
  \
  \
  Medium

Show all

## You said: use module import for mousetrap

To use **Mousetrap** with modern ECMAScript module syntax (`import`), you can import it directly into your JavaScript or TypeScript files.

Because Mousetrap is an older library written using a Universal Module Definition (UMD), the syntax varies slightly depending on whether you are using the base package or a modern alternative.

***

### Option 1: The Standard NPM Package

If you installed the official library via `npm install mousetrap`, import it as a default module.

javascript

```
import Mousetrap from 'mousetrap';

// Bind a shortcut
Mousetrap.bind('mod+k', (e) => {
  e.preventDefault();
  console.log('Command palette opened!');
});

// Unbind a shortcut
Mousetrap.unbind('mod+k');
```

Use code with caution.

### TypeScript Support

If your project uses TypeScript, the base package does not include built-in types. You must install the community-maintained type definitions:

bash

```
npm install --save-dev @types/mousetrap
```

Use code with caution.

***

### Option 2: Using CDN Modules (No Build Step / No NPM)

If you are writing vanilla JavaScript directly in the browser without a bundler (like Vite, Webpack, or esbuild), you can import a compiled ES module directly from a CDN like **esm.sh**. \[[1](https://blog.logrocket.com/webpack-adoption-guide/)]

html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mousetrap ESM</title>
</head>
<body>

  <script type="module">
    // Import directly via a modern ESM CDN url
    import Mousetrap from 'https://esm.sh';

    Mousetrap.bind('escape', () => {
      console.log('Escape key pressed via native ESM module!');
    });
  </script>

</body>
</html>
```

Use code with caution.

***

### Option 3: Modern Alternative with Perfect ESM Support

If you run into bundler configuration errors with Mousetrap's older module exports, switch to **`hotkeys-js`**. It is a modern, actively maintained vanilla JS library designed from the ground up for tree-shaking and module imports.

### 1. Install

bash

```
npm install hotkeys-js
```

Use code with caution.

### 2. Import and Use

javascript

```
import hotkeys from 'hotkeys-js';

// Bind a shortcut
hotkeys('ctrl+s', (event, handler) => {
  event.preventDefault();
  console.log('Saved via hotkeys-js');
});

// Unbind a shortcut
hotkeys.unbind('ctrl+s');
```

Use code with caution.

If you face bundling errors, please let me know **what build tool you are using** (e.g., Vite, Webpack, Next.js) so we can **adjust your configuration file bindings**.

- [link](https://blog.logrocket.com/webpack-adoption-guide/)\
  webpack adoption guide: Overview, examples, and alternatives\
  Jan 30, 2024 — First and foremost, it ( webpack ) 's worth saying that webpack is a module bundler. It takes your code and recursively walks thro...\
  \
  \
  LogRocket Blog
