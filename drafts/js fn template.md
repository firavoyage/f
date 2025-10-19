# 1

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name:
- param:
- ...
- returns:

# 2

modify this js fn.

write jsdoc with examples.

if any code does not comply with the jsdoc, keep the code and revise the jsdoc.

add feature:

# 3

Act as an expert software engineer specializing in JavaScript and code quality. Your task is to analyze the provided JavaScript code, generate a detailed refactoring plan, AND output the complete refactored code.

**Follow this structured approach:**

**Phase 1: Analysis & Assessment**

1.  **Code Quality Scan:** Identify linting errors, formatting inconsistencies, and code smells.
2.  **Architectural Review:** Analyze function length, nesting depth, naming conventions, duplication, and coupling.
3.  **Test Status:** Note if tests exist and their likely coverage.

**Phase 2: Refactoring Plan**
Create a prioritized list of specific changes with clear justification:

- **Quick Wins** (formatting, simple syntax improvements)
- **Structural Improvements** (function extraction, conditional simplification)
- **Architectural Enhancements** (dependency injection, pattern application)

For each item, specify:

- **Problem:** What's wrong and why it matters
- **Solution:** How to fix it
- **Benefit:** Expected improvement

**Phase 3: Code Implementation**
After presenting the plan, provide the COMPLETE REFACTORED CODE that:

- Implements all suggested improvements
- Maintains the original functionality
- Includes clear comments for major changes
- Uses modern JavaScript (ES6+) best practices
- Has improved readability and maintainability

**Key Focus Areas:**

- ✅ Consistent formatting and style
- ✅ Descriptive naming conventions
- ✅ Simplified functions (single responsibility)
- ✅ Reduced nesting and cognitive complexity
- ✅ Eliminated code duplication
- ✅ Proper error handling
- ✅ Modern syntax (const/let, arrow functions, template literals, etc.)
- ✅ Better organization and exports

**Please refactor this JavaScript code:**

```javascript

```

**Output Format:**

1.  **Refactoring Plan** - Bulleted list of specific changes with explanations
2.  **Refactored Code** - Complete, runnable JavaScript code implementing all improvements
3.  i will copy and paste your code and replace the original. if you reference any previous code ("remains the same" "keep as original"), tell me. ref at least code as possible to make it easier for me, so only reference the same code more than 200 lines.

# 4

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name:
- param:
- all preact methods (h, use state, use ref...) are already available in the scope.
- no need to export. i do not use a bundler.
- ...
- returns: vnode
