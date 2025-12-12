# 1

<!-- https://grok.com/c/acac6941-597f-40c2-aca9-79b52ec6df31?rid=ca59c19c-4c8d-412f-8010-83ec801fdb75 -->

(to grok)

how to export youtube subtitles

---

Here are the most reliable and up-to-date ways to export or download YouTube subtitles (captions) as of December 2025:

### 1. Official YouTube Way (for video owners only)

If you own the video or have editor access:

1. Go to YouTube Studio (studio.youtube.com)
2. Select the video → Subtitles
3. Click the three dots next to the language → Download
4. Choose format: .srt, .sbv, or .vtt

This is the cleanest method but only works if you're the owner.

### 2. Best Free Methods for Any Public Video (with subtitles available)

#### Method A: Using yt-dlp (Recommended – most powerful & reliable)

yt-dlp is a free, open-source command-line tool (fork of youtube-dl).

**Step-by-step:**

1. Install yt-dlp:

   - Windows/Mac/Linux: https://github.com/yt-dlp/yt-dlp#installation
   - Or use Homebrew on Mac: `brew install yt-dlp`

2. Open terminal/command prompt

3. Run one of these commands:

```bash
# Download auto-generated subtitles (English)
yt-dlp --write-auto-sub --skip-download "https://www.youtube.com/watch?v=VIDEO_ID"

# Download manual subtitles (if available)
yt-dlp --write-sub --sub-lang en --skip-download "https://www.youtube.com/watch?v=VIDEO_ID"

# Download all available subtitle languages
yt-dlp --write-auto-sub --write-sub --all-subs --skip-download "https://youtu.be/VIDEO_ID"
```

This saves subtitles as .srt or .vtt files in your current folder.

#### Method B: Online Tools (Quick & Easy, no install)

These work well in 2025:

- https://youtubetosrt.online
- https://getsrt.live
- https://downsub.com
- https://savesubs.com

Just paste the YouTube link → select language → download SRT/VTT/TXT.

⚠️ Note: Some videos have auto-generated captions only, which may be less accurate.

### 3. Browser Extensions (Convenient)

- "YouTube Subtitle Downloader" (Chrome/Firefox)
- "Subadub" (works well)
- "Language Reactor" (great for language learners, exports with translations)

### 4. Google Takeout (Only for YOUR watched videos)

If you want subtitles from videos you've watched with captions on:

- Go to https://takeout.google.com
- Select "YouTube and YouTube Music" → "Captions"
- Export → you get .sbv files

### Bonus: Get Timed Transcripts in Browser (No Download)

1. Open YouTube video
2. Click "..." → "Show transcript"
3. Click the three dots in the transcript panel → "Toggle timestamps"
4. Copy-paste into a text file (manual but fast)

### Summary Table

| Method            | Requires Install? | Works on Any Video? | Best Quality | File Format |
| ----------------- | ----------------- | ------------------- | ------------ | ----------- |
| yt-dlp            | Yes               | Yes                 | Best         | SRT/VTT     |
| Online tools      | No                | Yes                 | Good         | SRT/VTT/TXT |
| Browser extension | Yes               | Yes                 | Good         | SRT         |
| YouTube Studio    | No                | Only your videos    | Perfect      | SRT/SBV     |
| Transcript copy   | No                | Yes                 | Good         | Manual      |

Recommendation: Use **yt-dlp** for best results, or **savesubs.com** / **getsrt.live** for quick no-install downloads.

Let me know the video URL if you want me to generate the exact command! 🚀

# 2

give me the extension links for chrome

---

### Chrome Extensions for YouTube Subtitles

Here are direct links to the recommended browser extensions from my previous response. These are all available on the official Chrome Web Store and work well for exporting or downloading YouTube subtitles as of December 2025. I've included ratings and brief notes for each.

| Extension Name                   | Chrome Web Store Link                                                                                               | Rating | Notes                                                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| YouTube Subtitle Downloader      | [Install here](https://chromewebstore.google.com/detail/youtube-subtitle-download/mjmghnkcbdmdbkolinkcbapglcinoahd) | 4.8/5  | Easy one-click downloads in TXT, SRT, or VTT formats with customization options like timestamps.                                                                                   |
| Download YouTube Subtitles       | [Install here](https://chromewebstore.google.com/detail/download-youtube-subtitle/gdfkkklabpbkconekepgjcghpagenigl) | 3.4/5  | Adds a button under videos for quick access to subtitles in SRT, VTT, or TXT; supports auto-translated ones.                                                                       |
| Youtube Subtitle Download Helper | [Install here](https://chromewebstore.google.com/detail/youtube-subtitle-download/dpmmcccjdcgdjnlnicicdbnlmohhpagf) | 3.5/5  | Open-source option supporting multiple formats (SRT, VTT, CSV, TXT, LRC); no ads or data collection.                                                                               |
| Subadub                          | [Install here](https://chromewebstore.google.com/detail/subadub/jamiekdimmhnnemaaimmdahnahfmfdfk)                   | 4.3/5  | Primarily for Netflix but works on YouTube too; great for language learners—selectable text, copy/paste, and SRT exports.                                                          |
| Language Reactor                 | [Install here](https://chromewebstore.google.com/detail/language-reactor/hoombieeljmmljlkjmnheibnpciblicm)          | 4.2/5  | Excellent for learners: dual subtitles, translations, dictionary popups, and export options; supports YouTube/Netflix. (Note: Still actively maintained despite a Chrome warning.) |

**Quick Tips:**

- To install: Click the link, then "Add to Chrome."
- These are free, but Language Reactor has premium features for advanced tools.
- If you're focused on pure downloads, start with "YouTube Subtitle Downloader." For learning with exports, try Language Reactor.

If you need Firefox/Edge alternatives or help with a specific one, let me know! 🚀
