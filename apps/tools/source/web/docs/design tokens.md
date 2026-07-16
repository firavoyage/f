## default value

if you want to change the default mode, do not change the yaml, or the compiled css

```yaml
modes:
  theme:
    - light # first item = value (default)
    - dark
sys:
  bg:
    primary:
      value: "{ref.palette.light-1}" # value is an identifier that it's final, no deeper nested children
      dark: "{ref.palette.dark-7}" # for example
```

let's say you want to change light default to dark

force a data-theme: dark on html