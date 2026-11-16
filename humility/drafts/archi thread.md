thread state

an editable chat thread is fundamentally a tree.

<!-- you may implement editing via branching plus renaming hacks, which would be very unintuitive -->

<!-- you can duplicate msg content across branches. it could be over engineering if you referencing which as external id on some sqlite table, where reading latency might even outweigh memory (or disk storage actually) saving. -->

# structure

```yaml
thread:
  tree:
    0: # 0 is always 0, representing root
      children: 
        - 1
      current_focus: 1
    1: # "1" can be (or should be) message id
      children: []
      current_focus:
  message:
    # you do not render 0
    1:
      role:
      content:
      reasoning?:
      tools?:
  config:
    system_prompt:
    tools: # just be separate because that how it shows on ux
```

besides, you can have an append only thread history, or request/response (or sse delta) payload log.

```yaml
- action: init
- action: send user msg
  args:
    content: ...
```

you may save logs into separate files, or have "scalable" filenames (e.g. ab/cd/efghlog.log) in the future.

# actions

actions include user actions and server actions (e.g. new incoming delta for some msgs, change from other users or clients).

action and state sync (for rendering) are already decoupled.

when you perform an action on web, you gen req id and add to a temporary set. it will return the status of such action (rather than what it mutates). when you see an action result that matches, you toast or cleanup maybe (e.g. clear prompt textarea _wo appending to chat_). _you may consider no success after timeout as failure._

# possible user actions

## init_thread <!-- new thread(id = random id) -->

preferably you generate the id on web.

then you will connect to that thread.

backend should response an empty ~~initial~~ thread like.

```yaml
thread:
  tree:
    0:
      children: []
      current_focus:
  message: {}
```

the default fallback.

connection does nothing. it reads (at least it tries). it doesnt mutate.

---

you may setup some template like system prompt or default tool list. this can happen on either frontend or backend.

when you init, it may write such (current) default thread on disk.

## send(prompt)

it adds a user msg. period.

user msg doesnt stream.

_you may cache such prompt individually on localstorage for each client. you may sync it like tg if you expect one consistent draft._

## use tool

when you parse a tool, you may run it.

it's just regular streaming msg w role tool. but it doesnt (necessarily) call llms.

_auto tool call should be ideally implemented on server side... or not._

anyway you may default to frontend initialized actions, and call on both sides w id (fail silently when duplicates.)

as an extension that hooks (decorates) finish message.

you may

- click such tool yaml
- approve when prompt
- or manually directly actually
  - you can! e.g. fetch any page directly wo an assistant "tool call" if such url mentioned on prompt
  - for fetch specifically, you may default to md and truncate

idk, maybe you should not run the same tool twice, or you should cancel explicitly if you ignore. doesnt matter.

---

a tool may point to index.js/index.ts that exports `tool`.

(await import).

---

_for "sub agent"... i.e. you may recursively call yourself. well that's out of scope._

you either use some workflow, that is js fn including a few llm steps maybe, which is just a tool.

or agent. typically you branch this thread (or start new, or copy some template), send a prompt, and that's it. the master agent might inspect.

the master agent isnt a regular user. and things should tailor specifically.

## generate

you can generate iff it's user/tool on the last msg (it's guranteed it always starts w user if i apply such constraint consistently).

ideally you should generate when the last (or all, really) msg finishes.

---

by default, it will start generation on server when you send a msg.

**the server is a user!**

## _stop generation_

you unhook the listener and finish abruptly w specific reason.

you may stop shell or llm fetch. that's irrelevant.

tools should not be harmful regardless and tokens are cheap (and you might not force it on all endpoints).

# possible server actions

## prepend thread state

loads the full (relevant) thread when you open a thread.

includes

- full tree
- all completed msgs
- current value of all ongoing msgs

does not include

- full thread history (i.e. full user action log plus all completed server actions, or delta batched for each msg, as if non streaming)
- full user action log
  - _you may show on a separate tab_
- full server action (e.g. delta) log
- full server request/response (e.g. to endpoint) log

## update tree

no need to be surgical. rather swap the tree entirely.

## append message

```yaml
id:
role:
content:
reasoning:
```

you should append the string to each field.

<!-- clearly you should not append to role, lol. -->

## finish message

```yaml
id:
tools:
usage:
perf:
...
```

# impl

## backend

when you stream some response (e.g. llm or tool call),

you listen for delta.

specifically, 

when receive, you append that to current value of such msg and broadcast to all listeners of that thread.

when finish, you broadcast finish event and some derived results, such as parsed tool calls, perf, or usage. and you write into persistent storage (e.g. serializing as yaml on disk).

---

when a new client listens for some thread, 

you pull the state of all completed msgs (full action history or payload/broadcasting log might be irrelevant) from like disk, append current value of ongoing msgs, and send to the client. besides, you add them to listeners.

these should be sync, or effectively sync.

---

you broadcast _all_ actions on one thread to all listeners. no special case. you may ignore on frontend.

---

you may implement like heartbeating. these are general abstractions.

## web

you use web socket.

when you open a thread on frontend, you (clear all current state, ) listen for that thread (you unsubscribe vice versa).

for initial read, you add the tree and prepend all msgs.

you append delta.

when you disconnect, you reconnect.

reconnection can be of no difference than opening a thread.
