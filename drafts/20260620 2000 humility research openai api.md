# (d) all options of openai compatible api

The **OpenAI-compatible API ecosystem** allows developers to swap out the official OpenAI backend for alternative AI providers, local inference engines, or orchestration gateways without rewriting their codebase. You simply change the `base_url` and `api_key` in your OpenAI SDK setup. \[[1](https://docs.perplexity.ai/docs/agent-api/openai-compatibility), [2](https://github.com/Nayjest/lm-proxy), [3](https://geekflare.com/guides/best-ai-gateways/), [4](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/), [5](https://developers.openai.com/cookbook/articles/gpt-oss/run-locally-lmstudio)]

The primary options available for OpenAI-compatible APIs are organized below by category:

### Local Inference Servers (Self-Hosted)

These projects let you host open-source models (like LLaMA or Mistral) locally on your hardware while exposing an endpoint that mimics OpenAI's `/v1/chat/completions`. \[[1](https://docs.ollama.com/api/openai-compatibility), [2](https://medium.com/@akshat.g%5F77864/free-and-paid-large-language-models-with-langchain-5950033b8c7d)]

- \*\*\*\*[Ollama](https://docs.ollama.com/api/openai-compatibility)\*\*: Popular tool for running open-source models locally; features a built-in, lightweight OpenAI-compatible endpoint.
- \*\*\*\*[vLLM](https://docs.vllm.ai/en/stable/serving/openai%5Fcompatible%5Fserver/)\*\*: High-performance, production-grade LLM serving engine optimized for high-throughput and parallel tool calling.
- **LM Studio**: User-friendly desktop application with a built-in local [HTTP server that supports standard OpenAI endpoints](https://lmstudio.ai/docs/developer/openai-compat).
- **LocalAI**: Free, open-source alternative designed as a drop-in replacement REST API for local AI.
- **llama.cpp**: Minimalist C/C++ backend that includes a server executable (`llama-server`) providing native OpenAI compatibility. \[[1](https://ai-sdk.dev/providers/openai-compatible-providers), [2](https://www.youtube.com/watch?v=b-BzeHF6WLA), [3](https://docs.vllm.ai/en/stable/serving/openai%5Fcompatible%5Fserver/), [4](https://ai-sdk.dev/providers/ai-sdk-providers/openai), [5](https://github.com/juspay/neurolink/blob/release/docs/getting-started/providers/openai-compatible.md), [6](https://lmstudio.ai/docs/developer/openai-compat), [7](https://docs.ollama.com/api/openai-compatibility)]

### Cloud AI Providers & Model Aggregators \[[1](https://www.reddit.com/r/LocalLLaMA/comments/1fwrs1e/open%5Fsource%5Fprojects%5Fthat%5Fare%5Fopenai%5Fapi/)]

Many cloud hosting platforms and proprietary model creators offer native OpenAI API compatibility so you can access their hosted frontier models seamlessly. \[[1](https://docs.getsquid.ai/docs/squid-console/connectors/ai/openai-compatible-chat/), [2](https://creator.poe.com/docs/external-applications/openai-compatible-api), [3](https://www.reddit.com/r/LocalLLaMA/comments/1fwrs1e/open%5Fsource%5Fprojects%5Fthat%5Fare%5Fopenai%5Fapi/)]

- \*\***DeepSeek**: Cost-effective hosted frontier models utilizing standard OpenAI parameter structures.
- \*\***OpenRouter**: An aggregator that provides access to hundreds of open and closed-source models through a single interface.
- \*\*\*\*[Poe Creator Platform](https://creator.poe.com/docs/external-applications/openai-compatible-api)\*\*: Single OpenAI-compatible token that bridges access to major proprietary labs, image, and video generators.
- \***\*[Together AI](https://docs.together.ai/docs/inference/openai-compatibility)** and \*\*\*\*[Fireworks AI](https://agentgateway.dev/docs/kubernetes/main/llm/providers/openai-compatible/)\*\*: Low-latency developer platforms hosting open-weight models natively adhering to the OpenAI specification.
- \*\***Groq**: Ultra-fast LPU inference hosting LLaMA and Mixtral models behind an OpenAI layout.
- \*\*\*\*[Perplexity API](https://docs.perplexity.ai/docs/agent-api/openai-compatibility)\*\*: Specializes in web-search grounded generation using an OpenAI-compatible integration fallback.
- \*\*\*\*[Google Gemini API](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai?gl=us)\*\*: Fully supports an OpenAI compatibility mode for its Gemini enterprise models, mapping features like thinking token budgets seamlessly. \[[1](https://ai-sdk.dev/providers/openai-compatible-providers), [2](https://agentgateway.dev/docs/kubernetes/main/llm/providers/openai-compatible/), [3](https://github.com/juspay/neurolink/blob/release/docs/getting-started/providers/openai-compatible.md), [4](https://creator.poe.com/docs/external-applications/openai-compatible-api), [5](https://docs.together.ai/docs/inference/openai-compatibility), [6](https://docs.perplexity.ai/docs/agent-api/openai-compatibility), [7](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai)]

### Enterprise Cloud Gateways

Major public cloud vendors provide managed proxy interfaces for their sovereign enterprise model deployments.

- \*\*\*\*[Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/foundry/openai/reference)\*\*: Microsoft's official enterprise hosting of OpenAI models, accepting matching API payloads via modified headers.
- \*\*\*\*[Amazon SageMaker AI Endpoints](https://aws.amazon.com/blogs/machine-learning/announcing-openai-compatible-api-support-for-amazon-sagemaker-ai-endpoints/)\*\*: Managed architecture feature providing native OpenAI-compatible request routing directly to AWS-hosted models.
- \*\*\*\*[Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/)\*\*: Globally distributed serverless inference endpoints running open models using standard OpenAI clients. \[[1](https://learn.microsoft.com/en-us/azure/foundry/openai/reference), [2](https://discuss.huggingface.co/t/openai-api-standards-onprem-model-options/146593), [3](https://aws.amazon.com/blogs/machine-learning/announcing-openai-compatible-api-support-for-amazon-sagemaker-ai-endpoints/), [4](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/), [5](https://fast.io/resources/openclaw-openai-gpt-integration/)]

### Open API Standardization Initiatives \[[1](https://www.openapis.org/about), [2](https://www.reddit.com/r/LocalLLaMA/comments/1fwrs1e/open%5Fsource%5Fprojects%5Fthat%5Fare%5Fopenai%5Fapi/)]

The developer ecosystem is actively pushing to turn the OpenAI schema into a universal open web standard: \[[1](https://www.reddit.com/r/LocalLLaMA/comments/1fwrs1e/open%5Fsource%5Fprojects%5Fthat%5Fare%5Fopenai%5Fapi/)]

- \*\*\*\*[Open Responses Standard](https://www.youtube.com/watch?v=b-BzeHF6WLA)\*\*: Backed by companies like Hugging Face, Vercel, and Ollama, this initiative extends the OpenAI architecture into an open, community-driven standard that cleanly handles modern workflows like multi-turn agentic loops and advanced reasoning extraction. \[[1](https://www.youtube.com/watch?v=b-BzeHF6WLA)]

If you are trying to configure a specific software application or local server setup, tell me **which tool or client** you are using so I can provide the exact **Base URL and parameter mapping** required. \[[1](https://www.reddit.com/r/LocalLLaMA/comments/1fwrs1e/open%5Fsource%5Fprojects%5Fthat%5Fare%5Fopenai%5Fapi/)]

- [link](https://ai-sdk.dev/providers/openai-compatible-providers)\
  OpenAI Compatible Providers - AI SDK\
  v6 (Latest) AI SDK 6.x. AI SDK Providers. AI Gateway. Open Responses. Claude Platform on AWS. Black Forest Labs. Fireworks. DeepSe...\
  AI SDK
- [link](https://creator.poe.com/docs/external-applications/openai-compatible-api)\
  OpenAI Compatible API | Poe Creator Platform\
  Apr 20, 2026 — The Poe API provides access to hundreds of AI models and bots through a single OpenAI-compatible endpoint. Switch between frontier...\
  Poe Creator Platform
- [link](https://docs.ollama.com/api/openai-compatibility)\
  OpenAI compatibility - Ollama's documentation\
  ​ /v1/chat/completions \* Chat completions. \* Streaming. \* JSON mode. \* Reproducible outputs. \* Vision. \* Tools. \* Reasoning/thinki...\
  Ollama

Show all

# openai compatible api

An **OpenAI-compatible API** is an alternative AI server or service that mimics OpenAI’s exact network layout, endpoints (like `/v1/chat/completions`), and request format. This allows you to swap OpenAI's cloud models with open-source models, other commercial providers, or local engines **without rewriting your application code**. You simply change your target URL and your authentication key. \[[1](https://bentoml.com/llm/model-interaction/openai-compatible-api), [2](https://developers.google.com/edge/litert-lm/cli/openai%5Fserver), [3](https://docs.together.ai/docs/inference/openai-compatibility), [4](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/), [5](https://www.nscale.com/blog/has-openai-api-compatibility-become-the-gold-standard)]

### Popular OpenAI-Compatible Solutions

Depending on whether you want to run models locally on your hardware or use a different cloud provider, you have several options:

### Local & Self-Hosted Infrastructure

- \*\*\*\*[Ollama](https://docs.ollama.com/api/openai-compatibility)\*\*: Running an active server locally on Mac, Windows, or Linux provides an automatic, offline OpenAI-compatible backend.
- \*\*\*\*[LM Studio](https://lmstudio.ai/docs/developer/openai-compat)\*\*: A visual desktop application that includes a single-click local API server for any model downloaded from Hugging Face.
- \*\*\*\*[vLLM](https://docs.vllm.ai/en/stable/serving/openai%5Fcompatible%5Fserver/)\*\*: A high-throughput, industry-standard engine used to host open-source models on enterprise GPU servers.
- \*\***LocalAI**: A self-hosted, drop-in community alternative that mimics text generation, image generation, and audio transcription endpoints. \[[1](https://www.reddit.com/r/LocalLLaMA/comments/16csz5n/best%5Fopenai%5Fapi%5Fcompatible%5Fapplication%5Fserver/), [2](https://docs.ollama.com/api/openai-compatibility), [3](https://www.youtube.com/watch?v=38jlvmBdBrU\&t=1), [4](https://www.youtube.com/watch?v=hX8pt%5FdrIck), [5](https://lmstudio.ai/docs/developer/openai-compat), [6](https://www.nscale.com/blog/has-openai-api-compatibility-become-the-gold-standard), [7](https://docs.vllm.ai/en/stable/serving/openai%5Fcompatible%5Fserver/), [8](https://docs.together.ai/docs/inference/openai-compatibility)]

### Alternative Cloud Providers

- \*\*\*\*[Google Gemini API](https://ai.google.dev/gemini-api/docs/openai?gl=us)\*\*: Google natively accepts OpenAI SDK syntax to call its frontier Gemini models.
- \*\*\*\*[Groq Cloud](https://console.groq.com/docs/openai)\*\*: Offers ultra-fast LPU inference speeds for open-source models using the same standard SDK syntax.
- \*\*\*\*[Together AI](https://docs.together.ai/docs/inference/openai-compatibility)\*\*: Hosts thousands of open-source models with an identical REST architecture.
- \*\*\*\*[Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/)\*\*: Runs models directly on Cloudflare’s global edge network using standard formats. \[[1](https://ai.google.dev/gemini-api/docs/openai), [2](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai), [3](https://console.groq.com/docs/openai), [4](https://docs.together.ai/docs/inference/openai-compatibility), [5](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/)]

***

### How to Implement It (Python Example)

To route your application to an alternative provider, keep the official `openai` library installed but adjust the `base_url` and `api_key` values. \[[1](https://docs.litellm.ai/docs/providers/openai%5Fcompatible), [2](https://docs.together.ai/docs/inference/openai-compatibility)]

Here is how you point your code to a local engine like **Ollama** or **LM Studio**: \[[1](https://docs.ollama.com/api/openai-compatibility), [2](https://lmstudio.ai/docs/developer/openai-compat)]

python

```
import openai

client = openai.OpenAI(
    # Point to your alternative backend address
    base_url="http://localhost:11434/v1",
    # Provide the provider's key or a dummy text if hosted locally
    api_key="ollama"
)

response = client.chat.completions.create(
    model="llama3", # Specify the model downloaded on your server
    messages=[
        {"role": "user", "content": "Explain API compatibility in 5 words."}
    ]
)

print(response.choices[0].message.content)
```

Use code with caution.

### Key Technical Specs to Keep in Mind

- **The API Key Requirement**: The official OpenAI software libraries strictly check for an `api_key` string before sending data. When using completely free, local options (like Ollama), passing a placeholder string like `"EMPTY"` or `"local"` is required to bypass this client check.
- **The Model Identifier**: You must update the `model="..."` parameter to match the exact filename or tag designated by your alternative provider (e.g., `google/gemini-2.5-flash` or `mistral`).
- **Endpoint Capabilities**: While `/v1/chat/completions` is almost universally supported, advanced features like structured JSON outputs, function calling tools, or image generation vary depending on the host software package. \[[1](https://www.reddit.com/r/LocalLLaMA/comments/16csz5n/best%5Fopenai%5Fapi%5Fcompatible%5Fapplication%5Fserver/), [2](https://bentoml.com/llm/model-interaction/openai-compatible-api), [3](https://docs.litellm.ai/docs/providers/openai%5Fcompatible), [4](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/start/openai), [5](https://creator.poe.com/docs/external-applications/openai-compatible-api)]

Are you planning to build an application for a **local offline setup**, or are you looking to switch between **cloud providers**? Let me know so I can provide the exact configuration files or setup steps you need.

- [link](https://www.reddit.com/r/LocalLLaMA/comments/16csz5n/best%5Fopenai%5Fapi%5Fcompatible%5Fapplication%5Fserver/)\
  Best openai API compatible application server : r/LocalLLaMA\
  Sep 7, 2023 — • 8mo ago. I'm the author of LocalAI (the local OpenAI-compatible API). We just released v3.7.0 with full Agentic Support (tool us...\
  Reddit·r/LocalLLaMA
- [link](https://bentoml.com/llm/model-interaction/openai-compatible-api)\
  OpenAI-compatible API | LLM Inference Handbook - BentoML\
  In these cases, rewriting application logic to fit a new API can be tedious and error-prone. OpenAI-compatible APIs address these ...\
  BentoML
- [link](https://docs.ollama.com/api/openai-compatibility)\
  OpenAI compatibility - Ollama's documentation\
  Ollama provides compatibility with parts of the OpenAI API to help connect existing applications to Ollama.\
  Ollama

Show all

## You said: npm libs

An OpenAI-compatible API can be implemented in Node.js using several standard npm libraries. You can either use the official client library redirected to your alternative backend or use lightweight alternatives. \[[1](https://community.openai.com/t/official-node-js-client-library/14709)]

### Key npm Libraries

### 1. `@google/genai` or `@google/vertexai`

- Best for connecting to Google Gemini using OpenAI-like configurations.

### 2. `openai`

- The official library.
- Fully compatible with alternative backends.
- Most common implementation pattern.

### 3. `axios` or `node-fetch`

- For direct HTTP requests.
- Lightweight alternative to full SDKs.
- Avoids external library weight.

***

### Implementation Example (Official SDK)

You can use the official `openai` package and configure it to point to a local model (like Ollama) or another cloud provider by changing the `baseURL` and `apiKey`.

javascript

```
import OpenAI from 'openai';

const openai = new OpenAI({
  // Point to your alternative backend
  baseURL: 'http://localhost:11434/v1',
  // Required string, use placeholder for local servers
  apiKey: 'ollama',
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'llama3',
    messages: [{ role: 'user', content: 'Say hello in JavaScript.' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
```

Use code with caution.

### Implementation Example (Native Fetch)

If you do not want to install the heavy OpenAI SDK, you can use native `fetch` (built into modern Node.js versions) to hit the exact same endpoints.

javascript

```
async function callCompatibleAPI() {
  const response = await fetch('http://localhost:11434/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer local-provider-key'
    },
    body: JSON.stringify({
      model: 'llama3',
      messages: [{ role: 'user', content: 'Keep it short.' }]
    })
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
}

callCompatibleAPI();
```

Use code with caution.

Are you looking to connect to a **specific cloud provider** (like Groq or DeepSeek), or are you building a backend to **host your own** OpenAI-compatible API?

- [link](https://community.openai.com/t/official-node-js-client-library/14709)\
  Official Node.js client library - Announcements\
  Jan 20, 2022 — We just released an official Node. js library for the OpenAI API. It's available to install through npm, and you can find code exa...\
  \
  \
  OpenAI Developer Community

## You said: popular alternative libs

If you want to move completely away from the official `openai` npm package, several open-source community libraries natively support OpenAI-compatible endpoint configurations. These alternatives often provide better support for edge environments, simpler setups, or multi-provider switching.

### Top Alternative npm Libraries

### 1. `@ai-sdk/openai` (Vercel AI SDK)

- **Best for**: Modern web apps (Next.js, Remix) and streaming interfaces.
- **Why use it**: It is the industry standard for building AI user interfaces. You can easily point its OpenAI provider to any compatible base URL.
- **Installation**: `npm i ai @ai-sdk/openai`

### 2. `langchain` / `@langchain/openai`

- **Best for**: Complex AI workflows, agents, and RAG (Retrieval-Augmented Generation).
- **Why use it**: If you plan to chain multiple prompts, manage memory, or connect vector databases, LangChain natively supports changing the `configuration.baseURL` to any compatible endpoint.
- **Installation**: `npm i @langchain/openai @langchain/core`

### 3. `ollama`

- **Best for**: Purely local development using Ollama.
- **Why use it**: If your backend is exclusively Ollama, this official lightweight client bypasses the need for OpenAI formatting entirely while keeping code minimal.
- **Installation**: `npm i ollama`

### 4. `librechat` (or custom fetch)

- **Best for**: Zero-dependency architectures.
- **Why use it**: Because OpenAI-compatible APIs use standard REST architecture, using the built-in Node.js `fetch` API completely eliminates your dependency on third-party vendor code.

***

### Code Example: Vercel AI SDK with Compatible API

The Vercel AI SDK is highly optimized for streaming text directly to a frontend UI. Here is how you initialize it with an alternative local or cloud provider:

javascript

```
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

// 1. Create a custom OpenAI instance pointing to your provider
const customProvider = createOpenAI({
  baseURL: 'http://localhost:11434/v1', // Target your compatible server
  apiKey: 'placeholder-key',            // Required text fallback
});

async function main() {
  // 2. Pass your custom provider instance to the generation functions
  const { text } = await generateText({
    model: customProvider('llama3'),
    prompt: 'Give me a 3-word motivational quote.',
  });

  console.log(text);
}

main();
```

Use code with caution.

### Code Example: LangChain with Compatible API

If you are building an autonomous agent or an advanced backend, LangChain lets you swap the underlying LLM seamlessly:

javascript

```
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  configuration: {
    baseURL: "https://groq.com", // Example: Groq cloud
  },
  apiKey: "your-groq-api-key",
  modelName: "llama3-8b-8192",
  temperature: 0.7,
});

const response = await model.invoke("What is a LangChain agent?");
console.log(response.content);
```

Use code with caution.

Which architecture pattern fits your project better: **streaming responses directly to a user interface**, or managing **complex multi-step backend workflows**?

## You said: how easy is it to send the payload directly

It is **extremely easy** to send the payload directly. Because OpenAI-compatible APIs follow standard HTTP REST conventions, you do not need any SDK at all. \[[1](https://www.mymxdata.com/en-gb/send-files-securely/)]

You can use the native, zero-dependency `fetch` API built straight into modern Node.js (version 18+).

### The Exact JSON Payload Structure

You only need to send a standard `POST` request containing a JSON body with two core fields: `model` and `messages`.

json

```
{
  "model": "your-model-name",
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Hello!" }
  ]
}
```

Use code with caution.

### Complete Code Example (Zero Dependencies)

Copy and paste this into any modern Node.js file (`.js` using ESM or `.mjs`):

javascript

```
const url = "http://localhost:11434/v1/chat/completions"; // Change to your provider
const apiKey = "your-api-key-or-placeholder";

async function sendDirectPayload() {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "llama3", // Change to your model tag
      messages: [{ role: "user", content: "Hi" }],
      temperature: 0.7
    })
  });

  const data = await response.json();

  // Extracting the text response from the standard OpenAI JSON shape
  console.log(data.choices[0].message.content);
}

sendDirectPayload();
```

Use code with caution.

### Pros & Cons of the Direct Approach

- **Pros**:
  - **Zero bloated packages** added to your `package.json`.
  - **Perfect for edge environments** (like Cloudflare Workers) where bundle size matters.
  - **100% future-proof** against third-party SDK breaking updates.
- **Cons**:
  - **No automatic retries** if the network drops or rate limits hit.
  - **Manual streaming setup** via `ReadableStream` handling if you need text to appear word-by-word.
  - **No automatic TypeScript definitions** for the response object shape.

Do you need to support **real-time text streaming (`stream: true`)** in your project, or is a **single, flat JSON response** sufficient for your use case?

- [link](https://www.mymxdata.com/en-gb/send-files-securely/)\
  Send Files Securely Online\
  Jan 15, 2025 — Yes, Minimal Steps: Sending a file is as easy as uploading and assigning a recipient. Clients receive files through a clean, brand...\
  \
  \
  My MX Data

## You said: all url endpoints

An OpenAI-compatible API mimics the full architecture of OpenAI's core platform. Below is the comprehensive list of standard URL endpoints available in the API spec, organized by capability.

All endpoints are appended to your provider's base URL (usually ending in `/v1`). \[[1](https://github.com/espressif/esp-box/issues/110)]

### Text & Chat (Most Common)

- **`POST /v1/chat/completions`**: Conversational text generation (supports streaming, tool calling, and structured outputs).
- **`POST /v1/completions`**: Legacy text completion (legacy prompt format, non-chat models). \[[1](https://docs.ovhcloud.com/en/guides/public-cloud/ai-machine-learning/ai-endpoints-responses-api), [2](https://www.linkedin.com/pulse/openai-api-endpoints-overview-hardeep-singh-eoxic)]

### Embeddings & Vector Search

- **`POST /v1/embeddings`**: Converts text strings into numeric vector arrays for RAG and semantic search.

### Multi-Modal & Media

- **`POST /v1/images/generations`**: Generates new images from a text prompt.
- **`POST /v1/images/edits`**: Modifies an existing image based on a mask and prompt.
- **`POST /v1/images/variations`**: Creates visual variations of an uploaded image.
- **`POST /v1/audio/speech`**: Text-to-Speech (TTS) voice generation.
- **`POST /v1/audio/transcriptions`**: Speech-to-Text (STT) audio transcription.
- **`POST /v1/audio/translations`**: Translates audio into English text.

### Model Discovery

- **`GET /v1/models`**: Lists all available models hosted on that specific server instance.
- **`GET /v1/models/{model}`**: Retrieves metadata and permissions for a specific model ID. \[[1](https://abacus.ai/help/developer-platform/route-llm/)]

### Administration & Data (Often Self-Hosted Only)

- **`POST /v1/files`**: Uploads documents for fine-tuning or custom search.
- **`GET /v1/files`**: Lists all uploaded files.
- **`DELETE /v1/files/{file_id}`**: Deletes a specific uploaded file.
- **`POST /v1/fine_tuning/jobs`**: Starts a training run to customize an open-source model.
- **`POST /v1/moderations`**: Checks text input against safety and content policy filters. \[[1](https://www.linkedin.com/pulse/openai-api-endpoints-overview-hardeep-singh-eoxic), [2](https://docs.netlify.com/api-and-cli-guides/api-guides/get-started-with-api/)]

***

### Implementation Pro-Tip: The `/v1/models` Check

When connecting to a brand-new alternative provider or local engine, always hit the **`GET /v1/models`** endpoint first via your browser, Postman, or `curl`.

bash

```
curl http://localhost:11434/v1/models
```

Use code with caution.

This returns a list of exact string IDs you must pass into your payloads. It confirms your network connection is live before you write complex code.

Are you looking for the exact **JSON structure** for one of these specific media or embedding endpoints?

- [link](https://github.com/espressif/esp-box/issues/110)\
  Set OpenAI API Endpoint URL (AEGHB-446) · Issue #110 · espressif/esp-box\
  Nov 7, 2023 — This is usually refered to as the "BASE\_URL" in other languages and defaults to https://api.openai.com/v1 .\
  \
  \
  GitHub
- [link](https://docs.ovhcloud.com/en/guides/public-cloud/ai-machine-learning/ai-endpoints-responses-api)\
  AI Endpoints - Responses API\
  Feb 24, 2026 — The Responses API ( /v1/responses ) is the most recent OpenAI-compatible route. Like v1/chat/completions , it can be used for text...\
  \
  OVHcloud
- [link](https://www.linkedin.com/pulse/openai-api-endpoints-overview-hardeep-singh-eoxic)\
  OpenAI API Endpoints Overview\
  Jul 27, 2025 — 2. /v1/completions Use Case: For simple, stateless completions with text models (legacy). Best suited for single-turn (prompt → re...\
  \
  \
  LinkedIn

Show all

## You said: observability

To track, log, and debug direct payloads or SDK calls to an OpenAI-compatible API, you can implement observability using three different architectural approaches: <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Reverse Proxy Gateways</strong>, <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Auto-Instrumentation SDKs</strong>, or <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Manual Middleware HTTP Interceptors</strong></mark>. \[[1](https://platformengineering.org/blog/opentelemetry-the-platform-engineers-path-to-standardized-observability)]

### 1. Reverse Proxy Gateways (No Code Changes) \[[1](https://wiprotechblogs.medium.com/operationalizing-the-modern-blueprint-for-monitoring-observability-in-llm-slm-systems-1c16adbd5105)]

Instead of pointing your code directly to the model provider, you point it to an intermediate proxy server. The proxy logs everything and routes the payload to the final destination. \[[1](https://softcery.com/lab/top-8-observability-platforms-for-ai-agents-in-2025)]

- \*\*\*\*[LiteLLM Proxy](https://github.com/BerriAI/litellm)\*\*: An open-source proxy that wraps any model to expose an OpenAI-compatible endpoint. It provides drop-in logging connections to Prometheus, Datadog, Langfuse, or Supabase. \[[1](https://builder.aws.com/content/2r9NEmiJyq04vZTfEilhJPEd3nE/unifying-llm-access-with-observability-and-safety-controls-a-practical-example)]
- \*\*\*\*[Portkey](https://portkey.ai/)\*\*: An AI gateway package that logs request/response payloads, tracks latency, and provides fallbacks if your target API drops. \[[1](https://www.truefoundry.com/blog/observability-in-ai-gateway), [2](https://www.reddit.com/r/LangChain/comments/1neh5sw/what%5Fare%5Fthe%5Fbest%5Fopen%5Fsource%5Fllm%5Fobservability/)]
- \*\*\*\*[Langfuse](https://langfuse.com/)\*\*: An open-source engineering platform that tracks your LLM prompt chains, costs, and response latencies using a lightweight proxy configuration. \[[1](https://medium.com/online-inference/mastering-ai-agent-observability-a-comprehensive-guide-b142ed3604b1), [2](https://medium.com/@kpetropavlov/observability-in-multi-agent-llm-systems-telemetry-strategies-for-clarity-and-reliability-fafe9ca3780c), [3](https://symflower.com/en/company/blog/2024/llm-observability/), [4](https://www.pondhouse-data.com/blog/langfuse-observability-platform)]

### 2. Auto-Instrumentation SDKs (Code-Based)

If you prefer managing observability inside your Node.js code, you can use OpenTelemetry-compatible libraries that automatically patch your HTTP clients (`fetch`, `axios`) to record every outbound AI payload. \[[1](https://www.udemy.com/course/opentelemetry-observability/?srsltid=AfmBOoojceUY2BZ5dfa-9stOCNTsDWk0WqxiUHPecguXQCzjIwHIifER)]

- **OpenLLMetry (by Traceloop)**: A standard extension built on top of OpenTelemetry. It auto-detects outbound OpenAI-compatible network calls and streams data to endpoints like Dynatrace, New Relic, or Honeycomb. \[[1](https://signoz.io/blog/llm-observability/), [2](https://coralogix.com/guides/llm-observability-tools/), [3](https://www.dynatrace.com/knowledge-base/openllmetry/), [4](https://posthog.com/blog/best-open-source-llm-observability-tools), [5](https://symflower.com/en/company/blog/2024/llm-observability/)]

javascript

```
// Run this at the absolute top of your entry file
import { Traceloop } from '@traceloop/node-server-sdk';
Traceloop.initialize({
  appName: "my-ai-service",
  disableBatch: true, // Send metrics instantly during development
});
```

Use code with caution.

### 3. Manual Interceptors (Zero Dependencies)

If you handle raw payloads with native `fetch`, you can wrap your request in a standard wrapper to log the precise metadata needed to monitor AI systems.

### Key Metrics to Log:

- **Latency**: Time elapsed between request transmission and full JSON resolution.
- **Token Counts**: Read `usage.prompt_tokens` and `usage.completion_tokens` from the response JSON.
- **Error Rates**: Capture non-200 HTTP status codes to detect rate limits (`429`) or server overloads (`503`).

javascript

```
async function monitoredFetch(url, payload, options = {}) {
  const startTime = performance.now();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      body: JSON.stringify(payload)
    });

    const duration = performance.now() - startTime;
    const data = await response.json();

    // Standard structured logging format for AI monitoring
    console.info({
      event: "llm_call",
      status: response.status,
      latency_ms: duration,
      model: payload.model,
      prompt_tokens: data.usage?.prompt_tokens || 0,
      completion_tokens: data.usage?.completion_tokens || 0
    });

    return data;
  } catch (error) {
    console.error({ event: "llm_error", error: error.message });
    throw error;
  }
}
```

Use code with caution.

Are you looking to stream these logs into an existing dashboard tool like **Grafana / Datadog**, or are you building a **custom local logging setup**?

- [link](https://platformengineering.org/blog/opentelemetry-the-platform-engineers-path-to-standardized-observability)\
  OpenTelemetry: The platform engineer's path to standardized observability\
  Dec 1, 2025 — SDKs and instrumentation generate telemetry from your applications. Auto-instrumentation libraries inject observability into commo...\
  \
  \
  Platform Engineering
- [link](https://wiprotechblogs.medium.com/operationalizing-the-modern-blueprint-for-monitoring-observability-in-llm-slm-systems-1c16adbd5105)\
  Operationalizing The Modern Blueprint for Monitoring & Observability in LLM & SLM Systems\
  Nov 11, 2025 — Reverse Proxy: Intercept and log LLM API calls (e.g., OpenAI, Anthropic) without modifying upstream code.\
  \
  \
  Medium
- [link](https://softcery.com/lab/top-8-observability-platforms-for-ai-agents-in-2025)\
  9 AI Observability Platforms Compared: Phoenix, LangSmith, Langfuse, Logfire, and More\
  Apr 28, 2026 — Proxy-Based Integration You route your LLM requests through a gateway rather than directly to the API provider. For example, you c...\
  \
  \
  Softcery

Show all

## You said: all observability metrics

To comprehensively monitor an OpenAI-compatible API, you need to track metrics across three distinct layers: <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Inference Performance</strong> (the AI model's output metrics), <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">System Health</strong> (the underlying server performance), and <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Semantic/Data Quality</strong> (the utility of the AI responses)</mark>. \[[1](https://nebius.com/blog/posts/ai-model-performance-metrics), [2](https://oneuptime.com/blog/post/2026-02-06-opentelemetry-stability-levels-stable-beta-alpha/view)]

### 1. Inference Performance Metrics (The Core LLM Stats)

These metrics are typically parsed directly out of the JSON response payload's `usage` object.

- **Prompt Tokens**: The count of text units sent in the request (`usage.prompt_tokens`). High spikes signal inefficient prompt engineering or bloated context stuffing.
- **Completion Tokens**: The count of text units generated by the model (`usage.completion_tokens`). This directly controls your cost or compute strain per request.
- **Total Tokens**: The sum of prompt and completion tokens (`usage.total_tokens`). Essential for staying under rate limits or context window ceilings. \[[1](https://docs.livekit.io/deploy/observability/data/), [2](https://developer.konghq.com/observability/explorer/)]
- **Tokens Per Second (TPS)**: Total completion tokens divided by the generation duration. This is the absolute standard for measuring user-perceived text speed.
- **Time to First Token (TTFT)**: The duration between sending the HTTP request and receiving the very first streamed chunk. Crucial for chat application responsiveness.

### 2. System Health & Infrastructure Metrics \[[1](https://www.zenml.io/llmops-database/end-to-end-llm-observability-for-rag-powered-ai-assistant)]

These are traditional DevOps metrics captured by your HTTP client or the server hosting the open-source models (like vLLM or Ollama).

- **Request Latency (Wall-Clock Time)**: Total time from request initiation to full JSON parsing. \[[1](https://uptrace.dev/tools/api-monitoring-tools)]
- **Error Rate by Status Code**: Tracks API reliability:
  - `429 Too Many Requests`: Indicates rate limits or concurrency ceilings reached.
  - `503 Service Unavailable`: Indicates host server crashes or queuing capacity issues.
  - `400 Bad Request`: Indicates malformed JSON syntax or incorrect payload parameters. \[[1](https://www.catchpoint.com/web-performance-monitoring/website-performance-metrics), [2](https://docs.observeinc.com/docs/endpoints)]
- **Queue Time / Pending Requests**: Time a request sits in a local server buffer waiting for a free GPU slot.
- **GPU Memory Utilization (VRAM)**: The percentage of graphics memory consumed. If it hits 100%, the server will crash or bottleneck. \[[1](https://last9.io/blog/the-gpu-metrics-that-actually-matter/), [2](https://developers.meta.com/horizon/blog/ovr-metrics-tool-vrapi-what-do-these-metrics-mean/)]
- **Concurrency / Active Streams**: The number of parallel API requests being actively processed at the exact same moment. \[[1](https://www.linkedin.com/pulse/understanding-api-performance-metrics-key-indicators-success-kumar-vjj8e)]

### 3. Semantic & Quality Metrics (LLM Evaluators) \[[1](https://www.getmaxim.ai/articles/top-5-leading-agent-observability-tools-in-2025/)]

These metrics require an external evaluation framework (like Langfuse or Ragas) or an "LLM-as-a-judge" pattern to inspect the text quality. \[[1](https://www.getmaxim.ai/articles/top-5-leading-agent-observability-tools-in-2025/), [2](https://langfuse.com/faq/all/chatbot-analytics)]

- **Cache Hit Rate**: The percentage of incoming prompts resolved instantaneously via a semantic prompt cache (like GPTCache) instead of running full inference.
- **Cost Tracking**: Calculated by multiplying your token usage totals against your cloud vendor's custom pricing rates.
- **Fallback Trigger Rate**: How often your application falls back to a backup model provider due to primary endpoint failures.
- **User Feedback (Thumbs Up/Down)**: Binary tracking of end-user satisfaction with the specific response.
- **Safety / Guardrail Violations**: Flags indicating if the input or output triggered content moderation filters. \[[1](https://o-mega.ai/articles/top-50-ai-model-evals-full-list-of-benchmarks-october-2025), [2](https://quickchat.ai/post/chatbot-analytics)]

***

### Recommended Prometheus Custom Export Schema

If you are exporting metrics to a dashboard tool like **Grafana**, you should structure your logging database schema around this baseline format:

json

```
{
  "metric_name": "llm_generation_latency_seconds",
  "labels": {
    "model": "llama3.1-8b",
    "provider": "local-vllm",
    "status_code": "200",
    "endpoint": "chat_completions"
  },
  "value": 1.42
}
```

Use code with caution.

Are you configuring an open-source dashboard like **Grafana / Prometheus**, or are you setting up specialized AI-native software like **Langfuse or LangSmith**? \[[1](https://www.digitalapi.ai/blogs/best-api-monitoring-tools), [2](https://redhat-scholars.github.io/istio-tutorial/istio-tutorial/1.9.x/3monitoring-tracing.html), [3](https://luigi-saetta.medium.com/observability-for-enterprise-ai-agents-an-open-source-solution-bb90eb42a086), [4](https://blog.devops.dev/aws-observability-tools-for-bedrock-large-language-models-d732363993fd)]

- [link](https://nebius.com/blog/posts/ai-model-performance-metrics)\
  AI model performance metrics: In-depth guide\
  Dec 13, 2024 — Conclusion Conclusion AI model performance metrics are not just about output speed or user experience. They assess every aspect of...\
  \
  \
  Nebius
- [link](https://oneuptime.com/blog/post/2026-02-06-opentelemetry-stability-levels-stable-beta-alpha/view)\
  How to Understand OpenTelemetry Stability Levels (Stable, Beta, Alpha)\
  Feb 6, 2026 — How Stability Levels Apply to Different Components OpenTelemetry splits into three main layers: API, SDK, and instrumentation. Eac...\
  \
  \
  OneUptime
- [link](https://docs.livekit.io/deploy/observability/data/)\
  Data hooks\
  LLM Metric Description total\_tokens Total token usage for the completion. tokens\_per\_second The rate of token generation (tokens/s...\
  \
  \
  LiveKit Documentation

Show all

## You said: are these included in the response or not

The metrics are **split**. Some are explicitly included inside the raw JSON response payload from the API, while others must be calculated or tracked on your server.

Here is exactly where each metric group lives:

### 1. 🟢 Included Directly in the JSON Response

The **Inference Performance** metrics are delivered directly inside the final JSON payload under the `usage` object.

Whenever you make a successful call (`200 OK`), you will receive this exact structure:

json

```
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "llama3",
  "choices": [{
    "index": 0,
    "message": { "role": "assistant", "content": "Hello!" },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,      // INCLUDED
    "completion_tokens": 12,  // INCLUDED
    "total_tokens": 21       // INCLUDED
  }
}
```

Use code with caution.

### 2. 🟡 Partially Included (Only when Streaming)

Performance time metrics like **Time to First Token (TTFT)** and **Tokens Per Second (TPS)** are **not** explicitly printed as numbers in the response. However, you can derive them if you enable streaming (`"stream": true`):

- **TTFT**: Track the time elapsed between sending the request and receiving the very first chunk of data.
- **TPS**: Count the incoming chunks and divide them by the total duration of the stream.

_(Note: Some advanced engines like vLLM or Groq may pass custom performance metrics inside a non-standard `x_groq` or `usage.prompt_tokens_details` field, but this is vendor-specific)._

### 3. ❌ NOT Included in the Response (Must be Tracked Manually)

The API response has no awareness of your infrastructure, system status, or network layer. You or your observability tool must log these externally:

- **System Health**: Network latency, HTTP status error codes (`429`, `503`), queue wait times, and GPU/VRAM memory.
- **Semantic Quality**: Financial cost calculation, user thumbs up/down, cache hit rates, and prompt chain tracking.

Are you planning to process these metrics **synchronously** as flat JSON payloads, or do you need to calculate them from a **real-time text stream**?

## You said: cache hit not included?

No, **cache hits are not included in the standard OpenAI response specification.** \[[1](https://www.truefoundry.com/blog/provider-agnostic-prompt-caching-llm-gateway)]

The standard OpenAI API payload layout has no native field or boolean tag to tell your code if a response came from a cache.

However, depending on whether you are using a **managed cloud provider** or your own **self-hosted local stack**, you can find or implement this information in a few different ways:

### 1. How Cloud Providers Handle It (Custom Headers)

Cloud providers that offer native semantic or prompt caching do not change the core JSON body. Instead, they pass cache information back through **HTTP Response Headers** or non-standard tracking objects: \[[1](https://arxiv.org/html/2601.06007v1), [2](https://learn.microsoft.com/en-us/previous-versions/aspnet/ff651849%28v=orm.10%29), [3](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)]

- **Anthropic / DeepSeek**: They append custom tracking fields inside the `usage` block (e.g., `usage.prompt_tokens_details.cached_tokens`). If this number matches your prompt token count, it was a cache hit.
- **Groq / Cloudflare**: They often attach custom HTTP headers to the response, such as `x-extensions-cache: HIT` or `cf-cache-status: HIT`. \[[1](https://pub.towardsai.net/why-your-claude-code-bill-is-5x-what-it-should-be-and-these-secretive-14-cache-patterns-that-fix-b4745c28f72e), [2](https://www.datadoghq.com/blog/javascript-cache/)]

### 2. How to Track It Locally (The Middleware Pattern)

If you run an open-source OpenAI-compatible stack (like Ollama, vLLM, or LiteLLM) alongside a caching layer (like Redis or GPTCache), your orchestration code or API Gateway must track the hit manually. \[[1](https://www.unite.ai/ai-cybersecurity-hard-fork-plaintext-vulnerability/), [2](https://dev.to/kushal0532/whats-semantic-caching-4hon)]

When building a zero-dependency `fetch` client, you determine a cache hit by checking if the request ever reached the LLM server at all:

javascript

```
import Redis from 'ioredis';
const redis = new Redis();

async function getLLMResponse(prompt) {
  const cacheKey = `prompt:${prompt}`;

  // 1. Check your local semantic or exact cache
  const cachedResponse = await redis.get(cacheKey);
  if (cachedResponse) {
    console.info({ event: "llm_call", cache_hit: true, source: "redis" });
    return JSON.parse(cachedResponse);
  }

  // 2. Cache Miss - Hit the actual OpenAI-compatible API
  const startTime = performance.now();
  const response = await fetch("http://localhost:11434/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();

  // 3. Save to cache for next time
  await redis.set(cacheKey, JSON.stringify(data), "EX", 3600);

  console.info({
    event: "llm_call",
    cache_hit: false,
    latency_ms: performance.now() - startTime
  });

  return data;
}
```

Use code with caution.

### 3. The Visual Diagnostic (Latency)

If you do not have logging access to the infrastructure headers or a gateway, you can accurately infer a cache hit purely through **Request Latency**:

- **Cache Miss**: Takes **1,000ms – 5,000ms+** (The GPU must actively compute tokens).
- **Cache Hit**: Takes **10ms – 50ms** (The server instantly grabs static text from memory). \[[1](https://medium.com/@Aacle/the-cache-poisoning-bible-part-1-advanced-fundamentals-2c8e9d7be2e9)]

Are you currently using an **external API gateway** (like LiteLLM or Portkey) that manages caching for you, or are you looking to write a **custom cache system** into your Node.js code? \[[1](https://www.exam-labs.com/blog/how-to-clear-cached-responses-in-api-gateway)]

- [link](https://www.truefoundry.com/blog/provider-agnostic-prompt-caching-llm-gateway)\
  Provider-Agnostic Prompt Caching: How an LLM Gateway Normalizes Anthropic, OpenAI, and Bedrock\
  May 27, 2026 — The response surfaces only one cache field — cached\_tokens nested under usage. prompt\_tokens\_details — and no write-side counter, ...\
  \
  \
  Truefoundry
- [link](https://arxiv.org/html/2601.06007v1)\
  Don’t Break the Cache: An Evaluation of Prompt Caching for Long-Horizon Agentic Tasks\
  Jan 9, 2026 — OpenAI and Google enable prompt caching automatically for eligible requests, while Anthropic requires explicit cache breakpoints i...\
  \
  arXiv
- [link](https://learn.microsoft.com/en-us/previous-versions/aspnet/ff651849%28v=orm.10%29)\
  Chapter 7. Creating Asynchronous, Transactional, Cache-Friendly Web Services\
  Apr 26, 2010 — Now, this backfires when you have HTTP GET supported web service calls that produce response headers to cache the response in the ...\
  \
  \
  Microsoft Learn

Show all

# 

