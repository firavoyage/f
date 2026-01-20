import asyncio
from fastapi import FastAPI, WebSocket, HTTPException
from models import Task, TaskResult, TaskStatus
from typing import Dict

app = FastAPI()
tasks: Dict[str, dict] = {}
clients = set()

@app.post("/task")
async def submit_task(task: Task):
    print("TASK RECEIVED:", task.id)
    if task.id in tasks:
        raise HTTPException(400, "Task exists")

    tasks[task.id] = {
        "task": task,
        "status": TaskStatus.queued,
        "result": None
    }

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
    print("EXTENSION CONNECTED")
    clients.add(ws)
    try:
        while True:
            await ws.receive_text()
    finally:
        clients.remove(ws)
