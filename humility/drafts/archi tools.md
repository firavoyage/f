tools

# intent

given a set of tools, 

inject their instructions into system prompt when building context,

parse tool calls when finish, 

append to pending tool calls and sync w frontend.

when approved, call the fn of such tools,

(otherwise cancel or ignore)

stream their output into some message just like llms,

set and sync ready state when finish (or when they all finish if many).

when the last msg is tool (or user) and it's ready and there is no pending tool call (start if any),

start the next generation.

# spec

thread structure




```tool
web_search:
  query: foo
```


