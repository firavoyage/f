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
