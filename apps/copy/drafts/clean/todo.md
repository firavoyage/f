add options (these exact names):

- remove html attrs (default on)
- remove you said (default on)

write source/clean.ts. export two functions.

if on, use remark to parse, for html nodes, 

- remove html attrs (post process. pass whatever copied to clean.ts): only keep the tag. nothing else. classes, ids, data attrs, even non standard custom attrs.
- remove you said (pre process. if markdown on, clean before converting html to markdown): for `span` element containing exactly `You said: ` (case sensitive, a space after colon), like `<span whatever class ... whatever attrs ...>You said: </span>`, remove that node

support on main.ts

if both are off, it should work exactly as current

no testing
