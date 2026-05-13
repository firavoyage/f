changes

apr 2026

05

rename `roadmap` to `todo`

09

delete `.vscode` folder, which hides some folders (like node modules) in the explorer and search, making it simpler most time, but significantly harder when i need them, esp when i also hide the `.vscode` folder itself. also, i have `f.code-workspace` already. it's not oxtho.

archive almost all prev code.

the prev work are mainly:

- a working browser automation hack to exploit free resources on llm web apps
- a tool calling poc
- a frontend template
- a backend server template
- a complex yet useless

some might be useful in the future. but i dont want to work on it further.

16

simplify gitignore. rm useless rules (e.g. those for other lang).

create lib and link with node modules.

17

write some codebase templates and infra, like the lib. see the code for details.

24

write std.

create the infra like rust prelude so i dont have to import std methods everywhere using nodejs import flag under the hood.

may 2026

02

edit style guide

old

- verb noun for actions, predicate for bools

verbose

- verb noun for actions (e.g. fetch, convert), predicate for bools (e.g. is_prime, has_children), noun for wrappers and components (e.g. time, url, button)

concise

- verb noun for actions, predicate for bools, noun for factory functions

<!-- i think it will default to nouns for react components, though ive no idea if i will use react. it's better than anything else. but i think it could be simpler. -->

04

simplify ts infra (dry)

global import

use(lib) iff obj assign(lib, global this)

05

revise message

prev

- object params

new

- object params for more than one param

<!-- i absolutely need this -->

prev

- verb noun for actions, predicate for bools, noun for factory functions

new

- verb noun for actions (`get_data`, not `data_getter`), predicate for bools (`is_prime`, not `check_primality`), noun for factory functions (`time`, not `create_time`)

<!-- might be clearer? -->

10

write some ts snippets.

revise message.

prev

- async if needed

new

- always async, only sync for pure and quick methods

prev

- always function statement, never arrow function (unless as props)

new

- always function statement, only arrow function for props

12

revise message.

prev

- object params for more than one param

new

- object params for more than one uninterchangeable params

14

revise message.

prev

- object params for more than one uninterchangeable params

<!-- concise but incomprehensible -->

new

<!-- - always object params, only positional params if there is always only one param (`factorial(n)`, `fetch({ url })` as it can have options or flags in the future), or params are interchangeable (`add(a,b)`) -->

<!-- - always object params, only positional params if there is always only one param and no possible flags (`factorial(n)`) or params are interchangeable (`add(a,b)`) -->

- object params by default, positional params if there is only one param (`factorial(n)`) or params are interchangeable (`add(a,b)`), mixed if there is only one param and optional flags (`fetch(url, options)`)

prev

- dont reinvent wheels, prefer modern proven tech

new

- prefer modern proven libraries, dont reinvent wheels
- avoid outdated or deprecated methods

<!-- also move to notes -->

<!-- webpack is proven but not modern. add one word to be clear as it's common in llm training data. -->

<!-- i suppose it will naturally write small code (e.g. less than twenty lines) by default -->

<!-- i suppose it will still hallucinate and use non existing methods in the latest version. but since it can search and have context, just be clear. -->

<!-- though, many tools are stable. no need to say "learn and search the latest behavior" by default. -->

prev

- add simple logging

new

- no logging by default

