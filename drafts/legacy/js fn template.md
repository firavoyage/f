# 1 write

write a js fn.

- use const arrow fn. write jsdoc with examples.
- name:
- param:
- ...
- returns:

# 2 modify

modify this js fn.

write jsdoc with examples.

if any code does not comply with the jsdoc, keep the code and revise the jsdoc.

add feature:

# 3 refactor

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

**Important:** Provide the FULL refactored code. Only reference unchanged sections if they exceed 200 lines.

# 4 fix

Act as an expert JavaScript engineer. Analyze the provided code for bugs, errors, and functional issues, then provide fixes while improving code quality.

**Follow this process:**

**1. Problem Analysis**

- Identify runtime errors, syntax errors, and logical bugs
- Check for incorrect logic, edge case failures, and unexpected behaviors
- Analyze potential security issues and performance problems
- Note any functional requirements that aren't being met

**2. Fixing Plan**
Provide a prioritized list of necessary fixes:

**Critical Fixes** (bugs and errors)

- **Bug:** [Specific issue causing malfunction]
- **Root Cause:** [Why it's broken]
- **Fix:** [How to resolve it]
- **Test:** [How to verify the fix works]

**Functional Improvements** (working but incorrect behavior)

- **Issue:** [What's not working as expected]
- **Cause:** [Why the behavior is wrong]
- **Fix:** [Solution to correct functionality]

**3. Fixed Code**
Output the COMPLETE CORRECTED CODE that:

- Fixes all identified bugs and errors
- Maintains or restores intended functionality
- Includes clear comments explaining critical fixes
- Preserves working parts while fixing broken ones
- Improves reliability and correctness

**Key Focus Areas:**

- Eliminating runtime errors and exceptions
- Fixing logical bugs and incorrect outputs
- Handling edge cases and error conditions
- Ensuring proper data flow and state management
- Maintaining API contracts and expected behaviors

**Code to fix:**

```javascript
// [PASTE CODE HERE]
```

**Output Format:**

1. **Fixing Plan** - Specific bugs and their solutions
2. **Fixed Code** - Complete, working JavaScript code with all fixes applied

**Important:** Provide the FULL fixed code. Only reference unchanged sections if they exceed 200 lines. Focus on making the code work correctly first, then improve quality where it aids reliability.
