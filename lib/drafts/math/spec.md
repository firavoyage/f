spec

max <!-- min --> array <!-- iterable --> fn

max array = max array (a, b) -> a > b

max ...n = max n

---

max array fn

max array

max ...array

for single arg, it entirely depends on whether it's iterable ~~primitive~~ ~~numeric~~ (e.g. max(1), max([1, 2, 3])).

fn should return a < b for min and a > b for max.

you should not pass an array of iterables.

~~yeah, it's in math lib. and min/max is intended for math. idk how > op behaves for strings for example btw. at least it's implicit.~~ why. rather just check if it's iterable because that's what its logic depends and is really about.


