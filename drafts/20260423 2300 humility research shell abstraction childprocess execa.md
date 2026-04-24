#

execa node module example

Execa is a powerful Node.js module used to run external commands. It simplifies the built-in `child_process` module by providing a promise-based API, improved error handling, and a cleaner syntax for [process execution](https://github.com/sindresorhus/execa).

Basic Usage Example

The most common way to use Execa is to import the `execa` function and use it with [template literals](https://www.npmjs.com/package/execa) or as a standard function.

javascript

    import { execa } from 'execa';

    try {
      // Simple usage with template literals
      const { stdout } = await execa`echo "Hello from Execa!"`;
      console.log(stdout); // "Hello from Execa!"
    } catch (error) {
      console.error('Command failed:', error.message);
    }

Use code with caution.

Key Features and Examples

- **Piping Output**: You can easily pipe the output of one command into another, similar to how you would in a terminal shell.\
  javascript

<!---->

    import { execa } from 'execa';
    const { stdout } = await execa`ls`.pipe`grep .js`;
    console.log(stdout); // Lists all .js files

Use code with caution.

- **Executing Node.js Files**: Use `execaNode` to run a local JavaScript file using the current Node.js executable.\
  javascript

<!---->

    import { execaNode } from 'execa';
    await execaNode('script.js', ['arg1', 'arg2']);

Use code with caution.

- \*\*Script Interface (\
  )\
  \*\*\
  ∶\
  𝐹𝑜𝑟𝑤𝑟𝑖𝑡𝑖𝑛𝑔𝑞𝑢𝑖𝑐𝑘𝑠𝑐𝑟𝑖𝑝𝑡𝑠\
  ,\
  𝑡ℎ𝑒\
  \`\
  \` shorthand provides script-friendly defaults like reading from terminal input automatically.\
  javascript

<!---->

    import { $ } from 'execa';
    const branch = await $`git branch --show-current`;
    await $`npm run build --branch=${branch}`;

Use code with caution.

- **Detailed Errors**: Unlike standard `child_process`, Execa returns detailed objects upon failure, including the full command run, exit code, and buffered output (stdout/stderr).
- **Local Binaries**: You can run binaries installed in your local `node_modules` without needing `npx` by using the `preferLocal` option.

Synchronous Execution

While asynchronous execution is recommended to prevent blocking the event loop, you can use `execaSync` for tasks that must be [synchronous](https://github.com/sindresorhus/execa/blob/main/docs/execution.md).

javascript

    import { execaSync } from 'execa';
    const { stdout } = execaSync`npm run build`;

Use code with caution.

Are you looking to replace **child_process** in an existing project, or are you starting a **new automation script**?

- [link](https://www.npmjs.com/package/execa#:~:text=Examples-,Execution,=%3E%20%7B%20/%2A%20...)\
  execa - NPM\
  29 Nov 2025 — Execution. Simple syntax. import {execa} from 'execa'; const {stdout} = await execa\`npm run build\`; // Print command's output cons...\
  NPM
- [link](https://github.com/sindresorhus/execa)\
  sindresorhus/execa: Process execution for humans - GitHub\
  29 Nov 2025 — Features \* Simple syntax: promises and template strings, like zx . \* Script interface. \* No escaping nor quoting needed. No risk o...\
  GitHub
- [link](https://medium.com/@ehmicky/execa-9-our-biggest-release-d0d5daaa097f#:~:text=When%20executing%20a%20series%20of,%7D%29%60send%5Forders.js%60;)\
  Execa 9: our biggest release - Medium\
  8 May 2024 — When executing a series of commands in a script, $ is recommended. When calling individual commands in an application or library, ...\
  Medium·ehmicky

Show all

#

childprocess spawn return object methods

The `child_process.spawn()` method returns a **`ChildProcess`** instance. This object is an `EventEmitter` that allows you to manage and communicate with the new process.

Key Methods of the `ChildProcess` Object

The returned object (often called `subprocess` or `child`) provides several methods to control the process:

- **`subprocess.kill([signal])`**: Sends a signal to the child process (defaults to `'SIGTERM'`) to request its termination.
- **`subprocess.disconnect()`**: Closes the IPC channel between the parent and child, allowing the child to exit gracefully.
- **`subprocess.send(message[, sendHandle[, options]][, callback])`**: Used when an IPC channel is established (like in `fork()`) to send messages to the child process.
- **`subprocess.ref()`**: Ensures the parent process's event loop does not exit while the child process is active.
- **`subprocess.unref()`**: Allows the parent's event loop to exit even if the child process is still running.

Core Properties & Streams

In addition to methods, the object contains essential streams and properties for interaction:

- **`subprocess.stdin`**: A `WritableStream` used to send data to the child's input.
- **`subprocess.stdout`**: A `ReadableStream` that captures the child's standard output.
- **`subprocess.stderr`**: A `ReadableStream` that captures the child's standard error output.
- **`subprocess.pid`**: The unique process identifier assigned by the operating system.
- **`subprocess.exitCode`**: The exit code of the process after it terminates.

Common Events

Because it is an `EventEmitter`, you typically use the `.on()` method to listen for these lifecycle events:

- **`'spawn'`**: Emitted once the child process has been successfully spawned.
- **`'error'`**: Emitted if the process could not be spawned or killed.
- **`'close'`**: Emitted when the stdio streams of a child process have been closed.
- **`'exit'`**: Emitted after the child process ends.

For a full list of technical specifications, refer to the [official Node.js Child Process documentation](https://nodejs.org/api/child%5Fprocess.html).

Would you like to see a **code example** of how to use these methods to manage a running process?

- [link](https://nodejs.org/api/child%5Fprocess.html#:~:text=Asynchronous%20process%20creation%23-,The%20child%5Fprocess.,when%20the%20child%20process%20terminates.)\
  Child process | Node.js v25.9.0 Documentation\
  The child_process. spawn() , child_process. fork() , child_process. exec() , and child_process. execFile() methods all follow the ...\
  Node.js
- [link](https://nodejs.org/download/release/v0.8.3/docs/api/child%5Fprocess.html#:~:text=child%5Fprocess.,-fork%28modulePath%2C%20%5B&text=This%20is%20a%20special%20case,create%20many%20thousands%20of%20them.)\
  Child Process Node.js v0.8.3 Manual & Documentation\
  child_process. ... This is a special case of the spawn() functionality for spawning Node processes. In addition to having all the ...\
  Node.js
- [link](https://nodejs-api-docs-tooling.vercel.app/child%5Fprocess.html)\
  Child process | Node.js v24.14.1 Documentation\
  \* Asynchronous process creation. \* Spawning .bat and .cmd files on Windows. \* child_process.exec(command\[, options]\[, callback]) \*\
  Vercel

Show all

example

Here is an example demonstrating how to use the `ChildProcess` object returned by `spawn()` to stream data, handle lifecycle events, and terminate the process.

Node.js Process Management Example

This example spawns a command (like `find` or `ls`), listens to its output streams, and uses the `.kill()` method if a specific condition is met.

javascript

    const { spawn } = require('node:child_process');

    // 1. Spawn the process (returns the ChildProcess object)
    const subprocess = spawn('ls', ['-lh', '/usr']);

    console.log(`Spawned child PID: ${subprocess.pid}`);

    // 2. Use the .stdout stream method
    subprocess.stdout.on('data', (data) => {
      console.log(`Received: ${data}`);

      // Example of using .kill() method based on output
      if (data.includes('secret-file')) {
        console.log('Target found, killing process...');
        subprocess.kill('SIGTERM');
      }
    });

    // 3. Use the .stderr stream method
    subprocess.stderr.on('data', (data) => {
      console.error(`Error output: ${data}`);
    });

    // 4. Handle lifecycle events
    subprocess.on('error', (err) => {
      console.error('Failed to start subprocess:', err);
    });

    subprocess.on('close', (code) => {
      console.log(`Process exited with code: ${code}`);
    });

Use code with caution.

Explanation of Methods Used

- **`.stdout.on('data', ...)`**: Accesses the `stdout` Readable Stream to handle output in real-time without buffering the entire result.
- **`.kill('SIGTERM')`**: Sends a termination signal to stop the process immediately.
- **`.pid`**: Accesses the property to identify the unique system process ID.
- **`.on('close', ...)`**: An EventEmitter method used to capture the moment the process and its streams are fully closed.

For more complex tasks like background execution, you can use the subprocess.unref() method to allow the parent process to exit while the child continues running.

Do you need to see how to establish **IPC communication** between processes using the `.send()` and `.on('message')` methods?

- [link](https://nodejs.org/api/child%5Fprocess.html#:~:text=Stability:%202%20%2D%20Stable,of%20pipes%20in%20the%20shell.)\
  Child process | Node.js v25.9.0 Documentation\
  Stability: 2 - Stable. The node:child_process module provides the ability to spawn subprocesses in a manner that is similar, but n...\
  Node.js
- [link](https://nodejs.org/download/release/v0.11.13/docs/api/child%5Fprocess.html#:~:text=If%20the%20detached%20option%20is,unref%28%29;)\
  Child Process Node.js v0.11.13 Manual & Documentation\
  If the detached option is set, the child process will be made the leader of a new process group. This makes it possible for the ch...\
  Node.js
- [link](https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live#:~:text=Spawn%20returns%20a%20childObject%2C%20which,scriptOutput+=data;%20%7D%29;%20child.)\
  Node.js spawn child process and get terminal output live\
  15 Jan 2013 — Spawn returns a childObject, which you can then listen for events with. The events are: Class: ChildProcess. Event: 'error' Event:\
  Stack Overflow

Show all