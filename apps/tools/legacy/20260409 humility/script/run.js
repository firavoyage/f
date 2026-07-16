import { spawn } from "node:child_process";
import { ports } from "./ports.js";

const run = ({ cmd, args, cwd }) =>
  spawn(cmd, args, {
    cwd,
    stdio: "inherit",
    shell: true,
  });

run({
  cmd: "pnpm",
  args: ["dev"],
  cwd: "../frontend",
});

run({
  cmd: "node",
  args: ["--watch", "../backend/serve/serve.js"],
  cwd: ".",
});

setTimeout(() => {
  spawn("xdg-open", [`http://localhost:${ports.frontend}`]);
}, 1500);
