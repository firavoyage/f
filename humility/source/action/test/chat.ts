import { chat } from "action/chat";

await chat({ message: 'Hello World!', model: 'google/gemma-4-26b-a4b-it', provider: 'openrouter' })
// await chat({ message: 'Hello World!', thread: 'thread.1' })
