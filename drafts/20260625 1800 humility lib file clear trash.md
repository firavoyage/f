# how to clear a directory in nodejs

To clear or empty a directory in Node.js, you have two distinct options depending on your end goal: <mark><strong>deleting and recreating the folder</strong></mark> (the fastest modern method) or **deleting only its contents** (preserving the folder itself). [link](https://www.reddit.com/r/node/comments/ujiqy9/how%5Fto%5Fempty%5Fa%5Ffolder%5Fin%5Fnodejs/)

Here is how to implement both using the native `fs` module.

### Method 1: Delete and Recreate (Recommended)

The most efficient way to empty a folder in modern Node.js is to completely wipe it out using `fs.rm` with the `recursive` option, and then immediately recreate it. [link](https://www.reddit.com/r/node/comments/ujiqy9/how%5Fto%5Fempty%5Fa%5Ffolder%5Fin%5Fnodejs/)

**Asynchronous (Promises):**

javascript

```
import { rm, mkdir } from 'node:fs/promises';

async function clearDirectory(dirPath) {
  try {
    // Force deletes the folder and everything inside it
    await rm(dirPath, { recursive: true, force: true });
    // Recreates the empty folder
    await mkdir(dirPath, { recursive: true });
    console.log('Directory cleared successfully!');
  } catch (err) {
    console.error('Error clearing directory:', err);
  }
}

clearDirectory('./my-folder');
```

Use code with caution.

**Synchronous:**

javascript

```
const fs = require('node:fs');

function clearDirectorySync(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

clearDirectorySync('./my-folder');
```

Use code with caution.

### Method 2: Delete Contents Only (Preserve Parent Folder)

If another system process is watching the root folder, or if you need to preserve its specific operating system permissions and timestamps, you should read the directory and delete the individual items inside it. [link](https://www.reddit.com/r/node/comments/ujiqy9/how%5Fto%5Fempty%5Fa%5Ffolder%5Fin%5Fnodejs/)

**Asynchronous (Promises):**

javascript

```
import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';

async function emptyDirectoryContents(dirPath) {
  try {
    const files = await readdir(dirPath);

    const deletePromises = files.map(file =>
      rm(path.join(dirPath, file), { recursive: true, force: true })
    );

    await Promise.all(deletePromises);
    console.log('All contents deleted, parent folder preserved.');
  } catch (err) {
    console.error('Error emptying directory:', err);
  }
}

emptyDirectoryContents('./my-folder');
```

Use code with caution.

### Alternative: Using the `fs-extra` Package

If you prefer a clean one-liner without writing utility wrappers, you can install the third-party library [fs-extra](https://bobbyhadz.com/blog/delete-all-files-in-a-directory-using-node-js):

bash

```
npm install fs-extra
```

Use code with caution.

javascript

```
const fsExtra = require('fs-extra');

// This deletes all files and subfolders, leaving the main folder intact
fsExtra.emptyDir('./my-folder')
  .then(() => console.log('Directory cleared!'))
  .catch(err => console.error(err));
```

Use code with caution.

If you need help tailoring this to a specific framework (like Express or Next.js) or handling special file permissions, let me know!

- [link](https://www.reddit.com/r/node/comments/ujiqy9/how%5Fto%5Fempty%5Fa%5Ffolder%5Fin%5Fnodejs/)\
  How to empty a folder in Node.js - Reddit\
  May 6, 2022 — You can just fs. rmdir recursive and fs. mkdir. Not sure how forward slash paths behave in Windows, but I'd suggest using the path...\
  Reddit·r/node
- [link](https://nodejs.org/learn/manipulating-files/working-with-folders-in-nodejs)\
  Working with folders in Node.js\
  Remove a folder. Use fs. rmdir() or fs. rmdirSync() or fsPromises. rmdir() to remove a folder. CJS ESM. const fs = require('node:f...\
  Node.js
- [link](https://bobbyhadz.com/blog/delete-all-files-in-a-directory-using-node-js)\
  How to Delete all Files in a Directory using Node.js - bobbyhadz\
  Apr 5, 2024 — # How to Delete all Files in a Directory using fs-extra You can also use the popular fs-extra package to delete all files in a dir...\
  bobbyhadz

Show all

## move into trash

To safely move a file or directory to the OS trash bin instead of permanently deleting it, you need to use a third-party library, as Node.js's native `fs` module only supports permanent deletion.

The standard ecosystem solution for this is the `trash` package.

### 1. Install the Package

Run this command in your project terminal:

bash

```
npm install trash
```

Use code with caution.

### 2. Implementation

The package uses a modern ES Module structure. It accepts a single file/folder path or an array of multiple paths. It also supports glob patterns (like `*.png`).

**Code Example:**

javascript

```
import trash from 'trash';

async function moveToTrash(targetPath) {
  try {
    // Moves the file or folder to the OS-specific recycle bin
    await trash(targetPath);
    console.log(`${targetPath} successfully moved to trash!`);
  } catch (err) {
    console.error('Error moving item to trash:', err);
  }
}

// Example usage:
moveToTrash('./my-folder');
```

Use code with caution.

### Platform Behavior

- **macOS:** Moves items to the system Trash via a native AppleScript/Swift wrapper.
- **Linux:** Follows the XDG Desktop Trash Specification.
- **Windows:** Moves items to the Recycle Bin using a native executable execution.

If you are building an application where you need to **restore** files from the trash programmatically, or if you need this to work inside a specific **desktop framework** like Electron, let me know!

- [link](https://www.amitmerchant.com/trash-a-better-alternative-to-rm-command/)\
  trash — A safer alternative to the rm Command\
  Jul 7, 2023 — This is where an npm package called trash comes in handy. It ( The trash CLI tool ) 's a cross-platform (works on macOS (10.12+), ...\
  \
  \
  www.amitmerchant.com
- [link](https://hasseg.org/trash/)\
  trash\
  trash This is a small command-line program for OS X that moves files or folders to the trash. By default, trash asks Finder to mov...\
  \
  hasseg.org
- [link](https://github.com/hymkor/trash-go)\
  GitHub - hymkor/trash-go: The trash-go is the library for golang to move specified files to trashbox\
  Apr 23, 2025 — On Windows, files are moved to the Recycle Bin using native shell operations.\
  \
  \
  GitHub

## param of trash

The JavaScript `trash()` API accepts two parameters: **the target paths** (which can be a single string or an array of strings/glob patterns) and an optional **`options` object**. [link](https://www.npmjs.com/package/trash-cli)

The signature looks like this: `trash(input, options?)`

***

### 1. `input` (Required)

- **Type:** `string` or `string[]`
- **Description:** The path or multiple paths to the files or directories you want to send to the recycle bin.
- **Supports Glob Patterns:** You can pass wildcards like `'*.tmp'` or negation patterns like `['*.png', '!important.png']`. [link](https://www.npmjs.com/package/trash-cli)

javascript

```
// Single path
await trash('temp-folder');

// Array of paths and globs
await trash(['./cache', '*.log']);
```

Use code with caution.

### 2. `options` (Optional)

The second parameter is an object that modifies how the glob matching behaves. [link](https://www.npmjs.com/package/trash-cli)

| Property | Type      | Default | Description                                                                                                                  |
| -------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `glob`   | `boolean` | `true`  | When set to `false`, it treats the input strictly as literal file paths and disables wildcard/glob parsing.                  |
| `dot`    | `boolean` | `false` | When set to `true`, the glob engine will match files that begin with a period (hidden dotfiles like `.env` or `.gitignore`). |

javascript

```
// Example using options to target hidden dotfiles
await trash(['*.config'], { dot: true });
```

Use code with caution.

***

### Alternative: If using the Command Line Interface (`trash-cli`)

If you were asking about the terminal command arguments rather than the JavaScript function, the format is: [link](https://www.npmjs.com/package/trash-cli)

bash

```
trash <path|glob> --dot --verbose
```

Use code with caution.

- **`--dot`**: Includes hidden dotfiles in glob expansions.
- **`--verbose` / `-v`**: Outputs the path of every file that gets successfully moved to the trash. [link](https://www.npmjs.com/package/trash-cli)

If you are running into issues with a specific file path layout or if you need to know how to filter files before passing them into the `trash` function, let me know!

- [link](https://www.npmjs.com/package/trash-cli)\
  trash-cli - NPM\
  Feb 2, 2026 — Usage. $ trash --help Usage $ trash \[…] Options --dot Match dotfiles when using glob patterns (remember to quote the glob) --verbo...\
  NPM
- [link](https://www.youtube.com/watch?v=P2N7mpZ3v1Q\&t=15)\
  How To Delete Files in Node.js Using Trash Explained In A ...\
  Dec 29, 2020 — however once we have deleted a file using that it has gone for good. so to deal with that issue we can use a module named trash. i...\
  54s\
  YouTube·The Git Guild
- [link](https://www.youtube.com/watch?v=UEHlVlYIEP4\&t=2)\
  How To Move Files To Trash Using Node.js !\
  Jun 21, 2022 — hey guys when I started my career as a web developer. I was used to work on Linux. so there are few commands Linux is uses to dele...\
  6m\
  YouTube·Code Canvas

Show all

## possible errors

When dealing with file operations in Node.js—especially when relying on the third-party `trash` package—your application needs to robustly handle several common operational and system-level errors.

The primary runtime exceptions you will encounter can be safely caught using standard JavaScript `try/catch` logic:

### 1. File Not Found (`ENOENT`)

This error triggers if the target path you provided does not exist on the file system.

- **The Cause:** Typos in the directory name, or the path was deleted by another process before your script reached it.
- **How to fix:** Verify the path programmatically using `fs.existsSync()` before executing the command.

### 2. Permission Denied (`EACCES` / `EPERM`)

This restriction indicates that your Node.js runtime environment does not have the required clearance to modify the target directory.

- **The Cause:** The folder belongs to a different OS user, is located inside a protected system root folder, or requires elevated Administrator/Root clearance.
- **How to fix:** Ensure your application has execution permissions, or alter folder ownership recursively using `chmod` / `chown` tools.

### 3. Resource Busy or Locked (`EBUSY`)

This happens when you attempt to delete or move a directory that is actively tied to another open workflow.

- **The Cause:** A terminal window is currently actively open inside that folder (`cd path/to/folder`), or a database/IDE application is still streaming background tracking logs inside it.
- **How to fix:** Ensure your code safely terminates any open `fs.createReadStream` loops or active database engines targeting that environment. [link](https://www.youtube.com/watch?v=ArWH8%5F2dpsk\&t=257)

### 4. Glob Syntax Quirks (Empty Execution)

While not a fatal crash, you can hit a logical bug where `trash()` runs successfully but **nothing is actually removed**.

- **The Cause:** Glob patterns ignore hidden dotfiles (like `.env` or `.gitignore`) by default.
- **How to fix:** Explicitly set the `{ dot: true }` parameter config inside your option parameters to catch hidden files.

***

### Production Error-Handling Template

To prevent your Node.js server or application crashing from these exceptions, implement explicit conditional blocks:

javascript

```
import trash from 'trash';

async function safeTrash(targetPath) {
  try {
    await trash(targetPath);
    console.log('Successfully recycled!');
  } catch (error) {
    // Intercept specific file system error codes
    switch (error.code) {
      case 'ENOENT':
        console.error(`Error: The path "${targetPath}" could not be found.`);
        break;
      case 'EACCES':
      case 'EPERM':
        console.error('Error: Write permission denied. Run with elevated privileges.');
        break;
      case 'EBUSY':
        console.error('Error: Resource is busy. Close programs accessing this directory.');
        break;
      default:
        console.error('An unexpected error occurred:', error.message);
    }
  }
}
```

Use code with caution.

Would you like to explore how to set up an **automated retry mechanism** if a folder returns an `EBUSY` lock error, or need to log these failures to a **diagnostic log file**?

- [link](https://www.youtube.com/watch?v=ArWH8%5F2dpsk\&t=257)\
  Can't Empty Trash on Mac? Try These Fixes\
  May 14, 2026 — and so I asked Claude like "Hey I'm getting this error. message is there a way for me to tell how to do this?" And it said "Yes." ...\
  2m\
  YouTube·Mac Geek Gab
- [link](https://masterfromus.wordpress.com/2025/07/16/npm-install-error-clean-up-failed-to-remove-some-directories-from-node%5Fmodules/)\
  npm install error: clean up failed to remove some directories ...\
  Jul 16, 2025 — npm install error: clean up failed to remove some directories from node\_modules – Master From Us. npm install error: clean up fail...\
  WordPress.com
- [link](https://www.youtube.com/watch?v=bxvybxYFq2o)\
  Fixing npm permissions\
  Nov 27, 2014 — in this video I'm going to show you how to fix MPM's permissions so that you can install MPM packages globally without using sudo.\
  5:10\
  YouTube·npm

Show all

# how to write options (the optional object as second param) in ts

To write an optional options object as a second parameter in TypeScript, <mark><strong>mark the parameter with a<span> </span><code dir="ltr">?</code><span> </span>symbol and provide a type or interface definition</strong></mark>.

Here is how to implement this cleanly using standard TypeScript patterns.

### 1. Define the Options Type

Create an `interface` or `type` alias listing all possible configuration properties. Mark individual properties inside the object as optional using `?` if they are not strictly required.

typescript

```
interface FetchOptions {
  timeout?: number;
  retries?: number;
  cache?: boolean;
}
```

Use code with caution.

### 2. Implement the Function with Destructuring and Defaults

The most robust pattern uses an empty object `{}` as a default value for the parameter. This prevents runtime crashes if the caller omits the second argument entirely.

typescript

```
function fetchData(url: string, options: FetchOptions = {}) {
  // Destructuring with fallback values for individual properties
  const { timeout = 5000, retries = 3, cache = true } = options;

  console.log(`Fetching ${url} with timeout ${timeout}ms`);
}
```

Use code with caution.

### 3. Alternative: Inline Inline Type Definition

For simple functions with only one or two options, you can define the type inline directly in the function signature.

typescript

```
function greet(name: string, options?: { uppercase?: boolean }) {
  const shouldUppercase = options?.uppercase ?? false;
  return shouldUppercase ? `HELLO, ${name.toUpperCase()}!` : `Hello, ${name}!`;
}
```

Use code with caution.

### 4. How to Call the Function

Because the second parameter is optional and has a default value, both of these calls are fully type-safe:

typescript

```
// Call 1: Omitting the options completely
fetchData("https://example.com");

// Call 2: Providing only the specific options you want to change
fetchData("https://example.com", { retries: 5 });
```

Use code with caution.

### Key Rules to Remember

- **Parameter Order**: Optional parameters must always come _after_ required parameters.
- **The `=` vs `?` choice**: If you provide a default value (e.g., `options = {}`), the `?` modifier on the parameter name is redundant and usually omitted. TypeScript automatically infers it as optional.
- **Nullish Coalescing**: Use the `??` operator (e.g., `options.cache ?? true`) when accessing deeply nested options to safely apply fallback configurations.

Would you like to see how to make certain options **depend on each other** using unions, or do you need help strictly typing **advanced callbacks** inside your options?

- [link](https://www.codecademy.com/learn/learn-typescript/modules/typescript-functions/cheatsheet)\
  Learn TypeScript: Functions Cheatsheet\
  TypeScript Optional Parameter Sometimes we would like to skip providing values to function calls. We can declare some parameters i...\
  \
  Codecademy
- [link](https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters/)\
  TypeScript Default Parameters\
  Optional parameters must come after the required parameters. However, default parameters don't need to appear after the required p...\
  \
  \
  www.typescripttutorial.net
- [link](https://prabhatkumarjena16.medium.com/mastering-typescript-functions-from-basics-to-advanced-techniques-e3d02c8a0140)\
  Mastering TypeScript Functions: From Basics to Advanced Techniques\
  Oct 19, 2024 — Optional parameters must come after the required parameters.\
  \
  \
  Medium

Show all

## i deconstruct

When you destructure an optional second parameter directly in the function signature, you must provide a **default empty object (`= {}`)** at the end. Without it, your code will crash if the caller passes nothing.

Here is the exact syntax to destructure options safely in TypeScript:

### The Standard Pattern

Define your type first, then destructure and assign default values inside the parameter list.

typescript

```
interface MovieOptions {
  genre?: string;
  year?: number;
  rating?: number;
}

function filterMovies(
  title: string,
  { genre = "all", year = 2026, rating }: MovieOptions = {} // <-- Note the '= {}'
) {
  // Variables are now ready to use directly
  console.log(title, genre, year, rating);
}
```

Use code with caution.

### Why the `= {}` is Mandatory

If you omit `= {}` and a user calls `filterMovies("Inception")`, TypeScript will throw a runtime error because it tries to destructure properties from `undefined`.

Setting `= {}` ensures that if the second argument is missing, it falls back to an empty object, allowing your individual default values (like `"all"` or `2026`) to kick in safely.

### How to Call It

Both lines are completely valid and type-safe:

typescript

```
// Uses all default values ("all", 2026, undefined)
filterMovies("The Matrix");

// Overrides genre, keeps default year, rating remains undefined
filterMovies("Interstellar", { genre: "Sci-Fi" });
```

Use code with caution.

### Alternative: Inline Types with Destructuring

If you do not want to create a separate `interface`, you can put the type definition right after the destructuring block:

typescript

```
function setupServer(
  port: number,
  { host = "localhost", ssl = false }: { host?: string; ssl?: boolean } = {}
) {
  console.log(`Running on ${host}:${port} (SSL: ${ssl})`);
}
```

Use code with caution.

Do you want to see how to handle **nested object destructuring** with defaults, or do you need help **restricting specific property combinations** using TypeScript unions?

- [link](https://codenil.medium.com/destructuring-a-quick-reference-a7b2fa09c88a)\
  Destructuring: A Quick Reference. Destructuring Assignment, a powerful JS… | by Nil SJ | Medium\
  May 16, 2023 — Of course, we may choose to set default values to the variable in the destructuring assignment. Then if there are corresponding va...\
  \
  \
  Medium

# "does the file exist" in nodejs

The standard and most efficient way to check if a file exists in [Node.js](https://nodejs.org/en) <mark><span>depends on whether you are writing<span> </span></span><strong>asynchronous</strong><span> </span>or<span> </span><strong>synchronous</strong><span> </span>code</mark>.

### 1. Asynchronous (Recommended)

Use `fs.promises.access()`. This method avoids blocking the execution thread. Rather than returning a boolean, it resolves if the file exists and rejects with an error if it does not. [link](https://masteringjs.io/tutorials/node/check-if-file-exists)

javascript

```
import { access } from 'node:fs/promises';

async function checkFileExists(filePath) {
  try {
    await access(filePath);
    console.log('The file exists!');
  } catch {
    console.log('The file does not exist.');
  }
}

checkFileExists('config.json');
```

Use code with caution.

### 2. Synchronous

Use `fs.existsSync()`. This is ideal for short scripts or initialization steps where a boolean return is highly convenient and blocking execution is not a concern. [link](https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js)

javascript

```
import { existsSync } from 'node:fs';

const filePath = 'config.json';

if (existsSync(filePath)) {
  console.log('The file exists!');
} else {
  console.log('The file does not exist.');
}
```

Use code with caution.

***

### ⚠️ Important Best Practice: "Check-Then-Act" Anti-Pattern

If your goal is to check if a file exists **right before reading or writing to it**, do not check for existence first. Checking existence and then performing an operation introduces a race condition (called a TOCTOU error—Time-of-Check to Time-of-Use), where another process could delete or modify the file between your check and your action.

Instead, perform the operation directly inside a `try/catch` block and handle any errors if the file is missing: [link](https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js)

javascript

```
import { readFile } from 'node:fs/promises';

async function readMyFile(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    console.log('File content:', data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File not found!');
    } else {
      console.error('An unexpected error occurred:', error.message);
    }
  }
}
```

Use code with caution.

Are you looking to check if a **directory** exists instead, or do you need to handle specific **file permissions** (like read/write access)?

- [link](https://stackoverflow.com/questions/4482686/check-synchronously-if-file-directory-exists-in-node-js)\
  Check synchronously if file/directory exists in Node.js\
  Dec 19, 2010 — fs. exists() is still deprecated but fs. existsSync() is no longer deprecated. So you can safely use it now. Original answer from ...\
  Stack Overflow
- [link](https://masteringjs.io/tutorials/node/check-if-file-exists)\
  Check if a File Exists in Node.js - Mastering JS\
  Jul 21, 2024 — The easiest way to check whether a file exists in Node. js is using the fs/promises module's access() function. The access() funct...\
  Mastering JS
- [link](https://nodejs.org/learn/manipulating-files/working-with-folders-in-nodejs)\
  Working with folders in Node.js\
  Check if a folder exists Use fs. access() (and its promise-based fsPromises. access() counterpart) to check if the folder exists a...\
  Node.js

Show all

