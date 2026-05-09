<!-- 0, 1, 2... quite confusing. idk until testing. ik now? not really. -->

how to write vscode template

5:57 AM

Visual Studio Code (VS Code) provides two primary ways to create templates: <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>User Snippets</strong> for repeating blocks of code and <strong>File Templates</strong> for scaffolding entire new files</mark>. \[[1](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12), [2](https://code.visualstudio.com/docs/editing/userdefinedsnippets), [3](https://www.youtube.com/watch?v=BjIEBmJDUUQ), [4](https://code.visualstudio.com/docs/editing/userdefinedsnippets), [5](https://medium.com/@kenslearningcurve/create-visual-studio-extensions-with-c-68dbfce763be)]

1\. Create a Code Snippet (Inline Template)

Snippets are the most common way to create "templates" in VS Code. They allow you to type a short prefix and expand it into a larger block of code. \[[1](https://studio.uclaacm.com/byte-sized-tutorials/installing-unity), [2](https://dev.to/serifcolakel/creating-and-using-vs-code-snippets-a-beginners-guide-53ae), [3](https://www.codu.co/niall/creating-custom-vs-code-snippets-for-faster-development-kgjv1ct), [4](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12), [5](https://www.youtube.com/watch?v=BjIEBmJDUUQ)]

1. **Open User Snippets**: Go to **File** > **Preferences** > **Configure User Snippets** (or use the Command Palette `Ctrl+Shift+P` and type "Snippets").
2. **Select Language**: Choose the language you want the template for (e.g., `javascript.json`) or select **New Global Snippets file** to make it available everywhere.
3. **Define the Template**: Add a JSON object with the following structure:

- **Prefix**: The keyword that triggers the snippet.
- **Body**: The code block. Use `$1`, `$2` for tab stops and `${1:default}` for placeholders.
- **Description**: A brief explanation of what the snippet does. \[[1](https://medium.com/@sun%5Ftech/how-to-create-code-snippets-templates-on-visual-studio-vs-code-bec96c3bc48e), [2](https://dev.to/cuongnp/code-like-a-pro-how-to-use-templates-in-intellij-idea-vs-code-1m2n), [3](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12), [4](https://code.visualstudio.com/docs/editing/userdefinedsnippets), [5](https://www.youtube.com/watch?v=BjIEBmJDUUQ)]

**Example: A basic HTML template**

json

```
"HTML Boilerplate": {
  "prefix": "html5",
  "body": [
    "<!DOCTYPE html>",
    "<html lang=\"en\">",
    "<head>",
    "  <meta charset=\"UTF-8\">",
    "  <title>${1:Document}</title>",
    "</head>",
    "<body>",
    "  $0",
    "</body>",
    "</html>"
  ],
  "description": "Basic HTML5 scaffolding"
}
```

Use code with caution.

2\. Create a File Template

While VS Code doesn't have a "Create from Template" menu by default, you can use the built-in `isFileTemplate` property in your snippets to make them appear when creating a new file. \[[1](https://stackoverflow.com/questions/50571130/how-can-i-create-templates-for-file-extensions-in-visual-studio-code)]

1. Add `"isFileTemplate": true` to any snippet definition in your user snippets file.
2. Create a **New File** (`Ctrl+N`).
3. A prompt will appear at the top of the editor: "Fill with template". Clicking this will list all snippets with that property enabled. \[[1](https://dev.to/devland/100-crucial-keyboard-shortcuts-for-vs-code-users-4474), [2](https://www.ibm.com/docs/en/wdfrhcw/1.4.0?topic=templates-creating-code), [3](https://stackoverflow.com/questions/50571130/how-can-i-create-templates-for-file-extensions-in-visual-studio-code)]

3\. Using Extensions for Project Templates

For more complex needs, like creating entire folder structures or project boilerplates, you can use specialized extensions: \[[1](https://github.com/cantonios/vscode-project-templates), [2](https://www.youtube.com/watch?v=fi4ZjqNcSQc\&t=158), [3](https://github.com/RajaRakoto/vscode-boilerplate), [4](https://marketplace.visualstudio.com/items?itemName=Samsaifi.node-tamplate-generator), [5](https://stackoverflow.com/questions/50571130/how-can-i-create-templates-for-file-extensions-in-visual-studio-code)]

- **[Project Templates](https://marketplace.visualstudio.com/items?itemName=bam.vscode-file-templates)**: Allows you to save current projects as templates and create new ones from them.
- **[Folder Templates](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure)**: Lets you define complex folder and file structures as templates. \[[1](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure), [2](https://medium.com/@valentin.osidach/boost-productivity-create-and-use-custom-c-class-templates-in-visual-studio-d53b24fa3907), [3](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure), [4](https://github.com/cantonios/vscode-project-templates)]

4\. Create an Extension Template (For Developers) \[[1](https://www.syncfusion.com/blogs/post/creating-extensions-for-visual-studio-code-a-complete-guide), [2](https://stackoverflow.com/questions/74156287/is-it-possible-to-create-a-custom-file-type-for-a-vs-code-extension)]

If you want to create an extension _using_ a template, [VS Code](https://code.visualstudio.com/) provides a generator for scaffolding: \[[1](https://code.visualstudio.com/api/get-started/your-first-extension), [2](https://pramonow.medium.com/making-your-own-vscode-extension-6c3e431ff16c), [3](https://dev.to/dusan100janovic/create-a-visual-studio-code-extension-1i7c), [4](https://dev.to/dusan100janovic/create-a-visual-studio-code-extension-1i7c)]

1. Install the Yeoman generator: `npm install -g yo generator-code`.
2. Run the generator: `yo code`.
3. Follow the prompts to scaffold a new extension project. \[[1](https://www.youtube.com/watch?v=i8zZ6rwItZ4\&t=54), [2](https://www.freecodecamp.org/news/making-vscode-extension/), [3](https://code.visualstudio.com/api/get-started/your-first-extension)]

Would you like to see how to add **custom variables** like the current date or filename to your templates?

- [link](https://stackoverflow.com/questions/50571130/how-can-i-create-templates-for-file-extensions-in-visual-studio-code)\
  How can I create templates for file extensions in Visual Studio ...\
  4 Answers. ... There isn't, not natively. But there is an extension called File Templates for VSCode that allows you to create you...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12)\
  How To Create Custom VSCode Snippets\
  To create a snippet, navigate to File, then Preferences, and select User Snippets. A pop-up appears with options to create a globa...\
  9m\
  YouTube·Web Dev Simplified
- [link](https://code.visualstudio.com/docs/editing/userdefinedsnippets)\
  Snippets in Visual Studio Code\
  Install snippets from the Marketplace. Many extensions on the VS Code Marketplace include snippets. You can search for extensions ...\
  Visual Studio Code

Show all

syntax

5:57 AM

VS Code snippet syntax is based on the TextMate format and uses JSON to define the structure. \[[1](https://vscode-docs.readthedocs.io/en/stable/customization/userdefinedsnippets/), [2](https://simplanova.com/blog/vs-code-snippets-user-personalization/)]

Core JSON Structure

Each snippet is an object within a parent JSON object. It requires a unique name, a trigger `prefix`, and a `body` containing the code. \[[1](https://blog.nimblepros.com/blogs/using-variables-in-visual-studio-code-snippets/), [2](https://medium.com/@elidawson/get-started-using-snippets-in-visual-studio-code-bf99d244835f)]

json

```
"Snippet Name": {
  "prefix": "triggerWord",
  "body": [
    "line 1",
    "line 2"
  ],
  "description": "Optional info"
}
```

Use code with caution.

Body Syntax & Control

The `body` can be a single string or an array of strings (recommended for multiple lines). \[[1](https://vscode-docs1.readthedocs.io/en/latest/editor/userdefinedsnippets/), [2](https://www.freecodecamp.org/news/definitive-guide-to-snippets-visual-studio-code/)]

- **Tabstops**: Use `$1`, `$2`, and so on to define where the cursor jumps when you press **Tab**. `$0` marks the final cursor position.
- **Placeholders**: Use `${1:defaultValue}` to provide text that is pre-selected and ready to be replaced.
- **Choices**: Use `${1|option1,option2|}` to create a dropdown list for the user to pick from.
- **Indentation**: Use `\t` at the start of a line in the array to indent code. VS Code will automatically convert this to your editor's preferred spaces or tabs. \[[1](https://code.visualstudio.com/docs/editing/userdefinedsnippets), [2](https://stevekinney.com/courses/visual-studio-code/vscode-snippets), [3](https://mercedesbernard.com/blog/ode-to-snippets/), [4](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12), [5](https://medium.com/@Andrew%5FMc/a-short-guide-to-vscode-snippets-febe895adce1), [6](https://code.visualstudio.com/docs/editing/userdefinedsnippets)]

Built-in Variables

You can insert dynamic information using `${VARIABLE_NAME}`. \[]

- **Date/Time**: `CURRENT_YEAR`, `CURRENT_MONTH_NAME`, `CURRENT_DATE`, `CURRENT_HOUR`.
- **File Info**: `TM_FILENAME` (full name), `TM_FILENAME_BASE` (no extension), `TM_DIRECTORY` (folder path).
- **Workspace**: `WORKSPACE_NAME`, `WORKSPACE_FOLDER`.
- **Content**: `CLIPBOARD` (pasted content), `TM_SELECTED_TEXT` (text highlighted before snippet trigger). \[[1](https://mintlify.com/Microsoft/vscode/customization/snippets), [2](https://code.visualstudio.com/docs/editing/userdefinedsnippets), [5](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12)]

Advanced Syntax

- **Variable Transformations**: You can use regex to modify variable output (e.g., `${TM_FILENAME/(.*)/${1:/upcase}/}` to capitalize the filename).
- **Command Variables**: Use `${command:commandID}` to insert the result of a specific VS Code command. \[[1](https://stackoverflow.com/questions/54526835/vs-code-snippet-placeholder-transform), [2](https://code.visualstudio.com/docs/reference/variables-reference)]

Would you like help writing a **regex transformation** for a specific file naming convention in your template?

- [link](https://blog.nimblepros.com/blogs/using-variables-in-visual-studio-code-snippets/)\
  Using Variables in Visual Studio Code Snippets - NimblePros\
  On Windows and Linux, use Ctrl + Shift + P . On Mac, use Command ⌘ + Shift ⇧ + P . From the View menu, select Command Palette. Onc...\
  NimblePros
- [link](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12)\
  How To Create Custom VSCode Snippets\
  To create a snippet, navigate to File, then Preferences, and select User Snippets. A pop-up appears with options to create a globa...\
  9m\
  YouTube·Web Dev Simplified
- [link](https://vscode-docs.readthedocs.io/en/stable/customization/userdefinedsnippets/)\
  Adding Snippets to Visual Studio Code - vscode-docs\
  Overview. Userdefinedsnippets. Adding Snippets to Visual Studio Code. Add Snippets from the Gallery. Creating your Own Snippets. U...\
  Read the Docs

Show all

what's textmate format

12:03 PM

**TextMate format** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a standardized syntax for defining code templates (snippets) and language rules (grammars)</mark>, originally developed for the [TextMate editor](https://macromates.com/textmate/manual/snippets). It became the industry standard because it was the first system to treat editor features as modular, sharable "bundles," leading modern editors like [VS Code](https://code.visualstudio.com/docs/editing/userdefinedsnippets), Sublime Text, and [Atom](https://github.com/atom/snippets/issues/257) to adopt it. \[[1](https://macromates.com/textmate/manual/snippets), [2](https://blog.robenkleene.com/2020/06/17/the-enduring-influence-of-textmate/), [3](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html), [4](https://code.visualstudio.com/docs/editing/userdefinedsnippets)]

Key Features of the Format

The format's power comes from several dynamic behaviors that go beyond simple text replacement: \[[1](https://garrettdimon.com/journal/posts/trick-your-textmate-snippets), [2](https://code.visualstudio.com/docs/editing/userdefinedsnippets)]

- **Tab Stops & Placeholders**: It uses `$1`, `$2`, etc., to define where the cursor jumps when you press **Tab**. You can include default values using `${1:default}`.
- **Mirrors**: If you use the same tab stop multiple times (e.g., `${1:name}` and `$1`), typing in the first one automatically updates the second in real-time—useful for closing tags or duplicate variable names.
- **Variables**: It supports built-in environmental variables like `$TM_FILENAME` or `$CURRENT_YEAR` to inject context-aware data into your file.
- **Regex Transformations**: This is its most advanced feature, allowing you to modify a placeholder as it is typed. For example, you can automatically uppercase the first letter of a variable you are entering in another part of the snippet.
- **Choice Menus**: You can provide a pre-defined list of options for a specific field using the `${1|choice1,choice2|}` syntax. \[[1](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12), [2](https://github.com/atom/snippets/issues/257), [3](https://macromates.com/textmate/manual/snippets)]

Usage in VS Code

While original TextMate snippets were often saved as `.tmSnippet` files (based on XML or Property Lists), VS Code uses a JSON version of this grammar. This allows you to define complex templates using standard JSON objects while keeping the classic dollar-sign and curly-brace syntax for the "body" of the code. \[[1](https://code.visualstudio.com/api/language-extensions/snippet-guide)]

Would you like to try building a **regex transformation** to see how it can automatically format your input?

- [link](https://macromates.com/textmate/manual/snippets)\
  Snippets — TextMate Manual\
  A snippet is a piece of text that you would like to insert in your document. It can include code to run at insertion time, variabl...\
  TextMate for macOS
- [link](https://www.youtube.com/watch?v=TGh2NpCIDlc\&t=12)\
  How To Create Custom VSCode Snippets\
  To create a snippet, navigate to File, then Preferences, and select User Snippets. A pop-up appears with options to create a globa...\
  9m\
  YouTube·Web Dev Simplified
- [link](https://github.com/atom/snippets/issues/257)\
  Support TextMate-style snippet transformations · Issue #257 - GitHub\
  Support TextMate-style snippet transformations #257 ... This is a gigantic feature request, but I'd argue it's worth the effort to...\
  GitHub

Show all

textmate

[TextMate](https://macromates.com/) is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a renowned text editor for macOS</span></mark> that pioneered the modern standards for how code editors handle syntax highlighting, snippets, and extensibility. \[[1](https://en.wikipedia.org/wiki/TextMate), [2](https://blog.robenkleene.com/2020/06/17/the-enduring-influence-of-textmate/)]

The Influence of TextMate

Most modern editors, including **VS Code**, **Sublime Text**, and **Atom**, built their core features on foundations first established by TextMate. Its "Format" refers to several key technical specifications: \[[1](https://www.reddit.com/r/neovim/comments/wr7wyu/syntax%5Fhighlighting%5Fwith%5Ftextmatevscode%5Fgrammars/), [2](https://blog.robenkleene.com/2020/06/17/the-enduring-influence-of-textmate/)]

- **Grammar System**: TextMate grammars use complex regular expressions (via the **Oniguruma** library) to tokenize code. This system allows editors to distinguish between a function name, a variable, and a comment with high precision.
- **Scopes**: As the editor parses text, it assigns "scopes" (e.g., `source.python`, `keyword.control.php`) to every character. These scopes determine not only the color but also the behavior of the editor, such as which snippets are available in a specific section of code.
- **Bundles**: TextMate introduced the idea of "Bundles"—modular packages that group together grammars, snippets, and commands for a specific language or framework.
- **Snippets**: The familiar syntax using `$1`, `$2` for tab stops and `${1:placeholder}` for default text was popularized by TextMate and is now the industry standard. \[[1](https://stackoverflow.com/questions/56254150/how-do-textmate-grammars-and-themes-work-with-vscode), [2](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html), [3](https://vscode-docs1.readthedocs.io/en/latest/extensions/themes-snippets-colorizers/), [5](https://projects.serenity.de/textmate/tutorials/basics/), [6](https://hiltmon.com/blog/2013/11/09/textmate-2-basics/), [7](https://wiki.edunitas.com/IT/en/114-10/TextMate%5F4375%5FLi%5FeduNitas.html), [8](https://stackoverflow.com/questions/10694076/why-people-use-textmate)]

Key Features it Popularized

Beyond the technical format, TextMate introduced several workflow features that are now considered standard: \[[1](https://en.wikipedia.org/wiki/TextMate), [2](https://blog.robenkleene.com/2020/06/17/the-enduring-influence-of-textmate/)]

- **Fuzzy Search**: Finding files by typing a few characters of their name (e.g., `Cmd+T` or `Ctrl+P`).
- **Multiple Carets**: The ability to place many cursors at once to edit multiple lines of code simultaneously.
- **Auto-Pairing**: Automatically inserting a closing bracket or quote when the opening one is typed. \[[1](https://macromates.com/), [2](https://blog.robenkleene.com/2020/06/17/the-enduring-influence-of-textmate/), [3](https://stackoverflow.com/questions/10694076/why-people-use-textmate), [4](https://macromates.com/manual/en/working%5Fwith%5Ftext), [5](https://texteditors.org/cgi-bin/wiki.pl?TextMate)]

Today, the original TextMate 2 is an open-source project, and its [Grammar Guide](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html) remains the primary reference for developers building syntax highlighting for VS Code extensions. \[[1](https://dev.to/borama/building-a-syntax-highlighting-extension-for-vs-code-594), [2](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html), [3](https://macromates.com/)]

Would you like to see how to use **scopes** to make a snippet only appear inside certain parts of your code, like within a comment or a string?

- [link](https://en.wikipedia.org/wiki/TextMate)\
  TextMate - Wikipedia\
  TextMate is a free and open-source general-purpose GUI text editor for macOS created by Allan Odgaard. TextMate features declarati...\
  Wikipedia
- [link](https://projects.serenity.de/textmate/tutorials/basics/)\
  TextMate Basics Tutorial\
  Jul 25, 2009 — Understanding TextMate. When you edit a file, TextMate recognizes the file type (in most cases) and provides several specific comm...\
  projects.serenity.de
- [link](https://markdown-all-in-one.github.io/docs/contributing/textmate-language-grammar.html)\
  TextMate grammar guide | Markdown All in One Documentation\
  Contributing guide. Emoji. Commit message. Optimization tricks. Packaging. Test. TextMate grammar guide. Introduction. References.\
  GitHub Pages documentation

Show all

the history of textmate

TextMate is a legendary Mac text editor that fundamentally changed the landscape of modern code editing. <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Created by <strong>Allan Odgaard</strong> (MacroMates) and released in <strong>October 2004</strong></mark>, it filled a gap for developers who wanted an editor that felt like a native Mac application but had the power of Unix-based tools. \[[1](https://en-academic.com/dic.nsf/enwiki/1659335), [2](https://www.solvusoft.com/en/file-extensions/software/macromates/), [3](https://publish.obsidian.md/xybre/permalink/5f66e2bd-5ed1-4f19-b7f9-acdede15800d)]

The Golden Era (2004–2009)

TextMate’s rise was explosive, largely fueled by its association with the **Ruby on Rails** community. \[[1](https://world.hey.com/dhh/finding-the-last-editor-dae701cc)]

- **Innovation**: It introduced "bundles" (modular language support), a sophisticated regex-based grammar system for syntax highlighting, and the tab-triggered snippets that are now standard in almost every editor.
- **Recognition**: In 2006, it won the **Apple Design Award** for Best Developer Tool.
- **Influence**: Most modern editors—including VS Code, Sublime Text, and Atom—still use TextMate’s grammar and snippet formats. \[[1](https://news.ycombinator.com/item?id=20979841), [2](https://www.quora.com/What-was-so-great-about-TextMate), [3](https://en.wikipedia.org/wiki/TextMate), [4](https://www.quora.com/Why-do-people-use-TextMate-instead-of-Sublime-Text-programming-What-makes-it-better-than-Sublime-Text-from-their-perspective)]

The "Vaporware" Years and Open Source

Following the success of version 1.5, development on a massive rewrite, **TextMate 2.0**, began. This period was marked by long delays, leading it to be labeled "vaporware" by some. \[[1](https://arstechnica.com/gadgets/2012/08/odgaard-i-will-continue-working-on-textmate-as-long-as-i-am-a-mac-user/), [2](https://www.keltia.net/programs/textmate/), [3](https://en.wikipedia.org/wiki/TextMate), [4](https://www.macstories.net/news/textmate-2-alpha-now-publicly-available-for-download/)]

- **2009**: TextMate 2 was announced as 90% complete but stayed in internal development.
- **2011**: A public alpha of TextMate 2 was finally released.
- **2012**: In response to Apple’s increasingly restrictive Mac App Store policies, Odgaard [open-sourced the TextMate 2 code](https://github.com/textmate/textmate) under the GPL-3.0 license to ensure user freedom.
- **2019**: After a long incubation, the **final stable version of TextMate 2.0** was officially released on September 15. \[[1](https://en.wikipedia.org/wiki/TextMate), [2](https://macromates.com/blog/2011/textmate-2-0-alpha/), [3](https://www.theverge.com/2012/8/10/3231885/textmate-2-text-editor-open-source), [4](https://github.com/textmate/textmate/blob/master/Applications/TextMate/about/Changes.md)]

Current Legacy

While it no longer dominates the market—having been overtaken by cross-platform editors like Sublime Text and later [VS Code](https://code.visualstudio.com/)—TextMate remains a favorite for Mac purists who value its native performance and "Finished Software" feel. Its architectural decisions effectively established the blueprint for how developers interact with code editors today. \[[1](https://world.hey.com/dhh/finding-the-last-editor-dae701cc), [2](https://www.youtube.com/watch?v=8605poPL4Sk), [3](https://publish.obsidian.md/xybre/permalink/5f66e2bd-5ed1-4f19-b7f9-acdede15800d), [4](https://macromates.com/blog/2009/working-on-it/)]

Would you like to know more about the specific **Ruby on Rails** connection that helped make TextMate famous?

- [link](https://world.hey.com/dhh/finding-the-last-editor-dae701cc)\
  Finding The Last Editor - HEY World\
  Feb 27, 2024 — Case in point, I've been using the TextMate programming editor since it was first created back in 2004. That's twenty years now. A...\
  HEY
- [link](https://en.wikipedia.org/wiki/TextMate)\
  TextMate - Wikipedia\
  On 8 August 2006, TextMate was awarded the Apple Design Award for Best Developer Tool, at Apple's Worldwide Developers Conference ...\
  Wikipedia
- [link](https://www.quora.com/What-was-so-great-about-TextMate)\
  What was so great about TextMate? - Quora\
  Mar 26, 2017 — Textmate came at a time when a mere color coding was considered enough for being called a programmers editor. It truly changed wha...\
  Quora

Show all