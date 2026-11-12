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

