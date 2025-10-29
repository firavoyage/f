# 1

how to write footnotes in markdown

---

Footnotes in Markdown are supported in certain flavors like GitHub Flavored Markdown (GFM) and Markdown Extra. Here's how to create them:

## Basic Footnote Syntax

### 1. Footnote Reference

Place a footnote reference in your text using this format:

```markdown
Here's a sentence with a footnote.[^1]

Another sentence with multiple footnotes.[^2][^3]
```

### 2. Footnote Definition

Define your footnotes at the bottom of your document:

```markdown
[^1]: This is the first footnote.
[^2]: This is the second footnote.
[^3]:
    This footnote has multiple lines.
    Just indent subsequent lines with 4 spaces.
```

## Complete Example

```markdown
# My Document

This is a sentence with a footnote reference.[^1]

Here's another reference to a different footnote.[^custom-id]

You can also have multiple references to the same footnote.[^1]

## References

[^1]:
    This is the first footnote. It can span multiple lines
    as long as you indent the additional lines.

[^custom-id]:
    This is a footnote with a custom identifier.
    You can use any label you want for footnotes.
```

## Important Notes

- **Placement**: Footnote definitions are typically placed at the bottom of the document
- **Rendering**: Footnotes may not display in all Markdown viewers
- **Compatibility**: Best supported in:
  - GitHub Flavored Markdown
  - Markdown Extra
  - Typora
  - Some static site generators (like Jekyll with kramdown)

## Alternative Method (HTML)

If your Markdown processor doesn't support footnotes, you can use HTML:

```markdown
This is a sentence with a footnote.<sup><a href="#fn1" id="ref1">1</a></sup>

<div class="footnotes">
  <ol>
    <li id="fn1">This is the footnote text. <a href="#ref1">↩</a></li>
  </ol>
</div>
```

The exact syntax might vary slightly depending on your Markdown processor, so check your specific implementation's documentation.

# 2

how to create a css selector that select all blockquotes with at least one direct children that have class .footnote

---

Here are several CSS selector options to select blockquotes with at least one direct child that has the class `.footnote`:

## Option 1: Direct Child Combinator

```css
blockquote > .footnote {
  /* This selects the .footnote elements that are direct children of blockquotes */
}
```

## Option 2: Using `:has()` Selector (Modern Approach)

```css
blockquote:has(> .footnote) {
  /* This selects the blockquotes that have direct children with class .footnote */
  border-color: #ff6b6b;
  background-color: #f8f9fa;
}
```

## Option 3: If you want to style the blockquote based on the presence of .footnote

```css
/* Selects blockquotes that contain .footnote as direct children */
blockquote:has(> .footnote) {
  border-left: 4px solid #007cba;
  padding: 1em;
  margin: 1em 0;
}
```

## Complete Example

```html
<style>
  /* Style blockquotes that have direct .footnote children */
  blockquote:has(> .footnote) {
    border-left: 4px solid #e74c3c;
    background-color: #fdf2f2;
    padding: 15px;
    margin: 20px 0;
  }

  /* Optional: Style the footnote itself */
  blockquote > .footnote {
    font-style: italic;
    color: #666;
    border-top: 1px solid #ddd;
    padding-top: 10px;
    margin-top: 10px;
  }
</style>

<!-- This blockquote WILL be selected -->
<blockquote>
  <p>This is a regular quote.</p>
  <div class="footnote">This is a footnote</div>
</blockquote>

<!-- This blockquote will NOT be selected (nested) -->
<blockquote>
  <div>
    <div class="footnote">This footnote is not a direct child</div>
  </div>
</blockquote>

<!-- This blockquote will NOT be selected (no .footnote) -->
<blockquote>
  <p>This is just a regular blockquote without footnotes.</p>
</blockquote>
```

## Browser Compatibility Note

The `:has()` selector is relatively new but has good browser support:

- ✅ Chrome 105+
- ✅ Safari 15.4+
- ✅ Firefox 121+
- ✅ Edge 105+

For older browsers, you might need JavaScript:

```javascript
// JavaScript fallback
document.querySelectorAll("blockquote").forEach((blockquote) => {
  const hasDirectFootnote = Array.from(blockquote.children).some((child) =>
    child.classList.contains("footnote")
  );
  if (hasDirectFootnote) {
    blockquote.classList.add("has-direct-footnote");
  }
});
```

Then use CSS:

```css
blockquote.has-direct-footnote {
  /* Your styles here */
}
```

The `blockquote:has(> .footnote)` selector is the most straightforward and modern solution for this requirement.
