# watcher.py
import time
from pathlib import Path
from typing import Optional

from window import FileWindowObserver
from store import JournalStore
from log import JournalLogger
from models import WindowState
from config import Config
import os

class Watcher:
    """
    Poll the GNOME extension snapshot and record events to SQLite.
    - Record an initial focus_change at startup if a focused window is present.
    - Record focus_change on changes.
    - Record interval_capture every `screenshot_interval` seconds.
    """

    def __init__(self, cfg: Config):
        # determine snapshot path (allow overriding in config)
        cache_default = Path.home() / ".cache" / "journal-windows.json"
        snapshot_path = Path(cfg.snapshot_path) if getattr(cfg, "snapshot_path", None) else cache_default

        # ensure data dir exists for DB/log files (relative path)
        data_dir = Path(cfg.data_directory)
        data_dir.mkdir(parents=True, exist_ok=True)

        self.observer = FileWindowObserver(snapshot_path)
        self.store = JournalStore(data_dir / "journal.db")
        self.logger = JournalLogger(data_dir / "logs" / "journal.log")
        self.poll_interval = int(cfg.poll_interval)
        # interval capture uses screenshot_interval (fallback to poll_interval)
        self.interval_seconds = int(getattr(cfg, "screenshot_interval", cfg.poll_interval))
        self._last_state: Optional[WindowState] = None
        self._last_interval_ts = time.monotonic()
        # debug mode from config or env var
        self.debug = bool(os.getenv("JOURNAL_DEBUG")) or getattr(cfg, "debug", False)

    def _dbg(self, *parts):
        if self.debug:
            print("[watcher]", *parts)

    def _record_focus_change(self, state: WindowState) -> None:
        self.store.record(state, event="focus_change", screenshot=None)
        self.logger.log(f"focus_change  app={state.app}  title={state.title}")
        self._dbg("focus_change", state.app, "-", state.title)

    def _record_interval(self, state: Optional[WindowState]) -> None:
        self.store.record(state, event="interval_capture", screenshot=None)
        if state:
            self.logger.log(f"interval_capture  app={state.app}  title={state.title}")
            self._dbg("interval_capture", state.app, "-", state.title)
        else:
            self.logger.log("interval_capture  no_state")
            self._dbg("interval_capture", "no_state")

    def run_forever(self) -> None:
        try:
            # immediate snapshot on startup: if we can read a focused window, record it
            initial = self.observer.get_active_window()
            if initial:
                self._last_state = initial
                self._record_focus_change(initial)
                # reset interval timer so next interval happens after full interval_seconds
                self._last_interval_ts = time.monotonic()

            while True:
                state = self.observer.get_active_window()

                # focus-change detection: only record when a new non-empty state appears and differs
                if state and state != self._last_state:
                    self._record_focus_change(state)
                    self._last_state = state
                # do not overwrite _last_state with None; keep last known

                # interval capture
                now_mon = time.monotonic()
                if now_mon - self._last_interval_ts >= self.interval_seconds:
                    current = state if state else self._last_state
                    self._record_interval(current)
                    self._last_interval_ts = now_mon

                time.sleep(self.poll_interval)
        finally:
            # best-effort cleanup
            try:
                self.store.close()
            except Exception:
                pass
