import sys
import os

# Ensure project root is in sys.path for imports
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from fastapi import FastAPI, WebSocket, HTTPException

# server/main.py
from .models import Task, TaskResult, TaskStatus

from typing import Dict, Set

app = FastAPI()

# Store tasks and connected clients
tasks: Dict[str, dict] = {}
clients: Set[WebSocket] = set()

@app.post("/task")
async def submit_task(task: Task):
    if task.id in tasks:
        raise HTTPException(400, "Task already exists")

    tasks[task.id] = {
        "task": task,
        "status": TaskStatus.queued,
        "result": None
    }

    # Send task to connected browser clients
    for ws in clients:
        await ws.send_json(task.dict())
        tasks[task.id]["status"] = TaskStatus.dispatched

    return {"ok": True, "id": task.id}

@app.post("/task/{task_id}")
async def finish_task(task_id: str, result: TaskResult):
    if task_id not in tasks:
        raise HTTPException(404)
    tasks[task_id]["status"] = result.status
    tasks[task_id]["result"] = result
    return {"ok": True}

@app.get("/task/{task_id}")
async def get_task(task_id: str):
    if task_id not in tasks:
        raise HTTPException(404)
    return tasks[task_id]

@app.websocket("/events")
async def events(ws: WebSocket):
    await ws.accept()
    clients.add(ws)
    try:
        while True:
            await ws.receive_text()  # keep connection alive
    finally:
        clients.remove(ws)
