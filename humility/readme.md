_humility_

<!-- an elegant ~~researcher~~ ~~human-AI interface~~ human-machine interface for a more civilized age -->

be wise.

be graceful.

be an agent.

---

wip.

---

see

- `../drafts`

---

install

```
pnpm install
```

<!-- todo: config api keys/login cookies, run -->

---

dev

```sh
# tsx with env
tsxe() {
  local current_dir="$PWD"
  local env_path=""

  while [[ "$current_dir" != "/" ]]; do
    if [[ -f "$current_dir/.env" ]]; then
      env_path="$current_dir/.env"
      break
    fi
    current_dir=$(dirname "$current_dir")
  done

  if [[ -n "$env_path" ]]; then
    tsx --env-file="$env_path" "$@"
  else
    tsx "$@"
  fi
}

# cd $dir && tsxe '$fileName'
```

---

inspired by

- chatgpt
- claude code
- opencode
- cursor
- manus

---

an elegant human-machine interface for a more civilized age

the one fira would like.

humility.
