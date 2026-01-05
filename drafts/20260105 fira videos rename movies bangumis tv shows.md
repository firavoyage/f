<!-- https://chatgpt.com/c/695b4727-30f4-8321-8a82-9eb11df0eec0 -->

<!-- just ctrl shift v, worked as expected. -->

# 0

rename files.

find out all movies and bangumis/tv shows.

name the folder like `Her (2013)` `天空之城 Castle in the sky (1986)`. english title is a must. for other lang, if it already exists, keep it as you like.

hardcode each.

give me a script. (i will chmod it and run it)

```
fira@Fira ~/Videos % ls
'5.Centimeters.Per.Second.2007.1080p.BluRay.x264-W4F[rarbg]'
'[Anime Time] Bocchi the Rock! (Season 1) [BD] [1080p][HEVC 10bit x265][AAC][Multi Sub] [Batch]'
'【Coding】anime girls becoming programmers ｜ VTuber Cyan w⧸@HoshinoLina [HqgXUGErF_8].webm'
'[Comicat&LP-Raws] Yosuga no Sora [1080p][AVC AAC][CHS]'
'[DB]Oshi no Ko(Dual Audio_10bit_1080p_x265)'
'Fight Club (1999) [1080p]'
'Frieren Beyond Journey'\''s End [WEB 1080p HEVC AAC] [Dual Audio-EngSubs] (Batch)'
'Grand Theft Auto - San Andreas'
 h
'Her (2013) [1080p]'
'Ikiru (1952) 720p BluRay Criterion.x264 SUJAIDR'
'Inception (2010) [1080p]'
'Indie Game: The Movie'
'[MiniMTBB] BanG Dream! It'\''s MyGO!!!!! (BD 1080p)'
'[Nekomoe kissaten&LoliHouse] GIRLS BAND CRY [WebRip 1080p HEVC-10bit AAC ASSx2]'
 Screencasts
'Super Bunny Man v1.0.1 by Pioneer'
'The Godfather (1972) [1080p]'
'The Good The Bad And The Ugly (1966) [1080p]'
 The.Hunt.2012.720p.BluRay.x264-x0r
'Your.Name.2016.1080p.BluRay.x264-HAiKU[EtHD]'
'天空之城 Castle in the sky(1986)'
'年少日记 (2023)'
'幸运星 Lucky Star(2007)日英粤三语版[BDRIP][1920x1080][TV24+OVA+NCOP+SP][x264_m4a][8bit]加刘景长压制'
'[异域-11番小队][凉宫春日的忧郁2009 Suzumiya_Haruhi_no_Yuuutsu_2009][1-28][BDRIP][720P][X264-10bit_AAC]'
```

---

Below is a **hard-coded Bash script** that renames only **movies + anime / TV / bangumi folders** from your listing.
I keep existing non-English titles where present, **always include an English title**, and normalize to:

```
Title (Year)
Other Lang Title English Title (Year)
```

I **do not touch** games, random videos, or unrelated folders.

You can save this as e.g. `rename_videos.sh`, `chmod +x` it, and run it in `~/Videos`.

---

### What this script does

- Uses **explicit `mv -n`** (no overwrite)
- Quotes everything safely
- Only renames items you listed
- Movies + anime / TV only
- English title always present

---

### Script

```bash
#!/usr/bin/env bash
set -e

# Movies

mv -n \
  '5.Centimeters.Per.Second.2007.1080p.BluRay.x264-W4F[rarbg]' \
  '5 Centimeters per Second (2007)'

mv -n \
  'Fight Club (1999) [1080p]' \
  'Fight Club (1999)'

mv -n \
  'Her (2013) [1080p]' \
  'Her (2013)'

mv -n \
  'Ikiru (1952) 720p BluRay Criterion.x264 SUJAIDR' \
  'Ikiru (1952)'

mv -n \
  'Inception (2010) [1080p]' \
  'Inception (2010)'

mv -n \
  'Indie Game: The Movie' \
  'Indie Game The Movie (2012)'

mv -n \
  'The Godfather (1972) [1080p]' \
  'The Godfather (1972)'

mv -n \
  'The Good The Bad And The Ugly (1966) [1080p]' \
  'The Good the Bad and the Ugly (1966)'

mv -n \
  'The.Hunt.2012.720p.BluRay.x264-x0r' \
  'The Hunt (2012)'

mv -n \
  'Your.Name.2016.1080p.BluRay.x264-HAiKU[EtHD]' \
  'Your Name (2016)'

mv -n \
  '年少日记 (2023)' \
  '年少日记 Time Still Turns the Pages (2023)'


# Anime / TV / Bangumi

mv -n \
  '[Anime Time] Bocchi the Rock! (Season 1) [BD] [1080p][HEVC 10bit x265][AAC][Multi Sub] [Batch]' \
  'Bocchi the Rock! (2022)'

mv -n \
  '[Comicat&LP-Raws] Yosuga no Sora [1080p][AVC AAC][CHS]' \
  'Yosuga no Sora (2010)'

mv -n \
  '[DB]Oshi no Ko(Dual Audio_10bit_1080p_x265)' \
  'Oshi no Ko (2023)'

mv -n \
  'Frieren Beyond Journey'\''s End [WEB 1080p HEVC AAC] [Dual Audio-EngSubs] (Batch)' \
  'Frieren Beyond Journey’s End (2023)'

mv -n \
  '[MiniMTBB] BanG Dream! It'\''s MyGO!!!!! (BD 1080p)' \
  'BanG Dream! It’s MyGO!!!!! (2023)'

mv -n \
  '[Nekomoe kissaten&LoliHouse] GIRLS BAND CRY [WebRip 1080p HEVC-10bit AAC ASSx2]' \
  'Girls Band Cry (2024)'

mv -n \
  '天空之城 Castle in the sky(1986)' \
  '天空之城 Castle in the Sky (1986)'

mv -n \
  '幸运星 Lucky Star(2007)日英粤三语版[BDRIP][1920x1080][TV24+OVA+NCOP+SP][x264_m4a][8bit]加刘景长压制' \
  '幸运星 Lucky Star (2007)'

mv -n \
  '[异域-11番小队][凉宫春日的忧郁2009 Suzumiya_Haruhi_no_Yuuutsu_2009][1-28][BDRIP][720P][X264-10bit_AAC]' \
  '凉宫春日的忧郁 The Melancholy of Haruhi Suzumiya (2009)'

echo "Done."
```

---

If you want next:

- season subfolders (`Season 1`, `Season 2`)
- episode file renaming
- separating **Movies / Anime / TV** into parent folders
- dry-run mode

just say 👍
