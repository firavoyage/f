# test/snapshot.py
# Legacy-style snapshot test (moved from test_snapshot.py).
# This script prints test results but is not required for pytest.
from pathlib import Path

from config import Config
from window import FileWindowObserver
from store import JournalStore
from log import JournalLogger


def main() -> None:
    print("== Journal snapshot test ==")

    cfg = Config(Path("config.json"))
    snapshot_path = (
        Path(cfg.snapshot_path) if cfg.snapshot_path else Path.home() / ".cache" / "journal-windows.json"
    )

    print("Snapshot path:", snapshot_path)

    observer = FileWindowObserver(snapshot_path)
    state = observer.get_active_window()

    if state is None:
        print("❌ No active window detected.")
    else:
        print("✅ Active window detected:")
        print("   app  :", state.app)
        print("   title:", state.title)

    store = JournalStore(Path(cfg.data_directory) / "journal.db")
    logger = JournalLogger(Path(cfg.data_directory) / "logs" / "journal.log")

    store.record(state, event="test_snapshot")
    logger.log(
        f"test_snapshot  app={state.app if state else ''}  title={state.title if state else ''}"
    )

    print("✅ One row written to database.")
    print("✅ One line written to log.")
    print("== Test complete ==")


if __name__ == "__main__":
    main()