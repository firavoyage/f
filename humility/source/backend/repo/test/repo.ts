import { init, save, restore } from 'backend/repo/repo';
import { home, path, write } from 'lib/file';

// mkdir, rmrf
const cwd = home('temp')

await init(cwd)

await write(path(cwd, 'foo'), 'foo')

const checkpoint_1 = await save(cwd)

log(checkpoint_1)

await write(path(cwd, 'bar'), 'bar')

const checkpoint_2 = await save(cwd)

log(checkpoint_2)

await restore(cwd, checkpoint_1 as string)
