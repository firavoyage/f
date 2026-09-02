a guide on design tokens

# create

design tokens are written in yaml, inside which there are modes and tokens

## structure of modes

```yaml
modes:
  theme:
    - light
    - dark
  accent:
    - blue
    - teal
    - green
    - yellow
    - orange
    - orange-ubuntu
    - red
    - pink
    - purple
    - slate
  density:
    - comfortable
    - cozy
    - compact
  window:
    - active
    - inactive
```

modes, if exist, are typically placed at the top of the file

these are the contexts

as an object of arrays, the keys are called modes and the elements of each are called variants.

the first element in the array is the default variant

```css
:root {
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-7: 1.75rem;
  --spacing-8: 2rem;
  --spacing-9: 2.25rem;
  --spacing-10: 2.5rem;
  --spacing-11: 2.75rem;
  --spacing-12: 3rem;
  --spacing-14: 3.5rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-28: 7rem;
  --spacing-32: 8rem;
  --spacing-36: 9rem;
  --spacing-40: 10rem;
  --spacing-44: 11rem;
  --spacing-48: 12rem;
  --spacing-52: 13rem;
  --spacing-56: 14rem;
  --spacing-60: 15rem;
  --spacing-64: 16rem;
  --spacing-72: 18rem;
  --spacing-80: 20rem;
  --spacing-96: 24rem;
}

:root, [data-density="comfortable"], [density="comfortable"] {
  --page-whitespace: var(--spacing-2);
  --titlebar-height: var(--spacing-12);
  --sidebar-width: var(--spacing-72);
}

[data-density="cozy"], [density="cozy"] {
  --page-whitespace: var(--spacing-1);
  --titlebar-height: var(--spacing-10);
  --sidebar-width: var(--spacing-64);
}

[data-density="compact"], [density="compact"] {
  --page-whitespace: var(--spacing-0\.5);
  --titlebar-height: var(--spacing-8);
  --sidebar-width: var(--spacing-60);
}
```

## structure of tokens



# compile

run `b convert` and you will get a generated css file alongside each file, named the same.

all yaml inside `design/` folder are included (except anything under `legacy/`).

> you may create a file watcher to auto compile after change. (if you use vscode, it's recommended to set auto save to "when focus change")

# summary

structure follows purpose.

you would organize design tokens in a way that maps/fits your mental model, as simple as possible.
