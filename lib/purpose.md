purpose

oct 2026

01

i may create a math lib for js.

why not. why not now.

03

on web/map, seems i should silence warning (react array children wo key) instead. i dont have to.

<!-- i may simply delete the web/map file, redirect web globals directly to map, check and silence that specific error (warning). -->

on std: is, i may see bigint as (subset of) number. no idea if matters. <!-- or i may call it numeric. -->

---

well, seems it would be merely polymorphism on min and max.

std math fn doesnt feel flawed.

---

std::is: support iterable and numeric.

---

let's introduce some fp methods to std.

some of them are already available via array prototype, but i dont like that.

04

yeah, file. shell.

work as if you ctrl alt t.

i build what i need.

components of a design system. maybe like adw. just to specify.

---

look at the py builtins. and ruby builtins maybe.

how would i convert types, yeah maybe ive eliminated nan (ok i will see nil as nan).

like parseint? array from? string from? new constructor? here inconsistent.

and i do need to, in case js sees + as string concat via some magic rules. and i could not override op <!-- i mean infix, not prefix --> cleanly.

---

i may not need the fp methods right now.

---

file. shell.

"launch"

maybe i would fix what's flawed first. they are existing deps. i need them.

---

yeah but it itself will rely on fs and terminal anyway if i want to do it cleanly (shell is quirky).

feels i would learn from py and rb, not go/rust (bounded by low level stuff no matter how you abstract or sweeten).

let's design a bit.

- launch by systemd (config normally, like after network maybe well anyway)
- read a config file, parse yaml
- for each app
  - create a normal terminal, as if ctrl alt t
  - generate free port if needed, modify caddyfile then
  - run command as long running daemon 
  - constantly collect logs, like stdout/stderr or exit
  - save log for each, on fs maybe. just separate and incremental. avoid yaml overhead.
- modify caddyfile, restart caddy

i may learn how to use caddy. (or caddyfile syntax is all i need)

and i would have a separate server. well doesnt matter. it's app specific.

it will route api to api, and anything else to the spa build.

---

file op can be sync. dx matters more than perf. <!-- and yeah, async should be preferrably handled automatically under the hood -->

about shell, it can be sync to run a command and get its result. it's on backend right? and on frontend, if it takes time and you wanna display some placeholder, you may "use async". network requests are inherently async. and you could not run shell commands on web.

for long running daemon, it doesnt matter sync/async. it's basically traditional event listeners.

05

i may list the methods and leverage llm.

---

rest params `...` are common. i may have a util to polymorph it, i.e. `fn(...args)` `fn(arr)` when each individual arg must not be iterable (or at least there's no ambiguity when only one arg is passed). <!-- btw, math lib is different as it accepts an optional `fn` alongside -->

would `list` already solve this? how does array.from work?

btw, the naming of `list` might conflict, but that's not the case (classic lisp1/lisp2 divide when fn and var are the same word in verb/noun). i would generally prefer more concise std lib fn.

it makes no sense to have map fn arg, if map itself could already be applied to any iterables in stl.

> JavaScript had historical baggage.
>
> Python was designed for readability from day one.

---

i will adopt pathname rather than fileutils, as recommended.

---

thanks to js, iterators and arrays are of polymorphism (constrast to ruby entries/each_entry)

06

maybe i would name it as subprocess, not shell. doesnt matter much. just feels it's an easier choice.

07

nodejs subprocess spawn has 20 overloads.

---

ah... yeah, you should trim the stdout. saves my day.

---

most time they leave a trailing newline, but rarely do they prefix, or leave trailing spaces.

yeah, it would "ignore spaces after lineend and newlines after eof", but that's not the case.

maybe a blank trim would be overkill. or does it matter.

guess i would not have an option for this. it's a pragmatic abstraction and neither do i wanna leave nonsensical (trailing newline is compromise to terminal printing for humans, not scripts) content either. if it leaks let it leak.

---

in practice you would almost never see string as iterable.

primitive could not be iterable.

08

yeah.

have an cli abstraction.

---

the more assumptions/currying/conventions you make, the simpler the code would be.

i can absolutely solve a specific problem if eventually i will have my consistent style.

---

but a childprocess could not really command its parent.

09

23 40 file: support with_dir option, default to true, like ruby.

11

03 00 log: separate pure logic, format log.

deprecate log_fs.

> Functions should be defined generally. Squaring is not in the Python Library precisely because it is a special case of the pow function, which raises numbers to arbitrary powers.

and it should be ideally pure.

16 00 std/is: fix if order.

in turn fix std/list.

12

yeah, you invent dsl for time formatting pattern, even though it's conceptually <!-- should be --> (proxy) dc and template literal.

because engineering is the art of making tradeoffs.

<!-- i would not adopt "YYYY" because it's prone and ugly, and idk how it even works (e.g. for complex strings or edge cases). and, it does _not_ just inherently gurantee you better internalization. -->

13

it's a bit awkward to make it chainable when you have no first class fp piping.

anyway, i can try.

---

```
  const timezone_sign = offset_min <= 0 ? '+' : '-'
```

brilliant isnt it.

yeah, it doesnt even hallucinate anything.

14

idk how i would do styling.

css, which we are familiar w, is flawed on dx. i may invent some dsl.

i might not need best possible intellisense or ide features/integration in general. like how often do i batch rename? and if i do not declare in order, autocomplete matters less even if things are coupled.

it has to be coupled. if you can switch behavior on sth fixed, there definitely _will_ be some adapter somewhere.

---

on server, i guess it's basically a wrapper. i can test it.

but how would i handle like timeout or retry?

15

the current way of managing deps is extremely ugly.

i should standardize before making progress.

> how to publish and update npm lib on github, and add and upgrade via bun

or maybe it's just a line of tsconfig, if im confortable w the monorepo.

---

yeah, it's hacky anyway, and i run into a hard wall: node modules resolve upward.

react could not work w conflicting versions in runtime. peer deps would not work this way.

it also reveals problems. it's coupled w "web/component/icon" and "toast" to avoid boilerplate (e.g. import, export, init) at extreme danger.

i may just go the standard way.

- it should be able to be published separately
- for local dev, i can really modify inside node modules, and build abstractions maybe on this workflow

---

finally, sanity.

- use a flat bundler (e.g. bun) <!-- or npm/yarn, but not pnpm -->
- declare deps and peerdeps normally
- copy to node modules of the consumer project, and _explicitly remove react and react-dom_ (it's only them that force singleton)
- decouple tsconfig links to the consumer project. import and init explicitly instead.
- you may automate it,
  - track lib on an external git folder, publish to github, add as deps
  - when install, peer deps will be respected normally, and i guess you would not see "react" (or at least on behavior it will resolve normally)
  - when you dev locally rapidly, to update lib, you may
    - update to git, push to github
    - _no need to sync via network request_
    - hardcode a list of consumers, drop react and react dom first (if existing) and copy everywhere (all projects use react, i have it on template)
    - you can test lib normally, as you can never run react in terminal, and i have no web test

---

i can absolutely go the standard way.

it might help to automate the local one, just in case.

it's simple anyway, a copy and a peer dep rm.

28

easier to just separate by get post.

it's much natural to send payload via post.

and browser default methods (e.g. open page) are hardcoded get.

---

tbh you should never get w payload. actually you should never get.

---

all abstraction leaks, and i can have specific methods, like for backend service integration, in the future.

30

```ts
type state<T> = {
  persist?: string
  version?: string
  should_migrate?: fn
  sync_url_options?: {
    should_sync_url?: boolean
    should_apply_all_given_params?: boolean
    should_cleanup_omitted_params_after_init?: boolean
    should_sync_after_init?: boolean
    keys_to_sync?: (keyof T)[] | Set<keyof T>
    param_mapping?: Record<string, keyof T>
    path_mapping?: keyof T
  },
  init?: (state: T) => void,
  change?: (state: T) => void
}
```

how complicated is that, despite seemingly self explantory names.

i dont really wanna use it.

```ts
   function does_type_mismatch(old_value: any, new_value: any) {
      return (
        typeof old_value == "boolean" &&
        typeof new_value != "boolean" &&
        typeof new_value != "function"
      );
    }

    const toggle = (v: boolean) => !v;
    const new_value =
      args.length == 0 || does_type_mismatch(data, args[0]) ? toggle : args[0];
```

how awkward. it might provide better dx on certain scenarios, but just how awkward.
it shouldnt be fixed here.

---

on style

```
.component_element
```

alternatively, you make ahve

```
.component.element
```

it's the same.

nov 2026

01

clearly i could go the idiomatic way, or one of the common abstractions, each w their distinct tradeoffs.

i dont like it. i dont like jsx.

but idk if it's really worth it... it helps to see it clearer.

perf is generally negligible. import boilerplate can be omitted by some clean hacks.

```
ef app
  r (
    <div className="..." foo={foo} bar={bar}>
      <Input/>
      {
        map(items, afn item (
          <div className="item">
            item
          </div>
        ))
      }
    </div>
  )
```

```
ef app
  r (
    <div {...props({class: 'app', foo, bar})}>
      <Input/>
      {
        map(items, afn item (
          <div className="item">
            item
          </div>
        ))
      }
    </div>
  )
```

```
ef app
  r h('.foo', {foo, bar}, 
    h(input, ...),
    # h('input'),
    h('.item')
  )
```

```
f app
  dc foo, item = structure app
  # dc input = structure app input

  r foo(
    {foo, bar},
    input(...),
    item(...)
  )

app = component app # or it will be eager evaluated, breaking rules of hooks

e {app}

f input
  dc input = structure input

  r input(
    {value, change, ...props}
  )

input = component input

e input
```

---

conclusion.

you dont like jsx. so you will need a constructer of some kind.

that's `h`.

you want them to be component scoped. and you dont wanna hack css (e.g. `.inside the right component {:not(inside another .component) ...}`, or via some js listener based css `mutation observer`). and you dont wanna style based css (e.g. `component_stylehash` or `px-2 styles themselves wo naming`). you want them to be named, to be clear, self explanatory, and extensible later (though that rarely yields real utility or roi for fast paced startups).

and you would take a simple approach. `app_foo` `app_bar`.

you had an idea.

```
foo bar = prefix app # or structure app

r h(foo, ..., ...) # or r foo(..., ...)
```

let's see how well it works. let's compare.

```
r h("app_foo", ..., ...)
```

you really avoids typing app via proxy hack. but now you type foo again. yeah you have autocomplete because foo is a variable now but just... and typically you would not come up w the whole picture initially, that is you might jump between structure and reference of such class to add an element.

well, dont over do that. dx maxxing.

and, yeah, it made `foo(..., ...)` possible.

but what about components? you could not reliably call them directly, which would break the rule of hooks. so you

```
fn app

app = component app

export {app}

# ...

app(..., ...)
```

instead of 

```
ef app

h(app, ..., ...)
```

clearly the latter is much cleaner (if you really type "app = component app yourself"), and if you really setup transpiler for such decorator, you can abstract on top of the latter aw!

```
ef app

app(..., ...) # component like fn call auto wrapped
```

so the conclusion is, no `structure`, no `component`. just `h`.

despite `component({props}, children...)` like syntax is largely why i favored which over jsx initially.

and about h itself.

`h("foo")` is never considerred text of `"foo"`. if you wanna have text, do not wrap it in `h` at all.

what if you wanna have (possibly) a bunch of text as a fragment? `h(items)`. arrays are always arrays.

```
h() -> raw fragment
h('') -> raw fragment
h('foo') -> div.foo # yeah! i assume you will never have raw tag.
h('.foo') -> div.foo
h('button.foo') -> button.foo
h(comp, props, ...children)

if the first arg isnt string/fn...
h(obj, ...) -> div, obj, ... # ~~or fragment?~~
h(...), div, {}, ... # or fragment? yeah. fragment.
```

but what about `h('lorem', 'ipsum')`? it would not be treated as two text.

well, you should do like `h('article', 'lorem', 'ipsum')` or `h('', ...)`. and more commonly you will have `h(items)`.

more generally,

```
h(str/fn, obj, ...) -> tag, props, children...
h(str/fn, ...) -> tag, {}, children...
h(obj, ...) -> div, props, children...
h(...) -> fragment, children...

on tag, 
'' -> fragment
foo -> div.foo # wo .
.foo -> div.foo
foo. -> foo
foo.bar -> foo.bar
```

it's considered an obj if it's not an array (excluded by modern is by default), and not a react component/element (which typically have `$$typeof`)

also, i would avoid the weird prefixed `app_app` wo any special handling. it's first `app`, and then `app_child` `app_kid` `app_boy` `app_girl`.

---

deprecate `component`.

---

most logics of `props` should actually be moved to `hyperscript`.

they are specific handling of react quirks (e.g. `classname` not strictly no `class` allowed), and should only be applied when tag is string.

could have.

(wait, i could entirely keep props, wo export p, and just use props on hyperscript!)

---

you might not just have a command like `scaffold foo`

chances are foo already exists.

it's good to remove nodes and bun lock though.

09

random_id

just doesnt have to introduce "secure context" constraints for pure fn

could be over engineering

---

generation

backend could be the local/remote centralized chat server.

endpoint means model api endpoint.

---

cli: parse options

dk whether boolean default makes sense.

feels it has to be false, unless there's some magic like "--not-foo".

11

clearly debounce doesnt have to be "use query" specific,

if you ignore undefined when set state

<!-- well, that might still trigger a rerender but who cares. (and you may check eq if matters, or wrap in immer.) -->

- query foo = debounce post 'seaech' foo
- when q changes, query q
  - maintain is current and timer
  - sto
    - if sync, go ahead
      - if not cleared, subsequent call will fire later
    - if return promise
      - r then if current r result otherwise return nil
  - if called again
    - clear timer
    - not current
    - if sto fires and resolves to promise...
      - it will be handled

i could check deep eq. alternatively, if i dont wanna make nil valid state, i could see undefined as mutation and nil as no change.

wait, i have to explicitly do this. in the state lib i update state directly. but react performs hardcoded shallow eq check under the hood anyway.

dont feel undefined/nil separation would work. times are you omit entirely (undefined) after mutation, or early return directly (same as undefined). very prone if you enforce a rule of nil (or special symbol) for early return.

wait. i have hardcoded json stringify in all use effect. perf is trivial.

so the only problem is to force set state to work. no immer or lodash needed. shadow clone will make it.

ah. i dont even have to force react set state to work. it's already (whether or not) mutated under the hood. and i just need to force an update (it's hard to change the js reference only for any non literal objects in general).

and it will work the same as state lib at least.

---

i may implement query lib when i need.

for now i may simply post directly.

12

quirky.

```js
function foo(bar = '123') {
  return bar
}

log(foo())
log(foo('456'))
log(foo(undefined))
log(foo(nil))
```

wwjd?

---

crucially, a manual update isnt really the solution.

it doesnt update! debugging nightmare (you would not expect lib to be flawed).

that is, you may use use effect. but the component itself is a hardcoded react effect.

---

ah! you should not early return when undefined...

late night. confusion. heuristics.

---

consider a simpler approach.

when you update lib, you traverse to the nearest parent w node modules, swap lib...

well you should manage deps and peer deps.

and force refresh vite cache.

you push w best effort to github

<!-- fine, you can absolutely do that as long as you do not update the deps of lib. you can keep all node modules untouched, remove all other files, and cp all other files. -->

---

wow, void isnt undefined in ts.

reasonable though.


