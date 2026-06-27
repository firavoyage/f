import { chat } from "action/chat";

log(await chat({ message: 'Hello World!', thread: 'thread.nonexisting' }))
