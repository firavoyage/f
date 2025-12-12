# b (d)

<!-- 2025.12.10 -->

<!-- fail whatever. switching node worked. -->

how to download https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd using yt dlp. save the videos with thumbnail. using cookies from ubuntu chromium.

---

This can be achieved in two simple steps using the built-in features of `yt-dlp`. This method is generally safer and more reliable than using third-party browser extensions to export cookies.

Here is the complete process:

### Step 1: Prepare Chromium and `yt-dlp`

1.  **Log in to YouTube:** Make sure you are logged into the YouTube account that has access to the playlist in your Ubuntu Chromium browser.
2.  **Close Chromium:** Because Chromium (and other Chrome-based browsers) lock their cookie database while running, you **must close the Chromium browser completely** before running the `yt-dlp` command.

### Step 2: Run the `yt-dlp` Download Command

Execute the following command in your Ubuntu terminal. This single command handles authentication, playlist downloading, and thumbnail embedding:

```bash
yt-dlp \
  --cookies-from-browser chromium \
  --embed-thumbnail \
  --add-metadata \
  -f "bestvideo*+bestaudio/best" \
  -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
  "https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd"
```

---

#### Command Breakdown:

| Option                                                     | Function                                                                                                                            |
| :--------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `yt-dlp`                                                   | The program executable.                                                                                                             |
| `--cookies-from-browser chromium`                          | Tells `yt-dlp` to automatically locate and read the cookies from your Chromium profile on Ubuntu.                                   |
| `--embed-thumbnail`                                        | **Embeds the video thumbnail** into the downloaded video file (requires `ffmpeg` or `ffprobe` to be installed).                     |
| `--add-metadata`                                           | Embeds the video title, description, and other relevant information into the file.                                                  |
| `-f "bestvideo*+bestaudio/best"`                           | Selects the highest quality video and audio streams and merges them (usually into an MP4 or MKV file).                              |
| `-o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s"` | Sets the output file structure: saves videos into a folder named after the playlist, and names each file using its index and title. |
| `"https://..."`                                            | The URL of the YouTube playlist you want to download.                                                                               |

**Note:** If you encounter errors, you may need to ensure you have the `keyring` package installed for Python (often required for `yt-dlp` to access Chromium's encrypted cookie store). You can install it with:

```bash
pip install keyring
```

# b 2

```
[Cookies] Loading cookie      0/     7ERROR: secretstorage not available as the `secretstorage` module is not installed. Please install by running `python3 -m pip install secretstorage`
Extracted 7 cookies from chromium
```

---

That's a very common and helpful error\! It indicates that `yt-dlp` successfully located your Chromium cookie database but couldn't decrypt it to read the sensitive login cookies.

This is because modern browsers like Chromium encrypt their cookies using the system's keyring (like **GNOME Keyring** or **KWallet**), and `yt-dlp` needs a Python library to interact with that keyring.

### Solution

You need to install the missing Python module, **`secretstorage`**.

Run the following command in your Ubuntu terminal:

```bash
python3 -m pip install secretstorage
```

**Note:** If you installed `yt-dlp` using your operating system's package manager (`apt`), you might need to install the module using `apt` instead to keep things consistent:

```bash
sudo apt install python3-secretstorage
```

(Using the `pip install` method is generally reliable if you installed `yt-dlp` using `pip`).

Once installed, run your `yt-dlp` command again, and the cookie loading process should complete without the `ERROR: secretstorage not available` message, allowing it to use your login credentials.

---

Would you like me to run the download command for you once you've installed the necessary package, or do you have another question?

# b 3

```
Extracting cookies from chromium
Extracted 7 cookies from chromium
[youtube:tab] Extracting URL: https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd
[youtube:tab] PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd: Downloading webpage
[youtube:tab] PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd: Redownloading playlist API JSON with unavailable videos
[download] Downloading playlist: Music Video
[youtube:tab] PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd page 1: Downloading API JSON
[youtube:tab] Playlist Music Video: Downloading 86 items of 86
[download] Downloading item 1 of 86
[youtube] Extracting URL: https://www.youtube.com/watch?v=ZTlH8A79xFg
[youtube] ZTlH8A79xFg: Downloading webpage
[youtube] ZTlH8A79xFg: Downloading android sdkless player API JSON
[youtube] ZTlH8A79xFg: Downloading tv client config
[youtube] ZTlH8A79xFg: Downloading tv player API JSON
[youtube] ZTlH8A79xFg: Downloading web safari player API JSON
WARNING: [youtube] No title found in player responses; falling back to title from initial data. Other metadata may also be missing
ERROR: [youtube] ZTlH8A79xFg: Sign in to confirm you’re not a bot. Use --cookies-from-browser or --cookies for the authentication. See  https://github.com/yt-dlp/yt-dlp/wiki/FAQ#how-do-i-pass-cookies-to-yt-dlp  for how to manually pass cookies. Also see  https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies  for tips on effectively exporting YouTube cookies
```

---

This is a common and frustrating error with YouTube, as they are constantly updating their anti-bot measures. Even though `yt-dlp` _extracted_ some cookies, they were not sufficient to pass the "Sign in to confirm you're not a bot" check for that specific video.

The most reliable solution when the automatic `--cookies-from-browser` method fails is to manually export your cookies into the Netscape format.

### Recommended Solution: Manual Cookie Export

1.  **Install a Cookie Export Extension:**
    Install a browser extension that can export cookies in the **Netscape format**. A common and reliable one for Chromium-based browsers is **Get cookies.txt LOCALLY**.

2.  **Export the Cookies:**

    - Open Chromium and log in to YouTube.
    - Go to the specific playlist URL you are trying to download.
    - Use the extension to export all cookies for the YouTube domain into a file named **`cookies.txt`** (make sure the format is Netscape).
    - Save this file in the same directory where you will run the `yt-dlp` command.

3.  **Run the Updated Command:**
    Since you are now using a manual file, replace the `--cookies-from-browser` option with the `--cookies` option:

    ```bash
    # Ensure Chromium is closed before running the command!
    yt-dlp \
      --cookies cookies.txt \
      --embed-thumbnail \
      --add-metadata \
      -f "bestvideo*+bestaudio/best" \
      -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
      "https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd"
    ```

**Important Troubleshooting Notes:**

- **Close Chromium:** You must ensure the Chromium browser is completely closed before you run this command. Even with the `cookies.txt` file, YouTube can sometimes detect an open session.
- **Age Restriction:** This error is frequently caused by age-restricted videos. If the video is age-restricted, you must be logged in to an account that has verified its age. The manually exported cookies should fix this.
- **Playlist Status:** Ensure the playlist is not set to **Private**. If it is, the account associated with the cookies _must_ have access. Unlisted playlists generally download fine with cookies.

# c (a working solution)

<!-- i could locally convert to mp3 later -->

how to download https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd. use yt dlp. save the videos with thumbnail. save subtitles of en, jp, traditional chinese, and simplified chinese. save to a folder named after the playlist.

---

The following single `yt-dlp` command will download the specified YouTube playlist, save the videos with the thumbnail, save the requested subtitles, and place everything into a folder named after the playlist's title.

You will need to have `yt-dlp` installed on your system to run this command.

### The Command

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
--write-thumbnail \
--write-subs \
--sub-langs en,jp,zh-TW,zh-CN \
https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd
```

### Breakdown of the Options

| Option                          | Function                                | Explanation                                                                                                                                                                   |
| :------------------------------ | :-------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-o "%(playlist)s/..."`         | **Save to Folder Named After Playlist** | This is the output template. `%(playlist)s` resolves to the playlist title and is used as the directory name. The videos are saved inside as `[Index] - [Title].[Extension]`. |
| `--write-thumbnail`             | **Save Thumbnail**                      | Instructs `yt-dlp` to download the video thumbnail alongside the video file.                                                                                                  |
| `--write-subs`                  | **Save Subtitles**                      | Enables the downloading of subtitles.                                                                                                                                         |
| `--sub-langs en,jp,zh-TW,zh-CN` | **Specify Subtitle Languages**          | Specifies the exact subtitle languages to download: English (`en`), Japanese (`jp`), Traditional Chinese (`zh-TW`), and Simplified Chinese (`zh-CN`).                         |
| `[URL]`                         | **Playlist URL**                        | The URL of the YouTube playlist to download.                                                                                                                                  |

### Note on Subtitles

If you also want to include automatically generated subtitles (if they are available for any of the languages), you can add the `--write-auto-subs` flag to the command.

For example:

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" --write-thumbnail --write-subs --sub-langs en,jp,zh-TW,zh-CN --write-auto-subs https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd
```

# c (final solution)

<!-- i could locally convert to mp3 later -->

how to download https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd. use yt dlp. use mp3 and embed the thumbnails. embed the lyrics of en, jp, tc, and sc (incl. auto generated). save to a folder named after the playlist.

---

The following single command, using `yt-dlp`, will download the playlist as MP3 files, embed the thumbnails, attempt to embed the specified lyrics, and save them into a folder named after the playlist:

```bash
yt-dlp \
    --extract-audio \
    --audio-format mp3 \
    --embed-thumbnail \
    --write-subs \
    --write-auto-subs \
    --sub-langs "en,jp,tc,sc" \
    --embed-metadata \
    -o "%(playlist)s/%(title)s.%(ext)s" \
    "https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd"
```

### Explanation of Arguments:

- `--extract-audio --audio-format mp3`: Converts the video to an MP3 audio file.
- `--embed-thumbnail`: Embeds the video's thumbnail as cover art in the MP3 file.
- `--write-subs --write-auto-subs`: Instructs `yt-dlp` to download all available human-written subtitles (`--write-subs`) and auto-generated subtitles (`--write-auto-subs`).
- `--sub-langs "en,jp,tc,sc"`: Filters the subtitles to include only English, Japanese, Traditional Chinese, and Simplified Chinese.
- `--embed-metadata`: Attempts to embed all relevant metadata, including the downloaded lyrics/subtitles, into the MP3 file.
- `-o "%(playlist)s/%(title)s.%(ext)s"`: Sets the output template to save files into a new directory named after the playlist (`%(playlist)s`) and then names the file by its title (`%(title)s`).

# . (revision)

<!-- download only audio (opus) could be faster. -->

<!-- it seems that vlc could not handle audio with subtitle... it could be solved locally ofc. but, just be simple. background music, right? -->

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
--embed-thumbnail \
--write-subs \
--write-auto-subs \
--sub-langs en,jp,zh-TW,zh-CN \
"https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd"
```

```bash
yt-dlp \
    --extract-audio \
    --embed-thumbnail \
    --write-subs \
    --write-auto-subs \
    --embed-metadata \
    -o "deco27/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
    "https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd"
```

<!-- any lang not en will cause 429 too many req. iterating from the beginning will cause 429 for the last a few vids. -->

```bash
yt-dlp -o "%(playlist_index)s - %(title)s.%(ext)s" \
--embed-thumbnail \
--write-subs -I "-20::1" \
--write-auto-subs \
--sub-langs "en" \     
"https://www.youtube.com/playlist?list=PL6c6sPNdnX_UjsnvrQ_fssRHcon05f0Xd"
```