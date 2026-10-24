#include <bits/stdc++.h>
#define macro(_1, _2, _3, _4, name, ...) name

// #define all(v) v.begin(), v.end()
// #define reverse(v) v.rbegin(), v.rend()
#define len(x) (int)(x).size()
#define append push_back
// #define push push_back

#define repeat(n) for (int __i = 0; __i < n; __i += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)
#define rev_each reveach

#define enum views::enumerate  // auto [index, value]: enum(vec)

#define int long long
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

// fix

const bool single_task = true;

const int nil = -1;

void solve();

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;

  if (!single_task) {
    cin >> t;
  }
  repeat(t) {
    solve();
  }
  return 0;
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
  return acc;  // Returns pure type directly since an initial seed guarantees a value
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

auto format_float(auto n, auto precision) {
  string result = "";
  if (n < 0) {
    result += '-';
    n = -n;
  }

  long long int_part = (long long)n;
  result += to_string(int_part);

  if (precision > 0) {
    result += '.';

    double fractional = n - int_part;

    for (int i = 0; i < precision; ++i) {
      fractional *= 10;
      int digit = (int)fractional;

      if (i == precision - 1) {
        double next_digit = (fractional - digit) * 10;
        if (next_digit >= 5.0) {
          digit++;
        }
      }

      result += to_string(digit);
      fractional -= (int)fractional;
    }
  }

  return result;
}

// math

auto add = [](auto a, auto b) { return a + b; };

// auto sub = [](auto a, auto b) { return a - b; };

auto mul = [](auto a, auto b) { return a * b; };

// auto mul = [](auto a, auto b) { return a * b; };

// auto add(auto a, auto b) {
//   return a + b;
// }

auto summation(auto numbers) {
  return reduce_vec(numbers, add);
}

// solution

/*



*/

void solve() {
  int n;
  read(n);

  vector<int> a(n);

  read(a);

  // ranges::sort(a);
  // std::vector<int> nums = {1, 2, 3, 4};

  // prn(sum_nil);

  prn(summation(a));

  // prn(ranges::max(a));

  // float n;
  // read(n);
  // prn(format_float(n, 1));

  // vector<int> a(n + 5);

  // read_vec(a, 1, n);
  // prn_vec(a, 1, n);

  // std::vector<int> nums = {1, 2, 3, 4};
}
