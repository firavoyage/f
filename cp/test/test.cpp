#include <format>
#include <iostream>
#include <string>

int main() {
  double pi = 3.14159265359;

  // Formats to exactly 2 decimal places
  std::string s = std::format("{:.2f}", pi);

  //   std::cout << s << "\n";  // Output: 3.14
  std::cout << std::format("{:.2f}", pi) << "\n";  // Output: 3.14
  //   std::cout << std::format("{:.2f}", 14159265359) << "\n";  // Output: 3.14
}
