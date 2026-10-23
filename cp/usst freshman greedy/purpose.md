purpose

oct 2026

23

```
map arr i -> i * 2
```

```
for i arr
  i * 2
```

how much does it differ

also, by being imperative, you know how it works.

you focus on how it works.

it's important in cp.

---

on reading.

```cpp
    int t = 1;
    cin >> t; // comment this line if needed
    while (t--) {
        solve();
    }
```

so interesting. cin not just references it. it completely certainly sets its value.

and it would almost certainly trigger linting (unused value 1) in sane langs.

```
a = read()
```

ideally read just takes a line and returns whatever on this line.

whether a number, int/float, string, or a list of numbers. vectors arrays tuples are of no difference.

and it has to be typed. and it almost centainly must be typed at compile time if you wanna do it cleanly. you could not even assert implicitly.

you may create a few typed reading methods.

<!-- let's say #define let auto. auto is meaningless. it means "auto type". i mean it's nonsensical. yeah, i declare the var, that's what matters. -->

```
let a = read
let b = read line
let c = read ints
```

you may polymorph the assignment op (?!) of read and type on the var instead (hacky!).

```
int a = read
string b = read
vector<int> c = read
```

and you run into limitation.

```
n, k = read # tuple
a = read # vector
```

you could not simple dc a vector.

```
int n, k
read n, k

vector<int> a

read a
# or read ints a
```

clearly it's the cleanest way.

you really dont like cin cout. functions are functions. why messing up w streams? if it behaves like fn then it's fn.

manual int parsing, io desync, tie... there are just irrelevant global options.

or maybe you like this

```
int n, k
read n k
string s = read line
let a = read ints
```

---

it's over engineering if it works regardless.

and it wont save you if you go 2^n. really, like if you already exceed 1s by n^2.

---

you could not really assign nullptr to int i guess. esp when raw pointers are discouraged in cp.

but you may use optional and nullopt. 

that being said, still you have to unpack via .value or cmp.

better to use -1.

---

quite weird on syntax highlighting, lsp perhaps.

(also, the order is inconsistent of typedef and define)

```
# typedef auto let # you cant do that
#define let auto
typedef decimal double;

int a = 1 # int is pink
decimal b = 2 # lightblue
let ... # let becomes green
```

