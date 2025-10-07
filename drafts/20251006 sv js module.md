# 1

how to let vscode know my libraries. i created an html including a library and a script. in my script, i load the library by deconstructing const, but vscode does not know these fn. im not using typescript or a bundler.

---

To help VSCode recognize your library's functions when using destructuring in a plain JavaScript project, you can use **JSDoc type annotations**. Here's how:

### 1. **Add a Type Declaration File (`.d.ts`)**

Create a `types.d.ts` file in your project root to define the library's types:

```typescript
// types.d.ts
declare namespace MyLibrary {
  function someFunction(): void;
  function anotherFunction(param: string): number;
}
```

### 2. **Reference the Types in Your Script**

At the top of your JavaScript file, reference the type definitions:

```javascript
/// <reference path="./types.d.ts" />

const { someFunction, anotherFunction } = myLibrary;
someFunction(); // VSCode now recognizes this
```

### 3. **Alternative: Use JSDoc in Your JavaScript File**

If you prefer not to create a `.d.ts` file, add JSDoc directly in your script:

```javascript
/** @type { typeof import("./path/to/library.js") } */
const { someFunction, anotherFunction } = myLibrary;
someFunction(); // VSCode will now provide autocomplete
```

### 4. **Check VSCode's JavaScript Settings**

Ensure VSCode's JavaScript support is enabled:

1. Open settings (`Ctrl + ,`).
2. Search for `Check JS`.
3. Enable **`js/ts.implicitProjectConfig.checkJs`**.

### Example Folder Structure:

```
project/
├── index.html
├── script.js
├── lib/
│   └── myLibrary.js
└── types.d.ts
```

### Why This Works:

- **Type Inference**: VSCode uses TypeScript's engine for JavaScript IntelliSense.
- **JSDoc Annotations**: Provide explicit type hints without needing TypeScript compilation.
- **Declaration Files**: Define global types for external libraries.

This approach gives you autocomplete and type checking without a bundler or TypeScript setup.

# 2

js module example

---

Here's a comprehensive JavaScript module example covering different module formats:

## 1. ES6 Modules (Modern Standard)

### math.js (Exporting)

```javascript
// Named exports
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;

// Default export
export default function calculateCircleArea(radius) {
  return PI * radius * radius;
}
```

### app.js (Importing)

```javascript
// Import default export
import calculateCircleArea, { add, multiply, PI } from "./math.js";

// Or import everything
import * as mathUtils from "./math.js";

console.log(add(5, 3)); // 8
console.log(multiply(4, 2)); // 8
console.log(calculateCircleArea(5)); // 78.53975
console.log(mathUtils.PI); // 3.14159
```

## 2. CommonJS (Node.js)

### math.js

```javascript
exports.add = function (a, b) {
  return a + b;
};

exports.multiply = function (a, b) {
  return a * b;
};

module.exports.PI = 3.14159;

// Alternative syntax
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  PI: 3.14159,
};
```

### app.js

```javascript
const math = require("./math.js");

console.log(math.add(5, 3)); // 8
console.log(math.multiply(4, 2)); // 8
```

## 3. Complete Example with Multiple Exports

### userModule.js

```javascript
// Named exports
export const users = [];

export function addUser(name, email) {
  const user = { id: Date.now(), name, email };
  users.push(user);
  return user;
}

export function findUserById(id) {
  return users.find((user) => user.id === id);
}

export function getAllUsers() {
  return [...users]; // Return copy to prevent mutation
}

// Default export
export default class UserManager {
  constructor() {
    this.userCount = 0;
  }

  getStats() {
    return {
      totalUsers: users.length,
      lastAdded: users[users.length - 1],
    };
  }
}
```

### main.js

```javascript
import UserManager, {
  addUser,
  findUserById,
  getAllUsers,
  users,
} from "./userModule.js";

// Using named exports
addUser("John Doe", "john@example.com");
addUser("Jane Smith", "jane@example.com");

console.log(getAllUsers());
console.log(findUserById(users[0].id));

// Using default export
const manager = new UserManager();
console.log(manager.getStats());
```

## 4. Mixed Export Patterns

### utils.js

```javascript
// Default export
export default function logger(message, level = "info") {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
}

// Named exports
export const logLevels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
};

export function createLogger(prefix) {
  return function (message, level = "info") {
    const timestamp = new Date().toISOString();
    console.log(
      `[${timestamp}] ${level.toUpperCase()}: [${prefix}] ${message}`
    );
  };
}
```

### Using mixed exports

```javascript
import logger, { logLevels, createLogger } from "./utils.js";

logger("Application started");
logger("Warning message", logLevels.WARN);

const dbLogger = createLogger("DATABASE");
dbLogger("Connected to database");
```

## 5. Dynamic Imports

```javascript
// Dynamic import (lazy loading)
async function loadModule() {
  try {
    const mathModule = await import("./math.js");
    console.log(mathModule.add(10, 5)); // 15

    const userModule = await import("./userModule.js");
    userModule.addUser("Dynamic User", "dynamic@example.com");
  } catch (error) {
    console.error("Failed to load module:", error);
  }
}

// Conditionally load modules
if (userNeedsAdvancedFeatures) {
  import("./advancedFeatures.js").then((module) => {
    module.initialize();
  });
}
```

## 6. HTML Setup for ES6 Modules

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Modules Example</title>
  </head>
  <body>
    <script type="module" src="main.js"></script>

    <!-- Inline module -->
    <script type="module">
      import { add } from "./math.js";
      console.log("Inline module:", add(2, 3));
    </script>
  </body>
</html>
```

## Key Points:

1. **ES6 Modules** are the modern standard and work in browsers and Node.js
2. **CommonJS** is Node.js's original module system
3. Use `export`/`import` for ES6 modules, `module.exports`/`require()` for CommonJS
4. Modules have their own scope (variables aren't global)
5. Dynamic imports allow code splitting and lazy loading
6. Always use file extensions in imports for better compatibility

This covers the main patterns you'll encounter when working with JavaScript modules!

# 3

vite guide

---

## Vite.js Complete Guide

Vite (French for "fast") is a modern build tool that provides a faster and leaner development experience for modern web projects.

### 1. Installation & Setup

#### Creating a New Project

```bash
# Using npm
npm create vite@latest my-vite-app

# Using yarn
yarn create vite my-vite-app

# Using pnpm
pnpm create vite my-vite-app

# With template specification
npm create vite@latest my-react-app -- --template react
npm create vite@latest my-vue-app -- --template vue
npm create vite@latest my-vanilla-app -- --template vanilla
```

#### Available Templates

- `vanilla`, `vanilla-ts`
- `vue`, `vue-ts`
- `react`, `react-ts`
- `preact`, `preact-ts`
- `lit`, `lit-ts`
- `svelte`, `svelte-ts`

### 2. Project Structure

```
my-vite-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── env files
```

### 3. Vite Configuration

#### Basic vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // automatically open browser
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
```

#### Advanced Configuration

```javascript
import { defineConfig, loadEnv } from "vite";
import path from "path";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode`
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      /* your plugins */
    ],

    // Path resolution alias
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@assets": path.resolve(__dirname, "./src/assets"),
      },
    },

    // Development server配置
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },

    // Build configuration
    build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            utils: ["lodash", "axios"],
          },
        },
      },
    },

    // CSS configuration
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },

    // Environment variables
    define: {
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
    },
  };
});
```

### 4. Environment Variables

#### .env files

```bash
# .env
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=My Vite App

# .env.development
VITE_API_URL=http://localhost:3000/api

# .env.production
VITE_API_URL=https://api.myapp.com
```

#### Using Environment Variables

```javascript
// In your code
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;

console.log(import.meta.env.MODE); // 'development' or 'production'
console.log(import.meta.env.DEV); // true in development
console.log(import.meta.env.PROD); // true in production
```

### 5. Key Features

#### Hot Module Replacement (HMR)

Vite provides out-of-the-box HMR:

```javascript
// HMR example
if (import.meta.hot) {
  import.meta.hot.accept("./module.js", (newModule) => {
    // Update logic when module changes
    newModule.updateContent();
  });
}
```

#### CSS Handling

```javascript
// Import CSS directly in JS
import './style.css'
import '@/styles/global.scss'

// CSS Modules
import styles from './Component.module.css'

// CSS pre-processors (install sass/less/stylus first)
npm install -D sass
```

#### Static Assets

```javascript
// Import assets
import logoUrl from "./logo.png";
import Worker from "./worker.js?worker";
import { version } from "../package.json?raw";

// Public assets (placed in public directory)
// Reference as /vite.svg in index.html
```

### 6. Popular Plugins

#### Essential Plugins

```bash
# React
npm install -D @vitejs/plugin-react

# Vue
npm install -D @vitejs/plugin-vue

# Legacy browser support
npm install -D @vitejs/plugin-legacy

# PWA
npm install -D vite-plugin-pwa

# SVG handling
npm install -D vite-plugin-svgr
```

#### Plugin Configuration Examples

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "My Vite App",
        short_name: "ViteApp",
        theme_color: "#ffffff",
      },
    }),
  ],
});
```

### 7. Building and Deployment

#### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Build with analysis
npm run build -- --mode analyze
```

#### Deployment Examples

##### Netlify

```javascript
// vite.config.js
export default // netlify.toml
defineConfig({
  build: {
    outDir: "dist",
  },
})[build];
command = "npm run build";
publish = "dist";
```

##### Vercel

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

##### GitHub Pages

```javascript
// vite.config.js
export default defineConfig({
  base: "/your-repo-name/",
});
```

### 8. Advanced Features

#### Library Mode

```javascript
// vite.config.js for building libraries
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.js",
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
```

#### Multi-page Application

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./about.html",
        contact: "./contact.html",
      },
    },
  },
});
```

### 9. Performance Optimizations

#### Code Splitting

```javascript
// Dynamic imports for code splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// Manual chunks in vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        chart: ['echarts', 'd3'],
        utils: ['lodash', 'axios', 'date-fns']
      }
    }
  }
}
```

#### Preload Directives

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite handle chunking
      },
    },
  },
});
```

### 10. Common Recipes

#### Path Aliases

```javascript
// vite.config.js
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});

// In your components
import Button from "@components/Button";
import { formatDate } from "@utils/helpers";
```

#### Global CSS Variables

```javascript
// vite.config.js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";
        `,
      },
    },
  },
});
```

#### Proxy Setup for API

```javascript
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/socket": {
        target: "ws://localhost:3001",
        ws: true,
      },
    },
  },
});
```

### 11. Troubleshooting Common Issues

#### Missing Dependencies

```bash
# If you see "Module not found" errors
npm install

# Clear cache
rm -rf node_modules/.vite
```

#### Port Already in Use

```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true, // will fail if port is occupied
  },
});
```

#### Build Size Analysis

```bash
# Install bundle analyzer
npm install -D rollup-plugin-visualizer

# Add to vite.config.js
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    // ... other plugins
    visualizer()
  ]
})
```

This guide covers the essential aspects of working with Vite. The tool's simplicity and speed make it an excellent choice for modern web development projects!
