# how to set cursor position or selection for text input in js

## how to set cursor position or selection for text input in js

For a text `<input>` or `<textarea>`, use `setSelectionRange(start, end)`:

```js
const input = document.querySelector("#myInput");

input.focus();

// Place the cursor at character 5:
input.setSelectionRange(5, 5);

// Select characters 2 through 6:
input.setSelectionRange(2, 6);
```

To place the cursor at the end:

```js
input.focus();
const end = input.value.length;
input.setSelectionRange(end, end);
```

You can read the current selection with `selectionStart` and `selectionEnd`:

```js
const start = input.selectionStart;
const end = input.selectionEnd;
```

This works for text-like input types (such as `text`, `search`, `tel`, and `url`) and textareas—not types like `number`. The element generally needs to be focused for the selection to be visible.

## example

```html
<input id="message" value="Hello world">
<button id="select">Select “world”</button>

<script>
  const input = document.querySelector("#message");

  document.querySelector("#select").addEventListener("click", () => {
    input.focus();

    // Select "world" (characters 6 through 11)
    input.setSelectionRange(6, 11);
  });
</script>
```

To put the cursor at the end instead, use:

```js
input.focus();
input.setSelectionRange(input.value.length, input.value.length);
```

## how are chars indexed, where does it position if start and end are the same

Character positions are **zero-based**: position `0` is before the first character, position `1` is between the first and second, and so on.

```text
"Hello"
 012345   // positions, not character indexes
```

So for `"Hello"`, `setSelectionRange(2, 2)` puts the cursor between `e` and `l`:

```js
input.setSelectionRange(2, 2);
```

When `start` and `end` are the same, no text is selected—the caret is placed at that position. A position equal to `input.value.length` places it after the last character.

## how to mimic (shift) up/downarrow in textarea

If you mean **programmatically behave like Shift+↑/↓**, a dispatched keyboard event won’t move the textarea caret—the browser doesn’t perform the default action for synthetic events. You can update the selection with `setSelectionRange()` instead.

Here’s an example that extends the selection to the same column on the **previous or next newline-separated line**:

```html
<textarea id="text" rows="6" cols="30">First line
Second line
Third line
Fourth line</textarea>

<script>
const textarea = document.querySelector("#text");

textarea.addEventListener("keydown", (event) => {
  if (!event.shiftKey || !["ArrowUp", "ArrowDown"].includes(event.key)) return;

  event.preventDefault();
  moveSelectionVertically(event.key === "ArrowUp" ? -1 : 1);
});

function moveSelectionVertically(delta) {
  const text = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const direction = textarea.selectionDirection;

  // The selection's fixed end (anchor) and moving end (focus).
  const anchor = direction === "backward" ? end : start;
  const focus = direction === "backward" ? start : end;

  const lineStarts = [0];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "\n") lineStarts.push(i + 1);
  }

  let line = 0;
  for (let i = 1; i < lineStarts.length; i++) {
    if (lineStarts[i] > focus) break;
    line = i;
  }

  const targetLine = line + delta;
  if (targetLine < 0 || targetLine >= lineStarts.length) return;

  const currentColumn = focus - lineStarts[line];
  const targetStart = lineStarts[targetLine];
  const targetEnd = targetLine + 1 < lineStarts.length
    ? lineStarts[targetLine + 1] - 1
    : text.length;

  const target = Math.min(targetStart + currentColumn, targetEnd);

  textarea.setSelectionRange(
    Math.min(anchor, target),
    Math.max(anchor, target),
    target < anchor ? "backward" : "forward"
  );
}
</script>
```

This handles newline-separated lines, not lines created by **visual wrapping**. Matching the browser’s wrapped-line behavior requires measuring the caret’s visual position.

## what if it wraps

If the textarea wraps, the earlier example won’t match browser behavior—it treats only `\n` as a line break. A wrapped line is determined by the rendered width, font, and styling.

For real keyboard input, let the browser handle it: **don’t call `preventDefault()`** for Shift+↑/↓. The browser already moves through visually wrapped lines and preserves the selection anchor.

If you need to move the selection from JavaScript, `setSelectionRange()` has no “move one visual line” option. You must measure the rendered text (usually with a hidden mirror element) to find the character position at the same horizontal coordinate on the adjacent visual line. Dispatching a synthetic `keydown` won’t trigger the browser’s native caret movement.

## does vscode monaco editor use such mirror element tech

No—not in the same way as the mirror-element technique for a plain `<textarea>`.

Monaco renders the editor itself and tracks cursor positions in its editor model. For wrapped text, it maps between the document’s line/column positions and the **visual (wrapped) lines**, then moves the selection accordingly. It also uses a hidden textarea to receive keyboard input, but that textarea isn’t used to measure wrapped lines or control the visible cursor.

# how to sort array w custom cmp in js

## how to sort array w custom cmp in js

Use `Array.prototype.sort()` with a comparator function. The comparator should return a negative number if `a` goes first, `0` if they’re equal, or a positive number if `b` goes first.

```js
const numbers = [10, 2, 30, 4];

numbers.sort((a, b) => a - b); // ascending: [2, 4, 10, 30]
numbers.sort((a, b) => b - a); // descending: [30, 10, 4, 2]
```

For a custom rule, compare the values however you like:

```js
const people = [
  { name: "Sam", age: 30 },
  { name: "Alex", age: 20 },
  { name: "Jo", age: 25 },
];

people.sort((a, b) => a.age - b.age); // sort by age
```

`sort()` changes the original array. To sort a copy instead:

```js
const sorted = [...numbers].sort((a, b) => a - b);
```

## how does it sort for what cmp returns

For each pair `a` and `b`, JavaScript uses the comparator’s return value like this:

- **Less than `0`**: put `a` before `b`
- **Greater than `0`**: put `b` before `a`
- **`0`**: treat them as equal for sorting

Example:

```js
[3, 1, 2].sort((a, b) => a - b);
```

When comparing `3` and `1`, the comparator returns `2` (positive), so `3` goes after `1`. When comparing `1` and `2`, it returns `-1`, so `1` goes before `2`.

The comparator may be called multiple times with different pairs, so it should give consistent results.

# write ts fn trim, trim start, trim end s char = whitespace. use snake case.

## write ts fn trim, trim start, trim end s char = whitespace. use snake case.

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

# write ts fn trim, trim start, trim end s char = ' '. use snake case.

## write ts fn trim, trim start, trim end s char = ' '. use snake case.

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