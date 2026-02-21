import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * @param {object} params
 * @param {object} params.context
 * @param {object} params.config
 * @param {string} params.task
 * @param {object} params.state
 */
export const plan = async ({ context, config, task, state }) => {
  const entries = await readdir(context.working_directory);
  const tree = entries.join("\n");

  const progress_path = join(context.working_directory, "progress.md");
  const progress = await readFile(progress_path, "utf8").catch(() => "");

  const tools_list = Object.values(config.tools).map(t => ({
    name: t.name,
    params: t.docs.params,
    description: t.docs.description
  }));

  const prompt = `
Task: ${task}

Working directory tree:
${tree}

Current progress (overwrite progress.md each iteration):
${progress}

History of previous tool calls:
${JSON.stringify(state.history || [], null, 2)}

Available tools:
${JSON.stringify(tools_list, null, 2)}

Instructions:
- Respond ONLY in YAML code blocks.
- Each entry must have 'tool' and 'params'.
- Overwrite progress.md completely with each iteration.
- Include testing and self-correction steps if code fails.
- If you use a tool, include its result in history.
- Example YAML response:

\`\`\`yaml
- tool: write
  params:
    name: "hello.cpp"
    content: |
      #include <iostream>
      int main() { std::cout << "Hello"; return 0; }
- tool: shell
  params:
    command: "g++ hello.cpp -o hello && ./hello"
- tool: stop
\`\`\`
`;

  return prompt;
};