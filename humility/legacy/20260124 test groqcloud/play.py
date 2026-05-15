import os
import time
import json
import re
import requests
from datetime import datetime

# -----------------------------
# Fixed absolute paths
# -----------------------------
BASE_RUN_DIR = "/home/fira/Documents/f/humility/runs/chemistry"
os.makedirs(BASE_RUN_DIR, exist_ok=True)

# -----------------------------
# Config
# -----------------------------
API_KEY = os.getenv("GROQ_API_KEY")
BASE_URL = "https://api.groq.com/openai/v1/chat/completions"
MODEL = "llama-3.1-8b-instant"

MAX_STEPS = 200
MAX_RATE_LIMIT_SLEEP = 60  # seconds

USER_GOAL = "Create a complete high school chemistry textbook in the style of Art of Problem Solving."

# -----------------------------
# Helpers
# -----------------------------
def save(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
        f.flush()
        os.fsync(f.fileno())


def humanize(text):
    """Make JSON-ish text readable."""
    if not text:
        return ""
    return text.replace("\\n", "\n")


def parse_retry_after(error_text):
    """
    Extract 'Please try again in Xs' if present.
    """
    match = re.search(r"try again in ([0-9.]+)s", error_text)
    if match:
        return float(match.group(1))
    return None


def call_llm_with_retry(messages, temperature, step, role):
    payload = {
        "model": MODEL,
        "messages": messages,
        "temperature": temperature,
    }

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }

    while True:
        response = requests.post(
            BASE_URL,
            headers=headers,
            json=payload,
            timeout=60,
        )

        if response.status_code == 200:
            return response.json()

        # Handle rate limit
        if response.status_code == 429:
            retry_after = parse_retry_after(response.text)

            save(
                os.path.join(BASE_RUN_DIR, f"step_{step:03d}_{role}_rate_limit.md"),
                (
                    "# Rate Limit Hit\n\n"
                    "## Raw Response\n\n"
                    f"{response.text}\n\n"
                    "## Human View\n\n"
                    f"{humanize(response.text)}\n"
                ),
            )

            if retry_after and retry_after <= MAX_RATE_LIMIT_SLEEP:
                print(f"Rate limited. Sleeping {retry_after:.2f}s...")
                time.sleep(retry_after)
                continue

        # Other errors → stop
        save(
            os.path.join(BASE_RUN_DIR, f"step_{step:03d}_{role}_error.md"),
            (
                "# Error\n\n"
                f"Status: {response.status_code}\n\n"
                "## Raw Response\n\n"
                f"{response.text}\n\n"
                "## Human View\n\n"
                f"{humanize(response.text)}\n"
            ),
        )
        raise RuntimeError("Unrecoverable error")


# -----------------------------
# Resume state
# -----------------------------
def get_last_step():
    steps = []
    for name in os.listdir(BASE_RUN_DIR):
        m = re.match(r"step_(\d+)_planner_output.md", name)
        if m:
            steps.append(int(m.group(1)))
    return max(steps) if steps else 0


def load_written_sections():
    sections = []
    for name in sorted(os.listdir(BASE_RUN_DIR)):
        if name.endswith("_planner_output.md"):
            with open(os.path.join(BASE_RUN_DIR, name), "r", encoding="utf-8") as f:
                sections.append(f.read().strip())
    return sections


# -----------------------------
# Initialize
# -----------------------------
if not os.path.exists(os.path.join(BASE_RUN_DIR, "goal.md")):
    save(
        os.path.join(BASE_RUN_DIR, "goal.md"),
        f"# Goal\n\n{USER_GOAL}\n",
    )

start_step = get_last_step() + 1
written_sections = load_written_sections()

print(f"Resuming from step {start_step}")

# -----------------------------
# Main Loop
# -----------------------------
for step in range(start_step, MAX_STEPS + 1):
    print(f"\n--- Step {step} ---")

    # -------- Planner --------
    planner_messages = [
        {
            "role": "system",
            "content": (
                "You are a calm, methodical planner.\n"
                "Decide the NEXT section of a high school chemistry textbook.\n\n"
                "Rules:\n"
                "- ONE section only\n"
                "- If the textbook is complete, reply exactly: STOP\n"
            ),
        },
        {
            "role": "user",
            "content": (
                f"Goal:\n{USER_GOAL}\n\n"
                f"Sections already written:\n{written_sections}\n"
            ),
        },
    ]

    save(
        os.path.join(BASE_RUN_DIR, f"step_{step:03d}_planner_prompt.md"),
        humanize(json.dumps(planner_messages, indent=2)),
    )

    planner_json = call_llm_with_retry(
        planner_messages, temperature=0.2, step=step, role="planner"
    )

    plan = planner_json["choices"][0]["message"]["content"]

    save(
        os.path.join(BASE_RUN_DIR, f"step_{step:03d}_planner_output.md"),
        f"# Planner Output\n\n{plan}\n",
    )

    if plan.strip() == "STOP":
        print("Planner says STOP.")
        break

    written_sections.append(plan)

    # -------- Writer --------
    writer_messages = [
        {
            "role": "system",
            "content": (
                "You are writing a high school chemistry textbook "
                "in the style of Art of Problem Solving.\n"
                "Be clear, rigorous, and friendly.\n"
                "Use markdown."
            ),
        },
        {
            "role": "user",
            "content": f"Write the following section:\n\n{plan}",
        },
    ]

    save(
        os.path.join(BASE_RUN_DIR, f"step_{step:03d}_writer_prompt.md"),
        humanize(json.dumps(writer_messages, indent=2)),
    )

    writer_json = call_llm_with_retry(
        writer_messages, temperature=0.4, step=step, role="writer"
    )

    section = writer_json["choices"][0]["message"]["content"]

    save(
        os.path.join(BASE_RUN_DIR, f"step_{step:03d}_section.md"),
        section,
    )

print("\nDone. Book saved incrementally.")
print(f"Location: {BASE_RUN_DIR}")
