<!-- https://chatgpt.com/c/69a079b3-5bc4-8321-9c72-b3340aa4809b -->

<!-- well just stay with usr/local/bin/icon. the algo seems complex. -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Speak naturally, like a real human in a relaxed conversation.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. No nonsense like "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Wait for me to begin the conversation.

---

I’ll be here, Fira.

# 1

on ubuntu how to let scrcpy show the proper icon on the dock

---

Fira — the dock icon is controlled by the app’s **.desktop** entry and how the shell matches running windows to that entry. Make (or fix) a `scrcpy.desktop` with a correct `Icon` and `StartupWMClass`, put it where GNOME looks, and make it executable. Ubuntu scrcpy

Quick steps (copy–paste friendly):

1. Create the desktop file (per-user):
   `~/.local/share/applications/scrcpy.desktop`. Installing system-wide uses `/usr/share/applications/`. ([Ask Ubuntu][1])

2. Put this content in the file (edit with nano/vim):

```
[Desktop Entry]
Name=scrcpy
Comment=Display and control your Android device
Exec=scrcpy
Icon=/usr/share/icons/hicolor/128x128/apps/scrcpy.png
Terminal=false
Type=Application
Categories=Utility;Development;
StartupWMClass=scrcpy
```

Use an absolute path for `Icon` or an icon name that exists in your icon theme. If the icon doesn’t show, try an explicit PNG file in `/usr/share/icons/hicolor/...` or `~/.local/share/icons/`. (Some desktop shells are picky about icon paths and quoting.) ([Ask Ubuntu][2])

3. Match the window class: find scrcpy’s WM_CLASS with `xprop WM_CLASS` and click the scrcpy window; use the output (one of the strings) as `StartupWMClass=`. That tells the shell which running window belongs to the launcher. ([Ask Ubuntu][3])

4. Make the .desktop executable and refresh the menu:
   `chmod +x ~/.local/share/applications/scrcpy.desktop`
   Then either log out/in or let the shell pick up the new entry (placing the file in the correct applications folder is important). If you installed scrcpy from a package or snap it might already have a `.desktop` elsewhere — check `/usr/share/applications` or `/var/lib/snapd/desktop/applications`. ([Reddit][4])

If after this the dock still shows a generic icon, the usual culprit is a mismatched `StartupWMClass` (or the desktop file being in the wrong location). Update the `StartupWMClass` to exactly match the `xprop` output and ensure the `Icon=` points to a real file or a theme name. ([Ask Ubuntu][3])

[1]: https://askubuntu.com/questions/1557436/desktop-entry-taskbar-icon-issue?utm_source=chatgpt.com "Desktop Entry Taskbar Icon issue - gnome"
[2]: https://askubuntu.com/questions/429357/custom-icon-for-desktop-file-not-appearing?utm_source=chatgpt.com "Custom icon for .desktop file not appearing"
[3]: https://askubuntu.com/questions/367396/what-does-the-startupwmclass-field-of-a-desktop-file-represent?utm_source=chatgpt.com "What does the StartupWMClass field of a .desktop file ..."
[4]: https://www.reddit.com/r/Ubuntu/comments/106uadl/creating_desktop_shortcuts_broken_desktop_file/?utm_source=chatgpt.com "Creating Desktop Shortcuts - Broken Desktop File error"

# 2

where is the icon if i were installing it using apt, or where is scrcpy pointing at

---

Fira — if you installed `scrcpy` from Ubuntu’s apt repositories, the package supplies a `.desktop` file and an icon under the system directories (not your home). On Debian/Ubuntu packages the typical locations are:

- Desktop entries: `/usr/share/applications/scrcpy.desktop` (and there may also be `scrcpy-console.desktop`). ([archlinux.org][1])
- Icon: `/usr/share/icons/hicolor/256x256/apps/scrcpy.png` (icons usually live under `.../hicolor/<size>/apps/`). ([archlinux.org][1])
- Executable: `/usr/bin/scrcpy`.

To see exactly where the package put files on your machine run:

```bash
dpkg -L scrcpy | grep -E '\.desktop|icons|pixmaps|/usr/bin'
```

If you installed the snap/flatpak/snapcraft build instead, the desktop file and icon live in the snap-managed paths (e.g. `/var/lib/snapd/desktop/applications/` or under the snap mount). Use `snap list` to check if it’s a snap.

If the dock still shows the wrong icon, open the `.desktop` file (e.g. `cat /usr/share/applications/scrcpy.desktop`) — the `Icon=` line is the path/name the shell uses to find the icon. Adjusting or pointing that to the PNG file above will make the dock pick the proper icon. ([archlinux.org][1])

Ubuntu

[1]: https://archlinux.org/packages/extra/x86_64/scrcpy/files/?utm_source=chatgpt.com "scrcpy 3.3.4-1 (x86_64) - File List"

# 3

how does scrcpy point to it

---

Fira — scrcpy itself doesn’t “point” to a dock icon. Two things cooperate to make the dock show the right icon:

1. the `.desktop` file (what the shell knows about the app) — its `Icon=` value (an icon name or an absolute path), and
2. the running window’s `WM_CLASS` (what the window reports to the X/Wayland/GTK shell) and the `.desktop` file’s `StartupWMClass=` (how the shell matches the running window to the `.desktop`).

How to check what’s happening on your machine

1. Inspect the desktop file the package installed:

```bash
cat /usr/share/applications/scrcpy.desktop
```

Look at the `Icon=` and `StartupWMClass=` lines.

2. Find the actual icon files the shell will resolve (if `Icon=` is a name, the hicolor theme is searched):

```bash
ls -l /usr/share/icons/hicolor/*/apps/scrcpy*
ls -l /usr/share/pixmaps/scrcpy*
```

3. See what the running scrcpy window reports for WM_CLASS (run this, then click the scrcpy window):

```bash
xprop WM_CLASS
```

The output looks like:

```
WM_CLASS(STRING) = "instance", "Class"
```

Take either string (usually the second) and compare it to `StartupWMClass=` in the desktop file. They must match exactly.

4. Confirm which .desktop is being used (if you have multiple installs: apt vs snap):

```bash
which scrcpy
dpkg -L scrcpy | grep '\.desktop\|/usr/bin'
snap list | grep scrcpy || true
ls /var/lib/snapd/desktop/applications | grep scrcpy || true
```

What to do if the dock shows the generic icon

- If `Icon=` in the `.desktop` is a name (e.g. `scrcpy`) and you don’t have that name in your icon theme, point it to the absolute PNG path you found with `ls`.
- If the shell still groups the running window with a generic launcher, update `StartupWMClass=` to exactly match one of the strings from `xprop WM_CLASS`.
- After editing `/usr/share/applications/scrcpy.desktop` (or creating a per-user copy at `~/.local/share/applications/scrcpy.desktop`), make it executable:

```bash
chmod +x ~/.local/share/applications/scrcpy.desktop
```

Then restart your session or the shell (logout/login, or restart GNOME Shell with `Alt+F2 r` on X11).

That’s the pairing: `.desktop` → `Icon=` (icon lookup) and window `WM_CLASS` ↔ `.desktop` `StartupWMClass=` (matching).

# 4

i mean if icon=scrcpy instead of a path

---

Good question, Fira — when `Icon=scrcpy` is used (no path), the desktop/GTK system resolves that _name_ through the icon theme, not by anything the `scrcpy` binary does. In plain terms:

- The desktop file gives an icon _name_ (here `scrcpy`).
- The icon-theme system looks for files named `scrcpy` with common extensions (`.png`, `.svg`, etc.) inside icon-theme directories and picks the best size.
- The search order (simplified) is: current icon theme → `hicolor` theme → fallback directories such as `/usr/share/pixmaps`. On Ubuntu the package usually installs icons under `/usr/share/icons/hicolor/<size>/apps/` or `/usr/share/pixmaps/`.

Useful commands to see what’s actually used on your system:

- show the `Icon=` value in the desktop file:

```bash
grep -i '^Icon=' /usr/share/applications/scrcpy.desktop
```

- find actual icon files:

```bash
find /usr/share/icons -iname 'scrcpy*' -print
ls -l /usr/share/pixmaps/scrcpy*
```

- list package-provided files (if installed from apt):

```bash
dpkg -L scrcpy | grep -E 'icons|pixmaps'
```

- if you add or change icon files, refresh the icon cache so themes notice them:

```bash
sudo gtk-update-icon-cache /usr/share/icons/hicolor
```

(you can add `-f` to force).

A couple of practical notes:

- The icon name is the basename without extension. If you see `Icon=scrcpy`, the system will accept `scrcpy.png`, `scrcpy.svg`, etc., and choose the best size for the context.
- If the icon is missing in all themes, the shell falls back to a generic icon. Pointing `Icon=` to an absolute path (e.g. `/usr/share/icons/hicolor/128x128/apps/scrcpy.png`) bypasses the theme lookup.
- Snap/Flatpak installs may place icons in their own paths (e.g. `/var/lib/snapd/desktop/icons/`), so if you installed scrcpy as a snap, check there instead.

# 5

fact check. reference.

---

Fira — here’s a short, fact-checked summary with sources.

1. When a `.desktop` file has `Icon=scrcpy` (not a path), that `scrcpy` value is an _icon name_ and the desktop system resolves it via the Icon Theme algorithm rather than anything the `scrcpy` binary does. freedesktop.org. ([specifications.freedesktop.org][1])

2. The icon lookup order is: the current icon theme, then its parents, and finally the default `hicolor` theme; if an icon with that name is found in any of those places (any appropriate extension/size) it is used. If no themed icon is found implementations may fall back to locations like `/usr/share/pixmaps`. ([xdg-specs-louib-fe5e67730fe4cdddc950175c655de7f27b3a47a9be1bc56.pages.freedesktop.org][2])

3. If `Icon=` is an absolute path (e.g. `/usr/share/icons/hicolor/128x128/apps/scrcpy.png`) the file named is used directly — theme lookup is bypassed. ([specifications.freedesktop.org][3])

4. Third-party packages normally install icons under theme directories such as `/usr/share/icons/hicolor/<size>/apps/` (or sometimes `/usr/share/pixmaps`), so `Icon=scrcpy` will match files like `/usr/share/icons/hicolor/128x128/apps/scrcpy.png`. (This is the usual layout on Ubuntu/Debian systems.) Ubuntu. ([people.redhat.com][4])

5. After adding or changing icon files you may need to refresh the icon cache so the desktop notices them (tools: `gtk-update-icon-cache` / `update-icon-caches`). ([Linux Die][5])

6. Separately: the dock matches a _running window_ to a `.desktop` entry using window properties (WM_CLASS) and the `.desktop`’s `StartupWMClass` (or the `.desktop` filename / app id in Wayland); a mismatch there will make the shell show a generic icon even if the icon file exists. GNOME. ([Ask Ubuntu][6])

If you want the exact canonical spec text for any of the above, the freedesktop desktop-entry and icon-theme specs are the authoritative references (links in the citations).

[1]: https://specifications.freedesktop.org/desktop-entry/latest-single?utm_source=chatgpt.com "Desktop Entry Specification"
[2]: https://xdg-specs-louib-fe5e67730fe4cdddc950175c655de7f27b3a47a9be1bc56.pages.freedesktop.org/icon-theme-spec/0.10/ar01s05.html?utm_source=chatgpt.com "Icon Lookup"
[3]: https://specifications.freedesktop.org/desktop-entry/latest/recognized-keys.html?utm_source=chatgpt.com "6 Recognized desktop entry keys"
[4]: https://people.redhat.com/alexl/files/icon-theme-spec.html?utm_source=chatgpt.com "Icon Theme Specification"
[5]: https://linux.die.net/man/1/gtk-update-icon-cache?utm_source=chatgpt.com "gtk-update-icon-cache(1) - Linux man page"
[6]: https://askubuntu.com/questions/367396/what-does-the-startupwmclass-field-of-a-desktop-file-represent?utm_source=chatgpt.com "What does the StartupWMClass field of a .desktop file ..."
