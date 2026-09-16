## history of react

**[React](https://react.dev/)** is an open-source JavaScript library that completely transformed how modern web user interfaces (UIs) are built. What started as a frustrated engineer's internal experiment at Facebook is now a dominant global standard for front-end web development, currently governed by the independent **React Foundation** under the Linux Foundation. [link](https://en.wikipedia.org/wiki/React%5F%28software%29)

The evolution of React can be broken down into five distinct eras:

### 1. The Pre-React Era & "FaxJS" (2010–2012)

By the early 2010s, Facebook's web applications were scaling rapidly, and managing highly dynamic, real-time UI features like the News Feed and Facebook Ads became a major headache. Data updates frequently caused cascade bugs, resulting in sluggish page performance and hard-to-track UI states. [link](https://www.geeksforgeeks.org/reactjs/history-and-evolution-of-react/)

- **2010 (XHP Inspiration):** Facebook introduced **XHP**, a component-based PHP extension, into its stack to prevent cross-site scripting (XSS) attacks. It allowed engineers to write component-like structures in PHP, laying the conceptual groundwork for React. [link](https://medium.com/@goutam2606/what-is-react-js-history-of-react-d61a56e29027)
- **2011 (The Prototype):** Frustrated by UI state management issues, Facebook software engineer **Jordan Walke** built an internal prototype called FaxJS. It allowed markup to be reactive and was successfully shipped to power a search element on Facebook's desktop site. [link](https://medium.com/@waledkama2510/history-of-reactjs-jsx-xhp-d8c383c68fae)
- **2012 (Instagram Adoption):** Facebook acquired Instagram. The Instagram team wanted to build a web platform from scratch using client-side rendering. They decoupled Walke’s prototype from Facebook’s infrastructure, proving that the technology could work as a standalone UI library. [link](https://www.youtube.com/watch?v=8pDqJVdNa44\&t=1205)

### 2. The Open Source "Hate" & Expansion (2013–2015)

- **2013 (The Rocky Launch):** Jordan Walke officially introduced React to the world at **JSConf US** in May 2013, making it open-source. At first, the community heavily criticized it. React broke the conventional "separation of concerns" by mixing HTML-like syntax (**JSX**) directly into JavaScript code. Haters called it a step backward. [link](https://www.greatfrontend.com/react-interview-playbook/react-landscape-history)
- **2014 (The Turning Point):** Meta engineers went on a "React Tour" to explain the benefits of its declarative approach, unidirectional data flow, and **Virtual DOM** (which drastically boosted rendering performance). Developer sentiment quickly shifted, and extensions like the Chrome React Developer Tools emerged. [link](https://www.saketbhatnagar.in/react/history-of-react)
- **2015 (Going Mobile & Stable):** Major industry leaders like Netflix and Airbnb adopted React. In March 2015, Facebook open-sourced **React Native**, allowing web developers to build fully native iOS and Android apps using identical React patterns. [link](https://medium.com/@michaelwnek/history-of-react-js-and-future-endeavors-f3f0b8124038)

### 3. Architecture Overhauls & Licensing Drama (2016–2018)

- **2016 (Functional Components):** React moved toward functional paradigms, introducing lighter functional components alongside traditional, clunkier class components. [link](https://www.greatfrontend.com/react-interview-playbook/react-landscape-history)
- **2017 (The Patent Crisis & React Fiber):** React faced massive backlash due to its "BSD + Patents" license agreement, which stated that developers couldn't use React if they ever sued Facebook for patent infringement. Under intense community pressure (including threats from WordPress to dump the library), Facebook ultimately re-licensed React under the highly permissive **MIT License**. Concurrently, React 16 rolled out **React Fiber**, a complete under-the-hood rewrite of its core reconciliation algorithm to support faster, asynchronous rendering. [link](https://en.wikipedia.org/wiki/React%5F%28software%29)

### 4. The Modern Era: Hooks & Server Components (2019–2024)

- **2019 (React Hooks):** Version 16.8 introduced **Hooks** (like `useState` and `useEffect`). This completely shifted the ecosystem away from Class components, allowing developers to manage state and complex logic entirely inside simpler functional components.
- **2022 (React 18 & Concurrency):** React 18 added features like automatic batching, `Suspense`, and concurrent rendering, giving the browser the ability to pause and resume UI updates without freezing the user interface.
- **2024 (React 19 & Compiler):** React 19 optimized **React Server Components (RSC)** to run directly on server environments, dramatically decreasing client-side bundle sizes and initial loading times. It also laid the ground for the React Compiler (formerly _React Forget_), automating code optimizations that developers used to write manually. [link](https://playfulprogramming.com/posts/react-history-through-code)

### 5. A New Governance (2026–Present)

- **2026 (The React Foundation):** In a historic milestone for open source neutrality, Meta officially transferred the ownership of React, React Native, and JSX to the **React Foundation**. Hosted by the Linux Foundation, this transition ensures that the library is no longer corporate-owned and is instead driven entirely by its global community and independent stakeholders. [link](https://en.wikipedia.org/wiki/React%5F%28software%29)

Would you like to explore a specific technical aspect of its history, such as **how the Virtual DOM works**, the syntax transition from **Class Components to Hooks**, or how **React Server Components (RSCs)** change web architecture?

- [link](https://en.wikipedia.org/wiki/React%5F%28software%29)\
  Wikipedia\
  React (software) - Wikipedia\
  It is maintained by a community of individual developers and companies and governed by the React Foundation, an independent founda...
- [link](https://www.youtube.com/watch?v=8pDqJVdNa44\&t=1205)\
  YouTube·CultRepo\
  How A Small Team of Developers Created React at ...\
  Feb 10, 2023 — In 2012, after Facebook acquired Instagram, there was a need to develop a web presence for the previously mobile-only application.\
  4m
- [link](https://www.geeksforgeeks.org/reactjs/history-and-evolution-of-react/)\
  GeeksforGeeks\
  History and Evolution of React - GeeksforGeeks\
  Jul 23, 2025 — History and Evolution of React \* React, a popular JavaScript library for building user interfaces has revolutionized the way devel...

Show all

## history of react versions

The version history of React tracks its evolution from an experimental internal prototype into a fully optimized, component-driven architecture. Originally, React utilized a **`0.x.x` versioning scheme** before transitioning to major version integers with **React 15** to align with Semantic Versioning (SemVer) expectations. [link](https://en.wikipedia.org/wiki/React%5F%28software%29)

Here is a chronological breakdown of React's major version milestones:

### 📊 React Version History Timeline

| Major Version | Release Date   | Core Technical Shift & Features Introduced                                                                                                                                                                                        |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0.3.0**     | May 2013       | **Initial Public Release.** Introduced the fundamental concepts of declarative components, JSX syntax, and the early Virtual DOM.                                                                                                 |
| **0.13.0**    | March 2015     | **ES6 Class Components.** Allowed developers to write components as standard JavaScript classes (`class MyComponent extends React.Component`) instead of using `React.createClass`.                                               |
| **0.14.0**    | October 2015   | **The Great Split.** Split the library into `react` (core logic) and `react-dom` (web rendering), preparing React for cross-platform expansion like React Native.                                                                 |
| **15.0.0**    | April 2016     | **Semantic Versioning Adopted.** Dropped the `0.x` prefix. Improved rendering performance, introduced native SVG support, and added cleaner DOM markup generation.                                                                |
| **16.0.0**    | September 2017 | **React Fiber & MIT License.** Completely rewrote the core reconciliation engine (Fiber) for asynchronous rendering. Added Error Boundaries, Portals, and re-licensed under standard MIT.                                         |
| **16.8.0**    | February 2019  | **React Hooks.** Introduced stateful functional components via `useState`, `useEffect`, and custom hooks, effectively starting the deprecation of Class components.                                                               |
| **17.0.0**    | October 2020   | **"No New Features" Release.** Focused entirely on modernizing plumbing, easing step-by-step upgrades between different versions, and revamping the underlying event delegation system.                                           |
| **18.0.0**    | March 2022     | **Concurrent Rendering.** Introduced features like automatic batching, `Suspense` for data fetching, and new concurrency hooks (`useTransition`, `useDeferredValue`).                                                             |
| **19.0.0**    | December 2024  | **Actions & Server Integration.** Shipped stable **React Server Components (RSC)**. Streamlined form behaviors using Actions (`useActionState`, `useFormStatus`), added asset loading optimization, and rolled out the `use` API. |

***

### 🔎 Key Evolutionary Architectural Shifts

1. **The Move to SemVer (0.14 → 15.0):** To signal the stability of the library to enterprise adapters, the team jumped from version `0.14.7` directly to `15.0.0`. [link](https://endoflife.date/react)
2. **Synchronous to Coordinated Rendering (16.0 → 18.0):** Older versions used a synchronous rendering stack—if a large tree was updating, the main browser thread would freeze. The introduction of **Fiber** in v16 made updates chunkable, which paved the way for fully asynchronous, prioritizeable user experiences in v18. [link](https://www.geeksforgeeks.org/reactjs/history-and-evolution-of-react/)
3. **Class Components vs. Hooks (16.8):** Before Hooks, lifecycle logic was tied up in rigid, boilerplate-heavy class states. Hooks made functional programming the native standard for React codebases. [link](https://www.greatfrontend.com/react-interview-playbook/react-landscape-history)

Would you like to see a code comparison of how syntax changed between **Class Components (v15)** and **Hooks (v16.8+)**, or dive deeper into the latest APIs released in **React 19**? [link](https://www.telerik.com/blogs/whats-new-react-19)

- [link](https://react.dev/versions)\
  React\
  React Versions\
  The latest version of React is 19.2. The React docs are updated for major versions, but not for minor or patch versions. The docs ...
- [link](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/)\
  blog.risingstack.com\
  The History of React.js on a Timeline - RisingStack Engineering\
  May 30, 2024 — 2015 – React is Stable \* Early 2015: Flipboard releases React Canvas. \* January: Netflix likes React. \* Early 2015: Airbnb uses Re...
- [link](https://en.wikipedia.org/wiki/React%5F%28software%29)\
  Wikipedia\
  React (software) - Wikipedia\
  Fixes were backported to versions 19.0.3, 19.1.4, and 19.2.3. Version history of React show. Version, Release Date, Changes. 0.3.0...

Show all

