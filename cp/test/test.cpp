#include <algorithm>
#include <iostream>
#include <numeric>
#include <optional>
#include <ranges>
#include <string>
#include <vector>

// Test 1: Testing <print> (C++23) - Greatly speeds up and simplifies debugging output
#if __has_include(<print>)
#include <print>
#define HAS_PRINT 1
#else
#define HAS_PRINT 0
#endif

// Test 2: Testing <expected> (C++23) - Elegant error handling for interactive problems
#if __has_include(<expected>)
#include <expected>
#define HAS_EXPECTED 1
#else
#define HAS_EXPECTED 0
#endif

void test_ranges_to_and_zip() {
  std::vector<int> ids = {1, 2, 3};
  std::vector<std::string> names = {"Alice", "Bob", "Charlie"};

// C++23: std::views::zip and std::ranges::to
// Zip allows iterating over multiple arrays simultaneously without raw index loops
#if defined(__cpp_lib_ranges_zip) && defined(__cpp_lib_ranges_to)
  // Creating a zipped view and converting it into a vector of pairs directly
  auto zipped = std::views::zip(ids, names) | std::ranges::to<std::vector>();

#if HAS_PRINT
  std::println("✓ Ranges zip & to: SUCCESS");
  for (const auto& [id, name] : zipped) {
    std::println("  - ID: {}, Name: {}", id, name);
  }
#else
  std::cout << "✓ Ranges zip & to: SUCCESS\n";
#endif
#else
  std::cout << "✗ Ranges zip or std::ranges::to: UNSUPPORTED\n";
#endif
}

void test_monadic_optional() {
// C++23 adds .and_then(), .transform(), and .or_else() to std::optional
// Highly efficient for geometry or DP states tracking validity cleanly
#if defined(__cpp_lib_optional_monadic)
  std::optional<int> score = 42;
  auto doubled = score.transform([](int n) { return n * 2; });

#if HAS_PRINT
  std::println("✓ Optional Monadic Operations: SUCCESS (Value: {})", doubled.value_or(-1));
#else
  std::cout << "✓ Optional Monadic Operations: SUCCESS\n";
#endif
#else
  std::cout << "✗ Optional Monadic Operations: UNSUPPORTED\n";
#endif
}

void test_string_contains() {
  // C++23 adds .contains() to std::string / std::string_view
  // Replaces the clunky 'str.find(x) != std::string::npos' pattern in string problems
  std::string s = "codeforces";
  if (s.contains("forces")) {
#if HAS_PRINT
    std::println("✓ string::contains: SUCCESS");
#else
    std::cout << "✓ string::contains: SUCCESS\n";
#endif
  } else {
    std::cout << "✗ string::contains: UNSUPPORTED\n";
  }
}

int main() {
  // Fast I/O optimized for CP
  std::ios_base::sync_with_stdio(false);
  std::cin.tie(NULL);

  std::cout << "=== Testing Local Compiler Features for C++23 ===\n\n";

// 1. Output Framework Check
#if HAS_PRINT
  std::println("✓ <print> library: SUCCESS");
#else
  std::cout << "✗ <print> library: UNSUPPORTED (Using std::cout fallback)\n";
#endif

// 2. Expected Monadic Check
#if HAS_EXPECTED
#if HAS_PRINT
  std::println("✓ <expected> library: SUCCESS");
#else
  std::cout << "✓ <expected> library: SUCCESS\n";
#endif
#else
  std::cout << "✗ <expected> library: UNSUPPORTED\n";
#endif

  // 3. Modern CP Syntax Runs
  test_ranges_to_and_zip();
  test_monadic_optional();
  test_string_contains();

  return 0;
}
