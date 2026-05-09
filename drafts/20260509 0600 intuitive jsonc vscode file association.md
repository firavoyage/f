seems some json files (e.g. code snippets) in vscode allow comments. they have json ext. yet they dont have a json icon. and if i create my own json it's not allowed.

3:01 PM

VS Code uses a special mode called **JSON with Comments (jsonc)** for its internal configuration files, like `settings.json`, `launch.json`, and snippets. This is why you see a different icon and can use comments without errors in those specific files, even though they have a `.json` extension. \[[1](https://jsonc.org/), [2](https://code.visualstudio.com/docs/languages/json), [3](https://github.com/microsoft/vscode/issues/95496), [4](https://github.com/aaron-bond/better-comments/issues/51)]

By default, any standard JSON file you create follows the strict [JSON specification](https://code.visualstudio.com/docs/languages/json), which **does not allow comments**. \[[1](https://www.reddit.com/r/learnjavascript/comments/18hqjfr/json%5Fdoes%5Fnot%5Fsupport%5Fhaving%5Fcomments%5Fin%5Fit%5Fthen/), [2](https://www.reddit.com/r/vscode/comments/16rfw5p/why%5Fdoes%5Fsettingsjson%5Fsupport%5Fcomments/), [3](https://code.visualstudio.com/docs/languages/json)]

How to allow comments in your own JSON files

You can force VS Code to treat your files as "JSON with Comments" in two ways: \[[1](https://marketplace.visualstudio.com/items?itemName=j-brooke.fracturedjsonvsc), [2](https://builtin.com/articles/json-with-comments), [3](https://builtin.com/articles/json-with-comments)]

- **Change the Extension**: Rename your file from `.json` to `.jsonc`. VS Code will automatically recognize this as the "JSON with Comments" language mode and update the icon accordingly.
- **Update File Associations**: If you want to keep the `.json` extension but still allow comments, you can map specific files (or all `.json` files) to the `jsonc` mode in your [VS Code Settings](https://code.visualstudio.com/docs/configure/settings):
  1. Open your **User Settings (JSON)**.

  2. Add or update the `files.associations` setting:\
     json

<!---->

```
"files.associations": {
  "*.json": "jsonc"
}
```

Use code with caution.\
_Note: Be careful with this, as other tools (like Node.js or APIs) might still error out if they try to read a JSON file that contains comments._

- **Quick Switch**: You can also manually change the language mode for a single open file by clicking the **Language Indicator** in the bottom-right corner of the status bar (which usually says "JSON") and selecting **"JSON with Comments"** from the list. \[[1](https://www.reddit.com/r/vscode/comments/pt0a8j/how%5Fcan%5Fi%5Fenable%5Fjson%5Fwith%5Fcomments/), [2](https://stackoverflow.com/questions/58553633/how-to-convince-vs-code-to-accept-as-comment-in-json-files), [3](https://builtin.com/articles/json-with-comments), [4](https://www.cloudthat.com/resources/blog/jsonc-vs-json-for-modern-configuration-files), [5](https://jsonc.org/), [6](https://code.visualstudio.com/docs/languages/json)]

Would you like to know how to **permanently change the icons** for these file types using an icon theme?

- [link](https://www.reddit.com/r/vscode/comments/pt0a8j/how%5Fcan%5Fi%5Fenable%5Fjson%5Fwith%5Fcomments/)\
  How can I enable JSON with comments? : r/vscode - Reddit\
  Comments Section. ... JSONC is a json format that allows comments. By setting this file association, you tell VS Code to see all J...\
  Reddit
- [link](https://jsonc.org/)\
  JSONC | Specification\
  Notice: This is a draft of the JSONC Specification and is subject to change. \* Introduction. JSONC (JSON with Comments) is an exte...\
  JSONC
- [link](https://code.visualstudio.com/docs/languages/json)\
  Editing JSON with Visual Studio Code\
  JSON with Comments. In addition to the default JSON mode following the JSON specification, VS Code also has a JSON with Comments (\
  Visual Studio Code

Show all

how does vscode do this

3:02 PM

VS Code does this <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">through a built-in mechanism called <strong>File Associations</strong></mark>, which tells the editor to use a specific "parser" for certain files regardless of their extension. \[[1](https://stackoverflow.com/questions/67978167/why-does-vs-code-allow-comments-in-json-files-within-vscode-but-not-elsewhere), [2](https://code.visualstudio.com/docs/languages/identifiers)]

Here is exactly how VS Code distinguishes them:

1\. The Language Identifier

Internally, VS Code doesn't just look at extensions; it assigns every file a **Language ID**. \[[1](https://stackoverflow.com/questions/50692174/how-can-i-make-vs-code-auto-detect-the-language-by-what-i-type-and-change-the-la), [2](https://code.visualstudio.com/docs/languages/identifiers)]

- **`json`**: This uses a strict parser that follows the official [ECMA-404](https://code.visualstudio.com/docs/languages/json) standard. It throws an error if it sees a comment.
- **`jsonc`**: This uses a specialized "JSON with Comments" parser that intentionally ignores `//` and `/* */` blocks. \[[1](https://github.com/Microsoft/vscode/blob/main/extensions/json-language-features/server/README.md), [2](https://code.visualstudio.com/docs/languages/json), [3](https://hexdocs.pm/jsonc/), [4](https://www.reddit.com/r/learnjavascript/comments/18hqjfr/json%5Fdoes%5Fnot%5Fsupport%5Fhaving%5Fcomments%5Fin%5Fit%5Fthen/), [5](https://stackoverflow.com/questions/67978167/why-does-vs-code-allow-comments-in-json-files-within-vscode-but-not-elsewhere)]

2\. Default Mappings

VS Code comes with a pre-configured list that maps specific filenames to the `jsonc` mode. This is why you see the behavior you described: \[[1](https://code.visualstudio.com/docs/languages/json)]

- **`settings.json`**, **`launch.json`**, and **`tasks.json`** are hardcoded to be treated as `jsonc`.
- **Code Snippets** (which often end in `.code-snippets` or are stored in specific folders) are also mapped to `jsonc` by default.
- **Any unknown `.json` file** defaults to the strict `json` mode. \[[1](https://code.visualstudio.com/docs/editing/userdefinedsnippets), [2](https://stackoverflow.com/questions/67978167/why-does-vs-code-allow-comments-in-json-files-within-vscode-but-not-elsewhere), [3](https://code.visualstudio.com/docs/languages/json), [4](https://stackoverflow.com/questions/50692174/how-can-i-make-vs-code-auto-detect-the-language-by-what-i-type-and-change-the-la)]

3\. The Parser Logic

When you open a file, VS Code checks its **files.associations** list. If the filename matches a pattern associated with `jsonc`, it swaps out the standard JSON validation engine for the one that allows comments. \[[1](https://stackoverflow.com/questions/29973619/how-to-associate-a-file-extension-with-a-certain-language-in-vs-code), [2](https://www.ibm.com/docs/SSCH39%5F1.0.0/com.ibm.wazi.developer.vscode.doc/setting%5Ffileassociations.html), [3](https://stackoverflow.com/questions/67978167/why-does-vs-code-allow-comments-in-json-files-within-vscode-but-not-elsewhere)]

This system also explains the **icon change**: most VS Code icon themes are designed to show a specific icon for the `jsonc` language ID (often a JSON icon with a small "C" or a comment bubble) and a different one for standard `json`. \[[1](https://stackoverflow.com/questions/58553633/how-to-convince-vs-code-to-accept-as-comment-in-json-files), [2](https://github.com/aaron-bond/better-comments/issues/51)]

Would you like the specific **glob patterns** to use in your settings to make all files in a certain folder allow comments?

- [link](https://stackoverflow.com/questions/67978167/why-does-vs-code-allow-comments-in-json-files-within-vscode-but-not-elsewhere)\
  Why does VS Code allow comments in JSON files within ...\
  Comment support in JSON files isn't contingent on file location, or pathname semantics, but instead on the Parser that it is being...\
  Stack Overflow
- [link](https://code.visualstudio.com/docs/languages/json)\
  Editing JSON with Visual Studio Code\
  JSON with Comments. In addition to the default JSON mode following the JSON specification, VS Code also has a JSON with Comments (\
  Visual Studio Code
- [link](https://stackoverflow.com/questions/58553633/how-to-convince-vs-code-to-accept-as-comment-in-json-files)\
  How to convince VS code to accept # as comment in JSON files?\
  \* 2 Answers. Sorted by: 1. If you use the Change Language mode command (or click on the language indicator on the status bar) you ...\
  Stack Overflow

Show all