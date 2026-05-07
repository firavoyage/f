why does ghostty show a bell emoji on the left of the window title sometimes

The bell emoji (🔔) appears in the **Ghostty** window or tab title to indicate that a **terminal bell (BEL)** event has occurred in an unfocused tab. \[[1](https://github.com/ghostty-org/ghostty/issues/10701), [2](https://github.com/ghostty-org/ghostty/discussions/10692)]

This visual indicator is designed to get your attention when a background process—like a long-running build or a command prompt—needs interaction or has finished. \[[1](https://github.com/ghostty-org/ghostty/discussions/10692), [2](https://ghostty.org/docs/vt/control/bel), [3](https://github.com/ghostty-org/ghostty/discussions/10692), [4](https://www.reddit.com/r/ClaudeAI/comments/1qv5ohc/ghostty%5Ftab%5Fnotifications%5Fpermission%5Fautoapprove/)]

Why You See It

- **Triggering Events:** The emoji is prepended to the title whenever the terminal receives a `0x07` (BEL) control sequence. This often happens if:
  - A command like `echo -e "\a"` or `tput bel` is executed.
  - A background process (e.g., `make`, `npm build`) completes and is configured to "ring" the bell.
  - Shell auto-completion fails or encounters an error.
- **Default Behavior:** Ghostty includes "title" as a default `bell-features` action, meaning it will automatically show the emoji in the title bar of any unfocused tab that "rings". \[[1](https://github.com/ghostty-org/ghostty/discussions/7736), [2](https://ghostty.org/docs/vt/reference), [3](https://github.com/ghostty-org/ghostty/issues/7108), [4](https://ghostty.org/docs/install/release-notes/1-3-0), [5](https://github.com/ghostty-org/ghostty/discussions/11666), [6](https://github.com/ghostty-org/ghostty/discussions/9487), [8](https://github.com/ghostty-org/ghostty/issues/10701)]

How to Control It

You can manage this behavior in your Ghostty configuration file using the `bell-features` option: \[[1](https://ghostty.org/docs/install/release-notes/1-2-0)]

- **To disable only the emoji:** Remove `title` from your `bell-features` list.

- **Example configuration:**\
  bash

<!---->

```
# Only keep audible or other visual cues, removing the emoji
bell-features = system,attention,border,audio
```

Use code with caution.

- **To turn off all bell notifications:** Set it to `none`. \[[1](https://github.com/ghostty-org/ghostty/discussions/7736), [2](https://github.com/ghostty-org/ghostty/discussions/7736), [3](https://github.com/ghostty-org/ghostty/discussions/9487)]

Would you like to know how to **automate notifications** so that Ghostty alerts you only when specific long-running commands finish?

- [link](https://github.com/ghostty-org/ghostty/discussions/7736)\
  mac: no terminal bell on tip #7736 - GitHub\
  Sep 18, 2025 — edrozenberg on Sep 15, 2025 ... Just came here after reading the release notes for 1.2. 0. On macOS, there is no bell emoji in the...\
  GitHub
- [link](https://github.com/ghostty-org/ghostty/discussions/10692)\
  macOS: Visual indicator on tabs that need user attention (eg ...\
  Mar 14, 2026 — I've also been looking into visual indicators for bell alerts on macOS. One thing I noticed is that if you have multiple surfaces ...\
  GitHub
- [link](https://github.com/ghostty-org/ghostty/issues/7108)\
  macOS: badge on dock icon for bell · Issue #7108 - GitHub\
  Apr 16, 2025 — Discussed in #7104. Originally posted by ftpd April 15, 2025. In #7101 the new way of notification was introduced - on bell the do...\
  GitHub

Show all

for example, when i press ctrl z on an empty shell, or do something that has no effect

In **Ghostty**, the bell emoji appears because your shell is sending a "visual bell" signal to indicate an **invalid action**. \[[1](https://github.com/ghostty-org/ghostty/discussions/9487), [2](https://ghostty.org/docs/vt/control/bel)]

When you press `Ctrl+Z` on an empty command line or perform an action with "no effect" (like tab-completing when no matches exist), your shell (Zsh, Bash, etc.) treats this as an error or an invalid request. To notify you, it sends a **BEL (0x07)** control sequence. Ghostty’s default behavior is to catch this signal and prepend the 🔔 emoji to the window or tab title to get your attention. \[[1](https://github.com/ghostty-org/ghostty/discussions/9487), [2](https://github.com/ghostty-org/ghostty/discussions/11666), [3](https://ghostty.org/docs/vt/control/bel), [4](https://github.com/ghostty-org/ghostty/issues/10701), [5](https://ghostty.org/docs/features/shell-integration)]

Common Triggers for the "No Effect" Bell

- **Empty `Ctrl+Z`:** Attempting to background a process when no job is currently running in that shell.
- **Failed Autocomplete:** Pressing `Tab` when there are no possible file or command matches.
- **Backspace on Empty Line:** Pressing backspace when the cursor is already at the start of the prompt.
- **Invalid Shortcuts:** Pressing a key combination that isn't bound to any action in your current shell. \[[1](https://github.com/ghostty-org/ghostty/discussions/9487), [3](https://github.com/ghostty-org/ghostty/discussions/5908)]

How to Stop the Emoji

If you find the emoji annoying for these minor errors, you can disable it in your `~/.config/ghostty/config` by removing `title` from the `bell-features` list: \[[1](https://github.com/ghostty-org/ghostty/discussions/7736)]

bash

```
# Disable the title emoji, but keep other notifications like dock bouncing
bell-features = system,attention,audio
```

Use code with caution.

Alternatively, you can set `bell-features = none` to silence all terminal bell notifications entirely. \[[1](https://github.com/ghostty-org/ghostty/issues/8487), [2](https://github.com/ghostty-org/ghostty/discussions/7736)]

Would you like to know how to **silence the bell within your shell settings** (like Zsh or Bash) instead of disabling it in Ghostty?

- [link](https://github.com/ghostty-org/ghostty/discussions/11666)\
  Attention Bell fires when terminal has focus · ghostty-org ... - GitHub\
  Issue Description When using ghostty quick terminal on MacOS Tahoe I had been noticing I would intermittently see the ghostty icon...\
  GitHub
- [link](https://github.com/ghostty-org/ghostty/discussions/7736)\
  mac: no terminal bell on tip #7736 - GitHub\
  Sep 18, 2025 — edrozenberg on Sep 15, 2025. Original comment in English - Translate to English. Just came here after reading the release notes fo...\
  GitHub
- [link](https://github.com/ghostty-org/ghostty/issues/10701)\
  Bell emoji ( ) not appearing on tabs with custom titles ... - GitHub\
  Feb 13, 2026 — Description. The title bell feature (🔔 prepended to tab title) doesn't appear on tabs that have been given a custom title via "Ch...\
  GitHub

Show all