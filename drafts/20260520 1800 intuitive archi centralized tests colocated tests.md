<!-- colocated ofc. build is easy, just ignore **/test/**, **/tests/** -->

compare having one test folder on the repo root and having many tests near the code

Choosing where to place test files is a fundamental architectural decision in software repositories.

Here is a direct comparison of the **Centralized** approach (one root folder) versus the **Colocated** approach (tests next to code). \[[1](https://news.ycombinator.com/item?id=30684777)]

Centralized Tests (`/tests` at Repo Root)

This strategy groups all testing files into a single directory at the top level of the project. \[[1](https://medium.com/@marinacruzjordao/the-hidden-dilemma-in-test-automation-success-choosing-the-right-repository-architecture-1ce31099b6ac), [2](https://mitches-got-glitches.medium.com/writing-good-unit-tests-in-python-with-ease-4d8f62227f81)]

- 📂 **Clean Codebase**: Keeps production directories strictly focused on source code.
- 📦 **Easier Packaging**: Simplifies shipping code by excluding the entire root test folder.
- 🧩 **Integration Friendly**: Ideal for end-to-end and integration tests crossing multiple modules.
- 📉 **Mirroring Overhead**: Requires duplicating the source directory structure inside the test folder.
- 🔍 **Navigation Friction**: Forcing developers to jump between distant folders to edit a single feature. \[[1](https://medium.com/@alexshamrai/grpc-testing-intro-writing-the-first-test-ac816fbae19d), [2](https://blog.mergify.com/pytest-setup/)]

Colocated Tests (Tests Near the Code)

This strategy places test files in the same directory as the implementation files they verify.

- ⚡ **High Proximity**: Finding, writing, and updating tests happens instantly alongside the code.
- 🧩 **Modular Architecture**: Self-contained components are easily moved, deleted, or reused.
- 👁️ **Visual Reminders**: Seeing missing test files instantly highlights untested code during reviews.
- 🧹 **Build Clutter**: Requires configuring build tools to filter out test files during compilation.
- 🔄 **Scope Confusion**: Mixing unit tests with broader integration tests can clutter local directories. \[[1](https://www.sliceofexperiments.com/p/the-4-ways-to-run-your-unit-tests)]

Side-by-Side Comparison

| Feature \[[1](https://smartbear.com/learn/automated-testing/what-is-unit-testing/), [2](https://www.reddit.com/r/learnrust/comments/v1ofcq/structuring%5Ftests%5Fmodules%5Fand%5Fsingle%5Fbinary/), [3](https://medium.com/chris-nielsen/so-whats-a-good-unit-test-look-like-71f750333ac0)] | Centralized (`/tests` at root)       | Colocated (near code)                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------- |
| **Best For**                                                                                                                                                                                                                                                                                | Integration & E2E tests              | Unit & component tests                   |
| **Discoverability**                                                                                                                                                                                                                                                                         | Low (requires navigating away)       | High (immediately visible)               |
| **Refactoring Ease**                                                                                                                                                                                                                                                                        | Hard (must move files in two places) | Easy (move the folder, everything moves) |
| **Build Configuration**                                                                                                                                                                                                                                                                     | Simple                               | Complex                                  |
| **Strict Encapsulation**                                                                                                                                                                                                                                                                    | High (tests only use public APIs)    | Low (can accidentally test internals)    |

The Hybrid Recommendation

Many modern development teams combine both approaches for maximum efficiency. Use **colocation** for unit tests to keep development fast and modular. Use a **centralized root folder** for integration, system, and end-to-end tests that span across the entire application. \[[1](https://adequatica.medium.com/ways-to-organize-end-to-end-tests-76439c2fdebb)]

To help narrow down the best setup for your project, let me know:

- What **programming language** or framework are you using?
- What **type of tests** do you write most (unit, integration, or E2E)?
- How **large** do you expect this repository to grow?

I can give you a specific recommendation based on your ecosystem.

- [link](https://news.ycombinator.com/item?id=30684777)\
  Delightful React file/directory structure\
  Mar 15, 2022 — Colocation of test files is the hands down winner and encourages the writing of tests. When you're making a change to a code file,\
  \
  Hacker News
- [link](https://medium.com/@marinacruzjordao/the-hidden-dilemma-in-test-automation-success-choosing-the-right-repository-architecture-1ce31099b6ac)\
  The Hidden Dilemma in Test Automation Success: Choosing the Right Repository Architecture —…\
  Mar 6, 2025 — A centralized test automation repository is a single, unified location where all automated tests across an organization are stored...\
  \
  \
  Medium
- [link](https://mitches-got-glitches.medium.com/writing-good-unit-tests-in-python-with-ease-4d8f62227f81)\
  Writing good unit tests in Python with ease — Part 2\
  May 10, 2021 — Structure Your tests should live in a directory at the top level of your project Tests are then grouped into modules in the test d...\
  \
  \
  Medium

Show all
