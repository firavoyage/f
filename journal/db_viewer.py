# db_viewer.py
import sqlite3
from pathlib import Path
import sys

DB = Path("data") / "journal.db"

def show_last(n=20):
    if not DB.exists():
        print("DB file not found:", DB)
        return
    conn = sqlite3.connect(str(DB))
    try:
        cur = conn.cursor()
        # show schema
        print("=== schema ===")
        for row in cur.execute("SELECT sql FROM sqlite_master WHERE type='table'"):
            print(row[0])
        print("\n=== last rows ===")
        rows = cur.execute("SELECT id, time, app, title, event FROM journal ORDER BY id DESC LIMIT ?", (n,)).fetchall()
        if not rows:
            print("(no rows)")
            return
        # pretty print newest-last -> oldest
        for r in reversed(rows):
            print(f"{r[0]:>4} | {r[1]} | {r[4]:12} | {r[2]} | {r[3]}")
    finally:
        conn.close()

if __name__ == "__main__":
    n = 20
    if len(sys.argv) > 1:
        try:
            n = int(sys.argv[1])
        except Exception:
            pass
    show_last(n)
