# .

```sh
 ~ % sudo docker run -d --name sillytavern -p 8000:8000 ghcr.io/sillytavern/sillytavern:latest

Unable to find image 'ghcr.io/sillytavern/sillytavern:latest' locally
latest: Pulling from sillytavern/sillytavern
e6f31ffc071e: Pull complete
09ddda476dba: Pull complete
16733d1099a5: Pull complete
144a1d394670: Pull complete
65739491cef5: Pull complete
0d8aa8e026f1: Pull complete
00a000b4d0c1: Pull complete
8e6ab5b2b909: Pull complete
bf6cecf1c218: Pull complete
992656f29ee4: Pull complete
770592b5ce0e: Pull complete
9f8f0cb834fc: Pull complete
59ba6a734ca2: Pull complete
4c7ab54dbcaa: Download complete
Digest: sha256:5bb7ef334602ad72b29351acae4d9744ce16c99a1fab840acbd42a7d49d27d9b
Status: Downloaded newer image for ghcr.io/sillytavern/sillytavern:latest
cffbc41e6911469177dd9e5d99ade93285463e0521cbb13b1a593a6e5cdad6e8
 ~ % docker ls
docker: unknown command: docker ls

Run 'docker --help' for more information
 ~ % docker list
docker: unknown command: docker list

Run 'docker --help' for more information
 ~ % docker -h
Flag shorthand -h has been deprecated, use --help
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  bake        Build from a file
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  model*      Docker Model Runner
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/root/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default
                           context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host string        Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
 ~ % docker ps
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest                                "tini -- ./docker-en…"   5 minutes ago   Up 5 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
39b1fc1184da   registry.librechat.ai/danny-avila/librechat-dev:latest                "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     0.0.0.0:3080->3080/tcp, [::]:3080->3080/tcp   LibreChat
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         5 weeks ago     Up 2 weeks                                                   rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   5 weeks ago     Up 2 weeks     7700/tcp                                      chat-meilisearch
 ~ % docker stop librechat
Error response from daemon: No such container: librechat
 ~ % docker stop Librechat
Error response from daemon: No such container: Librechat
 ~ % docker stop LibreChat
LibreChat
```

```sh
 ~ % sudo docker run -d --name sillytavern -p 8000:8000 ghcr.io/sillytavern/sillytavern:latest

Unable to find image 'ghcr.io/sillytavern/sillytavern:latest' locally
latest: Pulling from sillytavern/sillytavern
e6f31ffc071e: Pull complete
09ddda476dba: Pull complete
16733d1099a5: Pull complete
144a1d394670: Pull complete
65739491cef5: Pull complete
0d8aa8e026f1: Pull complete
00a000b4d0c1: Pull complete
8e6ab5b2b909: Pull complete
bf6cecf1c218: Pull complete
992656f29ee4: Pull complete
770592b5ce0e: Pull complete
9f8f0cb834fc: Pull complete
59ba6a734ca2: Pull complete
4c7ab54dbcaa: Download complete
Digest: sha256:5bb7ef334602ad72b29351acae4d9744ce16c99a1fab840acbd42a7d49d27d9b
Status: Downloaded newer image for ghcr.io/sillytavern/sillytavern:latest
cffbc41e6911469177dd9e5d99ade93285463e0521cbb13b1a593a6e5cdad6e8
 ~ % docker ls
docker: unknown command: docker ls

Run 'docker --help' for more information
 ~ % docker list
docker: unknown command: docker list

Run 'docker --help' for more information
 ~ % docker -h
Flag shorthand -h has been deprecated, use --help
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  bake        Build from a file
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  model*      Docker Model Runner
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/root/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default
                           context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host string        Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
 ~ % docker ps
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest                                "tini -- ./docker-en…"   5 minutes ago   Up 5 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
39b1fc1184da   registry.librechat.ai/danny-avila/librechat-dev:latest                "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     0.0.0.0:3080->3080/tcp, [::]:3080->3080/tcp   LibreChat
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         5 weeks ago     Up 2 weeks                                                   rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   5 weeks ago     Up 2 weeks     7700/tcp                                      chat-meilisearch
 ~ % docker stop librechat
Error response from daemon: No such container: librechat
 ~ % docker stop Librechat
Error response from daemon: No such container: Librechat
 ~ % docker stop LibreChat
LibreChat
 ~ % docker ps
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest                                "tini -- ./docker-en…"   7 minutes ago   Up 7 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         5 weeks ago     Up 2 weeks                                                   rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   5 weeks ago     Up 2 weeks     7700/tcp                                      chat-meilisearch
 ~ % docker container list
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest                                "tini -- ./docker-en…"   8 minutes ago   Up 8 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         5 weeks ago     Up 2 weeks                                                   rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   5 weeks ago     Up 2 weeks     7700/tcp                                      chat-meilisearch
 ~ % docker container ls
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest                                "tini -- ./docker-en…"   8 minutes ago   Up 8 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         5 weeks ago     Up 2 weeks                                                   rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   5 weeks ago     Up 2 weeks     7700/tcp                                      chat-meilisearch
 ~ % docker container ls
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest                                "tini -- ./docker-en…"   8 minutes ago   Up 8 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         5 weeks ago     Up 2 weeks                                                   rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   5 weeks ago     Up 2 weeks     27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   5 weeks ago     Up 2 weeks     7700/tcp                                      chat-meilisearch
 ~ % docker stop rag_api
rag_api
 ~ %
 ~ % docker container list
CONTAINER ID   IMAGE                                    COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest   "tini -- ./docker-en…"   9 minutes ago   Up 9 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
 ~ % docker container ls
CONTAINER ID   IMAGE                                    COMMAND                  CREATED         STATUS         PORTS                                         NAMES
cffbc41e6911   ghcr.io/sillytavern/sillytavern:latest   "tini -- ./docker-en…"   9 minutes ago   Up 9 minutes   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
 ~ % sudo docker rm -f sillytavern

sillytavern
 ~ % docker container ls
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
 ~ % sudo docker run -d --name sillytavern -p 8000:8000 ghcr.io/sillytavern/sillytavern:latest --listen=true
af2857ec406cbcf9704e46a7aa889b4fb034fd0d411a756567653a539e3ff697
 ~ % docker container ls
CONTAINER ID   IMAGE                                    COMMAND                  CREATED         STATUS         PORTS                                         NAMES
af2857ec406c   ghcr.io/sillytavern/sillytavern:latest   "tini -- ./docker-en…"   3 seconds ago   Up 3 seconds   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
 ~ % docker container ls
CONTAINER ID   IMAGE                                    COMMAND                  CREATED          STATUS          PORTS                                         NAMES
af2857ec406c   ghcr.io/sillytavern/sillytavern:latest   "tini -- ./docker-en…"   14 seconds ago   Up 14 seconds   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp   sillytavern
 ~ % # 1. Kill the current blocked instance
sudo docker rm -f sillytavern

# 2. Run it again with the security flag forced to FALSE via the -e option
sudo docker run -d \
  --name sillytavern \
  -p 8000:8000 \
  -e SILI_WHITELIST_MODE=false \
  ghcr.io/sillytavern/sillytavern:latest --listen=true

sillytavern
b1ede49d2b8d9f66fc5edd2f6792a21fd201e001f7e1b2eef5e68c453c8274d7
 ~ % # 1. Kill the blocked instance
docker rm -f sillytavern

# 2. Run with listening active and an initial username/password set
docker run -d \
  --name sillytavern \
  -p 8000:8000 \
  -e SILI_USER_AUTHENTICATION=true \
  -e SILI_USERNAME=admin \
  -e SILI_PASSWORD=password123 \
  ghcr.io/sillytavern/sillytavern:latest --listen=true

sillytavern
19157fc7a61e4a881a59a06b0dbfc7581e549600b28f269315c0f51682e64176
 ~ % # Remove the broken instance
docker rm -f sillytavern

# Run with both IP and Hostname security checks completely disabled
docker run -d \
  --name sillytavern \
  -p 8000:8000 \
  -e SILI_WHITELIST_MODE=false \
  -e SILI_HOST_WHITELIST_ENABLED=false \
  ghcr.io/sillytavern/sillytavern:latest --listen=true

sillytavern
d88e66ce32df2de1493c1310fa9e99a8c9b7cd80b2a6c14366a8ad968a263f0c
 ~ % # 1. Clear the blocked instance
docker rm -f sillytavern

# 2. Run it by strictly mapping localhost
docker run -d \
  --name sillytavern \
  -p 127.0.0.1:8000:8000 \
  ghcr.io/sillytavern/sillytavern:latest

sillytavern
c086b55629704ba9355360959dabb9dd4746fb66ca2fe9e7275b0187bc2930b0
```

# all docker commands

The **[Docker CLI](https://docs.docker.com/reference/cli/docker/)** provides a robust set of commands categorized into management objects to build, run, and orchestrate containers.

### Container Management

- **`docker run <image>`**: Create and start a container from an image.
- **`docker run -d <image>`**: Run a container in the background (detached mode).
- **`docker run -p <host_port>:<container_port> <image>`**: Run a container with specific port forwarding.
- **`docker ps`**: List all running containers.
- **`docker ps -a`**: List all containers including stopped ones.
- **`docker stop <container>`**: Gracefully halt a running container.
- **`docker start <container>`**: Initiate a previously stopped container.
- **`docker restart <container>`**: Stop and then start a container.
- **`docker rm <container>`**: Remove a stopped container from the host system.
- **`docker rm -f <container>`**: Force remove a running container.
- **`docker kill <container>`**: Immediately terminate a running container.
- **`docker pause <container>`**: Temporarily suspend all processes within a container.
- **`docker unpause <container>`**: Resume processes inside a paused container. [link](https://buddy.works/tutorials/docker-commands-cheat-sheet)

### Image Management

- **`docker build -t <name> .`**: Build an image from a `Dockerfile` in the current directory and tag it.
- **`docker images`**: List all locally stored Docker images.
- **`docker pull <image>`**: Download an image from a registry like Docker Hub.
- **`docker push <image>`**: Upload a local image to a registry.
- **`docker rmi <image>`**: Remove one or more local images.
- **`docker tag <source_image> <target_image>`**: Assign a new tag to an existing image.
- **`docker commit <container> <new_image>`**: Save the current state of a container as a new image.
- **`docker save -o <file.tar> <image>`**: Export an image to a tar archive.
- **`docker load -i <file.tar>`**: Import an image from a saved tar archive. [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)

### Debugging & Inspection

- **`docker logs <container>`**: Fetch and display the logs of a container.
- **`docker logs -f <container>`**: Follow log output in real-time.
- **`docker exec -it <container> <command>`**: Execute an interactive command or open a shell inside a running container.
- **`docker inspect <object>`**: Return detailed, low-level JSON information on any Docker object.
- **`docker stats`**: Display a live stream of container resource usage statistics (CPU, memory).
- **`docker top <container>`**: Display the running processes inside a specific container.
- **`docker diff <container>`**: Inspect changes to files or directories on a container's filesystem.
- **`docker cp <src> <dest>`**: Copy files/folders between a container and the local filesystem. [link](https://docs.docker.com/reference/cli/docker/)

### Volume & Network Management

- **`docker volume ls`**: List all local persistent storage volumes.
- **`docker volume create <name>`**: Create a new standalone storage volume.
- **`docker volume rm <name>`**: Remove a specific storage volume.
- **`docker network ls`**: List all networks available for Docker containers.
- **`docker network create <name>`**: Create a new virtual network layer.
- **`docker network connect <network> <container>`**: Connect a running container to a specific network.
- **`docker network disconnect <network> <container>`**: Disconnect a container from a network. [link](https://www.reddit.com/r/selfhosted/comments/g3p37k/25%5Fbasic%5Fdocker%5Fcommands%5Ffor%5Fbeginners/)

### System & Cleanup

- **`docker version`**: Show the client and server version information.
- **`docker info`**: Display system-wide information regarding the Docker installation.
- **`docker login` / `docker logout`**: Authenticate to or exit from a Docker registry.
- **`docker system df`**: Show disk space consumed by images, containers, volumes, and build cache.
- **`docker image prune`**: Remove dangling, unused images to save disk space.
- **`docker system prune`**: Remove all stopped containers, unused networks, and dangling build caches.
- **`docker system prune -a`**: Aggressively remove all unused resources, including unused images. [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)

If you are looking to solve a specific problem, please let me know:

- Are you trying to **fix a broken container**, **deploy an app**, or **clear up disk space**?

- What **error message** or unexpected behavior are you encountering?

- Do you need an example of a **multi-container deployment** using **Docker Compose**? [link](https://hbayraktar.medium.com/docker-commands-cheat-sheet-with-examples-d9a26396cb6f)

- [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)\
  CLI Cheat Sheet - Docker Docs\
  Page 1. CLI Cheat Sheet. Build an Image from a Dockerfile. Build an Image from a Dockerfile without the cache. docker build -t . –...\
  Docker Docs

- [link](https://docs.docker.com/reference/cli/docker/)\
  Docker Docs\
  Table\_title: Subcommands Table\_content: | Command | Description | | --- | --- | | docker builder | Manage builds | | docker buildx...\
  Docker Docs

- [link](https://www.reddit.com/r/selfhosted/comments/g3p37k/25%5Fbasic%5Fdocker%5Fcommands%5Ffor%5Fbeginners/)\
  25 Basic Docker Commands for Beginners\
  Apr 18, 2020 — Other Docker commands include: \* \*\*docker exec -it container\_name\*\* Executes a command within the container \* \*\*docker cp containe...\
  Reddit

Show all

## list all

Here is the full, exhaustive breakdown of every standalone top-level Docker command and its primary subcommands.

### Top-Level Standalone Commands

- **`docker attach`**: Attach local standard input, output, and error streams to a running container.
- **`docker build`**: Build an image from a Dockerfile.
- **`docker commit`**: Create a new image from a container's changes.
- **`docker cp`**: Copy files/folders between a container and the local filesystem.
- **`docker create`**: Create a new container without starting it.
- **`docker diff`**: Inspect changes to files or directories on a container's filesystem.
- **`docker events`**: Get real-time events from the server.
- **`docker exec`**: Run a command in a running container.
- **`docker export`**: Export a container's filesystem as a tar archive.
- **`docker history`**: Show the history of an image.
- **`docker images`**: List images.
- **`docker import`**: Import the contents from a tarball to create a filesystem image.
- **`docker info`**: Display system-wide information.
- **`docker inspect`**: Return low-level information on Docker objects.
- **`docker kill`**: Kill one or more running containers.
- **`docker load`**: Load an image from a tar archive or STDIN.
- **`docker login`**: Log in to a Docker registry.
- **`docker logout`**: Log out from a Docker registry.
- **`docker logs`**: Fetch the logs of a container.
- **`docker pause`**: Pause all processes within one or more containers.
- **`docker port`**: List port mappings or a specific mapping for the container.
- **`docker ps`**: List containers.
- **`docker pull`**: Pull an image or a repository from a registry.
- **`docker push`**: Push an image or a repository to a registry.
- **`docker rename`**: Rename a container.
- **`docker restart`**: Restart one or more containers.
- **`docker rm`**: Remove one or more containers.
- **`docker rmi`**: Remove one or more images.
- **`docker run`**: Run a command in a new container.
- **`docker save`**: Save one or more images to a tar archive.
- **`docker search`**: Search the Docker Hub for images.
- **`docker start`**: Start one or more stopped containers.
- **`docker stats`**: Display a live stream of container(s) resource usage statistics.
- **`docker stop`**: Stop one or more running containers.
- **`docker tag`**: Create a tag TARGET\_IMAGE that refers to SOURCE\_IMAGE.
- **`docker top`**: Display the running processes of a container.
- **`docker unpause`**: Unpause all processes within one or more containers.
- **`docker update`**: Update configuration of one or more containers.
- **`docker version`**: Show the Docker version information.
- **`docker wait`**: Block until one or more containers stop, then print their exit codes.

***

### Management Commands & Subcommands

Modern Docker organizes operations into logical management scopes. Each management command contains specific subcommands:

#### `docker builder` (Manage builds)

- **`docker builder prune`**: Remove build cache.

#### `docker checkpoint` (Manage checkpoints)

- **`docker checkpoint create`**: Create a checkpoint from a running container.
- **`docker checkpoint ls`**: List checkpoints for a container.
- **`docker checkpoint rm`**: Remove a checkpoint.

#### `docker config` (Manage Swarm configs)

- **`docker config create`**: Create a config from a file or STDIN.
- **`docker config inspect`**: Display detailed information on one or more configs.
- **`docker config ls`**: List configs.
- **`docker config rm`**: Remove one or more configs.

#### `docker container` (Manage containers)

- **`docker container prune`**: Remove all stopped containers.\
  _(Note: Inherits all standalone container commands like `ls`, `run`, `stop`, `rm`, `exec`, etc.)_

#### `docker context` (Manage contexts)

- **`docker context create`**: Create a context.
- **`docker context export`**: Export a context to a tar or zip archive.
- **`docker context import`**: Import a context from a tar or zip file.
- **`docker context inspect`**: Display detailed information on one or more contexts.
- **`docker context ls`**: List contexts.
- **`docker context rm`**: Remove one or more contexts.
- **`docker context use`**: Set the current docker context.

#### `docker image` (Manage images)

- **`docker image prune`**: Remove unused images.\
  _(Note: Inherits all standalone image commands like `ls`, `build`, `pull`, `push`, `rmi`, etc.)_

#### `docker manifest` (Manage CLI plug-ins and manifests)

- **`docker manifest annotate`**: Add additional information to a local manifest list.
- **`docker manifest create`**: Create a local manifest list for annotating and pushing to a registry.
- **`docker manifest inspect`**: Display a manifest list or manifest image.
- **`docker manifest push`**: Push a manifest list to a repository.
- **`docker manifest rm`**: Remove one or more manifest lists from local storage.

#### `docker network` (Manage networks)

- **`docker network connect`**: Connect a container to a network.
- **`docker network create`**: Create a network.
- **`docker network disconnect`**: Disconnect a container from a network.
- **`docker network inspect`**: Display detailed information on one or more networks.
- **`docker network ls`**: List networks.
- **`docker network prune`**: Remove all unused networks.
- **`docker network rm`**: Remove one or more networks.

#### `docker node` (Manage Swarm nodes)

- **`docker node demote`**: Demote one or more nodes from manager in the swarm.
- **`docker node inspect`**: Display detailed information on one or more nodes.
- **`docker node ls`**: List nodes in the swarm.
- **`docker node promote`**: Promote one or more nodes to manager in the swarm.
- **`docker node ps`**: List tasks running on one or more nodes.
- **`docker node rm`**: Remove one or more nodes from the swarm.
- **`docker node update`**: Update a node.

#### `docker plugin` (Manage plugins)

- **`docker plugin create`**: Create a plugin from a rootfs and configuration.
- **`docker plugin disable`**: Disable a plugin.
- **`docker plugin enable`**: Enable a plugin.
- **`docker plugin inspect`**: Display detailed information on one or more plugins.
- **`docker plugin install`**: Install a plugin.
- **`docker plugin ls`**: List plugins.
- **`docker plugin push`**: Push a plugin to a registry.
- **`docker plugin rm`**: Remove one or more plugins.
- **`docker plugin set`**: Change settings for a plugin.
- **`docker plugin upgrade`**: Upgrade an existing plugin.

#### `docker secret` (Manage Swarm secrets)

- **`docker secret create`**: Create a secret from a file or STDIN.
- **`docker secret inspect`**: Display detailed information on one or more secrets.
- **`docker secret ls`**: List secrets.
- **`docker secret rm`**: Remove one or more secrets.

#### `docker service` (Manage Swarm services)

- **`docker service create`**: Create a new service.
- **`docker service inspect`**: Display detailed information on one or more services.
- **`docker service logs`**: Fetch the logs of a service or task.
- **`docker service ls`**: List services.
- **`docker service ps`**: List the tasks of one or more services.
- **`docker service rm`**: Remove one or more services.
- **`docker service rollback`**: Revert changes to a service's configuration.
- **`docker service scale`**: Scale one or multiple replicated services.
- **`docker service update`**: Update a service.

#### `docker stack` (Manage Swarm stacks)

- **`docker stack deploy`**: Deploy a new stack or update an existing one.
- **`docker stack ls`**: List stacks.
- **`docker stack ps`**: List the tasks in the stack.
- **`docker stack rm`**: Remove one or more stacks.
- **`docker stack services`**: List the services in the stack.

#### `docker swarm` (Manage Swarm)

- **`docker swarm ca`**: Display or rotate the current swarm CA certificate.
- **`docker swarm init`**: Initialize a swarm.
- **`docker swarm join`**: Join a swarm as a node and/or manager.
- **`docker swarm join-token`**: Manage join tokens.
- **`docker swarm leave`**: Leave the swarm.
- **`docker swarm unlock`**: Unlock an locked swarm.
- **`docker swarm unlock-key`**: Manage the unlock key.
- **`docker swarm update`**: Update the swarm.

#### `docker system` (Manage Docker)

- **`docker system df`**: Show docker disk usage.
- **`docker system events`**: Get real-time events from the server.
- **`docker system info`**: Display system-wide information.
- **`docker system prune`**: Remove unused data.

#### `docker volume` (Manage volumes)

- **`docker volume create`**: Create a volume.
- **`docker volume inspect`**: Display detailed information on one or more volumes.
- **`docker volume ls`**: List volumes.
- **`docker volume prune`**: Remove all unused local volumes.
- **`docker volume rm`**: Remove one or more volumes.

***

If you need deeper details on flags or parameters for a specific area, tell me:

- Do you want to see **common flags** (like `-d`, `-it`, `-v`) for a specific command?
- Are you setting up local storage using **volumes** or container links via **networks**?
- Do you need help formatting **JSON output** using the `--format` flag?

## list all containers

To view your containers, use the **`docker ps`** command variants depending on what state you want to see.

### Quick Syntax Reference

- **`docker ps`**: List only **currently running** containers.
- **`docker ps -a`**: List **all** containers (running, exited, paused, and stopped).
- **`docker ps -q`**: List only the **numeric IDs** of running containers (great for automation scripts).
- **`docker ps -a -q`**: List the numeric IDs of **every** container on the host system.

***

### Command Output Breakdown

When you run `docker ps`, Docker displays an organized table with seven key columns:

| Column Name      | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| **CONTAINER ID** | Unique, truncated 12-character alphanumeric hash representing the container.           |
| **IMAGE**        | The name and tag of the Docker image used to build this container.                     |
| **COMMAND**      | The primary application or internal process executed when the container started.       |
| **CREATED**      | A relative timestamp showing exactly when the container was created.                   |
| **STATUS**       | The current operational state (e.g., `Up 4 hours`, `Exited (0) 10 minutes ago`).       |
| **PORTS**        | Any network ports forwarded from your local host machine into the container.           |
| **NAMES**        | The custom name assigned to the container, or a randomly generated name if left blank. |

***

### Advanced Filtering and Formatting

You can narrow down your results or change how the information is displayed using advanced flags.

#### 1. Filter the List (`--filter` or `-f`)

Filter the container list by specific criteria like status, name, or image:

bash

```
# Show only containers that have exited or crashed
docker ps -f status=exited

# Show containers created from a specific base image
docker ps -a -f ancestor=nginx
```

Use code with caution.

#### 2. Customize the Output Format (`--format`)

Clean up the terminal view by using Go templates to print only the columns you care about:

bash

```
# Print just the Name, Status, and Ports in a neat table format
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

Use code with caution.

#### 3. View Total Disk Size (`-s`)

See how much physical space your containers are actively consuming on your drive:

bash

```
# Appends a 'SIZE' column showing the container's writable layer size
docker ps -s
```

Use code with caution.

Let me know what you intend to do with these containers next:

- Do you need to **stop or remove** specific containers from this list?

- Are you trying to troubleshoot a container that **keeps crashing immediately** upon startup?

- Do you want to see how to run a container with a **custom name** so it is easier to find?

- [link](https://labex.io/questions/how-to-display-all-running-and-stopped-containers-271483)\
  How to List Running and Stopped Containers in Docker\
  Sep 7, 2024 — Visualizing Container Lifecycle This diagram illustrates the different states a container can go through during its lifecycle, fro...\
  \
  LabEx

- [link](https://labex.io/tutorials/docker-how-to-filter-docker-containers-by-name-417741)\
  How to filter Docker containers by name\
  Basic Container Listing: You learned how to use the docker ps command to view running containers and its various options like -a f...\
  \
  LabEx

- [link](https://refine.dev/blog/docker-list-containers/)\
  A Complete Guide to Listing Docker Containers\
  Jun 6, 2023 — By using 'docker ps' command with other options('docker ps -n 5'/'docker ps -l', 'docker ps -a', 'docker ps -q') we can achieve th...\
  \
  \
  Refine

Show all

# why is it called docker ps instead of docker ls or list

The term `docker ps` comes from the **Unix operating system**, which heavily influenced Docker's design.

### The Unix Heritage

- **Process Status**: In Unix, `ps` stands for "process status."
- **Traditional Command**: System administrators have used the `ps` command for decades to view currently running programs (processes) on a computer.
- **Containers as Processes**: Docker containers are technically isolated Linux processes running on your host machine, not separate virtual machines.
- **Consistency**: Docker's creators used `ps` to make the tool instantly familiar to Linux administrators.

### Why Not `ls`?

- **Files vs. Processes**: In Unix, `ls` stands for "list" and is strictly used to list files and directories inside a filesystem.
- **Semantic Meaning**: Using `ls` for running programs would break standard command-line naming conventions.

### Modern Alternatives

If you prefer the `ls` syntax, Docker updated its command structure in later versions to be more intuitive. You can use these identical, modern commands:

- `docker container ls` (Lists running containers)
- `docker container ls -a` (Lists all containers, including stopped ones)

To advance your Docker workflow, would you like to know about **filtering flags** to narrow down your container list, or should we look at how to **customize the output format** using Go templates?

- [link](https://www.neenopal.com/blog/Docker)\
  All About Docker & Containers - What Is It & Why Do We Need It?\
  Oct 10, 2023 — Show All Containers Docker PS is the essential command to list existing docker containers in running state. PS stands for “Process...\
  \
  \
  NeenOpal
- [link](https://news.ycombinator.com/item?id=33325474)\
  Ask HN: What Is the Hype with Docker?\
  Oct 25, 2022 — All bets are off when you're dealing with Windows in the open source world, especially when it comes to something like Docker whic...\
  \
  Hacker News
- [link](https://www.neenopal.com/blog/Docker)\
  All About Docker & Containers - What Is It & Why Do We Need It?\
  Oct 10, 2023 — Show All Containers Docker PS is the essential command to list existing docker containers in running state. PS stands for “Process...\
  \
  \
  NeenOpal

Show all

# all docker container commands

The primary way to manage Docker containers is through the **`docker container`** subcommand group, though many developers use older, direct shorthand aliases (like `docker ps` or `docker run`). [link](https://docs.docker.com/reference/cli/docker/container/)

### Creating and Running Containers

- `docker run`: Creates and starts a container in one step.
- `docker create`: Creates a container but leaves it stopped.
- `docker container create`: Explicit syntax to create a stopped container. [link](https://www.youtube.com/watch?v=rLrISSCXiMo)

### Starting and Stopping

- `docker start`: Starts one or more stopped containers.
- `docker stop`: Stops a running container gracefully.
- `docker restart`: Restarts a container.
- `docker kill`: Kills a container immediately.
- `docker pause`: Pauses all processes in a container.
- `docker unpause`: Resumes processes in a paused container. [link](https://docs.docker.com/reference/cli/docker/container/)

### Listing and Information

- `docker ps`: Lists currently running containers.
- `docker ps -a`: Lists all containers, including stopped ones.
- `docker container ls`: Explicit command to list containers.
- `docker inspect`: Displays low-level metadata of a container.
- `docker logs`: Fetches logs written by a container.
- `docker stats`: Shows live resource usage statistics.
- `docker top`: Lists running processes inside a container.
- `docker port`: Lists port mappings for the container. [link](https://docs.docker.com/reference/cli/docker/container/)

### Interacting with Containers

- `docker exec`: Runs a new command inside a running container.
- `docker attach`: Attaches local standard input/output streams to a container.
- `docker cp`: Copies files/folders between a container and local filesystem.
- `docker diff`: Inspects changes to files on the container's filesystem. [link](https://docs.docker.com/reference/cli/docker/container/)

### Lifecycle and Cleanup

- `docker rm`: Removes one or more stopped containers.
- `docker rm -f`: Forces removal of a running container.
- `docker container prune`: Deletes all stopped containers.
- `docker rename`: Renames an existing container.
- `docker update`: Updates configuration parameters (CPU, memory limits) of a container.
- `docker commit`: Creates a new image from a container's changes.
- `docker export`: Exports a container's filesystem as a tar archive.
- `docker wait`: Blocks the terminal until a container stops, then prints its exit code. [link](https://docs.docker.com/reference/cli/docker/container/)

If you are looking to debug or set up a pipeline, I can provide the **exact flags** needed for a specific task. Would you like to see examples for **interactive debugging** or **automated cleanup**?

- [link](https://docs.docker.com/reference/cli/docker/container/)\
  docker container - Docker Docs\
  docker container exec, Execute a command in a running container. docker container export, Export a container's filesystem as a tar...\
  Docker Docs
- [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)\
  CLI Cheat Sheet - Docker Docs\
  docker run -d . Start or stop an existing container: docker start|stop (or ). Remove a stopped container: docker rm . Open a shell...\
  Docker Docs
- [link](https://docs.docker.com/reference/cli/docker/container/ls/)\
  docker container ls\
  docker container ls | Docker Docs. What can I help you with? I'm Gordon, your AI assistant for Docker and documentation questions.\
  Docker Docs

Show all

## all docker container commands, i mean container

To manage Docker containers using the official, explicit syntax, you use the `docker container <COMMAND>` structure.

### Management Commands

- **`docker container run`**: Creates and starts a container from an image.
- **`docker container create`**: Creates a new container but does not start it.
- **`docker container start`**: Starts one or more stopped containers.
- **`docker container stop`**: Stops one or more running containers gracefully.
- **`docker container restart`**: Restarts one or more containers.
- **`docker container kill`**: Stops a running container abruptly.
- **`docker container pause`**: Pauses all processes inside a container.
- **`docker container unpause`**: Unpauses all processes inside a container.

### Monitoring and Inspection

- **`docker container ls`**: Lists all active running containers.
- **`docker container ls -a`**: Lists all containers, including stopped ones.
- **`docker container logs`**: Fetches the logs of a container.
- **`docker container inspect`**: Displays detailed, low-level information on a container.
- **`docker container stats`**: Displays a live stream of container resource usage statistics.
- **`docker container top`**: Displays the running processes of a container.
- **`docker container port`**: Lists port mappings or a specific mapping for the container.

### Modification and Interaction

- **`docker container exec`**: Runs a new command inside a running container.
- **`docker container attach`**: Attaches local standard input, output, and error streams to a running container.
- **`docker container cp`**: Copies files/folders between a container and the local filesystem.
- **`docker container diff`**: Inspects changes to files or directories on a container’s filesystem.
- **`docker container rename`**: Renames a container.
- **`docker container update`**: Updates the resource configuration (CPU, memory limits) of one or more containers.

### Cleanup and Exporting

- **`docker container rm`**: Removes one or more stopped containers.
- **`docker container prune`**: Removes all stopped containers at once.
- **`docker container commit`**: Creates a new image from a container's changes.
- **`docker container export`**: Exports a container's filesystem as a tar archive.
- **`docker container wait`**: Blocks until a container stops, then prints its exit code.

I can help you build the exact command structure for your specific environment. Do you need a setup for **persistent storage volume mapping**, or are you configuring **custom network routing** for your containers?

- [link](https://hostman.com/tutorials/basic-docker-commands-you-need-to-know/)\
  Essential Docker Commands for Efficient Workflow\
  Mar 25, 2024 — If you are just starting out, check out the installation guide for Docker on Ubuntu 22.04. The basic syntax of docker exec is: doc...\
  \
  Hostman
- [link](https://do4ds.com/chapters/sec1/1-6-docker.html)\
  6 Demystifying Docker\
  You can control Docker Containers from the Docker Desktop app. If you're using Docker on a server, you'll mostly interact via the ...\
  \
  \
  DevOps for Data Science
- [link](https://medium.com/@ravipatel.it/mastering-docker-top-50-important-commands-explained-with-examples-98bcf77e0169)\
  Mastering Docker: Top 50 Important Commands Explained with Examples\
  Feb 19, 2024 — 5. docker run Description: Create and start a Docker container from an image. Example:\
  \
  Medium

Show all

# 
