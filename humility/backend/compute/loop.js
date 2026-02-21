import { log } from "../log.js";

/**
 * @param {object} params
 * @param {object} params.context
 * @param {object} params.verbs
 * @param {string} params.task
 * @param {object} params.config
 */
export const loop = async ({ context, verbs, task, config }) => {
  const { decide, rest, plan, ask, parse, act } = verbs;

  const state = { stop: false, history: [] };

  while (true) {
    const decision = await decide({ state });
    await log({ message: `Decision: ${decision}, stop: ${state.stop}` });

    if (decision === "rest") {
      await rest();
      await log({ message: `Resting...` });
      break;
    }

    const prompt = await plan({ context, config, task, state });
    await log({ message: `Prompt:\n${prompt}` });

    const ask_result = await ask({ prompt });
    if (ask_result.type !== "ok") {
      await log({ level: "error", message: `Ask failed: ${ask_result.error}` });
      continue;
    }

    const markdown = ask_result.value;
    await log({ message: `LLM response:\n${markdown}` });

    const tool_calls = await parse({ markdown });
    if (!Array.isArray(tool_calls)) {
      await log({ level: "warn", message: `Parse did not return an array` });
      continue;
    }

    await log({ message: `Parsed ${tool_calls.length} tool calls` });

    for (const call of tool_calls) {
      if (call.tool === "stop") {
        state.stop = true;
        await log({ message: `Stop encountered` });
        continue;
      }

      const result = await act({ ...call, context });
      await log({ message: `Acted on tool "${call.tool}", result: ${JSON.stringify(result, null, 2)}` });
      state.history.push({ call, result });
    }
  }

  await log({ message: `Loop ended` });
};