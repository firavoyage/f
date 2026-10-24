#include <iostream>
#include <optional>
#include <utility>
#include <vector>

// ==================== 1. MAP ====================
template <typename T, typename Func>
auto map(const std::vector<T>& vec, Func f) {
  using ReturnType = decltype(f(std::declval<T>()));
  std::vector<ReturnType> res;
  res.reserve(vec.size());
  for (const auto& x : vec) {
    res.push_back(f(x));
  }
  return res;
}

// ==================== 2. REDUCE (Left-to-Right) ====================

// Signature A: Initial Value = nil (2 Arguments)
template <typename T, typename Func>
auto reduce_vec(const std::vector<T>& vec, Func f) {
  using ReturnType = decltype(f(std::declval<T>(), std::declval<T>()));
  if (vec.empty()) return std::optional<ReturnType>(std::nullopt);

  ReturnType acc = vec[0];
  for (size_t i = 1; i < vec.size(); ++i) {
    acc = f(acc, vec[i]);
  }
  return std::optional<ReturnType>(acc);
}

// Signature B: Initial Value Provided (3 Arguments)
template <typename T, typename Func, typename InitType>
auto reduce_vec(const std::vector<T>& vec, Func f, InitType init) {
  using ReturnType = decltype(f(std::declval<InitType>(), std::declval<T>()));
  ReturnType acc = init;
  for (const auto& x : vec) {
    acc = f(acc, x);
  }
  return acc;  // Returns pure type directly since an initial seed guarantees a value
}

// ==================== 3. REDUCE RIGHT (Right-to-Left) ====================

// Signature A: Initial Value = nil (2 Arguments)
template <typename T, typename Func>
auto reduce_right_vec(const std::vector<T>& vec, Func f) {
  using ReturnType = decltype(f(std::declval<T>(), std::declval<T>()));
  if (vec.empty()) return std::optional<ReturnType>(std::nullopt);

  ReturnType acc = vec.back();
  for (size_t i = vec.size() - 1; i > 0; --i) {
    acc = f(vec[i - 1], acc);  // Element first, Accumulator second
  }
  return std::optional<ReturnType>(acc);
}

// Signature B: Initial Value Provided (3 Arguments)
template <typename T, typename Func, typename InitType>
auto reduce_right_vec(const std::vector<T>& vec, Func f, InitType init) {
  using ReturnType = decltype(f(std::declval<T>(), std::declval<InitType>()));
  ReturnType acc = init;
  for (size_t i = vec.size(); i > 0; --i) {
    acc = f(vec[i - 1], acc);  // Element first, Accumulator second
  }
  return acc;  // Returns pure type directly
}

// ==================== TEST DRIVE ====================
int main() {
  // Optimize I/O operations for Competitive Programming
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(NULL);

  std::vector<int> nums = {1, 2, 3, 4};

  // --- 1. Map Test ---
  auto squared = map(nums, [](int x) { return x * x; });

  // --- 2. Reduce (Left-to-Right) Polymorphism ---
  auto sum_nil =
      reduce_vec(nums, [](int acc, int x) { return acc + x; });  // 2 args -> returns optional
  auto sum_seed = reduce_vec(
      nums, [](long long acc, int x) { return acc + x; }, 10LL);  // 3 args -> returns pure type

  std::cout << "Reduce (Nil): " << (sum_nil ? std::to_string(*sum_nil) : "nil") << "\n";  // 10
  std::cout << "Reduce (Seed): " << sum_seed << "\n";                                     // 20

  // --- 3. Reduce Right (Right-to-Left) Polymorphism ---
  auto sub_nil =
      reduce_right_vec(nums, [](int x, int acc) { return x - acc; });  // 2 args -> returns optional
  auto sub_seed = reduce_right_vec(
      nums, [](int x, int acc) { return x - acc; }, 10);  // 3 args -> returns pure type

  std::cout << "Reduce Right (Nil): " << (sub_nil ? std::to_string(*sub_nil) : "nil")
            << "\n";                                         // -2
  std::cout << "Reduce Right (Seed): " << sub_seed << "\n";  // -8

  // --- 4. Empty Vector Verification ---
  std::vector<int> empty_vec;
  auto empty_nil = reduce_vec(empty_vec, [](int acc, int x) { return acc + x; });
  auto empty_seed = reduce_vec(empty_vec, [](int acc, int x) { return acc + x; }, 5);

  if (!empty_nil.has_value())
    std::cout << "Empty vector with 2 args correctly evaluated to 'nil'!\n";
  std::cout << "Empty vector with 3 args evaluated to seed: " << empty_seed << "\n";  // 5

  return 0;
}
