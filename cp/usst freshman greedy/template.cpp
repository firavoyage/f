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

void readline(auto&&... args) {
  std::cin >> std::ws;  // ignore any trailing whitespace
  (std::cin >> ... >> args);
}

void write(auto&&... args) {
  (std::cout << ... << args);
}

void pr(auto&&... args) {
  ((std::cout << args << ' '), ...);
}
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

void readline(auto&&... args) {
  std::cin >> std::ws;  // ignore any trailing whitespace
  (std::cin >> ... >> args);
}

void write(auto&&... args) {
  (std::cout << ... << args);
}

void pr(auto&&... args) {
  ((write(args, ' ')), ...);
}

template <typename T>
void pr(std::vector<T>& vec) {
  for (auto& element : vec) {
    write(element, ' ');
  }
}

void prn() {
  std::cout << '\n';
}

void prn(auto&&... args) {
  (pr(args), ...);

  std::cout << '\n';
}

inline auto print(auto&&... args) {
  return prn(args...);
}

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

template <typename T>
void pr(std::vector<T>& vec) {
  for (auto& element : vec) {
    std::cout << element << ' ';
  }
}

void prn() {
  std::cout << '\n';
}

void prn(auto&&... args) {
  (pr(args), ...);

  std::cout << '\n';
}
// void prn(auto&& first, auto&&... rest) {
//   __print(first);

//   (__print(rest), ...);

//   std::cout << '\n';
// }

inline auto print(auto&&... args) {
  return prn(args...);
}

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
