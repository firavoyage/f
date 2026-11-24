# . sh

```
 ~ % b rm -g @earendil-works/pi-coding-agent

bun remove v1.3.14 (0d9b296a)

18 packages installed [331.00ms]
Removed: 1
Saved lockfile
 ~ % b add -g @earendil-works/pi-coding-agent

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [54]

installed @earendil-works/pi-coding-agent@1.6.0 with binaries:
 - pi

34 packages installed [6.17s]

Blocked 1 postinstall. Run `bun pm -g untrusted` for details.
Saved lockfile
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


 Warning: No models available. Use /login to log into a provider via OAuth or API key. See:
   /home/fira/.bun/install/global/node_modules/@earendil-works/pi-coding-agent/docs/providers.md
   /home/fira/.bun/install/global/node_modules/@earendil-works/pi-coding-agent/docs/models.md
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
0.0%/262k (auto)                                                                                    moonshotai/kimi-k2.7-code • medium
```

```
 ~ % pi install npm:pi-web-access
pi install npm:pi-toolset-permissions
Installing npm:pi-web-access...
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.

added 211 packages in 13s
Installed npm:pi-web-access
Installing npm:pi-toolset-permissions...
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.

added 1 package in 1s
Installed npm:pi-toolset-permissions
```

```
 ~ % pi install npm:pi-bar

Installing npm:pi-bar...
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.

added 1 package in 2s
Installed npm:pi-bar
```

```
 ~ % pi install npm:pi-usage-widget

Installing npm:pi-usage-widget...
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.

added 1 package in 2s
Installed npm:pi-usage-widget
```

```
 ...f/humility/source % pi --help
pi - AI coding assistant with read, bash, edit, write tools

Usage:
  pi [options] [--] [@files...] [messages...]

Commands:
  pi install <source> [-l]     Install extension source and add to settings
  pi remove <source> [-l]      Remove extension source from settings
  pi uninstall <source> [-l]   Alias for remove
  pi update [source|self|pi]   Update pi, extensions, or model catalogs
  pi list                      List installed extensions from settings
  pi config [-l]               Open TUI to enable/disable package resources (Tab switches scope)
  pi auth <command>            Log in or out, print credentials, or check provider readiness
  pi mcp <command>             Manage MCP servers
  pi <command> --help          Show help for install/remove/uninstall/update/list/config/auth/mcp

Options:
  --provider <name>              Provider to search for --model (requires --model)
  --model <pattern>              Model pattern or ID (supports "provider/id" and optional ":<thinking>")
  --api-key <key>                API key (defaults to env vars)
  --system-prompt <text>         System prompt (default: coding assistant prompt)
  --append-system-prompt <text>  Append text or file contents to the system prompt (can be used multiple times)
  --mode <mode>                  Output mode: text (default), json, or rpc
  --print, -p                    Non-interactive mode: process prompt and exit
  --continue, -c                 Continue the most recent session for the current directory
  --resume, -r                   Pick a session to resume
  --session <path|id>            Open a session by file path or full/partial ID
  --session-id <id>              Use the current directory's existing session with the ID, creating it otherwise
  --fork <path|id>               Fork a session by file path or full/partial ID into the current directory
  --session-dir <dir>            Directory for session storage and lookup
  --no-session                   Don't save session (ephemeral)
  --name, -n <name>              Set session display name
  --models <patterns>            Comma-separated model patterns for Ctrl+P cycling
                                 Supports globs (anthropic/*, *sonnet*) and fuzzy matching
  --no-tools, -nt                Disable all tools by default (built-in and extension)
  --no-builtin-tools, -nbt       Disable built-in tools by default but keep extension/custom tools enabled
  --tools, -t <tools>            Comma-separated allowlist of tool names or patterns (*) to enable
                                 Keeps MCP tools unless an entry starts with mcp__
                                 Only +name/-name entries add to or remove from the defaults
  --exclude-tools, -xt <tools>   Comma-separated denylist of tool names or patterns (*) to disable
                                 Applies to all tools, MCP tools included
  --thinking <level>             Set thinking level: off, minimal, low, medium, high, xhigh, max
  --extension, -e <path>         Load an extension file or builtin:<name> (can be used multiple times)
  --no-extensions, -ne           Disable extension discovery and built-in extensions (explicit -e paths still work)
  --no-mcp                       Disable built-in MCP support: no servers connect and no MCP tools
  --skill <path>                 Load a skill file or directory (can be used multiple times)
  --no-skills, -ns               Disable skills discovery and loading
  --prompt-template <path>       Load a prompt template file or directory (can be used multiple times)
  --no-prompt-templates, -np     Disable prompt template discovery and loading
  --theme <path>                 Load a theme file or directory (can be used multiple times)
  --use-theme <name[/name]>      Set the initial interactive theme for this run
  --no-themes                    Disable theme discovery and loading
  --no-context-files, -nc        Disable AGENTS.md and CLAUDE.md discovery and loading
  --export <file> [output]       Export session file to HTML and exit
  --list-models [search]         List available models (with optional fuzzy search)
  --verbose                      Force verbose startup (overrides quietStartup setting)
  --tui-mode <mode>              TUI mode: fullscreen (default) or regular
  --approve, -a                  Trust project-local files for this run
  --no-approve, -na              Ignore project-local files for this run
  --offline                      Disable startup network operations (same as PI_OFFLINE=1)
  --                             End option parsing; treat remaining arguments as messages/files
  --help, -h                     Show this help
  --version, -v                  Show version number

Extensions can register additional flags (e.g., --plan from plan-mode extension).
Extension CLI Flags:
  --inner-extensions <value>  JSON array of extension paths to load only inside the sandbox.
  --inner-pi <value>          Absolute path to the inner Pi executable.
  --inner-node <value>        Absolute path to Node.js 22.19 or newer.


Examples:
  # Print a provider API key for an external client
  pi auth print-api-key --provider openai

  # Print an OAuth bearer token for an external client (refreshes if expired)
  pi auth print-bearer-token --provider openai-codex

  # Interactive mode
  pi

  # Interactive mode with initial prompt
  pi "List all .ts files in src/"

  # Include files in initial message
  pi @prompt.md @image.png "What color is the sky?"

  # Non-interactive mode (process and exit)
  pi -p "List all .ts files in src/"

  # Prompt beginning with a dash
  pi -p -- "- Summarize these points"

  # Multiple messages (interactive)
  pi "Read package.json" "What dependencies do we have?"

  # Continue previous session
  pi --continue "What did we discuss?"

  # Start a named session
  pi --name "Refactor auth module"

  # Use different model
  pi --provider openai --model gpt-4o-mini "Help me refactor this code"

  # Use model with provider prefix (no --provider needed)
  pi --model openai/gpt-4o "Help me refactor this code"

  # Use model with thinking level shorthand
  pi --model sonnet:high "Solve this complex problem"

  # Limit model cycling to specific models
  pi --models claude-sonnet,claude-haiku,gpt-4o

  # Limit to a specific provider with glob pattern
  pi --models "github-copilot/*"

  # Cycle models with fixed thinking levels
  pi --models sonnet:high,haiku:low

  # Start with a specific thinking level
  pi --thinking high "Solve this complex problem"

  # Read-only mode (no file modifications possible)
  pi --tools read,grep,find,ls -p "Review the code in src/"

  # Add codemode to the default tools
  pi --tools +codemode

  # Codemode with only the tools of one MCP server
  pi --tools read,bash,codemode,'mcp__radius__*'

  # Disable one tool while keeping the rest available
  pi --exclude-tools ask_question

  # Export a session file to HTML
  pi --export ~/.pi/agent/sessions/--path--/session.jsonl
  pi --export session.jsonl output.html

Environment Variables:
  ANTHROPIC_AUTH_TOKEN             - Anthropic bearer auth token
  ANTHROPIC_API_KEY                - Anthropic Claude API key
  ANTHROPIC_OAUTH_TOKEN            - Anthropic OAuth token (alternative to API key)
  ANT_LING_API_KEY                 - Ant Ling API key
  OPENAI_API_KEY                   - OpenAI GPT API key
  AZURE_OPENAI_API_KEY             - Azure OpenAI API key
  AZURE_OPENAI_BASE_URL            - Azure OpenAI/Cognitive Services base URL (e.g. https://{resource}.openai.azure.com)
  AZURE_OPENAI_RESOURCE_NAME       - Azure OpenAI resource name (alternative to base URL)
  AZURE_OPENAI_API_VERSION         - Azure OpenAI API version (default: v1)
  AZURE_OPENAI_DEPLOYMENT_NAME_MAP - Azure OpenAI model=deployment map (comma-separated)
  DEEPSEEK_API_KEY                 - DeepSeek API key
  NVIDIA_API_KEY                   - NVIDIA NIM API key
  GEMINI_API_KEY                   - Google Gemini API key
  GROQ_API_KEY                     - Groq API key
  CEREBRAS_API_KEY                 - Cerebras API key
  XAI_API_KEY                      - xAI Grok API key
  FIREWORKS_API_KEY                - Fireworks API key
  TOGETHER_API_KEY                 - Together AI API key
  BASETEN_API_KEY                  - Baseten API key
  OPENROUTER_API_KEY               - OpenRouter API key
  AI_GATEWAY_API_KEY               - Vercel AI Gateway API key
  ZAI_API_KEY                      - ZAI Coding Plan API key (Global)
  ZAI_CODING_CN_API_KEY            - ZAI Coding Plan API key (China)
  MISTRAL_API_KEY                  - Mistral API key
  MINIMAX_API_KEY                  - MiniMax API key
  MOONSHOT_API_KEY                 - Moonshot AI API key
  OPENCODE_API_KEY                 - OpenCode Zen/OpenCode Go API key
  KIMI_API_KEY                     - Kimi For Coding API key
  META_API_KEY                     - Meta Model API key
  CLOUDFLARE_API_KEY               - Cloudflare API token (Workers AI and AI Gateway)
  CLOUDFLARE_ACCOUNT_ID            - Cloudflare account id (required for both)
  CLOUDFLARE_GATEWAY_ID            - Cloudflare AI Gateway slug (required for AI Gateway)
  QWEN_TOKEN_PLAN_TEAM_API_KEY     - Qwen Token Plan Team API key (international region)
  QWEN_TOKEN_PLAN_TEAM_CN_API_KEY  - Qwen Token Plan Team API key (China region)
  QWEN_TOKEN_PLAN_INDIVIDUAL_API_KEY - Qwen Token Plan Individual API key (international region)
  QWEN_TOKEN_PLAN_INDIVIDUAL_CN_API_KEY - Qwen Token Plan Individual API key (China region)
  XIAOMI_API_KEY                   - Xiaomi MiMo API key (api.xiaomimimo.com billing)
  XIAOMI_TOKEN_PLAN_CN_API_KEY     - Xiaomi MiMo Token Plan API key (China region)
  XIAOMI_TOKEN_PLAN_AMS_API_KEY    - Xiaomi MiMo Token Plan API key (Amsterdam region)
  XIAOMI_TOKEN_PLAN_SGP_API_KEY    - Xiaomi MiMo Token Plan API key (Singapore region)
  AWS_PROFILE                      - AWS profile for Amazon Bedrock
  AWS_ACCESS_KEY_ID                - AWS access key for Amazon Bedrock
  AWS_SECRET_ACCESS_KEY            - AWS secret key for Amazon Bedrock
  AWS_BEARER_TOKEN_BEDROCK         - Bedrock API key (bearer token)
  AWS_REGION                       - AWS region for Amazon Bedrock (e.g., us-east-1)
  PI_CODING_AGENT_DIR              - Config directory (default: ~/.pi/agent)
  PI_CODING_AGENT_SESSION_DIR      - Session storage directory (overridden by --session-dir)
  PI_PACKAGE_DIR                   - Override package directory (for Nix/Guix store paths)
  PI_OFFLINE                       - Disable startup network operations when set to 1/true/yes
  PI_SELF_UPDATE_COMMAND           - Command pi update runs to update pi itself ({packageName}, {version}, {installSpec})
  PI_TELEMETRY                     - Override install telemetry when set to 1/true/yes or 0/false/no
  PI_SHARE_VIEWER_URL              - Base URL for /share command (default: https://pi.dev/session/)

Built-in Tool Names:
  read       - Read file contents
  bash       - Execute bash commands
  powershell - Execute PowerShell commands on Windows
  edit       - Edit files with find/replace
  write      - Write files (creates/overwrites)
  grep       - Search file contents (read-only, off by default)
  find       - Find files by glob pattern (read-only, off by default)
  ls         - List directory contents (read-only, off by default)
```

```
 ...f/humility/source % pi remove npm:pi-toolset-permissions
Removing npm:pi-toolset-permissions...
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.

removed 1 package in 333ms
Removed npm:pi-toolset-permissions
```

# . sessions

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

[Extensions]
  pi-toolset-permissions:src, pi-web-access:dist


 Default model: openrouter/openai/gpt-6-luna


 try web search


 What would you like me to search for?


 test


 Performing a web search

 I’m considering running a web search query with the term "test." Since I already tried a web search, I’ll make sure to provide a
 clear purpose before calling the tool. I’ll add commentary text to explain what I’m doing when I use the tool. This way, everything
 will be straightforward for the user! I just want to ensure that my next steps are organized and clear. Let’s get started!

 I’ll search the web for “test” to check that web search is working.


 search "test"
 3 sources
 **Provider:** exa

 # Meaning of test in English test noun [ C ] us Listen to the American English pronunciation / test/ uk Listen to the British
 English pronunciation / test/ A1 a way of discovering, by questions or practical activities, what someone knows, or what someone or
 something can do or is like: The class are taking/having/doing a spelling test today. She had to take/do an aptitude test before she
 got the job. B1 a medical examination of part of your body in order to find out how health...


 Added the toolset web_search.

 Web search is working. It returned results for “test,” including the Cambridge Dictionary definition.

 Session exported to: /home/fira/foo.jsonl

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
↑9 ↓152 R4.6k W2.9k CH79.6% $0.000 0.3%/1.1M (auto)                                                         openai/gpt-6-luna • medium
toolsets: 6 on 0 ask 0 off sandboxes:off filesystem:off PROJECT ONLY toolsets: 6 on 0 ask 0 off sandboxes:off filesystem:off PROJEC...
```

```jsonl
{"type":"session","version":3,"id":"01a202c9-56fd-7581-acb2-a528eaba1f37","timestamp":"2026-11-22T10:28:41.848Z","cwd":"/home/fira"}
{"type":"model_change","id":"9d450ca6","parentId":null,"timestamp":"2026-11-22T10:24:41.337Z","provider":"openrouter","modelId":"moonshotai/kimi-k2.7-code"}
{"type":"thinking_level_change","id":"2f6dbbd9","parentId":"9d450ca6","timestamp":"2026-11-22T10:24:41.337Z","thinkingLevel":"medium"}
{"type":"model_change","id":"e54d9078","parentId":"2f6dbbd9","timestamp":"2026-11-22T10:25:34.548Z","provider":"openrouter","modelId":"openai/gpt-6-luna"}
{"type":"model_change","id":"da6c96de","parentId":"e54d9078","timestamp":"2026-11-22T10:25:39.366Z","provider":"openrouter","modelId":"openai/gpt-6-luna"}
{"type":"message","id":"bf8e8bac","parentId":"da6c96de","timestamp":"2026-11-22T10:26:28.318Z","message":{"role":"system","content":"","sections":{"preamble":"You are a coding assistant running inside pi, a coding agent harness. Help users inspect files, run commands, and modify code.","tools":"<tools>\n- bash: Execute bash commands (ls, grep, find, etc.)\n- web_search: Web research. Prefer {queries:[...]} with 2-4 varied angles; omit provider unless overriding the default.\n- source_check: Gather source evidence with passage citations for a claim.\n- fetch_content: Use to fetch URL content, direct images, GitHub repos, and videos.\n- get_search_content: Use after web_search, source_check, or fetch_content to read stored content; findText finds passages without paging.\n- permissions: Read or change toolsets, path scope, and sandboxes (asks the user to confirm)\n\nAdditional tools may be available.\n</tools>","rules":"<rules>\n- Use bash for file operations like ls, rg, find\n- You can inspect PI_* environment variables for current model and session details.\n- Before each ask tool call, state the action and its specific purpose, including in subagents. Call the tool directly. Approval resumes that same call.\n- For off tools, request set_toolset only if the permissions toolset is on. Never bypass a refusal.\n- If a subagent uses ask_parent for a permission change, call permissions with the requested action and wait for user consent. Resume the child with the result. A child request is not user consent.\n- Be concise in your responses\n- Show file paths clearly when working with files\n</rules>","docs":"<docs>\nPi documentation (read only when the user asks about the harness itself, its SDK, extensions, themes, skills, or TUI):\n- Main documentation: /home/fira/.bun/install/global/node_modules/@earendil-works/pi-coding-agent/README.md\n- Additional docs: /home/fira/.bun/install/global/node_modules/@earendil-works/pi-coding-agent/docs\n- Examples: /home/fira/.bun/install/global/node_modules/@earendil-works/pi-coding-agent/examples (extensions, custom tools, SDK)\n- When reading pi docs or examples, resolve docs/... under Additional docs and examples/... under Examples, not the current working directory\n- When asked about: extensions (docs/extensions.md, examples/extensions/), themes (docs/themes.md), skills (docs/skills.md), prompt templates (docs/prompt-templates.md), TUI components (docs/tui.md), keybindings (docs/keybindings.md), SDK integrations (docs/sdk.md), custom providers (docs/custom-provider.md), adding models (docs/models.md), packages (docs/packages.md), environment variables (docs/environment-variables.md), MCP servers (docs/mcp.md), codemode scripts and non-LLM models such as classifiers and image models (docs/codemode.md)\n- Before implementing harness changes, read the relevant docs and examples in full, following related cross-references.\n</docs>","cwd":"<cwd>\n/home/fira\n</cwd>"},"timestamp":1795343188314,"toolsAdded":[{"name":"read","description":"Read the contents of a file. Supports text files and images (jpg, png, gif, webp, bmp). Images are sent as attachments. For text files, output is truncated to 2000 lines or 50KB (whichever is hit first). Use offset/limit for large files. When you need the full file, continue with offset until complete.","parameters":{"type":"object","required":["path"],"properties":{"path":{"type":"string","description":"Path to the file to read (relative or absolute)"},"offset":{"type":"number","description":"Line number to start reading from (1-indexed)"},"limit":{"type":"number","description":"Maximum number of lines to read"}}},"constrainedSampling":{"type":"json_schema","strict":"prefer"}},{"name":"bash","description":"Execute a bash command in the current working directory. Returns stdout and stderr. Output is truncated to last 2000 lines or 50KB (whichever is hit first). If truncated, full output is saved to a temp file. Optionally provide a timeout in seconds.","parameters":{"type":"object","required":["command"],"properties":{"command":{"type":"string","description":"Shell command to execute"},"timeout":{"type":"number","description":"Timeout in seconds (optional, no default timeout)"}}},"constrainedSampling":{"type":"json_schema","strict":"prefer"}},{"name":"edit","description":"Edit a single file using exact text replacement. Every edits[].oldText must match a unique, non-overlapping region of the original file. If two changes affect the same block or nearby lines, merge them into one edit instead of emitting overlapping edits. Do not include large unchanged regions just to connect distant changes.","parameters":{"type":"object","required":["path","edits"],"properties":{"path":{"type":"string","description":"Path to the file to edit (relative or absolute)"},"edits":{"type":"array","items":{"type":"object","required":["oldText","newText"],"properties":{"oldText":{"type":"string","description":"Exact text for one targeted replacement. It must be unique in the original file and must not overlap with any other edits[].oldText in the same call."},"newText":{"type":"string","description":"Replacement text for this targeted edit."}}},"description":"One or more targeted replacements. Each edit is matched against the original file, not incrementally. Do not include overlapping or nested edits. If two changes touch the same block or nearby lines, merge them into one edit instead."}}},"constrainedSampling":{"type":"json_schema","strict":"prefer"}},{"name":"write","description":"Write content to a file. Creates the file if it doesn't exist, overwrites if it does. Automatically creates parent directories.","parameters":{"type":"object","required":["path","content"],"properties":{"path":{"type":"string","description":"Path to the file to write (relative or absolute)"},"content":{"type":"string","description":"Content to write to the file"}}},"constrainedSampling":{"type":"json_schema","strict":"prefer"}},{"name":"web_search","description":"Search the web for sources or answers. Full results are stored for retrieval with get_search_content by responseId. Prefer 2-4 varied queries.","parameters":{"type":"object","properties":{"query":{"type":"string"},"queries":{"type":"array","items":{"type":"string"},"description":"Run concurrently (up to three at a time); vary the angle"},"numResults":{"type":"integer","minimum":1,"maximum":20,"description":"Default 5"},"includeContent":{"type":"boolean","description":"Also fetch full page content"},"recencyFilter":{"type":"string","enum":["day","week","month","year"]},"domainFilter":{"type":"array","items":{"type":"string"},"description":"Prefix - to exclude"},"category":{"type":"string","description":"Exa only, e.g. news"},"model":{"type":"string","description":"Model ID; needs provider openai, gemini, xai, mistral"},"provider":{"type":"string","description":"auto, all, a name, or comma-separated names; omit for the configured default."},"workflow":{"type":"string","enum":["none","summary-review","auto-summary"],"description":"Default none; summary-review opens the curator; auto-summary summarizes"},"proxy":{"type":"string","description":"Proxy URL; omit by default (env proxy vars ignored); \"\" forces direct"}}}},{"name":"source_check","description":"Gather cited web passages about a claim for manual review.","parameters":{"type":"object","required":["claim"],"properties":{"claim":{"type":"string","description":"Assertion to check"},"queries":{"type":"array","items":{"type":"string"},"description":"Default: the claim"},"numResults":{"type":"integer","minimum":1,"maximum":20,"description":"Default 5"},"fetchContent":{"type":"boolean","description":"Fetch top 5 pages for exact passages"},"recencyFilter":{"type":"string","enum":["day","week","month","year"]},"domainFilter":{"type":"array","items":{"type":"string"},"description":"Prefix - to exclude"},"provider":{"type":"string","description":"auto, all, a name, or comma-separated names; omit for the configured default."},"proxy":{"type":"string","description":"Proxy URL; omit by default; \"\" forces direct"}}}},{"name":"fetch_content","description":"Fetch web pages, PDFs, GitHub repos, images, YouTube and local video, as the mode allows. Full content is stored for retrieval with get_search_content.","parameters":{"type":"object","properties":{"url":{"type":"string"},"urls":{"type":"array","items":{"type":"string"}},"forceClone":{"type":"boolean","description":"Clone GitHub repos over the size limit"},"prompt":{"type":"string","description":"Question for video analysis or answer mode"},"mode":{"type":"string","enum":["readable","raw","answer"],"description":"readable (default): extract readable content as markdown; raw: return the exact textual body using direct HTTP only; answer: answer a prompt using only fetched content."},"answerModel":{"type":"string","description":"provider/model-id for answer mode"},"timestamp":{"type":"string","description":"Video frame time ('1:23:45') or range ('23:41-25:00'); needs ffmpeg"},"frames":{"type":"integer","minimum":1,"maximum":12,"description":"Frames over a range, 5s apart from one time, or over the video"},"model":{"type":"string","description":"Gemini model for video analysis"},"auth":{"anyOf":[{"type":"string"},{"type":"boolean"}],"description":"authFetch profile name, or true for the only one"},"proxy":{"type":"string","description":"Proxy URL; omit by default; \"\" forces direct"},"redirects":{"type":"string","enum":["same-origin"],"description":"Refuse cross-origin redirects"}}}},{"name":"get_search_content","description":"Page through or search stored content from web_search, source_check, or fetch_content by responseId.","parameters":{"type":"object","required":["responseId"],"properties":{"responseId":{"type":"string"},"query":{"type":"string"},"queryIndex":{"type":"integer","minimum":0},"url":{"type":"string"},"urlIndex":{"type":"integer","minimum":0},"offset":{"type":"integer","minimum":0},"limit":{"type":"integer","minimum":1,"maximum":30000,"description":"Characters, default the maximum"},"findText":{"anyOf":[{"type":"string","minLength":1,"maxLength":500},{"type":"array","items":{"type":"string","minLength":1,"maxLength":500},"minItems":1,"maxItems":10}],"description":"Find passages instead of paging"},"findMode":{"type":"string","enum":["exact","case-insensitive","fuzzy"]}}}},{"name":"permissions","description":"Read or change the toolsets, path scope, and bash sandboxes. Every change asks the user to confirm.","parameters":{"type":"object","required":["action"],"properties":{"action":{"anyOf":[{"type":"string","const":"status"},{"type":"string","const":"request_tool"},{"type":"string","const":"set_scope"},{"type":"string","const":"add_path"},{"type":"string","const":"remove_path"},{"type":"string","const":"add_toolset"},{"type":"string","const":"remove_toolset"},{"type":"string","const":"set_toolset"},{"type":"string","const":"set_sandbox"},{"type":"string","const":"set_unsandboxed_tools"},{"type":"string","const":"add_mount"},{"type":"string","const":"remove_mount"},{"type":"string","const":"save_defaults"}],"description":"Action to run. Read status first when the reason for a block is unclear."},"enabled":{"type":"boolean","description":"Legacy on/off value for set_toolset, or value for set_sandbox."},"mode":{"anyOf":[{"type":"string","const":"off"},{"type":"string","const":"on"},{"type":"string","const":"ask"},{"type":"string","const":"read"},{"type":"string","const":"read+write"}],"description":"set_toolset: off, on, ask. Filesystem: off, read, read+write. Use mode or enabled, not both."},"tool":{"type":"string","description":"Target tool name for request_tool."},"input":{"type":"object","patternProperties":{"^.*$":{}},"description":"Exact target arguments for request_tool."},"reason":{"type":"string","description":"What the call does and why it is needed."},"scope":{"anyOf":[{"type":"string","const":"project"},{"type":"string","const":"everywhere"},{"type":"string","const":"custom"}],"description":"project: project root only. custom: project root plus saved extra paths. everywhere: no path limit."},"path":{"type":"string","description":"Directory for add_path, remove_path, add_mount, and remove_mount."},"writable":{"type":"boolean","description":"add_mount: true mounts the directory read-write, so the sandboxed tools can change it."},"name":{"type":"string","description":"Toolset name for add_toolset, remove_toolset, and set_toolset."},"patterns":{"type":"array","items":{"type":"string"},"description":"Regular expression sources for add_toolset, tested against tool names."},"sandbox":{"anyOf":[{"type":"string","const":"filesystem"},{"type":"string","const":"no_network"}],"description":"Sandbox key for set_sandbox."}}}}]}}
{"type":"message","id":"63d1e836","parentId":"bf8e8bac","timestamp":"2026-11-22T10:26:28.319Z","message":{"role":"user","content":[{"type":"text","text":"try web search"}],"timestamp":1795343188313}}
{"type":"message","id":"c75d7fd3","parentId":"63d1e836","timestamp":"2026-11-22T10:26:31.346Z","message":{"role":"assistant","content":[{"type":"thinking","thinking":"","thinkingSignature":"[{\"type\":\"reasoning.encrypted\",\"data\":\"gAAAAABrAsNXj13cYUrrdwPTJOF-g-EL0X1WB62YyC1uqUiDOr3ZBS--LQSxIuNBkSkuXYAeIW8rynISq0B4Qko8_A_R_NTijaGPnBPEYJIam5LBkddHSI-b9go8vGEXpm00jU4SxNjFd7Gd8WBbZL8MCGPIkXkM4dQE088wBbQHyOz4ZBRJ62jxVGAIDjQdpVaBUEz6fpUdwYq11sJuYD94YX1moTu6jn3az5jC5dqvEQw_P10Iqv_tJv8R-tbpcFcfTKH-dpVjhIm0WCTjP7zQhx4kFLUYiyew0ulS7GLT2Bh2JuWah3xNP63NWdMCLp46v4M65Yu0fY9MvT-ofSgrXsIVHqiy8NlG03sJi0lxUXv_6IKh2gdA_ed8BZdSwEZ9aEqo7robEy7BgXkB_lYDTUnDTzxp1Cvx_X1NaxOKaXx8OcTNgvznpePM1z8t7YzEmezl55YP5qy-L6r7PXlI3izkl4GwNnRMv384Xf91yTpDAv2nGOU4Ljsii8i1PLqXISIAPFM7KqUMcj1sDDHG6tLaDCXPEfZZ_bgmvmcgdMKuHZsF6WOrcQPpWQRnR-jCd1VDjOWFzDGAvMY3ziBBvIvVnaY_a5r_zb6GHCYoXsAxluK5YMOGp8yAMAMLSHkL3TPfa5PpzWgyranXEa-IqXrP7aES0SvuZjUtI516zfphhXYkLtq6_yrb3vxXRGauUT4PHq_XFchwKvwOpoV2Btrux8zKOnZAoy--t6n7dsMTTozwBGKPKIq64FOEaNis1n0gih9y6QlPdvs2DUIxHf3Ohbk_qbAb2nr9Qz2VHTNYIdUpqVD0P03rQyt-_yzzWGe6a199WOUoMqwqolqBVVMS0opfhVKUhE_WLdK-EzeeEZUiKRKRWSvRL1tNgjxdJsptQtxmzwwH3L1PozbtcDO0cSz0sLpnQ8JZ-le70CiSbT49_ZJJOTMeRewJ5hwdmqYByJZADq2AySO3ji2UjwMHLoE9xtJV_F_2SLFe5B9KmEavzPedH9D0GUctD3Vzt6-bHN5Ljqc8HIk6Ek9mEfWWcs0ypEkZZCRn6_bgP6Pj4JHKurWvnrEFHrXrHlhdssfQjCA_WaCWc4NgQdcEVZN3Vx20AJ9F0PoVw5TMxyS-OeioxV9mEL624TPloDSIWu4BB6BrOSraPED9tIEse56hvObvfMOsG4wOyT5EBYzZNYG9YuBOw8ypkvlfbeERDcigTx2qZYx-w39NsFp8dTXtGaAcOHdBCy0wrpLcS5adYstu0QkFGTbgscUQmWOiA0k_JdXaWur8HEwQ-FVCUmckGCLk0tdQeA19C_aaU9qamMaBLWkrD13tPSi7B43CsxJ3SqyJjD2hrmJoPLPDE_sfGMCQX7M2RNj6hCybguUEMd6cm5Xz9K_e52zfDxhKdTkuV22sCrJ9yoplrEmjz6t6mV4awu_FedUg9zHx3Y-CNxW1xcvEwUGqswm6KDyzDtex5IaMZgHYv1UmIWji4OQyDpKq_xE0NW0sBl57h5QhNRL2tHYBOwq8uSI5WsnEXJVOGoxJcOwCObV6hXz6W3meFbHKwqmfpM2F6SFv2-Sj_uXs6uVtxGMM6yOmeBCkKOHg1nH88bfe4tHb-TvPs2X3-GzyUnrfbX1hZXF-kE6m-SODvs4_vY7_UmIGA1gcqmiCK6UyU1_6rrdvYFC-OtK6WqRVmqALb-snl1SEb-Iv5Vnse-Vv4YMgp51MfwJnX_fX-7RPFnPx3D-ZnVNuzykB0fN7djiZm_Cwm_gmYaVx5UWT3LkNRA7VQK_HOfSiNXXxEQQcKphej5aaDOmzSUODJDXHb57UO-fGMKlms8P67ViJbVMDa5wo_9SiOyKU0rFQwZhnhpLk6fWrJHuFoGxUq12r_CQWyX65a-htaU7jRcJZ6LWhSkwRvxNBUuFavqLr4mkSy0UhXzRxaaQgp6dMN-TAqkOny6m1uV_8w1cNFihm0TW1W3i70ldjNE1QADVwCVGRSoOE6lVxB0hD0K75Brl2Yh4YzMFozyvxbyI83LSWJhbIylvbN2JZ8_m84P0gO3YTngUNlzX3ihVnNJry5gwekA==.eyJlbmRwb2ludF9zbHVnIjoib3BlbmFpL2dwdC02LWx1bmEtMjAyNjA5MjJ8b3BlbmFpIn0\",\"format\":\"openai-responses-v1\",\"id\":\"rs_04dbf94c29c2fc94016b02c356177887d19e291d5c1e93c5f6\",\"index\":0}]"},{"type":"text","text":"What would you like me to search for?"}],"api":"openai-completions","provider":"openrouter","model":"openai/gpt-6-luna","usage":{"input":3,"output":40,"cacheRead":0,"cacheWrite":2293,"reasoning":25,"totalTokens":2336,"cost":{"input":3.0000000000000004e-7,"output":0.000019999999999999998,"cacheRead":0,"cacheWrite":0.000286625,"total":0.000306925,"totalFromProvider":true}},"stopReason":"stop","timestamp":1795343188357,"responseId":"gen-1795343189-kUrJuX0WKcB0VKYMywNV","rawStopReason":"stop","durationMs":2989,"thinkingLevel":"medium"}}
{"type":"message","id":"3e0960f8","parentId":"c75d7fd3","timestamp":"2026-11-22T10:26:34.049Z","message":{"role":"user","content":[{"type":"text","text":"test"}],"timestamp":1795343194047}}
{"type":"message","id":"ae734ea1","parentId":"3e0960f8","timestamp":"2026-11-22T10:26:36.833Z","message":{"role":"assistant","content":[{"type":"thinking","thinking":"**Performing a web search**\n\nI’m considering running a web search query with the term \"test.\" Since I already tried a web search, I’ll make sure to provide a clear purpose before calling the tool. I’ll add commentary text to explain what I’m doing when I use the tool. This way, everything will be straightforward for the user! I just want to ensure that my next steps are organized and clear. Let’s get started!","thinkingSignature":"[{\"type\":\"reasoning.summary\",\"summary\":\"**Performing a web search**\\n\\nI’m considering running a web search query with the term \\\"test.\\\" Since I already tried a web search, I’ll make sure to provide a clear purpose before calling the tool. I’ll add commentary text to explain what I’m doing when I use the tool. This way, everything will be straightforward for the user! I just want to ensure that my next steps are organized and clear. Let’s get started!\",\"format\":\"openai-responses-v1\",\"index\":0},{\"type\":\"reasoning.encrypted\",\"data\":\"gAAAAABrAsNcDFj1A-4d5hQSwjxwhpQSJxyRqWWmlz8L-LSY6hn35iSHpFNnnKs997nFdcMBspgD_fez7N3uI5_YTm_HQrcdS8pK41P_hfdbjnNS3UV5YaueeGtPg5LbXPnudfxy7zjoJ4vzuMo-vJ2233qYtXkj43QuIFbeA5ceu743tK3AdNUpz6ufTjuq498eYOPGCGjAvxOeOaWq5JKQRoZqSG_x2WPJoRLe23d_PfwYDeTNk00rVNjct91OLUIV0cXFSVNSEwK9ob6Ofv8PEpe0boi-bmWU2ct11-EwuU4uz5iAhHfmXFbmSEwHfk5HiPQJokPXOjwf6eMOMdoUrB7QYue3WhCvQEHlFhLBJKa5lIQMP2iqcjhl4rM1l4v1vS7NdwsUmU5mwrUElKwF52v_MNmGtgI_Qc4zlEnaezp6l67XCWQtvAqVqVgLDbP7OMW3EL4x182yg-iTORlfvse5B7Za_Vd9hny5JieJXeQ_m00ngTlUlSGAjCklaLdHH2SrGP9-ayJRSkMoQQTDckDqTqaA6JiySpOM-2kxur0kN6B5XXhEYWMsIBZclse4BYFJjDjdVTySPWL3tyTqiuGBahYoSqefKpLrYaDM5DqvSVh7j7pz1qCAYcvkSJRwfGJGYEvOYjAyjeihq3i8Qn-y57sEb2k28Xvjtxg0ce4d6bhuhW4OAYrDtMjCLM3F4KMWGLHaMTcyKW8w5EQ-feD3cV41qx01TLIBlnSGa9aE4kKpOGvbE7qQsgNUIdNjlPdrslqtb2stwxsrM2iP1BMh60eLlvDoQeFRoXCc5f2veQ2F0YuxIPqpD661ZFwMT1Y-9VqHdoPozJ-PPkbt-wYxADa6NMTos1iJKavmyKaftQAZpA6SRqke76Jg4yQooEg07DANL0u24D1nLYK6ma8aGjXbM8-7TH-ilUjjhhcBIk1sge1e_g5QwXAHiNUEhduhprUZpnWDXEeUD5ItKThpbzQHoweQ3UcA1zu_jDegMf_mpmO-XlKZYMxVcwZEDll2cU5HHOHCbEM-cjZWAcB2cNu0vKXF1ulX0d7TtQbIXwU7YFIZbE22df1T7H5J7dq6eRiy4VFBcIojV-SRNBYq2N854akXVnykXDCkKvr6-Y0590MU-weXmw72p7LCz_Ds7lwizek1c-4jA-Vt2VpMaHtxjfdwRO57sVyVS0cr-Xz8LymfxndZlWh6tT1HzHfW49Ia0DQS03FMSnpOBiUbT0hAKT30ciblLFTeENiNz7-uwCwXaIj6i-OMMR8X9rTlf_FmppdoXlM9gC7SuzQqSczD4eJYvcaspiE5pmlpiJT1Rr-bRVyR0zivvrtHZMe-rHWNKxc2QFa6P-nt3JEaoW3Zq_SYGgjYH_RDhBDAahlaA-KehaOlbfu9oQeK5jA1KiRSukKk7gWbMBbg6oKJ6RipAkCJ78suuvj3L9QIsSZvoByHNt9PnpvW9e-ZPTOlQxijxQg4JwURXF_tiKaw1RqbBZ-iijYAYAyQak4dzQ2rRNngZTvJOlA7Q6dKGxaucbtnzJ-6oU2wcnREkNpsYbg-Pmf0yNaJqszXlfbb_AK8lSPVUwY478-75sd1eJf-LpY4NhuoLvnuTTwkKiaqHO516Dxt75NeWwgSKt5qnrqda3H0gFRRqlvS56ylK0lzVmbYwf5B-n_69k8Duoa4yFTVtFWnYo8wUEQGT3UZMIel4-mOsDQyBEYBqwnO4WVqbiqGvS6Lg_dd_Ywek-PpD_LpSx1zK6JVKLsvBxaHewb2xESfhqSMccY7M61eZQTm1cL_LOu_6lSbMlAp8ttMwvlKBvdc3onoMXgKViWbP97V1IpWwf4BHRG9-u1IPTq8GyEtD53A9rAZfdmNd8FKxeunifmDJOp_Qv6REbAgP7UO5PQXMtdb_v3iVSP7W6qRvRBCa47LgROOO_OhQhBC4m2CKvGz5q5O7xys2woWDF78MDXIJLEjRgW7h7tVpZzgYvQIUMu0JymAGBOwOoE07HLFIASU2vTeOJu7iRhwZQeZFYrmuHSiWQeWmA4x4Hk7AqV7KJ_oQdm4p5OaBrfYN7d59u0XQu6VOW6tqB0_G9nUNKNYRm7ygX-080ABnW1yIaMB-tqx8fbzbiIyCpdtUtrkhudNm_br4i3DPYDzX1BbresVaAL44FzbdpRuGdcFMVFKEGqxi5-ugZTqShxStMWfVgHLvTnc9GLTVjc5G9LJ0MmZTCB8QbCt5QWfknVFqRuNm7bFqEmTeK8l8eKvnfCVzG24jbv8rqkbTeOBmdqCT86My4SFBsDghFnWEGTw6KMl.eyJlbmRwb2ludF9zbHVnIjoib3BlbmFpL2dwdC02LWx1bmEtMjAyNjA5MjJ8b3BlbmFpIn0\",\"format\":\"openai-responses-v1\",\"id\":\"rs_04dbf94c29c2fc94016b02c35b324c87d18fc03a3f8f69c333\",\"index\":1}]"},{"type":"text","text":"I’ll search the web for “test” to check that web search is working."},{"type":"toolCall","id":"call_5d6a8d83ea924f489d9616bf57fb223a","name":"web_search","arguments":{"query":"test","numResults":3}}],"api":"openai-completions","provider":"openrouter","model":"openai/gpt-6-luna","usage":{"input":3,"output":90,"cacheRead":2293,"cacheWrite":47,"reasoning":41,"totalTokens":2433,"cost":{"input":3.0000000000000004e-7,"output":0.000044999999999999996,"cacheRead":0.00002293,"cacheWrite":0.000005875,"total":0.000074105,"totalFromProvider":true}},"stopReason":"toolUse","timestamp":1795343194051,"responseId":"gen-1795343194-x9uTMzmuNKxheeBZkp7B","rawStopReason":"tool_calls","durationMs":2782,"thinkingLevel":"medium"}}
{"type":"custom","customType":"web-search-results","data":{"id":"mwrozpj0phbq4k","type":"search","timestamp":1795343208444,"queries":[{"query":"test","answer":"# Meaning of test in English test noun [ C ] us Listen to the American English pronunciation / test/ uk Listen to the British English pronunciation / test/ A1 a way of discovering, by questions or practical activities, what someone knows, or what someone or something can do or is like: The class are taking/having/doing a spelling test today. She had to take/do an aptitude test before she got the job. B1 a medical examination of part of your body in order to find out how healthy it is or what is \nSource: TEST | definition in the Cambridge English Dictionary (https://dictionary.cambridge.org/us/dictionary/english/test)\nAuthors: Cambridge Dictionary\n\nTest(s), testing, or TEST most often refers to: - Test (assessment), an educational assessment intended to measure the respondents' knowledge or other abilities ... ### Computing - .test, a reserved top-level domain ... ### Other uses in science and technology - Experiment, a procedure carried out in order to test a hypothesis - Statistical hypothesis test, techniques to reach conclusions about probabilistic behavior - Metal testing - Mechanical testing - Proof test, a stress test to demonstrate\nSource: Test (https://en.wikipedia.org/wiki/Test)\nPublished: 2026-09-29\n\nAn examination (exam or evaluation), or test, is an educational assessment intended to measure a test-taker's knowledge, skill, aptitude, physical fitness, or classification in many other topics (e.g., beliefs or personal opinion). [1] A test may be administered verbally, on paper, on a computer, or in a predetermined area that requires a test taker to demonstrate or perform a set of skills. Tests vary in style, rigor and requirements. There is no general consensus or invariable standard for tes\nSource: Exam (https://en.wikipedia.org/wiki/Test_(assessment))","results":[{"title":"TEST | definition in the Cambridge English Dictionary","url":"https://dictionary.cambridge.org/us/dictionary/english/test","snippet":""},{"title":"Test","url":"https://en.wikipedia.org/wiki/Test","snippet":""},{"title":"Exam","url":"https://en.wikipedia.org/wiki/Test_(assessment)","snippet":""}],"error":null,"provider":"exa","providers":["exa"]}]},"id":"967fcb13","parentId":"ae734ea1","timestamp":"2026-11-22T10:26:48.444Z"}
{"type":"message","id":"166aebf2","parentId":"967fcb13","timestamp":"2026-11-22T10:26:48.445Z","message":{"role":"toolResult","toolCallId":"call_5d6a8d83ea924f489d9616bf57fb223a","toolName":"web_search","content":[{"type":"text","text":"**Provider:** exa\n\n# Meaning of test in English test noun [ C ] us Listen to the American English pronunciation / test/ uk Listen to the British English pronunciation / test/ A1 a way of discovering, by questions or practical activities, what someone knows, or what someone or something can do or is like: The class are taking/having/doing a spelling test today. She had to take/do an aptitude test before she got the job. B1 a medical examination of part of your body in order to find out how healthy it is or what is \nSource: TEST | definition in the Cambridge English Dictionary (https://dictionary.cambridge.org/us/dictionary/english/test)\nAuthors: Cambridge Dictionary\n\nTest(s), testing, or TEST most often refers to: - Test (assessment), an educational assessment intended to measure the respondents' knowledge or other abilities ... ### Computing - .test, a reserved top-level domain ... ### Other uses in science and technology - Experiment, a procedure carried out in order to test a hypothesis - Statistical hypothesis test, techniques to reach conclusions about probabilistic behavior - Metal testing - Mechanical testing - Proof test, a stress test to demonstrate\nSource: Test (https://en.wikipedia.org/wiki/Test)\nPublished: 2026-09-29\n\nAn examination (exam or evaluation), or test, is an educational assessment intended to measure a test-taker's knowledge, skill, aptitude, physical fitness, or classification in many other topics (e.g., beliefs or personal opinion). [1] A test may be administered verbally, on paper, on a computer, or in a predetermined area that requires a test taker to demonstrate or perform a set of skills. Tests vary in style, rigor and requirements. There is no general consensus or invariable standard for tes\nSource: Exam (https://en.wikipedia.org/wiki/Test_(assessment))\n\n---\n\n**Sources:**\n1. TEST | definition in the Cambridge English Dictionary\n   https://dictionary.cambridge.org/us/dictionary/english/test\n\n2. Test\n   https://en.wikipedia.org/wiki/Test\n\n3. Exam\n   https://en.wikipedia.org/wiki/Test_(assessment)\n---\nFull search results are stored as responseId \"mwrozpj0phbq4k\". Use get_search_content({ responseId: \"mwrozpj0phbq4k\", queryIndex: 0, offset: 0, limit: 30000 }) to retrieve the first bounded page."}],"details":{"queries":["test"],"queryCount":1,"successfulQueries":1,"totalResults":3,"includeContent":false,"fetchId":null,"searchId":"mwrozpj0phbq4k","queryProviders":[{"query":"test","providers":["exa"]}],"truncated":false,"originalChars":2058,"returnedChars":2058,"omittedChars":0},"isError":false,"durationMs":717,"timestamp":1795343208445}}
{"type":"message","id":"e5782268","parentId":"166aebf2","timestamp":"2026-11-22T10:26:49.986Z","message":{"role":"assistant","content":[{"type":"text","text":"Web search is working. It returned results for “test,” including the Cambridge Dictionary definition."}],"api":"openai-completions","provider":"openrouter","model":"openai/gpt-6-luna","usage":{"input":3,"output":22,"cacheRead":2340,"cacheWrite":598,"reasoning":0,"totalTokens":2963,"cost":{"input":3.0000000000000004e-7,"output":0.000011,"cacheRead":0.0000234,"cacheWrite":0.00007475,"total":0.00010945,"totalFromProvider":true}},"stopReason":"stop","timestamp":1795343208448,"responseId":"gen-1795343209-iyFFEwZyX3JIc0OUG0wo","rawStopReason":"stop","durationMs":1538,"thinkingLevel":"medium"}}
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

[Extensions]
  pi-toolset-permissions:src, pi-web-access:dist


 what tools do you have


 Thinking...

 I can:

 - Inspect and modify files: read, write, and make targeted edits.
 - Run shell commands: list/search files, run tests, and other commands in the workspace.
 - Research the web: search for sources, check claims, and fetch pages or other content.
 - Manage tool permissions: check or request changes to available tools and workspace access.

 I can also run independent tool calls in parallel.

 A new session starts from these settings. The template is /home/fira/.pi/agent/permissions.json.

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
↑3 ↓140 W2.3k CH0.0% $0.000 0.2%/1.1M (auto)                                                                openai/gpt-6-luna • medium
toolsets: 4 on 1 ask 0 off sandboxes:off filesystem:off EVERYWHERE toolsets: 4 on 1 ask 0 off sandboxes:off filesystem:off EVERYWHERE
```

```
 A new session starts from these settings. The template is /home/fira/.pi/agent/permissions.json.
 Permissions

 Toolsets
   > read                    [ON] 4 patterns
     write                   [ASK] 4 patterns
     execute                 [ON] 4 patterns
     subagent                [ON] 1 pattern
     permissions             [ON] 1 pattern

 Sandboxes (ALL tools · Linux)
     Applies to all tools except unsandboxed tools.
     Filesystem              [OFF] [disabled: requires project or custom scope]
     Network                 [ALLOW CONNECTIONS]
     Filesystem is disabled. Select project or custom scope to use it.
     Unsandboxed tools        0 patterns
     Unsandboxed tools run on the host even while a layer is on.
     Custom mounts            0 mounts
     A mounted directory is visible to the sandboxed tools.

 Scope
     Scope defines the paths exposed to the read and write toolsets and to the sandboxed tools.
     Modality                [EVERYWHERE]
     Custom Paths             0 extra paths

 Defaults
     Make these settings default
     New sessions start from /home/fira/.pi/agent/permissions.json

 Toolsets: OFF blocked · ON no request · ASK approve each call
 The permissions toolset has only OFF and ON.
 If several toolsets match, ON takes priority over ASK and OFF.
 j/k move · l enter · h back · space off → on → ask
~
↑3 ↓140 W2.3k CH0.0% $0.000 0.2%/1.1M (auto)                                                                openai/gpt-6-luna • medium
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

[Extensions]
  pi-bar:status-footer.ts, pi-toolset-permissions:src, pi-web-access:dist

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gpt-6-luna ❯ medium ❯ 0.0% / 1.1M ❯ toolsets: 4 on 1 ask 0 off sandboxes:off filesystem:off EVERYWHERE ❯ +1
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

[Extensions]
  pi-bar:status-footer.ts, pi-toolset-permissions:src, pi-web-access:dist


 Opening web search curator...


 [web-search-results]

 No completed search results were available when the curator session finished.

 Sources
 - None

 ────────────────────────────────────────────────────────────────────────────────

 Full search results are stored as responseId "mwrpjz3sb4wnnz". Use get_search_content({ responseId: "mwrpjz3sb4wnnz", queryIndex: 0,
 offset: 0, limit: 30000 }) to retrieve the first bounded page.


 Thinking...

 I’ll retrieve the stored results for query 0 so we can see what the curator session found.


 get_content queryIndex=0 @ 0
  Index out of range


 There are no indexed queries in that response, so I’ll check whether it contains any stored content without selecting a query.


 get_content offset=0
  No query specified


 Operation aborted

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gpt-6-luna  ❯  medium  ❯  0.3% / 1.1M
```

```
pi-bar settings
Choose what appears in your footer. Changes save immediately.

>

→ Model                   shown
  Show provider           hidden
  Thinking level          shown
  Context usage           shown
  Cache hit ratio         hidden
  Estimated session cost  hidden
  Session token totals    hidden
  Current directory       hidden
  Progress update         shown
  Progress model          auto
  Extension badges        hidden
  Choose badges           2/2 enabled

  Show the current chat model's name. This does not change your model.

  Type to search · Enter/Space to change · Esc to close
gpt-6-luna  ❯  medium  ❯  0.3% / 1.1M
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


[Context]
  .pi/agent/AGENTS.md

[Extensions]
  pi-bar:status-footer.ts, pi-toolset-permissions:src, pi-web-access:dist


 can you see some coding style guide


 Thinking...

 Yes. The project style guide is in /home/fira/.pi/agent/AGENTS.md. It says to use TypeScript, Bun, and Vite; prefer snake_case
 naming, functional and modular code, function declarations for named functions, and type rather than interface. It also favors
 self-explanatory code over comments.

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gpt-6-luna  ❯  medium  ❯  0.2% / 1.1M
```

```
 ~ % link
Create and check symlinks

Usage:
  link <source> <target>    Create symlink
  link <target>             Check symlink
  link [flag]               Check version or help

Options:
  -v, --version             Print version
  -h, --help                Print help
 ~ % link /home/fira/Documents/f/humility/contributing.md ~/.pi/agent/AGENTS.md
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


[Context]
  ~/.pi/agent/AGENTS.md

[Extensions]
  pi-bar:status-footer.ts, pi-toolset-permissions:src, pi-web-access:dist

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gpt-6-luna  ❯  medium  ❯  0.0% / 1.1M
```

```
 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


[Context]
  ~/.pi/agent/AGENTS.md

[Extensions]
  pi-bar:status-footer.ts, pi-toolset-permissions:src, pi-web-access:dist


 Default thinking level: off

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

Thinking Level

Shift+Tab cycles thinking levels in-session

>

→ ✓ off       No reasoning · default
    low       Light reasoning (~2k tokens)
    medium    Moderate reasoning (~8k tokens)
    high      Deep reasoning (~16k tokens)
    xhigh     Extra-high reasoning (~32k tokens)
    max       Maximum reasoning

  Enter to select · Ctrl+S to set as default · Escape/Ctrl+C to cancel
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gpt-6-luna  ❯  off  ❯  0.0% / 1.1M
```

```

 ▀▀█  v1.6.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


[Context]
  .pi/agent/AGENTS.md

[Extensions]
  pi-bar:status-footer.ts, pi-toolset-permissions:src, pi-usage-widget, pi-web-access:dist


──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─────────────────────────────────────────────────────────── Usage Settings ───────────────────────────────────────────────────────────
┌─ Live Preview - Hidden ────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 [ Global ] [ ● Summary ] [ ● Per Provider ] [ ● Per Model ] [ ● Provider & Model ]
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
▸ Default Widget Mode: Hidden ▶
  Time Scope: Today ▶
  Customize Widget Colors ▶
  Active Modes: Summary, Per Provider, Per Model, Provider & Model ▶

  Pi Hotkeys: Alt+U = Cycle time scope • Alt+Ctrl+U = Cycle display mode
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                     ← → tabs • ↑↓ select • ← → cycle • Enter open • Esc/q close
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
gpt-6-luna  ❯  off  ❯  0.0% / 1.1M
```

```

 what if you see ttft 2 sec on openrouter gpt 6 luna



 search 3 queries
   "OpenRouter GPT-6 Luna model ttft time to first token latency"
   "OpenRouter GPT 6 Luna latency"
   "OpenRouter model latency TTFT provider routing"
  3/3 queries, 15 sources (content ready)
  Providers used: Query 1: exa; Query 2: exa; Query 3: exa

  ... (16 more lines, 18 total, ctrl+o to expand)


 About 2 seconds can be normal for GPT-6 Luna via OpenRouter, especially if it’s one request rather than a persistent median.
 OpenRouter’s model page reports roughly 1–2 seconds median latency, depending on provider; the listed standard providers differ, and
 routing can choose among them. That page’s “latency” isn’t necessarily identical to your app’s TTFT, so treat it as context rather
 than a direct comparison. citeturnweb_search0turnweb_search1

 In this codebase, the app’s time_to_first_token starts just before fetch() and ends at the first nonempty content or reasoning
 delta. Thus, a measured 2 seconds includes the OpenRouter/provider response time and network/stream transit. I found no intentional
 delay in that path.

 If 2 seconds is consistent, compare a few requests with OpenRouter’s own request/provider details and your app’s recorded TTFT. If
 it is substantially higher than OpenRouter’s TTFT for the same prompt and conditions, investigate the request/network path;
 otherwise, provider routing, prompt size, or model-side processing is the likelier explanation. OpenRouter also documents provider
 routing preferences for prioritizing latency, though that can trade off against price or availability. citeturnweb_search2
```

# . thoughts

it copys on any selection, whether response or prompt.

---

idk why kimi 2.7 default.

---

i can not really inspect the exact sources and content in context for web search.

---

extensions are not first class citizens. they are usually prefixed w a nonsensical npm (or git) everywhere, and seems they are using npm directly, which is deprecated imo.

---

extension can inject badges. but on bar it's either shown or not. all extension badges. while badges of pi itself are surgical.

---

it's reasonable to recognize claude md by default.

it might not be good.

it's political and ugly.

---

slash seems to have no effect once you type some prompts.

i wonder.

---

doesnt feel thinking necessary.

it's more consistently reliable if you toggle it on though. maybe not a good tradeoff. idk. i may try.

---

i could make a plan.

i could permit their first edit.

i could not really code review. it's unformatted json w tons of `\n` in their write.

---

```jsonl
{"type":"thinking_level_change","id":"70d388b6","parentId":"c8638bee","timestamp":"2026-11-22T12:25:07.328Z","thinkingLevel":"off"}
```

why isnt timestamp number?!

---

the "single edit no match all" often gets in the way.

maybe unclean code issue.

---

they could not easily edit files > 200 lines for example.

---

interesting citation tokens.

# how to use pi agent like a pro

Using **Pi Agent** like a pro means embracing its minimalist philosophy—a tiny core of basic tools (`read`, `write`, `edit`, `bash`) paired with aggressive customization at the edges. Rather than relying on heavy built-in guardrails, power users treat Pi like a programmable editor (similar to Neovim) and tailor it directly to their workflow. [](https://www.youtube.com/watch?v=yAPKzHrx3eo)

Here are the best practices and power-user workflows to master Pi:

### 1\. Master Non-Linear Session Navigation

Unlike standard linear chat interfaces, Pi stores sessions as trees, allowing you to explore different coding paths without losing your original context. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)

* **Navigate history with `/tree`.** Jump back to any earlier message in your conversation, edit your prompt, and resubmit while preserving the alternate branch in the same session file. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)
* **Branch experiments with `/fork` and `/clone`.** Use `/fork` to start a new conversation branch from a previous message, or `/clone` to duplicate your current state before trying a risky refactor. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)
* **Multitask with `/resume`.** Switch cleanly between different tasks and session trees within the same terminal window. [](https://www.youtube.com/watch?v=1ND1IsFcgGc)

### 2\. Optimize Models and Thinking Levels on the Fly

You don't need to stick to one model for an entire task. Power users switch models mid-session based on complexity and cost. [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)

* **Switch models rapidly.** Press `Ctrl+L` to open the model selector or `Ctrl+P` to quickly cycle through your configured models. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)
* **Dial in reasoning effort.** Press `Shift+Tab` (or use `/settings`) to adjust the model's "thinking level" on the fly, using low thinking for quick boilerplate and high thinking for complex architecture. [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)
* **Leverage Virtual Models and Code Mode.** In newer versions (Pi 1.5+), you can use virtual models to let Pi automatically route requests to the best model based on task difficulty. Enable "code mode" so Pi writes small JavaScript filters to process tool outputs before they hit your context window, keeping token usage low and speed high. [](https://www.youtube.com/watch?v=3giACfGjwpE)

### 3\. Keep Context Lean with Skills and `AGENTS.md`

Loading massive system prompts slows down responses and degrades accuracy. Pi is designed to keep your context window clean. [](https://www.youtube.com/watch?v=BZ0w0JhPQ9o&t=5)

* **Scope project rules with `AGENTS.md`.** Place an `AGENTS.md` file in your project root for codebase-specific instructions, and use `~/.pi/agent/` (`system.md` or `APPEND_SYSTEM.md`) for global behavioral rules.
* **Use lazy-loaded Skills.** Store reusable workflows as `SKILL.md` folders inside `~/.pi/agent/skills/` or `.pi/skills/`. Pi only feeds the skill's name and description to the model at startup, loading the full instructions only when relevant or when you manually trigger `/skill:<skill-name>`.
* **Pinpoint files with `@`.** Use `@` symbols in your prompts to explicitly scope context to exact files rather than letting the agent guess. [](https://composio.dev/content/top-pi-agent-skills)

### 4\. Have Pi Write Its Own TypeScript Extensions

One point of agreement among users on [Reddit](https://www.reddit.com/r/PiCodingAgent/comments/1sttlg9/any%5Fgreat%5Ftutorial%5Fof%5Fhow%5Fuse%5Fthis%5Ftool/) is that Pi's biggest superpower is self-extension. Because Pi understands its own architecture, you can prompt it to build custom TypeScript extensions for its own harness. [](https://www.reddit.com/r/PiCodingAgent/comments/1sttlg9/any%5Fgreat%5Ftutorial%5Fof%5Fhow%5Fuse%5Fthis%5Ftool/)

* **Build custom hooks and UI.** Ask Pi to write TypeScript extensions for custom safety guardrails (since Pi runs in "YOLO" mode without permission blocks by default), automated linters, or custom UI widgets.
* **Hot-reload changes.** After Pi writes or modifies an extension, run `/reload` to immediately incorporate the new behavior into your active session without restarting.
* **Install community packages.** Extend capabilities instantly via npm or Git using `pi install npm:<package-name>` or `pi install git:github.com/<user>/<repo>` (for example, adding web search or vision handoff packages). [](https://www.youtube.com/watch?v=FJxgz5pN4wU&t=7)

### 5\. Use `tmux` and Headless Modes for Automation

By default, Pi runs on a single main thread without background bash execution. [](https://www.youtube.com/watch?v=yAPKzHrx3eo)

* **Pair with `tmux`.** When you need Pi to run dev servers, watch logs, or execute long-running background processes, instruct it to spawn and read `tmux` sessions.
* **Run outside the interactive TUI.** For CI/CD pipelines or shell scripts, invoke Pi in print mode (`pi -p`), stream structured output via JSON event mode, or run it as an RPC daemon. [](https://hoangyell.com/pi-agent-setup-best-practices/)

For a visual walkthrough of setting up custom prompts, navigating session trees, and extending Pi's harness, watch this quick guide:

16:50

[](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)

Learn 90% Of Pi Agent in Under 17 Minutes

212K views · 6 months ago

YouTube · Brandon Melville

If you'd like to dive deeper into setting up your workflow, let me know:

* Which **LLM providers or local models** (e.g., Anthropic, OpenAI, OpenRouter, Ollama) you plan to use
* What **specific workflow** you want to automate (e.g., custom safety hooks, MCP servers, or automated code reviews)

I can give you exact configuration snippets or extension prompts to get started.

* [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)  
YouTube·Christian Lempa  
Pi: Open-Source AI Agent Terminal Set-Up  
May 19, 2026 — Adjust settings like "thinking mode" via the \`/settings\` command to control the LLM's reasoning level for different task complexit...  
5m
* [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)  
YouTube·Brandon Melville  
Learn 90% Of Pi Agent in Under 17 Minutes  
May 15, 2026 — Pi's navigation includes \`Ctrl+L\` to choose models, \`Ctrl+P\` to cycle models, and \`Shift+Tab\` to change the thinking level.  
16:50
* [](https://www.youtube.com/watch?v=3giACfGjwpE)  
YouTube·DevOps Toolbox  
Wait… Pi Can Do WHAT?!  
Nov 18, 2026 — allows Pi to write small JavaScript scripts. Virtual models enable automatic model switching, where Pi decides which model (e.g., ...  
11:29

Show all

# how to config pi agent like a pro

2:13 AM

Configuring the **Pi coding agent** (`@mariozechner/pi-coding-agent`) like a pro centers on keeping its core minimal while layering global defaults, project-specific rules, and custom extensions. Because Pi deliberately avoids bloated built-in features to save context tokens, power users treat its configuration much like Neovim—building a tailored harness using local directories and TypeScript. [](https://news.ycombinator.com/item?id=48847407)

### 1\. Structure Your Two-Tier Config

Pi splits configuration into a global user directory (`~/.pi/agent/`) and a local project directory (`.pi/`). Project files override global settings once you grant folder trust, and you can apply manual edits anytime without restarting by running `/reload`. [](https://docs.pi.dev/latest/configuration)

* **`settings.json`** stores your default model, reasoning levels, and installed packages.
* **`models.json`** configures custom OpenAI-compatible endpoints or local LLMs like Ollama and LM Studio.
* **`keybindings.json`** remaps terminal UI shortcuts to match your muscle memory.
* **`AGENTS.md` (or `CLAUDE.md`)** injects standing behavioral rules across directories. Put personal workflow rules globally (such as "never auto-commit" or "use `jj` instead of `git`") and repository architecture rules in the project root.
* **`APPEND_SYSTEM.md` & `SYSTEM.md`** let you append instructions to Pi's lightweight system prompt or completely replace it for specialized workflows. [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)

### 2\. Master Multi-Model Routing & Shortcuts

Power users avoid sticking to one expensive frontier model for every task, instead using Pi's instant mid-session model switching while preserving conversation state. 

* **Authenticate multiple providers** via `/login` (supporting subscriptions like Claude Pro/Max and ChatGPT Plus/Pro alongside standard API keys) so you can mix models freely. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)
* **Route models by task complexity** using `Ctrl+L` to pick a specific model or `Ctrl+P` to cycle through favorites. For example, you can use a fast, cheap model for file scraping, a vision model for UI screenshots, and a heavy reasoning model for architecture. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)
* **Toggle reasoning dynamically** with `Shift+Tab` (or `/settings`) to dial "thinking mode" up for tricky debugging and down for simple edits. [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)

### 3\. Build on the 4-Tier Customization Ladder

Instead of overloading your system prompt, move repeated workflows up Pi's customization ladder: [](https://hoangyell.com/pi-agent-setup-best-practices/)

* **Prompt Templates (`prompts/*.md`)** turn frequently used prompts into custom slash commands.
* **Agent Skills (`skills/<name>/SKILL.md`)** package domain-specific instructions and helper scripts that load only when relevant, preventing context bloat.
* **TypeScript Extensions (`extensions/*.ts`)** hook directly into Pi's lifecycle to add custom tools, pre-tool security hooks, or UI widgets. You can ask Pi itself to write and hot-reload these extensions using its built-in documentation.
* **Community Packages** can be installed via `pi install npm:<package>` or `pi install git:<repo>`. Popular community additions include `pi-mcp-adapter` (for Model Context Protocol servers), `pi-web-access` (for web search), and `pi-observational-memory`. [](https://www.reddit.com/r/PiCodingAgent/comments/1t41thp/my%5Fpowerful%5Fpi%5Fagent%5Fsetup/)

### 4\. Pro Workflow & Context Habits

* **Navigate sessions as trees.** Pi saves conversations as JSONL trees rather than flat logs. Use `/tree` to jump back to an earlier node and fix a bad prompt without polluting the context window, or use `/fork` to branch off a sub-task. [](https://www.youtube.com/watch?v=8Dt0HM8HIq4&vl=en)
* **Scope context aggressively.** Use `@filename` to pull exact files into context, and start fresh branches when switching features so token costs stay low and reasoning stays sharp. [](https://news.ycombinator.com/item?id=48847407)
* **Avoid bloated starter distros.** While pre-packaged setups like `oh-my-pi` and `lazypi` exist, developers on [Hacker News](https://news.ycombinator.com/item?id=48847407) largely favor starting minimal and adding only the extensions you actively need to prevent token inflation. Meanwhile, users on [Reddit](https://www.reddit.com/r/PiCodingAgent/comments/1t41thp/my%5Fpowerful%5Fpi%5Fagent%5Fsetup/) note that pairing `pi-observational-memory` with `pi-fork` is especially effective for keeping long sessions dense without hitting context limits. [](https://www.reddit.com/r/PiCodingAgent/comments/1t41thp/my%5Fpowerful%5Fpi%5Fagent%5Fsetup/)

Check out the official [Pi Configuration Documentation](https://docs.pi.dev/latest/configuration) for full JSON schemas and file path rules. [](https://docs.pi.dev/latest/configuration)

Would you like help setting up a specific part of your config, such as:

* Writing a global **`AGENTS.md`** template for your coding style
* Configuring **`models.json`** for local LLMs or multi-provider routing
* Building a custom **TypeScript extension** or **slash command**?

* [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)  
YouTube·Christian Lempa  
Pi: Open-Source AI Agent Terminal Set-Up  
Custom providers, including local LLMs like Lama and LM Studio, can be configured in the \`models.json\` file. Select your desired c...  
5m
* [](https://deepakness.com/blog/pi-agent-setup/)  
DeepakNess  
Setting Up and Using the Pi Coding Agent | DeepakNess  
Overview: Pi is an open-source terminal coding agent by Mario Zechner featuring a small core with read, write, edit, and bash tool...
* [](https://docs.pi.dev/latest/configuration)  
Pi.dev  
Configuration - Pi Documentation  
User-level settings, including preferences, defaults, resource paths, and Pi package declarations. /models.json Compatible endpoin...

Show all

# popular extensions of pi agent

Because the **Pi coding agent** ships with a minimalist core of just four built-in tools (read, bash, edit, and write), its most popular extensions focus on adding web access, sub-agent delegation, Model Context Protocol (MCP) support, persistent memory, and terminal UI upgrades. [](https://pi.dev/packages)

According to download metrics from the official [Pi Package Catalog](https://pi.dev/packages) and the [Awesome Pi Coding Agent directory](https://awesome-pi.site/extensions/), the top community extensions fall into a few key categories. [](https://pi.dev/packages)

### Core Capabilities & Integrations

* **`pi-web-access` (1.4M/mo downloads).** Adds web search, URL fetching, GitHub repo cloning, PDF extraction, and video analysis. It supports search providers like OpenAI, Brave, Tavily, and Firecrawl. [](https://pi.dev/packages)
* **`pi-mcp-extension` (1M/mo downloads).** Connects Pi to external tools and data sources using the Model Context Protocol. It supports stdio, SSE, and Streamable HTTP transports with minimal bloat. [](https://pi.dev/packages)
* **`pi-web-search` (93.4k/mo downloads).** Provides native web search directly through model providers, including Gemini, xAI Grok, OpenAI Responses, and Anthropic.
* **`@gotgenes/pi-anthropic-auth` (48.7k/mo downloads).** Enables Anthropic OAuth compatibility for authenticating models. [](https://pi.dev/packages)

#### Multi-Agent, Memory, and Monorepo Extensions

* **Multi-Agent & Workflow Orchestration:** Popular options include `pi-subagents` (1.1M/mo downloads) for agent delegation and scripted workflows, `@tintinweb/pi-subagents` (86.6k/mo downloads) for Claude Code-style parallel subagents with a live fleet widget, `@opengsd/gsd-core` (92k/mo downloads) for meta-prompting and spec-driven development, and `pi-advisor-flow` (89.9k/mo downloads) for Executor-Advisor patterns. For task tracking, `@juicesharp/rpiv-todo` (89.9k/mo downloads) adds session todo lists.
* **Memory & Security:** `pi-memory` (91.9k/mo downloads) provides semantic search across logs and long-term memory, `@gotgenes/pi-permission-system` (51.1k/mo downloads) adds safety prompts before executing sensitive commands, and `@heyhuynhgiabuu/pi-pretty` (44.7k/mo downloads) enhances terminal output with syntax highlighting and tree views.
* **Monorepos & Bundles:** Curated collections like [narumiruna/pi-extensions](https://github.com/narumiruna/pi-extensions) offer modular tools like `pi-goal` and `pi-lsp`, while [tmustier/pi-extensions](https://github.com/tmustier/pi-extensions) features file viewers and session recap dashboards. Community discussions on [Reddit's r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1vj6wjo/which%5Fextensions%5Fdo%5Fyou%5Fuse/) note mixed feedback on session intercoms, often favoring `pi-link` for stability. [](https://www.reddit.com/r/PiCodingAgent/comments/1vj6wjo/which%5Fextensions%5Fdo%5Fyou%5Fuse/)

#### How to Install Extensions

Install any package permanently via the CLI using `pi install npm:<package-name>` (e.g., `pi install npm:pi-web-access`), or test an extension for a single session without saving by running `pi -e npm:<package-name>`. [](https://github.com/narumiruna/pi-extensions)

If you'd like to build out a specific setup, let me know:

* Your **primary use case** (e.g., web research, parallel sub-agents, or safer permissions)
* Which **LLM provider** you are using

I can put together a tailored starter command with compatible extensions for your workflow.

* [](https://www.reddit.com/r/PiCodingAgent/comments/1vj6wjo/which%5Fextensions%5Fdo%5Fyou%5Fuse/)  
Reddit·r/PiCodingAgent  
Which extensions do you use? : r/PiCodingAgent - Reddit  
August 8, 2026 — The \`pi-intercom\` extension, designed for messaging between Pi sessions, has reported issues such as orphaned sub-agents sending m...
* [](https://pi.dev/packages)  
Pi.dev  
Package Catalog  
PDF extraction, YouTube video understanding, and local video analysis for Pi coding agent. pi install npm:pi-web-access
* [](https://github.com/tmustier/pi-extensions)  
GitHub  
GitHub - tmustier/pi-extensions: A set of delightful extensions for Pi. Note I now use different extensions for my pi setup, see https://github.com/tmustier/vibes · GitHub  
tmustier/pi-extensions … provides example extensions and agent skills for the Pi coding agent, Extensions: /readfiles (in-terminal...

Show all

# how to config pi agent

Configure the **Pi coding agent** across two levels: **global user settings** located in `~/.pi/agent/` and **project-specific settings** located in `.pi/` inside your working directory. Most basic preferences can be adjusted interactively in the terminal, while advanced setups rely on JSON and Markdown files. [](https://docs.pi.dev/latest/configuration)

### 1\. Interactive Terminal Setup

Launch Pi by typing `pi` in your terminal, then use built-in slash commands to configure core features: 

* **Authenticate providers.** Run `/login` to connect subscriptions (such as Claude Pro or ChatGPT Plus) or paste API keys for providers like Anthropic, OpenAI, and Google Gemini. Credentials save automatically to `~/.pi/agent/auth.json`.
* **Select models.** Run `/model` (or press `Ctrl+L`) to pick your active coding model. Press `Shift+Tab` to adjust the reasoning or "thinking" level.
* **Adjust preferences.** Run `/settings` to toggle options like UI themes, default models, and terminal scrollback behavior (`tuiMode`).
* **Apply manual edits.** Run `/reload` whenever you edit configuration files, instructions, or extensions outside the interface. [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)

### 2\. Core Configuration Files

For deeper control, edit files directly in your global directory (`~/.pi/agent/`) or your local project folder (`.pi/`). Project files override global ones once you grant trust to the workspace. [](https://gist.github.com/schpet/85531b6a05a5d8119e859bdec6b0e0b8)

| File Name            | Location         | Purpose                                                                                                     |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| **settings.json**    | Global & Project | Controls UI preferences, default models, resource paths, and package declarations.                          |
| **models.json**      | Global           | Configures custom endpoints and local LLMs (such as Ollama or Llama.cpp) with context limits and base URLs. |
| **mcp.json**         | Global & Project | Registers Model Context Protocol (MCP) servers using command, args, or HTTP url properties.                 |
| **keybindings.json** | Global           | Customizes terminal UI keyboard shortcuts.                                                                  |

### 3\. Instructions and System Prompts

Pi uses Markdown files to shape how the agent behaves and understands your codebase: [](https://docs.pi.dev/latest/configuration)

* **Project and user context.** Create an `AGENTS.md` or `CLAUDE.md` file in your global agent directory, project root, or subdirectories. Pi automatically reads and combines these files for any folder you work in. [](https://docs.pi.dev/latest/configuration)
* **Extend default behavior.** Add an `APPEND_SYSTEM.md` file in `~/.pi/agent/` or `.pi/` to tack extra behavioral rules onto Pi's built-in system prompt. [](https://docs.pi.dev/latest/configuration)
* **Replace the system prompt.** Add a `SYSTEM.md` file to completely overwrite Pi's default prompt. A project-level `SYSTEM.md` takes priority over the global one. [](https://docs.pi.dev/latest/configuration)

### 4\. Extensions, MCP Servers, and Skills

Pi keeps its core minimal and relies on add-ons for extra tools: [](https://www.sitepoint.com/pi-1-0-coding-agent-setup-mcp/)

* **Add MCP servers.** Run `pi mcp add` in your terminal or edit `mcp.json` directly. Check active servers with `pi mcp list`.
* **Install packages and extensions.** Run `pi install npm:<package-name>` to add community tools like `pi-web-access` or `pi-mcp-adapter`. You can also drop custom TypeScript files into `~/.pi/agent/extensions/` or `.pi/extensions/`.
* **Add reusable skills and prompts.** Place task-specific instructions in `skills/` and custom slash-command templates in `prompts/` inside either configuration directory. [](https://hoangyell.com/pi-agent-setup-best-practices/)

For full schema details and advanced examples, check the [Pi Configuration Documentation](https://docs.pi.dev/latest/configuration) or the [Pi 1.0 Setup Guide on SitePoint](https://www.sitepoint.com/pi-1-0-coding-agent-setup-mcp/). 

If you'd like help setting up a specific part of Pi, let me know:

* Which **model provider** or **local LLM** (like Ollama or LM Studio) you want to connect
* Whether you need examples for **`models.json`**, **`mcp.json`**, or **`AGENTS.md`**

I can generate the exact configuration file snippet for your setup.

* [](https://www.youtube.com/watch?v=04EL2%5FLlenc&t=156)  
YouTube·Christian Lempa  
Pi: Open-Source AI Agent Terminal Set-Up  
May 19, 2026 — Select your desired coding model using the \`/model\` command. Adjust settings like "thinking mode" via the \`/settings\` command to c...  
5m
* [](https://docs.pi.dev/latest/configuration)  
Pi.dev  
Configuration - Pi Documentation  
Configuration Pi supports user-level and project configuration. In interactive mode, use /settings to change common preferences. s...
* [](https://deepakness.com/blog/pi-agent-setup/)  
DeepakNess  
Setting Up and Using the Pi Coding Agent | DeepakNess  
May 29, 2026 — Pi is an open-source terminal coding agent by Mario Zechner featuring a small core with read, write, edit, and bash tools, extensi...

Show all

# how to setup pi-web-access

To set up **pi-web-access**—the web search, content extraction, and video understanding extension for the **Pi coding agent**—install the package via Pi's CLI and optionally configure API keys for custom search providers. [](https://www.npmjs.com/package/pi-web-access?activeTab=readme)

### 1\. Install the Extension

* **Run the install command.** Open your terminal and run `pi install npm:pi-web-access` to add the package to your Pi installation.
* **Reload Pi.** Restart your active Pi session or run `/reload` inside the terminal interface to activate the new tools.
* **Start using zero-config search.** The extension works out of the box with no API keys by routing searches through Exa MCP. If you are signed into Pi with an OpenAI Codex subscription or Kimi Code Plan via `/login`, it can also reuse that authentication automatically. [](https://pi.dev/packages/@yassimba/pi-web-access)

### 2\. Optional: Configure Search & Media Providers

For higher rate limits, private search, or video analysis, create or edit the configuration file at **`~/.pi/agent/web-search.json`**. [](https://www.npmjs.com/package/pi-web-access?activeTab=readme)

json

```
{
  "provider": "exa",
  "exaApiKey": "exa-...",
  "openaiApiKey": "sk-...",
  "braveApiKey": "BSA_...",
  "perplexityApiKey": "pplx-...",
  "geminiApiKey": "AIza...",
  "tavilyApiKey": "tvly-...",
  "allowBrowserCookies": false
}

```



* **Set your preferred provider.** Leave `"provider"` unset (or set to `"auto"`) to let the extension cascade through available providers automatically. You can also specify a single provider like `"exa"`, `"brave"`, `"openai"`, `"perplexity"`, or `"gemini"`. [](https://www.npmjs.com/package/pi-web-access?activeTab=readme)
* **Enable video and PDF features.** Adding a `geminiApiKey` or enabling `"allowBrowserCookies": true` (while signed into Google in Chrome) unlocks YouTube video understanding, local screen recording analysis, and enhanced PDF extraction. [](https://www.npmjs.com/package/@wirebabel/pi-web-access)
* **Use self-hosted search.** You can configure a local SearXNG endpoint in the config file if you prefer private, self-hosted web search. [](https://www.npmjs.com/package/pi-web-access?activeTab=readme)

### 3\. Available Tools After Setup

Once installed, your Pi agent automatically gains access to three primary tools: [](https://pi.dev/packages/@yassimba/pi-web-access)

* **`web_search`:** Searches the web and summarizes results using your configured Pi model.
* **`fetch_content`:** Extracts readable text from web pages and PDFs, inspects YouTube videos, and automatically clones GitHub repositories locally so Pi can read the source code directly.
* **`get_search_content`:** Retrieves full page content cached from earlier searches in your session. [](https://x.com/nicopreme/status/2025952842293412037)

_(Note: If you are using the security-hardened `@diegopetrucci/pi-web-access` fork instead of the upstream [nicobailon/pi-web-access](https://github.com/nicobailon/pi-web-access) package, you must also set the `PICODINGAGENTDIR` environment variable to an absolute directory path before running any tools.)_ [](https://github.com/nicobailon/pi-web-access)

Are you planning to use the **zero-config setup**, or would you like help configuring a **specific search or video provider** (like Gemini, Brave, or SearXNG) in your `web-search.json` file?

* [](https://github.com/nicobailon/pi-web-access)  
GitHub  
GitHub - nicobailon/pi-web-access  
Web search and content extraction extension for Pi coding agent. The agent can now pull specific values off a page, like a price o...
* [](https://deepakness.com/blog/pi-agent-setup/)  
DeepakNess  
Setting Up and Using the Pi Coding Agent - DeepakNess  
May 29, 2026 — It works out of the box with Exa search (no API key needed), and you can optionally add API keys for Perplexity, Exa, or Gemini fo...
* [](https://www.npmjs.com/package/pi-web-access?activeTab=readme)  
NPM  
pi-web-access  
November 15, 2026 — web\_search tries a configured SearXNG endpoint first for local/private search. curator summary drafts are generated separately by ...

Show all

# how to config pi for manual code review

To configure the **Pi coding agent** for manual code review, you restrict its file-editing permissions so it operates in a read-only mode and define your review standards via repository instructions. By default, Pi has no built-in permission popups and grants full `write`, `edit`, and `bash` access, so locking down its tools is essential for safe, human-led code reviews. [](https://www.reddit.com/r/PiCodingAgent/comments/1ug2vt4/your%5Fpi%5Fcoding%5Fsetup/)

### 1\. Enforce Read-Only Tool Access

Restrict Pi to read-only inspection tools when launching a review session so it cannot modify files or run destructive shell commands. [](https://www.implicator.ai/how-to-install-pi-coding-agent-and-set-up-your-first-project/)

* **Use the `--tools` CLI flag.** Start Pi with `pi --tools read,grep,find,ls` to strip away `write`, `edit`, and `bash` capabilities.
* **Create a shell alias.** Add `alias pi-review='pi --tools read,grep,find,ls'` to your `.zshrc` or `.bashrc` file for one-command review sessions.
* **Control terminal commands manually.** Run git diffs yourself inside the Pi prompt using the `!` prefix (such as `! git diff main`) to inject the output into the conversation without granting the AI autonomous shell access. [](https://docs.pi.dev/latest/usage)

### 2\. Define Review Rules in `AGENTS.md`

Pi automatically discovers instructions from `~/.pi/agent/` and your repository root's `AGENTS.md` file. Add a dedicated section to guide how Pi analyzes code during reviews. [](https://omidsaffari.com/blog/pi-coding-agent-1-0-setup)

* **Set behavioral guardrails.** Instruct Pi to act strictly as a reviewer, point out edge cases or security issues, and never propose full-file rewrites unless asked.
* **Specify project standards.** Document your repository's architectural patterns, naming conventions, and test coverage expectations so Pi flags violations accurately. [](https://omidsaffari.com/blog/pi-coding-agent-1-0-setup)
* **Reload changes mid-session.** Run `/reload` inside the terminal interface whenever you update your `AGENTS.md` rules. [](https://omidsaffari.com/blog/pi-coding-agent-1-0-setup)

### 3\. Optimize Reasoning and Context Scoping

Fine-tune how Pi processes large diffs and complex logic during an interactive review. [](https://docs.pi.dev/latest/usage)

* **Increase reasoning depth.** Run `/thinking` or press `Shift+Tab` to raise the model's reasoning level for deep architectural or security audits.
* **Target specific files.** Type `@` followed by a filename in the prompt to explicitly pull modified files into context.
* **Branch review discussions.** Use `/fork` or `/tree` to explore specific bug hypotheses without cluttering your main review thread. [](https://hoangyell.com/pi-agent-setup-best-practices/)

### Community Best Practices

One point of agreement among users on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1ug2vt4/your%5Fpi%5Fcoding%5Fsetup/) is that running a vanilla Pi setup without tool guardrails risks accidental file modifications or deletions, making it critical to disable `bash` and write tools during read-only workflows. [](https://www.reddit.com/r/PiCodingAgent/comments/1ug2vt4/your%5Fpi%5Fcoding%5Fsetup/)

Would you like help setting up a **custom prompt template** or **TypeScript extension** in `~/.pi` to automate diff fetching and formatting for your code reviews?

* [](https://www.implicator.ai/how-to-install-pi-coding-agent-and-set-up-your-first-project/)  
Implicator.ai  
How to Set Up Pi Coding Agent for Your First Project  
May 17, 2026 — Configuration: Write \`AGENTS.md\` for scopes, verification commands, and secret exclusions. Testing: Execute read-only smoke tests ...
* [](https://www.reddit.com/r/PiCodingAgent/comments/1ug2vt4/your%5Fpi%5Fcoding%5Fsetup/)  
Reddit·r/PiCodingAgent  
Your pi coding setup : r/PiCodingAgent - Reddit  
June 26, 2026 — A vanilla Pi setup, without proper guardrails, can lead to accidental file modifications or deletions. It is crucial to manage too...
* [](https://docs.pi.dev/latest/usage)  
Pi.dev  
Use Pi in the terminal - Pi Documentation  
Press Ctrl+L to open the same selector. /thinking selects how much reasoning the current model uses. Press Shift+Tab to cycle thro...

Show all

# how to config pi approval requirement for specific tools

### how to config pi approval requirement for specific tools

Because Pi runs in "YOLO mode" (auto-approving all tool calls) by default, **you must install a permission extension** to require confirmation for specific tools. [](https://agentrq.com/guidelines/yolo-mode/pi)

Depending on whether you want a menu-driven toggle, MCP-specific rules, or a custom script, choose one of the three setups below.

---

#### Option 1: Toolset-Based Approvals (Recommended)

If you want an interactive UI to toggle permissions on the fly for groups of tools (`read`, `write`, `execute`) or custom regex patterns, use the [pi-toolset-permissions](https://pi.dev/packages/pi-toolset-permissions) extension. [](https://pi.dev/packages/pi-toolset-permissions)

1. **Install the extension:**  
bash  
```  
pi install npm:pi-toolset-permissions  
```  
  
_(Alternatively, test it for one session without saving via `pi -e npm:pi-toolset-permissions`.)_
2. **Configure tool states:**
  * Launch Pi and run `/permissions` to open the configuration menu.
  * Set the desired toolset (e.g., `execute` or `write`) or custom regex pattern to **`ask`**.
  * In `ask` mode, Pi displays the exact tool input and requires confirmation for each individual call.

---

#### Option 2: Specific MCP Tool Approvals

If you are using Model Context Protocol (MCP) servers and want to gate destructive tool calls (like `delete_*` or `remove_*`), use the [pi-native-mcp-approvals](https://pi.dev/packages/pi-native-mcp-approvals?page=89) package. [](https://pi.dev/packages/pi-native-mcp-approvals?page=89)

1. **Install the extension:**  
bash  
```  
pi install npm:pi-native-mcp-approvals  
```  

2. **Create the policy file:**  
Create `~/.pi/agent/extensions/native-mcp-approvals/config.json` (or place it inside your project's `.pi` folder for project-specific rules, as users on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1wbdw9y/best%5Fconfiguration%5Ffor%5Fdifferent%5Fproductproject/) agree is standard practice):  
json  
```  
{  
  "approveTools": ["delete_*", "remove_*", "your_specific_tool"],  
  "exemptServers": []  
}  
```  
  
_Note: Patterns are case-sensitive, use `*` as a wildcard, and should omit the `mcp_<server>_` prefix._
3. **Apply changes:**  
Run `/reload` inside Pi. [](https://www.reddit.com/r/PiCodingAgent/comments/1wbdw9y/best%5Fconfiguration%5Ffor%5Fdifferent%5Fproductproject/)

---

#### Option 3: Custom TypeScript Extension (or `oh-my-pi` Fork)

* **Custom Gate:** Pi's repository includes a `permission-gate.ts` example that you can drop into `~/.pi/agent/extensions/` to intercept specific tools or dangerous bash commands (`rm -rf`, `sudo`) using native confirmation dialogs. As suggested in a [Pi GitHub Discussion](https://github.com/earendil-works/pi/discussions/2629), you can also prompt Pi itself to generate a custom TypeScript extension tailored to your exact tool rules.
* **Built-in Config (`oh-my-pi`):** If you are using the `oh-my-pi` fork rather than standard Pi, you can set policies directly in your user configuration without extensions using `tools.approval.<toolName>: "prompt"`. [](https://github.com/can1357/oh-my-pi/blob/main/docs/approval-mode.md)

If you'd like help setting up a **custom TypeScript gate**, let me know:

* The **exact tool names** (e.g., `bash`, `write`, `edit`, or custom MCP tools) you want to restrict
* Whether you want **argument-level filtering** (e.g., only prompting on specific flags or file paths)

* [](https://pi.dev/packages/pi-native-mcp-approvals?page=89)  
Pi.dev  
pi-native-mcp-approvals · Packages  
November 1, 2026 — Matching is case-sensitive; \* matches any characters, and other punctuation is converted to underscores. For shortened names, use ...
* [](https://agentrq.com/guidelines/yolo-mode/pi)  
AgentRQ  
How to Enable YOLO Mode in Pi | AgentRQ Guidelines  
October 30, 2026 — So with a gate like permission-gate.ts installed in … each command it stops shows up in the AgentRQ task. Answer Allow Once to run...
* [](https://pi.dev/packages/pi-toolset-permissions)  
Pi.dev  
pi-toolset-permissions · Packages - Pi coding agent  
November 19, 2026 — This extension adopts a different modular, on-the-fly approach: you can toggle sets of tools and sandboxes using a simple menu dur...

Show all

# how to use pi-toolset-permissions

2:23 AM

### how to use pi-toolset-permissions

You can use **[pi-toolset-permissions](https://pi.dev/packages/pi-toolset-permissions)** to control which tool groups, directories, and OS sandboxes the Pi coding agent can access during a session. It lets you toggle permissions on the fly through a slash command or by asking the AI directly in chat. [](https://pi.dev/packages/pi-toolset-permissions)

#### 1\. Install or Run the Extension

* **Install permanently.** Run `pi install npm:pi-toolset-permissions` in your terminal to load the extension automatically in future sessions.
* **Try temporarily.** Run `pi -e npm:pi-toolset-permissions` to test the extension for a single session without saving it. [](https://pi.dev/packages/pi-toolset-permissions)

#### 2\. Manage Permissions via the Menu

* **Open the configuration screen.** Type `/permissions` in your Pi session to open the interactive menu. [](https://pi.dev/packages/pi-toolset-permissions)
* **Toggle toolset states.** Set any tool group (such as `execute` for Bash commands or `permissions` for self-modification) to **on**, **off**, or **ask**. [](https://pi.dev/packages/pi-toolset-permissions)
* **Set path scopes.** Choose which directories file tools and the filesystem sandbox can access:
  * `PROJECT ONLY` restricts access strictly to your current project root.
  * `CUSTOM PATHS` allows access to the project root plus saved extra directories.
  * `EVERYWHERE` removes directory restrictions. [](https://pi.dev/packages/pi-toolset-permissions)
* **Configure the OS sandbox.** Enable the operating-system boundary to isolate shell commands at the OS level rather than relying only on command text checks. [](https://pi.dev/packages/pi-toolset-permissions)

#### 3\. Change Permissions via Natural Language

* **Request changes in chat.** Tell the AI what you want to restrict or allow, such as _"run in read-only mode now"_ or _"forbid writing on that file"_. [](https://pi.dev/packages/pi-toolset-permissions)
* **Confirm the dialog.** When the `permissions` toolset is set to **on**, the AI invokes its built-in `permissions` tool (`set_toolset`) and prompts you with a confirmation dialog before applying any state change. [](https://pi.dev/packages/pi-toolset-permissions)
* **Lock AI self-modifications.** Set the `permissions` toolset to **off** in the `/permissions` menu if you want to prevent the AI from requesting permission changes while keeping your `/permissions` command active. [](https://pi.dev/packages/pi-toolset-permissions)

If you'd like to set up a specific workflow, let me know:

* Whether you want to configure **custom directory paths** or **read-only modes**
* How strict you want the **OS sandbox** to be for shell commands

I can help you map out the exact toolset states to use.

* [](https://pi.dev/packages/pi-toolset-permissions)  
Pi.dev  
pi-toolset-permissions · Packages - Pi coding agent  
The extension provides a tool to modify the list of allowed toolsets. The AI can request state changes when the permissions toolse...

## how to hide the bottom status bar of this tool

how to hide the bottom status bar of this tool

2:38 AM

### how to hide the bottom status bar of this tool

**`pi-toolset-permissions` does not have a built-in setting to hide its bottom footer status badge**, because Pi extensions render their footer indicator directly via the host UI API (`ctx.ui.setStatus`). [](https://docs.pi.dev/latest/extensions)

However, you can hide or filter out extension status badges using a statusbar extension or by patching the package locally:

#### 1\. Hide Extension Badges via a Statusbar Extension

If you use a customizable statusbar package for Pi, you can disable extension badges globally or hide the specific badge key without editing extension code:

* **pi-bar:** Run `/bar` in your session to open the menu, navigate to the **Extension badges** or **Badge** rows, and toggle the permissions badge to **hidden** (or run `/bar badges hide <key>`).
* **[pi-inline-statusline](https://pi.dev/packages/pi-inline-statusline):** Run `/statusline` to open the interactive segment selector and toggle off the permissions status segment.
* **[pi-statusbar](https://github.com/BumpyClock/pi-statusbar):** Customize `leftSegments`, `rightSegments`, and `secondarySegments` in `~/.pi/agent/settings.json` to exclude extension status items. [](https://pi.dev/packages/pi-inline-statusline)

#### 2\. Remove `setStatus` Locally (If Using Default Pi Footer)

If you use Pi's default footer without a statusbar extension, you can remove the status call from the installed package source:

* **Locate the installed package.** Open your global Pi packages directory (typically `~/.pi/agent/node_modules/pi-toolset-permissions` or inside your local `node_modules/pi-toolset-permissions`).
* **Comment out `setStatus`.** Search the extension's `.ts` or `.js` files for `ctx.ui.setStatus(` and comment those lines out, then run `/reload` inside Pi. _(Note: Updating the package later will overwrite this edit.)_

If you'd like help hiding it with your current setup, let me know:

* Whether you use **Pi's default footer** or a **statusbar extension** (like `pi-bar` or `pi-statusbar`)
* Whether you installed `pi-toolset-permissions` **globally or per-project**

I can give you the exact command or file path to update.

* [](https://docs.pi.dev/latest/extensions)  
Pi.dev  
Extensions  
Extensions are TypeScript modules that extend Pi's behavior. An extension runs inside the Pi process. It can inspect prompts, tool...
* [](https://pi.dev/packages/pi-inline-statusline)  
Pi.dev  
pi-inline-statusline · Packages  
Use the /statusline command to persistently show or hide individual segments: interactive toggle selector. In the interactive sele...
* [](https://forums.raspberrypi.com/viewtopic.php?t=369556)  
Raspberry Pi Forums  
SOLVED hide task/menu bar Pi400 - Raspberry Pi Forums  
Re: hide task/menu bar Pi400\. Thu Apr 25, 2024 12:29 am. :lol: so you got it mousepad opens the file that already is there. .confi...

Show all

## easiest setup to hide toolset permissions status bar

easiest setup to hide toolset permissions status bar

2:39 AM

### easiest setup to hide toolset permissions status bar

The easiest setup to hide the status badge without modifying package files (so it survives updates) is to install **`pi-bar`** and hide the badge through its interactive menu.

#### 1\. Install `pi-bar`

Run this command in your terminal:

bash

```
pi install npm:pi-bar

```



_(If you are already inside a Pi session, run `/reload` afterward.)_

#### 2\. Hide the Permissions Badge

1. Type **`/bar`** in your Pi session to open the configuration menu.
2. Select **Extension badges** (or **Badge** rows).
3. Find the permissions status entry and toggle it to **hidden**.

Once hidden, `pi-bar` saves that preference automatically in your configuration so the badge stays gone across future sessions and package updates.

If you'd prefer not to install another extension, let me know if you use **macOS/Linux** or **Windows** and I can give you a one-line terminal command to patch your local `pi-toolset-permissions` file directly.

# why is pi agent called

The creator of the Pi coding agent, **Mario Zechner**, deliberately chose the name "Pi" because he wanted it to be **impossible to find on search engines**. [](https://www.youtube.com/watch?v=RKHaecOi0CA)

When he first built the project, he had no intention of turning it into a commercial product or growing a user base. According to [eesel AI's breakdown of Pi](https://www.eesel.ai/blog/pi-coding-agent), Zechner explained his naming choice in his design post as giving it _"a name that's entirely un-Google-able, so there will never be any users."_ 

### Key Details Behind the Name and Origin

* **Anti-marketing philosophy.** Alongside naming the tool "Pi" so search results would be flooded with the mathematical constant instead of his software, Zechner initially hosted the project on a domain called `shittycodingagent.ai` to further deter random users. [](https://www.youtube.com/watch?v=RKHaecOi0CA)
* **Frustration with bloat.** Zechner built Pi as a personal side project after growing frustrated with tools like Claude Code, which he felt had become overly complex with hidden prompts and unnecessary features. [](https://composio.dev/content/pi-vs-omp)
* **Minimalist design.** True to the simplicity of a short two-letter name, [Pi](https://pi.dev/) is stripped down to a tiny system prompt and just four core tools (read, write, edit, and bash). [](https://lucumr.pocoo.org/2026/1/31/pi/)
* **Accidental popularity.** His plan to stay completely under the radar failed once OpenClaw—a viral personal AI agent built on top of Pi's components—gained massive traction, bringing widespread attention to Pi's minimalist architecture. [](https://newsletter.pragmaticengineer.com/p/building-pi-and-what-makes-self-modifying)

Would you like to know more about **how Pi works** under the hood, or how it compares to **OpenClaw** and other coding agents?

* [](https://lucumr.pocoo.org/2026/1/31/pi/)  
Armin Ronacher's Thoughts and Writings  
Pi: The Minimal Agent Within OpenClaw | Armin Ronacher's Thoughts and Writings  
January 31, 2026 — Pi is a minimal coding agent with a tiny system prompt and four core tools (Read, Write, Edit, Bash) created by Mario Zechner, und...
* [](https://www.youtube.com/watch?v=RKHaecOi0CA)  
YouTube·CultRepo  
Meet Pi: The Minimalist, Self-Modifying Coding Agent  
Aug 20, 2026 — The intention was to make Pi difficult to find, initially naming its website "shittycodingagent.ai" and calling it "Pi" because it...  
11:23
* [](https://pi.dev/)  
Pi.dev  
Pi Coding Agent  
Pi is a minimal agent harness. Customize Pi with extensions, skills, prompt templates, and themes. skips features like sub-agents ...

Show all

# pi agent creator background

The creator of the Pi coding agent is **Mario Zechner**, an Austrian software developer and veteran open-source programmer based in Graz. Before entering the AI tooling space, he spent nearly two decades building game development frameworks, mobile compilers, and commercial animation software. [](https://gamedevdays.com/speaker/mario-zechner/)

### Career & Open-Source Background

* **Game Development & libGDX.** Around 2009, Zechner created libGDX, a widely used open-source, cross-platform Java game development framework. It powered major indie hits like _Slay the Spire_ and _Ingress_, earned a Duke's Choice Award in 2014, and remained under his leadership until he handed maintenance over to core contributors in 2016\. He also authored the book _Beginning Android Games_. [](https://ai.engineer/speakers/mario-zechner)
* **Mobile Compilers & RoboVM.** Zechner was a core team member and "Head Geek" at RoboVM, an ahead-of-time compiler that allowed Java code to run natively on iOS. After building its first commercial debugger add-on, the company was acquired by Xamarin (and subsequently Microsoft), which later shut the project down. That experience heavily shaped his skepticism of closed corporate ecosystems and his insistence on keeping core tools open and forkable. [](https://at.linkedin.com/in/mariozechner)
* **Spine & Esoteric Software.** Beginning in 2016, Zechner spent nearly a decade working with Esoteric Software on Spine, a popular commercial 2D skeletal animation tool for game developers built on top of libGDX. [](https://esotericsoftware.com/blog/Spine-3-4-released)
* **Research & Civic Tech.** Early in his career, Zechner worked in applied research at Know-Center focusing on natural language processing, information retrieval, and machine learning. Outside of commercial work, he has built civic data tools like _Heisse Preise_ to track supermarket price inflation in Austria. [](https://ai.engineer/speakers/mario-zechner)

### Creation of Pi & Philosophy

* **Motivation for Pi.** In August 2025, Zechner created [Pi](https://pi.dev/) out of frustration with existing AI coding agents like Claude Code and OpenCode. He felt competing tools suffered from bloated system prompts, opaque context manipulation, and frequent bugs.
* **Minimalist Design.** Drawing on his background building low-level, unopinionated developer frameworks, Zechner designed Pi around a tiny core with just four basic tools (`read`, `write`, `edit`, and `bash`) and a TypeScript extension system that allows the agent to modify and extend itself.
* **Ecosystem & Earendil.** Pi gained widespread traction in the developer community and became the underlying agent harness powering Peter Steinberger's personal AI assistant, OpenClaw. In early 2026, Zechner joined Earendil—a company co-founded by his longtime friend and Flask creator Armin Ronacher—bringing Pi under the Earendil umbrella while keeping its core MIT-licensed. [](https://www.youtube.com/watch?v=RjfbvDXpFls&vl=en&t=62)

If you'd like to explore further, I can break down:

**Pi's technical architecture** (how its four-tool core and self-modifying TypeScript extensions work)**How Pi compares to Claude Code** or other terminal coding harnesses**The connection between Pi and OpenClaw**

Which of these would be most helpful?

* [](https://www.youtube.com/watch?v=RjfbvDXpFls&vl=en&t=62)  
YouTube·AI Engineer  
Building pi in a World of Slop — Mario Zechner  
Apr 16, 2026 — Building pi in a World of Slop — Mario Zechner um in 2025 I started using cloud code in about April. I think thanks to Peter uh be...  
9m
* [](https://newsletter.pragmaticengineer.com/p/building-pi-and-what-makes-self-modifying)  
The Pragmatic Engineer  
Building Pi, and what makes self-modifying software so fascinating  
Apr 29, 2026 — Mario Zechner is the creator of Pi, a minimalist, self-modifying AI coding agent, that is the foundation upon which OpenClaw (crea...
* [](https://medium.com/@urvvil08/i-tried-pi-after-watching-its-founder-explain-why-he-quit-claude-code-7b747c37fa22)  
Medium·Urvil Joshi  
Medium  
May 6, 2026 — Overview: Pi is an open-source, minimal coding agent created by Mario Zechner featuring a sub-1,000-token system prompt and four c...

Show all



# how to setup agent md for pi agent

To set up an **`AGENTS.md`** file for the Pi coding agent, create a Markdown file named `AGENTS.md` in your project root or global configuration folder. Pi automatically discovers these files at startup and injects their contents directly into the system prompt. [](https://dev.to/arshtechpro/pi-the-open-source-ai-coding-agent-you-probably-havent-tried-yet-2h0h)

### 1\. Where to Place `AGENTS.md`

Pi looks for instruction files across three hierarchical levels and concatenates them together: 

* **Global instructions.** Save a file at `~/.pi/agent/AGENTS.md` for universal rules across all sessions, such as preferred version control tools or general coding habits.
* **Parent directories.** Place files in parent folders when working inside monorepos to share guidelines across sub-projects.
* **Project root.** Place `AGENTS.md` (or `CLAUDE.md`) in your active repository root for project-specific tech stacks, commands, and workflows. [](https://www.youtube.com/shorts/kbFSuLsOqYk)

### 2\. How to Create It

You can set up the file manually or automate generation using a Pi extension. On [Reddit's r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1tcm0p5/how%5Fto%5Finit%5Fagentmd%5Ffor%5Fpi%5Fagent/), opinions are mixed on the best workflow, with some developers preferring to write the file by hand and others asking Pi or an extension to draft a starting template. [](https://www.reddit.com/r/PiCodingAgent/comments/1tcm0p5/how%5Fto%5Finit%5Fagentmd%5Ffor%5Fpi%5Fagent/)

* **Automated initialization.** Install the official [pi-agentsmd package](https://pi.dev/packages/pi-agentsmd) by running `pi install npm:pi-agentsmd` in your terminal. Once installed, launch `pi` inside your repository and run `/init` so the active model scans your codebase and generates a tailored `AGENTS.md`. [](https://pi.dev/packages/pi-agentsmd)
* **Manual creation.** Create an empty `AGENTS.md` file in your project root and add clear, concise Markdown instructions. Keep the file brief so you preserve Pi's lightweight system prompt. [](https://agents.md/)

### 3\. What to Include

Follow the open [AGENTS.md specification](https://agents.md/) by focusing on actionable context the agent needs to work safely in your codebase: [](https://www.youtube.com/watch?v=dcxOU3ghcfc&t=96)

* **Build and test commands.** List exact terminal commands for installing dependencies, running dev servers, linting, and running tests (such as `pnpm test` or `pnpm lint`). [](https://agents.md/)
* **Architecture and conventions.** Specify your tech stack, directory structure, naming conventions, and formatting preferences. [](https://agents.md/)
* **Guardrails and exclusions.** Define strict boundaries, such as prohibiting automatic git commits without approval or listing sensitive files to ignore. [](https://www.implicator.ai/how-to-install-pi-coding-agent-and-set-up-your-first-project/)

### Example `AGENTS.md` Template

markdown

```
# Project Guidelines

## Commands
- Install: `pnpm install`
- Dev server: `pnpm dev`
- Test: `pnpm test`
- Lint: `pnpm lint`

## Code Style
- Use TypeScript strict mode and functional patterns.
- Follow camelCase for variables and functions.

## Rules
- Run tests before finishing any code change.
- Never commit changes or modify `.env` files without explicit approval.

```



_(Note: After editing `AGENTS.md`, restart your Pi session or start a new conversation so the updated instructions load into the system prompt.)_ [](https://www.youtube.com/watch?v=dcxOU3ghcfc&t=96)

If you'd like help drafting a custom `AGENTS.md`, share your **tech stack** and **preferred test/build commands**, and I can generate a tailored file for your project.

* [](https://www.reddit.com/r/PiCodingAgent/comments/1tcm0p5/how%5Fto%5Finit%5Fagentmd%5Ffor%5Fpi%5Fagent/)  
Reddit·r/PiCodingAgent  
How to init Agent.md for pi agent? : r/PiCodingAgent - Reddit  
May 14, 2026 — Users can create an \`AGENTS.md\` file by asking the Pi agent to generate it, potentially as a starting point for further edits. How...
* [](https://deepakness.com/blog/pi-agent-setup/)  
DeepakNess  
Setting Up and Using the Pi Coding Agent - DeepakNess  
May 29, 2026 — Pi loads AGENTS.md files at startup and injects them into the system prompt. I keep my global AGENTS.md minimal. Check the project...
* [](https://agents.md/)  
AGENTS.md  
AGENTS.md  
AGENTS.md markdown file providing detailed build, test, and style instructions specifically for AI coding agents. Works across div...

Show all



# how to check usage stats on pi agent

9:00 AM

### how to check usage stats on pi agent

You can check your usage statistics on the **Pi coding agent** by installing a community extension, using a CLI analytics tool, or inspecting the raw JSONL session files stored locally in `~/.pi/agent/sessions/`. [](https://pi.dev/packages/pi-usage-widget)

#### 1\. In-App Pi Extensions (Recommended)

Install an extension directly using `pi install` to view live metrics and interactive dashboards inside your coding sessions: [](https://github.com/Observal/pi-insights)

* **Live Cost & Token Widget.** Install [pi-usage-widget](https://pi.dev/packages/pi-usage-widget) via `pi install npm:pi-usage-widget` to display real-time costs, tokens, and cache stats right above your editor. You can also run `/usage` inside a session to open a full interactive dashboard. [](https://pi.dev/packages/pi-usage-widget)
* **Subscription & Rate-Limit Monitor.** Install [pi-usage](https://github.com/mtrojnar/pi-usage) to check your remaining usage limits across providers like Anthropic Claude, Codex, GitHub Copilot, and OpenRouter at startup. [](https://github.com/mtrojnar/pi-usage)
* **Tool & Skill Breakdown.** Install [pi-tool-stats](https://pi.dev/packages/pi-tool-stats) to track which tools, skills, and slash commands you use most. Run `/tool-stats` or `/tool-stats 7` inside Pi to see a 30-day or 7-day breakdown. [](https://pi.dev/packages/pi-tool-stats)
* **Deep Workflow Reports.** Install [pi-insights](https://github.com/Observal/pi-insights) via `pi install npm:@observal/pi-insights` and run `/pi-insights` to generate an HTML report analyzing session friction, token waste, and model efficiency. [](https://github.com/Observal/pi-insights)
* **TUI Cost Dashboard.** Users on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1uoq5b4/pi%5Fatlas%5F020%5Fa%5Fdashboard%5Fto%5Fsee%5Fyour%5Ftoken%5Fusage/) also recommend **Pi Atlas**, a terminal dashboard for tracking token usage and estimated costs broken down by individual skills. [](https://www.reddit.com/r/PiCodingAgent/comments/1uoq5b4/pi%5Fatlas%5F020%5Fa%5Fdashboard%5Fto%5Fsee%5Fyour%5Ftoken%5Fusage/)

#### 2\. External CLI Reporting with `ccusage`

If you prefer checking stats outside of a Pi session, the [ccusage](https://ccusage.com/guide/pi/) CLI natively parses Pi's local session logs without requiring any extension setup: [](https://ccusage.com/guide/pi/)

* **Daily Usage.** Run `npx ccusage@latest pi daily` (or `bunx ccusage pi daily`) in your terminal to view daily token counts and costs.
* **Monthly or Per-Session Views.** Swap `daily` for `monthly` or `session` to group your usage by month or individual coding session.
* **Date & JSON Filtering.** Add flags like `--since 2026-05-01 --until 2026-05-16` to filter dates or `--json` for raw data output. [](https://ccusage.com/guide/pi/)

#### 3\. Direct Session Logs & Cloud Tracing

* **Local JSONL Files.** Pi automatically logs every prompt, tool call, and token count locally under `~/.pi/agent/sessions/<encoded-cwd>/`. You can inspect these files directly or ask Pi to analyze its own session folder for custom breakdowns.
* **Sentry AI Observability.** If you want cloud-based trace monitoring, follow the [Sentry Pi monitoring guide](https://sentry.io/cookbook/monitor-pi-with-sentry/) to install `@sentry/pi` and track per-prompt costs and latency in a web dashboard. [](https://www.youtube.com/shorts/kig11LxUtxk)

Are you looking to track **real-time API costs** inside your editor, check **provider subscription limits**, or analyze **historical usage** across past sessions? Let me know and I can walk you through the exact setup steps.

* [](https://pi.dev/packages/pi-usage-widget)  
Pi.dev  
pi-usage-widget · Packages - Pi coding agent  
A Pi extension that shows your usage statistics as a live widget above the editor. The widget is fully themeable: toggle, reorder,
* [](https://pi.dev/packages/pi-tool-stats)  
Pi.dev  
pi-tool-stats · Packages - Pi coding agent  
Use pi normally — the extension silently records every skill load, slash command, tool call, and tool result to \~/.pi/agent/tool-s...
* [](https://github.com/Observal/pi-insights)  
GitHub  
Observal/pi-insights: Personal usage analytics for Pi coding ...  
Scans your session history, extracts deterministic stats and LLM-powered facets, then generates a self-contained HTML report cover...

Show all

## how to hide pi install npm:pi-usage-widget and only use that command

how to hide pi install npm:pi-usage-widget and only use that command

9:03 AM

### how to hide pi install npm:pi-usage-widget and only use that command

To hide the persistent widget bar above your editor and only open the dashboard on demand via `/usage`, configure **pi-usage-widget** using its built-in settings menu: [](https://pi.dev/packages/pi-usage-widget)

1. **Open the settings menu.** Inside an active Pi session, run `/usage-settings` (or open `/usage` and navigate to the settings entry point).
2. **Disable all display modes.** In the **Enable / disable modes** section, toggle off all active widget display modes.
3. **Use `/usage` on demand.** With all persistent display modes disabled, the live bar above your editor stays hidden, while running `/usage` will continue to open the interactive dashboard whenever you want to check your stats.

_(Tip: You can also press `Ctrl+Alt+U` or run `/cycle-usage-mode` at any time to cycle through whichever modes you have left enabled.)_ 

Did disabling the modes in **`/usage-settings`** hide the bar as expected, or would you like to inspect the extension's **local configuration file** directly?

* [](https://pi.dev/packages/pi-usage-widget)  
Pi.dev  
pi-usage-widget · Packages · Pi  
Toggle which display modes appear in the Ctrl+Alt+U cycle. The widget only cycles through enabled modes.



# . sh (pi-web)

```
 ~ % npx @agegr/pi-web@latest
Downloading node-pty@1.2.0-beta.15: 7.15 MB/7.15 MB, done
 WARN  Tarball download average speed 44 KiB/s (size 80 KiB) is below 50 KiB/s: https://registry.npmjs.org/@smithy/types/-/types-4.20.0.tgz (GET) @agegr/pi-web@0.18.0: 2.38 MB/7.34 MB
 WARN  Request took 12124ms: https://registry.npmjs.org/@next%2Fswc-win32-x64-msvc
 WARN  Tarball download average speed 6 KiB/s (size 7 KiB) is below 50 KiB/s: https://registry.npmjs.org/@aws-sdk/eventstream-handler-node/-/eventstream-handler-node-3.972.42.tgz (GET)
 WARN  Request took 17631ms: https://registry.npmjs.org/@next%2Fswc-win32-arm64-msvc
 WARN  Tarball download average speed 46 KiB/s (size 353 KiB) is below 50 KiB/s: https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001826.tgz (GET)b@0.18.0: 3.39 MB/7.34 MB
 WARN  4 other warnings
 WARN  1 deprecated subdependencies found: node-domexception@1.0.0
Packages: +161
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Downloading @earendil-works/pi-coding-agent@1.6.0: 7.97 MB/7.97 MB, done
Downloading @agegr/pi-web@0.18.0: 7.34 MB/7.34 MB, done
Downloading @img/sharp-libvips-linux-x64@1.3.4: 8.22 MB/8.22 MB, done
Progress: resolved 190, reused 60, downloaded 98, added 159
Downloading next@16.4.6: 31.94 MB/43.67 MB
Downloading @next/swc-linux-x64-gnu@16.4.6: 28.80 MB/35.23 MB
^C
 ~ % npm install -g @agegr/pi-web@latest
bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [118]

installed @agegr/pi-web@0.18.0 with binaries:
 - pi-web

29 packages installed [45.85s]

Blocked 1 postinstall. Run `bun pm -g untrusted` for details.
Saved lockfile
```

```
 ~ % pi-web
▲ Next.js 16.4.6
- Local:         http://127.0.0.1:30141
- Network:       http://127.0.0.1:30141
✓ Ready in 255ms
✓ Running next.config.ts took 55ms
[pi-web] session_start dispatched to extensions for session 01a20409-6112-77c3-b80d-74b0c00cd876
[pi-web] session_start dispatched to extensions for session 01a203d2-c8e7-70b2-8645-521e2b16920b
[pi-web] session_start dispatched to extensions for session 01a203b0-54aa-76a5-b3d2-7a92181b77f7
[pi-web] session_start dispatched to extensions for session 01a20396-2602-7299-b8a9-1341c3cd5939
[pi-web] session_start dispatched to extensions for session 01a20389-4059-7340-8c27-112946420c7c
[pi-web] session_start dispatched to extensions for session 01a2037b-e923-73ed-bd65-37e12a813436
```

```
 ~ % pi-web
▲ Next.js 16.4.6
- Local:         http://127.0.0.1:30141
- Network:       http://127.0.0.1:30141
✓ Ready in 255ms
✓ Running next.config.ts took 55ms
[pi-web] session_start dispatched to extensions for session 01a20409-6112-77c3-b80d-74b0c00cd876
[pi-web] session_start dispatched to extensions for session 01a203d2-c8e7-70b2-8645-521e2b16920b
[pi-web] session_start dispatched to extensions for session 01a203b0-54aa-76a5-b3d2-7a92181b77f7
[pi-web] session_start dispatched to extensions for session 01a20396-2602-7299-b8a9-1341c3cd5939
[pi-web] session_start dispatched to extensions for session 01a20389-4059-7340-8c27-112946420c7c
[pi-web] session_start dispatched to extensions for session 01a2037b-e923-73ed-bd65-37e12a813436
^C⨯ Error: failed to pipe response
    at ignore-listed frames {
  [cause]: Error: pi-web server shutting down
      at ignore-listed frames
}
```

