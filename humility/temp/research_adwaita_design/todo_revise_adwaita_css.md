read and edit adwaita.css. only touch this file.

keep it dry.

currently, it's like

```
root {
  ...
}

dark: root {
  ...
}
```

make it like

```
root {
  primitives, incl. accent blue, orange-1, light-2, spacing, fonts, etc.
}

root {
  semantic colors the same across light and dark.

  e.g. seems `#e01b24` is not dry. use red 3 instead.
}

root {
  semantic colors for light mode

  only reference primitives (no new definition), e.g. card fg, card bg
}

dark: root {
  semantic colors for dark mode

  ideally, it might be parallel to the light mode
}
```

ive seen `#fff` appearing many times. reference them as light 1 instead.

for each repeating, make it dry.
