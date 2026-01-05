<!-- https://chatgpt.com/c/695a3dae-93a0-8320-b3aa-1fcdeb17b78c -->

# 0

write a userscript.

whenever seeing zh.moegirl.org.cn in the url, replace that with moegirl.icu

---

Here’s a simple **userscript** (for Tampermonkey / Greasemonkey) that automatically replaces `zh.moegirl.org.cn` with `moegirl.icu` and redirects you.

```javascript
// ==UserScript==
// @name         Moegirl Domain Redirect
// @namespace    https://example.com/moegirl-redirect
// @version      1.0
// @description  Redirect zh.moegirl.org.cn to moegirl.icu
// @match        *://zh.moegirl.org.cn/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  const currentUrl = window.location.href;
  const newUrl = currentUrl.replace("zh.moegirl.org.cn", "moegirl.icu");

  if (currentUrl !== newUrl) {
    window.location.replace(newUrl);
  }
})();
```

### Notes

- Uses `@run-at document-start` so the redirect happens immediately.
- `window.location.replace` avoids adding the old URL to browser history.
- The `@match` ensures it only runs on `zh.moegirl.org.cn`.

If you want a version that also handles subdomains or works via `@include`, I can adjust it.
