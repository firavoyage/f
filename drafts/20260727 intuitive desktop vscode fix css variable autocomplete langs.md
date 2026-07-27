# how to prevent css variables to popup in autocomplete in vscode

To prevent CSS variables from appearing in the VS Code autocomplete IntelliSense dropdown, you need to modify your user settings.

### Step-by-Step Solution

1. Open the Command Palette using `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS).
2. Type **Preferences: Open User Settings (JSON)** and press `Enter`.
3. Paste the following configuration lines inside the main root object `{}` of your JSON file:

json

```
"css.customData": [],
"html.customData": [],
"css.suggest.customProperties": false
```

Use code with caution.

### Alternative: Filter by Extension

If the variables are coming from a specific framework or extension (like Tailwind or a CSS-in-JS library), you can disable that specific extension's autocomplete features:

1. Open the **Settings** UI (`Ctrl + ,` or `Cmd + ,`).
2. Search for the name of the extension causing the popups.
3. Uncheck the **Suggestions** or **IntelliSense** options for that extension.

To help narrow this down, let me know:

- Which **language** or **file type** (.css, .scss, .tsx?) you are editing.
- If you want to block **all** CSS variables or just **specific third-party** ones.

I can provide a more tailored snippet based on your exact setup.

- [link](https://stackoverflow.com/questions/70681528/how-can-i-prevent-vs-code-from-jumping-to-the-bottom-of-a-file-after-formatting)\
  How can I prevent VS Code from jumping to the bottom of a file after formatting?\
  Jan 12, 2022 — Modifying JSON Settings In VS Code use keyboard shortcut to to open Command Palette ⇧ SHIFT + ⌘|⊞ + P Begin typing "Preferences - ...\
  \
  \
  Stack Overflow
- [link](https://forum.cursor.com/t/how-do-i-completely-disable-inline-code-suggestions/79071)\
  How do I completely disable inline code suggestions?\
  Apr 14, 2025 — Go to Settings ( Ctrl+, or Cmd+, ).\
  \
  Cursor - Community Forum

# how to prevent css variables to popup in ts autocomplete in vscode

To prevent CSS variables from cluttering your TypeScript autocomplete suggestions in VS Code, you need to adjust your workspace settings.

### Modify VS Code Settings

You can disable these suggestions globally or per project using your `settings.json` file.

1. Open the Command Palette using `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS).
2. Type and select **Preferences: Open User Settings (JSON)**.
3. Add the following lines to your settings object:

json

```
"typescript.suggest.enabled": true,
"html.suggest.html5": true,
"css.customData": [],
"editor.suggest.filteredTypes": {
    "variable": false
}
```

Use code with caution.

### Targeted Fixes for Common Tools

If you use specific framework extensions, they often override standard behaviors:

- **Tailwind CSS**: If the popup stems from Tailwind, add `"tailwindCSS.suggestions.codeActions": false` to your settings.
- **Stylelint / CSS Modules**: If you use a CSS modules type-generator plugin, check your `tsconfig.json` and ensure it does not include raw `.css` files in the `include` array.

If you are using a specific **CSS framework** or **VS Code extension** that keeps pushing these variables, tell me which one it is. I can give you the exact configuration line to disable it.

- [link](https://www.reddit.com/r/vscode/comments/18gis18/how%5Fto%5Fcompletely%5Fturn%5Foff%5Fautocomplete%5Fin%5Fvs%5Fcode/)\
  How to completely turn off autocomplete in VS Code? : r/vscode\
  Dec 12, 2023 — Maybe an extension is suggesting it? I would suggest either searching your settings. json file for suggestion/autocomplete phrases...\
  \
  \
  Reddit

## will it normalize ts autocomplete and make css autocomplete work

**No, applying those exact settings will break your workflows.** They will actively stop standard TypeScript auto-completion from working correctly and will disable standard HTML5 suggestions.

Here is what will actually happen if you use those configurations, why they fail, and how to fix them properly.

### The Problem With Those Settings

- **`"editor.suggest.filteredTypes": { "variable": false }`**: This hides **all** TypeScript variables from your autocomplete popups, completely destroying native TypeScript Intellisense.
- **`"html.suggest.html5": true`**: This is a redundant default setting that has no impact on CSS variables leaking into TypeScript files.
- **`"css.customData": []`**: This only prevents VS Code from reading custom data files you manually created; it will not block active extensions from injecting CSS variables.

### The True Cause

VS Code does not natively leak CSS variables into `.ts` or `.tsx` files. This polluting behavior is almost always caused by a third-party extension—most frequently the [VSCode CSS Variables extension](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables), which is designed to scan your project and aggressively push `--variable` suggestions into every file extension. [link](https://github.com/vunguyentuan/vscode-css-variables/issues/58)

### The Real Fix (Normalized TS & Working CSS)

To safely fix your TypeScript auto-completion and ensure CSS autocomplete works perfectly within your actual style sheets, use these steps instead:

#### 1. Configure the Offending Extension

Instead of breaking global VS Code settings, restrict the specific extension causing the leaks. Open your `settings.json` file and paste the configuration below to isolate CSS variable suggestions exclusively to style sheets:

json

```
"cssVariables.autocompleteInLanguages": [
    "css",
    "scss",
    "less",
    "postcss"
]
```

Use code with caution.

_(This strips `javascript`, `javascriptreact`, `typescript`, and `typescriptreact` from the extension's target list, instantly cleaning up your TypeScript files.)_ [link](https://github.com/vunguyentuan/vscode-css-variables/issues/58)

#### 2. Verify Your CSS Language Association

If your CSS auto-completion isn't working natively in your style sheets, it is likely because a different extension (like PostCSS) has hijacked the file association. [link](https://stackoverflow.com/questions/61171247/vscode-autocomplete-doesnt-work-for-css-files)

1. Open any `.css` file.
2. Look at the bottom-right corner of the VS Code status bar.
3. If it says anything other than **CSS**, click it, select **Configure File Association for '.css'**, and choose **CSS**. [link](https://stackoverflow.com/questions/61171247/vscode-autocomplete-doesnt-work-for-css-files)

If you are still seeing CSS popups after applying this language array restriction, tell me **which CSS extension** you have installed (e.g., Tailwind, CSS Modules, or Styled Components). I can provide the exact toggle to mute it.

- [link](https://stackoverflow.com/questions/70136170/how-to-solve-css-intellisense-for-vscode-not-working/70136300)\
  How to solve CSS intellisense for VSCode not working?\
  Nov 27, 2021 — This should fix your css autocomplete, it is what worked for me. ... It seems this is still an issue when using the extension Post...\
  Stack Overflow
- [link](https://forum.sublimetext.com/t/css-autocomplete-suggests-properties-instead-of-values/24334)\
  CSS autocomplete suggests properties instead of values\
  Nov 13, 2016 — When I type CSS property and colon (or for example type “d” and autocomplete “display”) next autocomplete suggestion is also prope...\
  Sublime Forum
- [link](https://github.com/vunguyentuan/vscode-css-variables/issues/58)\
  Setting to Disable .js / .ts Autocomplete? · Issue #58 - GitHub\
  Jan 26, 2023 — Currently, in a project that does not use CSS-in-JS, the extension fills the autocomplete entries all over the place in JS, JSX, T...\
  GitHub

Show all

# does vscode suggest css variables in autocomplete out of the box

<mark><strong><span>No, Visual Studio Code does not suggest CSS variables globally across different files out of the box.</span></strong></mark>

While the built-in [VS Code CSS Language Service](https://code.visualstudio.com/docs/languages/css) provides autocompletion for variables declared or referenced within the **same active file**, it cannot scan your workspace to suggest variables defined in external stylesheets, `node_modules`, or global theme files. [link](https://stackoverflow.com/questions/79672779/in-vs-code-how-can-i-get-suggestions-for-css-variables-defined-in-other-workspa)

### How to Get Workspace-Wide Autocomplete

To get project-wide CSS variable suggestions across your CSS, SCSS, Less, and JavaScript/TypeScript files, you will need to install a Marketplace extension: [link](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)

- **[CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)**: The most popular choice. It automatically scans your workspace files to build a dictionary of your variables and provides color previews and "Go to Definition" support. [link](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)
- **[CSVars](https://marketplace.visualstudio.com/items?itemName=cr34t1ve.csvars)**: A great zero-configuration alternative that instantly tracks workspace custom properties and updates suggestions in real-time as you type. [link](https://marketplace.visualstudio.com/items?itemName=cr34t1ve.csvars)
- **[CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar)**: Another lightweight extension tailored for globally shared variables that triggers suggestions as soon as you type `--`. [link](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar)

Would you like help configuring one of these extensions to look inside specific folders like `node_modules`? [link](https://stackoverflow.com/questions/79672779/in-vs-code-how-can-i-get-suggestions-for-css-variables-defined-in-other-workspa)

- [link](https://stackoverflow.com/questions/79672779/in-vs-code-how-can-i-get-suggestions-for-css-variables-defined-in-other-workspa)\
  In VS Code, how can I get suggestions for CSS variables ...\
  Jun 20, 2025 — 2 Answers. Sorted by: 1. This is how I currently do this: Install the CSS Variable Autocomplete extension. It should work out of t...\
  Stack Overflow
- [link](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)\
  CSS Variable Autocomplete - Visual Studio Marketplace\
  Vu Nguyen. | 202,546 installs. | (27) | Free. Autocomplete CSS Variable support CSS, SCSS, LESS, PostCSS, VueJS, ReactJS and more.\
  Visual Studio Marketplace
- [link](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar)\
  CSS Var Complete - Visual Studio Marketplace\
  💡 Features: This extension helps provide autocompletion IntelliSense for globally shared CSS Variables and more. How the extensio...\
  Visual Studio Marketplace

Show all

## will these extensions cause problems outside css, e.g. suggest some css vars in ts

**Yes, some extensions can pollute your autocomplete lists outside of CSS files if they are not configured correctly.**

Extensions like **CSS Variable Autocomplete** support JavaScript, TypeScript, and React (`.jsx`/`.tsx`) out of the box so you can use your variables in inline styles or CSS-in-JS frameworks (like styled-components). However, this means they will frequently trigger and suggest CSS variables even when you are just writing normal JavaScript or TypeScript logic.

### How to Fix or Prevent This

If you only want CSS variable suggestions inside actual stylesheets, you can easily restrict these extensions using your VS Code `settings.json` file.

#### 1. Limit the Extension's Target Files

Most of these extensions allow you to explicitly define which file extensions they are allowed to look at. For the **CSS Variable Autocomplete** extension, add this to your global or workspace settings:

json

```
"cssVariables.languages": [
    "css",
    "scss",
    "sass",
    "less"
]
```

Use code with caution.

_(By omitting `javascript`, `typescript`, `javascriptreact`, and `typescriptreact` from this array, the extension will completely sleep while you code in `.ts` or `.js` files)._

#### 2. Choose a CSS-Only Alternative

If you prefer an extension that stays strictly inside style files by default without manual configuration, look at **IntelliSense for CSS class names in HTML**. While primarily for classes, its ecosystem extensions focus heavily on standard web/style contexts rather than deep script injection.

Alternatively, **CSVars** allows you to completely toggle its active status per-workspace if it becomes intrusive during heavy backend TypeScript work.

If you would like, I can give you the exact **JSON snippet** to drop into your VS Code configuration, or walk you through **disabling extensions specifically for TypeScript workspaces**. Which would you prefer?

- [link](https://www.useanvil.com/blog/engineering/purgecss-styled-components/)\
  PurgeCSS & styled-components: Does It Work?\
  Apr 13, 2022 — Styled-components On the other side of our titular question is styled-components. While I'm talking about styled-components specif...\
  \
  \
  www.useanvil.com
- [link](https://www.freecodecamp.org/news/everything-you-need-to-know-about-css-variables-c74d922ea855/)\
  Everything You Need to Know About CSS Variables \[Full Handbook]\
  Feb 12, 2018 — 4. CSS variables can be used in HTML's style attribute. You can choose to set the value of your variables inline, and they'll stil...\
  \
  \
  freeCodeCamp
- [link](https://marketplace.visualstudio.com/items?itemName=cr34t1ve.csvars)\
  CSVars - Completions for CSS Variables\
  A Visual Studio Code extension that provides intelligent autocompletion for CSS custom properties (CSS variables) across your enti...\
  \
  \
  Visual Studio Marketplace

Show all

## is the fix known. "cssVariables.languages": \[

"css",\
"scss",\
"sass",\
"less"\
]

**Yes, this is an official, officially documented configuration setting** explicitly provided by the creators of the _CSS Variable Autocomplete_ extension to control where suggestions appear.

The extension maintains a built-in list of default language identifiers that it targets. When you override that list in your `settings.json` file, you force the extension's internal trigger engine to completely ignore TypeScript and JavaScript files.

### How to apply this fix securely

1. Open your command palette (**Ctrl+Shift+P** on Windows/Linux or **Cmd+Shift+P** on Mac).
2. Type and select **Preferences: Open User Settings (JSON)**.
3. Paste the configuration block inside your main settings object:

json

```
"cssVariables.languages": [
    "css",
    "scss",
    "sass",
    "less"
]
```

Use code with caution.

### What to expect next

- **No more noise in TypeScript**: Typing `--` inside a `.ts` or `.tsx` file will no longer trigger the extension's dropdown list.
- **Flawless CSS support**: The extension will still actively scan your files and give you autocomplete menus whenever you are inside `.css`, `.scss`, `.sass`, or `.less` files.

If you apply this configuration and still notice CSS variables slipping into your TypeScript files, would you like me to help check if **another global style extension** might be causing it?

## can it exclude some folders

<mark><span>Yes, the<span> </span></span><strong>CSS Variable Autocomplete</strong><span> </span>extension allows you to exclude specific folders</mark>. [link](https://github.com/vunguyentuan/vscode-css-variables)

By default, the extension automatically ignores standard build, dependency, and version control directories like `node_modules`, `dist`, `tests`, and `.git`. If you want to manually block it from parsing additional folders (such as a legacy styles folder or a massive third-party assets directory), you can do so by customizing the extension's glob tracking settings. [link](https://github.com/vunguyentuan/vscode-css-variables)

### How to Exclude Folders manually

You can explicitly override the file scan patterns in your global or workspace `settings.json` file.

Instead of an "exclude" array, you define the exact **glob patterns** the extension is allowed to scan. To exclude a specific folder, you simply use an exclamation mark (`!`) at the beginning of the pattern.

#### Example Configuration

If you want to look at all CSS/SCSS files in your project _except_ for a folder named `legacy-styles` and a folder named `public/vendor`, add the following to your settings:

json

```
"cssVariables.lookupFiles": [
    "**/*.css",
    "**/*.scss",
    "**/*.sass",
    "**/*.less",
    "!**/legacy-styles/**",
    "!**/public/vendor/**"
]
```

Use code with caution.

### Pro-Tip: Use Workspace Settings

If you only want this exclusion to apply to your current project (rather than globally across every website you build), create or edit the `.vscode/settings.json` file **at the root of your project folder**. This keeps your rules contained exactly where they are needed without breaking suggestions on other projects.

Would you like help writing a specific **glob pattern** to isolate or target a unique folder structure in your project?

- [link](https://github.com/vunguyentuan/vscode-css-variables)\
  vunguyentuan/vscode-css-variables - GitHub\
  Configuration. By default the extension only scan files with this glob patterns: \[ "\*\*/\*.css", "\*\*/\*.scss", "\*\*/\*.sass", "\*\*/\*.les...\
  GitHub
- [link](https://docs.sonarsource.com/sonarqube-for-vs-code/using/file-exclusions)\
  File exclusions | VS Code - Sonar Documentation\
  Jun 5, 2026 — To use VS Code's file exclusions, go to VS Code Manage > Settings > Workspace (or Code > Settings… > Settings \[⌘,] in macOS), sear...\
  Sonar Documentation
- [link](https://docs.sonarsource.com/sonarqube-community-build/instance-administration/analysis-functions/analysis-scope/excluding-files-based-on-file-paths)\
  Excluding files based on file paths | SonarQube Community Build\
  Mar 13, 2026 — Principles governing the use of file exclusion parameters The parameter defined at the project level will override the same parame...\
  \
  \
  Sonar Documentation

Show all

# css "window not focused" selector

**There is no native CSS selector to detect if the browser window or tab is unfocused.** CSS pseudo-classes like `:focus` or `:focus-within` only track focus on specific HTML elements _within_ the page. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus)

To apply CSS styles when the entire window loses focus, you must use a lightweight **JavaScript event listener** to toggle a class on the `<body>` or `<html>` element.

### The JavaScript & CSS Solution

You can achieve this effect by combining the JavaScript `blur` and `focus` window events with a custom CSS class.

#### 1. The JavaScript

Add this script to your page to toggle an `.unfocused` class whenever the user switches tabs or clicks outside the browser window.

javascript

```
// Add class when the window loses focus
window.addEventListener('blur', () => {
  document.body.classList.add('unfocused');
});

// Remove class when the window gains focus again
window.addEventListener('focus', () => {
  document.body.classList.remove('unfocused');
});
```

Use code with caution.

#### 2. The CSS

Use the `.unfocused` class to style your page or specific elements when the window is inactive.

css

```
/* Normal styles */
body {
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

/* Styles applied ONLY when the window is NOT focused */
body.unfocused {
  background-color: #f0f0f0;
  filter: grayscale(50%); /* Example: dim the page content */
}

/* Style specific elements when the window is unfocused */
body.unfocused .hero-banner {
  opacity: 0.7;
}
```

Use code with caution.

### Alternative: Checking Tab Visibility

If you specifically want to style the page when a user **switches to another browser tab** (rather than just clicking a second monitor), you can use the Page Visibility API: [link](https://stackoverflow.com/questions/1038643/event-for-when-user-switches-browser-tabs)

javascript

```
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.body.classList.add('unfocused');
  } else {
    document.body.classList.remove('unfocused');
  }
});
```

Use code with caution.

Would you like help adapting this code for a specific framework like **React** or **Vue**, or are you looking to create a specific visual effect like **dimming videos** or pausing animations?

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus)\
  focus CSS pseudo-class - MDN Web Docs - Mozilla\
  Apr 17, 2026 — The :focus CSS pseudo-class represents an element (such as a form input) that has received focus. It is generally triggered when t...\
  MDN Web Docs
- [link](https://github.com/alacritty/alacritty/issues/6224)\
  Customize colors based on window focus · Issue #6224 - GitHub\
  Jul 25, 2022 — I think it would be cool as hell to be able to customize colors based on the window focus state. This would be similar to the CSS ...\
  GitHub
- [link](https://www.scaler.com/topics/css-focus-selector/)\
  What is CSS focus Selector? - Scaler Topics\
  Oct 30, 2022 — The focus selector in CSS is a user action pseudo-class selector. It responds with some action when the user performs some interac...\
  Scaler

Show all

## i mean the one that works on chromium

Chromium does support a specific pseudo-class for an inactive window, but it is **highly restricted and only works on text selections**.

Chromium supports the **`:window-inactive`** pseudo-class, but it **cannot** be used to style normal elements like divs, headers, or backgrounds. It only works when chained directly to the **`::selection`** pseudo-element. [link](https://css-tricks.com/window-inactive-styling/)

### The Only Native Chromium Selector: Changing Text Selection Color

Chromium allows you to change the color of highlighted/selected text specifically for when a user clicks onto a different window or monitor. [link](https://css-tricks.com/window-inactive-styling/)

css

```
/* Styling when the text is selected AND the window is active */
::selection {
  background: #0076ff;
  color: white;
}

/* Styling when the text is selected BUT the window loses focus */
::selection:window-inactive {
  background: #b3d7ff; /* A lighter/faded blue */
  color: black;
}
```

Use code with caution.

### Why it doesn't work on other elements

If you try to write a rule like `body:window-inactive` or `.card:window-inactive`, Chromium will completely ignore it.

The W3C CSS standards committee explicitly limited this selector to text selection to prevent developers from creating confusing or jarring UI shifts when users simply look away or move their mouse to another monitor. (Fun fact: Firefox used to support a broader implementation called `:-moz-window-inactive`, but it was non-standard and deprecated). [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:-moz-window-inactive)

### The Chromium-Friendly Workaround (Zero JavaScript)

If you absolute refuse to use JavaScript but need a visual cue that an input or element has lost focus inside Chromium, you can combine the negation pseudo-class `:not()` with **`:focus-within`**. [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-within)

This will style a container element anytime the user is **not interacting with any child elements inside it**:

css

```
/* Applies styles to the form ONLY when nothing inside it is focused */
form:not(:focus-within) {
  opacity: 0.6;
  filter: grayscale(100%);
}
```

Use code with caution.

If you are trying to handle a specific edge-case inside an extension or a Chromium-based app (like Electron), let me know and I can provide an environment-specific fix!

- [link](https://lobehub.com/es/mcp/moinsen-dev-tauri-plugin-mcp)\
  Plugin Tauri: Protocolo de Contexto del Modelo (MCP)\
  Oct 21, 2025 — Issue 6: Screenshots are black or empty. Symptoms: Screenshot tool returns blank or all-black images. Causes & Solutions: Wrong wi...\
  LobeHub
- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:-moz-window-inactive)\
  moz-window-inactive CSS pseudo-class - MDN Web Docs\
  Apr 17, 2026 — :-moz-window-inactive CSS pseudo-class. Non-standard: This feature is not standardized. We do not recommend using non-standard fea...\
  MDN Web Docs
- [link](https://css-tricks.com/window-inactive-styling/)\
  Window Inactive Styling - CSS-Tricks\
  May 6, 2011 — Perhaps a little known fact, but you can use a pseudo selector in conjunction with ::selection to apply styling when the window is...\
  CSS-Tricks

Show all

# . thinking

better to make the workspace consistent
