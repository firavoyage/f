# web.py
from flask import Flask, send_from_directory
import threading
from pathlib import Path


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

    # Serve static resources (favicons, assets, etc.)
    @app.route("/resources/<path:filename>")
    def resources(filename):
        return send_from_directory(base_dir / "resources", filename)

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
