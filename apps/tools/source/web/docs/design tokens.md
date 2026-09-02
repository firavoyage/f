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

as an object of arrays, the keys are called modes (a.k.a. context)

## structure of tokens



# compile

run `b convert` and you will get a generated css file alongside each file, named the same.

all yaml inside `design/` folder are included (except anything under `legacy/`).

> you may create a file watcher to auto compile after change. (if you use vscode, it's recommended to set auto save to "when focus change")

# summary

structure follows purpose.

you would organize design tokens in a way that maps/fits your mental model, as simple as possible.
