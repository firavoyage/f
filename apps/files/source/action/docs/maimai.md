# single chart difficulty, achievement% -> rating mapping

```yaml
D: 5
C: 8
B: 9.6
BB: 11.2
BBB: 12
A: 13.6
AA: 15.2
AAA: 16.8
S: 20.0
S+: 20.3
SS: 20.8
SS+: 21.1
SSS: 21.6
SSS+: 22.4
```

```yaml
- min: 100.5
  rank: SSS+
  coefficient: 22.4
- min: 100
  rank: SSS
  coefficient: 21.6
- min: 99.5
  rank: SS+
  coefficient: 21.1
- min: 99
  rank: SS
  coefficient: 20.8
- min: 98
  rank: S+
  coefficient: 20.3
- min: 97
  rank: S
  coefficient: 20
- min: 94
  rank: AAA
  coefficient: 16.8
- min: 90
  rank: AA
  coefficient: 15.2
- min: 80
  rank: A
  coefficient: 13.6
- min: 75
  rank: BBB
  coefficient: 12
- min: 70
  rank: BB
  coefficient: 11.2
- min: 60
  rank: B
  coefficient: 9.6
- min: 50
  rank: C
  coefficient: 8
- min: 0
  rank: D
  coefficient: 5
```

formula: single chart rating = floor(min(achievement%, 100.5) * coefficient * difficulty)

starting from maimai dx circle, there is one bonus rating for ap.

players are way more familiar w the overall rating, and thus by default i would multiply them by 50 (avg later) rather than showing the raw values (sum later).

# ref

rank constants of all versions https://silentblue.remywiki.com/maimai_DX:Rating

a flawed visualizer https://myjian.github.io/mai-tools/rating-visualizer/

