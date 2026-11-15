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
      - listeners of receive (both receive and finish actually)
      - listeners of finish
  - send
    - check thread status
      - if locked, it will return failure
        - frontend should generally sync (same as read)
          - the easy way is to display msg after sending
            - esp fit local single machine deployment
          - _if you wanna be fluid, you have to retract that msg then_
      - otherwise, it will start streaming and return msg id
  - stream message on thread
    - if such message is active in memory
      - it will sse the current value and immediately listen for receive
        - you should listen immediately, but sse receiving packet only after sse the current value
          - you may achieve this w promise (you can absolutely listen for a flag, though not a plain bool value). you dont have to. essentially, when you finish sse, you may (toggle a flag) and call a fn, which calls listeners (then).
          - more formally
            - have a flag, and some then
            - sse current value, then
              - toggle the flag, call all then
            - listen for receive
              - if flag off, await send # it will be ordered by hono i guess
              - otherwise, append await send to then
    - otherwise it will parse the thread for that msg
      - generally you should avoid that by cleaning up the msg status map _a few secs_ after finish
        - it's to prevent memory leak
  - _read message on thread_
    - if you just care the final value, await for finish
  - read thread
    - all msgs on disk alongside the status
      - if active, you should stream the msg

before finishing, humility will parse tool calls and attach to such msg. it should be the same when you attach on frontend or backend.


