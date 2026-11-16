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
    1: # "1" can be message id
      children: []
      current_focus:
  message:
    # you do not render 0
    1:
      role:
      content:
      reasoning?:
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



# impl

you use web socket.

when you open a thread on frontend, you listen for that thread (you unsubscribe vice versa).



