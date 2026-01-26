import asyncio
import json
from aiohttp import web, WSMsgType

from protocol import validate_message, new_id, PROTOCOL_VERSION
from state import State

state = State()

# ---------- HTTP ----------

async def handle_call(request):
    data = await request.json()
    task_id = new_id()

    msg = {
        "v": PROTOCOL_VERSION,
        "id": task_id,
        "page": data["page"],
        "method": data["method"],
        "params": data.get("params", {}),
    }

    validate_message(msg)

    # wait for extension to connect (max ~5s)
    for _ in range(50):
        if state.extension_ws:
            break
        await asyncio.sleep(0.1)

    if not state.extension_ws:
        return web.json_response(
            {"error": "no extension connected"},
            status=503,
        )

    fut = state.register_task(task_id)
    await state.extension_ws.send_str(json.dumps(msg))

    try:
        result = await asyncio.wait_for(fut, timeout=10)
    except asyncio.TimeoutError:
        return web.json_response(
            {"error": "extension timeout"},
            status=504,
        )

    return web.json_response(result)


async def health(request):
    return web.json_response({
        "ok": True,
        "extension": state.extension_ws is not None
    })

# ---------- WebSocket ----------

async def ws_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    state.set_extension(ws)
    print("any: extension connected")

    try:
        async for msg in ws:
            if msg.type == WSMsgType.TEXT:
                data = json.loads(msg.data)
                validate_message(data)
                state.resolve_task(data["id"], data)
    finally:
        state.clear_extension()
        print("any: extension disconnected")

    return ws


# ---------- app ----------

app = web.Application()
app.add_routes([
    web.get("/health", health),
    web.post("/call", handle_call),
    web.get("/ws", ws_handler),
])

if __name__ == "__main__":
    web.run_app(app, port=8765)
