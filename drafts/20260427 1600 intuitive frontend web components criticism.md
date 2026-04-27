criticism on web components

4:12 pm

Criticism of Web Components generally falls into two camps: <mark style="border-radius: 4px; background-size: 200% 100%; padding: 0px 2px; animation: 0.75s cubic-bezier(0.05, 0.7, 0.1, 1) 0.25s 1 normal forwards running highlight-animation;">technical limitations of the native APIs and the perceived "failed promise" of the technology as a replacement for high-level JavaScript frameworks</mark>.

1\. Technical and Design Limitations

Critics point to several "clunky" aspects of the native specifications that make development difficult without a library like [Lit](https://lit.dev/):

- **Property vs. Attribute Confusion**: Native Web Components primarily communicate through string attributes in HTML. To pass complex data (objects/arrays), developers must use JavaScript properties, leading to a split interface where data must be handled in two different ways.
- **Shadow DOM Friction**: While [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web%5Fcomponents/Using%5Fshadow%5FDOM) provides style isolation, it makes global styling (like using utility-first CSS frameworks) nearly impossible without complex workarounds like `::part` or `adoptedStyleSheets`.
- **Lack of Native Reactivity**: Unlike React or Vue, Web Components have no built-in system for state management or declarative data binding. Developers must manually track changes and update the DOM, often leading to a "DIY" framework approach.
- **Lifecycle Complexity**: The `connectedCallback` and `disconnectedCallback` fire every time an element is moved in the DOM, which can trigger redundant expensive setup or cleanup logic.

2\. Ecosystem and Developer Experience

The "Web Components are a failure" narrative often stems from a mismatch between expectations and reality:

- **Not an App Framework**: High-profile critics, such as [Ryan Carniato](https://dev.to/ryansolid/web-components-are-not-the-future-48bh) (SolidJS creator), argue that Web Components are a low-level primitive for building elements, not a high-level tool for building entire applications.
- **Server-Side Rendering (SSR)**: Historically, Web Components struggled with SSR because they required a full browser DOM to execute. While Declarative Shadow DOM addresses this, it only recently became a baseline standard.
- **Accessibility Pitfalls**: Improper use of custom elements can break standard accessibility patterns, as screen readers may not automatically recognize the role of a generic `HTMLElement` without extensive manual ARIA configuration.

3\. Strategic Criticisms

- **Fragmentation**: By providing a "barebones" API, the spec has led to a fragmented ecosystem of incompatible libraries (Polymer, Stencil, Lit) that each implement their own flavors of reactivity and state management.
- **Investment Risk**: For engineering managers, the lack of a dominant, community-driven ecosystem makes it harder to hire for or justify migrating to Web Components compared to established frameworks like [React](https://react.dev/).

Despite these criticisms, Web Components remain highly favored for **design systems** and **third-party widgets** because their framework-agnostic nature ensures longevity and interoperability across different tech stacks.

Are you looking for a **technical comparison** between Web Components and a specific framework, or do you want to see **modern best practices** to avoid these pitfalls?

- [link](https://www.reddit.com/r/ExperiencedDevs/comments/17tnypv/thoughts%5Fon%5Fweb%5Fcomponents/)\
  Thoughts on Web Components? : r/ExperiencedDevs - Reddit\
  Then I took a gamble and decided to rewrite the whole thing in Web Components and plain Typescript (compiled down with Webpack). T...\
  Reddit
- [link](https://dev.to/ryansolid/web-components-are-not-the-future-48bh)\
  Web Components Are Not the Future - DEV Community\
  Web Components caused an increase in the number of JavaScript frameworks in the mid 2010s. It was an important inspiration for why...\
  DEV Community
- [link](https://www.zachleat.com/web/good-bad-web-components/)\
  The Good, The Bad, The Web Components—zachleat.com\
  Server-side Rendering# ... This is why folks will claim that server-side rendering is yet to be a solved problem—it has not yet be...\
  Zach Leatherman

Show all

example

4:12 pm

To understand why Web Components are criticized, consider a common "Toggle Switch" component. Building this simple element natively highlights the friction points mentioned earlier.

The "Prop vs. Attribute" Dilemma

In a native component, data passed via HTML attributes (like `<my-toggle checked="true">`) is always a **string**. If you want a boolean or an object, you have to manually parse it and sync it with a JavaScript property.

- **The Pitfall**: Developers often forget to sync the two. If you update `element.checked = false` via JS, the HTML attribute `checked="true"` might still remain in the DOM, leading to a "source of truth" conflict.

The Shadow DOM Styling Wall

If you use [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web%5Fcomponents/Using%5Fshadow%5FDOM) for the toggle, it is completely isolated from your site's global CSS.

- **The Example**: If your site uses a global utility class like `.brand-blue { color: blue; }`, applying it to your toggle (`<my-toggle class="brand-blue">`) will **not** color the internal slider because the shadow boundary blocks the style.
- **The Workaround**: You must explicitly expose "hooks" using CSS variables or the `::part` pseudo-element, which adds significant boilerplate for every style you want to allow.

The Accessibility Gap

Native custom elements are just "empty boxes" to a browser until you manually add semantic meaning.

- **The Failure**: A standard `<button>` is automatically keyboard-accessible and readable by screen readers. A native `<my-toggle>` is **invisible** to assistive technology unless you manually:
  1. Add `tabindex="0"` for keyboard focus.
  2. Add `role="switch"` and `aria-checked="true"`.
  3. Write custom JS to handle the `Enter` and `Space` keys.

Comparison: Native vs. Library (Lit)

This complexity is why almost no one uses "raw" Web Components for large projects. Libraries like [Lit](https://lit.dev/) were created specifically to hide this boilerplate.

| Feature        | Native Web Component              | Lit (Library)                   |
| -------------- | --------------------------------- | ------------------------------- |
| **Reactivity** | Manual `innerHTML` updates        | Automatic on property change    |
| **Prop Sync**  | Manual `attributeChangedCallback` | Automatic `@property` decorator |
| **Forms**      | Difficult to link to `<form>`     | Easier via `ElementInternals`   |

Would you like a **code snippet** showing the difference between a native implementation and a library version?

- [link](https://dev.to/richharris/why-i-don-t-use-web-components-2cia)\
  Why I don't use web components - DEV Community\
  Why I don't use web components \* Progressive enhancement. This may be an increasingly old-fashioned view, but I think that website...\
  DEV Community
- [link](https://www.reddit.com/r/javascript/comments/1kdjcz1/askjs%5Fwhat%5Fare%5Fthe%5Fpros%5Fand%5Fcons%5Fof%5Fusing%5Fweb/)\
  \[AskJS] What are the pros and cons of using web components ...\
  theScottyJam. • 1y ago. Frameworks are designed to be easy to use. Web components are designed to mimic built in HTML elements. Th...\
  Reddit
- [link](https://journeytocode.io/accessibility-in-web-components)\
  Enhancing Accessibility in Web Components - Journey to Code\
  By understanding these common pitfalls, you can address them proactively in your implementation. \* 1. Shadow DOM Isolation Issues.\
  journeytocode.io

Show all

example

4:12 pm

This example shows the boilerplate "tax" of building a simple **Counter** natively versus using a library like [Lit](https://lit.dev/).

1\. The Native Way (The Source of Criticism)

To make a simple button that increments a number, you have to manually handle DOM selection, event listeners, and attribute parsing.

javascript

```
class NativeCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._count = 0;
  }

  // Criticism: Manual sync of attributes to properties
  static get observedAttributes() { return ['count']; }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'count') {
      this._count = parseInt(newVal);
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  // Criticism: Manual DOM manipulation (no declarative template)
  render() {
    this.shadowRoot.innerHTML = `
      <p>Count: ${this._count}</p>
      <button id="btn">Increment</button>
    `;
    this.shadowRoot.querySelector('#btn').onclick = () => {
      this.setAttribute('count', this._count + 1);
    };
  }
}
customElements.define('native-counter', NativeCounter);
```

Use code with caution.

2\. The Library Way (The Modern Solution)

Libraries solve these gripes by providing **declarative templates** and **automatic reactivity**.

javascript

```
import { LitElement, html } from 'lit';

class LitCounter extends LitElement {
  // Solves the "Manual Sync": Define a property and it just works
  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0;
  }

  // Solves the "Manual DOM": Template updates automatically when count changes
  render() {
    return html`
      <p>Count: ${this.count}</p>
      <button @click=${() => this.count++}>Increment</button>
    `;
  }
}
customElements.define('lit-counter', LitCounter);
```

Use code with caution.

Why this matters

- **The Native example** is fragile. If you add more interactive elements, your `render()` function starts destroying and recreating the DOM constantly, or you have to write complex "diffing" logic yourself.
- **The Lit example** is what developers actually want, but critics argue that if you need a library to make the "native" feature usable, the native feature itself is poorly designed.

Would you like to see how **Global CSS** fails to penetrate that Native example's button?

its adoption

Web Component adoption in 2025 follows a "split-personality" trend: while they are not the primary choice for building entire applications, their use as a underlying standard for specific features has grown significantly.

1\. Market Share and Usage Statistics

- **Browser Runtime Presence**: Approximately **18-20% of all page loads** in Google Chrome currently register at least one custom element. This indicates that while developers might not build _whole_ sites with them, they are increasingly used for specific widgets or parts of the page.
- **Developer Preference**: Despite high runtime usage, Web Components rarely appear as a "top framework" in developer surveys. Major frameworks like [React](https://react.dev/) still dominate with roughly **40% market share**, while Web Component-specific libraries like [Lit](https://lit.dev/) hover around **7-10% adoption**.

2\. Enterprise and Big Tech Adoption

The strongest adoption is found among large organizations that need to maintain consistency across multiple different tech stacks (e.g., some teams using React, others using Angular or Vue).

- **Design Systems**: Companies like **Google** (Material Web), **Salesforce** (Lightning Web Components), **Microsoft** (MSN, FAST), and **Adobe** (Spectrum) use Web Components as the foundation for their design systems to ensure they work in any environment.
- **Legacy Migration**: **GitHub** famously migrated from jQuery to Web Components because they could be introduced incrementally without a "total rewrite" or locking into a specific framework's ecosystem.
- **Performance Cases**: **Adobe** used Web Components (via Lit) to bring **Photoshop to the web**, leveraging the low-level nature of the APIs for a heavy, performance-critical application.

3\. Why Adoption is "Stealthy"

Web Components are often adopted as an **implementation detail** rather than a primary architecture:

- **Framework Interoperability**: Modern frameworks like [Vue](https://vuejs.org/) and [Angular](https://angular.io/) now have first-class support for exporting components as Web Components, making them a "bridge" between teams.
- **Third-Party Widgets**: Most modern "Embed" buttons, chat widgets, and video players are now built as Web Components because they don't conflict with the CSS or JS of the host website.
- **Server-Side Improvements**: The recent baseline support for Declarative Shadow DOM has removed a major barrier by allowing these components to be server-side rendered (SSR) effectively.

Would you like to know more about the **specific libraries** that are driving this enterprise adoption, or how **smaller teams** are using them compared to big tech?

- [link](https://uploadcare.com/blog/web-components-adoption-challenges/#:~:text=Based%20on%20the%20data%20from,made%20for%20completely%20different%20purposes.)\
  Why are web components not as popular as front-end ...\
  11 Oct 2024 — Why are web components not as popular as front-end frameworks? ... Now that we've covered the basics of Web Components, let's tack...\
  Uploadcare
- [link](https://thenewstack.io/web-components-are-the-comeback-nobody-saw-coming/#:~:text=When%20web%20components%20first%20appeared,timing%20couldn't%20be%20better.)\
  Web Components Are the Comeback Nobody Saw Coming\
  23 Dec 2025 — When web components first appeared, browser support was patchy. Developers had to rely on polyfills that were slow and fragile. To...\
  The New Stack
- [link](https://dev.to/steveblue/the-state-of-web-components-in-2022-1ip3#:~:text=to%20Web%20Components-,Adoption,custom%20element%20on%20the%20CustomElementRegistry.)\
  The State Of Web Components in 2022 - DEV Community\
  6 May 2022 — TLDR; \* ~18% of page loads tracked by Google contain a Web Component. \* Stencil is the most downloaded library for developing Web ...\
  DEV Community

Show all