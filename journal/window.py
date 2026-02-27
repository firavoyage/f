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
    Falls back gracefully when tools are not present.
    """

    def __init__(self):
        # Initialize the observer
        pass

    def _run(self, cmd: list[str], timeout: float = 1.0) -> Optional[str]:
        """
        Run a command and return the output. Returns None if there is an issue.
        """
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
            # Tool not found
            logger.debug(f"Tool not found: {cmd[0]}")
            return None
        except subprocess.TimeoutExpired:
            logger.debug(f"Command timed out: {' '.join(cmd)}")
            return None
        except Exception as e:
            logger.debug(f"Error running command {' '.join(cmd)}: {e}")
            return None

    def get_active_window(self) -> Optional[WindowState]:
        """
        Return the focused window as WindowState or None.
        Uses xdotool/xprop. If those utilities are missing or return nothing,
        returns None.
        """
        # Ensure DISPLAY is set
        if not os.getenv("DISPLAY"):
            logger.debug("No DISPLAY environment variable set. Exiting.")
            return None

        # Find focused window id
        wid = self._run(["xdotool", "getwindowfocus"])
        if not wid:
            logger.debug("xdotool did not return a focused window id.")
            return None

        # Get window title/name
        title = self._run(["xdotool", "getwindowname", wid]) or ""
        title = title.strip()

        # Get WM_CLASS via xprop
        wm_class = self._run(["xprop", "-id", wid, "WM_CLASS"])
        app = ""
        if wm_class:
            # Sample: WM_CLASS(STRING) = "Navigator", "Firefox"
            try:
                # Get the part after '=' and split by comma
                rhs = wm_class.split("=", 1)[1]
                # Remove quotes and spaces
                parts = [p.strip().strip('"') for p in rhs.split(",") if p.strip()]
                if parts:
                    # Pick the last part (often the human-friendly app name)
                    app = parts[-1]
            except Exception as e:
                logger.debug(f"Error parsing WM_CLASS: {e}")

        # Clean up the app name (remove package prefix like "com.mitchellh")
        if app:
            app = app.split(",")[
                -1
            ].strip()  # In case we have multiple parts, pick the last one
            app = app.split(".")[
                0
            ]  # Remove package prefix (e.g., com.mitchellh -> ghostty)

        if not app and not title:
            # If no useful window information, return None
            logger.debug("No useful window information (app or title).")
            return None

        # Print the human-readable application and title
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
