delete all attrs for html nodes

To delete **all** attributes for HTML nodes while preserving the tags and reconstructing back to Markdown, you just need to clear out the `node.properties` object during the traversal phase.

By setting `node.properties = {}`, you completely strip all attributes (like `class`, `style`, `id`, `data-*`, etc.) from the targets.

### The Complete Code Example

javascript

```
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeRemark from 'rehype-remark';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';

const markdownInput = `
# Document Title

<div class="container" id="main-wrap" style="padding: 10px;" data-analytics="track">
  This is inside an HTML block with many attributes.
  <span class="highlight" style="color: blue;">Inline HTML tags</span> are also cleaned.
</div>

This code block remains completely untouched:
\`\`\`html
<div class="container" id="main-wrap" style="padding: 10px;">Safe!</div>
\`\`\`
`;

// Custom plugin to clear out all attributes
function stripAllAttributes() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Clear all attributes by resetting the properties object
      node.properties = {};
    });
  };
}

async function run() {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    // Run the attribute stripper on the HTML AST layer
    .use(stripAllAttributes)
    .use(rehypeRemark, { allowDangerousHtml: true })
    .use(remarkStringify)
    .process(markdownInput);

  console.log('--- Reconstructed Markdown Output ---');
  console.log(String(result));
}

run();
```

Use code with caution.

***

### Reconstructed Markdown Output

All attributes are completely dropped from your raw inline HTML elements, turning `<div class="..." id="..." ...>` into a bare `<div>`. The code block HTML is still safely preserved:

markdown

````
# Document Title

<div>
  This is inside an HTML block with many attributes.
  <span>Inline HTML tags</span> are also cleaned.
</div>

This code block remains completely untouched:

```html
<div class="container" id="main-wrap" style="padding: 10px;">Safe!</div>
```
````

Use code with caution.

### Options to Narrow Down the Stripping

If deleting _every single attribute on every element_ turns out to be too aggressive, you can customize the rule inside the `visit` function:

- Target **specific tags only**: Add a conditional check like `if (node.tagName === 'div')` to keep properties on elements like `<a>` or `<img>`.
- Keep a **whitelist of safe attributes**: Instead of `node.properties = {}`, you can cherry-pick items to keep by pulling them out before clearing the object.

Let me know if you need to **keep specific attributes** (like `href` for links or `src` for images) so I can show you how to write a whitelist wrapper!

- [link](https://www.drupal.org/project/drupal/issues/2325517)\
  Add methods for adding/removing attributes (not classes) on Attribute objects\
  Aug 21, 2014 — Problem/Motivation \[#2285451] added methods on the Attribute class to add and remove CSS classes. This is super useful and a key p...\
  \
  \
  Drupal