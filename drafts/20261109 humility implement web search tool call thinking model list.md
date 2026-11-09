# how to implement web search for agents

### how to implement web search for agents

To implement web search for an AI agent, you must transform an external search engine into a structured **"Tool" (or function) that the Large Language Model (LLM) can autonomously invoke**. Instead of processing messy HTML soup, the agent receives structured, token-efficient JSON or Markdown data to reason over. [](https://www.reddit.com/r/ProxyEngineering/comments/1u902eb/web%5Fsearch%5Fapi%5Ffor%5Fai%5Fagents/)

Implementing this capability breaks down into three key layers: choosing the search layer, wrapping it as a tool, and designing the agentic architecture.

---

#### 1\. Select Your Search Layer

Instead of scraping Google directly and fighting CAPTCHAs or anti-bot walls, use an API built specifically to return clean, LLM-ready snippets or Markdown. [](https://www.reddit.com/r/ProxyEngineering/comments/1u902eb/web%5Fsearch%5Fapi%5Ffor%5Fai%5Fagents/)

| Provider                                                   | Best For         | Features & Considerations                                                                                                                                                               |
| ---------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Tavily AI](https://tavily.com/)** or **Exa**            | Agent Workflows  | Built from the ground up for LLMs. Returns clean content, short summaries, and direct links without structural bloat.                                                                   |
| **[Firecrawl](https://www.firecrawl.dev/)** or **Jina AI** | Deep Context     | Excellent for a two-step workflow: first search, then scrape the full page content converted entirely into clean Markdown.                                                              |
| **DuckDuckGo API**                                         | Hobbyist & Local | 100% Free, open-source, and requires no API keys. Great for building a zero-cost stack.                                                                                                 |
| **[Parallel MCP](https://parallel.ai/)**                   | Local AI Agents  | Ideal if you are running models locally via Ollama or LM Studio. Uses the Model Context Protocol (MCP) to provide free search and page fetching without bloating small context windows. |

---

#### 2\. Wrap the Search API as an LLM Tool

AI frameworks (like LangChain, LlamaIndex, or Microsoft's Agent Framework) use Function Calling. You define a standard Python function, and the framework uses its **docstrings and type hints** to automatically construct a JSON schema that tells the LLM _how_ and _when_ to use it. [](https://www.youtube.com/watch?v=5MPLUvcszIU&vl=en-US)

Here is an example using basic Python function calling semantics:

python

```
import requests
from typing import Dict, Any

def web_search(query: str) -> Dict[str, Any]:
    """
    Searches the web for real-time, current information using a search API.
    Use this tool whenever the user asks about recent events, weather, or facts past your training cutoff.
    
    Args:
        query (str): The optimized search query keywords.
    """
    # Example using a structured agent-centric Search API provider
    url = f"https://tavily.com" 
    payload = {
        "api_key": "YOUR_API_KEY",
        "query": query,
        "include_answer": True
    }
    
    response = requests.post(url, json=payload)
    return response.json() # Returns a structured dictionary of titles, URLs, and snippets

```



---

#### 3\. Establish the Agentic Workflow

Depending on your latency requirements and budget, choose how your agent processes information. [](https://medium.com/@joejoseph441/ai-pm-web-search-agent-and-evals-dd90d6a36dbe)

##### Pattern A: "RAG-Lite" (High Speed, Low Cost)

* **Workflow:** User Prompt → Query Optimization → Single Search API Call → Summarize Snippets → Final Output.
* **How it works:** The agent receives a user prompt, rewrites it into clean search keywords, hits the API, and immediately writes a response based on the text snippets returned directly by the search engine.
* **Best for:** Simple lookups (e.g., "What was the score of the game last night?"). [](https://medium.com/@joejoseph441/ai-pm-web-search-agent-and-evals-dd90d6a36dbe)

##### Pattern B: "Multi-Hop / Investigative" (High Accuracy, Deeper Reasoning)

* **Workflow:** Prompt → Query Optimization → Search API → Select 3-5 Relevant URLs → Parallel Scraping/Markdown Fetching → Cross-Source Evaluation → Final Narrative. [](https://medium.com/@joejoseph441/ai-pm-web-search-agent-and-evals-dd90d6a36dbe)
* **How it works:** The agent does a preliminary search, evaluates the returned URLs, and invokes a secondary `fetch_webpage` tool to read the entire contents of the top articles. It then sanitizes the text and cross-references the sources to construct a highly factual report. [](https://parallel.ai/articles/web-search-for-local-ai-agents)
* **Best for:** Market research, competitive analysis, and resolving complex or nuanced user questions. [](https://www.nimbleway.com/blog/secure-agentic-web-search)

---

#### 💡 Core Optimization Tips

1. **Force Query Optimization:** LLMs are terrible at searching using conversational prompts (e.g., "Can you please look up who won the award..."). Instruct your agent in its system prompt to always translate user prompts into concise, keyword-driven search queries before executing the tool. [](https://medium.com/@joejoseph441/ai-pm-web-search-agent-and-evals-dd90d6a36dbe)
2. **Context Window Management:** Full web pages contain immense token bloat. Rely on search excerpts first. Only allow the agent to fetch full page content if the snippet explicit states the answer is further down the page. [](https://parallel.ai/articles/web-search-for-local-ai-agents)
3. **Guardrails:** Implement output caching to reduce API costs for repetitive questions and strictly parse data structures to harden your agent against **indirect prompt injection** (malicious instructions hidden on public websites designed to hijack your agent). [](https://www.reddit.com/r/ProxyEngineering/comments/1u902eb/web%5Fsearch%5Fapi%5Ffor%5Fai%5Fagents/)

To narrow this down, tell me:

* What **agent framework** or orchestration ecosystem are you using? (e.g., LangChain, LangGraph, CrewAI, or raw Python / OpenAI client)?
* Will this agent run on a **frontier cloud model** (like GPT-4o) or a **local open-source model** (like Llama 3 via Ollama)?
* What is the primary **use case** for the search? (e.g., quick fact verification vs. deep research reporting)?

* [](https://www.youtube.com/watch?v=5MPLUvcszIU&vl=en-US)  
YouTube·Datapizza  
Build a Web-Searching AI Agent in 10 Minutes | Datapizza ...  
Dec 9, 2025 — Function calling allows Large Language Models (LLMs) to perform actions by invoking Python functions, connecting them to real-worl...  
11:18
* [](https://www.youtube.com/watch?v=PrivUJm6Fos)  
YouTube·Asim Munawar  
Build a FREE Web Search RAG Agent — 100% Open-Source  
Jan 12, 2026 — In this video, I walk you through a single-file Python implementation of a production-grade Web QA agent that: Full Source Code ..  
22:24
* [](https://www.reddit.com/r/ProxyEngineering/comments/1u902eb/web%5Fsearch%5Fapi%5Ffor%5Fai%5Fagents/)  
Reddit·r/ProxyEngineering  
Web Search API for AI Agents : r/ProxyEngineering - Reddit  
June 18, 2026 — Agent searches, picks the most relevant results, then pulls full content. Caching is worth thinking about too.

Show all

# how to choose web search provider for agents

Choosing the right **web search provider for AI agents** depends heavily on your agent's specific workload. Traditional search engines optimize for human eyeballs, but autonomous agents require structured, clean, and low-latency data to feed into an LLM. [](https://you.com/resources/best-web-search-apis-for-ai-agents)

To select the right provider, evaluate your architecture type, workload demands, and primary evaluation axes. [](https://octen.ai/guides/how-to-choose-a-web-search-api-for-ai-agents)

---

### 1\. Choose Your Architecture: SERP vs. AI-Native

First, decide whether you want raw search links or pre-cleaned LLM text. [](https://www.vellum.ai/blog/best-web-search-apis-and-mcps-for-ai-agents)

* **Traditional SERP APIs:** Providers like Serper or SerpApi wrap traditional search engines (Google, Bing) and return basic JSON metadata (titles, snippets, URLs). They are **highly cost-effective for raw discovery** but leave your agent with "pointers" to pages rather than the actual text. You will have to write an extra scraping layer to extract the content. [](https://www.tinyfish.ai/blog/best-web-search-api-for-ai-agents)
* **AI-Native Search APIs:** Providers like Tavily, Exa, and Firecrawl search the web and **automatically return LLM-ready content** (like clean Markdown or specific extractive highlights). They combine search and page retrieval in one step, stripping away ads, tracking scripts, and messy HTML. [](https://www.braintrust.dev/articles/best-web-search-apis-mcps-ai-agents-2026)

---

### 2\. Match the Provider to Your Agent's Workload

Different types of AI agents prioritize different performance criteria. [](https://octen.ai/guides/how-to-choose-a-web-search-api-for-ai-agents)

| Agent Workload Type               | Key Priority                      | Why It Matters                                                                                                     | Top Recommended Providers                              |
| --------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| **Coding & Technical Assistants** | **Low Latency & Clean Output**    | Multi-step agent loops break if they wait too long for search results. They need clear markdown of technical docs. | Brave Search API, Parallel API                         |
| **Research & Factual Synthesis**  | **Verifiable Quality & Coverage** | Deep-dive research requires comprehensive page indexing and precise citation matching.                             | Exa, Tavily, You.com API                               |
| **Monitoring & News Tracking**    | **Real-Time Freshness**           | Agents acting on breaking news or market data need instant indexing rather than cached results.                    | You.com API, Traditional SERP APIs (Google/Bing wraps) |
| **Data Extraction & Scraping**    | **Durable Full-Page Crawling**    | If the agent needs to comb through an entire domain or multi-page app architecture to build context.               | Firecrawl, TinyFish                                    |

---

### 3\. Core Evaluation Axes for Production

When testing providers, do not just look at feature lists. Run a benchmarking query set through 2–3 options using tools like the open-source evaluation framework from Octen: [](https://you.com/resources/best-web-search-apis-for-ai-agents)

* **Tail Latency Under Load:** Measure latency under high concurrency. If your agent makes parallel search tool calls, the entire agent step is blocked by the _slowest_ response. [](https://octen.ai/guides/how-to-choose-a-web-search-api-for-ai-agents)
* **Total Cost per Usable Answer:** Look beyond price-per-1K-requests. Factor in the downstream cost: if an API returns sloppy, unstructured text, it forces your LLM to spend extra tokens cleaning it up, increasing your total operational cost. Look for built-in guardrails like maximum spend caps (offered by options like DeepAPI) to prevent runaway autonomous loops. [](https://octen.ai/guides/how-to-choose-a-web-search-api-for-ai-agents)
* **Index Independence:** Relying purely on Google/Bing data means inheriting their SEO biases. Using providers with proprietary web indexes (like Exa or Brave) can unlock better semantic matching for raw data extraction. [](https://you.com/resources/best-web-search-apis-for-ai-agents)
* **Durability and Control:** If you operate in a regulated industry, verify the provider's data retention policies, localized regional filtering, and server-side synthesis visibility. [](https://you.com/resources/best-web-search-apis-for-ai-agents)

To help narrow down the best platform, tell me:

* What **specific task** will your agent perform (e.g., customer research, coding assistant, market monitoring)?
* Do you prefer a plug-and-play **AI-native tool** that handles the scraping, or do you want to build a custom parsing layer over raw **SERP links**?
* What is your expected **volume of searches** per month?

* [](https://you.com/resources/best-web-search-apis-for-ai-agents)  
You.com  
How to Choose a Web Search API for AI Agents | You.com  
April 13, 2026 — AI-native search APIs. Weigh extraction architecture, latency under agentic load, index independence, full page access, and framew...
* [](https://octen.ai/guides/how-to-choose-a-web-search-api-for-ai-agents)  
Octen.ai  
How to Choose a Web Search API for AI Agents | Octen  
October 19, 2026 — Eight axes decide fit in production, durability and control. regulated teams weight durability and control.
* [](https://www.tinyfish.ai/blog/best-web-search-api-for-ai-agents)  
TinyFish  
Best Web Search API For AI Agents | TinyFish Blog  
September 29, 2026 — Exa: Semantic/factual search ($4-$15/1K); Brave Search: Independent index ($5/1K); includes LLM Context.

Show all

# what if you query and scrape manually to implement web search for agents

Implementing web search for AI agents by building your own manual querying and scraping pipeline is completely doable, but it **forces you to manage a complex, multi-layered infrastructure**. Instead of a single API call, you are essentially building a custom browser automation and data engineering stack. [](https://www.youtube.com/watch?v=JG%5FINdktGsk)

While it gives you total control over costs and data privacy, you will quickly face a steep engineering "arms race" against anti-bot systems. Here is exactly what happens if you choose to build this manually. 

---

### 🧱 The 3-Step Manual Architecture

To simulate a "web search", your agent requires a pipeline that splits search engine retrieval from actual page reading: [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)

```
[Agent Query] ──> [1. SERP Scraper] ──> [2. HTML Fetcher/Crawl] ──> [3. Markdown Parser/Chunker] ──> [LLM Context]

```

1. **The SERP Step (Search Engine Results Page):** Your code programmatically queries a search engine (like Google or DuckDuckGo) via raw HTTP requests or browser automation, then parses the HTML to extract titles, snippets, and source URLs. [](https://aws.amazon.com/blogs/aws/announcing-web-search-on-amazon-bedrock-agentcore-ground-your-ai-agents-in-current-accurate-web-knowledge/)
2. **The Crawl/Fetch Step:** Your agent picks the top 3–5 links. Your backend manually fetches the raw HTML from those external websites. [](https://www.context.dev/blog/add-web-search-ai-agent-context-dev)
3. **The Content Pruning Step:** Raw HTML is filled with thousands of tokens of navigation menus, footers, and scripts. You must use libraries like BeautifulSoup or Readability to strip the noise, convert it to clean Markdown or JSON, and chunk it so it fits into the LLM's context window without drowning the model in token costs. [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)

---

### ⚠️ The Major Challenges of "Going Manual"

If you implement this yourself without an agent-native search API (like Firecrawl or Exa AI), you will run into several severe technical bottlenecks: [](https://parallel.ai/blog/cookbook-search-agent)

* **The Anti-Bot Arms Race:** Modern websites actively block programmatic scripts. If your agent queries Google or scrapes a news site repeatedly from a static server IP, you will immediately hit **CAPTCHAs, 403 Forbidden errors, and IP rate limits**. You will be forced to buy, integrate, and rotate proxy networks. [](https://dev.to/asaoluelijah/web-scraping-for-ai-agents-how-to-give-your-agents-web-access-4577)
* **JavaScript-Heavy Sites:** Basic HTTP libraries (like Python's `requests`) only pull initial HTML. Many modern sites render content using React or Next.js _after_ the page loads. To get that data, your agent framework must boot up heavy, resource-intensive headless browsers (like Playwright or Puppeteer) to wait for the JavaScript to execute. [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)
* **Context Window Bloat & High Latency:** Scraping full pages takes seconds, not milliseconds. Passing raw, unoptimized text to an LLM dilutes its reasoning capabilities and spikes your API costs. You must build an text-embedding and retrieval (RAG) system just to parse the pages your agent downloaded. [](https://www.context.dev/blog/add-web-search-ai-agent-context-dev)

---

### 📊 Direct Comparison: Manual Pipeline vs. Agent Search APIs

| Feature                | Manual Query & Scrape Pipeline                              | Agentic Search APIs (Tavily, Context.dev)     |
| ---------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| **Development Time**   | Weeks (building proxies, DOM parsers, retries)              | 10 minutes (single API endpoint wrapper)      |
| **Output Format**      | Raw HTML or messy text blocks                               | Clean, LLM-ready **Markdown or JSON**         |
| **Bypassing Blocks**   | You must maintain residential proxy rotation                | Handled automatically by the provider         |
| **Token Optimization** | High token bloat unless you build a custom chunker          | Automatically extracts only relevant snippets |
| **Financial Cost**     | Free at tiny scale; expensive to scale proxy infrastructure | Fixed or usage-based pricing per API call     |

### 🛠️ How to do it right if you build it yourself

If you still choose to build a manual setup for privacy or customization, avoid writing it entirely from scratch. Use **open-source agentic tools** built specifically to handle the heavy lifting:

* **For Browser Manipulation:** Use Browser Use or Crawl4AI, which are Python libraries designed to let LLMs control headless browsers and automatically convert web pages into perfectly structured Markdown.
* **For Local Infrastructure:** Run a local SearXNG instance. It acts as a private, aggregated search engine metasearcher, allowing your code to query one endpoint and fetch results from dozens of search engines without getting blocked. [](https://medium.com/@vineshvsv/web-scraping-with-intelligent-ai-agents-a-practical-guide-using-browseruse-a0af7e941a3f)

Are you considering a manual build to **avoid API costs**, protect **data privacy**, or because your agent needs to target **specific, login-walled websites**? Let me know your main goal so I can suggest the right open-source tools or proxy setups.

* [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)  
Firecrawl  
Web Search and Deep Research for AI Agents  
September 24, 2026 — It handles JavaScript rendering and content extraction so agents can read and reason over web pages without a separate scraping st...
* [](https://parallel.ai/blog/cookbook-search-agent)  
Parallel Web Systems  
Building a Full  
September 5, 2025 — Parallel's Search API is designed for machines from first principles. Parallel Search API being used in an agentic workflow can tr...
* [](https://www.reddit.com/r/AI%5FAgents/comments/1seboyl/web%5Fsearch%5Fapis%5Fandor%5Fscraping/)  
Reddit·r/AI\_Agents  
Web search APIs and/or scraping : r/AI\_Agents - Reddit  
April 6, 2026 — anti-bot arms race. Bright Data's SERP API is probably the most reliable option for structured search results at scale. Handles Go...

Show all

# what if you query and scrape manually to implement web search for agents for personal learning project

**Building a manual query-and-scrape system for an AI agent is an incredible personal learning project.** It will give you a deep, foundational understanding of search mechanics, web harvesting, and LLM context constraints. While production-grade systems rely on dedicated infrastructure like [Exa](https://exa.ai/blog/how-to-build-an-ai-agent-with-web-search) or [Firecrawl](https://www.firecrawl.dev/blog/deep-research-for-ai-agents), building a DIY loop using tools like Python, `playwright`, and `BeautifulSoup` exposes you to the exact engineering trade-offs that product teams face. [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)

If you decide to build this yourself, here is a breakdown of how the architecture works, the challenges you will encounter, and how to manage them.

---

### 🧱 The 3-Step Manual Architecture

To give your agent web search without paid search APIs, you have to write a Python script that acts as two distinct agentic tools: `search_web(query)` and `extract_content(url)`. 

```
[Agent Brain] ──(1. Query)──> [DuckDuckGo/Google Scraper] ──> Returns list of URLs
     ▲                                                               │
     │                                                         (2. Selects URL)
     │                                                               ▼
[Final Answer] <──(4. Reasoning)── [Markdown Parser] <──(3. Fetch)── [Playwright/Soup]

```

#### 1\. The Search Layer (Querying)

Instead of paying for a Google SERP API, you can programmatically scrape search results.

* **How to do it:** Use the HTML-only version of DuckDuckGo (`https://duckduckgo.com`) or use `playwright` to automate a headless browser that opens Google, types the query, and extracts the top 5 result links.
* **What it returns:** A clean list of links, titles, and brief snippets. [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)

#### 2\. The Extraction Layer (Scraping)

Once the agent looks at the search results and selects a URL, it invokes your second tool to read the page. 

* **How to do it:** Use `requests` or `BeautifulSoup` to grab the page source.
* **The Cleanup:** Raw HTML is filled with script tags, navigation headers, footers, and tracking pixels. You must strip these out using Python to isolate the main article text (`<article>` or `<main>` tags). [](https://www.mindstudio.ai/blog/build-web-scraping-skill-ai-agents-token-reduction)

#### 3\. The Feed Layer (Context Formatting)

* **How to do it:** Convert the cleaned HTML text into **Markdown**.
* **Why it matters:** LLMs understand Markdown structures (like headers, bullet points, and links) incredibly well. Pass this clean Markdown snippet back into the agent's prompt history so it can read and synthesize the answer. [](https://medium.com/@sridharcloud/building-your-first-ai-agent-a-web-search-and-extraction-system-508b339065e5)

---

### ⚠️ The Real-World Obstacles You Will Solve

As a learning project, these obstacles are actually where the best learning happens:

* **The Token Cliff (HTML Noise):** A single raw webpage can easily be 50,000 to 100,000 tokens long because of bloated code. If your agent scrapes 3 pages, you'll instantly blow past context limits or rack up massive API bills. _Learning fix:_ Implement a basic truncation rule or a "Readability" script that compresses the text down to a maximum of 2,000 words before feeding it to the LLM. [](https://www.mindstudio.ai/blog/build-web-scraping-skill-ai-agents-token-reduction)
* **The CAPTCHA Wall:** Google and major websites aggressively block automated scrapers with Cloudflare walls or CAPTCHAs. _Learning fix:_ Rotate user-agent headers, use random delays between requests, or build your scraper around softer targets like Wikipedia or DuckDuckGo. [](https://www.youtube.com/watch?v=G5djZjdxVvo)
* **The "Runaway Agent" Loop:** If you give an LLM agent an open-ended loop ("Search until you find the answer"), a slight hallucination can cause it to recursively search and scrape hundreds of times in a row, draining your wallet in minutes. _Learning fix:_ Always hardcode a stop condition (e.g., `max_turns = 5`). [](https://www.mindstudio.ai/blog/build-web-scraping-skill-ai-agents-token-reduction)

### 🛠️ Recommended DIY Tech Stack

To keep it lightweight, fully manual, and open-source, avoid big agent frameworks initially and build it with:

* **Playwright for Python:** For handling websites that require JavaScript to render content.
* **BeautifulSoup4:** For fast HTML parsing and tag stripping when JavaScript isn't needed.
* **markdownify:** A great Python library to turn your cleaned HTML directly into LLM-friendly Markdown text.
* **LiteLLM or OpenAI/Gemini SDKs:** To power the agent's brain using basic function calling (tool use) capabilities. [](https://www.youtube.com/watch?v=359s4VxAKaw&t=676)

Are you planning to build this using an orchestration framework like **LangGraph** or **CrewAI**, or would you prefer to write the **agentic loop entirely from scratch in pure Python**?

* [](https://centrai.co/blog/web-search-agent/)  
CentrAI  
How to make a Web Search Agent in Python  
June 14, 2025 — You are an expert web searcher. Your task is to answer the user's question using the provided tools. You may call one tool per tur...
* [](https://www.youtube.com/watch?v=G5djZjdxVvo)  
YouTube·Tech With Tim  
How I Built a Web Scraping AI Agent  
Mar 9, 2025 — This video demonstrates how to build a sophisticated AI travel agent using large language models (LLMs), real-time and historical ...  
20:51
* [](https://www.firecrawl.dev/blog/deep-research-for-ai-agents)  
Firecrawl  
Web Search and Deep Research for AI Agents  
September 24, 2026 — agents receive the full markdown content of each result page. This means no separate scraping step: one call returns structured, r...

Show all

# what if you query and scrape manually to implement web search for agents for personal projects

Building a manual web scraper and query system for your AI agents is a fantastic personal project. It gives you complete control over costs, data formatting, and privacy.

**Yes, you can absolutely do this**, but you will quickly run into three major roadblocks: **IP blocking/CAPTCHAs**, the complexity of **parsing modern Javascript-heavy websites**, and the need to **turn messy HTML into clean text/markdown** for the LLM.

Here is a blueprint of how to build it, the tech stack to use, and the pitfalls to watch out for.

---

### 🏛️ The Architecture

A manual search tool for an agent usually follows a **two-step pipeline**:

1. **The Searcher (Querying):** The agent inputs a query  
→  
→  
⁠ your script fetches search engine results (URLs).
2. **The Scraper (Fetching):** The agent picks the most relevant URL(s)  
→  
→  
⁠ your script visits the page, extracts the text, and feeds it back to the agent.

---

### 🛠️ The Recommended Tech Stack (Python)

#### 1\. For Querying (Finding URLs)

Instead of scraping Google directly (which will block you almost instantly), use alternative search endpoints or lightweight aggregators.

* **DuckDuckGo Python Library (`duckduckgo_search`):** A free, unofficial library that queries DDG without an API key. It is highly reliable for personal projects.
* **SearXNG:** An open-source, privacy-respecting metasearch engine. You can host your own instance via Docker and query its JSON API for free, aggregated results from Google, Bing, and Brave.

#### 2\. For Scraping (Extracting Content)

* **Static Pages:** Use `httpx` or `requests` to fetch the HTML, and `BeautifulSoup` (bs4) to parse it.
* **Dynamic/JS Pages (SPAs):** Websites built with React or Next.js won't show content via standard requests. Use **Playwright** or **Selenium** in headless mode to let the Javascript load before grabbing the HTML.

#### 3\. For LLM Optimization (Cleaning data)

LLMs don't need raw HTML; it wastes tokens.

* **`crawl4ai` or `markdownify`:** Turn the raw HTML into clean Markdown. LLMs understand Markdown syntax (headers, links, tables) exceptionally well.
* **`Trafilatura`:** A specialized Python library designed to strip away ads, headers, footers, and sidebars, leaving _only_ the core article text.

---

### ⚠️ The Core Challenges & Solutions

| Challenge              | Why it happens                                                  | The Manual Fix                                                                                              |
| ---------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **IP Bans & CAPTCHAs** | Google/Bing detect automated traffic immediately.               | Use **DuckDuckGo**, rotate your User-Agents, add random delays between requests, or use a proxy service.    |
| **Token Bloat**        | Raw HTML contains thousands of lines of CSS, JS, and nav menus. | Run the text through **Trafilatura** or convert it to **Markdown** before sending it to the agent.          |
| **Infinite Loading**   | The page requires a user scroll or button click to reveal data. | Use **Playwright** to script basic interactions (e.g., scroll down, wait 2 seconds) before extracting text. |

---

### 🚀 A Quick Code Conceptual Example

Here is how you can write a quick, free search tool for your agent using DuckDuckGo and Trafilatura:

python

```
from duckduckgo_search import DDGS
import trafilatura

def agent_search_tool(query: str, max_results: int = 3):
    # 1. Query the search engine
    with DDGS() as ddgs:
        results = [r for r in ddgs.text(query, max_results=max_results)]
    
    scraped_data = []
    
    # 2. Scrape the top URLs found
    for result in results:
        url = result['href']
        print(f"Scraping: {url}")
        
        # Fetch and extract clean main text content
        downloaded = trafilatura.fetch_url(url)
        clean_text = trafilatura.extract(downloaded) if downloaded else ""
        
        scraped_data.append({
            "title": result['title'],
            "url": url,
            "content": clean_text[:2000] # Limit characters to save tokens
        })
        
    return scraped_data

```



If you want to build this out, tell me:

* What **framework** are you using for your agents (LangChain, AutoGen, CrewAI, or a custom loop)?
* Are you planning to scrape **specific target websites** (like e-commerce or forums), or just **general web searches**?

I can help you write the exact tool integration or custom scraping selectors you need.

# what if you query and scrape manually to implement web search for agents for personal projects

Building a manual query-and-scrape system for your personal AI agents is a fantastic, highly customizable approach. **Implementing this manually gives you total control over costs, data formatting, and filtering, but you will trade that control for continuous maintenance.**

Here is how a manual search-and-scrape pipeline breaks down, along with the technical stack, architectural flow, and major hurdles you will need to handle.

---

### 🗺️ The Architecture Flow

A typical DIY search agent follows a four-step pipeline:

```
[Agent Query] ➔ [1. Search Provider] ➔ [2. Link Extractor] ➔ [3. Web Scraper] ➔ [4. Context Optimizer] ➔ [LLM Response]

```

1. **Query Generation:** The agent takes a user prompt and rewrites it into search-engine-friendly keywords.
2. **Search / HTML Fetching:** The system hits a search engine (like Google, Bing, or DuckDuckGo) to get the results page.
3. **Scraping & Parsing:** The system extracts the top 3–5 URLs, fetches the raw HTML of those pages, and strips away the noise (ads, nav bars, footers).
4. **Context Stuffing:** The clean text is chunked, ranked, and fed into your LLM's context window as reference material.

---

### 🛠️ Recommended Tech Stack for Personal Projects

Depending on how deeply you want to build this yourself, here are the best tools for the job:

| Pipeline Step             | Light / Low-Code Stack                                                                       | Hardcore DIY Stack                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **1\. Search Extraction** | **DuckDuckGo Python library** (duckduckgo\_search) or **SearXNG** (self-hosted meta-search). | Raw HTTP requests to Google/Bing using rotating user-agents (High maintenance). |
| **2\. HTML Scraping**     | **Trafilatura** or **BeautifulSoup4** (Python).                                              | **Playwright** or **Selenium** (for JavaScript-heavy, dynamic websites).        |
| **3\. Content Cleaning**  | **Markdownify** (converts raw HTML straight to clean, compressed markdown).                  | Custom Regex and HTML tag stripping.                                            |

---

### ⚠️ The Major Challenges (And How to Fix Them)

If you build this manually, you will immediately run into three major roadblocks. Here is how to anticipate them:

#### 1\. CAPTCHAs and Bot Detection

Search engines and major websites hate being scraped. If your agent makes 50 requests an hour from your home IP address, you will quickly see **403 Forbidden** errors or Cloudflare CAPTCHA blocks.

* **The Personal Project Fix:** Use **DuckDuckGo** instead of Google. They are significantly more lenient with basic scripting. Alternatively, route your scraper through a cheap rotating proxy service or use a self-hosted **SearXNG** instance on a local Docker container.

#### 2\. JavaScript-Heavy Websites (SPAs)

Many modern sites (built on React or Next.js) return a blank HTML page initially. The actual content loads via JavaScript _after_ the page opens. A basic tool like `requests` or `BeautifulSoup` will capture nothing but a loading spinner.

* **The Personal Project Fix:** Use **Playwright** in "headless" mode. It spins up a background browser instance, lets the JavaScript execute for a second, and then grabs the fully rendered text.

#### 3\. Context Window Overload (Noise)

A single web page can easily contain 50,000 words of legal text, sidebar links, and ad scripts, but only 500 words of actual article content. Dumping raw HTML into your LLM will waste your API tokens and confuse the agent.

* **The Personal Project Fix:** Use Python libraries like **Trafilatura** or **Readability** (the engine behind Safari's Reader Mode). They use clever algorithms to strip out everything except the core article text.

---

### 💡 The Alternative: Hybrid Approach

Before going full DIY, consider **free-tier search APIs designed specifically for LLMs**. Services like **Jina AI Reader** (`r.jina.ai/URL`), **Firecrawl**, or **Tavily** offer free monthly tiers for hobbyists. You simply pass them a URL or search query, and they return perfectly formatted, LLM-ready markdown, handling all the proxies, CAPTCHAs, and cleaning for you behind the scenes.

To help you narrow down the best setup, tell me:

* Do you prefer a **pure Python/script-based** setup, or are you open to running **Docker containers** (like SearXNG)?
* What kind of websites do you expect your agent to read most? (**News articles, documentation, or dynamic social media sites?**)
* Would you like a **minimal Python code template** using DuckDuckGo and Trafilatura to get you started?

# how to parse thinking on openrouter api in js depfree

To parse the **thinking** process (reasoning tokens) from the **OpenRouter API** in JavaScript without any dependencies, you can use the native `fetch` API along with a `ReadableStream`.

OpenRouter returns reasoning tokens inside the streaming chunks, typically using the **`choices[0].delta.reasoning`** field (or sometimes wrapped in `<think>` tags depending on the underlying model's raw output).

Here is a complete, **dependency-free JavaScript implementation** for Node.js (v18+) or the browser:

javascript

```
async function streamOpenRouter() {
  const apiKey = "YOUR_OPENROUTER_API_KEY";
  
  const response = await fetch("https://openrouter.ai", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1", // Example model that supports reasoning
      messages: [{ role: "user", content: "Calculate 15 * 24 and explain step by step." }],
      stream: true
    })
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    // Decode the chunk and add it to our buffer
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");

    // Save the last incomplete line back to the buffer
    buffer = lines.pop() || "";

    for (const line of lines) {
      const cleanedLine = line.trim();
      if (!cleanedLine || cleanedLine === "data: [DONE]") continue;

      if (cleanedLine.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(cleanedLine.replace(/^data: /, ""));
          const delta = parsed.choices?.[0]?.delta;

          // 1. Check for explicit OpenRouter reasoning field
          if (delta?.reasoning) {
            process.stdout.write(`[Thinking] ${delta.reasoning}`);
          } 
          // 2. Check for standard content (final answer)
          else if (delta?.content) {
            process.stdout.write(delta.content);
          }
        } catch (e) {
          // Handle potential JSON parsing errors for partial stream fragments
        }
      }
    }
  }
}

streamOpenRouter();

```



### Key Details to Know

* **The Field:** OpenRouter standardizes reasoning tokens into `delta.reasoning`. Content tokens go into `delta.content`.
* **Fallback Behavior:** If you use a model where OpenRouter doesn't extract the reasoning into its own field, the thinking process will arrive inside `delta.content` surrounded by `<think>` and `</think>` tags. You can parse those out using a basic string state machine or regex if needed.

Are you running this code in the **browser** or **Node.js**, and which specific **model** are you planning to target?

# how to parse thinking on non streaming openrouter api in js depfree

To parse the "thinking" or reasoning process of models like DeepSeek-R1 on a **non-streaming** OpenRouter API call using dependency-free JavaScript (`fetch`), you need to target a specific property inside the response payload.

OpenRouter adheres to the OpenAI-compatible standard. For non-streaming requests, reasoning tokens are provided inside the `message` object of the choice under the `reasoning` parameter (or `reasoning_content` depending on the provider upstream, though OpenRouter normalizes this as `reasoning`). [](https://openrouter.ai/docs/api%5Freference/overview)

Here is the clean, **dependency-free JavaScript solution** using native `fetch` and modern `async/await` syntax:

javascript

```
async function getModelResponse() {
  const apiKey = 'YOUR_OPENROUTER_API_KEY'; // Replace with your actual key
  
  try {
    const response = await fetch('https://openrouter.ai', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // Optional headers to identify your app on OpenRouter ranking leaderboards
        'HTTP-Referer': 'https://your-site.com', 
        'X-Title': 'My App'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1', // A model that outputs thinking tokens
        messages: [
          { role: 'user', content: 'Why is the sky blue?' }
        ],
        stream: false // Non-streaming mode
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Extracting the payload
    const choice = data.choices[0].message;
    
    // OpenRouter maps the thinking block to .reasoning
    const thinking = choice.reasoning || choice.reasoning_content || null;
    const finalAnswer = choice.content;

    console.log('--- THINKING PROCESS ---');
    console.log(thinking ? thinking : 'No reasoning tokens returned.');
    
    console.log('\n--- FINAL ANSWER ---');
    console.log(finalAnswer);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getModelResponse();

```



### Key Considerations

1. **Fallback Strategy:** OpenRouter passes reasoning through `.reasoning`. However, depending on the internal routing provider it maps to, it can occasionally present as `.reasoning_content`. The line `choice.reasoning || choice.reasoning_content` safely captures both fallback options.
2. **Text-based fallback:** In rare instances where a provider does not support distinct fields, the thinking block might be included inside the standard `content` block wrapped in `<think>...</think>` tags. If `choice.reasoning` returns undefined, you can parse it from `choice.content` using a simple regular expression:  
javascript  
```  
const match = choice.content.match(/<think>([\s\S]*?)<\/think>/);  
const extractedThinking = match ? match[1].trim() : null;  
const cleanAnswer = choice.content.replace(/<think>[\s\S]*?<\/think>/, '').trim();  
```  


Are you using a **Node.js** backend or running this code directly in the **browser**? I can adjust the code block to include proxy considerations or environment variable management depending on your environment.

* [](https://openrouter.ai/docs/api%5Freference/overview)  
OpenRouter  
OpenRouter API Reference  
OpenRouter normalizes the schema across models and providers to comply with the OpenAI Chat API. This means that choices is always...
* [](https://openrouter.ai/blog/insights/every-modality-one-api/)  
OpenRouter  
One API for Image, Video, Audio, Embeddings & Transcription  
Jul 16, 2026 — On OpenRouter, every one of those modalities runs through a single OpenAI-compatible base … you change the model string and the co...

# how does openai compatible api output reasoning

### how does openai compatible api output reasoning

OpenAI-compatible APIs expose a model's step-by-step thinking process—often referred to as reasoning or chain-of-thought (CoT) tokens—primarily through **non-standard additions to the `Chat Completions` and `Responses` API structures**. [](https://github.com/vllm-project/vllm/issues/27755)

Because OpenAI's native API historically kept its reasoning tokens hidden from the output (only billing for them), open-weight providers and gateways had to establish their own extensions to expose this data. [](https://github.com/vllm-project/vllm/issues/27755)

Here is how OpenAI-compatible APIs structure and output reasoning across different formats:

#### 1\. The `reasoning` Field (Chat Completions)

The standard way for OpenAI-compatible servers (such as [vLLM](https://docs.vllm.ai/en/latest/serving/online%5Fserving/openai%5Fcompatible%5Fserver/), Ollama, and gateways like OpenRouter) to deliver chain-of-thought data is by injecting a new key alongside `content` in the message object: [](https://github.com/openai/openai-dotnet/issues/813)

json

```
{
  "id": "chatcmpl-12345",
  "object": "chat.completion",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "reasoning": "Let's first calculate 15% of 80. 10% is 8, 5% is 4, so 8 + 4 = 12...", 
        "content": "The answer is 12."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 45,
    "total_tokens": 60
  }
}

```



* **Historical Variant:** Some older implementations or specific model architectures used `reasoning_content` instead of `reasoning`. Most frameworks have standardized around `reasoning` for simplicity and compatibility. [](https://github.com/anomalyco/opencode/issues/13130)
* **Impact on multi-turn conversations:** When passing the assistant's previous message back to the API for the next turn, developers often include the `reasoning` block so the model retains its state of mind. [](https://docs.vllm.ai/en/v0.30.0/examples/reasoning/openai%5Fchat%5Fcompletion%5Fwith%5Freasoning/)

#### 2\. Server-Sent Events (Streaming)

When streaming data (`"stream": true`), reasoning tokens are usually emitted first, allowing UI components to show a live "Thinking..." block before the actual text generates. [](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens)

The chunks arrive via data deltas containing a `reasoning` key: [](https://github.com/openai/openai-dotnet/issues/813)

json

```
data: {"choices": [{"delta": {"reasoning": "Let's "}}]}
data: {"choices": [{"delta": {"reasoning": "analyze "}}]}
...
data: {"choices": [{"delta": {"content": "The "}}]}
data: {"choices": [{"delta": {"content": "answer "}}]}

```



Once the reasoning block is complete, the API transitions to emitting standard `content` tokens. [](https://github.com/openai/openai-dotnet/issues/813)

#### 3\. The OpenAI Responses API (The Modern Standard)

With the transition toward OpenAI's newer [Responses API specification](https://developers.openai.com/api/docs/guides/reasoning), reasoning is handled cleanly through an array of structured **output items**: [](https://developers.openai.com/api/docs/guides/reasoning)

json

```
{
  "output": [
    {
      "type": "reasoning",
      "content": [
        { "type": "text", "text": "Analyzing the dataset for outliers..." }
      ],
      "summary": [
        { "type": "text", "text": "Identified 3 data anomalies." }
      ]
    },
    {
      "type": "output_text",
      "text": "Based on my analysis..."
    }
  ]
}

```



In this arrangement, the response features distinct `type: "reasoning"` elements containing either the raw thinking process or an algorithmic summary. [](https://developers.openai.com/api/docs/guides/reasoning)

#### 4\. Controlling Reasoning Output

If you are hosting or querying an OpenAI-compatible endpoint, you can frequently tweak how reasoning behaves using incoming request parameters passed through `extra_body` or root parameters: [](https://docs.vllm.ai/en/stable/features/reasoning%5Foutputs/)

* **`reasoning_effort`** (or `reasoning.effort`): Maps to values like `"low"`, `"medium"`, or `"high"` to adjust token allocations for deeper problem-solving.
* **`include_reasoning: false`**: Supported by some inference backends to hide reasoning arrays entirely if your frontend client only expects standard text strings. [](https://developers.openai.com/api/docs/guides/reasoning)

Are you trying to parse reasoning outputs using a specific framework (like **LangChain**, **vLLM**, or the **official OpenAI Python SDK**), or are you configuring a custom API gateway?

* [](https://developers.openai.com/api/docs/guides/reasoning)  
OpenAI Developers  
Reasoning models | OpenAI API  
OpenAI reasoning models utilize internal reasoning tokens via the Responses API for planning, tool use, and multi-step tasks. cont...
* [](https://www.youtube.com/watch?v=b-BzeHF6WLA&t=373)  
YouTube·Sam Witteveen  
Open Responses - The NEW Standard API for Open Models  
Jan 20, 2026 — It also standardizes how reasoning is handled, potentially solving the issue of inconsistent reasoning implementations across diff...  
23s
* [](https://www.reddit.com/r/openrouter/comments/1njyzpq/why%5Fdoes%5Fthe%5Foutput%5Fof%5Fopenais%5Fo4mini%5Ffrom/)  
Reddit·r/openrouter  
Why does the output of OpenAI's o4-mini from OpenRouter ...  
Sep 18, 2025 — In the official API of OpenAI for these reasoning models … users only can get the final output texts without the access of interva...

Show all

# timeline of openai responses api

The **OpenAI Responses API** represents a major shift in how developers interact with OpenAI models, moving away from stateless completion loops toward native, server-side conversation management and agentic behaviors. [](https://medium.com/@praveenkumarsingh/openais-api-evolution-responses-api-vs-chat-completions-api-0463d73ce631)

Here is the timeline of the **OpenAI Responses API** and the broader API architecture evolution that led to it:

### 🏗️ Precursor Foundations

* **June 2020 — Completions API Released:** OpenAI introduces the original `/v1/completions` endpoint. It uses a single, freeform text prompt structure and is now considered a legacy architecture. [](https://medium.com/@praveenkumarsingh/openais-api-evolution-responses-api-vs-chat-completions-api-0463d73ce631)
* **March 2023 — Chat Completions API Released:** Shifting the industry toward conversation design, OpenAI introduces the `/v1/chat/completions` endpoint structured around an array of `messages` (`system`, `user`, `assistant`). [](https://medium.com/@praveenkumarsingh/openais-api-evolution-responses-api-vs-chat-completions-api-0463d73ce631)
* **November 2023 — Assistants API Introduced:** OpenAI attempts to solve server-side state management by introducing "Threads" and "Runs". While useful for complex agents, developers often find the orchestration loop, polling, and strict thread architectures cumbersome. [](https://www.youtube.com/watch?v=-HrILeVJwMY&t=941)

### 🚀 The Responses API Era

* **March 2025 — Launch of the Responses API:** OpenAI officially releases the `/v1/responses` endpoint. Designed using lessons learned from the Assistants API, it provides a unified interface that natively handles multi-turn state tracking via a `previous_response_id` instead of a rigid thread structure. It features built-in tool execution loops (such as running web searches and code execution) within a single API request. [](https://community.openai.com/t/introducing-the-responses-api/1140929)
* **Late 2025 / Early 2026 — Becoming the New Standard:** The Responses API officially begins replacing Chat Completions as the default recommendation for new projects. Advanced models like `gpt-6-astra` are natively integrated using the `client.responses.create()` method. [](https://developers.openai.com/api/docs/guides/migrate-to-responses)
* **October 8, 2026 — Ultrafast Mode Integration:** OpenAI expands the Responses API by introducing **Ultrafast mode** for `gpt-6-1-sol`. By passing `service_tier: "ultrafast"`, developers using the Responses API can drastically minimize the latency between generated output tokens, backed by regional U.S. and EU data residency. [](https://developers.openai.com/api/docs/changelog)

### 🔄 Summary Comparison of API Paradigms

| API Interface                   | State Management                                  | Tool Execution                     | Best Used For                                                      |
| ------------------------------- | ------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------ |
| **Completions API** (2020)      | None (Stateless)                                  | None                               | Legacy text generation                                             |
| **Chat Completions API** (2023) | Client-side (Send full history every turn)        | Client-side loop orchestration     | Simple, single-turn tasks or custom state logic                    |
| **Assistants API** (2023)       | Server-side (Rigid Thread objects)                | Managed via polling runs           | Complex, long-running background agents                            |
| **Responses API** (2025+)       | **Server-side (Flexible previous\_response\_id)** | **Autonomous single-request loop** | Modern agent pipelines, multi-turn apps, and low-latency workflows |

For technical migration steps and formatting code comparisons, you can review the official guide on [Migrating to the Responses API](https://developers.openai.com/api/docs/guides/migrate-to-responses). 

Are you looking to **migrate an existing application** from Chat Completions to the Responses API, or are you building a **new agentic workflow** from scratch? Let me know, and I can provide the exact code differences or architectural patterns for your stack.

* [](https://community.openai.com/t/introducing-the-responses-api/1140929)  
OpenAI Developer Community  
Introducing the Responses API - OpenAI Developer Community  
March 11, 2025 — The Responses API manages chat history by linking sequential calls using a \`previous\_response\_id\` parameter, which references the ...
* [](https://developers.openai.com/api/docs/guides/migrate-to-responses)  
OpenAI Developers  
Migrate to the Responses API  
When you get a response back from the Responses API, the fields differ slightly. Instead of a message , you receive a typed respon...
* [](https://developers.openai.com/api/docs/changelog)  
OpenAI Developers  
Changelog | OpenAI API  
Use gpt-6.1-sol with service\_tier: "ultrafast" to reduce the time between generated output tokens. It is available to all API user...

Show all

# how to use tool call on openai compatible api in js depfree

To implement tool calling on an OpenAI-compatible API without any dependencies (`depfree`), you can use the native global **`fetch`** API available in modern JavaScript and Node.js.

The complete loop for tool calling requires two steps:

1. Sending the user's prompt and tool definitions to the API, and handling the model's request to call a tool.
2. Executing your local function, sending the result back to the API, and receiving the final textual response. [](https://www.generalcompute.com/blog/tool-calling-with-open-source-llms)

Here is a clean, comprehensive implementation:

javascript

```
// 1. Define your base configuration
const BASE_URL = "https://your-provider.com"; // Replace with your OpenAI-compatible endpoint
const API_KEY = "your-api-key-here";
const MODEL = "your-model-name";

// 2. Define the local function(s) the model can use
function getWeather(location) {
  if (location.toLowerCase().includes("tokyo")) {
    return { temperature: "12", unit: "C", condition: "Rainy" };
  }
  return { temperature: "22", unit: "C", condition: "Sunny" };
}

// 3. Define the tool metadata structure (JSON Schema)
const tools = [
  {
    type: "function",
    function: {
      name: "getWeather",
      description: "Get the current weather for a given location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city and state, e.g. San Francisco, CA"
          }
        },
        required: ["location"]
      }
    }
  }
];

// Helper to make the HTTP POST requests
async function makeChatRequest(messages) {
  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODEL,
      messages: messages,
      tools: tools,
      tool_choice: "auto"
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return data.choices[0].message;
}

// 4. Orchestrate the complete agent loop
async function runAgent(userPrompt) {
  const messages = [{ role: "user", content: userPrompt }];

  console.log(`User: ${userPrompt}`);
  
  // --- First Turn: Ask the model ---
  let assistantMessage = await makeChatRequest(messages);
  
  // Append the model's thoughts/tool requests to the history
  messages.push(assistantMessage);

  // Check if the model decided to call any tools
  if (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0) {
    
    // Iterate and execute all requested tool calls
    for (const toolCall of assistantMessage.tool_calls) {
      const functionName = toolCall.function.name;
      const functionArgs = JSON.parse(toolCall.function.arguments);
      
      console.log(`\n[Model requested tool]: ${functionName} with args:`, functionArgs);

      let toolResult;
      if (functionName === "getWeather") {
        toolResult = getWeather(functionArgs.location);
      } else {
        toolResult = { error: `Tool ${functionName} not found.` };
      }

      console.log(`[Tool executed result]:`, toolResult);

      // Append the tool execution response back to the message history
      messages.push({
        role: "tool",
        tool_call_id: toolCall.id, // Must match the ID sent by the model
        name: functionName,
        content: JSON.stringify(toolResult)
      });
    }

    // --- Second Turn: Send the results back for the final answer ---
    assistantMessage = await makeChatRequest(messages);
  }

  console.log(`\nAI Final Answer: ${assistantMessage.content}`);
}

// Run the script
runAgent("What is the weather like in Tokyo right now?")
  .catch(console.error);

```



### Critical Rules for OpenAI-Compatible Tool Formatting

* **`tool_call_id` Match:** When returning the `role: "tool"` message, you _must_ pass the exact `id` provided by the incoming `tool_calls` object.
* **Stringified Arguments:** The arguments returned by the LLM (`toolCall.function.arguments`) come back as a JSON string. You must parse them with `JSON.parse()` before handing them to your functions.
* **Stringified Results:** The tool's output array payload payload (`content`) must be sent back to the API strictly as a string (use `JSON.stringify()`). [](https://www.youtube.com/watch?v=I1qOfbNVur0)

Are you running this script in **Node.js** or directly in a **Browser** environment? I can help you adapt this for streaming responses (`ReadableStream`) or add error boundary checks if needed.

* [](https://www.generalcompute.com/blog/tool-calling-with-open-source-llms)  
General Compute  
Tool Calling With Open-Source LLMs: A Complete Guide  
Execute each tool call and add results for tool\_call … tool\_call.function.name func\_args = json.loads(tool\_call.function.arguments...
* [](https://www.youtube.com/watch?v=I1qOfbNVur0)  
YouTube·Irtiza Hafiz  
OpenAI Function Calling | LLM Tools Essentials  
Jan 7, 2026 — ID this is the ID associated with this function call so when you send the result back to the model you need to give it the same it...  
14:49
* [](https://docs.parallel.ai/integrations/openai-tool-calling)  
Parallel Web Systems  
OpenAI Tool Calling  
This guide shows how to define Parallel Search as an OpenAI function and handle tool calls in your application. JSON. parse(toolCa...


