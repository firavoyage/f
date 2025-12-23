# log.py
from pathlib import Path
from clock import now_local_iso

class JournalLogger:
    def __init__(self, path: Path):
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)

    def log(self, message: str) -> None:
        line = f"{now_local_iso()}  {message}\n"
        with self.path.open("a", encoding="utf-8") as f:
            f.write(line)
