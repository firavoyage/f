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
      has_failed?:
      id:
      role:
      content:
      reasoning?:
      tools?:
      start_time:
      end_time:
      usage?:
        prompt_tokens:
        completion_tokens:
        total_tokens:
      perf?:
        tokens_per_second:
        time_to_first_token:
      model?:
config:
  current_model:
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

# actions <!-- user actions -->

action and state sync (for rendering) are already decoupled.

you send

- type: request <!-- you dont have to send it. just be clear and explicit. -->
- id
- action
- payload?

you may receive <!-- ideally void req should have a resp indicating success -->

- type: response
- id (same)
- action
- payload

on top of the abstraction, you

```
# (re)connect -> ws

await perform(action, req payload) -> resp payload
```

most actions takes current thread. you may curry it.

## subscribe (thread = random id)

you subscribe when you open a thread.

you will receive its state soon.

specifically, when you are on homepage/new thread, you do not subscribe.

after sending the first msg (check thread), you will set random thread id, sub, init, send, and generate

## unsubscribe (thread)

you unsub when you thread changes via effect cleanup.

## init (thread)

when you init, it formally adds such thread to index, and scaffold, on persistent storage.

you may setup some template like system prompt or default tool list.

it typically looks like this

```yaml
tree:
  0: # 0 is always 0, representing root (it doesnt matter whether it's number or string 0, it always works on js. you may name like 'root'.)
    children: []
message: {}
config:
  system_prompt: # the current one, history is separate
  tools: # separate like on ux, though technically inside system prompt (esp in the diy approach)
```

## send (thread, prompt, options)

it adds a user msg. period.

it doesnt immediately start generation.

<!-- obviously user msg doesnt stream. -->

_you may cache such prompt individually on localstorage for each client. you may sync it like tg if you expect one consistent draft._

## call tool (thread, tool)

it starts streaming immediately, unlike send. you do not add a tool yourself.

_well you can, e.g. auto fetch mentioned url wo assistant. you may have info of what you are doing._

## generate

you can generate iff it's user/tool on the last msg.

<!-- it's guranteed it always starts w user if i apply such constraint consistently. -->

ideally you should generate for a user msg when all thing settles, if it depends on prev resp.

on ux, you may

- queue that msg
- force gen on partial prev resp
- stop prev resp and start generation

typically it will auto start generation. if that might not be what you want (e.g. when you forcefully stopped a prev tool call or didnt approve at all, or when you just open a thread while the last resp errs, which would be ignored and you could just continue), on ux, you may see a continue button.

## _stop generation (thread, message)_

you will no longer receive any new delta for that msg _on backend_.

you may try to stop endpoint llm gen or such shell tool abruptly.

## _read history (thread)_

you get the full history of

```yaml
action:
start_time:
end_time?:
```

```yaml
action: send
prompt: ...
user?: id
```

```yaml
action: generation
has_failed?:
id:
role:
content:
reasoning?:
usage?:
  prompt_tokens:
  completion_tokens:
  total_tokens:
perf?:
  tokens_per_second:
  time_to_first_token:
start_time:
end_time:
model:
request payload?:
response payload?:
```

only completed generation will be add to history.

## _read log (thread)_

every server delta received and sent.

maybe irrelevant.

e.g. you may see the full endpoint payload, incl. proprietary fields.

# broadcasts <!-- server actions -->

broadcasts doesnt have to have some id like responses for user actions.

you may receive

- type: broadcast
- action <!-- would possibly benefit polymorphism when named the same -->
- payload

## set tree (thread)

<!-- no need to be surgical. rather swap the tree entirely. -->

when you open (i.e. subscribe) a thread

current tree. not all historical actions.

specifically, for new (non existing) threads, it returns

```yaml
0:
  children: []
```

## set messages (thread)

when you open (i.e. subscribe) a thread

incl. all msgs of whatever status

specifically, for new (non existing) threads, it returns

```yaml
{}
```

## set config (thread)

you would read all these when opening a thread but it can update individually.

## set metadata (thread)

you would read all these when opening a thread but it can update individually.

## append (thread, message)

```yaml
role:
content:
reasoning:
```

you should append the string to each field.

<!-- clearly you should not append to role, lol. -->

## finish (message)

```yaml
has_failed?:
# id:
# role:
# content:
# reasoning?:
tools?:
# start_time:
end_time:
usage?:
  prompt_tokens:
  completion_tokens:
  total_tokens:
perf?:
  tokens_per_second:
  time_to_first_token:
```

it should not finish w the last delta. append instead.

# impl

## backend

when you stream some response (e.g. llm or tool call),

you listen for delta.

specifically,

when receive, you append that to current value of such msg and broadcast to all subscribers of that thread.

when finish, you broadcast finish event and some derived results, such as parsed tool calls, perf, or usage. and you write into persistent storage (e.g. serializing as yaml on disk).

---

when a new client subscribes some thread,

you pull the state of all completed msgs (full action history or payload/broadcasting log might be irrelevant) from like disk, append current value of ongoing msgs, and send to the client. besides, you add them to subscribers.

these should be sync, or effectively sync.

---

you broadcast _all_ actions on one thread to all subscribers. no special case. you may ignore on frontend.

---

you may implement like heartbeating. these are general abstractions.

## web

you use web socket.

when you open a thread on frontend, you (clear all current state, ) sub thread (you unsubscribe vice versa).

for initial read, you add the tree and prepend all msgs.

you append delta.

when you disconnect, you reconnect.

reconnection can be of no difference than opening a thread.
