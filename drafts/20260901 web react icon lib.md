## how to use npm codicons

To use Visual Studio Code's official icon library via npm, install the modern scoped package **`@vscode/codicons`**. _(Note: The older `vscode-codicons` package has been deprecated)._ [link](https://www.npmjs.com/package/@vscode/codicons)

You can use the icons either as a web font with CSS classes or as raw SVG sprites. [link](https://www.npmjs.com/package/@vscode/codicons)

***

### 1. Install the Package

Run the installation command in your project terminal:

bash

```
npm i @vscode/codicons
```

Use code with caution.

***

### 2. Method A: Using CSS Classes (Web Font)

This is the most common integration method. It uses the pre-compiled stylesheet and font files found inside the `node_modules/@vscode/codicons/dist/` directory.

#### Step 1: Import the CSS

Link or import `codicon.css` into your web application or bundler (e.g., Webpack, Vite, or Esbuild):

- **In a JavaScript / TypeScript file:**\
  javascript

<!---->

```
import '@vscode/codicons/dist/codicon.css';
```

Use code with caution.

- **In an HTML file:**\
  html

<!---->

```
<link rel="stylesheet" href="node_modules/@vscode/codicons/dist/codicon.css">
```

Use code with caution.

#### Step 2: Add HTML Elements

Render the icons by creating an empty inline element (like `<i>` or `<span>`). Apply the base `codicon` class followed by the specific `codicon-[icon-name]` class:

html

```
<!-- Display an 'add' plus icon -->
<i class="codicon codicon-add"></i>

<!-- Display an 'account' user icon -->
<span class="codicon codicon-account"></span>
```

Use code with caution.

_Tip: Do not add children elements inside the icon tag._ [link](https://www.npmjs.com/package/@vscode/codicons)

***

### 3. Method B: Using SVG Sprites

If your project pipeline prohibits external web fonts, use the SVG sprite file (`codicon.svg`) instead.

#### Step 1: Copy or Reference the Sprite File

Ensure `node_modules/@vscode/codicons/dist/codicon.svg` is accessible to your public asset distribution folder.

#### Step 2: Use `<svg>` and `<use>` Tags

Reference individual icons using their name fragments as the element ID: [link](https://www.npmjs.com/package/@vscode/codicons)

html

```
<svg width="16" height="16">
  <use xlink:href="path/to/codicon.svg#add" />
</svg>
```

Use code with caution.

***

### 4. Integration in a VS Code Extension Webview

If you are specifically building a VS Code extension webview, you must process the path into a secure URI using `asWebviewUri`:

typescript

```
// Inside your Extension Extension panel code
const codiconsUri = webview.asWebviewUri(
  vscode.Uri.joinPath(extensionUri, 'node_modules', '@vscode/codicons', 'dist', 'codicon.css')
);

// Inject into your webview HTML string
const html = `
  <head>
    <link rel="stylesheet" href="${codiconsUri}" />
  </head>
  <body>
    <i class="codicon codicon-gear"></i>
  </body>
`;
```

Use code with caution.

***

### Finding Icon Names

To explore the available catalog and find specific `[icon-name]` values, you can use the interactive @vscode/codicons Lookup Page. [link](https://www.npmjs.com/package/@vscode/codicons)

If you would like to proceed further, let me know:

- What **framework** you are using (e.g., React, Vue, Svelte, or Vanilla JavaScript)?
- Whether you are targeting a **standard website** or a **VS Code extension panel**?
- If you need help configuration a specific bundler like **Vite** or **Webpack** to move the font files? [link](https://www.npmjs.com/package/@vscode/codicons)

6 sites

- [link](https://www.npmjs.com/package/@vscode/codicons)\
  @vscode/codicons - npm\
  Jul 23, 2026 — Using the Visual Studio Codicon Lookup you can preview and search for icons. \* Install. You can use the npm package and install in...\
  NPM
- [link](https://microsoft.github.io/vscode-codicons/dist/codicon.html)\
  codicon | The icon font for Visual Studio Code\
  codicon. Dark Mode. zoom-out Zoom out or reduce - reduce shrink decrease minimize. zoom-in Zoom in or enlarge - magnify enlarge in...\
  Microsoft Open Source
- [link](https://www.youtube.com/watch?v=BRnyb2p13b8\&t=1)\
  Build your own icon library in Angular part 2/4\
  Mar 10, 2021 — In this part of the series, the process of implementing a framework-agnostic icon library is initiated using svg-icon-library-star...\
  9m\
  YouTube·nivek

Show all

## how does vscode use them

Visual Studio Code uses the **`@vscode/codicons`** library internally to power almost every core piece of its user interface. Because VS Code is built on Electron (HTML, CSS, and TypeScript), it handles icons using a highly optimized, automated infrastructure.

VS Code renders and manages these icons through the following mechanisms:

### 1. The Core Infrastructure: Icon Fonts via CSS

Internally, VS Code maps icons to specific HTML elements. The build system takes the raw `.svg` files from the codicons repository and compiles them into a single TrueType Font (`.ttf`) file using a tool called `fantasticon`. [link](https://www.npmjs.com/package/@vscode/codicons)

When the editor boots up, it injects the compiled stylesheet. To display an icon, the internal editor layout engine injects a DOM element containing the base `codicon` class and the specific icon name: [link](https://www.npmjs.com/package/@vscode/codicons)

html

```
<div class="codicon codicon-debug-start"></div>
```

Use code with caution.

### 2. Product Icon Themes (PIEs)

VS Code separates the _logic_ of an icon from its _visual representation_.

- In the source code, an action refers to an abstract definition (e.g., `ThemeIcon.modify`).
- A **Product Icon Theme** mapping then dictates exactly what that definition resolves to. This abstraction allows users to entirely swap out the look of the editor’s UI elements using custom icon themes from the Marketplace.

### 3. Markdown and Text Rendering (`$(icon-name)`)

Inside text-based UI areas like the Status Bar, Hover tooltips, Markdown previews, or Quick Pick menus, VS Code lets developers render icons inline using a custom markdown-like syntax:

typescript

```
// Example inside a VS Code Extension
myStatusBarItem.text = "$(sync~spin) Syncing database...";
```

Use code with caution.

The internal renderer dynamically parses any string matching the `$(<name>)` format, extracts the text, and swaps it with an explicit `<span class="codicon codicon-sync codicon-modifier-spin"></span>` HTML block.

***

### How New Icons Get Into VS Code

Because the core editor relies directly on this library, updating or adding an icon involves an automated release pipeline: [link](https://microsoft.github.io/vscode-codicons/)

1. A designer exports an optimized vector `.svg` to the `src/icons` folder of the codicons repository.
2. The icon is mapped to a unique Unicode hexadecimal codepoint in a configuration file (`mapping.json`).
3. The codebase compiles, updating the `.ttf` font matrix and TypeScript registry wrappers.
4. The main `microsoft/vscode` core repository bumps its internal `@vscode/codicons` dependency, immediately reflecting the changes across the entire product footprint. [link](https://www.npmjs.com/package/@vscode/codicons)

Would you like to know how to target **Product Icon Themes** to change VS Code's system icons yourself, or how to use the `$(icon)` text syntax inside your own **Extension UI** components?

- [link](https://www.npmjs.com/package/@vscode/codicons)\
  NPM\
  @vscode/codicons - npm\
  Jul 23, 2026 — Codicons. This tool takes the Visual Studio Code icons and converts them into an icon font using fantasticon. Using the Visual Stu...
- [link](https://microsoft.github.io/vscode-codicons/)\
  Microsoft Open Source\
  vscode-codicons\
  You can install Codicons using the npm package: 1. \`npm i @vscode/codicons\` You can also build Codicons locally: 1. Clone the repo...
- [link](https://www.unikist.com/resources/vs-code-codicons)\
  www.unikist.com\
  VS Code Codicons - Unikist\
  Codicons is the icon library Microsoft uses throughout Visual Studio Code, covering file types, Git states, debug controls, and ed...

Show all

## how well does it work if i only use a few icons

If you only need a few icons, using the default web font method is <mark><strong>highly inefficient</strong></mark>.

While it works flawlessly out of the box, importing the entire library means your users have to download the **whole 70KB+ font file (`.ttf`) and CSS map**, even if you only display 2 or 3 icons.

Depending on your setup, here is how well it works and how to optimize it:

***

### The Performance Impact

- **The Problem:** The `@vscode/codicons` package includes hundreds of icons. Loading `codicon.css` forcing the browser to fetch the entire font file. This adds unnecessary weight to your page load time and creates a minor hit to your performance scores (like Lighthouse).
- **The Solution:** If you only need a handful of icons, you should abandon the web font method (`Method A`) and use **individual SVG imports** or a **custom subset font**.

***

### Best Approaches for Using "Just a Few" Icons

#### Approach 1: Direct SVG Imports (Best for Modern Bundlers)

Instead of importing the CSS file, import the exact icons you need as raw SVGs. Modern bundlers (like **Vite, Webpack, or Next.js**) can inline these directly into your JavaScript or HTML, meaning zero extra network requests and zero wasted bytes.

If you are using a tool like `vite-plugin-svgr` or standard Webpack asset loaders, you can import them like this:

javascript

```
// Only the code for these exact two icons will be bundled
import AddIcon from '@vscode/codicons/src/icons/add.svg';
import GearIcon from '@vscode/codicons/src/icons/gear.svg';
```

Use code with caution.

#### Approach 2: SVG Sprite Tree-Shaking

If you don't use a JavaScript framework, copy just the SVGs you need from `node_modules/@vscode/codicons/src/icons/` into your project's assets folder, and use them natively:

html

```
<!-- No external CSS or fonts required -->
<img src="/assets/icons/add.svg" alt="Add" width="16" height="16" />
<img src="/assets/icons/gear.svg" alt="Settings" width="16" height="16" />
```

Use code with caution.

#### Approach 3: Use an Icon Bundler (e.g., Iconify)

If you want the convenience of CSS classes without the file size, use an on-demand icon framework like **Iconify**. Iconify mirrors the entire VS Code Codicon library but only downloads the exact icons you type out.

1. Install the core icon bundle: `npm i @iconify/json`

2. Use it in your project via CSS or JS components using the prefix `vscode:`:\
   html

<!---->

```
<!-- Iconify automatically fetches only these two icons dynamically -->
<span class="iconify" data-icon="vscode:add"></span>
<span class="iconify" data-icon="vscode:gear"></span>
```

Use code with caution.

***

### Summary Table

| Method                  | Setup Effort | Performance / Waste                               | Ideal For                                          |
| ----------------------- | ------------ | ------------------------------------------------- | -------------------------------------------------- |
| **Default Web Font**    | Very Easy    | **Poor** (Loads all 70KB+ for just a few icons)   | Fast prototyping or VS Code Extension environments |
| **Direct SVG Imports**  | Medium       | **Excellent** (Only bundles the exact bytes used) | React, Vue, Vite, or Webpack apps                  |
| **Iconify / On-Demand** | Medium       | **Excellent** (Automated tree-shaking)            | Production websites keeping bundle size strict     |

If you want to set up the high-performance SVG route, let me know **what build tool or framework** you are running (e.g., Vite, Next.js, React, Vanilla HTML) so I can give you the exact configuration snippet!

