#include <bits/stdc++.h>

#define all(v) v.begin(), v.end()
#define reverse(v) v.rbegin(), v.rend()
#define len(x) (int)(x).size()
#define append push_back

#define repeat(n) for (int __i = 0; __i < n; __i += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)
#define rev_each reveach

#define enum views::enumerate  // auto [index, value]: enum(vec)

#define int long long
#define integer (long long)
#define float double

using namespace std;
// using namespace ranges; // ranges::sort(vec)

// utils

void read(auto&&... variables) {
  (cin >> ... >> variables);
}

template <typename T>
void read(vector<T>& vec) {
  for (auto& element : vec) {
    read(element);
  }
}
template <typename T>
void read_vec(vector<T>& vec, int l, int r) {
  each(i, l, r) {
    read(vec[i]);
  }
}

void readline(auto&&... s) {
  cin >> ws;  // ignore any trailing whitespace
  ((getline(cin, s)), ...);
}

void write(auto&&... items) {
  (cout << ... << items);
}

void __print(auto&& scalar) {
  write(scalar, ' ');
}
template <typename T>
void __print(vector<T>& elements) {
  for (auto& element : elements) {
    write(element, ' ');
  }
}

void pr(auto&&... items) {
  (__print(items), ...);
}

void prn() {
  write('\n');
}

void prn(auto&&... items) {
  pr(items...);

  write('\n');
}

template <typename T>
void prn_vec(vector<T>& elements, int l, int r) {
  each(i, l, r) {
    pr(elements[i]);
  }

  write('\n');
}

inline auto print(auto&&... items) {
  return prn(items...);
}

// fp

template <typename T, typename Func>
auto map_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>()));
  vector<ReturnType> res;
  res.reserve(vec.size());
  for (const auto& x : vec) {
    res.push_back(f(x));
  }
  return res;
}

template <typename T, typename Func>
auto reduce_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>(), declval<T>()));

  ReturnType acc = vec[0];
  for (size_t i = 1; i < vec.size(); ++i) {
    acc = f(acc, vec[i]);
  }
  return acc;
}

template <typename T, typename Func, typename InitType>
auto reduce_vec(const vector<T>& vec, Func f, InitType initial_value) {
  using ReturnType = decltype(f(declval<InitType>(), declval<T>()));
  ReturnType acc = initial_value;
  for (const auto& x : vec) {
    acc = f(acc, x);
  }
  return acc;  // Returns pure type directly since an
               // initial seed guarantees a value
}

template <typename T, typename Func>
auto reduce_right_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>(), declval<T>()));
  if (vec.empty()) return optional<ReturnType>(nullopt);

  ReturnType acc = vec.back();
  for (size_t i = vec.size() - 1; i > 0; --i) {
    acc = f(vec[i - 1],
            acc);  // Element first, Accumulator second
  }
  return optional<ReturnType>(acc);
}

template <typename T, typename Func, typename InitType>
auto reduce_right_vec(const vector<T>& vec, Func f, InitType initial_value) {
  using ReturnType = decltype(f(declval<T>(), declval<InitType>()));
  ReturnType acc = initial_value;
  for (size_t i = vec.size(); i > 0; --i) {
    acc = f(vec[i - 1],
            acc);  // Element first, Accumulator second
  }
  return acc;  // Returns pure type directly
}

// string

// std::format("{:.4f}", pi)
auto format_float(auto n, int precision) {
  string result = "";
  if (n < 0) {
    result += '-';
    n = -n;
  }

  // Pre-round the number to correctly handle carries across decimals and
  // integers
  if (precision > 0) {
    double rounding_factor = 0.5;
    for (int i = 0; i < precision; ++i) {
      rounding_factor /= 10.0;
    }
    n += rounding_factor;
  }

  long long int_part = (long long)n;
  result += to_string(int_part);

  if (precision > 0) {
    result += '.';
    double fractional = n - int_part;

    for (int i = 0; i < precision; ++i) {
      fractional *= 10;
      int digit = (int)fractional;
      result += to_string(digit);
      fractional -= digit;  // subtract the integer part of the digit
    }
  }

  return result;
}

// math

auto add = [](auto a, auto b) { return a + b; };

auto sub = [](auto a, auto b) { return a - b; };

auto mul = [](auto a, auto b) { return a * b; };

auto truediv = [](auto a, auto b) { return double(a) / b; };

auto floordiv = [](auto a, auto b) { return floor(double(a) / b); };

auto divmod = [](auto numerator, auto denominator) {
  auto quotient = numerator / denominator, remainder = numerator % denominator;
  return std::pair{quotient, remainder};
};

// auto pow(auto base, auto exp, auto mod = 1000000007) {
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

auto and_ = [](auto a, auto b) { return a & b; };
auto or_ = [](auto a, auto b) { return a | b; };
auto not_ = [](auto a) { return !a; };
auto xor_ = [](auto a, auto b) { return a ^ b; };

auto summation = [](auto numbers) { return reduce_vec(numbers, add); };

auto multiplication = [](auto numbers) { return reduce_vec(numbers, mul); };

auto ln = [](auto a) { return log(a); };

auto logab = [](auto a, auto b) { return ln(a) / ln(b); };

auto combinations(int n, int r) {
  if (r < 0 || r > n) return 0;
  if (r == 0 || r == n) return 1;

  // Optimize calculation since C(n, r) == C(n, n-r)
  if (r > n - r) {
    r = n - r;
  }

  auto result = 1;
  for (int i = 1; i <= r; ++i) {
    result *= (n - r + i);
    result /= i;
  }
  return result;
}

auto permutations(int n, int r) {
  if (r < 0 || r > n) return 0;

  auto result = 1;
  for (int i = 0; i < r; ++i) {
    result *= (n - i);
  }
  return result;
}

template <typename T>
auto _min(vector<T>& vec) {
  double minimum = vec[0];

  for (auto& element : vec) {
    if (element < minimum) {
      minimum = element;
    }
  }

  return minimum;
}
auto _min(auto first, auto... rest) {
  using CommonType = std::common_type_t<decltype(first), decltype(rest)...>;
  CommonType current_min = first;
  // auto current_min = first;

  ((current_min = (rest < current_min) ? rest : current_min), ...);

  return current_min;
}

template <typename T>
auto _max(vector<T>& vec) {
  double maximum = vec[0];

  for (auto& element : vec) {
    if (element > maximum) {
      maximum = element;
    }
  }

  return maximum;
}
auto _max(auto first, auto... rest) {
  using CommonType = std::common_type_t<decltype(first), decltype(rest)...>;
  CommonType current_max = first;
  // auto current_max = first;

  ((current_max = (rest > current_max) ? rest : current_max), ...);

  return current_max;
}

auto _floor = [](auto x) { return static_cast<int>(floor(x)); };
auto _ceil = [](auto x) { return static_cast<int>(ceil(x)); };

// entry

const bool is_single_task = true;

const int nil = -1;

void solve();

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;

  if (!is_single_task) {
    cin >> t;
  }
  repeat(t) {
    solve();
  }
  return 0;
}

// solution

/*

p in [1, 10^4]

p = 1:

must be 100 -> 100.0, 100.0 or impossible

p = 2:

must add to 100.

- e.g. 49, 50: a + b < 100 where a < 49.5 and b < 50.5
(original data is perfectly precise)

for 50 50, it can be [49.51, 50.49] (output closed
intervals)



for some reasons all example cases can reach .49...



it's impossible iff

- sum + .49n < 100 or sum - .5n > 100

you may use multiplication trick to avoid rounding issues.



your range is

your own range cap [100-(sum + .49 * (n-1)),
100-(sum-.5*(n-1))]

where your own range is [-.5, +.49]



really, i wonder if format float rounding would cause problem here...
wait, wrong test 4 (instead of 9) this time?!



the custom logic fails on case 9 aw.



leverage math.

- clearly if everyone + .49 >= 100,
- ...



well maybe it's really just a = 1 special case
no there is no special case. when a = 1, it must be 100 100.



idk if fmt float is flawed. let's test.


yes it is

9.17
9.18
9.19
9.110
9.21
9.22
9.23
9.24
9.25
9.26
9.27
9.28
9.29
9.30
9.31
9.32
9.33
9.34
9.35
9.36
9.37
9.38
9.39
9.40
9.41
9.42
9.43
9.44
9.45
9.46
9.47
9.48
9.49
9.50
9.51
9.52
9.53
9.54
9.55
9.56
9.57
9.58
9.59
9.510
9.61
9.62
9.63
9.64
9.65
9.66
9.67
9.68
9.69
9.610
9.71
9.72
9.73



really it still errs on test 9 w fmt float fixed.



you minimum is 100 - when everyone hits their maximum.
but can they hit .49 maximum? if they could not, it simply means
they are too large and will far exceed 100 themselves (e.g. 33 33 34)
and you will in turn be too low, and be replaced by lower bound -.50
since it's guranteed to be solvable now.

vice versa for "when everyone hits their minimum" i guess...



what if minimum is quite large and exceeds 49?
or maximum < -50?

idk, it must be solvable, but we may test.



ah!!! as i expected

    minimum = _max(minimum, 0);

    maximum = _min(maximum, 100 * 100);

adding these two lines helps me pass up to case 15.
(how i get inspired: reading usaco guide, assertion)



ok. fine.
in terms of impossibility.
"all min" "all max" doesnt mean they can fall below 0 or above 100...

(i guess zero count is all you need. it would not cause problems on 100.)


wa on test11 now...



op priority i guess.

wa test15.

so it isnt really zero counting...



do you see?

across all solvable cases,

min * 100 % 100 is consistent, while max is .49
- clearly .49 is a myth
  - 50 50?
  - 1 1 99?


*/

void solve() {
  int n;
  read(n);

  vector<string> names(n + 5);
  vector<int> a(n + 5);

  each(i, 1, n) {
    read(names[i], a[i]);

    a[i] *= 100;  // represent ppl chosen
  }

  int theoretical_minimum(int i) {
    if (a[i] == 0) {
      return 0;
    } else {
      return a[i] - 50;
    }
  }

  

  if (sum * 100 + 49 * n < 100 * 100 ||
      sum - 50 * (n - zero_count) > 100 * 100) {
    prn("IMPOSSIBLE");
    return;
  }

  // prn(sum);

  each(i, 1, n) {
    int minimum = 100 * 100 - (sum * 100 + 49 * (n - 1));
    minimum = _min(_max(minimum, -50), 49);
    // minimum = _max(minimum, -50);

    int rest_non_zero_count = (n - 1) - (zero_count - (a[i] == 0));
    // int rest_non_zero_count = (n-1) - (zero_count - a[i] == 0);
    int maximum = 100 * 100 - (sum * 100 - 50 * rest_non_zero_count);
    maximum = _min(_max(maximum, -50), 49);

    // prn("log", i, a[i], minimum, maximum);

    minimum = a[i] * 100 + minimum;
    minimum = _min(_max(minimum, 0), 100 * 100);

    maximum = a[i] * 100 + maximum;
    maximum = _min(_max(maximum, 0), 100 * 100);

    // pr(names[i]);
    // write(minimum / 100, '.', minimum % 100 < 10 ? "0" : "", minimum % 100,
    //       ' ');
    // write(maximum / 100, '.', maximum % 100 < 10 ? "0" : "", maximum % 100,
    //       ' ');
    // prn();

    // prn(names[i], truediv(minimum, 100),
    //     truediv(maximum, 100));
    prn(names[i], format_float(truediv(minimum, 100), 2),
        format_float(truediv(maximum, 100), 2));
  }
  // int n, zero_count = 0;
  // read(n);

  // vector<string> names(n + 5);
  // vector<int> a(n + 5);

  // each(i, 1, n) {
  //   read(names[i], a[i]);
  //   if (a[i] == 0) {
  //     zero_count += 1;
  //   }
  // }

  // int sum = summation(a);

  // if (sum * 100 + 49 * n < 100 * 100 ||
  //     sum - 50 * (n - zero_count) > 100 * 100) {
  //   prn("IMPOSSIBLE");
  //   return;
  // }

  // // prn(sum);

  // each(i, 1, n) {
  //   int minimum = 100 * 100 - (sum * 100 + 49 * (n - 1));
  //   minimum = _min(_max(minimum, -50), 49);
  //   // minimum = _max(minimum, -50);

  //   int rest_non_zero_count = (n-1) - (zero_count - (a[i] == 0));
  //   // int rest_non_zero_count = (n-1) - (zero_count - a[i] == 0);
  //   int maximum = 100 * 100 - (sum * 100 - 50 * rest_non_zero_count);
  //   maximum = _min(_max(maximum, -50), 49);

  //   // prn("log", i, a[i], minimum, maximum);

  //   minimum = a[i] * 100 + minimum;
  //   minimum = _min(_max(minimum, 0), 100 * 100);

  //   maximum = a[i] * 100 + maximum;
  //   maximum = _min(_max(maximum, 0), 100 * 100);

  //   // pr(names[i]);
  //   // write(minimum / 100, '.', minimum % 100 < 10 ? "0" : "", minimum %
  //   100,
  //   //       ' ');
  //   // write(maximum / 100, '.', maximum % 100 < 10 ? "0" : "", maximum %
  //   100,
  //   //       ' ');
  //   // prn();

  //   // prn(names[i], truediv(minimum, 100),
  //   //     truediv(maximum, 100));
  //   prn(names[i], format_float(truediv(minimum, 100), 2),
  //       format_float(truediv(maximum, 100), 2));
  // }
}
