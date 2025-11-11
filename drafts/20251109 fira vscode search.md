how to search a text among all files in a folder in vscode

---

Here are several ways to search for text across all files in a folder in VS Code:

## Method 1: Global Search (Ctrl+Shift+F)

1. **Open the Search panel**:

   - Windows/Linux: `Ctrl+Shift+F`
   - Mac: `Cmd+Shift+F`

2. **Enter your search term** in the search box

3. **Select search scope**:
   - By default, it searches all files in the opened folder
   - To limit search to specific file types, use the "files to include" field (e.g., `*.js` for JavaScript files)

## Method 2: Using the Command Palette

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "Search: Find in Files" and select it
3. Enter your search term

## Method 3: Right-click Context Menu

1. Right-click on a folder in the Explorer panel
2. Select "Find in Folder"
3. This will pre-fill the search with that folder path

## Search Tips and Features

### File Filtering

- Use glob patterns in the "files to include" field:
  - `*.js` - only JavaScript files
  - `*.{js,ts}` - JavaScript and TypeScript files
  - `src/**/*.ts` - all TypeScript files in src subfolders
  - `!node_modules` - exclude node_modules

### Advanced Options

- **Match Case** - toggle case sensitivity
- **Match Whole Word** - exact word matches only
- **Use Regular Expression** - enable regex search
- **Include/Exclude** - specify which files to search

### Keyboard Shortcuts

- `Ctrl+Enter` - open all search results in editor
- `F4` / `Shift+F4` - navigate through results

## Example Search Patterns

```
"function_name" - simple text search
\bfunction\b - regex for whole word "function"
*.txt - search only in text files
src/**/*.js - search in all JS files in src folder
!*.min.js - exclude minified files
```

The search results will show you all occurrences with file names and line numbers, and you can click any result to jump directly to that location.
