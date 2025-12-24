# config.py
from pathlib import Path
import json
from typing import Any, Optional


class Config:
    """
    Load configuration from a JSON file.

    Invariant:
    - Config is always constructed from a path.
    - All fields always exist (defaults applied).
    """

    def __init__(self, path: Path = Path("config.json")) -> None:
        self.path = Path(path)

        raw: dict[str, Any] = {}
        if self.path.exists():
            try:
                raw = json.loads(self.path.read_text(encoding="utf-8"))
            except Exception:
                raw = {}

        self.poll_interval: int = int(raw.get("poll_interval", 5))
        self.screenshot_interval: int = int(raw.get("screenshot_interval", 300))

        self.data_directory: str = str(raw.get("data_directory", "data"))
        self.screenshot_directory: str = str(raw.get("screenshot_directory", "screenshots"))

        self.web_port: int = int(raw.get("web_port", 5000))
        self.log_level: str = str(raw.get("log_level", "verbose"))

        # new, explicit policy switch
        self.screenshots_enabled: bool = bool(raw.get("screenshots_enabled", False))

        # optional fields
        self.snapshot_path: Optional[str] = raw.get("snapshot_path")
        self.debug: bool = bool(raw.get("debug", False))

    def __repr__(self) -> str:
        return (
            "Config("
            f"poll_interval={self.poll_interval}, "
            f"screenshot_interval={self.screenshot_interval}, "
            f"screenshots_enabled={self.screenshots_enabled}, "
            f"data_directory='{self.data_directory}', "
            f"screenshot_directory='{self.screenshot_directory}', "
            f"web_port={self.web_port}, "
            f"log_level='{self.log_level}'"
            ")"
        )
