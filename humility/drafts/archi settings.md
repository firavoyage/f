settings

# intent

you want to have a visual ui for config.

# spec

it saves to config file (data/config.yaml) under the hood.

rather have settings as a single object. 

there are the schema of settings and the actual 



# rationale

> rather have settings as a single object. 

you will not update it frequently and you may just rerender the whole app. it's fast.

on backend, it's easier to handle and less boilerplate than individual ones.
