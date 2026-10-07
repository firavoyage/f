purpose

oct 2026

07

some drafts from lib/purpose

- launch by systemd (config normally, like after network maybe well anyway)
- read a config file, parse yaml
- for each app
  - create a normal terminal, as if ctrl alt t
  - generate free port if needed, modify caddyfile then
  - run command as long running daemon 
  - constantly collect logs, like stdout/stderr or exit
  - save log for each, on fs maybe. just separate and incremental. avoid yaml overhead.
- modify caddyfile, restart caddy

---

why isnt it .data

---

xdg off.

on ux, you _would_ browse on fs to edit config.

the more specific first.

<!-- unless you are curating a list/taxonomy, it almost always better to put the more specific first. -->

---

structure the files

- data
  - {app}.log
- config
  - apps.yaml <!-- just a name -->
    - app[]
      - name
      - command
      - ~~disabled?~~ <!-- you may simply comment out some app -->
      - options
        - userspace = false
        - port: false | true (= '--port') | string (= the cli flag)
          - it will generate and pass a free port
- ~~cache~~

structure the cli

<!-- guess i can learn from pm2 -->

do i have to track the pids? maybe i would simply iterate and run everything.

seems it should be able to stop an app. but maybe i would just never gonna use it.

- launch: read the latest config and start all apps
- ~~reload: alias to launch~~
- ~~start app: start a specific app~~
- ~~enable/disable app~~
- no help or version. kiss.

it just has too many linux specific workarounds.

and since i do not track pid, i guess it's better to simply install it via systemd.

and to reload, systemctl reload launch (or -u)

everything will be declared via _one_ config file rather than some imperative commands and service specific files.

thus i do not need chalk and commander. neither will i implement a custom one. (yeah i will, one day soon. i will have a declarative commander and, well i may use chalk instead of tput, but i will almost write help directly.)


