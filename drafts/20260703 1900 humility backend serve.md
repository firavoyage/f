# (d) how to serve parceljs and bun api backend on the same port

You cannot run two different HTTP servers (ParcelJS and Bun) on the exact same port at the same time. Doing so causes a port conflict error.

To serve both from the same port, you must run one server as a proxy that forwards specific requests to the other.

### Option 1: Use Bun to Serve Frontend and API (Recommended)

Build your frontend with Parcel, then let Bun serve the static assets and the API.

1. **Build your frontend:**\
   bash

<!---->

```
npx parcel build src/index.html --dist-dir dist
```

Use code with caution.
2\. **Set up Bun (`server.ts`):**\
typescript

```
Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // Handle API routes
    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ data: "Hello from Bun!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Serve frontend static files
    let filePath = "./dist" + url.pathname;
    if (url.pathname === "/") filePath = "./dist/index.html";

    const file = Bun.file(filePath);
    if (await file.exists()) {
      return new Response(file);
    }

    // Fallback for Single Page Apps (SPA routing)
    return new Response(Bun.file("./dist/index.html"));
  },
});
```

Use code with caution.

### Option 2: Proxy API Requests via Parcel (Development Only)

Keep Parcel and Bun on separate ports locally, but configure Parcel to proxy API calls to Bun. This simulates a single port environment during development.

1. **Start Bun on port 4000.**

2. **Create a `.proxyrc.json` file** in your root project folder:\
   json

<!---->

```
{
  "/api": {
    "target": "http://localhost:4000"
  }
}
```

Use code with caution.
3\. **Start Parcel on port 3000.**

- Requests to `http://localhost:3000/api/users` automatically route to Bun on port 4000.

### Option 3: Use a Reverse Proxy (Production)

Deploy a reverse proxy like Nginx or Caddy in front of both services to route traffic based on the URL path.

- **`/api/*` paths** route to Bun.
- **All other paths** route to your Parcel static files.

If you are open to sharing, tell me:

- Is this setup for **local development** or **production**?
- Are you building a **Single Page App** (like React or Vue)?

I can provide the exact configuration files or scripts tailored to your tech stack.

- [link](https://www.youtube.com/watch?v=R02ehdTzi3I)\
  How to Build a Web App with Parcel.js - Quick & EASY JavaScript Bundler!\
  Dec 8, 2021 — Parcel.js Documentation: https://parceljs.org/docs/ In today's video I'll be showing you how we can build a simple web app using P...\
  \
  \
  YouTube
- [link](https://api-endpoint-by-bun.hashnode.dev/how-to-use-bun-api-endpoints-effectively)\
  Mastering Bun API Endpoints\
  Jan 23, 2025 — Now, let's set up the API server to handle requests and send back responses. We'll use Bun's built-in serve method for HTTP reques...\
  \
  \
  api-endpoint-by-bun.hashnode.dev
- [link](https://bun.com/docs/guides/http/server)\
  Common HTTP server usage\
  Documentation Index This starts an HTTP server listening on port 3000 . It demonstrates basic routing with a number of common resp...\
  \
  \
  Bun

Show all

# (d) lib to create backend server on bun

To build a backend server on **Bun**, you can <mark>use its lightning-fast<span> </span><strong>built-in native APIs</strong></mark> or choose from several optimized **third-party frameworks** depending on your project needs. [link](https://bun.com/docs/guides/ecosystem/express)

### 1. The Native Way: `Bun.serve()`

You do not need to install any external libraries to create a highly optimized backend server. Bun has a built-in HTTP server that utilizes web-standard `Request` and `Response` objects, outperforming Node.js frameworks by default. [link](https://medium.com/@reghuramk/bun-v-deno-v-node-f239bd6f09f0)

typescript

```
// server.ts
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Welcome to Bun!");
    }
    if (url.pathname === "/api/data") {
      return Response.json({ success: true, items: [1, 2, 3] });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at ${server.url}`);
```

Use code with caution.

Run this instantly with hot-reloading: `bun --watch server.ts`. [link](https://www.youtube.com/watch?v=i7TJ3iiFuqU)

***

### 2. ElysiaJS (Recommended Framework)

[Elysia](https://bun.com/docs/guides/ecosystem/elysia) is a Bun-first backend framework explicitly engineered for the runtime. It mimics the simple structure of Express but adds end-to-end type safety with TypeScript and incredible execution speeds. [link](https://bun.com/docs/guides/ecosystem/elysia)

- Install: `bun add elysia`

typescript

```
import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello from Elysia!')
  .get('/user/:id', ({ params: { id } }) => `User ID: ${id}`)
  .post('/data', ({ body }) => ({ received: body }))
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
```

Use code with caution.

***

### 3. Hono

Hono is a lightweight, ultra-fast, web-standards-compliant framework. While it works across multiple runtimes (Cloudflare Workers, Deno, Node), it includes dedicated support for Bun and offers a clean, declarative router. [link](https://bun.com/docs/guides/ecosystem/express)

- Install: `bun add hono`

typescript

```
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello from Hono!'));
app.get('/api/json', (c) => c.json({ message: 'Hi!' }));

export default {
  port: 3000,
  fetch: app.fetch,
};
```

Use code with caution.

***

### 4. Legacy Node.js Frameworks (Express / Fastify)

Because Bun implements native compatibility with `node:http`, you can import your traditional Node.js backend frameworks directly without modifications. They run notably faster on Bun than they do on standard Node.js. [link](https://bun.com/docs/guides/ecosystem/express)

- Install: `bun add express` [link](https://bun.com/docs/guides/ecosystem/express)

typescript

```
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express inside Bun!');
});

app.listen(3000);
```

Use code with caution.

### Quick Comparison

| Approach          | Speed / Performance | Best For                                        | Type Safety |
| ----------------- | ------------------- | ----------------------------------------------- | ----------- |
| **`Bun.serve()`** | Maximum             | Microservices, simple routes, custom routers    | Manual      |
| **ElysiaJS**      | Extremely High      | Modern TypeScript backends, complex APIs        | End-to-End  |
| **Hono**          | High                | Multi-runtime/edge apps, lightweight structures | Strong      |
| **Express**       | Moderate            | Reusing older Node packages, legacy migrations  | Basic       |

If you want to look into additional features, let me know if your server needs **WebSocket support**, complex **database integrations**, or **file upload handling** so I can provide the best middleware configuration.

- [link](https://medium.com/@reghuramk/bun-v-deno-v-node-f239bd6f09f0)\
  Bun v Deno v Node - Medium\
  Mar 26, 2025 — From the release of Bun 1.2, you can now use bun as a bundler. Yes, you heard it right: In the above Node. js setup, we could have...\
  Medium·Reghuram K
- [link](https://bun.com/docs/guides/ecosystem/express)\
  Build an HTTP server using Express and Bun\
  Ecosystem & Frameworks. Build an HTTP server using Express and Bun. Copy page. Express and other major Node. js HTTP libraries sho...\
  Bun
- [link](https://stackoverflow.com/questions/73012097/can-bunjs-be-used-as-a-backend-server)\
  Can Bunjs be used as a backend server? - Stack Overflow\
  Jul 17, 2022 — Create routes: Instead of NodeJs res.send(), use c.json({}) app.get('/hello', c => c.json({ message: 'Hello World' })) export and ...\
  Stack Overflow

Show all

# (d) lib to create backend server on nodejs

The most popular library to create a backend server on Node.js is <mark><strong><span><span><a rel="noopener" href="https://expressjs.com/">Express.js</a></span></span></strong></mark>, which serves as the minimal, battle-tested standard for building web servers and REST APIs. However, depending on your performance, structure, and real-time needs, there are several top-tier alternatives. [link](https://medium.com/@jamesmiller22871/7-essential-libraries-for-modern-node-js-backend-development-566775d5482e)

### Top Libraries and Frameworks

- **Express.js**: Minimal and unopinionated. It relies heavily on community middleware modules. It is perfect for beginners and quick REST APIs.
- **Fastify**: High-performance and low-overhead. It includes native schema validation and handles significantly more requests per second than Express.
- **NestJS**: Highly structured and opinionated. It natively uses TypeScript and follows angular-like design patterns, making it ideal for large enterprise applications.
- **Koa.js**: Created by the original team behind Express. It utilizes modern async/await middleware for cleaner control flow.
- **Hapi**: Configuration-centric framework. It has excellent built-in security features and is often used for enterprise proxies and applications. [link](https://www.reddit.com/r/javascript/comments/17v12vv/askjs%5Fnode%5Fjs%5Frest%5Fapi%5Flibrary%5Frecommendation%5Ffor/)

***

### Quick Start: Building a Server

You do not actually need an external library to start. You can use the built-in `http` module, or use `Express` to make development faster.

### Option A: Native Node.js (No Library Required)

Use Node.js's native `http` module for zero-dependency routing. [link](https://nodejs.org/learn/getting-started/introduction-to-nodejs)

javascript

```
import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

Use code with caution.

### Option B: Express.js (Recommended)

To use Express, initialize your project, install the package, and set up your server. [link](https://medium.com/jungletronics/backend-with-express-js-framework-3ea4b49f2610)

1. **Install Express:**

bash

```
npm init -y
npm install express
```

Use code with caution.

1. **Create `server.js`:** [link](https://medium.com/jungletronics/backend-with-express-js-framework-3ea4b49f2610)

javascript

```
import express from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON payloads
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

Use code with caution.

To help you choose the best fit, tell me: what is the **main goal** of your backend application, and do you plan to use **JavaScript or TypeScript**?

- [link](https://www.reddit.com/r/javascript/comments/17v12vv/askjs%5Fnode%5Fjs%5Frest%5Fapi%5Flibrary%5Frecommendation%5Ffor/)\
  \[AskJS] Node JS REST API library recommendation for a junior ...\
  Nov 14, 2023 — Comments Section \* ManyFails1Win. • 3y ago. You aren't looking for a "rest API library", you're looking for backend server routing...\
  Reddit·r/javascript
- [link](https://expressjs.com/)\
  Express.js · Node.js web application framework\
  Fast, unopinionated, minimalist web framework for Node.js. npm install express. Get Started. res.send('Hello World!') Clarity over...\
  Express.js
- [link](https://nodejs.org/learn/getting-started/introduction-to-nodejs)\
  Introduction to Node.js | Node.js Learn\
  If you use the mjs version of the code, you should save it as a server.mjs file and run node server.mjs in your terminal. This cod...\
  Node.js

Show all

# (d) how to have parceljs dev server and nodejs api backend on the same port

You cannot run two different processes (the Parcel dev server and your Node.js backend) on the exact same port simultaneously. However, you can make them **appear** to run on the same port by <mark>using a<span> </span><strong>reverse proxy</strong></mark>.

This setup allows your frontend code to make requests to `/api/users` on the Parcel port, and Parcel will automatically forward those requests to your Node.js server running on a different port.

### 1. Configure Parcel Proxy

Parcel has a built-in proxy feature. You configure it by adding a `package.json` property or creating a `.proxyrc` file.

Create a file named `.proxyrc.json` in your project root directory:

json

```
{
  "/api": {
    "target": "http://localhost:5000"
  }
}
```

Use code with caution.

- `/api`: Any frontend request starting with this path triggers the proxy.
- `target`: change `5000` to the actual port your Node.js server uses.

### 2. Update Frontend Fetch Requests

Change your frontend API calls from absolute URLs to relative URLs.

- **Before:** `fetch('http://localhost:5000/api/data')`
- **After:** `fetch('/api/data')`

### 3. Run Both Servers

You must start both development servers at the same time using different ports.

1. Start your Node.js backend (e.g., on port `5000`).
2. Start your Parcel dev server (e.g., on default port `1234`).
3. Open `http://localhost:1234` in your browser.

Parcel will serve your frontend assets and seamlessly forward all `/api` requests to your Node.js backend.

To help fine-tune this setup, let me know:

- What **backend framework** are you using (Express, Fastify, NestJS)?

- Do you need help **automating both startup commands** with a single script?

- [link](https://medium.com/@chamiperera95/how-to-run-node-js-server-and-apache-server-together-ee225ece6a44)\
  How to Run Node.js server and Apache server together..\
  Apr 18, 2020 — Since only one process can listen on any given port, both cannot run on same port directly. So, you will have to dispatch somehow.\
  \
  \
  Medium

- [link](https://parceljs.org/features/development/)\
  Development\
  Parcel includes a development server out of the box supporting hot reloading, HTTPS, an API proxy, and more.\
  \
  \
  Parcel.js

- [link](https://liman.io/blog/static-files-development-parceljs)\
  Serve Static Files during Development with Parcel\
  Sep 10, 2022 — For production environment emulation, Parcel has introduced an API proxy that allows specifying paths that should be proxied to an...\
  \
  liman.io

Show all

# (d) how to have parceljs dev server and bun api backend on the same port

You cannot run both the ParcelJS development server and a Bun API backend on the **exact same network port** simultaneously. Two different processes cannot bind to the same port at the same time; the second one will throw an "address already in use" error.

However, you can achieve the seamless user experience of a single port by running them on separate ports and using **Parcel's built-in proxy configuration**. This forwards API requests from your frontend port to your Bun backend port automatically.

### Step 1: Start your Bun API on a separate port

Configure your Bun server to listen on a distinct port, such as `3000`.

typescript

```
// server.ts
Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/api/data") {
      return Response.json({ message: "Hello from Bun!" });
    }
    return new Response("Not Found", { status: 404 });
  },
});
console.log("Bun backend running on port 3000");
```

Use code with caution.

### Step 2: Configure the Parcel Proxy

Create a `.proxyrc.json` file in the root directory of your project (next to your `package.json`). This file tells Parcel to intercept specific paths and route them to Bun.

json

```
{
  "/api": {
    "target": "http://localhost:3000"
  }
}
```

Use code with caution.

### Step 3: Fetch using relative paths

In your frontend code, do not hardcode the Bun URL. Fetch using relative paths instead. Parcel will automatically proxy these requests to port 3000.

javascript

```
// frontend.js
async function fetchData() {
  // This goes to localhost:1234/api/data, but Parcel proxies it to localhost:3000/api/data
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data);
}
```

Use code with caution.

### Step 4: Run both servers

1. Start your Bun backend on port `3000`.
2. Start your Parcel development server on its default port (`1234`).
3. Open `http://localhost:1234` in your browser.

Your frontend and API will now seamlessly communicate through port `1234` without triggering Cross-Origin Resource Sharing (CORS) errors.

To make development easier, I can show you how to **combine both start commands into a single terminal window** or help you set up **CORS headers in Bun** if you prefer to keep them completely separate. Which approach would you prefer to explore?

- [link](https://vsupalov.com/combine-frontend-and-backend-development-servers/)\
  Running Frontend and Backend Development Servers Together\
  Jun 20, 2017 — How to make it possible for the frontend to access the backend server, while both run in development and provide you with useful d...\
  \
  \
  vsupalov.com
- [link](https://liman.io/blog/static-files-development-parceljs)\
  Serve Static Files during Development with Parcel\
  Sep 10, 2022 — Creating a . proxyrc. json in the project's root directory, we can configure a http-proxy-middleware options object according to o...\
  \
  liman.io
- [link](https://liman.io/blog/static-files-development-parceljs)\
  Serve Static Files during Development with Parcel\
  Sep 10, 2022 — For production environment emulation, Parcel has introduced an API proxy that allows specifying paths that should be proxied to an...\
  \
  liman.io

Show all

## after parcel build

Once you run `parcel build` for production, the Parcel development server and its `.proxyrc.json` file **no longer exist**.

To keep your frontend and Bun API running on the same port in production, you must configure **Bun to serve your static production files** alongside your API endpoints.

### Step 1: Build your frontend

Run your build command to generate production files. By default, Parcel outputs these to a folder named `dist`.

bash

```
npx parcel build src/index.html
```

Use code with caution.

### Step 2: Configure Bun to serve the `dist` folder

Update your Bun server code. It will now check if a request is for an API endpoint. If it is not, Bun will look for and serve the matching static file from the `dist` folder.

typescript

```
// server.ts
import { join } from "path";

const DIST_DIR = join(import.meta.dir, "dist");

Bun.serve({
  port: 3000, // Your single production port
  async fetch(req) {
    const url = new URL(req.url);

    // 1. Handle API Routes
    if (url.pathname.startsWith("/api/")) {
      if (url.pathname === "/api/data") {
        return Response.json({ message: "Hello from production Bun!" });
      }
      return new Response("API Route Not Found", { status: 404 });
    }

    // 2. Handle Static Frontend Files
    // Remove leading slash to match file paths correctly
    let filePath = join(DIST_DIR, url.pathname);

    // Fallback to index.html for Single Page Applications (SPA routing)
    let file = Bun.file(filePath);
    if (!(await file.exists())) {
      file = Bun.file(join(DIST_DIR, "index.html"));
    }

    return new Response(file);
  },
});

console.log("Production server running on http://localhost:3000");
```

Use code with caution.

### Step 3: Run the production server

You only need to run your Bun backend.

bash

```
bun run server.ts
```

Use code with caution.

Now, navigating to `http://localhost:3000` will load your compiled Parcel frontend, and any calls to `/api/` will hit your Bun endpoints seamlessly on the exact same port.

Would you like help creating a **unified deployment script** in your `package.json`, or do you need to handle **Single Page Application (SPA) routing** like React Router with this setup?

- [link](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js)\
  How to Bundle a Web App with Parcel.js\
  Sep 28, 2022 — When your application is ready for production, use the build command that you included in your package. json file to create the pr...\
  \
  \
  DigitalOcean

- [link](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js)\
  How to Bundle a Web App with Parcel.js\
  Sep 28, 2022 — As noted above, Parcel's default output for your files is in the dist folder. Since you specified the build script to output your ...\
  \
  \
  DigitalOcean

- [link](https://dev.to/o%5Fa%5Fe/fullstack-with-svelte-trpc-2cab)\
  Fullstack with Svelte & tRPC\
  Nov 21, 2022 — The application I want to build is well suited for SPA (single page application). So I gain very little from SSR (server side rend...\
  \
  DEV Community

# should i use bun.serve

<mark><strong>Yes, you should use<span> </span><code dir="ltr">Bun.serve</code><span> </span>if you are building high-performance, lightweight HTTP servers in JavaScript/TypeScript, especially for modern greenfield microservices or Edge environments</strong></mark>. However, you may want to stick to traditional Node.js servers (like standard Express) if your application heavily relies on legacy, complex Node ecosystem libraries with native C++ bindings that are not yet 100% stable under Bun. [link](https://www.reddit.com/r/node/comments/1qsai8b/can%5Fsomeone%5Fshare%5Ftheir%5Fexperience%5Fmigrating/)

### When to Definitely Use `Bun.serve`

- **Blazing Fast Microservices**: It is natively optimized in Zig and uses Safari’s JavaScriptCore engine under the hood. In basic API endpoints or static streaming, it can easily handle several times the throughput of a default Node.js instance with a fraction of the memory footprint.
- **Native TypeScript and JSX**: If you want a zero-configuration developer experience, `Bun.serve` natively executes TypeScript and JSX files. You can seamlessly return component-driven HTML responses without building an intermediate compilation step.
- **WebSocket Integration**: It includes an incredibly high-performance, native WebSocket implementation directly built into the API object, eliminating the need to install or maintain heavy third-party packages like `ws`.
- **Standard-Compliant APIs**: Unlike traditional Node `http`, `Bun.serve` relies on web-standard `Request` and `Response` objects. This makes code highly portable and compatible with modern edge frameworks like Hono or Elysia. [link](https://www.reddit.com/r/node/comments/1phxcnu/is%5Fanyone%5Fhere%5Factually%5Frunning%5Fbun%5Fin%5Fproduction/)

### When to Reconsider or Exercise Caution

- **Heavy I/O & Real-World Database Bottlenecks**: Synthetic benchmarks show a massive speed gap, but real-world CRUD applications hitting databases yield heavily standardized latency. The database network driver or query logic usually remains the primary bottleneck, minimizing Bun's raw runtime execution advantage.
- **Ecosystem Maturity Risks**: While Bun has evolved rapidly (especially following its backing by major AI initiatives), complex enterprise setups running legacy `npm` packages with intense native addons can still trigger unexpected edge cases or silent dependency failures.
- **Strict "Boring Tech" Policies**: Node.js has over a decade of production battle-testing, predictable vulnerability disclosures, and massive enterprise support. If your team cannot tolerate minor runtime regressions or occasional hotfixes, Node remains the safe fallback. [link](https://www.reddit.com/r/node/comments/1phxcnu/is%5Fanyone%5Fhere%5Factually%5Frunning%5Fbun%5Fin%5Fproduction/)

***

### Directly Comparing Runtimes & Server Implementations

| Feature / Metric     | `Bun.serve`                       | Node.js (`http` / Express)                |
| -------------------- | --------------------------------- | ----------------------------------------- |
| **Engine Core**      | JavaScriptCore (Zig)              | V8 (C++)                                  |
| **TS / JSX Support** | Native (Zero Config)              | Requires Transpiler (e.g., `tsx`, `tsc`)  |
| **Memory Footprint** | Extremely low                     | Moderate to High                          |
| **API Architecture** | Web-standard `Request`/`Response` | Node Streams / Custom EventEmitters       |
| **WebSockets**       | Built-in, high-performance        | Requires 3rd-party libraries (e.g., `ws`) |

***

### How to Implement a Quick Test Server

If you choose to use it, you can spin up a production-ready server in a single file without a `package.json` file. Create an `index.ts` file:

typescript

```
Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return Response.json({ status: "healthy", timestamp: Date.now() });
    }
    return new Response("Welcome to Bun.serve!");
  },
  error(error) {
    return new Response(`Server Error: ${error.message}`, { status: 500 });
  }
});

console.log("Server running on http://localhost:3000");
```

Use code with caution.

To run it instantly, use:

bash

```
bun index.ts
```

Use code with caution.

If you are open to sharing a bit more, I can help you weigh the decision:

- What kind of **application** are you building? (e.g., REST API, real-time chat, static site)

- Are you integrating with any **specific database** or complex npm packages?

- Is this for a **personal hobby** or an **enterprise production** environment?

- [link](https://www.reddit.com/r/node/comments/1phxcnu/is%5Fanyone%5Fhere%5Factually%5Frunning%5Fbun%5Fin%5Fproduction/)\
  Is anyone here actually running Bun in production? What’s your ...\
  Dec 9, 2025 — \* eliwuu. • 7mo ago. backend service running in the background for almost two years, no issues; service itself is quite memory-int...\
  Reddit·r/node

- [link](https://www.reddit.com/r/node/comments/16ft5vi/is%5Fbun%5Fhere%5Fto%5Fstay%5For%5Fis%5Fit%5Fjust%5Fanother/)\
  Is Bun here to stay or is it just another JavaScript hypetrain ? : r/node\
  Sep 11, 2023 — \* deruke. • 3y ago. The main reason I'm loving bun right now is: bun index.ts. I can write my scripts in Typescript and it just ru...\
  Reddit·r/node

- [link](https://bun.com/)\
  Bun — A fast all-in-one JavaScript runtime\
  Bun is a JavaScript runtime. Bun is a new JavaScript runtime built from scratch to serve the modern JavaScript ecosystem. It has t...\
  Bun

Show all

## examples

Here are practical code examples for common use cases using `Bun.serve`.

### 1. Routing and JSON API

This example shows how to handle standard HTTP methods, extract URL parameters, and return JSON data cleanly.

typescript

```
Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;

    // Handle GET /users
    if (url.pathname === "/users" && method === "GET") {
      const data = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
      return Response.json(data);
    }

    // Handle POST /users
    if (url.pathname === "/users" && method === "POST") {
      try {
        const body = await req.json(); // Built-in body parsing
        return Response.json({ success: true, received: body }, { status: 201 });
      } catch {
        return new Response("Invalid JSON", { status: 400 });
      }
    }

    // Fallback 404 Route
    return new Response("Not Found", { status: 404 });
  }
});
```

Use code with caution.

### 2. High-Performance WebSockets

Bun handles WebSockets natively with zero external dependencies. It includes built-in channel subscription features for easy chat or live feed implementations.

typescript

```
Bun.serve({
  port: 8080,
  fetch(req, server) {
    // Automatically upgrades HTTP connections to WebSocket
    if (server.upgrade(req)) {
      return; // Do not return a Response when upgrading
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    open(ws) {
      ws.subscribe("broadcast-room"); // Join a specific channel
      console.log("Client connected");
    },
    message(ws, message) {
      // Publish the received message to everyone in the channel
      ws.publish("broadcast-room", `User says: ${message}`);
    },
    close(ws) {
      ws.unsubscribe("broadcast-room");
      console.log("Client disconnected");
    }
  }
});
```

Use code with caution.

### 3. File Streaming (Static Assets)

Bun makes serving local files fast and efficient by leveraging the operating system's native file-sending capabilities directly through `Bun.file()`.

typescript

```
Bun.serve({
  port: 4000,
  fetch(req) {
    const url = new URL(req.url);

    // Serve a static landing page
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const file = Bun.file("./public/index.html");
      return new Response(file); // Bun auto-detects content-type header
    }

    // Serve an image asset
    if (url.pathname === "/logo.png") {
      return new Response(Bun.file("./public/logo.png"));
    }

    return new Response("Asset not found", { status: 404 });
  }
});
```

Use code with caution.

### 4. Direct JSX Streaming (No Bundler Required)

Because Bun reads JSX files out of the box, you can stream server-side rendered (SSR) layout components instantly.

_(Save this specific file with a `.tsx` extension, like `server.tsx`)_

tsx

```
// A standard functional component
function Layout({ children }: { children: any }) {
  return (
    <html>
      <head><title>Bun App</title></head>
      <body style={{ fontFamily: "sans-serif", padding: "20px" }}>{children}</body>
    </html>
  );
}

Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response(
      <Layout>
        <h1>Rendered on the Server!</h1>
        <p>No build step or Webpack required.</p>
      </Layout>,
      { headers: { "Content-Type": "text/html" } }
    );
  }
});
```

Use code with caution.

***

To help you build out a full prototype, let me know:

- Do you need to see how to handle **CORS headers** or authentication?
- Are you pairing this with an existing library like **Hono** to make routing cleaner?
- Would you like an example showing how to read **environment variables** or database queries?

## examples of adopt or not

To determine if you should adopt `Bun.serve` or stick with a traditional Node.js solution, review these real-world scenarios across different project types.

### 🔴 Do NOT Adopt `Bun.serve` (Stick to Node.js / NestJS)

- **Legacy Enterprise Apps:** Your project relies heavily on 10-year-old `npm` packages featuring uncompiled C++ native abstractions.
- **Heavy AWS Lambda Architectures:** You run thousands of short-lived, micro-second serverless tasks. AWS native Node runtimes have deeper tooling, tooling layers, and optimization ecosystems than customized Bun layers.
- **Strict Corporate Compliance:** Your security team requires highly strict, multi-year LTS (Long Term Support) guarantees and immediate CVE enterprise patching cycles.
- **Heavy ORM Dependency Hooks:** You run massive relational databases using legacy Prisma or TypeORM engines that depend heavily on Node's precise internal event loop patterns.

### 🟢 DO Adopt `Bun.serve` (Greenfield & Modern Tech)

- **High-Volume WebSockets:** You are building real-time applications like chat rooms, multiplayer lobbies, or live stock tickers. Bun handles tens of thousands of concurrent connections on single instances natively.
- **Edge Microservices:** You are deploying highly distributed APIs globally via providers like Fly.io or custom Docker containers where startup time and low memory footprints save immediate infrastructure costs.
- **Hono Framework Tech Stacks:** You want a clean, modern codebase. Combining `Bun.serve` with the lightweight framework **Hono** gives you an incredibly fast Express alternative.
- **Scripting & Frontend Tooling Build Steps:** You want to run monorepos, local developer tooling servers, or internal dashboard CLI applications with zero compilation lag.

***

### Code Blueprint: The "Adopt" Architecture (Bun + Hono)

If you decide to adopt, do not write raw `if/else` routers. Use **Hono** to get an Express-like developer experience running directly on `Bun.serve`.

typescript

```
import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new Hono();

// Global middleware running at native Bun speeds
app.use("*", logger());
app.use("/api/*", cors({ origin: "https://yourfrontend.com" }));

// Clean parameter routing
app.get("/api/products/:id", (c) => {
  const productId = c.req.param("id");
  return c.json({ id: productId, status: "available" });
});

// Native Bun integration exporter
export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
```

Use code with caution.

***

Let me know which category your project falls into, or if you want to explore:

- How Bun handles **environment variables** securely
- The exact steps to **containerize** a Bun application using Docker
- How to benchmark your **current Node app** against Bun

## examples w or wo bun.serve

To see the exact difference in syntax, architecture, and complexity, here is a direct comparison of building the exact same application **with** `Bun.serve` and **without** it (using standard Node.js).

***

### Example 1: Creating a Basic JSON API

This endpoint parses an incoming JSON payload and returns a JSON response.

### 🟢 WITH `Bun.serve`

Bun uses modern web standards (`Request`, `Response`) out of the box. No external dependencies are needed, and body parsing is built-in.

typescript

```
// run with: bun index.ts
Bun.serve({
  port: 3000,
  async fetch(req) {
    if (req.method === "POST" && new URL(req.url).pathname === "/data") {
      const body = await req.json(); // Native modern web standard
      return Response.json({ status: "success", received: body });
    }
    return new Response("Not Found", { status: 404 });
  }
});
```

Use code with caution.

### 🔴 WITHOUT `Bun.serve` (Node.js + Express)

Node.js requires installing external packages (`express`), a compilation layer if you want TypeScript (`tsx` or `ts-node`), and middleware to parse JSON bodies.

javascript

```
// run with: npm install express && node index.js
const express = require('express');
const app = express();

app.use(express.json()); // Requires middleware to parse JSON

app.post('/data', (req, res) => {
  // Uses custom Node req/res objects instead of web standards
  res.status(200).json({ status: "success", received: req.body });
});

app.listen(3000, () => console.log('Server running'));
```

Use code with caution.

***

### Example 2: Handling Real-Time WebSockets

This sets up a simple server that listens for a message and broadcasts it back.

### 🟢 WITH `Bun.serve`

WebSockets are baked directly into the server core. It utilizes a highly optimized, native C++/Zig implementation that handles thousands of connections seamlessly.

typescript

```
Bun.serve({
  port: 8080,
  fetch(req, server) {
    if (server.upgrade(req)) return; // Native upgrade mechanism
    return new Response("Not a websocket request", { status: 400 });
  },
  websocket: {
    message(ws, message) {
      ws.send(`Echo: ${message}`); // Built-in efficient API
    }
  }
});
```

Use code with caution.

### 🔴 WITHOUT `Bun.serve` (Node.js + `ws` library)

Node.js lacks native WebSocket server support. You must install, import, and manually orchestrate an external library alongside Node's HTTP layer.

javascript

```
// run with: npm install ws
const { createServer } = require('http');
const { WebSocketServer } = require('ws');

const server = createServer();
const wss = new WebSocketServer({ server }); // Attaches 3rd party package to native server

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(`Echo: ${message}`);
  });
});

server.listen(8080);
```

Use code with caution.

***

### Example 3: Serving and Streaming a File

This route safely reads a local file from disk and streams it to the user.

### 🟢 WITH `Bun.serve`

Bun features a native `Bun.file()` API. It utilizes operating system-level optimizations (like `sendfile`) to stream assets with minimal CPU overhead.

typescript

```
Bun.serve({
  port: 4000,
  fetch(req) {
    // Bun automatically detects the file type and sets the content-type header
    const file = Bun.file("./report.pdf");
    return new Response(file);
  }
});
```

Use code with caution.

### 🔴 WITHOUT `Bun.serve` (Node.js Native Streams)

In raw Node.js, you have to manage file system streams manually and explicitly determine and attach the proper MIME content-type headers.

javascript

```
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // Manually configure your headers
  res.writeHead(200, { 'Content-Type': 'application/pdf' });

  const stream = fs.createReadStream('./report.pdf');
  stream.pipe(res); // Manually piping streams
}).listen(4000);
```

Use code with caution.

***

If you'd like to see how these stack up for your specific project, let me know:

- Which **runtime environment** (Docker, AWS Lambda, VPS) you plan to deploy to

- If you have a specific **framework preference** (like Express vs. Hono)

- What **performance metric** matters most to you (startup time, memory usage, raw RPS)

- [link](https://oneuptime.com/blog/post/2026-01-31-bun-http-requests/view)\
  How to Handle HTTP Requests in Bun\
  Jan 31, 2026 — js where you might need external libraries like axios or node-fetch , Bun provides native support for making HTTP requests out of ...\
  \
  \
  OneUptime

# (d) how to run everything on the same port, like parceljs, backend api, db, sdks, etc.

You cannot physically run multiple distinct server processes (like a bundler, a database, and a backend API) on the exact same network port simultaneously. Operating systems strictly enforce a one-process-per-port rule to prevent data collisions.

However, you can achieve the **illusion** of everything running on the same port from the client's perspective by using a **Reverse Proxy** or **Bundler Proxying**.

Here is how to set it up.

### Option 1: Use Parcel’s Built-in Proxy (Easiest for Dev)

If you want your frontend code (Parcel) to talk to your backend API without worrying about CORS or different port numbers, use Parcel's built-in proxy feature.

1. **Keep processes separate internally**: Run Parcel on `:1234` and Node.js/Python API on `:5000`.
2. **Create a proxy file**: In your project root, create a file named `.proxyrc` or `.proxyrc.json`.
3. **Add configuration**: Route all `/api` requests to your backend.

json

```
{
  "/api": {
    "target": "http://localhost:5000"
  }
}
```

Use code with caution.

1. **Result**: Your frontend accesses `http://localhost:1234/api/users`, and Parcel forwards it to port 5000 behind the scenes.

### Option 2: Use an Nginx Reverse Proxy (Best for Production)

An Nginx server acts as a single traffic cop sitting at port `80` (HTTP) or `443` (HTTPS). It reads the URL path and routes the traffic to the correct internal port.

1. **Install Nginx** on your machine or server.
2. **Configure Nginx**: Update your `nginx.conf` file to distribute traffic.

nginx

```
server {
    listen 80;
    server_name localhost;

    # Frontend Assets (Parcel)
    location / {
        proxy_pass http://localhost:1234;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:5000/;
    }

    # Database Web GUI (e.g., pgAdmin or Mongo Express)
    location /db-admin/ {
        proxy_pass http://localhost:8081/;
    }
}
```

Use code with caution.

1. **Result**: Everything is accessed via `http://localhost/`, split purely by the URL path.

### Option 3: Embed Everything in a Single Node.js App

If you absolutely want a single command and a single runtime instance executing your code, you can merge your frontend hosting into your backend process.

1. **Build production assets**: Run `parcel build src/index.html --dist-dir dist`.
2. **Serve files via Express**: Use your backend framework to serve those static files.

javascript

```
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. Backend API Routes
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the single-port API" });
});

// 2. Serve Built Frontend Files
app.use(express.static(path.join(__dirname, 'dist')));

// 3. Wildcard to handle client-side routing (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

Use code with caution.

### What about Databases and SDKs?

- **Databases (PostgreSQL, MongoDB, Redis)**: These cannot be natively multiplexed onto an HTTP port easily because they use custom TCP protocols. You must keep them on their native ports (e.g., 5432, 27017). Your backend API will connect to them internally, keeping them invisible to the outside world.
- **SDKs (Firebase, AWS, Stripe)**: SDKs are just code libraries. They do not run on ports. They execute inside your backend API process or frontend browser bundle, riding on top of standard outgoing HTTP/HTTPS traffic.

To help narrow down the best setup, tell me:

- What **backend language/framework** (Node.js, Python, Go) are you using?

- Is this setup strictly for **local development**, or are you planning to deploy it to **production**?

- Which specific **database** are you using?

- [link](https://www.linkedin.com/posts/mohan-sahu-dba%5Fpostgresql-dba-databasemanagement-activity-7322612698188247040-toKX)\
  Running multiple PostgreSQL clusters on the same port? | Mohan Sahu posted on the topic\
  Apr 28, 2025 — No, multiple clusters cannot run on the same TCP port at the same time. Each PostgreSQL server process must listen on a unique TCP...\
  \
  \
  LinkedIn

- [link](https://docs.gitlab.com/omnibus/development/architecture/multiple%5Fdatabase%5Fsupport/)\
  Multiple databases support\
  Terminology Term Definition Database A logical database that a component, such as Rails application, uses. For example, gitlabhq\_p...\
  \
  GitLab Docs

- [link](https://medium.com/ask-a-dev/dealing-with-a-microservice-based-architecture-what-6fe58ac9a6a7)\
  Dealing With a Microservice-based Architecture… What?! | by Fernando Doglio | Ask a Dev\
  May 7, 2021 — However, through the use of something called “ Reverse proxy”, you can have a way to redirect all incoming requests into a single ...\
  \
  \
  Medium

Show all

## what's the proven way. like, you simply run a pnpm dev, and everything magically works

To get that exact "**run `pnpm dev` and everything works**" experience on a single port, the proven industry standard is to let **Vite** or **Next.js/Remix** handle it.

However, since you are using **Parcel**, the proven method is a **Monorepo structure paired with a Process Manager** (like `concurrently` or `turborepo`) and **Parcel's built-in proxy**.

Here is exactly how to structure your project so a single command spins up your frontend, backend, and database instantly.

### Step 1: Structure Your Project (Monorepo)

Organize your project folder so your frontend and backend live together, sharing a root configuration.

text

```
my-project/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── .proxyrc.json      <-- Routes frontend traffic to backend
│   └── package.json
├── docker-compose.yml     <-- Spins up your Database
├── package.json           <-- Root package manager
└── pnpm-workspace.yaml
```

Use code with caution.

### Step 2: Configure the Frontend Proxy (`frontend/.proxyrc.json`)

This is the magic file. It tells Parcel: _"If the user requests an asset, serve it. If they request `/api`, silently send it to the backend process."_

json

```
{
  "/api": {
    "target": "http://localhost:5000"
  }
}
```

Use code with caution.

### Step 3: Automate the DB with Docker (`docker-compose.yml`)

Instead of manually starting your database, define it in a file in your project root.

yaml

```
version: '3.8'
services:
  postgres-db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    ports:
      - "5432:5432"
```

Use code with caution.

### Step 4: Glue it together in the Root `package.json`

Install `concurrently` in your root folder (`pnpm add -wD concurrently`). This tool lets you run multiple commands in parallel under a single terminal window.

Set up your root `package.json` scripts like this:

json

```
{
  "name": "my-magic-project",
  "scripts": {
    "db:up": "docker-compose up -d",
    "db:down": "docker-compose down",
    "dev:frontend": "pnpm --filter frontend dev",
    "dev:backend": "pnpm --filter backend dev",
    "dev": "pnpm db:up && concurrently \"pnpm dev:frontend\" \"pnpm dev:backend\""
  }
}
```

Use code with caution.

### The Result

When you type `pnpm dev`:

1. Docker instantly boots your database in the background.
2. `concurrently` starts your Parcel app (e.g., port `1234`) and your backend API (port `5000`).
3. You open **`http://localhost:1234`** in your browser.
4. Your frontend code makes fetches to `/api/users`. Parcel forwards them to port `5000`.

To your browser, your code, and your SDKs, **everything is running on port 1234**.

If you want to wire this up right now, tell me:

- What **database** are you using? (I can give you the exact Docker config for it).

- What **backend framework** (Express, Fastify, etc.) runs your API?

- [link](https://levelup.gitconnected.com/how-to-simultaneously-run-the-client-and-server-of-your-full-stack-app-in-one-folder-ef5a988d56d7)\
  How to simultaneously run the client and server instances of your full-stack app in one folder.\
  Apr 11, 2022 — While at the root directory, let's install “concurrently”, it is the npm package that will help us run the backend and frontend at...\
  \
  \
  Level Up Coding

- [link](https://github.com/RyanZim/awesome-npm-scripts)\
  GitHub - RyanZim/awesome-npm-scripts: Everything awesome related to npm scripts and using npm as a build tool.\
  Tools for running multiple commands or npm scripts in parallel or sequentially.\
  \
  \
  GitHub

- [link](https://medium.com/@bashorundolapo/how-to-create-a-simple-next-js-monorepo-with-pnpm-82af37289b50)\
  How to Create A Simple Next.js Monorepo With PNPM\
  Aug 11, 2025 — Step 5: Running the Monorepo The final step is to create some scripts in our root package. json to manage everything easily. This ...\
  \
  \
  Medium

Show all

## how to do in the defacto way if i use vite

In the Vite ecosystem, the de facto industry standard is to use **Vite’s built-in Dev Server Proxy** paired with a workspace runner like **Turborepo** or **Concurrently**.

Vite acts as the single-port entry point for your browser, while a single root command manages the background services.

Here is the exact blueprint used by professional engineering teams.

### 1. Folder Structure (Monorepo)

Create a clean separation between your frontend, backend, and infrastructure:

text

```
my-app/
├── apps/
│   ├── frontend/         # Vite app
│   │   ├── vite.config.js
│   │   └── package.json
│   └── backend/          # Node/Express, Fastify, etc.
│       └── package.json
├── docker-compose.yml    # Database container
├── package.json          # Root scripts
└── pnpm-workspace.yaml
```

Use code with caution.

### 2. Configure the Vite Proxy (`apps/frontend/vite.config.js`)

This is where the single-port magic happens. You tell Vite to listen on its default port (e.g., `5173`) but transparently route any `/api` network requests to your backend running on port `5000`.

javascript

```
import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh'; // Or your framework of choice

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Short-circuit all browser requests starting with /api
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

Use code with caution.

- **Why this is standard**: Your frontend code can now fetch `/api/users` relatively. The browser thinks it is talking to Vite, completely eliminating CORS errors.

### 3. Automatic Database Setup (`docker-compose.yml`)

To ensure your database spins up alongside your app without manual installation, place a Docker config in the root folder:

yaml

```
version: '3.8'
services:
  database:
    image: postgres:16-alpine # Swap out for mongo, mysql, redis, etc.
    environment:
      POSTGRES_USER: dev_user
      POSTGRES_PASSWORD: dev_password
      POSTGRES_DB: dev_db
    ports:
      - "5432:5432"
```

Use code with caution.

### 4. Create the Workspace Configuration (`pnpm-workspace.yaml`)

Tell `pnpm` where your projects live by creating this file in the root directory:

yaml

```
packages:
  - 'apps/*'
```

Use code with caution.

### 5. The One-Command Root Configuration (`package.json`)

Install `concurrently` in the root workspace (`pnpm add -wD concurrently`) so you can run the UI and backend at the exact same time. Set up your root `package.json` scripts like this:

json

```
{
  "name": "my-vite-monorepo",
  "private": true,
  "scripts": {
    "db:start": "docker-compose up -d",
    "dev:frontend": "pnpm --filter frontend dev",
    "dev:backend": "pnpm --filter backend dev",
    "dev": "pnpm db:start && concurrently -n \"DB,Vite,API\" -c \"cyan,green,yellow\" \"echo 'DB running'\" \"pnpm dev:frontend\" \"pnpm dev:backend\""
  }
}
```

Use code with caution.

### How it looks in action

When you run `pnpm dev`:

1. **Docker** quietly launches your database.
2. **Vite** boots up your UI on `http://localhost:5173`.
3. **Your API** boots up on `http://localhost:5000`.
4. You open `http://localhost:5173`. Frontend code hits `/api/something`, Vite passes it to the API, the API talks to the DB, and it all works seamlessly out of a single terminal window.

Would you like to see how to configure the **backend database client** (like Prisma or Mongoose) so it automatically syncs with this setup on boot?

- [link](https://dimitrisanastasiadis.com/blog/create-a-simple-react-component-library-with-vite)\
  Create a Simple React Component Library with Vite\
  Sep 24, 2023 — That's it! You should be able to access Vite's example page by navigating to http://localhost:5173/ (that's the default port Vite ...\
  \
  \
  dimitrisanastasiadis.com
- [link](https://blog.stackademic.com/how-to-use-vite-7-in-real-world-projects-a-complete-breakdown-9ddc0b5113af)\
  How to Use Vite 7 in Real-World Projects: A Complete Breakdown\
  Apr 9, 2026 — Vite 7 includes a built-in proxy option that handles this cleanly during development. You configure the proxy in the Vite config f...\
  \
  \
  Stackademic
- [link](https://levelup.gitconnected.com/10-vite-features-every-frontend-developer-should-know-984bcf1a8cb9)\
  10 Vite Features Every Frontend Developer Should Know | by Pratap Tengale | Level Up Coding\
  Sep 14, 2025 — 5. Development Proxy for APIs Why it matters: During development, frontend and backend often run on different ports. This leads to...\
  \
  \
  Level Up Coding

Show all

## is concurrently the proven way

No, **`concurrently` is not the de facto or modern enterprise way** for a `pnpm` monorepo. While it works fine for small side projects, it is considered a legacy approach for scaling applications.

The true industry standard for running everything together in a `pnpm` workspace is **Turborepo** (by Vercel).

***

### Why `concurrently` is no longer the standard

- **No dependency orchestration**: It starts the frontend and backend at the exact same time. If your backend takes 5 seconds to connect to the database, your frontend might crash on boot trying to fetch data that isn't ready.
- **Bad logs**: It dumps all terminal outputs into one giant, messy stream.
- **Zero caching**: It doesn't cache builds or tasks. Every single run starts completely from scratch.

***

### The Modern Way: Turborepo + pnpm

Turborepo was specifically designed to handle monorepos. It understands the relationships between your apps, manages the boot-up order perfectly, and streams beautiful, filtered logs.

### 1. Install Turborepo

Run this command in your project root to add Turbo:

bash

```
pnpm add -wD turbo
```

Use code with caution.

### 2. Create a `turbo.json` (Root Folder)

This file defines the pipeline. You can explicitly tell Turbo: _"Do not start the frontend dev server until the database is up."_

json

```
{
  "$schema": "https://turbo.build",
  "pipeline": {
    "db:start": {
      "cache": false
    },
    "dev": {
      "dependsOn": ["^db:start"],
      "cache": false,
      "persistent": true
    }
  }
}
```

Use code with caution.

### 3. Update Root `package.json`

Instead of long, complex strings using `concurrently`, your root script becomes incredibly clean:

json

```
{
  "name": "my-vite-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo dev"
  }
}
```

Use code with caution.

### 4. Define `dev` scripts in your sub-apps

Make sure your `apps/frontend/package.json` and `apps/backend/package.json` both have a `"dev"` script inside them:

- Frontend: `"dev": "vite"`
- Backend: `"dev": "node server.js"` (or `nodemon`, `tsx`, etc.)

***

### The End Result

When you run `pnpm dev`:

1. Turbo reads `turbo.json`, fires up your Docker database first, and then safely executes the `dev` script in **every package inside your monorepo simultaneously**.
2. It prefixes every log line cleanly by package name (e.g., `frontend:dev:`, `backend:dev:`).
3. If you ever run `pnpm build`, Turbo will cache the results. If no files changed, your builds take 0 milliseconds.

Are you using **TypeScript** across your frontend and backend? If so, I can show you how Turbo allows you to share type definitions between Vite and your API instantly.

## example. parceljs. bun. db. turbo.

Here is the complete, high-performance blueprint using **Bun** (for blazing-fast backend execution and workspace management), **Parcel**, **Turborepo**, and a **Docker-backed Database**.

Everything maps to a single port (`1234`) on the frontend via Parcel's proxy, and boots instantly with one command: `bun dev`.

### 1. Folder Setup

text

```
my-app/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   └── index.ts     # Bun API server
│   │   └── package.json
│   └── frontend/
│       ├── src/
│       │   ├── index.html
│       │   └── index.ts     # Parcel app
│       ├── .proxyrc.json    # Front-facing single-port magic
│       └── package.json
├── docker-compose.yml       # Database
├── package.json             # Root workspace settings
└── turbo.json               # Task orchestrator
```

Use code with caution.

### 2. Root Configurations

**`package.json` (Root)**\
Bun has built-in workspace support. Define your apps folder and the single `bun dev` trigger.

json

```
{
  "name": "bun-turbo-parcel",
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "dev": "turbo dev"
  },
  "devDependencies": {
    "turbo": "^2.0.0"
  }
}
```

Use code with caution.

**`turbo.json` (Root)**\
This instructs Turbo to boot the database background container before starting the sub-app dev environments.

json

```
{
  "$schema": "https://turbo.build",
  "tasks": {
    "db:start": {
      "cache": false
    },
    "dev": {
      "dependsOn": ["db:start"],
      "cache": false,
      "persistent": true
    }
  }
}
```

Use code with caution.

**`docker-compose.yml` (Root)**\
Spin up a lightweight database. This example uses PostgreSQL.

yaml

```
services:
  database:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: bun_user
      POSTGRES_PASSWORD: bun_password
      POSTGRES_DB: bun_db
    ports:
      - "5432:5432"
```

Use code with caution.

***

### 3. Frontend Apps (`apps/frontend/`)

**`apps/frontend/.proxyrc.json`**\
This passes browser requests pointing to `/api` over to the internal Bun API port (`5000`), tricking the browser into thinking everything lives on port `1234`.

json

```
{
  "/api": {
    "target": "http://localhost:5000"
  }
}
```

Use code with caution.

**`apps/frontend/package.json`**

json

```
{
  "name": "frontend",
  "private": true,
  "scripts": {
    "dev": "parcel src/index.html --port 1234"
  },
  "devDependencies": {
    "parcel": "^2.12.0"
  }
}
```

Use code with caution.

***

### 4. Backend Apps (`apps/backend/`)

**`apps/backend/src/index.ts`**\
Bun features an incredibly fast native HTTP server (`Bun.serve`) out of the box. No Express or external framework required.

typescript

```
import { Client } from "pg";

// Connect to the background Docker Postgres container
const client = new Client("postgres://bun_user:bun_password@localhost:5432/bun_db");
await client.connect();

Bun.serve({
  port: 5000,
  async fetch(req) {
    const url = new URL(req.url);

    // Handle the proxied API request
    if (url.pathname === "/api/users") {
      const res = await client.query("SELECT NOW()"); // Querying the DB
      return Response.json({
        message: "Hello from native Bun backend!",
        dbTime: res.rows[0].now
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("🚀 Bun API server running on http://localhost:5000");
```

Use code with caution.

**`apps/backend/package.json`**

json

```
{
  "name": "backend",
  "private": true,
  "scripts": {
    "db:start": "docker compose up -d",
    "dev": "bun --watch src/index.ts"
  },
  "dependencies": {
    "pg": "^8.11.0"
  },
  "devDependencies": {
    "@types/pg": "^8.11.0"
  }
}
```

Use code with caution.

***

### Running the App

From your main project root directory, execute:

bash

```
bun dev
```

Use code with caution.

**What happens underneath:**

1. Turbo hooks into `apps/backend` to trigger `db:start` (`docker compose up -d`).
2. Once the container activates, Turbo fires up the `dev` pipelines for both `frontend` and `backend`.
3. Bun starts watching your API file on port `5000`.
4. Parcel builds your frontend on port `1234`.
5. When you open `http://localhost:1234` and hit `/api/users`, Parcel seamlessly passes the call downstream to Bun and your database.

Would you like me to add an **ORM like Prisma** to this setup so your database migrations sync up automatically right when you run the launch command?

## is it wise

**No, it is generally unwise** to combine all of these specific technologies (Bun, Parcel, Turbo) into a monorepo for a production application. While it works fine for personal experimentation, it introduces major architectural friction and "tooling fatigue."

Here is why this specific combination is problematic, along with what you should do instead.

### The Friction Points

### 1. Bun and Turbo have a "Philosophical" Conflict

Turborepo was designed by Vercel to optimize Node.js-based ecosystems (like `npm`, `pnpm`, and `yarn`). Bun, however, is an all-in-one runtime that has its own incredibly fast **built-in workspace runner** (`bun run --filter`). Putting Turborepo on top of Bun adds a redundant configuration layer that slows down Bun's native speed.

### 2. Parcel is the Odd Man Out

Parcel is a great zero-config bundler, but it uses its own custom multi-threaded compiler written in Rust. Bun also features its own blazing-fast, built-in bundler (`Bun.build`). Mixing Bun and Parcel means you are running two entirely different native bundling systems in the same repository, which complicates TypeScript path mapping and linting configurations.

***

### What Is Actually Wise? (The Defacto Options)

If your goal is a single-command (`bun dev`) experience that completely abstracts ports, you should choose one of two clean, proven paths:

### Path A: The All-in-Bun Monorepo (Highest Performance)

Drop Turborepo and Parcel. Let Bun handle the entire workspace and backend, and use **Vite** for the frontend because it has native Bun integration.

- **Workspace Runner**: Native Bun workspaces.
- **Frontend**: Vite (runs smoothly on Bun).
- **Backend**: Native Bun APIs.
- **Why it's wise**: You eliminate wrapper configurations (no `turbo.json`). Your workspace builds and installs at lightning speeds because everything is handled by a single runtime engine.

### Path B: The Vercel/Node Ecosystem (Most Stable / Enterprise)

If you want to keep Turborepo, replace Bun with Node.js/pnpm and replace Parcel with Vite or Next.js.

- **Workspace Runner**: Turborepo + `pnpm`.
- **Frontend/Backend**: Next.js (or Vite + Express).
- **Why it's wise**: This is the most heavily tested, enterprise-grade web stack in the industry. It has zero edge-case bugs with third-party SDKs, and deployment to platforms like AWS, Vercel, or Docker is seamless.

***

### Summary Checklist

| If your priority is...         | Choose this stack:                                            |
| ------------------------------ | ------------------------------------------------------------- |
| **Max Speed & Simplicity**     | Bun Workspaces + Vite + Bun Native API + Docker DB            |
| **Enterprise Support & Scale** | pnpm + Turborepo + Next.js + Docker DB                        |
| **Your current configuration** | Unwise. Too many overlapping compilers and conflicting tools. |

To help you fix this before writing too much code, let me know:

- Is your goal to learn **Bun's specific features**, or do you just want the **fastest possible workflow**?
- Are you deploying this to a server later (like **AWS, Fly.io, Vercel**), or is it a local-only project?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

## i do not want to hardcode ports

To avoid hardcoding ports, the proven industry standard is to <mark>use<span> </span><strong>Dynamic Port Allocation</strong><span> </span>handled entirely by your process manager and runtime engine</mark>.

Instead of writing numbers like `5000` or `1234` in your source code, you assign ports dynamically at boot time using **Environment Variables (`process.env.PORT` or `Bun.env.PORT`)**.

Here is the clean, de facto way to set this up using **Bun Workspaces** and **Vite** (the most robust stack to achieve this seamlessly).

### 1. The Strategy

- **The OS assigns a random open port** to the backend automatically.
- **The backend saves its assigned port** to a temporary environment file.
- **Vite reads that file** on startup to automatically configure its proxy.

***

### 2. The Configuration Files

### `apps/backend/index.ts`

When setting up `Bun.serve`, pass `port: 0`. The operating system will instantly bind the server to any completely free, random port. Once running, the script writes that dynamic port to a shared file.

typescript

```
import { writeFileSync } from "fs";
import { join } from "path";

const server = Bun.serve({
  port: 0, // 👈 0 tells the OS to assign a random, open port automatically
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/api/health") {
      return Response.json({ status: "ok", engine: "bun" });
    }
    return new Response("Not Found", { status: 404 });
  },
});

// Broadcast the dynamically assigned port to the workspace root
const portFile = join(process.cwd(), "../../.env.shared");
writeFileSync(portFile, `VITE_BACKEND_PORT=${server.port}\n`);

console.log(`🚀 API dynamically booted on port: ${server.port}`);
```

Use code with caution.

### `apps/frontend/vite.config.ts`

Vite has built-in utility functions to load environment variables. It reads the shared file generated by the backend and builds the proxy object dynamically.

typescript

```
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/react';

export default defineConfig(({ mode }) => {
  // Load the shared environment file from the workspace root
  const env = loadEnv(mode, process.cwd() + '/../..', 'VITE_');
  const backendPort = env.VITE_BACKEND_PORT || 5000; // Fallback just in case

  return {
    plugins: [react()],
    server: {
      port: 0, // 👈 Vite also boots on a random open port, ensuring zero conflicts
      proxy: {
        '/api': {
          target: `http://localhost:${backendPort}`,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
```

Use code with caution.

### `package.json` (Root Workspace)

In a zero-hardcoded environment, you drop Turborepo or Concurrently. Bun's native filtering allows you to start the backend a split-second before the frontend so the port file generates cleanly.

json

```
{
  "name": "zero-port-monorepo",
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "dev:backend": "bun --watch apps/backend/index.ts",
    "dev:frontend": "bun --filter frontend dev",
    "dev": "bun run dev:backend & sleep 0.5 && bun run dev:frontend"
  }
}
```

Use code with caution.

***

### Why this is the ultimate "Zero-Hardcode" setup

1. **Zero Port Collisions:** You can copy this project folder 5 times on your machine and run `bun dev` inside all of them simultaneously. Every app instance will quietly find its own free ports without a single crash.
2. **Deterministic UI:** Vite prints its own random port to your terminal console at the very end of the boot sequence (e.g., `Local: http://localhost:59281/`). You click that single link, and everything works.

Would you like to see how to hook your **database string** into this dynamic environment format so you don't have to hardcode passwords or hostnames either?

- [link](https://www.reddit.com/r/dotnet/comments/1dcs42y/new%5Fcomputer%5Fcant%5Fbind%5Fto%5Fsame%5Fport%5Fnumber%5Fanymore/)\
  New computer, can't bind to same port number anymore : r/dotnet\
  Jun 10, 2024 — Can people stop hard coding to dynamic allocation ports? Those are (usually) for cases where you don't need to know which port you...\
  \
  Reddit
- [link](https://www.dhiwise.com/blog/design-converter/how-to-use-npx-kill-port-to-stop-running-processes)\
  How to Use Npx Kill Port to Stop Running Processes\
  Jan 27, 2025 — One effective technique is using environment variables to dynamically assign a specified port. This approach allows you to configu...\
  \
  DhiWise
- [link](https://github.com/microsoft/aspire/discussions/3702)\
  Overriding service port and exposing http endpoints not working with preview 5 · microsoft aspire · Discussion #3702\
  Apr 15, 2024 — If you want to retain the proxy you'll need to make your port allocations dynamic. The WithEndpoint(...) and WithHttpEndpoint(...)\
  \
  \
  GitHub

## use bun and parceljs

Using **Bun** and **Parcel** together with dynamic ports requires a specific approach because Parcel does not natively support dynamic JavaScript configurations for its `.proxyrc` file.

To solve this without hardcoding ports, the proven pattern is to use a **lightweight initialization script** when you run `bun dev`. This script asks the OS for a free port, assigns it to Bun, and dynamically writes a `.proxyrc.json` file for Parcel _on the fly_ before launching the servers.

Here is the complete, bulletproof setup.

### 1. Project Directory Structure

text

```
my-app/
├── apps/
│   ├── backend/
│   │   ├── index.ts
│   │   └── package.json
│   └── frontend/
│       ├── src/
│       │   ├── index.html
│       │   └── index.ts
│       └── package.json    # Note: No static .proxyrc file!
├── package.json            # Root workspace
└── start-dev.ts            # The Port Orchestrator script
```

Use code with caution.

### 2. The Port Orchestrator (`start-dev.ts`)

Create this file in your root directory. It grabs a free port, generates Parcel's proxy configuration, and boots both processes simultaneously using Bun's high-performance subprocess API.

typescript

```
import { writeFileSync } from "fs";
import { join } from "path";

// 1. Ask the OS to find a completely free random port
const server = Bun.serve({ port: 0, fetch() { return new Response(); } });
const BACKEND_PORT = server.port;
server.stop(); // Immediately release it so our actual backend can take it

// 2. Generate the temporary Parcel proxy file dynamically
const proxyPath = join(process.cwd(), "apps/frontend/.proxyrc.json");
const proxyConfig = {
  "/api": {
    "target": `http://localhost:${BACKEND_PORT}`
  }
};
writeFileSync(proxyPath, JSON.stringify(proxyConfig, null, 2));

console.log(`📡 Mapping Parcel proxy to dynamic backend port: ${BACKEND_PORT}`);

// 3. Boot both apps simultaneously using Bun's native process manager
const backendProcess = Bun.spawn(["bun", "--watch", "apps/backend/index.ts"], {
  env: { ...process.env, PORT: BACKEND_PORT.toString() },
  stdout: "inherit",
  stderr: "inherit",
});

const frontendProcess = Bun.spawn(["bun", "--filter", "frontend", "dev"], {
  stdout: "inherit",
  stderr: "inherit",
});

// Clean up background tasks if the user hits Ctrl+C
process.on("SIGINT", () => {
  backendProcess.kill();
  frontendProcess.kill();
  process.exit();
});
```

Use code with caution.

### 3. Root Workspace Configuration (`package.json`)

Point your main `dev` command straight to your orchestration script.

json

```
{
  "name": "bun-parcel-dynamic",
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "dev": "bun run start-dev.ts"
  }
}
```

Use code with caution.

### 4. The Backend (`apps/backend/index.ts`)

Your backend reads the assigned dynamic port directly from `process.env.PORT`.

typescript

```
const port = parseInt(process.env.PORT || "5000", 10);

Bun.serve({
  port: port,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/data") {
      return Response.json({
        message: "Hello from Bun's native HTTP server!",
        dynamicPortUsed: port
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🚀 Backend successfully listening on port ${port}`);
```

Use code with caution.

### 5. The Frontend (`apps/frontend/package.json`)

Set Parcel to use port `0` as well. This guarantees that your frontend web server also boots on a completely free, collision-free port every single time.

json

```
{
  "name": "frontend",
  "private": true,
  "scripts": {
    "dev": "parcel src/index.html --port 0"
  },
  "devDependencies": {
    "parcel": "^2.12.0"
  }
}
```

Use code with caution.

### Launching the Workspace

Run the following command in your terminal:

bash

```
bun dev
```

Use code with caution.

**How it works seamlessly:**

1. The script finds a free port (e.g., `59124`).
2. It generates `apps/frontend/.proxyrc.json` pointing to `http://localhost:59124`.
3. Bun launches the API server strictly on port `59124`.
4. Parcel boots up on its own random port (e.g., `http://localhost:38241`) and reads the newly generated proxy file.
5. You click the URL Parcel outputs. Any requests to `/api/data` flow directly into Bun without cross-origin resource sharing (CORS) blocks or hardcoded parameters.

Would you like to see how to inject your **database configuration** into this startup script so database connection strings are handled dynamically too?

## can i avoid running the backend on the localhost and simply call some functions directly on certain routes

<mark><span>Yes, you can absolutely do this</span></mark>. You are looking for **Server Functions** (often called **RPC** or Remote Procedure Calls).

Instead of writing `fetch("/api/users")` and maintaining a backend process listening on localhost, your frontend code directly imports your backend JavaScript function. Behind the scenes, the tooling automatically transforms that function call into a network request. [link](https://www.reddit.com/r/reactjs/comments/1sxdseu/should%5Fi%5Fuse%5Ftasntack%5Fstart%5Fwith%5Fthe%5Fseparate/)

The industry refers to this architecture as a **BFF (Backend-for-Frontend)** or a meta-framework. Because you explicitly want to stick with **Bun** and **Parcel**, here is how to achieve it. [link](https://www.reddit.com/r/nextjs/comments/1ju9gv1/debate%5Fshould%5Fall%5Fapi%5Fcalls%5Fin%5Fnextjs%5F15%5Fapp/)

***

### Step 1: Install `@tanstack/zod-rpc`

While frameworks like Next.js have this built-in via "Server Actions," you can achieve this exact developer experience in a plain **Parcel + Bun** setup using a lightweight RPC library like **Hono RPC** or **TanStack Zod-RPC**.

Install the safe runtime validation library in your monorepo workspace:

bash

```
bun add @tanstack/zod-rpc zod
```

Use code with caution.

### Step 2: Define Functions on the Backend (`apps/backend/functions.ts`)

Create your database logic as plain TypeScript functions. You wrap them with type definitions so your frontend safely knows what arguments they expect.

typescript

```
import { z } from "zod";
import { createServerFunctions } from "@tanstack/zod-rpc";

// 1. Define the safe schema and the actual function
export const serverFunctions = createServerFunctions({
  getUser: {
    input: z.object({ id: z.string() }),
    execute: async ({ id }) => {
      // 💡 Put your direct Database/SDK code here
      // No localhost API endpoints needed!
      return {
        id,
        name: "Alice Smith",
        role: "Admin",
        dbVerifiedTime: Date.now()
      };
    }
  }
});

// 2. Export the *Type Only* so the frontend stays lightweight
export type ServerFunctions = typeof serverFunctions;
```

Use code with caution.

### Step 3: Call the Functions Directly in the Frontend (`apps/frontend/src/app.ts`)

In your Parcel app, you import the client initialization and call the backend function like local code. You get full autocompletion, type-safety, and Zero hardcoded ports.

typescript

```
import { createClient } from "@tanstack/zod-rpc/client";
import type { ServerFunctions } from "../../backend/functions"; // Type-only import!

// Initialize the RPC client pointing to the proxy router
const backend = createClient<ServerFunctions>({
  url: "/api-rpc",
});

async function renderDashboard() {
  // 🚀 Look Ma, no fetch(), no URLs, no string endpoints!
  const user = await backend.getUser({ id: "user_9921" });

  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML = `<h1>Welcome back, ${user.name}!</h1>`;
  }
}

renderDashboard();
```

Use code with caution.

***

### Why this addresses your exact problem

1. **Zero Backend Localhost Exposing**: The frontend browser has zero awareness of where the function runs physically. [link](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)
2. **Zero Port Configuration**: Parcel maps `/api-rpc` to Bun once via the underlying proxy. Your actual code strictly deals with standard TypeScript functions. [link](https://www.reddit.com/r/webdev/comments/1hj4xla/is%5Fit%5Factually%5Fa%5Fbad%5Fpractice%5Ffor%5Ffrontend%5Fto/)
3. **Optimized Build**: Because you only imported `type ServerFunctions` in the frontend, Parcel guarantees your database credentials, SDK keys, and server dependencies are never leaked or bundled into the client browser package.

If you don't want to wire up custom RPC tools, would you like to see how to use **TanStack Start** or **Next.js**, which provide this direct `use server` function behavior natively out-of-the-box? [link](https://www.reddit.com/r/reactjs/comments/1sxdseu/should%5Fi%5Fuse%5Ftasntack%5Fstart%5Fwith%5Fthe%5Fseparate/)

- [link](https://www.reddit.com/r/webdev/comments/1hj4xla/is%5Fit%5Factually%5Fa%5Fbad%5Fpractice%5Ffor%5Ffrontend%5Fto/)\
  Is it actually a bad practice for frontend to call the backend API using absolute URLs? : r/webdev\
  Dec 21, 2024 — According to a Reddit user, calling the backend API directly from the frontend is not preferred because it can lead to more comple...\
  Reddit
- [link](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)\
  Common mistakes with the Next.js App Router and how to fix ...\
  Jan 8, 2024 — Both Route Handlers and Server Components run securely on the server. You don't need the additional network hop. Instead, you can ...\
  Vercel
- [link](https://www.reddit.com/r/reactjs/comments/1sxdseu/should%5Fi%5Fuse%5Ftasntack%5Fstart%5Fwith%5Fthe%5Fseparate/)\
  Should I use Tasntack Start with the separate server ... - Reddit\
  Apr 27, 2026 — In a server function, you just await auth() to get the user ID and any custom claims attached to the session. You can then use tha...\
  Reddit·r/reactjs

Show all

## no wrappers just give me the direct methods

If you want **zero wrapper libraries, zero frameworks, and zero abstract layers**, you achieve this by writing your backend files as standard **HTTP route handlers** using Bun’s native runtime.

On the frontend, you map your routes directly to the file paths. Parcel handles the static routing proxy, and Bun maps the matching URL directly to an imported function.

Here is the exact code to execute raw function routing.

### 1. The Raw Frontend (`apps/frontend/src/index.ts`)

Instead of using complex API fetch wrappers, you call functions by hitting the exact URL path that matches your server logic.

typescript

```
async function loadUserData(userId: string) {
  // Call the function directly over a clean semantic route
  const response = await fetch('/api/functions/getUser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: userId })
  });

  return await response.json();
}

// Usage
loadUserData("123").then(data => {
  console.log("Direct function data received:", data);
});
```

Use code with caution.

### 2. The Direct Backend Router (`apps/backend/index.ts`)

Instead of setting up full REST endpoint controllers, your router maps incoming URLs directly to individual TypeScript functions.

typescript

```
import { getUser, deleteUser } from "./db-functions";

// A clean map linking string routes to imported functions
const functionRegistry: Record<string, (body: any) => Promise<any>> = {
  getUser,
  deleteUser
};

Bun.serve({
  port: parseInt(process.env.PORT || "5000"),
  async fetch(req) {
    const url = new URL(req.url);

    // Look for routes explicitly calling a specific function
    if (url.pathname.startsWith("/api/functions/")) {
      const functionName = url.pathname.replace("/api/functions/", "");
      const targetFunction = functionRegistry[functionName];

      if (!targetFunction) {
        return new Response("Function not found", { status: 404 });
      }

      // Read the raw JSON payload passed from the frontend
      const body = await req.json().catch(() => ({}));

      // Execute the database/SDK code directly
      const result = await targetFunction(body);

      return Response.json(result);
    }

    return new Response("Not Found", { status: 404 });
  },
});
```

Use code with caution.

### 3. The Isolated Functions (`apps/backend/db-functions.ts`)

Your business logic is completely isolated. It contains zero HTTP code, zero request/response wrappers, and talks directly to your database or SDK.

typescript

```
// Connect your Database/SDKs here natively
// import { myDatabaseClient } from "./db-client";

export async function getUser(data: { id: string }) {
  // Directly write your raw DB queries here
  // const user = await myDatabaseClient.find(data.id);

  return {
    id: data.id,
    name: "John Doe",
    source: "Direct DB execution"
  };
}

export async function deleteUser(data: { id: string }) {
  return {
    success: true,
    deletedId: data.id
  };
}
```

Use code with caution.

### Why this fits your requirements

- **Zero Wrappers:** No third-party RPC libraries, no tRPC, no framework-specific hooks.
- **No Hardcoded Ports:** Parcel proxies `/api` to the backend. The dynamic port generator script we built earlier handles the networking behind the scenes.
- **Direct Function Execution:** Adding a new capability to your application requires only two steps: write the raw function in `db-functions.ts`, and add its name to the `functionRegistry` map.

Would you like to see how to instantly enforce basic **TypeScript type safety** between your frontend data payload and these direct backend functions so you catch typing bugs at compile time?

## i mean no bun serve at all. like, i have backend/index.ts. a function, server(options). tell parcel, whenever called, call server(options)

To achieve this exact workflow, you use a **`.proxyrc.js`** file. [link](https://liman.io/blog/static-files-development-parceljs)

Parcel's built-in dev server allows you to export a standard JavaScript function as a piece of Connect/Express-style middleware inside `.proxyrc.js`. This completely eliminates `Bun.serve`, background loops, or dynamic ports. Whenever a browser hits an `/api` route, **Parcel intercepts it directly in its own thread and calls your function.** [link](https://bun.com/docs/runtime/http/routing)

Here is the exact code.

### 1. The Dynamic Entry Point (`.proxyrc.js`)

Create this file in your frontend root directory. Parcel automatically detects it and uses your backend file as a functional plugin. [link](https://liman.io/blog/static-files-development-parceljs)

javascript

```
const { myBackendServer } = require("../backend/index.ts");

module.exports = function (app) {
  // Catch any incoming request pointing to /api
  app.use("/api", async (req, res, next) => {
    try {
      // Direct JavaScript invocation - zero HTTP networking, zero background ports
      await myBackendServer(req, res);
    } catch (err) {
      next(err);
    }
  });
};
```

Use code with caution.

### 2. The Raw Function (`apps/backend/index.ts`)

Your backend file exports a standard JavaScript function that processes the incoming request objects passed directly from Parcel's internal process.

typescript

```
import type { IncomingMessage, ServerResponse } from "http";

export async function myBackendServer(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url || "", `http://${req.headers.host}`);

  // Handle your SDK or DB calculations here directly
  if (url.pathname === "/users") {
    const data = {
      message: "Executed directly inside Parcel's memory space!",
      timestamp: Date.now()
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
}
```

Use code with caution.

### 3. The Front-end Code (`apps/frontend/src/index.ts`)

Your front-end fetches code exactly the same way without knowing it's bypassing network hops.

typescript

```
async function getDirectData() {
  // This maps directly to the app.use('/api') interceptor in .proxyrc.js
  const res = await fetch("/api/users");
  const data = await res.json();
  console.log(data);
}

getDirectData();
```

Use code with caution.

### Why this solves your query perfectly:

1. **Zero Port Mapping:** Parcel fires up on its default dev port (e.g., `1234`). Your backend runtime has no concept of a port at all.
2. **No Background Processes:** You do not need to run `bun run server.ts` or a secondary process watcher. Running `parcel src/index.html` loads your TypeScript backend straight into memory.
3. **True Monolith Experience:** Everything lives inside one unified engine. [link](https://parceljs.org/features/development/)

If you want to optimize how payload parsing works here, would you like to see how to intercept **POST body data** inside this direct middleware architecture?

- [link](https://parceljs.org/features/cli/)\
  CLI - Parcel\
  The parcel CLI is the most common way to use Parcel. It supports three different commands: serve , watch , and build . parcel \[ser...\
  Parcel.js
- [link](https://bun.com/docs/runtime/http/routing)\
  Routing - Bun\
  fetch request handler. The fetch handler handles incoming requests that weren't matched by any route. It receives a Request object...\
  Bun
- [link](https://parceljs.org/features/development/)\
  Development - Parcel\
  Parcel's builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve...\
  Parcel.js

Show all

## use modern es modules

To use modern ES Modules (`import`/`export`) inside a Parcel `.proxyrc` configuration, you must change the file extension to **`.proxyrc.cjs`** or **`.proxyrc.js`** (with `"type": "module"` in your package.json).

Because Parcel's configuration runtime uses [Node.js](https://nodejs.org/en) under the hood, you cannot natively write top-level `import` statements directly in the proxy file if it imports TypeScript files. Instead, you use the standard dynamic **`await import()`** syntax.

Here is the modern ES Module architecture.

### 1. The Async ES Module Interceptor (`.proxyrc.js`)

Create this file in your frontend root directory. It dynamically imports your backend TypeScript file using modern ESM specs.

javascript

```
export default async function (app) {
  // Dynamically import your ESM TypeScript backend file
  const { myBackendServer } = await import("../backend/index.ts");

  app.use("/api", async (req, res, next) => {
    try {
      // Execute the function directly within Parcel's memory space
      await myBackendServer(req, res);
    } catch (err) {
      next(err);
    }
  });
}
```

Use code with caution.

### 2. The Clean ESM Backend (`apps/backend/index.ts`)

Your backend uses standard, modern ES Module exports. It reads the incoming request stream passed from Parcel and writes data back cleanly.

typescript

```
import type { IncomingMessage, ServerResponse } from "http";

export async function myBackendServer(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url || "", `http://${req.headers.host}`);

  // 1. Direct function route matching
  if (url.pathname === "/users") {
    // 💡 Execute your DB queries or SDK calls directly here
    const payload = {
      message: "Hello from a pure ES Module backend function!",
      runtime: "Parcel Native Middleware",
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(payload));
    return;
  }

  // 2. Fallback for unhandled paths
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Function Route Not Found");
}
```

Use code with caution.

### 3. Ensure your Workspace enforces ESM (`package.json`)

Make sure your frontend and backend `package.json` files contain the `"type": "module"` flag so both Bun and Parcel parse files as strict ES Modules.

json

```
{
  "name": "my-app",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "parcel apps/frontend/src/index.html"
  }
}
```

Use code with caution.

### The Single-Command Reality

Now, you have zero background tasks, zero database-to-API local server bridges, and absolutely zero port designations. You simply type:

bash

```
bun dev
```

Use code with caution.

Parcel hosts your front-end bundle. When the browser triggers `/api/users`, Parcel passes the event straight to your modern `myBackendServer` function in memory.

If you are passing data objects from your frontend, would you like to see the cleanest ESM way to **parse raw JSON POST requests** inside this specific function layout?

- [link](https://medium.com/@under%5Fthe%5Fhook/2-module-systems-commonjs-and-es-modules-5fa208194ab5)\
  2 module systems: CommonJS and ES Modules | by #Under\_The\_Hook\
  Dec 23, 2023 — Dual Package Hazard ESM importing CJS: ESM can import CJS without issues using ' import'. CJS importing ESM: If you use CommonJS, ...\
  \
  \
  Medium

- [link](https://medium.com/@profoliohub/node-js-interview-essentials-node-js-module-system-commonjs-vs-es-modules-cf3eadddb474)\
  Node.js Interview Essentials: Node.js Module System — CommonJS vs. ES Modules\
  Sep 13, 2024 — Key Takeaways: CommonJS: The traditional module system in Node. js, using module. ES Modules: The modern, standardized module syst...\
  \
  \
  Medium

- [link](https://www.codecapers.com.au/live-reload-across-the-stack/)\
  Live reload across the stack\
  Mar 11, 2022 — Live reload in the frontend with Parcel With the sixth example, we finally arrive at the frontend! Parcel is an easy to use fronte...\
  \
  \
  www.codecapers.com.au

# do the web dev server and the backend api run on different ports in the defacto way

<mark><span>Yes, in the standard industry workflow, the web development server and the backend API run on different ports</span></mark>.

### Why They Use Different Ports

- **Process Isolation:** They are two distinct software applications running simultaneously on your local machine.
- **Port Monopolization:** A single port (like `3000`) can only be bound to one active process at a time.
- **Separation of Concerns:** The dev server handles frontend asset compilation, while the API handles data and business logic.

### Common Port Configurations

- **Frontend Dev Server:** Typically runs on ports `3000` (React/Next.js), `5173` (Vite), or `4200` (Angular).
- **Backend API Server:** Typically runs on ports `5000`, `8000`, or `8083` (Express, Python, Java).

### Connecting the Two

Because they run on different ports, the browser treats them as different origins. Developers handle this in two standard ways:

- **Proxying:** You configure the frontend dev server to automatically forward API requests (e.g., `/api/users`) to the backend port.
- **CORS:** You enable Cross-Origin Resource Sharing on the backend to explicitly allow requests coming from the frontend port.

To help tie this to your specific project, could you let me know **what frontend framework** and **what backend language/framework** you are currently using?

- [link](https://medium.com/@AlexanderObregon/frontend-proxy-paths-in-spring-boot-with-react-dev-server-2b18d136fc64)\
  Frontend Proxy Paths in Spring Boot with React Dev Server\
  Aug 13, 2025 — Developing a web application that has a Spring Boot backend and a React ( React app ) frontend often means running two servers dur...\
  \
  \
  Medium
- [link](https://weblog.west-wind.com/posts/2017/mar/16/more-on-aspnet-core-running-under-iis)\
  More on ASP.NET Core Running under IIS\
  Mar 16, 2017 — If you're building a rich client application for your front end - like an Angular or React app for example - you are probably alre...\
  \
  \
  West Wind Technologies
- [link](https://www.ziprecruiter.com/e/Web-Api-Developer-What-is-the-difference-between-Web-Api-Developer-vs-Backend-Developer)\
  What is the difference between Web Api Developer vs Backend Developer\
  What is the difference between Web Api Developer vs Backend Developer? Web Api Developers focus primarily on designing and impleme...\
  \
  ZipRecruiter

Show all

## do they run on different ports under the hood even if you proxy it

Yes, they absolutely run on different ports under the hood even when using a proxy.

### How it Works Behind the Scenes

The proxy does not merge the servers; it only acts as a middleman.

- **The Reality:** Both servers remain completely separate processes running on their own unique ports (e.g., frontend on `5173` and backend on `8000`).
- **The Trick:** The frontend development server listens for specific URL paths (like `/api/*`).
- **The Hand-off:** When you make a request to `/api/users`, the frontend server intercepts it and quietly forwards it to port `8000` in the background.

### Why We Do This

Using a proxy is entirely a trick to fool the browser.

- **Bypassing CORS:** Browsers block requests between different ports due to Same-Origin Policy.
- **Simulating Production:** It makes the browser think both frontend and backend live on the exact same port.
- **Cleaner Code:** You can use relative URLs (like `/api/login`) in your frontend code instead of hardcoding absolute URLs (like `http://localhost:8000/api/login`).

If you are setting this up right now, I can give you the exact code snippet to configure it if you let me know **what build tool** you use (like Vite, Next.js, or Create React App).

- [link](https://proxysql.com/blog/multiple-proxysql-on-same-ports/)\
  Multiple ProxySQL instances on same ports, and seamless upgrade — ProxySQL Blog\
  Mar 19, 2017 — ProxySQL allows to have multiple processes, even different versions (or different configurations) running at the same time … on th...\
  \
  \
  ProxySQL
- [link](https://blog.ip2location.com/knowledge-base/how-different-proxy-types-can-affect-your-business/)\
  How different proxy types can affect your business |\
  May 22, 2026 — What a proxy does is basically the job of a middleman. Essentially, one party will give orders to the proxy server and the proxy w...\
  \
  \
  IP2Location
- [link](https://dev.to/nikhilponnuru/make-a-request-between-frontend-and-backend-locally-running-on-different-ports-without-cors-issue-4oje)\
  Make a request between frontend and backend locally running on different ports without CORS issue\
  Jun 17, 2019 — Now the beauty of using a reverse proxy is you can run the frontend and backend at the same port 8000. But didn't we learn that a ...\
  \
  \
  DEV Community

Show all

## what about proxy wo a backend on localhost, like just passing to a ts function. dep free.

To do this completely dependency-free on localhost without a separate backend process, you cannot use a traditional web proxy because there is no second port to forward requests to.

Instead, the standard approach is to use a **Service Worker**.

A Service Worker runs inside the browser, intercepts network requests before they leave the machine, and routes them directly to a local TypeScript (compiled to JavaScript) function.

### How to Implement It (Dependency-Free)

Here is how you intercept a frontend `fetch()` call and route it directly to a local function.

### 1. The Service Worker (`sw.js`)

This file must live in your public folder. It listens for network requests and answers them locally.

javascript

```
// Local mock database or logic
const handleApiRoute = (url, method) => {
  if (url.pathname === '/api/users' && method === 'GET') {
    return { status: 200, data: [{ id: 1, name: 'Alice' }] };
  }
  return { status: 404, data: { error: 'Not Found' } };
};

// Intercept all fetch requests
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only intercept requests matching your API path
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      (async () => {
        // Run your local mock backend function
        const result = handleApiRoute(url, event.request.method);

        // Return a fake network response
        return new Response(JSON.stringify(result.data), {
          status: result.status,
          headers: { 'Content-Type': 'application/json' }
        });
      })()
    );
  }
});
```

Use code with caution.

### 2. Register the Worker in your App (`main.ts`)

You must register the file when your frontend application boots up.

typescript

```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Mock API Service Worker ready!', reg.scope))
      .catch(err => console.error('Registration failed:', err));
  });
}
```

Use code with caution.

### 3. Make the API Call (`app.ts`)

Your frontend code looks exactly like a real HTTP request. The browser network tab will even show it as a request, but it never hits a backend port.

typescript

```
async function loadData() {
  // This looks like a network call, but it executes your local JS/TS function!
  const res = await fetch('/api/users');
  const data = await res.json();
  console.log(data); // [{ id: 1, name: 'Alice' }]
}
```

Use code with caution.

### Alternatives and Trade-offs

- **Direct Imports:** The simplest alternative is to just import your TS function directly into your component (`import { getData } from './api'`). However, this mixes your frontend code with data-fetching logic, making it harder to swap out for a real backend later.
- **Service Workers:** This is the best approach because it keeps your frontend code "pure" (using standard `fetch` syntax). When you eventually build a real backend, you delete the service worker, and your frontend code doesn't have to change at all.

Would you like help translating this pattern into a **specific framework setup**, or would you like to see how to handle **POST requests and data payloads** using this method?

- [link](https://www.tmssoftware.com/site/blog.asp?post=960\&srsltid=AfmBOorDMhfuZJdSd9SBWE6zUOTbSKEdoy4LpSFCHjHJG4Th2IoC3%5Fz2)\
  TMS WEB Core and More with Andrew: PWA\
  Jul 7, 2022 — A service worker must be present. This is a bit of JavaScript that in some ways serves a function that is a bit like a proxy serve...\
  \
  \
  TMS Software
- [link](https://heynode.com/tutorial/what-api-proxy/)\
  What Is an API Proxy?\
  When changes occur on the backend, someone just needs to fix the API proxy implementation, and the frontend won't need to change a...\
  \
  \
  HeyNode

## i mean, tell parceljs, when api is hit, pass the payload to backend/index.ts directly

Yes, you can absolutely do this natively in [Parcel JS](https://parceljs.org/). Parcel allows you to swap out its standard JSON proxy config for a `.proxyrc.js` file. This file exposes the underlying [Connect-compatible middleware app](https://parcel2-docs.vercel.app/features/api-proxy/), allowing you to bypass a network port entirely and pass payloads straight into a local script. [link](https://parceljs.org/features/development/)

Because `.proxyrc.js` executes inside Node.js, you will need to use standard commonJS syntax (`require`) and compile or resolve your TypeScript backend function dynamically.

Here is the cleanest dependency-free setup to pass payloads directly into your `backend/index.ts`:

### 1. Enable TypeScript Execution in Node

Since your backend is in TypeScript, you need a way for Node to run it directly without manually building it first. Install `ts-node` as a development tool:

bash

```
npm install -D ts-node
```

Use code with caution.

### 2. Create Your Backend Function (`backend/index.ts`)

Set up your backend function to accept Node's standard `req` (IncomingMessage) and `res` (ServerResponse) objects.

typescript

```
import { IncomingMessage, ServerResponse } from 'http';

// Helper to extract JSON body payloads without external packages
const getRequestBody = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch { resolve({}); }
    });
  });
};

export async function handleBackendApi(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url || '', `http://${req.headers.host}`);

  // Set headers for JSON responses
  res.setHeader('Content-Type', 'application/json');

  if (url.pathname === '/api/users' && req.method === 'POST') {
    const payload = await getRequestBody(req);

    // Process your payload directly here
    console.log('Received payload natively:', payload);

    res.statusCode = 200;
    res.end(JSON.stringify({ success: true, received: payload }));
    return;
  }

  // Fallback for missing routes
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Route not found' }));
}
```

Use code with caution.

### 3. Configure the Parcel Proxy (`.proxyrc.js`)

Create a `.proxyrc.js` file in your root folder. This intercepts incoming requests matching `/api` and hands them off directly to the file above. [link](https://parceljs.org/features/development/)

javascript

```
// Register ts-node so Node can dynamically require your TS backend file
require('ts-node').register();

// Import your backend handler function directly
const { handleBackendApi } = require('./backend/index.ts');

module.exports = function (app) {
  // Catch any network requests aimed at /api
  app.use('/api', (req, res, next) => {
    try {
      // Direct local execution! No ports, no secondary servers.
      handleBackendApi(req, res);
    } catch (err) {
      console.error('Backend execution error:', err);
      next(err);
    }
  });
};
```

Use code with caution.

### How it operates under the hood

1. Your frontend fires a standard network request to `/api/users`.
2. Parcel's internal development server intercepts the request before routing it to the frontend build.
3. The `.proxyrc.js` middleware intercepts it, stops it from trying to seek out an external network port, and passes the raw memory streams (`req`, `res`) directly to your TypeScript function. [link](https://parceljs.org/features/development/)

Would you like to see how to adapt this structure to handle **query parameters or URL parameters** without using a third-party framework like Express?

- [link](https://parceljs.org/features/development/)\
  Development\
  The JSON file specifies an object where each key is a pattern against which the URL is matched. The value is a \`http-proxy-middlew...\
  Parcel.js
- [link](https://parceljs.org/)\
  Parcel\
  Hot reloading. When you make a change, Parcel automatically updates your code in the browser – no page reload necessary! http://lo...\
  Parcel.js
- [link](https://liman.io/blog/static-files-development-parceljs)\
  Serve Static Files during Development with Parcel - liman.io\
  Sep 10, 2022 — ... proxied to another destination during development. Creating a .proxyrc.json in the project's root directory, we can configure ...\
  liman.io

Show all

## how to go the cors way

To switch to the **CORS way**, you abandon the previous `.proxyrc.js` in-memory trick. Instead, your backend needs to run as a **completely independent process on its own port**, and you must explicitly configure it to permit cross-origin requests arriving from your Parcel dev server. [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)

Assuming your Parcel dev server is running on `http://localhost:1234` and your independent TypeScript API runs on `http://localhost:8000`, here is how you build a dependency-free CORS implementation. [link](https://github.com/parcel-bundler/parcel/issues/8518)

### 1. Update the Frontend Calls

You can no longer use relative paths like `/api/users` because Parcel isn't catching them anymore. Change your frontend code to point directly to the full backend URL: [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)

typescript

```
async function sendPayload(data) {
  const res = await fetch('http://localhost:8000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}
```

Use code with caution.

### 2. Implement Native CORS in Your Backend (`backend/index.ts`)

When a browser makes a cross-origin `POST` request with a JSON payload, it sends a **preflight request** using the `OPTIONS` HTTP method first. Your backend must acknowledge this preflight request and supply the necessary headers to permit the actual request to proceed. [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)

typescript

```
import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = 8000;
const ALLOWED_ORIGIN = 'http://localhost:1234'; // Your Parcel dev server URL

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  // 1. Set the core CORS headers on every response
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN); // Restrict to your dev frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // 2. Intercept and handle the browser's CORS preflight (OPTIONS) request
  if (req.method === 'OPTIONS') {
    res.statusCode = 204; // No Content
    res.end();
    return;
  }

  // 3. Process your actual API endpoints
  const url = new URL(req.url || '', `http://${req.headers.host}`);

  if (url.pathname === '/api/users' && req.method === 'POST') {
    // Read payload from stream
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      console.log('Received via CORS:', body);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, message: "CORS request succeeded!" }));
    });
    return;
  }

  // Fallback route
  res.statusCode = 404;
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`Backend API running independently on http://localhost:${PORT}`);
});
```

Use code with caution.

### 3. Run Both Servers Simultanously

Because these are now two separate runtime ecosystems, you have to launch them individually in your terminal:

- **Terminal 1 (Frontend):** `npx parcel src/index.html` (runs on `localhost:1234`)
- **Terminal 2 (Backend):** `npx ts-node backend/index.ts` (runs on `localhost:8000`)

### Pros and Cons of Going the CORS Way

- **Pro:** This mirrors how cloud microservices and third-party public APIs actually function in production systems.
- **Pro:** Completely unties your backend architectural logic from Parcel's specific dev tools or files.
- **Con:** You must manage two separate terminal instances during local development.
- **Con:** You must maintain a dynamic configuration strategy so that `ALLOWED_ORIGIN` switches cleanly between your local dev URL and your true production domains. [link](https://www.reddit.com/r/webdev/comments/wwgpcn/how%5Fdo%5Fi%5Fconnect%5Fbackend%5Fto%5Ffrontend%5Fim%5Fhaving/)

Are you managing **user sessions or cookies** across these two origins, or do you need assistance configuring a script to **launch both terminal commands together** with a single command?

- [link](https://www.reddit.com/r/webdev/comments/wwgpcn/how%5Fdo%5Fi%5Fconnect%5Fbackend%5Fto%5Ffrontend%5Fim%5Fhaving/)\
  How do I connect backend to frontend? I'm having issues with ...\
  Aug 24, 2022 — Comments Section. 80mph. • 4y ago. If you want to enable all request: var express = require('express') var cors = require('cors') ...\
  Reddit·r/webdev
- [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)\
  Cross-Origin Resource Sharing (CORS) - MDN Web Docs\
  Nov 30, 2025 — Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, schem...\
  MDN Web Docs
- [link](https://supertokens.com/blog/what-is-cross-origin-resource-sharing)\
  Understanding Cross-Origin Resource Sharing (CORS)\
  Jul 6, 2024 — Avoid using '\*' for Access-Control-Allow-Origin in production environments. Instead, specify the exact origins that should have ac...\
  SuperTokens

Show all

## example. parceljs web. bun backend. cors way. be simple.

Here is the complete, simple setup for a **Parcel frontend** and a **Bun backend** communicating over different ports via **CORS**.

Bun has native TypeScript execution and a highly optimized built-in HTTP server, making this incredibly lightweight and dependency-free.

### 1. Frontend: Parcel Web

**`src/index.html`**

html

```
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Bun + Parcel CORS Example</h1>
  <button id="btn">Send Payload</button>
  <pre id="output"></pre>
  <script type="module" src="./app.ts"></script>
</body>
</html>
```

Use code with caution.

**`src/app.ts`**

typescript

```
document.getElementById('btn')?.addEventListener('click', async () => {
  const output = document.getElementById('output')!;
  output.textContent = 'Sending...';

  try {
    // Explicitly target the Bun backend port
    const res = await fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hello from Parcel!' })
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = 'Error connecting to backend.';
  }
});
```

Use code with caution.

***

### 2. Backend: Bun Server

**`backend/server.ts`**

typescript

```
const PARCEL_ORIGIN = "http://localhost:1234";

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // 1. Handle CORS Preflight (OPTIONS) requests
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": PARCEL_ORIGIN,
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // 2. Handle the actual POST API route
    if (url.pathname === "/api/data" && req.method === "POST") {
      const body = await req.json(); // Bun parses JSON natively
      console.log("Received payload from frontend:", body);

      return new Response(JSON.stringify({ status: "success", echo: body }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": PARCEL_ORIGIN, // Required on the actual response too
        },
      });
    }

    // Fallback 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Bun backend running on http://localhost:3000");
```

Use code with caution.

***

### 3. How to Run It

Open two separate terminal windows to run both servers simultaneously.

- **Terminal 1 (Frontend):**\
  bash

<!---->

```
npx parcel src/index.html --port 1234
```

Use code with caution.

- **Terminal 2 (Backend):**\
  bash

<!---->

```
bun run backend/server.ts
```

Use code with caution.

Open `http://localhost:1234` in your browser, click the button, and you will see the successful cross-origin round trip execute in real-time.

If you want to streamline your workflow, I can show you how to configure a single `package.json` script to **boot up both servers with one command**. Would you like to see that?

- [link](https://dev.to/gaurishhs/create-a-crud-app-with-bun-and-elysiajs-gjn)\
  Create a CRUD App with Bun and Elysia.js\
  Mar 5, 2023 — What is Bun? The cool thing about this is it has built-in TypeScript support, Yes you no longer need tsc, Moreover you can write p...\
  \
  \
  DEV Community

- [link](https://oneuptime.com/blog/post/2026-01-31-bun-rest-api/view)\
  How to Build REST APIs with Bun\
  Jan 31, 2026 — Bun's HTTP server is built on top of highly optimized native code, making it one of the fastest options available for building web...\
  \
  \
  OneUptime

- [link](https://auth0.com/blog/zero-config-javascript-app-prototyping-with-parceljs/)\
  How to do JavaScript App Prototyping with ParcelJS\
  Dec 11, 2018 — Point your browser to that address or click the following link to open it: http://localhost:1234 .\
  \
  \
  Auth0

# 

