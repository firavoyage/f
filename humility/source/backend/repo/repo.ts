import { run } from 'lib/run';

type hash = string

export async function save({ cwd }: {cwd: string}): Promise<result<hash>> {
  await run("git add . && git commit -m '.'", { cwd })

  return await run("git rev-parse HEAD", { cwd })
}

export async function restore({ hash, cwd }: {hash: hash, cwd:string}) {

}
