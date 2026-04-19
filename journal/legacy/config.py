# config.py
from pathlib import Path
import json
from typing import Any, Optional


class Config:
    """
    Load configuration from a JSON file.

    New options:
    - interval_capture: seconds between automatic interval captures (default 1200 = 20 min)
    - capture_on_focus_change: enable/disable recording on focus/window change (default True)
    - use_x11: force X11-based window fetching (default False)
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
        # seconds between automatic interval captures (20 minutes default)
        self.interval_capture: int = self._get_int(raw, "interval_capture", 20 * 60)
        # how often to make screenshots (if screenshots_enabled); kept for compatibility
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
        # screenshot capture enabled/disabled
        self.screenshots_enabled: bool = self._get_bool(
            raw, "screenshots_enabled", False
        )

        # whether to record on focus/window change
        self.capture_on_focus_change: bool = self._get_bool(
            raw, "capture_on_focus_change", True
        )

        # prefer fetching windows via X11 tools (xdotool/xprop)
        self.use_x11: bool = self._get_bool(raw, "use_x11", False)

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
        # be permissive: allow "true"/"false" strings and truthy values
        val = raw.get(key, default)
        if isinstance(val, bool):
            return val
        if isinstance(val, str):
            return val.lower() in ("1", "true", "yes", "y", "on")
        try:
            return bool(val)
        except Exception:
            return default

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
            f"interval_capture={self.interval_capture}, "
            f"screenshot_interval={self.screenshot_interval}, "
            f"screenshots_enabled={self.screenshots_enabled}, "
            f"capture_on_focus_change={self.capture_on_focus_change}, "
            f"use_x11={self.use_x11}, "
            f"data_directory='{self.data_directory}', "
            f"screenshot_directory='{self.screenshot_directory}', "
            f"web_port={self.web_port}, "
            f"log_level='{self.log_level}', "
            f"debug={self.debug}"
            ")"
        )