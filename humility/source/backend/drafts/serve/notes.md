i might support auto correction on url.

ref `20260622 1900 intuitive web routing history api auto correct typos link like hover info`

(for pages, not api)

---

im not even asking the right question.

in prod, there is only one backend server. it routes to build for pages, and call actions for api.

to proxy, the bundler would have to pass certain routes to backend. it's definitely bundler specific. and you might have to wrap and unwrap the payload.

for memory call, it solves a philosophical problem (one app one port, instead of one process one port), but not a practical one. actually it makes things much worse, as it's the backend that serves everything at the end of the day, not the dev server.

cors is straight forward. you define the server url on env.json (it also promotes decentralization, isnt it). it's trivial to handle cors on the backend (e.g. same domain, any port or subdomain welcomed). you can run the web however you like. for port, it does not have to be fixed. we do not claim our identity on a port. it's obsolete. like, you always have the backend running. if fixed, it adopts it. if not, it generate one, and write to env.json (you can import json directly, and parcel would auto refresh. you could not modify a runtime var in a module btw as they live in different worlds, and gets cached.). that's it!

---

you could not magically serve on localhost in ts.

browsers do not support it.

your runtime does. node, deno, bun, whatever.

the thing is, im the standard. im the elite. it works as long as it works here. you should not care the philistine and noisy world as a startup.

im one with the fastest engine.

hono. bun. that's it.

(but why not node? i want to have my port.)

---

it seems wiser to 

