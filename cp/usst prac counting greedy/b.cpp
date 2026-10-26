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

const int nil = -1;

using namespace std;
// using namespace ranges; // ranges::sort(vec)

void solve();

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

inline auto log(auto&&... items) {
  prn("log", items...);
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

i guess it's simple that i have to fix a few and can fill others as i like.



1 2 3 4
2 3 1 4
3 1 2 4

clearly it's not that simple.



or maybe it's the case that

a column either

- has already failed
- or desires a number

and the answer is len set desired number, 

and all others are free. perm.



n in [2, 1000]



idk how to store two dimension vec.
i can try.

for each column, i may maintain sum = sigma 1 to n, safely within int.
and a bool vector for checks.

and i can have a bool vector for desired numbers.

*/

void solve() {
  

  vector<vector<int>> a;

  
}
