import { execSync, spawn } from "node:child_process"

type run = Partial<{
  cwd: string
}>

export function run(command: string, options: run) {
  return execSync(command, options)
}

type  = 

export function spawn(command: string, options: spawn) {
  
}
