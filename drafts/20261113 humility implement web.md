# can you hook ctrl n in a browser web app

**No, you cannot reliably hook or override `Ctrl+N` in a standard web browser.** Major browsers like Chrome, Edge, and Firefox reserve `Ctrl+N` (along with `Ctrl+T` and `Ctrl+W`) at the browser level to open a new window before JavaScript `keydown` events can intercept it. [](https://stackoverflow.com/questions/38838302/any-way-to-override-ctrln-to-open-a-new-window-in-chrome)

### Why It Cannot Be Overridden

* **Browser Security and UX:** As noted by developers on [Stack Overflow](https://stackoverflow.com/questions/38838302/any-way-to-override-ctrln-to-open-a-new-window-in-chrome), Chrome has strictly prevented client-side JavaScript from blocking `Ctrl+N` since version 4\. Calling `event.preventDefault()` on a `keydown` listener has no effect because the browser intercepts the keystroke before passing it to the DOM. [](https://learn.microsoft.com/en-us/answers/questions/2372285/issue-is-that-keyboard-shortcuts-ctrl-n-interprete)
* **Consistent Cross-Browser Rules:** Other major browsers follow the same restriction. According to a thread on [Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/2372285/issue-is-that-keyboard-shortcuts-ctrl-n-interprete), Microsoft Edge prioritizes its native window-management shortcuts over web page scripts. Firefox enforces the same rule, even inside WebExtension popups, as discussed on [Mozilla Discourse](https://discourse.mozilla.org/t/unable-to-suppress-browser-shortcut-keys-ctrl-n-ctrl-s-from-webextension-popup/21255).

### Workarounds and Alternatives

* **Installed PWAs (Standalone Mode):** If your web app is configured as a Progressive Web App (PWA) and the user installs it to their desktop, it runs in a standalone window without browser tabs or standard navigation bars. In this mode, browsers generally allow the app to capture `Ctrl+N`.
* **Keyboard Lock API (Fullscreen Only):** Modern Chromium browsers support the `navigator.keyboard.lock()` API. However, this only works when the web app is actively running in **fullscreen mode** and requires explicit user interaction to enter fullscreen first.
* **Alternative Shortcuts:** The most reliable cross-platform approach for standard web apps is to bind your "New" action to an unreserved shortcut, such as `Alt+N`, `Ctrl+Alt+N`, or single-key shortcuts (like pressing `C` or `N` when no text input is focused, similar to Gmail or Notion). [](https://sashika.medium.com/j-k-or-how-to-choose-keyboard-shortcuts-for-web-applications-a7c3b7b408ee)

Are you building a **standard web page**, a **Progressive Web App (PWA)**, or an **Electron/desktop wrapper**? Let me know your setup and I can share the best way to implement custom keyboard shortcuts for it.

* [](https://stackoverflow.com/questions/38838302/any-way-to-override-ctrln-to-open-a-new-window-in-chrome)  
Stack Overflow  
Any way to override Ctrl+N to open a new window in Chrome?  
August 8, 2016 — In Google Chrome, it is not possible to override the default behavior of the Ctrl+N shortcut using client-side JavaScript within a...
* [](https://learn.microsoft.com/en-us/answers/questions/2372285/issue-is-that-keyboard-shortcuts-ctrl-n-interprete)  
Microsoft Learn  
Issue is that keyboard shortcuts(Ctrl+N) interpreted by the ...  
July 6, 2021 — For custom web applications, it is recommended to avoid using standard browser shortcuts like Ctrl+N and instead use alternative c...
* [](https://sashika.medium.com/j-k-or-how-to-choose-keyboard-shortcuts-for-web-applications-a7c3b7b408ee)  
Medium·Sasha Maximova  
J, K, or How to choose keyboard shortcuts for web applications  
November 5, 2013 — Ctrl+N, Ctrl+O, Ctrl+S, Ctrl+P, Ctrl+W, etc. native browser shortcuts for the page content, like Ctrl+C, Ctrl+Z, Ctrl+F, spacebar ...

Show all


