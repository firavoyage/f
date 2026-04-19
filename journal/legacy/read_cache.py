# read_cache.py
import json
from pathlib import Path


def read_snapshot():
    p = Path.home() / ".cache" / "journal-windows.json"
    if not p.exists():
        print("No snapshot file yet:", p)
        return None
    text = p.read_text(encoding="utf-8")
    try:
        data = json.loads(text)
    except Exception as e:
        print("JSON error:", e)
        return None
    return data


if __name__ == "__main__":
    snap = read_snapshot()
    if snap is None:
        raise SystemExit(1)
    print("Snapshot at:", snap.get("time"))
    focused = snap.get("focused")
    if focused:
        print("Focused:", focused.get("class"), "|", focused.get("title"))
    else:
        print("No focused window in snapshot.")
    print("Total windows:", len(snap.get("windows", [])))
