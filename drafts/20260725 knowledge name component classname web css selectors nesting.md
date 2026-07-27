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

# css attr selector syntax

CSS attribute selectors allow you to target HTML elements based on the **presence, absence, or partial match of their attributes**. <mark>All attribute selectors use<span> </span><strong>square brackets (<code dir="ltr">\[]</code>)</strong><span> </span>and can be attached directly to an element tag name</mark>. [link](https://stackoverflow.com/questions/5324415/select-elements-by-attribute-in-css)

### Core Attribute Selectors

| Selector Type          | Syntax            | Description                                                                                | Example                                                                                                               |
| ---------------------- | ----------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| **Presence**           | `[attr]`          | Targets any element that has the specified attribute, regardless of its value.             | `a[target]`                                                                                                           |
| **Exact Match**        | `[attr="value"]`  | Targets elements with the exact specified attribute value.                                 | `input[type="checkbox"]`                                                                                              |
| **Contains Word**      | `[attr~="value"]` | Targets elements where the value is a whitespace-separated list containing the exact word. | `p[class~="special"]`                                                                                                 |
| **Starts With**        | `[attr^="value"]` | Targets elements whose attribute value begins exactly with the specified string.           | `a[href^="https://"]`                                                                                                 |
| **Ends With**          | `[attr$="value"]` | Targets elements whose attribute value ends exactly with the specified string.             | `a[href$=".pdf"]`                                                                                                     |
| **Contains Substring** | `[attr*="value"]` | Targets elements whose attribute value contains the string anywhere within it.             | `img[src*="logo"]`                                                                                                    |
| **Hyphen-Match**       | `[attr            | ="value"]`                                                                                 | Targets elements whose value is exactly the string, or starts with the string followed immediately by a hyphen (`-`). | `html[lang | ="en"]` |

### Case-Sensitivity Modifiers

You can control case sensitivity by adding a specific flag right before the closing square bracket: [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute%5Fselectors)

- **Case-Insensitive (`i`)**: Adding `i` or `I` forces the browser to ignore capitalization during string matching.\
  css

<!---->

```
/* Matches "file.PDF", "file.pdf", or "file.Pdf" */
a[href$=".pdf" i] {
  color: red;
}
```

Use code with caution.

- **Case-Sensitive (`s`)**: Adding `s` or `S` forces the browser to match capitalization exactly (this is typically the default behavior in HTML documents).\
  css

<!---->

```
/* Strictly matches "SecureOnly", won't match "secureonly" */
[data-status="SecureOnly" s] {
  border-color: green;
}
```

Use code with caution.\
[link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute%5Fselectors)

For more deep dives into advanced styling techniques, explore the official MDN Web Docs on Attribute Selectors. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute%5Fselectors)

Would you like help writing a **specific selector** for your HTML structure, or do you want to see how to **combine multiple attributes** together?

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Attribute%5Fselectors)\
  Attribute selectors - CSS - MDN Web Docs\
  Nov 27, 2025 — Syntax. ... Represents elements with an attribute name of attr. ... Represents elements with an attribute name of attr whose value...\
  MDN Web Docs
- [link](https://www.w3schools.com/css/css%5Fattribute%5Fselectors.asp)\
  CSS Attribute Selectors - W3Schools\
  CSS \[attribute|="value"] Selector. The \[attribute|="value"] selector is used to select elements with the specific attribute, whose...\
  W3Schools
- [link](https://stackoverflow.com/questions/5324415/select-elements-by-attribute-in-css)\
  Select elements by attribute in CSS - Stack Overflow\
  Mar 16, 2011 — Attribute selectors are case-sensitive by default, and are written inside brackets \[]. \[data-value] { /\* Attribute exists \*/ } \[da...\
  Stack Overflow

Show all

## what if you omit quotes

In CSS, omitting quotes around the attribute value is <mark><strong>syntactically valid</strong>, but only if the value is a<span> </span><strong>valid CSS identifier</strong></mark>.

### The Golden Rule

You can omit quotes if the value consists **only** of letters, numbers, hyphens (`-`), and underscores (`_`), and does **not** start with a digit or a hyphen followed by a digit.

### When You Can Omit Quotes

For simple, single-word alphanumeric values, quotes are completely optional.

css

```
/* Perfectly Valid */
input[type=checkbox] { ... }
div[data-status=active] { ... }
span[class^=nav-item] { ... }
```

Use code with caution.

### When Quotes Are Strictly Required

You **must** use quotes if the value contains spaces, special characters, symbols, or starts with a number.

css

```
/* Invalid (will break the CSS) */
a[href*=/blog/] { ... }         /* Contains forward slashes */
div[class~=nav item] { ... }    /* Contains a space */
p[data-version=1.0] { ... }     /* Contains a dot */
div[id=2b] { ... }              /* Starts with a number */

/* Valid (with quotes) */
a[href*="/blog/"] { ... }
div[class~="nav item"] { ... }
p[data-version="1.0"] { ... }
div[id="2b"] { ... }
```

Use code with caution.

### Best Practice Recommendation

Always use **double quotes (`""`)**.

It prevents unexpected syntax breaking when values change, ensures consistent code styling across your team, and avoids parsing bugs with older browsers or complex CSS minifiers.

If you are debugging a specific selector that isn't working, feel free to **share your HTML snippet** or **the exact value** you are trying to match so we can verify if it needs quotes!

- [link](https://www.reddit.com/r/SQL/comments/1449e1z/when%5Fto%5Fuse%5Fvs%5Fvs%5Fwhen%5Fnot%5Fto%5Fuse/)\
  when to use " " vs ' ' vs when not to use " " & ' ' : r/SQL\
  Jun 8, 2023 — The SQL ( SQL Query ) standard says that object/column names can't start with a numbers unless they're quoted (using whatever quot...\
  \
  Reddit
- [link](https://www.geeksforgeeks.org/javascript/what-is-the-difference-between-object-keys-with-quotes-and-without-quotes/)\
  What is the Difference Between Object Keys with Quotes and Without Quotes?\
  Nov 11, 2024 — Summary: Use quotes when your keys contain spaces, special characters, or start with numbers. Omit quotes when your keys are valid...\
  \
  GeeksforGeeks
- [link](https://medium.com/codex/html-attribute-value-quotes-are-optional-again-9c619c52e991)\
  HTML Attribute Value Quotes Are Optional Again? | by Jason Knight | CodeX\
  Jan 17, 2023 — So I can't say that attribute quotes being back to optional as if it's the mid '90's again is a surprise. It's not like browsers a...\
  \
  \
  Medium

