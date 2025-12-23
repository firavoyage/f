# snapshot_to_db.py
from pathlib import Path
import json
from models import WindowState
from store import JournalStore
from config import Config

def read_snapshot(path: Path):
    if not path.exists():
        print("snapshot file not found:", path)
        return None
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:
        print("invalid JSON:", e)
        return None
    focused = data.get("focused")
    if not focused:
        print("no focused object in snapshot")
        return None
    app = (focused.get("class") or "").strip()
    title = (focused.get("title") or "").strip()
    if not app and not title:
        print("focused has empty class/title")
        return None
    return WindowState(app=app, title=title)

def main():
    cfg = Config(Path("config.json"))
    snapshot = Path(cfg.snapshot_path) if getattr(cfg, "snapshot_path", None) else Path.home() / ".cache" / "journal-windows.json"
    print("reading snapshot from:", snapshot)
    state = read_snapshot(snapshot)
    if not state:
        print("no state to write.")
        return
    db = Path(cfg.data_directory) / "journal.db"
    store = JournalStore(db)
    store.record(state, event="focus_change", screenshot=None)
    store.close()
    print("inserted one focus_change for:", state)

if __name__ == "__main__":
    from pathlib import Path
    main()
