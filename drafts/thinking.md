i guess i would have a db

file based key value.

(i would reconsider if i need "handle")

obviously it would stand on top of `file`. i think it deserves a refactor.

<!-- i could impl the actions then (i should save every result, like api calls.) -->

---

<!-- it's wise to research more.

the real world is less hard but way more complex, which llms do not handle well. -->

---

- action/chat
  - new thread? (no empty threads)
    - thread count
    - backend/store
      - lib/file
  - append to thread tree
    - backend/store
      - lib/file
  - set message node
    - backend/request
      - (fetch)
- action/read
  - get the node tree
  - declare all the nodes i want
    - web/storage <!-- localstorage/idb/... abstraction, currently i guess local is enough? i can change my mind later -->
- action/list
  - list all threads (currently, let's have a threads.yaml. an array of threadid)

hooks are easy. they come later.

---

- backend/tree
  - init
  - append tree child to new tree
  - edit tree ~~level (start from 1, 0 is root, not a message)~~ index child <!-- there could be many nodes on the same level -->
  - ~~del level item~~ <!-- merge into rearrange? -->
  - focus ~~level~~ index item
  - read (you do need the children) ~~traverse to current focused array (first root)~~ <!-- wrap get? yes. why not. it's clear to have them together. (i could parse it!) -->
  - rearrange index new children

---

- backend/node
  - get id
  - set id value
  - (inc only)

upd: no. it will conflict w get, set from store. and it does not worth the tradeoff. (import node to remove node key)

---

how to call llm?

how to store keys? whereever.

how to store a tree?

how to parse yaml in nodejs

---

```yaml
# first item is root
- value: "root"
  children: [1, 2]
  focus: 1
- value: "first message key"
- value: "modified first message key"
```

after append

```yaml
# first item is root
- value: "root"
  children: [1, 2]
  focus: 1
- value: "first message key"
  - children: [3]
  - focus: 3
- value: "modified first message key"
- value: node id
```

after edit

```yaml
- value: "root"
  children: [1, 2, 3]
  focus: 3
- value: "first message key"
- value: "modified first message key"
- value: node id
```

normal

```yaml
- value: "root"
  children: [1]
  focus: 1
- value: "first message key"
  children: [2]
  focus: 2
- value: "modified first message key"
  children: [3]
  focus: 3
- value: node id
```

---

what

req

chatbot

dify <!-- it has no moat. visual ui is nothing. unlike agents, mcp, skills, tool calls, extensions, hooks, quick unclear. -->

---

how

tree: no info <!-- ofc focus is different, a thing you want before reading a node -->

node: incomplete, mark what it is, a step in workflow or a chat

<!-- it might err (network drop or oom crash), but very unlikely at writing -->

---

how would i store models and keys?

the file can be anywhere.

config folder. gitignored env. or a flag pointing anywhere.

you might have openrouter or any gateway supporting models.

you give key, i get (cache) the models.

this is kind i.

you have a key, they have many models. but they do not support model list.

so you list what you want. (keep the key dry).

this is kind ii.

you have a local model wo the need of api key, so i omit or mock it.

this is kind iv.

sometimes you just wanna test a model. you pair the model and a key.

this is kind iii.

you might have many providers of the same model. ~~the model name would be `model - provider`.~~ you can define the provider for a model.

i guess it would be

providers

```yaml
mock:
  # type: fn (you should export default? y. no. export request. default is not any concise, and by naming explicitly you have extensibility and future proof at no cost.)
  is_module: true
  file: somewhere.ts # await import
local:
  url: some url, like localhost
  key: no need to have key # or omit the line at all
myprovider i:
  url: some url
  key: some key
myprovider ii:
  url: some url
  key: some key
  model:
    - some model foo
    - some model bar
    - some model baz
myprovider iii:
  url: some url
  key: some key
  model: some model foo
```

---

incomplete?

```yaml
is incomplete: true
type: response # or stream response (where you might pick up and prefill from "wal")
idem key: some key
```

---

you might log. like, network failure, no api key.

<!-- low prio -->

only

- info <!-- be aware. -->
- warn <!-- be careful. reconsider if needed. -->
- error <!-- fix it. -->

well, i guess you will not log. just put timestamp inside the node. keep errors in node. you can filter them in context, and render them on frontend. (you can have a toggle to hide, if errors feel noisy.)

---

workflow:

```yaml
name: research project (company)
- get company name as x
- x history
- x philosohpy
- all features of x
- all highly requested features of x
- all limitations of x
- situation of x
- future of x
- ...
```

it's easy to formalize.

just add some metadata, like the method to use.

- ask
- parallel or sequential

you can also research a person, or research an english word.

you should also add metadata about what it is (how to render it)

- prompt (yeah you could indicate by role specifically for this, but you do not have to)
- response
- parallel (you do not have to show like `< 1/5 >` like normal edit. you have options. but as it's automated, you could differ it, and then you could render as you like.)

all nodes can be referenced directly. you can copy its id.

---

i guess i would let request handle model routing. (get keys from yaml)

openai just takes url, key, message.

---

today:

openai request poc.

<!-- possible errors of fetch? -->

result pattern refactor

---

i will put api key directly inside config.yaml in config

it's easy to support env or more locations (via a cli flag or something) in the future.

<!-- yk, env is old fashioned. no syntax highlighting, prone to typos, no flexibility (spaces around =). and i guess you do not have to override a key via a flag everytime in runtime. (you can config them properly if you do have many keys.) -->

both model and provider are required. you definitely know it. it's just some ux tricks on frontend.

if you just want a model, and you will go anywhere with quota left, or sort them based on price... have your own extension. it's easy. it can coop with js module or localhost.

<!-- support localhost first. js module could become a daemon, though await import seems easy. (handle relative path?) -->

request will handle all the observability. like timing.

i will simply throw when yaml fails to parse. network drop is expected. i will have custom errs. but they are also thrown.

you have absolutely define a default model on config. but it's also basically ux. you will still pass both model and provider.

i guess timestamp is enough. no timezone needed.

---

- fetch: error handling? on chat, i could write like missing api key, or network drop. there are not so many common possible errors.

log info warn error

context. type.


