c

```css
:root {
  --ref-color-palette-blue-1: #99c1f1;
  --ref-color-palette-red-1: #f66151;
  --ref-spacing-space-1: 0.25rem;

  --sys-color-bg-primary: var(--ref-color-palette-blue-1);
}
[data-theme="dark"] {
  --sys-color-accent: var(--ref-palette-red-1);
  --sys-color-text-primary: #ffffff;
}
[data-density="compact"] {
  /* density tokens for compact */
}
```

e

<!-- explicit over implicit -->

<!-- no empty rulesets -->

```css
:root, [data-theme="light"], [data-density="comfortable"] {
  --ref-color-palette-blue-1: #99c1f1;
  --ref-color-palette-red-1: #f66151;
  --ref-spacing-space-1: 0.25rem;

  --sys-color-bg-primary: var(--ref-color-palette-blue-1);
}
[data-theme="dark"] {
  --sys-color-accent: var(--ref-palette-red-1);
  --sys-color-text-primary: #ffffff;
}
```
