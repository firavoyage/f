<!-- https://chatgpt.com/c/6953ee24-79d8-8320-869d-be2a9f6b5d02 -->

<!-- gpt 5 thinking mini works. gpt 5.2 does not. -->

# 0

write an userscript.

on twitter, it always set the title to an invisible character. so it displays nothing on chromium, only an icon. elegant. great.

---

Nice — here's a compact, reliable userscript that _forces_ Twitter / X to use an invisible character (`\u200B`, zero-width space) as the page title so Chromium shows just the favicon. It watches for SPA navigation and title updates (MutationObserver + history hooks + fallback interval), so it stays invisible even when Twitter updates the title dynamically.

Install in Tampermonkey/Greasemonkey and it just works.

## Userscript

```javascript
// ==UserScript==
// @name         Twitter Invisible Title
// @namespace    https://example.local/
// @version      1.0
// @description  Replace Twitter / X page title with an invisible character so only the favicon shows (works across SPA navigations).
// @match        https://twitter.com/*
// @match        https://*.twitter.com/*
// @match        https://x.com/*
// @match        https://*.x.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // The invisible character used for the title (zero-width space).
  // If you prefer a different invisible char, change this constant.
  const INVISIBLE = "\u200B";

  // Set the document title to the invisible character if it's not already.
  function setInvisibleTitle() {
    try {
      if (document.title !== INVISIBLE) {
        document.title = INVISIBLE;
      }
    } catch (e) {
      // defensive: in case some strict environment prevents setting title
      // silently ignore
    }
  }

  // Ensure a <title> element exists and return it.
  function ensureTitleElement() {
    let t = document.querySelector("head > title");
    if (!t && document.head) {
      t = document.createElement("title");
      document.head.appendChild(t);
    }
    return t;
  }

  // Observe title element changes and override them immediately.
  function observeTitleElement(titleEl) {
    if (!titleEl) return null;
    const mo = new MutationObserver(() => setInvisibleTitle());
    // watch direct children + character data changes
    mo.observe(titleEl, {
      childList: true,
      characterData: true,
      subtree: true,
    });
    return mo;
  }

  // Patch history.pushState / replaceState so SPA navigations trigger our setter.
  function patchHistory() {
    try {
      const origPush = history.pushState;
      history.pushState = function () {
        const res = origPush.apply(this, arguments);
        setInvisibleTitle();
        return res;
      };
    } catch (e) {}

    try {
      const origReplace = history.replaceState;
      history.replaceState = function () {
        const res = origReplace.apply(this, arguments);
        setInvisibleTitle();
        return res;
      };
    } catch (e) {}
  }

  // Init sequence
  function init() {
    setInvisibleTitle();

    const titleEl = ensureTitleElement();
    const observer = observeTitleElement(titleEl);

    // Also react to popstate events (back/forward).
    window.addEventListener("popstate", setInvisibleTitle, { passive: true });

    // Patch history methods used by SPA routers.
    patchHistory();

    // Fallback: timer to re-enforce the invisible title in case something slips by.
    const fallbackInterval = setInterval(setInvisibleTitle, 700);

    // Optional: stop interval if the page unloads
    window.addEventListener(
      "beforeunload",
      () => clearInterval(fallbackInterval),
      { passive: true }
    );

    // Return hooks in case debugging is needed (not necessary)
    return { observer, fallbackInterval };
  }

  // If head isn't available yet, wait for DOMContentLoaded (should be quick).
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", init, {
      once: true,
      passive: true,
    });
  } else {
    init();
  }
})();
```

That's it — saves you the title clutter and leaves only the tab icon visible in Chromium. Want a toggle (hotkey / toolbar button) or to limit this to only certain twitter pages (e.g., not when composing)? Tell me and I’ll add it.

# 0 (d)

write an userscript.

on twitter, it always set the title to an invisible character. so it displays nothing on chromium, only an icon. elegant. great.

---

Here’s a simple **userscript** (Tampermonkey / Violentmonkey compatible) that forces Twitter/X to use an **invisible character** as the page title, so Chromium-based browsers show **only the favicon** with no text.

Twitter constantly rewrites `document.title`, so the script observes and overrides it continuously.

---

### Userscript: Blank Twitter Title

```javascript
// ==UserScript==
// @name         Twitter Invisible Title
// @namespace    https://example.com/twitter-invisible-title
// @version      1.0
// @description  Forces Twitter/X to use an invisible character as the page title
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    'use strict';

    // Invisible Unicode character (Zero Width Space)
    const INVISIBLE_TITLE = '\u200B';

    // Force title setter override
    Object.defineProperty(document, 'title', {
        set() {
            document.querySelector('title')?.textContent = INVISIBLE_TITLE;
        },
        get() {
            return INVISIBLE_TITLE;
        },
        configurable: true
    });

    // Fallback: keep resetting title in case Twitter bypasses the setter
    const enforce = () => {
        const titleEl = document.querySelector('title');
        if (titleEl && titleEl.textContent !== INVISIBLE_TITLE) {
            titleEl.textContent = INVISIBLE_TITLE;
        }
    };

    // Run early and keep enforcing
    new MutationObserver(enforce).observe(
        document.documentElement,
        { childList: true, subtree: true }
    );

    // Extra safety for SPA navigation
    setInterval(enforce, 500);
})();
```

---

### Notes / Tweaks

- Uses **U+200B (Zero Width Space)** — fully invisible, safe, and Chromium-friendly.
- MutationObserver + interval ensures Twitter’s SPA title updates never stick.
- If you want a _different_ invisible char, alternatives:

  - `\u2060` (Word Joiner)
  - `\uFEFF` (Zero Width No-Break Space)

Example swap:

```js
const INVISIBLE_TITLE = "\u2060";
```

---

If you want:

- favicon-only tabs **everywhere**
- per-account titles
- or dynamic titles when tab is active

…I can extend this elegantly 😌
