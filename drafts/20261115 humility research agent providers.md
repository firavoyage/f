# how to export thread of pi agent on debian

To export a conversation thread in the **Pi coding agent** on Debian, run the built-in **`/export`** slash command inside an active session or use the **`pi --export`** flag from your terminal. Pi works identically on Debian and other Linux distributions, saving your thread as a self-contained HTML or JSONL file. [](https://www.vincentbruijn.nl/articles/session-export/)

### Method 1: Export From an Active Session

If you are already inside the Pi terminal interface, you can save or upload your current thread directly. [](https://pi.dev/docs/latest/usage)

* **Save locally as HTML or JSONL.** Type `/export` in the Pi prompt to write the current session to disk. This creates a single portable file containing your prompts, responses, and tool calls. [](https://pi.dev/docs/latest/sessions)
* **Upload and get a shareable link.** Type `/share` to upload the session and generate a private viewer link. By default, Pi uploads to a private GitHub gist or a Radius artifact depending on your authentication setup. [](https://pi.dev/docs/latest/sessions)

### Method 2: Export via the Debian Command Line

You can convert any previously saved session file to HTML directly from your bash or zsh shell without opening the interactive UI. [](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/cli.md)

1. **Locate your session file.** Pi automatically stores all past threads as `.jsonl` files under `~/.pi/agent/sessions/<encoded-cwd>/`. You can list your recent sessions on Debian with:  
bash  
```  
ls -lt ~/.pi/agent/sessions/*/*.jsonl  
```  

2. **Run the CLI export command.** Pass the `.jsonl` path to `pi --export`:  
bash  
```  
pi --export ~/.pi/agent/sessions/--path--/timestamp_uuid.jsonl output.html  
```  
  
If you omit `output.html`, Pi automatically derives the output filename in your current directory and exits. [](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/session-format.md)

### Method 3: Export as Clean Markdown (Optional Package)

If you prefer a clean Markdown transcript without bulky tool call logs, install the official [pi-md-export](https://pi.dev/packages/pi-md-export?page=33) extension: [](https://pi.dev/packages/pi-md-export?page=33)

* **Install the package.** Run `pi install npm:pi-md-export` in your terminal.
* **Export the current branch.** Type `/md` inside a session to export just your active `/tree` branch to Markdown.
* **Export the full thread.** Type `/md all` to export the entire session file, or `/md tc` if you want to include tool calls. [](https://pi.dev/packages/pi-md-export?page=33)

_Note: Always review exported files before sharing them publicly, as they can include local file contents, shell command outputs, and environment details._ [](https://pi.dev/docs/latest/sessions)

Are you trying to **share this thread** with someone else, or **back up** your Pi sessions and configuration to another machine? I can walk you through the quickest setup for your goal.

* [](https://pi.dev/packages/pi-md-export?page=33)  
Pi.dev  
pi-md-export · Packages  
September 9, 2026 — Install pi-md-export from npm and Pi will load the resources declared by the package manifest. Pi packages can execute code and in...
* [](https://github.com/adobe/pi-session-search)  
GitHub  
GitHub - adobe/pi-session-search: A pi-coding-agent extension that lets ...  
pi stores every session as a JSONL file under \~/. pi/agent/sessions//\_.
* [](https://pi.dev/docs/latest/usage)  
Pi.dev  
Use Pi in the terminal · Documentation  
Pi saves sessions automatically unless session persistence is disabled. /new starts a new session. /resume opens another saved ses...

Show all

# what does pi md export output look like

The `pi-md-export` extension for the Pi coding agent generates a **clean, conversation-focused Markdown transcript** of your session. By default, it captures only the user prompts and final assistant responses from your active `/tree` branch. [](https://pi.dev/packages/pi-md-export?page=33)

### Default Output Structure

When you run `/md` without extra flags, the extension strips away background noise like internal reasoning and file reads. It produces a readable document structured into clear conversational turns: [](https://pi.dev/packages/pi-md-export?page=33)

* **Turn-by-Turn Dialogue.** Each turn pairs your user message with the assistant's text response.
* **Filtered Scope.** Only the active branch in your session tree is included.
* **Delivery Destination.** You can copy the output directly to your clipboard or save it as a `.md` file under `~/.pi/agent/pi-sessions-extracted/`. [](https://pi.dev/packages/pi-md-export?page=33)

### Optional Details You Can Include

You can customize what appears in the Markdown file by passing flags to the `/md` command: [](https://pi.dev/packages/pi-md-export?page=33)

* **Thinking Blocks (`/md t`).** Adds the model's internal reasoning steps before its final answers.
* **Tool Calls (`/md tc`).** Includes both tool invocations and their returned results. You can filter specific tools using `-<toolname>` to exclude them or `+<toolname>` to whitelist only what you want.
* **Full Session History (`/md all`).** Exports the entire session file rather than just the current branch.
* **Turn Limits (`/md <N>`).** Restricts the output to only the last `N` user-assistant turns. [](https://pi.dev/packages/pi-md-export?page=33)

### Example Layout

With default settings (`/md`), the exported Markdown follows a simple, readable format:

markdown

```
## User
How do I export my current session to Markdown?

## Assistant
You can install the `pi-md-export` package and run `/md` in your session. By default, it exports a clean transcript of your current branch without tool calls or thinking blocks.

```



If you run `/md tc t`, the output expands to show collapsible or sectioned blocks for the agent's thinking process and the exact bash commands or file edits executed during each turn. _(Note: Pi's built-in `/export` command outputs a styled HTML file rather than raw Markdown, which is why the [pi-md-export](https://pi.dev/packages/pi-md-export?page=33) package is used for plain Markdown transcripts.)_ [](https://github.com/earendil-works/pi/issues/5136)

Would you like to see the exact **command combinations** for filtering specific tools, or are you looking for a different Pi export extension like **pi-session-exporter**?

* [](https://pi.dev/packages/pi-md-export?page=33)  
Pi.dev  
pi-md-export · Packages · Pi  
September 9, 2026 — Export your current Pi session to a readable Markdown transcript. The command can export either the current /tree branch it can li...
* [](https://github.com/earendil-works/pi/issues/5136)  
GitHub  
export help and error messages claim .md support but it's not ...  
May 28, 2026 — pi's behavior differs from hand on .md export. Silently exports HTML content into a .md file without any warning: The correct fix ...


