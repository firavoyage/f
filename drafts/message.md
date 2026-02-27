Take these as conventions, not personal preferences. You must not mention. You must not say you are following these style.

- environment:
  - ubuntu
  - zsh
  - pnpm
- style:
  - follow verb noun naming convention. use one simple english word for all methods whenever possible (not conflicting).
  - always use snake case. never use camel case or pascal case.
  - use functional programming
  - be modular and cohesive
  - prefer object params
  - prefer async
  - use es module, always named, never default.
  - use jsdoc.
  - avoid `undefined` or `null`. just omit.
  - avoid try catch as possible. use result instead.
  - if you really have to catch (like external libraries that throw), catch on high level.
  - avoid throw completely. use log instead.
  - avoid nested if. if err, return/continue/break.
  - never add type check like `typeof` or `instanceof`.
- notes:
  - add logging.
  - import everything needed. no unused imports. be careful with path of deeply nested files.
  - use node assert when testing pure fn.
  - give me full working code of all changed files.

---

journal is to record activities in the background.

---

folder shape.

```
 ...Documents/f/journal % tree -I "__pycache__"
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
├── journal.md
├── log.py
├── models.py
├── pages
│   └── journal.html
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

8 directories, 30 files
```

---

`app.py`

```
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

`watcher.py`

```
# watcher.py
import time
from pathlib import Path
from typing import Optional
import os

from window import FileWindowObserver
from store import JournalStore
from log import JournalLogger
from models import WindowState
from config import Config

# import stays, but usage is conditional
from screenshot import Screenshotter


class Watcher:
    """
    Poll the GNOME extension snapshot and record events to SQLite.
    Screenshots are optional and policy-controlled via config.
    """

    def __init__(self, cfg: Config):
        cache_default = Path.home() / ".cache" / "journal-windows.json"
        snapshot_path = (
            Path(cfg.snapshot_path)
            if getattr(cfg, "snapshot_path", None)
            else cache_default
        )

        data_dir = Path(cfg.data_directory)
        data_dir.mkdir(parents=True, exist_ok=True)

        self.observer = FileWindowObserver(snapshot_path)
        self.store = JournalStore(data_dir / "journal.db")
        self.logger = JournalLogger(data_dir / "logs" / "journal.log")

        self.poll_interval = int(cfg.poll_interval)
        self.interval_seconds = int(cfg.screenshot_interval)

        self._last_state: Optional[WindowState] = None
        self._last_interval_ts = time.monotonic()

        self.debug = bool(os.getenv("JOURNAL_DEBUG")) or getattr(cfg, "debug", False)

        # policy flag
        self.screenshots_enabled = bool(cfg.screenshots_enabled)

        # instantiate screenshotter only if enabled
        self.screenshotter: Optional[Screenshotter] = None
        if self.screenshots_enabled:
            self.screenshotter = Screenshotter(cfg)

            self.logger.log("screenshots enabled")
        else:
            self.logger.log("screenshots disabled (policy)")

    def _dbg(self, *parts):
        if self.debug:
            print("[watcher]", *parts)

    def _maybe_capture(self) -> Optional[str]:
        """
        Return screenshot path or None.
        Never raises.
        """
        if not self.screenshots_enabled or not self.screenshotter:
            return None

        try:
            return self.screenshotter.capture()
        except Exception as e:
            self.logger.log(f"screenshot error: {e}")
            return None

    def _record_focus_change(self, state: WindowState) -> None:
        shot = self._maybe_capture()
        self.store.record(state, event="focus_change", screenshot=shot)
        self.logger.log(
            f"focus_change  app={state.app}  title={state.title}  screenshot={shot}"
        )
        self._dbg("focus_change", state.app, "-", state.title)

    def _record_interval(self, state: Optional[WindowState]) -> None:
        shot = self._maybe_capture()
        self.store.record(state, event="interval_capture", screenshot=shot)

        if state:
            self.logger.log(
                f"interval_capture  app={state.app}  title={state.title}  screenshot={shot}"
            )
            self._dbg("interval_capture", state.app, "-", state.title)
        else:
            self.logger.log("interval_capture  no_state")
            self._dbg("interval_capture", "no_state")

    def run_forever(self) -> None:
        try:
            initial = self.observer.get_active_window()
            if initial:
                self._last_state = initial
                self._record_focus_change(initial)
                self._last_interval_ts = time.monotonic()

            while True:
                state = self.observer.get_active_window()

                if state and state != self._last_state:
                    self._record_focus_change(state)
                    self._last_state = state

                now_mon = time.monotonic()
                if now_mon - self._last_interval_ts >= self.interval_seconds:
                    current = state if state else self._last_state
                    self._record_interval(current)
                    self._last_interval_ts = now_mon

                time.sleep(self.poll_interval)

        finally:
            try:
                self.store.close()
            except Exception:
                pass
```

`window.py`

```
# window.py
from pathlib import Path
import json
import logging
from typing import Optional

from models import WindowState

logger = logging.getLogger("journal.window")

class FileWindowObserver:
    """
    Read snapshots written by the GNOME extension at a JSON path
    (default: ~/.cache/journal-windows.json). The extension overwrites
    the file atomically (GLib.file_set_contents), so reading is safe.
    """

    def __init__(self, path: Path):
        self.path = path

    def get_active_window(self) -> Optional[WindowState]:
        """
        Return the focused window as WindowState or None.
        This is intentionally forgiving: missing file or parse error -> None.
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
            # either no focused window or extension produced an error object
            logger.debug("snapshot has no 'focused' object")
            return None

        # be defensive about fields
        app = (focused.get("class") or "").strip()
        title = (focused.get("title") or "").strip()

        # if both empty, nothing useful
        if not app and not title:
            logger.debug("focused window has empty class/title")
            return None

        return WindowState(app=app, title=title)
```

`config.py`

```
# config.py
from pathlib import Path
import json
from typing import Any, Optional


class Config:
    """
    Load configuration from a JSON file.

    Invariants:
    - Config is always constructed from a path.
    - All public fields always exist.
    - Defaults are applied if values are missing or invalid.
    """

    def __init__(self, path: Path = Path("config.json")) -> None:
        self.path = Path(path)

        raw: dict[str, Any] = {}
        if self.path.exists():
            try:
                raw = json.loads(self.path.read_text(encoding="utf-8"))
            except Exception:
                raw = {}

        # timing
        self.poll_interval: int = self._get_int(raw, "poll_interval", 1)
        self.screenshot_interval: int = self._get_int(raw, "screenshot_interval", 300)

        # paths
        self.data_directory: Path = self._get_path(raw, "data_directory", "data")
        self.screenshot_directory: Path = self._get_path(
            raw, "screenshot_directory", "screenshots"
        )

        # web
        self.web_port: int = self._get_int(raw, "web_port", 5000)

        # logging
        self.log_level: str = self._get_str(raw, "log_level", "verbose")

        # feature switches
        self.screenshots_enabled: bool = self._get_bool(
            raw, "screenshots_enabled", False
        )

        # optional / advanced
        self.snapshot_path: Optional[Path] = self._get_optional_path(
            raw, "snapshot_path"
        )
        self.debug: bool = self._get_bool(raw, "debug", False)

    # -------------------------
    # helpers (private)
    # -------------------------

    def _get_int(self, raw: dict[str, Any], key: str, default: int) -> int:
        try:
            return int(raw.get(key, default))
        except Exception:
            return default

    def _get_str(self, raw: dict[str, Any], key: str, default: str) -> str:
        value = raw.get(key, default)
        return str(value) if value is not None else default

    def _get_bool(self, raw: dict[str, Any], key: str, default: bool) -> bool:
        return bool(raw.get(key, default))

    def _get_path(self, raw: dict[str, Any], key: str, default: str) -> Path:
        value = raw.get(key, default)
        return Path(value).expanduser()

    def _get_optional_path(self, raw: dict[str, Any], key: str) -> Optional[Path]:
        value = raw.get(key)
        if value is None:
            return None
        return Path(value).expanduser()

    # -------------------------
    # representation
    # -------------------------

    def __repr__(self) -> str:
        return (
            "Config("
            f"poll_interval={self.poll_interval}, "
            f"screenshot_interval={self.screenshot_interval}, "
            f"screenshots_enabled={self.screenshots_enabled}, "
            f"data_directory='{self.data_directory}', "
            f"screenshot_directory='{self.screenshot_directory}', "
            f"web_port={self.web_port}, "
            f"log_level='{self.log_level}', "
            f"debug={self.debug}"
            ")"
        )
```

`config.json`

```
{
  "poll_interval": 1,
  "data_directory": "data",
  "log_level": "verbose",
  "screenshot_interval": 300,
  "screenshot_directory": "~/Pictures/journal",
  "portal_timeout": 12,
  "monitor_timeout": 12,
  "screenshots_enabled": false,
  "web_port": 5000
}
```

---

edit.

- what should i install to make it run on a new x11 ubuntu. follow convention. write into installation and readme.
- now im on x11. no gnome extension needed. write new methods to fetch data directly using proven tools.
- on config, i want to have the options to set the interval capture (once 20 min), disable screenshot, and disable window change capture.

---

`test_snapshot.py`

```
# test_snapshot.py
from pathlib import Path

from config import Config
from window import FileWindowObserver
from store import JournalStore
from log import JournalLogger

def main():
    print("== Journal snapshot test ==")

    cfg = Config(Path("config.json"))
    snapshot_path = (
        Path(cfg.snapshot_path)
        if cfg.snapshot_path
        else Path.home() / ".cache" / "journal-windows.json"
    )

    print("Snapshot path:", snapshot_path)

    observer = FileWindowObserver(snapshot_path)
    state = observer.get_active_window()

    if state is None:
        print("❌ No active window detected.")
    else:
        print("✅ Active window detected:")
        print("   app  :", state.app)
        print("   title:", state.title)

    store = JournalStore(Path(cfg.data_directory) / "journal.db")
    logger = JournalLogger(Path(cfg.data_directory) / "logs" / "journal.log")

    store.record(state, event="test_snapshot")
    logger.log(
        f"test_snapshot  app={state.app if state else ''}  title={state.title if state else ''}"
    )

    print("✅ One row written to database.")
    print("✅ One line written to log.")
    print("== Test complete ==")

if __name__ == "__main__":
    main()
```

`store.py`

```
# store.py
import sqlite3
from pathlib import Path
from typing import Optional, List, Any
import re

from models import WindowState
from clock import now_local_iso


class JournalStore:
    """
    SQLite wrapper.
    Safe, explicit, synchronous.
    Frontend may send queries, but only SELECT or safe INSERT allowed.
    """

    ALLOWED_QUERY = re.compile(r"^(SELECT|INSERT)\b", re.IGNORECASE)

    def __init__(self, db_path: Path):
        self.db_path = db_path
        self.conn = sqlite3.connect(str(db_path), timeout=10, check_same_thread=False)
        self.conn.row_factory = sqlite3.Row  # return dict-like rows
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
        """Insert a journal event. Safe, predictable."""
        app = state.app if state else ""
        title = state.title if state else ""
        ts = now_local_iso()
        self.conn.execute(
            "INSERT INTO journal (time, app, title, event, screenshot) VALUES (?, ?, ?, ?, ?)",
            (ts, app, title, event, screenshot),
        )
        self.conn.commit()

    def safe_execute(self, sql: str, params: Optional[List[Any]] = None) -> List[sqlite3.Row]:
        """
        Execute only allowed SQL commands.
        Returns rows as list of dict-like sqlite3.Row.
        """
        sql_clean = sql.strip()
        if not self.ALLOWED_QUERY.match(sql_clean):
            raise ValueError("Unsafe SQL. Only SELECT or INSERT allowed.")

        cursor = self.conn.cursor()
        if params:
            cursor.execute(sql_clean, params)
        else:
            cursor.execute(sql_clean)

        if sql_clean.upper().startswith("SELECT"):
            return cursor.fetchall()
        else:
            self.conn.commit()
            return []

    def close(self) -> None:
        try:
            self.conn.close()
        except Exception:
            pass
```

`journal.service`

```
[Unit]
Description=Journal background watcher
After=graphical-session.target

[Service]
ExecStart=/home/fira/Documents/f/journal/run.sh
Restart=always
RestartSec=5
Environment=PYTHONUNBUFFERED=1

[Install]
WantedBy=default.target
```

`run.sh`

```
#!/usr/bin/env bash
cd /home/fira/Documents/f/journal
/usr/bin/python3 app.py
```

---

- change `test_snapshot.py` to `test/snapshot.py` and write tests inside test folder.
- edit it for the lastest change.
- write tests for all core fn
- dont use venv. install system wide. write requirements. follow convention. dont run directly, it's designed to work with systemd. 

---

- i have striped all `test_`. now you have things like `test/store.py` instead of `test/test_store.py`.
- i have applied all changes besides the deprecated readme (i dont wanna use venv).
- write a simple and concise docs about how to install and test.
- install: systemd. apt. pip. (write down the commands, i can already install without venv). put everything needed into requirements.
- test: follow convention.



---

im creating humility, an autonomous continuous ai agent.

---

folder shape.

```
fira@Fira ~/Documents/f/humility
 % tree -I 'node_modules|legacy'

.
├── backend
│   ├── compute
│   │   ├── act.js
│   │   ├── ask.js
│   │   ├── begin.js
│   │   ├── decide.js
│   │   ├── load.js
│   │   ├── loop.js
│   │   ├── parse.js
│   │   ├── plan.js
│   │   ├── prepare.js
│   │   ├── rest.js
│   │   ├── spec.md
│   │   ├── test
│   │   │   ├── ask.js
│   │   │   ├── computer_graphics.js
│   │   │   ├── load.js
│   │   │   ├── parse.js
│   │   │   ├── prepare.js
│   │   │   └── tools.js
│   │   └── tools
│   │       ├── edit.js
│   │       ├── read.js
│   │       ├── shell.js
│   │       └── write.js
│   ├── connect
│   │   ├── browser.js
│   │   ├── chatgpt.js
│   │   ├── deepseek.js
│   │   ├── listen.js
│   │   ├── ollama.js
│   │   ├── readme.md
│   │   ├── send.js
│   │   ├── sessions.js
│   │   └── test
│   │       ├── browse.js
│   │       └── send.js
│   ├── humility.log
│   ├── log.js
│   ├── package.json
│   ├── readme.md
│   ├── reference.md
│   ├── serve
│   │   └── serve.js
│   ├── spec.md
│   ├── store
│   │   ├── index.js
│   │   ├── init.js
│   │   ├── moves.js
│   │   ├── schema.js
│   │   ├── sessions.js
│   │   └── test
│   │       └── test.js
│   └── types.d.ts
├── eslint.config.js
├── frontend
│   ├── app.jsx
│   ├── design
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── readme.md
│   ├── index.html
│   ├── main.jsx
│   ├── package.json
│   ├── postcss.config.js
│   ├── readme.md
│   ├── storybook.jsx
│   ├── tailwind.config.js
│   ├── tailwind.css
│   └── vite.config.js
├── jsconfig.json
├── misc
│   └── document.md
├── notes.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── readme.md
├── roadmap.md
└── script
    ├── ports.js
    └── run.js

14 directories, 69 files
```

---

types

```
// note: always check type before accessing value or error
// note: be careful with the number of `../` (parent folders)
// usage: /** @typedef {import('./../types').result} result */
type ok = { type: 'ok'; value?: any }
type err = { type: 'err'; error: string }
export type result = ok | err

export type context = {
  working_directory: string
}
```

log

```
// log.js
import fs from "fs";

/**
 * Append a timestamped log line to humility.log and print to console.
 *
 * @async
 * @function log
 * @param {object} params - Log parameters.
 * @param {string} params.message - The message to record.
 * @param {"info"|"warn"|"error"|"debug"} [params.level="info"] - Log severity level.
 * @param {string} [params.location] - Location like file:fn.
 * @returns {Promise<void>}
 *
 * @example
 * await log({
 *   message: "agent start"
 * });
 * // 2026-02-19T12:00:00.000Z INFO agent start
 *
 * @example
 * await log({
 *   level: "warn",
 *   location: "compute/ask.js:run",
 *   message: "model slow response"
 * });
 * // 2026-02-19T12:00:01.000Z WARN compute/ask.js:run model slow response
 */
export const log = async ({
  message,
  level = "info",
  location = "",
}) => {
  const time = new Date().toISOString();
  const upper_level = level.toUpperCase();
  const clean_message = message;
  // const clean_message = message.split("\n").join("\\n");
  // const clean_message = message.replace(/\s+/g, " ").trim();

  const parts = [
    time,
    upper_level,
    location,
    clean_message,
  ].filter(Boolean);

  const line = parts.join(" ") + "\n";

  const file_path = new URL("./humility.log", import.meta.url);

  await fs.promises.appendFile(file_path, line, "utf-8");

  if (upper_level === "ERROR") {
    console.error(line.trim());
    return;
  }

  if (upper_level === "WARN") {
    console.warn(line.trim());
    return;
  }

  console.log(line.trim());
};
```

---

how to fix

```
 ~ % zsh -ic 'push'

Push attempt 1 of 3
fatal: Unable to create '/home/fira/Documents/f/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.
```
