# history of vuejs

## history of vuejs

**Vue.js** was <mark>created by<span> </span><strong>Evan You</strong><span> </span>and officially released in<span> </span><strong>February 2014</strong></mark>. Developed as an independent, community-driven alternative to corporate-backed giants like Google's Angular and Facebook's React, Vue has grown from a lightweight personal side project into one of the world's most popular progressive JavaScript frameworks. [link](https://madushaprasad21.medium.com/vue-js-history-1a6b8567198f)

***

### 🛠️ The Origins (2013–2014)

While working at **Google Creative Lab** in 2013, engineer Evan You frequently used AngularJS for rapid UI prototyping. He loved Angular’s data-binding but found the rest of the framework heavy, rigid, and over-engineered for smaller projects. [link](https://www.youtube.com/watch?v=F2koGTRw5yk\&t=12)

- **The Core Idea:** He wanted to extract the lightweight features he liked—specifically synchronizing the DOM with JavaScript objects—and strip away the corporate boilerplate. [link](https://en.wikipedia.org/wiki/Vue.js)
- **The Name:** The project's first code commit in July 2013 was named **"Seed.js"**. When Evan discovered that name was taken on npm, he chose **Vue**, the French word for "view," because it dealt directly with the view layer and looked sleek. [link](https://javascript.plainenglish.io/the-fascinating-story-behind-the-birth-of-vue-js-a-documentary-97d353688c2)
- **The Launch:** Vue.js was publicly announced on Hacker News in **February 2014**. [link](https://www.youtube.com/watch?v=F2koGTRw5yk\&t=12)

***

### 📈 Major Version Milestones

Vue uses a unique naming convention for its major versions, pulling inspiration from popular anime and manga series in alphabetical order. [link](https://en.wikipedia.org/wiki/Vue.js)

| Version     | Release Date   | Anime Codename       | Major Technological Shifts & Impacts                                                                                                                                                                   |
| ----------- | -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Vue 1.0** | October 2015   | _Evangelion_         | Solidified the framework's stability. Introduced a robust ecosystem including early iterations of Vue Router and Vuex for state management.                                                            |
| **Vue 2.0** | October 2016   | _Ghost in the Shell_ | Introduced a highly optimized **Virtual DOM** rendering layer, drastically improving performance. This release catalyzed massive global adoption, notably backed by companies like Laravel and GitLab. |
| **Vue 3.0** | September 2020 | _One Piece_          | Written entirely from scratch in **TypeScript**. Introduced the **Composition API**, giving developers a powerful, flexible alternative to the classic Options API to manage massive codebases.        |

***

### 🌟 Pioneering Innovations

Throughout its history, Vue has introduced several concepts that shifted how the broader frontend web development landscape operates:

- **The Progressive Framework:** Evan You pioneered the concept of a "progressive" tool. You can easily drop Vue into a single HTML file via a CDN link for a small widget, or scale it up incrementally into a massive enterprise single-page application (SPA) using advanced tooling. [link](https://www.youtube.com/watch?v=OmrwRrZitv4\&t=7)
- **Deep Tracking Reactivity:** Vue was the first mainstream framework to automatically apply deep tracking proxy-based reactivity to deep JavaScript objects without requiring explicit setter functions. [link](https://www.youtube.com/watch?v=AVTlIkkK7vI)
- **Single File Components (SFCs):** Vue pioneered combining the HTML template, JavaScript logic, and CSS styling into a singular `.vue` file natively tied to modern build tools. [link](https://www.youtube.com/watch?v=OmrwRrZitv4\&t=7)

***

### 🌍 Vue's Place in Modern Web Development

Vue remains completely unique among major frontend technologies because it is **utterly independent**. It relies entirely on crowdfunding, sponsorships, and open-source contributions rather than the backing of a multi-billion-dollar tech conglomerate. [link](https://vuejs.org/about/faq.html)

This freedom allows the core team to build downstream innovations purely for the community's benefit, resulting in massive ecosystem tools like **Vite** (now an industry-standard build tool across React, Svelte, and Vue) and full-stack environments like **Nuxt**. Following the official End of Life (EOL) for Vue 2 in December 2023, the community shifted fully to Vue 3, leaning heavily into modern compilation upgrades like **Vapor Mode** for lightning-fast, virtual-DOM-less performance. [link](https://vuejs.org/about/faq)

Would you like to explore **how the code changed** between Vue 2 and Vue 3, or are you interested in learning more about how Vue's **reactivity system** works under the hood?

- [link](https://en.wikipedia.org/wiki/Vue.js)\
  Wikipedia\
  Vue.js - Wikipedia\
  History. Vue was created by Evan You after working for Google using AngularJS in several projects. He later summed up his thought ...
- [link](https://javascript.plainenglish.io/the-fascinating-story-behind-the-birth-of-vue-js-a-documentary-97d353688c2)\
  JavaScript in Plain English\
  The Fascinating Story Behind the Birth of Vue.js | by John Philip\
  Jul 1, 2021 — After thinking and realizing his project was based on visualization and more about view he went with the name and thought about tr...
- [link](https://www.youtube.com/watch?v=F2koGTRw5yk\&t=12)\
  YouTube·CodeSource\
  The Untold Story of Vue.js\
  Feb 18, 2025 — In 2013, Evan You, working on web development, felt that existing JavaScript frameworks like Angular.js and Backbone.js were eithe...\
  2m

Show all

## history of vue versions

The version history of Vue.js is defined by an incremental, "progressive" development philosophy. Major versions introduces massive architecture overhauls, while minor versions add highly anticipated native features. True to open-source culture, Evan You assigns each minor and major version an **anime or manga codename in alphabetical order**. [link](https://vuejs.org/about/releases.html)

***

### 🗺️ The Version Timeline Overview

The table below traces Vue’s trajectory from a small experimentation tool to an industry-standard framework:

| Major Version | Release Date   | Anime Codename       | Landmark Technological Shift                                                                  |
| ------------- | -------------- | -------------------- | --------------------------------------------------------------------------------------------- |
| **Vue 1.0**   | October 2015   | _Evangelion_         | **Stabilization & Tooling:** Officially unified early APIs (`v-on`, `v-for`).                 |
| **Vue 2.0**   | October 2016   | _Ghost in the Shell_ | **Virtual DOM Layer:** Massive rendering rewrite that catalyzed global adoption.              |
| **Vue 3.0**   | September 2020 | _One Piece_          | **TypeScript & Composition API:** Complete source code rewrite from JavaScript to TypeScript. |

***

### 📦 Major Release Breakdown

#### 🟢 The Vue 1.x Era (2015–2016)

Prior to 1.0, early pre-releases (0.x) served as an experimental playground for Evan You. The 1.0 release solidified Vue as a predictable tool for production. [link](https://www.youtube.com/watch?v=AVTlIkkK7vI\&t=338)

- **Key Focus:** Cleaning up syntax inconsistencies. It ironed out directives like `v-bind` and `v-on`, giving frontend developers a clean HTML-centric alternative to React’s JSX.
- **Ecosystem Birth:** Early routing (`vue-router`) and state management architectures began taking independent shape during this cycle.

#### 🔵 The Vue 2.x Era (2016–2023)

Vue 2.0 completely replaced the underlying architecture with a fork of the Snabbdom **Virtual DOM library**. It was arguably Vue's most disruptive phase, seeing massive integration into frameworks like Laravel and enterprise giants like GitLab. [link](https://www.youtube.com/watch?v=AVTlIkkK7vI\&t=338)

- **Vue 2.5 (_Level E_) & 2.6 (_Macross_):** Drastically improved error handling (`errorCaptured`) and introduced cleaner slot syntax (`v-slot`).
- **Vue 2.7 (_Naruto_):** Released in July 2022 as a special **Bridge Release** to ease migration to Vue 3. It backported key Vue 3 features—like the **Composition API**—into the Vue 2 codebase.
- **End of Life (EOL):** Vue 2 officially reached its EOL on **December 31, 2023**. [link](https://vuejs.org/about/faq.html)

#### 🟣 The Vue 3.x Era (2020–Present)

Vue 3 was a monumental rewrite. Instead of using regular object tracking (`Object.defineProperty`), Vue 3 migrated to modern **ES6 Proxies**, meaning apps consume drastically less memory and experience incredibly fast reactivity updates. [link](https://vuejs.org/about/faq.html)

- **Vue 3.0 (_One Piece_ - Sept 2020):** Delivered the **Composition API** to solve code-organization issues in massive components, alongside multi-root templates (Fragments), `Teleport`, and `Suspense`. [link](https://en.wikipedia.org/wiki/Vue.js)
- **Vue 3.2 (_Quintessential Quintuplets_ - Aug 2021):** Introduced `<script setup>`, making components incredibly concise, alongside native support for Web Components. [link](https://en.wikipedia.org/wiki/Vue.js)
- **Vue 3.3 (_Rurouni Kenshin_ - May 2023):** Completely revamped TypeScript support, allowing developers to type dynamic runtime properties (`props`) seamlessly. [link](https://en.wikipedia.org/wiki/Vue.js)
- **Vue 3.4 (_Slam Dunk_ - Dec 2023):** Redesigned the template compiler from the ground up, reducing compile times and introducing the `defineModel` shorthand for two-way data binding. [link](https://www.youtube.com/watch?v=AVTlIkkK7vI\&t=338)
- **Vue 3.5 (_Tengen Toppa Gurren Lagann_ - Sept 2024):** A major structural update that drastically optimized reactivity memory usage by up to 56%. It also introduced native prop destructuring and the `useId()` helper. [link](https://en.wikipedia.org/wiki/Vue.js)
- **Vue 3.6+ (_Vapor Mode_ - 2026 Phase):** Entering its release candidate phases, Vue 3.6 introduces **Vapor Mode**. This is a secondary, compilation-driven strategy that bypasses the Virtual DOM entirely for components that require raw, lightning-fast rendering speeds. [link](https://github.com/vuejs/core/releases)

Would you like to take a closer look at the **breaking syntax changes** between Vue 2 and Vue 3, or learn how to write components using the modern **Composition API (`<script setup>`)**?

- [link](https://en.wikipedia.org/wiki/Vue.js)\
  Wikipedia\
  Vue.js - Wikipedia\
  History. Vue was created by Evan You after working for Google using AngularJS in several projects. He later summed up his thought ...
- [link](https://vuejs.org/about/releases.html)\
  Vue.js\
  Releases - Vue.js\
  Checking latest version... A full changelog of past releases is available on GitHub. Release Cycle ​ Vue does not have a fixed rel...
- [link](https://github.com/vuejs/core/releases)\
  GitHub\
  Releases · vuejs/core - GitHub\
  Sep 11, 2026 — No results found. View all tags. @github-actions github-actions released this Jul 17. v3.6.0-rc.1 · 6fa3447. Vue 3.6 is now enteri...

Show all

## history of vue features

The architectural history of **Vue.js** is driven by an ongoing pursuit of **fine-grained reactivity and compiler optimizations**. Unlike other frameworks that force a single way of doing things, <mark>Vue pioneered a<span> </span><strong>"progressive" feature strategy</strong>, allowing developers to transition seamlessly from plain HTML directives to compiler-optimized frameworks</mark>. [link](https://www.youtube.com/watch?v=zvjOT7NHl4Q\&t=7)

***

### 🟢 1. The Directive & DOM Era (Vue 1.x)

In Vue 1.x, Evan You wanted to build a lightweight prototyping tool that retained the best parts of Angular. The earliest features focused entirely on basic reactivity mapped directly onto the real browser DOM. [link](https://madushaprasad21.medium.com/vue-js-history-1a6b8567198f)

- **Directives (`v-on`, `v-bind`, `v-model`):** Vue introduced declarative bindings using simple HTML attributes. It enabled effortless two-way data binding, letting inputs reactively update state variables without needing boilerplate listeners.
- **Deep-Tracking Reactivity:** Vue became the first mainstream framework to implement automatic deep tracking on objects. By wrapping internal data structures, mutations to nested objects updated the user interface instantly and precisely. [link](https://www.youtube.com/watch?v=OmrwRrZitv4\&t=7)
- **Single File Components (SFCs):** Instead of separating code by technology type (JS files, CSS files, HTML templates), Vue pioneered compiling `<template>`, `<script>`, and `<style>` blocks into a single `.vue` file natively tied to early build systems. [link](https://www.youtube.com/watch?v=AVTlIkkK7vI\&t=338)

***

### 🔵 2. The Virtual DOM Era (Vue 2.x)

To support massive scaling, enterprise structures, and Server-Side Rendering (SSR), Vue 2.x swapped out its direct-DOM engine for an independent in-memory architecture. [link](https://www.youtube.com/watch?v=zvjOT7NHl4Q\&t=7)

- **The Virtual DOM (VDOM):** Components were converted into abstract compilation trees (VNodes). This minimized direct browser layouts and significantly enhanced UI performance. [link](https://cloudinary.com/guides/front-end-development/what-is-vue-js)
- **The Options API:** Features were structured logically by component options: `data()`, `methods`, `computed`, and `watch`. While clean for small apps, this feature became difficult to maintain as files grew to thousands of lines. [link](https://www.youtube.com/watch?v=F2koGTRw5yk\&t=107)

***

### 🟣 3. The Proxy Rewrite & Composition Era (Vue 3.0 - 3.5)

Vue 3 was completely rebuilt in TypeScript to break past the memory limitations of old JavaScript engines and solve the issue of logic reuse in massive apps. [link](https://www.youtube.com/watch?v=F2koGTRw5yk\&t=107)

- **The Composition API:** Introduced `ref()` and `reactive()`, borrowing concepts from signal-style reactivity. It allowed developers to group features by _logical concern_ rather than code type.
- **ES6 Proxy Reactivity:** Vue dropped the legacy object setter limits (`Object.defineProperty`) in favor of native JavaScript Proxies. This cut application memory footprints, eliminated edge-case bugs with tracking array indexes, and improved speed up to tenfold.
- **Compile-Time Optimization (Patch Flags):** The compiler started injecting hidden "hints" into the Virtual DOM, warning the browser exactly which nodes were dynamic and which were completely static.
- **Built-in Architecture Helpers:** Features like `Teleport` allowed developers to render UI nodes (like modals) anywhere outside the core app structure.
- **`<script setup>` & `defineModel()`:** Added syntactic sugar that stripped code bloat from standard components and simplified two-way data bindings with a single macro.
- **Lazy Hydration (Vue 3.5):** Introduced fine-grained server-side rendering control, delaying heavy JavaScript execution until a component is visible, idle, or explicitly interacted with. [link](https://www.youtube.com/watch?v=zQYYsNEuXnA)

***

### ⚡ 4. The Modern No-VDOM Era (Vue 3.6+)

Entering its Release Candidate phase, Vue 3.6 introduces another massive leap in feature capabilities by tackling the rendering overhead of the Virtual DOM itself. [link](https://github.com/vuejs/core/releases)

- **"Alien Signals" Reactivity Engine:** Replacing the underlying reactive algorithms with a streamlined next-generation system, reducing core memory consumption by an extra 14%.
- **Vapor Mode:** A revolutionary compiler-driven strategy that bypasses the Virtual DOM completely for performance-sensitive hot paths. By appending `<script setup vapor>`, the compiler transforms code directly into fine-grained imperative DOM nodes—yielding speeds that match native vanilla JavaScript. [link](https://vueschool.io/articles/news/vn-talk-evan-you-preview-of-vue-3-6-vapor-mode/)

Would you like to drill down into a specific feature, like **how to implement the modern Composition API (`<script setup>`)**, or look at the performance benchmarks of **Vapor Mode**?

- [link](https://www.youtube.com/watch?v=OmrwRrZitv4\&t=7)\
  YouTube·Vue Mastery\
  10 Years of Vue: the Past and the Future | Evan You\
  Jun 10, 2024 — In this Vue.js Live 2024 presentation, Evan You, the creator of Vue.js, provides a 10-year retrospective on the framework, discuss...\
  5m
- [link](https://www.youtube.com/watch?v=F2koGTRw5yk\&t=107)\
  YouTube·CodeSource\
  The Untold Story of Vue.js\
  Feb 18, 2025 — Despite initial questions about its scalability, Vue.js found its niche by offering a middle ground compared to React and Angular.\
  34s
- [link](https://www.youtube.com/watch?v=AVTlIkkK7vI\&t=338)\
  YouTube·JavaScript Conferences by GitNation\
  the Past and the Future - Evan You, Vue.js Live 2024\
  May 1, 2024 — impact of view um because uh despite using it daytoday uh maybe a lot of new users today aren't as familiar with the history of it...\
  2m

Show all

## future of vue features

The future of **Vue.js** <mark>shifts the framework away from runtime execution toward heavy<span> </span><strong>compile-time optimizations, high-performance engines, and a native Rust-powered toolchain</strong></mark>. [link](https://onehorizon.ai/blog/vue-best-practices-in-2026-architecting-for-speed-scale-and-sanity)

Led by Evan You’s focus on a "Performance-First" philosophy, Vue is stepping away from the traditional Virtual DOM to directly rival compiled frameworks like Svelte and SolidJS while maintaining its beloved developer ergonomics. [link](https://www.reddit.com/r/vuejs/comments/1eyfq5d/future%5Fof%5Fvue/)

***

### 🌪️ 1. Vapor Mode (The Headliner Feature)

The most monumental shift in Vue’s future is **Vapor Mode**, which has reached its core implementation cycle in the **Vue 3.6 Release Candidate (RC)** phase. Vapor Mode changes how the framework updates the user interface. [link](https://certificates.dev/blog/vapor-mode-in-practice)

- **Eliminating the Virtual DOM:** Instead of creating in-memory virtual nodes (VNodes) and comparing them on every state change, Vapor compiles your standard HTML templates directly into surgical, hyper-fast vanilla JavaScript DOM operations. [link](https://dev.to/parsajiravand/what-is-vue-3-vapor-mode-3k2o)
- **Hybrid Interoperability:** It is completely opt-in at the component level. Developers can activate it on a performance-critical page or animation loop by simply adding a keyword: `<script setup vapor>`. [link](https://github.com/vuejs/core/releases)
- **Drastic Performance Leaps:** In high-frequency 60 FPS stress-test benchmarks, Vapor Mode drops base bundle sizes by up to 72%, slashes CPU scripting overhead from 8.2ms down to 1.1ms, and reduces component memory consumption up to tenfold. [link](https://www.youtube.com/watch?v=ko8XHMR1b1I)

***

### 🧬 2. The "Alien Signals" Reactivity Overhaul

Alongside Vapor Mode, Vue is re-engineering its underlying data tracking with a massive refactor of the `@vue/reactivity` core using an architecture inspired by **Alien Signals**. [link](https://github.com/vuejs/core/releases)

- This underlying engine update modernizes how computed properties and reactive states talk to one another.
- It resolves long-standing memory allocation limits and dramatically speeds up dynamic component unmounting, reducing reactive memory usage by over 50% without changing a single line of client-facing code. [link](https://github.com/vuejs/core/releases)

***

### 🦀 3. VoidZero and the Unified Rust Toolchain

Evan You's corporate entity, [VoidZero](https://voidzero.dev/), has significantly unified Vue's underlying infrastructure. The future of Vue development relies heavily on a lightning-fast native tooling stack: [link](https://redmonk.com/videos/evan-you/)

- **Vite and Rolldown:** Build pipelines are aggressively migrating toward **Rolldown**, a blazingly fast bundler written in Rust designed to replace Rollup inside **Vite**. This means cold server starts and complex production builds for large-scale single-page apps execute almost instantly. [link](https://voidzero.dev/posts/whats-new-feb-2026)
- **Rust-Powered Linting and Compiling:** Community and official efforts (like the `V's` toolchain built on top of `Oxc`) are integrating Rust directly into Vue's template compilers, type checkers, and linters, stripping JavaScript bottlenecks entirely out of local development. [link](https://www.youtube.com/watch?v=a9%5FUd5MFTjU)

***

### 🌐 4. Micro-Frontends & Advanced SSR Architecture

As enterprise adoption expands, Vue's future feature roadmap addresses complex infrastructure topologies: [link](https://zignuts.com/blog/why-use-vue-js)

- **Native "Host-Remote" Orchestration:** Improved modular integration via Vite makes it incredibly smooth to implement **Micro-Frontend (MFE)** architectures. Large organizations can split sections of their apps (e.g., checkout vs. dashboard) into completely isolated servers that the browser seamlessly stitches together at runtime without a monolithic build bottleneck.
- **Lazy Hydration:** Building upon Vue 3.5's foundation, downstream integrations with meta-frameworks like Nuxt allow single components to completely delay downloading or running JavaScript until the user explicitly scrolls them into view, achieving exceptional core web vital scores out of the box. [link](https://vueschool.io/articles/news/vue-js-2025-in-review-and-a-peek-into-2026/)

Would you like to see a code example of how to implement **Vapor Mode (`<script setup vapor>`)** alongside traditional components, or explore how **Rolldown and Vite** are speeding up the build ecosystem?

- [link](https://www.reddit.com/r/vuejs/comments/1eyfq5d/future%5Fof%5Fvue/)\
  Reddit\
  Future of vue : r/vuejs - Reddit\
  Aug 22, 2024 — React is "too big to fail" at this point and will still be used and developed in a decade. But, Vue's big innovation(s) over React...
- [link](https://github.com/vuejs/core/releases)\
  GitHub\
  Releases · vuejs/core - GitHub\
  Sep 11, 2026 — No results found. ... Vue 3.6 is now entering the RC phase as we have completed the intended feature set for Vapor Mode. 3.6 also ...
- [link](https://dev.to/parsajiravand/what-is-vue-3-vapor-mode-3k2o)\
  DEV Community\
  What Is Vue 3 Vapor Mode?! - DEV Community\
  Apr 21, 2026 — Let's break it all down. \* First, Why Does the Virtual DOM Exist? Before we can appreciate Vapor Mode, we need to understand the p...

Show all

# why does vue pick anime codenames

## why does vue pick anime codenames

<mark><strong><span>Vue.js uses anime codenames simply because its creator, Evan You, is an avid anime and manga fan</span></strong></mark>. [link](https://medium.com/free-code-camp/between-the-wires-an-interview-with-vue-js-creator-evan-you-e383cbf57cc4)

What started as a fun, personal touch by the creator has turned into a long-standing tradition within the Vue community. [link](https://factory.ai/open-source-wikis/vuejs-core?page=fun-facts.md)

### How the Naming Scheme Works

The codenames follow two specific internal rules:

- **Alphabetical Order:** The release names progress alphabetically based on the major or minor version sequence.
- **Sci-Fi & Shonen Leanings:** While not exclusive, many of the selected titles lean heavily into the science fiction and popular shonen genres. [link](https://blog.khaleelgibran.com/posts/vue-the-anime/)

### Notable Examples Over the Years

You can trace the history of Vue's development through its anime catalog:

- **Vue 1.0:** **Evangelion** (Neon Genesis Evangelion)
- **Vue 2.0:** **Ghost in the Shell**
- **Vue 3.0:** **One Piece**
- **Vue 3.1:** **Pluto**
- **Vue 3.2:** **Quintessential Quintuplets**
- **Vue 3.3:** **Rurouni Kenshin**
- **Vue 3.4:** **Slam Dunk**
- **Vue 3.5:** **Tengen Toppa Gurren Lagann** [link](https://www.articsledge.com/post/vuejs)

Whenever a new version drops, developers usually check the corresponding `CHANGELOG.md` file on the Vue GitHub Repository to see which anime was chosen for that letter. [link](https://blog.khaleelgibran.com/posts/vue-the-anime/)

Are you trying to figure out what the **codename for an upcoming release** will be, or are you curious about **other easter eggs** hidden in front-end frameworks?

- [link](https://factory.ai/open-source-wikis/vuejs-core?page=fun-facts.md)\
  Factory | Agent-Native Software Development\
  Fun facts – Vue.js wiki - Factory.ai\
  Vue 3.0's release name (Sep 18, 2020) was "One Piece," after the manga. Subsequent minor codenames have continued the anime/manga ...
- [link](https://www.articsledge.com/post/vuejs)\
  Articsledge\
  What is Vue.js? Complete 2026 Guide for Developers\
  Aug 16, 2026 — October 2015: Vue 1.0 "Evangelion" released, establishing stable template syntax. October 2016: Vue 2.0 "Ghost in the Shell" relea...
- [link](https://blog.khaleelgibran.com/posts/vue-the-anime/)\
  blog.khaleelgibran.com\
  Vue - The Anime - thedonutblog\
  Dec 6, 2021 — 06 Dec 2021 codevue This should take you about 1 min to read. I didn't know this, but apparently, each minor Vue release on GitHub...

Show all

## are they really anime and mange fan

<mark><strong><span><span>Yes,<span> </span></span><span><span><span><span>Evan You</span></span></span></span><span> </span>is genuinely a massive fan of anime and manga</span></strong></mark>. It isn't just a marketing gimmick or a random name generator choice; his deep-cut selections over the past decade prove his passion for the medium. [link](https://www.reddit.com/r/javascript/comments/6myygh/vuejs%5Fversion%5Fnaming/)

A few details highlight just how authentic this fandom is:

- **Obscure Pre-Release Names:** Long before Vue became famous, Evan was using these references. For instance, **Vue 0.9** (released back in 2014) was codenamed **Animatrix**, a direct nod to the standalone 2003 anime anthology based on _The Matrix_ trilogy. [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)
- **Beyond Mainstream Shonen:** While Vue 3.0 used massive hits like _One Piece_, many other versions use much more niche, sci-fi, or critically acclaimed titles. Codenaming version 3.1 after Naoki Urasawa's **Pluto**—a dark, philosophical reinterpretation of _Astro Boy_—is a prime example of a true manga enthusiast's choice. [link](https://flatlogic.com/blog/what-is-vue-guide/)
- **A Shared Core Team Vibe:** This culture trickles down into the rest of the Vue ecosystem. Other core Vue team members are equally open about their love for anime, gaming, and manga culture, sometimes integrating references (like building Pokédex sample apps) when teaching the framework.

Would you like to know what **other frameworks use easter eggs** like this, or do you want to guess **what the "U" codename will be** for the next major Vue release?

- [link](https://www.reddit.com/r/javascript/comments/6myygh/vuejs%5Fversion%5Fnaming/)\
  Reddit·r/javascript\
  Vue.js version naming.. : r/javascript - Reddit\
  Jul 13, 2017 — js version naming.. Hi.. As you can know, besides the version number, Vue. js versions have also names (I discovered that in Evan'
- [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)\
  The Software House\
  New Vue js features – Vue 3+ overview - The Software House\
  Dec 23, 2020 — As you might have already noticed, Vue uses popular Japanese manga and anime titles to name the subsequent releases of its framewo...
- [link](https://www.reddit.com/r/ProgrammerAnimemes/comments/cnmdlt/til%5Fthat%5Fmost%5Fof%5Fthe%5Fvuejs%5Frelease%5Fnames%5Fare/)\
  Reddit\
  TIL that most of the Vue.js release names are anime references\
  Aug 8, 2019 — These are people of culture. I'm in France and I got one of the creators of Vue (Guillaume Chau, who appears on their official web...

Show all

## do they publicly talk about anime

**Evan You and the core Vue team don't hide their love for anime, though it rarely takes over their main public tech talks.** Instead, they talk about it naturally where it fits—mostly on social media, in the framework's documentation, and during lighthearted community events.

### Where They Talk About It

- **X (formerly Twitter):** Evan You's personal account [@evanyou](https://x.com/evanyou) occasionally features casual anime and gaming interactions. He doesn't tweet about it constantly, but he treats it as a normal hobby.
- **The Official Vue Changelog:** The absolute loudest public declaration is the code repository itself. Whenever a new version drops, the anime codename is explicitly written right at the top of the release notes in the official [Vue GitHub Core Repository](https://github.com/vuejs/core).
- **Conference Presentations:** While keynote speeches at events like _VueConf_ focus heavily on performance, composition APIs, and the future of the framework, speakers and core team members frequently use anime characters, Pokémon, or gaming references in their visual slide decks and live-coding demos.

### Why the Low Key Approach?

Evan treats the anime codenames exactly for what they are: **a fun easter egg for developers**.

Keeping it to the changelogs and casual social media interactions keeps the focus on the technology while still letting the team's personality shine through. It creates a fun, inside-joke atmosphere for the community without distracting from Vue's status as a professional enterprise tool.

Would you like to know **which specific anime inspired the newest Vue versions**, or are you curious about **other coding tools with secret pop-culture names**?

## do they watch recent animes

<mark><strong><span>Yes, they absolutely keep up with modern anime and manga.</span></strong></mark> While the earliest Vue releases leaned heavily on older 90s and 2000s classics like _Neon Genesis Evangelion_ and _Ghost in the Shell_, the team's selections over the last few years prove they are actively watching and reading recent releases.

Several clues highlight their current taste:

- **Vue 3.2: Quintessential Quintuplets (2019–2021):** Codenaming a core release after a modern romantic-comedy/harem anime was a massive departure from their traditional dark sci-fi or massive shonen picks. It showed the community they were plugged into contemporary seasonal anime trends. [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)
- **Vue 3.5: Tengen Toppa Gurren Lagann (and beyond):** The team routinely skips historical titles in favor of things that fit their alphabetical milestone goals. With **Vue 3.6** moving through its release candidate phases, the community eagerly watches the [Vue Core GitHub Repository](https://github.com/vuejs/core/releases) to see which modern or classic title will claim the next letter. [link](https://github.com/vuejs/core/releases)
- **Gaming and Pop Culture Trends:** Evan You and the ecosystem developers frequently chat about modern gaming hits (like _Genshin Impact_ or recent _Final Fantasy_ titles) on social media, demonstrating that their media consumption is very much anchored in modern, active subcultures rather than just nostalgia.

Would you like to know **what the community predicts** for the upcoming **"U" and "V" versions**, or are you curious about how to find **other frameworks that hide pop-culture nods** in their source code?

- [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)\
  The Software House\
  New Vue js features – Vue 3+ overview - The Software House\
  Dec 23, 2020 — As you might have already noticed, Vue uses popular Japanese manga and anime titles to name the subsequent releases of its framewo...
- [link](https://github.com/vuejs/core/releases)\
  GitHub\
  Releases · vuejs/core - GitHub\
  Sep 11, 2026 — No results found. View all tags. @github-actions github-actions released this Jul 17. v3.6.0-rc.1 · 6fa3447. Vue 3.6 is now enteri...
- [link](https://www.reddit.com/r/vuejs/comments/1v0s5bt/vue%5F36%5Fjust%5Fentered%5Frc%5Fstage/)\
  Reddit\
  Vue 3.6 just entered RC stage : r/vuejs - Reddit\
  Jul 19, 2026 — github.com 🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. - Release v3.6.0-r...

## why these titles specifically

While Evan You hasn't published a formal rubric for why he chooses one specific series over another, looking at the history of Vue's releases reveals a clear pattern. These titles are chosen based on **alphabetical milestones, thematic symbolism, and personal significance**.

The thought process behind his choices generally follows three main criteria:

### 1. The Strict Alphabetical Restriction

The most absolute constraint is the alphabet. Every major or minor version bump must move to the next letter. This forces Evan to choose from a limited pool of titles.

- When naming **Vue 3.0**, he needed an "O" title, making the massively popular manga **_One Piece_** a perfect fit.
- When **Vue 3.5** came around, he needed a "T" title, leading him to choose the high-energy mech classic **_Tengen Toppa Gurren Lagann_**. [link](https://blog.vuejs.org/posts/vue-3-5)

### 2. Thematic Parallels to the Tech

Occasionally, the team picks an anime because its overarching themes match the massive architectural changes happening in that specific version of Vue:

- **Vue 1.0 "Evangelion":** _Neon Genesis Evangelion_ is about building a foundation to change the world. Vue 1.0 was the monumental release that stabilized the framework's template syntax and truly put Vue on the map for global enterprise adoption. [link](https://www.articsledge.com/post/vuejs)
- **Vue 2.0 "Ghost in the Shell":** _Ghost in the Shell_ heavily features cyborgs, virtual realities, and artificial shells. Fittingly, Vue 2.0 was the specific release that introduced a brand new **Virtual DOM implementation** (putting a new "shell" over the actual browser DOM). [link](https://www.articsledge.com/post/vuejs)
- **Vue 3.5 "Tengen Toppa Gurren Lagann":** _Gurren Lagann_ is famous for characters breaking past previous limitations and constantly optimizing their power. Vue 3.5 was a performance-focused release that brought massive, groundbreaking optimizations to Vue's memory footprint and reactivity system. [link](https://daily.dev/posts/announcing-vue-3-5-wdhsvzve1)

### 3. Personal Favorites and Subculture "Deep Cuts"

Instead of just picking the most mainstream, globally recognized anime every single time, Evan uses the codenames to highlight series he genuinely loves or respects as a fan. [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)

For instance, picking Naoki Urasawa's **_Pluto_** for Vue 3.1 is widely seen by the community as a tribute to master-tier manga storytelling rather than a generic pop-culture reference. It keeps the convention feeling like a genuine window into the creator's personality rather than a corporate marketing gimmick. [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)

Would you like to look up **what letter the current Vue 3.6 release candidate is on** to see what anime might be next, or are you curious about **how other frameworks choose their codenames**?

- [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)\
  The Software House\
  New Vue js features – Vue 3+ overview - The Software House\
  Dec 23, 2020 — As you might have already noticed, Vue uses popular Japanese manga and anime titles to name the subsequent releases of its framewo...
- [link](https://www.articsledge.com/post/vuejs)\
  Articsledge\
  What is Vue.js? Complete 2026 Guide for Developers\
  Aug 16, 2026 — ... Public release as Vue.js 0.6.0. October 2015: Vue 1.0 "Evangelion" released, establishing stable template syntax. October 2016...
- [link](https://blog.vuejs.org/posts/vue-3-5)\
  The Vue Point\
  Announcing Vue 3.5\
  Sep 1, 2024 — Announcing Vue 3.5. Authors. author image. Name: Evan You; Twitter: @youyuxi. Today we are excited to announce the release of Vue ...

Show all

## who chose these titles

**The anime titles are chosen entirely by Evan You**, the original creator and project lead of Vue.js. [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)

Because Vue began as his personal project before growing into a massive global ecosystem, he had full creative control over the framework’s culture. Deciding to name the versions after anime was simply his way of injecting his personal hobbies into the source code. [link](https://intobi.com/blog/vue-js-vs-react-2026/)

Even though Vue now has a broad core team and an active global community of contributors, **Evan You remains the final authority on selecting the specific anime title** for each new release milestone. When the time comes to launch a version, he writes the chosen title directly into the release notes on the [Vue Core GitHub Repository](https://github.com/vuejs/core/releases).

Would you like to know **what the community predicts** for the upcoming letters, or are you interested in **how other open-source creators handle naming conventions** for their tools?

- [link](https://tsh.io/blog/new-vue-js-features-vue-3-overview)\
  The Software House\
  New Vue js features – Vue 3+ overview - The Software House\
  Dec 23, 2020 — As you might have already noticed, Vue uses popular Japanese manga and anime titles to name the subsequent releases of its framewo...
- [link](https://intobi.com/blog/vue-js-vs-react-2026/)\
  Intobi\
  Vue JS vs React: Which Framework to Choose in 2026? - Intobi\
  Dec 17, 2025 — The name “Vue. js” originates from the French word “vue,” which means “view,” and it's pronounced the same way as “view.” Creator ...
- [link](https://github.com/vuejs/core/releases)\
  GitHub\
  Releases · vuejs/core - GitHub\
  Sep 11, 2026 — No results found. View all tags. @github-actions github-actions released this Jul 17. v3.6.0-rc.1 · 6fa3447. Vue 3.6 is now enteri...

