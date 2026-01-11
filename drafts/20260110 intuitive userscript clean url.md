<!-- https://chatgpt.com/c/69627586-aecc-832a-b58f-46df72194df7 -->

# 0

write a userscript to remove uncessary things in url like utm source

---

Absolutely! I can help you write a **userscript** (for Tampermonkey, Greasemonkey, or similar) that automatically removes unnecessary URL parameters like `utm_source`, `utm_medium`, `utm_campaign`, etc.

Here’s a clean, ready-to-use script:

```javascript
// ==UserScript==
// @name         Clean URL Parameters
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove tracking parameters like utm_source from URLs
// @author       Your Name
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  // List of query parameters to remove
  const paramsToRemove = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "igshid",
    "mc_cid",
    "mc_eid",
  ];

  // Parse current URL
  const url = new URL(window.location.href);
  let changed = false;

  paramsToRemove.forEach((param) => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      changed = true;
    }
  });

  // If any parameters were removed, redirect to the cleaned URL
  if (changed) {
    window.history.replaceState({}, document.title, url.toString());
  }
})();
```

### ✅ How it works:

1. Detects URL parameters like `utm_source` and `fbclid`.
2. Removes them without reloading the page.
3. Updates the URL in the address bar cleanly using `history.replaceState`.

---

If you want, I can make an **even smarter version** that **removes all unnecessary tracking parameters automatically**, including unknown ones, while keeping essential parameters like `ref` or session IDs intact.

Do you want me to do that?
