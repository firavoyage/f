# write ts fn trim, trim start, trim end s char = whitespace. use snake case.

```ts
function is_trim_char(ch: string, chars?: string): boolean {
  return chars === undefined
    ? /^\s$/u.test(ch)
    : Array.from(chars).includes(ch);
}

export function trim_start(s: string, chars?: string): string {
  const points = Array.from(s);
  let start = 0;

  while (start < points.length && is_trim_char(points[start], chars)) {
    start++;
  }

  return points.slice(start).join("");
}

export function trim_end(s: string, chars?: string): string {
  const points = Array.from(s);
  let end = points.length;

  while (end > 0 && is_trim_char(points[end - 1], chars)) {
    end--;
  }

  return points.slice(0, end).join("");
}

export function trim(s: string, chars?: string): string {
  return trim_end(trim_start(s, chars), chars);
}
```

Without `chars`, the functions trim whitespace. If supplied, `chars` is treated as a set of characters to trim.