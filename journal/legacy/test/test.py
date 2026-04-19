# test/test.py

import sys
from pathlib import Path
sys.path.append(str(Path(__file__).resolve().parent.parent))  # add project root to sys.path

import json
import types
from pathlib import Path

from config import Config
from models import WindowState
from store import JournalStore
from window import FileWindowObserver
from log import JournalLogger
import window


# Test for Config
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


def test_file_window_observer_reads_focused(tmp_path: Path):
    snapshot = {
        "focused": {"class": "TestApp", "title": "A test window"}
    }
    path = tmp_path / "snapshot.json"
    path.write_text(json.dumps(snapshot), encoding="utf-8")

    obs = FileWindowObserver(path)
    state = obs.get_active_window()

    assert state is not None
    assert state.app == "TestApp"
    assert state.title == "A test window"


def test_file_window_observer_handles_missing(tmp_path: Path):
    path = tmp_path / "does_not_exist.json"
    obs = FileWindowObserver(path)
    state = obs.get_active_window()
    assert state is None


def _make_completed(stdout: str):
    cp = types.SimpleNamespace()
    cp.stdout = stdout
    return cp


def test_x11_window_observer_parses_outputs(monkeypatch):
    """
    Simulate xdotool/xprop outputs and verify parsing logic.
    """
    calls = []

    def fake_run(cmd, capture_output=True, text=True, timeout=1.0, check=False):
        # record command
        calls.append(cmd)
        # simulate outputs based on command
        if cmd[0] == "xdotool" and cmd[1] == "getwindowfocus":
            return _make_completed("12345\n")
        if cmd[0] == "xdotool" and cmd[1] == "getwindowname":
            return _make_completed("Fake Window Title\n")
        if cmd[0] == "xprop":
            # typical xprop WM_CLASS output
            return _make_completed('WM_CLASS(STRING) = "Navigator", "Firefox"\n')
        # fallback
        return _make_completed("")

    monkeypatch.setattr(window.subprocess, "run", fake_run)

    obs = window.x11_window_observer()
    state = obs.get_active_window()

    assert state is not None
    assert "Firefox" in state.app or "Navigator" in state.app
    assert "Fake Window Title" in state.title


# Test for JournalStore
def test_journal_store_record_and_select(tmp_path: Path):
    db_path = tmp_path / "journal.db"
    store = JournalStore(db_path)

    # ensure table exists by inserting
    state = WindowState(app="app-xyz", title="title-123")
    store.record(state, event="unit_test_event", screenshot="/tmp/shot.png")

    rows = store.safe_execute("SELECT id, time, app, title, event, screenshot FROM journal")
    assert len(rows) == 1
    row = rows[0]
    assert row["app"] == "app-xyz"
    assert row["title"] == "title-123"
    assert row["event"] == "unit_test_event"
    assert row["screenshot"] == "/tmp/shot.png"

    # test inserting via safe_execute (INSERT allowed)
    store.safe_execute(
        "INSERT INTO journal (time, app, title, event) VALUES (strftime('%Y-%m-%dT%H:%M:%f', 'now'), ?, ?, ?)",
        params=["a2", "t2", "evt2"],
    )
    rows2 = store.safe_execute("SELECT app, title, event FROM journal ORDER BY id")
    assert len(rows2) >= 2

    store.close()


# Test for snapshot script
def test_snapshot():
    print("== Journal snapshot test ==")

    cfg = Config(Path("config.json"))
    snapshot_path = (
        Path(cfg.snapshot_path) if cfg.snapshot_path else Path.home() / ".cache" / "journal-windows.json"
    )

    print("Snapshot path:", snapshot_path)

    observer = FileWindowObserver(snapshot_path)
    state = observer.get_active_window()

    if state is None:
        print("❌ No active window detected. Is a window focused?")
    else:
        print("✅ Active window detected:")
        print("   app  :", state.app)
        print("   title:", state.title)

    store = JournalStore(Path(cfg.data_directory) / "journal.db")
    logger = JournalLogger(Path(cfg.data_directory) / "logs" / "journal.log")

    # Log the state
    if state:
        store.record(state, event="test_snapshot")
        logger.log(
            f"test_snapshot  app={state.app if state else ''}  title={state.title if state else ''}"
        )
    else:
        store.record(None, event="test_snapshot")
        logger.log("test_snapshot  No active window detected")

    print("✅ Test complete. One row written to database.")
