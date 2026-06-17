<!-- be flexible, just write as i like -->

markdown footnotes

To create footnotes in Markdown, use a caret and an identifier inside square brackets `[^1]` for the in-text reference, and pair it with a matching definition block `[^1]: Text`. \[[1](https://www.markdownguide.org/extended-syntax/)]

While footnotes are considered part of Markdown's extended syntax rather than the original core specification, they are natively supported by platforms like GitHub, [Obsidian](https://obsidian.md/help/syntax), and [Ghost](https://ghost.org/help/using-markdown/). \[[1](https://obsidian.md/help/syntax), [2](https://ghost.org/help/using-markdown/), [3](https://github.com/Python-Markdown/markdown/blob/master/docs/extensions/footnotes.md), [4](https://youtrack.jetbrains.com/projects/IJPL/issues/IJPL-91141/Support-footnotes), [5](https://github.com/jupyter/notebook/issues/1287)]

### Basic Footnote Syntax

The syntax requires two matching components located within your document: \[[1](https://docs.zettlr.com/de/reference/markdown-basics/), [2](https://hilo.hawaii.edu/help/cms/format.php)]

markdown

```
Here is a sentence that requires a footnote.[^1]

And here is another sentence with a named text identifier.[^note]

[^1]: This is the first footnote text.
[^note]: Identifiers can use words, but they cannot contain spaces.
```

Use code with caution.

### Key Rules and Formatting

- **Automatic Sequential Numbering**: Regardless of what names or numbers you write inside the brackets (e.g., `[^abc]` or `[^99]`), the parser automatically renumbers them sequentially (1, 2, 3...) based on their order of appearance in the text.
- **Placement Flexibility**: You can place the footnote definitions anywhere in your document (directly under the paragraph or grouped at the very bottom). The Markdown parser will automatically extract them and render them neatly at the bottom of the published page.
- **Multi-line and Multi-paragraph Footnotes**: To span a single footnote across multiple paragraphs or add code blocks, indent the subsequent lines by 4 spaces or 1 tab. \[[1](https://pandoc.org/demo/example33/8.19-footnotes.html), [2](https://docs.github.com/enterprise-cloud@latest/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), [3](https://www.luisllamas.es/en/how-to-use-references-footnotes-in-markdown/), [4](https://python-markdown.github.io/extensions/footnotes/), [5](https://www.markdownguide.org/extended-syntax/)]

markdown

```
This sentence points to a long footnote.[^long]

[^long]: This is the first paragraph of the footnote.

    This is the second paragraph. It must be indented.

    `code blocks work here too`
```

Use code with caution.

### Advanced: Inline Footnotes

Some specific parsers (like Pandoc or [R Markdown](https://crimebythenumbers.com/r-markdown.html)) support inline footnotes where you do not need a separate definition block: \[[1](https://www.youtube.com/watch?v=HYhNNrpn9Ck), [2](https://www.ii.com/links-footnotes-markdown/)]

markdown

```
This is a sentence containing an inline footnote ^[The footnote content goes right here inside the brackets].
```

Use code with caution.

If you are currently setting up a document, let me know **which platform or editor** you are using so I can verify its exact footnote compatibility for you.

- [link](https://www.markdownguide.org/extended-syntax/)\
  Extended Syntax - Markdown Guide\
  \`\`\`json { "firstName": "John", "lastName": "Smith", "age": 25 } \`\`\` The rendered output looks like this: { "firstName": "John", "l...\
  Markdown Guide
- [link](https://www.youtube.com/watch?v=HYhNNrpn9Ck)\
  Footnotes in RMarkdown with Pandoc\
  Jan 22, 2020 — using footnotes in our markdown documents. really great thing really cool. and you got a couple options at your disposal. now the ...\
  4:49\
  YouTube·Bryan Jenks
- [link](https://python-markdown.github.io/extensions/footnotes/)\
  Footnotes — Python-Markdown 3.10.2 documentation\
  Example: Footnotes have a name, a reference\[^1], and a definition\[^word]. \[^1]: This is a footnote definition. \[^word]: A footnote...\
  GitHub

Show all