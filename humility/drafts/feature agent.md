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
  - you may
- when approved, it will ask for result
  - result will be appended on backend and displayed
- cancelling is just special tool call
- 


