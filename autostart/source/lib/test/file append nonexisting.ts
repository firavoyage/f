import { append, cache } from 'lib/file';

// it works fine out of the box. no need to touch.
await append(cache('non existing'), 'some text')