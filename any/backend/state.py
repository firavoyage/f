# backend/state.py
import asyncio

class State:
    def __init__(self):
        self.extension_ws = None
        self.pending = {}  # id -> Future

    def set_extension(self, ws):
        self.extension_ws = ws

    def clear_extension(self):
        self.extension_ws = None

    def register_task(self, task_id):
        fut = asyncio.get_event_loop().create_future()
        self.pending[task_id] = fut
        return fut

    def resolve_task(self, task_id, message):
        fut = self.pending.pop(task_id, None)
        if fut and not fut.done():
            fut.set_result(message)
