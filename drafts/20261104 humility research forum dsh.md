# what do ppl say on deepseek harness

People are widely discussing **DeepSeek Harness** as a highly innovative but complex open-source agent framework, with the dominant praise centering on its unique **"everything is a plugin"** philosophy. [](https://www.youtube.com/watch?v=NPO2CwHnfmI)

Because it is currently in developer preview, the feedback is a mix of massive excitement over its architectural flexibility and frustration with its rough edges. Here is a breakdown of what developers, tech reviewers, and early adopters are saying: [](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)

### What People Love

* **The "Everything is a Plugin" Flexibility:** Users are blown away by how modular it is. Unlike traditional frameworks with rigid core agent loops, the DeepSeek Harness GitHub repository treats everything—the model itself, the tools, the memory, and even the agent loop—as a hot-swappable plugin. You can even plug in competitor models like Claude Code or OpenAI's Codex. [](https://rakiabensassi.substack.com/p/deepseek-harness-explained)
* **Exceptional Caching & Cost Efficiency:** In practical tests, developers note that the harness boasts an incredible **99% to 100% cache hit rate**. For instance, one user noted that a massive run using 23 million tokens cost only around $7 on the DeepSeek V4.1 Flash model due to this aggressive caching architecture. [](https://www.youtube.com/watch?v=q%5FGku%5FLIe3A&t=113)
* **High Visibility UI:** Unlike many CLI-only coding agents, builders love the local web app interface. Reviewers praise the built-in tracking metrics—such as real-time tokens per second, active cache rates, and "trajectory tabs" for debugging what the AI is thinking. [](https://www.youtube.com/watch?v=q%5FGku%5FLIe3A&t=113)
* **The New "Creator Mode":** Tech communities are highly enthusiastic about the newly introduced "creator mode," which allows developers to build custom 3D model renderers or video editing tools using simple, plain-English instructions to spin up new plugins. [](https://www.bloomberg.com/news/articles/2026-11-02/deepseek-boosts-ai-agent-offering-with-new-creator-mode)

### The Complaints & Critiques

* **Very Confusing Usability:** Many early testers on [Reddit threads](https://www.reddit.com/r/DeepSeek/comments/1vnpt5n/my%5Ffirst%5Fimpressions%5Fof%5Fdeepseek%5Fharness/) note that the tool has a steep learning curve. A common complaint is that specific skills inside the agent folders do not load automatically, and the developer preview documentation is sparse and hard to parse.
* **High Token Consumption:** While caching keeps the literal monetary cost low, the harness is a "token hog". It burns through tens of millions of tokens over just a few turns because it continuously passes massive system contexts and agent states back and forth.
* **Sluggish Execution at Times:** Some users note that when the framework is tasked with heavy refactoring, the model can feel slow to execute, sometimes prioritizing visual code changes over deep backend logic updates. [](https://www.reddit.com/r/DeepSeek/comments/1vnpt5n/my%5Ffirst%5Fimpressions%5Fof%5Fdeepseek%5Fharness/)

### The General Consensus

Most developers agree that DeepSeek Harness shouldn't be looked at as a simple out-of-the-box coding assistant, but rather as powerful **infrastructure for building custom AI agents**. Tech commentators on [Medium's Data Science Collective](https://medium.com/data-science-collective/how-to-use-deepseek-harness-better-than-99-of-people-dc5e1b97a811) note that if you just want a quick code generation API call, this is overkill—but if you want to orchestrate highly customizable, multi-agent workflows, it is currently one of the most exciting tools available. [](https://medium.com/data-science-collective/how-to-use-deepseek-harness-better-than-99-of-people-dc5e1b97a811)

Are you looking to **install and test** the harness locally, or are you trying to figure out how to **build a specific plugin** using the new Creator Mode? Let me know what you want to achieve so I can give you the right technical steps.

AI can make mistakes, so double-check responses 

* [](https://www.youtube.com/watch?v=NPO2CwHnfmI)  
YouTube·Prompt Engineering  
DeepSeek Harness - Its a Big Deal!  
that you can bring in to your agent. so you can mix match and replace and even extend different capabilities. can build multi- aen...  
12:42
* [](https://www.reddit.com/r/DeepSeek/comments/1vnpt5n/my%5Ffirst%5Fimpressions%5Fof%5Fdeepseek%5Fharness/)  
Reddit·r/DeepSeek  
My First Impressions of Deepseek Harness - Reddit  
Aug 13, 2026 — It's slow, uses way too many tokens, has a 99% cache hit rate, and gets the maximum performance out of Deepseek. Usability: Very c...
* [](https://www.youtube.com/watch?v=q%5FGku%5FLIe3A&t=113)  
YouTube·Mehul Mohan  
NEW DeepSeek Harness Is FUN!  
Oct 6, 2026 — Deepseek's desktop AI harness supports various modes, including standard, PTC, minimal, and creator modes, with the creator mode a...  
11m

Show all