import asyncio
import httpx
import uuid
from pydantic import BaseModel
from tenacity import retry, stop_after_attempt, wait_fixed

SERVER = "http://localhost:8000"

class TaskRequest(BaseModel):
    id: str
    script: str
    timeout: int = 30

@retry(stop=stop_after_attempt(3), wait=wait_fixed(1))
async def submit(task: TaskRequest):
    async with httpx.AsyncClient(trust_env=False) as c:
        await c.post(f"{SERVER}/task", json=task.model_dump())

async def wait_result(task_id: str):
    async with httpx.AsyncClient(trust_env=False) as c:
        while True:
            r = await c.get(f"{SERVER}/task/{task_id}")
            data = r.json()
            if data["status"] in ("completed", "failed"):
                return data
            await asyncio.sleep(0.5)

async def main():
    task = TaskRequest(
        id=str(uuid.uuid4()),
        script="return document.title;"
    )

    await submit(task)
    result = await wait_result(task.id)
    print(result)

if __name__ == "__main__":
    asyncio.run(main())
