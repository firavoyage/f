# test/config.py
import json
from pathlib import Path
import pytest

from config import Config


def test_config_loads_defaults_and_values(tmp_path: Path):
    cfg_path = tmp_path / "config.json"
    payload = {
        "poll_interval": 2,
        "interval_capture": 600,
        "screenshot_interval": 150,
        "data_directory": str(tmp_path / "data"),
        "screenshot_directory": str(tmp_path / "shots"),
        "web_port": 8080,
        "log_level": "info",
        "screenshots_enabled": True,
        "capture_on_focus_change": False,
        "use_x11": True,
        "debug": True,
    }
    cfg_path.write_text(json.dumps(payload), encoding="utf-8")

    cfg = Config(cfg_path)

    assert cfg.poll_interval == 2
    assert cfg.interval_capture == 600
    assert cfg.screenshot_interval == 150
    assert cfg.data_directory == Path(payload["data_directory"]).expanduser()
    assert cfg.screenshot_directory == Path(payload["screenshot_directory"]).expanduser()
    assert cfg.web_port == 8080
    assert cfg.log_level == "info"
    assert cfg.screenshots_enabled is True
    assert cfg.capture_on_focus_change is False
    assert cfg.use_x11 is True
    assert cfg.debug is True


def test_config_handles_missing_file(tmp_path: Path):
    cfg_path = tmp_path / "missing.json"
    cfg = Config(cfg_path)
    # defaults
    assert isinstance(cfg.poll_interval, int)
    assert isinstance(cfg.interval_capture, int)
    assert cfg.screenshots_enabled in (True, False)