# store.py
import sqlite3
from pathlib import Path
from typing import Optional, List, Any
import re

from models import WindowState
from clock import now_local_iso


class JournalStore:
    """
    SQLite wrapper.
    Safe, explicit, synchronous.
    Frontend may send queries, but only SELECT or safe INSERT allowed.
    """

    ALLOWED_QUERY = re.compile(r"^(SELECT|INSERT)\b", re.IGNORECASE)

    def __init__(self, db_path: Path):
        self.db_path = db_path
        self.conn = sqlite3.connect(str(db_path), timeout=10, check_same_thread=False)
        self.conn.row_factory = sqlite3.Row  # return dict-like rows
        self._init_schema()

    def _init_schema(self) -> None:
        self.conn.execute(
            """
            CREATE TABLE IF NOT EXISTS journal (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                time TEXT NOT NULL,
                app TEXT NOT NULL,
                title TEXT NOT NULL,
                event TEXT NOT NULL,
                screenshot TEXT
            )
            """
        )
        self.conn.commit()

    def record(self, state: Optional[WindowState], event: str, screenshot: Optional[str] = None) -> None:
        """Insert a journal event. Safe, predictable."""
        app = state.app if state else ""
        title = state.title if state else ""
        ts = now_local_iso()
        self.conn.execute(
            "INSERT INTO journal (time, app, title, event, screenshot) VALUES (?, ?, ?, ?, ?)",
            (ts, app, title, event, screenshot),
        )
        self.conn.commit()

    def safe_execute(self, sql: str, params: Optional[List[Any]] = None) -> List[sqlite3.Row]:
        """
        Execute only allowed SQL commands.
        Returns rows as list of dict-like sqlite3.Row.
        """
        sql_clean = sql.strip()
        if not self.ALLOWED_QUERY.match(sql_clean):
            raise ValueError("Unsafe SQL. Only SELECT or INSERT allowed.")

        cursor = self.conn.cursor()
        if params:
            cursor.execute(sql_clean, params)
        else:
            cursor.execute(sql_clean)

        if sql_clean.upper().startswith("SELECT"):
            return cursor.fetchall()
        else:
            self.conn.commit()
            return []

    def close(self) -> None:
        try:
            self.conn.close()
        except Exception:
            pass
