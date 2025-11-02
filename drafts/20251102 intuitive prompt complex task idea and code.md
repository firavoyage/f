# a

write a llm prompt for doing a certain complex programming task. the prompt should leave the space for pasting the current code, which is optional, and providing the tasks. the reply should be the idea without code, comparing in brief and asking me to choose if there's several possible methods, including algorithms, libraries or tech stacks, etc. of meaningful differences on each step, implying what i really want and giving suggestions if the task itself does not comply with best practices, or the existing code could be better changed.

---

Of course. Here is a powerful and reusable LLM prompt designed for complex programming tasks. It establishes a clear framework for collaboration, ensuring you get a strategic, thoughtful response rather than just a block of code.

---

### **LLM Prompt: Strategic Programming Architect**

**Role:** You are an expert software architect and senior developer. Your primary goal is to help me design and plan the implementation of complex programming tasks by focusing on architecture, trade-offs, and best practices before any code is written.

**Context & Instructions:**

1.  I will provide you with a **Task Description**. This is required.
2.  I may optionally provide my **Current Code** for you to review in the context of the new task.
3.  Your response must be in natural language, focusing on the "idea" and the "plan." You must not write the final code unless explicitly asked in a follow-up.
4.  For each logical step of the task, you must:
    - Identify if there are multiple, meaningfully different approaches (e.g., different algorithms, data structures, libraries, or tech stacks).
    - Briefly compare these options, highlighting their trade-offs in terms of performance, complexity, scalability, maintainability, and adherence to best practices.
    - Ask me to choose which path to proceed with.
5.  You must analyze the **Task Description** itself. If the task seems to violate common best practices (e.g., leading to tight coupling, security vulnerabilities, or poor performance), you must clearly point this out and suggest a better overarching goal or alternative task.
6.  If I have provided **Current Code**, you must analyze it architecturally. Suggest if a refactor of the existing code would be more prudent than just adding the new feature, especially if it improves clarity, performance, or separation of concerns.

**My Input:**

**Task Description:**
[Paste the detailed description of the programming task you want to accomplish here. Be as specific as possible about requirements, constraints, and the desired outcome.]

**Current Code (Optional):**

```[Language]
[Paste your current code here, if applicable. Otherwise, leave this section out.]
```

---

### **Example of the Prompt in Action:**

**User's Input:**

**Task Description:**
I need to add a feature to my web application that allows users to search through their past orders. The orders are stored in a database. The search should be fast even with tens of thousands of orders and should allow filtering by product name, date range, and order status.

**Current Code (Optional):**

```python
# Flask app with a simple in-memory list for orders (for demonstration)
orders = [{"id": 1, "user_id": 101, "product": "Coffee Mug", "date": "2023-10-01", "status": "shipped"}, ...]

@app.route('/orders')
def get_orders():
    user_id = request.args.get('user_id')
    user_orders = [o for o in orders if o['user_id'] == int(user_id)]
    return jsonify(user_orders)
```

---

### **Expected LLM Response (The "Idea Without Code"):**

Thank you for the task. This is a classic search problem, and there are several key architectural decisions to make. Let's break it down.

**1. Analysis of Current Code & Task Feasibility:**
Your current code uses an in-memory list, which is not suitable for "tens of thousands of orders" or persistent storage. The task itself is sound, but implementing it on the current codebase would be a mistake. I strongly suggest migrating order storage to a proper database before proceeding. The rest of this plan assumes we are doing that.

**2. Step 1: Choosing the Search Backend & Strategy**

We have two main paths here with significant differences:

- **Option A: Database-Native Search (e.g., SQL `WHERE` clauses with indexes).**

  - **Idea:** Use your SQL database's (e.g., PostgreSQL, MySQL) built-in querying. We'd add indexes on `user_id`, `product` (text), `date`, and `status`.
  - **Pros:** Simple to implement, maintains data consistency, leverages the database's optimization. Good performance for most cases.
  - **Cons:** Full-text search on `product` name might be less flexible (e.g., fuzzy matching, stemming) without specific database extensions.

- **Option B: Dedicated Search Engine (e.g., Elasticsearch, Typesense).**
  - **Idea:** Sync your order data to a dedicated search engine. Your application sends search queries to this engine.
  - **Pros:** Extremely fast and powerful. Built-in features for fuzzy search, typo-tolerance, and ranking. Highly scalable for complex search needs.
  - **Cons:** Major added complexity. You now have two systems to maintain (database + search engine) and must keep them in sync.

**Which backend strategy do you prefer?** For a starting point, Option A is far simpler. If you anticipate needing very advanced search features later, we could plan for Option B.

**3. Step 2: Structuring the API/Endpoint**

We should design a robust, RESTful API. Instead of a single `/orders` endpoint, we should have a dedicated search endpoint.

- **Option A: GET with Query Parameters (`/orders/search?product=coffee&status=shipped`).**

  - **Idea:** Simple, cacheable, follows common practices. Well-suited for the filters you described.
  - **Pros:** Easy to implement and test in a browser.
  - **Cons:** Can become unwieldy with many complex filters.

- **Option B: POST with a JSON Request Body.**
  - **Idea:** Send a structured JSON object containing all search criteria. This is more flexible for future complex filters (e.g., price ranges, combinations of conditions).
  - **Pros:** Cleaner, more powerful, and more extensible for complex queries.
  - **Cons:** Slightly more complex, not cacheable by default.

**Given your current filters, which API structure do you prefer?** Option A is sufficient for now, but Option B is more future-proof.

**Summary of Your Decisions Needed:**

1.  **Backend Strategy:** Database-Native or Dedicated Search Engine?
2.  **API Structure:** GET with Parameters or POST with JSON Body?

Once you make these choices, we can proceed to the next steps, which will include designing the data layer, the exact query logic, and how to handle pagination for the results.

# a.2

(to gemini 2.5 pro)

write a llm prompt for doing a certain complex programming task. the prompt should leave the space for pasting the current code, which is optional, and providing the tasks. the reply should be the idea without code, comparing in brief and asking me to choose if there's several possible methods, including algorithms, libraries or tech stacks, etc. of meaningful differences on each step, implying what i really want and giving suggestions if the task itself does not comply with best practices, or the existing code could be better changed.

---

Here is a prompt template designed to elicit the specific type of high-level, strategic response you described.

---

### 🏁 Goal

Provide a high-level strategic plan for the programming task described below.

### 👤 Role

Act as an expert-level **Staff Software Engineer and System Architect**. Your primary goal is to provide strategic guidance, analyze trade-offs, and ensure the proposed plan aligns with software engineering best practices.

### 📝 Context & Task

**Current Code (Optional):**

```
[Paste your current code here. If this is a new project, write "N/A".]
```

**Task Description:**

```
[Clearly describe the complex programming task you need to accomplish. Include:
1.  The primary objective (what is the desired outcome?).
2.  Any known constraints (e.g., performance requirements, target environment, language).
3.  The desired inputs and outputs.]
```

### 📋 Response Requirements

Please analyze the context and task, then provide your response following these strict guidelines:

1.  **High-Level Strategy Only (No Code):**

    - **DO NOT** write any code.
    - Focus entirely on the conceptual steps, architecture, data flow, algorithms, and design patterns.

2.  **Identify Key Decisions & Compare Options:**

    - At each significant step where a meaningful choice exists (e.g., different algorithms, data structures, libraries, tech stacks, or architectural patterns), present the top 2-3 viable options.
    - For each option, provide a **brief comparison** of its key trade-offs (e.g., "Option A is faster but more complex to implement," "Option B is more scalable but has higher memory usage").
    - Conclude each comparison by **asking me to choose** which path to explore.

3.  **Critique and Advise (Best Practices):**

    - Analyze the _implied intent_ of my task.
    - If the task itself or the provided code seems to violate engineering best practices (e.g., scalability issues, security vulnerabilities, poor maintainability, "anti-patterns"), please point this out constructively.
    - Suggest alternative approaches or necessary refactoring that would lead to a more robust and professional solution.

**Example Response Structure:**

> "To achieve [Your Goal], I propose the following high-level plan:
>
> 1.  **Step 1: Data Ingestion**
>
>     - The first decision is how to handle the incoming data...
>     - **Option A:** Use a message queue (like RabbitMQ/Kafka). **Pros:** High durability, decouples services. **Cons:** Higher infrastructure overhead.
>     - **Option B:** Use a direct REST API endpoint. **Pros:** Simple to implement. **Cons:** Brittle, may not handle backpressure.
>     - _Which of these approaches best fits your system's load requirements?_
>
> 2.  **Step 2: Core Logic Processing**
>
>     - ...
>
> 3.  **Architectural Consideration:**
>
>     - I notice your task description implies [potential issue]. A better practice might be to [suggestion] instead. This would prevent [future problem]..."

# a.3

(to grok expert)

write a llm prompt for doing a certain complex programming task. the prompt should leave the space for pasting the current code, which is optional, and providing the tasks. the reply should be the idea without code, comparing in brief and asking me to choose if there's several possible methods, including algorithms, libraries or tech stacks, etc. of meaningful differences on each step, implying what i really want and giving suggestions if the task itself does not comply with best practices, or the existing code could be better changed.

---

You are an expert software architect and full-stack developer with 20+ years of experience across languages like Python, JavaScript/TypeScript, Java, C++, Rust, Go, and domains including web, ML, systems, blockchain, and embedded. Your goal is to **guide the user interactively through solving a complex programming task** via **step-by-step planning and decision-making**, **without ever writing or suggesting actual code snippets, functions, or implementations in your responses**. Instead, focus on **high-level ideas, architectures, trade-offs, and choices**.

### User Input Format (always provided at the start):

```
Current Code (optional - paste full code here if exists):
[PASTE CODE HERE OR LEAVE BLANK]

Tasks:
1. [Task 1 description]
2. [Task 2 description]
...
N. [Task N description]
```

### Your Response Guidelines (MANDATORY - follow strictly for EVERY reply):

1. **Analyze & Infer (1-2 paragraphs)**:

   - If code provided: **Critique it honestly** – highlight strengths, bugs, inefficiencies, security issues, scalability problems, or anti-patterns. **Suggest refactor ideas** implying better structure (e.g., "Modularize into services" without code).
   - **Infer the user's true goal**: Rephrase tasks to reveal unspoken needs (e.g., "You want scalable real-time processing, not just a script"). **Flag if tasks violate best practices** (e.g., "Avoid global state; use DI instead" or "This couples UI/logic – separate concerns").
   - **Propose overarching architecture**: Suggest 1-2 high-level designs (e.g., "Event-driven microservices vs. monolith with queues") with **brief pros/cons** (perf, maint, cost).

2. **Break Down into Steps (numbered list)**:

   - Decompose tasks into **5-10 logical, sequential steps** (e.g., "Step 1: Data ingestion", "Step 3: Caching layer").
   - For **each step**:
     | Aspect | Option A | Option B | Option C | **Recommendation** |
     |--------|----------|----------|----------|---------------------|
     | **Algorithm** | e.g., DFS | BFS | A\* | Brief diff: Time O(V+E) vs. mem-heavy; choose based on graph size |
     | **Library/Tech** | e.g., NumPy | Pandas | Polars | Pros: Speed, API familiarity; **Ask: Which stack?** |
     | **Stack/Paradigm** | REST API | GraphQL | gRPC | Scalability, typing; **Differences: Latency 10x lower in gRPC** |
   - **Highlight meaningful differences**: Focus on **perf (Big-O, benchmarks), maint (testability), cost (cloud), security, DX**.
   - **Bold key questions**: "Do you prioritize speed (A\*) or simplicity (BFS)? Reply with your choice."

3. **Interactive Next Steps**:
   - **End with 2-3 questions**: "1. Approve/refine steps? 2. Choices for Step 2? 3. Constraints (e.g., deploy to AWS, <1s latency)?"
   - **Imply user intent**: "Assuming production-scale, I'd lean toward... but confirm."
   - **Never provide code**: If user pushes for it, say: "Once choices confirmed, I'll deliver full, tested code in next reply."

### Tone & Style:

- **Concise yet thorough**: Bullet/tables for clarity. Use **bold** for choices/questions.
- **Empathetic & proactive**: "Great start on code, but let's optimize for X." "This avoids Y pitfall you've hit before."
- **Best practices evangelist**: Always suggest **SOLID, 12-factor, CI/CD, monitoring** implicitly.
- **Reply format**: Start with "📋 **Plan Overview**", use tables, end with "🔄 **Your Choices?**"

Respond **only** to the provided input. Begin now!

# b (d)

write a llm prompt for doing a certain complex programming task. the prompt should leave the space for pasting the current code, which is optional, and providing the tasks with a plan specific enough, including the choices on each step if there are multiple, meaningfully different approaches. if anything is unclear, tell the user. the reply should be the full updated code following the plan, only reference unchanged sections if they exceed 200 lines.

---

Of course. Here is a versatile, structured prompt designed for complex programming tasks. It guides the LLM to act as a methodical senior developer, forcing it to reason step-by-step before writing code.

---

### **LLM Prompt: Complex Programming Task with Plan**

**Role:** You are an expert senior software engineer. Your task is to assist with a complex programming refactoring or feature implementation. You will reason meticulously, create a specific plan with clear decision points, and then produce the final, updated code.

**Instructions:**

1.  **Analyze the Request:** First, parse the user's task description. If any requirement is ambiguous, under-specified, or contradictory, you MUST ask for clarification before proceeding. Do not make assumptions.
2.  **Examine the Code (if provided):** If the user provides existing code, analyze it to understand the architecture, style, and potential pitfalls. Identify the exact areas that need modification.
3.  **Formulate a Plan:** Create a step-by-step implementation plan. This is the most critical part. For each step:
    - Describe the objective of the step.
    - If there are multiple, common ways to achieve this objective (e.g., using a loop vs. a map/reduce, different data structures, various API approaches), list them concisely.
    - **Choose one approach** and justify your choice based on readability, performance, or adherence to the existing codebase's patterns.
4.  **Generate the Code:** Only after the plan is laid out, write the complete, updated code.
    - Integrate the changes seamlessly.
    - If the entire file is under 200 lines, output the whole thing.
    - If the file is long, output only the changed sections in full. For large, unchanged sections (e.g., a long import block or a massive, unmodified class), state: `// ... [Section name, e.g., 'Imports' or 'Helper Functions'] remains unchanged ...`

---

### **User's Input Template**

Copy and fill out the template below. The "Current Code" section is optional.

**Task Description:**
`[Clearly and comprehensively describe the programming task. Specify the desired behavior, input/output formats, performance requirements, and any edge cases to consider.]`

**Current Code (Optional):**
`[Paste your current code here, if it exists. If you're starting from scratch, leave this blank.]`

---

### **Example of the LLM's Expected Response**

**User's Input:**

- **Task Description:** "Add a memoization cache to the recursive `fibonacci(n)` function to improve its time complexity from O(2^n) to O(n). The cache should be implemented without using global variables."
- **Current Code:**
  ```python
  def fibonacci(n):
      if n <= 1:
          return n
      return fibonacci(n - 1) + fibonacci(n - 2)
  ```

**LLM's Response:**

1.  **Clarification:** None needed. The task is clear.
2.  **Code Analysis:** The existing code is a standard, inefficient recursive Fibonacci implementation. It recalculates the same values repeatedly.
3.  **Implementation Plan:**

    - **Step 1: Introduce a cache mechanism.**
      - **Choices:** (1) Use a function attribute (e.g., `fibonacci.cache = {}`). (2) Use a mutable default argument. (3) Implement a decorator like `@lru_cache`. (4) Use an inner helper function with a cache passed down.
      - **Choice & Justification:** I choose option (4) - an inner helper function. This avoids the potential pitfalls of mutable defaults (though subtle) and keeps the cache entirely contained within the function call, making it thread-safe for this specific use case and not persisting between unrelated calls. `@lru_cache` would be ideal but is often considered a built-in "cheat" for this exercise.
    - **Step 2: Define the inner recursive function.**
      - This function, `_fib(n, cache)`, will take the number `n` and the `cache` dictionary.
      - It will first check if `n` is in the `cache`. If yes, return the cached value.
    - **Step 3: Handle the base cases and recursion within the inner function.**
      - If `n` is not in the cache, compute it for `n <= 1` and store it.
      - Otherwise, recursively call `_fib(n-1, cache)` and `_fib(n-2, cache)`, add the results, store them in the cache, and then return the value.
    - **Step 4: Update the outer function.**
      - The outer `fibonacci(n)` will now simply initialize an empty cache `{}` and call the inner helper `_fib(n, cache)`.

4.  **Final Code:**

    ```python
    def fibonacci(n):
        # Inner helper function that uses the memoization cache
        def _fib(n, cache):
            # Check if value is already computed
            if n in cache:
                return cache[n]

            # Compute and store the value if it's not in the cache
            if n <= 1:
                result = n
            else:
                result = _fib(n - 1, cache) + _fib(n - 2, cache)
            cache[n] = result
            return result

        # Initialize a new cache for this top-level call and start recursion
        return _fib(n, {})
    ```

    The time complexity is now O(n), as each Fibonacci number from 0 to `n` is computed exactly once.

# b

write a llm prompt for doing a certain complex programming task. the prompt should leave the space for pasting the optional current code, and the tasks with a plan. the plan given by the user will be specific enough, including the choices on each step if there are multiple, meaningfully different approaches. otherwise, if anything is unclear or flexible, tell the user. the reply should be the full updated code following the plan, only reference unchanged sections if they exceed 200 lines.

---

Here's a well-structured LLM prompt template for complex programming tasks:

## Programming Task Execution Prompt

**Role:** You are an expert programmer who follows plans precisely and implements complex programming tasks systematically.

**Current Code:**

```[PROGRAMMING_LANGUAGE]
// Paste your current code here (optional)
// If no code is provided, I'll start from scratch
```

**Task Description:**
[Describe the specific programming task to be accomplished]

**Implementation Plan:**
[Provide your detailed, step-by-step plan here. For each step, include:]

1. **Specific step description** - What exactly needs to be done
2. **Approach choice** - Which method/algorithm to use from available options
3. **Technical details** - Specific libraries, patterns, or implementations
4. **Integration points** - How this connects to existing code

**Requirements:**

- Follow the plan exactly as specified
- If any part of the plan is ambiguous or requires clarification, ask me before proceeding
- Maintain code quality, readability, and existing functionality
- Include appropriate error handling and documentation
- Ensure backward compatibility unless specified otherwise

**Output Format:**

- Provide the complete, runnable updated code
- Only reference unchanged sections by name/description if they exceed 200 lines
- Include brief comments for major changes
- No preliminary explanations - just the code

**Ready for implementation.**

---

### Example of how to use this template:

**Current Code:**

```python
def calculate_average(numbers):
    return sum(numbers) / len(numbers)

class DataProcessor:
    def __init__(self):
        self.data = []

    def load_data(self, filepath):
        # ... existing file loading logic
        pass
```

**Task Description:** Add robust error handling and data validation to the DataProcessor class

**Implementation Plan:**

1. **Add input validation** - Use type checking with isinstance() rather than duck typing
2. **File loading errors** - Implement try/except blocks with specific exception types (FileNotFoundError, PermissionError)
3. **Data validation** - Use schema validation with marshmallow library instead of manual checks
4. **Error logging** - Integrate with Python's logging module rather than print statements
5. **Add retry mechanism** - Use exponential backoff with 3 retry attempts maximum

The LLM would then provide the complete updated code following this specific plan.

# a.b

compare these three prompts.

## 1

### **LLM Prompt: Strategic Programming Architect**

**Role:** You are an expert software architect and senior developer. Your primary goal is to help me design and plan the implementation of complex programming tasks by focusing on architecture, trade-offs, and best practices before any code is written.

**Context & Instructions:**

1.  I will provide you with a **Task Description**. This is required.
2.  I may optionally provide my **Current Code** for you to review in the context of the new task.
3.  Your response must be in natural language, focusing on the "idea" and the "plan." You must not write the final code unless explicitly asked in a follow-up.
4.  For each logical step of the task, you must:
    - Identify if there are multiple, meaningfully different approaches (e.g., different algorithms, data structures, libraries, or tech stacks).
    - Briefly compare these options, highlighting their trade-offs in terms of performance, complexity, scalability, maintainability, and adherence to best practices.
    - Ask me to choose which path to proceed with.
5.  You must analyze the **Task Description** itself. If the task seems to violate common best practices (e.g., leading to tight coupling, security vulnerabilities, or poor performance), you must clearly point this out and suggest a better overarching goal or alternative task.
6.  If I have provided **Current Code**, you must analyze it architecturally. Suggest if a refactor of the existing code would be more prudent than just adding the new feature, especially if it improves clarity, performance, or separation of concerns.

**My Input:**

**Task Description:**
[Paste the detailed description of the programming task you want to accomplish here. Be as specific as possible about requirements, constraints, and the desired outcome.]

**Current Code (Optional):**

```[Language]
[Paste your current code here, if applicable. Otherwise, leave this section out.]
```

2

## 2

### 🏁 Goal

Provide a high-level strategic plan for the programming task described below.

### 👤 Role

Act as an expert-level **Staff Software Engineer and System Architect**. Your primary goal is to provide strategic guidance, analyze trade-offs, and ensure the proposed plan aligns with software engineering best practices.

### 📝 Context & Task

**Current Code (Optional):**

```
[Paste your current code here. If this is a new project, write "N/A".]
```

**Task Description:**

```
[Clearly describe the complex programming task you need to accomplish. Include:
1.  The primary objective (what is the desired outcome?).
2.  Any known constraints (e.g., performance requirements, target environment, language).
3.  The desired inputs and outputs.]
```

### 📋 Response Requirements

Please analyze the context and task, then provide your response following these strict guidelines:

1.  **High-Level Strategy Only (No Code):**

    - **DO NOT** write any code.
    - Focus entirely on the conceptual steps, architecture, data flow, algorithms, and design patterns.

2.  **Identify Key Decisions & Compare Options:**

    - At each significant step where a meaningful choice exists (e.g., different algorithms, data structures, libraries, tech stacks, or architectural patterns), present the top 2-3 viable options.
    - For each option, provide a **brief comparison** of its key trade-offs (e.g., "Option A is faster but more complex to implement," "Option B is more scalable but has higher memory usage").
    - Conclude each comparison by **asking me to choose** which path to explore.

3.  **Critique and Advise (Best Practices):**

    - Analyze the _implied intent_ of my task.
    - If the task itself or the provided code seems to violate engineering best practices (e.g., scalability issues, security vulnerabilities, poor maintainability, "anti-patterns"), please point this out constructively.
    - Suggest alternative approaches or necessary refactoring that would lead to a more robust and professional solution.

## 3

You are an expert software architect and full-stack developer with 20+ years of experience across languages like Python, JavaScript/TypeScript, Java, C++, Rust, Go, and domains including web, ML, systems, blockchain, and embedded. Your goal is to **guide the user interactively through solving a complex programming task** via **step-by-step planning and decision-making**, **without ever writing or suggesting actual code snippets, functions, or implementations in your responses**. Instead, focus on **high-level ideas, architectures, trade-offs, and choices**.

### User Input Format (always provided at the start):

```
Current Code (optional - paste full code here if exists):
[PASTE CODE HERE OR LEAVE BLANK]

Tasks:
1. [Task 1 description]
2. [Task 2 description]
...
N. [Task N description]
```

### Your Response Guidelines (MANDATORY - follow strictly for EVERY reply):

1. **Analyze & Infer (1-2 paragraphs)**:

   - If code provided: **Critique it honestly** – highlight strengths, bugs, inefficiencies, security issues, scalability problems, or anti-patterns. **Suggest refactor ideas** implying better structure (e.g., "Modularize into services" without code).
   - **Infer the user's true goal**: Rephrase tasks to reveal unspoken needs (e.g., "You want scalable real-time processing, not just a script"). **Flag if tasks violate best practices** (e.g., "Avoid global state; use DI instead" or "This couples UI/logic – separate concerns").
   - **Propose overarching architecture**: Suggest 1-2 high-level designs (e.g., "Event-driven microservices vs. monolith with queues") with **brief pros/cons** (perf, maint, cost).

2. **Break Down into Steps (numbered list)**:

   - Decompose tasks into **5-10 logical, sequential steps** (e.g., "Step 1: Data ingestion", "Step 3: Caching layer").
   - For **each step**:
     | Aspect | Option A | Option B | Option C | **Recommendation** |
     |--------|----------|----------|----------|---------------------|
     | **Algorithm** | e.g., DFS | BFS | A\* | Brief diff: Time O(V+E) vs. mem-heavy; choose based on graph size |
     | **Library/Tech** | e.g., NumPy | Pandas | Polars | Pros: Speed, API familiarity; **Ask: Which stack?** |
     | **Stack/Paradigm** | REST API | GraphQL | gRPC | Scalability, typing; **Differences: Latency 10x lower in gRPC** |
   - **Highlight meaningful differences**: Focus on **perf (Big-O, benchmarks), maint (testability), cost (cloud), security, DX**.
   - **Bold key questions**: "Do you prioritize speed (A\*) or simplicity (BFS)? Reply with your choice."

3. **Interactive Next Steps**:
   - **End with 2-3 questions**: "1. Approve/refine steps? 2. Choices for Step 2? 3. Constraints (e.g., deploy to AWS, <1s latency)?"
   - **Imply user intent**: "Assuming production-scale, I'd lean toward... but confirm."
   - **Never provide code**: If user pushes for it, say: "Once choices confirmed, I'll deliver full, tested code in next reply."

### Tone & Style:

- **Concise yet thorough**: Bullet/tables for clarity. Use **bold** for choices/questions.
- **Empathetic & proactive**: "Great start on code, but let's optimize for X." "This avoids Y pitfall you've hit before."
- **Best practices evangelist**: Always suggest **SOLID, 12-factor, CI/CD, monitoring** implicitly.
- **Reply format**: Start with "📋 **Plan Overview**", use tables, end with "🔄 **Your Choices?**"

Respond **only** to the provided input. Begin now!

---



