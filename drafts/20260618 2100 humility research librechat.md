# .

```sh
 ~/Documents/.storage % cd liberchat
cd: no such file or directory: liberchat
 ~/Documents/.storage % cd librechat
 ~/Documents/.storage/librechat
 % docker compose up -d
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.1s
 ✔ Container vectordb         Started                                                                                             0.7s
 ✔ Container chat-meilisearch Started                                                                                             0.7s
 ✔ Container chat-mongodb     Started                                                                                             0.7s
 ✔ Container rag_api          Started                                                                                             0.7s
 ✔ Container LibreChat        Started                                                                                             0.9s
 ~/Documents/.storage/librechat
 % docker ps
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED              STATUS              PORTS                                         NAMES
aac6cc223c91   registry.librechat.ai/danny-avila/librechat-dev:latest                "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3080->3080/tcp, [::]:3080->3080/tcp   LibreChat
4a2b46b30fc8   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         About a minute ago   Up About a minute                                                 rag_api
d53834d1ba95   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp                                      vectordb
1f46995d38ac   mongo:8.0.20                                                          "docker-entrypoint.s…"   About a minute ago   Up About a minute   27017/tcp                                     chat-mongodb
f8043b9ee36d   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   About a minute ago   Up About a minute   7700/tcp                                      chat-meilisearch
```

# how to see which port a docker app is running

To see which port a Docker container is running on, use the `docker ps` command in your terminal. \[[1](https://www.warp.dev/terminus/docker-compose-port-mapping)]

### Quick Commands

- **List all running containers:**\
  `docker ps`\
  Look under the **PORTS** column to see host-to-container mappings.
- **Find a specific container by name:**\
  `docker ps --filter "name=your_container_name"`
- **Inspect precise port configurations:**\
  `docker inspect --format='{{range $p, $conf := .NetworkSettings.Ports}}{{$p}} -> {{(index $conf 0).HostPort}}{{end}}' your_container_name` \[[1](https://medium.com/@theinnerpeace.me/how-to-know-container-port-docker-container-shibb-esp2-f816c096928e), [2](https://labex.io/tutorials/docker-how-to-filter-docker-containers-by-name-417741), [3](https://stackoverflow.com/questions/34096858/how-do-i-debug-docker-port-mapping)]

### Reading the Output

When you run `docker ps`, look for the format `0.0.0.0:8080->80/tcp`. \[[1](https://labex.io/questions/how-to-check-which-ports-are-in-use-227653)]

- **8080** is the port on your physical computer.
- **80** is the port inside the Docker container. \[[1](https://codesignal.com/learn/courses/docker-images-containers/lessons/executing-containers-with-custom-port-mapping), [2](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/)]

### Alternative Method

If you use **Docker Desktop**, open the application dashboard, click on the **Containers** tab, and look at the **Port(s)** column next to your running container. \[[1](https://helpcenter.online.usc.edu/s/article/Docker-Port-Binding-Conflict-for-Port-number), [2](https://www.reddit.com/r/docker/comments/18iy3qb/how%5Fto%5Faccess%5Fthe%5Fapplication%5Fafter%5Finstalling/)]

***

To help you troubleshoot further, let me know if you are trying to **change the port**, if the port looks correct but **you cannot connect**, or if you need help **mapping multiple ports**.

- [link](https://www.warp.dev/terminus/docker-compose-port-mapping)\
  Understand Port Mapping in Docker Compose\
  Dec 20, 2023 — Note that to verify which ports are exposed, you can use the docker ps command to list all the active Docker containers and their ...\
  \
  \
  www.warp.dev
- [link](https://medium.com/@theinnerpeace.me/how-to-know-container-port-docker-container-shibb-esp2-f816c096928e)\
  How to know container port — Docker container — Shibb Esp2\
  Apr 3, 2023 — To check which ports are being used by a Docker container, you can use the docker ps command to list all running containers and th...\
  \
  Medium
- [link](https://labex.io/tutorials/docker-how-to-filter-docker-containers-by-name-417741)\
  How to filter Docker containers by name\
  Summary Basic Container Listing: You learned how to use the docker ps command to view running containers and its various options l...\
  \
  LabEx

Show all

# 

