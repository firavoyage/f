thread state machine

# intent

you may

- subscribe (read) a thread
- leave an opened thread
- new thread
- init thread
- send message on existing thread
- config tools
- call a pending tool
- generate

everything should be in sync by default as in data, wo relying on memory or specific control flows, via websocket.

# structure

thread structure

```yaml
tree: root | message -> children: message[], focus?: message
  0: # 0 is always 0, representing root
    children:
      - foo
    focus: foo
  foo:
    children: []
    focus:
  1: # title naming
    children:
      - bar
    focus: bar
  2: # web search
    children:
      - asdf
    focus: asdf
roots: root -> config
  0:
    model?: provider_model
    system_prompt?:
    tools?: tool name[]
    # you may shift starting position after compact
    start?: node
    pending_tools?: tool -> tool structure
messages: message -> message structure
```

thread state

```yaml
is_active?: # whether there is ongoing streaming msg/tool
```

thread index

```yaml
# id:
title:
folder:
is_hidden?:
creation_time: 
modification_time: 
```

thread history: jsonl of type, time, payload

message history: jsonl of type, time, payload

server history: plain text log

message structure

```yaml
# id:
role:
content:
reasoning?:
tools?: tool structure[]
start_time:
end_time:
usage?:
  prompt_tokens:
  completion_tokens:
  total_tokens:
perf?:
  tokens_per_second:
  time_to_first_token:
metadata?:
  has_failed?:
  model?:
  tags?:
```

tool structure

```yaml
tool:
args: # just nest a bit to be simple
  ...
```

# actions

you process actions on backend.

```
call tool {tool id}
  msg id

  append message

  broadcast set message, set tree

  broadcast append message
    content

  broadcast finish message
```

```
subscribe thread
  add client

  thread struture = read thread || empty thread

  broadcast set thread structure thread structure to client

unsubscribe thread
  rm client # ws is stable for the same client across events

init thread options
  thread structure = empty thread structure + scaffolding options

  commit to db (both thread and index)

  broadcast set thread structure

send prompt thread prompt # send
  message = random id

  message structure =
    role user
    content prompt
    ...

  append message

  broadcast set message, set tree

# thread status...
# in memory pending msgs content...

generate thread
  msg id

  append message

  broadcast set message, set tree

  build plain context

  generate_mock context, options, receive

  receive event
    if append
      # payload = delta

      # append to pending msgs...
      broadcast append message thread message delta
    if finish
      # payload = message structure

      commit to db

      broadcast finish message thread message message structure
```

# broadcasts

you sync w broadcasts on frontend.

```
set thread structure thread thread structure

# set thread config, metadata...

set tree thread tree

set message thread messge

append message thread message delta

finish message thread message message structure

# set thread status status: 'ready' | 'pending'
```

# abstractions

## naming

```
thread: thread id
thread_content: serialized thread text
thread_structure: in memory thread object, incl.
  tree: message ->
    children: []
    focus: message = first children
  # specifically,
  # for leaf,
  # children: []
  # focus: nil
  # for stem,
  # children: [foo, bar]
  # focus: foo
  message: message -> message structure
  metadata
    title
    folder
    time...
  config: # current config
    system prompt
    model
    provider
message: message id
message_content
message_structure:
  id?
  role
  content
  time...
  has_failed?
plain_message_structure:
  role
  content
context: message_structure[]
plain_context: plain_message_structure[] # payload to endpoint
delta:
  content
  reasoning?
```

<!-- it doesnt matter which one you make simpler. -->

## utils

```
append node tree message -> new tree

set focus tree message -> new tree

build context thread structure

build plain context thread structure

append message thread structure -> new structure
  append node
  set message
```

## web

```
# binds reconnect, setup heartbeat
connect

controls: control -> fn # behavior of each button/shortcut/command

# payload includes thread message if available. no default currying.
await perform(action, payload, timeout) -> response

# filter irrelevant broadcasts yourself
broadcasts: broadcast action -> fn # state transition for each broadcast
```

## backend

```
actions: action -> fn # response for each user action, e.g. build state from persistent storage and in memory cache (e.g. ongoing msg), mutate state if appliable

# seems broadcasts are always thread specific, only broadcast to subscribers in the first place
# thread is included in payload to be general, err when both client and thread in payload non existing
await? broadcast(broadcast, payload, client = all subs of this thread)

respond(request, payload, client)

send(client, payload)
  ws.send(stringify(payload))
```

## payload

request (i.e. user action)

```
type: request
request: request id
action
payload
```

response

```
type: response
request: request id
payload
```

broadcast

```
type: broadcast
event:
payload
```

# flow

## open the app

connect to ws

- auto reconnect
- heartbeat

list all threads

```
action: list
```

## open a thread

~~for empty thread, do nothing~~

subscribe (read) the read

```
action: subscribe thread

# for non existing thread, set an empty template
broadcast: set thread structure
```

you always subscribe a thread and decouple thread and displayed thread on url.

```
thread = nil
displayed thread = nil bind url

app(){
  thread = display thread ?? random id

  if displayed thread = nil
    displayed thread = thread if there are some messages

  thread will be always present. you ignore nil thread (init...).
}
```

## new thread

set thread random id

## send message

```
if no messages,
  # do it on frontend to make it easier to work w options
  action: init thread options

action: send thread prompt options

action: generate thread options
```

you will receive any change on the current thread

```
broadcast: set thread structure

# e.g. model, role, start time... you dont wanna include all these on any "append"
broadcast: set message

broadcast: append message...

# full message structure as if non streaming
broadcast: finish message
```

# controls

```
new thread
  set thread random id

send
  init if needed
  
  send prompt

  generate
```

# rationale

you always chat on root 0.

when you compact, you start a compact workflow on new root, inject the result to root 0, and shift starting point instead.

that's one of the main approaches.

