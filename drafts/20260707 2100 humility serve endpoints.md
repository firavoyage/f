# how to parse url and parse payload and respond in hono

Here is how to parse URLs, parse payloads, and send responses in Hono.

### Parse URL Parameters

Hono provides built-in methods to extract path parameters and query strings.

- **Path parameters**: Use `c.req.param()`
- **Query strings**: Use `c.req.query()` or `c.req.queries()` for multiple values

javascript

```
app.get('/users/:id', (c) => {
  // Get path param (/users/123 -> "123")
  const id = c.req.param('id')

  // Get query param (?search=hono -> "hono")
  const search = c.req.query('search')

  return c.text(`User ${id} searched for ${search}`)
})
```

Use code with caution.

### Parse Request Payloads

You must await the parsing methods since request bodies are read asynchronously.

- **JSON body**: Use `c.req.json()`
- **Form data**: Use `c.req.parseBody()`

javascript

```
app.post('/submit', async (c) => {
  // Parse JSON payload
  const body = await c.req.json()

  // Parse HTML Form or Multipart data
  const formData = await c.req.parseBody()

  return c.json({ received: true })
})
```

Use code with caution.

### Send Responses

Hono offers quick helper methods to return different content types.

- **JSON**: Use `c.json()` (sets `application/json` header)
- **Plain Text**: Use `c.text()` (sets `text/plain` header)
- **HTML**: Use `c.html()` (sets `text/html` header)
- **Custom Status**: Pass the status code as the second argument

javascript

```
app.get('/download', (c) => {
  // Returns JSON with a 200 status
  return c.json({ success: true })
})

app.get('/error', (c) => {
  // Returns text with a 400 status
  return c.text('Bad Request', 400)
})
```

Use code with caution.

To help refine this code, let me know:

- What **runtime** are you using? (Cloudflare Workers, Bun, Node.js?)

- Do you need to validate the data using a tool like **Zod**?

- Are you handling **file uploads** in your payload?

- [link](https://fitech101.aalto.fi/en/courses/web-software-development-v1/part-3/4-hono-web-framework)\
  Hono Web Framework\
  Aug 4, 2012 — Hono's context object (c) provides access to request information such as method, path, query parameters, and path variables, and o...\
  \
  Aalto-yliopisto

- [link](https://fitech101.aalto.fi/en/courses/web-software-development-v1/part-3/4-hono-web-framework)\
  Hono Web Framework\
  Aug 4, 2012 — Hono context object and query parameters You need to retrieve the value of a query parameter name . Which statement correctly iden...\
  \
  Aalto-yliopisto

- [link](https://dev.to/bimaadi/integrate-hono-with-openapiswagger-3dem)\
  Integrate Hono with Openapi/Swagger\
  Jan 22, 2024 — Params and query can only be string. If it's not string hono will return never on c. req. valid("query"). If you want type other t...\
  \
  \
  DEV Community

Show all

## how to fetch on frontend

Here is how to make frontend fetch requests to your Hono backend using standard JavaScript or Hono's type-safe RPC client.

### Method 1: Standard Browser Fetch

Use the standard `fetch()` API to call your Hono endpoints. Ensure your backend has **CORS** enabled if your frontend is hosted on a different domain.

### Sending a GET Request with URL Parameters

javascript

```
// URL parameters and query strings
const userId = '123'
const search = 'hono'
const url = `https://example.com{userId}?search=${search}`

async function getUser() {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}
```

Use code with caution.

### Sending a POST Request with a JSON Payload

javascript

```
async function createUser() {
  const response = await fetch('https://example.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Alice', role: 'admin' }),
  })

  const data = await response.json()
  console.log(data)
}
```

Use code with caution.

### Sending a POST Request with Form Data

javascript

```
async function submitForm(formElement) {
  const formData = new FormData(formElement)

  const response = await fetch('https://example.com', {
    method: 'POST',
    body: formData, // Browser automatically sets 'multipart/form-data' header
  })

  const data = await response.json()
  console.log(data)
}
```

Use code with caution.

***

### Method 2: Hono's Type-Safe RPC Client (Recommended)

If your frontend shares a TypeScript codebase with your backend, you can use Hono's RPC feature. This gives you **auto-complete** and **type safety** for your URLs, payloads, and responses without manually writing paths.

### 1. Export the Type from your Backend

typescript

```
// backend/index.ts
const app = new Hono()

const route = app.post('/submit', async (c) => {
  const body = await c.req.json()
  return c.json({ success: true, message: `Hello ${body.name}` })
})

export type AppType = typeof route
```

Use code with caution.

### 2. Use the Client on your Frontend

typescript

```
// frontend/index.ts
import { hc } from 'hono/client'
import type { AppType } from '../backend/index'

// Create the type-safe client
const client = hc<AppType>('https://example.com')

async function createAppUser() {
  // URL, payload structure, and response are completely type-checked
  const res = await client.submit.$post({
    json: { name: 'Alice' },
  })

  const data = await res.json()
  console.log(data.message) // Auto-completes "message"
}
```

Use code with caution.

To help implement this on your frontend, tell me:

- What **frontend framework** are you using? (React, Vue, Vanilla JS, etc.)

- Are your frontend and backend in a **monorepo** together?

- Do you need to handle **authentication headers** (like Bearer tokens) in your requests?

- [link](https://www.linkedin.com/pulse/full-stack-magic-building-react-nodejs-powerhouse-file-sadhukhan-jik4f)\
  Master Full-Stack Development: React + Node.js Made Easy\
  Dec 18, 2024 — Enable CORS: If the frontend and backend are hosted on different domains, your browser might block requests. Add a CORS middleware...\
  \
  \
  LinkedIn

- [link](https://docs.hyva.io/hyva-themes/writing-code/using-fetch.html)\
  Using fetch() - Hyvä Docs\
  A simple fetch GET request As quick reminder, GET requests do not have request bodies, so any parameters need to be added to the r...\
  \
  \
  Hyva docs

- [link](https://serversideup.net/blog/sending-post-put-and-patch-requests-with-fetch-api-and-vuejs/)\
  Sending POST, PUT, and PATCH Requests with Fetch API and VueJS\
  Nov 15, 2021 — The POST method accepts the URL as the first parameter. This is the endpoint we will be hitting with data. The second parameter, t...\
  \
  \
  Server Side Up

Show all

# how to generate a free port on nodejs and know what is it

To generate a free port in Node.js and find out its number, you can bind a server to port `0`. The operating system will automatically assign an available random port.

Here is the cleanest way to do this using the native `net` module:

javascript

```
const net = require('net');

const server = net.createServer();

server.listen(0, () => {
  const { port } = server.address();
  console.log(`Assigned free port: ${port}`);

  // Close the server when done so the port frees up
  server.close();
});
```

Use code with caution.

### Key Steps Explained

- **Listen to `0`**: Tells the OS to find any unassigned port.
- **`server.address()`**: Returns an object containing the assigned port number.
- **`server.close()`**: Releases the port immediately so your actual application can use it.

### Alternative: Using Third-Party Packages

If you prefer a ready-made solution that handles edge cases, use the popular `get-port` package.

bash

```
npm install get-port
```

Use code with caution.

javascript

```
import getPort from 'get-port';

const port = await getPort();
console.log(`Free port found: ${port}`);
```

Use code with caution.

Would you like help **integrating this logic** into an Express application, or do you need to find a free port within a **specific range**?

- [link](https://maximorlov.com/tips/assign-a-random-port-to-nodejs-server/)\
  Assign a Random Port to Node.js Server\
  Assign a Random Port to Node. js Server 💡 How do you conveniently assign an available port to an app? 👉🏼 Use PORT=0! The kernel...\
  \
  \
  maximorlov.com
- [link](https://coderwall.com/p/jr7big/nodejs-listen-on-port-0-in-a-cluster)\
  nodejs - listen on port 0 in a cluster (Example)\
  Dec 30, 2020 — server. listen(0) First, what do you expect to happen when you listen on port 0? It means that I don't care what port I'm listenin...\
  \
  Coderwall
- [link](https://javascript.plainenglish.io/node-js-building-a-client-server-application-171b9e04fd7a)\
  Node.js: Building a Client-Server Application | by Vaibhav Moradiya\
  May 2, 2023 — The server. address() method is used to retrieve information about the server's address. If the server is listening on an IP socke...\
  \
  \
  JavaScript in Plain English

## i use hono

To use a dynamically assigned free port with **Hono**, you can pass `port: 0` into the `serve` function from `@hono/node-server`. The operating system will automatically assign an available port, which you can then read from the server object.

Here is the exact code to achieve this:

javascript

```
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

const server = serve({
  fetch: app.fetch,
  port: 0 // 0 tells the OS to assign a random free port
}, (info) => {
  // The callback provides the assigned port automatically
  console.log(`Hono is running on port: ${info.port}`)
})
```

Use code with caution.

### Why this works:

- **`port: 0`**: Forces Node.js to look for any unoccupied port.
- **`info.port`**: The Hono callback provides an object containing the final, system-allocated port number.

Would you like to know how to **pass this port number** to another service, or do you need help setting up **graceful shutdown** to free the port when the server stops?

- [link](https://marichi.medium.com/hono-tutorial-pt-1-409a9dc3b4cc)\
  Hono Tutorial Pt. 1. Create a Hono application from the… | by Kiran Chauhan | Medium\
  Jul 19, 2024 — Now, to run the application on a given port, we need to use the @hono/node-server package. Import serve from @hono/node-server pac...\
  \
  \
  Medium

## what does info include

In Hono's Node.js server, the `info` object passed to the callback includes three properties: `address`, `family`, and `port`.

It is a direct mapping of the native Node.js `server.address()` object.

Here is the exact structure of the `info` object:

json

```
{
  "address": "127.0.0.1",
  "family": "IPv4",
  "port": 54321
}
```

Use code with caution.

### Property Breakdown

- **`address`**: The IP address the server is bound to (e.g., `127.0.0.1`, `::1`, or `0.0.0.0`).
- **`family`**: The IP version string, either `IPv4` or `IPv6`.
- **`port`**: The final port number assigned by the operating system.

Would you like to see how to use these properties to **format a full URL string** (like `http://localhost:port`), or do you need help **binding to a specific IP address** like `0.0.0.0`?

- [link](https://www.computernetworkingnotes.com/networking-tutorials/ipv4-header-structure-and-fields-explained.html)\
  IPv4 Header Structure and Fields Explained\
  Mar 9, 2026 — Version This field sets the version of the IP protocol. As mentioned earlier, there are two versions of the IP protocol. If the va...\
  \
  \
  ComputerNetworkingNotes

# can you pass an object w symbols in c.json in hono

Yes, you can pass an object with symbols into `c.json()` in Hono, but the symbols will be stripped out of the final response.

JSON format does not support the Symbol data type.

### How Hono Handles Symbols

Hono uses standard JavaScript `JSON.stringify()` under the hood to serialize objects.

- **Property Keys**: If a symbol is used as an object key, `JSON.stringify()` skips it completely.
- **Property Values**: If a symbol is used as an object value, `JSON.stringify()` converts it to `undefined`, which skips the property.

### Code Example

javascript

```
app.get('/data', (c) => {
  const mySymbol = Symbol('id')

  const user = {
    [mySymbol]: 'hidden-123', // Skipped (Symbol key)
    name: 'Alice',
    role: Symbol('admin')      // Skipped (Symbol value)
  }

  return c.json(user)
  // Response body will be: {"name":"Alice"}
})
```

Use code with caution.

### Workarounds

If you must send symbol data to the client, you have two options:

- **Convert to String**: Call `.toString()` or `.description` on the symbol before passing the object to `c.json()`.
- **Custom Replacer**: Pass a replacer function into a manual serialization step, though it must still output strings or numbers.

To help find the best approach, let me know **why you need to send symbols** or **what frontend framework** is receiving this data.

- [link](https://thecodebarbarian.com/a-practical-guide-to-symbols-in-javascript.html)\
  A Practical Guide to Symbols in JavaScript | www.thecodebarbarian.com\
  Aug 28, 2019 — Since symbols cannot be represented in JSON, there's no risk of data passed into an Express API having a bad Symbol. iterator prop...\
  \
  \
  The Code Barbarian
- [link](https://codesweetly.com/json-explained/)\
  JSON Explained – How to Use JSON with JavaScript\
  Suppose the JavaScript object you wish to convert contains a function. In such a case, JSON ( JavaScript Object Notation ) . strin...\
  \
  \
  CodeSweetly
- [link](https://www.servicenow.com/docs/r/api-reference/server-api-reference/c%5FJSONAPI.html)\
  JSON - Global\
  If a function, undefined, or a symbol is encountered during conversion, it is either omitted (when it is found in an object) or ce...\
  \
  ServiceNow

Show all

## can i override tostring of a symbol to make json stringify work w it

No, you cannot override `Symbol.prototype.toString` to make `JSON.stringify()` serialize it.

`JSON.stringify()` completely ignores Symbol keys and values by design at the language level. It does not call `.toString()` on them during serialization.

### Why It Fails

javascript

```
// This will NOT work
Symbol.prototype.toString = function() {
  return `"${this.description}"`;
};

const obj = { id: Symbol("123") };
JSON.stringify(obj); // Returns "{}" instead of '{"id":"123"}'
```

Use code with caution.

### The Solution: Use a JSON Replacer

Instead of modifying the Symbol prototype, use the native `replacer` argument in `JSON.stringify()`. This function intercepts values before serialization, allowing you to convert Symbols into strings.

javascript

```
const user = {
  id: Symbol("123"),
  name: "Alice"
};

// Replacer function converts symbols to their string descriptions
const symbolReplacer = (key, value) => {
  if (typeof value === 'symbol') {
    return value.description;
  }
  return value;
};

// Works perfectly
JSON.stringify(user, symbolReplacer);
// Returns: '{"id":"123","name":"Alice"}'
```

Use code with caution.

### How to use this in Hono

Since Hono's `c.json()` does not accept a custom replacer function directly, you have to stringify the object yourself and return it using `c.body()` with the correct content-type header.

javascript

```
app.get('/data', (c) => {
  const data = { id: Symbol("user_456"), name: "Bob" };

  const jsonString = JSON.stringify(data, (key, value) => {
    return typeof value === 'symbol' ? value.description : value;
  });

  return c.body(jsonString, 200, {
    'Content-Type': 'application/json'
  });
});
```

Use code with caution.

Would you like to see how to **parse these strings back into symbols** on the client side, or do you need a way to handle **Symbol object keys** as well?

- [link](https://www.udacity.com/blog/javascript-json-stringify/)\
  Converting Javascript Objects into Strings with JSON.stringify()\
  Apr 2, 2021 — Symbol Keys and Values If a Javascript object contains a key that is a Symbol object (which is sometimes necessary for text in oth...\
  \
  \
  Udacity
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Symbol/toString)\
  Symbol.prototype.toString() - JavaScript | MDN\
  Jul 10, 2025 — However, because Symbol. prototype\[Symbol. toPrimitive]\() returns a symbol primitive, and symbol primitives throw a TypeError when...\
  \
  MDN Web Docs
- [link](https://www.executeprogram.com/courses/modern-javascript/lessons/customizing-json-serialization)\
  Customizing JSON Serialization Lesson\
  JSON. stringify takes a JavaScript object or value as its argument, and turns it into JSON. We can customize its output by passing...\
  \
  \
  Execute Program

Show all

# 