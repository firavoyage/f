import express from "express";
import { ask } from "../compute/ask.js";
import * as flow from "../store/flow.js";

const app = express();
app.use(express.json());

app.post("/ask", async (req, res) => {
  const { what, where } = req.body;
  try {
    const answer = await ask({ what, where });
    res.json(answer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/flow/create", async (req, res) => {
  const id = await flow.create("chat");
  res.json({ id });
});

app.get("/flow/list", async (req, res) => {
  const list = await flow.list();
  res.json(list);
});

app.post("/flow/pick/:id", async (req, res) => {
  await flow.pick(req.params.id);
  res.json({ ok: true });
});

app.get("/flow/view", async (req, res) => {
  const data = await flow.view();
  res.json(data);
});

app.get("/flow/read/:id", async (req, res) => {
  const step = await flow.step(req.params.id);
  const data = await flow.read();
  res.json(data);
});

app.use(express.static("../../frontend"));
app.listen(3000, () => console.log("server running on http://localhost:3000"));
