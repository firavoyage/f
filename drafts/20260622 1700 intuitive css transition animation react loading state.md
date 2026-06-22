<!-- i significantly underestimated the power of css, bounded by the "ui = f(state)" mantra... -->

<!-- no transition/animation, like vscode? seems powerful and simple. best of both worlds at the same time! -->

# how to have transition animation in react

June 20, 2026

To create transition animations in React, you can <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">native CSS with state hooks</strong>, <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the native React <code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">ViewTransition</code> API</strong>, or <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">third-party libraries like Framer Motion</strong></mark>. \[[1](https://www.youtube.com/watch?v=6oL-skHq5Tk), [2](https://www.reddit.com/r/reactjs/comments/1pmbum9/which%5Fanimation%5Flibrary%5Fshould%5Fi%5Fuse/), [3](https://www.youtube.com/watch?v=S4HYwsBRpRs), [4](https://coreui.io/answers/how-to-animate-components-in-react/)]

Choosing the right approach depends heavily on the complexity of your application, the visual effects you are targeting, and performance constraints. \[[1](https://www.syncfusion.com/blogs/post/top-react-animation-libraries), [2](https://mimo.org/glossary/react/animation), [3](https://medium.com/@philippebeck/css3-transitions-animations-5b3a08756b22), [4](https://www.reddit.com/r/reactjs/comments/1pmbum9/which%5Fanimation%5Flibrary%5Fshould%5Fi%5Fuse/)]

***

### Option 1: Native CSS Transitions (Best for Simple UI Toggles)

For simple animations like drop-downs, hover effects, or mobile drawers, you can trigger standard CSS transitions using React state. \[[1](https://www.developerway.com/posts/intro-to-css-animations-for-react-devs), [2](https://www.reddit.com/r/reactjs/comments/1pmbum9/which%5Fanimation%5Flibrary%5Fshould%5Fi%5Fuse/)]

### 1. Define the Component State

Toggle a standard `boolean` state inside your React component to control whether the component is open or visible.

jsx

```
import { useState } from 'react';
import './styles.css';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {/* The class changes dynamically based on the state */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <p>Menu Content</p>
      </div>
    </div>
  );
}
```

Use code with caution.

### 2. Write the CSS Transitions

Ensure your styles are configured to transition smooth properties like `opacity`, `transform`, or `max-height`. \[[1](https://elementor.com/blog/css-fade-in/), [2](https://www.geeksforgeeks.org/css/how-to-make-transition-height-from-0-to-auto-using-css/), [3](https://www.testmuai.com/blog/css-transforms-and-transitions-property/), [4](https://dev.to/promathieuthiry/creating-a-smooth-toggle-switch-in-react-a-step-by-step-guide-3hj), [5](https://www.developerway.com/posts/intro-to-css-animations-for-react-devs)]

css

```
.menu {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none; /* Prevents interaction when hidden */
}

.menu.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```

Use code with caution.

***

### Option 2: Built-in API (Best for Route/State Changes) \[[1](https://swup.js.org/getting-started/animations/)]

React features a native component called [link](https://react.dev/reference/react/ViewTransition) that leverages the browser's native **View Transitions API**. It provides native performance without adding extra external bundle size. \[[1](https://react.dev/reference/react/ViewTransition), [2](https://certificates.dev/blog/react-viewtransition-smooth-animations-made-simple), [3](https://www.youtube.com/watch?v=6oL-skHq5Tk)]

### 1. Implement with `startTransition` \[[1](https://rebeccamdeprey.com/blog/view-transition-api), [2](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-view-transitions/SKILL.md)]

Wrap the updating content with the component and invoke the state update inside React's `startTransition` hook. \[[1](https://www.youtube.com/watch?v=6oL-skHq5Tk)]

jsx

```
import { useState, startTransition } from 'react';
import { ViewTransition } from 'react'; // Available natively in modern React releases

export default function ImageGallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSize = () => {
    // startTransition coordinates the DOM update with the browser's view transition mechanism
    startTransition(() => {
      setIsExpanded(!isExpanded);
    });
  };

  return (
    <ViewTransition>
      <img
        src="photo.jpg"
        onClick={toggleSize}
        className={isExpanded ? 'large-view' : 'thumbnail-view'}
      />
    </ViewTransition>
  );
}
```

Use code with caution.

### 2. Customize Using CSS

The browser automatically captures snapshots of the old and new states and crossfades them flawlessly. You can customize the behavior globally inside your CSS using standard pseudo-elements: \[[1](https://www.youtube.com/watch?v=OTP4hhX%5FxpM), [2](https://reactrouter.com/how-to/view-transitions), [3](https://motion.dev/docs/react-layout-animations), [4](https://certificates.dev/blog/react-viewtransition-smooth-animations-made-simple), [5](https://blog.logrocket.com/getting-started-view-transitions-api/)]

css

```
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Use code with caution.

***

### Option 3: Framer Motion Library (Best for Advanced Actions & Page Routing) \[[1](https://webanatomy.in/learnings/why-framer-motion-is-popular-in-react-development-2/), [2](https://www.angularminds.com/blog/react-spring-or-framer-motion)]

When you require physics-based spring mechanics, gestures, or strict **exit animations** (animating a component _as_ it leaves the DOM), Framer Motion is the standard solution. \[[1](https://motion.dev/docs/react), [2](https://www.reddit.com/r/reactjs/comments/1pmbum9/which%5Fanimation%5Flibrary%5Fshould%5Fi%5Fuse/)]

bash

```
npm install framer-motion
```

Use code with caution.

### 1. Basic Component Transition

To animate a regular element, change it to a `motion` element and supply `initial`, `animate`, and `transition` props: \[[1](https://www.youtube.com/watch?v=FdrEjwymzdY), [2](https://www.youtube.com/watch?v=S4HYwsBRpRs)]

jsx

```
import { motion } from 'framer-motion';

export default function FadeInBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
    >
      <h1>Smooth Appearance</h1>
    </motion.div>
  );
}
```

Use code with caution.

### 2. Exit Transitions with

If you unmount an element dynamically via conditional rendering (`&&`), standard React deletes it immediately. Wrap it in to trigger exit sequences safely before destruction. \[[1](https://www.youtube.com/watch?v=0Q5a9ta5m0s), [2](https://motion.dev/docs/react)]

jsx

```
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Modal</button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} /* Runs right before unmounting */
            className="modal"
          >
            <p>Hello! I am an animated modal.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

Use code with caution.

***

### Directly Comparing Options

| Method \[[1](https://www.framer.com/dictionary/framer-motion), [2](https://www.reddit.com/r/reactjs/comments/1pmbum9/which%5Fanimation%5Flibrary%5Fshould%5Fi%5Fuse/), [3](https://www.youtube.com/watch?v=OTP4hhX%5FxpM), [4](https://www.youtube.com/watch?v=6oL-skHq5Tk), [5](https://motion.dev/docs/react)] | Performance             | Use Case                                              | Bundle Size Impact |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------- | ------------------ |
| **Native CSS**                                                                                                                                                                                                                                                                                                   | Extremely High          | Basic micro-interactions, layouts, toggles.           | Zero               |
| **React**                                                                                                                                                                                                                                                                                                        | High (Browser Assisted) | Page/route switches, crossfading shared layouts.      | Zero               |
| **Framer Motion**                                                                                                                                                                                                                                                                                                | High (JS Controlled)    | Complex timelines, drag/gestures, unmount exit logic. | Moderate (~30kb+)  |

If you want to refine your choice, let me know:

- Are you animating a **simple toggle**, a **modal popup**, or **entire pages** changing via a router?
- What **framework setup** are you running (e.g., Vite, Next.js, or Remix)?
- Do elements need to animate **while leaving** the screen?

I can write out a fully tailored code snippet for your exact architecture.

- [link](https://www.youtube.com/watch?v=FdrEjwymzdY)\
  React Router V6 and Framer Motion Tutorial\
  This video will demonstrate how to create page transition animations in ReactJS using React Router V6 and the Framer Motion librar...\
  14:16\
  YouTube·PedroTech
- [link](https://www.youtube.com/watch?v=S4HYwsBRpRs)\
  Super Easy Page Transitions With React Tutorial\
  In today's episode, we will learn how to create super simple page transitions using React, specifically with Next.js and Framer Mo...\
  [36:55](https://www.youtube.com/watch?v=S4HYwsBRpRs)\
  YouTube·developedbyed
- [link](https://www.youtube.com/watch?v=OTP4hhX%5FxpM)\
  New React Animation API Is Insane\
  A new React Animation API for page transitions is now available in server components. This API is accessible in Next.js 14.2. It e...\
  9:56\
  YouTube·developedbyed

Show all

## You said: css transition or animation

1:33 AM

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Choose a </span><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">CSS Transition</strong> if you want to animate a property from a starting state to an ending state when triggered by a state change</mark> (like a hover or a class toggle). Choose a **CSS Animation** if you need complex, multi-step movement that runs automatically or loops indefinitely without relying on a user interaction. \[[1](https://blog.logrocket.com/css-transitions-animating-hamburger-menu-button/), [2](https://medium.com/engineerbabu/a-detailed-guide-to-css-animations-and-transitions-b544502c089c), [3](https://mimo.org/glossary/css/animation), [4](https://cleancoders.com/blog/2022-06-16-the-complete-guide-to-css-animation-with-examples), [5](https://blog.hubspot.com/website/css-transition-vs-animation)]

***

### Key Summary

| Feature \[[1](https://johnkavanagh.co.uk/articles/css-animations-transitions-vs-keyframes/), [2](https://library.tcdc.or.th/record/read/a00045532), [3](https://medium.com/@aishwaryaKurakula/the-css-technique-i-finally-understand-infinite-loops-with-animation-iteration-count-253794cd908c), [4](https://blog.hubspot.com/website/css-transition-vs-animation), [5](https://blog.logrocket.com/css-transitions-animating-hamburger-menu-button/)] | CSS Transition                                            | CSS Animation                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | -------------------------------------------------------- |
| **State Count**                                                                                                                                                                                                                                                                                                                                                                                                                                        | Exactly **two states** (Start and End).                   | **Unlimited states** via `@keyframes`.                   |
| **Trigger Mechanism**                                                                                                                                                                                                                                                                                                                                                                                                                                  | Requires an **event** (hover, click, state class change). | Can run **automatically** on page load.                  |
| **Looping Behavior**                                                                                                                                                                                                                                                                                                                                                                                                                                   | Runs **once** per trigger. Cannot inherently loop.        | Can loop **infinitely** or a specific number of times.   |
| **Complexity**                                                                                                                                                                                                                                                                                                                                                                                                                                         | **Simple** layout or color modifications.                 | **Complex** sequential, staggered, or continuous motion. |

***

### When to Use CSS Transitions

Transitions are ideal for simple, interactive elements. They smoothly blend values when an explicit trigger changes a property value. \[[1](https://medium.com/@philippebeck/css3-transitions-animations-5b3a08756b22), [2](https://www.b12.io/glossary-of-web-design-terms/css-transitions/), [3](https://www.scaler.com/topics/css/css-transition/), [4](https://www.upgrad.com/tutorials/software-engineering/software-key-tutorial/animation-css/)]

- **Hover effects**: Changing button colors, scaling cards up slightly, or showing text underlines.
- **UI State changes**: Toggling a mobile menu dropdown open/closed by changing heights or opacity.
- **Focus states**: Expanding search input boxes when a user clicks into them. \[[1](https://blog.prototypr.io/this-aint-disney-a-practical-guide-to-css-transitions-and-animations-a8b87e7c5531), [2](https://prismic.io/blog/css-hover-effects), [3](https://www.dreamhost.com/blog/css-transform/), [4](https://www.geeksforgeeks.org/html/top-10-html-animations/)]

css

```
/* Example: Smoothly scales a button up when hovered */
.button {
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
}
```

Use code with caution.

***

### When to Use CSS Animations

Animations offer fine-grained control over a timeline through the use of `@keyframes`, making them perfect for standalone visual effects. \[[1](https://css-tricks.com/controlling-css-animations-transitions-javascript/), [2](https://webplatform.github.io/docs/tutorials/css%5Fanimations/), [3](https://medium.com/learnfactory-nigeria/animating-elements-with-tailwind-css-fc4786d064d0), [4](https://dev.to/mechcloud%5Facademy/bringing-your-website-to-life-a-deep-dive-into-css-transitions-and-animations-4bg)]

- **Loading spinners**: Elements that rotate indefinitely while waiting for an API response.
- **On-load entry**: Elements bouncing or sliding onto the screen as soon as the application renders.
- **Multi-step timelines**: A complex movement where an item shifts right, pauses, scales up, and fades away. \[[1](https://mimo.org/glossary/css/rotate), [2](https://bonlinelearning.com/animations-and-transitions-in-articulate-storyline/), [3](https://www.capcut.com/resource/keyframe-animation-in-css), [4](https://dev.to/sharique%5Fsiddiqui%5F8242dad/advanced-css-animations-and-keyframes-taking-web-interactions-to-the-next-level-d6j), [5](https://stackoverflow.com/questions/76045867/how-can-i-use-css-transitions-and-javascript-to-make-an-element-jump-up-in-size)]

css

```
/* Example: Continuously spins a loading indicator */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader {
  animation: spin 1s linear infinite;
}
```

Use code with caution.

***

If you want to tailor this to your React project, tell me:

- What specific **UI element** (e.g., loading spinner, modal, slide-in menu) are you building?
- Do you want the effect to happen **only when clicked/hovered**, or should it **run continuously**?

I can provide the exact CSS and component markup for your scenario.

- [link](https://blog.logrocket.com/css-transitions-animating-hamburger-menu-button/)\
  CSS transitions: Animating a toggle button\
  CSS transitions Transitions let you change the value of a property from its initial state to a final state in response to an event...\
  \
  \
  LogRocket Blog
- [link](https://medium.com/engineerbabu/a-detailed-guide-to-css-animations-and-transitions-b544502c089c)\
  A Detailed Guide to CSS Animations and Transitions\
  If you got a chance to go over the code above, you might have noticed a jerk during the state change on hover; that's precisely wh...\
  \
  \
  Medium
- [link](https://mimo.org/glossary/css/animation)\
  CSS Animation: Syntax, Usage, and Examples\
  CSS Transitions animate changes between states, triggered by user interaction.\
  \
  Mimo

Show all

## You said: when would i have a dedicated loading state or not

1:34 AM

You should use a dedicated loading state when an operation takes **longer than 1 second** or involves a **structural layout shift**. You can skip a dedicated loading state if the operation is **instant (under 200ms)** or happens **silently in the background**. \[[1](https://www.sap.com/design-system/fiori-design-ios/v25-8/components/progress-indicators/skeleton-loading/usage)]

***

### When You NEED a Dedicated Loading State

- **API Calls Over 1 Second:** Long network requests like checkout processing or processing large data sets require a placeholder to confirm the app hasn't crashed.
- **Initial Page Loads / Routing:** When a user navigates to a new page, a loading state prevents them from seeing an empty screen. \[[1](https://blog.hubspot.com/website/loading-page-design)]
- **Large UI Layout Shifts:** If the upcoming content changes the page structure significantly, a skeleton screen prevents content from violently "jumping" once it loads. \[[1](https://medium.com/better-programming/the-what-why-and-how-of-using-a-skeleton-loading-screen-e68809d7f702)]
- **Destructive or Critical Actions:** Submitting payment forms or deleting data needs an explicit loading state to block multiple accidental clicks.

### When You DO NOT Need One

- **Ultra-Fast Operations (Under 200ms):** If a local database check or fast API responds immediately, showing a spinner for a microsecond creates a jarring "flash" that hurts UX.
- **Optimistic UI Updates:** For simple actions like clicking a "Like" button or toggling a favorite star, update the UI immediately as if it succeeded. Run the API call silently. \[[1](https://www.linkedin.com/top-content/user-experience/understanding-user-experience/impact-of-loading-states-on-user-trust/)]
- **Background Data Refresh:** When polling a server for live updates (like updating stock tickers or a chat list feed), update the numbers silently without disrupting the user's focus.
- **Infinite Scroll Fetches:** When fetching page 2 of a list while the user is reading page 1, load the content below their view without interrupting their reading flow.

***

### UX Design Hierarchy: What to Show and When

The duration of your asynchronous operation determines exactly what type of loading state you should implement:

| Delay Duration  | What to Show                          | UX Strategy                                              |
| --------------- | ------------------------------------- | -------------------------------------------------------- |
| **0ms - 200ms** | Nothing / Instant                     | Update UI immediately.                                   |
| **200ms - 1s**  | Button Spinner or Inline Indicator    | Keep focus on the exact element clicked.                 |
| **1s - 3s**     | Skeleton Screen (Content Placeholder) | Simulates content loading to make it feel faster.        |
| **3s - 10s+**   | Full Page Loader / Progress Bar       | Give explicit status updates (e.g., "Uploading... 40%"). |

***

If you are working on a specific feature, tell me:

- What **action** is the user performing? (e.g., clicking a submit button, loading a dashboard, pagination)
- How **long** does your backend or API typically take to respond?

I can help you implement the exact React loading state logic or skeleton structure for it.

- [link](https://www.sap.com/design-system/fiori-design-ios/v25-8/components/progress-indicators/skeleton-loading/usage)\
  Intro\
  Use when the loading time exceeds 1 second.\
  \
  SAP
- [link](https://blog.hubspot.com/website/loading-page-design)\
  Loading Page Design: How I Keep Users Engaged While My Site Boots Up\
  Using a loading page can help you avoid the negative UX impacts of slow load times by making your website “feel” like it's loading...\
  \
  \
  HubSpot Blog
- [link](https://medium.com/better-programming/the-what-why-and-how-of-using-a-skeleton-loading-screen-e68809d7f702)\
  The What, Why, and How of Using a Skeleton Loading Screen\
  Skeleton screens are also used to mitigate cumulative layout shift. This way your content does not jump once it is rendered.\
  \
  \
  Medium

Show all

## You said: when would i have a dedicated loading state or not for transition or animation (whatever you call it) specifically

1:35 AM

In the context of **transitions and animations**, a dedicated loading state <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">determines whether you play a <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">"placeholder animation"</strong> (like a spinner or skeleton screen) or a <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">"morphing transition"</strong> (directly morphing the old UI into the new UI)</mark>. \[[1](https://blog.openreplay.com/skeleton-screens-vs-loading-screens--a-ux-battle/), [2](https://github.com/bumptech/glide/issues/232)]

You use a dedicated loading state when you have **no idea what the new content looks like yet**. You bypass it when you already know the final layout and just need to animate the visual change smoothly.

***

### When to Use a Dedicated Loading State Animation

Use a placeholder animation (spinners, skeletons, progress bars) when an async process **breaks the visual continuity** of the page. \[[1](https://www.lightningdesignsystem.com/2e1ef8501/p/7473e0-loading)]

- **When fetching unpredicted layout data:** If a user clicks a profile card, and you must wait for an API to return text, images, and dimensions, you cannot transition smoothly because the destination doesn't exist yet. You must show a skeleton animation. \[[1](https://www.immwit.com/wiki/cumulative-layout-shift-cls/), [2](https://unity.com/blog/engine-platform/state-machine-transition-interruptions), [3](https://docs.omniverse.nvidia.com/extensions/latest/ext%5Fanimation-graph/user-guide.html)]
- **When an element unmounts completely:** If a piece of UI disappears entirely to make room for something completely different, you animate a loading state into its empty place.
- **When blocking user interaction is required:** If clicking a button starts an animation that shouldn't be interrupted (like a submit button turning into a checkmark), a dedicated loading state animation locks the UI to prevent double-clicks.

**Visual Flow:** `Old UI` → `Fade out` → `Play Loading Animation` → `Fade in` → `New UI`

***

### When to Skip a Dedicated Loading State (Direct Transition)

Skip the loading state and use a direct CSS transition or layout animation when the interaction **maintains visual continuity**.

- **State-driven layout morphing:** When expanding an accordion or opening a mobile drawer, the content is already loaded in memory (or its dimensions are predictable). You transition the height or width directly. \[[1](https://medium.com/frontend-canteen/amazing-css-transition-tips-and-details-135dd7b823d)]
- **Shared element transitions (e.g., View Transitions API):** If a thumbnail image expands into a full-screen hero image, you don't show a loader. You instruct the browser to animate the image's size and position dynamically across states. \[[1](https://www.smashingmagazine.com/2023/12/view-transitions-api-ui-animations-part1/), [2](https://www.trevorlasn.com/blog/view-transitions-api)]
- **Optimistic animations:** If a user clicks "Add to Cart", you don't show a spinner. You immediately animate the cart icon bouncing or the item flying into the basket, assuming the server request will succeed.
- **Client-side filtering and sorting:** When a user types into a search bar or changes a filter, the items on screen should smoothly shuffle, fade out, or slide to their new positions instantly using a transition framework.

**Visual Flow:** `Old UI` → `Smoothly morphs / slides / expands` → `New UI`

***

### Summary Checklist for Animations

| Scenario \[[1](https://www.w3.org/TR/css-transitions-2/), [2](https://css-tricks.com/using-css-transitions-auto-dimensions/), [3](https://verpex.com/blog/does-css-animation-slow-down-a-website), [4](https://v13.clarity.design/documentation/progress)] | Do you need a loading animation? | What animation type to use             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------- |
| Clicking a **Dropdown / Accordion**                                                                                                                                                                                                                        | **No**                           | CSS Transition (`height`, `transform`) |
| Navigating to a **New Dashboard Page**                                                                                                                                                                                                                     | **Yes**                          | Skeleton Screen Animation              |
| Shuffling a **List of Cards** via Filters                                                                                                                                                                                                                  | **No**                           | Layout animation / CSS grid transition |
| Submitting a **Payment Form**                                                                                                                                                                                                                              | **Yes**                          | Button Spinner or Progress Bar         |
| Liking a **Social Media Post**                                                                                                                                                                                                                             | **No**                           | Instant scale popup (Heart pop)        |

***

If you have a specific UI component in mind, tell me:

- What **element** are you trying to animate? (e.g., a card expanding, a new page loading, a modal appearing)
- Is the content **already available in React**, or are you **waiting on a network request**?

I can provide the exact CSS transition or loading state markup for that exact component.

- [link](https://blog.openreplay.com/skeleton-screens-vs-loading-screens--a-ux-battle/)\
  Skeleton Screens vs. Loading Screens -- An UX Battle\
  Pulse Placeholder This refers to the animation applied to a skeleton screen that simulates a pulsing or flickering effect. This an...\
  \
  \
  OpenReplay Blog
- [link](https://github.com/bumptech/glide/issues/232)\
  I want to show the loading progress with the image · Issue #232 · bumptech/glide\
  That said, you can use placeholder() and pass in an indeterminate ProgressBar ( progress bar ) to show an animated spinner during ...\
  \
  \
  GitHub
- [link](https://www.lightningdesignsystem.com/2e1ef8501/p/7473e0-loading)\
  Loading · Lightning Design System 2\
  Spinners are animated SVGs or GIFs. They reduce the use of awkward white screens and blank containers to communicate that the syst...\
  \
  \
  Lightning Design System

Show all

## You said: can it be wise to define the transition/animation as a state instead of letting css do the heavy lifting, as in strict ui = f state

Yes, it can be incredibly wise. Defining your transitions and animations directly as a React state variable—treating the animation as a core part of your UI state machine—is a powerful pattern. \[[1](https://www.scaler.com/topics/react/react-transition-group/)]

While it goes against the traditional "let CSS do the heavy lifting" advice, it aligns perfectly with the strict **UI = f(State)** philosophy.

***

### The Architecture: Animation as a State Machine

Instead of a simple boolean state like `isOpen` (which relies on CSS classes to figure out the rest), you define an explicit `animationState` string.

### Example State Flow:

`"IDLE"` → `"ENTERING"` → `"ENTERED"` → `"EXITING"` → `"IDLE"` \[[1](https://www.w3.org/TR/css-transitions-2/), [2](https://medium.com/@ramadan123sayed/stop-your-jetpack-compose-animations-from-falling-out-of-sync-a-complete-guide-to-updatetransition-6e2fbf7ea16f), [3](https://joshcollinsworth.com/blog/great-transitions)]

jsx

```
import { useState, useEffect } from 'react';

export default function ControlledModal({ isOpen }) {
  // The animation phase is explicitly tracked in React state
  const [status, setStatus] = useState('IDLE');

  useEffect(() => {
    if (isOpen) {
      setStatus('ENTERING');
      const timer = setTimeout(() => setStatus('ENTERED'), 300); // Sync with duration
      return () => clearTimeout(timer);
    } else if (status === 'ENTERED') {
      setStatus('EXITING');
      const timer = setTimeout(() => setStatus('IDLE'), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status]);

  if (status === 'IDLE') return null;

  return (
    <div className={`modal status-${status}`}>
      <p>Strict State-Driven Modal</p>
    </div>
  );
}
```

Use code with caution.

***

### When State-Driven Animations are Wise

### 1. Complex Orchestration (Sequencing)

If Element B should only start animating _after_ Element A finishes its transition, CSS handles this poorly (requiring fragile, hard-coded `transition-delay` values). By using state, React can explicitly fire `setStatus('Step2')` inside an `onTransitionEnd` or `onAnimationEnd` JavaScript event listener.

### 2. Conditional Rendering during Exit Animations

In pure React, if `isVisible` becomes `false`, the component unmounts instantly. CSS transitions cannot stop this because the DOM node vanishes before the transition even starts. Managing an explicit `"EXITING"` state keeps the DOM node alive just long enough to play the animation, then unmounts it when the state changes to `"IDLE"`. (This is exactly how libraries like Framer Motion work under the hood). \[[1](https://webplatform.github.io/docs/tutorials/css%5Ftransforms/), [2](https://dev.to/oussel/how-to-use-conditional-rendering-with-animation-in-react-1k20)]

### 3. Interruptible and Dynamic Motion

If a user clicks a toggle back-and-forth rapidly, CSS transitions can look glitchy or jump abruptly. If the animation is dictated by state—especially when paired with spring-physics state libraries—the animation smoothly recalculates its trajectory mid-flight based on the exact moment the state flipped. \[[1](https://medium.com/softaai-blogs/master-animate-asstate-in-jetpack-compose-effortless-ui-animations-explained-9dc152c0fe4f)]

### 4. Disabling Actions Mid-Animation

By having an explicit `"ENTERING"` or `"EXITING"` state, you can cleanly write deterministic UI logic to disable pointer events or button clicks while things are shifting on screen:

jsx

```
const isInteractivityBlocked = status === 'ENTERING' || status === 'EXITING';
```

Use code with caution.

***

### The Downside (Why it's not the default)

- **Main Thread Performance:** CSS transitions run on the browser's compositor thread. If your JavaScript main thread freezes due to heavy data processing, a CSS transition remains perfectly smooth. A React state-driven animation loop (updating state every frame) will stutter and lag.
- **Boilerplate:** It requires significant overhead, timing synchronization via `setTimeout`, and clean-up code to prevent memory leaks. \[[1](https://www.sitepoint.com/7-performance-tips-jank-free-javascript-animations/), [2](https://www.kirupa.com/html5/css3%5Fanimations%5Fvs%5Ftransitions.htm)]

***

### Summary Rule of Thumb

- **Use CSS:** For simple visual polish (hovers, basic class toggles) where the component's existence in the DOM doesn't change.
- **Use React State:** For complex layout logic, multi-step sequential wizard animations, or anytime you need to control **if** and **when** a component enters or leaves the DOM tree.

If you want to see how to implement this cleanly without manual `setTimeout` boilerplate, let me know if you would like an example using a **finite state machine (XState)** or a hooks-based approach like **`useTransition`** from React.

- [link](https://www.scaler.com/topics/react/react-transition-group/)\
  Improving UI with React Transition Group\
  May 3, 2023 — In simple words, React Transition Group lets us transition the components in and out of the DOM in a more efficient and visually u...\
  \
  \
  Scaler
- [link](https://www.w3.org/TR/css-transitions-2/)\
  CSS Transitions Module Level 2\
  Feb 4, 2026 — The transition phase of a transition is initially 'idle' and is updated on each animation frame according to the first matching co...\
  \
  W3C
- [link](https://medium.com/@ramadan123sayed/stop-your-jetpack-compose-animations-from-falling-out-of-sync-a-complete-guide-to-updatetransition-6e2fbf7ea16f)\
  Stop Your Jetpack Compose Animations From Falling Out of Sync: A Complete Guide to updateTransition\
  Sep 27, 2025 — Let's build a complete example that showcases the power of coordinated animations. This button will transition through three state...\
  \
  \
  Medium

Show all

## You said: when is it pragmatic or not

Determining whether to use state-driven animations or offload them to CSS comes down to a trade-off between **architectural control** and **development speed/performance**.

***

### When it is Pragmatic (State-Driven Animation)

Managing animations via React state is the pragmatically superior choice when the animation **directly dictates layout, data fetching, or security.**

- **Strict Exit Layouts (Unmounting):** If a component must physically leave the DOM (to free up memory or clean up listeners) but needs to fade out first, managing an `"exiting"` state is highly pragmatic.
- **State-Locked User Flows:** In financial or checkout wizards, you want to strictly disable buttons while a view transitions. Tying the animation directly to an explicit `"TRANSITIONING"` state guarantees the user cannot double-submit data mid-animation.
- **Complex Multi-Step Chaining:** If Panel B should only animate after Panel A finishes, doing this in CSS with hardcoded `transition-delay: 300ms` breaks easily if the duration changes. Using an `onAnimationEnd` state trigger is robust and self-documenting.
- **Canvas or Dynamic SVG Rendering:** When animating chart data or complex graphics based on live server inputs, CSS cannot compute the math. React state must drive the coordinate variables directly.

***

### When it is NOT Pragmatic (Let CSS Heavy-Lift)

Forcing animations into React state is an over-engineered anti-pattern when the movement is purely **visual polish and cosmetic**.

- **Micro-interactions:** Interactive components like hover effects, active button clicks, input focus rings, and pulsing loading skeletons should always use CSS. Forcing a state update on every cursor hover floods React with unnecessary re-renders.
- **Standard Page Layouts:** Sliding mobile navigation drawers or toggling accordions do not need state control. Toggling a simple `isOpen` boolean and letting CSS transition the properties handles the work elegantly with minimal code.
- **High-Frequency Frame Rates:** Changing a state variable 60 times a second to move an object across the screen (e.g., parallax effects, mouse-tracking custom cursors) will rapidly degrade React performance and trigger main-thread stuttering. CSS `transform` handles this on the hardware-accelerated compositor thread.
- **Simple Prototypes / Tight Deadlines:** Setting up timers, state machines, and lifecycle cleanups adds heavy boilerplate. If a basic CSS class switch achieves 95% of the visual goal, writing custom JS state handling wastes valuable development time.

***

### Pragmatic Decision Matrix

Ask yourself these three questions to instantly decide your path:

| Question                                                   | Yes                                 | No               |
| ---------------------------------------------------------- | ----------------------------------- | ---------------- |
| **Does the element unmount from the DOM?**                 | 🛠️ **Use State** (or Framer Motion) | 🎨 **Use CSS**   |
| **Does other UI logic depend on the animation finishing?** | 🛠️ **Use State**                    | 🎨 **Use CSS**   |
| **Does the animation run continuously or on hover?**       | 🎨 **Use CSS**                      | 🛠️ **Use State** |

***

If you are looking to simplify this in your codebase, tell me **how many states** your current component transitions between, and I can show you how to write the leanest code possible for it.

## You said: i mean to drop css transition/animation props at all

Dropping CSS animation and transition properties entirely means you are choosing **JavaScript-driven animation**.

In React, this means your component recalculates inline styles (like `style={{ transform: `translate3d(${x}px, 0, 0)` }}`) on every single frame, or you delegate that work to a high-performance JavaScript physics engine.

***

### When It Is Pragmatic to Drop CSS Entirely

Dropping CSS transitions completely is highly pragmatic under three specific conditions:

### 1. You Need Complex Physics-Based Motion (Springs) \[[1](https://www.joshwcomeau.com/react/prefers-reduced-motion/)]

CSS transitions require you to hardcode a duration (e.g., `0.3s`). If a user drags a panel quickly and lets go, it should slide fast. If they drag it slowly, it should settle gently. CSS cannot calculate this velocity. Dropping CSS allows libraries like Framer Motion or [react-spring](https://www.react-spring.dev/) to calculate fluid, interruptible spring physics via JavaScript. \[[1](https://www.linkedin.com/pulse/javascript-css-animation-techniques-axel-laurent-obscura-sarzotti-coyie), [2](https://www.slideshare.net/slideshow/css-animations-transitions-44543009/44543009), [3](https://dev.to/ridoy%5Fhasan/css-transitions-and-animations-50b6)]

### 2. You are Animating Multi-Step Orchestrations \[[1](https://css-tricks.com/using-multi-step-animations-transitions/)]

If you have a complex dashboard where Box A fades out, then Box B scales up, then a text list staggers into view, managing this via CSS classes or keyframes becomes a nightmare of hardcoded delays. Dropping CSS allows you to write sequential, readable JavaScript code to control the timeline explicitly.

### 3. You are Animating Canvas, WebGL, or SVG Internals \[[1](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation%5Fperformance%5Fand%5Fframe%5Frate)]

If you are building complex data visualizations, interactive maps, or games using HTML5 Canvas or Three.js, CSS cannot target those internal pixels anyway. You are forced to drop CSS and use a JavaScript render loop.

***

### When It Is a Massive Mistake to Drop CSS

Dropping CSS entirely is an absolute anti-pattern for **micro-interactions** and **basic layout shifts**.

### 1. Main-Thread Blocking (The Performance Trap)

CSS animations run on the browser's **Compositor Thread**. If your React app experiences a massive CPU spike (e.g., processing a huge JSON response or rendering a massive table), a CSS spinner or hover animation will remain perfectly fluid at 60fps/120fps.

If you drop CSS and use JavaScript state to animate that same spinner, **the spinner will freeze completely** the moment the JavaScript main thread locks up.

### 2. Battery Drain and CPU Bloat

Running a continuous JavaScript loop (`requestAnimationFrame` or frequent React state updates) to handle minor hover states or pulsing text consumes significantly more CPU cycles and mobile battery power than letting the browser's optimized rendering engine handle a native CSS transition.

### 3. Code Bloat and Setup Overhead

To replace a single line of CSS (`transition: opacity 0.2s`) in pure JavaScript without a library, you have to write a `requestAnimationFrame` loop, track the starting timestamp, calculate the easing math manually, and clean up the loop on unmount to avoid memory leaks. It turns 1 line of CSS into 20 lines of complex JavaScript.

***

### The Modern Pragmatic Compromise

The industry standard is to split the work based on the type of movement:

- **Keep CSS For:** Hover states, active button presses, loading spinners, form input focus transitions, and simple mobile menu slides.
- **Drop CSS For:** Page transitions, drag-and-drop mechanics, interactive gestures, and complex orchestrations (using a library like Framer Motion to handle the heavy JavaScript lifting safely). \[[1](https://cssanimation.rocks/space-transitions/), [2](https://www.ui-skills.com/skills/jakubantalik/transitions-dev/), [3](https://medium.com/@tbarrasso/drag-drop-using-css-transforms-e063d719a877)]

***

If you are thinking about dropping CSS for a specific feature, tell me **what UI element** you are trying to build. I can tell you if a pure JavaScript approach will lag or if it is the best path forward.

- [link](https://www.joshwcomeau.com/react/prefers-reduced-motion/)\
  Accessible Animations in React with "prefers-reduced-motion" • Josh W. Comeau\
  May 4, 2020 — Link to this heading In JS-land The media query shown above works great for animations that take place entirely from within CSS (e...\
  \
  \
  Josh Comeau
- [link](https://www.linkedin.com/pulse/javascript-css-animation-techniques-axel-laurent-obscura-sarzotti-coyie)\
  Javascript | CSS Animation Techniques\
  Jan 9, 2024 — 0.3s: This is the duration of the animation. It specifies how long the transition takes to complete (0.3 seconds in this example).\
  \
  \
  LinkedIn
- [link](https://www.slideshare.net/slideshow/css-animations-transitions-44543009/44543009)\
  CSS Animations & Transitions | PPTX\
  Feb 10, 2015 — CSS ( cascading style sheet ) Animations & Transitions This document summarizes CSS ( cascading style sheet ) transitions and anim...\
  \
  \
  Slideshare

Show all

## You said: is css wiser for most scenarios generally

\*\***Yes**, CSS transitions and animations are wiser for **80% to 90%** of standard web application scenarios.

While JavaScript and React-state animations offer unmatched control for complex interactions, offloading standard movement to CSS is the pragmatic default for the modern web. \[[1](https://prismic.io/blog/css-ui-features)]

***

### Why CSS is Wiser for Most Scenarios

### 1. Performance and Thread Isolation

The single biggest reason to choose CSS is how browsers render web pages. The browser runs on two main threads:

- **The Main Thread:** Handles JavaScript execution, layout calculation, and user inputs.
- **The Compositor Thread:** Handles drawing pixels on the screen.

When you use CSS transitions for hardware-accelerated properties (specifically `transform` and `opacity`), the browser hands the animation over to the **Compositor Thread (GPU)**. If your React app experiences a massive CPU spike (e.g., rendering a large data table or processing an API response), **your CSS animations will remain perfectly smooth at 60fps or 120fps**. If you use JavaScript state, the animation will visibly freeze or stutter. \[[1](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/), [2](https://dev.to/alirezace/why-you-should-use-transform-instead-of-margin-for-css-animations-performance-tip-2hn4)]

### 2. Battery and Resource Efficiency

Browsers are heavily optimized to run CSS. The browser engine can predict CSS transitions, optimize the repaint cycles, and even throttle animations when a tab is in the background. Running custom JavaScript loops (`requestAnimationFrame`) or constantly re-rendering React state to move pixels consumes significantly more CPU cycles and drains mobile batteries faster. \[[1](https://medium.com/design-bootcamp/why-we-only-use-html-css-javascript-in-web-browser-0123ded6c8aa), [2](https://zerotomastery.io/blog/css-interview-questions-and-answers/), [3](https://www.youtube.com/watch?v=RwSlubTBnew)]

### 3. Simplicity and Maintainability

A CSS transition takes one line of code and automatically handles moving back and forth: \[[1](https://www.interviewbit.com/css-interview-questions/)]

css

```
.card { transition: transform 0.2s ease-in-out; }
```

Use code with caution.

To replicate this exact fluid, interruptible behavior in pure JavaScript without a massive external library, you have to write a custom loop, track timestamps, calculate easing math, and clean up event listeners on unmount.

***

### The Exceptions: When CSS is the Wrong Choice

You should actively avoid CSS and use a JavaScript-driven state/library approach _only_ in these specific scenarios: \[[1](https://medium.com/@milan.hakaj/why-your-css-isnt-working-as-it-supposed-to-a40b44b910)]

- **When components physically unmount:** CSS cannot animate an element that React has completely removed from the DOM. You need React state or a library like Framer Motion to handle "exit animations" before unmounting.
- **Complex Orchestration:** If Element C should animate only after Element B finishes, which only starts after Element A finishes, chaining this in CSS leads to fragile, hard-coded `transition-delay` values.
- **Gesture-driven UI:** If an element needs to track a user's finger dragging across a screen (like a swipable card), CSS cannot calculate the dynamic velocity and spring mechanics.

***

### Summary Checklist for Daily Development

- **Default to CSS for:** Hover states, active buttons, focus rings, loading spinners, expanding accordions, and simple dropdown menus.
- **Switch to JavaScript/State for:** Route changes, multi-step onboarding wizard animations, drag-and-drop mechanics, and complex dashboard intro sequences. \[[1](https://will-myers.medium.com/4-skills-to-master-squarespace-custom-css-af5e34ca3538)]

If you are currently deciding how to build a specific component, let me know **what the UI element is**, and I will give you the most efficient way to build it!

- [link](https://prismic.io/blog/css-ui-features)\
  CSS Alternatives to JavaScript: Sliders, Dialogs & More!\
  Oct 3, 2025 — But there are times when CSS just isn't enough. Maybe you need logic, user interaction, or more complex animations that depend on ...\
  \
  \
  Prismic
- [link](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)\
  CSS GPU Animation: Doing It Right — Smashing Magazine\
  Dec 9, 2016 — We already know that animation of transform and opacity via CSS transitions or animations automatically creates a compositing laye...\
  \
  \
  Smashing Magazine
- [link](https://dev.to/alirezace/why-you-should-use-transform-instead-of-margin-for-css-animations-performance-tip-2hn4)\
  Improve performance with a simple css tip\
  Sep 26, 2024 — This is where the GPU (Graphics Processing Unit) comes into play. When you use transform , the browser can offload the task to the...\
  \
  \
  DEV Community

Show all

# all css transition props

The **five core CSS transition properties** are `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`, and `transition-behavior`. You can use these individual longhand properties or combine them into the single `transition` shorthand property. \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition), [2](https://www.w3.org/TR/css-transitions-1/)]

### Individual Longhand Properties

- **`transition-property`**: Specifies the names of the CSS properties to be transitioned (e.g., `background-color`, `transform`, or `all`).
- **`transition-duration`**: Defines the time the transition takes to complete, specified in seconds (`s`) or milliseconds (`ms`).
- **`transition-timing-function`**: Establishes the acceleration curve of the transition (e.g., `linear`, `ease-in`, `ease-out`, or custom `cubic-bezier()`).
- **`transition-delay`**: Sets an optional waiting period before the transition effect begins executing.
- **`transition-behavior`**: Controls whether transitions apply to discrete properties that cannot normally interpolate intermediate states (e.g., transitioning `display: none` to `display: block` using `allow-discrete`). \[[1](https://www.youtube.com/watch?v=5p7%5FDlApKBA), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using), [3](https://thoughtbot.com/blog/transitions-and-transforms), [4](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition-behavior), [5](https://www.w3.org/TR/css-transitions-1/)]

### The Shorthand Property

The **`transition`** property lets you define all of the above parameters in a single line of code. \[[1](https://css-tricks.com/almanac/properties/t/transition/), [2](https://www.youtube.com/watch?v=5p7%5FDlApKBA)]

css

```
/* Syntax Order */
.element {
  transition: [property] [duration] [timing-function] [delay] [behavior];
}

/* Practical Example */
.card {
  transition: transform 0.3s ease-in-out 0.1s allow-discrete;
}
```

Use code with caution.

- **Order Rules**: You can declare these values in almost any order, but if you include both a duration and a delay, the **duration must always come first**.
- **Defaults**: If omitted, `transition-property` defaults to `all`, `transition-timing-function` defaults to `ease`, `transition-delay` defaults to `0s`, and `transition-behavior` defaults to `normal`. You must specify a `transition-duration`, or it defaults to `0s` and no animation will play. \[[1](https://www.w3schools.com/cssref/css3%5Fpr%5Ftransition-property.php), [2](https://learn.shayhowe.com/advanced-html-css/transitions-animations/?country=925), [3](https://cssreference.io/transitions/), [4](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition), [5](https://thoughtbot.com/blog/transitions-and-transforms)]

If you would like to see how to implement these, tell me **what element you are styling** or **what kind of effect** (like a hover fade or slide-in) you want to build. \[[1](https://nmi.cool/flux/lessons/csstransitions.html), [2](https://blog.logrocket.com/learn-how-to-animate-transitions-angular-apps/)]

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition)\
  transition CSS property - MDN Web Docs - Mozilla\
  Apr 20, 2026 — as each of the properties of the shorthand: \* transition-delay : as specified. \* transition-duration : as specified. \* transition-\
  MDN Web Docs
- [link](https://www.youtube.com/watch?v=5p7%5FDlApKBA)\
  \#31 CSS Transition Tutorial - CSS Full Tutorial\
  Nov 1, 2019 — hey there guys it's Amit and welcome back to DevDreamer in this lesson we're taking a look at the CSS transition property. now CSS...\
  [8:41](https://www.youtube.com/watch?v=5p7%5FDlApKBA)\
  YouTube·Dev Dreamer
- [link](https://css-tricks.com/almanac/properties/t/transition/)\
  transition - CSS-Tricks\
  Sep 6, 2011 — Sara Cope on Sep 6, 2011. The transition property is a shorthand property used to represent up to four transition-related longhand...\
  CSS-Tricks

Show all

# all css animation props

The CSS **`animation`** property is a powerful shorthand used to configure an element's animation sequence. It bundles **9 individual longhand properties** that dictate timing, direction, and behavior. \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-composition)]

### The Core Animation Properties

- **`animation-name`**: Links the element to a specific `@keyframes` rule defining the animation steps.
- **`animation-duration`**: Sets the length of time an animation takes to complete one cycle (e.g., `2s`, `500ms`).
- **`animation-timing-function`**: Establishes the acceleration curve (e.g., `linear`, `ease-in-out`, `cubic-bezier()`).
- **`animation-delay`**: Specifies a countdown waiting period before the animation starts moving.
- **`animation-iteration-count`**: Dictates how many times the sequence plays (e.g., `3`, `infinite`).
- **`animation-direction`**: Controls whether the sequence runs forwards, backwards, or alternates cycles (`normal`, `reverse`, `alternate`, `alternate-reverse`).
- **`animation-fill-mode`**: Defines what styles apply to the element _before_ it starts or _after_ it finishes (`none`, `forwards`, `backwards`, `both`).
- **`animation-play-state`**: Pauses or plays the animation sequence (`running`, `paused`).
- **`animation-composition`**: Defines how to resolve overlapping animation properties when multiple animations affect the same attribute simultaneously (`replace`, `add`, `accumulate`). \[[1](https://www.youtube.com/watch?v=PjUCq04ebVA), [2](https://css-tricks.com/almanac/properties/a/animation/), [3](https://mimo.org/glossary/css/animation), [4](https://www.youtube.com/watch?v=xdap5e3-DwM), [5](https://www.geeksforgeeks.org/css/css-animations/), [6](https://cssreference.io/animations/), [7](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-fill-mode), [8](https://developer.chrome.com/docs/css-ui/css-animation-composition), [9](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-composition)]

***

### Advanced Scroll-Driven Properties

Modern CSS introduces dedicated properties to anchor animations directly to scroll progress rather than a timeline clock: \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using), [2](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/), [3](https://addyosmani.com/blog/coverflow/), [4](https://tylergaw.com/blog/css-scroll-driven-write-on/)]

- **`animation-timeline`**: Binds an animation to a scroll or view timeline instead of the default time-based clock.
- **`animation-range-start`**: Declares where along the scroll path the animation sequence begins.
- **`animation-range-end`**: Declares where along the scroll path the animation sequence finishes.
- **`animation-range`**: Shorthand combining both `animation-range-start` and `animation-range-end`. \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Animatable%5Fproperties), [3](https://codelabs.developers.google.com/scroll-driven-animations), [4](https://medium.com/@TusharKanjariya/advanced-scroll-animations-with-css-only-2b664be55349), [5](https://scrollmagic.io/examples/advanced/animate%5Fcss.html)]

***

### The Shorthand Syntax

Instead of writing out every line, you can combine them into the **`animation`** property. While order generally doesn't strictly matter for all attributes, **duration must always precede delay** if both are present. \[[1](https://thoughtbot.com/blog/css-animation-for-beginners), [2](https://dev.to/ekafyi/blinking-dots-a-quick-look-at-css-animation-31gf)]

css

```
.element {
  /* name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state */
  animation: slideIn 3s ease-out 0.5s infinite alternate forwards running;
}
```

Use code with caution.

To see these individual properties built out in action, watch this comprehensive walkthrough video:

9:26

[Every CSS Animation propertychunkydotdevYouTube · Mar 22, 2024](https://www.youtube.com/watch?v=%5FOEUbgLTWH0)

Are you trying to fix a **specific animation issue** (like it snapping back at the end), or do you need help writing a **custom `@keyframes` transition**?

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation)\
  animation CSS property - MDN Web Docs - Mozilla\
  May 11, 2026 — Constituent properties. This property is a shorthand for the following CSS properties: \* animation-name. \* animation-duration. \* a...\
  MDN Web Docs
- [link](https://www.youtube.com/watch?v=PjUCq04ebVA)\
  \#32 CSS Animations - CSS Full Tutorial\
  Nov 13, 2019 — hey there guys it's Amit and you're watching DevDreamer in this video we're taking a look at the CSS animation property css animat...\
  15:25\
  YouTube·Dev Dreamer
- [link](https://css-tricks.com/almanac/properties/a/animation/)\
  animation - CSS-Tricks\
  Sep 9, 2024 — Ryan Trimble on Sep 9, 2024. The animation property in CSS can be used to animate many other CSS properties such as color , backgr...\
  CSS-Tricks

Show all

# 
