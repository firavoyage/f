how to install a pnpm global cli via a local folder

7:58 AM

To install a package globally from a local folder using `pnpm`, the most effective method is using the `pnpm link` command. This creates a symlink from your local source code to the global bin directory, making any CLI binaries defined in your `package.json` available system-wide. \[[1](https://pnpm.io/cli/link)]

Method 1: Using `pnpm link` (Recommended)

This method is ideal for local development because changes made to your source code are immediately reflected in the global command without needing a reinstall. \[]

1. **Navigate to your local package folder:**\
   bash

<!---->

```
cd /path/to/your-local-folder
```

Use code with caution.
2\. **Install its local dependencies:**\
bash

```
pnpm install
```

Use code with caution.
3\. **Link it globally:**\
bash

```
pnpm link --global
```

Use code with caution.\
\[[1](https://pnpm.io/next/cli/install), [2](https://medium.com/frontendweb/how-to-test-npm-packages-locally-with-pnpm-bd37cd950497)]

Method 2: Global Install with Local Path \[[1](https://github.com/jdx/mise/discussions/4879)]

If you prefer a standard installation behavior (copying rather than symlinking the source), you can use the `-g` flag with a relative or absolute path. \[[1](https://github.com/npm/cli/issues/4031), [2](https://pnpm.io/cli/link)]

bash

```
pnpm add -g /path/to/your-local-folder
```

Use code with caution.

Key Requirements

- **Bin Field**: The package must have a `bin` field defined in its `package.json` (e.g., `"bin": { "my-cli": "./bin/cli.js" }`) to be executable as a command.
- **Environment Setup**: Ensure your `PNPM_HOME` is added to your system's `PATH` variable so the shell can find the newly installed global binaries. You can run `pnpm setup` to automatically configure this. \[[1](https://pnpm.io/cli/setup), [2](https://dev.to/adiatiayu/how-to-install-pnpm-with-npm-on-windows-11-5gbn), [3](https://pnpm.io/cli/setup), [4](https://pnpm.io/cli/link)]

Do you need help configuring your **environment PATH** or setting up the **bin field** in your package.json? \[[1](https://adamcoster.com/blog/pnpm-config)]

- [link](https://pnpm.io/cli/link)\
  pnpm link\
  You can also link a package from a directory to another directory, without using the global node\_modules directory: cd ~/projects/\
  PNPM
- [link](https://dev.to/adiatiayu/how-to-install-pnpm-with-npm-on-windows-11-5gbn)\
  How to Install pnpm with npm on Windows 11 - DEV Community\
  Installation \* Run this command in your terminal to install pnpm : npm install -g pnpm. \* Add the path for pnpm to the system envi...\
  DEV Community
- [link](https://pnpm.io/cli/setup)\
  pnpm setup\
  creates a home directory for the pnpm CLI. adds the pnpm home directory to the PATH by updating the shell configuration file. copi...\
  PNPM

Show all

example

Here is a practical example of setting up a local CLI tool and installing it globally using `pnpm`.

1\. Prepare your Local Folder

Imagine you have a project named `hello-cli` located at `~/projects/hello-cli`.

**`package.json`**\
You must define the `bin` field to tell pnpm which file to execute when you type the command.

json

```
{
  "name": "hello-cli",
  "version": "1.0.0",
  "bin": {
    "say-hi": "./index.js"
  }
}
```

Use code with caution.

**`index.js`**\
Ensure you include the "shebang" line (`#!`) at the very top so your system knows to use Node.js.

javascript

```
#!/usr/bin/env node
console.log("Hello from your local global CLI!");
```

Use code with caution.

2\. Install it Globally

Open your terminal and run these commands:

bash

```
# Move into the folder
cd ~/projects/hello-cli

# Make index.js executable (Linux/macOS only)
chmod +x index.js

# Link it globally
pnpm link --global
```

Use code with caution.

3\. Test the Command

You can now run the command defined in your `bin` field from any directory on your computer:

bash

```
say-hi
# Output: Hello from your local global CLI!
```

Use code with caution.

**Pro Tip:** Because you used `pnpm link`, if you change the text in `index.js` to _"Goodbye!"_, the command will output the new text immediately without you having to run the link command again.

Would you like to see how to handle **command-line arguments** (like `say-hi --name "Alice"`) within that `index.js` file?

AI can make mistakes, so double-check responses

can i install it globally and let pnpm save it, so even if i remove the folder later it wont be removed unless i pnpm remove hellocli

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can install a local package globally so that it persists even if the original folder is deleted</span></mark>. To do this, you must use **`pnpm add -g .`** instead of `pnpm link`. \[[1](https://pnpm.io/it/next/cli/link)]

The Difference

- **`pnpm link --global`**: Creates a **symlink** (a shortcut). If you delete the source folder, the link breaks and the command will stop working.
- **`pnpm add -g .`**: Performs a **standard global installation**. It packages your local code and saves it into pnpm's global store, creating a permanent copy. After this, the original folder is no longer needed. \[[1](https://pnpm.io/cli/link), [2](https://pnpm.io/next/global-packages), [3](https://refine.dev/blog/how-to-use-pnpm/)]

Steps to Install Permanently

1. **Open your terminal** and navigate to your project folder:\
   bash

<!---->

```
cd /path/to/your-local-folder
```

Use code with caution.
2\. **Run the global add command**:\
bash

```
pnpm add -g .
```

Use code with caution.\
_The `.` tells pnpm to look in the current directory for the package to install._ \[[1](https://pnpm.io/it/next/cli/link)]

Verification and Removal

- **Check installation**: Run `pnpm list -g` to see your package in the global list.

- **Safe to delete**: You can now safely delete `/path/to/your-local-folder`. The CLI will continue to function.

- **To Uninstall**: When you are finally done with the tool, run:\
  bash

<!---->

```
pnpm remove -g your-package-name
```

Use code with caution.\
\[[1](https://github.com/pnpm/pnpm/issues/4228)]

**Note:** If you use this "add" method, changes you make to your local code will **not** update the global command automatically. You would need to run `pnpm add -g .` again to "push" those updates to your system. \[[1](https://pnpm.io/cli/link), [2](https://pnpm.io/it/next/cli/link)]

Would you like to know how to **version your package** so pnpm can track different "releases" of your local tool?

AI can make mistakes, so double-check responses

- [link](https://refine.dev/blog/how-to-use-pnpm/)\
  A Complete guide to pnpm - Refine\
  Sep 11, 2024 — When installing a different version of a package available in the global store, pnpm will only install the file that has changed. ...\
  Refine
- [link](https://github.com/pnpm/pnpm/issues/4228)\
  can't update/remove previously installed global packages after ...\
  Jan 13, 2022 — Actual behavior: The global-dir for global pnpm packages stays the same after updating Node. js to a new version. Only after updat...\
  GitHub
- [link](https://pnpm.io/cli/link)\
  pnpm link\
  Apr 24, 2026 — pnpm install # install dependencies of foo. cd ~/projects/my-project. pnpm link ~/projects/foo # link foo to my-project. Add a bin...\
  PNPM

Show all