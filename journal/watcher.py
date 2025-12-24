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
        snapshot_path = Path(cfg.snapshot_path) if getattr(cfg, "snapshot_path", None) else cache_default

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
