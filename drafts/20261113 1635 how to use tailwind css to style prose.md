# how to use tailwind css to style prose

## how to use tailwind css to style prose

Use the **Tailwind Typography** plugin. It adds the `prose` class, which styles semantic HTML—headings, paragraphs, lists, links, and more—without requiring utility classes on each element.

### Install

**Tailwind CSS v4**

```bash
npm install -D @tailwindcss/typography
```

Then add the plugin to your CSS:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

**Tailwind CSS v3**

```bash
npm install -D @tailwindcss/typography
```

Add it to `tailwind.config.js`:

```js
module.exports = {
  // ...
  plugins: [require("@tailwindcss/typography")],
};
```

### Use `prose`

```jsx
<article className="prose">
  <h1>Article title</h1>
  <p>This paragraph and the other semantic elements are styled automatically.</p>
  <ul>
    <li>A list item</li>
    <li>Another list item</li>
  </ul>
</article>
```

You can adjust the size, width, and color:

```jsx
<article className="prose prose-lg prose-blue max-w-none">
  {/* article content */}
</article>
```

- `prose-sm`, `prose-lg`, `prose-xl`, `prose-2xl` change the type scale.
- `max-w-none` removes the default maximum width.
- `prose-gray`, `prose-slate`, `prose-blue`, and similar classes change the color theme.
- `dark:prose-invert` provides light-colored text for dark backgrounds:

```jsx
<article className="prose dark:prose-invert">
  {/* article content */}
</article>
```

To customize a specific element, use a modifier such as `prose-headings:font-semibold` or `prose-a:text-blue-600`. The plugin also provides `not-prose` to keep a nested element outside the prose styling.

## what does it apply on different semantic tags

`prose` styles common HTML elements **inside the element that has the class**. For example:

```html
<article class="prose">
  <h1>Title</h1>
  <p>A paragraph with <strong>bold</strong> text and a <a href="#">link</a>.</p>
  <ul><li>A list item</li></ul>
</article>
```

The Typography plugin applies defaults roughly like these:

| Elements | Typical styling |
|---|---|
| `h1`–`h6` | Larger, heavier headings with spacing |
| `p` | Readable line height and paragraph spacing |
| `a` | Link color and underline |
| `strong`, `b` | Bold text |
| `em`, `i` | Italic text |
| `ul`, `ol`, `li` | List markers, indentation, and spacing |
| `blockquote` | Indented text with a left border |
| `code` | Monospace text with a distinct background or color |
| `pre` | Styled code block with padding and overflow handling |
| `hr` | Spaced horizontal divider |
| `table`, `th`, `td` | Table spacing, borders, and alignment |
| `img`, `figure`, `figcaption` | Image and caption spacing and presentation |

It doesn’t style every HTML tag; it targets a set of common content elements. You can customize individual types with modifier utilities:

```html
<article class="prose prose-headings:font-semibold prose-a:text-blue-600">
  ...
</article>
```

Use `not-prose` for a nested area you don’t want styled by the parent:

```html
<article class="prose">
  <p>Styled as prose.</p>
  <div class="not-prose">Not styled by the prose rules.</div>
</article>
```

## what exact classes does it apply on different semantic tags

## 


**It doesn’t add classes to the semantic tags.** You put `prose` on a container, and the Typography plugin’s CSS styles matching elements inside it.

For example:

```html
<article class="prose">
  <h1>Title</h1>
  <p>Text with a <a href="#">link</a>.</p>
</article>
```

The generated CSS uses selectors along these lines:

```css
.prose :where(h1):not(:where([class~="not-prose"] *)) { ... }
.prose :where(p):not(:where([class~="not-prose"] *))  { ... }
.prose :where(a):not(:where([class~="not-prose"] *))  { ... }
```

The plugin applies default typography rules to elements such as `h1`–`h6`, `p`, `a`, `strong`, `em`, `ul`, `ol`, `li`, `blockquote`, `code`, `pre`, `hr`, and table elements. The exact declarations depend on the Typography plugin version and any theme or customization.

Classes like `prose-headings:font-semibold` are Tailwind **modifier utilities** you put on an element; they aren’t classes the plugin adds to headings. `not-prose` is an exception you can put on a descendant to opt it out of the container’s prose styling.