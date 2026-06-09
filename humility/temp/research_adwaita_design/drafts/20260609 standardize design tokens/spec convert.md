convert to an object first, use a good yaml to json library if it's not nodejs builtin

iterate all keys

value is special

these are the same, though you will never write the latter unless you want have variants

```
my-key: foo
```

```
my-key: 
  value: foo
```

for literal values, 

i

```
ref:
  foo:
    bar: 123
```

o

```
:root {
  --ref-foo-bar: 123;
}
```

for sys that reference ref, 

i

```
sys:
  foo:
    bar: {ref.light.bar-1}
```

o

```
:root {
  --sys-foo-bar: var(--ref-light-bar-1)
}
```

handle value and modes properly

e

```css
:root, [data-theme="light"], [data-density="comfortable"] {
  --sys-bg-color
  --sys-text-color
  --sys-foo
  --sys-bar
}

[data-theme="dark"] {
  --sys-bg-color
  --sys-text-color
}

[data-density="compact"] {
  --sys-foo
  --sys-bar
}
```

to process input and output:

```ts
import fs from 'node:fs/promises';

async function main() {
  // 1. Await the complete standard input stream
  const input = await fs.readFile(0, 'utf-8');

  // 2. Process your data
  const data = input.toUpperCase();

  // 3. Await the output write straight to the redirection file
  await fs.writeFile(1, data);
}

main();
```

usage

```
br convert.ts < adwaita.yaml > adwaita_test_output.css
```
