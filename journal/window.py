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
