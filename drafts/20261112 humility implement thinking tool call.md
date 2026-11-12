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

# how to use thinking params on openrouter api payload

To control thinking and reasoning models in your [OpenRouter API](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens) payload, use the unified **`reasoning`** object. The older `:thinking` model suffix is deprecated in favor of passing this object per request. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

### Payload Structure & Options

Include a `reasoning` object in the root of your JSON request body for both `/api/v1/chat/completions` and `/api/v1/responses` endpoints. [](https://openrouter.ai/docs/api%5Freference/responses/reasoning)

* **`effort` (string).** Controls how hard the model thinks using levels like `"low"`, `"medium"`, `"high"`, or `"none"` (to disable thinking on supported models). This is the standard setting for models like OpenAI o3, o4-mini, and DeepSeek R1. [](https://github.com/open-webui/open-webui/issues/34177)
* **`max_tokens` (integer).** Allocates a specific token budget for internal thinking, such as `2000`. Use this for models that support explicit token budgets like Anthropic Claude. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)
* **`exclude` (boolean).** Set to `true` if you want the model to think internally without returning the reasoning text in the final payload. Note that this only works on the Chat Completions endpoint (`/api/v1/chat/completions`). [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)
* **`summary` (string).** Controls reasoning summaries on compatible models, such as setting `"detailed"` when using the [Responses API](https://openrouter.ai/docs/api%5Freference/responses/reasoning).

### Example JSON Payloads

**1\. Using Effort Levels (Chat Completions)**

json

```
{
  "model": "deepseek/deepseek-r1-0528",
  "messages": [
    {
      "role": "user",
      "content": "How would you build the world's tallest skyscraper?"
    }
  ],
  "reasoning": {
    "effort": "high",
    "exclude": false
  }
}

```



_Note: If you are using the official OpenAI SDK, pass `reasoning` inside `extrabody={"reasoning": {"effort": "high"}}`._ [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

**2\. Using a Token Budget (Anthropic / Responses API)**

json

```
{
  "model": "anthropic/claude-sonnet-latest",
  "input": "Solve this logic puzzle step by step.",
  "reasoning": {
    "max_tokens": 2000
  }
}

```



### Reading Reasoning in the Response

* **Chat Completions (`/chat/completions`).** The thinking process is returned in `choices[0].message.reasoning` (or `reasoning_content` depending on the underlying provider), separate from the final answer in `content`.
* **Responses API (`/responses`).** The output array contains an item with `"type": "reasoning"`, where the text sits inside `content` or `summary`. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

If you'd like, let me know:

* Which **specific model** you are calling (e.g., Claude, DeepSeek, OpenAI o-series)
* Whether you are using **raw HTTP requests** or the **OpenAI SDK**

I can share a complete, copy-pasteable code snippet tailored to your setup.

* [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)  
OpenRouter  
Reasoning Tokens - Improve AI Model Decision Making  
November 10, 2026 — The Responses API ignores reasoning. exclude and always returns reasoning items in output .
* [](https://github.com/open-webui/open-webui/issues/34177)  
GitHub  
fix: DeepSeek thinking mode still fails on OpenRouter ... - GitHub  
Nov 11, 2026 — The \`reasoning\_content\` in the thinking mode must be passed back to the API. #33950 fixed this by filling reasoning\_content with a...
* [](https://openrouter.ai/docs/api%5Freference/responses/reasoning)  
OpenRouter  
Advanced AI Reasoning - Responses API - OpenRouter  
The Responses API supports advanced reasoning capabilities, allowing models to show their internal reasoning process with configur...

Show all

# how to use thinking params on openai compatible api payload

To pass thinking or reasoning parameters to an OpenAI-compatible API, use the native **`reasoning_effort`** parameter for standard effort control, or pass custom provider flags (such as **`thinking`**) inside **`extra_body`** when using the official OpenAI SDK. If you are making raw HTTP requests, place these custom keys directly at the root of your JSON payload. [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)

Because different inference engines and model providers handle reasoning configurations differently, the exact syntax depends on your backend and client method. [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)

### 1\. Standard Effort Control (`reasoning_effort`)

Most OpenAI-compatible endpoints (including [vLLM](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/), [LiteLLM](https://docs.litellm.ai/docs/reasoning%5Fcontent), and [DeepSeek](https://api-docs.deepseek.com/guides/thinking%5Fmode/)) support OpenAI's top-level `reasoning_effort` parameter on `/v1/chat/completions`. Common accepted string values include `"none"`, `"minimal"`, `"low"`, `"medium"`, `"high"`, and `"xhigh"`. [](https://tinker-docs.thinkingmachines.ai/tinker/compatible-apis/openai/)

**Python SDK Example:**

python

```
from openai import OpenAI

client = OpenAI(base_url="https://example.com", api_key="your-api-key")

response = client.chat.completions.create(
    model="your-reasoning-model",
    messages=[{"role": "user", "content": "Solve this logic puzzle..."}],
    reasoning_effort="high",
)

```



---

### 2\. Provider-Specific Thinking Params (`extra_body`)

Models like DeepSeek, Qwen, and Anthropic (via proxies like LiteLLM) often require custom objects like `"thinking": {"type": "enabled"}` or token budgets. Because strict OpenAI SDK validation rejects unknown top-level arguments, wrap them in `extra_body`. [](https://github.com/vllm-project/vllm/issues/32901)

**Python SDK Example:**

python

```
response = client.chat.completions.create(
    model="deepseek-reasoner",  # or qwen / claude via proxy
    messages=[{"role": "user", "content": "9.11 and 9.8, which is greater?"}],
    extra_body={
        "thinking": {"type": "enabled"}
        # Some backends (like vLLM/Qwen) may also accept:
        # "chat_template_kwargs": {"enable_thinking": True}
    },
)

```



---

### 3\. Raw HTTP / cURL Payload

When sending raw JSON via `curl`, `fetch`, or tools like Postman, `extra_body` is not used. Merge the thinking parameters directly into the top level of the JSON object. [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)

bash

```
curl https://example.com \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "your-reasoning-model",
    "messages": [{"role": "user", "content": "Explain quantum entanglement."}],
    "reasoning_effort": "medium",
    "thinking": {
      "type": "enabled"
    }
  }'

```



---

### Common Backend Variations

* **DeepSeek API.** Supports both `reasoning_effort` (`"low"`, `"high"`, `"max"`) and `extra_body={"thinking": {"type": "enabled"}}`.
* **vLLM.** Accepts `reasoning_effort` natively or custom chat-template flags (like `{"chat_template_kwargs": {"enable_thinking": true}}`) via `extra_body` depending on the hosted model.
* **LiteLLM / Anthropic Proxies.** Translates `reasoning_effort` automatically, or accepts `thinking={"type": "enabled", "budget_tokens": 2048}` inside `extra_body`.
* **Reading the Output.** OpenAI-compatible servers typically return the model's thought process in `response.choices[0].message.reasoning_content` separately from the final `content`. [](https://docs.litellm.ai/docs/reasoning%5Fcontent)

If you let me know which **model or inference engine** (such as vLLM, Ollama, DeepSeek, or OpenRouter) and **SDK/language** you are using, I can give you the exact payload structure for your setup.

* [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)  
vLLM docs  
OpenAI-Compatible Server - vLLM docs  
vLLM supports some parameters that are not supported by OpenAI, top\_k for example. You can pass these parameters to vLLM using … v...
* [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)  
DeepSeek  
Thinking Mode  
Thinking Mode Toggle and Effort Control. Thinking mode is enabled by default, with the default effort being high (2) The mapping b...
* [](https://docs.litellm.ai/docs/reasoning%5Fcontent)  
LiteLLM  
'Thinking' / 'Reasoning Content' | liteLLM  
Here's how to use thinking blocks by Anthropic with tool calling. not fully compatible with OpenAI-compatible API clients. Anthrop...

Show all

# how to use thinking params on openai compatible api json payload

To configure thinking or reasoning behavior on an **OpenAI-compatible API**, you include specific parameters in your JSON request body—most commonly **`reasoning_effort`** or provider-specific objects like **`thinking`**. [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)

Because different providers and inference engines handle reasoning parameters differently, the exact JSON structure depends on which endpoint and backend you are calling. [](https://pi.dev/docs/latest/models-configuration)

### 1\. Standard OpenAI Format (`reasoning_effort`)

For standard OpenAI Chat Completions endpoints and many compatible providers, pass the top-level `reasoning_effort` string in your JSON payload. [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)

* **Supported values:** Usually `"none"` (or `"minimal"`), `"low"`, `"medium"`, `"high"`, or `"max"` depending on the model.
* **Responses API alternative:** If you are using OpenAI's newer `/v1/responses` format, nest it inside a `reasoning` object instead (`"reasoning": {"effort": "low"}`). [](https://developers.openai.com/api/docs/guides/reasoning)

json

```
{
  "model": "your-reasoning-model",
  "messages": [
    {"role": "user", "content": "Solve this step by step."}
  ],
  "reasoning_effort": "high"
}

```



### 2\. Provider-Specific JSON Formats

If you are routing through an OpenAI-compatible proxy or calling third-party APIs (like DeepSeek, OpenRouter, Together, or local vLLM servers), they often expect extra fields merged directly into the JSON payload. [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)

| Provider / Engine                                                                                                        | JSON Payload Parameter               | Example Value                                        |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------- |
| **DeepSeek API**                                                                                                         | thinking object + reasoning\_effort  | "thinking": {"type": "enabled"} (or "disabled")      |
| **OpenRouter**                                                                                                           | reasoning object                     | "reasoning": {"effort": "high"}                      |
| **Together AI**                                                                                                          | reasoning object + reasoning\_effort | "reasoning": {"enabled": true}                       |
| **Local Servers ([vLLM](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/) / Qwen)** | chat\_template\_kwargs or thinking   | "chat\_template\_kwargs": {"enable\_thinking": true} |

_Example payload for DeepSeek-style endpoints:_ [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)

json

```
{
  "model": "deepseek-reasoner",
  "messages": [
    {"role": "user", "content": "9.11 and 9.8, which is greater?"}
  ],
  "reasoning_effort": "high",
  "thinking": {
    "type": "enabled"
  }
}

```



### 3\. Passing Custom Params via the OpenAI SDK

If you are using an official OpenAI SDK (like Python or Node.js) rather than raw HTTP requests, strict type validation will reject non-standard fields like `thinking` or `chat_template_kwargs`. [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)

* **Use `extra_body`:** Pass provider-specific parameters inside `extra_body` so the SDK merges them into the root of the outgoing JSON payload. [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)

python

```
from openai import OpenAI

client = OpenAI(base_url="https://example.com", api_key="your-key")

response = client.chat.completions.create(
    model="deepseek-flash",
    messages=[{"role": "user", "content": "9.11 and 9.8, which is greater?"}],
    reasoning_effort="high",
    extra_body={"thinking": {"type": "enabled"}}
)

```



### 4\. Handling Multi-Turn Conversations

When parsing the response and sending follow-up messages, keep two common API behaviors in mind:

* **Extracting thoughts:** Compatible APIs typically return the model's thought process in `choices[0].message.reasoning_content` (or `reasoning`), separate from the final `content`.
* **History stripping:** Most APIs require you to strip `reasoning_content` from previous assistant messages before appending them to the `messages` array for the next turn, or they will return a validation error. [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)

If you'd like, let me know:

* Which **provider or inference engine** you are targeting (e.g., OpenRouter, vLLM, DeepSeek, Ollama)
* Which **specific model** you are calling

I can give you the exact JSON schema and multi-turn handling rules for that setup.

* [](https://api-docs.deepseek.com/guides/thinking%5Fmode/)  
DeepSeek  
Thinking Mode  
Thinking mode is enabled by default, The mapping between the effort set by the user and the model's actual reasoning effort. The r...
* [](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/)  
vLLM docs  
OpenAI-Compatible Server - vLLM docs  
Extra Parameters vLLM supports a set of parameters that are not part of the OpenAI API. In order to use them, you can pass them as...
* [](https://pi.dev/docs/latest/models-configuration)  
Pi.dev  
Models Configuration · Documentation · Pi  
Whether all replayed assistant messages must include an empty reasoning\_content field when reasoning is enabled. Format for reason...

Show all

# how to know reasoning support for a model via litellm in js

Because LiteLLM does not have a native JavaScript SDK (it operates primarily as a **Python SDK** and an **HTTP Proxy/AI Gateway**), you cannot directly call `litellm.supports_reasoning()` in JavaScript. [](https://docs.litellm.ai/docs/reasoning%5Fcontent)

Instead, you can check reasoning support in JavaScript using one of two approaches depending on your setup.

### 1\. Query the LiteLLM Proxy `/model/info` Endpoint (Recommended)

If your JavaScript app connects to a running LiteLLM Proxy server, query the `/model/info` endpoint. It returns each configured model's metadata, including the `supports_reasoning` boolean inside `model_info`. [](https://docs.litellm.ai/docs/proxy/model%5Fmanagement)

javascript

```
async function checkModelReasoningSupport(modelName) {
  const response = await fetch("http://localhost:4000/model/info", {
    headers: {
      "Authorization": `Bearer ${process.env.LITELLM_API_KEY}`,
      "Content-Type": "application/json"
    }
  });

  const { data } = await response.json();
  
  // Find the matching model configuration
  const modelEntry = data.find(m => m.model_name === modelName);
  
  // Check the supports_reasoning flag inside model_info
  return Boolean(modelEntry?.model_info?.supports_reasoning);
}

// Usage
const hasReasoning = await checkModelReasoningSupport("anthropic/claude-sonnet-5");
console.log("Supports reasoning:", hasReasoning);

```



_Note: If a custom model isn't automatically detected by LiteLLM, ensure `supportsreasoning: true` is added under its `modelinfo` block in your proxy's `config.yaml`._ [](https://docs.litellm.ai/docs/reasoning%5Fcontent)

### 2\. Fetch LiteLLM's Public Model Map JSON (Standalone JS)

If you are not running a LiteLLM Proxy and just want to use LiteLLM's model registry in a standalone Node.js or frontend app, fetch LiteLLM's `model_prices_and_context_window.json` on GitHub directly. This file powers the [LiteLLM Model Catalog](https://models.litellm.ai/) and contains capability flags for thousands of models. [](https://docs.litellm.ai/docs/proxy/model%5Fcost%5Fmap)

javascript

```
const MODEL_MAP_URL = 
  "https://githubusercontent.com";

let cachedModelMap = null;

async function supportsReasoning(modelId) {
  if (!cachedModelMap) {
    const res = await fetch(MODEL_MAP_URL);
    cachedModelMap = await res.json();
  }

  const modelData = cachedModelMap[modelId];
  return Boolean(modelData?.supports_reasoning);
}

// Usage (use LiteLLM's provider/model format)
supportsReasoning("deepseek/deepseek-chat").then(console.log); // true
supportsReasoning("openai/gpt-4.1").then(console.log); // false

```



### Key Details to Keep in Mind

* **Exact naming matters.** Make sure the `modelId` matches LiteLLM's naming convention (such as `anthropic/claude-sonnet-5` or `deepseek/deepseek-chat`), as provider prefixes determine which entry is matched. [](https://docs.litellm.ai/docs/providers)
* **Cache the JSON file.** In standalone mode, cache `model_prices_and_context_window.json` in memory or local storage so you don't download the large file on every request. [](https://docs.litellm.ai/docs/proxy/model%5Fcost%5Fmap)
* **Verify at runtime.** If you are sending requests through the LiteLLM Proxy, you can also check `supported_openai_params` inside the `/model/info` response to verify whether parameters like `reasoning_effort` or `thinking` are accepted for that specific model. [](https://docs.litellm.ai/docs/completion/input)

Are you connecting to a **self-hosted LiteLLM Proxy** or calling provider APIs directly from a **standalone JavaScript app**? Let me know if you also need help passing `reasoning_effort` or parsing `reasoning_content` in your JS client.

* [](https://docs.litellm.ai/docs/proxy/model%5Fmanagement)  
LiteLLM  
Model Management | liteLLM  
The same operations are available over HTTP, which is what you want for CI/CD or scripting bulk changes. These endpoints require s...
* [](https://docs.litellm.ai/docs/completion/input)  
LiteLLM  
Input Params - LiteLLM documentation  
Sets the reasoning effort for supported models. Values are none , minimal , low , medium , high , xhigh , max and default. Request...
* [](https://docs.litellm.ai/docs/reasoning%5Fcontent)  
LiteLLM  
'Thinking' / 'Reasoning Content' | liteLLM  
litellm.supports\_reasoning(model="anthropic/claude-sonnet-5") Define models that support reasoning in your config.yaml . LiteLLM d...

Show all

# how to know reasoning support for a model in js

There is no single native JavaScript property to detect reasoning support across all LLM providers. Instead, you can programmatically verify it by querying a **model metadata endpoint** or inspecting **SDK parameters and response schemas**.

### 1\. Query the OpenRouter Models API (Cross-Provider)

If you use multiple providers or want a unified JSON catalog in JavaScript, the OpenRouter API returns a `supported_parameters` array for every model. You can check if `"reasoning"` or `"include_reasoning"` is present in that array.

javascript

```
async function supportsReasoning(modelId) {
  const response = await fetch("https://openrouter.ai");
  const { data } = await response.json();
  
  const model = data.find((m) => m.id === modelId);
  if (!model) return false;

  return (
    model.supported_parameters?.includes("reasoning") ||
    model.supported_parameters?.includes("include_reasoning")
  );
}

// Example usage
console.log(await supportsReasoning("openai/o3-mini")); // true
console.log(await supportsReasoning("openai/gpt-4o-mini")); // false

```



### 2\. Inspect Provider-Specific SDKs & APIs

Direct provider APIs generally do not include a `supports_reasoning` boolean on their `/models` endpoints. You must either match known model naming conventions or test a lightweight request against provider-specific schemas.

* **OpenAI (`openai` package).** Native reasoning models (`o1`, `o3`, `o4-mini`) accept a `reasoning: { effort: "low" | "medium" | "high" }` parameter in the Responses API or `reasoning_effort` in Chat Completions. Sending this parameter to a non-reasoning model throws a `400 Bad Request` error. [](https://gist.github.com/sekedus/3e119900d1567b6f5334dcc231a7cacc)
* **Anthropic (`@anthropic-ai/sdk`).** Extended thinking models (such as Claude 3.7 Sonnet and newer) accept a `thinking: { type: "enabled", budget_tokens: 1024 }` configuration and return content blocks where `block.type === "thinking"`.
* **Google Gemini (`@google/genai`).** Thinking-capable models accept a `thinkingConfig` object inside `config`. In the response candidates, reasoning steps appear in parts containing `part.thought === true`.
* **Open-Weight & Inference Gateways.** Platforms like [Baseten](https://docs.baseten.co/inference/model-apis/reasoning) expose reasoning via `chat_template_args: { enable_thinking: true }`. Aggregators like [Vercel AI Gateway](https://vercel.com/docs/ai-gateway/models-and-providers/reasoning) normalize this via their model catalog and unified `providerOptions`. [](https://docs.baseten.co/inference/model-apis/reasoning)

### 3\. Detect Reasoning in Streaming or Response Payloads

If you are building a UI that needs to dynamically render a "Thinking" accordion when a model reasons, check the response structure at runtime rather than hardcoding model lists:

* **Vercel AI SDK (`ai`).** Check `result.reasoning` or look for chunks where `part.type === "reasoning"` in `fullStream`.
* **OpenAI-Compatible Endpoints.** Inspect `choice.delta.reasoning_content` (used by DeepSeek, vLLM, and Ollama) or `choice.message.reasoning` alongside standard `content`.

If you'd like to tailor this to your setup, let me know:

* Which **SDK or AI provider** you are using (e.g., Vercel AI SDK, OpenAI, OpenRouter, Ollama)
* Whether you need to check **before sending a request** or **dynamically in the UI** as tokens stream in

I can write a clean helper function for your exact stack.

* [](https://docs.baseten.co/inference/model-apis/reasoning)  
Baseten  
Reasoning - Baseten overview  
November 4, 2026 — Set chat\_template\_args.enable\_thinking to true to enable reasoning: OpenAI from "openai"; Set chat\_template\_args.enable\_thinking t...
* [](https://vercel.com/docs/ai-gateway/models-and-providers/reasoning)  
Vercel  
AI Gateway's reasoning support - Vercel  
Sep 8, 2026 — Use the model catalog to discover reasoning support and available controls, then set effort in your preferred API format.
* [](https://gist.github.com/sekedus/3e119900d1567b6f5334dcc231a7cacc)  
GitHub  
OpenAI Reasoning Models Documentation  
October 31, 2026 — effort parameter guides the model on how many reasoning tokens to generate before creating a response to the prompt. Specify low ,

# how to know whether it supports, toggle thinking, or parse thinking on non streaming openai compatible api in js depfree

Because the OpenAI-compatible Chat Completions standard does not enforce a single universal schema for reasoning, providers implement thinking detection, toggling, and parsing in a few common patterns. [](https://www.requesty.ai/blog/openai-compatible-api)

You can handle all three tasks in dependency-free JavaScript using standard `fetch` and defensive payload handling.

### 1\. How to Detect Thinking Support

The `/v1/models` endpoint rarely reports reasoning capabilities reliably across providers. Instead, detect support using these methods:

* **Check model metadata.** Call `GET /v1/models` and inspect objects for vendor-specific capability arrays (e.g., OpenRouter returns `supported_parameters: ["reasoning", "include_reasoning"]`), though most local engines (Ollama, vLLM, llama.cpp) omit this.
* **Probe with a dry-run request.** Send a minimal request (`max_tokens: 1` or `16`) with `reasoning_effort: "low"` and inspect the response status and fields.
* **Handle unknown-parameter behavior.** OpenAI-compatible APIs either reject unsupported parameters with an `HTTP 400` error (e.g., `"Unrecognized request argument"`) or silently ignore them. [](https://developers.openai.com/api/docs/guides/reasoning)

### 2\. How to Toggle Thinking

Depending on the backend engine (OpenAI, DeepSeek, vLLM, Ollama, Qwen/LM Studio), thinking is controlled via request body parameters or prompt prefixes: [](https://tinker-docs.thinkingmachines.ai/tinker/compatible-apis/openai/)

| Provider / Engine               | Toggle Off                                          | Toggle On / Adjust Effort                                             |        |
| ------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------- | ------ |
| **OpenAI / Standard**           | reasoning\_effort: "none" (or "minimal")            | reasoning\_effort: "low" \| "medium"                                  | "high" |
| **vLLM / SGLang / Qwen**        | chat\_template\_kwargs: { enable\_thinking: false } | chat\_template\_kwargs: { enable\_thinking: true }                    |        |
| **DeepSeek / OpenRouter**       | Use non-thinking model ID (e.g., deepseek-chat)     | Use thinking model ID (deepseek-reasoner) or include\_reasoning: true |        |
| **Hybrid Models (Qwen3, etc.)** | Append /no\_think to the user/system prompt         | Append /think to the user/system prompt                               |        |

### 3\. How to Parse Thinking (Non-Streaming)

In non-streaming `POST /v1/chat/completions` responses, reasoning appears either in a dedicated JSON property on `choices[0].message` or inline inside `message.content` wrapped in XML-style tags (`<think>...</think>` or `<thinking>...</thinking>`). [](https://github.com/vercel/ai/issues/6728)

javascript

```
/**
 * Sends a non-streaming request and normalizes both thinking and final answer.
 */
async function chatWithThinking({ baseUrl, apiKey, model, messages, enableThinking = true }) {
  const payload = {
    model,
    messages,
    stream: false,
  };

  // Apply standard and common local-engine toggles
  if (enableThinking) {
    payload.reasoning_effort = "medium";
  } else {
    payload.reasoning_effort = "none";
    payload.chat_template_kwargs = { enable_thinking: false };
  }

  let res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  // Fallback: If strict server rejects reasoning parameters with 400, retry without them
  if (!res.ok && res.status === 400) {
    delete payload.reasoning_effort;
    delete payload.chat_template_kwargs;
    res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify(payload),
    });
  }

  if (!res.ok) {
    throw new Error(`API Error ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const message = data.choices?.[0]?.message ?? {};
  
  return parseMessageThinking(message);
}

/**
 * Extracts separate reasoning and content across all major OpenAI-compatible formats.
 */
function parseMessageThinking(message) {
  let content = message.content ?? "";
  
  // 1. Check dedicated JSON fields (DeepSeek, vLLM, llama.cpp, OpenRouter, Ollama)
  let thinking =
    message.reasoning_content ??
    message.reasoning ??
    message.thinking ??
    null;

  // 2. Fallback: Check for inline <think> or <thinking> tags in content
  if (!thinking && typeof content === "string") {
    const tagRegex = /<(think|thinking)>([\s\S]*?)<\/\1>/i;
    const match = content.match(tagRegex);

    if (match) {
      thinking = match[2].trim();
      content = content.replace(tagRegex, "").trim();
    }
  }

  return {
    supportsThinking: thinking !== null && thinking.length > 0,
    thinking: thinking || null,
    content: content.trim(),
  };
}

```



### Key Implementation Notes

* **Token budgets.** When thinking is enabled, ensure `max_tokens` (or `max_completion_tokens`) is large enough to cover both the internal reasoning trace and the final output. If the model hits the token limit mid-thought, `content` will return empty (`""`) while `reasoning_content` holds the partial trace.
* **Unclosed tags.** If a model runs out of tokens while outputting inline tags, `<think>` will lack a closing `</think>`. If you anticipate truncated responses, check for `content.startsWith("<think>")` without a closing tag and treat the entire string as `thinking`.

If you are targeting specific **providers or local inference engines** (such as Ollama, vLLM, OpenRouter, or DeepSeek), let me know which ones and I can tailor the capability detection and parameter mapping for your exact stack.

* [](https://www.requesty.ai/blog/openai-compatible-api)  
Requesty  
OpenAI-Compatible API: Meaning, Providers and Examples  
Sep 28, 2026 — An OpenAI-compatible API accepts OpenAI-style requests and returns responses that OpenAI clients can parse, most often for Chat Co...
* [](https://tinker-docs.thinkingmachines.ai/tinker/compatible-apis/openai/)  
Tinker Docs  
OpenAI-Compatible API - Tinker Documentation  
Controlling thinking effort For models that support it, the /chat/completions endpoint accepts the standard OpenAI reasoning\_effor...
* [](https://developers.openai.com/api/docs/guides/reasoning)  
OpenAI Developers  
Reasoning models | OpenAI API  
GPT-6 Astra does not support none reasoning effort. Setting reasoning.effort (Responses) or reasoning\_effort (Chat Completions) to...

Show all

# example cheap thinking model on openrouter

**NVIDIA: Nemotron 3 Ultra (free)**

 (`nvidia/nemotron-3-ultra:free`) and 

**DeepSeek V4 Flash**

 (`deepseek/deepseek-v4-flash`) are two of the best low-cost and free thinking models available on OpenRouter. You can use them at $0 per million tokens on the free tier or for fractions of a dollar per million tokens for higher rate limits. [](https://openrouter.ai/collections/free-models)

### Top Free & Cheap Thinking Models

* **NVIDIA: Nemotron 3 Ultra**

 **(free).** Listed among the top free models on the [OpenRouter Free Models Collection](https://openrouter.ai/collections/free-models), this 550B mixture-of-experts reasoning model costs $0/M input and $0/M output tokens. It supports up to a 1M token context window and excels at multi-step planning, agent orchestration, and coding. [](https://openrouter.ai/collections/free-models)
* **[LiquidAI: LFM2.5-2.6B](https://www.google.com/search?ibp=oshop&prds=pvt%3Ahg%2Cpvo%3A29%2Cmid%3A576462502917228402%2CimageDocid%3A15412998886219487263%2Cgpcid%3A21872130931376366%2CheadlineOfferDocid%3A5028714645698272476%2Ccatalogid%3A7823559062345952978%2CproductDocid%3A8565942221467879893%2Crds%3APC%5F21872130931376366%7CPROD%5FPC%5F21872130931376366&q=product&sa=X&ved=2ahUKEwjv84qW04KYAxUHcPUHHaWuAqMQxa4PeggIAggBCBgQCg&gl=us)**

 **(free).** This ultra-lightweight compact reasoning model is also available for $0/M tokens on OpenRouter. It is best suited for fast data extraction, RAG pipelines, and lightweight agent workflows. [](https://openrouter.ai/collections/free-models)
* **DeepSeek R1**

 **& DeepSeek V4 Flash.** DeepSeek models remain popular low-cost options for step-by-step reasoning and coding tasks, with providers on platforms like [LLM Gateway](https://llmgateway.io/models/cheapest) pricing `deepseek-v4-flash` as low as $0.08 to $0.20 per million input tokens. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)
* **OpenRouter Free Auto-Router.** Using the `openrouter/free` model ID automatically routes your prompt to an available zero-cost model that fits your request. [](https://openrouter.ai/openrouter/free)

### Example API Request (Python)

As shown in the [OpenRouter Reasoning Tokens Guide](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens), you can use the standard OpenAI SDK and pass the `reasoning` parameter to control thinking depth and token spend: [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

python

```
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="<OPENROUTER_API_KEY>",
)

response = client.chat.completions.create(
    model="nvidia/nemotron-3-ultra:free",  # Or "deepseek/deepseek-r1-0528"
    messages=[
        {"role": "user", "content": "Solve this logic puzzle step by step..."}
    ],
    extra_body={
        "reasoning": {
            "effort": "medium"  # Options: "low", "medium", "high"
        }
    }
)

print(response.choices[0].message.content)

```



If you'd like, let me know:

* Your **primary use case** (coding, math, RAG, or general chat)
* Whether you need **high rate limits** (paid tier) or **$0 prototyping** (free tier)

I can recommend the exact model ID and `reasoning` parameter settings to keep your costs minimal.

* [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)  
OpenRouter  
Reasoning Tokens  
November 10, 2026 — Basic Usage with Reasoning Tokens. For models that support direct token allocation you can specify the exact number of tokens to u...
* [](https://openrouter.ai/collections/free-models)  
OpenRouter  
Free AI Models on OpenRouter  
The most-used free AI models are ranked below by real usage on OpenRouter over the past week, and every one of them has $0 prompt ...
* [](https://openrouter.ai/openrouter/free)  
OpenRouter  
Free Models Router - API Pricing & Providers - OpenRouter  
Use openrouter/free with the OpenRouter API: OpenRouter supports reasoning-enabled models that can show their step-by-step thinkin...

Show all

# how does llms output tool calls under the hood

Under the hood, an LLM does not actually execute tools or run external code. Instead, it acts as a **structured text generator that outputs a formatted request** (usually in JSON) telling your application which function to run and what arguments to pass. [](https://heygaia.io/blog/tool-calling-under-the-hood)

Here is how the mechanics work across both the model's internal token generation and the surrounding application loop.

### 1\. Inside the Model: How the Call is Generated

At its core, an LLM only predicts the next token. Modern models reliably output valid tool calls through four internal mechanisms: [](https://heygaia.io/blog/tool-calling-under-the-hood)

* **System Prompt Injection.** When you pass a list of tools to an API, the backend converts your tool definitions (names, descriptions, and parameter schemas) into text and injects them directly into the model's hidden system prompt. [](https://heygaia.io/blog/tool-calling-under-the-hood)
* **Special Control Tokens.** During post-training and fine-tuning, models are taught to use special reserved tokens (such as `<|tool_call|>`, `<|im_start|>`, or XML-style tags) to signal a mode switch from normal conversation to structured code output.
* **Post-Training & Reinforcement Learning.** Models undergo supervised fine-tuning and reinforcement learning to recognize when they lack information. They are rewarded for emitting a tool call instead of hallucinating an answer. [](https://www.youtube.com/watch?v=TKelv4nBz5U)
* **Constrained Decoding (Grammar Enforcement).** To guarantee the model does not produce broken JSON, inference engines often apply constrained decoding. Using a Context-Free Grammar (CFG) or state machine, the engine masks out any vocabulary tokens that would violate your tool's JSON schema during generation, forcing the next sampled token to be structurally valid. [](https://www.reddit.com/r/LangChain/comments/1d8y7mq/how%5Fdoes%5Ffunction%5Fcalling%5Fwork%5Funder%5Fthe%5Fhood/)

### 2\. The Application Loop: How It Executes

Because the model is isolated from the outside world, tool calling relies on a multi-turn message loop managed by your code (or an agent framework). [](https://www.youtube.com/shorts/GIHZJC8gGKQ)

1. **Request & Schema Binding.** Your app sends the user's prompt alongside the available tool schemas to the LLM API.
2. **Structured Emission.** The model evaluates the prompt, predicts the special tool-call tokens, and outputs a JSON object containing the function name, a unique call ID, and the arguments. The API stops generating and returns a `finish_reason` of `tool_calls`.
3. **Local Execution.** Your application parses the JSON payload, validates the arguments, and executes the actual function in your own environment.
4. **Observation Injection.** Your app takes the return value (or error message) from your function, wraps it in a `ToolMessage` matching the original call ID, and appends it to the conversation history.
5. **Final Synthesis.** You send the updated conversation history back to the LLM for a second inference pass. The model reads the tool's output and generates the final user-facing response (or triggers another tool call). [](https://www.youtube.com/shorts/V94BUC1kop8)

For a deeper look at implementing this loop manually, see Decoding AI's guide on building tool calling from scratch or [Anthropic's research on prompt engineering tools](https://www.anthropic.com/research/building-effective-agents). 

Would you like to explore a specific part of this pipeline, such as how **constrained decoding** enforces JSON schemas at the token level, or see a **raw Python implementation** without frameworks?

* [](https://www.reddit.com/r/LangChain/comments/1d8y7mq/how%5Fdoes%5Ffunction%5Fcalling%5Fwork%5Funder%5Fthe%5Fhood/)  
Reddit·r/LangChain  
How does function calling work under the hood? : r/LangChain  
June 5, 2024 — For models that support JSON schema output but. OpenAI, in contrast, uses constrained decoding for its function calling. The imple...
* [](https://heygaia.io/blog/tool-calling-under-the-hood)  
heygaia  
How does tool calling work under the hood? - GAIA AI  
Nov 14, 2025 — When you “bind” a tool to the LLM, you're giving it the schema, arguments, types, and description of that tool. User Prompt → Mode...
* [](https://www.youtube.com/shorts/V94BUC1kop8)  
YouTube·Matt Pocock  
How LLM tools work under the hood  
Sep 22, 2025 — When an LLM decides to use a tool, it produces an assistant message that includes a tool call, which is an instruction indicating ...  
1m

Show all

# can it output malformated tool call when you call openrouter api

**Yes, calling the OpenRouter API can still return malformed tool calls** **.** While OpenRouter standardizes the tool-calling format across different models, it passes through responses from underlying inference providers, which can still generate broken JSON or invalid parameters. [](https://openrouter.ai/blog/insights/agent-frameworks-compared-tool-calling-schema-handling/)

### Why Malformed Tool Calls Happen

* **Token truncation.** If a model hits its `max_tokens` limit while generating arguments, the JSON payload cuts off mid-stream, leaving unclosed brackets or quotes. [](https://github.com/TanStack/ai/issues/1689)
* **Model or provider quirks.** Smaller or quantized models hosted by third-party providers sometimes output trailing commas, raw newlines, or markdown fences inside the arguments string. [](https://www.linkedin.com/posts/saastr%5Fagents-just-passed-humans-in-ai-token-usage-activity-7467711706312581120-wfIC)
* **Schema mismatches.** A model might hallucinate a function name that was not declared, omit required fields, or pass the wrong data type. [](https://openrouter.ai/blog/tutorials/how-to-test-tool-calling-accuracy-in-ai-agents/)
* **Raw text output.** Occasionally, a model writes the tool call directly inside the standard message content instead of using the structured `tool_calls` array.

### How OpenRouter Helps Prevent Them

OpenRouter includes built-in routing and monitoring features to reduce these failures:

* **Auto Exacto routing.** By default on requests with tools, [OpenRouter Auto Exacto](https://openrouter.ai/docs/guides/routing/auto-exacto) prioritizes providers with the lowest **Tool Call Error Rate** based on live JSON Schema validation. [](https://openrouter.ai/docs/guides/routing/auto-exacto)
* **Error rate visibility.** You can inspect the **Tool Call Error Rate** on any model's Performance tab on OpenRouter to avoid unreliable providers. [](https://openrouter.ai/blog/insights/agent-frameworks-compared-tool-calling-schema-handling/)

### How to Handle Them in Your Code

Because malformed calls are never 100% eliminated, your application should handle them defensively: [](https://ccapi.ai/blog/build-reliable-tool-calling-agent-loop-openrouter)

* **Wrap parsing in try-catch blocks.** Never pass `tool_call.function.arguments` directly into `JSON.parse()` without error handling, especially when streaming.
* **Check the finish reason.** Verify whether `finish_reason` is `length` (indicating truncation) rather than `tool_calls` before attempting to execute a function.
* **Validate against your schema.** Use a library like Zod or Ajv to confirm that required fields and types match your tool definition before running local code.
* **Feed errors back to the model.** If parsing or validation fails, return the error message as the tool response so the model can correct its syntax on the next turn. [](https://openrouter.ai/blog/tutorials/how-to-test-tool-calling-accuracy-in-ai-agents/)

Are you running into a specific error with a certain **model** or **SDK** (such as Vercel AI SDK, LangChain, or OpenAI's client)? Let me know, and I can share targeted configuration fixes or retry patterns.

* [](https://ccapi.ai/blog/build-reliable-tool-calling-agent-loop-openrouter)  
CCAPI  
Build a Reliable Tool-Calling Agent Loop on… | CCAPI Blog  
September 20, 2026 — Malformed tool calls happen when a model emits invalid JSON or missing required fields. Provider-specific schema differences appea...
* [](https://openrouter.ai/blog/insights/agent-frameworks-compared-tool-calling-schema-handling/)  
OpenRouter  
Agent Frameworks Compared: Tool  
October 2, 2026 — the Tool Call Error Rate metric behind it is visible on each model's Performance tab.
* [](https://openrouter.ai/blog/tutorials/how-to-test-tool-calling-accuracy-in-ai-agents/)  
OpenRouter  
How to Test Tool-Calling Accuracy in AI Agents - OpenRouter  
September 30, 2026 — Structural validation catches malformed JSON, missing required fields, incorrect types, invalid enum values, and parameters the to...

Show all

# what do you see on payload when it output malformated tool call when you call openrouter api

When a model produces a malformed tool call through the [OpenRouter API](https://openrouter.ai/docs/api%5Freference/errors-and-debugging), the HTTP request still returns a `200 OK` status, while the JSON payload reflects the failure in one of three ways depending on the underlying provider. [](https://openrouter.ai/docs/api%5Freference/errors-and-debugging)

### 1\. Upstream Provider Rejection (e.g., Gemini `MALFORMED_FUNCTION_CALL`)

If the underlying provider (such as Google Gemini) detects a malformed tool call on its end before streaming it back, it aborts the generation and sends an empty message. [](https://github.com/earendil-works/pi/issues/11931)

* **Empty content and no `tool_calls` array.** The `message` (or `delta` in streaming mode) has `content: ""` or `null`, and the `tool_calls` field is omitted entirely.
* **Mapped `finish_reason`.** OpenRouter sets `finish_reason` to `"error"` or `"stop"` rather than `"tool_calls"`.
* **Diagnostic clue in `native_finish_reason`.** OpenRouter exposes the provider's exact error in `choices[0].native_finish_reason` (for example, `"MALFORMED_FUNCTION_CALL"`). [](https://github.com/agno-agi/agno/issues/3649)

json

```
{
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": ""
      },
      "finish_reason": "error",
      "native_finish_reason": "MALFORMED_FUNCTION_CALL"
    }
  ]
}

```



### 2\. Broken JSON Inside `function.arguments`

If the provider passes the raw output through without catching the syntax error, OpenRouter returns a standard tool-call structure containing broken string data: [](https://openrouter.ai/blog/tutorials/tool-calling/)

* **Standard `tool_calls` wrapper.** The `finish_reason` is `"tool_calls"`, and `choices[0].message.tool_calls` is populated with an `id`, `type: "function"`, and `function.name`.
* **Unparseable `arguments` string.** Because `function.arguments` is returned as a raw string generated by the model, it will contain syntax errors like trailing commas, unescaped quotes, or missing closing brackets. Calling `JSON.parse()` directly on this field will throw a syntax error.
* **Truncated payloads.** If the model runs out of tokens mid-call, the string cuts off abruptly (e.g., `"{\"sql\": \"SELECT * FROM"`), and `native_finish_reason` will typically show `"max_output_tokens"` or `"length"`. [](https://openrouter.ai/blog/announcements/response-healing-reduce-json-defects-by-80percent/)

json

```
{
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
          {
            "id": "call_abc123",
            "type": "function",
            "function": {
              "name": "get_weather",
              "arguments": "{\"location\": \"Tokyo\", \"unit\": \"celsius\","
            }
          }
        ]
      },
      "finish_reason": "tool_calls"
    }
  ]
}

```



### 3\. Raw Tool Syntax Leaked into `message.content`

Some open-weight or less capable models fail to trigger the native tool-calling parser when formatting breaks down. [](https://community.n8n.io/t/tool-calling-bug-for-agents-using-openrouter-various-models/295318/4)

* **Text fallback.** Instead of a `tool_calls` array, the model dumps raw XML tags (such as `<tool_call>...</tool_call>`), markdown code blocks, or raw JSON directly into `choices[0].message.content` with `finish_reason: "stop"`. [](https://www.datastudios.org/post/openrouter-tool-calling-function-schemas-structured-responses-and-app-integration-across-producti)

### How to Handle It

* **Wrap argument parsing.** Always wrap `JSON.parse(toolCall.function.arguments)` in a `try/catch` block and validate keys against your schema before executing code. [](https://openrouter.ai/blog/tutorials/how-to-test-tool-calling-accuracy-in-ai-agents/)
* **Check `native_finish_reason`.** Inspect `choices[0].native_finish_reason` whenever you receive an empty `content` string with no `tool_calls`. [](https://github.com/earendil-works/pi/issues/11931)
* **Return errors to the model.** If JSON parsing fails or `MALFORMED_FUNCTION_CALL` occurs, append a `role: "tool"` message (or a follow-up user/system nudge) explaining the syntax error so the model can retry cleanly. [](https://github.com/TanStack/ai/issues/1689)
* **Use Response Healing.** For non-streaming requests, you can enable OpenRouter's free [Response Healing plugin](https://openrouter.ai/docs/guides/features/plugins/response-healing) to automatically repair trailing commas, missing brackets, and unescaped characters before the payload reaches your app. [](https://openrouter.ai/blog/announcements/response-healing-reduce-json-defects-by-80percent/)

If you're seeing this happen right now, let me know:

* Which **model** and **endpoint** (`/chat/completions` or `/responses`) you are calling
* Whether you are using **streaming** or **non-streaming** mode

I can help you write a parser fallback or retry handler tailored to that setup.

* [](https://openrouter.ai/blog/announcements/response-healing-reduce-json-defects-by-80percent/)  
OpenRouter  
Response Healing: Reduce JSON Defects by 80%+ — OpenRouter Blog  
December 18, 2025 — Fixes JSON syntax errors (trailing commas, unescaped characters, missing brackets) and can heal XML; Reduces defect rates signific...
* [](https://openrouter.ai/docs/api%5Freference/errors-and-debugging)  
OpenRouter  
API Error Handling and Debugging - Complete Guide  
October 11, 2026 — the returned HTTP response status will be 200 and any error occurred while the LLM is producing the output will be emitted in the ...
* [](https://openrouter.ai/blog/tutorials/how-to-test-tool-calling-accuracy-in-ai-agents/)  
OpenRouter  
How to Test Tool-Calling Accuracy in AI Agents  
September 30, 2026 — Run the same eval across models For a multi-step agent, collect calls across the full trace and compare the sequence or the result...

Show all

# what does it generate under the hood when llms output tool calls

When a Large Language Model (LLM) outputs a tool call, it does not actually execute any code. Instead, **it generates a structured text payload—usually a JSON object—framed by special control tokens** that tells your application which function to run and what arguments to pass. [](https://heygaia.io/blog/tool-calling-under-the-hood)

At its core, an LLM is still just predicting the next token in a sequence. Tool calling works because the model has been trained to recognize special formatting tokens and adhere to strict schemas. [](https://datacream.substack.com/p/structured-outputs-with-llms-json)

### 1\. Special Control Tokens (Raw Model Output)

Before an API cleans up the response for you, the model's raw output stream looks like normal text mixed with invisible "control" or "sentinel" tokens. While exact tokens vary by model family (such as Llama, OpenAI, or Claude), the raw token generation looks conceptually like this:

text

```
<|thought|> The user wants the weather in Tokyo. I should use the weather tool. <|end_thought|>
<|tool_call_start|>
{
  "name": "get_weather",
  "arguments": {
    "city": "Tokyo",
    "unit": "celsius"
  }
}
<|tool_call_end|>
<|eot_id|>

```



* **Trigger Tokens:** Tokens like `<|tool_call_start|>` signal to the inference engine that the model is switching from generating conversational prose to generating a machine-readable instruction.
* **Constrained Decoding:** On many modern APIs, once the model outputs the trigger token, the inference engine uses **constrained decoding** (often via context-free grammars). This mathematically masks out invalid tokens at each step, guaranteeing the model produces valid JSON that matches your tool's exact schema. [](https://www.reddit.com/r/LangChain/comments/1d8y7mq/how%5Fdoes%5Ffunction%5Fcalling%5Fwork%5Funder%5Fthe%5Fhood/)
* **Stop Tokens:** Once the JSON object is complete, the model predicts an end-of-turn token (like `<|eot_id|>` or `<|tool_call_end|>`), which immediately halts generation.

### 2\. The API Payload (What Your App Receives)

The model provider's API intercepts those raw tokens, parses the JSON, and packages it into a structured HTTP response for your application. Instead of populating the standard `content` text field, it populates a dedicated `tool_calls` array and changes the `finish_reason`: [](https://heygaia.io/blog/tool-calling-under-the-hood)

json

```
{
  "id": "chatcmpl-98765",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
          {
            "id": "call_abc123",
            "type": "function",
            "function": {
              "name": "get_weather",
              "arguments": "{\"city\": \"Tokyo\", \"unit\": \"celsius\"}"
            }
          }
        ]
      },
      "finish_reason": "tool_calls"
    }
  ]
}

```



* **`finish_reason: "tool_calls"`:** Normally, a response ends with `stop` (finished talking) or `length` (ran out of tokens). Setting this to `tool_calls` tells your client code to pause the conversation and execute local functions.
* **`id` (`call_abc123`):** A unique tracking ID generated for that specific call. If the model outputs multiple tool calls in parallel, each gets its own ID so you can match the outputs back to the right requests. [](https://www.youtube.com/shorts/V94BUC1kop8)
* **`arguments`:** Notice that the arguments are typically returned as a **stringified JSON object** rather than a raw nested object, ensuring safe transport before your code parses and validates it.

### 3\. The Execution Loop

Because the LLM stops running the moment it emits the tool call, your application's "harness" (or framework like LangChain) takes over: [](https://www.instagram.com/reel/DdZ0iZ6Mk6e/)

1. **Parse and Execute:** Your code reads `finish_reason`, extracts `"get_weather"`, parses the arguments string, and runs the actual function on your server.
2. **Append to History:** Your app appends the model's tool-call message to the conversation history, followed immediately by a new message with `role: "tool"` containing the function's return value and the matching `tool_call_id` (`call_abc123`).
3. **Resume Generation:** You send the entire updated conversation back to the LLM. The model reads the tool's output in its context window and generates the final, human-readable answer. [](https://www.youtube.com/shorts/V94BUC1kop8)

If you are working with a specific setup, let me know:

* Which **model or API** you are using (e.g., OpenAI, Anthropic Claude, Llama)
* Whether you are using an **agent framework** (like LangChain or Vercel AI SDK) or writing raw API calls

I can show you the exact raw token format or API payload structure for that specific stack.

* [](https://www.reddit.com/r/LangChain/comments/1d8y7mq/how%5Fdoes%5Ffunction%5Fcalling%5Fwork%5Funder%5Fthe%5Fhood/)  
Reddit·r/LangChain  
How does function calling work under the hood? : r/LangChain  
June 5, 2024 — OpenAI, in contrast, uses constrained decoding for its function calling. The implementation varies significantly between different...
* [](https://heygaia.io/blog/tool-calling-under-the-hood)  
heygaia  
How does tool calling work under the hood?  
November 14, 2025 — (LLM) is just a text prediction engine. “LLM → decides what needs to happen → emits a JSON tool call → your app executes the code ...
* [](https://www.youtube.com/shorts/V94BUC1kop8)  
YouTube·Matt Pocock  
How LLM tools work under the hood  
Sep 22, 2025 — When an LLM decides to use a tool, it produces an assistant message that includes a tool call, The LLM then sees the entire messag...  
1m

Show all

# can llms use tool call special tokens freely in an output

**No, LLMs generally cannot use tool-call special tokens freely in their regular output.** In production environments, both the model's training and the surrounding software harness actively restrict when and how these tokens appear. [](https://www.linkedin.com/pulse/llm-tool-use-standardization-should-happen-token-level-joshua-nielsen-tw8nc)

While a raw, unconstrained model theoretically predicts any token in its vocabulary, several architectural and engineering safeguards prevent free usage:

### 1\. API & Inference Engine Interception

* **Stop Sequences & Parsers.** Inference engines and API layers continuously monitor the generated token stream. The moment a model outputs a tool-call end token (or specific delimiter), generation halts immediately so the external application can execute the function. [](https://www.youtube.com/watch?v=QiRdYCNXAxk&t=386)
* **Output Stripping.** API providers (like OpenAI or Anthropic) separate tool-call tokens from standard text responses. If a model emits a tool token, it is routed into a structured `tool_calls` payload rather than shown as plain text to the user. [](https://virtuslab.com/blog/ai/how-mcp-llm-tool-calls-work)
* **Token Masking (Logit Bias).** When no tools are provided in the API request, inference servers often mask out tool-related special token IDs (setting their probability to negative infinity) so the model cannot emit them at all.

### 2\. Constrained Decoding

* **Grammar Enforcement.** Many providers use [constrained decoding](https://blog.sylph.ai/posts/ultimate-guide-agentic-tool-calling) (such as Finite State Automata or JSON schemas) to strictly control token generation. [](https://blog.sylph.ai/posts/ultimate-guide-agentic-tool-calling)
* **State-Specific Rules.** Once a model emits a `<tool_call>` start token, the grammar forces the very next tokens to match a valid tool name and parameter schema. It cannot simply drop a tool token into the middle of a casual sentence and continue writing prose. [](https://blog.sylph.ai/posts/ultimate-guide-agentic-tool-calling)

### 3\. Fine-Tuning & Alignment

* **Strict Chat Templates.** Models are heavily fine-tuned on rigid [chat templates](https://www.youtube.com/watch?v=hl6mROfFhE8) that dictate exact turn boundaries. They are trained with negative examples so they learn not to emit tool tokens during normal conversation.
* **Decision Tokens.** Some architectures use explicit classification tokens (like `<|answer|>` vs. `<|use_tool|>`) at the start of a turn to lock the model into either a text response or a tool-calling mode. [](https://arxiv.org/html/2412.01130v1)

### When _Can_ They Appear Freely?

* **Raw Local Inference.** If you run an open-weights model locally (e.g., via `llama.cpp` or `vLLM`) with chat template parsing disabled and `skip_special_tokens=False`, the model can technically output raw special tokens anywhere if prompted to do so—though this usually breaks the conversation flow or confuses the model's attention mechanism.
* **Prompt Injection.** Attackers sometimes try to trick models into outputting literal text representations of special tokens (like `<|im_end|>` or `<tool_call>`), which is why tokenizers treat registered special tokens as single, indivisible IDs distinct from regular text characters. [](https://www.youtube.com/shorts/SzQgN85atts)

Are you exploring this for **building a custom agent parser**, **fine-tuning an open-weights model**, or **preventing prompt injection**? Let me know and I can share specific implementation details or tokenizer behaviors.

* [](https://blog.sylph.ai/posts/ultimate-guide-agentic-tool-calling)  
blog.sylph.ai  
The Ultimate Guide to Agentic Tool Calling - SylphAI Blog - AdaL  
February 16, 2026 — Tags like are registered as indivisible tokens — preventing subword fragmentation Think-before-act training: Datasets include reas...
* [](https://www.linkedin.com/pulse/llm-tool-use-standardization-should-happen-token-level-joshua-nielsen-tw8nc)  
LinkedIn·Joshua Nielsen  
LLM Tool Use: Standardization Should Happen at the Token ...  
April 9, 2025 — Special tokens are reserved markers in LLMs, distinct from regular words, used internally to structure input, signal actions like ...
* [](https://arxiv.org/html/2412.01130v1)  
arXiv  
Enhancing Function-Calling Capabilities in LLMs  
December 2, 2024 — The Decision Token concept involves fine-tuning LLMs to perform a classification task before providing any detailed response—speci...

Show all

# what constraints do llm apis often enforce on tool calls

LLM APIs enforce several layers of constraints on tool calls (function calling) to ensure predictable parsing, manage compute costs, and prevent runaway execution. [](https://achan2013.medium.com/how-many-tools-functions-can-an-ai-agent-has-21e0a82b7847)

These restrictions fall into four main categories:

### 1\. Schema and Structural Constraints

To ensure your code can reliably parse the model's output without syntax errors, APIs enforce strict structural rules using **JSON Schema**. [](https://www.adaline.ai/blog/understanding-llms-and-tool-calling)

* **Constrained Decoding (Strict Mode).** Many providers compile your JSON Schema into a grammar-based token mask. This physically prevents the model from generating tokens that violate your schema, guaranteeing valid JSON, matching data types, and adherence to `enum` values. [](https://arxiv.org/html/2606.25605v1)
* **Supported Schema Subsets.** APIs rarely support the full JSON Schema specification. They often reject or ignore complex features like recursive references (`$ref`), `allOf`/`oneOf` combinations, or arbitrary regex patterns.
* **Required vs. Optional Fields.** In strict modes, providers often require that every property defined in an object be listed in the `required` array, forcing you to use nullable types (e.g., `["string", "null"]`) for optional parameters.
* **Naming Rules.** Function and parameter names must typically follow strict character limits (often 64 characters max) and alphanumeric/underscore patterns (`^[a-zA-Z0-9_-]+$`).

### 2\. Capacity and Token Limits

Tool definitions are injected directly into the model's prompt behind the scenes, meaning they are subject to context and payload limits. [](https://achan2013.medium.com/how-many-tools-functions-can-an-ai-agent-has-21e0a82b7847)

* **Maximum Tool Count.** Providers enforce hard caps on how many tools you can pass in a single request (for example, OpenAI enforces a limit of 128 tools per request).
* **Context Window Consumption.** Every tool name, description, and parameter schema consumes input tokens. Passing dozens of complex tools can easily eat up thousands of tokens before the user even asks a question.
* **Nesting Depth and String Lengths.** APIs frequently cap the maximum nesting depth of JSON objects and the total character length of function descriptions to prevent payload bloat and reasoning degradation. [](https://achan2013.medium.com/how-many-tools-functions-can-an-ai-agent-has-21e0a82b7847)

### 3\. Execution and State Machine Rules

LLM APIs treat tool calling as a strict turn-based conversation protocol. If your message history violates this sequence, the API will throw a validation error. [](https://www.adaline.ai/blog/understanding-llms-and-tool-calling)

* **Mandatory Tool Responses.** If the model emits a tool call with a specific `tool_call_id`, the very next message in the conversation array _must_ be a `tool` role message matching that exact ID. You cannot skip it or insert a user message in between.
* **Tool Choice Modes.** APIs let you constrain _how_ the model selects tools via a `tool_choice` parameter. You can force it to use a specific tool, require it to call _at least one_ tool, allow it to decide automatically (`auto`), or forbid tool calls entirely (`none`).
* **Feature Mutual Exclusivity.** Combining tool calling with other constrained features—such as forcing a structured JSON response format (`response_format`) or enabling extended thinking/reasoning modes—is either blocked by the API or can cause decoding conflicts. [](https://arxiv.org/html/2606.25605v1)

### 4\. Operational and Rate Limits

* **Throughput Caps.** Tool calls are subject to standard API rate limits, including Requests Per Minute (RPM) and Tokens Per Minute (TPM). Because tool schemas inflate input token counts and multi-step tool loops require multiple round-trip API calls, agents hit TPM limits much faster than standard chat completions. [](https://mlflow.org/articles/rate-limiting-llm/)
* **Payload Size Limits.** If a tool returns a massive amount of data (like a raw webpage or large database dump), the resulting tool output message can exceed the API's maximum request payload size or context window, causing the next turn to fail.

### What APIs _Do Not_ Enforce

While APIs guarantee **syntactic validity** (the shape of the data), they do not enforce **semantic safety**. An API will not stop a model from hallucinating a fake user ID that matches your string schema, calling a destructive tool out of order, or falling victim to prompt injection from untrusted tool outputs. Those constraints must be built into your application's execution layer. [](https://blog.sentry.security/exploiting-tool-and-function-calling-in-llm-agents/)

Are you working with a specific **LLM provider** (like OpenAI, Anthropic, or Gemini) or troubleshooting a particular **schema or runtime error**? If you share what you're building, I can give you the exact limits and workarounds for that setup.

* [](https://achan2013.medium.com/how-many-tools-functions-can-an-ai-agent-has-21e0a82b7847)  
Medium·Allen Chan  
Medium  
February 7, 2025 — OpenAI enforces a hard limit of 128 tools per agent. Smaller models (4K-8K context) handle fewer than 10 tools. Larger models (128...
* [](https://ai-tldr.dev/learn/llm-apis/function-calling/tool-calling-best-practices/)  
ai-tldr.dev  
Tool Calling Best Practices for LLMs (2026 Guide) - AI/TLDR  
June 11, 2026 — The JSON Schema block you pass to the API. Deeply nested objects increase the chance of structural errors. One level of nesting is...
* [](https://arxiv.org/html/2606.25605v1)  
arXiv  
An Empirical Study of Tool Calling Suppression Under ... - arXiv  
June 24, 2026 — Tool Calling and JSON Schema constraints are simultaneously enabled, multiple open-weight models cease invoking tools despite main...

Show all

# what constraints do llm apis often enforce on tool calls output

LLM APIs primarily enforce **structural and syntactic constraints** on tool call outputs rather than semantic accuracy. Providers like OpenAI, Anthropic, and Google use decoding-level techniques—such as token masking and context-free grammars—to ensure the model's generated arguments match your defined parameters before your application receives them. [](https://arxiv.org/html/2606.25605v1)

### Schema and Formatting Constraints

* **JSON Schema Adherence.** When "strict mode" or structured outputs are enabled, the API forces the output to follow your exact JSON Schema. The decoder guarantees valid JSON syntax and prevents missing or extra keys. [](https://developers.openai.com/api/docs/guides/function-calling)
* **Strict Data Types and Enums.** APIs enforce primitive types like strings, integers, booleans, and arrays. If you define an `enum` list, the model is mathematically restricted to choosing only from those exact values. [](https://mlflow.org/articles/structured-outputs-llm/)
* **Grammar and Regex Rules.** Some platforms allow custom tools to accept plain text constrained by context-free grammars (like Lark) or regular expressions. This ensures generated strings match specific patterns, such as ISO dates or custom syntax. [](https://developers.openai.com/api/docs/guides/function-calling)

### Operational and Decoding Limits

* **Tool Selection and Count.** APIs limit how many tools you can pass in a single request, such as [OpenAI's hard cap of 128 tools](https://developers.openai.com/api/docs/guides/function-calling). You can also force the model to call a specific tool, choose from a subset, or disable tool calls entirely via parameters like `tool_choice`. [](https://achan2013.medium.com/how-many-tools-functions-can-an-ai-agent-has-21e0a82b7847)
* **Parallel Call Controls.** Developers can constrain whether the model is allowed to emit multiple tool calls in a single turn or must execute them one at a time. [](https://developers.openai.com/api/docs/guides/function-calling)
* **Token and Nesting Limits.** Providers often restrict schema complexity, capping the depth of nested objects or the total character count of parameter names and descriptions. If a tool call hits the model's `max_tokens` limit mid-generation, the output can still cut off and produce incomplete JSON. [](https://www.honeyhive.ai/learn/structured-output-llm)

### What LLM APIs Do Not Enforce

* **Semantic Accuracy.** Schema constraints only validate the shape of the data, not whether the values make sense. A model can still pass a syntactically valid string that contains a hallucinated ID or wrong date.
* **Business Logic and Permissions.** The API will not stop a model from calling a destructive tool or accessing unauthorized records. Your application's execution layer must enforce access controls, rate limits, and value validation.
* **Refusal Overrides.** Safety filters take precedence over formatting rules, meaning a model may output a plain-text refusal instead of a valid tool call if a prompt triggers a policy violation. [](https://www.youtube.com/watch?v=9z03nZ0KpNY&t=368)

If you're building with a specific provider, let me know:

* Which **LLM API** you are using (e.g., OpenAI, Claude, Gemini)
* Whether you are facing **schema errors** or **hallucinated arguments**

I can share the exact configuration flags and validation patterns for your setup.

* [](https://www.honeyhive.ai/learn/structured-output-llm)  
HoneyHive  
Structured output from LLMs: JSON mode, schemas and what ...  
November 10, 2026 — OpenAI's guide says outputs can still contain mistakes. \* Can structured output fail. Yes, in two documented cases. A refusal need...
* [](https://developers.openai.com/api/docs/guides/function-calling)  
OpenAI Developers  
Function calling | OpenAI API  
August 7, 2025 — Function calling (tool calling) connects OpenAI models to external systems using function tools … parallel calls, and strict mode
* [](https://mlflow.org/articles/structured-outputs-llm/)  
MLflow  
Enforce, Validate, Observe: 3 LLM Structured Output Patterns ...  
September 16, 2026 — Keep schemas minimal with required fields, strict types, and enums to prevent ambiguous outputs and simplify validation at scale.

Show all

# do llm apis allow at most one tool call per response

**No, modern LLM APIs generally allow multiple tool calls in a single response**. This feature is known as **parallel tool calling**, and it is enabled by default on most major platforms like OpenAI, Anthropic, and Google Gemini. [](https://codeant.ai/blogs/parallel-tool-calling)

### How Multiple Tool Calls Work

* **Single-turn batching.** When an LLM needs independent pieces of data—such as checking the weather in three different cities—it can return an array of several tool-call objects in a single API response rather than asking for them one by one. [](https://restfulapi.net/llm-function-calling-rest-api/)
* **Unique call IDs.** Each requested tool call comes with a unique identifier. Your application executes all the requested functions and sends every result back in the next message turn, tagged with its matching call ID. [](https://restfulapi.net/llm-function-calling-rest-api/)
* **Strict matching rules.** If an LLM returns three tool calls in one turn, you must return three corresponding tool outputs in the next turn. Omitting a result—even if one of the tools threw an error—will cause the API to reject the next request as malformed. [](https://restfulapi.net/llm-function-calling-rest-api/)

### Restricting to One Tool Call per Turn

If your architecture requires strict step-by-step execution where the model only calls one tool per response, most providers offer parameters to disable parallel calling: [](https://stackoverflow.com/questions/79738038/model-returns-mutiple-tools-to-call-even-when-parallel-tool-calls-is-set-to-f)

* **OpenAI.** Set `parallel_tool_calls=False` in your API request to restrict the model to at most one tool call per turn.
* **Anthropic (Claude).** Pass `disable_parallel_tool_use=True` inside the `tool_choice` configuration object.
* **Exceptions.** Older models, lightweight open-source models, or certain custom fine-tunes may only support single tool calls per turn natively, depending on how their chat templates and function-calling tokens were trained. [](https://codeant.ai/blogs/parallel-tool-calling)

Are you working with a **specific LLM provider** (like OpenAI, Anthropic, or Gemini) or **agent framework**? I can share the exact code snippet for configuring or parsing parallel tool calls for your setup.

* [](https://codeant.ai/blogs/parallel-tool-calling)  
CodeAnt AI  
Why Parallel Tool Calling Matters for LLM Agents  
January 17, 2026 — OpenAI's models support parallel function calling through the parallel\_tool\_calls parameter in the API. When enabled, the model ca...
* [](https://stackoverflow.com/questions/79738038/model-returns-mutiple-tools-to-call-even-when-parallel-tool-calls-is-set-to-f)  
Stack Overflow  
Model returns mutiple tools to call even when ... - Stack Overflow  
Aug 17, 2025 — LLM is calling both tools even when parallel\_tool\_calls is set to False. With parallel it may execute all tools at the same time -
* [](https://restfulapi.net/llm-function-calling-rest-api/)  
restfulapi.net  
LLM Function Calling with a REST API  
Oct 22, 2026 — A tool call without a matching tool result makes the model API reject the next request with an error.

Show all

# how do ppl prompt llms to tool call when they do not use the native way

When developers cannot use an LLM’s native tool-calling API (such as with older models, certain reasoning models, or custom gateways), they simulate it using **prompt engineering and a client-side parsing loop**. Instead of relying on built-in special tokens, the developer explicitly defines the rules for calling tools inside the system prompt and uses application code to catch and run the model's requests. [](https://www.reddit.com/r/LangChain/comments/1pd58iv/implementing%5Ftool%5Fcalling%5Fwhen%5Fgateway%5Flacks/)

### 1\. Define Tools and Formatting Rules in the System Prompt

Developers inject text instructions into the system prompt detailing what tools exist, what arguments they expect, and the exact syntax the model must output to trigger them. [](https://www.linkedin.com/posts/garrettgalloway%5Fhow-an-llm-calls-a-tool-llms-dont-run-code-activity-7372285817366401024-4mQ0)

* **XML Tag Wrapping.** A common approach instructs the model to wrap tool requests in custom XML tags like `<tool_call>` or `<function>`. This makes it easy for application code to extract the payload using regex or string matching without accidentally catching normal conversational text. [](https://www.landeranalytics.com/post/the-anatomy-of-an-llm-tool-call)
* **JSON Schemas.** Prompts often ask the model to output a raw JSON object containing a `tool` or `name` key alongside an `arguments` object. [](https://www.youtube.com/watch?v=QiRdYCNXAxk)
* **The ReAct Pattern (Reasoning + Acting).** Users on r/LangChain agree that prompting models with the ReAct framework is a standard fallback when native support is missing. The prompt forces the model to follow a strict text template (`Thought:` \-> `Action:` \-> `Action Input:`) so the application can easily parse the action name and input. [](https://medium.com/@rushing%5Fandrei/function-calling-with-open-source-llms-594aa5b3a304)

### 2\. Use Stop Sequences to Halt Generation

In native tool calling, the model stops generating as soon as it emits a special tool-call token. To replicate this manually, developers pass a **stop sequence** (such as `</tool_call>` or `Observation:`) into the LLM API request. When the model generates that exact string, the API immediately halts text generation so the model does not hallucinate the tool's output. [](https://www.ikuma.cloud/blog/article/llm-tool-call)

### 3\. Parse, Execute, and Return the "Observation"

Once generation stops, the developer's application code takes over. [](https://www.ikuma.cloud/blog/article/llm-tool-call)

* **Parsing and Execution.** The code scans the model's response for the agreed-upon JSON or XML pattern, extracts the arguments, and executes the actual function locally. [](https://arxiv.org/html/2407.04997v1)
* **Injecting Results.** Because APIs without native tool calling lack a `role: "tool"` message type, the application appends the function's output back into the chat history as a standard `user` or `system` message. This message is usually prefixed with a label like `Observation:` or `Tool Result:`, prompting the model to continue generating its final answer. [](https://arxiv.org/html/2407.04997v1)

### Example System Prompt

To implement this manually, a developer might pass a system prompt like this:

text

```
You have access to the following tool:
- get_weather(location: string): Returns the current weather for a city.

If you need to use a tool to answer the user, output ONLY a JSON block wrapped in <tool> tags and stop. Do not guess the answer.
Format:
<tool>
{"name": "get_weather", "arguments": {"location": "Boston"}}
</tool>

If you do not need a tool, answer the user directly.

```



_(Note: When sending this request, the developer would set `stop=["</tool>"]` in the API parameters.)_ [](https://www.ikuma.cloud/blog/article/llm-tool-call)

If you are building this right now, let me know:

* Which **LLM or API gateway** you are using
* Whether you need to support **multiple tool calls** in a single turn

I can help you write a tailored **system prompt** and **parsing loop** in Python or JavaScript.

* [](https://www.ikuma.cloud/blog/article/llm-tool-call)  
www.ikuma.cloud  
Why LLMs without tool calling capability can call tools?  
May 7, 2026 — Decoding halts when the closing tag appears; Detect the pattern in the text, parse it, and execute the tool. a hosted provider's s...
* [](https://www.reddit.com/r/LangChain/comments/1pd58iv/implementing%5Ftool%5Fcalling%5Fwhen%5Fgateway%5Flacks/)  
Reddit·r/LangChain  
Implementing Tool Calling When Gateway Lacks Native Support  
December 4, 2025 — This involves instructing the LLM directly in the system prompt to output in a parsable format, which is then parsed by client-sid...
* [](https://medium.com/@rushing%5Fandrei/function-calling-with-open-source-llms-594aa5b3a304)  
Medium·Andrei Bondarev  
Function Calling with Open  
July 17, 2024 — LLMs that natively support function calling utilize special tokens to wrap this capability. In the example below an open-source LL...

Show all

# what prompts do popular libs use to make llms tool call in non native way

When an LLM does not support native API function calling (or when a framework avoids it for local models, streaming, or multi-step reasoning), libraries inject tool definitions into the system prompt and parse the raw text output. [](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)

Across popular libraries, non-native tool calling relies on **four standard prompt patterns**. [](https://forum.langchain.com/t/react-prompt-template/1696)

---

### 1\. The ReAct (Key-Value Text) Pattern

Used by **LangChain** (`create_react_agent`) and **LlamaIndex** (`ReActAgent`), this pattern forces the model to follow a strict alternating loop of `Thought`, `Action`, `Action Input`, and `Observation`. The framework sets `Observation:` as a **stop sequence** so the model halts generation while the host code runs the function and appends the result. [](https://developers.llamaindex.ai/python/examples/agent/react%5Fagent/)

**Typical Prompt Template ([LangChain](https://smith.langchain.com/hub/langchain-ai/react-agent-template) style):**

> Users can reference the full ReAct prompt structure, parsing mechanics (using regular expressions on `Action:` and `Action Input:`), and trade-offs (such as occasional formatting breaks or hallucinated observations) in the source documentation. [](https://github.com/run-llama/llama%5Findex/issues/13726)

---

#### 2\. The XML Tag Pattern

Popularized by coding agents like **Cline**, **Roo Code**, and older **Anthropic** workflows, this pattern uses XML-style tags (`<tool_name><param>value</param></tool_name>`) to bypass JSON escaping complications. [](https://cline.bot/blog/cline-v3-35)

* **Parsing mechanism & Trade-offs:** Streaming detectors monitor token streams for opening and closing tags. This approach excels when passing large code blocks or markdown where escaping quotes or newlines would cause syntax errors. [](https://github.com/RooCodeInc/Roo-Code/issues/10325)

---

#### 3\. The JSON Schema + Pydantic Retry Pattern

Used by **Instructor**, **Outlines**, and **Pydantic AI**, this method injects raw JSON schemas into the prompt. [](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)

* **Parsing mechanism & Trade-offs:** The framework strips markdown code blocks, parses the JSON, and validates types with Pydantic. If validation fails, it loops the error message back to the LLM for self-correction, ensuring strict type safety on non-native models. [](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)

---

#### 4\. The Signature / Field-Marker Pattern

Used by **DSPy** (`ChatAdapter`), this lightweight strategy replaces verbose JSON with custom markdown field headers (such as `[[ ## next_tool_name ## ]]`). [](https://dspy.ai/current/getting-started/react-and-tools/)

* **Parsing mechanism & Trade-offs:** Outputs are split along delimiter headers and coerced into typed objects, significantly lowering token overhead compared to standard JSON schematics. [](https://dspy.ai/current/diving-deeper/tools/)

---

#### Quick Comparison

| Pattern           | Representative Libraries | Output Format                        | Best Used When                                                             |
| ----------------- | ------------------------ | ------------------------------------ | -------------------------------------------------------------------------- |
| **ReAct**         | LangChain, LlamaIndex    | Plain text (Action: / Action Input:) | Using older or smaller completion models that struggle with strict JSON.   |
| **XML Tags**      | Cline, Roo Code          | <tool><param>val</param></tool>      | Passing multi-line code, file contents, or text with heavy punctuation.    |
| **JSON + Retry**  | Instructor, Pydantic AI  | \`\`\`json { ... } \`\`\`            | Strict schema validation and automatic error self-correction are required. |
| **Field Markers** | DSPy                     | \[\[ ## field ## \]\] headers        | Optimizing prompts programmatically with minimal token bloat.              |

If you are building your own parser or choosing a fallback strategy, let me know:

* **Which model** you are targeting (e.g., a small local model like Llama 3 8B or a larger API model)
* **What kind of arguments** your tools take (simple strings/numbers vs. multi-line code or nested objects)

I can share a copy-pasteable prompt and parser snippet tailored to your setup.

* [](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)  
Agenta  
The guide to structured outputs and function calling with LLMs — Agenta Blog  
September 10, 2025 — Validation: JSON Schema, Pydantic, Zod for type constraints and error catching. Function Calling: Defining schemas, extracting nam...
* [](https://arxiv.org/html/2407.04997v1)  
arXiv  
Achieving Tool Calling Functionality in LLMs Using Only Prompt Engineering Without Fine-Tuning  
July 6, 2024 — Prompt injection embeds tool metadata and formatting instructions into the system prompt; tool result feedback parses outputs via ...
* [](https://medium.com/@rushing%5Fandrei/function-calling-with-open-source-llms-594aa5b3a304)  
Medium·Andrei Bondarev  
Function Calling with Open  
July 17, 2024 — If the LLM does not natively support function calling then a combination of prompt engineering, fine-tuning and constrained decodi...

Show all

# can llms output valid tool calls freely in an output

**Yes, modern LLMs can output valid tool calls freely alongside or instead of normal text** **.** However, the exact reliability and mechanics depend on whether you use native API tool-calling features or prompt the model to generate them in plain text. [](https://www.langchain.com/blog/tool-calling-with-langchain)

### How Tool Calls Are Output

* **Dedicated output channels.** When using API-native tool calling, the model does not execute code directly. Instead, it generates a structured intent payload (usually JSON) in a separate response field while optionally outputting normal text. [](https://zaingz.medium.com/understanding-tool-calling-how-llms-interact-with-the-real-world-2cd9088b99a8)
* **Autonomous decision-making.** By default (`tool_choice: "auto"`), the model decides freely whether to answer with regular text, call one tool, or invoke multiple tools in parallel based on the conversation context. [](https://www.langchain.com/blog/tool-calling-with-langchain)
* **Interleaved text and calls.** Models can output reasoning or conversational text before emitting a tool call, though strict schema settings can sometimes alter how freely they generate text beforehand. [](https://community.openai.com/t/how-can-i-ensure-every-llm-reply-includes-exactly-one-message-and-one-tool-call/1283087)

### Guaranteeing Validity

* **Guided decoding and strict schemas.** Without constraints, an LLM generating tool calls in free-form text can produce malformed JSON, trailing commas, or hallucinated parameters. As noted by users on the [vLLM Forum](https://discuss.vllm.ai/t/how-does-tool-choice-effect-vllm/1945), inference engines use guided decoding (such as finite state machines) to restrict token generation so every tool call strictly matches your defined JSON schema. [](https://discuss.vllm.ai/t/how-does-tool-choice-effect-vllm/1945)
* **Reasoning trade-offs.** Research on [arXiv](https://arxiv.org/html/2408.02442v1) shows that forcing an LLM to strictly adhere to rigid formats during its entire generation can degrade its reasoning abilities. Allowing the model to think or write freely before triggering a structured tool call preserves accuracy. [](https://arxiv.org/html/2408.02442v1)
* **Runtime validation.** Even when syntax is 100% valid JSON, a model can still pick the wrong tool or pass logically invalid arguments. Your application code still needs to parse, validate, and execute the call before feeding the result back to the model. [](https://www.youtube.com/watch?v=JytjrbDaI44)

Are you trying to implement **free-form tool calling** in a specific framework (like OpenAI, Anthropic, or a local model via vLLM), or are you looking to **interleave reasoning text** with tool executions? Let me know so I can share the exact configuration details.

* [](https://community.openai.com/t/how-can-i-ensure-every-llm-reply-includes-exactly-one-message-and-one-tool-call/1283087)  
OpenAI Developer Community  
How can I ensure every LLM reply includes exactly one ...  
June 9, 2025 — using structured JSON output with a \`json\_schema\` and \`strict\` setting can force the LLM to adhere to a specific format that inclu...
* [](https://spice.ai/learn/llm-tool-calling)  
Spice AI  
What is LLM Tool Calling? AI Function Calling  
This approach has several problems: Unreliable formatting: The model might include markdown code fences, explanatory text, or malf...
* [](https://www.langchain.com/blog/tool-calling-with-langchain)  
LangChain  
Tool Calling with LangChain  
April 11, 2024 — Tool calling is a powerful technique that allows developers to build sophisticated applications that can leverage LLMs to access, ...

Show all

# what do you see on payload when llms output valid tool calls freely in an output

When an LLM outputs a valid tool call via a modern API (such as OpenAI, Anthropic, or Gemini), the response payload replaces standard conversational text with **structured metadata and a `tool_calls` array**, while setting the **`finish_reason` to `"tool_calls"`**. [](https://medium.com/@jamestang/llm-function-calling-explained-a-deep-dive-into-the-request-and-response-payloads-894800fcad75)

Instead of returning a final answer, the model pauses generation and asks your application to run a specific function with generated arguments. [](https://www.youtube.com/watch?v=QiRdYCNXAxk&t=386)

### Key Elements in the Response Payload

In a standard Chat Completions API response, you will see the following structure: [](https://datacream.substack.com/p/structured-outputs-with-llms-json)

* **Empty or Null Content.** The `message.content` field is typically set to `null` (or left empty) because the model chose to invoke a tool rather than speak to the user. Some reasoning models or specific providers may include a brief "thought" or status message alongside the call. [](https://datacream.substack.com/p/structured-outputs-with-llms-json)
* **The `tool_calls` Array.** This list holds one or more tool invocation objects requested by the model. If the model supports parallel tool calling, multiple objects will appear here at once. [](https://www.youtube.com/watch?v=QiRdYCNXAxk&t=386)
* **Unique Call ID.** Each item in the array has an `id` (e.g., `call_abc123`). Your application must pass this exact ID back when returning the function's output so the model knows which request the data belongs to.
* **Function Name and Arguments.** Inside each tool call object is a `function` block containing the exact `name` of the tool and a JSON-encoded string of `arguments` populated from the user's prompt. [](https://datacream.substack.com/p/structured-outputs-with-llms-json)
* **Stop Reason.** The top-level `finish_reason` changes from `"stop"` to `"tool_calls"` (or `"tool_use"` depending on the provider). This signals your code to parse the JSON, run the local function, and send the result back in a new API turn. [](https://medium.com/@jamestang/llm-function-calling-explained-a-deep-dive-into-the-request-and-response-payloads-894800fcad75)

### Example Payload Structure

Here is what a typical JSON payload looks like when an LLM decides to call a weather tool:

json

```
{
  "id": "chatcmpl-987654321",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
          {
            "id": "call_9x8y7z6w",
            "type": "function",
            "function": {
              "name": "get_current_weather",
              "arguments": "{\"location\": \"Mountain View, CA\", \"unit\": \"fahrenheit\"}"
            }
          }
        ]
      },
      "finish_reason": "tool_calls"
    }
  ]
}

```



### Raw Token Output vs. API Payload

If you are looking at the **raw tokens** generated by the model before the API provider's inference engine parses them, the payload looks different:

* **Special Control Tokens.** Behind the scenes, fine-tuned models output special delimiters (such as `<|tool_call|>` or `<function=get_weather>`) followed by raw JSON or XML.
* **API Middleware Parsing.** Inference servers intercept these special tokens, validate the syntax against your schema, and package them cleanly into the `tool_calls` JSON object shown above.
* **Unconstrained Text ("Freely" Outputting).** If you prompt an open-weights model without using native tool-calling parameters, the model outputs the JSON or XML directly inside the standard `message.content` text string, often wrapped in markdown code fences (```` ```json ````) that your code must manually strip and parse. [](https://dev.to/ayinedjimi-consultants/llm-output-validation-5-patterns-that-actually-work-in-production-1edi)

Are you working with a specific **API provider** (like OpenAI, Anthropic, or Gemini) or running an **open-weights model** locally? Let me know if you'd like to see how to parse the payload or send the tool's output back to the model.

* [](https://www.youtube.com/watch?v=QiRdYCNXAxk&t=386)  
YouTube·Tommy Eberle  
How LLM Tool Calling Works  
Mar 27, 2025 — if a tool call is made, it adheres to the provided instructions and outputs a predictable JSON format. The developer then needs to...  
7m
* [](https://medium.com/@jamestang/llm-function-calling-explained-a-deep-dive-into-the-request-and-response-payloads-894800fcad75)  
Medium·James Tang  
LLM Function Calling Explained: A Deep Dive into the Request and Response Payloads | by James Tang | Medium  
June 10, 2025 — LLM function calling bridges language models ・ payload (tools); the LLM responds with tool\_calls ・ the loop repeats until finish\_r...
* [](https://datacream.substack.com/p/structured-outputs-with-llms-json)  
Substack·DataCream🍨  
Structured Outputs with LLMs: JSON Mode, Function Calling ...  
July 21, 2026 — The model returns a tool\_calls object instead of a regular text response … filled in the arguments on its own. Function Calling is...

Show all


