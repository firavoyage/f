# how to serve wildcard api endpoint on hono js

To serve a wildcard API endpoint in **Hono.js**, you can use either a simple star wildcard (`*`) or a regex-based path parameter. The method you choose depends on whether you need to capture the sub-paths or just match them. [](https://hono.dev/docs/api/routing)

---

### Option 1: The Simple Wildcard (`*`)

Use this if you want to **match** any route that fits a pattern, but you **don't need to read** the exact wildcard value inside your code. [](https://hono.dev/docs/api/routing)

ts

```
import { Hono } from 'hono'
const app = new Hono()

// Matches /wild/anything/card, /wild/123/card, etc.
app.get('/wild/*/card', (c) => {
  return c.text('Matched a wildcard path!')
})

// Matches any route starting with /api/
app.get('/api/*', (c) => {
  return c.text('Matches any endpoint under /api/')
})

```



---

### Option 2: Catch-All Parameter with RegEx (Recommended)

If you need to **capture the exact sub-paths** (e.g., if a user visits `/api/v1/users/profile` and you want to extract `v1/users/profile`), you must use a route parameter constrained by a regular expression (`{.+}`). [](https://github.com/honojs/hono/issues/4158)

ts

```
import { Hono } from 'hono'
const app = new Hono()

// The ":path{.+} catch-all syntaxes grab everything after /api/
app.get('/api/:path{.+}', (c) => {
  const wildcardValue = c.req.param('path') 
  
  // If the request was /api/v1/users/settings
  // wildcardValue will be "v1/users/settings"
  
  return c.json({
    message: "Catch-all triggered",
    capturedPath: wildcardValue
  })
})

```



### Direct Comparison

| Feature             | Simple Wildcard (\*)         | Catch-All Parameter (:path{.+} )                |
| ------------------- | ---------------------------- | ----------------------------------------------- |
| **Extract Value?**  | ❌ No, it just matches.       | Yes, via c.req.param('path').                   |
| **Middle-of-path?** | Yes (e.g., /foo/\*/bar)      | ❌ No, best used at the end of a path.           |
| **Use Case**        | Routing or basic middleware. | Proxies, reverse-routing, or dynamic CMS pages. |

If you want to refine this, let me know:

* Do you need to **forward/proxy** these requests to another server?
* Do you want this wildcard to apply to **all HTTP methods** (GET, POST, etc.), or just one?

I can provide the exact code block tailored to your architectural setup!

* [](https://hono.dev/docs/api/routing)  
Hono  
Routing - Hono  
August 3, 2026 — Basic ts // HTTP Methods app . Wildcard app . get ('/wild/\*/card', ( c ) Any HTTP methods app . Custom HTTP method app . Multiple ...
* [](https://github.com/honojs/hono/issues/4158)  
GitHub  
Routing support for wildcard parameters #4158 - hono - GitHub  
May 23, 2025 — it can support a wildcard parameter with regexp like the following: app. get('/posts/:path{.+}', async (c) text(c. req. param("pat...