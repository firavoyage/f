how does codex store data

5:21 AM

OpenAI's **Codex developer agent app** stores data <mark>using a hybrid local-first architecture combined with isolated session-level context</mark>. It is designed to act directly on your codebase while storing settings, credentials, transcripts, and logs across specific local and system directories. [link](https://www.reddit.com/r/codex/comments/1tlvbkw/codex%5Fchat%5Fand%5Fproject%5Fdata%5Fstorage%5Fquestions/)

### Local System Directory (`~/.codex/`)

Codex maintains a central hidden home directory on your local machine (`~/.codex/`) to store core global data: [link](https://www.reddit.com/r/codex/comments/1qp857r/how%5Fdoes%5Fcodex%5Fmemory%5Fspan%5Fmultiple%5Fcodex%5Fsessions/)

- **Configurations**: Global user preferences, MCP (Model Context Protocol) servers, and feature flags are stored in the main `~/.codex/config.toml` file.
- **Credentials & Auth**: Agent identities, access keys, and tokens are kept in a dedicated local auth storage path.
- **Session Backups**: Persistent transcripts and session histories are saved locally under `~/.codex/sessions`. This allows you to pick up where you left off, though individual threads are kept isolated and do not inherently cross-reference each other's code context. [link](https://www.reddit.com/r/codex/comments/1qp857r/how%5Fdoes%5Fcodex%5Fmemory%5Fspan%5Fmultiple%5Fcodex%5Fsessions/)

### Project-Level Workspace Directories

Instead of uploading your code to a centralized cloud database, Codex works **locally within your project directory**. It references two major repository-based files for contextual memory: [link](https://dometrain.com/blog/getting-started-with-codex/)

- **`config.toml` overrides**: Repository-specific settings can be scoped inside a `.codex/config.toml` file within your project root.
- **`AGENTS.md`**: This file acts as a persistent instructions document stored directly in your repository. It contains navigation rules, coding standards, and test parameters that Codex pulls into memory every time it runs within that specific project. [link](https://newsletter.pragmaticengineer.com/p/how-codex-is-built)

### Operating Logs & Cache (`Documents/Codex`)

Codex creates directory trees under the system `Documents/Codex` folder. This space acts as a staging area for temporary files, pictures, generated assets, and detailed background logs. [link](https://www.reddit.com/r/codex/comments/1tlvbkw/codex%5Fchat%5Fand%5Fproject%5Fdata%5Fstorage%5Fquestions/)

### Isolated Cloud Container Retainers

When Codex runs automated tasks or deep scans that execute code, it operates within an **isolated, secure cloud container**. [link](https://openai.com/index/introducing-codex/)

- Contextual variables (like database schemas or short-term logic) are held in memory strictly at the **session level**.
- These variables disappear once the task is finished to maintain strict developer privacy guidelines.
- Enterprise versions often support **Zero Data Retention (ZDR)**, ensuring no code hooks or session transcripts are saved or cached to OpenAI's external servers. [link](https://milvus.io/ai-quick-reference/does-codex-learn-from-the-code-i-write)

_(Note: If you are referring to the decentralized open-source storage framework called **Codex Protocol** rather than the OpenAI developer agent, it stores data by breaking files into chunks, applying erasure coding parity blocks, and distributing them across a peer-to-peer blockchain network managed by passive storage provider nodes.)_ [link](https://blog.codex.storage/protocol-breakdown-how-the-codex-p2p-network-works/)

If you are currently setting up the tool, would you like to know how to configure the **sandbox constraints**, adjust **approval permissions** for writing files, or connect **MCP servers** via your config file? [link](https://developers.openai.com/codex/config-basic)

- [link](https://www.reddit.com/r/codex/comments/1tlvbkw/codex%5Fchat%5Fand%5Fproject%5Fdata%5Fstorage%5Fquestions/)\
  Codex Chat and Project Data Storage Questions? - Reddit\
  Great insights! I am wondering also what's the difference between the Documents and the main ~/. codex storage. For me it creates ...\
  Reddit
- [link](https://www.reddit.com/r/codex/comments/1qp857r/how%5Fdoes%5Fcodex%5Fmemory%5Fspan%5Fmultiple%5Fcodex%5Fsessions/)\
  How does codex memory span multiple codex sessions? - Reddit\
  there is no persisted memory with codex. you only get "memory" from agents.md files - always loaded - and skill files - loaded on ...\
  Reddit
- [link](https://newsletter.pragmaticengineer.com/p/how-codex-is-built)\
  How Codex is built - by Gergely Orosz - The Pragmatic Engineer\
  Other engineering practices on the team \* AGENTS.md. Instructions stored inside a repository. On the Codex team, these files tell ...\
  The Pragmatic Engineer

Show all