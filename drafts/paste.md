yt-dlp \
  "https://music.youtube.com/playlist?list=OLAK5uy_lGQF0wFfqfFkG_sTpOeJR9cSwJIo_JOx8" \
  -x \
  --audio-format mp3 \
  --audio-quality 0 \
  --add-metadata \
  --embed-thumbnail \
  --parse-metadata "playlist_index:%(track_number)s" \
  -o "_/%(album,playlist_title)s/%(title)s.%(ext)s"
