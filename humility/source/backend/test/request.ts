import { request } from 'backend/request';

log(await request({ message: 'hello world', model: 'google/gemma-4-26b-a4b-it', provider: 'openrouter' }))


