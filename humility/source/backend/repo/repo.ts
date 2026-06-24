import { run } from 'lib/run';

type hash = string

export async function save({ cwd }: { cwd: string }): Promise<hash> {
  await run("git add . && git commit -m '.'", { cwd })
  const hash = await run("git rev-parse HEAD", { cwd })

  if(is_error(hash)){
    throw 'impossible'
  } 

  return hash.trim()
}

// make sure only restore cwd, or a few specific file touched. 
// you might not be willing to restore everything across the repo to a prev state
// esp in a monorepo
// alternatively, you can restore states wo git (you might not know the effect of a command)
export async function restore({ hash, cwd }: { hash: hash, cwd: string }) {
  await run(`git restore --source=${hash} --staged --worktree .`, { cwd })
}

export async function init({cwd}: { cwd: string }) {
  await run(`git init`, { cwd })
}
