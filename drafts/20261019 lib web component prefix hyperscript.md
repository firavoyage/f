# could react have chosen class instead of classname

5:26 AM

<mark><strong>Yes, React could absolutely have chosen<span> </span><code dir="ltr">class</code><span> </span>instead of<span> </span></strong></mark>**`className`.** The decision to use `className` was a conscious architectural design choice by the early React team, but it was never a technical impossibility. [link](https://github.com/preactjs/preact/issues/103)

Other modern JSX-based frameworks—most notably [Preact](https://preactjs.com/) and [SolidJS](https://www.solidjs.com/)—allow you to use `class` seamlessly without any issues. [link](https://dev.to/swyx/how-to-use-class-instead-of-classname-with-preact-and-typescript-2bjh)

The choice of `className` comes down to two main historical reasons, along with a few technical workarounds that React chose not to use at the time:

### 1. Alignment with the Browser DOM (Not HTML)

React's JSX looks like HTML, but it is actually a syntax extension for JavaScript that maps directly to browser DOM properties. [link](https://medium.com/@rohitdeshpande9922/why-react-uses-classname-rather-than-class-1d656317995d)

- In the native browser DOM API, if you want to change an element's class via JavaScript, you don't type `element.class = "foo"`. You have to type `element.className = "foo"`.
- React's creators chose to mirror the **JavaScript DOM API properties** rather than HTML attributes to keep the rendering layer consistent. [link](https://github.com/preactjs/preact/issues/103)

### 2. The JavaScript Reserved Keyword Obstacle

In JavaScript, `class` is a reserved keyword used to define ES6 classes (e.g., `class MyComponent extends React.Component`).\
When React was created, the team wanted to avoid conflicts where a compiler or developer might get confused by using a reserved keyword as an object key or variable name. [link](https://stackoverflow.com/questions/46989454/class-vs-classname-in-react-16)

### Why React _could_ have used `class` anyway

React could have worked around the keyword limitation using methods that competing frameworks eventually adopted:

- **Object Properties:** JavaScript allows reserved words to be used as object keys as long as they are quoted or processed by modern compilers (e.g., `React.createElement("div", { "class": "container" })`). [link](https://www.reddit.com/r/reactjs/comments/le20iw/i%5Fneed%5Fan%5Fextension%5Fthat%5Fautomatically%5Fchanges/)

- **Compilers Handle It:** Tools like Babel can effortlessly transform JSX attributes. If React had defined the specification to accept `class`, the transpiler would have simply converted it behind the scenes without breaking the JavaScript runtime. [link](https://github.com/preactjs/preact/issues/103)

- **ES6 Destructuring Issues:** One minor headache of using `class` shows up when destructuring props:\
  javascript

<!---->

```
// This throws a syntax error because 'class' is a keyword:
const { class, children } = props;

// You have to rename it on the fly, which is clunky:
const { class: className, children } = props;
```

Use code with caution.\
While annoying, this still wouldn't have physically prevented React from adopting the name. [link](https://medium.com/@rohitdeshpande9922/why-react-uses-classname-rather-than-class-1d656317995d)

### The Bottom Line

React chose `className` because it valued strict consistency with the underlying JavaScript DOM environment over matching HTML syntax. While the React team actually [discussed switching back to `class` in the past](https://github.com/facebook/react/issues/13525), the massive ecosystem-wide breaking change and migration cost mean `className` is here to stay. [link](https://github.com/preactjs/preact/issues/103)

Would you like to explore how to **alias or configure React** to accept the `class` attribute anyway, or look into how frameworks like **Preact** handle it differently?

- [link](https://github.com/preactjs/preact/issues/103)\
  GitHub\
  What's the reason behind using class instead of className? #103 - GitHub\
  className was originally chosen because that's the DOM property name, but in reality the value of that prop gets transformed prior...
- [link](https://medium.com/@rohitdeshpande9922/why-react-uses-classname-rather-than-class-1d656317995d)\
  Medium\
  Why React uses className rather than class ? | by Rohit Deshpande | Medium\
  Reasons: Consistency with DOM property names (React aligns with DOM object property \`className\` rather than HTML attribute \`class\`
- [link](https://stackoverflow.com/questions/30968113/warning-unknown-dom-property-class-did-you-mean-classname)\
  Stack Overflow\
  Warning: Unknown DOM property class. Did you mean className?\
  If we use the class instead of className, the react will infer it as javascript class instead of html class attribute. javascript ...

Show all

# can you use react wo jsx

5:29 AM

<mark>Yes,<span> </span><strong>you can completely use React without JSX</strong></mark>. JSX is not a requirement for using React; it is merely **syntactic sugar** for standard JavaScript function calls. [link](https://legacy.reactjs.org/docs/react-without-jsx.html)

When you write JSX, a compiler (like Babel) transforms it into standard JavaScript objects. You can skip the build step entirely and write those calls yourself. [link](https://dev.to/dperrymorrow/using-react-without-jsx-no-build-14gg)

### How it Works: `React.createElement`

Every JSX element compiles down to a `React.createElement(component, props, ...children)` function call. [link](https://ja.reactjs.org/docs/react-without-jsx.html)

Here is a direct comparison of writing a component with and without JSX: [link](https://ja.reactjs.org/docs/react-without-jsx.html)

| With JSX                            | Without JSX                                                  |
| ----------------------------------- | ------------------------------------------------------------ |
| `<div className="box">Hello!</div>` | `React.createElement('div', { className: 'box' }, 'Hello!')` |

### Code Example

If you want to build a small application without configuring build tools or compilers, you can write your components using plain JavaScript: [link](https://legacy.reactjs.org/docs/react-without-jsx.html)

javascript

```
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Define a component using a normal function
function Greeting(props) {
  return React.createElement('h1', null, `Hello, ${props.name}!`);
}

// 2. Nest components and elements
function App() {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(Greeting, { name: 'Sarah' }),
    React.createElement('p', null, 'Welcome to a JSX-free React app.')
  );
}

// 3. Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
```

Use code with caution.

### Pro-Tip for Tenser Code

If writing `React.createElement` repeatedly feels too tedious, you can create a shorthand alias to keep your code clean: [link](https://legacy.reactjs.org/docs/react-without-jsx.html)

javascript

```
const e = React.createElement;

// Much shorter to write:
e('div', { id: 'main' },
  e('p', null, 'This is much easier to read.')
);
```

Use code with caution.

While JSX makes it significantly easier to visualize complex, nested UI components, writing raw `React.createElement` is ideal when you want to avoid build pipelines, work directly in a single static HTML file, or dynamically generate elements based on specific programming logic. [link](https://www.reddit.com/r/react/comments/1bmfctb/when%5Fcan%5Fyou%5Fskip%5Fjsx%5Fin%5Freact/)

Are you trying to **skip the build step** completely for a simple script, or are you looking to use a **different templating alternative** to JSX? Let me know and I can provide an example tailored to your project.

- [link](https://legacy.reactjs.org/docs/react-without-jsx.html)\
  React – A JavaScript library for building user interfaces\
  React Without JSX – React\
  Developers can assign shorthand variables like const e = React.createElement or use community projects like react-hyperscript and ...
- [link](https://www.reddit.com/r/react/comments/1bmfctb/when%5Fcan%5Fyou%5Fskip%5Fjsx%5Fin%5Freact/)\
  Reddit\
  When Can You Skip JSX in React? - Reddit\
  As long as the first letter of the variable is upper case you can use jsx for this: With nested components, I imagine it would be ...
- [link](https://dev.to/dperrymorrow/using-react-without-jsx-no-build-14gg)\
  DEV Community\
  Using React without JSX == no build - DEV Community\
  JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilati...

Show all

# what if react had chosen js function like hyperscript instead of jsx as the idiomatic way

5:31 AM

If React had standardized on a **hyperscript** syntax (e.g., using an `h()` function like `h('div', { className: 'box' }, [ ... ])`) instead of introducing **JSX** in 2013, the landscape of modern web development would look remarkably different. [link](https://www.reddit.com/r/reactjs/comments/chwu2g/why%5Fjsx%5Fover%5Fhyperscript/)

Choosing a pure-JavaScript approach over an HTML-like extension would have radically altered tooling, the visual design of components, and who could easily adopt the framework.

***

### 1. The Tooling Revolution (That Wouldn't Have Happened)

When React launched, browser support for advanced JavaScript was limited. JSX forced the community to adopt **transpilers** like [Babel](https://babeljs.io/) to convert `<div />` into `React.createElement('div')`. [link](https://legacy.reactjs.org/docs/react-without-jsx.html)

- **If Hyperscript Won:** React would have worked **out of the box** in any standard browser or code editor without a build step.
- **The Ripple Effect:** The pressure to build complex, heavy build pipelines (Webpack, Vite, Babel) early in a project’s life cycle would have been significantly lower. Front-end development might have stayed "lightweight" for much longer. [link](https://dev.to/dperrymorrow/using-react-without-jsx-no-build-14gg)

### 2. Radical Shift in Component Architecture

Hyperscript inherently changes how developers write visual structures because nesting deep trees of pure function calls can quickly become difficult to read. [link](https://www.reddit.com/r/javascript/comments/48ype5/do%5Fpeople%5Fstill%5Fuse%5Fjsx/)

- **Ultra-Granular Components:** To avoid a massive, unreadable mess of nested parentheses, commas, and brackets, developers would have been strictly forced to break down UI into **tiny, single-responsibility functions** and constants. [link](https://www.reddit.com/r/reactjs/comments/chwu2g/why%5Fjsx%5Fover%5Fhyperscript/)
- **Composition via JS Arrays:** Conditional rendering and mapping wouldn't require clumsy curly-brace interpolations (`{condition && <Component />}`). Instead, developers would have leveraged native array manipulation, filter pipelines, and vanilla JavaScript expressions directly as function arguments. [link](https://stackoverflow.com/questions/33516344/reactjs-without-jsx)

### 3. A Completely Different Web Ecosystem

JSX bridged the psychological gap between web designers, HTML/CSS authors, and JavaScript engineers. [link](https://www.reddit.com/r/reactjs/comments/5jonxn/why%5Fis%5Fhyperscript%5Frarely%5Fused%5Fbeing%5Fless%5Fnoisy/)

- **Slower Initial Adoption:** React initially faced heavy skepticism ("HTML in my JavaScript?!"). However, once developers realized they could copy-paste raw HTML code into their JavaScript with minimal tweaks, adoption exploded. Pure hyperscript would have alienated designers and less-technical developers, potentially keeping React a niche tool for hardcore functional programming enthusiasts. [link](https://www.reddit.com/r/reactjs/comments/5jonxn/why%5Fis%5Fhyperscript%5Frarely%5Fused%5Fbeing%5Fless%5Fnoisy/)
- **The Rise of Alternative Frameworks:** Vue and Angular heavily leaned into HTML-based templating to attract the mass market. Without JSX, a competing framework that embraced an HTML-centric model might have comfortably taken the top spot in the industry.

### 4. How TypeScript and IDEs Would Have Evolved

- **No `tsconfig` Hackery:** TypeScript wouldn't have needed to build deep, specialized language support explicitly to parse JSX elements (`.tsx`).
- **Autocompletion Out-of-the-Box:** IDEs wouldn't have required specialized syntax highlighters or plugins to parse a hybrid language format. Standard JavaScript autocomplete would have naturally inferred arguments for the `h()` function right from day one. [link](https://mtsknn.fi/blog/hyperscript-hyperior-alternative-to-jsx/)

***

### How Code Would Compare

Instead of the JSX standard we use today, the entire world would be writing code that looks similar to what [Mithril.js](https://mithril.js.org/) or [Preact's `h()`](https://preactjs.com/) exports: [link](https://www.reddit.com/r/reactjs/comments/s5e8y7/hyperscript%5Fthe%5Fhidden%5Flanguage%5Fof%5Freact/)

| Standard JSX Style                                               | Speculative Hyperscript Style                                                                                                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| function Card({ title, children }) {return ({title}{children});} | import { div, h2 } from 'react-hyperscript';const Card = ({ title, children }) => (div('.card', \[h2(title),div('.content', children)])); |

Are you considering building a project **without a compilation step**, or are you evaluating alternative modern frameworks like **SolidJS** or **Vue** that handle templating differently? Let me know what you're working on!

- [link](https://www.reddit.com/r/reactjs/comments/chwu2g/why%5Fjsx%5Fover%5Fhyperscript/)\
  Reddit\
  Why JSX over HyperScript : r/reactjs\
  not entirely compatible. I like dropping straight variables into props or run a map children. less tooling required.
- [link](https://www.reddit.com/r/reactjs/comments/5jonxn/why%5Fis%5Fhyperscript%5Frarely%5Fused%5Fbeing%5Fless%5Fnoisy/)\
  Reddit\
  Why is hyperscript rarely used, being less noisy than JSX? : r/reactjs\
  JSX is more of a hybrid between JS and HTML, messes up editor's syntax highlighting and requires tons of plugins. at least enough ...
- [link](https://stackoverflow.com/questions/33516344/reactjs-without-jsx)\
  Stack Overflow\
  ReactJS without JSX - javascript\
  JavaScript comments, arrays, objects and functions are used, DOM components are really easy to use. For custom components you can ...

Show all

## what do ppl say on how hyperscript or jsx reads

what do ppl say on how hyperscript or jsx reads

6:08 AM

The debate over how **JSX** versus **hyperscript** reads highlights a fundamental divide in software engineering: **visual layout intuition** versus **functional syntax consistency**.

Developers describe the reading experience of both syntaxes in starkly different ways.

***

### The Readability of JSX

Most developers argue that JSX reads like a **visual layout blueprint**. Because it mirrors HTML, the human eye processes the structure top-down based on familiar document hierarchies.

- **What people love about reading JSX:**
  - **Visual Symmetry:** The symmetry of opening and closing tags (`<div>` ... `</div>`) creates clear, scannable boundaries. It is instantly obvious where a UI container begins and ends.
  - **Familiar Scannability:** Since web developers are trained to read HTML, they can skim a JSX file and instantly map the code to a mental image of the final web page.
  - **Explicit Property Separation:** Attributes are clearly separated from the structural elements (e.g., `<button className="btn" onClick={foo}>`), making it easy to distinguish between _what the element is_ and _how it behaves_.
- **What people dislike about reading JSX:**
  - **The "Context Switch" Noise:** When mixing JavaScript and UI layout, reading the code can feel jarring. Jumping back and forth between XML tags and JavaScript expressions inside curly braces (`{map((item) => ...)}`) creates a fragmented reading rhythm.

***

### The Readability of Hyperscript

People who prefer hyperscript describe it as reading **pure, unadulterated logic**. It strips away the illusion of markup and treats the UI exactly as what it is under the hood: a tree of execution calls.

- **What people love about reading Hyperscript:**
  - **Syntactic Harmony:** There is no jarring shift between two different languages. Everything reads as a standard JavaScript function pipeline. You read it the exact same way you read data transformations, API calls, or math equations.
  - **CSS-Style Conciseness:** Many hyperscript implementations use Emmet/CSS shortcuts (e.g., `h('div.card.active')`). Proponents say this is incredibly clean to read because it eliminates the wordy `className="..."` boilerplate entirely.
  - **Flatter Code:** Because complex conditionals and loops are just native JavaScript expressions passing arrays, developers say it avoids the "bracket soup" deeply nested inside JSX curly braces.
- **What people dislike about reading Hyperscript:**
  - **The "Trailing Bracket" Nightmare:** For deeply nested structures, the end of a block turns into a visually unreadable wall of closing brackets, parentheses, and commas: `])]), ])`. It forces the reader to rely heavily on IDE indentation guides to figure out where they are.
  - **Lack of Visual Anchors:** Without explicit closing tags, it takes more mental effort to distinguish between a component's properties and its children. A massive object argument can easily blur into the child array that follows it.

***

### Direct Comparison: The Cognitive Load

| Reading Metric                  | JSX                                              | Hyperscript                                        |
| ------------------------------- | ------------------------------------------------ | -------------------------------------------------- |
| **Primary Mental Model**        | Reading a **document** / layout sketch.          | Reading a **recipe** / tree execution.             |
| **Where the eye focuses**       | On the tag names and hierarchy.                  | On the function arguments and arrays.              |
| **Deep nesting readability**    | Good (Closing tags act as structural anchors).   | Poor (Becomes a maze of `)]}` symbols).            |
| **Logic insertion readability** | Clunky (Requires switching paradigms via `{ }`). | Seamless (It's already just JavaScript functions). |

Are you exploring this because you are trying to **write cleaner code** in your current React components, or are you looking to try out a **hyperscript-based framework** like Mithril or Hyperapp?

# 