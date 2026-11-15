# . sh

```
 ~ % systemctl --user status journal.service

● journal.service - journal
     Loaded: loaded (/home/fira/.config/systemd/user/journal.service; enabled; preset: enabled)
     Active: active (running) since Mon 2026-10-26 02:09:03 CST; 2 weeks 6 days ago
   Main PID: 6016 (bash)
      Tasks: 47 (limit: 18186)
     Memory: 43.4M (peak: 196.3M swap: 64.1M swap peak: 67.2M)
        CPU: 51min 44.515s
     CGroup: /user.slice/user-1000.slice/user@1000.service/app.slice/journal.service
             ├─6016 bash /home/fira/Documents/f/journal/run.sh
             ├─6018 node /home/fira/.local/bin/global/5/.pnpm/tsx@4.21.0/node_modules/tsx/dist/cli.mjs journal.ts
             ├─6041 /usr/bin/node --require /home/fira/.local/bin/global/5/.pnpm/tsx@4.21.0/node_modules/tsx/dist/preflight.cjs --imp>
             ├─6063 /home/fira/.local/bin/global/5/.pnpm/@esbuild+linux-x64@0.27.7/node_modules/@esbuild/linux-x64/bin/esbuild --serv>
             └─6077 /home/fira/.local/bin/global/5/.pnpm/@esbuild+linux-x64@0.27.7/node_modules/@esbuild/linux-x64/bin/esbuild --serv>

Oct 26 02:09:03 Fira systemd[1735]: journal.service: Scheduled restart job, restart counter is at 1.
Oct 26 02:09:03 Fira systemd[1735]: Started journal.service - journal.

 ~ % systemctl --user disable --now journal.service

Removed "/home/fira/.config/systemd/user/default.target.wants/journal.service".
 ~ % systemctl --user status journal.service

○ journal.service - journal
     Loaded: loaded (/home/fira/.config/systemd/user/journal.service; disabled; preset: enabled)
     Active: inactive (dead)

Oct 26 02:08:53 Fira systemd[1735]: Started journal.service - journal.
Oct 26 02:08:53 Fira run.sh[1920]: /home/fira/Documents/f/journal/run.sh: line 3: tsx: command not found
Oct 26 02:08:53 Fira systemd[1735]: journal.service: Main process exited, code=exited, status=127/n/a
Oct 26 02:08:53 Fira systemd[1735]: journal.service: Failed with result 'exit-code'.
Oct 26 02:09:03 Fira systemd[1735]: journal.service: Scheduled restart job, restart counter is at 1.
Oct 26 02:09:03 Fira systemd[1735]: Started journal.service - journal.
Nov 15 19:34:43 Fira systemd[1735]: Stopping journal.service - journal...
Nov 15 19:34:43 Fira systemd[1735]: Stopped journal.service - journal.
Nov 15 19:34:43 Fira systemd[1735]: journal.service: Consumed 51min 44.773s CPU time, 196.3M memory peak, 67.2M memory swap peak.
```
