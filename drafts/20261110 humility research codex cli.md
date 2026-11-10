<!-- things have changed a lot -->

<!-- modernized for ux -->

# codex this chat uses openai but codex now uses so read only

**OpenAI Codex is not read-only by default, but it will automatically switch to a "Read-only Planning Mode" if you run out of your usage quota** **.** [](https://community.openai.com/t/codex-should-switch-to-read-only-planning-mode-when-quota-runs-out/1379792)

If you are experiencing a situation where Codex is locked into read-only mode despite having plenty of remaining quota, it is usually tied to a couple of specific configuration or application issues.

Here is why this happens and how to fix it:

### 1\. You Hit Your Token/Usage Limit

OpenAI recently **combined the usage limits for ChatGPT and Codex** into a single shared pool measured in tokens. Heavy prompts or long-running tasks in either Chat, Work, or Codex draw from this exact same pot. [](https://www.reddit.com/r/codex/comments/1xli4o0/theyre%5Fmerging%5Fchat%5Fand%5Fcodex%5Fusage%5Fbut%5Funlimited/)

* **The Result:** When this shared budget runs out, Codex restricts active code execution, file editing, and testing, dropping you into a "Read-only Planning Mode" so you can still chat, ask "What should I do next?", and plan out your code logic while waiting for your quota to reset.
* **The Fix:** Move casual or basic programming questions to **Instant Chat**, which remains unlimited and outside of the token limit budget. [](https://www.youtube.com/watch?v=hd6Midt7vg8&t=39)

### 2\. A Windows Sandbox Regression Bug

If you are running the **Codex CLI on Windows**, there is a known environment bug where Codex incorrectly locks into a read-only state with restricted network access. [](https://github.com/openai/codex/issues/6374)

* **The Result:** It blocks the AI agent from writing files or executing code even if your configuration permissions are explicitly set to `approval 'never'` and `sandbox 'danger-full-access'`. [](https://github.com/openai/codex/issues/6374)
* **The Fix:** Because this is a recognized regression error in the CLI container environment, you should ensure your environment is fully updated. [](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)

### 3\. Outdated Desktop Client

Codex is deeply integrated into the ChatGPT Desktop App. If your client version is mismatched with OpenAI's cloud environment (especially when trying to utilize newer models like **GPT-6 Astra**), local file permission handshakes can fail, forcing a read-only environment safety fallback. [](https://coursiv.io/blog/codex-merged-with-chatgpt-app)

* **The Fix:** Open your ChatGPT Desktop App, go to the **Menu**, and click **Check for Updates** to push the latest client build. [](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)

To narrow this down, let me know:

* Are you using **Codex via the ChatGPT Desktop App** or the **Codex CLI**?
* Did you receive a warning that your **shared usage quota** ran out?
* If you are getting an **explicit error message** in your terminal or chat window, what does it say?

AI can make mistakes, so double-check responses 

* [](https://community.openai.com/t/codex-should-switch-to-read-only-planning-mode-when-quota-runs-out/1379792)  
OpenAI Developer Community  
Codex should switch to Read  
April 26, 2026 — Codex should switch to Read-only Planning Mode when quota runs out. Codex to run code, edit files, execute tests, scan more of the...
* [](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)  
OpenAI Help Center  
ChatGPT Work and Codex - OpenAI Help Center  
Nov 6, 2026 — If you do not see Astra available in Chat, Work or Codex in the desktop app, ensure that you update your app by clicking Menu > Ch...
* [](https://www.reddit.com/r/codex/comments/1xli4o0/theyre%5Fmerging%5Fchat%5Fand%5Fcodex%5Fusage%5Fbut%5Funlimited/)  
Reddit·r/codex  
They're merging Chat and Codex usage, but unlimited instant ...  
Nov 1, 2026 — Chat and Codex are moving to a shared usage allowance, with unlimited Instant chat left outside the limit. useful for basic questi...

Show all

# codex this chat uses openai but codex now uses openrouter so this chat is read only

1:28 AM

### codex this chat uses openai but codex now uses openrouter so this chat is read only

It sounds like your current session is locked into a **read-only mode** because of a mismatch or a configuration conflict between the built-in OpenAI chat backend and how your Codex CLI / app is routing requests.

If you are trying to route **Codex through OpenRouter** to get things working actively again, the read-only or broken state usually happens because OpenAI fully deprecated and removed the older `/chat/completions` wire protocol from Codex in early 2026. [](https://openrouter.ai/blog/tutorials/codex-cli-openrouter/)

To fix your environment and get back to an active chat, you need to update your configuration to point to OpenRouter's expected structure. Here is how to fix it: [](https://openrouter.ai/docs/cookbook/coding-agents/codex-desktop)

#### 1\. Update your `config.toml` or `config.yaml`

Open your Codex configuration file (usually found at `~/.codex/config.toml` or `C:\Users\<User>\.codex\config.yaml`). Make sure your provider settings use the **Responses API** instead of the old chat API: [](https://www.youtube.com/watch?v=Wg6szhkdOvQ&vl=en-US)

toml

```
model_provider = "openrouter"
model = "your-chosen-model" # e.g., openrouter/auto or a specific model name

[model_providers.openrouter]
base_url = "https://openrouter.ai"
env_key = "OPENROUTER_API_KEY"
wire_api = "responses"        # Crucial: "chat" will fail or lock up on newer versions
supports_websockets = false

```



#### 2\. Set the Environment Variable Globally

Because desktop and GUI apps often don't inherit variables directly from your shell profile (`.bashrc` or `.zshrc`), make sure your key is registered at the system session level: [](https://openrouter.ai/docs/cookbook/coding-agents/codex-desktop)

* **macOS:** Run `launchctl setenv OPENROUTER_API_KEY "sk-or-..."` in your terminal.
* **Windows PowerShell:** Run `setx OPENROUTER_API_KEY "sk-or-..."`. [](https://openrouter.ai/docs/cookbook/coding-agents/codex-desktop)

#### 3\. Clear Background Processes

If Codex is stuck in a read-only or locked loop, lingering background tasks might be holding onto the old OpenAI session. **Fully quit the ChatGPT/Codex desktop app** and kill any hanging processes in your terminal before restarting: [](https://openrouter.ai/docs/cookbook/coding-agents/codex-desktop)

* On Mac/Linux: `pkill gpt` or `pkill codex`
* On Windows: End the `gpt.exe` or `codex.exe` tasks via Task Manager.

Once you restart the session with `wire_api = "responses"`, your OpenRouter connection should take over dynamically, moving you out of the read-only state. [](https://opper.ai/blog/codex-router)

Are you running Codex via the **CLI** or the **ChatGPT Desktop App**? Let me know your operating system if you need the exact file paths or terminal commands to clear the lock!

* [](https://openrouter.ai/docs/cookbook/coding-agents/codex-desktop)  
OpenRouter  
Codex Desktop App Integration - OpenRouter  
\`wire\_api = "responses"\`, Set \`OPENROUTER\_API\_KEY\` at session level. Troubleshooting: Fully quit app and end lingering processes i...
* [](https://openrouter.ai/blog/tutorials/codex-cli-openrouter/)  
OpenRouter  
Codex CLI with OpenRouter: config.toml Setup and Models  
The Responses API is what OpenRouter expects, and on current Codex versions it's also the default, Define a new provider like open...
* [](https://opper.ai/blog/codex-router)  
Opper AI  
Codex router: run OpenAI Codex CLI on any model (2026 guide)  
The chat completions wire protocol was removed from Codex CLI in February 2026, "responses" is now the only supported value. backe...

Show all

## how to force install a prev codex version

how to force install a prev codex version

1:29 AM

### how to force install a prev codex version

How you force-install or downgrade to a previous version of the Codex CLI depends entirely on how you originally installed it. 

---

#### Method 1: If installed via `npm` (Recommended & Cleanest)

If you installed Codex as a Node package, you can force-install any specific previous version directly by targeting its version tag. 

1. **Uninstall your current version** to clear the cache and binary links:  
bash  
```  
npm uninstall -g @openai/codex  
```  

2. **Force-install your target version** using the `@` syntax (replace `0.146.1` with whatever version you need):  
bash  
```  
npm install -g @openai/codex@0.146.1  
```  

3. **Verify the rollback**: [](https://github.com/openai/codex/issues/1490)  
bash  
```  
codex --version  
```  


---

#### Method 2: If using the Standalone Installer Script (Mac / Linux)

The official `curl` standalone installer typically fetches the absolute newest release. However, you can force it to pull a specific historical release by injecting the `CODEX_RELEASE` environment variable before executing it. [](https://github.com/openai/codex/issues/1490)

Run the following unified command in your terminal: [](https://github.com/openai/codex/issues/1490)

bash

```
curl -fsSL https://chatgpt.com/codex/install.sh | CODEX_NON_INTERACTIVE=1 CODEX_RELEASE=0.146.1 sh

```



_(Make sure to swap `0.146.1` with your desired target version tag)._ [](https://github.com/openai/codex/issues/1490)

---

#### Method 3: If you are using the Desktop App (macOS / Windows)

The official Desktop GUI client automatically updates itself aggressively, which frequently overrides manually stepped-down installations. [](https://github.com/openai/codex/issues/17466)

If an update completely breaks your setup, the official repository does not cleanly host older standalone `.dmg` or `.exe` assets. You will need to download a snapshot of a previous build directly from community tracking repositories—such as the community-maintained automated snapshot archive on [GitHub (nooblyf/codex-releases)](https://github.com/nooblyf/codex-releases)—and physically replace your local app file. [](https://github.com/openai/codex/issues/17466)

---

#### ⚠️ Crucial Step After Downgrading

If you are moving back to a legacy version because of the OpenRouter shift, make sure your configurations are clean. Older versions of the CLI expect the **Chat API** layout rather than the newer Responses API protocols.

If your configuration breaks or errors out upon rolling back, reopen your config file (`~/.codex/config.toml`) and ensure your `wire_api` is assigned to match what that older version expects:

toml

```
# Use "chat" for older legacy CLI versions, use "responses" for newer 2026 builds
wire_api = "chat" 

```



Which **version number** are you trying to roll back to, and what **operating system** are you currently on? I can give you the exact copy-paste command for your specific environment.

* [](https://github.com/openai/codex/issues/1490)  
GitHub  
How to downgrade? · Issue #1490 · openai/codex  
Downgrading Methods: npm uninstall -g followed by npm install … uninstalling and reinstalling version 0.142.5; using environment v...
* [](https://continuumcode.ai/guides/codex-cli-update/)  
continuumcode.ai  
Updating the Codex CLI and pinning it in CI  
the standalone installer script, Homebrew and the standalone installer both track the current release, so neither has a clean down...
* [](https://github.com/openai/codex/issues/17466)  
GitHub  
Download previous version of codex desktop application · Issue #17466 · openai/codex  
auto-updated and broke workflow, lacking an official way to downgrade. Additional users (BretJohnson) confirmed updates causing br...

Show all
