## nodejs promisify(exec)(command, options) how to get the return code

When you use a promisified `child_process.exec`, the way you get the return (exit) code <mark>depends entirely on whether the command<span> </span><strong>succeeds</strong><span> </span>or<span> </span><strong>fails</strong></mark>. [link](https://bun.com/reference/node/child%5Fprocess/exec)

- **If the command fails (exit code is not 0):** The promise is rejected, and the exit code is available in the `error.code` property inside a `try/catch` block.
- **If the command succeeds (exit code is 0):** The promise resolves to an object containing only `{ stdout, stderr }`. It does **not** include the code explicitly because an exit code of `0` is structurally implied by the fulfillment of the promise. [link](https://nodejs.org/api/child%5Fprocess.html)

Here is how you handle both scenarios efficiently in your code:

### Standard Handling with `try/catch`

javascript

```
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function runCommand() {
  try {
    const { stdout, stderr } = await exec('exit 0', { timeout: 5000 });

    // If it reaches here, the command succeeded.
    // The exit code is always 0.
    const exitCode = 0;
    console.log(`Success! Exit code: ${exitCode}`);
    console.log(`Output: ${stdout}`);

  } catch (error) {
    // If it catches, the command failed or timed out.
    // The exit code is stored inside the error object under '.code'
    const exitCode = error.code;
    console.error(`Failed! Exit code: ${exitCode}`);
    console.error(`Error Message: ${error.message}`);
    console.error(`Stderr output: ${error.stderr}`);
  }
}

runCommand();
```

Use code with caution.

### Quick Reference Table

| Execution Result | Promise State | Where to Find the Code | Value                               |
| ---------------- | ------------- | ---------------------- | ----------------------------------- |
| **Success**      | Resolved      | Implicit               | Always `0`                          |
| **Failure**      | Rejected      | `error.code`           | Non-zero integer (e.g., `1`, `127`) |

### Getting the Exit Code Safely in One Line

If you want to run a command and just get the exit code regardless of success or failure without breaking your application flow, you can swallow the rejection into a fallback:

javascript

```
const exitCode = await exec('your-command').then(() => 0).catch(err => err.code ?? 1);
console.log(`The process exited with code: ${exitCode}`);
```

Use code with caution.

Would you like to know how to handle situations where a process is **killed by a system signal** (like `SIGTERM`), or do you need help **streaming large outputs** instead of buffering them?

- [link](https://nodejs.org/api/child%5Fprocess.html)\
  Child process | Node.js v26.4.0 Documentation\
  Unlike the exec(3) POSIX system call, child\_process.exec() does not replace the existing process and uses a shell to execute the c...\
  Node.js
- [link](https://bun.com/reference/node/child%5Fprocess/exec)\
  Node child\_process.exec function | API Reference - Bun\
  Unlike the exec(3) POSIX system call, child\_process.exec() does not replace the existing process and uses a shell to execute the c...\
  Bun
- [link](https://www.npmjs.com/package/promisify-child-process)\
  promisify-child-process - NPM\
  Feb 4, 2026 — finally() added to make it promise-friendly. \* Install and Set-up. npm install --save promisify-child-process. If you are using a ...\
  NPM

## does stderr matter when 0

No, a `0` exit code means the process completed successfully, regardless of what was written to `stderr`.

### Why Programs Write to Stderr with a 0 Code

- **Diagnostics**: Programs often use `stderr` for non-critical logs, debugging text, or progress updates.
- **Deprecation Warnings**: Runtimes like Node.js or Python print deprecation warnings to `stderr` even when your script runs perfectly.
- **Informational Alerts**: Tools like `curl` or `git` write download progress bars and connection stats to `stderr` so they don't pollute the actual data output in `stdout`.

### When You Might Still Care

While the operating system considers a `0` code a absolute success, you should still check `stderr` if:

- You are troubleshooting **unexpected behavior** or subtle configuration warnings.
- You need to parse **progress or performance metrics** that the CLI tool explicitly routes to `stderr`.
- You want to enforce a **strict "zero-warning" policy** in a CI/CD automation pipeline.

If you are building an automated script, it is standard practice to completely ignore `stderr` as long as the exit code is `0`.

If you'd like, I can show you how to **suppress stderr** inside your command strings or how to **filter out noise** like deprecation warnings in your Node.js script. Which approach would help more?

This is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://josipmisko.com/posts/process-finished-with-exit-code-0)\
  Process finished with exit code 0: What does it mean? – Josip Miskovic\
  Mar 9, 2023 — Don't worry, if you get a “Process finished with exit code 0” message, that means that the code ran correctly.\
  \
  \
  josipmisko.com
- [link](https://github.com/neovim/neovim/issues/33405)\
  stderr output from :!cmd always printed as ErrorMsg · Issue #33405 · neovim/neovim\
  Apr 9, 2025 — That's because CLI commands use stderr for all kinds of things, not just errors. For example, several tools use it to display prog...\
  \
  GitHub
- [link](https://medium.com/@CastleScribble/how-to-print-to-stderr-standard-error-in-c-using-the-write-function-5dfcaffd17fe)\
  How to print to stderr (standard error) in C using the write() function.\
  Mar 23, 2025 — To conclude, printing to stderr is vital in software development process as it helps debug codes and customize error messages in v...\
  \
  \
  Medium