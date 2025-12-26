# config.py
from pathlib import Path
import json
from typing import Any, Optional


class Config:
    """
    Load configuration from a JSON file.

    Invariants:
    - Config is always constructed from a path.
    - All public fields always exist.
    - Defaults are applied if values are missing or invalid.
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
        self.screenshots_enabled: bool = self._get_bool(
            raw, "screenshots_enabled", False
        )

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
        return bool(raw.get(key, default))

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
            f"screenshot_interval={self.screenshot_interval}, "
            f"screenshots_enabled={self.screenshots_enabled}, "
            f"data_directory='{self.data_directory}', "
            f"screenshot_directory='{self.screenshot_directory}', "
            f"web_port={self.web_port}, "
            f"log_level='{self.log_level}', "
            f"debug={self.debug}"
            ")"
        )
