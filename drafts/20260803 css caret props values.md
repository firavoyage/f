# (?) browser input cursor style

To style the flashing text input cursor (known natively as the **caret**) or the mouse hover pointer over an input field, you must target two different behaviors in CSS.

### 1. Styling the Text Insertion Caret (Blinking Cursor)

The flashing line inside a text field is called a **caret**. You can modify its appearance using CSS: [link](https://developer.mozilla.org/en-US/docs/Glossary/Caret)

#### Change Caret Color

Use the `caret-color` property to update the color of the text insertion point. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/caret-color)

css

```
input {
  caret-color: #ff4757; /* Changes the blinking line to red */
}
```

Use code with caution.

#### Change Caret Shape

The `caret-shape` property allows you to change the structure of the indicator. Note that browser implementation can vary for this draft property: [link](https://css-tricks.com/almanac/properties/c/caret-shape/)

css

```
input {
  caret-shape: block;      /* Terminal-style solid block */
  caret-shape: underscore; /* Horizontal underline indicator */
  caret-shape: line;       /* Standard vertical bar (default) */
}
```

Use code with caution.

***

### 2. Styling the Mouse Hover Cursor

If you want to change what the **mouse pointer** looks like when a user hovers over an HTML `<input>` tag, use the `cursor` property: [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/cursor)

css

```
/* Make the mouse pointer look like a clickable hand over text fields */
input[type="text"] {
  cursor: pointer;
}

/* Force the text selection I-beam cursor */
input[type="submit"] {
  cursor: text;
}

/* Disable interactions completely */
input:disabled {
  cursor: not-allowed;
}
```

Use code with caution.

***

### Core Utility Guide: Standard CSS Reference

| CSS Property  | What it Styles                     | Common Values                                 |
| ------------- | ---------------------------------- | --------------------------------------------- |
| `caret-color` | The color of the typing indicator  | `auto`, `transparent`, `<color>` (Hex, RGB)   |
| `caret-shape` | The design of the typing indicator | `line`, `block`, `underscore`                 |
| `cursor`      | The mouse pointer on hover         | `text`, `pointer`, `default`, `none`, `url()` |

***

### Advanced Custom Caret Hack

Because browser support for altering a native caret beyond its color is highly restrictive, developers create a custom flashing indicator by hiding the native caret entirely and syncing typed values to an overlaying styled `<span>` element: [link](https://benfrain.com/creating-a-custom-input-cursorcaret/)

css

```
.custom-input-wrapper input {
  caret-color: transparent; /* Hides the native blinking cursor */
}
```

Use code with caution.

Would you like help setting up a **JavaScript-based terminal block cursor** or assistance fixing a specific **cross-browser hover bug**?

AI can make mistakes, so double-check responses

- [link](https://benfrain.com/creating-a-custom-input-cursorcaret/)\
  Creating a custom input cursor/caret – Ben Frain\
  Jul 5, 2016 — By default, it's not possible to create a custom caret in CSS. There is no pseudo element for caret-style and caret-color. However...\
  Ben Frain
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/caret-color)\
  caret-color CSS property - MDN Web Docs\
  Jul 26, 2026 — This feature is well established and works across many devices and browser versions. It's been available across browsers since Jan...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/cursor)\
  cursor CSS property - MDN Web Docs\
  Apr 20, 2026 — cursor CSS property. Baseline Widely available \*. This feature is well established and works across many devices and browser versi...\
  MDN Web Docs

Show all

# 

