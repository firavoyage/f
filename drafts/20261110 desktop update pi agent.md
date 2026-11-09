<!-- doesnt wanna update claude code. closed source app w documented backdoors. -->

# . run

```
 ~ % pnpm rm -g @earendil-works/pi-coding-agent
 WARN  6 deprecated subdependencies found: @xmldom/xmldom@0.7.13, glob@6.0.4, inflight@1.0.6, lodash.get@4.4.2, rimraf@2.4.5, stringify-package@1.0.1
Packages: -128
--------------------------------------------------------------------------------------------------------------------------------
Progress: resolved 1423, reused 1264, downloaded 0, added 0, done

/home/fira/.local/bin/global/5:
- @earendil-works/pi-coding-agent 0.75.3

Done in 8.1s using pnpm v10.30.2
```

```
 ~ % b add -g @earendil-works/pi-coding-agent

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [85]
Saved lockfile

installed @earendil-works/pi-coding-agent@1.5.0 with binaries:
 - pi

42 packages installed [1.65s]
```

``````

 ▀▀█  v1.5.0
 █▀ █ escape interrupt · ctrl+c/ctrl+d clear/exit · / commands · ! bash · ctrl+o more
 Press ctrl+o to show full startup help and loaded resources.

 Pi can explain its own features and look up its docs. Ask it how to use or extend Pi.

[Extensions]
  @juicesharp/rpiv-web-tools

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 What's New

 [1.5.0] - 2026-11-02

 ### New Features

 - Extension update changelogs: see what changed in installed extension packages on the next fresh launch after an update. Package
   authors can choose the changelog path, and collapseChangelog condenses the notices. See Show a changelog.
 - Faster streaming: large tool calls are parsed incrementally, and code-heavy answers and tool rows reuse highlighting and rendered
   Markdown instead of repeating the work on every update. See Keep rendering responsive.
 - Custom self-update commands: use PI_SELF_UPDATE_COMMAND or selfUpdateCommand to update pi through a wrapper or another package
   manager. See Custom update command.
 - GPT-6.1 Terra: available through OpenAI, Azure OpenAI Responses, and OpenAI Codex, with tool search, mid-conversation
   thinking-level changes, and thinking off. Codex offers a 500K context window. See Models.

 ### Breaking Changes

 - Tool argument validation runs on @earendil-works/pi-schema. TypeBox features outside JSON Schema (Type.Refine(), Type.BigInt(),
   Type.Undefined(), codecs, Format.Set() formats) no longer apply to tool arguments; see Tool parameter schemas and TypeBox. Plain
   JSON Schema tools, including MCP tools, now get the same coercion as TypeBox tools, such as converting numeric strings and
   wrapping a single value into an array. Validation failures the model sees list pi-schema's messages (- path: missing, - limit:
   expected number, got string) instead of TypeBox's (must have required properties path, must be number).

 ### Added

 - Extension packages can now show their changelog after an update. Pi reads pi.changelogPath from the package's package.json, or
   CHANGELOG.md in the package root, and on the next fresh launch shows entries newer than the last seen version under "Extension
   Updates". The collapseChangelog setting condenses this to one line per package (#5958, #8790)
 - pi.exec() accepts a maxBuffer option that limits stdout and stderr combined, and its result has a truncated field that is true
   when output exceeded the limit (#11360)
 - Device-code login (for example GitHub Copilot) now opens the verification page and copies the code when you press Enter. Providers
   can turn either action off with openBrowserOnConfirm: false or copyCodeOnConfirm: false (#9282, #9301)
 - pi update can update Pi through a wrapper or another package manager. Set PI_SELF_UPDATE_COMMAND (for example mise use -g
   npm:{packageName}@{version}) or the global selfUpdateCommand setting; pi update runs it when pi.dev reports a newer release and
   fills {packageName}, {version}, and {installSpec} from that release. See Custom update command (#7756, #5607)
 - Extensions can format the user's configured keybindings with keyText() and keyHint() from the tool render context and the message
   and entry renderer options. Importing these functions from @earendil-works/pi-coding-agent can resolve the extension's own copy of
   the package, which does not see pi's keybindings, so hints such as keyHint("app.tools.expand", "to expand") rendered without the
   key. The docs now recommend the injected functions (#4748)
 - Added persisted session-entry messageId and ISO timestamp to MarkdownTransformContext. They are available when rendering saved
   entries and undefined for live rendering (#7952 by @vipentti)
 - Added a blocked option to inline ctx.ui.custom() components so approval prompts and other custom dialogs can report that pi is
   waiting for user input. Overlays ignore the option. See Custom screens and overlays (#11428)
 - Added Usage.cost.totalFromProvider to distinguish billed totals from catalog estimates in SDK and extension usage data; combined
   usage is marked provider-reported only when every part is (#11178)
 - Added concrete responseModel metadata to messages from pi-messages providers such as Radius, including when a virtual model is
   requested. See AssistantMessage (#11265)
 - Added GPT-6.1 Terra for OpenAI, Azure OpenAI Responses, and OpenAI Codex, with tool search and mid-conversation thinking-level
   changes. It supports thinking off; Codex offers a 500K context window

 ### Changed

 - Extensions keep importing Type, Static and TSchema from @earendil-works/pi-ai: Pi maps that import to pi-ai's compat entry plus
   the TypeBox it bundles, now that pi-ai itself no longer re-exports TypeBox, and its StringEnum there stays a TypeBox TUnsafe<T>.
   The built-in tool factories (createReadTool() and the others) return TypeBoxAgentTool<typeof schema>, which keeps params typed for
   TypeBox.
 - Tightened system prompt
 - pi update for installs from the pi.dev installer no longer passes --min-release-age=0 to npm ci. The release lockfile pins every
   package, so the flag had no effect, and security scanners that block it stopped the update (#11262)
 - /model and /scoped-models now show a model's name next to its ID when the name adds words the ID lacks, such as a renamed
   models.json override (#5916, #11347)
 - MCP OAuth sign-in now uses pi's Client ID Metadata Document by default when the authorization server supports it for public
   clients, and registers a client dynamically otherwise, like Codex, Claude Code, and opencode. Clients registered before stay in
   use while their redirect URI matches. The new default oauth.clientRegistration: "auto" registers when clientName or a non-default
   callbackUrl is set; "dcr" always registers. pi mcp add --oauth-client-registration sets the mode (#11426)
 - Changed the default OpenAI model from gpt-5.5 to gpt-6.1-sol, including after ChatGPT sign-in when no model is selected (#11442)
 - Updated the built-in model catalog to models.dev v2. Realtime and image-only models are no longer offered as chat models; newer
   OpenAI and Google chat models are included

 ### Fixed

 - Updated glob matching to prevent denial of service from amplified glob patterns.
 - Fixed a saved "Do not trust" decision being ignored for projects without trust-requiring resources, for example a folder with only
   AGENTS.md. pi auto-trusted such projects, so ctx.isProjectTrusted() returned true and package commands treated them as trusted. A
   saved decision in trust.json now takes precedence; auto-trust applies only when no decision is saved (#10947)
 - Fixed Shift+Enter queueing a follow-up instead of inserting a newline in Apple Terminal setups that send ESC + Return. pi now
   checks the local Shift key state for that sequence, as it already did for plain Return; Alt+Enter without Shift still queues a
   follow-up (#11559)
 - Fixed the working status (OSC 7501) disappearing in Rex and iTerm2 during runs in regular TUI mode. Rendered messages wrote OSC
   133 prompt markers to the terminal, which the terminal treats as a new shell prompt; regular mode no longer writes them (#11519)
 - Fixed compaction, branch summaries, and bug-report summaries in SDK sessions passing the stored OAuth token back to the model
   runtime as an explicit API key. Provider auth that treats explicit keys differently from stored OAuth now sees the OAuth login, as
   normal prompts do (#11520)
 - Fixed a redundant system prompt update (tools, rules) when an extension set the same active tools in a different order, for
   example a reversed pi.setActiveTools() list. Tools that stay active now keep their order and newly activated tools are appended
   (#11495)
 - Fixed pi.exec() crashing pi with RangeError: Invalid string length when a command printed more output than fits in a string. The
   default output cap is the smaller of 256 MiB and the runtime string limit; past the cap, the command is terminated and the result
   has truncated: true and a nonzero exit code (#11360)
 - Fixed pi.exec() never returning when a command ignored SIGTERM after a timeout or abort. pi now sends SIGKILL 5 seconds later, as
   intended
 - Fixed pi install and pi remove adding ever deeper nested entries to the npm package-lock.json when the agent directory is reached
   through a symlink, such as ~/.pi linked into a dotfiles repo. pi now passes the resolved real path to npm (#11358)
 - MCP sign-in now rejects authorization endpoints and other OAuth metadata URLs that are not http: or https:. Before, a malicious
   MCP server could supply a file: or custom protocol URL, which pi passed to the platform URL handler.
 - Automatic fd and rg downloads no longer fetch x86-64 binaries on ARM32 and other architectures without a prebuilt release. pi now
   warns and recommends installing the tool with the system package manager (#11209)
 - Fixed /model search ranking letters scattered over an earlier part of an entry above a real match, for example opus listing
   gpt-oss-120b and claude-sonnet-4.5 before claude-opus-4.1 (#11220, #11296)
 - Fixed /resume search matching scattered letters anywhere in session messages and IDs, for example 1024 matching inside a session
   UUID. Session names and working directories still match fuzzily; IDs and message text now match only as exact substrings (#11220,
   #11024, #11296)
 - Fixed HTML export showing a blank page for sessions with thousands of entries (#11225, #11293)
 - Fixed HTML export not showing system messages: the system prompt and tools, and later section updates such as after /reload. pi
   --export now includes the system prompt and tools too (#11261, #3464, #11290)
 - Fixed aborting a bash command on macOS sometimes running the next command of a list such as long_step; next_step. pi now stops the
   process group before killing it (#11252, #11289)
 - Fixed large streamed tool calls taking excessive CPU time and memory because every delta re-parsed the accumulated arguments.
   Providers and agent proxy streams now parse each delta once, grammar tools no longer copy their entire input per delta, and
   interactive tool renderers run at most once per frame (#9265)
 - Fixed the login dialog opening sign-in URLs that are not web URLs, and printing control characters from sign-in, device-code, and
   info URLs, which could end a terminal hyperlink and send escape sequences to the terminal
 - Fixed tui.select.pageUp and tui.select.pageDown being ignored in slash command and file autocomplete, /settings, and the model,
   scoped models, login, fork, /mcp, and llama.cpp selectors. In fullscreen mode, PageUp/PageDown now move an open list or
   autocomplete menu instead of scrolling the transcript, and a page key bound to Ctrl+V pages autocomplete instead of pasting an
   image (#7629, based on #7680 by @muyiyr)
 - Fixed tool output and ! command output showing the parameters of control sequences with a <, = or > prefix as text, for example
   35;59;1M from a mouse report ESC[<35;59;1M or 0;276;0c from a terminal reply ESC[>0;276;0c. Text after the keypad-mode sequences
   ESC= and ESC> is still kept (#11377)
 - Fixed pi -e npm:<pkg> staying on the version from the first download. On each start and /reload, pi now reinstalls an -e npm
   package without an exact version when the registry has a newer matching version. pi -e git:<repo>@<branch> likewise stayed on its
   first checkout and is now fetched and reset to the branch; a commit-hash ref that is already checked out is not fetched. Offline
   mode and failed checks keep the cached copy (#11375, #11590)
 - Fixed Windows paths being compared case-sensitively. When the working directory and home directory differed only in drive-letter
   casing (c:\Users\me vs C:\Users\me), skills in ~/.agents/skills loaded twice, as project and user skills, and were reported as
   name collisions. The same mismatch also re-asked for saved project trust, hid sessions in a custom session directory from
   --continue and /resume, and stopped pi remove from matching configured local packages (#10488)
 - Fixed paths next to the home directory being shown with a broken ~ prefix, for example /home/me2/project shown as ~2/project when
   home is /home/me
 - Fixed pi mcp login -l and pi mcp logout -l failing with Unknown option --local. although pi mcp add and pi mcp remove accept -l.
   With -l, they now require the server to be a project server. Unknown options are now reported as typed, and a mistyped server name
   gets a suggestion, for example Did you mean "gurker"?
 - Fixed pi update naming pnpm for installs that only live under PNPM_HOME, for example a wrapper under $PNPM_HOME/global-nub/. pi
   said "not managed by a global pnpm install"; it now names the package manager only when that manager owns the install (#7756)
 - Fixed image paste, copy, and opening the browser for sign-in failing silently on WSL when the working directory is deep. Windows
   programs such as powershell.exe and explorer.exe cannot start from a directory whose \\wsl.localhost\... path exceeds 260
   characters; pi now starts these helpers from / (#11592)
 - Fixed the external editor failing silently, for example when the editor command is wrong or a Windows editor cannot start from a
   deep WSL directory. pi now shows a status message such as External editor exited with code 1; prompt unchanged (#11592)
 - Fixed tool_search and codemode searchTools() ranking a tool below tools that only mention its name in their descriptions, for
   example peekaboo app ranking mcp__peekaboo__app 14th. A tool matching more of the query's words now ranks above one matching
   fewer, a query word in a tool's name scores more than any number of mentions in its description, a tool whose whole name is in the
   query gets a large bonus, and long server instructions no longer lower the scores of that server's tools (#11331)
 - Fixed tool_search and codemode searchTools() finding nothing for Chinese, Japanese, Thai, and other non-ASCII queries, because the
   tokenizer kept only ASCII letters and digits. Words in any script now match, text without spaces between words such as 搜索记录 is
   split into words, and canonically equivalent text such as café and cafe\u0301 matches (#10816, #11037 by @haoqixu)
 - Fixed pi update stopping with git clean -fdx failed with code 1 on Windows when another pi session had a git extension's native
   module or executable open. Windows cannot delete such files, so the update left the new code with the old dependencies. pi now
   warns, installs the dependencies anyway, and retries the clean on the next update (#11597)
 - Fixed tool rows and streamed answers highlighting the same code again on every redraw. A running codemode row highlighted its
   whole script on every progress update and timer tick, a complete write row its whole file on every update and expand toggle, a
   streamed write its first 50 lines on every delta, and a streamed answer every earlier code block on every delta. Rows now reuse
   their last highlighting until the code, theme, or loaded grammars change, and assistant messages keep their rendered Markdown
   blocks while streaming (#10971)
 - Fixed resized photos being sent as multi-megabyte PNGs even when JPEG was much smaller, causing large requests to fail or time
   out. Image resizing now tries the smaller encoding first (#11551)
 - Fixed pi update --extensions reporting success without warning when npm's stale registry metadata left a package at its old
   version. pi now reports the installed and expected versions (#11536)
 - Fixed skill validation warnings being labeled [Skill conflicts] even when there was no name collision. They are now shown under
   [Skill warnings] (#11521)
 - Fixed codemode tool descriptions including entire union and multi-line output types in every request. Object unions now summarize
   their fields and discriminators; other multi-line types point to describeTool() for the full declaration (#11501)
 - Fixed the model-scope startup notice being left in the shell after exiting fullscreen mode. It now appears inside pi's fullscreen
   header (#11508)
 - Fixed startup from a deleted working directory crashing with an uncaught uv_cwd stack trace. pi now asks the user to change to an
   existing directory (#11509)
 - Fixed failed session writes leaving entries in memory that were absent from disk, so later entries pointed to missing parents and
   resumed sessions lost earlier history and tools (#11460)
 - Fixed /tree branch summaries ignoring the session's thinking level, which could make reasoning models reject summary requests with
   an unsupported none effort (#11444)
 - Fixed hidden thinking with an empty hidden-thinking label still adding blank rows before answers and tool calls (#11402)
 - Fixed package installation and removal printing npm audit and funding advice, including npm audit fix instructions that could
   install a second copy of pi into the package directory (#11409)
 - Fixed replacing an extension editor while a dialog was open hiding the dialog and leaving it unanswerable. The new editor now
   appears after the dialog closes (#11431)
 - Fixed grep context lines being offset from ripgrep's match line numbers when a file contains a lone carriage return (#11398)
 - Fixed --model <provider>/<id> failing for provider IDs containing slashes, such as URL-derived llama.cpp provider IDs (#11394)
 - Fixed slow session forking on filesystems where opening files is expensive by writing the fork through one file handle (#11253)
 - Fixed pi.exec() corrupting UTF-8 characters split across stdout or stderr chunks (#11312)
 - Fixed pi.exec() returning empty stderr when a command could not be spawned, such as a missing executable. It now preserves the
   spawn error message (#11257 by @muyiyr)
 - Fixed a configured package failing to install crashing startup. pi now skips the package, reports an extension warning, and
   retries on the next start or /reload; explicit install and update commands still fail with a nonzero exit (#11304 by @Lincoln504)
 - Fixed the todo extension example crashing the TUI when a tool call failed argument validation (#8057 by @cyzlmh)
 - Updated undici to 8.12.3 and the Gondolin extension example to 0.14.0 for security advisories
 - Fixed OpenRouter cost totals using catalog estimates instead of reported billing for Chat Completions and Anthropic Messages. BYOK
   totals include both OpenRouter charges and reported upstream costs; component costs remain catalog estimates (#9980)
 - Fixed OpenCode Zen and OpenCode Go requests using shared endpoints instead of their protocol-specific OpenAI, Anthropic, Google,
   and System One endpoints (#11434 by @vimtor)
 - Fixed Zhipu/Z.ai usage-limit errors (code 1308) being treated as transient HTTP 429 errors, causing automatic retries that cannot
   succeed until the usage cap resets (#11537)
 - Fixed LiteLLM's ContextWindowExceededError not being recognized as context overflow (#11492)
 - Fixed Gemini tool schemas sending unsupported const keywords. They are now converted to single-value enum schemas without
   rewriting literal data in defaults, examples, or enum values, or losing properties named __proto__ (#11308)
 - Fixed the faux provider counting simulated cache-write tokens as both input and cache writes
 - Fixed Orca terminals falling back to text for inline images. Orca is now recognized as supporting true color and hyperlinks, and
   Kitty images when it advertises ORCA_IMAGE_PROTOCOL=kitty (#9329 by @XRX193)
 - Fixed bare Markdown URLs swallowing following CJK punctuation and text; explicit Markdown links and angle autolinks are unchanged
   (#10934 by @haoqixu)
 - Fixed Kitty-protocol F1–F12 shortcuts, including modified function keys, not being recognized, and F13+ and other functional keys
   inserting invisible private-use characters into the editor (#11419, #11345)
 - Fixed Kitty images inside padded or colored boxes disappearing when their first row scrolled above the fullscreen viewport.
   Partially visible images are now cropped correctly, including beside other text
 - Fixed deeply nested Markdown blockquotes producing exponentially many lines, hanging or crashing rendering once their borders
   exhausted the available width (#11272)
 - Fixed Claude sessions failing with role 'system' must precede an 'assistant' message when a system update was followed by an empty
   or reasoning-only assistant reply (#11091)
 - Fixed Claude mid-conversation thinking-level changes failing with Invalid effort level on accounts whose organization caps effort
   below high (#10063)
 - Fixed Kimi K3.1 Pro models using Kimi K2 request settings on Kimi Coding, Moonshot, and OpenCode Go. They now send the correct
   reasoning effort, preserve earlier thinking, accept tools added mid-conversation, and use K3-family pricing
 - Fixed OpenCode DeepSeek V4.1 Flash requests failing when long cache retention sent the unsupported prompt_cache_retention
   parameter
 - Fixed GPT-5.4 and GPT-5.5 failing with Missing namespace for function_call after switching from a model that had called tools
   (#11415)
 - Fixed Bedrock Claude requests failing when preferred strict tools exceed the provider's strict-tool limits. Requests now retry
   once with preferred tools non-strict while keeping required strict tools strict (#11416)
 - Fixed OpenRouter's ~anthropic/claude-*-latest aliases losing earlier thinking after tool calls by using the Anthropic Messages API
   (#9534)
 - Fixed terminal titles containing control characters being able to inject terminal escape sequences, and pi-messages streams
   accepting invalid content-block indices
 - Fixed fullscreen double-click selection splitting paths and tokens at ~, ., \, and +; word characters now match iTerm2's defaults
   (#10980)
 - Fixed display math wider than the content area being split apart by line wrapping; it now falls back to raw LaTeX (#11483)
 - Fixed styled words ending exactly at the wrap width adding a leading space on the next line, and strikethrough leaking into
   wrapped-line padding (#10925)
 - Fixed /tree branch summaries including failed assistant replies and original content that context edits had hidden or replaced.
   Summaries now honor the same context edits as live requests and compaction (#11602)

 ### Removed

 - Removed the native OS sandbox/ extension example and its dependency. Use the Gondolin example or the containerization guide.

 [1.4.0] - 2026-10-21

 ### New Features

 - Image input for classifiers: codemode models.classify() accepts images for TypeSafe's Jev and Cloudflare's Clef models on
   typesafe, cloudflare-workers-ai, and OpenRouter. See Use classifier models and Codemode.
 - Models Configuration reference: every provider, model, model override, and compatibility field of models.json, generated from its
   schema. See Models Configuration.
 - Summaries without a fixed output cap: compaction and branch summaries use the model's output limit, so long reasoning no longer
   makes them fail. See Compaction.
 - Codemode waits for a free worker: parallel scripts and in-process subagents queue instead of failing, and PI_CODEMODE_MAX_WORKERS
   raises the limit. See Codemode limits.
 - Rex terminal support: OSC 8 hyperlinks, truecolor, and inline images.

 ### Added

 - Added a Models Configuration reference generated from the models.json schema, listing all provider, model, model override, and
   compatibility fields (#10790)
 - Codemode models.classify() now accepts images for TypeSafe's Jev and Cloudflare's Clef models on typesafe, cloudflare-workers-ai,
   and OpenRouter, and lists Clef Omni and Jev 1.14 on Workers AI.
 - Provider-level compat in models.json now also applies to classifier models, with the System One fields imageInput and
   sendImageOptInHeader for proxies that serve another service's classifiers. Extension classifier models accept compat too.
 - Added MiniMax-M3.1-Flash to the minimax and minimax-cn providers, with thinking levels low through max (#11121)
 - Added support for the Rex terminal: OSC 8 hyperlinks, truecolor, and inline images (#11131, #11150 by @petrroll, #11183 by
   @nihaals)

 ### Changed

 - Provider attribution headers now come from pi-ai's client identity. Extensions' before_provider_headers handlers no longer see the
   OpenRouter, NVIDIA NIM, and OpenCode attribution headers; returning null for one still removes it. Cloudflare requests send pi's
   detailed User-Agent instead of pi-coding-agent, as do GitHub release checks for tool downloads, and OpenCode requests send
   x-opencode-client whenever attribution is enabled, not only with a session.
 - generateSummary() and generateSummaryWithUsage() now ignore their reserveTokens parameter. Summary requests use the model's output
   limit instead.
 - Changed the default GitHub Copilot model from gpt-5.4, which Copilot retired, to gpt-6.1-sol.
 - Changed the default NVIDIA model to nvidia/nemotron-3.5-super-vl-120b-a12b (#10910 by @cv)
 - Changed the default Xiaomi model to mimo-v2.6-pro for the xiaomi and Xiaomi Token Plan providers, since mimo-v2.5-pro left the
   catalog.
 - Grok 4.3 and Grok 4.5 on the xai provider now offer the xhigh thinking level.
 - Sign in with ChatGPT: ChatGPT Business workspace usage-limit errors are not retried and tell the user to ask their workspace admin
   to increase the limit.

 ### Fixed

 - Fixed compaction and branch summaries failing with "generation hit the token cap" when reasoning used most of the fixed summary
   output limit. Summaries now use the model's output limit, and compaction.reserveTokens only controls when compaction starts
   (#9512, #9075).
 - Fixed models.schema.json missing descriptions for provider and model fields, so editors showed no hints for them (#10790)
 - Fixed pi update failing with "Managed install marker is missing or invalid" when managed-install.json starts with a UTF-8 BOM,
   which Windows PowerShell 5.1 adds when it rewrites the file.
 - Fixed HTML export showing literal asterisks for Markdown bold and italic next to CJK punctuation (#3353, #10154)
 - Fixed the terminal staying in mouse-tracking, focus-reporting, Kitty keyboard, and alternate-screen modes when pi exits without
   its normal terminal teardown, which flooded the shell prompt with escape sequences (#11170)
 - Fixed concurrent extension select/confirm/input/editor dialogs and inline custom() components in interactive mode: a second dialog
   replaced the first and the first promise never settled; closing the visible dialog now shows the previous one again (#11166,
   #9909)
 - Fixed pasting in the shell hanging after copying text in pi and suspending it with Ctrl+Z on Linux: the background
   wl-copy/xclip/xsel process that keeps serving the clipboard was suspended along with pi (#11179)
 - Fixed codemode scripts failing immediately when both codemode workers are busy, for example with parallel codemode calls or
   in-process subagents. Scripts now wait up to 60 seconds for a free worker, and PI_CODEMODE_MAX_WORKERS raises the limit of two
   workers (#11184)
 - Fixed extensions failing to load when importing @earendil-works/pi-ai/models (e.g. for clampThinkingLevel) by exposing the subpath
   through the extension loader aliases and virtual modules (#11156)
 - Fixed mcp.json files that start with a UTF-8 BOM failing to parse, which skipped all their MCP servers and made pi mcp add/pi mcp
   remove fail (#11191)
 - Fixed /compact <instructions> ignoring the instructions when summarizing the start of a turn that compaction splits. When the
   split turn was the only new content since the last compaction, the instructions were ignored entirely (#11058)
 - Fixed resumed sessions and /tree navigation leaving extension tools inactive when the branch recorded its tools before they were
   registered, such as tools from extensions installed after the session started. Extension tools the branch never added or removed
   are now active unless they are registered with defaultActive: false (#11062, #11075)
 - Fixed sessions breaking after recovery from a response cut off at the output limit: the truncated tool call was omitted but its
   tool results were kept, so providers rejected every later request (#11227, #11233 by @petrroll)
 - Fixed the grep tool following RIPGREP_CONFIG_PATH, where options such as --fixed-strings silently changed regex searches into
   literal ones. The tool now runs rg --no-config (#11203, #11230 by @petrroll)
 - Fixed Windows shell detection rejecting runnable Microsoft Store shell aliases (#9504 by @petrroll)
 - Fixed Windows shell detection missing PowerShell outside PATH and the legacy WSL bash.exe launcher when Windows is not installed
   in C:\Windows. pi now checks %ProgramFiles%\PowerShell\7, %SystemRoot%\System32\WindowsPowerShell\v1.0, and %SystemRoot% (#9501 by
   @petrroll)
 - Fixed GitHub Copilot sessions with large request bodies, such as many images, failing with HTTP 413 failed to parse request
   instead of compacting and retrying (#11016 by @petrroll)
 - Fixed the openai-codex provider offering gpt-5.5 and gpt-5.3-codex-spark, which always fail for ChatGPT accounts (#11173 by
   @lucasmeijer)
 - Fixed whitespace-only tool output (for example a bare \r\n from bash) making OpenAI Completions, OpenAI Responses, and Google
   requests fail with a 400 (#8720)
 - Fixed automatic retry not triggering for more gateway upstream failures, stream disconnected before completion errors relayed by
   Codex CLI proxies, and transient Google Vertex OAuth token refresh failures, and retrying errors because of digits inside request
   ids or byte counts (#10920, #11057, #10996)
 - Fixed OpenAI Responses models losing the prompt cache on every deferred tool load after a tool was removed (#10940)
 - Fixed Cloudflare Workers AI classifier pricing: Clef Flash costs $0.038 and Jev $0.042 per million input tokens instead of Jev
   being listed as free.
 - Fixed an unclosed $$ display-math block swallowing or corrupting every Markdown table after it (#11159)
 - Fixed Markdown bold and italic not rendering next to CJK punctuation (#10730 by @theBucky)
 - Fixed @ file autocomplete returning no results for queries containing regex metacharacters such as [ or ( (#10972)

 [1.3.0] - 2026-10-15

 ### New Features

 - Choose where /share uploads: sessionShareDestination selects auto, gist, or radius. See Sessions and context and Export or share a
   session.
 - Cache-preserving thinking level changes on OpenAI GPT-6: changing the thinking level mid-session with an API key keeps the prompt
   cache.
 - Kimi Code over Chat Completions: tools added mid-conversation no longer invalidate the prompt cache. models.json base URL
   overrides must now include /v1. See Providers.
 - Clean model switching: thinking from a previous model is dropped instead of being shown to the new model as text.
 - Resumed sessions keep their active tools: --tools +name/-name applies on top of them. See Tools.

 ### Added

 - Changing the thinking level mid-session on OpenAI GPT-6 models (API key) now keeps the prompt cache (#10853)
 - Added the sessionShareDestination setting to choose automatic, GitHub gist, or Radius uploads for /share (#10870 by @vegarsti)

 ### Changed

 - Changed the kimi-coding provider to use OpenAI Chat Completions at https://api.kimi.com/coding/v1, the protocol used by the
   official Kimi Code client. K3, K3-256K, and Kimi For Coding now accept tools added mid-conversation without invalidating the
   prompt cache. models.json overrides of the kimi-coding base URL must now include /v1 (#10720)
 - Changed model switching to drop thinking blocks from earlier assistant messages produced by a different model, instead of sending
   them as plain text. The new model previously saw the old model's reasoning as part of its replies and could start writing its own
   reasoning into the visible answer (#10995)

 ### Fixed

 - Pinned internal Pi dependencies to exact release versions to prevent fresh installs from mixing incompatible packages (#10865)
 - Fixed resumed sessions dropping tools activated during the session. Resume now restores the session's active tools, with --tools
   +name/-name entries applied to them, unless --tools with tool names, --no-tools, or --no-builtin-tools selects tools explicitly
   (#10785)
 - Fixed stopping a codemode script or reaching its deadline waiting for a non-interruptible built-in to return on Bun (#10748)
 - Fixed repeated codemode timeouts or aborts accumulating surviving workers; admission now limits live workers to two across
   sessions, counting cancelled workers until actual exit (#10748)
 - Fixed --model choosing a provider by catalog order when several providers offer the match; Pi now prefers the provider with
   credentials and otherwise reports the ambiguity. --models and enabledModels add a model for each provider that offers it and warn
   about the ambiguity (#10160)
 - Fixed read line-range labels for numeric-string or null arguments in the TUI, session tree, HTML exports, and examples (#9887)
 - Fixed the Nix flake build failing when a provider switched APIs: the model catalog pin is now refreshed from the newest published
   catalog when its model API groups differ, and releases pin the newest catalog and build with it before tagging (#10985)
 - Fixed the Nix package putting its Node.js first on PATH, which made bash tool shells use Pi's Node instead of the user's node/npm.
   Pi's Node is now only a fallback (#10519)
 - Fixed prompt templates dropping empty quoted arguments ("" or ''), which shifted later positional arguments and prevented
   positional defaults from applying (#10867)
 - Fixed the Nix package build failing in its install check because it still expected chord and esbuild, which Pi no longer depends
   on
 - Fixed tool-call argument parsing dropping fields when a string contains an invalid \u escape such as \usepackage (#10868)
 - Fixed Anthropic and Bedrock Claude requests failing with a 400 when an error tool result contains images; the images are now sent
   after the tool results of the turn, so the model still sees them (#10794)
 - Fixed OpenCode Go Gemini models failing with a 404 by moving OpenCode Zen and OpenCode Go to the opencode.ai/inference endpoints,
   and added Google Generative AI support to the OpenCode Go provider
 - Fixed OpenCode Go MiniMax M2.7 failing with "Model does not support this protocol" by using the Anthropic Messages API
 - Fixed automatic retry not triggering for gateway Unable to forward upstream stream errors (#10920)
 - Fixed automatic retry not triggering for The service is temporarily unavailable errors, which also made compaction fail on the
   first attempt (#10965)
 - Fixed OpenAI-compatible responses showing thinking after the answer when a proxy such as LiteLLM sends reasoning and content in
   the same stream chunk (#10926)
 - Fixed Gemini 4 Argon requests on Google Vertex failing with "Thinking budget is not supported", and its thinking level being
   ignored on the Gemini API (#10890)
 - Fixed Xiaomi MiMo models failing with a 400 at the minimal thinking level; they now expose only the off and high levels (#10818)
 - Fixed openai-codex/gpt-6.1-sol using a 272K context window instead of the 500K window Codex now provides (#10840)
 - Fixed tool calls whose final arguments are malformed JSON silently running with only the fields parsed before the error; they now
   fail validation and show the model the raw arguments it sent (#10897)
 - Fixed Claude Haiku 5.5 and Claude Opus 5 not supporting the off thinking level (#10753)
 - Fixed done() of an extension's ctx.ui.custom({ overlay: true }) closing the topmost overlay instead of its own, which left the
   finished overlay on screen and another extension's dialog unresolved (#10648, #10999 by @masonc15)

 [1.2.0] - 2026-10-12

 ### New Features

 - Per-key OpenRouter model lists: with an OpenRouter key, Pi lists only the models that key may use, with the key's context size,
   max output, and prices, including regional endpoints set in models.json. See OpenRouter.
 - Published configuration schemas: add $schema to settings.json, models.json, keybindings, and themes for editor validation and
   completion. See Settings, Models, Keybindings, and Themes.
 - Clipboard copies over remote sessions: PI_CLIPBOARD_OSC52=1 sends copied text to a remote client's clipboard when Pi cannot detect
   the remote session, such as a multiplexer attached from another machine. See Pi Process Configuration.
 - Codemode improvements: tool declarations show input constraints such as integer, minimum/maximum, and default, and codemode rows
   show elapsed and total time. See Codemode.
 - before_agent_start for extension-triggered runs: runs started by pi.sendMessage(..., { triggerTurn: true }) go through the same
   setup as prompts. See Events and concurrency.

 ### Breaking Changes

 - Published generated configuration schemas for models, settings, keybindings, and themes at https://pi.dev/schemas/*.schema.json.
   The theme schema moved to https://pi.dev/schemas/theme.schema.json; themes loaded during startup now receive the same schema
   validation as later reloads. Update theme $schema references, define reusable colors under vars, and remove unsupported metadata
   (#9880, #10751 by @christianklotz)
 - Changed before_agent_start to also fire for runs started by pi.sendMessage(..., { triggerTurn: true }) while idle.
   BeforeAgentStartEvent is now a union on messageType: "user" events carry prompt and images, and "custom" events carry the starting
   message and no prompt. Messages returned by handlers are added to both kinds of run, and pending deliverAs: "nextTurn" messages
   are delivered with the custom-message run. Handlers that should act only on user prompts must check event.messageType === "user"
   (#10267, #5581, #10739 by @davidbrai)
 - Changed the session to count as busy while a run starts, including during before_agent_start handlers: ctx.isIdle() is false,
   pi.sendMessage() queues into the starting run instead of starting a second run that failed with "Agent is already processing",
   pi.sendUserMessage() requires deliverAs, and an abort requested meanwhile aborts the run once it starts (#10739 by @davidbrai)
 - Changed pi mcp list --json to report resources: true for servers that offer resources instead of resources and resourceTemplates
   counts; Pi no longer lists resources when connecting (#10526)

 ### Added

 - Added reachesTools to tool definitions, so tools that reach other tools (such as codemode and tool_search) declare which tools a
   call may reach; the MCP extension uses it to wait for the servers a call needs and to decide whether a replacement codemode or
   tool_search tool can reach MCP tools
 - Added aliases to tool namespaces; codemode's describeNamespace() and the namespace option of searchTools() match them, and MCP
   namespaces use the server name
 - Added per-key OpenRouter model lists: with an OpenRouter key, Pi lists only the chat models that key may use, with the key's
   context size, max output, and prices, including guardrails and regional endpoints set as the base URL in models.json. The list is
   saved and used offline (#10353, #10672 by @davidbrai)
 - Added PI_CLIPBOARD_OSC52=1 to send copied text to the terminal with OSC 52 after the local clipboard write, so copies reach a
   remote client's clipboard when Pi cannot detect the remote session, such as multiplexer attaches from another machine or remote
   IDE daemons (#10826, #10835, #10114)
 - Added elapsed time while a codemode script runs and its total time once finished to the codemode tool row, like bash rows (#10708)

 ### Changed

 - Changed the showHardwareCursor setting to use only the terminal cursor instead of also drawing Pi's reverse-video cursor
 - Changed codemode tool declarations to show input constraints such as integer, minimum/maximum, length, pattern, and default as @
   tags on property comments, so scripts see them without the tool repeating them in descriptions (#10707)
 - Changed codemode declarations of MCP tools to spell out the result type (content, structuredContent, isError) instead of referring
   to CallToolResult<T>, which describeTool(), searchTools(), and ALL_TOOLS showed without defining it; the codemode description no
   longer includes the shared MCP types
 - Changed serializeConversation() (compaction, branch summaries, bug reports) to omit thinking blocks; replayed thinking is often
   not in the live context, so including it could make a summarization request larger than the context it summarizes and fail

 ### Fixed

 - Fixed codemode ignoring a // @options: line that is not the first line of the script, which ran the script without the requested
   timeout_ms; the call now fails with an error before the script runs (#10631)
 - Fixed Mistral streams being aborted mid-generation (e.g. during long thinking) after the request timeout; the timeout now applies
   only to waiting for response headers (#10609)
 - Fixed a symlinked AGENTS.md in a git worktree nested inside its main repo causing no project context file to load (#10681)
 - Fixed the code mode tool description claiming every failed tool call rejects; a tool that declares an output schema resolves with
   its value on failure too (e.g. bash with a nonzero exit)
 - Fixed runs started by pi.sendMessage(..., { triggerTurn: true }) removing system prompt sections added in before_agent_start after
   their first tool call, which changed the prompt mid-run and broke the provider prompt cache twice per run (#10267, #10739 by
   @davidbrai)
 - Fixed codemode blocking the process for seconds to minutes after scripts with many text() calls; joining the output items was
   quadratic (#10678)
 - Fixed print mode (-p) exiting 0 without a warning when the final response was cut off at the model's output token limit; it now
   prints the partial text, writes a warning to stderr, and exits 1 (#10799)
 - Fixed pi mcp login --help and the CLI docs describing --timeout as only the wait for the browser; it limits the whole sign-in
   (#10636)
 - Fixed ~ not being expanded in !pattern, +path, and -path entries of the extensions, skills, prompts, and themes settings, so
   entries like !~/skills/pdf matched nothing (#10765)
 - Fixed MCP servers with resources registering no tools until every resource was listed; Pi no longer lists resources when
   connecting, so /mcp and pi mcp list show that a server offers resources instead of counting them (#10526)
 - Fixed MCP tool calls failing when the server returns structured content that is not an object (an array, null, or a primitive, as
   MCP 2026-07-28 allows); codemode declarations of MCP tools without an output schema now type structuredContent as unknown instead
   of an object (#10416)
 - Fixed reading or writing auth.json on Windows failing with EPERM when the previous lock folder was still being deleted; Pi now
   retries briefly before reporting the error (#10801)
 - Fixed OpenRouter router models such as openrouter/auto showing a cost of -$1,000,000 per 1M tokens; OpenRouter's negative
   placeholder prices are now 0 ([#10672](https://github.com/earendil-works/pi/pull/10672) by
   [@davidbrai](https://github.com/davidbrai))
 - Fixed Anthropic requests failing when the provider rejects the strict tool set for grammar size, tool count, or union limits; Pi
   now retries once with preferred tools non-strict (#10409)
 - Fixed "The upstream provider returned an error" not being retried as a transient provider error (#10842)
 - Fixed focused fullscreen overlays blocking mouse-wheel scrolling of the transcript (#10769)
 - Fixed fragmented terminal color replies leaking hex values into the prompt and opening the external editor (related reports:
   #10256, #10657)
 - Fixed inline images not rendering in Herdr since 1.1.0 (#10774 by @ogulcancelik)
 - Fixed key bindings that name a shifted symbol, such as + or ctrl++, not matching under the Kitty keyboard protocol or
   modifyOtherKeys (#9880 by @christianklotz)
 - Fixed the compaction status indicator embedded in a custom editor using the default muted colors instead of the editor border or
   thinking-level color, as the working indicator does (#10809, #10810 by @Jay-Madden)
 - Fixed MCP tool calls that were cancelled or timed out while waiting for an OAuth refresh still being sent to the server once the
   refresh finished (#10598)
 - Fixed MCP OAuth sign-in accepting an authorization response with an iss parameter that could not be checked because no
   authorization server metadata was discovered; sign-in now fails with an issuer mismatch. Reported by @AizenvoltPrime
 - Fixed codemode failing with a broken bridge error when Pi runs under node --watch on Node 24 or 26 (#10725)

 ### Removed

 - Removed the unreleased experimental server, client, and plugin stack (src/experimental, src/cli/experimental) and its source-only
   ./client and ./experimental/plugin exports; none of it was part of the published package. The @earendil-works/pi-client,
   @earendil-works/pi-protocol, and @earendil-works/pi-server packages it used are removed and no longer released
 - Removed the dependency on @earendil-works/chord

 [1.1.0] - 2026-10-07

 ### New Features

 - Program status reporting: terminals and agent dashboards that support OSC 7501 see whether Pi is working, blocked on a dialog or
   login, done, or failed. See Program status.
 - Claude Haiku 5.5: anthropic/claude-haiku-5-5, with adaptive thinking up to xhigh/max effort.
 - Adjust default tools with +name/-name: --tools entries like pi -t +codemode,-write change the default selection instead of
   replacing it. See Tools.
 - GPT-6 Luna and image classification: OpenAI's GPT-6 Luna is available as a classifier model through the Decisions API, and
   codemode's models.classify() accepts images for classifiers that support them. See Use classifier models.
 - Native llama.cpp decision models: Julia-1, Laya, Kev, lev, and OpenJev served by llama.cpp 0.6.0 or later run natively as
   classifiers through /v1/systemone. See Classification.

 ### Added

 - Added +name and -name entries to --tools, which change the default tool selection instead of replacing it, for example pi -t
   +codemode
 - Added durationMs to the tool render context and to tool_execution_end extension events: the recorded execution time of a final
   tool result (#10549)
 - Added outputPad to the tool render context (#10557 by @rwachtler)
 - Added OpenAI's GPT-6 Luna as a classifier model through the Decisions API, available with OPENAI_API_KEY (see Use classifier
   models)
 - Added images to codemode's models.classify() context, so classifiers that accept images, such as GPT-6 Luna, can judge them
 - Added program status reporting with OSC 7501: terminals and agent dashboards that support it see whether Pi is working, blocked on
   a dialog or login, done, or failed. PI_PROGRAM_STATUS=1|0 overrides detection (see Terminal setup) (#10607)
 - Added aborted to agent_settled session, extension, and JSON events, so integrations can tell a cancelled run from a finished one
   (#10607)
 - Added Claude Haiku 5.5 (anthropic/claude-haiku-5-5), with adaptive thinking up to xhigh/max effort and prompt caching on Bedrock
 - Added native llama.cpp decision models: Julia-1, Laya, Kev, lev, and OpenJev served by llama.cpp 0.6.0 or later are listed only as
   classifiers through /v1/systemone instead of as chat models (see Classification) (#10382)

 ### Changed

 - Changed outputPad to also apply to ! command output, tool output, and summary blocks (#9946, #10557 by @rwachtler)
 - Changed pi mcp login --timeout to limit the whole sign-in, including requests to the authorization server, instead of only the
   wait for the browser (#10565)

 ### Fixed

 - Fixed bash and PowerShell results losing Took after reloading a session, and the live Took including wall-clock steps; both now
   show the recorded execution time (#10549)
 - Fixed managed installs keeping every old release; pi update now keeps only the new release and the one it updated from (#10392,
   #10511 by @davidbrai)
 - Fixed standalone binaries loading .env, .env.local, and .env.development from the launch directory into Pi's environment (#10473)
 - Fixed !! command headers losing their dim color once output arrives (#10557 by @rwachtler)
 - Fixed the codemode description not marking searchTools(), describeTool(), and describeNamespace() as async, which led models to
   serialize the unawaited promise as {} (#10555)
 - Fixed codemode output items running together, so models could not tell where one text() or console.log() output ended and the next
   began. With several text items, each now starts with a ==> text N/M <== line, and console calls follow the other output in one
   <console_output> block with one line per call
 - Fixed /mcp waiting for all servers to connect before opening; the manager now updates live and remains usable while enabling,
   reconnecting, or disabling servers (#10562)
 - Fixed images being dropped as "could not be resized" when running under node --watch on Node 24.19+ and 26.x, where Node posts its
   own messages on the image resize worker channel (#10527)
 - Fixed clipboard paste doing nothing in Termux, and failed copies there omitting the Termux:API install hint (#10391)
 - Fixed ! and RPC bash output keeping fragments of color codes, such as a stray m, when a code was split across output chunks
   (#10504)
 - Fixed MCP OAuth sign-ins that could not be cancelled while waiting on the authorization server and kept running after the session
   ended. The sign-in screen now cancels with Esc at every step, session shutdown aborts a running sign-in, and each request to the
   authorization server times out after 15 seconds (#10565)
 - Fixed shutdown waiting up to 15 seconds to refresh an MCP OAuth token that was about to expire, only to close the server's session
   (#10565)
 - Fixed the fullscreen text selection surviving session switches and other transcript rebuilds, which highlighted unrelated text in
   the new transcript (#9311, #10567 by @christianklotz)
 - Fixed OpenAI models on Bedrock ignoring the thinking level and always running at Bedrock's default reasoning effort (#9331, #10142
   by @jsanter27)
 - Fixed model headers in models.json not overriding the originator and User-Agent headers of Codex requests (#10429 by @lucasmeijer)
 - Fixed server_busy and servers are currently busy provider errors ending the turn instead of being retried (#10543)
 - Fixed Mistral responses that end with finish_reason: "error" not being retried (#10487)
 - Reduced context-limit request failures by estimating input at 3.5 characters per token instead of 4 when calculating output limits
   (#10497)
 - Fixed Radius models disabled by an organization owner still being listed
 - Fixed Anthropic browser login failing with "localhost refused to connect" when port 53692 is reserved or in use, for example by
   Hyper-V/WSL port exclusions on Windows: login now falls back to a free loopback port (#10571)
 - Fixed session costs undercounting long prompts on models with prompt-length pricing tiers, such as Claude Haiku 5.5, Gemini 3.1
   Pro, and GPT-5.4, through OpenCode, OpenCode Go, OpenRouter, Vercel AI Gateway, Google, MiniMax, and other providers
 - Fixed Markdown links not being clickable in Herdr (#10573)

 [1.0.4] - 2026-10-05

 ### New Features

 - Tool patterns and --no-mcp: --tools and --exclude-tools accept * patterns, for example --tools read,codemode,'mcp__radius__*'
   keeps only one MCP server's tools. --tools now keeps MCP tools unless an entry starts with mcp__, and --no-mcp turns off MCP for
   one run. See Tools and MCP tools.
 - Codemode persists images: tools.read() on an image file now gives back an image block that image() can show. See Call tools.

 ### Added

 - Added * patterns to --tools and --exclude-tools, for example --tools read,codemode,'mcp__radius__*'
 - Added --no-mcp to disable the built-in MCP support for one run

 ### Fixed

 - Fixed syntax highlighting losing colors after the first line of multiline strings and comments in fenced code blocks (#10143)
 - Fixed codemode scripts not receiving images from read: tools.read() now resolves to an image block for image files, which image()
   shows (#10251)
 - Fixed MCP OAuth sign-in failing with invalid_redirect_uri on servers with OpenID Connect client registration, such as
   mcp.modem.dev: pi now registers as a native client (#10493)
 - Fixed --tools removing MCP tools, which left pi --tools codemode without any MCP servers. --tools now keeps MCP tools unless an
   entry starts with mcp__
 - Fixed MCP session shutdown returning while a server was still connecting, leaving its transport open until the server answered or
   timed out (#10249)
 - Fixed system prompt rules and the skills hint naming tools hidden by prepareLoadout. Hidden tools are left out of the rules, the
   skills hint names no tool when the file reader is hidden, and codemode shows each tool's prompt guidelines with its declaration;
   ToolLoadout gains getPromptGuidelines() (#10343)
 - Fixed Bedrock requests that fail with The pending stream has been canceled after a stalled HTTP/2 connection not being retried
   automatically (#10379)
 - Fixed codemode scripts that patch built-ins (for example Array.prototype.toJSON = ...) crashing pi and leaving the tool call
   unsettled. Built-ins are now frozen before the script runs, so such patches have no effect (#10444)

 [1.0.3] - 2026-10-05

 ### New Features

 - Azure Foundry Chat Completions — The azure provider (renamed from azure-openai-responses) now also serves Foundry Chat Completions
   deployments, starting with azure/deepseek-v4-pro. See Azure OpenAI.
 - Codemode images saved to files — image() also writes each image to a temp file and names the path in the result, so later turns
   can copy or move generated images. See Generate images.

 ### Breaking Changes

 - Renamed the Azure provider from azure-openai-responses to azure. Rename the provider key in auth.json (or run /login again), in
   models.json, and in settings.json (defaultProvider, enabledModels patterns, and modelThinkingLevels keys). Sessions that used the
   old provider fall back to another model when resumed, and their prompt cache is not reused. The AZURE_OPENAI_* environment
   variables are unchanged (#9714 by @jsanter27)

 ### Added

 - Added Azure Foundry Chat Completions deployments, starting with azure/deepseek-v4-pro (#9645, #9714 by @jsanter27)

 ### Changed

 - Codemode image() now also saves each image to a temp file and names the path in the result, so later turns can copy or move
   generated images (#10310)
 - Output files (full text of truncated tool output, binary MCP resources, codemode images) are now readable only by the user
 - Home/End now always move the editor cursor to the line start/end; fullscreen transcript top/bottom moved to Ctrl+Home/Ctrl+End,
   which no longer move the editor cursor (#10314)

 ### Fixed

 - Fixed subscription logins such as Sign in with ChatGPT failing with refresh_token_invalidated after a request was cancelled during
   an OAuth token refresh
 - Fixed codemode failing for the rest of a session after a pnpm global update removed the running install, and added a restart hint
   when errors occur after pi was updated or removed on disk (#10439)
 - Fixed interactive sessions reporting a read EIO or setRawMode EIO crash (and asking to run /bug) when the terminal went away, e.g.
   after closing the window or resuming a suspended pi in a closed terminal

 [1.0.2] - 2026-10-04

 ### New Features

 - Sampling by thinking level — samplingParamsByThinkingLevel in models.json sets sampling parameters such as temperature and top_p
   for each thinking level on OpenAI-compatible APIs. See Configure sampling by thinking level.

 ### Added

 - Added samplingParamsByThinkingLevel to models.json for per-thinking-level sampling parameter overrides on OpenAI-compatible APIs.
   See Configure sampling by thinking level (#9776 by @mrexodia)

 [1.0.1] - 2026-10-03

 ### New Features

 - Nix flake — nix run github:earendil-works/pi/stable runs the latest release, and nix profile add github:earendil-works/pi/stable
   installs it. See Install pi.
 - Project overrides for MCP servers — .pi/mcp.json and /mcp can enable, disable, or change the exposure of a user-level server for
   one project. See Configure servers.
 - MCP Client ID Metadata Documents — oauth.clientRegistration: "cimd" lets authorization servers allow pi by its document URL
   instead of dynamic registration. See Authenticate with OAuth.
 - Tool renderers for any tool — pi.registerToolRenderer() draws calls to tools that are not registered yet, such as MCP tools in
   resumed sessions. See Tool rendering.
 - Cloudflare Clef classifiers — @cf/cloudflare/clef and @cf/cloudflare/clef-flash are usable from codemode scripts and extensions.
   See Use classifier models.

 ### Added

 - Added a copy key (app.message.copy, default ctrl+x) to OAuth sign-in screens in /login, /mcp, and /mcp login, which copies the
   sign-in URL when the browser cannot be opened or the wrapped link cannot be selected.
 - Added oauth.clientRegistration: "cimd" for MCP servers, which identifies pi with its Client ID Metadata Document on pi.dev instead
   of dynamic client registration, so authorization servers can allow pi by URL (#10302)
 - Added project overrides for user-level MCP servers: a .pi/mcp.json entry without command or url sets only enabled, exposure, and
   toolExposure of the user-level server, and /mcp can enable or disable a server for the current project (#10277)
 - Added Cloudflare's Clef and Clef Flash classifier models to cloudflare-workers-ai, usable from codemode scripts and extensions
   (#10316 by @ndisidore, #10322 by @RealAlexandreAI)
 - Added pi.registerToolRenderer(), which chooses how calls to a tool are drawn, including tools that are not registered (#10285)
 - Added a Nix flake for macOS and Linux: nix run github:earendil-works/pi/stable runs the latest release, and nix profile add
   github:earendil-works/pi/stable installs it. See Install pi (#9137)

 ### Changed

 - pi update on global npm installations now recommends migrating to the managed installation from the pi.dev installer, which pins
   all dependencies.
 - Anthropic tools added or redefined mid-conversation are now defined inline in the conversation, so redefining a tool under the
   same name keeps the prompt cache instead of resending the full tool list.

 ### Fixed

 - Fixed installations resolving vulnerable brace-expansion 5.0.9 by pinning brace-expansion 5.0.12 as a direct dependency
   (GHSA-q2hr-2g5m-vwhr, GHSA-qhr7-859c-m2p7, GHSA-6j4f-fj2g-mc7p) (#10288)
 - Fixed a trailing comma in --models adding an extra model to the model cycle (#10334)
 - Fixed a codemode script that prints in a loop crashing pi by running out of memory: a script fails once its output passes 16 Mi
   characters or 100000 items (#10283)
 - Fixed JPEG, GIF, and WebP images rendered by extensions through Image not appearing in Kitty, Ghostty, WezTerm, and Warp (#10292)
 - Fixed MCP tool calls in resumed sessions and HTML exports rendering fully expanded until their server connected, or for good if it
   never did (#10285)
 - Fixed fullscreen Kitty images collapsing to a one-row strip after scrolling in WezTerm (#10319)
 - Fixed "Selected model is at capacity" provider errors ending the turn instead of being retried (#10278)
 - Fixed Cloudflare AI Gateway Claude models failing with a 404 by using dashed model IDs (claude-opus-5-5 instead of
   claude-opus-5.5)
 - Fixed Sign in with ChatGPT continuing when its callback port is taken by another login, which made the browser show "OAuth state
   mismatch"; it now fails with a port-in-use error (#10265)
 - Fixed Amazon Bedrock OpenAI models costing requests above 272k input tokens at the short-context rate; Bedrock models now include
   the pricing tiers listed on models.dev (#10326)
 - Fixed Amazon Bedrock Claude requests failing with "Invalid signature in thinking block" after the system prompt or tools changed
   (#10324)
 - Fixed Together DeepSeek V4 Pro losing its thinking level controls after Together renamed it to deepseek-ai/DeepSeek-V4-Pro-0813
   (#10336 by @cv)
 - Fixed the default NVIDIA model pointing at nvidia/nemotron-3-super-120b-a12b, which NVIDIA no longer serves; the default is now
   nvidia/nemotron-3-ultra-550b-a55b

 ### Removed

 - Removed npm-shrinkwrap.json from the published package. npm installations no longer pin transitive dependencies, and library
   consumers can now override them. Use the pi.dev installer for pinned installations (#5653)

 [1.0.0] - 2026-10-01

 ### New Features

 - Fullscreen by default — The TUI now runs fullscreen. Set tuiMode to "regular" to keep the terminal's normal scrollback. See
   Terminal and display.
 - Leaner codemode — About 40% fewer prompt tokens, and errors that tell the model how to recover. See Codemode.
 - Image generation in codemode — Scripts call models.generateImages() with the session's credentials. See Generate images and Use
   image models.
 - Radius in /login — Sign in with Radius and set up its MCP server in one step. See Radius.
 - Anthropic copy code login — Sign in when the browser runs on another machine. See Authenticate interactively.
 - MCP OAuth hardening — oauth.authServerMetadataUrl, RFC 9207 iss checks, credentials per server, and step-up sign-in that keeps
   granted scopes. See Authenticate with OAuth.
 - Header-only quiet startup — quietStartup: "header" keeps the version and key hints and hides the rest. See Terminal and display.

 ### Added

 - Added an oauth.authServerMetadataUrl setting for MCP servers that advertise a wrong OAuth authorization server or none. Pi uses
   the configured metadata document instead of discovery (#10172).
 - Added quietStartup: "header", which keeps the startup header with version and key hints but hides the model scope line and
   loaded-resource listing.
 - Added models.generateImages() to codemode scripts. It runs image models such as OpenRouter's with the session's credentials and
   returns base64 image blocks that image() attaches to the result; usage counts toward the session cost like models.classify().
   Extensions can call ctx.modelRegistry.generateImages(). See Use image models.
 - Added a copy code login method to Anthropic /login for headless setups where the browser runs on another machine (#10194 by
   @lucasmeijer).

 ### Changed

 - Changed the default TUI mode to fullscreen. Set tuiMode to "regular" or pass --tui-mode regular to keep the terminal's normal
   scrollback.
 - /login now offers "Sign in with Radius" at the top level, as the last option, with its status. After a Radius sign-in, /login
   offers to configure the Radius MCP server in the global mcp.json with "auth": { "provider": "radius" } and reloads. Cancelling a
   login returns to the menu it was started from.
 - The provider docs page is renamed to Providers, its "Cloud Providers" section is now "Provider Specific Config", and it documents
   Radius first.
 - MCP OAuth credentials are now stored per server name and URL, so MCP servers with the same URL can sign in with different
   accounts. Credentials stored by URL alone move to the first server that uses them (#10252).
 - Codemode costs far fewer prompt tokens: with the default tools and codemode active, a GPT-5.6 request shrinks from about 5,300 to
   3,300 tokens. The codemode description lists the script globals in one line each and points to the new Codemode reference for the
   models API, which the model reads when it needs it. Declared tools say in one line how scripts call them and what the call
   resolves to, instead of repeating their full declaration, and the system prompt's codemode guidance and MCP server section are
   shorter.
 - Codemode errors now say how to recover: reading a tool or models member that does not exist names the close matches (tools.Bash
   suggests tools.bash), models.classify() and models.generateImages() reject malformed arguments with the expected shape, an unknown
   model points to models.getAvailableOfType(), an oversized store() value explains what the store is for, and a script that
   generates images without showing them gets a note. Scripts that probed for a tool with typeof tools.name must use "name" in tools.
 - /login and /logout now label providers without credentials as "not configured" instead of "unconfigured".
 - OAuth browser pages now show the color Pi logo.

 ### Fixed

 - Fixed MCP OAuth sign-in accepting an authorization response whose iss parameter names another authorization server; the code is
   now rejected before it is exchanged (RFC 9207).
 - Fixed MCP OAuth sign-in failing with Invalid scope when the token response contains "scope": "", and similar failures for other
   empty or null optional OAuth fields (#10266).
 - Fixed the sign-in URL printed by /mcp login not being clickable when it wraps (#10186).
 - Fixed --provider without --model being silently ignored and running the default model from another provider; it now fails with an
   error (#10236).
 - Fixed MCP servers that ask for more scope (insufficient_scope) requesting sign-in over and over. The new sign-in requested only
   the missing scopes, so the new token lost access the previous one had; it now keeps the granted scopes.
 - Fixed user messages in the transcript keeping two full-width copies of every rendered line; they keep one, with identical output.
 - Fixed /login and /logout labeling every OAuth sign-in, including Radius, as a subscription; only subscription-backed providers say
   "subscription", other OAuth sign-ins say "account".
 - Fixed the startup header logo rendering with gaps in Apple Terminal; it now shows a colored "Pi" with the version instead.
 - Fixed deferred MCP tools that tool_search loaded being dropped on resume and /reload even when their server reconnected before the
   next prompt, because the session restored its tools before the MCP servers reconnected.
 - Fixed the system theme making pastel palettes such as Catppuccin Frappe much more vivid; palette colors now keep their chroma
   (#10255, #10293 by @dgtlntv).
 - Fixed slash command autocompletion not triggering when the input starts with whitespace (#10218 by @haoqixu).
 - Fixed color bleeding past mouse selections and search highlights in fullscreen mode when a styled token ends at the highlight
   boundary (#10169).
 - Fixed memory retained per rendered message in the transcript; a long assistant message keeps about a fifth of the heap it kept
   before.

 [0.99.2] - 2026-09-30

 ### New Features

 - MCP servers stay out of the way: servers with the default codemode exposure are no longer listed in the codemode description and
   no longer block the first prompt. They appear in a short system prompt section, and scripts find their tools with searchTools()
   and describeNamespace(). See Control tool exposure.
 - More MCP authentication options: oauth.clientName for servers that only accept known OAuth clients, and "auth": { "provider":
   "<provider>" } to authenticate HTTP servers with a provider's /login token. See Authenticate with OAuth.
 - Anthropic workload identity federation from the Anthropic SDK environment variables. See Use an API key from the environment.
 - /reload enables tools newly added to the defaultTools setting. See Tools.

 ### Added

 - Added a description field for MCP servers (pi mcp add --description), shown with the server in the system prompt and used to rank
   its tools in tool search, and a describeNamespace(name) codemode helper that returns a namespace's instructions and tool names.
   describeNamespace() and searchTools() accept a namespace as mcp__dev-radius, mcp__dev_radius, dev-radius, or dev_radius.
 - Added an oauth.clientName setting for MCP servers (pi mcp add --oauth-client-name) to change the client name sent during OAuth
   client registration, for servers that only accept known clients (#10226).
 - Added "auth": { "provider": "<provider>" } for HTTP MCP servers to send a provider's current /login token as the bearer token
   instead of using MCP OAuth. The token is read on every request, so provider refreshes apply. Only allowed in the global mcp.json
   and from extensions, and requires https except on loopback hosts.
 - Added Anthropic workload identity federation from the ANTHROPIC_FEDERATION_RULE_ID, ANTHROPIC_ORGANIZATION_ID, and
   ANTHROPIC_IDENTITY_TOKEN_FILE environment variables (see Providers) (#10177, #10242 by @philfreo).
 - /reload now enables tools newly added to the defaultTools setting. Tools removed from it stay enabled, tools turned off during the
   session stay off unless newly added, and --tools, --no-tools, and --no-builtin-tools still override the setting (#10245).

 ### Changed

 - MCP servers with the default codemode exposure no longer appear in the codemode description; scripts find them with searchTools().
   codemode-deferred is now an alias for codemode. Use direct exposure for tools the model should see without searching (#10212).
 - The codemode description no longer includes deferred tools, tool counts, or MCP server instructions, so it no longer changes when
   MCP servers connect or change their tools. The tool_search description no longer lists the servers whose tools it can load, for
   the same reason. Servers are listed instead in an mcp_servers system prompt section with a one-line summary, updated at the start
   of each prompt; a changed section is appended to the conversation. Scripts read server instructions with describeNamespace()
   (#10212).
 - The first prompt no longer waits for MCP servers without direct tools. They connect in the background and are waited for when a
   codemode script names them, a script searches tools, or tool_search runs (#10212).

 ### Fixed

 - Fixed new sessions intermittently ignoring the saved default model, or warning that no models are available, when it belongs to an
   extension-registered native provider with a stored credential (#9962, #10190 by @davidbrai).
 - Fixed the /mcp sign-in URL not being clickable when it wraps across lines, by emitting it as a terminal hyperlink with a
   Cmd/Ctrl+click to open line like /login (#10186).
 - Fixed codemode image() accepting malformed base64 data or unsupported image types, which persisted an invalid image block that
   made every later provider request fail with HTTP 400 (#10215).
 - Fixed codemode failing to start its script worker from the standalone Windows executable (#10204).
 - Fixed prompt submission slowing down with session length, because resolving the session's model selection looked up the model
   catalog once per assistant message (#10198).
 - Fixed model lookups slowing down for providers with a refreshed pi.dev catalog, because merging remote catalog models took
   quadratic time.
 - Fixed the built-in-tool-renderer.ts and minimal-mode.ts extension examples removing the built-in tools' summaries and guidelines
   from the system prompt (#10072, #10193 by @christianklotz).
 - Fixed context overflow detection for Z.AI CN endpoint Prompt exceeds max length errors (#10208).
 - Fixed Anthropic requests failing when a tool schema uses keywords Anthropic strict tool use rejects, such as minimum/maximum; such
   tools are now sent non-strict (#9953).
 - Fixed provider retries firing immediately when a Retry-After header contains an unparseable date; they now use exponential backoff
   (#9571).
 - Fixed extension commands registered without a string name or handler crashing pi when typing /; the extension now fails to load
   with an error instead (#10054).
 - Fixed collapsed codemode and MCP tool results filling the screen when the output is one long line, such as minified JSON. Like
   bash output, the preview is now limited to wrapped lines instead of logical lines.
 - Fixed codemode.mode: "only" listing read, bash, edit, and write in the system prompt's tool list although requests only declare
   codemode (#10192).
 - Fixed codemode scripts calling the wrong MCP tool when two tool names differ only in - and _, such as read-file and read_file.
   Like in Codex, MCP tool and namespace names now replace - with _ (mcp__my-server__x is now mcp__my_server__x), colliding tools of
   a server all get a hash suffix, and server names that differ only in - and _ are rejected (#10239).

 [0.99.1] - 2026-09-29

 ### New Features

 - GPT-6.1 Sol — Available on OpenAI, Azure OpenAI, and OpenAI Codex, and now the default OpenAI Codex model. See Select a model.

 ### Added

 - Added GPT-6.1 Sol (gpt-6.1-sol) to the OpenAI, Azure OpenAI Responses, and OpenAI Codex providers.

 ### Changed

 - Changed the default OpenAI Codex model to GPT-6.1 Sol (gpt-6.1-sol).

 ### Fixed

 - Fixed /login with OpenAI failing in the bundled release with a missing openai-chatgpt.js module error.

 [0.99.0] - 2026-09-29

 ### New Features

 - Codemode and MCP — Connect MCP servers and let models run JavaScript that calls tools in parallel. See MCP Servers and Enable
   codemode.
 - System theme — Pi's colors now come from your terminal's own palette by default. See Use your terminal's colors.
 - Sign in with ChatGPT — Use a ChatGPT subscription with the OpenAI provider through /login openai. See Authenticate interactively.
 - Virtual models — Extensions can route each request to a different physical model. See Virtual Models.
 - Classifier models — Run Jev classifiers from codemode scripts, or use any llama.cpp model as a classifier. See How codemode works
   and Classification.

 ### Added

 - Added codemode, tool search, and MCP support as built-in extensions. The codemode tool runs model-written JavaScript in a QuickJS
   sandbox that calls pi's tools; enable it with defaultTools or --tools and configure it with codemode.mode and
   codemode.inlineBudget. tool_search finds tools that are not declared to the model and declares them. MCP servers over stdio or
   streamable HTTP, with OAuth, come from mcp.json (global, or per project once trusted) or pi.registerMcpServer() and are managed
   with /mcp and pi mcp add|remove|list|login|logout. See MCP Servers and Enable codemode (#10040).
 - Added extension tool APIs for orchestrating tools: exposure (direct, model-only, codemode, deferred, or hidden), namespace,
   annotations, outputSchema with structuredContent, isError results, prepareLoadout(), and ctx.executeTool() for nested tool calls,
   which emit events with parentToolCallId and are recorded as bounded nestedCalls on the calling tool's result. See Tool exposure.
 - Added a warning when an extension that registers the same tool, command, or flag replaces a built-in extension (#10174 by
   @cristinaponcela).
 - Added experimental virtual models: extensions register them with pi.registerVirtualModel() and pick a physical model and thinking
   level for each request. The footer shows the routed model, /session lists cost per physical model, and
   examples/extensions/jev-router.ts routes with the Jev classifier. See Virtual Models.
 - Added Sign in with ChatGPT to the OpenAI provider in /login, which uses a ChatGPT subscription with the OpenAI API. Pi stores a
   stable deviceId in the global settings for this login and omits it from bug reports.
 - Added the system theme, now the default, which derives pi's colors from the terminal's reported foreground, background, and ANSI
   palette and rebuilds them when the terminal switches between light and dark. See Use your terminal's colors.
 - Added #rgb, oklch(), and okhsl() colors and an optional appearance field to theme files, and theme.style(), theme.colors, and
   theme.appearance for extensions. See Themes and TUI.
 - Added a classifier model for every llama.cpp chat model, answered from next-token label probabilities. See Classification.
 - Added inherited Jev classifier models on OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, and OpenCode Zen.
 - Added the fullscreenWheelScrollLines setting and /settings entry for fullscreen mouse-wheel scrolling. The default "auto"
   accelerates fast wheel spins outside local macOS terminals (#9758).
 - Added per-input disposition to successful RPC prompt, steer, and follow_up responses, AgentSession.steer()/followUp(), and
   RpcClient.prompt()/steer()/followUp(); RpcClient.prompt() also accepts streamingBehavior (#9098, #9803).
 - Added image generation to ModelRuntime: generateImages() with runtime-resolved auth (stored credentials, OAuth, runtime API keys,
   models.json headers), plus getModelsOfType(), getModelOfType(), getAvailableOfType(), getAllModels(), and getAllAvailable().
   OpenRouter image models are listed under the openrouter provider and share its credential; an upstream ID can have separate chat
   and image entries. models.json providers and extension registrations without a model list keep built-in image generation.
   Extension model lists can include discriminated chat, image, and classifier entries with operation implementations; when supplied,
   they replace the provider catalog across every operation. Chat-facing reads (getModels(), getAvailableSnapshot(), the model
   picker) are unchanged.
 - Added classifier support to ModelRuntime, including classify(), classifier model accessors, runtime-resolved authentication, and
   the built-in TypeSafe jev-latest model.
 - Added types=chat,image,classifier to pi.dev model catalog requests so remote refreshes overlay every supported model type; entries
   of unknown model types are ignored.
 - Added the provider_stream_event extension event for observing parsed provider events before normalization, with an opt-in
   /debug-provider example viewer (#9784, #9901 by @davidbrai).
 - Added a show/hide toggle (H) in HTML exports for custom messages marked display: false. Messages remain hidden by default and can
   also be revealed from the sidebar (#8896, #10020 by @rwachtler).
 - Added inherited Claude Sonnet 5.5 support for Anthropic with adaptive thinking and a 1M context window.
 - Added a Built-in section in pi config to disable the built-in mcp, llama.cpp, codemode, and tool-search extensions globally or per
   project, stored as -builtin:<name> in the extensions setting. SDK inline extensions opt in with builtin: true.
 - Added +name and -name entries to the defaultTools setting to add or remove tools without repeating the defaults, for example
   "defaultTools": ["+codemode"]. Project entries of this form apply on top of the user setting. Documented how to enable codemode
   without MCP and how to use classifier models such as Jev from codemode scripts.
 - Added the token usage and cost of codemode models.classify() calls to the codemode tool result, so they count toward the session
   cost; the codemode result shows each call's cost.

 ### Changed

 - Switched the build from the TypeScript native preview to TypeScript 7.0 with an ES2024 target, and replaced tsx with Node's
   built-in type stripping for running from source (#9965).
 - Removed the [Themes] section from the startup banner. Custom themes remain available in /settings, and theme conflicts are still
   reported.
 - Changed the startup header to show the pi logo with the version instead of the app name.
 - Changed the built-in dark and light themes to the revised pi colors, written in OKHSL.
 - Changed light/dark terminal detection to use the reported background color first, then the terminal's light/dark report, then
   COLORFGBG. The first-time setup no longer shows the detected appearance.
 - Renamed the inherited OpenAI Codex provider to "OpenAI Codex (legacy)"; Sign in with ChatGPT on the OpenAI provider supersedes it.
 - Changed inherited terminal detection to treat TERM=*-direct as truecolor.
 - Built-in extensions and tools are named builtin:<name> (for example builtin:mcp and builtin:read) in errors, diagnostics, RPC
   source info, and bug reports, instead of <inline:name> and <builtin:name>. Their slash commands no longer carry a [t] autocomplete
   tag.
 - --no-extensions also disables the built-in extensions, including the llama.cpp provider. Load one explicitly with -e
   builtin:<name>, for example pi -ne -e builtin:mcp.
 - Tool calls without a custom call renderer, including direct MCP tool calls, now show their arguments: as key=value pairs on the
   title line when collapsed and one key: value line per argument when expanded. MCP calls are titled server/tool and their results
   collapse to 5 lines.
 - bash and powershell structured results, which codemode scripts receive, now hold up to 1 MiB of output instead of the model-facing
   2000 lines or 50KB, and add truncated and full_output_path. Longer output keeps its first and last 512 KiB. Empty output is ""
   instead of (no output).

 ### Fixed

 - Fixed X11 clipboard text being misidentified as an image when the clipboard owner accepts unadvertised image targets (#9786).
 - Prevented managed git packages from automatically installing Pi peer dependencies and added warnings for extension packages that
   list host-provided modules in dependencies (#9863).
 - Fixed pinned git extensions loaded with -e continuing to use the first downloaded commit after the ref changes (#9982).
 - Fixed RpcClient skipping the next event listener when a listener unsubscribes while handling an event, which could make
   waitForIdle() time out after collectEvents() (#9990).
 - Fixed full-file read calls rendering as :1 when models send null for omitted offset and limit (#9996).
 - Fixed new sessions being lost when pi exits before the first assistant response. The session file is now created when the first
   user message is sent (#10000).
 - Fixed unloaded llama.cpp autoload presets overwriting a cached runtime context window with the GGUF training context (#10077,
   #10158 by @cristinaponcela).
 - Fixed custom themes ignoring terminal.trueColor and other terminal capability overrides and rendering with 256 colors (#9973,
   #10039 by @christianklotz).
 - Fixed pasting files copied in Finder inserting the file icon image instead of the file paths; paths are quoted in bash mode
   (#9999, #10136 by @christianklotz).
 - Fixed the startup header, loaded resources, and chat notices keeping their old colors after a theme change.
 - Fixed the Fireworks default model pointing at the removed Kimi K2.6 model; it now defaults to Kimi K3.
 - Fixed the OpenCode Go default model pointing at the removed Kimi K2.6 model; it now defaults to Kimi K3.
 - Fixed the Together default model pointing at the removed Kimi K2.6 model; it now defaults to Kimi K3.
 - Reduced CPU use while streaming in long sessions and when previewing themes: the footer caches session usage totals, collapsed
   bash results cache their preview, and sanitizeBinaryOutput() no longer splits output into per-character arrays.
 - Fixed the usage of tools called through ctx.executeTool(), for example from codemode scripts, being dropped from the session cost;
   it is now added to the calling tool's result usage.
 - Fixed inherited /skill autocomplete appearing empty when loaded skill names did not contain the letters in skill (#9944).
 - Fixed inherited path and @ autocomplete not working after opening wrappers such as (, [, {, <, or a backtick.
 - Fixed inherited image stretching in terminals that use the Kitty graphics protocol (#8938, #9957 by @rwachtler).
 - Fixed inherited shell cursor staying hidden after exit when an extension closed an overlay during shutdown (#10026).
 - Fixed inherited keyboard input being lost after a mouse click in a /settings submenu closed it.
 - Fixed inherited 1-hour Anthropic cache writes through Vercel AI Gateway being priced at the 5-minute rate (#9210).
 - Fixed inherited model-level samplingParams being dropped by direct stream()/complete() calls on OpenAI-compatible APIs (#9506).
 - Fixed inherited Mistral GLM requests failing with "Expected at most one leading ThinkChunk" after empty content deltas (#9674).
 - Fixed inherited OpenAI Fast mode requests being priced at the standard rate (#10034).
 - Fixed inherited Mistral reasoning models ignoring the requested thinking level (#9678).
 - Fixed inherited OpenCode Zen and OpenCode Go qwen3.8-flash thinking being replayed as plain text on later turns (#10047).
 - Fixed inherited OpenAI Responses streams from servers that omit output_index, such as llama.cpp, running mixed-up tool calls; such
   streams now end with an error (#9974).
 - Fixed inherited Anthropic and OpenAI Codex browser sign-in waiting indefinitely after the provider redirected with an
   authorization error, and Anthropic sign-in failing when its callback port is in use.
 - Fixed inherited GitHub Copilot Claude Opus 5.5 offering unsupported thinking levels when upstream model metadata is incomplete.

 [0.87.1] - 2026-09-22

 ### New Features

 - Latest frontier models — Use Claude Opus 5.5, GPT-6 Sol, and GPT-6 Luna through supported providers, including GitHub Copilot. See
   Choose a Model.
 - Grok 4.7 by default for xAI — New xAI sessions now default to Grok 4.7. See Provider Authentication.

 ### Added

 - Added inherited Claude Opus 5.5, GPT-6 Sol, and GPT-6 Luna support for GitHub Copilot.
 - Added inherited GPT-6 Sol and GPT-6 Luna support for OpenAI API keys and OpenAI Codex subscriptions.
 - Added inherited Claude Opus 5.5 support for Anthropic with adaptive thinking and a 1M context window.

 ### Changed

 - Changed the default xAI model to Grok 4.7.

 ### Fixed

 - Fixed split-turn compaction summaries being refused by Claude Fable 5.1 by clearly separating the conversation and using
   continuation-oriented instructions (#9908 by @davidbrai).
 - Fixed missing or invalid --mode values being silently ignored instead of reporting an error and exiting with a nonzero status
   (#9045).
 - Fixed inherited image-only user messages being rejected by some OpenAI-compatible providers because they included an empty text
   part (#9797).
 - Fixed inherited Anthropic OAuth requests reporting an outdated Claude Code version.

 [0.87.0] - 2026-09-21

 ### New Features

 - Canonical session context and extension boundaries — Edit model context without rewriting history and add actionable lifecycle
   hooks. See ContextEditEntry and extension events.
 - Full-transcript context extensions — Use context_with_system for per-request system-message transformations. See
   context_with_system.
 - Per-model image input limits — Configure cache-safe image resizing per model for attachments, read, and tool-result images. See
   Image Input Limits.

 ### Breaking Changes

 - Removed the inherited shouldStopAfterTurn agent option. Use finishTurn and return { action: "end" } instead. finishTurn runs
   before turn_end but applies the decision afterward, and it also receives error and aborted responses; migrate normal-response
   predicates by returning undefined for those hard exits. See the @earendil-works/pi-agent-core changelog for a complete
   before-and-after example.
 - Added ContextEditEntry to the exported SessionEntry union. TypeScript consumers with exhaustive entry switches must handle
   context_edit; use replacement: null for omission and a content replacement otherwise.
 - Made SessionManager canonical for AgentSession provider context. Assigning session.agent.state.messages no longer replaces future
   request history; restore with SessionManager.inMemory(cwd, { id }, entries), navigate with session.navigateTree(), or append
   through session.sessionManager and call session.refreshContext().
 - Expanded TurnEndEvent with required boundary fields and added AgentBeforeSettleEvent to the exported ExtensionEvent union.
   Consumers constructing events or exhaustively switching on ExtensionEvent must handle the new shapes. ExtensionRunner.emit() no
   longer accepts turn_end; host integrations dispatch actionable boundaries with emitBoundary(baseEvent, buildContext).
 - Deferred runs requested from agent_settled handlers until all settled handlers finish. Handlers still observe ctx.isIdle() ===
   true, but no longer see a reentrant agent_start during the same notification dispatch.

 ### Added

 - Added append-only model-context edits. For example, sessionManager.appendContextEdit(entryId, null) omits one message from future
   provider context without changing raw history, usage, or UI history.
 - Added actionable turn_end and agent_before_settle extension boundaries. Return { entries: [...event.entries, draft], continue:
   true } to persist structural entries in order and ensure one next provider request without changing steering or follow-up
   scheduling.
 - Added retain-none compaction input: sessionManager.appendCompaction(summary, null, tokensBefore) stores the compaction's own ID as
   its kept boundary.
 - Added the context_with_system extension event, which runs after context handlers on the full transcript including system messages
   and sends its result verbatim. See context_with_system.
 - Added per-model image resize profiles through inputLimits.images.resize in models.json, applied to file attachments, image reads,
   and tool-result images (#9631).

 ### Fixed

 - Fixed string context-edit replacements producing invalid assistant and tool-result message content instead of text blocks.
 - Fixed context-invisible boundary metadata and replacement edits causing newly appended or replaced input to be summarized before
   its first provider request.
 - Fixed edited-context accounting both discarding valid assistant usage captured after the latest context edit and reusing that
   usage after a later compaction made it stale.
 - Fixed selected error retries and final length/overflow recovery retaining abandoned model attempts in future provider context;
   post-run recovery omissions are now persisted without hiding raw transcript history or changing queue scheduling.
 - Fixed context handlers that filter or slice messages dropping the prompt and tool declarations, which after extension-driven
   compaction left requests without built-in tools or made Codex emit raw tool-call text. Handlers no longer see system messages; Pi
   restores the prompt and tool state after they run. See context (#9789, #9822).
 - Fixed /bug allowing uploads in offline mode while preserving local zip exports (#9841 by @christianklotz).
 - Fixed idle prompt-cache warming rebuilding expired caches when its timer or an extension decision is delayed.
 - Improved crash diagnostics with hints identifying loaded extensions that appear in the stack trace.
 - Fixed text files beginning with GIF being misclassified as images and omitted from read and CLI @file input (#9755).
 - Fixed malformed prompt template frontmatter being silently ignored instead of reported as a resource warning (#9830 by
   @christianklotz).
 - Fixed inherited unknown OpenAI-compatible Chat Completions endpoints receiving strict tool schemas unless they explicitly
   advertise support (#9816).

 [0.86.1] - 2026-09-20

 ### New Features

 - Meta Muse provider — Sign in with Meta using /login meta or use META_API_KEY to access Muse Spark models. See Meta (Muse
   subscription).

 ### Added

 - Added Meta (Muse subscription) login via /login meta with automatic Model API key refresh, plus META_API_KEY support (#9096 by
   @xl0).

 ### Changed

 - Enabled Node's persistent compile cache before loading the bundled CLI runtime, reducing repeat launch time.

 ### Fixed

 - Fixed /bug descriptions dropping line breaks from pasted diagnostics.
 - Fixed /bug hints appearing for user cancellations and retryable provider failures such as service unavailability.
 - Fixed clipboard copy failing in containers and WSL without WSLg by restoring the OSC 52 fallback when no display is available, and
   added a verified Windows clipboard backend for WSL (#9688).
 - Fixed inherited z.ai Prompt too long errors not being recognized as context overflow (#9805).
 - Fixed inherited Cerebras models advertising unsupported strict tool schemas, which caused HTTP 400 errors when strict and
   non-strict tools were mixed (#9804 by @EdenGottlieb).

 [0.86.0] - 2026-09-19

 ### New Features

 - Prompt cache warming — Keep valuable prompt caches alive during long tool runs and optionally while idle using cost-aware
   refreshes. See Cache Warming.
 - Bug reporting — Report problems with /bug using redacted diagnostics, optional transcripts, or exported ZIP archives. See
   Reporting Bugs.
 - Transcript-aware prompt and tool updates — Preserve instruction and tool changes across resume and branch navigation while
   retaining cached prefixes. See before_agent_start.
 - Offline Radius model catalog — Select Radius models immediately, with cached and live catalogs overlaid when available. See
   Radius.
 - Per-model compaction budgets — Configure reserved and recent-token budgets by model. See Per-model overrides.

 ### Breaking Changes

 - Changed inherited pi-ai provider stream inputs from Context to normalized TranscriptContext values. Custom providers must read
   system prompts and tool declarations from context.messages with getCurrentSystemPrompt() and getCurrentTools(). See Custom
   Streaming API.
 - Restricted inherited ToolCall.arguments and ToolResultMessage.details to JSON-compatible values, changed ToolResultMessage into a
   conditional type, and made JsonValue arrays readonly.
 - user_bash now fails closed: errors or invalid defined results abort the command without invoking later handlers or executing
   locally. Return undefined to continue propagation; otherwise return { operations } or { result } (#9068).

 ### Added

 - Added transcript-backed mid-conversation system prompt and tool changes so instruction and tool updates survive resume and branch
   navigation while preserving cached prefixes on supported models. See before_agent_start and Entry Types (#9548).
 - Added inherited native deferred tool loading for Fireworks Messages models. Use ToolSearch or tool_search as the loader name for
   prompt-prefix deferral (#9323).
 - Added click toggling for branch summaries, compaction summaries, and skill invocation entries.
 - Added the public Radius model catalog for immediate and offline model selection, with cached and live gateway catalogs overlaid
   when available.
 - Added ctx.modelRegistry.stream() and streamSimple() for extension model calls through configured providers with resolved
   authentication (#8964).
 - Added per-model reserveTokens and keepRecentTokens settings through compaction.modelOverrides, with ordinary compaction settings
   as fallback (#8133).
 - Added compat.allowedFallbackModels configuration for overriding or disabling Anthropic server-side fallback models (#9294).
 - Added an unsubscribe function from pi.on() so extensions can drop event handlers. Handlers added or removed during a dispatch
   apply to later dispatches, not the current one (#8967).
 - Exported extension hook event and result types that were previously omitted from the package entry points (#9642).
 - Added /bug [description] to report a bug to the Pi developers. The report bundles environment, model, provider, extension, and
   settings metadata (secrets redacted), assistant message diagnostics from the session, optionally the session transcript, or a
   model-written summary of what went wrong instead. It is uploaded to Radius (no login required; attributed when logged in) or
   exported as a zip archive, and the report id is recorded in the session as a pi.bug-report entry. Crashes are recorded in
   ~/.pi/agent/crashes.json, announced once on the next start, and attached to the next report; unexplained errors and exhausted
   retries point at /bug once per session.
 - Added cost-aware prompt-cache warming during long tool runs and optionally while idle, with configurable modes, model
   cache-lifetime metadata, /session diagnostics, transcript notices, and the cache_warming_decision extension event. See Cache
   Warming (#9668).

 ### Changed

 - Enabled Node's persistent compile cache before loading the bundled CLI runtime, reducing repeat launch time.
 - Made --resume session results appear progressively, using file modification times to prioritize all-folder loading and cancelling
   outstanding transcript reads after selection.
 - Reduced --continue startup time by checking candidate session headers in modification-time order and stopping after the newest
   matching session.
 - Replaced the external native clipboard dependency with bundled asynchronous macOS, Windows, and X11 helpers while preserving
   platform command and OSC 52 fallbacks (#9163).
 - Reduced inherited fuzzy search latency for long texts by using native substring search instead of scanning each character in
   JavaScript (#9267).
 - Moved compaction, branch summarization, and retry spinners into the editor border alongside the working indicator. Custom editors
   use the same embedding opt-in for all status spinners.
 - Enabled strict-prefer JSON-schema sampling by default for built-in read, bash, powershell, edit, and write tools, without
   requiring PI_EXPERIMENTAL. Extensions can re-register tool definitions with constrainedSampling: false.
 - Formatted Bash and PowerShell tool durations of at least one minute as minutes and seconds, with hours when needed (#9628).
 - Deferred the extension compiler and bundled virtual modules until a filesystem extension is loaded, reducing the baseline SDK
   import cost (#9540).

 ### Fixed

 - Fixed GitHub Copilot GPT models, including GPT-6 Astra, using the Chat Completions adapter instead of the required Responses
   adapter (#9253 by @petrroll).
 - Fixed inherited DeepSeek V4.1 thinking levels on OpenRouter and OpenCode Go preserving provider effort metadata (#9485).
 - Fixed inherited bodyless HTTP 400/413 errors from non-Cerebras providers being misclassified as context overflow (#9482).
 - Fixed inherited Vercel AI Gateway replaying unsigned thinking as assistant text (#9676).
 - Fixed inherited Google Generative AI and Vertex AI using unsupported thinking levels when reasoning is omitted or when model
   capabilities differ within a Gemini family (#9455).
 - Fixed inherited Anthropic-compatible relays breaking signed thinking replay when they report a different response model, while
   preserving fallback pricing (#9188).
 - Fixed inherited Amazon Bedrock one-hour cache writes being priced at the five-minute rate (#9457).
 - Fixed inherited quadratic CPU usage when draining buffered EventStream events (#9055).
 - Fixed inherited Mistral Medium reasoning requests to use reasoning_effort for all reasoning-capable mistral-medium-* model IDs
   instead of the unsupported prompt_mode (#8700).
 - Fixed inherited OpenCode and OpenCode Go requests to send x-opencode-session from sessionId across all supported API adapters
   (#9326).
 - Fixed inherited OpenAI Codex requests to send the model's Off reasoning effort instead of omitting it, while respecting
   unsupported Off mappings (#9191).
 - Fixed inherited Fireworks unsigned thinking replay and reasoning effort selection using catalog metadata, with verified DeepSeek
   V4 and Qwen3.8 fallbacks and removal of redundant GLM 5.2 and Kimi K3 effort aliases (#9323).
 - Fixed inherited OpenRouter requests to send x-session-id from sessionId for Chat Completions and Anthropic Messages models when
   prompt caching is enabled (#9102).
 - Fixed the inherited DeepSeek catalog to advertise deepseek-flash for DeepSeek V4.1 Flash instead of retired Flash aliases, and
   refreshed DeepSeek pricing metadata (#9423).
 - Fixed inherited Mistral-hosted GLM-5.2 reasoning requests to use reasoning_effort instead of the ignored prompt_mode (#9375).
 - Fixed inherited OpenAI-compatible Responses errors to identify the actual provider instead of always labeling them as OpenAI
   errors (#9298).
 - Fixed inherited Baseten requests to send session-affinity headers from sessionId for automatic prompt-cache routing (#9629).
 - Fixed inherited retry classification for Cloudflare 520 responses (#9627).
 - Fixed inherited retry classification for transient Azure peak-load capacity errors (#9669).
 - Fixed session tree navigation racing with active compaction and replacing its progress UI (#9179 by @acmerfight).
 - Fixed exact session ID lookup scanning complete transcript bodies instead of reading session headers (#9601 by @metaist).
 - Fixed repeated Anthropic thinking-drop notices being shown for the same dropped blocks, and shortened notices while retaining
   details in the session (#9391).
 - Fixed mid-run threshold compaction silently skipping oversized trailing tool results (#9740).
 - Fixed signal-terminated local shell commands being reported as successful with partial output (#9577 by @BrendanJMurphy).
 - Fixed local clipboard failures reporting success when the terminal ignored the fallback OSC 52 write, and added platform-specific
   setup guidance when no clipboard backend works (#9618).
 - Capped agent-level retry backoff at retry.maxAgentDelayMs (60s by default) so long retry runs stay responsive during prolonged
   transient outages (#8826).
 - Fixed direct RPC steer and follow_up commands bypassing extension input handlers (#8718).
 - Fixed premature missing-model errors after login by waiting for catalog discovery. Radius now defaults to balanced, falling back
   to the first available Radius model when needed.
 - Fixed fullscreen mode reserving a blank row for custom footers that render zero rows (#8919).
 - Fixed extension tools without parameter schemas to be rejected during registration instead of breaking provider requests (#9300).
 - Fixed before_agent_start handlers returning systemPrompt (and forceSystemPrompt) on models with mid-conversation system messages:
   the forced prompt is now sent as the provider's leading system prompt instead of being appended as a section patch after the
   original prompt.
 - Fixed loaded llama.cpp models with enable_thinking chat templates ignoring Pi's thinking level (#9528).
 - Fixed cancellation races that could start automatic compaction, leave stale retry state, or miss cancellation while waiting for
   summarization authentication (#9340, #9777).
 - Fixed asynchronous Kitty image conversion replacing newer partial tool output images (#8743 by @wutongyuonce).
 - Fixed inherited skill slash-command autocomplete ranking the skill: prefix instead of the bare skill name (#9120 by @yearth).
 - Fixed inherited file autocomplete boundaries and path quoting around CJK punctuation (#9746 by @haoqixu).
 - Fixed inherited LaTeX legacy font switches falling back to raw source, centered cases layouts around surrounding equations, and
   vertically laid out unsupported and nested display scripts (#8827, #9564, #7929).
 - Fixed inherited fullscreen Kitty images being erased by later row clears in WezTerm (#9169).

 ### Removed

 - Removed unavailable inherited GPT-5.4 and GPT-5.4 mini models from OpenAI Codex selection (#9394).

 [0.85.1] - 2026-09-05

 ### New Features

 - GPT-6 Astra — Available through OpenAI API keys and OpenAI Codex subscriptions. See API Keys and OpenAI Codex.

 ### Added

 - Added GPT-6 Astra for OpenAI API keys and OpenAI Codex subscriptions.
 - Added five-times-faster mouse wheel scrolling while holding Alt in fullscreen mode (#9166 by @xl0).

 ### Fixed

 - Fixed configurable save keybindings in the model and thinking selectors (#9149 by @rwachtler).
 - Fixed SDK import failures caused by unintentionally publishing internal experimental code and dependencies in 0.85.0. The
   experimental client and experimental/plugin subpaths and server/client commands are now source-only through pi-test.sh; the
   supported local SDK and stdio RPC API are unchanged (#9132).
 - Fixed mouse hover changing selection and recentering autocomplete and settings lists, causing clicks to target a different item.
 - Fixed long prompt-cache requests for GPT-5.6+ Responses models to use prompt_cache_options.ttl: "30m" instead of
   prompt_cache_retention: "24h".

 [0.85.0] - 2026-09-04

 ### New Features

 - Persistent Claude thinking effort — Supported Anthropic transports preserve per-turn effort and recover safely from
   signed-thinking mismatches. See Model Configuration.
 - Fullscreen transcript controls — Jump to the latest message from a scrolled transcript and use the embedded working indicator. See
   TUI Fullscreen Viewport.
 - Restorable in-memory sessions — Resume externally stored session entries through the SDK. See Session Management.

 ### Added

 - Added SessionManager.inMemory() support for restoring externally managed session entries (#8980 by @y-nk).
 - Added inherited OpenAI-compatible vllmPriority and supportsMaxOutputTokens model settings for vLLM scheduler priority and OpenAI
   Responses output-token limits (#9004 by @AppleDannyClegg, #8941 by @scturtle).
 - Added inherited LaTeX rendering for relational algebra join symbols (#9050 by @haoqixu).
 - Added a clickable "Jump to latest message" label with the tui.altScreen.bottom shortcut to the fullscreen transcript while it is
   scrolled up (#9080 by @rwachtler).
 - Added Meta (Muse subscription) login via /login meta with automatic Model API key refresh, plus META_API_KEY support.

 ### Changed

 - Moved the streaming working indicator into the default editor border and matched its default spinner and label to the
   thinking-level border color. Custom editors retain the standalone indicator unless they opt in to embedding it (#8799 by
   @cristinaponcela).
 - Reduced inherited fullscreen transcript search latency on large transcripts by caching unchanged search results, indexing ASCII
   runs, and limiting highlight work to visible matches (#8800 by @cristinaponcela).

 ### Fixed

 - Fixed managed fd and ripgrep downloads on Linux musl systems (#9070 by @Charlie0113-T).
 - Removed the unavailable inherited Grok Build 0.1 model from /model (#9093 by @Jaaneek).
 - Fixed inherited provider streams emitting incompatible event sequences and custom tool-call deltas.
 - Restored the @earendil-works/pi-coding-agent/client compatibility entry point.
 - Fixed the inherited Qwen Token Plan Individual catalog to include Qwen3.8 Flash (#9021).
 - Fixed inherited OpenAI Codex SSE parsing to process terminal events that are not followed by a blank line (#9047).
 - Fixed inherited GitHub Copilot Claude Fable 5 requests so selected reasoning levels are sent (#8961).
 - Fixed inherited Baseten GLM-5.2 models incorrectly advertising image input support (#8293 by @Panoplos).
 - Fixed skills being unavailable when Bash is the only enabled tool (#8552 by @xl0).
 - Fixed concurrent session shares overwriting one another (#8613 by @wutongyuonce).
 - Fixed image orientation detection skipping EXIF data after non-EXIF APP1 segments (#8616 by @wutongyuonce).
 - Fixed imported sessions overwriting an existing session with the same filename (#8985 by @wutongyuonce).
 - Fixed session forks losing their compaction boundary (#8990 by @acmerfight).
 - Fixed in-memory session forks before an active turn settled (#8937 by @acmerfight).
 - Fixed inherited Fireworks GLM models using the wrong API adapter.
 - Fixed inherited NO_PROXY matching for root domains and subdomains (#8737 by @MeiSiristhebest).
 - Fixed bash, edit, find, grep, ls, read, and write tools ignoring ctx.cwd (#8627 by @vmizg).
 - Fixed inherited terminal startup under restricted seccomp policies that reject the SIGWINCH self-signal (#8898 by
   @bartlomiejkida).
 - Fixed inherited Zed terminal image capability detection (#8828 by @Perlence).
 - Fixed drag selection continuing over the fullscreen editor.
 - Fixed managed fd and ripgrep downloads requiring the GitHub Releases API (#8708 by @Terminator666666).
 - Fixed branch summaries failing when reasoning consumes the previous 2048-token output cap (#8845).
 - Fixed the write tool reporting UTF-16 code-unit counts as byte counts by removing the misleading count (#8979).
 - Fixed proxied plain-HTTP provider requests hanging after a tool call by tunneling them with CONNECT (#8134).
 - Fixed RPC abort reporting success without cancelling an in-progress manual compaction (#8920).

 [0.84.4] - 2026-08-28

 ### New Features

 - Terminal capability overrides — Override detected terminal hyperlink, image, and truecolor support. See Capability Overrides.
 - Extension UI prompt events — Integrations can distinguish active agent work from time spent waiting for ctx.ui prompts. See
   Extension UI prompt events.
 - RPC queue clearing — Retrieve and clear queued steering and follow-up messages with clear_queue. See RPC clear_queue.
 - Fullscreen selection copy controls — Disable automatic selection copying in fullscreen mode and use Ctrl+X to copy the active
   selection. See UI & Display.
 - DeepSeek V4 Flash Vision (experimental) — Use the vision-capable model through the built-in DeepSeek provider. See API Keys.

 ### Added

 - Added supportsMidConvoEffort to custom Anthropic Messages model compatibility settings.
 - Added transcript notices for Anthropic thinking blocks dropped during provider recovery when cache miss notices are enabled.
 - Added ui_prompt_start and ui_prompt_end extension events so host integrations can distinguish active agent work from waiting on
   user-facing ctx.ui prompts (#8355 by @cristinaponcela).
 - Added detectSupportedImageMimeTypeFromFile() to the public library exports (#8600 by @xl0).
 - Added inherited experimental vision-capable deepseek-v4-flash-vision-exp model support.
 - Added transcript usage notices for compaction and branch summaries when cache miss notices are enabled.
 - Added RPC clear_queue to retrieve and remove queued steering and follow-up messages (#8432).
 - Added environment variables and advanced settings for overriding auto-detected terminal hyperlink, image, and truecolor
   capabilities (#8665).
 - Added fullscreenCopyOnSelect to disable automatic fullscreen selection copy; when disabled, Ctrl+X copies the active text
   selection before falling back to the last assistant message, while /tree still copies the selected message (#7720).

 ### Changed

 - Changed fullscreen scrollbars to reveal on pointer entry, support optional scrollbarTrack and scrollbarThumb theme colors with
   muted and text fallbacks, keep one thumb color across normal and expanded states, and support track-click jumping.
 - Changed fullscreen transcript search arrows to underline on hover and capitalized the search placeholder.
 - Changed selectors in /thinking, /model, /scoped-models, /trust, per-model thinking settings, and theme settings to keep active
   options marked while browsing. /scoped-models now uses consistent per-item toggles and strikes through unavailable models (#8900).

 ### Fixed

 - Fixed toggling thinking visibility clearing partial output from running Bash tools (#8611).
 - Fixed Windows shell aborts crashing Pi when taskkill.exe is unavailable on PATH (#6596).
 - Fixed resumed sessions corrupting the next appended entry when their JSONL file lacks a trailing newline (#8345).
 - Fixed extension messages sent with triggerTurn: false while the agent is running being inserted between a tool call and its
   result, which made providers that validate message order reject the replayed history. They are now appended once the turn's tool
   results are in (#8537).
 - Fixed compaction and branch summaries forcing toolChoice: "none" (#8649, #8638).
 - Fixed large tool results crossing the auto-compaction threshold being sent to the provider before compaction. Pi now compacts
   between tool execution and the next assistant response in the same run, and restores interactive progress when that run resumes
   (#6879).
 - Fixed Google Vertex requests failing with HttpsProxyAgent is not a constructor when the bundled Node.js runtime uses an HTTP(S)
   proxy (#8610).
 - Fixed saving a default model from a non-empty model scope so it remains available in that scope.
 - Fixed inherited @ file autocomplete ranking to prefer direct and shallower matches over similarly ranked nested paths (#8669).
 - Fixed inherited OpenAI-compatible streams serializing thinking signatures repeatedly during streaming (#8671).
 - Fixed inherited main-screen rendering crashing when image-heavy output exceeded V8's string length limit (#8028).
 - Fixed inherited fullscreen double-click word selection splitting paths and kebab-case tokens on / and - (#8676).
 - Fixed inherited Cloudflare AI Gateway catalogs omitting supported workers-ai/* passthrough models.
 - Fixed inherited OpenAI-compatible reasoning replay to merge consecutive streamed text and summary reasoning_details deltas.
 - Fixed inherited OpenRouter reasoning controls so reasoning-mandatory models do not receive effort: "none" (#8614 by @davidbrai).
 - Fixed inherited OpenAI-compatible Chat Completions ignoring an explicitly requested toolChoice when no tools are defined.
 - Fixed inherited fragmented Mistral tool calls splitting when continuation chunks omit the tool-call ID (#8387).

 [0.84.3] - 2026-08-24

 ### New Features

 - PowerShell tool — Use optional native PowerShell command execution on Windows. See PowerShell Tool.
 - Safer managed updates — Stage, verify, and atomically activate updates for installer-managed installations. See Install and
   Manage.
 - Model and thinking controls — Select thinking levels with /thinking, search defaults, keep selections session-scoped, and persist
   them explicitly with Ctrl+S. See Models and Thinking.

 ### Breaking Changes

 - Renamed the inherited GoogleThinkingLevel type to GoogleApiThinkingLevel and added ResolvedGoogleThinkingLevel for normalized
   adapter levels.

 ### Added

 - Added an optional powershell tool for Windows, configurable through defaultTools and the SDK. See PowerShell Tool.
 - Added a /thinking selector and searchable default choices to the model and thinking selectors; Ctrl+S saves the selected model as
   the global default. See Models and Thinking.
 - Added optional routing session IDs to exported compaction summary helpers so callers can preserve provider routing without
   enabling prompt cache writes.
 - Added transcript usage notices for compaction and branch summaries when cache miss notices are enabled.
 - Added session_compact_failed extension events so compaction failures and aborts expose their reason, retry state, source, and
   error message to handlers (#8175).
 - Added inherited provider-neutral toolChoice support to simple stream requests.
 - Added inherited automatic Anthropic server-side refusal fallback for supported first-party models, including returned-model usage
   pricing (#8017).
 - Added inherited configurable OpenAI-compatible thinking-token budget fields for vLLM, Qwen/SGLang, and llama.cpp servers. See
   OpenAI Compatibility (#8275 by @bnsd55).
 - Added inherited China-specific ZAI Coding Plan models, including GLM-4.6V vision support and API-equivalent usage cost estimates
   (#8220).
 - Added inherited deepseek-v4-pro-0813 support to the Qwen Token Plan Individual catalog (#8194).

 ### Changed

 - Changed experimental installer-managed installations so pi update stages, verifies, and atomically activates the selected release
   in place. See Install and Manage.
 - Changed inherited built-in xAI models to use the Responses API with encrypted reasoning replay and made Grok 4.6 the default xAI
   model (#8124 by @Jaaneek).
 - Changed inherited Anthropic, Azure OpenAI, Google, Mistral, and OpenAI adapters to send Pi's default User-Agent unless overridden
   (#8305).
 - Changed Windows and WSL keybinding defaults to avoid terminal-reserved shortcuts for image paste, model cycling, editor undo,
   fullscreen transcript navigation and search, and message queueing (#8372).
 - Changed Bun release archives to ship the native clipboard binary only inside the wrapper package, removing a duplicate platform
   package from each archive.
 - Changed package resource glob expansion to use Node.js's built-in implementation with deterministic visible-path matching,
   reducing the installed runtime dependency tree.
 - Changed the bundled Node.js runtime to load jiti only when importing an extension and Babel only when uncached source needs
   transformation, reducing CLI startup time and bundle size.
 - Changed syntax highlighting to initialize only twenty common languages eagerly and defer the remaining grammars until after the
   initial TUI render, reducing CLI startup time.
 - Changed the Node.js CLI and RPC entrypoints to load a bundled runtime, reducing startup filesystem reads while keeping the public
   library and legacy module paths on the modular runtime for normal dependency identity.
 - Changed session sharing to render clickable terminal links, display only the canonical Radius artifact URL, and include the
   current system prompt and active tool definitions in Radius session shares.

 ### Fixed

 - Fixed failed extension factories leaving event subscriptions, provider registrations, and default flag state active (#8424 by
   @acmerfight).
 - Fixed models.json typings omitting the documented OpenAI-compatible compat.supportsFinishReason provider and model override (#8487
   by @petrroll).
 - Fixed /model and /thinking selections being persisted globally unless explicitly saved with Ctrl+S (#5263).
 - Fixed JSON and RPC toolcall_start events omitting the tool call id and name (#7953 by @christianklotz).
 - Fixed extensions failing to load when the Node.js CLI runs as a single-executable application (#8237).
 - Fixed nested Markdown skills inside .agents/skills/ grouping directories not being discovered.
 - Fixed compaction and branch summarization requests exposing tools to providers.
 - Fixed single-object edit tool inputs failing validation by accepting them as one-edit arrays in both coding-agent and harness edit
   tools (#7835).
 - Fixed root Markdown files such as README.md and AGENTS.md in skill directories being reported as broken skills unless they declare
   valid skill frontmatter (#7805).
 - Fixed the default Cerebras model referencing an unavailable Z.AI model.
 - Fixed inherited OpenAI-compatible Chat Completions reasoning replay to preserve and resend assistant-level reasoning_details
   verbatim and in order (#7994).
 - Fixed inherited Anthropic server-side fallback responses being priced with the requested model instead of the returned fallback
   model (#8285).
 - Fixed inherited GitHub Copilot login triggering model-policy rate limits by limiting policy updates, retrying model discovery
   once, and honoring server retry delays (#7850).
 - Fixed inherited Amazon Bedrock dropping and failing to replay opaque redacted reasoning from non-Anthropic models (#8314 by
   @seiji).
 - Fixed inherited Z.AI Coding Plan models deriving incomplete reasoning-effort metadata, including missing GLM-5.3 low, high, and
   max levels (#8336).
 - Fixed inherited DeepSeek V4 Flash on OpenCode and OpenCode Go omitting its supported low thinking level (#8181 by @tianshuang).
 - Fixed inherited Azure OpenAI Responses ignoring toolChoice in provider-specific stream requests.
 - Fixed inherited Amazon Bedrock response hooks receiving only a synthesized request id instead of the raw response headers (#8234).
 - Fixed inherited Kimi usage reporting so top-level cached_tokens count as cache reads instead of normal input tokens (#8075).
 - Fixed inherited Google custom models ignoring thinkingLevelMap, which dropped extended thinking controls (#8135).
 - Fixed writes to auth.json and models-store.json overriding administrator-managed file permissions and ACLs (#7779).
 - Fixed UTF-8 BOM markers preventing frontmatter and user configuration files from loading (#8337).
 - Fixed invalid settings files being easy to miss during interactive startup by rendering warnings with the file path inside the TUI
   (#7829).
 - Fixed the subagent example repeatedly prompting before running project-local agents in trusted repositories (#8261).
 - Added session_compact_failed extension events so compaction failures and aborts expose their reason, retry state, source, and
   error message to handlers (#8175).
 - Fixed truncated compaction and branch summaries being persisted when generation reaches its output token limit (#7048).
 - Fixed npm package update checks treating older registry versions as available updates, preventing pi update from downgrading
   already-newer installed packages (#8226).
 - Fixed built-in llama.cpp models disappearing from /model when /llama refreshed a configured server under PI_OFFLINE, and included
   idle-slept sleeping router models plus autoloadable unloaded presets in the selectable catalog (#8558 by @cristinaponcela).
 - Fixed pi.registerFlag() accepting default values that do not match the declared flag type (#8064).
 - Fixed Z.AI Coding Plan defaults referencing the removed GLM-5.1 model (#8096).
 - Fixed repeated ambiguous truncated-response recovery being mislabeled as context overflow (#8130).
 - Fixed duplicate fullscreen right-click paste in VS Code-based terminals on Windows (#8186).
 - Fixed inherited padded text exceeding narrow terminal widths (#8252).
 - Fixed inherited wrapped Markdown table links leaking color into borders and neighboring cells, including tables inside blockquotes
   (#8335).
 - Fixed llama.cpp login guidance to direct users to /llama before /model when no local models are loaded (#8203).
 - Fixed hung pi.dev model catalog requests consuming the entire refresh deadline without retrying (#8198).
 - Fixed inherited Xiaomi model catalogs listing shut-down MiMo V2 models in /model and --list-models (#8187).
 - Fixed branch summary entries recording the navigation destination in fromId instead of the pre-navigation source leaf.
 - Fixed threshold auto-compaction being skipped when providers omit streaming usage data (#8328).
 - Fixed dash-prefixed prompts being parsed as options by supporting -- as an end-of-options delimiter (#7269).

 [0.84.2] - 2026-08-14

 ### New Features

 - Fullscreen transcript search — Search and navigate matches in fullscreen mode. See TUI Fullscreen Viewport.
 - Configurable default tools — Choose startup built-in tools globally or per project. See Tools.
 - Configurable fullscreen exit output — Print the transcript or only a resume hint on exit. See Interactive Mode.

 ### Added

 - Added per-block fullscreen mouse expansion for thinking sections and tool results, while preserving drag selection and link
   activation.
 - Added fullscreen transcript search with Ctrl+Shift+F, incremental match highlighting, configurable search match theme colors, and
   next/previous navigation with Enter/Ctrl+G and Shift+Enter/Ctrl+Shift+G.
 - Added experimental strict JSON-schema constrained sampling for the default read, bash, edit, and write tools under
   PI_EXPERIMENTAL=1.
 - Added a fullscreen exit output setting to choose between printing the final transcript and only a session resume hint.
 - Added the defaultTools setting for configuring the initial built-in tool selection globally or per project.
 - Added --use-theme <name[/name]> to choose an initial per-run interactive theme without changing saved settings (#7722 by
   @rwachtler).
 - Added expandPromptTemplates to extension pi.sendUserMessage() options for explicitly dispatching commands and expanding skills and
   prompt templates. See pi.sendUserMessage() (#7857 by @mrexodia).
 - Added inherited createGatewayBindingFetch() for routing Cloudflare AI Gateway requests through a Workers AI binding without an API
   token (#7901 by @Maximo-Guk).
 - Added inherited AssistantMessage.endTurn to preserve OpenAI Codex's terminal end_turn signal for diagnostics (#7766).
 - Added inherited unbound single-line transcript scrolling actions for fullscreen mode. See TUI Fullscreen Viewport (#7903 by
   @midastruth).

 ### Changed

 - Changed inherited Kimi Coding requests to use pi's runtime User-Agent header.
 - Replaced the inherited Mistral SDK transport with a native Chat Completions HTTP stream, eliminating its generated client and
   schema runtime overhead.
 - Documented the generic AI_AGENT=pi process marker and how it differs from PI_CODING_AGENT=true (#7747).
 - Changed inherited OpenAI Responses deferred tool loading to prefer message-anchored additional_tools where supported while
   retaining tool-search and top-level fallbacks (#7709).
 - Reduced inherited fullscreen rendering allocation churn by painting full-width layout rows directly instead of recompositing them
   on every frame.

 ### Fixed

 - Fixed root Markdown files such as README.md and AGENTS.md in skill directories being reported as broken skills unless they declare
   valid skill frontmatter (#7805).
 - Fixed single-object edit tool inputs failing validation by accepting them as one-edit arrays in both coding-agent and harness edit
   tools (#7835).
 - Fixed managed-tool downloads delaying TUI startup and hiding diagnostics in fullscreen mode by mounting the TUI first and showing
   download progress and warnings inside it.
 - Fixed opening a model selector immediately after startup cancelling and restarting the in-progress model catalog refresh.
 - Fixed inherited GitHub Copilot login triggering API rate limits while enabling model policies by limiting concurrent policy
   updates (#6187).
 - Fixed fullscreen transcript search snapping back to the current match during manual scrolling and fragmented mouse input leaking
   into the search query.
 - Fixed inherited required LaTeX arguments starting on a new line being parsed as empty (#7760).
 - Updated the transitive nanoid development dependency to address a denial-of-service vulnerability.
 - Fixed fallback rendering for extension tool results to collapse long output and honor tool expansion (#7979).
 - Fixed JSON and RPC message_update events dropping cumulative usage during streaming. See JSON Event Mode and RPC message_update
   (#7982 by @christianklotz).
 - Fixed pi.sendMessage(..., { triggerTurn: false }) steering an active run instead of only recording the custom message (#8022 by
   @cristinaponcela).
 - Fixed the defaultTools setting dropping extension and SDK custom tools when selecting built-in defaults.
 - Fixed the subagent example rejecting YAML array syntax for the tools frontmatter field (#7598 by @alexsavio).
 - Fixed the subagent example dropping parent session model, thinking, and tool configuration (#7897 by @virtuald).
 - Fixed custom system prompts concatenating the current working directory with later appended prompt content (#7887 by
   @distributedlock).
 - Fixed inherited OpenAI Responses function and custom tool calls losing namespaces during streaming, proxying, and replay (#7709).
 - Fixed inherited upstream request buffer failures not triggering automatic assistant retries.
 - Fixed inherited built-in and custom DeepSeek API models sending output limits through an unsupported field.
 - Fixed inherited Amazon Bedrock replay rejecting tool arguments that contain empty object keys while preserving all valid nested
   values (#7882 by @muyiyr).
 - Fixed inherited DeepSeek compatibility detection for base URLs whose hostname contains uppercase letters (#7933 by @yearth).
 - Fixed inherited Google Generative AI and Vertex AI responses with tool calls incorrectly treating output-limit or provider-error
   stops as normal tool use (#8059).
 - Fixed inherited fullscreen mouse drag selection and OSC 8 link activation in terminals that report generic SGR mouse release
   button codes (#7963).
 - Fixed inherited focused fullscreen overlays not receiving mouse wheel or viewport scroll keys such as PageUp and PageDown (#7894).
 - Fixed inherited LaTeX control spaces split across line endings causing complete expressions to fall back to raw source.
 - Fixed split Alt+Enter input over SSH being misread as Escape, added PI_TUI_ESC_TIMEOUT for high-latency terminals, and limited
   that timeout to lone Escape input (#7899 by @powerfooI).
 - Fixed inherited idle fullscreen sessions repainting and clearing text selection when the terminal loses focus (#7892 by
   @terrorobe).
 - Fixed fullscreen selection copy to use the host clipboard and report failure instead of claiming success when OSC 52 is
   unsupported (#8110 by @Panoplos).

 [0.84.1] - 2026-08-07

 ### New Features

 - Qwen Token Plan Individual — Use the built-in provider for models documented for Individual subscriptions. See API Keys.
 - Authentication readiness checks — Use pi auth check to verify provider or model credentials, optionally emitting the resolved
   credential.
 - Improved fullscreen interaction — Select words and paragraphs with multiple clicks and configure half-page transcript scrolling.
   See TUI Fullscreen Viewport.
 - Terminating blocked tool calls — Extension tool_call handlers can stop all-terminating batches without another model call. See
   Tool Events.

 ### Added

 - Added Qwen Token Plan Individual as a built-in provider with its documented subscription model catalog and the shared
   international QWEN_TOKEN_PLAN_API_KEY. See API Keys (#7659 by @arasovic).
 - Added pi auth check provider/model auth preflight with optional credential output (#7152).
 - Added terminate support to blocked extension tool_call events so all-terminating batches can skip the automatic follow-up model
   call. See Tool Events (#7715 by @muyiyr).
 - Added inherited double-click word and whitespace selection, granularity-aware drag selection, and triple-click paragraph selection
   in fullscreen mode (#7725, #7733 by @volsa).
 - Added inherited unbound half-page transcript scrolling actions for fullscreen mode. See TUI Fullscreen Viewport (#7735).

 ### Changed

 - Softened the bash tool's PI_* environment guideline in an attempt to reduce unnecessary inspection commands (#7128).
 - Reduced worst-case automatic terminal theme detection delay from 200 ms to 100 ms by probing color-scheme and background support
   concurrently.

 ### Fixed

 - Fixed Bun standalone binaries crashing on startup when the cwd contains a bunfig.toml with preload by compiling with
   --no-compile-autoload-bunfig (#7685 by @geril07).
 - Fixed extension TUI method wrappers recursing indefinitely when delegating to the original method (#7731).
 - Fixed right-click not pasting clipboard text in fullscreen mode on Windows.
 - Fixed inherited Agent.reset() clearing transcript and runtime state during active runs; it now rejects until the agent is idle
   (#7717 by @wesleyzhangwq).
 - Fixed inherited LaTeX relation, multiplication, and named-operator spacing, and matrix composition with stacked fractions,
   operator limits, and adjacent matrices.
 - Reduced inherited fullscreen mouse event volume under tmux, Zellij, and GNU Screen by using button-motion tracking instead of
   all-motion tracking.

 [0.84.0] - 2026-08-06

 ### New Features

 - Fullscreen TUI mode — Switch between regular and fullscreen modes at runtime, with a sticky editor and footer, independently
   scrollable transcript, and draggable scrollbars. See UI & Display.
 - Mermaid and LaTeX rendering — Render Mermaid diagrams and terminal-friendly Unicode math in interactive transcripts. See Markdown
   settings and TUI Markdown.
 - Per-directory context overrides — Use AGENTS.override.md to replace context files for a specific directory. See Context Files.
 - Advanced custom model sampling — Configure arbitrary OpenAI-compatible samplingParams and opt-in vLLM thinking_token_budget
   values. See Sampling Parameters.
 - Baseten provider — Use built-in Baseten authentication and model support. See API Keys.

 ### Breaking Changes

 - Renamed the inherited pi-ai ModelsStreamTransforms interface to ModelsRequestTransforms because its header transformation now
   applies to all authenticated provider requests.

 - Changed JSON and RPC message_update events to emit only assistantMessageEvent deltas, removing the cumulative message and
   assistantMessageEvent.partial fields that caused quadratic output growth. Clients that need partial messages must assemble deltas
   between message_start and message_end; the latter remains authoritative (#7290).

 - ModelRegistry.getApiKeyAndHeaders() now returns ProviderHeaders with string | null values and preserves null header-deletion
   markers. Extensions that inspect returned headers must handle null; extensions forwarding them to pi-ai streams should pass them
   through unchanged. This prevents placeholder OpenAI credentials from being sent through Cloudflare AI Gateway (#7030).

 - Changed ModelRegistry.refresh() to accept ModelsRefreshOptions and return ModelsRefreshResult instead of discarding cancellation
   and provider errors.

 - Changed ModelRuntime.setRuntimeApiKey() to accept auth cancellation options rather than catalog refresh options. Call refresh({
   providers: [providerId], signal }) separately when remote freshness is required.

 - Required config-form extension OAuth refreshToken(credentials, signal) callbacks to accept and honor a concrete abort signal.

 - Replaced dynamic provider refresh context store access with the read-only context.stored snapshot and generation-checked
   context.publish() transaction.

   Providers built with createProvider({ fetchModels }): no catalog-publication migration is required. Before and after, return the
   fetched models and register the resulting provider; createProvider() owns restoration, persistence, and in-memory publication.

   ```ts
     // Before
     const beforeProvider = createProvider({
       // ...
       fetchModels: async ({ signal }) => {
         const response = await fetch(catalogUrl, { signal });
         return parseModels(await response.json());
       },
     });
     pi.registerProvider(beforeProvider);

     // After: unchanged
     const afterProvider = createProvider({
       // ...
       fetchModels: async ({ signal }) => {
         const response = await fetch(catalogUrl, { signal });
         return parseModels(await response.json());
       },
     });
     pi.registerProvider(afterProvider);
   ```

   Handwritten native Provider.refreshModels(): replace direct store access and pre-publication mutation with generation-guarded
   publications.

   ```ts
     // Before
     refreshModels: async (context) => {
       const stored = await context.store.read();
       if (stored) currentModels = stored.models;
       if (!context.allowNetwork) return;

       const refreshed = await fetchModels(context.signal);
       currentModels = refreshed;
       await context.store.write({ models: refreshed, checkedAt: Date.now() });
     },

     // After
     refreshModels: async (context) => {
       if (context.stored) {
         const restored = context.stored.models;
         if (!(await context.publish({
           update: () => { currentModels = restored; },
         }))) return;
       }
       if (!context.allowNetwork) return;

       const refreshed = await fetchModels(context.signal);
       if (context.signal.aborted) return;
       await context.publish({
         persist: { models: refreshed, checkedAt: Date.now() },
         update: () => { currentModels = refreshed; },
       });
     },
   ```

   For the config-form pi.registerProvider(name, { refreshModels }), callbacks that only return models remain unchanged; pi publishes
   the returned list. If such a callback previously used context.store for custom persistence, read context.stored and call
   context.publish({ persist: entry }). In publish(), omit persist to leave storage unchanged, pass a ModelsStoreEntry to write it,
   or pass persist: null to delete it.

 - Replaced the inherited pi-agent-core harness session model with the v4 lane-based Session, SessionStorage, and SessionRepo APIs,
   including durable operation records, global facts, shared sequence numbers, and tree-scoped lane views.

 - Promoted the inherited v2 session and AgentHarness API from pi-agent-core's experimental entrypoint to its default export and
   removed the experimental subpaths.

 - Removed the inherited legacy JSONL and in-memory repository APIs. Use pi-agent-core's v4 JsonlSessionRepo or InMemorySessionRepo,
   both implementing the new SessionRepo contract.

 - Added the inherited required pi-agent-core FileSystem.renameFile() operation for atomic JSONL publication; custom harness
   file-system implementations must provide same-filesystem replacement semantics (#7707 by @davidbrai).

 - Replaced experimental remote-session list summaries with durable SessionMetadata; RemoteSession.sessions no longer exposes runtime
   phase, model, thinking, attachment, or lock state, which remains available from acquired SessionSnapshot values (#7708).

 ### Added

 - Added built-in Baseten provider support with BASETEN_API_KEY authentication and zai-org/GLM-5.2 as the default model.
 - Added experimental remote-session client APIs: the transport-neutral PiClient, CBOR protocol, Unix-socket transport, and
   @earendil-works/pi-coding-agent/client RemoteSession controller with transcript reducers. See Pi Client and Remote Protocol
   (#7344, #7348, #7371, #7409).
 - Added CredentialSynchronizationError for credential changes that commit successfully but fail to synchronize local model state.
 - Added chainable pi.registerMarkdownTransformer() hooks for display-only transformation of user and assistant Markdown. See
   pi.registerMarkdownTransformer() (#7231 by @xl0).
 - Added an experimental fullscreen TUI mode, selectable through --tui-mode fullscreen or /settings (#7304).
 - Added runtime switching between regular and fullscreen TUI modes through /settings.
 - Added a sticky editor, status, widget, and footer dock to fullscreen mode while keeping the transcript independently scrollable.
 - Added a draggable transcript scrollbar to fullscreen mode with configurable auto, always, and hidden modes through /settings;
   always reserves the rightmost column.
 - Added page scrolling and marked-message navigation shortcuts to fullscreen mode.
 - Added an optional scrollbarThumb theme color for fullscreen scrollbar thumbs, falling back to selectedBg.
 - Added configurable themed Unicode rendering for supported Mermaid diagrams in interactive messages, including optional rendering
   while streaming. See Markdown settings (#7624 by @xl0).
 - Added opt-in Ctrl+P/Ctrl+N prompt history navigation, with explicit history bindings taking precedence over application shortcuts
   while the editor is focused.
 - Added per-directory AGENTS.override.md context files, which replace AGENTS.md or CLAUDE.md in the same directory while preserving
   context from other directories. See Context Files (#7681 by @Marvae).
 - Added AI_AGENT=pi to CLI and RPC child-process environments for generic agent attribution. See Environment Variables (#7493 by
   @renaudhartert-db).
 - Added inherited terminal-friendly Unicode rendering for LaTeX expressions in Markdown. See TUI Markdown.
 - Added stacked transient notifications in fullscreen mode.
 - Added arbitrary OpenAI-compatible model sampling parameters through samplingParams in models.json, model overrides, extension
   providers, and stream options. See Sampling Parameters (#7568 by @mrexodia).
 - Added inherited opt-in vLLM thinking_token_budget support for OpenAI-compatible models, reserving output tokens for the final
   answer (#7638 by @bnsd55).
 - Added inherited support for OpenAI-compatible streams that omit finish_reason, using compat.supportsFinishReason to infer normal
   and tool-use stops when the stream ends. See OpenAI Compatibility.
 - Added inherited deferred provider request contracts, durable response handles, authenticated fetch/cancel dispatch, and
   faux-provider support for pending, ready, failed, and cancelled responses (#7339 by @davidbrai).
 - Added inherited vendor-neutral telemetry contracts plus agent-owned typed AI-request and harness schemas, composed span starters,
   and callback helpers. See the agent telemetry schema reference.
 - Added inherited structured Amazon Bedrock failure diagnostics with HTTP status, modeled error code, and AWS request id when
   available (#7286 by @brianstanley).
 - Added inherited AgentOptions.shouldStopAfterTurn for gracefully stopping after a completed turn before queued messages or another
   model call are processed. See Agent Options (#7367 by @acmerfight).
 - Added inherited v4 JsonlSessionRepo support for append-only JSONL harness sessions (#7611 by @davidbrai).
 - Added inherited bounded branch-entry and indexed open-operation recovery queries to the v4 session API (#7448, #7646).
 - Added the inherited compile-complete AgentHarness v2 scaffold; unfinished operation paths reject with HarnessNotImplemented while
   durable execution is implemented.

 ### Changed

 - Added inherited optional cancellation to pi-ai ModelsStore reads, writes, and deletions; catalog orchestration binds these waits
   to the provider refresh signal.
 - Reduced the inherited default fullscreen mouse wheel step from three lines to one for finer scrolling.

 ### Fixed

 - Fixed the footer showing (sub) for generic OAuth/OpenID sign-ins without a known subscription; extension OAuth providers can opt
   in with isSubscription.
 - Fixed inherited OAuth token refreshes so stalled requests release the credential-store lock (#7508).
 - Fixed inherited tool argument validation to preserve values that already match an anyOf/oneOf union arm before coercion, avoiding
   nullable unions converting null to another primitive value (#7328).
 - Fixed inherited Fireworks GLM 5.2 requests sending the unsupported prompt_cache_retention field when long cache retention is
   enabled, and enabled session affinity for automatic prompt caching (#7676).
 - Fixed inherited JsonlSessionRepo enforcing session IDs globally across working directories; IDs are now unique within each working
   directory.
 - Fixed inherited JSONL session forks and torn-tail repairs to publish atomically, avoiding partially written or corrupted sessions
   after interrupted writes (#7707 by @davidbrai).
 - Fixed path-containing find globs returning no results on Windows (#6817).
 - Fixed messages queued during manual /compact failing instead of being sent after compaction completes.
 - Fixed Git Bash, MSYS, Cygwin, and WSL drive paths passed to built-in file tools resolving against the current Windows drive
   instead of their native drive (#7064, #7547).
 - Fixed project-level nested provider retry settings replacing unmodified global provider retry settings (#7572).
 - Fixed inherited GitHub Copilot Grok 4.5 requests to use the supported Responses API (#7560).
 - Fixed fullscreen shutdown leaking terminal capability-query replies into the parent shell prompt.
 - Fixed bare exact --model IDs shared by multiple providers choosing the first catalog entry instead of the sole authenticated
   provider or a clear ambiguity error (#7327).
 - Fixed standalone x64 binaries requiring Haswell-era AVX2/BMI2 instructions by compiling release executables against Bun's baseline
   runtime (#7390 by @davidbrai).
 - Fixed Ctrl+X copy confirmations in fullscreen mode adding a transcript status line instead of showing the transient Copied!
   marker.
 - Fixed Kitty image previews in fullscreen mode overlapping the sticky editor and footer dock while scrolling.
 - Fixed image-heavy fullscreen sessions lagging when layout changes retransmitted visible Kitty image payloads and rendered the
   transcript twice per frame.
 - Fixed spaces in /settings searches toggling the highlighted setting while typing multi-word queries such as TUI mode or Quiet
   startup.
 - Fixed custom editors not inheriting the default editor's autocomplete dropdown item limit (#7333).
 - Fixed malformed resource arrays in package manifests crashing session startup (#7187).
 - Fixed the DOOM overlay example downloading its shareware WAD from a dead URL.
 - Fixed setToolsExpanded(false) to be a no-op when tool output is already collapsed, avoiding redundant Tool output: collapsed
   startup notices from extensions (#7292).
 - Fixed extension-driven model calls in custom compaction, handoff, and Q&A examples to dispatch through the coding-agent model
   runtime so custom providers and resolved auth options are preserved (#7325).
 - Fixed long-running sessions using stale credentials after another process updates auth.json without serializing concurrent
   credential reads and delaying startup (#7319).
 - Fixed concurrent models-store.json reads forming a file-lock convoy and delaying startup.
 - Updated the packaged brace-expansion dependency to 5.0.8 to address GHSA-mh99-v99m-4gvg (#7316).
 - Fixed forced model availability refreshes remaining blocked behind a stalled earlier refresh (#7301, #7421 by @a-yeyang).
 - Fixed /model catalog refresh failures to identify every catalog that failed.
 - Fixed provider login remaining stuck after saving credentials when a model catalog refresh stalls by separating local credential
   consistency from bounded background freshness (#7027, #7113, #7418).
 - Fixed /scoped-models waiting for remote catalogs before rendering instead of showing cached models and cancelling refresh on close
   (#7153).
 - Fixed /model <name> waiting for catalog refresh before checking cached model matches (#7443).
 - Fixed stale availability snapshots and errors publishing after a newer availability pass.
 - Fixed stale pi.dev, Radius, llama.cpp, and extension catalog refreshes publishing after a newer provider refresh.
 - Fixed cancellation while waiting for file-backed credential or model-catalog locks, preventing cancelled mutations from running or
   committing later.
 - Fixed concurrent in-memory credential mutations losing unrelated provider updates by serializing their read-modify-write sections.
 - Updated undici to 8.9.0 and the packaged brace-expansion to 5.0.9 to address GHSA-8xcm-r25x-g524, GHSA-4cwx-7wf7-3272,
   GHSA-m8rv-5g2x-5cg5, GHSA-jr45-8vmc-qm54, GHSA-v3r7-h72x-cjcm, and GHSA-rgw5-rvv9-x895.
 - Fixed GitHub Copilot compaction and branch summaries using the Individual endpoint instead of the credential-resolved Business or
   Enterprise endpoint (#6768).
 - Fixed extension model calls dropping credential-resolved endpoints when forwarding request authentication, including custom
   compaction with GitHub Copilot Business and Enterprise accounts (#7579).
 - Fixed fullscreen transcript navigation leaving no editor-accessible Home, End, PageUp, or PageDown variants by adding
   Ctrl-modified editor bindings (#7574).
 - Fixed extension event-bus listeners surviving session reloads and disposal (#7656 by @tudoroancea).
 - Fixed /copy failing to read clipboard text on Wayland when no X11 clipboard is available (#7387).
 - Fixed slow connections failing during the initial connection attempt by increasing the connect timeout (#7435 by @muyiyr).
 - Fixed oversized images returned by extension and built-in tools bypassing automatic image resizing. See Image settings (#7330 by
   @tizmagik).
 - Fixed session discovery missing sessions stored through symlinked directories (#7552 by @muyiyr).
 - Fixed manual compaction racing with threshold auto-compaction (#7370 by @davidbrai).
 - Fixed responses truncated below their intended output limit ending the run instead of compacting and retrying once (#7540 by
   @davidbrai).
 - Fixed Git package updates leaving dependencies missing when git clean cannot remove an ignored dependency directory (#7570 by
   @mrexodia).
 - Fixed find results from POSIX and Windows filesystem roots losing the first path segment or gaining duplicate trailing separators
   (#7569 by @petrroll).
 - Fixed transient version-check, catalog, managed-tool, and package-management HTTP failures not being retried (#7632 by @petrroll).
 - Fixed interactive errors ignoring the configured output padding.
 - Fixed the inherited OpenCode Go provider display name.
 - Fixed inherited provider error normalization treating arrays and class instances as structured response bodies instead of
   preserving their original errors (#7205 by @erikogenvik).
 - Fixed inherited Anthropic streams dropping text or thinking included in the initial content-block event (#7358 by @davidbrai).
 - Fixed inherited Google history conversion dropping signed empty text and thinking blocks required for replay (#7362 by
   @jingtao-wisdomgraph).
 - Fixed inherited OpenAI Codex cached WebSocket sessions being shared across different account credentials (#7364).
 - Fixed inherited transient Google Generative AI and Vertex AI provider errors bypassing automatic retries (#7471 by @vish-pr).
 - Fixed inherited Gemini 3 tool call ids being discarded during history conversion, breaking signed multi-turn replay (#7494 by
   @muyiyr).
 - Restored inherited GitHub Copilot models returned through account-specific policy responses (#7672 by @muyiyr).
 - Replaced the inherited retired Qwen Token Plan qwen3.8-max-preview model with qwen3.8-max (#7670 by @QuintinShaw).
 - Fixed inherited terminal width accounting for Indic conjunct grapheme clusters (#6987 by @petrroll).
 - Fixed inherited nested fullscreen stack layouts ignoring child minimum sizes.
 - Fixed inherited batched terminal color-scheme reports being parsed as one malformed response (#7550).
 - Fixed inherited terminal progress clearing to emit the complete OSC 9;4 sequence (#7581).
 - Fixed inherited iTerm2 image payloads omitting the size metadata required by the xterm.js image addon (#7612).
 - Fixed inherited width truncation leaving OSC 8 hyperlinks unterminated (#7657 by @xXJSONDeruloXx).
 - Updated inherited GPT-5.6 Terra and Luna pricing across OpenAI and passthrough model catalogs.
 - Fixed inherited Fireworks Kimi K3 models to use the OpenAI-compatible API with native reasoning-effort levels and deferred tools
   (#7199, #7230 by @XBeg9).
 - Updated the inherited Groq Qwen reasoning override for the replacement qwen/qwen3.6-27b model.
 - Fixed inherited Windows Shift+Enter detection by reading modifier state from the native Win32 helper.
 - Fixed the inherited pi-tui npm package omitting the source and build scripts needed to rebuild its Windows and Darwin native
   addons.
 - Fixed inherited Windows console truecolor detection when Windows Terminal does not provide WT_SESSION to child shells.
 - Fixed inherited phantom fullscreen text selection from unmatched mouse events when changing terminal pane focus.
 - Fixed inherited keyboard input rendering latency on Windows by letting input preempt the throttled render timer.
 - Fixed inherited agent harness path handling on Windows for file basenames, recursive skill loading, and prompt template names.

 [0.83.0] - 2026-07-29

 ### New Features

 - Credential export for external clients — pi auth print-api-key and pi auth print-bearer-token export configured credentials with
   automatic OAuth refresh and minimum-validity enforcement.
 - Headless OpenRouter sign-in — Complete /login over SSH by pasting the redirect URL or authorization code when the loopback
   callback is unavailable. See OpenRouter.
 - Claude Opus 5 on GitHub Copilot — Use Claude Opus 5 through GitHub Copilot with adaptive thinking and a 1M context window. See
   GitHub Copilot.

 ### Breaking Changes

 - Upgraded bundled TypeBox aliases to 1.3.7, removing deprecated APIs including Type.Base, Type.Awaited, Type.Promise,
   Type.AsyncIterator, Type.Iterator, Type.Options, and Value.Mutate, while fixing compiled validation of nullable array tool
   arguments. Extensions using removed APIs must migrate to supported TypeBox APIs. See Package Dependencies (#7243 by @petrroll).

 ### Added

 - Added pi auth print-api-key and pi auth print-bearer-token commands for exporting configured credentials to external clients,
   including automatic OAuth refresh and configurable minimum token validity (#7168).
 - Exposed the session's resolved model scope as ctx.scopedModels to extensions. See Extension Context (#7191 by @pungggi, #7215).
 - Added inherited per-request fetch injection for supported text and image provider transports.
 - Added the inherited "pending" stop reason for partial streaming messages. See Custom Provider Stream Pattern (#7151 by
   @lucasmeijer).
 - Added inherited raw provider stop reasons across Google, Anthropic, Amazon Bedrock, Mistral, and OpenAI streams; unmapped terminal
   reasons now surface as provider errors instead of successful stops (#7272).
 - Added manual redirect URL and authorization-code entry to OpenRouter login for remote and headless environments. See OpenRouter
   (#7114 by @rgarcia).
 - Added inherited Claude Opus 5 support for GitHub Copilot with adaptive thinking and a 1M context window. See GitHub Copilot (#7158
   by @jay-aye-see-kay).

 ### Changed

 - Changed inherited OAuth credential resolution to refresh tokens with less than five minutes of validity remaining instead of
   waiting until expiration (#7168).

 ### Fixed

 - Added a status line when the tool output expansion is toggled (#7180).
 - Fixed file-backed SYSTEM.md and APPEND_SYSTEM.md prompts being omitted from the interactive startup context listing. See System
   Prompt Files (#7096).
 - Fixed context files loading twice when a linked Git worktree is nested under its main repository. See Context Files (#7221 by
   @arajkumar).
 - Fixed llama.cpp streamed responses reporting zero token usage and leaving session context accounting empty. See llama.cpp (#7258
   by @SteveImmanuel).
 - Fixed session replacement and committed tree navigation during an active response to abort and persist the outgoing turn instead
   of leaving dangling tool calls. See Sessions (#7022 by @tmustier).
 - Fixed failed Git package installs leaving partial directories that blocked clean retries. See Install and Manage (#7210 by
   @haoqixu).
 - Fixed the /model selector retaining a stale selection while filtering instead of highlighting the top match (#7211 by
   @christianbasch).
 - Fixed direct RPC bash commands bypassing extension user_bash handlers. See User Bash Events (#7214).
 - Fixed skills, prompts, and themes losing package source metadata after extensions reload resources. See Resource Events (#6968).
 - Fixed cancellation of concurrently running user bash commands so every active command is aborted (#7103 by @yzhg1983).
 - Fixed duplicate messages appearing when extensions switch sessions during interactive startup (#7110 by @yzhg1983).
 - Fixed inherited Qwen Token Plan reasoning models to send their service-specific thinking controls and supported reasoning-effort
   levels (#6951, #6998).
 - Fixed inherited Z.AI output limits being sent through an unsupported parameter. See Providers (#7174 by @HyeokjaeLee).
 - Fixed explicitly configured Amazon Bedrock profiles being overridden by ambient AWS access keys. See Amazon Bedrock (#7176 by
   @christianbasch).
 - Fixed inherited image fallback paths overflowing narrow terminals, shortened home-directory paths, and made absolute paths
   clickable when terminal hyperlinks are available (#7262).
 - Fixed inherited OpenAI-compatible tool calls losing their function arguments when malformed deltas also contain an empty custom
   object (#7288 by @sunnyyoung).

 [0.82.1] - 2026-07-25

 ### New Features

 - Claude Opus 5 — Available on Anthropic and Amazon Bedrock with adaptive thinking (including xhigh), inference profiles, and prompt
   caching. See Providers.
 - Anthropic gateway bearer auth — ANTHROPIC_AUTH_TOKEN authenticates against Anthropic-compatible gateways that require
   Authorization: Bearer, including compaction and branch summaries. See Environment Variables or Auth File.
 - Faster, more resilient model catalogs — pi.dev catalogs revalidate with If-None-Match so unchanged providers answer with an empty
   304, and llama.cpp models stay listed across restarts. See llama.cpp.

 ### Added

 - Exposed the outputPad setting to custom message renderers. See Extensions (#7045 by @xl0).
 - Added inherited ANTHROPIC_AUTH_TOKEN bearer authentication for Anthropic-compatible gateways. See Providers (#5871).
 - Added inherited Claude Opus 5 support for Anthropic and Amazon Bedrock with adaptive thinking, inference profiles, prompt caching,
   and preserved AWS validation messages (#7081 by @unexge, #7083 by @davidbrai).

 ### Changed

 - Changed pi.dev model catalog refreshes to revalidate with If-None-Match, so unchanged provider catalogs answer with an empty 304
   instead of a full download.
 - Changed inherited Radius OAuth device authorization, token exchange, and refresh requests to use the configured gateway directly.
 - Changed inherited model loading errors to append the underlying cause, so auth failures such as OAuth refresh failed for
   openai-codex report the provider response instead of a bare wrapper message.

 ### Fixed

 - Fixed compaction and branch summaries for providers whose authentication resolves entirely to request headers (#5871)
 - Fixed unavailable scoped models being hidden from /models, allowing them to be removed without editing settings manually (#6949,
   #7032 by @christianklotz).
 - Fixed startup context file discovery to skip directories that match context file names such as AGENTS.md, which produced EISDIR
   warnings (#7106 by @mrexodia).
 - Fixed the llama.cpp extension to persist its model catalog, so llama.cpp models stay listed before the first successful refresh.
   See llama.cpp (#7072 by @davidbrai).

 [0.82.0] - 2026-07-24

 ### New Features

 - Constrained tool sampling — Tools can prefer or require strict JSON Schema sampling or use OpenAI Lark/regex grammars, with model
   capability metadata preventing unsupported requests. See Constrained Sampling for Tools.
 - OpenRouter and Kimi Code sign-in — Use /login to authorize OpenRouter or a Kimi Code subscription without manually configuring API
   keys. See OpenRouter.
 - Session-aware, streaming bash integrations — Bash tools receive current session/model metadata, while direct RPC bash commands
   stream correlated output. See Bash Tool Session Environment and RPC bash events.

 ### Added

 - Added inherited Tool.constrainedSampling with strict JSON Schema (prefer/require) and OpenAI Lark/regex grammar variants across
   OpenAI, Anthropic, Amazon Bedrock, Google Gemini, and Mistral. See Constrained Sampling for Tools.
 - Added inherited supportsGrammarTools and supportsStrictTools compatibility flags, expanded supportsStrictMode coverage, and
   generated model capability metadata to gate constrained sampling.
 - Added inherited Kimi Code subscription OAuth login for the Kimi For Coding provider, including device authorization and automatic
   token refresh (#6935 by @zaycruz).
 - Added inherited OpenRouter OAuth PKCE login through /login, minting a user-controlled API key. See OpenRouter (#6927 by @rsaryev).
 - Exposed PI_SESSION_ID, PI_SESSION_FILE, PI_PROVIDER, PI_MODEL, and PI_REASONING_LEVEL to commands run by built-in and
   factory-created bash tools. See Bash Tool Session Environment.
 - Added streaming bash_execution_update events for direct RPC bash commands, correlated with request IDs. See RPC bash events (#6971
   by @ananthakumaran).

 ### Changed

 - Changed inherited generated model catalogs to expose only provider-verified reasoning effort levels from models.dev (#6928 by
   @davidbrai).

 ### Fixed

 - Fixed inherited DNS lookup failures such as getaddrinfo, ENOTFOUND, and EAI_AGAIN to trigger automatic assistant retries (#6946 by
   @christianklotz).
 - Fixed inherited OpenRouter Anthropic cache breakpoints to advance through tool results and enabled cache control for
   ~anthropic/*-latest aliases (#6941 by @mteam88).
 - Fixed inherited OpenAI Codex WebSocket sessions to retry once without a missing previous-response continuation after
   previous_response_not_found errors (#6955 by @davidbrai).
 - Fixed TUI debug and crash logs to respect custom agent directories instead of always writing under ~/.pi/agent (#6958 by
   @davidbrai).
 - Fixed slow Ctrl+G external-editor startup when the system temporary directory contains many entries (#6903 by @christianklotz).
 - Fixed startup resource display to preserve relative paths for sibling npm extensions loaded by a package (#6964 by @davidbrai).
 - Fixed compaction and branch-summary requests to use fresh routing session IDs with prompt caching disabled where supported (#6618
   by @tmustier).
 - Fixed explicit self-updates when PI_SKIP_VERSION_CHECK is set (#6977).
 - Fixed scoped model IDs containing brackets to resolve as literal exact matches before glob matching (#6210).
 - Fixed inherited OpenAI and Anthropic provider retry waits to honor abort signals and configured delay limits (#6980 by @petrroll).
 - Fixed fresh installs from preferring bundled model catalogs over newer remote catalogs because package file mtimes were newer
   (#7016 by @davidbrai).
 - Fixed inherited editor scroll indicators overflowing narrow terminals (#7015 by @christianklotz).
 - Fixed llama.cpp models to use the loaded context window as their output token limit instead of capping it at 16K (#7034 by
   @christianklotz).
 - Fixed release source archives to include the generated provider model data used to build standalone binaries.
 - Updated the packaged protobufjs dependency to 7.6.5 to address GHSA-j3f2-48v5-ccww (#7005).
 - Fixed /copy on Wayland to fall back to X11 or OSC 52 when wl-copy fails (#7009 by @rkfshakti).
 - Fixed /model to reload updated models.json configuration when opening the model picker (#6999).

 [0.81.1] - 2026-07-21

 ### New Features

 - Verifiable release source archives — GitHub releases now include deterministic, checksummed source archives with instructions for
   rebuilding standalone binaries. See Building standalone binaries from release source.
 - Resilient compaction and branch summaries — Transient provider failures now follow the configured retry policy, with retry
   lifecycle events available to interactive, JSON, RPC, and SDK consumers. See Compaction & Branch Summarization and RPC retry
   events.

 ### Added

 - Added deterministic, checksummed source archives to GitHub releases with documented standalone binary rebuild instructions (#6913
   by @christianklotz).

 ### Fixed

 - Fixed compaction and branch summarization to retry transient provider failures using the configured retry policy, with retry
   lifecycle events exposed to interactive, JSON, RPC, and SDK consumers (#6901 by @davidbrai).
 - Fixed interactive startup waiting for background model catalog refresh while computing the footer provider count.
 - Restored the default stream fallback for extensions using the pre-0.81 agent-core API (#6915).
 - Fixed inherited Kimi K3 models from Moonshot AI and Moonshot AI China to use the OpenAI thinking format and expose reasoning
   effort support.

 [0.81.0] - 2026-07-21

 ### New Features

 - Local llama.cpp model management — Connect to a llama.cpp router, search and download Hugging Face models, and explicitly load or
   unload models with live progress. See llama.cpp.
 - Full provider extensions — Extensions can register complete pi-ai providers with authentication, model refresh, filtering, and
   custom streaming. See Register New Provider.
 - Qwen Token Plan providers — Use the built-in international and China subscription providers with regional endpoints and API-key
   authentication. See API Keys.
 - Expanded usage accounting — Tool, compaction, and branch-summary usage is persisted and included in session totals. See Compaction
   & Branch Summarization.

 ### Added

 - Added Qwen Token Plan and Qwen Token Plan China to built-in provider setup, default model resolution, and provider documentation
   (#6858 by @QuintinShaw).
 - Added the get_available_thinking_levels RPC command and RpcClient.getAvailableThinkingLevels() method (#6865 by @cristinaponcela).
 - Exported message and tool execution lifecycle event types from the package root (#6772 by @davidbrai).
 - Added built-in llama.cpp router support with /login connection setup and /llama Hugging Face model search and downloads, explicit
   loading, unloading, and live progress. See llama.cpp.
 - Added extension registration for complete pi-ai providers, including native authentication, model refresh, filtering, and
   streaming behavior.
 - Added usage accounting for tools, compaction, and branch summaries in persisted sessions, footer totals, and session statistics
   (#6671 by @davidbrai).

 ### Fixed

 - Updated the packaged brace-expansion dependency to 5.0.7 (#6896 by @davidbrai).
 - Fixed persisted remote model catalogs from overriding newer bundled catalogs after an upgrade.
 - Fixed inherited stored API-key credentials to apply their provider-scoped env values, including Amazon Bedrock profiles (#6864 by
   @cristinaponcela).
 - Fixed inherited OpenAI-compatible cross-provider replay to keep tool call IDs unique when multiple calls share a provider call ID
   (#6854 by @cristinaponcela).
 - Fixed inherited Kimi K3 thinking levels to expose low, high, and max, and normalized the k2p7 alias to kimi-for-coding.
 - Fixed inherited OpenCode Go models routed through the OpenAI Responses API.
 - Fixed inherited pi-ai package metadata to avoid repeated consumer lockfile changes (#6812 by @jmfederico).
 - Fixed inherited terminal shutdown to clear the editor's inverted software cursor before restoring the hardware cursor (#6790 by
   @dam9000).
 - Fixed inherited ANSI-aware text wrapping to recognize CRLF and CR line endings while preserving styles (#6764 by @xz-dev).
 - Fixed inherited editor paste registry corruption after deleting and undoing paste markers, preventing literal or mismatched paste
   markers in submitted prompts (#6844).
 - Fixed sessionless OpenAI Codex WebSocket requests to use UUIDv7 request IDs (#6834 by @xl0).
 - Fixed inherited GPT-5.6 Codex models to default to the 272K context window, avoiding automatic long-context pricing (#6853 by
   @aadishv).
 - Fixed messages queued during compaction to preserve steering and follow-up delivery behavior (#6730 by @dannote).
 - Fixed read tool errors being syntax-highlighted as if they were file contents (#6731 by @dannote).
 - Fixed llama.cpp router download progress updates and removed redundant wording from model action confirmations.
 - Moved automatic model catalog network refresh out of startup initialization and into the running interactive and RPC modes.
 - Fixed persisted sessions being read and parsed twice when opened, reducing startup latency for large sessions (#6793).
 - Fixed prompt-template defaults for all arguments (${@:-default} and ${ARGUMENTS:-default}) (#6695).
 - Fixed obsolete custom UI, custom tool, and custom editor examples in the extension documentation (#6735).
 - Fixed Kimi Coding sessions to show API-equivalent implied costs with the subscription indicator.
 - Fixed OpenAI Responses early stream endings to trigger automatic retry instead of ending the agent run (#6727).

 [0.80.10] - 2026-07-16

 ### New Features

 - Kimi Coding thinking compatibility — Kimi Coding models now use adaptive thinking correctly; K3 exposes its supported max level
   and supports replaying empty-signature thinking blocks. See Kimi For Coding setup and Model Options.

 ### Fixed

 - Fixed inherited Kimi Coding requests to use Anthropic adaptive thinking effort without token budgets, and enabled empty thinking
   signatures for K3 and kimi-for-coding.
 - Fixed inherited Kimi K3 pricing metadata for Moonshot AI and Moonshot AI China.
 - Fixed inherited Kimi Coding K3 thinking-level metadata to expose only the supported max level (#6737).
 - Fixed inherited catalog generation restoring xAI models removed in 0.80.9 (#6736).

 [0.80.9] - 2026-07-16

 ### New Features

 - Kimi K3 and deferred tool loading — Use Kimi K3 across built-in providers, including progressive extension tool activation through
   Kimi’s native protocol. See Dynamic Tool Loading, OpenAI Compatibility, and the kimi-deferred-tools.ts example.

 ### Added

 - Added inherited Kimi K3 support for Kimi Coding, Moonshot AI, Moonshot AI China, OpenRouter, and Vercel AI Gateway.
 - Added Kimi deferred tool loading for extension-driven tool activation. See Dynamic Tool Loading, OpenAI Compatibility, and the
   kimi-deferred-tools.ts example.

 ### Changed

 - Changed xAI login to use a prefilled device-authorization link labeled “Sign in with SuperGrok or X Premium,” and changed the
   default xAI model to Grok 4.5 (#6734 by @Jaaneek).

 ### Fixed

 - Fixed inherited Kimi K3 output limits for Vercel AI Gateway and OpenRouter models.
 - Fixed cloning or forking a session before its first assistant response to explain that the session must be saved first.

 ### Removed

 - Removed Grok 3, Grok 3 Fast, Grok 4.20 variants, and Grok Code Fast 1 from the built-in xAI model catalog (#6734 by @Jaaneek).

 [0.80.8] - 2026-07-16

 ### New Features

 - Unified model runtime and provider authentication — ModelRuntime centralizes model configuration, provider-owned /login, and
   dynamic provider catalogs. See Providers.
 - Live model catalog refresh — /model refreshes configured providers in the background, and pi update --models forces an immediate
   refresh. See Install and Manage.
 - xAI device-code OAuth and Grok 4.5 Responses support — Sign in to xAI with a device code and use Grok 4.5 with low, medium, or
   high thinking. See xAI.

 ### Breaking Changes

 - Replaced the SDK's CreateAgentSessionOptions.authStorage and modelRegistry options with the async modelRuntime option. AuthStorage
   and its storage backends are no longer exported; use ModelRuntime (or a custom pi-ai CredentialStore), or readStoredCredential()
   for one-off reads of auth.json.
 - Removed redundant ModelRuntime.getAll(), find(), getSnapshot(), and getAuthOptions() projections. Use the pi-ai Models methods
   getModels(), getModel(), getProviders(), and checkAuth() directly.
 - Replaced SDK request-auth assembly through ModelRegistry.getApiKeyAndHeaders() with ModelRuntime.getAuth(). Passing a provider ID
   returns provider-scoped auth; passing a model also resolves built-in, models.json, and extension model headers.
 - Changed extension-facing ModelRegistry.refresh() from synchronous void to Promise<void> because models.json loading is
   asynchronous. Extensions must await it before making synchronous registry reads.
 - Moved canonical dynamic catalog refresh to async ModelRuntime.refresh()/pi-ai Models.refresh(). Legacy extension OAuth
   modifyModels remains supported as a synchronous compatibility projection after credential initialization.

 ### Added

 - Added ModelRuntime as the canonical async SDK and internal model/auth facade while preserving the synchronous extension-facing
   ModelRegistry API. ModelRuntime.create() accepts any pi-ai CredentialStore through its credentials option.
 - Added provider-owned /login discovery directly from registered pi-ai providers, including ambient auth status and informational
   links.
 - Added file-backed dynamic catalogs in models-store.json, per-provider pi.dev catalog overlays, and Radius gateway support
   including offline migration from legacy credential-cached catalogs.
 - Added extension provider refreshModels(context) support for dynamic model discovery with optional provider-controlled persistence.
 - Added pi update --models to force an immediate model catalog refresh without updating pi or extensions.
 - Added inherited xAI device-code OAuth login and Grok 4.5 OpenAI Responses support, with low, medium, and high thinking levels
   (#6651 by @Jaaneek).

 ### Changed

 - Changed ModelRuntime to compose built-in providers, immutable models.json configuration, and extension overlays through ad-hoc
   pi-ai provider methods.
 - Changed ModelRuntime to own final request assembly: getAuth(model) includes configured model headers, stream methods resolve auth
   once, and before_provider_headers runs as the Models-only header transform before provider dispatch.
 - Changed /model to render the current model snapshot immediately, refresh configured providers in the background, and update the
   open selector with partial results or timeout errors.

 ### Fixed

 - Fixed configured-provider catalog refresh to parse pi.dev's model-ID keyed responses, throttle checks to once per four hours, send
   the versioned pi user agent, treat unimplemented routes as unavailable overlays, and show concise refresh status in /model.
 - Fixed adjacent assistant thinking blocks to render as one thinking section.
 - Fixed inherited OpenAI Codex session IDs longer than 64 characters to meet the API limit (#6630).
 - Fixed inherited terminal output to normalize tab characters consistently (#6697 by @xz-dev).
 - Fixed the Windows terminal title after checking npm packages (#6629).
 - Fixed Bun standalone binaries to bundle OAuth adapters for interactive logins.

 [0.80.7] - 2026-07-14

 ### Breaking Changes

 - Removed the openai-responses compat.sendSessionIdHeader flag from models.json. Session-affinity behavior is now controlled by
   compat.sessionAffinityFormat ("openai", "openai-nosession", or "openrouter"). Replace sendSessionIdHeader: false with
   sessionAffinityFormat: "openai-nosession" (#6496 by @petrroll).

 ### New Features

 - Cache-friendly dynamic tool loading - Extensions can add tools during execution while supported Anthropic and OpenAI Responses
   models preserve prompt-cache prefixes. See Dynamic Tool Loading.
 - Message copy shortcut - Ctrl+X copies the last assistant message in the transcript or the selected message in /tree, making older
   and branched messages directly copyable. See Display and Message Queue.
 - Fable 5 xhigh and max thinking - Native xhigh and max thinking levels are available across generated provider catalogs. See Model
   Options.

 ### Added

 - Added cache-friendly dynamic tool loading for extension tools activated by tool results. Supported Anthropic and OpenAI Responses
   models load definitions where they become available, preserving the cached prompt prefix. See Dynamic Tool Loading (#6474).
 - Added inherited native xhigh and max thinking levels for Claude Fable 5 across all generated provider catalogs (#6490 by
   @davidbrai).
 - Added Ctrl+X to copy the last assistant message, or the selected message in /tree.
 - Added inherited toolChoice support for OpenAI and Codex Responses, including required and named tool selection (#6588 by @xl0).

 ### Fixed

 - Fixed inherited OpenRouter model context windows to use the top provider's actual context length (#6481 by @davidbrai).
 - Fixed inherited OpenRouter OpenAI-compatible session IDs to use the x-session-id header instead of OpenAI-specific
   session-affinity fields (#6496 by @petrroll).
 - Fixed Ctrl+V to paste clipboard text when the pasteboard does not contain an image.
 - Fixed /login amazon-bedrock to prompt for and save a Bedrock API key instead of only displaying ambient AWS credential setup
   instructions.
 - Fixed inherited Amazon Bedrock ambient AWS credentials to keep using SigV4 authentication, including for custom model IDs (#6532
   by @ribelo).
 - Fixed inherited Cloudflare Workers AI and AI Gateway authentication to use ambient account and gateway IDs when stored credentials
   contain only an API key (#6292 by @markphelps).
 - Fixed inherited legacy terminal decoding for Alt+symbol key combinations such as Alt+, and Alt+. (#6523 by @ribelo).
 - Fixed the GitHub Copilot mai-code-1-flash-picker model to route through the /responses endpoint (#6544 by @petrroll).
 - Fixed branch summaries to work with providers that use ambient authentication instead of API keys (#6595 by @davidbrai).
 - Fixed inherited Amazon Bedrock errors to report unhandled provider stop reasons instead of only An unknown error occurred (#6598
   by @davidbrai).
 - Fixed npm package removal when installed packages have conflicting peer dependencies (#6604 by @davidbrai).
 - Fixed inherited Azure OpenAI Responses reasoning replay when encrypted_content appears only in the terminal response event (#6608
   by @davidbrai).
 - Fixed inherited Anthropic-compatible proxies that omit usage from message_delta events (#6611 by @davidbrai).
 - Fixed inherited OpenCode OpenAI Responses models to omit the unsupported session-id header while preserving other cache-affinity
   data (#6645 by @davidbrai).
 - Fixed system prompt cache invalidation across dates by removing the current date from the default prompt (#6621).

 [0.80.6] - 2026-07-09

 ### New Features

 - max thinking level - New opt-in thinking level above xhigh, natively supported on GPT-5.6 and adaptive Claude models, available
   across CLI (--thinking max), SDK, RPC, and model selection. Custom themes can define thinkingMax. See CLI Reference.
 - Input-based pricing tiers - Request-wide input-token pricing tiers for accurate long-context cost accounting (e.g. GPT-5.4/5.5/5.6
   long-context rates), also configurable for custom models in models.json and modelOverrides. See Model Configuration.

 ### Added

 - Added the opt-in max thinking level across CLI, SDK, RPC, model selection, and themes. Custom themes can define thinkingMax;
   existing themes fall back to thinkingXhigh.
 - Added request-wide input-token pricing tiers to custom model costs in models.json, modelOverrides, and extension-registered
   providers.
 - Added ~ (home directory) expansion for the shellPath setting (#6470 by @aaronkyriesenbach).

 ### Fixed

 - Fixed inherited post-compaction output-token budgeting to ignore stale assistant usage from before the compaction boundary
   (#6464).
 - Fixed inherited GPT-5.4 and GPT-5.5 long-context cost accounting while retaining the intentional 272K default context limit for
   models that require an explicit override.
 - Fixed inherited GPT-5.6 metadata to keep direct OpenAI requests in the 272K short-context tier while exposing the Codex backend's
   372K context window with long-context pricing, and removed the nonexistent bare gpt-5.6 alias.
 - Fixed inherited Anthropic message conversion to preserve thinking blocks with empty thinking text but a valid signature instead of
   dropping them, avoiding thinking-block errors on newer Claude models (#6457 by @davidbrai).

 [0.80.5] - 2026-07-09

 [0.80.4] - 2026-07-09

 ### New Features

 - Prompt cache miss visibility - Significant cache misses can be shown in transcripts via showCacheMissNotices. See Model &
   Thinking.
 - Project-local resource configuration - pi config -l and Tab switching manage global vs project-local package resources. See Enable
   and Disable Resources.
 - Extension lifecycle and provider hooks - Extensions get agent_settled, before_provider_headers, entry renderers, and
   InlineExtension. See agent_start / agent_end / agent_settled, before_provider_headers, and InlineExtension.
 - New inherited model and transport support - GPT-5.6 metadata, Copilot Claude Sonnet 5, and zstd Codex SSE transport are available
   through inherited provider support. See Providers and Model Options.

 ### Added

 - Added inherited OpenAI GPT-5.6 model metadata for gpt-5.6, gpt-5.6-sol, gpt-5.6-terra, and gpt-5.6-luna, plus verified
   openai-codex support for gpt-5.6-sol, gpt-5.6-terra, and gpt-5.6-luna.
 - Added inherited Claude Sonnet 5 to the GitHub Copilot model catalog (#6200).
 - Added inherited zstd request-body compression for the OpenAI Codex Responses SSE transport.
 - Added /login <provider> support with provider autocomplete.
 - Added public SDK exports for CLI-equivalent model and scoped-model resolution (#6201).
 - Added extension and RPC agent_settled events plus session-level idle waiting for fully settled agent runs (#6363).
 - Added before_provider_headers extension hook support for injecting provider request headers (#6350 by @pmateusz).
 - Added an InlineExtension type for named inline extension factories (#6267 by @any-victor).
 - Added extension entry renderers for persisted display-only session entries that are rendered in interactive mode without being
   sent to the model context.
 - Added project-local resource override management to pi config, including project mode startup with pi config -l and Tab switching
   between global and project scopes (#6309).
 - Added inherited InMemorySessionStorage and JsonlSessionStorage exports from the agent harness (#6435).
 - Added inherited custom metadata support in JSONL session headers (#6417 by @ArcadiaLin).
 - Added a showCacheMissNotices setting and /settings toggle for significant prompt-cache miss transcript notices.

 ### Fixed

 - Fixed inherited retry classification for gRPC ResourceExhausted provider errors such as NVIDIA NIM transient exhaustion responses
   (#6449 by @davidbrai).
 - Fixed inherited retry classification for Cloudflare 524 timeout responses (#6239).
 - Fixed inherited GitHub Copilot device-code login polling to wait before the first token poll and to honor server-provided
   slow_down intervals, avoiding incorrect failures or apparent hangs after browser authorization (#6187).
 - Fixed inherited OpenAI Codex WebSocket sessions to rotate cached connections before the backend's 60-minute limit, avoiding
   connection-limit failures on long sessions (#6268).
 - Fixed inherited DS4 server context overflow detection for Prompt has ... tokens, but the configured context size is ... tokens
   errors (#6262).
 - Fixed inherited Fireworks GLM 5.2 Fast to use the OpenAI-compatible endpoint and thinkingLevelMap, aligning it with GLM 5.2
   (#6195).
 - Fixed the fork menu to ignore duplicate selection of the same entry (#6430 by @davidbrai).
 - Fixed native clipboard support in Bun standalone releases (#6418 by @davidbrai).
 - Fixed inherited GitHub Copilot extended context window models to use contextWindow: 1000000, preventing premature compaction and
   under-budgeting (#6439).
 - Fixed inherited editor paste marker accounting when paste markers are deleted or terminal state is cleared (#6397 by
   @affanali2k3).
 - Fixed null message content from imported transcripts or custom clients to normalize at ingestion boundaries instead of failing
   during context construction (#6343).
 - Fixed inherited tool calls from length-truncated assistant messages to fail instead of waiting for missing tool results (#6285).
 - Fixed inherited OpenAI Completions and Responses providers to send (no tool output) instead of (see attached image) when a tool
   result has empty text and no image content.
 - Fixed inherited OpenAI Responses and Azure OpenAI Responses requests to avoid sending max_output_tokens values below the provider
   minimum (#6265).
 - Fixed inherited Amazon Bedrock prompt-cache points for Claude Fable 5 and Claude Sonnet 5 (#6235).
 - Fixed inherited Amazon Bedrock Claude 5 prompt-cache pricing metadata by removing stale fallback overrides.
 - Fixed inherited OpenAI Codex user-agent construction to synchronously load Node OS metadata, avoiding a startup race that could
   report pi (browser) in Node/Bun.
 - Fixed pi update for pnpm installations to suggest pruning pnpm's self-update cache when the executable points at a removed cached
   version (#6279 by @rajp152k).
 - Fixed Xiaomi Token Plan model metadata to follow the upstream models.dev token-plan catalogs, removing unsupported mimo-v2-omni
   variants (#6204).
 - Fixed startup model selection to skip unauthenticated saved defaults so configured local custom models can be selected instead
   (#6231).
 - Fixed the question extension example to run question tool calls sequentially so multiple questions in one assistant turn remain
   answerable (#6189).
 - Fixed /login to report auth storage persistence failures instead of claiming credentials were saved when auth.json is locked
   (#6223).
 - Fixed split-turn compaction to serialize summary requests so single-concurrency local providers do not fail with 429 errors
   (#5536).
 - Fixed compaction retained-token budgeting to count context-visible custom messages (#6326).
 - Fixed custom session entries appended during assistant streaming to render before the live assistant message, matching persisted
   session order.
 - Fixed non-positive or oversized bash tool timeouts to fail with a clear validation error instead of being clamped to an immediate
   timeout (#6181).
 - Fixed the edit tool schema to allow model-invented extra replacement fields instead of rejecting otherwise valid edits (#6278).
 - Fixed new session resets to clear cached label timestamps (#6354).
 - Fixed auto-retry for Bun fetch socket-drop errors reported as socket connection was closed, so transient provider disconnects do
   not end headless runs without retrying (#6431).
 - Fixed models.json modelOverrides to apply to extension-registered provider models (#6367).
 - Fixed project context file discovery to use stable parent traversal on Windows so startup no longer hangs while loading AGENTS.md
   or CLAUDE.md (#6369).
 - Fixed --session-id startup to warn when no existing project session has that id and pi creates a new session (#6407).
 - Fixed /reload help text and docs to consistently mention themes and context files (#6395).

 ### Removed

 - Removed default attribution headers from Vercel AI Gateway requests.

 [0.80.3] - 2026-06-30

 ### New Features

 - Anthropic Claude Sonnet 5 support - Claude Sonnet 5 is available through inherited Anthropic-compatible and Bedrock provider
   catalogs with adaptive thinking enabled. See Providers and Model Options.
 - Configurable output spacing - outputPad controls horizontal padding for user messages, assistant messages, and thinking blocks.
   See Settings.
 - External editor configuration - externalEditor lets Ctrl+G use a configured editor before $VISUAL/$EDITOR fallbacks. See Settings
   and Keybindings.
 - Richer RPC session tree access - RPC clients can inspect session entries and tree snapshots with get_entries and get_tree. See
   get_entries and get_tree.
 - Extension session metadata updates - Extensions can observe session name changes through session_info_changed. See
   session_info_changed.
 - Modern Azure Foundry endpoint support - Azure OpenAI Responses provider setup supports current Microsoft Foundry endpoint URLs.
   See Azure OpenAI.

 ### Added

 - Added inherited Anthropic Claude Sonnet 5 model support.
 - Added get_entries and get_tree RPC commands for reading session entries and tree snapshots over RPC (#6078 by @geraschenko).
 - Added a package ./rpc-entry export for launching Pi directly in RPC mode.
 - Added session-name change events for extensions (#6175 by @xl0).
 - Added inherited Azure OpenAI Responses support for modern Microsoft Foundry endpoint URLs (#6004 by @gukoff).
 - Added inherited Usage.reasoning token counts for providers that report reasoning/thinking token usage (#6057).
 - Added an externalEditor settings.json override for Ctrl+G external editor commands, with default fallbacks to Notepad on Windows
   and nano elsewhere (#6122).
 - Added an outputPad setting for user message, assistant message, and thinking horizontal padding (#6168).

 ### Changed

 - Changed the default OpenAI model to gpt-5.5.
 - Changed inherited OpenAI Codex Responses SSE response-header waits to use the configured HTTP timeout instead of the previous
   fixed 20 second timeout, reducing false timeouts on slow connections (#4945).

 ### Fixed

 - Fixed inherited Claude Sonnet 5 metadata to use adaptive thinking payloads for Anthropic-compatible and Bedrock requests.
 - Fixed inherited generated Xiaomi MiMo model pricing to match current pay-as-you-go pricing from models.dev (#6138).
 - Fixed inherited provider HTTP errors to include response bodies instead of opaque SDK messages (#5832 by @stephanmck).
 - Fixed inherited streamSimple() max-token caps so providers that count input and output against one context window do not reject
   long requests (#5595).
 - Fixed inherited OpenAI Responses streams to preserve reasoning replay state when output items finish out of order (#6009).
 - Fixed inherited Z.AI preserved thinking requests to send thinking.clear_thinking: false when thinking is enabled, allowing
   replayed reasoning_content to participate in provider caching (#6083).
 - Fixed pre-prompt compaction to stop after compaction instead of continuing immediately (#6074 by @yzhg1983).
 - Fixed resource notifications to stay before messages when resuming sessions (#6048 by @haoqixu).
 - Fixed startup benchmark timing output to print after TUI shutdown, preserve extension timings, and drain terminal-query replies
   before stopping benchmark mode (#6030 by @xl0, #6063 by @xl0).
 - Fixed extension tool changes to apply before the next provider request in the same agent run without dropping before_agent_start
   system-prompt overrides (#6162).
 - Fixed a crash when undici emits an internal client error while terminating a mid-stream HTTP response (#6133).
 - Fixed the compaction event regression test to cover status indicator cleanup and keep CI passing.
 - Fixed interactive status indicators so ending work, retry, compaction, or branch-summary indicators no longer shrink the TUI when
   clear-on-shrink is enabled (#6026).
 - Fixed --session and SessionManager.open() to reject non-empty invalid session files without overwriting them (#6002).
 - Fixed user-message transcript rendering to keep visible backslashes in Markdown escape sequences such as \" (#6105).
 - Fixed assistant messages stopped by output length to show a visible incomplete-response error (#4290).
 - Fixed --no-session --session-id so ephemeral CLI runs can use deterministic session IDs for provider cache affinity (#6070).
 - Fixed disk BMP image files to be detected, converted to PNG, and attached through read and CLI @file inputs (#6047).
 - Fixed auto-retry for provider stream errors that explicitly tell callers to retry the request (#6019).

 [0.80.2] - 2026-06-23

 ### Changed

 - Changed inherited pi-ai ApiKeyCredential to use the auth.json-compatible discriminator type: "api_key" and provider-scoped env
   values instead of type: "api-key" and metadata.
 - Renamed the inherited agent-core public harness shell execution options type from ExecutionEnvExecOptions to ShellExecOptions.

 ### Fixed

 - Fixed inherited Anthropic-compatible custom models to use explicit compatibility metadata instead of provider-name heuristics for
   session-affinity headers and unsupported tool-field omissions.
 - Fixed inherited request-scoped apiKey and env values to participate in provider auth resolution, so providers such as Cloudflare
   can derive request-specific base URLs from explicit call options (#6021).
 - Restored inherited temporary legacy per-API stream aliases such as streamSimpleOpenAICompletions on the pi-ai compat entrypoint
   (#6016, #6017).
 - Restored inherited runtime detectCompat fallback in openai-completions for models without explicit compat metadata (#6020).

 [0.80.1] - 2026-06-23

 ### Fixed

 - Fixed inherited Amazon Bedrock scoped AWS_PROFILE endpoint resolution for built-in inference profile endpoints.
 - Fixed inherited Fireworks Anthropic-compatible requests to apply session-affinity and unsupported tool-field defaults for custom
   Fireworks models.
 - Fixed inherited Together MiniMax M2.7 metadata to avoid unsupported Together reasoning toggles.

 [0.80.0] - 2026-06-23

 ### Changed

 - Added Ctrl+J as a default newline keybinding alongside Shift+Enter.
 - Renamed the displayed zai provider label to ZAI Coding Plan (Global) for clarity (#5965).
 - pi-ai's old global API (stream/complete/completeSimple, getModel/getModels/getProviders, registerApiProvider, getEnvApiKey, ...)
   moved off the @earendil-works/pi-ai root entrypoint to @earendil-works/pi-ai/compat. Extensions are not affected at runtime: the
   extension loader resolves the pi-ai root to the compat entrypoint (a strict superset), so existing extensions keep working
   unchanged. Extension sources that typecheck against pi-ai's published types should switch those imports to
   @earendil-works/pi-ai/compat (or migrate to the new createModels()/provider-factory API). The compat entrypoint and the loader
   alias will be removed in a future release with a migration guide.

 ### Fixed

 - Fixed session names to normalize newline characters before storing or displaying labels (#5999 by @haoqixu).
 - Fixed the session selector to order threaded session trees by the latest activity anywhere in each subtree (#5784 by @Perlence).
 - Fixed extension-related crash and startup-failure reporting to suggest restarting with pi -ne.
 - Fixed inherited OpenAI Responses streams to fail before missing terminal events and fixed context usage and compaction estimates
   to ignore malformed all-zero assistant usage after truncated responses (#5526 by @dmmulroy).
 - Fixed inherited OpenAI Codex Responses WebSocket sessions to reconnect once when OpenAI's connection limit is reached before
   output starts (#5973).
 - Fixed inherited Amazon Bedrock endpoint resolution to honor scoped AWS_PROFILE values.
 - Fixed inherited Cloudflare providers to require account/gateway configuration and route built-in compat calls through provider
   auth.
 - Fixed provider-scoped auth environment values to reach inherited Models/ImagesModels API calls and compat API-key injection.
 - Fixed inherited OpenCode Go GLM-5.2 metadata to expose xhigh reasoning and send the provider's max reasoning effort (#5967).
 - Fixed pi --resume to load user package themes and resolve automatic light/dark theme settings.
 - Fixed models.json custom providers so stored credentials can satisfy auth without a redundant provider-level apiKey (#5953).

 ### Removed

 - Removed inherited selective-provider @earendil-works/pi-ai/base and @earendil-works/pi-agent-core/base entrypoints; use the root
   packages with explicit Models provider factories instead.

 [0.79.10] - 2026-06-22

 ### New Features

 - Extension compaction event context - Extension session_before_compact and session_compact events now include reason and willRetry,
   so extensions can distinguish manual /compact, threshold auto-compaction, and overflow retry flows. See session_before_compact /
   session_compact and Custom Summarization via Extensions.
 - Safer update flow - pi update installs the exact checked Pi version, and update notices show the changelog URL, making upgrades
   more predictable. See Install and Manage.

 ### Added

 - Added reason and willRetry metadata to extension session_before_compact and session_compact events so extensions can distinguish
   manual, threshold, and overflow compaction flows (#5962 by @PizzaMarinara).

 ### Fixed

 - Fixed the find tool to respect nested git repository boundaries when parent .gitignore rules ignore the nested repo (#5960).
 - Fixed the usage docs slash command table to include /trust and /import (#5959).
 - Fixed inherited OpenAI-compatible streaming to preserve encrypted reasoning_details that arrive before matching tool call deltas
   (#5114).
 - Fixed broken TUI documentation links to the plan-mode extension example (#5957).
 - Fixed transient extension UI and session-start messages emitted during session replacement or reload so they remain visible, and
   kept reload input blocked until reload completes (#5943).
 - Fixed the plan-mode example to preserve active custom tools, skip the action prompt when no plan is found, and queue
   refinement/execution follow-ups correctly from agent_end (#5940).
 - Fixed pi update to install the exact version returned by the Pi update check, make --force reinstall that checked version, fail
   instead of falling back to an unversioned reinstall when no version is available, and report both the old and updated versions.
 - Fixed update notifications to display the actual changelog URL as the hyperlink text.

 [0.79.9] - 2026-06-20

 ### New Features

 - Chat-template thinking compatibility - OpenAI-compatible custom providers can map Pi thinking levels into chat_template_kwargs,
   enabling vLLM/Hugging Face chat-template models such as DeepSeek to use provider-native thinking controls. See Custom Provider API
   Types and OpenAI Compatibility.
 - GLM-5.2 provider improvements - GLM-5.2 now has corrected Fireworks OpenAI-compatible routing and OpenRouter xhigh thinking
   support, improving /model behavior and high-effort reasoning for GLM-5.2 users. See Model Options.

 ### Added

 - Added inherited configurable chat-template thinking support for OpenAI-compatible providers that use chat_template_kwargs, such as
   DeepSeek models behind vLLM (#5673).

 ### Fixed

 - Fixed inherited Fireworks GLM-5.2 metadata to use the OpenAI-compatible Chat Completions endpoint with reasoning_effort support
   (#5923).
 - Fixed same-directory session switches to reuse imported extension modules while preserving fresh extension instances and lifecycle
   events (#5905).
 - Fixed deep session branches taking quadratic time to build context or branch paths (#5909).
 - Fixed inherited OpenRouter GLM-5.2 metadata to expose xhigh reasoning and send OpenRouter's native xhigh effort (#5770).
 - Fixed inherited Markdown streaming code fence rendering so partial closing fences no longer make code blocks shrink or flicker
   while content streams (#5846 by @xl0).
 - Fixed fuzzy edit matches to preserve untouched line blocks instead of rewriting the whole file through normalized content (#5899).
 - Fixed bash commands through legacy WSL bash.exe to pass scripts over stdin so shell variables expand in the target bash (#5893).
 - Fixed /model to hide GitHub Copilot models that are unavailable to the authenticated account (#5897).
 - Fixed /model selector search to rank exact provider-prefixed matches before proxy-provider model ID matches (#5892).

 [0.79.8] - 2026-06-19

 ### New Features

 - Selective provider base entry points - SDK users can pair @earendil-works/pi-ai/base and @earendil-works/pi-agent-core/base with
   explicit provider registration to keep bundled applications from including unused provider transports. See pi-ai Base Entry Point
   and pi-agent-core Base Entry Point.
 - Mistral prompt caching - Mistral sessions now use provider-side prompt caching with session affinity and cached-token usage/cost
   accounting. See API Keys and Environment Variables.
 - Post-compaction token estimates - Compact results and compaction events now include estimated post-compaction token counts so
   clients can show the approximate context reduction. See RPC compact and compaction events.
 - OpenRouter Fusion alias - openrouter/fusion is available as a built-in OpenRouter model alias. See API Keys.

 ### Added

 - Added inherited @earendil-works/pi-ai/base and @earendil-works/pi-agent-core/base entry points for selective provider registration
   in bundled applications (#5348 by @FredKSchott).
 - Added inherited Mistral prompt caching using the pi session ID as prompt_cache_key, including cached-token usage and cost
   accounting (#5854).
 - Added estimated post-compaction token counts to compact results and compaction events (#5877).
 - Added the inherited OpenRouter Fusion alias as openrouter/fusion (#5866 by @dannote).

 ### Fixed

 - Updated vulnerable runtime dependencies, including undici and the packaged protobufjs transitive dependency.
 - Fixed compaction to refuse sessions with no eligible messages instead of producing empty summaries (#4811).
 - Fixed successful overflow-triggered auto-compaction to avoid retrying completed assistant responses (#5720).

 [0.79.7] - 2026-06-18

 ### New Features

 - Automatic theme mode - /settings can choose separate light and dark themes and follow terminal color-scheme changes. See Selecting
   a Theme.
 - Self-only updates by default - pi update now updates pi only, with pi update --all for updating pi and packages together. See
   Install and Manage.
 - Extension API helpers - extensions can use CONFIG_DIR_NAME for project config paths and import edit diff helpers for edit-style
   diffs. See ctx.cwd and SDK Exports.
 - Warp inline images - Warp terminals now get inline image rendering through Kitty graphics detection. See Image.

 ### Added

 - Added automatic theme mode so /settings can use separate light and dark themes and follow terminal color-scheme changes (#5874).
 - Added inherited Warp terminal image capability detection so inline images render through Warp's Kitty graphics support (#5841 by
   @dodiego).
 - Exported CONFIG_DIR_NAME from the coding-agent public API so extensions can resolve project config paths without hardcoding .pi
   (#5869 by @xl0).
 - Exported edit diff helpers (generateDiffString, generateUnifiedPatch, and EditDiffResult) from the public API for extensions that
   need edit-style diffs (#5756 by @xl0).

 ### Changed

 - Changed bare pi update to update only pi, added pi update --all for updating pi and extensions together, and clarified extension
   update prompts.
 - Reserved / in theme names for automatic light/dark theme settings.
 - Updated extension docs, examples, runtime help, trust prompts, and config labels to use the configured project config directory
   instead of hardcoded .pi paths.

 ### Fixed

 - Fixed RPC unknown-command errors to include the request id so clients do not hang waiting for a response (#5868).
 - Fixed /model autocomplete and model selection searches to match provider/model queries regardless of whether the provider or model
   token is typed first.
 - Fixed the tree navigator to horizontally pan deep entries so the selected item remains readable (#5830).

 [0.79.6] - 2026-06-16

 ### Fixed

 - Fixed HTTP dispatcher configuration to preserve a caller's deliberate fetch override instead of reinstalling the undici global
   fetch over it.
 - Fixed inherited OpenCode Go DeepSeek V4 thinking-off requests to send the provider's thinking: { type: "disabled" } compatibility
   parameter.

 [0.79.5] - 2026-06-16

 ### New Features

 - Provider-scoped API key environments - auth.json API key entries can now include env overrides for provider-specific Cloudflare,
   Azure OpenAI, Google Vertex, Amazon Bedrock, cache retention, and proxy settings without changing the project shell. See Auth
   File.
 - Global HTTP proxy setting - Configure httpProxy once in global settings to apply HTTP_PROXY and HTTPS_PROXY to Pi-managed HTTP
   clients. See Network.
 - Vercel AI Gateway attribution - Vercel AI Gateway requests now include Pi attribution headers by default. See API Keys.

 ### Added

 - Added Vercel AI Gateway request attribution headers (http-referer and x-title) for Vercel AI Gateway models (#5798 by @rwachtler).
 - Added an xp footer marker when experimental features are enabled.
 - Added a global httpProxy setting that applies as HTTP_PROXY and HTTPS_PROXY for Pi-managed HTTP clients (#5790).
 - Added auth.json API key env values so provider-specific environment overrides can be scoped to Pi and propagated to inherited
   provider configuration (#5728).

 ### Changed

 - Updated the vendored Markdown parser used by HTML session exports to marked 18.0.5.

 ### Fixed

 - Fixed inherited OpenAI Responses streaming to tolerate null message content from OpenAI-compatible servers before tool calls
   (#5819).
 - Fixed inherited OpenCode DeepSeek V4 thinking requests to avoid sending both thinking and reasoning_effort (#5818).
 - Fixed device-code login to stop opening the browser automatically.
 - Fixed inherited editor Cursor Up handling so non-empty drafts jump to the start of the line before browsing input history (#5789
   by @4h9fbZ).
 - Fixed inherited Z.AI GLM-5.2 thinking requests to send reasoning_effort with the provider's high/max effort mapping (#5770).
 - Fixed successful pi update on Windows to exit naturally instead of calling process.exit(0), avoiding a Node.js/libuv assertion
   after version-check network requests (#5805).
 - Fixed inherited Google and google-vertex Gemini model metadata to map latest aliases to the current models, add Gemini 3.5 Flash
   for Vertex, correct Gemini 2.5 Flash Vertex cache pricing, and remove shut-down Vertex preview models (#5761).
 - Fixed the session selector to stay open and show the all-sessions empty state when both current-folder and all-scope session lists
   are empty (#5747).
 - Fixed inherited Moonshot AI China model metadata to include Kimi K2.7 Code, and omitted unsupported thinking-off payloads for Kimi
   K2.7 Code models (#5760).

 [0.79.4] - 2026-06-15

 ### New Features

 - Automatic first-run theme selection - pi detects the terminal background on first run and defaults to the dark or light theme. See
   Selecting a Theme.
 - Standalone binary integrity checksums - GitHub release assets now include SHA256SUMS files for verifying standalone binary
   downloads. See Quickstart Install.

 ### Added

 - Added SHA256SUMS integrity files to standalone binary GitHub release assets (#5739).
 - Added first-run interactive theme detection from the terminal background (#5385 by @vegarsti).

 ### Fixed

 - Fixed bash tool output collection to keep draining stdout/stderr after the child exits while descendants still write, avoiding
   truncated late output (#5753 by @Mearman).
 - Fixed /tree help rendering to show compact wrapped controls instead of truncating them on narrow terminals (#5055).
 - Fixed SIGTERM/SIGHUP interactive shutdown to keep signal handlers installed until terminal cleanup completes, preventing
   signal-exit from re-sending the signal and leaving the terminal in raw/Kitty keyboard mode (#5724).
 - Fixed extensions documentation to clarify that pi.getActiveTools() returns active tool names while pi.getAllTools() returns tool
   metadata (#5729).
 - Fixed question and questionnaire extension examples to wrap long prompt, option, and help text instead of truncating it (#5708 by
   @xl0).
 - Fixed package commands such as pi list, pi install, and pi update to terminate after completing even if an extension leaves
   background handles open (#5687).
 - Fixed pi update for pnpm global installs whose configured global-bin-dir no longer matches the active pnpm home (#5689).
 - Fixed npm package specs that use ranges or tags (for example @^1.2.7) so installed package resources still load instead of being
   treated as mismatched exact pins (#5695).
 - Fixed inherited Anthropic 1-hour prompt-cache write cost accounting to price 1-hour cache writes at 2x input instead of the
   5-minute cache-write rate (#5738 by @theBucky).
 - Fixed inherited GitHub Copilot Claude adaptive-thinking effort metadata to match manually checked Copilot model capabilities
   (#4637).
 - Fixed inherited OpenCode/OpenCode Go completion model metadata to omit long-retention cache fields for routes that reject
   prompt_cache_retention (#5702).
 - Fixed inherited overlay compositing over CJK wide characters so borders stay aligned when an overlay starts inside a full-width
   cell (#5297).
 - Fixed inherited WezTerm inline Kitty image rendering during full redraw fallbacks so image padding rows are reserved before the
   placement is drawn without regressing tall-image placement (#5618, #4415).
 - Fixed custom provider config so plain uppercase API key and header values remain literals instead of being treated as legacy
   environment references; use explicit $ENV_VAR syntax for environment variables (#5661).

 [0.79.3] - 2026-06-13

 ### Fixed

 - Fixed inherited OpenAI GPT-5.4/GPT-5.5 and OpenAI Codex GPT-5.4/GPT-5.4 mini/GPT-5.5 context window metadata to use the observed
   272k-token Codex backend limit, avoiding a billing hazard from prompts above Codex's accepted limit (reported by @trethore).

 [0.79.2] - 2026-06-12

 ### New Features

 - Clearer Bedrock validation guidance - Amazon Bedrock data retention validation errors now link to AWS data retention
   documentation. See Amazon Bedrock.

 ### Added

 - Added an experimental first-time setup flow behind PI_EXPERIMENTAL=1 that asks for a dark/light theme choice (preselecting the
   detected appearance) and opt-in analytics data sharing on first launch with the default agent directory; opting in stores a
   trackingId in settings.json (#5587 by @vegarsti).
 - Added AWS data retention documentation links to inherited Amazon Bedrock unsupported data retention mode validation errors (#5561
   by @unexge).

 ### Fixed

 - Fixed project trust detection to ignore global ~/.pi/agent state when running from $HOME, and made pi update use only saved or
   explicit project trust without prompting (#5619).
 - Fixed experimental first-time setup to skip forked sessions instead of rerunning the setup prompts (#5627 by @vegarsti).
 - Fixed inherited OpenAI-compatible context overflow detection for parenthesized maximum context length (N) errors (#5677).
 - Fixed inherited OpenAI GPT-5.4/GPT-5.5 and OpenAI Codex GPT-5.4/GPT-5.4 mini/GPT-5.5 context window metadata to match current
   OpenAI limits (#5644).
 - Fixed inherited Anthropic refusal stops to preserve provider stop_details explanations in error messages (#5666 by @rwachtler).
 - Increased the inherited OpenAI Codex Responses SSE response-header timeout to 20 seconds to reduce false-positive stalls while
   retaining the bounded wait introduced for zero-event hangs (#4945).
 - Fixed inherited Claude Fable 5 thinking-off requests to omit Anthropic's unsupported thinking.type: "disabled" payload (#5567 by
   @tmustier).
 - Fixed inherited late tool progress callbacks after tool settlement to be ignored instead of emitting stale tool_execution_update
   events (#5573).
 - Fixed inherited user-message transcript rendering so standalone + messages no longer render as - (#5657).
 - Fixed inherited slash-separated fuzzy queries so provider/model completions remain matchable after insertion.
 - Fixed inherited WezTerm inline Kitty image rendering so reserved row clears do not erase all but the top strip of tool image
   previews (#5618).
 - Fixed inherited editor wrapping for CJK text to break at character boundaries instead of leaving large trailing gaps (#5585 by
   @haoqixu).
 - Fixed inherited loose Markdown list rendering to preserve blank-line separation between list items (#5562 by @Perlence).
 - Fixed --model resolution for authenticated custom model IDs whose slash prefix matches an unauthenticated built-in provider
   (#5643).
 - Fixed /fork to keep session parent chains connected when the forked path contains labels (#5669).
 - Fixed /share and /export HTML exports to use the active fallback theme when the configured custom theme no longer exists (#5596).
 - Fixed custom fallback model IDs with :<thinking> suffixes to preserve the requested thinking level when the provider template
   model does not advertise reasoning (#5560 by @haoqixu).

 [0.79.1] - 2026-06-09

 ### New Features

 - Claude Fable 5 - Claude Fable 5 is now available on the Anthropic and Amazon Bedrock providers, with adaptive thinking and xhigh
   effort support.
 - Prompt template defaults - Prompt templates can use default positional arguments such as ${1:-7} for optional values. See Prompt
   Template Arguments.
 - Configurable project trust defaults - defaultProjectTrust lets users choose whether unresolved project trust asks, always trusts,
   or never trusts by default, and extensions can inspect effective trust decisions. See Project Trust and ctx.isProjectTrusted().
 - Natural extension autocomplete triggers - Extension autocomplete providers can declare trigger characters such as # or $ so
   suggestions open without slash-command prefixes. See Autocomplete Providers.

 ### Added

 - Added default-value expansion for prompt template positional arguments, e.g. ${1:-7} (#5553 by @dannote).
 - Added areExperimentalFeaturesEnabled feature guard to allow users to opt in to early features (#5547 by @vegarsti).
 - Added ctx.isProjectTrusted() for extensions to observe the effective project trust decision, including temporary trust decisions
   (#5523).
 - Added a global defaultProjectTrust setting to choose whether unresolved project trust asks, always trusts, or never trusts by
   default.
 - Added extension autocomplete trigger character support for ctx.ui.addAutocompleteProvider() wrappers (#4703).
 - Added Claude Fable 5 model support inherited from @earendil-works/pi-ai for the Anthropic and Amazon Bedrock providers, with
   adaptive thinking and xhigh effort support.

 ### Fixed

 - Fixed inherited Amazon Bedrock inference profile ARN region resolution to prefer the ARN's embedded region over AWS_REGION (#5527
   by @AJM10565).
 - Fixed inherited IME hardware cursor positioning while slash-command autocomplete is visible (#5283 by @smoosex).
 - Fixed inherited z.ai thinking-off requests to send the provider's thinking: { type: "disabled" } compatibility parameter (#5330).
 - Fixed inherited OpenCode completions model metadata to send explicit maxTokens as max_tokens (#5331).
 - Fixed inherited Moonshot Kimi thinking-off requests to send the provider's thinking: { type: "disabled" } compatibility parameter
   (#5531).
 - Fixed inherited Azure OpenAI Responses requests to disable server-side response storage (#5530).
 - Fixed inherited Azure GPT-5.4 and GPT-5.5 context window metadata to 1,050,000 tokens, matching Azure Foundry deployments instead
   of OpenAI's 272k limit (#5559).
 - Fixed inherited OpenAI and Azure GPT-5 Pro maxTokens metadata to 128,000, correcting an upstream value that duplicated the input
   sub-limit as the output limit (#5559).
 - Fixed inherited prompt history navigation to restore the current draft when returning from history browsing (#5494).
 - Fixed inherited wrapping for mixed Latin and CJK text so unspaced CJK runs can break at grapheme boundaries without leaving large
   trailing gaps (#5495).
 - Fixed extension OAuth login prompts to keep previous submitted prompt rows stable instead of mirroring the active input value
   (#5433).
 - Fixed /reload to apply updated steeringMode and followUpMode settings to the current session (#5377).
 - Fixed invalid models.json syntax to skip startup config migrations and report the normal file-path-aware models error instead of a
   raw JSON parse stack trace (#5418).
 - Fixed GitHub release notes and interactive changelog links to resolve package-relative documentation URLs correctly (#5516).
 - Fixed CLI help and version output, including plain redirected --help/--version output and simplified list/config help text.
 - Fixed /new from ephemeral sessions to keep the new session ephemeral instead of persisting it by default (#5045).
 - Clarified custom model docs that name and modelOverrides.name do not replace model IDs in the footer or primary model lists
   (#4841).

 [0.79.0] - 2026-06-08

 ### New Features

 - Project trust for local inputs - Pi now asks before loading project-local settings, resources, instructions, and packages, with
   saved decisions and --approve / --no-approve controls for non-interactive modes. See Project Trust.
 - Extension-controlled trust decisions - Global and CLI extensions can handle project_trust, decide, remember, or defer project
   trust before project-local resources load. See project_trust.
 - Cache-hit visibility in the footer - The interactive footer now shows the latest prompt cache hit rate (CH). See Interactive Mode.
 - Richer SDK and RPC extension surfaces - Public exports now include RPC extension UI request/response types and package asset path
   helpers. See Extension UI Protocol and SDK Exports.

 ### Added

 - Added a project_trust extension event so global and CLI extensions can decide or defer project trust during startup and runtime
   cwd switches.
 - Added project trust gating for project-local settings, resources, instructions, and packages (#5332).
 - Added the latest prompt cache hit rate to the interactive footer.
 - Exported RPC extension UI request and response types from the public API (#5455).
 - Exported coding-agent package asset path helpers from the public API (#5415).

 ### Fixed

 - Fixed package exports by removing the stale ./hooks subpath that pointed at non-existent build output.
 - Fixed inherited TUI rendering to clear stale lines when content shrinks to zero.
 - Fixed inherited autocomplete suggestions to refresh after editor cursor movement (#5499 by @Roman-Galeev).
 - Fixed /reload to persist project trust when an implicitly trusted session creates a project .pi directory.
 - Fixed project trust input discovery to traverse parent directories portably.
 - Fixed inherited intermittent Shift+Enter handling by making Kitty keyboard protocol fallback response-driven instead of
   timeout-driven (#5188).
 - Fixed the compaction summarization system prompt to use neutral AI assistant wording for non-coding agents (#5401).
 - Fixed models.json schema support and inherited OpenAI Responses custom-provider handling for compat.supportsDeveloperRole: false
   (#5456).
 - Fixed inherited prompt history navigation to place the cursor at the start when browsing upward and at the end when browsing
   downward (#5454).
 - Fixed tmux setup documentation to require tmux 3.5 for extended-keys-format csi-u and document the tmux 3.2-3.4 fallback (#5432).
 - Fixed inherited OpenRouter routing preferences on OpenAI-compatible custom providers to work when the custom provider base URL
   does not point directly at OpenRouter (#5347).
 - Fixed built-in tool expand hints to style closing parentheses consistently (#5359).
 - Fixed skill-wrapped prompts to insert spacing between skill instructions and the user message (#5371 by @Perlence).

 [0.78.1] - 2026-06-04

 ### New Features

 - More built-in provider coverage - Added Ant Ling and NVIDIA NIM provider setup, plus MiniMax-M3 support for the direct MiniMax
   providers. See Providers.
 - Richer extension context - Extensions can use ctx.mode and ctx.getSystemPromptOptions() to adapt behavior across TUI, RPC, JSON,
   and print modes and inspect base system prompt inputs. See Extensions.

 ### Added

 - Added containerization documentation and a Gondolin extension example for routing built-in tools into a local micro-VM.
 - Added Ant Ling provider selection and setup documentation.
 - Added MiniMax-M3 model support inherited from @earendil-works/pi-ai for the minimax and minimax-cn direct providers (#5313).
 - Added NVIDIA NIM provider selection, setup documentation, and direct NIM request attribution headers.
 - Added ctx.mode to extension contexts so extensions can distinguish TUI, RPC, JSON, and print mode.
 - Added ctx.getSystemPromptOptions() for extension commands to inspect the current base system prompt inputs (#5306 by @xl0).

 ### Fixed

 - Fixed temporary extension package installs to use a private ~/.pi/agent/tmp/extensions directory with 0700 permissions instead of
   os.tmpdir()/pi-extensions.
 - Fixed git package source handling to reject unsafe host/path components and keep managed clone paths inside install roots.
 - Fixed stored XSS in HTML session exports by sanitizing Markdown link and image URLs with a scheme allow-list after stripping
   control characters.
 - Fixed SDK embedding in bundled Node apps failing with ENOENT when package.json is not present next to the bundle entrypoint. The
   package metadata reader now gracefully handles missing package.json by using defaults, enabling createAgentSession() without
   requiring package-adjacent files at runtime (#5226).
 - Fixed HTTP timeout setting not being respected for non-Codex providers (e.g., llama.cpp via OpenAI-compatible API). The
   httpIdleTimeoutMs setting (set via /settings HTTP timeout) now applies as the default SDK request timeout for all providers that
   support it, not just OpenAI Codex Responses. Disabling the timeout (HTTP timeout = false) now correctly disables SDK timeouts for
   all supported providers by sending a maximum int32 value (effectively infinite) instead of 0, since SDKs treat timeout=0 as an
   immediate timeout (#5294).
 - Fixed inherited Amazon Bedrock requests to replace blank required user/tool-result text with a placeholder and skip blank replay
   text blocks (#4975).
 - Fixed inherited Anthropic Claude Opus 4.7+ requests to suppress deprecated temperature parameters (#5251 by @yzhg1983).
 - Fixed inherited OpenAI GPT-5.5 generated metadata to omit unsupported minimal thinking (#5243).
 - Fixed inherited OpenRouter Kimi K2.6 thinking replay and developer-role instruction handling (#5309).
 - Fixed inherited OpenRouter reasoning instruction requests to preserve the system role when required (#5221 by @PriNova).
 - Fixed inherited overlay focus restoration so non-capturing overlays remain interactive after UI rerenders and explicit focus
   release (#5235 by @nicobailon).
 - Fixed inherited tab width accounting in column slicing and overlay compositing so tab-containing output cannot exceed the terminal
   width (#5218).
 - Fixed opening and listing very large JSONL session files by reading session entries line-by-line instead of materializing the full
   file as one string (#5231).
 - Fixed the footer branch display in WSL /mnt/... repositories to refresh after branch changes (#5264 by @psoukie).
 - Fixed renderShell: "self" tool renderers that emit no component lines leaving a blank chat row (#5299).
 - Restored inherited NVIDIA Qwen 3.5 122B NIM model support.

 [0.78.0] - 2026-05-29

 ### New Features

 - Named startup sessions - --name / -n sets the session display name before startup across interactive, print, JSON, and RPC modes.
   See Naming Sessions and Session Options.
 - Clickable file tool paths - built-in file tool titles render OSC 8 file:// hyperlinks when the terminal supports them, including
   supported tmux clients.

 ### Added

 - Exported convertToPng for extension authors (#5167 by @xl0).
 - Exported parseArgs and type Args for extension authors (#5202 by @xl0).
 - Added --name / -n to set the session display name at startup (#5153).
 - Added a resume command hint when exiting interactive sessions (#5176 by @yzhg1983).
 - Added OSC 8 file:// hyperlinks to file paths shown in built-in file tool titles (#5189 by @mpazik).
 - Added custom Amazon Bedrock request header support inherited from @earendil-works/pi-ai (#5178 by @stephanmck).

 ### Fixed

 - Clarified the WezTerm/WSL IME hardware cursor docs to state that cursor visibility remains opt-in (#5200).
 - Fixed the GitLab Duo custom provider example to use adaptive thinking for Claude models, expose xhigh thinking, and include newer
   verified model IDs (#5201).
 - Fixed Bun release archive creation to install and copy the matching @mariozechner/clipboard base package and native sidecars
   (#5184).
 - Fixed early interactive input typed before the prompt loop starts so it is buffered instead of dropped (#5195 by @yzhg1983).
 - Fixed OpenRouter Moonshot Kimi K2.6 requests to use system instead of unsupported developer messages (#5159).
 - Fixed OpenCode Go Kimi K2.6 thinking requests to send thinking objects instead of invalid string values, and fixed OpenCode Zen
   Grok Build thinking requests to omit unsupported reasoning_effort (#5169).
 - Fixed OpenAI Codex Responses SSE streams to abort response body reads after terminal events.
 - Fixed OpenCode Kimi K2.6 generated metadata to use Anthropic-style thinking metadata instead of invalid reasoning-effort
   parameters.
 - Fixed OSC 8 hyperlinks to pass through tmux when the client supports them (#5189 by @mpazik).
 - Fixed ANSI text wrapping to avoid stack overflows on very long wrapped lines (#5185).

 [0.77.0] - 2026-05-28

 ### New Features

 - Claude Opus 4.8 support - Adds Anthropic Claude Opus 4.8 metadata and updates Opus adaptive-thinking coverage.
 - Selective tool disablement - --exclude-tools / -xt disables specific built-in, extension, or custom tools while leaving the rest
   available. See Tool Options.
 - Headless Codex subscription login - /login can use device-code auth for ChatGPT Plus/Pro Codex subscriptions. See Subscriptions
   and OpenAI Codex.
 - Streaming-aware extension input - extensions can distinguish idle prompts, mid-stream steers, and queued follow-ups with
   InputEvent.streamingBehavior. See Input Events.

 ### Added

 - Added --exclude-tools / -xt to disable specific built-in, extension, or custom tools while leaving the rest available (#5109).
 - Added OpenAI Codex subscription device-code login as a selectable headless alternative while keeping browser login as the default
   (#4911 by @vegarsti).
 - Added streamingBehavior to extension input events so extensions can distinguish idle prompts from mid-stream steers and queued
   follow-ups (#5107 by @DanielThomas).
 - Added Claude Opus 4.8 model metadata for Anthropic and updated Opus adaptive-thinking coverage to use it.

 ### Fixed

 - Fixed startup timing output so readPipedStdin no longer includes createAgentSessionRuntime work (#4829).
 - Fixed OpenRouter DeepSeek V4 xhigh reasoning metadata to preserve OpenRouter's native effort instead of sending DeepSeek's max
   effort (#4801).
 - Fixed custom session directories so current-folder resume/continue lookups stay scoped to the active cwd while all-session
   listings cover the custom directory.
 - Fixed SIGTERM/SIGHUP exits to run extension session_shutdown cleanup and restore the terminal: signal-triggered shutdown now emits
   session_shutdown before any terminal writes, and SIGHUP no longer hard-exits, so extension resources (e.g. sockets) are released
   even when the terminal is gone (#5080).
 - Fixed keyboard protocol negotiation to ignore mismatched or delayed terminal responses, avoiding false Kitty keyboard protocol
   detection (#5091 by @mitsuhiko).
 - Fixed Windows startup crashes under MSYS2 ucrt64 Node.js by updating the native clipboard addon to napi-rs 3.x (#5028).
 - Fixed API key and header config resolution to treat plain strings as literals, support $ENV_VAR / ${ENV_VAR} interpolation and $!
   bang escaping, and require explicit env syntax for config files, avoiding Windows case-insensitive env matches corrupting literal
   keys (#5095).
 - Fixed session disposal to abort in-flight agent, compaction, branch summary, retry, and bash work (#5029 by @TerminallyChilI).
 - Fixed pi.getAllTools() to expose each tool's promptGuidelines for extensions that need per-tool guideline attribution (#4879).
 - Fixed OpenAI Codex Responses replay after switching from Anthropic extended-thinking sessions by generating unique fallback
   message item IDs for converted thinking/text blocks (#5148).
 - Fixed Anthropic-compatible replay for providers that return empty thinking signatures by adding an opt-in allowEmptySignature
   compatibility flag (#4464).
 - Fixed OpenAI and OpenRouter GPT-5.5 Pro thinking level metadata to expose only supported medium, high, and xhigh efforts.
 - Fixed OpenCode Go Kimi K2.6 thinking-off requests to send thinking: "none" (#5078).
 - Fixed Xiaomi Token Plan model metadata to omit unsupported mimo-v2-flash variants (#5075).
 - Fixed follow-up messages queued by agent_end extension handlers to drain before the agent becomes idle (#5115 by @DanielThomas).
 - Fixed extension input events to report streamingBehavior only for prompts actually queued during streaming (#5107 by
   @DanielThomas).
 - Fixed system prompt tool-selection guidance to avoid preferring unavailable file exploration tools (#5132).
 - Fixed fenced diff code blocks and other highlight.js scopes to keep theme-aware syntax colors after the cli-highlight replacement
   (#5092).

 [0.76.0] - 2026-05-27

 ### New Features

 - Explicit session IDs for automation - --session-id <id> lets scripts create or resume an exact project-local session. See
   Sessions.
 - RPC bash output can stay out of model context - RPC clients can pass excludeFromContext to bash for commands whose output should
   not be sent with the next prompt. See RPC mode.
 - More predictable provider retries and timeouts - Codex WebSocket/SSE waits are bounded, and retry.provider.maxRetries controls
   provider retries instead of hidden SDK defaults. See Retry settings.
 - Better terminal editing across environments - Apple Terminal Shift+Enter, Windows/JetBrains capability detection, and
   Unicode-aware word navigation improve interactive editing. See Terminal setup and Keybindings.

 ### Added

 - Added --session-id to let CLI callers use an exact project-local session ID, creating it if missing (#4874).
 - Added excludeFromContext flag to the bash RPC command for parity with the internal executeBash API (#5039).

 ### Fixed

 - Fixed user message transcript rendering to preserve user-authored ordered-list markers (#5013).
 - Fixed self-update commands to bypass npm, pnpm, and Bun minimum release age gates for explicit pi update runs (#4929).
 - Fixed context token estimates to count user image attachments consistently with tool result images (#4983).
 - Fixed httpIdleTimeoutMs to apply to OpenAI Codex Responses WebSocket idle waits, added websocketConnectTimeoutMs for bounded
   WebSocket connect waits, and added a 10s Codex SSE response-header timeout (#4945).
 - Fixed RpcClient to reject pending requests and consume stdin pipe errors when the child process exits unexpectedly (#4764).
 - Fixed managed npm extension updates to avoid package managers installing or resolving pi host packages as peer dependencies
   (#4907).
 - Fixed RPC mode raw stdout writes to retry transient backpressure errors and flush queued protocol output during shutdown (#4897).
 - Fixed OpenAI Codex Responses cache-affinity headers to send session-id instead of proxy-incompatible session_id (#4967).
 - Fixed openai-codex/gpt-5.3-codex-spark model metadata to use its 128k context window (#4969).
 - Fixed OpenRouter/Poolside context overflow detection for maximum allowed input length errors (#4943).
 - Fixed provider retry controls so retry.provider.maxRetries is honored, SDK retries default to 0, and quota/billing 429s are not
   retried behind Pi's retry handling (#4991 by @mitsuhiko).
 - Fixed Apple Terminal Shift+Enter by detecting local macOS modifier state when Terminal.app sends plain Return.
 - Fixed Windows Terminal capability detection to enable OSC 8 hyperlinks, preserving clickable long URLs across wrapped lines
   (#4923).
 - Fixed JetBrains terminal capability detection to enable truecolor while disabling unsupported OSC 8 hyperlinks (#5037 by
   @Perlence).
 - Fixed editor and input word navigation/deletion to use Unicode word boundaries while preserving ASCII punctuation boundaries
   (#5022 by @haoqixu, #5067 by @haoqixu, #5068 by @haoqixu).
 - Fixed the development docs AGENTS.md link to point at the pi-mono guidelines (#5041).

 [0.75.5] - 2026-05-23

 ### New Features

 - Cleaner read tool output - Collapsed read tool cards now show only the read line by default, while Ctrl+O still expands the full
   file content.
 - Faster file tools on Windows - Built-in file tools now use async filesystem operations during streaming, and image resizes run off
   the main TUI thread in a worker.
 - More reliable package updates - pi update and git package installs now reconcile pinned git refs and keep package settings intact.
   See Packages.
 - Custom Anthropic-compatible adaptive thinking - Custom provider model configs can opt into adaptive-thinking Claude behavior with
   compat.forceAdaptiveThinking. See Custom providers and Models.

 ### Added

 - Added compat.forceAdaptiveThinking support to custom Anthropic-compatible model configuration docs and validation (#4797 by
   @mbazso).
 - Added a standard unified patch to edit tool result details for SDK consumers (#4821).
 - Added a Codex subscription login method selector with device-code auth for headless environments.

 ### Changed

 - Changed collapsed read tool cards to show only the read line until expanded (#4916).
 - Replaced the inherited optional koffi dependency for Windows VT input with a tiny vendored native helper, reducing install size
   while preserving Shift+Tab handling (#4480).
 - Changed the root development install documentation to use npm install --ignore-scripts (#4868).

 ### Fixed

 - Fixed pi update to reconcile git-pinned packages to their configured ref (#4869).
 - Fixed package/resource path handling for Windows and glob/pattern resolution (#4873 by @mitsuhiko).
 - Fixed config pattern matching to resolve patterns from the correct base directory (#4898 by @haoqixu).
 - Fixed theme pickers to list themes by their content name instead of file stem (#4830 by @Perlence).
 - Fixed OpenCode Zen/Go requests to send per-session OpenCode routing headers (#4847).
 - Fixed Amazon Bedrock provider loading under strict package managers by inheriting the declared @smithy/node-http-handler
   dependency from @earendil-works/pi-ai (#4842).
 - Fixed inherited Amazon Bedrock Claude requests to send the model output token cap by default, avoiding Bedrock's 4096-token
   default truncation (#4848).
 - Fixed exported session HTML to escape quote characters in attribute values (#4832).
 - Fixed GitHub Copilot device-code login to keep opening the verification URL in browser-capable environments while ignoring browser
   launch failures for headless use (#4788 by @vegarsti).
 - Fixed git package installs to reconcile existing checkouts to the requested ref and update package settings without losing filters
   (#4870).
 - Published a 0.74.2 rescue release that tells Node 20 users to upgrade Node before updating to newer Pi versions (#4876).
 - Fixed final bash tool cards to avoid rendering duplicate full-output truncation paths (#4819).
 - Fixed bash tool truncation line counts to ignore the trailing newline as an extra output line (#4818).
 - Fixed footer home-directory abbreviation to avoid shortening sibling paths that only share the same prefix (#4878).
 - Fixed macOS Bun release binaries to resolve the native clipboard sidecar so Ctrl+V image paste can load @mariozechner/clipboard
   (#4307).
 - Fixed coding-agent tools to avoid synchronous filesystem operations during streaming and moved image resizing off the main TUI
   thread (#4756 by @mitsuhiko).

 [0.75.4] - 2026-05-20

 ### New Features

 - Hardened npm install and release path - Pi now ships the CLI with a generated shrinkwrap for transitive dependencies, blocks
   accidental lockfile changes, verifies dependency pinning and lifecycle-script allowlists in checks, disables lifecycle scripts for
   self-update and local release installs where supported, and smoke-tests isolated npm and Bun installs before release. See
   Supply-chain hardening.

 ### Added

 - Added interactive update notes after pi update runs, so users can see the installed version's changelog before continuing (#4724
   by @mitsuhiko).
 - Exported image resize utilities from the package root for SDK consumers (#4775 by @xl0).

 ### Changed

 - Changed source syntax to avoid TypeScript constructs that require JavaScript emit, keeping core sources compatible with Node.js
   strip-only TypeScript checks.
 - Removed web UI workspace references from the CLI package and dropped the package-level development watch script.
 - Published npm installs now include an npm-shrinkwrap.json to lock transitive dependencies for the CLI package.
 - Improved terminal theme detection for light/dark and truecolor handling.
 - Changed self-update package-manager commands to disable lifecycle scripts during reinstall.

 ### Fixed

 - Fixed the system prompt to tell models to resolve pi docs and examples under the absolute package paths before reading
   topic-specific relative references (#4752).
 - Fixed extension ctx.abort() during tool-call preflight to stop later confirmations and restore queued interactive input like
   Escape (#4276).
 - Fixed AgentSession retry, compaction, and event settlement to use the awaited agent lifecycle instead of a separate event queue,
   and added willRetry to agent_end session events.
 - Fixed forked session runtime state to keep the active session id aligned with the fork target (#4799 by @Perlence).
 - Fixed the subagent extension's parallel mode to return useful per-task output and failed-task diagnostics to the parent model
   instead of 100-character previews (#4710).
 - Fixed Windows local bash execution to hide helper console windows when launched from background SDK processes (#4699).
 - Fixed managed npm extension folders to set cloud-sync ignore metadata where supported (#4763).
 - Fixed HTTP idle timeout configuration so long-running provider streams can avoid premature idle disconnects (#4759 by @mitsuhiko).
 - Fixed default system prompt boundaries to use explicit XML tags for clearer file separation (#4709 by @herrnel).
 - Fixed HTML share/export sidebar clicks for shared tool entries to scroll to the rendered tool call (#4664 by @yzhg1983).
 - Fixed theme palettes to set explicit text colors and avoid terminal-default color drift.
 - Fixed truecolor detection to align terminal image rendering and interactive theme decisions.
 - Fixed loader indicator startup inherited from @earendil-works/pi-tui so initialization cannot run before frames are available.
 - Fixed OpenAI-compatible default output token requests inherited from @earendil-works/pi-ai to avoid reserving impossible context
   windows on servers such as vLLM (#4675).
 - Fixed OpenAI prompt cache keys inherited from @earendil-works/pi-ai to stay within the 64-character provider limit (#4720).
 - Fixed Windows npm-family package commands for fnm-managed Node.js installs that expose both extensionless Unix scripts and .cmd
   shims (#4793).

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Package Updates Available
 Package updates are available. Run pi update --extensions
 Packages:
 - github.com/badlogic/pi-skills
 - @juicesharp/rpiv-web-tools
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
``````

```
 ~ % pnpm rm -g cline
 WARN  6 deprecated subdependencies found: @xmldom/xmldom@0.7.13, glob@6.0.4, inflight@1.0.6, lodash.get@4.4.2, rimraf@2.4.5, stringify-package@1.0.1
Packages: -2
--
Progress: resolved 1416, reused 1262, downloaded 0, added 0, done

/home/fira/.local/bin/global/5:
- cline 3.0.0

Done in 6.6s using pnpm v10.30.2
 ~ % pnpm rm -g @openai/codex
 WARN  6 deprecated subdependencies found: @xmldom/xmldom@0.7.13, glob@6.0.4, inflight@1.0.6, lodash.get@4.4.2, rimraf@2.4.5, stringify-package@1.0.1
Packages: -2
--
Progress: resolved 1409, reused 1260, downloaded 0, added 0, done

/home/fira/.local/bin/global/5:
- @openai/codex 0.133.0

Done in 6.3s using pnpm v10.30.2
```

```
 ~ % b add -g cline
b add -g @openai/codex # clean

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [741]

installed cline@3.0.74 with binaries:
 - cline

213 packages installed [5.10s]

Blocked 1 postinstall. Run `bun pm -g untrusted` for details.
Saved lockfile
bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [5]

installed @openai/codex@0.167.0 with binaries:
 - codex

2 packages installed [5.03s]
Saved lockfile
```

```
 ~ % pnpm rm -g opencode-ai
 WARN  6 deprecated subdependencies found: @xmldom/xmldom@0.7.13, glob@6.0.4, inflight@1.0.6, lodash.get@4.4.2, rimraf@2.4.5, stringify-package@1.0.1
Packages: -3
---
Progress: resolved 1396, reused 1257, downloaded 0, added 0, done

/home/fira/.local/bin/global/5:
- opencode-ai 1.17.13

Done in 5.3s using pnpm v10.30.2
```

```
 ~ % b add -g --allow-build=opencode-ai opencode-ai # overriding the terminal background

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [32]

installed opencode-ai@1.19.5 with binaries:
 - opencode

5 packages installed [10.50s]
Saved lockfile
```



