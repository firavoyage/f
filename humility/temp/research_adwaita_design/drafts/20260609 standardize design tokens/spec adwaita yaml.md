c

```
sys:
  light:
  dark:
```

e

```
ref:
  ...
sys:
  color:
    bg-primary:
      value: "{ref.color.mycolor-1}" # no key would end w "value"
      dark: "..."
modes:
  theme:
    - light # first item is default
    - dark
  density:
    - comfortable
    - compact
    - cozy
```

variant could only occur on sys layer

remove comp layer completely.

enforce: all sys must reference ref. if raw value seen, copy to ref and reference. prefer to make refs end with a number, like "light-1", "radius-4".

refactor the taxonomy: put the broader category first, like `color-fg-primary` over `primary-text-color`.

rename: on ref layer, name colors as `ref-palette-blue-1`, on sys, name as `sys-color-accent`
