# window.py
from pathlib import Path
import json
import logging
from typing import Optional
import os
import subprocess

from models import WindowState

logger = logging.getLogger("journal.window")


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


class x11_window_observer:
    """
    Fetch focused window information directly via X11 tools:
    - xdotool (to get focused window id and name)
    - xprop (to get WM_CLASS)
    Falls back gracefully when tools are not present.
    """

    def __init__(self):
        # nothing to configure
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
            if not out:
                return None
            return out
        except FileNotFoundError:
            # tool not installed
            logger.debug("tool not found: %s", cmd[0])
            return None
        except subprocess.TimeoutExpired:
            logger.debug("command timed out: %s", " ".join(cmd))
            return None
        except Exception as e:
            logger.debug("error running command %s: %s", cmd, e)
            return None

    def get_active_window(self) -> Optional[WindowState]:
        """
        Return the focused window as WindowState or None.
        Uses xdotool/xprop. If those utilities are missing or return nothing,
        returns None.
        """
        # find focused window id
        wid = self._run(["xdotool", "getwindowfocus"])
        if not wid:
            logger.debug("xdotool did not return a focused window id")
            return None

        # get window title/name
        title = self._run(["xdotool", "getwindowname", wid]) or ""
        title = title.strip()

        # try WM_CLASS via xprop
        wm_class = self._run(["xprop", "-id", wid, "WM_CLASS"])
        app = ""
        if wm_class:
            # sample: WM_CLASS(STRING) = "Navigator", "Firefox"
            try:
                # get right side of '=' then split by comma
                rhs = wm_class.split("=", 1)[1]
                # remove quotes and spaces
                parts = [p.strip().strip('"') for p in rhs.split(",") if p.strip()]
                if parts:
                    # pick last part (often the application/class)
                    app = parts[-1]
            except Exception:
                app = ""
        # fallback: derive app from process id
        if not app:
            pid_out = self._run(["xdotool", "getwindowpid", wid])
            if pid_out:
                pid = pid_out.strip()
                try:
                    comm = Path(f"/proc/{pid}/comm").read_text().strip()
                    if comm:
                        app = comm
                except Exception:
                    # ignore
                    app = app or ""

        app = app.strip()
        if not app and not title:
            # nothing useful
            return None

        return WindowState(app=app, title=title)