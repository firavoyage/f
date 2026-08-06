## what are the statuses of how supported a web api is

Depending on whether you mean browser compatibility, standardization progress, or technical status properties, web APIs are categorized by several different types of statuses.

The industry standards for tracking Web API support break down into three main systems: **MDN Baseline statuses**, **MDN feature lifecycle statuses**, and **W3C/WHATWG standardization stages**.

---

### 1. MDN Baseline Statuses (Cross-Browser Compatibility)

The WebDX community group (composed of Google, Mozilla, Apple, and Microsoft) uses [MDN Baseline](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) to provide a unified, simplified "traffic light" look at browser interoperability. It tracks support across the core engines (Chrome, Edge, Firefox, and Safari): [link](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)

- **Limited Availability**: The API is newly introduced or highly experimental. It is not yet supported across all major browser engines, meaning developers must use progressive enhancement fallbacks. [link](https://www.esveo.com/en/blog/using-baseline-a-glance-at-cross-browser-feature-support/)
- **Baseline Newly Available**: The API has officially reached interoperability and is supported in the current versions of all major browser engines. [link](https://web.dev/baseline)
- **Baseline Widely Available**: The API is highly stable and safe to use. It has been supported by all major browsers for **at least 30 months**, meaning most users in the wild have updated to a version that supports it. [link](https://web.dev/baseline)

---

### 2. MDN Feature Statuses (Technical Implementation)

When looking at [MDN Browser Compatibility Data (BCD)](https://github.com/mdn/browser-compat-data) for a specific API interface, method, or property, it is tagged with technical statuses: [link](https://developer.mozilla.org/en-US/docs/MDN/Writing%5Fguidelines/Page%5Fstructures/Feature%5Fstatus)

- **Stable and Standard**: The API is fully part of an official web standard and is intended for long-term production use. [link](https://developer.mozilla.org/en-US/docs/MDN/Writing%5Fguidelines/Page%5Fstructures/Feature%5Fstatus)
- **Experimental**: The API is actively being developed or tested. It may be hidden behind browser flags, its syntax could change unexpectedly, and it shouldn't be relied upon for critical production apps. [link](https://developer.mozilla.org/en-US/docs/MDN/Writing%5Fguidelines/Page%5Fstructures/Feature%5Fstatus)
- **Non-Standard**: The API is unique to a specific browser vendor (e.g., a Webkit-only or Chrome-only feature) and is not on a standard track. [link](https://developer.mozilla.org/en-US/docs/MDN/Writing%5Fguidelines/Page%5Fstructures/Feature%5Fstatus)
- **Deprecated**: The API is outdated and no longer recommended. While it might still work for backward compatibility, it is actively being removed from modern browser engines and will eventually stop functioning. [link](https://developer.mozilla.org/en-US/docs/MDN/Writing%5Fguidelines/Page%5Fstructures/Feature%5Fstatus)

---

### 3. W3C & WHATWG Standards Tracking Statuses

Before a Web API even reaches a browser, its specification goes through legal and technical stages tracked on dashboards like the [W3C Spec Dashboard](https://w3c.github.io/spec-dashboard/report.html):

- **Draft / Editor’s Draft (ED)**: The initial conceptual stage. The API's design is highly volatile and open to fundamental rewrites.
- **Working Draft (WD)**: The specification is published for review by the community and tech companies to identify flaws.
- **Candidate Recommendation (CR)**: The API is considered stable, and the working group calls on browser vendors to start implementing it to prove it works in practice.
- **Proposed Recommendation (PR)**: The implementation is proven successful across multiple browsers, and it undergoes a final advisory vote.
- **W3C Recommendation (REC)**: The highest status. The API is an official, finalized web standard. [link](https://w3c.github.io/spec-dashboard/report.html)

---

I can help you look up the status of a specific API. Which one are you planning to use? Let me know:

- The **name of the Web API** (e.g., WebGPU, File System Access API, `isSecureContext`)

- Whether you need to know **browser version numbers** or **fallback strategies**

- [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)\
  HTTP response status codes - MDN Web Docs - Mozilla\
  Jan 5, 2026 — HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five...\
  MDN Web Docs

- [link](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)\
  Baseline (compatibility) - Glossary - MDN Web Docs\
  Jul 11, 2025 — Baseline identifies the availability of web platform features across popular browsers, including APIs, CSS properties, and JavaScr...\
  MDN Web Docs

- [link](https://web.dev/baseline)\
  Baseline - web.dev\
  How do things become Baseline? Baseline has two stages: Newly available: The feature is supported by all of the core browsers, and...\
  web.dev

Show all

##

## all mdn baseline statuses

The **MDN Baseline** initiative categorizes web platform features into <mark><strong>three distinct compatibility statuses</strong></mark>. These statuses indicate a feature's availability across the core browser engines: Apple Safari, Google Chrome, Microsoft Edge, and Mozilla Firefox. [link](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)

### 1. Baseline Widely Available

- **Definition**: A feature has been fully supported by all core browsers for **30 months or longer**.
- **Developer Impact**: This acts as a green light for production use. You can reliably implement the feature on most public websites without worrying about browser compatibility workarounds, vendor prefixes, or polyfills. [link](https://web.dev/baseline)

### 2. Baseline Newly Available

- **Definition**: A feature has recently achieved full support across the **latest stable releases** of all core browsers. It is fully interoperable but has been so for less than 30 months. [link](https://web.dev/baseline)
- **Developer Impact**: The feature is safe to use, but you may need to consider fallback strategies or polyfills for users running older or slower-updating browser versions. It is often an excellent candidate for progressive enhancement. [link](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)

### 3. Limited Availability

- **Definition**: The feature is **not yet supported** across all of the core browsers. It may be exclusive to one browser engine, or still behind an experimental flag. [link](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)
- **Developer Impact**: Use with caution. These features generally require polyfills or rigorous fallback implementations, as a significant portion of your user base will not be able to experience or execute the code. [link](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)

To help you apply this practically, would you like to check the **current Baseline status** or look up **fallback strategies** for a specific CSS property, JavaScript API, or HTML element?

- [link](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility)\
  Baseline (compatibility) - Glossary - MDN Web Docs\
  Jul 11, 2025 — Baseline identifies the availability of web platform features across popular browsers, including APIs, CSS properties, and JavaScr...\
  MDN Web Docs
- [link](https://web.dev/baseline)\
  Baseline - web.dev\
  Baseline has two stages: Newly available: The feature is supported by all of the core browsers, and is therefore interoperable. Wi...\
  web.dev
- [link](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/)\
  Under the hood of MDN's new frontend\
  Apr 8, 2026 — Luckily enough, we've spent the last few years working on the Baseline project with a cross-vendor range of partners in the WebDX ...\
  MDN Web Docs

Show all

## why defined this way

The MDN Baseline statuses were defined this way by the **WebDX Community Group** (which includes W3C, Google, Apple, Mozilla, and Microsoft) to solve a major problem: **browser compatibility tables are too complex for daily decision-making.**

Instead of forcing developers to check a grid of version numbers for every feature, Baseline provides a simple, shared vocabulary based on the realities of shipping real-world websites.

Here is the exact reasoning behind why each status is defined the way it is:

### 1. The Core Browsers Rule (Why these specific engines?)

- **The Rule**: A feature must work in Safari (WebKit), Chrome/Edge (Blink), and Firefox (Gecko).
- **The Reason**: These three engines power virtually the entire modern web. Grouping Google Chrome and Microsoft Edge together makes sense because they both use the underlying Blink rendering engine. If a feature works across all of these, it effectively works for the vast majority of global internet users.

### 2. The 30-Month Threshold (Why exactly 30 months?)

- **The Rule**: A feature transitions from "Newly Available" to "Widely Available" exactly 30 months after it hits all core browsers.
- **The Reason**: This time frame balances two conflicting realities:
  - **Enterprise and Mobile Delays**: Many corporate users and older smartphones do not update their browsers immediately. Some systems stay on older software versions for two to three years.
  - **Data-Driven Confidence**: Analytics show that after roughly 2.5 years (30 months), the global user adoption of the browser versions supporting that feature climbs well past 95%. This gives developers mathematical confidence that they can drop polyfills without breaking the site for a significant chunk of users.

### 3. "Newly Available" vs. "Limited" (Why separate them?)

- **The Rule**: "Limited" means it is missing in at least one engine. "Newly Available" means it is in all of them, but the clock is ticking.
- **The Reason**: This creates a clear signal for **Progressive Enhancement**.
  - If a feature is **Limited**, it might be a dead-end or a proprietary experiment, so you should design your site around its absence.
  - If a feature is **Newly Available**, you know it is the future standard. You can confidently build with it today, knowing that any compatibility issues will naturally disappear over time as users update their devices.

If you are working on a project right now, I can help you evaluate a specific feature. Would you like to check if a particular tool fits your **target audience** or see how to find these **badges directly on MDN**?
