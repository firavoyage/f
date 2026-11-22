export type tool_call = {
  tool: string
  args: Record<string, any>
}

export const tool_instructions: Record<string, string> = {
  bash: `Use available tools when they help complete the request. Run shell commands with the bash tool instead of only describing commands that should be executed. To call it, output a fenced code block tagged tool containing one YAML mapping from bash to an object with a command field, for example:\n\n\`\`\`tool\nbash:\n  command: pwd\n\`\`\``,
}
