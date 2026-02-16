<!-- https://chatgpt.com/c/69932a23-09f0-8324-9c8f-1920c609e7ed -->

<!-- "hello" works with openrouter/free, but then "invalid payload"... -->

# .

```sh
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.08s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> hello
▎🤖 Hello! How can I assist you today?
> what can you do
⠋ 🤔 Thinking...                                                                                                                              2026-02-16T15:05:41.935009Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠙ 🤔 Thinking...                                                                                                                              2026-02-16T15:05:43.796545Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠼ 🤔 Thinking...                                                                                                                              2026-02-16T15:05:45.981090Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠦ 🤔 Thinking...                                                                                                                              2026-02-16T15:05:48.876186Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠧ 🤔 Thinking...                                                                                                                              2026-02-16T15:05:51.683712Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠇ 🤔 Thinking...                                                                                                                              2026-02-16T15:05:56.387756Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠸ 🤔 Thinking...                                                                                                                              2026-02-16T15:06:05.837840Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠧ 🤔 Thinking...                                                                                                                              ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.09s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> what can you do
⠸ 🤔 Thinking...                                                                                                                              2026-02-16T15:08:41.150267Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠧ 🤔 Thinking...                                                                                                                              2026-02-16T15:08:43.282409Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠧ 🤔 Thinking...                                                                                                                              2026-02-16T15:08:45.172621Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠧ 🤔 Thinking...
⠹ 🤔 Thinking...
⠦ 🤔 Thinking...
⠧ 🤔 Thinking...
⠸ 🤔 Thinking...                                                                                                                              ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.08s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> hello
⠧ 🤔 Thinking...                                                                                                                              2026-02-16T15:09:00.470184Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠹ 🤔 Thinking...                                                                                                                              2026-02-16T15:09:02.756700Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠦ 🤔 Thinking...                                                                                                                              ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % source ~/.zshrc
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.15s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> what can you do
⠹ 🤔 Thinking...                                                                                                                              2026-02-16T15:27:58.907377Z ERROR little_agent_core::model_client: got an error: Error { message: "HTTP status client error (404 Not Found) for url (https://openrouter.ai/api/v1/chat/completions)", kind: Other }
⠇ 🤔 Thinking...                                                                                                                              2026-02-16T15:28:00.438922Z ERROR little_agent_core::model_client: got an error: Error { message: "HTTP status client error (404 Not Found) for url (https://openrouter.ai/api/v1/chat/completions)", kind: Other }
⠴ 🤔 Thinking...                                                                                                                              ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % source ~/.zshrc
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.08s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> what can you do
⠴ 🤔 Thinking...                                                                                                                              2026-02-16T15:29:13.553663Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠴ 🤔 Thinking...                                                                                                                              2026-02-16T15:29:15.167554Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠴ 🤔 Thinking...                                                                                                                              2026-02-16T15:29:17.176573Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠙ 🤔 Thinking...                                                                                                                              ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.08s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % source ~/.zshrc
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.08s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> what can you do
⠴ 🤔 Thinking...                                                                                                                              2026-02-16T15:30:16.323395Z ERROR little_agent_core::model_client: got
 an error: Error { message: "InvalidPayload", kind: Other }
⠴ 🤔 Thinking...                                                                                                                              2026-02-16T15:30:17.875535Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
⠼ 🤔 Thinking...                                                                                                                              ^C
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % source ~/.zshrc
fira@Fira ~/Documents/_/opensource/little-agent/crates/little-agent
 % cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.09s
     Running `/home/fira/Documents/_/opensource/little-agent/target/debug/little-agent`
> what can you do
⠴ 🤔 Thinking...                                                                                                                              2026-02-16T15:31:42.228820Z ERROR little_agent_core::model_client: got an error: Error { message: "InvalidPayload", kind: Other }
▎🤖 I can help with a few broad categories of tasks:

- Answer questions and explain concepts (science, programming, writing, math, etc.)
- Write, edit, and summarize text (emails, reports, resumes, documentation)
- Generate code, review code, debug errors, and suggest improvements
- Work with files in your environment (search for files, read file contents, run commands) if you want me to inspect or modify a project
- Analyze images you share (describe, extract text, troubleshoot visuals)
- Plan and organize (checklists, study plans, project breakdowns)
- Do research-style syntheses (compare options, pros/cons, decision guidance)

If you tell me what you’re working on (and what “done” looks like), I’ll suggest the fastest way I can help.
> hello
▎🤖 Hello. What are you working on today, and how can I help?
```

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Speak naturally, like a real human in a relaxed conversation.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. No nonsense like "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Wait for me to begin the conversation.

---

I’ll be here, Fira.

# 1

how to do that with openrouter

```
export OPENAI_API_KEY="<Your API Key>"
export OPENAI_BASE_URL="https://api.openai.com/v1"
export OPENAI_MODEL="gpt-5.3"
```

---

If what you want is to **use OpenRouter instead of the official OpenAI endpoints** by setting the same environment variables, you don’t exactly use `OPENAI_BASE_URL="https://api.openai.com/v1"` with OpenRouter — you switch it to point at OpenRouter’s API and give your OpenRouter key. OpenRouter speaks the same language as OpenAI’s API, but it **requires its own base URL and its own key**. ([OpenRouter][1])

So it looks more like this:

```
export OPENAI_API_KEY="sk-or-v1-xxxxxxxxxxxxx"      # your OpenRouter API key
export OPENAI_API_BASE="https://openrouter.ai/api/v1" # OpenRouter base
export OPENAI_MODEL="openai/gpt-4o"                  # or whichever model you want
```

Here are the simple shifts:

- **API key**: use the OpenRouter key (starts with `sk-or-…`) rather than an official OpenAI key. ([OpenRouter][1])
- **Base URL**: point at OpenRouter’s endpoint instead of the OpenAI one. ([Microsoft GitHub][2])
- **Model naming**: include the provider prefix (e.g., `openai/gpt-4o`) when specifying a model if your client requires it. ([parrotrouter.com][3])

Once that’s set, **your existing OpenAI‑compatible SDK or tooling will send requests through OpenRouter**, and OpenRouter will route them to the chosen model. ([parrotrouter.com][3])

[1]: https://openrouter.ai/docs/api-keys?utm_source=chatgpt.com "API Authentication | OpenRouter OAuth and API Keys | OpenRouter | Documentation"
[2]: https://microsoft.github.io/genaiscript/configuration/openrouter/?utm_source=chatgpt.com "OpenRouter | GenAIScript"
[3]: https://parrotrouter.com/docs/integrations/openai?utm_source=chatgpt.com "OpenAI SDK Integration - OpenRouter Documentation | ParrotRouter Docs"

#

<!-- https://chatgpt.com/c/6993312f-874c-8320-80d3-1b021bfd8dbe -->

# 0

You are a calm, thoughtful human with wisdom who speaks in simple, clear English.
Speak naturally, like a real human in a relaxed conversation.
Address me as Fira when it feels natural.
Let your answers be insightful and warm, as if we’re sitting together and I’m seeking clarity.
Be meaningful. No nonsense like "Good question", "Of course", or "I'm here with you".
Leave a blank space after your answer. You do not offer next steps, or guidance.
Wait for me to begin the conversation.

---

I’ll be here, Fira.

# 1

what are the best free coding models on openrouter

---

Here are some of the **best free coding‑capable models you can access through OpenRouter** right now — ones that people use for generating, fixing, or reasoning about code without paying fees:([free-llm.com][1])

**Strong coding‑ready or versatile free models**

- **Meta Llama 3.3 70B Instruct (free)** – large context, solid general performance for code and logic.([free-llm.com][1])
- **Qwen 3 Coder (free)** – specifically tuned for coding tasks, handles complex code generation and multi‑file prompts well.([free-llm.com][1])
- **Mistral‑based models (e.g., Devstral/Mistral‑Nemo free variants)** – efficient and capable on software dev prompts.([docs.claude-mem.ai][2])
- **DeepSeek R1 (free)** – known to reason about problems and code snippets reliably.([docs.claude-mem.ai][2])
- **Xiaomi MiMo‑V2‑Flash (free)** – big MoE model good at logic and coding reasoning.([docs.claude-mem.ai][2])

**Other free models worth trying**

- Lightweight Llama 3.1 or 8B instruct variants — good if you want faster responses with lower compute needs.([docs.claude-mem.ai][2])
- The _“openrouter/free”_ router endpoint — it will pick a free model automatically for you, which is handy if you don’t want to choose manually but still want a no‑cost coding model.([OpenRouter][3])

Availability and performance can shift over time, but these are among the most frequently recommended free options for coding tasks on OpenRouter today.([free-llm.com][1])

[1]: https://free-llm.com/provider/openrouter?utm_source=chatgpt.com "OpenRouter - Free LLM API | Free-LLM.com"
[2]: https://docs.claude-mem.ai/usage/openrouter-provider?utm_source=chatgpt.com "OpenRouter Provider - Claude-Mem"
[3]: https://openrouter.ai/docs/guides/routing/routers/free-models-router?utm_source=chatgpt.com "Free Models Router | Zero-Cost AI Inference | OpenRouter | Documentation"
