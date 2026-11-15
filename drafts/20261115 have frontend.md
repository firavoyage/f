# use snake case. use cheerio esm. write ts fn hook_navigation(html, url, replace). replace takes a url and maybe return a string. you resolve all relative links based on url to absolute, replace if it returns a string, and return the final html.

```
import { load } from "cheerio";

export function hook_navigation(
  html: string,
  url: string,
  replace: (url: string) => string | undefined,
): string {
  const $ = load(html);
  const base_url = new URL(url);

  $("a[href], area[href]").each((_, element) => {
    const href = $(element).attr("href");

    if (!href) return;

    try {
      const absolute_url = new URL(href, base_url).href;
      const replaced_url = replace(absolute_url);

      $(element).attr("href", replaced_url ?? absolute_url);
    } catch {
      // Leave invalid URLs unchanged.
    }
  });

  return $.html();
}
```

**Behavior:**

- Resolves relative URLs against `url`.
- Converts links to absolute URLs.
- Calls `replace` with each absolute URL.
- Uses the replacement only when it returns a string.
- Preserves the original URL when `replace` returns `undefined`.
- Leaves invalid URLs unchanged.
- Handles both `<a>` and `<area>` elements.

# use snake case. write ts fn trim trim_start, trim_end, take s and char. char can be string or string[] = whitespace.

```
type Trim_char = string | string[];

const trim_start = (s: string, char: Trim_char = " \t\n\r"): string => {
  const chars = new Set(Array.isArray(char) ? char : [...char]);
  let i = 0;

  while (i < s.length && chars.has(s[i])) {
    i++;
  }

  return s.slice(i);
};

const trim_end = (s: string, char: Trim_char = " \t\n\r"): string => {
  const chars = new Set(Array.isArray(char) ? char : [...char]);
  let i = s.length;

  while (i > 0 && chars.has(s[i - 1])) {
    i--;
  }

  return s.slice(0, i);
};

const trim = (s: string, char: Trim_char = " \t\n\r"): string =>
  trim_end(trim_start(s, char), char);
```

- `char` as a string: each character is treated as a trim character.
- `char` as `string[]`: each array entry is treated as a trim character.
- Default: whitespace (`space`, `tab`, `newline`, `carriage return`).
- Trims repeatedly until the first non-matching character.

**Example:**

```
trim("///hello///", "/");       // "hello"
trim_start("...hello", ".");    // "hello"
trim_end("hello!!!", "!");      // "hello"
trim("xxhelloxx", ["x", "o"]);  // "hell"
```

# use snake case. use fn statement. write ts fn trim trim_start, trim_end, take s and char. char can be string or string[] = whitespace.

```
type TrimChar = string | string[];

function trim(s: string, char: TrimChar = " \t\n\r"): string {
  const chars = new Set(Array.isArray(char) ? char : [...char]);

  return trim_end(trim_start(s, [...chars]), [...chars]);
}

function trim_start(s: string, char: TrimChar = " \t\n\r"): string {
  const chars = new Set(Array.isArray(char) ? char : [...char]);
  let i = 0;

  while (i < s.length && chars.has(s[i])) {
    i++;
  }

  return s.slice(i);
}

function trim_end(s: string, char: TrimChar = " \t\n\r"): string {
  const chars = new Set(Array.isArray(char) ? char : [...char]);
  let i = s.length;

  while (i > 0 && chars.has(s[i - 1])) {
    i--;
  }

  return s.slice(0, i);
}
```

**Behavior:**

- `char` as a string: each character is treated as a trim character.
- `char` as an array: each array element is treated as a trim character.
- Default: ASCII whitespace.
- `trim_start` removes from the beginning.
- `trim_end` removes from the end.
- `trim` removes from both ends.

# how to get everything after sth on hono regardless of path query or hash

To capture everything after a specific prefix in Hono (including nested paths and query strings), match the route with a wildcard (`*`) and slice the full URL string from `c.req.url`. [](https://hono.dev/docs/api/request)

### Important Limitation About URL Hashes (`#`)

Browsers **never** send URL hash fragments (anything starting with `#`) to the server in an HTTP request. Your Hono server will never receive `#section` from a browser request—only the path and query string are sent over the wire. (The only exception is if a client manually sends an unencoded `#` via `curl` or a custom HTTP client, in which case `c.req.url` will still capture it.)

### Solution: Wildcard Route + `c.req.url`

Using `c.req.param()` only captures path segments and ignores query strings. Instead, use a wildcard route to match everything under your prefix, and extract the remainder from the raw `c.req.url`: [](https://hono.dev/docs/api/routing)

ts

```
import { Hono } from 'hono'

const app = new Hono()

// Matches /proxy, /proxy/, /proxy/a/b/c?foo=bar&baz=1
app.all('/proxy/*', (c) => {
  const url = new URL(c.req.url)
  
  // Remove the '/proxy' prefix from the pathname + search + hash
  const prefix = '/proxy'
  const fullRest = (url.pathname + url.search + url.hash).slice(prefix.length)

  return c.text(fullRest) 
  // Request:  http://localhost:8787/proxy/users/123?active=true
  // Response: "/users/123?active=true"
})

```



### Key Details

* **Match both `/prefix` and `/prefix/...`.** In [Hono Routing](https://hono.dev/docs/api/routing), `/proxy/*` matches `/proxy`, `/proxy/`, and `/proxy/anything`. If `/proxy` is requested directly without a trailing slash, `fullRest` will cleanly evaluate to `""` (or `"?query=1"` if query parameters are present). [](https://hono.dev/docs/middleware/builtin/trailing-slash)
* **Strip the leading slash if needed.** If you want `"users/123?active=true"` instead of `"/users/123?active=true"`, use `.replace(/^\//, '')` on `fullRest`.
* **Why `c.req.url` works.** Unlike `c.req.path` (which strips query parameters) or regex parameters like `:path{.+}` (which only match the pathname), [c.req.url](https://hono.dev/docs/api/request) contains the complete incoming request URL string.
* **Alternative raw string split.** If you want to preserve exact raw encoding without `new URL()` normalizing characters, split `c.req.url` directly:  
ts  
```  
app.all('/proxy/*', (c) => {  
  const [, afterPrefix = ''] = c.req.url.split('/proxy')  
  return c.text(afterPrefix)  
})  
```  
  
_(Note: Only use `.split()` if `/proxy` cannot appear earlier in your domain name)._

Are you building a **reverse proxy** or a **redirect handler** with this route? If so, let me know and I can show you how to forward headers, body, and methods cleanly in Hono.

* [](https://hono.dev/docs/api/request)  
Hono  
HonoRequest  
November 6, 2026 — req which wraps a Request object. \* param() Get the values of path parameters. It returns matched routes within the handler, which...
* [](https://hono.dev/docs/api/routing)  
Hono  
Routing  
November 6, 2026 — Will match \`/api/animal\` and \`/api/animal/:type\` app. Routing with hostname \* const app = new Hono. Routing with host Header value...
* [](https://hono.dev/docs/middleware/builtin/trailing-slash)  
Hono  
Trailing Slash Middleware - Hono  
April 17, 2026 — When alwaysRedirect is set to true , the middleware redirects before executing handlers.

Show all


