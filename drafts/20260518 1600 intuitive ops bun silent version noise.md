#

how to disable this line in bun Bun v1.3.14 (Linux x64)

Because your message did not include the specific console line or error you want to disable, here are the solutions for the most common Bun output modifications:

Turn Off the Bun Banner and Version Log

If you want to hide the `Bun v1.3.14 (Linux x64)` startup line during execution:

- Use the `--silent` or `-s` flag when running commands.
- Run your script using: `bun run --silent index.ts`. \[[1](https://bun.com/blog/bun-v1.1)]

Disable Specific Console Methods

If you want to silence specific log types inside your application code:

- **Mute all logs:** `console.log = () => {};`
- **Mute warnings:** `console.warn = () => {};`
- **Mute errors:** `console.error = () => {};` \[[1](https://bun.com/blog/bun-v0.3.0)]

Suppress Deprecation or Runtime Warnings

If Bun is outputting internal framework warnings:

- Set the environment variable `NODE_ENV=production`.
- Run your script as: `NODE_ENV=production bun index.ts`.

Suppress TypeScript or Build Errors

If a specific line of code is causing an unwanted compiler message:

- Add `// @ts-ignore` directly above the offending line.
- Add `// @ts-nocheck` at the very top of the file.

***

To help me give you the exact command or configuration, could you tell me:

- What **specific text** or **error message** does the line show?
- Is this line coming from **Bun's test runner**, **the bundler**, or **your own code**?

Knowing this will help me provide the exact configuration snippet you need.

- [link](https://bun.com/blog/bun-v1.1)\
  Bun 1.1\
  Apr 1, 2024 — You can run shell scripts using the Bun Shell by running bun run .\
  \
  \
  Bun
- [link](https://bun.com/blog/bun-v0.3.0)\
  Bun v0.3.0\
  Dec 7, 2022 — Bun now has better formatting for console. log() (important for debugging!)\
  \
  \
  Bun

when it prints an error, it shows up. disable this.

To disable or customize how Bun prints errors and stack traces, you can use the following methods depending on your exact workflow:

Catch and Silence Errors Globally

To prevent any unhandled error from printing its default stack trace to the terminal, catch them at the process level:

- Add this to your entry file:

ts

```
process.on("uncaughtException", () => {});
process.on("unhandledRejection", () => {});
```

Use code with caution.

Silence standard error (stderr)

If you want to run your Bun script but completely hide all error messages from the terminal output:

- Redirect standard error to the null device in Linux:\
  `bun run index.ts 2>/dev/null`

Silence Bun Test Errors

If this line is appearing during `bun test` execution:

- Use the todo flag to pass tests without printing failures:\
  `bun test --todo`

Hide Specific TypeScript Compiler Errors

If the error is a compile-time type check failure that halts execution:

- Add this comment directly above the crashing line:\
  `// @ts-ignore`

***

To help me give you the absolute cleanest fix, could you tell me:

- Are you looking to **completely hide** the error, or just **format it cleanly** without the giant stack trace?
- Is this happening during a **local development server**, a **production build**, or **unit testing**?

i mean like this. it's not about my app code. it's bun noise. code: "ERR\_INVALID\_ARG\_TYPE"

at /home/fira/Documents/f/humility/source/cli/cli.ts:56:9

Bun v1.3.14 (Linux x64)

Got it. That exact three-line block—the error code, the framework trace line, and the **`Bun v1.3.14 (Linux x64)`** version footer—is printed by Bun's native C++ runtime crash reporter to **`stderr`** whenever an unhandled exception or Node/Bun internal argument validation error occurs. \[[1](https://bun.com/blog)]

Because Bun injects this version stamp directly into its low-level error reporting, you cannot turn it off via `bunfig.toml` or flag settings. Instead, you have to filter it out in the Linux terminal using **`grep`** or standard stream manipulation.

Here are the exact terminal commands to clean up the noise:

1\. Strip the Version Line (Keep the Error)

If you still want to see your app errors but strictly want to delete that `Bun v1.3.14...` footer from your screen, pipe **`stderr`** through a reverse `grep` filter:

bash

```
bun run index.ts 2> >(grep -v -E "Bun v[0-9]+\.[0-9]+\.[0-9]+")
```

Use code with caution.

- **How it works**: The `2>` targets Bun's internal error stream. `grep -v` completely hides lines matching the specified version pattern.

2\. Strip the Entire Error Signature (Silence `ERR_INVALID_ARG_TYPE`)

If the `ERR_INVALID_ARG_TYPE` error is coming from an internal framework bug or dependency that you cannot fix right now, you can completely ignore that specific block:

bash

```
bun run index.ts 2> >(grep -v -E "ERR_INVALID_ARG_TYPE|Bun v1\.")
```

Use code with caution.

3\. Totally Silence All Runtime Noise

If you do not want to see any runtime errors or version footers at all while your script runs, discard the error stream entirely:

bash

```
bun run index.ts 2>/dev/null
```

Use code with caution.

4\. Create a Permanent Terminal Alias

If you do not want to type the filtering logic every time, add this shortcut alias to your `~/.bashrc` or `~/.zshrc` file:

bash

```
alias bun-clean='bun run $1 2> >(grep -v -E "Bun v[0-9]+\.")'
```

Use code with caution.

After saving, you can just run **`bun-clean index.ts`** to suppress the footer automatically.

To give you the neatest setup, tell me:

- Are you running this script inside an automated environment like a **Docker container** or **CI/CD pipeline**?

- Is this noise happening continuously on a file watcher loop like **`bun --watch`**?

- [link](https://bun.com/blog)\
  Blog | Bun\
  Jarred Sumner · January 13, 2026. Bun v1.3.5. Fixes 32 issues (addressing 25 👍). Bun.Terminal API, compile-time feature flags, im...\
  \
  \
  Bun

the error is inside my code. but now i mean i want to disable the bun noise.

To strip out the Bun version footer line (**`Bun v1.3.14 (Linux x64)`**) while keeping your app's actual code errors completely intact, you must filter Bun's standard error stream (`stderr`) in the Linux terminal. \[[1](https://github.com/oven-sh/bun/issues/5455)]

Because that version banner is baked directly into Bun's native runtime code engine, flags like `--silent` won't stop it when your code crashes. \[[1](https://github.com/oven-sh/bun/issues/5455)]

The exact ways to filter out only that noise are detailed below:

1\. Run with an Inline Pipe Filter \[[1](https://github.com/oven-sh/bun/issues/5206)]

Whenever you execute your file, pipe the error stream through a negative `grep` matcher to drop the version signature:

bash

```
bun run cli.ts 2> >(grep -v -E "Bun v[0-9]+\.[0-9]+\.[0-9]+")
```

Use code with caution.

- **How it works:** `2>` isolates the error output. `grep -v` tells your terminal to display everything **except** lines containing the `Bun v...` pattern.

2\. Set Up a Permanent Terminal Shortcut

If you don't want to type that long string every time you test your script, add a clean wrapper to your shell profile.

1. Open your configuration file (usually `~/.bashrc` or `~/.zshrc`):\
   bash

<!---->

```
nano ~/.bashrc
```

Use code with caution.
2\. Paste this custom function at the bottom:\
bash

```
bunx-clean() {
  bun run "$@" 2> >(grep -v -E "Bun v[0-9]+\.[0-9]+\.[0-9]+")
}
```

Use code with caution.
3\. Save the file (`Ctrl+O`, then `Ctrl+X`) and refresh your terminal:\
bash

```
source ~/.bashrc
```

Use code with caution.

Now, you can simply execute **`bunx-clean cli.ts`**. Your code errors will display normally, but the footer line disappears.

3\. Handle it inside your App Code (Alternative)

If you want to catch the error programmatically so Bun's native panic runner never kicks in to print the footer, intercept the unhandled errors at the top of your `cli.ts` file:

ts

```
process.on("uncaughtException", (error) => {
  // Prints just your clean error message & app stack trace
  console.error(error);
  process.exit(1);
});
```

Use code with caution.

Are you running this script using a file watcher like **`bun --watch`**, or do you need this filter applied across a full **automated test suite**?

- [link](https://github.com/oven-sh/bun/issues/5455)\
  avoid bun output on process exit code > 0 · Issue #5455 - GitHub\
  Sep 15, 2023 — bun run: avoid bun output on process exit code > 0 #5455. New issue. bun run: avoid bun output on process exit code > 0 #5455. enh...\
  GitHub
- [link](https://github.com/oven-sh/bun/issues/5206)\
  bun build with --no-bundle and --outdir causes failed to write file "" ...\
  Sep 12, 2023 — Description \* What version of Bun is running? 1.0.1+31aec4ebe325982fc0ef27498984b0ad9969162b. \* What platform is your computer? Li...\
  \
  \
  GitHub

#

add 2> >(grep -v -E \\"Bun v\[0-9]+\\\\.\[0-9]+\\\\.\[0-9]+\\") to const child = spawn('bun', finalArgs, { stdio: 'inherit', shell: isWindows });

To redirect and filter `stderr` in Node.js `child_process.spawn`, you cannot pass shell redirection syntax directly into `finalArgs` or the command string when using `{ stdio: 'inherit' }` \[1].

You must pipe `stderr` to the parent process, handle the data stream in JavaScript, and filter out the specific Bun version string \[1].

Solution

javascript

```
const { spawn } = require('child_process');

const child = spawn('bun', finalArgs, {
    // Pipe stdout to parent, pipe stderr to filter it, inherit stdin
    stdio: ['inherit', 'inherit', 'pipe'],
    shell: isWindows
});

// Listen to the stderr stream
child.stderr.on('data', (data) => {
    const lines = data.toString().split('\n');

    const filteredLines = lines.filter(line => {
        // Returns false if the line contains the Bun version pattern
        return !/Bun v\d+\.\d+\.\d+/.test(line);
    });

    // Print the remaining stderr output to the terminal
    if (filteredLines.length > 0) {
        process.stderr.write(filteredLines.join('\n'));
    }
});
```

Use code with caution.

Why this works

- **`stdio: ['inherit', 'inherit', 'pipe']`**: This keeps `stdin` and `stdout` linked to your terminal but captures `stderr` for processing \[1].
- **`data.toString()`**: Converts the incoming binary Buffer into a readable string.
- **Regex Filtering**: The `/\d+\.\d+\.\d+/` expression accurately matches semantic version numbers (e.g., `v1.0.0`).
- **`process.stderr.write`**: Outputs any non-matching error messages immediately without adding extra forced lines \[1].

If you want to customize this further, let me know:

- Do you need to **log the filtered version lines** to a separate file?
- Are there **other runtime warnings** you want to exclude?
- Do you need this to support **asynchronous Promise wrappers**?