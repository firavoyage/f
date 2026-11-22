tools

# intent

given a set of tools, which can be injected or changed in the middle of a thread, 
each of which has instructions and fn

when building context, compile into system prompt, and when finished parse all tool calls and mark them as pending.

on ux, you may generally call such tools when it's ready. there could be active ongoinging messages if the tool doesnt depend on context, which is often the case.

<!-- actually, usually it's already ready if you parse tool calls after the last message and you chat in order. -->

you start the next generation if the last message is tool call result (role tool) and it's ready.



# spec

