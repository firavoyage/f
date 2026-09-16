# how to popup leave the site prompt when they exit

## how to popup leave the site prompt when they exit

Depending on what you want to achieve, there are two different ways to prompt a user when they try to leave your website:

1. **The System Native Dialog:** A standard browser prompt ideal for preventing data loss (e.g., unsaved form changes).
2. **An Exit-Intent Popup:** A custom-styled modal designed for marketing, newsletter signups, or discounts. [link](https://stackoverflow.com/questions/14366518/how-to-prompt-users-of-unsaved-changes-if-they-try-to-leave-the-webpage)

***

### Option 1: Browser Native "Leave Site?" Prompt (JavaScript)

To trigger the browser’s built-in confirmation dialog box, you must bind an event listener to the **`beforeunload`** window event. [link](https://dev.to/melvin2016/how-to-show-a-are-you-sure-to-leave-leave-site-etc-dialog-box-in-the-browser-before-the-user-leaves-using-javascript-30ia)

javascript

```
window.addEventListener('beforeunload', (event) => {
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = true;
});
```

Use code with caution.

#### Important Constraints:

- **Custom Text is Deprecated:** Modern browsers (Chrome, Firefox, Safari) no longer allow you to display a custom string or message inside this box. They will always display a generic message like _"Changes you made may not be saved. Are you sure you want to leave?"_ to prevent phishing and malicious site lockups. [link](https://teamtreehouse.com/community/how-to-add-the-leave-this-page-stay-on-this-page-popup-to-a-website-when-closing)
- **User Interaction Required:** The browser will **not** show this prompt unless the user has interacted with the page first (clicked, typed, etc.).

***

### Option 2: Custom "Exit-Intent" Popup (HTML/CSS/JS)

If your goal is to show a styled discount offer or a subscription form before they leave, you cannot use the system prompt. Instead, you must track the user's mouse cursor and trigger a hidden HTML modal when the cursor leaves the browser window boundary. [link](https://www.youtube.com/watch?v=MY00LiQWrBE)

#### Minimal Code Example:

html

```
<!-- The Hidden Popup Modal -->
<div id="exitPopup" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; padding:30px; box-shadow:0px 0px 15px rgba(0,0,0,0.5); z-index:9999; border-radius:8px;">
    <h2>Wait! Don't go empty-handed!</h2>
    <p>Sign up now to get 10% off your first order.</p>
    <button onclick="closePopup()">Close</button>
</div>

<script>
    let popupShown = false;

    // Detect when user mouse moves out of the top window boundary
    document.addEventListener('mouseleave', (event) => {
        // clientY < 0 indicates the mouse moved above the viewport (e.g., toward tabs/close button)
        if (event.clientY < 0 && !popupShown) {
            document.getElementById('exitPopup').style.display = 'block';
            popupShown = true; // Prevents the popup from opening repeatedly
        }
    });

    function closePopup() {
        document.getElementById('exitPopup').style.display = 'none';
    }
</script>
```

Use code with caution.

#### Alternative Platforms:

If you do not want to hard-code it, you can easily deploy these workflows using plug-and-play extensions or platforms:

- **WordPress:** Use plugins like [NotificationX](https://www.youtube.com/watch?v=-AjyW54f6GQ) or [Popup Maker](https://wppopupmaker.com/docs/exit-intent-trigger/introduction-exit-intent-popups/).
- **No-Code Tooling:** Embed visual widgets from builders like Elfsight or Bedo into your site. [link](https://www.youtube.com/watch?v=DHmaj%5F05GXc)

Which use case matches what you're trying to build?

- Are you trying to **prevent users from losing unsaved form data**?
- Are you trying to display a **marketing/discount modal**?

If you are using a specific framework like **React, WordPress, or Webflow**, let me know so I can tailor the implementation!

AI can make mistakes, so double-check responses

- [link](https://teamtreehouse.com/community/how-to-add-the-leave-this-page-stay-on-this-page-popup-to-a-website-when-closing)\
  teamtreehouse.com\
  How to add the "Leave this page" "Stay on this page" pop-up to a website when closing? (Example) | Treehouse Community\
  Nov 6, 2017 — You can use the onbeforeunload window event handler to add a pop-up to your website when you exit the page. The pop-up will ask yo...
- [link](https://www.youtube.com/watch?v=MY00LiQWrBE)\
  YouTube·Holden Digital\
  How to Add an Exit Intent Popup to HTML Website (2025)\
  Dec 23, 2025 — How to Add an Exit Intent Popup to HTML Website (2025) in this video. I will show you how to add an exit intent pop-up to your HTM...\
  6:09
- [link](https://www.youtube.com/watch?v=DHmaj%5F05GXc)\
  YouTube·Holden Digital\
  How to Add an Exit Intent Popup to Wix (2025) - YouTube\
  Dec 5, 2025 — How to Add an Exit Intent Popup to Wix (2025) - YouTube. This content isn't available. Sign up to Elfsight here 👉 https://go.elfs...

Show all

## can i block ctrl w

**No, you cannot block `Ctrl + W`** (or `Cmd + W` on a Mac) using JavaScript or any web technology.

Operating systems and web browsers purposely reserve this shortcut to ensure that users always have a way to close a tab and escape a website. If websites could block `Ctrl + W`, malicious sites could essentially hijack your browser.

However, you can influence what happens when a user presses it by leveraging the **`beforeunload`** event.

### What you CAN do instead

While you can't stop the browser from closing the tab, you can force it to ask the user for confirmation. This gives the user a chance to cancel the action and stay on your site.

javascript

```
window.addEventListener('beforeunload', (event) => {
    // This triggers the browser's standard confirmation dialog box
    event.preventDefault();
    event.returnValue = true;
});
```

Use code with caution.

### How this behaves during `Ctrl + W`

1. The user presses `Ctrl + W`.
2. The browser intercepts it and checks your code.
3. If the user has interacted with your page (clicked or typed), the browser pauses and shows a native popup asking: _"Leave site? Changes you made may not be saved."_
4. The user can click **Cancel** to stay on your page or **Leave** to let the tab close.

Are you trying to protect a specific action, like a **user losing progress on a long form** or a **game in progress**? Let me know, and I can show you how to activate this prompt only when they have unsaved changes.

## what are the preserved shortcuts

Browsers categorally divide keyboard shortcuts into two types: **overridable shortcuts** (which you can block or change using JavaScript's `e.preventDefault()`) and **preserved/reserved shortcuts** (which <mark>the browser strictly blocks web pages from intercepting</mark>). [link](https://stackoverflow.com/questions/44998250/which-chrome-keyboard-shortcuts-cannot-be-overridden-with-javascript)

The preserved shortcuts focus primarily on browser security, navigation, and window management. While exact restrictions can vary slightly by browser engine and Operating System, the standard list of untouchable shortcuts across major browsers includes: [link](https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts)

### 1. Window & Tab Destruction (Completely Blocked)

Browsers guarantee the user a way to close malicious, frozen, or annoying pages.

- `Ctrl + W` / `Cmd + W`: Closes the current tab.
- `Ctrl + Shift + W` / `Cmd + Shift + W`: Closes the entire window.
- `Alt + F4` (Windows): Closes the browser application entirely.
- `Ctrl + Shift + Q` (Chrome/Firefox Linux): Quits the browser. [link](https://stackoverflow.com/questions/42596142/unpreventable-keyboard-shortcuts-in-javascript)

### 2. Browser Navigation & Tab Traversal

You cannot prevent users from switching between tabs or opening new ones.

- `Ctrl + T` / `Cmd + T`: Opens a new tab.
- `Ctrl + N` / `Cmd + N`: Opens a new window.
- `Ctrl + Shift + T` / `Cmd + Shift + T`: Reopens the last closed tab.
- `Ctrl + Tab` / `Ctrl + Shift + Tab`: Cycles forward or backward through open tabs. [link](https://stackoverflow.com/questions/44998250/which-chrome-keyboard-shortcuts-cannot-be-overridden-with-javascript)

### 3. Native Address Bar Focus

- `Ctrl + L` / `Cmd + L`: Forces focus onto the browser's URL omnibox/address bar. This is a safety measure so a site cannot visually fake an address bar and stop you from navigating away. [link](https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts)

### 4. Operating System Hooks

Any keys mapped straight to the desktop architecture bypass the browser sandboxing layer entirely:

- `Ctrl + Alt + Delete` or `Ctrl + Shift + Esc` (Windows: Task Managers).
- `Cmd + Space` (Mac: Spotlight Search).
- **Windows Key / Command Key shortcuts** (`Win + D`, `Cmd + Tab`, etc.). [link](https://joshuatz.com/posts/2020/get-alt-keyboard-shortcuts-working-quickly-with-javascript/)

***

### 💡 What shortcuts _can_ you block?

For context, you **can** successfully override shortcuts that deal with content management or utilities inside the document viewport. Common examples include: [link](https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts)

- `Ctrl + S` (Often overridden by web apps like Google Docs or code editors to manually trigger a cloud save).
- `Ctrl + F` (To trigger a custom in-app search bar instead of the browser native text finder).
- `Ctrl + P` (To handle custom page print sizing).
- `Ctrl + D` (Overriding default bookmark behavior). [link](https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts)

Are you designing **custom hotkeys** for a web application, or are you trying to protect against a specific user action (like **accidental reloads / loss of data**)? Let me know what you are building!

- [link](https://www.robin-drexler.com/2015/07/07/overriding-default-browser-shortcuts)\
  Robin Drexler\
  Overriding default browser shortcuts with JavaScript\
  Jul 7, 2015 — To block default browser shortcuts, only a couple lines of JavaScript seem to be necessary. The "trick" is to prevent the default ...
- [link](https://stackoverflow.com/questions/44998250/which-chrome-keyboard-shortcuts-cannot-be-overridden-with-javascript)\
  Stack Overflow\
  Which Chrome keyboard shortcuts cannot be overridden with ...\
  Jul 9, 2017 — Which Chrome keyboard shortcuts cannot be overridden with Javascript? Ask Question. Asked 9 years ago. Modified 2 years, 11 months...
- [link](https://stackoverflow.com/questions/42596142/unpreventable-keyboard-shortcuts-in-javascript)\
  Stack Overflow\
  Unpreventable keyboard shortcuts in javascript\
  Mar 4, 2017 — Here are some keyboard shortcuts that cannot be prevented with JavaScript in modern browsers: \* \*\*Ctrl+N\*\* \* \*\*Ctrl+Shift+N\*\* \* \*\*

Show all

## what non strictly preserved shortcuts might commonly conflict

When designing custom hotkeys for a web application, you will frequently run into **non-strictly preserved shortcuts**. These are shortcuts that browsers _allow_ you to override via JavaScript's `event.preventDefault()`, but doing so is highly discouraged because it hijacks default browser utility features that users rely on.

If you overwrite these, you risk breaking your user's muscle memory, crippling standard browser accessibility tools, or causing severe layout bugs.

The most common conflicting (but technically overridable) shortcuts include:

### 1. Document & Page State Shortcuts

Overriding these disrupts how users naturally manage their view of a webpage.

- **`Ctrl + R` / `Cmd + R` (or `F5`):** Page Refresh. Intercepting this to do something else frustrates users who are trying to fix a lagging page.
- **`Ctrl + Shift + R` / `Cmd + Shift + R`:** Hard Reload (clearing cache).
- **`Ctrl + F` / `Cmd + F`:** Find on Page. If you override this with an in-app search, ensure it seamlessly replicates text-finding across the _entire_ document, or users won't be able to scan your text.
- **`Ctrl + P` / `Cmd + P`:** Print Document.
- **`Ctrl + S` / `Cmd + S`:** Save Page. _(Frequently overridden by cloud apps like Google Docs or Notion to trigger a cloud save, which users generally accept)._

### 2. Viewport Zooming

Altering zoom shortcuts breaks fundamental accessibility controls for visually impaired users.

- **`Ctrl + +` / `Cmd + +`:** Zoom in.
- **`Ctrl + -` / `Cmd + -`:** Zoom out.
- **`Ctrl + 0` / `Cmd + 0`:** Reset zoom to 100%.

### 3. Navigation History & Hierarchy

- **`Alt + Left Arrow` / `Cmd + [`:** Go back one page in history.
- **`Alt + Right Arrow` / `Cmd + ]`:** Go forward one page in history.
- **`Backspace` (Historical):** Legacy shortcut for going back a page. While modern browsers have mostly disabled this to prevent form data loss, some users still use extensions to map it.

### 4. Text Editing & System Clipboard Conflicts

If your web app features custom input forms, spreadsheets, or canvas layers, these core shortcuts will collide instantly with your custom mappings:

- **`Ctrl + A` / `Cmd + A`:** Select All.
- **`Ctrl + Z` / `Cmd + Z`:** Undo.
- **`Ctrl + Y` / `Cmd + Shift + Z`:** Redo.
- **`Ctrl + C` / `Ctrl + V` / `Ctrl + X`:** Copy, Paste, and Cut.

***

### 🛡️ How to avoid conflicts safely

If you absolutely must use powerful single-key or multi-key bindings, use these industry-standard best practices:

- **Leverage `Alt` / `Option`:** Browsers rarely use `Alt + Key` combos for essential navigation, making them ideal for custom app shortcuts (e.g., `Alt + N` for a new item).
- **Use Single Character Keys (Non-Inputs):** Look at how Gmail (`C` for compose, `K` to navigate) or GitHub (`/` to search) do it. They map single letters _only_ when the user is not actively typing inside a text field or input box.
- **Provide a "Remap Keys" Interface:** If you are building a complex platform (like a video editor, CAD tool, or IDE), allow users to customize their keybinds so they can resolve conflicts manually.

What kind of **web application or tool** are you building? If you share the specific actions you want to assign hotkeys to, I can suggest a conflict-free shortcut scheme!

## what non strictly preserved shortcuts might commonly conflict to the extent that i can not detect or prevent default before sth else already fired

While browsers technically allow you to use `addEventListener('keydown')` to intercept most non-preserved keys, a specific tier of shortcuts will **consistently fail to block or detect cleanly**.

In these scenarios, the operating system, a browser extension, or an embedded browser plug-in (like a PDF viewer) sits higher in the execution pipeline. They will **intercept and fire their action before your JavaScript event loop even registers the keydown event**.

The primary culprits behind these race-condition conflicts include:

### 1. Browser Development Tools (DevTools)

DevTools shortcuts are bound tightly to the browser architecture. In many browser engines, pressing these keys bypasses the webpage's DOM execution completely.

- **`F12`:** Opens Developer Tools. On many systems, `event.preventDefault()` on F12 is ignored entirely.
- **`Ctrl + Shift + I` / `Cmd + Option + I`:** Inspect Element / Toggle DevTools.
- **`Ctrl + Shift + J` / `Cmd + Option + J`:** Opens the Console directly.

### 2. Operating System Window Snapping & Display Controls

If an OS shortcut uses a modifier key that overlaps with your app, the operating system steals the input globally. Your web page will never know the key was pressed.

- **`Win + Left/Right Arrow` (Windows):** Snaps the browser window to the side of the screen.
- **`Ctrl + Alt + Arrow Keys` (Windows/Intel Graphics):** Historically flips or rotates the display orientation.
- **`Cmd + Option + Esc` (Mac):** Opens the Force Quit application menu.

### 3. Extension & Password Manager Overlays

Third-party extensions inject their scripts into your page, but they often hook into the browser's native hotkey API (`chrome.commands`), which executes **before your website’s scripts load or process events**.

- **`Ctrl + Shift + L` / `Cmd + Shift + L`:** The default shortcut for **Bitwarden** and several other password managers to autofill credentials.
- **`Ctrl + Shift + K` / `Cmd + Shift + K`:** Commonly registered by ad-blockers, translation tools, or productivity extensions to trigger custom overlays.

### 4. Input Method Editor (IME) & Dead Keys

If your users type in languages requiring an IME (like Japanese, Chinese, or Korean) or use keyboards with "dead keys" (for accents like `´` or `~`), the browser halts normal keydown processing.

- **`Space` or `Enter` during IME composition:** Instead of firing a standard space/enter event that you can intercept, the key is consumed by the operating system's language module to open a character selection menu.
- Your `keydown` event will show a `key` value of `"Process"` or a `keyCode` of `229`, completely breaking custom shortcut tracking until composition ends.

***

### 🛠️ How to handle these invisible conflicts

Because you cannot reliably block these, you must design around them:

1. **Avoid `F-keys` and `Shift + Ctrl + [Letter]` combinations:** These are the most heavily populated territories for extensions and dev tools.
2. **Listen to the `blur` event:** If an extension or an OS popup steals focus, your window will immediately fire a `window.onblur` event. You can use this to safely clear any active `isKeyPressed` states in your code so keys don't get "stuck" down when the user clicks back into your app.
3. **Check the `isComposing` flag:** If you are mapping shortcuts that use basic letters, always check `event.isComposing` to ensure you aren't interrupting a user typing via an IME.

Are you seeing a specific key combo **silently fail** or execute an unintended action in your app right now? Tell me the **exact shortcut** and the **operating system** you are testing on so we can debug it!

