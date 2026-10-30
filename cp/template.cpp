#include <bits/stdc++.h>

// #define append push_back

#define repeat(n) for (int _ = 0; _ < n; _ += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)
#define rev_each reveach

#define int long long
#define float double

const int modulo = 1e9 + 7;

// fix

const int nil = -1;

using namespace std;

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

#define read_vec(vec, l, r) \
  each(i, l, r) {           \
    read(vec[i]);           \
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

auto print(auto&&... items) {
  prn(items...);
}

#define prn_vec(vec, l, r) \
  each(i, l, r) {          \
    pr(vec[i]);            \
  }                        \
  write('\n');

// std

#define parse_int stoi
#define parse_float stod

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

// iterables

#define sort_vec(vec, l, r) \
  std::sort((vec).begin() + (l), (vec).begin() + (r) + 1)

// string

#define format_float(number, precision)                                     \
  ([&]() {                                                                  \
    char buf[64];                                                           \
    std::snprintf(buf, sizeof(buf), "%.*f", (precision), (double)(number)); \
    return std::string(buf);                                                \
  }())

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

#define pow pow_
#define floor floor_
#define ceil ceil_
#define min min_
#define max max_

// entry

const bool is_single_task = true;

const bool should_debug = true;

auto info(auto&&... items) {
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



*/

void solve() {

}
