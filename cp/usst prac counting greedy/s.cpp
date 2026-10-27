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

const int modulo = 1000000007;

// fix

const int nil = -1;

using namespace std;
// using namespace ranges; // ranges::sort(vec)

namespace banned {
int pow = nil;    // use pow_ instead
int floor = nil;  // use pow_ instead
int ceil = nil;   // use pow_ instead
}  // namespace banned
using namespace banned;

void solve();

auto force_tle() {
  while (true) {
  }
}

auto force_re() {
  assert(false);
  // unreachable();
}

auto force_mle() {
  vector<vector<int>> leak;
  while (true) {
    leak.push_back(vector<int>(1000000, 42));
  }
}

auto force_wa() {
  cout << "wrong answer";
  exit(0);
  // quick_exit(0);
}

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
  prn(items...);
}

// std

inline auto parse_int(auto&&... items) {
  return stoi(items...);
}

inline auto parse_float(auto&&... items) {
  return stod(items...);
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
  return acc;  // Returns pure type directly since an initial seed guarantees a
               // value
}

template <typename T, typename Func>
auto reduce_right_vec(const vector<T>& vec, Func f) {
  using ReturnType = decltype(f(declval<T>(), declval<T>()));
  if (vec.empty()) return optional<ReturnType>(nullopt);

  ReturnType acc = vec.back();
  for (size_t i = vec.size() - 1; i > 0; --i) {
    acc = f(vec[i - 1], acc);  // Element first, Accumulator second
  }
  return optional<ReturnType>(acc);
}

template <typename T, typename Func, typename InitType>
auto reduce_right_vec(const vector<T>& vec, Func f, InitType initial_value) {
  using ReturnType = decltype(f(declval<T>(), declval<InitType>()));
  ReturnType acc = initial_value;
  for (size_t i = vec.size(); i > 0; --i) {
    acc = f(vec[i - 1], acc);  // Element first, Accumulator second
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

auto floordiv = [](auto a, auto b) { return std::floor(double(a) / b); };

auto divmod = [](auto numerator, auto denominator) {
  auto quotient = numerator / denominator, remainder = numerator % denominator;
  return std::pair{quotient, remainder};
};

// auto pow(auto base, auto exp, auto mod = modulo) {
auto pow_(int base, int exp, int mod = modulo) {
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

int combinations(int n, int r) {
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
auto min_(vector<T>& vec) {
  double minimum = vec[0];

  for (auto& element : vec) {
    if (element < minimum) {
      minimum = element;
    }
  }

  return minimum;
}
auto min_(auto first, auto... rest) {
  using CommonType = std::common_type_t<decltype(first), decltype(rest)...>;
  CommonType current_min = first;
  // auto current_min = first;

  ((current_min = (rest < current_min) ? rest : current_min), ...);

  return current_min;
}

template <typename T>
auto max_(vector<T>& vec) {
  double maximum = vec[0];

  for (auto& element : vec) {
    if (element > maximum) {
      maximum = element;
    }
  }

  return maximum;
}
auto max_(auto first, auto... rest) {
  using CommonType = std::common_type_t<decltype(first), decltype(rest)...>;
  CommonType current_max = first;
  // auto current_max = first;

  ((current_max = (rest > current_max) ? rest : current_max), ...);

  return current_max;
}

auto floor_ = [](auto x) { return static_cast<int>(std::floor(x)); };
auto ceil_ = [](auto x) { return static_cast<int>(std::ceil(x)); };

// entry

const bool is_single_task = false;

const bool should_debug = false;

inline auto info(auto&&... items) {
  if (should_debug) {
    prn("info", items...);
  }
}

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

what does

|a i - a j| = |b i - b j| mean?

a i - a j = b i - b j   or   a i - a j = b j - b i

that is,

a i - b i = a j - b j   or   a i + b i = a j + b j

btw, can both hold true? iff a i = a j   and(/or)   b i = b j.
(clearer on abs one)



for one branch,
i can calc and sort.
for any consecutive same value, take the length, and comb(len, 2)

i want to keep track of original index and sub 1 if a i = a j.



> how to create a vector of struct

i may try myself.

~~i could also learn hashmap and map the value of to the count of a i = a j.~~



yeah! sigma n in 2e5, ideal for nlogn. (hinting)

wait, if i really need both i and j to figure out, a i = a j...
it might degrade for hack data, where i could not use comb.



hey, numbers are in e9, and i may play some math trick.
like, what if i say
a i - b i + e9 * ai = a j - b j + e9 * aj
it will hold true for all ... (how about exclusiveness)

if long long handles it well, i think that's it.



Runtime error on test 2?!

damn, which re?!



wa on test5 this time. maybe re is for wrong sorting and initialized access.



Wrong answer on test 14	now

sum combo counting really should not be coupled w same.



let's toggle the same fn

maybe it's not to be solved by same fn.
it's not collision.
it might be the way i reverse my action.



wa on 10 if i separate them.

*/

void solve() {
  int n;
  read(n);

  vector<int> a(n + 5), b(n + 5);
  read_vec(a, 1, n);
  read_vec(b, 1, n);

  int answer = 0;

  vector<int> diff(n + 5), sum(n + 5), d_same(n + 5), s_same(n+5);

  each(i, 1, n) {
    diff[i] = a[i] - b[i];
    sum[i] = a[i] + b[i];

    // hack
    // same[i] = (a[i] - b[i]) * modulo + a[i];
    d_same[i] = (a[i] - b[i]) * modulo + a[i];
    s_same[i] = (a[i] + b[i]) * modulo + a[i];
  }

  sort(diff.begin() + 1, diff.begin() + n + 1);
  sort(sum.begin() + 1, sum.begin() + n + 1);
  sort(d_same.begin() + 1, d_same.begin() + n + 1);
  sort(s_same.begin() + 1, s_same.begin() + n + 1);
  // sort(diff.begin() + 1, diff.begin() + n - 1);
  // sort(sum.begin() + 1, sum.begin() + n - 1);
  // sort(same.begin() + 1, same.begin() + n - 1);


  int combo = 0;
  // int prev = diff[1];

  each(i, 2, n) {
    info("diff", i, diff[i - 1], diff[i], combo);
    // info("diff", i, prev, diff[i], combo);

    // if (diff[i] == diff[i - 1]){
    //   if(d_same[i] != d_same[i-1]){
    //     combo += 1;
    //   }
    //   // combo += 1;
    // } else {
    if (diff[i] == diff[i - 1] && d_same[i] != d_same[i-1]){
      combo += 1;
      // combo += 1;
    } else {
      answer += combinations(combo + 1, 2);
      combo = 0;
    }

    // prev = diff[i];
  }
  answer += combinations(combo + 1, 2);

  combo = 0;
  // prev = sum[1];

  each(i, 2, n) {
    info("sum", i, sum[i - 1], sum[i], combo);

    // if (sum[i] == sum[i - 1]) {
    //   if(s_same[i] != s_same[i-1]){
    //     combo += 1;
    //   }
    //   // combo += 1;
    // } else {
    if (sum[i] == sum[i-1] && s_same[i] != s_same[i - 1]) {
      combo += 1;
      // combo += 1;
    } else {
      answer += combinations(combo + 1, 2);
      combo = 0;
    }

    // prev = sum[i];
  }
  answer += combinations(combo + 1, 2);

  combo = 0;
  // prev = same[1];

  each(i, 2, n) {
    info("same", i, d_same[i - 1], d_same[i], combo);

    if (d_same[i] == d_same[i - 1]) {
      combo += 1;
    } else {
      answer += combinations(combo + 1, 2);
      // answer -= combinations(combo + 1, 2);
      combo = 0;
    }

    // prev = same[i];
  }
  answer += combinations(combo + 1, 2);
  // answer -= combinations(combo + 1, 2);

  each(i, 1, n) {
    info(diff[i], sum[i], d_same[i], s_same[i]);
  }

  // vector<int> diff(n + 5), sum(n + 5), same(n + 5);

  // each(i, 1, n) {
  //   diff[i] = a[i] - b[i];
  //   sum[i] = a[i] + b[i];

  //   // hack
  //   // same[i] = (a[i] - b[i]) * modulo + a[i];
  //   same[i] = a[i] * modulo + b[i];
  // }

  // sort(diff.begin() + 1, diff.begin() + n + 1);
  // sort(sum.begin() + 1, sum.begin() + n + 1);
  // sort(same.begin() + 1, same.begin() + n + 1);
  // // sort(diff.begin() + 1, diff.begin() + n - 1);
  // // sort(sum.begin() + 1, sum.begin() + n - 1);
  // // sort(same.begin() + 1, same.begin() + n - 1);


  // int combo = 0;
  // // int prev = diff[1];

  // each(i, 2, n) {
  //   info("diff", i, diff[i - 1], diff[i], combo);
  //   // info("diff", i, prev, diff[i], combo);

  //   if (diff[i] == diff[i - 1]) {
  //     combo += 1;
  //   } else {
  //     answer += combinations(combo + 1, 2);
  //     combo = 0;
  //   }

  //   // prev = diff[i];
  // }
  // answer += combinations(combo + 1, 2);

  // combo = 0;
  // // prev = sum[1];

  // each(i, 2, n) {
  //   info("sum", i, sum[i - 1], sum[i], combo);

  //   // if (sum[i] == sum[i-1] && same[i] != same[i - 1]) {
  //   if (sum[i] == sum[i - 1]) {
  //     combo += 1;
  //   } else {
  //     answer += combinations(combo + 1, 2);
  //     combo = 0;
  //   }

  //   // prev = sum[i];
  // }
  // answer += combinations(combo + 1, 2);

  // combo = 0;
  // // prev = same[1];

  // each(i, 2, n) {
  //   info("same", i, same[i - 1], same[i], combo);

  //   if (same[i] == same[i - 1]) {
  //     combo += 1;
  //   } else {
  //     answer -= combinations(combo + 1, 2);
  //     combo = 0;
  //   }

  //   // prev = same[i];
  // }
  // answer -= combinations(combo + 1, 2);

  // each(i, 1, n) {
  //   info(diff[i], sum[i], same[i]);
  // }

  prn(answer);
}
