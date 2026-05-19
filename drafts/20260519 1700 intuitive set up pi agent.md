<!-- it's not resilient to an empty "model.json", as an empty file is not valid json. -->

<!-- not willing to read over https://github.com/earendil-works/pi/blob/main/packages/coding-agent/CHANGELOG.md, which does not categorize or separate things. idk whether it's trivial or not. -->

# .

```
 ~ % pnpm up -g @earendil-works/pi-coding-agent

 WARN  Tarball download average speed 33 KiB/s (size 476 KiB) is below 50 KiB/s: https://registry.npmmirror.com/@earendil-works/pi-ai/-/pi-ai-0.74.1.tgz (GET)
 WARN  Request took 16393ms: https://registry.npmmirror.com/@aws-sdk%2Ftoken-providers
 WARN  Tarball download average speed 26 KiB/s (size 40 KiB) is below 50 KiB/s: https://registry.npmmirror.com/@smithy/types/-/types-4.14.2.tgz (GET)
 WARN  Tarball download average speed 15 KiB/s (size 301 KiB) is below 50 KiB/s: https://registry.npmmirror.com/@smithy/core/-/core-3.24.3.tgz (GET)
 WARN  Tarball download average speed 26 KiB/s (size 596 KiB) is below 50 KiB/s: https://registry.npmmirror.com/@mariozechner/clipboard-linux-x64-gnu/-/clipboard-linux-x64-gnu-0.3.6.tgz (GET)
 WARN  5 other warnings
 WARN  1 deprecated subdependencies found: node-domexception@1.0.0
Packages: +30 -4
++++++++++++++++++++++++++++++----
Progress: resolved 1144, reused 945, downloaded 30, added 30, done
 WARN  Issues with peer dependencies found
.
└─┬ openclaw 2026.5.7
  └─┬ @slack/bolt 4.7.2
    └── ✕ unmet peer @types/express@^5.0.0: found 4.17.25

/home/fira/.local/bin/global/5:
- @earendil-works/pi-coding-agent 0.74.0
+ @earendil-works/pi-coding-agent 0.74.1 (0.75.3 is available)

Done in 42s using pnpm v10.30.2
```

?! not latest

```
 ~ % pnpm up -g @earendil-works/pi-coding-agent --latest

 WARN  Request took 13157ms: https://registry.npmmirror.com/yaml
 WARN  Request took 14589ms: https://registry.npmmirror.com/typebox
 WARN  Request took 14640ms: https://registry.npmmirror.com/minimatch
 WARN  Request took 14649ms: https://registry.npmmirror.com/jiti
 WARN  Request took 33363ms: https://registry.npmmirror.com/glob
 WARN  18 other warnings
 WARN  1 deprecated subdependencies found: node-domexception@1.0.0
Packages: +5 -4
+++++----
Progress: resolved 1145, reused 971, downloaded 5, added 5, done
 WARN  Issues with peer dependencies found
.
└─┬ openclaw 2026.5.7
  └─┬ @slack/bolt 4.7.2
    └── ✕ unmet peer @types/express@^5.0.0: found 4.17.25

/home/fira/.local/bin/global/5:
- @earendil-works/pi-coding-agent 0.74.1
+ @earendil-works/pi-coding-agent 0.75.3

Done in 1m 35.3s using pnpm v10.30.2
```

# .

```
 ~ % pi

 pi v0.75.3
 escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 What's New

 [0.75.3] - 2026-05-18

 ### Fixed

 - Fixed undici 8 HTTP/2 destroyed-session races crashing the Node CLI by preserving the previous HTTP/1.1-only fetch dispatcher
   behavior (#4681).

 [0.75.2] - 2026-05-18

 ### Fixed

 - Fixed Bun-compiled release binaries failing to start when Bun's built-in undici shim lacks npm undici's install export (#4661 by
   @dmasiero).
 - Fixed Xiaomi MiMo generated model metadata to replay assistant tool-call messages with reasoning_content for thinking-mode
   multi-turn requests, inherited from @earendil-works/pi-ai (#4678).
 - Fixed Windows external editor handoff so vim/nvim can receive input after opening from the TUI (#4612).
 - Fixed Windows npm self-updates to move loaded native dependency packages out of the active install before reinstalling pi (#4157).
 - Fixed pi update --self detection for pnpm v11 global installs whose package path resolves through the pnpm store (#4647).
 - Fixed Windows pnpm self-updates to resolve pnpm command shims and run through pnpm instead of requiring manual updates (#4157).
 - Fixed Windows npm-family command execution to use cross-spawn instead of parsing .cmd shim internals (#4665).

 [0.75.1] - 2026-05-18

 ### Fixed

 - Fixed config selectors to scale their visible row count to terminal height (#4243 by @samjonester).
 - Fixed Anthropic-compatible API-key requests to ignore unrelated ANTHROPIC_AUTH_TOKEN environment values, avoiding invalid bearer
   credentials for providers such as Xiaomi MiMo inherited from @earendil-works/pi-ai (#4342).
 - Fixed Amazon Bedrock message conversion to skip unknown content blocks instead of failing the stream, inherited from
   @earendil-works/pi-ai (#4223).
 - Fixed Azure OpenAI Responses and OpenAI Responses error formatting to prefix HTTP status codes onto errorMessage, so transient 5xx
   and 429 errors are correctly matched by the agent-level auto-retry classifier inherited from @earendil-works/pi-ai (#4232).
 - Fixed OpenCode Go Kimi reasoning replay by normalizing streamed reasoning fields back to reasoning_content for OpenCode Go only,
   inherited from @earendil-works/pi-ai (#4251).
 - Fixed Xiaomi MiMo model metadata to use the OpenAI-compatible endpoints and openai-completions API, restoring multi-turn
   thinking/tool-call sessions inherited from @earendil-works/pi-ai (#4505).
 - Fixed JSON parse failures for compressed fetch responses under Node 26.0 by installing undici fetch globals alongside pi's global
   dispatcher (#4650, #4652, #4653).
 - Fixed npm-family package commands on Windows to avoid shell argument splitting when install prefixes contain spaces (#4623).

 ### Removed

 - Removed non-working OpenAI Codex fast model variants inherited from @earendil-works/pi-ai.

 [0.75.0] - 2026-05-17

 ### Breaking Changes

 - Raised the minimum supported Node.js version to 22.19.0.

 ### Fixed

 - Fixed compaction summary calls to use custom agent stream functions, preserving proxy-backed LLM routing (#4484).
 - Fixed system prompt and context file boundaries to use explicit XML tags instead of Markdown headings, reducing inconsistent
   boundary ingestion by models (#4541 by @herrnel).
 - Fixed OpenAI Codex generated model metadata to use the current upstream model list inherited from @earendil-works/pi-ai (#4603 by
   @mattiacerutti).
 - Fixed GitHub Copilot GPT model thinking metadata inherited from @earendil-works/pi-ai to map unsupported minimal thinking to low
   (#4622 by @mattiacerutti).
 - Fixed user-scoped npm pi packages to install under ~/.pi/agent/npm/ instead of npm's global package root, avoiding permission
   errors with system-managed Node installs (#4587).
 - Fixed Mistral requests failing after the global fetch proxy/timeout workaround by removing the custom fetch override and using
   undici 8 dispatcher support instead (#4619).
 - Fixed default output token requests for models whose advertised output limit is effectively their full context window, avoiding
   impossible provider requests inherited from @earendil-works/pi-ai (#4614).

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
0.0%/272k (auto)                                                                                             (openai) gpt-5.4 • medium
```

well... you dont have to pop up a massive changelog.

idk how to close. i simply ctrl c, up arrow, and re enter.

#

how to silence update message on pi agent

To silence the "UPDATE AVAILABLE" or update check message on the **Pi Coding Agent**, you need to disable its startup version check using environment variables or a CLI flag. \[[1](https://github.com/earendil-works/pi/issues/3005), [2](https://pi.dev/docs/latest/settings)]

Method 1: Use an Environment Variable (Persistent) \[[1](https://github.com/earendil-works/pi/issues/3005)]

The most effective way to permanently silence the update notification across your terminal sessions is to export the version check bypass variable in your shell profile. \[[1](https://pi.dev/docs/latest/settings)]

1. Open your shell configuration file (e.g., `~/.bashrc` or `~/.zshrc`) in a text editor.

2. Add the following line to the file:\
   bash

<!---->

```
export PI_SKIP_VERSION_CHECK=1
```

Use code with caution.
3\. Alternatively, you can use the offline environment variable to block all startup network operations:\
bash

```
export PI_OFFLINE=1
```

Use code with caution.
4\. Save the file and reload your shell configuration:\
bash

```
source ~/.zshrc  # Or source ~/.bashrc depending on your shell
```

Use code with caution.\
\[[1](https://pi.dev/packages/@davecodes/pi-dcp), [2](https://github.com/earendil-works/pi/issues/3005), [3](https://pi.dev/docs/latest/settings)]

Method 2: Use a CLI Flag (Per Session)

If you only want to suppress the update message for a specific session without changing your global profile settings, pass the offline flag directly when launching the agent: \[[1](https://github.com/earendil-works/pi/issues/3005), [2](https://pi.dev/docs/latest/settings)]

bash

```
pi --offline
```

Use code with caution.

_Note: Enabling the offline flag or variable will also suppress the anonymous telemetry install/update ping to the [Pi Agent Docs API](https://pi.dev/docs/latest/settings)._ \[[1](https://pi.dev/docs/latest/settings)]

If you need help configuring this inside a specific project configuration file or a custom bash tool hook, feel free to share your setup! \[[1](https://github.com/earendil-works/pi/discussions/1632), [2](https://github.com/tintinweb/pi-subagents)]

- [link](https://github.com/tintinweb/pi-subagents)\
  tintinweb/pi-subagents: Sub-agents for pi with Claude ... - GitHub\
  May 15, 2026 — json with PID-based file locking for cross-instance safety. \* Disable the feature entirely: /agents → Settings → Scheduling → disa...\
  GitHub
- [link](https://github.com/earendil-works/pi/issues/3005)\
  Make "UPDATE AVAILABLE" message toggleable · Issue #3005\
  Apr 10, 2026 — a00git commented. a00git. last month · edited by a00git. Hey @gumonteilh! You can use PI\_OFFLINE=1 env variable or pass --offline ...\
  GitHub
- [link](https://pi.dev/docs/latest/settings)\
  Settings - Pi Coding Agent\
  Telemetry and update checks. enableInstallTelemetry only controls the anonymous install/update ping to https://pi.dev/api/report-i...\
  Pi.dev

Show all

#

how to check the installed version of a global app by pnpm

To check the version of a globally installed package using `pnpm`, run the following command in your terminal:

bash

```
pnpm subcommands list --global
```

Use code with caution.

Alternative Shortcuts

You can also use shorter versions of the command to get the same result:

- `pnpm ls -g`
- `pnpm list -g` \[[1](https://github.com/google-gemini/gemini-cli/issues/6527), [2](https://medium.com/frontendweb/how-to-test-npm-packages-locally-with-pnpm-bd37cd950497)]

Check a Specific Package

If you have many global packages and want to filter for just one, append the package name to the command:

bash

```
pnpm ls -g <package-name>
```

Use code with caution.

_Example:_ `pnpm ls -g typescript`

To help you manage your setup, would you like to know how to **update** your global packages or how to **change the default directory** where `pnpm` installs them?

- [link](https://github.com/google-gemini/gemini-cli/issues/6527)\
  Auto-update uses npm instead of pnpm in non-node projects · Issue #6527 · google-gemini/gemini-cli\
  Aug 18, 2025 — If not, run pnpm ls -g to see if @google/gemini-cli is installed and matches the running version.\
  \
  \
  GitHub
- [link](https://medium.com/frontendweb/how-to-test-npm-packages-locally-with-pnpm-bd37cd950497)\
  How To Test NPM Packages Locally with PNPM?\
  Jul 21, 2023 — For example purpose, your command looks like pnpm unlink tsup-tutorial this. To verify your package, unlink from the global store ...\
  \
  \
  Medium

how to update

To update globally installed packages using `pnpm`, run the following command in your terminal:

bash

```
pnpm update --global
```

Use code with caution.

Alternative Shortcuts

You can use shorter versions of the command to get the same result:

- `pnpm up -g`
- `pnpm update -g`

Update a Specific Package

To update only one specific global package instead of all of them, add the package name to the command:

bash

```
pnpm up -g <package-name>
```

Use code with caution.

_Example:_ `pnpm up -g typescript`

Update to the Latest Major Version

By default, `pnpm up` respects the semver rules in your global package file. To force an update to the absolute latest version (even if it contains breaking changes), use the latest flag:

bash

```
pnpm up -g --latest
```

Use code with caution.

Would you like to know how to **uninstall** global packages you no longer need, or do you want to see how to **list outdated packages** before updating them?

does it update everything wo a package name

Something went wrong and the content wasn't generated.

does it update everything wo a package name

Yes, running `pnpm update --global` without a package name updates **all** globally installed packages at once.

What to Expect

- **Checks everything:** It scans your entire global dependency list.
- **Respects semver:** It updates each package to its latest safe version based on semantic versioning rules.
- **Skips breaking changes:** It will not automatically update to a new major version unless you add the `--latest` flag.

Safe Alternative

If you want to see what will change _before_ updating everything, you can run:

bash

```
pnpm outdated --global
```

Use code with caution.

Would you like to know how to **prevent specific packages** from updating, or do you need help **troubleshooting a failed update**?

# .

(an old attempt upon installation)

```

 pi v0.75.3
 escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


 hi


 Error: 401 Incorrect API key provided: sk-or-v1*************************************************************d974. You can find your
 API key at https://platform.openai.com/account/api-keys.


 help


 Error: 401 Incorrect API key provided: sk-or-v1*************************************************************d974. You can find your
 API key at https://platform.openai.com/account/api-keys.

 Resumed session

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
0.0%/272k (auto)                                                                                             (openai) gpt-5.4 • medium
```

```

 pi v0.75.3
 escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


 Model: minimax/minimax-m2.5


 hi


 The user has simply said "hi" - this is a greeting. I should respond in a friendly, concise manner and let them know I'm here to
 help with their coding tasks.

 Hi! I'm here to help you with coding tasks. I can read files, execute commands, edit code, and create new files.

 What would you like to work on?

 Switched to MiniMax: MiniMax M2.5 (free) (thinking: medium)

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
↑1.2k ↓74 R288 $0.000 0.8%/205k (auto)                                                 (openrouter) minimax/minimax-m2.5:free • medium
```

ctrl p does not give me the command menu i want, as in vscode.

it shows `{upppecase pi} - fira` as the title.

```

 pi v0.75.3
 escape to interrupt
 ctrl+c to clear
 ctrl+c twice to exit
 ctrl+d to exit (empty)
 ctrl+z to suspend
 ctrl+k to delete to end
 shift+tab to cycle thinking level
 ctrl+p/shift+ctrl+p to cycle models
 ctrl+l to select model
 ctrl+o to expand tools
 ctrl+t to expand thinking
 ctrl+g for external editor
 / for commands
 ! to run bash
 !! to run bash (no context)
 alt+enter to queue follow-up
 alt+up to edit all queued messages
 ctrl+v to paste image
 drop files to attach

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.


 Model: minimax/minimax-m2.5


 hi


 The user has simply said "hi" - this is a greeting. I should respond in a friendly, concise manner and let them know I'm here to
 help with their coding tasks.

 Hi! I'm here to help you with coding tasks. I can read files, execute commands, edit code, and create new files.

 What would you like to work on?

 Switched to MiniMax: MiniMax M2.5 (free) (thinking: medium)

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
~
↑1.2k ↓74 R288 $0.000 0.8%/205k (auto)                                                 (openrouter) minimax/minimax-m2.5:free • medium
```

ctrl c to clear?! not close? not copy?

ctrl p works. but ctrl shift p is used by ghostty...

sometimes it preserves

```
 ~ % pi
```

sometimes it clears the terminal.

it can export to jsonl or html. idk if i could build html from jsonl, making it dry. (imagine i have tens of html, and the styles and scripts just have a few copies, though git would delta compress them.)

can i export to html w a theme i like?

wtf. it even records my model switches?! i suppose config and data should be separated.


