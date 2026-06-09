# convert

convert design token yaml to css custom properties.

## how to write the yaml

```yaml
modes:
  theme:
    - light       # first item is default
    - dark
  density:
    - comfortable
    - compact

ref:
  # primitives - literal values
  palette:
    blue-1: "#99c1f1"
    red-1: "#f66151"
  spacing:
    space-1: "0.25rem"

sys:
  # semantic - must reference ref, may have variants
  color:
    accent:
      value: "{ref.palette.blue-1}"
      dark: "{ref.palette.red-1}"
    bg-primary:
      "{ref.palette.blue-1}"    # shorthand when only default value
```

### key rules

- `modes` defines available variants. first item in each mode is default.
- `ref` contains primitive tokens. each key becomes `--ref-{path}-{key}`.
- `sys` contains semantic tokens. each key becomes `--sys-{path}-{key}`.
- **sys values must reference ref** - never use raw literals.
- sys values can be:
  - shorthand referencing ref: `accent: "{ref.palette.blue-1}"`
  - object with `value` and variants: `accent: { value: "{ref.palette.blue-1}", dark: "{ref.palette.red-1}" }`
- reference ref values with `{ref.path.to.key}` syntax. dots become hyphens in css.

## how to convert

```sh
br convert.ts < input.yaml > output.css
```

## expected output

```css
:root {
  --ref-palette-blue-1: #99c1f1;
  --ref-palette-red-1: #f66151;
  --ref-spacing-space-1: 0.25rem;
}

:root, [data-theme="light"], [data-density="comfortable"] {
  --sys-color-accent: var(--ref-palette-blue-1);
  --sys-color-bg-primary: var(--ref-palette-blue-1);
}

[data-theme="dark"] {
  --sys-color-accent: var(--ref-palette-red-1);
}
```

### output rules

- all ref tokens go in `:root`.
- default sys tokens go in a selector combining `:root` + default theme + default density.
- variant sys tokens (those with `dark` key) go in `[data-theme="dark"]`.
- rulesets with no tokens are omitted.