import { chat } from "action/chat";

log(await handle(() => chat({ message: 'Hello World!', thread: 'thread.nonexisting' })))

log(await chat({ message: 'Hello World!', thread: 'thread.nonexisting' }))
