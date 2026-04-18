localhost

run apps like `foo.localhost` and `bar.localhost`

install deps (e.g. ubuntu)

```sh
sudo apt install -y caddy jq yq
sudo caddy trust
```

install

```sh
chmod +x install.sh
./install.sh
```

restart

```
sudo systemctl restart localhost
```

debug

```
journalctl -u caddy -n 10 --no-pager
journalctl -u localhost -n 10 --no-pager
```

note

- command must be a binary. it could not be cd. wrap with `zsh -ic`.
- it's in sudo. point to the binary directly if it's in userspace.
