# history of js engines

The history of JavaScript (JS) engines is a journey that transformed a small scripting tool into a highly optimized, universally deployed compilation ecosystem. [link](https://en.wikipedia.org/wiki/List%5Fof%5FJavaScript%5Fengines)

***

### 1. The Dawn of Browsing: Pure Interpretation (1995–2008)

In the early days of the web, JavaScript engines were simple, line-by-line interpreters. They were designed to execute basic tasks like form validation and button animations. [link](https://developer.mozilla.org/en-US/docs/Glossary/Engine/JavaScript)

- **Mocha (1995):** Written by **Brendan Eich** in just 10 days for Netscape Navigator 2.0. It was the very first proof-of-concept JS engine. [link](https://pvs-studio.com/en/blog/posts/js/1392/)
- **SpiderMonkey (1996):** Eich rewrote Mocha's core to pay off technical debt, creating SpiderMonkey. It remains the core engine for Mozilla Firefox today. [link](https://medium.com/@acparas/browsers-rendering-engines-js-engines-bea42b77a182)
- **JScript (1996):** Microsoft reverse-engineered Netscape's work to create its own engine for Internet Explorer 3.0. This architectural fragmentation heavily prompted the push toward ECMAScript standardization. [link](https://www.youtube.com/watch?v=4MsfBokJiSs)

***

### 2. The V8 Watershed & The JIT Revolution (2008–2009)

By the mid-2000s, complex applications like Gmail (driven by AJAX) pushed traditional interpreters to their limits. The web needed raw speed. [link](https://dev.to/pvsdev/history-of-javascript-browser-wars-ecmascript-nodejs-typescript-and-react-3fbi)

- **Google V8 (2008):** Launched with the first version of Google Chrome. Instead of just interpreting code line-by-line, V8 introduced **Just-In-Time (JIT) compilation**, compiling JavaScript directly into native machine code before execution. It improved execution speeds by roughly 10x. [link](https://dri.es/a-history-of-javascript-across-the-stack)
- **The Performance Arms Race:** In response to V8, other vendors rushed to add JIT capabilities. Mozilla introduced **TraceMonkey**, and Apple overhauled its engine into **JavaScriptCore** (Nitro). [link](https://brendaneich.com/2011/06/new-javascript-engine-module-owner/)

***

### 3. Escaping the Browser: Node.js (2009)

Because V8 made JavaScript exceptionally fast, developers realized the language no longer needed to be trapped inside a browser window. [link](https://zeeshanai.com/blogs/history-of-javascript/)

- **Node.js (2009):** Ryan Dahl isolated Google's open-source V8 engine, packaged it with an event loop, and brought JavaScript to the server-side. This shift single-handedly birthed the modern **"full-stack JavaScript" era**. [link](https://dev.to/ahmed%5Fniazy/history-of-javascript-4b43)

***

### 4. Modern Multi-Tiered Architectures (2015–Present)

Modern engines do not just compile code once; they use complex, multi-tiered architectures to balance fast startup times with peak execution speeds. [link](https://en.wikipedia.org/wiki/List%5Fof%5FJavaScript%5Fengines)

| Engine Name        | Primary Host / Runtime                 | Key Structural Details                                                                                                                          |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **V8**             | Google Chrome, Chromium, Node.js, Deno | Uses an interpreter (_Ignition_) for fast startup, paired with a powerful optimizing JIT compiler (_Turbofan_).                                 |
| **JavaScriptCore** | Apple Safari, Bun                      | Features a highly sophisticated 4-tier execution pipeline (ranging from a low-level interpreter to the FTL JIT compiler).                       |
| **SpiderMonkey**   | Mozilla Firefox                        | Features multiple optimization tiers (_Baseline_ and _IonMonkey_) and serves as a major testbed for sandboxed **WebAssembly (Wasm)** execution. |

Today's engines are no longer built exclusively for laptops and desktops. Lightweight engines like Hermes (optimized for React Native on mobile) and **QuickJS** (for embedded devices) ensure JavaScript runs efficiently everywhere—from smartphones to smart TVs and IoT appliances. [link](https://en.wikipedia.org/wiki/List%5Fof%5FJavaScript%5Fengines)

Would you like to dive deeper into a specific era, or explore the **inner mechanics of how JIT compilation works** inside a modern engine like V8?

- [link](https://en.wikipedia.org/wiki/List%5Fof%5FJavaScript%5Fengines)\
  Wikipedia\
  List of JavaScript engines - Wikipedia\
  JavaScript engines execute ECMAScript and WebAssembly using interpreters and just-in-time (JIT) compilation, evolving from basic i...
- [link](https://www.youtube.com/watch?v=4MsfBokJiSs)\
  YouTube·Telusko\
  History of JavaScript\
  May 15, 2021 — This fragmentation led to the need for standardization. Netscape approached ECMA (European Computer Manufacturers Association) to ...\
  19:21
- [link](https://pvs-studio.com/en/blog/posts/js/1392/)\
  PVS-Studio\
  History of JavaScript: Browser wars, ECMAScript, Node.js ...\
  The ECMAScript 2 specification was released in September 1998. Although it didn't introduce any new features, it laid the groundwo...

Show all

# why does bun choose jscore

The choice to build **Bun** on Apple's **JavaScriptCore (JSC)** engine instead of Google's **V8** (which powers Node.js and Deno) comes down to three main technical advantages: <mark><strong>startup speed, low-level embedding ergonomics, and unified codebase maintenance</strong></mark>. [link](https://x.com/jarredsumner/status/1803612846296801487)

While V8 is a massively optimized powerhouse for long-running browser sessions, Bun’s creator Jarred Sumner prioritized JSC for the following reasons: [link](https://thecodinggopher.substack.com/p/why-bun-is-replacing-your-entire)

### 1. Blazing Fast Startup Times (Cold Starts)

- **The V8 Trade-off:** Google's V8 engine heavily analyzes and compiles code so that it runs incredibly fast _eventually_. This is fantastic for a browser tab or a massive monolithic server, but less ideal for short-lived tasks. [link](https://thecodinggopher.substack.com/p/why-bun-is-replacing-your-entire)
- **The JSC Advantage:** JavaScriptCore prioritizes **instant execution and memory efficiency**. This allows Bun to boot up **3x to 4x faster than Node.js**. In a world dominated by serverless functions and edge computing—where minimizing "cold starts" is crucial—faster initialization is a massive architectural win. [link](https://thecodinggopher.substack.com/p/why-bun-is-replacing-your-entire)

### 2. A Cleaner, "Cheaper" C++ Embedding API

- Because Bun is written in a low-level language (**Zig**), it needs to frequently pass data back and forth between native code and the JavaScript engine. [link](https://www.reddit.com/r/Zig/comments/16ho53m/why%5Fdid%5Fthe%5Fbunjs%5Fteam%5Fuse%5Fzig%5Fto%5Fcreate%5Fbun/)
- JSC uses a **non-moving, conservative garbage collector** that scans the machine stack. This design choice means embedding native functions into JSC is simpler and requires significantly less overhead than the highly complex, shifting memory model used by V8. This translates directly to faster I/O and native-to-JS bridge performance. [link](https://medium.com/@kishorjena/why-bun-is-faster-then-nodejs-41c3658fe905)

### 3. The WebKit Monorepo Structure

- According to Jarred Sumner, betting on JSC allowed the team to take advantage of the [WebKit monorepo](https://x.com/jarredsumner/status/1803612846296801487).
- In contrast to V8 and Chromium’s split, highly fragmented codebase, JSC’s single shared architecture makes it much simpler for external engineers to understand, hook into, and optimize the engine exactly for how they intend to use it. [link](https://x.com/jarredsumner/status/1803612846296801487)

### 4. Native Efficiency with JSON and Strings

- In everyday backend routines, parsing JSON strings is a constant bottleneck. Historically, JavaScriptCore has exhibited incredibly optimized performance for **JSON parsing and string operations**, which aligns perfectly with Bun’s goal of being a faster, leaner backend toolchain. [link](https://www.reddit.com/r/bun/comments/1objmnu/bun%5Fis%5Fadding%5Fso%5Fso%5Fmany%5Fperformance%5Fimprovements/)

***

### Summary of Differences

| Feature                | JavaScriptCore (Bun)                           | V8 Engine (Node.js / Deno)                                |
| ---------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| **Primary Focus**      | Fast startup, low memory footprint             | Heavy JIT optimization for peak execution speed           |
| **Best Suited For**    | Serverless, Edge computing, CLI tools, scripts | Long-running backend servers, heavy CPU-bound computation |
| **Garbage Collection** | Conservative (Stack-based, non-moving)         | Generational (Moving/Compacting GC)                       |

Are you exploring this to see if Bun is **the right runtime for your specific application**, or are you just curious about the **underlying architecture**? If you're building a project, let me know what kind of application it is so we can weigh the performance trade-offs.

- [link](https://x.com/jarredsumner/status/1803612846296801487)\
  X\
  Jarred Sumner on X: "One of the reasons we bet on JavaScriptCore instead of V8 for Bun was the WebKit monorepo, versus V8 & Chromium’s split codebase A single shared codebase between browser and JavaScript engine makes it simpler for engineers to optimize the engine for how it’s used" / X\
  WebKit's single monorepo codebase simplifies engine optimization compared to V8 and Chromium's split codebase. Embedding: JSC feat...
- [link](https://www.reddit.com/r/Zig/comments/16ho53m/why%5Fdid%5Fthe%5Fbunjs%5Fteam%5Fuse%5Fzig%5Fto%5Fcreate%5Fbun/)\
  Reddit\
  Why did the Bun.js team use zig to create Bun? - Reddit\
  In Bun's case the big part of the codebase would be integration with JavaScriptCore and other C/C++ libraries. Zig offers provided...
- [link](https://www.reddit.com/r/bun/comments/1objmnu/bun%5Fis%5Fadding%5Fso%5Fso%5Fmany%5Fperformance%5Fimprovements/)\
  Reddit\
  Bun is adding so so many performance improvements at native level ...\
  Oct 20, 2025 — V8 JS engine was quite a bit faster in the backend via node, especially for long running server tasks. JSC excels at startup times...

Show all

## why not spidermonkey

While Mozilla’s **SpiderMonkey** (the engine powering Firefox) is a phenomenal, highly advanced JavaScript engine, <mark>it was ultimately passed over for Bun due to<span> </span><strong>embedding isolation, performance gaps, and codebase coupling</strong></mark>.

When building a brand-new backend runtime, SpiderMonkey presented several major roadblocks that made [JavaScriptCore (JSC)](https://news.ycombinator.com/item?id=46486993) a much safer and faster bet:

### 1. The Complex "Coupling" and Embedding Nightmare

Historically, SpiderMonkey has been deeply entwined with Mozilla’s browser architecture (`mozilla-central`).

- **The Problem:** Extracting SpiderMonkey to use as a clean, standalone, embeddable library has historically been a massive headache compared to its peers.
- **The Contrast:** Apple designed JSC from the ground up to be an isolated framework that can easily be dropped into other applications. Similarly, Google built V8 with a clean C++ embedding API. Embedding SpiderMonkey requires fighting upstream build systems that are fundamentally tailored for building a web browser, not a lightweight command-line engine.

### 2. Pure Performance Disparities

In modern JavaScript execution benchmarks, SpiderMonkey generally lags behind both V8 and JavaScriptCore. [link](https://news.ycombinator.com/item?id=46486993)

- **Raw Execution Speed:** On major benchmarking suites (like Apple's JetStream 2), JSC and V8 routinely outperform SpiderMonkey by significant margins. [link](https://news.ycombinator.com/item?id=46486993)
- **The "Tracing" Overhead:** SpiderMonkey's complex Just-In-Time (JIT) compilation pipelines have historically focused on optimizing specific long-running execution loops inside browser tabs rather than the instant, linear throughput required by backend scripts, API endpoints, and serverless execution. [link](https://thecodinggopher.substack.com/p/why-bun-is-replacing-your-entire)

### 3. Team Size and Customization

One of Bun's greatest advantages is the ability to fork, tweak, and patch the engine directly when an optimization is needed. [link](https://www.reddit.com/r/bun/comments/1objmnu/bun%5Fis%5Fadding%5Fso%5Fso%5Fmany%5Fperformance%5Fimprovements/)

- According to Bun’s creator Jarred Sumner, betting on JSC was highly strategic because **JSC is a much smaller, nimbler codebase managed by a tight team** (roughly ~8 core engineers compared to dozens upon dozens for V8).
- For a lean runtime like Bun, tracking, patching, and keeping up with the fast-moving monolith of Firefox's engine would demand significantly more engineering overhead than adapting JSC. [link](https://www.reddit.com/r/bun/comments/1objmnu/bun%5Fis%5Fadding%5Fso%5Fso%5Fmany%5Fperformance%5Fimprovements/)

### 4. Memory Footprint and Startup

Just like V8, SpiderMonkey prioritizes long-lived browser execution profiles. This results in heavier memory usage during initialization. Because Bun's core identity revolves around **blazing-fast CLI tooling, quick test runners, and instant serverless cold-starts**, JSC’s lazy initialization of global objects gives it a lightweight advantage that SpiderMonkey simply wasn't built to prioritize. [link](https://x.com/jarredsumner/status/1499294857201795077)

Are you asking out of curiosity about **engine architecture**, or are you currently trying to pick a **standalone JavaScript engine** for your own systems-level embedding project?

- [link](https://www.reddit.com/r/bun/comments/1objmnu/bun%5Fis%5Fadding%5Fso%5Fso%5Fmany%5Fperformance%5Fimprovements/)\
  Reddit\
  Bun is adding so so many performance improvements ... - Reddit\
  JSC is a much smaller team & codebase compared to V8 (something like 8 engineers versus like 80 I heard). We make changes to JSC w...
- [link](https://news.ycombinator.com/item?id=46486993)\
  Hacker News\
  This is super cool, I didn't know JavaScriptCore consistently outperformed V8 An... | Hacker News\
  V8 (Chromium/Edge) and JavaScriptCore (JSC/Safari) outperform SpiderMonkey (Firefox) on benchmarks like JetStream2; V8 exhibits ~2...
- [link](https://thecodinggopher.substack.com/p/why-bun-is-replacing-your-entire)\
  The Coding Gopher | Substack·The Coding Gopher\
  Why Bun is Replacing Your Entire Toolchain\
  May 26, 2026 — V8 is highly optimized for long-running processes. It takes its time to heavily analyze and compile code so that it runs incredibl...

Show all

