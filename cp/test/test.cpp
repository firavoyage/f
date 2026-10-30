#include <format>
#include <iostream>
#include <string>

#define format_float(number, precision)                                     \
  ([&]() {                                                                  \
    char buf[64];                                                           \
    std::snprintf(buf, sizeof(buf), "%.*f", (precision), (double)(number)); \
    return std::string(buf);                                                \
  }())

int main() {
  double pi = 3.14159265359;
  int p = 4;

//   std::string s = format_float(pi, p);
//   std::cout << s << "\n";  // Output: 3.1416
  std::cout << format_float(3.14159265359, 4) << "\n";  // Output: 3.1416
}
