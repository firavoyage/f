## can you use http verbs arbitrarily

<mark><strong><span>Technically, yes, you can use HTTP verbs arbitrarily</span></strong></mark>, but **practically and architecturally, you should not.**

From a purely protocol-based standpoint, HTTP verbs (methods) are just plain-text string tokens sent in the request line. However, abusing them or inventing your own breaks the core semantics of the web, creates severe security risks, and disrupts infrastructure. [link](https://www.reddit.com/r/programming/comments/1uvszuq/http%5Fgets%5Fa%5Fquery%5Fmethod%5Fso%5Fcomplex%5Fsearches%5Fcan/)

Here is a breakdown of what happens when you use HTTP verbs arbitrarily, what the protocol allows, and why it is dangerous.

***

### 1. The Technical Reality (What is Allowed)

The HTTP specification (governed by the IETF) does not strictly limit you to a closed list of verbs. [link](https://dev.to/andresclua/http-just-got-its-first-new-method-in-20-years-heres-why-you-should-care-2h5p)

- **Custom Verbs Work:** If you control both the client and the server, you can technically use a completely made-up verb like `FETCH_DATA` or `SPLORP`. Modern browser APIs (like the MDN Fetch API) and tools like `curl` will happily transmit arbitrary strings as the method. [link](https://www.reddit.com/r/programming/comments/1u84m2g/rfc%5F10008%5Fthe%5Fhttp%5Fquery%5Fmethod/)
- **The Official Registry:** The standard verbs (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`, etc.) are simply widely agreed-upon tokens. New official methods are introduced over time; for instance, the **`QUERY` method** (RFC 10008) was standardized to handle complex, idempotent data searches with a request body. [link](https://www.youtube.com/watch?v=L1DU13XiogA\&t=19)

### 2. The Practical Breakdown (Why It Fails)

If you start using `GET` to delete data, or use custom arbitrary strings, your system will break in the "real world" due to intermediary infrastructure: [link](https://www.reddit.com/r/programming/comments/1uvszuq/http%5Fgets%5Fa%5Fquery%5Fmethod%5Fso%5Fcomplex%5Fsearches%5Fcan/)

| Problem Area                    | What Breaks                                                                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Caching & Optimization**      | Browsers, Content Delivery Networks (CDNs), and proxies assume `GET` requests are **safe and idempotent** (they don't alter server state). If your arbitrary `GET` request deletes a user account, a pre-fetching bot or a CDN cache could accidentally trigger mass deletions. |
| **Network Infrastructure**      | Firewalls, load balancers, and Reverse Proxies (like Nginx or Apache) frequently block or drop non-standard or unexpected HTTP methods by default to prevent attacks.                                                                                                           |
| **API Framework Compatibility** | Most routing frameworks (e.g., Express, Spring, or Rails) are built around matching standard RESTful verbs to controllers. Handling arbitrary methods requires manual bypasses and extra code complexity.                                                                       |

### 3. Serious Security Risks (Verb Tampering)

Using arbitrary verbs or failing to explicitly secure them opens the door to a critical vulnerability known as **HTTP Verb Tampering**. [link](https://security.stackexchange.com/questions/199776/why-should-someone-block-all-methods-other-than-get-and-post-in-a-restful-applic)

Many Web Application Firewalls (WAFs) and code authentication filters are configured to protect specific methods: [link](https://security.stackexchange.com/questions/199776/why-should-someone-block-all-methods-other-than-get-and-post-in-a-restful-applic)

- _Example:_ A security rule states: `"Block unauthenticated users from sending POST requests to /admin"`.
- _The Flaw:_ If an attacker sends an arbitrary method like `FUZZ` or an unhandled standard method like `HEAD` or `OPTIONS`, a poorly configured server might route the request to the administrative code anyway, bypassing the authentication block entirely. [link](https://security.stackexchange.com/questions/199776/why-should-someone-block-all-methods-other-than-get-and-post-in-a-restful-applic)

### Best Practice Consensus

To build reliable software, always adhere to standard RESTful conventions: [link](https://www.youtube.com/watch?v=GWICcDF9g5U)

- Use **`GET`** exclusively for reading data (never modify state).
- Use **`POST`** for creating resources or executing non-idempotent operations.
- Use **`PUT`** / **`PATCH`** for updates.
- Use **`DELETE`** for removing resources.
- Explicitly configure your servers to reject or ignore unexpected or arbitrary HTTP methods using a strict whitelist. [link](https://community.sap.com/t5/technology-q-a/how-to-avoid-arbitrary-http-verbs-in-webservices/qaq-p/12459095)

Are you considering using a **custom HTTP verb** for a specific architectural need (like an RPC-style action), or are you trying to **secure an API** against unexpected methods? Let me know, and I can provide tailored implementation patterns.

AI can make mistakes, so double-check responses

- [link](https://www.reddit.com/r/programming/comments/1uvszuq/http%5Fgets%5Fa%5Fquery%5Fmethod%5Fso%5Fcomplex%5Fsearches%5Fcan/)\
  Reddit·r/programming\
  HTTP gets a QUERY method so complex searches can stop ...\
  Jul 14, 2026 — You can use custom HTTP verbs today. will hate you for it. HTTP verbs are a plain text string. The only issue would be if you need...
- [link](https://www.youtube.com/watch?v=L1DU13XiogA\&t=19)\
  YouTube·Cameron McKenzie\
  REST URLs and HTTP Verbs Explained: GET, POST, PUT ...\
  Aug 22, 2023 — PUT operations replace a resource on the server entirely with new data, PATCH operations allow for partial updates to server-side ...\
  12m
- [link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)\
  MDN Web Docs\
  HTTP request methods\
  The QUERY method initiates a server-side query. It requests that the target resource process the request content in a safe and ide...

Show all

## what if you use post whenever get doesnt fit

Using **`POST` as a fallback when `GET` doesn't fit is a very common, widely accepted industry practice**, even if it technically violates pure RESTful architecture.

In fact, some of the largest tech companies in the world (including GraphQL and Elasticsearch) fundamentally rely on `POST` for operations that are conceptually "reads."

Here is a breakdown of why `GET` sometimes fails, why `POST` is the standard workaround, and the trade-offs you make when doing this.

***

### Why `GET` Might Not Fit

There are three main scenarios where a developer is forced to abandon `GET` for a retrieval operation:

1. **The URL length limit is exceeded:** Standard `GET` requests pass parameters in the URL query string. While the HTTP spec doesn't enforce a maximum URL length, most browsers, CDNs, and web servers enforce a practical limit of **2,048 characters**. If you are sending a massive search filter, a long list of IDs, or complex JSON arrays, the URL will simply be cut off.
2. **Sensitive data is being transmitted:** URLs are heavily logged. They show up in browser histories, proxy server logs, firewall analytics, and SIEM tools. If you need to search for something sensitive (like a SSN, a medical diagnosis, or a password reset token), putting it in a `GET` query string exposes it to the entire infrastructure chain.
3. **Complex object nesting:** Expressing highly nested objects, arrays, or relational filters in a flat URL string (e.g., `?filter[user][age]=25&filter[order][status]=completed`) becomes incredibly messy and error-prone.

Because **`POST` allows a structured Request Body (JSON)**, it cleanly solves all three of these limitations.

***

### The Operational Trade-offs of Using `POST` for Reads

While using `POST` solves your immediate technical bottleneck, it strips away the built-in behaviors of the web. You must manually account for these missing features:

| Feature                   | The `GET` Behavior                                                                                    | The `POST` Behavior / Workaround                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Caching**               | **Automatic.** CDNs, browsers, and reverse proxies cache `GET` responses by default based on the URL. | **Disabled.** Infrastructure assumes `POST` changes data and will _never_ cache it automatically. You must manually handle application-level caching (e.g., Redis). |
| **Idempotency**           | **Guaranteed.** Making the request 100 times changes nothing on the server.                           | **Not Guaranteed.** If a user hits "refresh" on a browser after a `POST`, the browser will pop up a warning asking if they want to resubmit the data.               |
| **Bookmarking & Sharing** | **Easy.** A user can copy the URL and email it to a friend, who will see the exact same view.         | **Impossible.** Copying the URL only copies the base endpoint; the vital body payload is lost.                                                                      |

***

### Modern Solutions & Alternatives

If you find yourself frequently using `POST` because `GET` doesn't fit, there are a few modern ways the industry handles this:

- **The RPC Style Endpoint:** If you use `POST` to fetch data, name your endpoint like an action rather than a resource to keep your API clean. For example, instead of `POST /users` (which implies creating a user), use **`POST /users/search`** or **`POST /users/query`**.
- **The Standardized `QUERY` Method:** To bridge this exact gap, the IETF standardized the **`QUERY` HTTP method** ([RFC 10008](https://datatracker.ietf.org/doc/html/rfc10008)). It acts exactly like a `GET` (safe, idempotent, cacheable) but explicitly allows a request body. While client and server support for `QUERY` is growing, it is still not universally adopted by older proxies and firewalls.

Are you building an API that needs to support **complex search filters**, or are you running into **security/logging concerns** with sensitive parameters? I can show you how to structure a `POST`-based search route safely, or how to implement a **hybrid approach** (like a temporary query token).

## what if you only use get and post regardless

Using **only `GET` and `POST` is one of the most common pragmatist patterns in web development.**

In fact, it is exactly how **GraphQL**, **gRPC-Web**, **HTML web forms**, and many enterprise **RPC (Remote Procedure Call)** architectures operate. From 1995 until the rise of REST in the late 2000s, the entire internet ran almost exclusively on just `GET` and `POST`.

If you decide to ignore `PUT`, `DELETE`, and `PATCH` entirely, your application will work perfectly fine, but your API design philosophy shifts away from standard REST and toward **RPC style**.

***

### The Architecture: How You Map Actions

In a standard REST API, the _HTTP verb_ tells you what action is happening to a resource. If you only have `GET` and `POST`, the _URL path_ must explicitly contain the action instead.

| System Action         | Standard REST Approach | Pragmatic `GET` / `POST` Approach       |
| --------------------- | ---------------------- | --------------------------------------- |
| **Fetch a profile**   | `GET /users/123`       | `GET /users/123`                        |
| **Create a profile**  | `POST /users`          | `POST /users` (or `POST /users/create`) |
| **Update an email**   | `PATCH /users/123`     | `POST /users/123/update`                |
| **Delete an account** | `DELETE /users/123`    | `POST /users/123/delete`                |

***

### The Major Advantages

- **Total Client Compatibility:** Standard HTML `<form>` tags in browsers natively _only_ support `GET` and `POST`. They cannot send a `PUT` or `DELETE` request without using JavaScript fetch calls. By sticking to these two, your backend remains universally compatible with every client environment, including highly restrictive legacy environments.
- **Simplified Security & Infrastructure:** Configuring firewalls, reverse proxies, and Web Application Firewalls (WAFs) becomes incredibly straightforward. You only have to whitelist two HTTP methods, significantly reducing the surface area for HTTP Verb Tampering vulnerabilities.
- **Reduced Bikeshedding:** Teams spend less time arguing over pedantic design details, such as whether a specific partial update should technically be a `PUT` or a `PATCH`.

***

### The Major Disadvantages

- **Loss of Out-of-the-Box Idempotency:** In REST, browsers, proxies, and network layers safely assume that `PUT` and `DELETE` are idempotent (repeating the request yields the same result and won't cause unexpected side effects). If you route updates and deletions through `POST`, the network views them as unsafe. If a user hits "refresh" or a network glitch resends a packet, an action like `POST /orders/123/refund` could accidentally execute twice unless you write custom code to prevent it.
- **Cluttered, Action-Heavy URL Spaces:** Instead of keeping URLs clean and focused strictly on the noun (e.g., `/users/123`), your API routing tables grow significantly larger because every resource requires explicit action endpoints (e.g., `/create`, `/update`, `/delete`, `/archive`).
- **Loss of Developer Self-Documentation:** Modern automated API documentation tools (like Swagger/OpenAPI) rely heavily on HTTP verbs to group and explain routes cleanly. An API using only `GET` and `POST` requires much more manual explanation in documentation because a developer cannot immediately guess how an action is triggered just by looking at a resource path.

### The Technical "Middle Ground": Method Overriding

If you want to build a backend that accepts standard REST verbs (`PUT`/`DELETE`), but your clients or firewalls are strictly limited to `GET` and `POST`, you can use **HTTP Method Overriding**.

You send a standard `POST` request, but append a special header or query parameter to trick the backend framework into treating it like a `PUT` or `DELETE`:

- **Using a Header:** `X-HTTP-Method-Override: DELETE`
- **Using a Query Parameter:** `POST /users/123?_method=DELETE`

Most modern backend frameworks (such as Express, Ruby on Rails, or Laravel) have built-in middleware to automatically read this header and route the request correctly.

Are you designing a brand new API and trying to choose between **REST conventions** and a **simplified RPC structure**, or are you working around a **specific client-side limitation**? Let me know what you are building so I can recommend the cleanest approach.

## what does rest or rpc mean

**REST** and **RPC** are <mark>the<span> </span><strong>two main design patterns used to build APIs</strong><span> </span>(Application Programming Interfaces)</mark>. They represent two completely different mindsets for how software applications should talk to each other over a network.

At a high level, **REST is focused on _nouns_ (resources)**, while **RPC is focused on _verbs_ (actions).**

***

### 1. REST (Representational State Transfer)

REST treats everything on the internet as a **resource** (a data object or a "noun"). You interact with these resources using a standardized set of built-in HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).

Think of REST like a standard filing cabinet. Every file has a unique label (a URL), and you can only perform a few standard actions on those files (read them, create a new one, update an existing one, or shred it).

- **The Mindset:** "Give me the user profile with ID 123."
- **URL Style:** Focused entirely on nouns.
  - `GET /users/123` (Fetch user)
  - `DELETE /users/123` (Delete user)
- **Key Benefit:** Highly scalable and predictable. Because it uses standard HTTP behaviors, web browsers and network infrastructure can automatically cache the data, saving massive amounts of server power.

### 2. RPC (Remote Procedure Call)

RPC treats an API like **executing a function on a remote server**. Instead of interacting with a static "resource," the client tells the server to run a specific piece of code or an action (a "verb").

Think of RPC like a drive-thru intercom or an automated phone system. You aren't interacting with physical files; you are shouting specific commands or pressing numbers to trigger distinct actions on the backend.

- **The Mindset:** "Run the `deleteUser` function and pass it parameter 123."
- **URL Style:** Focused heavily on actions.
  - `POST /deleteUser?id=123`
  - `POST /sendWelcomeEmail`
- **Key Benefit:** Simple and powerful for complex operations. If you need to trigger a multi-step workflow (like calculating tax, charging a card, and generating a shipping label all at once), a single RPC command like `POST /checkout` is much cleaner than trying to model that as a single "noun" in REST.

***

### Direct Comparison

| Feature             | REST                                          | RPC                                                |
| ------------------- | --------------------------------------------- | -------------------------------------------------- |
| **Core Concept**    | **Resources** (Nouns)                         | **Procedures** (Verbs / Functions)                 |
| **URL Example**     | `/orders/456`                                 | `/cancelOrder`                                     |
| **HTTP Verbs Used** | Uses all of them (`GET`, `POST`, `PUT`, etc.) | Mostly uses just `POST` (and sometimes `GET`)      |
| **Coupling**        | Loose (clients only need to know the URLs)    | Tight (clients must know the exact function names) |
| **Modern Formats**  | Standard REST APIs (JSON over HTTP)           | **gRPC** (Google's high-speed version), JSON-RPC   |

### Which one should you choose?

- **Choose REST** if you are building a public-facing web API where clients primarily need to perform basic CRUD operations (Create, Read, Update, Delete) on data tables.
- **Choose RPC** if you are building internal microservices, high-performance mobile-to-server connections, or systems that require complex, multi-step actions rather than simple data updates.

Are you trying to decide **which architectural style to use** for a new app, or are you working with an **existing API** and trying to figure out which pattern it follows? Let me know your project goals!

