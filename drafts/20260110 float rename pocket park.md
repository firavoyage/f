<!-- https://chatgpt.com/c/6961f06d-e85c-8332-8c1e-354c4d1590f6 -->

# 0

name them properly and convert to mp3. no backup needed.

```
fira@Fira ~/Music/POCKET PARK % ls
'Cryin'\'' [SO0FFrDKjqY].webm'
'His Woman [AGYseGznXvs].webm'
'It'\''s So Creamy [m3KOq-zxWaE].webm'
'Manhattan Wind [1CMf0RjxB_I].webm'
'Mind Game [DBFbnAG0qzM].webm'
'That'\''s All [S1zpUGO7m9M].webm'
'Trouble Maker [HIrNrAFTnHo].webm'
'そうして私が [_dFiflZahXE].webm'
'偽りのない日々 [-mHKHPMefn0].webm'
'愛はエネルギー [IzUlP07FSHU].webm'
'真夜中のドア⧸Stay With Me [BBj3SCImk_A].webm'
'真夜中のドア⧸Stay With Me (Original club mix) [LnxK1QDw8yw].webm'
```

---

Here’s a straightforward way to do it in-place: strip the YouTube ID part (`[XXXXXXXXXXX]`), convert to MP3, and delete the originals. No backups.

This assumes you have `ffmpeg` installed.

```bash
for f in *.webm; do
  base="${f% \[*].webm}"
  ffmpeg -loglevel error -i "$f" -vn -c:a libmp3lame -q:a 0 "$base.mp3" && rm "$f"
done
```

What this does:

- `"$f"` handles spaces, quotes, and Japanese characters safely
- `${f% \[*].webm}` removes the space + bracketed ID + `.webm`
- `-q:a 0` gives high-quality V0 MP3
- `rm "$f"` deletes the original only if conversion succeeds

Resulting filenames will be clean, e.g.:

- `Cryin'.mp3`
- `真夜中のドア⧸Stay With Me.mp3`
- `愛はエネルギー.mp3`

If you want a different bitrate or format tweak, say so.
