# how to find the max euclidean distance among a set of points in nlogn time in cp cpp

Assuming the points are **2D**, use a **convex hull + rotating calipers**:

1. The farthest pair must be vertices of the convex hull.
2. Build the hull in \(O(n\log n)\).
3. Sweep around the hull with rotating calipers to find the farthest pair in \(O(h)\), where \(h\) is the hull size.

Compare **squared distances** to avoid square roots during the search.

```cpp
#include <bits/stdc++.h>
using namespace std;

using i128 = __int128_t;

struct Point {
    long long x, y;

    bool operator<(const Point& other) const {
        return tie(x, y) < tie(other.x, other.y);
    }

    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
};

i128 cross(const Point& a, const Point& b, const Point& c) {
    return (i128)(b.x - a.x) * (c.y - a.y)
         - (i128)(b.y - a.y) * (c.x - a.x);
}

i128 dist2(const Point& a, const Point& b) {
    i128 dx = (i128)a.x - b.x;
    i128 dy = (i128)a.y - b.y;
    return dx * dx + dy * dy;
}

vector<Point> convexHull(vector<Point> p) {
    sort(p.begin(), p.end());
    p.erase(unique(p.begin(), p.end()), p.end());

    if (p.size() <= 1) return p;

    vector<Point> h;

    // Lower hull
    for (const auto& pt : p) {
        while (h.size() >= 2 &&
               cross(h[h.size() - 2], h.back(), pt) <= 0) {
            h.pop_back();
        }
        h.push_back(pt);
    }

    // Upper hull
    size_t lowerSize = h.size();
    for (int i = (int)p.size() - 2; i >= 0; --i) {
        while (h.size() > lowerSize &&
               cross(h[h.size() - 2], h.back(), p[i]) <= 0) {
            h.pop_back();
        }
        h.push_back(p[i]);
    }

    h.pop_back(); // Remove duplicate first point
    return h;
}

i128 diameterSquared(const vector<Point>& h) {
    int m = h.size();

    if (m <= 1) return 0;
    if (m == 2) return dist2(h[0], h[1]);

    i128 best = 0;
    int j = 1;

    for (int i = 0; i < m; ++i) {
        int ni = (i + 1) % m;

        auto area = [&](int k) {
            return cross(h[i], h[ni], h[k]);
        };

        while (area((j + 1) % m) > area(j)) {
            j = (j + 1) % m;
        }

        best = max(best, dist2(h[i], h[j]));
        best = max(best, dist2(h[ni], h[j]));

        // Handle parallel edges / equal-area antipodal points.
        int nj = (j + 1) % m;
        if (area(nj) == area(j)) {
            best = max(best, dist2(h[i], h[nj]));
            best = max(best, dist2(h[ni], h[nj]));
        }
    }

    return best;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<Point> points(n);
    for (auto& p : points) {
        cin >> p.x >> p.y;
    }

    vector<Point> hull = convexHull(points);
    i128 bestSq = diameterSquared(hull);

    long double answer = sqrtl((long double)bestSq);
    cout << fixed << setprecision(10) << answer << '\n';
}
```

**Complexity:** \(O(n\log n)\) time and \(O(n)\) memory. This approach is for 2D points; the higher-dimensional problem needs different methods.

# explain the algorithm

The algorithm has two stages: **reduce the points to their convex hull**, then find the farthest pair on that hull using **rotating calipers**.

### 1. Why use the convex hull?

The convex hull is the smallest convex polygon containing all the points. A farthest pair can be found among its **vertices**: a point strictly inside the hull cannot be needed for a maximum-distance pair.

So instead of considering all \(\binom n2\) pairs, we first keep only the \(h\) hull vertices.

### 2. Build the convex hull

The code uses the monotonic-chain algorithm:

- Sort points by \(x\), then \(y\).
- Scan from left to right to build the lower boundary.
- Scan from right to left to build the upper boundary.
- While the latest three points make a non-left turn, remove the middle one.

The turn direction is determined by the cross product:

\[
\operatorname{cross}(a,b,c)
=(b_x-a_x)(c_y-a_y)-(b_y-a_y)(c_x-a_x).
\]

Sorting costs \(O(n\log n)\); the scans together cost \(O(n)\).

### 3. Find the diameter with rotating calipers

Imagine placing two parallel lines against opposite sides of the convex hull, like calipers. As one line moves around the hull, the opposite “supporting” vertex also moves around it. It never needs to move backward, so the full sweep takes \(O(h)\).

For each hull edge \(h[i]\to h[i+1]\), the code:

1. Advances `j` while the triangle area formed by that edge and `h[j]` increases.
2. Checks the distances from `h[j]` to both endpoints of the edge.
3. If the next vertex gives the same area, checks it too. This handles parallel edges and tied antipodal vertices.

The cross product gives the triangle’s **signed area** (twice its actual area), so comparing it is enough to find the maximum-area position.

### 4. Compare squared distances

The code computes

\[
d^2(a,b)=(a_x-b_x)^2+(a_y-b_y)^2
\]

and keeps the largest value. Since square root is increasing, maximizing \(d^2\) also maximizes \(d\). It takes the square root only once at the end.

**Overall complexity:** \(O(n\log n)\) time and \(O(n)\) memory. This method is specifically for points in **2D**.