<!-- it says, "para theme", yet stored in humility and served for it. but i like it. -->

<!-- all abstractions are opinionated. and, llms do not natively know all apis of baseui/radix wo reading relevant docs. it knows react well, but react has many paradigms, even if you limit to fp. while it masters web dev. -->

<!-- google ai mode does not highlight jsx. -->

<!-- baseui is good, but llms dont understand it. docs are even more opinionated. there are examples, but you dont know all apis. and if you have to read the code, it's completely broken. -->

<!-- react might be wise. i guess the tradeoff would work out. but vanilla works exceptionally well for some of my apps. -->

<!-- 

whether i use react or not, when they ctrl b or ctrl p, i could either

change the state. the sidebar is on. render. (it will either rerender everything and diff, or see it's already there, and update what's needed.)

or

update directly. open the sidebar, or close it.

 -->

# how is it to use web components wo lit

Using web components without Lit—often called **Vanilla Web Components**—means you rely purely on the browser's native APIs (`CustomElements`, `ShadowDOM`, and ). \[[1](https://utilitybend.com/blog/getting-into-web-components-an-intro/), [2](https://developer.mozilla.org/en-US/docs/Web/API/Web%5Fcomponents), [3](https://www.reddit.com/r/javascript/comments/nhvekt/web%5Fcomponents%5F101%5Fwhy%5Fuse%5Fweb%5Fcomponents/), [4](https://codecamp.ro/masterclasses/pure-javascript-web-components/), [5](https://www.peoplewoo.com/blogs/post/lwc-introduction-lightning-web-components-in-salesforce-peoplewoo-skills)]

**It is incredibly lightweight but requires a massive amount of manual boilerplate code.** You gain zero dependencies, zero build steps, and perfect future-proofing, but you lose automatic data reactivity, clean templating, and easy property tracking. \[[1](https://www.youtube.com/watch?v=5%5FBQsRNNx-Q), [2](https://www.gitkraken.com/blog/web-components-are-lit-with-lit), [3](https://fearlessbmore.medium.com/creating-native-web-components-with-lit-dev-af359ab1e437), [4](https://codelabs.developers.google.com/codelabs/the-lit-path?gl=us), [5](https://www.reddit.com/r/javascript/comments/1kdjcz1/askjs%5Fwhat%5Fare%5Fthe%5Fpros%5Fand%5Fcons%5Fof%5Fusing%5Fweb/)]

Using them natively changes your development workflow in several key ways:

### 1. You lose automatic reactivity (No "useState" or "Properties") \[[1](https://vaadin.com/docs/latest/hilla/lit/guides/forms/web-component-field-strategy), [2](https://www.reddit.com/r/javascript/comments/1kdjcz1/askjs%5Fwhat%5Fare%5Fthe%5Fpros%5Fand%5Fcons%5Fof%5Fusing%5Fweb/)]

In Lit, changing a property automatically re-renders the UI. In vanilla web components, you must manually observe attributes and update the DOM yourself. You have to use the native `attributeChangedCallback` and manually string-parse the data. \[[1](https://marmelab.com/blog/2024/04/18/web-component-with-lit.html), [2](https://www.youtube.com/watch?v=5%5FBQsRNNx-Q), [3](https://fearlessbmore.medium.com/creating-native-web-components-with-lit-dev-af359ab1e437), [4](https://developer.mozilla.org/en-US/docs/Web/API/Web%5Fcomponents), [5](https://medium.com/@andychadha2/the-abcs-of-react-part-one-fcf17c4b2118)]

javascript

```
// Vanilla JS manual synchronization
class MyButton extends HTMLElement {
  static get observedAttributes() { return ['label']; }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'label') {
      this.shadowRoot.querySelector('button').textContent = newVal;
    }
  }
}
```

Use code with caution.

### 2. InnerHTML rewriting destroys performance \[[1](https://gomakethings.com/mostly-vanilla-js-state-based-ui/)]

Without a library like Lit-html to perform ultra-fast, target-specific DOM diffing, your templating choices are primitive. If you use `this.shadowRoot.innerHTML = ...` inside a custom setter to re-render, the browser destroys and recreates the entire internal DOM tree on every tiny change. This wipes out input focus, breaks active CSS transitions, and tanks performance. \[[1](https://javascript.plainenglish.io/a-practical-guide-to-implementing-lit-with-vite-in-angular-and-react-projects-33d929e0f4e0), [2](https://bennypowers.dev/posts/lets-build-web-components/part-8-mythbusters/)]

To fix this, you have to write painstaking, surgical DOM updates:

javascript

```
// You end up writing tedious code like this for every change:
const target = this.shadowRoot.getElementById('title');
if (target) target.textContent = this.myProperty;
```

Use code with caution.

### 3. Cloning HTML templates becomes tedious

Instead of writing a clean `render()` function with JavaScript expressions, you have to declare an explicit HTML element, find it in the DOM, clone its nodes, and attach them inside your component constructor. \[[1](https://blog.bitsrc.io/trying-lit-googles-web-component-library-3d65d8877fad), [2](https://medium.com/@yanguly/breaking-down-barriers-easy-web-components-with-lit-524fe70206b3), [3](https://developer.mozilla.org/en-US/docs/Web/API/Web%5Fcomponents)]

javascript

```
const template = document.createElement('template');
template.innerHTML = `<style>button { color: red; }</style><button><slot></slot></button>`;

class RedButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true)); // Manual cloning
  }
}
customElements.define('red-button', RedButton);
```

Use code with caution.

### 4. Handling properties vs. attributes is confusing \[[1](https://lamplightdev.com/blog/2020/04/30/whats-the-difference-between-web-component-attributes-and-properties/)]

The browser handles HTML attributes (strings in markup) and JavaScript properties (objects/arrays in code) differently. To make a vanilla component work seamlessly like a native input element, you have to write manual getters and setters to reflect changes back and forth: \[[1](https://gorzelinski.com/blog/intro-to-web-components-what-are-custom-elements/), [2](https://medium.com/@ramangupta/a-new-rich-text-editor-for-the-web-with-real-time-collaboration-710ffdf6ee2c), [3](https://open-wc.org/blog/lit-element-deepdive-in-batching-updates/)]

javascript

```
get disabled() {
  return this.hasAttribute('disabled');
}
set disabled(val) {
  if (val) this.setAttribute('disabled', '');
  else this.removeAttribute('disabled');
}
```

Use code with caution.

***

### The Verdict: When should you go Vanilla?

| 🟢 The Pros (No Lit) \[[1](https://www.gitkraken.com/blog/web-components-are-lit-with-lit), [2](https://medium.com/@helmuthdu/you-dont-need-a-js-library-for-your-components-4dcf41f43091)] | 🔴 The Cons (No Lit)                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Absolute Zero Tooling**: Run code straight in the browser without npm or a bundler.                                                                                                       | **Extreme Boilerplate**: Simple components require dozens of lines of setup.          |
| **No Dependency Lock-in**: Code will literally work exactly the same 10 years from now.                                                                                                     | **Manual DOM Manipulation**: Re-rendering without destroying state is very difficult. |
| **Smallest Possible Payload**: Ships 0 KB of library framework code to the user.                                                                                                            | **No Type Binding**: Attributes can only be string values without manual parsing.     |

**Summary**: Using vanilla web components is excellent for **simple UI enhancements, basic inputs, wrappers, or learning how the web platform works under the hood**. However, if you are building an interactive design system or a complex layout, avoiding Lit (or similar micro-libraries) means you will inevitably end up writing your own worse, buggier version of Lit to handle the state updates. \[[1](https://www.reddit.com/r/Frontend/comments/1p815w5/whats%5Fyour%5Ftake%5Fon%5Fthe%5Frise%5Fof%5Fweb%5Fcomponents%5Fin/), [2](https://www.youtube.com/watch?v=qUhtlnL48yA), [3](https://dev.to/fstbraz/creating-a-cross-framework-components-library-with-web-components-using-lit-4doi)]

Are you planning to build a **shared design system library**, or are you just looking to use a few **standalone widgets** on a static page? I can show you how to set up a robust base class to minimize the vanilla boilerplate. \[[1](https://www.reddit.com/r/webdev/comments/1qz7nbr/are%5Fweb%5Fcomponents%5Fpopular%5Fand%5Fi%5Fhave%5Fmy%5Fhead%5Fin/), [2](https://lit.dev/)]

- [link](https://www.reddit.com/r/Frontend/comments/1p815w5/whats%5Fyour%5Ftake%5Fon%5Fthe%5Frise%5Fof%5Fweb%5Fcomponents%5Fin/)\
  What’s your take on the rise of Web Components in modern frontend ...\
  Nov 28, 2025 — \* PatchesMaps. • 7mo ago. They've been "rising" for like 12 years now. \* hyrumwhite. • 7mo ago. Imo, web components won't 'rise' u...\
  Reddit·r/Frontend
- [link](https://blog.bitsrc.io/trying-lit-googles-web-component-library-3d65d8877fad)\
  Trying Lit: Google's Web Component Library - Bits and Pieces\
  Oct 23, 2022 — It'll ask you a few questions about what you're trying to build, but once you get through them, you'll have a lit-based project al...\
  Bit.dev
- [link](https://www.youtube.com/watch?v=qUhtlnL48yA)\
  How to use Web Components, and why you'd want to\
  Nov 19, 2025 — hello my friend and friend the other day here on my channel. I did some form stuff and my friend Michael saw the video and he crea...\
  39:16\
  YouTube·Kevin Powell

Show all

## You said: in lit

In **Lit**, the exact same web component patterns become highly optimized, reactive, and declarative. \[[1](https://marmelab.com/blog/2024/04/18/web-component-with-lit.html), [2](https://www.linkedin.com/pulse/exploring-lit-lightweight-alternative-web-development-micha%C5%82-pawlik-pgowf), [3](https://help.nintex.com/en-US/formplugins/Reference/GetStartedLit.htm), [4](https://javascript.plainenglish.io/a-practical-guide-to-implementing-lit-with-vite-in-angular-and-react-projects-33d929e0f4e0)]

Lit acts as a tiny, ultra-lightweight wrapper (around 5 KB) that eliminates the manual boilerplate of vanilla web components without hiding the native browser APIs. \[[1](https://www.puzzle.ch/blog/2023/11/15/web-components-part-3-web-components-with-lit), [2](https://css-tricks.com/web-components-are-easier-than-you-think/), [3](https://news.ycombinator.com/item?id=36806747), [4](https://css-tricks.com/building-interoperable-web-components-react/)]

Here is how Lit transforms those same four problem areas:

### 1. Automatic Reactivity

Instead of manually writing `observedAttributes` and parsing strings, you declare reactive properties. Lit automatically watches them and schedules an ultra-efficient UI update whenever they change. \[[1](https://lit.dev/docs/), [2](https://lit.dev/docs/components/properties/), [3](https://dev.to/faisalsaysin/building-reusable-components-with-javascript-web-components-and-lit-ji2)]

javascript

```
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

class MyButton extends LitElement {
  // Lit handles the attribute tracking and string-to-type parsing automatically
  @property({ type: String }) label = '';

  render() {
    return html`<button>${this.label}</button>`;
  }
}
customElements.define('my-button', MyButton);
```

Use code with caution.

### 2. High-Performance DOM Diffing

Lit solves the performance issues of `innerHTML` rewriting by using its `html` template literal tag.

- It scans your HTML template **exactly once** to create a native browser .
- It remembers exactly where your expressions (variables) sit.
- When a property changes, **only the exact text node or attribute updates**. The rest of the DOM remains untouched. State, focus, and CSS transitions are never broken. \[[1](https://codelabs.developers.google.com/codelabs/the-lit-path?gl=us), [2](https://lit.dev/docs/components/rendering/), [3](https://developer.chrome.com/blog/lit-element-and-lit-html), [4](https://news.ycombinator.com/item?id=36807910), [5](https://lit.dev/docs/components/properties/)]

### 3. Declarative Templating

You do not have to manually create tags, clone nodes, or run `appendChild` in a constructor. You simply return a template from a standard `render()` method using standard JavaScript expressions. \[[1](https://github.com/lit/lit/blob/main/dev-docs/design/how-lit-html-works.md), [2](https://lit.dev/docs/components/rendering/)]

javascript

```
// Adding events, loops, or conditionals is completely native and declarative
render() {
  return html`
    <button @click="${this._handleClick}" ?disabled="${this.isDisabled}">
      ${this.items.map(item => html`<li>${item}</li>`)}
    </button>
   animate
  `;
}
```

Use code with caution.

### 4. Seamless Property & Attribute Sync

Lit bridges the gap between JavaScript properties and HTML attributes for you. It automatically synchronizes them based on your configuration: \[[1](https://coryrylan.com/blog/reusable-ui-components-and-data-binding), [2](https://devm.io/javascript/lit-web-components), [3](https://storybook.js.org/addons/wc-storybook-helpers)]

- `this.disabled = true` automatically adds the `disabled` attribute to your HTML tag.
- automatically parses the string `"42"` into a JavaScript number `42` inside your component.
- It easily allows you to pass complex data like arrays and objects directly to elements as properties using the `.prop` prefix syntax. \[[1](https://terodox.tech/lit-html-part-2/)]

***

### The Verdict: Vanilla vs. Lit

| Feature \[[1](https://cloudfour.com/thinks/testing-html-light-dom-web-components-easier-than-expected/), [2](https://coderpad.io/blog/development/intro-to-web-components-vanilla-js/), [3](https://www.jayfreestone.com/writing/web-component-libraries/), [4](https://marmelab.com/blog/2024/04/18/web-component-with-lit.html), [5](https://coryrylan.com/blog/building-web-components-with-lit-html)] | 🔴 Vanilla Web Components                          | 🔵 Lit Components                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| **State Updates**                                                                                                                                                                                                                                                                                                                                                                                         | Manual `attributeChangedCallback`                  | Declarative, automatic `@property`                                   |
| **DOM Rendering**                                                                                                                                                                                                                                                                                                                                                                                         | Destructive `innerHTML` or tedious `querySelector` | Surgical, fast DOM-diffing template literals                         |
| **Styles**                                                                                                                                                                                                                                                                                                                                                                                                | Manually injected tags per instance                | Shared, memory-efficient constructable stylesheets (`static styles`) |
| **Code Size**                                                                                                                                                                                                                                                                                                                                                                                             | 0 KB overhead, but your component code is massive  | ~5 KB overhead, but your component code is tiny                      |

**Summary**: Lit leaves your elements as **standard, native web components**. A Lit component can still be used anywhere a vanilla component can—inside React, Vue, Angular, or raw HTML—but it saves you from writing hundreds of lines of fragile DOM-manipulation code. \[[1](https://lit.dev/docs/), [2](https://marmelab.com/blog/2024/04/18/web-component-with-lit.html), [3](https://devm.io/javascript/lit-web-components), [4](https://developer.adobe.com/express/add-ons/docs/guides/learn/how-to/tutorials/using-lit-typescript), [5](https://blog.bitsrc.io/routing-with-litelement-2a29465ec778)]

Would you like to see how **Lit handles scoped component styling (CSS)** compared to vanilla, or are you interested in seeing how to **bind complex objects/arrays** as properties?

- [link](https://marmelab.com/blog/2024/04/18/web-component-with-lit.html)\
  LIT: A Lightweight Library For Building Web Components\
  Apr 18, 2024 — LIT allows the same declarative approach as in most frontend framework, without using JSX. In addition, in a LIT component, the HT...\
  \
  \
  Marmelab
- [link](https://www.linkedin.com/pulse/exploring-lit-lightweight-alternative-web-development-micha%C5%82-pawlik-pgowf)\
  Exploring Lit: A Lightweight Alternative in Web Development\
  Jul 7, 2025 — It ( Lit ) doesn't rely on a Virtual DOM, instead leveraging native browser standards like Web Components and Shadow DOM. Its re-r...\
  \
  \
  LinkedIn
- [link](https://help.nintex.com/en-US/formplugins/Reference/GetStartedLit.htm)\
  Get started with web components and Lit\
  Define a web component in Lit Components are defined as a class that extends Components can have reactive properties, which automa...\
  \
  Nintex

Show all

## You said: can you use lit wo classes in fp

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can absolutely use Lit in a functional programming (FP) style without writing classes</mark>. \[[1](https://open-wc.org/blog/some-things-to-know-when-developing-with-lit/), [2](https://www.lihaoyi.com/post/WhatsFunctionalProgrammingAllAbout.html)]

To do this, you step away from the `LitElement` class entirely and use **`lit-html`**—the standalone, functional templating core that powers Lit. \[[1](https://lit.dev/docs/libraries/standalone-templates/)]

***

### Option 1: The Pure `lit-html` Way (Pure Functions)

If you want total control, pure functions, and no classes, you combine standard JavaScript state management with `lit-html`'s `render()` function. Your components are just pure functions that accept data and return HTML. \[[1](https://www.elliotclyde.nz/blog/react-on-a-budget-with-lit-html-and-haunted/), [2](https://v5.chriskrycho.com/journal/using-classes-for-functional-programming/), [3](https://www.thisdot.co/blog/how-to-share-styles-in-web-components-with-litelement-and-typescript), [4](https://sarabastian.medium.com/deciding-between-class-and-functional-components-b43930578f)]

javascript

```
import { html, render } from 'lit';

// 1. Pure functional component (just returns a template)
const UserProfile = (user, onUpdateName) => html`
  <div>
    <h2>Hello, ${user.name}!</h2>
    <input .value=${user.name} @input=${(e) => onUpdateName(e.target.value)} />
  </div>
`;

// 2. Application State (Immutable Data)
let state = { name: "Alice" };

// 3. The Update Loop (Redux / Elm Architecture style)
function updateState(newName) {
  state = { ...state, name: newName }; // Pure state transformation
  dispatch();                         // Re-render
}

function dispatch() {
  // Ultra-fast DOM diffing updates ONLY the input/text node
  render(UserProfile(state, updateState), document.body);
}

// Initial render
dispatch();
```

Use code with caution.

***

### Option 2: The Functional Hook Way (Using Haunted)

If you want a **React-like Functional Component** model (complete with hooks like `useState` and `useEffect`) but you want it to output standard Web Components without classes, you use **[Haunted](https://github.com/matthewp/haunted)**. \[[1](https://github.com/matthewp/haunted), [2](https://css-tricks.com/haunted-hooks-for-web-components/)]

Haunted is a popular library built specifically to pair Lit’s `html` engine with a functional, hooks-based API. \[[1](https://css-tricks.com/haunted-hooks-for-web-components/), [2](https://www.elliotclyde.nz/blog/react-on-a-budget-with-lit-html-and-haunted/)]

javascript

```
import { html } from 'lit';
import { component, useState } from 'haunted';

// A pure function functioning as a Web Component!
function Counter() {
  const [count, setCount] = useState(0);

  return html`
    <div>Current Count: ${count}</div>
    <button @click=${() => setCount(count + 1)}>Increment</button>
  `;
}

// Registers <my-counter> as a native, classless web component
customElements.define('my-counter', component(Counter));
```

Use code with caution.

***

### Comparison: `LitElement` vs. Functional Lit

| Feature \[[1](https://github.com/matthewp/haunted), [2](https://ghostxd.hashnode.dev/introduction-to-building-modular-and-reusable-ui-components-with-lit-part-1), [3](https://blog.logrocket.com/lit-vs-react-comparison-guide/), [4](https://www.thisdot.co/blog/litelement-properties-property-vs-internalproperty), [5](https://bennypowers.dev/posts/lets-build-web-components/part-5-litelement/)] | 🏢 `LitElement` (OOP)                                | 🧪 `lit-html` + FP                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------- |
| **Component Model**                                                                                                                                                                                                                                                                                                                                                                                      | JavaScript Classes (`class MyEl extends LitElement`) | Pure Functions (`const MyEl = () => html...`)       |
| **State Location**                                                                                                                                                                                                                                                                                                                                                                                       | Kept inside the class instance (`this.state`)        | Kept in a single store or passed down via arguments |
| **Re-rendering**                                                                                                                                                                                                                                                                                                                                                                                         | Handled automatically by Lit's property setters      | Triggered by calling `render(template, container)`  |
| **Custom Elements**                                                                                                                                                                                                                                                                                                                                                                                      | Native integration                                   | Requires manual assembly or a wrapper like Haunted  |

### Summary

- Use **[`LitElement`](https://lit.dev/)** if you are building an OOP-friendly enterprise design system.
- Use **`lit-html`** directly if you prefer **unidirectional data flow**, immutable architectures (like Redux or Elm), and pure JavaScript functions. \[[1](https://stackoverflow.com/questions/47821789/does-functional-programming-use-object-data-structures), [2](https://dev.to/westbrook/turning-up-to-lit-1o05)]

Would you like to see how to manage a **global state pipeline** (like an event-driven global store) using the pure `lit-html` function approach?

- [link](https://stackoverflow.com/questions/47821789/does-functional-programming-use-object-data-structures)\
  Does functional programming use object data structures?\
  Dec 14, 2017 — Yes, you can use objects with functional programming. Redux is an example of a JavaScript library which does so. Code-Apprentice. ...\
  Stack Overflow
- [link](https://v5.chriskrycho.com/journal/using-classes-for-functional-programming/)\
  Using Classes for Functional Programming - Chris Krycho\
  Jan 22, 2021 — It is instead about embracing composition of pure functions as a key mechanic for building up your program, with the many benefits...\
  Chris Krycho
- [link](https://open-wc.org/blog/some-things-to-know-when-developing-with-lit/)\
  Some things to know when developing with Lit\
  Sep 13, 2021 — From here, you could get very close to copy and paste the rest of a functional UI component into a LitElement for an early test of...\
  Open Web Components

Show all

## You said: haunted? what a name

It is definitely one of the cleverest (and most literal) puns in modern web development!

The name is a direct play on how the library works under the hood:

- **The Concept**: You are writing **functional** code, but you want to attach **hooks** to it.
- **The Joke**: What do you find in a **haunted** house? **Ghosts and hooks**. 🪝👻

The library uses the exact same hook architecture that React popularized, so the name is just a spooky, thematic nod to that.

The developer community loved the theme, too. The logo for the library is a cute little ghost emoji, and the documentation historically leaned heavily into the supernatural puns.

Are you interested in seeing how **Haunted handles side effects** (`useEffect`) without a class lifecycle, or would you prefer to stick closer to **pure `lit-html`** functions with zero extra dependencies?

## You said: complex component in haunted

To show you how Haunted scales, let's build a complex, real-world component: a **User Management Dashboard**.

This example showcases **multiple hooks** (`useState`, `useEffect`, `useMemo`, `useCallback`), custom lifecycle cleanup, and child element interaction—all wrapped inside a native, classless web component. \[[1](https://dev.to/richardbray/how-to-use-hooks-in-react-class-components-4lhp), [2](https://hackmd.io/@hardyian/HJBOw%5FD2h), [3](https://www.youtube.com/watch?v=N8jApm12B8Q), [4](https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/)]

### The Code:

javascript

```
import { html } from 'lit';
import { component, useState, useEffect, useMemo, useCallback } from 'haunted';

function UserDashboard({ apiEndpoint = 'https://typicode.com' }) {
  // 1. Multiple pieces of state
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // 2. Fetch data side-effect (useEffect)
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(apiEndpoint)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setUsers(data);
          setLoading(false);
        }
      })
      .catch(err => console.error("Fetch failed", err));

    // Cleanup function: runs if apiEndpoint changes or component unmounts
    return () => { isMounted = false; };
  }, [apiEndpoint]); // Only re-run if the API endpoint attribute changes

  // 3. Performance Optimization (useMemo)
  // Filters the user list without re-calculating on every unrelated render
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // 4. Memoized Event Handler (useCallback)
  const handleDelete = useCallback((userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }, []);

  // 5. Template Assembly
  return html`
    <style>
      :host { display: block; font-family: sans-serif; max-width: 400px; }
      .search-box { width: 100%; padding: 8px; margin-bottom: 12px; }
      .user-card {
        display: flex; justify-content: space-between;
        padding: 10px; border-bottom: 1px solid #eee;
      }
      button { background: #ff4d4d; color: white; border: none; padding: 4px 8px; cursor: pointer; }
    </style>

    <h3>User Directory</h3>

    <input
      type="text"
      class="search-box"
      placeholder="Search users..."
      .value=${searchTerm}
      @input=${(e) => setSearchTerm(e.target.value)}
    />

    ${loading
      ? html`<p>Loading ghosts... 👻</p>`
      : html`
          <div class="user-list">
            ${filteredUsers.map(user => html`
              <div class="user-card">
                <span>${user.name}</span>
                <button @click=${() => handleDelete(user.id)}>Delete</button>
              </div>
            `)}
            ${filteredUsers.length === 0 ? html`<p>No users found.</p>` : ''}
          </div>
        `
    }
  `;
}

// 6. Define component options to pass HTML attributes into the function as properties
customElements.define(
  'user-dashboard',
  component(UserDashboard, { observedAttributes: ['api-endpoint'] })
);
```

Use code with caution.

***

### How Haunted Solves Complex Features

- **Attribute to Property Mapping**: By adding `observedAttributes`, Haunted reads the HTML markup and passes it cleanly into your function argument object (`{ apiEndpoint }`) as a camelCased variable.
- **The Component Shadow Loop**: Haunted wraps your entire function inside a real `HTMLElement` behind the scenes. When you call `setUsers` or `setSearchTerm`, Haunted magically re-invokes your function, calculates the new template, and lets Lit surgically patch the Shadow DOM.
- **No Event Binding Mess**: The `@click` and `@input` syntaxes belong natively to Lit. Combined with Haunted's hooks, event listeners never lose their lexical scope or context.

### Using it in HTML

Because Haunted outputs a completely standard Web Component, you can drop this right into a plain HTML file, React, or Vue app:

html

```
<user-dashboard api-endpoint="https://my-domain.com"></user-dashboard>
```

Use code with caution.

Would you like to explore how to create **custom hooks** in Haunted to share state logic between multiple functional components, or look into **handling context** for global state?

- [link](https://dev.to/richardbray/how-to-use-hooks-in-react-class-components-4lhp)\
  How to use hooks in React Class components\
  Apr 11, 2022 — They have a good example on there of adding multiple hooks.\
  \
  \
  DEV Community
- [link](https://hackmd.io/@hardyian/HJBOw%5FD2h)\
  Exploring Parent-Child Component Relationships in React\
  Aug 14, 2023 — To solidify our understanding of parent-child component relationships in React ( react.js ) , let's dive into a real-world React (\
  \
  HackMD
- [link](https://www.youtube.com/watch?v=N8jApm12B8Q)\
  Mastering React Hooks: A Comprehensive Guide\
  Apr 29, 2022 — In this video I go over the very basics of react hooks. I cover a simple usecase using the usestate hook which is a built in react...\
  \
  \
  YouTube

Show all

## You said: compare haunted and react

While **Haunted** and **React** share an identical hook-based developer experience, they are fundamentally different under the hood. \[[1](https://blog.logrocket.com/signals-vs-hooks-reactivity-models/)]

React relies on a heavy runtime environment and a virtual abstraction layer, whereas Haunted leverages the browser's native **Web Components** standard (Shadow DOM and Custom Elements) combined with Lit's fast template strings. \[[1](https://www.jhkinfotech.com/blog/web-components-vs-react-components), [2](https://www.uxpin.com/studio/blog/react-design-patterns/), [3](https://techpreneurr.medium.com/top-5-reasons-to-ditch-react-in-2025-and-what-to-use-instead-ea19821496c3), [4](https://www.freecodecamp.org/news/virtual-dom-vs-shadow-dom/)]

Here is how they stack up across key categories:

### 1. Architectural Differences

- **React (Virtual DOM)**: React creates a virtual representation of the entire UI tree in JavaScript memory. When state changes, it re-runs your components, compares the old virtual tree with the new virtual tree (diffing), and then batch-updates the real browser DOM. \[[1](https://www.evozon.com/web-applications-vs-websites-a-comprehensive-analysis-in-the-react-framework/), [2](https://dev.to/brilworks/top-react-features-for-web-developers-2afi), [3](https://nareshit.com/blogs/forms-in-react-controlled-vs-uncontrolled), [4](https://42interactive.com/blog/benefits-of-using-react/), [5](https://www.smashingmagazine.com/2015/04/react-to-the-future-with-isomorphic-apps/)]
- **Haunted (Native DOM + Lit)**: Haunted targets real HTML elements using Lit. It utilizes native browser template literals. It templates once, remembers exactly where variables sit in the actual DOM, and updates **only** those specific nodes when state changes. There is no virtual tree lookup. \[[1](https://files.dthompson.us/docs/haunt/latest/Introduction.html), [2](https://www.elliotclyde.nz/blog/react-on-a-budget-with-lit-html-and-haunted/), [3](https://www.elliotclyde.nz/blog/react-on-a-budget-with-lit-html-and-haunted/), [4](https://www.clickittech.com/software-development/vue-vs-react/), [5](https://medium.com/react-ified-interviews-made-simple/react-mock-interview-virtual-dom-52b389ad9add)]

### 2. Side-by-Side Code Comparison

The syntax is intentionally almost identical, but look closely at the imports, the styles, and how they register. \[[1](https://medium.com/@marketing%5F96787/preact-vs-react-in-2025-which-javascript-framework-delivers-the-best-performance-f2ded55808a4)]

javascript

```
// --- REACT APPROACH ---
import React, { useState } from 'react';
import './Button.css'; // Relies on a build tool/bundler

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className="btn" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// --- HAUNTED APPROACH ---
import { html } from 'lit';
import { component, useState } from 'haunted';

function Counter() {
  const [count, setCount] = useState(0);
  return html`
    <style>.btn { color: blue; }</style> <!-- Native CSS encapsulation -->
    <button class="btn" @click=${() => setCount(count + 1)}>
      Count: ${count}
    </button>
  `;
}
customElements.define('my-counter', component(Counter));
```

Use code with caution.

### 3. Core Differences Breakdowns

### 📦 Bundle Size & Weight

- **React**: Requires `react` and `react-dom`, which adds roughly **35 KB – 40 KB** (gzipped) to your initial page load before you even write a single line of application code.
- **Haunted**: Relies on tiny wrappers over Lit. The entire Haunted footprint + Lit core is only around **7 KB – 8 KB** (gzipped). \[[1](https://medium.com/@rana2001shubham/comparing-preact-react-performance-and-key-differences-30f0c13bd784), [2](https://www.alphabold.com/preact-vs-react/), [3](https://www.elliotclyde.nz/blog/react-on-a-budget-with-lit-html-and-haunted/)]

### 🛡️ Style Encapsulation

- **React**: Has no built-in style isolation. CSS leaks everywhere unless you install extra third-party tooling like CSS Modules, Tailwind, or Styled Components. \[[1](https://buttercms.com/blog/react-vs-react-native/)]
- **Haunted**: Uses the browser's native **Shadow DOM**. Any block you put inside your template is physically trapped inside that element. It cannot leak out, and global page styles cannot accidentally break your component styles. \[[1](https://shadhujan.medium.com/why-im-betting-on-the-browser-the-return-of-web-components-2026-edition-1a27d4dcefce), [2](https://www.zachleat.com/web/styling-web-components/), [3](https://www.getfishtank.com/insights/the-future-of-ai-dxp-platforms-and-micro-frontends), [4](https://dev.to/zizigy/the-worlds-first-web-components-library-in-the-style-of-shadcn-with-automatic-code-injection-33on)]

### 🌍 Interoperability & Ecosystem

- **React**: Code is trapped inside the React ecosystem. A React component cannot be easily dropped into an Angular, Vue, Svelte, or raw HTML page without shipping the entire React engine with it.
- **Haunted**: Outputs a **Standard Web Component** (). Once compiled, the browser views it exactly like a native or . You can drop a Haunted component cleanly into Vue, Angular, Svelte, WordPress, or standard server-rendered HTML pages.

***

### Feature Summary

| Feature \[[1](https://medium.com/@vinaykumarbr07/inside-react-rendering-components-elements-and-reconciliation-explained-7107dc7814c4), [2](https://www.contentful.com/blog/next-js-vs-react/), [3](https://www.sencha.com/blog/create-react-app-its-not-as-difficult-as-you-think/), [4](https://budibase.com/blog/web-development-tools/), [5](https://levelup.gitconnected.com/inside-react-the-virtual-dom-7d801f6c8e8f)] | ⚛️ React                               | 👻 Haunted                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------------- |
| **Component Type**                                                                                                                                                                                                                                                                                                                                                                                                            | Framework-specific functions           | Native Custom Elements                   |
| **Syntax Style**                                                                                                                                                                                                                                                                                                                                                                                                              | JSX (Requires a build step like Babel) | Tagged Template Literals (Runs natively) |
| **DOM Engine**                                                                                                                                                                                                                                                                                                                                                                                                                | Virtual DOM                            | Lit-html (Direct DOM Pinpointing)        |
| **Target Audience**                                                                                                                                                                                                                                                                                                                                                                                                           | Full Single Page Apps (SPAs)           | Design Systems, Micro-frontends, Widgets |
| **State Scope**                                                                                                                                                                                                                                                                                                                                                                                                               | Component instance state               | Shadow DOM element instance state        |

### The Verdict: Which should you choose?

- Choose **React** if you are building an enormous, data-heavy Single Page Application, require an expansive ecosystem of pre-built component libraries (like Material UI or Radix), or are looking for extensive corporate team hiring pools. \[[1](https://distantjob.com/blog/why-use-react/), [2](https://www.okupter.com/blog/best-react-alternatives), [3](https://bachasoftware.com/blog/insights-2/react-vs-vue-807), [4](https://www.dotnetcurry.com/reactjs/quick-refresher-guide-reactjs), [5](https://www.freecodecamp.org/news/the-react-roadmap-learn-react/)]
- Choose **Haunted** if you love functional programming and hooks, but you are building a **reusable design system** that must work across different frameworks, or you want to deliver incredibly fast pages with a tiny JavaScript bundle footprint. \[[1](https://www.elliotclyde.nz/blog/react-on-a-budget-with-lit-html-and-haunted/), [2](https://dev.to/anisubhra%5Fsarkar/are-web-components-finally-ready-to-replace-frameworks-3fii)]

Would you like to look at how Haunted handles **Context** (sharing global state down a deep tree of functional components) compared to React's `useContext`?

- [link](https://blog.logrocket.com/signals-vs-hooks-reactivity-models/)\
  Hooks vs. Signals: The great reactivity convergence explained\
  Oct 10, 2025 — Signals and Hooks, while solving the same problem of reactivity, do so in fundamentally different ways. In this article, we'll exp...\
  \
  \
  LogRocket Blog
- [link](https://www.jhkinfotech.com/blog/web-components-vs-react-components)\
  Web Components vs React Components: Differences Explained – Jhk Blog\
  Mar 21, 2025 — Web Components utilize built-in browser APIs such as Shadow DOM and Custom Elements for creating encapsulated, reusable UI element...\
  \
  \
  JHK Infotech
- [link](https://www.uxpin.com/studio/blog/react-design-patterns/)\
  The Best React Design Patterns You Should Know About in 2025\
  Jan 8, 2025 — Instead of the traditional approach of directly manipulating the DOM, React ( React.js ) introduced a useful level of abstraction ...\
  \
  \
  UXPin

Show all

## You said: how wise is it to choose react or haunted if you dont care size

If bundle size is completely irrelevant to you, **React is almost always the wiser, safer, and more practical choice** for any production project.

When you remove bundle size from the equation, you eliminate Haunted's single greatest competitive advantage. Without that constraint, React's massive ecosystem, mature tooling, and corporate backing make it the objectively superior choice for building applications.

Here is a breakdown of why choosing React is wiser when size does not matter, along with the rare exceptions where Haunted still makes sense.

***

### Why React Wins (If Size Doesn't Matter)

### 1. The Ecosystem is Unmatched

If you need a data table, a date picker, a charting library, an accessible modal, or a drag-and-drop system, React has thousands of highly optimized, pre-built packages (like shadcn/ui, Radix, or TanStack Query). With Haunted, you will have to write almost all complex UI components, state management solutions, and utilities completely from scratch.

### 2. Hiring and Community Support

React is the industry standard. If you get stuck on a bug at 2:00 AM, there are millions of StackOverflow threads, articles, and AI models trained to fix your exact issue. Haunted is a niche library; finding solutions to highly specific bugs or hiring developers who understand its specific nuances will be incredibly difficult. \[[1](https://levelup.gitconnected.com/react-vs-next-js-87f8e1446c93)]

### 3. True Stability vs. Maintenance Risk

React is backed by Meta and a massive dedicated open-source team. It is not going anywhere. Haunted is a small open-source project. If the main maintainers decide to stop updating it, your codebase is left sitting on a dead dependency.

### 4. Advanced Concurrent Features

React is no longer just a UI library; it is an entire runtime engine. Features like **Suspense**, **Transitions**, **Server Actions**, and **React Server Components (RSC)** provide deeply integrated data-fetching and user-experience optimizations that Haunted simply cannot match.

***

### When Haunted is Still Wisest (Even Ignoring Size)

There are two specific architectural scenarios where Haunted remains the better choice, even if your JavaScript bundle is allowed to be infinitely large:

- **You are building a Multi-Framework Design System**: If your team builds apps in React, some in Vue, and others in Angular or raw HTML, React components will not work across them easily. Haunted components compile down to **Native Web Components**. You can write your buttons, inputs, and layouts once in Haunted, and drop them into _any_ framework seamlessly.
- **Micro-Frontend Microservices**: If different teams own different parts of a single web page, mixing different versions of React on the same page can cause severe runtime crashes. Because Haunted components are fully isolated inside their own native **Shadow DOM**, multiple versions or different microservices can live on the exact same page without ever conflicting or leaking styles into one another.

***

### Summary

| Situation                    | Best Choice    | Why?                                                                                        |
| ---------------------------- | -------------- | ------------------------------------------------------------------------------------------- |
| **Standard App / Website**   | ⚛️ **React**   | Massive ecosystem, endless libraries, easy hiring, and ultimate feature support.            |
| **Enterprise Design System** | 👻 **Haunted** | Interoperability. It builds native elements that work in Vue, Angular, or React.            |
| **Micro-Frontends**          | 👻 **Haunted** | Perfect DOM and style isolation prevents independent teams from breaking each other's code. |

Are you leaning toward building a **monolithic Single Page Application**, or is your project a **distributed system / component library** that needs to plug into multiple different places?

- [link](https://levelup.gitconnected.com/react-vs-next-js-87f8e1446c93)\
  React vs Next.js vs Vue: I Used All 3 in Production (Honest Comparison) — A Developer’s Comedy of Framework Wars | by Girish Dhamane | Level Up Coding\
  Sep 17, 2025 — React fanboys: “React is industry standard!”\
  \
  \
  Level Up Coding

## You said: i mean compare dx and ux, not ecosystem hiring future stuff, ignore size and cross framework i do not need

If you strip away ecosystem, hiring, size, and cross-framework needs, and judge them **purely on Developer Experience (DX) and User Experience (UX)**, the choice comes down to how you prefer to handle component state and render loops. \[[1](https://typoapp.io/blog/developer-experience)]

Here is the direct comparison of DX and UX.

***

### 1. Developer Experience (DX) \[[1](https://silvenon.com/blog/improving-developer-experience)]

### 🟢 Where Haunted Wins on DX: Clean JavaScript and No "Rules of Hooks" Hell \[[1](https://www.directual.com/blog/ux-vs-dx/)]

- **True JavaScript Templates**: Haunted uses Lit's standard JavaScript template strings. You do not need a compiler or build tool (like Babel or Vite) just to parse JSX markup. It is plain JavaScript. \[[1](https://www.brilworks.com/blog/top-frontend-technologies/)]
- **Intuitive Re-renders**: Haunted components are real DOM nodes. When a state hook changes, Haunted re-runs your function, and Lit surgically targets only the changing variables. It feels lightweight because you aren’t constantly fighting a massive framework abstraction.
- **Native Style Encapsulation**: You can write directly inside your component function. Because it uses the native Shadow DOM, those styles are perfectly trapped. You never have to configure CSS modules, configure Tailwind configurations, or worry about naming collisions. \[[1](https://namastedev.com/blog/intro-to-headless-ui-with-react-7/)]

### 🔴 Where Haunted Loses on DX: Flaky Tooling and Manual Ref Bindings

- **Inferior IDE Tooling**: Because templates are inside standard strings, syntax highlighting, autocompletion, auto-importing, and linting for your HTML are significantly worse than React’s JSX ecosystem.
- **Property vs Attribute Confusion**: You constantly have to remember whether you are passing a string attribute (`foo="bar"`) or a rich JavaScript property (`.foo=${bar}`) to child elements. Forgetting the period (`.`) causes silent, frustrating bugs where objects get converted to the string `"[object Object]"`.

### 🟢 Where React Wins on DX: Seamless JSX and Bulletproof Type Support

- **The Power of JSX**: JSX is deeply integrated into modern code editors. Your IDE instantly knows if you misspelled a property, missed a closing tag, or passed a number to a component that expects a boolean. \[[1](https://medium.com/@mernstackdevbykevin/why-typescript-is-becoming-the-universal-language-of-modern-web-development-692b77fc8603)]
- **Unified Data Passing**: React makes no distinction between properties and attributes. You pass strings, functions, objects, and components down the tree using the exact same syntax (`prop={value}`). It is incredibly consistent.

### 🔴 Where React Loses on DX: Mind-Bending Reactivity Rules

- **Stale Closures and Dependency Arrays**: React's `useEffect`, `useMemo`, and `useCallback` require strict dependency arrays. If you forget a variable inside the array, your component introduces severe "stale closure" bugs where functions read old state. \[[1](https://frontend-developer.medium.com/react-hooks-are-getting-a-major-upgrade-what-every-developer-must-know-in-2026-c6d2ffe9e721), [2](https://medium.com/@InkOfIntimacy/i-built-an-ai-that-reviews-my-react-code-in-real-time-heres-what-i-learned-b29a44fe7883), [3](https://medium.com/javascript-decoded-in-plain-english/inside-react-hooks-unveiling-the-mental-model-and-hidden-pitfalls-82306b143184), [4](https://www.instagram.com/reel/DQrntlLgsDu/)]
- **Strict Rules of Hooks**: You cannot call hooks inside `if` statements, loops, or nested functions. Violating this immediately crashes your entire application runtime. \[[1](https://www.saschb2b.com/blog/typesafe-api-codegen-2026)]

***

### 2. User Experience (UX)

### 🟢 Where Haunted Wins on UX: Perfect Isolation and Layout Stability

- **Impenetrable Visual Isolation**: Because Haunted uses the native Shadow DOM, global CSS from the main website can **never** bleed in and corrupt your component’s layout. Your users will never experience layout shifts or broken UI because a global utility style overrode an internal component style.
- **Micro-targeted Updates**: Lit updates the DOM with laser precision. It touches the exact text node or attribute that changed without a Virtual DOM diffing pass. In high-frequency UI scenarios (like real-time data feeds or complex animations), components remain buttery smooth without manual optimization. \[[1](https://medium.com/@engin.bolat/is-fabric-really-faster-old-vs-new-react-native-architecture-a-real-world-benchmark-f2f639669ed4)]

### 🔴 Where Haunted Loses on UX: Global Form and Accessibility Friction

- **Form Integration Issues**: Because components sit inside a Shadow DOM boundary, native HTML elements cannot naturally see inputs hidden inside Haunted components. Making them work seamlessly requires complex manual wiring (`ElementInternals` API), which can lead to broken autofill or validation states for users if done improperly.
- **Accessibility (A11y) Barriers**: Screen readers sometimes struggle to cross the Shadow DOM barrier when linking items together (like connecting an external to an internal via an `id`). \[[1](https://blog.adeeshsharma.com/part-12-introduction-to-web-components-and-cross-framework-integration)]

### 🟢 Where React Wins on UX: Seamless Component Interaction

- **Flawless Global Accessibility**: Because React compiles down to a flat, standard DOM tree with no Shadow DOM walls, linking labels, handling keyboard focus across the entire page, and exposing elements to screen readers works natively and flawlessly.
- **Rich Layout Transitions**: React’s concurrent rendering engine allows the UI to prepare the next screen in memory before displaying it. For the user, this means smoother page transitions, native skeleton loading screens (`Suspense`), and a highly responsive feel during heavy interactions. \[[1](https://topher.io/writing/how-concurrent-react-changes-the-game-for-data-heavy-ui), [2](https://imrankhani.medium.com/react-19-a-comprehensive-overview-of-the-latest-enhancements-and-features-b0c38e388e2d), [3](https://blog.logrocket.com/next-js-vs-react-developer-experience/)]

### 🔴 Where React Loses on UX: Global CSS Pollution

- **Global Style Breakers**: Because React outputs standard HTML nodes into a flat tree, any poorly written global CSS rule can completely break your component layouts. A rogue `div { box-sizing: content-box; }` written by another developer can warp the design of your buttons and inputs. \[[1](https://www.greatfrontend.com/blog/latest)]

***

### Summary: Which DX/UX style fits you?

- Choose **React** if your ideal DX/UX is a unified environment where passing data is seamless, templates have strict type safety, and global layout animations/accessibility must work flawlessly across a flat DOM.
- Choose **Haunted** if your ideal DX/UX is a highly isolated environment where component styles can never break, updating data targets the DOM with absolute precision, and you prefer writing vanilla JavaScript strings over compiler-reliant JSX.

Are you building a user interface that relies heavily on **form inputs and deep layout transitions**, or is it focused more on **isolated, visual dashboards and data feeds**?

- [link](https://typoapp.io/blog/developer-experience)\
  What is Developer Experience?\
  Nov 22, 2024 — User Experience is about how end-users interact with a product, while Developer Experience concerns the experience of developers w...\
  \
  \
  typoapp.io
- [link](https://silvenon.com/blog/improving-developer-experience)\
  Make your JavaScript project accessible to newcomers\
  Apr 5, 2021 — Make your JavaScript project accessible to newcomers The term that I find most suitable for this is developer experience, or DX. I...\
  \
  Matija Marohnić
- [link](https://www.directual.com/blog/ux-vs-dx/)\
  DX as a competitive advantage—Directual’s take on UX vs. DX\
  Nov 20, 2023 — DX as a competitive advantage—Directual's take on UX vs. DX The tides are shifting. First, it was the users' whim that decided wha...\
  \
  \
  Directual

Show all

## You said: where is haunted adopted

**Haunted has practically zero formal corporate adoption.**

If you are looking for a list of tech giants or Fortune 500 companies running Haunted in production, you will not find one. Unlike Lit (backed by Google) or React (backed by Meta), Haunted is a grassroots, independent open-source project created by developer Matthew Phillips. \[[1](https://medium.com/passionate-people/haunted-react-hooks-for-web-components-c976f9b53fda)]

Because of this, its adoption profile looks very different:

### 1. Where Haunted is Actually Used

- **Independent Open-Source Enthusiasts**: It is heavily adopted by a niche community of developers who are deeply ideological about the **Extensible Web Manifesto**. These are programmers who love React's functional hooks paradigm but refuse to lock themselves into a massive framework ecosystem. \[[1](https://github.com/matthewp/haunted)]
- **Prototyping and No-Build Apps**: Because Haunted can run directly via a CDN link in a raw browser without Webpack, Vite, or Babel, it is widely used for creating rapid, interactive UI prototypes or widgets on static server-rendered sites (like WordPress, Drupal, or Eleventy). \[[1](https://css-tricks.com/haunted-hooks-for-web-components/)]
- **Boutique Agencies**: Small, specialized agencies building lightweight, modular design systems for clients often adopt Haunted so they can hand over pure, standard Web Components that require almost zero long-term dependency maintenance. \[[1](https://marvinh.dev/blog/web-components-in-2020/)]

### 2. Why its "Invisible" Adoption is Higher Than It Seems

While companies don't explicitly list Haunted on their tech stack pages, its core concepts are everywhere. Haunted was incredibly influential in proving that **functional programming and hooks do not belong exclusively to React**.

Many larger teams and frameworks looked at Haunted's success and integrated similar concepts elsewhere:

- **The Lit Team** introduced Lit-based controller abstractions that allow class-based web components to reuse functional, hook-like state logic.
- **Alternative FP Web Libraries**: Other functional-first web component micro-libraries like **Hybrids** and **Atomico** gained parallel traction in the functional web component niche. \[[1](https://dev.to/bennypowers/what-s-not-new-in-react-18-45c7)]

### Summary

Think of Haunted like an **indie cult-classic film**. It never topped the box office or got standard corporate distribution, but the directors who watched it used its ideas to shape how modern functional web components are built. \[[1](https://www.hauntworld.com/featured-article/history-of-the-haunted-house-industry)]

Are you looking to use Haunted for a **personal passion project** where you want clean FP code, or were you hoping to find **enterprise validation** before introducing it to a larger team?

- [link](https://github.com/matthewp/haunted)\
  matthewp/haunted: React's Hooks API implemented ... - GitHub\
  Feb 21, 2025 — Haunted supports the same API as React Hooks. The hope is that by doing so you can reuse hooks available on npm simply by aliasing...\
  GitHub
- [link](https://css-tricks.com/haunted-hooks-for-web-components/)\
  Haunted: Hooks for Web Components - CSS-Tricks\
  Jul 3, 2019 — Chris Coyier on Jul 3, 2019. I was just chatting with Dave and he told me about Haunted. It's hooks, but for native web components...\
  CSS-Tricks
- [link](https://marvinh.dev/blog/web-components-in-2020/)\
  A look at web components - Marvin Hagemeister\
  Sep 4, 2020 — Why web components? The main benefit of web components is that you can render them from any other framework as well as in plain HT...\
  Marvin Hagemeister

Show all

## You said: where is lit adopted

Unlike Haunted, **Lit has massive, widespread enterprise adoption.**

Because it was incubated by Google and officially moved under the [OpenJS Foundation](https://lit.dev/blog/2025-10-14-openjs/), Lit has become the industry-standard library for companies building scalable, framework-agnostic frontend architectures. \[[1](https://lit.dev/blog/2025-10-14-openjs/), [2](https://openjsf.org/blog/lit-moves-to-openjs-foundation), [3](https://jaystevenhamilton.medium.com/lit-web-components-quick-start-9f18b52a54aa)]

It is quietly powering a huge percentage of the modern web. The adoption falls into several major categories: \[[1](https://medium.com/@mernstackdevbykevin/web-components-in-2026-theyre-not-the-future-anymore-they-re-the-present-75ba9872a364)]

### 1. Massive Tech Platforms (Core UI & Micro-Frontends)

These companies use Lit to build standard interface elements that must load fast and look identical across hundreds of disjointed internal teams and services.

- **Google**: Lit is used extensively across Google's web properties. It powers major parts of **YouTube**, the core **Google Maps Platform** interface, **Chrome DevTools**, Chrome's native settings UI, Google Labs, and Google Colab. \[[1](https://lit.dev/blog/2025-10-14-openjs/), [2](https://marmelab.com/blog/2024/04/18/web-component-with-lit.html)]
- **Adobe**: The heavy web-app versions of **Adobe Photoshop on the Web** and **Adobe Illustrator on the Web** are built primarily using Lit elements. It provides the performant, desktop-grade layout and rendering needed for browser-based photo/vector editing. \[[1](https://www.reddit.com/r/Frontend/comments/1s2qx9f/does%5Fanyone%5Fhere%5Fuse%5Fweb%5Fcomponents%5Fin%5Ftheir/), [2](https://lit.dev/blog/2025-10-14-openjs/)]
- **Microsoft**: The web-based version of the **Microsoft Store** relies on Lit web components to deliver a fast, lightweight user interface. \[[1](https://lit.dev/blog/2025-10-14-openjs/), [2](https://dev.to/reggi/framework-interoperable-component-libraries-using-lit-web-components-43ac)]
- **GitHub**: Relies heavily on Lit elements to power interactive UI blocks scattered across their platform, ensuring code view pages stay hyper-fast. \[[1](https://www.reddit.com/r/Frontend/comments/1s2qx9f/does%5Fanyone%5Fhere%5Fuse%5Fweb%5Fcomponents%5Fin%5Ftheir/), [2](https://medium.com/@mernstackdevbykevin/web-components-in-2026-theyre-not-the-future-anymore-they-re-the-present-75ba9872a364)]
- **Reddit**: Rebuilt massive portions of its modern web layout using Lit components to optimize rendering speeds and clean up the page weight. \[[1](https://www.reddit.com/r/Frontend/comments/1s2qx9f/does%5Fanyone%5Fhere%5Fuse%5Fweb%5Fcomponents%5Fin%5Ftheir/), [2](https://lit.dev/blog/2025-10-14-openjs/)]

### 2. Major Enterprise Design Systems

A primary use case for Lit is building a company's single "source of truth" UI library. Instead of writing separate button components for React, Vue, and Angular teams, corporate platform teams build a unified component library once in Lit.

- **Shopify**: Migrated its massive **Polaris design system** to Web Components via Lit. This ensures their admin dashboard, user checkout experiences, and external embeddable commerce widgets remain consistent and light across any platform. \[[1](https://medium.com/@codewithmunyao/the-javascript-framework-that-will-dominate-2026-its-not-what-you-think-3622c8ee3abc)]
- **Salesforce**: Extensively utilizes Lit elements inside its ecosystem to support framework-agnostic UI delivery for developers building custom extensions. \[[1](https://medium.com/@mernstackdevbykevin/web-components-in-2026-theyre-not-the-future-anymore-they-re-the-present-75ba9872a364)]
- **IBM**: Their open-source **Carbon Design System** maintains a highly popular Web Components variant built natively with Lit.

### 3. Smart Home, Utilities, and Developer Tools

Because Lit has an extremely small bundle size and handles CSS encapsulation natively, it is highly adopted in embedded web servers, internet-of-things (IoT) devices, and documentation engines. \[[1](https://medium.com/@codenova/deep-dive-into-lit-a-modern-framework-for-web-components-3f1ad8b44d60)]

- **Home Assistant**: The premier open-source smart home platform relies entirely on Lit for its frontend dashboard and user interface.
- **MDN Web Docs**: Mozilla's developer network uses Lit to power various interactive UI widgets across the documentation platform.
- **Web Awesome**: The massive library of pre-built UI components (formerly Shoelace) is built entirely on Lit. \[[1](https://lit.dev/blog/2025-10-14-openjs/)]

### Summary

If Haunted is a passion project for indie developers, **Lit is the foundational infrastructure for enterprise web platforms**. When you click around YouTube, edit a layer in Photoshop Web, or change your Google account settings, you are actively interacting with Lit components under the hood. \[[1](https://lit.dev/blog/2025-10-14-openjs/), [2](https://medium.com/@mernstackdevbykevin/web-components-in-2026-theyre-not-the-future-anymore-they-re-the-present-75ba9872a364), [3](https://medium.com/@codewithmunyao/the-javascript-framework-that-will-dominate-2026-its-not-what-you-think-3622c8ee3abc)]

Are you considering Lit for an **organizational design system**, or are you looking to see how it integrates with an **existing framework** like React or Next.js?

- [link](https://www.reddit.com/r/Frontend/comments/1s2qx9f/does%5Fanyone%5Fhere%5Fuse%5Fweb%5Fcomponents%5Fin%5Ftheir/)\
  Does anyone here use web components in their projects? : r/Frontend\
  Mar 25, 2026 — \* fropirate. • 3mo ago. We built our design system with web components using Lit. ... \* retro-mehl. • 3mo ago. Yes. ... \* endymion...\
  Reddit·r/Frontend
- [link](https://lit.dev/blog/2025-10-14-openjs/)\
  Lit is Joining the OpenJS Foundation!\
  Oct 14, 2025 — Just a few examples include Adobe Photoshop and Illustrator for Web, Reddit, MDN, The Internet Archive, Chrome DevTools and settin...\
  lit.dev
- [link](https://medium.com/@mernstackdevbykevin/web-components-in-2026-theyre-not-the-future-anymore-they-re-the-present-75ba9872a364)\
  Web Components in 2026: They're Not the Future Anymore\
  May 4, 2026 — Here's what every frontend developer needs to know right now. Remember when you laughed at the idea of Web Components in 2019? You...\
  Medium·Kevin - MERN Stack Developer

Show all

## You said: where is vanillajs (not web component) adopted

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">VanillaJS is the single most widely adopted "framework" on earth, powering over 90% of the top 10 million websites.</span></strong></mark>

When developers say "VanillaJS," they are using a tongue-in-cheek term for writing pure, native JavaScript using standard web APIs (like `fetch`, `document.querySelector`, and `addEventListener`) without any frameworks or runtime libraries. \[[1](https://framework-benchmarks.as93.net/vanilla/), [2](https://hackernoon.com/lets-talk-about-vanilla-javascript-what-is-vanilla-js-and-why-should-i-spend-any-time-on-it-sb2f3522), [3](https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks)]

While React and Vue dominate software engineering job descriptions, VanillaJS dominates actual web traffic. It is adopted across four major areas:

### 1. Ultra-Performance Tech Landing Pages & E-Commerce

For companies where a 100ms delay in page loading costs millions of dollars in lost revenue, loading a framework JavaScript bundle is out of the question.

- **Amazon.com**: The core Amazon retail homepage and checkout pipeline rely almost entirely on VanillaJS. It uses native event delegation and raw DOM manipulation to ensure the site loads instantly, even on weak mobile connections.
- **Netflix (Landing Page)**: While Netflix famously uses React for its internal logged-in video streaming dashboard, it famously stripped React completely out of its main public-facing landing and signup pages, replacing it with VanillaJS to maximize conversion rates. \[[1](https://www.youtube.com/watch?v=O9Am5YicLyM), [2](https://medium.com/dev-simplified/why-silicon-valley-ctos-are-ditching-react-in-2025-a7d2f5d21935), [3](https://www.linkedin.com/posts/ghassan-malik-949600188%5Fnetflix-made-a-bold-but-brilliant-call-they-activity-7377304671155044352-qHJd), [4](https://medium.com/@kruthish18/why-netflix-moved-from-react-to-vanilla-javascript-and-what-it-means-for-developers-2b8eb087d44f)]
- **Stripe**: The beautifully animated, interactive homepages and documentation sites that Stripe is famous for are written in pure VanillaJS to ensure flawless, rapid layout performance.

### 2. High-Performance Web Games & Real-Time Canvases

When building a 60 FPS graphical interactive layout, framework abstractions like React’s Virtual DOM are actually too slow. Developers drop down to VanillaJS to talk directly to the browser hardware.

- **Figma & Miro**: The core vector graphics and collaborative layout workspaces bypass traditional framework rendering loops entirely. They use VanillaJS to directly manipulate the HTML5 Canvas, WebGL, and browser window resize loops.
- **Web-Based Games**: Heavy interactive browser titles (like Wordle, standard browser MMORPGs, and physics engines) use VanillaJS to handle the game execution loop without any framework layout overhead. \[[1](https://javascript.plainenglish.io/back-to-basics-why-vanilla-javascript-is-reclaiming-the-web-in-the-2020s-757bc7b44ddd)]

### 3. Micro-Scripts and Embedded Widgets \[[1](https://distantjob.com/blog/vanillajs-vs-react/)]

If you are writing code that will be injected into _other_ people's websites, using a framework is a disaster because it might conflict with their tools.

- **Analytics Tools (Google Analytics, Mixpanel)**: Tracking tags must be completely invisible to performance. They are written in raw, highly optimized VanillaJS. \[[1](https://floatui.com/blog/building-javascript-user-interface-components), [2](https://dev.to/lissy93/i-built-an-app-in-every-frontend-framework-4a9g)]
- **Chat Widgets (Intercom, Zendesk)**: The slide-out customer support chat bubbles you see on modern websites use VanillaJS so they can load safely on any site without breaking the parent app.
- **Ad Tech (Google AdSense)**: Advertisements must load asynchronously and instantly without dependency lock-in.

### 4. Native Browser Developer Tooling \[[1](https://www.youtube.com/watch?v=Qt9hapSzQPY)]

- **Chrome DevTools & Safari Web Inspector**: The software built into your browser to inspect websites is itself a web app. It is written in highly tuned VanillaJS to ensure that inspecting a web page doesn't crash the browser engine.

***

### The Verdict on VanillaJS Adoption

| Use Case \[[1](https://dev.to/polliog/astro-in-2026-why-its-beating-nextjs-for-content-sites-and-what-cloudflares-acquisition-means-6kl)] | 🟢 Why VanillaJS is Chosen                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Max SEO & Core Web Vitals**                                                                                                             | 0 KB bundle size means perfect Google page-speed scores out of the box.           |
| **Total Security Isolation**                                                                                                              | Fewer open-source dependencies mean an incredibly low risk of supply-chain hacks. |
| **Infinite Longevity**                                                                                                                    | VanillaJS code written in 1999 still runs perfectly in modern browsers today.     |

**Summary**: If a web project requires **maximum speed, visual rendering control, or absolute freedom from third-party updates**, engineers always revert to VanillaJS.

Are you looking to use VanillaJS to **optimize an existing site's performance**, or are you deciding whether to skip frameworks entirely for a **new utility app**?

- [link](https://framework-benchmarks.as93.net/vanilla/)\
  Vanilla JS\
  May 15, 2026 — Native DOM APIs Direct use of document. querySelector() , createElement() , addEventListener() and other native browser APIs. No a...\
  \
  \
  framework-benchmarks.as93.net
- [link](https://hackernoon.com/lets-talk-about-vanilla-javascript-what-is-vanilla-js-and-why-should-i-spend-any-time-on-it-sb2f3522)\
  Let's Talk About Vanilla JavaScript: What Is Vanilla JS, and Why Should I Spend Any Time On It?\
  Apr 10, 2021 — What is vanilla JS, and why should I spend any time on it? “Vanilla JS” is a casual nickname for the programming language JavaScri...\
  \
  \
  HackerNoon
- [link](https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks)\
  Learn Vanilla JavaScript Before Fancy Frameworks\
  Mar 24, 2022 — What is "Vanilla JavaScript"? Let me quote an answer from koenpeters on Stack Overflow: "VanillaJS ( Vanilla JavaScript ) is a nam...\
  \
  \
  Snipcart

Show all

## You said: where is vanillajs (not web component) adopted on complex web apps

When it comes to **highly complex web applications**—meaning apps with massive datasets, real-time collaboration, heavy user routing, and deep business logic—VanillaJS (without frameworks or native web components) is adopted <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">under <strong>two very specific engineering philosophies</strong></mark>: \[[1](https://www.reddit.com/r/javascript/comments/1rz3d1e/askjs%5Fwriting%5Fa%5Fcomplex%5Fweb%5Fapps%5Ffrontend%5Fusing/), [2](https://lemon.io/answers/vanilla-js/what-is-the-difference-between-vanilla-js-and-javascript/), [3](https://www.reddit.com/r/javascript/comments/1rz3d1e/askjs%5Fwriting%5Fa%5Fcomplex%5Fweb%5Fapps%5Ffrontend%5Fusing/), [4](https://fireart.studio/blog/node-js-applications-types-and-examples/)]

You either see it inside **hyper-performant, math/canvas-heavy visual apps** where a virtual framework overhead would crush the browser, or inside **legacy titan apps** that were built before modern frameworks existed, forcing them to architect their own internal version of a framework.

***

### 1. Canvas, Canvas, WebGL, and Graphic-Heavy Engines \[[1](https://www.reddit.com/r/javascript/comments/rgy7fm/askjs%5Fwp%5Fvs%5Fvanilla%5Fjs%5Fvs%5Freact%5Ffor%5Fmvp%5Fas%5Fnon/)]

When an application's complexity comes from **60 FPS visual rendering** rather than just forms, text, and data syncing, standard web frameworks actually get in the way. For these apps, the standard DOM tree is abandoned entirely in favor of painting direct pixels.

- **Figma**: The main editor canvas where you draw rectangles, layer objects, and collaborate with hundreds of people in real-time does not use React or Vue. It is a highly optimized engine written in **VanillaJS** (and WebAssembly/C++) that bypasses the DOM completely and hooks directly into the browser's hardware APIs via WebGL. \[[1](https://medium.com/@ajinkyahnaik/12-web-applications-that-use-javascript-3f984c05a3e0), [2](https://medium.com/design-bootcamp/stop-decorating-the-components-describe-the-system-17471e9afd4c), [3](https://floatui.com/blog/building-javascript-user-interface-components), [4](https://lemon.io/answers/vanilla-js/what-are-the-disadvantages-of-vanilla-js/)]
- **Miro & Lucidchart**: These heavy collaborative whiteboarding tools use native, pure JavaScript event listeners (`mousemove`, `pointerdown`) to capture user actions and immediately compute pixel updates on an HTML5 tag, maintaining extreme speed without Virtual DOM diffing overhead.
- **Google Maps**: The primary web interface of Google Maps relies on specialized, low-level VanillaJS to control map tiles, fluid zoom animations, and continuous data rendering. \[[1](https://www.ironhack.com/us/blog/10-major-companies-using-javascript)]

### 2. High-Frequency Real-Time Dashboards

When a web app handles data streams that update multiple times a second, tracking that data via framework state wrappers like React's `useState` causes a bottleneck.

- **Financial Trading Terminals (Bloomberg/High-Frequency Dashboards)**: Custom internal trading desks and complex telemetry monitors often use VanillaJS combined with native browser `WebSocket` connections. When new pricing data streams in, the developers write surgical VanillaJS to update the exact text string on screen, completely preventing layout thrashing.

### 3. The "Legacy Titans" (Custom-Built Framework Architectures)

Several massive, incredibly complex enterprise web applications were built long before React, Angular, or Vue existed. Instead of rewriting billions of lines of code into a trendy framework, these companies stayed on VanillaJS but built highly structured, private routing and modular loading layers over the top of it.

- **Gmail**: Gmail is arguably the most complex Single Page Application (SPA) in web history. It runs on a massive ecosystem of highly tailored, object-oriented VanillaJS. To keep it organized at scale, Google uses the **Google Closure Compiler**, a tool that analyzes raw VanillaJS, optimizes it, checks for deep type safety, and compiles it into an incredibly compact, fast machine execution layer. \[[1](https://www.ironhack.com/us/blog/10-major-companies-using-javascript)]
- **Amazon (The Retail Core)**: While AWS uses various frameworks, the primary consumer retail site (the cart, product page, multi-step checkout pipeline) relies heavily on a highly strict, modular VanillaJS architecture. Teams construct decoupled modules that interact strictly through global, native event brokers to prevent one broken feature from bringing down the entire storefront.

### 4. Code Editors and IDEs

- **Monaco Editor (The Engine Behind VS Code)**: The actual code editing window inside Microsoft's VS Code on the desktop and on the web (like GitHub Codespaces) is built almost purely with VanillaJS. Handling thousands of lines of text, syntax highlighting, syntax linting, and multi-cursor typing requires manual layout math and strict string slicing that raw JavaScript handles exceptionally well without a framework middleware layer.

***

### The Architecture Secret: How do they handle complexity without a framework? \[[1](https://www.reddit.com/r/javascript/comments/1rz3d1e/askjs%5Fwriting%5Fa%5Fcomplex%5Fweb%5Fapps%5Ffrontend%5Fusing/)]

If you build a complex app in VanillaJS like you would a simple todo list, it will instantly decay into unmaintainable "spaghetti code". To manage massive scope, teams using VanillaJS adopt strict architectural patterns: \[[1](https://news.ycombinator.com/item?id=22759101), [2](https://blog.webix.com/vanillajs-vs-framework-when-using-js-libraries/)]

1. **The Publisher/Subscriber (PubSub) Pattern**: Modules never speak to each other directly. A search box module will simply fire a native browser event (`window.dispatchEvent`). A user directory module on the other side of the app listens for that event and updates itself.
2. **State via JS Proxies**: Instead of a library like Redux, developers wrap their main data object in a native JavaScript `Proxy`. The proxy intercepts any data mutations and automatically runs target DOM updates under the hood. \[[1](https://dev.to/abanoubkerols/you-might-not-need-a-framework-building-modern-web-apps-with-vanilla-javascript-37dd), [2](https://dev.to/prathmesh%5Fpro/building-rynex-a-175kb-typescript-framework-without-virtual-dom-5gki)]
3. **Strict File Separation via ES Modules**: Files are broken down into incredibly small, single-responsibility functions and imported cleanly using standard `import/export` syntax. \[[1](https://dev.to/marie%5Fberezhna/what-are-vanilla-js-modules-4deg)]

***

Are you researching VanillaJS for a **highly visual data application** (like charts, graphs, or maps), or are you trying to organize a **traditional data-driven SPA** without leaning on a framework boilerplate? \[[1](https://www.reddit.com/r/javascript/comments/1rz3d1e/askjs%5Fwriting%5Fa%5Fcomplex%5Fweb%5Fapps%5Ffrontend%5Fusing/)]

- [link](https://www.reddit.com/r/javascript/comments/1rz3d1e/askjs%5Fwriting%5Fa%5Fcomplex%5Fweb%5Fapps%5Ffrontend%5Fusing/)\
  \[AskJS] writing a complex web app's frontend using ... - Reddit\
  Mar 20, 2026 — All of that could pretty easily be "vanilla" JS... Maybe a few dozen lines. But has obvious compatibility limits and doesn't do SS...\
  Reddit·r/javascript
- [link](https://news.ycombinator.com/item?id=22759101)\
  The problem with vanilla JS is not APIs, API is the easy thing ...\
  The problem with vanilla JS is not APIs, API is the easy thing. The problem is building proper architecture, so code won't quickly...\
  Hacker News
- [link](https://blog.webix.com/vanillajs-vs-framework-when-using-js-libraries/)\
  Vanilla JS vs JavaScript vs Frameworks, and When to Use Them\
  Sep 6, 2024 — As developers, we often honor the facility and lightweight nature of Vanilla JS. It guarantees a clean and simple approach to deve...\
  Webix Blog

Show all

# compare todo app in react or in vanillajs (not web components)

Building a Todo application is an excellent way to compare React and Vanilla JavaScript. <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">React uses a <strong>declarative</strong> approach driven by state, while Vanilla JS relies on an <strong>imperative</strong> approach driven by direct DOM manipulation</mark>. \[[1](https://dev.to/pettiboy/build-a-todo-app-using-vanilla-javascript-3d5), [2](https://namastedev.com/blog/build-a-todo-app-with-react-and-localstorage-9/), [3](https://medium.com/@ellishim/tell-me-why-i-should-leave-vanilla-js-world-e8ddfd348cbe), [4](https://javascript.plainenglish.io/controlled-vs-uncontrolled-components-in-react-what-i-wish-i-knew-earlier-447d8cf8ce82), [5](https://news.ycombinator.com/item?id=22759101)]

Here is a comprehensive comparison across key development metrics.

### Architecture & State Management

- **React (Declarative):** You define how the UI _should_ look based on the current state. When the todo list array changes, React automatically updates the DOM.
- **Vanilla JS (Imperative):** You must write step-by-step instructions. You manually create elements, append them, change classes, and delete nodes when a todo is added or removed. \[[1](https://dilipkumar.medium.com/react-js-foundation-a59f66cbd4d5), [2](https://medium.com/@ellishim/tell-me-why-i-should-leave-vanilla-js-world-e8ddfd348cbe), [3](https://learning-zone.github.io/react-basics/)]

### Performance

- **React:** Uses a Virtual DOM. It calculates changes in memory and updates only the modified elements. This introduces a slight initial framework overhead but handles large-scale updates efficiently.
- **Vanilla JS:** Interacts directly with the real DOM. For a simple Todo app, Vanilla JS is faster and lighter because it has zero framework overhead and a tiny file size. \[[1](https://thenewstack.io/typescript-vs-react-js/), [2](https://www.bigscal.com/blogs/frontend/react-js-versus-html-check-out-the-difference/), [3](https://nareshit.com/blogs/top-features-of-react-js-for-beginners), [4](https://www.techforceservices.com/blog/react-use-cases/), [5](https://proxify.io/articles/react-vs-javascript)]

### Code Complexity & Maintainability

- **React:** High initial boilerplate (components, build tools, NPM packages). However, as features grow (e.g., filtering, editing, tags), the component-based architecture keeps the code organized and easy to maintain.
- **Vanilla JS:** Zero setup. You can write everything in a single HTML and JS file. However, as features grow, the code easily turns into "spaghetti code" because UI logic and data logic are tightly tangled together. \[[1](https://www.tekrevol.com/blogs/best-frontend-frameworks-for-app-development/), [2](https://www.dhiwise.com/post/development-process-with-react-isomorphic-boilerplate), [3](https://www.evozon.com/web-applications-vs-websites-a-comprehensive-analysis-in-the-react-framework/), [4](https://authorselvi.com/react-or-vue-which-is-better-for-building-your-website-or-app/), [5](https://lemon.io/answers/vanilla-js/why-use-vanilla-js-over-react-js/)]

### Comparison Summary

| Metric \[[1](https://medium.com/deno-the-complete-reference/get-started-with-react-by-migrating-a-simple-vanilla-js-app-afe0d60a64f6), [2](https://apidog.com/blog/react-tutorial-a-beginners-guide/), [3](https://www.builder.io/m/knowledge-center/best-react-cms), [4](https://trio.dev/vue-vs-react/), [5](https://eluminoustechnologies.com/blog/preact-vs-react/)] | React                     | Vanilla JS                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | -------------------------- |
| **Initial Setup**                                                                                                                                                                                                                                                                                                                                                        | Complex (Vite/Next.js)    | Instant (Single file)      |
| **Bundle Size**                                                                                                                                                                                                                                                                                                                                                          | Larger (~40KB+ framework) | Tiny (Few KBs of raw code) |
| **Scaling Up**                                                                                                                                                                                                                                                                                                                                                           | Highly scalable           | Hard to maintain           |
| **State Sync**                                                                                                                                                                                                                                                                                                                                                           | Automatic via `useState`  | Manual DOM updates         |

### Code Example: Adding a Todo

### React Approach

jsx

```
// State drives the UI
const [todos, setTodos] = useState([]);

const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text }]);
};

// UI renders automatically based on todos array
return (
  <ul>
    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
  </ul>
);
```

Use code with caution.

### Vanilla JS Approach

javascript

```
// Manual DOM manipulation required for every change
const todoList = document.getElementById('todo-list');

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;

  // Must manually append to the DOM
  todoList.appendChild(li);
}
```

Use code with caution.

To help you choose the best approach, let me know:

- What is the **purpose** of this project? (learning, a portfolio piece, production?)

- Do you plan to add **complex features** later? (APIs, user accounts, drag-and-drop?)

- What is your current **experience level** with JavaScript frameworks?

- [link](https://dev.to/pettiboy/build-a-todo-app-using-vanilla-javascript-3d5)\
  Build a TODO app using Vanilla JavaScript\
  Jul 16, 2022 — Now that we can build a TODO app using JavaScript, we will use a popular framework called React to build this app and see how it c...\
  \
  \
  DEV Community

- [link](https://namastedev.com/blog/build-a-todo-app-with-react-and-localstorage-9/)\
  Build a Todo App with React and LocalStorage\
  Jul 27, 2025 — Build a Todo App with React and LocalStorage Building a simple Todo app is a rite of passage for many web developers, and it serve...\
  \
  \
  NamasteDev

- [link](https://medium.com/@ellishim/tell-me-why-i-should-leave-vanilla-js-world-e8ddfd348cbe)\
  Tell me why I should leave Vanilla JS world\
  Jan 10, 2018 — On the other side of the hill in React ( Framework: React ) world, however, everyone seems to be frolicking in paradise. In the de...\
  \
  \
  Medium

Show all

## You said: complex todo

Building a complex Todo application changes the evaluation drastically. When you introduce advanced features, React’s structured data flow becomes highly efficient, while Vanilla JS becomes incredibly difficult to manage due to manual DOM tracking.

Here is how React and Vanilla JS handle complex features.

### Advanced State & UI Syncing

- **React:** Features like drag-and-drop, multi-category filtering, and nested sub-tasks are handled by updating a central state object. React automatically redraws the affected UI elements. \[[1](https://www.greatfrontend.com/react-interview-playbook/react-thinking-declaratively)]
- **Vanilla JS:** You must write custom event listeners and manually search, update, or remove specific HTML elements using complex queries (`querySelector`, `closest()`). A single bug can break the entire UI state.

### Feature Complexity Comparison

| Feature \[[1](https://www.reddit.com/r/ObsidianMD/comments/1t1tt4e/obsidian%5Ftodo/), [2](https://marketplace.visualstudio.com/items?itemName=AlpacaTech.todosfinder), [3](https://www.linkedin.com/pulse/building-simple-todo-list-using-react-adriano-palmieri-otjxc), [4](https://medium.com/@amitwebdev2020/these-react-fundamentals-should-be-crystal-clear-understand-them-through-practical-scenarios-7c7ebcfbbd04), [5](https://medium.com/@amitwebdev2020/these-react-fundamentals-should-be-crystal-clear-understand-them-through-practical-scenarios-7c7ebcfbbd04)] | React Implementation                                                         | Vanilla JS Implementation                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Global Filtering** _(Tags, Priorities, Dates)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Simple `.filter()` array method inside the render function.                  | Must clear the DOM container and rebuild all elements from scratch, or toggle hide classes on individual nodes.    |
| **API Integration** _(Backend sync, loading states)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Handled easily with `useEffect` or React Query to update state variables.    | Requires manual tracking of loading spinners, handling race conditions, and updating elements upon response.       |
| **Drag & Drop** _(Reordering lists)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Readily supported by robust libraries like `@hello-pangea/dnd` or `dnd-kit`. | Requires writing raw HTML5 Drag and Drop API code, tracking array indices manually, and updating the DOM layout.   |
| **Undo/Redo History**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Simple to implement by saving an array of past state snapshots.              | Extremely difficult. Requires deeply cloning data and manually re-rendering the entire page layout for every step. |

### Architectural Patterns

### The React Architecture

React uses unidirectional data flow. Your data flows down from a central store (or Context API/Redux) into isolated, reusable components (e.g., , , ). \[[1](https://javascript.plainenglish.io/react-component-thinking-breaking-down-uis-like-a-pro-7ce0cd7c28a0), [2](https://medium.com/@jhakeshav14275/essential-react-concepts-you-must-know-for-developers-interviews-995bf7e690db)]

```
[Global State: Tasks, Filters, User]
         │
         ├───> <Sidebar /> ───> (Displays Categories)
         │
         └───> <MainList /> ──> <TaskItem /> (Displays filtered tasks)
```

### The Vanilla JS Architecture

Without a framework, you must build a custom **MVC (Model-View-Controller)** or Pub/Sub pattern from scratch. If you do not decouple your data from your DOM nodes, your script will quickly turn into unmaintainable spaghetti code.

```
[User Clicks Delete] ──> [DOM Event Listener] ──> [Update Data Array]
         │                                               │
         └── [Manually Find <li> Node] <─────────────────┘
         │
         └── [Remove <li> From Parent]
```

### Recommendation

- **Choose React** if you want to build this efficiently, use existing libraries for complex UI elements (like drag-and-drop), and write scalable, production-grade code. \[[1](https://www.linkedin.com/pulse/building-simple-todo-list-using-react-adriano-palmieri-otjxc), [2](https://hofmadresu.com/2018/06/07/todo-react-native.html)]
- **Choose Vanilla JS** only if your primary goal is a deep-dive educational exercise to understand modern framework architecture under the hood. \[[1](https://riseuplabs.com/react-development-ultimate-guide/)]

To guide your next steps, tell me:

- Which **specific complex features** do you want to build first? (e.g., database sync, drag-and-drop, analytics dashboards)

- Do you want to see a **folder structure template** for organizing a complex React app?

- [link](https://www.greatfrontend.com/react-interview-playbook/react-thinking-declaratively)\
  Thinking Declaratively in React\
  UI updates automatically: When tasks or filter changes, React re-renders the UI accordingly\
  \
  \
  GreatFrontEnd

- [link](https://www.reddit.com/r/ObsidianMD/comments/1t1tt4e/obsidian%5Ftodo/)\
  Obsidian todo : r/ObsidianMD\
  May 2, 2026 — You can also do GLOBAL filters at the very top board level to only show: Tasks with a priority, so that any task that has NO prior...\
  \
  \
  Reddit

- [link](https://marketplace.visualstudio.com/items?itemName=AlpacaTech.todosfinder)\
  TODOs Finder\
  Jun 25, 2024 — Setting Custom Values Tag: Custom tag to search for TODOs. Example: BUG . By default the extension will search for the keyword TOD...\
  \
  \
  Visual Studio Marketplace

Show all

## You said: code

Here is a side-by-side code comparison implementing a complex feature: **Filtering by Status (All / Active / Completed)** and **Computing Analytics (Remaining Tasks Count)**.

Notice how the React code scales cleanly by focusing entirely on data, while the Vanilla JS code must constantly bridge the gap between data and the visual DOM.

### 1. The React Version

React handles filtering and counts on the fly during render based entirely on the state.

jsx

```
import React, { useState, useMemo } from 'react';

export default function ComplexTodo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build complex app", completed: false },
  ]);
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  // Compute derived state automatically on render
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  }, [todos, filter]);

  const remainingCount = useMemo(() => {
    return todos.filter(todo => !todo.completed).length;
  }, [todos]);

  // State handlers
  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="todo-app">
      {/* Analytics Counter */}
      <div>Items left: {remainingCount}</div>

      {/* Filter Tabs */}
      <div className="filters">
        {['all', 'active', 'completed'].map(type => (
          <button
            key={type}
            className={filter === type ? 'active' : ''}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* List Render */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Use code with caution.

***

### 2. The Vanilla JS Version

In Vanilla JS, you cannot simply filter an array; you must manually clear the DOM containers, recreate individual HTML elements, and re-bind event listeners every time a user changes a filter or toggles a task.

### HTML Structure

html

```
<div class="todo-app">
  <div id="counter">Items left: 0</div>

  <div class="filters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="active">Active</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
  </div>

  <ul id="todo-list"></ul>
</div>
```

Use code with caution.

### JavaScript Logic

javascript

```
// Central Data State
let todos = [
  { id: 1, text: "Learn Vanilla JS", completed: true },
  { id: 2, text: "Build complex app", completed: false }
];
let currentFilter = 'all';

// DOM Cache
const todoListEl = document.getElementById('todo-list');
const counterEl = document.getElementById('counter');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Function (The hardest part: manually syncing UI to State)
function render() {
  // 1. Clear existing list and DOM event memory leaks
  todoListEl.innerHTML = '';

  // 2. Filter the array data
  const filtered = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  // 3. Manually build DOM nodes for each todo item
  filtered.forEach(todo => {
    const li = document.createElement('li');
    if (todo.completed) li.style.textDecoration = 'line-through';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    // Manually tie an event listener to this specific new element
    checkbox.addEventListener('change', () => {
      todo.completed = !todo.completed;
      render(); // Must trigger full UI re-render manual loop
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = todo.text;

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    todoListEl.appendChild(li);
  });

  // 4. Manually update analytics counter text
  const remaining = todos.filter(todo => !todo.completed).length;
  counterEl.textContent = `Items left: ${remaining}`;
}

// Global Filter Button Events
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    currentFilter = e.target.getAttribute('data-filter');
    render(); // Trigger re-render
  });
});

// Initial Load execution
render();
```

Use code with caution.

### Key Differences in Action

1. **Event Listeners:** React attaches an event listener once declaratively (`onChange={() => toggleTodo(todo.id)}`). Vanilla JS must clear out elements and re-bind new `.addEventListener()` callbacks inside a dynamic loop every single time a render occurs.
2. **Mental Model:** In React, if you want to add an **"Undo" button**, you just save previous states to an array. In Vanilla JS, adding an undo button means parsing strings out of DOM elements or heavily engineering custom tracking wrappers.

Would you like to build upon one of these templates to include a specific complex feature like **Local Storage caching** or an **API fetch integration**?

# todomvc

**[TodoMVC](https://todomvc.com/)** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a highly popular open-source project designed to help web developers <strong>compare JavaScript frameworks</strong> by showing the exact same Todo application implemented across dozens of different programming tools</mark>. Because each version follows the identical functional specification and look, developers can side-by-side evaluate code syntax, structure, and readability to decide which library best fits their workflow. \[[1](https://todomvc.com/), [2](https://github.com/tastejs/todomvc)]

### Key Features of TodoMVC

- **The Rosetta Stone of Frameworks**: It offers standardized implementations for popular tools like [React](https://todomvc.com/examples/react/dist/), [Vue](https://todomvc.com/examples/vue/dist/), [Svelte](https://todomvc.com/examples/svelte/dist/), and [Angular](https://todomvc.com/examples/binding-scala/).
- **Strict Specification**: Every example must implement core features like adding, editing, deleting, routing (filtering all/active/completed tasks), and persisting items via `localStorage`.
- **Performance Benchmarking**: The project forms the engine core for the cross-browser [Speedometer benchmark](https://github.com/tastejs/todomvc) used by major browser creators to optimize UI rendering speeds.
- **No-Build Benchmarks**: It also serves as a baseline comparison for [Modern Vanilla JavaScript](https://github.com/1Marc/modern-todomvc-vanillajs) to show how modern web standards stack up against heavy frameworks. \[[1](https://todomvc.com/examples/react/dist/), [2](https://todomvc.com/examples/vue/dist/), [3](https://data-star.dev/examples/todomvc), [4](https://github.com/evancz/elm-todomvc), [5](https://github.com/tastejs/todomvc/blob/master/app-spec.md), [6](https://github.com/1Marc/modern-todomvc-vanillajs), [7](https://frontendmasters.com/blog/vanilla-javascript-todomvc/), [8](https://github.com/tastejs/todomvc)]

### How to Use the Project

1. **Browse implementations**: Visit the official TodoMVC website to interact with the apps and view their code directly in the browser.
2. **Review the code**: Head to the TodoMVC GitHub Repository to explore files or download the base styles.
3. **Build your own**: You can use the official [TodoMVC App Template](https://github.com/tastejs/todomvc-app-template) to test a new framework or practice architectural patterns. \[[1](https://todomvc.com/), [2](https://github.com/tastejs/todomvc), [3](https://github.com/tastejs/todomvc-app-css), [4](https://github.com/tastejs/todomvc-app-template), [5](https://www.wimdeblauwe.com/blog/2021/09/20/todomvc-with-spring-boot-and-thymeleaf-part-1/)]

Are you looking to **compare specific frameworks** (like React vs. Vue), or do you want to **build your own TodoMVC app** using a particular library?

- [link](https://todomvc.com/)\
  TodoMVC\
  New = New or updated app. TodoMVC is a godsend for helping developers find what well-developed frameworks match their mental model...\
  TodoMVC
- [link](https://github.com/tastejs/todomvc)\
  tastejs/todomvc: Helping you select a JavaScript framework\
  Jun 7, 2026 — Website Blog TasteJS. Developers have a number of choices today when it comes to selecting a JavaScript framework or UI library fo...\
  GitHub
- [link](https://github.com/evancz/elm-todomvc)\
  The TodoMVC app written in Elm, nice example for beginners.\
  TodoMVC in Elm - Try It! All of the Elm code lives in src/Main. elm and relies on the elm/html library. There also is a port handl...\
  GitHub

Show all

## You said: react code and vanillajs (not web component) code

The core architectural difference between **React** and **Vanilla JS** is state management: React automatically re-renders the UI declaratively when the data state changes, whereas Vanilla JS requires you to manually select, mutate, and sync DOM elements using imperative commands. \[[1](https://www.codetinkerer.com/2024/01/04/forget-virtual-dom-rediscovering-vanilla-dom.html), [2](https://frontendmasters.com/blog/vanilla-javascript-todomvc/), [3](https://distantjob.com/blog/vanillajs-vs-react/), [4](https://www.sitepoint.com/redux-without-react-state-management-vanilla-javascript/), [5](https://medium.com/@mirceagab/integrating-modern-frontend-frameworks-with-aem-fa5a649e1095)]

Below is a side-by-side comparative look at how a simplified version of the core **TodoMVC logic** (adding and toggling a task) is written in both setups, excluding Web Components.

***

### 1. React Implementation (Declarative)

In **React**, you focus entirely on updating a JavaScript data array (`todos`). The framework intercepts state changes via hooks and handles all DOM modifications behind the scenes. \[[1](https://frontendmasters.com/blog/vanilla-javascript-todomvc/), [2](https://javascript.plainenglish.io/a-quickstart-to-reactjs-2021-3bf88eae7719)]

jsx

```
import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 1. Add Todo (Updates state array)
  const addTodo = (e) => {
    if (e.key !== 'Enter' || !input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  // 2. Toggle Todo (Updates item property in state)
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // UI mapping is entirely driven by data
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTodo}
          placeholder="What needs to be done?"
        />
      </header>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <label>{todo.text}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Use code with caution.

***

### 2. Modern Vanilla JS Implementation (Imperative)

Without Web Components or templates, **Vanilla JS** requires you to explicitly use DOM methods like `document.createElement`, target individual element properties, and push elements manually into the UI tree. \[[1](https://www.codetinkerer.com/2024/01/04/forget-virtual-dom-rediscovering-vanilla-dom.html)]

javascript

```
// Target existing static HTML nodes
const newTodoInput = document.querySelector('.new-todo');
const todoList = document.querySelector('.todo-list');

// 1. Add Todo (Manual DOM element construction)
newTodoInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' || !newTodoInput.value.trim()) return;

  const todoText = newTodoInput.value.trim();

  // Create outer list element
  const li = document.createElement('li');

  // Create checkbox input
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'toggle';

  // 2. Toggle Todo (Manual DOM event manipulation)
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  // Create text label
  const label = document.createElement('label');
  label.textContent = todoText;

  // Assembly and DOM injection
  li.appendChild(checkbox);
  li.appendChild(label);
  todoList.appendChild(li);

  // Reset input field
  newTodoInput.value = '';
});
```

Use code with caution.

***

### Summary of Differences

| Feature \[[1](https://www.codetinkerer.com/2024/01/04/forget-virtual-dom-rediscovering-vanilla-dom.html), [2](https://github.com/johnfactotum/todomvc), [3](https://frontendmasters.com/blog/vanilla-javascript-todomvc/), [4](https://dev.to/ekeijl/no-build-todo-app-using-htm-preact-209p), [5](https://github.com/1Marc/modern-todomvc-vanillajs)] | React                                      | Vanilla JS                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------ |
| **UI Updates**                                                                                                                                                                                                                                                                                                                                         | Automatic (via virtual DOM adjustments)    | Manual (via direct `appendChild` / `classList`)  |
| **Data Source**                                                                                                                                                                                                                                                                                                                                        | Pure JS state array (`todos`)              | Scattered between JS scope and the HTML DOM tree |
| **Code Style**                                                                                                                                                                                                                                                                                                                                         | **Declarative** (Describes _what_ to show) | **Imperative** (Describes _how_ to build it)     |
| **Build Tools**                                                                                                                                                                                                                                                                                                                                        | Requires transpiling (Babel / JSX)         | Runs completely natively in any modern browser   |

Would you like to see how to implement **routing/filtering** (Active, Completed, All) using either of these approaches? \[[1](https://github.com/johnfactotum/todomvc)]

- [link](https://www.codetinkerer.com/2024/01/04/forget-virtual-dom-rediscovering-vanilla-dom.html)\
  Maybe you don't need React – Rediscovering the Vanilla DOM\
  Jan 4, 2024 — Write the same React code you're used to–even with JSX-like syntax thanks to htm–but ditch all the bloat. No build step required! ...\
  codetinkerer.com
- [link](https://frontendmasters.com/blog/vanilla-javascript-todomvc/)\
  Writing a TodoMVC App with Modern Vanilla JavaScript\
  Sep 8, 2022 — #1: “Frameworks Enable Declarative UI” Modern frameworks like React and Vue don't exist to fill in the gap left by native JS, they...\
  Frontend Masters
- [link](https://github.com/johnfactotum/todomvc)\
  TodoMVC in ~100 lines of vanilla JavaScript - GitHub\
  The result. To experiment with this approach, I made a TodoMVC implementation. It contains only 101 lines of code in vanilla JavaS...\
  GitHub

Show all

## You said: write an elegant vanillajs code that feels like react

To make Vanilla JS feel like React, you need to move away from messy, manual DOM manipulation (`appendChild`, `classList`) and embrace a **declarative, state-driven model**.

The code below implements the core TodoMVC logic using a lightweight approach: your UI is an automatic function of your state. Whenever you modify the `state`, a `render()` function automatically updates the DOM.

### The Code Pattern (State → View)

javascript

```
// 1. Single Source of Truth (The State)
const state = {
  todos: [],
  filter: 'all' // 'all' | 'active' | 'completed'
};

// 2. State Mutators (Like React actions / setters)
function setState(newState) {
  Object.assign(state, newState);
  render(); // Automatically trigger a UI update on state change
}

// 3. Declarative Component (Pure function that returns an HTML string)
function TodoList() {
  // Filter todos based on current state
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  // Map state arrays directly to template strings (Identical concept to JSX .map)
  return filteredTodos.map(todo => `
    <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
      <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
      <label>${escapeHTML(todo.text)}</label>
      <button class="destroy"></button>
    </li>
  `).join('');
}

// 4. The Render Engine (Updates the DOM container)
function render() {
  const todoListContainer = document.querySelector('.todo-list');
  if (todoListContainer) {
    todoListContainer.innerHTML = TodoList();
  }

  // Keep active count updated
  const activeCount = state.todos.filter(t => !t.completed).length;
  document.querySelector('.todo-count strong').textContent = activeCount;
}

// 5. Global Event Delegation (Instead of inline onClick, capture bubbling events)
document.addEventListener('keydown', (e) => {
  if (e.target.classList.contains('new-todo') && e.key === 'Enter') {
    const text = e.target.value.trim();
    if (!text) return;

    // Push to state and let render handle the UI
    setState({
      todos: [...state.todos, { id: Date.now().toString(), text, completed: false }]
    });
    e.target.value = '';
  }
});

document.addEventListener('change', (e) => {
  if (e.target.classList.contains('toggle')) {
    const id = e.target.closest('li').dataset.id;
    const updatedTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: e.target.checked } : todo
    );
    setState({ todos: updatedTodos });
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('destroy')) {
    const id = e.target.closest('li').dataset.id;
    setState({ todos: state.todos.filter(todo => todo.id !== id) });
  }
});

// Helper utility to prevent XSS injection in template strings
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g,
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Initial Bootstrapping
render();
```

Use code with caution.

***

### Why This Feels Like React

- **Declarative Templates**: Instead of step-by-step element creation, you describe the HTML structure using standard JavaScript **template strings**.
- **Unidirectional Data Flow**: Events do not touch the DOM directly. Events modify `state` → `state` calls `render()` → `render()` draws the DOM.
- **No DOM Queries in Actions**: Notice that inside the checkbox change handler or the delete handler, there is zero code targeting CSS classes or hiding elements. It purely updates the data array.

Would you like to see how to hook up **URL Hash Routing** (`#/active`, `#/completed`) to this code to mirror TodoMVC perfectly?

# does npm libraries lock version by default

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>No, npm does not lock library versions to an exact version by default</strong> when you add a new dependency</mark>. \[[1](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8), [2](https://www.quora.com/Why-doesnt-NPM-enforce-fixed-version-dependencies)]

Instead, it allows for flexible updates using standard semantic versioning (SemVer) ranges. However, npm handles version locking differently depending on whether you are talking about your local development environment or a published library package. \[[1](https://medium.com/@gfaganli/understanding-npm-semantic-versioning-and-package-lock-json-bc0563c66e39), [2](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8), [3](https://github.com/orgs/community/discussions/164417), [4](https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/lockfiles-nodejs)]

### 1. How npm Saves Direct Dependencies (`package.json`)

When you run , npm automatically prefixes the version number with a **caret (`^`)** in your `package.json` file. \[[1](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8)]

- **The Caret (`^`) Behavior:** If npm installs version `1.2.3`, it saves it as `^1.2.3`. This tells npm that any future installs can safely update to newer minor or patch versions (e.g., `1.3.0` or `1.2.4`), but it will block major breaking changes (like `2.0.0`).
- **If you want exact locking:** You must explicitly pass a flag by running or configure your global npm settings to always use exact versions. \[[1](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8), [2](https://docs.npmjs.com/cli/v6/using-npm/config/), [3](https://www.reddit.com/r/node/comments/7zd4re/whats%5Fthe%5Fpoint%5Fof%5Fpackagelockjson%5Fwhen%5Fits%5Fnot/), [4](https://www.davidbuckell.com/blogs/software-development/front-end-development/nodejs/update-all-node-dependencies-to-latest-version/), [5](https://graphql.guide/background/node-npm-and-nvm/)]

### 2. How npm Locks Local Projects (`package-lock.json`)

While `package.json` uses a flexible range, npm _does_ generate a **`package-lock.json`** file by default when you run installs. \[[1](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json/), [2](https://medium.com/@manojbicte/understanding-npm-versioning-lock-files-and-updates-a-beginners-guide-344cbfcfaf09)]

- This lockfile records the **exact, literal version** of every direct and nested (transitive) dependency installed in your `node_modules`.
- When a teammate clones your repository and runs `npm install`, npm will read the `package-lock.json` to install those exact identical versions so everyone stays on the same page.
- _Note:_ Running standard `npm install` can still update your `package-lock.json` if a dependency range in `package.json` is manually changed. To guarantee zero changes to your lockfile during deployment or automated testing, you should always use the [npm ci](https://docs.npmjs.com/cli/v8/commands/npm-ci/) command instead. \[[1](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json), [2](https://medium.com/@manojbicte/understanding-npm-versioning-lock-files-and-updates-a-beginners-guide-344cbfcfaf09), [3](https://medium.com/openclassrooms-product-design-and-engineering/guide-to-managing-your-npm-packages-in-your-package-json-d315fe2ccab0), [4](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json/), [5](https://medium.com/@gfaganli/understanding-npm-semantic-versioning-and-package-lock-json-bc0563c66e39), [6](https://news.ycombinator.com/item?id=46027878), [7](https://support.deploybot.com/build-tools/why-developers-should-use-npm-ci-instead-of-npm-install-and-its-benefits), [8](https://docs.npmjs.com/cli/v8/commands/npm-ci/)]

### 3. How Versioning Works for Published Libraries

If you are building an npm package/library that other developers will install, **npm strictly ignores your library's `package-lock.json`**. \[[1](https://dev.to/aman%5Fkumar%5Fbdd40f1b711c15/best-practices-for-public-npm-packages-lock-files-publishing-dependency-management-4mmi), [2](https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/lockfiles-nodejs)]

- When an end-user installs your library, npm only reads your library's `package.json`.
- If your library has a dependency listed as `^1.2.3`, your end-user will get the absolute latest compatible version available on the public registry, not the pinned version you had in your local lockfile.
- If you absolutely must force your library's consumers to use a specific nested package version, you would have to use `npm shrinkwrap` instead of a standard lockfile. \[[1](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8), [2](https://medium.com/@gfaganli/understanding-npm-semantic-versioning-and-package-lock-json-bc0563c66e39), [3](https://www.quora.com/Why-doesnt-NPM-enforce-fixed-version-dependencies), [4](https://docs.npmjs.com/cli/v9/commands/npm-install/)]

If you are setting up a project, I can help you **configure your `.npmrc` file** to enforce exact version pinning automatically, or help you decide **whether to commit your lockfile** based on your project type. Which would you prefer?

- [link](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json)\
  Why does "npm install" rewrite package-lock.json?\
  Jul 10, 2017 — Short Answer: npm install honors package-lock. json only if it satisfies the requirements of package. json. If it doesn't satisfy ...\
  Stack Overflow
- [link](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8)\
  Everything You Wanted To Know About package-lock.json\
  Aug 11, 2017 — When you install a package with npm (and save it), an entry is added to your package. json containing the package name, and the se...\
  Medium·James Quigley
- [link](https://news.ycombinator.com/item?id=46027878)\
  Safe-NPM – only install packages that are +90 days old\
  Dec 3, 2025 — You are right that 'npm install' can upgrade versions even when a lock file is present, but AFAIK this should only happen it the l...\
  Hacker News

Show all

## You said: for example, how to make it predictable everywhere when you pnpm add

To make your dependencies perfectly predictable everywhere when using `pnpm add`, you need to configure `pnpm` to save exact versions and strictly enforce the lockfile.

### 1. Save Exact Versions in `package.json` \[[1](https://blog.stackademic.com/my-handy-little-helper-the-npmrc-file-in-my-project-setup-c8d7ec0f0946)]

By default, `pnpm` behaves like `npm` and adds a caret (`^`) prefix. You can change this behavior so `pnpm add` always saves the exact version. \[[1](https://tech-insider.org/pnpm-vs-npm-2026-2/), [2](https://projen.io/docs/quick-starts/typescript/hello-world/), [3](https://github.com/pnpm/pnpm/issues/4940), [4](https://adamcoster.com/blog/pnpm-config)]

- **For a single install:** Run (or `-E`).

- **Globally for all future installs:** Create an `.npmrc` file in the root of your project and add this line:\
  ini

<!---->

```
save-exact=true
```

Use code with caution.

### 2. Lock Transitive Dependencies (`pnpm-lock.yaml`) \[[1](https://dev.to/wilsonwangdev/lock-files-and-package-manager-migration-a-practical-risk-analysis-2ejn)]

Even with exact versions in `package.json`, nested dependencies (the libraries your libraries use) can still shift if they use ranges. `pnpm` automatically creates a `pnpm-lock.yaml` file to pin these exact versions. \[[1](https://medium.com/@raveenpanditha/understanding-dependencies-in-node-js-774e0f1d211c), [2](https://www.coinspect.com/blog/supply-chain-guardrails/), [3](https://betterstack.com/community/guides/scaling-nodejs/pnpm-explained/)]

- Always commit the `pnpm-lock.yaml` file to your Git repository.
- This ensures that every developer and server installs the identical dependency tree. \[[1](https://www.deployhq.com/blog/choosing-the-right-package-manager-npm-vs-yarn-vs-pnpm-vs-bun), [2](https://dart.dev/tools/pub/versioning), [3](https://betterstack.com/community/guides/scaling-nodejs/pnpm-explained/)]

### 3. Enforce Strict Installs in CI/CD and Production \[[1](https://publishing-project.rivendellweb.net/npm-security-best-practices/)]

When deploying, running automated tests, or onboarding a new developer, you must prevent the lockfile from updating out of nowhere.

- **The Command:** Use **`pnpm install --frozen-lockfile`**.
- **What it does:** It completely blocks `pnpm` from modifying the lockfile. If someone manually changed `package.json` without updating the lockfile, the build will fail instantly rather than installing unexpected versions. \[[1](https://dev.to/receter/automatically-publish-your-node-package-to-npm-with-pnpm-and-github-actions-22eg)]

Would you like help setting up a **CI/CD pipeline script** (like GitHub Actions) using this command, or do you want to explore how `pnpm` handles **monorepo versioning** across multiple packages?

- [link](https://blog.stackademic.com/my-handy-little-helper-the-npmrc-file-in-my-project-setup-c8d7ec0f0946)\
  Optimizing Node.js Projects with the .npmrc File: A Beginner’s Guide | by Olgun DUTKAN\
  Aug 19, 2024 — Exact Versions: By setting save-exact=true , you ensure that your package. json file records the exact versions of your dependenci...\
  \
  \
  Stackademic
- [link](https://tech-insider.org/pnpm-vs-npm-2026-2/)\
  pnpm vs npm 2026: 16s vs 28s Install, 79% Less Disk\
  Jun 11, 2026 — The short version: npm remains the universal default because it ships with Node.js and works everywhere, while pnpm has become the...\
  \
  \
  tech-insider.org
- [link](https://projen.io/docs/quick-starts/typescript/hello-world/)\
  Hello World with TypeScript\
  This will behave similar to pnpm add or npm install in the sense that it will add the module as a dependency to your package. json...\
  \
  \
  projen

Show all

## You said: does it look up parent folders for npmrc

**No, neither npm nor pnpm searches up through arbitrary parent folders** to find a `.npmrc` file. They only look in specific, pre-defined locations. \[[1](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/), [2](https://cuyl.github.io/pnpm.github.io/pt/npmrc/)]

If you place an `.npmrc` file in a random parent folder (e.g., `/users/projects/.npmrc`), it will be completely ignored when you run a command inside a subfolder (e.g., `/users/projects/my-app/`). \[[1](https://github.com/pnpm/pnpm/issues/7435), [2](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/)]

Both packet managers look for configuration files in a specific order:

### How `pnpm` Resolves Configurations

For `pnpm`, settings like `save-exact=true` are strictly split between two files: \[[1](https://pnpm.io/settings)]

1. **The Workspace Root (`pnpm-workspace.yaml`):** If you are in a monorepo, `pnpm` will look upward until it finds the root directory containing your `pnpm-workspace.yaml`. This is the closest `pnpm` gets to "parent looking," but it **only** works for monorepos.
2. **The Current Project Root (`.npmrc`):** It checks the exact folder where you run the command (the sibling of your `package.json`).
3. **The User Home Directory (`~/.npmrc`):** It checks the global user profile directory.
4. **The Global Active Config:** System-wide fallback variables. \[[1](https://pnpm.io/settings), [2](https://cuyl.github.io/pnpm.github.io/pt/npmrc/), [3](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/), [4](https://pnpm.io/cli/config), [5](https://docs.oracle.com/en/cloud/paas/visual-builder/visualbuilder-manage-development-process/configure-your-connection-projects-npm-registry.html)]

_(Note: `pnpm` only looks at `.npmrc` files for authentication tokens and private registry URLs. General settings like dependency behavior must live in the `pnpm-workspace.yaml` if you want them shared across multiple nested projects.)_ \[[1](https://pnpm.io/settings)]

### How `npm` Resolves Configurations

Standard `npm` resolves things similarly, stopping explicitly at the current project level: \[[1](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/), [2](https://docs.npmjs.com/cli/v8/using-npm/config)]

1. **Per-project:** The `.npmrc` in the root of the active package (`/path/to/project/.npmrc`).
2. **Per-user:** The `.npmrc` in the user's home directory (`~/.npmrc`).
3. **Global:** The configuration file at the Node prefix level.
4. **Built-in:** Stored directly inside the `npm` installation itself. \[[1](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/), [2](https://docs.npmjs.com/cli/v8/using-npm/config)]

### The Solution for Predictability

To force a configuration rule like `save-exact=true` across multiple apps without copying it to every folder, you have two clear choices:

- **If they belong to the same project (Monorepo):** Group the folders together using a `pnpm-workspace.yaml` file at the parent root. `pnpm` will automatically see it.
- **If they are completely separate projects:** Run `pnpm config set save-exact true --global` (or `npm config set save-exact true --global`). This writes the behavior directly to your user account profile (`~/.npmrc`) so it applies across your entire computer. \[[1](https://pnpm.io/settings), [2](https://cuyl.github.io/pnpm.github.io/pt/npmrc/), [3](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/), [4](https://medium.com/codex/npm-config-customizing-your-npm-environment-13e8b965fed5)]

Are you currently setting up a **multi-package monorepo**, or are you trying to share settings across **standalone, unrelated projects**?

- [link](https://pnpm.io/settings)\
  Settings (pnpm-workspace.yaml)\
  yaml) pnpm gets its configuration from the command line, environment variables, and pnpm-workspace. yaml . Only auth and registry ...\
  PNPM
- [link](https://docs.npmjs.com/cli/v8/configuring-npm/npmrc/)\
  npmrc - npm Docs\
  Jan 1, 2016 — per-project config file (/path/to/my/project/. npmrc) per-user config file (~/. npmrc) global config file ($PREFIX/etc/npmrc) npm ...\
  npm Docs
- [link](https://github.com/pnpm/pnpm/issues/7435)\
  pnpm install doesn't read .npmrc of individual packages while ...\
  Dec 17, 2023 — KSXGitHub commented. KSXGitHub. on Dec 22, 2023. Contributor. .npmrc is a per-project configuration file, not per-package. If by a...\
  GitHub

Show all

# how easy is it to build a website that needs react wo react

Building a website that feels like a React app without actually using React is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">highly achievable</mark> today. Modern web standards provide the exact tools needed to replicate React's best features with less complexity. \[[1](https://www.reddit.com/r/reactjs/comments/1fqaxpb/what%5Fframework%5Fshould%5Fi%5Fchoose%5Ffor%5Fa%5Fbasic%5Fwebsite/), [2](https://proxify.io/articles/react-seo), [3](https://codingcops.com/mastering-react-hooks/)]

### Why Choose This Approach

- **Zero Build Steps**: Run your code directly in the browser.
- **Smaller File Sizes**: Pages load significantly faster for users.
- **No Dependency Hell**: Avoid constant npm package updates. \[[1](https://dev.to/shrinivasv73/what-is-a-build-process-in-react-or-in-any-framework-for-that-matter--4df5), [2](https://www.edureka.co/blog/what-is-react/), [3](https://dev.to/besworks/so-dont-overreact-but-im-so-over-react-i52)]

### How to Replicate React's Features

### 1. Components (Use Web Components)

React isolates UI elements into components. Modern browsers do this natively using Web Components. You can create reusable HTML tags with built-in styling and logic. \[[1](https://www.icoderzsolutions.com/blog/react-js-benefits/), [2](https://medium.com/@jakemer10/microsofts-shift-from-react-a-deeper-look-at-edge-s-evolution-4d7001bdf834), [3](https://www.netguru.com/blog/migrate-website-to-react), [4](https://massivepixel.io/blog/react-libraries/), [5](https://www.reddit.com/r/javascript/comments/j5raj2/askjs%5Fweb%5Fcomponents%5Flitelement%5For%5Freact/)]

### 2. State Management (Use Signals or Proxy)

React uses `useState` to trigger page updates. In vanilla JavaScript, you can use the `Proxy` object to watch for data changes and automatically update the HTML. Lightweight libraries like Preact Signals also offer this exact functionality without the React runtime. \[[1](https://namastedev.com/blog/how-does-react-work-under-the-hood/), [2](https://msmechatronics.medium.com/tired-of-react-re-renders-meet-signals-5539b844735c), [3](https://www.mgsoftware.nl/en/vergelijking/preact-vs-react)]

### 3. Single Page Routing (Use the Navigation API) \[[1](https://www.hackerrank.com/blog/what-is-react-introduction/), [2](https://www.softlogicsys.in/react-js-online-training/)]

React apps switch pages instantly without a full reload. You can achieve this using the modern browser **Navigation API** or standard **History API** combined with `fetch()` to swap out page content dynamically. \[[1](https://www.codeable.io/blog/node-js-vs-react-js/), [2](https://www.cloudways.com/blog/install-react-js-in-laravel/), [3](https://www.etatvasoft.com/blog/react-seo/), [4](https://www.softlogicsys.in/react-js-online-training/)]

### Lightweight Alternatives

If writing raw JavaScript feels too tedious, use micro-frameworks that mimic React but weigh a fraction of the size:

- **Preact**: Uses the exact same React syntax but is only 3KB.
- **Alpine.js**: Lets you write reactive logic directly in your HTML tags.
- **SolidJS**: Looks like React but compiles down to ultra-fast raw JavaScript. \[[1](https://www.zigpoll.com/content/can-you-recommend-lightweight-frontend-libraries-or-frameworks-optimized-for-quick-prototyping-and-realtime-user-feedback-integration), [2](https://news.ycombinator.com/item?id=29517403), [3](https://redskydigital.com/ce/alpine-js-vs-react-navigating-simplicity-in-web-development/), [4](https://dev.to/omher/intro-to-solidjs-how-to-create-fast-reactive-web-apps-15cn)]

To help narrow down the best path forward, tell me:

- What is the **main purpose** of your website?
- Do you prefer writing **pure vanilla JavaScript** or using a **tiny library**?
- What **React features** (like hooks or state) are most critical to your project?

I can then provide a tailored code example to get you started.

- [link](https://www.reddit.com/r/reactjs/comments/1fqaxpb/what%5Fframework%5Fshould%5Fi%5Fchoose%5Ffor%5Fa%5Fbasic%5Fwebsite/)\
  What framework should I choose for a basic website? : r/reactjs\
  Sep 27, 2024 — I've seen along people commenting that you don't even 'need' react for a simple site. That's true. However, the tooling and infras...\
  \
  Reddit
- [link](https://proxify.io/articles/react-seo)\
  Will React.js be able to help you rank on Google?\
  Jul 22, 2020 — It ( React ) makes it ( React framework ) simple to build interactive websites and apps that feel fast. React ( React framework ) ...\
  \
  \
  Proxify
- [link](https://codingcops.com/mastering-react-hooks/)\
  Mastering React Hooks: A Detailed Guide \[2024]\
  Jun 25, 2024 — Testing components that use Hooks requires an environment that mimics React's behavior closely. This mostly involves making sure o...\
  \
  \
  CodingCops

Show all

# 

