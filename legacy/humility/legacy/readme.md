legacy archives

<!-- obviously it would and could be replaced by git branches. but with an organized legacy folder it comes w significant benefits, for example, you can just rg or ctrl p on code out of the box. -->

<!-- git is a good low level tool, when paired with lfs, partial cloning. but it has to have abstractions on cli ux. action based, not function based. it has to have more features, like "refray" (store a metadata to publish and sync across git providers, avoid github vendor lock in, esp when it suffers downtimes recently) -->

git is complex and messy, with forced centralized linear commit history on each branch, hidden inside a dot git folder only parsable through unintuitive git commands.

you could have `changes.md` and `legacy/` for history instead, to document changes flexibly, to name and organize legacy archives, which would be easy to find <!-- fdfind --> or search <!-- rg -->.

and they could, obviously, be collocated if you like.
