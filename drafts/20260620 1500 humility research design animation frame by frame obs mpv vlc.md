# .

mpv: <!-- use space to reset when it gets stuck in long press -->

- pause `space`
- next frame `.`
- prev frame `,`

vlc: <!-- seems much more reliable when long press, though less geeky or feature rich -->

- pause `space`
- next frame `e`
- prev frame `(none)`

obs:

- vid resolution = screen
- 60 fps (?) <!-- 24 or 30fps -->

# how to see an animation frame by frame, i have screen recording and vlc and mpv

You can view your screen recording frame by frame using either VLC or MPV. MPV is generally more precise for this task. \[[1](https://www.laptopmag.com/how-to/view-a-video-frame-by-frame-in-vlc), [2](https://github.com/mpv-player/mpv/issues/2583)]

Here is how to do it in both players.

### Using MPV (Recommended)

MPV offers the best frame-by-frame control and allows you to move both forward and backward. \[[1](https://forum.level1techs.com/t/video-software-frame-by-frame-play/161125)]

- **Pause the video**: Press `Spacebar`.
- **Move forward one frame**: Press `. ` (Period key).
- **Move backward one frame**: Press `, ` (Comma key). \[[1](https://www.reddit.com/r/ffmpeg/comments/idvtq8/how%5Fto%5Fextract%5Fonly%5Fvisually%5Fdifferent%5Fframes/), [2](https://tuberanker.com/blog/how-to-go-frame-by-frame-on-youtube), [3](https://www.simular.ai/workflow/automate-youtube-frame-by-frame-navigation-with-ai-agents), [4](https://vidiq.com/blog/post/youtube-frame-by-frame/)]

### Using VLC Media Player

VLC can native move forward frame by frame, but it requires a workaround or an extension to move backward. \[[1](https://vidiq.com/blog/post/youtube-frame-by-frame/), [2](https://forum.dvdrw.com/t/what-s-the-best-frame-by-frame-video-player-for-mac-and-windows/1931)]

- **Pause the video**: Press `Spacebar`.
- **Move forward one frame**: Press `E`.
- **Move backward**: VLC cannot do this by default. You must click and drag the playback slider backward slightly, or install the "Jump to time previous frame" VLC extension. \[[1](https://www.reddit.com/r/Windows11/comments/1kxvyzw/is%5Fthere%5Fany%5Fgood%5Fmedia%5Fplayer%5Fcapable%5Fof%5Fmoving/), [2](https://superuser.com/questions/1323478/can-vlc-3-0-play-frame-by-frame-backwards), [3](https://www.reddit.com/r/VLC/comments/hk2g44/eli5%5Fwhy%5Fvlc%5Fcant%5Fhave%5Fframebyframe%5Fgoing%5Fboth/), [4](https://superuser.com/questions/712183/how-can-i-view-milliseconds-with-vlc-and-why-is-this-method-not-working)]

To make this easier, would you like help **setting up a custom shortcut** in MPV, or do you need instructions on installing the **VLC extension** for backward movement?

- [link](https://www.laptopmag.com/how-to/view-a-video-frame-by-frame-in-vlc)\
  How to view a video frame-by-frame in VLC\
  Dec 24, 2022 — If you're looking to find every little detail in a movie of video clip, here's how to view a video frame-by-frame in VLC.\
  \
  \
  Laptop Mag
- [link](https://github.com/mpv-player/mpv/issues/2583)\
  Facilitate 3D frame sequential/alternating frames for 3D output · Issue #2583 · mpv-player/mpv\
  Dec 11, 2015 — I would prefer to use mpv (or Plex Media Player) to view 3D content in frame sequential output format. It's my only supported 3D f...\
  \
  \
  GitHub
- [link](https://forum.level1techs.com/t/video-software-frame-by-frame-play/161125)\
  Video software frame by frame play - Linux\
  Aug 29, 2020 — FYI if you (or anyone else) uses mpv: . is frame forward, , is frame backward.\
  \
  \
  Level1Techs Forums

Show all

## You said: how to record via obs for replicating animation design

To record your screen via OBS Studio for frame-by-frame animation analysis, you need settings that capture every single frame with perfect visual clarity. High compression or low frame rates will blur the motion details you want to replicate.

Here is how to configure OBS specifically for capturing animation design.

### 1. Match Your Canvas to Your Screen \[[1](https://www.knowby.co/know-how/how-to-record-with-obs)]

Ensure your recording canvas perfectly matches your monitor resolution to avoid pixel distortion.

- Go to **Settings** > **Video**.
- Set **Base (Canvas) Resolution** to match your monitor (e.g., `1920x1080`).
- Set **Output (Scaled) Resolution** to the exact same value.
- Set **Common FPS Values** to `60`. This ensures smooth motion capture, even if the source animation runs at 24 or 30 FPS. \[[1](https://www.descript.com/blog/article/how-to-record-with-obs), [2](https://fastpix.com/blog/how-to-publish-a-pre-recorded-video-as-a-live-stream), [3](https://blog.sstic.org/2020/04/26/obs-studio-tutorial-for-sstic-2020/), [4](https://www.gumlet.com/learn/how-to-set-up-obs/), [5](https://www.knowby.co/know-how/how-to-record-with-obs)]

### 2. Configure High-Quality Recording Settings \[[1](https://www.dacast.com/blog/how-to-use-obs-professional-video-streaming/)]

Avoid standard streaming settings, which compress the file too much.

- Go to **Settings** > **Output** and switch the **Output Mode** at the top to **Advanced**.
- Click the **Recording** tab.
- **Recording Format**: Choose `MP4` or `MKV`.
- **Video Encoder**: Choose a hardware encoder like `NVIDIA NVENC` (H.264/AV1) or `AMD HW` if available. Choose `x264` if you only have CPU encoding.
- **Rate Control**: Change this from CBR to **CQP** (Constant Quantization Parameter) or **CRF** (Constant Rate Factor).
- **CQ Level / CRF**: Set this between `16` and `20`. Lower numbers mean higher quality and larger file sizes. A value of `16` provides near-lossless clarity perfect for frame-by-frame analysis. \[[1](https://fastpix.com/blog/how-to-use-obs-studio-a-comprehensive-guide), [2](https://www.obsbot.com/blog/obs/how-to-use-obs?srsltid=AfmBOopc5TrL9sSFvL5kcKeE-j8tXVVOBmw2qcVpr6WJq5pICrmtSqmW), [3](https://www.obsbot.com/blog/live-streaming/obs-setting-for-streaming?srsltid=AfmBOoqPUFEt5INoCCKGfW7-jJo653DbDzIPgnHbNQWh%5F8HRQCtGpb0F), [4](https://www.descript.com/blog/article/how-to-record-with-obs), [5](https://digitalfeet.com/blog/how-to-use-the-obs-free-screen-recording/)]

### 3. Set Up Your Capture Source

Capture only what you need to keep the file size manageable and eliminate desktop distractions.

- Go to the **Sources** dock at the bottom of the main OBS window.
- Click the **+** icon.
- Select **Window Capture** if you are recording a specific browser window or app player.
- Select **Display Capture** if you want to record your entire screen. \[[1](https://krisp.ai/blog/how-to-screen-record-on-windows/), [2](https://cloud.wikis.utexas.edu/wiki/spaces/comm/pages/33426269/Screen+Recording+with+OBS+Open+Broadcaster+Software), [3](https://www.youtube.com/watch?v=Np0hQrvcU5o), [4](https://trueconf.com/blog/knowledge-base/video-capturing-customization-and-streaming-using-obs-studio)]

### 4. Verify in MPV or VLC

Once you finish recording, open the file in MPV or VLC. Use the `.` and `,` keys in MPV to step through the file. The lines, easing curves, and motion blurs of the animation should look perfectly sharp on every individual frame.

Would you like to know how to set up **hotkeys** in OBS to quickly start and stop recordings without opening the app window, or do you need help **optimizing your computer's performance** if the recording lags?

- [link](https://www.knowby.co/know-how/how-to-record-with-obs)\
  How to Record with OBS\
  Set your Base (Canvas) Resolution to match your screen resolution for the best quality.\
  \
  \
  Knowby
- [link](https://www.descript.com/blog/article/how-to-record-with-obs)\
  Record with OBS: Easy Screen Recording, Now in 2026\
  Jul 14, 2025 — Video settings: Go to the 'Settings' menu and click on 'Video'. Set the base (canvas) resolution to the resolution of your monitor...\
  \
  \
  Descript
- [link](https://fastpix.com/blog/how-to-publish-a-pre-recorded-video-as-a-live-stream)\
  Pre-recorded video as live stream: OBS, Cloud Playout, API\
  May 22, 2026 — Set the base (canvas) resolution to your monitor's resolution.\
  \
  \
  FastPix

Show all

## You said: what about lower fps

Using a lower FPS (like 24 or 30) for your OBS recording is highly efficient if you are analyzing traditional animation or specific web UI transitions. However, it requires matching your settings perfectly to avoid skipped frames. \[[1](https://www.reddit.com/r/explainlikeimfive/comments/16d23u4/eli5%5Fwhy%5Fscreen%5Frefresh%5Frates%5Fare%5F60hz%5F90hz%5F120hz/), [2](https://www.nvidia.com/en-us/geforce/forums/geforce-experience/14/204735/option-for-target-fps/), [3](https://discussions.unity.com/t/animation-plays-faster-when-there-is-lower-fps/919019), [4](https://obsproject.com/forum/threads/seemingly-impossible-to-fix-fps-issues.185656/), [5](https://community.adobe.com/questions-529/understanding-fps-when-child-comp-s-fps-don-t-match-67270)]

Here is how to manage lower frame rates for animation analysis.

### When to Use Lower FPS

- **24 FPS**: Ideal for classic film animation, anime, and cinematic motion design.
- **30 FPS**: Ideal for standard web animations, app UI transitions, and mobile design.
- **Why do it?**: It creates much smaller file sizes and saves CPU power. \[[1](https://www.100ms.live/blog/frame-rate), [2](https://www.teds.com.au/blogs/product-guides/video-frame-rate-explained?srsltid=AfmBOoq5cwUld1wcj%5F6-LPxLr4MiOMFlUJpG0ISo5VlpPtAsRKWfPymQ), [3](https://www.reddit.com/r/bloodborne/comments/16zarcv/does%5F30%5Ffps%5Faffect%5Fmuch/)]

### The Golden Rule: Match Your Source

If you record at 30 FPS, but the animation you are watching runs at 60 FPS, OBS will throw away every second frame. This completely ruins your ability to analyze the timing and easing curves. \[[1](https://www.reddit.com/r/explainlikeimfive/comments/xby9ah/eli5%5Fhow%5Fis%5Fmy%5F4k%5Ftv%5Fsomewhat%5Fdoubling%5Fthe%5Fframe/), [2](https://www.reddit.com/r/NintendoSwitch/comments/1cf4ux9/bayonetta%5Forigins%5Fdirector%5Fexplains%5Fwhy%5Fthat%5Fgame/)]

- Only use 24 or 30 FPS if you are **100% sure** the source video or app runs at that exact speed.
- If you are unsure, always stick to **60 FPS**. It safely captures 24, 30, and 60 FPS sources without dropping frames. \[[1](https://medium.com/google-developers/frame-rate-as-creative-choice-fb5755909cd9), [2](https://www.reddit.com/r/videography/comments/o2nedb/what%5Ffps%5Frate%5Fdo%5Fi%5Fdrop%5F11995fps%5Ffootage%5Fdown%5Fto/)]

### How to Adjust Settings in OBS

1. Go to **Settings** > **Video**.
2. Change **Common FPS Values** to `24 NTSC` (or `24 Film`) or `30`.
3. Go to **Settings** > **Advanced**.
4. Scroll to **Recording** and ensure **Dynamically change bitrate to manage congestion** is disabled. This prevents OBS from lowering your quality mid-record. \[[1](https://wpstream.net/choosing-the-right-fps/), [2](https://antmedia.io/frame-rate/), [3](https://www.reddit.com/r/AfterEffects/comments/ikmi0y/difference%5Fbetween%5Fsetting%5Fframe%5Frate%5F30fps%5Fvs/), [4](https://www.reddit.com/r/buildapc/comments/rl0zck/does%5Fdecreasing%5Fthe%5Fgpu%5Fresolution%5Fimprove%5Ffps/)]

### The Playback Advantage

If your goal is just to see the animation move slower while you watch it normally, keep the recording at 60 FPS and use your media player to slow it down: \[[1](https://community.gopro.com/s/question/0D53b000092UFOeCAO/ultra-slow-mo-playing-back-at-normal-speed?language=en%5FUS), [2](https://www.shutterstock.com/blog/guide-frame-rates)]

- **In MPV**: Press `[` to slow down playback speed smoothly.
- **In VLC**: Press `[` to decrease playback speed in increments.

Would you like to know how to **check the exact frame rate** of your source animation before recording, or do you want help adjusting your **encoder settings** to handle lower frame rates perfectly?

- [link](https://www.reddit.com/r/explainlikeimfive/comments/16d23u4/eli5%5Fwhy%5Fscreen%5Frefresh%5Frates%5Fare%5F60hz%5F90hz%5F120hz/)\
  Eli5: Why screen refresh rates are 60Hz, 90Hz, 120Hz, and 144Hz? Why not other numbers? : r/explainlikeimfive\
  Sep 8, 2023 — 24 was the lowest FPS you could shoot film while maintaining audio sync.\
  \
  \
  Reddit
- [link](https://www.nvidia.com/en-us/geforce/forums/geforce-experience/14/204735/option-for-target-fps/)\
  Option for target FPS?\
  I was wondering if there are any options for target FPS in Optimal Game Settings? It seems that it targets 30 FPS as the low stand...\
  \
  NVIDIA
- [link](https://discussions.unity.com/t/animation-plays-faster-when-there-is-lower-fps/919019)\
  Animation plays faster when there is lower FPS\
  May 27, 2023 — Animation plays faster when there is lower FPS what you want what you tried what you expected to happen what actually happened, lo...\
  \
  Unity Discussions

Show all

## You said: i mean at 60fps, sometimes next or prev frame are the same

When you record a 60 FPS video but see identical duplicate frames when stepping through it, you are experiencing **duplicate frames** (also called frame holding or frame doubling). \[[1](https://flashcards.world/flashcards/sets/525a41a8-715e-4ca6-8f94-bd1fc8ffaec6), [2](https://www.reddit.com/r/obs/comments/zzxzjw/elgato%5Fframe%5Fstutterframe%5Fduplication/)]

This happens for one of two reasons: either the original animation was made at a lower frame rate, or OBS/your computer is dropping frames during encoding. \[[1](https://www.reddit.com/r/programming/comments/e3tutg/turning%5Fanimations%5Fto%5F60fps%5Fusing%5Fai/), [2](https://www.reddit.com/r/obs/comments/12nfsol/an%5Fageold%5Fissue%5Fstill%5Fpresent%5Fobs%5Fpreview/), [3](https://www.reddit.com/r/Twitch/comments/azqn0x/what%5Famount%5Fof%5Fdropped%5Fframes%5Fdo%5Fyou%5Ffind/), [4](https://learn.microsoft.com/en-us/windows/win32/medfound/howcanavideostreamencodedusingqualitybasedvbrhavef)]

Here is exactly how to identify and fix the issue.

### 1. The Source Animation is "On Twos" (Normal) \[[1](https://www.reddit.com/r/explainlikeimfive/comments/6r1pka/eli5%5Fwhy%5Fdid%5Fmost%5Ftelevisions%5Fand%5Fscreens%5Fin/)]

If the duplicate frames happen in a perfect, predictable pattern (e.g., every single frame is repeated exactly once), the video you are recording is actually a **30 FPS or 24 FPS animation playing inside a 60 FPS container**. \[[1](https://www.reddit.com/r/Sekiro/comments/b3ruy5/sekiro%5Fshadows%5Fdie%5Ftwice%5Fperformance%5Fanalysis/)]

- **Traditional Animation**: Animators often draw "on twos," meaning a new image is only shown every 2 frames.
- **The Math**: A 30 FPS animation recorded at 60 FPS will show 2 identical frames for every 1 movement. A 24 FPS animation recorded at 60 FPS will create an irregular 3:2 pattern of duplicates.
- **The Fix**: This is normal. You do not need to change anything; your player is accurately showing you how the animator timed the project. \[[1](https://www.reddit.com/r/todayilearned/comments/cdlphu/til%5Fthat%5Fin%5Fspiderman%5Finto%5Fthe%5Fspiderverse/), [2](https://www.reddit.com/r/explainlikeimfive/comments/6r1pka/eli5%5Fwhy%5Fdid%5Fmost%5Ftelevisions%5Fand%5Fscreens%5Fin/), [3](https://www.reddit.com/r/videography/comments/csxfvq/60fps%5Ffootage%5Fsuddenly%5Flooks%5Fchoppy%5Fat%5F40%5Fspeed/), [4](https://www.reddit.com/r/explainlikeimfive/comments/p88x79/eli5%5Fwhats%5Fthe%5Fdifference%5Fand%5Frelationship/), [5](https://rog.asus.com/articles/guides/what-are-1-lows-how-to-monitor-and-fix-stutters-in-your-pc-games/)]

### 2. OBS is Overloading (Render/Encoding Lags) \[[1](https://obsproject.com/forum/threads/bug-at-60-fps.161085/), [2](https://www.reddit.com/r/Twitch/comments/fj2k3u/dropping%5Fframes%5Fdespite%5Fgood%5Finternet/)]

If the duplicate frames happen randomly, or if the animation suddenly stutters and freezes for a few frames, your computer is struggling to keep up with the 60 FPS recording. OBS is forced to duplicate the previous frame because it didn't finish processing the new one in time.

To fix OBS frame drops, change these settings: \[[1](https://www.obsbot.com/blog/obs/dropped-frames-in-obs?srsltid=AfmBOorA%5F286nVGqnNccSkXSF6TUlrym8MkdDebk7vpkLdAkCOzbW9Ko)]

- **Run OBS as Administrator**: Right-click the OBS shortcut and select **Run as administrator**. This forces Windows to prioritize OBS over background tasks, eliminating 90% of encoding lag. \[[1](https://gamingcareers.com/guides/fix-dropped-frames-and-twitch-lag/)]
- **Lower Your CQP/CRF Quality**: If you set your CQP to `16` or lower, your graphics card might be choking. Raise it to `20` or `22`. The visual difference is tiny, but it heavily reduces the workload.
- **Turn Off Windows Game Mode**: Go to Windows Settings > Gaming > Game Mode, and turn it **Off**. It can sometimes starve OBS of GPU power. \[[1](https://www.tiktok.com/@ign/video/7592061285613800759), [2](https://www.reddit.com/r/obs/comments/e6sorr/log%5Fincluded%5Fframes%5Fmissed%5Fdue%5Fto%5Frendering%5Flag/)]
- **Close Hardware-Accelerated Apps**: Close Discord, Chrome, or Spotify while recording, as they fight OBS for GPU resources.

### How to Check if OBS is Blameless

You can see exactly why frames are duplicating by checking OBS's internal stats:

1. In OBS, go to the top menu and select **Docs** > **Stats**.
2. Keep this window visible while you record.
3. Look at **Frames missed due to rendering lag** and **Skipped frames due to encoding lag**.
4. If either number is increasing, your computer is lagging. If both say `0.0%`, your recording is flawless, and the duplicate frames exist inside the original animation itself. \[[1](https://www.reddit.com/r/obs/comments/lf2rty/help/), [2](https://www.hollyland.com/blog/tips/frames-missed-due-to-rendering-lag), [3](https://obsproject.com/forum/threads/frames-missed-due-to-rendering-lag-and-skipped-frames-due-to-encoding-lag.184496/)]

Would you like help **analyzing an OBS log file** to see exactly which hardware component is causing the lag, or do you want to learn how to use a tool to **automatically strip out duplicate frames** from your finished video?

- [link](https://flashcards.world/flashcards/sets/525a41a8-715e-4ca6-8f94-bd1fc8ffaec6)\
  Frame Rate and Timing Fundamentals - Technical aspects of frame rates in digital animation, including standard rates, timing calculations, and how frame rate choices affect movement quality and project delivery.\
  Frame doubling is a technique used to increase the perceived frame rate by displaying each frame multiple times.\
  \
  Flashcards World
- [link](https://www.reddit.com/r/obs/comments/zzxzjw/elgato%5Fframe%5Fstutterframe%5Fduplication/)\
  ELGATO FRAME STUTTER/FRAME DUPLICATION : r/obs\
  Dec 31, 2022 — Over 50 recording files brought into davinci resolve going frame by frame at 60 fps seeing the same frame play twice, and then bac...\
  \
  Reddit
- [link](https://www.reddit.com/r/programming/comments/e3tutg/turning%5Fanimations%5Fto%5F60fps%5Fusing%5Fai/)\
  Turning animations to 60fps using AI : r/programming\
  Nov 30, 2019 — This might have to do with some animation genuinely being created with low fps in mind. This tool would come in super handy for or...\
  \
  \
  Reddit

Show all

## You said: i mean they are too similar and i do not need to differietate

If you do not need to differentiate between identical or nearly identical frames, you want to strip them out so you only step through frames where **actual motion** occurs.

You can fix this automatically using MPV or by processing the video using FFmpeg.

### 1. Skip Duplicate Frames in MPV (Easiest)

You can configure MPV to automatically skip over duplicate frames whenever you press the step keys (`.` or `,`).

1. Open your MPV configuration folder.

- **Windows**: Press `Win + R`, type `%APPDATA%\mpv\`, and press Enter.
- **Mac/Linux**: Go to `~/.config/mpv/`.

2. Open your `mpv.conf` file (create a blank text file with this name if it doesn't exist).

3. Add the following line to the file, save it, and restart MPV:\
   text

<!---->

```
vf=lavfi=[mpdecimate]
```

Use code with caution.

- **What this does**: The `mpdecimate` filter drops any frame that is identical or nearly identical to the previous one. When you press `.`, MPV will instantly jump to the next frame that actually contains new motion.

### 2. Permanently Remove Duplicates via FFmpeg

If you want to create a clean, compressed video file that has all duplicate frames permanently deleted, you can run a quick command using FFmpeg.

Open your terminal or command prompt and run:

bash

```
ffmpeg -i input.mp4 -vf "mpdecimate,setpts=N/FRAME_RATE/TB" -an output.mp4
```

Use code with caution.

- **`mpdecimate`**: Drops the repeating, stagnant frames.
- **`setpts=...`**: Smooths out the timestamp map so the video doesn't freeze or stutter where the frames were removed.
- **`-an`**: Removes audio (highly recommended, as dropping frames will desync the audio).

### 3. Adjust the Sensitivity

If the frames are not _exactly_ identical but contain tiny compression artifacts or pixel noise that tricks the player, you can make the filter more aggressive.

Update your MPV config or FFmpeg command to adjust the max structural difference (`max`):

text

```
vf=lavfi=[mpdecimate=max=3]
```

Use code with caution.

_(Default max is 2. Raising it to 3 or 4 will force it to drop frames that are slightly different but visually similar enough to be ignored)._

Would you like help **installing FFmpeg** on your system to run these commands, or do you want to learn how to assign a **hotkey in MPV** to toggle this filter on and off whenever you want?

## You said: i use ubuntu and flatpak mpv or vlc. i think it's simple to just have a lower fps i guess.

Because you are on Ubuntu using Flatpaks, dropping the recording FPS is indeed the simplest, hassle-free solution. Flatpaks run in isolated sandboxes, which makes configuring system-level FFmpeg scripts or editing hidden MPV configuration files much more annoying than it needs to be.

Dropping your OBS recording frame rate directly down to **24 or 30 FPS** will solve your problem immediately.

### Why This Works Perfectly for You

- **Fewer Frames to Click Through**: Dropping from 60 FPS to 30 FPS instantly cuts the number of frames you have to step through by half.
- **No More Micro-Movements**: It blends tiny, insignificant variations into single, clear steps of motion.
- **Flawless Flatpak Compatibility**: Both Flatpak MPV and VLC will natively play these lower frame rate files perfectly without needing any custom plugins, filters, or terminal tweaks.

### The Quick Setup in OBS Studio

1. Open OBS and click **Settings** (bottom right).
2. Click the **Video** tab on the left sidebar.
3. Change **Common FPS Values** from `60` to **`30`** (for web/UI animations) or **`24 Film`** (for cartoon/anime animations).
4. Click **Apply** and **OK**.

### One Quick Tip for Flatpak MPV Users

If you ever change your mind and want to try the automatic skipping trick later, your configuration folder for Flatpak MPV is located here:\
`~/.var/app/io.mpv.Mpv/config/mpv/` \[[1](https://linuxcapable.com/how-to-install-mpv-media-player-on-ubuntu-linux/)]

Would you like help **setting up a second Profile in OBS** so you can switch between 60 FPS and 30 FPS recording with a single click, or are you **ready to start recording**?

- [link](https://linuxcapable.com/how-to-install-mpv-media-player-on-ubuntu-linux/)\
  How to Install mpv on Ubuntu 26.04, 24.04 and 22.04\
  May 7, 2026 — These commands do not touch your media files. User settings can remain in ~/. config/mpv/ for the native package and ~/. var/app/i...\
  \
  \
  LinuxCapable

# how to let obs record the cursor or not

To let OBS record your cursor or not, you must <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">toggle the <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Capture Cursor</strong> option located inside the properties of your specific capture source</mark>. \[[1](https://obsproject.com/forum/threads/record-cursor.152657/)]

### How to Toggle Cursor Recording

1. Locate the **Sources** dock at the bottom of your OBS window.
2. Right-click your capture source (such as **Display Capture**, **Window Capture**, or **Game Capture**).
3. Click **Properties** from the context menu.
4. Look for the **Capture Cursor** checkbox:

- **To record the cursor**: Check the box.
- **To hide the cursor**: Uncheck the box.

5. Click **OK** to save your changes. \[[1](https://obsproject.com/forum/threads/how-to-hide-cursor-in-window-capture.117351/), [2](https://www.youtube.com/shorts/zAMhOEQIV8k), [3](https://focusee.imobie.com/record-tips/how-to-hide-cursor-when-screen-recording.htm), [4](https://www.youtube.com/shorts/Tcpty7ez7F4?vl=en), [5](https://www.youtube.com/watch?v=o1pcUbezgM4), [6](https://obsproject.com/forum/threads/record-cursor.152657/)]

### Troubleshooting Missing Cursors

If you have checked the box but the cursor is still not showing up in your recordings or preview, try these fixes:

- **Change the Capture Method**: In the same **Properties** window, look for the **Capture Method** dropdown menu. Change it from _Automatic_ to **Windows 10 (1903 and up)** or **Windows Graphics Capture**.
- **Interact with the Window**: For _Window Capture_, OBS sometimes stops recording the cursor if that window is running in the background. Click on the target window to make it active. \[[1](https://obsproject.com/forum/threads/mouse-is-not-captured-window-capture-with-capture-cursor-selected.179900/), [2](https://obsproject.com/forum/threads/record-mouse-cursor-over-video-source.141645/), [3](https://www.youtube.com/watch?v=o1pcUbezgM4), [4](https://dev.to/jasonstcyr/how-to-add-your-powerpoint-presentation-to-your-camera-with-obs-3noo), [5](https://obsproject.com/forum/threads/game-capture-not-working-on-valorant-black-screen.124987/)]

If your cursor is completely disappearing in OBS despite checking the settings, this video guide demonstrates how to fix the capture method to bring it back:

59s

[How to show the cursor movements on a browser in OBS Dr ...NNN MEDIAYouTube · Jul 28, 2022](https://www.youtube.com/watch?v=Et1rJCWzdUg\&t=32)

If you are trying to make your mouse more noticeable for tutorials, let me know if you would like to learn how to **highlight mouse clicks** or make the **OBS camera track your cursor**. \[[1](https://www.youtube.com/watch?v=w-QQeQzCPWs), [2](https://superuser.com/questions/1915743/how-can-i-visually-show-mouse-clicks-in-obs-studio-on-windows-11)]

- [link](https://obsproject.com/forum/threads/how-to-hide-cursor-in-window-capture.117351/)\
  Question / Help - How to hide cursor in window capture | OBS Forums\
  Mar 26, 2020 — New Member ... Right-click your capture source > Properties > uncheck Capture Cursor. Ignore me... I should be sleeping instead.\
  OBS Studio
- [link](https://obsproject.com/forum/threads/record-cursor.152657/)\
  Record Cursor | OBS Forums\
  Jan 24, 2022 — You can Right-click >> properties >> capture cursor. If that options is available under the source, turn the cursor capture on and...\
  OBS Studio
- [link](https://obsproject.com/forum/threads/mouse-is-not-captured-window-capture-with-capture-cursor-selected.179900/)\
  Mouse is not captured (Window Capture with "Capture cursor" ...\
  Sep 19, 2024 — New Member ... OK, I can reproduce the bug: When the window is the active window, the cursor is captured AOK. Bug 1: If the window...\
  OBS Studio

Show all

# how to connect two vids via ffmpeg cli

To connect (concatenate) two videos using the FFmpeg CLI, the easiest and fastest method is <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">using the <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">concat</code> demuxer</strong></mark>. This method works **without re-encoding** the videos, meaning it takes only a few seconds and preserves the exact original video quality. \[[1](https://www.youtube.com/watch?v=mjyfP-ONsm4), [2](https://www.mux.com/articles/stitch-multiple-videos-together-with-ffmpeg), [3](https://wavespeed.ai/blog/posts/blog-how-to-merge-concatenate-videos-ffmpeg/), [4](https://cloudinary.com/guides/front-end-development/ffmpeg-copy-video)]

### Method 1: The Fast Way (No Re-encoding)

Use this method if both videos have the exact **same resolution, frame rate, and codecs**. \[[1](https://superuser.com/questions/1039678/merge-multiple-video-with-ffmpeg-single-command-line-in-specific-time-without-cu), [2](https://wavespeed.ai/blog/posts/blog-how-to-merge-concatenate-videos-ffmpeg/)]

1. **Create a text file** named `inputs.txt` in the same directory as your videos.

2. List your video files in the exact order you want them connected, formatting them like this:\
   text

<!---->

```
file 'video1.mp4'
file 'video2.mp4'
```

Use code with caution.
3\. Run the following command in your terminal:\
bash

```
ffmpeg -f concat -safe 0 -i inputs.txt -c copy output.mp4
```

Use code with caution.

- _`-f concat`_: Tells FFmpeg to use the concatenation format.
- _`-safe 0`_: Prevents file path errors if you use absolute or complex paths.
- _`-c copy`_: Streams and copies the original audio/video tracks without rendering them again. \[[1](https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg), [2](https://cloudinary.com/guides/video-effects/ffmpeg-concat), [3](https://medium.com/@3valuedlogic/how-to-concatenate-video-clips-with-ffmpeg-db77ac797913), [4](https://stackoverflow.com/questions/5415006/ffmpeg-combine-merge-multiple-mp4-videos-not-working-output-only-contains-the), [5](https://www.youtube.com/watch?v=mjyfP-ONsm4), [6](https://www.mux.com/articles/stitch-multiple-videos-together-with-ffmpeg), [7](https://wavespeed.ai/blog/posts/blog-how-to-merge-concatenate-videos-ffmpeg/)]

For a step-by-step visual demonstration on setting up this text file and executing the concat demuxer command, watch this guide:

1m

[FFMPEG Tutorial: Combine Videos using FFMPEGMagicPencilTechYouTube · May 5, 2023](https://www.youtube.com/watch?v=yrxCMvdrfY8\&t=220)

### Method 2: The Flexible Way (With Re-encoding)

Use this method if your videos have **different sizes, formats, or frame rates**. This forces FFmpeg to decode both files and re-render them into a uniform layout. \[[1](https://stackoverflow.com/questions/49371422/how-to-merge-two-videos-without-re-encoding), [2](https://www.youtube.com/watch?v=wpNBxwAMqAU), [3](https://www.bannerbear.com/blog/how-to-merge-video-files-using-ffmpeg/), [4](https://www.mux.com/articles/stitch-multiple-videos-together-with-ffmpeg), [5](https://cloudinary.com/guides/video-effects/ffmpeg-concat)]

Run this single command directly without creating a text file: \[[1](https://superuser.com/questions/1039678/merge-multiple-video-with-ffmpeg-single-command-line-in-specific-time-without-cu), [2](https://www.youtube.com/watch?v=mjyfP-ONsm4)]

bash

```
ffmpeg -i video1.mp4 -i video2.mp4 -filter_complex "[0:v][0:a][1:v][1:a]concat=n=2:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]" output.mp4
```

Use code with caution.

- _`-i video1.mp4 -i video2.mp4`_: Loads both video files as separate inputs.
- _`-filter_complex`_: Combines the video `[0:v]` and audio `[0:a]` from the first file with the video `[1:v]` and audio `[1:a]` of the second file.
- _`n=2:v=1:a=1`_: Specifies that there are **2** input segments, resulting in **1** output video track and **1** output audio track. \[[1](https://unix.stackexchange.com/questions/233832/merge-two-video-clips-into-one-placing-them-next-to-each-other), [2](https://www.ffmpeg-micro.com/blog/ffmpeg-merge-audio-video), [3](https://www.bannerbear.com/blog/how-to-merge-video-files-using-ffmpeg/)]

If you plan to use these files frequently, let me know if you need help **automating the text file creation** with a script, or if you need to **resize the videos** to make them match perfectly.

- [link](https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg)\
  How to concatenate two MP4 files using FFmpeg? \[closed]\
  Sep 7, 2011 — Details and full example of combining Wyze security camera footage \* Create a file named inputs.txt , containing a list of all fil...\
  Stack Overflow
- [link](https://superuser.com/questions/1039678/merge-multiple-video-with-ffmpeg-single-command-line-in-specific-time-without-cu)\
  Merge multiple video with ffmpeg single command line in ...\
  Feb 14, 2016 — 2 Answers. Sorted by: 15. Use the concat demuxer. First, create a text file with the filenames. file '1.mp4' file '2.mp4' file '3.\
  Super User
- [link](https://www.youtube.com/watch?v=mjyfP-ONsm4)\
  Merge Videos Using FFmpeg in Windows\
  Nov 1, 2025 — hello friends uh now today I'm going to show you amazing feature uh to merge the two videos using one of the software. called FFMP...\
  6:03\
  YouTube·v11tv

Show all

# 
