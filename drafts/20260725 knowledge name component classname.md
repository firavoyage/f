# all css selectors

<mark><strong><span>CSS selectors are patterns used to target and style specific HTML elements on a webpage.</span></strong></mark> They range from basic tag targeting to advanced user-state and structural logic filters. [link](https://www.w3schools.com/css/css%5Fselectors.asp)

Here is the complete reference of all CSS selectors, organized by category for easy browsing. [link](https://www.w3schools.com/css/css%5Fselectors.asp)

### Basic Selectors

Basic selectors are the foundational building blocks used to match elements directly by type, name, class, or ID. [link](https://www.geeksforgeeks.org/css/css-selectors/)

- **Universal (`*`)**: Matches all elements in the document.
- **Type (`element`)**: Matches elements by their HTML tag name (e.g., `p`, `div`).
- **Class (`.classname`)**: Matches all elements that have the specified class attribute.
- **ID (`#id_name`)**: Matches a single, unique element with the specified ID attribute. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors/Selectors%5Fand%5Fcombinators)

### Combinators

Combinators connect multiple selectors to target elements based on their hierarchical relationship in the HTML structure. [link](https://www.w3schools.com/css/css%5Fselectors.asp)

- **Descendant (`A B`)**: Matches element B if it is inside element A at any nesting level.
- **Child (`A > B`)**: Matches element B only if it is a direct child of element A.
- **Adjacent Sibling (`A + B`)**: Matches element B if it immediately follows element A and shares the same parent.
- **General Sibling (`A ~ B`)**: Matches element B if it follows element A anywhere as a sibling. [link](https://www.youtube.com/watch?v=l1mER1bV0N0\&t=494)

### Attribute Selectors

These target elements based on the presence, value, or partial value of their HTML attributes. [link](https://www.w3schools.com/css/css%5Fselectors.asp)

- **Presence (`[attr]`)**: Matches elements with the specified attribute, regardless of its value.
- **Exact Match (`[attr="val"]`)**: Matches elements whose attribute value is exactly `val`.
- **Whitespace Match (`[attr~="val"]`)**: Matches elements whose attribute is a space-separated list containing `val`.
- **Hyphen Match (`[attr|="val"]`)**: Matches elements whose attribute is exactly `val` or starts with `val-`.
- **Prefix Match (`[attr^="val"]`)**: Matches elements whose attribute value begins exactly with `val`.
- **Suffix Match (`[attr$="val"]`)**: Matches elements whose attribute value ends exactly with `val`.
- **Substring Match (`[attr*="val"]`)**: Matches elements whose attribute value contains the substring `val`.
- **Modifiers (`[attr="val" i]`)**: Appending `i` makes the attribute value match case-insensitive (use `s` for explicit case-sensitive). [link](https://www.w3schools.com/cssref/css%5Fselectors.php)

### Pseudo-Classes

Pseudo-classes are keywords preceded by a colon (`:`) that target elements during specific user interactions, states, or structural positions. [link](https://www.sitepoint.com/css-selectors/)

#### User Action & Interaction States

- `:hover`: Elements when the user positions a pointing device over them.
- `:active`: Elements while they are actively being clicked or activated.
- `:focus`: Elements that have gained focus (like an active input field).
- `:focus-visible`: Elements that have focus where the browser determines a visual indicator is needed.
- `:focus-within`: Elements that have focus, or contain any element that has focus. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

#### Link States

- `:link`: Anchor tags that have not yet been visited.
- `:visited`: Anchor tags that the user has already visited.
- `:any-link`: Matches any element that would match either `:link` or `:visited`. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

#### Structural & Child Index Position

- `:first-child`: Elements that are the first child of their parent.
- `:last-child`: Elements that are the last child of their parent.
- `:only-child`: Elements that are the only child of their parent.
- `:nth-child(n)`: Elements based on their numeric position in a sibling list (e.g., `2n`, `odd`, `even`).
- `:nth-last-child(n)`: Elements based on their position relative to the end of a sibling list.
- `:first-of-type`: The first element of its specific tag type within a parent.
- `:last-of-type`: The last element of its specific tag type within a parent.
- `:only-of-type`: Elements that are the unique child of their specific tag type within a parent.
- `:nth-of-type(n)`: Elements of a specific tag type based on their numeric position.
- `:nth-last-of-type(n)`: Elements of a specific tag type based on their position from the end.
- `:root`: Targets the highest-level element in the document (typically `<html>`).
- `:empty`: Elements that have no children at all (including text nodes). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

#### Form & Input Validation States

- `:enabled`: Form elements that are in an active, editable state.
- `:disabled`: Form elements that have the `disabled` attribute active.
- `:checked`: Checkboxes, radio buttons, or option elements that are toggled on.
- `:default`: The initial default form items (like a default button or pre-checked box).
- `:required`: Form elements that must be filled out before submission.
- `:optional`: Form elements that do not have a `required` attribute.
- `:valid`: Form elements whose input passes browser validation rules.
- `:invalid`: Form elements whose input fails browser validation rules.
- `:user-valid`: Validated inputs, but triggers only after user interaction.
- `:user-invalid`: Invalidated inputs, but triggers only after user interaction.
- `:in-range`: Inputs whose value falls within specified `min` and `max` constraints.
- `:out-of-range`: Inputs whose value falls outside specified range limits.
- `:read-only`: Non-editable elements (like elements with a `readonly` attribute).
- `:read-write`: Editable elements that can be altered by the user.
- `:placeholder-shown`: Form inputs currently displaying placeholder text.
- `:autofill`: Input elements that have been automatically filled by the browser.
- `:indeterminate`: Form elements in an intermediate state (such as an undecided checkbox). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

#### Logical & Functional Selectors

- `:not(selector)`: Filters out elements that match the selector inside the parentheses.
- `:is(selector_list)`: Matches any element that fits any selector in the provided list (shares highest specificity).
- `:where(selector_list)`: Identical to `:is()`, but forces the specificity of the rule to zero.
- `:has(selector)`: Parent selector logic; matches an element if its descendants match the internal selector. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

#### Other States & Media

- `:target`: An element whose ID matches the current URL hash fragment.
- `:fullscreen`: Elements currently displayed in the browser's full-screen mode.
- `:popover-open`: Elements that are configured as popovers and currently visible.
- `:open`: Elements that can toggle visibility natively (like `<details>`) when opened.
- `:defined`: Elements that are built-in or successfully registered custom elements.
- `:scope`: Elements that serve as the contextual reference point for matching.
- `:playing` / `:paused`: Media elements (audio/video) that are playing or paused. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

### Pseudo-Elements

Pseudo-elements use a double colon (`::`) to target and style abstract sub-parts of an element that do not exist explicitly in the HTML source tree. [link](https://www.w3schools.com/css/css%5Fselectors.asp)

- `::before`: Creates a virtual element that is inserted directly before the element's actual content.
- `::after`: Creates a virtual element that is inserted directly after the element's actual content.
- `::first-letter`: Targets the first letter of the first line of text block content.
- `::first-line`: Targets the entire first line of text block content.
- `::marker`: Targets the list-item marker (the bullet point or numeric prefix).
- `::placeholder`: Targets the placeholder text inside form input fields.
- `::selection`: Targets the portion of text or content currently highlighted/selected by a user.
- `::backdrop`: Targets the background box drawn behind elements in full-screen or dialog modes.
- `::file-selector-button`: Targets the button inside file-upload form inputs. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)

***

If you are trying to write a specific style rule, let me know:

- What **HTML snippet or element structure** you want to select
- The **relationship** between the elements (are they nested, side-by-side?)
- The **behavior or state** that should trigger the design (on hover, on error?)

I can write out the exact, optimized selector pattern for your layout.

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Selectors)\
  CSS selectors - MDN Web Docs\
  Apr 14, 2026 — CSS selectors. The CSS selectors module defines the patterns to select elements to which a set of CSS rules are then applied along...\
  MDN Web Docs
- [link](https://www.w3schools.com/css/css%5Fselectors.asp)\
  CSS Selectors\
  CSS selectors are used to select HTML elements for styling. There are five categories of CSS selectors: \* \*\*Simple selectors\*\* Sel...\
  W3Schools
- [link](https://www.geeksforgeeks.org/css/css-selectors/)\
  CSS Selectors - GeeksforGeeks\
  May 11, 2026 — CSS selectors are commonly grouped into five main categories: \* Basic Selectors. Basic selectors in CSS are simple tools used for ...\
  GeeksforGeeks

Show all

# css nesting syntax

Native **CSS Nesting** allows you to place child style rules directly inside a parent style rule, eliminating the need to repeat selectors. It is fully supported across all modern browsers as part of Baseline. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting)

### 1. Basic Child & Descendant Nesting

You can nest selectors inside a parent rule with or without the ampersand (`&`) symbol. By default, nested rules are treated as descendant selectors. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/Using)

css

```
/* Parent rule */
.card {
  background-color: white;

  /* Child rule without & (Implicit descendant) */
  h2 {
    font-size: 1.5rem;
  }

  /* Child rule with & (Explicit descendant) */
  & p {
    color: gray;
  }
}

/* Both compile identically in the browser to: */
.card h2 { font-size: 1.5rem; }
.card p { color: gray; }
```

Use code with caution.

### 2. Pseudo-classes and Compound Selectors

When you want to attach a rule to the parent selector **without adding a space** (e.g., pseudo-classes, states, or multi-class combinations), the ampersand (`&`) is **strictly mandatory**. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Nesting%5Fselector)

css

```
.button {
  background: blue;

  /* Correct: targets .button:hover */
  &:hover {
    background: darkblue;
  }

  /* Correct: targets .button.is-active */
  &.is-active {
    background: green;
  }

  /* WRONG: Without the '&', this compiles to '.button *:hover' */
  :hover {
    color: red;
  }
}
```

Use code with caution.

### 3. Sibling and Direct Child Combinators

You can nest relative selectors that use combinators like `>` (direct child), `+` (adjacent sibling), or `~` (general sibling) directly. [link](https://www.w3.org/TR/css-nesting-1/)

css

```
.list {
  /* Targets only direct <li> children */
  > li {
    padding: 8px;
  }

  /* Targets another .list element that directly follows this one */
  + .list {
    margin-top: 20px;
  }
}
```

Use code with caution.

### 4. Reversing Context (Inverted Nesting)

Placing the `&` symbol at the **end** or **middle** of a nested selector allows you to style the current element based on an ancestor's state or theme. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/Using)

css

```
.theme-text {
  color: black;

  /* Reverses context: targets '.dark-mode .theme-text' */
  .dark-mode & {
    color: white;
  }
}
```

Use code with caution.

### 5. Nesting Media Queries (`@media`)

Media queries and container queries can be nested directly inside your style blocks, grouping contextual styles cleanly. [link](https://www.youtube.com/watch?v=YLkXkBE0bZs)

css

```
.sidebar {
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
}
```

Use code with caution.

***

### ⚠️ Crucial Differences from Sass/SCSS

If you are coming from preprocessors like Sass, keep these native engine rules in mind:

- **No Class Name Concatenation**: You **cannot** use `&__child` or `&--modifier` to generate new BEM class names. Native nesting matches actual DOM elements; it does not manipulate text strings. [link](https://blog.frankmtaylor.com/2024/07/18/css-nesting-the-is-pseudo-class-and-a-guide-to-panicking-about-sass/)
- **The `:is()` Specificity Wrapper**: Under the hood, the browser wraps parent selectors inside an `:is()` pseudo-class when evaluating nested rules. This means the nested rule inherits the **highest specificity** of any selector grouped in the parent list. [link](https://kilianvalkhof.com/2023/css-html/the-gotchas-of-css-nesting/)

Would you like to see how to rewrite a specific **Sass structure into native CSS**, or do you need help debugging a **specificity conflict** with your nested styles?

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting)\
  CSS nesting - MDN Web Docs\
  Nov 18, 2025 — CSS nesting. The CSS nesting module defines a syntax for nesting selectors, providing the ability to nest one style rule inside an...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/Using)\
  Using CSS nesting - MDN Web Docs\
  Jun 16, 2026 — \* Child selectors. You can use CSS nesting to create child selectors of a parent, which in turn can be used to target child elemen...\
  MDN Web Docs
- [link](https://kilianvalkhof.com/2023/css-html/the-gotchas-of-css-nesting/)\
  The gotchas of CSS Nesting - Kilian Valkhof\
  Jun 13, 2023 — A related gotcha, :is() Last week was CSS Day (which was amazing) and of course a bunch of the presentations mentioned CSS Nesting...\
  Kilian Valkhof

Show all

# 