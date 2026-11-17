# use snake case use fn statement write a ts fn cache(fn) that memoizes output by input for a pure fn

```
function cache<T extends (...args: any[]) => any>(fn: T): T {
  const cache_map = new Map<string, ReturnType<T>>();

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);

    if (cache_map.has(key)) {
      return cache_map.get(key)!;
    }

    const result = fn(...args);
    cache_map.set(key, result);

    return result;
  } as T;
}
```

**Usage:**

```
function add(a: number, b: number): number {
  console.log("computing...");
  return a + b;
}

const cached_add = cache(add);

cached_add(1, 2); // computes: 3
cached_add(1, 2); // cached: 3
cached_add(2, 3); // computes: 5
```

**Notes:**

- Uses `JSON.stringify(args)` as the cache key.
- Works for pure functions with JSON-serializable arguments.
- Uses `Map.has()` so cached `undefined` values are handled correctly.
- Cache lasts as long as the wrapped function exists.

# @Web search how to use websocket on hono nodejs and web

``````md
# @Web search how to use websocket on hono nodejs and web

# **Using WebSockets with Hono (Node.js)**

If you're using **Hono with Node.js**, you can implement WebSockets using the `@hono/node-ws` package.

Hono itself provides a WebSocket API, but the implementation depends on your runtime:

| Runtime            | WebSocket implementation  |
| ------------------ | ------------------------- |
| Node.js            | `@hono/node-ws`           |
| Bun                | `hono/bun`                |
| Cloudflare Workers | `hono/cloudflare-workers` |
| Deno               | `hono/deno`               |

For a Node.js server, I'll use `@hono/node-ws` in the example below.

## **1. Install dependencies**

```
npm install hono @hono/node-server ws
npm install -D @types/ws typescript tsx
```

**Important:** Don't start a new project with `@hono/node-ws`. It is deprecated; WebSocket support is now built into `@hono/node-server`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://hono.dev\&sz=32)

Hono+2



## **2. Create the WebSocket server**

Create `src/index.ts`:

```

import { Hono } from 'hono'
import { serve, upgradeWebSocket } from '@hono/node-server'
import { WebSocketServer } from 'ws'

const app = new Hono()

// Normal HTTP endpoint
app.get('/', (c) => {
  return c.json({ message: 'Hono server is running!' })
})

// WebSocket endpoint
app.get(
  '/ws',
  upgradeWebSocket(() => ({
    onOpen(_event, ws) {
      console.log('Client connected')
      ws.send(JSON.stringify({
        type: 'connected',
        message: 'Welcome!'
      }))
    },

    onMessage(event, ws) {
      console.log('Received:', event.data)

      // Echo message back to client
      ws.send(JSON.stringify({
        type: 'message',
        data: event.data
      }))
    },

    onClose() {
      console.log('Client disconnected')
    },

    onError(event) {
      console.error('WebSocket error:', event)
    }
  }))
)

// Enable WebSocket support
const wss = new WebSocketServer({ noServer: true })

serve({
  fetch: app.fetch,
  port: 3000,
  websocket: { server: wss }
}, (info) => {
  console.log(`Server running at http://localhost:${info.port}`)
})

```

This creates two endpoints:

- `GET http://localhost:3000/` — HTTP API.
- `ws://localhost:3000/ws` — WebSocket connection.

The `upgradeWebSocket()` handler provides lifecycle callbacks such as `onOpen`, `onMessage`, `onClose`, and `onError`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://hono.dev\&sz=32)

Hono+1



## **3. Connect from a web browser**

You don't need another library. Browsers have a native `WebSocket` API.

Create `index.html`:

```

<!DOCTYPE html>
<html>
<head>
  <title>Hono WebSocket Demo</title>
</head>
<body>
  <h1>WebSocket Demo</h1>

  <input id="message" placeholder="Enter message" />
  <button onclick="sendMessage()">Send</button>

  <pre id="output"></pre>

  <script>
    const output = document.getElementById('output')

    const ws = new WebSocket('ws://localhost:3000/ws')

    ws.onopen = () => {
      output.textContent += 'Connected!\n'
    }

    ws.onmessage = (event) => {
      output.textContent += `Server: ${event.data}\n`
    }

    ws.onclose = () => {
      output.textContent += 'Disconnected\n'
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    function sendMessage() {
      const input = document.getElementById('message')

      if (ws.readyState === WebSocket.OPEN) {
        ws.send(input.value)
        input.value = ''
      }
    }
  </script>
</body>
</html>

```

## **4. Run and test**

Start your Hono server:

```
npx tsx src/index.ts
```

Open `index.html` in your browser.

[The ultimate guide to websockets | Everything you need to know | Engati](https://images.openai.com/static-rsc-4/lT5l2xBdigzdYK-7-M9YdGNnlNoAYDeqkM0mGN0sbmG_r3uLDWahNankoBJuTRj2tmNyJ5an8_-F4_s_MnqioizivMTCmflIu1Zej6_3VYXOfT68vI8uU0ogWXGuhLxG5AcWIMJBgsGM2-cZVlOna73BCGI_RfkkTSzEApQr20Y?purpose=inline)

[engati.com](https://www.engati.com/blog/guide-to-websockets?utm_source=chatgpt.com)

The communication flow:

1. Browser connects to `/ws`.
2. Server receives the connection.
3. Browser sends a message.
4. Hono receives it in `onMessage`.
5. Server sends a response using `ws.send()`.
6. Browser receives it in `ws.onmessage`.

## **5. Important things for production**

- **HTTPS websites:** Use `wss://` instead of `ws://` when your frontend is served over HTTPS. Browsers generally block insecure WebSocket connections from secure pages.
- **Authentication:** Validate the user's session or token before accepting a connection.
- **Heartbeat:** Implement ping/pong or heartbeat logic to detect disconnected clients.
- **Broadcast:** Keep track of connected clients if you want to send messages to everyone.
- **Scaling:** If you run multiple Node.js instances, consider Redis Pub/Sub for cross-instance message broadcasting.

## **Official documentation**

- [Hono – Node.js adapter](https://hono.dev/docs/getting-started/nodejs?utm_source=chatgpt.com)
- [Hono – WebSocket Helper](https://hono.dev/docs/helpers/websocket?utm_source=chatgpt.com)
- [@hono/node-server – npm](https://www.npmjs.com/package/%40hono/node-server?utm_source=chatgpt.com)
- [@hono/node-ws – Migration guide](https://www.npmjs.com/package/%40hono/node-ws?activeTab=readme\&utm_source=chatgpt.com)

**My recommendation:** Use `@hono/node-server` + `ws` + the browser's native `WebSocket` API. This is the current recommended approach for a Hono application running on Node.js.

# how to reconnect on close

You can implement **automatic WebSocket reconnection** using the browser's native `WebSocket` API.

The recommended approach is to:

- Reconnect when `onclose` fires.
- Use exponential backoff to avoid overwhelming your server.
- Reset the retry counter after a successful connection.
- Stop retrying when the user intentionally disconnects.

## **1. Browser WebSocket with auto-reconnect**

Use this implementation:

```

const WS_URL = 'ws://localhost:3000/ws'

let ws = null
let reconnectAttempts = 0
let reconnectTimer = null
let shouldReconnect = true

const MAX_RETRIES = 10
const BASE_DELAY = 1000
const MAX_DELAY = 30000

function connectWebSocket() {
  console.log('Connecting...')

  ws = new WebSocket(WS_URL)

  ws.onopen = () => {
    console.log('Connected!')

    // Reset retry counter after successful connection
    reconnectAttempts = 0
  }

  ws.onmessage = (event) => {
    console.log('Received:', event.data)
  }

  ws.onclose = (event) => {
    console.log('Disconnected:', event.code)

    if (shouldReconnect) {
      scheduleReconnect()
    }
  }

  ws.onerror = (error) => {
    console.error('WebSocket error:', error)
    // onclose will handle reconnection
  }
}

function scheduleReconnect() {
  if (reconnectAttempts >= MAX_RETRIES) {
    console.log('Maximum reconnection attempts reached')
    return
  }

  const delay = Math.min(
    BASE_DELAY * 2 ** reconnectAttempts,
    MAX_DELAY
  )

  // Add random jitter to avoid simultaneous reconnects
  const jitter = Math.random() * 1000
  const wait = delay + jitter

  reconnectAttempts++

  console.log(`Reconnecting in ${Math.round(wait)}ms...`)

  reconnectTimer = setTimeout(() => {
    if (shouldReconnect) {
      connectWebSocket()
    }
  }, wait)
}

function disconnectWebSocket() {
  shouldReconnect = false

  clearTimeout(reconnectTimer)

  if (ws) {
    ws.close()
  }
}

// Initial connection
connectWebSocket()

```

## **2. How the retry works**

The exponential backoff looks like this:

| Attempt | Approximate delay |
| ------- | ----------------- |
| 1       | 1 second          |
| 2       | 2 seconds         |
| 3       | 4 seconds         |
| 4       | 8 seconds         |
| 5       | 16 seconds        |
| 6+      | 30 seconds        |

Random jitter adds up to 1 second to each delay.

## **3. Important: Handle connection state**

If you're building a frontend application, you should also track connection status:

```
const status = {
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
  RECONNECTING: 'reconnecting',
  FAILED: 'failed'
}
```

This lets your UI display:

-

  Connected


-

  Reconnecting...


-

  Connection failed



**One important detail:** This implementation retries up to 10 times and then stops. If you want a persistent connection (like chat apps), you can remove the retry limit and keep reconnecting indefinitely.

For production, I'd also recommend implementing heartbeat/ping-pong on the Hono Node.js server to detect dead connections.

# how to reconnect in the vite way, pros cons

If you're using **Vite + Hono (Node.js)**, the best approach is to use Vite's environment variables and WebSocket proxy, while keeping reconnection logic in your frontend application.

One important distinction:

**Vite already has WebSocket reconnection for its own HMR connection**, but that connection is separate from your application's WebSocket. Don't reuse Vite's internal HMR socket for your app.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://vite.dev\&sz=32)

Vite+1



I'd recommend this architecture:

**Vite frontend**

`localhost:5173`

WebSocket /ws

**Vite WebSocket proxy**

`ws: true`

**Hono Node.js**

`localhost:3000`

## **1. Configure Vite proxy**

`vite.config.ts`

```

import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
})

```

Now your frontend can connect to `/ws` without hardcoding the backend address.

## **2. Connect using the browser WebSocket API**

`src/lib/websocket.ts`

```

const WS_URL = `${location.protocol === 'https:' ? 'wss:' : 'ws:'}//${location.host}/ws`

let socket: WebSocket | null = null
let reconnectTimer: ReturnType<typeof setTimeout> | null = null
let attempts = 0
let manuallyClosed = false

const MAX_RETRIES = 10

export function connectWS() {
  if (
    socket?.readyState === WebSocket.OPEN ||
    socket?.readyState === WebSocket.CONNECTING
  ) return

  manuallyClosed = false
  socket = new WebSocket(WS_URL)

  socket.onopen = () => {
    console.log('WebSocket connected')
    attempts = 0
  }

  socket.onmessage = (event) => {
    console.log('Received:', event.data)
  }

  socket.onclose = () => {
    console.log('WebSocket disconnected')

    if (!manuallyClosed) {
      reconnect()
    }
  }

  socket.onerror = (error) => {
    console.error('WebSocket error:', error)
    // onclose handles reconnecting
  }
}

function reconnect() {
  if (manuallyClosed || attempts >= MAX_RETRIES) return

  const delay = Math.min(1000 * 2 ** attempts, 30000)
  const jitter = Math.random() * 1000

  attempts++

  reconnectTimer = setTimeout(() => {
    connectWS()
  }, delay + jitter)
}

export function sendWS(data: unknown) {
  if (socket?.readyState !== WebSocket.OPEN) {
    console.warn('WebSocket is not connected')
    return false
  }

  socket.send(JSON.stringify(data))
  return true
}

export function disconnectWS() {
  manuallyClosed = true

  if (reconnectTimer) {
    clearTimeout(reconnectTimer)
    reconnectTimer = null
  }

  socket?.close()
  socket = null
}

// Start connection
connectWS()

```

## **3. Environment configuration (optional)**

You can also configure the WebSocket endpoint using Vite environment variables.

`.env.development`

```
VITE_WS_PATH=/ws
```

Then:

```
const WS_URL =
  `${location.protocol === 'https:' ? 'wss:' : 'ws:'}` +
  `//${location.host}${import.meta.env.VITE_WS_PATH}`
```

Remember that `VITE_` variables are exposed to browser code, so never put secrets there.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://vite.dev\&sz=32)

Vite



## **4. Vite HMR cleanup**

One thing worth adding: when Vite replaces a module during development, you should clean up the old WebSocket connection.

Add this at the bottom of `websocket.ts`:

```
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    disconnectWS()
  })
}
```

This prevents duplicate WebSocket connections during development.

## **5. Pros and cons**

| Approach                        | Pros                                              | Cons                                          |
| ------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| Native WebSocket + manual retry | No dependencies, full control                     | You write reconnection logic                  |
| Vite proxy + native WebSocket   | Same-origin connection, simple URLs               | Proxy only works in development               |
| Socket.IO                       | Built-in reconnection, rooms, fallback transports | Extra client/server dependencies and protocol |
| `reconnecting-websocket`        | Automatic retry, lightweight                      | Another dependency                            |

## **My recommendation**



Recommended

**Vite proxy + native WebSocket + custom reconnect logic.**



Why?

- No additional frontend dependencies.
- Works naturally with Hono.
- Easy to debug.
- You control retry intervals and connection lifecycle.
- You can use the same `/ws` endpoint in development and production.

One production consideration: configure your production reverse proxy (Nginx, Caddy, etc.) to forward WebSocket upgrades to Hono. Vite's proxy doesn't exist in the production build.

References:

- [Vite server proxy and WebSocket configuration](https://vite.dev/config/server-options?utm_source=chatgpt.com)
- [Vite HMR API](https://vite.dev/guide/api-hmr?utm_source=chatgpt.com)
- [Hono Node.js WebSocket documentation](https://hono.dev/docs/getting-started/nodejs?utm_source=chatgpt.com)

**One question:** Are you using React with Vite, or just vanilla TypeScript? I can show you a reusable React hook or a framework-independent WebSocket manager.

# how to reconnect in the vite way i mean to fetch polling to reconnect, pros cons

Ah, understood! You mean **HTTP Fetch polling instead of WebSocket**: the frontend periodically calls a Hono HTTP endpoint to check whether the server is available, and reconnects or restores its connection when it comes back online.

This is a different architecture from WebSocket reconnection.

For example:

```
Vite frontend
    |
    | GET /api/health every 5 seconds
    |
    v
Hono Node.js
    |
    | 200 OK
    v
Frontend knows server is online
```

You can use this approach without WebSockets at all, or use polling as a fallback when WebSocket disconnects.

## **1. Hono health endpoint**

```
import { Hono } from 'hono'

const app = new Hono()

app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: Date.now()
  })
})

export default app
```

## **2. Vite frontend polling**

Create `src/lib/server-status.ts`:

```
type ServerStatus = 'online' | 'offline' | 'checking'

let status: ServerStatus = 'checking'
let timer: ReturnType<typeof setTimeout> | undefined
let stopped = false

const POLL_INTERVAL = 5000
const REQUEST_TIMEOUT = 3000

async function checkServer(): Promise<boolean> {
  const controller = new AbortController()
  const timeout = setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT
  )

  try {
    const response = await fetch('/api/health', {
      method: 'GET',
      cache: 'no-store',
      signal: controller.signal
    })

    return response.ok
  } catch {
    return false
  } finally {
    clearTimeout(timeout)
  }
}

async function poll() {
  if (stopped) return

  status = 'checking'

  const online = await checkServer()

  if (stopped) return

  const previousStatus = status
  status = online ? 'online' : 'offline'

  console.log('Server status:', status)

  if (online) {
    console.log('Server is available')
  }

  // Schedule next poll
  timer = setTimeout(poll, POLL_INTERVAL)
}

export function startPolling() {
  stopped = false
  clearTimeout(timer)
  poll()
}

export function stopPolling() {
  stopped = true
  clearTimeout(timer)
}

export function getServerStatus() {
  return status
}
```

Start polling:

```
import { startPolling } from './lib/server-status'

startPolling()
```

## **3. Vite proxy configuration**

`vite.config.ts`

```
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
```

Now your frontend calls:

```
fetch('/api/health')
```

No hardcoded backend URL is needed.

## **4. Automatically detect when the server comes back**

One important improvement: only trigger recovery when the server changes from offline to online.

Here's a reusable version:

```
type Status = 'online' | 'offline'

let currentStatus: Status | null = null
let timer: ReturnType<typeof setTimeout>
let stopped = false

const INTERVAL = 5000

async function check() {
  try {
    const res = await fetch('/api/health', {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000)
    })

    return res.ok
  } catch {
    return false
  }
}

async function poll() {
  if (stopped) return

  const online = await check()
  const nextStatus = online ? 'online' : 'offline'

  if (currentStatus !== nextStatus) {
    currentStatus = nextStatus

    console.log('Server status:', nextStatus)

    if (nextStatus === 'online') {
      console.log('Server recovered!')

      // Restore application state here
      // Example: reload data, reconnect WebSocket
    }
  }

  if (!stopped) {
    timer = setTimeout(poll, INTERVAL)
  }
}

export function startPolling() {
  stopped = false
  poll()
}

export function stopPolling() {
  stopped = true
  clearTimeout(timer)
}

export function isServerOnline() {
  return currentStatus === 'online'
}
```

This implementation:

- Checks every 5 seconds.
- Times out requests after 3 seconds.
- Avoids overlapping requests.
- Detects offline → online transitions.
- Can run indefinitely.
- Allows manual start and stop.

## **5. Fetch polling vs WebSocket**

| Feature                 | Fetch polling                   | WebSocket                      |
| ----------------------- | ------------------------------- | ------------------------------ |
| Server health detection | Yes                             | Yes, with heartbeat            |
| Real-time communication | No                              | Yes                            |
| Server pushes messages  | No                              | Yes                            |
| Reconnection complexity | Low                             | Medium                         |
| Network overhead        | Higher                          | Lower when idle                |
| Infrastructure          | Simple HTTP                     | Requires WS support            |
| Best for                | Health checks, periodic updates | Chat, notifications, live data |

## **6. My recommendation**

Best for simple availability checks

Use **Fetch polling** if your goal is just to know whether Hono is online.

Use **WebSocket + Fetch polling** if your application needs real-time communication but also needs reliable server recovery detection.

For example:

```
Application starts
      |
      v
Connect WebSocket
      |
      v
WebSocket disconnected?
      |
      v
Fetch /api/health every 5s
      |
      v
Server online?
      |
      +---- No ----> Keep polling
      |
      +---- Yes ---> Reconnect WebSocket
                         |
                         v
                    Stop polling
```

**One important distinction:** A successful health check only proves that the HTTP endpoint responds. It doesn't guarantee that the WebSocket service, database, or other dependencies are healthy. You can expose a deeper readiness endpoint if needed.

Official references:

- [Vite server configuration](https://vite.dev/config/server-options?utm_source=chatgpt.com)
- [Hono Node.js documentation](https://hono.dev/docs/getting-started/nodejs?utm_source=chatgpt.com)
- [Vite proxy configuration](https://github.com/vitejs/vite/blob/main/docs/config/server-options.md?plain=1\&utm_source=chatgpt.com)

My preference for a typical Hono application: **WebSocket for communication, Fetch polling only for recovery detection.** This avoids unnecessary polling when everything is working.

# pros cons of vite way, i.e. to fetch polling before reconnecting ws

You're describing a **Fetch-before-WebSocket-reconnect strategy**:

When the WebSocket disconnects, don't immediately reconnect. First, periodically call a Hono HTTP health endpoint. Once the server responds successfully, attempt to reconnect the WebSocket.

This is a good approach, especially when your Node.js server may restart or become temporarily unavailable.

## **How it works**

**WebSocket connected**

Normal operation

**WebSocket disconnected**

**Fetch&#x20;**`/api/health`**&#x20;every 5 seconds**

Offline

Keep polling

Online

Reconnect WS

**WebSocket connected again**

## **Pros and cons**

| Advantages                                                       | Disadvantages                                         |
| ---------------------------------------------------------------- | ----------------------------------------------------- |
| Avoids repeatedly attempting WS connections while server is down | Adds HTTP requests every polling interval             |
| Reduces failed WebSocket handshake attempts                      | Recovery is delayed by the polling interval           |
| Useful during backend restarts                                   | Requires an additional health endpoint                |
| Easy to understand and debug                                     | HTTP health success doesn't guarantee WS availability |
| Can detect backend recovery before reconnecting                  | More client-side state management                     |

### **Comparison with direct WebSocket retry**

| Situation                 | Direct WS retry             | Fetch first, then WS              |
| ------------------------- | --------------------------- | --------------------------------- |
| Server temporarily down   | Repeated failed handshakes  | Waits for HTTP recovery           |
| Server restarts           | Eventually reconnects       | Waits until health check succeeds |
| Server is online          | Immediate retry possible    | Waits for next poll               |
| Many clients reconnecting | Can create handshake spikes | Can reduce failed handshakes      |
| Extra HTTP traffic        | No                          | Yes                               |

## **Recommended implementation**

I'd use a hybrid approach:

1. WebSocket disconnects.
2. Start HTTP health polling every 3–5 seconds.
3. When health returns successfully, attempt WebSocket connection.
4. If WebSocket connection fails, resume polling.
5. Once WebSocket opens, stop polling.

One important improvement: don't consider HTTP `200` sufficient if the WebSocket service is not ready. Ideally, your health endpoint should report application readiness.

Also, add randomized jitter to polling intervals so thousands of clients don't hit your health endpoint simultaneously.

## **When I'd choose each approach**

**Fetch first, then reconnect**

Best when your backend frequently restarts, takes time to initialize, or has expensive WebSocket handshakes.

**Direct WebSocket retry**

Best when your backend is stable and you want the fastest possible recovery with minimal implementation complexity.

**My verdict:** For Hono + Node.js, I'd choose Fetch polling before reconnecting if server restarts are common. Otherwise, direct WebSocket retry with exponential backoff is simpler and usually sufficient.

One clarification: this is an application-level strategy, not a built-in Vite feature. Vite's proxy can forward WebSocket connections during development, but your application owns the recovery logic.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://vite.dev\&sz=32)

Vite+1



Official reference: [Vite server and proxy configuration](https://vite.dev/config/server-options?utm_source=chatgpt.com).
``````

# can you use post instead of get for websockets

Yes, but it depends on what you mean by using POST instead of GET for WebSockets.

**For the WebSocket handshake:**

- Traditional WebSocket connections use an HTTP `GET` request with an `Upgrade: websocket` header.
- You cannot simply replace that handshake with an HTTP `POST` request under the standard WebSocket protocol (RFC 6455).

**Alternatives:**

1. **Standard WebSocket:** Uses HTTP GET for the initial handshake, then switches to the WebSocket protocol.
2. **WebSocket over HTTP/2 (RFC 8441):** Uses extended CONNECT, not POST.
3. **WebSocket over HTTP/3 (RFC 9220):** Also uses extended CONNECT.
4. **Custom POST-based streaming:** You can use POST with streaming responses (e.g. Fetch API + ReadableStream), but this isn't a standard WebSocket connection.

**If your concern is sending sensitive data in the URL**, you can:

- Authenticate using cookies or headers.
- Send authentication data immediately after the WebSocket connection is established.
- Use a short-lived, single-use connection token.

**What are you trying to achieve by replacing GET with POST?** For example, avoiding URL query parameters, bypassing proxy restrictions, or sending a large request body?

# . thinking

it works iff it works.

as mentioned, fetch polling is quite specific for unstable server. and when you dont wanna print errors.

# why is react state snapshot while ref isnt, what if react had use\_state\_ref that behaves that same wo rerendering, or what if react had use\_ref\_state that proxied ref to rerender

**React state acts as a snapshot because each render is an isolated function call with its own fixed values, whereas a ref is a single mutable object persisted across renders** **.** [](https://react.dev/learn/referencing-values-with-refs)

### Why State is a Snapshot vs. Ref is Mutable

* **State and JavaScript closures.** Every time a React component renders, it invokes the component function. The `useState` hook returns the value for that specific execution, locking it into that render's closure. Calling `setState` does not change the variable inside the currently running function; it queues a new function call with a fresh value. [](https://react.dev/learn/state-as-a-snapshot)
* **Refs and object references.** Under the hood, `useRef` creates one plain JavaScript object (`{ current: value }`) and returns the exact same memory reference on every render. Because you mutate a property on that shared object rather than replacing the variable itself, every render and async callback reads the live data immediately. [](https://www.linkedin.com/posts/thealiraza%5Freact-javascript-frontend-activity-7387128051001831424-EV5u)
* **UI consistency.** Snapshots guarantee that event handlers, timers, and JSX within a single render all agree on what the data looked like at that exact moment in time. [](https://react.dev/learn/state-as-a-snapshot)

### What if `use_state_ref` existed? (State API without re-rendering)

Imagine a hook shaped like `const [count, setCount] = useStateRef(0)` where `setCount` updates the value silently without triggering a re-render.

* **Stale local variables.** Because JavaScript passes primitives by value, `count` would still be frozen inside the active render's closure. Calling `setCount(5)` and immediately logging `count` on the next line would still print `0` until another unrelated state change forced the component function to run again.
* **Desynchronized UI.** If you rendered `{count}` in your JSX, the screen would show outdated information. The UI would only suddenly "catch up" when a parent component or a different hook happened to trigger a render, leading to unpredictable visual bugs.
* **Why `.current` is mandatory.** As noted in discussions on [Stack Overflow](https://stackoverflow.com/questions/79778630/in-react-why-does-useref-need-current-but-usestate-doesnt), React requires the `.current` wrapper on refs specifically so your local code can read the updated value immediately without needing a re-render to pass a new value into the function scope. [](https://stackoverflow.com/questions/79778630/in-react-why-does-useref-need-current-but-usestate-doesnt)

### What if `use_ref_state` existed? (Proxied ref that triggers re-renders)

Imagine a hook shaped like `const count = useRefState(0)` where mutating `count.current = 5` uses a JavaScript `Proxy` to automatically schedule a re-render.

* **This already exists in other frameworks.** You have just described the core mental model of **Vue 3 (`ref()`)**, **SolidJS (`createSignal`)**, **Preact Signals**, and **Valtio** (a popular React state library built on JS Proxies).
* **Tearing and Concurrent Rendering issues.** React's architecture relies on Concurrent Rendering, which can pause, abort, or render UI trees in the background before committing them to the screen. If a component mutates a shared proxy mid-render or during an async gap, different parts of the screen might read different versions of the data during the same frame (a bug called "tearing").
* **Hidden side effects.** In React, rendering must be a pure calculation. A proxied ref makes it easy to accidentally mutate state directly inside the render body or pass the mutable object down to child components that mutate it unexpectedly, making data flow much harder to trace. [](https://react.dev/learn/state-as-a-snapshot)

### Summary Comparison

| Feature                          | Standard useState              | Hypothetical useStateRef          | Hypothetical useRefState          |
| -------------------------------- | ------------------------------ | --------------------------------- | --------------------------------- |
| **Syntax**                       | \[val, setVal\]                | \[val, setVal\]                   | ref.current = newVal              |
| **Triggers Re-render**           | Yes                            | No                                | Yes                               |
| **Value inside active function** | Frozen snapshot                | Frozen until next external render | Live (mutates immediately)        |
| **Main Risk**                    | Stale closures in async timers | UI out of sync with actual data   | Tearing & impure render mutations |

If you are trying to solve a specific problem in your app—such as **reading the latest state inside a `setInterval` or event listener** without causing extra re-renders—let me know your use case and I can show you the cleanest pattern to handle it!

* [](https://react.dev/learn/state-as-a-snapshot)  
React  
State as a Snapshot – React  
State in React behaves as a snapshot rather than a mutable variable. Rendering: Setting state triggers a re-render; React calls th...
* [](https://react.dev/learn/referencing-values-with-refs)  
React  
Referencing Values with Refs - React  
ref is a plain JavaScript object with the current property that you can read and modify. refs are retained by React between re-ren...
* [](https://stackoverflow.com/questions/79778630/in-react-why-does-useref-need-current-but-usestate-doesnt)  
Stack Overflow  
In React, why does useRef need .current but useState doesn't?  
September 30, 2025 — \`useRef\` requires a mutable object with a \`.current\` property because it allows both the component's local code and React to acces...

Show all

# why is react ref current, what if they designed use\_state\_ref that behaves the same wo rerendering like state snapshot

React uses `.current` on `useRef` because **JavaScript passes primitives by value and objects by reference**. If `useRef` returned a plain value directly instead of a wrapper object, updating it inside an event handler or timer would be invisible on future renders. [](https://react.dev/learn/referencing-values-with-refs)

### Why `.current` is Required

* **Shared memory box.** React creates one plain JavaScript object `{ current: initialValue }` on the first render and returns that exact same object reference on every subsequent render. [](https://javascript.plainenglish.io/ref-vs-state-in-react-hidden-performance-implications-you-should-know-57d5cbee0ef7)
* **Bypassing stale closures.** Functions like `setTimeout` or event listeners capture variables from the render in which they were created. Because they hold a reference to the wrapper object, reading `ref.current` always reaches into the shared box to get the latest value. [](https://javascript.plainenglish.io/ref-vs-state-in-react-hidden-performance-implications-you-should-know-57d5cbee0ef7)
* **No re-render trigger.** Mutating a property on an existing object happens outside React's state queue. React does not track property mutations, so the UI stays untouched. [](https://www.linkedin.com/posts/thealiraza%5Freact-javascript-frontend-activity-7387128051001831424-EV5u)

### What if React Had a `useStateRef`?

Imagine a hypothetical hook shaped like `const [value, setValue] = useStateRef(0)` that updates internally without triggering a re-render. Designing it this way would break down in JavaScript for two main reasons: [](https://www.reddit.com/r/reactjs/comments/1ej505e/why%5Fdoes%5Fit%5Frerender%5Feven%5Fwhen%5Fstate%5Fis%5Fsame/)

* **Stale closures inside async callbacks.** Because `value` would be a plain snapshot variable locked into that specific render's scope, calling `setValue(1)` inside an interval or listener would update React's internal memory, but `console.log(value)` on the next line—or three seconds later in the same callback—would still print `0`. [](https://www.youtube.com/watch?v=CzmdrWSAfCg)
* **Outdated reads without a render.** With normal `useState`, you get the updated `value` because React re-runs your component function and hands you a fresh variable. If `useStateRef` skips the re-render, your component function never runs again, meaning your local `value` variable is permanently stuck at whatever it was during the last actual render. [](https://www.reddit.com/r/react/comments/1mzji0c/why%5Fdont%5Fcss%5Fchanges%5Fmade%5Fwith%5Fuseref%5Frevert%5Fon/)

### How It Would Actually Have to Work

To avoid stale snapshots without re-rendering, a `useStateRef` hook cannot return a plain value. It would have to return a **getter function** instead, like `const [getValue, setValue] = useStateRef(0)`. Calling `getValue()` forces JavaScript to look up the latest stored value at the exact moment you need it, which is effectively the same mental model as reading `ref.current`. [](https://stackoverflow.com/questions/79778630/in-react-why-does-useref-need-current-but-usestate-doesnt)

Would you like to see a code example of **stale closures** with `useState` vs. `useRef`, or how **custom hooks** sometimes combine both?

* [](https://react.dev/learn/referencing-values-with-refs)  
React  
Referencing Values with Refs – React  
Refs are plain JavaScript objects containing a \`current\` property, created via \`useRef(initialValue)\`. Behaviors: Retain informati...
* [](https://stackoverflow.com/questions/79778630/in-react-why-does-useref-need-current-but-usestate-doesnt)  
Stack Overflow  
In React, why does useRef need .current but useState doesn't?  
September 30, 2025 — \`useRef\` requires a mutable object with a \`.current\` property because it allows both the component's local code and React to acces...
* [](https://www.youtube.com/watch?v=qMD1ESQ1sak)  
YouTube·JS Interview Deep Dives  
Refs vs State, DOM Refs, and React 19 Ref Changes  
November 11, 2026 — no rerender at all no render ・ the plane variable is back to zero every render runs the function again so local variables start fr...  
8:19

Show all

# . thinking

basically syntax sugar.

you can absolutely have `afn data ref.current = data`. or what if you have ref.set?



# can you disable devtools console error on websocket fails

**No, you cannot programmatically disable or suppress the red WebSocket connection error in the browser's DevTools console.** Users on [Stack Overflow](https://stackoverflow.com/questions/58355975/a-way-to-stop-websocket-errors-to-show-up-in-browsers-console) agree that browsers automatically log network-level failures directly to the console for security and debugging, meaning JavaScript `try/catch` blocks or `onerror` handlers cannot prevent the browser itself from outputting the message. [](https://stackoverflow.com/questions/58355975/a-way-to-stop-websocket-errors-to-show-up-in-browsers-console)

However, you can hide these messages locally in your own DevTools interface or prevent the connection attempt from happening in the first place.

### Local DevTools Workarounds

If you only want to clean up your own console view while developing, you can adjust your browser settings:

* **Hide network messages.** Open DevTools Settings (press `F1` or click the gear icon), go to the **Console** section, and check **Hide network**. On [Reddit](https://www.reddit.com/r/node/comments/1db0k6l/noob%5Fcan%5Fi%5Fprevent%5Fconsole%5Ferrors%5Ffrom%5Fthe%5Fserver/), users note that this stops browser-generated network errors (like failed HTTP requests and WebSockets) from cluttering your logs. [](https://www.reddit.com/r/node/comments/1db0k6l/noob%5Fcan%5Fi%5Fprevent%5Fconsole%5Ferrors%5Ffrom%5Fthe%5Fserver/)
* **Use a negative console filter.** Type `-WebSocket` or `-ERR_CONNECTION_REFUSED` into the DevTools console **Filter** input box. As noted by users on [Super User](https://superuser.com/questions/737390/use-the-chrome-devtools-console-filter-to-hide-console-errors-caused-by-extensio), prefixing a term with a minus sign (`-`) hides any log entry matching that text. [](https://superuser.com/questions/737390/use-the-chrome-devtools-console-filter-to-hide-console-errors-caused-by-extensio)

### Code-Level Alternatives

If you want to prevent the error from appearing for end users, you have to avoid triggering a failed WebSocket handshake:

* **Preflight with a `fetch` request.** Send a lightweight HTTP `HEAD` or `GET` health-check request to your server before initializing `new WebSocket()`. While a failed `fetch` still logs a network error if it returns a `4xx`/`5xx` or fails to connect, a server that is up can return a `200 OK` with a JSON flag indicating whether the WebSocket service is currently available. [](https://www.reddit.com/r/node/comments/1db0k6l/noob%5Fcan%5Fi%5Fprevent%5Fconsole%5Ferrors%5Ffrom%5Fthe%5Fserver/)
* **Gate connections by environment.** If the error is caused by a development tool (such as Hot Module Replacement or a local live-reload server) running in production, wrap the `new WebSocket()` initialization in an environment check so it only executes locally.

Are you trying to hide these errors for **local debugging**, or are you trying to prevent them from showing up for **end users** in production? Let me know your setup (like your framework or why the socket is failing) and I can suggest a cleaner pattern.

* [](https://stackoverflow.com/questions/58355975/a-way-to-stop-websocket-errors-to-show-up-in-browsers-console)  
Stack Overflow  
A way to stop WebSocket errors to show up in browser's console  
October 12, 2019 — It is not possible to programmatically suppress the red error message in the browser console that appears when a WebSocket connect...
* [](https://www.reddit.com/r/node/comments/1db0k6l/noob%5Fcan%5Fi%5Fprevent%5Fconsole%5Ferrors%5Ffrom%5Fthe%5Fserver/)  
Reddit·r/node  
\[noob\] Can I prevent console errors from the server? - Reddit  
June 9, 2024 — Returning 4xx or 5xx status codes from the server will generally cause a browser console error, even if the client-side code handl...
* [](https://superuser.com/questions/737390/use-the-chrome-devtools-console-filter-to-hide-console-errors-caused-by-extensio)  
Super User  
Use the Chrome Devtools Console Filter to hide ... - Super User  
April 3, 2014 — filter box to hide network resource blocking errors, often caused by ad blockers or similar scripts, though this can also hide ser...

Show all

# can you hide error and issue count on devtools

Let's check if there is a specific setting in Chrome DevTools to hide the top-right error/warning/issue counter badges! Let's run a quick search.

**No, Chrome DevTools does not have a built-in setting to completely remove the error, warning, and issue counter icons from the top-right toolbar** **.** However, you can reduce the numbers to zero or hide the actual messages inside the Console and Issues panels using built-in filters and workarounds. [](https://stackoverflow.com/questions/75095833/how-do-i-turn-off-the-error-warning-info-count-icons-in-edge-chrome-dev-tools)

### Workarounds to Clear or Hide the Counts

* **Hide specific issues in the Issues tab.** Open the Chrome DevTools Issues panel, click the three-dot menu next to an unwanted issue, and select **Hide issues like this**. Hiding issues removes them from the active list and lowers the counter badge at the top of DevTools. [](https://developer.chrome.com/docs/devtools/issues)
* **Ignore browser extension errors.** Click the gear icon inside the Console tab and check **Selected context only**. As agreed upon by users on [Super User](https://superuser.com/questions/737390/use-the-chrome-devtools-console-filter-to-hide-console-errors-caused-by-extensio), this stops third-party browser extensions from inflating your console error count. [](https://superuser.com/questions/737390/use-the-chrome-devtools-console-filter-to-hide-console-errors-caused-by-extensio)
* **Filter out console errors from view.** In the Chrome DevTools Console, click the **Default levels** dropdown and uncheck **Errors** or **Warnings**. This hides the messages from your log feed, though the top toolbar counter will still track them. [](https://developer.chrome.com/docs/devtools/console/reference)
* **Clear the console manually.** Press **Ctrl + L** (Windows/Linux) or **Cmd + K** (Mac) while DevTools is focused to wipe the current console log and reset the error counter until new errors occur.
* **Use a custom DevTools stylesheet extension.** According to a discussion on [Stack Overflow](https://stackoverflow.com/questions/75095833/how-do-i-turn-off-the-error-warning-info-count-icons-in-edge-chrome-dev-tools), the only way to completely hide the top-right counter UI is to build a custom browser extension that injects CSS to hide the toolbar badges. [](https://stackoverflow.com/questions/75095833/how-do-i-turn-off-the-error-warning-info-count-icons-in-edge-chrome-dev-tools)

If you're using a different browser (like **Firefox** or **Safari**) or want the **CSS code** to hide those icons with a custom Chrome extension, let me know and I can walk you through it.

* [](https://developer.chrome.com/docs/devtools/issues)  
Chrome for Developers  
Issues: Find and fix problems | Chrome DevTools  
May 13, 2020 — To hide an issue, select Hide issues like this from the Three-dot menu. scroll down to the Hidden issues section and expand it. hi...
* [](https://superuser.com/questions/737390/use-the-chrome-devtools-console-filter-to-hide-console-errors-caused-by-extensio)  
Super User  
Use the Chrome Devtools Console Filter to hide console errors ...  
April 3, 2014 — Hide Extension Messages: Enable the "Selected context only" option under the console settings cog wheel to ignore messages from ne...
* [](https://developer.chrome.com/docs/devtools/console/reference)  
Chrome for Developers  
Console features reference | Chrome DevTools  
Apr 17, 2019 — You can hide any level of messages. Click the Log Levels drop-down to enable or disable Verbose , Info , Warning or Error messages...

Show all

# what do ppl say on the three lines of quote of make it work

The three-line quote **"Make it work, make it right, make it fast"** is a famous software engineering maxim popularized by Kent Beck (who originally phrased it as _"Make it run, make it right, make it fast"_). Developers, designers, and project managers frequently discuss it as a rule of thumb for avoiding perfectionism and premature optimization. [](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast)

### What the Three Lines Mean

* **Make it work.** Focus on getting a basic, functional prototype running first. At this stage, messy shortcuts are acceptable because the main goal is proving the idea actually works. [](https://medium.com/swlh/coding-faster-make-it-work-then-make-it-good-6aa988ebd8ab)
* **Make it right.** Clean up the mess, handle edge cases, and fix bugs once the core idea is proven. Developers use this step to organize their work so it is reliable, secure, and easy for others to understand. [](https://www.makingdatamistakes.com/make-it-work-make-it-right-make-it-fast/)
* **Make it fast.** Optimize for speed, efficiency, and scale only at the very end. By waiting until the final stage, you avoid wasting hours speeding up features that might get cut or rewritten anyway. [](https://ntietz.com/blog/make-it-fast-from-the-start/)

### What People Say About It

Online discussions around the quote generally highlight both its practical value for solo builders and its limitations on large teams:

* **Fighting analysis paralysis.** On [Quora](https://www.quora.com/What-is-the-make-it-work-make-it-right-then-make-it-fast-approach-to-programming), users agree that following this exact order prevents people from getting stuck over-engineering things before they even know if the solution works. [](https://www.quora.com/What-is-the-make-it-work-make-it-right-then-make-it-fast-approach-to-programming)
* **The trap of skipping step two.** A common complaint among engineers is that managers or tight deadlines force teams to stop right after "make it work". When teams never go back to "make it right," messy prototypes turn into permanent, fragile systems. [](https://www.linkedin.com/posts/abdirahman-sj%5Fsoftwareengineering-activity-7389695123728691200-NDtW)
* **Architectural limits at scale.** Opinions are mixed on [Reddit](https://www.reddit.com/r/programming/comments/1fqsa9v/make%5Fit%5Fwork%5Ffirst%5Fbefore%5Foptimizing/) regarding how well the quote applies to massive systems. While many praise it for rapid prototyping, critics point out that ignoring speed and architecture early on can lock you into bad foundations that require a complete rewrite later. [](https://www.reddit.com/r/programming/comments/1fqsa9v/make%5Fit%5Fwork%5Ffirst%5Fbefore%5Foptimizing/)

Are you looking to apply this quote to a **coding project**, a **business workflow**, or were you thinking of a **different three-line quote**? Let me know so I can tailor the examples to what you need.

AI can make mistakes, so double-check responses 

* [](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast)  
C2 Wiki  
Make It Work Make It Right Make It Fast  
November 27, 2014 — finally make it fast (optimize performance or eliminate waste only when necessary). Interpretation: Represents an evolutionary pro...
* [](https://medium.com/swlh/coding-faster-make-it-work-then-make-it-good-6aa988ebd8ab)  
Medium·Michael Parker  
Coding faster: Make it work, then make it good | by Michael Parker | The Startup | Medium  
March 29, 2020 — code up to 10x slower and suffer paralysis. Process: Make it work by hacking together functionality rapidly
* [](https://www.linkedin.com/posts/abdirahman-sj%5Fsoftwareengineering-activity-7389695123728691200-NDtW)  
LinkedIn·Abdirahman Jama  
Lessons from Kent Beck on "make it run, make it right, make it fast"  
October 30, 2025 — I spoke with Kent Beck recently. Most people quote him as saying: "make it work, make it right, make it fast".

Show all

# what do ppl say on Make it work, make it right, make it fast

**"Make it work, make it right, make it fast"** is a famous software engineering mantra—most widely attributed to **Kent Beck** (though he has noted his original phrasing was _"Make it run, make it right, make it fast"_). [](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast)

Among developers, the phrase is broadly praised as a blueprint for avoiding over-engineering, though it also sparks debate over how it gets abused in the real world. [](https://www.reddit.com/r/PHP/comments/1aibisq/just%5Fmake%5Fit%5Fwork/)

### What the Three Steps Mean

* **Make it work.** Focus strictly on solving the core problem and proving the concept works, even if the code is messy or skips edge cases.
* **Make it right.** Refactor the working code to be clean, readable, well-tested, and able to handle edge cases before moving on.
* **Make it fast.** Measure performance and optimize bottlenecks only after the code is accurate and clean. [](https://ntietz.com/blog/make-it-fast-from-the-start/)

### Why Developers Love It

* **Prevents premature optimization.** As outlined by Epic Web, developers often waste hours optimizing systems or features that end up not needing to exist. [](https://www.epicweb.dev/principles/craft/thinking-like-craftsperson/make-it-work-make-it-right-make-it-fast)
* **Beats analysis paralysis.** According to [Weekly Dev Tips](https://dev.to/weeklydevtips/make-it-work-make-it-right-make-it-fast), breaking work into small pieces and following this sequence keeps momentum high and stops "gold plating". [](https://dev.to/weeklydevtips/make-it-work-make-it-right-make-it-fast)
* **Builds confidence for refactoring.** Getting tests passing first gives you a safety net to clean up the architecture later without breaking functionality. [](https://keyholesoftware.com/writing-quality-code-practicing-make-it-work-make-it-right-make-it-fast/)

### Common Criticisms & Real-World Pitfalls

* **Teams stop after step one.** A frequent complaint across tech circles is that managers and deadlines force developers to ship after "make it work" and never allocate time for "make it right". On [Reddit](https://www.reddit.com/r/PHP/comments/1aibisq/just%5Fmake%5Fit%5Fwork/), opinions are mixed, with some developers arguing that "just make it work" often turns into a permanent excuse for shipping unmaintainable "spaghetti code" and accumulating massive technical debt. [](https://www.youtube.com/shorts/g8BtNI4h6K0)
* **Performance cannot always be tacked on.** Engineers like [Nicole Tietz](https://ntietz.com/blog/make-it-fast-from-the-start/) point out that leaving speed for last can trap you in a slow architecture that requires a total rewrite to fix later. [](https://ntietz.com/blog/make-it-fast-from-the-start/)
* **Micro-cycle vs. macro-cycle confusion.** Fans of the quote emphasize that the three steps are meant to be repeated in **tiny, 15-minute loops** on small pieces of code—not used as an excuse to write an entire messy application and promise to clean it up months later. [](https://dev.to/weeklydevtips/make-it-work-make-it-right-make-it-fast)

If you're thinking about applying this to a current project, let me know:

* Whether you're working on a **brand-new prototype** or **legacy code**
* Your main **team constraints** (tight deadlines, performance bottlenecks, or messy codebase?)

I can help you map out a practical workflow for balancing speed and code quality.

* [](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast)  
C2 Wiki  
Make It Work Make It Right Make It Fast - C2 Wiki  
November 27, 2014 — Make it run, make it right, make it fast. In other words, get to a running system first. Once it is running, make it right. Then m...
* [](https://keyholesoftware.com/writing-quality-code-practicing-make-it-work-make-it-right-make-it-fast/)  
Keyhole Software  
Quality Code Using "Make It Work, Make It Right, Make It Fast"  
March 23, 2023 — Philosophy: Kent Beck's "Make it work, make it right, make it fast" translated to "Solve the problem, make it maintainable, make i...
* [](https://dev.to/weeklydevtips/make-it-work-make-it-right-make-it-fast)  
DEV Community  
Make It Work. Make It Right. Make It Fast. - DEV Community  
Sep 17, 2017 — Summary. Your key takeaways from this episode should be: Work on small pieces of work. For each piece: Make it work; Make it right...

Show all

# why do you use exponent delay on reconnection

You use an exponential delay (commonly called **exponential backoff**) when reconnecting to **prevent overwhelming a struggling server and give it time to recover**. Instead of retrying at a constant pace, the wait time multiplies after each failed attempt, such as waiting 1 second, then 2, 4, 8, and 16 seconds. [](https://kestra.io/resources/infrastructure/exponential-backoff)

### Key Reasons for Exponential Backoff

* **Prevents retry storms.** If a server crashes and thousands of clients try to reconnect every second, the incoming flood of requests acts like a self-inflicted denial-of-service attack. Spacing out retries reduces peak traffic so the server can stabilize. [](https://www.youtube.com/watch?v=WjEmM1Jy79M)
* **Allows recovery time.** Temporary outages, network congestion, and database restarts often take several seconds or minutes to resolve. Increasing the delay matches the retry pace to longer outage durations without hammering the system. [](https://webhookrelay.com/glossary/exponential-backoff/)
* **Saves client resources.** Constantly attempting to reconnect to an offline server wastes CPU cycles, memory, and battery life on the user's device. [](https://medium.com/@ashish.dimri44/understanding-exponential-retries-a-key-strategy-in-resilient-systems-af508fbec288)
* **Finds the optimal window quickly.** One point of agreement among developers on [Stack Overflow](https://stackoverflow.com/questions/28732327/what-is-the-benefit-of-using-exponential-backoff) is that doubling the wait time efficiently locates a safe reconnection window regardless of how many clients are competing, keeping total wait overhead much lower than linear delays. [](https://stackoverflow.com/questions/28732327/what-is-the-benefit-of-using-exponential-backoff)

### Best Practices in Real-World Systems

In production software, plain exponential backoff is rarely used alone and is typically paired with two safeguards: [](https://webhookrelay.com/glossary/exponential-backoff/)

* **Adding jitter (randomness).** If 1,000 clients disconnect at the exact same moment, exponential backoff alone still causes them to retry together at 2 seconds, 4 seconds, and 8 seconds. Adding a small random delay—known as **jitter**—spreads those connection attempts out so they do not hit the server in synchronized waves. [](https://dev.to/biomousavi/understanding-jitter-backoff-a-beginners-guide-2gc)
* **Setting a maximum cap.** Systems cap the delay (for example, at 30 or 60 seconds) so a user is not forced to wait hours to reconnect after a brief network drop. [](https://github.com/redis/lettuce/discussions/2415)

If you are implementing this in an application, let me know your **programming language** or **protocol** (like WebSockets, HTTP APIs, or database connections), and I can provide a code example with jitter and a max cap.

* [](https://webhookrelay.com/glossary/exponential-backoff/)  
WebhookRelay  
What is exponential backoff? Formula, jitter and examples  
Exponential backoff is a retry strategy in which the wait before each new attempt grows exponentially, usually doubling: 1 second,
* [](https://github.com/redis/lettuce/discussions/2415)  
GitHub  
Understanding Reconnect frequency for default delay ... - GitHub  
May 26, 2023 — default Reconnect delay Delay.exponential() uses Exponential power of 2 attempts delay in ms capped at 30s based on documentation.
* [](https://medium.com/@ashish.dimri44/understanding-exponential-retries-a-key-strategy-in-resilient-systems-af508fbec288)  
Medium·Ashish Dimri  
Understanding Exponential Retries: A Key Strategy ... - Medium  
Jan 4, 2024 — Better Use of Resources: It prevents the client from wasting computational resources on repeated immediate retries that are likely...

Show all

# what if you use flat or exponential backoff on reconnection

Using **flat (fixed) backoff** applies constant pressure that can crash a recovering server, while **exponential backoff** slows down retries to let systems heal. However, both strategies still cause synchronized traffic spikes across multiple clients unless you add **random jitter**. 

### Comparison of Reconnection Strategies

| Attribute                | Flat (Fixed) Backoff                      | Pure Exponential Backoff                        | Exponential Backoff + Jitter                   |
| ------------------------ | ----------------------------------------- | ----------------------------------------------- | ---------------------------------------------- |
| **Wait Pattern**         | Same delay every time (e.g., 5s, 5s, 5s). | Doubles each attempt (e.g., 1s, 2s, 4s, 8s).    | Exponential delay plus random variance.        |
| **Server Recovery**      | Poor; constant traffic prevents healing.  | Good; gives the server breathing room.          | Best; relieves pressure and smooths load.      |
| **Thundering Herd Risk** | High; all clients retry in lockstep.      | Moderate; clients still pulse in slower waves.  | Low; randomness breaks up synchronized spikes. |
| **Client Battery / CPU** | High drain during prolonged outages.      | Low drain; quickly backs off to long intervals. | Low drain; stays efficient over long outages.  |

---

### What Happens With Flat Backoff

* **Constant Server Pressure.** Retrying every few seconds keeps hammering a struggling or rebooting service. When a database or server comes back online cold, an immediate wall of queued connections often knocks it right back down.
* **Predictable Recovery Speed.** If a glitch lasts only a fraction of a second, a short flat interval reconnects quickly. It works best for isolated, low-scale tasks where only one or two clients are involved. [](https://diggibyte.com/instant-backoff-exponential-backoff/)

### What Happens With Exponential Backoff

* **Graceful Load Shedding.** Doubling the wait time after each failure quickly reduces traffic during major outages while still recovering fast from brief network blips. [](https://nhimg.org/glossary/exponential-backoff/)
* **Harmonic Waves Without Jitter.** If 10,000 clients disconnect at the exact same moment, pure exponential backoff makes them all wait 1 second, then 2 seconds, then 4 seconds together. They still hit the server in synchronized waves, just less frequently. [](https://javatsc.substack.com/p/day-77-jitter-and-backoff-the-randomness)

---

### Best Practices for Reconnection Logic

* **Add Random Jitter.** Multiply or adjust your exponential delay with a random number (for example, picking a random wait time between 0 and the current maximum delay). As detailed in the [WebSocket.org Reconnection Guide](https://websocket.org/guides/reconnection/), pairing exponential backoff with random jitter prevents synchronized reconnection storms.
* **Set a Maximum Cap.** Cap the delay (such as 30 or 60 seconds) so a client does not end up waiting hours after a long outage.
* **Reset on Success.** Always reset the attempt counter to zero once a connection stays healthy, as noted in [JavaTSC's Backoff Engineering Analysis](https://javatsc.substack.com/p/day-77-jitter-and-backoff-the-randomness). Otherwise, a client that had trouble hours ago will suffer maximum delays on its next tiny hiccup.
* **Include a Retry Limit.** Stop retrying or alert the user after a set number of failures (e.g., 10 to 15 attempts) to save device battery and avoid infinite loops. [](https://redisson.pro/blog/exponential-backoff-and-jitter-in-java.html)

If you are implementing this in a specific project, let me know:

* Your **programming language** or framework (e.g., JavaScript, Python, Go)
* The **protocol** you are using (e.g., WebSockets, gRPC, HTTP webhooks)
* Your expected **client scale**

I can share a concrete code snippet with the right **backoff and jitter** parameters for your setup.

* [](https://webhooker.eu/blog/webhook-retries-exponential-backoff)  
webhooker.eu  
Exponential Backoff and Jitter for Webhook Retries  
July 16, 2026 — Each retry roughly doubles the delay: 1 second, then 2, then 4, then 8, and so on. A destination that is briefly overloaded gets a...
* [](https://dev.to/toai/the-reconnection-storm-how-naive-websocket-retry-loops-melt-down-high-concurrency-backends-5gjj)  
DEV Community  
The Reconnection Storm: How Naive WebSocket Retry Loops ...  
Nov 10, 2026 — Pure Exponential Backoff increases the delay exponentially … reducing frequency over time. Jitter (Decorrelation) introduces rando...
* [](https://www.youtube.com/watch?v=4lIlickO%5F0c&t=207)  
YouTube·Systemic Stack English  
Retry Strategies: Backoff, Jitter and Safe Retries | Ep. 17  
Oct 30, 2026 — To solve this, introduce jitter by adding randomized delays to backoff intervals, such as picking a random duration between zero a...  
[3m](https://www.youtube.com/watch?v=4lIlickO%5F0c&t=207)

Show all

# what if you use fixed or exponential backoff plus jitter on reconnection

Using **exponential backoff plus jitter is the industry standard** for reconnection, while **fixed backoff plus jitter** only works well for brief, predictable blips. Both strategies rely on jitter to break up simultaneous retry waves, known as the "thundering herd" problem, so a recovering server isn't immediately knocked back offline. [](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/)

### Fixed Backoff + Jitter

With this approach, clients wait a constant base time plus or minus a random interval (for example, 5 seconds ± 1 second) before every reconnection attempt.

* **Traffic distribution.** Jitter spreads out the initial spike of reconnecting clients across your chosen random window. [](https://redisson.pro/blog/exponential-backoff-and-jitter-in-java.html)
* **Sustained pressure.** If the server stays down for several minutes, clients continue hammering it at a steady, high rate instead of easing off. [](https://aerospike.com/blog/what-is-jitter/)
* **Best use case.** This works best for isolated, brief network blips where you want fast recovery and only have a small number of connected clients. [](https://aerospike.com/blog/what-is-jitter/)

### Exponential Backoff + Jitter

With this approach, the wait time doubles after each failed attempt (e.g., 1s, 2s, 4s, 8s) up to a maximum cap, with randomness applied to each interval. [](https://webhookrelay.com/glossary/exponential-backoff/)

* **Traffic distribution.** Jitter desynchronizes the fleet so clients do not reconnect in lockstep waves. [](https://redisson.pro/blog/exponential-backoff-and-jitter-in-java.html)
* **Server breathing room.** Because wait times grow, total incoming connection volume drops sharply during prolonged outages. This gives databases and load balancers space to recover. [](https://aerospike.com/blog/what-is-jitter/)
* **Best use case.** This is the safest default for production systems, WebSockets, and microservices where thousands of clients might drop at once. [](https://prismatic.io/blog/how-do-i-implement-exponential-backoff-with-jitter/)

### Strategy Comparison

| Feature                       | Fixed Backoff + Jitter        | Exponential Backoff + Jitter                         |
| ----------------------------- | ----------------------------- | ---------------------------------------------------- |
| **Prevents Thundering Herd**  | Yes, within the jitter window | Yes, across expanding windows                        |
| **Load During Long Outages**  | Remains constant and high     | Drops rapidly as delays grow                         |
| **Recovery Speed**            | Fast and predictable          | Fast at first, slower after multiple failures        |
| **Implementation Complexity** | Very simple                   | Moderate (requires tracking attempt counts and caps) |

### Practical Implementation Rules

When building reconnection logic, three guardrails keep your system safe, as detailed in the [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/) and [Google Cloud Documentation](https://docs.cloud.google.com/memorystore/docs/redis/exponential-backoff?gl=us): 

* **Use Full Jitter.** Instead of just adding a tiny random offset, pick a random wait time between `0` and your calculated exponential ceiling. This spreads traffic most evenly.
* **Set a maximum cap.** Always cap the maximum delay (such as 30 or 60 seconds) so users aren't left waiting hours to reconnect after a brief outage.
* **Reset on success.** Reset the attempt counter back to zero only after a connection stays healthy for a few seconds, not just on the initial handshake. [](https://www.youtube.com/watch?v=NByH-cau97A)

If you are implementing this right now, let me know:

* Your **programming language** or framework
* The **connection type** (WebSockets, database pool, HTTP retries, etc.)

I can write a clean, copy-pasteable reconnection snippet tailored to your setup.

* [](https://aerospike.com/blog/what-is-jitter/)  
Aerospike  
Three problems people might mean by "jitter" - Aerospike  
August 12, 2026 — If every client fails at the same time and every client doubles its delay on the same schedule, they remain synchronized; the serv...
* [](https://redisson.pro/blog/exponential-backoff-and-jitter-in-java.html)  
redisson.pro  
Exponential Backoff and Jitter in Java: Defaults  
August 20, 2026 — Because backoff alone does not desynchronize a fleet. Clients that fail together and share the same delay formula retry together, ...
* [](https://dev.to/biomousavi/understanding-jitter-backoff-a-beginners-guide-2gc)  
DEV Community  
Understanding Jitter Backoff: A Beginner's Guide  
January 3, 2025 — Jitter adds random factor to our attempt intervals and it Prevents Synchronization(Stops multiple requests from retrying simultane...

Show all

# what if you resolve or reject a promise in js

When you **resolve** or **reject** a JavaScript Promise, you permanently change its internal state from **pending** to **settled**. Once settled, the Promise locks in its outcome and triggers the appropriate callback handlers in the microtask queue. [](https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/)

### What Happens on `resolve(value)`

Calling `resolve(value)` marks the asynchronous task as successful and transitions the Promise to the **fulfilled** state. [](https://www.youtube.com/watch?v=rdVG85LGsVE)

* **Triggers `.then()` handlers.** Any callback attached via `.then()` runs and receives `value` as its argument.
* **Resumes `async/await` functions.** If your code is paused on `await myPromise`, execution continues and the `await` expression evaluates to `value`.
* **Flattens nested Promises.** If `value` is another Promise, the outer Promise adopts its state instead of wrapping it. [](https://www.reddit.com/r/learnjavascript/comments/s3jquk/whats%5Fthe%5Fuse%5Fof%5Fresolvereject%5Fin%5Fa%5Fpromise%5Fwhen/)

### What Happens on `reject(reason)`

Calling `reject(reason)` marks the task as failed and transitions the Promise to the **rejected** state. [](https://nodejs.org/learn/asynchronous-work/discover-promises-in-nodejs)

* **Skips `.then()` callbacks.** The runtime bypasses standard fulfillment handlers and jumps straight to the nearest error handler.
* **Triggers `.catch()` handlers.** Any callback attached via `.catch()` (or the second argument of `.then()`) executes with `reason`.
* **Throws inside `async/await`.** If you use `await`, a rejection acts like a synchronous `throw`, jumping into your `try...catch` block.
* **Causes an unhandled rejection error.** If no `.catch()` or `try...catch` handles the failure, JavaScript logs an `UnhandledPromiseRejection` warning or crashes a Node.js process. [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/reject)

### Key Rules to Remember

As detailed in the [MDN Promise documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise), Promises follow strict lifecycle rules once settled: [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise)

* **State is permanent.** A Promise can only settle once. If you call `resolve()` and then call `reject()` right after, the second call is silently ignored.
* **Execution does not stop.** Calling `resolve()` or `reject()` is not a `return` statement. Any code written after it inside the Promise executor will still run unless you explicitly return.
* **`.finally()` always runs.** Once a Promise is either resolved or rejected, any `.finally()` block attached to the chain will execute regardless of the outcome. [](https://stackoverflow.com/questions/36734900/what-happens-if-you-dont-resolve-or-reject-a-promise)

### Quick Code Example

javascript

```
const checkTask = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data loaded"); // Moves to .then()
  } else {
    reject(new Error("Failed to load")); // Moves to .catch()
  }
});

checkTask
  .then((data) => console.log(data))       // Logs: "Data loaded"
  .catch((err) => console.error(err))      // Runs only on reject()
  .finally(() => console.log("Settled"));  // Always runs

```



If you're working on a specific async flow, let me know if you'd like examples of **chaining multiple promises**, using **async/await with try/catch**, or handling **Promise.all()**!

* [](https://stackoverflow.com/questions/36734900/what-happens-if-you-dont-resolve-or-reject-a-promise)  
Stack Overflow  
What happens if you don't resolve or reject a promise?  
April 20, 2016 — Finally Block Execution: A consequence of not resolving or rejecting a promise is that any \`.finally()\` block attached to it will ...
* [](https://www.reddit.com/r/learnjavascript/comments/s3jquk/whats%5Fthe%5Fuse%5Fof%5Fresolvereject%5Fin%5Fa%5Fpromise%5Fwhen/)  
Reddit·r/learnjavascript  
What's the use of resolve/reject in a Promise when we ... - Reddit  
January 14, 2022 — When a promise is \`rejected\`, it follows the \`catch\` block or the second callback provided to \`then\`. In a promise chain, an unhan...
* [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise)  
MDN Web Docs  
Promise - JavaScript - MDN Web Docs  
October 26, 2026 — We make a new promise: we promise a numeric count of this promise, We define what to do when the promise is resolved with the then...

Show all

# what if you do not catch js promise rejection

If you do not catch a JavaScript promise rejection, it triggers an **unhandled promise rejection** error. What happens next depends on the environment where your code is running. [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/catch)

### In Web Browsers

* **Console Error Logged.** The browser logs an `Uncaught (in promise)` error to the developer console so you can see what went wrong. [](https://javascript.info/promise-error-handling)
* **App Keeps Running.** Unlike an uncaught synchronous error, an unhandled rejection does not crash the whole browser tab or stop other scripts from running. [](https://medium.com/breadth-cloud/the-silent-threat-unhandled-promise-rejections-in-javascript-ef26a2512d89)
* **Broken Features.** Any code waiting on that promise's result will never execute, which can leave your UI stuck in a loading state or cause silent data loss. [](https://stackoverflow.com/questions/36734900/what-happens-if-you-dont-resolve-or-reject-a-promise)
* **Global Event Fires.** The browser dispatches an `unhandledrejection` event on the `window` object, which error-tracking tools use to log crashes. [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/catch)

### In Node.js (Backend)

* **Process Crashes.** Since Node.js v15, an unhandled promise rejection terminates the entire Node.js process immediately with a non-zero exit code.
* **Server Downtime.** If this happens in a web server (like Express), your server will crash and drop active connections unless a process manager restarts it. [](https://hygraph.com/blog/unhandled-promise-rejection)

### How to Prevent It

* **Use `.catch()` on Promise Chains.** Always append a [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/catch) method to the end of a promise chain to handle errors.
* **Use `try...catch` with `async/await`.** Wrap `await` calls inside a `try...catch` block to catch rejections just like standard synchronous errors.
* **Set Up Global Fallbacks.** Attach listeners for `window.onunhandledrejection` in browsers or `process.on('unhandledRejection')` in Node.js to log unexpected errors safely.
* **Enable Linter Rules.** Use ESLint rules like `no-floating-promises` to warn you during development if you forget to handle a promise. [](https://medium.com/breadth-cloud/the-silent-threat-unhandled-promise-rejections-in-javascript-ef26a2512d89)

Are you debugging a specific **unhandled rejection error** in your code right now? If you share the snippet and whether it's running in a **browser** or **Node.js**, I can show you the best way to handle it.

* [](https://stackoverflow.com/questions/36734900/what-happens-if-you-dont-resolve-or-reject-a-promise)  
Stack Overflow  
What happens if you don't resolve or reject a promise?  
April 20, 2016 — Unresolved Promise State: A promise that is neither resolved nor rejected remains in a "pending" state, preventing any associated ...
* [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Promise/catch)  
MDN Web Docs  
Promise.prototype.catch() - JavaScript  
July 20, 2025 — The catch method is used for error handling in promise composition. If a promise becomes rejected, the rejection event is surfaced...
* [](https://medium.com/breadth-cloud/the-silent-threat-unhandled-promise-rejections-in-javascript-ef26a2512d89)  
Medium·Andrew Eames  
The Silent Threat: Unhandled Promise Rejections in JavaScript | by Andrew Eames | Breadth.Cloud | Medium  
June 4, 2025 — An unhandled promise rejection occurs when an asynchronous JavaScript promise fails without an attached error handler … configure ...

Show all

# what do browsers do to websockets

Browsers act as the **client-side manager and security enforcer** for WebSocket connections. They provide a built-in JavaScript API that allows web pages to establish, maintain, and communicate over persistent, two-way channels with a server. [](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets%5FAPI)

### Connection Management & Handshake

When a web app requests a WebSocket connection, the browser handles the underlying networking steps automatically:

* **HTTP Upgrade Handshake.** The browser starts by sending a standard HTTP request with special headers (`Connection: Upgrade`, `Upgrade: websocket`, and a random security key) to ask the server to switch protocols. [](https://portswigger.net/web-security/websockets/what-are-websockets)
* **Protocol Switching.** Once the server responds with an `HTTP 101 Switching Protocols` status, the browser repurposes that existing TCP connection into a raw WebSocket channel. [](https://www.youtube.com/watch?v=XgGpWeeQRsQ&t=234)
* **Framing and Masking.** As data is sent, the browser automatically wraps outgoing messages into WebSocket data frames and applies a cryptographic masking key to prevent cache-poisoning attacks on intermediate proxies.
* **Keep-Alive Heartbeats.** Browsers automatically respond to server `ping` frames with `pong` frames at the protocol level to keep the connection alive through firewalls and load balancers.

### Security & Sandbox Enforcement

Because WebSockets bypass standard HTTP request-response rules, browsers enforce strict boundaries to protect users:

* **Origin Header Injection.** Unlike standard `fetch` or XHR requests, browsers do not block cross-origin WebSocket connections via CORS. Instead, the browser automatically attaches an unspoofable `Origin` header to the handshake so the server can decide whether to accept or reject the connection.
* **Mixed-Content Blocking.** If a user is viewing a secure `https://` page, the browser will block unencrypted `ws://` connections and require encrypted `wss://` connections over TLS.
* **Outbound-Only Connections.** Browsers strictly act as clients. Users on [Stack Overflow](https://stackoverflow.com/questions/4118272/do-websockets-allow-for-p2p-browser-to-browser-communication) note that browsers can only initiate outbound WebSocket connections and cannot listen for incoming connections from other browsers.
* **Port Restrictions.** Browsers block WebSocket connections to restricted system ports (such as SMTP port 25) to prevent web pages from abusing non-web network services. [](https://stackoverflow.com/questions/4118272/do-websockets-allow-for-p2p-browser-to-browser-communication)

### Resource & Lifecycle Handling

The browser also manages how WebSockets interact with device memory, tabs, and page navigation:

* **Connection Limits.** Browsers limit the number of concurrent WebSocket connections allowed per host or globally (often around 255 total) to prevent a single malicious tab from exhausting system sockets.
* **No Built-In Backpressure.** According to the [MDN Web Docs WebSocket API guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets%5FAPI), the standard browser `WebSocket` interface does not support backpressure. If a server sends messages faster than JavaScript can process them, the browser buffers the data in memory, which can cause high CPU usage or crash the tab.
* **Page Cache (bfcache) Exclusion.** If a webpage leaves a WebSocket open when the user navigates away, many browsers exclude that page from the Back/Forward Cache (`bfcache`), meaning the page must reload from scratch if the user hits the Back button.
* **Automatic Teardown.** When a user closes a tab or refreshes the page, the browser automatically sends a close frame to cleanly terminate the connection. [](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets%5FAPI)

Are you troubleshooting a specific **WebSocket issue** (like dropped connections, CORS/origin errors, or memory leaks), or are you comparing WebSockets to alternatives like **WebTransport** or **Server-Sent Events**? Let me know what you're working on and I can tailor the details.

* [](https://stackoverflow.com/questions/4118272/do-websockets-allow-for-p2p-browser-to-browser-communication)  
Stack Overflow  
Do websockets allow for p2p (browser to ... - Stack Overflow  
November 7, 2010 — WebSockets do not directly support peer-to-peer communication between browsers as browsers can only initiate outbound connections,
* [](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets%5FAPI)  
MDN Web Docs  
WebSocket API (WebSockets) - MDN Web Docs  
November 12, 2026 — The WebSocket interface doesn't support backpressure. become unresponsive due to 100% CPU usage, or both. If backpressure is an is...
* [](https://ably.com/topic/websockets)  
Ably Realtime  
WebSockets explained: What they are and how they work  
June 23, 2026 — The WebSocket API is a browser-based interface that allows web applications to open a persistent connection with a server. It enab...

Show all

# what do browsers do to websockets when you leave wo closing

When you leave a page without manually calling `socket.close()`, **the browser automatically terminates the WebSocket connection** as part of unloading the page. You do not need to write manual cleanup code just to prevent a lingering connection on the client side. [](https://stackoverflow.com/questions/26069214/websocket-when-closing-window-tab-chrome)

### What Happens on Page Navigation or Tab Close

* **Automatic Close Handshake.** When you close a tab, close the browser, or navigate to a new URL, the browser initiates the WebSocket closing handshake and tears down the underlying TCP connection. [](https://stackoverflow.com/questions/26069214/websocket-when-closing-window-tab-chrome)
* **Status Code `1001` (Going Away).** The browser typically sends a close frame with status code `1001`. This signals to your backend server that the client intentionally navigated away or closed the page. [](https://medium.com/@nookeshkarri7/how-does-a-websocket-work-and-what-happens-when-it-disconnects-f6aac47e34d0)
* **Client-Side Event Timing.** The `onclose` event listener on your frontend may or may not finish executing. Because the browser is actively destroying the page context, any JavaScript inside `onclose` or `beforeunload` is not guaranteed to run. [](https://stackoverflow.com/questions/26069214/websocket-when-closing-window-tab-chrome)

### Edge Cases Where It Isn't Immediate

Depending on _how_ you "leave" the page, the browser and network handle the socket differently:

* **Switching Tabs or Minimizing.** The WebSocket stays open initially. However, if the tab sits in the background for too long, browsers like Chrome may suspend or freeze the tab to save memory and battery. When a tab is frozen, the browser pauses JavaScript execution and eventually drops the WebSocket connection.
* **Mobile Browsers or Sleep Mode.** If you switch apps on a phone or put a laptop to sleep, the operating system suspends network activity. The browser does not get a chance to send a `1001` close frame. [](https://elixirforum.com/t/what-happen-to-socket-when-user-closes-browser-tab/30193)
* **Back/Forward Cache (bfcache).** Modern browsers cache pages in memory so the Back button loads them instantly. Before putting a page into bfcache, the browser automatically closes open WebSockets (usually with code `1001`), so you have to re-establish the connection if the user navigates back.

### What Your Server Sees

* **Graceful Disconnect.** On a standard tab close or link click, your server receives the `1001` close frame and immediately fires its own disconnect handler.
* **Abrupt Disconnect (`1006`).** If the user's browser crashes, their Wi-Fi drops, or their device goes to sleep, the server never receives a close frame. The server will think the user is still connected until it tries to send data or its own **ping/pong heartbeat** times out, resulting in close code `1006` (Abnormal Closure). [](https://blog.postman.com/how-do-websockets-work/)

Are you trying to handle **user presence** (like showing someone as offline) or **reconnecting** when they return to the tab? Let me know your setup and I can share the best pattern for it.

* [](https://medium.com/@nookeshkarri7/how-does-a-websocket-work-and-what-happens-when-it-disconnects-f6aac47e34d0)  
Medium·Nookesh Karri  
How Does a WebSocket Work, and What Happens ... - Medium  
Oct 28, 2026 — When a WebSocket disconnects, the browser fires a close event and the socket object is finished for good. 1001 Going Away: the ser...
* [](https://stackoverflow.com/questions/26069214/websocket-when-closing-window-tab-chrome)  
Stack Overflow  
Websocket when closing window/tab - Chrome - Stack Overflow  
September 26, 2014 — The socket itself will be closed when the user closes the tab (or navigates to a different page) and the server will see that the ...
* [](https://elixirforum.com/t/what-happen-to-socket-when-user-closes-browser-tab/30193)  
Elixir Forum  
What happen to socket when user closes browser tab?  
Mar 30, 2020 — the socket is terminated when the browser disconnects, which is what happens when the tab is closed or the computer goes to sleep.

Show all

# what do browsers do to websockets when you leave wo closing the tab

When you leave a page without closing the tab, **the browser does not immediately close the WebSocket connection**. Because a WebSocket's lifecycle is tied to the active document, switching tabs or minimizing the browser leaves the connection open at first. [](https://github.com/w3c/webtransport/issues/600)

However, browsers use aggressive power-saving and memory-management features that will eventually interrupt or close that connection over time. What happens depends on how you "leave" the tab and how long you stay away.

### 1\. Switching Tabs or Minimizing (Backgrounding)

If you simply switch to another tab or minimize the window, the browser treats the page as a background tab and applies progressive restrictions:

* **Immediate state.** The socket stays open, and incoming messages from the server still arrive normally. [](https://github.com/w3c/webtransport/issues/600)
* **Timer throttling (After \~1 to 5 minutes).** Browsers heavily throttle background JavaScript timers like `setInterval()` and `setTimeout()` to save battery. If your application relies on client-side JavaScript to send manual "ping" or "heartbeat" messages to the server, those timers get delayed. The server will think the client went offline and drop the connection due to a timeout. _(Note: Native protocol-level Ping/Pong frames handled directly by the browser's C++ networking stack are not affected by JavaScript throttling)._ [](https://community.tradovate.com/t/psa-keeping-websocket-heartbeats-alive-in-browser-based-apps/2914)
* **Tab freezing and discarding (After extended inactivity).** Modern browsers like Chrome, Edge, and Safari use "Memory Saver" or "Sleeping Tabs" features. If a tab sits in the background for too long, the browser will freeze its execution or completely discard the page from memory. When a tab is frozen or discarded, the browser forcefully severs the WebSocket connection. [](https://www.reddit.com/r/ispyconnect/comments/167elpq/how%5Fto%5Fprevent%5Fbrowsers%5Ffrom%5Flosing%5Fconnection%5Fon/)

### 2\. Navigating to a New URL in the Same Tab

If you leave the site by typing a new address or clicking a link that loads a brand-new page in that same tab, **the browser immediately closes the WebSocket**. Even though the tab itself remains open, the underlying document is destroyed, triggering a standard TCP teardown and sending a WebSocket close frame (usually status code `1001` "Going Away") to the server. [](https://stackoverflow.com/questions/26069214/websocket-when-closing-window-tab-chrome)

### 3\. Putting Your Device to Sleep

If you walk away and your computer or phone goes into sleep mode, **the OS suspends the network interface**. [](https://elixirforum.com/t/what-happen-to-socket-when-user-closes-browser-tab/30193)

* The browser does not get a chance to send a clean "close" message.
* The connection enters a half-open state until the server's next heartbeat check fails and times out, or until you wake your device up and the browser realizes the network link is dead. [](https://blog.postman.com/how-do-websockets-work/)

### 4\. Mobile Browsers (iOS and Android)

Mobile browsers are much stricter than desktop browsers when you switch apps or lock your screen:

* **Immediate suspension.** Within seconds of putting a mobile browser in the background, the operating system suspends the app's network activity to preserve battery life.
* **Dropped sockets.** WebSockets on mobile devices almost always disconnect shortly after you leave the browser app, forcing the web app to build automatic reconnection logic when you return.

If you are building an app and trying to keep connections alive or handle disconnects gracefully, let me know:

* Whether you are **debugging an existing issue** or **designing the architecture**
* Your **target platform** (desktop browsers, mobile web, or both)

I can share specific code patterns—like **Web Workers** or **Visibility API** hooks—to prevent drops or handle fast reconnects.

* [](https://github.com/w3c/webtransport/issues/600)  
GitHub  
Keep connection on tab switch · Issue #600 · w3c/webtransport  
April 17, 2024 — Issue closed as completed because connection lifetimes are tied to the Document and survive tab switching by design, requiring no ...
* [](https://stackoverflow.com/questions/26069214/websocket-when-closing-window-tab-chrome)  
Stack Overflow  
Websocket when closing window/tab - Chrome - Stack Overflow  
September 26, 2014 — The socket itself will be closed when the user closes the tab (or navigates to a different page) and the server will see that the ...
* [](https://community.tradovate.com/t/psa-keeping-websocket-heartbeats-alive-in-browser-based-apps/2914)  
Tradovate Forum  
Keeping WebSocket Heartbeats alive in browser-based apps  
August 17, 2021 — Chrome will lower the priority on the setInterval() and setTimeout() functions. As a result, your WebSocket heartbeats may be dela...

Show all

# can you fight browser bg tab timer throttling

**Yes, you can work around browser background tab timer throttling.** The right approach depends on whether you are a web developer writing the code or an end-user trying to keep a specific website running smoothly. [](https://stackoverflow.com/questions/67979609/how-to-prevent-timer-from-being-throttled-by-chrome-when-my-webpage-in-backgroun)

### For Web Developers (In-Code Workarounds)

Modern browsers throttle `setTimeout` and `setInterval` on the main thread when a tab is hidden, often limiting execution to once per second or once per minute. You can bypass or adapt to this using standard web APIs. [](https://medium.com/@adithyaviswam/overcoming-browser-throttling-of-setinterval-executions-45387853a826)

* **Use Web Workers.** Move your timer logic into a background thread using the Web Workers API. Because workers run independently of the main UI thread, browsers do not apply standard tab throttling to them. Libraries like HackTimer automate this by overriding standard timers with worker-backed versions. [](https://code.likeagirl.io/defeating-browser-throttling-advanced-techniques-for-handling-intervals-in-react-73bb65d16197)
* **Play silent audio.** Browsers exempt tabs that are actively playing audio from aggressive throttling. You can keep a tab awake by generating a silent, looping audio stream using the Web Audio API, though modern browsers require a user interaction (like a click) before audio can start. [](https://developer.chrome.com/blog/background%5Ftabs)
* **Use WebRTC data channels.** Maintaining an active peer-to-peer connection via WebRTC signals to the browser that the tab is handling real-time communication, which prevents intensive throttling. Note that standard WebSockets alone no longer guarantee an exemption in newer versions of Chrome. [](https://developer.chrome.com/blog/background%5Ftabs)
* **Calculate elapsed time deltas.** Instead of relying on a timer firing at exact intervals, check `Date.now()` or `performance.now()` on each tick. When the user returns to the tab, calculate how much real time passed and catch up your application state accordingly. [](https://code.likeagirl.io/defeating-browser-throttling-advanced-techniques-for-handling-intervals-in-react-73bb65d16197)

### For End-Users (Browser Settings & Launch Flags)

If you are using a web app or browser game and want to stop your browser from slowing it down, you can override the behavior locally. [](https://www.reddit.com/r/incremental%5Fgames/comments/jefviz/fyi%5Fhow%5Fto%5Fdisable%5Ftimer%5Fthrottling%5Fon%5Fgoogle/)

* **Launch with command-line flags.** Close all instances of your browser and launch it from a terminal or desktop shortcut with the `--disable-background-timer-throttling` flag appended. This works for Chromium-based browsers like Google Chrome and Microsoft Edge.
* **Pop the tab into its own window.** Drag the tab out into a separate browser window and keep at least a small portion of it visible on your screen. Browsers check for "window occlusion," so a partially visible window is treated as active rather than hidden in the background.
* **Turn off browser battery savers.** Disable built-in power-saving features, such as Energy Saver in Chrome (`chrome://settings/performance`) or Efficiency Mode in Edge, which aggressively throttle inactive tabs to conserve battery.
* **Modify enterprise policies.** On Windows, administrators and power users can disable throttling permanently by setting the `IntensiveWakeUpThrottlingEnabled` registry key to `0`. Note that older toggles inside `chrome://flags` have been removed or hidden in modern browser releases, as discussed by users on [Reddit](https://www.reddit.com/r/incremental%5Fgames/comments/jefviz/fyi%5Fhow%5Fto%5Fdisable%5Ftimer%5Fthrottling%5Fon%5Fgoogle/).

_Note: Bypassing background throttling increases CPU usage and can noticeably drain battery life on laptops and mobile devices._ [](https://www.reddit.com/r/incremental%5Fgames/comments/jefviz/fyi%5Fhow%5Fto%5Fdisable%5Ftimer%5Fthrottling%5Fon%5Fgoogle/)

Are you **building a web app** that needs accurate background timing, or trying to **keep a specific site or game running** in your browser? Let me know your setup (such as your **framework** or **browser**) and I can share exact implementation steps.

* [](https://www.reddit.com/r/incremental%5Fgames/comments/jefviz/fyi%5Fhow%5Fto%5Fdisable%5Ftimer%5Fthrottling%5Fon%5Fgoogle/)  
Reddit·r/incremental\_games  
FYI: how to disable timer throttling on Google Chrome - Reddit  
October 20, 2020 — Disabling 'Throttle Javascript timers in background' and 'Calculate window occlusion \`chrome://flags\` can prevent Chrome from paus...
* [](https://stackoverflow.com/questions/67979609/how-to-prevent-timer-from-being-throttled-by-chrome-when-my-webpage-in-backgroun)  
Stack Overflow  
How to prevent timer from being throttled by Chrome when my ...  
June 15, 2021 — if you are in control of the browser, there is a flag that disables this feature — which you can use when starting Chrome: --disab...
* [](https://developer.chrome.com/blog/background%5Ftabs)  
Chrome for Developers  
Background tabs in chrome 57 | Blog | Chrome for Developers  
March 9, 2017 — Budget-Based Throttling (Chrome 57): Applies after 10 seconds in background; exempts audio and real-time connections (WebSockets/W...

Show all

# how do browsers throttle timers of bg tabs

Browsers throttle JavaScript timers in background tabs by **aligning, batching, and progressively delaying timer wake-ups** to save CPU and battery power. Instead of letting hidden pages run tasks every few milliseconds, browsers limit how often background tabs can wake up the CPU. [](https://blog.chromium.org/2020/11/tab-throttling-and-more-performance.html)

### Core Throttling Mechanisms

Browsers use several layers of restrictions once a tab is hidden or minimized. [](https://developer.chrome.com/blog/background%5Ftabs)

* **Timer Alignment and Clamping.** Browsers group timers from hidden tabs and check them at a maximum rate of once per second (1,000 ms). Even if a script calls `setTimeout(fn, 10)`, the browser clamps and batches it to fire during the next 1-second check. [](https://medium.com/@findutils/why-your-countdown-falls-behind-in-a-background-tab-setinterval-chromes-timer-throttling-and-a-1fbfb787cd9d)
* **Intensive Throttling.** In Chromium-based browsers, if a tab stays hidden for more than 5 minutes, chained timers are restricted to firing once per minute. This applies when the timer chain reaches a nesting level of five or more and the page is inactive.
* **CPU Time Budgets.** Browsers assign background tabs a strict CPU budget that regenerates slowly over time, such as 0.01 seconds per second. If a timer task runs too long and depletes the budget, future timers are delayed until the budget recovers. [](https://developer.chrome.com/blog/background%5Ftabs)
* **Animation Frame Suspension.** `requestAnimationFrame()` callbacks are paused completely in background tabs because the browser stops painting invisible pages. [](https://blog.chromium.org/2020/11/tab-throttling-and-more-performance.html)
* **Tab Freezing and Unloading.** After extended inactivity, browsers like Microsoft Edge, Mozilla Firefox, and Apple Safari suspend or unload the entire tab from memory. Once unloaded, no JavaScript timers execute at all until the user clicks back to the tab. [](https://www.youtube.com/watch?v=6Egod%5FCyKi0)

### Browser Comparison

Different browser engines enforce varying minimum timeout limits for inactive tabs. [](https://medium.com/@findutils/why-your-countdown-falls-behind-in-a-background-tab-setinterval-chromes-timer-throttling-and-a-1fbfb787cd9d)

| Browser                  | Initial Background Clamp | Extended / Intensive Throttling                |
| ------------------------ | ------------------------ | ---------------------------------------------- |
| **Google Chrome / Edge** | 1 second                 | 1 minute (after 5 minutes hidden)              |
| **Firefox (Desktop)**    | 1 second                 | Suspends or unloads tabs when memory is low    |
| **Firefox (Android)**    | 15 minutes               | Frequently unloads inactive tabs completely    |
| **Safari**               | 1 second                 | Purges and suspends inactive tabs aggressively |

### Exemptions and Bypasses

Browsers lift or relax timer throttling when a background tab is performing active, user-facing work. [](https://blog.chromium.org/2020/11/tab-throttling-and-more-performance.html)

* **Audio Playback.** Tabs playing audible sound are exempt from throttling so media streaming does not stutter. Silent audio tracks do not qualify for this exemption.
* **Real-Time Connections.** Pages holding open WebSockets or active WebRTC connections often bypass intensive 1-minute throttling to keep chat apps and live feeds responsive.
* **Web Workers.** Scripts running inside a dedicated `WebWorker` run on a separate thread and are generally not subjected to the same aggressive 1-second or 1-minute clamping as the main UI thread.
* **System Clock Comparisons.** As noted in guides from [Medium](https://medium.com/@findutils/why-your-countdown-falls-behind-in-a-background-tab-setinterval-chromes-timer-throttling-and-a-1fbfb787cd9d) and [UsefulDrawer](https://usefuldrawer.com/blog/browser-timers-drift-background-tab), developers avoid timer drift by comparing `Date.now()` or `performance.now()` against a start timestamp rather than counting timer ticks. [](https://developer.chrome.com/blog/background%5Ftabs)

Are you trying to **prevent timer drift** in a web app you're building, or are you looking to **disable throttling** in your own browser settings? Let me know so I can share specific code workarounds or browser flags.

* [](https://blog.chromium.org/2020/11/tab-throttling-and-more-performance.html)  
blog.google  
Tab throttling and more performance improvements in Chrome ...  
November 17, 2020 — we're throttling JavaScript timer wake-ups in background tabs to once per minute. This reduces CPU usage by up to 5x, and extends ...
* [](https://developer.chrome.com/blog/background%5Ftabs)  
Chrome for Developers  
Background tabs in chrome 57 | Blog | Chrome for Developers  
March 9, 2017 — audible audio (showing audio icon) exempts pages and extends several seconds after stopping. Budget-Based Throttling (Chrome 57): ...
* [](https://www.getintechs.com/blog/inactive-tab-throttling)  
www.getintechs.com  
Browser Tab Throttling: The Hidden Performance Killer You're ...  
April 8, 2025 — Firefox uses "Tab Unloading" with a 1-second minimum timeout for inactive desktop tabs \[4\]. Firefox on Android sets a much stricte...

Show all

# js websocket onerror

The **`WebSocket.onerror`** event handler in JavaScript fires when a WebSocket connection closes due to an error, such as a handshake failure or an inability to send data. [](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/error%5Fevent)

For security reasons, browsers intentionally withhold specific error details from the `error` event object. [](https://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description)

### Basic Syntax

You can listen for WebSocket errors using either the `onerror` property or `addEventListener()`: [](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/error%5Fevent)

javascript

```
const socket = new WebSocket("wss://://example.com");

// Option 1: Using the onerror property
socket.onerror = (event) => {
  console.error("WebSocket error occurred:", event);
};

// Option 2: Using addEventListener (allows multiple handlers)
socket.addEventListener("error", (event) => {
  console.error("WebSocket error occurred:", event);
});

```



### Key Limitations & Best Practices

* **No Detailed Error Messages.** By design, the `event` passed to `onerror` is a generic `Event` object. Properties like `event.message`, `event.code`, and `event.data` will be `undefined`. Users on [Stack Overflow](https://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description) note that browsers hide these details to prevent malicious scripts from probing internal networks or ports. [](https://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description)
* **Always Pair with `onclose`.** An `error` event is immediately followed by a `close` event. To get actionable information like a status code (`event.code`) or a close reason (`event.reason`), handle your recovery and reconnection logic inside `onclose`. [](https://websocket.org/guides/error-handling/)
* **Check DevTools for Debugging.** While your JavaScript code cannot read the specific error reason, your browser's Developer Tools console and Network tab will display more descriptive network or handshake failure messages. [](https://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description)
* **Common Causes.** Handshake failures often happen due to using `ws://` instead of `wss://` on an HTTPS page, CORS restrictions, firewall blocks, or an unreachable server. [](https://blog.postman.com/websocket-connection-failed/)

### Recommended Pattern

Combine `onerror` for logging and `onclose` for inspecting the close code and triggering reconnections: [](https://websocket.org/guides/error-handling/)

javascript

```
const socket = new WebSocket("wss://://example.com");

socket.onerror = (event) => {
  // Log that an error happened, but don't expect details here
  console.error("WebSocket encountered an error.");
};

socket.onclose = (event) => {
  // Inspect the close code for actual diagnostics (e.g., 1006 = abnormal closure)
  console.log(`Connection closed. Code: ${event.code}, Reason: ${event.reason}`);
  
  if (!event.wasClean) {
    // Trigger reconnection logic here
  }
};

```



If you're troubleshooting a specific WebSocket failure, let me know:

* The **close code** (e.g., `1006`) or **console error** you are seeing
* Your **server setup** (Node.js, reverse proxy like Nginx, etc.)

I can help you pinpoint the cause and write a clean **auto-reconnect handler**.

* [](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/error%5Fevent)  
MDN Web Docs  
WebSocket: error event - Web APIs | MDN  
October 26, 2026 — The error event is fired when a connection with a WebSocket has been closed due to an error (some data couldn't be sent for exampl...
* [](https://stackoverflow.com/questions/18803971/websocket-onerror-how-to-read-error-description)  
Stack Overflow  
javascript - Websocket onerror - how to read error description?  
September 14, 2013 — WebSockets is designed to not expose detailed error information. Developer tools may display more information, but this is for bro...
* [](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)  
MDN Web Docs  
WebSocket - Web APIs | MDN  
September 25, 2024 — Fired when a connection with a WebSocket has been closed because of an error, such as when some data couldn't be sent.

Show all

# what if you listen js websocket onerror or onclose only

If you only listen to one of the two events, **listening to `onclose` only is safe and actually recommended for most logic, while listening to** **`onerror` only will cause you to miss normal disconnections and lose diagnostic details.**

Per the WebSocket specification, any error that closes a connection always triggers `onerror` followed immediately by `onclose`. [](https://stackoverflow.com/questions/40084398/is-onclose-always-called-after-onerror-for-websocket)

### Listening to `onclose` Only (Recommended)

Relying solely on `onclose` is a standard pattern in production JavaScript applications. [](https://websocket.org/guides/error-handling/)

* **Catches all terminations.** Because `onerror` is always followed by `onclose`, your `onclose` handler runs whether the connection closed cleanly or crashed due to a network error. [](https://stackoverflow.com/questions/40084398/is-onclose-always-called-after-onerror-for-websocket)
* **Provides actual diagnostics.** Browsers intentionally strip error details from the `onerror` event for security reasons so scripts cannot probe local networks. The `onclose` event provides `event.code` (such as `1000` for normal closure or `1006` for abnormal drops) and `event.reason`. [](https://javascriptbit.com/javascript-websockets-deep-dive/)
* **Prevents duplicate logic.** Handling reconnection timers or cleanup inside `onclose` ensures your recovery code runs once instead of firing twice (once in `onerror` and again in `onclose`).
* **Minor drawback.** If you want to log the exact moment an error occurred in the browser console before the socket finishes tearing down, you will miss that generic error signal.

### Listening to `onerror` Only (Not Recommended)

If you only attach an `onerror` listener and omit `onclose`, your application will have major blind spots.

* **Misses clean and server-initiated closures.** If the server restarts (`1012`), closes due to inactivity, or terminates normally (`1000`), `onerror` will never fire. Your app will think the socket is still connected.
* **Gives zero context.** As documented on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/error%5Fevent), the `error` event passes a generic `Event` object with no message, status code, or reason explaining what failed.
* **Breaks reconnection logic.** You cannot reliably detect dropped connections or know whether you should attempt to reconnect without `onclose`. [](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/error%5Fevent)

### Summary Comparison

| Scenario / Capability                 | onclose Only                 | onerror Only           | Both (onerror \+ onclose)               |
| ------------------------------------- | ---------------------------- | ---------------------- | --------------------------------------- |
| **Catches network crashes**           | Yes                          | Yes                    | Yes                                     |
| **Catches normal/server disconnects** | Yes                          | No                     | Yes                                     |
| **Provides close codes & reasons**    | Yes (event.code)             | No (hidden by browser) | Yes (in onclose)                        |
| **Best use case**                     | Reconnection & state cleanup | _Not viable alone_     | Logging in onerror, recovery in onclose |

The best practice outlined in the [WebSocket.org Error Handling Guide](https://websocket.org/guides/error-handling/) is to use `onerror` strictly for logging that an error happened, and put all your state updates, user notifications, and reconnection logic inside `onclose`. [](https://websocket.org/guides/error-handling/)

Are you trying to set up **automatic reconnection logic** or **debug a specific WebSocket failure**? If you share your current setup or close code, I can help write the exact handler for it.

* [](https://websocket.org/guides/error-handling/)  
WebSocket.org  
WebSocket Error Handling: Close Codes and Recovery  
Mar 16, 2026 — Practical rule: use onerror only for logging that an error occurred. Use onclose for all decision-making — whether to retry, what ...
* [](https://stackoverflow.com/questions/40084398/is-onclose-always-called-after-onerror-for-websocket)  
Stack Overflow  
Is onclose always called after onerror for WebSocket  
October 17, 2016 — According to the WebSocket specification, the \`onerror\` event is always followed by the \`onclose\` event, meaning you should always...
* [](https://javascriptbit.com/javascript-websockets-deep-dive/)  
javascriptbit.com  
WebSockets Deep Dive: Real  
April 13, 2026 — The Browser WebSocket API The native browser API is straightforward: const socket = new WebSocket('wss://example.com/chat'); code ...

Show all


