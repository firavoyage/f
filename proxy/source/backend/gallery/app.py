#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, parse_qs, quote, unquote
from html import escape
import mimetypes

ROOT = Path(__file__).parent
IMAGES = ROOT / "images"

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = urlparse(self.path).path

        if path.startswith("/images/"):
            name = Path(unquote(path[len("/images/"):])).name
            file = IMAGES / name
            if file.is_file() and file.parent == IMAGES:
                self.send_response(200)
                self.send_header("Content-Type", mimetypes.guess_type(name)[0] or "application/octet-stream")
                self.end_headers()
                self.wfile.write(file.read_bytes())
                return
            self.send_error(404)
            return

        files = sorted(
            (f for f in IMAGES.iterdir()
             if f.is_file() and f.suffix.lower() in
             (".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif")),
            key=lambda f: f.name.lower()
        )

        if not files:
            self.send_error(404, "No images found")
            return

        requested = unquote(
            parse_qs(urlparse(self.path).query).get("img", [None])[0] or ""
        )
        # requested = parse_qs(urlparse(self.path).query).get("img", [None])[0]
        names = [f.name for f in files]

        current = names.index(requested) if requested in names else len(names) - 1
        previous = (current - 1) % len(names)
        name = names[current]

        html = f"""<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{escape(name)}</title>
<style>
body {{
    margin: 0; background: #111; color: white;
    height: 100vh; display: flex;
    align-items: center; justify-content: center;
    font-family: sans-serif;
}}
img {{ max-width: 100vw; max-height: 90vh; object-fit: contain; }}
a {{ display: block; }}
</style>
</head>
<body>
<a href="/?img={quote(names[previous], safe='')}">
<img src="/images/{quote(name, safe='')}" alt="{escape(name)}">
</a>
</body>
</html>"""

        data = html.encode()
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

HTTPServer(("0.0.0.0", 80), Handler).serve_forever()