# app.py
from pathlib import Path
from config import Config
from watcher import Watcher
from web import start_in_background


def main():
    cfg = Config(Path("config.json"))

    # start web server quietly
    start_in_background(cfg.web_port)

    # start watcher (main loop)
    watcher = Watcher(cfg)
    watcher.run_forever()


if __name__ == "__main__":
    main()
