generation

- chat endpoint key? messages -> message
  - has failed
  - id # local generated
  - role: system | user | assistant | tool
  - content
  - usage # input and output token usage
  - perf # metrics such as ttft, tps (might not be available wo streaming)
  - start_time
  - end_time

```js
async function queryOpenRouter() {
  const apiKey = 'YOUR_OPENROUTER_API_KEY'

  const response = await fetch(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://your-site-url.com', // Optional
        'X-OpenRouter-Title': 'Your App Name', // Optional
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: [
          {
            role: 'user',
            content: 'Explain quantum computing in one sentence.',
          },
        ],
      }),
    },
  )

  const data = await response.json()
  console.log(data.choices[0].message.content)
}

queryOpenRouter()
```

```js
async function streamOpenRouter() {
  const apiKey = 'YOUR_OPENROUTER_API_KEY'

  const response = await fetch(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: [
          { role: 'user', content: 'Write a short poem about coding.' },
        ],
        stream: true,
      }),
    },
  )

  const reader = response.body.getReader()
  const decoder = new TextDecoder('utf-8')

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    const chunk = decoder.decode(value, { stream: true })
    chunk.split('\n').forEach((line) => {
      if (line.startsWith('data: ') && !line.includes('[DONE]')) {
        try {
          const parsed = JSON.parse(line.replace('data: ', '').trim())
          process.stdout.write(parsed.choices[0]?.delta?.content || '')
        } catch (e) {}
      }
    })
  }
}

streamOpenRouter()
```

```js
async function fetchData(url) {
  try {
    const response = await fetch(url)

    // 1. Check if the HTTP status code is in the 200–299 range
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // 2. Parse the JSON if the response is successful
    const data = await response.json()
    return data
  } catch (error) {
    // 3. Catch both network errors AND the manual HTTP errors thrown above
    console.error('Fetch operation failed:', error.message)

    // Perform UI updates here (e.g., hide loading spinner, show error message)
  }
}

// Example usage:
fetchData('https://example.com')
```

```json
{
  "id": "chatcmpl-03b7c4dd5b32",
  "object": "chat.completion",
  "created": 1794170660,
  "model": "your-chosen-model-name",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "An API is a defined way for two programs to talk to each other."
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 12,
    "completion_tokens": 14,
    "total_tokens": 26
  }
}
```

---

a user msg will be ignored if it's followed by a failed response
