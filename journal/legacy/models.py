# models.py
from dataclasses import dataclass

@dataclass(frozen=True)
class WindowState:
    """
    Immutable, comparable window state.
    Keep fields minimal and stable.
    """
    app: str
    title: str
