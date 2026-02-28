# watcher.py
import time
from pathlib import Path
from typing import Optional
import os
import logging

from window import FileWindowObserver, x11_window_observer
from store import JournalStore
from log import JournalLogger
from models import WindowState
from config import Config

# import stays, but usage is conditional
from screenshot import Screenshotter


logger = logging.getLogger("journal.watcher")


class Watcher:
    """
    Poll the active window (via X11 tools or extension snapshot) and record events to SQLite.
    Screenshots are optional and policy-controlled via config.
    """

    def __init__(self, cfg: Config):
        cache_default = Path.home() / ".cache" / "journal-windows.json"

        # decide observer:
        # priority:
        # 1. cfg.use_x11 True -> use X11 tools
        # 2. cfg.snapshot_path provided -> file observer
        # 3. if DISPLAY present -> use X11 tools
        # 4. fallback to file observer with default path
        use_x11 = bool(cfg.use_x11) or (not cfg.snapshot_path and bool(os.getenv("DISPLAY")))
        if use_x11:
            self.observer = x11_window_observer()
            observer_type = "x11"
        else:
            snapshot_path = Path(cfg.snapshot_path) if getattr(cfg, "snapshot_path", None) else cache_default
            self.observer = FileWindowObserver(snapshot_path)
            observer_type = f"file:{snapshot_path}"

        data_dir = Path(cfg.data_directory)
        data_dir.mkdir(parents=True, exist_ok=True)

        self.store = JournalStore(data_dir / "journal.db")
        self.logger = JournalLogger(data_dir / "logs" / "journal.log")

        self.poll_interval = int(cfg.poll_interval)
        # interval capture controls how often to make the periodic record (default 20 min)
        self.interval_seconds = int(cfg.interval_capture)

        self._last_state: Optional[WindowState] = None
        self._last_interval_ts = time.monotonic()

        self.debug = bool(os.getenv("JOURNAL_DEBUG")) or getattr(cfg, "debug", False)

        # policy flag
        self.screenshots_enabled = bool(cfg.screenshots_enabled)

        # whether to record on focus/window change
        self.capture_on_focus_change = bool(cfg.capture_on_focus_change)

        # instantiate screenshotter only if enabled
        self.screenshotter: Optional[Screenshotter] = None
        if self.screenshots_enabled:
            try:
                self.screenshotter = Screenshotter(cfg)
                self.logger.log("screenshots enabled")
            except Exception as e:
                # if screenshotter fails to initialize, disable screenshots
                self.screenshotter = None
                self.screenshots_enabled = False
                self.logger.log(f"screenshotter init failed, disabling screenshots: {e}")
        # else:
        #     self.logger.log("screenshots disabled (policy)")

        self.logger.log(f"watcher started observer={observer_type} poll_interval={self.poll_interval} interval_seconds={self.interval_seconds} capture_on_focus_change={self.capture_on_focus_change}")

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
        if not self.capture_on_focus_change:
            # focus change capture disabled by config
            self._dbg("focus_change skipped by config")
            return

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
            print(self.observer.get_active_window, initial)
            if initial:
                self._last_state = initial
                # respect config: only record initial focus if allowed
                if self.capture_on_focus_change:
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