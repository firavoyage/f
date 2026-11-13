# npm md to html libs

5:46 AM

The most popular and reliable **npm libraries for converting Markdown to HTML** fall into a few clear categories depending on whether you need speed, custom plugins, or raw simplicity.

Here is a direct comparison of the top choices available in the JavaScript ecosystem:

### 📊 Direct Comparison

| Library                                                           | Primary Benefit                   | Best For                                            | Architecture               |
| ----------------------------------------------------------------- | --------------------------------- | --------------------------------------------------- | -------------------------- |
| [**marked**](https://www.npmjs.com/package/marked)                | **Lightning speed** & lightweight | Standard applications, client-side rendering        | Monolithic compiler        |
| [**markdown-it**](https://www.npmjs.com/package/markdown-to-html) | **Highly extensible**             | Apps needing plugins (emojis, math, checkboxes)     | Token-based parser         |
| **remark** / rehype                                               | **Full AST control** & ecosystem  | Complex MDX pipelines, linting, code transformation | Abstract Syntax Tree (AST) |
| **showdown**                                                      | **Bidirectional conversion**      | Converting MD ↔ HTML back and forth                 | RegEx-based                |

---

### 1\. Marked (Most Popular & Fastest)

`marked` is a low-level compiler built for speed. It is the most widely deployed Markdown parser, trusted by platforms like Ghost and Docusaurus. [](https://www.npmjs.com/package/marked)

* **Installation:** `npm install marked`
* **Basic Code Snippet:**  
javascript  
```  
import { marked } from 'marked';  
const rawMarkdown = '# Hello World\nThis is **bold** text.';  
const html = marked.parse(rawMarkdown);  
console.log(html);  
// Output: <h1>Hello World</h1><p>This is <strong>bold</strong> text.</p>  
```  

* _Note:_ `marked` does not sanitize HTML by default. It is highly recommended to pair it with a library like `dompurify` to protect against XSS attacks. [](https://www.npmjs.com/package/marked)

### 2\. Markdown-it (Best for Extensions)

`markdown-it` is robust, adheres strictly to the CommonMark specification, and features an massive ecosystem of community plugins. [](https://medium.com/@paolo.c/markdown-it-a-remarkable-markdown-parser-to-html-dd12c3a32a1a)

* **Installation:** `npm install markdown-it`
* **Basic Code Snippet:**  
javascript  
```  
import MarkdownIt from 'markdown-it';  
const md = new MarkdownIt();  
const html = md.render('# Hello World');  
```  

* **Why pick it:** If you need features like GitHub Flavored Markdown (GFM) footnotes, syntax-highlighted code blocks, or custom containers, `markdown-it` plugins handle it effortlessly. [](https://medium.com/@paolo.c/markdown-it-a-remarkable-markdown-parser-to-html-dd12c3a32a1a)

### 3\. Unified Ecosystem (`remark` \+ `rehype`)

If you are building a modern, complex text pipeline (like a Gatsby framework or a personal blog platform), you should use the **Unified** collective. It parses Markdown into a syntax tree (`remark`), converts it into an HTML tree (`rehype`), and compiles it to an HTML string. [](https://www.npmjs.com/@wcj/markdown-to-html)

* **Installation:** `npm install remark-parse remark-rehype rehype-stringify unified`
* **Basic Code Snippet:**  
javascript  
```  
import { unified } from 'unified';  
import remarkParse from 'remark-parse';  
import remarkRehype from 'remark-rehype';  
import rehypeStringify from 'rehype-stringify';  
const file = await unified()  
  .use(remarkParse)     // Parse markdown  
  .use(remarkRehype)    // Turn into HTML hierarchy  
  .use(rehypeStringify) // Output string  
  .process('# Hello World');  
console.log(String(file));  
```  


### 4\. Special Use-Cases

* **`@wcj/markdown-to-html`**: A great all-in-one modern ESM choice that wraps `unified` but comes pre-configured with support for KaTeX math and pre-styled CSS elements out of the box. [](https://www.npmjs.com/@wcj/markdown-to-html)
* **[@udx/md2html](https://www.npmjs.com/package/@udx/md2html)**: Ideal if you want a tool that stitches multiple files together into a single, beautifully formatted "magazine-quality" layout or print-ready PDF.

To help narrow down the best snippet for your project, let me know:

* Will this run on the **client browser**, a **Node.js server**, or as a **CLI tool**?
* Do you require extra features like **code syntax highlighting**, **math equations**, or **HTML sanitization**?

* [](https://www.npmjs.com/package/marked)  
NPM  
marked  
Marked does not sanitize the output HTML. Please use a sanitize library, like DOMPurify (recommended), sanitize-html or insane on ...
* [](https://www.npmjs.com/@wcj/markdown-to-html)  
NPM  
@wcj/markdown-to-html - npm  
Converts markdown text to HTML. \* Installation This package v2+ is ESM only: Node 12+ is needed to use it and it must be import in...
* [](https://github.com/showdownjs/showdown)  
GitHub  
GitHub - showdownjs/showdown: A bidirectional Markdown to HTML to Markdown converter written in Javascript · GitHub  
Showdown is a bidirectional JavaScript Markdown-to-HTML and HTML-to-Markdown converter based on John Gruber's work, usable client-

Show all

# how to config marked to treat newline wo trailing spaces as newline

To make Marked treat a single newline (`\n`) as a `<br>` tag without needing two trailing spaces, set the **`breaks` option to `true`**. This requires the `gfm` (GitHub Flavored Markdown) option to also be `true`, which is enabled by default. [](https://marked.js.org/using%5Fadvanced)

### Configuration Methods

* **Global configuration with `marked.use()`.** This is the recommended method in modern versions of Marked.  
javascript  
```  
import { marked } from 'marked';  
marked.use({  
  gfm: true, // true by default  
  breaks: true  
});  
const html = marked.parse('Line 1\nLine 2');  
// Output: <p>Line 1<br>Line 2</p>  
```  

* **Per-call configuration.** Pass the options directly into `marked.parse()` if you only want this behavior for specific strings.  
javascript  
```  
const html = marked.parse('Line 1\nLine 2', {  
  gfm: true,  
  breaks: true  
});  
```  

* **CLI usage.** Pass a JSON config file or flag when running Marked from the command line. [](https://marked.js.org/)  
bash  
```  
marked -s "Line 1\nLine 2" --breaks  
```  


### Important Caveats

* **Avoid `pedantic: true`.** If you enable `pedantic` mode, it overrides and disables `gfm`, which prevents `breaks: true` from working.
* **Multiple consecutive newlines.** Setting `breaks: true` only converts single newlines within a paragraph into `<br>` tags. Two or more consecutive newlines (`\n\n`) will still create a separate `<p>` paragraph block rather than multiple `<br>` tags. [](https://marked.js.org/using%5Fadvanced)

If you are trying to preserve **multiple consecutive blank lines** (like `\n\n\n`) as extra `<br>` tags rather than collapsing them into a single paragraph break, let me know and I can show you how to write a custom **Marked tokenizer extension** for that.

* [](https://marked.js.org/using%5Fadvanced)  
Marked Documentation  
Using Advanced - Marked Documentation  
pedantic, boolean, false, If true, conform to the original markdown.pl as much as possible. Don't fix original markdown bugs or be...
* [](https://marked.js.org/)  
Marked Documentation  
Marked Documentation  
remove the most common zerowidth characters from the start of the file marked.parse( Example with custom config echo … Marked in t...
* [](https://marked.js.org/using%5Fpro)  
Marked Documentation  
Using Pro - Marked Documentation  
a Marked Extension is the top-level plugin configuration, marked.use(extension) is the recommended way to extend Marked. The exten...
