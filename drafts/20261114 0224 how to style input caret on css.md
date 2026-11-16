# how to style input caret on css

## how to style input caret on css

Use the CSS `caret-color` property to change the text cursor’s color:

```css
input,
textarea {
  caret-color: #e63946;
}
```

You can also set it for a particular input or focus state:

```css
input:focus {
  caret-color: blue;
}
```

`caret-color: auto` uses the browser’s default. CSS generally controls the caret’s color, but not its blink rate or thickness consistently across browsers.

## how to hide caret

Set `caret-color: transparent`:

```css
input,
textarea {
  caret-color: transparent;
}
```

This hides the blinking caret while keeping the field editable. For a single field, use its class or ID instead.