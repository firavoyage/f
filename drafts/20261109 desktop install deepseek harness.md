# . background

a student sitting next to me on py syntax intro class just stucks on a windows command line.

idk.

```
用电脑桌面版/浏览器里的 deepseek 多好, 也不用一点一点抄写了

如果装不上也可以 deepseek.com 就可以, 大概.

---

(笑)

怎么一分钟还没有装好.

可以试试看 **bun** 或者 pnpm (记忆里... npm 很慢)

或者配置中国大陆镜像源.

可以开 deepseek.com 问

> 如何在 windows 上安装 bun, 配置中国大陆镜像, 并安装 deepseek harness

---

我自己试试看...

---

不是 pun

---

完成了.

---

that's it.

...

_怎么还在装..._

可以打开浏览器网页版 deepseek.com 问问看...

---

fine.
```

# . test

```
 ~ % bun add -g @deepseek-ai/dsh

bun add v1.3.14 (0d9b296a)
warn: incorrect peer dependency "@opentelemetry/api@1.10.0"

warn: incorrect peer dependency "@opentelemetry/api@1.10.0"

warn: incorrect peer dependency "@opentelemetry/api@1.10.0"

warn: incorrect peer dependency "@opentelemetry/api@1.10.0"

warn: incorrect peer dependency "@opentelemetry/api@1.10.0"

installed @deepseek-ai/dsh@0.2.2-rc.1 with binaries:
 - dsh

585 packages installed [60.13s]

Blocked 4 postinstalls. Run `bun pm -g untrusted` for details.
 ~ % bun pm -g untrusted
bun pm untrusted v1.3.14 (0d9b296a)

./node_modules/@deepseek-ai/dsh-subprocess-local @0.2.2-rc.1
 » [postinstall]: node scripts/ensure-spawn-helper.mjs

./node_modules/koffi @3.1.1
 » [install]: node ./cnoke.cjs -P . -D src/koffi --prebuild --release

./node_modules/@google/genai @2.21.0
 » [preinstall]: echo 'preinstall: no-op'

./node_modules/protobufjs @7.6.6
 » [postinstall]: node scripts/postinstall

These dependencies had their lifecycle scripts blocked during install.

If you trust them and wish to run their scripts, use `bun pm trust`.
 ~ % bun pm trust
error: No package.json was found for directory "/home/fira"
note: Run "bun init" to initialize a project
 ~ % bun pm trust -g
bun pm trust v1.3.14 (0d9b296a)
error: expected package names(s) or --all
 ~ % bun pm trust -g @deepseek-ai/dsh

bun pm trust v1.3.14 (0d9b296a)

error: 0 scripts ran. The following packages are already trusted, don't have scripts to run, or don't exist:

 - @deepseek-ai/dsh
```

```
 ~ % dsh web

dsh: ALL_PROXY names a SOCKS proxy, which is not supported; connecting directly for that scheme — set an http:// or https:// proxy URL instead
dsh: startup failed: 2 required plugins did not activate

Failed plugins (1):
  webserver (required)
    Package: @deepseek-ai/dsh-host-webserver
    Error: listen EADDRINUSE: address already in use 127.0.0.1:3080
        at Server.setupListenHandle [as _listen2] (node:net:1948:16)
        at listenInCluster (node:net:2005:12)
        at node:net:2214:7
        at process.processTicksAndRejections (node:internal/process/task_queues:90:21)

Plugins waiting for services (5):
  Plugin                  Missing services
  web-runtime (required)  webServer
  open-in-app             webServer
  directory-picker        webServer
  harness-dev-context     webApp
  client-hmr              webServer

Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-31-34.766Z-7e221234-4069-4f29-bb93-fdb8df9fd334.log
 ~ % PORT=3081 dsh web

dsh: ALL_PROXY names a SOCKS proxy, which is not supported; connecting directly for that scheme — set an http:// or https:// proxy URL instead
dsh: startup failed: 2 required plugins did not activate

Failed plugins (1):
  webserver (required)
    Package: @deepseek-ai/dsh-host-webserver
    Error: listen EADDRINUSE: address already in use 127.0.0.1:3080
        at Server.setupListenHandle [as _listen2] (node:net:1948:16)
        at listenInCluster (node:net:2005:12)
        at node:net:2214:7
        at process.processTicksAndRejections (node:internal/process/task_queues:90:21)

Plugins waiting for services (5):
  Plugin                  Missing services
  web-runtime (required)  webServer
  open-in-app             webServer
  directory-picker        webServer
  harness-dev-context     webApp
  client-hmr              webServer

Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-32-49.838Z-94b8f104-77fa-43f3-9ce9-febae54cb378.log
```

```
 ~ % ALL_PROXY="" dsh web

dsh: startup failed: 2 required plugins did not activate

Failed plugins (1):
  webserver (required)
    Package: @deepseek-ai/dsh-host-webserver
    Error: listen EADDRINUSE: address already in use 127.0.0.1:3080
        at Server.setupListenHandle [as _listen2] (node:net:1948:16)
        at listenInCluster (node:net:2005:12)
        at node:net:2214:7
        at process.processTicksAndRejections (node:internal/process/task_queues:90:21)

Plugins waiting for services (5):
  Plugin                  Missing services
  web-runtime (required)  webServer
  open-in-app             webServer
  directory-picker        webServer
  harness-dev-context     webApp
  client-hmr              webServer

Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-33-04.106Z-4de9fd3f-dcf3-439f-a337-aa2d36f640be.log
 ~ % ALL_PROXY="" PORT=3081 dsh web

dsh: startup failed: 2 required plugins did not activate

Failed plugins (1):
  webserver (required)
    Package: @deepseek-ai/dsh-host-webserver
    Error: listen EADDRINUSE: address already in use 127.0.0.1:3080
        at Server.setupListenHandle [as _listen2] (node:net:1948:16)
        at listenInCluster (node:net:2005:12)
        at node:net:2214:7
        at process.processTicksAndRejections (node:internal/process/task_queues:90:21)

Plugins waiting for services (5):
  Plugin                  Missing services
  web-runtime (required)  webServer
  open-in-app             webServer
  directory-picker        webServer
  harness-dev-context     webApp
  client-hmr              webServer

Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-33-17.666Z-897a6186-20be-4b94-aa88-14f0dae4795a.log
```

```
 ~ % ALL_PROXY="" dsh web --port 3081

dsh web: http://127.0.0.1:3081/?token=VSTVUe_bfpSkP8J6VBHaW5FjhOYd-PJLjaWcND2wNyo
dsh web: opening the default browser; pass --no-open to disable
^C%                                                                                                                                    ~ % dsh web --port 3081

dsh: ALL_PROXY names a SOCKS proxy, which is not supported; connecting directly for that scheme — set an http:// or https:// proxy URL instead
dsh web: http://127.0.0.1:3081/?token=zP7Sipkhbd_KXaFOrEYgV0jZWVf-vzb5g81k4ULJYqs
dsh web: opening the default browser; pass --no-open to disable
^C%
```

```
 ~ % check_port 3080
tcp   LISTEN 0      4096                                     0.0.0.0:3080       0.0.0.0:*    users:(("docker-proxy",pid=3764,fd=8))
tcp   LISTEN 0      4096                                        [::]:3080          [::]:*    users:(("docker-proxy",pid=3771,fd=8))
```

```
 ~ % docker container ls
CONTAINER ID   IMAGE                                                                 COMMAND                  CREATED        STATUS       PORTS                                         NAMES
5a95edd99a03   gaozih/pvzge:latest                                                   "/docker-entrypoint.…"   5 weeks ago    Up 2 weeks   0.0.0.0:9000->80/tcp, [::]:9000->80/tcp       pvz
39b1fc1184da   registry.librechat.ai/danny-avila/librechat-dev:latest                "docker-entrypoint.s…"   4 months ago   Up 2 weeks   0.0.0.0:3080->3080/tcp, [::]:3080->3080/tcp   LibreChat
7932069654eb   registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest   "python main.py"         4 months ago   Up 2 weeks                                                 rag_api
91fffdbccb8b   pgvector/pgvector:0.8.0-pg15-trixie                                   "docker-entrypoint.s…"   4 months ago   Up 2 weeks   5432/tcp                                      vectordb
3b84a557c1ce   mongo:8.0.20                                                          "docker-entrypoint.s…"   4 months ago   Up 2 weeks   27017/tcp                                     chat-mongodb
6079d1cc531b   getmeili/meilisearch:v1.35.1                                          "tini -- /bin/sh -c …"   4 months ago   Up 2 weeks   7700/tcp                                      chat-meilisearch
```

# how to install deepseek harness globally via bun

2:30 AM

### how to install deepseek harness globally via bun

To install **DeepSeek Harness** globally using **Bun**, run the following command in your terminal:

bash

```
bun add -g @deepseek-ai/dsh

```



#### 🚀 Running the Harness

Once the installation is complete, you can launch the local web interface from any directory using the global `dsh` CLI binary: 

bash

```
dsh web

```



Alternatively, if you prefer not to install it globally, you can execute it instantly with Bun's runner: [](https://www.youtube.com/watch?v=MESElI3jlNg&t=60)

bash

```
bunx @deepseek-ai/dsh web

```



By default, this will spin up the local server and provide a link (usually `http://127.0.0.1:3080`) to open the **DeepSeek Harness** web application in your browser. [](https://springbrand.ai/deepseek-harness/install)

If you run into any issues, please let me know:

* What **operating system** you are currently running?
* Any **error messages** printed in your terminal?
* If you plan to connect it to the official cloud API or a **local Ollama instance**?

* [](https://docs.bswen.com/blog/2026-08-14-install-deepseek-harness-quickstart/)  
docs.bswen.com  
How to Install DeepSeek Harness and Run Your First Agent ...  
This prints the URL and serves the Web UI at http://127.0.0.1:3080 by default. Open the Web UI and go to Settings → Models, then e...
* [](https://www.youtube.com/watch?v=MESElI3jlNg&t=60)  
YouTube·Kris Torrington | AI Automation  
How to Install DeepSeek Harness Locally — Step-by-Step Guide  
Alternatively, you can run DeepSeek Harness directly without global installation using \`npx @deepseek-ai/dsh --web\`. After install...  
1m
* [](https://computingforgeeks.com/deepseek-harness-dsh-getting-started/)  
ComputingForGeeks  
Install DeepSeek Harness (dsh) on Ubuntu & Linux  
Install DeepSeek Harness (dsh) on Ubuntu or any Linux: the npm setup, starting the web UI, picking a model, and running your first...

Show all

## dsh: ALL\_PROXY names a SOCKS proxy, which is not supported; connecting directly for that scheme — set an http:// or https:// proxy URL instead dsh: startup failed: 2 required plugins did not activate Failed plugins (1): webserver (required) Package: @deepseek-ai/dsh-host-webserver Error: listen EADDRINUSE: address already in use 127.0.0.1:3080 at Server.setupListenHandle \[as \_listen2\] (node:net:1948:16) at listenInCluster (node:net:2005:12) at node:net:2214:7 at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) Plugins waiting for services (5): Plugin Missing services web-runtime (required) webServer open-in-app webServer directory-picker webServer harness-dev-context webApp client-hmr webServer Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-31-34.766Z-7e221234-4069-4f29-bb93-fdb8df9fd334.log

dsh: ALL\_PROXY names a SOCKS proxy, which is not supported; connecting directly for that scheme — set an http:// or https:// proxy URL instead dsh: startup failed: 2 required plugins did not activate Failed plugins (1): webserver (required) Package: @deepseek-ai/dsh-host-webserver Error: listen EADDRINUSE: address already in use 127.0.0.1:3080 at Server.setupListenHandle \[as \_listen2\] (node:net:1948:16) at listenInCluster (node:net:2005:12) at node:net:2214:7 at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) Plugins waiting for services (5): Plugin Missing services web-runtime (required) webServer open-in-app webServer directory-picker webServer harness-dev-context webApp client-hmr webServer Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-31-34.766Z-7e221234-4069-4f29-bb93-fdb8df9fd334.log

2:32 AM

### dsh: ALL\_PROXY names a SOCKS proxy, which is not supported; connecting directly for that scheme — set an http:// or https:// proxy URL instead dsh: startup failed: 2 required plugins did not activate Failed plugins (1): webserver (required) Package: @deepseek-ai/dsh-host-webserver Error: listen EADDRINUSE: address already in use 127.0.0.1:3080 at Server.setupListenHandle \[as \_listen2\] (node:net:1948:16) at listenInCluster (node:net:2005:12) at node:net:2214:7 at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) Plugins waiting for services (5): Plugin Missing services web-runtime (required) webServer open-in-app webServer directory-picker webServer harness-dev-context webApp client-hmr webServer Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-31-34.766Z-7e221234-4069-4f29-bb93-fdb8df9fd334.log

The core issue is **`Error: listen EADDRINUSE: address already in use 127.0.0.1:3080`**. This means port `3080` is already being used by another application or a ghost instance of `dsh` that didn't shut down properly, causing the webserver plugin to fail at startup.

You can ignore the `ALL_PROXY` warning for now, as it will just fallback to a direct connection, but you must free up or change the port to fix the crash.

#### 🛠️ Solution 1: Free up port 3080 (Recommended)

You need to find and kill whatever is currently occupying port 3080\. Run the following commands in your terminal:

1. **Find the Process ID (PID):**  
bash  
```  
lsof -i :3080  
```  

2. **Kill the process:**  
Look at the `PID` column in the output of the command above, then run (replacing `12345` with your actual PID):  
bash  
```  
kill -9 12345  
```  

3. **Restart the harness:**  
bash  
```  
dsh web  
```  


#### ⚡ Solution 2: Run on a different port

If you cannot kill the process on port 3080 or want to leave it running, you can force DeepSeek Harness to use a different port (like `3081`) by passing an environment variable or flag:

bash

```
PORT=3081 dsh web

```



_(Alternatively, check `dsh web --help` to see if a `--port` flag is supported by your specific version)._

#### 🌐 Fix the SOCKS Proxy Warning (Optional)

If you want to clear out that `ALL_PROXY` proxy warning at the top, `dsh` requires an HTTP-based proxy instead of a SOCKS-based one. You can temporarily clear it for the command:

bash

```
ALL_PROXY="" dsh web

```



Let me know if clearing the port successfully opens the web interface, or if you need help **configuring your API keys** once it is running!

## \~ % bun pm -g untrusted bun pm untrusted v1.3.14 (0d9b296a) ./node\_modules/@deepseek-ai/dsh-subprocess-local @0.2.2-rc.1 » \[postinstall\]: node scripts/ensure-spawn-helper.mjs ./node\_modules/koffi @3.1.1 » \[install\]: node ./cnoke.cjs -P . -D src/koffi --prebuild --release ./node\_modules/@google/genai @2.21.0 » \[preinstall\]: echo 'preinstall: no-op' ./node\_modules/protobufjs @7.6.6 » \[postinstall\]: node scripts/postinstall These dependencies had their lifecycle scripts blocked during install. If you trust them and wish to run their scripts, use \`bun pm trust\`. \~ % ALL\_PROXY="" PORT=3081 dsh web dsh: startup failed: 2 required plugins did not activate Failed plugins (1): webserver (required) Package: @deepseek-ai/dsh-host-webserver Error: listen EADDRINUSE: address already in use 127.0.0.1:3080 at Server.setupListenHandle \[as \_listen2\] (node:net:1948:16) at listenInCluster (node:net:2005:12) at node:net:2214:7 at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) Plugins waiting for services (5): Plugin Missing services web-runtime (required) webServer open-in-app webServer directory-picker webServer harness-dev-context webApp client-hmr webServer Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-33-17.666Z-897a6186-20be-4b94-aa88-14f0dae4795a.log

\~ % bun pm -g untrusted bun pm untrusted v1.3.14 (0d9b296a) ./node\_modules/@deepseek-ai/dsh-subprocess-local @0.2.2-rc.1 » \[postinstall\]: node scripts/ensure-spawn-helper.mjs ./node\_modules/koffi @3.1.1 » \[install\]: node ./cnoke.cjs -P . -D src/koffi --prebuild --release ./node\_modules/@google/genai @2.21.0 » \[preinstall\]: echo 'preinstall: no-op' ./node\_modules/protobufjs @7.6.6 » \[postinstall\]: node scripts/postinstall These dependencies had their lifecycle scripts blocked during install. If you trust them and wish to run their scripts, use \`bun pm trust\`. \~ % ALL\_PROXY="" PORT=3081 dsh web dsh: startup failed: 2 required plugins did not activate Failed plugins (1): webserver (required) Package: @deepseek-ai/dsh-host-webserver Error: listen EADDRINUSE: address already in use 127.0.0.1:3080 at Server.setupListenHandle \[as \_listen2\] (node:net:1948:16) at listenInCluster (node:net:2005:12) at node:net:2214:7 at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) Plugins waiting for services (5): Plugin Missing services web-runtime (required) webServer open-in-app webServer directory-picker webServer harness-dev-context webApp client-hmr webServer Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-33-17.666Z-897a6186-20be-4b94-aa88-14f0dae4795a.log

2:33 AM

### \~ % bun pm -g untrusted bun pm untrusted v1.3.14 (0d9b296a) ./node\_modules/@deepseek-ai/dsh-subprocess-local @0.2.2-rc.1 » \[postinstall\]: node scripts/ensure-spawn-helper.mjs ./node\_modules/koffi @3.1.1 » \[install\]: node ./cnoke.cjs -P . -D src/koffi --prebuild --release ./node\_modules/@google/genai @2.21.0 » \[preinstall\]: echo 'preinstall: no-op' ./node\_modules/protobufjs @7.6.6 » \[postinstall\]: node scripts/postinstall These dependencies had their lifecycle scripts blocked during install. If you trust them and wish to run their scripts, use \`bun pm trust\`. \~ % ALL\_PROXY="" PORT=3081 dsh web dsh: startup failed: 2 required plugins did not activate Failed plugins (1): webserver (required) Package: @deepseek-ai/dsh-host-webserver Error: listen EADDRINUSE: address already in use 127.0.0.1:3080 at Server.setupListenHandle \[as \_listen2\] (node:net:1948:16) at listenInCluster (node:net:2005:12) at node:net:2214:7 at process.processTicksAndRejections (node:internal/process/task\_queues:90:21) Plugins waiting for services (5): Plugin Missing services web-runtime (required) webServer open-in-app webServer directory-picker webServer harness-dev-context webApp client-hmr webServer Full diagnostics: /home/fira/.dsh/logs/startup-2026-11-09T10-33-17.666Z-897a6186-20be-4b94-aa88-14f0dae4795a.log

The `PORT` environment variable failed because **DeepSeek Harness does not read the `PORT` environment variable**. It explicitly relies on CLI flags for network configurations. [](https://dsh-plugin.org/tutorials/dsh-command-cheatsheet)

#### 🛠️ The Correct Port Command

Pass the port directly to the `dsh web` command using the `--port` flag: [](https://dsh-plugin.org/tutorials/dsh-command-cheatsheet)

bash

```
ALL_PROXY="" dsh web --port 3081

```



_(If you want to let your operating system choose any available random port automatically, you can also use `--port 0`)._ 

#### ⚠️ Note on Your Blocked Lifecycles

From your `bun pm -g untrusted` output, it looks like Bun blocked native build scripts for your global installs. This includes crucial packages like `@deepseek-ai/dsh-subprocess-local` (which helps the harness spawn agent subprocesses) and `koffi` (a fast C++ bridge for native operations).

If `dsh` behaves erratically or fails to run tasks once you get past the port error, you will need to tell Bun to trust the deepseek packages by running:

bash

```
bun pm trust -g @deepseek-ai/dsh

```



Give `dsh web --port 3081` a try! Let me know if the web interface successfully launches or if it hits an issue with the untrusted plugins.

* [](https://dsh-plugin.org/tutorials/dsh-command-cheatsheet)  
dsh-plugin.org  
DeepSeek Harness dsh commands: web, plugin and  
Change the port: --port is a web-app flag dsh web --port 8080\. Show the web app's full flags dsh web @deepseek-ai/dsh web .
* [](https://deepseekdsh.com/errors/port-3080-in-use)  
deepseekdsh.com  
EADDRINUSE: address already in use 127.0.0.1:3080 — Fix  
Fix EADDRINUSE on 127.0.0.1:3080 by identifying the listening process, checking Windows excluded ports, or starting DSH on a free ...
* [](https://deepseekdocs.com/en/docs/user-guide/cli)  
deepseekdocs.com  
Command Line | DeepSeek Harness  
Specify a port (0 = random) Do not open a browser automatically. The workspace is selected with a directory picker inside the Web ...

Show all


