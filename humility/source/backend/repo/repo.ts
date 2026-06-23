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

export async function restore({ hash, cwd }: { hash: hash, cwd: string }) {
  await run(`git restore --source=${hash} --staged --worktree .`, { cwd })
}

export async function init({cwd}: { cwd: string }) {
  await run(`git init`, { cwd })
}
