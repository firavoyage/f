# how to use ts declareglobal inside node modules as if it's declared here

To make TypeScript recognize a `declare global` block sitting inside a package in your `node_modules` as if it were written directly in your local source code, the TypeScript compiler needs to explicitly load that package's declaration files. [](https://github.com/microsoft/TypeScript/issues/18237)

By default, TypeScript only scans `node_modules` for packages you explicitly `import` or `require`. If the package just injects global types (like side-effects), TypeScript won't automatically read it. [](https://www.reddit.com/r/typescript/comments/1hbqw0n/what%5Fis%5Fglobaldts%5Ffile%5Fin%5Ftypescript%5Fhow%5Fdo%5Fyou/)

You can force TypeScript to include it using **three different methods**.

---

### Method 1: Update `compilerOptions.types` (Recommended)

The cleanest way is to tell your `tsconfig.json` to explicitly load the ambient types from that package, even if it isn't imported anywhere. [](https://github.com/microsoft/TypeScript/issues/18237)

Add the package name to the `types` array in your **`tsconfig.json`**:

json

```
{
  "compilerOptions": {
    "types": ["name-of-the-npm-package"]
  }
}

```



* **Why this works:** TypeScript will look inside `node_modules/name-of-the-npm-package` (or its `@types` counterpart) and process its global definitions during compilation. [](https://www.convex.dev/typescript/advanced/type-operators-manipulation/typescript-declare)

---

### Method 2: Import the package as a side-effect

If you only need the types in specific files or want to bundle the side-effect directly into your application code, import the package at the top of your entry file (e.g., `index.ts` or `main.ts`) without binding any variables: [](https://blakewilliams.me/posts/using-ts-node-with-global-types)

typescript

```
import "name-of-the-npm-package";

// Now the global augmentations are active in your codebase
console.log(globalThis.somePackageGlobal);

```



* **Why this works:** This forces the compiler to resolve the module, pulling its `.d.ts` file—and consequently its `declare global` blocks—into the application's type space. [](https://www.reddit.com/r/typescript/comments/1hbqw0n/what%5Fis%5Fglobaldts%5Ffile%5Fin%5Ftypescript%5Fhow%5Fdo%5Fyou/)

---

### Method 3: Use a Triple-Slash Reference

If you have a local global declaration file (like `src/globals.d.ts`), you can instruct TypeScript to pull in the external package's types using a triple-slash directive at the very top of that file: [](https://github.com/microsoft/TypeScript/issues/18237)

typescript

```
/// <reference types="name-of-the-npm-package" />

```



* **Why this works:** It acts as an explicit dependency link, forcing TypeScript to include the specified package's ambient types whenever it processes your local globals file. [](https://github.com/microsoft/TypeScript/issues/18237)

To give you the exact configuration, could you share:

* The **name of the npm package** you are trying to use?
* Whether it has an explicit **`types` or `typings` field** inside its own `package.json`?

* [](https://github.com/microsoft/TypeScript/issues/18237)  
GitHub  
How to define a global variable in a typescript module, which ...  
ambient/global typings. They just need to be in the scope of your compiler path and by convention they are usually called interfac...
* [](https://blakewilliams.me/posts/using-ts-node-with-global-types)  
blakewilliams.me  
Using ts  
We can use declare to tell TypeScript that global contains a property with a given type.
* [](https://www.reddit.com/r/typescript/comments/1hbqw0n/what%5Fis%5Fglobaldts%5Ffile%5Fin%5Ftypescript%5Fhow%5Fdo%5Fyou/)  
Reddit·r/typescript  
What is global.d.ts file in Typescript ? How do you use ...  
For performance reasons, in every module resolution mode, the compiler always looks for TypeScript and declaration files first, it...

Show all