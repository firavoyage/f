<!-- yeah, it stores in localstorage, or sth bound by the site/port. -->

# .

```
 ~ % docker container ls -a

CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED        STATUS                     PORTS                                         NAMES
5a95edd99a03   gaozih/pvzge:latest                                                   "/docker-entrypoint.…"   7 days ago     Exited (255) 2 hours ago   0.0.0.0:9000->80/tcp, [::]:9000->80/tcp       pvz
39b1fc1184da   registry.librechat.ai/danny-avila/librechat-dev:latest                "docker-entrypoint.s…"   3 months ago   Up 2 hours                 0.0.0.0:3080->3080/tcp, [::]:3080->3080/tcp   LibreChat
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         3 months ago   Up 2 hours                                                               rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   3 months ago   Up 2 hours                 5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   3 months ago   Up 2 hours                 27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   3 months ago   Up 2 hours                 7700/tcp                                      chat-meilisearch
 ~ % docker run pvz
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: IPv6 listen already enabled
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/10/09 09:04:45 [notice] 1#1: using the "epoll" event method
2026/10/09 09:04:45 [notice] 1#1: nginx/1.31.6
2026/10/09 09:04:45 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0)
2026/10/09 09:04:45 [notice] 1#1: OS: Linux 6.17.0-35-generic
2026/10/09 09:04:45 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1024:524288
2026/10/09 09:04:45 [notice] 1#1: start worker processes
2026/10/09 09:04:45 [notice] 1#1: start worker process 22
2026/10/09 09:04:45 [notice] 1#1: start worker process 23
2026/10/09 09:04:45 [notice] 1#1: start worker process 24
2026/10/09 09:04:45 [notice] 1#1: start worker process 25
2026/10/09 09:04:45 [notice] 1#1: start worker process 26
2026/10/09 09:04:45 [notice] 1#1: start worker process 27
2026/10/09 09:04:45 [notice] 1#1: start worker process 28
2026/10/09 09:04:45 [notice] 1#1: start worker process 29
2026/10/09 09:04:45 [notice] 1#1: start worker process 30
2026/10/09 09:04:45 [notice] 1#1: start worker process 31
2026/10/09 09:04:45 [notice] 1#1: start worker process 32
2026/10/09 09:04:45 [notice] 1#1: start worker process 33
^R
^C2026/10/09 09:04:54 [notice] 1#1: signal 2 (SIGINT) received, exiting
2026/10/09 09:04:54 [notice] 22#22: exiting
2026/10/09 09:04:54 [notice] 23#23: exiting
2026/10/09 09:04:54 [notice] 25#25: exiting
2026/10/09 09:04:54 [notice] 24#24: exiting
2026/10/09 09:04:54 [notice] 26#26: exiting
2026/10/09 09:04:54 [notice] 27#27: exiting
2026/10/09 09:04:54 [notice] 28#28: exiting
2026/10/09 09:04:54 [notice] 31#31: exiting
2026/10/09 09:04:54 [notice] 29#29: exiting
2026/10/09 09:04:54 [notice] 23#23: exit
2026/10/09 09:04:54 [notice] 22#22: exit
2026/10/09 09:04:54 [notice] 25#25: exit
2026/10/09 09:04:54 [notice] 27#27: exit
2026/10/09 09:04:54 [notice] 26#26: exit
2026/10/09 09:04:54 [notice] 29#29: exit
2026/10/09 09:04:54 [notice] 24#24: exit
2026/10/09 09:04:54 [notice] 28#28: exit
2026/10/09 09:04:54 [notice] 31#31: exit
2026/10/09 09:04:54 [notice] 32#32: exiting
2026/10/09 09:04:54 [notice] 32#32: exit
2026/10/09 09:04:54 [notice] 30#30: exiting
2026/10/09 09:04:54 [notice] 30#30: exit
2026/10/09 09:04:54 [notice] 33#33: exiting
2026/10/09 09:04:54 [notice] 33#33: exit
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 29
2026/10/09 09:04:54 [notice] 1#1: worker process 29 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 28
2026/10/09 09:04:54 [notice] 1#1: worker process 26 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: worker process 27 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: worker process 28 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 26
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 32
2026/10/09 09:04:54 [notice] 1#1: worker process 32 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 33
2026/10/09 09:04:54 [notice] 1#1: worker process 25 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: worker process 31 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: worker process 33 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 23
2026/10/09 09:04:54 [notice] 1#1: worker process 23 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 22
2026/10/09 09:04:54 [notice] 1#1: worker process 22 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 30
2026/10/09 09:04:54 [notice] 1#1: worker process 30 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:04:54 [notice] 1#1: signal 17 (SIGCHLD) received from 24
2026/10/09 09:04:54 [notice] 1#1: worker process 24 exited with code 0
2026/10/09 09:04:54 [notice] 1#1: exit
 ~ % docker run --name pvz -d -p 9000:80 gaozih/pvzge:latest
docker: Error response from daemon: Conflict. The container name "/pvz" is already in use by container "5a95edd99a03eef6a28eb05f3254575d5b5bc60c71bcafb6d18edd6d44c884eb". You have to remove (or rename) that container to be able to reuse that name.

Run 'docker run --help' for more information
 ~ % docker container run pvz
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: IPv6 listen already enabled
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/10/09 09:05:12 [notice] 1#1: using the "epoll" event method
2026/10/09 09:05:12 [notice] 1#1: nginx/1.31.6
2026/10/09 09:05:12 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0)
2026/10/09 09:05:12 [notice] 1#1: OS: Linux 6.17.0-35-generic
2026/10/09 09:05:12 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1024:524288
2026/10/09 09:05:12 [notice] 1#1: start worker processes
2026/10/09 09:05:12 [notice] 1#1: start worker process 22
2026/10/09 09:05:12 [notice] 1#1: start worker process 23
2026/10/09 09:05:12 [notice] 1#1: start worker process 24
2026/10/09 09:05:12 [notice] 1#1: start worker process 25
2026/10/09 09:05:12 [notice] 1#1: start worker process 26
2026/10/09 09:05:12 [notice] 1#1: start worker process 27
2026/10/09 09:05:12 [notice] 1#1: start worker process 28
2026/10/09 09:05:12 [notice] 1#1: start worker process 29
2026/10/09 09:05:12 [notice] 1#1: start worker process 30
2026/10/09 09:05:12 [notice] 1#1: start worker process 31
2026/10/09 09:05:12 [notice] 1#1: start worker process 32
2026/10/09 09:05:12 [notice] 1#1: start worker process 33
^C2026/10/09 09:05:16 [notice] 1#1: signal 2 (SIGINT) received, exiting
2026/10/09 09:05:16 [notice] 22#22: exiting
2026/10/09 09:05:16 [notice] 23#23: exiting
2026/10/09 09:05:16 [notice] 24#24: exiting
2026/10/09 09:05:16 [notice] 25#25: exiting
2026/10/09 09:05:16 [notice] 26#26: exiting
2026/10/09 09:05:16 [notice] 27#27: exiting
2026/10/09 09:05:16 [notice] 28#28: exiting
2026/10/09 09:05:16 [notice] 30#30: exiting
2026/10/09 09:05:16 [notice] 29#29: exiting
2026/10/09 09:05:16 [notice] 33#33: exiting
2026/10/09 09:05:16 [notice] 32#32: exiting
2026/10/09 09:05:16 [notice] 26#26: exit
2026/10/09 09:05:16 [notice] 23#23: exit
2026/10/09 09:05:16 [notice] 22#22: exit
2026/10/09 09:05:16 [notice] 25#25: exit
2026/10/09 09:05:16 [notice] 24#24: exit
2026/10/09 09:05:16 [notice] 27#27: exit
2026/10/09 09:05:16 [notice] 28#28: exit
2026/10/09 09:05:16 [notice] 29#29: exit
2026/10/09 09:05:16 [notice] 30#30: exit
2026/10/09 09:05:16 [notice] 32#32: exit
2026/10/09 09:05:16 [notice] 33#33: exit
2026/10/09 09:05:16 [notice] 31#31: exiting
2026/10/09 09:05:16 [notice] 31#31: exit
2026/10/09 09:05:16 [notice] 1#1: signal 17 (SIGCHLD) received from 25
2026/10/09 09:05:16 [notice] 1#1: worker process 25 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:05:16 [notice] 1#1: signal 17 (SIGCHLD) received from 23
2026/10/09 09:05:16 [notice] 1#1: worker process 23 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: worker process 29 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:05:16 [notice] 1#1: signal 17 (SIGCHLD) received from 29
2026/10/09 09:05:16 [notice] 1#1: worker process 24 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: worker process 27 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: worker process 30 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: worker process 32 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:05:16 [notice] 1#1: signal 17 (SIGCHLD) received from 31
2026/10/09 09:05:16 [notice] 1#1: worker process 22 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: worker process 31 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: signal 29 (SIGIO) received
2026/10/09 09:05:16 [notice] 1#1: signal 17 (SIGCHLD) received from 22
2026/10/09 09:05:16 [notice] 1#1: worker process 28 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: worker process 33 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: signal 17 (SIGCHLD) received from 26
2026/10/09 09:05:16 [notice] 1#1: worker process 26 exited with code 0
2026/10/09 09:05:16 [notice] 1#1: exit
```

```
 ~ % docker run --name pvz
docker: 'docker run' requires at least 1 argument

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

See 'docker run --help' for more information
 ~ % docker run 5a95edd99a03
Unable to find image '5a95edd99a03:latest' locally
docker: Error response from daemon: pull access denied for 5a95edd99a03, repository does not exist or may require 'docker login'

Run 'docker run --help' for more information
 ~ % docker start pvz
pvz
 ~ % docker start pvz --port 9000
unknown flag: --port

Usage:  docker start [OPTIONS] CONTAINER [CONTAINER...]

Run 'docker start --help' for more information
 ~ % docker stop pvz
pvz
 ~ % docker stop pvz
pvz
```

```
 ~ % sudo systemctl restart launch
 ~ % sudo systemctl restart launch
```
