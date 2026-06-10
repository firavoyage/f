would i name a function like check\_typos or check\_typo

You should choose **`check_typos`** (plural) if the function scans a body of text and can find multiple mistakes, or **`check_typo`** (singular) if it evaluates a single word or input for a solitary mistake. \[[1](https://www.youtube.com/watch?v=Pkd3ud8b9%5F4), [2](https://www.reddit.com/r/AskProgramming/comments/19283vb/function%5Fnaming%5Fbest%5Fpractices/)]

Function names should act as precise, descriptive verbs that clearly convey their underlying data and behavior. \[[1](https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/), [2](https://www.youtube.com/watch?v=Pkd3ud8b9%5F4)]

### When to Use `check_typos` (Plural)

Use the plural version if your function processes a collection of text or data where multiple errors can exist. It signals to the reader that the function will hunt through the input for any and all mistakes. \[[1](https://www.youtube.com/watch?v=Pkd3ud8b9%5F4), [2](https://medium.com/@ruchivora16/how-to-name-variables-and-functions-2887ddc760dc)]

- **The input is a collection:** A string paragraph, an array of words, or an entire document.
- **The output is multiple:** It returns a list of found typos, fixes them all, or highlights them.
- _Example payload:_ `check_typos("The quickk brrown fox jumps over the laazy dog.")` \[[1](https://www.codewars.com/kata/68192cd301fbd97e7191f876), [2](https://www.youtube.com/watch?v=Pkd3ud8b9%5F4), [3](https://chromewebstore.google.com/detail/check-typo-ai-spell-check/cmekgnjbbdfpflodpncanldgoceodgpk?gl=us)]

### When to Use `check_typo` (Singular)

Use the singular version if the function’s scope is narrowed down to evaluating one discrete item at a time. \[[1](https://stackoverflow.com/questions/1505880/thoughts-on-variable-function-naming-conventions), [2](https://www.youtube.com/watch?v=Pkd3ud8b9%5F4)]

- **The input is an isolated unit:** A single word or a specific token.
- **The output is binary or singular:** It returns `True`/`False` if that specific word is misspelled, or returns a single correction.
- _Example payload:_ `check_typo("quickk")` \[[1](https://codephponline.com/php%5Fto%5Fcheck%5Fstrings%5Fcontains%5Fspecific%5Fword/)]

### Alternative Naming Conventions to Consider

Depending on what your function actually returns, there might be more idiomatic names that make your code read like a natural sentence: \[[1](https://www.linkedin.com/pulse/how-name-function-coding-style-episode-11-dragos-ionel), [2](https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/)]

- **If it returns a Boolean (`True`/`False`):** Prefix the function name with `has_` or `contains_`.
  - `has_typos(text)`
  - `is_misspelled(word)`
- **If it modifies or corrects the text directly:** Use a verb that implies a transformation rather than just a passive validation check.
  - `fix_typos(text)`
  - `remove_typos(text)`
- **If it locates the positions of the mistakes:**
  - `find_typos(text)` \[[1](https://www.reddit.com/r/learnprogramming/comments/191v6q8/do%5Fyou%5Fnormally%5Fname%5Fa%5Ffunction%5Fin%5Fa%5Fprogram%5Fas%5Fa/), [2](https://stackoverflow.com/questions/55298003/should-i-give-up-grammatical-correctness-when-naming-my-functions-to-offer-regul), [3](https://stackoverflow.com/questions/34093165/how-to-choose-function-names), [4](https://www.linkedin.com/pulse/how-name-function-coding-style-episode-11-dragos-ionel), [5](https://www.youtube.com/watch?v=7umWHAItSWw)]

To give you the most accurate suggestion, what **programming language** are you using, what does the **input data** look like, and what exactly does the function **return**?

- [link](https://www.linkedin.com/pulse/how-name-function-coding-style-episode-11-dragos-ionel)\
  How to name a function - Coding in Style - episode 11\
  Nov 28, 2016 — Of course, this is not a real conversation as it would have been a strange one. But sometimes this is how we name our functions. A...\
  5:42\
  LinkedIn·SoftGeeks
- [link](https://www.youtube.com/watch?v=Pkd3ud8b9%5F4)\
  QUICK TIP: Use Meaningful Function Names\
  Feb 16, 2023 — one of the easiest. and most effective things you can do to make your code cleaner and more reasonable is to use meaningful names ...\
  2:42\
  YouTube·Train To Code
- [link](https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/)\
  Coding like Shakespeare: Practical Function Naming ...\
  Oct 29, 2022 — Reading meaningful code is easy. Nevertheless, writing meaningful code is the opposite: you have to learn clean code practices and...\
  dmitripavlutin.com

Show all