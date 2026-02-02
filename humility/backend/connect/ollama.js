// ollama.js
import { spawn } from "node:child_process";

const url = "http://localhost:11434/api/generate";

const ensure = () =>
  spawn("ollama", ["serve"], {
    stdio: "ignore",
    detached: true,
  });

export const send = async (what) => {
  try {
    ensure(); // harmless if already running
  } catch {}

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      model: "tinyllama",
      prompt: what,
      stream: false,
    }),
  });

  if (!res.ok) {
    throw new Error("ollama request failed");
  }

  const data = await res.json();
  return data.response;
};
