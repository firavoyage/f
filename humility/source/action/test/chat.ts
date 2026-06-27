import { chat } from "action/chat";

await chat({ message: 'Hello World!' })
await chat({ message: 'Hello World!', thread: 'thread.2' })
