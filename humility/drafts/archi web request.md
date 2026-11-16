web request over websocket

```ts
# waitable callback = new Promise resolve => 

waitable afn = new promise afn

let ongoing_requests

request(payload, timeout, ws, stable){
  req id

  add to ongoing # ongoing

  send {req id, ...payload}

  # sync. no possible race cond in between

  r new promise resolve => ongoing[id] = resolve, sto reject
}

receive (payload){
  check req id

  it should exist

  # fine, if it doesnt exist, it's a broadcast rather than a response to a req

  resolve payload

  rm such id # you dont have to
}

listen to receive on ws
```
