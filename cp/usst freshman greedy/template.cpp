#include <bits/stdc++.h>
using namespace std;

void read(auto&&... args) {
  (std::cin >> ... >> args);
}

template <typename T>
void read(std::vector<T>& vec) {
  for (auto& element : vec) {
    read(element);
  }
}

void write(auto&&... args) {
  (std::cout << ... << args);
}

void pr(auto&&... args) {
  ((std::cout << args << ' '), ...);
}
// void pr(auto&&... args) {
//   size_t n{0};
//   ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
// }

template <typename T>
concept __is_vector =
    requires { typename T::value_type; } && std::is_same_v<T, std::vector<typename T::value_type>>;

void __print(auto&& arg) {
  if constexpr (__is_vector<std::decay_t<decltype(arg)>>) {
    size_t n{0};
    for (const auto& element : arg) {
      std::cout << element << (++n == arg.size() ? "" : " ");
    }
  } else {
    std::cout << arg;
  }
}

void prn() {
  std::cout << '\n';
}

void prn(auto&& first, auto&&... rest) {
  __print(std::forward<decltype(first)>(first));

  ((std::cout << ' ', __print(std::forward<decltype(rest)>(rest))), ...);

  std::cout << '\n';
}

// void prn(auto&&... args) {
//   ((std::cout << args << ' '), ...);
//   std::cout << '\n';
// }
// void prn(auto&&... args) {
//   size_t n{0};
//   ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
//   std::cout << '\n';
// }
// void prn(auto&& first, auto&&... rest) {
//   // If 'first' is a vector, it hits the template overload above.
//   // Otherwise, it prints normally.
//   if constexpr (requires { std::cout << first; }) {
//     std::cout << first;
//     ((std::cout << ' ' << rest), ...);
//     std::cout << '\n';
//   } else {
//     // Fallback for nested containers or manual processing
//     prn(first);
//     if constexpr (sizeof...(rest) > 0) {
//       prn(rest...);
//     }
//   }
// }

inline auto print(auto&&... args) {
  return prn(args...);
}

// constexpr auto print = [](auto&&... args) noexcept(
//                            noexcept(prn(std::forward<decltype(args)>(args)...))) ->
//                            decltype(auto) {
//   return prn(std::forward<decltype(args)>(args)...);
// };

void solve();

const bool single_task = true;

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;

  if (!single_task) {
    cin >> t;
  }
  while (t--) {
    solve();
  }
  return 0;
}

// solution

/*



*/

void solve() {
  int n;
  read(n);

  std::vector<int> a(n);
  read(a);  // Direct vector input! No manual for-loop needed.

  // Direct printing
  prn(a);

  // Mixed printing works too
  prn("The final array is:", a);

  prn(n, n + 1, n + 2);
}
