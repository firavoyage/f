<!-- https://chatgpt.com/c/695b48c5-156c-8322-8f2d-7b098d93208a -->

# 0

use ffmpeg to process a vid.

for this one `【Coding】anime girls becoming programmers`, remove all content after 2 hour. know that it's 18g large, more than 12 hours. no backup needed.

```
fira@Fira ~ % cd Videos
fira@Fira ~/Videos % ls
'5 Centimeters per Second (2007)'
'BanG Dream! It’s MyGO!!!!! (2023)'
'Bocchi the Rock! (2022)'
'【Coding】anime girls becoming programmers ｜ VTuber Cyan w⧸@HoshinoLina [HqgXUGErF_8].webm'
'Fight Club (1999)'
'Frieren Beyond Journey’s End (2023)'
'Girls Band Cry (2024)'
'Grand Theft Auto - San Andreas'
 h
'Her (2013)'
'Ikiru (1952)'
'Inception (2010)'
'Indie Game The Movie (2012)'
'Oshi no Ko (2023)'
 Screencasts
'Super Bunny Man v1.0.1 by Pioneer'
'The Godfather (1972)'
'The Good the Bad and the Ugly (1966)'
'The Hunt (2012)'
'Yosuga no Sora (2010)'
'Your Name (2016)'
'凉宫春日的忧郁 The Melancholy of Haruhi Suzumiya (2009)'
'天空之城 Castle in the Sky (1986)'
'年少日记 Time Still Turns the Pages (2023)'
'幸运星 Lucky Star (2007)'
```

---

You can do this **without re-encoding** (fast, no quality loss) by stream-copying only the first **2 hours** and then replacing the original file.

### Command (safe + fast)

```bash
ffmpeg -i '【Coding】anime girls becoming programmers ｜ VTuber Cyan w⧸@HoshinoLina [HqgXUGErF_8].webm' \
  -t 02:00:00 -map 0 -c copy \
  '【Coding】anime girls becoming programmers ｜ VTuber Cyan w⧸@HoshinoLina [HqgXUGErF_8].cut.webm'
```

### Replace the original (since you said no backup needed)

```bash
mv '【Coding】anime girls becoming programmers ｜ VTuber Cyan w⧸@HoshinoLina [HqgXUGErF_8].cut.webm' \
   '【Coding】anime girls becoming programmers ｜ VTuber Cyan w⧸@HoshinoLina [HqgXUGErF_8].webm'
```

### Notes

- `-t 02:00:00` keeps **only the first 2 hours**
- `-c copy` = **no re-encode**, very fast even for an 18 GB file
- `-map 0` ensures all streams (audio/video/subs) are preserved
- ffmpeg **cannot truly edit in place**, so this temp-file → move approach is the correct way

If you want it to **start cutting exactly at a keyframe** (maximum compatibility) or want to **hard-truncate at filesystem level**, I can show alternatives—but this is the cleanest solution 👍
