import { ask } from "./ask.js";
import { prompt } from "./prompt.js";
import { folder, progress } from "./state.js";
import { extract, apply } from "./tool.js";

export const run = async ({ task, root, turn }) => {
  console.log("\n--- run turn", turn, "---");

  const shape = folder(root);
  const prog = progress(root);

  const text = prompt({
    task,
    folder: shape,
    progress: prog,
    turn,
  });

  console.log("[prompt]\n", text);

  const { answer } = await ask({ what: text });
  console.log("[ask] answer:\n", answer);

  if (typeof answer !== "string") {
    console.log("[skip] answer not string");
    return;
  }

  const tools = extract(answer);
  console.log("[tool] extracted:", tools);

  await apply(root, tools);
  console.log("[tool] applied");
};