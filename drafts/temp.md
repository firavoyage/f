```sh
yt-dlp \
  "https://music.youtube.com/playlist?list=OLAK5uy_kbVTOPNS3CZAQznMRZqmCqVtMQNbWBnb4" \
  -x --audio-format mp3 --audio-quality 0 --add-metadata --embed-thumbnail \
  --match-filters "view_count > 100000" \
  --reject-title "(?i)inst" \
  --simulate \
  -o "_/Hiroji Miyamoto/%(title).100B - %(album,playlist_title).50B - %(artist).50B.%(ext)s";
```
