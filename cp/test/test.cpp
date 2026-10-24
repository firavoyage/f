#include <iostream>
#include <type_traits>
#include <utility>
#include <vector>

// 1. Define a helper concept to check if a type is a vector
template <typename T>
concept __is_vector =
    requires { typename T::value_type; } && std::is_same_v<T, std::vector<typename T::value_type>>;

// 2. Base element printer (Handles singular values)
void __print(auto&& arg) {
  if constexpr (__is_vector<std::decay_t<decltype(arg)>>) {
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
void print() {
  std::cout << '\n';
}

void print(auto&& first, auto&&... rest) {
  __print(std::forward<decltype(first)>(first));

  // Expand the remaining elements with a space in front of each
  ((std::cout << ' ', __print(std::forward<decltype(rest)>(rest))), ...);

  std::cout << '\n';
}

int main() {
  // Fast I/O
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(nullptr);

  int x = 42;
  std::vector<int> v = {1, 2, 3, 4};
  std::string s = "done";

  // ✅ Works completely safely for individual items, vectors, and mixed inputs!
  print(x);        // Outputs: 42
  print(v);        // Outputs: 1 2 3 4
  print(x, v, s);  // Outputs: 42 1 2 3 4 done
}
