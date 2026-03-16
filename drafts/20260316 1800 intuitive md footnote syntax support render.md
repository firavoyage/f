# 1

markdown footnote syntax

---

Markdown footnotes use a two-part system consisting of an inline marker where the reference appears and a definition (usually at the bottom of the document) where the actual text resides. [1, 2]
Basic Footnote Syntax
To create a simple footnote, use square brackets with a caret (^) and a unique identifier. [1, 3]

- Inline Marker: Add [^1] immediately after the text you want to reference.
- Definition: At the bottom of your file, add [^1]: followed by the footnote content. [1, 2, 4, 5]

Here is a simple footnote.[^1]
[^1]: This is the text that will appear at the bottom of the page.

Key Features

- Identifiers: You can use numbers or words (e.g., [^note] or [^label]), but they cannot contain spaces or tabs.
- Automatic Numbering: Even if you use words as identifiers, the rendered output will automatically number them sequentially (1, 2, 3...).
- Multi-paragraph Footnotes: To include multiple paragraphs or code blocks in a single footnote, indent the subsequent lines by four spaces or one tab.
- Inline Content (Advanced): Some parsers like Pandoc allow you to write the footnote content directly in the text using ^[This is an inline footnote]. [1, 2, 6, 7, 8, 9, 10]

Support and Compatibility
Footnotes are part of Extended Markdown and are not in the original spec. They are widely supported by: [11, 12, 13]

- [GitHub Flavored Markdown (GFM)](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
- Obsidian.
- Pandoc and R Markdown. [5, 7, 14, 15, 16]

Would you like to see how to format multi-paragraph or code block footnotes specifically?

[1] [https://www.markdownguide.org](https://www.markdownguide.org/extended-syntax/)
[2] [https://tiiny.host](https://tiiny.host/blog/markdown-footnotes/)
[3] [https://www.markdownguide.org](https://www.markdownguide.org/cheat-sheet/)
[4] [https://docs.github.com](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[5] [https://help.obsidian.md](https://help.obsidian.md/syntax)
[6] [https://github.com](https://github.com/Python-Markdown/markdown/blob/master/docs/extensions/footnotes.md)
[7] [https://www.youtube.com](https://www.youtube.com/watch?v=HYhNNrpn9Ck)
[8] [https://www.hardscrabble.net](https://www.hardscrabble.net/2023/multi-paragraph-footnotes-in-markdown/)
[9] [https://quarto.org](https://quarto.org/docs/authoring/markdown-basics.html)
[10] [https://www.ii.com](https://www.ii.com/links-footnotes-markdown/)
[11] [https://github.com](https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet)
[12] [https://python-markdown.github.io](https://python-markdown.github.io/extensions/footnotes/#:~:text=Summary.%20The%20Footnotes%20extension%20adds%20syntax%20for,is%20included%20in%20the%20standard%20Markdown%20library.)
[13] [https://github.com](https://github.com/jupyter/notebook/issues/1287#:~:text=Carreau%20commented%20on%20Apr%201%2C%202016%20Hi,reference%2C%20%2C%20which%20each%20having%20multiple%20syntax)
[14] [https://stackoverflow.com](https://stackoverflow.com/questions/25579868/how-to-add-footnotes-to-github-flavoured-markdown)
[15] [https://docs.github.com](https://docs.github.com/enterprise-cloud@latest/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[16] [https://wiki.snowdrift.coop](https://wiki.snowdrift.coop/editorial/markdown#:~:text=See%20Pandoc%27s%20Markdown%20for%20more%20options%20and,the%20%60%60pipe%27%27%20table%20format%29%2C%20and%20much%20more.)

# 2

how are they rendered, like on github or vscode

---

When you render Markdown footnotes on platforms like [GitHub](https://github.com/) or in VS Code's previewer, they are transformed from plain text markers into an interactive, structured layout.
Rendering on GitHub
GitHub uses GitHub Flavored Markdown (GFM) to automatically handle footnote placement and linking. [1, 2, 3]

- Inline Superscripts: The marker (e.g., [^1]) becomes a clickable superscript number.
- Automatic Footer: Regardless of where you write the definition in your raw file, GitHub moves it to a dedicated section at the very bottom of the document.
- Jump-Back Links: Each footnote at the bottom includes a return symbol (↩︎) next to the text. Clicking this takes you back to the exact spot in the main text where the marker was placed.
- Visual Separation: A horizontal line typically separates the main content from the footnote section at the bottom of the page. [1, 4, 5, 6]

Rendering in VS Code
VS Code provides built-in support for rendering footnotes in its Markdown Preview window. [7, 8]

- Side-by-Side Preview: You can see how they render in real-time by opening the preview pane (use Ctrl+Shift+V or the "Open Preview to the Side" icon).
- Interactive Links: Just like on GitHub, the previewer renders the markers as clickable links that jump to the footer definitions.
- Enhanced Functionality: You can install extensions like [Markdown Footnotes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes) or VSCode Markdown Footnote to add features like "hover to preview" content without clicking, or the ability to "peek" the definition directly in the editor. [7, 9, 10, 11, 12, 13]

Summary Table: Rendering Behavior

| Feature [1, 4, 14] | Behavior in Rendered View                                                             |
| ------------------ | ------------------------------------------------------------------------------------- |
| Marker             | Becomes a blue, clickable superscript number (e.g., ¹).                               |
| Placement          | Definitions are automatically moved to the bottom of the document.                    |
| Navigation         | Supports bi-directional jumping (Marker $\to$ Footer and Footer $\to$ Marker).        |
| Numbering          | Automatically sequential (1, 2, 3...) even if you use named identifiers like [^note]. |

Would you like to know how to customize the CSS for these footnotes in your own VS Code preview?

[1] [https://docs.github.com](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[2] [https://github.github.com](https://github.github.com/gfm/)
[3] [https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#:~:text=Baseline:%20GitHub%2DFlavored%20Markdown%20The%20baseline%20for%20MDN,turn%20is%20a%20superset%20of%20CommonMark%20%28https://spec.commonmark.org/%29.)
[4] [https://www.markdownguide.org](https://www.markdownguide.org/extended-syntax/)
[5] [https://amanhimself.dev](https://amanhimself.dev/blog/inline-footnotes-in-markdown/)
[6] [https://stackoverflow.com](https://stackoverflow.com/questions/15110479/markdown-and-footnotes-most-natural-format-missing)
[7] [https://stackoverflow.com](https://stackoverflow.com/questions/68324949/is-it-my-imagination-or-did-footnote-style-links-stop-working-in-vscode-preview)
[8] [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=houkanshan.vscode-markdown-footnote)
[9] [https://www.reddit.com](https://www.reddit.com/r/AutoHotkey/comments/1ijozrw/pro_tip_you_can_use_vs_code_to_help_write/)
[10] [https://stackoverflow.com](https://stackoverflow.com/questions/49618791/visual-studio-code-markdown-preview-styles)
[11] [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=houkanshan.vscode-markdown-footnote)
[12] [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=houkanshan.vscode-markdown-footnote)
[13] [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes)
[14] [https://github.com](https://github.com/RickStrahl/MarkdownMonster/issues/937)

# 3

ive tested on the latest vscode. it does not render. it's just handled like plain text.

---

You're right—out of the box, VS Code's built-in Markdown preview does not support footnotes. It only handles standard Markdown, and footnotes are considered an "extended" syntax. [1, 2, 3, 4]
To make them render, you need to use an extension that adds this specific capability to the previewer. [5, 6]
How to Enable Footnote Rendering
The most common way to fix this is by installing one of these highly-rated extensions:

- [Markdown Footnotes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes): This is a lightweight extension specifically designed to add [^1] support to the built-in preview without changing anything else.
- GitHub Markdown Preview: If you want your preview to match exactly how things look on GitHub (including footnotes, emojis, and checkboxes), this extension pack includes the footnote support mentioned above.
- Markdown All in One: A popular "all-around" tool that includes footnote support along with many other formatting features. [5, 7, 8, 9, 10]

Quick Troubleshooting
If you've installed an extension and it still isn't working, check these two things:

1.  Language Mode: Look at the bottom-right corner of your VS Code window. It must say Markdown. If it says "Plain Text" or something else, the previewer won't trigger correctly.
2.  Formatting Check: Ensure there is no space between the caret and the identifier (e.g., use [^1], not [ ^ 1]) and that the definition at the bottom starts with the marker followed by a colon (e.g., [^1]: My note). [11, 12, 13]

Would you like me to walk you through the installation steps for the Markdown Footnotes extension?

[1] [https://www.markdownguide.org](https://www.markdownguide.org/extended-syntax/)
[2] [https://github.com](https://github.com/microsoft/vscode/issues/280149)
[3] [https://www.markdownguide.org](https://www.markdownguide.org/tools/vscode/)
[4] [https://github.com](https://github.com/Mathpix/vscode-mathpix-markdown/issues/13)
[5] [https://ipc14.org](https://ipc14.org/node/24)
[6] [https://www.youtube.com](https://www.youtube.com/watch?v=WMw5_1L2N7g)
[7] [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes)
[8] [https://marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes)
[9] [https://github.com](https://github.com/mjbvz/vscode-github-markdown-preview)
[10] [https://dev.to](https://dev.to/ahandsel/vs-code-setup-recommended-extensions-4877)
[11] [https://stackoverflow.com](https://stackoverflow.com/questions/64467138/vscode-markdown-preview-shift-command-v-not-working)
[12] [https://stackoverflow.com](https://stackoverflow.com/questions/71511401/markdown-headings-not-appearing-in-outline-box-in-vs-code)
[13] [https://github.com](https://github.com/microsoft/vscode/issues/101221)

# 4

what about on github

---

On [GitHub](https://github.com/), footnotes are natively supported and fully functional in nearly all Markdown fields, including READMEs, issues, and pull request comments. [1, 2, 3, 4, 5]
How GitHub Renders Footnotes
GitHub uses GitHub Flavored Markdown (GFM), which includes an extension specifically for footnotes. [6, 7]

- Interactive Markers: Inline markers like [^1] are rendered as blue, clickable superscript numbers (e.g., ¹).
- Automatic Footer Section: GitHub automatically moves all footnote definitions to a dedicated section at the very bottom of the page, regardless of where you wrote them in your raw code.
- Back-links: Each footnote at the bottom includes a "return" symbol (↩) that allows readers to jump back to the exact location of the reference in the main text.
- Sequential Numbering: Even if you use words or non-sequential numbers in your code (e.g., [^apple]), GitHub will re-number them sequentially (1, 2, 3...) in the rendered view. [1, 2, 8, 9, 10, 11]

Important Constraints

- Wikis: Unlike READMEs and comments, footnotes are currently not supported in GitHub Wikis.
- Spacing: Ensure there is no space between the caret and the identifier. [^1] works; [ ^ 1] does not.
- Multi-line Content: To include a second line in a footnote on GitHub, you must end the first line with two spaces to create a line break. [8, 11, 12, 13, 14]

Do you need help with the specific syntax for multi-paragraph footnotes on GitHub?

[1] [https://github.blog](https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/#:~:text=You%20can%20now%20use%20footnote%20syntax%20in,them%20to%20jump%20to%20their%20referenced%20information.)
[2] [https://github.blog](https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/#:~:text=You%20can%20now%20use%20footnote%20syntax%20in,section%20at%20the%20bottom%20of%20the%20document:.)
[3] [https://github.blog](https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/#:~:text=Footnotes%20now%20supported%20in%20Markdown%20fields%20%2D%20GitHub%20Changelog.)
[4] [https://talk.commonmark.org](https://talk.commonmark.org/t/footnotes-now-supported-by-githubs-web-interface/3983)
[5] [https://www.youtube.com](https://www.youtube.com/shorts/gz1wK9QvCKE#:~:text=Footnotes%20in%20GitHub%20comments%20provide%20a%20method,easy%20reference%20back%20to%20the%20footnote%27s%20placement.)
[6] [https://docs.github.com](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[7] [https://github.com](https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet)
[8] [https://docs.github.com](https://docs.github.com/enterprise-cloud@latest/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[9] [https://docs.github.com](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[10] [https://docs.github.com](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide)
[11] [https://www.markdownguide.org](https://www.markdownguide.org/extended-syntax/)
[12] [https://docs.github.com](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[13] [https://github.com](https://github.com/Python-Markdown/markdown/blob/master/docs/extensions/footnotes.md)
[14] [https://github.com](https://github.com/github/docs/issues/40887)

# 5

are they too small to click

---

On [GitHub](https://github.com/), footnote markers are rendered as standard blue superscript links. While their small size can occasionally be a challenge—especially on mobile devices—they are generally functional for most users. [1, 2, 3]
Accessibility and Usability

- Small Target Size: Because the markers (e.g., ¹) follow standard superscript styling, they are physically smaller than regular body text. Some users find this makes them difficult to tap accurately on high-density touchscreens.
- Interactive Design: GitHub improves the experience by making the entire number clickable. When clicked, the page scrolls instantly to the footer and visually outlines the specific footnote so you don't have to hunt for it.
- Hover Text (Desktop): On most desktop browsers, hovering your mouse over the marker will show a small "title" tooltip with the destination URL, confirming you’ve correctly targeted the link.
- Return Navigation: To help with "jumping back," GitHub includes a return symbol (↩) in the footer. This is often easier to click than the initial superscript because it sits on the main text line. [2, 3, 4, 5, 6, 7]

Tips for Better "Clickability"
If you’re worried about readers missing your footnotes, you can use these formatting tricks:

- Use Descriptive Labels: Instead of [^1], use [^note_about_data]. While GitHub still renders this as a number, the longer identifier can sometimes help certain browser plugins or screen readers handle the link better.
- Avoid Clutter: Don't place two footnotes immediately next to each other (like text.[^1][^2]). This creates two tiny, distinct touch targets that are nearly impossible to hit individually on mobile.
- Text Spacing: Ensure there is no space between your text and the marker (e.g., word.[^1]). This keeps the marker attached to the word, which some mobile browsers treat as a slightly larger combined "hit box". [8, 9, 10, 11]

Are you planning to use these in a README file or a pull request comment?

[1] [https://github.blog](https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/)
[2] [https://www.youtube.com](https://www.youtube.com/shorts/gz1wK9QvCKE#:~:text=Footnotes%20in%20GitHub%20comments%20provide%20a%20method,easy%20reference%20back%20to%20the%20footnote%27s%20placement.)
[3] [https://github.com](https://github.com/pradyunsg/furo/discussions/581#:~:text=When%20you%20click%20on%20the%20number%20of,appear%20when%20clicking%20one%20of%20these%20links.)
[4] [https://www.reddit.com](https://www.reddit.com/r/LibbyApp/comments/1gfvshg/anybody_else_find_it_difficult_to_click_on/)
[5] [https://carterpape.com](https://carterpape.com/the-blog/making-carterpape-com/2018/08/09/round-it-out-and-fix-the-footnotes/)
[6] [https://meta.stackexchange.com](https://meta.stackexchange.com/questions/5017/markdown-footnotes)
[7] [https://github.com](https://github.com/remarkjs/remark-gfm/issues/31)
[8] [https://talk.commonmark.org](https://talk.commonmark.org/t/footnotes-now-supported-by-githubs-web-interface/3983)
[9] [https://www.angela1c.com](https://www.angela1c.com/posts/2021/10/footnotes-in-markdown-documents/)
[10] [https://docs.github.com](https://docs.github.com/enterprise-cloud@latest/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[11] [https://deeproots.github.io](http://deeproots.github.io/footnotes/)

# 6

how much is the spacing between two consecutive footnotes

---

When you place two footnotes side-by-side on [GitHub](https://github.com/) (e.g., text[^1][^2]), they are rendered as two separate superscript numbers with zero spacing between them. [1]
Rendering Behavior for Consecutive Footnotes

- No Automatic Gap: GitHub does not add a space or a comma between two adjacent footnote markers. They will appear as ¹² in the rendered output.
- Hit-box Difficulty: Because there is no gap, the clickable "hit-boxes" for each link are extremely close together, making them difficult to tap accurately on mobile.
- Separation "Hacks": To make them more readable or clickable, some users manually add a space (text[^1] [^2]) or a comma (text[^1], [^2]) in the Markdown source. [1, 2]

Footnote Footer Spacing
At the bottom of the document where the actual definitions are listed:

- Single Spacing per Entry: Each individual footnote entry is typically single-spaced internally.
- Spacing Between Entries: GitHub lists footnotes as a standard ordered list. There is usually a standard paragraph margin (roughly 16px) between each separate footnote definition, providing clear visual separation. [3, 4, 5]

Would you like to see how to format multi-paragraph footnotes so the spacing stays correct within a single entry? [6, 7]

[1] [https://github.com](https://github.com/Python-Markdown/markdown/issues/468)
[2] [https://github.com](https://github.com/typst/typst/issues/2967)
[3] [https://docs.github.com](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[4] [https://libguides.stonehill.edu](https://libguides.stonehill.edu/c.php?g=884839&p=6358739)
[5] [https://www.angela1c.com](https://www.angela1c.com/posts/2021/10/footnotes-in-markdown-documents/)
[6] [https://www.hardscrabble.net](https://www.hardscrabble.net/2023/multi-paragraph-footnotes-in-markdown/)
[7] [https://www.hardscrabble.net](https://www.hardscrabble.net/2023/multi-paragraph-footnotes-in-markdown/)
