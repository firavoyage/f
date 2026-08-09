<!-- see also: 20260725 tools layout -->

# all css layout props

CSS layouts are governed by distinct **layout algorithms** (modes) that determine how elements position themselves relative to their parents, siblings, and the viewport. [link](https://www.joshwcomeau.com/css/understanding-layout-algorithms/)

Here is the comprehensive reference of all CSS layout properties, categorized by their respective layout systems.

### 📦 The Box Model (Foundational Layout)

Every visible HTML element generates a rectangular box. These properties establish the fundamental sizing and spacing of those boxes. [link](https://every-layout.dev/rudiments/boxes/)

- `display`: Defines the element's layout type (e.g., `block`, `inline`, `flex`, `grid`, `none`).
- `box-sizing`: Controls how total width/height are calculated (`content-box` vs. `border-box`).
- `width` / `height`: Sets explicit structural dimensions of the element's box.
- `max-width` / `max-height`: Constrains the maximum boundary dimensions.
- `min-width` / `min-height`: Guarantees a minimum dimension requirement.
- `margin`: Sets spacing outside the border boundary (Shorthands: `margin-top`, `-right`, `-bottom`, `-left`).
- `padding`: Sets spacing inside the border, around content (Shorthands: `padding-top`, `-right`, `-bottom`, `-left`).
- `border`: Sets width, style, and color around the padding area.
- `overflow`: Manages content spilling out of boundaries (`visible`, `hidden`, `scroll`, `auto`).
- `aspect-ratio`: Forces a specific proportional relationship between width and height. [link](https://www.youtube.com/watch?v=geRlpbhSwqM\&t=199)

### 🧭 Positioned Layout (Explicit Controls)

Used to pull elements out of the normal document flow and place them precisely using coordinate properties. [link](https://medium.com/@dfellows12/essential-css-layout-properties-f5160432e091)

- `position`: Determines positioning context (`static`, `relative`, `absolute`, `fixed`, `sticky`).
- `top` / `right` / `bottom` / `left`: Offsets the element from its calculated position context.
- `z-index`: Sets the stacking order along the virtual Z-axis for overlapping items.
- `inset`: Shorthand property representing top, right, bottom, and left simultaneously. [link](https://www.joshwcomeau.com/css/understanding-layout-algorithms/)

### ⛓️ Flexible Box Layout (Flexbox)

Designed for one-dimensional layouts along a single row or column axis. [link](https://www.youtube.com/watch?v=i1FeOOhNnwU\&t=160)

#### For the Parent Container:

- `flex-direction`: Sets the main layout axis direction (`row`, `row-reverse`, `column`, `column-reverse`).
- `flex-wrap`: Controls whether items wrap onto new lines (`nowrap`, `wrap`, `wrap-reverse`).
- `flex-flow`: Combined shorthand property for `flex-direction` and `flex-wrap`.
- `justify-content`: Aligns items horizontally along the main structural axis.
- `align-items`: Aligns items vertically along the secondary cross axis.
- `align-content`: Aligns multi-line flex rows when extra vertical space exists.
- `gap` / `row-gap` / `column-gap`: Defines gutters directly between internal flex items. [link](https://www.youtube.com/watch?v=i1FeOOhNnwU\&t=160)

#### For the Child Items:

- `flex-grow`: Dictates the proportion of leftover space an item consumes.
- `flex-shrink`: Dictates how an item scales down when space is insufficient.
- `flex-basis`: Sets the default initial dimension before space distribution occurs.
- `flex`: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` combined.
- `align-self`: Overrides parent `align-items` instructions for an individual item.
- `order`: Overrides default HTML source order positions with numeric values. [link](https://www.youtube.com/watch?v=i1FeOOhNnwU\&t=160)

### 🏁 Grid Layout (Two-Dimensional)

Designed for complex, multi-row, and multi-column grid matrix layouts. [link](https://www.scale.at/blog/css-layout-modes)

#### For the Parent Container:

- `grid-template-columns`: Defines track widths for columns using sizes, percentages, or `fr` units.
- `grid-template-rows`: Defines track heights for grid rows using explicit layout units.
- `grid-template-areas`: Names grid bounding fields to place children via named layouts.
- `grid-template`: Shorthand tracking property for template columns, rows, and areas.
- `grid-auto-columns`: Sets default structural track size for implicitly generated columns.
- `grid-auto-rows`: Sets default structural track size for implicitly generated rows.
- `grid-auto-flow`: Rules controlling automatic item placement engines (`row`, `column`, `dense`).
- `grid`: Collective overarching shorthand for grid template and auto properties.
- `gap` / `row-gap` / `column-gap`: Dictates precise spatial margins between grid tracks. [link](https://css-tricks.com/complete-guide-css-grid-layout/)

#### For the Child Items:

- `grid-column-start` / `grid-column-end`: Defines vertical boundary grid lines for placements.
- `grid-row-start` / `grid-row-end`: Defines horizontal boundary grid lines for placements.
- `grid-column` / `grid-row`: Shorthands combining start and end tracking line numbers.
- `grid-area`: Assigns items directly to named template areas or serves as a four-way line shorthand.
- `justify-self`: Aligns a singular grid item box along its inline/horizontal axis.
- `align-self`: Aligns a singular grid item box along its block/vertical axis. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid%5Flayout)

### 🗺️ Box Alignment (Shared Global Properties)

Modern CSS consolidates positioning alignment commands across Flexbox, Grid, and Block systems using these unified properties. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid%5Flayout)

- `justify-items`: Set default item box alignments along row directions for internal layout cells.
- `align-items`: Set default item box alignments along column directions for layout fields.
- `place-items`: Direct shorthand parsing both `align-items` and `justify-items` values simultaneously.
- `justify-content`: Sets container distribution behaviors along internal inline axes.
- `align-content`: Sets container distribution behaviors along internal block axes.
- `place-content`: Direct shorthand parsing both `align-content` and `justify-content` values simultaneously. [link](https://deeplizard.com/article/css-a0-adlrzi)

### 📰 Multi-column Layout

Mainly used for splitting running textual items across magazine-style vertical columns. [link](https://www.scale.at/blog/css-layout-modes)

- `column-count`: Explicitly mandates the absolute number of structural columns.
- `column-width`: Sets optimal target item widths for responsive automatic scaling.
- `columns`: Shorthand managing both `column-width` and `column-count` together.
- `column-gap`: Sets spatial column spacing separations.
- `column-rule`: Draws vertical borders separating column structures (Shorthands: `-width`, `-style`, `-color`).
- `column-span`: Allows an element to stretch completely across all columns (e.g., headers).
- `column-fill`: Balance text quantities evenly across columns (`auto`, `balance`). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### 🪵 Legacy & Utility Layout Rules

- `float`: Left or right element shifting historically used for layout layout building.
- `clear`: Forbids floating elements from sitting adjacent to the item box boundaries.
- `vertical-align`: Sets inline element heights relative to text baselines or table rows. [link](https://medium.com/@dfellows12/essential-css-layout-properties-f5160432e091)

### 🌐 Logical Layout Properties

Modern writing-mode safe layout alternatives that adapt automatically based on text direction (LTR vs RTL). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Logical%5Fproperties%5Fand%5Fvalues)

- Instead of physical directions (`top`, `bottom`, `left`, `right`), these use:
  - `block-start` / `block-end` (Vertical flow)
  - `inline-start` / `inline-end` (Horizontal flow)
- **Examples:** `margin-inline-start`, `padding-block-end`, `inset-inline`, `width` becomes `inline-size`, `height` becomes `block-size`. [link](https://www.youtube.com/watch?v=geRlpbhSwqM\&t=199)

***

If you want to dive deeper, let me know:

- Which specific **layout system** you are trying to implement (e.g., Flexbox or Grid)?

- Whether you are working on making your layout **responsive**.

- If you need help resolving a **bug** (like unintended overflows or alignment problems). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid%5Flayout)

- [link](https://www.joshwcomeau.com/css/understanding-layout-algorithms/)\
  Understanding Layout Algorithms • Josh W. Comeau\
  Mar 28, 2022 — This works because the Flexbox algorithm implements the z-index property. When the language authors were designing the Flexbox alg...\
  Josh Comeau

- [link](https://www.youtube.com/watch?v=geRlpbhSwqM\&t=199)\
  How to Build Responsive Layouts with HTML & CSS (free ...\
  Jun 1, 2026 — then the content is going to overflow the bounds of the element which doesn't really look great okay so we've talked about the con...\
  [8m](https://www.youtube.com/watch?v=geRlpbhSwqM\&t=199)\
  YouTube·Coder Coder

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)\
  CSS properties - MDN Web Docs\
  Mar 25, 2026 — CSS properties. A CSS property is a parameter used in a CSS declaration that lets you style certain aspects of selected elements. ...\
  MDN Web Docs

Show all

# css position

July 21, 2026

<mark><span>The<span> </span></span><strong>CSS<span> </span><code dir="ltr">position</code><span> </span>property</strong><span> </span>determines how an element is placed in a document layout</mark>. By combining `position` with the offset properties (`top`, `right`, `bottom`, `left`) and `z-index`, you can precisely control where your elements appear. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)

There are **five main position values** you can use: [link](https://www.w3schools.com/css/css%5Fposition.asp)

### 1. `position: static;` (The Default)

- **Behavior**: Elements follow the normal document flow.
- **Layout**: They stack one after another according to standard rules.
- **Offsets**: The `top`, `bottom`, `left`, `right`, and `z-index` properties have **no effect**. [link](https://www.w3schools.com/css/css%5Fposition.asp)

### 2. `position: relative;`

- **Behavior**: Elements remain in the normal document flow, but can be shifted.
- **Offsets**: `top`, `bottom`, `left`, and `right` nudge the element away from its **original position**.
- **Space**: The original space the element occupied is preserved in the layout. Adjacent elements do not move to fill the gap.
- **Context**: It is often used to establish a reference anchor point for absolute-positioned child elements. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)

### 3. `position: absolute;`

- **Behavior**: The element is **completely removed** from the normal document flow.
- **Space**: Surrounding elements act as if it does not exist and close the gap.
- **Offsets**: It is positioned relative to its **nearest positioned ancestor** (any ancestor with a value other than `static`). If no such ancestor exists, it positions itself relative to the initial containing block (usually the body/viewport). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)

### 4. `position: fixed;`

- **Behavior**: The element is removed from the document flow and fixed relative to the **viewport (browser window)**.
- **Scrolling**: It stays in the **exact same spot** on the screen even when the user scrolls the page.
- **Use Cases**: Commonly used for sticky navigation bars, "back to top" buttons, or persistent sidebars. [link](https://www.w3schools.com/css/css%5Fposition.asp)

### 5. `position: sticky;`

- **Behavior**: The element acts like `relative` until the page is scrolled to a **defined threshold**.
- **Transition**: Once the user scrolls past the threshold, the element **sticks** in place like a `fixed` element.
- **Constraint**: It is constrained to, and will only scroll within, its parent container. You must specify at least one offset (e.g., `top: 0;`) for it to activate. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)

***

### Quick Comparison Matrix

| Position       | Removed From Flow? | Positioned Relative To...    | Responds to Offsets? |
| -------------- | ------------------ | ---------------------------- | -------------------- |
| **`static`**   | No                 | Normal document flow         | No                   |
| **`relative`** | No                 | Its own default position     | Yes                  |
| **`absolute`** | Yes                | Nearest non-static ancestor  | Yes                  |
| **`fixed`**    | Yes                | Browser viewport             | Yes                  |
| **`sticky`**   | No (Toggles)       | Scroll position / Parent box | Yes                  |

***

### Basic Syntax Example

css

```
.parent-container {
  position: relative; /* Acts as the reference point for the child */
}

.child-element {
  position: absolute;
  top: 20px;         /* 20px down from the parent's top border edge */
  right: 10px;       /* 10px in from the parent's right border edge */
  z-index: 10;        /* Sits on top of lower z-index items */
}
```

Use code with caution.

If you are currently building a layout, let me know:

- **What component** are you trying to build? (e.g., a sticky navbar, a popup modal, an image overlay)
- **What is happening** that shouldn't be? (e.g., elements overlapping, disappearing on scroll)

I can provide the **exact code block** you need to fix your design.

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)\
  position CSS property - MDN Web Docs - Mozilla\
  position CSS property. ... This feature is well established and works across many devices and browser versions. It's been availabl...\
  MDN Web Docs
- [link](https://www.w3schools.com/css/css%5Fposition.asp)\
  CSS The position Property - W3Schools\
  The CSS position Property. The position property specifies the positioning type for an element. This property can have one of the ...\
  W3Schools
- [link](https://www.youtube.com/watch?v=jx5jmI0UlXU\&t=51)\
  Learn CSS Position In 9 Minutes\
  does is it says that it should follow the other elements in the document flow. so whatever comes first in our HTML. for example ch...\
  4m\
  YouTube·Web Dev Simplified

Show all

## examples of each

examples of each

July 21, 2026

Here are minimal, practical code examples for each of the five CSS position values.

### 1. Static Example (Normal Flow)

This is how elements behave by default. They stack naturally.

html

```
<div class="box-static">Box 1</div>
<div class="box-static">Box 2</div>
```

Use code with caution.

css

```
.box-static {
  position: static; /* Default behavior */
  background-color: lightcoral;
  margin: 10px;
}
```

Use code with caution.

### 2. Relative Example (Nudged From Original Spot)

This shifts the element without disturbing the layout of surrounding boxes.

html

```
<div class="box">Box 1</div>
<div class="box box-relative">Box 2 (Shifted)</div>
<div class="box">Box 3</div>
```

Use code with caution.

css

```
.box {
  background-color: lightblue;
  margin: 10px;
}

.box-relative {
  position: relative;
  top: 20px;  /* Moves 20px down from where it normally sits */
  left: 30px; /* Moves 30px right from where it normally sits */
  background-color: deepskyblue;
}
```

Use code with caution.

### 3. Absolute Example (Placed Inside a Relative Parent)

The red badge is positioned exactly in the top-right corner of the card container.

html

```
<div class="card">
  <h2>Product Title</h2>
  <span class="badge">New</span>
</div>
```

Use code with caution.

css

```
.card {
  position: relative; /* Anchor point for the absolute child */
  width: 200px;
  height: 150px;
  border: 1px solid #ccc;
}

.badge {
  position: absolute;
  top: 0;
  right: 0; /* Snaps exactly to top-right corner of .card */
  background-color: red;
  color: white;
  padding: 5px;
}
```

Use code with caution.

### 4. Fixed Example (Sticky Navigation)

This header will stay locked at the top of the browser window even when scrolling down.

html

```
<nav class="navbar">Always at the Top</nav>
<main>Long page content goes here...</main>
```

Use code with caution.

css

```
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
}

main {
  margin-top: 60px; /* Prevents text from hiding under the fixed nav */
}
```

Use code with caution.

### 5. Sticky Example (Section Headers)

The header behaves like a normal element until you scroll down to it. Then, it locks at `top: 0` until you scroll past its parent container.

html

```
<div class="container">
  <h2 class="sticky-header">Category A</h2>
  <p>List item...</p>
  <p>List item...</p>
  <p>List item...</p>
</div>
```

Use code with caution.

css

```
.sticky-header {
  position: sticky;
  top: 0; /* Sticks to the very top of the viewport when reached */
  background-color: #f1f1f1;
  padding: 10px;
}
```

Use code with caution.

To help you implement this code, let me know:

- Are you writing this in **plain HTML/CSS**, **React**, or a framework like **Tailwind CSS**?
- Do you want to see a live preview or code for a **specific UI component**?

## esti adoption percentage of each in silicon valley

There are **no official regional web development data sets** that track exact CSS property distribution specifically for Silicon Valley companies versus global tech companies. [link](https://w3techs.com/technologies/details/ce-css)

However, looking at global telemetric crawl data (from HTTP Archive and W3Techs) combined with the architectural patterns of modern web applications built by Silicon Valley tech giants (like Meta, Google, Apple, and Netflix), we can highly accurately **estimate the occurrence and adoption percentage** of these layout rules across codebases.

### Estimated Occurrence and Adoption Breakdown

Because a single codebase or web page uses hundreds of elements, these percentages represent **how frequently a specific position value appears relative to all styled elements on a page**, rather than "how many websites use it" (almost all sites use a mix of all five). [link](https://www.sololearn.com/blog/css-absolute-fix-relative-positioning/)

| CSS Position Value | Estimated Occurrence Rate | Adoption Level in SV Tech | Primary Architectural Reason                                                                                                               |
| ------------------ | ------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`static`**       | **~75% - 80%**            | Default Baseline          | Elements default to this. Silicon Valley relies heavily on Flexbox and Grid layouts, which reduce the need to change the default position. |
| **`relative`**     | **~12% - 15%**            | Ubiquitous Standard       | Extensively used as a "positioning context anchor" for dropdown containers, tooltips, custom buttons, and cards.                           |
| **`absolute`**     | **~5% - 7%**              | High-Frequency Utility    | Used for overlay badges, close icons on modals, custom drop-downs, and complex visual UI illustrations.                                    |
| **`fixed`**        | **~1% - 2%**              | Infrastructure Essential  | Reserved specifically for top navigation bars, persistent chat widgets, and global modal overlays.                                         |
| **`sticky`**       | **~0.5% - 1%**            | Modern Component Standard | Used selectively for table column headers in dashboards, sidebars, and scrolling section dividers.                                         |

***

### Silicon Valley Design Trends Driving These Numbers

#### 1. The Death of Floats and Rise of Flexbox/Grid

Years ago, engineers used `position: absolute` or `relative` hacks to build multi-column layouts. Silicon Valley engineering teams have aggressively migrated to **Flexbox** and **CSS Grid**. These native layout tools control alignment natively, meaning `position` values are now only used for true overlapping UI elements, keeping `static` dominance high. [link](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)

#### 2. Component-Driven Architecture (React & Vue)

Silicon Valley heavily pushes atomic component design (e.g., using Tailwind CSS or CSS Modules). Instead of relying on sprawling, deeply-nested absolute position files, engineers build isolated components. A typical dashboard layout component will mark its boundary wrapper as `position: relative` and use isolated `absolute` positioning only for inner markers or context flags. [link](https://www.joshwcomeau.com/email/2024-10-22-css-survey/)

#### 3. Modern Browser Support Strategy

Historically, engineering teams in Silicon Valley were slower to adopt `position: sticky` because older browsers lacked seamless interoperability. Now that modern evergreen browsers (Chrome, Safari, Firefox, Edge) are aligned, tech companies natively use `sticky` inside dashboard data grids and scroll-heavy analytics feeds, rendering legacy JavaScript-driven scroll listeners obsolete. [link](https://web.dev/blog/state-of-css-html-2024)

If you are trying to optimize your application architecture, let me know:

- Are you aiming to minimize **layout shifts (CLS)** in performance metrics?

- Are you trying to adapt your positions for a **responsive mobile layout**?

- [link](https://www.spur.org/publications/urbanist-article/2010-08-01/sharing-wealth)\
  Sharing the Wealth | SPUR\
  Aug 1, 2010 — San Jose's economy and approach to economic development have evolved in the context of Silicon Valley. As the world's leading inno...\
  www.spur.org

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)\
  position CSS property - MDN Web Docs - Mozilla\
  Jun 7, 2026 — Formal syntax. position = static | relative | absolute | sticky | fixed | = running( ) This syntax reflects the latest standard as...\
  MDN Web Docs

- [link](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)\
  Absolute, Relative, Fixed Positioning: How Do They Differ? | CSS-Tricks\
  Oct 14, 2008 — \*\*Fixed positioning\*\* \* Positioned relative to the viewport, or the browser window \* Stays in place when the page is scrolled \* Mi...\
  CSS-Tricks

Show all

## use cases of each

Here are the primary, real-world use cases for each CSS position value, modeled after common UI patterns used by major tech platforms:

### 1. `position: static;` (Standard Content)

Because this is the default behavior, it is used for the vast majority of regular, readable text and structured layouts.

- **Document Text**: Standard paragraphs, blog articles, and documentation text that should flow naturally down the page.
- **Flexbox/Grid Items**: Grid columns and Flexbox rows where alignment is already handled by parent container layouts.
- **Form Layouts**: Vertically stacked input fields, labels, and text areas in standard checkouts or sign-up forms.

### 2. `position: relative;` (Anchors & Minor Adjustments)

This value is most frequently used as a structural setup tool or for microscopic layout corrections.

- **Parent Anchors**: Acting as the reference boundary for any child element that uses `position: absolute`.
- **Micro-Animations**: Shifting an icon or button slightly upward (e.g., `top: -2px`) when a user hovers their mouse over it.
- **Stacking Order Context**: Creating a new layering context with `z-index` so an item stays on top of a nearby background graphic without moving its position.

### 3. `position: absolute;` (Overlays & Displaced Elements)

Absolute positioning is used whenever an item needs to sit directly on top of another element or break free from layout boundaries.

- **Notification Badges**: Placing a red "unread" count dot in the top-right corner of an e-commerce shopping cart or inbox icon.
- **UI Controls**: Putting a floating "X" close button in the corner of a pop-up window or modal box.
- **Context Menus**: Floating a dropdown select list or profile settings card directly beneath a clicked profile picture button.
- **Decorative Graphics**: Pinning a background abstract shape to a specific corner of a landing page section.

### 4. `position: fixed;` (Persistent Global Elements)

Fixed layout is strictly reserved for UI components that must remain on the screen at all times, completely ignoring page scroll.

- **Global Navigation Bars**: Keeping the main website header locked to the top of the browser screen while reading a long page.
- **Support Widgets**: Floating a persistent "Chat with Support" bubble in the bottom-right corner of the window.
- **Modal Overlays**: Creating a dark, semi-transparent background tint that covers the entire browser window when a popup displays.
- **Cookie Banners**: Pinning privacy or cookie policy alerts to the bottom of the viewport until accepted.

### 5. `position: sticky;` (Smart Scrolling Elements)

Sticky positioning is used for components that need to transition smoothly from scrolling along with the page to locking in place.

- **Table Headers**: Keeping data headers (like Name, Date, Amount) pinned to the top of a large dashboard data table as you scroll down the row list.
- **Divided List Indexes**: Sticky alphabet headers (A, B, C) in a contacts directory that swap out as you scroll to the next letter section.
- **Sticky Sidebars**: Allowing an article's sidebar ads or table of contents to follow along as you read down a long-form article.

***

To help apply these patterns to your project, let me know:

- Which of these **specific UI components** are you currently working on?
- Are you dealing with any **layering bugs** (like an element hiding behind another one)?

## example component names using each

Here is a list of production-ready component names grouped by the CSS position strategy they rely on. These follow modern naming conventions used in design systems like Tailwind UI, Radix UI, and Material Design.

### 1. `position: static` (The Layout Foundation)

These components form the backbone of the page, stacking naturally in the normal document flow.

- **`ArticleBody`** / **`Paragraph`**: Standard textual wrapper blocks for news or blog content.
- **`FormGroup`**: A standard vertical stack containing a `<label>`, `<input>`, and validation message.
- **`GridColumn`** / **`FlexRow`**: Structural layout boxes whose positioning is entirely managed by parent Flexbox or Grid properties.
- **`FooterLinkList`**: The standard columns of text links at the bottom of a webpage.

### 2. `position: relative` (The Anchor Contexts)

These components are explicitly given relative positioning to contain absolute child elements or slightly adjust hover interactions.

- **`DropdownMenuContainer`**: The wrapper around a button that forces its subsequent dropdown menu to stay anchored right below it.
- **`IconButton`**: A wrapper that lets you nudge an icon a few pixels or anchor a badge directly over it.
- **`ProductCard`**: The product image and details wrapper that serves as the boundary for an absolute positioning sale sticker.
- **`AvatarWrapper`**: The circular bounding box for a profile photo, serving as the anchor for an absolute online/offline status dot.

### 3. `position: absolute` (The Overlays & Badges)

These components break out of the document flow to sit perfectly layered on top of or relative to their parent container.

- **`NotificationBadge`**: The tiny red counter dot sitting in the top-right corner of an inbox or shopping cart icon.
- **`ModalCloseButton`**: The absolute-positioned "X" icon snapped to the upper-right corner of a pop-up modal box.
- **`TooltipContent`**: The small explanatory text bubble that floats directly above or below a hovered item.
- **`ComboBoxPopover`** / **`SelectDropdownList`**: The floating list of options that appears when clicking a dropdown selector.

### 4. `position: fixed` (The Screen-Locked Shells)

These global layout components are anchored strictly to the user's browser window screen and never move during a scroll.

- **`GlobalNavbar`** / **`StickyTopHeader`**: The main navigation row locked permanently at the top of the browser view viewport.
- **`ModalOverlay`** / **`LightboxScrim`**: The semi-transparent dark background layer that blocks out the rest of the screen when a modal opens.
- **`LiveChatWidget`**: The persistent round bubble sitting in the bottom-right corner of the screen for customer support.
- **`CookieBanner`** / **`ToasterNotification`**: Bottom-of-screen alert bars or slide-in notification toast messages.

### 5. `position: sticky` (The Scroll-Aware Guides)

These components track with the page until they reach a boundary threshold, at which point they lock into position.

- **`DataTableHeader`**: The row of column titles (`Name`, `Date`, `Amount`) that remains visible at the top of a dashboard table as you scroll through thousands of rows.
- **`TableOfContentsSidebar`**: An article navigation menu that stays vertically pinned to the side of the screen as you scroll down a long text file.
- **`AlphabeticalDivider`**: In a directory app (like Contacts), the "A", "B", "C" category bars that lock to the top one-by-one as you scroll down the list.
- **`ProductGalleryStickyWrapper`**: The left-side product image gallery on an e-commerce page that stays locked in place while the user scrolls down a long page of text descriptions on the right side.

If you are naming components in a project right now, let me know:

- What **UI framework** or library are you styling for (e.g., React components, Vue slots, CSS classes)?

- Are you setting up a **design system** style guide that needs standardized naming patterns?

- [link](https://www.uxpin.com/studio/blog/design-system-naming-conventions/)\
  Design System Naming Conventions – How to Set Them\
  Sep 24, 2024 — Why Are Naming Conventions Important in a Design System? By following these naming conventions, teams can work together more smoot...\
  \
  \
  UXPin

- [link](https://accesto.com/blog/angular-dynamic-forms-using-json/)\
  Angular Dynamic Forms using JSON\
  Jul 31, 2023 — Binding Form Controls to the Template and Displaying Them \[ formGroup ] \* ngFor = < label > . label } / label >\
  \
  \
  Accesto

- [link](https://js.devexpress.com/Angular/Documentation/ApiReference/UI%5FComponents/dxForm/Configuration/)\
  Angular Form Properties | Angular Documentation v25.2\
  validationGroup Gives a name to the internal validation group. In some cases, the Form editors should be validated by the Button U...\
  \
  \
  DevExtreme


# (d) how to separate a div to top and bottom, with a draggable line in the middle

July 23, 2026

To create a vertically split `div` with a draggable divider, you need a container, two child panes, and a divider element. You then use JavaScript to track the mouse movement and update the pane heights.

Here is a complete, working example using standard HTML, CSS, and vanilla JavaScript.

### HTML Structure

Create a main container with a top pane, a resizer bar, and a bottom pane.

html

```
<div class="container">
  <div class="pane top-pane">Top Content</div>
  <div class="resizer" id="dragMe"></div>
  <div class="pane bottom-pane">Bottom Content</div>
</div>
```

Use code with caution.

### CSS Styling

Use Flexbox on the container to stack the items vertically. Ensure the resizer has a distinct mouse cursor.

css

```
body, html {
  margin: 0;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
}

.pane {
  padding: 20px;
  overflow: auto;
}

.top-pane {
  background-color: #f1f1f1;
  height: 50%; /* Initial height */
}

.bottom-pane {
  background-color: #e2e2e2;
  flex-grow: 1; /* Fills the remaining space */
}

.resizer {
  background-color: #cbd5e1;
  cursor: row-resize;
  height: 8px;
  width: 100%;
  transition: background 0.2s;
}

/* Optional visual effect on hover */
.resizer:hover {
  background-color: #94a3b8;
}
```

Use code with caution.

### JavaScript Functionality

This script tracks the vertical mouse movements when the user clicks and holds the resizer bar, recalculating the top pane's height dynamically.

javascript

```
document.addEventListener('DOMContentLoaded', () => {
  const resizer = document.getElementById('dragMe');
  const topPane = resizer.previousElementSibling;

  let y = 0;
  let topHeight = 0;

  // Handle the mousedown event
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    y = e.clientY;

    // Get the current height of the top pane
    topHeight = topPane.getBoundingClientRect().height;

    // Attach listeners to document for smooth dragging
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Optional: Prevent text selection while dragging
    document.body.style.userSelect = 'none';
  };

  // Handle the mousemove event
  const mouseMoveHandler = function (e) {
    // Calculate how far the mouse moved
    const dy = e.clientY - y;

    // Update the height of the top pane
    const containerHeight = resizer.parentNode.getBoundingClientRect().height;
    const newTopHeight = ((topHeight + dy) / containerHeight) * 100;

    // Add boundaries (e.g., minimum 10% and maximum 90%)
    if (newTopHeight > 10 && newTopHeight < 90) {
      topPane.style.height = `${newTopHeight}%`;
    }
  };

  // Handle the mouseup event
  const mouseUpHandler = function () {
    // Remove listeners when dragging stops
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    // Restore text selection
    document.body.style.removeProperty('user-select');
  };

  // Attach the initial mousedown event
  resizer.addEventListener('mousedown', mouseDownHandler);
});
```

Use code with caution.

Would you like help adapting this code for a **frontend framework** like React or Vue, or would you like to add **touch support** for mobile devices?

- [link](https://lvgl.io/docs/open/examples/layouts)\
  Layouts\
  Vertical split view with a draggable divider Two stacked panes separated by a divider you can drag to resize them. Same idea as th...\
  \
  \
  LVGL
- [link](https://www.newmediacampaigns.com/blog/nicer-navigation-with-css-transitions-part-2)\
  Nicer Navigation with CSS Transitions - Part 2\
  This means that you either need to have a fixed height for all of your drop downs or you have to think of something else. Yes, I k...\
  \
  \
  New Media Campaigns
- [link](https://medium.com/@zenab.awada/creating-a-draggable-carousel-using-javascript-a84337110808)\
  Creating a Draggable Carousel using JavaScript | by Zena A\
  To create the draggable carousel we will need some HTML, CSS and Vanilla JavaScript code. The one we are creating occupies the ent...\
  \
  \
  Medium

Show all

# minimum css to split a div to left and right

The absolute minimum CSS to split a `div` into a left and right section is to use **CSS Flexbox**.

### The HTML

html

```
<div class="container">
  <div>Left Side</div>
  <div>Right Side</div>
</div>
```

Use code with caution.

### The Minimum CSS

css

```
.container {
  display: flex;
}
```

Use code with caution.

### Why this works

By default, `display: flex` turns the container into a flex context. Its immediate child elements automatically sit side-by-side in a row and split the available width equally based on their content.

### Useful Optional Additions

If you want to control the alignment or spacing, use these single-line additions:

- **Distribute evenly**: Add `justify-content: space-between;` to push them to the far edges.
- **Equal 50/50 split**: Add `.container > div { flex: 1; }` to make both sides exactly the same width.

To help refine this layout, would you like to **adjust the spacing** between the columns, make it **responsive for mobile screens**, or add a **vertical divider line**?

- [link](https://stackoverflow.com/questions/36566730/css-left-and-right-div-with-100-width)\
  html - CSS - Left and Right DIV with 100% width\
  Apr 12, 2016 — CSS - Left and Right DIV with 100% width 1 You should definitely try Flex. Would be really nice if you create a jsfiddle. Look at ...\
  \
  \
  Stack Overflow
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/order)\
  order CSS property - CSS | MDN\
  Apr 20, 2026 — CSS We style the main area using flexible box layout module features; by setting display to flex , the element becomes a flex cont...\
  \
  MDN Web Docs
- [link](https://www.youtube.com/watch?v=O3ipx3ZNY7A)\
  How to Make Flexbox Vertical - Beginner CSS Flexbox Tutorial\
  Nov 22, 2021 — In this tutorial, we'll look at how to make vertical layouts with CSS Flexbox. By default, the parent flex container has a "flex-d...\
  \
  \
  YouTube

Show all

## make the split draggable

To make a split layout draggable, CSS alone is not enough. You need a tiny bit of JavaScript to handle the mouse movements and update the widths.

### The HTML

Add a dedicated splitter bar element between your left and right panels.

html

```
<div class="container">
  <div class="left">Left Side</div>
  <div class="splitter"></div>
  <div class="right">Right Side</div>
</div>
```

Use code with caution.

### The CSS

Set the container to flex layout. Give the splitter a width and a resize cursor so users know they can interact with it.

css

```
.container {
  display: flex;
  width: 100%;
  height: 400px; /* Adjust height as needed */
}

.left, .right {
  padding: 10px;
  overflow: auto;
}

.left {
  width: 50%; /* Initial starting width */
}

.right {
  flex: 1; /* Automatically takes up the remaining space */
}

.splitter {
  width: 8px;
  background: #ccc;
  cursor: col-resize;
}
```

Use code with caution.

### The JavaScript

This script tracks the mouse when the user clicks the splitter, calculates the new width based on the mouse position, and updates the left panel.

javascript

```
const left = document.querySelector('.left');
const splitter = document.querySelector('.splitter');

splitter.addEventListener('mousedown', (e) => {
  e.preventDefault();

  // Track mouse movement and release
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  // Get the bounding box of the entire container
  const containerRect = left.parentElement.getBoundingClientRect();
  // Calculate new width relative to the container's left edge
  const newWidth = e.clientX - containerRect.left;

  // Set width in pixels
  left.style.width = `${newWidth}px`;
}

function stopResize() {
  // Remove listeners when mouse is released
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}
```

Use code with caution.

To help you polish this interactive layout, let me know if you want to **add minimum and maximum width limits** so the panels don't collapse completely, **enable touch support for mobile screens**, or **style the splitter bar** to look more modern.

- [link](https://ask.libreoffice.org/t/how-to-do-a-horizontal-screen-split/36828)\
  How to do a horizontal screen split - English\
  Feb 10, 2019 — At the right end of the horizontal scrollbar you find a tiny element shown as a short vertical line. You can drag it with the mous...\
  \
  Ask LibreOffice
- [link](https://liascript.github.io/blog/changing-layout-flexbox-is-your-friend/)\
  Changing Layout - FlexBox is your Friend\
  Aug 16, 2024 — Creating a FlexBox Layout Step 1: Setting Up the Flex Container Step 2: Defining the Flex Items Step 3: Making the Layout Responsi...\
  \
  \
  LiaScript
- [link](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/splitter-control-overview-windows-forms)\
  Splitter Control Overview - Windows Forms\
  May 6, 2025 — Working with the Splitter Control When the user points the mouse pointer at the undocked edge of a control that can be resized by ...\
  \
  Microsoft Learn

Show all

## no splitter, draggable when near

To make the panels draggable by hovering near the invisible boundary instead of a visible splitter, you can use an absolute-positioned invisible hit-box over the center line.

### The HTML

Keep the HTML perfectly clean with just the two panels.

html

```
<div class="container">
  <div class="left">Left Side</div>
  <div class="right">Right Side</div>
</div>
```

Use code with caution.

### The CSS

Set the container position to `relative` so we can position an invisible hit-box directly on top of the boundary.

css

```
.container {
  display: flex;
  position: relative;
  width: 100%;
  height: 400px;
}

.left {
  width: 50%; /* Initial split */
  background: #f0f0f0;
}

.right {
  flex: 1;
  background: #e0e0e0;
}

/* The invisible zone that catches mouse hovers and drags */
.drag-zone {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px; /* Width of the hover detection area */
  transform: translateX(-50%); /* Centers the 20px zone on the boundary */
  cursor: col-resize;
  z-index: 10;
}
```

Use code with caution.

### The JavaScript

This script injects the invisible `.drag-zone`, tracks its position dynamically as the panels resize, and handles the drag logic.

javascript

```
const container = document.querySelector('.container');
const left = document.querySelector('.left');

// 1. Create and inject the invisible drag zone
const dragZone = document.createElement('div');
dragZone.classList.add('drag-zone');
container.appendChild(dragZone);

// 2. Keep the invisible zone locked to the dividing line
function updateZonePosition() {
  dragZone.style.left = `${left.offsetWidth}px`;
}
updateZonePosition(); // Initial placement

// 3. Drag Logic
dragZone.addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  const containerRect = container.getBoundingClientRect();
  let newWidth = e.clientX - containerRect.left;

  // Optional: Prevent panels from collapsing completely
  if (newWidth < 50) newWidth = 50;
  if (newWidth > containerRect.width - 50) newWidth = containerRect.width - 50;

  left.style.width = `${newWidth}px`;
  updateZonePosition(); // Move the hit-box with the boundary
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}
```

Use code with caution.

Would you like to **add a subtle hover effect** (like a changing background color) so users can tell they found the sweet spot, or do you want to **make the hover area wider or narrower**?

## use flex props instead of width

To achieve this using flex properties instead of changing the `width` property, you can manipulate the `flex-basis` of the left panel. This leaves the width calculation entirely up to the browser's flex engine.

### The HTML

html

```
<div class="container">
  <div class="left">Left Side</div>
  <div class="right">Right Side</div>
</div>
```

Use code with caution.

### The CSS

Initialize both panels using `flex` properties. The left panel starts with a `flex-basis` of `50%`, while the right panel expands to fill the rest.

css

```
.container {
  display: flex;
  position: relative;
  width: 100%;
  height: 400px;
}

.left {
  flex: 0 0 50%; /* Grow: 0, Shrink: 0, Basis: 50% */
  background: #f0f0f0;
}

.right {
  flex: 1 1 0%;  /* Grow: 1, Shrink: 1, Basis: 0% */
  background: #e0e0e0;
}

.drag-zone {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20px;
  transform: translateX(-50%);
  cursor: col-resize;
  z-index: 10;
}
```

Use code with caution.

### The JavaScript

Instead of updating `left.style.width`, update `left.style.flexBasis`.

javascript

```
const container = document.querySelector('.container');
const left = document.querySelector('.left');

const dragZone = document.createElement('div');
dragZone.classList.add('drag-zone');
container.appendChild(dragZone);

function updateZonePosition() {
  dragZone.style.left = `${left.getBoundingClientRect().width}px`;
}
updateZonePosition();

dragZone.addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  const containerRect = container.getBoundingClientRect();
  let newPixels = e.clientX - containerRect.left;

  // Enforce boundaries
  if (newPixels < 50) newPixels = 50;
  if (newPixels > containerRect.width - 50) newPixels = containerRect.width - 50;

  // Convert pixels to a percentage value for flex-basis
  const percentage = (newPixels / containerRect.width) * 100;

  left.style.flexBasis = `${percentage}%`;
  updateZonePosition();
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}
```

Use code with caution.

Would you like to **convert this into a reusable component** (like a React or Vue component), or should we **make the code window-resize friendly** so the split percentage stays accurate if the browser window changes sizes?

- [link](https://www.technologyuk.net/website-development/introduction-to-css/css-flexbox-layout.shtml)\
  Introduction to CSS - CSS Flexbox Layout\
  May 21, 2019 — The flex-shrink property can be useful if you want one of the columns in your page to have a minimum width beyond which it will no...\
  \
  \
  TechnologyUK
- [link](https://github.com/ohansemmanuel/Understanding-Flexbox/blob/master/03.%20flex%20item%20properties/flex%20items.md)\
  Understanding-Flexbox/03. flex item properties/flex items.md at master · ohansemmanuel/Understanding-Flexbox\
  2\. Flex: 0 0 auto This is same as flex: none . Using the same framework i established earlier, the width is computed automatically...\
  \
  GitHub
- [link](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/)\
  Flexbox - The Ultimate CSS Flex Cheatsheet (with animated diagrams!)\
  Oct 11, 2019 — CSS Display Flex display: flex is tells your browser, "I wanna use flexbox ( CSS flexbox layout ) with this container, please." To...\
  \
  \
  freeCodeCamp

# css width height prop

The CSS **`width`** and **`height`** properties set the dimensions of an element's content area. By default, they exclude padding, borders, and margins. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/width)

### Basic Syntax

css

```
.box {
  width: 300px;
  height: 200px;
}
```

Use code with caution.

### Acceptable Values

- **`auto`**: The browser calculates the size automatically (default value).
- **Length**: Specific sizes using units like pixels (`px`), standard font sizes (`em`, `rem`), or centimeters (`cm`).
- **Percentage (`%`)**: Sizes the element relative to its parent container's dimensions.
- **Viewport Units**: Sized relative to the browser window, such as `vw` (viewport width) or `vh` (viewport height).
- **Keywords**: Advanced content-based scaling choices like `min-content`, `max-content`, or `fit-content`. [link](https://www.geeksforgeeks.org/css/css-height-and-width/)

### The Box Sizing Trap

By default (`box-sizing: content-box`), adding padding or borders makes your element physically larger than the assigned width/height values. To force the assigned `width` and `height` to include borders and padding, apply **`box-sizing: border-box`**. [link](https://www.youtube.com/watch?v=QctF-i4-GuM\&t=35)

css

```
/* Best practice for predictable layout sizes */
* {
  box-sizing: border-box;
}
```

Use code with caution.

### Boundary Constraints

You can prevent elements from scaling too large or small using constraint properties: [link](https://www.youtube.com/watch?v=Be7tW-isqPc)

- `min-width` / `max-width`
- `min-height` / `max-height` [link](https://www.geeksforgeeks.org/css/css-height-and-width/)

Would you like help choosing **responsive units** or fixing an issue with **elements overlapping**?

- [link](http://www.w3schools.com/css/css%5Fdimension.asp)\
  CSS Height, Width and Max-width - W3Schools\
  CSS Height, Width and Max-width. The CSS height and width properties are used to set the height and width of an element. The CSS m...\
  W3Schools
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/width)\
  width CSS property - MDN Web Docs - Mozilla\
  Apr 22, 2026 — Baseline Widely available \* \* Some parts of this feature may have varying levels of support. The width CSS property sets an elemen...\
  MDN Web Docs
- [link](https://www.geeksforgeeks.org/css/css-height-and-width/)\
  CSS Height and Width - GeeksforGeeks\
  May 11, 2026 — CSS Height and Width \* These properties define the size of an element, controlling the space it occupies on a webpage for consiste...\
  GeeksforGeeks

Show all

## let it take all rest space

To make an element take up all the remaining space, use **CSS Flexbox** or **CSS Grid**.

### Method 1: Flexbox (Recommended)

Apply `display: flex` to the parent container, and `flex-grow: 1` to the child element that should expand.

html

```
<div class="parent">
  <div class="fixed">Fixed Size</div>
  <div class="expand">Takes All Remaining Space</div>
</div>
```

Use code with caution.

css

```
.parent {
  display: flex;
  flex-direction: row; /* Use 'column' for vertical layouts */
  width: 100%;
  height: 400px;
}

.fixed {
  width: 200px; /* This stays fixed */
}

.expand {
  flex-grow: 1; /* Fills all remaining space */
}
```

Use code with caution.

### Method 2: CSS Grid

Define the parent grid tracks using `1fr` (one fractional unit) for the flexible section.

css

```
.parent {
  display: grid;
  grid-template-columns: 200px 1fr; /* First column fixed, second fills rest */
  width: 100%;
}
```

Use code with caution.

### Method 3: Calc Function

If you know the exact size of the other elements, use mathematical calculation.

css

```
.expand {
  width: calc(100% - 200px); /* Total width minus the fixed element width */
}
```

Use code with caution.

Would you like to build a **vertical column layout** or a **horizontal row layout**?

# all css flex props

The complete set of CSS Flexbox properties is strictly divided into **properties applied to the parent container** and **properties applied to the child items**. [link](https://www.geeksforgeeks.org/css/css-flexbox-and-its-properties/)

To use any of these, you must first initialize the layout by applying `display: flex;` or `display: inline-flex;` on the parent container. [link](https://www.w3schools.com/css/css3%5Fflexbox%5Fcontainer.asp)

***

### Parent Container Properties

These properties govern the alignment, direction, and wrapping of the entire flex context. [link](https://www.w3schools.com/css/css3%5Fflexbox%5Fcontainer.asp)

- `flex-direction` — Establishes the main-axis direction for layout. Values: `row` (default), `row-reverse`, `column`, `column-reverse`.
- `flex-wrap` — Controls whether items wrap onto multiple lines. Values: `nowrap` (default), `wrap`, `wrap-reverse`.
- `flex-flow` — Shorthand for combining `flex-direction` and `flex-wrap`. Syntax: `<flex-direction> || <flex-wrap>`.
- `justify-content` — Aligns items along the horizontal main-axis. Values: `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
- `align-items` — Aligns items along the vertical cross-axis for the current line. Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.
- `align-content` — Aligns a multi-line flex container's lines when there is extra cross-axis space. Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
- `gap` (`row-gap`, `column-gap`) — Defines the explicit gutter spacing directly between flex items without using margins. [link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

***

### Child Item Properties

These properties dictate how individual elements behave dynamically inside their flex space. [link](https://www.geeksforgeeks.org/css/css-flexbox-and-its-properties/)

- `flex-grow` — Defines the item's ability to grow relative to siblings if space allows. Accepts unitless numbers (Default is `0`).
- `flex-shrink` — Defines the item's ability to shrink relative to siblings if space is scarce. Accepts unitless numbers (Default is `1`).
- `flex-basis` — Establishes the initial default size of the element before space is distributed. Values: `auto` (default), length units (e.g., `px`, `%`, `em`), or sizing keywords.
- `flex` — Shorthand combining `flex-grow`, `flex-shrink`, and `flex-basis` into one line. (Default is `0 1 auto`).
- `align-self` — Overrides the parent's `align-items` value for this specific item. Values: `auto` (default), `stretch`, `flex-start`, `flex-end`, `center`, `baseline`.
- `order` — Controls the visual sequence of the element without changing HTML structure. Accepts integers (Default is `0`). [link](https://www.w3schools.com/cssref/css3%5Fpr%5Fflex.php)

For deep reference specifications, see the official MDN Web Docs Flexbox Guide or check layout structures visually via the interactive [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

If you are trying to build a layout, let me know:

- Are you aligning items **horizontally** or **vertically**?
- Should the items **wrap** if they run out of room?
- Do you want items to remain a **fixed size** or **stretch** to fill the space?

I can provide the exact code block you need!

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex)\
  flex CSS property - MDN Web Docs\
  Jul 31, 2026 — The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.\
  MDN Web Docs
- [link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)\
  A Complete CSS Flexbox Layout Guide\
  May 28, 2026 — row (default): left to right in ltr ; right to left in rtl. row-reverse : right to left in ltr ; left to right in rtl. column : sa...\
  CSS-Tricks
- [link](https://medium.com/free-code-camp/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af)\
  Understanding Flexbox: Everything you need to know - Medium\
  Jan 8, 2017 — 1. Flex-direction. The Flex-direction property controls the direction in which the flex-items are laid along the main axis. It may...\
  Medium·Ohans Emmanuel

Show all

# all css grid props

**CSS Grid properties are split into two categories**: <mark>properties that apply to the<span> </span><strong>parent element (Grid Container)</strong><span> </span>and properties that apply to the<span> </span><strong>child elements (Grid Items)</strong></mark>. [link](https://www.youtube.com/watch?v=qhT9vkO-vTI)

***

### Grid Container Properties (Parent)

These properties control the overall structure, alignment, and sizing of the grid layout. [link](https://www.youtube.com/watch?v=qhT9vkO-vTI)

#### 1. Track Sizing & Structure

- `display`: Defines the element as a grid container. Use `grid` or `inline-grid`.
- `grid-template-columns`: Sets the number and width of explicit columns.
- `grid-template-rows`: Sets the number and height of explicit rows.
- `grid-template-areas`: Names grid areas to position elements using layout maps.
- `grid-template`: A shorthand combining `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`. [link](https://www.w3schools.com/css/css%5Fgrid.asp)

#### 2. Implicit Grid Control

- `grid-auto-columns`: Sets the default width for columns created automatically outside the explicit grid.
- `grid-auto-rows`: Sets the default height for rows created automatically outside the explicit grid.
- `grid-auto-flow`: Controls how the auto-placement algorithm works (`row`, `column`, or `dense`).
- `grid`: A master shorthand property for all structural properties listed above. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid)

#### 3. Gaps (Gutters)

- `row-gap`: Sets the size of the gap between rows.
- `column-gap`: Sets the size of the gap between columns.
- `gap`: A shorthand combining `row-gap` and `column-gap` in a single declaration. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid)

#### 4. Alignment & Distribution

- `justify-items`: Aligns grid items along the inline (horizontal) axis inside their grid cell.
- `align-items`: Aligns grid items along the block (vertical) axis inside their grid cell.
- `place-items`: A shorthand combining `align-items` and `justify-items`.
- `justify-content`: Distributes extra space along the inline axis if the total grid size is smaller than the container.
- `align-content`: Distributes extra space along the block axis if the total grid size is smaller than the container.
- `place-content`: A shorthand combining `align-content` and `justify-content`. [link](https://grid.malven.co/)

***

### Grid Item Properties (Children)

These properties control the placement, spanning, and individual alignment of a single child element inside the grid. [link](https://www.youtube.com/watch?v=qhT9vkO-vTI)

#### 1. Line Placement & Spanning

- `grid-column-start`: Specifies the vertical line where the item begins.
- `grid-column-end`: Specifies the vertical line where the item ends or how many tracks it spans.
- `grid-row-start`: Specifies the horizontal line where the item begins.
- `grid-row-end`: Specifies the horizontal line where the item ends or how many tracks it spans.
- `grid-column`: Shorthand for `grid-column-start` / `grid-column-end`.
- `grid-row`: Shorthand for `grid-row-start` / `grid-row-end`.
- `grid-area`: Shorthand specifying row-start, column-start, row-end, and column-end in one line, or references a named area from `grid-template-areas`. [link](https://www.w3schools.com/css/css%5Fgrid.asp)

#### 2. Individual Alignment

- `justify-self`: Overrides `justify-items` to align a single grid item along the inline axis.
- `align-self`: Overrides `align-items` to align a single grid item along the block axis.
- `place-self`: A shorthand combining `align-self` and `justify-self`. [link](https://stackoverflow.com/questions/42239778/items-that-span-all-columns-rows-using-css-grid-layout)

***

### Helpful Layout Values

- `fr`: The fractional unit representing a portion of the flexible remaining space in the container.
- `minmax(min, max)`: Defines a size range greater than or equal to min and less than or equal to max.
- `repeat(count, track)`: Simplifies track lists by repeating identical sizes.
- `subgrid`: Matches the item's internal rows or columns directly to the parent grid structure. [link](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)

If you are currently building a layout, would you like a **code example** for a specific design pattern, or do you need help calculating **responsive columns** using `auto-fit` or `auto-fill`?

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid)\
  grid CSS property - MDN Web Docs - Mozilla\
  Apr 20, 2026 — The grid CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.\
  MDN Web Docs
- [link](https://www.w3schools.com/css/css%5Fgrid.asp)\
  CSS Grid Layout - W3Schools\
  All CSS Grid Properties ; grid-column-start, grid-row-end, and grid-column-end properties. grid-auto-columns, Specifies a default ...\
  W3Schools
- [link](https://www.youtube.com/watch?v=JYfiaSKeYhE\&t=26)\
  CSS Grid Course - The Only Grid Tutorial You'll Ever Need!\
  Oct 2, 2025 — it always comes down to CSS grid and in this video. I will explain all of it starting from the absolute basics all the way to adva...\
  2m\
  YouTube·Coding2GO

Show all



