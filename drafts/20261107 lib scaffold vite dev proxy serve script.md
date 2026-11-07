# how to setup vite port fwd

To set up Vite port forwarding, it depends on where you're running Vite (VS Code, Docker, SSH, Codespaces, etc.).

### 1. Configure Vite to expose the port

By default, Vite listens only on `localhost`. Change it to listen on all network interfaces.

Run:

```
npm run dev -- --host 0.0.0.0
```

Or configure it permanently in `vite.config.js`:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
})
```

### 2. Access the forwarded port

Vite runs on:

```
http://localhost:5173
```

Depending on your environment:

| Environment       | Port forwarding setup                    |
| ----------------- | ---------------------------------------- |
| VS Code           | Ports tab → Forward Port → 5173          |
| GitHub Codespaces | Ports tab → Add port 5173                |
| Docker            | `-p 5173:5173`                           |
| SSH               | `ssh -L 5173:localhost:5173 user@server` |
| Local network     | `http://YOUR_IP:5173`                    |

### 3. Docker example

```
docker run -p 5173:5173 my-app
```

Make sure Vite uses `host: '0.0.0.0'`.

Which environment are you using?

VS Code

GitHub Codespaces

Docker

SSH / Remote Server

WSL

Other

Continue

# how to setup vite port fwd

To set up port forwarding or expose your **Vite development server** to your local network, tunnels, or tools like Docker, you need to configure Vite to bind to your local IP address rather than just `localhost`. [](https://pinggy.io/know%5Fyour%5Fport/localhost%5F5173/)

Here are the primary ways to achieve this:

### 1\. The Quickest Way (CLI Flag)

If you just want to quickly expose your server without changing configuration files, add the `--host` flag when starting your server: [](https://www.youtube.com/watch?v=dN%5F1OUuqSAU&t=12)

bash

```
npm run dev -- --host

```



_(Note: The extra `--` ensures the flag is passed directly to Vite and not absorbed by npm.)_ [](https://github.com/vitejs/vite/discussions/10834)

### 2\. The Permanent Way (`vite.config.js`)

To make this behavior permanent, open your `vite.config.js` or `vite.config.ts` file and add the `server` block with `host: true` (or `"0.0.0.0"`): [](https://stackoverflow.com/questions/71686045/how-to-configure-vite-dev-server-for-running-through-a-port-proxy-path)

javascript

```
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true, // Binds to all network interfaces (0.0.0.0)
    port: 5173, // Optional: Specify your port (defaults to 5173)
    strictPort: true, // Optional: Prevents Vite from automatically trying another port if 5173 is busy
  }
})

```



### 3\. Fixing Hot Module Replacement (HMR) Issues

When you forward ports through a reverse proxy, a Docker container, or an SSH/Ngrok tunnel, Vite's live-reloading (HMR) websocket often breaks. You can explicitly map the websocket client port in your config: [](https://stackoverflow.com/questions/71686045/how-to-configure-vite-dev-server-for-running-through-a-port-proxy-path)

javascript

```
server: {
  host: true,
  hmr: {
    clientPort: 443, // Force the browser client to connect via standard HTTPS port if using a secure tunnel
  },
}

```



---

### Common Scenarios

* **Testing on a Mobile Phone:** Once you run Vite with `--host`, your terminal will output a **Network URL** (e.g., `http://192.168.1.15:5173`). Make sure your phone is on the **same Wi-Fi network**, and type that Network URL into your phone's browser. [](https://dev.to/chrisebuberoland/how-to-view-your-local-dev-server-on-your-phone-vscode-live-server-nextjs-reactvite-43o1)
* **Docker Setup:** Docker containers require `host: '0.0.0.0'` in `vite.config.js` so that the application listens to traffic coming from outside the container. Remember to also map the port in your `docker-compose.yml` or Docker CLI command (e.g., `-p 5173:5173`). [](https://github.com/gitpod-samples/ona%5Fvite%5Fport%5Fsharing)

Are you setting this up to test your app on a **mobile phone**, deploying inside a **Docker container**, or trying to expose it to the internet using a **tunneling tool** like Ngrok?

* [](https://stackoverflow.com/questions/71686045/how-to-configure-vite-dev-server-for-running-through-a-port-proxy-path)  
Stack Overflow  
How to configure Vite dev server for running through a port ...  
the port need to be the same that you are exposing on docker service vaues of docker-compose.yml ports: - '8081:8081' on the index...
* [](https://github.com/gitpod-samples/ona%5Fvite%5Fport%5Fsharing)  
GitHub  
Proper way to expose/share Ona ports from a vite server ...  
This test environment simulates a typical Vite development server setup with: Host binding to 0.0.0.0 for external access … host: ...
* [](https://github.com/vitejs/vite/discussions/10834)  
GitHub  
How to change port on a vite-react-app?? #10834  
Can you show me how can I edit the config file to change the port? In npm, I think you'll need to use npm run dev -- --port 3000 …...

Show all

# how to setup vite server backend api redirect

To redirect API requests from your Vite front-end development server to a backend API server, you need to configure a **proxy**. This routes requests (like `/api/users`) to your actual backend server (like `http://localhost:5000`) and bypasses CORS issues during development. [](https://www.geeksforgeeks.org/reactjs/how-to-configure-proxy-in-vite/)

Here is how to set it up step-by-step:

### 1\. Configure the Proxy in `vite.config.js`

Open your `vite.config.js` (or `vite.config.ts`) file and add the `server.proxy` object. [](https://www.joelspriggs.com/kickstarting-your-full-stack-journey-with-react-vite-and-express/)

javascript

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework plugin

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1. Simple redirect: forwards /api/users to http://localhost:5000/api/users
      '/api': 'http://localhost:5000',

      // 2. Advanced configuration (if you need to alter the path)
      '/api-custom': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // Rewrites /api-custom/users to http://localhost:5000/users
        rewrite: (path) => path.replace(/^\/api-custom/, ''),
      },
    },
  },
})

```



### 2\. Fetch Data in Your Front-End

Now, you don't need to hardcode the full backend URL in your client code. Simply use relative paths starting with your proxy key: [](https://www.youtube.com/watch?v=mKmxc8TcWQ8&t=16)

javascript

```
// This will automatically be redirected to http://localhost:5000/api/users
fetch('/api/users')
  .then((res) => res.json())
  .then((data) => console.log(data));

```



### Proxy Options Breakdown

* **`target`**: The backend server URL you want to forward requests to.
* **`changeOrigin: true`**: Changes the origin of the host header to the target URL. This is often required by backends (like Express or Django) to avoid hostname match errors.
* **`rewrite`**: A function that lets you strip away or modify parts of the URL string before it hits the backend. [](https://stackoverflow.com/questions/64677212/how-to-configure-proxy-in-vite)

### For Production (Important)

The `server.proxy` configuration **only works during development** using the Vite dev server. For production deployment, you will need to handle this redirect using: [](https://www.geeksforgeeks.org/reactjs/how-to-configure-proxy-in-vite/)

* A reverse proxy via an Nginx Configuration or Apache.
* Environment variables to change your base API URL dynamically depending on production vs. development.

To help tailor this, let me know:

* What **backend language/framework** are you using? (Node/Express, Python, PHP, etc.)
* Are you looking for a **production setup** or just fixing a **development CORS issue**?

* [](https://stackoverflow.com/questions/64677212/how-to-configure-proxy-in-vite)  
Stack Overflow  
How to configure proxy in Vite? - Stack Overflow  
November 4, 2020 — A functional Vite proxy can be configured with a concise entry in \`vite.config.js\`, specifying only the path and target URL,
* [](https://www.geeksforgeeks.org/reactjs/how-to-configure-proxy-in-vite/)  
GeeksforGeeks  
How to Configure Proxy in Vite? - GeeksforGeeks  
Vite Proxy Configuration: Bypasses CORS and routes development API requests to backends. Vite. Defined inside \`vite.config.js\` und...
* [](https://www.youtube.com/watch?v=mKmxc8TcWQ8&t=16)  
YouTube·Arpan Neupane  
How to Create a Express/Node + React Project with Vite  
Jul 16, 2024 — Set up an Express backend by creating a "server" directory, running \`npm init -y\`, and changing the entry point to \`server.js\` in ...  
14m

Show all

# how to setup vite proxy to fwd all requests starting w api to a port

To set up a proxy in Vite that forwards all frontend requests starting with `/api` to a backend port, you need to configure the `server.proxy` object inside your configuration file.

Open or modify your **`vite.config.js`** (or `vite.config.ts`) file to match one of the two strategies below, depending on how your backend handles the `/api` prefix. 

### Option 1: Keep the `/api` prefix when forwarding

Use this if your backend routes **already include** `/api` (e.g., your backend expects `http://localhost:5000/api/users`): 

javascript

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

```



#### Option 2: Strip the `/api` prefix when forwarding

Use this if your backend routes **do not** include `/api` (e.g., your frontend calls `/api/users`, but your backend expects `http://localhost:5000/users`). You can use the `rewrite` function to drop the prefix: [](https://www.geeksforgeeks.org/reactjs/how-to-configure-proxy-in-vite/)

javascript

```
import { defineConfig } from 'vite'
// ... inside server.proxy
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },

```



#### Usage and Key Options

Make API calls in your frontend using **relative paths** rather than hardcoding the full domain or port: [](https://dev.to/ghacosta/til-setting-up-proxy-server-on-vite-2cng)

javascript

```
fetch('/api/users') // Forwards to target + path

```



* **`target`**: The destination server URL.
* **`changeOrigin`**: Modifies the request's `Origin` header to match the target to help bypass CORS issues.
* **`rewrite`**: A callback to modify the URL path before it is sent to the target. [](https://dev.to/ghacosta/til-setting-up-proxy-server-on-vite-2cng)

If you hit any unexpected roadblocks, tell me:

* What **backend framework** you are running (Node/Express, Python, etc.)?
* If you are running into specific **CORS or 404 errors**?

I can help you debug the network requests!

* [](https://www.thatsoftwaredude.com/content/14032/setting-up-a-dev-server-proxy-in-vite)  
ThatSoftwareDude  
Setting Up a Dev Server Proxy in Vite - ThatSoftwareDude.com  
rewrite: (path) Changes the origin of the request to match the target URL rewrite: (path) => path. Removes the /api prefix from th...
* [](https://dev.to/ghacosta/til-setting-up-proxy-server-on-vite-2cng)  
DEV Community  
TIL: setting up proxy server on vite - DEV Community  
proxy server on vite. This is useful not only for "making URLs shorter" but for overcoming CORS issues if your api is in a host ot...
* [](https://www.geeksforgeeks.org/reactjs/how-to-configure-proxy-in-vite/)  
GeeksforGeeks  
How to Configure Proxy in Vite? - GeeksforGeeks  
target: It is the URL to which the proxy is being made. You can set it to true to set the header to the target URL.

Show all

# how to parse shell arg in nodejs

To parse shell arguments in Node.js, you can use the **built-in `util.parseArgs()` method**, slice the raw **`process.argv` array**, or rely on popular third-party libraries like **`commander`** or **`yargs`**. [](https://oneuptime.com/blog/post/2026-01-22-nodejs-parse-command-line-arguments/view)

Here are the best ways to do it, ranked from the easiest native solutions to advanced library options.

---

### 1\. The Modern Native Way: `util.parseArgs()` (Recommended)

Node.js includes a native parser in the `util` module. It is the best choice if you want to parse flags (`--verbose`) or options with values (`--port 3000`) without installing external dependencies. [](https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program-and-receive-them)

javascript

```
import { parseArgs } from 'node:util';

const options = {
  port: { type: 'string', short: 'p', default: '8080' },
  verbose: { type: 'boolean', short: 'v' },
};

const { values, positionals } = parseArgs({ options });

console.log(values);       // e.g., { port: '3000', verbose: true }
console.log(positionals);  // Any extra arguments without flags (e.g., ['file.txt'])

```



_Run it via shell:_

bash

```
node server.js -p 3000 --verbose extra-file.txt

```



### 2\. The Raw Native Way: `process.argv`

If you are passing simple positional arguments (like `node script.js file1 file2`), you can read the global `process.argv` array directly. [](https://mojoauth.com/dev-guides/command-line-argument-escaping-in-nodejs)

Because the first two elements are always the **Node.js executable path** and the **script file path**, you must slice the array at index `2` to get your actual arguments: [](https://www.youtube.com/watch?v=5D7elTp0-xM&t=185)

javascript

```
// script.js
const args = process.argv.slice(2);

const filename = args[0];
const mode = args[1];

console.log(`Processing ${filename} in ${mode} mode.`);

```



_Run it via shell:_

bash

```
node script.js data.csv production

```



---

### 3\. Advanced CLI Tools (Third-Party Libraries)

For complex command-line interfaces that require automatic help screens, nested commands (like `git clone` vs `git push`), or strict validation, use a third-party framework. [](https://shell.js.org/)

| Library          | Best For                                                          | Example Syntax                           |
| ---------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| **Commander.js** | Large, Git-like CLIs with sub-commands.                           | program.option('-v, --verbose').parse(); |
| **Yargs**        | Interactive configurations, robust type checking, and validation. | const argv = yargs(process.argv).argv;   |

#### Commander.js Example:

javascript

```
// Install first: npm install commander
const { program } = require('commander');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --size <type>', 'pizza size', 'medium');

program.parse(process.argv);

const options = program.opts();
console.log(options.debug);
console.log(options.size);

```



To help you choose the right approach, tell me:

* What **kind of arguments** are you parsing? (Simple flags like `-v`, key-values like `--env=prod`, or sub-commands like `npm run`?)
* Do you want to **avoid npm installations** and stick strictly to built-in Node.js tools?

* [](https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program-and-receive-them)  
Stack Overflow  
How do I pass command line arguments to a Node.js program ...  
December 4, 2010 — Node.js versions 18.3.0 and 16.17.0 introduced the \`util.parseArgs\` function for native command-line argument parsing, which reach...
* [](https://oneuptime.com/blog/post/2026-01-22-nodejs-parse-command-line-arguments/view)  
OneUptime  
How to Parse Command Line Arguments in Node.js  
Learn how to parse command line arguments in Node. creating a build script, a … arguments. This guide covers all the approaches fr...
* [](https://www.geeksforgeeks.org/node-js/how-to-parse-command-line-arguments-in-node-js/)  
GeeksforGeeks  
How to Parse Command Line Arguments in Node  
we can use the third library module such as yargs to parse the arguments passed via cmd. In this module, you can pass arguments as...

Show all

# how to use npm yargs

**[Yargs](http://yargs.js.org/) is a Node.js library** used to build interactive command-line interfaces (CLIs) by parsing arguments and dynamically generating elegant help menus. It handles flags, positional parameters, and sub-commands seamlessly so you don't have to manually parse `process.argv`. [](https://www.npmjs.com/package/yargs)

Here is a step-by-step guide to installing and using **Yargs** in modern Node.js.

### 1\. Installation

Initialize your project (if you haven’t already) and install the package via [npm](https://www.npmjs.com/package/yargs): 

bash

```
npm init -y
npm install yargs

```



---

### 2\. A Simple Example (Flags and Options)

Create a file named `app.js`. This basic example parses simple flags like `--name` or `-n`.

javascript

```
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// hideBin(process.argv) strips the first two default Node.js array paths
const argv = yargs(hideBin(process.argv))
  .option('name', {
    alias: 'n',
    type: 'string',
    description: 'The name of the user',
    demandOption: true // Makes this argument required
  })
  .option('greet', {
    alias: 'g',
    type: 'boolean',
    description: 'Whether to log a greeting',
    default: false
  })
  .parse(); // Parses the arguments and returns them as a JSON object

if (argv.greet) {
  console.log(`Hello, ${argv.name}!`);
} else {
  console.log(`User: ${argv.name}`);
}

```



**How to run it in your terminal:**

bash

```
# To view the auto-generated help menu:
node app.js --help

# To execute with flags:
node app.js --name "Alice" -g

```



---

### 3\. A Complex Example (Creating Sub-commands)

If you want to build a tool like `git` or `npm` that uses sub-commands (e.g., `node app.js serve` or `node app.js add`), use the `.command()` method. [](https://www.geeksforgeeks.org/node-js/node-js-yargs-module/)

javascript

```
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'serve [port]',                  // Command name and positional param
    'Start the development server',   // Description
    (yargs) => {                     // Builder function for command-specific flags
      return yargs.positional('port', {
        describe: 'Port to bind the server to',
        default: 5000,
        type: 'number'
      });
    },
    (argv) => {                      // Handler function executed when command matches
      console.log(`Starting server on port: ${argv.port}`);
      if (argv.verbose) {
        console.log('Verbose logging enabled!');
      }
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .demandCommand(1, 'You need at least one command before moving on')
  .parse();

```



**How to run it in your terminal:**

bash

```
# Get help for the specific sub-command
node app.js serve --help

# Execute the sub-command
node app.js serve 8080 --verbose

```



---

### Key Methods to Know

* **`hideBin(process.argv)`**: A built-in helper that cleans up the arguments array by slicing off the Node executable and script path.
* **`.option(key, [opt])`**: Configures global flags/options for the CLI application.
* **`.command(cmd, desc, [builder], [handler])`**: Defines a standalone CLI sub-command.
* **`.demandCommand()`**: Enforces that the user must pass a command (e.g., typing just `node app.js` will trigger an error).
* **`.parse()`**: Finalizes configuration, extracts variables, and executes matching command handlers. [](https://www.youtube.com/watch?v=TH%5F7CaAhpMo)

Are you building a specific type of CLI tool (like a **file manager**, **scraper**, or **API companion**)? Tell me what you're working on, and I can write a custom boilerplate for your exact **commands and options**.

* [](https://www.npmjs.com/package/yargs)  
NPM  
yargs - NPM  
Sep 20, 2026 — Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface. \* commands an...
* [](http://yargs.js.org/)  
JS.ORG  
yargs  
Yargs is a Node.js library for parsing command-line options and building interactive command-line tools. Features: Parses commands...
* [](https://www.geeksforgeeks.org/node-js/node-js-yargs-module/)  
GeeksforGeeks  
Node.js Yargs Module - GeeksforGeeks  
Node.js Yargs module creates interactive command-line interfaces and flexible arguments. define commands using \`yargs.command()\` s...

Show all


