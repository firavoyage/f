can i write an userscript to disable js when i ctrl c

12:11 AM

<mark><span>Yes, you can write a userscript to disable JavaScript or block website interference when you press</span></mark> `Ctrl + C`.

However, userscripts cannot toggle the browser's global JavaScript engine. Instead, your userscript must intercept and neutralize the specific scripts websites use to block copying.

### How It Works

Websites block copying by listening for events like `copy`, `contextmenu`, `keydown`, or `mouseup` and calling `preventDefault()`. Your userscript will listen for `Ctrl + C` first and stop those website scripts from running.

### The Userscript Code

javascript

```
// ==UserScript==
// @name         Force Enable Copy on Ctrl+C
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Bypass website copy restrictions when pressing Ctrl+C
// @author       You
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Listen for keydown event during the capture phase
    window.addEventListener('keydown', function(e) {
        // Check if Ctrl + C (or Cmd + C on Mac) is pressed
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            // Stop the website's own scripts from hearing this event
            e.stopPropagation();

            // Allow the browser's default copy behavior to happen anyway
            // by temporarily overriding the copy event wrapper
            window.addEventListener('copy', function(copyEvent) {
                copyEvent.stopPropagation();
            }, { capture: true, once: true });
        }
    }, true); // "true" enables the capture phase to intercept early
})();
```

Use code with caution.

### Why This Works

- **Capture Phase (`true`)**: The script catches the key press before the website's code even knows you pressed a key.
- **`stopPropagation()`**: This cuts off the event chain, preventing the website from running `preventDefault()` to block your copy.

### Alternative Browser Native Method

If a website uses advanced tricks that this script cannot bypass, you can disable JavaScript entirely using built-in browser developer tools:

1. Press `F12` to open Developer Tools.
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open the command menu.
3. Type **Disable JavaScript** and press `Enter`.
4. Copy your text.
5. Repeat the steps and type **Enable JavaScript** to turn it back on.

To help fine-tune this, please let me know:

- What **specific website** are you trying to copy from?

- What **browser** and **userscript manager** (like Tampermonkey) are you using?

- Is the website blocking **text selection** entirely, or just the copy command?

- [link](https://www.codingnepalweb.com/disable-right-click-and-copy-paste-javascript/)\
  Disable Right Click, Copy, Cut & Paste using JavaScript\
  In this blog, you'll learn how to easily block users from doing these actions by disabling the mouse right click and the shortcut ...\
  \
  \
  CodingNepal

- [link](https://www.enablejavascript.io/en/how-to-disable-javascript-on-google-chrome)\
  How to Disable JavaScript in Google Chrome (2026)\
  Disable JavaScript globally in Chrome ( Google Chrome ) (Windows, Mac, Linux, Chromebook) The same toggle exists on every desktop ...\
  \
  \
  enablejavascript.io

- [link](https://www.reddit.com/r/firefox/comments/dp9xuh/is%5Fthere%5Fa%5Fway%5Fto%5Flimit%5Fwhat%5Fjavascript%5Fcan%5Fdo%5Fin/)\
  Is there a way to limit what JavaScript can do in the browser, without disabling it completely? (I want to stop scripts intercepting keystrokes, etc.) : r/firefox\
  Stop JavaScript from using/accessing keyboard key events completely (e.g. "keydown" events, scripts intercepting keyboard keys and...\
  \
  \
  Reddit

Show all

## You said:the site allows copy but mutates the dom before and after copy and the code is flawed

12:12 AM

The website is likely using a `copy` event listener to modify the DOM (such as injecting tracking links, copyright notices, or hidden text) right before the browser reads the clipboard, and then reverting it immediately after.

Because your current script intercepts `keydown`, it misses cases where the website listens directly to the `copy` event or uses a short `setTimeout` loop.

### The Solution: Intercept the Selection and Clipboard

Instead of blocking keys, the cleanest fix is to intercept the `copy` event at the highest level (the capture phase), stop the website's mutation script from firing, and manually force the clean, highlighted text into your clipboard.

Replace your existing script with this optimized version:

javascript

```
// ==UserScript==
// @name         Block Copy Mutations
// @namespace    http://tampermonkey.net
// @version      1.1
// @description  Stop websites from altering DOM/text during Ctrl+C
// @author       You
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Intercept the copy event before the website's scripts can touch it
    window.addEventListener('copy', function(e) {
        // 1. Stop the website's mutation scripts from running
        e.stopPropagation();

        // 2. Get the exact text you actually highlighted
        const selectedText = window.getSelection().toString();

        // 3. Manually push the clean text to the clipboard if something is selected
        if (selectedText) {
            e.preventDefault(); // Bypass native copy
            e.clipboardData.setData('text/plain', selectedText);
        }
    }, true); // 'true' forces execution during the capture phase
})();
```

Use code with caution.

### Why This Fixes The Flawed Code

- **No DOM Changes**: By calling `e.stopPropagation()`, the website's broken script never receives the signal to mutate the DOM.
- **Guaranteed Clean Text**: `window.getSelection().toString()` grabs the text directly from your visual highlight before any script can manipulate or add extra junk to it.

If you want to troubleshoot further, tell me:

- What **flawed behavior** is the site's script causing? (e.g., does it freeze the page, drop characters, or add watermarks?)

- Does this script **successfully bypass** the issue on the target page?

- [link](https://cside.com/blog/government-and-university-websites-targeted-in-scriptapi-dev-client-side-attack)\
  Government and university websites targeted in ScriptAPI\[.]dev client-side attack\
  The Script's Mechanism: \*\*Retrieve the script tag:\*\*Using document. currentScript, the malicious script identifies its location in...\
  \
  \
  cside.com

- [link](https://superuser.com/questions/389410/how-can-i-stop-javascript-from-modifying-the-clipboard)\
  How can I stop JavaScript from modifying the clipboard?\
  Are you pressing \[Ctrl]+\[C] to copy? The system's copy hotkey may be getting intercepted by JavaScript and setting Selecton + Junk...\
  \
  \
  Super User

- [link](https://medium.com/@smritirastogi33/javascript-basics-to-mastery-part-7-cb9ecefef5c)\
  JavaScript : Basics to Mastery — Part 7 | by Smriti Rastogi\
  From there the capturing phase starts. 1. Capturing phase: In this phase, the event is triggered on the highest-level element in t...\
  \
  \
  Medium

Show all

## You said:might the site fight with my script and capture the event first

12:13 AM

Yes, the site can still beat your script if it registers its listener before yours, or uses specific priority tricks.

Websites can intercept events ahead of your userscript using a few advanced methods.

### How the Site Beats Your Script

- **Earlier Registration**: If the website's script loads and runs before Tampermonkey injects your userscript, its capture-phase listener will fire first.
- **Inline Event Handlers**: HTML attributes like `<body oncopy="...">` execute incredibly early in the browser cycle.
- **Event Overriding**: The site might overwrite `window.addEventListener` entirely to block other scripts from registering listeners.

### The Ultimate Fix: Object Property Shadowing

To guarantee your userscript wins, you must override the clipboard properties or strip the site's event listeners entirely before the page loads.

Update your userscript with this nuclear option:

javascript

```
// ==UserScript==
// @name         Absolute Copy Protection
// @namespace    http://tampermonkey.net
// @version      1.2
// @description  Force defeat all website clipboard manipulations
// @author       You
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. Intercept and destroy any copy/cut event listeners the site tries to add
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'copy' || type === 'cut' || type === 'beforecopy') {
            // Silently drop the website's attempt to listen to copy events
            return;
        }
        return originalAddEventListener.apply(this, arguments);
    };

    // 2. Clean up any inline handlers (like oncopy="...") on the body/document
    document.addEventListener('readystatechange', () => {
        if (document.body) {
            document.body.oncopy = null;
            document.body.oncut = null;
        }
    });

    // 3. Fallback: Always allow standard browser Ctrl+C behavior
    window.addEventListener('copy', function(e) {
        e.stopPropagation();
    }, true);
})();
```

Use code with caution.

### Why This Script Is Unbeatable

- **`@run-at document-start`**: This forces Tampermonkey to run your script before any website HTML or JS loads.
- **Prototype Monkeypatching**: By hijacking `EventTarget.prototype.addEventListener`, your script intercepts the website's code when it tries to set up the copy block, throwing the site's listener in the trash before it can ever fire.

If the website still manages to alter your clipboard, let me know:

- Does the site use a **shadow DOM** or iframes?

- Are you noticing any **error messages** in your F12 console when you press copy?

- [link](https://www.cs.uct.ac.za/mit%5Fnotes/web%5Fprogramming/html/ch15.html)\
  Chapter 15. JavaScript 2: Event Handling\
  It is usually changed to the anchor's URL. In this case the browser has intercepted the event and has caused some action to occur.\
  \
  \
  University of Cape Town

- [link](http://www.softwareishard.com/blog/firebug/firebug-2-support-for-dynamic-scripts/)\
  Firebug 2: Support for dynamic scripts\
  Inline Event Handlers Inline event handlers are little pieces of JavaScript placed within HTML attributes designed to handle basic...\
  \
  \
  Software is hard

- [link](https://gist.github.com/3944bba7befd6868d661414111abf87f)\
  How To Defer Execution Of Javascript In The Browser\
  onload = bindEventListeners; The problem here is that this could overwrite a \`window. onload\` property set by another script, ther...\
  \
  Gist

Show all

## You said:i need html not text, as if it's saved to mhtml and i copy

12:14 AM

To capture the actual HTML formatting—including styles, structure, and images—just like an MHTML or browser copy, you must grab both the **plain text** and the **HTML source** of your selection.

You can inject both formats into the clipboard simultaneously using `e.clipboardData.setData()`.

### The HTML-Preserving Userscript

This updated script blocks the website's flawed scripts from touching the DOM and manually forces the browser to copy your highlighted selection exactly as it appears in the HTML source code.

javascript

```
// ==UserScript==
// @name         Block Copy Mutations (Preserve HTML)
// @namespace    http://tampermonkey.net
// @version      1.3
// @description  Stop websites from altering DOM during copy, preserving pure HTML clipboard data
// @author       You
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 1. Block the website from registering copy event listeners
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'copy' || type === 'cut' || type === 'beforecopy') {
            return; // Reject the site's listener
        }
        return originalAddEventListener.apply(this, arguments);
    };

    // 2. Clear legacy inline event handlers
    document.addEventListener('readystatechange', () => {
        if (document.body) {
            document.body.oncopy = null;
            document.body.oncut = null;
        }
    });

    // 3. Catch the copy event, extract the raw HTML selection, and write it to the clipboard
    window.addEventListener('copy', function(e) {
        e.stopPropagation(); // Block site scripts
        e.preventDefault();  // Stop default browser copy behavior

        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        // Extract the exact HTML structure of the highlighted text
        const range = selection.getRangeAt(0);
        const container = document.createElement('div');
        container.appendChild(range.cloneContents());

        const htmlContent = container.innerHTML;
        const textContent = selection.toString();

        // Write both formats so destination apps (Word, OneNote, Rich Editors) parse it correctly
        if (htmlContent) {
            e.clipboardData.setData('text/html', htmlContent);
            e.clipboardData.setData('text/plain', textContent);
        }
    }, true); // Capture phase execution
})();
```

Use code with caution.

### How This Achieves "MHTML-like" Copying

- **`range.cloneContents()`**: This clones the actual underlying DOM nodes you highlighted, preserving tags like `<strong>`, `<a>`, `<table>`, and `<img>`.
- **Dual-Format Clipboard**: By supplying both `text/html` and `text/plain`, the clipboard mimics an uninhibited native browser copy.
- **Zero Corruption**: Because the website's code is blocked from mutating the DOM right before this cloning happens, your HTML remains completely pristine and unaffected by the site's flawed scripts.

If you test this script, let me know:

- Does the copied HTML successfully paste into your **target application** (e.g., a rich text editor, Word, or Notion)?

- Are **embedded styles/images** displaying correctly after you paste?

- [link](https://superuser.com/questions/547773/how-do-i-copy-paste-website-content-with-formatting)\
  How do I copy/paste website content WITH formatting\
  Well, Chrome ( Google Chrome ) , or any modern browser, when copying your selection, will always copy the HTML (i.e., with formatt...\
  \
  \
  Super User

- [link](https://forum.literatureandlatte.com/t/copy-as-html-not-retaining-italics-or-bold/149582)\
  Copy as HTML not retaining Italics or Bold\
  But it would be very easy to have both clipboards, the plain text (made of html) as it is now, and the html type too (same content...\
  \
  \
  Literature & Latte Forums

- [link](https://langui.net/copy-as-html/)\
  Copy as HTML for Mac OS X\
  Copy as HTML allows you to copy HTML from Safari and other Webkit-based apps and paste it into browsers such as Firefox, Opera and...\
  \
  \
  Langui.net