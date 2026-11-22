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

see archi thread.

---

have tool calls in yaml.

---

on build context, combine consecutive messages of the same role and consider tool as user

# rationale

you can really have dynamic tools.

but let's make it fixed. generally you would have a set of "current enabled" tools on every thread, at least on ux. root 0 is the main user thread.

that's easier to implement, and beneficial on cost (input cache) out of box. and modern llms can really handle it anyway, generally speaking.

---

rather have no metadata when you do not define any, esp when you even have no way to define programmatically.

you can always add new fields and existing code will work (as long as they dont take as a whole and parse everything).

---

```tool
web_search:
  query: foo
```

---


