# 1

compare tutorials, how-to guides, explanations, and references

---

Of course. This is a fantastic question, as understanding the difference between these forms of writing is key to creating and consuming effective documentation. The best framework for understanding this comes from Daniele Procida's **Diátaxis documentation system**, which clearly separates them by purpose and user need.

Here is a comparison of tutorials, how-to guides, explanations, and references.

### At a Glance: Summary Table

| Feature             | Tutorial                                       | How-To Guide                                      | Explanation                                       | Reference                                    |
| :------------------ | :--------------------------------------------- | :------------------------------------------------ | :------------------------------------------------ | :------------------------------------------- |
| **Purpose**         | To get a beginner started.                     | To achieve a specific goal/task.                  | To provide context and understanding.             | To describe the machinery.                   |
| **Orientation**     | Learning-oriented                              | Problem-oriented (Goal)                           | Understanding-oriented                            | Information-oriented                         |
| **User's Question** | "How do I get started?"                        | "How do I do X?"                                  | "What is Y? Why is Z this way?"                   | "What are the options for A?"                |
| **Narrative**       | Linear, story-like. Must be followed in order. | Directed, step-by-step. Can be done in isolation. | Discursive, exploring a topic.                    | Structured, non-narrative.                   |
| **Prerequisites**   | Assumes **none**.                              | Assumes some basic knowledge.                     | Assumes basic familiarity.                        | Assumes user knows what they're looking for. |
| **Example Analogy** | A cooking class for complete beginners.        | A recipe for a specific dish.                     | A food science article on why searing meat works. | A dictionary of culinary terms.              |

---

### Deep Dive into Each Type

#### 1. Tutorial

A tutorial is a **lesson**. It's designed for a hands-on, first-time experience.

- **Goal:** To give the learner a basic, working understanding of a tool or system and the confidence to continue. It's about **familiarization**.
- **Characteristics:**

  - **Concrete:** It's based on a specific, simple example, not abstract concepts.
  - **Step-by-Step:** The user is told exactly what to type or click.
  - **Minimal Theory:** It avoids deep explanations of "why" at this stage.
  - **Success-Oriented:** It must work. If the user fails, the tutorial has failed.

- **Example: "Your First Python Program"**
  1.  Install Python from python.org.
  2.  Open a text editor and type `print("Hello, World!")`.
  3.  Save the file as `hello.py`.
  4.  Open your terminal, navigate to the folder, and run `python hello.py`.
  5.  You should see `Hello, World!` printed.

#### 2. How-To Guide

A how-to guide is a **recipe**. It directs a user who already knows the basics toward the completion of a specific, common task.

- **Goal:** To get a user from A to B as efficiently and reliably as possible.
- **Characteristics:**

  - **Task-Oriented:** The title is always a task (e.g., "How to connect to a database," "How to resize an image").
  - **Practical & Actionable:** It's a series of steps, but it may offer choices (e.g., "You can use method A or method B...").
  - **Focused:** It doesn't teach the whole system, just the one task.
  - **Can be Skipped:** A user doesn't need to read all how-to guides, just the ones relevant to their current work.

- **Example: "How to Filter a List in Python"**
  - **Goal:** Create a new list containing only even numbers.
  - **Steps:** Use a list comprehension: `even_numbers = [x for x in original_list if x % 2 == 0]`.
  - **Also See:** The `filter()` function.

#### 3. Explanation (or Conceptual Guide)

An explanation is a **discussion**. It deepens the user's understanding by providing context, background, and reasoning.

- **Goal:** To illuminate and clarify. It answers "why?" not "how?"
- **Characteristics:**

  - **Concept-Oriented:** It explores a concept, architecture, or design decision.
  - **Discursive:** It can meander, compare, and contrast to build a full picture.
  - **No Direct Instructions:** It doesn't tell you what to do. It helps you think about the problem.
  - **Timeless:** While details may change, the core concepts are relatively stable.

- **Example: "Understanding Python List Comprehensions"**
  - Discusses the motivation behind them (readability, functional programming influence).
  - Compares them to equivalent `for` loops.
  - Explains the syntax breakdown and its relationship to set-builder notation in mathematics.
  - Talks about performance implications and when to use them vs. generators.

#### 4. Reference

A reference is a **description**. It is the cold, hard, technical truth about the system itself.

- **Goal:** To provide exhaustive, accurate, and quickly accessible information about the API, commands, or components.
- **Characteristics:**

  - **Structured & Consistent:** Entries are organized the same way (e.g., for a function: parameters, return value, exceptions).
  - **No Narrative:** There is no story or teaching. It's just facts.
  - **Comprehensive:** It aims to be complete, listing every option, flag, or argument.
  - **Truthful, Not Instructive:** It describes what a function _is_, not how to use it in a project.

- **Example: "The `sorted()` Function Reference"**
  - **Syntax:** `sorted(iterable, /, *, key=None, reverse=False)`
  - **Parameters:**
    - `iterable`: An iterable object (e.g., list, tuple).
    - `key`: A function that serves as a custom sort key.
    - `reverse`: If `True`, the list is sorted in descending order.
  - **Return Value:** A new sorted list.

### Why This Distinction Matters

Mixing these forms is a common source of bad documentation. For example:

- Putting a long conceptual explanation in the middle of a tutorial will confuse and lose the beginner.
- A how-to guide that is too abstract becomes an explanation and fails to help the user complete their task.
- A reference entry that tries to be a tutorial becomes bloated and hard to use for quick lookup.

By consciously separating these four forms, you can ensure that your writing meets the user's specific need at their specific stage of the journey.

# 2

explain Daniele Procida's Diátaxis documentation system

---

Of course. Daniele Procida's **Diátaxis documentation system** is a powerful, coherent framework for creating and structuring technical documentation. It's based on a simple but profound insight: **users approach documentation with different needs at different times, and no single type of document can satisfy all these needs.**

The system provides a clear structure to ensure that documentation is comprehensive, non-overlapping, and serves the user effectively.

### The Core Philosophy

Diátaxis (pronounced _dee-AT-ax-is_) argues that the confusion and poor quality often found in documentation stem from mixing up four distinct modes of writing, each with its own purpose, structure, and voice. By consciously separating them, documentation becomes easier to write, maintain, and use.

The system is built around two axes that represent the user's relationship with the documentation:

1.  **Practical vs. Theoretical:** Is the user trying to _do_ something, or are they trying to _understand_ something?
2.  **Learning vs. Consulting:** Is the user in a state of _acquiring knowledge_ (learning), or are they looking for _specific information_ (consulting)?

These two axes create four distinct quadrants, each corresponding to one of the four documentation types.

### The Four Quadrants of Diátaxis

Here is the core model, visualized as a compass:

```
         +-----------------------+
         |      THEORETICAL      |
         +-----------------------+
         |                       |
  LEARNING   EXPLANATIONS      |   CONSULTING
         |                       |
         |       TUTORIALS       |
+--------+-----------------------+--------+
|        |                       |        |
|PRAGMATIC                       |PRAGMATIC|
|        |                       |        |
+--------+-----------------------+--------+
         |      HOW-TO GUIDES    |
  LEARNING                     |   CONSULTING
         |       REFERENCE       |
         +-----------------------+
         |      THEORETICAL      |
         +-----------------------+
```

_(A simplified representation of the Diátaxis compass)_

Let's break down each quadrant in detail.

---

#### 1. Tutorials (Practical & Learning-Oriented)

- **User's State:** "I'm new and I want to get started." The user is in a learning mode, hands-on, and needs to be guided.
- **Purpose:** A lesson. Its goal is to give the user a successful first experience, building their confidence and familiarizing them with the tool.
- **Key Characteristics:**
  - **Led by the Teacher:** The tutorial makes decisions for the user. It says, "Type this. Click that."
  - **Concrete & Specific:** It's based on a single, simple example from beginning to end.
  - **Minimal Theory:** It avoids deep explanations. The goal is to _show_, not to _explain why_.
  - **Success-Oriented:** It must work flawlessly. Failure destroys the user's confidence.
- **Analogy:** A guided cooking class where the instructor holds your hand through making a specific dish.

#### 2. How-To Guides (Practical & Consulting-Oriented)

- **User's State:** "I know the basics, and I need to accomplish a specific task." The user is in a problem-solving mode.
- **Purpose:** A recipe. Its goal is to get the user from A to B as efficiently and reliably as possible.
- **Key Characteristics:**
  - **Goal-Oriented:** The title is always a task (e.g., "How to connect to a remote database," "How to resize an image").
  - **Directed & Actionable:** It provides a series of steps, but may offer choices (e.g., "You can use method A or method B").
  - **Modular:** Each guide is self-contained and addresses one problem. A user doesn't read them all, just the one they need.
  - **Assumes Basic Knowledge:** It doesn't teach fundamentals; it assumes the user is already oriented.
- **Analogy:** A recipe in a cookbook for a specific dish.

#### 3. Explanation (Theoretical & Learning-Oriented)

- **User's State:** "I understand how to do it, but I want to know _why_ it works that way." The user is in a reflective, understanding mode.
- **Purpose:** A discussion. Its goal is to provide context, deepen understanding, and illuminate the underlying concepts.
- **Key Characteristics:**
  - **Concept-Oriented:** It explores architecture, design decisions, and theory.
  - **Discursive:** It can meander, compare, and contrast to build a full picture. It's the most "essay-like" form.
  - **No Direct Instructions:** It doesn't tell you _what to do_.
  - **Timeless:** While details may change, the core concepts are relatively stable.
- **Analogy:** A food science article explaining why searing meat locks in juices, or the history and cultural significance of a particular dish.

#### 4. Reference (Theoretical & Consulting-Oriented)

- **User's State:** "I need a specific, technical detail about the system." The user is in a lookup mode.
- **Purpose:** A description. Its goal is to be an exhaustive, accurate, and quickly accessible source of truth.
- **Key Characteristics:**
  - **Structured & Consistent:** Entries are organized the same way (e.g., for a function: syntax, parameters, return value, exceptions).
  - **No Narrative:** There is no story, opinion, or teaching. It's just facts.
  - **Comprehensive & Accurate:** It aims to list every option, flag, or argument without omission.
  - **Truthful, Not Instructive:** It describes what a function _is_, not how to use it in a project.
- **Analogy:** A dictionary or a chemical periodic table.

---

### The Key Principles and Rules of Diátaxis

1.  **The Four Are Fundamentally Different:** You cannot write a single document that is both a good tutorial and a good reference. Their goals are in direct opposition (e.g., a tutorial avoids choices, a reference lists all choices).
2.  **They Work Together as a System:** A user's journey might start with a **Tutorial**, then use **How-To Guides** for their projects, consult **Reference** for details, and finally read **Explanations** to gain mastery.
3.  **Strict Separation is a Feature, Not a Bug:** By not mixing types, you prevent common documentation failures, like putting a long conceptual explanation in the middle of a tutorial or a how-to guide that's too abstract to be useful.
4.  **It's a Guide for Writers:** Diátaxis provides a clear mental model for documentation writers. When writing, they can ask: "What is the user's need right now? Am I teaching, guiding, explaining, or describing?" This clarifies the structure and content immediately.

### Impact and Benefits

Adopting the Diátaxis system leads to:

- **Better User Experience:** Users can find what they need quickly because the purpose of each document is clear.
- **Easier Writing and Maintenance:** Writers have a clear blueprint, making it easier to start, write, and update content.
- **Comprehensive Coverage:** The framework acts as a checklist, ensuring that all aspects of the user's needs are covered.

In essence, Diátaxis is not just a taxonomy for documentation—it's a methodology for thinking about and creating documentation that truly serves its users. Many major projects, like Django and Docker, have adopted its principles with great success.
