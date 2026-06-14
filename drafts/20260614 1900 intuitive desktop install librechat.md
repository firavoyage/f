# .

```sh
 ~ % git clone https://github.com/danny-avila/LibreChat.git && cd LibreChat && cp .env.example .env && sudo docker compose up -d

Cloning into 'LibreChat'...
remote: Enumerating objects: 100761, done.
remote: Counting objects: 100% (1271/1271), done.
remote: Compressing objects: 100% (596/596), done.
remote: Total 100761 (delta 985), reused 675 (delta 675), pack-reused 99490 (from 4)
Receiving objects: 100% (100761/100761), 178.39 MiB | 5.72 MiB/s, done.
Resolving deltas: 100% (70905/70905), done.
# cleared by a docker command
 ~/LibreChat % sudo docker compose down

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] down 6/6
 ✔ Container LibreChat        Removed                                                                                             0.4s
 ✔ Container chat-meilisearch Removed                                                                                             0.2s
 ✔ Container chat-mongodb     Removed                                                                                             0.2s
 ✔ Container rag_api          Removed                                                                                             1.0s
 ✔ Container vectordb         Removed                                                                                             0.1s
 ✔ Network librechat_default  Removed                                                                                             0.1s
 ~/LibreChat % sudo docker compose up -d

WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
[+] up 6/6
 ✔ Network librechat_default  Created                                                                                             0.0s
 ✔ Container chat-meilisearch Started                                                                                             0.3s
 ✔ Container chat-mongodb     Started                                                                                             0.3s
 ✔ Container vectordb         Started                                                                                             0.3s
 ✔ Container rag_api          Started                                                                                             0.4s
 ✔ Container LibreChat        Started                                                                                             0.6s
```

# install librechat on ubuntu

To install LibreChat on Ubuntu, the most reliable and official method is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">using <strong>Docker Compose</strong></mark>. This containerized approach ensures you do not have to manually configure complex database connections or runtime dependencies on your host machine. \[[1](https://www.librechat.ai/docs/remote/docker%5Flinux), [2](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [3](https://www.hostinger.com/in/tutorials/how-to-self-host-librechat-with-docker), [4](https://www.hleroy.com/2024/11/deploying-librechat-as-a-single-webui-for-multiple-llms-providers/)]

Follow this step-by-step guide to clone the repository, set up your variables, and launch the application. \[[1](https://www.librechat.ai/docs/local/docker), [2](https://www.librechat.ai/docs/remote/docker%5Flinux)]

### Prerequisites: Install Docker & Git \[[1](https://www.requesty.ai/blog/librechat-requesty)]

First, update your local packages and install Git, Docker, and Docker Compose: \[[1](https://www.youtube.com/watch?v=w7VqivpdfZk\&t=3), [2](https://ramnode.com/guides/librechat), [3](https://www.librechat.ai/docs/local/docker), [4](https://github.com/danny-avila/LibreChat/discussions/1947), [5](https://www.tomoehlrich.com/blog/deploying-libre-chat-on-hetzner-or-any-cloud-provider/)]

bash

```
# Update local package index
sudo apt update && sudo apt upgrade -y

# Install Git
sudo apt install git -y

# Install Docker and the Docker Compose plugin
sudo apt install docker.io docker-compose-v2 -y
```

Use code with caution.

Verify your Docker installation is active:

bash

```
sudo systemctl is-active docker
```

Use code with caution.

***

### Step 1: Clone the LibreChat Repository \[[1](https://www.youtube.com/watch?v=M8YJAZCnWRs)]

Download the project source files directly from GitHub and navigate into the project root directory: \[[1](https://www.librechat.ai/docs/remote/docker%5Flinux), [2](https://ramnode.com/guides/librechat), [3](https://www.librechat.ai/blog/2023-08-18%5Fpodman), [4](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)]

bash

```
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat
```

Use code with caution.

***

### Step 2: Configure Environment Variables

LibreChat relies on an environment file (`.env`) to manage API keys, ports, and configuration paths. \[[1](https://www.librechat.ai/docs/local/docker), [2](https://app.daily.dev/posts/what-is-librechat-ai-and-how-to-install-it-on-linux--qsxjsvcwq), [3](https://www.librechat.ai/docs/features/code%5Finterpreter), [4](https://blog.avangards.io/deploying-librechat-on-amazon-ecs-using-terraform), [5](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)]

1. Duplicate the provided template file:\
   bash

<!---->

```
cp .env.example .env
```

Use code with caution.
2\. Open the newly created `.env` file using a terminal text editor like `nano`:\
bash

```
nano .env
```

Use code with caution.
3\. Look for your preferred AI providers and paste your API keys. For example:\
env

```
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

Use code with caution.
4\. Save and exit the editor (in Nano, press `Ctrl+O`, `Enter`, then `Ctrl+X`). \[[1](https://www.librechat.ai/docs/local/docker), [2](https://ramnode.com/guides/librechat), [3](https://www.librechat.ai/docs/development/get%5Fstarted)]

***

### Step 3: Launch LibreChat with Docker

Build and run the Docker containers in detached mode (background execution): \[[1](https://www.librechat.ai/docs/local/docker), [2](https://www.youtube.com/watch?v=w7VqivpdfZk\&t=3)]

bash

```
sudo docker compose up -d
```

Use code with caution.

Docker will automatically pull the required MongoDB, MeiliSearch, and LibreChat web application images. This first launch may take a couple of minutes to download everything completely. \[[1](https://www.librechat.ai/docs/local/docker), [2](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)]

***

### Step 4: Access the Interface \[[1](https://imadsaddik.com/blogs/local-ai-stack-on-linux)]

Once the containers are successfully running, open your web browser and navigate to:

text

```
http://localhost:3080
```

Use code with caution.

_(If you are deploying this on a remote server, replace `localhost` with your server's public IP address. Ensure that **TCP port 3080** is open in your Ubuntu firewall.)_ \[[1](https://cloudinfrastructureservices.co.uk/setup-librechat-on-docker-in-azure-aws-gcp/), [2](https://www.linkedin.com/pulse/private-genai-chat-librechatai-installation-alexey-gumirov-pwaje)]

The very first user account to sign up on your newly deployed instance automatically inherits **administrator privileges** on the dashboard.

For a deep-dive walkthrough covering host service setups and database integrations on Ubuntu, watch this guide:

22:48

[How to Install and Configure LibreChat on Ubuntu ServerKeepItTechieYouTube · Aug 13, 2024](https://www.youtube.com/watch?v=M8YJAZCnWRs)

If you want to customize your setup further, let me know:

- Do you plan to add a **custom domain** or an **NGINX reverse proxy with SSL**?

- Do you want to connect a local open-source LLM platform like **Ollama**?

- Are you setting this up for a **single user** or an **organization/team**? \[[1](https://www.youtube.com/watch?v=d9ZV3-YkX-8\&t=54), [2](https://ramnode.com/guides/librechat), [3](https://www.linkedin.com/pulse/private-genai-chat-librechatai-installation-alexey-gumirov-pwaje)]

- [link](https://www.librechat.ai/docs/remote/docker%5Flinux)\
  Docker (Remote Linux) - LibreChat\
  As part of this guide, I will recommend you have git and npm installed: Though not technically required, having git and npm will m...\
  LibreChat

- [link](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)\
  Local Setup Guide - LibreChat\
  Step 1. Download the Project. Manual Download. Go to the Project Page: Visit https://github.com/danny-avila/LibreChat. Download th...\
  LibreChat

- [link](https://www.librechat.ai/docs/local/docker)\
  Docker - LibreChat\
  Apr 4, 2018 — Installation \* Clone the Repository. git clone https://github.com/danny-avila/LibreChat.git cd LibreChat. \* Create Your Environmen...\
  LibreChat

Show all

## You said: is there simpler ways, like one liner pulling from dockerhub, pnpm, or uv

Yes, you can run LibreChat using a single Docker command without cloning the entire repository, or by using Node package managers like `pnpm`.

Here are the simplest alternative deployment paths.

### 1. The One-Liner Docker Method (Easiest)

You can run the official pre-built image directly from Docker Hub. However, because LibreChat requires a MongoDB database to function, you must pass an external MongoDB connection string (`MONGO_URI`) directly into the command.

Run this single command (replace the placeholder keys with your actual credentials):

bash

```
sudo docker run -d -p 3080:3080 -e MONGO_URI="mongodb://YOUR_EXTERNAL_MONGO_URI" -e OPENAI_API_KEY="sk-..." --name librechat ghcr.io/danny-avila/librechat:latest
```

Use code with caution.

_Note: If you do not have an external MongoDB instance, the `docker compose up -d` method from earlier remains the simplest way to spin up both the app and the database together automatically._

***

### 2. The `pnpm` Method (Local Node Execution)

If you prefer running LibreChat directly on your Ubuntu host without Docker, you can use `pnpm`.

_Note: `uv` is a Python package installer and manager; because LibreChat is written entirely in TypeScript/JavaScript (Node.js), it cannot be installed or run via `uv`._

To use `pnpm`, execute this quick block to install dependencies, copy your environment template, and launch the server:

bash

```
# Install Node.js, corepack, and pnpm
sudo apt install nodejs npm -y && sudo corepack enable && corepack prepare pnpm@latest --activate

# Clone, configure, and start
git clone https://github.com && cd LibreChat
cp .env.example .env
pnpm install && pnpm build && pnpm start
```

Use code with caution.

_(Remember to edit the `.env` file to add your API keys and a local MongoDB connection string before running `pnpm start`)_

***

If you want to proceed with one of these methods, let me know:

- Do you already have a **MongoDB database** ready to link?
- Would you like instructions on how to use **Docker volumes** with the one-liner so your chat history isn't lost when the container stops?

## You said: real one liner. no config.

Because LibreChat requires a MongoDB database to function, a literal one-liner using only `docker run` will crash instantly without a connection string. \[[1](https://philipwelz.com/how-to-deploy-librechat-your-own-gpt-on-azure-with-terraform-and-github-actions?source=more%5Farticles%5Fbottom%5Fblogs)]

The closest true zero-config, "copy-paste-and-go" one-liner clones the official repository and runs it with Docker Compose in a single chain: \[[1](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)]

bash

```
git clone https://github.com/danny-avila/LibreChat.git && cd LibreChat && cp .env.example .env && sudo docker compose up -d
```

Use code with caution.

### What this does automatically:

- Clones the codebase and moves into the directory.
- Uses the default template `.env` (which defaults to a local mock/secure config).
- Spins up the web interface, the required MongoDB database, and MeiliSearch simultaneously. \[[1](https://www.librechat.ai/docs/local), [2](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [3](https://www.librechat.ai/docs/local/docker), [4](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16)]

Once the progress bars finish, open your browser immediately to `http://localhost:3080` to create your admin login. You can input your API keys directly through the settings gear inside the web dashboard UI without ever opening a terminal configuration file. \[[1](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16), [3](https://www.librechat.ai/docs/local/docker)]

If you want to look at more advanced options later, let me know:

- Do you want to **expose this to the web**?

- Do you need help navigating the UI to add your **API keys**?

- [link](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=16)\
  Install LibreChat Locally\
  May 10, 2024 — but of course if you're using it with open api key then the point is only that you can install it locally on your network and then...\
  9m\
  YouTube·Fahd Mirza

- [link](https://www.librechat.ai/docs/local/docker)\
  Docker - LibreChat\
  Apr 4, 2018 — Create Your Environment File. cp .env.example .env. The default . env file works out of the box for a basic setup. For in-depth co...\
  LibreChat

- [link](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)\
  Local Setup Guide - LibreChat\
  Local Setup Guide \* Download the Project. Manual Download. Go to the Project Page: Visit https://github.com/danny-avila/LibreChat.\
  LibreChat

Show all

## You said: all useful docker commands

Here are the most useful Docker and Docker Compose commands for managing your LibreChat instance, categorized by task. \[[1](https://www.datacamp.com/tutorial/lazydocker)]

### Container Lifecycle Management

bash

```
# Start containers in the background
sudo docker compose up -d

# Stop and remove running containers (keeps your data safe)
sudo docker compose down

# Stop containers and completely wipe all data volumes (hard reset)
sudo docker compose down -v

# Restart your LibreChat containers
sudo docker compose restart
```

Use code with caution.

### Monitoring & Status

bash

```
# Check the running status of your containers
sudo docker compose ps

# View live container resource usage (CPU, Memory, I/O)
sudo docker stats

# See how much disk space Docker is utilizing
sudo docker system df
```

Use code with caution.

### Troubleshooting & Logs

bash

```
# View real-time application logs (useful if the site won't load)
sudo docker compose logs -f

# View logs specifically for the LibreChat web container
sudo docker compose logs -f api

# View logs specifically for the MongoDB database container
sudo docker compose logs -f mongodb
```

Use code with caution.

### Updates & Maintenance

bash

```
# Pull the latest LibreChat images from the registry
sudo docker compose pull

# Clean up unused images, containers, and networks to free up disk space
sudo docker system prune -a --volumes
```

Use code with caution.

If you run into any issues while using these, let me know:

- Is a specific container **failing to start**?

- Are you running low on **server disk space**?

- [link](https://www.datacamp.com/tutorial/lazydocker)\
  Lazydocker: Manage Docker From the Terminal\
  Jan 22, 2026 — Both are terminal UIs for Docker, but lazydocker focuses on real-time monitoring with live log streaming and resource stats, while...\
  \
  DataCamp

## You said: are they specific for this app when im inside a folder with docker yaml

Yes, they are specific to this app **only when you run them from inside that folder**.

When a command starts with `docker compose`, it looks specifically for the `docker-compose.yml` file inside your current working directory. It will only target the containers, databases, and networks defined in that specific file. \[[1](https://labex.io/tutorials/docker-how-to-use-docker-compose-start-command-to-start-services-555092), [2](https://stackoverflow.com/questions/47209617/why-does-docker-compose-ps-not-run-correctly-in-a-different-directory), [3](https://github.com/docker-archive/compose-cli/issues/1546), [4](https://howtodoinjava.com/spring-boot/spring-boot-docker-compose/)]

Here is exactly how the behavior splits:

### 1. `docker compose ...` (Folder-Specific)

Commands like `sudo docker compose up`, `down`, `logs`, and `restart` only affect the LibreChat container suite because you are in the LibreChat folder. If you move to a different folder with a different YAML file, those exact same commands will control a completely different app.

### 2. `docker ...` (Global Server Commands)

Commands missing the word "compose" look at your entire Ubuntu server.

- `sudo docker stats` shows live data for **every** running container on your machine.
- `sudo docker system prune -a --volumes` is a global cleanup command. It will delete unused data across your **entire server**, not just LibreChat.

### A Quick Trick

If you want to run these commands from anywhere on your server without changing directories, you can pass the path to the file using the `-f` flag:

bash

```
sudo docker compose -f /path/to/LibreChat/docker-compose.yml logs -f
```

Use code with caution.

If you want to tweak how the app behaves, let me know:

- Do you want to see how to **edit the YAML file** to change the port from 3080 to something else?

- Do you need to know how to **back up the database folder** created by this YAML file?

- [link](https://labex.io/tutorials/docker-how-to-use-docker-compose-start-command-to-start-services-555092)\
  How to use docker compose start command to start services\
  Start all services defined in the compose file Look for the docker-compose. yml file in the current directory. Read the service de...\
  \
  LabEx

- [link](https://stackoverflow.com/questions/47209617/why-does-docker-compose-ps-not-run-correctly-in-a-different-directory)\
  Why does docker-compose ps not run correctly in a different directory?\
  Nov 9, 2017 — Why does docker-compose ps not run correctly in a different directory? 1 docker-compose is project based. It needs a docker-compos...\
  \
  Stack Overflow

- [link](https://github.com/docker-archive/compose-cli/issues/1546)\
  docker-compose.override.yml file is not automatically consumed by new docker compose command · Issue #1546 · docker-archive/compose-cli\
  Apr 14, 2021 — Describe the results you received: Only the configuration in the docker-compose. yml file is used (additional containers described...\
  \
  GitHub

Show all

## You said: all features of librechat

**[LibreChat](https://www.librechat.ai/)** is a feature-rich, open-source AI platform that unifies multiple LLM providers into a single self-hosted interface. It replicates the sleek user experience of paid services like ChatGPT Plus while providing full data sovereignty. \[[1](https://www.librechat.ai/), [2](https://www.librechat.ai/about), [3](https://www.youtube.com/watch?v=0BRnK5BGZHU\&t=4)]

The complete feature suite of LibreChat is organized into logical groups:

### 🤖 Agentic AI & Extensibility

- **Advanced AI Agents**: Build independent agents with persistent memories, specialized prompt instructions, and tool access. \[[1](https://www.librechat.ai/), [2](https://www.youtube.com/watch?v=yYchyw2NDXc\&vl=en)]
- **Model Context Protocol (MCP)**: Connect agents to local file systems, secure web browsers, enterprise database APIs, or custom servers using the [LibreChat MCP integration](https://www.librechat.ai/docs/features/mcp). \[[1](https://www.librechat.ai/), [2](https://www.librechat.ai/docs/features/mcp)]
- **Interactive Artifacts (Generative UI)**: Render dynamic HTML pages, live interactive React components, or Mermaid diagrams natively inside the chat interface. \[[1](https://www.librechat.ai/), [2](https://www.librechat.ai/docs/features/artifacts)]
- **Secure Code Interpreter**: Run programmatic calculations and execute scripts natively in multiple programming languages with automated output display. \[[1](https://www.librechat.ai/), [2](https://github.com/danny-avila/LibreChat/discussions/11860), [3](https://www.librechat.ai/)]

### 🛠️ Models & Connectivity

- **Multi-Provider Support**: Seamlessly swap or split-test models from OpenAI, Anthropic (Claude), Google (Gemini), AWS Bedrock, and Azure Open AI.
- **Local Offline Models**: Hook directly into self-hosted engines like Ollama or LM Studio to run open-source models completely locally.
- **Custom Configuration Presets**: Save custom prompt structures, custom temperatures, and system parameters as shareable model templates. \[[1](https://www.librechat.ai/), [2](https://www.librechat.ai/about), [3](https://www.youtube.com/watch?v=aEc2GDXIFHc), [4](https://www.youtube.com/watch?v=0BRnK5BGZHU\&t=4), [5](https://chatbotdesign.substack.com/p/local-offline-chatting-with-librechat)]

### 📂 Search, Knowledge, & Files

- **RAG API (Chat with Files)**: Upload heavy enterprise documents to generate text embeddings for highly precise Retrieval-Augmented Generation.
- **Advanced OCR Integration**: Convert complex layouts, tables, math equations, and handwritten documents into clean text strings natively.
- **Fast MeiliSearch Indexing**: Instantly comb through historic conversations via an optimized full-text, typo-tolerant [MeiliSearch dashboard](https://www.librechat.ai/docs/features/search).
- **Live Web Search**: Give any model direct web-browsing capabilities paired with ranking modules to extract real-time web facts. \[[1](https://www.librechat.ai/), [2](https://www.librechat.ai/docs/features/rag%5Fapi), [3](https://www.librechat.ai/docs/features/agents), [4](https://www.librechat.ai/docs/features/search), [5](https://www.youtube.com/watch?v=0BRnK5BGZHU\&t=4)]

### 💬 Chat Management & Interface

- **Resumable Streams & Branching**: Edit and resubmit older prompts to fork a chat into clean parallel branching timelines.
- **Shareable Links**: Generate public links to safely share specific conversation histories with external users.
- **Speech Capabilities**: Utilize Text-to-Speech (TTS) and Speech-to-Text (STT) integrations for hands-free workflow inputs.
- **Multilingual UI**: Fully localized interface supporting over 30 global languages. \[[1](https://www.librechat.ai/docs/features), [2](https://www.youtube.com/watch?v=0BRnK5BGZHU\&t=4), [3](https://www.youtube.com/watch?v=yYchyw2NDXc\&vl=en), [4](https://www.librechat.ai/docs/features/agents), [5](https://www.librechat.ai/about)]

### 🔒 Security & Admin Controls

- **Enterprise SSO Auth**: Native security integration with OAuth, SAML, LDAP, and two-factor authentication (2FA).
- **Granular Admin Panels**: Full admin dashboard control to govern role-based access permissions, view operational token metrics, and run content moderation. \[[1](https://www.librechat.ai/docs/features), [2](https://www.librechat.ai/), [3](https://www.librechat.ai/about), [4](https://www.linkedin.com/posts/librechat%5Flibrechat-2026-roadmap-admin-panel-dynamic-activity-7430292829173624834-3xuc), [5](https://innfactory.ai/en/blog/your-ai-platform-is-a-black-box-open-source-dashboard-for-librechat/)]

If you want to configure specific parts of this application, let me know:

- Would you like to set up **local models using Ollama**?

- Do you want to see how to enable **Google Web Search** for your models?

- Do you need assistance mapping out **SSO login configurations**?

- [link](https://www.librechat.ai/)\
  LibreChat - The Open-Source AI Platform\
  Agents. Advanced agents with file handling, code interpretation, and API actions. Learn more. Code Interpreter. Execute code in mu...\
  LibreChat

- [link](https://www.librechat.ai/docs/features/rag%5Fapi)\
  RAG API (Chat with Files) - LibreChat\
  Features \* Document Indexing: The RAG API indexes user-uploaded files, creating embeddings for efficient retrieval. \* Semantic Sea...\
  LibreChat

- [link](https://www.librechat.ai/docs/features/search)\
  Message Search - LibreChat\
  LibreChat has integrated Meilisearch to enhance the user experience by providing a fast and efficient way to search through past c...\
  LibreChat

Show all

## You said: compare with alternatives

**LibreChat** is widely considered the best choice if you want an absolute clone of the ChatGPT Plus interface that can swap between multiple cloud API providers (OpenAI, Anthropic, Gemini) mid-conversation. \[[1](https://portkey.ai/blog/librechat-vs-openwebui/), [2](https://www.youtube.com/watch?v=yYchyw2NDXc\&vl=en)]

However, depending on your primary use case, several open-source alternatives may suit your needs better:

### Head-to-Head Comparison

| Alternative \[[1](https://docs.openwebui.com/alternatives/librechat/), [2](https://news.ycombinator.com/item?id=41450847), [3](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/), [4](https://portkey.ai/blog/openwebui-vs-librechat/), [5](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [6](https://www.reddit.com/r/LocalLLaMA/comments/1l0bc5j/openwebui%5Fvs%5Flibrechat/), [7](https://sliplane.io/blog/5-awesome-open-webui-alternatives), [8](https://sider.ai/blog/ai-tools/top-open-webui-alternatives-for-2025-the-best-self-hosted-and-managed-options), [9](https://onyx.app/insights/openwebui-alternatives), [10](https://www.reddit.com/r/OpenWebUI/comments/1p5obax/selfhosted%5Fopen%5Fwebui%5Fvs%5Flibrechat%5Ffor%5Finternal/), [11](https://onyx.app/insights/openwebui-vs-librechat-vs-onyx), [13](https://onyx.app/alternatives/librechat)] | Best For                  | Core Backend         | Key Advantage                                                                               | Drawback                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Open WebUI**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Local LLMs (Ollama)       | Python (FastAPI)     | Built-in Python scripting, plugins, and deep local RAG pipelines.                           | Heavily tied to local workflows; cloud model setup is less seamless.                |
| **Lobe Chat**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Modern UI & Plugin Market | TypeScript (Next.js) | Visual plugin market, custom avatars, and exceptional mobile-responsive UI.                 | Lacks deep enterprise administration or complex chat branching rules.               |
| **AnythingLLM**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Turn-key Document RAG     | Node.js              | Dead-simple desktop app or Docker setup focused purely on "chatting with files".            | Interface is rigidly workspace-focused, not built for general casual chat.          |
| **Jan AI**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Local Desktop Offline Use | C++ / Electron       | True zero-configuration native desktop app with built-in model downloaders.                 | Not meant for central server deployment or hosting for a team.                      |
| **Onyx AI** (formerly Danswer)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Enterprise Connections    | Python / Go          | Automatically syncs data from Slack, Jira, Drive, etc., respecting source file permissions. | Heavy system architecture footprint; complete overkill for individual personal use. |

***

### Key Differences to Keep in Mind

### 1. LibreChat vs. Open WebUI (The Main Rivalry)

- **LibreChat** acts primarily as a universal adapter for massive commercial cloud endpoints. It specializes in features like **Chat Forking** (editing an old prompt to spin off an isolated side-timeline). \[[1](https://portkey.ai/blog/librechat-vs-openwebui/), [2](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [3](https://chatbotdesign.substack.com/p/local-offline-chatting-with-librechat)]
- **Open WebUI** is highly optimized for running local open-source models. It allows you to build custom prompts using **native Python pipelines** right in the browser, whereas LibreChat relies on JavaScript or direct config modifications. \[[1](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/), [2](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [3](https://docs.openwebui.com/alternatives/librechat/)]

### 2. Technical Footprint

- LibreChat requires a full `docker-compose` group running MongoDB and MeiliSearch to handle settings and message searching.
- Tools like **Lobe Chat** or **NextChat** can often be run on edge networks or inside a single container using SQLite, which greatly reduces your baseline server resource usage. \[[1](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/), [2](https://www.youtube.com/watch?v=yYchyw2NDXc\&vl=en), [3](https://news.ycombinator.com/item?id=41450847)]

If you are thinking about trying one of these out instead, let me know:

- Are you prioritizing **local offline execution** or **commercial cloud APIs**?

- Is your goal to deploy this for **yourself only** or for a **larger group/team**?

- [link](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/)\
  OpenWebUI vs LibreChat : r/selfhosted - Reddit\
  Mar 28, 2025 — While this makes it flexible, it also introduces some complexity and requires planning for how additional features will be impleme...\
  Reddit·r/selfhosted

- [link](https://onyx.app/alternatives/librechat)\
  Onyx vs LibreChat Comparison\
  The best LibreChat alternative. Onyx connects AI to your company's knowledge with 40+ native connectors, automated syncing, and pe...\
  Onyx AI

- [link](https://docs.openwebui.com/alternatives/librechat/)\
  Open WebUI vs LibreChat / Open WebUI\
  May 15, 2026 — Table\_title: At a Glance​ Table\_content: | | Open WebUI | LibreChat | | --- | --- | --- | | Model comparison | Multi-model chats |\
  Open WebUI Docs

Show all

## You said: compare librechat and open webui

**LibreChat** and **[Open WebUI](https://openwebui.com/)** are the top two open-source AI interfaces available today. While they look similar on the surface, they are built with entirely different philosophies, tech stacks, and core strengths. \[[1](https://docs.openwebui.com/alternatives/librechat/), [2](https://blog.elest.io/the-best-open-source-chatgpt-interfaces-lobechat-vs-open-webui-vs-librechat/), [3](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [4](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/), [5](https://portkey.ai/blog/librechat-vs-openwebui/)]

### The Core Difference

- **LibreChat** is built to be a **universal multi-provider gateway**. It perfectly clones the ChatGPT Plus user experience, focusing heavily on conversational flexibility, token-cost controls, and switching seamlessly between heavy cloud APIs (OpenAI, Anthropic, Gemini, Azure) mid-chat. \[[1](https://docs.openwebui.com/alternatives/librechat/), [2](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [3](https://portkey.ai/blog/librechat-vs-openwebui/), [4](https://forum.cloudron.io/topic/10641/librechat/19), [5](https://pinggy.io/blog/best%5Fopen%5Fsource%5Falternatives%5Fto%5Fchatgpt/)]
- **Open WebUI** is built to be a **complete, local-first AI operating system**. It started as an interface for Ollama and has evolved into a feature-dense platform with built-in document pipelines, custom Python plugins, and its own thriving community-driven ecosystem. \[[1](https://docs.openwebui.com/alternatives/librechat/), [2](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [3](https://openwebui.com/), [4](https://docs.openwebui.com/features/extensibility/plugin/tools/), [5](https://ai.gopubby.com/open-webui-your-ultimate-gateway-to-rich-and-personalized-llm-interactions-7e1630d09976)]

***

### Direct Comparison Table

| Feature \[[1](https://docs.openwebui.com/alternatives/librechat/), [2](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [3](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/), [4](https://www.reddit.com/r/OpenWebUI/comments/1p5obax/selfhosted%5Fopen%5Fwebui%5Fvs%5Flibrechat%5Ffor%5Finternal/), [5](https://portkey.ai/blog/librechat-vs-openwebui/), [6](https://www.youtube.com/watch?v=yYchyw2NDXc\&vl=en), [7](https://note.com/snake%5Fdragon/n/n254a25936d00?hl=en), [8](https://clickhouse.com/blog/llm-chat-mcp-support), [9](https://openwebui.com/)] | LibreChat                                            | Open WebUI                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| **Primary Focus**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Cloud API consolidation & UX                         | Local LLMs (Ollama) & Extensibility                       |
| **Backend Tech Stack**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Node.js (TypeScript) & MongoDB                       | Python (FastAPI) & SQLite/PostgreSQL                      |
| **Fluid Model Swapping**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Excellent.** Switch models mid-stream.             | Manual. Requires starting a new chat branch.              |
| **Chat Forking/Branching**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | **Native.** Edit an old prompt to fork a clean line. | Standard editing (overwrites view or duplicates).         |
| **RAG (Chat with Files)**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Modular (requires configuring RAG API).              | **Built-in & Automatic** (Excellent document processing). |
| **Extensibility System**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | JavaScript-focused / Model Context Protocol          | **Python Pipelines & Functions** directly in UI.          |
| **Community Marketplace**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Manual configuration/presets.                        | **One-click community hub** for prompts/tools.            |

***

### Where LibreChat Wins

- **Conversational Flexibility:** LibreChat's **chat branching/forking** is unmatched. If an LLM gives a bad answer halfway down a long thread, you can alter your past prompt, switch from Claude to GPT-4o mid-chat, and generate a completely separate timeline. \[[1](https://portkey.ai/blog/librechat-vs-openwebui/), [2](https://www.youtube.com/watch?v=yYchyw2NDXc\&vl=en)]
- **Cloud API Management:** It is designed from the ground up for commercial APIs. It has robust token counting, native system prompt caching management (crucial for lowering Anthropic costs), and enterprise SSO integration. \[, [2](https://onyx.app/insights/openwebui-vs-librechat-vs-onyx), [3](https://aicamp.so/blog/librechat-alternative/)]
- **Lightweight Node Stack:** Because it is built on TypeScript/Hono, it has a highly optimized, "snappy" browser interface and is lightweight enough to be deployed across serverless architectures or cheap cloud VPS tiers. \[, [2](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/)]

### Where Open WebUI Wins

- **Turn-key Knowledge & RAG:** If you upload a PDF, Open WebUI handles it flawlessly out of the box using embedded tools like Docling. It runs vector chunking and hybrid searches natively without requiring you to stitch together external database APIs.
- **The Power of Python:** Because its backend is Python-based, you can write custom "Filters", "Pipes", and "Actions" natively in Python directly within the web settings. You can completely alter how a prompt is processed before it hits the LLM.
- **Community Discoverability:** The Open WebUI Community Hub allows you to browse thousands of user-made custom system personas, specialized tools, and prompt chains, downloading them into your personal instance with a single click. \[[1](https://www.reddit.com/r/OpenWebUI/comments/1p5obax/selfhosted%5Fopen%5Fwebui%5Fvs%5Flibrechat%5Ffor%5Finternal/), [2](https://note.com/snake%5Fdragon/n/n254a25936d00?hl=en), [3](https://docs.openwebui.com/alternatives/librechat/), [4](https://www.reddit.com/r/selfhosted/comments/1jltdjq/openwebui%5Fvs%5Flibrechat/), [5](https://openwebui.com/)]

***

### Summary Recommendation

- Choose **LibreChat** if you primarily use **Paid Cloud APIs** (OpenAI, Anthropic), love the layout of ChatGPT Plus, require strict data auditing/token logging, or need advanced conversation management like mid-chat model swapping.
- Choose **Open WebUI** if you want to run **Local Open-Source LLMs** via Ollama, need an incredible built-in "Chat with Documents" system without extra setup, or want to customize your instance using Python scripts. \[[1](https://docs.openwebui.com/alternatives/librechat/), [2](https://dev.to/chillkeepgood/revolutionizing-ai-interactions-a-deep-dive-into-open-webui-and-librechat-o4o), [3](https://portkey.ai/blog/librechat-vs-openwebui/), [5](https://onyx.app/insights/openwebui-vs-librechat-vs-onyx), [6](https://note.com/snake%5Fdragon/n/n254a25936d00?hl=en), [7](https://openwebui.com/)]

_(Fun fact: Because both platforms can connect to the exact same API backends, many developers host both side-by-side using the same server infrastructure)._ \[[1](https://docs.openwebui.com/alternatives/librechat/)]

Based on your workload, let me know:

- Are you planning to feed this platform **large quantities of local files and documents**?

- Will your primary model engine be a **local Ollama instance** or **cloud API keys**?

- [link](https://www.reddit.com/r/OpenWebUI/comments/1p5obax/selfhosted%5Fopen%5Fwebui%5Fvs%5Flibrechat%5Ffor%5Finternal/)\
  Self-hosted Open WebUI vs LibreChat for internal company ...\
  Nov 24, 2025 — Comments Section \* robogame\_dev. • 7mo ago. One of my key criteria is how rapidly the software has releases and how actively it's ...\
  Reddit·r/OpenWebUI

- [link](https://docs.openwebui.com/alternatives/librechat/)\
  Open WebUI vs LibreChat / Open WebUI\
  May 15, 2026 — When to Use Each​ Choose LibreChat if you want a clean, focused multi-provider chat interface with strong model comparison feature...\
  Open WebUI Docs

- [link](https://portkey.ai/blog/librechat-vs-openwebui/)\
  LibreChat vs Open WebUI: Choose the Right ChatGPT UI for ...\
  Nov 13, 2024 — Chat Management. Open WebUI emphasizes organizational features with conversation tagging, chat cloning, and a robust memory system...\
  Portkey

Show all

## You said: compare librechat and lobe chat

While <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">both <strong>LibreChat</strong> and <strong>Lobe Chat</strong> are designed to consolidate multiple AI models into a clean, modern user interface, they target completely different audiences</mark>. \[[1](https://apipie.ai/docs/blog/top-5-opensource-chatgpt-replacements), [2](https://sider.ai/blog/ai-tools/how-to-use-ai-lobe-chat-a-step-by-step-guide-with-pro-tips)]

### The Core Difference

- **LibreChat** targets **enterprise teams and power users** who want an exact, feature-for-feature replica of the ChatGPT Plus interface. It focuses heavily on deep conversation control (like mid-chat model swapping), granular admin moderation, and high-performance scalability using a server-side MongoDB database. \[[1](https://forum.cloudron.io/topic/10641/librechat), [2](https://www.eesel.ai/blog/open-source-chatbot-platforms), [3](https://portkey.ai/blog/librechat-vs-openwebui/), [4](https://www.librechat.ai/docs/user%5Fguides/mongodb)]
- **Lobe Chat** targets **individual developers and creatives** who want a cutting-edge, visually striking layout. It focuses on design aesthetics, an integrated agent marketplace, custom text-to-speech visualizers, and decentralized deployment (meaning you can run it entirely in your browser without a server backend if you want). \[[1](https://poornaprakashsr.medium.com/5-best-open-source-chat-uis-for-llms-in-2025-11282403b18f)]

***

### Direct Comparison Table

| Feature \[[1](https://docs.daocloud.io/hydra/user-guides/lobe-chat/), [2](https://www.reddit.com/r/LocalLLaMA/comments/1nn449p/librechat%5Fcant%5Fbe%5Fselfhosted%5Fin%5Fany%5Fcommercial/), [3](https://www.xda-developers.com/ditched-chatgpt-for-self-hosted-open-source-alternative-librechat/), [4](https://www.librechat.ai/docs/local), [5](https://www.kindo.ai/blog/kindo-and-librechat-open-source-flexibility-with-enterprise-security-ai)] | LibreChat                                               | Lobe Chat                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| **Design Philosophy**                                                                                                                                                                                                                                                                                                                                                                                                                                  | Rigid, functional ChatGPT Plus clone                    | Ultra-modern, highly customizable UI/UX                      |
| **Primary Deployment**                                                                                                                                                                                                                                                                                                                                                                                                                                 | Server-side (Node.js + MongoDB)                         | Client-side/Edge-first (Next.js + SQLite/Postgres)           |
| **Mid-Chat Upgrading**                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Excellent.** Swap models or fork timelines instantly. | Standard editing (cannot swap models mid-thread).            |
| **Agent Marketplace**                                                                                                                                                                                                                                                                                                                                                                                                                                  | Manual configuration/system presets.                    | **Built-in Discover Index** (one-click installs).            |
| **Multimodal UI**                                                                                                                                                                                                                                                                                                                                                                                                                                      | Traditional chat window image/file uploads.             | **Canvas Layouts**, visual maps, and audio waves.            |
| **Text-to-Speech (TTS)**                                                                                                                                                                                                                                                                                                                                                                                                                               | Standard audio playback API.                            | **Advanced TTS** (OpenAI, Edge, ElevenLabs, custom avatars). |
| **Local Offline Execution**                                                                                                                                                                                                                                                                                                                                                                                                                            | Via Ollama or LM Studio.                                | Via Ollama or local WebGPU (models run in-browser).          |

***

### Where LibreChat Wins

- **Advanced Conversation Forking:** LibreChat allows you to go backward in a chat history, change your prompt, and switch the model from GPT-4o to Claude 3.5 Sonnet mid-conversation. It handles separate, parallel conversational timelines flawlessly. \[[1](https://its.uri.edu/2024/12/16/librechat/), [2](https://www.hleroy.com/2024/11/deploying-librechat-as-a-single-webui-for-multiple-llms-providers/)]
- **Enterprise-Grade Admin Tools:** LibreChat has a robust admin panel out of the box. You can track exactly how many tokens a specific user is consuming, enforce strict role-based access permissions, and audit logs. \[[1](https://www.librechat.ai/docs/features/access%5Fcontrol), [2](https://portkey.ai/blog/librechat-for-enterprises-with-tracking-visbility-and-governance/)]
- **Data Sovereignty:** Because it forces all data to clear through your central MongoDB container, it is built from the ground up for strict data storage policies, privacy regulations, and central server backups.

### Where Lobe Chat Wins

- **Visual Styling & Customization:** Lobe Chat is objectively gorgeous. It features custom dark/light themes, sleek glassmorphism animations, adaptive mobile-responsive layouts, and highly customizable UI cards. \[[1](https://www.arsturn.com/blog/best-uis-for-ollama-a-head-to-head-comparison), [2](https://github.com/AIDotNet/lobe-chat), [3](https://sider.ai/blog/ai-tools/how-to-use-ai-lobe-chat-a-step-by-step-guide-with-pro-tips)]
- **The LobeChat Index (Marketplace):** Lobe Chat features a built-in community marketplace directly inside the sidebar. You can browse thousands of pre-made AI agents (e.g., translators, coding assistants, copywriters) and add them to your workspace instantly with one click.
- **Text-to-Speech & Vision Integration:** Lobe Chat features a rich visual framework for multimodal models. Its text-to-speech integration includes custom voice waveforms and connects easily to premium voice engines like ElevenLabs.
- **Zero-Server Edge Running:** You can deploy Lobe Chat to Vercel or Netlify in seconds. It uses local storage in your web browser by default, meaning you don't even need a database server running on your computer to start using your API keys.

***

### Summary Recommendation

- Choose **LibreChat** if you want a **no-nonsense workhorse** that clones ChatGPT, allows you to split-test cloud models seamlessly side-by-side, or if you are hosting an AI portal for a team of people where user management is critical.
- Choose **Lobe Chat** if you prioritize **modern aesthetics, mobile browsing, and voice features**, want an easy-to-use playground of community-made specialized agents, or want a lightweight setup that doesn't require maintaining a database on your server. \[[1](https://docs.daocloud.io/hydra/user-guides/lobe-chat/)]

If you are weighing these two platforms, let me know:

- Is a **highly optimized mobile interface** important to you?

- Do you plan on using **voice interaction and text-to-speech** frequently?

- [link](https://apipie.ai/docs/blog/top-5-opensource-chatgpt-replacements)\
  Top 5 Open-Source ChatGPT Replacements April 2025\
  Apr 18, 2025 — User-friendly, modern UI with customization options Community support and documentation The Top 5 Platforms 1. LibreChat Overview:\
  \
  \
  APIpie.ai

- [link](https://sider.ai/blog/ai-tools/how-to-use-ai-lobe-chat-a-step-by-step-guide-with-pro-tips)\
  How to Use AI Lobe Chat: A Step‑by‑Step Guide With Pro Tips\
  Sep 18, 2025 — Worth noting: Lobe Chat (often stylized as LobeChat) is an open‑source AI chat application with a clean UI, support for multiple L...\
  \
  \
  Sider AI

- [link](https://forum.cloudron.io/topic/10641/librechat)\
  LibreChat\
  Dec 13, 2023 — User Base: LibreChat: While specific user numbers aren't detailed, it's popular among those looking for a customizable, enterprise...\
  \
  \
  Cloudron Forum

Show all

## You said: compare with coding agents

When comparing **LibreChat** to dedicated **coding agents** (like **Bolt.new, Cline, Aider, Cursor, or Roo Code**), you are looking at two completely different categories of AI tools.

- **LibreChat** is a **Chat Interface**. It is designed for conversation, brainstorming, and receiving code snippets that you must manually copy and paste into your files. \[[1](https://www.pondhouse-data.com/blog/introduction-to-libre-chat), [2](https://getnao.io/blog/open-source-analytics-agent-builder-playbook/), [3](https://www.b2bemailmarketing.com/breaking-technical-barriers-my-journey-installing-librechat/)]
- **Coding Agents** are **Workspace Operators**. They have direct access to your local file system, can execute terminal commands, run tests, debug errors, and autonomously build full-stack applications based on a single prompt. \[[1](https://fast.io/resources/top-openclaw-tools-coding-agents/), [2](https://kilo.ai/articles/beyond-autocomplete), [3](https://dev.to/tacoda/linting-static-analysis-and-the-pre-commit-hook-that-saved-my-sanity-18nf), [4](https://www.taskade.com/blog/ai-coding-tools)]

***

### Direct Comparison Table

| Feature \[[1](https://medium.com/@sonaldhiman2605/gpt-in-librechat-a-deep-dive-into-open-source-ai-chat-architecture-d7e9e8d8fdbb), [2](https://ericmjl.github.io/blog/2025/11/17/how-to-reference-code-across-repositories-with-coding-agents/), [3](https://www.nxcode.io/resources/news/ai-coding-tools-pricing-comparison-2026), [4](https://cocalc.com/news/coding-agent-92)] | LibreChat                                   | Dedicated Coding Agents                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- |
| **Primary Goal**                                                                                                                                                                                                                                                                                                                                                                   | Knowledge retrieval & multi-model chat      | Autonomous codebase modification                         |
| **File System Access**                                                                                                                                                                                                                                                                                                                                                             | None (Upload sandboxed files only)          | **Full Access** (Read/Write local project folders)       |
| **Terminal Execution**                                                                                                                                                                                                                                                                                                                                                             | Sandboxed Code Interpreter (Python/JS)      | **Live Terminal** (Can run `npm install`, compile, test) |
| **Code Implementation**                                                                                                                                                                                                                                                                                                                                                            | Generates text blocks for you to copy/paste | **Rewrites files directly** and diffs code changes       |
| **Workflow Loop**                                                                                                                                                                                                                                                                                                                                                                  | Prompt → Response                           | Prompt → Plan → Edit → Test → Debug Loop                 |
| **Context Window Handling**                                                                                                                                                                                                                                                                                                                                                        | Sends entire chat history                   | Intelligently indexes and packs relevant code files      |

***

### The Leading Coding Agent Alternatives

If your main goal is writing software, you should look at these agentic tools instead of a general chat UI:

### 1. Aider (Terminal-Based Agent) \[[1](https://www.secondtalent.com/resources/open-source-ai-coding-assistants/), [2](https://learntocodewith.me/resources/best-coding-ai/)]

- **How it works:** A command-line tool that hooks into your local Git repository.
- **Why it's powerful:** You tell it what feature to add, and it automatically modifies your local files, runs your test suites to verify it didn't break anything, and automatically writes a clean Git commit message for the changes. \[[1](https://www.secondtalent.com/resources/open-source-ai-coding-assistants/), [2](https://www.digitalocean.com/resources/articles/best-ai-coding-assistant), [3](https://aimultiple.com/local-ai-agent), [4](https://theintellify.com/best-vibe-coding-tools/), [5](https://frontman.sh/blog/best-open-source-ai-coding-tools-2026/)]

### 2. Cline / Roo Code (VS Code Extensions)

- **How it works:** Sidepanels that sit directly inside your Visual Studio Code editor.
- **Why it's powerful:** They can read your workspace, create new files, execute terminal commands with your permission, and view your web browser output to debug front-end layout issues autonomously. \[[1](https://dev.to/sonotommy/8-ai-coding-agents-that-actually-ship-production-code-in-2026-18ch)]

### 3. Cursor (The AI IDE) \[[1](https://statmodeling.stat.columbia.edu/2025/05/19/which-ai-coding-assistant-should-i-be-using/), [2](https://decode.agency/article/ai-development-tools/)]

- **How it works:** A complete fork of VS Code with AI deeply baked into the core editor.
- **Why it's powerful:** It offers predictive inline typing, multi-file editing capabilities, and an instant `@`-mention indexing system that scans your entire local folder structure in milliseconds. \[[1](https://institute.sfeir.com/en/claude-code/claude-code-what-is-agentic-coding/versus/), [2](https://www.zemith.com/contents/best-ai-coding-assistant-2026), [3](https://www.eesel.ai/blog/microsoft-copilot-vs-cursor)]

### 4. Bolt.new / Lovable (In-Browser Full-Stack Agents) \[[1](https://www.phaedrasolutions.com/blog/best-ai-for-coding), [2](https://lovable.dev/guides/lovable-vs-bolt-vs-v0), [3](https://emergent.sh/learn/v0-vs-lovable-vs-bolt), [4](https://www.youtube.com/watch?v=o3j2nLsQ2zw), [5](https://www.taskade.com/blog/best-vibe-coding-tools)]

- **How it works:** Web-based environments that run a complete virtual machine inside your browser.
- **Why it's powerful:** You type _"Build a real-time chat app with a dark theme,"_ and the agent installs the packages, writes the database logic, compiles the code, and launches a live preview window entirely in your browser window. \[[1](https://www.youware.com/blog/bolt-vs-lovable), [2](https://lovable.dev/guides/lovable-vs-bolt-vs-v0), [3](https://medium.com/@indraneelsarode22neel/building-a-lovable-clone-inside-the-architecture-of-agentic-ai-platforms-4d423dc53a9c)]

***

### Where LibreChat Still Wins for Developers

Even if you use a coding agent, LibreChat is highly valuable in a developer's toolkit for specific tasks:

1. **Architecture & Architecture Brainstorming:** Coding agents are expensive to run for broad conceptual questions because they scan your whole codebase. LibreChat is much faster and cheaper for asking _"How should I structure a database for a marketplace app?"_ \[[1](https://www.testleaf.com/blog/claude-code-vs-copilot-vs-cursor-ai-agents-comparison/)]
2. **Safe Code Sandbox Testing:** LibreChat's built-in **Code Interpreter** runs script execution inside an isolated container. This allows you to test raw Python or JavaScript algorithms safely without running untrusted code on your actual computer hardware. \[[1](https://www.librechat.ai/docs/features/code%5Finterpreter), [2](https://www.kindo.ai/blog/kindo-and-librechat-open-source-flexibility-with-enterprise-security-ai)]
3. **Multi-Model Diffing:** If you are stuck on a highly complex bug, LibreChat allows you to quickly query OpenAI, Anthropic, and Gemini on the exact same prompt string side-by-side to see which model spots the logic flaw first.

***

### Summary Recommendation

- Choose **LibreChat** if you want a **general-purpose companion** to explain programming concepts, document existing APIs, write standalone functions, or act as an everyday brainstorming partner.
- Choose a **Coding Agent (like Cline or Cursor)** if you want the AI to **actively write, edit, test, and maintain** your project files directly inside your workspace. \[[1](https://betterstack.com/community/comparisons/cline-vs-roo-code-vs-cursor/)]

If you want to integrate agentic workflows, let me know:

- Do you prefer working inside a **terminal**, a **VS Code extension**, or a **standalone web browser editor**?

- Are you looking to build a project from **scratch**, or are you modifying a **large existing codebase**?

- [link](https://www.pondhouse-data.com/blog/introduction-to-libre-chat)\
  What is Libre Chat? The best alternative to Open WebUI and ChatGPT\
  Without much surprise, the major feature in an AI chat solutions is ... the chat interface. LibreChat, as already established, tri...\
  \
  \
  Pondhouse Data

- [link](https://getnao.io/blog/open-source-analytics-agent-builder-playbook/)\
  The 5 Best Open Source Analytics Agents in 2026\
  Feb 18, 2026 — LibreChat gives you a full-featured AI chat interface: multi-model switching mid-conversation, agents with MCP support, code inter...\
  \
  \
  getnao.io

- [link](https://www.b2bemailmarketing.com/breaking-technical-barriers-my-journey-installing-librechat/)\
  Breaking Technical Barriers: My Journey Installing LibreChat – The Hybrid Advantage Blog\
  Jul 6, 2025 — First things first: What exactly is LibreChat? Think of it as your personal AI hub: an open-source chat platform that lets you run...\
  \
  \
  www.b2bemailmarketing.com

Show all

## You said: can librechat agent operate on fs

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, a LibreChat agent can operate on a file system, but <strong>only on the specific folder path(s) you explicitly permit</strong></mark>. Because LibreChat runs inside isolated Docker containers, it cannot touch your host server's file system out of the box. \[[1](https://skyvia.com/blog/filesystem-mcp-server/), [2](https://legaled.ai/confidentiality-solved/), [3](https://github.com/danny-avila/LibreChat/discussions/12234)]

To give an agent file system access, you must configure a **Model Context Protocol (MCP) filesystem server** and link it to the container. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/mcp%5Fservers)]

***

### Step 1: Expose the Local Folder to Docker

Since LibreChat is running inside Docker, you must map a folder from your Ubuntu host machine into the LibreChat container so Docker can see it. \[[1](https://cloudinfrastructureservices.co.uk/setup-librechat-on-docker-in-azure-aws-gcp/)]

1. Open your `docker-compose.override.yml` file (or create one in your `LibreChat` directory):\
   bash

<!---->

```
nano docker-compose.override.yml
```

Use code with caution.
2\. Paste the following configuration to mount a folder (e.g., `/home/ubuntu/my-workspace`) into the container's internal path (`/workspace`):\
yaml

```
services:
  api:
    volumes:
      - /home/ubuntu/my-workspace:/workspace
```

Use code with caution.
3\. Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`). \[[1](https://www.librechat.ai/docs/configuration/mongodb/mongodb%5Fatlas), [2](https://forums.unraid.net/topic/151417-support-pureelectricity-librechat/), [3](https://www.librechat.ai/docs/configuration/dotenv)]

***

### Step 2: Configure the File System MCP Server \[[1](https://www.arsturn.com/blog/how-to-give-your-ai-local-file-system-access-with-mcp)]

LibreChat uses the standard Anthropic [Model Context Protocol (MCP)](https://www.librechat.ai/docs/features/mcp) to handle external tools. You must declare the filesystem tool in your main configuration file. \[[1](https://www.librechat.ai/docs/features/mcp), [2](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/mcp%5Fservers)]

1. Open your configuration file:\
   bash

<!---->

```
nano librechat.yaml
```

Use code with caution.
2\. Add the official `@modelcontextprotocol/server-filesystem` setup under the `mcpServers` block:\
yaml

```
mcpServers:
  filesystem-tool:
    type: stdio
    command: npx
    args:
      - "-y"
      - "@modelcontextprotocol/server-filesystem"
      - "/workspace"
```

Use code with caution.\
_(Note: The path `/workspace` matches the internal Docker folder we mapped in Step 1.)_
3\. Save the file and restart your containers to apply the changes:\
bash

```
sudo docker compose down && sudo docker compose up -d
```

Use code with caution.\
\[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/mcp%5Fservers), [2](https://www.reddit.com/r/LocalLLaMA/comments/1p0iqgw/librechat%5Ffirst%5Fimpressions/), [3](https://docs.glean.com/administration/platform/mcp/host-guides/librechat), [4](https://skywork.ai/skypage/en/A-Developer's-Guide-to-LibreChat-MCP-Servers-Bridging-AI-to-the-World/1970691312655396864), [5](https://docs.glean.com/administration/platform/mcp/host-guides/librechat)]

***

### Step 3: Attach the Tool to Your Agent

Once LibreChat boots back up, you can assign these file system privileges to any agent via the Web UI: \[[1](https://www.librechat.ai/docs/features/mcp)]

1. Open your browser and go to your LibreChat dashboard.
2. Select **Agents** from the top-left dropdown menu.
3. Click **Create Agent** or edit an existing one.
4. Go to **Tools** / **Capabilities** and select **Connect to MCP Server**.
5. Select your newly created `filesystem-tool`. \[[1](https://www.librechat.ai/docs/features/agents), [2](https://docs.retool.com/agents/guides/tools/connect-to-mcp-server), [3](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/mcp%5Fservers)]

Your agent can now list directories, read code files, write edits, and create documents directly inside that specific folder path. \[[1](https://www.librechat.ai/docs/configuration/librechat%5Fyaml/object%5Fstructure/mcp%5Fservers), [2](https://skyvia.com/blog/filesystem-mcp-server/)]

If you run into issues getting the tool to activate, let me know:

- Is your agent failing to **detect the MCP server** in the menu?

- Do you want to see how to pass **multiple specific paths** safely? \[[1](https://www.reddit.com/r/mcp/comments/1kdnm90/struggling%5Fto%5Fset%5Fup%5Fmcp%5Fservers%5Fas%5Ftools%5Fin/), [2](https://skyvia.com/blog/filesystem-mcp-server/)]

- [link](https://www.librechat.ai/docs/features/agents)\
  Agents | LibreChat\
  Recap \* Select "Agents" from the endpoint dropdown menu. \* Open the Agent Builder panel. \* Fill out the required agent details. \* ...\
  LibreChat

- [link](https://www.reddit.com/r/LocalLLaMA/comments/1p0iqgw/librechat%5Ffirst%5Fimpressions/)\
  LibreChat first impressions : r/LocalLLaMA - Reddit\
  Nov 18, 2025 — First of all, LibreChat was easy to get running. Their guide on docker compose worked perfectly and it was quick to test things bo...\
  Reddit·r/LocalLLaMA

- [link](https://www.librechat.ai/docs/features/mcp)\
  MCP - LibreChat\
  How MCP Works in LibreChat. LibreChat provides two ways to use MCP servers, either in the chat area or with agents. You can config...\
  LibreChat

Show all

## You said: does librechat want to have programming capabilities like coding agents, e.g. codex, claude code, opencode

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>No</strong>, LibreChat does not want to become an autonomous, workspace-modifying coding agent</mark> like **Claude Code, Codex, or OpenCode**. \[[1](https://github.com/danny-avila/LibreChat/discussions/12644), [2](https://www.instagram.com/reel/DXX2PTQGfaA/)]

LibreChat's core mission is to remain an **enterprise-grade, chat-centric interface** that unifies multiple cloud and local models under a single front-end. It is explicitly designed to compete with the **ChatGPT Plus and Claude.ai web interfaces**, not developer-focused IDE tools or terminal-based software engineers. \[[1](https://www.librechat.ai/docs/features), [2](https://aicamp.so/blog/librechat-alternative/), [3](https://clickhouse.com/blog/llm-observability-clickstack-mcp), [4](https://www.xda-developers.com/ditched-chatgpt-for-self-hosted-open-source-alternative-librechat/)]

However, LibreChat handles its programming capabilities differently and bridges the gap through specific architecture choices:

### 1. The Code Interpreter API (Sandboxed, not Autonomous) \[[1](https://clickhouse.com/blog/librechat-open-source-agentic-data-stack)]

Instead of modifying your active software workspace, LibreChat features a built-in [Code Interpreter API](https://www.librechat.ai/docs/features/code%5Finterpreter). \[[1](https://www.librechat.ai/docs/features), [2](https://www.librechat.ai/docs/features/code%5Finterpreter)]

- **How it works**: It lets your chat agent execute Python, JavaScript, Go, or Rust inside an isolated, secure container.
- **The Purpose**: It is used for **data analysis, math calculation, and script prototyping**. The agent runs the code to give you a text or visual answer, rather than writing app code straight into your local repository. \[[1](https://www.librechat.ai/docs/features/agents), [2](https://www.librechat.ai/docs/features), [3](https://www.youtube.com/watch?v=GfTj7O4gmd0\&t=7), [4](https://clickhouse.com/blog/librechat-open-source-agentic-data-stack), [5](https://cbarkinozer.medium.com/agentic-code-generation-papers-part-2-23d6482da032)]

### 2. Interactive Artifacts (Generative UI)

Much like Claude's native web interface, LibreChat features [Code Artifacts](https://www.librechat.ai/docs/features). If you ask it to build a web page or UI component, it generates and renders live React code, HTML, or Mermaid diagrams in a split screen right inside your browser. This is built for frontend prototyping rather than backend file management. \[[1](https://www.librechat.ai/docs/features), [2](https://www.youtube.com/watch?v=GfTj7O4gmd0\&t=7), [3](https://medium.com/@allohvk/claude-code-the-complete-architectural-deep-dive-best-practices-f9dd85f2e072), [4](https://github.com/danny-avila/LibreChat/discussions/5960), [5](https://medium.com/@elisowski/claude-cursor-aider-cline-copilot-which-is-the-best-one-ef1a47eaa1e6)]

### 3. Model Context Protocol (MCP) as the "Escape Hatch"

Rather than bloating the core app with native git tracking, terminal execution, and automatic folder-diffing features, LibreChat relies on **Anthropic's Model Context Protocol (MCP)**. \[[1](https://www.librechat.ai/docs/features/mcp)]

- If you _want_ a LibreChat Agent to operate on your computer's files like a coding agent, you must explicitly connect a [Filesystem MCP Server](https://www.librechat.ai/docs/features/mcp). \[[1](https://www.librechat.ai/docs/features/mcp), [2](https://github.com/danny-avila/LibreChat/discussions/7268)]
- This keeps the core app clean and modular, letting you turn on coding agent features only if you intentionally attach the external tools. \[[1](https://www.librechat.ai/docs/features/mcp), [2](https://medium.com/@creativeaininja/zerostack-a-lightweight-cli-coding-agent-that-runs-in-13mb-of-ram-de76c10e9cfe)]

### 4. Advanced "Mixture-of-Agents" Architectures

According to LibreChat's development focus, their agentic upgrade path leans toward a **layered Mixture-of-Agents (MoA) and Subagents pattern**. This allows a main chatbot to spin up hidden, isolated sub-runs to tackle focus tasks (like rewriting a block of script text or searching a document) and return a clean summary, maximizing conversation clarity over terminal automation. \[[1](https://www.librechat.ai/blog/2025-02-20%5F2025%5Froadmap), [3](https://medium.com/@ryan.ar/understanding-skills-and-sub-agents-in-claude-code-879d0eb73d81), [4](https://timdietrich.me/blog/claude-code-parallel-subagents/), [5](https://pub.towardsai.net/claude-code-agent-teams-the-end-of-solo-ai-coding-45da2cab6153)]

### Summary

If you are looking for a tool to autonomously refactor a repository, run server tests, or fix a broken codebase, you should use **Claude Code, Aider, or Cursor**. LibreChat is built to be the central team dashboard where you can converse, analyze data charts, prototype components, and manage cloud costs. \[[1](https://www.librechat.ai/docs/features), [2](https://www.youtube.com/watch?v=GfTj7O4gmd0\&t=7)]

Would you like to know how to set up the **Code Interpreter** to run script data analyses, or how to enable **React Artifacts** in your web layout settings? \[, [2](https://www.youtube.com/watch?v=GfTj7O4gmd0\&t=7)]

- [link](https://www.librechat.ai/docs/features/agents)\
  Agents - LibreChat\
  When enabled, the Code Interpreter capability allows your agent to: \* Execute code in multiple languages, including: Python, JavaS...\
  LibreChat
- [link](https://github.com/danny-avila/LibreChat/discussions/12644)\
  Orchestrator like claude code or other to have a complete ...\
  Orchestrator like claude code or other to have a complete suite of agents starting from librechat · danny-avila LibreChat · Discus...\
  GitHub
- [link](https://www.librechat.ai/docs/features/code%5Finterpreter)\
  Code Interpreter API - LibreChat\
  Execute code securely and manage files seamlessly with LibreChat's Code Interpreter API. Introduction. LibreChat's Code Interprete...\
  LibreChat

Show all

## You said: what tools does librechat have

[LibreChat](https://www.librechat.ai/) splits its tools into two distinct categories: <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Built-in System Capabilities</strong> (features baked into the chat interface) and <strong>Agent Plugins/API Tools</strong></mark> (specific functions given to AI agents to perform tasks). \[[1](https://www.librechat.ai/docs/features), [2](https://medium.com/@adarishanmukh15501/tools-in-langchain-cd77d00f126f), [3](https://its.uri.edu/2024/12/16/librechat/), [4](https://www.librechat.ai/docs/features/access%5Fcontrol)]

***

### 1. Built-in Core Capabilities

These tools are available across the entire platform to enhance the overall chat experience: \[[1](https://github.com/orgs/langfuse/discussions/6170)]

- **Interactive Artifacts (Generative UI)**: Dynamically renders React components, live interactive HTML web pages, or SVG Mermaid diagrams in a side-by-side view panel. \[[1](https://www.librechat.ai/docs/features), [2](https://www.librechat.ai/), [3](https://www.librechat.ai/docs/features/artifacts)]
- **[Code Interpreter API](https://www.librechat.ai/docs/features/code%5Finterpreter)**: Runs script workflows natively and securely. It compiles and executes code across multiple environments, including Python, JavaScript/TypeScript, Go, C/C++, Java, PHP, Rust, and Fortran. \[[1](https://www.librechat.ai/docs/features/agents), [2](https://www.librechat.ai/docs/features/code%5Finterpreter)]
- **[RAG API](https://www.librechat.ai/docs/features) (Chat with Files)**: Handles complex document vector chunking to reference and chat with heavy enterprise text uploads. \[[1](https://www.librechat.ai/docs/features)]
- **Advanced OCR Engine**: Extracts and formats tabular data, structured layouts, and text equations from uploaded images or documents. \[[1](https://www.librechat.ai/docs/features), [2](https://pixlab.io/vision-platform/llm-tools-data-parse), [3](https://multiple.chat/)]
- **[MeiliSearch Indexer](https://www.librechat.ai/docs/features/search)**: Delivers rapid, typo-tolerant full-text search across your entire historical messaging database. \[[1](https://www.librechat.ai/docs/features), [2](https://www.librechat.ai/docs/features/search)]

***

### 2. Native Agent Tools & Plugins

These are specific specialized tools that you can activate via checkboxes when building an AI Agent or custom persona: \[]

### Web Browsing & Search

- **Google Search**: Grants agents access to query live results from Google.
- **Tavily Search**: Optimized AI search aggregator built specifically to provide high-density facts to LLMs.
- **Traversaal**: Specialized search API built for multi-step agent research.
- **Azure AI Search**: Plugs into institutional Azure text indexing repositories. \[]

### Image Generation & Modification

- **DALL-E 3**: Native text-to-image creation via OpenAI.
- **Stable Diffusion / Flux**: Connects self-hosted image generation engines for image creation or fine-tuned variation modifications.
- **Gemini Image Tools**: Vision parsing and context-aware canvas image editing. \[, [2](https://www.librechat.ai/docs/features/image%5Fgen), [3](https://www.pondhouse-data.com/blog/introduction-to-libre-chat)]

### Productivity & Math

- **Wolfram Alpha**: Computational calculus, physics engine analytics, and advanced mathematics.
- **Calculator**: Local standard arithmetic module preventing LLM hallucinations on math tasks.
- **OpenWeather**: Live global climate and localized forecast tracking. \[, [2](https://mymathsclub.com/best-7-ai-tools-mathematics-statistics/), [3](https://www.librechat.ai/docs/configuration/tools), [4](https://www.hostinger.com/in/tutorials/how-to-self-host-librechat-with-docker)]

***

### 3. The Universal Tool: Model Context Protocol (MCP)

The absolute strongest tool framework in LibreChat is its open support for the **Model Context Protocol (MCP)**. \[[1](https://www.librechat.ai/)]

Rather than waiting for the developers to code a tool, you can connect **any open-source MCP server** to your LibreChat instance. This instantly gives your agents access to hundreds of community tools, such as: \[[1](https://www.librechat.ai/), [2](https://docs.portkey.ai/docs/integrations/mcp-clients/librechat)]

- **Filesystem Tools**: Read, edit, or create files inside designated host folders.
- **Database Connectors**: Run live analytical queries directly against PostgreSQL, MySQL, or MongoDB servers.
- **API Git Bridges**: Fetch repo issues, track commits, or inspect pull requests on GitHub. \[[1](https://www.librechat.ai/docs/configuration/tools), [2](https://railway.com/deploy/librechat-official)]

Would you like to know how to toggle on the **Code Interpreter** container, or how to wire up a specific **Web Search** API key into your layout config?

- [link](https://www.librechat.ai/docs/configuration/tools)\
  Tools | LibreChat\
  Tools. Image Generation. Google Search Tavily Search Traversaal Azure AI Search. OpenWeather Wolfram|AlphaCalculator. MongoDB.\
  LibreChat
- [link](https://www.librechat.ai/docs/features/agents)\
  Agents - LibreChat\
  When enabled, the Code Interpreter capability allows your agent to: \* Execute code in multiple languages, including: Python, JavaS...\
  LibreChat
- [link](https://www.librechat.ai/docs/features)\
  Overview | LibreChat\
  Overview | LibreChat. Search. Quick Start. Agentic AI. MCP Agents Skills Subagents Agents API (Beta) Artifacts - Generative UI Cod...\
  LibreChat

Show all

## You said: all librechat tools

The entire tool landscape of [LibreChat](https://www.librechat.ai/) is categorized into **Core UI Features** (baked directly into the platform layout) and **Agent Plugins** (toggled on or off to grant specific functions to your models). \[[1](https://www.librechat.ai/docs/features)]

***

### 1. Core UI Capabilities & Features

These tools dictate how LibreChat processes text, code, and documents inside your main chat window: \[]

- **[Interactive Artifacts](https://www.librechat.ai/docs/features) (Generative UI)**: Renders live React components, interactive standalone HTML web pages, or SVG Mermaid charts right inside a dedicated side panel next to your chat. \[[1](https://www.librechat.ai/)]
- **[Code Interpreter API](https://www.librechat.ai/docs/features/code%5Finterpreter)**: Executes programming code inside a secure sandbox container. It natively runs and parses outputs for Python, JavaScript, TypeScript, Go, Rust, Java, C/C++, PHP, and Fortran. Sessions can be saved via a **Persistent Code Environment**. \[[1](https://www.librechat.ai/), [3](https://www.librechat.ai/docs/features/upload%5Fas%5Ftext), [4](https://www.librechat.ai/changelog/v0.7.8), [5](https://www.truefoundry.com/docs/ai-gateway/librechat)]
- **[RAG API](https://www.librechat.ai/docs/features/rag%5Fapi) (Chat with Files)**: Handles complex local file indexing using LangChain and a PostgreSQL/PGVector vector database backend to cleanly process user-uploaded documents. \[[1](https://www.librechat.ai/docs/features/rag%5Fapi)]
- **[Mistral OCR](https://www.librechat.ai/changelog/v0.7.8) / Document Extraction**: Automatically pulls, structures, and transcribes handwriting, data tables, and structured documents directly into pure text strings. \[[1](https://www.librechat.ai/changelog/v0.7.8)]
- **[MeiliSearch Database Indexer](https://www.librechat.ai/docs/features/search)**: Feeds your messaging history into a typo-tolerant, lightning-fast "search-as-you-type" index tool. \[[1](https://www.librechat.ai/docs/features/search)]

***

### 2. Native Agent Tools & Plugins

These are specific external integrations you assign to customized AI personas and agents via checkboxes in the Web UI: \[[1](https://www.librechat.ai/docs/features/agents)]

### Search & Web Browsing

- **Google Search**: Grants live web querying access to look up current data online.
- **Tavily Search**: High-density internet indexing specifically built to gather facts cleanly for LLM consumption.
- **Traversaal**: Specialized search API optimized for complex, multi-step research agents.
- **Azure AI Search**: Plugs directly into internal corporate Azure text index pools. \[[1](https://www.librechat.ai/docs/features/agents), [2](https://github.com/danny-avila/LibreChat/issues/10410), [3](https://www.kdnuggets.com/7-essential-openclaw-skills-you-need-right-now)]

### Image Generation & Editing

- **DALL-E 3**: Uses OpenAI's engine to create crisp images from text prompts.
- **OpenAI Image Tools**: Native variation tracking and context-aware image adjustments using GPT-Image models.
- **Gemini Image Tools**: Vision parsing and spatial canvas image manipulation powered by Google's native multimodal weights.
- **Stable Diffusion / Flux**: Connects self-hosted, open-source graphic models directly into the chat container layout. \[[1](https://www.librechat.ai/docs/features/agents)]

### Productivity & Computation

- **Wolfram Alpha**: Accesses computational calculation layers, physics analytics engines, and advanced math modeling.
- **Calculator**: Standard computational tool preventing LLM logic hallucinations during math equations.
- **OpenWeather**: Pulls real-time, precise global climate datasets and local weather projections. \[[1](https://www.librechat.ai/docs/features/agents), [2](https://theaisanctuary.org/ai-tools/)]

***

### 3. The Universal Tool: Model Context Protocol (MCP)

By supporting the **Model Context Protocol (MCP)**, LibreChat allows you to declare third-party community tools directly inside your `librechat.yaml` configuration. An agent equipped with MCP can tap into outside architectures, such as: \[[1](https://www.librechat.ai/), [2](https://www.librechat.ai/docs/features)]

- **Filesystem Servers**: Creating, reading, or appending data directly inside specified host folder paths.
- **Database Accessors**: Directly running analytical search strings inside production environments like PostgreSQL, MySQL, or MongoDB.
- **Git API Bridges**: Modifying GitHub pull requests, creating issues, or reading repo codebases autonomously. \[[1](https://www.librechat.ai/docs/configuration/tools), [2](https://awclub.github.io/)]

If you are currently adjusting your configuration files, let me know:

- Do you want to see the specific YAML lines needed to link **Google Search** or **Tavily**?

- Do you want to set up the **Code Interpreter** backend container? \[[1](https://www.librechat.ai/docs/features/agents), [2](https://www.librechat.ai/docs/features)]

- [link](https://www.librechat.ai/docs/configuration/tools)\
  Tools | LibreChat\
  Tools. Image Generation. Google Search Tavily Search Traversaal Azure AI Search. OpenWeather Wolfram|AlphaCalculator. MongoDB.\
  LibreChat

- [link](https://www.librechat.ai/docs/features/agents)\
  Agents | LibreChat\
  OpenAI Image Tools: Image generation & editing using GPT-Image-1. Gemini Image Tools: Image generation and image-context editing u...\
  LibreChat

- [link](https://www.librechat.ai/)\
  LibreChat - The Open-Source AI Platform\
  Agents. Advanced agents with file handling, code interpretation, and API actions. Learn more. Code Interpreter. Execute code in mu...\
  LibreChat

Show all

## You said: all popular mcps for librechat

The Model Context Protocol (MCP) ecosystem has expanded dramatically. When using LibreChat, you can declare community-built MCP servers in your `librechat.yaml` file to give your chat agents specialized utilities. \[[1](https://www.librechat.ai/docs/configuration/tools), [2](https://arxiv.org/html/2508.01780v1), [3](https://www.librechat.ai/docs/features/mcp)]

The most popular, production-ready MCP servers used in LibreChat setups are organized by their use case below.

***

### 1. Developer & DevOps Tools

These are highly integrated by developers who want their LibreChat agents to analyze repositories, manage environments, or track project tasks. \[[1](https://skyvia.com/blog/best-mcp-servers/), [2](https://medium.com/everyday-ai/easily-build-your-smart-ai-assistant-with-mcp-with-code-92a49e12c8a9)]

- **[GitHub MCP](https://github.com/modelcontextprotocol/servers) / GitLab**: Allows agents to review code repositories, look through commits, manage pull requests, and track open issues autonomously. \[[1](https://github.com/modelcontextprotocol/servers), [2](https://github.com/AI-App/ModelContextProtocol.Servers), [3](https://fast.io/resources/mcp-tools/), [4](https://www.linkedin.com/pulse/mcp-explained-simply-sameer-jaokar-ngovc), [5](https://stevekinney.com/courses/ai-development/mcp-for-claude-code-and-cursor)]
- **Docker MCP**: Allows agents to inspect local container states, view live execution logs, and run Docker operations directly from the chat prompt. \[[1](https://medium.com/@elisowski/the-top-20-mcp-servers-for-developers-according-to-reddits-users-bab333886336), [2](https://www.devshorts.in/p/ten-must-know-mcp-servers-for-every), [3](https://www.augmentcode.com/mcp)]
- **Sentry**: Lets agents fetch, categorize, and analyze real-time software error logs and stack traces straight from your production apps. \[[1](https://github.com/AI-App/ModelContextProtocol.Servers)]

### 2. Browser Automation & Live Web Scraping

While standard web search returns simple snippets, these MCP tools allow agents to interact with active web pages. \[[1](https://github.com/AI-App/ModelContextProtocol.Servers), [2](https://intuitionlabs.ai/articles/mcp-servers-claude-code-internet-search), [3](https://currently.att.yahoo.com/att/complete-idiots-guide-mcp-giving-200112905.html)]

- **Playwright MCP**: The most popular browser tool. It launches a headless web browser, taking structured snapshots, filling out forms, or extracting hidden text content for the model. \[[1](https://www.reddit.com/r/mcp/comments/1s3fu45/top%5F50%5Fmost%5Fpopular%5Fmcp%5Fservers%5Fin%5F2026/), [2](https://fast.io/resources/best-mcp-servers-automation/), [3](https://openclawlaunch.com/guides/best-mcp-servers), [4](https://medium.com/@yaron.been/9-open-source-tools-that-turn-ai-coding-assistants-into-autonomous-engineers-8a84374446cf)]
- **Puppeteer**: Similar to Playwright, this allows full browser control, web scraping, and visual screenshot generation of pages. \[[1](https://github.com/modelcontextprotocol/servers), [2](https://www.librechat.ai/docs/features/image%5Fgen), [3](https://airbyte.com/agentic-data/mcp-server-examples), [4](https://apidog.com/blog/top-10-mcp-servers-for-claude-code/), [5](https://www.aidesigner.ai/blog/best-mcp-servers)]
- **Fetch MCP**: A lightweight tool that rapidly downloads raw web contents and strips out clutter, formatting them cleanly into Markdown text optimized for LLM comprehension. \[[1](https://github.com/modelcontextprotocol/servers), [2](https://github.com/AI-App/ModelContextProtocol.Servers), [3](https://betatestsolutions.com/blog/top-15-mcp-servers-to-power-your-ai-with-real-world-actions/), [4](https://www.descope.com/learn/post/mcp), [5](https://www.datacamp.com/de/blog/top-remote-mcp-servers)]

### 3. Data & Infrastructure Integrations

These are critical for running advanced analytic or Retrieval-Augmented Generation (RAG) systems directly through LibreChat's interface. \[[1](https://www.k2view.com/blog/awesome-mcp-servers)]

- **PostgreSQL / SQLite**: Securely connects database instances. Agents can run structural schema inspections and compose or execute precise SQL queries.
- **Vectara MCP**: Connects a corporate semantic search layer to grant deep document discovery workflows during multi-file knowledge chats.
- **[Anyquery](https://www.youtube.com/watch?v=uF-8s33HRxM)**: A powerful data abstraction tool allowing agents to issue traditional SQL strings across unorthodox sources like local CSVs, JSON records, or remote API endpoints. \[[1](https://github.com/modelcontextprotocol/servers), [2](https://github.com/AI-App/ModelContextProtocol.Servers), [3](https://www.k2view.com/blog/awesome-mcp-servers), [4](https://skyvia.com/blog/best-mcp-servers/), [5](https://www.youtube.com/watch?v=uF-8s33HRxM\&t=3)]

### 4. Workplace Productivity & Knowledge Hubs

These bridge the gap between your chat dashboard and your daily organizational data silos. \[[1](https://skyvia.com/blog/best-mcp-servers/)]

- **Google Drive / Google Workspace**: Allows the model to comb through text files, look up spreadsheets, or search within organizational drives.
- **Notion MCP**: Indexes documentation databases, letting agents pull context directly from internal company wikis or update active team lists.
- **Slack MCP**: Links to communication spaces so agents can review ongoing message threads or post summaries directly into team channels.
- **Jira Context**: Feeds corporate development tasks and scrum board ticket timelines straight to coding assistants. \[[1](https://github.com/modelcontextprotocol/servers), [2](https://skyvia.com/blog/best-mcp-servers/), [3](https://www.k2view.com/blog/awesome-mcp-servers), [4](https://github.com/AI-App/ModelContextProtocol.Servers), [5](https://github.com/habitoai/Awesome-MCP-Servers-directory)]

### 5. Advanced Logic & Reasoning Enhancements

- **Sequential Thinking MCP**: Evaluates complex logic chains. It forces models to take a methodical step-by-step thinking approach, review past assumptions, and self-correct before drafting a final response.
- **Memory Graph**: Constructs an ongoing knowledge graph of long-term user preferences and entity relationships, improving contextual continuity. \[[1](https://github.com/modelcontextprotocol/servers), [2](https://github.com/AI-App/ModelContextProtocol.Servers), [3](https://www.shareuhack.com/en/posts/best-mcp-servers-guide-2026), [4](https://www.latent.space/p/mcp), [5](https://abhishek-iiit.medium.com/the-superhuman-stack-6-mcp-servers-that-multiply-claudes-power-b81f39a30c07)]

***

### How to Instantly Discover More

You can browse the curated directory [awesome-mcp-servers on GitHub](https://github.com/wong2/awesome-mcp-servers) to find hundreds of other open-source servers. Additionally, LibreChat seamlessly integrates with Smithery.ai, a registry that gives you the exact setup snippets needed for quick deployment. \[[1](https://github.com/wong2/awesome-mcp-servers), [2](https://forum.cloudron.io/topic/14187/adding-mcp-in-librechat), [3](https://www.camel-ai.org/blogs/camel-mcp-servers-model-context-protocol-ai-agents), [4](https://skywork.ai/skypage/en/unlocking-agentic-ai-docling-mcp-server/1980468213817397248), [5](https://skywork.ai/skypage/en/slack-mcp-server-ai-engineer-tool/1977612161139142656)]

If you want to install one of these, let me know:

- Which **specific tool** are you trying to hook up?

- Would you like the exact **YAML block config** to wire it into your LibreChat server? \[[1](https://www.librechat.ai/docs/configuration/tools)]

- [link](https://www.librechat.ai/docs/features/image%5Fgen)\
  Image Generation & Editing - LibreChat\
  Apr 1, 2025 — 6 · Model Context Protocol (MCP) ... For example, the Puppeteer MCP Server can be used to generate screenshots of web pages, which...\
  LibreChat

- [link](https://github.com/wong2/awesome-mcp-servers)\
  wong2/awesome-mcp-servers: A curated list of Model ... - GitHub\
  dbt - Official MCP server for dbt (data build tool) providing integration with dbt Core/Cloud CLI, project metadata discovery, mod...\
  GitHub

- [link](https://forum.cloudron.io/topic/14187/adding-mcp-in-librechat)\
  Adding MCP in Librechat - Cloudron Forum\
  Aug 14, 2025 — According to the Librechat documentation on MCP - \[https://www.librechat.ai/docs/features/mcp ] - the easy way to find and install...\
  Cloudron Forum

Show all

## You said: all popular skills for librechat

In LibreChat, **Agent Skills** refer to a specific framework that lets you package reusable behavior into **`SKILL.md` bundles**. Unlike a basic prompt or a rigid tool, a Skill combines markdown instructions, reference files, scripts, and asset permissions that an AI agent can invoke automatically, on request, or keep "always-on". \[[1](https://www.librechat.ai/changelog/v0.8.6-rc1)]

Because Skills are created by users and administrators to fit their specific organization or workflows, the most popular "skills" deployed in [LibreChat Agent Skills](https://www.librechat.ai/docs/features/skills) fall into several highly effective categories: \[[1](https://www.librechat.ai/docs/features/skills), [2](https://www.librechat.ai/changelog/v0.8.6-rc1), [3](https://inference.sh/blog/skills/agent-skills-overview)]

### 1. Brand Alignment & Content Writing

- **Brand Voice Guardrails**: Enforces specific brand guidelines, banned phrases, and formatting rules across public-facing text. \[[1](https://www.librechat.ai/docs/features/skills)]
- **Localization & Translation Matrix**: Bundles dictionary sheets and localization rules into a skill, ensuring translated copy matches regional product terminology instead of literal machine translation. \[[1](https://www.librechat.ai/docs/features/skills)]
- **SEO Copywriting Framework**: Automatically primes the agent with standard keyword density constraints, semantic markdown rules, and heading hierarchies for web layout writing.

### 2. Quality Assurance & Compliance Checklists

- **Internal Code Review Checklists**: Forces an engineering agent to run through specific enterprise security rules, naming conventions, and testing requirements before marking code as complete. \[[1](https://www.librechat.ai/docs/features/skills)]
- **Legal / Editorial Gatekeeping**: Injects a rigid compliance review procedure. The agent runs text through strict legal criteria or style rules before outputting final documents. \[[1](https://www.librechat.ai/docs/features/skills)]

### 3. Advanced Research Workflows

- **Deep Competitive Intelligence**: Packages standard templates and data extraction procedures so an agent knows exactly how to break down competitor details when using web search or RAG plugins.
- **Academic Citation Formatter**: Forces the agent to strictly match specific formatting guidelines (e.g., APA 7, Harvard Style) and parse data references properly across uploaded text. \[[1](https://www.librechat.ai/docs/features/skills)]

### 4. Technical Workstation & Tool Priming

- **Database Query Optimizer**: Pre-loads structured database schemas and indexing best practices as a reference asset. The agent reads this _before_ generating or running queries via SQL MCP servers.
- **Data Visualization Prep**: Pairs an instruction markdown file with a specialized Python script template. When called, it ensures the agent sets up the **Code Interpreter** to generate properly sized, cleanly labeled graphs every time. \[[1](https://www.librechat.ai/docs/features/skills), [2](https://github.com/danny-avila/LibreChat/issues/11106)]

***

### How These Skills Are Triggered

Once a skill bundle is added to your library or shared by an administrator, agents can interact with it in three ways: \[[1](https://www.librechat.ai/docs/features/skills), [2](https://www.librechat.ai/changelog/v0.8.6-rc1)]

1. **Manual Invocations ($ Commands)**: You type `$` in the chat window, and a drop-down popover lets you pick a specific skill to apply to your next prompt.
2. **Model-Invoked (Autonomous)**: The agent scans the available skill catalog descriptions and dynamically activates the matching skill when it realizes your request requires a specialized workflow.
3. **Always-On Priming**: You can bind a skill directly to an agent persona so it acts as a permanent, baseline layer of behavior for every single message in a thread. \[[1](https://www.librechat.ai/docs/features/skills), [2](https://github.com/danny-avila/LibreChat/issues/11106), [3](https://www.librechat.ai/changelog/v0.8.6-rc1)]

Are you looking to write your first **`SKILL.md` file**? I can give you the exact **frontmatter layout** and markdown structure to configure your own custom skill.

- [link](https://www.librechat.ai/docs/features/skills)\
  Skills | LibreChat\
  Skills. Create reusable SKILL.md instructions that agents can invoke manually, automatically, or on every turn. Skills are reusabl...\
  LibreChat
- [link](https://github.com/danny-avila/LibreChat/issues/11106)\
  Support for Agent Skills · Issue #11106 · danny-avila/LibreChat\
  Dec 25, 2025 — Description \* What features would you like to see added? I'd like to request support for Agent Skills in LibreChat. Details: Agent...\
  GitHub
- [link](https://www.librechat.ai/changelog/v0.8.6-rc1)\
  LibreChat v0.8.6-rc1\
  May 13, 2026 — 🏞️ Highlights. Agent Skills. Agent Skills let you package reusable agent behavior into SKILL.md bundles: instructions, reference ...\
  LibreChat

Show all

