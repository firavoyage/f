feat: support more models

conclusion:

only `gpt-5.2` works in my test cases.

test: 

```
export OPENAI_BASE_URL="https://openrouter.ai/api/v1"
export OPENAI_MODEL="openai/gpt-5.2"
# export OPENAI_MODEL="openai/gpt-5-mini"
# export OPENAI_MODEL="openai/gpt-5-nano"
# export OPENAI_MODEL="openai/gpt-oss-120b:free"
# export OPENAI_MODEL="openrouter/free"
```

result:

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

observation:

`openrouter/free` works once when i say `hello`, but stops working when i say `what can you do`.

`gpt-5.2` works fine.

other models, even paid models, dont work.

expectation:

- idk what models little
