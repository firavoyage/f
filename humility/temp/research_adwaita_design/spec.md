# style on web

## Philosophy

- Vanilla CSS only
- Modern CSS features are powerful enough.

## Architecture

- normalize css
- Flat file structure: `my_design.css` only one css file for a design system

## Color System

- **OKLCH** color space (perceptually uniform).
- Raw LCH values: `--lch-blue: 54% 0.15 255`
- Semantic colors: `--color-link: oklch(var(--lch-blue))`
- Dark mode via single `@media (prefers-color-scheme: dark)` query.
- `color-mix()`: derive palette from one variable.

## Spacing

- Character-based: `--inline-space: 1ch` (horizontal), `--block-space: 1rem` (vertical).
- Responsive breakpoints use character count: `@media (min-width: 100ch)`.

## Utility Classes

- no.
- use the component name as the classname of the root element
- use kebab for children
- every element should only have one semantic class
- use data attr for states

## Modern CSS Features Used

- Custom properties (variables)
- Container queries
- `color-mix()` for dynamic colors
- `clamp()`, `min()`, `max()` for responsive sizing
- `@starting-style` for entrance animations
- View Transitions API
- CSS masks for spinners

example:

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

```css
.Card {
  padding: var(--...);
}
.Card-title {
  font-size: var(--...);
}
.Card-desc {
  color: var(--...);
}

/* Handle your state clean and fast */
.Card[data-active="true"] .Card-title {
  color: var(--...);
}
```

# create design tokens

what are design tokens

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Design tokens are the central, single source of truth for storing design decisions as key-value pairs.</span></strong></mark> They replace hard-coded values (such as hex codes for color, pixels for spacing, or font sizes) with human-readable names. These "nicknames" act as platform-agnostic variables that bridge the gap between design tools like Figma and engineering code bases across Web, iOS, and Android. \[[1](https://www.youtube.com/shorts/EwBIf3RDL-0), [2](https://www.youtube.com/shorts/wCw9Skr2hk4), [3](https://thedesignsystem.guide/design-tokens), [4](https://zeroheight.com/blog/why-should-you-use-design-tokens/), [5](https://medium.com/design-bootcamp/design-tokens-a-comprehensive-guide-for-designers-613d44c5bda2)]

The 3-Tier Token Structure

A scalable token architecture uses an aliased setup, dividing design choices into three distinct layers: \[[1](https://www.reddit.com/r/FigmaDesign/comments/u1u1ud/how%5Fare%5Fdesign%5Ftokens%5Fpractically%5Fused%5Fin/), [2](https://www.designsystemscollective.com/the-art-of-design-tokens-a-metaphor-for-the-3-tier-token-model-e166a2ab3073), [3](https://medium.com/orfium/how-our-team-adopted-design-tokens-and-how-your-team-can-do-it-too-f8d04cfc1a23), [4](https://www.designsystemscollective.com/your-guide-to-design-systems-from-a-dev-whos-been-in-the-trenches-163fbcf7e5a9)]

1. **Global Tokens (Primitives)**: The raw building blocks representing static options. They define everything available in the system but are not used directly on components.

- _Example_: `color-blue-500` = `#1A73E8`

2. **Semantic Tokens (Alias Tokens)**: Tokens that add a layer of meaning or purpose to a global token, dictating how a variable should be used.

- _Example_: `background-action-primary` = `color-blue-500`

3. **Component-Specific Tokens**: Deeply specific tokens tied to an individual user interface element, isolating changes from the rest of the application.

- _Example_: `button-primary-bg` = `background-action-primary` \[[1](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421), [2](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles), [3](https://www.reddit.com/r/DesignSystems/comments/1ihf57j/am%5Fi%5Fmissing%5Fsomething%5For%5Fare%5Fwe%5Foverengineering/), [4](https://design.gitlab.com/product-foundations/design-tokens), [5](https://www.youtube.com/shorts/EwBIf3RDL-0), [6](https://www.designsystemscollective.com/the-art-of-design-tokens-a-metaphor-for-the-3-tier-token-model-e166a2ab3073)]

Common Types of Design Tokens

Tokens are not just for colors; they capture nearly every visual property across a layout: \[[1](https://atlassian.design/tokens/design-tokens)]

- **Color**: Backgrounds, borders, text, states (hover, error).
- **Spacing & Sizing**: Padding, margins, gap distances.
- **Typography**: Font families, weights, line heights.
- **Elevation**: Drop shadows, z-index layers.
- **Shape**: Border radii (e.g., `radius-rounded-md` = `8px`). \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA), [2](https://www.youtube.com/watch?v=yeF8GA44G5E\&t=49), [3](https://penpot.app/blog/what-are-design-tokens-a-complete-guide/), [4](https://atlassian.design/tokens/design-tokens), [5](https://www.youtube.com/watch?v=JyCmacSyDY4), [6](https://www.reddit.com/r/FigmaDesign/comments/u1u1ud/how%5Fare%5Fdesign%5Ftokens%5Fpractically%5Fused%5Fin/), [7](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles), [8](https://design.gitlab.com/product-foundations/design-tokens)]

The Benefits of Using Tokens

- **Global Theming**: Enables seamless switching between light mode, dark mode, or localized branding by swapping out token values while retaining identical token names.
- **Consistency**: Eradicates ad-hoc design deviations, guaranteeing the same visual elements look uniform across different teams and software stacks.
- **Maintenance at Scale**: Updating a brand color or button radius takes seconds; you simply change the value of the root token, and it automatically cascades across all products and code files.
- **Shared Language**: Establishes cross-discipline alignment, giving designers and developers a shared lexicon so they no longer have to communicate via varying raw code specs. \[[1](https://medium.com/nyc-design/mastering-design-tokens-d492cdd92720), [2](https://medium.com/design-bootcamp/design-tokens-for-better-design-systems-ab6d833e8d2f), [3](https://goodpractices.design/articles/design-tokens), [4](https://www.youtube.com/watch?v=yeF8GA44G5E\&t=49), [5](https://www.youtube.com/shorts/EwBIf3RDL-0), [6](https://atlassian.design/tokens/design-tokens), [7](https://medium.com/design-bootcamp/design-tokens-a-comprehensive-guide-for-designers-613d44c5bda2)]

To implement design tokens, they are typically written in central [JSON files](https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71). These files are pushed through transformation tools like Amazon Style Dictionary to compile them into native formats like CSS variables, SASS maps, Swift code, or Android XML. \[[1](https://www.contentful.com/blog/design-token-system/), [2](https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71), [3](https://designsystem.digital.gov/design-tokens/), [4](https://sii.pl/blog/en/harmonizing-design-and-development-design-tokens-in-ux-ui-dev-collaboration/), [5](https://designtokens.substack.com/p/using-design-tokens-as-variables)]

If you are planning a design token architecture, I can help you map things out. Tell me:

- Are you setting this up for a **single product** or a **multi-brand ecosystem**?

- What **design tools** (like Figma) and **developer frameworks** (like React, Tailwind, Swift) do you need to sync?

- Do you need an example of a **naming convention taxonomy**? \[[1](https://zeroheight.com/blog/a-basic-introduction-to-design-tokens/), [2](https://www.better.care/blog-en/how-design-tokens-impact-design-systems-and-why-we-should-use-them/), [3](https://medium.com/@barshaya97%5F76274/design-tokens-enforcement-977310b2788e), [4](https://makandra.de/en/articles/atomic-design-and-design-tokens-665)]

- [link](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)\
  Tokens in Design Systems - Medium\
  \#1. ... You can't make decisions without options. Tokens are an effective instrument for illustrating the path from one to the oth...\
  Medium

- [link](https://www.reddit.com/r/FigmaDesign/comments/u1u1ud/how%5Fare%5Fdesign%5Ftokens%5Fpractically%5Fused%5Fin/)\
  How are design tokens practically used in (large-scale ... - Reddit\
  The tokens at my company are very straight forward: background, border, icon etc. They are grouped by descriptors for different us...\
  Reddit

- [link](https://www.youtube.com/shorts/EwBIf3RDL-0)\
  What are design tokens?\
  Design tokens serve as a central source of truth for naming and storing design decisions. These decisions are distributed as a com...\
  0:58\
  YouTube·Figma

Show all

You said: what do they include

Design tokens can capture almost any visual property or design choice within a system. They are categorized into several types, spanning layout, styling, and motion.

Core Visual Properties

- **Color**: Fills, text colors, background colors, border colors, and interactive states like hover, active, or disabled.
- **Typography**: Font families, weights, font sizes, line heights, and letter spacing.
- **Spacing**: Padding, margins, grid gutters, and gap distances between elements.
- **Sizing**: Fixed widths, heights, min/max dimensions, and icon dimensions.
- **Borders**: Border widths (thin, thick) and border styles (solid, dashed).
- **Shape (Radius)**: Corner rounding values for buttons, cards, inputs, and modals.
- **Elevation & Shadows**: Drop shadows, inner shadows, and z-index layers to handle overlapping content.

Advanced & Behavioral Properties

- **Motion & Animation**: Transition durations (e.g., `200ms`), easing curves (e.g., `ease-in-out`), and keyframe steps.
- **Opacity**: Transparency levels for overlays, disabled states, or decorative backgrounds.
- **Breakpoints**: Screen width thresholds used to trigger responsive layouts (e.g., mobile, tablet, desktop).
- **Assets (Optional)**: References to static file paths, such as brand logos or specific icon sets.

Structure of a Token Value

In a raw data format (like JSON), each included token typically bundles a **name**, a **value**, and a **type** to help engineering tools parse them correctly:

json

```
{
  "spacing-layout-md": {
    "value": "16px",
    "type": "spacing"
  },
  "color-text-primary": {
    "value": "{color.base.gray.900}",
    "type": "color"
  }
}
```

Use code with caution.

Are you looking to see how a **specific category** (like spacing or motion) is written out? If you'd like, I can provide a **complete JSON example** or show you how these tokens map directly to **Figma variables**.

You said: example via css variables

Here is how design tokens translate directly into CSS variables using a 3-tier structure (Global, Semantic, and Component).

1\. The CSS Architecture

css

```
:root {
  /* ==========================================================================
     1. GLOBAL TOKENS (Primitives / The Palette)
     ========================================================================== */
  --color-blue-100: #e3f2fd;
  --color-blue-500: #1a73e8;
  --color-blue-700: #1557b0;
  --color-gray-900: #202124;

  --space-2: 8px;
  --space-4: 16px;

  --radius-sm: 4px;
  --radius-md: 8px;

  /* ==========================================================================
     2. SEMANTIC TOKENS (Alias / The Meaning)
     ========================================================================== */
  /* Purpose-driven color mapping */
  --color-text-main: var(--color-gray-900);
  --color-bg-interactive: var(--color-blue-500);
  --color-bg-interactive-hover: var(--color-blue-700);

  /* Purpose-driven layout mapping */
  --space-component-padding: var(--space-2);
  --space-container-margin: var(--space-4);
  --radius-interactive: var(--radius-sm);

  /* ==========================================================================
     3. COMPONENT TOKENS (Scoped Variables)
     ========================================================================== */
  /* Button overrides mapped strictly to semantic choices */
  --btn-bg: var(--color-bg-interactive);
  --btn-bg-hover: var(--color-bg-interactive-hover);
  --btn-padding-inline: var(--space-container-margin);
  --btn-padding-block: var(--space-component-padding);
  --btn-radius: var(--radius-interactive);
}
```

Use code with caution.

2\. Implementation in Component HTML/CSS

When building UI elements, developers bypass global hex codes or raw pixel numbers entirely. They apply the component or semantic variables directly:

html

```
<button class="c-button">Submit</button>
```

Use code with caution.

css

```
.c-button {
  /* Use the component tokens */
  background-color: var(--btn-bg);
  padding: var(--btn-padding-block) var(--btn-padding-inline);
  border-radius: var(--btn-radius);

  /* Static component styling */
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.c-button:hover {
  background-color: var(--btn-bg-hover);
}
```

Use code with caution.

Why This Matters for Themes

If you need to implement **Dark Mode**, you do not rewrite your component CSS. You only override the values of the **Semantic Tokens** inside a theme class block:

css

```
@media (prefers-color-scheme: dark) {
  :root {
    /* Swap global mapping for the semantic meaning */
    --color-text-main: #ffffff;
    --color-bg-interactive: var(--color-blue-100);
    /* Buttons and components update automatically */
  }
}
```

Use code with caution.

Would you like to see how to organize this into **separate files** for production, or how toolsets like **Tailwind CSS** ingest these variables?

You said: no need to have component tokens. just reference semantic tokens inside the component class.

Removing component tokens simplifies the system and works perfectly for smaller codebases or strict utility frameworks.

Here is the streamlined CSS structure using only **Global** and **Semantic** tokens applied directly to your components.

1\. Token Setup in Root

css

```
:root {
  /* ==========================================================================
     1. GLOBAL TOKENS (Primitives)
     ========================================================================== */
  --color-blue-500: #1a73e8;
  --color-blue-700: #1557b0;
  --color-gray-900: #202124;

  --space-8: 8px;
  --space-16: 16px;

  --radius-4: 4px;

  /* ==========================================================================
     2. SEMANTIC TOKENS (Aliases applied globally)
     ========================================================================== */
  --color-text-primary: var(--color-gray-900);
  --color-bg-action: var(--color-blue-500);
  --color-bg-action-hover: var(--color-blue-700);

  --space-inline-md: var(--space-16);
  --space-block-sm: var(--space-8);

  --radius-interactive: var(--radius-4);
}
```

Use code with caution.

2\. Direct Implementation in Component Classes

Now, your components skip the component-token layer entirely and reference the purpose-driven semantic variables directly inside the selector blocks:

css

```
.c-button {
  /* Referencing semantic design tokens directly */
  background-color: var(--color-bg-action);
  padding: var(--space-block-sm) var(--space-inline-md);
  border-radius: var(--radius-interactive);

  /* Hardcoded core defaults */
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.c-button:hover {
  background-color: var(--color-bg-action-hover);
}

.c-card {
  /* Other components use the same shared semantic rules */
  border-radius: var(--radius-interactive);
  padding: var(--space-inline-md);
}
```

Use code with caution.

Why This Approach Works Well

- **Cleaner CSS**: You write significantly less code because you do not have to maintain large variable maps for every single UI widget.
- **Easier Learning Curve**: Developers instantly understand tokens like `--color-bg-action` without having to look up widget-scoped references.
- **Perfect for Frameworks**: This mapping logic mirrors how tools like Tailwind CSS or Bootstrap configure themes at the global layout level.

Would you like to explore **naming conventions** for semantic tokens to prevent them from becoming messy, or look at setting up a **dark mode override** using this exact code?


