create `any`.

a simple library for browser automation.

a web extension and a python backend.

how it works:

some real methods are defined in userscripts on `globalThis.__any__[method]`.

a python script calls the backend to do something.

backend tells the web extension, where to go `page`, what to do `method`, how to do `params`.

web extension sends back.

be simple, make it work first, but be modu future proof is good.

- most time the browser extension is idle without connection.
- dont use system env
- dont use deprecated methods

design the folder shape.


