launch

boot start and log programs

install

```
install.sh
```

status

```
sudo systemctl status launch
```

restart <!-- to apply changes -->

```
sudo systemctl restart launch
```

fs

```
~/.launch
  config
    apps.yaml
  data
    [app].log
```

structure of apps.yaml

```yaml
# - name: test
#   command: sleep 1 && echo 1 && sleep 1
#   options: 
#     userspace: true
# - name: test2
#   command: sleep 1; echo 1; sleep 1
#   # options: 
#     # userspace: true
# - name: test3
#   command: nonexisting
#   # options: 
#     # userspace: true
# - name: test4
#   command: nonexisting
#   options: 
#     userspace: true
- name: copy
  command: cd '/home/fira/Documents/f/apps/copy/build' && node-srv -l -i app.html
  options: 
    userspace: true
    port: true
- name: token
  command: cd '/home/fira/Documents/f/apps/token/' && node-srv -l -i token.html
  options: 
    userspace: true
    port: true
- name: pvz
  command: docker start pvz
  options: 
    userspace: true
    port: 9000
    port_flag: false
```

- userspace: sudo -u the primary user on the desktop
- port:
  - run on a generated port or a provided port
  - bind `[app].localhost` on caddyfile (requires caddy)
  - restart caddy
- port_flag:
  - string (default to `--port`): append a `--port [port]` flag
  - false: do not pass the flag (crucial for commands that reject unrecognized flags)

