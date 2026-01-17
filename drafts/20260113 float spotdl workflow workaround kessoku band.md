<!-- https://chatgpt.com/c/69665352-e378-832b-9bc4-b49896ae764f -->

<!-- final decision: switch to hk node (idk why yt blocks my japan node), yt dlp https://music.youtube.com/playlist?list=OLAK5uy_k7TJ4s-BULJcpMb3Xk5K9AJxGpKtbsuU8, bitmagnet (worked, many seeders, take hours maybe, but not needed) -->

# .

```sh
spotdl download "SPOTIFY_ALBUM_URL" --output "{album}/{track_number} - {title}.{ext}"
```

<!-- https://chatgpt.com/c/69665352-e378-832b-9bc4-b49896ae764f -->

# 0 (download in album named folder with spotify)

on ubuntu with spotdl, how to put songs into a folder named the same as the album with a given link

---

Yes — you can download **Spotify tracks/albums/playlists** on **Ubuntu** with **spotdl** and have them saved into a folder named after the **album**. Here’s how to do that.

---

## ✅ 1. Install / Update spotdl

If you haven’t installed spotdl yet:

```bash
pip install --upgrade spotdl
```

Or if using Python module form:

```bash
python3 -m pip install --upgrade spotdl
```

Make sure `ffmpeg` is installed too:

```bash
sudo apt install ffmpeg
```

(Needed for audio conversion & tagging.) ([SpotDL][1])

---

## ✅ 2. Download an Album into a Folder Named After the Album

Spotdl can use an **output template** that automatically names folders based on metadata like album names.

Here’s the simplest working command:

```bash
spotdl download "SPOTIFY_ALBUM_URL" --output "{album}/{track_number} - {title}.{ext}"
```

Replace:

- `"SPOTIFY_ALBUM_URL"` — the actual Spotify album link.
- The part after `--output` with your desired naming format.

This will create a directory named exactly like the album (using metadata) and put each track inside it with the pattern you chose. ([spotDL][2])

Example:

```bash
spotdl download "https://open.spotify.com/album/xxxxxxxxxxxxx" --output "{album}/{track_number} - {title}.{ext}"
```

This gives you:

```
./<Album Name>/
    01 - First Song.mp3
    02 - Second Song.mp3
    …
```

---

## 🔧 Custom Output Templates

You can customize the output pattern depending on how you want:

| Template                                 | Folder / File Structure |
| ---------------------------------------- | ----------------------- |
| `{album}/{title}.{ext}`                  | `Album Name/Song.mp3`   |
| `{artist}/{album}/{title}.{ext}`         | `Artist/Album/Song.mp3` |
| `{album}/{track_number} - {title}.{ext}` | `Album/01 - Song.mp3`   |
| `{album} - {year}/{title}.{ext}`         | `Album - 2025/Song.mp3` |

You can mix variables like `{artist}`, `{album}`, `{track_number}`, `{title}`, etc. ([spotDL][2])

---

## 📂 3. Specify a Base Download Folder

If you want all downloads somewhere specific:

```bash
spotdl download "URL" --output "/home/youruser/Music/{album}/{track_number} - {title}.{ext}"
```

Or relative:

```bash
spotdl download "URL" --output "Music/{album}/{title}.{ext}"
```

This ensures all albums go under `Music/` with correct album folders. ([spotDL][2])

---

## 🧠 Notes & Tips

✅ If you download a **single track** with an album template, it _still_ creates the album folder (because it uses metadata).
🚫 There's no built-in spotdl flag that _only_ creates a folder when multiple songs exist — that’s a feature request in the project’s repo. ([GitHub][3])

If you want additional organization (like artist > album > songs), just expand your output template accordingly.

---

## 📌 Example Summary

### Download album with album name folder

```bash
spotdl download "https://open.spotify.com/album/XXXX" --output "{album}/{track_number} - {title}.{ext}"
```

### Download into specific base directory

```bash
spotdl download "https://open.spotify.com/album/XXXX" --output "/home/you/Music/{album}/{track_number} - {title}.{ext}"
```

---

If you want, I can also help you **generate a script** that automatically batches multiple album links and organizes them neatly. Want that?

[1]: https://spotdl.github.io/spotify-downloader/installation/?utm_source=chatgpt.com "Installation - spotDL"
[2]: https://spotdl.readthedocs.io/en/dev/usage/?utm_source=chatgpt.com "Usage examples - spotDL"
[3]: https://github.com/spotDL/spotify-downloader/issues/1265?utm_source=chatgpt.com "Add option to automatically create output folder based on playlist or album name. · Issue #1265 · spotDL/spotify-downloader · GitHub"

# 1 (workaround without spotify api, with browser)

facing rate limit, given spotify dev api key creation is closed now, how could i use another method to workaround with spotdl, like browser automation or passing the exact song metadata myself

---

You’re running into **Spotify API rate limits when spotDL tries to fetch metadata** — and since **Spotify has closed easy dev API key creation**, that makes the normal authenticated method much harder to use directly. spotDL _can_ run without an API key in many cases, but it will hit limits quickly if it tries to fetch a lot of metadata. ([SpotDL][1])

Here are practical ways to **work around rate limits** on Ubuntu using spotDL (without a Spotify dev key):

---

## 🛠️ 1. Use spotDL _without_ relying on the Spotify API

spotDL’s main job is to **get metadata from Spotify** and then download audio from YouTube, so:

✅ **SpotDL has built‑in (no API key) metadata support.**
Older versions work without setting a client ID/secret at all (handled internally). ([PyPI][2])

💡 Only metadata calls that trigger the official API will count toward rate limits — so reduce or eliminate those calls (see below).

---

## 🧠 2. Minimize/Cache Metadata Requests

When you download many tracks, spotDL by default queries Spotify for metadata:

✔️ **Use caching** so metadata isn’t fetched repeatedly:

```
spotdl download <link> --use-cache-file --no-cache
```

(or the opposite, keep/cache it — spotDL caches data in `~/.spotdl/.spotify_cache`)
Caching can cut down repeated Spotify hits dramatically. ([SpotDL][3])

⏳ If you still hit limits, build a **local cache yourself** by generating metadata once and re‑using it (see next section).

---

## 📦 3. Pre‑Provide Metadata to spotDL

If rate limits are blocking metadata fetches, one workaround is:

### **Generate a local metadata file first**

Instead of letting spotDL fetch from Spotify, you can provide your own metadata file (a JSON list of tracks with artist/title/album, etc.) and then tell spotDL to use that — so Spotify API isn’t hit at all.

spotDL supports supplying metadata rather than a Spotify URL:

```bash
spotdl download "Artist - Song Name" --search-query "{artist} {title}"
```

This uses **a search term instead of Spotify metadata**, so Spotify API is not used, and YouTube is used to find the audio. ([SpotDL][1])

▶ You can automate this by scripting generation of these search queries from a text file.

---

## 🧪 4. Browser Automation to Fetch Metadata

If you **still need full metadata** (album art, track numbers, etc.) you can:

### **Use a headless browser (e.g., Puppeteer / Selenium)**

1. Open Spotify’s web player.
2. Log in.
3. Navigate to the album/playlist.
4. Extract track metadata directly from the HTML/JS (artist name, track title, album name, durations, etc.).

This data comes from the **same JSON embedded in Spotify’s web UI**, so no API key is needed and it doesn’t count against API limits.
You’d then feed that exact metadata into spotDL like:

```bash
spotdl download "Artist - Song Name" --output "{album}/{track_number} - {title}.{ext}"
```

#### **Browser Automation Example (Python + Selenium)**

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)

url = "https://open.spotify.com/album/...your album link..."
driver.get(url)

tracks = driver.execute_script("""
  return window.__APP_STATE__?.pages?.collection?.tracks || [];
""")
for t in tracks:
    print(t["artist"], "-", t["name"])
```

Then generate a text file with `Artist - Title` and use that with spotDL.

> Note: This is more complex but avoids API limits entirely.

---

## 📈 5. Throttle or Respect Retry Headers

If you do use endpoints that rate limit:

✔ Respect `Retry‑After` headers and wait before retrying (standard best practice for 429s). ([Spotify Community][4])

This doesn’t remove the limit, but ensures your script _backs off_ rather than failing.

---

## 🧠 Summary of Workarounds

| Goal                      | Method                                                  | Avoids API Limit? |
| ------------------------- | ------------------------------------------------------- | ----------------- |
| Download songs            | Tell spotDL to use search terms instead of Spotify URLs | ✔️                |
| Download albums/playlists | Extract metadata via browser automation                 | ✔️                |
| Reduce repeated API calls | Use caching / avoid metadata fetch                      | ⚠️                |
| Still use some API        | Backoff + respect Retry‑After                           | ⚠️                |

---

## 📌 Final Practical Commands

**Download with no API calls:**

```bash
spotdl download "Artist - Song Name" --output "{album}/{track_number} - {title}.{ext}"
```

**Batch from text list:**

```bash
cat songs.txt | xargs -I{} spotdl download "{}" --output "Music/{album}/{track_number} - {title}.{ext}"
```

Where `songs.txt` contains lines like:

```
The Weeknd - Blinding Lights
Bad Bunny - Tití Me Preguntó
```

---

## ⚠️ Legal & Ethical Note

spotDL downloads _audio from YouTube_ based on metadata and does not redistribute Spotify content directly.
Downloading copyrighted material without proper rights may violate terms of service or laws.

---

If you want, I can give you a **ready‑to‑run script** (Python/Bash) that automates metadata extraction from Spotify’s web UI and feeds it into spotDL — just tell me your use case!

[1]: https://spotdl.github.io/spotify-downloader/?utm_source=chatgpt.com "spotDL"
[2]: https://pypi.org/project/spotdl/2.1.0/?utm_source=chatgpt.com "spotdl · PyPI"
[3]: https://spotdl.github.io/spotify-downloader/usage/?utm_source=chatgpt.com "Usage examples - spotDL"
[4]: https://community.spotify.com/t5/Spotify-for-Developers/Getting-rate-limited-with-Spotify-Web-API-despite-using/td-p/7034479?utm_source=chatgpt.com "Solved: Getting rate-limited with Spotify Web API despite ... - The Spotify Community"

# 2 (create sh script without clarity)

create a script for these

```
<div role="presentation" style="transform: translateY(0px);"><div role="presentation"><div role="row" aria-rowindex="2" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">1</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play 青春コンプレックス by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/60nwK1iMgnFCznF6FiNfts" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">青春コンプレックス</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:23</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for 青春コンプレックス by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="3" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">2</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play ひとりぼっち東京 by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/1ZFnNl8O8zd4mef77SAd91" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">ひとりぼっち東京</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:52</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for ひとりぼっち東京 by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="4" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">3</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play Distortion!! by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/3l8rIBKJUDQFqQfKvcpQ1w" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">Distortion!!</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:23</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for Distortion!! by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="5" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">4</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play ひみつ基地 by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/6P0RocRd21jJxs3E9vQoNH" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">ひみつ基地</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:52</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for ひみつ基地 by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="6" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">5</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play ギターと孤独と蒼い惑星 by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/1rgncjmlpHMP3DBhpagyVb" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">ギターと孤独と蒼い惑星</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:48</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for ギターと孤独と蒼い惑星 by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="7" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">6</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play ラブソングが歌えない by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/5e9Pocvg3lRkVAsAKeiNio" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">ラブソングが歌えない</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:08</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for ラブソングが歌えない by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="8" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">7</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play あのバンド by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/4Ji17AjAdjf83FsIDcXe0J" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">あのバンド</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:33</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for あのバンド by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="9" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">8</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play カラカラ by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/1ofAXq6xfHjn6ZUxdsY3YW" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">カラカラ</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">4:25</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for カラカラ by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="10" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">9</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play 小さな海 by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/54SWXjFN2XYo3G5YiNSCqd" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">小さな海</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:43</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for 小さな海 by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="11" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">10</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play なにが悪い by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/2Ifn0MXm7x9ddBQPUabV9a" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">なにが悪い</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:47</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for なにが悪い by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="12" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">11</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play 忘れてやらない by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/5ISHFvPLUqKz2JfDRtwnb2" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">忘れてやらない</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">3:43</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for 忘れてやらない by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="13" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">12</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play 星座になれたら by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/1iNhNmEwrd2TP4XrV7pQBI" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">星座になれたら</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">4:18</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for 星座になれたら by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="14" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">13</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play フラッシュバッカー by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/2qdPWFrknWyLXYIPpbtAgD" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">フラッシュバッカー</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">4:35</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for フラッシュバッカー by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div><div role="presentation"><div role="row" aria-rowindex="15" aria-selected="false"><div data-testid="tracklist-row" class="UhOLa3blz2xoAxM2vRwz vzvX6wzymW8rwI4hkYo0" draggable="true" role="presentation"><div class="ZC9Da494kc24m9FG64Pf" role="gridcell" aria-colindex="1"><div class="UUe_W_6spimNc8vpdEEO"><span class="e-91000-text encore-text-body-medium YCOwZBWtN6TZawPOEVI9" data-encore-id="text">14</span><button class="y3wrMu2sPRR2DCdEpWlg" aria-label="Play 転がる岩、君に朝が降る by kessoku band" tabindex="-1"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline Kr4801wRGuXxFUsKb1sU" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></button></div></div><div class="J_3tQnLWkbEcYffbaUL4" role="gridcell" aria-colindex="2"><div class="hb8C1VAjyUg0VMxrwpix"><a draggable="false" class="eYJgrgW01l7dHKuMJidG" data-testid="internal-track-link" href="/track/6wH2RsJUO8oypx8c5PG0bP" tabindex="-1"><div class="e-91000-text encore-text-body-medium encore-internal-color-text-base eYJgrgW01l7dHKuMJidG standalone-ellipsis-one-line" data-encore-id="text" dir="auto">転がる岩、君に朝が降る</div></a><span class="e-91000-text encore-text-body-small encore-internal-color-text-subdued ET4SVjxyjH4WkA3kSo5G standalone-ellipsis-one-line" data-encore-id="text"><span class="e-91000-text encore-text-body-small" data-encore-id="text"><a draggable="true" dir="auto" href="/artist/2nvl0N9GwyX69RRBMEZ4OD" tabindex="-1">kessoku band</a></span></span></div></div><div class="qszimzwbM7AdyZGTvofd" role="gridcell" aria-colindex="3"><button aria-checked="false" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed Up3ALJRog0ejdGp8Bbyo" aria-label="Add to Liked Songs" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75"></path></svg></span></button><div class="e-91000-text encore-text-body-small encore-internal-color-text-subdued Q4mk1oUBywa1PuZZZ0Mr" data-encore-id="text">4:31</div><button aria-haspopup="menu" data-testid="more-button" class="Button-sc-1dqy6lx-0 eugRpk e-91000-overflow-wrap-anywhere e-91000-button-tertiary--icon-only e-91000-button-tertiary--condensed zeEKLLKAQgCfbY6qzb9A" aria-label="More options for 転がる岩、君に朝が降る by kessoku band" data-encore-id="buttonTertiary" tabindex="-1"><span aria-hidden="true" class="e-91000-button__icon-wrapper"><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16" style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></span></button></div></div></div></div></div>
```

---

Nice — below is a ready-to-run Python script that does exactly what you asked:

- parses the **Spotify web page HTML** you pasted (or any similar Spotify album page HTML saved to a file),
- extracts track number, title and artist,
- uses `spotdl` to download each track **using a search query** (so it avoids calling Spotify API),
- moves/renames each downloaded file into a folder named after the album and prefixes files with the track number.

Save this as `spotify_html_to_spotdl.py` and run it on Ubuntu.

---

## Script: `spotify_html_to_spotdl.py`

```python
#!/usr/bin/env python3
"""
spotify_html_to_spotdl.py

Usage examples:
# parse saved spotify album html and download into ~/Music/<Album>/
  python3 spotify_html_to_spotdl.py --html album.html --output-dir ~/Music --dry-run

# actually download (remove --dry-run)
  python3 spotify_html_to_spotdl.py --html album.html --output-dir ~/Music

Requirements:
  - Python 3.8+
  - pip install beautifulsoup4 lxml
  - spotdl available on PATH (`pip install --upgrade spotdl`)
  - ffmpeg installed (apt: sudo apt install ffmpeg)

What it does:
  - parses the provided HTML to extract track list rows (data-testid="tracklist-row")
  - creates a temporary folder and calls `spotdl download "Artist - Title" --output "{title}.{ext}"`
  - finds the produced file, moves it into OUTPUT_DIR/<Album> and renames it to "NN - Title.ext"
  - sleeps between downloads to reduce rapid-fire requests
"""
import argparse
import subprocess
import sys
import os
import json
import shutil
import time
import random
import glob
import unicodedata
from pathlib import Path
from bs4 import BeautifulSoup

def normalize_text(x: str) -> str:
    if x is None:
        return ""
    x = x.strip()
    x = unicodedata.normalize("NFKC", x)
    return x

def sanitize_filename(name: str) -> str:
# remove slashes and control chars
    name = name.replace("/", "／").replace("\\", "＼")
    name = "".join(c for c in name if ord(c) >= 32)
    return name

def parse_spotify_album_html(html_path: Path):
    """Return dict: {'album': str_or_None, 'tracks': [{track_number, title, artist, href, duration}, ...]}"""
    text = html_path.read_text(encoding="utf-8", errors="ignore")
    soup = BeautifulSoup(text, "lxml")

# Try album name from og:title or <title>
    album = None
    og = soup.find("meta", property="og:title")
    if og and og.get("content"):
        album = normalize_text(og["content"])
    if not album and soup.title and soup.title.string:
        album = normalize_text(soup.title.string)

    tracks = []
# Spotify rows often include data-testid="tracklist-row"
    rows = soup.find_all(attrs={"data-testid": "tracklist-row"})
    if not rows:
# fallback: look for anchors to /track/
        rows = soup.find_all("a", href=lambda h: h and "/track/" in h)

    for idx, row in enumerate(rows, start=1):
        try:
# row may be the outer div or the anchor
# find title anchor
            a = row.find("a", attrs={"data-testid": "internal-track-link"})
            if not a:
# maybe row is anchor itself
                a = row if row.name == "a" and "/track/" in (row.get("href") or "") else None
            title = None
            href = None
            if a:
                href = a.get("href", "").strip()
# title text is often in a child div with standalone-ellipsis-one-line
                title_div = a.find("div")
                title = title_div.get_text(strip=True) if title_div else a.get_text(strip=True)
# artist: look for artist anchor inside the row (href contains /artist/)
            artist_a = row.find("a", href=lambda h: h and "/artist/" in h)
            artist = artist_a.get_text(strip=True) if artist_a else None

# track number: try the first column's span
            track_num = None
# find first span that looks numeric
            possible_nums = row.find_all("span")
            for s in possible_nums:
                txt = s.get_text(strip=True)
                if txt.isdigit():
                    track_num = int(txt)
                    break
            if track_num is None:
                track_num = idx

# duration: try to find a small text cell in the row with mm:ss pattern
            duration = None
            import re
            mmss = row.find(text=re.compile(r"^\d+:\d\d$"))
            if mmss:
                duration = mmss.strip()

            tracks.append({
                "track_number": track_num,
                "title": normalize_text(title) if title else None,
                "artist": normalize_text(artist) if artist else None,
                "href": href,
                "duration": duration
            })
        except Exception as e:
            print("Warning parsing a row:", e, file=sys.stderr)
            continue

    return {"album": album, "tracks": tracks}


def run_spotdl_for_track(search_query: str, temp_dir: Path, dry_run: bool=False):
    """Call spotdl download "search_query" --output "{title}.{ext}" in temp_dir.
       Return path to downloaded file or None on failure.
    """
    out_template = "{title}.{ext}"
    cmd = ["spotdl", "download", search_query, "--output", out_template]
    print("> running:", " ".join(shlex_quote(c) for c in cmd))
    if dry_run:
        return None
# run in temp dir
    try:
        res = subprocess.run(cmd, cwd=str(temp_dir), stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, check=False)
    except FileNotFoundError:
        raise RuntimeError("spotdl not found. Install it with: pip install --upgrade spotdl")

    stdout = res.stdout or ""
# spotdl typically writes one file with the song title as basename; find newest file in temp_dir
    files = list(temp_dir.glob("*"))
    if not files:
        print("spotdl produced no files. Output:\n", stdout)
        return None
# choose the file most recently modified
    files_sorted = sorted(files, key=lambda p: p.stat().st_mtime, reverse=True)
    chosen = files_sorted[0]
    return chosen

def shlex_quote(s: str) -> str:
# simple quoting for printing
    import shlex
    return shlex.quote(s)

def main():
    parser = argparse.ArgumentParser(description="Parse Spotify album HTML, download tracks via spotdl (search queries) and organize into Album folder.")
    parser.add_argument("--html", "-i", type=Path, required=True, help="Path to saved Spotify album HTML (the snippet you pasted).")
    parser.add_argument("--output-dir", "-o", type=Path, default=Path.cwd(), help="Base output directory (default: current dir).")
    parser.add_argument("--album-name", "-a", type=str, default=None, help="Album name override. If omitted, script will try to extract album name from HTML.")
    parser.add_argument("--temp-dir", "-t", type=Path, default=None, help="Temporary dir for downloads. Default: <output-dir>/.spotdl_temp")
    parser.add_argument("--sleep-min", type=float, default=1.5, help="Min sleep between downloads (sec).")
    parser.add_argument("--sleep-max", type=float, default=3.5, help="Max sleep between downloads (sec).")
    parser.add_argument("--dry-run", action="store_true", help="Don't actually call spotdl; just print planned actions.")
    parser.add_argument("--no-rename", action="store_true", help="Don't rename/move files; keep spotdl's filenames.")
    args = parser.parse_args()

    if not args.html.exists():
        print("Error: HTML file not found:", args.html, file=sys.stderr)
        sys.exit(2)

    meta = parse_spotify_album_html(args.html)
    album = args.album_name or meta.get("album") or "Unknown Album"
    album = sanitize_filename(album)
    tracks = meta.get("tracks", [])
    if not tracks:
        print("No tracks found in HTML.", file=sys.stderr)
        sys.exit(1)

    base_out = args.output_dir.expanduser().resolve()
    album_dir = base_out / album
    temp_dir = args.temp_dir.expanduser().resolve() if args.temp_dir else (base_out / ".spotdl_temp")
    if not args.dry_run:
        temp_dir.mkdir(parents=True, exist_ok=True)
        album_dir.mkdir(parents=True, exist_ok=True)

    print(f"Album: {album} (tracks found: {len(tracks)})")
    print("Output folder:", album_dir)
    print("Temp folder:", temp_dir)
    print()

# Save metadata
    metadata_path = album_dir / "metadata.json"
    if not args.dry_run:
        with open(metadata_path, "w", encoding="utf-8") as fh:
            json.dump(meta, fh, ensure_ascii=False, indent=2)

# Process tracks sequentially
    for t in tracks:
        tn = t["track_number"]
        title = t["title"] or "Unknown Title"
        artist = t["artist"] or ""
# build search query - using artist/title is the safest to avoid Spotify API
        search_query = f"{artist} - {title}" if artist else title
        print(f"[{tn:02d}] {search_query}")

        if args.dry_run:
            print("  DRY RUN: would call spotdl and place into", album_dir)
            continue

# Clear temp dir before download
        for p in temp_dir.glob("*"):
            try:
                if p.is_file():
                    p.unlink()
                elif p.is_dir():
                    shutil.rmtree(p)
            except Exception:
                pass

        got_file = run_spotdl_for_track(search_query, temp_dir, dry_run=args.dry_run)
        if not got_file:
            print(f"  ❌ failed to download: {search_query}", file=sys.stderr)
# small backoff and continue
            time.sleep(random.uniform(args.sleep_min, args.sleep_max))
            continue

# Move/rename into album folder
        try:
# determine extension
            ext = got_file.suffix
            safe_title = sanitize_filename(title)
            new_name = f"{tn:02d} - {safe_title}{ext}" if not args.no_rename else got_file.name
            dest = album_dir / new_name
            shutil.move(str(got_file), str(dest))
            print(f"  ✅ downloaded -> {dest}")
        except Exception as e:
            print("  ❌ error moving/renaming file:", e, file=sys.stderr)

# polite sleep
        time.sleep(random.uniform(args.sleep_min, args.sleep_max))

    print("\nDone. Check the album folder:", album_dir)
    print("Metadata saved to:", metadata_path)

if __name__ == "__main__":
    main()
```

---

## How to use (step-by-step)

1. Save the HTML you posted into a file, e.g. `album.html`.
   (In your browser: Right click → Save page as → `album.html`.)

2. Install dependencies:

```bash
python3 -m pip install --user --upgrade spotdl beautifulsoup4 lxml
sudo apt install ffmpeg
```

3. Put the script in the same folder (or anywhere) and make it executable:

```bash
chmod +x spotify_html_to_spotdl.py
```

4. Dry-run first (will parse + show planned actions, won't call spotdl):

```bash
python3 spotify_html_to_spotdl.py --html album.html --output-dir ~/Music --dry-run
```

5. Real run (actually calls spotdl and downloads):

```bash
python3 spotify_html_to_spotdl.py --html album.html --output-dir ~/Music
```

Downloaded files will end up in `~/Music/<Album Name>/01 - Track Title.mp3`, etc.

---

## Notes, limitations & tips

- This script uses **spotdl search-based downloads** (no Spotify API calls), which avoids rate limits. Spotdl finds audio on YouTube; results can occasionally mismatch — manual checks recommended.
- If spotdl returns multiple tracks or fails to find a match, the script attempts to pick the most recent file created in the temp dir; this is heuristic and not perfect.
- If you want **exact metadata & album art** and avoid mismatches, the more robust route is to use a headless browser (Selenium/Puppeteer) to scrape Spotify's page JSON and then pass exact metadata to spotdl or to match downloaded files precisely. I can extend the script to include a Selenium-mode (logs in with your Spotify account in the browser) if you want.
- If you supply `--album-name "My Album Name"` it will use that as the folder name rather than extracting from HTML.
- Respect copyright and terms of service for content you download.

---

If you want, I can:

- add a Selenium scraper mode that fetches the album page directly (so you don't need to save HTML), or
- make the script tag files with album art and ID3 tags (using `mutagen`), or
- change naming to include artist + track number automatically.

Which of those should I add next?

# 3 (create a userscript)

write a userscript

---

Nice — below is a complete **userscript (Tampermonkey/Greasemonkey)** you can install in your browser.
It runs on Spotify web pages (album / playlist / track), scrapes the visible tracklist from the page DOM (no Spotify API), and gives you a small UI to:

- copy a plain list of search queries (`Artist - Title`) suitable for `spotdl`
- download that list as a `.txt` file
- download a JSON metadata file (title/artist/track_number/duration/spotify-href)
- generate a bash script that runs `spotdl` for each track and places files into `OUTDIR/<Album>/NN - Title.ext` (the script includes sanitization & quoting)

This avoids Spotify API rate limits because it reads metadata from the page, and it produces the data formats you asked for so you can feed them to the earlier script or call `spotdl` directly.

---

## How to use

1. Install Tampermonkey (or Greasemonkey) in your browser.
2. Create a new userscript and paste the code below.
3. Open an album or playlist page on `open.spotify.com` and let the page finish loading. The script will add a small floating panel (top-right).
4. Click `Extract` then use the buttons to copy / download / generate script.

---

## Userscript (copy-paste into Tampermonkey)

```javascript
// ==UserScript==
// @name         Spotify → spotDL Exporter
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Extract tracks from Spotify web page and export search-lines, JSON or a bash script for spotdl (no Spotify API). Works on album/playlist/track pages.
// @author       ChatGPT
// @match        https://open.spotify.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  "use strict";

  /* ---------- Utilities ---------- */

  function $(sel, root = document) {
    return root.querySelector(sel);
  }
  function $all(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
  }

  // Wait for a condition (poll)
  function waitFor(cond, interval = 200, timeout = 10000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      (function poll() {
        try {
          const val = cond();
          if (val) return resolve(val);
        } catch (e) {}
        if (Date.now() - start > timeout) return reject(new Error("timeout"));
        setTimeout(poll, interval);
      })();
    });
  }

  // sanitize string for file/folder name (simple)
  function sanitizeFilename(name) {
    if (!name) return "Unknown";
    return name.replace(/[\/\\\0]/g, "").trim();
  }

  // shell-quote string for generated bash script
  function shellQuote(s) {
    if (s === undefined || s === null) return "''";
    // replace single quotes by '\'' pattern
    return `'${String(s).replace(/'/g, `'\\''`)}'`;
  }

  // zero-pad
  function pad(n, width = 2) {
    const s = String(n);
    return s.length >= width ? s : "0".repeat(width - s.length) + s;
  }

  /* ---------- DOM scraping ---------- */

  // Try to get album/playlist title
  function getContainerTitle() {
    // Try meta og:title first
    const og = document.querySelector('meta[property="og:title"]');
    if (og && og.content) return og.content.trim();
    // Spotify often uses an h1 for album/playlist title
    const h1 = document.querySelector("h1");
    if (h1 && h1.textContent.trim()) return h1.textContent.trim();
    // fallback to document.title
    if (document.title) return document.title.replace(" - Spotify", "").trim();
    return "Unknown Album";
  }

  // Extract tracks from DOM (best-effort)
  function extractTracksFromDOM() {
    const rows = $all('[data-testid="tracklist-row"]');
    const tracks = [];
    if (rows.length === 0) {
      // fallback: find anchors with /track/
      const anchors = $all('a[href*="/track/"]');
      for (const a of anchors) {
        const title = (a.textContent || "").trim();
        const parent = a.closest('[role="row"]') || a.parentElement;
        const artistA = parent
          ? parent.querySelector('a[href*="/artist/"]')
          : null;
        const artist = artistA ? artistA.textContent.trim() : "";
        tracks.push({
          track_number: null,
          title: title || null,
          artist: artist || null,
          href: a.getAttribute("href") || null,
          duration: null,
        });
      }
    } else {
      for (const row of rows) {
        // title link
        const titleAnchor =
          row.querySelector('a[data-testid="internal-track-link"]') ||
          row.querySelector('a[href*="/track/"]');
        const title = titleAnchor
          ? (
              titleAnchor.textContent ||
              titleAnchor.querySelector("div")?.textContent ||
              ""
            ).trim()
          : null;
        // artist
        const artistA = row.querySelector('a[href*="/artist/"]');
        const artist = artistA ? artistA.textContent.trim() : null;
        // href
        const href = titleAnchor ? titleAnchor.getAttribute("href") : null;
        // track number: find a span with digits
        let tn = null;
        const spans = Array.from(row.querySelectorAll("span"));
        for (const s of spans) {
          const txt = s.textContent.trim();
          if (/^\d+$/.test(txt)) {
            tn = parseInt(txt, 10);
            break;
          }
        }
        // duration: mm:ss
        let dur = null;
        const durNode =
          row.querySelector('[data-encore-id="text"]:not(a)') || null;
        // better approach: find any text matching mm:ss inside row
        const mm = row.textContent.match(/(\d{1,2}:\d{2})/);
        if (mm) dur = mm[1];

        tracks.push({
          track_number: tn,
          title: title || null,
          artist: artist || null,
          href: href || null,
          duration: dur,
        });
      }
    }

    // dedupe & normalize: keep original order, fill missing track numbers with index
    const normalized = tracks.map((t, i) => ({
      track_number: t.track_number || i + 1,
      title: t.title ? t.title.trim() : `Track ${i + 1}`,
      artist: t.artist ? t.artist.trim() : "",
      href: t.href || null,
      duration: t.duration || null,
    }));

    return normalized;
  }

  /* ---------- UI ---------- */

  // create floating panel
  function createPanel() {
    if (document.getElementById("spotdl-export-panel")) return; // already created

    const panel = document.createElement("div");
    panel.id = "spotdl-export-panel";
    panel.style.position = "fixed";
    panel.style.top = "12px";
    panel.style.right = "12px";
    panel.style.zIndex = "999999";
    panel.style.background = "rgba(0,0,0,0.85)";
    panel.style.color = "#fff";
    panel.style.padding = "10px";
    panel.style.borderRadius = "8px";
    panel.style.fontSize = "13px";
    panel.style.maxWidth = "360px";
    panel.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)";
    panel.style.fontFamily = "Arial, sans-serif";

    panel.innerHTML = `
      <div style="font-weight:600;margin-bottom:6px;">Spotify → spotDL Exporter</div>
      <div style="margin-bottom:6px;">
        <button id="se-extract" style="margin-right:6px;">Extract</button>
        <button id="se-copy" title="Copy 'Artist - Title' lines">Copy</button>
        <button id="se-download" title="Download .txt of search lines" style="margin-left:6px;">Download</button>
      </div>
      <div style="margin-bottom:6px;">
        <button id="se-json" style="margin-right:6px;">Download JSON</button>
        <button id="se-bash">Generate bash script</button>
      </div>
      <div style="margin-top:8px;">
        <small id="se-status" style="opacity:0.85">Idle</small>
      </div>
      <textarea id="se-preview" style="width:100%;height:140px;margin-top:8px;font-size:12px;padding:6px;box-sizing:border-box;"></textarea>
    `;

    document.body.appendChild(panel);

    // minimal style for buttons
    const css = document.createElement("style");
    css.textContent = `
      #spotdl-export-panel button { background:#1db954; color:#fff; border:none; padding:6px 8px; border-radius:4px; cursor:pointer; }
      #spotdl-export-panel button:hover { filter:brightness(1.05); }
      #spotdl-export-panel button:active { transform:translateY(1px); }
      #spotdl-export-panel textarea { background:#0e0e0e; color:#fff; border:1px solid rgba(255,255,255,0.06); }
    `;
    document.head.appendChild(css);

    // button handlers
    panel
      .querySelector("#se-extract")
      .addEventListener("click", onExtractClicked);
    panel.querySelector("#se-copy").addEventListener("click", onCopyClicked);
    panel
      .querySelector("#se-download")
      .addEventListener("click", onDownloadClicked);
    panel.querySelector("#se-json").addEventListener("click", onJSONClicked);
    panel.querySelector("#se-bash").addEventListener("click", onBashClicked);
  }

  // status helper
  function setStatus(txt) {
    const s = document.getElementById("se-status");
    if (s) s.textContent = txt;
  }

  /* ---------- Actions ---------- */

  let lastExtract = { album: null, tracks: [] };

  function onExtractClicked() {
    setStatus("Extracting from page...");
    try {
      const album = sanitizeFilename(getContainerTitle());
      const tracks = extractTracksFromDOM();
      lastExtract = { album, tracks };
      populatePreview(album, tracks);
      setStatus(`Extracted ${tracks.length} tracks — album: "${album}"`);
    } catch (err) {
      console.error(err);
      setStatus("Error extracting. See console.");
    }
  }

  function populatePreview(album, tracks) {
    const ta = document.getElementById("se-preview");
    if (!ta) return;
    const lines = tracks.map((t) => {
      const artist = t.artist || "";
      const title = t.title || "";
      return artist ? `${artist} - ${title}` : title;
    });
    ta.value = `# Album: ${album}\n` + lines.join("\n");
  }

  async function onCopyClicked() {
    try {
      if (!lastExtract.tracks || lastExtract.tracks.length === 0) {
        onExtractClicked();
      }
      const lines = lastExtract.tracks
        .map((t) => {
          const artist = t.artist || "";
          const title = t.title || "";
          return artist ? `${artist} - ${title}` : title;
        })
        .join("\n");
      await navigator.clipboard.writeText(lines);
      setStatus("Copied search lines to clipboard.");
    } catch (err) {
      console.error(err);
      setStatus("Failed to copy — maybe permission denied.");
    }
  }

  function downloadFile(filename, content, mime = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function onDownloadClicked() {
    if (!lastExtract.tracks || lastExtract.tracks.length === 0) {
      onExtractClicked();
    }
    const lines = lastExtract.tracks
      .map((t) => {
        const artist = t.artist || "";
        const title = t.title || "";
        return artist ? `${artist} - ${title}` : title;
      })
      .join("\n");
    const safeAlbum = sanitizeFilename(lastExtract.album || "album");
    downloadFile(`${safeAlbum}-spotdl-list.txt`, lines);
    setStatus("Downloaded .txt file.");
  }

  function onJSONClicked() {
    if (!lastExtract.tracks || lastExtract.tracks.length === 0) {
      onExtractClicked();
    }
    const payload = {
      album: lastExtract.album,
      extractedAt: new Date().toISOString(),
      tracks: lastExtract.tracks,
    };
    const json = JSON.stringify(payload, null, 2);
    const safeAlbum = sanitizeFilename(lastExtract.album || "album");
    downloadFile(
      `${safeAlbum}-metadata.json`,
      json,
      "application/json;charset=utf-8"
    );
    setStatus("Downloaded JSON metadata.");
  }

  function onBashClicked() {
    if (!lastExtract.tracks || lastExtract.tracks.length === 0) {
      onExtractClicked();
    }
    const safeAlbum = sanitizeFilename(lastExtract.album || "album");
    // generate bash script
    const lines = [];
    lines.push("#!/usr/bin/env bash");
    lines.push("");
    lines.push("# Generated by Spotify → spotDL Exporter userscript");
    lines.push("# Requirements: spotdl in PATH, ffmpeg installed");
    lines.push("set -euo pipefail");
    lines.push("");
    lines.push('OUTDIR="${OUTDIR:-$HOME/Music}"');
    lines.push(`ALBUM=${shellQuote(safeAlbum)}`);
    lines.push('mkdir -p "$OUTDIR/"');
    lines.push("");
    // For each track produce a command; prefer per-track output into album folder with padded track number.
    // We'll use spotdl placeholders {title} and {ext} for file extension; {track_number} may not always be available from search, so also prefix with a two-digit fixed number.
    for (const t of lastExtract.tracks) {
      const tn = pad(t.track_number || 0, 2);
      const artist = t.artist || "";
      const title = t.title || "";
      const search = artist ? `${artist} - ${title}` : title;
      // Use --output to put into "$OUTDIR/$ALBUM/NN - {title}.{ext}"
      // We escape search query safely.
      const cmd = `spotdl download ${shellQuote(
        search
      )} --output "$OUTDIR/${sanitizeFilename(
        safeAlbum
      )}/${tn} - {title}.{ext}"`;
      lines.push(cmd);
    }
    lines.push("");
    lines.push('echo "Done."');

    const script = lines.join("\n");
    downloadFile(
      `${safeAlbum}-spotdl.sh`,
      script,
      "application/x-sh;charset=utf-8"
    );
    setStatus("Downloaded bash script. Make executable with: chmod +x *.sh");
  }

  /* ---------- Auto-init & observer ---------- */

  function init() {
    try {
      createPanel();
      setStatus("Ready — click Extract");
    } catch (err) {
      console.error("init error", err);
    }
  }

  // Observe changes (Spotify is SPA), update the panel if tracklist changes
  function observe() {
    const root = document.body;
    const mo = new MutationObserver(() => {
      // keep panel present
      createPanel();
    });
    mo.observe(root, { childList: true, subtree: true });
  }

  // initial
  waitFor(() => document.body, 500, 10000)
    .then(() => {
      init();
      observe();
    })
    .catch(() => {
      // still try to init
      init();
      observe();
    });
})();
```

---

## Notes & tips

- The script **only reads the page DOM** (no logging into Spotify or using the API). It extracts the metadata Spotify displays (title, artist, duration, link) and formats it into outputs you can use with `spotdl`.
- For best results, open the **album** page and expand the full tracklist (scroll if Spotify lazy-loads tracks) before clicking `Extract`.
- The generated bash script uses `spotdl download "Artist - Title" --output "OUTDIR/Album/NN - {title}.{ext}"`. Because search-based downloads rely on YouTube matches, sometimes the found tracks may differ (e.g., live versions). If you need exact matching (specific release IDs / exact metadata), we can extend the userscript to fetch the embedded Spotify page JSON (via `window.__INITIAL_STATE__` or other page data) to get raw Spotify metadata and include it in the exported JSON — tell me if you want that.
- Legal reminder: only download content you have rights to and respect Terms of Service of the relevant services.

---

Want me to:

- modify the userscript to also fetch higher-fidelity metadata (ISRC, release date, album art URL) using the web UI’s embedded JSON, or
- add a button that posts the extracted JSON to a local server (so your Ubuntu script can automatically pick it up)?

If yes, I’ll extend the userscript with that feature.

# 4 (create a sh script given json from userscript)

create sh script to download them with json given. dont reach spotify.

---

## Shell script — download from exported JSON (no Spotify API calls)

Save this as `download_from_json.sh`, make it executable (`chmod +x download_from_json.sh`) and run it on your Ubuntu machine.
The script **reads a JSON file** exported from the userscript (or otherwise matching the structure below), then downloads each track **by search query** (`Artist - Title`) with `spotdl` — so it does **not** call Spotify or use the Spotify Web API.

---

### Expected JSON format

The script expects a JSON similar to what the userscript exports, for example:

```json
{
  "album": "Album Name",
  "extractedAt": "2025-01-13T00:00:00Z",
  "tracks": [
    {
      "track_number": 1,
      "title": "青春コンプレックス",
      "artist": "kessoku band",
      "href": "/track/60nwK1iMgnFCznF6FiNfts",
      "duration": "3:23"
    },
    {
      "track_number": 2,
      "title": "ひとりぼっち東京",
      "artist": "kessoku band",
      "href": "/track/1ZFnNl8O8zd4mef77SAd91",
      "duration": "3:52"
    }
    // ...
  ]
}
```

---

### Dependencies

Make sure the following are installed:

- `spotdl` (recommended: `pip install --user --upgrade spotdl`)
- `ffmpeg` (`sudo apt install ffmpeg`)
- `jq` (`sudo apt install jq`) — used to parse the JSON. (The script will fall back to Python if `jq` is missing.)

---

### Script: `download_from_json.sh`

```bash
#!/usr/bin/env bash
# download_from_json.sh
# Read JSON file (album metadata), download tracks using spotdl search queries,
# and place files into OUTDIR/"Album Name"/NN - Title.ext
#
# Usage:
# ./download_from_json.sh metadata.json
# OUTDIR=/home/you/Music ./download_from_json.sh metadata.json
#
# Environment variables:
# OUTDIR  : base directory to save albums (default: $HOME/Music)
# TEMPDIR : temporary directory for downloads (default: $OUTDIR/.spotdl_temp)
# SLEEP_MIN / SLEEP_MAX : sleep range between downloads (secs) default 1.5 - 3.5
# RETRIES : number of retries per track (default 3)
# DRY_RUN : if set to "1", do not call spotdl; only print actions

set -euo pipefail

# --- defaults ---
JSON_FILE="${1:-}"
OUTDIR="${OUTDIR:-$HOME/Music}"
SLEEP_MIN="${SLEEP_MIN:-1.5}"
SLEEP_MAX="${SLEEP_MAX:-3.5}"
RETRIES="${RETRIES:-3}"
TEMP_SUBDIR=".spotdl_temp"
DRY_RUN="${DRY_RUN:-0}"
LOGFILE="${LOGFILE:-download_from_json.log}"

# audio file extensions we consider as downloaded output
EXT_GLOBS=("*.mp3" "*.m4a" "*.webm" "*.wav" "*.opus" "*.flac" "*.ogg")

if [[ -z "$JSON_FILE" ]]; then
  echo "Usage: $0 metadata.json"
  exit 2
fi
if [[ ! -f "$JSON_FILE" ]]; then
  echo "Error: JSON file not found: $JSON_FILE"
  exit 2
fi

# --- helpers ---
timestamp() { date +"%Y-%m-%d %H:%M:%S"; }

log() {
  echo "[$(timestamp)] $*" | tee -a "$LOGFILE"
}

# sanitize for filesystem (simple)
sanitize() {
# remove forward/back slashes and trailing spaces; collapse control chars
  local s="$1"
# replace slash/backslash with japanese slash to preserve readability, then remove other problematic chars
  s="${s//\//／}"
  s="${s//\\/＼}"
# remove ASCII control characters
  s="$(echo "$s" | tr -d '\000-\037')"
# trim
  s="$(echo "$s" | sed -e 's/^[[:space:]]\+//' -e 's/[[:space:]]\+$//')"
  echo "$s"
}

# choose most recent file in dir
pick_most_recent_file() {
  local dir="$1"
# search for known audio extensions
  local candidate
  candidate=""
  for ext in "${EXT_GLOBS[@]}"; do
    shopt -s nullglob
# shellcheck disable=SC2012
    local files=( "$dir"/$ext )
    shopt -u nullglob
    if (( ${#files[@]} )); then
      for f in "${files[@]}"; do
# choose latest by mtime
        if [[ -z "$candidate" || "$f" -nt "$candidate" ]]; then
          candidate="$f"
        fi
      done
    fi
  done
# if none found, try any file
  if [[ -z "$candidate" ]]; then
    shopt -s nullglob
    local files=( "$dir"/* )
    shopt -u nullglob
    if (( ${#files[@]} )); then
      candidate="${files[0]}"
      for f in "${files[@]}"; do
        if [[ "$f" -nt "$candidate" ]]; then candidate="$f"; fi
      done
    fi
  fi
  printf '%s' "$candidate"
}

# random sleep between min and max
rand_sleep() {
  local min="$1"; local max="$2"
# use awk to compute random float
  local r
  r=$(awk -v a="$min" -v b="$max" 'BEGIN{srand(); printf "%.3f", a + rand()*(b-a)}')
  sleep "$r"
}

# jq or python fallback to iterate tracks
json_stream_tracks() {
# prints lines: <track_number>\t<artist>\t<title>
  local json="$1"
  if command -v jq >/dev/null 2>&1; then
    jq -r '.tracks[] | [(.track_number // 0), (.artist // ""), (.title // "")] | @tsv' "$json"
  else
# fallback to python for JSON parsing
    python3 - "$json" <<'PY'
import sys, json
j=json.load(open(sys.argv[1],"r",encoding="utf-8"))
for t in j.get("tracks",[]):
    tn = t.get("track_number") or 0
    artist = t.get("artist") or ""
    title = t.get("title") or ""
    print(f"{tn}\t{artist}\t{title}")
PY
  fi
}

# get album name
json_album_name() {
  local json="$1"
  if command -v jq >/dev/null 2>&1; then
    jq -r '.album // "Unknown Album"' "$json"
  else
    python3 - "$json" <<'PY'
import sys,json
j=json.load(open(sys.argv[1],"r",encoding="utf-8"))
print(j.get("album","Unknown Album"))
PY
  fi
}

# --- prepare dirs ---
mkdir -p "$OUTDIR"
ALBUM_NAME_RAW="$(json_album_name "$JSON_FILE")"
ALBUM_NAME="$(sanitize "$ALBUM_NAME_RAW")"
ALBUM_DIR="$OUTDIR/$ALBUM_NAME"
TEMP_DIR="${TEMPDIR:-$OUTDIR/$TEMP_SUBDIR}"
mkdir -p "$TEMP_DIR"
mkdir -p "$ALBUM_DIR"

log "Starting download_from_json"
log "JSON: $JSON_FILE"
log "Album: $ALBUM_NAME_RAW -> sanitized: $ALBUM_NAME"
log "Output album dir: $ALBUM_DIR"
log "Temp dir: $TEMP_DIR"
log "DRY_RUN=$DRY_RUN RETRIES=$RETRIES sleep_range=${SLEEP_MIN}-${SLEEP_MAX}"

# --- iterate tracks ---
i=0
while IFS=$'\t' read -r tn artist title; do
  i=$((i+1))
  tn_str="$tn"
  if [[ "$tn_str" == "0" || -z "$tn_str" ]]; then
# use order if no track_number
    tn_str="$i"
  fi
# pad to 2 digits
  printf -v tn_p "%02d" "$tn_str"

# build search query
  if [[ -n "$artist" ]]; then
    search_query="$artist - $title"
  else
    search_query="$title"
  fi

  safe_title="$(sanitize "$title")"
# construct final filename
  dest_file="$ALBUM_DIR/${tn_p} - ${safe_title}"

# ensure temp dir empty
  rm -rf "$TEMP_DIR"/*
  log "Track ${tn_p}: artist='${artist}' title='${title}'"
  log " -> search query: ${search_query}"
# run spotdl with small output template so file lands in tempdir
  if [[ "$DRY_RUN" == "1" ]]; then
    log "DRY RUN: would run spotdl download ${search_query} --output \"{title}.{ext}\""
    continue
  fi

  attempt=0
  success=0
  while (( attempt < RETRIES )); do
    attempt=$((attempt+1))
    log "Attempt ${attempt}/${RETRIES} for '${title}'"
# run spotdl in tempdir; output template set to {title}.{ext}
# Using --no-metadata (optional) would remove tagging; we want default tagging usually
    set +e
# Use an array to handle the search query with potential special chars
    spotdl_cmd=(spotdl download "$search_query" --output "{title}.{ext}")
# run command in temp dir
    ( cd "$TEMP_DIR" && "${spotdl_cmd[@]}" )
    rc=$?
    set -e
    if [[ $rc -ne 0 ]]; then
      log "spotdl returned non-zero exit code: $rc"
    fi

# check for produced file
    got="$(pick_most_recent_file "$TEMP_DIR" || true)"
    if [[ -n "$got" && -f "$got" ]]; then
# move to album dir; preserve extension
      ext="${got##*.}"
# create destination path with ext
      dest_full="${dest_file}.${ext}"
# avoid clobber: if dest exists, append suffix
      if [[ -f "$dest_full" ]]; then
        k=1
        while [[ -f "${dest_file} (${k}).${ext}" ]]; do k=$((k+1)); done
        dest_full="${dest_file} (${k}).${ext}"
      fi
      mv -v "$got" "$dest_full"
      log "Downloaded -> $dest_full"
      success=1
      break
    else
      log "No output file found in temp dir after spotdl run. (attempt $attempt)"
# small wait before retry
      sleep 1
    fi
  done

  if (( success == 0 )); then
    log "Failed to download track '${title}' after ${RETRIES} attempts. Skipping."
  fi

# polite sleep between tracks to avoid hammering any service
  rand_sleep "$SLEEP_MIN" "$SLEEP_MAX"
done < <(json_stream_tracks "$JSON_FILE")

log "All done. Check $ALBUM_DIR and $LOGFILE"
```

---

### Usage examples

Dry run (no downloads):

```bash
DRY_RUN=1 ./download_from_json.sh album-metadata.json
```

Real run:

```bash
OUTDIR=/home/you/Music ./download_from_json.sh album-metadata.json
```

Make the generated script executable and review `download_from_json.log` for progress.

---

### Notes & tips

- This script **does not reach Spotify**. It uses `spotdl` search queries created from the JSON metadata (`Artist - Title`) which queries content sources (e.g., YouTube) to fetch audio — that's how spotdl finds audio without Spotify API.
- Search-based downloads occasionally match incorrect versions (live, cover, low quality). If you need _exact release matching_, you would need authoritative identifiers (URI/ISRC) and a more advanced pipeline — but that would require accessing metadata sources (Spotify API or the embedded web JSON you scraped).
- If `spotdl` downloads use unusual filenames or directories, the script picks the most recently created file in the temp dir as the downloaded track — this is robust in common spotdl usage but not bulletproof for weird spotdl changes.
- If you want album art + ID3 tagging, spotdl usually tags files automatically; you can add extra tagging steps (e.g., using `eyeD3` or `mutagen`) later.
- If you prefer a Python version (more powerful JSON handling or concurrency), I can provide that as well.

If you want, I can:

- add support for reading a folder of JSONs and batch-processing albums,
- add an optional post-processing step that normalizes ID3 tags and embeds album art (if you can supply album art URL in the JSON),
- or convert this to a small Python tool that handles more edge cases.

Which one would you like next?

# 5 (solve rate limit)

what happened. how to solve.

```
[2026-01-13 22:30:49] Attempt 1/3 for '青春コンプレックス'
SSLError: [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1000)

The above exception was the direct cause of the following exception:

╭─────────────────────────────── Traceback (most recent call last) ────────────────────────────────╮
│ /home/fira/.local/lib/python3.12/site-packages/requests/adapters.py:644 in send                  │
│                                                                                                  │
│   643 │   │   try:                                                                               │
│ ❱ 644 │   │   │   resp = conn.urlopen(                                                           │
│   645 │   │   │   │   method=request.method,                                                     │
│                                                                                                  │
│ /usr/lib/python3/dist-packages/urllib3/connectionpool.py:845 in urlopen                          │
│                                                                                                  │
│    844 │   │   │                                                                                 │
│ ❱  845 │   │   │   retries = retries.increment(                                                  │
│    846 │   │   │   │   method, url, error=new_e, _pool=self, _stacktrace=sys.exc_info()[2]       │
│                                                                                                  │
│ /usr/lib/python3/dist-packages/urllib3/util/retry.py:517 in increment                            │
│                                                                                                  │
│   516 │   │   │   reason = error or ResponseError(cause)                                         │
│ ❱ 517 │   │   │   raise MaxRetryError(_pool, url, reason) from reason  # type: ignore[arg-type   │
│   518                                                                                            │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
MaxRetryError: HTTPSConnectionPool(host='music.youtube.com', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLEOFError(8,
'[SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1000)')))

During handling of the above exception, another exception occurred:

╭─────────────────────────────── Traceback (most recent call last) ────────────────────────────────╮
│ /home/fira/.local/bin/spotdl:8 in <module>                                                       │
│                                                                                                  │
│   7 │   sys.argv[0] = re.sub(r'(-script\.pyw|\.exe)?$', '', sys.argv[0])                         │
│ ❱ 8 │   sys.exit(console_entry_point())                                                          │
│   9                                                                                              │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/spotdl/console/entry_point.py:53 in               │
│ console_entry_point                                                                              │
│                                                                                                  │
│    52 │   else:                                                                                  │
│ ❱  53 │   │   entry_point()                                                                      │
│    54                                                                                            │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/spotdl/console/entry_point.py:100 in entry_point  │
│                                                                                                  │
│    99 │   if "youtube-music" in downloader_settings["audio_providers"]:                          │
│ ❱ 100 │   │   if not check_ytmusic_connection():                                                 │
│   101 │   │   │   raise DownloaderError(                                                         │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/spotdl/utils/downloader.py:21 in                  │
│ check_ytmusic_connection                                                                         │
│                                                                                                  │
│   20 │   ytm = YouTubeMusic()                                                                    │
│ ❱ 21 │   test_results = ytm.get_results("a")                                                     │
│   22 │   if len(test_results) == 0:                                                              │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/spotdl/providers/audio/ytmusic.py:57 in           │
│ get_results                                                                                      │
│                                                                                                  │
│   56 │   │                                                                                       │
│ ❱ 57 │   │   search_results = self.client.search(search_term, **kwargs)                          │
│   58                                                                                             │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/ytmusicapi/mixins/search.py:182 in search         │
│                                                                                                  │
│   181 │   │                                                                                      │
│ ❱ 182 │   │   response = self._send_request(endpoint, body)                                      │
│   183                                                                                            │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/ytmusicapi/ytmusic.py:233 in _send_request        │
│                                                                                                  │
│   232 │   │   │   json=body,                                                                     │
│ ❱ 233 │   │   │   headers=self.headers,                                                          │
│   234 │   │   │   proxies=self.proxies,                                                          │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/ytmusicapi/ytmusic.py:171 in headers              │
│                                                                                                  │
│   170 │   def headers(self) -> CaseInsensitiveDict[str]:                                         │
│ ❱ 171 │   │   headers = self.base_headers                                                        │
│   172                                                                                            │
│                                                                                                  │
│ /usr/lib/python3.12/functools.py:995 in __get__                                                  │
│                                                                                                  │
│    994 │   │   if val is _NOT_FOUND:                                                             │
│ ❱  995 │   │   │   val = self.func(instance)                                                     │
│    996 │   │   │   try:                                                                          │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/ytmusicapi/ytmusic.py:165 in base_headers         │
│                                                                                                  │
│   164 │   │   if "X-Goog-Visitor-Id" not in headers:                                             │
│ ❱ 165 │   │   │   headers.update(get_visitor_id(partial(self._send_get_request, use_base_heade   │
│   166                                                                                            │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/ytmusicapi/helpers.py:43 in get_visitor_id        │
│                                                                                                  │
│    42 def get_visitor_id(request_func: Callable[[str], Response]) -> dict[str, str]:             │
│ ❱  43 │   response = request_func(YTM_DOMAIN)                                                    │
│    44 │   matches = re.findall(r"ytcfg\.set\s*\(\s*({.+?})\s*\)\s*;", response.text)             │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/ytmusicapi/ytmusic.py:247 in _send_get_request    │
│                                                                                                  │
│   246 │   ) -> Response:                                                                         │
│ ❱ 247 │   │   response = self._session.get(                                                      │
│   248 │   │   │   url,                                                                           │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/requests/sessions.py:602 in get                   │
│                                                                                                  │
│   601 │   │   kwargs.setdefault("allow_redirects", True)                                         │
│ ❱ 602 │   │   return self.request("GET", url, **kwargs)                                          │
│   603                                                                                            │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/requests/sessions.py:589 in request               │
│                                                                                                  │
│   588 │   │   send_kwargs.update(settings)                                                       │
│ ❱ 589 │   │   resp = self.send(prep, **send_kwargs)                                              │
│   590                                                                                            │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/requests/sessions.py:703 in send                  │
│                                                                                                  │
│   702 │   │   # Send the request                                                                 │
│ ❱ 703 │   │   r = adapter.send(request, **kwargs)                                                │
│   704                                                                                            │
│                                                                                                  │
│ /home/fira/.local/lib/python3.12/site-packages/requests/adapters.py:675 in send                  │
│                                                                                                  │
│   674 │   │   │   │   # This branch is for urllib3 v1.22 and later.                              │
│ ❱ 675 │   │   │   │   raise SSLError(e, request=request)                                         │
│   676                                                                                            │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
SSLError: HTTPSConnectionPool(host='music.youtube.com', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLEOFError(8, '[SSL:
UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1000)')))
[2026-01-13 22:30:55] spotdl returned non-zero exit code: 1
[2026-01-13 22:30:55] No output file found in temp dir after spotdl run. (attempt 1)
[2026-01-13 22:30:56] Attempt 2/3 for '青春コンプレックス'
Processing query: kessoku band - 青春コンプレックス
WARNING:root:Your application has reached a rate/request limit. Retry will occur after: 86400
```

---

Ah — I see exactly what’s happening here. The errors you’re seeing come from the underlying `ytmusicapi` library that `spotdl` uses to search YouTube Music. Let’s break it down and see how to fix it.

---

### 1️⃣ What’s happening

**Key points from your logs:**

- `SSLError: [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol`
- `MaxRetryError: HTTPSConnectionPool(host='music.youtube.com', port=443)`
- `WARNING: Your application has reached a rate/request limit. Retry will occur after: 86400`

**Interpretation:**

1. **SSL error / EOF**
   This usually happens when the server (YouTube Music) abruptly closes the HTTPS connection. Common causes:

   - Outdated `openssl` or Python SSL stack.
   - Network interception (firewall, VPN, or proxy issues).
   - Server throttling or temporary connection problems.

2. **Rate limit warning**
   After multiple failed requests, YouTube Music detected heavy access and **temporarily blocked your IP** (it’s telling you “Retry after 86400 seconds” → 24 hours). This is why subsequent attempts fail.

**Important:** The SSL EOF is likely a symptom of the rate-limiting. The server closes the connection when it detects too many automated requests.

---

### 2️⃣ How to solve

You have a few options, depending on how urgent this is:

#### **Option A — Wait and retry**

- Since the log shows `Retry after: 86400`, the simplest solution is **wait 24 hours** for the block to expire.
- Reduce request rate in the future:

  - Increase `SLEEP_MIN` and `SLEEP_MAX` in your script.

    ```bash
    SLEEP_MIN=5 SLEEP_MAX=15 ./download_from_json.sh album.json
    ```

  - This avoids tripping YouTube Music’s automated protections.

#### **Option B — Use YouTube (regular) instead of YouTube Music**

- `spotdl` supports searching on plain YouTube (not music.youtube.com), which is less likely to rate-limit you.
- You can force it by editing your `download_from_json.sh` spotdl command:

  ```bash
  spotdl download "$search_query" --output "{title}.{ext}" --provider youtube
  ```

  or in the config file:

  ```toml
  audio_providers = ["youtube"]
  ```

- This avoids `ytmusicapi` completely.

#### **Option C — Update SSL / Python / spotdl**

- Make sure your Python stack and OpenSSL are up-to-date:

  ```bash
  sudo apt update
  sudo apt upgrade openssl libssl-dev python3 python3-pip
  pip install --upgrade spotdl ytmusicapi
  ```

- Older Python or OpenSSL sometimes mishandle modern TLS from Google services.

#### **Option D — Use a different IP**

- If rate-limited, YouTube Music blocks your current IP. Options:

  - Switch networks (mobile hotspot, VPN, etc.).
  - Use `--proxy` in spotdl:

    ```bash
    spotdl download "$search_query" --output "{title}.{ext}" --proxy "http://127.0.0.1:1080"
    ```

---

### 3️⃣ Recommended fix for your script

1. Add **slower sleep** to avoid triggering rate limits:

```bash
SLEEP_MIN=5
SLEEP_MAX=10
```

2. Force `spotdl` to use YouTube instead of YouTube Music:

```bash
spotdl download "$search_query" --output "{title}.{ext}" --provider youtube
```

3. Retry with **fewer simultaneous requests** (your script already does sequentially, so you’re fine).

4. Optional: **update spotdl / Python / SSL** as shown above.

---

💡 **Pro tip:** For batch downloading large albums or multiple albums, always use **longer sleep intervals** (5–15s) and avoid repeated automatic retries. YouTube Music is very aggressive with automated scripts.

---

If you want, I can **rewrite your shell script to automatically switch to YouTube as a backup provider** whenever a YouTube Music request fails, so you won’t get stuck with these SSL/rate limit errors. This avoids waiting 24 hours.

Do you want me to do that?

# 6 ()

fact check. is the rate limit from spotify or youtube really

---

Here’s what the evidence says about your **rate‑limit error** — and where it _actually comes from_:

---

## 🔎 **Where the rate limit in your log came from**

### ✅ **It was _not_ from Spotify**

You’re not hitting Spotify’s API in your script because:

- Your downloads are driven by **search queries** (`Artist - Title`) in `spotdl`, not by Spotify API calls.
- In the stack trace you shared, it fails during a _YouTube Music / ytmusicapi_ request — not anything from Spotify’s API.

Community bug reports confirm that `spotdl` can hit rate limit messages _even when using your own Spotify credentials_, and issues have been raised indicating that those errors often occur while fetching playlist/track metadata, not audio downloads. But that’s separate from your download phase. ([blog.gitcode.com][1])

Meanwhile, Spotify Web API rate limits are typical for metadata calls, but you avoided them by using local metadata from your JSON instead. So Spotify isn’t the source of your error. ([Spotify Community][2])

---

### ✅ **The error _is_ from YouTube Music (not Spotify)**

Your log shows:

```
SSLError ... HTTPSConnectionPool(host='music.youtube.com' ...)
```

and further:

```
Your application has reached a rate/request limit.
```

Those are emitted by the **YouTube Music client (`ytmusicapi`)** that `spotdl` uses by default to look up search results. YouTube Music has its own internal rate limiting and protections, even if it doesn’t have an _official public API_. The `ytmusicapi` library itself mentions that _there are rate limits on YouTube Music_, though not documented clearly. ([ytmusicapi.readthedocs.io][3])

This is consistent with:

- SSL read failures followed by a “rate/request limit” warning
- GitHub issues in `spotdl` where users report rate limit warnings even with own credentials
- Reddit reports of heavy automated access triggering blocks from _YouTube‑related services_ rather than Spotify

So yes — that message is _really coming from YouTube Music’s backend_, not Spotify.

---

## 📌 Why YouTube Music rate‑limits you

YouTube Music isn’t a public API — it’s a web service. If a script like:

```
ytmusicapi.get_results("a")
```

runs repeatedly without a logged‑in session, Google’s infrastructure may block connections or enforce anti‑automation limits that manifest as SSL connection problems or artificial “retry after” warnings. ([ytmusicapi.readthedocs.io][3])

That’s what your stack trace shows: it failed while trying to perform **a YouTube Music search**, and then the tool printed a rate limit warning from that subsystem.

---

## 🧠 Why your script likely hit this

- Your `spotdl` download calls triggered **YouTube Music search via ytmusicapi**, which is prone to break on automated traffic.
- If you run many in a short time, Google detects it as bot‑like and may reset or close connections (SSL EOF).
- That’s _not Spotify’s servers limiting you_ — you aren’t touching the Spotify API with your current flow.

---

## 🧩 So _who_ is rate‑limiting?

| Service                        | Role             | Was it hit in your case?              |
| ------------------------------ | ---------------- | ------------------------------------- |
| **Spotify API**                | Metadata service | ❌ Not used by your JSON‑based script |
| **YouTube Music (ytmusicapi)** | Search provider  | ✔️ Yes — logged in stack trace        |
| **YouTube (plain)**            | Video provider   | Not involved unless you force it      |

So the answer is: **the rate limit you ran into is from YouTube Music’s service, not Spotify**.

---

## ✅ Recommended workaround (to avoid this again)

To avoid YouTube Music rate‑limits:

### **1) Force `spotdl` to use _regular YouTube_ search**

YouTube (regular) is more tolerant than music.youtube.com.

You can do this by adding:

```
--provider youtube
```

to your spotdl call.

Example:

```bash
spotdl download "Artist - Title" --provider youtube --output "{title}.{ext}"
```

That avoids using the problematic YouTube Music API entirely.

---

### **2) Use cookies for YouTube if you _must_ use ytmusicapi**

Export cookies from logged‑in YouTube Music in browser and pass to spotdl:

```bash
spotdl download "query" --cookie /path/to/YouTube_cookies.txt
```

This often helps bypass throttling.

---

### **3) Add delays between downloads**

Much lower request rate avoids triggering anti‑automation blocks.

Example:

```bash
sleep 5
```

between tracks.

---

## 📌 Quick summary

✔ The rate limit errors you saw came from **YouTube Music (ytmusicapi)**.
✔ They were _not_ caused by Spotify’s API.
✔ You can avoid them by forcing spotdl to use **plain YouTube search** or by using cookies/logged‑in sessions.

---

If you want, I can show exactly **how to reconfigure your script** to use plain YouTube search only, and avoid all YouTube Music API calls entirely. Would you like that?

[1]: https://blog.gitcode.com/6bce46eaeb5b5874ba7acb0334893f47.html?utm_source=chatgpt.com "spotDL项目中的Spotify API请求限制问题分析与解决方案 - GitCode博客"
[2]: https://community.spotify.com/t5/Spotify-for-Developers/Constantly-getting-rate-limit-even-after-a-few-requests/td-p/6258894?utm_source=chatgpt.com "Constantly getting rate limit even after a few req... - The Spotify Community"
[3]: https://ytmusicapi.readthedocs.io/en/latest/faq.html?utm_source=chatgpt.com "FAQ — ytmusicapi 1.11.5.dev2+g21445ca6f documentation"
