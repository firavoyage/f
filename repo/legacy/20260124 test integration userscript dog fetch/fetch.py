from flask import Flask, request, jsonify
from flask_cors import CORS
import queue
import uuid

app = Flask(__name__)
CORS(app)

messages = queue.Queue()
responses = {}

# --------------------
# Fetcher API
# --------------------

@app.route("/tell", methods=["POST"])
def tell():
    data = request.json
    msg_id = str(uuid.uuid4())

    messages.put({
        "id": msg_id,
        "which": data["which"],
        "what": data["what"],
        "how": data.get("how")
    })

    return jsonify({"id": msg_id})

@app.route("/listen", methods=["GET"])
def listen():
    msg = messages.get()
    return jsonify(msg)

@app.route("/respond", methods=["POST"])
def respond():
    data = request.json
    responses[data["id"]] = data
    print("Dog responded:", data)
    return jsonify({"status": "ok"})

# --------------------
# Fetcher helper
# --------------------

def tell_dog(which, what, how, then):
    import requests
    res = requests.post("http://127.0.0.1:8765/tell", json={
        "which": which,
        "what": what,
        "how": how
    }).json()

    msg_id = res["id"]

    while msg_id not in responses:
        pass

    then(responses[msg_id])

# --------------------
# Test (separate, bottom)
# --------------------

if __name__ == "__main__":
    from threading import Thread
    import time

    def run_server():
        app.run(host="127.0.0.1", port=8765)

    Thread(target=run_server, daemon=True).start()
    time.sleep(1)

    def after(response):
        print("Final callback:", response)

    # Tell the dog on Wikipedia to interact
    tell_dog(
        which="wikipedia\\.org",
        what="readTitle",
        how=None,
        then=after
    )
