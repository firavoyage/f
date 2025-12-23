# app.py
from pathlib import Path
from config import Config
from watcher import Watcher

def main():
    cfg = Config(Path("config.json"))
    watcher = Watcher(cfg)
    watcher.run_forever()

if __name__ == "__main__":
    main()
