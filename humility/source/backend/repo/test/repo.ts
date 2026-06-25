import { init, save, restore } from 'backend/repo/repo';
import { home, path, write } from 'lib/file';

// mkdir, rmrf
const cwd = path(home, 'temp')

await init({ cwd })

await write({ path: path(cwd, 'foo'), content: 'foo' })

const checkpoint_1 = await save({ cwd })

log(checkpoint_1)

await write({ path: path(cwd, 'bar'), content: 'bar' })

const checkpoint_2 = await save({ cwd })

log(checkpoint_2)

await restore({ hash: checkpoint_1 as string, cwd })
