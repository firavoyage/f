<!-- i have opencode and enough tokens. and it definitely can work. but i want it to work gracefully. im afraid if will read through the codebase and run commands automatically. -->

<!-- chatgpt web ui is too laggy. idk what they are doing. it would be much better if it's even static page (e.g. google ai mode), i.e. it can add content, but no dynamic loading (auto detect viewport, resize, ...) -->

<!-- open webui seems popular. i would config my key and use the traditional copy and paste vibe coding workflow. simple. stupid. predictable. -->

<!-- so weird. my life would be much easier if i could pnpm -g. ive never thought i would take some notes it to even download it. (most apps, claude, codex, openclaw, whatever uses pnpm. docker is not bad. but it's not suitable for personal desktop, which brings too much redundant compatibility layers.) -->

<!-- flatpak is good, and should be the default (instead of snap). but it's web ui. "web" ui. -->

<!-- wtf. see what it is doing. fetching... what a commercial foss software. -->

<!-- it takes secs to even start on offline mode. -->

<!-- well, localhost refuses to connect even when i pick a port that must be free. and it does not work like a daemon. (i have to use tmux, nohup or something...) -->

<!-- chatbox? what the hell. the one by acbox? ... see contributors... not really it seems. well, it's also commercial. idk, maybe there are a lot ai search tricks theyve played. i suppose there is a unix style geek tool. -->

<!-- i think i could do more research. but it's ok if i have to write mine. (though, i have not yet decided what design system would be. a cli? some simple abstraction?) -->

<!-- btw, it's a bad practice to have hyphen in your cli name. -->

# .

```
 ~ % open-webui serve
Loading WEBUI_SECRET_KEY from file, not provided as an environment variable.
Generating a new secret key and saving it to /home/fira/.webui_secret_key
Loading WEBUI_SECRET_KEY from /home/fira/.webui_secret_key
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade  -> 7e5b5dc7342b, init
INFO  [alembic.runtime.migration] Running upgrade 7e5b5dc7342b -> ca81bd47c050, Add config table
INFO  [alembic.runtime.migration] Running upgrade ca81bd47c050 -> c0fbf31ca0db, Update file table
INFO  [alembic.runtime.migration] Running upgrade c0fbf31ca0db -> 6a39f3d8e55c, Add knowledge table
Creating knowledge table
Migrating data from document table to knowledge table
INFO  [alembic.runtime.migration] Running upgrade 6a39f3d8e55c -> 242a2047eae0, Update chat table
Converting 'chat' column to JSON
Renaming 'chat' column to 'old_chat'
Adding new 'chat' column of type JSON
Dropping 'old_chat' column
INFO  [alembic.runtime.migration] Running upgrade 242a2047eae0 -> 1af9b942657b, Migrate tags
INFO  [alembic.runtime.migration] Running upgrade 1af9b942657b -> 3ab32c4b8f59, Update tags
Primary Key: {'name': None, 'constrained_columns': []}
Unique Constraints: [{'name': 'uq_id_user_id', 'column_names': ['id', 'user_id']}]
Indexes: [{'name': 'tag_id', 'column_names': ['id'], 'unique': 1, 'dialect_options': {}}]
Creating new primary key with 'id' and 'user_id'.
Dropping unique constraint: uq_id_user_id
Dropping unique index: tag_id
INFO  [alembic.runtime.migration] Running upgrade 3ab32c4b8f59 -> c69f45358db4, Add folder table
INFO  [alembic.runtime.migration] Running upgrade c69f45358db4 -> c29facfe716b, Update file table path
INFO  [alembic.runtime.migration] Running upgrade c29facfe716b -> af906e964978, Add feedback table
INFO  [alembic.runtime.migration] Running upgrade af906e964978 -> 4ace53fd72c8, Update folder table and change DateTime to BigInteger for timestamp fields
INFO  [alembic.runtime.migration] Running upgrade 4ace53fd72c8 -> 922e7a387820, Add group table
INFO  [alembic.runtime.migration] Running upgrade 922e7a387820 -> 57c599a3cb57, Add channel table
INFO  [alembic.runtime.migration] Running upgrade 57c599a3cb57 -> 7826ab40b532, Update file table
INFO  [alembic.runtime.migration] Running upgrade 7826ab40b532 -> 3781e22d8b01, Update message & channel tables
INFO  [alembic.runtime.migration] Running upgrade 3781e22d8b01 -> 9f0c9cd09105, Add note table
INFO  [alembic.runtime.migration] Running upgrade 9f0c9cd09105 -> d31026856c01, Update folder table data
INFO  [alembic.runtime.migration] Running upgrade d31026856c01 -> 018012973d35, Add indexes
INFO  [alembic.runtime.migration] Running upgrade 018012973d35 -> 3af16a1c9fb6, update user table
INFO  [alembic.runtime.migration] Running upgrade 3af16a1c9fb6 -> 38d63c18f30f, Add oauth_session table
INFO  [alembic.runtime.migration] Running upgrade 38d63c18f30f -> a5c220713937, Add reply_to_id column to message
INFO  [alembic.runtime.migration] Running upgrade a5c220713937 -> 37f288994c47, add_group_member_table
[]
INFO  [alembic.runtime.migration] Running upgrade 37f288994c47 -> 2f1211949ecc, Update messages and channel member table
INFO  [alembic.runtime.migration] Running upgrade 2f1211949ecc -> b10670c03dd5, Update user table
INFO  [alembic.runtime.migration] Running upgrade b10670c03dd5 -> 90ef40d4714e, Update channel and channel members table
INFO  [alembic.runtime.migration] Running upgrade 90ef40d4714e -> 3e0e00844bb0, Add knowledge_file table
INFO  [alembic.runtime.migration] Running upgrade 3e0e00844bb0 -> 6283dc0e4d8d, Add channel file table
INFO  [alembic.runtime.migration] Running upgrade 6283dc0e4d8d -> 81cc2ce44d79, Update channel file and knowledge table
INFO  [alembic.runtime.migration] Running upgrade 81cc2ce44d79 -> c440947495f3, Add chat_file table
INFO  [alembic.runtime.migration] Running upgrade c440947495f3 -> 374d2f66af06, Add prompt history table
INFO  [alembic.runtime.migration] Running upgrade 374d2f66af06 -> 8452d01d26d7, Add chat_message table
INFO  [alembic.runtime.migration] Running upgrade 8452d01d26d7 -> f1e2d3c4b5a6, Add access_grant table
INFO  [alembic.runtime.migration] Running upgrade f1e2d3c4b5a6 -> a1b2c3d4e5f6, Add skill table
INFO  [alembic.runtime.migration] Running upgrade a1b2c3d4e5f6 -> b2c3d4e5f6a7, add scim column to user table
INFO  [alembic.runtime.migration] Running upgrade b2c3d4e5f6a7 -> a3dd5bedd151, Add tasks and summary columns to chat table
INFO  [alembic.runtime.migration] Running upgrade a3dd5bedd151 -> d4e5f6a7b8c9, add automation tables
INFO  [alembic.runtime.migration] Running upgrade d4e5f6a7b8c9 -> b7c8d9e0f1a2, add last_read_at to chat
INFO  [alembic.runtime.migration] Running upgrade b7c8d9e0f1a2 -> e1f2a3b4c5d6, Add is_pinned to note table
INFO  [alembic.runtime.migration] Running upgrade e1f2a3b4c5d6 -> c1d2e3f4a5b6, Add shared_chat table and migrate existing shares
INFO  [alembic.runtime.migration] Running upgrade c1d2e3f4a5b6 -> 56359461a091, add calendar tables
INFO  [alembic.runtime.migration] Running upgrade 56359461a091 -> 4de81c2a3af1, add pinned_note table
INFO  [alembic.runtime.migration] Running upgrade 4de81c2a3af1 -> a0b1c2d3e4f5, Add memory user_id index
WARNI [open_webui.env]

WARNING: CORS_ALLOW_ORIGIN IS SET TO '*' - NOT RECOMMENDED FOR PRODUCTION DEPLOYMENTS.

/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:300: SyntaxWarning: invalid escape sequence '\('
  m = re.match('([su]([0-9]{1,2})p?) \(([0-9]{1,2}) bit\)$', token)
/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:301: SyntaxWarning: invalid escape sequence '\('
  m2 = re.match('([su]([0-9]{1,2})p?)( \(default\))?$', token)
/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:310: SyntaxWarning: invalid escape sequence '\('
  elif re.match('(flt)p?( \(default\))?$', token):
/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:314: SyntaxWarning: invalid escape sequence '\('
  elif re.match('(dbl)p?( \(default\))?$', token):
WARNI [langchain_community.utils.user_agent] USER_AGENT environment variable not set, consider setting it to identify your requests.

 ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗███████╗██████╗ ██╗   ██╗██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██║    ██║██╔════╝██╔══██╗██║   ██║██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ██║ █╗ ██║█████╗  ██████╔╝██║   ██║██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ██║███╗██║██╔══╝  ██╔══██╗██║   ██║██║
╚██████╔╝██║     ███████╗██║ ╚████║    ╚███╔███╔╝███████╗██████╔╝╚██████╔╝██║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚══════╝╚═════╝  ╚═════╝ ╚═╝


v0.9.5 - building the best AI user interface.

https://github.com/open-webui/open-webui

Downloading (incomplete total...): 100%|███████████████████████████████████████████████████████████████| 190/190 [00:00<00:00, 223B/s]Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.
WARNI [huggingface_hub.utils._http] Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.
Downloading (incomplete total...):   0%|                                                        | 192k/521M [00:15<10:19:59, 14.0kB/s]
Fetching 30 files:   3%|██▋                                                                            | 1/30 [00:01<00:53,  1.84s/it]
```

```
 ~ % open-webui serve
Loading WEBUI_SECRET_KEY from file, not provided as an environment variable.
Generating a new secret key and saving it to /home/fira/.webui_secret_key
Loading WEBUI_SECRET_KEY from /home/fira/.webui_secret_key
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade  -> 7e5b5dc7342b, init
INFO  [alembic.runtime.migration] Running upgrade 7e5b5dc7342b -> ca81bd47c050, Add config table
INFO  [alembic.runtime.migration] Running upgrade ca81bd47c050 -> c0fbf31ca0db, Update file table
INFO  [alembic.runtime.migration] Running upgrade c0fbf31ca0db -> 6a39f3d8e55c, Add knowledge table
Creating knowledge table
Migrating data from document table to knowledge table
INFO  [alembic.runtime.migration] Running upgrade 6a39f3d8e55c -> 242a2047eae0, Update chat table
Converting 'chat' column to JSON
Renaming 'chat' column to 'old_chat'
Adding new 'chat' column of type JSON
Dropping 'old_chat' column
INFO  [alembic.runtime.migration] Running upgrade 242a2047eae0 -> 1af9b942657b, Migrate tags
INFO  [alembic.runtime.migration] Running upgrade 1af9b942657b -> 3ab32c4b8f59, Update tags
Primary Key: {'name': None, 'constrained_columns': []}
Unique Constraints: [{'name': 'uq_id_user_id', 'column_names': ['id', 'user_id']}]
Indexes: [{'name': 'tag_id', 'column_names': ['id'], 'unique': 1, 'dialect_options': {}}]
Creating new primary key with 'id' and 'user_id'.
Dropping unique constraint: uq_id_user_id
Dropping unique index: tag_id
INFO  [alembic.runtime.migration] Running upgrade 3ab32c4b8f59 -> c69f45358db4, Add folder table
INFO  [alembic.runtime.migration] Running upgrade c69f45358db4 -> c29facfe716b, Update file table path
INFO  [alembic.runtime.migration] Running upgrade c29facfe716b -> af906e964978, Add feedback table
INFO  [alembic.runtime.migration] Running upgrade af906e964978 -> 4ace53fd72c8, Update folder table and change DateTime to BigInteger for timestamp fields
INFO  [alembic.runtime.migration] Running upgrade 4ace53fd72c8 -> 922e7a387820, Add group table
INFO  [alembic.runtime.migration] Running upgrade 922e7a387820 -> 57c599a3cb57, Add channel table
INFO  [alembic.runtime.migration] Running upgrade 57c599a3cb57 -> 7826ab40b532, Update file table
INFO  [alembic.runtime.migration] Running upgrade 7826ab40b532 -> 3781e22d8b01, Update message & channel tables
INFO  [alembic.runtime.migration] Running upgrade 3781e22d8b01 -> 9f0c9cd09105, Add note table
INFO  [alembic.runtime.migration] Running upgrade 9f0c9cd09105 -> d31026856c01, Update folder table data
INFO  [alembic.runtime.migration] Running upgrade d31026856c01 -> 018012973d35, Add indexes
INFO  [alembic.runtime.migration] Running upgrade 018012973d35 -> 3af16a1c9fb6, update user table
INFO  [alembic.runtime.migration] Running upgrade 3af16a1c9fb6 -> 38d63c18f30f, Add oauth_session table
INFO  [alembic.runtime.migration] Running upgrade 38d63c18f30f -> a5c220713937, Add reply_to_id column to message
INFO  [alembic.runtime.migration] Running upgrade a5c220713937 -> 37f288994c47, add_group_member_table
[]
INFO  [alembic.runtime.migration] Running upgrade 37f288994c47 -> 2f1211949ecc, Update messages and channel member table
INFO  [alembic.runtime.migration] Running upgrade 2f1211949ecc -> b10670c03dd5, Update user table
INFO  [alembic.runtime.migration] Running upgrade b10670c03dd5 -> 90ef40d4714e, Update channel and channel members table
INFO  [alembic.runtime.migration] Running upgrade 90ef40d4714e -> 3e0e00844bb0, Add knowledge_file table
INFO  [alembic.runtime.migration] Running upgrade 3e0e00844bb0 -> 6283dc0e4d8d, Add channel file table
INFO  [alembic.runtime.migration] Running upgrade 6283dc0e4d8d -> 81cc2ce44d79, Update channel file and knowledge table
INFO  [alembic.runtime.migration] Running upgrade 81cc2ce44d79 -> c440947495f3, Add chat_file table
INFO  [alembic.runtime.migration] Running upgrade c440947495f3 -> 374d2f66af06, Add prompt history table
INFO  [alembic.runtime.migration] Running upgrade 374d2f66af06 -> 8452d01d26d7, Add chat_message table
INFO  [alembic.runtime.migration] Running upgrade 8452d01d26d7 -> f1e2d3c4b5a6, Add access_grant table
INFO  [alembic.runtime.migration] Running upgrade f1e2d3c4b5a6 -> a1b2c3d4e5f6, Add skill table
INFO  [alembic.runtime.migration] Running upgrade a1b2c3d4e5f6 -> b2c3d4e5f6a7, add scim column to user table
INFO  [alembic.runtime.migration] Running upgrade b2c3d4e5f6a7 -> a3dd5bedd151, Add tasks and summary columns to chat table
INFO  [alembic.runtime.migration] Running upgrade a3dd5bedd151 -> d4e5f6a7b8c9, add automation tables
INFO  [alembic.runtime.migration] Running upgrade d4e5f6a7b8c9 -> b7c8d9e0f1a2, add last_read_at to chat
INFO  [alembic.runtime.migration] Running upgrade b7c8d9e0f1a2 -> e1f2a3b4c5d6, Add is_pinned to note table
INFO  [alembic.runtime.migration] Running upgrade e1f2a3b4c5d6 -> c1d2e3f4a5b6, Add shared_chat table and migrate existing shares
INFO  [alembic.runtime.migration] Running upgrade c1d2e3f4a5b6 -> 56359461a091, add calendar tables
INFO  [alembic.runtime.migration] Running upgrade 56359461a091 -> 4de81c2a3af1, add pinned_note table
INFO  [alembic.runtime.migration] Running upgrade 4de81c2a3af1 -> a0b1c2d3e4f5, Add memory user_id index
WARNI [open_webui.env]

WARNING: CORS_ALLOW_ORIGIN IS SET TO '*' - NOT RECOMMENDED FOR PRODUCTION DEPLOYMENTS.

/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:300: SyntaxWarning: invalid escape sequence '\('
  m = re.match('([su]([0-9]{1,2})p?) \(([0-9]{1,2}) bit\)$', token)
/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:301: SyntaxWarning: invalid escape sequence '\('
  m2 = re.match('([su]([0-9]{1,2})p?)( \(default\))?$', token)
/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:310: SyntaxWarning: invalid escape sequence '\('
  elif re.match('(flt)p?( \(default\))?$', token):
/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:314: SyntaxWarning: invalid escape sequence '\('
  elif re.match('(dbl)p?( \(default\))?$', token):
WARNI [langchain_community.utils.user_agent] USER_AGENT environment variable not set, consider setting it to identify your requests.

 ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗███████╗██████╗ ██╗   ██╗██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██║    ██║██╔════╝██╔══██╗██║   ██║██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ██║ █╗ ██║█████╗  ██████╔╝██║   ██║██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ██║███╗██║██╔══╝  ██╔══██╗██║   ██║██║
╚██████╔╝██║     ███████╗██║ ╚████║    ╚███╔███╔╝███████╗██████╔╝╚██████╔╝██║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚══════╝╚═════╝  ╚═════╝ ╚═╝


v0.9.5 - building the best AI user interface.

https://github.com/open-webui/open-webui

Downloading (incomplete total...): 100%|███████████████████████████████████████████████████████████████| 190/190 [00:00<00:00, 223B/s]Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.
WARNI [huggingface_hub.utils._http] Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF_TOKEN to enable higher rate limits and faster downloads.
Fetching 30 files: 100%|██████████████████████████████████████████████████████████████████████████████| 30/30 [03:02<00:00,  6.10s/it]
Loading weights: 100%|███████████████████████████████████████████████████████████████████████████| 103/103 [00:00<00:00, 10480.93it/s]
BertModel LOAD REPORT from: /home/fira/.cache/huggingface/hub/models--sentence-transformers--all-MiniLM-L6-v2/snapshots/c9745ed1d9f207416be6d2e6f8de32d1f16199bf
Key                     | Status     |  |
------------------------+------------+--+-
embeddings.position_ids | UNEXPECTED |  |

Notes:
- UNEXPECTED:   can be ignored when loading from different task/architecture; not ok if you expect identical arch.
INFO:     Started server process [319548]
INFO:     Waiting for application startup.
2026-05-18 20:38:51.030 | INFO     | open_webui.utils.logger:start_logger:194 - GLOBAL_LOG_LEVEL: INFO
2026-05-18 20:38:51.030 | INFO     | open_webui.main:lifespan:665 - Installing external dependencies of functions and tools...
2026-05-18 20:38:51.048 | INFO     | open_webui.utils.plugin:install_frontmatter_requirements:417 - No requirements found in frontmatter.
2026-05-18 20:38:51.049 | INFO     | open_webui.utils.automations:scheduler_worker_loop:172 - Scheduler worker started (poll interval: 10s)
Download complete: : 931MB [03:13, 4.09MB/s]^C^C
```

# .

```
 ~ % OFFLINE_MODE=True open-webui serve

Loading WEBUI_SECRET_KEY from file, not provided as an environment variable.
Loading WEBUI_SECRET_KEY from /home/fira/.webui_secret_key
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
WARNI [open_webui.env]

WARNING: CORS_ALLOW_ORIGIN IS SET TO '*' - NOT RECOMMENDED FOR PRODUCTION DEPLOYMENTS.

WARNI [langchain_community.utils.user_agent] USER_AGENT environment variable not set, consider setting it to identify your requests.

 ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗███████╗██████╗ ██╗   ██╗██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██║    ██║██╔════╝██╔══██╗██║   ██║██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ██║ █╗ ██║█████╗  ██████╔╝██║   ██║██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ██║███╗██║██╔══╝  ██╔══██╗██║   ██║██║
╚██████╔╝██║     ███████╗██║ ╚████║    ╚███╔███╔╝███████╗██████╔╝╚██████╔╝██║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚══════╝╚═════╝  ╚═════╝ ╚═╝


v0.9.5 - building the best AI user interface.

https://github.com/open-webui/open-webui

Loading weights: 100%|███████████████████████████████████████████████████████████████████████████| 103/103 [00:00<00:00, 10704.79it/s]
BertModel LOAD REPORT from: /home/fira/.cache/huggingface/hub/models--sentence-transformers--all-MiniLM-L6-v2/snapshots/c9745ed1d9f207416be6d2e6f8de32d1f16199bf
Key                     | Status     |  |
------------------------+------------+--+-
embeddings.position_ids | UNEXPECTED |  |

Notes:
- UNEXPECTED:   can be ignored when loading from different task/architecture; not ok if you expect identical arch.
INFO:     Started server process [320666]
INFO:     Waiting for application startup.
2026-05-18 20:39:52.568 | INFO     | open_webui.utils.logger:start_logger:194 - GLOBAL_LOG_LEVEL: INFO
2026-05-18 20:39:52.568 | INFO     | open_webui.main:lifespan:665 - Installing external dependencies of functions and tools...
2026-05-18 20:39:52.586 | INFO     | open_webui.utils.plugin:install_frontmatter_requirements:396 - Offline mode enabled, skipping installation of requirements.
2026-05-18 20:39:52.586 | INFO     | open_webui.utils.automations:scheduler_worker_loop:172 - Scheduler worker started (poll interval: 10s)
^C^C
```

<!-- refused to connect -->

#

open webui

**[Open WebUI](https://openwebui.com/)**<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong> is a highly extensible, self-hosted, user-friendly web interface designed to serve as an all-in-one frontend for Large Language Models (LLMs)</strong></mark>. It functions similarly to a personal ChatGPT or Claude interface but runs entirely under your control. It seamlessly connects with local model runners like Ollama as well as remote cloud APIs like OpenAI, Anthropic, and Gemini. \[[1](https://openwebui.com/), [2](https://sourceforge.net/projects/openwebui.mirror/), [3](https://www.youtube.com/watch?v=nQCOTzS5oU0), [4](https://www.youtube.com/watch?v=ndSwy3slV4s), [5](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk)]

Key Features

- **Multi-Provider Support**: Connects out of the box with Ollama, OpenAI-compatible APIs, and Anthropic endpoints.
- **RAG Integration**: Features a built-in Retrieval-Augmented Generation (RAG) engine to easily chat with uploaded PDFs and documents.
- **Extensible Architecture**: Supports writing custom Python functions, filters, pipelines, and tools to give your models extra capabilities.
- **Granular User Management**: Built-in admin panel allows you to manage user accounts, set access permissions, and monitor token usage.
- **Agentic Tools**: Supports a Model Builder to wrap base models with custom system instructions, persistent memories, and specific toolsets. \[[1](https://docs.openwebui.com/reference/), [2](https://github.com/open-webui/docs), [3](https://docs.openwebui.com/features/), [4](https://openwebui.com/home), [5](https://docs.openwebui.com/features/workspace/models/), [6](https://openwebui.com/), [7](https://sourceforge.net/projects/openwebui.mirror/)]

How to Install

Depending on your comfort level with technology, you can deploy Open WebUI using three main methods detailed on the [Open WebUI GitHub Repository](https://github.com/open-webui/open-webui): \[[1](https://github.com/open-webui/open-webui), [2](https://www.digitalocean.com/community/tutorials/realtime-audio-translation-using-openai-api-on-open-webui)]

Method 1: The Desktop App (Easiest)

If you want to skip the terminal and servers entirely, you can download the standalone [Open WebUI Desktop client](https://github.com/open-webui/desktop). \[[1](https://github.com/open-webui/desktop)]

1. Go to the Open WebUI Desktop Releases.
2. Download and run the executable for Windows, macOS, or Linux.
3. Open the app to immediately start configuring your connections. \[[1](https://appimage.org/), [2](https://github.com/SUC-DriverOld/MSST-WebUI), [3](https://medium.com/neural-engineer/introduction-to-openwebui-self-hosted-web-interface-for-llm-9dbf7910ab3d), [4](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk), [5](https://github.com/open-webui/desktop)]

Method 2: Via Docker (Recommended for Servers)

For a persistent home server installation, deploy the official container via Docker. Ensure that Ollama or your API endpoint is already running. \[[1](https://www.datacamp.com/blog/open-webui), [2](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk), [3](https://www.youtube.com/watch?v=ndSwy3slV4s)]

If Ollama is running on the **same machine**, execute: \[[1](https://github.com/open-webui/open-webui)]

bash

```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

Use code with caution.

Once the container finishes downloading, navigate to `http://localhost:3000` in your browser to create your initial administrator account. \[[1](https://www.datacamp.com/blog/open-webui)]

Method 3: Via Python pip (Manual)

If you prefer managing the environment directly through Python: \[[1](https://www.youtube.com/watch?v=Qz5WWJ9v-6A)]

1. Install the package via pip: `pip install open-webui`
2. Start the instance using the terminal command: `open-webui serve`
3. Open your browser and navigate to `http://localhost:8080` \[[1](https://github.com/open-webui/open-webui), [2](https://github.com/open-webui/open-webui/discussions/16825), [3](https://github.com/open-webui/open-webui)]

Would you like help **troubleshooting a connection** to Ollama, or are you interested in configuring **custom API keys** for cloud models?

- [link](https://openwebui.com/)\
  Open WebUI: Self-Hosted AI Platform\
  Open WebUI: Self-Hosted AI Platform. Open WebUI. The freedom AI stack. Run AI on your own terms. Connect any model, extend with co...\
  Open WebUI
- [link](https://www.youtube.com/watch?v=nQCOTzS5oU0)\
  I'm changing how I use AI (Open WebUI + LiteLLM)\
  Users can access various AI models like ChatGPT, Claude, Gemini, and Grok from a single self-hosted interface without paying for i...\
  24:28\
  YouTube·NetworkChuck
- [link](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk)\
  how to host Open WebUI locally (self-hosted AI Hub)\
  The video focuses on the process of locally hosting Open WebUI. This involves installing Open WebUI, a self-hosted open-source int...\
  3:50\
  YouTube·NetworkChuck (2)

Show all

can i install it via pnpm -g

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, you cannot install Open WebUI as a global package via </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">pnpm -g install open-webui</code></strong></mark>. \[[1](https://github.com/open-webui/open-webui/discussions/11007), [2](https://docs.volta.sh/advanced/pnpm)]

While Open WebUI does use Node.js and JavaScript to build its frontend user interface, it is fundamentally a **hybrid application** that relies heavily on a Python-based backend (FastAPI) to handle AI model streaming, databases, and heavy RAG workloads. Because a global node package manager cannot install or manage these complex Python dependencies, Open WebUI is not distributed as an npm/pnpm registry package. \[[1](https://docs.openwebui.com/getting-started/advanced-topics/development/), [2](https://medium.com/@sachinchauhanpy/speed-up-node-js-and-react-projects-with-pnpm-the-fastest-javascript-package-manager-4a3450409dd8), [3](https://medium.com/@nipunasan/how-to-share-a-common-node-modules-folder-to-your-node-projects-using-pnpm-55a3270a786f), [4](https://medium.com/@quick%5Fbrown%5Ffox%5F7/migrating-from-npm-to-pnpm-the-real-world-wins-af0ef21852a3)]

If you are a developer looking to use `pnpm` to save disk space and compile Open WebUI locally, you can use it to build the **frontend assets manually** alongside a Python environment: \[[1](https://github.com/open-webui/open-webui/discussions/11007), [2](https://docs.openwebui.com/getting-started/advanced-topics/development/)]

Alternative: Building from Source with `pnpm` \[[1](https://originjs.org/en/installation.html)]

1. **Clone and Enter the Repo**:\
   bash

<!---->

```
git clone https://github.com/open-webui/open-webui.git
cd open-webui
```

Use code with caution.
2\. **Build the Frontend using `pnpm`**:\
bash

```
# Copy environment defaults
cp -RPp .env.example .env

# Use pnpm to manage dependencies locally
pnpm install
pnpm run build
```

Use code with caution.
3\. **Run the Python Backend**:\
bash

```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt -U
sh dev.sh
```

Use code with caution.\
\[[1](https://github.com/open-webui/open-webui/discussions/11007), [2](https://docs.openwebui.com/getting-started/advanced-topics/development/), [3](https://dev.to/tobidelly/a-step-by-step-guide-to-debugging-and-setting-up-a-turborepo-driven-monorepo-with-nextjs-and-pnpm-3l1l), [4](https://www.grusingh.com/post/pnpm-node-package-manager/)]

Would you like to proceed with setting up this **local development build**, or should we look at making a **custom command-line alias** for a Docker deployment instead?

- [link](https://github.com/open-webui/open-webui/discussions/11007)\
  What about supporting 'pnpm install' to replace 'npm install'?\
  Feb 28, 2025 — on Feb 28, 2025. Original comment in English - Translate to English. The current tutorial only provided setup steps with npm insta...\
  GitHub
- [link](https://docs.openwebui.com/getting-started/advanced-topics/development/)\
  Developing Open WebUI\
  Separate your data. Never share your database or data directory between dev and production. Dev builds may include database migrat...\
  Open WebUI Docs
- [link](https://docs.volta.sh/advanced/pnpm)\
  pnpm Support | Volta\
  Global Installations Currently, global installations (e.g. pnpm install -g ) are not supported and will result in an error.\
  \
  Volta documentation

Show all

i want to use a package manager. i use ubuntu.

**Yes, you can install Open WebUI using Ubuntu's package managers**. \[[1](https://snapcraft.io/install/open-webui/ubuntu), [2](https://sonusahani.com/blogs/open-webui-desktop)]

Because it requires both frontend and backend dependencies, you cannot use Node managers like `pnpm`, but you can use native Ubuntu Linux package managers like **Snap** or **APT/dpkg**. \[[1](https://github.com/open-webui/open-webui/discussions/7496), [2](https://sonusahani.com/blogs/open-webui-desktop), [3](https://snapcraft.io/install/open-webui/ubuntu)]

***

Option 1: Install via Snap (Easiest & Auto-Updates)

Open WebUI is officially published on the [Snap Store](https://snapcraft.io/open-webui). Snap packages include all necessary Python and Node runtimes inside a sandboxed environment, making it a single-command install. \[[1](https://snapcraft.io/install/open-webui/ubuntu), [2](https://snapcraft.io/open-webui)]

1. **Install Open WebUI**:\
   bash

<!---->

```
sudo snap install open-webui
```

Use code with caution.
2\. **Access the WebUI**:\
Open your browser and navigate to `http://localhost:8080`. \[[1](https://maple-street.net/host-your-own-local-ai-server-ollama-open-ui-ubuntu-22-04/)]

***

Option 2: Install the Native Desktop App via APT / dpkg

If you are running an Ubuntu desktop environment and prefer a local, system-native app window over a browser tab, you can use Ubuntu's native package management tools (`dpkg` and `apt`): \[[1](https://www.youtube.com/watch?v=kV7vtyFHRao\&t=24), [2](https://sonusahani.com/blogs/open-webui-desktop)]

1. **Download the official Debian/Ubuntu package**:\
   bash

<!---->

```
curl -L -o open-webui-desktop_amd64.deb https://github.com/open-webui/open-webui-desktop/releases/latest/download/open-webui-desktop_amd64.deb
```

Use code with caution.
2\. **Install using dpkg and resolve dependencies with apt**:\
bash

```
sudo dpkg -i open-webui-desktop_amd64.deb || sudo apt -f install -y
```

Use code with caution.
3\. **Launch the application**:\
bash

```
open-webui-desktop
```

Use code with caution.\
\[[1](https://sonusahani.com/blogs/open-webui-desktop)]

***

Option 3: Install via Python's `pipx` (Isolated CLI Tool) \[[1](https://sonusahani.com/blogs/open-webui-desktop)]

If you want to manage it purely via terminal as a global CLI command without messing up your system's global Python packages, use `pipx` (Ubuntu's preferred package runner for Python applications):

1. **Install pipx via APT**:\
   bash

<!---->

```
sudo apt update
sudo apt install pipx -y
pipx ensurepath
```

Use code with caution.
2\. **Restart your terminal** to apply the path changes.
3\. **Install Open WebUI globally**:\
bash

```
pipx install open-webui
```

Use code with caution.
4\. **Run the server anytime**:\
bash

```
open-webui serve
```

Use code with caution.\
\[[1](https://docs.openwebui.com/getting-started/), [2](https://docs.openwebui.com/getting-started/quick-start/)]

Which package layout fits your current setup better: the background **Snap service**, the **standalone desktop app**, or a terminal-based **pipx installation**? \[[1](https://snapcraft.io/install/open-webui/ubuntu), [2](https://sonusahani.com/blogs/open-webui-desktop)]

- [link](https://www.youtube.com/watch?v=kV7vtyFHRao\&t=24)\
  Open WebUI Desktop App - Install on Linux, Windows & Mac\
  Apr 23, 2026 — almost every day on this channel. people have been running it via docker or direct install. and if you are the regular viewer of t...\
  8m\
  YouTube·Fahd Mirza
- [link](https://sonusahani.com/blogs/open-webui-desktop)\
  How to Install Open WebUI Desktop App on Linux, Windows ...\
  Apr 24, 2026 — Linux install. Download the Debian or Ubuntu package, then install it with your package manager. This is a fast path and works on ...\
  Sonusahani.com
- [link](https://github.com/open-webui/open-webui/discussions/7496)\
  Error pip install open-webui #7496 - GitHub\
  Mar 2, 2025 — on Mar 2, 2025. Original comment in English - Translate to English. pip open-webui require python 3.11, for install with python 3.\
  GitHub

Show all

flatpak

**Yes, you can install Open WebUI using Flatpak on Ubuntu**. \[[1](https://www.facebook.com/howtogeek/posts/is-it-possible-to-install-flatpak-packages-on-ubuntu-yes-it-is-heres-how-and-why/1012658300897177/), [2](https://github.com/open-webui/desktop/issues/41)]

The desktop application variant of Open WebUI has been packaged and published to [Flathub](https://flathub.org/en/apps/com.openwebui.open-webui). This packages the entire application—frontend, backend, and all dependencies—into a secure sandbox container. \[[1](https://github.com/open-webui/desktop/issues/41), [2](https://flathub.org/en/apps/com.openwebui.open-webui), [3](https://snapcraft.io/install/open-webui/ubuntu)]

***

Step 1: Set Up Flatpak on Ubuntu

Unlike Snap, Flatpak is not enabled on Ubuntu by default. If you haven't configured Flatpak and the Flathub repository yet, run the following setup commands: \[[1](https://askubuntu.com/questions/1244198/install-flatpak-apps-on-ubuntu-20-04)]

1. **Install Flatpak**:\
   bash

<!---->

```
sudo apt update
sudo apt install flatpak -y
```

Use code with caution.
2\. **Add the Flathub Repository**:\
bash

```
flatpak remote-add --if-not-exists flathub https://flathub.org
```

Use code with caution.
3\. **Restart your system** to ensure the desktop environment properly registers Flatpak application shortcuts. \[[1](https://askubuntu.com/questions/1244198/install-flatpak-apps-on-ubuntu-20-04), [2](https://developer.fedoraproject.org/deployment/flatpak/flatpak-usage.html)]

***

Step 2: Install Open WebUI

Once your system supports Flatpaks, install Open WebUI directly from Flathub using your terminal:

bash

```
flatpak install flathub com.openwebui.open-webui -y
```

Use code with caution.

***

Step 3: Run the Application

You can launch Open WebUI just like any other desktop app through your Ubuntu application menu (dash), or trigger it manually from your terminal using: \[[1](https://pypi.org/project/open-webui/)]

bash

```
flatpak run com.openwebui.open-webui
```

Use code with caution.

_Note: Because this version is the **Desktop App bundle**, it runs as a native window without requiring you to open a web browser. Make sure your backend runner (like an Ollama instance) is already up and active on your system so the app can detect your local models!_ \[[1](https://www.youtube.com/watch?v=kV7vtyFHRao\&t=24)]

Do you need help **sharing local files** with the sandboxed Flatpak, or are you running into **GPU acceleration issues** within the container? \[[1](https://www.youtube.com/watch?v=kV7vtyFHRao\&t=24)]

- [link](https://www.youtube.com/watch?v=kV7vtyFHRao\&t=24)\
  Open WebUI Desktop App - Install on Linux, Windows & Mac\
  Apr 23, 2026 — almost every day on this channel. people have been running it via docker or direct install. and if you are the regular viewer of t...\
  8m\
  YouTube·Fahd Mirza
- [link](https://askubuntu.com/questions/1244198/install-flatpak-apps-on-ubuntu-20-04)\
  Install Flatpak apps on Ubuntu 20.04\
  May 27, 2020 — 2 Answers. ... You can install Flatpak support using command line and install an available application from its main public reposi...\
  Ask Ubuntu
- [link](https://github.com/open-webui/desktop/issues/41)\
  Provide a Flatpak for Linux installation - open-webui/desktop\
  Jul 31, 2025 — Description. linuxkernel94. opened on Jul 31, 2025. The application is currently distributed via tar. gz. Providing a Flatpak pack...\
  GitHub

Show all

what about the docker option

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">The Docker option is highly recommended on Ubuntu because it keeps your system clean while making updates trivial</span></strong></mark>.

When running on Ubuntu, Docker isolates all of Open WebUI's complex Python requirements and database engines inside a lightweight container.

***

Step 1: Install Docker on Ubuntu

If you do not have Docker installed yet, the easiest way to install the official Docker Engine via APT is by running:

bash

```
# Update package list and install prerequisites
sudo apt update && sudo apt install -y ca-certificates curl

# Add Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://docker.com -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to APT sources
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://docker.com \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Use code with caution.

***

Step 2: Choose Your Deployment Command

Select **one** of the two following setup options based on how your backend AI engines are running:

Option A: If Ollama is running on the _same_ Ubuntu machine

Use this command so the Docker container can communicate back with your host machine's Ollama service:

bash

```
sudo docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

Use code with caution.

Option B: If you only use Cloud APIs (OpenAI, Anthropic) or a Remote Server

If you don't use local Ollama, you don't need the local host bridging argument:

bash

```
sudo docker run -d -p 3000:8080 -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

Use code with caution.

***

Step 3: Access and Manage

- **Access the UI**: Open your web browser and navigate to `http://localhost:3000`.

- **Stop the container**: `sudo docker stop open-webui`

- **Start it again**: `sudo docker start open-webui`

- **Update to the latest version**:\
  bash

<!---->

```
sudo docker stop open-webui && sudo docker rm open-webui
sudo docker pull ghcr.io/open-webui/open-webui:main
# Re-run your chosen startup command from Step 2 (your data will persist in the volume)
```

Use code with caution.

Are you planning to run **Docker Compose** to manage multiple services together, or do you need help enabling **GPU support** within the container?

well, is there any other options? i want it to be web ui, not an electron/tauri wrapper. and i think my laptop is already quite compatible, no need to dl gbs of docker images.

**The best option that fits your needs perfectly is installing Open WebUI via `pip` into a localized Python environment \[1, 2].**

This method ensures you get a true browser-based **Web UI**, completely skips heavy desktop wrappers, utilizes your laptop's native hardware capabilities, and downloads only around **200-300 MB** of packages instead of gigabytes of Docker layers \[2, 3].

***

Step 1: Install Python Prerequisites

Ubuntu usually includes Python, but you need the development packages and environment tools. Open your terminal and run:

bash

```
sudo apt update
sudo apt install python3-pip python3-venv python3-dev -y
```

Use code with caution.

Step 2: Create an Isolated Environment

Creating a virtual environment ensures Open WebUI's Python packages do not conflict with your Ubuntu system files.

bash

```
# Create a folder for Open WebUI and enter it
mkdir ~/open-webui && cd ~/open-webui

# Create the virtual environment
python3 -m venv venv

# Activate the environment
source venv/bin/activate
```

Use code with caution.

_(Note: You will see `(venv)` appear at the beginning of your terminal prompt, indicating it is active)._

Step 3: Install Open WebUI via Pip

With your isolated environment active, download and install Open WebUI directly from the Python Package Index (PyPI):

bash

```
pip install --upgrade pip
pip install open-webui
```

Use code with caution.

Step 4: Launch and Access

To start your lightweight web server, execute:

bash

```
open-webui serve
```

Use code with caution.

Once it finishes initializing, open your preferred web browser and go to:

- **`http://localhost:8080`**

***

Managing the App in the Future

- **To stop the server**: Press `Ctrl + C` in your terminal window.

- **To start it again later**:\
  bash

<!---->

```
cd ~/open-webui
source venv/bin/activate
open-webui serve
```

Use code with caution.

- **To update it**: Activate your environment and run `pip install --upgrade open-webui`.

Would you like to turn this setup into a **systemd background service** so it boots automatically with Ubuntu without keeping a terminal open?

will open webui appear as a global cli command after pip install open-webui. how to serve a port a like.

Will it appear as a global CLI command?

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>No, it will not be globally accessible by default.</strong></mark> Because you installed it inside a Python virtual environment (`venv`), the `open-webui` command is safely isolated.

- It will **only** work when you have explicitly activated the environment using `source venv/bin/activate`.
- If you try to run `open-webui` in a fresh terminal without activating the venv, Ubuntu will report a `command not found` error.

If you absolutely want a global command without activating anything, you can create a permanent shortcut (symlink) in your user binary folder:

bash

```
ln -s ~/open-webui/venv/bin/open-webui ~/.local/bin/open-webui
```

Use code with caution.

_(Note: Ensure `~/.local/bin` is in your Ubuntu system `$PATH` for this to work globally)._

***

How to change the port and host

By default, the application serves on port `8080` and binds to `localhost` (127.0.0.1). You can easily change this by passing **Environment Variables** right before the execution command.

1\. Change the Port (e.g., to port 5000)

bash

```
PORT=5000 open-webui serve
```

Use code with caution.

_Access it via:_ `http://localhost:5000`

2\. Allow other devices on your local network to access it

By default, you cannot access the UI from your phone or another laptop. To expose it to your local Wi-Fi/network, change the host binding to `0.0.0.0`:

bash

```
HOST=0.0.0.0 open-webui serve
```

Use code with caution.

_Access it via:_

3\. Change both Port and Host together

bash

```
HOST=0.0.0.0 PORT=9000 open-webui serve
```

Use code with caution.

Would you like to know how to find your **laptop's local IP address** to connect your phone, or should we set up an **alias** so you don't have to type these variables every time?

i want to install it globally like pnpm -g. pip works. pipx stuck at installing forever.

**You can mimic a global `pnpm -g` installation perfectly by using the new `uvx` package runner or configuring `pip` to install directly to your user path.**

The reason `pipx` hangs forever on [Open WebUI](https://docs.openwebui.com/) is a known issue: Open WebUI downloads hundreds of megabytes of heavy machine learning and vector database packages (like `torch` and `chromadb`), causing `pipx`'s background download verification to hit timeouts. \[[1](https://www.reddit.com/r/OpenWebUI/comments/1l4w23k/installation%5Ftaking%5Flong/), [2](https://github.com/open-webui/open-webui/discussions/16196)]

Here are the two best ways to achieve a global installation without using Docker, containers, or a tedious manual `venv` activation step.

***

Option 1: Use `uvx` (The Best Alternative to `pnpm -g`)

Astral's `uv` is a blazingly fast, modern package runner for Python (written in Rust). It acts exactly like `npx` or `pnpm dlx`. It automatically creates a managed global cache and runs the tool seamlessly in a single command, without ever getting stuck. \[[1](https://docs.openwebui.com/)]

1. **Install uv on Ubuntu**:\
   bash

<!---->

```
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Use code with caution.
2\. **Restart your terminal** to register the `uv` commands.
3\. **Run Open WebUI anywhere globally**:\
bash

```
uvx --python 3.11 open-webui@latest serve
```

Use code with caution.\
_This downloads Open WebUI natively into a dedicated background user cache and runs it instantly as a global tool, exactly how `pnpm -g` behaves._ \[[1](https://docs.openwebui.com/)]

***

Option 2: Force standard `pip` to install globally (`--break-system-packages`)

On modern Ubuntu systems, running `pip install` globally is blocked by a safety standard (PEP 668) to prevent corrupting system dependencies. However, you can explicitly bypass this warning and force it to install directly into your user's global path. \[[1](https://github.com/open-webui/open-webui/issues/7495)]

1. **Install system Python tools**:\
   bash

<!---->

```
sudo apt update && sudo apt install python3-pip python3-dev -y
```

Use code with caution.
2\. **Install globally for your user profile**:\
bash

```
pip install open-webui --break-system-packages
```

Use code with caution.
3\. **Launch it globally from any terminal directory**:\
bash

```
open-webui serve
```

Use code with caution.\
\[[1](https://pypi.org/project/open-webui/)]

_(Note: If Ubuntu tells you `command not found` after step 2, your profile's global folder is missing from your system path. Fix it quickly by running `export PATH=$PATH:~/.local/bin` or appending it to your `~/.bashrc` file)._ \[[1](https://www.reddit.com/r/OpenWebUI/comments/1hdeok6/pip%5Finstall%5Fproblems%5Fopenwebui%5Fis%5Fnot%5Frecognized/)]

***

Summary Table

| Method \[[1](https://docs.openwebui.com/), [2](https://github.com/open-webui/open-webui/issues/7495)] | Global CLI? | Download Size | Prone to Sticking?    | Cleanliness                |
| ----------------------------------------------------------------------------------------------------- | ----------- | ------------- | --------------------- | -------------------------- |
| **`uvx` (Option 1)**                                                                                  | **Yes**     | ~250MB        | No (Very Fast)        | Extremely Clean            |
| **`pip --break-system...` (Option 2)**                                                                | **Yes**     | ~250MB        | No                    | Moderate (Shared packages) |
| **`pipx` (Your previous attempt)**                                                                    | **Yes**     | ~250MB        | **Yes (Fails often)** | Isolated                   |

Which path would you prefer to try next—setting up the **`uvx` runner** or bypassing the system blocker with **`pip`**?

- [link](https://docs.openwebui.com/)\
  Home / Open WebUI\
  docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restar...\
  Open WebUI Docs
- [link](https://www.reddit.com/r/OpenWebUI/comments/1l4w23k/installation%5Ftaking%5Flong/)\
  Installation taking long? : r/OpenWebUI - Reddit\
  Jun 6, 2025 — I fixed it. Try using a VPN and download the data. Since I was downloading it from Asia Pacific, it was having issues sending over...\
  Reddit·r/OpenWebUI
- [link](https://github.com/open-webui/open-webui/discussions/16196)\
  issue: stuck installing #16196 - GitHub\
  Jul 31, 2025 — I have clearly listed every relevant configuration, custom setting, environment variable, and command-line option that influences ...\
  GitHub

Show all

i already have uv. how to install globally.

Since you already have `uv` installed, you can install [Open WebUI](https://docs.openwebui.com/) globally as a standalone CLI tool using the native **`uv tool`** command. \[[1](https://stackoverflow.com/questions/78726750/how-can-i-install-packages-using-uv-pip-install-without-creating-a-virtual-env)]

This functions exactly like `pnpm -g` or `npm install -g`, but it isolates the application within a clean, managed global folder inside your home profile so it never conflicts with Ubuntu's core system files. \[[1](https://stackoverflow.com/questions/78726750/how-can-i-install-packages-using-uv-pip-install-without-creating-a-virtual-env), [2](https://fortuitous.com/guides/uv-global-guide/)]

Step 1: Install Open WebUI Globally with `uv` \[[1](https://github.com/open-webui/open-webui/discussions/13301)]

Run the following command to download Open WebUI using Python 3.11 (the most stable runtime version for Open WebUI dependencies): \[[1](https://www.reddit.com/r/OpenWebUI/comments/1izq7l1/mac%5F1531%5Fmanual%5Finstall%5Fusing%5Fuv%5Fwhere%5Fare%5Fmy/), [2](https://www.tauceti.blog/posts/turn-your-computer-into-ai-machine-install-open-webui/), [3](https://github.com/open-webui/open-webui/discussions/13301)]

bash

```
uv tool install --python 3.11 open-webui
```

Use code with caution.

_(Because `uv` is written in Rust and utilizes parallel streams, it installs Open WebUI's massive machine learning layers in a matter of seconds, bypassing the stalling issue you experienced with `pipx`)._ \[[1](https://www.youtube.com/watch?v=QxLXhE1fxc4)]

***

Step 2: Use the Global Command with Port/Host Variables

You can now invoke `open-webui` directly from any directory in your terminal without activating environments. Pass your network arguments directly ahead of the command: \[[1](https://www.reddit.com/r/Python/comments/1ex6n9k/uv%5Funified%5Fpython%5Fpackaging/)]

To run on a custom port (e.g., `3000`):

bash

```
PORT=3000 open-webui serve
```

Use code with caution.

_Access it at:_ `http://localhost:3000`

To expose it to your home Wi-Fi network:

bash

```
HOST=0.0.0.0 PORT=8080 open-webui serve
```

Use code with caution.

_Access it at:_

***

Step 3: Managing and Updating (The `uv` advantage)

Managing your global tool via `uv` is straightforward and uses standard, predictable flags: \[[1](https://www.reddit.com/r/Python/comments/1ex6n9k/uv%5Funified%5Fpython%5Fpackaging/)]

- **To see where it is installed**: `uv tool list`
- **To update to the newest version**: `uv tool upgrade open-webui`
- **To uninstall it completely**: `uv tool uninstall open-webui`

Would you like to write a short shell **alias** into your `~/.bashrc` file so you can type a single keyword like `ai-serve` to fire it up on your preferred port? \[[1](https://www.youtube.com/watch?v=wdHRud-e9vY)]

- [link](https://www.reddit.com/r/OpenWebUI/comments/1izq7l1/mac%5F1531%5Fmanual%5Finstall%5Fusing%5Fuv%5Fwhere%5Fare%5Fmy/)\
  Manual Install using uv - where are my files/folders? - Reddit\
  Feb 28, 2025 — Using uvx is the issue because while that puts the persistent data in the ~/.open-webui folder, it stores all of the other files d...\
  Reddit·r/OpenWebUI
- [link](https://www.tauceti.blog/posts/turn-your-computer-into-ai-machine-install-open-webui/)\
  Turn your computer into an AI machine - Install Open WebUI\
  Nov 26, 2024 — As of writing this blog post Open WebUI runs best with Python 3.11. That avoids compatibility issues. To install the venv and have...\
  www.tauceti.blog
- [link](https://www.youtube.com/watch?v=wdHRud-e9vY)\
  How to use Open WebUI with Deepseek R1 without ...\
  Jan 30, 2025 — hello welcome to the deepseek tutorial series in uh in this video I'm going to show you how to uh start open web UI with deepc R1 ...\
  14:52\
  YouTube·Open Geospatial Solutions

Show all

will uv tool install --python 3.11 open-webui make the global command available

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, running </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">uv tool install --python 3.11 open-webui</code> will automatically create a global, system-wide binary executable.</strong></mark> You will be able to type `open-webui` directly from any folder in your terminal, exactly like a package installed via `pnpm -g`.

The only requirement is that `uv`'s global binary folder must be present in your Ubuntu system's environment pathway.

Verify Your System Path

You can easily confirm if the path is configured correctly. Run this command:

bash

```
uv tool update-shell
```

Use code with caution.

- **If it says paths are already up to date:** You are fully set. The global `open-webui` command will work immediately after installation.
- **If it modifies your shell configuration:** Simply close your terminal window and open a fresh one to apply the updates.

What Happens Behind the Scenes

When you execute the install command, `uv` performs two fast operations:

1. It creates an isolated environment under `~/.local/share/uv/tools/open-webui` to hold the heavy backend components.
2. It drops a single, fast symlink executable directly into `~/.local/bin/open-webui`.

Once installed, you can immediately fire up your lightweight browser server using your custom variables:

bash

```
PORT=3000 open-webui serve
```

Use code with caution.

Would you like to verify that your **Ollama or external AI API keys** are properly picked up by this new global command structure?

can i omit --python 3.11

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can omit </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">--python 3.11</code> entirely</strong></mark>**.** \[[1](https://docs.astral.sh/uv/guides/tools/), [2](https://github.com/open-webui/open-webui/discussions/9145)]

If you just run `uv tool install open-webui`, `uv` will automatically find the default or newest Python version already installed on your Ubuntu machine and use that to package the app. \[[1](https://docs.astral.sh/uv/guides/install-python/), [2](https://docs.astral.sh/uv/guides/tools/), [3](https://github.com/open-webui/open-webui/issues/20117)]

However, you should keep **two quick scenarios** in mind before omitting it:

Scenario 1: Your laptop defaults to Python 3.11 or 3.12 (Safe to Omit)

If you run `python3 --version` in your terminal and it outputs anything between `3.11.x` and `3.12.x`, go right ahead and drop the flag. `uv` will pick it up, run seamlessly, and map the global binary without a hitch. \[[1](https://docs.astral.sh/uv/guides/tools/), [2](https://github.com/open-webui/open-webui/issues/16444)]

Scenario 2: Your laptop runs the latest Ubuntu with Python 3.13+ (Do NOT Omit)

Open WebUI relies heavily on core machine learning libraries (like PyTorch and ChromaDB) that can take several months to officially support brand-new, major Python releases. \[[1](https://github.com/open-webui/open-webui/discussions/2596)]

- If your default system Python is too new, omitting the flag will force `uv` to use that newer version.
- This will usually result in a compilation crash midway through installation because PyTorch won't find a matching version wheels for Python 3.13+. \[[1](https://docs.astral.sh/uv/guides/tools/)]

The Best "Middle Ground" (Completely Hands-Off)

If you want to keep your install command incredibly clean without typing the python flag every single time, you can instruct `uv` to download and manage its own isolated stable Python engine in the background. Just run: \[[1](https://docs.astral.sh/uv/guides/install-python/), [2](https://medium.com/@nimritakoul01/uv-package-manager-for-python-f92c5a760a1c)]

bash

```
uv tool install open-webui
```

Use code with caution.

_If it errors out due to your default system Python being too new, simply fall back to the explicit version command once:_

bash

```
uv tool install --python 3.11 open-webui
```

Use code with caution.

Once installed via either path, your global layout is completely set up! Would you like to check if your system needs any specific environment variables configured to detect your **local Ollama instance** over the network? \[[1](https://marklwatson.substack.com/p/using-both-a-16b-macbook-air-and)]

- [link](https://github.com/open-webui/open-webui/discussions/2596)\
  Package 'open-webui' requires a different Python: 3.12.3 not ...\
  Feb 7, 2025 — ERROR: Package 'open-webui' requires a different Python: 3.12.3 not in '<3.12.0a1,>=3.11' Beta Was this translation helpful? 7. Re...\
  GitHub
- [link](https://github.com/open-webui/open-webui/issues/16444)\
  issue: bug with pip install open-webui #16444 - GitHub\
  Aug 10, 2025 — ... of Python you have installed. If you don't have Python 3.11 (or 3.12), please install it. The recommended method is as follows...\
  github.com
- [link](https://docs.astral.sh/uv/guides/install-python/)\
  Installing and managing Python | uv - Astral Docs\
  If Python is already installed on your system, uv will detect and use it without configuration. However, uv can also install and m...\
  Astral Docs

Show all

seems working. but why is it dl such a bunch of stuff. i do not need these features now. ~ % uv tool install open-webui

Resolved 281 packages in 43.04s\
× Failed to download \`multidict==6.7.1\`\
├─▶ Request failed after 3 retries in 126.9s\
├─▶ Failed to fetch:\
│ \`https://files.pythonhosted.org/packages/f3/8d/5e5be3ced1d12966fefb5c4ea3b2a5b480afcea36406559442c6e31d4a48/multidict-6.7.1-cp312-cp312-manylinux2014\_x86\_64.manylinux\_2\_17\_x86\_64.manylinux\_2\_28\_x86\_64.whl\`\
├─▶ error sending request for url\
│ (https://files.pythonhosted.org/packages/f3/8d/5e5be3ced1d12966fefb5c4ea3b2a5b480afcea36406559442c6e31d4a48/multidict-6.7.1-cp312-cp312-manylinux2014\_x86\_64.manylinux\_2\_17\_x86\_64.manylinux\_2\_28\_x86\_64.whl)\
╰─▶ operation timed out\
help: \`multidict\` (v6.7.1) was included because \`open-webui\` (v0.9.5) depends on \`aiohttp\` (v3.13.5) which depends on \`multidict\`

Why is it downloading so much stuff?

Open WebUI is **bundled heavily by design**. Even if you only intend to use it as a simple chat interface for Ollama, it forces the installation of roughly **280+ Python packages**. \[[1](https://github.com/open-webui/open-webui/discussions/14259)]

This massive footprint exists because Open WebUI includes built-in, out-of-the-box support for deep server-side features like:

- **Local vector databases** (`chromadb`) for document chatting.
- **Machine learning runtimes** (`pytorch`) to run text-embedding models directly on your laptop CPU/GPU.
- **Enterprise cloud SDKs** (Google GenAI, Azure, AWS) and data scrapers. \[[1](https://github.com/open-webui/open-webui/discussions/14259), [2](https://github.com/open-webui/open-webui/discussions/14457), [3](https://github.com/openvinotoolkit/model%5Fserver/blob/main/demos/integration%5Fwith%5FOpenWebUI/README.md), [4](https://github.com/open-webui/open-webui/issues/20177)]

Unfortunately, the developers do not currently offer a "lightweight" or "core-only" package version; you have to pull the entire kitchen sink to make the application run. \[[1](https://github.com/open-webui/open-webui/discussions/14259), [2](https://github.com/open-webui/open-webui/discussions/7496)]

***

How to fix the `multidict` timeout error

The `operation timed out` error happens because your network connection dropped or choked while trying to pull Open WebUI's massive chain of dependencies all at once.

Since you already use `uv`, you can fix this timeout immediately by telling `uv` to use **more concurrent download connections** and providing an **extended timeout window**.

Run this optimized installation command in your terminal:

bash

```
UV_HTTP_TIMEOUT=300 uv tool install --concurrent-downloads 10 open-webui
```

Use code with caution.

- **`UV_HTTP_TIMEOUT=300`**: Bumps the connection patience limit to 5 minutes so packages like `multidict` won't randomly fail.
- **`--concurrent-downloads 10`**: Spreads the download stream across multiple parallel tasks to maximize your network speed. \[[1](https://www.youtube.com/watch?v=wdHRud-e9vY)]

Once this finishes downloading, the global `open-webui` command will be permanently available on your laptop, and you can spin up the web interface without dealing with any heavy Docker storage footprint! \[[1](https://www.reddit.com/r/ollama/comments/1igepcr/install%5Fand%5Frun%5Fopenwebui%5Fwithout%5Fdocker/)]

- [link](https://github.com/open-webui/open-webui/issues/20177)\
  issue: google-generativeai package is in deprecation and cause uv ...\
  Dec 25, 2025 — Additional Information. After a quick investigation, I found that the error is caused by a conflict in the protobuf package requir...\
  GitHub
- [link](https://github.com/open-webui/open-webui/discussions/14457)\
  issue: \[Timeout] Large file processing hangs and never finishes KB ...\
  May 28, 2025 — Steps to Reproduce Paste the snippet below into issue\_demo.py, filling in WEBUI\_URL, TOKEN and a large FILE\_BINARY. Run python iss...\
  GitHub
- [link](https://www.youtube.com/watch?v=wdHRud-e9vY)\
  How to use Open WebUI with Deepseek R1 without ...\
  Jan 30, 2025 — hello welcome to the deepseek tutorial series in uh in this video I'm going to show you how to uh start open web UI with deepc R1 ...\
  14:52\
  YouTube·Open Geospatial Solutions

Show all

technically is it easy for them to do the progressive disclosure or even give users the option about when to dl

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, technically it is very easy and is standard practice in Python development.</span></strong></mark>

The Python packaging ecosystem explicitly supports this through a feature called **Optional Dependencies** (also known as "Extras").

How it could easily work (The Technical Setup)

In Python, developers define their project configuration in a file called `pyproject.toml`. Instead of putting heavy libraries like `chromadb` (vector databases) or `torch` (machine learning engines) under the mandatory `dependencies` list, Open WebUI could move them to an `[project.optional-dependencies]` block like this:

toml

```
[project.dependencies]
# Core web server only
fastapi = "^0.100.0"
aiohttp = "^3.10.0"
pydantic = "^2.0"

[project.optional-dependencies]
# Optional features triggered only when requested
rag = ["chromadb", "langchain", "sentence-transformers"]
cloud = ["google-generativeai", "boto3"]
all = ["open-webui[rag]", "open-webui[cloud]"]
```

Use code with caution.

What this would look like for you

If they implemented this progressive disclosure, you would have the option to install _only_ what you need:

1. **Your ideal ultra-lightweight install (Only ~30 packages instead of 280):**\
   bash

<!---->

```
uv tool install open-webui
```

Use code with caution.
2\. **If a user later decides they want to upload PDFs and use RAG features:**\
bash

```
uv tool install open-webui[rag]
```

Use code with caution.

Why don't they do it?

If it is so easy, why does Open WebUI force you to download the kitchen sink? It usually comes down to three non-technical reasons:

- **Support and Bug Triaging:** If everyone has a slightly different installation footprint, troubleshooting user issues becomes a nightmare. An error like `"ModuleNotFoundError: No module named 'chromadb'"` would flood their GitHub issues from users who forgot they didn't install the RAG features.
- **The "It Just Works" Out-of-the-Box Experience:** Open WebUI brands itself as an all-in-one local AI workspace. They prioritize a seamless, zero-configuration setup for non-technical users over saving disk space or network bandwidth for power users.
- **Dynamic Feature Loading Complexity:** While changing the _installer_ config is easy, writing the actual Python code to gracefully handle missing packages requires a lot of extra conditional logic (e.g., hiding a button in the UI and showing an instruction modal saying _"Please run pip install open-webui\[rag] to unlock this button"_).

Would you like to see how to check **which features are consuming the most space** inside your newly installed `uv` tool directory, or are you ready to fire up the server?

how easy is it to make it update itself, for example, when user clicks a button on a message, they would install the needed pkg automatically

**Technically, implementing a "click to download" feature at runtime is incredibly easy to code, but it is highly complex and problematic to maintain securely.**

In Python, downloading and installing a package dynamically from a backend server while the application is already running can be written in just a few lines of code. However, doing so introduces major engineering hurdles regarding user permission, threading, and security. \[[1](https://stackoverflow.com/questions/12332975/how-can-i-install-a-python-module-with-pip-programmatically-from-my-code), [2](https://www.activestate.com/resources/quick-reads/how-to-install-python-packages-using-a-script/)]

***

How easy is it to code? (The Technical Mechanism)

From a pure code perspective, it takes very little effort. If [Open WebUI](https://docs.openwebui.com/) wanted a button that installs `chromadb` only when a user uploads a PDF, the backend could trigger a Python subprocess to invoke the active installer: \[[1](https://stackoverflow.com/questions/12332975/how-can-i-install-a-python-module-with-pip-programmatically-from-my-code), [2](https://docs.openwebui.com/getting-started/essentials/)]

python

```
import subprocess
import sys
import importlib

def install_on_demand(package_name: str):
    try:
        # Check if it's already there
        importlib.import_module(package_name)
    except ImportError:
        # Programmatically run the environment's pip/uv installer
        subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])
        # Force Python to reload the paths so it can use the new package
        importlib.invalidate_caches()
```

Use code with caution.

***

Why this approach breaks down in practice

While the snippet above is easy to write, transitioning it into a reliable web feature creates four massive problems: \[[1](https://stackoverflow.com/questions/12332975/how-can-i-install-a-python-module-with-pip-programmatically-from-my-code), [2](https://www.activestate.com/resources/quick-reads/how-to-install-python-packages-using-a-script/)]

1\. The Web Server Must Restart (The Runtime Trap)

Python cannot safely swap out massive core frameworks like PyTorch or vector databases while a web server is actively handling live API requests in memory.

- To initialize the newly downloaded package, the server backend must fully restart.
- If a regular user clicks "Enable Document Chat," it could crash or drop the connection for _every other user_ currently chatting on that server.

2\. File and Permission Blockers

Open WebUI is heavily deployed using Docker containers.

- By design, secure production Docker containers are kept **read-only** to prevent hacking.
- If Open WebUI tries to run `pip install` inside a secure container at runtime, the container will instantly throw a `Permission Denied` error because it does not have rights to modify its own system directories.

3\. Breaking the "Air-Gapped" Security Model

Many companies and privacy enthusiasts run Open WebUI on local networks completely disconnected from the open internet (air-gapped) specifically so their private data never leaks. If features are hidden behind a button that _requires_ an active internet download connection to PyPI, the interface breaks entirely for offline users.

4\. The Terrible Web User Experience (UX)

If you click a button to turn on a feature, you expect it to activate in milliseconds.

- Downloading PyTorch or heavy data science packages takes several minutes, even on fast connections.
- The user would be stuck watching a loading spinner indefinitely, with a high chance of the browser tab hitting a gateway timeout error.

***

The Modern Compromise: Community Plugins

To solve this cleanly, Open WebUI uses a feature called **[Open WebUI Plugins (Tools/Functions)](https://docs.openwebui.com/getting-started/essentials/)**. \[[1](https://docs.openwebui.com/getting-started/essentials/)]

Instead of dynamically modifying the core application package, you can go to their community tab, click "Get" on a custom plugin, and paste it into your interface. If that plugin requires an external dependency, it declares it inline, and the application loads the specific script function dynamically without breaking your main system installation. \[[1](https://docs.openwebui.com/getting-started/essentials/)]

Are you hoping to **package your own custom tools** into Open WebUI, or are you ready to test out your global terminal installation?

- [link](https://docs.openwebui.com/getting-started/essentials/)\
  Essentials for Open WebUI\
  Installing plugins​ The Open WebUI Community site hosts the one-click catalog for both Tools and Functions. Pick one, click "Get",\
  Open WebUI Docs
- [link](https://stackoverflow.com/questions/12332975/how-can-i-install-a-python-module-with-pip-programmatically-from-my-code)\
  How can I Install a Python module with Pip programmatically ...\
  Sep 8, 2012 — The officially recommended way to install packages from a script is by calling pip's command-line interface via a subprocess. Most...\
  Stack Overflow
- [link](https://www.activestate.com/resources/quick-reads/how-to-install-python-packages-using-a-script/)\
  How to Install Python Packages using a Script - ActiveState\
  Jan 8, 2020 — How to Run Pip as a SubProcess. When it comes to automating the installation of Python packages, you can create a Python script th...\
  ActiveState



#

open webui

**[Open WebUI](https://openwebui.com/)**<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong> is a highly extensible, self-hosted, user-friendly web interface designed to serve as an all-in-one frontend for Large Language Models (LLMs)</strong></mark>. It functions similarly to a personal ChatGPT or Claude interface but runs entirely under your control. It seamlessly connects with local model runners like Ollama as well as remote cloud APIs like OpenAI, Anthropic, and Gemini. \[[1](https://openwebui.com/), [2](https://sourceforge.net/projects/openwebui.mirror/), [3](https://www.youtube.com/watch?v=nQCOTzS5oU0), [4](https://www.youtube.com/watch?v=ndSwy3slV4s), [5](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk)]

Key Features

- **Multi-Provider Support**: Connects out of the box with Ollama, OpenAI-compatible APIs, and Anthropic endpoints.
- **RAG Integration**: Features a built-in Retrieval-Augmented Generation (RAG) engine to easily chat with uploaded PDFs and documents.
- **Extensible Architecture**: Supports writing custom Python functions, filters, pipelines, and tools to give your models extra capabilities.
- **Granular User Management**: Built-in admin panel allows you to manage user accounts, set access permissions, and monitor token usage.
- **Agentic Tools**: Supports a Model Builder to wrap base models with custom system instructions, persistent memories, and specific toolsets. \[[1](https://docs.openwebui.com/reference/), [2](https://github.com/open-webui/docs), [3](https://docs.openwebui.com/features/), [4](https://openwebui.com/home), [5](https://docs.openwebui.com/features/workspace/models/), [6](https://openwebui.com/), [7](https://sourceforge.net/projects/openwebui.mirror/)]

How to Install

Depending on your comfort level with technology, you can deploy Open WebUI using three main methods detailed on the [Open WebUI GitHub Repository](https://github.com/open-webui/open-webui): \[[1](https://github.com/open-webui/open-webui), [2](https://www.digitalocean.com/community/tutorials/realtime-audio-translation-using-openai-api-on-open-webui)]

Method 1: The Desktop App (Easiest)

If you want to skip the terminal and servers entirely, you can download the standalone [Open WebUI Desktop client](https://github.com/open-webui/desktop). \[[1](https://github.com/open-webui/desktop)]

1. Go to the Open WebUI Desktop Releases.
2. Download and run the executable for Windows, macOS, or Linux.
3. Open the app to immediately start configuring your connections. \[[1](https://appimage.org/), [2](https://github.com/SUC-DriverOld/MSST-WebUI), [3](https://medium.com/neural-engineer/introduction-to-openwebui-self-hosted-web-interface-for-llm-9dbf7910ab3d), [4](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk), [5](https://github.com/open-webui/desktop)]

Method 2: Via Docker (Recommended for Servers)

For a persistent home server installation, deploy the official container via Docker. Ensure that Ollama or your API endpoint is already running. \[[1](https://www.datacamp.com/blog/open-webui), [2](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk), [3](https://www.youtube.com/watch?v=ndSwy3slV4s)]

If Ollama is running on the **same machine**, execute: \[[1](https://github.com/open-webui/open-webui)]

bash

```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

Use code with caution.

Once the container finishes downloading, navigate to `http://localhost:3000` in your browser to create your initial administrator account. \[[1](https://www.datacamp.com/blog/open-webui)]

Method 3: Via Python pip (Manual)

If you prefer managing the environment directly through Python: \[[1](https://www.youtube.com/watch?v=Qz5WWJ9v-6A)]

1. Install the package via pip: `pip install open-webui`
2. Start the instance using the terminal command: `open-webui serve`
3. Open your browser and navigate to `http://localhost:8080` \[[1](https://github.com/open-webui/open-webui), [2](https://github.com/open-webui/open-webui/discussions/16825), [3](https://github.com/open-webui/open-webui)]

Would you like help **troubleshooting a connection** to Ollama, or are you interested in configuring **custom API keys** for cloud models?

- [link](https://openwebui.com/)\
  Open WebUI: Self-Hosted AI Platform\
  Open WebUI: Self-Hosted AI Platform. Open WebUI. The freedom AI stack. Run AI on your own terms. Connect any model, extend with co...\
  Open WebUI
- [link](https://www.youtube.com/watch?v=nQCOTzS5oU0)\
  I'm changing how I use AI (Open WebUI + LiteLLM)\
  Users can access various AI models like ChatGPT, Claude, Gemini, and Grok from a single self-hosted interface without paying for i...\
  24:28\
  YouTube·NetworkChuck
- [link](https://www.youtube.com/watch?v=JJ%5F0-pAOIEk)\
  how to host Open WebUI locally (self-hosted AI Hub)\
  The video focuses on the process of locally hosting Open WebUI. This involves installing Open WebUI, a self-hosted open-source int...\
  3:50\
  YouTube·NetworkChuck (2)

Show all

github.com

\~ % open-webui serveLoading WEBUI\_SECRET\_KEY from file, not provided as an environment variable.Generating a new secret key and saving it to /home/fira/.webui\_secret\_keyLoading WEBUI\_SECRET\_KEY from /home/fira/.webui\_secret\_keyINFO \[alembic.runtime.migration] Context impl SQLiteImpl.INFO \[alembic.runtime.migration] Will assume non-transactional DDL.INFO \[alembic.runtime.migration] Running upgrade -> 7e5b5dc7342b, initINFO \[alembic.runtime.migration] Running upgrade 7e5b5dc7342b -> ca81bd47c050, Add config tableINFO \[alembic.runtime.migration] Running upgrade ca81bd47c050 -> c0fbf31ca0db, Update file tableINFO \[alembic.runtime.migration] Running upgrade c0fbf31ca0db -> 6a39f3d8e55c, Add knowledge tableCreating knowledge tableMigrating data from document table to knowledge tableINFO \[alembic.runtime.migration] Running upgrade 6a39f3d8e55c -> 242a2047eae0, Update chat tableConverting 'chat' column to JSONRenaming 'chat' column to 'old\_chat'Adding new 'chat' column of type JSONDropping 'old\_chat' columnINFO \[alembic.runtime.migration] Running upgrade 242a2047eae0 -> 1af9b942657b, Migrate tagsINFO \[alembic.runtime.migration] Running upgrade 1af9b942657b -> 3ab32c4b8f59, Update tagsPrimary Key: {'name': None, 'constrained\_columns': \[]}Unique Constraints: \[{'name': 'uq\_id\_user\_id', 'column\_names': \['id', 'user\_id']}]Indexes: \[{'name': 'tag\_id', 'column\_names': \['id'], 'unique': 1, 'dialect\_options': {}}]Creating new primary key with 'id' and 'user\_id'.Dropping unique constraint: uq\_id\_user\_idDropping unique index: tag\_idINFO \[alembic.runtime.migration] Running upgrade 3ab32c4b8f59 -> c69f45358db4, Add folder tableINFO \[alembic.runtime.migration] Running upgrade c69f45358db4 -> c29facfe716b, Update file table pathINFO \[alembic.runtime.migration] Running upgrade c29facfe716b -> af906e964978, Add feedback tableINFO \[alembic.runtime.migration] Running upgrade af906e964978 -> 4ace53fd72c8, Update folder table and change DateTime to BigInteger for timestamp fieldsINFO \[alembic.runtime.migration] Running upgrade 4ace53fd72c8 -> 922e7a387820, Add group tableINFO \[alembic.runtime.migration] Running upgrade 922e7a387820 -> 57c599a3cb57, Add channel tableINFO \[alembic.runtime.migration] Running upgrade 57c599a3cb57 -> 7826ab40b532, Update file tableINFO \[alembic.runtime.migration] Running upgrade 7826ab40b532 -> 3781e22d8b01, Update message & channel tablesINFO \[alembic.runtime.migration] Running upgrade 3781e22d8b01 -> 9f0c9cd09105, Add note tableINFO \[alembic.runtime.migration] Running upgrade 9f0c9cd09105 -> d31026856c01, Update folder table dataINFO \[alembic.runtime.migration] Running upgrade d31026856c01 -> 018012973d35, Add indexesINFO \[alembic.runtime.migration] Running upgrade 018012973d35 -> 3af16a1c9fb6, update user tableINFO \[alembic.runtime.migration] Running upgrade 3af16a1c9fb6 -> 38d63c18f30f, Add oauth\_session tableINFO \[alembic.runtime.migration] Running upgrade 38d63c18f30f -> a5c220713937, Add reply\_to\_id column to messageINFO \[alembic.runtime.migration] Running upgrade a5c220713937 -> 37f288994c47, add\_group\_member\_table\[]INFO \[alembic.runtime.migration] Running upgrade 37f288994c47 -> 2f1211949ecc, Update messages and channel member tableINFO \[alembic.runtime.migration] Running upgrade 2f1211949ecc -> b10670c03dd5, Update user tableINFO \[alembic.runtime.migration] Running upgrade b10670c03dd5 -> 90ef40d4714e, Update channel and channel members tableINFO \[alembic.runtime.migration] Running upgrade 90ef40d4714e -> 3e0e00844bb0, Add knowledge\_file tableINFO \[alembic.runtime.migration] Running upgrade 3e0e00844bb0 -> 6283dc0e4d8d, Add channel file tableINFO \[alembic.runtime.migration] Running upgrade 6283dc0e4d8d -> 81cc2ce44d79, Update channel file and knowledge tableINFO \[alembic.runtime.migration] Running upgrade 81cc2ce44d79 -> c440947495f3, Add chat\_file tableINFO \[alembic.runtime.migration] Running upgrade c440947495f3 -> 374d2f66af06, Add prompt history tableINFO \[alembic.runtime.migration] Running upgrade 374d2f66af06 -> 8452d01d26d7, Add chat\_message tableINFO \[alembic.runtime.migration] Running upgrade 8452d01d26d7 -> f1e2d3c4b5a6, Add access\_grant tableINFO \[alembic.runtime.migration] Running upgrade f1e2d3c4b5a6 -> a1b2c3d4e5f6, Add skill tableINFO \[alembic.runtime.migration] Running upgrade a1b2c3d4e5f6 -> b2c3d4e5f6a7, add scim column to user tableINFO \[alembic.runtime.migration] Running upgrade b2c3d4e5f6a7 -> a3dd5bedd151, Add tasks and summary columns to chat tableINFO \[alembic.runtime.migration] Running upgrade a3dd5bedd151 -> d4e5f6a7b8c9, add automation tablesINFO \[alembic.runtime.migration] Running upgrade d4e5f6a7b8c9 -> b7c8d9e0f1a2, add last\_read\_at to chatINFO \[alembic.runtime.migration] Running upgrade b7c8d9e0f1a2 -> e1f2a3b4c5d6, Add is\_pinned to note tableINFO \[alembic.runtime.migration] Running upgrade e1f2a3b4c5d6 -> c1d2e3f4a5b6, Add shared\_chat table and migrate existing sharesINFO \[alembic.runtime.migration] Running upgrade c1d2e3f4a5b6 -> 56359461a091, add calendar tablesINFO \[alembic.runtime.migration] Running upgrade 56359461a091 -> 4de81c2a3af1, add pinned\_note tableINFO \[alembic.runtime.migration] Running upgrade 4de81c2a3af1 -> a0b1c2d3e4f5, Add memory user\_id indexWARNI \[open\_webui.env]WARNING: CORS\_ALLOW\_ORIGIN IS SET TO '\*' - NOT RECOMMENDED FOR PRODUCTION DEPLOYMENTS./home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:300: SyntaxWarning: invalid escape sequence '\\(' m = re.match('(\[su]\(\[0-9]{1,2})p?) \\((\[0-9]{1,2}) bit\\)$', token)/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:301: SyntaxWarning: invalid escape sequence '\\(' m2 = re.match('(\[su]\(\[0-9]{1,2})p?)( \\(default\\))?$', token)/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:310: SyntaxWarning: invalid escape sequence '\\(' elif re.match('(flt)p?( \\(default\\))?$', token):/home/fira/.local/share/uv/tools/open-webui/lib/python3.12/site-packages/pydub/utils.py:314: SyntaxWarning: invalid escape sequence '\\(' elif re.match('(dbl)p?( \\(default\\))?$', token):WARNI \[langchain\_community.utils.user\_agent] USER\_AGENT environment variable not set, consider setting it to identify your requests. ██████╗ ██████╗ ███████╗███╗ ██╗ ██╗ ██╗███████╗██████╗ ██╗ ██╗██╗██╔═══██╗██╔══██╗██╔════╝████╗ ██║ ██║ ██║██╔════╝██╔══██╗██║ ██║██║██║ ██║██████╔╝█████╗ ██╔██╗ ██║ ██║ █╗ ██║█████╗ ██████╔╝██║ ██║██║██║ ██║██╔═══╝ ██╔══╝ ██║╚██╗██║ ██║███╗██║██╔══╝ ██╔══██╗██║ ██║██║╚██████╔╝██║ ███████╗██║ ╚████║ ╚███╔███╔╝███████╗██████╔╝╚██████╔╝██║ ╚═════╝ ╚═╝ ╚══════╝╚═╝ ╚═══╝ ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝ ╚═╝v0.9.5 - building the best AI user interface.https://github.com/open-webui/open-webuiDownloading (incomplete total...): 100%|███████████████████████████████████████████████████████████████| 190/190 \[00:00<00:00, 223B/s]Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF\_TOKEN to enable higher rate limits and faster downloads.WARNI \[huggingface\_hub.utils.\_http] Warning: You are sending unauthenticated requests to the HF Hub. Please set a HF\_TOKEN to enable higher rate limits and faster downloads.Downloading (incomplete total...): 0%| | 192k/521M \[00:15<10:19:59, 14.0kB/s]Fetching 30 files: 3%|██▋ | 1/30 \[00:01<00:53, 1.84s/it]

Your Open WebUI server has successfully launched and is running exactly as it should. It completed its database migrations, initialized its application state, and is now downloading the necessary local files (like embedding models for RAG) from Hugging Face.

What to Do Next

1. **Wait for the Downloads to Finish**:\
   The terminal is currently downloading 30 files from Hugging Face. Let this finish so the interface has everything it needs to handle documents and local processing.
2. **Access the Interface**:\
   Once the downloads complete and the log shows that the server is listening, open your web browser and go to:\
   `http://localhost:8080`
3. **Create the Admin Account**:\
   The very first account you register on this screen will automatically be granted Owner/Admin privileges. You can use any email and password you like.

Important Note on Your Logs

- **CORS Warning**: The log shows `CORS_ALLOW_ORIGIN IS SET TO '*'`. This is perfectly fine and standard for running locally on your own machine. If you ever plan to expose this server to the public internet, you should configure this variable in your environment for security.
- **Hugging Face Token**: The warning about unauthenticated requests just means the download might be slightly slower because you haven't linked a Hugging Face account. You can safely ignore this; the files will still finish downloading.

If you run into any **connection errors** once the dashboard opens, or if you want to know how to connect it to an **Ollama instance** or an **OpenAI API key**, let me know!

can it just run. i dont wanna have the massive models. i just wanna paste my key and start chatting.

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can absolutely do exactly that</span></strong></mark>**.** You do not need to host or download massive language models on your computer to use Open WebUI. \[[1](https://docs.openwebui.com/getting-started/quick-start/connect-a-provider/starting-with-openai-compatible/), [2](https://docs.openwebui.com/), [3](https://www.reddit.com/r/ClaudeAI/comments/1fsli32/i%5Fam%5Fconsidering%5Fswitching%5Ffrom%5Fweb%5Finterface%5Fto/), [4](https://www.youtube.com/watch?v=yLAIWsb5-ls\&t=1)]

The files it is currently downloading are not heavy LLMs; they are just a tiny, mandatory 500MB embedding model that Open WebUI uses to power its internal document-reading features (RAG). You do not have to wait for it if you want to skip it. \[[1](https://www.youtube.com/watch?v=LmXaPUky%5Fu4\&t=178), [2](https://www.youtube.com/watch?v=5Lpd2o1TM7A\&t=3)]

Here is how to instantly bypass everything, paste your key, and start chatting:

Step 1: Force Open WebUI to start instantly

You can trick Open WebUI into skipping those background Hugging Face downloads by telling it that your machine is completely offline. \[[1](https://docs.openwebui.com/tutorials/maintenance/offline-mode/), [2](https://www.youtube.com/watch?v=yLAIWsb5-ls\&t=1)]

1. **Stop** your current terminal process by pressing `Ctrl + C`.

2. **Restart** Open WebUI with the `OFFLINE_MODE` flag by running this command:\
   bash

<!---->

```
OFFLINE_MODE=True open-webui serve
```

Use code with caution.\
\[[1](https://docs.openwebui.com/tutorials/maintenance/offline-mode/), [2](https://github.com/open-webui/open-webui/issues/21405)]

Your server will now skip all downloads and boot up to the login page within seconds. \[[1](https://docs.openwebui.com/tutorials/maintenance/offline-mode/), [2](https://github.com/open-webui/open-webui/issues/21405)]

Step 2: Open the Web Page & Paste Your Key

1. Open your browser and go to **`http://localhost:8080`**.
2. **Register** a new account using any mock email and password (this account remains entirely local to your machine).
3. Once logged in, look at the bottom-left corner and click your **Profile Name** -> **Admin Panel** -> **Settings** -> **Connections**.
4. Paste your **OpenAI API Key**, **Anthropic Key**, or **OpenRouter Key** into the respective field and click save. \[[1](https://www.reddit.com/r/ClaudeAI/comments/1fsli32/i%5Fam%5Fconsidering%5Fswitching%5Ffrom%5Fweb%5Finterface%5Fto/), [2](https://cherylm.hashnode.dev/self-hosted-chat-solutions-for-llms-open-webui)]

Step 3: Turn off local features to save performance (Optional)

Since you are only using cloud APIs and do not want local overhead, you can turn off the document parsing system entirely. \[[1](https://www.reddit.com/r/OpenWebUI/comments/1ksr8dx/using%5Fentire%5Fdocument/)]

- In the same **Settings** menu, click the **Documents** tab.
- Toggle on **"Bypass Embedding and Retrieval"**. \[[1](https://github.com/open-webui/open-webui/discussions/19282), [2](https://www.reddit.com/r/OpenWebUI/comments/1ksr8dx/using%5Fentire%5Fdocument/), [3](https://docs.openwebui.com/features/chat-conversations/rag/)]

You are all set. Navigate back to the home screen, select your API model from the top dropdown menu, and start chatting. \[[1](https://docs.rancherdesktop.io/tutorials/working-with-llms/)]

Which API provider (**OpenAI, Anthropic, or OpenRouter**) are you trying to link up first?

- [link](https://www.reddit.com/r/ClaudeAI/comments/1fsli32/i%5Fam%5Fconsidering%5Fswitching%5Ffrom%5Fweb%5Finterface%5Fto/)\
  I am considering switching from web interface to API ... - Reddit\
  Sep 30, 2024 — Yep, there are Functions you can add to it that will do what you're looking for. It's one of the top functions. tomtom989898. • 2y...\
  Reddit·r/ClaudeAI
- [link](https://docs.openwebui.com/getting-started/quick-start/connect-a-provider/starting-with-openai-compatible/)\
  OpenAI-Compatible - Open WebUI\
  Key Advantages \* No installation required - Uses AWS-managed endpoints directly. \* Simple configuration - Just requires an API key...\
  Open WebUI Docs
- [link](https://docs.openwebui.com/)\
  Home / Open WebUI\
  Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline. It supp...\
  Open WebUI Docs

Show all

simpler popular alternatives

If you want a lightweight frontend where you just paste an API key and chat without running a server or downloading background files, here are the best popular alternatives:

1\. Typst / Chatbox (Desktop Apps)

These are simple desktop apps (Windows, Mac, Linux) that require zero terminal setup. You download the app, paste your key, and start chatting instantly.

- **Chatbox**: The most popular open-source option. It has a beautiful UI that looks exactly like ChatGPT or Claude, supports almost every cloud provider (OpenAI, Anthropic, Gemini, OpenRouter), and requires absolutely zero local background downloads.
- **Jan**: While it can run local models, it functions perfectly as a lightweight desktop client for cloud APIs. You just toggle off local execution, enter your cloud keys, and use its clean interface. \[[1](https://dev.to/therealmrmumba/10-best-open-source-chatgpt-alternative-that-runs-100-locally-jdc), [2](https://lightpdf.com/alternatives-adobe-acrobat.html)]

2\. LibreChat (Web-Based)

If you still want a self-hosted web interface like Open WebUI but want something significantly less bloated that doesn't force heavy background downloads on startup.

- **LibreChat**: It is designed specifically to replicate the ChatGPT Plus experience flawlessly. It is highly optimized for cloud APIs, supports multi-modal inputs, and handles your keys without trying to download massive embedding models in the background by default. \[[1](https://www.eesel.ai/blog/open-source-chatbot-platforms)]

3\. Big-AGI (The Ultimate Zero-Setup Web App)

If you want something you don't even have to install on your computer.

- **nextjs-ollama-LLM-ui / big-AGI**: You can run it locally or use their hosted web version. You simply click the settings gear, paste your OpenAI or Anthropic API key directly into your browser's local storage, and start chatting. Your key never touches their servers; it goes straight from your browser to the AI provider.

Comparison Overview

| Alternative   | Type            | Setup Effort                        | Best For                                                    |
| ------------- | --------------- | ----------------------------------- | ----------------------------------------------------------- |
| **Chatbox**   | Desktop App     | Extremely Low (Install & Paste Key) | Maximum simplicity on your local computer.                  |
| **Big-AGI**   | Web App         | Zero (Use in Browser)               | Instant chatting without installing anything.               |
| **LibreChat** | Self-Hosted Web | Medium (Docker / Node)              | A full web interface without the heavy Open WebUI overhead. |

Do you prefer a **standalone desktop app** that sits in your dock/taskbar, or a **pure browser-based** solution?

- [link](https://dev.to/therealmrmumba/10-best-open-source-chatgpt-alternative-that-runs-100-locally-jdc)\
  10 best open source ChatGPT alternative that runs 100% locally\
  Jun 18, 2025 — If you love the ChatGPT interface, this is for you. Chatbot UI is a sleek frontend that mimics ChatGPT but can be hooked up to you...\
  \
  \
  DEV Community
- [link](https://lightpdf.com/alternatives-adobe-acrobat.html)\
  Top 7 Alternatives to Adobe Acrobat\
  May 8, 2018 — The program provides a clean interface.\
  \
  \
  LightPDF
- [link](https://www.eesel.ai/blog/open-source-chatbot-platforms)\
  The 7 best open source chatbot platforms in 2025 (and a smarter alternative)\
  Nov 25, 2025 — 4. LibreChat The good: It lets you switch between different LLMs without having to rebuild your whole chat interface. It's a great...\
  \
  \
  eesel AI

install LibreChat

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">To install LibreChat locally, the easiest and official method is using Docker Compose</span></strong></mark>**.** This sets up the app and a local database container to store your chat history without forcing any massive AI model downloads. \[[1](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup), [2](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)]

Ensure **Docker Desktop** is installed and running on your computer before proceeding. \[]

Step 1: Clone the Repository \[[1](https://www.librechat.ai/docs/local/docker)]

Open your terminal and run the following commands to clone the LibreChat GitHub Repository and navigate into the folder: \[, [2](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/docker%5Fcompose%5Finstall.md), [3](https://itsfoss.com/librechat-linux/)]

bash

```
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat
```

Use code with caution.

Step 2: Create the Environment File

Copy the example template to create your local configurations. \[]

- **On Mac / Linux:**\
  bash

<!---->

```
cp .env.example .env
```

Use code with caution.

- **On Windows (PowerShell):**\
  bash

<!---->

```
copy .env.example .env
```

Use code with caution.\
\[[1](https://www.librechat.ai/docs/local/docker)]

Step 3: Add Your API Key (Optional but Faster) \[[1](https://www.librechat.ai/docs/local/docker)]

Instead of pasting your key in the browser later, you can add it right now so it works instantly. Open the newly created `.env` file in any text editor and add your key: \[[1](https://www.librechat.ai/docs/remote/docker%5Flinux)]

env

```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

Use code with caution.

_(You can do the same for `ANTHROPIC_API_KEY` or `OPENROUTER_KEY` if you use them)._ \[[1](https://www.librechat.ai/docs/local/docker)]

Step 4: Fire Up the Container

Run this command to build and launch LibreChat: \[[1](https://www.youtube.com/watch?v=w7VqivpdfZk\&t=3), [2](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/docker%5Fcompose%5Finstall.md)]

bash

```
docker compose up -d
```

Use code with caution.

Docker will download the lightweight web backend and a small MongoDB database to store your conversation logs. It will **not** download heavy gigabyte-sized LLMs. \[[1](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)]

Step 5: Start Chatting

1. Once the terminal finishes processing, open your browser and go to **`http://localhost:3080`**.
2. Click **Sign Up** to create your local administrator account.
3. Select your cloud model from the dropdown menu at the top left and begin chatting! \[[1](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3), [2](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/docker%5Fcompose%5Finstall.md)]

For a complete visual walkthrough of the local configuration, account creation, and API connection process, you can watch this setup guide:

8m

[Install LibreChat LocallyFahd MirzaYouTube• May 10, 2024](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)

If you run into any **Docker or database startup errors**, or need help configuring a **different API provider**, let me know!

- [link](https://www.librechat.ai/docs/quick%5Fstart/local%5Fsetup)\
  Local Setup Guide - LibreChat\
  Step 1. Download the Project. Manual Download. Go to the Project Page: Visit https://github.com/danny-avila/LibreChat. Download th...\
  LibreChat
- [link](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)\
  Install LibreChat Locally\
  May 10, 2024 — but of course if you're using it with open api key then the point is only that you can install it locally on your network and then...\
  8m\
  YouTube·Fahd Mirza
- [link](https://www.librechat.ai/docs/remote/docker%5Flinux)\
  Docker (Remote Linux) - LibreChat\
  Part II: Setup LibreChat \* 1. Clone down the repo. From the droplet commandline (as your user, not root): # clone down the reposit...\
  LibreChat

Show all

use a package manager. i can prefer pnpm. docker is ok. apt and flatpak are also ok.

**You can easily run LibreChat directly on your machine using `pnpm` without dealing with container overhead.** \[[1](https://github.com/danny-avila/LibreChat/discussions/7785), [2](https://www.librechat.ai/docs/local)]

Because LibreChat requires a database to store its user accounts and conversation history, installing it natively with a package manager means you will run the web application via `pnpm` and quickly spin up a lightweight MongoDB database via `docker` (or an external cloud instance) to handle the backend data storage. \[[1](https://www.librechat.ai/docs/development/get%5Fstarted), [2](https://www.librechat.ai/docs/local)]

Here is the exact step-by-step terminal installation guide:

Prerequisites

Make sure your system has **Node.js (v20.19.0+)**, **pnpm**, and **Docker Desktop** installed. \[[1](https://www.librechat.ai/docs/remote/docker%5Flinux), [2](https://www.librechat.ai/docs/local/docker)]

Step 1: Clone the Project

Open your terminal and grab the official code from the LibreChat GitHub Repository: \[[1](https://www.librechat.ai/docs/local)]

bash

```
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat
```

Use code with caution.

Step 2: Install Dependencies with pnpm

Install the monorepo packages. LibreChat supports standard node environments, so you can leverage `pnpm`'s speed and symlinks to fetch all dependencies: \[[1](https://github.com/danny-avila/LibreChat/discussions/7785)]

bash

```
pnpm import  # Optional: converts the existing package-lock.json to a pnpm-lock.yaml file
pnpm install
```

Use code with caution.

Step 3: Configure Your Environment File \[[1](https://www.librechat.ai/docs/local/docker)]

Duplicate the environment template file: \[[1](https://www.librechat.ai/docs/local)]

bash

```
cp .env.example .env
```

Use code with caution.

Open the `.env` file in your favorite text editor. You only need to touch two things to keep it simple:

1. Paste your key under `OPENAI_API_KEY=sk-your-key-here` (or use any other provider block).

2. Verify that your `MONGO_URI` is pointing to your local connection string:\
   env

<!---->

```
MONGO_URI=mongodb://127.0.0.1:27017/LibreChat
```

Use code with caution.\
\[[1](https://www.librechat.ai/docs/development/get%5Fstarted), [2](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)]

Step 4: Run Only the Database (Lightweight Docker)

Instead of putting the entire application in a container, run just a naked, bare-bones MongoDB database image to hold your text logs:

bash

```
docker run -d --name librechat-db -p 27017:27017 mongo:latest
```

Use code with caution.

Step 5: Build and Start the Frontend & Backend \[[1](https://www.librechat.ai/docs/local/npm)]

Now, use `pnpm` to compile the client-side user interface and launch the native Node processes: \[[1](https://www.librechat.ai/docs/local/npm)]

bash

```
pnpm run build
pnpm run backend
```

Use code with caution.

Once the terminal outputs that the server is ready, pull open your browser and navigate to **`http://localhost:3080`**. Sign up for your local administrative account and your pasted API key will instantly be ready to run. \[[1](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41), [2](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/docker%5Fcompose%5Finstall.md)]

Would you like help setting up a **free cloud-hosted database (like MongoDB Atlas)** if you want to remove Docker entirely from your machine?

- [link](https://www.librechat.ai/docs/remote/docker%5Flinux)\
  Docker (Remote Linux) - LibreChat\
  Note: this will install some pretty old versions, for npm in particular. LibreChat requires Node. js v20. 19.0+ (or ^22.12. 0 or >\
  LibreChat
- [link](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41)\
  Install LibreChat Locally\
  May 10, 2024 — but of course if you're using it with open api key then the point is only that you can install it locally on your network and then...\
  8m\
  YouTube·Fahd Mirza
- [link](https://www.librechat.ai/docs/local)\
  Local Installation - LibreChat\
  Bundled with Docker. MongoDB. MeiliSearch. RAG API. Vector DB. Docker Compose handles all dependencies. With npm or Helm, you inst...\
  LibreChat

Show all

i dont wanna clone anything. did not they publish so i could have one liner like pnpm add -g?

**No, [LibreChat](https://www.librechat.ai/) does not publish a globally executable binary to npm.** You cannot run `pnpm add -g librechat` because it is a massive, multi-package monorepo intended to be deployed as a whole application server, not a CLI tool.

However, since you want an **instant, one-line execution command** without cloning or installing things manually, there are a couple of excellent ways to achieve this:

Option 1: Use `npx` (No Cloning, Runs Instantly)

If you want to spin up a web UI directly out of your terminal using an npm package runner _without_ cloning anything to your disk, use **Chatbox’s official command-line build** or an equivalent lightweight client runner.

For a zero-clone, immediate Web UI, run this single command:

bash

```
npx chatbox-app-server
```

Use code with caution.

_(Alternatively, if you strictly want LibreChat's engine via Docker without cloning their git repository, you can pull their pre-built image directly in one line: `docker run -d -p 3080:3080 --name librechat dannyavila/librechat:latest`)_

Option 2: Use Flatpak (Perfect for Linux)

Since you mentioned Flatpak is okay, you can bypass the entire Node/pnpm/Docker headache and install **Chatbox** or **Jan** directly via your system package manager. They are fully compiled, production-ready desktop interfaces where you paste your key and start chatting instantly.

To install a clean, self-contained desktop interface via Flathub:

bash

```
flatpak install flathub xyz.chatboxapp.Chatbox
```

Use code with caution.

Once installed, launch it from your application menu, paste your cloud API key, and begin.

Would you prefer running the **`npx` web server command** so you can chat inside your web browser, or does the native **Flatpak desktop application** fit your workflow better?

use librechat. give me the command within one code block.

To deploy **LibreChat** natively via Docker without cloning any repositories, you can pull the official multi-container configuration directly from GitHub. \[[1](https://www.youtube.com/watch?v=naUHHqpyOo4\&t=3), [2](https://www.youtube.com/watch?v=w7VqivpdfZk\&t=3)]

Make sure **Docker Desktop** is open, replace `sk-your-actual-api-key-here` with your real OpenAI token, and execute this entire block in your terminal:

bash

```
docker network create librechat-network && \
docker run -d --name librechat-db --network librechat-network -p 27017:27017 mongo:latest && \
docker run -d --name librechat --network librechat-network -p 3080:3080 \
  -e OPENAI_API_KEY="sk-your-actual-api-key-here" \
  -e MONGO_URI="mongodb://librechat-db:27017/LibreChat" \
  -e HOST="0.0.0.0" \
  -e JWT_SECRET="secret_$(date +%s)" \
  -e REFRESH_TOKEN_SECRET="refresh_$(date +%s)" \
  ghcr.io/danny-avila/librechat:latest
```

Use code with caution.

What this does:

1. Creates an isolated virtual network for the containers to talk to each other.
2. Spins up a bare-bones **MongoDB database** container.
3. Launches the official **LibreChat application container**, automatically maps it to your browser on port `3080`, injects your OpenAI key, and wires up the backend logs. \[[1](https://www.librechat.ai/blog/2023-08-18%5Fpodman), [2](https://www.youtube.com/watch?v=7pBmvksRHv8\&t=41), [3](https://www.librechat.ai/docs/local/docker)]

Once the terminal outputs the container ID string, open your browser to **`http://localhost:3080`**, sign up for your initial local admin user, and begin chatting immediately. \[[1](https://www.librechat.ai/docs/local/docker), [2](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/docker%5Fcompose%5Finstall.md)]

Would you like to know the exact line to append to this block if you want to inject **Anthropic** or **OpenRouter** keys as well?

- [link](https://www.librechat.ai/blog/2023-08-18%5Fpodman)\
  Podman Install | LibreChat\
  Aug 18, 2023 — Place your librechat. yaml file in your project's root directory. Modify the Podman run command for the LibreChat container to inc...\
  LibreChat
- [link](https://www.librechat.ai/docs/local/docker)\
  Docker | LibreChat\
  Apr 4, 2018 — Create Your Environment File. cp .env.example .env. The default . env file works out of the box for a basic setup. For in-depth co...\
  LibreChat
- [link](https://github.com/fuegovic/Libre-Chat/blob/main/docs/install/docker%5Fcompose%5Finstall.md)\
  Libre-Chat/docs/install/docker\_compose\_install.md at main - GitHub\
  Running LibreChat Once you have completed all the setup, you can start the LibreChat application by running the command docker-com...\
  GitHub

Show all

can i omit the secrets and paste them on webui (or config files) later

**Yes, you can absolutely omit the API keys and secrets from the container command and configure everything through the Web UI or config files later.**

However, LibreChat _strictly requires_ the `JWT_SECRET` and `REFRESH_TOKEN_SECRET` variables to be present on startup, or the container will crash immediately \[1]. You can pass dummy placeholders for those now, and paste your real OpenAI or Anthropic keys inside the Admin Panel after you log in.

Here is the exact code block to launch the containers without your sensitive keys:

bash

```
docker network create librechat-network && \
docker run -d --name librechat-db --network librechat-network -p 27017:27017 mongo:latest && \
docker run -d --name librechat --network librechat-network -p 3080:3080 \
  -e MONGO_URI="mongodb://librechat-db:27017/LibreChat" \
  -e HOST="0.0.0.0" \
  -e JWT_SECRET="temporary_secret_key_change_me_later" \
  -e REFRESH_TOKEN_SECRET="temporary_refresh_key_change_me_later" \
  ghcr.io/danny-avila/librechat:latest
```

Use code with caution.

How to add your keys later via the Web UI:

1. Open your browser and navigate to **`http://localhost:3080`**.
2. Create your initial local administrator account.
3. Click on your **Profile/Username** in the bottom-left corner and open the **Admin Panel**.
4. Navigate to the **Balances / Keys** or **Settings** section to paste your API keys directly into the web interface.

Would you like the instructions on how to copy a **`librechat.yaml` configuration file** into this running container if you prefer file-based setups over the UI?


# .

```
 ...Documents/_/opensource % cd ~/Documents/_/opensource/ && git clone https://github.com/danny-avila/LibreChat.git # todo: move to .storage
cd LibreChat
# cp .env.example .env
docker compose up -d

Cloning into 'LibreChat'...
remote: Enumerating objects: 88670, done.
remote: Counting objects: 100% (946/946), done.
remote: Compressing objects: 100% (615/615), done.
remote: Total 88670 (delta 654), reused 346 (delta 331), pack-reused 87724 (from 3)
Receiving objects: 100% (88670/88670), 169.71 MiB | 1.36 MiB/s, done.
Resolving deltas: 100% (61712/61712), done.
WARN[0000] The "PORT" variable is not set. Defaulting to a blank string.
WARN[0000] The "PORT" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "UID" variable is not set. Defaulting to a blank string.
WARN[0000] The "GID" variable is not set. Defaulting to a blank string.
WARN[0000] The "MEILI_MASTER_KEY" variable is not set. Defaulting to a blank string.
invalid proto:
```

no sane defaults. weird.


