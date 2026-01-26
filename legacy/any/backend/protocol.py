# backend/protocol.py
import uuid

PROTOCOL_VERSION = 1

def new_id():
    return str(uuid.uuid4())

def validate_message(msg: dict):
    if not isinstance(msg, dict):
        raise ValueError("message must be dict")

    if msg.get("v") != PROTOCOL_VERSION:
        raise ValueError("invalid protocol version")

    if "id" not in msg:
        raise ValueError("missing id")

    # request
    if "method" in msg:
        if not isinstance(msg["method"], str):
            raise ValueError("method must be string")
        if "page" not in msg:
            raise ValueError("missing page")
        if "params" in msg and not isinstance(msg["params"], dict):
            raise ValueError("params must be object")

    # response
    if "result" in msg and "error" in msg:
        raise ValueError("cannot have both result and error")

    return msg
