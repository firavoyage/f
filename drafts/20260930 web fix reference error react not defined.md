# .

solve a weird bug ("ref error, react not defined") by lifting storybook.index.html and storybook.index.tsx

idk. tsconfig quirk?

# ReferenceError: React is not defined

## ReferenceError: React is not defined

To fix the **`ReferenceError: React is not defined`** error, you need to <mark>provide your JavaScript environment or build tool with access to the<span> </span><strong>React library</strong></mark>. This error typically occurs when a file uses JSX syntax (`<div>...</div>`), which gets compiled into `React.createElement()`, but the compiler can't find the `React` object. [link](https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined)

Here are the most common ways to fix it, depending on your setup:

### 1. The Quick Fix (Add the Missing Import)

If you are using an older version of React (version 16 or lower), or your framework requires explicit imports, add this line to the **very top** of the file throwing the error: [link](https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined)

javascript

```
import React from 'react';
```

Use code with caution.

### 2. If You Are Using Vite

Vite requires a plugin to automatically handle React and its JSX transformation. If you migrated your project or set it up manually, check your config: [link](https://stackoverflow.com/questions/70519656/referenceerror-react-is-not-defined-migrating-from-cra-to-vite-and-nx)

1. Install the React plugin:\
   bash

<!---->

```
npm install @vitejs/plugin-react --save-dev
```

Use code with caution.
2\. Update your **`vite.config.js`** file to include the plugin: [link](https://stackoverflow.com/questions/70519656/referenceerror-react-is-not-defined-migrating-from-cra-to-vite-and-nx)\
javascript

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

Use code with caution.

### 3. If You Are Using Next.js, Babel, or Webpack

If you are using React 17+ and still getting this error, your compiler configuration might be forcing the "classic" JSX runtime instead of the "automatic" runtime (which injects the imports for you). [link](https://github.com/aelbore/esbuild-jest/issues/61)

- **Babel configuration (`.babelrc` or `babel.config.js`):**\
  Ensure your React preset is set to use the automatic runtime:\
  json

<!---->

```
{
  "presets": [
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

Use code with caution.

- **Next.js custom Babel conflict:**\
  If you added a custom `.babelrc` to a Next.js project, it can break Next's automatic compiler. Ensure your preset is specifically using `next/babel`: [link](https://github.com/vercel/next.js/issues/18096)\
  json

<!---->

```
{
  "presets": ["next/babel"]
}
```

Use code with caution.

### 4. If You Are Running Tests (Jest / Vitest)

If your application runs perfectly in the browser but crashes during unit tests, your testing framework is likely missing the global React context. [link](https://github.com/vitest-dev/vitest/discussions/2053)

- **For Vitest:** Make sure you have installed `@vitejs/plugin-react` and loaded it in your `vite.config.js` (as shown in Step 2).

- **For Jest:** You can instruct Jest to inject React globally before running tests. Create or update a setup file (e.g., `jest.setup.js`) and add:\
  javascript

<!---->

```
import React from 'react';
global.React = React;
```

Use code with caution.\
Then link it in your **`jest.config.js`**: [link](https://stackoverflow.com/questions/58980934/referenceerror-react-is-not-defined-in-jest-tests)\
javascript

```
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
```

Use code with caution.

### 5. If You Are Loading React via HTML `<script>` tags

If you aren't using a bundler and are loading React straight from a CDN like unpkg, make sure your React scripts are placed **above** your application script: [link](https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined)

html

```
<!-- 1. Load React first -->
<script src="https://unpkg.com"></script>
<script src="https://unpkg.com"></script>

<!-- 2. Load your app code second -->
<script src="./app.js"></script>
```

Use code with caution.

To give you the exact fix, could you tell me:

- What **build tool or framework** are you using? (e.g., Vite, Next.js, Create React App, Webpack)

- Does the error happen in the **browser console** or when running **tests**?

- [link](https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined)\
  Stack Overflow\
  Uncaught ReferenceError: React is not defined - Stack Overflow\
  Possible reasons are 1. you didn't load React. Solution is load the JS file before the above shown script. Make sure you have the ...

- [link](https://github.com/aelbore/esbuild-jest/issues/61)\
  GitHub\
  ReferenceError: React is not defined · Issue #61 · aelbore/esbuild-jest\
  Nov 30, 2021 — React is not defined. Cause: ESbuild namespace import handling conflicts with Jest mocking or missing global React binding. Workar...

- [link](https://stackoverflow.com/questions/70519656/referenceerror-react-is-not-defined-migrating-from-cra-to-vite-and-nx)\
  Stack Overflow\
  React is not defined\
  Dec 29, 2021 — you can easily add it by installing the @vitejs/plugin-react : # install the plugin yarn add @vitejs/plugin-react ...and then upda...

Show all

## parceljs

To fix **`ReferenceError: React is not defined`** in **Parcel**, you need to ensure Parcel is configured to use the **automatic JSX runtime**.

Parcel uses **Babel** or its built-in SWC compiler to handle JSX. If it defaults to the "classic" runtime, it looks for an explicit `import React from 'react'` at the top of every file. The automatic runtime removes this requirement.

Here is how to fix it step-by-step:

### 1. Update your `.babelrc` (Recommended)

If your project has a `.babelrc` or `babel.config.json` file, update your `@babel/preset-react` config to explicitly use the **`automatic`** runtime.

Change your configuration to match this:

json

```
{
  "presets": [
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

Use code with caution.

### 2. Clear Parcel's Cache

Parcel heavily caches files to make builds fast. If you changed a configuration file, Parcel might still be serving the broken, cached version of your app.

Delete the hidden `.parcel-cache` folder in your project root and restart your server:

bash

```
# Delete the cache folder
rm -rf .parcel-cache dist

# Restart your development server
npm run start
```

Use code with caution.

### 3. Check your `tsconfig.json` or `jsconfig.json`

If you are using TypeScript or have a `jsconfig.json` file setup, ensure your `jsx` compiler option is set to **`react-jsx`** (which triggers the automatic runtime) instead of `react`.

json

```
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

Use code with caution.

### 4. The Fallback: Add the Import

If you do not want to change your build configuration right now, you can instantly fix the error by adding the missing import to the **very top of the file** causing the error:

javascript

```
import React from 'react';
```

Use code with caution.

If the error persists after clearing the cache, please share:

- The version of Parcel you are using (e.g., **Parcel v1** or **Parcel v2**)

- The contents of your **`package.json`** dependencies

