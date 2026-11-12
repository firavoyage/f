# should llm thinking be included in subsequent messages

**No, LLM thinking blocks should generally be stripped from subsequent messages in standard multi-turn conversations, with one major exception: active tool-calling loops.**

In standard chat interfaces and API workflows, keeping previous `<think>` blocks or reasoning traces in the chat history quickly bloats the context window, increases token costs, and adds latency without improving the quality of later responses. However, when an LLM is actively executing tools across multiple steps within a single turn, preserving its reasoning trace is often required to maintain logic and prevent errors. [](https://www.reddit.com/r/LocalLLaMA/comments/1lvcyvf/is%5Fknowledge%5Ffound%5Fin%5Fthe%5Fthinking%5Ftaken%5Finto/)

### Standard Multi-Turn Conversations (Strip Thinking)

For normal back-and-forth messaging, you should pass only the final assistant response back into the conversation history. [](https://www.reddit.com/r/LocalLLaMA/comments/1lvcyvf/is%5Fknowledge%5Ffound%5Fin%5Fthe%5Fthinking%5Ftaken%5Finto/)

* **Context Bloat and Costs.** Thinking traces are often much longer than the final answer, meaning retaining them rapidly fills your context window and multiplies input token costs on every new turn. [](https://bdtechtalks.com/2026/06/15/llm-chain-of-thought-limitations/)
* **Attention Dilution.** Models are trained to generate fresh reasoning for each new prompt, so old scratchpad notes act as noise that can distract the model from your latest instructions. [](https://www.reddit.com/r/LocalLLaMA/comments/1lvcyvf/is%5Fknowledge%5Ffound%5Fin%5Fthe%5Fthinking%5Ftaken%5Finto/)
* **Platform Standards.** Most major API providers (such as OpenAI, Anthropic, and Google) automatically exclude internal reasoning tokens from subsequent turns or instruct developers to omit `<think>` tags when building the message array. Users on [Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1lvcyvf/is%5Fknowledge%5Ffound%5Fin%5Fthe%5Fthinking%5Ftaken%5Finto/) also agree that while thinking tokens influence the immediate response, they are typically cut for subsequent messages because retaining them quickly floods the context. [](https://www.reddit.com/r/LocalLLaMA/comments/1lvcyvf/is%5Fknowledge%5Ffound%5Fin%5Fthe%5Fthinking%5Ftaken%5Finto/)

### Agentic & Tool-Calling Loops (Keep Thinking)

The main exception is **interleaved thinking**, where a model thinks, calls a tool, receives a tool output, and thinks again before giving the user a final answer. [](https://docs.novita.ai/guides/llm-interleaved-thinking)

* **Reasoning Continuity.** When passing tool results back to the model within the same turn, you must append the assistant's full prior message—including its `reasoning_details` or `<think>` block and tool calls. [](https://docs.novita.ai/guides/llm-interleaved-thinking)
* **Preventing Loops.** According to [Novita AI's documentation](https://docs.novita.ai/guides/llm-interleaved-thinking), stripping the reasoning block during an active tool-use chain causes lost context, repeated or circular tool calls, and reduced reliability. Once the model finishes its tool calls and delivers a final answer to the user, you can drop the intermediate thinking traces before the next user prompt. [](https://docs.novita.ai/guides/llm-interleaved-thinking)

### Summary Comparison

| Scenario                    | Include Thinking in History? | Primary Reason                                                                 |
| --------------------------- | ---------------------------- | ------------------------------------------------------------------------------ |
| **Standard Chat Turns**     | **No**                       | Prevents context bloat, reduces token costs, and avoids distracting the model. |
| **Mid-Turn Tool Execution** | **Yes**                      | Preserves step-by-step state so the model remembers why it called a tool.      |
| **After Final Answer**      | **No**                       | The final output already distills the conclusions needed for future turns.     |

Are you building a custom **agentic workflow** or managing context in a **specific LLM API** (like OpenAI, Anthropic, or a local model via Ollama/vLLM)? If you share your setup, I can give you the exact message-formatting structure to use.

* [](https://www.reddit.com/r/LocalLLaMA/comments/1lvcyvf/is%5Fknowledge%5Ffound%5Fin%5Fthe%5Fthinking%5Ftaken%5Finto/)  
Reddit·r/LocalLLaMA  
Is knowledge found in the thinking taken into consideration by ...  
July 9, 2025 — Tokens generated during the thinking stage are considered part of the context and influence the immediate response. However, they ...
* [](https://docs.novita.ai/guides/llm-interleaved-thinking)  
Novita AI  
Interleaved Thinking Support - Documentation  
December 3, 2025 — Failing to preserve the chain may result in: Incorrect tool use Lost reasoning context Repeated or circular tool calls Reduced rel...
* [](https://bdtechtalks.com/2026/06/15/llm-chain-of-thought-limitations/)  
TechTalks  
Why LLMs should stop thinking out loud (and what comes ...  
June 15, 2026 — Because LLMs are autoregressive, they must generate one token at a time, calculating a new probability distribution across their e...

# how to know whether it supports, toggle thinking, or parse thinking on openrouter non streaming api

On OpenRouter, you can check model support via the **`supported_parameters` array** on the Models API, toggle thinking using the unified **`reasoning` request object**, and parse non-streaming output from **`message.reasoning`** (or `output` items on the Responses API). [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

---

### 1\. Check Whether a Model Supports Thinking

Query the [OpenRouter Models API](https://openrouter.ai/docs/guides/overview/models) to inspect a model's `supported_parameters` array or filter specifically for reasoning-capable models. [](https://openrouter.ai/docs/guides/overview/models)

* **Filter all reasoning models.** Call `GET https://openrouter.ai` to retrieve only models that support configurable thinking.
* **Check a specific model.** Call `GET https://openrouter.ai/api/v1/models` (or `GET /api/v1/model/{author}/{slug}`) and verify that `"reasoning"` is present inside the model object's `supported_parameters` list.
* **Fallback behavior.** If you send `reasoning` parameters to a model that does not support them, OpenRouter safely ignores the unsupported parameter rather than throwing an error. [](https://openrouter.ai/docs/api%5Freference/overview)

---

### 2\. Toggle and Configure Thinking

Use the `reasoning` object in your request payload to turn thinking on, turn it off, or control its token budget across any provider. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

| Goal                     | JSON Payload (reasoning field)                                         | Notes                                                                                             |
| ------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Enable with defaults** | "reasoning": { "enabled": true }                                       | Uses the provider's default thinking budget.                                                      |
| **Disable thinking**     | "reasoning": { "enabled": false } or "reasoning": { "effort": "none" } | Turns off thinking on hybrid models (like Claude or Gemini) that allow toggling.                  |
| **Control by effort**    | "reasoning": { "effort": "medium" }                                    | Accepts "minimal", "low", "medium", "high", "xhigh", or "max".                                    |
| **Control by token cap** | "reasoning": { "max\_tokens": 2000 }                                   | Sets a hard token limit for thinking (do not combine with effort).                                |
| **Think silently**       | "reasoning": { "effort": "high", "exclude": true }                     | Model reasons internally, but thinking text is omitted from the response (Chat Completions only). |

_Note: Reasoning tokens count toward your overall `maxtokens` / `maxoutputtokens` limit and are billed as output tokens._ [](https://openrouter.ai/docs/api%5Freference/parameters)

---

### 3\. Parse Thinking in Non-Streaming Responses

The response structure depends on whether you call the standard **Chat Completions API** or the **Responses API**. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

#### Option A: Chat Completions API (`POST /api/v1/chat/completions`)

In a non-streaming response (`stream: false`), OpenRouter normalizes thinking into `choices[0].message`: [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

json

```
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Final answer shown to the user.",
        "reasoning": "Step-by-step plain-text thinking trace...",
        "reasoning_details": [
          {
            "type": "reasoning.text",
            "text": "Step-by-step plain-text thinking trace...",
            "signature": "..."
          }
        ]
      }
    }
  ]
}

```



* **`message.reasoning`:** Contains the readable plain-text thinking string (may be `null` if the model returns encrypted reasoning or if `exclude: true` was set).
* **`message.reasoning_details`:** An array of structured blocks (`reasoning.text`, `reasoning.summary`, or `reasoning.encrypted`). If you are doing multi-turn tool calling, pass `reasoning_details` back unmodified in the assistant message history so the provider can verify signatures. [](https://github.com/BerriAI/litellm/issues/48401)

#### Option B: Responses API (`POST /api/v1/responses`)

If you use the newer [OpenRouter Responses API](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens), thinking is returned as a separate object inside the top-level `output` array rather than on a message: [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

* **Locate the reasoning item.** Find the item in `response.output` where `item.type === "reasoning"`.
* **Extract the text.** Concatenate text from `item.content` (raw thinking) and `item.summary` (used by models like OpenAI o-series/GPT-5 that summarize their chain of thought).
* **Locate the final answer.** Find the separate item in `response.output` where `item.type === "message"` and read its `output_text` part. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

If you'd like, let me know:

* Which **programming language or SDK** you are using (e.g., Python OpenAI SDK, TypeScript `@openrouter/sdk`, raw `fetch`)
* Whether you need to preserve thinking blocks across **multi-turn tool calls**

I can share a complete, copy-pasteable code snippet for your setup.

* [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)  
OpenRouter  
Reasoning Tokens - Improve AI Model Decision Making - OpenRouter  
November 10, 2026 — Reasoning tokens are included in the response by default if the model decides to output them. The examples on this page use the Re...
* [](https://openrouter.ai/docs/api%5Freference/overview)  
OpenRouter  
OpenRouter API Reference  
November 5, 2026 — OpenRouter normalizes the schema across models and providers to comply with the OpenAI Chat API. This means that choices is always...
* [](https://openrouter.ai/docs/guides/overview/models)  
OpenRouter  
OpenRouter Models - Unified Access to 400+ AI Models  
Nov 6, 2026 — Filter models by the API parameters they support. For example, to find models that support tool calling: curl

Show all

# what can you include on openrouter llm api payload body

The **OpenRouter API request payload** accepts standard OpenAI-compatible fields alongside OpenRouter-specific parameters for routing, reasoning, and plugins. Your exact payload structure depends on whether you call the Chat Completions endpoint (`/api/v1/chat/completions`) or the Responses endpoint (`/api/v1/responses`). [](https://openrouter.ai/docs/api%5Freference/overview)

### Core Request Fields

* **Model Selection (`model` or `models`).** Specify a single model slug like `openai/gpt-5.2` or pass an array of fallback models in `models`.
* **Prompt Input (`messages`, `prompt`, or `input`).** Send a conversation array in `messages` or a text string in `prompt` for Chat Completions, or use `input` with optional `instructions` for the Responses API.
* **Streaming (`stream`).** Set to `true` to receive Server-Sent Events (SSE) in real time instead of waiting for the full completion.
* **End-User Tracking (`user`).** Pass a stable string identifier for your end-users to help track usage and abuse. [](https://www.youtube.com/watch?v=sgQwF1aOu9U&t=267)

### Sampling and Generation Parameters

OpenRouter forwards standard [API Parameters](https://openrouter.ai/docs/api%5Freference/parameters) directly to the underlying provider: [](https://openrouter.ai/docs/api%5Freference/parameters)

* **Randomness (`temperature`, `top_p`, `top_k`, `min_p`, `top_a`).** Adjust token probability distribution and creativity.
* **Length and Stopping (`max_tokens`, `max_completion_tokens`, `stop`).** Cap the maximum generated tokens or define stop sequences as a string or array.
* **Repetition Control (`frequency_penalty`, `presence_penalty`, `repetition_penalty`).** Penalize repeated tokens or topics in the output.
* **Determinism and Logits (`seed`, `logit_bias`, `logprobs`, `top_logprobs`).** Request reproducible outputs, adjust specific token probabilities, or inspect token log probabilities.
* **Verbosity (`verbosity`).** Set to `low`, `medium`, `high`, or `max` to constrain how concise or detailed the response is. [](https://openrouter.ai/docs/api%5Freference/parameters)

### Structured Outputs and Tool Calling

* **Output Formatting (`response_format` and `structured_outputs`).** Enforce JSON mode or strict JSON schemas on supported models.
* **Function Calling (`tools`, `tool_choice`, `parallel_tool_calls`).** Define custom tools or OpenRouter server tools like `openrouter:web_search` and control how the model invokes them.
* **Predicted Outputs (`prediction`).** Pass `{ "type": "content", "content": "..." }` to reduce latency when editing or rewriting known text. [](https://openrouter.ai/docs/api%5Freference/overview)

### Reasoning and Thinking Controls

* **Reasoning Object (`reasoning`).** Configure thinking tokens with keys like `effort` (`minimal`, `low`, `medium`, `high`, `xhigh`, `max`), `max_tokens`, `enabled`, `summary`, and `exclude`.
* **Legacy Reasoning Fields (`reasoning_effort`, `include_reasoning`).** Shorthand parameters to set effort levels or toggle thinking output in the response. [](https://openrouter.ai/docs/api%5Freference/parameters)

### OpenRouter-Specific Extensions

* **Provider Routing (`provider`).** Control upstream selection via [Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection) options including `order`, `only`, `ignore`, `allow_fallbacks`, `sort` (`price`, `throughput`, `latency`), `quantizations`, `max_price`, `require_parameters`, `data_collection`, and `zdr` (Zero Data Retention). [](https://openrouter.ai/docs/guides/routing/provider-selection)
* **Model Routing (`route`).** Set to `"fallback"` alongside a `models` array to enable automatic cross-model failover. [](https://openrouter.ai/docs/api%5Freference/overview)
* **Capabilities (`plugins`).** Pass an array of [OpenRouter Plugins](https://openrouter.ai/docs/guides/features/plugins) such as PDF parsing, automatic JSON response healing, safety guardrails, or middle-out context compression. [](https://openrouter.ai/docs/guides/features/plugins)
* **Provider-Specific Extras.** Include native provider fields like `safe_prompt` for Mistral or `raw_mode` for Hyperbolic, which OpenRouter passes straight through. [](https://openrouter.ai/docs/api%5Freference/parameters)

If you are building a specific integration, let me know:

* Which **endpoint** you are targeting (`/chat/completions` or `/responses`)
* The **models** or **features** you plan to use (such as tool calling, reasoning, or provider fallbacks)

I can put together a complete, ready-to-run JSON payload template for your use case.

* [](https://openrouter.ai/docs/api%5Freference/overview)  
OpenRouter  
OpenRouter API Reference - Complete Documentation  
November 5, 2026 — Reduce latency by providing the model with a predicted output { type: 'content'; content: string };
* [](https://www.youtube.com/watch?v=sgQwF1aOu9U&t=267)  
YouTube·Nicolai Nielsen  
Why You Should Use OpenRouter as Your Centralized LLM API  
Apr 27, 2026 — The class supports multi-turn conversations and streaming results, providing real-time text output instead of waiting for full res...  
7m
* [](https://openrouter.ai/docs/guides/features/tool-calling)  
OpenRouter  
Tool & Function Calling  
Tool use and tool results Let's make the first OpenRouter API call to the model: send({ responsesRequest: instructions, tools, inp...

Show all




