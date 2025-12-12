<!-- be easy. just play the music. no lyrics. know, i also have music videos with en subs! enough. -->

<!-- on the phone i would like to have lyrics. using music tag (maybe from netease? idk. but good jp-sc lyrics.). -->

<!-- lyrics is not essential. but why not? -->

<!-- the end state: i have songs (now copied from phone) and music videos (en subs) on the laptop. i have songs with jp-sc lyrics on phone. perfect. -->

<!-- i spent hours. i got freedom. freedom! -->

# a (whether to convert opus to mp3)

should i convert opus to mp3

---

Whether you should convert Opus to MP3 depends on your specific needs. Here's a breakdown to help you decide:

## **Opus vs. MP3: Key Differences**

- **Opus**: Modern, highly efficient codec. Better quality at lower bitrates than MP3. Smaller file sizes for equivalent quality.
- **MP3**: Older but universally compatible. Supported by virtually every device and software.

## **When to Convert Opus → MP3:**

✅ **Do convert if:**

1. **Compatibility issues**: Your car stereo, older MP3 player, or certain software doesn't support Opus
2. **Sharing with others**: When you can't guarantee the recipient has Opus support
3. **Editing needs**: Some audio editors work better with MP3
4. **Specific requirements**: For platforms/use cases that mandate MP3 format

## **When to Keep Opus:**

❌ **Don't convert if:**

1. **Storage is limited**: Opus files are smaller at same quality
2. **You want better quality**: At lower bitrates (<128kbps), Opus sounds noticeably better
3. **Modern devices only**: Phones, computers, and modern players typically support Opus
4. **Streaming/online use**: Opus is standard for WhatsApp, Discord, YouTube, etc.

## **If You Decide to Convert:**

- Use a quality converter like **ffmpeg**, **Audacity**, or **Foobar2000**
- For MP3, use at least **192kbps** to avoid noticeable quality loss from transcoding
- Consider keeping the original Opus files as backup

## **Practical Recommendation:**

**Keep Opus** for personal use on modern devices to save space and maintain quality.  
**Convert to MP3** only when you encounter compatibility problems with specific devices or people.

**Bottom line**: Only convert when necessary, as transcoding (converting lossy to lossy) always reduces quality slightly. Try playing the Opus files first - you might find they work everywhere you need!

# b (why not opus)

vlc could not show subtitle properly. what about embeding the lyrics like other songs.

```
/home/fira/deco27/Music Video/01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.en.vtt
/home/fira/deco27/Music Video/01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.opus
/home/fira/deco27/Music Video/02 - DECO＊27 - カイコ feat. 初音ミク.en.vtt
/home/fira/deco27/Music Video/02 - DECO＊27 - カイコ feat. 初音ミク.opus
/home/fira/deco27/Music Video/03 - DECO＊27 - マシュマロ feat. 初音ミク.en.vtt
/home/fira/deco27/Music Video/03 - DECO＊27 - マシュマロ feat. 初音ミク.opus
/home/fira/deco27/Music Video/04 - DECO＊27 - モニタリング (Best Friend Remix) feat. 初音ミク.en.vtt
/home/fira/deco27/Music Video/04 - DECO＊27 - モニタリング (Best Friend Remix) feat. 初音ミク.opus
/home/fira/deco27/Music Video/05 - DECO＊27 - チェリーポップ feat. 初音ミク.en.vtt
/home/fira/deco27/Music Video/05 - DECO＊27 - チェリーポップ feat. 初音ミク.opus
/home/fira/deco27/Music Video/06 - DECO＊27 - 弱虫モンブラン (Reloaded) feat. 初音ミク.en.vtt
/home/fira/deco27/Music Video/06 - DECO＊27 - 弱虫モンブラン (Reloaded) feat. 初音ミク.opus
```

---

You're absolutely right! Opus files **can** contain lyrics and metadata just like MP3. My previous MP3 suggestion was for wider compatibility, but let's work with Opus directly.

## **Can Opus Contain Lyrics?**

**Yes!** Opus files can store lyrics and metadata in several ways:

1. **Embedded metadata tags** (like ID3v2 or Vorbis comments)
2. **Sidecar files** (.lrc, .vtt, .ass)
3. **Container formats** (Ogg/Matroska with Opus audio + subtitle track)

## **Better Solutions for Opus Files:**

### **Option 1: Embed Lyrics as Metadata (Synchronized)**

```bash
# Using ffmpeg to embed VTT subtitles into Opus (as timed lyrics)
for opus in *.opus; do
    base="${opus%.opus}"
    vtt="${base}.en.vtt"

    if [ -f "$vtt" ]; then
        # Convert VTT to LRC (simpler format for metadata)
        # First, install lrc2ffmpeg if needed
        # Then:
        ffmpeg -i "$opus" -i "${base}.lrc" \
            -metadata:s:a:0 lyrics-eng="$(cat "${base}.lrc")" \
            -c:a copy \
            "${base}_with_lyrics.opus"
    fi
done
```

### **Option 2: Create Ogg Container with Lyrics Track**

```bash
# Package Opus + VTT in Ogg container (similar to web streaming)
for opus in *.opus; do
    base="${opus%.opus}"
    vtt="${base}.en.vtt"

    ffmpeg -i "$opus" -i "$vtt" \
        -map 0 -map 1 \
        -c:a copy \
        -c:s webvtt \
        -metadata:s:s:0 language=eng \
        -disposition:s:0 attached_pic \
        "${base}_lyrics.ogg"
done
```

### **Option 3: Add Lyrics as Plain Text Metadata**

```bash
# Simple text lyrics (not timed)
for opus in *.opus; do
    base="${opus%.opus}"

    # Extract text from VTT (remove timestamps)
    grep -v "^[0-9]" "${base}.en.vtt" | grep -v "WEBVTT" | grep -v "^$" > /tmp/lyrics.txt

    # Embed as metadata
    opus-tools/opusenc --comment "LYRICS=$(cat /tmp/lyrics.txt)" \
        --artist "DECO＊27 feat. 初音ミク" \
        --title "$(echo "$base" | cut -d'-' -f2-)" \
        "$opus" "${base}_tagged.opus"
done
```

### **Option 4: Use Music Players with External Subtitle Support**

Some music players that work well with external subtitle files for Opus:

1. **MPV** (command-line/media player):

   ```bash
   mpv --sub-file="01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.en.vtt" \
       --audio-display=sub \
       "01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.opus"
   ```

2. **Audacious** (with lyrics plugin):

   ```bash
   sudo apt install audacious audacious-plugins
   ```

   Place .vtt files with same name as .opus files in same directory

3. **Strawberry Music Player** - Supports embedded lyrics and external LRC files

### **Option 5: Convert VTT to LRC and Pair with Opus**

```bash
# Convert VTT to LRC format (more music player friendly)
for vtt in *.en.vtt; do
    base="${vtt%.en.vtt}"
    # Simple conversion (adjust timing format)
    awk '/^[0-9]/ {gsub(",", ".", $1); print "[" $1 "] " substr($0, index($0, $3))}' "$vtt" \
        | sed '1i[length: 03:45.00]' > "${base}.lrc"
done

# Now you have .lrc files that many music players recognize
# Place them in same directory as .opus files
```

### **Option 6: Embed with Tag Editors**

```bash
# Using picard-tools or easytag
sudo apt install easytag

# Or use kid3-qt
sudo apt install kid3-qt

# Then manually add lyrics through GUI
```

### **Option 7: Create MKA Files (Matroska Audio)**

```bash
# This is actually the best solution - keeps Opus audio quality with subtitle track
for opus in *.opus; do
    base="${opus%.opus}"
    ffmpeg -i "$opus" -i "${base}.en.vtt" \
        -map 0:a -map 1 \
        -c:a copy -c:s webvtt \
        -metadata:s:s:0 language=eng \
        -metadata:s:s:0 title="Lyrics" \
        -disposition:s:0 default \
        "${base}.mka"
done
```

## **Why I Suggested MP3 (and why it's not necessary):**

- **MP3**: Universal support, easy lyrics embedding
- **Opus**: Better quality at lower bitrates, but fewer tools for metadata

## **My Recommendation for You:**

1. **If you use VLC/MPV**: Keep .vtt files alongside .opus files with same base name
2. **For mobile/other players**: Convert to .lrc format and use Option 5
3. **For permanent solution**: Use Option 7 (.mka files) - best of both worlds

**Quick fix for your setup:**

```bash
# Rename .en.vtt to .vtt (VLC might recognize better)
for file in *.en.vtt; do
    mv "$file" "${file%.en.vtt}.vtt"
done

# Or create symlinks
for opus in *.opus; do
    base="${opus%.opus}"
    ln -sf "${base}.en.vtt" "${base}.vtt"
done
```

Would you like help with any specific approach or need a script to batch process your DECO＊27 collection?

# c (just convert to mp3)

<!-- metro does not seem to support opus. -->

```
/home/fira/Music/DECO＊27 (Copy)/01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.en.vtt
/home/fira/Music/DECO＊27 (Copy)/01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/02 - DECO＊27 - カイコ feat. 初音ミク.en.vtt
/home/fira/Music/DECO＊27 (Copy)/02 - DECO＊27 - カイコ feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/03 - DECO＊27 - マシュマロ feat. 初音ミク.en.vtt
/home/fira/Music/DECO＊27 (Copy)/03 - DECO＊27 - マシュマロ feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/04 - DECO＊27 - モニタリング (Best Friend Remix) feat. 初音ミク.en.vtt
/home/fira/Music/DECO＊27 (Copy)/04 - DECO＊27 - モニタリング (Best Friend Remix) feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/05 - DECO＊27 - チェリーポップ feat. 初音ミク.en.vtt
/home/fira/Music/DECO＊27 (Copy)/05 - DECO＊27 - チェリーポップ feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/06 - DECO＊27 - 弱虫モンブラン (Reloaded) feat. 初音ミク.en.vtt
/home/fira/Music/DECO＊27 (Copy)/06 - DECO＊27 - 弱虫モンブラン (Reloaded) feat. 初音ミク.opus
```

convert to mp3 using ffmpeg on ubuntu.

---

Here are several ways to convert the OPUS files to MP3 using ffmpeg on Ubuntu:

## Method 1: Convert all OPUS files in the directory

```bash
cd "/home/fira/Music/DECO＊27 (Copy)"
for file in *.opus; do
    ffmpeg -i "$file" -codec:a libmp3lame -qscale:a 2 "${file%.opus}.mp3"
done
```

## Method 2: Convert only specific files (using your list)

```bash
# Save your file list to a text file first
cat > convert_list.txt << 'EOF'
/home/fira/Music/DECO＊27 (Copy)/01 - DECO＊27 - 愛迷エレジー (Reloaded) feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/02 - DECO＊27 - カイコ feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/03 - DECO＊27 - マシュマロ feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/04 - DECO＊27 - モニタリング (Best Friend Remix) feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/05 - DECO＊27 - チェリーポップ feat. 初音ミク.opus
/home/fira/Music/DECO＊27 (Copy)/06 - DECO＊27 - 弱虫モンブラン (Reloaded) feat. 初音ミク.opus
EOF

# Convert using the list
while read -r file; do
    mp3_file="${file%.opus}.mp3"
    ffmpeg -i "$file" -codec:a libmp3lame -qscale:a 2 "$mp3_file"
done < convert_list.txt
```

## Method 3: One-liner using parallel processing (if you have GNU parallel)

```bash
parallel ffmpeg -i {} -codec:a libmp3lame -qscale:a 2 {.}.mp3 ::: "/home/fira/Music/DECO＊27 (Copy)"/*.opus
```

## Method 4: Preserve metadata with better quality settings

```bash
cd "/home/fira/Music/DECO＊27 (Copy)"
for file in *.opus; do
    ffmpeg -i "$file" \
        -codec:a libmp3lame -q:a 0 \
        -map_metadata 0 \
        -id3v2_version 3 \
        -write_id3v1 1 \
        "${file%.opus}.mp3"
done
```

## Quality settings explanation:

- **`-qscale:a 2`**: Good quality (~190 kbps VBR)
- **`-q:a 0`**: Best quality (~245 kbps VBR)
- **`-b:a 320k`**: Fixed 320 kbps (maximum)
- **`-b:a 192k`**: Fixed 192 kbps (good balance)

## Install ffmpeg if not already installed:

```bash
sudo apt update
sudo apt install ffmpeg
```

## Notes:

1. The `-qscale:a 2` option uses VBR (Variable Bit Rate) which gives good quality at reasonable file size
2. To preserve album art and metadata, use Method 4 with the `-map_metadata` option
3. The `.vtt` files are subtitle files and won't be affected by these commands
4. Special characters in filenames (like `＊`) should be handled correctly by the shell

Choose Method 1 or 4 depending on whether you want to preserve metadata. The converted MP3 files will be created in the same directory as the OPUS files.

# d (music player)

<!-- choice: lollypop -->

<!-- now everything is done. the only problem is vlc could not handle  -->

recommend music player on ubuntu

---

Here are the best music players for Ubuntu, categorized by use case:

## **Top All-Rounders**

### **1. Rhythmbox** (Default in Ubuntu)

- **Best for**: Most users, good balance of features
- **Features**: Library management, podcasts, internet radio, DAAP sharing
- **Install**: Pre-installed on Ubuntu

### **2. Clementine**

- **Best for**: Power users, large libraries
- **Features**: Spotify, Dropbox, Last.fm, podcasts, smart playlists
- **Install**: `sudo apt install clementine`

### **3. Strawberry**

- **Best for**: Clementine fans who want active development
- **Features**: Modern Clementine fork, better Hi-Fi support, Subsonic
- **Install**: `sudo apt install strawberry`

## **Modern & Beautiful**

### **4. Lollypop**

- **Best for**: Modern GNOME desktop users
- **Features**: Beautiful UI, adaptive layout, YouTube integration
- **Install**: `sudo apt install lollypop`

### **5. Elisa** (KDE)

- **Best for**: KDE Plasma users
- **Features**: Clean, modern, integrates with KDE
- **Install**: `sudo apt install elisa`

## **Lightweight & Simple**

### **6. Audacious**

- **Best for**: Windows Winamp/Classic Winamp fans
- **Features**: Winamp-like interface, very lightweight, extensive format support
- **Install**: `sudo apt install audacious`

### **7. Quod Libet**

- **Best for**: Highly customizable, power users
- **Features**: Extremely flexible, regex-based playlists, editable tags
- **Install**: `sudo apt install quodlibet`

## **Specialized**

### **8. Museeks**

- **Best for**: Simple, clean cross-platform experience
- **Features**: Electron-based, minimalist, good for large libraries
- **Install**: Download from [museeks.io](https://museeks.io)

### **9. cmus** (Terminal)

- **Best for**: Terminal lovers, low resource usage
- **Features**: Vim-like controls, extremely lightweight
- **Install**: `sudo apt install cmus`

## **Quick Recommendation**

- **For most users**: **Rhythmbox** (already installed) or **Strawberry**
- **For large libraries**: **Clementine** or **Quod Libet**
- **For modern GNOME**: **Lollypop**
- **For lightweight**: **Audacious** or **cmus**

## **Installation Tip**

Most are available via APT:

```bash
sudo apt update
sudo apt install [player-name]
```

Want something specific? Let me know if you prioritize:

- Large library management
- Streaming service integration
- Minimal resource usage
- Specific audio format support
- Visualizations
- Podcast support
