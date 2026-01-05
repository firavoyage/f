<!-- https://chatgpt.com/c/695a2f8a-abdc-8320-9a49-871b85829e63 -->

# 0

using chrome on ubuntu, when opening telegram web it automatically launches the app, how to disable

---

Chrome is handing off **telegram.org / web.telegram.org** links to the **Telegram Desktop** app via a registered URL handler. You can stop this in a few different places on **Ubuntu + Chrome**.

---

## Method 1: Disable it in Chrome (most common fix)

1. Open **Chrome**
2. Go to:

   ```
   chrome://settings/handlers
   ```

3. Look for **Telegram** (or `tg:` protocol)
4. **Remove** it or toggle it **Off**

Also check:

```
chrome://settings/content/handlers
```

If Telegram is listed there, remove it.

---

## Method 2: Clear Chrome’s “Always open” choice

Sometimes Chrome remembers “Open with Telegram Desktop”.

1. Open **Telegram Web**
2. When the “Open Telegram Desktop?” dialog appears:

   - Click **Cancel**
   - Make sure **“Always allow”** is **unchecked**

If the dialog no longer appears, reset it:

1. Go to:

   ```
   chrome://settings/content/popups
   ```

2. Remove any Telegram-related entries

---

## Method 3: Remove Telegram as the default `tg://` handler (system-wide)

Telegram Desktop registers itself as the handler for `tg://` links.

Run this in a terminal:

```bash
xdg-mime default x-scheme-handler/tg
```

If you want to completely unregister Telegram:

```bash
xdg-mime query default x-scheme-handler/tg
```

If it returns `telegramdesktop.desktop`, you can override it by:

```bash
xdg-mime default chromium.desktop x-scheme-handler/tg
```

(or `google-chrome.desktop` depending on your install)

---

## Method 4: Telegram Desktop setting (if installed)

Open **Telegram Desktop** → **Settings** → **Advanced**

Disable:

- ✅ _Open links in Telegram Desktop_
- ✅ _Set as default application_

(Wordings vary by version.)

---

## Quick test

After applying any fix:

```bash
xdg-open https://web.telegram.org
```

It should stay in the browser and **not** launch the app.

---

### Recommended fix order

1️⃣ Chrome handler removal
2️⃣ Telegram Desktop setting
3️⃣ `xdg-mime` override (most reliable)

If you want, tell me:

- Ubuntu version
- Chrome vs Chromium
- Whether Telegram Desktop is Flatpak, Snap, or `.deb`

I’ll give you the **exact command** for your setup.

# 1

search online. not working.

---

It **isn’t a Chrome-bug** — your system is configured so that **Telegram Desktop is the default handler for `tg://` or related links**, and Chrome dutifully hands those off to the app. There’s no built-in “block this app from opening links” toggle in Chrome for Linux like on Android, so the fix has to be at the **system / handler level**. ([Ask Ubuntu][1])

### 🧠 Why this happens

When Chrome sees a link that uses Telegram’s protocol (e.g., URLs that are interpreted as `tg://…`), it **launches the registered external handler** — in your case Telegram Desktop — instead of staying in the browser. This is how Chromium’s protocol handler system works on Ubuntu. ([Ask Ubuntu][1])

---

## ✅ Fix: Remove/Change the Default Protocol Handler

### 1) **Check current handler**

In a terminal, run:

```bash
xdg-settings get default-url-scheme-handler tg
```

If it prints something like `telegram-desktop.desktop`, that’s why Chrome opens the app.

---

### 2) **Unset it or assign a different handler**

To **unset Telegram as the default handler**:

```bash
xdg-mime default '' x-scheme-handler/tg
```

Or to explicitly set Chrome/your browser as the handler:

```bash
xdg-mime default google-chrome.desktop x-scheme-handler/tg
```

(adjust if you use `chromium.desktop` instead) ([Ask Ubuntu][1])

---

## 🧹 Bonus: Clear Chrome’s remembered app choice

Chrome may have remembered “Open in Telegram” previously. Clear this by resetting external protocol prompts:

1. Go to:

   ```
   chrome://settings/handlers
   ```

2. Remove any Telegram / `tg:` entries.
3. Restart Chrome.

If that page shows nothing, Chrome may not persist these, but double-checking helps.

---

## 🔁 If websites still push Telegram links

Some Telegram pages redirect to “Open in Desktop App” pages or `<a href="tg://…">` links — those will always try to open the handler. If that’s the case, you can:

- Manually copy the channel/chat link and paste it into **web.telegram.org** instead of clicking the prompt.
- Use a userscript extension like **NoScript** or **Tampermonkey** to disable redirects to the `tg://` protocol.

---

## 🧪 Confirm it worked

After unsetting the handler, test:

```bash
xdg-open https://web.telegram.org
```

This should now **stay in the browser** and **not launch Telegram Desktop**. ([Ask Ubuntu][1])

---

## ⚠️ Notes

- Chrome on Linux doesn’t let you globally disable any external protocol — just change what handles it.
- Chrome only hands off when a link truly uses a registered protocol (e.g., `tg:`). If the page is doing a JavaScript redirect to trigger the App, that’s a page issue.

---

If you tell me **how you installed Telegram Desktop** (Snap, Flatpak, .deb), I can give the exact `desktop` file name to use in the `xdg-mime` commands.

[1]: https://askubuntu.com/questions/686394/changing-protocol-handler-in-google-chrome-opening-a-telegram-link?utm_source=chatgpt.com "Changing protocol handler in google chrome, opening a Telegram link"

# 2

search online. for chromium snap

---

I searched for what others have found specifically about **Chromium installed as a Snap on Ubuntu** and how it handles external protocol handlers like Telegram — and here’s the key point:

### ❗ Snap-Chromium has a _built-in limitation_ with external URI schemes

Ubuntu’s **Chromium Snap** build uses a **whitelist of allowed URL schemes**, and it _does not include `tg:` (Telegram)_ in that list. That means Chromium Snap **cannot reliably open Telegram Desktop with `tg://…` links** and related handlers the way a normal (deb/flatpak) install would. ([Launchpad][1])

**What that means for your issue:**

- It’s not actually Chrome’s fault — it’s how the **Snap sandbox restricts URL protocols** you can hand off to external apps.
- There isn’t a simple Chrome setting to _disable_ it, because Snap Chromium _might not even support custom handlers well_. ([Launchpad][1])

---

## 🧠 What people online report about this Snap behavior

### 🔹 Snapd blocks many protocols

Ubuntu’s Snap packaging **only allows a fixed list of URL handlers** (`http`, `https`, `mailto`, `snap`) by default — and **protocols like `tg:` aren’t admitted** to that whitelist. Because of this, Snap Chromium often **fails to open/handle external links** like Telegram even if registered. ([Launchpad][1])

This mismatch causes unpredictable behavior:

- Snap Chromium won’t hand off `tg://…` links properly
- Trying to click “Open Telegram Desktop” from Telegram Web may do nothing
- There isn’t a reliable way in Snap Chromium to add additional protocols

(Some older bug reports about this go back years and remain unresolved in Snap builds.) ([Launchpad][2])

---

## ✅ Practical ways forward

Since the Snap build of Chromium handles external URIs in a restricted way, here are your options:

### ✅ **1) Use Google Chrome (not the Snap)**

The official Google Chrome `.deb` package isn’t sandboxed like Snap, so it supports external handlers properly.
Then you can disable Telegram opens like normal (chrome://settings/handlers etc.).

### ✅ **2) Install Chromium as a Flatpak**

Flatpak builds usually expose protocol handlers correctly and don’t enforce the same Snap blacklist.

### ✅ **3) Use Firefox**

Firefox doesn’t use the Snap URL-scheme whitelist, so it behaves more flexibly with external apps.

### ✅ **4) Remove Telegram Desktop Snap**

If you don’t use the desktop app, removing it will stop launches entirely:

```bash
sudo snap remove telegram-desktop
```

(this prevents any handler from being triggered).

### ⚠️ Temporary workaround

Instead of clicking links, **open web.telegram.org directly** manually — that avoids triggering any protocol handler.

---

## 📌 Summary

The reason Chrome/Chromium Snap _tries to open Telegram Desktop_ and behaves oddly is because:

🌐 Snap Chromium’s protocol handling is limited by a whitelist and doesn’t handle `tg:` well — so it _can’t_ cleanly stop or redirect the link behavior like regular Chrome would. ([Launchpad][1])

So the best fix is to use a **non-Snap browser build** or remove the Telegram Desktop Snap so that no handler exists to launch.

[1]: https://bugs.launchpad.net/bugs/1776873?utm_source=chatgpt.com "Bug #1776873 “Whitelisted allowedURLschemes breaks some desktop ...” : Bugs : snapd"
[2]: https://bugs.launchpad.net/bugs/1852094?utm_source=chatgpt.com "Bug #1852094 “chromium snap cannot open external apps by uri usi...” : Bugs : chromium-browser package : Ubuntu"
