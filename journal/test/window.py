# test/test_window.py
from pathlib import Path
import json
import builtins
import types

import pytest

import window


def test_file_window_observer_reads_focused(tmp_path: Path):
    snapshot = {
        "focused": {"class": "TestApp", "title": "A test window"}
    }
    path = tmp_path / "snapshot.json"
    path.write_text(json.dumps(snapshot), encoding="utf-8")

    obs = window.FileWindowObserver(path)
    state = obs.get_active_window()

    assert state is not None
    assert state.app == "TestApp"
    assert state.title == "A test window"


def test_file_window_observer_handles_missing(tmp_path: Path):
    path = tmp_path / "does_not_exist.json"
    obs = window.FileWindowObserver(path)
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