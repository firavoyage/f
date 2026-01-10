things

message/paste · todo · things · scratch pad · weekly/projects

---

("what web games lacks")

how could i make visuals (web apps, games, videos scenes, posters, etc.) more graceful, practically.

e.g. remove all the text (or replace with big words, icons, ...) categorized.

(ask for the question first.)

not just something that works. (vibe coding blue to purple gradients)

---

data driven. Fuck that dream.

how.

---

mcp, lsp.

what is. how to create one.

---

ctf. (i mean, ...)

userscript (browser extension) for exporting.

dom, and network.

how to get and pass the network infomation.

---

things like https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md

are everywhere.

find and organize them.

---

intuitive project: python.

(i love cpp more... or rust?)

but, nothing special. (scratch is ofc deprecated, good design, good library, but too opinionated about the interaction.)

(agentic) llms could work anyway, although.

---

todo

<!-- leverage thinking. -->

---

journal:

~~the magic move.~~

design api: proceed as long as safe (what's safe... like not irreversible), let frontend take the responsibility.

ui. clarity (simple). write. (how to be elegant. "web games often lack. vibe coded apps often lack.")

---

carte:

game design.

gameplay.

ideas.

clarity.

---

carte: a build step or not

---

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

carte: clarify the game. think how to ask. (how to ask how to ask)

---

(cursor claude code alternatives)

learn from manus. (how, what do i want, and what may i ask)

i dont need automation. i dont need create my own manus. i need a set of prompts. yeah, it definitely helps, i think.

i would like to have some prompts. not manus. but claude code. (confirm)

https://manus.im/docs/features/wide-research?utm_source=chatgpt.com#what-is-wide-research

https://manus.im/share/IXdMjxObbFKbIjUUkBk4EH?replay=1

---

journal, mindmap like markdown nested list.

clarify. (summarize/normalize/standardize/...)

before design ui.

---

self. journal. (carte.)

pure.

pure project. (important. appealing.)

---

grow. eat.

---

have one aesthetic appealing idea (no more todo lists). test opencode myself, learning by doing.

have one complex task. test opencode, about the workflow, showcasing its power.

see things myself. sometimes just add some apis to chatgpt, that's enough.

"just find some skills and have some prompts"

that's value:

- proven workflow. good prompts.
- simple automation like self correction loop.

if it works and feels right, then that's it. no need to have infinite power. no need to chase everything.

---

ai lian shuo. heng sheng teng man pang sheng zhi jin

chinese textbook articles.

categorize apps

"make all (existing) useful tools elegant"

categorize world's infomation

"organize the world’s information and make it universally accessible and useful"

---

voice input.

"be graceful"

---

para. (supporting grow)

---

give me some words for meta thinking.

---

revise projects... more pragmatic?

---

summary style...

---
