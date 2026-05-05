#

framework agnostic library to build component libraries that can compile to any

May 3, 2026

The most effective framework-agnostic library for building components that **compile** to native code for any framework is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://mitosis.builder.io/docs/overview/" style="font-weight: 500; margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">Mitosis</a></span></strong></mark>. Unlike standard Web Component libraries that run in a browser wrapper, Mitosis acts as a cross-compiler, allowing you to write code once and output it as native React, Vue, Svelte, Angular, and Solid components. \[[1](https://www.youtube.com/watch?v=LC7EJ9tkyVY), [2](https://www.youtube.com/watch?v=2NeToOozYwA\&t=43), [3](https://mitosis.builder.io/docs/overview/), [4](https://www.youtube.com/watch?v=XQIuv34-K%5F8)]

Top Tools for Framework-Agnostic Libraries

Depending on whether you want to **compile to native framework code** or **output standard Web Components**, here are the leading options:

- **Mitosis (Compiler-Based)**:
  - **How it works**: You write components in a static subset of JSX. The compiler then generates "first-class" code for virtually any framework, including React, Vue, Qwik, and even React Native.
  - **Best for**: Complex design systems where you want the output to feel like it was handwritten for the target framework (e.g., using native hooks or state management).
- **[Stencil.js](https://stenciljs.com/) (Web Component Compiler)**:
  - **How it works**: It uses TypeScript and JSX to build standards-compliant Web Components. It includes "framework wrappers" that automatically generate native-looking entry points for React, Angular, and Vue.
  - **Best for**: Organizations that want to rely on native browser standards but still need a great developer experience within specific frameworks.
- **[Lit](https://lit.dev/) (Lightweight Base Class)**:
  - **How it works**: A tiny library for creating fast, lightweight Web Components using standard JavaScript and templates. It provides a thin layer of reactivity and declarative templates.
  - **Best for**: Minimalist libraries that prioritize performance and small bundle sizes.
- **[Zag.js](https://zagjs.com/) (Logic-Only)**:
  - **How it works**: It separates the component **logic** (state machines) from the **rendering**. You use the same logic core and just apply framework-specific "connectors" for the UI.
  - **Best for**: Building highly complex interactive components like comboboxes or date pickers that need to behave identically across different frameworks. \[[1](https://stenciljs.com/), [2](https://www.builder.io/blog/mitosis-a-quick-guide), [3](https://stenciljs.com/docs/overview), [4](https://dominikpieper.medium.com/framework-agnostic-component-libraries-with-stenciljs-and-nx-bf89b733fbe8), [5](https://stenciljs.com/docs/faq), [6](https://dev.to/web%5Fdev-usman/60-best-javascript-libraries-for-building-interactive-ui-components-1moc), [7](https://www.thinktecture.com/contributions/write-once-use-anywhere-framework-agnostic-design-systems-with-web-components-2/), [8](https://www.youtube.com/watch?v=zU6FRRl4-3g\&t=115), [9](https://www.youtube.com/watch?v=XQIuv34-K%5F8), [10](https://mitosis.builder.io/docs/overview/), [11](https://www.youtube.com/watch?v=2NeToOozYwA\&t=43)]

Comparison Table

| Feature \[[1](https://www.binance.com/en/square/post/30331121068481), [2](https://www.builder.io/blog/high-performance-no-code), [3](https://www.builder.io/blog/mitosis-get-started), [4](https://www.youtube.com/watch?v=XQIuv34-K%5F8), [5](https://mitosis.builder.io/docs/overview/)] | [Mitosis](https://mitosis.builder.io/)   | Stencil                          | Lit                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------- | ----------------------------- |
| **Output Type**                                                                                                                                                                                                                                                                            | Native Framework Code (React, Vue, etc.) | Web Components + Wrappers        | Web Components                |
| **Primary Goal**                                                                                                                                                                                                                                                                           | Write once, compile to everything        | Standards-based interoperability | Lightweight & fast components |
| **Syntax**                                                                                                                                                                                                                                                                                 | JSX (Mitosis-specific)                   | JSX + TypeScript                 | JavaScript / TypeScript       |
| **Bundle Size**                                                                                                                                                                                                                                                                            | Minimal (native output)                  | Small runtime included           | Very small                    |

Would you like to see a **code example** of how a single component looks when written in Mitosis versus how it compiles to React and Vue?

- [link](https://stenciljs.com/)\
  Stencil.js\
  Adopt. Stencil is a library for building reusable, scalable component libraries. Generate small, blazing fast Web Components that ...\
  stenciljs.com
- [link](https://stenciljs.com/docs/faq)\
  Stencil Frequently Asked Questions\
  Stencil purposely does not strive to act as a stand-alone framework, but rather a tool which allows developers to scale framework-\
  stenciljs.com
- [link](https://www.youtube.com/watch?v=LC7EJ9tkyVY)\
  Web Components vs Mitosis\
  Mitosis is a project that was created to solve the problem of maintaining multiple sets of components across different frameworks.\
  1:09:53\
  YouTube·Builder

Show all

#

Mitosis library example

May 3, 2026

In software development, **Mitosis** is an open-source library created by [Builder.io](https://mitosis.builder.io/) that allows you to <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">write UI components once in a specific JSX-like syntax and compile them into native components for multiple frameworks like <strong>React, Vue, Angular, Svelte, Qwik, and Solid</strong></mark>. \[[1](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56), [2](https://github.com/BuilderIO/mitosis)]

Basic Component Example

A standard Mitosis component uses a file extension like `.lite.jsx` or `.lite.tsx`. Below is a simple counter example written in Mitosis: \[[1](https://mitosis.builder.io/docs/quickstart/), [2](https://blog.logrocket.com/creating-reusable-components-mitosis-builder-io/)]

jsx

```
import { useState } from "@builder.io/mitosis";

export default function MyCounter(props) {
  const state = useState({
    count: 0,
  });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => state.count++}>
        Increment
      </button>
    </div>
  );
}
```

Use code with caution.

Key Library Features

- **Universal Compilation**: It transpiles the code into framework-specific patterns (e.g., converts `useState` to Angular signals or Vue's Composition API).
- **Design System Syncing**: It is often used to maintain consistent design systems by converting Figma designs directly into multi-framework code using tools like [Visual Copilot](https://www.builder.io/blog/mitosis-get-started).
- **Hooks Support**: It includes lifecycle hooks like `onMount`, `onInit`, and `onUnMount` to handle framework-agnostic logic.
- **Project Structure**: Source files reside in a `src/` directory, and running a build command generates code into an `output/` folder for each target framework. \[[1](https://javascript.plainenglish.io/compile-jsx-to-other-frameworks-using-mitosis-35e85733d9e0), [2](https://www.builder.io/blog/mitosis-get-started), [3](https://mitosis.builder.io/docs/hooks/), [4](https://mitosis.builder.io/docs/project-structure/), [5](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56), [6](https://github.com/BuilderIO/mitosis)]

Use Cases

- **Component Libraries**: Maintaining a single codebase for a library (like [Papanasi](https://github.com/CKGrafico/papanasi)) that needs to support React, Vue, and Angular users simultaneously.
- **Framework Migration**: Helping organizations migrate from one framework to another by providing a common language for components.
- **Low-Code Integration**: Powering visual editors like [Builder.io's CMS](https://blog.logrocket.com/creating-reusable-components-mitosis-builder-io/) to export code to any developer stack. \[[1](https://www.reddit.com/r/javascript/comments/yat5mk/mitosis%5Fan%5Finteresting%5Ftool%5Fto%5Fwrite%5Funiversal/), [2](https://www.infoworld.com/article/2337352/intro-to-mitosis-the-universal-reactive-transformer.html), [3](https://www.binance.com/en/square/post/30331121068481), [4](https://javascript.plainenglish.io/compile-jsx-to-other-frameworks-using-mitosis-35e85733d9e0), [5](https://blog.logrocket.com/creating-reusable-components-mitosis-builder-io/)]

Would you like to see how to **configure target frameworks** in a `mitosis.config.js` file?

- [link](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56)\
  Create a reusable component library for Angular, React and Vue using Mitosis and ...\
  Create a reusable component library for Angular, React and Vue using Mitosis and Builder.io. Abhishek Jha. 6 min read. Jul 16, 202...\
  Medium
- [link](https://github.com/BuilderIO/mitosis)\
  GitHub - BuilderIO/mitosis: Write components once, run everywhere. Compiles to React ...\
  Overview. Mitosis provides a unified development experience across all frameworks, enabling you to build components in a single co...\
  GitHub
- [link](https://mitosis.builder.io/docs/quickstart/)\
  Quickstart - Mitosis - Builder.io\
  Each component is housed in its own folder and written in a . lite. tsx file, the standard file format for Mitosis components. Als...\
  Builder.io

Show all

examples

May 3, 2026

Mitosis examples demonstrate how a single, neutral JSX codebase can be compiled into native components for React, Vue, Angular, and more. This "write once, run everywhere" approach is primarily used for cross-framework design systems and software development kits (SDKs). \[[1](https://www.builder.io/blog/mitosis-get-started), [2](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56), [3](https://mitosis.builder.io/docs/overview/), [4](https://www.binance.com/en/square/post/30284516802674)]

1\. Simple Interactive Component

This example shows a classic counter using Mitosis's `useStore` for state management. When compiled, this simple structure is translated into React's `useState`, Vue's `ref`, or Angular's class properties. \[[1](https://mitosis.builder.io/), [2](https://www.voorhoede.nl/en/blog/write-components-once-run-everywhere-with-mitosis-a-beautiful-dream-or-reality/), [3](https://mitosis.builder.io/docs/components/)]

jsx

```
import { useStore } from '@builder.io/mitosis';

export default function Counter(props) {
  const state = useStore({
    count: 0,
    increment() {
      state.count++;
    },
  });

  return (
    <div>
      <p>Current count: {state.count}</p>
      <button onClick={() => state.increment()}>
        Add 1
      </button>
    </div>
  );
}
```

Use code with caution.

2\. Complex UI Logic (Conditional & Loops)

Mitosis provides specialized components like for conditional rendering and for iterating over lists, ensuring the logic is transpilable across different framework template styles (like `*ngIf` in Angular or `v-if` in Vue). \[[1](https://mitosis.builder.io/docs/components/), [2](https://www.youtube.com/watch?v=XQIuv34-K%5F8), [3](https://www.binance.com/en/square/post/30284516802674)]

jsx

```
import { For, Show, useStore } from '@builder.io/mitosis';

export default function TodoList(props) {
  const state = useStore({
    items: ['Learn Mitosis', 'Build Library'],
    inputValue: '',
  });

  return (
    <section>
      <Show when={props.showHeading}>
        <h1>My Tasks</h1>
      </Show>

      <ul>
        <For each={state.items}>
          {(item, index) => <li key={index}>{item}</li>}
        </For>
      </ul>
    </section>
  );
}
```

Use code with caution.

3\. Lifecycle Hooks

To handle framework-agnostic side effects, Mitosis uses specific hooks like `onInit` and `onMount`. These replace framework-specific methods like `useEffect` or `ngOnInit`. \[[1](https://mitosis.builder.io/docs/hooks/), [2](https://www.binance.com/en/square/post/30284516802674)]

- **`onInit()`**: Executes before the component mounts.
- **`onMount()`**: Executes after the component is rendered to the DOM. \[[1](https://mitosis.builder.io/docs/hooks/)]

jsx

```
import { onMount, onInit } from '@builder.io/mitosis';

export default function LifecycleDemo() {
  onInit(() => {
    console.log('Component is initializing...');
  });

  onMount(() => {
    console.log('Component has mounted!');
  });

  return <div>Check your console for lifecycle logs.</div>;
}
```

Use code with caution.

4\. Real-World Applications

- **[Papanasi](https://github.com/CKGrafico/papanasi)**: A full UI library built with Mitosis that provides components for multiple frameworks.
- **Figma to Code**: Using the [Visual Copilot](https://www.builder.io/blog/mitosis-get-started) plugin to convert Figma layers into Mitosis code for multi-framework distribution.
- **Gutenberg Blocks**: Experimental projects use Mitosis to compile WordPress blocks to both React (frontend) and Liquid (server-side). \[[1](https://www.builder.io/blog/mitosis-get-started), [2](https://github.com/evan-gerard/Mitosis), [3](https://github.com/michalczaplinski/hydration-mitosis-demo), [4](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56)]

Would you like to see a comparison of the **generated output code** for a specific framework like React or Vue?

- [link](https://www.builder.io/blog/mitosis-get-started)\
  Getting Started with Mitosis: Creating a Cross-Framework Design System - Builder.io\
  At Builder.io, we've developed Mitosis — a solution to create a single source of truth for all reusable components within your des...\
  Builder.io
- [link](https://mitosis.builder.io/)\
  Mitosis - Write components once, run everywhere. - Builder.io\
  Get StartedPlayground. mitosis.jsx. import { useState } from "@builder.io/mitosis"; export default function MyComponent(props) { c...\
  Builder.io
- [link](https://medium.com/@abhishekjha1993/create-a-reusable-component-library-for-angular-react-and-vue-using-mitosis-and-builder-io-d9f58580cb56)\
  Create a reusable component library for Angular, React and Vue using Mitosis and ...\
  Create a reusable component library for Angular, React and Vue using Mitosis and Builder.io. Abhishek Jha. 6 min read. Jul 16, 202...\
  Medium

Show all

more examples

May 3, 2026

To further explore **Mitosis**, here are more advanced examples focusing on external library usage, custom styling, and framework-specific overrides.

1\. Using External JavaScript Libraries

You can use standard JavaScript libraries (like **lodash**) within Mitosis components. However, you must avoid framework-specific libraries (like a React-only form handler) because they cannot be compiled into other frameworks. \[[1](https://mitosis.builder.io/docs/using-libraries/)]

jsx

```
import { kebabCase } from 'lodash';

export default function MyComponent(props: { name: string }) {
  return (
    <div>
      {/* Mitosis translates this standard JS logic to all targets */}
      {kebabCase(props.name)}
    </div>
  );
}
```

Use code with caution.

2\. Styling with CSS-in-JS and Media Queries

Mitosis uses a `css` prop for styling. This is highly effective for cross-framework design systems because Mitosis compiles these objects into the target's native styling method (e.g., scoped CSS in Vue or `styles` in Angular). \[[1](https://mitosis.builder.io/docs/components/)]

jsx

```
export default function ResponsiveButton() {
  return (
    <button
      css={{
        marginTop: '10px',
        color: 'blue',
        '@media (max-width: 500px)': {
          marginTop: '0px',
          color: 'red'
        },
      }}
    >
      Responsive Click
    </button>
  );
}
```

Use code with caution.

3\. Handling Framework-Specific Overrides

Sometimes a generic component isn't enough, and you need a unique implementation for a specific framework. Mitosis allows you to create an `overrides/` folder. If you have `src/components/button.lite.tsx`, you can create `overrides/angular/src/components/button.ts` to provide a custom Angular-only version. \[[1](https://mitosis.builder.io/docs/using-libraries/)]

4\. Advanced Metadata and Plugins

You can attach custom metadata to your components using the `useMetadata` hook. This is often used by build plugins to trigger specific behaviors during the compilation process, such as generating documentation or modifying component types. \[[1](https://mitosis.builder.io/docs/customizability/)]

jsx

```
import { useMetadata } from '@builder.io/mitosis';

// This data is stored in the component's JSON representation
useMetadata({
  isAlpha: true,
  documentationUrl: 'https://example.com'
});

export default function AlphaButton(props) {
  return <button>{props.text}</button>;
}
```

Use code with caution.

Comparison of Generated Code

When you compile a Mitosis component, the output varies significantly to match the target's idiomatic style: \[[1](https://mitosis.builder.io/)]

- **Vue**: Generates a with a using `ref`.
- **Angular**: Generates a `@Component` class with templates and CSS defined in the decorator.
- **Svelte**: Generates a single-file component with a block and reactive declarations.

Would you like to see a specific **complex UI pattern**, such as a search bar with a dropdown menu?

**Follow-up:** Check out the [Mitosis Playground](https://mitosis.builder.io/playground/) to see how these examples transform into **React**, **Vue**, and **Angular** in real-time.

- [link](https://mitosis.builder.io/)\
  Mitosis - Write components once, run everywhere. - Builder.io\
  Get StartedPlayground. mitosis.jsx. import { useState } from "@builder.io/mitosis"; export default function MyComponent(props) { c...\
  Builder.io
- [link](https://mitosis.builder.io/docs/using-libraries/)\
  Using Libraries - Mitosis - Builder.io\
  JavaScript libraries. You can use any JavaScript library in your Mitosis components just like you would in any other framework. He...\
  Builder.io
- [link](https://mitosis.builder.io/docs/components/)\
  Components - Mitosis - Builder.io\
  css-in-js. Styling is done via the css prop on DOM elements and components. It takes CSS properties in camelCase (like the style o...\
  Builder.io

Show all

criticism

May 3, 2026

While Mitosis is a powerful tool for cross-framework development, it has several trade-offs and common criticisms from the developer community:

1\. "Lowest Common Denominator" Problem

Because Mitosis must compile to many different frameworks, you are often restricted to a subset of features that all those frameworks share.

- **The Issue:** You lose out on framework-specific "magic" or advanced features (like React Server Components or Svelte’s unique syntax) because the Mitosis compiler can’t always map them across all targets.

2\. Implementation Complexity & "Leaky Abstractions"

The abstraction layer isn't perfect.

- **The Issue:** Debugging becomes difficult. If the generated Vue code has a bug, you have to figure out if the bug is in your Mitosis logic, the Mitosis compiler itself, or the way Vue handles the generated output. Developers often find themselves "fighting the compiler" to get a specific output.

3\. Limited Ecosystem Support

Most third-party libraries (like UI kits or animation libraries) are built for a specific framework (e.g., `framer-motion` for React).

- **The Issue:** You cannot easily use these libraries inside a Mitosis component because they won't exist or work the same way when compiled to Angular or Svelte. You are largely limited to writing pure logic and basic CSS.

4\. Learning Curve for a "Non-Standard" Syntax

Even though it looks like JSX, it follows very strict rules.

- **The Issue:** New developers might be frustrated that they can't use standard JavaScript patterns (like complex destructuring in props) that the Mitosis parser doesn't support yet. You aren't really writing "React"; you're writing "Mitosis-flavored JSX."

5\. Maintenance Overhead

- **The Issue:** For small teams, maintaining a Mitosis build pipeline adds significant overhead. You have to manage the compilation step for every target, handle versioning for multiple packages (e.g., `@my-lib/react`, `@my-lib/vue`), and keep the Mitosis CLI updated.

Summary: Is it worth it?

- **Best for:** Large-scale design systems or SDKs used by thousands of external developers across different tech stacks.
- **Worst for:** Standard apps or internal projects where you’ve already committed to a single framework.

Would you like to see how Mitosis handles **styling limitations** compared to native CSS-in-JS?

#

zagjs examples

May 3, 2026

[Zag.js](https://zagjs.com/) provides examples primarily through its official documentation and interactive playgrounds like [CodeSandbox](https://codesandbox.io/examples/package/@zag-js/vue) and [StackBlitz](https://stackblitz.com/edit/stackblitz-starters-s7ddxzsp). It is a collection of framework-agnostic UI component patterns (like accordions, menus, and dialogs) powered by state machines, making them compatible with React, Vue, Solid, and Svelte. \[[1](https://zagjs.com/), [2](https://codesandbox.io/examples/package/@zag-js/vue), [3](https://stackblitz.com/edit/stackblitz-starters-s7ddxzsp), [4](https://dev.to/seeratawan01/cool-library-that-i-recently-discovered-zagjs-m05)]

Core Example Implementation

A typical Zag.js component example follows a three-step process:

1. **Machine Setup**: You import the specific component machine (e.g., `number-input`) and initialize it using a framework-specific hook like `useMachine`.
2. **State Connection**: The `connect` function takes the state and "send" function from the machine to return a clean API of props.
3. **Rendering**: You spread these props onto your HTML elements to handle accessibility and logic. \[[1](https://zagjs.com/components/react/qr-code), [2](https://www.youtube.com/watch?v=2N4pSQqGT48)]

Available Component Examples

The official Zag.js website includes live examples and code snippets for various components: \[[1](https://neo4j.com/blog/graph-visualization/creative-network-science-graph-commons-neo4j-graphconnect/)]

- **Navigation & Layout**: Accordion, Tabs, Menu, and Pagination.
- **Inputs & Controls**: Number Input, Slider, Select, and Tags Input.
- **Overlays**: Dialog, Popover, and Tooltip.
- **Specialized Utilities**: QR Code generation and Carousel logic. \[[1](https://zagjs.com/components/react/carousel), [2](https://zagjs.com/components/react/listbox), [3](https://codesandbox.io/examples/package/@zag-js/menu), [4](https://codesandbox.io/examples/package/@zag-js/tabs), [5](https://zagjs.com/components/react/tags-input), [6](https://zagjs.com/components/react/slider), [7](https://codesandbox.io/examples/package/@zag-js/select), [8](https://codesandbox.io/examples/package/@zag-js/popover), [9](https://codesandbox.io/examples/package/@zag-js/tooltip), [10](https://www.youtube.com/watch?v=2N4pSQqGT48), [11](https://zagjs.com/components/react/qr-code)]

Community & Framework-Specific Resources

- **Framework Playgrounds**: You can find dedicated examples for @zag-js/vue, [@zag-js/react](https://zagjs.com/components/react/qr-code), and others on CodeSandbox.
- **Starter Recipes**: The [zag-js-recipes](https://github.com/anubra266/zag-js-recipes) repository on GitHub offers starter projects for Next.js, Vue 3, and Solid with TypeScript.
- **Real-World Integration**: Projects like [Corex UI](https://github.com/topics/zag-js) and [Skeleton](https://www.youtube.com/watch?v=SLPBmP588Hk) demonstrate how Zag.js is used to build entire design systems. \[[1](https://www.youtube.com/watch?v=SLPBmP588Hk\&t=33), [2](https://codesandbox.io/examples/package/@zag-js/toggle), [3](https://github.com/anubra266/zag-js-recipes), [4](https://github.com/topics/zag-js), [5](https://codesandbox.io/examples/package/@zag-js/vue)]

Are you looking for an example in a **specific framework** like React or Vue, or do you need help setting up a **specific component**?

- [link](https://zagjs.com/)\
  Zag.js\
  UI components powered by Finite State Machines. A collection of framework-agnostic UI component patterns like accordion , menu , a...\
  zagjs.com
- [link](https://zagjs.com/components/react/carousel)\
  Carousel - Zag.js\
  The carousel api exposes the following methods: \* page number The current index of the carousel. \* pageSnapPoints number\[] The cur...\
  zagjs.com
- [link](https://zagjs.com/components/react/qr-code)\
  QR Code - Zag.js\
  \* Installation. Install the QR code package: npm install @zag-js/qr-code @zag-js/react # or yarn add @zag-js/qr-code @zag-js/react...\
  zagjs.com

Show all

example

May 3, 2026

To use [Zag.js](https://zagjs.com/), you generally follow a standard pattern: install the component's state machine (e.g., `@zag-js/number-input`) and a framework adapter (e.g., `@zag-js/react` or `@zag-js/vue`). The machine manages the logic, while a `connect` function provides the accessibility attributes and event handlers for your HTML elements. \[[1](https://zagjs.com/overview/installation), [2](https://github.com/chakra-ui/zag), [3](https://dev.to/carwack/the-one-with-styling-zagjs-components-with-tailwind-css-3i4h), [4](https://www.youtube.com/watch?v=PpstsvkCbOA\&t=1), [5](https://zagjs.com/)]

Number Input Example

Below is a comparison of how to implement a basic Number Input component in React and Vue 3.

React Implementation

In React, you use the `useMachine` hook to initialize the state machine and the `connect` function to generate props for your elements. \[[1](https://zagjs.com/)]

javascript

```
import * as numberInput from "@zag-js/number-input"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useId } from "react"

// ... (simplified setup using useMachine and connect)
```

Use code with caution.

Vue 3 Implementation (SFC)

For Vue, you wrap the connection logic in a `computed` property to ensure the API stays reactive. \[[1](https://zagjs.com/)]

html

```
<script setup>
import * as numberInput from "@zag-js/number-input"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, useId } from "vue"

// ... (setup using computed and connect)
</script>
```

Use code with caution.

Full examples and documentation are available on the [Zag.js website](https://zagjs.com/). \[[1](https://zagjs.com/), [2](https://dev.to/carwack/the-one-with-styling-zagjs-components-with-tailwind-css-3i4h)]

Key Concepts in Zag.js

- **Headless**: Zag handles logic (e.g., keyboard navigation) but provides zero styling.

- **State Machine Logic**: Defines all states and transitions for predictable behavior.

- **Framework Adapters**: Ensure the machine interacts correctly with the specific framework.\
  \[[1](https://www.youtube.com/watch?v=PpstsvkCbOA\&t=1), [2](https://github.com/chakra-ui/zag), [3](https://zagjs.com/overview/installation)]

- [link](https://zagjs.com/)\
  Zag - Rapidly build UI components without sweating over the logic.\
  import \* as numberInput from "@zag-js/number-input" import { useMachine, normalizeProps } from "@zag-js/react" import { useId } fr...\
  zagjs.com

- [link](https://zagjs.com/overview/installation)\
  Getting Started - Zag.js\
  Install the machine for the component you're interested in. Let's say you want to use the tooltip machine. npm install @zag-js/too...\
  \
  \
  zagjs.com

- [link](https://github.com/chakra-ui/zag)\
  GitHub - chakra-ui/zag: Build your design system in React, Solid, Vue or Svelte ...\
  Write once, use everywhere 🦄: The component interactions are modelled in a framework agnostic way. We provide adapters for JS fra...\
  \
  \
  GitHub

Show all

example

May 3, 2026

To see how Zag.js looks in practice, here is a more complete example of a **Pin Input** (often used for OTP or verification codes).

Zag.js manages the focus movement between boxes and all keyboard interactions (like backspace to go to the previous box) automatically. \[[1](https://www.youtube.com/watch?v=2N4pSQqGT48), [2](https://zagjs.com/components/react/pin-input)]

Pin Input Implementation (React)

This example shows how to set up a 3-digit pin input. You can find more interactive variations on the [official Zag.js Pin Input page](https://zagjs.com/components/react/pin-input).

jsx

```
import * as pinInput from "@zag-js/pin-input"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useId } from "react"

export function PinInput() {
  const service = useMachine(pinInput.machine, { id: useId() })
  const api = pinInput.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()} style={{ display: "flex", gap: "10px" }}>
      {[0, 1, 2].map((index) => (
        <input key={index} {...api.getInputProps({ index })} style={{ width: "40px", height: "40px", textAlign: "center" }} />
      ))}
    </div>
  )
}
```

Use code with caution.

Key Concepts in this Example

- **`useMachine` & `connect`**: Initialize and link the [pin-input logic](https://zagjs.com/components/react/pin-input) to HTML attributes.
- **`api.getInputProps`**: Automatically manages focus, navigation, and keyboard inputs for OTP fields. \[[1](https://blog.logrocket.com/make-your-design-system-dry-with-zag/), [2](https://zagjs.com/), [3](https://egghead.io/lessons/zag-trigger-side-effects-in-a-zag-js-state-machine-with-the-watch-property), [4](https://www.youtube.com/watch?v=2N4pSQqGT48), [5](https://zagjs.com/components/react/pin-input)]

Other Components to Explore

Zag.js provides headless logic for many complex UI patterns: \[[1](https://dev.to/carwack/the-one-with-styling-zagjs-components-with-tailwind-css-3i4h), [2](https://www.youtube.com/watch?v=-nQ5Qtodp6g), [3](https://blog.logrocket.com/make-your-design-system-dry-with-zag/)]

- **Accordions & Menus**: Keyboard navigation and state management.
- **Sliders & Tabs**: Accessible, interactive component logic. \[[1](https://zagjs.com/components/react/slider), [2](https://zagjs.com/components/react/menu)]

Would you like a code snippet for a **different component** or for a **different framework** like Vue or Svelte?\
\[[1](https://www.youtube.com/watch?v=PpstsvkCbOA\&t=1), [2](https://blog.logrocket.com/make-your-design-system-dry-with-zag/)]

- [link](https://www.youtube.com/watch?v=2N4pSQqGT48)\
  State machines in Zag.js w/ Segun Adebayo\
  Zag.js is a JavaScript library used to create accessible components. It includes many primitives and operates using state machines...\
  35:50\
  YouTube·Baptiste Devessier
- [link](https://zagjs.com/)\
  Zag.js\
  import \* as numberInput from "@zag-js/number-input" import { useMachine, normalizeProps } from "@zag-js/react" import { useId } fr...\
  zagjs.com
- [link](https://egghead.io/lessons/zag-trigger-side-effects-in-a-zag-js-state-machine-with-the-watch-property)\
  Trigger Side Effects in a Zag.js State Machine with the watch Property\
  Let's actually implement inputting values into our Pin input. We have 3 functions that need implemented. They are setFocusedValue ...\
  Egghead.io

Show all

#

compare react and web components examples

May 3, 2026

React and Web Components both facilitate reusable UI building blocks but differ fundamentally in their underlying technology and intended use cases. While <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>React</strong> is a JavaScript library that uses a virtual DOM for efficient, data-driven updates, <strong>Web Components</strong> are a set of native browser standards that allow for framework-agnostic custom elements</mark>. \[[1](https://blog.logrocket.com/web-components-vs-react/), [2](https://medium.com/@mariusbongarts/react-vs-web-components-80d754f74811), [3](https://legacy.reactjs.org/docs/web-components.html), [4](https://www.foo.software/posts/will-web-components-replace-react)]

Comparison Overview

| Feature \[[1](https://dev.to/link2twenty/comment/2ng94), [2](https://dev.to/besworks/so-dont-overreact-but-im-so-over-react-i52), [3](https://www.youtube.com/watch?v=plt-iH%5F47GE\&t=152), [4](https://devnel.blog/2025/05/13/web-components-vs-react/), [5](https://dev.to/steveblue/it-s-not-about-web-components-vs-react-5137), [6](https://www.reddit.com/r/learnprogramming/comments/jffeg8/why%5Fuse%5Freact%5Fover%5Fweb%5Fcomponents%5Fwith%5Fa%5Ffew/), [7](https://medium.com/metaphorical-web/web-components-moving-beyond-react-97aa74fef9b9), [8](https://dev.to/easewithtuts/end-of-react-web-components-review-4664), [9](https://www.jhkinfotech.com/blog/web-components-vs-react-components), [10](https://www.smashingmagazine.com/2025/03/web-components-vs-framework-components/), [11](https://blog.logrocket.com/web-components-vs-react/), [12](https://medium.com/@mariusbongarts/react-vs-web-components-80d754f74811)] | React Components                                                     | Web Components (Native)                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Encapsulation**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | JavaScript-based; styles can leak unless using CSS-in-JS or Modules. | **Shadow DOM** provides native style and markup isolation.                               |
| **Portability**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Requires the React runtime; can only be used within React apps.      | **Universal**; works in any HTML document or framework (Vue, Angular, etc.).             |
| **Data Flow**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Optimized for complex, dynamic state with unidirectional data flow.  | Traditionally better for simple UI elements; complex state requires manual handling.     |
| **Performance**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Uses a **Virtual DOM** to batch updates and minimize layout shifts.  | Operates directly on the native DOM; lightweight but can be slower for frequent updates. |

Code Examples

React Component

React uses a declarative approach with JSX. It manages state internally and re-renders when that state changes. \[[1](https://www.robinwieruch.de/react-element-component/), [2](https://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/), [3](https://frontendmasters.com/blog/react-19-and-web-component-examples/), [4](https://legacy.reactjs.org/docs/web-components.html), [5](https://medium.com/metaphorical-web/web-components-moving-beyond-react-97aa74fef9b9)]

javascript

```
// A simple React button component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage in React
<Greeting name="User" />
```

Use code with caution.

\[[1](https://www.uxpin.com/studio/blog/react-vs-html/), [2](https://www.rogin.dev/blog/web-components-and-react-compared/), [3](https://devnel.blog/2025/05/13/web-components-vs-react/)]

Web Component

Web Components use the `customElements` API. They are defined as JavaScript classes and attached to the browser's registry. \[[1](https://dev.to/bytebantz/web-components-in-angular-the-good-and-bad-of-web-components-h64), [2](https://developer.mescius.com/wijmo/web-components), [3](https://binaryigor.com/htmx-and-web-components-a-perfect-match.html)]

javascript

```
// A simple Web Component custom element
class GreetingElement extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || 'World';
    this.innerHTML = `<h1>Hello, ${name}!</h1>`;
  }
}

customElements.define('greeting-element', GreetingElement);

// Usage in any HTML or framework
<greeting-element name="User"></greeting-element>
```

Use code with caution.

\[[1](https://samthor.au/2022/react-preact-wc/), [2](https://www.reddit.com/r/reactjs/comments/15l1alx/unrelated%5Fis%5Fit%5Fworth%5Flearning%5Fweb%5Fcomponents/), [3](https://blog.logrocket.com/web-components-vs-react/)]

Key Considerations

- **Interoperability:** React 19 has significantly improved its native support for [Web Components](https://frontendmasters.com/blog/react-19-and-web-component-examples/), making it easier to pass props and handle events from custom elements within React applications.
- **Ecosystem:** React offers a vast ecosystem of third-party libraries (e.g., Redux for state, React Router for navigation) that Web Components lack natively.
- **Use Case:** Choose **Web Components** for universal design systems that must work across different tech stacks. Choose **React** for complex, data-heavy applications requiring robust state management. \[[1](https://www.reddit.com/r/reactjs/comments/3sdo3n/react%5Fvs%5Fweb%5Fcomponents%5Fwhat%5Fwould%5Fyou%5Fdo/), [2](https://frontendmasters.com/blog/react-19-and-web-component-examples/), [3](https://medium.com/@ahmedqeshta1999/react-js-19-supports-web-components-a79d67a7b792), [4](https://medium.com/@ahobilesan/web-components-over-react-a8b911e06cc0), [5](https://thenewstack.io/web-components-are-the-comeback-nobody-saw-coming/), [6](https://www.reddit.com/r/learnprogramming/comments/jffeg8/why%5Fuse%5Freact%5Fover%5Fweb%5Fcomponents%5Fwith%5Fa%5Ffew/), [7](https://dev.to/steveblue/it-s-not-about-web-components-vs-react-5137)]

Are you looking to **integrate Web Components into an existing React project**, or are you deciding which technology to use for a **new design system**?

- [link](https://blog.logrocket.com/web-components-vs-react/)\
  Web components vs. React - LogRocket Blog\
  What are components? As already explained, we can write reusable UI elements with web components. You might think that we could do...\
  LogRocket Blog
- [link](https://legacy.reactjs.org/docs/web-components.html)\
  Web Components - React\
  React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable component...\
  React – A JavaScript library for building user interfaces
- [link](https://dev.to/steveblue/it-s-not-about-web-components-vs-react-5137)\
  It's not about Web Components vs. React - DEV Community\
  React addresses the lack of state in UI development. Custom elements are stateless. You need to bring a state machine to custom el...\
  DEV Community

Show all

examples

May 3, 2026

While React and Web Components both achieve reusability, their technical implementations differ significantly in how they handle data updates, events, and their lifecycles. \[[1](https://blog.logrocket.com/web-components-vs-react/), [2](https://www.jhkinfotech.com/blog/web-components-vs-react-components), [3](https://samthor.au/2022/react-preact-wc/)]

Detailed Comparison Examples

1\. State and Data Handling

**React** uses a declarative approach where the UI automatically reflects the state. **Web Components** require manual DOM manipulation or custom setters to update when data changes. \[[1](https://www.youtube.com/watch?v=qqqyUTTS-9g), [2](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Frameworks%5Flibraries/React%5Finteractivity%5Fevents%5Fstate), [3](https://www.reddit.com/r/webdev/comments/17ngwxe/react%5Flike%5Fstate%5Fmanagement%5Fin%5Fwebcomponents%5Fmade/), [4](https://www.jhkinfotech.com/blog/web-components-vs-react-components)]

- **React (Stateful Hook):**\
  javascript

<!---->

```
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

Use code with caution.

- **Web Component (Observed Attributes):**\
  javascript

<!---->

```
class MyCounter extends HTMLElement {
  static get observedAttributes() { return ['count']; }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render(); // Manually trigger update
  }
  render() {
    this.innerHTML = `<button>Count: ${this.getAttribute('count')}</button>`;
  }
}
customElements.define('my-counter', MyCounter);
```

Use code with caution.\
\[[1](https://www.jhkinfotech.com/blog/web-components-vs-react-components)]

2\. Event Handling

React utilizes **Synthetic Events** (camelCase) that are pooled for performance. Web Components use native browser events and often require manual cleanup of listeners to prevent memory leaks. \[[1](https://www.youtube.com/watch?v=QpzpMUKI6fA\&t=5), [2](https://www.youtube.com/watch?v=bTIqxOPhNC0), [3](https://www.geeksforgeeks.org/reactjs/difference-between-html-and-react-event-handling/), [4](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Frameworks%5Flibraries/React%5Finteractivity%5Fevents%5Fstate), [5](https://www.robinwieruch.de/react-web-components/)]

- **React Events:**\
  javascript

<!---->

```
const Button = () => <button onClick={(e) => console.log(e.target)}>Click Me</button>;
```

Use code with caution.

- **Web Component Events:**\
  javascript

<!---->

```
this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
  this.dispatchEvent(new CustomEvent('my-event', { detail: 'data' }));
});
```

Use code with caution.\
\[[1](https://www.robinwieruch.de/react-web-components/)]

3\. Component Lifecycles

React manages lifecycles through [mounting, updating, and unmounting](https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks) phases. Web Components use built-in browser "callbacks". \[[1](https://samthor.au/2022/react-preact-wc/), [2](https://www.youtube.com/watch?v=yHdX4dCl5CY), [3](https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d), [4](https://blog.logrocket.com/web-components-vs-react/)]

| Phase       | React Hook Equivalent                       | Web Component Callback       |
| ----------- | ------------------------------------------- | ---------------------------- |
| **Created** | Component function call                     | `constructor()`              |
| **Mounted** | `useEffect(() => ..., [])`                  | `connectedCallback()`        |
| **Updated** | `useEffect(() => ..., [dependency])`        | `attributeChangedCallback()` |
| **Removed** | `useEffect(() => { return () => ... }, [])` | `disconnectedCallback()`     |

Hybrid Integration

You can use Web Components inside React. However, because React’s event system is synthetic, [manual event listeners](https://www.robinwieruch.de/react-web-components/) are often needed for custom elements: \[[1](https://forum.ionicframework.com/t/use-events-with-web-components-and-react/186159), [2](https://www.robinwieruch.de/react-web-components/), [3](https://blog.logrocket.com/web-components-vs-react/)]

javascript

```
const MyReactWrapper = () => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    el.addEventListener('custom-click', handleEvent);
    return () => el.removeEventListener('custom-click', handleEvent);
  }, []);

  return <my-web-component ref={ref} />;
};
```

Use code with caution.

Would you like to see a more complex example involving a **global state manager** like Redux used across both technologies?

- [link](https://www.youtube.com/watch?v=QpzpMUKI6fA\&t=5)\
  \[Live Code Session] State Management in Web Components Explained\
  The discussion revolves around managing the state within web components. Various state management libraries and methods exist, pro...\
  15m\
  YouTube·Michael Potter
- [link](https://www.youtube.com/watch?v=qqqyUTTS-9g)\
  The State of State Management in React (useState, Context API, Zustand...)\
  State management is a crucial aspect of React development, enabling the tracking of changing data without direct manipulation of t...\
  25:16\
  YouTube·PedroTech
- [link](https://www.robinwieruch.de/react-web-components/)\
  How to use Web Components in React - Robin Wieruch\
  However, this Web Component already dispatches a custom event which matches the naming convention of React components. An improvem...\
  Robin Wieruch

Show all

#

web components history

May 3, 2026

The history of Web Components is a decade-long journey of standardizing how developers build reusable, encapsulated UI elements directly in the browser. What began as a Google-led proposal in 2011 has evolved into a set of native web standards supported by all modern browsers. \[[1](https://en.wikipedia.org/wiki/Web%5FComponents), [2](https://eisenbergeffect.medium.com/about-web-components-7b2a3ed67a78), [3](https://blog.bitsrc.io/web-components-are-dead-long-live-web-components-1de76ab4890d), [4](https://dev.to/javascriptwizzard/why-web-components-are-the-future-of-ui-component-libraries-4je1), [5](https://www.jhkinfotech.com/blog/web-components-vs-react-components)]

Early "Prior Art" (1998–2010)

Before the modern specifications, browser vendors experimented with their own proprietary versions of componentization: \[[1](https://developer.mozilla.org/ja/docs/Web/API/Web%5Fcomponents)]

- **HTML Components (HTC)**: Introduced by Microsoft in 1998 to extend the DOM using JScript or VBScript; it was deprecated by IE10.
- **XML Binding Language (XBL)**: Created by Mozilla in 2001 to attach behavior to XML elements. While influential, it failed to gain cross-browser traction and was abandoned in 2012. \[[1](https://medium.com/apprendre-le-web-avec-lior/a-brief-history-of-webcomponents-and-a-tutorial-to-make-yours-a52d329913e7), [2](https://devopedia.org/web-components), [3](https://thehistoryoftheweb.com/web-components-before-web-components/), [4](https://medium.com/apprendre-le-web-avec-lior/a-brief-history-of-webcomponents-and-a-tutorial-to-make-yours-a52d329913e7), [5](https://www.w3.org/TR/xbl/)]

The Birth of Modern Standards (2011–2013)

The modern era officially started when developers shifted from vendor-specific hacks to standardizing low-level browser APIs: \[[1](https://dev.to/besworks/the-past-present-and-future-of-web-components-2g43), [2](https://developer.mozilla.org/ja/docs/Web/API/Web%5Fcomponents)]

- **2011**: Alex Russell (Google) first proposed Web Components at the Fronteers Conference, introducing the concepts of Shadow DOM and Custom Elements.
- **2012**: The W3C published the first working draft titled "[Introduction to Web Components](https://www.w3.org/TR/components-intro/)".
- **2013**: Google announced [Polymer](https://polymer-library.polymer-project.org/), a library designed to make building Web Components easier by providing polyfills for then-unsupported APIs. \[[1](https://medium.com/@pablortsal/the-year-of-web-components-c92960830d00), [2](https://www.w3.org/TR/components-intro/), [3](https://coderpad.io/blog/development/web-components-101-history/), [4](https://en.wikipedia.org/wiki/Web%5FComponents), [5](https://devopedia.org/web-components)]

Standardization and Evolution (2014–2018)

This period saw the transition from initial "v0" drafts to the stable "v1" specifications used today: \[[1](https://dev.to/thepassle/ing--web-components-aef)]

- **2014**: Chrome and Opera began supporting the early v0 specs.
- **2016**: The **Web Components v1** spec was released, which gained much broader agreement among browser vendors (Apple, Mozilla, Google, and Microsoft).
- **2017**: The Ionic team released [StencilJS](https://stenciljs.com/), a compiler that generates standard Web Components.
- **2018**: Firefox enabled Web Components by default, marking a major milestone in cross-browser compatibility. The Google team also introduced [LitElement](https://lit.dev/) as a lightweight successor to Polymer. \[[1](https://en.wikipedia.org/wiki/Web%5FComponents), [2](https://devopedia.org/web-components), [3](https://coderpad.io/blog/development/web-components-101-history/), [4](https://medium.com/@pablortsal/the-year-of-web-components-c92960830d00)]

Maturity and Present Day (2019–Present)

Web Components are now considered a mature part of the web platform, used by major companies like **YouTube**, **Salesforce**, and **GitHub** for their design systems: \[[1](https://www.youtube.com/watch?v=S36jpytFa%5FM\&t=9), [2](https://eisenbergeffect.medium.com/about-web-components-7b2a3ed67a78)]

- **2020**: Native browser compatibility reached full coverage across all major browsers.
- **Today**: The focus has shifted to "Declarative Shadow DOM" to support server-side rendering (SSR), making components more performant and accessible. \[[1](https://eisenbergeffect.medium.com/2023-state-of-web-components-c8feb21d4f16), [2](https://www.youtube.com/watch?v=S36jpytFa%5FM\&t=9), [3](https://eisenbergeffect.medium.com/about-web-components-7b2a3ed67a78)]

While they haven't "replaced" frameworks like React or Vue, they have become the go-to choice for building **interoperable design systems** that work across any tech stack. \[[1](https://www.abeautifulsite.net/posts/a-web-component-story/), [2](https://www.youtube.com/watch?v=S36jpytFa%5FM\&t=9)]

Are you looking to **build your first custom element**, or do you need a comparison of **modern libraries** like Lit or Stencil?

- [link](https://en.wikipedia.org/wiki/Web%5FComponents)\
  Web Components - Wikipedia\
  History. In 2011, Web Components were introduced for the first time by Alex Russell at Fronteers Conference. In 2013, Polymer, a l...\
  Wikipedia
- [link](https://coderpad.io/blog/development/web-components-101-history/)\
  Web Components 101: History - CoderPad\
  The Polymer team announced that it would migrate away from bidirectional binding and towards a one-way bound LitElement. That LitE...\
  CoderPad
- [link](https://medium.com/@pablortsal/the-year-of-web-components-c92960830d00)\
  The year of Web Components - Medium\
  The year of Web Components \* What are Web Components? Press enter or click to view image in full size. Web Components. Web Compone...\
  Medium

Show all

#

most loved web components library

May 3, 2026

The title for the "most loved" library for building **Web Components** (native browser-standard components) generally belongs to <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://lit.dev/" style="font-weight: 500; margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">Lit</a></span></strong> (formerly LitElement)</mark>. It is widely considered the industry standard due to its lightweight nature, fast rendering, and excellent developer experience. \[[1](https://github.com/web-padawan/awesome-web-components), [2](https://bestofjs.org/projects?tags=webcomponent)]

However, if you are looking for a **pre-built UI library** consisting of Web Components you can drop into any project, **[Shoelace](https://shoelace.style/)** (now rebranded as **Web Awesome**) is frequently cited as the most "loved" for its modern design, ease of use, and framework-agnostic flexibility. \[[1](https://www.reddit.com/r/Frontend/comments/1bf6xgh/complete%5Fweb%5Fcomponent%5Fframeworkssystems%5Fos%5For/), [2](https://github.com/web-padawan/awesome-web-components), [3](https://bestofjs.org/projects?tags=webcomponent)]

Top Web Component Libraries by Category

- **Lit (The Standard Base):** A simple library from Google for building fast, lightweight Web Components. It uses a declarative template system and is often used as the foundation for other design systems.
- **Shoelace / Web Awesome (The Favorite UI Kit):** Known for its high-quality, fully customizable, and accessible components. It works with any framework (React, Vue, Angular) or no framework at all.
- **[Ionic Framework](https://ionicframework.com/) (The Most Popular Toolkit):** While often used as a mobile framework, its underlying UI toolkit is built entirely with Web Components. It is battle-tested and widely used for cross-platform apps.
- **Fast (The Performance Specialist):** Microsoft's adaptive interface system focused on high performance and standards compliance.
- **[Stencil](https://stenciljs.com/) (The Compiler):** Technically a compiler rather than just a library, it is highly favored for building enterprise-grade component libraries that remain lightweight and fast. \[[1](https://css-tricks.com/a-bit-on-web-component-libraries/), [2](https://backlight.dev/mastery/best-web-components-libraries-for-design-systems), [3](https://github.com/web-padawan/awesome-web-components), [4](https://bestofjs.org/projects?tags=webcomponent), [5](https://www.reddit.com/r/Frontend/comments/1bf6xgh/complete%5Fweb%5Fcomponent%5Fframeworkssystems%5Fos%5For/)]

Popular Alternatives in 2026

While "pure" Web Components are growing, many developers still "love" libraries that bridge the gap with traditional frameworks like React: \[[1](https://blog.bitsrc.io/building-your-own-web-component-library-b4f6b419cc0b), [2](https://medium.com/@ishanbagchi/why-web-components-are-making-a-comeback-in-2025-e874eb8c9ceb), [3](https://www.reddit.com/r/reactjs/comments/xsnqk4/what%5Fis%5Feverybodys%5Ffavorite%5Fui%5Fcomponent%5Flibrary/)]

- **[shadcn/ui](https://ui.shadcn.com/):** Currently one of the most trending "copy-paste" collections, often cited as a developer favorite for modern React projects.
- **[DaisyUI](https://daisyui.com/):** A highly loved [Tailwind CSS](https://tailwindcss.com/) plugin that provides semantic classes for rapid prototyping without heavy JavaScript. \[[1](https://pixicstudio.medium.com/5-must-try-trending-ui-component-libraries-to-enhance-your-web-design-in-2025-7ed90a5137e5), [2](https://www.boundev.com/blog/best-ui-component-libraries-modern-development), [3](https://designerup.co/blog/copy-and-paste-ui-component-libraries/), [4](https://daisyui.com/alternative/shadcn/)]

Are you looking for a **tool to build** your own components or a **pre-made library** to use in an existing project?

- [link](https://css-tricks.com/a-bit-on-web-component-libraries/)\
  A Bit on Web Component Libraries | CSS-Tricks\
  Perhaps the biggest player using Web Components for a pattern library is Ionic. Their tabs are , and you can use them without invo...\
  CSS-Tricks
- [link](https://github.com/web-padawan/awesome-web-components)\
  A curated list of awesome Web Components resources. - GitHub\
  Component Libraries \* AgnosticUI - A CLI-based UI component library that copies Lit web components directly into your project. Ful...\
  GitHub
- [link](https://backlight.dev/mastery/best-web-components-libraries-for-design-systems)\
  Best Web Components libraries for Design Systems - Backlight.dev\
  Composition primitives. These libraries are the lowest level you can get. It's lower than unstyled components. You compose primiti...\
  Backlight.dev

Show all

#

compare react and lit examples

May 3, 2026

While both React and Lit are used to build interactive user interfaces, they differ fundamentally in their underlying architecture. <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">React is a full-featured web framework that uses a <strong>Virtual DOM</strong>, whereas Lit is a lightweight library built on native <strong>Web Components</strong> and <strong>Shadow DOM</strong> standards</mark>. \[[1](https://goauthentik.io/blog/2023-05-04-i-gambled-against-react-and-lost/), [2](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs?gl=us), [3](https://medium.com/@everythingwebber/list/how-react-differs-from-lit-a-detailed-comparison-01e2dd1fed78), [4](https://www.carmatec.com/blog/building-interactive-uis-with-reactjs-libraries/), [5](https://www.youtube.com/watch?v=eaaEX8tgQqA)]

Code Examples: Creating a Simple Counter

The following examples demonstrate how to create a basic counter component in both technologies.

1\. React (JSX & Hooks)

React uses **JSX**, a syntax extension that looks like HTML but lives in JavaScript. State is managed via hooks like `useState`. \[[1](https://blog.logrocket.com/lit-vs-react-comparison-guide/), [2](https://medium.com/@everythingwebber/react-vs-lit-part-2-virtual-vs-shadow-dom-cbbdd39857d3), [3](https://blog.logrocket.com/lit-vs-react-comparison-guide/), [4](https://www.simplilearn.com/react-js-vs-react-native-article), [5](https://proclusacademy.com/blog/react-101-practical-guide-to-jsx/)]

javascript

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Use code with caution.

2\. Lit (Native Standards)

Lit uses **tagged template literals** (the ``html` `` tag) to define templates. It relies on standard browser APIs, which means it often doesn't require a build step. \[[1](https://dev.to/devsatasurion/react-is-greatbut-you-should-try-lit-3aeb), [2](https://blog.logrocket.com/lit-vs-react-comparison-guide/), [3](https://lit.dev/docs/libraries/standalone-templates/), [4](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs?gl=us)]

javascript

```
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-counter')
export class SimpleCounter extends LitElement {
  @property({ type: Number }) count = 0;

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <button @click=${() => this.count++}>
          Increment
        </button>
      </div>
    `;
  }
}
```

Use code with caution.

Key Differences at a Glance

| Feature \[[1](https://medium.com/@moonwalkerdev/lit-vs-react-choosing-the-right-framework-for-your-project-acc64baf48f6), [2](https://dev.to/deificarts/lit-is-better-than-react-signals-in-lit-34gc), [3](https://www.thisdot.co/blog/showcase-react-vs-lit-element-rendering-performance), [4](https://www.youtube.com/watch?v=agBn1LW6dbM\&t=88), [5](https://www.reddit.com/r/reactjs/comments/12yxva6/whats%5Fyou%5Fopinion%5Fon%5Fthe%5Fnew%5Freddit%5Fdesign/), [6](https://medium.com/@everythingwebber/react-vs-lit-part-2-virtual-vs-shadow-dom-cbbdd39857d3), [7](https://goauthentik.io/blog/2023-05-04-i-gambled-against-react-and-lost/), [8](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs?gl=us), [9](https://dev.to/devsatasurion/react-is-greatbut-you-should-try-lit-3aeb), [10](https://medium.com/@everythingwebber/list/how-react-differs-from-lit-a-detailed-comparison-01e2dd1fed78)] | React                                                   | Lit                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| **Philosophy**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Framework-driven; manages the entire UI via Virtual DOM | Standards-driven; builds native Web Components                    |
| **Size**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ~40kB+ (React + ReactDOM)                               | ~5kB (minified + gzipped)                                         |
| **Performance**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | High, but incurs "diffing tax" on large updates         | Often faster (~10–30% in benchmarks) by updating the DOM directly |
| **Interoperability**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Harder to use inside other frameworks without wrappers  | Highly interoperable; works anywhere a standard HTML tag does     |
| **Styling**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Needs CSS-in-JS, modules, or external files             | Uses **Shadow DOM** for native style encapsulation                |

Which should you choose?

- **Choose React** if you are building a large-scale single-page application (SPA) that requires a massive ecosystem of libraries, established patterns, and a huge hiring pool.
- **Choose Lit** if you want to build lightweight, high-performance UI components or design systems that need to work across different frameworks and platforms. \[[1](https://www.reddit.com/r/reactjs/comments/ugv9cm/reactjs%5Fvs%5Flithtml/), [2](https://www.geeksforgeeks.org/reactjs/comparative-analysis-of-react-lit-element-and-lit-html-in-frontend-development/), [3](https://zenn.dev/ncdc/articles/af1a87979b21ac), [4](https://dev.to/reggi/framework-interoperable-component-libraries-using-lit-web-components-43ac)]

Are you planning to build a **standalone web application** or a **reusable component library**? \[[1](https://teleporthq.io/blog/react-component-library-10-most-popular-solutions-to-use-in-2022)]

- [link](https://blog.logrocket.com/lit-vs-react-comparison-guide/)\
  Lit vs. React: A comparison guide - LogRocket Blog\
  Lit's core concepts and features are similar to those of React, but there are some significant differences. For example, React has...\
  LogRocket Blog
- [link](https://goauthentik.io/blog/2023-05-04-i-gambled-against-react-and-lost/)\
  I gambled against React and lost (and I don't regret a thing) | authentik\
  Lit and React is apples and oranges​ So far, I've skipped over what might be the most important way to compare Lit and React – Lit...\
  Authentik
- [link](https://dev.to/devsatasurion/react-is-greatbut-you-should-try-lit-3aeb)\
  React is great...but you should try Lit. - DEV Community\
  They are both reactive. There is a Lit component lifecycle (no virtual DOM required) and there is a React component lifecycle. Whe...\
  DEV Community

Show all

examples

May 3, 2026

To further compare **React** and **Lit**, let's look at how they handle common real-world tasks like fetching data from an API and building a list.

Example 1: Fetching Data from an API

This example shows how both libraries handle asynchronous operations and side effects.

React (Functional Component)

React uses the `useEffect` hook to trigger a fetch when the component mounts. \[[1](https://www.youtube.com/watch?v=q79VhNMUXSE)]

javascript

```
import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://example.com')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // Empty array ensures this runs once

  if (!user) return <p>Loading...</p>;

  return <h1>Hello, {user.name}</h1>;
}
```

Use code with caution.

Lit (Class-based Component)

Lit uses standard lifecycle methods like `connectedCallback` or `firstUpdated` to perform one-time tasks. \[[1](https://developer.mozilla.org/en-US/blog/mdn-front-end-deep-dive/), [2](https://lit.dev/docs/components/overview/)]

javascript

```
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('user-profile')
export class UserProfile extends LitElement {
  @state() user = null;

  // Runs when the element is added to the DOM
  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://example.com');
    this.user = await response.json();
  }

  render() {
    if (!this.user) return html`<p>Loading...</p>`;
    return html`<h1>Hello, ${this.user.name}</h1>`;
  }
}
```

Use code with caution.

Example 2: Lists and Loops

Rendering multiple items from an array is a core part of most apps.

React (JSX Map)

In React, you use the standard JavaScript `.map()` function within your JSX. Every item needs a unique `key` prop. \[[1](https://www.youtube.com/watch?v=9wiWzu%5FtRB0), [2](https://devblogs.microsoft.com/visualstudio/creating-a-react-todo-app-in-visual-studio-2022/)]

javascript

```
const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>{task.text}</li>
    ))}
  </ul>
);
```

Use code with caution.

Lit (Direct Map)

Lit also uses `.map()`, but it's embedded directly in the ``html` `` template literal. Lit's [templating system](https://lit.dev/docs/v2/templates/lists/) efficiently updates only the parts of the list that change. \[[1](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs?gl=us), [2](https://blog.logrocket.com/getting-started-lit-html-litelement/)]

javascript

```
import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

// Lit can use standard map or the 'repeat' directive for better performance
const taskList = (tasks) => html`
  <ul>
    ${tasks.map(task => html`<li>${task.text}</li>`)}
  </ul>
`;
```

Use code with caution.

Direct Feature Comparison

While they achieve similar results, their internal "mental models" differ: \[[1](https://blog.logrocket.com/lit-vs-react-comparison-guide/)]

- **State Management**: React relies on [State Hooks](https://react.dev/reference/react/useState) that trigger a "re-render" of the entire component tree branch. Lit uses [Reactive Properties](https://lit.dev/docs/components/properties/) that automatically update only the specific DOM nodes tied to that property.
- **Encapsulation**: React uses a flat DOM (unless manually configured) where styles can "leak" out. Lit uses **Shadow DOM**, which natively scopes styles and markup so they can't interfere with the rest of your page.
- **Syntax**: React requires **JSX**, which must be compiled (e.g., by Babel). Lit uses **Standard Template Literals**, which run natively in modern browsers without a build step. \[[1](https://legacy.reactjs.org/), [2](https://medium.com/@everythingwebber/react-vs-lit-part-2-virtual-vs-shadow-dom-cbbdd39857d3), [3](https://lit.dev/docs/components/properties/), [4](https://bennypowers.dev/posts/lets-build-web-components/part-5-litelement/), [5](https://www.youtube.com/watch?v=q79VhNMUXSE), [6](https://lit.dev/docs/components/overview/), [7](https://blog.logrocket.com/getting-started-lit-html-litelement/)]

Would you like to see how to **style** these components or how to **pass data** between them?

- [link](https://www.youtube.com/watch?v=9wiWzu%5FtRB0)\
  Build this to-do-list app with React!\
  A to-do list application is created using React. The application utilizes a function-based component named 'to-do list'. The appli...\
  22:35\
  YouTube·Bro Code
- [link](https://legacy.reactjs.org/)\
  A JavaScript library for building user interfaces - React\
  A Simple Component React components implement a render() method that takes input data and returns what to display. This example us...\
  React – A JavaScript library for building user interfaces
- [link](https://medium.com/@everythingwebber/react-vs-lit-part-2-virtual-vs-shadow-dom-cbbdd39857d3)\
  React vs Lit (Part-2) — Virtual vs Shadow DOM | by Rahul Sharma - Medium\
  Index. html has a div “root” which serves as a starting point for the react app. Normally, a react component is rendered inside th...\
  Medium

Show all
