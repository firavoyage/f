# how to use websocket on web

## how to use websocket on web

In a web page, use the browser’s built-in `WebSocket` API to connect to a WebSocket **server**. Use `wss://` on HTTPS sites; `ws://` is for non-secure connections.

```html
<script>
  const socket = new WebSocket("wss://example.com/socket");

  socket.addEventListener("open", () => {
    console.log("Connected");
    socket.send(JSON.stringify({ type: "hello" }));
  });

  socket.addEventListener("message", (event) => {
    // Messages arrive as strings unless the server sends binary data.
    const data = JSON.parse(event.data);
    console.log("Received:", data);
  });

  socket.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
  });

  socket.addEventListener("close", (event) => {
    console.log("Disconnected:", event.code, event.reason);
  });
</script>
```

The server must support the WebSocket protocol; a regular HTTP endpoint won’t work. For example, a simple Node.js server using the `ws` package:

```bash
npm install ws
```

```js
const { WebSocketServer } = require("ws");

const server = new WebSocketServer({ port: 8080 });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("Received:", message.toString());
    socket.send(JSON.stringify({ type: "reply", text: "Hello from server" }));
  });
});
```

For local testing, connect the browser to `ws://localhost:8080`. In production, use `wss://`. Also handle unexpected disconnects if your app needs to reconnect, and validate/authenticate messages on the server.