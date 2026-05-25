# .

**The React Component:**

```jsx
export function Card({ active }) {
  return (
    <div className="Card" data-active={active}>
      <h1 className="Card-title">Component Title</h1>
      <p className="Card-desc">Perfect, flat string literals.</p>
    </div>
  );
}
```

**The Vanilla CSS:**

```css
.Card { padding: var(--...); }
.Card-title { font-size: var(--...); }
.Card-desc { color: var(--...); } /* oklch */

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title { color: var(--...); }
```

#

what are the ways of styling on web

4:50 AM

There are three core methods used to apply Cascading Style Sheets (CSS) to a website: <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>external stylesheets</strong>, <strong>internal styles</strong>, and <strong>inline styles</strong></mark>. While these represent how CSS is technically injected into a document, modern web development also relies heavily on **CSS frameworks, processors, and component-based architectural approaches** to manage styles at scale. \[[1](https://www.smashingmagazine.com/2019/06/styling-modern-web-apps/), [2](https://www.youtube.com/watch?v=4FdGbOQW18A), [3](https://www.geeksforgeeks.org/css/types-of-css-cascading-style-sheet/), [4](https://www.life.illinois.edu/edtech/html/styles/), [5](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Getting%5Fstarted), [6](https://www.w3schools.com/html/html%5Fcss.asp)]

***

Core Methods of Applying CSS

The browser reads and interprets standard CSS through three native technical mechanisms: \[[1](https://www.elmwoodparklibrary.org/sitemedia/documents/adults/Design-Your-Own-Website-CSS-EPPL.pdf), [2](https://www.youtube.com/watch?v=4FdGbOQW18A), [3](https://www.geeksforgeeks.org/css/types-of-css-cascading-style-sheet/)]

1\. External Stylesheet

This is the **industry standard and most scalable way** to style a website. You write all styling declarations inside a standalone `.css` file and link it inside the tag of every HTML page. \[[1](https://study.com/academy/lesson/cascading-style-sheets-css-definition-types-examples.html), [2](https://www.youtube.com/watch?v=4FdGbOQW18A), [3](https://www.geeksforgeeks.org/css/types-of-css-cascading-style-sheet/)]

- **Syntax:**
- **Pros:** Keeps code clean, separates content from design, and caches files for faster loading.
- **Cons:** Requires an extra HTTP request to fetch the document if not optimized. \[[1](https://www.ibm.com/docs/en/rational-soft-arch/9.7.0?topic=applications-creating-web-site-styles), [2](https://blog.cloudsigma.com/setting-up-css-and-html-for-your-website-a-tutorial/), [3](https://web.dev/learn/html/document-structure), [4](https://www.theedigital.com/blog/what-is-css), [5](https://www.geeksforgeeks.org/css/types-of-css-cascading-style-sheet/)]

2\. Internal (Embedded) Styles

Styles are written directly inside the HTML document within a block, typically placed inside the section. \[[1](https://www.youtube.com/watch?v=4FdGbOQW18A), [2](https://www.life.illinois.edu/edtech/html/styles/)]

- **Syntax:**\
  html

<!---->

```
<style>
  body { background-color: #f0f0f0; }
</style>
```

Use code with caution.

- **Pros:** Excellent for standalone or single-page websites where you do not want to manage extra files.
- **Cons:** Inefficient for multi-page websites, as you have to rewrite or copy-paste styles across every individual page. \[[1](https://www.slideshare.net/slideshow/html-styles/10636104), [2](https://medium.com/@glasshost/how-to-create-a-style-tag-using-javascript-ea2fb9d5852c), [3](https://vocal.media/01/ways-to-apply-css), [4](https://internetingishard.netlify.app/html-and-css/hello-css/), [5](https://www.geeksforgeeks.org/css/types-of-css-cascading-style-sheet/)]

3\. Inline Styles

Styles are applied directly to a single HTML element using the `style` attribute. \[[1](https://medium.com/@chingkeziah/css-basics-understanding-the-fundamentals-of-styling-web-pages-44016d86049b), [2](https://www.life.illinois.edu/edtech/html/styles/)]

- **Syntax:**
- **Pros:** Useful for rapid testing, debugging, or overriding specific styles dynamically via JavaScript.
- **Cons:** Highly discouraged for production because it bypasses the "cascading" power of CSS, pollutes HTML files, and is incredibly hard to maintain. \[[1](https://www.youtube.com/watch?v=DE3OQyzPeEw\&t=1), [2](https://blog.udemy.com/what-is-css/), [3](https://www.geeksforgeeks.org/css/types-of-css-cascading-style-sheet/), [4](https://www.youtube.com/watch?v=4FdGbOQW18A), [5](https://www.smashingmagazine.com/2019/06/styling-modern-web-apps/)]

***

Modern Approaches & Frameworks

To make the styling process faster and more manageable for large applications, modern web development frequently uses abstraction tools: \[[1](https://www.smashingmagazine.com/2019/06/styling-modern-web-apps/)]

- **Utility-First Frameworks:** Platforms like Tailwind CSS allow you to style elements completely inside HTML using predefined, low-level utility classes rather than writing custom CSS rules.
- **Component Frameworks:** UI kits like Bootstrap or Chakra UI supply fully pre-styled components (like buttons, navigation bars, and modals) out-of-the-box.
- **CSS Preprocessors:** Extension languages like Sass (SCSS) or Less let you use variables, nesting, and logic functions to make your source files cleaner before compiling into standard CSS.
- **CSS-in-JS:** Used extensively in modern JavaScript frameworks (like React or Vue), libraries like Styled Components allow you to write CSS syntax scoped directly inside your JavaScript component files. \[[1](https://www.reddit.com/r/css/comments/1ksihrk/how%5Fdo%5Fyou%5Fstyle%5Fyour%5Fwebsite/), [2](https://www.theedigital.com/blog/what-is-css), [3](https://adaptsmedia.com/blog/latest-web-development-trends/), [4](https://www.w3schools.com/html/html%5Fcss.asp), [5](https://www.smashingmagazine.com/2019/06/styling-modern-web-apps/)]

***

If you are currently building a webpage, I can help you set up your files. Would you like a **step-by-step example** of how to connect an external stylesheet, or do you need a recommendation on which **CSS framework** fits your project size?

- [link](https://www.smashingmagazine.com/2019/06/styling-modern-web-apps/)\
  Styling In Modern Web Apps - Smashing Magazine\
  Styling applications is a world in itself, one not often given the importance and attention it deserves. With complex modern user ...\
  Smashing Magazine
- [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Getting%5Fstarted)\
  Getting started with CSS - Learn web development | MDN\
  Adding CSS to our document. The very first thing we need to do is to tell the HTML document that we have some CSS rules we want it...\
  MDN Web Docs
- [link](https://www.youtube.com/watch?v=4FdGbOQW18A)\
  Style Like a Pro - CSS Basics in 7 Minutes\
  CSS is fundamental for making websites visually appealing. Without CSS, a website can appear basic, but with it, the site becomes ...\
  7:06\
  YouTube·Leabs

Show all

You said: bem naming alternatives

5:09 AM

While Block-Element-Modifier (BEM) is highly effective, its long, verbose class names (like `button--state-success__icon`) lead many developers to seek alternatives.

Here are the primary alternatives to BEM naming conventions, categorized by architecture, scoping, and modern tooling.

1\. Alternative CSS Class Naming Conventions

These methodologies still use standard CSS files but follow different naming rules to organize code.

- **SMACSS (Scalable and Modular Architecture for CSS):** Categorizes styles into five rigid buckets: Base, Layout, Module, State, and Theme. It uses prefixes (e.g., `.is-hidden` for state, `.layout-grid` for layout) rather than BEM's strict hierarchical delimiters.
- **OOCSS (Object-Oriented CSS):** Focuses on separating structure from skin. You create generic reusable "objects" (like `.toggle-box`) and apply visual skins separately (like `.blue-theme`), encouraging extreme code reuse over strict component nesting.
- **AMCSS (Attribute Modules for CSS):** Abandons class names entirely for styling structure. It uses HTML attributes and values to represent components, transforming a BEM class like `btn btn--large` into `am-btn="large"`.
- **SUIT CSS:** A strict derivative of BEM designed specifically for component-based development. It uses camelCase and structured prefixes (e.g., `ComponentName-elementName--modifierName`), which many developers find cleaner to read than BEM's double underscores and hyphens.

2\. Tooling-Based Alternatives (Automated Isolation)

Modern development often replaces naming conventions entirely by using tools that automatically scope CSS to prevent style leaks.

- **CSS Modules:** You write standard, clean CSS class names locally inside a file (like `.button`). During the build process, the tooling automatically appends a unique hash to the class name (e.g., `_button_x7y2z`), rendering global naming conflicts physically impossible.
- **Scoped CSS (Vue/Svelte style):** Native to frameworks like Vue and Svelte. Adding a tag automatically applies unique data attributes to the HTML elements and scopes the CSS to that specific file behind the scenes.

3\. Paradigm Shifts

These approaches bypass traditional CSS organization by changing how styles are authored.

- **Utility-First (Tailwind CSS):** Instead of naming components, you apply atomic, single-purpose classes directly in the HTML (e.g., `flex items-center p-4 bg-white`). This eliminates the need to invent class names altogether.
- **CSS-in-JS (Styled Components / Emotion):** Bundles styling directly inside JavaScript components. Styles are mapped to JS variables, meaning you name JavaScript components (e.g., `const SubmitButton = styled.button...`) rather than writing CSS classes.

***

To help find the right fit, let me know:

- What **frontend framework** are you using (React, Vue, vanilla HTML/CSS)?
- What is the **main frustration** you have with BEM?

I can provide a direct syntax comparison between BEM and your preferred alternative.

#

bem naming examples

5:53 AM

The **BEM (Block, Element, Modifier)** naming convention structures CSS class names using the strict formula: `[block]__[element]--[modifier]`. This pattern tells developers exactly how HTML structures relate to their CSS styles from the name alone. \[[1](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), [2](https://css-tricks.com/bem-101/), [3](https://chamika-karunarathna.medium.com/bem-notation-the-css-naming-convention-that-actually-makes-sense-ae30e2f2fc8c)]

1\. Basic Component: Card

A card component is the most universal implementation of BEM structure. \[[1](https://medium.com/@tomisinabiodun/naming-css-classes-bem-naming-convention-2ef4f9b2f9a6), [2](https://chamika-karunarathna.medium.com/bem-notation-the-css-naming-convention-that-actually-makes-sense-ae30e2f2fc8c)]

**HTML Structure**

html

```
<!-- Block: The standalone component wrapper -->
<div class="card">

  <!-- Element: A child component tied strictly to the parent block -->
  <img class="card__image" src="photo.jpg" alt="Profile" />
  <h2 class="card__title">John Doe</h2>
  <p class="card__description">Frontend Developer based in California.</p>

  <!-- Element + Modifier: A modified version of an element -->
  <button class="card__button card__button--primary">Follow</button>
</div>
```

Use code with caution.

2\. Multi-State Component: Form

Forms offer excellent examples of using modifiers to declare component variations or disabled states. \[[1](https://getbem.com/naming/), [2](https://medium.com/@ConorJonOReilly/css-bem-or-atomic-design-a023beca1a03)]

**HTML Structure**

html

```
<!-- Block with Modifier: Changes the entire theme of the block -->
<form class="form form--theme-dark">

  <div class="form__group">
    <label class="form__label">Email Address</label>
    <!-- Element with Modifier: Denotes a specific input error state -->
    <input class="form__input form__input--error" type="email" />
    <span class="form__error-message">Invalid email format.</span>
  </div>

  <!-- Element with Modifier: Denotes a state change -->
  <button class="form__submit form__submit--disabled" disabled>Submit</button>
</form>
```

Use code with caution.

3\. Navigation Component: Navbar

Navbars demonstrate how to manage multi-word entity names alongside state indicators. \[[1](https://bem.info/en/methodology/naming-convention/), [2](https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz), [3](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)]

**HTML Structure**

html

```
<!-- Block: Multi-word block names use single hyphens -->
<nav class="main-nav">
  <ul class="main-nav__list">
    <!-- Element with Modifier: Highlights the active page link -->
    <li class="main-nav__item">
      <a class="main-nav__link main-nav__link--active" href="/">Home</a>
    </li>
    <li class="main-nav__item">
      <a class="main-nav__link" href="/services">Services</a>
    </li>
  </ul>
</nav>
```

Use code with caution.

Core Syntax Rules & Mistakes to Avoid

- **Use Double Underscores (`__`) for Elements:** Connects the parent block name to its interior pieces.
- **Use Double Dashes (`--`) for Modifiers:** Marks a state change, style shift, or variation of a block or element.
- **Use Single Hyphens (`-`) for Multi-Word Names:** Spaces between words within individual blocks, elements, or modifiers are separated by one dash.
- **❌ Avoid Element Nesting (Grandchildren):** Never stack elements like `.card__header__title`. BEM requires flat structures. Keep classes limited to one element tag max: `.card__title`. \[[1](https://sparkbox.com/foundry/bem%5Fby%5Fexample), [2](https://simple-web.dev/bem-by-example), [3](https://www.geeksforgeeks.org/css/understanding-the-css-bem-convention/), [4](https://medium.com/free-code-camp/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849), [5](https://bem-cheat-sheet.9elements.com/), [6](https://sparkbox.com/foundry/bem%5Fcss%5Forganization), [7](https://sourcedcode.com/blog/css/what-is-bem-with-examples), [8](https://www.frontendmentor.io/articles/understanding-css-naming-conventions-bem-oocss-smacss-and-suit-css-V6ZZUYs1xz), [9](https://bem.info/en/methodology/naming-convention/)]

If you are currently setting up a style system, let me know if you are working with **SASS/SCSS nesting**, **mixins**, or trying to map out a **specific complex layout component** so I can provide customized structural examples.

- [link](https://sparkbox.com/foundry/bem%5Fby%5Fexample)\
  BEM by Example: Best Practices for BEM CSS Naming\
  A BEM class name representing a child element in the component should only include the base/block name and the one element name. I...\
  Sparkbox
- [link](https://simple-web.dev/bem-by-example)\
  CSS Structure with BEM in a real-world Example\
  These are called Blocks, the B in BEM. A block should be something encapsulating its own styles and not being depended on its surr...\
  simple-web.dev
- [link](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)\
  MindBEMding – getting your head 'round BEM syntax\
  The reason for double rather than single hyphens and underscores is so that your block itself can be hyphen delimited, for example...\
  CSS Wizardry

Show all

#

styling bem naming alternative examples

5:09 AM

While **BEM (Block, Element, Modifier)** is an incredibly popular way to structure CSS, its long class names and strict double-underscore syntax can quickly clutter your HTML. Depending on your stack, architecture goals, and personal preferences, you can use several modern styling and naming alternatives. \[[1](https://daverupert.com/2022/08/modern-alternatives-to-bem/), [2](https://developer.helpscout.com/seed/glossary/bem/), [3](https://www.reddit.com/r/Frontend/comments/x8vm9c/modern%5Falternatives%5Fto%5Fbem/), [4](https://css-tricks.com/abem-useful-adaptation-bem/), [5](https://www.valoremreply.com/resources/insights/guide/bem-methodology-a-step-by-step-guide-for-beginners/)]

Here are the best alternative methodologies complete with practical code examples.

1\. ABEM (Atomic BEM) \[[1](https://www.pivale.co/resources/blog/bem-css-abem-bbem), [2](https://experionglobal.com/atomic-block-element-modifier/)]

ABEM combines BEM with Brad Frost’s Atomic Design principles. It shifts naming conventions to camelCase, keeps selectors much cleaner, and makes state management easier by omitting repetitive prefixes on modifier classes. \[[1](https://experionglobal.com/atomic-block-element-modifier/), [2](https://www.pivale.co/resources/blog/bem-css-abem-bbem), [3](https://css-tricks.com/abem-useful-adaptation-bem/)]

- **Syntax Rule**: Prefixes indicate depth (`a-` for atom, `m-` for molecule, `o-` for organism). Elements use a double underscore (`__`), and modifiers are separated by a space and a leading dash (` -modifier`).

- **HTML Example**:\
  html

<!---->

```
<div class="m-card">
  <h2 class="m-card__title">Card Title</h2>
  <button class="a-button -success -large">Submit</button>
</div>
```

Use code with caution.

- **CSS Example**:\
  css

<!---->

```
.m-card { padding: 20px; }
.m-card__title { font-size: 1.5rem; }
.a-button.-success { background-color: green; }
.a-button.-large { padding: 12px 24px; }
```

Use code with caution.\
\[[1](https://css-tricks.com/abem-useful-adaptation-bem/), [2](https://www.pivale.co/resources/blog/bem-css-abem-bbem), [3](https://dev.to/michael-gokey/understanding-bem-as-a-css-methodology-for-modern-web-development-8l8), [4](https://experionglobal.com/atomic-block-element-modifier/)]

2\. RSCSS (Reasonable System for CSS) \[[1](https://medium.com/@andrzej.delgado/ui-crux-naming-conventions-methodologies-for-designers-c5ce9a6b480e)]

[RSCSS](https://blog.logrocket.com/bem-vs-smacss-comparing-css-methodologies/) is a lightweight alternative that drops long, deeply nested BEM class names in favor of the **CSS child combinator selector (`>`)**. \[[1](https://www.reddit.com/r/web%5Fdesign/comments/b64ksb/what%5Fdo%5Fyou%5Fthink%5Fabout%5Fmy%5Falternative%5Fidea%5Fto/), [2](https://www.reddit.com/r/Frontend/comments/x8vm9c/modern%5Falternatives%5Fto%5Fbem/)]

- **Syntax Rule**: Components must use at least two words separated by a hyphen to prevent collisions. Child components (elements) are styled using a naked child selector (`> .element`) inside the main component rule. Modifiers use a single dash.

- **HTML Example**:\
  html

<!---->

```
<div class="user-card">
  <h2 class="title">John Doe</h2>
  <button class="btn -primary">Follow</button>
</div>
```

Use code with caution.

- **CSS Example**:\
  css

<!---->

```
.user-card {
  border: 1px solid #ccc;

  /* Target immediate children without long class names */
  > .title { font-size: 20px; }
  > .btn { padding: 8px; }
  > .btn.-primary { background: blue; }
}
```

Use code with caution.\
\[[1](https://medium.com/@yotam%5F64750/bem-the-5-rules-bbaed16c6b75), [2](https://www.reddit.com/r/Frontend/comments/x8vm9c/modern%5Falternatives%5Fto%5Fbem/), [3](https://www.reddit.com/r/web%5Fdesign/comments/b64ksb/what%5Fdo%5Fyou%5Fthink%5Fabout%5Fmy%5Falternative%5Fidea%5Fto/), [4](https://www.pivale.co/resources/blog/bem-css-abem-bbem)]

3\. Native CSS `@scope` and Modern Selectors

With the arrival of native modern CSS features, you can achieve the strict encapsulation of BEM without inventing complex naming rules. The [`@scope` rule](https://daverupert.com/2022/08/modern-alternatives-to-bem/) keeps global variables and styles isolated to a DOM subtree. \[[1](https://blog.logrocket.com/css-scope-replace-bem/), [2](https://daverupert.com/2022/08/modern-alternatives-to-bem/)]

- **Syntax Rule**: Write standard, plain semantic class names like `.title` or `.body`. Nest them safely inside a native `@scope` block to prevent leaky styles.

- **HTML Example**:\
  html

<!---->

```
<div class="product-widget">
  <h1 class="title">Premium Shoes</h1>
  <p class="desc">Comfortable running shoes.</p>
</div>
```

Use code with caution.

- **CSS Example**:\
  css

<!---->

```
@scope (.product-widget) {
  /* These styles apply ONLY inside .product-widget */
  .title {
    font-size: 24px;
    color: #333;
  }
  .desc {
    color: #666;
  }
}
```

Use code with caution.\
\[[1](https://gomakethings.com/semantic-classes-bem/), [2](https://daverupert.com/2022/08/modern-alternatives-to-bem/), [3](https://blog.logrocket.com/css-scope-replace-bem/), [4](https://fadamakis.com/time-to-stop-using-bem-abff3a5bd048)]

4\. Utility-First (Tailwind CSS Architecture)

Instead of trying to find the perfect semantic name for your component, utility-first frameworks like [Tailwind CSS](https://dev.to/michael-gokey/understanding-bem-as-a-css-methodology-for-modern-web-development-8l8) shift the architecture entirely. You use pre-defined, single-purpose classes directly in your markup to build structures. \[[1](https://dev.to/michael-gokey/understanding-bem-as-a-css-methodology-for-modern-web-development-8l8), [2](https://www.sitepoint.com/css-architecture-block-element-modifier-bem-atomic-css/)]

- **Syntax Rule**: No custom CSS stylesheets are required. Layout, spacing, color, and responsive design are handled via inline utility declarations.

- **HTML Example**:\
  html

<!---->

```
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
  <div class="text-xl font-medium text-black">Alert Title</div>
  <p class="text-slate-500 text-sm">You have a new message!</p>
</div>
```

Use code with caution.

5\. Automated Scoping (CSS Modules) \[[1](https://fadamakis.com/time-to-stop-using-bem-abff3a5bd048)]

If your engineering stack uses JavaScript frameworks like React, Vue, or Svelte, [CSS Modules](https://fadamakis.com/time-to-stop-using-bem-abff3a5bd048) render manual component namespacing entirely obsolete. \[[1](https://fadamakis.com/time-to-stop-using-bem-abff3a5bd048)]

- **Syntax Rule**: You write simple, generic class names. At build time, the framework automatically appends a unique cryptographic hash to ensure global scope uniqueness.

- **Component File Example (React)**:\
  jsx

<!---->

```
import styles from './Card.module.css';

export function Card() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Title Text</h2>
    </div>
  );
}
```

Use code with caution.

- **Standard CSS File (`Card.module.css`)**:\
  css

<!---->

```
.card { padding: 1rem; }
.title { color: red; }
```

Use code with caution.

- **Compiled HTML Result**:\
  html

<!---->

```
<!-- The browser spits out completely conflict-free names -->
<div class="Card_card__x93f2">
  <h2 class="Card_title__a74k2">Title Text</h2>
</div>
```

Use code with caution.\
\[[1](https://www.reddit.com/r/css/comments/1doepb1/which%5Fcss%5Fnaming%5Fconvention%5Fdo%5Fyou%5Ftypically%5Fuse/), [2](https://fadamakis.com/time-to-stop-using-bem-abff3a5bd048)]

If you would like to map out the ideal strategy for your application, let me know:

- What **frontend tech stack** are you running? (e.g., React, Vue, Vanilla HTML/Sass)

- How **large is your engineering team** collaborating on this project?

- Do you prefer writing styles in **separate stylesheets** or keeping them **inline/utility-based**?

- [link](https://daverupert.com/2022/08/modern-alternatives-to-bem/)\
  Modern alternatives to BEM - daverupert.com\
  WILS. If your goal is to reduce specificity, new native CSS tools make reducing specificity a lot easier. You can author your CSS ...\
  Dave Rupert

- [link](https://www.reddit.com/r/Frontend/comments/x8vm9c/modern%5Falternatives%5Fto%5Fbem/)\
  Modern alternatives to BEM : r/Frontend\
  If one wants an actual alternative to BEM (methologies in the article don't really replace BEM as naming conventions) you can look...\
  Reddit

- [link](https://www.reddit.com/r/web%5Fdesign/comments/b64ksb/what%5Fdo%5Fyou%5Fthink%5Fabout%5Fmy%5Falternative%5Fidea%5Fto/)\
  What do you think about my alternative idea to BEM naming? - Reddit\
  With javascript, there's a lot of clutter. Just in-case you weren't aware, the syntax you posted is CSS and not JavaScript. Anyway...\
  Reddit

Show all

You said: i like automated scoping. i dont want crypto hash. and what about states.

2:39 AM

You can absolutely use automated scoping without the ugly cryptographic hashes, and managing states becomes incredibly clean once you transition away from strict BEM modifier strings.

Here is exactly how to remove the hashes from your bundled CSS and how to manage dynamic element states smoothly.

***

1\. Removing the Crypto Hash (Readable Class Names)

By default, tools like Vite, [Webpack](https://webpack.js.org/), or Next.js append a random hash (`_[hash:base64:5]`) to prevent class collisions. If your team uses unique file names per component, **you do not need the hash**. You can configure your build tool to use the component's file name and the local class name instead. \[[1](https://github.com/vercel/next.js/discussions/37196), [2](https://github.com/vercel/next.js/discussions/76887), [3](https://stackoverflow.com/questions/42935631/css-modules-multiple-localidentname)]

Vite Configuration (`vite.config.js`)

javascript

```
export default {
  css: {
    modules: {
      // Strips the hash entirely. Generates names like: Button-module_btn
      generateScopedName: '[name]_[local]'
    }
  }
}
```

Use code with caution.

Next.js Configuration (`next.config.js`)

javascript

```
const nextConfig = {
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.use && Array.isArray(rule.use)) {
        rule.use.forEach((loader) => {
          if (loader.loader && loader.loader.includes('css-loader') && loader.options?.modules) {
            // Overrides the native localIdentName to drop the hash
            loader.options.modules.localIdentName = '[name]__[local]';
          }
        });
      }
    });
    return config;
  },
};
export default nextConfig;
```

Use code with caution.

- **Compiled Result**: If your file is named `Card.module.css` and your class is `.title`, the HTML output will render beautifully as without any random text. \[[1](https://github.com/vercel/next.js/discussions/37196)]

***

2\. How to Handle Component States

When dealing with dynamic interactive states (like `isActive`, `isDisabled`, or `hasError`), you have three clean paths that avoid messy BEM string concatenation.

Method A: HTML Data Attributes (Recommended)

Instead of adding or removing dynamic classes via JavaScript, use HTML `data-*` attributes. They natively describe states, read like plain English, and don't require your JavaScript to look up complex scoped styles.

- **CSS (`Card.module.css`)**:\
  css

<!---->

```
.card {
  background: white;
  transition: background 0.2s;
}

/* Target the component when its data-active state is true */
.card[data-active="true"] {
  background: lightblue;
}

/* Target elements inside the card based on parent state */
.card[data-active="true"] .title {
  color: darkblue;
}
```

Use code with caution.

- **JavaScript / React Component**:\
  jsx

<!---->

```
import styles from './Card.module.css';

export function Card({ isActive }) {
  return (
    <div className={styles.card} data-active={isActive}>
      <h2 className={styles.title}>Dynamic Card</h2>
    </div>
  );
}
```

Use code with caution.

Method B: Combining Scoped Modifiers with Template Literals

If you prefer strictly class-driven states, you can define state modifiers inside your module and append them conditionally using JavaScript template strings.

- **CSS (`Card.module.css`)**:\
  css

<!---->

```
.button { padding: 10px; background: grey; }

/* Scoped modifier class */
.loading { opacity: 0.5; cursor: wait; }
```

Use code with caution.

- **JavaScript / React Component**:\
  jsx

<!---->

```
import styles from './Button.module.css';

export function Button({ isLoading }) {
  return (
    <button className={`${styles.button} ${isLoading ? styles.loading : ''}`}>
      Submit
    </button>
  );
}
```

Use code with caution.

Method C: Native Pseudo-Classes

Always prioritize standard browser capabilities when dealing with user interaction states. Automated scoping works perfectly with native CSS pseudo-classes. You do not need any JavaScript or extra conditional classes for these.

- **CSS (`Input.module.css`)**:\
  css

<!---->

```
.inputField {
  border: 1px solid gray;
}
/* Pure browser-handled states */
.inputField:focus { border-color: blue; }
.inputField:disabled { background: #eee; }
.inputField:invalid { border-color: red; }
```

Use code with caution.

- **JavaScript / React Component**:\
  jsx

<!---->

```
import styles from './Input.module.css';

export function Input({ isDisabled }) {
  return <input className={styles.inputField} disabled={isDisabled} />;
}
```

Use code with caution.

***

Which build framework are you using? I can provide the **exact copy-paste configuration block** for your specific bundler setup to get rid of those hashes immediately.

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://github.com/vercel/next.js/discussions/37196)\
  How can I change the format of class names generated by ...\
  on Jan 8, 2023. Original comment in English - Translate to English. @lumenwrites you could do that by adding this webpack configur...\
  GitHub
- [link](https://stackoverflow.com/questions/42935631/css-modules-multiple-localidentname)\
  CSS modules multiple localIdentName - webpack - Stack Overflow\
  1 Answer. ... You cannot use multiple class names. It doesn't make sense to have multiple names for CSS classes, that's just apply...\
  Stack Overflow
- [link](https://github.com/vercel/next.js/discussions/76887)\
  CSS modules classname output format · vercel next.js - GitHub\
  import type { NextConfig } from "next"; const nextConfig: NextConfig = { /\* your existing config options here \*/ webpack: (config,\
  GitHub

You said: i use parceljs

2:44 AM

To strip the cryptographic hashes out of your CSS Modules when building with **Parcel**, you do not need a massive JS configuration file. Parcel processes CSS using its built-in engine (powered by [Lightning CSS](https://lightningcss.dev/css-modules.html)) and natively supports custom naming conventions via your `package.json`. \[[1](https://parceljs.org/languages/css/), [2](https://lightningcss.dev/css-modules.html), [3](https://parceljs.org/languages/css/)]

***

1\. Removing the Crypto Hash in Parcel

By default, Parcel uses the prefix pattern `[hash]_[local]`. To make your HTML human-readable and remove the random character strings, pass a custom string using the **`@parcel/transformer-css`** configurations inside your project's root `package.json` file. \[[1](https://parceljs.org/languages/css/)]

Add this block to your **`package.json`**: \[]

json

```
{
  "name": "your-parcel-project",
  "version": "1.0.0",
  "@parcel/transformer-css": {
    "cssModules": {
      "pattern": "[name]-[local]"
    }
  }
}
```

Use code with caution.

How it compiles:

- **The Placeholders**: `[name]` evaluates to the CSS file name (e.g., `Card`), and `[local]` evaluates to your plain class name (e.g., `title`).
- **The HTML Output**: Instead of a generic hash like `_a74k2_title`, your browser will render a completely clean . \[[1](https://rsbuild.rs/config/output/css-modules), [2](https://parceljs.org/languages/css/)]

***

2\. Best-Practice Patterns for Handling States in Parcel

Now that you have beautiful `[name]-[local]` classes, you must pair them with an efficient system for managing component updates, hover styles, and active states.

System A: Using HTML Data Attributes (Highly Recommended)

Because Parcel compiles a class like `.active` inside `Card.module.css` to `Card-active`, writing JavaScript that flips strings manually can get tedious. Utilizing data attributes ensures you only write standard CSS styles that read like natural language.

- **CSS (`Card.module.css`)**:\
  css

<!---->

```
/* Base state */
.container {
  background-color: #ffffff;
  transition: background 0.3s ease;
}

/* Interactive dynamic state */
.container[data-state="active"] {
  background-color: #e0f2fe;
  border-color: #0284c7;
}

/* Child element state modified by the parent */
.container[data-state="active"] .title {
  color: #0369a1;
}
```

Use code with caution.

- **JavaScript / Component Usage**:\
  jsx

<!---->

```
import styles from './Card.module.css';

export function Card({ isActive }) {
  return (
    <div
      className={styles.container}
      data-state={isActive ? "active" : "idle"}
    >
      <h2 className={styles.title}>Parcel Card Element</h2>
    </div>
  );
}
```

Use code with caution.

System B: Native Dynamic Selectors (Zero JavaScript Overhead)

Whenever possible, offload dynamic interactions to the browser's rendering engine. Native pseudoclasses work perfectly alongside automated scoping without requiring extra setup.

- **CSS (`Button.module.css`)**:\
  css

<!---->

```
.btn {
  padding: 10px 20px;
  background: #4f46e5;
  color: white;
}

/* Handled automatically by the browser layout engine */
.btn:hover { background: #4338ca; }
.btn:focus-visible { outline: 2px solid black; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
```

Use code with caution.

- **JavaScript / Component Usage**:\
  jsx

<!---->

```
import styles from './Button.module.css';

export function Button({ isDisabled }) {
  return <button className={styles.btn} disabled={isDisabled}>Submit</button>;
}
```

Use code with caution.

If you are setting this up right now, let me know:

- What **JavaScript framework** are you bundling with Parcel? (e.g., React, Vue, or Vanilla JS)

- Are you writing standard **CSS** or **Sass/SCSS** files?

- [link](https://parceljs.org/languages/css/)\
  CSS - Parcel\
  Note: In prior versions of Parcel, postcss-modules was used to implement CSS module support. Enabling CSS modules globally occurre...\
  Parcel.js

- [link](https://rsbuild.rs/config/output/css-modules)\
  output.cssModules - Rsbuild\
  You can use the following placeholders in localIdentName : \* \[name] - the basename of the asset. \* \[local] - original class. \* \[ha...\
  Rsbuild

- [link](https://lightningcss.dev/css-modules.html)\
  CSS Modules - Lightning CSS\
  By default, CSS identifiers are global. If two files define the same class names, ids, custom properties, @keyframes , etc., they ...\
  Lightning CSS

You said: what about using vanilla css. like Button, Button-title. only use class selector. what about using class instead of data attr for states

2:49 AM

Using pure vanilla CSS with standard class selectors like `.Button` and `.Button-title` is a fantastic approach. It completely removes the need for complex build tools, config setups, or naming methodologies like BEM.

Here is exactly how to structure your components using only class selectors, along with a bulletproof strategy for handling states using classes instead of data attributes.

***

1\. Component Architecture (Vanilla CSS Class Selectors)

When you drop BEM and data attributes, you rely entirely on a **Prefix-PascalCase** architecture. The main component serves as the namespace prefix, and children use a clean single dash (`-`).

HTML File (`index.html`)

html

```
<div class="Card">
  <h2 class="Card-title">Vanilla CSS Component</h2>
  <p class="Card-desc">Simple, flat class names that are easy to write.</p>
  <button class="Button">Click Me</button>
</div>
```

Use code with caution.

CSS File (`styles.css`)

css

```
/* All selectors are strictly flat class selectors */
.Card {
  padding: 20px;
  border: 1px solid #ccc;
}

.Card-title {
  font-size: 24px;
  margin-bottom: 8px;
}

.Card-desc {
  color: #666;
}

.Button {
  padding: 10px 20px;
}
```

Use code with caution.

***

2\. Handling States Using Class Selectors Only

To manage state changes like `active`, `loading`, or `disabled` using only class selectors, you should use **Global State Utility Classes**.

Instead of generating unique state classes for every single component (like `.Card-isActive` and `.Button-isLoading`), you use generic, reusable state classes prefixed with `is-` or `has-`. You chain these directly onto your component classes in your CSS.

The Code Rules

- **HTML**: Add the state class directly alongside the component class.
- **CSS**: Chain the selectors together _without a space_ (`.Component.is-state`) to target that specific component under that state.

HTML Example

html

```
<!-- The Card has an active state -->
<div class="Card is-active">
  <h2 class="Card-title">Active Card</h2>

  <!-- The Button has a loading state -->
  <button class="Button is-loading">Submitting...</button>
</div>
```

Use code with caution.

CSS Example

css

```
/* Base component styles */
.Card { background: white; }
.Button { background: blue; color: white; }

/* --- STATE STYLES --- */

/* Appled ONLY when .Card also has the .is-active class */
.Card.is-active {
  background: lightblue;
  border-color: blue;
}

/* Change child elements based on the parent's active class (space required here) */
.Card.is-active .Card-title {
  color: darkblue;
}

/* Applied ONLY when .Button also has the .is-loading class */
.Button.is-loading {
  opacity: 0.6;
  cursor: wait;
}
```

Use code with caution.

***

Why This Works Beautifully

- **No Name Collisions**: Because you are chaining `.Card.is-active`, it will never accidentally conflict with a `.Menu.is-active` style.

- **Readable JavaScript**: Toggling states in your JavaScript becomes incredibly simple and readable using standard Web APIs.\
  javascript

<!---->

```
// Simple vanilla JavaScript toggle
const cardElement = document.querySelector('.Card');
cardElement.classList.toggle('is-active');
```

Use code with caution.

If you are building your UI right now, tell me:

- Are you writing your HTML/JS in **pure vanilla files** or using a library like **Lit, React, or Alpine.js**?
- Do you want to see how to organize your **file folder layout** for this type of vanilla architecture?

You said: i use react

2:50 AM

Using this vanilla-like class architecture inside **React** is exceptionally clean. Since you are using **Parcel**, you can keep writing your class names exactly as you requested (`Button`, `Button-title`, `is-active`), and let Parcel automate the scoping under the hood so styles never leak between components.

Here is the complete implementation setup for your React components.

1\. Step 1: Tell Parcel to Use Your Preferred Layout

First, update your project's `package.json` to tell Parcel's CSS compiler to match your exact naming style. This removes the random cryptographic hashes.

Add this to your root **`package.json`**:

json

```
{
  "@parcel/transformer-css": {
    "cssModules": {
      "pattern": "[name]-[local]"
    }
  }
}
```

Use code with caution.

***

2\. Step 2: Write Your Component and State CSS

Name your CSS files to match your component names (e.g., `Card.module.css`). Use your single-dash child convention and `is-` state classes chained directly to the component layout.

`Card.module.css`

css

```
/* Base styles */
.Card {
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.Card-title {
  font-size: 20px;
  font-weight: bold;
}

/* --- STATE STYLES --- */

/* Chained state class (No space) */
.Card.is-active {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

/* Target child elements when the parent component is active */
.Card.is-active .Card-title {
  color: #1e3a8a;
}
```

Use code with caution.

***

3\. Step 3: Implement the React Component

When importing CSS Modules in React, the `styles` object maps your written keys to the compiled class names. To cleanly combine base classes, child classes, and conditional state classes, you can use JavaScript template literals.

`Card.jsx`

jsx

```
import React, { useState } from 'react';
import styles from './Card.module.css';

export function Card() {
  const [isActive, setIsActive] = useState(false);

  // 1. Target the base class
  // 2. Conditionally append the state class if isActive is true
  const cardClassName = `${styles.Card} ${isActive ? styles['is-active'] : ''}`;

  return (
    <div className={cardClassName}>
      <h2 className={styles['Card-title']}>React Component</h2>

      <button onClick={() => setIsActive(!isActive)}>
        Toggle Active State
      </button>
    </div>
  );
}
```

Use code with caution.

_Note: Because classes like `Card-title` and `is-active` contain hyphens, you look them up in JavaScript using bracket notation (`styles['Card-title']`) instead of dot notation._

***

4\. What Happens in the Browser HTML

When Parcel compiles this for the browser, it combines the filename with your layout selector. It will output perfectly clean, human-readable HTML strings:

- **Normal State HTML**:\
  html

<!---->

```
<div class="Card-Card">
  <h2 class="Card-Card-title">React Component</h2>
</div>
```

Use code with caution.

- **Active State HTML**:\
  html

<!---->

```
<div class="Card-Card Card-is-active">
  <h2 class="Card-Card-title">React Component</h2>
</div>
```

Use code with caution.

***

Pro-Tip: Making Class Joining Cleaner

If you dislike typing out template literals like `${styles.Card} ${isActive ? styles['is-active'] : ''}` for your states, you can install a tiny, standard industry utility called `clsx`.

Run `npm install clsx` or `yarn add clsx`, and rewrite your class handling code like this:

jsx

```
import clsx from 'clsx';
import styles from './Card.module.css';

export function Card({ isActive }) {
  return (
    <div className={clsx(styles.Card, isActive && styles['is-active'])}>
      <h2 className={styles['Card-title']}>Clean Component</h2>
    </div>
  );
}
```

Use code with caution.

If you want to see this setup in action, let me know if you would like me to draft a **global layout utility file** for your project, or if you need help configuring **global shared states** across multiple child sub-components.

You said: just hardcode. no import needed. the root element of a component use the class as the component name. children use \_ to connect, Card\_title. states are active, disabled, no extra is. just pass a native array to class, no libraries.

2:55 AM

Hardcoding flat strings directly into your React `className` attributes is the absolute fastest and most lightweight approach. By bypassing CSS modules and bundler configurations entirely, you write pure global CSS with predictable, readable names.

Here is the exact implementation using your exact specifications: `Card` for the root, `Card_title` for children with underscores, and plain `active`/`disabled` state classes joined via a native array.

1\. The React Component (`Card.jsx`)

To join classes using a native array without any libraries, put your conditional layout classes inside an array bracket `[]`, filter out any false or empty values, and call `.join(' ')`.

jsx

```
import React, { useState } from 'react';

export function Card() {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // Native array strategy to dynamically handle states
  const rootClass = [
    'Card',
    active ? 'active' : '',
    disabled ? 'disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      <h1 className="Card_title">Component Title</h1>
      <p className="Card_desc">This architecture relies on flat global class strings.</p>

      <div className="Card_actions">
        <button onClick={() => setActive(!active)}>Toggle Active</button>
        <button onClick={() => setDisabled(!disabled)}>Toggle Disabled</button>
      </div>
    </div>
  );
}
```

Use code with caution.

2\. The Pure CSS Layout (`styles.css`)

Because states like `active` and `disabled` are plain, non-prefixed words, you **must chain them directly** to the component root class (`.Card.active`) in your stylesheet. This ensures they apply strictly to the `Card` component and never accidentally leak into other areas of your application.

css

```
/* --- Root Element --- */
.Card {
  padding: 24px;
  background-color: white;
  border: 1px solid #ccc;
  transition: all 0.2s ease;
}

/* --- Child Elements (Connected via Underscore) --- */
.Card_title {
  font-size: 24px;
  margin-bottom: 8px;
  color: #111;
}

.Card_desc {
  font-size: 14px;
  color: #666;
}

.Card_actions {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

/* --- Pure Hardcoded States (Chained selectors, no space) --- */
.Card.active {
  border-color: blue;
  background-color: #f0f4ff;
}

.Card.disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* --- Changing Child Styles Based On Parent Component State --- */
.Card.active .Card_title {
  color: blue;
}
```

Use code with caution.

3\. How the Compiled Browser HTML Looks

When your users interact with your buttons, the DOM updates instantly with clean, predictable structural paths:

- **Default State**:
- **Active State**:
- **Both States Triggered**:

If you are expanding this layout setup across your app, let me know:

- Do you want to see how to handle a **deeply nested element** (e.g., a button inside the `Card_actions` container)?
- Do you need an example of a **modifier/variation state** (like a `large` or `dark` version of the component)?

You said: i guess react can handle class array, no need to join. class = \['Card', active && 'active']

2:56 AM

Actually, React **cannot** natively handle an array passed directly to the `className` attribute.

If you pass a raw array like `className={['Card', active && 'active']}`, React will automatically convert that array into a string by adding commas between the items. Your browser will render it as `class="Card,active"`, which breaks your CSS because browsers read spaces, not commas, to separate classes.

The cleanest, shortest way to do this in modern React without typing `.join(' ')` or using a library is to use a standard **JavaScript template literal** \[1].

Here is the exact, zero-dependency code setup:

1\. The Shortest React Implementation

jsx

```
import React, { useState } from 'react';

export function Card() {
  const [active, setActive] = useState(false);

  return (
    /* template literals keep it on one hardcoded line */
    <div className={`Card ${active ? 'active' : ''}`}>
      <h1 className="Card_title">Title</h1>
      <button onClick={() => setActive(!active)}>Toggle</button>
    </div>
  );
}
```

Use code with caution.

2\. If You Still Prefer the Array Layout

If you prefer the visual layout of an array because it handles multiple states cleanly, you still have to append `.join(' ')` at the end of the brackets so the array turns into a space-separated string.

jsx

```
const rootClass = [
  'Card',
  active && 'active',
  disabled && 'disabled'
].filter(Boolean).join(' '); // Removes false/empty values and joins with a space

return <div className={rootClass}>...</div>;
```

Use code with caution.

Would you like to see how to implement **theme variations** (like a `dark` or `large` layout) using this exact same template literal pattern?

You said: is there something like classList

2:57 AM

Yes, React components can use the native browser `classList` API, but **you should generally avoid it**.

In React, the framework expects to completely control the DOM. If you use `element.classList.add()` manually, you are bypassing React's rendering cycle. This can cause rendering bugs where React overrides your classes or gets out of sync with the true state of the UI.

However, if you want a clean, array-like syntax that works exactly like `classList` but plays nicely with React, you can write a **simple, 1-line JavaScript helper function** right inside your component file.

Here is how to do both approaches.

***

Option 1: The React-Safe "classList" Helper (Recommended)

Instead of pulling in an external npm package, you can write a tiny native array function. This gives you the clean, push-and-remove feel of `classList` while keeping React in total control.

jsx

```
import React, { useState } from 'react';

export function Card() {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // 1. Create a native array acting like your classList
  const classList = ['Card'];

  // 2. "Push" classes conditionally based on state
  if (active) classList.push('active');
  if (disabled) classList.push('disabled');

  return (
    // 3. Convert the array into a space-separated string for the browser
    <div className={classList.join(' ')}>
      <h1 className="Card_title">Title</h1>

      <button onClick={() => setActive(!active)}>Toggle Active</button>
      <button onClick={() => setDisabled(!disabled)}>Toggle Disabled</button>
    </div>
  );
}
```

Use code with caution.

***

Option 2: Using the Real Native `classList` (Using `useRef`)

If you absolutely must use the browser's native `classList` API, you have to grab a direct reference to the DOM element using React's `useRef` hook. You then manipulate the classes inside a `useEffect` hook.

_Warning: This requires significantly more boilerplate and breaks the standard declarative pattern of React._

jsx

```
import React, { useState, useRef, useEffect } from 'react';

export function Card() {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null); // Step 1: Create a reference container

  // Step 3: Listen for state changes and update the native DOM element directly
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (active) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }, [active]);

  return (
    // Step 2: Attach the ref to the root element
    <div ref={cardRef} className="Card">
      <h1 className="Card_title">Native classList Card</h1>
      <button onClick={() => setActive(!active)}>Toggle</button>
    </div>
  );
}
```

Use code with caution.

If you want to keep your components as lightweight as possible, tell me:

- Do you prefer the look of **Option 1 (the `if` push layout)** or do you want to keep using **inline expressions** right inside the `return` statement?

You said: how to override that behavior. like i even do not use classname i use class which supports an array. i change everything under the hood.

3:00 AM

To completely change how React processes attributes—allowing you to use a native `class` attribute that accepts a raw array without turning it into commas—you have to extend or intercept React's rendering engine.

You can achieve this using **two different methods** depending on your build setup.

***

Method 1: The Modern React 19 Custom Element Rule (Zero Config)

If you are running **React 19**, React introduced a massive architectural change to how attributes are handled. It no longer treats unknown attributes like custom strings. If you pass an array to a custom element or a non-standard property, it leaves it alone or lets you handle it \[1].

To make this completely native and avoid React converting your array into a comma string, you can create a super-lightweight **React Wrapper Component** that intercepts the `class` prop.

jsx

```
import React from 'react';

// A generic primitive element wrapper
export function Box({ as: Element = 'div', class: classArray, children, ...props }) {

  // Intercept the 'class' array right here, filter, and join with spaces
  const cleanClassString = Array.isArray(classArray)
    ? classArray.filter(Boolean).join(' ')
    : classArray;

  return (
    <Element className={cleanClassString} {...props}>
      {children}
    </Element>
  );
}
```

Use code with caution.

How you use it in your application:

Now you can write your elements cleanly using raw arrays and the standard `class` attribute, completely overriding React's built-in array-to-comma parsing.

jsx

```
import React, { useState } from 'react';
import { Box } from './Box'; // Your custom wrapper

export function Card() {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    /* Look mom, no .join(' '), no libraries, pure clean arrays */
    <Box class={['Card', active && 'active', disabled && 'disabled']}>
      <h1 className="Card_title">Title</h1>

      <button onClick={() => setActive(!active)}>Toggle Active</button>
    </Box>
  );
}
```

Use code with caution.

***

Method 2: Intercepting JSX at Build Time (The Parcel / Babel Way)

If you want to use standard tags directly instead of a wrapper, you have to tell your bundler (**Parcel**) to use a custom JSX factory instead of React's standard `React.createElement`.

1\. Create a Custom JSX Runtime (`custom-jsx.js`)

Create a file that intercepts every JSX node before React renders it. If it finds a `class` property that is an array, it automatically translates it into a space-separated string.

javascript

```
import React from 'react';

export function customCreateElement(type, props, ...children) {
  if (props && props.class) {
    if (Array.isArray(props.class)) {
      // Intercept the array and overwrite it with a space-separated string
      props.className = props.class.filter(Boolean).join(' ');
    } else {
      props.className = props.class;
    }
    delete props.class; // Delete the non-standard property
  }
  return React.createElement(type, props, ...children);
}
```

Use code with caution.

2\. Tell Parcel to use your custom compiler

Add a `.babelrc` file to the root of your Parcel project to swap out React's default compiler for your interceptor script:

json

```
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", {
      "pragma": "customCreateElement",
      "pragmaFrag": "React.Fragment"
    }]
  ]
}
```

Use code with caution.

3\. Write Pure Array Code

Once the compiler is set up, just import your custom element creator at the top of your component files. Your array code will compile perfectly behind the scenes.

jsx

```
/* /** @jsx customCreateElement */
import { customCreateElement } from './custom-jsx';
import React, { useState } from 'react';

export function Card() {
  const [active, setActive] = useState(false);

  return (
    // Your custom factory intercepts this and strips out the commas automatically!
    <div class={['Card', active && 'active']}>
      <h1 class="Card_title">Overridden Behavior</h1>
    </div>
  );
}
```

Use code with caution.

If you are setting this up right now, let me know:

- Which version of React are you running? (If you are on **React 19**, Method 1 is significantly faster and cleaner to deploy).
- Do you want to see how to type this correctly if your project uses **TypeScript**?

You said: i will use data attr instead. use styles.title or 'Card\_title''

3:06 AM

Transitioning to HTML `data-*` attributes is an excellent pivot. It gives you the best of both worlds: you get to use completely static string attributes for your classes (no arrays, no template literal toggles, no `.join()`), and your React components stay fully declarative.

Here is the exact implementation using your preference of global class paths like `'Card_title'` alongside standard `data-active` attributes.

1\. The React Component

Because the state is managed entirely by the `data-active` attribute, your class names never need to change dynamically. You can hardcode your static class strings directly into the component.

jsx

```
import React, { useState } from 'react';

export function Card() {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    /* Classes are static strings. States are handled by native data attributes */
    <div
      className="Card"
      data-active={active}
      data-disabled={disabled}
    >
      <h1 className="Card_title">Component Title</h1>
      <p className="Card_desc">Clean, unmutated class strings.</p>

      <div className="Card_actions">
        <button onClick={() => setActive(!active)}>Toggle Active</button>
        <button onClick={() => setDisabled(!disabled)}>Toggle Disabled</button>
      </div>
    </div>
  );
}
```

Use code with caution.

2\. The Vanilla CSS Setup

In your stylesheet, you target the component states by chaining the attribute selector directly to the root element (`.Card[data-active="true"]`).

css

```
/* --- Base Structure --- */
.Card {
  padding: 24px;
  background-color: white;
  border: 1px solid #ccc;
  transition: all 0.2s ease;
}

.Card_title {
  font-size: 24px;
  color: #111;
}

.Card_desc {
  font-size: 14px;
  color: #666;
}

/* --- State Rules via Data Attributes (No space) --- */
.Card[data-active="true"] {
  border-color: blue;
  background-color: #f0f4ff;
}

.Card[data-disabled="true"] {
  opacity: 0.5;
  pointer-events: none;
}

/* --- Modifying Children Based on Parent State (Space required) --- */
.Card[data-active="true"] .Card_title {
  color: blue;
}
```

Use code with caution.

Why this is a great approach:

- **Zero Boilerplate**: You never have to map out logic blocks or arrays in JavaScript just to append a state class string.
- **Inspectable DOM**: When debugging in your browser's Developer Tools, reading tells you the exact operational state of the UI at a glance.

If you want to refine this approach, let me know:

- Do you want to see how to handle **multiple distinct variants** (like `data-variant="dark"` or `data-variant="light"`) using this exact strategy?
- Do you need an example of handling a **child element's individual state** (like a specific button's state inside the card actions)?

You said: i mean styles.title or 'Card\_title''

3:06 AM

Using `styles.title` (CSS Modules) or `'Card_title'` (Global Vanilla CSS) alongside data attributes makes your React code extremely clean.

Because the state lives entirely inside the HTML `data-*` attribute, your `className` properties are **100% static strings**. You completely eliminate conditional array filtering, ternary operators, and template literals from your markup.

Here is the exact comparison of both approaches so you can pick the one that matches your project structure.

***

Approach A: Using CSS Modules (`styles.title`)

This keeps your styles automated and scoped to the component file without any cryptographic hashes (using your Parcel configuration).

`Card.jsx`

jsx

```
import React, { useState } from 'react';
import styles from './Card.module.css';

export function Card() {
  const [active, setActive] = useState(false);

  return (
    /* The class names are completely static properties */
    <div className={styles.Card} data-active={active}>
      <h1 className={styles.title}>Component Title</h1>

      <button onClick={() => setActive(!active)}>Toggle Active</button>
    </div>
  );
}
```

Use code with caution.

`Card.module.css`

css

```
.Card {
  padding: 24px;
  border: 1px solid #ccc;
}

.title {
  font-size: 24px;
  color: #111;
}

/* State rules target the automated class name + the data attribute */
.Card[data-active="true"] {
  border-color: blue;
}

/* Target the child element when the parent layout is active */
.Card[data-active="true"] .title {
  color: blue;
}
```

Use code with caution.

***

Approach B: Using Global Vanilla CSS (`'Card_title'`)

This uses pure, hardcoded string literals directly in your JSX. It removes all CSS imports from your JavaScript and relies on standard global stylesheets.

`Card.jsx`

jsx

```
import React, { useState } from 'react';

export function Card() {
  const [active, setActive] = useState(false);

  return (
    /* Pure, unmutated string literals */
    <div className="Card" data-active={active}>
      <h1 className="Card_title">Component Title</h1>

      <button onClick={() => setActive(!active)}>Toggle Active</button>
    </div>
  );
}
```

Use code with caution.

`global-styles.css`

css

```
.Card {
  padding: 24px;
  border: 1px solid #ccc;
}

.Card_title {
  font-size: 24px;
  color: #111;
}

/* State rules chain directly to the hardcoded component name */
.Card[data-active="true"] {
  border-color: blue;
}

/* Modifies the underscore child element path */
.Card[data-active="true"] .Card_title {
  color: blue;
}
```

Use code with caution.

***

Which one should you pick?

- Go with **Approach A (`styles.title`)** if you want to make sure your styles stay safely isolated inside their own files and never conflict across your app.
- Go with **Approach B (`'Card_title'`)** if you want the absolute highest performance, zero bundler setup, and the simplest possible code to read.

If you are setting this up across your application, let me know:

- Do you need to handle **multiple active values** at once (like `data-status="loading"` vs `data-status="success"`)?
- Would you like an example of how to handle **hover and focus states** without using data attributes at all?

You said: i mean which should i choose, not how to write

3:07 AM

Choose **Approach B (`'Card_title'`) with global CSS**.

Since you explicitly prefer hardcoded class names, want zero dependency overhead, and dislike template literals/arrays for state management, Approach B fits your engineering style perfectly.

Why you should choose Approach B (`'Card_title'`):

- **Matches Your Code Aesthetic**: Your JSX remains entirely clean, predictable string literals (`className="Card_title"`).
- **Zero JavaScript Processing**: React doesn't have to look up object properties (`styles.title`) or execute JavaScript expressions on every single render. It simply drops the raw string into the DOM.
- **Simplest Component API**: Your state management is strictly offloaded to native HTML attributes (`data-active={active}`). This creates a separation of concerns: JavaScript handles the data state, and the CSS file handles the presentation layout.
- **No Build Engine Friction**: You do not have to worry about configuring Parcel, maintaining `.babelrc` presets, or overriding local identifier configurations to prevent crypto hashes.

When to pivot to Approach A (`styles.title`):

Only choose Approach A if you are working on a massive application with a large team where developers are likely to accidentally reuse the word `Card` in different files, creating global style collisions. If you have full control over your component naming schema, stick with **Approach B**.

If you're ready to lay this out across your project, let me know:

- Do you want to see the ideal **file folder structure** for organizing global vanilla component stylesheets?
- Do you need an example of handling a **child layout variation** (e.g., a `Card_title` that needs to look different on a promo card)?

You said: Card\_title or Card-title

3:07 AM

Choose **`Card-title` (with a hyphen)**.

While both are valid, the hyphenated style is the vastly superior choice for your vanilla CSS and React setup for three specific reasons:

1\. Superior Code Readability

Visually separating words with a hyphen makes long strings much easier for human eyes to scan quickly. Underscores tend to look heavy and can easily mask errors in dense blocks of code.

- **Bad**: `class="CardLayout_titleText"` (cluttered, hard to read)
- **Good**: `class="CardLayout-titleText"` (clean, instantly readable)

2\. Standard Text Selection Behavior

In almost all modern code editors (like VS Code, Cursor, and Zed), a double-click on a word stops at a hyphen but includes an underscore.

- If you double-click `title` in `Card_title`, your editor will highlight the **entire string** (`Card_title`).
- If you double-click `title` in `Card-title`, your editor highlights **only the word** `title`. This makes copying, pasting, and refactoring child names significantly faster.

3\. Native CSS Alignment

In the CSS ecosystem, hyphens are the universal standard for separating multi-word class names (e.g., `text-align`, `font-size`, `main-content`). Using `Card-title` keeps your custom selectors perfectly aligned with native CSS property syntax.

***

Your Final, Bulletproof Setup

Your entire application can now be written using this incredibly clean, zero-dependency blueprint:

**The React Component:**

jsx

```
export function Card({ active }) {
  return (
    <div className="Card" data-active={active}>
      <h1 className="Card-title">Component Title</h1>
      <p className="Card-desc">Perfect, flat string literals.</p>
    </div>
  );
}
```

Use code with caution.

**The Vanilla CSS:**

css

```
.Card { padding: 20px; }
.Card-title { font-size: 24px; }
.Card-desc { color: #666; }

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title { color: blue; }
```

Use code with caution.

Are you ready to build out your component library with this design pattern, or do you want to look at how to handle **nested layout structures** (like a title inside a header wrapper) using the hyphen convention?

#

can oklch move inside css variable :root { /\* Raw LCH values: Lightness, Chroma, Hue \*/ --lch-blue: 54% 0.15 255; --lch-red: 51% 0.2 31; --lch-green: 65% 0.23 142; /\* Semantic colors built on primitives \*/ --color-link: oklch(var(--lch-blue)); --color-negative: oklch(var(--lch-red)); --color-positive: oklch(var(--lch-green)); }

Yes, OKLCH works perfectly inside CSS variables using this exact syntax. Modern browser engines parse comma-free whitespace lists inside color functions correctly. \[[1](https://openreplay.com/tools/hex-to-oklch/)]

Why This Works

- **Whitespace Syntax**: Modern CSS color functions (`oklch()`, `lch()`, `rgb()`) accept space-separated values.
- **Token Substitution**: The `var()` function drops the raw numbers directly into the color function before rendering.
- **Component Reusability**: Storing raw channels lets you reuse components across different color spaces or modify individual channels. \[[1](https://12daysofweb.dev/2022/css-color-spaces-relative-color-syntax/), [2](https://www.matuzo.at/blog/2022/100daysof-day39)]

Browser Compatibility

All major evergreen browsers fully support this syntax: \[[1](https://uploadcare.com/blog/oklch-in-css/)]

- **Safari**: Supported since version 15.4.
- **Chrome/Edge**: Supported since version 111.
- **Firefox**: Supported since version 113. \[[1](https://chrisburnell.com/article/old-design-system-new-colors/), [2](https://atmos.style/glossary/oklch-color-space)]

Best Practice Alternative

While your approach works flawlessly, the standard community pattern uses individual variables for each channel. This method offers greater flexibility for on-the-fly modifications, such as changing only the lightness on hover. \[[1](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)]

css

```
:root {
  /* Individual channel primitives */
  --blue-l: 54%;
  --blue-c: 0.15;
  --blue-h: 255;

  /* Combined semantic color */
  --color-link: oklch(var(--blue-l) var(--blue-c) var(--blue-h));
}

/* Example: Easily create a hover state by overriding one channel */
.button:hover {
  --blue-l: 60%;
}
```

Use code with caution.

Would you like help setting up a **dark mode palette transformation** using these variables, or should we look at creating **accessible contrast steps** with OKLCH?

- [link](https://openreplay.com/tools/hex-to-oklch/)\
  HEX to OKLCH Converter\
  Modern browsers support OKLCH directly in CSS using the oklch() function. For example: oklch(40% 0.2 270). The values represent li...\
  \
  OpenReplay
- [link](https://12daysofweb.dev/2022/css-color-spaces-relative-color-syntax/)\
  CSS Color Spaces and Relative Color Syntax\
  Dec 21, 2022 — CSS Color Module Level 4 introduces a new syntax for color functions like rgb() and hsl() . The new syntax omits commas, relying o...\
  \
  \
  12 Days of Web
- [link](https://www.matuzo.at/blog/2022/100daysof-day39)\
  Day 39: comma-separated functional color notations\
  Nov 17, 2022 — On the other hand, new color functions like lab() , hwb() , lch() , or oklch() only support the space-separated syntax.\
  \
  \
  Manuel Matuzovic

Show all

You said: i mean like you say --foo: oklch(...) and then color: var(...)

Yes, that is the most common and standard way to use OKLCH. You define the full color function inside the variable, and then apply it directly to your CSS properties.

Here is exactly how that looks:

css

```
:root {
  /* Define the complete color function inside the variable */
  --color-link: oklch(54% 0.15 255);
  --color-negative: oklch(51% 0.2 31);
}

/* Apply it directly to your elements */
a {
  color: var(--color-link);
}

.error-message {
  background-color: var(--color-negative);
}
```

Use code with caution.

Why This Method Is Ideal

- **Clean Syntax**: Your component styles stay short and readable.

- **Global Theming**: Changing the value in `:root` instantly updates the color everywhere.

- **Fallbacks**: You can easily add fallback colors for older browsers:\
  css

<!---->

```
a {
  color: rgb(0, 102, 204); /* Fallback */
  color: var(--color-link); /* Modern browsers */
}
```

Use code with caution.

Would you like to see how to add **alpha transparency (opacity)** to these variables, or should we set up a **hover state scaling utility**?
