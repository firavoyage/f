# . test

```sh
 ~ % tmux -h
tmux: unknown option -- h
usage: tmux [-2CDlNuVv] [-c shell-command] [-f file] [-L socket-name]
            [-S socket-path] [-T features] [command [flags]]
 ~ % tmux --help
usage: tmux [-2CDlNuVv] [-c shell-command] [-f file] [-L socket-name]
            [-S socket-path] [-T features] [command [flags]]
 ~ % tmux command
no current client
 ~ % tmux command --help
command command-prompt: invalid flag --
 ~ % tmux help
unknown command: help
 ~ % tmux h
 ~ % tmux ls
0: 1 windows (created Mon Jun 15 19:14:39 2026)
1: 1 windows (created Mon Jun 15 19:14:49 2026)
10: 1 windows (created Sun Jul  5 17:12:28 2026)
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 0
[exited]
 ~ % tmux ls
1: 1 windows (created Mon Jun 15 19:14:49 2026)
10: 1 windows (created Sun Jul  5 17:12:28 2026)
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 1
[exited]
 ~ % tmux ls
10: 1 windows (created Sun Jul  5 17:12:28 2026)
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 10
[exited]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 11
[detached (from session 11)]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
12: 1 windows (created Thu Jul  9 15:52:30 2026)
2: 1 windows (created Tue Jun 16 15:59:07 2026)
3: 1 windows (created Wed Jun 17 03:17:32 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
5: 1 windows (created Wed Jun 17 21:54:31 2026)
6: 1 windows (created Sat Jun 20 22:09:59 2026)
7: 1 windows (created Sat Jul  4 20:13:29 2026)
8: 1 windows (created Sat Jul  4 20:13:43 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 12
[exited]
 ~ % tmux a -t 2
[exited]
 ~ % for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 4
[detached (from session 4)]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
4: 1 windows (created Wed Jun 17 17:51:04 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux a -t 9
[detached (from session 9)]
 ~ % tmux new -s 'hello'
[detached (from session hello)]
 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
hello: 1 windows (created Thu Jul  9 15:57:06 2026)
 ~ % for s in $(tmux ls -F '#{session_name}' 2>/dev/null); do [ $(tmux list-panes -t "$s" -F '#{pane_pid}' | xargs -I {} pgrep -P {} | wc -l) -eq 0 ] && tmux kill-session -t "$s"; done

 ~ % tmux ls
11: 1 windows (created Thu Jul  9 14:36:28 2026)
9: 1 windows (created Sat Jul  4 20:13:52 2026)
 ~ % tmux rename-session -t 1 hello
 ~ % tmux ls
9: 1 windows (created Sat Jul  4 20:13:52 2026)
hello: 1 windows (created Thu Jul  9 14:36:28 2026)
 ~ % tmux rename-session -t hello backend
 ~ % tmux ls
9: 1 windows (created Sat Jul  4 20:13:52 2026)
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
 ~ % tmux rename-session -t 9 web
 ~ % tmux ls
backend: 1 windows (created Thu Jul  9 14:36:28 2026)
web: 1 windows (created Sat Jul  4 20:13:52 2026)
```

# 
