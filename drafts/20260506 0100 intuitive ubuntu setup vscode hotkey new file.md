#

vscode new file hotkey

In Visual Studio Code, there are two main ways to create a new file using hotkeys, depending on whether you want a blank tab or a named file in your project: \[[1](https://stackoverflow.com/questions/66327492/vscode-keyboard-shortcut-to-create-a-file-in-a-specific-project-folder), [2](https://www.youtube.com/watch?v=Gkhs1EJRRxg\&t=21), [3](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

1\. Create a New Blank File (Untitled)

This opens a new tab in the editor immediately without asking for a name or location. \[[1](https://hackr.io/blog/best-vscode-shortcuts), [2](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

- **Windows/Linux:** `Ctrl` + `N`
- **macOS:** `Cmd` + `N` \[[1](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf), [2](https://code.visualstudio.com/docs/reference/default-keybindings), [3](https://www.youtube.com/watch?v=Gkhs1EJRRxg\&t=21), [4](https://vueschool.io/lessons/keyboard-shortcuts-for-quickly-managing-files-in-visual-studio-code), [5](https://www.cs.utexas.edu/~abba/hsra-24/install%5Fuse%5Fvscode.html)]

2\. Create a Named File in a Specific Folder \[[1](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

If you want to create and name a file directly within your current project structure (the "Explorer" sidebar), follow these steps:

1. **Focus the Explorer:** Press `Ctrl` + `Shift` + `E` (Windows/Linux) or `Cmd` + `Shift` + `E` (macOS).
2. **New File Prompt:** While the Explorer is focused, press `Ctrl` + `N` (Windows) or `Cmd` + `N` (macOS) to see the name input box. \[[1](https://stackoverflow.com/questions/39599514/vs-code-add-a-new-file-under-the-selected-working-directory), [2](https://dev.to/equiman/vscode-create-files-and-folders-on-the-go-2hd6), [3](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)]

Pro Tip: Command Palette

You can also use the **Command Palette** to create a new file by name without needing to focus the sidebar first: \[[1](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

- Press `Ctrl` + `Shift` + `P` (Windows) or `Cmd` + `Shift` + `P` (macOS).
- Type **"New File"** and hit `Enter`. \[[1](https://www.youtube.com/shorts/mYUOLuJk-Nk), [2](https://www.servicenow.com/docs/r/application-development/vscode-create-file.html), [3](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

Customizing Your Own Hotkey

If you want a single shortcut that always prompts for a name (like the "New File" icon in the sidebar), you can map the `explorer.newFile` command: \[[1](https://stackoverflow.com/questions/39599514/vs-code-add-a-new-file-under-the-selected-working-directory), [2](https://stackoverflow.com/questions/74274732/vscode-shortcut-to-open-new-file-and-edit-its-name), [3](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

1. Open **Keyboard Shortcuts**: `Ctrl` + `K` then `Ctrl` + `S`.
2. Search for **`explorer.newFile`**.
3. Double-click it and assign your preferred shortcut (e.g., `Alt` + `N`). \[[1](https://code.visualstudio.com/docs/configure/keybindings), [2](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345), [3](https://www.youtube.com/shorts/mYUOLuJk-Nk), [4](https://www.youtube.com/watch?v=Gkhs1EJRRxg\&t=21)]

Do you want to know how to set up a shortcut that creates a file and a **folder** at the same time?

- [link](https://stackoverflow.com/questions/39599514/vs-code-add-a-new-file-under-the-selected-working-directory)\
  VS Code - Add a new file under the selected working directory\
  Sep 20, 2016 — 8 Answers. ... The cmd+n command is by default bound to workbench. action. files. newUntitledFile but what you want is the command...\
  Stack Overflow
- [link](https://dev.to/equiman/vscode-create-files-and-folders-on-the-go-2hd6)\
  VSCode - Create Files and Folders without using mouse\
  Oct 2, 2020 — Table\_title: Learn Table\_content: header: | OS | Shortcut | row: | OS: mac | Shortcut: Command + Shift + E | row: | OS: win/linux ...\
  DEV Community
- [link](https://code.visualstudio.com/docs/configure/keybindings)\
  Keyboard shortcuts for Visual Studio Code\
  Visual Studio Code lets you perform most tasks directly from the keyboard. This article explains how you can modify the default ke...\
  Visual Studio Code

Show all

#

vscode newfiles with a specific name hotkey

By default, VS Code doesn't have a single hotkey that creates a new file with a specific, pre-defined name. However, you can achieve this by remapping the **File: New File** command, which immediately prompts you for a name, unlike the default "Untitled" file shortcut. \[[1](https://stackoverflow.com/questions/39599514/vs-code-add-a-new-file-under-the-selected-working-directory), [2](https://www.reddit.com/r/vscode/comments/gajwbw/prompt%5Ffor%5Ffilename%5Fwhen%5Fcreating%5Fnew%5Ffile/), [3](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345), [4](https://ftp.broadwayinfosys.com/blog/renaming-folders-in-vs-code-a-simple-guide-1767648347)]

Recommended Hotkey Setup

The standard `Ctrl+N` (Windows) or `Cmd+N` (Mac) creates an "Untitled" document that you must name later when saving. To get the **New File icon** behavior (where it asks for a name first), follow these steps to bind a custom shortcut: \[[1](https://code.visualstudio.com/docs/reference/default-keybindings), [2](https://www.reddit.com/r/vscode/comments/gajwbw/prompt%5Ffor%5Ffilename%5Fwhen%5Fcreating%5Fnew%5Ffile/), [3](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

1. Open **Keyboard Shortcuts** by pressing `Ctrl+K Ctrl+S` (Windows) or `Cmd+K Cmd+S` (Mac).
2. Search for **`explorer.newFile`**.
3. Double-click the result and record your preferred shortcut (e.g., `Alt+N` or `Ctrl+Alt+N`). \[[1](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345), [2](https://code.visualstudio.com/docs/configure/keybindings), [3](https://github.com/ritwickdey/vscode-create-file-folder), [4](https://stackoverflow.com/questions/66327492/vscode-keyboard-shortcut-to-create-a-file-in-a-specific-project-folder), [5](https://stackoverflow.com/questions/39599514/vs-code-add-a-new-file-under-the-selected-working-directory)]

Creating Files with a Fixed Name

If you need to create a file with a _literal_ specific name (e.g., always creating `index.js`) every time you hit a hotkey, you can use a **Terminal Sequence** in your `keybindings.json`: \[[1](https://stackoverflow.com/questions/59662135/visual-studio-code-keyboard-shortcuts-to-specific-files), [2](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)]

1. Open your **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) and type "Open Keyboard Shortcuts (JSON)".

2. Add this snippet to the file:\
   json

<!---->

```
{
  "key": "alt+i",
  "command": "workbench.action.terminal.sendSequence",
  "args": { "text": "touch index.js\u000d" }
}
```

Use code with caution.\
_Note: Replace `index.js` with your desired filename. `\u000d` acts as the "Enter" key._ \[[1](https://stackoverflow.com/questions/59662135/visual-studio-code-keyboard-shortcuts-to-specific-files), [2](https://www.youtube.com/watch?v=nWIRJBCjls8), [3](https://code.visualstudio.com/docs/configure/keybindings), [4](https://spin.atomicobject.com/shortcuts-vscode-extensions/), [5](https://code.visualstudio.com/updates/v1%5F45)]

Alternative Quick Methods

- **The "Double Enter" Trick**: If the **Explorer** is focused (`Ctrl+Shift+E`), some users find it fastest to press the default "New File" command (if bound) and simply type the name.
- **Extensions**: The vscode-create-file-folder extension provides `Ctrl+Alt+N` to quickly prompt for a filename anywhere in the editor. \[[1](https://stackoverflow.com/questions/39599514/vs-code-add-a-new-file-under-the-selected-working-directory), [2](https://dev.to/equiman/vscode-create-files-and-folders-on-the-go-2hd6), [3](https://github.com/ritwickdey/vscode-create-file-folder)]

Would you like to know how to create **multiple files at once** using a similar shortcut?

- [link](https://stackoverflow.com/questions/72574056/vscode-create-new-folder-in-current-directory-shortcut-key/72574345)\
  Vscode create new folder in current directory shortcut key\
  Jun 10, 2022 — \* 2 Answers 2. Sorted by: Reset to default. 8. Ctrl K and Ctrl S to open Keyboard Shortcuts menu. Search for @command:explorer. ne...\
  Stack Overflow
- [link](https://code.visualstudio.com/docs/configure/keybindings)\
  Keyboard shortcuts for Visual Studio Code\
  Visual Studio Code lets you perform most tasks directly from the keyboard. This article explains how you can modify the default ke...\
  Visual Studio Code
- [link](https://code.visualstudio.com/docs/reference/default-keybindings)\
  Default keyboard shortcuts reference - Visual Studio Code\
  Table\_title: File Management Table\_content: header: | Command | Key | Command id | row: | Command: New File | Key: Ctrl+N | Comman...\
  Visual Studio Code

Show all