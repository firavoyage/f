agent

- a thread is an array of prompts and replies
- a request is a thread followed by a prompt

you dont have to structure that way.

just like how you do w system prompts

- there might be many system prompts in a thread, but you take the last when construcuting the request payload

so you merge consecutive msgs of the same role.

tools are effectively user msgs, whether or not you literally use tool as the role.

---

to be simple wo polling, "wait for certain status", or server sent events, it's frontend first.

just like many agents which do nothing when you close their window.

and i may go for "headless user" for bg tasks.

on live mode, that is when a window is opened

- a thread wont start w tool calls
- when receiving a reply, it will parse tool calls and permit them
  - it may auto approve
  - you may hook the approver to "smartly approve"
  - you may have a state like "pending tool calls"
- when approved, it will ask for result
  - result will be appended on backend and displayed
- cancelling is just special mode of the same tool call
- you may approve/cancel all on ux, but it doesnt have to batch
  - it just becomes a little bit more automatic
- when pending tool calls are empty and youve approved the last tool call (regardless of prev ones), it would generally continue the thread
- you may still continue the thread anyway as long as the last msg isnt "reply"
  - it's a command. it doesnt have to be a continue prompt.

currently you may not cancel ongoing tool calls if it gets stuck. _doing so would require the same tech._

if you send a msg in the middle, you either

- cancel all and send
- approve all and queue
- or do nothing

on refresh mode,

it reads the last reply msg, remove done tool calls, and do the same.
but it might not auto continue if all tool calls are approved. you may auto continue (no special case) if you dont mind "undry" reading.

---

a headless user should not compete w the live user. it's not designed for multi simultaneous user on one thread.

it may parse the last reply, auto approve all tool calls, and fire each and throw away the result, and send back the result until no tool call in the last reply.


