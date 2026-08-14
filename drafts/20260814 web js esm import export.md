all js esm import export syntax

Here is the comprehensive guide to all JavaScript **ECMAScript Module (ESM)** `import` and `export` syntaxes. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

***

### Export Syntax

Exports are categorized into **Named Exports** (multiple allowed per file) and **Default Exports** (only one allowed per file). [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

#### Named Exports

javascript

```
// 1. Inline declarations
export const pi = 3.14159;
export let counter = 0;
export function calculateTax(amount) { return amount * 0.1; }
export class UserProfile {}

// 2. Export list (grouped at the bottom)
const theme = 'dark';
const config = { api: 'v1' };
export { theme, config };

// 3. Export with an alias (renaming)
export { theme as applicationTheme, config as appConfig };
```

Use code with caution.

#### Default Exports

javascript

```
// 1. Inline default function or class (can be anonymous)
export default function (user) { return `Hello ${user}`; }
export default class { constructor() {} }

// 2. Exporting an existing value, variable, or object literal
const defaultSettings = { timeout: 3000 };
export default defaultSettings;

// 3. Named symbol as default via export list
const databaseConnection = {};
export { databaseConnection as default };
```

Use code with caution.

***

### Import Syntax

Imports must match the type of export (`named` or `default`) used in the source file. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

#### Importing Named Exports

javascript

```
// 1. Basic named import (exact name match)
import { pi, counter } from './math.js';

// 2. Importing with an alias (renaming)
import { calculateTax as getTax } from './finance.js';

// 3. Importing string-literal exports (useful for unique names)
import { "api-version" as apiVersion } from './api.js';
```

Use code with caution.

#### Importing Default Exports

javascript

```
// 1. Import default (you can assign any local name without curly braces)
import greetUser from './greet.js';

// 2. Import default explicitly using the "default" keyword
import { default as greetUser } from './greet.js';
```

Use code with caution.

#### Mixed & Bulk Imports

javascript

```
// 1. Namespace import (grabs everything, including default, into an object)
import * as MathUtils from './math.js';
// Usage: MathUtils.pi, MathUtils.default()

// 2. Combined default and named imports (default always comes first)
import React, { useState, useEffect } from 'react';

// 3. Combined default and namespace imports
import _, { chunk } from 'lodash';
```

Use code with caution.

#### Side-Effect Imports

javascript

```
// Runs the global code/polyfills inside the file without importing bindings
import './styles.css';
import './polyfills.js';
```

Use code with caution.

***

### Re-exporting (Aggregating Modules)

Re-exporting allows a file to import features from another file and immediately export them, acting as a pass-through hub. [link](https://stackoverflow.com/questions/38077164/es6-export-from-import)

javascript

```
// 1. Re-export everything as named exports (does NOT include the default export)
export * from './components/Button.js';

// 2. Re-export everything as a scoped namespace object
export * as Components from './components/Button.js';

// 3. Re-export specific named items
export { openModal, closeModal } from './components/Modal.js';

// 4. Re-export an item with a new alias
export { checkStatus as verifyUserStatus } from './auth.js';

// 5. Re-export a default export as a named export
export { default as AppHeader } from './components/Header.js';

// 6. Re-export a named export as the new default export
export { ThemeProvider as default } from './context/ThemeContext.js';
```

Use code with caution.

***

### Dynamic Imports & Metadata

Static `import` statements are parsed before execution. If you need conditional or runtime imports, use dynamic expressions. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)

#### Dynamic `import()`

The `import()` operator can be called anywhere and returns a promise resolving to a module namespace object. [link](https://www.reddit.com/r/node/comments/x2rsmj/there%5Fare%5Fvarious%5Fof%5Fways%5Fto%5Fimportexport%5Fjs/)

javascript

```
// 1. Using promises
import('./analytics.js')
  .then((module) => {
    module.trackPageview();
  });

// 2. Using async/await (with destructuring)
const { login, logout } = await import('./auth.js');
```

Use code with caution.

#### Module Metadata

javascript

```
// Contains metadata about the current module (e.g., file URL)
const currentModulePath = import.meta.url;
```

Use code with caution.

If you would like, I can show you how to set up **Node.js** to recognize this syntax using `package.json` configurations or explore how **live bindings** behave differently from CommonJS copies. [link](https://33jsconcepts.com/concepts/es-modules)

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)\
  import - JavaScript - MDN Web Docs - Mozilla\
  Nov 2, 2025 — Named import Given a value named myExport which has been exported from the module my-module either implicitly as export \* from "an...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)\
  export - JavaScript - MDN Web Docs\
  Jun 28, 2026 — You cannot use export on a using or await using declaration. You can, however, export a variable that was declared elsewhere using...\
  MDN Web Docs
- [link](https://stackoverflow.com/questions/38077164/es6-export-from-import)\
  ES6 \`export \* from import\`? - javascript - Stack Overflow\
  Jun 28, 2016 — 3 Answers 3. Sorted by: Reset to default. Highest score (default), Trending (recent votes count more), Date modified (newest first...\
  Stack Overflow

Show all

