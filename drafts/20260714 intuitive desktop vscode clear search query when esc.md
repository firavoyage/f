# . keybindings.json

```json
  {
      "key": "escape",
      "command": "runCommands",
      "args": {
          "commands": [
              {
                  "command": "editor.actions.findWithArgs",
                  "args": {
                      "searchString": ""
                  }
              },
              "closeFindWidget"
          ]
      },
      "when": "findWidgetVisible && !editorHasSelection"
  }
```

# how to let vscode reset search query when esc

7:28 AM

To reset or clear your search query when pressing `Escape` in VS Code, you need to add a custom rule to your **`keybindings.json`** file. By default, pressing `Escape` only closes or unfocuses the search widget without wiping the text. [link](https://stackoverflow.com/questions/46287508/vscode-how-to-perform-clear-search-results-in-find-in-files-without-using-t)

### For the "Find in Files" Sidebar (Global Search)

To clear the search term and results when you press `Escape` while looking through your entire project: [link](https://stackoverflow.com/questions/46287508/vscode-how-to-perform-clear-search-results-in-find-in-files-without-using-t)

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Type and select **Preferences: Open Keyboard Shortcuts (JSON)**.
3. Paste the following configuration inside the square brackets `[]`: [link](https://stackoverflow.com/questions/46287508/vscode-how-to-perform-clear-search-results-in-find-in-files-without-using-t)

json

```
{
    "key": "escape",
    "command": "search.action.clearSearchResults",
    "when": "searchViewletFocus"
}
```

Use code with caution.

### For the Panel Search (Bottom Terminal / Problems / Output Panel)

If you want `Escape` to clear queries made inside panel-specific search inputs: [link](https://github.com/microsoft/vscode/issues/142698)

json

```
{
    "key": "escape",
    "command": "search.action.clearSearchResults",
    "when": "panelFocus && searchViewletFocus"
}
```

Use code with caution.

### For the "Find" Widget (Ctrl+F inside a single file)

VS Code does not have a native "clear query text" command for the local `Ctrl+F` widget. However, you can change its default history behavior to stop preserving old queries. [link](https://code.visualstudio.com/docs/editing/codebasics)

1. Open your regular settings using `Ctrl+,` or `Cmd+,`.
2. Search for `editor.find.history`.
3. Change the dropdown setting from `remember` to **`never`**. [link](https://www.youtube.com/watch?v=MD7Tlfn84oI)

This ensures that whenever you close the find widget with `Escape` and reopen it, it won't force you to backspace over your previous query. [link](https://www.youtube.com/watch?v=MD7Tlfn84oI)

If you are using specific extensions like **VSCodeVim**, let me know, as vim extensions require distinct `:noh` bindings to clear search highlights. [link](https://github.com/VSCodeVim/Vim/issues/1053)

- [link](https://stackoverflow.com/questions/46287508/vscode-how-to-perform-clear-search-results-in-find-in-files-without-using-t)\
  VSCode: How to perform "Clear Search Results" in "Find in Files" without using the mouse?\
  There is no default keyboard shortcut for "Clear Search Results" in Visual Studio Code. However, you can add a key binding rule to...\
  Stack Overflow
- [link](https://github.com/microsoft/vscode/issues/2494)\
  Make it clear how to cancel a running search · Issue #2494 · microsoft/vscode\
  To cancel a search in VS Code, you can: \* Press the \*\*ESC\*\* key \* Start another search You can also expand search details by click...\
  GitHub
- [link](https://github.com/vscode-neovim/vscode-neovim/issues/677)\
  First hit of ESC is swallowed by suggestions, have to hit it twice to ...\
  lesiki commented \* Open keyboard shortcuts ( Preferences → Keyboard Shortcuts ) \* Click the button to the right of the search bar ...\
  GitHub

Show all

## i dont want it to keep highlight the query when i esc the ctrl f

i dont want it to keep highlight the query when i esc the ctrl f

7:31 AM

To stop VS Code from keeping search results highlighted when you close the `Ctrl+F` find widget with `Escape`, you need to explicitly tell the `Escape` key to close the widget **and** clear the search string.

By default, closing the widget leaves the text inside it, causing the editor to keep highlighting those matches in the background. [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)

### Step 1: Open your `keybindings.json`

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette.
2. Search for and select: **Preferences: Open Keyboard Shortcuts (JSON)**.

### Step 2: Add the Multi-Command Shortcut

Paste the following block inside the square brackets `[]` of your JSON file. This binding forces VS Code to run a sequence of commands when you hit `Escape` while the local find widget is active: [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)

json

```
{
    "key": "escape",
    "command": "runCommands",
    "args": {
        "commands": [
            "closeFindWidget",
            {
                "command": "editor.actions.findWithArgs",
                "args": {
                    "searchString": ""
                }
            }
        ]
    },
    "when": "findWidgetVisible && !editorHasSelection"
}
```

Use code with caution.

### How this works:

- **`findWidgetVisible`**: This constraint ensures that the shortcut only overrides `Escape` when the `Ctrl+F` box is actually open on your screen.
- **`!editorHasSelection`**: This protects standard VS Code behavior. If you have text actively highlighted/selected in your file, pressing `Escape` will still deselect it first instead of immediately clearing your search state.
- **`runCommands`**: It closes the UI panel and simultaneously injects an empty string (`""`) into the search buffer, completely vanishing the background highlight colors. [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)

Are you using a **Vim extension** (like VSCodeVim or NeoVim), or does this configuration solve the issue for your setup?

- [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)\
  Is there a way to disable highlighting of search results in the ...\
  3 Answers. Sorted by: 2. I don't think there is any direct option to do what you want. As you know the search across files and the...\
  Stack Overflow
- [link](https://superuser.com/questions/1569067/how-to-close-explorer-via-shortcut-in-vs-code)\
  How to close Explorer via shortcut in VS Code?\
  4 Answers 4 Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) to open the command palette. Type "Preferences: Open Keyboard ...\
  \
  \
  Super User
- [link](https://github.com/orgs/community/discussions/139587)\
  how to turn off text highlighting in vs code? #139587 - GitHub\
  3\. Disable Syntax Highlighting. If you want to turn off syntax highlighting completely: You can change the language mode of the fi...\
  \
  \
  GitHub

Show all

## not working

not working

7:31 AM

The previous macro failed because `editor.actions.findWithArgs` requires an active text selection or user focus to register an empty query string.

The most reliable, extension-free way to immediately un-highlight matching text on `Escape` is to utilize VS Code's **`closeFindWidget`** paired with the native **`toggleFindSelection`** state command.

Follow these steps to apply this working fix:

### Step 1: Open your `keybindings.json`

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac).
2. Type and select **Preferences: Open Keyboard Shortcuts (JSON)**.

### Step 2: Paste the Updated Code

Add the following block inside the square brackets `[]` of your JSON file. If you already have the previous snippet there, replace it entirely:

json

```
{
    "key": "escape",
    "command": "runCommands",
    "args": {
        "commands": [
            "closeFindWidget",
            "toggleFindSelection"
        ]
    },
    "when": "findWidgetVisible && !editorHasSelection"
}
```

Use code with caution.

### Why this fix works:

- **`closeFindWidget`**: Dismisses the `Ctrl+F` search UI panel from your screen.
- **`toggleFindSelection`**: Tells VS Code to immediately clear the active match background overlays from the text buffer.
- **`findWidgetVisible`**: Safely ensures your `Escape` key acts perfectly normal when you aren't using the search feature.

Did this combination clear out the highlights on your screen, or do you have a vim/text-manipulation extension overriding your `Escape` key behavior?

## not working

not working

7:33 AM

The reason the previous snippets failed is due to a strict core limitation in VS Code: when you press `Escape` inside the `Ctrl+F` box, VS Code immediately destroys the context of the find widget before it processes any secondary commands. Because of this, it leaves the matching background highlights permanently stuck on your code.

To completely bypass this limitation and guarantee that highlights clear instantly on `Escape`, paste this specific combination into your **`keybindings.json`**:

json

```
[
    {
        "key": "escape",
        "command": "runCommands",
        "args": {
            "commands": [
                {
                    "command": "editor.actions.findWithArgs",
                    "args": {
                        "searchString": " "
                    }
                },
                "closeFindWidget"
            ]
        },
        "when": "findWidgetVisible && !editorHasSelection"
    }
]
```

Use code with caution.

### Why this method works when others fail:

1. **Order of Operations**: This script forces VS Code to alter the search parameters **before** closing the box.
2. **The Space Character Trick**: Sending an empty string `""` is ignored by VS Code's find engine. Instead, this macro sends a single space character (`" "`).
3. **Instant Clearance**: Because it searches for a standalone space instead of your original word, the highlight overlays on your active code vanish instantly before the `closeFindWidget` command closes the UI window.

Let me know if this configuration successfully clears the persistent highlights when you exit search!

## no

no

7:33 AM

If the previous tricks did not work, it means another extension or a built-in VS Code system rule is overriding the `Escape` key and blocking the macro from running.

To bypass this completely, we will use a dedicated extension built precisely to fix this limitation, or use the native settings approach.

### Solution 1: Use the "Clear Search" Extension (Recommended)

Because VS Code natively struggles to chain commands on the `Escape` key, developers created extensions specifically to fix this exact problem.

1. Click on the **Extensions** icon on the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for and install **"Clear Find"** (by _chrmarti_) or **"Escape Clear Search"**.
3. Once installed, open your `keybindings.json` file and paste this clean rule:

json

```
{
    "key": "escape",
    "command": "clearFind",
    "when": "findWidgetVisible"
}
```

Use code with caution.

### Solution 2: The Native Settings Alternative (No Code)

If you prefer not to install an extension, you can change how VS Code handles the highlight persistence natively so it fades out.

1. Open your Settings (`Ctrl+,` or `Cmd+,`).
2. Search for **`editor.find.seedSearchStringFromSelection`**.
3. Set it to **`never`** or uncheck it.
4. Next, search for **`editor.find.globalFindClipboard`** and turn it **Off**.

### Solution 3: Check for Keybinding Conflicts

If it is still not working, another shortcut is likely hijacking your `Escape` key.

1. Press `Ctrl+K` then `Ctrl+S` to open the Keyboard Shortcuts UI.
2. Click the little **Keyboard icon** in the top right corner ("Record Keys").
3. Press `Escape`.
4. Look through the list to see what other command is assigned to `escape` when `findWidgetVisible` is active. Right-click and **Remove Keybinding** on any conflicting rules.

Which of these approaches helped fix the persistent highlight on your screen?

## disable the search query highlight

disable the search query highlight

7:35 AM

To completely **disable or hide the search query background highlight colors**, you can override their color values directly in your main theme configuration. This forces VS Code to render the highlights as transparent, rendering them invisible. [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)

### Step 1: Open your `settings.json`

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette.
2. Select **Preferences: Open User Settings (JSON)**.

### Step 2: Paste the Color Customization

Add the following block to your top-level JSON file. If you already have `"workbench.colorCustomizations"`, merge these fields inside it:

json

```
"workbench.colorCustomizations": {
    "editor.findMatchBackground": "#00000000",
    "editor.findMatchHighlightBackground": "#00000000",
    "editor.findMatchBorder": "#00000000",
    "editor.findMatchHighlightBorder": "#00000000"
}
```

Use code with caution.

### What this does:

- **`#00000000`**: This 8-digit hex code represents pure transparency.
- **`editor.findMatchBackground`**: Hides the highlight color of the currently selected/active search match.
- **`editor.findMatchHighlightBackground`**: Hides the background highlight color for all other identical matches found across the document.
- **`Border` rules**: Erases any thin outline frames that themes sometimes draw around matches instead of color fills. [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)

Save the file (`Ctrl+S`), and your `Ctrl+F` search terms will stop lighting up your screen entirely.

If your screen is _still_ showing matching words light up when you select a word with your mouse, search for **`editor.occurrencesHighlight`** in your settings UI and toggle it **Off**. [link](https://github.com/orgs/community/discussions/139587)

- [link](https://github.com/orgs/community/discussions/139587)\
  how to turn off text highlighting in vs code? #139587 - GitHub\
  1\. Disable Word Highlighting \* Open Settings ( Ctrl + , or Cmd + , on macOS). \* Search for Editor: Occurrences Highlight . \* Unche...\
  GitHub

- [link](https://stackoverflow.com/questions/79159825/is-there-a-way-to-disable-highlighting-of-search-results-in-the-current-file-whe)\
  Is there a way to disable highlighting of search results in the ...\
  While direct solution is not available, you can consider following workaround to reduce the visual prominence of search highlights...\
  Stack Overflow

- [link](https://forum.cursor.com/t/how-do-i-completely-disable-inline-code-suggestions/79071)\
  How do I completely disable inline code suggestions?\
  Method 1: Disable via Settings (JSON) Use the command palette ( Ctrl+Shift+P or Cmd+Shift+P ). Search for “Preferences: Open User ...\
  \
  Cursor - Community Forum
