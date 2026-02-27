# test/test_store.py
from pathlib import Path
import sqlite3

from models import WindowState
from store import JournalStore


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