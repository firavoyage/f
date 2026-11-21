# how to set text vertical align in css

## how to set text vertical align in css

`vertical-align` works on inline elements, inline-blocks, and table cells—not regular block elements.

```css
/* Align inline text with neighboring content */
span {
  vertical-align: middle; /* top, bottom, baseline, middle, or a length */
}

/* Center text vertically in a table cell */
td {
  vertical-align: middle;
}
```

To vertically center text inside a regular container, use Flexbox:

```css
.container {
  display: flex;
  align-items: center;
}
```

For a single line of text in a fixed-height element, matching `line-height` to the height can also center it:

```css
.container {
  height: 48px;
  line-height: 48px;
}
```