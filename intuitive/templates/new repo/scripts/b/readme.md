b

> bun with bunfig on project root

# install

```sh
# pnpm add -g --allow-build=bun bun
pnpm link -g
```

# features

- use bunfig on the nearest parent folder if exists
- strip bun version on error log

# usage

```sh
b script.ts 
# bun script.ts 
```

# examples

code runner extension settings

```json
"code-runner.executorMap": {
  "javascript": "cd $dir && b '$fileName'",
  "typescript": "cd $dir && b '$fileName'",
}
```
