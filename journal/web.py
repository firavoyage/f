# web.py
from flask import Flask, send_from_directory, request, jsonify
import threading
from pathlib import Path

from store import JournalStore

# Singleton store (backend instance)
STORE = JournalStore(Path("data/journal.db"))


def create_app():
    base_dir = Path(__file__).parent
    app = Flask(
        __name__,
        static_folder=str(base_dir / "pages"),
        static_url_path="",
    )

    @app.route("/")
    def index():
        return send_from_directory(app.static_folder, "journal.html")

    @app.route("/resources/<path:filename>")
    def resources(filename):
        return send_from_directory(base_dir / "resources", filename)

    @app.route("/api/sql", methods=["POST"])
    def api_sql():
        """
        Frontend sends JSON: { "sql": "<sql string>", "params": [optional list] }
        Backend executes safely and returns JSON results.
        """
        data = request.json or {}
        sql = data.get("sql")
        params = data.get("params")

        if not sql:
            return jsonify({"error": "No SQL provided"}), 400

        try:
            rows = STORE.safe_execute(sql, params)
            result = [dict(row) for row in rows]
            return jsonify({"rows": result})
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    return app


def run_web_server(port: int):
    app = create_app()
    app.run(
        host="127.0.0.1",
        port=port,
        debug=False,
        use_reloader=False,
    )


def start_in_background(port: int):
    thread = threading.Thread(
        target=run_web_server,
        args=(port,),
        daemon=True,
    )
    thread.start()
