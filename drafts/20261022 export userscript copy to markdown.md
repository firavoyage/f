# how to build modern js into userscript

## how to build modern js into userscript

Building modern JavaScript (using **ES6+ modules, TypeScript, React, or JSX**) into a traditional browser userscript requires a bundler. Bundlers compile modern code into a single, unified file and prepend the mandatory `// ==UserScript==` metadata block required by managers like **Tampermonkey** or **Violentmonkey**.

The two easiest and most modern methods to achieve this use either **Vite** (via a specialized plugin) or **Esbuild** (via a custom build script).

***

### Method 1: Using Vite (Recommended & Simplest)

Vite is incredibly fast and has active community plugins specifically designed for creating userscripts.

#### 1. Initialize Your Project

Run the following commands in your terminal to set up a basic Vite project:

bash

```
npm create vite@latest my-modern-userscript -- --template vanilla-ts
cd my-modern-userscript
npm install
```

Use code with caution.

_(You can swap `vanilla-ts` for `react-ts` or `vue-ts` if you want a framework UI)._

#### 2. Install the Userscript Plugin

Install vite-plugin-monkey, which automatically handles userscript injection, hot-reloading during development, and metadata configuration.

bash

```
npm install vite-plugin-monkey -D
```

Use code with caution.

#### 3. Configure `vite.config.ts`

Open your `vite.config.ts` file and structure it to define your userscript metadata:

typescript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'My Modern Userscript',
        namespace: 'npm/vite-plugin-monkey',
        version: '1.0.0',
        match: ['https://example.com*', 'https://*://*'],
        grant: ['GM_setValue', 'GM_getValue'],
      },
    }),
  ],
});
```

Use code with caution.

#### 4. Develop and Build

- **To Develop:** Run `npm run dev`. The plugin will open a local proxy script in your browser. Install it once, and then any changes you save in your IDE will instantly live-reload on your target websites.
- **To Build:** Run `npm run build`. Vite will generate a production-ready file at `dist/my-modern-userscript.user.js` complete with your code bundle and metadata header.

***

### Method 2: Using Esbuild (Lightweight Custom Script)

If you prefer a highly customizable build pipeline without a plugin system, **Esbuild** is the fastest way to bundle modules into a userscript via a simple Node.js script. [link](https://www.youtube.com/watch?v=1D10-%5FzYgN4)

#### 1. Setup Project & Dependencies

Initialize a directory and install Esbuild:

bash

```
npm init -y
npm install esbuild -D
```

Use code with caution.

#### 2. Create the Build Script (`build.js`)

Create a `build.js` file in your root folder. This script bundles your code and manually writes the mandatory Userscript banner to the top of the file:

javascript

```
const esbuild = require('esbuild');
const fs = require('fs');

// 1. Define your Userscript header metadata
const banner = `// ==UserScript==
// @name         Modern Esbuild Userscript
// @namespace    http://tampermonkey.net
// @version      1.0.0
// @description  Built with modern JS and Esbuild
// @author       You
// @match        https://*://*
// @grant        none
// ==/UserScript==
`;

// 2. Run the esbuild bundler
esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/script.user.js',
  banner: { js: banner }, // Automatically pre-pends the metadata block
  format: 'iife',         // Wraps code in an immediately invoked function expression to avoid global scope pollution
  target: ['es2020'],     // Transpiles down to target JavaScript version
}).catch(() => process.exit(1));
```

Use code with caution.

#### 3. Write and Build Your Script

Create your code entry point at `src/index.js` utilizing modern ES modules:

javascript

```
// src/index.js
import { greeting } from './utils.js';
console.log(`${greeting}, world!`);
```

Use code with caution.

- [link](https://www.youtube.com/watch?v=1D10-%5FzYgN4)\
  YouTube·I Code It\
  Master Build Scripts in 10 Minutes: A Quick Guide for React ...\
  Jun 19, 2023 — The 'build' command is defined as using ESBuild to process the source code into a bundle as a faster alternative to Webpack. This ...\
  8:39

## example vite setup wo its default template

### AI Mode reply for example vite setup wo its default template

To set up **Vite without its default framework templates**, you can use the built-in `vanilla` or `vanilla-ts` (TypeScript) templates. This creates a clean, lightweight boilerplate with just a single JavaScript/TypeScript file and an HTML file.

Here is how to scaffold it and configure it manually.

#### 1. Scaffolding the Minimal Project

Run one of the following commands in your terminal to initialize a completely bare-bones project:

bash

```
# Using npm
npm create vite@latest my-clean-app -- --template vanilla

# Using npm for TypeScript
npm create vite@latest my-clean-app -- --template vanilla-ts
```

Use code with caution.

This will create a minimal folder structure containing only:

- `index.html` (the entry point)
- `main.js` (or `main.ts`)
- `style.css`
- `package.json`

***

#### 2. Manual Configuration (`vite.config.js`)

By default, the minimal template doesn't even include a configuration file. To customize it, create a file named **`vite.config.js`** (or `vite.config.ts`) in your root directory:

javascript

```
import { defineConfig } from 'vite';

export default defineConfig({
  // Project root directory (where index.html is located)
  root: './',

  // Base public path when served in development or production
  base: '/',

  server: {
    port: 3000,
    open: true, // Automatically opens the browser
  },

  build: {
    outDir: 'dist',
    minify: 'terser', // Or 'esbuild'
    sourcemap: true,
  },
});
```

Use code with caution.

***

#### 3. The Clean Codebase Structure

Your core files will look exactly like a standard, modern web page without any framework magic:

**`index.html`**

html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- Vite natively handles ESM modules directly via script tags -->
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

Use code with caution.

**`main.js`**

javascript

```
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Hello from a clean Vite setup!</h1>
`;
```

Use code with caution.

Are you setting up this clean Vite config to bundle a specific project, like the **userscript** you asked about earlier, or a **library**? I can show you how to adjust the `build.lib` config for those use cases.

## example vite setup wo the scaffording command

### AI Mode reply for example vite setup wo the scaffording command

To set up **Vite completely from scratch** without using any scaffolding or generation commands, you just need to manually create three files and install Vite as a dependency.

Here is the exact step-by-step manual setup.

#### 1. Initialize and Install

Run these commands in an empty directory to create your `package.json` and install **Vite**:

bash

```
npm init -y
npm install vite --save-dev
```

Use code with caution.

#### 2. Configure package.json

Open your **`package.json`** and add the standard Vite scripts. Ensure you add `"type": "module"` so Node and Vite handle modern ES Modules correctly.

json

```
{
  "name": "manual-vite-project",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {},
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

Use code with caution.

_(Note: Replace `^5.0.0` with whatever version npm installs for you)._

#### 3. Create the Source Files

Manually create an **`index.html`** and a **`main.js`** file in your root folder.

**`index.html`**

html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manual Vite App</title>
</head>
<body>
  <div id="app"></div>
  <!-- Vite requires a native ES module script tag pointed directly to your file -->
  <script type="module" src="/main.js"></script>
</body>
</html>
```

Use code with caution.

**`main.js`**

javascript

```
document.querySelector('#app').innerHTML = `
  <h1>Vite Manual Setup Successful!</h1>
`;
```

Use code with caution.

#### 4. Run It

Start your development server by running:

bash

```
npm run dev
```

Use code with caution.

Would you like to add a manual **`vite.config.js`** file to this setup to configure a **custom output directory**, or are you planning to wire this up with a plugin like **`vite-plugin-monkey`** for your userscript?

## example userscript that uses GM\_registerMenuCommand and popups sth simple for its config, no html page of the script itself

### AI Mode reply for example userscript that uses GM\_registerMenuCommand and popups sth simple for its config, no html page of the script itself

Here is a complete, self-contained **userscript** that registers a Tampermonkey/Violentmonkey menu command. When clicked, it opens a native, non-HTML popup (`prompt`) to handle a simple configuration setting (updating a custom API key).

You can copy and paste this code directly into your userscript manager:

javascript

```
// ==UserScript==
// @name         Simple Menu Config Demo
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Demonstrates GM_registerMenuCommand with a simple prompt config popup
// @author       You
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // 1. Define a function to open the simple config popup
    function openConfigPopup() {
        // Fetch the current saved key, defaulting to an empty string if not set
        const currentKey = GM_getValue("apiKey", "");

        // Open a native browser prompt popup
        const newKey = prompt("Enter your Custom API Key:", currentKey);

        // If the user didn't click "Cancel" (null)
        if (newKey !== null) {
            // Trim whitespace and save the value
            const trimmedKey = newKey.trim();
            GM_setValue("apiKey", trimmedKey);

            alert(`Configuration saved!\nNew Key: ${trimmedKey || "(Empty)"}`);
        }
    }

    // 2. Register the command in the extension's menu
    // This will appear under the Tampermonkey/Violentmonkey icon dropdown
    GM_registerMenuCommand("⚙️ Configure API Key", openConfigPopup);

    // 3. Example usage of the saved config value on the page
    const savedKey = GM_getValue("apiKey", "");
    console.log("[UserScript] Loaded with API Key:", savedKey || "Not set yet");
})();
```

Use code with caution.

#### How it works:

- **`@grant GM_registerMenuCommand`**: Gives the script permission to inject an option directly into the extension's extension icon dropdown list.
- **`@grant GM_setValue` / `GM_getValue`**: Uses the extension's secure database storage to persist your configurations across page reloads and different tabs.
- **`prompt()`**: A native browser popup window. It requires zero HTML, zero CSS framing, and freezes script execution until the user submits an answer or cancels, making it perfect for rapid, zero-overhead setups.

Would you like to see how to bundle this exact `GM_` configuration script using the manual **Vite** setup we created earlier?

## go the build way

### AI Mode reply for go the build way

To bundle that exact configuration userscript using your manual **Vite** setup, you can use **`vite-plugin-monkey`**. This plugin automatically generates the required userscript header comments (`// ==UserScript==`) and ensures that `GM_` APIs are safely injected and preserved during minification.

Here is how to modify your manual setup to build the userscript.

#### 1. Install the Plugin

Run this in your terminal to add the required dependencies:

bash

```
npm install vite-plugin-monkey --save-dev
```

Use code with caution.

#### 2. Configure `vite.config.js`

Create a **`vite.config.js`** file in your root directory. This configures the bundler to compile your modern JS into a final, single `.user.js` file:

javascript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'main.js',
      userscript: {
        name: 'Simple Menu Config Demo',
        namespace: 'http://tampermonkey.net',
        version: '1.0.0',
        description: 'Vite-bundled userscript using GM_registerMenuCommand',
        match: ['*://*/*'],
        // The plugin automatically scans your code for GM_ methods,
        // but declaring grants here enforces proper loading.
        grant: [
          'GM_registerMenuCommand',
          'GM_setValue',
          'GM_getValue'
        ]
      },
    }),
  ],
});
```

Use code with caution.

#### 3. Update Your Source (`main.js`)

Rewrite your **`main.js`** using modern JavaScript (ES Modules). The plugin provides a virtual module named `$'` so you can cleanly import your `GM_` functions:

javascript

```
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';

// Define the config popup
function openConfigPopup() {
  const currentKey = GM_getValue("apiKey", "");
  const newKey = prompt("Enter your Custom API Key (Vite Built):", currentKey);

  if (newKey !== null) {
    const trimmedKey = newKey.trim();
    GM_setValue("apiKey", trimmedKey);
    alert(`Configuration saved via Vite Script!\nNew Key: ${trimmedKey || "(Empty)"}`);
  }
}

// Register the menu command
GM_registerMenuCommand("⚙️ Configure API Key (Vite)", openConfigPopup);

// Core script logic
const savedKey = GM_getValue("apiKey", "");
console.log("[Vite Userscript] Active. Current Key:", savedKey || "None");
```

Use code with caution.

#### 4. Build the Script

Run your build script:

bash

```
npm run build
```

Use code with caution.

Vite will create a **`dist/`** folder containing your final file (e.g., `dist/manual-vite-project.user.js`).

You can drag and drop this file directly into Tampermonkey or Violentmonkey to install it. If you run `npm run dev`, the plugin will even provide a local live-reload link so changes compile and update in your browser instantly.

Would you like to add **TypeScript** support to this bundle, or should we look at how to **auto-reload and test** the userscript locally while you write code?

## no build script

### AI Mode reply for no build script

If you want to use **Vite** without using its standard bundling command (`npm run build`) to create an intermediate file, you can utilize Vite's **Development Server** to feed your source code straight into Tampermonkey in real-time.

By using the plugin's dev mode, Vite dynamically constructs a lightweight "loader" or "proxy" userscript. When you install this loader script into Tampermonkey once, it reaches back out to your local Vite server over `localhost`. As you save files in your IDE, the script updates instantly in your browser via Hot Module Replacement (HMR)—no build step or compiled file required during development.

Here is how to set it up:

#### 1. Start the Dev Server

Instead of compiling, launch the live development server using your existing setup:

bash

```
npm run dev
```

Use code with caution.

#### 2. Install the Auto-Generated Loader

Look closely at your terminal output. When `vite-plugin-monkey` runs in dev mode, it will print a local URL specifically meant for your userscript manager, usually looking like this:

text

```
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  Monkey:  http://localhost:5173/__monkey.user.js
```

Use code with caution.

Click or open the **`http://localhost:5173/__monkey.user.js`** link in your browser.

#### 3. Confirm Installation

Tampermonkey or Violentmonkey will automatically intercept this URL and prompt you to install a script.

- It will look very small because it only contains your `@grant` definitions and a line linking to `http://localhost:5173/main.js`.
- Click **Install**.

#### 4. Code Freely (Zero Builds Required)

Now, open any web page that matches your `@match` rules.

1. Open your browser console.
2. Edit your `main.js` file in your editor (e.g., change the `console.log` message).
3. Save the file.
4. Refresh the webpage. Your changes are immediately live without ever typing a build command.

Would you like to know how to change the **Vite port** so that your loader script URL stays permanently identical every time you restart your computer?

## it should have build script

### AI Mode reply for it should have build script

Ah, got it! My apologies for the misunderstanding. You want to see how to structure the project using a standard **build script** in your `package.json` to generate the final script file, rather than just relying on the dev server.

Here is the exact manual setup with the build configuration included.

#### 1. The Project Setup (`package.json`)

Create your `package.json` file. Notice the `"build"` script line; this is the standard command that tells Vite to execute the compiler and bundle your code.

json

```
{
  "name": "vite-userscript-project",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "vite-plugin-monkey": "^4.0.0"
  }
}
```

Use code with caution.

#### 2. The Configuration (`vite.config.js`)

Create your configuration file. When you trigger the build script, `vite-plugin-monkey` hooks into Vite's bundler to automatically append the userscript metadata block to your compiled code.

javascript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'main.js',
      userscript: {
        name: 'Simple Menu Config Demo',
        namespace: 'http://tampermonkey.net',
        version: '1.0.0',
        description: 'Vite-bundled userscript using GM_registerMenuCommand',
        match: ['*://*/*'],
        grant: [
          'GM_registerMenuCommand',
          'GM_setValue',
          'GM_getValue'
        ]
      },
    }),
  ],
});
```

Use code with caution.

#### 3. The Source Code (`main.js`)

Create your entry file. We import our `GM_` functions natively, keeping the source clean and modern.

javascript

```
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';

function openConfigPopup() {
  const currentKey = GM_getValue("apiKey", "");
  const newKey = prompt("Enter your Custom API Key (Vite Built):", currentKey);

  if (newKey !== null) {
    const trimmedKey = newKey.trim();
    GM_setValue("apiKey", trimmedKey);
    alert(`Configuration saved via Vite Script!\nNew Key: ${trimmedKey || "(Empty)"}`);
  }
}

// Register the menu command into the extension UI
GM_registerMenuCommand("⚙️ Configure API Key (Vite)", openConfigPopup);

// Target logic
const savedKey = GM_getValue("apiKey", "");
console.log("[Vite Userscript] Active. Current Key:", savedKey || "None");
```

Use code with caution.

#### 4. Running the Build Script

To compile everything into your production-ready userscript, run this command in your terminal:

bash

```
npm run build
```

Use code with caution.

##### The Output:

Vite will generate a **`dist/`** folder containing your final script, typically named **`dist/vite-userscript-project.user.js`**.

Inside this file, you will find your complete `// ==UserScript==` header block followed by your cleanly minified, modern JavaScript. You can distribute this single file or drag-and-drop it into Tampermonkey to install it.

Would you like to know how to adjust the configuration so that your final built script automatically copies to your clipboard, or opens directly in your browser upon completion?

## what is dev build preview for for userscripts

### AI Mode reply for what is dev build preview for for userscripts

When developing a userscript with Vite and `vite-plugin-monkey`, the standard frontend commands (`dev`, `build`, and `preview`) take on specialized roles tailored for browser extensions.

Here is what **dev**, **build**, and **preview** are actually used for when you are making a userscript:

***

#### 1. `npm run dev` (Real-Time Development)

- **What it does for userscripts:** It boots up a local server and generates a tiny, virtual **"loader/proxy userscript"** (usually at `http://localhost:5173/__monkey.user.js`).
- **How you use it:** You click that link _once_ to install it into Tampermonkey. After that, you leave it alone. Whenever you edit your local source code, Vite uses Hot Module Replacement (HMR) to inject your code changes instantly straight into your open browser tabs. You don't have to reinstall anything while coding.

***

#### 2. `npm run build` (Production Compilation)

- **What it does for userscripts:** It runs your source code through Rollup/Esbuild to bundle, compile, and minify everything into a **single, standalone file** inside the `dist/` directory (e.g., `dist/my-script.user.js`).
- **How you use it:** This is the command you run when you are completely finished coding. It stitches your `@userscript` header block onto the absolute top of the file and outputs the final script that you upload to GreasyFork, GitHub, or send to your friends. It operates completely independently of localhost.

***

#### 3. `npm run preview` (Testing the Production Build)

- **What it does for userscripts:** It spins up a static local web server to serve the _already compiled, minified production file_ from your `dist/` folder instead of serving your raw source code.
- **How you use it:** It allows you to **double-check your final build before publishing it**. By navigating to the preview server URL, you can install the actual final `.user.js` file into Tampermonkey to ensure that your minification settings, polyfills, or external dependencies (`@require`) behave exactly as expected in the real world without code-splitting or development overhead getting in the way.

***

#### Summary Direct Comparison

| Command       | Focus             | File Type Served                                | Best For...                                           |
| ------------- | ----------------- | ----------------------------------------------- | ----------------------------------------------------- |
| **`dev`**     | Velocity & HMR    | Virtual proxy script (`__monkey.user.js`)       | Writing code and seeing instant updates.              |
| **`build`**   | Final Output      | Tangible, minified production file (`.user.js`) | Preparing your script for release/distribution.       |
| **`preview`** | Quality Assurance | The compiled code inside your `dist/` folder    | Testing exactly what users will see before launching. |

Would you like to know how to configure the **`build`** command to automatically exclude heavy libraries (like jQuery or Axios) from your final script size and load them via **`@require`** instead?

## how to build to build instead of dist

### AI Mode reply for how to build to build instead of dist

To change the output folder from `dist` to `build`, you need to configure Vite's native **`build.outDir`** setting in your configuration file.

Here is how to update your setup:

#### 1. Update `vite.config.js`

Add the `build` object and specify `outDir: 'build'` alongside your monkey plugin setup:

javascript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'main.js',
      userscript: {
        name: 'Simple Menu Config Demo',
        namespace: 'http://tampermonkey.net',
        version: '1.0.0',
        description: 'Vite-bundled userscript using GM_registerMenuCommand',
        match: ['*://*/*'],
        grant: [
          'GM_registerMenuCommand',
          'GM_setValue',
          'GM_getValue'
        ]
      },
    }),
  ],
  // Change the output directory here
  build: {
    outDir: 'build',
    // Optional: Tells Vite to empty the build folder before creating a new one
    emptyOutDir: true,
  }
});
```

Use code with caution.

#### 2. Run your build script

Now when you run your build command:

bash

```
npm run build
```

Use code with caution.

Vite will completely ignore the `dist` directory and output your production userscript inside a folder named **`build/`** instead (e.g., `build/vite-userscript-project.user.js`).

Would you also like to change the **name of the final file** inside that folder (for example, renaming it from your package name to `script.user.js`), or does changing the directory cover what you need?

## how to popup in dom

### AI Mode reply for how to popup in dom

To create a popup completely inside the page's **DOM** (Document Object Model) without using native browser alerts or prompts, you can <mark>dynamically create HTML elements, style them via CSS, and inject them into the webpage</mark>.

Because userscripts run on third-party sites, you must isolate your styles so the host website's CSS doesn't accidentally warp or break your layout. The cleanest way to do this in Vite is to use standard CSS modules or a custom wrapper class.

Here is how to modify your manual **Vite** userscript setup to render a custom DOM popup.

#### 1. Create your styles (`popup.css`)

Create a new file called `popup.css`. We will wrap our popup in a specific container so we can reliably target it.

css

```
/* Container to overlay the webpage */
.my-userscript-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999; /* Ensure it stays on top of everything */
  font-family: Arial, sans-serif;
}

/* The actual popup box */
.my-userscript-popup {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  width: 300px;
  color: #333333;
}

.my-userscript-popup h3 {
  margin-top: 0;
  color: #111111;
}

.my-userscript-popup input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

.my-userscript-popup .button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.my-userscript-popup button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.my-userscript-popup .btn-save {
  background: #007bff;
  color: white;
}

.my-userscript-popup .btn-cancel {
  background: #6c757d;
  color: white;
}
```

Use code with caution.

#### 2. Update your script logic (`main.js`)

Import your CSS file directly into your code. `vite-plugin-monkey` will automatically inject these styles safely into the webpage when your script loads.

javascript

```
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';
import './popup.css'; // Vite bundles and injects this CSS

function openDOMPopup() {
  // Prevent duplicate popups if one is already open
  if (document.querySelector('.my-userscript-overlay')) return;

  const currentKey = GM_getValue("apiKey", "");

  // 1. Create the overlay element
  const overlay = document.createElement('div');
  overlay.className = 'my-userscript-overlay';

  // 2. Insert the HTML structure
  overlay.innerHTML = `
    <div class="my-userscript-popup">
      <h3>Configure API Key</h3>
      <input type="text" id="popup-api-key" value="${currentKey}" placeholder="Enter key...">
      <div class="button-group">
        <button class="btn-cancel" id="popup-cancel">Cancel</button>
        <button class="btn-save" id="popup-save">Save</button>
      </div>
    </div>
  `;

  // 3. Append it directly to the webpage's body
  document.body.appendChild(overlay);

  // 4. Wire up the functionality
  const input = overlay.querySelector('#popup-api-key');
  const saveBtn = overlay.querySelector('#popup-save');
  const cancelBtn = overlay.querySelector('#popup-cancel');

  // Handle Save
  saveBtn.addEventListener('click', () => {
    const trimmedKey = input.value.trim();
    GM_setValue("apiKey", trimmedKey);
    console.log("[Userscript] Saved Key:", trimmedKey);
    overlay.remove(); // Remove popup from DOM
  });

  // Handle Cancel
  cancelBtn.addEventListener('click', () => {
    overlay.remove(); // Remove popup from DOM
  });

  // Close when clicking outside the popup box
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}

// Register the menu command into the extension UI
GM_registerMenuCommand("⚙️ Configure API Key (DOM)", openDOMPopup);
```

Use code with caution.

#### How Vite handles the CSS:

When you execute `npm run build`, `vite-plugin-monkey` takes your imported `popup.css` file, converts it into a JavaScript string string, and uses the `GM_addStyle` capability behind the scenes to append it dynamically to any page you visit. You do not need to manually write styling strings inside your JS.

Would you like to know how to bundle this DOM element into a **Shadow DOM** boundary so that the host website's layout styles can never alter your popup's appearance?

## use jsx

### AI Mode reply for use jsx

To use **JSX** for your DOM popup without bringing in a heavy framework like React or Preact, you can configure Vite to use a lightweight, zero-dependency, native JSX runtime (like standard `vanilla-jsx` configurations or built-in `esbuild` factory transforms) or use standard framework-less configurations.

`vite-plugin-monkey` supports JSX out of the box. The cleanest way to implement this without extra dependencies is using **Preact** because it is extremely tiny (under 4KB), fast, and behaves exactly like native DOM JSX.

Here is how to update your manual setup to build a JSX-based DOM popup.

#### 1. Install Preact

Run this command to add Preact to your development environment:

bash

```
npm install preact
```

Use code with caution.

#### 2. Rename Your Files

Rename your entry point from `main.js` to **`main.jsx`** so Vite knows to process JSX syntax.

#### 3. Update `vite.config.js`

Update your configuration to point to the new entry file name (`main.jsx`). `vite-plugin-monkey` will automatically handle configuring the Preact JSX transform.

javascript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'main.jsx', // Updated to .jsx
      userscript: {
        name: 'JSX Menu Config Demo',
        namespace: 'http://tampermonkey.net',
        version: '1.0.0',
        description: 'Vite-bundled userscript using JSX and Preact for DOM popups',
        match: ['*://*/*'],
        grant: [
          'GM_registerMenuCommand',
          'GM_setValue',
          'GM_getValue'
        ]
      },
    }),
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  }
});
```

Use code with caution.

#### 4. Create the Popup Component (`main.jsx`)

Now you can write clean, component-driven UI inside your userscript using standard JSX tags. We use Preact's `render` function to mount the JSX directly onto the webpage's DOM.

jsx

```
import { render } from 'preact';
import { useState } from 'preact/hooks';
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';
import './popup.css'; // Your styles remain exactly the same

// 1. Create your JSX Component
function PopupConfig({ onClose }) {
  const [apiKey, setApiKey] = useState(GM_getValue("apiKey", ""));

  const handleSave = () => {
    GM_setValue("apiKey", apiKey.trim());
    console.log("[Userscript] Saved Key via JSX:", apiKey.trim());
    onClose();
  };

  return (
    <div className="my-userscript-overlay" onClick={(e) => e.target.className === 'my-userscript-overlay' && onClose()}>
      <div className="my-userscript-popup">
        <h3>Configure API Key</h3>
        <input
          type="text"
          value={apiKey}
          onInput={(e) => setApiKey(e.target.value)}
          placeholder="Enter key..."
        />
        <div className="button-group">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

// 2. Control Mount / Unmount State
function openJSXPopup() {
  if (document.querySelector('.my-userscript-overlay')) return;

  // Create an anchor node to attach our component to
  const container = document.createElement('div');
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove(); // Cleanly purge container from DOM on close
  };

  // Render the JSX directly into the target container
  render(<PopupConfig onClose={closePopup} />, container);
}

// 3. Register the menu command into the extension UI
GM_registerMenuCommand("⚙️ Configure API Key (JSX)", openJSXPopup);
```

Use code with caution.

#### 5. Build

Run your standard build command:

bash

```
npm run build
```

Use code with caution.

Vite will compile the code, automatically embed the tiny Preact runtime helper functions, inject your `.css` rules, and output a singular, highly efficient `build/*.user.js` script.

Would you like to see how to completely isolate this JSX popup using a **Shadow Root** so that the target website's CSS classes can't break your popup's appearance, or does this layout style match what you're building?

## use preact hyperscript

### AI Mode reply for use preact hyperscript

To use **Hyperscript** instead of JSX, you don't need a compilation transform or `.jsx` file extensions. You can write your structure directly in a standard `.js` file by utilizing Preact's built-in `h` function (Hyperscript factory).

To make writing nested layouts much cleaner, we can also use Preact's **`htm`** utility, which provides a React-like syntax inside standard JavaScript template literals.

Here is how to modify your manual setup to build a Hyperscript-driven DOM popup.

#### 1. Install Preact and HTM

Run this command to add Preact and its official Hyperscript template companion:

bash

```
npm install preact htm
```

Use code with caution.

#### 2. Update `vite.config.js`

Ensure your configuration points back to a standard `main.js` file:

javascript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'main.js', // Standard .js extension
      userscript: {
        name: 'Hyperscript Menu Config Demo',
        namespace: 'http://tampermonkey.net',
        version: '1.0.0',
        description: 'Vite-bundled userscript using Preact Hyperscript/htm',
        match: ['*://*/*'],
        grant: [
          'GM_registerMenuCommand',
          'GM_setValue',
          'GM_getValue'
        ]
      },
    }),
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  }
});
```

Use code with caution.

#### 3. Create the Hyperscript Component (`main.js`)

We bind Preact's `h` factory to `htm`. This gives you a clean `html` tagged template literal that functions exactly like JSX but remains native JavaScript.

javascript

```
import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import htm from 'htm';
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';
import './popup.css';

// Initialize the hyperscript template tag
const html = htm.bind(h);

// 1. Define the Popup Component using template literals
function PopupConfig({ onClose }) {
  const [apiKey, setApiKey] = useState(GM_getValue("apiKey", ""));

  const handleSave = () => {
    GM_setValue("apiKey", apiKey.trim());
    console.log("[Userscript] Saved Key via Hyperscript:", apiKey.trim());
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'my-userscript-overlay') {
      onClose();
    }
  };

  return html`
    <div class="my-userscript-overlay" onClick=${handleOverlayClick}>
      <div class="my-userscript-popup">
        <h3>Configure API Key</h3>
        <input
          type="text"
          value=${apiKey}
          onInput=${(e) => setApiKey(e.target.value)}
          placeholder="Enter key..."
        />
        <div class="button-group">
          <button class="btn-cancel" onClick=${onClose}>Cancel</button>
          <button class="btn-save" onClick=${handleSave}>Save</button>
        </div>
      </div>
    </div>
  `;
}

// 2. Control Mount / Unmount State
function openHyperscriptPopup() {
  if (document.querySelector('.my-userscript-overlay')) return;

  const container = document.createElement('div');
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove();
  };

  // Render the Hyperscript component into the target container
  render(html`<${PopupConfig} onClose=${closePopup} />`, container);
}

// 3. Register the menu command into the extension UI
GM_registerMenuCommand("⚙️ Configure API Key (Hyperscript)", openHyperscriptPopup);
```

Use code with caution.

#### 4. Build

Run your build command to generate the script inside your `build/` folder:

bash

```
npm run build
```

Use code with caution.

Would you like to explore how to bundle **external dependencies** into the final userscript via `@require` headers instead of letting Vite compile them directly into the script body?

## use hyperscript like h("div", attrs, children)

### AI Mode reply for use hyperscript like h("div", attrs, children)

To write the layout using **pure Hyperscript function calls** like `h('div', attrs, children)` without any JSX or string-template parsing engines, you can use Preact's core `h` factory directly.

Here is how to structure your source code with pure function elements.

#### 1. Update your Component Code (`main.js`)

We import `h` and `render` from Preact. Instead of tags or template literals, every element is declared explicitly as a JavaScript function call.

javascript

```
import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { GM_registerMenuCommand, GM_setValue, GM_getValue } from '$';
import './popup.css';

// 1. Define the Popup Component using pure Hyperscript function calls
function PopupConfig({ onClose }) {
  const [apiKey, setApiKey] = useState(GM_getValue("apiKey", ""));

  const handleSave = () => {
    GM_setValue("apiKey", apiKey.trim());
    console.log("[Userscript] Saved Key via Pure Hyperscript:", apiKey.trim());
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'my-userscript-overlay') {
      onClose();
    }
  };

  // Structure: h(tag_or_component, attributes_object, ...children)
  return h('div', { className: 'my-userscript-overlay', onClick: handleOverlayClick },
    h('div', { className: 'my-userscript-popup' },
      h('h3', null, 'Configure API Key'),
      h('input', {
        type: 'text',
        value: apiKey,
        onInput: (e) => setApiKey(e.target.value),
        placeholder: 'Enter key...'
      }),
      h('div', { className: 'button-group' },
        h('button', { className: 'btn-cancel', onClick: onClose }, 'Cancel'),
        h('button', { className: 'btn-save', onClick: handleSave }, 'Save')
      )
    )
  );
}

// 2. Control Mount / Unmount State
function openPureHyperscriptPopup() {
  if (document.querySelector('.my-userscript-overlay')) return;

  const container = document.createElement('div');
  document.body.appendChild(container);

  const closePopup = () => {
    container.remove();
  };

  // Mount the component root element
  render(h(PopupConfig, { onClose: closePopup }), container);
}

// 3. Register the menu command into the extension UI
GM_registerMenuCommand("⚙️ Configure API Key (Pure H)", openPureHyperscriptPopup);
```

Use code with caution.

#### 2. Dependencies and Config

Your configuration needs remain light. You only need **Preact** installed:

bash

```
npm install preact
```

Use code with caution.

Your `vite.config.js` points to this standard `main.js` script with the build output assigned to `build/` exactly as configured before.

javascript

```
import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'main.js',
      userscript: {
        name: 'Pure Hyperscript Menu Demo',
        namespace: 'http://tampermonkey.net',
        version: '1.0.0',
        description: 'Vite-bundled userscript using raw Preact h() functions',
        match: ['*://*/*'],
        grant: ['GM_registerMenuCommand', 'GM_setValue', 'GM_getValue']
      },
    }),
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  }
});
```

Use code with caution.

#### 3. Build Your Production Script

Compile the pure JavaScript code into your final standalone file:

bash

```
npm run build
```

Use code with caution.

Would you like to know how to bundle this without embedding Preact inside the script body, utilizing a **CDN delivery rule** via Tampermonkey's native **`@require`** instead?

# how can userscript let user config wo having some floating icon

To let users configure your userscript without cluttering the page with a floating icon, you have several elegant, built-in alternatives.

The best approaches utilize the features provided by modern userscript managers like Tampermonkey or Violentmonkey to integrate settings directly into the browser UI, or trigger them via standard user interactions.

***

### 1. Register a Menu Command (Recommended)

Userscript managers allow you to add a custom menu item directly inside the extension's dropdown menu. When clicked, this menu item can open your configuration UI.

You do this using the `GM_registerMenuCommand` API function.

**How to implement it:**

1. Add `@grant GM_registerMenuCommand` to your script's metadata block.
2. Call the function in your code to bind a settings function.

javascript

```
// ==UserScript==
// @name         My Stealth Script
// @match        https://*://*
// @grant        GM_registerMenuCommand
// ==/UserScript==

function openSettings() {
    // Logic to show a hidden modal or prompt your user
    const userInput = prompt("Enter your custom configuration:", "");
    if (userInput) {
        console.log("Config saved:", userInput);
    }
}

// This adds "Open Script Config" right inside the Tampermonkey/Violentmonkey menu
GM_registerMenuCommand("⚙️ Open Script Config", openSettings);
```

Use code with caution.

### 2. Bind a Keyboard Shortcut

You can listen for a specific key combination (like `Ctrl` + `Shift` + `S`) to toggle your settings panel or modal. This keeps the configuration hidden until explicitly summoned.

javascript

```
window.addEventListener('keydown', (e) => {
    // Triggers when pressing Ctrl + Shift + S
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        openSettingsModal(); // Call your settings UI function
    }
});
```

Use code with caution.

### 3. Hijack/Append to the Website’s Native Settings Page

If your userscript target is a specific site (e.g., GitHub, YouTube, Reddit), you can look for the existing CSS selectors of their native settings sidebar or menu. Use your script to inject a new tab or menu list item labeled "Your Script Settings."

- **Pros:** Feels like a native feature of the website.
- **Cons:** Breaks easily if the website undergoes a UI redesign.

### 4. Create an Interaction-Based Overlay (Double Click / Context Menu)

Instead of a permanent floating icon, you can wait for a specific mouse interaction to bring up the configuration panel.

- **Double-click on empty space:** Listen for a `dblclick` event on the `<body>` element.
- **Custom Context Menu:** Intercept a right-click inside a specific boundary to show a custom menu.

### 5. Utilize External Config Libraries

If you want a pre-built, robust settings panel that saves data automatically using `GM_setValue` and integrates seamlessly with `GM_registerMenuCommand`, consider utilizing a library.

A highly popular library is GM\_config. It allows you to build an entire graphical interface for settings that opens in a clean iframe modal only when requested via your menu command.

Would you like assistance in **writing the CSS/HTML modal** to display the settings panel when triggered, or do you want to learn how to **persistently save the configured data** across page refreshes?

# compare tampermonkey and alternatives

**Tampermonkey** is the most popular, feature-rich userscript manager available, but its core code is **proprietary**. Depending on your needs—such as seeking an open-source tool, better integration with a specific browser, or Manifest V3 compatibility—several excellent alternatives exist. [link](https://www.reddit.com/r/firefox/comments/1e6e7m2/greasemonkey%5Ftampermonkey%5Fviolentmonkey%5Fwhich%5Fone/)

### Direct Comparison Overview

| Manager           | License           | Primary Platform Focus                         | Standout Trait                                                                    |
| ----------------- | ----------------- | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| **Tampermonkey**  | Proprietary       | Cross-platform (Chrome, Firefox, Safari, Edge) | De facto standard; extensive features and cloud sync.                             |
| **Violentmonkey** | Open Source (MIT) | Chrome, Firefox, Edge                          | Lightweight, open-source power-user favorite.                                     |
| **Greasemonkey**  | Open Source (MIT) | Firefox-only                                   | The original pioneer; slow updates, asynchronous API focus.                       |
| **Userscripts**   | Open Source (MIT) | Safari (macOS, iOS, iPadOS)                    | Completely free, native Safari extension with mobile support.                     |
| **Tweeks**        | Proprietary       | Cross-platform (Chrome, Firefox, Safari)       | AI-assisted; lets you describe changes in plain English to auto-generate scripts. |
| **ScriptCat**     | Open Source       | Chromium-based browsers                        | Built for Manifest V3 with background/cron job support.                           |

***

### Deep Dive into Top Alternatives

#### 1. Violentmonkey (The Best Open-Source Alternative)

For users uncomfortable with Tampermonkey's closed-source model, **Violentmonkey** is the top recommendation. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

- **Pros:** Highly performant, completely open-source, and clean UI. It supports older synchronous `GM_` APIs natively, meaning scripts from repositories like Greasy Fork work seamlessly.
- **Cons:** Transitioning to Google Chrome's Manifest V3 has been a bit unstable, so users on newer Chrome builds may experience beta bugs. [link](https://news.ycombinator.com/item?id=22896078)

#### 2. Greasemonkey (The Firefox Original)

The extension that started the entire userscript ecosystem back in 2005. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

- **Pros:** Trusted, entirely open-source, and tailored strictly to the Firefox environment.
- **Cons:** It dropped support for legacy synchronous APIs in favor of an asynchronous `GM.` architecture, meaning many standard scripts require a polyfill to work. Updates also roll out quite slowly. [link](https://www.reddit.com/r/firefox/comments/1e6e7m2/greasemonkey%5Ftampermonkey%5Fviolentmonkey%5Fwhich%5Fone/)

#### 3. Userscripts (The Best for Safari & Apple Users)

Tampermonkey's Safari extension is a paid app on the Mac App Store. If you live in the Apple ecosystem, the **Userscripts app** is an essential alternative. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

- **Pros:** 100% free and open-source. It runs natively across macOS, iOS, iPadOS, and even visionOS, allowing you to run custom JavaScript on an iPhone or iPad.
- **Cons:** Supports a more limited subset of advanced Greasemonkey APIs compared to Tampermonkey. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

#### 4. Tweeks (The Modern No-Code Alternative)

A newer type of extension built for the modern Web Extensions ecosystem. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

- **Pros:** Unlike traditional managers where you must code your own JavaScript or find a pre-made script, **Tweeks** includes an AI assistant. You can type _"hide YouTube shorts"_ or _"add a CSV download button to this table"_, and it automatically builds the userscript for you. It also fully supports standard `.user.js` imports.
- **Cons:** Closed-source framework and heavily tied to its AI integration features. [link](https://www.tweeks.io/blog/tweeks-vs-tampermonkey)

#### 5. ScriptCat (Best for Advanced Developers)

If you require automation beyond basic frontend visual changes, **ScriptCat** is built precisely for that. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

- **Pros:** Native Manifest V3 support from the ground up. It allows for advanced workflows like background scripts, scheduled cron-like tasks, and cloud syncing. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)
- **Cons:** It is a smaller project with a primary community and documentation base written in Chinese, though English localizations are improving. [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)

To give you a more specific recommendation, let me know:

- What **browser** and **operating system** do you use most?

- Do you prefer writing/installing **existing scripts**, or do you want an easier way to **create your own** modifications?

- [link](https://www.tweeks.io/blog/best-tampermonkey-alternatives)\
  Tweeks\
  Best Tampermonkey Alternatives in 2026 - Tweeks.io\
  The project is small, most of its community and documentation live in Chinese (the English docs still have untranslated corners), ...

- [link](https://www.reddit.com/r/firefox/comments/1e6e7m2/greasemonkey%5Ftampermonkey%5Fviolentmonkey%5Fwhich%5Fone/)\
  Reddit·r/firefox\
  Greasemonkey, Tampermonkey, Violentmonkey, which one is ...\
  Jul 18, 2024 — Violentmokey is for power users, and it's open-source. Tampermonkey is a good script manager, but its code is proprietary. Greasy ...

- [link](https://news.ycombinator.com/item?id=22896078)\
  Hacker News\
  Tampermonkey, ViolentMonkey and GreaseMonkey are all ...\
  Tampermonkey, it's ・ it supports old user scripts that use the synchronous \`GM\_...\` ・ introduced a new asynchronous API \`GM....\` ・...

Show all

# userscript match syntax

1:00 AM

### AI Mode reply for userscript match syntax

In userscripts, <mark>the<span> </span><strong><code dir="ltr">@match</code><span> </span>metadata directive follows the Chrome Extension Match Pattern syntax</strong></mark>. It is strict, predictable, and preferred over the older `@include` directive because it provides explicit security permissions. [link](https://stackoverflow.com/questions/31817758/what-is-the-difference-between-include-and-match-in-userscripts)

The basic anatomy of a match pattern is:

text

```
<scheme>://<host><path>
```

Use code with caution.

***

#### 📋 The Three Core Components

| Component      | Allowed Syntax                                    | Description                                                              |
| -------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| **`<scheme>`** | `http`, `https`, or `*`                           | The protocol. Using `*` matches **both** `http` and `https`.             |
| **`<host>`**   | `*`, `*.example.com`, or `example.com`            | The domain. A wildcard `*` at the start matches any subdomain.           |
| **`<path>`**   | Must start with `/` and can contain `*` wildcards | The specific page path. A single `*` matches any sequence of characters. |

***

#### 💡 Common Syntax Examples

- **Match all HTTP and HTTPS websites:**\
  javascript

<!---->

```
// @match *://*/*
```

Use code with caution.

- **Match a specific domain exactly (any protocol):**\
  javascript

<!---->

```
// @match *://://example.com
```

Use code with caution.

- **Match a domain and any of its subdomains:**\
  javascript

<!---->

```
// @match *://*://*
```

Use code with caution.

- **Match a specific path with a wildcard:**\
  javascript

<!---->

```
// @match https://google.com*
```

Use code with caution.

- **Match a specific file extension anywhere in the path:**\
  javascript

<!---->

```
// @match https://example.com
```

Use code with caution.

***

#### ⚠️ Strict Syntax Rules & Pitfalls

1. **No mid-domain wildcards:** You cannot use `// @match *://example.*/*` to match `.com`, `.org`, and `.net`. The `*` in the host can _only_ be at the very beginning (e.g., `*.example.com`). [link](https://www.tampermonkey.net/documentation.php?locale=en\&q=include)
2. **Path wildcard requirement:** If you want to match a whole site, you cannot just write `*://example.com`. You **must** include the trailing slash and wildcard: `*://://example.com*`. [link](https://www.youtube.com/watch?v=UCTA9dbrVqc\&t=54)
3. **No query parameter matching:** You cannot explicitly test query parameters with `@match`. For example, `*://://example.com*` is invalid in strict environments. Instead, use `*://://example.com*` and filter the URL using standard JavaScript inside your script code. [link](https://superuser.com/questions/1833005/how-to-append-a-specific-string-to-a-url-that-matches-constantly-with-tampermon)
4. **No Regular Expressions:** Unlike `@include`, `@match` does **not** support Regex strings. [link](https://stackoverflow.com/questions/31817758/what-is-the-difference-between-include-and-match-in-userscripts)

Are you trying to target a **specific URL structure** that you are having trouble formatting? If you share the URL, I can write the exact `@match` pattern for you.

- [link](https://stackoverflow.com/questions/31817758/what-is-the-difference-between-include-and-match-in-userscripts)\
  Stack Overflow\
  What is the difference between @include and @match in ...\
  @match specifies a single URL pattern where the userscript should run. It is less flexible than @include because it doesn't suppor...
- [link](https://developer.chrome.com/docs/extensions/reference/api/userScripts)\
  Chrome for Developers\
  browser.userScripts | API\
  See Match Patterns for more details on the syntax of these strings. The default is \`USER\_SCRIPT\` .
- [link](https://www.tampermonkey.net/documentation.php?locale=en\&q=include)\
  Tampermonkey\
  Documentation - Tampermonkey\
  It specifies the domain name of the website, such as tmnk.com . You can use the wildcard character \* to match any part of the path...

Show all

## examples

### AI Mode reply for examples

Here is a comprehensive list of **`@match` examples** grouped by common real-world use cases.

#### 🌐 Domain & Subdomain Matching

- **Match a specific domain (and any path):**\
  javascript

<!---->

```
// @match *://://example.com*
```

Use code with caution.\
_Matches:_ `http://example.com`, `https://example.com`, `https://example.com`\
_Does not match:_ `https://example.com`

- **Match a domain and all of its subdomains:**\
  javascript

<!---->

```
// @match *://*://*
```

Use code with caution.\
_Matches:_ `https://example.com`, `https://example.com`, `https://example.com`

- **Match only a specific subdomain:**\
  javascript

<!---->

```
// @match https://example.com*
```

Use code with caution.\
_Matches:_ `https://example.com`\
_Does not match:_ `https://example.com` or `https://example.com`

***

#### 📄 Path & File Type Matching

- **Match an exact page only:**\
  javascript

<!---->

```
// @match https://example.com
```

Use code with caution.\
_Matches:_ `https://example.com`\
_Does not match:_ `https://example.com` (with trailing slash) or `https://example.com`

- **Match a sub-directory and everything inside it:**\
  javascript

<!---->

```
// @match *://://example.com*
```

Use code with caution.\
_Matches:_ `https://example.com`, `https://example.com`\
_Does not match:_ `https://example.com` or `https://example.com`

- **Match paths starting with a specific prefix:**\
  javascript

<!---->

```
// @match *://://example.com*
```

Use code with caution.\
_Matches:_ `https://example.com`, `https://example.com`, `https://example.com`

- **Match specific file extensions:**\
  javascript

<!---->

```
// @match *://*://
```

Use code with caution.\
_Matches:_ `https://example.com`\
_Does not match:_ `https://example.com` (due to the query parameter)

***

#### 🏢 Popular Platform Examples

- **GitHub (all repositories, code pages, and gists):**\
  javascript

<!---->

```
// @match *://*://*
// @match *://gist://*
```

Use code with caution.

- **YouTube (videos and shorts, excluding the homepage):**\
  javascript

<!---->

```
// @match *://*://*
// @match *://*://*
```

Use code with caution.

- **Reddit (both old and new layouts):**\
  javascript

<!---->

```
// @match *://*://*
// @match *://old://*
```

Use code with caution.

***

#### 🛑 Invalid Examples (What NOT to do)

- **❌ Missing path wildcard:** `// @match *://example.com`
  - _Fix:_ Add a trailing slash and wildcard: `*://://example.com*`
- **❌ Wildcard in the middle of a domain:** `// @match *://example.*/*`
  - _Fix:_ You must write separate match lines for each TLD (e.g., one for `.com`, one for `.org`).
- **❌ Wildcard in the scheme:** `// @match http*://://example.com*`
  - _Fix:_ Use `*://://example.com*` to cover both HTTP and HTTPS.

Do you have a **specific website or URL** you are trying to write a script for? Paste it here, and I can give you the exact `@match` lines you need!

# 