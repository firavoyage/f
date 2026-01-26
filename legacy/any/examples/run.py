import subprocess
import sys
import time
import requests
import atexit
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
SERVER_URL = "http://localhost:8765"
SERVER_CMD = [sys.executable, "-u", os.path.join(BASE_DIR, "backend/server.py")]

server_proc = None


def start_server():
    global server_proc
    server_proc = subprocess.Popen(
        SERVER_CMD,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )

    for _ in range(50):
        try:
            r = requests.get(SERVER_URL + "/health", timeout=0.1)
            if r.status_code == 200:
                return
        except requests.exceptions.RequestException:
            pass
        time.sleep(0.1)

    raise RuntimeError("backend server failed to start")


def stop_server():
    if server_proc:
        server_proc.terminate()
        try:
            server_proc.wait(timeout=2)
        except subprocess.TimeoutExpired:
            server_proc.kill()


atexit.register(stop_server)

# ---------- run ----------

start_server()

payload = {
    "page": "https://example.com",
    "method": "pageInfo",
    "params": {"delay": 500},
}

resp = requests.post(SERVER_URL + "/call", json=payload)
print(resp.json())
