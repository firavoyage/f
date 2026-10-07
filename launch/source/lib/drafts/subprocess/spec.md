spec

- run command options
  - cwd
  - userspace: boolean | string
    - on: linux specific, get primary user and their default shell
    - off: run directly, depending on how the script itself is runned
    - you may give an explicit user, like it's multi user. yeah you could not necessarily figure out who "you" actually is when you are already root 
- spawn command options
  - cwd
  - userspace
  - finish {stdout, stderr, code}
  - stdout
  - stderr
