# clock.py
from datetime import datetime

def now_local_iso() -> str:
    """
    Return an ISO-8601 timestamp with local timezone offset.
    Example: 2025-12-21T23:34:18.504246+08:00
    """
    return datetime.now().astimezone().isoformat()
