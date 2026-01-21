import sys
import os
import asyncio
import uuid
from multiprocessing import Process

import httpx
import uvicorn
from pydantic import BaseModel
from tenacity import retry, stop_after_attempt, wait_fixed

# Make sure Python can see the server folder
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from server.main import app  # server must have __init__.py

SERVER_URL = "http://127.0.0.1:8000"


# -------------------------------
# Task model for sending to server
# -------------------------------
class TaskRequest(BaseModel):
    id: str
    script: str
    timeout: int = 30


# -------------------------------
# Server process
# -------------------------------
class ServerProcess:
    def __init__(self):
        self.proc = None

    def start(self):
        if self.proc is None or not self.proc.is_alive():
            self.proc = Process(target=self.run_server, daemon=True)
            self.proc.start()
            print("Server process started.")

    @staticmethod
    def run_server():
        uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")


# -------------------------------
# HTTP helpers
# -------------------------------
@retry(stop=stop_after_attempt(3), wait=wait_fixed(1))
async def submit(task: TaskRequest):
    transport = httpx.AsyncHTTPTransport(retries=0)  # direct connection, no proxy
    async with httpx.AsyncClient(transport=transport) as client:
        resp = await client.post(f"{SERVER_URL}/task", json=task.model_dump())
        resp.raise_for_status()


async def wait_result(task_id: str):
    transport = httpx.AsyncHTTPTransport(retries=0)  # direct connection, no proxy
    async with httpx.AsyncClient(transport=transport) as client:
        while True:
            r = await client.get(f"{SERVER_URL}/task/{task_id}")
            r.raise_for_status()
            data = r.json()
            if data["status"] in ("completed", "failed"):
                return data
            await asyncio.sleep(0.5)


# -------------------------------
# Example usage
# -------------------------------
async def main():
    # Start the server only when needed
    server = ServerProcess()
    server.start()

    # Give a small moment for server to start (optional)
    await asyncio.sleep(0.5)

    # Create a sample task
    task = TaskRequest(id=str(uuid.uuid4()), script="return document.title;")

    await submit(task)
    result = await wait_result(task.id)
    print("Task result:", result)


if __name__ == "__main__":
    asyncio.run(main())
