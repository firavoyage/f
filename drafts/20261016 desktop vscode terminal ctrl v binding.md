# how to bind ctrl v to ctrl shift v on vscode terminal on ubuntu

To bind `Ctrl + V` to paste into the integrated terminal instead of the default Linux shortcut (`Ctrl + Shift + V`), you need to **override VS Code's default terminal keybindings**. [link](https://stackoverflow.com/questions/51521004/in-visual-studio-code-ctrlv-is-not-working)

You can achieve this easily by using either the graphical settings or editing your `keybindings.json` file directly.

### Method 1: The Quick JSON Way (Recommended)

1. Open the Command Palette by pressing **`Ctrl + Shift + P`**.
2. Type `Preferences: Open Keyboard Shortcuts (JSON)` and press **Enter**.
3. Paste the following JSON objects inside the square brackets `[...]`. If you already have existing keybindings, make sure to add a comma separating them: [link](https://www.youtube.com/watch?v=P9J02xGE2Ic\&t=116)

json

```
[
    {
        "key": "ctrl+v",
        "command": "workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+shift+v",
        "command": "-workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    }
]
```

Use code with caution.

- **What this does:** The first rule maps `Ctrl + V` to paste when the terminal is active. The second rule (indicated by the `-` sign before the command) removes the default `Ctrl + Shift + V` binding so they don't conflict. [link](https://www.andrewbirck.com/2023-05-24-remapping-terminal-copy-paste/)

***

### Method 2: The Graphical Interface Way

If you prefer managing settings through the user interface:

1. Open the Keyboard Shortcuts editor by pressing **`Ctrl + K` then `Ctrl + S`**.
2. In the top search bar, type `Terminal: Paste into Active Terminal`.
3. Double-click the result that appears.
4. Press **`Ctrl + V`** on your keyboard when the prompt pops up, then hit **Enter**.
5. Right-click the old `Ctrl + Shift + V` rule (if it is still present) and click **Remove Keybinding**. [link](https://code.visualstudio.com/docs/configure/keybindings)

⚠️ **Important Caveat for Linux Users:**\
By reassigning `Ctrl + V` to paste inside the terminal, you lose the ability to send the native terminal command literal sequence control (`Ctrl + V`). For standard command-line usage, this is rarely an issue, and you will now be able to copy-paste seamlessly just like you do in the standard text editor.

Would you also like to bind **`Ctrl + C`** to copy from the VS Code Terminal, or do you prefer keeping it as the default interrupt command for running processes? [link](https://www.reddit.com/r/linuxmint/comments/188h2gd/way%5Fto%5Fuse%5Fctrlv%5Fto%5Fpaste%5Finto%5Fterminal%5Finstead/)

- [link](https://stackoverflow.com/questions/51521004/in-visual-studio-code-ctrlv-is-not-working)\
  Stack Overflow\
  In Visual Studio Code Ctrl+V is not working\
  Jul 25, 2018 — ctrl + shift + p, then search for keyboard shortcuts, and click Open. Delete everything, and paste this in it: // Place your key b...
- [link](https://www.reddit.com/r/linuxmint/comments/188h2gd/way%5Fto%5Fuse%5Fctrlv%5Fto%5Fpaste%5Finto%5Fterminal%5Finstead/)\
  Reddit·r/linuxmint\
  Way to use CTRL+V to paste into terminal instead of ... - Reddit\
  Then you can change the key bindings in your terminal program for copy/paste to ctrl-c & control-v.
- [link](https://www.andrewbirck.com/2023-05-24-remapping-terminal-copy-paste/)\
  www.andrewbirck.com\
  Remapping Terminal Copy Paste (including VS Code)\
  May 24, 2023 — Go to 'Preferences > Keyboard Shortcuts'; Set the 'Terminal: Copy Selection' keybindings to Ctrl-C; Set the. Paste into Active Ter...

Show all

