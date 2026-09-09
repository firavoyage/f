# how to style placeholder on css

To style placeholder text in CSS, <mark>use the<span> </span><strong><code dir="ltr">::placeholder</code><span> </span>pseudo-element</strong></mark>. This allows you to target the hint text inside `<input>` or `<textarea>` elements before a user starts typing. [link](https://www.w3schools.com/cssref/sel%5Fplaceholder.php)

### Basic Example

css

```
/* Target all inputs and textareas */
::placeholder {
  color: #888888;
  font-style: italic;
  opacity: 1; /* Ensures custom color displays correctly in Firefox */
}

/* Target a specific class */
.my-input::placeholder {
  color: coral;
  font-weight: bold;
}
```

Use code with caution.

### Supported Properties

Browsers only allow a **subset of CSS properties** to be applied to the `::placeholder` pseudo-element: [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::placeholder)

- `color`
- `font` properties (`font-size`, `font-family`, `font-weight`, `font-style`)
- `background` properties (`background-color`)
- `opacity`
- Text formatting (`text-transform`, `letter-spacing`, `line-height`) [link](https://css-tricks.com/almanac/pseudo-selectors/p/placeholder/)

### Browser Compatibility (Legacy)

Modern browsers fully support `::placeholder`. However, if you need to support older, legacy browsers, you must use individual vendor prefixes: [link](https://medium.com/@samanthaming/styling-placeholder-text-with-css-9a2a608b68bc)

css

```
/* Modern browsers (Chrome, Firefox, Safari, Edge) */
::placeholder {
  color: gray;
}

/* Internet Explorer 10-11 */
:-ms-input-placeholder {
  color: gray;
}

/* Older WebKit engines */
::-webkit-input-placeholder {
  color: gray;
}
```

Use code with caution.

_Note: You cannot combine these selectors with commas (e.g., `::placeholder, ::-webkit-input-placeholder`). Browsers drop the entire style rule if they do not recognize one of the selectors in a list. Write them out as separate blocks._

### Troubleshooting Tips

1. **Opacity in Firefox:** Firefox applies a default opacity (around `0.5`) to placeholder text. Always add `opacity: 1;` when changing the placeholder color to ensure your custom color looks correct. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::placeholder)
2. **`::placeholder` vs `:placeholder-shown`:** The double-colon `::placeholder` styles the _text itself_. The single-colon `:placeholder-shown` is a pseudo-class that styles the _actual `<input>` element_ only while the placeholder is visible. [link](https://www.youtube.com/watch?v=jWCXc32OIUY\&t=40)

To see a step-by-step visual demonstration of how to implement and modify placeholder properties, watch this quick tutorial:

55s

[link](https://www.youtube.com/watch?v=olfZhDPD%5FIY\&t=1)

How to Change Input Placeholder Color with CSS

1 year ago

YouTube · Fable Craft Software

Would you like to see how to use **`:placeholder-shown`** to create floating label effects, or do you need help styling a specific input layout?

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::placeholder)\
  MDN Web Docs\
  placeholder CSS pseudo-element - MDN Web Docs - Mozilla\
  Apr 17, 2026 — css Copy input { margin-top: 0.5rem; } input::placeholder { font-weight: bold; opacity: 0.5; color: red; } html Copy Your phone nu...
- [link](https://www.w3schools.com/cssref/sel%5Fplaceholder.php)\
  W3Schools\
  CSS ::placeholder Pseudo-element - W3Schools\
  Definition and Usage. The CSS ::placeholder pseudo-element is used to style the placeholder text of or elements. The placeholder t...
- [link](https://www.youtube.com/watch?v=jWCXc32OIUY\&t=40)\
  YouTube·Kevin Powell\
  Change the style of an input based on if there is a placeholder\
  Dec 4, 2019 — as soon as I start typing. and I put my own text in there the placeholder disappears. and it gets replaced with my own text but as...\
  46s

Show all

