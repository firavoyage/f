import express from "express";
import { ports } from "../../script/ports.js";
import { ask } from "../compute/ask.js";
import * as flow from "../store/flow.js";

const app = express();
app.use(express.json());

app.post("/ask", async (req, res) => {
  const { what, where } = req.body;
  const answer = await ask({ what, where });
  res.json(answer);
});

app.post("/flow/create", async (_, res) => {
  const id = await flow.create("chat");
  res.json({ id });
});

app.get("/flow/list", async (_, res) => {
  res.json(await flow.list());
});

app.post("/flow/pick/:id", async (req, res) => {
  await flow.pick(req.params.id);
  res.json({ ok: true });
});

app.get("/flow/view", async (_, res) => {
  res.json(await flow.view());
});

app.get("/flow/read/:id", async (req, res) => {
  await flow.step(req.params.id);
  res.json(await flow.read());
});

const start = ({ app, port }) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, "::", () => {
      resolve(server);
    });

    server.on("error", reject);
  });

start({ app, port: ports.backend }).catch((err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`port ${ports.backend} already in use`);
    process.exit(1);
  }

  throw err;
});
