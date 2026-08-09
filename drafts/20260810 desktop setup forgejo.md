# .

```
 ~ % sudo systemctl disable --now forgejo
Removed "/etc/systemd/system/multi-user.target.wants/forgejo.service".
 ~ % sudo systemctl enable --now forgejo
Created symlink /etc/systemd/system/multi-user.target.wants/forgejo.service → /usr/lib/systemd/system/forgejo.service.
```

```
● forgejo.service - Forgejo (Beyond coding. We forge.)
     Loaded: loaded (/usr/lib/systemd/system/forgejo.service; enabled; preset: enabled)
     Active: active (running) since Mon 2026-08-10 02:20:01 CST; 3s ago
   Main PID: 806647 (forgejo)
      Tasks: 17 (limit: 18169)
     Memory: 154.7M (peak: 158.4M)
        CPU: 399ms
     CGroup: /system.slice/forgejo.service
             └─806647 /usr/bin/forgejo web --config /etc/forgejo/app.ini

Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:112:showWebStartupMessage() [I] Forgejo version: 11.0.14+gitea-1>
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:113:showWebStartupMessage() [I] * RunMode: prod
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:114:showWebStartupMessage() [I] * AppPath: /usr/bin/forgejo
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:115:showWebStartupMessage() [I] * WorkPath: /var/lib/forgejo
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:116:showWebStartupMessage() [I] * CustomPath: /var/lib/forgejo/c>
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:117:showWebStartupMessage() [I] * ConfigFile: /etc/forgejo/app.i>
Aug 10 02:20:01 Fira forgejo[806647]: 2026/08/10 02:20:01 cmd/web.go:118:showWebStartupMessage() [I] Prepare to run install page
Aug 10 02:20:01 Fira forgejo[806647]: Listen: http://0.0.0.0:3000
Aug 10 02:20:01 Fira forgejo[806647]: AppURL(ROOT_URL): http://localhost:3000/
Aug 10 02:20:01 Fira forgejo[806647]: Starting new Web server: tcp:0.0.0.0:3000 on PID: 806647
~
~
~
~
~
~
~
~
~
~
~
lines 1-20/20 (END)
```

```
 ~ % forgejo --help
NAME:
   forgejo - Beyond coding. We forge.

USAGE:
   forgejo [global options] command [command options]

VERSION:
   11.0.14+gitea-1.22.0 (release name 11.0.14+gitea-1.22.0) built with GNU Make 4.3, go1.25.10 : sqlite, sqlite_unlock_notify

DESCRIPTION:
   By default, forgejo will start serving using the web-server with no argument, which can alternatively be run by running the subcommand "web".

COMMANDS:
   help, h          Shows a list of commands or help for one command
   web              Start the Forgejo web server
   serv             (internal) Should only be called by SSH shell
   hook             (internal) Should only be called by Git
   keys             (internal) Should only be called by SSH server
   dump             Dump Forgejo files and database
   admin            Perform common administrative operations
   migrate          Migrate the database
   doctor           Diagnose and optionally fix problems, convert or re-create database tables
   manager          Manage the running forgejo process
   embedded         Extract embedded resources
   migrate-storage  Migrate the storage
   dump-repo        Dump the repository from git/github/gitea/gitlab
   restore-repo     Restore the repository from disk
   actions          Manage Forgejo Actions
   cert             Generate self-signed certificate
   generate         Generate Gitea's secrets/keys/tokens
   docs             Output CLI documentation
   forgejo-cli      Forgejo CLI

GLOBAL OPTIONS:
   --version, -v                  print the version
   --help, -h                     show help
   --custom-path value, -C value  Set custom path (defaults to '{WorkPath}/custom')
   --config value, -c value       Set custom config file (defaults to '{WorkPath}/custom/conf/app.ini') (default: "/etc/forgejo/app.ini")
   --work-path value, -w value    Set Forgejo's working path (defaults to the directory of the Forgejo binary)
 ~ % forgejo
2026/08/10 02:20:13 cmd/web.go:253:runWeb() [I] Starting Forgejo on PID: 807205
2026/08/10 02:20:13 cmd/web.go:112:showWebStartupMessage() [I] Forgejo version: 11.0.14+gitea-1.22.0 built with GNU Make 4.3, go1.25.10 : sqlite, sqlite_unlock_notify
2026/08/10 02:20:13 cmd/web.go:113:showWebStartupMessage() [I] * RunMode: prod
2026/08/10 02:20:13 cmd/web.go:114:showWebStartupMessage() [I] * AppPath: /usr/bin/forgejo
2026/08/10 02:20:13 cmd/web.go:115:showWebStartupMessage() [I] * WorkPath: /var/lib/forgejo
2026/08/10 02:20:13 cmd/web.go:116:showWebStartupMessage() [I] * CustomPath: /var/lib/forgejo/custom
2026/08/10 02:20:13 cmd/web.go:117:showWebStartupMessage() [I] * ConfigFile: /etc/forgejo/app.ini
2026/08/10 02:20:13 cmd/web.go:118:showWebStartupMessage() [I] Prepare to run install page
2026/08/10 02:20:13 ...ation/translation.go:80:func1() [F] Failed to list locale files: open /var/lib/forgejo/custom/options/locale: permission denied
```

well, the help text of forgejo is wild.

# . config

```yaml
db: sqlite
# repo root: /var/lib/forgejo/data/forgejo-repositories # default
admin:
  user: f
  email: f@fira.local # it's required. i dont have to have an email. f is for fira. im fira. that's it. it doesnt make any sense if it would be unused. but if it's used, i guess it would be fine to appear like that. (instead of a@a.a or foo@bar.baz or anonymous@example.com). i guess i may use {gpg}@gpg.local. but i dont have to have a public key. im myself. im the definitive source. yet i have to format like an email. but if i could i d like to write as "f". (yeah, my email is f. or undefined. or any.)
  pw: f
```

the email should be

- definitive and simple (no one could compete w me. f is for fira.)
- non anonymous (it should be me, if you could not know it's me from the email, then im everyone in the world or im the one of all emails.)
- non crypto (i do not prove myself. im not to be judged.)

maybe `f@fira.local`. 

i would consider `f@f.local` a good choice. but i feel fira is more easily pronounced.

since i do not want to use `a@a.a` (shortest, simplest, first), i will not just blindly reduce the number of letters for `fira` either.

---

wait. password length must > 8?!

you should tell me before submission. well anyway forgejo is a geek tool.

```yaml
db: sqlite
# repo root: /var/lib/forgejo/data/forgejo-repositories # default
admin:
  user: f
  email: f@fira.local
  pw: firafira
```

# . setup

```sh

```
