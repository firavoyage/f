how to open a file and jump to certain line via code cli

To open a file and jump directly to a specific line using a Command Line Interface (CLI), <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use the line number flag specific to your text editor</mark>.

🛠️ Editor Commands

- **VS Code**: `code -g filename.txt:12`
- **Vim / Vi**: `vim +12 filename.txt`
- **Nano**: `nano +12 filename.txt`
- **Emacs**: `emacs +12 filename.txt`
- **Sublime Text**: `subl filename.txt:12`
- **IntelliJ IDEA**: `idea --line 12 filename.txt`

_(Note: Replace `12` with your target line number and `filename.txt` with your file path.)_

💡 Pro-Tip for JetBrains Editors

For editors like IntelliJ, WebStorm, or PyCharm, ensure you have the lightweight launcher installed via the IDE settings (`Tools` -> `Create Command-line Launcher`). \[[1](https://gist.github.com/chrisdarroch/7018927)]

If you want to tailor this to your exact workflow, let me know:

- Which **operating system** you use (Windows, macOS, Linux)?
- What **text editor** you prefer?
- If you need to automate this inside a **bash/python script**?

I can provide the exact syntax or alias configuration for your setup.

- [link](https://gist.github.com/chrisdarroch/7018927)\
  Open a project in IntelliJ IDEA from your command line!\
  Sep 7, 2019 — zerda commented on Jan 26, 2018 Alternative way, IntelliJ IDEA -> Tools -> Create Command-line Launcher...\
  \
  \
  Gist

You said: vscode

Quick results from the web:

[link](https://code.visualstudio.com/)

**Visual Studio Code** - The open source AI code editor | Your ...

**VS Code** has been the editor of choice for millions of developers for over a decade. AI-powered inline suggestions, intelligent completions, and a rich editing ...

Visual Studio Code·https://code.visualstudio.com

[link](https://github.com/microsoft/vscode)

microsoft/**vscode**: **Visual Studio Code** - GitHub

**Visual Studio Code** combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code ...

GitHub·https://github.com

To open a file and jump to a specific line in Visual Studio Code from the terminal, use the `-g` (goto) flag. \[[1](https://code.visualstudio.com/updates/v0%5F5%5F0)]

bash

```
code -g filename.txt:12
```

Use code with caution.

🔍 Syntax Breakdown

- `code`: Launches VS Code.
- `-g`: Tells the editor to go to a specific file position.
- `filename.txt:12`: Specifies the file path, followed by a colon and the line number. \[[1](https://code.visualstudio.com/updates/v0%5F5%5F0)]

⚡ Advanced Navigation

- **Go to line and column**: Append a second colon and column number (e.g., `code -g filename.txt:12:5`).
- **Open at line in current window**: Add the `-r` flag to reuse the active window (`code -r -g filename.txt:12`). \[[1](https://wiki.gentoo.org/wiki/Vscode)]

⚙️ Troubleshooting

If the `code` command returns a "command not found" error, you need to install it to your system path: \[[1](https://safjan.com/add-vscode-to-path/)]

1. Open VS Code manually.
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.
3. Type **"shell command"** \[1].
4. Select **"Shell Command: Install 'code' command in PATH"** \[1]. \[[1](https://docs.alliancecan.ca/wiki/Visual%5FStudio%5FCode/en), [2](https://practical.learnpython.dev/001%5Fprerequisites/30%5Fvs%5Fcode/), [3](https://vscode-docs-arc.readthedocs.io/en/latest/setup/mac/), [4](https://www.tataneu.com/pages/electronics/consumer-electronics/how-to-open-vs-code-from-terminal-on-mac-quick-guide)]

To help you optimize your command line workflow further, let me know:

- Do you need to open **multiple files** at specific lines simultaneously?

- Are you trying to pass line numbers dynamically from **terminal search tools** like `grep` or `ripgrep`?

- What **operating system** are you running?

- [link](https://code.visualstudio.com/updates/v0%5F5%5F0)\
  July 2015 (0.5.0)\
  The -g (or --goto ) command-line option lets you open files at a specific line and column number. This is useful if you're using a...\
  \
  \
  Visual Studio Code

- [link](https://code.visualstudio.com/updates/v0%5F5%5F0)\
  July 2015 (0.5.0)\
  The -g (or --goto ) command-line option lets you open files at a specific line and column number. This is useful if you're using a...\
  \
  \
  Visual Studio Code

- [link](https://wiki.gentoo.org/wiki/Vscode)\
  VS Code - Gentoo wiki\
  May 9, 2025 — -a --add Add folder(s) to the last active window. -g --goto Open a file at the path on the specified line and character position. ...\
  \
  Gentoo Wiki

Show all