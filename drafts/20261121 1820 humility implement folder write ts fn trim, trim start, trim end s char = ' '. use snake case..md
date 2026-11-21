# write ts fn trim, trim start, trim end s char = ' '. use snake case.

```ts
function trim_start(s: string, char: string = ' '): string {
  if (char === '') return s;

  while (s.startsWith(char)) {
    s = s.slice(char.length);
  }
  return s;
}

function trim_end(s: string, char: string = ' '): string {
  if (char === '') return s;

  while (s.endsWith(char)) {
    s = s.slice(0, -char.length);
  }
  return s;
}

function trim(s: string, char: string = ' '): string {
  return trim_end(trim_start(s, char), char);
}
```