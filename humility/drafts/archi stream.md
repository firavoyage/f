stream

you run single server instance. and js is inherently single threaded. no possible race cond <!-- e.g. for sth to happen between consecutive operations --> wo async.

- lib/generation
  - stream
    - besides all params of normal request, you pass receive
      - you could separate to receive and finish, it's the same payload underlying and it doesnt matter whether you place the if branch on lib or on your own code
      - single fn benefits from polymorphism
    - return void, generally
- backend
  - maintain a map of thread status and message status
    - thread
      - is active
      - active msg id
    - message
      - current value
      - listeners of receive
      - listeners of finish
  - send
    - check thread status
      - if locked, 
