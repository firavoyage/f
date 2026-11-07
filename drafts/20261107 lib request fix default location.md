# browser js window.location

In browser JavaScript, `window.location` is an object that provides information about the current page's URL and lets you navigate to another URL.

### Common properties

```
window.location.href      // Full URL
window.location.hostname  // example.com
window.location.host      // example.com:8080
window.location.protocol  // https:
window.location.port      // 8080
window.location.pathname  // /path/to/page
window.location.search    // ?id=123
window.location.hash      // #section
window.location.origin    // https://example.com
```

### Common operations

```
// Get current URL
const url = window.location.href;

// Redirect to another page
window.location.href = "https://example.com";

// Reload current page
window.location.reload();

// Navigate without keeping current page in history
window.location.replace("https://example.com");

// Parse query parameters
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
```

### Example

Current URL:

```
https://example.com/products?id=123#details
```

```
console.log(window.location.origin);   // https://example.com
console.log(window.location.pathname); // /products
console.log(window.location.search);   // ?id=123
console.log(window.location.hash);     // #details
console.log(params.get("id"));          // 123
```

Note: `window.location` is also a `Location` object, so you can use `location` directly instead of `window.location`.

# what does each prop of browser js window.location do

`window.location` is a JavaScript browser object that contains information about the current URL of the webpage.

For example, suppose your browser is currently visiting:

```
https://www.example.com:8080/products/shoes?id=25&color=black#reviews
```

You can access different parts of this URL through `window.location`.

## 1. All properties of `window.location`

| Property                   | Value                          | Meaning                     |
| -------------------------- | ------------------------------ | --------------------------- |
| `window.location.href`     | Full URL                       | The entire current URL      |
| `window.location.origin`   | `https://www.example.com:8080` | Protocol + hostname + port  |
| `window.location.protocol` | `https:`                       | Protocol being used         |
| `window.location.host`     | `www.example.com:8080`         | Hostname + port             |
| `window.location.hostname` | `www.example.com`              | Domain name only            |
| `window.location.port`     | `8080`                         | Port number                 |
| `window.location.pathname` | `/products/shoes`              | Path of the webpage         |
| `window.location.search`   | `?id=25&color=black`           | Query string                |
| `window.location.hash`     | `#reviews`                     | URL fragment/hash           |
| `window.location.username` | Empty                          | Username in URL credentials |
| `window.location.password` | Empty                          | Password in URL credentials |

Note: `username` and `password` are generally empty and rarely used.

## 2. Each property explained

### `href`

Gets or changes the entire URL.

```
console.log(window.location.href);

// Redirect to another page
window.location.href = "https://google.com";
```

### `origin`

Returns the origin of the URL.

```
console.log(window.location.origin);

// https://www.example.com:8080
```

An origin consists of:

- Protocol
- Hostname
- Port (if specified)

### `protocol`

Returns the protocol.

```
console.log(window.location.protocol);

// https:
```

Common values:

- `http:`
- `https:`
- `file:`

### `host`

Returns the hostname and port.

```
console.log(window.location.host);

// www.example.com:8080
```

### `hostname`

Returns only the domain name.

```
console.log(window.location.hostname);

// www.example.com
```

### `port`

Returns the port number as a string.

```
console.log(window.location.port);

// 8080
```

If the URL doesn't explicitly specify a port, it usually returns an empty string.

### `pathname`

Returns the path after the domain.

```
console.log(window.location.pathname);

// /products/shoes
```

Useful for checking which page the user is visiting:

```
if (window.location.pathname === "/login") {
    console.log("User is on login page");
}
```

### `search`

Returns the URL query parameters, including the `?`.

```
console.log(window.location.search);

// ?id=25&color=black
```

You can extract individual parameters using `URLSearchParams`:

```
const params = new URLSearchParams(window.location.search);

console.log(params.get("id"));    // 25
console.log(params.get("color")); // black
```

### `hash`

Returns the fragment identifier, including `#`.

```
console.log(window.location.hash);

// #reviews
```

Useful for navigating to sections of a webpage.

```
window.location.hash = "contact";
```

This changes the URL fragment to `#contact`.

## 3. Methods of `window.location`

Besides properties, `window.location` also has useful methods.

| Method         | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| `assign(url)`  | Navigate to another URL; keeps current page in history |
| `replace(url)` | Navigate without keeping current page in history       |
| `reload()`     | Reload the current page                                |
| `toString()`   | Returns the current URL as a string                    |

Examples:

1\. assign()

```
window.location.assign("https://google.com");
```

2\. replace()

```
window.location.replace("https://google.com");
```

Difference: `replace()` prevents the user from returning to the previous page using the browser's Back button.

3\. reload()

```
window.location.reload();
```

Reloads the current page.

4\. toString()

```
console.log(window.location.toString());
```

Returns the full URL.

## 4. Visual breakdown of a URL

## URL anatomy

EXAMPLE URL

[https://www.example.com:8080/products/shoes?id=25#reviews](https://www.example.com:8080/products/shoes?id=25\&utm_source=chatgpt.com#reviews)

protocol

Connection protocol

https:

hostname

Domain name

www\.example.com

port

Port number

8080

pathname

Page path

/products/shoes

search

Query parameters

?id=25

hash

Page fragment

\#reviews

## 5. Practical example: Get everything at once

```
const location = window.location;

console.log({
    href: location.href,
    origin: location.origin,
    protocol: location.protocol,
    host: location.host,
    hostname: location.hostname,
    port: location.port,
    pathname: location.pathname,
    search: location.search,
    hash: location.hash
});
```

Important: `window.location` is read-only for most individual properties. You can read properties like `hostname` and `pathname`, but to navigate, you can assign to `href` or use methods such as `assign()` and `replace()`.

A useful next topic is understanding how `window.location` differs from `window.history`, `window.document.URL`, and the `URL` JavaScript class. These are commonly used together in browser JavaScript.

```
<div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" data-d-has-border="" style="border: 1px solid var(--color-border); border-radius: var(--dil-radius-lg); --w-box-gutter-block-end: calc(var(--spacing, 0.25rem) * 3); --w-box-gutter-block-start: calc(var(--spacing, 0.25rem) * 3); --w-box-gutter-inline-end: calc(var(--spacing, 0.25rem) * 3); --w-box-gutter-inline-start: calc(var(--spacing, 0.25rem) * 3); padding-block: calc(var(--spacing, 0.25rem) * 3); padding-inline: calc(var(--spacing, 0.25rem) * 3); gap: calc(var(--spacing, 0.25rem) * 3);"><h2 class="TextBase-hXhSqg Title-HRvkwB" data-d-text-flow="" data-d-component="title" data-d-size="lg" data-d-weight="semibold"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">URL anatomy</span></h2><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="--smoothing-background-color: var(--color-surface-secondary); border-radius: var(--dil-radius-md); --w-box-gutter-block-end: calc(var(--spacing, 0.25rem) * 3); --w-box-gutter-block-start: calc(var(--spacing, 0.25rem) * 3); --w-box-gutter-inline-end: calc(var(--spacing, 0.25rem) * 3); --w-box-gutter-inline-start: calc(var(--spacing, 0.25rem) * 3); padding-block: calc(var(--spacing, 0.25rem) * 3); padding-inline: calc(var(--spacing, 0.25rem) * 3); background-color: var(--color-surface-secondary); gap: calc(var(--spacing, 0.25rem) * 2);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" data-d-weight="medium" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">EXAMPLE URL</span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="semibold"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-inline=""><span class="Trigger-C5mz9C" data-d-component="popover-trigger" data-d-inline="" data-d-inline-text="" role="presentation" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed"><a class="" rel="noopener noreferrer" target="_blank" href="https://www.example.com:8080/products/shoes?id=25&amp;utm_source=chatgpt.com#reviews"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-inline="" data-d-text-decoration="underline-dotted"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">https://www.example.com:8080/products/shoes?id=25#reviews</span></span><span class="ms-1" data-d-stream-inline=""><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" class="InlineIcon-KLrnew" data-d-component="icon" data-d-inline="" style="display: inline-block; vertical-align: calc(0.5cap - 0.5em);"><path fill-rule="evenodd" d="M16.243 6.757a1 1 0 0 1 1 1v7.072a1 1 0 0 1-2 0v-4.657L8.464 16.95a1 1 0 0 1-1.414-1.414l6.778-6.779H9.172a1 1 0 0 1 0-2h7.07Z" clip-rule="evenodd"></path></svg></span></a></span></span></p></div><div class="Box-qIMv6G" data-d-align="center" data-d-component="row" data-d-direction="row" style="gap: calc(var(--spacing, 0.25rem) * 2);"><div class="Box-qIMv6G" data-d-auto-spacing="" data-d-component="box" data-d-direction="col" data-d-has-width="" data-d-has-height="" style="--smoothing-background-color: #3B82F6; border-radius: var(--dil-radius-sm); background-color: rgb(59, 130, 246); flex-shrink: 0; height: 10px; width: 10px;"></div><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="flex: 1 1 0%; gap: calc(var(--spacing, 0.25rem) * 0);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-default-strong="" data-d-inline=""><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">protocol</span></span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">Connection protocol</span></p></div><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="medium" data-d-tabular-nums="true"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">https:</span></p></div><div class="Box-qIMv6G" data-d-align="center" data-d-component="row" data-d-direction="row" style="gap: calc(var(--spacing, 0.25rem) * 2);"><div class="Box-qIMv6G" data-d-auto-spacing="" data-d-component="box" data-d-direction="col" data-d-has-width="" data-d-has-height="" style="--smoothing-background-color: #16A34A; border-radius: var(--dil-radius-sm); background-color: rgb(22, 163, 74); flex-shrink: 0; height: 10px; width: 10px;"></div><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="flex: 1 1 0%; gap: calc(var(--spacing, 0.25rem) * 0);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-default-strong="" data-d-inline=""><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">hostname</span></span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">Domain name</span></p></div><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="medium" data-d-tabular-nums="true"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">www.example.com</span></p></div><div class="Box-qIMv6G" data-d-align="center" data-d-component="row" data-d-direction="row" style="gap: calc(var(--spacing, 0.25rem) * 2);"><div class="Box-qIMv6G" data-d-auto-spacing="" data-d-component="box" data-d-direction="col" data-d-has-width="" data-d-has-height="" style="--smoothing-background-color: #D97706; border-radius: var(--dil-radius-sm); background-color: rgb(217, 119, 6); flex-shrink: 0; height: 10px; width: 10px;"></div><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="flex: 1 1 0%; gap: calc(var(--spacing, 0.25rem) * 0);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-default-strong="" data-d-inline=""><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">port</span></span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">Port number</span></p></div><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="medium" data-d-tabular-nums="true"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">8080</span></p></div><div class="Box-qIMv6G" data-d-align="center" data-d-component="row" data-d-direction="row" style="gap: calc(var(--spacing, 0.25rem) * 2);"><div class="Box-qIMv6G" data-d-auto-spacing="" data-d-component="box" data-d-direction="col" data-d-has-width="" data-d-has-height="" style="--smoothing-background-color: #8B5CF6; border-radius: var(--dil-radius-sm); background-color: rgb(139, 92, 246); flex-shrink: 0; height: 10px; width: 10px;"></div><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="flex: 1 1 0%; gap: calc(var(--spacing, 0.25rem) * 0);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-default-strong="" data-d-inline=""><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">pathname</span></span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">Page path</span></p></div><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="medium" data-d-tabular-nums="true"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">/products/shoes</span></p></div><div class="Box-qIMv6G" data-d-align="center" data-d-component="row" data-d-direction="row" style="gap: calc(var(--spacing, 0.25rem) * 2);"><div class="Box-qIMv6G" data-d-auto-spacing="" data-d-component="box" data-d-direction="col" data-d-has-width="" data-d-has-height="" style="--smoothing-background-color: #DB2777; border-radius: var(--dil-radius-sm); background-color: rgb(219, 39, 119); flex-shrink: 0; height: 10px; width: 10px;"></div><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="flex: 1 1 0%; gap: calc(var(--spacing, 0.25rem) * 0);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-default-strong="" data-d-inline=""><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">search</span></span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">Query parameters</span></p></div><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="medium" data-d-tabular-nums="true"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">?id=25</span></p></div><div class="Box-qIMv6G" data-d-align="center" data-d-component="row" data-d-direction="row" style="gap: calc(var(--spacing, 0.25rem) * 2);"><div class="Box-qIMv6G" data-d-auto-spacing="" data-d-component="box" data-d-direction="col" data-d-has-width="" data-d-has-height="" style="--smoothing-background-color: #0891B2; border-radius: var(--dil-radius-sm); background-color: rgb(8, 145, 178); flex-shrink: 0; height: 10px; width: 10px;"></div><div class="Box-qIMv6G" data-d-component="box" data-d-direction="col" style="flex: 1 1 0%; gap: calc(var(--spacing, 0.25rem) * 0);"><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text"><span class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-default-strong="" data-d-inline=""><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">hash</span></span></p><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-size="xs" style="color: var(--color-text-secondary);"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(205, 205, 205);">Page fragment</span></p></div><p class="TextBase-hXhSqg Text-lIMP0_" data-d-text-flow="" data-d-component="text" data-d-weight="medium" data-d-tabular-nums="true"><span data-d-stream-run="" data-d-text-flow="run" style="--d-stream-ink: rgb(237, 237, 237);">#reviews</span></p></div></div>
```

