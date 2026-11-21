#include <bits/stdc++.h>

#define repeat(n) for (int _ = 0; _ < n; _ += 1)
// closed interval
#define each(i, a, b) for (int i = (a); i <= (b); i += 1)
#define reveach(i, a, b) for (int i = (a); i >= (b); i -= 1)

#define int long long
#define float double
#define seq(a, n) vector<int> a(n + 5)

#define readint(...) \
  int __VA_ARGS__;   \
  read(__VA_ARGS__);
#define readfloat(...) \
  float __VA_ARGS__;   \
  read(__VA_ARGS__);
#define readstr(...)  \
  string __VA_ARGS__; \
  read(__VA_ARGS__);
#define readseq(v, a, b) \
  seq(v, b);        \
  read_vec(v, a, b);

#define last(a) ((a).size() - 1)
// #define append push_back

const int modulo = 1e9 + 7;

const int nil = -1;

const int inf = 1e18;

using namespace std;

// utils

auto read(auto&&... variables) {
  (cin >> ... >> variables);
}

#define read_vec(vec, l, r) \
  each(i, l, r) {           \
    read(vec[i]);           \
  }

auto readline(auto&&... s) {
  cin >> ws;  // ignore any trailing whitespace
  ((getline(cin, s)), ...);
}

auto write(auto&&... items) {
  (cout << ... << items);
}

auto pr(auto&&... items) {
  (write(items, ' '), ...);
}

auto prn() {
  write('\n');
}

auto prn(auto&&... items) {
  pr(items...);

  write('\n');
}

#define print prn

#define prn_vec(vec, l, r) \
  each(i, l, r) {          \
    pr(vec[i]);            \
  }                        \
  write('\n');

// debug

#define info(...)             \
  if (should_debug) {         \
    prn("info", __VA_ARGS__); \
  }

auto force_tle() {
  while (true) {
  }
}

auto force_re() {
  assert(false);
}

auto force_mle() {
  vector<vector<int>> leak;
  while (true) {
    leak.push_back(vector<int>(1000000, 42));
  }
}

auto force_wa() {
  // cout << "wrong answer";
  exit(0);
}

// std

#define parse_int stoi
#define parse_float stod

// iterables

auto sort_arr(auto&& arr, auto l, auto r) {
  sort((arr) + (l), (arr) + (r) + 1);
}

auto sort_arr(auto&& arr, auto l, auto r, auto cmp) {
  sort((arr) + (l), (arr) + (r) + 1, cmp);
}

auto sort_vec(auto&& vec, auto l, auto r) {
  sort(vec.begin() + (l), vec.begin() + (r) + 1);
}

auto sort_vec(auto&& vec, auto l, auto r, auto cmp) {
  sort(vec.begin() + (l), vec.begin() + (r) + 1, cmp);
}

#define sort sort_vec

// string

auto format_float(auto number, auto precision) {
  char buf[64];
  std::snprintf(buf, sizeof(buf), "%.*f", (precision), (double)(number));
  return std::string(buf);
}

// math

auto truediv = [](auto a, auto b) { return double(a) / b; };

auto floordiv = [](auto a, auto b) { return std::floor(double(a) / b); };

auto divmod = [](auto numerator, auto denominator) {
  auto quotient = numerator / denominator, remainder = numerator % denominator;
  return pair{quotient, remainder};
};

auto pow_(int base, int exp, int mod = modulo) {
  int res = 1;
  base %= mod;

  while (exp > 0) {
    if (exp & 1) {  // exp % 2 == 1
      res = res * base % mod;
    }
    base = base * base % mod;
    exp >>= 1;  // exp /= 2;
  }
  return res;
}

auto mod_inverse(int n, int mod = modulo) {
  return pow_(n, mod - 2, mod);
}

auto ln = [](auto a) { return log(a); };

auto logab = [](auto a, auto b) { return ln(a) / ln(b); };

auto comb(int n, int r, int mod = modulo) {
  if (r < 0 || r > n) return 0;
  if (r == 0 || r == n) return 1;

  if (r > n - r) {
    r = n - r;
  }

  auto result = 1;
  each(i, 1, r) {
    result = (result * (n - r + i) * mod_inverse(i, mod)) % mod;
  }
  return result;
}

auto perm(int n, int r, int mod = modulo) {
  if (r < 0 || r > n) return 0;

  auto result = 1;
  each(i, n, n - r + 1) {
    result = (result * i) % mod;
  }
  return result;
}

auto min_vec(auto&& vec, auto l, auto r) {
  auto minimum = vec[l];
  each(i, l, r) {
    if (vec[i] < minimum) {
      minimum = vec[i];
    }
  }
  return minimum;
}

auto min_(auto first, auto... rest) {
  auto minimum = first;

  ((minimum = (rest < minimum) ? rest : minimum), ...);

  return minimum;
}

auto max_vec(auto&& vec, auto l, auto r) {
  auto maximum = vec[l];
  each(i, l, r) {
    if (vec[i] > maximum) {
      maximum = vec[i];
    }
  }
  return maximum;
}

auto max_(auto first, auto... rest) {
  auto maximum = first;

  ((maximum = (rest > maximum) ? rest : maximum), ...);

  return maximum;
}

auto floor_ = [](auto x) {
  int result = std::floor(x);
  return result;
};
auto ceil_ = [](auto x) {
  int result = std::ceil(x);
  return result;
};

// fix

#define pow pow_
#define floor floor_
#define ceil ceil_
#define min min_
#define max max_

void solve();

// entry

const bool is_single_task = true;

const bool should_debug = true;

signed main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int t = 1;

  if (!is_single_task) {
    read(t);
  }
  repeat(t) {
    solve();
  }
  return 0;
}

// solution

/*

n in e3.

clearly it's n^2 complete search.



idk if it could be optimized meaningfully.



there is some documented quirks on the special judge discussed in the group i remember.
on the order of output.



ok fine,
91.3/100 first attempt.

what if i swap the order?

still 91.3. maybe there's sth wrong w my code. idk.



ah template issue, fast pow.

it typically takes mod. but mod doesnt work for neg numbers.



(and on the board my score is typically weird, unlike those missing one, i missed two)



still 91.3...
swap?



or maybe you should avoid sqrt precision loss?!

ah damn it i used int for distance.
not sqrt issue anymore.



still...



unbelievable.

that's wild!



wait... n in 1 e3, and can they choose the same point?



ac.

ah clearly here's the edge case, like n points of the same.



let's see if int distance would work...



interesting, silencer76 showcases hypot on nowcoder solution posts index

```
#include <iostream>
#include <cmath>
using namespace std;
using ld=long double;
const int N=1010;
int x[N],y[N];
int main(void)
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    ld ans=0;
    int n,i,j,idx1=1,idx2=1;
    cin>>n;
    for(i=1;i<=n;++i)
        cin>>x[i]>>y[i];
    for(i=1;i<=n;++i)
        for(j=i+1;j<=n;++j)
            if(hypotl(x[i]-x[j],y[i]-y[j])>ans)
            {
                ans=hypotl(x[i]-x[j],y[i]-y[j]);
                idx1=i;
                idx2=j;
            }
    cout<<x[idx1]<<' '<<y[idx1]<<' '<<x[idx2]<<' '<<y[idx2];
    return 0;
}
```



many solutions actually start at i+1.
but assign the first one on ans pair as initial value.

anyway.



```
#include <iostream>
#include<vector>
using namespace std;
struct point{
    double x,y;
};
int main() {
   int n;
   cin>>n;
   vector<point>p(n);
   for(int i=0;i<n;i++){
    cin>>p[i].x>>p[i].y;
   }
   double dx1=0,dx2=0,dy1=0,dy2=0;
   double ans=0;
   for(int i=0;i<n;i++){
    for(int j=i+1;j<n;j++){
        double x1=p[i].x,x2=p[j].x;
        double y1=p[i].y,y2=p[j].y;
        if(((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))>=ans){
            ans=(x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
            dx1=x1,dx2=x2,dy1=y1,dy2=y2;
        }
    }
   }
   cout<<dx1<<" "<<dy1<<" "<<dx2<<" "<<dy2<<"\n";
}
// 64 位输出请用 printf("%lld")
```

such an answer can work?!

anyway. hacks are common in cp.



a groupmate insists that order matters and it works after it runs a custom cmp
to swap the two outputs...

*/

struct point
{
  int x;
  int y;
};

int distance(point a, point b){
  int dx = a.x - b.x, dy = a.y - b.y;
  return dx * dx + dy * dy;
}
// float distance(point a, point b){
//   int dx = a.x - b.x, dy = a.y - b.y;
//   return sqrt(dx * dx + dy * dy);
// }
// int distance(point a, point b){
//   int dx = a.x - b.x, dy = a.y - b.y;
//   return sqrt(dx * dx + dy * dy);
// }
// int distance(point a, point b){
//   return sqrt(pow((a.x - b.x), 2) + pow((a.y - b.y), 2));
// }

bool should_swap = true;

void solve() {
  readint(n);

  vector<point> a(n + 5);

  each(i, 1, n){
    read(a[i].x);
    read(a[i].y);
  }

  int max_distance = -inf;
  point max_a, max_b;

  each(i, 1, n){
    each(j, i, n){
      if(distance(a[i], a[j]) > max_distance){
        max_distance = distance(a[i], a[j]);
        max_a = a[i];
        max_b = a[j];
      }
    }
  }

  if(should_swap){
    swap(max_a, max_b);
  }
  prn(max_a.x, max_a.y, max_b.x, max_b.y);
}
// void solve() {
//   readint(n);

//   vector<point> a(n + 5);

//   each(i, 1, n){
//     read(a[i].x);
//     read(a[i].y);
//   }

//   int max_distance = 0;
//   point max_a, max_b;

//   each(i, 1, n){
//     each(j, i + 1, n){
//       if(distance(a[i], a[j]) > max_distance){
//         max_distance = distance(a[i], a[j]);
//         max_a = a[i];
//         max_b = a[j];
//       }
//     }
//   }

//   prn(max_a.x, max_a.y, max_b.x, max_b.y);
// }
// void solve() {
//   readint(n);

//   vector<point> a(n + 5);

//   each(i, 1, n){
//     read(a[i].x);
//     read(a[i].y);
//   }

//   float max_distance = 0;
//   point max_a, max_b;

//   each(i, 1, n){
//     each(j, i + 1, n){
//       if(distance(a[i], a[j]) > max_distance){
//         max_distance = distance(a[i], a[j]);
//         max_a = a[i];
//         max_b = a[j];
//       }
//     }
//   }

//   prn(max_b.x, max_b.y, max_a.x, max_a.y);
// }
// void solve() {
//   readint(n);

//   vector<point> a(n + 5);

//   each(i, 1, n){
//     read(a[i].x);
//     read(a[i].y);

//   }

//   float max_distance = 0;
//   point max_a, max_b;

//   each(i, 1, n){
//     each(j, i + 1, n){
//       if(distance(a[i], a[j]) > max_distance){
//         max_distance = distance(a[i], a[j]);
//         max_a = a[i];
//         max_b = a[j];
//       }
//     }
//   }

//   prn(max_a.x, max_a.y, max_b.x, max_b.y);

// }


