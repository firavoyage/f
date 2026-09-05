# . pm2

```
 ~ % bun add -g pm2

bun add v1.3.14 (0d9b296a)

installed pm2@7.0.4 with binaries:
 - pm2
 - pm2-dev
 - pm2-docker
 - pm2-runtime

77 packages installed [2.45s]
 ~ % pm2

                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

usage: pm2 [options] <command>

pm2 -h, --help             all available commands and options
pm2 examples               display pm2 usage examples
pm2 <command> -h           help on a specific command

Access pm2 files in ~/.pm2
 ~ % pm2 startup
[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/usr/bin /home/fira/.bun/install/global/node_modules/pm2/bin/pm2 startup systemd -u fira --hp /home/fira
 ~ % sudo env PATH=$PATH:/usr/bin /home/fira/.bun/install/global/node_modules/pm2/bin/pm2 startup systemd -u fira --hp /home/fira


                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Init System found: systemd
Platform systemd
Template
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=forking
User=fira
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
Environment=PATH=/home/fira/.local/share/mise/shims:/usr/lib/postgresql/16/bin:/home/fira/.local/bin:/home/fira/.bun/bin:/home/fira/.opencode/bin:/home/fira/.local/bin:/home/fira/.cargo/bin:/home/fira/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/usr/lib/dart/bin:/usr/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Environment=PM2_HOME=/home/fira/.pm2
PIDFile=/home/fira/.pm2/pm2.pid
Restart=on-failure

ExecStart=/home/fira/.bun/install/global/node_modules/pm2/bin/pm2 resurrect
ExecReload=/home/fira/.bun/install/global/node_modules/pm2/bin/pm2 reload all
ExecStop=/home/fira/.bun/install/global/node_modules/pm2/bin/pm2 kill

[Install]
WantedBy=multi-user.target

Target path
/etc/systemd/system/pm2-fira.service
Command list
[ 'systemctl enable pm2-fira' ]
[PM2] Writing init configuration in /etc/systemd/system/pm2-fira.service
[PM2] Making script booting at startup...
[PM2] [-] Executing: systemctl enable pm2-fira...
Created symlink /etc/systemd/system/multi-user.target.wants/pm2-fira.service → /etc/systemd/system/pm2-fira.service.
[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup systemd
```

# . test pm2

```
 ~ % pm2 start
[PM2][ERROR] File ecosystem.config.js not found
 ~ % pm2 start '/home/fira/Documents/f/autostart/source/autostart.ts'
[PM2] Starting /home/fira/Documents/f/autostart/source/autostart.ts in fork_mode (1 instance)
[PM2] Done.
┌────┬──────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name         │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼──────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ autostart    │ fork     │ 0    │ online    │ 0%       │ 1.8mb    │
└────┴──────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
host metrics | cpu: 3.4% | ram usage: 77.3%
 ~ % pm2 save
[PM2] Saving current process list...
[PM2] Successfully saved in /home/fira/.pm2/dump.pm2
```

```
 ~ % pm2 logs autostart
[TAILING] Tailing last 15 lines for [autostart] process (change the value with --lines option)
/home/fira/.pm2/logs/autostart-error.log last 15 lines:
/home/fira/.pm2/logs/autostart-out.log last 15 lines:
0|autostar | Watching /home/fira/Documents/f/autostart

0|autostart  | [Watcher] Change detected: "config.yaml". Executing script...
0|autostart  | 94 |
0|autostart  | 95 | /**
0|autostart  | 96 |  * Standardize fs error code to readable error msgs
0|autostart  | 97 |  */
0|autostart  | 98 | export async function map_error<F extends (...args: any[]) => any>(fn: F) {
0|autostart  | 99 |   const result = await handle(fn)
0|autostart  |                             ^
0|autostart  | ReferenceError: handle is not defined
0|autostart  |       at map_error (/home/fira/Documents/f/autostart/source/lib/file.ts:99:24)
0|autostart  |       at read (/home/fira/Documents/f/autostart/source/lib/file.ts:173:25)
0|autostart  |       at run_script (/home/fira/Documents/f/autostart/source/autostart.ts:41:31)
0|autostart  |       at <anonymous> (/home/fira/Documents/f/autostart/source/autostart.ts:64:3)
0|autostart  |       at emit (node:events:101:22)
0|autostart  |       at emitWithAll (/home/fira/Documents/f/autostart/node_modules/chokidar/index.js:457:18)
0|autostart  |       at _emit (/home/fira/Documents/f/autostart/node_modules/chokidar/index.js:545:14)
0|autostart  |       at <anonymous> (/home/fira/Documents/f/autostart/node_modules/chokidar/handler.js:363:34)
```

it does not use b (my bun root)

```
 ~ % pm2 logs autostart
[TAILING] Tailing last 15 lines for [autostart] process (change the value with --lines option)
/home/fira/.pm2/logs/autostart-error.log last 15 lines:
/home/fira/.pm2/logs/autostart-out.log last 15 lines:
0|autostar | Watching /home/fira/Documents/f/autostart

0|autostart  | [Watcher] Change detected: "config.yaml". Executing script...
0|autostart  | 94 |
0|autostart  | 95 | /**
0|autostart  | 96 |  * Standardize fs error code to readable error msgs
0|autostart  | 97 |  */
0|autostart  | 98 | export async function map_error<F extends (...args: any[]) => any>(fn: F) {
0|autostart  | 99 |   const result = await handle(fn)
0|autostart  |                             ^
0|autostart  | ReferenceError: handle is not defined
0|autostart  |       at map_error (/home/fira/Documents/f/autostart/source/lib/file.ts:99:24)
0|autostart  |       at read (/home/fira/Documents/f/autostart/source/lib/file.ts:173:25)
0|autostart  |       at run_script (/home/fira/Documents/f/autostart/source/autostart.ts:41:31)
0|autostart  |       at <anonymous> (/home/fira/Documents/f/autostart/source/autostart.ts:64:3)
0|autostart  |       at emit (node:events:101:22)
0|autostart  |       at emitWithAll (/home/fira/Documents/f/autostart/node_modules/chokidar/index.js:457:18)
0|autostart  |       at _emit (/home/fira/Documents/f/autostart/node_modules/chokidar/index.js:545:14)
0|autostart  |       at <anonymous> (/home/fira/Documents/f/autostart/node_modules/chokidar/handler.js:363:34)
^C
 ~ % pm2 ls
┌────┬──────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name         │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼──────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ autostart    │ fork     │ 0    │ online    │ 0%       │ 1.8mb    │
└────┴──────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
host metrics | cpu: 5.8% | ram usage: 78.5% | wlp1s0: ⇓ 0mb/s ⇑ 0.003mb/s drop 2/min | Meta: ⇓ 0mb/s ⇑ 0.003mb/s
 ~ % pm2 stop autostart
[PM2] Applying action stopProcessId on app [autostart](ids: [ 0 ])
[PM2] [autostart](0) ✓
┌────┬──────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name         │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼──────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ autostart    │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
└────┴──────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
host metrics | cpu: 5.8% | ram usage: 78.5% | wlp1s0: ⇓ 0mb/s ⇑ 0.003mb/s drop 2/min | Meta: ⇓ 0mb/s ⇑ 0.003mb/s
 ~ % pm2 delete autostart
[PM2] Applying action deleteProcessId on app [autostart](ids: [ 0 ])
[PM2] [autostart](0) ✓
┌────┬───────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name      │ mode     │ ↺    │ status    │ cpu      │ memory   │
└────┴───────────┴──────────┴──────┴───────────┴──────────┴──────────┘
host metrics | cpu: 3.2% | ram usage: 77.2%
 ~ % pm2 save
[PM2] Saving current process list...
[PM2][WARN] PM2 is not managing any process, skipping save...
[PM2][WARN] To force saving use: pm2 save --force
 ~ % pm2 save --force
[PM2] Saving current process list...
[PM2] Successfully saved in /home/fira/.pm2/dump.pm2
```

maybe i do not have to fight it.

i can simply declare

import 'lib/global'

# . systemd

```
 ~ % sudo systemctl enable --now autostart

Created symlink /etc/systemd/system/multi-user.target.wants/autostart.service → /etc/systemd/system/autostart.service.
```

```
 ~ % sudo journalctl -u autostart -f
Sep 06 00:17:09 Fira systemd[1]: autostart.service: Main process exited, code=exited, status=1/FAILURE
Sep 06 00:17:09 Fira systemd[1]: autostart.service: Failed with result 'exit-code'.
Sep 06 00:17:10 Fira systemd[1]: autostart.service: Scheduled restart job, restart counter is at 3.
Sep 06 00:17:10 Fira systemd[1]: Started autostart.service - Autostart.
Sep 06 00:17:10 Fira zsh[1976661]: Watching /home/fira/Documents/f/autostart
Sep 06 00:19:10 Fira systemd[1]: Stopping autostart.service - Autostart...
Sep 06 00:19:10 Fira systemd[1]: autostart.service: Deactivated successfully.
Sep 06 00:19:10 Fira systemd[1]: Stopped autostart.service - Autostart.
Sep 06 00:24:58 Fira systemd[1]: Started autostart.service - Autostart.
Sep 06 00:24:58 Fira zsh[1979829]: Watching /home/fira/Documents/f/autostart
Sep 06 00:25:11 Fira zsh[1979829]: [Watcher] Change detected: "config.yaml". Executing script...
Sep 06 00:25:11 Fira zsh[1979829]: [two] [stdout] 2
Sep 06 00:25:17 Fira zsh[1979829]: [Watcher] Change detected: "config.yaml". Executing script...
Sep 06 00:25:17 Fira zsh[1979829]: [tools design tokens] [stdout] Watching /home/fira/Documents/f/apps/tools/source/web/design
```

# how to create a file watcher on nodejs

You can create a file watcher in Node.js <mark>using<span> </span><strong>built-in modules</strong></mark> for simple tasks or **third-party libraries** for robust, production-grade applications. [link](https://stackoverflow.com/questions/7317909/filesystem-watcher-using-node-js)

Here are the three best ways to do it, depending on your needs.

***

### 1. The Modern Production Way: `chokidar` (Recommended)

Node's built-in tools often suffer from cross-platform inconsistencies and duplicate event triggers. **[Chokidar](https://github.com/paulmillr/chokidar)** is the industry standard used by tools like Webpack and VS Code to watch files smoothly. [link](https://www.reddit.com/r/javascript/comments/91a3tp/why%5Fis%5Fthere%5Fno%5Fsmall%5Fsane%5Fnodejs%5Ftool%5Ffor/)

First, install it via your terminal:

bash

```
npm install chokidar
```

Use code with caution.

Then, implement the watcher in your JavaScript file:

javascript

```
const chokidar = require('chokidar');

// Initialize watcher to track a folder or file
const watcher = chokidar.watch('./my-folder', {
  ignored: /(^|[\/\\])\../, // Ignore hidden files (like .DS_Store)
  persistent: true
});

// Bind listeners to specific file system events
watcher
  .on('add', path => console.log(`File ${path} has been added`))
  .on('change', path => console.log(`File ${path} has been changed`))
  .on('unlink', path => console.log(`File ${path} has been removed`))
  .on('error', error => console.error(`Watcher error: ${error}`));
```

Use code with caution.

***

### 2. The Native Way: `fs.watch()` (No Dependencies)

If you prefer not to use third-party libraries, Node.js provides a built-in API through the `fs` module. The modern approach leverages async iterators available in `fs/promises`. [link](https://www.youtube.com/watch?v=YSkryJrMvOQ)

javascript

```
const { watch } = require('fs/promises');

async function startWatching() {
  try {
    // watch() returns an async iterator
    const watcher = watch('./my-folder', { recursive: true });
    console.log("Watching for changes...");

    for await (const event of watcher) {
      // event object contains 'eventType' (rename/change) and 'filename'
      console.log(`Event: ${event.eventType} on file: ${event.filename}`);
    }
  } catch (err) {
    console.error('Error watching files:', err);
  }
}

startWatching();
```

Use code with caution.

_Note: The `recursive: true` option works seamlessly on macOS and Windows, but support varies across certain Linux distributions._ [link](https://www.npmjs.com/package/watcher)

To understand how the underlying native fs.watch mechanism handles event parameters and tracks file streams in real time, see this video tutorial:

4:41

[link](https://www.youtube.com/watch?v=YSkryJrMvOQ)

How to Watch File Changes in Node.js

1 year ago

YouTube · ProgrammingKnowledge

***

### 3. The CLI No-Code Way: Native CLI Watch Mode

If your ultimate goal is simply to restart a script when a file updates during development, you do not need to write watcher code at all. Modern versions of Node.js include a **native `--watch` flag**. [link](https://blog.logrocket.com/exploring-native-file-watching-node-js-v22/)

Run your script in your command line like this:

bash

```
node --watch index.js
```

Use code with caution.

This forces Node.js to automatically monitor `index.js` (and any imported local modules) and restart the process instantly whenever you hit save. [link](https://blog.logrocket.com/exploring-native-file-watching-node-js-v22/)

***

To help point you toward the right approach, let me know:

- What **action** should trigger when a file changes? (e.g., restarting a server, processing an uploaded file, compiling code?)

- What **operating system** will this application run on in production? [link](https://medium.com/illumination/how-i-built-a-real-time-file-watcher-in-node-js-for-devops-automation-97742ac4ceac)

- [link](https://stackoverflow.com/questions/7317909/filesystem-watcher-using-node-js)\
  Stack Overflow\
  Filesystem watcher using node.js\
  Sep 6, 2011 — Here are some ways to implement a file system watcher using Node.js: \* \*\*fs.watchFile(filename, \[options], listener)\*\* This is the...

- [link](https://www.reddit.com/r/javascript/comments/91a3tp/why%5Fis%5Fthere%5Fno%5Fsmall%5Fsane%5Fnodejs%5Ftool%5Ffor/)\
  Reddit\
  Why is there no \*small\*, sane Node.js tool for watching file ...\
  Jul 23, 2018 — So basically you have to write something like: const myPath; // the path you want to watch, can be a directory let watcher; try { ...

- [link](https://medium.com/illumination/how-i-built-a-real-time-file-watcher-in-node-js-for-devops-automation-97742ac4ceac)\
  Medium\
  How I Built a Real-Time File Watcher in Node.js for DevOps Automation | by Maximilian Oliver | ILLUMINATION | Medium\
  Jul 27, 2025 — Here's some information about adding timeout logic to a file watcher: \* \*\*timeout = setTimeout(() => {\*\* \* \*\*console.log(\`Batch ch...

Show all

# how to use chokidar npm lib

To use the [chokidar npm library](https://www.npmjs.com/package/chokidar), you can initialize a file watcher to monitor changes to your filesystem smoothly, efficiently, and with minimal overhead. [link](https://www.npmjs.com/package/chokidar)

\_Note: In its latest major updates (v4+), Chokidar has become an ESM-only/CommonJS dual-package that has **dropped native support for glob patterns** (like `\*\*/_.js`) to drastically reduce its dependency size. Paths are now handled directly.\* [link](https://www.npmjs.com/package/chokidar?activeTab=versions)

### 1. Installation

Install the package via npm in your project terminal: [link](https://www.npmjs.com/package/chokidar)

bash

```
npm install chokidar
```

Use code with caution.

### 2. Basic Example (Listen to All Events)

You can set up a one-liner to watch an entire folder (e.g., the current directory) and listen for any event types like adding, changing, or deleting files: [link](https://www.npmjs.com/package/chokidar)

javascript

```
import chokidar from 'chokidar';

// Watch the current directory
chokidar.watch('.').on('all', (event, path) => {
  console.log(`Event: ${event} | Path: ${path}`);
});
```

Use code with caution.

### 3. Extended Configuration & Specific Events

For real-world applications, you will usually want to isolate specific events (like `change` or `unlink`) and pass configuration options to ignore certain files. [link](https://www.npmjs.com/package/chokidar)

javascript

```
import chokidar from 'chokidar';

// Initialize the watcher with paths and options
const watcher = chokidar.watch(['src', 'config.json'], {
  // Ignore node_modules or specific files using a function or regex
  ignored: /node_modules/,

  // Keep the process running as long as files are being watched
  persistent: true,

  // If true, ignores the initial "add" events when Chokidar first boots up
  ignoreInitial: false
});

// Bind targeted event listeners
watcher
  .on('add', path => console.log(`File ${path} has been added`))
  .on('change', path => console.log(`File ${path} has been changed`))
  .on('unlink', path => console.log(`File ${path} has been removed`));

// Directory-specific events
watcher
  .on('addDir', path => console.log(`Directory ${path} has been added`))
  .on('unlinkDir', path => console.log(`Directory ${path} has been removed`));

// Lifecycle events
watcher
  .on('error', error => console.error(`Watcher error: ${error}`))
  .on('ready', () => console.log('Initial scan complete. Ready for changes'));
```

Use code with caution.

### 4. Commonly Used Options

When setting up `chokidar.watch(paths, options)`, these properties inside your configuration object help tweak performance and behavior: [link](https://www.jsdelivr.com/package/npm/chokidar)

| Option          | Type                   | Default     | Description                                                                               |
| --------------- | ---------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `ignored`       | Function/RegExp/String | `undefined` | Defines paths to completely skip.                                                         |
| `ignoreInitial` | Boolean                | `false`     | When `false`, `add`/`addDir` events trigger for everything found during the initial scan. |
| `cwd`           | String                 | `undefined` | Explicitly sets the current working directory so emitted paths are relative to it.        |
| `persistent`    | Boolean                | `true`      | Dictates whether the Node process should stay active while watching.                      |

### 5. Stopping the Watcher

To avoid memory leaks, remember to stop the watcher when it is no longer required in your lifecycle: [link](https://medium.com/@ashusingh584/chokidar-11290855e2cb)

javascript

```
// Unwatch a specific file safely
watcher.unwatch('config.json');

// Stop watching everything and clear all listeners
await watcher.close();
```

Use code with caution.

To narrow this down, what **type of project** are you building (e.g., a custom build tool, a hot-reloader, or a file sync service)? I can help write a specific automation script tailored to your use case.

- [link](https://www.npmjs.com/package/chokidar)\
  NPM\
  chokidar - NPM\
  Nov 25, 2025 — Install with npm: npm install chokidar Use it in your code: import chokidar from 'chokidar'; // One-liner for current directory ch...
- [link](https://www.npmjs.com/package/chokidar?activeTab=versions)\
  NPM\
  chokidar - NPM\
  Nov 25, 2025 — Why? ... Chokidar relies on the Node. js core fs module, but when using fs. watch and fs. watchFile for watching, it normalizes th...
- [link](https://www.jsdelivr.com/package/npm/chokidar)\
  jsDelivr\
  chokidar - A CDN for npm and GitHub - jsDelivr\
  Path filtering \* ignored function, regex, or path. Defines files/paths to be ignored. The whole relative or absolute path is teste...

Show all

## how to set the path

To set the path in Chokidar, you <mark>pass a<span> </span><strong>string</strong><span> </span>or an<span> </span><strong>array of strings</strong><span> </span>as the first argument to</mark> `chokidar.watch()`.

Because **Chokidar v4 dropped support for glob patterns** (like `src/**/*.js`), paths must now point directly to files or entire directories. Chokidar will automatically watch directories recursively by default.

Here are the standard ways to set your paths depending on your needs:

### 1. Watch a Single File or Folder

Pass a relative or absolute path string as the first argument.

javascript

```
// Watch a single folder (recursively watches all nested files/folders)
const watcher = chokidar.watch('src');

// Watch a single specific file
const watcher = chokidar.watch('config.json');
```

Use code with caution.

### 2. Watch Multiple Paths (Array)

If you need to monitor several unrelated locations at once, pass them as an array.

javascript

```
// Watch a mix of directories and specific files
const watcher = chokidar.watch(['src', 'public', 'package.json']);
```

Use code with caution.

### 3. Simplify Paths using the `cwd` Option

By default, Chokidar outputs absolute paths or paths relative to where your Node process is running. You can pass the `cwd` (Current Working Directory) option to make all target paths and emitted event paths relative to a specific folder.

javascript

```
import chokidar from 'chokidar';

const watcher = chokidar.watch(['styles', 'scripts'], {
  cwd: '/Users/project/app', // Sets the base directory
});

watcher.on('change', (path) => {
  // If '/Users/project/app/styles/main.css' changes,
  // 'path' will log as simply: 'styles/main.css'
  console.log(`Changed: ${path}`);
});
```

Use code with caution.

### 4. Dynamic Path Filtering (The new way to filter file types)

Since you can no longer pass a glob like `src/*.ts`, you target the whole folder and use the `ignored` option function to filter for the file extensions you want.

javascript

```
const watcher = chokidar.watch('src', {
  // Ignore any file that doesn't end in .ts or .js
  ignored: (path, stats) => {
    // Don't ignore directories, otherwise Chokidar can't look inside them
    if (stats?.isDirectory()) return false;

    // Ignore the file if it does NOT end with .js or .ts
    return !path.endsWith('.js') && !path.endsWith('.ts');
  }
});
```

Use code with caution.

Are you trying to **filter for specific file extensions**, or do you need to handle **dynamic user-inputted paths**? Let me know, and I can show you the exact code snippet for it.

## from project repo root, if the list or the content of anything in the list of rg --files -g 'design/\*\*/\*.yaml' -g '!\*\*/legacy/\*\*' change, run script/foo.sh

Since **Chokidar v4** does not support glob strings directly, your filter matching `rg --files -g 'design/**/*.yaml' -g '!**/legacy/**'` must be handled by watching the base `design` directory and passing an intentional `ignored` filter function. [link](https://dev.to/43081j/migrating-from-chokidar-3x-to-4x-5ab5)

The complete Node.js script below watches that exact directory setup. It accurately simulates the behavior of your `ripgrep` expression and executes `script/foo.sh` using `child_process.exec` whenever a match is added, modified, or removed:

javascript

```
import chokidar from 'chokidar';
import { exec } from 'child_process';
import path from 'path';

// Define the exact criteria to replicate the rg glob rules
const isTargetYaml = (filePath) => filePath.endsWith('.yaml') || filePath.endsWith('.yml');
const isLegacyPath = (filePath) => filePath.split(path.sep).includes('legacy');

// Initialize Chokidar to watch the target base folder from the root
const watcher = chokidar.watch('design', {
  persistent: true,
  ignoreInitial: true, // Set to true so it doesn't trigger foo.sh for existing files on boot

  // Custom filter logic replacing rg's ignore/include patterns
  ignored: (filePath, stats) => {
    // DO NOT ignore directories, otherwise chokidar cannot traverse inside them
    if (stats?.isDirectory()) return false;

    // 1. Match behavior of -g '!**/legacy/**'
    if (isLegacyPath(filePath)) return true;

    // 2. Match behavior of -g 'design/**/*.yaml' (Ignore if it is NOT a YAML file)
    return !isTargetYaml(filePath);
  }
});

// Function to safely execute your shell script
function runScript(event, filePath) {
  console.log(`[Watcher] Event "${event}" detected on ${filePath}. Running script/foo.sh...`);

  exec('sh script/foo.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`[Error] script/foo.sh failed: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`[Stderr]: ${stderr}`);
    }
    if (stdout) {
      console.log(`[Stdout]:\n${stdout}`);
    }
  });
}

// Bind the event listener to catch updates, additions, or deletions
watcher.on('all', (event, filePath) => {
  runScript(event, filePath);
});

console.log("Watching 'design/' for non-legacy YAML changes...");
```

Use code with caution.

### Why this works:

- **Directory traversal:** Returning `false` for `stats.isDirectory()` ensures Chokidar deeply scans nested directories inside `design/`.
- **Legacy Exclusion:** Splitting the path by the platform's separator (`path.sep`) cleanly identifies any folder level named `legacy`, catching `design/legacy/file.yaml` or `design/subfolder/legacy/file.yaml`.
- **Execution safety:** `ignoreInitial: true` blocks your script from firing immediately for every file currently sitting inside your folder when the process boots up. [link](https://www.npmjs.com/package/chokidar)

Do you need to add a **debounce mechanism** to prevent the script from running multiple times if you save multiple files simultaneously?

- [link](https://www.npmjs.com/package/chokidar)\
  NPM\
  chokidar - NPM\
  Nov 25, 2025 — Install with npm: npm install chokidar Use it in your code: import chokidar from 'chokidar'; // One-liner for current directory ch...
- [link](https://dev.to/43081j/migrating-from-chokidar-3x-to-4x-5ab5)\
  DEV Community\
  Migrating from chokidar 3.x to 4.x - DEV Community\
  Sep 17, 2024 — Chokidar is a file system watcher that provides an abstraction over Node's watch functions. The latest version of chokidar is 4.x,
- [link](https://github.com/paulmillr/chokidar)\
  GitHub\
  GitHub - paulmillr/chokidar: Minimal and efficient cross ...\
  Nov 2025 update: v5 is out. Makes package ESM-only and increases minimum node. js requirement to v20. Sep 2024 update: v4 is out! ...

## why does it exit, is it still watching

If your Node.js script is **exiting immediately**, it means Chokidar is **no longer watching**.

By design, a Node.js process stays alive only if there is an active event loop item keeping it unref'd (like an open network server, a timer, or an active file watcher stream). If Chokidar exits right away, it is usually because it **instantly finished its execution** without finding anything to hold it open.

The two main reasons why this happens based on the script provided above are:

### 1. The target folder (`design`) does not exist yet

If the `design` directory does not exist relative to the terminal directory where you ran the command, Chokidar will check the path, see nothing there to watch, fire its internal lifecycle events, and close the loop. Node then sees zero active handles and immediately exits.

- **The Fix:** Ensure you are executing the script from your project root and that the `design/` folder physically exists.

### 2. The `ignored` function accidentally filtered out the folder itself

In Chokidar, the `ignored` filter evaluates **every single path**, including the root directory you provided (`design`).\
If your filter logic blocks the directory itself from being traversed, Chokidar considers the search space empty and ends the script.

To guarantee that your folder remains open and keeps the process alive, update your `ignored` option to **explicitly return `false` if `stats` is missing**. When Chokidar initially reads the base directory path text, `stats` can occasionally evaluate as `undefined`.

Try modifying the `ignored` block to look like this:

javascript

```
const watcher = chokidar.watch('design', {
  persistent: true,
  ignoreInitial: true,

  ignored: (filePath, stats) => {
    // FIX: If stats is undefined, let chokidar check it so it doesn't drop the path entirely
    if (!stats) return false;

    // Do not ignore directories, otherwise chokidar cannot look inside them
    if (stats.isDirectory()) return false;

    // 1. Match behavior of -g '!**/legacy/**'
    if (isLegacyPath(filePath)) return true;

    // 2. Match behavior of -g 'design/**/*.yaml'
    return !isTargetYaml(filePath);
  }
});
```

Use code with caution.

### How to verify it stays open

To debug whether it's initializing correctly, hook into Chokidar's `ready` event. If you see the "Ready" log print right before the process exits, you know it scanned successfully but found 0 matching files to maintain a baseline watch loop:

javascript

```
watcher.on('ready', () => {
  console.log('Initial scan complete. Watcher is alive and listening...');
});
```

Use code with caution.

Did adding the `!stats` check keep the process alive in your terminal, or are you running this inside a specific environment like a **Docker container**?

## how to do if the chokidar is not on project root

If the script is being executed from a different directory (not the project repository root), Chokidar's relative target paths and your `exec()` scripts will break because Node resolves everything relative to your terminal's active working directory (`process.cwd()`).

To make the script work universally from anywhere, use **absolute paths** generated via Node's native `path` and `fileURLToPath` modules. [link](https://willvincent.com/2022/06/07/laravel-mix-wont-watch-my-changes/)

Here is how to adapt your script to dynamically discover the repo root, regardless of where you call the command from:

javascript

```
import chokidar from 'chokidar';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Get the absolute path of this script file, and resolve up to your project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ADJUST THIS: If this script is nested inside a subfolder (like /bin/watch.js),
// add standard relative steps to reach the real repo root: path.resolve(__dirname, '..')
const REPO_ROOT = path.resolve(__dirname);

const WATCH_DIR = path.join(REPO_ROOT, 'design');
const SCRIPT_PATH = path.join(REPO_ROOT, 'script', 'foo.sh');

// Helper checking logic (remains based on path components)
const isTargetYaml = (filePath) => filePath.endsWith('.yaml') || filePath.endsWith('.yml');
const isLegacyPath = (filePath) => filePath.split(path.sep).includes('legacy');

// 2. Initialize Chokidar passing the absolute target folder
const watcher = chokidar.watch(WATCH_DIR, {
  persistent: true,
  ignoreInitial: true,

  ignored: (filePath, stats) => {
    if (!stats) return false;
    if (stats.isDirectory()) return false;

    // Isolate relative path logic from absolute paths for safety
    const relativePath = path.relative(REPO_ROOT, filePath);

    if (isLegacyPath(relativePath)) return true;
    return !isTargetYaml(relativePath);
  }
});

function runScript(event, filePath) {
  const relativePath = path.relative(REPO_ROOT, filePath);
  console.log(`[Watcher] Change detected: "${relativePath}". Executing foo.sh...`);

  // 3. Force the execution environment window to point directly at your repo root
  exec(`sh "${SCRIPT_PATH}"`, { cwd: REPO_ROOT }, (error, stdout, stderr) => {
    if (error) {
      console.error(`[Error] foo.sh failed: ${error.message}`);
      return;
    }
    if (stderr) console.error(`[Stderr]: ${stderr}`);
    if (stdout) console.log(`[Stdout]:\n${stdout}`);
  });
}

watcher.on('all', (event, filePath) => {
  runScript(event, filePath);
});

watcher.on('ready', () => {
  console.log(`Successfully watching absolute path: ${WATCH_DIR}`);
});
```

Use code with caution.

### What changed to resolve the path issue:

- **`path.join` & `path.resolve`**: Absolute system paths are derived on boot, meaning Chokidar won't fail to find the `design` directory even if you run the script from your home folder (`~`) or a nested subdirectory. [link](https://willvincent.com/2022/06/07/laravel-mix-wont-watch-my-changes/)
- **`exec({ cwd: REPO_ROOT })`**: This is crucial. Passing the `cwd` option directly to Node's `exec` module forces your shell environment to run `script/foo.sh` using the exact repo root framework, preventing internal relative script targets inside `foo.sh` from breaking.

Where is **this watcher script file** saved inside your repository structure (e.g., directly in the root folder, or inside a nested subfolder like `scripts/`)?

- [link](https://willvincent.com/2022/06/07/laravel-mix-wont-watch-my-changes/)\
  willvincent.com\
  Laravel Mix won't watch my changes.\
  Jun 6, 2022 — In my .scripts directory I added a watch.js file: const chokidar = require('chokidar'); const \_debounce = require('lodash.debounce...
- [link](https://github.com/poppinss/chokidar-ts)\
  GitHub\
  poppinss/chokidar-ts: File watcher for TypeScript projects - GitHub\
  Setup. Install the package from the npm packages registry. In addition, the package has a peer dependency on the typescript packag...

# how to create a file watcher in shell

To create a file watcher in a shell script, <mark>the best approach depends on whether you want an<span> </span><strong>efficient, event-driven watcher</strong><span> </span>(Linux-native) or a<span> </span><strong>highly portable watcher</strong><span> </span>(works anywhere but uses polling)</mark>.

### Option 1: The Event-Driven Way (Linux Native - Recommended)

The most efficient way on Linux is to use `inotifywait` (part of the `inotify-tools` package). It hooks directly into the Linux kernel, so it uses **zero CPU** while waiting for changes. [link](https://stackoverflow.com/questions/21706697/file-watcher-in-shell)

First, ensure the tool is installed:

bash

```
sudo apt install inotify-tools  # Ubuntu/Debian
sudo dnf install inotify-tools  # CentOS/RHEL/Fedora
```

Use code with caution.

#### The Script:

bash

```
#!/bin/bash

# Target directory to watch
WATCH_DIR="./my_folder"

echo "Watching directory: $WATCH_DIR"

# -m: monitor continuously
# -e: listen for specific events (modify, create, delete)
inotifywait -m -e modify,create,delete "$WATCH_DIR" | while read -r directory events filename; do
    echo "Change detected! File: $filename via event: $events"

    # Place the script or command you want to run here
    # Example: ./build.sh
done
```

Use code with caution.

- **Pros:** Instantaneous; highly efficient; scales to thousands of files.
- **Cons:** Requires installing an external package; Linux-only. [link](https://stackoverflow.com/questions/39447734/shell-script-file-watcher-concurrency)

***

### Option 2: The Pure Bash Way (Portable Polling)

If you cannot install third-party packages, or you need the script to run across different UNIX-like systems (like macOS), you can use a **polling loop** that monitors file modification timestamps (`stat`). [link](https://stackoverflow.com/questions/36848645/how-to-monitor-newly-created-file-in-a-directory-with-bash)

#### The Script:

bash

```
#!/bin/bash

# Target file to watch
WATCH_FILE="./config.txt"

# Get the initial modification time
last_time=$(stat -c %Y "$WATCH_FILE" 2>/dev/null || stat -f %m "$WATCH_FILE")

echo "Watching $WATCH_FILE for changes..."

while true; do
    # Get current modification time (handles both Linux and macOS stat syntax)
    current_time=$(stat -c %Y "$WATCH_FILE" 2>/dev/null || stat -f %m "$WATCH_FILE")

    if [ "$current_time" != "$last_time" ]; then
        echo "File $WATCH_FILE has changed!"

        # Place your command here

        # Update the timestamp tracking
        last_time=$current_time
    fi

    # Sleep for 2 seconds before checking again to preserve CPU
    sleep 2
done
```

Use code with caution.

- **Pros:** No dependencies; works out-of-the-box on almost any Unix system.
- **Cons:** Slower response time (dependent on `sleep` interval); consumes slightly more CPU because it actively asks for updates. [link](https://stackoverflow.com/questions/6475252/bash-script-watch-folder-execute-command)

***

### Comparison of Key Events

If you choose **Option 1**, you can tailor the `-e` flag to listen only to what matters to your workflow: [link](https://unix.stackexchange.com/questions/24952/tool-to-monitor-folder-for-new-files-and-run-command-whenever-new-file-is-detect)

| Event         | Trigger Condition                                              | Best Use Case                                          |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| `modify`      | A watched file's contents were written to.                     | Hot-reloading configurations.                          |
| `close_write` | A file was closed after being opened for writing.              | Triggering builds (ensures the editor is done saving). |
| `create`      | A new file or directory was generated inside the watched path. | Processing automated uploads or incoming logs.         |
| `delete`      | A file or directory within the watched path was deleted.       | Syncing backups or cleaning up caches.                 |

Would you like to tailor this script to **automatically pass the specific filename** to another command, or do you need it to **recursively monitor subdirectories**? [link](https://stackoverflow.com/questions/39447734/shell-script-file-watcher-concurrency)

- [link](https://stackoverflow.com/questions/21706697/file-watcher-in-shell)\
  Stack Overflow\
  File watcher in shell - Stack Overflow\
  Feb 11, 2014 — 1 Answer Sorted by: 0 If you use Linux, you can hook into the kernel using the inotify API to get notified if something in a folde...
- [link](https://stackoverflow.com/questions/39447734/shell-script-file-watcher-concurrency)\
  Stack Overflow\
  Shell script file watcher concurrency - linux - Stack Overflow\
  Sep 12, 2016 — \* 1 Answer. Sorted by: One idea is to use inotifywait from inotify-tools to monitor the directories for changes. This is more effi...
- [link](https://stackoverflow.com/questions/36848645/how-to-monitor-newly-created-file-in-a-directory-with-bash)\
  Stack Overflow\
  How to monitor newly created file in a directory with bash?\
  Apr 25, 2016 — Some explanation: \* waitPaths=(/{home,tmp}) could be written waitPaths=(/home /tmp) or for only one directory: waitPaths=/var/log.

Show all

# all systemd syntax

**Systemd unit configuration files** use a plain-text, declaration-based structure inspired by **Microsoft Windows `.ini` files** and **XDG Desktop Entry `.desktop` files**. [link](https://wiki.archlinux.org/title/Systemd)

The broad structure relies on **`[Section]` headers** followed by case-sensitive **`Key=Value` pairs**. [link](https://www.freedesktop.org/software/systemd/man/systemd.syntax.html)

***

### 1. General Structural Rules

- **Formatting:** Whitespace surrounding the `=` separator is ignored. `Key = Value` works identically to `Key=Value`. [link](https://manpages.ubuntu.com/manpages/focal/man7/systemd.syntax.7.html)
- **Comments:** Any lines beginning with a hash (`#`) or semicolon (`;`) are completely ignored. They cannot be added at the tail end of an inline configuration. [link](https://www.freedesktop.org/software/systemd/man/systemd.syntax.html)
- **Line Continuation:** Long commands or multi-line assignments use a backslash (`\`) at the very end of the line to link with the next. [link](https://www.freedesktop.org/software/systemd/man/systemd.syntax.html)
- **Booleans:** Accepted truthy options are `1`, `yes`, `true`, and `on`. Falsey options are `0`, `no`, `false`, and `off`. [link](https://man7.org/linux/man-pages/man7/systemd.syntax.7.html)
- **Time Spans:** Parsed using raw integers for seconds, or string format pairings like `30min 10s` or `2h 5ms`. [link](https://man7.org/linux/man-pages/man7/systemd.syntax.7.html)
- **Resets:** Directives that allow a list of items can usually be reset to an empty state by declaring an empty key value first (e.g., `ExecStart=`, followed by a new `ExecStart=/bin/foo`). [link](https://man7.org/linux/man-pages/man7/systemd.syntax.7.html)

***

### 2. Standard Unit Sections

A typical `.service` file uses three foundational block components: [link](https://wiki.debian.org/systemd/Services)

ini

```
[Unit]
Description=Example Core Text Summary
After=network.target
Wants=postgresql.service

[Service]
Type=simple
ExecStart=/usr/bin/python3 /opt/app/server.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Use code with caution.

#### `[Unit]` Block (Generic metadata & ordering)

Common to all types of unit files (`.service`, `.timer`, `.mount`, etc.): [link](https://www.freedesktop.org/software/systemd/man/systemd.unit.html)

- `Description=`: A user-friendly text name for logging and status displays.
- `Documentation=`: A URI space containing reference manuals or online documentation.
- `After= / Before=`: Defines startup order sequence dependencies. (_Does not force a hard requirement dependency_).
- `Requires=`: Hard requirement dependency. If a required dependency fails, this unit fails alongside it.
- `Wants=`: Soft requirement dependency. Attempts to launch specified units, but does not stop execution if they fail. [link](https://www.youtube.com/watch?v=Kzpm-rGAXos\&t=1407)

#### `[Service]` Block (Service specific rules)

Applies exclusively to `.service` types: [link](https://man7.org/linux/man-pages/man5/systemd.service.5.html)

- `Type=`: Decides how the startup script process state is monitored. Options include `simple`, `forking`, `oneshot`, `dbus`, `notify`, or `idle`.
- `ExecStart=`: The precise binary or script absolute execution path along with arguments.
- `ExecStartPre= / ExecStartPost=`: Tasks executed immediately preceding or succeeding `ExecStart`.
- `ExecStop=`: Specific command executed when forcing the system unit downward.
- `ExecReload=`: Specific behavior trigger command when triggering a daemon reload rule.
- `Restart=`: Logic governing process crashes. Options include `always`, `on-failure`, `on-abnormal`, or `no`.
- `User= / Group=`: Drops execution root scope down to the designated system user or group.
- `Environment=`: Inlines standard env strings inside the child runtime context (e.g., `Environment="PORT=8080"`).
- `EnvironmentFile=`: Points directly to an absolute filesystem path loading a `.env` newline file. [link](https://www.youtube.com/watch?v=Kzpm-rGAXos\&t=1407)

#### `[Install]` Block (Boot enablement)

Defines behaviors invoked when executing the `systemctl enable` or `disable` commands: [link](https://www.akamai.com/cloud/guides/introduction-to-systemctl/)

- `WantedBy=`: Creates a symbolic link folder map to attach itself to broad target goals. Example: `multi-user.target` represents a normal multi-user console runlevel environment.
- `RequiredBy=`: Similar to `WantedBy`, but establishes a critical dependency path.
- `Alias=`: Creates alternative shorthand system naming links. [link](https://documentation.suse.com/smart/systems-management/html/systemd-management/index.html)

***

### 3. Template and Specifier Variables

Systemd supports dynamic string resolution inside unit blocks using a `%` specifier syntax. This is heavily utilized when using instantiated templates (files matching `name@.service` that are invoked via `name@instance.service`): [link](https://www.freedesktop.org/software/systemd/man/systemd.service.html)

| Specifier | Value Resolved                                            |
| --------- | --------------------------------------------------------- |
| `%i`      | Exact Instance Name (string text after the `@` symbol)    |
| `%I`      | Unescaped Instance Name text                              |
| `%n`      | Full Unit Name (e.g., `foo@bar.service`)                  |
| `%N`      | Unescaped Full Unit Name                                  |
| `%p`      | Prefix Name (string text preceding the `@` symbol)        |
| `%h`      | Home Directory path of the executing user                 |
| `%m`      | Machine ID hash string of the running system hardware     |
| `%b`      | Unique boot ID generated during current OS initialization |

***

### 4. Basic Systemctl CLI Syntax

While not part of the file syntax itself, managing these files relies on the `systemctl` CLI program: [link](https://man7.org/linux/man-pages/man1/systemctl.1.html)

- **`systemctl daemon-reload`**: Instructs the manager core to rescan paths and digest newly created or updated unit files.
- **`systemctl start <unit>`**: Spawns the process lifecycle environment immediately.
- **`systemctl stop <unit>`**: Halts the target daemon structure.
- **`systemctl enable <unit>`**: Creates symlinks to persist start-on-boot behavior.
- **`systemctl disable <unit>`**: Destroys symlinks to prevent auto-starting.
- **`systemctl status <unit>`**: Outputs detailed logging history and process status trees. [link](https://askubuntu.com/questions/795226/how-to-list-all-enabled-services-from-systemctl)

If you are looking to build a specific type of unit file or want to explore configuration constraints for an environment, let me know:

- What **type of application or script** are you trying to manage?

- Does it need to run on a **specific time interval** (like a cron job/timer)?

- Do you need advanced **sandboxing or security restrictions** (like isolating system directories or private network spaces)?

- [link](https://www.youtube.com/watch?v=Kzpm-rGAXos\&t=1407)\
  YouTube·Learn Linux TV\
  Systemd Explained: How to Manage Linux Services Easily\
  Jun 21, 2023 — Systemd unit files, particularly service files, have a specific structure divided into sections like \`\[Unit]\`, \`\[Service]\`, and \`\[\
  9m

- [link](https://wiki.archlinux.org/title/Systemd)\
  ArchWiki\
  systemd - ArchWiki\
  Jul 4, 2026 — The syntax of systemd's unit files (systemd.unit(5)) is inspired by XDG Desktop Entry Specification .desktop files, which are in t...

- [link](https://www.freedesktop.org/software/systemd/man/systemd.unit.html)\
  Freedesktop.org\
  systemd.unit - Freedesktop.org\
  Description. A unit file is a plain text ini-style file that encodes information about a service, a socket, a device, a mount poin...

Show all

# all systemd syntax on ubuntu

In Ubuntu, **systemd** uses plain-text configuration files called **unit files**. These files use an INI-style syntax organized into `[Sections]` containing `Key=Value` pairs. [link](https://manpages.ubuntu.com/manpages/focal/man7/systemd.syntax.7.html)

Here is the comprehensive guide to systemd unit file syntax and the core `systemctl` management commands. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)

***

### 1. General File Rules & Formatting

- **Comments:** Any line starting with `#` or `;` is treated as a comment. [link](https://manpages.ubuntu.com/manpages/focal/man7/systemd.syntax.7.html)
- **Booleans:** You can use `1`, `yes`, `true`, or `on` for positive flags; `0`, `no`, `false`, or `off` for negative flags. [link](https://manpages.ubuntu.com/manpages/focal/man7/systemd.syntax.7.html)
- **Line Continuation:** Use a backslash (`\`) at the end of a line to continue long commands onto the next line. [link](https://manpages.ubuntu.com/manpages/focal/man7/systemd.syntax.7.html)
- **File Locations:**
  - Custom/User services: `/etc/systemd/system/` (takes priority).
  - Package-installed defaults: `/lib/systemd/system/`. [link](https://dev.to/edgaras/creating-and-managing-custom-systemd-services-on-ubuntu-dkh)

***

### 2. Core Unit File Structure

A standard service file (e.g., `myservice.service`) is split into three core blocks. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)

#### `[Unit]` Section

This section defines metadata and handles boot dependency mapping. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)

- `Description=`: A brief, human-readable name for the service.
- `Documentation=`: A URL or man page reference path.
- `After=`: Ensures this service starts **after** the specified targets or services (e.g., `network.target`). _Does not enforce a hard dependency._
- `Requires=`: Hard dependency; if the specified service fails or drops, this unit drops too.
- `Wants=`: Soft dependency; systemd will attempt to start the specified units alongside this one. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)

#### `[Service]` Section

This section defines the execution mechanics of the daemon or binary. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)

- `Type=`: Defines the process startup behavior.
  - `simple`: (Default) Assumes the service starts immediately when the binary executes.
  - `forking`: Expects the process to spawn a child and background itself.
  - `oneshot`: Runs a script or command to completion and then exits. [link](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
- `ExecStart=`: The **absolute path** to the binary or script to execute (e.g., `ExecStart=/usr/bin/python3 /opt/app.py`). [link](https://manpages.ubuntu.com/manpages/trusty/man5/systemd.service.5.html)
- `ExecStop=`: The command to run to cleanly shut down the service. [link](https://manpages.ubuntu.com/manpages/bionic/man5/systemd.service.5.html)
- `Restart=`: Logic for automated recovery (e.g., `on-failure`, `always`, `no`). [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)
- `RestartSec=`: Time delay (in seconds) before trying to restart a crashed service.
- `User=` / `Group=`: Explicit drop in privileges; runs the daemon under a specific user or group context.
- `Environment=`: Key-value pairs for environment variables (e.g., `Environment="PORT=8080"`).

#### `[Install]` Section

This handles what happens when you run `sudo systemctl enable`. [link](https://www.youtube.com/watch?v=DACT9Dua-Os)

- `WantedBy=`: Tells systemd which state/target should pull this service in. `multi-user.target` is the standard equivalent to "boot into standard command line/GUI mode".
- `Alias=`: Alternative names for the service. [link](https://man7.org/linux/man-pages/man5/systemd.unit.5.html)

***

### Example Complete Service Template

ini

```
[Unit]
Description=My Custom Python App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/python3 /opt/myapp/app.py
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Use code with caution.

***

### 3. Syntax Specifiers (Variables)

Inside a unit file, you can use `%` specifiers to dynamically pass environment context: [link](https://manpages.ubuntu.com/manpages/focal/man5/systemd.service.5.html)

| Specifier | Definition                                               |
| --------- | -------------------------------------------------------- |
| `%n`      | Full unit name                                           |
| `%N`      | Unescaped full unit name                                 |
| `%p`      | Prefix name (the part before the `@` in templates)       |
| `%i`      | Instance name (the string between `@` and the extension) |
| `%h`      | Home directory of the running user                       |
| `%m`      | Machine ID of the system                                 |

***

### 4. Essential Command Line Syntax (`systemctl`)

To apply, test, and look up your configuration file syntax, use these terminal inputs: [link](https://www.youtube.com/watch?v=Kzpm-rGAXos)

bash

```
# Force systemd to scan the file systems for changes/new files
sudo systemctl daemon-reload

# Enable a service to load during system boot
sudo systemctl enable name.service

# Immediately execute a service
sudo systemctl start name.service

# Check system state and review recent runtime error logs
sudo systemctl status name.service

# View the actual compiled content and path location of a unit
systemctl cat name.service

# Check all available unit files on your system
systemctl list-unit-files --type=service
```

Use code with caution.

If you are writing a script or troubleshooting a particular setup, let me know:

- What **type of script or application** are you trying to host?

- Do you need it to **restart automatically on a crash**, or run on a **timed interval (like a cron job)**?

- [link](https://oneuptime.com/blog/post/2026-03-02-how-to-understand-systemd-unit-file-syntax-on-ubuntu/view)\
  OneUptime\
  How to Understand systemd Unit File Syntax on Ubuntu\
  Mar 2, 2026 — Files in /etc/systemd/system/ override those in /lib/systemd/system/ . When you install a package on Ubuntu, its service units go ...

- [link](https://www.youtube.com/watch?v=DACT9Dua-Os)\
  YouTube·NetSecProf\
  Using SystemD on Ubuntu Linux Machines\
  Nov 12, 2024 — This video explains how to use systemd on Ubuntu Linux machines by first describing the boot process and how systemd starts. It wi...\
  8:57

- [link](https://www.freedesktop.org/software/systemd/man/systemd.service.html)\
  Freedesktop.org\
  systemd.service - Freedesktop.org\
  One of simple , exec , forking , oneshot , dbus , notify , notify-reload , or idle : \* If set to simple (the default if ExecStart=

Show all

# how to run background daemon in nodejs

To run a Node.js application as a background daemon, you should <mark>use<span> </span><strong>PM2</strong><span> </span>for development and quick deployments, or<span> </span><strong>systemd</strong><span> </span>for robust, production-grade Linux environments</mark>. [link](https://stackoverflow.com/questions/4018154/how-do-i-run-a-node-js-app-as-a-background-service)

Here are the best ways to do it, ranked by reliability and use case.

***

### Method 1: Using PM2 (Recommended for Node.js Developers)

[PM2](https://pm2.keymetrics.io/) is a production process manager built specifically for Node.js. It automatically keeps your app alive, reloads it without downtime, and handles logging out of the box. [link](https://stackoverflow.com/questions/67656641/how-to-run-a-program-in-background)

1. **Install PM2 globally:**\
   bash

<!---->

```
npm install pm2 -g
```

Use code with caution.
2\. **Start your application in the background:**\
bash

```
pm2 start app.js --name "my-daemon-app"
```

Use code with caution.
3\. **Configure it to start automatically on system boot:**\
bash

```
pm2 startup
```

Use code with caution.\
_(Copy and paste the command generated in your terminal output to configure system boot)_
4\. **Save your process list:**\
bash

```
pm2 save
```

Use code with caution.\
[link](https://gist.github.com/bewithdhanu/a392f61d35edf5eef8e27dc5b84753d0)

**Useful PM2 Commands:**

- `pm2 list` – View all running background processes.
- `pm2 logs` – Stream real-time daemon logs.
- `pm2 stop my-daemon-app` – Stop the application.

***

### Method 2: Using Systemd (Best for Linux Production Servers)

For dedicated Linux systems (like Ubuntu or Debian), leveraging the native **systemd** service manager ensures your Node.js application functions as an enterprise-grade daemon. [link](https://www.quora.com/How-do-you-run-a-node-server-in-the-background)

1. **Create a service configuration file:**\
   bash

<!---->

```
sudo nano /etc/systemd/system/node-app.service
```

Use code with caution.
2\. **Paste the following template** (adjusting your paths, user, and file names):\
ini

```
[Unit]
Description=My Node.js Background Daemon
After=network.target

[Service]
Type=simple
User=node-user
WorkingDirectory=/var/www/my-node-app
ExecStart=/usr/bin/node /var/www/my-node-app/app.js
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Use code with caution.
3\. **Reload the systemd manager, start your daemon, and enable boot persistence:**\
bash

```
sudo systemctl daemon-reload
sudo systemctl start node-app
sudo systemctl enable node-app
```

Use code with caution.
4\. **Monitor your application logs:**\
bash

```
sudo journalctl -u node-app -f
```

Use code with caution.\
[link](https://forums.raspberrypi.com/viewtopic.php?t=193107)

***

### Method 3: Built-in Unix Commands (Quick & No Setup)

If you need to quickly spin up a script without installing external tools, you can use built-in terminal utilities. [link](https://stackoverflow.com/questions/4797050/how-to-run-node-js-as-a-background-process-and-never-die)

- **Using `nohup` (No Hang Up):** This allows your script to continue running in the background even if you close the terminal or log out.\
  bash

<!---->

```
nohup node app.js > output.log 2>&1 &
```

Use code with caution.

- **Using `disown`:** If you already executed `node app.js`, press `Ctrl + Z` to pause it, type `bg` to push it to the background, and then disconnect it from your shell:\
  bash

<!---->

```
disown -h %1
```

Use code with caution.\
[link](https://serverfault.com/questions/430699/how-do-you-run-a-nodejs-app-in-the-background-without-it-ending-when-you-log-out)

### Quick Comparison

| Feature                           | PM2      | Systemd  | nohup / & |
| --------------------------------- | -------- | -------- | --------- |
| **Complexity**                    | Very Low | Moderate | Zero      |
| **Auto-restart on crash**         | Yes      | Yes      | No        |
| **Persists after Reboot**         | Yes      | Yes      | No        |
| **Cluster Mode (Load Balancing)** | Yes      | No       | No        |

What **operating system** (e.g., Ubuntu, Amazon Linux, Windows) is your production server running?

- [link](https://stackoverflow.com/questions/4797050/how-to-run-node-js-as-a-background-process-and-never-die)\
  Stack Overflow\
  How to run Node.js as a background process and never die?\
  Jan 25, 2011 — To run Node.js as a background process and never die, you can use a tool to daemonize the process: \* Run with \`forever start app.j...
- [link](https://stackoverflow.com/questions/4018154/how-do-i-run-a-node-js-app-as-a-background-service)\
  Stack Overflow\
  process - How do I run a node.js app as a background service? - Stack Overflow\
  Oct 25, 2010 — \* \*\*Forever\*\* This is a CLI tool that ensures that a given node script runs continuously. \* \*\*Screen\*\* This can be used to detach ...
- [link](https://forums.raspberrypi.com/viewtopic.php?t=193107)\
  Raspberry Pi Forums\
  daemonizing node js - Raspberry Pi Forums\
  Sep 12, 2017 — daemonizing node js. Tue Sep 12, 2017 8:14 pm. Hi, so far I've been running the node app like ... Code: Select all node app.js. an...

Show all

# how to run commands of background deamons in nodejs

To run command-line tasks or keep daemons running in the background using **Node.js**, you have two main approaches depending on what you are trying to accomplish: <mark><strong>spawning background processes from inside a Node.js script</strong>, or<span> </span><strong>running the Node.js application itself as a background daemon</strong></mark>. [link](https://stackoverflow.com/questions/4797050/how-to-run-node-js-as-a-background-process-and-never-die)

***

### Method 1: Running Background Processes _From Inside_ Node.js

If you want your Node.js application to trigger a command, detach from it, and let it run independently in the background (even if the main Node app crashes or exits), use the native `child_process` module with the **`detached: true`** option. [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)

javascript

```
const { spawn } = require('child_process');
const fs = require('fs');

// Open log files to redirect stdout/stderr so the child process doesn't hold open the parent's terminal strings
const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./err.log', 'a');

// Spawn the background daemon command
const child = spawn('node', ['daemon-script.js'], {
  detached: true,             // Makes the child the leader of a new process group
  stdio: [ 'ignore', out, err ] // Detaches parent stdio from the child
});

// Unreference the child process so the parent event loop can exit independently
child.unref();

console.log(`Background daemon started with PID: ${child.pid}`);
```

Use code with caution.

- **`detached: true`**: Tells the OS to separate the child process into a new group, making it resilient to the parent dying. [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)
- **`stdio: ['ignore', out, err]`**: Completely disconnects the standard inputs/outputs. If you skip this, the parent process terminal will stay attached, preventing a clean background handoff. [link](https://www.quora.com/How-do-you-run-a-node-server-in-the-background)
- **`child.unref()`**: Instructs the parent's event loop to exclude this child from its active reference count, allowing the parent script to exit while the daemon keeps running. [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)

***

### Method 2: Running Your Node.js App _As_ a Background Daemon

If you want to push your entire Node.js server or script into the background so it runs continuously on a server, you should use an ecosystem-standard tool.

#### Option A: PM2 (Recommended Production Tool)

[PM2](https://pm2.keymetrics.io/) is the industry standard for production Node.js applications. It handles backgrounding, automatic crashes-restarts, and logging out-of-the-box. [link](https://stackoverflow.com/questions/39887679/how-to-run-a-node-js-file-as-a-background-process-on-a-windows-server)

1. Install PM2 globally:\
   bash

<!---->

```
npm install pm2 -g
```

Use code with caution.
2\. Start your application as a daemon:\
bash

```
pm2 start app.js --name "my-daemon"
```

Use code with caution.
3\. Manage the background process:\
bash

```
pm2 status          # List running background processes
pm2 logs my-daemon  # View background console output
pm2 stop my-daemon  # Kill the daemon
```

Use code with caution.\
[link](https://stackoverflow.com/questions/39887679/how-to-run-a-node-js-file-as-a-background-process-on-a-windows-server)

#### Option B: Native Linux Systemd (Infrastructure Standard)

For production Linux servers, configuring a `systemd` service ensures your Node application starts automatically when the system boots. [link](https://unix.stackexchange.com/questions/536340/proper-way-to-start-a-background-process)

1. Create a service file at `/etc/systemd/system/node-daemon.service`:\
   ini

<!---->

```
[Unit]
Description=My Node Background Daemon
After=network.target

[Service]
Type=simple
User=nobody
WorkingDirectory=/path/to/your/app
ExecStart=/usr/bin/node server.js
Restart=always

[Install]
WantedBy=multi-user.target
```

Use code with caution.
2\. Reload `systemd` and start the daemon:\
bash

```
sudo systemctl daemon-reload
sudo systemctl start node-daemon
sudo systemctl enable node-daemon # Starts on OS boot
```

Use code with caution.\
[link](https://unix.stackexchange.com/questions/536340/proper-way-to-start-a-background-process)

#### Option C: Quick Shell Commands (`nohup`)

For a quick, dependency-free command-line execution, use Unix's built-in `nohup` combined with the background ampersand (`&`). [link](https://stackoverflow.com/questions/4797050/how-to-run-node-js-as-a-background-process-and-never-die)

bash

```
nohup node app.js > output.log 2>&1 &
```

Use code with caution.

- `nohup`: Ignores the "hangup" signal when you close your terminal.
- `> output.log 2>&1`: Redirects both normal terminal logs and error output to a file.
- `&`: Forces the command to execute immediately in the background. [link](https://gist.github.com/andreasonny83/c35b51c4197d09af1b8c0510c0b1d1ea)

Are you trying to spin up **temporary task workers** from inside your script, or are you trying to keep a **persistent web server** alive in the background?

- [link](https://stackoverflow.com/questions/4797050/how-to-run-node-js-as-a-background-process-and-never-die)\
  Stack Overflow\
  How to run Node.js as a background process and never die?\
  Jan 25, 2011 — To run Node.js as a background process and never die, you can use a tool to daemonize the process: \* Run with \`forever start app.j...
- [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)\
  Stack Overflow\
  NodeJs execute command in background and forget\
  Aug 15, 2014 — To execute a command in the background and forget, you can use \`child\_process.spawn\` with the \`detached\` option: \* \*\*var spawn = r...
- [link](https://unix.stackexchange.com/questions/536340/proper-way-to-start-a-background-process)\
  Unix & Linux Stack Exchange\
  daemon - Proper way to start a background process\
  Aug 19, 2019 — In the following I'm assuming you're using a system using systemd. All you need to do is create a unit file in /etc/systemd/system...

Show all

# how to run commands of background deamons from inside nodejs

To execute commands and communicate with background daemons from inside a Node.js application, you primarily rely on the native **`child_process`** module. The best method depends on whether you want to trigger a short-lived CLI tool that talks to a daemon, stream persistent commands directly into a running daemon's input, or launch a daemonized background process completely detached from your application. [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)

***

### 1. Triggering Commands via `exec` (Best for Short/One-off CLI Actions)

If your daemon has a dedicated CLI tool (like `systemctl`, `docker`, or `redis-cli`), you can use the asynchronous `exec` function to trigger a command, wait for it to finish, and read the buffered output. [link](https://medium.com/@jastiling/execute-command-line-binaries-in-node-js-106f85e3ec31)

javascript

```
import { exec } from 'child_process';

// Example: Checking the status of a background daemon via systemctl
exec('systemctl status my-daemon.service', (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Daemon Error Output: ${stderr}`);
    return;
  }
  console.log(`Daemon Status Details:\n${stdout}`);
});
```

Use code with caution.

### 2. Interacting via `spawn` (Best for Long-running Streams / Passing Input)

If you need to send continuous inputs to an active background process or stream large sets of data, use `spawn`. It provides a `stdin` write stream to pipe commands to the daemon on the fly. [link](https://code-garage.com/en/blog/how-to-run-a-system-command-or-an-external-program-in-nodejs-spawn-exec-child-process)

javascript

```
import { spawn } from 'child_process';

// Example: Spawning an interactive CLI wrapper for a daemon
const daemonCli = spawn('redis-cli');

// Listen to the daemon's responses
daemonCli.stdout.on('data', (data) => {
  console.log(`Daemon response: ${data}`);
});

// Stream commands to the daemon's standard input
daemonCli.stdin.write('SET mykey "Hello From Node"\n');
daemonCli.stdin.write('GET mykey\n');

// Cleanly close the pipe when done
daemonCli.stdin.end();
```

Use code with caution.

### 3. Launching and Detaching a Daemon ("Fire and Forget")

If your goal is to have Node.js launch a process as a completely independent background daemon that continues running even after your primary Node script exits, you must configure `detached: true` and cleanly `unref()` the process from Node's event loop. [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)

javascript

```
import { spawn } from 'child_process';
import fs from 'fs';

// Redirect daemon outputs to a log file so it doesn't tether to Node's terminal
const out = fs.openSync('./daemon.log', 'a');
const err = fs.openSync('./daemon-errors.log', 'a');

const backgroundDaemon = spawn('node', ['myBackgroundService.js'], {
  detached: true,               // Makes it the leader of a new process group
  stdio: [ 'ignore', out, err ] // Detaches standard streams entirely
});

// Instruct the Node event loop to forget about this child process
backgroundDaemon.unref();

console.log(`Daemon spawned background PID: ${backgroundDaemon.pid}`);
```

Use code with caution.

### 💡 Core Best Practices

- **Environment Security:** Avoid passing raw user input strings directly into `exec` to safeguard against shell injection vulnerabilities. If you must use variables, prefer `spawn` with an array of arguments, as it bypasses the shell processor by default.
- **Alternative Approaches (IPC):** If you are building both the Node app and the daemon, relying on CLI execution can be brittle. Consider setting up a local communication channel such as a **Unix Domain Socket** or a lightweight HTTP/REST interface inside the daemon for cleaner program-to-program interactions. [link](https://www.reddit.com/r/node/comments/10gacqk/is%5Fit%5Fpossible%5Fto%5Fhave%5Fa%5Fcli%5Fprogram%5Frunning/)

What **specific background daemon** or system tool are you trying to interact with?

- [link](https://medium.com/@jastiling/execute-command-line-binaries-in-node-js-106f85e3ec31)\
  Medium·James Stiling\
  Executing command line binaries in Node.js | by James Stiling\
  Oct 20, 2016 — Get James Stiling's stories in your inbox. You should use child\_process. spawn when you are looking to process a stream of data (e...
- [link](https://stackoverflow.com/questions/25323703/nodejs-execute-command-in-background-and-forget)\
  Stack Overflow\
  NodeJs execute command in background and forget\
  Aug 15, 2014 — To execute a command in the background and forget, you can use \`child\_process.spawn\` with the \`detached\` option: \* \*\*var spawn = r...
- [link](https://www.reddit.com/r/node/comments/10gacqk/is%5Fit%5Fpossible%5Fto%5Fhave%5Fa%5Fcli%5Fprogram%5Frunning/)\
  Reddit·r/node\
  Is it possible to have a CLI program running within a daemon ...\
  Jan 19, 2023 — Generally daemomized services run in the background, so there's no way to interact with them directly using a CLI that's part of t...

Show all

# compare nodejs path resolve and join

In Node.js, **`path.join()`** and **`path.resolve()`** are both used to combine path segments, but they treat absolute identifiers and the file system root completely differently. [link](https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join)

The core difference is that **`path.join()` simply concatenates segments** together into a normalized path, whereas **`path.resolve()` acts like a sequence of `cd` commands** in a terminal, always processing from right to left until it outputs a fully resolved **absolute path**. [link](https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join)

### Direct Comparison

| Feature              | `path.join([...paths])`                                              | `path.resolve([...paths])`                                                         |
| -------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Primary Goal**     | Glues path segments together safely.                                 | Computes an absolute destination path.                                             |
| **Always Absolute?** | ❌ **No.** Can return relative or absolute paths depending on input. | **Yes.** Always outputs a complete absolute path.                                  |
| **Handling `/`**     | Treats a leading `/` as just another string segment to concatenate.  | Treats a leading `/` as the **root directory**, wiping out everything to its left. |
| **No Arguments**     | Returns `'.'`, representing the current working directory.           | Returns the **absolute path** of the current working directory.                    |

***

### Code Examples

#### 1. Combining Basic Segments

When no absolute identifiers (`/`) are present, `join` just sticks them together. `resolve` sticks them together but links them directly back to your current working directory (CWD). [link](https://www.reddit.com/r/node/comments/1adklxy/any%5Freason%5Fto%5Fuse%5Fpathjoin%5Fover%5Fpathresolve/)

javascript

```
// Assuming your current working directory is /Users/project
path.join('src', 'components', 'nav.js');
// Returns: 'src/components/nav.js' (Relative path)

path.resolve('src', 'components', 'nav.js');
// Returns: '/Users/project/src/components/nav.js' (Absolute path)
```

Use code with caution.

#### 2. Encountering a Leading Slash (`/`)

This is where developers usually run into bugs. If `path.resolve()` encounters an absolute segment (like `/data`), it assumes you just navigated back to the root directory and ignores everything before it. [link](https://www.hendriklammers.com/notes/difference-between-path-resolve-and-path-join)

javascript

```
path.join('/a', '/b', 'c');
// Returns: '/a/b/c' (Appends everything smoothly)

path.resolve('/a', '/b', 'c');
// Returns: '/b/c' (Sees '/b', forgets about '/a', and builds forward)
```

Use code with caution.

#### 3. Using `__dirname`

A very common pattern in Node.js is combining a path with `__dirname` (the absolute directory of the current file). In this specific context, both functions often yield the same result, but they get there differently. [link](https://stackoverflow.com/questions/39110801/path-join-vs-path-resolve-with-dirname)

javascript

```
// Assuming __dirname is /Users/project/src
path.join(__dirname, 'images');
// Returns: '/Users/project/src/images'

path.resolve(__dirname, 'images');
// Returns: '/Users/project/src/images'
```

Use code with caution.

### When should you use which?

- Use **`path.join()`** when you want to piece together parts of a URL, relative file links, or structural folders without tying them strictly to the machine's absolute root file system. [link](https://oneuptime.com/blog/post/2026-01-22-nodejs-path-module/view)
- Use **`path.resolve()`** when you are handling file system operations (like `fs.readFile`) where Node.js requires an absolute path to find a file reliably regardless of where the app script was executed. [link](https://mirzaleka.medium.com/working-with-paths-in-node-js-447cd0f2ec56)

Would you like to see how these functions handle relative navigation segments like **`..` or `.`**?

- [link](https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join)\
  Stack Overflow\
  What's the difference between path.resolve and path.join?\
  Jan 27, 2016 — const path = require('path'); The path. join and path. resolve are two different methods of the path module. Both these methods ac...
- [link](https://www.reddit.com/r/node/comments/1adklxy/any%5Freason%5Fto%5Fuse%5Fpathjoin%5Fover%5Fpathresolve/)\
  Reddit\
  Any reason to use path.join() over path.resolve()?\
  Jan 29, 2024 — \`path.join()\` also normalizes each part, such as removing duplicate separators. Here's some more information about \`path.join()\` a...
- [link](https://hackernoon.com/whats-the-difference-between-pathjoin-and-pathresolve)\
  HackerNoon\
  What's the Difference Between path.join() and path.resolve()?\
  Apr 4, 2023 — The key difference path. join() simply concatenates segments and its return may or may not result in an absolute path. path. resol...

Show all

# nodejs childprocess spawn

In Node.js, the <mark><strong><code dir="ltr">child\_process.spawn()</code><span> </span>method launches an external command in a new process asynchronously</strong><span> </span>without blocking the main event loop</mark>. Unlike `exec()`, which buffers the entire output in memory before returning it, `spawn()` streams data via `stdout` and `stderr`. This makes it highly efficient and the preferred choice for long-running processes or commands that generate a large amount of data. [link](https://nodejs.org/api/child%5Fprocess.html)

### Basic Syntax

javascript

```
const { spawn } = require('child_process');
const child = spawn(command, [args], { options });
```

Use code with caution.

- **`command`**: The executable or system command to run (e.g., `'ls'`, `'python'`, `'npm'`).
- **`args`**: An array of string arguments passed to the command. Do not include spaces within an argument; instead, pass each flag/value as a separate array element.
- **`options`**: An optional configuration object (e.g., setting the working directory `cwd` or environment variables `env`). [link](https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live)

***

### Step-by-Step Code Example

The following example runs a command (e.g., `ls -la` on macOS/Linux or a directory listing on Windows) and reads the output in real time. [link](https://www.w3schools.com/nodejs/nodejs%5Fchild%5Fprocess.asp)

javascript

```
const { spawn } = require('child_process');

// 1. Cross-platform command handling
const isWin = process.platform === 'win32';
const command = isWin ? 'cmd.exe' : 'ls';
const args = isWin ? ['/c', 'dir'] : ['-la'];

// 2. Spawn the process
const child = spawn(command, args);

// 3. Listen to standard output stream (stdout)
child.stdout.on('data', (data) => {
  console.log(`stdout:\n${data}`);
});

// 4. Listen to standard error stream (stderr)
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// 5. Handle execution errors (e.g., command not found)
child.on('error', (error) => {
  console.error(`Failed to start child process: ${error.message}`);
});

// 6. Handle process exit / close
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
```

Use code with caution.

***

### Common Use Cases & Useful Options

#### 1. Inheriting Terminal Output (`stdio: 'inherit'`)

If you don't need to read the output programmatically but just want the child process to print its logs directly into your main terminal window, pass `{ stdio: 'inherit' }`. [link](https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live)

javascript

```
const child = spawn('npm', ['install'], { stdio: 'inherit' });
```

Use code with caution.

#### 2. Changing the Working Directory (`cwd`)

You can force the external command to run inside a specific folder by setting the `cwd` option: [link](https://bun.com/reference/node/child%5Fprocess/spawn)

javascript

```
const child = spawn('git', ['status'], { cwd: './my-project-folder' });
```

Use code with caution.

#### 3. Running a Shell Command (`shell: true`)

By default, `spawn()` executes binaries directly and does not spin up a terminal shell. If you want to use shell-specific features like piping (`|`) or environment variables directly inside the string command, enable the `shell` option: [link](https://nodejs.org/api/child%5Fprocess.html)

javascript

```
// Warning: Ensure arguments are sanitized to prevent command injection
const child = spawn('echo "Hello World" | grep Hello', [], { shell: true });
```

Use code with caution.

For more advanced configurations like setting custom environment variables or setting up Inter-Process Communication channels, refer to the [Node.js Child Process API Reference](https://nodejs.org/api/child%5Fprocess.html).

What **specific command** or script are you trying to execute with `spawn()`?

- [link](https://nodejs.org/api/child%5Fprocess.html)\
  Node.js\
  Child process | Node.js v26.8.1 Documentation\
  The child\_process.spawn() method spawns the child process asynchronously, without blocking the Node.js event loop. The child\_proce...
- [link](https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live)\
  Stack Overflow\
  Node.js spawn child process and get terminal output live\
  Jan 15, 2013 — Here's an example of using the \`spawn\` method: \* \`require("child\_process").spawn('bash', \['./script.sh'], { cwd: process.cwd(), de...
- [link](https://medium.com/the-guild/getting-to-know-nodes-child-process-module-8ed63038f3fa)\
  Medium\
  Getting to know Node's child\_process module | by Eytan Manor\
  Sep 27, 2018 — process , and second, the child process is derived from the main process, which means that both can communicate - the main process...

Show all

## all methods of spawn return

In Node.js, `child_process.spawn()` and its related synchronous variant `spawnSync()` return different objects, while other core module methods like `exec` or `fork` return similar but slightly modified instances of a child process.

***

### 1. `spawn()` Returns a `ChildProcess` Instance

When you call the standard asynchronous **`spawn()`**, it immediately returns an instance of a **`ChildProcess`** object. This object acts as an **`EventEmitter`** and provides access to stream pipes and process metadata.

The primary properties and methods available on the returned `ChildProcess` object include:

- **Streams (Readable/Writable)**
  - **`child.stdout`**: A `ReadableStream` containing the standard output of the process (unless `stdio` is configured otherwise).
  - **`child.stderr`**: A `ReadableStream` containing the standard error output of the process.
  - **`child.stdin`**: A `WritableStream` that allows you to write input directly into the running process.
- **Metadata & Control**
  - **`child.pid`**: The unique Process ID (Integer) assigned by the operating system.
  - **`child.exitCode`**: The process exit code (returns `null` if the process is still running).
  - **`child.signalCode`**: The signal received by the process (e.g., `'SIGTERM'`) if it was terminated externally.
  - **`child.kill([signal])`**: A method used to send a signal to the process (defaults to `'SIGTERM'`) to close it.

***

### 2. `spawnSync()` Returns an `Object`

If you use the synchronous version **`spawnSync()`**, it blocks the Node.js event loop and waits for the process to fully exit before returning. Because it waits, it returns a plain JavaScript **`Object`** containing the results of the execution instead of streams:

javascript

```
const { spawnSync } = require('child_process');
const result = spawnSync('ls', ['-la']);
```

Use code with caution.

The returned object contains the following properties:

- **`result.pid`**: The Process ID of the child process.
- **`result.output`**: An array of results from the process outputs (`[stdin, stdout, stderr]`).
- **`result.stdout`**: A `Buffer` or `String` containing the full standard output.
- **`result.stderr`**: A `Buffer` or `String` containing the full standard error output.
- **`result.status`**: The exit code of the process (Integer), or `null` if the process crashed.
- **`result.signal`**: The string signal that terminated the process, if applicable.
- **`result.error`**: An `Error` object if the process could not be spawned or timed out.

***

### Summary Comparison

| Method            | Return Type                 | Output Access                    | Non-blocking?            |
| ----------------- | --------------------------- | -------------------------------- | ------------------------ |
| **`spawn()`**     | **`ChildProcess`** instance | Live streams (`stdout`/`stderr`) | **Yes** (Asynchronous)   |
| **`spawnSync()`** | **`Object`**                | Static data buffers or strings   | **No** (Blocks the loop) |

Are you trying to capture the **final output as a single string**, or do you need to **interact with the streams in real-time**? Let me know, and I can show you how to parse the exact return object you choose.

## all options of spawn

The `options` object is the third argument passed to **`child_process.spawn(command, [args], [options])`**. It configures how the operating system executes the subprocess, its environment, security boundaries, and I/O streams. [link](https://bun.com/reference/node/child%5Fprocess/spawn)

### All Options for `child_process.spawn()`

| Option                         | Type          | Default            | Description                                                                                                                                                     |
| ------------------------------ | ------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`cwd`**                      | `string`      | `URL`              | `process.cwd()`                                                                                                                                                 | **Current working directory** where the child process should be executed.                                                                                                  |
| **`env`**                      | `Object`      | `process.env`      | **Environment key-value pairs** passed down to the child process.                                                                                               |
| **`argv0`**                    | `string`      | _Inherits command_ | Explicitly sets the value of `argv[0]` sent to the child process.                                                                                               |
| **`stdio`**                    | `string`      | `Array`            | `'pipe'`                                                                                                                                                        | **Configures the standard I/O streams**. Accepts shortcuts like `'pipe'`, `'ignore'`, `'inherit'`, or an array mapping file descriptors (e.g., `[stdin, stdout, stderr]`). |
| **`detached`**                 | `boolean`     | `false`            | Prepares the child process to run **independently of its parent**. Allows the process to continue running even if the parent node script crashes or terminates. |
| **`uid`**                      | `number`      | _Inherits parent_  | Sets the **user identity (UID)** of the process (POSIX systems only).                                                                                           |
| **`gid`**                      | `number`      | _Inherits parent_  | Sets the **group identity (GID)** of the process (POSIX systems only).                                                                                          |
| **`shell`**                    | `boolean`     | `string`           | `false`                                                                                                                                                         | If `true`, runs the command **inside a system shell** (`/bin/sh` on Unix, `cmd.exe` on Windows). You can also pass a string path to a custom shell (like `'bash'`).        |
| **`signal`**                   | `AbortSignal` | `undefined`        | Allows you to pass an **AbortSignal** to cleanly abort/kill the child process using an `AbortController`.                                                       |
| **`serialization`**            | `string`      | `'json'`           | Defines the method used for passing messages between processes (only applicable if an IPC channel is open). Can be `'json'` or `'advanced'`.                    |
| **`windowsHide`**              | `boolean`     | `false`            | On Windows systems, setting this to `true` **hides the console window** that would normally pop up.                                                             |
| **`windowsVerbatimArguments`** | `boolean`     | `false`            | On Windows, prevents Node from automatically quoting or escaping command-line arguments.                                                                        |

***

### Additional Options Specific to `spawnSync()`

If you use the synchronous variation (**`spawnSync()`**), the block contains a few extra threshold options because it expects a definitive finish: [link](https://nodejs.org/api/child%5Fprocess.html)

- **`timeout`** (`number`): The maximum amount of time (in milliseconds) the process is allowed to run before being forcefully killed. Defaults to `undefined`.
- **`killSignal`** (`string` | `number`): The signal string (like `'SIGTERM'` or `'SIGKILL'`) used if the process times out or is killed. Defaults to `'SIGTERM'`.
- **`maxBuffer`** (`number`): The maximum amount of data (in bytes) allowed on `stdout` or `stderr`. If exceeded, the child process is terminated. Defaults to `1024 * 1024` (1MB). [link](https://nodejs.org/api/child%5Fprocess.html)

***

### Code Blueprint Using Advanced Options

javascript

```
const { spawn } = require('child_process');
const controller = new AbortController();

const child = spawn('node', ['script.js'], {
  cwd: '/var/www/app',               // Run inside this specific directory
  env: { ...process.env, PORT: 8080 },// Pass existing env vars plus a custom PORT
  stdio: 'inherit',                  // Share the parent terminal's I/O directly
  shell: true,                       // Execute via shell interpreter
  detached: true,                    // Let it run independently
  windowsHide: true,                 // Keep terminal window invisible on Windows
  signal: controller.signal          // Hook up kill switch
});

// To abort the process programmatically later:
// controller.abort();
```

Use code with caution.

For edge-case options like complex `stdio` array pipelines or custom IPC serialization, consult the official [Node.js Child Process Documentation](https://nodejs.org/api/child%5Fprocess.html).

Are you trying to configure a **specific scenario**, like running a process **completely in the background (detached)** or passing **custom environment variables**?

- [link](https://nodejs.org/api/child%5Fprocess.html)\
  Node.js\
  Child process | Node.js v26.8.1 Documentation\
  child\_process. exec(command\[, options]\[, callback]) # \* command The command to run, with space-separated arguments. \* options cwd ...
- [link](https://nodejs.org/download/release/v5.7.0/docs/api/child%5Fprocess.html)\
  Node.js\
  Child Process Node.js v5.7.0 Manual & Documentation\
  child\_process. spawn(command\[, args]\[, options])# \* command The command to run. \* args List of string arguments. \* options cwd Cur...
- [link](https://bun.com/reference/node/child%5Fprocess/spawn)\
  Bun\
  Node child\_process.spawn function | API Reference - Bun\
  The child\_process.spawn() method spawns a new process using the given command , with command-line arguments in args . If omitted, ...

Show all

## how to listen output

To listen to the output of a spawned process, you need to read from its standard output (**`stdout`**) and standard error (**`stderr`**) streams. By default, `spawn()` returns these as readable streams emitting chunks of raw binary data (`Buffer` objects).

Here are the three primary ways to listen to output depending on your goal.

***

### 1. Direct Stream Processing (Best for Data/Logs)

This is the standard approach to stream text logs out in real time. Because the incoming chunks are `Buffer` objects, you must call `.toString()` or use `.setEncoding('utf8')` to read them as plain text.

javascript

```
const { spawn } = require('child_process');
const child = spawn('ls', ['-la']); // Replace with your command

// Set string encoding so chunks arrive as strings instead of Buffers
child.stdout.setEncoding('utf8');
child.stderr.setEncoding('utf8');

// Listen to standard output
child.stdout.on('data', (chunk) => {
  console.log(`Received chunk:\n${chunk}`);
});

// Listen to errors or warning output
child.stderr.on('data', (errorChunk) => {
  console.error(`Received error chunk: ${errorChunk}`);
});
```

Use code with caution.

### 2. Line-by-Line Parsing (Best for CLI Tools)

Raw streams break data up based on network/buffer timing, meaning a single log line might be cut in half across two chunks. If you want to safely listen to output line-by-line, combine `spawn` with Node's built-in **`readline`** module.

javascript

```
const { spawn } = require('child_process');
const readline = require('readline');

const child = spawn('ping', ['8.8.8.8']); // A long running command example

// Wrap stdout in a readline interface
const rl = readline.createInterface({
  input: child.stdout,
  terminal: false
});

// Triggers exactly once per line break (\n)
rl.on('line', (line) => {
  console.log(`Line from process: ${line}`);
});
```

Use code with caution.

### 3. Buffering Everything Into One Variable (Best for Short Scripts)

If you do not care about real-time streaming and just want to catch the aggregate response once the process completes, push the chunks into an array and join them at the end.

javascript

```
const { spawn } = require('child_process');
const child = spawn('node', ['-v']);

let outputData = '';
let errorData = '';

child.stdout.on('data', (chunk) => outputData += chunk);
child.stderr.on('data', (chunk) => errorData += chunk);

child.on('close', (code) => {
  if (code === 0) {
    console.log(`Final Complete Output:\n${outputData.trim()}`);
  } else {
    console.error(`Process failed with code ${code}. Error: ${errorData}`);
  }
});
```

Use code with caution.

***

### Troubleshooting Checklist

- **My output is missing?** Ensure you haven't set `{ stdio: 'inherit' }` or `{ stdio: 'ignore' }` in your options object. Stream piping requires `stdio` to be left as default or explicitly set to `'pipe'`.
- **Output looks like random numbers?** If you see `[Buffer 61 62 63]`, you forgot to stringify it. Either append it to an empty string (`data + ''`), use `data.toString()`, or run `child.stdout.setEncoding('utf8')` first.

Would you like to see how to **pass inputs (write data)** back into the child process while listening to it, or are you trying to parse output from a specific language ecosystem like a **Python** or **Shell script**?

# pm2 cli commands

Here is a comprehensive reference guide for the most common and essential **PM2 CLI commands**. You can substitute `<app_ref>` with the application's **ID** (e.g., `0`), its assigned **name** (e.g., `"api-server"`), or use `all` to target every managed process. [link](https://pm2.io/docs/runtime/reference/pm2-cli/)

### 🚀 Starting Applications

- **`pm2 start app.js`**: Starts an application and runs it as a background daemon.
- **`pm2 start app.js --name "my-app"`**: Starts the application and gives it a custom, recognizable name.
- **`pm2 start "npm run start" --name "my-app"`**: Starts a generic package script or any non-JS binary.
- **`pm2 start app.js -i max`**: Starts the application in **Cluster Mode**, automatically scaling across all available CPU cores for maximum performance.
- **`pm2 start app.js --watch`**: Starts the application and watches the directory for file changes, triggering an automatic restart (useful for development).
- **`pm2 start app.js --no-autorestart`**: Runs the process once without letting PM2 automatically revive it if it crashes. [link](https://pm2.keymetrics.io/docs/usage/quick-start/)

### 🔄 Managing Application Lifecycle

- **`pm2 stop <app_ref>`**: Stops a specific running process.
- **`pm2 restart <app_ref>`**: Hard restarts a process by killing it entirely and booting it back up (causes minor downtime).
- **`pm2 reload <app_ref>`**: Reloads the application with **zero-downtime** by rolling through instances one by one (ideal for production HTTP/HTTPS servers).
- **`pm2 delete <app_ref>`**: Completely stops a process and purges it from the PM2 registry list. [link](https://pm2.io/docs/runtime/reference/pm2-cli/)

### 📊 Monitoring & Status Checking

- **`pm2 list`** (or **`pm2 ls`**, **`pm2 status`**): Displays a tabular overview of all managed apps, including their ID, status, CPU, memory usage, and restart counts.
- **`pm2 show <app_ref>`** (or **`pm2 describe <id>`**): Shows extensive metadata for a specific process, such as path locations, uptime, and node arguments.
- **`pm2 monit`**: Launches a rich terminal-based real-time dashboard displaying system resource metrics and logs. [link](https://pm2.io/docs/runtime/reference/pm2-cli/)

### 🪵 Log Management

- **`pm2 logs`**: Streams live logs combined from all active applications.
- **`pm2 logs <app_ref>`**: Streams logs specifically for a designated application.
- **`pm2 logs --lines 50`**: View the last 50 lines of logs instead of streaming live data.
- **`pm2 flush`**: Clears out all current historical log files stored on disk. [link](https://pm2.io/docs/runtime/reference/pm2-cli/)

### 💾 Persistence & Server Reboots

- **`pm2 startup`**: Detects your operating system's init system (like `systemd`) and generates a configuration script to automatically start PM2 whenever the server reboots.
- **`pm2 save`**: Snapshots and saves your current list of active apps so they can be resurrected back to this state.
- **`pm2 resurrect`**: Manually re-spawns your last saved list of processes. [link](https://pm2.io/docs/runtime/reference/pm2-cli/)

For additional flags, configuration rules, and advanced usage parameters, look over the official [PM2 CLI Reference Guide](https://pm2.io/docs/runtime/reference/pm2-cli/).

Are you trying to **set up a specific framework** (like Express, Next.js, or Nuxt) with PM2, or do you need help **generating an ecosystem configuration file**?

- [link](https://pm2.io/docs/runtime/reference/pm2-cli/)\
  PM2.io\
  CLI | Reference | PM2 Documentation\
  Table\_title: pm2 Commands Table\_content: | Command name | Description | | --- | --- | | start \[options] | start and daemonize an a...
- [link](https://pm2.keymetrics.io/docs/usage/quick-start/)\
  PM2\
  PM2 - Quick Start\
  Here are some things you can do with PM2: \* \*\*Process management\*\* \* Restart strategies \* Logs \* Persistent application \* Configur...
- [link](https://pm2.keymetrics.io/docs/usage/process-management/)\
  PM2\
  Process Management - PM2\
  With PM2 you can easily start/restart/reload/stop/list applications in background. Start To start an application: $ pm2 start api.

Show all

## how to autostart on system boot

To configure PM2 to automatically restore your active processes whenever your server reboots, follow these three steps in your terminal:

### 1. Save Your Current Process List

First, ensure your target applications are actively running in PM2 exactly how you want them. Then, capture a snapshot of this active state:

bash

```
pm2 save
```

Use code with caution.

_This creates a configuration snapshot file at `~/.pm2/dump.pm2`._

### 2. Generate the OS Startup Script

Run the startup command to let PM2 analyze your operating system's initialization system (like `systemd`, `upstart`, or `launchd`):

bash

```
pm2 startup
```

Use code with caution.

### 3. Execute the Generated Command

The output of the previous step will generate a specific, system-customized command string that begins with **`sudo env PATH...`**.

**Copy and paste that exact command into your terminal** and press `Enter`. It will look similar to this example:

bash

```
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u sammy --hp /home/sammy
```

Use code with caution.

Once executed, PM2 is fully hooked into your server's boot cycle. The next time your machine reboots, it will automatically invoke `pm2 resurrect` and spin your apps right back up.

***

### 🛠️ Common Management Commands

- **Disable autostart:** If you ever need to remove PM2 from the system boot configuration, run:\
  bash

<!---->

```
pm2 unstartup
```

Use code with caution.

- **Update the snapshot:** If you deploy a new application, change an application's name, or alter environment configurations, you must update the snapshot file by running **`pm2 save`** again.

Are you setting this up on a standard **Linux server (like Ubuntu)**, a **Windows Server**, or inside a containerized environment like **Docker**?

## can it run ts files

⚡ <mark><strong>Yes, PM2 can run TypeScript (<code dir="ltr">.ts</code>) files directly.</strong></mark>

To do this, PM2 relies on an official module called **`ts-node`** to compile your TypeScript code on the fly in the background.

Here are the two ways to set it up:

### Method 1: The Quick CLI Way

You can install `ts-node` globally or locally in your project, and PM2 will automatically recognize it.

bash

```
# 1. Install ts-node (and typescript) in your project
npm install -D typescript ts-node

# 2. Start your TS file directly
pm2 start server.ts --name "my-ts-app"
```

Use code with caution.

### Method 2: The Production Way (Ecosystem File)

For production environments, it is highly recommended to use an **`ecosystem.config.js`** file. This lets you explicitly tell PM2 to use `ts-node` as the interpreter.

1. Generate a configuration file:\
   bash

<!---->

```
pm2 init
```

Use code with caution.
2\. Open the generated `ecosystem.config.js` file and configure it like this:\
javascript

```
module.exports = {
  apps: [{
    name: "my-ts-app",
    script: "./src/server.ts",
    interpreter: "node",
    interpreter_args: "--import ts-node/register" // For modern Node.js / ESM
    // OR for older Node/CommonJS setups:
    // interpreter: "ts-node"
  }]
};
```

Use code with caution.
3\. Start the application using the configuration file:\
bash

```
pm2 start ecosystem.config.js
```

Use code with caution.

***

### ⚠️ Production Warning: Performance Impact

While running `.ts` files directly is incredibly convenient for development, testing, or low-traffic staging servers, **it is not recommended for high-traffic production environments**.

- **Why?** Compiling TypeScript on the fly using `ts-node` consumes significant CPU resources and memory every time a process starts or restarts.

- **The Best Practice:** Pre-compile your TypeScript code to standard JavaScript using the `tsc` compiler, and point PM2 to your compiled build folder:\
  bash

<!---->

```
# Compile TS to JS
npm run build

# Run the optimized JavaScript output
pm2 start dist/server.js --name "prod-app"
```

Use code with caution.

Would you like help setting up a **build script** in your `package.json` to handle compilation, or do you need a specific **tsconfig configuration** for your project?

# how to find replace a string in shell

To find and replace a string in a shell environment, you can use **`sed`** for text files or **native parameter expansion** if you are modifying a variable within a script. [link](https://stackoverflow.com/questions/2871181/replacing-some-characters-in-a-string-with-another-character)

Here is how to do both, depending on your goal.

***

### 1. Replacing Strings Inside a Text File (Using `sed`)

The `sed` (stream editor) command is the standard and most powerful tool for finding and replacing text in files. [link](https://askubuntu.com/questions/20414/find-and-replace-text-within-a-file-using-commands)

#### Find and Replace Globally (Modifies the file directly)

To replace **every occurrence** of a string across an entire file and save the changes in place, use the `-i` flag: [link](https://stackoverflow.com/questions/8486967/replace-a-string-in-file-using-shell-script)

bash

```
sed -i 's/old_string/new_string/g' filename.txt
```

Use code with caution.

- `s` stands for substitute.
- `g` stands for global (replaces _all_ occurrences on a line, not just the first one).
- `-i` instructs `sed` to edit the file **in-place**. [link](https://www.youtube.com/watch?v=NtiEiWSfwsc\&t=148)

> ⚠️ **macOS Note:** On macOS (BSD `sed`), you must provide an empty string after `-i` like this: `sed -i '' 's/old_string/new_string/g' filename.txt`. [link](https://stackoverflow.com/questions/525592/find-and-replace-inside-a-text-file-from-a-bash-command)

#### Preview Changes Without Modifying the File

Omit the `-i` flag to print the modified text directly to your terminal screen: [link](https://www.youtube.com/watch?v=NtiEiWSfwsc\&t=148)

bash

```
sed 's/old_string/new_string/g' filename.txt
```

Use code with caution.

#### Save Output to a New File

bash

```
sed 's/old_string/new_string/g' input.txt > output.txt
```

Use code with caution.

***

### 2. Replacing Strings Inside a Shell Variable (No External Tools)

If you are working with a variable inside a Bash, Zsh, or Ksh script, you do not need `sed`. You can use **parameter expansion**, which is significantly faster because it runs natively in the shell memory. [link](https://unix.stackexchange.com/questions/97582/how-to-find-and-replace-string-without-use-command-sed)

bash

```
# Define your original variable
text="I love apples and apples."

# 1. Replace ONLY the FIRST occurrence (Single Slash)
echo "${text/apples/oranges}"
# Output: "I love oranges and apples."

# 2. Replace ALL occurrences (Double Slash)
echo "${text//apples/oranges}"
# Output: "I love oranges and oranges."
```

Use code with caution.

***

### Quick Comparison Table

| Use Case                         | Method / Command                        | Example                                    |
| -------------------------------- | --------------------------------------- | ------------------------------------------ |
| **Files** (Modify permanently)   | `sed -i 's/find/replace/g' file`        | `sed -i 's/cat/dog/g' pets.txt`            |
| **Files** (Save to a new file)   | `sed 's/find/replace/g' file > newfile` | `sed 's/cat/dog/g' pets.txt > updated.txt` |
| **Variables** (First match only) | `${var/find/replace}`                   | `echo "${my_var/cat/dog}"`                 |
| **Variables** (All matches)      | `${var//find/replace}`                  | `echo "${my_var//cat/dog}"`                |

Are you trying to update a **single file**, or do you need to loop through and find-and-replace text across **multiple files in a directory**?

- [link](https://stackoverflow.com/questions/13210880/replace-one-substring-for-another-string-in-shell-script)\
  Stack Overflow\
  bash - Replace one substring for another string in shell script\
  Nov 3, 2012 — Sorted by: 2400 To replace the first occurrence of a pattern with a given string, use ${parameter/pattern/string} : #!/bin/bash fi...
- [link](https://unix.stackexchange.com/questions/97582/how-to-find-and-replace-string-without-use-command-sed)\
  Unix & Linux Stack Exchange\
  How to find and replace string without use command Sed?\
  Oct 25, 2013 — There are several ways to find and replace a string without using the sed command: \* \*\*Substitution capabilities of some shells\*\* ...
- [link](https://stackoverflow.com/questions/8486967/replace-a-string-in-file-using-shell-script)\
  Stack Overflow\
  replace a string in file using shell script\
  Dec 13, 2011 — To replace a string in a file using a shell script, you can use the sed command: \* \*\*sed -i '' "s|$searchString|$replaceString|g" ...

Show all

## i want to get the absolute path of current script, find replace it, open a file, find replace a string with the modified path (wo writing to that file), and copy it to systemd

To achieve this, you can combine native bash variables, string replacement, and `sed` stream routing.

Here is the exact **Bash script** to get the absolute path of the current script, modify it, use it to replace a string in a template file, and pipe the final output directly into a `systemd` unit file without modifying the source file.

bash

```
#!/bin/bash

# 1. Get the absolute path of the current script
CURRENT_SCRIPT_PATH="$(realpath "$0")"

# 2. Find and replace a string within that path
# Example: replacing "/home/user/old_dir" with "/var/www/new_dir"
MODIFIED_PATH="${CURRENT_SCRIPT_PATH/old_string/new_string}"

# 3. Define your source template file and the systemd destination path
TEMPLATE_FILE="/path/to/your/service.template"
SYSTEMD_DEST="/etc/systemd/system/my_custom_service.service"

# 4. Find and replace a placeholder in the template file with the modified path,
# and write it directly to systemd (requires sudo for the systemd directory)
# Note: Using '|' as a delimiter in sed instead of '/' because paths contain slashes.
sed "s|YOUR_PLACEHOLDER_STRING|$MODIFIED_PATH|g" "$TEMPLATE_FILE" | sudo tee "$SYSTEMD_DEST" > /dev/null

# 5. Reload systemd to recognize the new service file
sudo systemctl daemon-reload

echo "Service successfully created at: $SYSTEMD_DEST"
```

Use code with caution.

### How It Works Under the Hood:

- **`realpath "$0"`**: `$0` grabs the path used to run the script. Wrapping it in `realpath` expands any relative paths or symlinks into a guaranteed **absolute path**.
- **`${CURRENT_SCRIPT_PATH/.../...}`**: This uses Bash's native parameter expansion to alter the path entirely in memory.
- **`sed "s|...|...|g"`**:
  - By avoiding the `-i` flag, `sed` leaves your source template completely **unmodified**.
  - We use standard double quotes (`"`) so Bash can inject the `$MODIFIED_PATH` variable into the command.
  - We swapped the usual `s/find/replace/` syntax for `s|find|replace|`. This allows your absolute path to contain regular forward slashes (`/`) without breaking the command.
- **`| sudo tee ... > /dev/null`**: This pipes the processed text straight into the protected `/etc/systemd/system/` folder. It behaves like an admin-privileged `cat > file` without needing to open an editor or alter the source template.

Would you like me to help you **write the systemd service template** itself, or do you need help **setting the correct permissions and starting** the service?

## my find and replace contain slashes

When both your **find target** and your **replace target** contain forward slashes (`/`), the easiest solution is to change the **delimiter** in your `sed` command and your Bash variable replacement.

Neither `sed` nor Bash forces you to use a specific character as a separator; you can use almost any symbol, such as a pipe (`|`), a colon (`:`), or an underscore (`_`).

Here is how to handle slashes in both parts of your script:

### 1. Handling Slashes in the `sed` Command

Instead of using `s/find/replace/g`, use `s|find|replace|g`. Because you are passing regular variables that contain slashes, the pipe symbol prevents `sed` from getting confused.

bash

```
# Example: Replacing a placeholder path with a new absolute path
PLACEHOLDER="/old/path/to/replace"
MODIFIED_PATH="/var/new/path/to/use"

# Use '|' or ':' as the delimiter
sed "s|${PLACEHOLDER}|${MODIFIED_PATH}|g" "$TEMPLATE_FILE" | sudo tee "$SYSTEMD_DEST" > /dev/null
```

Use code with caution.

### 2. Handling Slashes in Bash Variable Expansion

If you need to find and replace a string _inside_ the script's path variable using native Bash, you cannot change the delimiter symbol (it must be `/`). Instead, you have to **escape** the forward slashes in your search and replacement terms by adding a backslash (`\`) right before them.

bash

```
# Assume the script path is: /home/user/my_project/script.sh
CURRENT_SCRIPT_PATH="$(realpath "$0")"

# Goal: Replace "/my_project/" with "/deployed_app/"
# You must escape the slashes like this: \/my_project\/  and  \/deployed_app\/

MODIFIED_PATH="${CURRENT_SCRIPT_PATH/\/my_project\//\/deployed_app\/}"
```

Use code with caution.

### The Complete Updated Script

Here is the robust, copy-pasteable script using the pipe delimiter to completely avoid slash conflicts:

bash

```
#!/bin/bash

# 1. Get the absolute path
CURRENT_SCRIPT_PATH="$(realpath "$0")"

# 2. Find and replace inside the path variable (escape internal slashes)
# Example: replacing "/home/user" with "/opt/app"
MODIFIED_PATH="${CURRENT_SCRIPT_PATH/\/home\/user/\/opt\/app}"

# 3. File configurations
TEMPLATE_FILE="/path/to/your/service.template"
SYSTEMD_DEST="/etc/systemd/system/my_custom_service.service"

# 4. The target string inside your template file that also contains slashes
STRING_TO_FIND="/original/placeholder/path"

# 5. Execute using '|' as a delimiter so sed ignores the slashes in the variables
sed "s|${STRING_TO_FIND}|${MODIFIED_PATH}|g" "$TEMPLATE_FILE" | sudo tee "$SYSTEMD_DEST" > /dev/null

# 6. Reload systemd
sudo systemctl daemon-reload

echo "Successfully wrote systemd file to $SYSTEMD_DEST"
```

Use code with caution.

Would you like me to look at the **exact strings or paths** you are trying to swap to make sure the escaping logic is perfectly formatted for your script?

## Sep 06 00:09:59 Fira systemd\[1]: autostart.service: Main process exited, code=exited, status=1/FAILURE

Sep 06 00:09:59 Fira systemd\[1]: autostart.service: Failed with result 'exit-code'.\
Sep 06 00:09:59 Fira systemd\[1]: autostart.service: Scheduled restart job, restart counter is at 4.\
Sep 06 00:09:59 Fira systemd\[1]: Started autostart.service - Autostart.\
Sep 06 00:09:59 Fira b\[1972909]: node:events:486\
Sep 06 00:09:59 Fira b\[1972909]: throw er; // Unhandled 'error' event\
Sep 06 00:09:59 Fira b\[1972909]: ^\
Sep 06 00:09:59 Fira b\[1972909]: Error: spawn bun ENOENT\
Sep 06 00:09:59 Fira b\[1972909]: at ChildProcess.\_handle.onexit (node:internal/child\_process:286:19)\
Sep 06 00:09:59 Fira b\[1972909]: at onErrorNT (node:internal/child\_process:484:16)\
Sep 06 00:09:59 Fira b\[1972909]: at process.processTicksAndRejections (node:internal/process/task\_queues:90:21)\
Sep 06 00:09:59 Fira b\[1972909]: Emitted 'error' event on ChildProcess instance at:\
Sep 06 00:09:59 Fira b\[1972909]: at ChildProcess.\_handle.onexit (node:internal/child\_process:292:12)\
Sep 06 00:09:59 Fira b\[1972909]: at onErrorNT (node:internal/child\_process:484:16)\
Sep 06 00:09:59 Fira b\[1972909]: at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) {\
Sep 06 00:09:59 Fira b\[1972909]: errno: -2,\
Sep 06 00:09:59 Fira b\[1972909]: code: 'ENOENT',\
Sep 06 00:09:59 Fira b\[1972909]: syscall: 'spawn bun',\
Sep 06 00:09:59 Fira b\[1972909]: path: 'bun',\
Sep 06 00:09:59 Fira b\[1972909]: spawnargs: \[ '/home/fira/Documents/f/autostart/source/autostart.ts' ]\
Sep 06 00:09:59 Fira b\[1972909]: }\
Sep 06 00:09:59 Fira b\[1972909]: Node.js v24.14.0\
Sep 06 00:09:59 Fira systemd\[1]: autostart.service: Main process exited, code=exited, status=1/FAILURE

The root cause of this crash is **`Error: spawn bun ENOENT`**. This means Node.js is trying to execute a background process using the command `bun`, but **systemd cannot find the `bun` runtime in its environment path**.

When systemd runs a service, it uses a very stripped-down, minimal `PATH` (usually just `/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin`). It does **not** load your user's `.bashrc` or `.zshrc` profiles where runtimes like Bun or Node version managers are typically installed.

Here are the two ways to fix this.

### Fix 1: Add the Environment PATH to your Systemd Service (Recommended)

You need to explicitly tell systemd where your `bun` binary lives.

1. **Find where Bun is installed** on your machine by running this command in your regular terminal:\
   bash

<!---->

```
which bun
```

Use code with caution.\
_(It will likely output something like `/home/fira/.bun/bin/bun` or `/usr/local/bin/bun`)_
2\. Open your systemd unit file (or the template script we made earlier) and add an **`Environment=`** line inside the `[Service]` block, pointing to the **directory** where `bun` is located:\
ini

```
[Service]
# ... your other settings ...

# Add this line (replace with the actual path from 'which bun' minus the '/bun' at the end)
Environment=PATH=/usr/local/bin:/usr/bin:/bin:/home/fira/.bun/bin

ExecStart=/usr/bin/node /home/fira/Documents/f/autostart/source/index.js
```

Use code with caution.
3\. Reload and restart your service:\
bash

```
sudo systemctl daemon-reload
sudo systemctl restart autostart.service
```

Use code with caution.

***

### Fix 2: Modify the Node.js Script to use an Absolute Path

If you have control over the Node.js source file that throws this error, you can modify the code where `spawn()` or `exec()` is called. Change the relative string `'bun'` to its absolute system path.

**Before:**

javascript

```
// This fails in systemd because it doesn't know where 'bun' is
const child = spawn('bun', ['/home/fira/Documents/f/autostart/source/autostart.ts']);
```

Use code with caution.

**After:**

javascript

```
// Provide the full path to the bun executable
const child = spawn('/home/fira/.bun/bin/bun', ['/home/fira/Documents/f/autostart/source/autostart.ts']);
```

Use code with caution.

What does the **`[Service]` block** of your systemd file look like right now, and what was the output of **`which bun`**? I can give you the exact line to paste in.

## can it take zshrc

By default, **systemd does not read your `.zshrc` file**. It executes commands directly in a sterile environment without launching an interactive shell session.

However, you can explicitly force systemd to spin up a login or interactive instance of `zsh` to run your script. This will automatically source your `.zshrc` profile, pulling in your aliases, node environments, and custom `PATH` setups (like Bun).

You can achieve this in two ways: by updating your systemd configuration or by modifying your deployment bash script.

### Option 1: Update the Systemd Unit File (Simplest)

Change the `ExecStart` line inside your systemd configuration to run `zsh` with the `-i` (interactive) and `-c` (command) flags.

ini

```
[Service]
Type=simple
User=fira
# Force zsh to run interactively so it reads your ~/.zshrc file
ExecStart=/bin/zsh -ic '/usr/bin/node /home/fira/Documents/f/autostart/source/index.js'
```

Use code with caution.

_Note: Make sure your `User=fira` line is present in the `[Service]` section so it knows whose home directory (`~/.zshrc`) to load._

### Option 2: Automate it in your Bash Script

If you are generating this template automatically via the bash script we built earlier, you can dynamically capture your current active terminal path configuration and pass it directly into systemd using the `Environment=` tag. This is cleaner and faster than launching an extra shell layer.

Add this step to your bash script:

bash

```
#!/bin/bash

# 1. Capture your current user's live $PATH variable (which contains Bun)
CURRENT_PATH="$PATH"

# ... (your existing script path modifications) ...

# 2. Modify how you call sed to inject the environment path into the systemd template
# Ensure your template file has an 'Environment=PATH=...' or placeholder line!
sed -e "s|YOUR_PLACEHOLDER_STRING|$MODIFIED_PATH|g" \
    -e "s|LIVE_PATH_PLACEHOLDER|$CURRENT_PATH|g" \
    "$TEMPLATE_FILE" | sudo tee "$SYSTEMD_DEST" > /dev/null

sudo systemctl daemon-reload
```

Use code with caution.

Which option feels like a better fit for your setup? If you go with Option 2, **paste your systemd template here** and I will rewrite it with the exact placeholders you need.

# how to use pm2

**PM2 is a production process manager** for Node.js applications that keeps your apps alive forever, reloads them without downtime, and helps you manage logging and CPU scaling. [link](https://pm2.keymetrics.io/docs/usage/quick-start/)

***

### 1. Installation

Install PM2 globally on your system using npm: [link](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)

bash

```
npm install -g pm2
```

Use code with caution.

### 2. Core Commands

The most common commands you will use to manage your application processes: [link](https://www.serverpoint.com/en/how-tos/pm2-nodejs-process-manager/)

| Action      | Command                            | Purpose                                                              |
| ----------- | ---------------------------------- | -------------------------------------------------------------------- |
| **Start**   | `pm2 start app.js --name "my-app"` | Runs your app in the background and gives it a custom name.          |
| **List**    | `pm2 list` (or `pm2 ls`)           | Displays a table of all running applications and their statuses.     |
| **Stop**    | `pm2 stop <name_or_id>`            | Halts the application process without removing it from the registry. |
| **Restart** | `pm2 restart <name_or_id>`         | Hard-restarts the process (kills and starts again).                  |
| **Reload**  | `pm2 reload <name_or_id>`          | **Recommended for production.** Restarts the app with zero-downtime. |
| **Delete**  | `pm2 delete <name_or_id>`          | Stops the app and removes it from PM2 management entirely.           |

### 3. Monitoring & Logs

PM2 makes it easy to diagnose issues on a headless production server. [link](https://www.npmjs.com/package/pm2)

- **Real-time Logs:** View aggregated or app-specific stdout and stderr streams.\
  bash

<!---->

```
pm2 logs        # View all logs
pm2 logs my-app # View logs for a specific app
```

Use code with caution.

- **Dashboard Monitoring:** Open a beautiful terminal-based real-time dashboard tracking CPU and memory usage:\
  bash

<!---->

```
pm2 monit
```

Use code with caution.\
[link](https://www.youtube.com/watch?v=ceEde5xRZ5c\&t=101)

### 4. Advanced Production Features

#### Cluster Mode (Scale Across CPUs)

Node.js runs on a single thread by default. To automatically scale your app across all available CPU cores without changing a line of code, run: [link](https://pm2.io/docs/runtime/overview/)

bash

```
pm2 start app.js -i max
```

Use code with caution.

#### Persisting Across Server Reboots

If your server crashes or reboots, you want your applications to start right back up automatically. [link](https://javascript.plainenglish.io/pm2-easily-turn-your-app-into-a-production-ready-service-ef1994db3950)

1. Generate and configure a boot script for your OS:\
   bash

<!---->

```
pm2 startup
```

Use code with caution.\
_(Note: PM2 will output a specific `sudo env PATH...` command. **Copy and paste that exact command into your terminal** to finalize setup)._
2\. Save your current list of running apps so they get restored on boot:\
bash

```
pm2 save
```

Use code with caution.\
[link](https://pm2.keymetrics.io/docs/usage/startup/)

#### Using an Ecosystem File (Best Practice)

Instead of typing out long flags in the terminal, you can manage your apps using a configuration file called `ecosystem.config.js`. Generate one by running: [link](https://www.grizzlypeaksoftware.com/library/process-management-with-pm2-ihp9ebfr)

bash

```
pm2 ecosystem
```

Use code with caution.

This creates a file where you can explicitly map out environment variables, cluster modes, and memory limits: [link](https://www.youtube.com/watch?v=ceEde5xRZ5c\&t=101)

javascript

```
module.exports = {
  apps : [{
    name: "my-app",
    script: "./app.js",
    instances: "max",
    exec_mode: "cluster",
    env_production: {
      NODE_ENV: "production"
    }
  }]
}
```

Use code with caution.

You can then start all the apps defined in your config using:

bash

```
pm2 start ecosystem.config.js --env production
```

Use code with caution.

***

To help give you the best setup, tell me: Are you deploying this to a **local environment or a remote VPS** (like AWS or DigitalOcean)? Also, does your application rely on any **environment variables**?

- [link](https://pm2.keymetrics.io/docs/usage/quick-start/)\
  PM2\
  PM2 - Quick Start\
  Here are some things you can do with PM2: \* \*\*Process management\*\* \* Restart strategies \* Logs \* Persistent application \* Configur...
- [link](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)\
  DigitalOcean\
  Use PM2 to Setup a Node.js Environment On An Ubuntu VPS\
  Installing PM2. PM2 is available as an npm package and should be installed globally so it can be accessed anywhere on the system. ...
- [link](https://pm2.keymetrics.io/docs/usage/startup/)\
  PM2\
  Startup Script - PM2\
  These init systems are automatically detected by PM2 with the pm2 startup command. \* Generating a Startup Script. To automatically...

Show all

## how to enable --now a script

To use a `--now` flag or concept with PM2, you are likely referring to one of two common scenarios depending on whether you are managing **system reboots** or **crontab/scheduled tasks**.

Here is how to achieve the "do it now" effect for both use cases:

### Scenario 1: Enabling and Starting on System Boot (Like systemd)

If you are coming from Linux environments where you run `systemctl enable --now service`, you want to tell the system to launch your app automatically on reboot **and** start it immediately.

In PM2, this is split into two rapid steps:

1. **Start the app immediately:**\
   bash

<!---->

```
pm2 start app.js --name "my-app"
```

Use code with caution.
2\. **Enable it for system reboots:**\
bash

```
pm2 startup
# (Copy and run the sudo command provided by the terminal output)
pm2 save
```

Use code with caution.

***

### Scenario 2: Running a Script on a Schedule (Cron)

If you are using PM2’s built-in `cron_restart` feature to run or restart a script on a schedule, PM2 **normally waits** until the first cron interval hits before executing.

If you want to enable the cron schedule but **also execute it right now**, add the `--no-autorestart` flag alongside your cron flag. This ensures it runs instantly without getting stuck in an infinite crash-restart loop:

bash

```
pm2 start script.js --cron "0 0 * * *" --no-autorestart
```

Use code with caution.

- **What this does:** It executes `script.js` immediately (**now**), stops when finished, and PM2 will wake it up again to run every night at midnight.

***

### Scenario 3: Instantly Applying Configuration Changes

If you have updated your `ecosystem.config.js` file and want to apply those changes to your running processes immediately without dropping user connections, use **reload**:

bash

```
pm2 reload ecosystem.config.js --env production
```

Use code with caution.

Which of these scenarios matches what you are trying to build? If you are trying to **schedule a recurring task** or **automate a deployment**, let me know so I can give you the exact configuration syntax.

## what does pm2 save mean

<mark><strong><code dir="ltr">pm2 save</code><span> </span>freezes and saves your currently running application list</strong><span> </span>so they can be brought back automatically if your server crashes or reboots</mark>.

When you run `pm2 save`, PM2 takes a snapshot of all active processes (their names, scripts, paths, and environment settings) and writes them to a hidden dump file on your hard drive (usually located at `~/.pm2/dump.pm2`).

***

### Why is it important?

By default, PM2 keeps your apps running in your server's temporary RAM. If your server is restarted, **all of your running PM2 processes will disappear**.

`pm2 save` works hand-in-hand with `pm2 startup` to guarantee your apps survive a server crash:

1. `pm2 startup` configures your operating system's boot manager (like `systemd`) to launch PM2 when the machine turns on.
2. `pm2 save` tells PM2 **exactly which applications** it needs to resurrect from that saved snapshot.

### How to use it in practice

Whenever you add a new app, delete an old one, or change an app's configuration, you should resave your list:

bash

```
# 1. Start your applications
pm2 start app.js --name "api-server"
pm2 start worker.js --name "background-worker"

# 2. Save the current state to disk
pm2 save
```

Use code with caution.

### Handy related commands

- **`pm2 resurrect`**: If you ever want to manually bring back your saved applications without rebooting your whole server, running this command will instantly relaunch everything from your last save point.
- **`pm2 cleardump`**: Clears out your saved snapshot file if you want to start fresh.

Are you currently configuring a **production server** to handle unexpected reboots? If you hit an error while trying to save or setup startup scripts, let me know your **operating system** (Ubuntu, CentOS, Windows, etc.) and I can give you the exact commands.



# how to create a template string in shell

The easiest way to create and render a template string in a shell script depends on whether you are working with inline strings or external template files.

Here are the **three most efficient methods** used in shell scripting:

### 1. Using Here-Documents (Best for Inline Multiline Templates)

If your template is written directly inside your script, a **Here-Document (Heredoc)** is the most standard approach. Double quotes around the delimiter flag are optional, but by default, variables inside a standard Heredoc are automatically evaluated: [link](https://opentofu.org/docs/language/expressions/strings/)

bash

```
#!/bin/bash
USER="Alice"
ROLE="Administrator"

# The template block
cat <<EOF
Hello ${USER},
Welcome back! Your current role is set to: ${ROLE}.
EOF
```

Use code with caution.

### 2. Using `envsubst` (Best for External Files & Safety)

If you have an external file (e.g., `config.template`) and want to safely swap out placeholders without executing random shell code, use the standard Linux utility **`envsubst`**. [link](https://blog.tratif.com/2023/01/27/bash-tips-3-templating-in-bash-scripts/)

First, export your variables so the utility can read them:

bash

```
export SERVER_NAME="production-01"
export PORT="8080"
```

Use code with caution.

Then pass the template file through `envsubst`: [link](https://blog.tratif.com/2023/01/27/bash-tips-3-templating-in-bash-scripts/)

bash

```
envsubst < template.txt > config.json
```

Use code with caution.

_Note: If your template text contains raw `$VAR` structures that you do **not** want replaced, you can restrict replacement to specific variables like this: `envsubst '$SERVER_NAME,$PORT' < template.txt`._

### 3. Using `eval` (Native Single-Line/Dynamic Approach)

If you store a template raw inside a variable (with escaped text or single quotes to prevent instant evaluation) and want to parse it later, you can use `eval`: [link](https://serverfault.com/questions/287688/templating-with-linux-in-a-shell-script)

bash

```
# Define template without evaluating yet
template_str='Welcome $NAME, your code is $CODE.'

NAME="Bob"
CODE="9942"

# Evaluate the variable string dynamically
eval "echo \"$template_str\""
```

Use code with caution.

⚠️ **Security Warning:** Avoid using `eval` if the template string comes from untrusted user input, as it will execute any embedded shell commands like `$(rm -rf /)`. [link](https://stackoverflow.com/questions/6214743/create-new-file-from-templates-with-bash-script)

Are you working with **inline text** inside your script, or are you trying to parse an **external configuration file**?

- [link](https://serverfault.com/questions/287688/templating-with-linux-in-a-shell-script)\
  Server Fault\
  Templating with Linux in a Shell Script? - Server Fault\
  Jul 6, 2011 — or even with mixed shell code included Version: ${version} Path: ${path} Cost: ${cost}\\$ $(i=1; for w in one two three four; do ec...
- [link](https://stackoverflow.com/questions/6214743/create-new-file-from-templates-with-bash-script)\
  Stack Overflow\
  Create new file from templates with bash script - Stack Overflow\
  Jun 2, 2011 — Comments. ... would suffice. Here ${config\_file} contains the configuration variables in shell parseable format, and ${template\_fi...
- [link](https://blog.tratif.com/2023/01/27/bash-tips-3-templating-in-bash-scripts/)\
  Tratif\
  Bash Tips #3 – Templating in Bash Scripts - Tratif\
  Jan 27, 2023 — Here's an example of using templating to create a configuration file: \* \*\*Template file\*\* \* server: \* address: $SERVER\_IP \* port: ...

Show all

## how to pass to tee

To pass a template string or command output into the **`tee` command**, you use a **shell pipe (`|`)**.

The `tee` utility reads standard input and writes it simultaneously to **standard output (your screen) and one or more files**.

Here is how you combine `tee` with the template methods from before:

### 1. Piping a Here-Doc into `tee`

Instead of using `cat` to print to the screen, pass the Heredoc directly to `tee` to print **and** save it to a file.

bash

```
USER="Alice"
ROLE="Administrator"

tee output.txt <<EOF
Hello ${USER},
Welcome back! Your current role is: ${ROLE}.
EOF
```

Use code with caution.

### 2. Piping `envsubst` into `tee`

If you are generating a configuration file from an external template, you can pipe the `envsubst` output straight into `tee`.

bash

```
export PORT="8080"

envsubst < template.json | tee config.json
```

Use code with caution.

### 3. Piping `echo` or `printf` into `tee`

For quick single-line templates, use `echo` or `printf` and pipe the results.

bash

```
NAME="Bob"

echo "Welcome $NAME!" | tee log.txt
```

Use code with caution.

### 💡 Append Mode (`-a`)

By default, `tee` will overwrite the file. If you want to **append** the template string to the end of an existing file instead, add the `-a` flag:

bash

```
echo "New log entry for $USER" | tee -a log.txt
```

Use code with caution.

Would you like to see how to use `tee` with **sudo privileges** to write to protected system files, or do you need help **suppressing the screen output**?

