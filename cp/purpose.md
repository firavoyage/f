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

<!-- it matters when you have predefined, like curried fn. and it's immutable if it matters. though you can abstract control flow anyway. -->

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

24

"value" "items" feel like swe.

i would name as `scalar` `elements` here.

---

for some reason vscode gives lsp absolute privilege and internal api to
force rename preview anyway, though i always accept default of what's in scope

use ctrl h instead. force it. fuck it.

---

```cpp
#define repeat(n) for (int i = 0; i < n; i += 1)
// closed interval
#define each(i, a, b) for (int i = a; i <= b; i += 1)
#define reveach(i, a, b) for (int i = a; i >= b; i -= 1)
// #define each_end(i, n) for (int i = 0; i < n; i += 1)
// #define each_start_end(i, a, b) for (int i = a; i < b; i += 1)
// // closed interval
// #define closed(i, a, b) for (int i = a; i <= b; i += 1)
// #define rev(i, a, b) for (int i = a; i >= b; i -= 1)
// #define each(...) macro(__VA_ARGS__, each_start_end, each_end)(__VA_ARGS__)
```

rarely do you want to iter [1, n-1]

if you wanna loop through 0 to n-1... it's likely some 0 indexed ds.

rather for element : vec directly, or for int i; element: vec.

sometimes you wanna make it 1 indexed.

then you would each 1, n anyway.

---

```cpp
void __print(auto&& scalar) {
  write(scalar, ' ');
}

template <typename T>
void __print(vector<T>& elements) {
  for (auto& element : elements) {
    write(element, ' ');
  }
}
```

really i should not polymorph this way.

too often i declare like

```cpp
  int n;
  read(n);

  vector<int> a(n + 5);
  each(i, 1, n) {
    read(a[i]);
  }
  // read(a);

  prn(a);
```

and the more advanced you get into the more often you will have to manipulate index manually, rather than taking them as general iterables.

and you could not just blindly print it.

```
2
1 2 
0 1 2 0 0 0 0 
```

it's just too dangerous to optimize for non general cases, implicitly.

remember when you used "read" which returns int when the line has one number and int[] when mulitple? and you run into test cases of single element arr.

---

fine to have this for now.

```cpp
template <typename T>
void read(vector<T>& vec) {
  for (auto& element : vec) {
    read(element);
  }
}
```

`a(n+5)` isnt part of the template.

chances are you may just `a(n)` for simple iterables.

---

it's way easier and more intuitive to say

```
each(0, n-1)
```

than

```
open_each(0, n)
```

it feels.

btw, as ive separated each and rev_each <!-- rather than guessing by is start < end -->, it would not cause problems.

step, rarely relevant, is not supported now. prefer while (yeah, not for of i think) when you need.

and you always pass both start and end. i could easily polymorph macros w some (v arg num) hacks, but you should prefer repeat (yeah! and enum vec) instead.

---

```cpp
#define enum std::views::enumerate  // dict items, object entries
#define zip std::views::zip         // [x, y]: zip(vec a, vec b), until shortest len
```

well, i guess you should explicitly each i, and

```
a = vec a i
b = vec b i
```

instead

enum is also prone if the vec isnt 0 to n-1. (too common you give it 5 additional free space)

```
each(index, 1, n){
  index = index
  value = vec a index
}
```

---

```
for (auto [idx, pair] : std::views::enumerate(std::views::zip(X, Y))) {
    auto [x, y] = pair;
    std::cout << idx << ": " << x << " " << y << "\n";
}
```

wow.

---

2024, experimental?!

it would have been already outdated if it were in web dev, lol.

---

doesnt feel i would really have `filter` `some` `every`, `cache`, `curry`, `partial`, `void`, `identity`, `compose`, `pipe`

i mean, also it can be inefficient.

and fn are not really first class citizens in cpp.

just go the imperative way.

---

for diffing...

i guess it's just

```
each i a b # or enum cases
    if current i != expected i
        prn i current expected
```

---

quite weird to group items. it's not general.

also, i dont feel ive ever necessarily used newton root finding.

---

interesting,

```
range::min, range::max
```

instead of polymorphing std::min for vectors.

and seems i could not override easily w using ns std.

---

it already caused too many troubles naming fn as nouns.

use summation and muliplication instead.

feel free you define sum and prod in your own logics.

---

interesting, your local global definition has no higher priority.

---

wow impressive

```
auto add = [](auto a, auto b) { return a + b; };

// auto add(auto a, auto b) {
//   return a + b;
// }
```

put it straightly, the first works and the second doesnt.

> cpp is amazing!

---

no longer do i need

```
#define macro(_1, _2, _3, _4, name, ...) name
```

---

- floor ceil should return int because mathematically they are
  - rarely do you need to... well it makes totally no sense to round already imprecise numbers, yk double holds up to 10^15, while long long 10^18, clearly it can fit when float point are truncated
- min max should polymorph and accept both vector and multiple scalars
  - return double. more often do you need to keep precise ints than comparing long longs.
  - it's nice to just use common type

---

```cpp
const bool is_single_task = false;
```

now i could not as easily comment this line.

and i would not use `#tricks`, as it's even more ambiguous (what does commenting a false flag mean?!).

i guess for the vast majority there would be multiple test cases.

and flags should be ideally false by default.

26

```cpp
auto pow(int base, int exp, int mod = 1000000007) {
  int res = 1;
  base %= mod;

  while (exp > 0) {
    if (exp & 1) {  // exp % 2 == 1
      res = res * base % mod;
    }
    base = base * base % mod;
    exp >>= 1;  // exp /= 2;
  }
  return res;
}
```

it's really footgun. it's resolved differently if you do not give the mod param.

---

i may abstract vector l to r sorting.

```cpp
  sort(chars.begin() + 1, chars.begin() + length + 1);
```

yk vectors can be 1 indexed, and padded at the end.

i may not have to, esp considering the benefits of half open ranges.


