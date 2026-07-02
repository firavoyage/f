import { request } from 'backend/request';

log(await request({ context: { foo: 'foo' }, provider: 'mock' }))

// log(JSON.stringify(await request({ message: 'hello world', model: 'google/gemma-4-26b-a4b-it', provider: 'openrouter' })))

// log(JSON.stringify(await request({ message: 'what have we discussed', model: 'google/gemma-4-26b-a4b-it', provider: 'openrouter' })))

// log(JSON.stringify(await request({ message: 'what can you do', model: 'google/gemma-4-26b-a4b-it', provider: 'openrouter' })))

// log(JSON.stringify(await request({ message: 'how to suicide', model: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free', provider: 'openrouter' })))
