# write css of all browser default styling on article tags

## write css of all browser default styling on article tags

The browser’s default styling for an `<article>` is essentially:

```css
article {
  display: block;
}
```

It has no default margin, padding, border, or font styling. Text-related properties are inherited from its parent, and exact browser styles can vary slightly. CSS also cannot reproduce the element’s semantic meaning.

## write css of all browser default styling on all tags inside an article

There isn’t one universal stylesheet for browser defaults: they vary by browser, operating system, and form control. This is a practical approximation of common defaults, scoped to elements inside `<article>`:

```css
/* Common block elements */
article :where(address, article, aside, blockquote, div, dl, fieldset,
               figcaption, figure, footer, form, header, main, nav, ol,
               p, pre, section, ul) {
  display: block;
}

article :where(h1, h2, h3, h4, h5, h6, p, blockquote, figure, pre, dl, ol, ul) {
  display: block;
}

article :where(p) {
  margin-block: 1em;
}

article :where(h1) {
  font-size: 2em;
  font-weight: bold;
  margin-block: 0.67em;
}

article :where(h2) {
  font-size: 1.5em;
  font-weight: bold;
  margin-block: 0.83em;
}

article :where(h3) {
  font-size: 1.17em;
  font-weight: bold;
  margin-block: 1em;
}

article :where(h4) {
  font-size: 1em;
  font-weight: bold;
  margin-block: 1.33em;
}

article :where(h5) {
  font-size: 0.83em;
  font-weight: bold;
  margin-block: 1.67em;
}

article :where(h6) {
  font-size: 0.67em;
  font-weight: bold;
  margin-block: 2.33em;
}

article :where(blockquote) {
  margin-block: 1em;
  margin-inline: 40px;
}

article :where(figure) {
  margin-block: 1em;
  margin-inline: 40px;
}

article :where(hr) {
  display: block;
  margin-block: 0.5em;
  border-style: inset;
  border-width: 1px;
}

article :where(ul, ol, menu) {
  margin-block: 1em;
  padding-inline-start: 40px;
}

article :where(li) {
  display: list-item;
}

article :where(pre) {
  margin-block: 1em;
  font-family: monospace;
  white-space: pre;
}

/* Inline text elements */
article :where(b, strong) {
  font-weight: bold;
}

article :where(i, em, cite, dfn, address) {
  font-style: italic;
}

article :where(code, kbd, samp, tt) {
  font-family: monospace;
}

article :where(small) {
  font-size: 0.8em;
}

article :where(sub) {
  vertical-align: sub;
  font-size: 0.75em;
  line-height: 0;
}

article :where(sup) {
  vertical-align: super;
  font-size: 0.75em;
  line-height: 0;
}

article :where(del, s, strike) {
  text-decoration: line-through;
}

article :where(ins, u) {
  text-decoration: underline;
}

article :where(mark) {
  color: black;
  background: yellow;
}

article :where(abbr[title]) {
  text-decoration: underline dotted;
}

/* Links */
article a:link {
  color: #0000ee;
  text-decoration: underline;
}

article a:visited {
  color: #551a8b;
}

article a:active {
  color: #ff0000;
}

/* Tables */
article :where(table) {
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  text-indent: initial;
}

article :where(caption) {
  text-align: center;
}

article :where(th) {
  font-weight: bold;
  text-align: center;
}

article :where(td, th) {
  padding: 1px;
}

/* Other common elements */
article :where(details, summary) {
  display: block;
}

article :where(summary) {
  display: list-item;
}

article :where(img, audio, video, canvas, iframe, embed, object) {
  /* Their exact defaults and sizing depend on the element and browser. */
}
```

This covers common content elements, not every HTML tag. Form controls and some interactive elements use browser- and platform-specific styling, so they can’t be reproduced exactly with one cross-browser CSS file.