database

- data
  - chat
    - threads.yaml: thread -> thread metadata
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

---

when a message has failed, both the user msg and the "response" will be marked, which would be ignored when constructing history.

error will be injected


