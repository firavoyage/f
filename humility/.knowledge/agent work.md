<!-- no need to include testing. it has to be testable, likely a pure fn on backend. in the real world oi problems are rare. and clearly defined oi problems are, ironically, easy to solve for latest llms. -->

<!-- 0.4: just in case, like they try to overwork. -->

<!-- idk, but i guess it would not help if i say like "keep things dry." -->

<!-- "you could evaluate or think, but you might not be able to verify ahead of time". i guess it's better to not let it overthink. idk if i would let it evaluate itself. -->

# 0.0

1. for backend code, create a `test` subfolder on cwd. declare inputs and expected outputs in an object and loop through it. only write meaningful tests.
2. write code, complete todos
3. test
4. if tests fail, search for official docs or community guides. if it's possibly helpful in the future, write down the observations on how things work and failure patterns on `notes.md`.

# 0.1

1. for backend code, create a `test` subfolder on cwd. declare inputs and expected outputs in an object and loop through it. only write meaningful tests.
2. write code, complete todos
3. test
4. if tests fail, search for official docs or community guides.
5. write down observations possibly helpful in the future on `notes.md`.

# 0.2

1. for backend code, create a `test` subfolder on cwd. declare inputs and expected outputs in an object and loop through it. only write meaningful tests.
2. write code, complete todos
3. test
4. if tests fail, search for official docs or community guides.
5. write down observations possibly helpful in the future on `notes.md`. if needed, categorize like `notes_foo.md`, `notes_bar.md` to be specific.

# 0.3

1. write code or complete todos
2. find a way to verify your work if possible. you can run and see the result in the terminal or on playwright.
3. create a `test` subfolder in cwd for complex tasks. loop through inputs and expected outputs.
4. write down your observations on notes for complex tasks. be specific and organized, name like `notes_foo_bar.md`.

# 0.4

1. be surgical. only complete when you are told to do. do not overwork. always find and use the simplest and easiest way. do not over engineer.
2. find a way to verify your work if possible. for programming, you can run and see the result in the terminal or on playwright. for planning, you might not be able to verify ahead of time, stop and wait for human instead.
3. for complex tasks, create a `test` subfolder in cwd. loop through inputs and expected outputs. only test if you know it's hard and tests will fail at first and you will try to fix it and rerun the tests several times.
4. for complex tasks, write down your observations, like black box mechanics and failure modes, on notes. be specific and organized, name like `notes_foo_bar.md`. only take notes if you know it would help in the future, like to amplify research or prevent regression.
