import { stringify } from "yaml";

export async function request({ context }: { context: any[] }) {
  return {
    choices: [{
      message: {
        content:
          `response: ${stringify(context).toLocaleLowerCase()}`
      }
    }]
  }
}