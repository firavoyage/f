purpose

sep 2026

28

i can do it progressively and peacefully.

elegance.

it will be easy if i try.

on deps, i need file lib and shell lib (e.g. rg).

it's not currently so sophisticated. i may refer to py stl.

for ux, i would research nautilus, and dolphin maybe.

it's better to know things thoroughly, and write them down, before implementation. it's fine if you just come up w sth on the fly.

<!-- it may solve some quirks of nautilus, e.g. tooltip and right click on x11 gnome ubuntu. it can also introduce its own dilemmas as web app. but that's not the point. -->

one thing i would do is to centralize the commands if possible. i may hook shortcuts in closures, but if it can be modified, can be called by command palette, it's best to organize them cleanly.

originally it's about an idea on styling. some new approaches. implementation does not really matter anyway. i have yet to validate them. i can write some prototype.

and i want to launch them as normal apps. that is, i will create a systemd service (if compatible) to call a script, which will startup, monitor, and record a set of apps. also i may open the app on a generated free port via env vars, and modify caddyfile a bit so i can access easier. <!-- f/autostart/source, f/localhost -->

design system is never complete.

as of the prototype of the styling lib, i can just design some util fn to be exported. they can be pure. ik it will matter. no need to rush.

if i like, i can just hand code the glossary in yaml. there are just a few.

on component, i will prefix all classes w the component name, via a proxy dc.

on glossary, i will define what each util mean, in css prop, and in value namespace.

<!-- it can be flexible. you have all the freedom. you can apply dynamic "classes" based on states, for the same component in semantic naming. you have mixins like size (w and h simultaneously, wo inconsistent aspect ratio hacks) and text (font size, line height). -->

on design, i can have some dedicated values for each namespace, like color, font, and text.

when applied, i can make it not only dom scoped, but also component scoped. <!-- where css native nesting could never reach -->

also, it's a structure, not a string, which gives way more expressiveness than tailwind. and i will make them class selector by default, wo dot prefix. i almost never use tag selector in modern css <!-- styling -->, as they are deeply coupled w behavior <!-- functionality (and it's not just out of box behavior, i mean) -->.

<!-- css would not be completely deprecated. i will still use it for global resets/defaults, and dev tweaks maybe. -->

i may not have any autocomplete now. but i guess that's much of a problem of css var its own. snippet + descriptive words <!-- e.g. preps --> should be preferred over aliases <!-- abbr --> only if they really feel natural, not boilerplate, to read.

29

i would like a consistent design system right? <!-- like, i may have a custom scrollarea first, for all my projects. i may style as i like. there are certain structures can be fixed. -->

~~i would like a sound type system right?~~ i can absolutely define them clearly and explicitly. how they compromise by historical flaws, how they implement, how they infer, smart or stupid, that's not a concern. <!-- i can, if i want. -->

i would like somewhere organized for my life, besides purpose for individual projects. tools/todo is overloaded. drafts/thinking is moved to where todos are quite obsolete. time to move on.

i may have a better js stl. min, max could accept arrays or positioned params. operators can be both prefixed or infixed, like python op module. NaN will not exist, nil will be used instead. i may build it progressively when needed. i could also complete it at once <!-- to save future debugging time -->.

---

on scrollarea

really, is it way too specific? "toggle_is_on_top".

well anyway it's not a big deal. i was just too lazy to debounce.


