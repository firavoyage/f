#include <iostream>
#include <cmath>
#include <numeric>
#include <cstdlib>
#include <chrono>

struct Fraction {
    long long num, den;

    Fraction(long long n = 0, long long d = 1) {
        long long g = std::gcd(std::llabs(n), std::llabs(d));
        num = n / g;
        den = d / g;
        if (den < 0) {
            num = -num;
            den = -den;
        }
    }
};

Fraction operator+(const Fraction& a, const Fraction& b) {
    long long temp_num = a.num * b.den + b.num * a.den;
    long long temp_den = a.den * b.den;
    return Fraction(temp_num, temp_den);
}

Fraction operator-(const Fraction& a, const Fraction& b) {
    long long temp_num = a.num * b.den - b.num * a.den;
    long long temp_den = a.den * b.den;
    return Fraction(temp_num, temp_den);
}

double max_remaining(int start, int num_terms) {
    if (num_terms == 0) return 0.0;
    double sum = 0.0;
    for (int i = 0; i < num_terms; ++i) {
        sum += 1.0 / (start + i);
    }
    return sum;
}

int main() {
    int count = 0;
    const double target = 1.0 / 20.0;
    const double eps = 1e-10;
    const int MAX_DEN = 20000;

    long long total_iterations = 0;
    auto start_time = std::chrono::steady_clock::now();
    auto last_report = start_time;

    std::cout << "Searching for Egyptian fraction representations of 1/20..." << std::endl;
    std::cout << "This may take a while. MAX_DEN = " << MAX_DEN << std::endl;

    for (int a = 21; a < MAX_DEN; ++a) {
        // Progress report for outer loop
        if (a % 100 == 0) {
            auto now = std::chrono::steady_clock::now();
            auto elapsed = std::chrono::duration_cast<std::chrono::seconds>(now - start_time).count();
            std::cout << "Progress: a=" << a << "/" << MAX_DEN << " (" << (a * 100 / MAX_DEN) << "%), "
                      << "time=" << elapsed << "s, solutions=" << count << std::endl;
        }

        double sa = 1.0 / a;
        if (sa + max_remaining(a + 1, 5) < target - eps) break;
        int min_b = std::max(a + 1, static_cast<int>(std::ceil(1.0 / (target - sa + eps))));

        for (int b = min_b; b < MAX_DEN; ++b) {
            total_iterations++;
            double sb = sa + 1.0 / b;
            if (sb > target + eps) continue;
            if (sb + max_remaining(b + 1, 4) < target - eps) break;
            int min_c = std::max(b + 1, static_cast<int>(std::ceil(1.0 / (target - sb + eps))));

            for (int c = min_c; c < MAX_DEN; ++c) {
                total_iterations++;
                double sc = sb + 1.0 / c;
                if (sc > target + eps) continue;
                if (sc + max_remaining(c + 1, 3) < target - eps) break;
                int min_d = std::max(c + 1, static_cast<int>(std::ceil(1.0 / (target - sc + eps))));

                for (int d = min_d; d < MAX_DEN; ++d) {
                    total_iterations++;
                    double sd = sc + 1.0 / d;
                    if (sd > target + eps) continue;
                    if (sd + max_remaining(d + 1, 2) < target - eps) break;
                    int min_e = std::max(d + 1, static_cast<int>(std::ceil(1.0 / (target - sd + eps))));

                    for (int e = min_e; e < MAX_DEN; ++e) {
                        total_iterations++;
                        double se = sd + 1.0 / e;
                        if (se > target + eps) continue;
                        if (se + max_remaining(e + 1, 1) < target - eps) break;

                        // Exact computation
                        Fraction s = Fraction(1, a) + Fraction(1, b) + Fraction(1, c) + Fraction(1, d) + Fraction(1, e);
                        Fraction req = Fraction(1, 20) - s;
                        if (req.num == 1 && req.den > e && req.den < MAX_DEN) {
                            count++;
                            auto now = std::chrono::steady_clock::now();
                            auto elapsed = std::chrono::duration_cast<std::chrono::seconds>(now - start_time).count();
                            std::cout << "*** Solution " << count << " at " << elapsed << "s: {"
                                      << a << ", " << b << ", " << c << ", "
                                      << d << ", " << e << ", " << req.den << "} ***" << std::endl;
                        }
                    }
                }
            }
        }
    }

    auto end_time = std::chrono::steady_clock::now();
    auto total_elapsed = std::chrono::duration_cast<std::chrono::seconds>(end_time - start_time).count();

    std::cout << "\n=== SEARCH COMPLETE ===" << std::endl;
    std::cout << "Total time: " << total_elapsed << " seconds" << std::endl;
    std::cout << "Total iterations: " << total_iterations << std::endl;
    std::cout << "Solutions found: " << count << std::endl;

    return 0;
}