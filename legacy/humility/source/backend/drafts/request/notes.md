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

i guess i would let request handle model routing. (get keys from yaml)

openai just takes url, key, message.

---

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

---


