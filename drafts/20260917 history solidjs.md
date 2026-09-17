## history of solidjs

**SolidJS** is a declarative, performance-first JavaScript UI library <mark>created by<span> </span><strong>Ryan Carniato</strong></mark>. It is widely celebrated for popularizing the modern concept of **fine-grained reactivity using "Signals"** while completely eschewing the Virtual DOM (VDOM). [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)

The evolution of SolidJS spans over a decade, progressing from a private experiment to an industry-shaping framework paradigm. [link](https://daily.dev/posts/solidjs-a-decade-of-evolution-in-javascript-frameworks-mhaajwpw8)

***

### ⏳ Chronological Timeline

#### 1. The Pre-History & Inspiration (2013–2016)

Before building SolidJS, Ryan Carniato spent significant time working with **Knockout.js**, an early JavaScript framework that utilized an observable model for granular data tracking. When **React** rose to dominance in 2013–2014 with its **Virtual DOM** and unidirectional data flow, Carniato admired React's declarative components but felt the VDOM was an unnecessary overhead. [link](https://www.youtube.com/watch?v=ti8XnfFCPcs\&t=34)

- **The Core Thesis:** He believed that targeted, direct DOM manipulation driven by a hardware-like dependency graph (fine-grained reactivity) would be inherently faster and more memory-efficient than constantly diffing a virtual tree. [link](https://www.youtube.com/watch?v=Z1dd09rxny4\&t=21)

#### 2. Secret Origins & First Commit (2016–2018)

Carniato began prototyping a lighter, compiled reactive alternative to existing frameworks. On **August 21, 2016**, he pushed the "initial commit" to a private repository titled "framework"—this prototype eventually became SolidJS. [link](https://dev.to/ryansolid/solidjs-official-release-the-long-road-to-1-0-4ldd)

- Originally, he explored using standard HTML string templates (similar to early Vue or Angular) and Web Components.
- The true turning point came when he discovered **Surplus**, a library that cleanly paired signals with compiled **JSX**. Carniato adopted JSX for SolidJS, combining the developer experience of React with the raw performance of compiled template literals. [link](https://www.solidjs.com/resources)

#### 3. Open Source & The Benchmark Era (2018–2021)

Driven by a desire to test his creation against the industry’s best in the raw `js-framework-benchmark`, Carniato officially **open-sourced SolidJS in April 2018**. [link](https://dev.to/playfulprogramming/a-decade-of-solidjs-32f4)

- For the next three years, SolidJS routinely topped performance charts, turning heads in the open-source community.
- A massive moment of validation occurred in **October 2018**, when React announced **React Hooks**. Suddenly, SolidJS’s core syntax (`createSignal`), which looked identical to hooks (`useState`), became universally recognizable to millions of developers—even though Solid's signals only execute once and don’t trigger component-wide re-renders. [link](https://medium.com/@ananyavhegde2001/why-solidjs-made-me-rethink-everything-i-knew-about-react-1e1ec10068d7)

#### 4. The 1.0 Milestone & Netlify Era (2021–2023)

On **June 28, 2021**, after five years of development and thousands of hours of work, **SolidJS 1.0** was officially released as a production-ready, stable framework. [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)

- Following the launch, Carniato’s work caught the attention of the industry, leading to his hiring as a Principal Engineer at **Netlify** to work on SolidJS full-time. [link](https://dev.to/playfulprogramming/the-easiest-introduction-to-solidjs-pgi)
- Recognizing the industry shift toward full-stack frameworks (like Next.js), the core team began developing **SolidStart**, an official meta-framework for server-side rendering (SSR) and routing. [link](https://www.solidjs.com/blog/introducing-solidstart)

#### 5. Industry-Wide Influence & The Road to 2.0 (2024–Present)

By 2024 and 2025, the architectural philosophy of SolidJS had effectively "won" the framework wars. The wider JavaScript ecosystem underwent a massive **"Signal Renaissance."** Frameworks like Angular, Preact, Quick, Svelte, and Vue either adopted or heavily revamped their reactivity models to use Signals, heavily influenced by Solid's success. Even a proposal for native Signals in the JavaScript language (TC39) emerged. [link](https://thenewstack.io/solidjs-creator-on-fine-grained-reactivity-as-next-frontier/)

- **SolidStart 1.0** officially hit stable release in May 2024.
- Since 2025, active development has shifted entirely toward **SolidJS 2.0**, introducing an entirely rebuilt reactive foundation powered by the modern `@solidjs/signals` package and moving SolidStart toward a highly optimized Vite-based build setup. [link](https://listiak.dev/blog/the-state-of-solid-js-in-2026-signals-performance-and-growing-influence)

***

### 📊 Direct Architectural Comparison

Unlike other frameworks that evolved iteratively, SolidJS has stayed true to its foundational divergence from React:

| Feature                 | React                                            | SolidJS                                    |
| ----------------------- | ------------------------------------------------ | ------------------------------------------ |
| **Rendering Strategy**  | Virtual DOM (VDOM) diffing                       | Compiled direct DOM manipulation           |
| **Component Execution** | Re-executes the entire function on state changes | Executes **only once** to set up listeners |
| **Reactivity Unit**     | Hooks (`useState`)                               | Signals (`createSignal`)                   |
| **Updates**             | Coarse-grained (Component / Tree level)          | Fine-grained (Targeted text-node level)    |

Would you like to explore **how SolidJS compiles JSX under the hood** without a Virtual DOM, or are you interested in a **code-level comparison** between React Hooks and Solid Signals?

- [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)\
  YouTube·ChatOSS\
  The Story of Solid JS\
  Nov 29, 2022 — solidjs was created by a very dedicated. man named Ryan Carneato ryan spent five years working on version one of SolidJS. anyone w...\
  4:28
- [link](https://dev.to/playfulprogramming/a-decade-of-solidjs-32f4)\
  DEV Community\
  A Decade of SolidJS - DEV Community\
  Apr 24, 2025 — As of today, it has been 7 years since I open-sourced SolidJS. It wasn't for noble reasons. I wasn't trying to show people the way...
- [link](https://www.youtube.com/watch?v=ti8XnfFCPcs\&t=34)\
  YouTube·LogRocket\
  10 Years Of SolidJS: Saying No To React | Ryan Carniato\
  Jun 12, 2025 — Ryan Carniato, the creator of SolidJS, reflects on the history and motivations behind the framework over the past decade. The disc...\
  53m

Show all

## history of features

The evolution of features in **SolidJS** highlights a shift from basic DOM manipulation to an advanced reactivity graph. Below is the chronological breakdown of how its technical features evolved, transitioning from a performance experiment into a first-class async engine. [link](https://dev.to/playfulprogramming/a-decade-of-solidjs-32f4)

***

### 📦 The Era Breakdown

#### 🧪 1. Pre-Release & Prototyping Era (2016–2018)

The initial feature set focused purely on **proving that fine-grained reactivity could outperform a Virtual DOM**. [link](https://www.youtube.com/watch?v=MjfdhHKJ1O4\&t=112)

- **HTML Direct Directives:** Early iterations used custom string templates like `s-if` and `s-for` (similar to Knockout/Vue).
- **The JSX Compiler Pivot:** In 2017, the framework replaced string templates with a bespoke **Babel JSX compiler**. Instead of outputting Virtual DOM elements, it compiled JSX expressions into real HTML `<template>` tags using `cloneNode()` for hyper-fast rendering.
- **Core Primitives Intro:** The foundational reactivity triad—`createSignal`, `createEffect`, and `createMemo`—was cemented. [link](https://www.youtube.com/watch?v=ur9pW5hUJkg\&t=216)

#### 🚀 2. The Stable 1.x Era: Building the Core (2021)

With the launch of [SolidJS 1.0](https://www.solidjs.com/blog/introducing-solidstart), the framework graduated to a fully-featured UI suite capable of handling large-scale applications. [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)

- **Built-in Control Flow Components:** Features like `<Show>`, `<For>`, `<Index>`, and `<Switch>` were introduced. They were built to map array changes and boolean conditions cleanly to fine-grained DOM operations without destroying elements prematurely. [link](https://strapi.io/blog/solidjs-explained-fine-grained-reactive-framework)
- **Proxy-based Stores:** `createStore` was introduced to manage nested state cleanly using JavaScript Proxies. It removed the need to manually split deeply nested signals. [link](https://github.com/solidjs/solid)
- **Concurrent Rendering & Suspense:** Features like `<Suspense>`, `<ErrorBoundary>`, and `createResource` gave Solid native utilities for code-splitting and data fetching. [link](https://www.youtube.com/watch?v=ur9pW5hUJkg\&t=216)
- **Progressive SSR and Hydration:** Solid pioneered asynchronous streaming server-side rendering (SSR) that could seamlessly resume script interaction in the browser without re-evaluating the tree. [link](https://www.youtube.com/watch?v=ur9pW5hUJkg\&t=216)

#### 🌐 3. The Meta-Framework Era: SolidStart 1.0 (2022–2024)

As full-stack web applications gained momentum, the team shifted its feature focus to orchestration. [link](https://www.solidjs.com/blog/introducing-solidstart)

- **SolidStart 1.0:** Released in mid-2024, it provided server-rendered routing, platform-agnostic adapters (Netlify, Vercel, Cloudflare), and standard web request/response handling natively mapped to Solid components. [link](https://www.solidjs.com/blog/introducing-solidstart)

#### ⚡ 4. The SolidJS 2.0 Revolution: First-Class Async & Zero Overhead (2026)

Solid 2.0 rethought the entire lifecycle framework, aggressively **cutting away workarounds** in favor of making asynchronous flows native to the reactive graph. [link](https://www.solidjs.com/blog/solid-2-0-rc-the-big-reveal)

- **First-Class Promises:** The reactive graph natively handles JavaScript Promises. Developers can pass a promise straight into a standard `createMemo` or effect without wrapping it in a special `createResource` component.
- **Goodbye `createResource` and `batch`:** Because the underlying `@solidjs/signals` core automatically handles microtask queue batching and resolves async values natively, utilities like `batch()`, `createResource()`, and transition primitives were entirely removed from the API.
- **The New Rust-Based Toolchain:** To speed up builds, the compilation pipeline replaced its legacy JavaScript tools with a brand new **Rust-based compiler**, accelerating dev builds by over 20 times.
- **Full-App Vite Mode (Absorbing SolidStart):** The meta-framework model changed dramatically. SolidStart as a separate orchestrator became unnecessary because its core features—file-system routing, SSR bundling, and web fetch handlers—were baked directly into the core Solid 2 Vite plugin.
- **Direct Store Mutation Drafts:** Replaced helper functions like `produce` or `createMutable`. Store setters now pass developers a mutable draft directly, natively mirroring modern immutable architectures. [link](https://listiak.dev/blog/the-state-of-solid-js-in-2026-signals-performance-and-growing-influence)

***

### ⏱️ Feature Evolution Summary Matrix

| Feature Domain           | 1.x Era Solution                      | 2.0 Era Paradigm                                     |
| ------------------------ | ------------------------------------- | ---------------------------------------------------- |
| **Data Fetching**        | `createResource(fetcher)`             | Native Async inside `createMemo`                     |
| **State Batching**       | Explicit `batch(() => ...)`           | Automatic microtask queue batching                   |
| **Nested Objects**       | `createStore` + `produce()` mutations | Direct Store Mutation Drafts                         |
| **Full Stack / Routing** | External `SolidStart` Meta-framework  | Core Vite Plugin "Start Mode" (Built-in SSR/Routing) |
| **Compilation**          | Babel/JS Compiler                     | Hyper-fast Rust-based Toolchain                      |

Would you like to look at a **code snippet** comparing how data fetching changed from Solid 1.x (`createResource`) to Solid 2.0 (`async memos`)? Or would you prefer to explore the **new Rust compiler features**?

- [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)\
  YouTube\
  The Story of Solid JS - YouTube\
  Nov 29, 2022 — solidjs was created by a very dedicated. man named Ryan Carneato ryan spent five years working on version one of SolidJS. anyone w...
- [link](https://dev.to/playfulprogramming/a-decade-of-solidjs-32f4)\
  DEV Community\
  A Decade of SolidJS - DEV Community\
  Apr 24, 2025 — It took another few months to finish up a basic renderer. I committed in a private BitBucket called "framework" and that was where...
- [link](https://www.youtube.com/watch?v=ur9pW5hUJkg\&t=216)\
  YouTube·Awesome\
  Solid JS Explained\
  Dec 11, 2023 — This video provides an overview of the SolidJS framework and its key features. It aims to explain why SolidJS is a compelling opti...\
  23s

Show all

## history of versions

The release history of **SolidJS** highlights a strict adherence to semantic versioning (SemVer). The core project maintains an intentional "less-is-more" philosophy—breaking changes are compressed into major rewrites, while minor versions expand core capabilities without altering the underlying reactivity mental model. [link](https://github.com/solidjs/solid/blob/main/CHANGELOG.md)

***

### 📅 Chronological Version Timeline

```
   [v0.x Era] -------> [v1.0 Milestone] -------> [v1.1 - v1.9] -------> [v2.0 Era]
(2018 - 2021)          (June 2021)            (2021 - 2026)          (Mid-2026)
Benchmark Proof        Production Ready       Feature Maturity       Native Async Core
```

#### 🛠️ 1. The Pre-v1.0 Era (2018–2021)

Before stability guarantees, the `v0.x` releases served as an open-source sandbox where Ryan Carniato benchmarked SolidJS against other UI tools. [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)

- **v0.1.0 (April 2018):** **The initial public release.** It featured early proxy state, a dedicated Babel compilation system, and topped performance tables upon arrival. [link](https://dev.to/playfulprogramming/a-decade-of-solidjs-32f4)
- **v0.14.0 (October 2019):** **The API Pivot.** This update dropped initial custom directives in favor of the current React-Hook-like syntax (`createSignal`), aligning with community expectations.

#### 🚀 2. SolidJS 1.0 (June 28, 2021)

Marking **five years of development**, the `1.0.0` launch declared the library production-ready. [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)

- **Impact:** It stabilized the core API tree (`createSignal`, `createEffect`, `createMemo`), guaranteed long-term support for basic primitives, and introduced fully stable **Streaming Server-Side Rendering (SSR)**.

#### 📈 3. The 1.x Minor Refinements (2021–2026)

Rather than fragmenting the ecosystem with breaking shifts, the team used minor releases to optimize performance and expand backend infrastructure.

- **v1.3 (January 2022):** **HTML Streaming.** Introduced structured HTML streaming via `<Suspense>`, allowing parts of the server-rendered application to trickle down the wire as async data resolved.
- **v1.6 (October 2022):** **Custom Renderers.** Unlocked the `@solidjs/universal` package, allowing developers to target environments beyond the browser DOM (such as WebGL, canvas, and native mobile UI shell rendering).
- **v1.8 (October 2023):** **Chrome-backed Optimizations.** Working in tandem with Google Chrome Aurora, this version delivered architectural improvements to streaming serialization and de-duplication. [link](https://github.com/solidjs/solid/blob/main/CHANGELOG.md)
- **v1.9 (Mid-2024 to 2026):** **The End-of-Line Cycle.** Serves as the current long-term-stable (LTS) foundation for apps running on the Solid 1.x paradigm. [link](https://www.solidjs.com/)

#### ⚡ 4. SolidJS 2.0 (August 2026)

Following months of testing on the `2.0.0-experimental` and Beta branches, **SolidJS 2.0 entered Release Candidate (RC) status in August 2026**. It represents a complete ground-up rewrite of the framework's internal execution engine. [link](https://www.solidjs.com/blog/solid-2-0-rc-the-big-reveal)

- **Why the Break?** Solid 1.x treated asynchronous tasks (like fetches) as external events requiring bridge tools like `createResource`. Solid 2.0 embeds Promises directly into the dependency tracker.
- **Ecosystem Sync:** To prevent version mismatch, the meta-framework layer shifted concurrently, aligning with the release of **SolidStart 2.0** on Vite. [link](https://listiak.dev/blog/the-state-of-solid-js-in-2026-signals-performance-and-growing-influence)

***

### 🔄 Summary of Major System Shifts

| Version Line      | Primary Focus       | Major Paradigm Change                                                               |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------- |
| **v0.x**          | Validation & Speed  | Proving compiled fine-grained reactivity is faster than VDOM.                       |
| **v1.0**          | Stability & Support | Freezing the foundational signal syntax for enterprise deployment.                  |
| **v1.1 – v1.9**   | Multi-Platform SSR  | Adding streaming, edge-rendering compatibility, and universal targets.              |
| **v2.0 (Latest)** | Native Asynchrony   | Moving to a Rust compiler, zero-overhead promise tracking, and a unified toolchain. |

Would you like to drill into the **breaking changes** required to migrate a project from **Solid 1.x to Solid 2.0**, or look at how the **Vite integration changed** between these major versions?

- [link](https://www.youtube.com/watch?v=4Mk-X2lyOW8)\
  YouTube·ChatOSS\
  The Story of Solid JS\
  Nov 29, 2022 — solidjs was created by a very dedicated. man named Ryan Carneato ryan spent five years working on version one of SolidJS. anyone w...\
  4:28
- [link](https://dev.to/playfulprogramming/a-decade-of-solidjs-32f4)\
  DEV Community\
  A Decade of SolidJS - DEV Community\
  Apr 24, 2025 — Over the summer of 2015, shortly after my daughter was born, I started playing with building the reactive library that would becom...
- [link](https://listiak.dev/blog/the-state-of-solid-js-in-2026-signals-performance-and-growing-influence)\
  listiak.dev\
  The state of Solid.js in 2026: signals, performance, and ...\
  Feb 23, 2026 — Where Solid.js is right now. The current release landscape. Solid.js sits at v1.9.11 as its latest stable release. But the real st...

Show all

