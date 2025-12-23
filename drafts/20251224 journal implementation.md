<!-- screenshot. use the same way. -->

<!-- web. -->

# ...

i would like to create an app called journal on ubuntu.

it autostarts, runs in the background, and watching the user.

it knows all the opened apps, the title of the app on the top, and the screen.

it tracks any change of the title of the app on the top, takes screenshot regularly (at an interval of certain several minutes, or when context switching), and keep them properly.

it has an web ui on localhost, like a calendar, or a timeline.

it could export the data to plain text and integrate with llms to analyze.

idk much about tech. but ive consulted pros and made my decisions.

i prefer boring tech. i choose python, sqlite, and flask. i choose polling to notice changes, one process for both watching and web server, utc with timezone for time handling, plain text file for logging. i would like to have a small json config file for screenshot interval, data directory, port number, etc.

i use python standard library. i choose xdotool (called via subprocess) to get active window ID and indow title and wmctrl (optional backup), scrot (called via subprocess) for screenshots.

i have one main table called journal.

- id (integer, primary key)
- time (string, timezone-aware ISO-8601 using the local timezone offset)
- app (text, the app name)
- title (text, the window title)
- event (text, type of the event) examples: focus_change, interval_capture
- screenshot (text, nullable, the path of the screenshot)

this is my folder layout.

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

this is my config file shape.

```
screenshot interval (seconds): default 300

poll interval (seconds): default 1

data directory path: data

screenshot directory path: screenshots

web port: 5000

log level: verbose by default
```

now, ive made some progress.

- gnome extension, which could log the window data for ubuntu (wayland).
- watch window
- store and log

here is the current folder shape.

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
├── read_cache.py
├── readme.md
├── resources
│   ├── gnome-extension
│   │   ├── extension.js
│   │   └── metadata.json
│   └── systemd
│       └── journal.service
├── run.sh
├── snapshot_to_db.py
├── store.py
├── test_snapshot.py
├── watcher.py
└── window.py
```

here is some of the code. ive pasted what i think is related. ask for any code if you need.

<!-- ... -->

# ...

now let's focus on the apis. they could be inevitable and invariant and may survive to the release.

let's install and import some libraries and test apis. 

ive already implemented window titles. let's focus on screenshot now. store and log.

(before coding, how would you like to design it.)



write good code, which is clear, cohesive, SOLID, minimal, intention-revealing, invariant-safe, DRY, YAGNI, low-coupling, boring.
