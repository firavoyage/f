from pydantic import BaseModel
from typing import Any, Optional
from enum import Enum

class TaskStatus(str, Enum):
    queued = "queued"
    dispatched = "dispatched"
    completed = "completed"
    failed = "failed"

class Task(BaseModel):
    id: str
    script: str
    timeout: int = 30

class TaskResult(BaseModel):
    task_id: str
    status: TaskStatus
    output: Optional[Any] = None
    error: Optional[dict] = None
