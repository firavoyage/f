<!-- ive used these before. but it seems much easier now. though, i still dont believe cli is the final answer. like, the list of `/command` is long, and it's not categorized. you can search, but it's hard to browse. e.g. search "price" does not make "cost" jump out. -->

```
╭─── Claude Code v2.1.89 ────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                    │ Tips for getting started                                                      │
│                    Welcome back!                   │ Run /init to create a CLAUDE.md file with instructions for Claude             │
│                                                    │ Note: You have launched claude in your home directory. For the best experien… │
│                       ▐▛███▜▌                      │ ───────────────────────────────────────────────────────────────────────────── │
│                      ▝▜█████▛▘                     │ Recent activity                                                               │
│                        ▘▘ ▝▝                       │ No recent activity                                                            │
│                                                    │                                                                               │
│  google/gemini-3-flash-preview · API Usage Billing │                                                                               │
│                     /home/fira                     │                                                                               │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

  ↑ Opus now defaults to 1M context · 5x more room, same pricing

❯ hi

● Hello! How can I help you with your code today?

❯ /cost
  ⎿  Total cost:            $0.0598 (costs may be inaccurate due to usage of unknown models)
     Total duration (API):  3s
     Total duration (wall): 41s
     Total code changes:    0 lines added, 0 lines removed
     Usage by model:
     google/gemini-2.5-flash-lite:  224 input, 9 output, 0 cache read, 0 cache write ($0.0008)
     google/gemini-3-flash-preview:  19.6k input, 12 output, 0 cache read, 0 cache write ($0.0590)

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
❯ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ? for shortcuts
```

<!-- (on openrouter, actually) Gemini 3 Flash Preview 0.00984 (but cant it display the token count instead of the cost? cant it display what it send actually? like there must be some default system prompt or it could be nothing but a chatbot.) -->

<!-- wait, i have to remember it somehow? does the hash here make any sense? (unless im automated) -->

```
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
❯ 
Resume this session with:─────────────────────────────────────────────────────────────────────────────────────────────────────────────
claude --resume 820ae2c4-28ec-49dc-9433-70909d61b9fa
```

<!-- why it asks every time? (conservative. ik.) wait. ive tried again, and confirmed there is no "remember" choice. -->

```
claude --resume 820ae2c4-28ec-49dc-9433-70909d61b9fa
 ~ % claude

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Accessing workspace:

 /home/fira

 Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work
 from your team). If not, take a moment to review what's in this folder first.

 Claude Code'll be able to read, edit, and execute files here.

 Security guide

 ❯ 1. Yes, I trust this folder
   2. No, exit

 Enter to confirm · Esc to cancel
```

<!-- why is opus here? is it connecting to claude official for ads? anyway. -->

<!-- why "no recent activity?". where is it (greeting thread) gone? -->

```
 ~ % claude
╭─── Claude Code v2.1.89 ────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                    │ Tips for getting started                                                      │
│                    Welcome back!                   │ Run /init to create a CLAUDE.md file with instructions for Claude             │
│                                                    │ Note: You have launched claude in your home directory. For the best experien… │
│                       ▐▛███▜▌                      │ ───────────────────────────────────────────────────────────────────────────── │
│                      ▝▜█████▛▘                     │ Recent activity                                                               │
│                        ▘▘ ▝▝                       │ No recent activity                                                            │
│                                                    │                                                                               │
│  google/gemini-3-flash-preview · API Usage Billing │                                                                               │
│                     /home/fira                     │                                                                               │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

  ↑ Opus now defaults to 1M context · 5x more room, same pricing

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
❯ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ? for shortcutC
```

<!-- it's a bit harder to do with codex. but i follow the official guide on openrouter and get it done. -->

```
 ~ % codex
╭─────────────────────────────────────────────────────────────╮
│ >_ OpenAI Codex (v0.118.0)                                  │
│                                                             │
│ model:     google/gemini-3-flash-preview   /model to change │
│ directory: ~                                                │
╰─────────────────────────────────────────────────────────────╯

  Tip: New Build faster with Codex.


› hi


• Hello! How can I help you with your code today?


› Use /skills to list available skills

  google/gemini-3-flash-preview default · 100% left · ~
```

<!-- it's better if i can hide the tip. no problem found at a glance at the beginning. -->

<!-- let me see though the .codex and the .claude folder... i think i could do it without help, assuming big companies have good design. -->

<!-- they love jsonl. -->


