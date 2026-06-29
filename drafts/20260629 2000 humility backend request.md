# compare openai claude gemini ollama compatible api design

The **OpenAI API design** has become the de facto industry standard for Large Language Model (LLM) interfaces, with the `/v1/chat/completions` endpoint defining how developers handle chat state and token streaming. Because of this dominance, competitors either design highly divergent native SDKs or, like **Ollama** and **Gemini**, offer explicit **OpenAI-compatible endpoints** to allow developers to drop in their models with a simple base URL configuration swap. [link](https://www.instagram.com/reel/DL5btu0qosu/)

***

### Core Structural Differences

| Feature / Pattern         | OpenAI                                                          | Claude (Anthropic)                                                                   | Gemini (Google)                                                                                                                                        | Ollama (Local)                                         |
| ------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| **Primary Chat Endpoint** | `/v1/chat/completions`                                          | `/v1/messages`                                                                       | `/v1beta/models/...:generateContent`                                                                                                                   | `/api/chat` or `/api/generate`                         |
| **Message Architecture**  | System, User, Assistant, Tool roles                             | Direct `system` parameter outside the `messages` array                               | `systemInstruction` configuration + `contents` array                                                                                                   | Evaluates standard chat role arrays natively           |
| **Streaming Style**       | Server-Sent Events (SSE) `text/event-stream` using delta chunks | SSE with highly explicit typed event blocks (`message_start`, `content_block_delta`) | NDJSON (Newline-Delimited JSON) stream chunks                                                                                                          | Newline-delimited JSON objects with `done: true` flags |
| **OpenAI Compatibility**  | Native (Creator)                                                | None natively (requires community proxies)                                           | Supported via SDK adapters and [Gemini Enterprise Platforms](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai?gl=us) | Fully native built-in proxy on port `11434`            |

***

### Key API Paradigms Across Providers

### 1. Message Layout & System Prompts

- **OpenAI & Ollama**: Rely on a linear array of role-based objects (`system`, `user`, `assistant`). Ollama matches this pattern directly in its `/api/chat` endpoint to keep translation logic simple.
- **Claude**: Enforces a strict alternating pattern between `user` and `assistant`. Anthropic completely pulls the `system` prompt out of the array and makes it a top-level request body parameter (`"system": "..."`) to structurally enforce system guidelines.
- **Gemini**: Uses a unique nesting pattern. The core parameter is named `contents`, and roles are split strictly between `user` and `model` (instead of `assistant`). System directives are placed in a standalone `systemInstruction` object. [link](https://medium.com/@zakkyang/a-comparative-guide-to-openai-and-ollama-apis-with-cheathsheet-5aae6e515953)

### 2. Streaming Implementations

- **OpenAI & Ollama**: Deliver small string deltas. OpenAI relies on the classic `data: {...}` SSE formatting, whereas Ollama uses raw, line-by-line JSON blocks that change a boolean `done` property from `false` to `true` on the final token chunk.
- **Claude**: Employs a complex, event-driven streaming design. It emits lifecycle states like `message_start`, `content_block_start`, `content_block_delta`, and `message_delta`. This requires more robust client-side parsing but provides precise control over token lifecycle states.
- **Gemini**: Uses HTTP chunked transfer encoding returning an array of parts, requiring the developer to aggregate parts across the stream block. [link](https://medium.com/@zakkyang/a-comparative-guide-to-openai-and-ollama-apis-with-cheathsheet-5aae6e515953)

### 3. Structured Output & Schema Enforcement

- **OpenAI**: Offers native `json_schema` strict enforcement where the API guarantees the output exactly conforms to a provided JSON format or Pydantic model.
- **Gemini**: Supports a rigid `responseSchema` property directly inside the configuration object to enforce structured JSON.
- **Claude**: Indirectly enforces JSON structures by declaring a "Tool" schema and configuring `tool_choice: {"type": "any"}` to force the model to output its message through that structural format.
- **Ollama**: Uses a simple `"format": "json"` parameter or matches JSON schemas natively when consuming the OpenAI-compatible endpoint route. [link](https://medium.com/@rosgluk/structured-output-comparison-across-popular-llm-providers-openai-gemini-anthropic-mistral-and-1a5d42fa612a)

***

### Deep Dive: OpenAI Compatibility Layer

Because rewrite costs are expensive, [Ollama](https://docs.ollama.com/api/openai-compatibility) and Google Gemini provide direct drop-in routing. This allows developers to use the official OpenAI SDK but route traffic elsewhere by overriding the configuration: [link](https://www.instagram.com/reel/DL5btu0qosu/)

javascript

```
// Example using OpenAI Client SDK to hit a local Ollama instance or Gemini proxy
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1', // Swapped fromapi.openai.com
  apiKey: 'ollama', // Placeholder string for authentication
});
```

Use code with caution.

- **Ollama's Layer**: The built-in proxy maps `/v1/chat/completions` directly to Ollama's local model runners. It converts OpenAI's `model` string (e.g., `gpt-4o`) to local tags like `llama3` or `deepseek-r1` seamlessly.
- **Gemini's Layer**: Google provides translation middleware within their newer SDK releases. It translates classic OpenAI parameters like `temperature`, `max_tokens`, and standard tool calls into Google's native API schema under the hood. [link](https://www.instagram.com/reel/DL5btu0qosu/)

If you are building an ecosystem meant to work across multiple models, using an abstraction tool or sticking strictly to providers supporting the **OpenAI specification** will save immense architecture overhead. [link](https://askimo.chat/blog/benefits-multi-ai-providers/)

Would you like to see a **side-by-side code example** showing the exact raw JSON payloads for a chat request in all four native formats?

- [link](https://www.instagram.com/reel/DL5btu0qosu/)\
  Use Ollama to easily run models like Deepseek-r1 or ...\
  Jul 9, 2025 — if you're building an app that uses OpenAI. or Anthropic one of these paid AI models. and you're probably using like the OpenAI SD...\
  [2:08](https://www.instagram.com/reel/DL5btu0qosu/)\
  Instagram·Wes Bos
- [link](https://jace.pro/blog/comparing-ai-harnesses-opencode-ollama-lm-studio-claude-code-open-webui-and-vs-code/)\
  OpenCode, Ollama, LM Studio, Claude Code, Open WebUI, and VS ...\
  Mar 29, 2026 — Ollama is not a harness. It's a model runner. It downloads models, runs them locally with GPU acceleration, and exposes an OpenAI-\
  jace.pro
- [link](https://docs.ollama.com/api/openai-compatibility)\
  OpenAI compatibility - Ollama documentation\
  Ollama provides compatibility with parts of the OpenAI API to help connect existing applications to Ollama.\
  Ollama

Show all

# compare openai claude gemini compatible api design

Evaluating **OpenAI**, **Anthropic (Claude)**, and **Google (Gemini)** reveals that OpenAI's design remains the definitive industry benchmark, forcing competitors to adapt. Developers building multi-model applications must navigate OpenAI's ubiquity, Anthropic's structured precision, and Google's native ecosystem constraints. [link](https://mongoengine.org/openai-vs-claude-vs-gemini-api/)

***

### OpenAI API Design: The Industry Benchmark

OpenAI’s paradigm defines how the modern web interacts with LLMs. Its structure relies heavily on the `messages` array, assigning distinct permissions and behavioral roles (`system`, `user`, `assistant`) to structure the context window. [link](https://cloudinsight.cc/en/blog/ai-api-comparison)

- **Ubiquity**: Most open-weight inference runners (e.g., vLLM, Ollama) and alternative providers copy OpenAI's endpoint structures (`/v1/chat/completions`) identically.
- **State Management**: Built-in state abstractions (like the Assistants API) manage server-side threads, message histories, and file allocations automatically.
- **Tool Execution**: Function calling uses a rigorous JSON schema mapping framework. The model outputs structured parsing instructions, leaving execution tasks to your application logic. [link](https://www.youtube.com/watch?v=CumRswBv07I)

***

### Claude (Anthropic) API Design: Structured Precision

Anthropic's Messages API shares structural similarities with OpenAI but enforces much stricter message sequencing and data formatting rules. [link](https://cloudinsight.cc/en/blog/ai-api-comparison)

- **Strict Sequencing**: The `messages` array requires an alternating conversation flow (`user` → `assistant` → `user`). Passing sequential messages from the same role throws an API validation error.
- **Separated System Prompts**: System instructions cannot live inside the standard messages list. Developers must declare system behavioral instructions via a dedicated top-level `system` parameter string.
- **Extensible Agent Architecture**: Anthropic leverages the **Model Context Protocol (MCP)**. This architecture standardizes how Claude connects to external data repositories and secure environments.
- **Pre-fill Capabilities**: Developers can inject text directly into the beginning of the model's response by ending the message array with a partial `assistant` block. This forces formatting constraints or steers tone reliably. [link](https://www.mindstudio.ai/blog/anthropic-vs-openai-vs-google-agent-strategy)

***

### Gemini (Google) API Design: The Multimodal Divergent

Google's native Gemini API design departs significantly from the OpenAI style, reflecting its deep integration with the Google Cloud ecosystem. [link](https://cloudinsight.cc/en/blog/ai-api-comparison)

- **Alternative Syntax**: Instead of using a standard `messages` array populated with `role` and `content`, Gemini uses a `contents` array containing `role` and `parts`.
- **Native Multimodality**: The `parts` array accommodates text string objects alongside raw binary blobs (such as inline images, audio, or video files) seamlessly within a single payload.
- **Execution Options**: Gemini offers true **native code execution**. Instead of relying on client-side environments to run code, the API can execute Python code internally inside a sandbox and return the results directly. [link](https://mongoengine.org/openai-vs-claude-vs-gemini-api/)

***

### Structural Comparison

| Feature / Core Concept     | OpenAI API Design                          | Claude (Anthropic) API              | Gemini (Google) Native API            |
| -------------------------- | ------------------------------------------ | ----------------------------------- | ------------------------------------- |
| **Main Chat Endpoint**     | `/v1/chat/completions`                     | `/v1/messages`                      | `/v1beta/models/...:generateContent`  |
| **Payload Schema**         | `messages: [{role, content}]`              | `messages: [{role, content}]`       | `contents: [{role, parts: [{text}]}]` |
| **System Prompt Location** | Inside `messages` array (`role: "system"`) | Top-level `system` property string  | Top-level `system_instruction` object |
| **Message Order Rules**    | Flexible                                   | Strict alternating pattern required | Flexible                              |
| **Native Tool Running**    | Client-side execution loop required        | Standardized via MCP architecture   | Supports internal sandboxed execution |

***

### Gemini’s OpenAI Compatibility Layer

Google offers an official **OpenAI Compatibility Layer** for Gemini to lower migration friction. This translation layer allows you to use OpenAI’s official client SDKs (Python and TypeScript) or standard payload schemas while routing underlying data processing straight to Gemini endpoints. [link](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai?gl=us)

- **Authentication Constraints**: The compatibility layer heavily restricts authorization patterns. It maps cleanly to **Google Cloud Auth** within Enterprise environments, rather than standard API keys.
- **Feature Parity Drop**: Advanced OpenAI parameters (like complex `response_format` configurations or raw logprobs) do not always translate smoothly. They can fail silently or cause error responses depending on your target Gemini model version.
- **Architectural Tradeoff**: If you are transitioning a legacy platform, the compatibility layer accelerates deployment. However, for greenfield projects, calling the native Gemini API directly prevents abstraction errors and ensures full tool-use stability. [link](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai?gl=us)

To help tailor a routing or implementation architecture for your project, please let me know:

- Your **primary programming language** (Python, TypeScript, Go?)

- Whether your application relies heavily on **structured JSON outputs** or **tool calling**

- If you plan on implementing a **multi-model routing strategy** [link](https://crazyrouter.com/en/blog/ai-api-pricing-comparison-2026-openai-claude-gemini-crazyrouter)

- [link](https://mongoengine.org/openai-vs-claude-vs-gemini-api/)\
  OpenAI vs Claude vs Gemini API: Full Developer Comparison\
  Apr 4, 2026 — Three takeaways from this OpenAI vs Claude vs Gemini API comparison should guide your decision: \* Pricing matters at scale: Gemini...\
  MongoEngine

- [link](https://www.youtube.com/watch?v=CumRswBv07I)\
  Which AI is the Best? (Claude vs ChatGPT vs Gemini)\
  Mar 2, 2026 — anthropic OpenAI Google Gemini how do you choose one to commit to when there are so many good models out there i happen to have a ...\
  9:58\
  YouTube·Web3 Wesley

- [link](https://www.yottalabs.ai/post/best-openai-api-alternatives-in-2026-free-open-source-and-multi-model-options)\
  OpenAI API Alternatives: Claude, Gemini & Open-Source ...\
  Apr 1, 2026 — You Might Also Like \* Inference. vLLM. TensorRT-LLM. \* Inference. GPU Pods. Distributed Inference. \* Hardware. GPU Pods. Cost Opti...\
  Yotta Labs

Show all

# how does llm input cache work

**LLM input caching**—commonly called **prompt caching** or **context caching**—works <mark>by storing the mathematical "internal memory" generated when a model processes text</mark>. Instead of re-reading a massive document or system instruction every time a user asks a new question, the system saves the initial calculation. When a subsequent request arrives, the Large Language Model (LLM) skips directly to the new text. [link](https://machinelearningmastery.com/the-complete-guide-to-inference-caching-in-llms/)

This optimization technique dramatically reduces **Time-to-First-Token (TTFT)** latency by up to 85% and slashes input token costs by up to 90%. [link](https://introl.com/blog/prompt-caching-infrastructure-llm-cost-latency-reduction-guide-2025)

***

### The Underlying Mechanics: KV Caching

To understand how input caching works across multiple API requests, it helps to understand what happens inside a single request: [link](https://machinelearningmastery.com/the-complete-guide-to-inference-caching-in-llms/)

1. **The Prefill Bottleneck**: When you send text to an LLM, it must calculate how every word relates to every other word via the self-attention mechanism. It computes these mathematical states as **Key (K) and Value (V) matrices** across every transformer layer.
2. **What Gets Cached**: Prompt caching intercepts these calculated **KV matrices** right before the self-attention step and saves them to a high-speed memory layer (like RAM or fast GPU storage).
3. **The Shortcut**: For future queries, the model entirely bypasses tokenizing and running heavy computations on that shared text block. It simply drops the cached KV states directly into the transformer layers and acts as if it already read the text. [link](https://www.youtube.com/watch?v=u57EnkQaUTY\&t=1)

***

### How Providers Match Inputs: Prefix Matching

Input caching is highly precise and relies strictly on **exact prefix matching**. [link](https://machinelearningmastery.com/the-complete-guide-to-inference-caching-in-llms/)

- **The Radix Tree Lookup**: The inference engine hashes your incoming prompt and compares it to stored caches using a data structure called a radix tree.
- **Character-Level Sensitivity**: The system evaluates your text token-by-token from the very beginning. Caching stops at the **very first character or token that differs**.
- **The Break Point**: If you change a single comma, variable, or space in the middle of a 10,000-word document, the cache breaks at that exact spot. The model must recompute everything after it. [link](https://www.youtube.com/watch?v=u57EnkQaUTY\&t=1)

***

### How to Structure Prompts for Maximum Cache Hits

Because of prefix matching, how you structure your data dictates whether you save money and time. [link](https://www.youtube.com/watch?v=u57EnkQaUTY\&t=1)

- **Put Static Text First**: Place your system rules, large reference materials, codebases, or few-shot examples at the absolute top of your prompt structure.
- **Put Variables at the Bottom**: Keep dynamic items—like the user's latest question, timestamps, or changing parameters—at the very end.
- **Mind the Thresholds**: Most frontier APIs (like Anthropic, OpenAI, or Google Vertex AI) require a minimum threshold to trigger automatic caching—usually at least **1,024 to 32,000 tokens**. It does not activate for short, basic sentences because the overhead isn't worth it.
- **Watch Cache Expiry**: Caches are highly volatile. They generally persist in memory for **5 minutes to 1 hour** after the last request before automatically wiping to free up hardware resources. [link](https://www.youtube.com/watch?v=eAUIanQMJJg)

***

### Input Caching vs. Other Caching Types

It is common to confuse input caching with other layers of the AI engineering stack. They serve entirely different functions: [link](https://machinelearningmastery.com/the-complete-guide-to-inference-caching-in-llms/)

| Caching Type             | What it Stores                                                     | Where it Lives              | Benefit                                                                       |
| ------------------------ | ------------------------------------------------------------------ | --------------------------- | ----------------------------------------------------------------------------- |
| **Input / Prompt Cache** | Pre-computed attention states (KV matrices) of the text prefix.    | Model / Provider level.     | Processes long context instantly; slashes input token costs.                  |
| **Semantic Cache**       | Complete prompt-to-response text pairs using vector database math. | Application / Client level. | Bypasses the LLM entirely if a user asks a similar question.                  |
| **Exact-Match Cache**    | Literal string response paired to a cryptographic hash.            | Application / Client level. | Bypasses the LLM entirely if the prompt is identical character-for-character. |

For a deeper look at how to implement this architecture in production, see this video breakdown:

9m

[What is Prompt Caching? Optimize LLM Latency with AI ...IBM TechnologyYouTube · Feb 7, 2026](https://www.youtube.com/watch?v=u57EnkQaUTY\&t=1)

To help give you code examples or specific design patterns, what **LLM provider** (like Anthropic or OpenAI) or **orchestration framework** are you planning to use?

- [link](https://www.reddit.com/r/OpenAI/comments/1g5r377/how%5Fprompt%5Fcaching%5Fworks%5Fa%5Fdeep%5Fdive%5Finto/)\
  How Prompt Caching Works: A Deep Dive into Optimizing AI Efficiency\
  Oct 17, 2024 — Hello everyone, With the release of Prompt Caching from Anthropic and OpenAI, I've been deep-diving into how it works and it super...\
  Reddit·r/OpenAI
- [link](https://www.youtube.com/watch?v=eAUIanQMJJg)\
  Use caching to make your LLM input up to 4 times cheaper. ...\
  Oct 18, 2024 — all right oh yeah happy Friday. everyone. today we talk about context caching and how you can actually make your Gemini input up t...\
  16:32\
  YouTube·ML Engineer
- [link](https://machinelearningmastery.com/the-complete-guide-to-inference-caching-in-llms/)\
  The Complete Guide to Inference Caching in LLMs\
  Apr 18, 2026 — Introduction. Calling a large language model API at scale is expensive and slow. A significant share of that cost comes from repea...\
  Machine Learning Mastery

Show all

## examples of cachable or not

Here are clear examples of cacheable and non-cacheable prompt structures based on how API providers handle prefix matching.

***

### Examples of Cacheable Prompts (High Cache Hits)

To get a cache hit, the static text must stay exactly the same and remain at the **top** of the prompt.

### 1. The Customer Support Chatbot

- **User Turn 1:**

> **\[STATIC SYSTEM PROMPT]** You are an assistant for Acme Corp. Here is our 10,000-word return policy document...\
> **\[DYNAMIC USER PROMPT]** Hi, can I return a broken toaster?

- **User Turn 2:**

> **\[STATIC SYSTEM PROMPT]** You are an assistant for Acme Corp. Here is our 10,000-word return policy document...\
> **\[DYNAMIC USER PROMPT]** Hi, can I return a broken toaster? **\[CHAT HISTORY]** Yes, you can. **\[NEW USER PROMPT]** Great, how do I get the shipping label?

✅ **Why it works:** The massive system prompt and policy document stay at the absolute top of the text string across both turns. The model caches those 10,000 words once and reuses them.

### 2. The Code Review Assistant

- **Prompt 1 (File A):**

> **\[STATIC CONTEXT]** Here is our entire backend codebase repository (50,000 tokens)...\
> **\[DYNAMIC TASK]** Review `auth.py` for security vulnerabilities.

- **Prompt 2 (File B):**

> **\[STATIC CONTEXT]** Here is our entire backend codebase repository (50,000 tokens)...\
> **\[DYNAMIC TASK]** Write a unit test for `payments.py`.

✅ **Why it works:** The massive codebase is identical in both requests and sits at the very beginning. Only the specific instruction at the bottom changes.

***

### Examples of Non-Cacheable Prompts (Cache Misses)

These examples fail because a changing variable breaks the "prefix" chain at the top or middle of the prompt.

### 1. The Dynamic Timestamp Trap

- **Prompt 1 (10:00 AM):**

> **\[DYNAMIC]** Current Time: 10:00 AM.\
> **\[STATIC]** Here is our 20,000-token company handbook...\
> **\[TASK]** Summary of health benefits.

- **Prompt 2 (10:05 AM):**

> **\[DYNAMIC]** Current Time: 10:05 AM.\
> **\[STATIC]** Here is our 20,000-token company handbook...\
> **\[TASK]** How do I request PTO?

❌ **Why it fails:** The very first line changed from `10:00 AM` to `10:05 AM`. Because caching evaluates from left to right, the cache breaks on token #3. The entire 20,000-token handbook must be processed from scratch at full price.

### 2. The Multi-Document Rotation

- **Prompt 1 (User A):**

> **\[STATIC SYSTEM]** You are a legal researcher.\
> **\[DOC 1]** Read Case Law Alpha (15,000 tokens).\
> **\[DOC 2]** Read Case Law Beta (15,000 tokens).\
> **\[TASK]** Compare them.

- **Prompt 2 (User B):**

> **\[STATIC SYSTEM]** You are a legal researcher.\
> **\[DOC 2]** Read Case Law Beta (15,000 tokens).\
> **\[DOC 1]** Read Case Law Alpha (15,000 tokens).\
> **\[TASK]** Compare them.

❌ **Why it fails:** Even though the documents are identical, swapping their order completely changes the text layout. The prefix sequence is broken.

### 3. The RAG "Middle-Injection" Problem

- **Prompt 1:**

> **\[STATIC SYSTEM]** You are a medical AI.\
> **\[DYNAMIC RETRIEVED CHUNK]** Patient A has a history of asthma...\
> **\[STATIC REFERENCE]** Medical Textbook Chapter 4 (30,000 tokens).\
> **\[TASK]** Check for drug interactions.

❌ **Why it fails:** Injecting dynamic data (Patient A's file) in the _middle_ of the prompt invalidates everything that comes after it. The 30,000-token medical textbook below it cannot be cached.

***

### Golden Rules Checklist for Cache Design

| Do                                                                        | Don't                                                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Do** put system roles and large reference documents at the **top**.     | **Don't** put variables like timestamps, user IDs, or chat history at the top.  |
| **Do** keep your static templates strictly identical down to the spacing. | **Don't** change minor punctuation or formatting strings between calls.         |
| **Do** pass files or documents in the exact same order every single time. | **Don't** inject dynamic search/RAG results before your static reference texts. |

***

If you want to optimize your specific app, could you share a mock-up of your **current prompt structure**? I can show you exactly how to **reorder it** to maximize your cache hits.

- [link](https://darren-broemmer.medium.com/debunking-the-infamous-only-two-hard-problems-in-computer-science-b412a31c00df)\
  Debunking the infamous “Only two hard problems in Computer Science”\
  Jul 17, 2021 — In these examples, we are caching the expression on the right-hand-side so that we can reference it in the future using the variab...\
  \
  \
  Medium

## does cache expire

<mark><span>Yes, LLM input caches<span> </span></span><strong>absolutely expire</strong></mark>. They are highly volatile and designed only for short-term data reuse to optimize active sessions.

Because storing massive mathematical matrices (KV states) consumes expensive high-speed memory (like GPU VRAM or host RAM), providers cannot keep them saved indefinitely.

***

### How Long Do Caches Last?

While exact times depend on the specific provider and current system traffic, here are the typical lifetimes across major platforms:

- **Anthropic (Claude API):** Caches generally expire after **5 minutes** of inactivity. The 5-minute timer resets every time a new request hits the exact same cached prefix (a "cache hit").
- **OpenAI (GPT-4o / GPT-4o-mini):** OpenAI manages prompt caching automatically. Caches typically persist for **5 to 10 minutes** after the last request.
- **Google (Gemini API):** Google Cloud Vertex AI offers explicitly configurable "Context Caching." By default, these caches live for **5 minutes**, but Google allows developers to manually extend the **Time-to-Live (TTL)** up to several days for a sustained storage fee.
- **DeepSeek:** Uses a highly optimized cache system that generally retains data for **a few minutes** up to an hour depending on server load and reuse frequency.

***

### Key Rules of Cache Expiration

### 1. The Slidng Window (LRU Policy)

LLM providers use a **Least Recently Used (LRU)** eviction policy. Think of the 5-minute limit as a sliding window:

- If you query a cached 20,000-token prompt at 12:00 PM, it expires at 12:05 PM.
- If a user asks a follow-up question at 12:04 PM, the cache is used, and its expiration time automatically pushes back to 12:09 PM.

### 2. Server Load Eviction

Even if your 5 minutes are not up, providers reserve the right to evict your cache early during moments of **extreme peak traffic**. If the provider urgently needs GPU memory to process other users' active requests, idle or less frequently used caches are the first things deleted.

***

### Architectural Impact: When to Use Caching

Because of these expiration windows, input caching is incredibly powerful for certain software architectures but useless for others:

- 🚀 **Perfect for:** Multi-turn chat sessions, active document editing tools, live coding assistants, or batch processing hundreds of queries against a single text file all at once.
- 🛑 **Useless for:** Cron jobs that run once every morning, or apps with highly sporadic users who only send one message every 30 minutes.

***

Are you building an application where users have **long gaps between messages**, or are you looking to optimize a fast-paced, **high-frequency workload**?

- [link](https://medium.com/the-modern-scientist/caching-a-dive-into-in-memory-and-redis-caches-7b9491a1fa1b)\
  Caching: A Dive into In-Memory and Redis Caches\
  Aug 12, 2024 — In-Memory Cache: Generally does not persist data. When the application restarts, all cached data is lost, making it volatile and s...\
  \
  \
  Medium
- [link](https://www.linkedin.com/posts/limgangrui%5Fif-youve-noticed-your-claude-code-usage-activity-7443156259144380416-At%5FD)\
  If you've noticed your Claude Code usage running out quicker lately, you're not alone. I think I've found the reason and it's tied to prompt caching. Anthropic's prompt cache has a time limit (5… | Gang Rui 🚢 | 31 comments\
  Mar 26, 2026 — Gang Rui 🚢's Post If you've noticed your Claude Code usage running out quicker lately, you're not alone. I think I've found the r...\
  \
  \
  LinkedIn
- [link](https://caylent.com/blog/prompt-caching-saving-time-and-money-in-llm-applications)\
  Amazon Bedrock Prompt Caching: Saving Time and Money in LLM Applications\
  Jan 27, 2026 — The cache in Amazon Bedrock is ephemeral with a default Time To Live (TTL) of 5 minutes. Each time a cached prefix is reused, this...\
  \
  Caylent

Show all

## does it remember as long as the new request share at least one message at top with at least one prev req within the timewindow

No, it does not work that way. Sharing just "at least one message" is not enough to trigger a cache hit. The match must be a continuous **exact prefix match starting from the very first token** \[1].

If the first message matches, the model will remember _only_ that specific message. It will completely forget everything after it if a mismatch occurs.

***

### How the Cache Logic Evaluates the Request

The system evaluates your text token-by-token from left to right. Caching stops at the **very first point of divergence**.

### ❌ Scenario A: Interrupted Sequence (Cache Miss for the Rest)

Imagine you have a long chat history saved in the cache. In your new request, you insert a single new instruction right after the first message:

- **Previous Request (In Cache):**

> **\[Message 1: System Rules]** (Matches)\
> **\[Message 2: 20k Word Book]** (Matches)\
> **\[Message 3: User Question A]**

- **New Request:**

> **\[Message 1: System Rules]** ✅ _Cache Hit_\
> **\[NEW INSERTION: "Be concise"]** 🛑 _Cache Breaks Here!_\
> **\[Message 2: 20k Word Book]** ❌ _Cache Miss (Must recompute)_\
> **\[Message 3: User Question B]** ❌ _Cache Miss_

**Result:** The system reuses the cache for Message 1. However, because you inserted something new right after it, the cache breaks. The model completely forgets the 20,000-word book and must recalculate it from scratch.

***

### ✅ Scenario B: Appended Sequence (Cache Hit)

To successfully reuse the entire history within the time window, the new request must look exactly like the old request, with the new text added **strictly at the very bottom**.

- **Previous Request (In Cache):**

> **\[Message 1: System Rules]** (Matches)\
> **\[Message 2: 20k Word Book]** (Matches)\
> **\[Message 3: User Question A]** (Matches)

- **New Request:**

> **\[Message 1: System Rules]** ✅ _Cache Hit_\
> **\[Message 2: 20k Word Book]** ✅ _Cache Hit_\
> **\[Message 3: User Question A]** ✅ _Cache Hit_\
> **\[NEW INSERTION: User Question B]** 🆕 _Processed as new tokens_

**Result:** The system reuses the mathematical memory for Messages 1, 2, and 3 completely. You are only charged full price for processing `User Question B`.

***

### Summary Checklist for a Safe Match

To guarantee the model remembers a massive chunk of text from a previous request, ensure:

1. **The Start is Identical**: The very first character of the new request matches the very first character of the cached request.
2. **No Middle Tweaks**: No words, spaces, formatting, or formatting tags were altered anywhere inside the block you want to reuse.
3. **Appends Only**: All new messages or questions are added exclusively to the tail end of the prompt.

***

Are you managing a chat history where users might **edit their previous messages**, or are you looking for a way to structure a **branching conversation**?

- [link](https://builder.aws.com/content/33zsO2Bc7UbsnLb9XTOBcuv1O2c/amazon-bedrock-prompt-caching-with-the-amazon-nova-model)\
  Amazon Bedrock Prompt Caching with the Amazon Nova Model\
  Finally, it's important to note that cache hits require an exact prefix match. Even a one-token difference in the cached segment (\
  \
  AWS Builder Center
- [link](https://sgryt.com/posts/openai-prompt-caching-cost-optimization/)\
  The One Thing That Makes OpenAI 80% Faster (Most People Ignore It)\
  May 6, 2025 — Cache Hit Mechanics in Detail The current prompt must begin with the exact same prefix as a previously cached prompt This matching...\
  \
  \
  sgryt.com
- [link](https://arxiv.org/html/2601.06007v1)\
  Don’t Break the Cache: An Evaluation of Prompt Caching for Long-Horizon Agentic Tasks\
  Jan 9, 2026 — A cache miss occurs when any token differs from the cached content, even at the very beginning (shown with an orange indicator), f...\
  \
  arXiv

Show all

## does it remember the shared messages as long as the new request share some exact messages at top with at least one prev req within the timewindow

<mark><span>Yes, it will remember<span> </span></span><strong>exactly the shared messages at the top</strong></mark>, and nothing else.

As long as the new request starts with the identical token sequence from a previous request (and stays within the time window), you will get a **partial cache hit**. The model reuses the memory for that shared top section and restarts its heavy calculations from the exact point where the prompts diverge.

***

### Exactly How it Works: Step-by-Step

Imagine a user starts a conversation, and then decides to open a **new tab** or ask a completely different question using the same initial setup.

### 1. First Request (Establishes the Cache)

> 🟢 **Token 1 to 5,000:** System Prompt + 10-page FAQ Document.
>
> 🔴 **Token 5,001 to 5,100:** "How do I reset my password?"

The provider processes all 5,100 tokens. It saves the mathematical states of **Tokens 1 to 5,000** into the cache memory.

### 2. Second Request (Hits the Top, Changes the Bottom)

Three minutes later, the user sends a brand-new question but keeps the same FAQ setup at the top:

> 🟢 **Token 1 to 5,000:** System Prompt + 10-page FAQ Document **(EXACT MATCH)**.
>
> 🔵 **Token 5,001 to 5,050:** "What is your refund policy?"

### The Result:

- **Tokens 1 to 5,000:** **CACHE HIT**. The model instantly recalls this section from memory. You are billed at the heavily discounted cache rate, and processing time is nearly instant.
- **Tokens 5,001 to 5,050:** **CACHE MISS / NEW COMPUTATION**. The model reads this as entirely new text and processes it at standard speed and cost.

***

### The Fine Print: Minimum Token Limits

While this "top-sharing" rule works perfectly, keep in mind that providers enforce a **minimum token length** before they bother caching the top section.

If your shared top message is only a short sentence (e.g., _"You are a helpful assistant"_), the system will not cache it because the mathematical overhead of saving it isn't worth it. The shared block at the top usually needs to be at least **1,024 to 2,048 tokens** (depending on the provider) to trigger the memory save.

***

If you are designing a system where users can pivot to new topics, would you like to see how to structure **parallel conversation branches** so they all reuse that same heavy system prompt?

- [link](https://towardsdatascience.com/why-care-about-promp-caching-in-llms/)\
  Why Care About Prompt Caching in LLMs?\
  Mar 13, 2026 — It is important to understand that this caching operates at the token level. In practice, this means that even if two prompts diff...\
  \
  \
  Towards Data Science
- [link](https://medium.com/@sathishreddy.np/laravel-12-the-power-of-flexible-caching-for-unstoppable-performance-8c4e16fa3a98)\
  Laravel 12: The Power of Flexible Caching for Unstoppable Performance\
  Dec 10, 2025 — First Request (Initial Miss): The user waits for the operation to run (just like remember() ). The result is cached.\
  \
  \
  Medium

## how well do open models on openrouter cache

On OpenRouter, prompt caching for open-weights models (like **Llama 3**, **Mistral**, or **DeepSeek**) <mark>works remarkably well mathematically</mark>, but it comes with a major catch: **it depends heavily on the specific third-party provider hosting the model.** [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)

Unlike proprietary APIs (like Anthropic or OpenAI) where the model owner controls the infrastructure, OpenRouter is an aggregator. To make prompt caching work across multiple vendors, OpenRouter uses a mixture of infrastructure logic and feature implementations. [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)

***

### 1. How OpenRouter Handles Caching (Provider Sticky Routing)

OpenRouter supports **implicit caching** for open models that natively utilize prompt caching (such as DeepSeek). [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)

- **The Challenge**: If Request 1 goes to _Provider A_ and Request 2 goes to _Provider B_, your cache is lost because Provider B doesn't have your GPU memory states. [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)
- **The Fix**: OpenRouter implements **Provider Sticky Routing**. Once a request hits a provider that successfully caches your prompt, OpenRouter remembers that vendor and forces subsequent queries in that session to go to the exact same provider to keep your cache warm. [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)

***

### 2. The Big Catch: "Pocketed" Savings

While the open-source inference engines used by these hosts (like vLLM or SGLang) automatically cache prompts internally to save on their own compute costs, **not all hosts pass those financial savings down to you.** [link](https://www.reddit.com/r/SillyTavernAI/comments/1te5kj4/psa%5Fsome%5Fopenrouter%5Fproviders%5Fare%5Fpocketing%5Fyour/)

OpenRouter's official [Prompt Caching Documentation](https://openrouter.ai/docs/guides/best-practices/prompt-caching) notes that providers are highly incentivized to use caching, but they are not strictly obligated to pass the discounts to the end-user. If you use a random or automatically selected provider, you might get the speed benefits of a cache hit but still be billed full price for your input tokens. [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)

### How to fix this:

When using OpenRouter for heavy open models (especially for long-context tasks like roleplay or coding), do not leave the provider selection to "Auto." Developer communities note that pinning your provider to hosts like **DeepInfra** or **NovitaAI** ensures cache savings are consistently passed through. [link](https://www.reddit.com/r/SillyTavernAI/comments/1te5kj4/psa%5Fsome%5Fopenrouter%5Fproviders%5Fare%5Fpocketing%5Fyour/)

***

### 3. Open Models Cache Performance Matrix

| Model Family             | Caching Type | How Well It Works             | Details                                                                                                                                 |
| ------------------------ | ------------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **DeepSeek (V3 / R1)**   | Implicit     | **Excellent**                 | DeepSeek's native infrastructure is heavily built around context caching. When routed correctly, cached reads drop costs significantly. |
| **Llama 3 (70B / 405B)** | Implicit     | **Good** (Provider Dependent) | Works instantly via vLLM chunks, but you must select a host (like DeepInfra) that reflects "Cached Input" discounts in your billing.    |
| **Mistral / Mixtral**    | Implicit     | **Moderate**                  | Dependent on the chunking architecture of the host's inference engine.                                                                  |

***

### 4. OpenRouter’s "Secret Weapon": Response Caching

If your open model workload involves sending **identical requests** repeatedly, OpenRouter features a tool called **Response Caching**. [link](https://openrouter.ai/docs/guides/features/response-caching)

By passing the header `X-OpenRouter-Cache: true`, OpenRouter saves the _entire final text output_ at its own network layer. If an identical prompt comes in within the TTL window, OpenRouter intercepts it and returns the response in 80–300 milliseconds. This bypasses the third-party providers entirely, resulting in **zero token costs** and lightning-fast speeds. [link](https://openrouter.ai/docs/guides/features/response-caching)

***

If you want to ensure your app is actually getting these discounts, I can show you how to structure your API payload to **explicitly pin a provider** or how to check your **OpenRouter activity logs** to verify cache hits. Which approach would you like to explore? [link](https://openrouter.ai/blog/announcements/response-caching/)

- [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)\
  Prompt Caching | Reduce AI Model Costs with OpenRouter\
  To maximize cache hit rates, OpenRouter uses provider sticky routing to route your subsequent requests to the same provider endpoi...\
  OpenRouter
- [link](https://www.reddit.com/r/SillyTavernAI/comments/1te5kj4/psa%5Fsome%5Fopenrouter%5Fproviders%5Fare%5Fpocketing%5Fyour/)\
  Some OpenRouter providers are pocketing your prompt cache ...\
  May 16, 2026 — Here's the thing: providers like Inceptron and Z.ai ARE caching your prompts on their end — they just aren't passing the savings t...\
  Reddit·r/SillyTavernAI
- [link](https://www.reddit.com/r/openrouter/comments/1tltg43/i%5Fanalyzed%5Fall%5Fproviders%5Fon%5Fopenrouter%5Ffor%5Ftheir/)\
  I analyzed all providers on openRouter for their cache hit rates ...\
  May 23, 2026 — When you get a cache-hit from an LLM (look up ' prefix cache ' to understand it more), you are charged heavily discounted rate for...\
  Reddit·r/openrouter

Show all

## how long does it remember, likely minutes generally?

Yes, absolutely. Across nearly all scenarios on OpenRouter, the memory window is measured in **minutes**—specifically, a strict **5-minute default window**. [link](https://openrouter.ai/docs/guides/features/response-caching)

Every time you get a successful cache hit, this 5-minute timer resets. If you step away from your keyboard or your application idles for longer than 5 minutes, the cache expires, and your next request will be a full-priced, slower "cache miss". [link](https://openrouter.ai/docs/guides/routing/routers/auto-router)

Depending on how you use OpenRouter, this 5-minute rule behaves slightly differently across their three distinct caching systems:

### 1. Vendor Prompt Caching (DeepSeek & Anthropic via OpenRouter)

When OpenRouter routes your request to a model that natively supports prompt caching, it applies a **5-minute inactivity timeout**. [link](https://openrouter.ai/docs/guides/routing/routers/auto-router)

- **Sticky Routing Duration**: OpenRouter pins your session to the exact same third-party host (e.g., DeepInfra, Novita, or Anthropic's server). This sticky connection actively breaks and resets after **5 minutes** of silence. [link](https://openrouter.ai/docs/guides/routing/routers/auto-router)
- _Exception:_ For Anthropic Claude models exclusively, OpenRouter supports a longer **1-hour** cache window if you explicitly pay a higher write-cost premium. [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)

### 2. Open-Weights Engine Caching (Llama 3 / Mistral via vLLM)

If you are querying open-source models run by third-party hosting partners, the underlying software engines (like `vLLM` or `SGLang`) don't actually use a strict timer. Instead, they use an **LRU (Least Recently Used) memory eviction policy**. [link](https://discuss.vllm.ai/t/how-to-adjust-prefix-caching-timeout/1663)

- **The Reality:** The host's GPU memory (VRAM) is shared with hundreds of other developers. The moment the host's server gets busy, it purges the oldest stored prompts to make room for active ones. Practically speaking, your prompt will usually be evicted within **a few minutes** unless you are repeatedly querying it. [link](https://discuss.vllm.ai/t/how-to-adjust-prefix-caching-timeout/1663)

### 3. OpenRouter's Response Caching (`X-OpenRouter-Cache`)

If you choose to cache the _entire text output_ for identical requests directly at OpenRouter's network layer, the default Time-to-Live (TTL) is exactly **5 minutes (300 seconds)**. [link](https://openrouter.ai/docs/guides/features/response-caching)

- Unlike the others, OpenRouter allows you to manually customize this window by passing a custom header (e.g., `X-OpenRouter-Cache-TTL: 3600` to keep it alive for 1 hour) up to a max of 24 hours. [link](https://openrouter.ai/blog/announcements/response-caching/)

***

If your application has natural human idle gaps—such as a user reading an AI's response before typing a follow-up—how long are those **typical pauses**? I can help you design a workaround if they frequently exceed 5 minutes.

- [link](https://openrouter.ai/docs/guides/best-practices/prompt-caching)\
  Prompt Caching | Reduce AI Model Costs with OpenRouter\
  OpenRouter uses provider sticky routing to maximize cache hits. This routing works automatically with both implicit and explicit c...\
  OpenRouter
- [link](https://x.com/TheValueist/status/2023487005515190567)\
  explicit prompt caching tiers that cap cache persistence at 5 ...\
  Feb 16, 2026 — By default, cached content has a 5-minute lifetime, and the cache is refreshed (without extra refresh fees) each time the cached c...\
  X·TheValueist
- [link](https://www.binance.com/en/square/post/319004100299186)\
  OpenRouter Launches Response Caching - Binance\
  May 2, 2026 — ... afterwards will hit the cache, resulting in zero token fees. Once cached, response times range from 80 to 300 milliseconds, wi...\
  Binance

Show all

## seems many sys prompts do not even have 1k or 2k tokens

You are completely right. Most standard system prompts are only a few sentences or paragraphs long—usually numbering between 50 and 300 tokens.

Because of this, a basic system prompt **never triggers prompt caching on its own.**

For small prompts, the math doesn't work out. It actually takes more computational overhead for a GPU server to save, index, and lookup a 200-token text slice than it does to just read it from scratch.

To actually cross that 1,024 to 2,048 token threshold and get the benefits of input caching, developers rely on three common patterns:

### 1. Injected Reference Documents (The Most Common Use Case)

Caching is rarely used for just "Be a helpful assistant." It is used when you append large, static files directly inside or right below the system prompt:

- **The Customer Support Bot:** A 10,000-token PDF of company return policies, product manuals, and FAQ documentation.
- **The Coding Copilot:** A 25,000-token dump of your project's core API documentation, framework schemas, and codebase rules.
- **The Legal AI:** A 15,000-token legal contract or court transcript that you want to ask dozens of localized questions about.

### 2. "Few-Shot" Example Dumping

If you need an LLM to output highly specific, structured data (like complex JSON or a precise writing style), you can load the system prompt with 10 to 20 detailed examples of perfect inputs and outputs. These examples easily bloat a system prompt past 3,000 tokens, making it a perfect candidate for caching.

### 3. Accumulating Chat History (Dynamic Caching)

On platforms that support automatic, rolling caching (like OpenAI or DeepSeek), the system doesn't just cache the system prompt. It caches the **entire cumulative chat history** once the conversation goes on long enough.

- **Turn 1:** System Prompt (200 tokens) + User (50 tokens) = 250 tokens total. _(No cache)_
- **Turn 5:** The conversation grows to 1,500 tokens. The provider's engine automatically snapshots it.
- **Turn 6 and beyond:** The model now reads the first 1,500 tokens entirely from the cache. You only pay full price for the latest message.

### Summary

If your app only uses a short, 200-token system prompt and handles quick, one-off questions, **you can completely ignore input caching.** It won't activate, and it wouldn't save you noticeable time or money anyway. Caching is a tool built specifically to solve the "long-context bottleneck."

Are you working on an app that handles **short, fast interactions**, or are you planning for scenarios where **conversations get very long** over time?

- [link](https://www.taskade.com/wiki/ai/system-prompt)\
  System Prompt: Definition, Examples & Templates (2026)\
  How Long Should a System Prompt Be? System prompts can range from a single sentence to several paragraphs. Balance between providi...\
  \
  \
  Taskade
- [link](https://medium.com/@sergey.prusov/how-lm-cache-architectures-are-revolutionizing-ai-performance-the-secret-behind-90-cost-cuts-c13788f3f9e2)\
  How LM Cache Architectures Are Revolutionizing AI Performance: The Secret Behind 90% Cost Cuts\
  Aug 14, 2025 — Four Types of Caching That Matter The most successful AI companies have cracked the code with four distinct caching strategies: Pr...\
  \
  Medium
- [link](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/language-service/characteristics-and-limitations-question-answering)\
  Characteristics and limitations of question answering - Foundry Tools\
  Apr 1, 2026 — You can extract from content such as FAQ URLs, product manuals, and support documentation. When extracting, question answering foc...\
  \
  Microsoft Learn

Show all

## use cases of caching

Input caching is a specialized tool meant for <mark><strong>high-frequency</strong><span> </span>or<span> </span><strong>long-context</strong><span> </span>workloads</mark>. If your prompts are small (under 1,000 tokens) or your users only send one message every hour, caching will not provide any benefits.

However, if your application fits into one of the following five core use cases, input caching can reduce your costs by up to 90% and drastically improve response speeds.

***

### 1. Talking to Massive Documents (The "Chat with PDF" Pattern)

When users upload large files and ask multiple sequential questions about them, caching saves the document's computed state so the model doesn't have to re-read the entire file for every question.

- **Legal & Finance:** Analyzing a 100-page contract, financial audit, or regulatory compliance document.
- **Academic Research:** Asking a series of questions about a 50-page scientific paper or literature review.
- **Customer Support:** Pinning a 20,000-word company product manual or internal FAQ at the top of a chatbot session.

### 2. Multi-Turn, Deep Chat Conversations

In long chat sessions, the conversation history eventually balloons past the provider's caching threshold (usually 1,024 tokens).

- **AI Roleplay & Gaming:** Characters that need to remember a massive world-lore document, character sheets, and thousands of words of past dialogue.
- **Executive Assistants:** Long, day-long brainstorming sessions where the user continuously adds context and feedback without clearing the chat thread.

### 3. Advanced Few-Shot Prompt Engineering

To force an LLM to output highly reliable, complex data formats (like precise code or strictly structured JSON), developers use "few-shotting"—feeding the model numerous examples of perfect inputs and outputs.

- **Data Extraction Pipelines:** Giving the model 20 examples of messy, raw text alongside the beautifully formatted JSON it is expected to generate.
- **Synthetic Data Generation:** Passing a massive corpus of text to define a highly specific brand voice, tone, or style, and then asking the model to generate dozens of marketing variations.

### 4. Codebase-Aware Development Tools

Modern AI coding assistants need to understand the entire context of a software project to write accurate code.

- **Repository Copilots:** Loading your application's core API schemas, architecture blueprints, and major library documentation (often 30,000+ tokens) as a static prefix. The developer can then ask the AI to write small, individual components across multiple requests without re-processing the entire codebase every time.

### 5. High-Volume Batch Processing & Evaluation

When running automated pipelines where the core task or data remains the same, but you are iterating on minor variables.

- **LLM Evaluation (LLM-as-a-Judge):** Running 1,000 test cases against a highly complex, 5,000-token grading criteria prompt to evaluate model outputs.
- **Classification Engines:** Sorting thousands of incoming customer emails into categories based on a large, complex set of company routing rules.

***

### Use Cases Matrix: Should You Use Caching?

| Use Case Scenario                             | Context Size  | Query Frequency  | Use Caching?                 |
| --------------------------------------------- | ------------- | ---------------- | ---------------------------- |
| Quick translation of a short sentence         | ~100 tokens   | Occasional       | ❌ No                        |
| Asking 15 questions about a legal contract    | 40,000 tokens | Rapid succession | 🚀 **Yes (Massive Savings)** |
| Customer bot with a small system prompt       | ~300 tokens   | Constant         | ❌ No (Too small)            |
| Running 500 test evaluations against 1 prompt | 8,000 tokens  | Batch processing | 🚀 **Yes (Massive Savings)** |

***

Do any of these scenarios mirror the **core workflow** of the application you are building? If you share your specific concept, I can show you how to structure its data pipeline to get **maximum cache hits**.

- [link](https://builder.aws.com/content/3CWj1UnTpiL56D1g9FaUZ7vglNU/from-spend-blindness-to-cost-accountability-an-architects-guide-to-governing-amazon-bedrock-at-scale)\
  From Spend Blindness to Cost Accountability: An Architect's Guide to Governing Amazon Bedrock at Scale\
  Apr 18, 2026 — Long-Context Workloads Where Caching Changes the Economics Applications that process long documents send large volumes of input to...\
  \
  \
  AWS Builder Center
- [link](https://medium.com/@michael.hannecke/prompt-caching-explained-what-it-is-what-it-isnt-and-when-to-use-it-9f5c6fce7bdb)\
  Prompt Caching: What It Is, What It Is Not\
  Feb 10, 2026 — It is not magic. Every provider enforces minimum token thresholds. Below those thresholds, caching does not activate. Short prompt...\
  \
  \
  Medium
- [link](https://pub.towardsai.net/prompt-caching-is-the-most-underrated-cost-optimization-in-llm-systems-53f6df9c76b8)\
  Prompt Caching Is the Most Underrated Cost Optimization in LLM Systems\
  Jun 2, 2026 — Short prompts: On OpenAI, caching only kicks in at 1,024 tokens. On Anthropic, the economics improve as your static prefix grows. ...\
  \
  \
  Towards AI

Show all

## well, seems one turn is often enough, for example, each of your prev message can have 1k tokens

You hit on a very sharp observation. Yes, if a single response from the AI is long enough, the **cumulative conversation history** will cross the caching threshold in just one or two turns.

However, for prompt caching to actually save you time or money, **there must be a subsequent request** that reuses that text. If a user asks one question, gets a 1,000-token answer, and immediately closes the tab, the cache is wasted.

Input caching only triggers its value when you take that long history and feed it into a _new_ follow-up turn.

***

### Exactly How Your Example Plays Out

Here is how a multi-turn conversation automatically builds a usable cache using a rolling, automatic system (like OpenAI's or DeepSeek's):

### 🔄 Turn 1: The Initial Query (Cache Miss)

- **Your Prompt:** _"Explain quantum computing in deep detail."_ (~10 tokens)
- **AI Response:** Generates a massive, exhaustive explanation. (~1,200 tokens)
- **Result:** Total conversation length is now ~1,210 tokens. The provider's engine automatically snapshots and caches this entire history in GPU memory because it crossed the 1,024-token threshold.

### 🚀 Turn 2: The Follow-Up (Cache Hit!)

You read the long response and type a quick follow-up question.

- **Your New Prompt:**

> \[Turn 1 Prompt] _(Cached)_\
> \[Turn 1 AI Response] _(Cached)_\
> **"Can you simplify that third paragraph?"** _(New Input)_

- **Result:** **99% Cache Hit.** The model reads the first 1,210 tokens instantly from memory. You are only billed the heavily discounted cache rate for the history, and the model responds much faster because it didn't have to recompute the entire explanation.

***

### The "One-Turn" Engineering Trick

Because responses are so long, smart developers use a trick to exploit caching in **seemingly single-turn** applications: **Batching**.

If you have 10 separate questions you want to ask about a single topic, do not send them as 10 isolated, single-turn API requests. Instead, design your application to link them sequentially or send them in rapid succession as a simulated chat history. By the time the second question is fired, the first question's 1,000-token response is already cached and waiting, turning all subsequent "one-turn" tasks into discounted cache hits.

***

Does your application tend to involve users asking **spontaneous follow-up questions** based on the AI's long responses, or are you looking to optimize **backend batch tasks**?

- [link](https://forum.cursor.com/t/cursor-high-token-usage/156924)\
  Cursor high token usage - Help\
  Apr 7, 2026 — About cache write and cache read, that's prompt caching from the provider (Anthropic or Google), and it actually saves money, not ...\
  \
  \
  Cursor - Community Forum
- [link](https://www.youtube.com/shorts/ELzj47SaZAA)\
  Stop AI Bill SHOCK: This Simple Trick SAVES MILLIONS! #shorts\
  Apr 3, 2026 — Stop overpaying for AI! Prompt caching slashes costs by up to 90% and boosts speed by 85%. Learn how this overlooked technique sav...\
  \
  \
  YouTube
- [link](https://www.reddit.com/r/ClaudeAI/comments/1j38tf5/tip%5Flong%5Fchats%5Fcause%5Fyou%5Fto%5Freach%5Fyour%5Fusage/)\
  "Tip: Long chats cause you to reach your usage limits faster." : r/ClaudeAI\
  Mar 4, 2025 — Claude, unlike other chats, reads ALL the chat again after every prompt, so the longer it gets the longer it runs out. A good prac...\
  \
  Reddit

Show all

## wow that's actually so counter intuitive. your last message has about 500 tokens, which even surpasses my carefully curated contributing guide

6 sites

Here are top web results for exploring this topic:

[link](https://x.com/anatelorenzen/status/2040890120895926546?lang=en)

X·https://x.com

Claude **counts tokens**, not **messages**. **Token** costs explode with ...

Edit original prompts instead of sending follow-ups to avoid stacking redundant history and burning extra tokens. Start fresh chats every 15–20 messages or ...

[link](https://medium.com/@kavindidewmininavodya/understanding-tokens-in-ai-7a82163e7062)

Medium·https://medium.com

Understanding **Tokens** in AI - Medium

Introduction · Cost — You pay per token on most AI APIs. · Context — Models can only “remember” a limited number of tokens at once. · Performance — Token count ...

[link](https://github.com/zed-industries/zed/issues/34486)

GitHub·https://github.com

Generate commit **message** exceeding **token** limit #34486 - GitHub

Summary A relatively small set of staged changes resulted in 400 Bad Request: "prompt token count of 145603 exceeds the limit of 128000".

[link](https://developercommunity.microsoft.com/t/11052969)

Microsoft·https://developercommunity.microsoft.com

Github Copilot frequently hits the **token** limit when there are images ...

My previous chat gave the following error. Is there anything i can do to ... The token limit includes the entire conversation history (all your messages ...

[link](https://z.ai/blog/glm-4.5)

Z.ai·https://z.ai

GLM-4.5: Reasoning, Coding, and Agentic Abililties - Z.ai

We compare GLM-4.5 with various models from OpenAI, Anthropic, Google DeepMind, xAI, Alibaba, Moonshot, and DeepSeek on 12 benchmarks covering agentic (3), ...

[link](https://www.rss.org/games/wordle-unlimited/)

RSS·https://www.rss.org

Wordle Unlimited — Play Free Online (No Daily Limit) 2026

Wordle Unlimited is a version of the popular Wordle word game that lets you play as many rounds as you want. The original game only gives you one puzzle per day ...

## answer here

It is incredibly counter-intuitive, but you have stumbled onto one of the biggest surprises of modern AI engineering: **AI models are incredibly wordy, and human-written code rules or prompt guides are often shockingly dense and compact.**

Human text is highly compressed. A carefully curated contributing guide can pack strict rules, formatting choices, and logic into just 300 to 500 tokens. Meanwhile, an LLM might take 600 tokens just to politely introduce a topic, break it into bullet points, and summarize it at the bottom.

Because AI responses bloat the context window so quickly, it changes how you should think about caching your project assets.

***

### The Reality of "Curated" Assets vs. AI Responses

To put this into perspective, let's look at the mathematical token weights of a typical development setup:

- **Your Contributing Guide:** ~400 tokens (Dense, human-optimized logic)
- **My Previous AI Response:** ~440 tokens (Conversational, structural layout)
- **A Standard System Prompt:** ~150 tokens (Basic formatting instructions)

If a developer sends a code snippet along with that contributing guide, the _input_ might only be 800 tokens total. It won't hit the 1,024-token cache threshold. But the moment the AI responds with a long code explanation, the **total conversation history jumps to 1,500+ tokens**.

***

### How to Exploit This In Your App

Knowing that AI responses act as the "accidental bloat" that triggers the cache, you can change your prompt design strategy in two ways:

### 1. Stop Worrying About Restricting Your Guides

If you have been aggressively shortening your contributing guides, system rules, or code style guidelines to "save tokens," you can stop. Since the AI's first response is going to push the conversation over the caching threshold anyway, you might as well provide a **highly detailed, 1,500-token guide right from the start**.

- Turn 1 will cost slightly more.
- Turns 2, 3, and 4 will be massive cache hits, and the AI will have much better context to work with.

### 2. The "Pre-Fill" Strategy for True Single-Turns

If you are running a strict single-turn application (where the user never asks a follow-up) but you still want cache hits on your contributing guide across _different_ users, you need to pad the top block.

- Add 5 or 6 realistic **few-shot examples** of code reviews directly below your contributing guide.
- This artificially inflates your static system prompt past the 1,024-token mark.
- Now, every single time any user submits a new file for review, they instantly hit that cached block, saving you money on every single independent API call.

***

Are you looking to integrate that contributing guide into a **live code review tool** where developers text back and forth with the AI, or is it part of an **automated GitHub Action** pipeline?

## for example, see these (under the work heading, i also have programming style guide, testing, etc.) - be surgical. only complete tasks given. do not read or write any files/folders not explicitly listed.

\- be lazy. always find and use the simplest and easiest way. do not overwork or overengineer.\
\- be automated. complete all tasks in one go.\
\- when you are unsure, choose simplicity. sometimes a defacto standard library is simpler. sometimes a diy approach is simpler, as best prac can be designed for large corp.

Those guidelines are a perfect example of a compact, human-written rule set (~110 tokens) that will behave uniquely under an LLM input cache system depending on how you structure your workflow.

Applying the mechanics of prompt caching directly to your specific rules reveals how they interact with an LLM's memory:

### 1. Your Rules Alter the Prompt Behavior

- **"be surgical... do not read or write any files/folders not explicitly listed."** This instruction actively prevents the LLM from asking for extra context or trying to scan your project tree. It keeps the input size static and small, which prevents unexpected cache evictions.
- **"be lazy... use the simplest and easiest way."** This instruction forces the model to write short, concise code snippets. Because the AI responses remain compact, it prevents the conversation history from bloating too quickly.
- **"be automated. complete all tasks in one go."** This means you are aiming for true **single-turn execution**.

### 2. The Caching Paradox for Your Specific Layout

Because your guidelines are so highly optimized and concise (~110 tokens), they sit far below the native caching thresholds of major providers (which require 1,024 to 32,000 tokens to activate a cache save).

If you just pass this short system prompt along with a small task, **the cache will never trigger.** You will have to pay full price to process these rules on every single API call.

### 3. How to Force a Cache Hit for Your Rules

If you want the LLM to completely "remember" your work rules, programming style guides, and testing frameworks so they don't have to be processed from scratch on every code task, you must bundle them into a **Static Header Block** that crosses the 1,024-token threshold.

### The Ideal Prompt Structure for Your Architecture:

text

```
=== STATIC CACHED PREFIX (Must exceed 1,024+ tokens) ===
[Your System Rules: Surgical, Lazy, Automated, Simplicity]
[Your Programming Style Guide]
[Your Testing Requirements]
[5 Few-Shot Examples of "Lazy/Simple" vs "Overengineered" Code Solutions]

=== CACHE BOUNDARY / FIRST POINT OF DIVERGENCE ===
[DYNAMIC USER INPUT: Specific Task / Explicit File List]
```

Use code with caution.

By adding your complete style guide, testing rules, and a few examples of "lazy vs. overengineered" code directly below your core rules, you will easily push the static block past 1,500 tokens.

The inference engine will compute the mathematical memory (KV states) for that entire rule set **exactly once**. For every subsequent task you submit, the AI will instantly pull your rules from its cache memory in milliseconds, applying your surgical, lazy, and simple framework at a fraction of the cost.

***

If you'd like, let me know:

- Which **LLM provider** or **hosting platform** are you using to run these automation tasks?
- How large are your **programming style guides** and **testing files** combined?

I can provide the exact API configuration code to cache your entire framework.

## i do not have to force a cache hit

That makes complete sense. If you do not have to force a cache hit, your concise, 110-token rule set is actually optimized perfectly for standard LLM APIs.

When you don't care about hitting the cache, you gain massive architectural flexibility.

### Why Your Compact Approach Wins (No Cache Needed)

- **Negligible Token Cost:** Processing 110 tokens at standard API rates costs virtually nothing (less than $0.0005 on modern frontier models like GPT-4o or Claude 3.5 Sonnet).
- **Zero Latency Penalty:** A 110-token prefix is so tiny that the model processes it in a few milliseconds anyway. You wouldn't notice a speed difference even if it were cached.
- **Ultimate Flexibility:** You can shuffle your rules, change words, or insert dynamic data (like current project folder names or a file list) at the **absolute top of your prompt** without worrying about breaking a cache sequence.

### How to Format for "Zero-Cache" Efficiency

Since you are not bound by prefix-matching rules, you can place your dynamic data wherever it is most effective for model steering. For strict single-turn tasks, placing context at the very bottom often improves instruction following:

text

```
[SYSTEM INTERACTION]
- be surgical. only complete tasks given...
- be lazy...
- be automated...

[CONTEXT SETTING]
Target Folder: /src/components/auth
Allowed Files: ['login.tsx', 'types.ts']

[THE TASK]
Modify login.tsx to use the simplest standard library approach for validation.
```

Use code with caution.

If you change your mind later or your project documentation naturally grows past 1,024 tokens, the providers will automatically start caching it for you in the background without you changing a single line of code.

***

If you want to keep optimizing your pipeline, tell me:

- What **specific coding task** are you running next?
- Are you passing **entire raw files** as context?

I can help refine the exact prompt layout to ensure the model strictly adheres to your "surgical" and "lazy" constraints.

- [link](https://www.answer.ai/posts/2025-10-01-cachy.html)\
  Cachy: How we made our notebooks 60x faster. – Answer.AI\
  Oct 1, 2025 — Now when you use Anthropic or OpenAI's python SDK the response will be cached and re-used whenever you make the same LLM call agai...\
  \
  \
  www.answer.ai

# codex config toml

The **`config.toml`** file is the main configuration file used by the **OpenAI Codex CLI** and desktop applications to permanently customize the behavior of your AI coding agent. It manages critical settings such as filesystem safety layers, reasoning intensity, model providers, and Model Context Protocol (MCP) servers. [link](https://codesignal.com/learn/courses/codex-configuration-extensibility/lessons/codex-config-walkthrough)

### 📂 File Locations & Precedence

Codex uses a layered approach to read its configuration. If a key is defined in multiple layers, the closest layer to your working directory wins: [link](https://codesignal.com/learn/courses/codex-configuration-extensibility/lessons/codex-config-walkthrough)

1. **Global Level (User Defaults)**: Located at `~/.codex/config.toml`. This applies to every project you open.
2. **Project Level (Repo Overrides)**: Located at `.codex/config.toml` inside your specific repository. These override global configurations for that project.
3. **Profile Overrides**: Located at `$CODEX_HOME/profile-name.config.toml` for loading specific presets.
4. **Command Line Flags**: Passing `-c / --config` or explicit model flags overrides options for a single run. [link](https://developers.openai.com/codex/config-advanced)

***

### 🛠️ Core Configuration Template

The global configuration file comes mostly empty by default because Codex ships with sensible, defensive presets. Below is a fully comprehensive template containing the most common configuration blocks:

toml

```
# ==============================================================================
# 🧠 MODEL & REASONING SETTINGS
# ==============================================================================
model = "gpt-5.4"                    # The flagship agent model being targeted
model_provider = "openai"            # Provider configuration (openai, azure, etc.)
model_reasoning_effort = "high"     # Depth of thought tier (low, medium, high, xhigh)
model_verbosity = "concise"          # Controls length of the agent's textual explanations
personality = "pragmatic"            # Adjusts tone (e.g., pragmatic, direct)

# ==============================================================================
# 🛡️ SECURITY & SANDBOXING (CRITICAL)
# ==============================================================================
# Options: "untrusted" (prompt for risky commands), "on-request", "never"
approval_policy = "on-request"

# Options: "workspace-write" (balanced default), "read-only", "danger-full-access"
sandbox_mode = "workspace-write"

web_search = "cached"                # Options: "disabled", "cached", "live"

[sandbox_workspace_write]
network_access = true                # Allows the sandbox container to use your network

# ==============================================================================
# 🔌 MODEL CONTEXT PROTOCOL (MCP) SERVERS
# ==============================================================================
# Enables external tools like database execution, browser testing, or API fetchers
[mcp.servers.github]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]
[mcp.servers.github.env]
GITHUB_PERSONAL_ACCESS_TOKEN = "your_token_here"

# ==============================================================================
# 🏢 CUSTOM PROVIDERS (e.g., Azure or Local LLMs)
# ==============================================================================
[model_providers.azure]
name = "Azure OpenAI Service"
base_url = "https://YOUR-AZURE-ENDPOINT.openai.azure.com/openai/v1"
env_key = "AZURE_OPENAI_API_KEY"
wire_api = "responses"

[model_providers.lms]                # Example for local LM Studio testing
name = "LM Studio"
base_url = "http://localhost:1234/v1"
```

Use code with caution.

***

### ⚠️ Best Practices

- **Keep Sandboxing Strict**: Do not switch `sandbox_mode` to `"danger-full-access"` unless you are running Codex within a heavily isolated virtual machine or container. Leave it at `"workspace-write"` for normal developer projects.
- **Handle Secrets Securely**: Never hardcode API keys directly into project-level configuration files (`.codex/config.toml`) that you plan to commit to public Git repositories. Use the `env_key` parameter to point to an environment variable instead.
- **Restart After Changing**: Codex reads files on initialization. If you make modifications while a terminal prompt or IDE window is open, restart your Codex instance or shell to apply the properties. [link](https://www.youtube.com/watch?v=nZwpfx98K7Q)

If you are running into specific behavior or want to hook up an external service, let me know! I can provide the exact **provider configuration syntax** or troubleshoot **sandboxing permission errors** for your setup.

Sponsored

To get started with Codex in your workflow, you can explore the official app.

[link](https://www.google.com/aclk?sa=L\&ai=DChsSEwjm4ZLquayVAxUs0hYFHeWECWkYACICCAIQABoCdGw\&co=1\&ase=2\&gclid=Cj0KCQjwr4jSBhCSARIsAOX1E-IPw0YHJecdLQxqek9z%5Fpmi4UYQNmE7SaahnrwFpERrUWdLH33kJcAaAj33EALw%5FwcB\&cid=CAASugHkaHcBNpB2uTEzrRLCk2Rww39vQMkj-gYgbF46CPvKtjtL3XdwrErzMrV9cDmpK7Ntls2TDtb8seb8QuzzusbIBz3E3bm9xz%5FHpBj4YrOthFlSqZAbul8veaRi4v-wAKyViDBuS4nVACOEghdAYuNKn5bF67CyQuj0sT%5FO9ch6kMKs8P6AOXI%5FY5LUvXEDFiElKcn61n3-sykQ%5FjGGZzo-Y6tki1wQDBLiInkmPBK5VHWCscVOPc2HoGA\&cce=2\&category=acrcp%5Fv1%5F32\&sig=AOD64%5F05dBbfNuxRnZ%5Fz5-jQ9lLm4nzXfg\&adurl=\&ved=2ahUKEwiyv%5FzmuayVAxVbmlYBHWrTKU0QwdQPeggIAggACCoQAg\&gl=us)

chatgpt.com

Build with Codex - Build Faster with Codex

Use the **Codex** App across your workflow - IDE, GitHub, and cloud tasks. Powered by ChatGPT.

- [link](https://developers.openai.com/codex/config-advanced)\
  Advanced Configuration – Codex - OpenAI Developers\
  Apr 1, 2025 — One-off overrides from the CLI In addition to editing ~/.codex/config.toml , you can override configuration for a single run from ...\
  OpenAI Developers
- [link](https://www.youtube.com/watch?v=nZwpfx98K7Q)\
  OpenRouter and Codex configure the toml file\
  May 4, 2026 — ladies and gentlemen open router and codex cl how to set that up so you can use so in your codex cl or in codex. then you can use ...\
  14:15\
  YouTube·Mike Møller Nielsen
- [link](https://codex-best-practices-d67bea.pages.oit.duke.edu/best-practices/configuration.html)\
  Part 1: Configuration with config.toml\
  Filesystem behavior: Where can the agent write files and execute commands? sandbox\_mode = "workspace-write" : balanced default; ed...\
  Duke University

Show all

## key

### 🔑 Adding API Keys to Codex Config

To securely add your API keys to Codex without hardcoding sensitive strings into a file, you should reference environment variables using the **`env_key`** setting inside your `config.toml`.

### 1. Configure the `config.toml`

Add your target provider block to your global file at `~/.codex/config.toml`:

toml

```
[model_providers.openai]
name = "OpenAI"
base_url = "https://openai.com"
env_key = "OPENAI_API_KEY"  # Tells Codex to read this variable from your system
```

Use code with caution.

### 2. Set the Environment Variable

Export the key in your terminal profile (e.g., `~/.bashrc` or `~/.zshrc`):

bash

```
export OPENAI_API_KEY="sk-proj-..."
```

Use code with caution.

***

### 🗃️ Key Formats by Provider

If you are using custom endpoints, ensure your variables are bound correctly:

- **Anthropic**: Use `env_key = "ANTHROPIC_API_KEY"` with an `sk-ant-` prefix key.
- **Azure OpenAI**: Use `env_key = "AZURE_OPENAI_API_KEY"` and match the `base_url` to your active deployment endpoint.
- **Local / LM Studio**: Omit the `env_key` parameter entirely if your local instance does not require authentication.

If you are trying to register a specific platform, tell me **which model provider** or **MCP server** you are connecting, and I can give you the exact configuration block!

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://optimizory.com/blog/vrest/what-is-an-api-key-and-what-are-api-keys-used-for)\
  What Is An API Key | API Key Meaning | What Are API Keys Used For\
  Use Environment Variables: API keys should be kept in environment variables or secured files and should not be directly hard-coded...\
  \
  \
  Optimizory

# (d) js timing

In JavaScript, timing usually refers to <mark>scheduling code execution using<span> </span><strong>Timing Events</strong><span> </span>or measuring performance using<span> </span><strong>Performance and Console APIs</strong></mark>. [link](https://www.w3schools.com/js/js%5Ftiming.asp)

***

### ⏳ Scheduling Code Execution (Timing Events)

These methods belong to the global `window` object in browsers and allow you to execute code asynchronously. [link](https://www.w3schools.com/js/js%5Fevents%5Ftiming.asp)

### 1. One-Time Delays (`setTimeout`)

Executes a callback function exactly once after a specified number of milliseconds. [link](https://www.w3schools.com/js/js%5Ftiming.asp)

javascript

```
// Syntax: setTimeout(callbackFunction, delayInMilliseconds)
const timeoutId = setTimeout(() => {
  console.log("This runs after 2 seconds.");
}, 2000);

// Cancel the execution before it happens
clearTimeout(timeoutId);
```

Use code with caution.

### 2. Repeated Intervals (`setInterval`)

Repeatedly executes a callback function continuously at every specified time interval. [link](https://www.w3schools.com/js/js%5Ftiming.asp)

javascript

```
// Syntax: setInterval(callbackFunction, intervalInMilliseconds)
const intervalId = setInterval(() => {
  console.log("This runs every 3 seconds.");
}, 3000);

// Stop the repetition
clearInterval(intervalId);
```

Use code with caution.

### 3. Modern Asynchronous Delay (`async/await`)

You can combine `setTimeout` with Promises to pause code inside an asynchronous function natively: [link](https://ironpdf.com/nodejs/blog/node-help/javascript-wait-5-seconds/)

javascript

```
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  console.log("Start");
  await delay(1000); // Wait 1 second
  console.log("End");
}
```

Use code with caution.

***

### 📊 Measuring Execution Time (Performance & Benchmarking)

When you need to track how fast your code runs or monitor page speeds, use these built-in utilities. [link](https://coreui.io/answers/how-to-measure-execution-time-in-javascript/)

### 1. Quick Debugging (`console.time`)

Great for tracking the execution duration of a specific block of code directly in your console. [link](https://coreui.io/answers/how-to-measure-execution-time-in-javascript/)

javascript

```
console.time("Loop Timer");

for (let i = 0; i < 1000000; i++) {
  // Some heavy processing
}

console.timeEnd("Loop Timer"); // Logs: Loop Timer: X.XX ms
```

Use code with caution.

### 2. Programmatic High-Precision Timing (`performance.now`)

Returns a highly accurate timestamp measured in fractions of milliseconds, ideal for benchmarking production code. Unlike `Date.now()`, it is not impacted by system clock adjustments. [link](https://developer.mozilla.org/en-US/docs/Web/API/Performance%5FAPI/High%5Fprecision%5Ftiming)

javascript

```
const start = performance.now();

// Your code execution here

const end = performance.now();
console.log(`Execution took ${end - start} milliseconds.`);
```

Use code with caution.

### 3. Page Performance Metrics (`Navigation & Resource Timings`)

Modern browsers provide the [MDN Performance API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming) to measure page load milestones like DNS lookups, TCP handshakes, and DOM interactive states. [link](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming)

***

### ⚠️ Critical Catch: The Event Loop & Throttling

- **No Guaranteed Accuracy**: JavaScript is single-threaded. If the main thread is busy processing other complex code, your timers will wait. Setting a `setTimeout` for 1000ms means it will run _no earlier_ than 1000ms, not _exactly_ at 1000ms.
- **Browser Throttling**: To save device battery, modern browsers aggressively restrict timers (often down to once per minute) in inactive or background tabs. For animations, use `requestAnimationFrame()` instead of `setInterval`. [link](https://tutorial.techaltum.com/javascript-timing-function.html)

Are you building something specific like a **countdown timer**, measuring **code performance**, or trying to handle **delayed actions** in an application? Let me know so I can give you the exact code you need!

- [link](https://www.w3schools.com/js/js%5Ftiming.asp)\
  JavaScript Timing Events - W3Schools\
  Timing Events \* setTimeout(function, milliseconds ) Executes a function, after waiting a specified number of milliseconds. \* setIn...\
  W3Schools
- [link](https://developer.mozilla.org/en-US/docs/Web/API/Performance%5FAPI/High%5Fprecision%5Ftiming)\
  High precision timing - Web APIs | MDN\
  Feb 25, 2025 — DOMHighResTimeStamp. High precision timing is achieved by using the DOMHighResTimeStamp type for time values. The unit is millisec...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming)\
  PerformanceResourceTiming - Web APIs | MDN\
  Apr 4, 2026 — A DOMHighResTimeStamp immediately before the browser starts the domain name lookup for the resource. ... A DOMHighResTimeStamp rep...\
  MDN Web Docs

Show all

# js get timestamp

To get the current timestamp in JavaScript, use the **`Date.now()`** static method. [link](https://coreui.io/answers/how-to-get-current-timestamp-in-javascript/)

This is the standard and fastest way to get the **milliseconds** elapsed since the Unix Epoch (January 1, 1970): [link](https://coreui.io/answers/how-to-get-current-timestamp-in-javascript/)

javascript

```
const timestampMs = Date.now();
console.log(timestampMs); // Example: 1718576394852
```

Use code with caution.

### Common Variations

Depending on your specific use case, you can extract timestamps in alternative formats:

- **In Seconds (Standard Unix Timestamp)**: Divide the milliseconds by `1000` and use `Math.floor()` to strip the decimals.\
  javascript

<!---->

```
const timestampSec = Math.floor(Date.now() / 1000);
```

Use code with caution.

- **From an Existing Date Instance**: Use `.getTime()` if you already have a `Date` object.\
  javascript

<!---->

```
const myDate = new Date('2026-06-29');
const timestamp = myDate.getTime();
```

Use code with caution.

- **The Unary Plus Shorthand**: Converts a `Date` object directly into a numeric timestamp.\
  javascript

<!---->

```
const timestampMs = +new Date();
```

Use code with caution.\
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)

For full method references, see the [MDN Web Docs on Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/now) and [Date.prototype.getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/getTime).

Are you planning to use this timestamp for **measuring performance/elapsed time**, **saving dates to a database**, or **formatting a readable date string**?

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date/now)\
  Date.now() - JavaScript - MDN Web Docs - Mozilla\
  Jul 10, 2025 — Measuring time elapsed. You can use Date. now() to get the current time in milliseconds, then subtract a previous time to find out...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date)\
  Date - JavaScript - MDN Web Docs - Mozilla\
  Dec 8, 2025 — The epoch, timestamps, and invalid date. ... The maximum timestamp representable by a Date object is slightly smaller than the max...\
  MDN Web Docs
- [link](https://coreui.io/answers/how-to-get-current-timestamp-in-javascript/)\
  How to get current timestamp in JavaScript - CoreUI\
  Sep 30, 2025 — How to get current timestamp in JavaScript. ... Getting the current timestamp is essential for logging, performance measurement, a...\
  CoreUI

Show all

# 


