# @Web search how to stream openrouter api into a callback fn via js fetch

``````md
# @Web search how to stream openrouter api into a callback fn via js fetch

You can stream OpenRouter's API using native JavaScript `fetch()` and pass each generated text chunk into a callback function such as `onToken(chunk)`.

OpenRouter uses **Server-Sent Events (SSE)**. Set `stream: true`, read `response.body` with a `ReadableStream` reader, and parse the `data:` events.

Here's a reusable implementation using the **Chat Completions API**.

## **1. Reusable streaming function**

```

async function streamOpenRouter({
  apiKey,
  model,
  messages,
  onToken,
  onComplete,
  onError,
  signal,
}) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
        }),
        signal,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "API request failed");
    }

    if (!response.body) {
      throw new Error("No response stream");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";
    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();

        // Ignore SSE comments and empty lines
        if (!trimmed || trimmed.startsWith(":")) continue;

        if (!trimmed.startsWith("data:")) continue;

        const data = trimmed.slice(5).trim();

        if (data === "[DONE]") {
          onComplete?.(fullText);
          return fullText;
        }

        try {
          const parsed = JSON.parse(data);

          const token = parsed.choices?.[0]?.delta?.content;

          if (token) {
            fullText += token;
            onToken?.(token);
          }

          if (parsed.error) {
            throw new Error(parsed.error.message);
          }
        } catch (error) {
          if (error instanceof SyntaxError) continue;
          throw error;
        }
      }
    }

    // Flush any remaining decoder data
    buffer += decoder.decode();

    onComplete?.(fullText);
    return fullText;

  } catch (error) {
    if (error.name === "AbortError") return;

    onError?.(error);
    throw error;
  }
}

```

## **2. Usage with callbacks**

```
const controller = new AbortController();

await streamOpenRouter({
  apiKey: "YOUR_OPENROUTER_API_KEY",
  model: "openai/gpt-4o-mini",

  messages: [
    {
      role: "user",
      content: "Explain JavaScript closures."
    }
  ],

  onToken: (token) => {
    // Called whenever new text arrives
    process.stdout.write(token);

    // Or update your UI:
    // setText(prev => prev + token);
  },

  onComplete: (fullText) => {
    console.log("\nFinished!");
    console.log("Full response:", fullText);
  },

  onError: (error) => {
    console.error("Streaming error:", error);
  },

  signal: controller.signal,
});

// Cancel anytime:
// controller.abort();
```

## **3. Important considerations**

- **Chunk boundaries:** A fetch chunk isn't necessarily a complete SSE event. Always buffer incomplete lines.
- **Keepalive comments:** OpenRouter can send `: OPENROUTER PROCESSING`; ignore these.
- **Usage chunks:** Some final Chat Completions chunks contain usage information but no text.
- **Cancellation:** Use `AbortController`.
- **API key security:** Don't expose your OpenRouter API key in a public frontend. Ideally, proxy requests through your backend.

See the official documentation:

- [OpenRouter – Streaming API documentation](https://github.com/OpenRouterTeam/docs/blob/main/api_reference/streaming.mdx?utm_source=chatgpt.com)
- [OpenRouter – API overview](https://github.com/OpenRouterTeam/docs/blob/main/api_reference/overview.mdx?utm_source=chatgpt.com)
- [MDN – Readable Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams?utm_source=chatgpt.com)

**My recommendation:** If you're building a reusable chat interface, keep `onToken`, `onComplete`, and `onError` as separate callbacks. This makes the function framework-independent and easy to integrate with React, Vue, vanilla JS, or Node.js.

One improvement I'd make before production is using `eventsource-parser` to handle SSE framing correctly, including multi-line events and incomplete buffers.

# @Web search how to get usage and perf such as token per sec time to first token

For OpenRouter streaming, you can measure **four important metrics**:

1. **TTFT (Time To First Token):** How long until the first generated text arrives.
2. **Tokens/sec:** Generation speed after the first token.
3. **Total latency:** Total time from sending the request until completion.
4. **Token usage:** Prompt tokens, completion tokens, and total tokens.

The best approach is to combine:

- Client-side timing using `performance.now()`.
- OpenRouter's streaming usage information.
- OpenRouter's generation statistics API for additional server-side metrics.

## **1. Get token usage in streaming responses**

Add `stream_options.include_usage: true` to your request:

```
body: JSON.stringify({
  model,
  messages,
  stream: true,
  stream_options: {
    include_usage: true
  }
})
```

The final SSE usage chunk can contain:

```
{
  prompt_tokens: 120,
  completion_tokens: 350,
  total_tokens: 470,
  cost: 0.00012
}
```

Capture it separately from text chunks:

```
if (parsed.usage) {
  onUsage?.(parsed.usage);
}
```

See [OpenRouter streaming options](https://openrouter.ai/docs/client-sdks/python/api-reference/presets?utm_source=chatgpt.com) and [Chat Completions API response schema](https://openrouter.ai/docs/api/api-reference/chat/send-chat-completion-request?explorer=true\&utm_source=chatgpt.com).

## **2. Measure TTFT, generation speed and total latency**

Use `performance.now()` because it provides a monotonic, high-resolution timer.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN



Here's the metrics implementation you can integrate into your existing streaming function:

```

const startedAt = performance.now();

let firstTokenAt = null;
let lastTokenAt = null;
let fullText = "";
let usage = null;

// Inside your SSE event parser:
const parsed = JSON.parse(data);

// Capture generation ID
const generationId = parsed.id;

// Capture usage (usually in final chunk)
if (parsed.usage) {
  usage = parsed.usage;
}

const token = parsed.choices?.[0]?.delta?.content;

if (token) {
  const now = performance.now();

  if (firstTokenAt === null) {
    firstTokenAt = now;
  }

  lastTokenAt = now;
  fullText += token;

  onToken?.(token);

  onMetrics?.({
    ttft: firstTokenAt - startedAt,
    elapsed: now - startedAt,
    text: fullText,
  });
}

// After the stream has finished:
const finishedAt = performance.now();

const totalTime = finishedAt - startedAt;
const generationTime =
  firstTokenAt !== null && lastTokenAt !== null
    ? lastTokenAt - firstTokenAt
    : 0;

const completionTokens = usage?.completion_tokens ?? 0;
const promptTokens = usage?.prompt_tokens ?? 0;

const metrics = {
  ttft: firstTokenAt !== null
    ? firstTokenAt - startedAt
    : null,

  totalLatency: totalTime,

  generationTime,

  completionTokens,
  promptTokens,
  totalTokens: usage?.total_tokens ?? null,

  // Excludes the initial wait for the first token
  tokensPerSecond: generationTime > 0
    ? completionTokens / (generationTime / 1000)
    : null,

  // Includes the initial wait (end-to-end throughput)
  totalTokensPerSecond: totalTime > 0
    ? completionTokens / (totalTime / 1000)
    : null,

  cost: usage?.cost ?? null,
  generationId,
};

onComplete?.(fullText, metrics);

```

This gives you two different throughput measurements:

| Metric         | Calculation                             |
| -------------- | --------------------------------------- |
| TTFT           | First token time − request start        |
| Generation TPS | Completion tokens ÷ generation duration |
| End-to-end TPS | Completion tokens ÷ total duration      |
| Total latency  | Request start → stream finish           |

**Important:** These are client-side measurements. Generation TPS excludes TTFT, while end-to-end TPS includes it. Both are useful for comparing models.

## **3. Get OpenRouter's actual generation statistics**

OpenRouter also provides a Generation Stats endpoint:

`GET https://openrouter.ai/api/v1/generation?id=GENERATION_ID`

It returns information including:

- `latency`
- `generation_time`
- `tokens_prompt`
- `tokens_completion`
- `native_tokens_prompt`
- `native_tokens_completion`
- `total_cost`
- `provider_name`
- `model`

Documentation: [OpenRouter Get Generation Stats](https://openrouter.ai/docs/api/api-reference/generations/get-generation?utm_source=chatgpt.com).&#x20;

[image](https://www.google.com/s2/favicons?domain=https://openrouter.ai\&sz=32)

Documentation



You can retrieve it with:

```

async function getGenerationStats(apiKey, generationId) {
  const response = await fetch(
    `https://openrouter.ai/api/v1/generation?id=${encodeURIComponent(generationId)}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Stats API error: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
}

```

Note: Generation records might not be available immediately after streaming finishes. Retry a 404 after a short delay.

## **4. Suggested final metrics object**

For a chat application or model benchmark, I'd standardize on this structure:

```
{
  model: "openai/gpt-4o-mini",
  provider: "OpenAI",

  timing: {
    ttft_ms: 420,
    total_latency_ms: 2400,
    generation_time_ms: 1980
  },

  tokens: {
    prompt: 120,
    completion: 350,
    total: 470
  },

  performance: {
    generation_tps: 176.77,
    end_to_end_tps: 145.83
  },

  cost: {
    total: 0.00012
  }
}
```

Illustrative values, not actual benchmark results.

## **5. My recommendation**

Use client-side measurements for real-time UI updates, then fetch OpenRouter generation statistics for authoritative recorded usage and provider information.

One important distinction: OpenRouter's own performance reporting defines throughput using the time from request start to the last token, so it includes TTFT. Its latency metric measures time to first token.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://openrouter.ai\&sz=32)

OpenRouter+1



For more detailed monitoring, see [OpenRouter Activity and Observability](https://openrouter.ai/blog/announcements/activity-dashboard/?utm_source=chatgpt.com).

This combination gives you a useful model benchmarking system without needing a separate monitoring service.
``````

# @Web search how to stream openai compatible api into a callback fn via js fetch

The simplest way is to use `fetch()`**&#x20;+&#x20;**`ReadableStream.getReader()`**&#x20;+&#x20;**`TextDecoder` to read the OpenAI-compatible API's Server-Sent Events (SSE), then invoke your callback whenever a new token arrives.

Here's a reusable implementation that works with OpenAI-compatible providers (OpenAI, OpenRouter, Ollama, vLLM, LM Studio, etc.), provided they implement Chat Completions SSE streaming.

## **1. Reusable streaming function**

```

async function streamChat({
  baseURL,
  apiKey,
  model,
  messages,
  onToken,
  onComplete,
  onError,
}) {
  try {
    const response = await fetch(
      `${baseURL}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${await response.text()}`
      );
    }

    if (!response.body) {
      throw new Error("Response body is not readable");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";
    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, {
        stream: true,
      });

      const events = buffer.split("\n\n");
      buffer = events.pop() || "";

      for (const event of events) {
        const line = event
          .split("\n")
          .find((line) => line.startsWith("data:"));

        if (!line) continue;

        const data = line.slice(5).trim();

        if (data === "[DONE]") continue;

        const chunk = JSON.parse(data);

        const token =
          chunk.choices?.[0]?.delta?.content;

        if (token) {
          fullText += token;
          onToken?.(token, fullText);
        }
      }
    }

    // Flush any remaining decoder bytes.
    buffer += decoder.decode();

    onComplete?.(fullText);

    return fullText;

  } catch (error) {
    onError?.(error);
    throw error;
  }
}

```

## **2. Usage example**

```
await streamChat({
  baseURL: "https://api.openai.com/v1",
  apiKey: "YOUR_API_KEY",
  model: "gpt-4.1",
  messages: [
    { role: "user", content: "Explain JavaScript streams." }
  ],

  onToken(token, fullText) {
    // Called for every incoming text chunk
    console.log("New token:", token);

    // Update your UI
    outputElement.textContent = fullText;
  },

  onComplete(fullText) {
    console.log("Finished:", fullText);
  },

  onError(error) {
    console.error(error);
  },
});
```

## **3. Important implementation details**

There are a few things worth knowing:

| Detail          | Why it matters                                 |
| --------------- | ---------------------------------------------- |
| `getReader()`   | Reads the HTTP response incrementally          |
| `TextDecoder`   | Converts binary chunks into UTF-8 text         |
| `buffer`        | Handles SSE events split across network chunks |
| `delta.content` | Contains the generated text                    |
| `[DONE]`        | Indicates the end of a Chat Completions stream |

**One important improvement:** The example above uses `\n\n` to split events. For maximum SSE compatibility, including CRLF line endings and multiple `data:` lines, use a proper SSE parser or normalize line endings before splitting.

Also, if you want to support function calls, tool calls, reasoning fields, or multimodal output, you'll need to process additional fields in `delta`.

## **4. Responses API vs Chat Completions**

If you're implementing a generic OpenAI-compatible client, be aware of the difference:

| API              | Streaming text field                         |
| ---------------- | -------------------------------------------- |
| Chat Completions | `choices[0].delta.content`                   |
| Responses API    | `response.output_text.delta` event's `delta` |

The Responses API uses typed SSE events, whereas Chat Completions uses data-only SSE chunks.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developers.openai.com\&sz=32)

OpenAI API+2



Official references:

- [OpenAI – Streaming API responses](https://developers.openai.com/api/docs/guides/streaming-responses?utm_source=chatgpt.com)
- [Chat Completions streaming events](https://developers.openai.com/api/reference/resources/chat/subresources/completions/streaming-events?utm_source=chatgpt.com)
- [MDN – Fetch streaming responses](https://github.com/mdn/content/blob/main/files/en-us/web/api/fetch_api/using_fetch/index.md?plain=1\&utm_source=chatgpt.com)

**My recommendation:** Keep `streamChat()` provider-agnostic and expose `onToken`, `onComplete`, and `onError` callbacks. This makes it easy to plug into React state, Vue refs, Node.js event emitters, or any custom UI without coupling the streaming implementation to a framework.

# how to make new dom content fade in in react

The easiest way to make newly added DOM content fade in in React is to use **CSS animations**.

### **1. Simple CSS animation (recommended)**

**React component:**

```
function App() {
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Add item</button>

      {items.map((item, index) => (
        <div className="fade-in" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}
```

**CSS:**

```
.fade-in {
  animation: fadeIn 300ms ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

Every time React inserts a new element, the animation plays automatically.

### **2. Fade in + slide up**

For a smoother effect:

```
.fade-in {
  animation: fadeInUp 400ms ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### **3. Using Framer Motion (more advanced)**

If you want more control over entering and exiting animations, use Motion.

```
npm install motion
```

```
import { motion } from "motion/react";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Hello world!
        </motion.div>
      )}
    </>
  );
}
```

### **Which should you use?**

| Approach               | Best for                                   |
| ---------------------- | ------------------------------------------ |
| CSS animation          | Simple fade-in when DOM elements are added |
| Motion                 | Enter/exit animations, complex transitions |
| React Transition Group | Managing component lifecycle transitions   |

**My recommendation:** Use CSS animations if you only need newly rendered elements to fade in. It's lightweight, requires no dependencies, and works naturally with React rendering.
