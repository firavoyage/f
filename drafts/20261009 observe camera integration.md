# .

```
 ~ % sudo apt update && sudo apt install v4l-utils -y
 ~ % sudo apt install fswebcam -y
```

```
 ~ % v4l2-ctl --list-devices
2MP USB Camera: 2MP USB Camera (usb-0000:03:00.3-2):
        /dev/video4
        /dev/video5
        /dev/media2

Integrated Camera: Integrated C (usb-0000:03:00.4-4):
        /dev/video0
        /dev/video1
        /dev/video2
        /dev/video3
        /dev/media0
        /dev/media1
```

```
 ~ % fswebcam -d /dev/video4 -r 1280x720 --jpeg 95 snapshot.jpg

--- Opening /dev/video4...
Trying source module v4l2...
/dev/video4 opened.
No input was specified, using the first.
--- Capturing frame...
Captured frame in 0.00 seconds.
--- Processing captured image...
Setting output format to JPEG, quality 95
Writing JPEG image to 'snapshot.jpg'.
 ~ % fswebcam -d /dev/video4 -r 1280x720 --jpeg 95 snapshot.jpg

--- Opening /dev/video4...
Trying source module v4l2...
/dev/video4 opened.
No input was specified, using the first.
--- Capturing frame...
Captured frame in 0.00 seconds.
--- Processing captured image...
Setting output format to JPEG, quality 95
Writing JPEG image to 'snapshot.jpg'.
 ~ % fswebcam -d /dev/video4 -r 1280x720 --jpeg 95 snapshot.jpg

--- Opening /dev/video4...
Trying source module v4l2...
/dev/video4 opened.
No input was specified, using the first.
--- Capturing frame...
Captured frame in 0.00 seconds.
--- Processing captured image...
Setting output format to JPEG, quality 95
Writing JPEG image to 'snapshot.jpg'.
 ~ % fswebcam -d /dev/video4 -r 4000x2000 --jpeg 95 snapshot.jpg

--- Opening /dev/video4...
Trying source module v4l2...
/dev/video4 opened.
No input was specified, using the first.
Adjusting resolution from 4000x2000 to 1920x1080.
--- Capturing frame...
GD Warning: gd-jpeg: JPEG library reports unrecoverable error: Not a JPEG file: starts with 0xa7 0x74Captured frame in 0.00 seconds.
--- Processing captured image...
Setting output format to JPEG, quality 95
Writing JPEG image to 'snapshot.jpg'.
 ~ % fswebcam -d /dev/video4 -r 1920x1080 --jpeg 95 snapshot.jpg

--- Opening /dev/video4...
Trying source module v4l2...
/dev/video4 opened.
No input was specified, using the first.
--- Capturing frame...
Captured frame in 0.00 seconds.
--- Processing captured image...
Setting output format to JPEG, quality 95
Writing JPEG image to 'snapshot.jpg'.
```

```
 ~ % ffmpeg -f v4l2 -video_size 1920x1080 -i /dev/video2 -frames:v 1 snapshot_ffmpeg.jpg -y

ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)
  configuration: --prefix=/usr --extra-version=3ubuntu5 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --disable-omx --enable-gnutls --enable-libaom --enable-libass --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libglslang --enable-libgme --enable-libgsm --enable-libharfbuzz --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg --enable-openal --enable-opencl --enable-opengl --disable-sndio --enable-libvpl --disable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-ladspa --enable-libbluray --enable-libjack --enable-libpulse --enable-librabbitmq --enable-librist --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libx264 --enable-libzmq --enable-libzvbi --enable-lv2 --enable-sdl2 --enable-libplacebo --enable-librav1e --enable-pocketsphinx --enable-librsvg --enable-libjxl --enable-shared
  libavutil      58. 29.100 / 58. 29.100
  libavcodec     60. 31.102 / 60. 31.102
  libavformat    60. 16.100 / 60. 16.100
  libavdevice    60.  3.100 / 60.  3.100
  libavfilter     9. 12.100 /  9. 12.100
  libswscale      7.  5.100 /  7.  5.100
  libswresample   4. 12.100 /  4. 12.100
  libpostproc    57.  3.100 / 57.  3.100
[video4linux2,v4l2 @ 0x64dfd22e9e40] The V4L2 driver changed the video from 1920x1080 to 640x360
Input #0, video4linux2,v4l2, from '/dev/video2':
  Duration: N/A, start: 2749.466133, bitrate: 27648 kb/s
  Stream #0:0: Video: rawvideo (Y800 / 0x30303859), gray, 640x360, 27648 kb/s, 15 fps, 15 tbr, 1000k tbn
Stream mapping:
  Stream #0:0 -> #0:0 (rawvideo (native) -> mjpeg (native))
Press [q] to stop, [?] for help
[swscaler @ 0x64dfd230a280] deprecated pixel format used, make sure you did set range correctly
Output #0, image2, to 'snapshot_ffmpeg.jpg':
  Metadata:
    encoder         : Lavf60.16.100
  Stream #0:0: Video: mjpeg, yuvj444p(pc, progressive), 640x360, q=2-31, 200 kb/s, 15 fps, 15 tbn
    Metadata:
      encoder         : Lavc60.31.102 mjpeg
    Side data:
      cpb: bitrate max/min/avg: 0/0/200000 buffer size: 0 vbv_delay: N/A
[image2 @ 0x64dfd22ec340] The specified filename 'snapshot_ffmpeg.jpg' does not contain an image sequence pattern or a pattern is invalid.
[image2 @ 0x64dfd22ec340] Use a pattern such as %03d for an image sequence or use the -update option (with -frames:v 1 if needed) to write a single image.
[out#0/image2 @ 0x64dfd22eb780] video:3kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown
frame=    1 fps=0.0 q=1.6 Lsize=N/A time=00:00:00.00 bitrate=N/A speed=   0x
 ~ % ffmpeg -f v4l2 -video_size 1920x1080 -i /dev/video2 -frames:v 1 snapshot_ffmpeg.jpg -y

ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)
  configuration: --prefix=/usr --extra-version=3ubuntu5 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --disable-omx --enable-gnutls --enable-libaom --enable-libass --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libglslang --enable-libgme --enable-libgsm --enable-libharfbuzz --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg --enable-openal --enable-opencl --enable-opengl --disable-sndio --enable-libvpl --disable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-ladspa --enable-libbluray --enable-libjack --enable-libpulse --enable-librabbitmq --enable-librist --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libx264 --enable-libzmq --enable-libzvbi --enable-lv2 --enable-sdl2 --enable-libplacebo --enable-librav1e --enable-pocketsphinx --enable-librsvg --enable-libjxl --enable-shared
  libavutil      58. 29.100 / 58. 29.100
  libavcodec     60. 31.102 / 60. 31.102
  libavformat    60. 16.100 / 60. 16.100
  libavdevice    60.  3.100 / 60.  3.100
  libavfilter     9. 12.100 /  9. 12.100
  libswscale      7.  5.100 /  7.  5.100
  libswresample   4. 12.100 /  4. 12.100
  libpostproc    57.  3.100 / 57.  3.100
[video4linux2,v4l2 @ 0x6285f5eb3e40] The V4L2 driver changed the video from 1920x1080 to 640x360
Input #0, video4linux2,v4l2, from '/dev/video2':
  Duration: N/A, start: 2756.242269, bitrate: 27648 kb/s
  Stream #0:0: Video: rawvideo (Y800 / 0x30303859), gray, 640x360, 27648 kb/s, 15 fps, 15 tbr, 1000k tbn
Stream mapping:
  Stream #0:0 -> #0:0 (rawvideo (native) -> mjpeg (native))
Press [q] to stop, [?] for help
[swscaler @ 0x6285f5ed4280] deprecated pixel format used, make sure you did set range correctly
Output #0, image2, to 'snapshot_ffmpeg.jpg':
  Metadata:
    encoder         : Lavf60.16.100
  Stream #0:0: Video: mjpeg, yuvj444p(pc, progressive), 640x360, q=2-31, 200 kb/s, 15 fps, 15 tbn
    Metadata:
      encoder         : Lavc60.31.102 mjpeg
    Side data:
      cpb: bitrate max/min/avg: 0/0/200000 buffer size: 0 vbv_delay: N/A
[image2 @ 0x6285f5eb6340] The specified filename 'snapshot_ffmpeg.jpg' does not contain an image sequence pattern or a pattern is invalid.
[image2 @ 0x6285f5eb6340] Use a pattern such as %03d for an image sequence or use the -update option (with -frames:v 1 if needed) to write a single image.
[out#0/image2 @ 0x6285f5eb5780] video:3kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown
frame=    1 fps=0.0 q=1.6 Lsize=N/A time=00:00:00.00 bitrate=N/A speed=   0x
 ~ % ffmpeg -f v4l2 -video_size 1920x1080 -i /dev/video4 -frames:v 1 snapshot_ffmpeg.jpg -y

ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)
  configuration: --prefix=/usr --extra-version=3ubuntu5 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --disable-omx --enable-gnutls --enable-libaom --enable-libass --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libglslang --enable-libgme --enable-libgsm --enable-libharfbuzz --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg --enable-openal --enable-opencl --enable-opengl --disable-sndio --enable-libvpl --disable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-ladspa --enable-libbluray --enable-libjack --enable-libpulse --enable-librabbitmq --enable-librist --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libx264 --enable-libzmq --enable-libzvbi --enable-lv2 --enable-sdl2 --enable-libplacebo --enable-librav1e --enable-pocketsphinx --enable-librsvg --enable-libjxl --enable-shared
  libavutil      58. 29.100 / 58. 29.100
  libavcodec     60. 31.102 / 60. 31.102
  libavformat    60. 16.100 / 60. 16.100
  libavdevice    60.  3.100 / 60.  3.100
  libavfilter     9. 12.100 /  9. 12.100
  libswscale      7.  5.100 /  7.  5.100
  libswresample   4. 12.100 /  4. 12.100
  libpostproc    57.  3.100 / 57.  3.100
[video4linux2,v4l2 @ 0x55d7d0d84e40] The V4L2 driver changed the video from 1920x1080 to 640x480
Input #0, video4linux2,v4l2, from '/dev/video4':
  Duration: N/A, start: 2770.889645, bitrate: 147456 kb/s
  Stream #0:0: Video: rawvideo (YUY2 / 0x32595559), yuyv422, 640x480, 147456 kb/s, 30 fps, 30 tbr, 1000k tbn
Stream mapping:
  Stream #0:0 -> #0:0 (rawvideo (native) -> mjpeg (native))
Press [q] to stop, [?] for help
[swscaler @ 0x55d7d0da5280] deprecated pixel format used, make sure you did set range correctly
Output #0, image2, to 'snapshot_ffmpeg.jpg':
  Metadata:
    encoder         : Lavf60.16.100
  Stream #0:0: Video: mjpeg, yuvj422p(pc, progressive), 640x480, q=2-31, 200 kb/s, 30 fps, 30 tbn
    Metadata:
      encoder         : Lavc60.31.102 mjpeg
    Side data:
      cpb: bitrate max/min/avg: 0/0/200000 buffer size: 0 vbv_delay: N/A
[image2 @ 0x55d7d0d87340] The specified filename 'snapshot_ffmpeg.jpg' does not contain an image sequence pattern or a pattern is invalid.
[image2 @ 0x55d7d0d87340] Use a pattern such as %03d for an image sequence or use the -update option (with -frames:v 1 if needed) to write a single image.
[out#0/image2 @ 0x55d7d0d86780] video:17kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown
frame=    1 fps=0.0 q=5.8 Lsize=N/A time=00:00:00.00 bitrate=N/A speed=   0x
```

```
 ~ % wpctl status

PipeWire 'pipewire-0' [1.0.5, fira@Fira, cookie:4265745739]
 └─ Clients:
        32. pipewire                            [1.0.5, fira@Fira, pid:1918]
        34. WirePlumber                         [1.0.5, fira@Fira, pid:1917]
        35. WirePlumber [export]                [1.0.5, fira@Fira, pid:1917]
        62. GNOME Volume Control Media Keys     [1.0.5, fira@Fira, pid:4344]
        63. gnome-shell                         [1.0.5, fira@Fira, pid:4052]
        64. GNOME Shell Volume Control          [1.0.5, fira@Fira, pid:4052]
        65. xdg-desktop-portal                  [1.0.5, fira@Fira, pid:4758]
        66. Chromium input                      [1.0.5, fira@Fira, pid:7146]
        75. wpctl                               [1.0.5, fira@Fira, pid:20066]

Audio
 ├─ Devices:
 │      50. Renoir Radeon High Definition Audio Controller [alsa]
 │      51. Family 17h/19h HD Audio Controller  [alsa]
 │      74. 2MP USB Camera                      [alsa]
 │
 ├─ Sinks:
 │  *   56. Family 17h/19h HD Audio Controller Speaker + Headphones [vol: 0.50]
 │
 ├─ Sink endpoints:
 │
 ├─ Sources:
 │      57. Family 17h/19h HD Audio Controller Headphones Stereo Microphone [vol: 1.00]
 │      58. Family 17h/19h HD Audio Controller Digital Microphone [vol: 0.90]
 │  *   71. 2MP USB Camera Analog Stereo        [vol: 1.00]
 │
 ├─ Source endpoints:
 │
 └─ Streams:

Video
 ├─ Devices:
 │      46. Integrated Camera                   [v4l2]
 │      47. Integrated Camera                   [v4l2]
 │      48. Integrated Camera                   [v4l2]
 │      49. Integrated Camera                   [v4l2]
 │      67. 2MP USB Camera                      [v4l2]
 │      69. 2MP USB Camera                      [v4l2]
 │
 ├─ Sinks:
 │
 ├─ Sink endpoints:
 │
 ├─ Sources:
 │  *   52. Integrated Camera (V4L2)
 │      54. Integrated Camera (V4L2)
 │      70. 2MP USB Camera (V4L2)
 │
 ├─ Source endpoints:
 │
 └─ Streams:

Settings
 └─ Default Configured Node Names:
```

```
 ~ % v4l2-ctl --device=/dev/video0 --list-formats-ext

ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture

        [0]: 'MJPG' (Motion-JPEG, compressed)
                Size: Discrete 1280x720
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 320x180
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 320x240
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 352x288
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 424x240
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 640x360
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 848x480
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 960x540
                        Interval: Discrete 0.033s (30.000 fps)
        [1]: 'YUYV' (YUYV 4:2:2)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 320x180
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 320x240
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 352x288
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 424x240
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 640x360
                        Interval: Discrete 0.033s (30.000 fps)
                Size: Discrete 848x480
                        Interval: Discrete 0.050s (20.000 fps)
                Size: Discrete 960x540
                        Interval: Discrete 0.067s (15.000 fps)
                Size: Discrete 1280x720
                        Interval: Discrete 0.100s (10.000 fps)
 ~ % v4l2-ctl --device=/dev/video4 --list-formats-ext

ioctl: VIDIOC_ENUM_FMT
        Type: Video Capture

        [0]: 'MJPG' (Motion-JPEG, compressed)
                Size: Discrete 1920x1080
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 1280x960
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 1280x720
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 640x360
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 1920x1080
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
        [1]: 'YUYV' (YUYV 4:2:2)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 640x360
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                Size: Discrete 640x480
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
                        Interval: Discrete 0.033s (30.000 fps)
                        Interval: Discrete 0.040s (25.000 fps)
```

```
 ~ % mkdir -p ~/webcam_dataset

 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -f image2 -strftime 1 -r 1 "$HOME/webcam_dataset/%Y-%m-%d_%H-00/shot_%M-%S.jpg"

[image2 @ 0x5939935cad80] Could not open file : /home/fira/webcam_dataset/2026-10-09_16-00/shot_40-54.jpg
[vost#0:0/mjpeg @ 0x5939935cf000] Error submitting a packet to the muxer: Input/output error
[out#0/image2 @ 0x5939935cb8c0] Error muxing a packet
 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -f image2 -strftime 1 -r 1 -mkdir 1 "$HOME/webcam_dataset/%Y-%m-%d_%H-00/shot_%M-%S.jpg"

Unrecognized option 'mkdir'.
Error splitting the argument list: Option not found
 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -f image2 -strftime 1 -r 1 -mkdir 1 "$HOME/webcam_dataset/%Y-%m-%d_%H-00_shot_%M-%S.jpg"

Unrecognized option 'mkdir'.
Error splitting the argument list: Option not found
 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -f image2 -strftime 1 -r 1 "$HOME/webcam_dataset/%Y-%m-%d_%H-00_shot_%M-%S.jpg"

 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -r 1 -vcodec copy "$HOME/webcam_dataset/capture_output.mkv"

 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -r 1 -vcodec copy "$HOME/webcam_dataset/timelapse.mkv" -y

 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -r 1 -vcodec libx264 -crf 23 -g 1 "$HOME/webcam_dataset/timelapse_1fps.mkv" -y
```

```
 ~ % df -i

Filesystem       Inodes   IUsed    IFree IUse% Mounted on
tmpfs           1963003    1781  1961222    1% /run
/dev/nvme0n1p3 31227904 3075627 28152277   10% /
tmpfs           1963003     374  1962629    1% /dev/shm
tmpfs           1963003      10  1962993    1% /run/lock
efivarfs              0       0        0     - /sys/firmware/efi/efivars
tmpfs           1963003       1  1963002    1% /run/qemu
/dev/nvme0n1p1        0       0        0     - /boot/efi
tmpfs            392600     252   392348    1% /run/user/1000
```

```
 ~ % ffmpeg -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -frames:v 1 usb_cam_max.jpg -y

ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)
  configuration: --prefix=/usr --extra-version=3ubuntu5 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --disable-omx --enable-gnutls --enable-libaom --enable-libass --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libglslang --enable-libgme --enable-libgsm --enable-libharfbuzz --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg --enable-openal --enable-opencl --enable-opengl --disable-sndio --enable-libvpl --disable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-ladspa --enable-libbluray --enable-libjack --enable-libpulse --enable-librabbitmq --enable-librist --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libx264 --enable-libzmq --enable-libzvbi --enable-lv2 --enable-sdl2 --enable-libplacebo --enable-librav1e --enable-pocketsphinx --enable-librsvg --enable-libjxl --enable-shared
  libavutil      58. 29.100 / 58. 29.100
  libavcodec     60. 31.102 / 60. 31.102
  libavformat    60. 16.100 / 60. 16.100
  libavdevice    60.  3.100 / 60.  3.100
  libavfilter     9. 12.100 /  9. 12.100
  libswscale      7.  5.100 /  7.  5.100
  libswresample   4. 12.100 /  4. 12.100
  libpostproc    57.  3.100 / 57.  3.100
[mjpeg @ 0x646088b818c0] No JPEG data found in image
Input #0, video4linux2,v4l2, from '/dev/video4':
  Duration: N/A, start: 3274.756920, bitrate: N/A
  Stream #0:0: Video: mjpeg (Baseline), yuvj420p(pc, bt470bg/unknown/unknown), 1920x1080, 30 fps, 30 tbr, 1000k tbn
Stream mapping:
  Stream #0:0 -> #0:0 (mjpeg (native) -> mjpeg (native))
Press [q] to stop, [?] for help
[mjpeg @ 0x646088b82540] No JPEG data found in image
[vist#0:0/mjpeg @ 0x646088b823c0] Error submitting packet to decoder: Invalid data found when processing input
Output #0, image2, to 'usb_cam_max.jpg':
  Metadata:
    encoder         : Lavf60.16.100
  Stream #0:0: Video: mjpeg, yuvj420p(pc, bt470bg/unknown/unknown, progressive), 1920x1080, q=2-31, 200 kb/s, 30 fps, 30 tbn
    Metadata:
      encoder         : Lavc60.31.102 mjpeg
    Side data:
      cpb: bitrate max/min/avg: 0/0/200000 buffer size: 0 vbv_delay: N/A
[image2 @ 0x646088b82cc0] The specified filename 'usb_cam_max.jpg' does not contain an image sequence pattern or a pattern is invalid.
[image2 @ 0x646088b82cc0] Use a pattern such as %03d for an image sequence or use the -update option (with -frames:v 1 if needed) to write a single image.
[out#0/image2 @ 0x646088b83800] video:59kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown
frame=    1 fps=0.0 q=7.1 Lsize=N/A time=00:00:00.00 bitrate=N/A speed=   0x
 ~ % ffmpeg -f v4l2 -input_format mjpeg -video_size 1280x720 -i /dev/video0 -frames:v 1 integrated_max.jpg -y

ffmpeg version 6.1.1-3ubuntu5 Copyright (c) 2000-2023 the FFmpeg developers
  built with gcc 13 (Ubuntu 13.2.0-23ubuntu3)
  configuration: --prefix=/usr --extra-version=3ubuntu5 --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --arch=amd64 --enable-gpl --disable-stripping --disable-omx --enable-gnutls --enable-libaom --enable-libass --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libglslang --enable-libgme --enable-libgsm --enable-libharfbuzz --enable-libmp3lame --enable-libmysofa --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg --enable-openal --enable-opencl --enable-opengl --disable-sndio --enable-libvpl --disable-libmfx --enable-libdc1394 --enable-libdrm --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-ladspa --enable-libbluray --enable-libjack --enable-libpulse --enable-librabbitmq --enable-librist --enable-libsrt --enable-libssh --enable-libsvtav1 --enable-libx264 --enable-libzmq --enable-libzvbi --enable-lv2 --enable-sdl2 --enable-libplacebo --enable-librav1e --enable-pocketsphinx --enable-librsvg --enable-libjxl --enable-shared
  libavutil      58. 29.100 / 58. 29.100
  libavcodec     60. 31.102 / 60. 31.102
  libavformat    60. 16.100 / 60. 16.100
  libavdevice    60.  3.100 / 60.  3.100
  libavfilter     9. 12.100 /  9. 12.100
  libswscale      7.  5.100 /  7.  5.100
  libswresample   4. 12.100 /  4. 12.100
  libpostproc    57.  3.100 / 57.  3.100
Input #0, video4linux2,v4l2, from '/dev/video0':
  Duration: N/A, start: 3298.484160, bitrate: N/A
  Stream #0:0: Video: mjpeg (Baseline), yuvj422p(pc, bt470bg/unknown/unknown), 1280x720, 30 fps, 30 tbr, 1000k tbn
Stream mapping:
  Stream #0:0 -> #0:0 (mjpeg (native) -> mjpeg (native))
Press [q] to stop, [?] for help
Output #0, image2, to 'integrated_max.jpg':
  Metadata:
    encoder         : Lavf60.16.100
  Stream #0:0: Video: mjpeg, yuvj422p(pc, bt470bg/unknown/unknown, progressive), 1280x720, q=2-31, 200 kb/s, 30 fps, 30 tbn
    Metadata:
      encoder         : Lavc60.31.102 mjpeg
    Side data:
      cpb: bitrate max/min/avg: 0/0/200000 buffer size: 0 vbv_delay: N/A
[image2 @ 0x5602b6ac6cc0] The specified filename 'integrated_max.jpg' does not contain an image sequence pattern or a pattern is invalid.
[image2 @ 0x5602b6ac6cc0] Use a pattern such as %03d for an image sequence or use the -update option (with -frames:v 1 if needed) to write a single image.
[out#0/image2 @ 0x5602b6ac7800] video:42kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown
frame=    1 fps=0.0 q=6.5 Lsize=N/A time=00:00:00.00 bitrate=N/A speed=   0x
```

```
 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -update 1 -frames:v 1 usb_cam_max.jpg -y

 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1280x720 -i /dev/video0 -update 1 -frames:v 1 integrated_max.jpg -y

 ~ % ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -update 1 -frames:v 1 usb_cam_max.jpg -y
```

# . command

```sh
mkdir -p ~/.observe/data/night
ffmpeg -loglevel error -f v4l2 -input_format mjpeg -video_size 1920x1080 -i /dev/video4 -f image2 -strftime 1 -r 1 "$HOME/.observe/data/night/%Y%m%d_%H%M%S.jpg"
```


