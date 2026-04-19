creating an app called journal on ubuntu.

it autostarts, runs in the background, and watching the user.

it knows all the opened apps, the title of the app on the top, and the screen.

it tracks any change of the title of the app on the top, takes screenshot regularly (at an interval of certain several minutes, or when context switching), and keep them properly.

it has an web ui on localhost, like a calendar, or a timeline.

it could export the data to plain text and integrate with llms to analyze.

although idk much about tech, ive consulted pros and made some decisions (possibly changed now).

- prefer boring tech
- python, sqlite, and flask
- polling to notice changes
- one process for both watching and web server
- utc with timezone for time handling
- plain text file for logging
- a small json config file for screenshot interval, data directory, port number, etc.
- python standard library
- xdotool (called via subprocess) to get active window ID and title, wmctrl (optional backup)
- scrot (called via subprocess) for screenshots

my main table called journal in the imagination (possibly changed).

- id (integer, primary key)
- time (string, timezone-aware ISO-8601 using the local timezone offset)
- app (text, the app name)
- title (text, the window title)
- event (text, type of the event) examples: focus_change, interval_capture
- screenshot (text, nullable, the path of the screenshot)

my folder layout in the imagination (possibly changed).

```
journal/
  app.py
  config.json

  data/
    journal.db
    logs/
      journal.log

  screenshots/
    2025/
      01/
        01/
          12-00-00.png
          12-05-00.png

  pages/
    journal.html

  sources/
    style.css
```

my config file shape in the imagination (possibly changed).

```
screenshot interval (seconds): default 300

poll interval (seconds): default 1

data directory path: data

screenshot directory path: screenshots

web port: 5000

log level: verbose by default
```

my current progress.

- gnome extension logging window info on ubuntu (wayland).
- watch window
- store and log
- watch screenshot (deprecated for not feasible on wayland)
- serve the web page using a blank html
- add favicon to the page, and fit the browser theme (light/dark)

my current folder layout.

```
fira@Fira ~/Documents/f/journal
 % tree
.
├── app.py
├── clock.py
├── config.json
├── config.py
├── data
│   ├── journal.db
│   └── logs
│       └── journal.log
├── db_viewer.py
├── log.py
├── models.py
├── pages
│   └── journal.html
├── __pycache__
│   ├── clock.cpython-312.pyc
│   ├── config.cpython-312.pyc
│   ├── log.cpython-312.pyc
│   ├── models.cpython-312.pyc
│   ├── screenshot.cpython-312.pyc
│   ├── store.cpython-312.pyc
│   ├── watcher.cpython-312.pyc
│   ├── web.cpython-312.pyc
│   └── window.cpython-312.pyc
├── read_cache.py
├── readme.md
├── resources
│   ├── assets
│   │   ├── journal editable.svg
│   │   ├── journal favicon.png
│   │   ├── journal light editable.svg
│   │   ├── journal light favicon.png
│   │   ├── journal light.svg
│   │   └── journal.svg
│   ├── gnome-extension
│   │   ├── extension.js
│   │   └── metadata.json
│   └── systemd
│       └── journal.service
├── run.sh
├── screenshot.py
├── snapshot_to_db.py
├── store.py
├── test_snapshot.py
├── watcher.py
├── web.py
└── window.py
```

now design/define the backend api.

give the responsibility fully, yes fully, to the frontend side.

i mean, it could run anything, sending a string of sql for example, to the backend.

the backends just proceed if safe.

safe: predictable, permissioned, reversible.

some code maybe related. feel free to ask for more.

```py
# app.py
from pathlib import Path
from config import Config
from watcher import Watcher
from web import start_in_background


def main():
    cfg = Config(Path("config.json"))

    # start web server quietly
    start_in_background(cfg.web_port)

    # start watcher (main loop)
    watcher = Watcher(cfg)
    watcher.run_forever()


if __name__ == "__main__":
    main()
```

```py
# store.py
import sqlite3
from pathlib import Path
from typing import Optional

from models import WindowState
from clock import now_local_iso

class JournalStore:
    """
    Small SQLite wrapper. Keeps operations explicit and synchronous.
    """

    def __init__(self, db_path: Path):
        self.db_path = db_path
        self.conn = sqlite3.connect(str(db_path), timeout=10, check_same_thread=False)
        self._init_schema()

    def _init_schema(self) -> None:
        self.conn.execute(
            """
            CREATE TABLE IF NOT EXISTS journal (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                time TEXT NOT NULL,
                app TEXT NOT NULL,
                title TEXT NOT NULL,
                event TEXT NOT NULL,
                screenshot TEXT
            )
            """
        )
        self.conn.commit()

    def record(self, state: Optional[WindowState], event: str, screenshot: Optional[str] = None) -> None:
        """
        Insert a row. If state is None, insert placeholders (empty strings).
        """
        app = state.app if state else ""
        title = state.title if state else ""
        ts = now_local_iso()
        self.conn.execute(
            "INSERT INTO journal (time, app, title, event, screenshot) VALUES (?, ?, ?, ?, ?)",
            (ts, app, title, event, screenshot),
        )
        self.conn.commit()

    def close(self) -> None:
        try:
            self.conn.close()
        except Exception:
            pass
```

```py
# web.py
from flask import Flask, send_from_directory
import threading
from pathlib import Path


def create_app():
    base_dir = Path(__file__).parent

    app = Flask(
        __name__,
        static_folder=str(base_dir / "pages"),
        static_url_path="",
    )

    @app.route("/")
    def index():
        return send_from_directory(app.static_folder, "journal.html")

    # Serve static resources (favicons, assets, etc.)
    @app.route("/resources/<path:filename>")
    def resources(filename):
        return send_from_directory(base_dir / "resources", filename)

    return app


def run_web_server(port: int):
    app = create_app()
    app.run(
        host="127.0.0.1",
        port=port,
        debug=False,
        use_reloader=False,
    )


def start_in_background(port: int):
    thread = threading.Thread(
        target=run_web_server,
        args=(port,),
        daemon=True,
    )
    thread.start()
```

```html
<!-- journal.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>journal</title>

    <!-- Tell the browser we support both color schemes -->
    <meta name="color-scheme" content="light dark" />

    <!-- Favicons: boring, explicit, predictable -->
    <link
      rel="icon"
      type="image/png"
      href="/resources/assets/journal favicon.png"
      media="(prefers-color-scheme: light)"
    />
    <link
      rel="icon"
      type="image/png"
      href="/resources/assets/journal light favicon.png"
      media="(prefers-color-scheme: dark)"
    />
  </head>
  <body></body>
</html>
```

make the change gentle if possible, and tell me the changes.

write good code, which is clear, cohesive, SOLID, minimal, intention-revealing, invariant-safe, DRY, YAGNI, low-coupling, boring.

show me the full code.

---

what's the shell command it's using.

i will test it in my shell now as a poc.

```py
# window.py
import subprocess
import logging
from pathlib import Path
from typing import Optional
import os
from models import WindowState

logger = logging.getLogger("journal.window")


class x11_window_observer:
    """
    Fetch focused window information directly via X11 tools:
    - xdotool (to get focused window id and name)
    - xprop (to get WM_CLASS)

    Uses the first WM_CLASS entry (lowercase, instance name),
    matching typical shell parsing like:
        ghostty,com.mitchellh.ghostty
        code,Code
    """

    def __init__(self):
        pass

    def _run(self, cmd: list[str], timeout: float = 1.0) -> Optional[str]:
        try:
            proc = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=timeout,
                check=False,
            )
            out = proc.stdout.strip()
            return out or None
        except FileNotFoundError:
            logger.debug("Tool not found: %s", cmd[0])
            return None
        except subprocess.TimeoutExpired:
            logger.debug("Command timed out: %s", " ".join(cmd))
            return None
        except Exception as e:
            logger.debug("Error running command %s: %s", " ".join(cmd), e)
            return None

    def get_active_window(self) -> Optional[WindowState]:
        if not os.getenv("DISPLAY"):
            logger.debug("No DISPLAY environment variable set.")
            return None

        wid = self._run(["xdotool", "getwindowfocus"])
        print(wid)
        if not wid:
            logger.debug("No focused window id returned by xdotool.")
            return None

        title = self._run(["xdotool", "getwindowname", wid]) or ""
        title = title.strip()

        wm_class_raw = self._run(["xprop", "-id", wid, "WM_CLASS"])
        app = ""

        if wm_class_raw and "=" in wm_class_raw:
            try:
                # Example:
                # WM_CLASS(STRING) = "ghostty", "com.mitchellh.ghostty"
                rhs = wm_class_raw.split("=", 1)[1]
                parts = [
                    p.strip().strip('"')
                    for p in rhs.split(",")
                    if p.strip()
                ]
                if parts:
                    # Use first entry (instance name), like:
                    # ghostty (not com.mitchellh.ghostty)
                    # code (not Code)
                    app = parts[0].lower()
            except Exception as e:
                logger.debug("Error parsing WM_CLASS: %s", e)

        if not app and not title:
            logger.debug("No useful window information.")
            return None

        print(f"Focused Window - ID: {wid}, Title: {title}, Class: {app}")

        return WindowState(app=app, title=title)

class FileWindowObserver:
    """
    Read snapshots written by the GNOME extension at a JSON path
    (default: ~/.cache/journal-windows.json). The extension overwrites
    the file atomically, so reading is safe.
    """

    def __init__(self, path: Path):
        self.path = path

    def get_active_window(self) -> Optional[WindowState]:
        """
        Return the focused window as WindowState or None.
        Missing file or parse error -> None.
        """
        try:
            text = self.path.read_text(encoding="utf-8")
        except FileNotFoundError:
            logger.debug("snapshot file not found: %s", self.path)
            return None
        except Exception as e:
            logger.debug("error reading snapshot file %s: %s", self.path, e)
            return None

        try:
            data = json.loads(text)
        except Exception as e:
            logger.debug("invalid JSON in snapshot file %s: %s", self.path, e)
            return None

        focused = data.get("focused")
        if not focused:
            logger.debug("snapshot has no 'focused' object")
            return None

        app = (focused.get("class") or "").strip()
        title = (focused.get("title") or "").strip()

        if not app and not title:
            logger.debug("focused window has empty class/title")
            return None

        return WindowState(app=app, title=title)


# If this script is run directly, test it
if __name__ == "__main__":
    observer = x11_window_observer()
    observer.get_active_window()
```

---

follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - es module
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions, predicate for bools
- style:
  - functional programming
  - modular and cohesive
  - object params
  - async if needed
  - always function statement, arrow function only as props
  - always type, never interface
  - no `undefined` or `null`
  - no `typeof` or `instanceof`.
  - no `try catch` unless external libraries need
  - no `throw`
- notes:
  - give me full working code of all changed files.

write only one file, journal.ts.

```
import config from './config.json';
```

```
{
  "log_interval": 60,
  "data_directory": "$HOME/Documents/f/journal/data/journal.log",
  "screenshot_interval": 300,
  "screenshot_directory": "$HOME/Pictures/journal/%Y-%m-%d %H-%M-%S.png",
  "screenshots_enabled": true
}
```

it runs forever.

for log interval, it gets the active window title and write a line to the log. if either the app (e.g. code) or the title is empty, dont write.

if screenshot enabled, for screenshot interval, it runs the screenshot command.

everything could fail or timeout (give each command 1 sec at most). catch them. make sure the program continues.

make `~/Pictures/journal` exist

get active window title

```
 ~ % WID=$(xdotool getwindowfocus)
echo "ID: $WID"

xdotool getwindowname "$WID"

xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ID: 58720260
WID=$(xdotool getwindowfocus)echo "ID: $WID"xdotool getwindowname "$WID"xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ghostty
 ~ % WID=$(xdotool getwindowfocus)
echo "ID: $WID"

xdotool getwindowname "$WID"

xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ID: 69206032
Branch · chat - Chromium
chromium
 ~ % WID=$(xdotool getwindowfocus)
echo "ID: $WID"

xdotool getwindowname "$WID"

xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ID: 2097169
gnome-shell

```

screenshot

```
scrot "$HOME/Pictures/journal/%Y-%m-%d %H-%M-%S.png"
```

journal.log

```
2026-04-18 23:52:20+08:00 code readme.md - f (Workspace) - Visual Studio Code
```

dont hardcode the timezone.

---

i want something like `2026-04-18 23:52:20+08:00` not `2026-04-18T16:57:01.797Z`

