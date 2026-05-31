check my fps on ubuntu

To check your FPS on Ubuntu, you can <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use <strong>MangoHud</strong> for an advanced on-screen system overlay, the <strong>Steam Overlay</strong> for quick in-game tracking, or <strong>Mesa Utils</strong> to benchmark your system from the terminal</mark>. \[[1](https://www.howtogeek.com/gaming-on-linux-how-to-monitor-gpu-stats/), [2](https://linuxconfig.org/how-to-test-3d-acceleration-fps-on-ubuntu-20-04-focal-fossa)]

Depending on your specific needs, use one of the methods outlined below.

Method 1: The Best General Overlay (MangoHud)

[MangoHud](https://github.com/flightlessmango/MangoHud) is the gold standard for Linux gaming, displaying FPS, frame times, CPU/GPU usage, and temperatures. \[[1](https://www.tecmint.com/mangohud-monitor-fps-cpu-gpu-games/), [2](https://oneuptime.com/blog/post/2026-01-15-setup-steam-proton-gaming-ubuntu/view)]

1. **Install MangoHud** by opening your terminal (`Ctrl`+`Alt`+`T`) and running:\
   bash

<!---->

```
sudo apt install mangohud
```

Use code with caution.
2\. **Launch a native game** using the command line:\
bash

```
mangohud /path/to/game-executable
```

Use code with caution.
3\. **Launch a Steam game** by right-clicking the game in your library, selecting **Properties**, and pasting the following into the **Launch Options** field:\
text

```
mangohud %command%
```

Use code with caution.\
\[[1](https://www.youtube.com/watch?v=Mofsdx24OVo\&t=93), [2](https://ossmalta.eu/display-fps-cpu-gpu-usage-while-gaming-in-ubuntu-24-04-22-04/), [3](https://ubuntuhandbook.org/index.php/2024/11/display-fps-while-gaming-ubuntu/), [4](https://www.reddit.com/r/linux%5Fgaming/comments/1nhmljx/how%5Fto%5Fshow%5Ffps/), [5](https://www.reddit.com/r/linux%5Fgaming/comments/t1oj6n/how%5Fto%5Fglobally%5Flimit%5Ffps/)]

_Note: Toggle the overlay on and off mid-game by pressing `Shift` + `F12`._ \[[1](https://www.tecmint.com/mangohud-monitor-fps-cpu-gpu-games/)]

Method 2: Steam's Built-in Counter

If you only play games through Steam, you can use its native, zero-setup counter. \[[1](https://www.reddit.com/r/linux%5Fgaming/comments/2z36kq/recommend%5Fthe%5Ftool%5Fto%5Fdisplay%5Fthe%5Ffps%5Fon%5Flinux/), [2](https://www.howtogeek.com/gaming-on-linux-how-to-monitor-gpu-stats/)]

1. **Open Steam Settings** by navigating to `Steam` > `Settings` in the top left corner.
2. **Select the In-Game tab** from the sidebar menu.
3. **Enable the counter** by finding the **In-game FPS counter** dropdown and picking a screen corner (e.g., _Top-left_).
4. **Boost visibility** by checking the **High contrast color** box directly below the dropdown. \[[1](https://www.youtube.com/shorts/CJZNcFdC5XA), [2](https://www.howtogeek.com/gaming-on-linux-how-to-monitor-gpu-stats/)]

Method 3: Test and Benchmark Your GPU (Mesa Utils)

If you want to quickly test your system's maximum rendering capabilities right now without launching a game, use the classic `glxgears` test. \[[1](https://askubuntu.com/questions/1046812/how-can-i-tell-how-well-my-graphics-card-performs-on-ubuntu)]

1. **Install Mesa Utilities** via the terminal:\
   bash

<!---->

```
sudo apt install mesa-utils
```

Use code with caution.
2\. **Run the baseline test** to see frames synced directly to your monitor's refresh rate:\
bash

```
glxgears
```

Use code with caution.
3\. **Uncap the framerate** to test your graphics card's maximum raw performance limit:\
bash

```
vblank_mode=0 glxgears
```

Use code with caution.\
\[[1](https://askubuntu.com/questions/1046812/how-can-i-tell-how-well-my-graphics-card-performs-on-ubuntu), [2](https://linuxconfig.org/how-to-test-3d-acceleration-fps-on-ubuntu-20-04-focal-fossa)]

Which **type of apps or games** are you trying to check the FPS on? I can give you the exact command or launch configuration for them.

- [link](https://www.reddit.com/r/linux%5Fgaming/comments/2z36kq/recommend%5Fthe%5Ftool%5Fto%5Fdisplay%5Fthe%5Ffps%5Fon%5Flinux/)\
  recommend the tool to display the FPS on Linux? - Reddit\
  Mar 15, 2015 — For Steam games you can use the Steam Build-in FPS counter. For non Steam (and Steam) games you can try GLXOSD. Svenare. • 11y ago...\
  Reddit·r/linux\_gaming
- [link](https://www.youtube.com/watch?v=Mofsdx24OVo\&t=93)\
  How to setup on screen stats for games in Linux… Ubuntu!\
  Mar 27, 2025 — and particularly when we get into open areas like this and I'm not 100%. sure what is going on at the moment because we need those...\
  10m\
  YouTube·TechLabUK
- [link](https://askubuntu.com/questions/1046812/how-can-i-tell-how-well-my-graphics-card-performs-on-ubuntu)\
  How can I tell, how well my graphics card performs on Ubuntu?\
  Jun 15, 2018 — Benchmark your GPU \* Mesa Utils. Install the following package: sudo apt-get install mesa-utils. And then start a benchmark test f...\
  Ask Ubuntu

Show all

You said: how much fps can human feel

The human eye does not operate in "frames per second" because biology is analog. However, in terms of digital displays, humans can consciously feel, perceive, and react to frame rates <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>between 60 FPS and 240 FPS</strong></mark>, with a subconscious biological detection ceiling near **1,000 Hz**. \[[1](https://www.youtube.com/watch?v=FhSHeYT2U70\&t=7), [2](https://www.reddit.com/r/NoStupidQuestions/comments/tz3mfx/what%5Fis%5Fthe%5Ftrue%5Ffps%5Fframes%5Fper%5Fsecond%5Fthe%5Fhuman/), [3](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/), [4](https://awolvision.com/blogs/awol-vision-blog/how-many-frames-per-second-can-the-human-eye-see), [5](https://kellyvilleoptical.com.au/how-many-fps-can-the-human-eye-see/)]

Because the human visual system is a continuous stream of chemical and electrical signals, our perception changes based on how we measure it. \[[1](https://www.reddit.com/r/RigBuild/comments/1qnd8uh/how%5Fcan%5Fpeople%5Fclaim%5Fthat%5Fthe%5Fhuman%5Feye%5Fcant/), [2](https://www.valerion.com/global/blog/how-many-fps-does-the-human-eye-see)]

1\. Conscious Image Recognition (~75 FPS)

Your brain needs a specific window of time to identify exactly _what_ it is looking at. \[[1](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

- A famous MIT visual study proved that the human brain can successfully process and identify a completely distinct, unique image flashed for just **13 milliseconds**.
- Mathematically, \\(1000 \text{ ms} / 13 \text{ ms} \approx 76.9\\), meaning our conscious recognition maxes out right around **75 FPS**. \[[1](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

2\. Real-Time Fluidity and Motion (~150 to 240 FPS) \[[1](https://superuser.com/questions/685198/can-someone-explain-to-me-the-correlation-between-bit-rate-and-frame-rate), [2](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

Even if you cannot consciously name every frame, you will easily "feel" the fluidity, lack of motion blur, and lack of input lag. \[[1](https://www.youtube.com/watch?v=FhSHeYT2U70\&t=7), [2](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

- **The 60 FPS Baseline**: At 60 FPS, the brain fuses individual images together into smooth continuous movement (known as the _Flicker Fusion Threshold_). \[[1](https://www.valerion.com/global/blog/how-many-fps-does-the-human-eye-see), [2](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]
- **The 144Hz–240Hz Edge**: Trained viewers, particularly competitive gamers and fighter pilots, reliably detect micro-stuttering and ghosting artifacts. In specialized U.S. Air Force tests, pilots correctly identified aircraft silhouettes flashed for just **1/220th of a second** (~220 FPS equivalent). \[[1](https://www.valerion.com/global/blog/how-many-fps-does-the-human-eye-see), [2](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

3\. Subconscious Peripheral Detection (500Hz to 1,000Hz) \[[1](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

Your peripheral vision is highly optimized for survival and detecting immediate movement, rather than detail. \[[1](https://www.valerion.com/global/blog/how-many-fps-does-the-human-eye-see), [2](https://www.reddit.com/r/gamedev/comments/qfz33n/frame%5Fdelay%5Freference%5Fchart%5Fif%5Fa%5Fframe%5Ftook%5F40ms/)]

- Under highly specific laboratory settings (such as a harsh light flickering against sharp edges), research published in _Nature_ shows humans can detect artifacts up to **500 Hz**. \[[1](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]
- The absolute maximum threshold of the optic nerve's physical capabilities is roughly **1,000 Hz**, because human neurons take roughly 1 millisecond to reset before they can fire a signal to the brain again. \[[1](https://www.reddit.com/r/RigBuild/comments/1qnd8uh/how%5Fcan%5Fpeople%5Fclaim%5Fthat%5Fthe%5Fhuman%5Feye%5Fcant/), [2](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/)]

***

Summary of Human vs. Digital Thresholds

| Metric \[, [2](https://clippingexpertasia.com/blog/how-many-fps-can-the-human-eye-see/), [3](https://www.healthline.com/health/human-eye-fps), [4](https://www.valerion.com/global/blog/how-many-fps-does-the-human-eye-see), [5](https://www.reddit.com/r/RigBuild/comments/1qnd8uh/how%5Fcan%5Fpeople%5Fclaim%5Fthat%5Fthe%5Fhuman%5Feye%5Fcant/)] | Equivalent Frame Rate | What It Means to You                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------ |
| **Cinematic Baseline**                                                                                                                                                                                                                                                                                                                               | 24 FPS                | Appears fluid only because cameras capture natural **motion blur**.                  |
| **Flicker Fusion**                                                                                                                                                                                                                                                                                                                                   | 60 FPS                | The baseline point where your brain stops seeing a screen as flashing lights.        |
| **Conscious Focus**                                                                                                                                                                                                                                                                                                                                  | ~75 FPS               | The limit at which you can cleanly identify a single, standalone image.              |
| **Motion Clarity**                                                                                                                                                                                                                                                                                                                                   | 144 – 240 FPS         | Highly noticeable in fast-paced gaming via **reduced input lag** and crisp tracking. |
| **Biological Limit**                                                                                                                                                                                                                                                                                                                                 | ~1,000 Hz             | The absolute maximum physical ceiling of the **human optic nerve**.                  |

Are you trying to decide if upgrading to a **144Hz, 240Hz, or 360Hz monitor** is worth it for your setup? Let me know your hardware specs or what games you play and I can give you a recommendation.

- [link](https://www.youtube.com/watch?v=FhSHeYT2U70\&t=7)\
  How Many FPS Can Your Eye See?\
  May 25, 2016 — all healthy human eyes perceive and interpret motion at a specific. rate this motion however is not bound by a frame rate and it w...\
  6m\
  YouTube·Greg Salazar
- [link](https://www.reddit.com/r/RigBuild/comments/1qnd8uh/how%5Fcan%5Fpeople%5Fclaim%5Fthat%5Fthe%5Fhuman%5Feye%5Fcant/)\
  How can people claim that the human eye can't perceive more ...\
  Jan 26, 2026 — Shadowdane. • 4mo ago. Not really it's based off how fast electrical impulses can travel down the optic nerve to the brain, which ...\
  Reddit·r/RigBuild
- [link](https://www.valerion.com/global/blog/how-many-fps-does-the-human-eye-see)\
  How Many FPS Does the Human Eye See? - Valerion.com\
  Apr 16, 2026 — How Many FPS Does the Human Eye See? (And Why Refresh Rate Matters on Big Screen) ... How many FPS does the human eye see? Contrar...\
  Valerion.com

Show all

You said: how much fps do you need

To determine how many frames per second (FPS) you need, look at the specific activity you are doing on your computer. Your target FPS should match both your monitor's refresh rate (Hz) and your personal tolerance for motion smoothness.

Use this breakdown to find the right target for your specific use case.

1\. Casual Everyday Use (60 FPS / 60Hz)

For basic computer tasks, 60 FPS is the universal gold standard.

- **Activities:** Web browsing, watching movies, office work, and typing.
- **Why:** It matches standard monitor refresh rates and prevents eye strain.
- **Note on Cinema:** Movies intentionally use **24 FPS** because the camera introduces natural motion blur. Without this blur, 24 FPS on a computer monitor looks stuttery.

2\. Single-Player & Casual Gaming (60 to 90 FPS)

For visually intensive games where immersion matters more than split-second reactions.

- **Activities:** RPGs (like _The Witcher_), strategy games, simulator games, and open-world adventures.
- **Why:** 60 FPS offers completely fluid movement. Going up to 90 FPS makes camera panning feel noticeably smoother without requiring an expensive graphics card.

3\. Fast-Paced Action & Racing (90 to 144 FPS)

For high-speed movement where motion blur can ruin the experience or cause motion sickness.

- **Activities:** First-person shooters (_Call of Duty_), racing games, and action-adventure titles.
- **Why:** At 144 FPS, fast-moving objects remain sharp and clear instead of turning into a blurry streak.

4\. Competitive Esports Gaming (240 to 360+ FPS)

For players where a fraction of a millisecond dictates winning or losing.

- **Activities:** Competitive multiplayer games (_Counter-Strike_, _Valorant_, _Apex Legends_, _Fortnite_).
- **Why:** High FPS dramatically **lowers input lag** (the delay between moving your mouse and seeing the action on screen). Even if your monitor cannot display 360 FPS, the game engine processes your inputs faster, making the mouse feel vastly more responsive.

***

Key Requirements Checklist

To actually feel high frame rates, you need to satisfy three conditions:

- **The GPU Capability:** Your graphics card must be powerful enough to render the frames.
- **The Monitor Hz:** Your monitor must support the refresh rate (e.g., a 60Hz screen cannot physically display more than 60 FPS).
- **The Display Cable:** You must use a DisplayPort or high-tier HDMI cable, as older cables limit output to 60Hz.

What **specific game or application** are you setting up right now? If you share your **GPU model or monitor refresh rate**, I can help you optimize your settings for the perfect FPS target.

You said: is high fps better for browsing and working

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, a higher frame rate (specifically a </span><strong>120Hz to 144Hz</strong> display refresh rate) is noticeably better for browsing and productivity work</mark>. While it will not change your typing speed or make spreadsheets calculate faster, it dramatically improves visual comfort and reduces eye strain.

Here is exactly how a higher frame rate upgrades your day-to-day work environment:

1\. Smoother Text Scrolling

- **At 60Hz:** When you quickly scroll down a long article, PDF, or codebase, the text turns into a jittery, unreadable blur. You have to stop scrolling to read it.
- **At 120Hz+:** Text remains sharp, crisp, and completely legible _while_ you are actively scrolling.

2\. Instant Mouse Responsiveness

- A higher frame rate reduces input latency.
- Your mouse cursor moves with absolute precision, perfectly matching your physical hand movements without the tiny, sluggish delay or "ghost trail" seen on standard 60Hz screens.

3\. Reduced Eye Fatigue

- Because your brain doesn't have to work as hard to stitch jittery movements together, micro-stuttering disappears.
- Many professionals find that switching to a high-refresh-rate monitor reduces headaches and eye strain during long 8-to-10-hour workdays.

4\. Fluid Window Management

- Dragging windows across your desktop, snapping applications side-by-side, and switching between virtual workspaces feels incredibly fluid and premium.

***

How to Enable It in Ubuntu

If you hook up a high-refresh-rate monitor to an Ubuntu system, it often defaults to 60Hz. To unlock the higher frame rate for your desktop work:

1. Open your system **Settings**.
2. Click on **Displays** in the sidebar.
3. Select your monitor and look for the **Refresh Rate** dropdown menu.
4. Change it from **60.00 Hz** to **120.00 Hz** or **144.00 Hz** and click **Apply**.

Are you currently choosing between a **60Hz and a 120Hz/144Hz monitor** for your work setup, or are you trying to troubleshoot why your current high-refresh monitor feels choppy in Ubuntu?

You said: do you need it. how far will it go.

You do not strictly **need** a high frame rate for office work, but it is a massive quality-of-life upgrade. If you spend 8+ hours a day looking at a screen, your eyes will immediately appreciate the smoothness.

As for how far the technology will go, the commercial market is rapidly approaching the absolute biological limits of human perception.

How Far Will It Go? (The Roadmap)

1\. Current Consumer Peak (360Hz to 540Hz)

High-end gaming monitors currently top out between 360Hz and 540Hz. At this point, the performance returns are massively diminishing. The visual jump from 60Hz to 144Hz is a night-and-day difference, but the jump from 240Hz to 540Hz is incredibly subtle and only noticeable to elite competitive players.

2\. Experimental Hardware (1,000Hz)

Display manufacturers (like ASUS and Blur Busters) are actively developing experimental **1,000Hz prototypes**.

- **The Goal:** To completely eliminate "sample-and-hold" display blur.
- **The Result:** Moving images on a 1,000Hz screen will look exactly as sharp as objects moving in real life.

3\. The Hard Biological Wall (1,000Hz+)

Consumer technology will likely stop pushing past 1,000Hz. As noted earlier, human optic nerves take about 1 millisecond to reset after firing. Because 1,000 FPS delivers a new frame exactly every 1 millisecond, anything higher is physically impossible for the human brain to process.

***

What to Look For Right Now

If you are buying a monitor for a mix of work and casual use, look for the current sweet spots:

- **The Work Sweet Spot:** 120Hz to 144Hz. (Perfect balance of affordability, battery life on laptops, and extreme smoothness).
- **The Overkill Line:** 240Hz+. (Only worth buying if you are a highly competitive esports gamer).

Are you currently looking at a **specific monitor model**, or are you wondering if your **current computer hardware** can even support a 144Hz or higher display?

You said: how to test on samsung s23. i want to see the difference between 60 and 120.

To see the difference between 60Hz and 120Hz on your Samsung Galaxy S23, you can <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use a built-in developer tool that overlays a live refresh rate counter directly onto your screen</mark>.

Follow these steps to turn on the counter and run the best tests to feel the difference.

Step 1: Turn on the Refresh Rate Counter

To see the actual number change in real-time, you need to unlock Android's hidden Developer Options.

1. Open your phone's **Settings**.
2. Scroll to the absolute bottom and tap **About phone**.
3. Tap **Software information**.
4. Tap **Build number** rapidly **7 times** until a popup says _"Developer mode has been turned on"_.
5. Go back to the main **Settings** page, scroll to the bottom, and tap the new **Developer options** menu.
6. Scroll down until you find **Show refresh rate** and toggle it **ON**.\
   _(A large green or gray number will appear in the top-left corner of your screen)._

Step 2: How to Force 60Hz vs. 120Hz

The S23 uses an adaptive display that dynamically shifts between 24Hz and 120Hz to save battery. To manually test the two limits:

1. Go to **Settings** > **Display** > **Motion smoothness**.
2. Select **Standard** to lock the phone at **60Hz** for a few minutes. Try the tests below.
3. Switch back to **Adaptive** to unlock **120Hz** and repeat the tests to see the contrast.

***

The 3 Best Ways to Spot the Difference

Once you know how to switch between the modes, test them using these specific actions:

1\. The Settings Menu Scroll Test

Open your phone's main **Settings** app (a long list of text blocks).

- **At 60Hz:** Flick your thumb to scroll quickly. Notice how the text becomes a blurry, vibrating smudge while moving. You cannot read the words until the screen stops.
- **At 120Hz:** Flick and scroll at the exact same speed. The text remains significantly sharper, cleaner, and entirely readable even while flying past your eyes.

2\. The App Drawer / Home Screen Swipe

Go to your home screen and swipe left and right between pages, or swipe up to open the app drawer.

- **At 60Hz:** The app icons will look like they are trailing or "ghosting" slightly behind your thumb.
- **At 120Hz:** The icons stick perfectly to your finger with zero perceived delay, making the phone feel twice as fast and responsive.

3\. The Blur Busters UFO Test (Web Browser)

Open **Google Chrome** or the **Samsung Internet** browser and go to testufo.com.

- This site runs a benchmark featuring rows of little alien spaceships flying across your screen at different frame rates.
- When your phone is set to **Adaptive (120Hz)**, you will see a massive visual separation between the perfectly smooth top row (120 FPS) and the stuttery middle row (60 FPS).

Which of the two modes feels more comfortable to your eyes after trying these out? If you prefer the smoothness but are worried about **battery life**, let me know and I can show you how to optimize it.

You said: why called adaptive and standard instead of a number input

Samsung uses the terms **Adaptive** and **Standard** instead of fixed number inputs like "60" or "120" because the Galaxy S23 does not actually run at a single, locked speed. Instead, the phone continuously changes its frame rate based on what is happening on your screen to protect your battery life.

Here is exactly what those two modes are doing behind the scenes:

1\. Why it is called "Adaptive" (The Variable Range)

If Samsung locked the screen at a constant 120Hz, your battery would drain aggressively, even when looking at a completely still image.

In **Adaptive** mode, the S23 uses advanced dynamic hardware (an LTPO display panel) to automatically scale its refresh rate across a massive range based on the app you are using:

- **Reading an eBook or looking at a photo:** The screen drops down to **24Hz** or **48Hz** because a static image doesn't need to refresh often.
- **Watching a YouTube video:** The screen locks to **30Hz** or **60Hz** to perfectly match the frame rate of the video.
- **Scrolling Twitter, UI navigating, or gaming:** The screen instantly ramps up to **120Hz** for maximum smoothness.

By calling it "Adaptive," Samsung is letting you know that the phone is intelligently managing a fluid spectrum of frame rates rather than a static number.

2\. Why it is called "Standard" (The Safety Ceiling)

Setting a phone to a fixed "60Hz" implies it will always stay exactly at 60. However, in **Standard** mode, 60Hz is actually just a **hard ceiling**.

- The phone will still occasionally drop lower than 60Hz when the screen is idle to preserve battery.
- It simply disables the high-performance 120Hz tier entirely.

Why not just give users a manual number slider?

Samsung hides the exact numbers to prevent a poor user experience. If a user manually forced a locked "120Hz" option, their daily battery life would drop significantly, leading to complaints. Conversely, if they forced a locked "24Hz" to save battery, the phone's animations would lag terribly.

Using marketing terms like "Adaptive" and "Standard" simplifies the choice for the average user into a basic preference: **Maximum Performance** vs. **Maximum Battery Saving**.

Did you notice the green/gray counter fluctuating between different numbers while you were exploring your apps in **Adaptive** mode?

You said: i mean to let me input a number

The main reason Samsung does not let you type in a custom number like "43" or "87" is a physical limitation of the display hardware. Digital screens cannot refresh at just any random number; they are engineered to only operate at specific, mathematically precise frequencies.

Here is why a free-form number input is physically impossible for the phone to handle:

1\. The Physics of the Display (The Tuning Wall)

Inside your S23 display panel, a micro-controller relies on a physical timing crystal to send electrical pulses to the pixels. To keep the screen stable, these pulses must happen at perfect, uniform intervals.

- The hardware is specifically tuned and certified by the factory to step between exact intervals (typically **24Hz, 30Hz, 48Hz, 60Hz, 90Hz, and 120Hz**).
- If you inputted a random number like **73Hz**, the screen's internal timer would desynchronize from the graphics processor.

2\. The Nightmare of "Screen Tearing" and Flickering

If the screen refreshed at a random custom number, you would destroy visual fluidness instead of improving it.

- **Screen Tearing:** If your screen runs at 73Hz but a video plays at 60Hz, the frames will mismatch. The screen will display half of one frame and half of the next frame at the same time, creating a jagged, chopped-up line across your display.
- **Flicker:** Forcing an uncalibrated refresh rate causes the display's voltage to fluctuate unevenly, which creates a highly irritating flickering effect that can damage the panel over time.

How to Actually Get Custom Numbers (Using a Third-Party App)

While you cannot type a random custom number, you _can_ use a popular community tool to unlock the hidden, exact frequency steps that Samsung blocked out of the box.

If you want to try this, look up an open-source app called **Galaxy Max Hz** (available on GitHub). It allows you to:

- Set your maximum ceiling to a precise intermediate step like **96Hz** (which gives you 80% of the smoothness of 120Hz but saves massive battery life).
- Force the screen to drop all the way down to **10Hz** when idle, which is lower than Samsung's stock software usually allows.

Would you like instructions on how to safely install **Galaxy Max Hz** using your computer to unlock those hidden 96Hz or lower refresh rate steps?

You said: on film watching

When it comes to watching films, **high frame rates are actually worse** for the viewing experience. While you want 120Hz for gaming and scrolling, you explicitly want **24 FPS** for movies. \[[1](https://www.reddit.com/r/movies/comments/176csah/why%5Fdoes%5Fhigh%5Fframe%5Frate%5Fhfr%5Flook%5Fweirdcheap%5Fin/), [2](https://www.reddit.com/r/gaming/comments/1ge7kti/why%5Fdoes%5F24fps%5Flook%5Fgood%5Fin%5Fmovies%5Fbut%5Fhorrible/), [3](https://www.reddit.com/r/videography/comments/1iqbv0x/a%5Flittle%5Fessay%5Fabout%5Fthe%5Fimportance%5Fof%5Fframe%5Frate/), [4](https://www.bhphotovideo.com/explora/videos/video/frame-rates-explained-part-1-the-basics), [5](https://www.t-mobile.com/dialed-in/wireless/what-is-hz)]

Here is how frame rates impact watching movies on your [Samsung Galaxy S23](https://www.google.com/search?ibp=oshop\&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A16607200286709990627%2CheadlineOfferDocid%3A6411344991847076804%2CproductDocid%3A6411344991847076804%2Crds%3APC%5F6185279726844231230%7CPROD%5FPC%5F6185279726844231230\&q=product\&sa=X\&ved=2ahUKEwjy-9eczuOUAxUTha8BHVWwLtAQxa4PegYIAAgKEAI\&gl=us), and why your phone handles it differently.

1\. The Soap Opera Effect (Why High FPS Ruins Movies)

Movies have been shot at **24 frames per second** for nearly a century. Because 24 FPS is relatively low, cameras capture a natural amount of **motion blur**. Your brain associates this specific motion blur with high-end cinema, drama, and artistic storytelling. \[[1](https://www.reddit.com/r/movies/comments/176csah/why%5Fdoes%5Fhigh%5Fframe%5Frate%5Fhfr%5Flook%5Fweirdcheap%5Fin/), [2](https://www.youtube.com/watch?v=K4bar9KY2Zg\&vl=en-US)]

If you force a movie to play at 60 FPS or 120 FPS—either via software interpolation or high-frame-rate formatting—the motion blur vanishes. The movement becomes hyper-realistic, which backfires by making the movie look like a cheap, low-budget home video or a behind-the-scenes documentary. This jarring visual style is widely referred to as the **Soap Opera Effect**. \[[1](https://www.reddit.com/r/movies/comments/176csah/why%5Fdoes%5Fhigh%5Fframe%5Frate%5Fhfr%5Flook%5Fweirdcheap%5Fin/), [2](https://www.youtube.com/watch?v=K4bar9KY2Zg\&vl=en-US), [3](https://medium.com/google-developers/5-reasons-for-60-fps-639b840a718), [4](https://www.bhphotovideo.com/explora/videos/video/frame-rates-explained-part-1-the-basics)]

2\. How the S23 Handles Films (The Math Mismatch)

If movies are 24 FPS, what happens when you watch one on a 60Hz or 120Hz phone screen?

- **On a standard 60Hz screen (Standard Mode):** 60 does not divide evenly by 24 (\\(60 / 24 = 2.5\\)). To play a 24 FPS movie on a 60Hz screen, the phone has to duplicate some frames twice and other frames three times (a process called _3:2 pulldown_). This uneven rhythm creates a subtle, choppy stutter during wide panning shots. \[[1](https://www.youtube.com/watch?v=K4bar9KY2Zg\&vl=en-US)]
- **On your S23 in Adaptive Mode:** Your phone solves this perfectly. The screen recognizes you are watching a movie and drops its hardware refresh rate down to exactly **24Hz** or **48Hz** to perfectly match the video file. Because 24Hz matches 24 FPS 1:1, the film plays with perfect cinematic smoothness, free of any digital stuttering. \[[1](https://www.reddit.com/r/S22Ultra/comments/xc8y61/today%5Fi%5Fdownloaded%5Fgalaxy%5Fmax%5Fhz%5Fjust%5Fto%5Fsee%5Fif/), [2](https://en.wikipedia.org/wiki/Samsung%5FGalaxy%5FS23), [3](https://www.reddit.com/r/samsunggalaxy/comments/1j3hpex/micro%5Fstutters%5Fin%5Fs25/), [4](https://www.youtube.com/watch?v=K4bar9KY2Zg\&vl=en-US)]

Summary of What to Use

When opening Netflix, YouTube, or Prime Video on your phone, **leave your phone on Adaptive Mode**. The phone is smart enough to turn off the 120Hz speed to keep the movie looking cinematic, and it will instantly ramp back up to 120Hz the second you swipe away to scroll through your apps again. \[[1](https://www.youtube.com/watch?v=2B3gaIGdD84\&t=30), [2](https://www.reddit.com/r/samsunggalaxy/comments/1j3hpex/micro%5Fstutters%5Fin%5Fs25/), [3](https://www.youtube.com/watch?v=bBk2dRLyr6E)]

Are you currently seeing **weird stuttering or an unnatural smoothness** while streaming a specific movie on your phone? Tell me which app you are using and I can help you check its settings.

- [link](https://www.reddit.com/r/movies/comments/176csah/why%5Fdoes%5Fhigh%5Fframe%5Frate%5Fhfr%5Flook%5Fweirdcheap%5Fin/)\
  Why does High Frame Rate (HFR) look weird/cheap in movies ...\
  Oct 12, 2023 — Maybe you watched it with motion smoothing on. That feature on tvs when turned on makes everything look like a cheap soap opera. c...\
  Reddit·r/movies
- [link](https://www.reddit.com/r/gaming/comments/1ge7kti/why%5Fdoes%5F24fps%5Flook%5Fgood%5Fin%5Fmovies%5Fbut%5Fhorrible/)\
  Why does 24fps look good in movies but horrible in video games?\
  Oct 29, 2024 — 60fps looks uncanny and unnatural in movies and TV, but is ideal for gaming. 24fps looks horrendous and choppy in video games, but...\
  Reddit·r/gaming
- [link](https://www.reddit.com/r/videography/comments/1iqbv0x/a%5Flittle%5Fessay%5Fabout%5Fthe%5Fimportance%5Fof%5Fframe%5Frate/)\
  A little essay about the importance of frame rate and motion ...\
  Feb 15, 2025 — 24fps is great for films, music videos and series. But if you vlog, shoot sports/live events or display gameplay at 24fps, then yo...\
  4:17\
  Reddit·Restlesstonight

Show all

You said: both in a cinema and on a phone or laptop? why not high fps.

Yes, this rule applies **everywhere**—whether you are sitting in a premium IMAX theater, watching on your laptop, or streaming on your phone. High FPS ruins movies across all screens for three primary reasons: psychological immersion, structural flaws in the film industry, and human biology.

Here is exactly why high FPS completely breaks the illusion of cinema.

1\. It Destroys the "Cinematic Illusion"

Cinema relies on an unspoken agreement: you are watching a stylized, fictional world, not real life.

- **The Magic of 24 FPS:** The natural motion blur of 24 FPS acts like a dream filter. It separates the film from reality, allowing your brain to accept that an actor in a plastic suit is actually a superhero, or a painted plywood set is an alien planet.
- **The Curse of High FPS (48+ FPS):** High frame rates remove motion blur, making everything hyper-sharp and hyper-real. Instead of a cinematic world, you see exactly what was happening on the physical set. The expensive costumes start looking like cheap Halloween outfits, the makeup looks caked-on, and the background looks like a stage prop.

2\. The Disaster of Real-World Tests

Directors have actually tried pushing high FPS in theaters, and audiences almost universally hated it:

- **The Hobbit (48 FPS):** Director Peter Jackson shot _The Hobbit_ trilogy in High Frame Rate (HFR) at 48 FPS \[1]. Audiences complained it looked like a cheap BBC soap opera, a daytime television show, or a fast-forwarded video game.
- **Gemini Man (120 FPS):** Ang Lee released this action movie in 120 FPS. Critics noted that the action looked like a high-definition sports broadcast rather than a gritty Hollywood thriller, pulling people completely out of the story.

3\. The Technical Nightmare for Animation and Effects

Movies today are packed with computer-generated imagery (CGI). Rendering special effects at high frame rates is an economic and technical nightmare.

- **VFX Render Times:** If a visual effects studio needs to render a complex scene with explosions and digital characters, rendering it at 60 FPS or 120 FPS requires **2x to 5x more computing power and time** than 24 FPS.
- **Traditional Animation:** Anime and traditional cartoons are usually drawn at 12 or 24 frames per second. Forcing a cartoon into 60 FPS using software interpolation creates ugly digital artifacts, weird melting lines, and deprives the animator of timing their drawings for emotional impact.

How Laptops and Phones Differ from Theaters

While the artistic reason to avoid high FPS is identical, the screens handle the technical delivery differently:

- **In a Cinema:** The digital projector native-flashes the light at exactly 24Hz (or 48Hz with a double-flash technique) onto the screen. It is perfectly synced.
- **On a Laptop or Phone:** Most standard laptops are locked at **60Hz**. Because 60 cannot be divided evenly by 24, a laptop has to artificially stretch the frames (the 3:2 pulldown) to fit its 60Hz loop, causing micro-stuttering. Only high-end phones (like your S23 in Adaptive mode) or modern 120Hz/144Hz laptops can smoothly drop down to match the true cinematic 24 FPS perfectly.

Have you ever noticed that weird, ultra-smooth **"Soap Opera" look** on a friend's modern TV or laptop screen? If you want, I can show you **how to turn it off** in your media player settings.

You said: ive no idea. i guess games are like films, and many actually want to achieve that.

It is incredibly intuitive to think that way! Games and films both tell epic stories, use cinematic camera angles, and feature photorealistic graphics.

However, games and films have a fundamental structural difference: **films are passive, while games are interactive.** This single distinction completely flips the rules of frame rates upside down.

Here is why games absolutely require high FPS, while films do not.

1\. The Interaction Loop (Input Lag)

When you watch a film, you are an observer. If a frame takes 41 milliseconds to show up on screen (the speed of 24 FPS), it doesn't matter because you aren't trying to control the characters.

In a game, you are pulling the triggers and moving the joysticks.

- **At 24 FPS/Hz:** There is a heavy, sluggish delay between the moment you press a button and the moment your character moves on screen. It feels like moving through mud.
- **At 120 FPS/Hz:** The game reacts instantly to your hands. High FPS is not just about making the game look pretty; it is about making the game **feel** tight, responsive, and natural.

2\. Digital Shutter vs. Physical Blur

The biggest reason low frame rates look great in movies but terrible in games comes down to how the images are created.

- **Films have "Perfect" Blur:** A movie camera physical shutter stays open for a fraction of a second, capturing a smooth smear of motion within every single frame. Your brain uses this blur to connect the individual images seamlessly.
- **Games have "Fake" Blur:** A graphics card renders a game as a series of mathematically perfect, hyper-sharp, static snapshots. If you play a game at 24 FPS, there is no natural blur between frames. Moving the camera feels like watching a rapid-fire slideshow, which can cause intense headaches and motion sickness.

The Dynamic Transition: Cutscenes vs. Gameplay

Game developers actually struggle with this exact paradox, and they bridge the gap using two clever tricks:

- **Cinematic Cutscenes (The 30 FPS Cap):** When a game drops the controller inputs and forces you to watch a story moment, developers will often intentionally lock the frame rate to 30 FPS and add heavy motion blur. They do this specifically to mimic the "film look" you mentioned.
- **Gameplay (The Framerate Uncap):** The millisecond the story scene ends and control is handed back over to your thumbs, the game engine unlocks the frame rate to run as high as possible so the action feels tight and fluid.

Do you notice that transition yourself when you play games—where the **story parts feel like a movie** but the **action parts feel entirely different**?

You said: visual novels?

Visual novels are the ultimate exception to the rule because they sit exactly on the fence between a book, a film, and a video game.

Because of how they are designed, you do not need a high frame rate for a visual novel. In fact, most visual novels are intentionally locked at **30 FPS or 60 FPS**, and running them any higher provides almost zero benefit.

Here is why high FPS doesn't matter for visual novels:

1\. There is No Real-Time Action

Visual novels consist of static or semi-static backgrounds, 2D character sprites, and text boxes.

- You spend 95% of your time reading text at your own pace and clicking to advance.
- Since your mouse movements are minimal and there are no fast-paced camera pans, a high frame rate like 144Hz offers no competitive or mechanical advantage.

2\. The Animation is Drawn Frame-by-Frame

Many modern visual novels use technologies like _Live2D_ to make character sprites breathe, blink, or move their mouths.

- These subtle animations are manually drawn and animated at specific, low frame rates (often 30 FPS or lower).
- Forcing the game engine to run at 120 FPS will not make the characters blink any smoother, because the extra visual frames literally do not exist in the game files.

3\. The One Exception: UI and Text Transitions

The only place you will ever "feel" a high frame rate in a visual novel is in the menus.

- Opening the save/load menu, fading between scenes, or watching text crawl across the screen will look slightly cleaner at 120Hz.
- However, this is a minor visual luxury rather than a gameplay necessity.

Are you playing a specific visual novel right now on your **Ubuntu system** or your **Samsung S23**? Let me know the title, and I can tell you if it supports high refresh rates or if it is locked by default.

You said: what about having a high fps for a static image or a page in a book

Having a high FPS for a completely static image or a frozen page in a book <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">provides <strong>absolutely zero visual benefit</strong></mark>. If nothing on the screen is moving, 120 FPS looks identical to 1 FPS.

In fact, keeping a high frame rate on a static page is actively harmful because it wastes massive amounts of hardware energy for no reason.

Here is what happens behind the scenes when you look at a static page on your devices:

1\. The Physics of the "Still Image"

Frames per second (FPS) is a measurement of change over time. If you are looking at a static photograph or reading a page in an e-book:

- The pixels do not change color.
- No new visual information is being generated by your computer or phone.
- Your eyes cannot perceive a refresh rate because there is no motion or animation to smooth out.

2\. Why Phones Use "Variable Refresh Rates" to Fix This

This exact scenario is why your Samsung Galaxy S23 uses **Adaptive Mode**.

- When you are fast-scrolling through a book layout, the S23 fires at **120Hz** so the moving text stays perfectly readable.
- The exact millisecond your thumb stops moving and you pause to read the static text, the phone's LTPO display panel automatically drops its refresh rate all the way down to **24Hz or even lower** \[1].
- By dropping the frame rate on static images, the phone saves massive amounts of battery power. The moment you touch the screen to turn the page, it instantly spikes back up to 120Hz.

3\. The One Exception: E-Ink Devices

If you want the ultimate execution of this concept, look at dedicated e-readers like the **Amazon Kindle**.

- Kindle screens have a refresh rate of roughly **1 to 2 FPS**—they only refresh the screen a single time when you physically turn a page.
- Because the screen drops to 0 FPS while you are actively reading a static page of text, the device consumes zero screen energy during that time. This is why Kindle batteries last for weeks instead of hours.

Are you noticing your **S23 battery draining quickly** when you use it to read books or view images? I can show you how to check if your screen is dropping its refresh rate properly when it goes static.