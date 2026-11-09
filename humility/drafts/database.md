database

- data
  - chat
    - threads.yaml: thread -> thread metadata
      - title
      - is deleted
      - creation time
    - (thread).yaml
      - has failed
      <!-- - error? # can exist whether or not has failed
        - type: network, status code, ...
        - message?
        - payload? -->
      - role: system | user | assistant | tool
      - content
- config
  - chat
    - config.yaml
      - providers: name -> options
        - key
        - endpoint
      - default model
        - can be lab/id or provider:lab/id
      - default provider = first provider
      - export?:
        - dir

---

when a message has failed, both the user msg and the "response" will be marked, which would be ignored when constructing history.

error will be as code block of lang "chat error".

you may render it w dedicated component.

---

it's recommended to have a server, whether local or remote.

_you may store these in localstorage if feasible._

---

doesnt seem it would yield meaningful result if failed.

so it either has failed w error content (yaml of type msg payload), or succeeded w actual generated response.

whether it fails at network or via http error code

---

clearly it works for wo local endpoints wo keys. just omit it, and it would parse undefined key properly.


