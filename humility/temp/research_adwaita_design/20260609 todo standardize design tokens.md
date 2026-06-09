complete all tasks in one go no stop. make sure your work satisfies the constraints.

only complete tasks below. do not read or write any files/folders not explicitly listed. do not overwork or overengineer.

<!-- c: current, e: expected -->

read

- adwaita.yaml

modify

- adwaita.yaml

spec

c

```
sys:
  light:
  dark:
```

e

```
sys:
  color:
    primary-bg:
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

write

- convert.ts

spec

```
import { stdin, stdout } from 'node:process';
```

usage

```
br convert.ts < s
```
