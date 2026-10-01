<!-- "20% battery rem" -->

# .

```
top - 19:48:17 up 15 days, 43 min,  1 user,  load average: 3.01, 3.01, 3.19
Tasks: 510 total,   2 running, 504 sleeping,   0 stopped,   4 zombie
%Cpu(s): 14.3 us,  0.7 sy,  0.0 ni, 61.1 id, 23.8 wa,  0.0 hi,  0.1 si,  0.0 st
MiB Mem :  15336.0 total,   1521.5 free,   9839.5 used,   4349.3 buff/cache
MiB Swap:   8448.0 total,   3451.8 free,   4996.2 used.   5496.5 avail Mem

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1660 forgejo   20   0 2936100 120240  12096 S 162.5   0.8     12,30 forgejo
1543374 fira      20   0 2828060 173732 106652 S   4.0   1.1   0:01.88 ghostty
1399927 fira      20   0 6257692 300320 113284 S   3.3   1.9  12:48.48 gnome-shell
1387943 fira      20   0 1229116 101680  65472 S   3.0   0.6  11:50.84 Xorg
    251 root     -51   0       0      0      0 S   0.7   0.0  19:34.99 irq/56-MSFT0001:00
1388457 fira      20   0   32.9g 389168 234252 S   0.7   2.5  13:30.82 chrome
1390427 fira      20   0 1393.7g  52200  39168 S   0.7   0.3   1:08.76 code
     53 root      rt   0       0      0      0 S   0.3   0.0   0:18.98 migration/1
    438 root      19  -1  109492  54428  52860 S   0.3   0.3   5:19.40 systemd-journal
   1255 root      20   0  322320   7744   6808 S   0.3   0.0   0:41.63 accounts-daemon
   7312 root      20   0  783784   2428    840 S   0.3   0.0  15:10.85 python
   7634 root      20   0 9864956  51760  16564 S   0.3   0.3   9:46.35 MainThread
   8358 fira      20   0 1437340  12280   8812 S   0.3   0.1   3:46.47 codex-update-ma
1388509 fira      20   0 1409.9g 147540  90984 S   0.3   0.9   2:39.36 code
1389095 root      20   0 1381164  46164  13628 S   0.3   0.3   7:14.14 verge-mihomo
1389451 fira      20   0 1132.1g 133124  94012 S   0.3   0.8   5:06.22 chrome
1401492 fira      20   0 1391.9g 233828  36148 S   0.3   1.5   5:31.13 code
1524472 root      20   0       0      0      0 D   0.3   0.0   0:05.70 kworker/u48:0+events_unbound
1528241 root      20   0       0      0      0 I   0.3   0.0   0:04.55 kworker/u48:3-gfx
1542081 root      20   0       0      0      0 I   0.3   0.0   0:00.42 kworker/u48:2-ext4-rsv-conversion
1543240 fira      20   0 3070636  51316  36776 S   0.3   0.3   0:00.36 gjs
1543429 fira      20   0   24632   6804   4496 R   0.3   0.0   0:01.07 top
      1 root      20   0   24516  13056   8076 S   0.0   0.1   2:18.83 systemd
      2 root      20   0       0      0      0 S   0.0   0.0   0:01.25 kthreadd
```

```
 ~ % sudo journalctl -u forgejo -n 100 -f

Sep 16 19:04:22 Fira systemd[1]: Started forgejo.service - Forgejo (Beyond coding. We forge.).
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:253:runWeb() [I] Starting Forgejo on PID: 1660
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:112:showWebStartupMessage() [I] Forgejo version: 11.0.14+gitea-1.22.0 built with GNU Make 4.3, go1.25.10 : sqlite, sqlite_unlock_notify
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:113:showWebStartupMessage() [I] * RunMode: prod
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:114:showWebStartupMessage() [I] * AppPath: /usr/bin/forgejo
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:115:showWebStartupMessage() [I] * WorkPath: /var/lib/forgejo
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:116:showWebStartupMessage() [I] * CustomPath: /var/lib/forgejo/custom
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:117:showWebStartupMessage() [I] * ConfigFile: /etc/forgejo/app.ini
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 cmd/web.go:118:showWebStartupMessage() [I] Prepare to run web server
Sep 16 19:04:22 Fira forgejo[1660]: 2026/09/16 19:04:22 routers/init.go:114:InitWebInstalled() [I] Git version: 2.43.0, Wire Protocol Version 2 Enabled (home: /var/lib/forgejo/data/home)
Sep 16 19:04:23 Fira forgejo[1660]: Initialising Attachment storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/attachments
Sep 16 19:04:23 Fira forgejo[1660]: Initialising Avatar storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/avatars
Sep 16 19:04:23 Fira forgejo[1660]: Initialising Repository Avatar storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/repo-avatars
Sep 16 19:04:23 Fira forgejo[1660]: Initialising LFS storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/lfs
Sep 16 19:04:23 Fira forgejo[1660]: Initialising Repository Archive storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/repo-archive
Sep 16 19:04:23 Fira forgejo[1660]: Initialising Packages storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/packages
Sep 16 19:04:23 Fira forgejo[1660]: Initialising Actions storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/actions_log
Sep 16 19:04:23 Fira forgejo[1660]: Initialising ActionsArtifacts storage with type: local
Sep 16 19:04:23 Fira forgejo[1660]: Creating new Local Storage at /var/lib/forgejo/data/actions_artifacts
Sep 16 19:04:23 Fira forgejo[1660]: SQLite3 support is enabled
Sep 16 19:04:23 Fira forgejo[1660]: Beginning ORM engine initialization.
Sep 16 19:04:23 Fira forgejo[1660]: ORM engine initialization attempt #1/10...
Sep 16 19:04:23 Fira forgejo[1660]: PING DATABASE sqlite3
Sep 16 19:04:23 Fira forgejo[1660]: ORM engine initialization successful!
Sep 16 19:04:23 Fira forgejo[1660]: PID 1660: Initializing Issue Indexer: bleve
Sep 16 19:04:23 Fira forgejo[1660]: Populating the repo stats indexer with existing repositories
Sep 16 19:04:23 Fira forgejo[1660]: Done (re)populating the repo stats indexer with existing repositories
Sep 16 19:04:23 Fira forgejo[1660]: Issue Indexer Initialization took 3.555618ms
Sep 16 19:04:23 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 16 19:04:23 Fira forgejo[1660]: Nothing to cleanup
Sep 16 19:04:23 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 16 19:04:23 Fira forgejo[1660]: Listen: http://0.0.0.0:3000
Sep 16 19:04:23 Fira forgejo[1660]: AppURL(ROOT_URL): http://localhost:3000/
Sep 16 19:04:23 Fira forgejo[1660]: LFS server enabled
Sep 16 19:04:23 Fira forgejo[1660]: Starting new Web server: tcp:0.0.0.0:3000 on PID: 1660
Sep 17 02:11:13 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 17 02:11:13 Fira forgejo[1660]: Nothing to cleanup
Sep 17 02:11:13 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 17 02:11:13 Fira forgejo[1660]: Found 0 expired artifacts
Sep 17 02:11:13 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 17 02:11:13 Fira forgejo[1660]: Removed 0 logs
Sep 19 05:50:45 Fira forgejo[1660]: Found 0 expired artifacts
Sep 19 05:50:45 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 19 05:50:45 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 19 05:50:45 Fira forgejo[1660]: Nothing to cleanup
Sep 19 05:50:45 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 19 05:50:45 Fira forgejo[1660]: Removed 0 logs
Sep 22 12:47:45 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 22 12:47:45 Fira forgejo[1660]: Found 0 expired artifacts
Sep 22 12:47:45 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 22 12:47:45 Fira forgejo[1660]: Removed 0 logs
Sep 22 12:47:45 Fira forgejo[1660]: Nothing to cleanup
Sep 22 12:47:45 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 23 19:23:29 Fira forgejo[1660]: Found 0 expired artifacts
Sep 23 19:23:29 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 23 19:23:29 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 23 19:23:29 Fira forgejo[1660]: Removed 0 logs
Sep 23 19:23:29 Fira forgejo[1660]: Nothing to cleanup
Sep 23 19:23:29 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 25 16:13:22 Fira forgejo[1660]: Found 0 expired artifacts
Sep 25 16:13:22 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 25 16:13:22 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 25 16:13:22 Fira forgejo[1660]: Removed 0 logs
Sep 25 16:13:22 Fira forgejo[1660]: Nothing to cleanup
Sep 25 16:13:22 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 26 20:01:40 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 26 20:01:40 Fira forgejo[1660]: Found 0 expired artifacts
Sep 26 20:01:40 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 26 20:01:40 Fira forgejo[1660]: Nothing to cleanup
Sep 26 20:01:40 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 26 20:01:40 Fira forgejo[1660]: Removed 0 logs
Sep 28 10:40:07 Fira forgejo[1660]: Found 0 expired artifacts
Sep 28 10:40:07 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 28 10:40:07 Fira forgejo[1660]: Removed 0 logs
Sep 28 10:40:07 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 28 10:40:07 Fira forgejo[1660]: Nothing to cleanup
Sep 28 10:40:07 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 29 23:05:04 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 29 23:05:04 Fira forgejo[1660]: Found 0 expired artifacts
Sep 29 23:05:04 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 29 23:05:04 Fira forgejo[1660]: Removed 0 logs
Sep 29 23:05:04 Fira forgejo[1660]: Nothing to cleanup
Sep 29 23:05:04 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 30 12:07:02 Fira forgejo[1660]: Found 0 expired artifacts
Sep 30 12:07:02 Fira forgejo[1660]: Start to cleanup dangling images with a sha256:* version
Sep 30 12:07:02 Fira forgejo[1660]: Nothing to cleanup
Sep 30 12:07:02 Fira forgejo[1660]: Finished to cleanup dangling images with a sha256:* version
Sep 30 12:07:02 Fira forgejo[1660]: Found 0 artifacts pending deletion
Sep 30 12:07:02 Fira forgejo[1660]: Removed 0 logs
Oct 01 19:56:49 Fira systemd[1]: forgejo.service: Main process exited, code=killed, status=9/KILL
Oct 01 19:56:49 Fira systemd[1]: forgejo.service: Failed with result 'signal'.
Oct 01 19:56:49 Fira systemd[1]: forgejo.service: Consumed 13h 1min 17.838s CPU time, 4.0G memory peak, 31.0M memory swap peak.
Oct 01 19:56:51 Fira systemd[1]: forgejo.service: Scheduled restart job, restart counter is at 1.
Oct 01 19:56:51 Fira systemd[1]: Started forgejo.service - Forgejo (Beyond coding. We forge.).
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:253:runWeb() [I] Starting Forgejo on PID: 1546560
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:112:showWebStartupMessage() [I] Forgejo version: 11.0.14+gitea-1.22.0 built with GNU Make 4.3, go1.25.10 : sqlite, sqlite_unlock_notify
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:113:showWebStartupMessage() [I] * RunMode: prod
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:114:showWebStartupMessage() [I] * AppPath: /usr/bin/forgejo
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:115:showWebStartupMessage() [I] * WorkPath: /var/lib/forgejo
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:116:showWebStartupMessage() [I] * CustomPath: /var/lib/forgejo/custom
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:117:showWebStartupMessage() [I] * ConfigFile: /etc/forgejo/app.ini
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 cmd/web.go:118:showWebStartupMessage() [I] Prepare to run web server
Oct 01 19:56:51 Fira forgejo[1546560]: 2026/10/01 19:56:51 routers/init.go:114:InitWebInstalled() [I] Git version: 2.43.0, Wire Protocol Version 2 Enabled (home: /var/lib/forgejo/data/home)
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising Attachment storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/attachments
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising Avatar storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/avatars
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising Repository Avatar storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/repo-avatars
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising LFS storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/lfs
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising Repository Archive storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/repo-archive
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising Packages storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/packages
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising Actions storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/actions_log
Oct 01 19:56:51 Fira forgejo[1546560]: Initialising ActionsArtifacts storage with type: local
Oct 01 19:56:51 Fira forgejo[1546560]: Creating new Local Storage at /var/lib/forgejo/data/actions_artifacts
Oct 01 19:56:51 Fira forgejo[1546560]: SQLite3 support is enabled
Oct 01 19:56:51 Fira forgejo[1546560]: Beginning ORM engine initialization.
Oct 01 19:56:51 Fira forgejo[1546560]: ORM engine initialization attempt #1/10...
Oct 01 19:56:51 Fira forgejo[1546560]: PING DATABASE sqlite3
Oct 01 19:56:52 Fira forgejo[1546560]: ORM engine initialization successful!
Oct 01 19:56:52 Fira forgejo[1546560]: PID 1546560: Initializing Issue Indexer: bleve
Oct 01 19:56:52 Fira forgejo[1546560]: Populating the repo stats indexer with existing repositories
Oct 01 19:56:52 Fira forgejo[1546560]: Done (re)populating the repo stats indexer with existing repositories
Oct 01 19:56:52 Fira forgejo[1546560]: Issue Indexer Initialization took 2.298451ms
Oct 01 19:56:52 Fira forgejo[1546560]: Start to cleanup dangling images with a sha256:* version
Oct 01 19:56:52 Fira forgejo[1546560]: Nothing to cleanup
Oct 01 19:56:52 Fira forgejo[1546560]: Finished to cleanup dangling images with a sha256:* version
Oct 01 19:56:52 Fira forgejo[1546560]: Listen: http://0.0.0.0:3000
Oct 01 19:56:52 Fira forgejo[1546560]: AppURL(ROOT_URL): http://localhost:3000/
Oct 01 19:56:52 Fira forgejo[1546560]: LFS server enabled
Oct 01 19:56:52 Fira forgejo[1546560]: Starting new Web server: tcp:0.0.0.0:3000 on PID: 1546560
Oct 01 19:57:31 Fira forgejo[1546560]: PID 1546560. Received SIGTERM. Shutting down...
Oct 01 19:57:31 Fira forgejo[1546560]: HTTP Listener: 0.0.0.0:3000 Closed
Oct 01 19:57:31 Fira forgejo[1546560]: Setting Hammer condition
Oct 01 19:57:31 Fira forgejo[1546560]: PID: 1546560 Listener ([::]:3000) closed.
Oct 01 19:57:31 Fira systemd[1]: Stopping forgejo.service - Forgejo (Beyond coding. We forge.)...
Oct 01 19:57:32 Fira forgejo[1546560]: Terminating
Oct 01 19:57:32 Fira forgejo[1546560]: PID: 1546560 Issue Indexer closed
Oct 01 19:57:32 Fira forgejo[1546560]: PID: 1546560. Background context for manager closed - context canceled - Shutting down...
Oct 01 19:57:32 Fira forgejo[1546560]: PID: 1546560 Forgejo Web Finished
Oct 01 19:57:32 Fira systemd[1]: forgejo.service: Deactivated successfully.
Oct 01 19:57:32 Fira systemd[1]: Stopped forgejo.service - Forgejo (Beyond coding. We forge.).
```

```
 ~ % sudo -u forgejo forgejo manager show-tasks

NAME:
   forgejo manager - Manage the running forgejo process

USAGE:
   forgejo manager [command options]

DESCRIPTION:
   This is a command for managing the running forgejo process

COMMANDS:
   shutdown          Gracefully shutdown the running process
   restart           Gracefully restart the running process - (not implemented for windows servers)
   reload-templates  Reload template files in the running process
   flush-queues      Flush queues in the running process
   logging           Adjust logging commands
   processes         Display running processes within the current process
   help, h           Shows a list of commands or help for one command

OPTIONS:
   --help, -h                     show help
   --custom-path value, -C value  Set custom path (defaults to '{WorkPath}/custom')
   --config value, -c value       Set custom config file (defaults to '{WorkPath}/custom/conf/app.ini') (default: "/etc/forgejo/app.ini")
   --work-path value, -w value    Set Forgejo's working path (defaults to the directory of the Forgejo binary)

DEFAULT CONFIGURATION:
   AppPath:    /usr/bin/forgejo
   WorkPath:   /var/lib/forgejo
   CustomPath: /var/lib/forgejo/custom
   ConfigFile: /etc/forgejo/app.ini
```

```
 ~ % sudo apt install -y iotop
sudo iotop -o

Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages were automatically installed and are no longer required:
  distro-info gir1.2-javascriptcoregtk-4.1 gir1.2-snapd-2 gir1.2-webkit2-4.1 libeditorconfig0 libwebpdecoder3 update-notifier-common
Use 'sudo apt autoremove' to remove them.
The following NEW packages will be installed:
  iotop
0 upgraded, 1 newly installed, 0 to remove and 15 not upgraded.
Need to get 24.4 kB of archives.
After this operation, 111 kB of additional disk space will be used.
Get:1 https://mirrors.tuna.tsinghua.edu.cn/ubuntu noble/main amd64 iotop amd64 0.6-42-ga14256a-0.2build1 [24.4 kB]
Fetched 24.4 kB in 0s (61.4 kB/s)
Selecting previously unselected package iotop.
(Reading database ... 427593 files and directories currently installed.)
Preparing to unpack .../iotop_0.6-42-ga14256a-0.2build1_amd64.deb ...
Unpacking iotop (0.6-42-ga14256a-0.2build1) ...
Setting up iotop (0.6-42-ga14256a-0.2build1) ...
update-alternatives: using /usr/sbin/iotop-py to provide /usr/sbin/iotop (iotop) in auto mode
Processing triggers for man-db (2.12.0-4build2) ...
 ~ % sudo iotop -o
```

```
 ~ % sudo lsof -p 1660

lsof: WARNING: can't stat() fuse.revokefs-fuse file system /var/tmp/flatpak-cache-QXI9V3/org.freedesktop.Platform.GL.default-X1YEW3
      Output information may be incomplete.
lsof: WARNING: can't stat() fuse.revokefs-fuse file system /var/tmp/flatpak-cache-QXI9V3/org.freedesktop.Platform.GL.default-AGV6V3
      Output information may be incomplete.
lsof: WARNING: can't stat() fuse.portal file system /run/user/1000/doc
      Output information may be incomplete.
lsof: WARNING: can't stat() fuse.gvfsd-fuse file system /run/user/1000/gvfs
      Output information may be incomplete.
COMMAND  PID    USER   FD      TYPE             DEVICE SIZE/OFF    NODE NAME
forgejo 1660 forgejo  cwd       DIR              259,2     4096 4210884 /var/lib/forgejo
forgejo 1660 forgejo  rtd       DIR              259,2     4096       2 /
forgejo 1660 forgejo  txt       REG              259,2 95256680 1312729 /usr/bin/forgejo
forgejo 1660 forgejo  mem-W     REG              259,2    65536 4722274 /var/lib/forgejo/data/indexers/issues.bleve/store/root.bolt
forgejo 1660 forgejo  mem       REG              259,2  2125328 1326273 /usr/lib/x86_64-linux-gnu/libc.so.6
forgejo 1660 forgejo  mem       REG              259,2    14408 1326778 /usr/lib/x86_64-linux-gnu/libpthread.so.0
forgejo 1660 forgejo  mem       REG              259,2    14408 1326339 /usr/lib/x86_64-linux-gnu/libdl.so.2
forgejo 1660 forgejo  mem       REG              259,2    68104 1326796 /usr/lib/x86_64-linux-gnu/libresolv.so.2
forgejo 1660 forgejo  mem       REG              259,2   236616 1326067 /usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2
forgejo 1660 forgejo    0r      CHR                1,3      0t0       5 /dev/null
forgejo 1660 forgejo    1u     unix 0xffff8ac6044ead00      0t0   20649 type=STREAM (CONNECTED)
forgejo 1660 forgejo    2u     unix 0xffff8ac6044ead00      0t0   20649 type=STREAM (CONNECTED)
forgejo 1660 forgejo    3r      REG               0,30        0    8131 /sys/fs/cgroup/system.slice/forgejo.service/cpu.max
forgejo 1660 forgejo    4uW     REG              259,2        0 4720364 /var/lib/forgejo/data/queues/common/LOCK
forgejo 1660 forgejo    5u  a_inode               0,16        0    1064 [eventpoll:6,13]
forgejo 1660 forgejo    6u  a_inode               0,16        0    1064 [eventfd:48]
forgejo 1660 forgejo    7w      REG              259,2     3505 4720386 /var/lib/forgejo/data/queues/common/LOG
forgejo 1660 forgejo    8w      REG              259,2        0 4718628 /var/lib/forgejo/data/queues/common/000013.log
forgejo 1660 forgejo    9w      REG              259,2      151 4722355 /var/lib/forgejo/data/queues/common/MANIFEST-000014
forgejo 1660 forgejo   10r      REG              259,2      543 4722250 /var/lib/forgejo/data/queues/common/000012.ldb
forgejo 1660 forgejo   11u      REG              259,2  2191360 4718610 /var/lib/forgejo/data/forgejo.db
forgejo 1660 forgejo   12uW     REG              259,2    65536 4722274 /var/lib/forgejo/data/indexers/issues.bleve/store/root.bolt
forgejo 1660 forgejo   13u     IPv6               5098      0t0     TCP *:3000 (LISTEN)
```

```
 ~ % sudo strace -ff -r -p 1985

strace: Process 1985 attached with 21 threads
[pid 1508128]      0.000000 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000449 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.000008 epoll_pwait(5,  <unfinished ...>
[pid 438303]      0.000178 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1990]      0.000007 futex(0xc002142158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000006 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000004 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1848]      0.000009 futex(0xc000600158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000007 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1770]      0.000006 futex(0xc000100158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000007 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1768]      0.000005 futex(0xc00009b158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000004 restart_syscall(<... resuming interrupted read ...> <unfinished ...>
[pid  1985]      0.000006 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1660]      0.000007 futex(0x5f13f20, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.000011 <... epoll_pwait resumed>[], 128, 0, NULL, 0) = 0
[pid  1846]      0.000069 futex(0xc000500158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1772]      0.000006 futex(0x5f13d38, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.000007 epoll_pwait(5,  <unfinished ...>
[pid  1767]      0.006358 <... restart_syscall resumed>) = 0
[pid  1844]      0.000019 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000006 getpid( <unfinished ...>
[pid  1844]      0.000009 <... futex resumed>) = 1
[pid  1845]      0.000008 <... futex resumed>) = 0
[pid  1767]      0.000007 <... getpid resumed>) = 1660
[pid  1845]      0.000015 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1844]      0.000025 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid  1844]      0.000030 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000171 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000013 <... rt_sigreturn resumed>) = 824692113328
[pid  1767]      0.010081 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000029 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1844]      0.010111 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid  1844]      0.000017 <... futex resumed>) = 1
[pid  1767]      0.000007 <... getpid resumed>) = 1660
[pid  1845]      0.000009 <... futex resumed>) = 0
[pid  1767]      0.000009 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1845]      0.000035 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000008 <... tgkill resumed>) = 0
[pid  1844]      0.000017 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000014 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000015 <... rt_sigreturn resumed>) = 4284111573
[pid  1767]      0.010069 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.004918 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1844]      0.000034 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000040 <... futex resumed>) = 0
[pid  1845]      0.000026 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000034 <... futex resumed>) = 0
[pid  1844]      0.000025 getpid( <unfinished ...>
[pid  1769]      0.000008 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000013 <... getpid resumed>) = 1660
[pid  1769]      0.000009 <... futex resumed>) = 1
[pid  1988]      0.000010 <... futex resumed>) = 0
[pid  1844]      0.000006 tgkill(1660, 1845, SIGURG <unfinished ...>
[pid  1988]      0.000032 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000008 <... tgkill resumed>) = 0
[pid  1988]      0.000009 <... futex resumed>) = 1
[pid  1849]      0.000005 <... futex resumed>) = 0
[pid  1845]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000017 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000011 <... rt_sigreturn resumed>) = 49512288
[pid  1849]      0.000008 <... futex resumed>) = 1
[pid  1985]      0.000010 <... futex resumed>) = 0
[pid  1985]      0.000032 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000028 <... futex resumed>) = 0
[pid  1847]      0.000024 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000033 <... futex resumed>) = 0
[pid  1986]      0.000039 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000023 getpid( <unfinished ...>
[pid  1986]      0.000009 <... futex resumed>) = 1
[pid 438303]      0.000015 <... futex resumed>) = 0
[pid  1847]      0.000009 <... getpid resumed>) = 1660
[pid 438303]      0.000023 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000008 tgkill(1660, 1844, SIGURG) = 0
[pid  1844]      0.000037 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000025 rt_sigreturn({mask=[]}) = 824634251272
[pid 438303]      0.000983 <... futex resumed>) = 1
[pid 1488719]      0.000011 <... futex resumed>) = 0
[pid 1488719]      0.000032 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.002968 <... futex resumed>) = 0
[pid  1984]      0.000049 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1508128]      0.000049 <... futex resumed>) = 0
[pid 1508128]      0.000164 getpid( <unfinished ...>
[pid 1488719]      0.000008 getpid( <unfinished ...>
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000008 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000005 getpid( <unfinished ...>
[pid  1984]      0.000007 getpid( <unfinished ...>
[pid  1845]      0.000004 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000007 getpid( <unfinished ...>
[pid  1849]      0.000006 getpid( <unfinished ...>
[pid  1769]      0.000007 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000006 getpid( <unfinished ...>
[pid 1508128]      0.000012 <... getpid resumed>) = 1660
[pid 1488719]      0.000005 <... getpid resumed>) = 1660
[pid  1986]      0.000005 <... getpid resumed>) = 1660
[pid  1984]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000003 <... getpid resumed>) = 1660
[pid  1844]      0.000005 <... getpid resumed>) = 1660
[pid  1985]      0.000004 <... getpid resumed>) = 1660
[pid 1508128]      0.000011 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid 1488719]      0.000009 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1986]      0.000010 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid  1984]      0.000009 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid  1849]      0.000004 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid  1844]      0.000006 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid 1508128]      0.000011 <... tgkill resumed>) = 0
[pid 1488719]      0.000003 <... tgkill resumed>) = 0
[pid  1988]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1986]      0.000006 <... tgkill resumed>) = 0
[pid  1984]      0.000004 <... tgkill resumed>) = 0
[pid  1849]      0.000003 <... tgkill resumed>) = 0
[pid  1844]      0.000003 <... tgkill resumed>) = 0
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 1508128]      0.000013 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000017 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000007 <... nanosleep resumed>NULL) = 0
[pid  1985]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000012 <... rt_sigreturn resumed>) = 0
[pid 1488719]      0.000003 <... rt_sigreturn resumed>) = 0
[pid  1988]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1986]      0.000005 <... rt_sigreturn resumed>) = 0
[pid  1984]      0.000005 <... rt_sigreturn resumed>) = 0
[pid  1844]      0.000003 <... rt_sigreturn resumed>) = 0
[pid  1767]      0.000004 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1985]      0.000008 <... rt_sigreturn resumed>) = 0
[pid 1508128]      0.000008 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000005 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000006 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000004 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000005 getpid( <unfinished ...>
[pid 1508128]      0.000007 <... futex resumed>) = 1
[pid  1849]      0.000003 <... futex resumed>) = 0
[pid  1844]      0.000004 <... getpid resumed>) = 1660
[pid  1849]      0.000005 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000006 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid  1984]      0.000008 <... futex resumed>) = 0
[pid  1849]      0.000005 <... futex resumed>) = 1
[pid  1847]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000004 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000006 <... tgkill resumed>) = 0
[pid  1984]      0.000006 <... futex resumed>) = 1
[pid  1986]      0.000003 <... futex resumed>) = 0
[pid  1847]      0.000003 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000009 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000006 <... rt_sigreturn resumed>) = 824650838416
[pid 1488719]      0.000007 <... futex resumed>) = 0
[pid  1986]      0.000004 <... futex resumed>) = 1
[pid 1488719]      0.000007 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000023 <... futex resumed>) = 0
[pid 1508128]      0.000005 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000004 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000005 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000004 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 1488719]      0.000006 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000006 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000009 <... getpid resumed>) = 1660
[pid  1985]      0.000011 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 1508128]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 getpid( <unfinished ...>
[pid  1849]      0.000006 sched_yield( <unfinished ...>
[pid 1508128]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000009 <... sched_yield resumed>) = 0
[pid  1985]      0.000003 <... getpid resumed>) = 1660
[pid 1508128]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1849]      0.000003 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000007 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000005 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000022 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000004 <... tgkill resumed>) = 0
[pid  1849]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000008 <... futex resumed>) = 0
[pid  1849]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1849]      0.000012 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000118 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000014 <... futex resumed>) = 0
[pid  1849]      0.000003 <... futex resumed>) = 1
[pid  1988]      0.000012 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000005 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000009 <... futex resumed>) = 1
[pid  1985]      0.000003 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid 1488719]      0.000006 <... futex resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = 0
[pid  1985]      0.000007 sched_yield( <unfinished ...>
[pid 1488719]      0.000007 sched_yield( <unfinished ...>
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000008 <... sched_yield resumed>) = 0
[pid  1985]      0.000004 <... sched_yield resumed>) = 0
[pid 1488719]      0.000006 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000009 sched_yield( <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid  1988]      0.000005 <... sched_yield resumed>) = 0
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid  1988]      0.000005 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000007 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000014 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid  1988]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 futex(0xc000680d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000009 <... futex resumed>) = 0
[pid  1988]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1988]      0.000008 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1988]      0.000023 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000014 <... futex resumed>) = 0
[pid  1988]      0.000003 <... futex resumed>) = 1
[pid 1488719]      0.000007 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000007 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000008 <... futex resumed>) = 1
[pid  1849]      0.000004 <... futex resumed>) = 0
[pid  1988]      0.000007 <... futex resumed>) = 1
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1988]      0.000007 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000006 sched_yield( <unfinished ...>
[pid 1488719]      0.000007 sched_yield( <unfinished ...>
[pid  1985]      0.000005 getpid( <unfinished ...>
[pid 1488719]      0.000007 <... sched_yield resumed>) = 0
[pid  1849]      0.000003 <... sched_yield resumed>) = 0
[pid 1488719]      0.000006 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 <... getpid resumed>) = 1660
[pid  1849]      0.000005 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000014 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000004 <... tgkill resumed>) = 0
[pid 1488719]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000006 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000010 <... futex resumed>) = 0
[pid 1488719]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000005 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000009 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000024 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000016 <... futex resumed>) = 0
[pid 1488719]      0.000006 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000008 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000015 <... futex resumed>) = 0
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000019 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1985]      0.000027 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000013 <... futex resumed>) = 0
[pid  1985]      0.000003 <... futex resumed>) = 1
[pid  1849]      0.000011 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000014 <... futex resumed>) = 0
[pid  1849]      0.000003 <... futex resumed>) = 1
[pid 1488719]      0.000006 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1849]      0.000016 sched_yield( <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid  1849]      0.000006 <... sched_yield resumed>) = 0
[pid  1985]      0.000004 <... getpid resumed>) = 1660
[pid  1849]      0.000004 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000014 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000004 <... tgkill resumed>) = 0
[pid 1488719]      0.000007 <... nanosleep resumed>NULL) = 0
[pid  1849]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000008 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000006 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000010 <... futex resumed>) = 0
[pid  1849]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000009 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000007 <... rt_sigreturn resumed>) = 202
[pid 1488719]      0.000005 <... futex resumed>) = 1
[pid  1988]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000006 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1988]      0.000009 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000008 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000017 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000016 <... futex resumed>) = 0
[pid  1849]      0.000005 <... futex resumed>) = 1
[pid  1988]      0.000014 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000006 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid 1508128]      0.000008 <... futex resumed>) = 0
[pid  1988]      0.000005 <... futex resumed>) = 1
[pid  1849]      0.000003 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000007 sched_yield( <unfinished ...>
[pid 1488719]      0.000004 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000006 getpid( <unfinished ...>
[pid 1508128]      0.000007 <... sched_yield resumed>) = 0
[pid 1488719]      0.000003 <... futex resumed>) = 0
[pid 1508128]      0.000006 futex(0xc002143d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 <... getpid resumed>) = 1660
[pid 1508128]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000004 futex(0xc002143d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000009 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1508128]      0.000007 <... futex resumed>) = 1
[pid 1488719]      0.000003 <... futex resumed>) = 0
[pid  1849]      0.000005 <... futex resumed>) = 0
[pid 1488719]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000004 <... tgkill resumed>) = 0
[pid 1488719]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000009 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000008 <... rt_sigreturn resumed>) = 0
[pid  1988]      0.000005 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000008 getpid( <unfinished ...>
[pid  1988]      0.000008 <... futex resumed>) = 0
[pid  1849]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1988]      0.000009 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000007 <... getpid resumed>) = 1660
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000009 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000018 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000005 <... tgkill resumed>) = 0
[pid  1988]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000008 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000007 getpid( <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1988]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000009 <... futex resumed>) = 0
[pid  1985]      0.000006 <... getpid resumed>) = 1660
[pid  1988]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000010 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000008 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000018 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000011 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000008 <... rt_sigreturn resumed>) = 124131072187880
[pid 1508128]      0.001993 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.006396 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000027 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000025 <... futex resumed>) = 0
[pid  1767]      0.000005 <... futex resumed>) = 1
[pid 1508128]      0.000018 sched_yield( <unfinished ...>
[pid  1767]      0.000006 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000016 <... sched_yield resumed>) = 0
[pid 1508128]      0.000021 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010053 <... nanosleep resumed>NULL) = 0
[pid 1488719]      0.000035 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000013 getpid( <unfinished ...>
[pid 1508128]      0.000028 <... futex resumed>) = 0
[pid 1488719]      0.000004 <... futex resumed>) = 1
[pid  1767]      0.000006 <... getpid resumed>) = 1660
[pid 1508128]      0.000006 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000009 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000010 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1508128]      0.000012 <... futex resumed>) = 1
[pid  1985]      0.000004 <... futex resumed>) = 0
[pid 1488719]      0.000008 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid 1488719]      0.000012 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000006 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000008 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000016 rt_sigreturn({mask=[]}) = 202
[pid 1488719]      0.000037 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010050 <... nanosleep resumed>NULL) = 0
[pid 1508128]      0.000026 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid 1508128]      0.000009 <... futex resumed>) = 1
[pid  1767]      0.000009 <... getpid resumed>) = 1660
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1767]      0.000010 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1985]      0.000012 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000015 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid 1508128]      0.000016 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000013 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000013 <... rt_sigreturn resumed>) = 824692113328
[pid  1767]      0.010082 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1508128]      0.010108 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid 1508128]      0.000021 <... futex resumed>) = 1
[pid  1767]      0.000005 <... getpid resumed>) = 1660
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1767]      0.000014 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1985]      0.000011 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000025 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid 1508128]      0.000015 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000015 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000013 <... rt_sigreturn resumed>) = 152960098
[pid  1767]      0.010081 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000025 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1508128]      0.010124 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000011 getpid( <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1767]      0.000008 <... getpid resumed>) = 1660
[pid  1767]      0.000029 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1985]      0.000009 <... futex resumed>) = 0
[pid 1508128]      0.000016 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000009 <... tgkill resumed>) = 0
[pid  1985]      0.000009 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000014 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000014 <... rt_sigreturn resumed>) = 824748914800
[pid 1508128]      0.002811 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1508128]      0.000040 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000021 <... futex resumed>) = 0
[pid  1985]      0.000022 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000026 <... futex resumed>) = 0
[pid  1985]      0.000006 <... futex resumed>) = 1
[pid 1488719]      0.000023 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000030 <... futex resumed>) = 0
[pid  1849]      0.000024 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000029 <... futex resumed>) = 0
[pid  1988]      0.000022 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000029 <... futex resumed>) = 0
[pid  1984]      0.000026 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000030 <... futex resumed>) = 0
[pid  1986]      0.000030 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000035 <... futex resumed>) = 0
[pid  1985]      0.000020 getpid( <unfinished ...>
[pid  1847]      0.000016 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000011 <... getpid resumed>) = 1660
[pid  1847]      0.000013 <... futex resumed>) = 1
[pid  1844]      0.000009 <... futex resumed>) = 0
[pid  1985]      0.000011 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1844]      0.000019 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000012 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000011 <... tgkill resumed>) = 0
[pid 1508128]      0.000011 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000017 <... futex resumed>) = 1
[pid  1769]      0.000008 <... futex resumed>) = 0
[pid 1508128]      0.000024 <... rt_sigreturn resumed>) = 824635454800
[pid  1769]      0.000007 nanosleep({tv_sec=0, tv_nsec=3000}, NULL) = 0
[pid  1769]      0.003647 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000202 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000024 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000023 getpid( <unfinished ...>
[pid 1488719]      0.000012 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000013 <... futex resumed>) = 0
[pid  1988]      0.000008 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000012 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000021 <... getpid resumed>) = 1660
[pid 438303]      0.000009 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000012 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000012 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000012 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000015 tgkill(1660, 1849, SIGURG) = 0
[pid  1849]      0.000033 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1849]      0.000022 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000032 getpid( <unfinished ...>
[pid  1849]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000018 sched_yield( <unfinished ...>
[pid 1508128]      0.000012 <... getpid resumed>) = 1660
[pid  1849]      0.000007 <... rt_sigreturn resumed>) = 202
[pid 1508128]      0.000009 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid  1769]      0.000006 <... sched_yield resumed>) = 0
[pid 1508128]      0.000008 <... tgkill resumed>) = 0
[pid  1849]      0.000007 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1769]      0.000011 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000025 rt_sigreturn({mask=[]}) = 0
[pid  1769]      0.000041 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000023 <... futex resumed>) = 0
[pid  1769]      0.000004 <... futex resumed>) = 1
[pid  1849]      0.000008 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000012 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000011 <... futex resumed>) = 0
[pid  1849]      0.000006 <... futex resumed>) = 1
[pid 1508128]      0.000008 <... futex resumed>) = 0
[pid  1769]      0.000004 <... futex resumed>) = 1
[pid 438303]      0.000005 sched_yield( <unfinished ...>
[pid 1508128]      0.000014 sched_yield( <unfinished ...>
[pid  1769]      0.000005 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000013 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 <... sched_yield resumed>) = 0
[pid 1508128]      0.000017 getpid( <unfinished ...>
[pid 438303]      0.000006 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000007 sched_yield( <unfinished ...>
[pid 1508128]      0.000007 <... getpid resumed>) = 1660
[pid  1849]      0.000006 <... sched_yield resumed>) = 0
[pid 1508128]      0.000006 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000008 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000015 <... tgkill resumed>) = 0
[pid  1849]      0.000005 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000006 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000006 <... futex resumed>) = 0
[pid  1849]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000011 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1849]      0.000011 <... rt_sigreturn resumed>) = 202
[pid  1849]      0.000014 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000033 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000016 <... futex resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = 1
[pid 438303]      0.000016 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000007 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000010 <... futex resumed>) = 1
[pid 1508128]      0.000009 <... futex resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = 1
[pid  1769]      0.000004 <... futex resumed>) = 0
[pid 1508128]      0.000009 sched_yield( <unfinished ...>
[pid  1849]      0.000009 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000008 <... sched_yield resumed>) = 0
[pid  1769]      0.000004 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 getpid( <unfinished ...>
[pid 438303]      0.000008 sched_yield( <unfinished ...>
[pid 1508128]      0.000007 <... getpid resumed>) = 1660
[pid 438303]      0.000005 <... sched_yield resumed>) = 0
[pid 1508128]      0.000006 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000010 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000007 <... tgkill resumed>) = 0
[pid 438303]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000006 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000006 <... futex resumed>) = 0
[pid 438303]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000012 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000012 <... rt_sigreturn resumed>) = 202
[pid 438303]      0.000016 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000028 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000016 <... futex resumed>) = 0
[pid 438303]      0.000004 <... futex resumed>) = 1
[pid 438303]      0.000013 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000015 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1508128]      0.000034 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.000019 <... futex resumed>) = 0
[pid 438303]      0.000018 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000018 <... futex resumed>) = 0
[pid 1508128]      0.000014 getpid( <unfinished ...>
[pid 438303]      0.000007 sched_yield( <unfinished ...>
[pid 1508128]      0.000006 <... getpid resumed>) = 1660
[pid  1769]      0.000003 sched_yield( <unfinished ...>
[pid 1508128]      0.000010 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000006 <... sched_yield resumed>) = 0
[pid 1508128]      0.000005 <... tgkill resumed>) = 0
[pid  1769]      0.000003 <... sched_yield resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000007 futex(0xc00009bd38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000008 futex(0xc00009bd38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000009 <... futex resumed>) = 0
[pid  1769]      0.000003 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1508128]      0.000007 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000008 <... rt_sigreturn resumed>) = 0
[pid  1769]      0.000005 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid 438303]      0.000010 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000014 <... futex resumed>) = 0
[pid 438303]      0.000003 <... futex resumed>) = 1
[pid 1508128]      0.000010 sched_yield() = 0
[pid  1769]      0.000032 <... nanosleep resumed>NULL) = 0
[pid  1769]      0.000013 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.001457 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000018 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 438303]      0.000775 sched_yield() = 0
[pid 1508128]      0.000314 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.008999 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1508128]      0.000024 <... futex resumed>) = 0
[pid 438303]      0.000013 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000006 getpid( <unfinished ...>
[pid 438303]      0.000017 <... futex resumed>) = 1
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1769]      0.000005 <... futex resumed>) = 0
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000006 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid  1769]      0.000009 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000010 <... tgkill resumed>) = 0
[pid 438303]      0.000005 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1767]      0.000006 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 438303]      0.000014 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000019 rt_sigreturn({mask=[]}) = 202
[pid 438303]      0.000032 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010022 <... nanosleep resumed>NULL) = 0
[pid 1508128]      0.000018 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000006 getpid( <unfinished ...>
[pid 1508128]      0.000013 <... futex resumed>) = 1
[pid  1769]      0.000003 <... futex resumed>) = 0
[pid  1767]      0.000003 <... getpid resumed>) = 1660
[pid  1769]      0.000014 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000005 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000019 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000014 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000012 <... rt_sigreturn resumed>) = 99494592
[pid  1767]      0.010067 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 sched_getaffinity(0, 8192, [0 1 2 3 4 5 6 7 8 9 10 11]) = 8
[pid  1767]      0.000046 pread64(3, "max 100000\n", 64, 0) = 11
[pid  1767]      0.000044 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1508128]      0.010103 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1769]      0.000007 <... futex resumed>) = 0
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1769]      0.000017 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000006 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000031 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000006 <... tgkill resumed>) = 0
[pid 1508128]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000012 <... rt_sigreturn resumed>) = 316748020
[pid  1767]      0.010068 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1508128]      0.010103 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid 1508128]      0.000008 <... futex resumed>) = 1
[pid  1769]      0.000006 <... futex resumed>) = 0
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1769]      0.000016 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000023 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000011 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000010 <... rt_sigreturn resumed>) = 112
[pid 1508128]      0.003538 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1508128]      0.000032 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000020 <... futex resumed>) = 0
[pid  1769]      0.000018 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000054 <... futex resumed>) = 0
[pid  1769]      0.000007 <... futex resumed>) = 1
[pid 438303]      0.000016 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000027 <... futex resumed>) = 0
[pid  1849]      0.000025 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000036 <... futex resumed>) = 0
[pid  1849]      0.000008 <... futex resumed>) = 1
[pid  1984]      0.000023 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000030 <... futex resumed>) = 0
[pid  1844]      0.000028 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000031 <... futex resumed>) = 0
[pid  1844]      0.000006 <... futex resumed>) = 1
[pid  1988]      0.000017 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000056 <... futex resumed>) = 0
[pid  1844]      0.000010 getpid( <unfinished ...>
[pid  1847]      0.000040 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000008 <... getpid resumed>) = 1660
[pid  1847]      0.000010 <... futex resumed>) = 1
[pid 1488719]      0.000008 <... futex resumed>) = 0
[pid  1844]      0.000008 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000031 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000004 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000013 <... tgkill resumed>) = 0
[pid 1508128]      0.000016 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000010 <... futex resumed>) = 1
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid 1508128]      0.000011 <... rt_sigreturn resumed>) = 824635454976
[pid  1985]      0.000058 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000050 <... futex resumed>) = 0
[pid  1986]      0.000024 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000050 <... futex resumed>) = 0
[pid 1508128]      0.003044 sched_yield( <unfinished ...>
[pid 438303]      0.000010 sched_yield( <unfinished ...>
[pid  1988]      0.000006 sched_yield( <unfinished ...>
[pid  1986]      0.000007 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000008 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000010 sched_yield( <unfinished ...>
[pid  1769]      0.000008 getpid( <unfinished ...>
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000016 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 <... sched_yield resumed>) = 0
[pid  1988]      0.000005 <... sched_yield resumed>) = 0
[pid  1849]      0.000005 <... sched_yield resumed>) = 0
[pid  1847]      0.000004 getpid( <unfinished ...>
[pid  1845]      0.000007 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000007 <... getpid resumed>) = 1660
[pid 1508128]      0.000013 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000006 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000007 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000008 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 <... getpid resumed>) = 1660
[pid  1769]      0.000005 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000011 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000007 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1847]      0.000011 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = 0
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000007 <... tgkill resumed>) = 0
[pid 1488719]      0.000012 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000007 <... tgkill resumed>) = 0
[pid  1769]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000022 getpid( <unfinished ...>
[pid  1844]      0.000006 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000011 <... rt_sigreturn resumed>) = 0
[pid  1847]      0.000004 <... getpid resumed>) = 1660
[pid  1769]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000013 <... futex resumed>) = 0
[pid  1847]      0.000006 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1844]      0.000006 <... futex resumed>) = 1
[pid  1849]      0.000012 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000008 <... tgkill resumed>) = 0
[pid  1769]      0.000006 <... rt_sigreturn resumed>) = 0
[pid  1844]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000007 <... futex resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = 1
[pid  1844]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000014 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000009 <... rt_sigreturn resumed>) = 1
[pid  1988]      0.000009 <... futex resumed>) = 1
[pid 1488719]      0.000329 getpid( <unfinished ...>
[pid 438303]      0.000009 <... futex resumed>) = 0
[pid  1849]      0.000005 getpid( <unfinished ...>
[pid  1769]      0.000007 getpid( <unfinished ...>
[pid 1488719]      0.000012 <... getpid resumed>) = 1660
[pid 438303]      0.000004 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000007 <... getpid resumed>) = 1660
[pid  1769]      0.000005 <... getpid resumed>) = 1660
[pid 1508128]      0.000013 <... futex resumed>) = 0
[pid 1488719]      0.000005 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid 438303]      0.000007 <... futex resumed>) = 1
[pid  1849]      0.000007 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1769]      0.000007 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid 1508128]      0.000023 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000006 <... tgkill resumed>) = 0
[pid  1988]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000006 <... tgkill resumed>) = 0
[pid  1847]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000008 <... tgkill resumed>) = 0
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1988]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000010 <... futex resumed>) = 0
[pid  1844]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000014 <... rt_sigreturn resumed>) = 54933042
[pid  1847]      0.000004 <... rt_sigreturn resumed>) = 824752246480
[pid  1845]      0.000005 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000010 <... rt_sigreturn resumed>) = 824674650568
[pid  1845]      0.000009 <... futex resumed>) = 1
[pid  1988]      0.000029 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000008 <... futex resumed>) = 0
[pid  1849]      0.000005 getpid( <unfinished ...>
[pid  1986]      0.000010 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000012 <... getpid resumed>) = 1660
[pid  1988]      0.000009 <... futex resumed>) = 0
[pid  1986]      0.000005 <... futex resumed>) = 1
[pid  1849]      0.000009 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid  1988]      0.000010 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000016 <... tgkill resumed>) = 0
[pid  1769]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000008 <... futex resumed>) = 1
[pid  1984]      0.000009 <... futex resumed>) = 0
[pid  1769]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000015 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000010 <... rt_sigreturn resumed>) = 824640132144
[pid  1984]      0.000008 <... futex resumed>) = 1
[pid  1985]      0.000007 <... futex resumed>) = 0
[pid 1508128]      0.000114 getpid( <unfinished ...>
[pid 438303]      0.000009 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000008 getpid( <unfinished ...>
[pid  1984]      0.000007 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000007 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000008 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000007 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000007 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 <... getpid resumed>) = 1660
[pid 1488719]      0.000005 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 <... getpid resumed>) = 1660
[pid  1845]      0.000005 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000009 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid  1986]      0.000007 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 1508128]      0.000012 <... tgkill resumed>) = 0
[pid 1488719]      0.000007 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000010 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1986]      0.000005 <... tgkill resumed>) = 0
[pid 1488719]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000011 getpid( <unfinished ...>
[pid  1847]      0.000006 sched_yield( <unfinished ...>
[pid 1488719]      0.000009 <... rt_sigreturn resumed>) = 202
[pid 438303]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000010 <... getpid resumed>) = 1660
[pid 1488719]      0.000008 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000006 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000005 <... sched_yield resumed>) = 0
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid  1847]      0.000009 futex(0xc000580538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1986]      0.000008 <... tgkill resumed>) = 0
[pid  1847]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1986]      0.000006 futex(0xc000580538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000007 <... futex resumed>) = 0
[pid  1847]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000011 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1847]      0.000014 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000014 futex(0xc000580538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1847]      0.000034 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000017 <... futex resumed>) = 0
[pid  1847]      0.000004 <... futex resumed>) = 1
[pid 1508128]      0.000006 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000008 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000008 <... futex resumed>) = 1
[pid  1845]      0.000004 <... futex resumed>) = 0
[pid  1986]      0.000007 <... futex resumed>) = 0
[pid  1847]      0.000004 <... futex resumed>) = 1
[pid  1986]      0.000007 sched_yield( <unfinished ...>
[pid  1845]      0.000006 sched_yield( <unfinished ...>
[pid  1986]      0.000008 <... sched_yield resumed>) = 0
[pid  1845]      0.000006 <... sched_yield resumed>) = 0
[pid  1845]      0.000015 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000018 <... futex resumed>) = 0
[pid  1845]      0.000004 <... futex resumed>) = 1
[pid 1488719]      0.000006 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000029 <... futex resumed>) = 0
[pid  1988]      0.000018 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000030 <... futex resumed>) = 0
[pid  1769]      0.000018 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000030 <... futex resumed>) = 0
[pid  1985]      0.000033 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000027 <... futex resumed>) = 0
[pid  1985]      0.000006 <... futex resumed>) = 1
[pid  1984]      0.000012 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000035 <... futex resumed>) = 0
[pid  1849]      0.000016 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000017 <... futex resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = 1
[pid 1488719]      0.000144 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000008 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000011 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000011 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000006 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000005 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000009 sched_yield( <unfinished ...>
[pid  1849]      0.000004 getpid( <unfinished ...>
[pid  1847]      0.000005 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000006 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000006 <... sched_yield resumed>) = 0
[pid  1849]      0.000003 <... getpid resumed>) = 1660
[pid 1508128]      0.000005 futex(0xc002143d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000011 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 438303]      0.000011 <... futex resumed>) = 1
[pid  1844]      0.000007 <... futex resumed>) = 0
[pid 1508128]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1849]      0.000004 <... tgkill resumed>) = 0
[pid 1508128]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000004 sched_yield( <unfinished ...>
[pid  1844]      0.000005 sched_yield( <unfinished ...>
[pid 1508128]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 438303]      0.000010 <... sched_yield resumed>) = 0
[pid  1849]      0.000003 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1508128]      0.000011 <... rt_sigreturn resumed>) = 202
[pid 438303]      0.000003 futex(0xc002143d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000004 <... sched_yield resumed>) = 0
[pid 1508128]      0.000005 futex(0xc002143d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 438303]      0.000006 <... futex resumed>) = 0
[pid 1508128]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000005 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000006 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000006 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1508128]      0.000005 <... futex resumed>) = 0
[pid 438303]      0.000005 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000015 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000004 <... futex resumed>) = 1
[pid  1844]      0.000004 <... futex resumed>) = 0
[pid 1508128]      0.000007 <... futex resumed>) = 1
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid 1508128]      0.000007 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000007 sched_yield( <unfinished ...>
[pid 438303]      0.000007 sched_yield( <unfinished ...>
[pid  1849]      0.000004 getpid( <unfinished ...>
[pid 438303]      0.000008 <... sched_yield resumed>) = 0
[pid  1844]      0.000003 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000006 <... getpid resumed>) = 1660
[pid  1844]      0.000007 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000009 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000018 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1849]      0.000004 <... tgkill resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000007 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000010 <... futex resumed>) = 1
[pid  1844]      0.000004 <... futex resumed>) = 0
[pid 438303]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1849]      0.000003 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000012 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000006 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000005 <... nanosleep resumed>NULL) = 0
[pid 438303]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000004 <... futex resumed>) = 0
[pid  1767]      0.000006 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000010 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000017 <... futex resumed>) = 0
[pid  1844]      0.000003 <... futex resumed>) = 1
[pid  1849]      0.000012 sched_yield( <unfinished ...>
[pid  1844]      0.000006 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000008 <... sched_yield resumed>) = 0
[pid 438303]      0.000014 sched_yield( <unfinished ...>
[pid  1849]      0.000006 getpid( <unfinished ...>
[pid 438303]      0.000006 <... sched_yield resumed>) = 0
[pid  1849]      0.000005 <... getpid resumed>) = 1660
[pid 438303]      0.000004 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000006 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1849]      0.000004 <... tgkill resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000005 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000008 <... futex resumed>) = 0
[pid 438303]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1849]      0.000004 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000008 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000022 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000014 <... futex resumed>) = 0
[pid 438303]      0.000004 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000022 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1849]      0.000025 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000013 <... futex resumed>) = 0
[pid  1849]      0.000003 <... futex resumed>) = 1
[pid 438303]      0.000013 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000015 <... futex resumed>) = 0
[pid  1844]      0.000014 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000016 <... futex resumed>) = 0
[pid  1849]      0.000004 getpid( <unfinished ...>
[pid  1844]      0.000004 <... futex resumed>) = 1
[pid 438303]      0.000004 sched_yield( <unfinished ...>
[pid 1508128]      0.000010 sched_yield( <unfinished ...>
[pid  1849]      0.000005 <... getpid resumed>) = 1660
[pid  1844]      0.000003 sched_yield( <unfinished ...>
[pid 1508128]      0.000009 <... sched_yield resumed>) = 0
[pid 438303]      0.000004 <... sched_yield resumed>) = 0
[pid  1849]      0.000004 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 1508128]      0.000007 futex(0xc002143d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 438303]      0.000005 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000005 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1849]      0.000004 <... tgkill resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000004 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 438303]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000007 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000006 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000003 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000007 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid 438303]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000004 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000008 futex(0xc002143d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1508128]      0.000009 <... futex resumed>) = 0
[pid 438303]      0.000004 <... futex resumed>) = 1
[pid  1844]      0.000003 <... futex resumed>) = 0
[pid 1508128]      0.000006 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000010 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1844]      0.000004 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1769]      0.000010 <... futex resumed>) = 0
[pid 438303]      0.000006 <... futex resumed>) = 1
[pid  1849]      0.000003 <... futex resumed>) = 0
[pid  1769]      0.000006 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid 438303]      0.000008 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1844]      0.000039 <... nanosleep resumed>NULL) = 0
[pid  1844]      0.000013 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000013 <... nanosleep resumed>NULL) = 0
[pid 438303]      0.000004 <... nanosleep resumed>NULL) = 0
[pid  1769]      0.000005 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000011 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.001902 sched_yield() = 0
[pid  1849]      0.000349 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.007175 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000027 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000028 <... futex resumed>) = 0
[pid  1767]      0.000006 <... futex resumed>) = 1
[pid  1849]      0.000017 sched_yield( <unfinished ...>
[pid  1767]      0.000007 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1849]      0.000018 <... sched_yield resumed>) = 0
[pid  1849]      0.000025 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010050 <... nanosleep resumed>NULL) = 0
[pid 1508128]      0.000028 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid 1508128]      0.000007 <... futex resumed>) = 1
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1849]      0.000018 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000006 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000027 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000014 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000011 <... rt_sigreturn resumed>) = 72
[pid  1767]      0.010070 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1508128]      0.010123 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1849]      0.000010 <... futex resumed>) = 0
[pid  1767]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000020 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000008 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000029 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000014 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000010 <... rt_sigreturn resumed>) = 824730758336
[pid  1767]      0.010071 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000025 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1508128]      0.010099 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = 1
[pid  1849]      0.000009 <... futex resumed>) = 0
[pid  1767]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000025 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000011 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000037 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000018 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1508128]      0.000010 <... rt_sigreturn resumed>) = 824745661232
[pid 1508128]      0.007507 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1508128]      0.000044 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000022 <... futex resumed>) = 0
[pid  1849]      0.000020 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.000027 <... futex resumed>) = 0
[pid 438303]      0.000025 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000031 <... futex resumed>) = 0
[pid  1769]      0.000021 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000032 <... futex resumed>) = 0
[pid  1844]      0.000036 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000027 <... futex resumed>) = 0
[pid  1847]      0.000023 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000028 <... futex resumed>) = 0
[pid  1988]      0.000049 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000040 <... futex resumed>) = 0
[pid  1849]      0.000009 getpid( <unfinished ...>
[pid  1845]      0.000016 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000011 <... getpid resumed>) = 1660
[pid  1845]      0.000008 <... futex resumed>) = 1
[pid  1986]      0.000011 <... futex resumed>) = 0
[pid  1986]      0.000026 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000012 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1508128]      0.000030 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000007 <... futex resumed>) = 1
[pid  1849]      0.000008 <... tgkill resumed>) = 0
[pid 1508128]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000014 <... futex resumed>) = 0
[pid 1508128]      0.000011 <... rt_sigreturn resumed>) = 824636598024
[pid  1985]      0.000055 nanosleep({tv_sec=0, tv_nsec=3000}, NULL) = 0
[pid  1985]      0.000108 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000052 <... futex resumed>) = 0
[pid  1984]      0.000057 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.001698 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000067 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.001263 <... futex resumed>) = 0
[pid  1984]      0.000013 <... futex resumed>) = 1
[pid 1508128]      0.000592 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000011 sched_yield( <unfinished ...>
[pid 438303]      0.000007 getpid( <unfinished ...>
[pid  1988]      0.000008 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 getpid( <unfinished ...>
[pid  1984]      0.000005 getpid( <unfinished ...>
[pid  1849]      0.000005 getpid( <unfinished ...>
[pid  1847]      0.000005 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000005 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000005 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000004 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000009 <... sched_yield resumed>) = 0
[pid 438303]      0.000003 <... getpid resumed>) = 1660
[pid  1986]      0.000004 <... getpid resumed>) = 1660
[pid  1984]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000004 <... getpid resumed>) = 1660
[pid 1488719]      0.000006 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000005 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1986]      0.000006 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1984]      0.000025 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid 1508128]      0.000012 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1488719]      0.000003 <... futex resumed>) = 1
[pid 438303]      0.000006 <... tgkill resumed>) = 0
[pid  1988]      0.000004 <... futex resumed>) = 0
[pid  1986]      0.000005 <... tgkill resumed>) = 0
[pid  1984]      0.000005 <... tgkill resumed>) = 0
[pid  1849]      0.000006 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid  1844]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000015 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000006 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000007 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000008 getpid( <unfinished ...>
[pid  1849]      0.000006 <... tgkill resumed>) = 0
[pid  1844]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000011 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000014 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1986]      0.000010 <... futex resumed>) = 0
[pid  1984]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000009 <... rt_sigreturn resumed>) = 202
[pid  1988]      0.000004 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000004 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid  1844]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000019 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000015 <... futex resumed>) = 0
[pid  1988]      0.000005 <... futex resumed>) = 1
[pid  1986]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000008 <... tgkill resumed>) = 0
[pid  1849]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000009 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000006 <... rt_sigreturn resumed>) = 0
[pid  1984]      0.000005 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000008 <... rt_sigreturn resumed>) = 0
[pid  1844]      0.000005 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000010 <... futex resumed>) = 0
[pid 438303]      0.000005 <... futex resumed>) = 1
[pid  1986]      0.000004 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000012 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000007 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000006 getpid( <unfinished ...>
[pid 1488719]      0.000009 <... futex resumed>) = 0
[pid  1986]      0.000004 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000008 <... rt_sigreturn resumed>) = 55663802
[pid 1488719]      0.000007 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000008 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000006 <... getpid resumed>) = 1660
[pid 1488719]      0.000007 <... futex resumed>) = 0
[pid 438303]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000007 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid 438303]      0.000008 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000007 <... tgkill resumed>) = 0
[pid  1985]      0.000002 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000006 <... futex resumed>) = 1
[pid  1986]      0.000005 <... futex resumed>) = 0
[pid  1985]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000010 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000008 <... rt_sigreturn resumed>) = 824667706440
[pid  1986]      0.000007 <... futex resumed>) = 1
[pid  1984]      0.000004 <... futex resumed>) = 0
[pid  1984]      0.000029 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000025 <... futex resumed>) = 0
[pid  1984]      0.000006 <... futex resumed>) = 1
[pid 1508128]      0.000006 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000024 <... futex resumed>) = 0
[pid  1845]      0.000022 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000043 <... futex resumed>) = 0
[pid  1844]      0.000018 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000014 getpid( <unfinished ...>
[pid  1986]      0.000006 getpid( <unfinished ...>
[pid  1984]      0.000008 getpid( <unfinished ...>
[pid 1508128]      0.000008 <... getpid resumed>) = 1660
[pid  1986]      0.000005 <... getpid resumed>) = 1660
[pid  1847]      0.000006 <... futex resumed>) = 0
[pid  1844]      0.000005 <... futex resumed>) = 1
[pid 1508128]      0.000010 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1986]      0.000010 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000006 <... getpid resumed>) = 1660
[pid  1847]      0.000010 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000018 <... tgkill resumed>) = 0
[pid 1488719]      0.000003 getpid( <unfinished ...>
[pid 438303]      0.000006 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000004 <... tgkill resumed>) = 0
[pid  1984]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000007 <... futex resumed>) = 1
[pid  1845]      0.000006 getpid( <unfinished ...>
[pid  1844]      0.000008 getpid( <unfinished ...>
[pid  1769]      0.000006 <... futex resumed>) = 0
[pid  1985]      0.000006 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000011 <... getpid resumed>) = 1660
[pid  1984]      0.000003 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000007 <... getpid resumed>) = 1660
[pid  1847]      0.000004 getpid( <unfinished ...>
[pid 1508128]      0.000004 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000005 <... getpid resumed>) = 1660
[pid  1769]      0.000003 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000014 <... futex resumed>) = 0
[pid 1488719]      0.000003 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1986]      0.000005 getpid( <unfinished ...>
[pid  1984]      0.000005 <... rt_sigreturn resumed>) = 1660
[pid  1849]      0.000003 <... rt_sigreturn resumed>) = 824654525360
[pid  1847]      0.000004 <... getpid resumed>) = 1660
[pid  1845]      0.000003 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1844]      0.000006 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid  1769]      0.000007 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1508128]      0.000030 getpid( <unfinished ...>
[pid 1488719]      0.000007 <... tgkill resumed>) = 0
[pid  1988]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000006 <... getpid resumed>) = 1660
[pid  1984]      0.000005 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000007 tgkill(1660, 1845, SIGURG <unfinished ...>
[pid  1845]      0.000006 <... tgkill resumed>) = 0
[pid  1844]      0.000003 <... tgkill resumed>) = 0
[pid  1769]      0.000004 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000012 <... getpid resumed>) = 1660
[pid 1488719]      0.000004 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000009 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000004 <... tgkill resumed>) = 0
[pid  1847]      0.000003 <... tgkill resumed>) = 0
[pid  1845]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000009 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000003 <... rt_sigreturn resumed>) = 557044936
[pid  1986]      0.000003 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000006 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000005 getpid( <unfinished ...>
[pid  1845]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000006 <... futex resumed>) = 0
[pid  1986]      0.000004 <... rt_sigreturn resumed>) = 1660
[pid  1984]      0.000005 <... futex resumed>) = 1
[pid  1847]      0.000004 <... getpid resumed>) = 1660
[pid  1845]      0.000003 <... rt_sigreturn resumed>) = 0
[pid  1844]      0.000004 <... rt_sigreturn resumed>) = 0
[pid 1508128]      0.000009 <... rt_sigreturn resumed>) = 1660
[pid 1488719]      0.000003 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid  1984]      0.000007 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1845]      0.000006 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000019 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid 1488719]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1988]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000006 <... tgkill resumed>) = 0
[pid  1984]      0.000004 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1847]      0.000005 <... tgkill resumed>) = 0
[pid  1845]      0.000004 <... futex resumed>) = 0
[pid  1844]      0.000003 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000012 <... tgkill resumed>) = 0
[pid 1488719]      0.000002 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000010 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000006 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000004 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000008 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000009 <... rt_sigreturn resumed>) = 824699273216
[pid  1847]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000010 <... futex resumed>) = 0
[pid 1488719]      0.000003 <... rt_sigreturn resumed>) = 202
[pid  1845]      0.000004 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1508128]      0.000008 getpid( <unfinished ...>
[pid 1488719]      0.000005 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 <... rt_sigreturn resumed>) = 0
[pid 1508128]      0.000006 <... getpid resumed>) = 1660
[pid  1845]      0.000003 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000006 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid  1847]      0.000005 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000008 <... tgkill resumed>) = 0
[pid  1984]      0.000003 <... futex resumed>) = 0
[pid  1845]      0.000003 <... futex resumed>) = 1
[pid 1508128]      0.000006 getpid( <unfinished ...>
[pid  1988]      0.000005 sched_yield( <unfinished ...>
[pid  1847]      0.000007 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000010 <... getpid resumed>) = 1660
[pid  1988]      0.000004 <... sched_yield resumed>) = 0
[pid  1984]      0.000004 sched_yield( <unfinished ...>
[pid  1845]      0.000005 sched_yield( <unfinished ...>
[pid  1847]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000006 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000005 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000005 <... sched_yield resumed>) = 0
[pid  1845]      0.000004 <... sched_yield resumed>) = 0
[pid 1508128]      0.000006 <... tgkill resumed>) = 0
[pid  1988]      0.000003 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1984]      0.000004 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000010 futex(0xc000480538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000004 futex(0xc000480538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000007 <... futex resumed>) = 0
[pid  1988]      0.000003 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000006 <... rt_sigreturn resumed>) = 202
[pid 1508128]      0.000006 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1988]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1845]      0.000003 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1988]      0.000006 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000004 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000006 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000014 <... futex resumed>) = 0
[pid  1845]      0.000003 <... futex resumed>) = 1
[pid  1984]      0.000005 futex(0xc000680d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000006 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000007 <... futex resumed>) = 0
[pid  1984]      0.000003 <... futex resumed>) = 1
[pid  1988]      0.000011 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000004 sched_yield( <unfinished ...>
[pid 1508128]      0.000008 <... futex resumed>) = 0
[pid  1988]      0.000003 <... futex resumed>) = 1
[pid  1984]      0.000005 <... sched_yield resumed>) = 0
[pid 1508128]      0.000004 sched_yield( <unfinished ...>
[pid  1984]      0.000008 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000006 <... sched_yield resumed>) = 0
[pid 1508128]      0.000012 getpid( <unfinished ...>
[pid  1988]      0.000005 sched_yield( <unfinished ...>
[pid 1508128]      0.000006 <... getpid resumed>) = 1660
[pid  1988]      0.000004 <... sched_yield resumed>) = 0
[pid 1508128]      0.000004 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000006 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000005 <... tgkill resumed>) = 0
[pid  1988]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000004 futex(0xc000680d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000005 <... futex resumed>) = 0
[pid  1988]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000009 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1988]      0.000008 <... rt_sigreturn resumed>) = 202
[pid  1988]      0.000011 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1988]      0.000023 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000015 <... futex resumed>) = 0
[pid  1988]      0.000010 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000004 sched_yield( <unfinished ...>
[pid  1988]      0.000007 <... futex resumed>) = 1
[pid 1508128]      0.000003 <... futex resumed>) = 0
[pid  1984]      0.000004 <... sched_yield resumed>) = 0
[pid 1508128]      0.000005 getpid( <unfinished ...>
[pid  1988]      0.000004 sched_yield( <unfinished ...>
[pid 1508128]      0.000007 <... getpid resumed>) = 1660
[pid  1984]      0.000003 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000006 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000004 <... sched_yield resumed>) = 0
[pid 1508128]      0.000004 <... tgkill resumed>) = 0
[pid  1988]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000005 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000009 <... futex resumed>) = 1
[pid  1984]      0.000003 <... futex resumed>) = 0
[pid 1508128]      0.000006 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1988]      0.000006 <... rt_sigreturn resumed>) = 0
[pid  1984]      0.000004 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000006 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000012 <... futex resumed>) = 0
[pid  1988]      0.000003 <... futex resumed>) = 1
[pid  1988]      0.000010 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1508128]      0.000027 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000014 <... futex resumed>) = 0
[pid  1988]      0.000015 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000014 <... futex resumed>) = 0
[pid  1984]      0.000013 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000013 getpid( <unfinished ...>
[pid  1988]      0.000004 sched_yield( <unfinished ...>
[pid  1984]      0.000005 <... futex resumed>) = 1
[pid  1845]      0.000005 <... futex resumed>) = 0
[pid 1508128]      0.000005 <... getpid resumed>) = 1660
[pid  1988]      0.000003 <... sched_yield resumed>) = 0
[pid 1508128]      0.000006 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1984]      0.000004 sched_yield( <unfinished ...>
[pid  1845]      0.000004 sched_yield( <unfinished ...>
[pid 1508128]      0.000007 <... tgkill resumed>) = 0
[pid  1988]      0.000003 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000005 <... sched_yield resumed>) = 0
[pid  1988]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1845]      0.000003 <... sched_yield resumed>) = 0
[pid 1508128]      0.000004 futex(0xc000680d38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000003 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1845]      0.000007 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid 1508128]      0.000009 <... futex resumed>) = 0
[pid  1988]      0.000003 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000008 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1988]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1988]      0.000011 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1988]      0.000028 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000004 <... nanosleep resumed>NULL) = 0
[pid  1845]      0.000005 <... nanosleep resumed>NULL) = 0
[pid 1508128]      0.000005 <... futex resumed>) = 0
[pid  1988]      0.000004 <... futex resumed>) = 1
[pid  1845]      0.000004 sched_yield( <unfinished ...>
[pid 1508128]      0.000006 sched_yield( <unfinished ...>
[pid  1845]      0.000006 <... sched_yield resumed>) = 0
[pid 1508128]      0.000004 <... sched_yield resumed>) = 0
[pid  1845]      0.000004 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000007 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.002645 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.003167 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000035 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000028 <... futex resumed>) = 0
[pid  1767]      0.000010 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1984]      0.000018 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010078 <... nanosleep resumed>NULL) = 0
[pid  1988]      0.000024 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid  1988]      0.000015 <... futex resumed>) = 1
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1984]      0.000009 <... futex resumed>) = 0
[pid  1767]      0.000009 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1984]      0.000013 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000015 <... tgkill resumed>) = 0
[pid  1988]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000017 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000016 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000015 <... rt_sigreturn resumed>) = 597091892
[pid  1767]      0.010070 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000027 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1988]      0.010113 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000011 getpid( <unfinished ...>
[pid  1988]      0.000011 <... futex resumed>) = 1
[pid  1984]      0.000007 <... futex resumed>) = 0
[pid  1767]      0.000009 <... getpid resumed>) = 1660
[pid  1984]      0.000019 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000053 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid  1988]      0.000020 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000012 <... rt_sigreturn resumed>) = 824727761392
[pid  1767]      0.010076 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000025 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1988]      0.010122 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000013 getpid( <unfinished ...>
[pid  1988]      0.000009 <... futex resumed>) = 1
[pid  1767]      0.000005 <... getpid resumed>) = 1660
[pid  1984]      0.000017 <... futex resumed>) = 0
[pid  1767]      0.000005 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000036 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000008 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid  1988]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000020 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000017 <... rt_sigreturn resumed>) = 18071571012875491120
[pid  1767]      0.010083 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000028 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.001825 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1988]      0.000038 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000038 <... futex resumed>) = 0
[pid  1984]      0.000035 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000034 <... futex resumed>) = 0
[pid  1984]      0.000009 <... futex resumed>) = 1
[pid 1508128]      0.000010 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000028 getpid( <unfinished ...>
[pid  1845]      0.000009 <... futex resumed>) = 0
[pid  1988]      0.000009 <... getpid resumed>) = 1660
[pid  1845]      0.000009 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000010 tgkill(1660, 1984, SIGURG) = 0
[pid  1984]      0.000033 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000012 <... futex resumed>) = 0
[pid  1845]      0.000007 <... futex resumed>) = 1
[pid  1984]      0.000011 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000016 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000011 <... rt_sigreturn resumed>) = 24696
[pid  1847]      0.000008 <... futex resumed>) = 1
[pid  1986]      0.000011 <... futex resumed>) = 0
[pid  1986]      0.000034 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000038 <... futex resumed>) = 0
[pid  1844]      0.000038 sched_yield() = 0
[pid  1844]      0.000035 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000036 <... futex resumed>) = 0
[pid  1845]      0.000008 getpid( <unfinished ...>
[pid  1844]      0.000009 <... futex resumed>) = 1
[pid 1488719]      0.000009 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000008 <... getpid resumed>) = 1660
[pid 1488719]      0.000011 <... futex resumed>) = 1
[pid  1845]      0.000012 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1769]      0.000007 <... futex resumed>) = 0
[pid  1988]      0.000016 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000006 <... tgkill resumed>) = 0
[pid  1769]      0.000007 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000017 <... futex resumed>) = 0
[pid  1769]      0.000005 <... futex resumed>) = 1
[pid  1988]      0.000007 <... rt_sigreturn resumed>) = 824634251264
[pid  1849]      0.000009 nanosleep({tv_sec=0, tv_nsec=3000}, NULL) = 0
[pid  1849]      0.000105 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000048 <... futex resumed>) = 0
[pid  1985]      0.000025 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.003281 <... futex resumed>) = 0
[pid 1488719]      0.001038 sched_yield( <unfinished ...>
[pid 438303]      0.000011 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000008 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 sched_yield( <unfinished ...>
[pid  1984]      0.000005 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000010 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000007 getpid( <unfinished ...>
[pid  1844]      0.000008 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000007 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000008 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 getpid( <unfinished ...>
[pid 1488719]      0.000006 <... sched_yield resumed>) = 0
[pid  1986]      0.000006 <... sched_yield resumed>) = 0
[pid  1845]      0.000005 <... getpid resumed>) = 1660
[pid 1508128]      0.000008 <... getpid resumed>) = 1660
[pid 1488719]      0.000005 getpid( <unfinished ...>
[pid  1986]      0.000008 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000008 tgkill(1660, 1845, SIGURG <unfinished ...>
[pid 1488719]      0.000006 <... getpid resumed>) = 1660
[pid  1845]      0.000008 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid 1508128]      0.000007 <... tgkill resumed>) = 0
[pid 1488719]      0.000003 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1986]      0.000005 <... futex resumed>) = 1
[pid  1847]      0.000006 <... futex resumed>) = 0
[pid 1508128]      0.000011 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000005 <... tgkill resumed>) = 0
[pid  1986]      0.000003 getpid( <unfinished ...>
[pid  1847]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000004 <... tgkill resumed>) = 0
[pid 1508128]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000016 <... getpid resumed>) = 1660
[pid 1508128]      0.000006 <... rt_sigreturn resumed>) = 824666968384
[pid  1847]      0.000003 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000006 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1847]      0.000006 <... rt_sigreturn resumed>) = 0
[pid  1986]      0.000016 <... tgkill resumed>) = 0
[pid 1508128]      0.000003 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000004 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000009 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000010 <... rt_sigreturn resumed>) = 0
[pid  1849]      0.000006 <... rt_sigreturn resumed>) = 824640536584
[pid 1488719]      0.000015 sched_yield( <unfinished ...>
[pid  1849]      0.000005 sched_yield( <unfinished ...>
[pid  1845]      0.000005 getpid( <unfinished ...>
[pid 1488719]      0.000006 <... sched_yield resumed>) = 0
[pid  1849]      0.000003 <... sched_yield resumed>) = 0
[pid 1488719]      0.000005 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1845]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000006 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1845]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1845]      0.000005 <... tgkill resumed>) = 0
[pid 1488719]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000005 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000010 <... futex resumed>) = 0
[pid  1845]      0.000003 <... futex resumed>) = 1
[pid 1488719]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1849]      0.000004 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000007 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1845]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000011 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000008 <... futex resumed>) = 0
[pid  1849]      0.000012 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000015 <... futex resumed>) = 0
[pid  1849]      0.000011 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000006 getpid( <unfinished ...>
[pid 1488719]      0.000005 sched_yield( <unfinished ...>
[pid  1845]      0.000005 <... getpid resumed>) = 1660
[pid 1488719]      0.000004 <... sched_yield resumed>) = 0
[pid  1845]      0.000004 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000006 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1845]      0.000006 <... tgkill resumed>) = 0
[pid 1488719]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1845]      0.000005 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000005 <... futex resumed>) = 0
[pid 1488719]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000008 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000008 <... rt_sigreturn resumed>) = 202
[pid 1488719]      0.000012 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000024 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000016 <... futex resumed>) = 0
[pid 1488719]      0.000005 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000014 sched_yield( <unfinished ...>
[pid  1845]      0.000005 <... futex resumed>) = 0
[pid  1849]      0.000005 <... sched_yield resumed>) = 0
[pid  1845]      0.000004 getpid( <unfinished ...>
[pid 1488719]      0.000006 sched_yield( <unfinished ...>
[pid  1849]      0.000004 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1488719]      0.000006 <... sched_yield resumed>) = 0
[pid  1845]      0.000003 <... getpid resumed>) = 1660
[pid 1488719]      0.000006 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1845]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000013 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1845]      0.000003 <... tgkill resumed>) = 0
[pid 1488719]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000006 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000008 <... futex resumed>) = 0
[pid 1488719]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1845]      0.000005 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000008 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000024 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000016 <... futex resumed>) = 0
[pid 1488719]      0.000005 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000098 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid  1849]      0.000014 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000005 getpid( <unfinished ...>
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid  1845]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000004 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000007 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000017 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1845]      0.000003 <... tgkill resumed>) = 0
[pid  1849]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000010 epoll_pwait(5,  <unfinished ...>
[pid  1849]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1845]      0.000005 <... epoll_pwait resumed>[], 128, 0, NULL, 0) = 0
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1845]      0.000015 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000013 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000005 <... futex resumed>) = 1
[pid 1488719]      0.000004 <... futex resumed>) = 0
[pid 1488719]      0.000014 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1849]      0.000033 sched_yield( <unfinished ...>
[pid  1845]      0.000004 getpid( <unfinished ...>
[pid  1849]      0.000008 <... sched_yield resumed>) = 0
[pid  1845]      0.000004 <... getpid resumed>) = 1660
[pid  1849]      0.000005 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1845]      0.000006 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid 1488719]      0.000012 <... nanosleep resumed>NULL) = 0
[pid  1845]      0.000003 <... tgkill resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1488719]      0.000005 sched_yield( <unfinished ...>
[pid  1849]      0.000009 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000003 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000008 <... sched_yield resumed>) = 0
[pid  1849]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000008 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000006 <... rt_sigreturn resumed>) = 202
[pid 1488719]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000005 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1488719]      0.000007 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000006 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000006 <... futex resumed>) = 1
[pid  1986]      0.000003 <... futex resumed>) = 0
[pid  1986]      0.000015 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000093 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid  1849]      0.000016 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000005 getpid( <unfinished ...>
[pid  1849]      0.000008 <... futex resumed>) = 1
[pid  1986]      0.000004 <... futex resumed>) = 0
[pid  1845]      0.000004 <... getpid resumed>) = 1660
[pid  1986]      0.000006 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000009 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000019 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000004 <... tgkill resumed>) = 0
[pid  1849]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000011 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000005 getpid( <unfinished ...>
[pid 1488719]      0.000009 <... futex resumed>) = 1
[pid  1849]      0.000004 <... rt_sigreturn resumed>) = 733422713
[pid  1986]      0.000004 <... futex resumed>) = 0
[pid 1488719]      0.000005 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1845]      0.000005 <... getpid resumed>) = 1660
[pid 1488719]      0.000006 <... futex resumed>) = 0
[pid  1986]      0.000005 sched_yield( <unfinished ...>
[pid  1845]      0.000007 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid  1986]      0.000008 <... sched_yield resumed>) = 0
[pid 1488719]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000004 <... tgkill resumed>) = 0
[pid  1986]      0.000005 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000007 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000008 <... rt_sigreturn resumed>) = 99593344
[pid  1767]      0.001492 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000948 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.009154 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000022 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1488719]      0.000023 <... futex resumed>) = 0
[pid  1849]      0.000009 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000006 getpid( <unfinished ...>
[pid  1849]      0.000009 <... futex resumed>) = 1
[pid  1845]      0.000007 <... futex resumed>) = 0
[pid  1767]      0.000003 <... getpid resumed>) = 1660
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000009 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000006 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000022 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1767]      0.000004 <... tgkill resumed>) = 0
[pid  1849]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000008 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1849]      0.000016 rt_sigreturn({mask=[]}) = 202
[pid  1849]      0.000027 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010044 <... nanosleep resumed>NULL) = 0
[pid 1488719]      0.000024 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000006 getpid( <unfinished ...>
[pid 1488719]      0.000013 <... futex resumed>) = 1
[pid  1845]      0.000010 <... futex resumed>) = 0
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1845]      0.000019 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000025 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid 1488719]      0.000016 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000011 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000013 <... rt_sigreturn resumed>) = 824716994656
[pid  1767]      0.010071 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000029 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1488719]      0.010108 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid 1488719]      0.000008 <... futex resumed>) = 1
[pid  1767]      0.000006 <... getpid resumed>) = 1660
[pid  1845]      0.000018 <... futex resumed>) = 0
[pid  1767]      0.000005 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid  1845]      0.000034 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000004 <... tgkill resumed>) = 0
[pid 1488719]      0.000022 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000014 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000010 <... rt_sigreturn resumed>) = 824731426368
[pid  1767]      0.010071 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000030 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1488719]      0.010115 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000010 getpid( <unfinished ...>
[pid 1488719]      0.000007 <... futex resumed>) = 1
[pid  1845]      0.000007 <... futex resumed>) = 0
[pid  1767]      0.000005 <... getpid resumed>) = 1660
[pid  1845]      0.000020 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000008 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000030 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 1488719]      0.000018 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000017 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000012 <... rt_sigreturn resumed>) = 24
[pid 1488719]      0.006259 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488719]      0.000043 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000022 <... futex resumed>) = 0
[pid  1845]      0.000022 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000025 <... futex resumed>) = 0
[pid  1845]      0.000004 <... futex resumed>) = 1
[pid  1849]      0.000016 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000029 <... futex resumed>) = 0
[pid  1986]      0.000022 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000040 <... futex resumed>) = 0
[pid  1847]      0.000022 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000028 <... futex resumed>) = 0
[pid  1847]      0.000009 <... futex resumed>) = 1
[pid 1508128]      0.000021 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000028 <... futex resumed>) = 0
[pid  1769]      0.000032 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000030 <... futex resumed>) = 0
[pid  1769]      0.000011 <... futex resumed>) = 1
[pid  1984]      0.000019 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000047 getpid()      = 1660
[pid  1985]      0.000035 <... futex resumed>) = 0
[pid  1845]      0.000014 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid  1985]      0.000016 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000015 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000013 <... tgkill resumed>) = 0
[pid 1488719]      0.000015 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000018 <... futex resumed>) = 0
[pid  1985]      0.000008 <... futex resumed>) = 1
[pid 1488719]      0.000012 <... rt_sigreturn resumed>) = 0
[pid  1988]      0.000007 nanosleep({tv_sec=0, tv_nsec=3000}, NULL) = 0
[pid  1988]      0.000126 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.000048 <... futex resumed>) = 0
[pid 438303]      0.000051 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000071 <... futex resumed>) = 0
[pid  1767]      0.002895 <... nanosleep resumed>NULL) = 0
[pid 1508128]      0.000556 getpid( <unfinished ...>
[pid 1488719]      0.000009 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000009 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000010 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000008 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000008 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000008 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000007 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1986]      0.000022 getpid( <unfinished ...>
[pid  1988]      0.000007 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000008 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 <... getpid resumed>) = 1660
[pid  1988]      0.000005 <... futex resumed>) = 0
[pid  1986]      0.000005 <... getpid resumed>) = 1660
[pid  1845]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1508128]      0.000014 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid  1986]      0.000008 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid 1508128]      0.000014 <... tgkill resumed>) = 0
[pid  1845]      0.000006 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000010 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1986]      0.000008 <... tgkill resumed>) = 0
[pid  1845]      0.000010 <... futex resumed>) = 1
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1988]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000010 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000008 <... rt_sigreturn resumed>) = 824650310656
[pid  1985]      0.000005 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000012 <... futex resumed>) = 0
[pid  1985]      0.000005 <... futex resumed>) = 1
[pid  1986]      0.000006 <... rt_sigreturn resumed>) = 0
[pid  1847]      0.000005 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000020 <... futex resumed>) = 0
[pid  1988]      0.000007 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000008 <... futex resumed>) = 1
[pid  1988]      0.000008 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1984]      0.000006 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000008 getpid( <unfinished ...>
[pid  1988]      0.000009 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000008 <... futex resumed>) = 0
[pid  1988]      0.000008 <... futex resumed>) = 1
[pid 1488719]      0.000006 <... futex resumed>) = 0
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid 1488719]      0.000011 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1488719]      0.000032 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000144 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 <... futex resumed>) = 0
[pid  1988]      0.000010 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000007 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 438303]      0.000008 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000011 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000006 <... tgkill resumed>) = 0
[pid 1508128]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000018 rt_sigreturn({mask=[]}) = 202
[pid 1508128]      0.000035 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000007 sched_yield( <unfinished ...>
[pid  1985]      0.000007 getpid( <unfinished ...>
[pid  1984]      0.000007 <... sched_yield resumed>) = 0
[pid  1985]      0.000006 <... getpid resumed>) = 1660
[pid  1984]      0.000006 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000009 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000018 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000005 <... tgkill resumed>) = 0
[pid  1984]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000007 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000012 <... futex resumed>) = 0
[pid  1984]      0.000006 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000007 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1984]      0.000013 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1984]      0.000028 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000018 <... futex resumed>) = 0
[pid  1984]      0.000005 <... futex resumed>) = 1
[pid 438303]      0.000006 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000010 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000010 <... futex resumed>) = 1
[pid  1988]      0.000004 <... futex resumed>) = 0
[pid  1984]      0.000007 <... futex resumed>) = 1
[pid  1985]      0.000006 <... futex resumed>) = 0
[pid  1988]      0.000007 sched_yield( <unfinished ...>
[pid  1984]      0.000013 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000010 sched_yield( <unfinished ...>
[pid  1988]      0.000007 <... sched_yield resumed>) = 0
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 438303]      0.000007 <... sched_yield resumed>) = 0
[pid  1988]      0.000003 futex(0xc000680d38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 438303]      0.000008 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid  1985]      0.000011 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000016 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 438303]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000008 <... futex resumed>) = 0
[pid 438303]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000008 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000022 futex(0xc000680d38, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000015 <... futex resumed>) = 0
[pid  1988]      0.000012 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000015 <... futex resumed>) = 0
[pid  1988]      0.000008 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 sched_yield( <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 438303]      0.000005 <... sched_yield resumed>) = 0
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid 438303]      0.000004 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000014 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000008 <... futex resumed>) = 0
[pid 438303]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000005 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000009 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000021 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000015 <... futex resumed>) = 0
[pid 438303]      0.000005 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000020 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1985]      0.000026 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000013 <... futex resumed>) = 0
[pid  1985]      0.000003 <... futex resumed>) = 1
[pid 438303]      0.000012 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.000015 <... futex resumed>) = 0
[pid  1988]      0.000014 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid 438303]      0.000009 sched_yield( <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 438303]      0.000005 <... sched_yield resumed>) = 0
[pid  1985]      0.000006 <... getpid resumed>) = 1660
[pid 438303]      0.000004 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000013 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 438303]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000006 <... nanosleep resumed>NULL) = 0
[pid  1985]      0.000003 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1988]      0.000003 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000006 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid 438303]      0.000006 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1988]      0.000004 <... futex resumed>) = 1
[pid  1984]      0.000003 <... futex resumed>) = 0
[pid  1985]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1984]      0.000008 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000161 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid 438303]      0.000014 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 getpid()      = 1660
[pid  1985]      0.000022 tgkill(1660, 438303, SIGURG) = 0
[pid  1988]      0.000023 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 getpid( <unfinished ...>
[pid  1988]      0.000006 <... futex resumed>) = 0
[pid  1985]      0.000004 <... getpid resumed>) = 1660
[pid  1985]      0.000011 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000015 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid  1988]      0.000010 rt_sigreturn({mask=[]}) = 906348857
[pid 438303]      0.001492 <... futex resumed>) = 1
[pid  1984]      0.000009 <... futex resumed>) = 0
[pid 438303]      0.000011 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000006 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000017 rt_sigreturn({mask=[]}) = 1
[pid 438303]      0.000036 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000588 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.006173 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000022 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000024 <... futex resumed>) = 0
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1985]      0.000014 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010077 <... nanosleep resumed>NULL) = 0
[pid  1988]      0.000029 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000012 getpid( <unfinished ...>
[pid  1988]      0.000011 <... futex resumed>) = 1
[pid  1985]      0.000006 <... futex resumed>) = 0
[pid  1767]      0.000006 <... getpid resumed>) = 1660
[pid  1985]      0.000009 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000008 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000029 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid  1988]      0.000019 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000011 <... rt_sigreturn resumed>) = 949060892
[pid  1767]      0.010071 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1988]      0.010113 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000010 getpid( <unfinished ...>
[pid  1988]      0.000019 <... futex resumed>) = 1
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1767]      0.000007 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000030 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000006 <... tgkill resumed>) = 0
[pid  1985]      0.000004 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000010 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000013 rt_sigreturn({mask=[]}) = 824652103600
[pid  1767]      0.010067 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000022 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1988]      0.010118 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid  1988]      0.000015 <... futex resumed>) = 1
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1985]      0.000006 <... futex resumed>) = 0
[pid  1767]      0.000006 tgkill(1660, 1988, SIGURG) = 0
[pid  1988]      0.000024 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000006 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000010 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000012 rt_sigreturn({mask=[]}) = 124131071859080
[pid  1767]      0.010068 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000018 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1988]      0.000959 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1988]      0.000033 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000021 <... futex resumed>) = 0
[pid  1985]      0.000020 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.000024 <... futex resumed>) = 0
[pid  1988]      0.000024 getpid( <unfinished ...>
[pid 438303]      0.000015 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000007 <... getpid resumed>) = 1660
[pid 438303]      0.000014 <... futex resumed>) = 1
[pid  1988]      0.000004 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid  1984]      0.000008 <... futex resumed>) = 0
[pid  1988]      0.000008 <... tgkill resumed>) = 0
[pid  1985]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000007 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000016 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000009 <... futex resumed>) = 1
[pid  1847]      0.000007 <... futex resumed>) = 0
[pid  1985]      0.000004 <... rt_sigreturn resumed>) = 95788928
[pid  1847]      0.000015 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000025 <... futex resumed>) = 0
[pid  1986]      0.000025 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000030 <... futex resumed>) = 0
[pid  1845]      0.000028 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1508128]      0.000031 <... futex resumed>) = 0
[pid 1508128]      0.000027 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1488719]      0.000041 <... futex resumed>) = 0
[pid 1488719]      0.000028 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000033 getpid( <unfinished ...>
[pid  1769]      0.000148 <... futex resumed>) = 0
[pid  1769]      0.000037 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000136 <... futex resumed>) = 0
[pid  1769]      0.000039 <... futex resumed>) = 1
[pid  1849]      0.000032 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.001911 <... getpid resumed>) = 1660
[pid  1984]      0.000053 tgkill(1660, 1988, SIGURG <unfinished ...>
[pid  1988]      0.000052 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000052 <... tgkill resumed>) = 0
[pid  1988]      0.000054 rt_sigreturn({mask=[]}) = 824645900912
[pid  1844]      0.000778 <... futex resumed>) = 0
[pid  1844]      0.000026 nanosleep({tv_sec=0, tv_nsec=3000}, NULL) = 0
[pid 1508128]      0.001950 getpid( <unfinished ...>
[pid  1847]      0.000021 getpid( <unfinished ...>
[pid 1488719]      0.000007 getpid( <unfinished ...>
[pid 438303]      0.000007 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000009 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000006 getpid( <unfinished ...>
[pid  1985]      0.000006 getpid( <unfinished ...>
[pid 1508128]      0.000012 <... getpid resumed>) = 1660
[pid 1488719]      0.000006 <... getpid resumed>) = 1660
[pid 438303]      0.000005 <... futex resumed>) = 0
[pid  1988]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1847]      0.000010 <... getpid resumed>) = 1660
[pid  1845]      0.000005 <... getpid resumed>) = 1660
[pid 1508128]      0.000013 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 1488719]      0.000009 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1847]      0.000014 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1985]      0.000008 <... getpid resumed>) = 1660
[pid  1845]      0.000005 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid 1508128]      0.000023 <... tgkill resumed>) = 0
[pid 1488719]      0.000005 <... tgkill resumed>) = 0
[pid 438303]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000006 <... tgkill resumed>) = 0
[pid  1985]      0.000005 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid  1845]      0.000010 <... tgkill resumed>) = 0
[pid  1849]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000010 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000008 rt_sigreturn({mask=[]}) = 824662440992
[pid 1488719]      0.000111 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000006 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000008 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000005 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000021 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000007 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000005 <... rt_sigreturn resumed>) = 0
[pid  1986]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1849]      0.000004 <... rt_sigreturn resumed>) = 824693040928
[pid 1508128]      0.000009 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 1508128]      0.000006 <... futex resumed>) = 1
[pid  1986]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000007 <... futex resumed>) = 0
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid  1986]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000008 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000004 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000005 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1986]      0.000004 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000011 <... futex resumed>) = 0
[pid  1847]      0.000003 <... futex resumed>) = 1
[pid  1985]      0.000004 <... tgkill resumed>) = 0
[pid 1508128]      0.000007 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 438303]      0.000004 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000007 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000003 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000013 rt_sigreturn({mask=[]}) = 202
[pid 1508128]      0.000026 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.000261 <... epoll_pwait resumed>[], 128, 503, NULL, 0) = 0
[pid 1488380]      0.000015 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000023 epoll_pwait(5,  <unfinished ...>
[pid  1984]      0.000121 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000014 rt_sigreturn({mask=[]}) = 824675935936
[pid  1984]      0.000026 getpid( <unfinished ...>
[pid  1844]      0.000004 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000006 <... getpid resumed>) = 1660
[pid  1844]      0.000006 <... futex resumed>) = 1
[pid  1985]      0.000003 <... futex resumed>) = 0
[pid  1984]      0.000005 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000008 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000010 <... tgkill resumed>) = 0
[pid  1844]      0.000002 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000003 <... futex resumed>) = 1
[pid  1847]      0.000005 <... futex resumed>) = 0
[pid  1844]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000010 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000006 <... rt_sigreturn resumed>) = 824712620000
[pid  1847]      0.000005 <... futex resumed>) = 1
[pid 438303]      0.000004 <... futex resumed>) = 0
[pid 438303]      0.000014 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000022 <... futex resumed>) = 0
[pid 438303]      0.000015 sched_yield( <unfinished ...>
[pid  1849]      0.000005 sched_yield( <unfinished ...>
[pid  1985]      0.000006 getpid( <unfinished ...>
[pid 438303]      0.000009 <... sched_yield resumed>) = 0
[pid  1849]      0.000003 <... sched_yield resumed>) = 0
[pid  1847]      0.000004 sched_yield( <unfinished ...>
[pid 438303]      0.000010 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000005 sched_yield( <unfinished ...>
[pid  1849]      0.000004 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid  1847]      0.000004 <... sched_yield resumed>) = 0
[pid  1984]      0.000006 <... sched_yield resumed>) = 0
[pid  1985]      0.000003 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid  1984]      0.000007 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000004 futex(0xc000580538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 438303]      0.000007 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 438303]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000008 sched_yield( <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 438303]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 <... sched_yield resumed>) = 0
[pid 438303]      0.000005 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000003 <... getpid resumed>) = 1660
[pid 438303]      0.000005 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000005 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000007 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1844]      0.000016 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid  1844]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000010 <... futex resumed>) = 0
[pid  1844]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000006 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1844]      0.000011 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000027 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000014 <... futex resumed>) = 0
[pid  1844]      0.000004 <... futex resumed>) = 1
[pid  1984]      0.000007 futex(0xc000580538, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000018 <... futex resumed>) = 0
[pid  1847]      0.000014 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000015 <... futex resumed>) = 0
[pid  1847]      0.000003 <... futex resumed>) = 1
[pid  1849]      0.000009 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000019 <... futex resumed>) = 0
[pid  1984]      0.000005 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 <... futex resumed>) = 1
[pid  1847]      0.000004 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000009 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid 438303]      0.000009 <... futex resumed>) = 0
[pid  1849]      0.000006 sched_yield( <unfinished ...>
[pid  1985]      0.000009 sched_yield( <unfinished ...>
[pid  1849]      0.000005 <... sched_yield resumed>) = 0
[pid  1985]      0.000006 <... sched_yield resumed>) = 0
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000011 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000006 sched_yield( <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid  1844]      0.000005 <... sched_yield resumed>) = 0
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid  1844]      0.000005 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1844]      0.000016 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000006 <... tgkill resumed>) = 0
[pid  1844]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000013 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000009 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000008 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000006 <... futex resumed>) = 0
[pid  1844]      0.000006 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000008 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1844]      0.000012 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000014 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000014 <... futex resumed>) = 0
[pid  1844]      0.000003 <... futex resumed>) = 1
[pid 438303]      0.000006 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000008 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000008 <... futex resumed>) = 1
[pid  1849]      0.000005 <... futex resumed>) = 0
[pid  1844]      0.000006 <... futex resumed>) = 1
[pid  1985]      0.000003 <... futex resumed>) = 0
[pid  1849]      0.000005 sched_yield( <unfinished ...>
[pid 438303]      0.000011 sched_yield( <unfinished ...>
[pid  1844]      0.000006 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000006 getpid( <unfinished ...>
[pid  1849]      0.000005 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 <... sched_yield resumed>) = 0
[pid  1985]      0.000003 <... getpid resumed>) = 1660
[pid 438303]      0.000005 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1849]      0.000007 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000008 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000005 <... tgkill resumed>) = 0
[pid 438303]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488380]      0.000007 <... epoll_pwait resumed>[], 128, 1, NULL, 0) = 0
[pid  1985]      0.000005 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488380]      0.000008 futex(0xc000601958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000010 <... futex resumed>) = 0
[pid 438303]      0.000010 <... rt_sigreturn resumed>) = 202
[pid  1985]      0.000005 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000011 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000024 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000015 <... futex resumed>) = 0
[pid 438303]      0.000006 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000018 <... futex resumed>) = 0
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000022 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1985]      0.000031 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000014 <... futex resumed>) = 0
[pid  1985]      0.000004 <... futex resumed>) = 1
[pid  1849]      0.000007 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000015 <... futex resumed>) = 0
[pid  1849]      0.000004 <... futex resumed>) = 1
[pid 438303]      0.000012 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1985]      0.000015 getpid( <unfinished ...>
[pid  1849]      0.000006 sched_yield( <unfinished ...>
[pid 438303]      0.000005 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1849]      0.000012 <... sched_yield resumed>) = 0
[pid  1985]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000006 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000009 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000016 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid 438303]      0.000007 <... nanosleep resumed>NULL) = 0
[pid  1849]      0.000002 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000007 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 438303]      0.000007 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 438303]      0.000008 <... futex resumed>) = 0
[pid  1849]      0.000004 <... rt_sigreturn resumed>) = 202
[pid 438303]      0.000004 futex(0xc000601958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000006 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1488380]      0.000006 <... futex resumed>) = 0
[pid 438303]      0.000003 <... futex resumed>) = 1
[pid 1488380]      0.000005 epoll_pwait(5,  <unfinished ...>
[pid  1849]      0.000004 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488380]      0.000005 <... epoll_pwait resumed>[], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000012 epoll_pwait(5,  <unfinished ...>
[pid  1985]      0.000092 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid  1849]      0.000014 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 getpid( <unfinished ...>
[pid  1849]      0.000006 <... futex resumed>) = 1
[pid  1844]      0.000005 <... futex resumed>) = 0
[pid  1985]      0.000003 <... getpid resumed>) = 1660
[pid  1844]      0.000007 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000007 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000015 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid  1849]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 438303]      0.000009 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000004 getpid( <unfinished ...>
[pid 438303]      0.000006 <... futex resumed>) = 1
[pid  1849]      0.000003 <... rt_sigreturn resumed>) = 48103360
[pid 438303]      0.000006 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000005 <... futex resumed>) = 0
[pid  1985]      0.000004 <... getpid resumed>) = 1660
[pid 438303]      0.000004 <... futex resumed>) = 0
[pid  1844]      0.000005 sched_yield( <unfinished ...>
[pid  1985]      0.000006 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid  1844]      0.000006 <... sched_yield resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000003 <... tgkill resumed>) = 0
[pid  1844]      0.000004 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000006 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000006 <... rt_sigreturn resumed>) = 124131072746728
[pid  1767]      0.000663 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000017 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 438303]      0.001295 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.006836 <... epoll_pwait resumed>[], 128, 9, NULL, 0) = 0
[pid 1488380]      0.000023 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000033 epoll_pwait(5, [], 128, 1, NULL, 0) = 0
[pid 1488380]      0.001099 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000043 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.000023 <... futex resumed>) = 0
[pid 438303]      0.000023 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000029 epoll_pwait(5,  <unfinished ...>
[pid 438303]      0.000018 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000655 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000023 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000019 <... futex resumed>) = 0
[pid  1767]      0.000004 <... futex resumed>) = 1
[pid 438303]      0.000010 sched_yield( <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid  1849]      0.000005 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000008 <... sched_yield resumed>) = 0
[pid  1767]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000009 <... futex resumed>) = 1
[pid  1985]      0.000004 <... futex resumed>) = 0
[pid  1767]      0.000005 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1849]      0.000011 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000009 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1767]      0.000004 <... tgkill resumed>) = 0
[pid  1849]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1849]      0.000016 rt_sigreturn({mask=[]}) = 202
[pid  1849]      0.000028 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010040 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000019 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 438303]      0.010115 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000009 getpid( <unfinished ...>
[pid 438303]      0.000010 <... futex resumed>) = 1
[pid  1767]      0.000010 <... getpid resumed>) = 1660
[pid  1985]      0.000007 <... futex resumed>) = 0
[pid  1767]      0.000010 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid  1985]      0.000021 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000008 <... tgkill resumed>) = 0
[pid 438303]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000010 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 438303]      0.000019 rt_sigreturn({mask=[]}) = 18446469845967938361
[pid  1767]      0.010062 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000020 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 438303]      0.010116 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000010 getpid( <unfinished ...>
[pid 438303]      0.000013 <... futex resumed>) = 1
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1767]      0.000009 <... getpid resumed>) = 1660
[pid  1985]      0.000009 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000011 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid 438303]      0.000026 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000005 <... tgkill resumed>) = 0
[pid 438303]      0.000014 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000013 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 438303]      0.000012 <... rt_sigreturn resumed>) = 1205520276
[pid  1767]      0.010070 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000024 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 438303]      0.006737 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 438303]      0.000038 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000024 <... futex resumed>) = 0
[pid  1985]      0.000023 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000032 <... futex resumed>) = 0
[pid  1849]      0.000026 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000043 <... futex resumed>) = 0
[pid  1844]      0.000025 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000023 <... futex resumed>) = 0
[pid  1984]      0.000026 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000030 <... futex resumed>) = 0
[pid  1847]      0.000023 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1508128]      0.000025 <... futex resumed>) = 0
[pid 1508128]      0.000035 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000030 <... futex resumed>) = 0
[pid  1845]      0.000025 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000013 getpid( <unfinished ...>
[pid  1845]      0.000017 <... futex resumed>) = 1
[pid  1985]      0.000008 <... getpid resumed>) = 1660
[pid  1985]      0.000022 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid  1986]      0.000010 <... futex resumed>) = 0
[pid 438303]      0.000014 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000008 <... tgkill resumed>) = 0
[pid  1986]      0.000007 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000013 rt_sigreturn({mask=[]}) = 824635560640
[pid  1767]      0.002805 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000035 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1986]      0.000558 <... futex resumed>) = 1
[pid  1769]      0.000014 <... futex resumed>) = 0
[pid  1769]      0.000030 nanosleep({tv_sec=0, tv_nsec=3000}, NULL) = 0
[pid  1769]      0.000133 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1508128]      0.000663 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000008 <... futex resumed>) = 0
[pid 438303]      0.000005 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000005 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000006 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000004 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000004 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000004 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000006 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000004 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000010 <... futex resumed>) = 0
[pid 438303]      0.000006 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000017 <... futex resumed>) = 0
[pid  1984]      0.000018 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000021 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000010 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000005 <... futex resumed>) = 1
[pid  1844]      0.000006 <... futex resumed>) = 0
[pid  1984]      0.000017 getpid( <unfinished ...>
[pid  1844]      0.000004 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000006 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000010 <... futex resumed>) = 0
[pid  1984]      0.000005 <... getpid resumed>) = 1660
[pid  1844]      0.000006 <... futex resumed>) = 1
[pid 438303]      0.000008 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000007 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid 438303]      0.000011 <... futex resumed>) = 1
[pid  1769]      0.000005 <... futex resumed>) = 0
[pid  1984]      0.000010 <... tgkill resumed>) = 0
[pid 438303]      0.000005 getpid( <unfinished ...>
[pid  1769]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000007 <... getpid resumed>) = 1660
[pid  1984]      0.000005 getpid( <unfinished ...>
[pid 438303]      0.000009 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid  1769]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid 438303]      0.000015 <... tgkill resumed>) = 0
[pid  1984]      0.000003 <... getpid resumed>) = 1660
[pid  1985]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000006 getpid( <unfinished ...>
[pid  1769]      0.000005 <... rt_sigreturn resumed>) = 0
[pid 438303]      0.000006 <... getpid resumed>) = 1660
[pid  1984]      0.000004 tgkill(1660, 438303, SIGURG <unfinished ...>
[pid  1985]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 438303]      0.000010 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000005 <... tgkill resumed>) = 0
[pid  1769]      0.000003 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000013 <... tgkill resumed>) = 0
[pid  1984]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000006 <... futex resumed>) = 1
[pid  1985]      0.000003 <... rt_sigreturn resumed>) = 824651855624
[pid 1488719]      0.000007 <... futex resumed>) = 0
[pid 438303]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000013 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000010 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 <... rt_sigreturn resumed>) = 0
[pid  1984]      0.000004 <... rt_sigreturn resumed>) = 0
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000007 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000008 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1984]      0.000008 <... futex resumed>) = 0
[pid 438303]      0.000005 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000016 getpid( <unfinished ...>
[pid  1844]      0.000005 sched_yield( <unfinished ...>
[pid  1985]      0.000006 <... futex resumed>) = 0
[pid 438303]      0.000009 sched_yield( <unfinished ...>
[pid  1984]      0.000004 <... getpid resumed>) = 1660
[pid  1844]      0.000003 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 <... sched_yield resumed>) = 0
[pid  1984]      0.000003 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000005 sched_yield( <unfinished ...>
[pid 438303]      0.000009 futex(0xc000601538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000005 <... tgkill resumed>) = 0
[pid  1844]      0.000003 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000008 futex(0xc000601538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000004 <... sched_yield resumed>) = 0
[pid  1984]      0.000005 <... futex resumed>) = 1
[pid  1844]      0.000003 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 438303]      0.000007 <... futex resumed>) = 0
[pid  1984]      0.000003 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1985]      0.000008 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000007 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000005 <... futex resumed>) = 0
[pid  1844]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000013 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000006 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000014 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000030 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000019 <... futex resumed>) = 0
[pid  1844]      0.000007 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000007 sched_yield( <unfinished ...>
[pid  1984]      0.000009 <... futex resumed>) = 0
[pid  1844]      0.000004 <... futex resumed>) = 1
[pid  1984]      0.000007 sched_yield( <unfinished ...>
[pid  1985]      0.000004 <... sched_yield resumed>) = 0
[pid  1984]      0.000004 <... sched_yield resumed>) = 0
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000009 getpid( <unfinished ...>
[pid  1844]      0.000007 sched_yield() = 0
[pid  1844]      0.000026 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000035 <... getpid resumed>) = 1660
[pid  1984]      0.000013 tgkill(1660, 1844, SIGURG) = 0
[pid  1844]      0.000023 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1984]      0.000006 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000006 <... futex resumed>) = 0
[pid  1844]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000011 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1844]      0.000009 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000012 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000026 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000016 <... futex resumed>) = 0
[pid  1844]      0.000008 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000008 sched_yield( <unfinished ...>
[pid  1984]      0.000007 <... futex resumed>) = 0
[pid  1844]      0.000003 <... futex resumed>) = 1
[pid  1985]      0.000006 <... sched_yield resumed>) = 0
[pid  1984]      0.000005 sched_yield( <unfinished ...>
[pid  1985]      0.000009 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000009 <... sched_yield resumed>) = 0
[pid  1984]      0.000015 getpid( <unfinished ...>
[pid  1844]      0.000006 sched_yield( <unfinished ...>
[pid  1984]      0.000008 <... getpid resumed>) = 1660
[pid  1844]      0.000006 <... sched_yield resumed>) = 0
[pid  1984]      0.000006 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1844]      0.000007 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000007 <... tgkill resumed>) = 0
[pid  1844]      0.000005 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1984]      0.000012 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000005 <... futex resumed>) = 0
[pid  1844]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000012 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1844]      0.000010 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000012 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000026 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000014 <... futex resumed>) = 0
[pid  1844]      0.000003 <... futex resumed>) = 1
[pid  1984]      0.000013 sched_yield( <unfinished ...>
[pid  1844]      0.000005 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000008 <... sched_yield resumed>) = 0
[pid  1984]      0.000023 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1984]      0.000026 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000015 <... futex resumed>) = 0
[pid  1844]      0.000015 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000016 <... futex resumed>) = 0
[pid  1984]      0.000024 getpid( <unfinished ...>
[pid  1844]      0.000005 sched_yield( <unfinished ...>
[pid  1985]      0.000007 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000008 <... getpid resumed>) = 1660
[pid  1844]      0.000003 <... sched_yield resumed>) = 0
[pid 438303]      0.000007 <... futex resumed>) = 0
[pid  1984]      0.000005 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000005 <... futex resumed>) = 1
[pid  1984]      0.000006 <... tgkill resumed>) = 0
[pid  1844]      0.000003 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 438303]      0.000009 sched_yield( <unfinished ...>
[pid  1985]      0.000005 sched_yield( <unfinished ...>
[pid 438303]      0.000008 <... sched_yield resumed>) = 0
[pid  1984]      0.000003 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1844]      0.000008 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 438303]      0.000007 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000006 <... sched_yield resumed>) = 0
[pid 438303]      0.000005 <... futex resumed>) = 0
[pid  1844]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000007 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid 438303]      0.000009 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1844]      0.000009 rt_sigreturn({mask=[]}) = 202
[pid  1844]      0.000026 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000026 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 <... nanosleep resumed>NULL) = 0
[pid 438303]      0.000007 <... nanosleep resumed>NULL) = 0
[pid  1984]      0.000003 <... futex resumed>) = 0
[pid  1844]      0.000003 <... futex resumed>) = 1
[pid 438303]      0.000005 sched_yield( <unfinished ...>
[pid  1984]      0.000008 sched_yield( <unfinished ...>
[pid 438303]      0.000010 <... sched_yield resumed>) = 0
[pid  1984]      0.000006 <... sched_yield resumed>) = 0
[pid 438303]      0.000006 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000009 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.002544 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.003792 <... epoll_pwait resumed>[], 128, 71, NULL, 0) = 0
[pid 1488380]      0.000025 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000043 epoll_pwait(5,  <unfinished ...>
[pid  1767]      0.000666 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000025 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000026 <... futex resumed>) = 0
[pid  1767]      0.000009 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1985]      0.000015 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000024 <... futex resumed>) = 0
[pid  1985]      0.000006 <... futex resumed>) = 1
[pid  1984]      0.000014 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000063 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488380]      0.000224 <... epoll_pwait resumed>[], 128, 1, NULL, 0) = 0
[pid 1488380]      0.000024 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid 1488380]      0.000033 epoll_pwait(5,  <unfinished ...>
[pid  1767]      0.009690 <... nanosleep resumed>NULL) = 0
[pid  1844]      0.000024 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid  1844]      0.000008 <... futex resumed>) = 1
[pid  1767]      0.000006 <... getpid resumed>) = 1660
[pid  1985]      0.000006 <... futex resumed>) = 0
[pid  1767]      0.000008 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000011 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000017 <... tgkill resumed>) = 0
[pid  1844]      0.000002 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000008 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000019 rt_sigreturn({mask=[]}) = 112
[pid  1767]      0.010072 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000029 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1844]      0.010078 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000006 getpid( <unfinished ...>
[pid  1844]      0.000016 <... futex resumed>) = 1
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1985]      0.000004 <... futex resumed>) = 0
[pid  1767]      0.000012 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000019 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000004 <... tgkill resumed>) = 0
[pid  1844]      0.000018 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000011 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000013 <... rt_sigreturn resumed>) = 124131332934992
[pid  1767]      0.010082 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000025 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1844]      0.010131 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000010 getpid( <unfinished ...>
[pid  1844]      0.000010 <... futex resumed>) = 1
[pid  1767]      0.000007 <... getpid resumed>) = 1660
[pid  1985]      0.000004 <... futex resumed>) = 0
[pid  1767]      0.000007 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000014 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000018 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000008 <... tgkill resumed>) = 0
[pid  1844]      0.000022 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000018 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000015 <... rt_sigreturn resumed>) = 1392102210
[pid  1767]      0.010099 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000044 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1844]      0.000872 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1844]      0.000049 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000026 <... futex resumed>) = 0
[pid  1985]      0.000024 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1984]      0.000028 <... futex resumed>) = 0
[pid  1984]      0.000022 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 438303]      0.000026 <... futex resumed>) = 0
[pid  1844]      0.000009 getpid( <unfinished ...>
[pid 438303]      0.000019 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000008 <... getpid resumed>) = 1660
[pid 438303]      0.000008 <... futex resumed>) = 1
[pid 1488719]      0.000015 <... futex resumed>) = 0
[pid  1844]      0.000005 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid 1488719]      0.000028 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000006 <... tgkill resumed>) = 0
[pid 1488719]      0.000010 <... futex resumed>) = 1
[pid  1985]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000012 <... futex resumed>) = 0
[pid  1769]      0.000025 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000023 <... futex resumed>) = 0
[pid  1769]      0.000006 <... futex resumed>) = 1
[pid  1985]      0.000009 <... rt_sigreturn resumed>) = 55775511
[pid  1845]      0.000010 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000039 <... futex resumed>) = 0
[pid  1986]      0.000059 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000028 <... futex resumed>) = 0
[pid  1986]      0.000061 getpid( <unfinished ...>
[pid  1847]      0.000011 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000011 <... getpid resumed>) = 1660
[pid  1986]      0.000018 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1847]      0.000007 <... futex resumed>) = 1
[pid  1986]      0.000016 <... tgkill resumed>) = 0
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid  1844]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000027 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1508128]      0.000029 <... futex resumed>) = 0
[pid 1508128]      0.000758 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1988]      0.003005 <... futex resumed>) = 0
[pid  1844]      0.000018 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000305 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 438303]      0.000009 getpid( <unfinished ...>
[pid  1988]      0.000009 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000009 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1984]      0.000006 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000004 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000004 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000005 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000006 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000004 <... rt_sigreturn resumed>) = 824686113352
[pid  1769]      0.000004 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000008 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000007 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid 438303]      0.000010 <... getpid resumed>) = 1660
[pid  1986]      0.000004 <... futex resumed>) = 0
[pid 1508128]      0.000009 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 438303]      0.000005 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid 1508128]      0.000010 <... futex resumed>) = 1
[pid  1984]      0.000008 <... futex resumed>) = 0
[pid 438303]      0.000006 <... tgkill resumed>) = 0
[pid  1986]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000009 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000014 <... futex resumed>) = 1
[pid  1847]      0.000005 <... futex resumed>) = 0
[pid  1986]      0.000006 <... rt_sigreturn resumed>) = 824634236496
[pid  1847]      0.000009 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000023 <... futex resumed>) = 0
[pid  1847]      0.000006 <... futex resumed>) = 1
[pid  1849]      0.000015 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000029 <... futex resumed>) = 0
[pid  1845]      0.000020 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000009 getpid( <unfinished ...>
[pid  1845]      0.000008 <... futex resumed>) = 1
[pid 1508128]      0.000013 <... getpid resumed>) = 1660
[pid 438303]      0.000005 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000005 getpid( <unfinished ...>
[pid  1986]      0.000005 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000004 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000006 <... futex resumed>) = 0
[pid 1508128]      0.000008 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1849]      0.000005 <... getpid resumed>) = 1660
[pid  1847]      0.000005 getpid( <unfinished ...>
[pid  1845]      0.000006 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000010 <... tgkill resumed>) = 0
[pid  1849]      0.000003 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid  1847]      0.000005 <... getpid resumed>) = 1660
[pid  1844]      0.000005 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1845]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1769]      0.000007 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000012 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000005 <... tgkill resumed>) = 0
[pid  1847]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000004 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000010 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000008 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000010 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1847]      0.000004 <... rt_sigreturn resumed>) = 1660
[pid  1844]      0.000003 <... rt_sigreturn resumed>) = 202
[pid  1769]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000008 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000004 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1844]      0.000005 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000009 <... tgkill resumed>) = 0
[pid  1769]      0.000003 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000005 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1984]      0.000007 sched_yield( <unfinished ...>
[pid  1847]      0.000004 getpid( <unfinished ...>
[pid 1508128]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000003 <... sched_yield resumed>) = 0
[pid  1847]      0.000003 <... getpid resumed>) = 1660
[pid 1508128]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000007 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1508128]      0.000006 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000003 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid 1508128]      0.000007 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000007 <... tgkill resumed>) = 0
[pid  1984]      0.000003 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1984]      0.000013 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000004 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000022 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000007 <... futex resumed>) = 0
[pid  1984]      0.000006 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000004 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1984]      0.000010 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1984]      0.000025 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000016 <... futex resumed>) = 0
[pid  1984]      0.000010 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000006 sched_yield( <unfinished ...>
[pid  1984]      0.000007 <... futex resumed>) = 1
[pid  1847]      0.000004 <... futex resumed>) = 0
[pid  1769]      0.000004 <... sched_yield resumed>) = 0
[pid  1847]      0.000004 getpid( <unfinished ...>
[pid  1984]      0.000007 sched_yield( <unfinished ...>
[pid  1769]      0.000005 futex(0xc00009bd38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1984]      0.000007 <... sched_yield resumed>) = 0
[pid  1847]      0.000003 <... getpid resumed>) = 1660
[pid  1984]      0.000005 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000006 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1847]      0.000003 <... tgkill resumed>) = 0
[pid  1984]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000007 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000010 <... futex resumed>) = 0
[pid  1984]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000006 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1984]      0.000008 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1984]      0.000023 futex(0xc00009bd38, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000015 <... futex resumed>) = 0
[pid  1769]      0.000016 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000016 <... futex resumed>) = 0
[pid  1769]      0.000003 <... futex resumed>) = 1
[pid  1847]      0.000011 sched_yield( <unfinished ...>
[pid  1769]      0.000004 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000007 <... sched_yield resumed>) = 0
[pid  1984]      0.000012 sched_yield( <unfinished ...>
[pid  1847]      0.000005 getpid( <unfinished ...>
[pid  1984]      0.000007 <... sched_yield resumed>) = 0
[pid  1847]      0.000004 <... getpid resumed>) = 1660
[pid  1984]      0.000004 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000007 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1847]      0.000003 <... tgkill resumed>) = 0
[pid  1984]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000005 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000008 <... futex resumed>) = 0
[pid  1984]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000005 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1984]      0.000009 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1984]      0.000024 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000016 <... futex resumed>) = 0
[pid  1984]      0.000005 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000021 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1847]      0.000026 futex(0xc00026a958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000013 <... futex resumed>) = 0
[pid  1847]      0.000003 <... futex resumed>) = 1
[pid  1984]      0.000010 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000016 <... futex resumed>) = 0
[pid  1769]      0.000019 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid  1984]      0.000010 sched_yield( <unfinished ...>
[pid  1847]      0.000004 getpid( <unfinished ...>
[pid  1984]      0.000005 <... sched_yield resumed>) = 0
[pid  1847]      0.000005 <... getpid resumed>) = 1660
[pid  1984]      0.000005 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000006 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000014 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1847]      0.000003 <... tgkill resumed>) = 0
[pid  1984]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1984]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000008 <... nanosleep resumed>NULL) = 0
[pid  1847]      0.000004 futex(0xc00026ad38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1769]      0.000003 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000007 futex(0xc00026ad38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000004 <... futex resumed>) = 0
[pid  1984]      0.000005 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000004 <... futex resumed>) = 0
[pid  1769]      0.000003 <... futex resumed>) = 1
[pid  1849]      0.000007 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000}) = -1 ETIMEDOUT (Connection timed out)
[pid  1984]      0.000181 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000005 getpid( <unfinished ...>
[pid  1984]      0.000008 <... futex resumed>) = 1
[pid  1849]      0.000003 <... futex resumed>) = 0
[pid  1847]      0.000005 <... getpid resumed>) = 1660
[pid  1849]      0.000010 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000005 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000016 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000004 <... tgkill resumed>) = 0
[pid  1984]      0.000011 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000007 getpid( <unfinished ...>
[pid  1769]      0.000011 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000007 <... rt_sigreturn resumed>) = 0
[pid  1847]      0.000003 <... getpid resumed>) = 1660
[pid  1849]      0.000005 <... futex resumed>) = 0
[pid  1769]      0.000003 <... futex resumed>) = 1
[pid  1849]      0.000006 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000005 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid  1849]      0.000009 <... futex resumed>) = 1
[pid  1845]      0.000003 <... futex resumed>) = 0
[pid  1769]      0.000003 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000006 <... tgkill resumed>) = 0
[pid  1845]      0.000005 sched_yield( <unfinished ...>
[pid  1769]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000006 sched_yield( <unfinished ...>
[pid  1847]      0.000004 getpid( <unfinished ...>
[pid  1845]      0.000005 <... sched_yield resumed>) = 0
[pid  1849]      0.000008 <... sched_yield resumed>) = 0
[pid  1847]      0.000003 <... getpid resumed>) = 1660
[pid  1769]      0.000002 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000006 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000004 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid  1845]      0.000006 futex(0xc000480538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000007 <... tgkill resumed>) = 0
[pid  1769]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000009 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1847]      0.000003 sched_yield( <unfinished ...>
[pid  1849]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000003 <... rt_sigreturn resumed>) = 0
[pid  1847]      0.000003 <... sched_yield resumed>) = 0
[pid  1849]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000006 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1847]      0.000003 futex(0xc000480538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000006 futex(0xc000680538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1847]      0.000007 <... futex resumed>) = 1
[pid  1845]      0.000003 <... futex resumed>) = 0
[pid  1847]      0.000011 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000005 futex(0xc000680538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000015 <... futex resumed>) = 0
[pid  1845]      0.000003 <... futex resumed>) = 1
[pid  1845]      0.000011 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.002004 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000532 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000018 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000020 <... futex resumed>) = 0
[pid  1767]      0.000004 <... futex resumed>) = 1
[pid  1849]      0.000016 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1984]      0.010148 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000010 getpid( <unfinished ...>
[pid  1984]      0.000011 <... futex resumed>) = 1
[pid  1849]      0.000005 <... futex resumed>) = 0
[pid  1767]      0.000009 <... getpid resumed>) = 1660
[pid  1849]      0.000010 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000012 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000027 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000008 <... tgkill resumed>) = 0
[pid  1984]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000015 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1984]      0.000015 <... rt_sigreturn resumed>) = 824636254216
[pid  1767]      0.010092 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000022 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1984]      0.010113 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid  1984]      0.000016 <... futex resumed>) = 1
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid  1767]      0.000007 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000024 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000006 <... tgkill resumed>) = 0
[pid  1984]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000013 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1984]      0.000011 <... rt_sigreturn resumed>) = 824724767184
[pid 1488380]      0.000698 <... epoll_pwait resumed>[], 128, 102, NULL, 0) = 0
[pid 1488380]      0.000028 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000027 <... futex resumed>) = 0
[pid  1849]      0.000025 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000030 <... futex resumed>) = 0
[pid  1845]      0.000032 epoll_pwait(5,  <unfinished ...>
[pid 1488380]      0.000025 epoll_pwait(5,  <unfinished ...>
[pid  1845]      0.000008 <... epoll_pwait resumed>[], 128, 0, NULL, 0) = 0
[pid  1849]      0.000008 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1845]      0.000016 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.009175 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000021 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid  1984]      0.010124 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000014 getpid( <unfinished ...>
[pid  1984]      0.000015 <... futex resumed>) = 1
[pid  1845]      0.000020 <... futex resumed>) = 0
[pid  1767]      0.000004 <... getpid resumed>) = 1660
[pid  1845]      0.000020 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000007 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid  1984]      0.000024 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000006 <... tgkill resumed>) = 0
[pid  1984]      0.000015 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000012 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1984]      0.000010 <... rt_sigreturn resumed>) = 824652103600
[pid  1767]      0.010081 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000044 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1984]      0.005726 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1984]      0.000043 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1845]      0.000025 <... futex resumed>) = 0
[pid  1845]      0.000024 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1849]      0.000039 <... futex resumed>) = 0
[pid  1849]      0.000021 futex(0xc000580158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1847]      0.000048 <... futex resumed>) = 0
[pid  1847]      0.000020 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000028 <... futex resumed>) = 0
[pid  1769]      0.000022 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000042 <... futex resumed>) = 0
[pid  1769]      0.000007 <... futex resumed>) = 1
[pid 1508128]      0.000016 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1986]      0.000032 <... futex resumed>) = 0
[pid  1986]      0.000026 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000036 <... futex resumed>) = 0
[pid 1508128]      0.000028 getpid( <unfinished ...>
[pid  1844]      0.000008 futex(0xc000601158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000014 <... getpid resumed>) = 1660
[pid 438303]      0.000012 <... futex resumed>) = 0
[pid  1844]      0.000012 <... futex resumed>) = 1
[pid 1508128]      0.000011 tgkill(1660, 1984, SIGURG <unfinished ...>
[pid 438303]      0.000010 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000017 <... tgkill resumed>) = 0
[pid  1984]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000013 <... futex resumed>) = 1
[pid  1988]      0.000010 <... futex resumed>) = 0
[pid  1984]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1988]      0.000078 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1984]      0.000016 <... rt_sigreturn resumed>) = 824655251872
[pid  1988]      0.000009 <... futex resumed>) = 1
[pid  1985]      0.000622 <... futex resumed>) = 0
[pid  1985]      0.000023 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid 1488719]      0.001988 <... futex resumed>) = 0
[pid 438303]      0.001197 getpid( <unfinished ...>
[pid  1988]      0.000011 getpid( <unfinished ...>
[pid  1849]      0.000009 getpid( <unfinished ...>
[pid  1845]      0.000007 getpid( <unfinished ...>
[pid  1769]      0.000007 getpid( <unfinished ...>
[pid  1985]      0.000008 getpid( <unfinished ...>
[pid 438303]      0.000011 <... getpid resumed>) = 1660
[pid  1988]      0.000004 <... getpid resumed>) = 1660
[pid  1849]      0.000004 <... getpid resumed>) = 1660
[pid  1845]      0.000007 <... getpid resumed>) = 1660
[pid  1769]      0.000004 <... getpid resumed>) = 1660
[pid  1985]      0.000008 <... getpid resumed>) = 1660
[pid 438303]      0.000011 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1988]      0.000008 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid  1849]      0.000011 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid  1845]      0.000009 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid 1508128]      0.000033 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 438303]      0.000008 <... tgkill resumed>) = 0
[pid  1988]      0.000005 <... tgkill resumed>) = 0
[pid  1986]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000006 <... tgkill resumed>) = 0
[pid  1845]      0.000005 <... tgkill resumed>) = 0
[pid  1844]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000006 tgkill(1660, 1845, SIGURG <unfinished ...>
[pid  1767]      0.000009 <... nanosleep resumed>NULL) = 0
[pid  1985]      0.000011 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1508128]      0.000024 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000021 getpid( <unfinished ...>
[pid 438303]      0.000006 futex(0xc000601158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1988]      0.000009 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1984]      0.000010 futex(0xc00026a958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000007 getpid( <unfinished ...>
[pid  1845]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000009 <... tgkill resumed>) = 0
[pid  1767]      0.000005 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1985]      0.000012 <... tgkill resumed>) = 0
[pid 1508128]      0.000013 <... rt_sigreturn resumed>) = 824634217040
[pid 1488719]      0.000004 <... getpid resumed>) = 1660
[pid  1986]      0.000003 <... rt_sigreturn resumed>) = 824677179824
[pid  1849]      0.000006 getpid( <unfinished ...>
[pid  1847]      0.000007 <... getpid resumed>) = 1660
[pid  1845]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000010 <... rt_sigreturn resumed>) = 124131338273184
[pid  1769]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000014 getpid( <unfinished ...>
[pid 1488719]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000005 <... getpid resumed>) = 1660
[pid  1847]      0.000005 tgkill(1660, 1985, SIGURG <unfinished ...>
[pid  1845]      0.000007 <... rt_sigreturn resumed>) = 13896144814353993521
[pid  1769]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000010 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1508128]      0.000015 <... getpid resumed>) = 1660
[pid 1488719]      0.000004 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1849]      0.000011 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1847]      0.000007 <... tgkill resumed>) = 0
[pid  1845]      0.000005 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000007 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000007 <... rt_sigreturn resumed>) = 0
[pid  1985]      0.000005 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1508128]      0.000014 tgkill(1660, 1849, SIGURG <unfinished ...>
[pid 1488719]      0.000007 <... rt_sigreturn resumed>) = 1660
[pid  1849]      0.000004 <... tgkill resumed>) = 0
[pid  1847]      0.000005 getpid( <unfinished ...>
[pid  1844]      0.000006 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1769]      0.000005 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1508128]      0.000017 <... tgkill resumed>) = 0
[pid 1488719]      0.000005 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid  1849]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000005 <... getpid resumed>) = 1660
[pid  1845]      0.000005 <... futex resumed>) = 0
[pid  1844]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000006 <... futex resumed>) = 1
[pid  1985]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1508128]      0.000018 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000007 <... tgkill resumed>) = 0
[pid  1849]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1847]      0.000009 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1845]      0.000006 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000009 getpid( <unfinished ...>
[pid  1985]      0.000006 <... rt_sigreturn resumed>) = 202
[pid 1488719]      0.000013 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1849]      0.000007 <... rt_sigreturn resumed>) = 0
[pid  1847]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000011 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1844]      0.000011 <... rt_sigreturn resumed>) = 202
[pid  1769]      0.000005 <... getpid resumed>) = 1660
[pid  1985]      0.000005 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000038 <... futex resumed>) = 0
[pid  1849]      0.000005 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 <... rt_sigreturn resumed>) = 1660
[pid  1845]      0.000003 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000007 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000010 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1847]      0.000006 tgkill(1660, 1508128, SIGURG <unfinished ...>
[pid 1488719]      0.000009 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1769]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000008 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid 1488719]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1847]      0.000005 <... tgkill resumed>) = 0
[pid 1508128]      0.000009 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid 1488719]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1986]      0.000013 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000007 getpid( <unfinished ...>
[pid 1508128]      0.000010 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000011 <... rt_sigreturn resumed>) = 202
[pid  1986]      0.000005 <... futex resumed>) = 0
[pid 1508128]      0.000008 <... rt_sigreturn resumed>) = 202
[pid 1488719]      0.000004 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000008 <... getpid resumed>) = 1660
[pid 1508128]      0.000008 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000008 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1986]      0.000007 getpid( <unfinished ...>
[pid 1488719]      0.000009 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000007 tgkill(1660, 1986, SIGURG <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = 1
[pid  1986]      0.000005 <... getpid resumed>) = 1660
[pid  1845]      0.000004 <... futex resumed>) = 0
[pid  1986]      0.000010 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000007 <... tgkill resumed>) = 0
[pid  1986]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1845]      0.000009 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1986]      0.000009 <... rt_sigreturn resumed>) = 1660
[pid  1769]      0.000004 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000010 tgkill(1660, 1847, SIGURG <unfinished ...>
[pid  1849]      0.000006 <... futex resumed>) = 0
[pid  1845]      0.000006 <... futex resumed>) = 1
[pid  1986]      0.000007 <... tgkill resumed>) = 0
[pid  1849]      0.000004 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1849]      0.000010 <... futex resumed>) = 1
[pid  1845]      0.000003 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000006 <... futex resumed>) = 0
[pid  1847]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000013 futex(0xc000480158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1847]      0.000009 <... rt_sigreturn resumed>) = 824683665760
[pid  1845]      0.000007 <... futex resumed>) = 0
[pid  1769]      0.000004 <... futex resumed>) = 1
[pid  1845]      0.000008 futex(0xc002143958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1508128]      0.000020 <... futex resumed>) = 0
[pid  1845]      0.000006 <... futex resumed>) = 1
[pid 1508128]      0.000013 futex(0xc00026a158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000025 <... futex resumed>) = 0
[pid  1844]      0.000022 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000025 <... futex resumed>) = 0
[pid  1985]      0.000020 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1988]      0.000028 <... futex resumed>) = 0
[pid  1985]      0.000010 <... futex resumed>) = 1
[pid  1988]      0.000016 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000008 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000005 getpid( <unfinished ...>
[pid  1845]      0.000006 futex(0xc000480158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000005 futex(0xc000600958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000005 getpid( <unfinished ...>
[pid 1488719]      0.000010 <... futex resumed>) = 0
[pid  1986]      0.000003 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1849]      0.000007 <... getpid resumed>) = 1660
[pid 1488719]      0.000007 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000006 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000007 <... getpid resumed>) = 1660
[pid 1488719]      0.000007 <... futex resumed>) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1986]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000005 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid 1488719]      0.000011 futex(0xc000680958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1985]      0.000009 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = 1
[pid  1988]      0.000004 <... futex resumed>) = 0
[pid  1849]      0.000005 <... tgkill resumed>) = 0
[pid  1847]      0.000005 futex(0xc000580158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1985]      0.000004 <... tgkill resumed>) = 0
[pid 1508128]      0.000008 futex(0xc002143958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1988]      0.000004 futex(0xc000680958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1986]      0.000007 futex(0xc000600958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid 1488719]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000007 <... rt_sigreturn resumed>) = 1
[pid  1844]      0.000003 <... rt_sigreturn resumed>) = 36920
[pid 1488719]      0.000013 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000016 getpid( <unfinished ...>
[pid  1769]      0.000005 sched_yield( <unfinished ...>
[pid  1844]      0.000006 <... getpid resumed>) = 1660
[pid  1769]      0.000004 <... sched_yield resumed>) = 0
[pid  1844]      0.000005 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid  1769]      0.000006 futex(0xc00009bd38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000007 <... tgkill resumed>) = 0
[pid  1769]      0.000004 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1844]      0.000005 futex(0xc00009bd38, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000007 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000005 <... futex resumed>) = 0
[pid  1769]      0.000005 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid  1769]      0.000010 <... rt_sigreturn resumed>) = 202
[pid  1769]      0.000015 futex(0xc00009bd38, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid  1769]      0.000035 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000031 <... futex resumed>) = 0
[pid  1769]      0.000004 <... futex resumed>) = 1
[pid 1488719]      0.000006 futex(0xc000680158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000008 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000010 <... futex resumed>) = 1
[pid  1849]      0.000003 <... futex resumed>) = 0
[pid  1844]      0.000007 <... futex resumed>) = 0
[pid  1769]      0.000005 <... futex resumed>) = 1
[pid  1849]      0.000005 sched_yield( <unfinished ...>
[pid  1844]      0.000008 sched_yield( <unfinished ...>
[pid  1849]      0.000008 <... sched_yield resumed>) = 0
[pid  1769]      0.000004 getpid( <unfinished ...>
[pid  1849]      0.000009 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000006 <... sched_yield resumed>) = 0
[pid  1849]      0.000007 <... futex resumed>) = 1
[pid  1769]      0.000004 <... getpid resumed>) = 1660
[pid  1985]      0.000007 <... futex resumed>) = 0
[pid  1849]      0.000006 futex(0xc000680158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.000006 tgkill(1660, 1844, SIGURG <unfinished ...>
[pid  1985]      0.000007 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000008 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000004 <... tgkill resumed>) = 0
[pid  1844]      0.000010 rt_sigreturn({mask=[]}) = 30952
[pid  1769]      0.000064 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid 1488719]      0.000034 sched_yield( <unfinished ...>
[pid  1844]      0.000004 getpid( <unfinished ...>
[pid 1488719]      0.000005 <... sched_yield resumed>) = 0
[pid  1844]      0.000004 <... getpid resumed>) = 1660
[pid 1488719]      0.000004 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000007 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1844]      0.000003 <... tgkill resumed>) = 0
[pid 1488719]      0.000004 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000005 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000006 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000009 <... futex resumed>) = 0
[pid 1488719]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000009 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000025 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000015 <... futex resumed>) = 0
[pid 1488719]      0.000012 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000005 sched_yield( <unfinished ...>
[pid 1488719]      0.000007 <... futex resumed>) = 1
[pid  1844]      0.000003 <... futex resumed>) = 0
[pid  1769]      0.000005 <... sched_yield resumed>) = 0
[pid  1844]      0.000004 getpid( <unfinished ...>
[pid 1488719]      0.000007 sched_yield( <unfinished ...>
[pid  1769]      0.000005 futex(0xc00009bd38, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid 1488719]      0.000007 <... sched_yield resumed>) = 0
[pid  1844]      0.000003 <... getpid resumed>) = 1660
[pid 1488719]      0.000005 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000016 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1844]      0.000003 <... tgkill resumed>) = 0
[pid 1488719]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000005 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 <... futex resumed>) = 0
[pid 1488719]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000005 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000008 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000023 futex(0xc00009bd38, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000015 <... futex resumed>) = 0
[pid  1769]      0.000013 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000014 <... futex resumed>) = 0
[pid  1769]      0.000003 <... futex resumed>) = 1
[pid  1844]      0.000010 sched_yield( <unfinished ...>
[pid  1769]      0.000005 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000006 <... sched_yield resumed>) = 0
[pid 1488719]      0.000012 sched_yield( <unfinished ...>
[pid  1844]      0.000005 getpid( <unfinished ...>
[pid 1488719]      0.000006 <... sched_yield resumed>) = 0
[pid  1844]      0.000005 <... getpid resumed>) = 1660
[pid 1488719]      0.000004 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1844]      0.000003 <... tgkill resumed>) = 0
[pid 1488719]      0.000005 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000005 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000007 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 <... futex resumed>) = 0
[pid 1488719]      0.000004 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000005 futex(0x5ee9480, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000008 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL) = -1 EAGAIN (Resource temporarily unavailable)
[pid 1488719]      0.000023 futex(0x5ee9480, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1844]      0.000014 <... futex resumed>) = 0
[pid 1488719]      0.000004 futex(0xc002143158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000020 epoll_pwait(5, [], 128, 0, NULL, 0) = 0
[pid  1844]      0.000029 futex(0xc002143158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000014 <... futex resumed>) = 0
[pid  1844]      0.000003 <... futex resumed>) = 1
[pid 1488719]      0.000009 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1769]      0.000015 <... futex resumed>) = 0
[pid  1769]      0.000015 nanosleep({tv_sec=0, tv_nsec=3000},  <unfinished ...>
[pid 1488719]      0.000016 sched_yield( <unfinished ...>
[pid  1844]      0.000004 getpid( <unfinished ...>
[pid 1488719]      0.000005 <... sched_yield resumed>) = 0
[pid  1844]      0.000005 <... getpid resumed>) = 1660
[pid 1488719]      0.000004 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1844]      0.000007 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000014 <... futex resumed>) = ? ERESTARTSYS (To be restarted if SA_RESTART is set)
[pid  1844]      0.000003 <... tgkill resumed>) = 0
[pid 1488719]      0.000006 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1769]      0.000004 <... nanosleep resumed>NULL) = 0
[pid 1488719]      0.000016 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1769]      0.000007 sched_yield( <unfinished ...>
[pid 1488719]      0.000007 <... rt_sigreturn resumed>) = 202
[pid  1844]      0.000003 futex(0x5ee94a8, FUTEX_WAIT_PRIVATE, 0, {tv_sec=0, tv_nsec=100000} <unfinished ...>
[pid 1488719]      0.000009 futex(0xc002143538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1769]      0.000005 <... sched_yield resumed>) = 0
[pid  1769]      0.000013 futex(0xc002143538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000015 <... futex resumed>) = 0
[pid  1769]      0.000003 <... futex resumed>) = 1
[pid  1769]      0.000011 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000016 <... futex resumed>) = 0
[pid  1985]      0.000013 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000080 <... futex resumed>) = -1 ETIMEDOUT (Connection timed out)
[pid 1488719]      0.000014 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000005 getpid( <unfinished ...>
[pid 1488719]      0.000007 <... futex resumed>) = 1
[pid  1985]      0.000003 <... futex resumed>) = 0
[pid  1844]      0.000005 <... getpid resumed>) = 1660
[pid  1985]      0.000005 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1844]      0.000006 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000014 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000004 <... tgkill resumed>) = 0
[pid 1488719]      0.000012 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1844]      0.000008 getpid( <unfinished ...>
[pid  1769]      0.000006 futex(0xc0002b5158, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid 1488719]      0.000008 <... rt_sigreturn resumed>) = 0
[pid  1844]      0.000006 <... getpid resumed>) = 1660
[pid  1769]      0.000005 <... futex resumed>) = 1
[pid  1985]      0.000003 <... futex resumed>) = 0
[pid  1844]      0.000007 tgkill(1660, 1769, SIGURG <unfinished ...>
[pid  1769]      0.000006 futex(0x5ee94a8, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000007 <... tgkill resumed>) = 0
[pid  1985]      0.000003 sched_yield( <unfinished ...>
[pid  1769]      0.000006 <... futex resumed>) = 0
[pid  1844]      0.000005 sched_yield( <unfinished ...>
[pid  1985]      0.000004 <... sched_yield resumed>) = 0
[pid  1844]      0.000006 <... sched_yield resumed>) = 0
[pid  1769]      0.000003 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1844]      0.000006 futex(0xc00026a538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1985]      0.000004 futex(0xc0002b5538, FUTEX_WAIT_PRIVATE, 4294967295, NULL <unfinished ...>
[pid  1769]      0.000006 rt_sigreturn({mask=[]}) = 0
[pid  1769]      0.000027 futex(0xc0002b5538, FUTEX_WAKE_PRIVATE, 1) = 1
[pid  1985]      0.000016 <... futex resumed>) = 0
[pid  1985]      0.000011 futex(0xc00026a538, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1844]      0.000014 <... futex resumed>) = 0
[pid  1985]      0.000003 <... futex resumed>) = 1
[pid  1844]      0.000012 futex(0xc00026a158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1985]      0.000005 futex(0xc0002b5158, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1769]      0.002281 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.004907 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000019 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1769]      0.000024 <... futex resumed>) = 0
[pid  1767]      0.000007 <... futex resumed>) = 1
[pid  1769]      0.000018 sched_yield( <unfinished ...>
[pid  1767]      0.000011 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid  1769]      0.000016 <... sched_yield resumed>) = 0
[pid  1769]      0.000025 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.010050 <... nanosleep resumed>NULL) = 0
[pid 1488719]      0.000024 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000007 getpid( <unfinished ...>
[pid 1488719]      0.000019 <... futex resumed>) = 1
[pid  1769]      0.000007 <... futex resumed>) = 0
[pid  1767]      0.000007 <... getpid resumed>) = 1660
[pid  1769]      0.000020 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000012 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000028 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000008 <... tgkill resumed>) = 0
[pid 1488719]      0.000009 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000028 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000016 <... rt_sigreturn resumed>) = 1650327074
[pid  1767]      0.010085 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000025 nanosleep({tv_sec=0, tv_nsec=10000000}, NULL) = 0
[pid 1488719]      0.010109 futex(0xc00009b958, FUTEX_WAKE_PRIVATE, 1 <unfinished ...>
[pid  1767]      0.000008 getpid( <unfinished ...>
[pid 1488719]      0.000008 <... futex resumed>) = 1
[pid  1769]      0.000009 <... futex resumed>) = 0
[pid  1767]      0.000006 <... getpid resumed>) = 1660
[pid  1769]      0.000011 futex(0xc00009b958, FUTEX_WAIT_PRIVATE, 0, NULL <unfinished ...>
[pid  1767]      0.000013 tgkill(1660, 1488719, SIGURG <unfinished ...>
[pid 1488719]      0.000030 --- SIGURG {si_signo=SIGURG, si_code=SI_TKILL, si_pid=1660, si_uid=129} ---
[pid  1767]      0.000007 <... tgkill resumed>) = 0
[pid 1488719]      0.000008 rt_sigreturn({mask=[]} <unfinished ...>
[pid  1767]      0.000017 nanosleep({tv_sec=0, tv_nsec=10000000},  <unfinished ...>
[pid 1488719]      0.000015 <... rt_sigreturn resumed>) = 1697086511
[pid  1767]      0.010074 <... nanosleep resumed>NULL) = 0
[pid  1767]      0.000026 nanosleep({tv_sec=0, tv_nsec=10000000}, ^Cstrace: Process 1488719 detached
strace: Process 1508128 detached
strace: Process 1488380 detached
strace: Process 438303 detached
strace: Process 1990 detached
strace: Process 1988 detached
strace: Process 1986 detached
strace: Process 1984 detached
strace: Process 1848 detached
strace: Process 1847 detached
strace: Process 1846 detached
strace: Process 1845 detached
strace: Process 1844 detached
strace: Process 1772 detached
strace: Process 1770 detached
strace: Process 1769 detached
strace: Process 1768 detached
strace: Process 1767 detached
 <detached ...>
strace: Process 1660 detached
strace: Process 1985 detached
strace: Process 1849 detached
```

```
 ~ % egrep 'Mem|Swap|Active|Inactive|Dirty|Writeback' /proc/meminfo

MemTotal:       15704036 kB
MemFree:          834132 kB
MemAvailable:    5221000 kB
SwapCached:        71480 kB
Active:          4350524 kB
Inactive:        6189476 kB
Active(anon):    3542640 kB
Inactive(anon):  3128900 kB
Active(file):     807884 kB
Inactive(file):  3060576 kB
SwapTotal:       8650744 kB
SwapFree:        3569400 kB
Dirty:              7608 kB
Writeback:             0 kB
WritebackTmp:          0 kB
```

```

```
