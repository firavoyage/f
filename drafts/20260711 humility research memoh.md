<!-- at liehuo game center. groupmates found: mio. acbox. (and some others) -->

<!-- would things change much? anyway let's see. -->

<!-- just one liner i guess. as long as ik where things are stored (to be purged if needed) and which docker container could be stopped it would be fine. -->

# (?) . git pull

```sh
 ~ % cd /home/fira/Projects/Memoh
 ~/Projects/Memoh % git pull
remote: Enumerating objects: 13144, done.
remote: Counting objects: 100% (5469/5469), done.
remote: Compressing objects: 100% (1991/1991), done.
remote: Total 13144 (delta 4274), reused 3552 (delta 3470), pack-reused 7675 (from 3)
Receiving objects: 100% (13144/13144), 15.11 MiB | 2.24 MiB/s, done.
Resolving deltas: 100% (7323/7323), completed with 309 local objects.
From https://github.com/memohai/Memoh
 + d48cb922a...d62a4221d main                                           -> origin/main  (forced update)
 * [new branch]          chore/update-go-client-ua                      -> origin/chore/update-go-client-ua
 * [new branch]          ci/desktop-online-flavor                       -> origin/ci/desktop-online-flavor
 * [new branch]          codex/add-apply-patch-tool                     -> origin/codex/add-apply-patch-tool
 * [new branch]          codex/add-get-messages-tool                    -> origin/codex/add-get-messages-tool
 * [new branch]          codex/add-japanese-i18n                        -> origin/codex/add-japanese-i18n
 * [new branch]          codex/add-list-skill-tool                      -> origin/codex/add-list-skill-tool
 * [new branch]          codex/agent-output-context-limits              -> origin/codex/agent-output-context-limits
 * [new branch]          codex/align-sidebar-settings-action            -> origin/codex/align-sidebar-settings-action
 * [new branch]          codex/background-exec-handoff-ux               -> origin/codex/background-exec-handoff-ux
 * [new branch]          codex/bot-hooks                                -> origin/codex/bot-hooks
 * [new branch]          codex/center-new-bot-page                      -> origin/codex/center-new-bot-page
 * [new branch]          codex/chat-schedule-tabs                       -> origin/codex/chat-schedule-tabs
 * [new branch]          codex/consolidate-kata-scripts                 -> origin/codex/consolidate-kata-scripts
 * [new branch]          codex/containerd-kata-runtime                  -> origin/codex/containerd-kata-runtime
 * [new branch]          codex/customize-workspace-desktop              -> origin/codex/customize-workspace-desktop
 * [new branch]          codex/desktop-remote-dev-script                -> origin/codex/desktop-remote-dev-script
 * [new branch]          codex/display-cursor-optimization              -> origin/codex/display-cursor-optimization
 * [new branch]          codex/display-macos-cursor-fixes               -> origin/codex/display-macos-cursor-fixes
 * [new branch]          codex/electron-ci-online-only                  -> origin/codex/electron-ci-online-only
 * [new branch]          codex/email-user-scope-gmail-oauth             -> origin/codex/email-user-scope-gmail-oauth
 * [new branch]          codex/fix-bridge-tcp-bind                      -> origin/codex/fix-bridge-tcp-bind
 * [new branch]          codex/fix-display-style-timeout                -> origin/codex/fix-display-style-timeout
 * [new branch]          codex/fix-display-tab-pointer                  -> origin/codex/fix-display-tab-pointer
 * [new branch]          codex/fix-npm-publish-auth                     -> origin/codex/fix-npm-publish-auth
 * [new branch]          codex/fix-workspace-default-image              -> origin/codex/fix-workspace-default-image
 * [new branch]          codex/fix-workspace-session-tabs               -> origin/codex/fix-workspace-session-tabs
 * [new branch]          codex/fix-workspace-sidebar-actions            -> origin/codex/fix-workspace-sidebar-actions
 * [new branch]          codex/hotfix-docker-compose-context            -> origin/codex/hotfix-docker-compose-context
 * [new branch]          codex/manage-bot-quick-action                  -> origin/codex/manage-bot-quick-action
 * [new branch]          codex/managed-workspace-skills                 -> origin/codex/managed-workspace-skills
 * [new branch]          codex/move-docs-site                           -> origin/codex/move-docs-site
 * [new branch]          codex/persistent-chat-tabs                     -> origin/codex/persistent-chat-tabs
 * [new branch]          codex/plugin-install-navigate                  -> origin/codex/plugin-install-navigate
 * [new branch]          codex/plugin-install-scripts                   -> origin/codex/plugin-install-scripts
 * [new branch]          codex/plugin-trust-boundary-skills             -> origin/codex/plugin-trust-boundary-skills
 * [new branch]          codex/prompt-structure-heartbeat-default       -> origin/codex/prompt-structure-heartbeat-default
 * [new branch]          codex/prune-redundant-tests                    -> origin/codex/prune-redundant-tests
 * [new branch]          codex/python-workspace-toolkit                 -> origin/codex/python-workspace-toolkit
 * [new branch]          codex/refactor-background-task-wait-tools      -> origin/codex/refactor-background-task-wait-tools
 * [new branch]          codex/refactor-bot-settings-ui                 -> origin/codex/refactor-bot-settings-ui
 * [new branch]          codex/refactor-tool-approval-operations        -> origin/codex/refactor-tool-approval-operations
 * [new branch]          codex/refine-chat-model-picker-menu            -> origin/codex/refine-chat-model-picker-menu
 * [new branch]          codex/rem-chat-tool-font-sizes                 -> origin/codex/rem-chat-tool-font-sizes
 * [new branch]          codex/remote-local-desktop-ui                  -> origin/codex/remote-local-desktop-ui
 * [new branch]          codex/remove-sqlite-local-desktop              -> origin/codex/remove-sqlite-local-desktop
 * [new branch]          codex/rename-vnc-workspace-image               -> origin/codex/rename-vnc-workspace-image
 * [new branch]          codex/restore-web-search-fetch-layout          -> origin/codex/restore-web-search-fetch-layout
 * [new branch]          codex/single-agent-subagent-control            -> origin/codex/single-agent-subagent-control
 * [new branch]          codex/split-background-status-tools            -> origin/codex/split-background-status-tools
 * [new branch]          codex/sync-channel-platform-logos              -> origin/codex/sync-channel-platform-logos
 * [new branch]          codex/sync-litellm-provider-templates          -> origin/codex/sync-litellm-provider-templates
 * [new branch]          codex/team-multitenancy                        -> origin/codex/team-multitenancy
 * [new branch]          codex/terminal-bench-e2e                       -> origin/codex/terminal-bench-e2e
 * [new branch]          codex/web-fetch-providers                      -> origin/codex/web-fetch-providers
 * [new branch]          codex/webui-browser-workspace-tab              -> origin/codex/webui-browser-workspace-tab
 * [new branch]          codex/workspace-dev-image                      -> origin/codex/workspace-dev-image
 * [new branch]          codex/workspace-resource-limits                -> origin/codex/workspace-resource-limits
 * [new branch]          copilot/fix-failing-build-desktop-job          -> origin/copilot/fix-failing-build-desktop-job
 * [new branch]          copilot/memoh-april-fools-ad                   -> origin/copilot/memoh-april-fools-ad
 * [new branch]          copilot/memoh-april-fools-promotion            -> origin/copilot/memoh-april-fools-promotion
 * [new branch]          cursor/agent-team                              -> origin/cursor/agent-team
 * [new branch]          cursor/bot-user-access-grants-0a45             -> origin/cursor/bot-user-access-grants-0a45
 * [new branch]          cursor/fix-markstream-markdown-styles          -> origin/cursor/fix-markstream-markdown-styles
 * [new branch]          cursor/gui-tool-styles-and-filter-removal-8268 -> origin/cursor/gui-tool-styles-and-filter-removal-8268
 * [new branch]          feat/bot-name-url                              -> origin/feat/bot-name-url
 * [new branch]          feat/ephemeral-preview-tabs                    -> origin/feat/ephemeral-preview-tabs
 * [new branch]          feat/plugin-system                             -> origin/feat/plugin-system
 * [new branch]          feat/sessions-paged                            -> origin/feat/sessions-paged
 * [new branch]          feat/split-sse                                 -> origin/feat/split-sse
 * [new branch]          feat/sse-split                                 -> origin/feat/sse-split
 * [new branch]          feat/tool-call-input-start                     -> origin/feat/tool-call-input-start
 * [new branch]          feat/voice-provider-presets-websearch-logos-sidebar -> origin/feat/voice-provider-presets-websearch-logos-sidebar
 * [new branch]          feat/web-localhost-link-browser-tab            -> origin/feat/web-localhost-link-browser-tab
 * [new branch]          feat/zhipu-provider-preset                     -> origin/feat/zhipu-provider-preset
 * [new branch]          fix/bot-model-switch-discoverability           -> origin/fix/bot-model-switch-discoverability
 * [new branch]          fix/computer-use-cjk-input                     -> origin/fix/computer-use-cjk-input
 * [new branch]          fix/historyfrag-memory-query-api               -> origin/fix/historyfrag-memory-query-api
 * [new branch]          fix/lost-user-prompt                           -> origin/fix/lost-user-prompt
   973f11521..35c6d7111  gh-pages                                       -> origin/gh-pages
 * [new branch]          pr/592                                         -> origin/pr/592
 * [new branch]          refactor/chat-list-sse                         -> origin/refactor/chat-list-sse
   595218077..dc71debeb  v0.9                                           -> origin/v0.9
 * [new tag]             v0.8.3                                         -> v0.8.3
 * [new tag]             v0.10.0                                        -> v0.10.0
 * [new tag]             v0.10.0-alpha.1                                -> v0.10.0-alpha.1
 * [new tag]             v0.11.0                                        -> v0.11.0
 * [new tag]             v0.12.0                                        -> v0.12.0
 * [new tag]             v0.13.0                                        -> v0.13.0
 * [new tag]             v0.13.1                                        -> v0.13.1
 * [new tag]             v0.14.0                                        -> v0.14.0
 * [new tag]             v0.15.0                                        -> v0.15.0
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
 ~/Projects/Memoh % git pullgit fetch origin && git reset --hard origin/main

git: 'pullgit' is not a git command. See 'git --help'.
 ~/Projects/Memoh % git fetch origin && git reset --hard origin/main

HEAD is now at d62a4221d chore(sdk): upgrade Hey API to 0.99.0 (#769)
```

# (?) git pull fatal: Need to specify how to reconcile divergent branches.

This error happens because your local branch and the remote branch have diverged, and Git does not know whether to merge or rebase the changes.

### Quick Fixes

Run **one** of the following commands to tell Git how to handle the split:

- **Option 1: Merge (Standard)**\
  Combines histories and creates a merge commit.\
  bash

<!---->

```
git config pull.rebase false
```

Use code with caution.

- **Option 2: Rebase (Cleaner History)**\
  Places your local commits on top of the remote commits.\
  bash

<!---->

```
git config pull.rebase true
```

Use code with caution.

- **Option 3: Fast-Forward Only**\
  Only pulls if no local commits exist. Fails otherwise.\
  bash

<!---->

```
git config pull.ff only
```

Use code with caution.

### Apply Globally or Per-Command

- To apply your choice to **all repositories** on your machine, add `--global` right after `git config`.

- To apply your choice **just for this single pull**, run:\
  bash

<!---->

```
git pull --rebase
```

Use code with caution.\
_(Swap `--rebase` with `--no-rebase` or `--ff-only` depending on your choice)._

### What to do next?

To help you get back to work smoothly, let me know:

- Are you **working with a team** on this branch? (Merging is usually safer for teams).
- Do you want to **keep your local commit history** looking perfectly linear? (Rebasing is best for this).

I can help you choose the best workflow for your project.

- [link](https://medium.com/@rajlaxmii/git-error-you-have-divergent-branches-and-need-to-specify-how-to-reconcile-them-75e97bd8abd2)\
  Git Error: You have divergent branches and need to specify how to reconcile them.\
  Aug 14, 2023 — Git Error: You have divergent branches and need to specify how to reconcile them. The message you're seeing indicates that you're ...\
  \
  \
  Medium
- [link](https://bobcares.com/blog/git-error-fatal-refusing-to-merge-unrelated-histories/)\
  Fix the “fatal: refusing to merge unrelated histories” Git Error\
  May 19, 2025 — This error occurs when merging two Git repositories or branches that don't share a common commit history. Git sees them as entirel...\
  \
  \
  Bobcares
- [link](https://gitlab.com/kicad/code/kicad/-/issues/5023)\
  "cannot pull with rebase: You have unstaged changes" on "git pull" (#5023) · Issues · KiCad / KiCad Source Code / kicad · GitLab\
  Jul 31, 2020 — Description on the command "git pull" to get latest sources the answer is: error: cannot pull with rebase: You have unstaged chang...\
  \
  GitLab

Show all

## force as if i deleted and cloned the repo again

To completely overwrite your local branch with the exact state of the remote branch—mimicking a fresh clone without deleting the folder—run these two commands in your terminal:

bash

```
git fetch origin
git reset --hard origin/<branch-name>
```

Use code with caution.

### ⚠️ Warning

The `git reset --hard` command is destructive. It will permanently delete:

- All uncommitted local changes (tracked and untracked files).
- Any local commits that you have not pushed to the remote repository.

### Quick Shortcuts

- **If you are on the `main` branch:**\
  bash

<!---->

```
git fetch origin && git reset --hard origin/main
```

Use code with caution.

- **If you are on the `master` branch:**\
  bash

<!---->

```
git fetch origin && git reset --hard origin/master
```

Use code with caution.

If you are unsure of your current branch name, type `git branch --show-current` first to check.

Would you like help **recovering any uncommitted files** before running this, or are you ready to completely wipe the local history?

- [link](https://medium.com/@vishalbarvaliya/resetting-your-git-branch-to-a-previous-commit-a-complete-guide-96cc314a172e)\
  Resetting Your Git Branch to a Previous Commit: A Complete Guide\
  Jul 30, 2024 — When to Use \` git reset --hard\` When you need to completely discard changes and reset both your working directory and staging area...\
  \
  \
  Medium
- [link](https://blog.openreplay.com/git-force-pull/)\
  Git Force Pull: How to Safely Overwrite Local Changes and Sync with Remote\
  Feb 10, 2025 — :warning: Warning: git reset --hard will permanently delete all uncommitted local changes. Make sure you really want to discard yo...\
  \
  \
  OpenReplay Blog
- [link](https://blog.openreplay.com/git-force-pull/)\
  Git Force Pull: How to Safely Overwrite Local Changes and Sync with Remote\
  Feb 10, 2025 — :warning: Warning: git reset --hard will permanently delete all uncommitted local changes. Make sure you really want to discard yo...\
  \
  \
  OpenReplay Blog

Show all

# <!-- 14 jul -->

# . sh

```sh
 ~ % cd /home/fira/Projects/memoh docker
cd: string not in pwd: /home/fira/Projects/memoh
 ~ % cd '/home/fira/Projects/memoh docker'
 ~/Projects/memoh docker % cp conf/app.docker.toml config.toml
 ~/Projects/memoh docker % open config.toml
 ~/Projects/memoh docker % docker compose up -d
[+] up 24/24
 ✔ Image pgvector/pgvector:pg18 Pulled                                                                                          150.5s
 ✔ Network memoh_memoh-network  Created                                                                                         0.0s
 ✔ Volume memoh_pgvector_data   Created                                                                                         0.0s
 ✔ Container memoh-pgvector     Healthy                                                                                         11.6s
 ✔ Container memoh-postgres     Healthy                                                                                         11.0s
 ✔ Container memoh-migrate      Exited                                                                                          11.4s
 ✔ Container memoh-server       Started                                                                                         15.4s
 ✔ Container memoh-web          Started                                                                                         15.5s
```

# . evaluation

seems it's much easier to deploy memoh now wo the one liner.

you can copy a config and docker up. no need to edit and place files step by step. (prone to human errors. complex and unnecessary.)

---

well... still, idk where it's running. i dont have a --help cli or a status command.

maybe it's running on the port on config.toml.

8080? no. 8082.

```toml
## Service configuration
[log]
level = "info"
format = "text"

[server]
addr = "server:8080"

[webhook_tunnel]
mode = "disabled"
public_base_url = ""
listen_addr = ":18734"
cloudflared_path = ""
target_url = ""
metrics_addr = "127.0.0.1:18735"
metrics_url = ""

## Admin
[admin]
username = "admin"
password = "admin123"
email = "admin@memoh.local"

## Auth configuration
[auth]
jwt_secret = "YZq8kXrW5dFpNt9mLxQvHbRjKsMnOePw"
jwt_expires_in = "168h"

timezone = "UTC"

[database]
# Memoh now supports PostgreSQL only.
driver = "postgres"

[container]
# Docker Compose deployment uses the server image's embedded containerd. Do not
# change this to "docker" inside Compose unless you also provide host-valid
# runtime bind mounts and Docker socket access.
backend = "containerd"
# registry = "memoh.cn"  # Uncomment for China mainland mirror
default_image = "memohai/workspace:debian"
image_pull_policy = "if_not_present"
# containerd snapshotter and CNI settings for bot workspace containers.
snapshotter = "overlayfs"
data_root = "/opt/memoh/data"
runtime_dir = "/opt/memoh/runtime"

## Workspace containerd configuration
[containerd]
# Embedded containerd socket inside the memoh-server container.
socket_path = "/run/containerd/containerd.sock"
namespace = "default"
# Set to "io.containerd.kata.v2" only when the host provides Kata and KVM.
runtime_type = "io.containerd.runc.v2"

[docker]
# Used only when [container].backend = "docker"; the official Compose stack
# uses containerd above.
host = ""

[local]
# Local workspaces are intended for trusted desktop builds, not the default
# Docker Compose deployment. Keep disabled here because local commands run as
# the server process user without container isolation.
enabled = false
default_workspace_parent = "~/.memoh/workspaces"
metadata_root = ""
allow_absolute_paths = false

## Postgres configuration.
[postgres]
host = "postgres"
port = 5432
user = "memoh"
password = "memoh123"
database = "memoh"
sslmode = "disable"

## pgvector auxiliary index database. The main Postgres service remains the
## relational source of truth; this separate service stores semantic seed vectors.
[pgvector]
enabled = true
host = "pgvector"
port = 5432
user = "memoh"
password = "memoh123"
database = "memoh_vector"
sslmode = "disable"

[registry]
providers_dir = "conf/providers"

[supermarket]
base_url = "https://supermarket.memoh.ai"

[oauth_clients]
config_path = "conf/oauth-clients.toml"

## Web
[web]
host = "127.0.0.1"
port = 8082
```

wow. impressive. how confusing it is.

---

admin, admin123. a bit childish.

---

idk why my data are kept intact. 

---

Version
vv0.6.3
49e5f3d

it's definitely weird. (why two consecutive `v`)

on github releases it's 0.16.0. maybe desktop rel are different.

---

btw, the ui hasnt changed much.

selection is default. focus ring is not consistent.

light mode scrollbar on dark mode.

# all docker commands

The **[official Docker CLI Docs](https://docs.docker.com/reference/cli/docker/)** organizes its interface into **management commands** (such as `docker container`, `docker image`) alongside traditional, direct shortcuts (like `docker run`, `docker ps`). [link](https://docs.docker.com/reference/cli/docker/)

Here is the complete categorized reference guide for Docker commands. [link](https://buddy.works/tutorials/docker-commands-cheat-sheet)

### Container Management

- **`docker run <image>`**: Creates and starts a container from an image.
- **`docker run -d <image>`**: Runs a container in detached background mode.
- **`docker run -it <image> /bin/bash`**: Starts a container in interactive mode with a terminal.
- **`docker ps`**: Lists all currently running containers.
- **`docker ps -a`**: Lists all containers, including stopped ones.
- **`docker stop <container>`**: Gracefully halts a running container.
- **`docker start <container>`**: Initiates a previously stopped container.
- **`docker restart <container>`**: Stops and immediately restarts a container.
- **`docker kill <container>`**: Ungracefully forces a container to stop immediately.
- **`docker rm <container>`**: Removes a stopped container from the host system.
- **`docker rm -f <container>`**: Forces the removal of a running container.
- **`docker pause <container>`**: Temporarily suspends all processes within a container.
- **`docker unpause <container>`**: Resumes processes in a paused container.
- **`docker rename <old_name> <new_name>`**: Changes the name of a container. [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)

### Interacting with Containers

- **`docker exec -it <container> <command>`**: Runs a command inside an active container.
- **`docker logs <container>`**: Fetches the logs of a container.
- **`docker logs -f <container>`**: Streams live, real-time log updates.
- **`docker cp <host_path> <container>:<path>`**: Copies files between the host and a container.
- **`docker top <container>`**: Displays the running processes inside a container.
- **`docker port <container>`**: Lists the port mappings for a container.
- **`docker attach <container>`**: Attaches local standard input/output streams to a container. [link](https://www.reddit.com/r/selfhosted/comments/g3p37k/25%5Fbasic%5Fdocker%5Fcommands%5Ffor%5Fbeginners/)

### Image Management

- **`docker images`**: Lists all locally stored images.
- **`docker build -t <name>:<tag> .`**: Builds an image from a Dockerfile in the current directory.
- **`docker build --no-cache -t <name> .`**: Builds an image without utilizing cached layers.
- **`docker pull <image>`**: Downloads an image from Docker Hub or another registry.
- **`docker push <image>`**: Uploads a local image to a specified registry.
- **`docker rmi <image>`**: Deletes a specific local image.
- **`docker tag <image> <new_name>:<tag>`**: Assigns a new tag name to an existing image.
- **`docker history <image>`**: Displays the history and build layers of an image.
- **`docker commit <container> <new_image>`**: Creates a new image from a container's current state.
- **`docker save -o <file.tar> <image>`**: Exports an image to a tarball archive.
- **`docker load -i <file.tar>`**: Imports an image from a saved tarball archive. [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)

### Volume & Network Configuration

- **`docker volume ls`**: Lists all active volumes.
- **`docker volume create <name>`**: Creates a new persistent storage volume.
- **`docker volume rm <name>`**: Deletes a specified storage volume.
- **`docker network ls`**: Lists all networks configured by Docker.
- **`docker network create <name>`**: Creates a new software-defined network.
- **`docker network connect <network> <container>`**: Connects a running container to a network.
- **`docker network disconnect <network> <container>`**: Disconnects a container from a specific network. [link](https://www.reddit.com/r/selfhosted/comments/g3p37k/25%5Fbasic%5Fdocker%5Fcommands%5Ffor%5Fbeginners/)

### Inspection & Monitoring

- **`docker inspect <name_or_id>`**: Returns detailed, low-level JSON info on any Docker object.
- **`docker stats`**: Displays a live streaming feed of resource usage metrics.
- **`docker diff <container>`**: Inspects changes made to files or directories on the filesystem.
- **`docker events`**: Streams real-time events occurring on the Docker daemon engine. [link](https://buddy.works/tutorials/docker-commands-cheat-sheet)

### System Clean Up

- **`docker system df`**: Displays total disk space used by images, containers, and volumes.
- **`docker image prune`**: Removes all dangling, unreferenced images.
- **`docker system prune`**: Cleans up all unused containers, networks, images, and caches.
- **`docker system prune -a --volumes`**: Aggressively wipes all stopped containers, unused images, and unused volumes. [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)

### Global & Info Commands

- **`docker version`**: Displays version data for the client and server components.
- **`docker info`**: Displays system-wide configuration information.
- **`docker login`**: Authenticates your command line to a remote Docker registry.
- **`docker logout`**: Log out from a designated Docker registry backend. [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)

***

Are you attempting to troubleshoot a **specific application bug**, or would you like a customized **Docker Compose configuration example** for your environment?

- [link](https://docs.docker.com/get-started/docker%5Fcheatsheet.pdf)\
  CLI Cheat Sheet - Docker Docs\
  Page 1. CLI Cheat Sheet. Build an Image from a Dockerfile. Build an Image from a Dockerfile without the cache. docker build -t . –...\
  Docker Docs
- [link](https://docs.docker.com/reference/cli/docker/)\
  Docker Docs\
  By default, the Docker command line stores its configuration files in a directory called .docker within your $HOME directory. Dock...\
  Docker Docs
- [link](https://buddy.works/tutorials/docker-commands-cheat-sheet)\
  Docker Commands Cheat Sheet: Complete Reference\
  Mar 2, 2026 — Table\_title: Docker Cheatsheet: Quick Command Reference Table\_content: | Command | What it does | | --- | --- | | docker ps | List...\
  buddy.works

Show all

## all docker compose commands

The **[official Docker Compose CLI Docs](https://docs.docker.com/reference/cli/docker/)** outline commands managed through the plugin syntax (`docker compose <command>`). Older setups might still use the legacy, hyphenated version (`docker-compose <command>`).

Here is the complete categorized reference guide for Docker Compose commands.

### Environment Lifecycle

- **`docker compose up`**: Builds, creates, and starts all services in the foreground.
- **`docker compose up -d`**: Starts all services in detached background mode.
- **`docker compose up --build`**: Forces a rebuild of images before starting containers.
- **`docker compose down`**: Stops and removes containers, networks, and images created by `up`.
- **`docker compose down -v`**: Stops services and completely wipes associated named volumes.
- **`docker compose start`**: Starts existing, stopped containers for the services.
- **`docker compose stop`**: Halts running containers without removing them or their networks.
- **`docker compose restart`**: Restarts all active or stopped services.
- **`docker compose pause`**: Pauses all running processes within the service containers.
- **`docker compose unpause`**: Unpauses all processes within the service containers.

### Monitoring & Status

- **`docker compose ps`**: Lists the status of containers related to the project.
- **`docker compose ps -a`**: Lists all project containers, including stopped ones.
- **`docker compose logs`**: Displays log output from all services.
- **`docker compose logs -f <service>`**: Streams real-time, live logs for a specific service.
- **`docker compose top`**: Displays the running processes within each service container.
- **`docker compose images`**: Lists the local images used by the current services.
- **`docker compose port <service> <private_port>`**: Prints the public port mapping for a service binding.
- **`docker compose ls`**: Lists all running compose projects on the host system.

### Management & Execution

- **`docker compose exec <service> <command>`**: Runs an interactive command inside a running service container.
- **`docker compose run <service> <command>`**: Spawns a one-off container to run a specific command.
- **`docker compose build`**: Builds or rebuilds services defined with a `build` block.
- **`docker compose build --no-cache`**: Rebuilds the service images entirely from scratch.
- **`docker compose pull`**: Downloads the external images specified in the configuration file.
- **`docker compose push`**: Uploads locally built images for your services to registries.
- **`docker compose rm`**: Removes stopped service containers from the host.
- **`docker compose kill`**: Forces running service containers to stop using a SIGKILL signal.

### Validation & Utility

- **`docker compose config`**: Validates and renders the final, merged `docker-compose.yml` text.
- **`docker compose version`**: Prints the installed Compose software version information.
- **`docker compose cp <service>:<path> <host_path>`**: Copies files between a service container and the host file system.
- **`docker compose watch`**: Automatically monitors the host system for file changes to sync into containers.

***

Would you like help writing a specific **`docker-compose.yml` template** for a specific stack (like Node.js, Python, or a database setup), or are you trying to troubleshoot a **network configuration** issue?

- [link](https://forums.unraid.net/topic/114415-plugin-docker-compose-manager/page/17/)\
  \[Plugin] Docker Compose Manager - Page 17 - Plugin Support - Unraid\
  Oct 3, 2021 — mrpops2ko Members Beta Release! This plugin installs docker compose and compose switch. Use "docker compose" or "docker-compose" f...\
  \
  \
  Unraid
- [link](https://docs.docker.com/compose/intro/compose-application-model/)\
  How Compose works\
  The Docker CLI lets you interact with your Docker Compose applications through the docker compose command and its subcommands. If ...\
  \
  \
  Docker Docs
- [link](https://reintech.io/blog/setting-up-docker-docker-compose-debian-12)\
  Setting Up Docker and Docker Compose on Debian 12\
  Jan 17, 2024 — Note the command syntax: docker compose (two words) instead of the legacy docker-compose (hyphenated). The plugin integrates direc...\
  \
  Reintech.io

Show all

# . test version quirk

```sh
 ~ % cd /home/fira/Projects/memoh docker
cd: string not in pwd: /home/fira/Projects/memoh
 ~ % cd '/home/fira/Projects/memoh docker'
 ~/Projects/memoh docker % cp conf/app.docker.toml config.toml
 ~/Projects/memoh docker % open config.toml
 ~/Projects/memoh docker % docker compose up -d
[+] up 24/24
 ✔ Image pgvector/pgvector:pg18 Pulled                                                                                          150.5s
 ✔ Network memoh_memoh-network  Created                                                                                         0.0s
 ✔ Volume memoh_pgvector_data   Created                                                                                         0.0s
 ✔ Container memoh-pgvector     Healthy                                                                                         11.6s
 ✔ Container memoh-postgres     Healthy                                                                                         11.0s
 ✔ Container memoh-migrate      Exited                                                                                          11.4s
 ✔ Container memoh-server       Started                                                                                         15.4s
 ✔ Container memoh-web          Started                                                                                         15.5s
 ~/Projects/memoh docker % docker compose up -d
[+] up 5/5
 ✔ Container memoh-pgvector Healthy                                                                                               1.2s
 ✔ Container memoh-postgres Healthy                                                                                               0.5s
 ✔ Container memoh-server   Running                                                                                               0.0s
 ✔ Container memoh-web      Running                                                                                               0.0s
 ✔ Container memoh-migrate  Exited                                                                                                0.6s
 ~/Projects/memoh docker % docker compose down
[+] down 6/6
 ✔ Container memoh-web         Removed                                                                                           10.2s
 ✔ Container memoh-server      Removed                                                                                           13.7s
 ✔ Container memoh-pgvector    Removed                                                                                           0.1s
 ✔ Container memoh-migrate     Removed                                                                                           0.0s
 ✔ Container memoh-postgres    Removed                                                                                           0.1s
 ✔ Network memoh_memoh-network Removed                                                                                           0.1s
```

# . result

wow. 10s docker default. hope you enjoy it.

---

This site can’t be reachedlocalhost refused to connect.

yes. it is this docker that is running. 

test done. 

---

i guess i could test comprehensively tomorrow w screen recording.

(and note taking)


