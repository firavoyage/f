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
```

besides, you can have an append only thread history, or request/response (or sse delta) payload log.

```yaml
- action: init
- action: send user msg
  args:
    content: ...
```

you may save logs into separate files, or have "scalable" filenames (e.g. ab/cd/efghlog.log) in the future.

# possible actions

actions include user actions and server actions (e.g. new incoming delta for some msgs, change from other users or clients).

## new_thread(id = random id)

preferably you generate the id on web.



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

you may implement like heartbeating. these are general abstractions.

## web

you use web socket.

when you open a thread on frontend, you (clear all current state, ) listen for that thread (you unsubscribe vice versa).

for initial read, you add the tree and prepend all msgs.

you append delta.

when you disconnect, you reconnect.

reconnection can be of no difference than opening a thread.
