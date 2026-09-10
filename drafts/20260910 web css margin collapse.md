# .

```css
.checkbox {
  padding-block: var(--page-whitespace);
  padding-inline: var(--page-whitespace-sm);

  margin-inline: var(--page-whitespace-sm);
  /* the ones after the same component */
  & + & {
    margin-inline-start: 0;
  }
  /* the ones before the same component */
  &:has(+ &) {
    margin-inline-end: 0;
  }
}
```


