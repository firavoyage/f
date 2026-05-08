<!-- 

decision:

(reset if it's a web app or a customized blog. for legacy internet style, dont reset.)

i would like to use snake case. but let's just use pascal case as i use react. (not willing to reassign)

PrimaryButton disabled hidden

PrimaryButton_children disabled hidden

rule:

- if it's already dry (no reuse), dont add abstraction. (e.g. no color-link if you already have color-blue, just use it in .link)
- you can go w the tailwind way. but it feels good being sematic
- class name is component name

btw, i could fight react.

but it can be really confusing if you have both button (if you dont wanna write my_button) and button in html.

 -->

# .

````md
[Rob Zolkos](https://www.zolkos.com/)

December 3, 2025

# Vanilla CSS is all you need

Back in April 2024, [Jason Zimdars](https://x.com/jasonzimdars) from [37signals](https://37signals.com/) published a post about [modern CSS patterns in Campfire](https://dev.37signals.com/modern-css-patterns-and-techniques-in-campfire/). He explained how their team builds sophisticated web applications using nothing but vanilla CSS. No Sass. No PostCSS. No build tools.

The post stuck with me. Over the past year and a half, 37signals has released two more products (Writebook and Fizzy) built on the same nobuild philosophy. I wanted to know if these patterns held up. Had they evolved?

I cracked open the source code for Campfire, Writebook, and Fizzy and traced the evolution of their CSS architecture. What started as curiosity became genuine surprise. These are not just consistent patterns. They are **improving** patterns. Each release builds on the last, adopting progressively more modern CSS features while maintaining the same nobuild philosophy.

These are not hobby projects. [Campfire](https://github.com/basecamp/once-campfire) is a real-time chat application. [Writebook](https://once.com/writebook) is a publishing platform. [Fizzy](https://fizzy.do/) is a full-featured project management tool with kanban boards, drag-and-drop, and complex state management. Combined, they represent nearly **14,000 lines of CSS** across 105 files.

Not a single line touches a build tool.

***

## The Tailwind Question

Let me be clear: **there is nothing wrong with [Tailwind](https://tailwindcss.com/)**. It is a fantastic tool that helps developers ship products faster. The utility-first approach is pragmatic, especially for teams that struggle with CSS architecture decisions.

But somewhere along the way, utility-first became the only answer. CSS has evolved dramatically. The language that once required preprocessors for variables and nesting now has:

- Native [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using%5FCSS%5Fcustom%5Fproperties) (variables)
- Native [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS%5Fnesting)
- [Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS%5Fcontainer%5Fqueries)
- The [`:has()` selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) (finally, a parent selector)
- [CSS Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) for managing specificity
- [`color-mix()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color%5Fvalue/color-mix) for dynamic color manipulation
- [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), `min()`, `max()` for responsive sizing without media queries

37signals looked at this landscape and made a bet: modern CSS is powerful enough. No build step required.

Three products later, that bet is paying off.

***

## The Architecture: Embarrassingly Simple

Open any of these three codebases and you find the same flat structure:

```
app/assets/stylesheets/
├── _reset.css
├── base.css
├── colors.css
├── utilities.css
├── buttons.css
├── inputs.css
├── [component].css
└── ...
```

That is it. No subdirectories. No partials. No complex import trees. One file per concept, named exactly what it does.

Zero configuration. Zero build time. Zero waiting.

I would love to see something like this ship with new Rails applications. A simple starting structure with `_reset.css`, `base.css`, `colors.css`, and `utilities.css` already in place. I suspect many developers reach for Tailwind not because they prefer utility classes, but because vanilla CSS offers no starting point. No buckets. No conventions. Maybe CSS needs its own omakase.

***

## The Color System: Consistent Foundation, Evolving Capabilities

Jason’s original post explained [OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color%5Fvalue/oklch) well. It is the perceptually uniform color space all three apps use. The short version: unlike RGB or HSL, OKLCH’s lightness value actually corresponds to perceived brightness. A 50% lightness blue looks as bright as a 50% lightness yellow.

What is worth noting is how this foundation remains **identical** across all three apps:

```
:root {
  /* Raw LCH values: Lightness, Chroma, Hue */
  --lch-blue: 54% 0.15 255;
  --lch-red: 51% 0.2 31;
  --lch-green: 65% 0.23 142;

  /* Semantic colors built on primitives */
  --color-link: oklch(var(--lch-blue));
  --color-negative: oklch(var(--lch-red));
  --color-positive: oklch(var(--lch-green));
}
```

Dark mode becomes trivial:

```
@media (prefers-color-scheme: dark) {
  :root {
    --lch-blue: 72% 0.16 248;   /* Lighter, slightly desaturated */
    --lch-red: 74% 0.18 29;
    --lch-green: 75% 0.20 145;
  }
}
```

Every color that references these primitives automatically updates. No duplication. No separate dark theme file. One media query, and the entire application transforms.

Fizzy takes this further with `color-mix()`:

```
.card {
  --card-color: oklch(var(--lch-blue-dark));

  /* Derive an entire color palette from one variable */
  --card-bg: color-mix(in srgb, var(--card-color) 4%, var(--color-canvas));
  --card-text: color-mix(in srgb, var(--card-color) 30%, var(--color-ink));
  --card-border: color-mix(in srgb, var(--card-color) 33%, transparent);
}
```

One color in, four harmonious colors out. Change the card color via JavaScript (`element.style.setProperty('--card-color', '...')`), and the entire card theme updates automatically. No class swapping. No style recalculation. Just CSS doing what CSS does best.

***

## The Spacing System: Characters, Not Pixels

Here is a pattern I did not expect: all three applications use `ch` units for horizontal spacing.

```
:root {
  --inline-space: 1ch;      /* Horizontal: one character width */
  --block-space: 1rem;      /* Vertical: one root em */
}

.component {
  padding-inline: var(--inline-space);
  margin-block: var(--block-space);
}
```

Why characters? Because spacing should relate to content. A `1ch` gap between words feels natural because it is literally the width of a character. As font size scales, spacing scales proportionally.

This also makes their responsive breakpoints unexpectedly elegant:

```
@media (min-width: 100ch) {
  /* Desktop: content is wide enough for sidebar */
}
```

Instead of asking “is this a tablet?”, they are asking “is there room for 100 characters of content?” It is semantic. It is content-driven. It works.

***

## Utility Classes: Yes, They Still Exist

Let me address the elephant in the room. These applications absolutely use utility classes:

```
/* From utilities.css */
.flex { display: flex; }
.gap { gap: var(--inline-space); }
.pad { padding: var(--block-space) var(--inline-space); }
.txt-large { font-size: var(--text-large); }
.hide { display: none; }
```

The difference? These utilities are **additive**, not foundational. The core styling lives in semantic component classes. Utilities handle the exceptions: the one-off layout adjustment, the conditional visibility toggle.

Compare to a typical Tailwind component:

```
<!-- Tailwind approach -->
<button class="inline-flex items-center gap-2 px-4 py-2 rounded-full
               border border-gray-300 bg-white text-gray-900
               hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
  Save
</button>
```

And the 37signals equivalent:

```
<!-- Semantic approach -->
<button class="btn">Save</button>
```

<!---->

```
.btn {
  --btn-padding: 0.5em 1.1em;
  --btn-border-radius: 2em;

  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: var(--btn-padding);
  border-radius: var(--btn-border-radius);
  border: 1px solid var(--color-border);
  background: var(--btn-background, var(--color-canvas));
  color: var(--btn-color, var(--color-ink));
  transition: filter 100ms ease;
}

.btn:hover {
  filter: brightness(0.95);
}

.btn--negative {
  --btn-background: var(--color-negative);
  --btn-color: white;
}
```

Yes, it is more CSS. But consider what you gain:

1. **HTML stays readable.** `class="btn btn--negative"` tells you what something is, not how it looks.
2. **Changes cascade.** Update `--btn-padding` once, every button updates.
3. **Variants compose.** Add `.btn--circle` without redefining every property.
4. **Media queries live with components.** Dark mode, hover states, and responsive behavior are co-located with the component they affect.

***

## The :has() Revolution

If there is one CSS feature that changes everything, it is `:has()`. For decades, you needed JavaScript to style parents based on children. No more.

Writebook uses it for a sidebar toggle with no JavaScript:

```
/* When the hidden checkbox is checked, show the sidebar */
:has(#sidebar-toggle:checked) #sidebar {
  margin-inline-start: 0;
}
```

Fizzy uses it for kanban column layouts:

```
.card-columns {
  grid-template-columns: 1fr var(--column-width) 1fr;
}

/* When any column is expanded, adjust the grid */
.card-columns:has(.cards:not(.is-collapsed)) {
  grid-template-columns: auto var(--column-width) auto;
}
```

Campfire uses it for intelligent button styling:

```
/* Circle buttons when containing only icon + screen reader text */
.btn:where(:has(.for-screen-reader):has(img)) {
  --btn-border-radius: 50%;
  aspect-ratio: 1;
}

/* Highlight when internal checkbox is checked */
.btn:has(input:checked) {
  --btn-background: var(--color-ink);
  --btn-color: var(--color-ink-reversed);
}
```

This is CSS doing what you used to need JavaScript for. State management. Conditional rendering. Parent selection. All declarative. All in stylesheets.

***

## Progression

What fascinated me most was watching the architecture evolve across releases.

**Campfire** (first release) established the foundation:

- OKLCH colors
- Custom properties for everything
- Character-based spacing
- Flat file organization
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View%5FTransitions%5FAPI) for smooth page changes

**Writebook** (second release) added modern capabilities:

- Container queries for component-level responsiveness
- [`@starting-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) for entrance animations

**Fizzy** (third release) went all-in on modern CSS:

- CSS Layers (`@layer`) for managing specificity
- `color-mix()` for dynamic color derivation
- Complex `:has()` chains replacing JavaScript state

You can see a team learning, experimenting, and shipping progressively more sophisticated CSS with each product. By Fizzy, they are using features many developers do not even know exist.

```
/* Fizzy's layer architecture */
@layer reset, base, components, modules, utilities;

@layer components {
  .btn { /* Always lower specificity than utilities */ }
}

@layer utilities {
  .hide { /* Always wins over components */ }
}
```

CSS Layers solve the specificity wars that have plagued CSS since the beginning. It does not matter what order your files load. It does not matter how many classes you chain. Layers determine the winner, period.

***

## The Loading Spinner

One technique appears in all three applications that deserves special attention. Their loading spinners use no images, no SVGs, no JavaScript. Just CSS masks.

Here is the actual implementation from Fizzy’s `spinners.css`:

```
@layer components {
  .spinner {
    position: relative;

    &::before {
      --mask: no-repeat radial-gradient(#000 68%, #0000 71%);
      --dot-size: 1.25em;

      -webkit-mask: var(--mask), var(--mask), var(--mask);
      -webkit-mask-size: 28% 45%;
      animation: submitting 1.3s infinite linear;
      aspect-ratio: 8/5;
      background: currentColor;
      content: "";
      inline-size: var(--dot-size);
      inset: 50% 0.25em;
      margin-block: calc((var(--dot-size) / 3) * -1);
      margin-inline: calc((var(--dot-size) / 2) * -1);
      position: absolute;
    }
  }
}
```

The keyframes live in a separate `animation.css` file:

```
@keyframes submitting {
  0%    { -webkit-mask-position: 0% 0%,   50% 0%,   100% 0% }
  12.5% { -webkit-mask-position: 0% 50%,  50% 0%,   100% 0% }
  25%   { -webkit-mask-position: 0% 100%, 50% 50%,  100% 0% }
  37.5% { -webkit-mask-position: 0% 100%, 50% 100%, 100% 50% }
  50%   { -webkit-mask-position: 0% 100%, 50% 100%, 100% 100% }
  62.5% { -webkit-mask-position: 0% 50%,  50% 100%, 100% 100% }
  75%   { -webkit-mask-position: 0% 0%,   50% 50%,  100% 100% }
  87.5% { -webkit-mask-position: 0% 0%,   50% 0%,   100% 50% }
  100%  { -webkit-mask-position: 0% 0%,   50% 0%,   100% 0% }
}
```

Three dots, bouncing in sequence:

The `background: currentColor` means it automatically inherits the text color. Works in any context, any theme, any color scheme. Zero additional assets. Pure CSS creativity.

***

## A Better `<mark>`

The default browser `<mark>` element renders as a yellow highlighter. It works, but it is not particularly elegant. Fizzy takes a different approach for search result highlighting: drawing a hand-drawn circle around matched terms.

Here is the implementation from `circled-text.css`:

```
@layer components {
  .circled-text {
    --circled-color: oklch(var(--lch-blue-dark));
    --circled-padding: -0.5ch;

    background: none;
    color: var(--circled-color);
    position: relative;
    white-space: nowrap;

    span {
      opacity: 0.5;
      mix-blend-mode: multiply;

      @media (prefers-color-scheme: dark) {
        mix-blend-mode: screen;
      }
    }

    span::before,
    span::after {
      border: 2px solid var(--circled-color);
      content: "";
      inset: var(--circled-padding);
      position: absolute;
    }

    span::before {
      border-inline-end: none;
      border-radius: 100% 0 0 75% / 50% 0 0 50%;
      inset-block-start: calc(var(--circled-padding) / 2);
      inset-inline-end: 50%;
    }

    span::after {
      border-inline-start: none;
      border-radius: 0 100% 75% 0 / 0 50% 50% 0;
      inset-inline-start: 30%;
    }
  }
}
```

The HTML structure is `<mark class="circled-text"><span></span>webhook</mark>`. The empty `span` exists solely to provide two pseudo-elements (`::before` and `::after`) that draw the left and right halves of the circle.

The technique uses asymmetric border-radius values to create an organic, hand-drawn appearance. The `mix-blend-mode: multiply` makes the circle semi-transparent against the background, switching to `screen` in dark mode for proper blending.

Search results for: <mark style="box-sizing: border-box; --circled-color: oklch(74% 0.1293 256); --circled-padding: -0.5ch; background-image: none; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; position: relative; text-wrap: nowrap;"><span style="box-sizing: border-box; opacity: 0.5; mix-blend-mode: screen;"></span>webhook</mark>

No images. No SVGs. Just borders and border-radius creating the illusion of a hand-drawn circle.

***

## Dialog Animations: The New Way

Fizzy and Writebook both animate HTML `<dialog>` elements. This was notoriously difficult before. The secret is `@starting-style`.

Here is the actual implementation from Fizzy’s `dialog.css`:

```
@layer components {
  :is(.dialog) {
    border: 0;
    opacity: 0;
    transform: scale(0.2);
    transform-origin: top center;
    transition: var(--dialog-duration) allow-discrete;
    transition-property: display, opacity, overlay, transform;

    &::backdrop {
      background-color: var(--color-black);
      opacity: 0;
      transform: scale(1);
      transition: var(--dialog-duration) allow-discrete;
      transition-property: display, opacity, overlay;
    }

    &[open] {
      opacity: 1;
      transform: scale(1);

      &::backdrop {
        opacity: 0.5;
      }
    }

    @starting-style {
      &[open] {
        opacity: 0;
        transform: scale(0.2);
      }

      &[open]::backdrop {
        opacity: 0;
      }
    }
  }
}
```

The `--dialog-duration` variable is defined globally as `150ms`.

The `@starting-style` rule defines where the animation starts from when an element appears. Combined with `allow-discrete`, you can now transition between `display: none` and `display: block`. The modal smoothly scales and fades in. The backdrop fades independently. No JavaScript animation libraries. No manually toggling classes. The browser handles it.

***

## What This Means for You

I am not suggesting you abandon your build tools tomorrow. But I am suggesting you reconsider your assumptions.

**You might not need Sass or PostCSS.** Native CSS has variables, nesting, and `color-mix()`. The features that needed polyfills are now baseline across browsers.

**You might not need Tailwind for every project.** Especially if your team understands CSS well enough to build a small design system.

While the industry sprints toward increasingly complex toolchains, 37signals is walking calmly in the other direction. Is this approach right for everyone? No. Large teams with varying CSS skill levels might benefit from Tailwind’s guardrails. But for many projects, their approach is a reminder that simpler can be better.

***

Thanks to [Jason Zimdars](https://x.com/jasonzimdars) and the 37signals team for sharing their approach openly. All code examples in this post are taken from the Campfire, Writebook, and Fizzy source code. For Jason’s original deep-dive into Campfire’s CSS patterns, see [Modern CSS Patterns and Techniques in Campfire](https://dev.37signals.com/modern-css-patterns-and-techniques-in-campfire/). If you want to learn modern CSS, these three codebases are an exceptional classroom.

[9:27 am](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need) [css](https://www.zolkos.com/tags/css/), [rails](https://www.zolkos.com/tags/rails/), [frontend](https://www.zolkos.com/tags/frontend/), [nobuild](https://www.zolkos.com/tags/nobuild/)

[About Rob Zolkos](https://www.zolkos.com/)

Building Software. Lots of AI lately. Curious and creative. Sharing what I learn.

You can find me on [Twitter](http://twitter.com/robzolkos), [GitHub](https://github.com/robzolkos), or [write me an email](mailto:robzolkos@hey.com)
````

#

what about using only class in css

12:44 PM

Using only classes in CSS is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a widely accepted and often recommended industry standard</mark>. Many modern CSS methodologies, such as **BEM (Block Element Modifier)**, rely almost exclusively on class selectors to create scalable and maintainable codebases. \[[1](https://www.reddit.com/r/webdev/comments/17wttqs/is%5Fit%5Fbad%5Fto%5Fuse%5Fonly%5Fclass%5Fname%5Fselector/), [2](https://www.drinchev.com/blog/css-with-only-class-names/), [3](https://www.quora.com/What-do-you-use-in-CSS-Classes-only-IDs-only-or-both), [4](https://www.reddit.com/r/webdev/comments/25uflq/is%5Fit%5Fbad%5Fpractice%5Fto%5Fonly%5Fuse%5Fthe%5Fclass%5Fselector/)]

Advantages of a Class-Only Approach

- **Reusability**: Unlike IDs, which must be unique to a single element on a page, classes can be applied to any number of elements, allowing you to reuse the same styles across your site.
- **Predictable Specificity**: Using only classes keeps the "weight" of your selectors consistent. Mixing IDs (which have high specificity) and classes often leads to "specificity wars" where you have to use `!important` to override unwanted styles.
- **Component Decoupling**: If you style by tag name (e.g., `h2 { ... }`), you are tied to that specific HTML structure. If you use a class (e.g., `.heading { ... }`), you can change the HTML tag for SEO or accessibility reasons without breaking your design.
- **Portability**: Code styled with unique class names is easier to move between different projects or pages without side effects. \[[1](https://www.youtube.com/watch?v=nYY0GFtOAgw), [2](https://stackoverflow.com/questions/1878810/is-there-any-pros-and-cons-if-i-use-always-css-class-instead-css-id-for-everythi), [3](https://www.codecademy.com/article/classes-vs-ids), [4](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity), [5](https://www.reddit.com/r/Frontend/comments/1c3ulvd/css%5Fbest%5Fpractices%5Fclasses%5Fvs%5Ftarget%5Felements/), [6](https://www.reddit.com/r/webdev/comments/25uflq/is%5Fit%5Fbad%5Fpractice%5Fto%5Fonly%5Fuse%5Fthe%5Fclass%5Fselector/), [7](https://www.quora.com/What-do-you-use-in-CSS-Classes-only-IDs-only-or-both), [8](https://www.drinchev.com/blog/css-with-only-class-names/)]

Potential Drawbacks

- **Verbose HTML**: Your HTML can become cluttered with many class names (e.g., ).
- **Performance (Theoretical)**: IDs are technically faster for browsers to find than classes, though this difference is negligible in nearly all modern web applications.
- **Loss of Structural Simplicity**: For very simple lists or articles, using element selectors (like `p` or `li`) is often cleaner than adding a class to every single item. \[[1](https://www.reddit.com/r/programming/comments/6djjbz/css%5Fwith%5Fonly%5Fclass%5Fnames/), [2](https://www.reddit.com/r/webdev/comments/13eynf7/why%5Fdo%5Fpeople%5Fuse%5Fclasses%5Ffor%5Fthe%5Fmajority%5Fof/), [3](https://stackoverflow.com/questions/10250783/when-to-use-css-classes-and-when-to-not), [4](https://www.reddit.com/r/webdev/comments/17wttqs/is%5Fit%5Fbad%5Fto%5Fuse%5Fonly%5Fclass%5Fname%5Fselector/), [5](https://www.youtube.com/watch?v=nYY0GFtOAgw), [6](https://www.quora.com/What-do-you-use-in-CSS-Classes-only-IDs-only-or-both)]

When to Use Other Selectors

| Selector Type \[[1](https://www.youtube.com/watch?v=69m%5FrC4UxYY\&t=101), [2](https://www.reddit.com/r/learnprogramming/comments/11rgz7q/id%5Fvs%5Fclass%5Fin%5Fcss/), [3](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:only-child), [4](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:read-only), [5](https://www.reddit.com/r/webdev/comments/17wttqs/is%5Fit%5Fbad%5Fto%5Fuse%5Fonly%5Fclass%5Fname%5Fselector/), [6](https://www.reddit.com/r/Frontend/comments/1c3ulvd/css%5Fbest%5Fpractices%5Fclasses%5Fvs%5Ftarget%5Felements/)] | Best Use Case                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Element/Tag**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Global "reset" styles (e.g., setting a default font on `body`).                                                              |
| **ID**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Anchors for URL fragments or for targeting very specific elements in **JavaScript**.                                         |
| **Pseudo-classes**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Handling state changes (e.g., `:hover`) or selecting specific positions (e.g., `:first-child`) without adding extra classes. |

Are you looking to implement a specific **naming convention** like BEM, or just trying to **clean up** an existing stylesheet?

- [link](https://www.reddit.com/r/webdev/comments/17wttqs/is%5Fit%5Fbad%5Fto%5Fuse%5Fonly%5Fclass%5Fname%5Fselector/)\
  Is it bad to use only class name selector ? : r/webdev - Reddit\
  „You will know it can be done“ I love that. \* jseego. • 2y ago • Edited 2y ago. Some reasons to use those types of selectors: You'\
  Reddit
- [link](https://www.reddit.com/r/webdev/comments/25uflq/is%5Fit%5Fbad%5Fpractice%5Fto%5Fonly%5Fuse%5Fthe%5Fclass%5Fselector/)\
  Is it bad practice to only use the class selector? : r/webdev - Reddit\
  \* nathanwoulfe. • 12y ago. Helps with specificity too, if you're only styling via classes - removes the extra layer of complexity ...\
  Reddit
- [link](https://stackoverflow.com/questions/1878810/is-there-any-pros-and-cons-if-i-use-always-css-class-instead-css-id-for-everythi)\
  Is there any pros and cons if i use always CSS Class instead ...\
  \* 9 Answers. Sorted by: 47. One big difference: in CSS, a class has a lower importance level than an ID. Imagine that each specifi...\
  Stack Overflow

Show all

what about using only one class for each element in a component

Using only one class for each element in a component is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a core tenet of <strong>semantic, component-based CSS</strong></mark>. This approach is favored by developers who prefer "meaningful" class names over utility-first systems like Tailwind. \[[1](https://www.linkedin.com/pulse/understanding-utility-first-css-like-tailwind-vs-bootstrap-qudah-21g9f), [2](https://www.reddit.com/r/css/comments/141hkmr/is%5Fadding%5Fmany%5Fclasses%5Fto%5Fan%5Felement%5Fgood%5Fpractice/), [3](https://www.youtube.com/watch?v=Y8q%5FgZ9nbUc)]

Pros of Single Class Styling

- **Cleaner HTML**: Your markup remains readable and concise (e.g., vs. ).
- **Encapsulation**: All styles for a specific element live in one place in your CSS file, making it easier to understand the full design of that element at a glance.
- **Easier Customization**: If you need to change a component's padding across the whole site, you only update one CSS rule rather than hunting down every instance of a utility class in your HTML.
- **Predictable Specificity**: By sticking to one class per element, you avoid complex selector "wars" that occur when mixing multiple types of selectors. \[[1](https://www.reddit.com/r/css/comments/141hkmr/is%5Fadding%5Fmany%5Fclasses%5Fto%5Fan%5Felement%5Fgood%5Fpractice/), [2](https://www.reddit.com/r/css/comments/wdvt0m/should%5Fi%5Fadd%5Fa%5Fclassid%5Fto%5Fevery%5Felement/), [3](https://www.youtube.com/watch?v=Y8q%5FgZ9nbUc), [4](https://joinvnexus.medium.com/understanding-the-key-difference-between-component-based-and-utility-based-design-941df585a652), [5](https://medium.com/@rebmbula/a-beginners-guide-to-css-classes-simplifying-web-design-d80c4006eee4), [6](https://www.reddit.com/r/Frontend/comments/1c3ulvd/css%5Fbest%5Fpractices%5Fclasses%5Fvs%5Ftarget%5Felements/), [7](https://www.reddit.com/r/webdev/comments/yeafpa/should%5Fi%5Fbe%5Fusing%5Fids%5Fmore%5Finstead%5Fof%5Fclasses/)]

Cons and Challenges

- **Code Duplication**: You may find yourself repeating the same properties (like `display: flex`) across many different classes, which can lead to larger CSS files.
- **Rigid Design**: If you need a slightly different version of a component (e.g., a "large" version of a button), you must either create a whole new class or a "modifier" class, moving away from the "single class" rule.
- **Naming Fatigue**: Coming up with unique, descriptive names for every single `div` and `span` in a large project can be mentally taxing and lead to inconsistent naming. \[[1](https://stackoverflow.com/questions/5568718/css-multiple-vs-single-class-on-an-element), [2](https://inlehmansterms.net/2014/09/19/single-class-vs-multi-class-css/), [3](https://frontstuff.io/should-you-chain-or-extend-css-classes), [4](https://www.youtube.com/watch?v=Y8q%5FgZ9nbUc)]

Summary Comparison

| Approach \[[1](https://joinvnexus.medium.com/understanding-the-key-difference-between-component-based-and-utility-based-design-941df585a652), [2](https://frontstuff.io/should-you-chain-or-extend-css-classes), [3](https://www.reddit.com/r/css/comments/wdvt0m/should%5Fi%5Fadd%5Fa%5Fclassid%5Fto%5Fevery%5Felement/), [4](https://inlehmansterms.net/2014/09/19/single-class-vs-multi-class-css/), [5](https://www.quora.com/What-is-the-advantage-of-using-multiple-CSS-classes-on-a-single-element), [6](https://locastic.com/blog/i-was-wrong-about-utility-first-css-and-here-is-why)] | One Class per Element (Component-Based)    | Multiple Classes per Element (Utility-First)                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------- |
| **HTML Clarity**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | High (Semantic & Clean)                    | Low (Verbose & Cluttered)                                   |
| **CSS Maintainability**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | High (Styles grouped by component)         | Low (Global file remains small, but HTML is harder to edit) |
| **Reusability**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Low (Styles are tied to specific elements) | High (Small utility blocks can be used anywhere)            |

This method is highly effective when paired with a naming convention like BEM (Block Element Modifier) to keep your classes organized.

Would you like to see how to structure a component using the **BEM methodology** to keep your classes clean?

- [link](https://stackoverflow.com/questions/5568718/css-multiple-vs-single-class-on-an-element)\
  CSS - Multiple vs Single class on an element - Stack Overflow\
  Apr 6, 2011 — On the other hand, if you add two or more classes instead of one to a large number (hundreds / thousands) of HTML elements, it may...\
  Stack Overflow
- [link](https://www.reddit.com/r/css/comments/wdvt0m/should%5Fi%5Fadd%5Fa%5Fclassid%5Fto%5Fevery%5Felement/)\
  Should I add a class/ID to every element? : r/css - Reddit\
  Aug 2, 2022 — alllmossttherrre. • 4y ago. This. Mastering CSS selectors can save you a ton of work and code. SEEYOULHATER. • 4y ago • Edited 4y ...\
  Reddit·r/css
- [link](https://www.reddit.com/r/css/comments/141hkmr/is%5Fadding%5Fmany%5Fclasses%5Fto%5Fan%5Felement%5Fgood%5Fpractice/)\
  Is adding many classes to an element good practice? : r/css\
  Jun 5, 2023 — I would say that your default approach should be to write meaningful class names and apply styles using those; style things based ...\
  Reddit·r/css

Show all

#

how can i refuse using pascal case for react components

In React, you generally **cannot** use lowercase for custom components because JSX treats lowercase tags as built-in HTML elements (like or ). If you name a component `mycomponent`, React will try to render a literal tag in the DOM, which usually results in an unrecognized tag error or empty output. \[[1](https://github.com/diegomura/react-pdf/issues/239), [2](https://www.codecademy.com/learn/fscp-react-part-i/modules/fecp-react-components/cheatsheet), [3](https://www.youtube.com/watch?v=LkTPz5cpe9g), [4](https://codingarchitect.dev/blog/essential-naming-conventions-in-react-and-next-js/)]

However, if you want to avoid PascalCase in your actual function definitions or file names, you can use these workarounds: \[[1](https://github.com/diegomura/react-pdf/issues/239), [2](https://github.com/typescript-eslint/typescript-eslint/issues/2607)]

1\. The "Re-assignment" Trick

You can define your component with any naming convention (like camelCase) and then re-assign it to a capitalized variable before using it in JSX. \[[1](https://www.youtube.com/watch?v=LkTPz5cpe9g), [2](https://github.com/typescript-eslint/typescript-eslint/issues/2607), [3](https://medium.com/@mrewusi/jsx-up-close-9d9d96248fe2), [4](https://www.sufle.io/blog/naming-conventions-in-react)]

javascript

```
// Define with camelCase
const myCoolComponent = () => <div>Hello</div>;

// Re-assign to PascalCase for JSX use
const MyCoolComponent = myCoolComponent;

// Use in JSX
return <MyCoolComponent />;
```

Use code with caution.

2\. Use kebab-case for Files

While the component itself must be PascalCase in your code, you are free to name your **files** using `kebab-case` or `snake_case` if you prefer. Many developers use this to ensure cross-platform file system consistency. \[[1](https://www.sufle.io/blog/naming-conventions-in-react), [2](https://x.com/rwieruch/status/1836434009041035635), [3](https://github.com/standard/standard/issues/1365)]

- **File:** `user-profile.jsx`
- **Inside File:** `export const UserProfile = () => { ... }`

3\. Namespace/Object Mapping

You can store your components as properties of a single PascalCase object. This allows you to reference them via a dot-notation, effectively hiding the individual component's naming style behind a namespace.

javascript

```
const UI = {
  button: () => <button>Click</button>,
  input: () => <input />
};

// React allows dot-notation regardless of casing
return <UI.button />;
```

Use code with caution.

4\. Adjust ESLint Rules

If your refusal is primarily due to linting warnings, you can modify your configuration to allow other formats. For example, in `typescript-eslint`, you can update the [naming-convention rule](https://typescript-eslint.io/rules/naming-convention/) to allow both `camelCase` and `PascalCase` for functions. \[[1](https://github.com/typescript-eslint/typescript-eslint/issues/2607)]

json

```
"@typescript-eslint/naming-convention": [
  "error",
  {
    "selector": "function",
    "format": ["camelCase", "PascalCase"]
  }
]
```

Use code with caution.

_Note: This will stop the linter from complaining, but you still must capitalize the variable name when you actually use it in a JSX tag._ \[[1](https://medium.com/@mrewusi/jsx-up-close-9d9d96248fe2)]

Would you like to see how to **automate** these naming rules using a custom **ESLint configuration**?

- [link](https://github.com/diegomura/react-pdf/issues/239)\
  is using incorrect casing. Use PascalCase for ...\
  Jun 3, 2018 — I get the next warnings: \* is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements. \* Recei...\
  GitHub
- [link](https://github.com/typescript-eslint/typescript-eslint/issues/2607)\
  \[naming-conventions] React functional component has to be ...\
  Sep 28, 2020 — React's naming conventions are to use PascalCase when a function returns a component: //Function name \`RoleManager\` must match one...\
  GitHub
- [link](https://www.sufle.io/blog/naming-conventions-in-react)\
  Naming Conventions in React for Clean & Scalable Code\
  \* File Naming. When it comes to naming files in a React project, our goal is to make it easy to identify the contents of each file...\
  sufle.io

Show all