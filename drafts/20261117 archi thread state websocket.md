# how to use websocket on hono js

To use WebSockets in Hono, import the **`upgradeWebSocket`** helper from your runtime's adapter package and pass it as a handler to a `.get()` route. Each JavaScript runtime requires a slightly different setup to attach the WebSocket server to your HTTP server. [](https://hono.dev/docs/helpers/websocket)

### 1\. Runtime Setup

Choose the setup below that matches your JavaScript runtime, as detailed in the official [Hono WebSocket Helper documentation](https://hono.dev/docs/helpers/websocket). 

#### **Node.js**

WebSocket support is built into `@hono/node-server`. Install the `ws` package (and `@types/ws` for TypeScript), create a `WebSocketServer` with `{ noServer: true }`, and pass it into `serve()`. [](https://hono.dev/docs/getting-started/nodejs)

Implementation varies slightly by runtime, using `upgradeWebSocket` with handlers like `onMessage` and `onClose`: [](https://hono.dev/docs/helpers/websocket)

* **Node.js**: Use `@hono/node-server` and the `ws` package, passing a `WebSocketServer` instance into the `serve()` function. _(Note: The older `@hono/node-ws` package is deprecated.)_
* **Bun**: Import `upgradeWebSocket` and `websocket` from `@hono/bun`, and export `websocket` alongside `app.fetch`.
* **Cloudflare Workers & Deno**: Handle lifecycle natively by importing `upgradeWebSocket` from `@hono/cloudflare-workers` or `@hono/deno`. [](https://hono.dev/docs/helpers/websocket)

_(Complete code implementations for each runtime can be reviewed in the official [Hono WebSocket Helper documentation](https://hono.dev/docs/helpers/websocket).)_ [](https://hono.dev/docs/helpers/websocket)

#### 2\. Available WebSocket Events

Inside the `upgradeWebSocket` callback, you receive the Hono context `c` and can define lifecycle handlers: [](https://hono.dev/docs/helpers/websocket)

* **`onOpen(event, ws)`**: Triggered when the connection opens.
* **`onMessage(event, ws)`**: Triggered when receiving data via `event.data`.
* **`onClose(event, ws)`**: Triggered when the connection closes.
* **`onError(event, ws)`**: Triggered upon connection errors. [](https://hono.dev/docs/helpers/websocket)

#### 3\. Connecting from a Client

Clients can connect using the standard browser `WebSocket` API or Hono's type-safe RPC client (`hc`). [](https://hono.dev/docs/helpers/websocket)

#### Important Deployment Note

* **Serverless limitations**: Persistent connections are generally not recommended on traditional serverless edge platforms like Vercel.
* **Edge scaling**: For multi-client broadcasting on Cloudflare Workers, integrate Cloudflare Durable Objects and WebSocket Hibernation. [](https://www.reddit.com/r/nextjs/comments/1jhv0hy/websockets%5Fin%5Fhono%5Fjs%5Fwhich%5Fis%5Fdeployed%5Fon%5Fvercel/)

If you'd like help taking this further, let me know:

* Which **runtime** you are targeting (Node.js, Bun, Deno, or Cloudflare Workers)
* Your **use case** (e.g., broadcasting to chat rooms, authentication, or real-time updates)

I can put together a complete, tailored example for your setup.

* [](https://hono.dev/docs/helpers/websocket)  
Hono  
WebSocket Helper - Hono  
November 6, 2026 — WebSocket Helper is a helper for server-side WebSockets in Hono applications. Currently Cloudflare Workers / Pages, Deno, Bun, and...
* [](https://www.reddit.com/r/nextjs/comments/1jhv0hy/websockets%5Fin%5Fhono%5Fjs%5Fwhich%5Fis%5Fdeployed%5Fon%5Fvercel/)  
Reddit·r/nextjs  
Websockets in Hono JS which is deployed on vercel. - Reddit  
March 23, 2025 — WebSockets with Hono JS on Vercel's edge runtime is not recommended due to architectural limitations, which make it wasteful and e...
* [](https://hono.dev/docs/getting-started/nodejs)  
Hono  
Node.js - Hono  
Nov 6, 2026 — use the latest version of each major release. WebSocket WebSocket support is built into @hono/node-server . Then create a WebSocke...

Show all

# how to use websocket on hono js

To use WebSockets in Hono, you use the built-in **WebSocket Helper** (`upgradeWebSocket`) imported from the specific adapter package for your JavaScript runtime. Hono provides unified lifecycle event handlers (`onOpen`, `onMessage`, `onClose`, `onError`) across Cloudflare Workers, Bun, Deno, and Node.js. [](https://hono.dev/docs/helpers/websocket)

### 1\. Setup by Runtime

Because each runtime handles HTTP upgrades differently, the setup varies slightly depending on where your server runs. [](https://hono.dev/docs/helpers/websocket)

#### **Cloudflare Workers**

Install `@hono/cloudflare-workers` and import `upgradeWebSocket` directly. [](https://hono.dev/docs/helpers/websocket)

Define your WebSocket route using `upgradeWebSocket`, implementing lifecycle handlers like `onMessage` and `onClose`, as documented for Cloudflare Workers. [](https://hono.dev/docs/helpers/websocket)

* **Bun:** Import `upgradeWebSocket` and `websocket` from `@hono/bun` and export both `app.fetch` and `websocket` in your server configuration.
* **Node.js:** Use `@hono/node-server` (note that `@hono/node-ws` is deprecated) alongside the `ws` package, creating a `WebSocketServer` with `{ noServer: true }` passed into `serve()`.
* **Deno:** Import `upgradeWebSocket` from `@hono/deno` and serve the application using `Deno.serve(app.fetch)`. [](https://hono.dev/docs/getting-started/nodejs)

#### 2\. Connecting from a Client

Clients can connect using the standard browser `WebSocket` API (`ws://` or `wss://` protocol matching your route) or via Hono's type-safe RPC client (`hc`) by exporting `AppType` and utilizing `.$ws(0)`. [](https://hono.dev/docs/helpers/websocket)

#### Key Considerations

* **Context & Handlers:** The `c` (context) parameter inside `upgradeWebSocket` allows you to access request headers, query parameters, or authentication middleware before setting up handlers. [](https://hono.dev/docs/helpers/websocket)
* **Serverless Deployments:** Persistent WebSocket connections are typically unsupported or costly on standard serverless edges like Vercel; platforms like Cloudflare Workers or Durable Objects are often preferred. [](https://www.reddit.com/r/nextjs/comments/1jhv0hy/websockets%5Fin%5Fhono%5Fjs%5Fwhich%5Fis%5Fdeployed%5Fon%5Fvercel/)

For full code examples and advanced raw socket access, consult the [Hono WebSocket Helper documentation](https://hono.dev/docs/helpers/websocket). 

If you'd like to build this out further, let me know:

* Which **runtime** you are using (Node.js, Bun, Cloudflare, Deno)
* Whether you need **broadcasting/pub-sub** (like a chat room) or **authentication** on the connection

I can put together a complete, tailored example for your setup.

* [](https://hono.dev/docs/helpers/websocket)  
Hono  
WebSocket Helper - Hono  
November 6, 2026 — WebSocket Helper is a helper for server-side WebSockets in Hono applications. Currently Cloudflare Workers / Pages, Deno, Bun, and...
* [](https://dev.to/yutakusuno/hono-simple-messaging-app-using-bun-and-websocket-mnk)  
DEV Community  
\[Hono\] Simple Messaging App Using Bun and WebSocket  
June 9, 2024 — The websocket imported from createBunWebSocket is a Hono middleware, WebSocket handler, implemented for Bun. raw as ServerWebSocke...
* [](https://www.reddit.com/r/nextjs/comments/1jhv0hy/websockets%5Fin%5Fhono%5Fjs%5Fwhich%5Fis%5Fdeployed%5Fon%5Fvercel/)  
Reddit·r/nextjs  
Websockets in Hono JS which is deployed on vercel. - Reddit  
March 23, 2025 — Deploying WebSockets with Hono JS on Vercel's edge runtime is not recommended due to architectural limitations, which make it wast...

Show all


