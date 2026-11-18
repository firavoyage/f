thread state machine for chat

# structure

thread structure

```yaml
tree:
  0: # 0 is always 0, representing root
    children:
      - foo
    focus: foo
  foo: # "1" can be (or should be) message id
    children: []
    current_focus:
  1: # title naming workflow/agent
    children:
      - bar
    focus: bar
  2: # search workflow/agent
    children:
      - asdf
    focus: asdf
message:
  # you do not render 0
  1: message structure
config:
  current_model: openrouter:openai/gpt-6-luna
  # current_model:
  #   provider: = providers[0]
  #   model: gpt-6-luna
  system_prompt:
  tools: # just be separate because that how it shows on ux
metadata?:
  roots: [0, 1, 2]
  # get title and folder from thread index instead, no redundancy
  # title:
  # folder:
```

thread history?

```yaml
- action: init
  ...:
- action: send message
  user?:
  payload:
    prompt:
  time...:
- action: generate
  payload: complete finished message, as if non streaming
- action: set system prompt # historical actions might not be relevant or designed to be reversible, or technically replayable (informationally yes if done properly)
```

server history?

```yaml
- client connected!
- receive delta
- respond
```

server log?

```log
# you may use "scalable file name (e.g. ab/cd/foobar.log)"

# server history represented in log format, e.g.

2026-11-15 01:54:08 [info] [traverse] Starting traversal
```

message structure

```yaml
id:
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

jructure

```yaml
tool:
args: # just nest a bit to be simple
  ...
```

thread index

```yaml
# for listing only
id:
title:
folder:
# boolean metadata
# tags: ['hidden', 'pinned'] # technically a set, categorization on prototype theory
# likely you will not have arbitrary tags. add when you need.
metadata...: 
  ctime: 
  mtime: 
  foo: bar
  ...:
# move ctime mtime up. reserve "metadata" for actual arbitrary user defined "tags" or kv pairs.
```

# actions

you process actions on backend.

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

send prompt thread prompt
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
      broadcast finish message thread message message structure
```

# broadcasts <!-- server actions -->

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

build context tree

build plain context tree

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
broadcast:
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
