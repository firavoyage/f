<!-- https://chatgpt.com/c/6966617b-45d0-832a-89c9-e6e064b75132 -->

# 0

on ubuntu with ffmpeg already installed, make them mp3.

no need to backup. i already have one.

keep album art. singer and album are both "kessoku band".

remove stuff like `[BN1ofrqIl9I]`

```
fira@Fira ~/Music/kessoku band
 % ls
'Blue Spring and Western Sky [BN1ofrqIl9I].webm'
'Blue Spring and Western Sky -Fixed Star- Concert version [RQ5-JomfrDM].webm'
'Blue Spring and Western Sky-instrumental- [BGtGRP73iR4].webm'
'Bundle up your dreams [10G-lFzexd0].webm'
'Bundle up your dreams -We will B- Live version [515f0fBFYvU].webm'
'Chronostasis [UlCjySjkblI].webm'
'Chronostasis -We will B- Live version [xlH2UGoxY-o].webm'
'Distortion!! [5RSHNMkKGLs].webm'
'Distortion!! [c7oexOKsP6c].webm'
'Distortion!! -Fixed Star- Concert version [2hHSCUZZXfY].webm'
'Distortion!! -We will B- Live version [kb8m5H0Qd_I].webm'
'Doppelganger [UEwjYcGe0WU].webm'
'Doppelganger -We will B- Live version [3-XTzmzm_1Y].webm'
'Doppelganger [Yq7e_AY0dnk].webm'
'Flashbacker [ecVnw_SiREQ].webm'
'Flashbacker -Fixed Star- Concert version [KsV6rlILeWI].webm'
'Flashbacker -We will B- Live version [p8DvZVOU9-w].webm'
'Guitar, Loneliness and Blue Planet -Fixed Star- Concert version [xTiBZDtGhBY].webm'
'Guitar, Loneliness and Blue Planet [fYBQJfPBmRg].webm'
'Guitar, Loneliness and Blue Planet [SDk1RA4g8CA].webm'
'Guitar, Loneliness and Blue Planet -We will B- Live version [JdJEXx0a_rA].webm'
'hitoribocchi tokyo [7TovqLDCosk].webm'
'hitoribocchi tokyo -Fixed Star- Concert version [hz3iINr0j80].webm'
'hitoribocchi tokyo-instrumental- [xnZPfFayumM].webm'
'hitoribocchi tokyo [MSnLgdQFk1c].webm'
'hitoribocchi tokyo -We will B- Live version [5sr0YCdeJnc].webm'
'I can'\''t sing a love song -Fixed Star- Concert version [aqswvs9kycE].webm'
'I can'\''t sing a love song [vW9d8-8gm7o].webm'
'I don'\''t... -We will B- Live version [SVE5bdrZ30M].webm'
'If I could be a constellation -Fixed Star- Concert version [Pww87gXZ2rs].webm'
'If I could be a constellation [-LwBbLa_Vhc].webm'
'If I could be a constellation [rXRvs_FrwEk].webm'
'If I could be a constellation -We will B- Live version [gepTF-rOdGw].webm'
'into the light -Fixed Star- Concert version [MWdKpwbLqFI].webm'
'Into the Light-instrumental- [0hT6O6hQVnw].webm'
'Into the Light [omckrS77vDo].webm'
'into the light -We will B- Live version [ObkiamAzJe8].webm'
'Karakara [3RWMMNsULsA].webm'
'Karakara -Fixed Star- Concert version [PiZIh5oADW0].webm'
'Karakara [IwHwv-lcxi4].webm'
'Karakara -We will B- Live version [wNbKZnSp6Yc].webm'
'Me and the three primary colors [nPRzbUSmWg0].webm'
'Me and the three primary colors -We will B- Live version [He0j8qLr3hQ].webm'
'milky way [LaZIDFaobMU].webm'
'milky way -We will B- Live version [w00Yfcqoppk].webm'
'Never forget [8Selo-P1Ovc].webm'
'Never forget -Fixed Star- Concert version [2PtglIf26r0].webm'
'Never forget -We will B- Live version [Fql-Oj-dB0M].webm'
'Never forget [yiHexptwQ2Q].webm'
'Now, I'\''m going from underground [_7e9h2qZ9dA].webm'
'Now, I'\''m going from underground [mt4on5DnMw4].webm'
'Now, I'\''m going from underground -We will B- Live version [HcpELKdsYZM].webm'
'Planet [LlM2gtxsDx0].webm'
'Re：Re： [PiIAVnFX2eo].webm'
'Re：Re： [_pimAWZlhDU].webm'
'Re：Re： -We will B- Live version [AGE9OOQ1Qr0].webm'
'Rockn'\'' Roll, Morning Light Falls on You [E5O0mCrUdAM].webm'
'Rockn'\'' Roll, Morning Light Falls on You -Fixed Star- Concert version [FiuAgYQY4BM].webm'
'Rockn'\'' Roll, Morning Light Falls on You [H7ZyZdqLb5Q].webm'
'Rockn'\'' Roll, Morning Light Falls on You -We will B- Live version [5gj6QjA6ImU].webm'
'Secret base -Fixed Star- Concert version [Ewk1JTcD5_M].webm'
'Secret base [ztF1ru7LEzs].webm'
'seisyun complex [7FDRQifEMUQ].webm'
'seisyun complex -Fixed Star- Concert version [17c2E6Hjfrs].webm'
'seisyun complex [Gc3NKC8TQtY].webm'
'seisyun complex-instrumental- [aPce0Uqw9j4].webm'
'seisyun complex [RWFW1OSlMkM].webm'
'seisyun complex -We will B- Live version [c3RGyJPUUBQ].webm'
'Shine as usual [se8QSfrD49I].webm'
'Shine as usual [SGzcrWL_xgk].webm'
'Shine as usual -We will B- Live version [SQpRqa5ouLo].webm'
'That band -Fixed Star- Concert version [Kgz4vurwDfQ].webm'
'That band [MtuFP3Tl1kE].webm'
'That band [q-bCp4MxuYU].webm'
'That band -We will B- Live version [6-mkDvQi9uY].webm'
'The Little Sea -Fixed Star- Concert version [0XJaBOTIXhU].webm'
'The Little Sea [NF8c5pXx-Xc].webm'
'UNITE [FnhedPLxksQ].webm'
'UNITE -We will B- Live version [MAiv4YSvZxc].webm'
'wandering star -We will B- Live version [I_hdlXYe550].webm'
'What is wrong with [BVvcQ4ge8Ow].webm'
'What is wrong with -Fixed Star- Concert version [yMNDkbkG0iE].webm'
'What is wrong with [h1uTWpCySRo].webm'
'What is wrong with -We will B- Live version [oaAprghiigA].webm'
```

---

Nice — here's a ready-to-run script that will:

- convert every `.webm` in the current directory to `.mp3` (replacing the video with mp3 audio),
- remove bracketed IDs like ` [BN1ofrqIl9I]` from the title/filename,
- set ID3 artist and album to `kessoku band`,
- try to extract a frame/attached image from the source and embed it as the MP3 cover (if found),
- **no backups** (you said you already have one).

Save this as `convert_kessoku.sh` in `~/Music/kessoku\ band` (or run it there) and execute it.

```bash
#!/usr/bin/env bash
set -euo pipefail

# Change bitrate if you want
BITRATE="192k"

shopt -s nullglob

for f in *.webm; do
  echo
  echo "Processing: $f"

  base="${f%.*}"

# remove all [...] blocks and collapse spaces, trim ends
  clean="$(echo "$base" | sed -E 's/ *\[[^]]*\]//g' | sed -E 's/^[[:space:]]+|[[:space:]]+$//g' | sed -E 's/[[:space:]]+/ /g')"

# safe output filename
  out="${clean}.mp3"

# temporary cover file
  cover="/tmp/cover_$$.jpg"
  rm -f "$cover"

# Try to extract a frame/attached picture. This will succeed for files with video or attached picture.
# Use -vframes 1 to get a single image; quieter output with -loglevel error
  ffmpeg -y -loglevel error -i "$f" -an -vframes 1 -q:v 2 "$cover" 2>/dev/null || true

  if [[ -s "$cover" ]]; then
    echo "  -> embedding extracted cover into '$out'"
    ffmpeg -y -loglevel error -i "$f" -i "$cover" \
      -map 0:a -map 1 \
      -c:a libmp3lame -b:a "$BITRATE" \
      -c:v mjpeg \
      -id3v2_version 3 \
      -metadata title="$clean" \
      -metadata artist="kessoku band" \
      -metadata album="kessoku band" \
      -metadata:s:v title="Album cover" \
      -metadata:s:v comment="Cover (front)" \
      "$out"
  else
    echo "  -> no cover found; encoding without cover to '$out'"
    ffmpeg -y -loglevel error -i "$f" -vn \
      -c:a libmp3lame -b:a "$BITRATE" \
      -metadata title="$clean" \
      -metadata artist="kessoku band" \
      -metadata album="kessoku band" \
      "$out"
  fi

  rm -f "$cover"
done

echo
echo "Done."
```

How to run:

1. `cd ~/Music/kessoku\ band`
2. `chmod +x convert_kessoku.sh`
3. `./convert_kessoku.sh`

Notes / edge-cases:

- This script re-encodes audio to MP3 (`libmp3lame`) at 192 kb/s by default. Change `BITRATE` if you want higher/lower quality.
- The cover extraction grabs the first video frame or attached picture; if the video is long it may be a black frame for some files — you can change the ffmpeg extraction to grab a frame at e.g. 5 seconds by replacing the extract command with:
  `ffmpeg -y -loglevel error -ss 00:00:05 -i "$f" -an -vframes 1 -q:v 2 "$cover"`
- Filenames with spaces, apostrophes, etc. are handled.
- If a source already has an embedded album picture stream (attached_pic), ffmpeg will extract and embed it.

If you want, I can:

- tweak bitrate,
- set other tags (year, genre, comment),
- make the script put mp3 files into a separate folder,
- or run a stricter filename-cleaning rule (e.g. remove `-We will B- Live version`) — tell me which and I’ll produce the variant.
