# 0.0

```sh
br eslint
br tsgo
```

if test subfolder exists, run the logical tests

# 0.1

always run eslint and tsgo first

```sh
br eslint
br tsgo
```

for backend code, run the logical tests in test subfolder

for frontend code, use tmux and parcel to serve, and use playwright mcp to see

# 0.2

always run eslint and tsgo first

```sh
br eslint
br tsgo
```

for backend code, run the logical tests in test subfolder

for frontend code, use tmux and parcel to serve, and use playwright mcp to see

note: your terminal can not last. use tmux by default.

# 0.3

run linting and type check first

```sh
br eslint
br tsgo
```

if passed, try to verify the functionality and correctness of your work

# 0.4

run linting and type check first

```sh
br eslint
br tsgo
```

after passing, try to verify the functionality and the correctness of your work

# 

<!-- "opt in" is not so strict. -->

# 0.5

no testing unless asked.

to test,

```sh
br eslint # lint
br tsgo # type check
# logics and functionality, like a test subfolder for backend, playwright for frontend
```

# 

<!-- test is for debugging. if it always works perfectly out of the box, you do not need testing. if it fails even one time, it's too complex for it. -->

# 0.6

you must not run any tests, linting, or typecheck.
