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

template <typename T>
concept IsVector =
    requires { typename T::value_type; } && std::is_same_v<T, std::vector<typename T::value_type>>;

void pr(auto&&... args) {
  ((std::cout << args << ' '), ...);
}
// void pr(auto&&... args) {
//   size_t n{0};
//   ((std::cout << args << (++n == sizeof...(args) ? "" : " ")), ...);
// }

// void prn_vec(auto& vec) {
//   size_t n{0};
//   for (const auto& element : vec) {
//     pr(element);
//   }
//   std::cout << '\n';
// }
// template <typename T>
// void prn(const std::vector<T>& vec) {
//   size_t n{0};
//   for (const auto& element : vec) {
//     pr(element);
//   }
//   std::cout << '\n';
// }
// template <typename T>
// void prn(const std::vector<T>& vec) {
//   size_t n{0};
//   for (const auto& element : vec) {
//     std::cout << element << (++n == vec.size() ? "" : " ");
//   }
//   std::cout << '\n';
// }

void print_single(auto&& arg) {
  if constexpr (IsVector<std::decay_t<decltype(arg)>>) {
    // Safe vector printing internal loop
    size_t n{0};
    for (const auto& element : arg) {
      std::cout << element << (++n == arg.size() ? "" : " ");
    }
  } else {
    // Normal variable printing
    std::cout << arg;
  }
}

// 3. The universal print function with "Space-Before" logic
void prn() {
  std::cout << '\n';
}

void prn(auto&& first, auto&&... rest) {
  print_single(std::forward<decltype(first)>(first));

  // Expand the remaining elements with a space in front of each
  ((std::cout << ' ', print_single(std::forward<decltype(rest)>(rest))), ...);

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

// inline auto print(auto&&... args) {
//   return prn(args...);
// }

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
  // prn("The final array is:", a);

  prn(n, n + 1, n + 2);
}
