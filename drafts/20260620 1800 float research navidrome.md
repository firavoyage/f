<!-- inspired by antonino (leohearts?) -->

<!-- i might not need it. it's not a masterclass case study. and i already have metro on android and elisa/mpv/vlc on desktop. just copy the files. -->

# navidrome or alternatives

**Navidrome** is widely considered the gold standard for self-hosted music streaming. It is incredibly lightweight, written in Go, and serves as a [Subsonic API](https://www.navidrome.org/apps/) server, meaning you can connect it to dozens of highly polished third-party apps. However, Navidrome relies strictly on your audio file tags (metadata) and completely lacks a "folder view" mode. \[[1](https://www.reddit.com/r/selfhosted/comments/1ayzlty/what%5Fserverclient%5Fdo%5Fyou%5Fuse%5Ffor%5Fmusic/), [2](https://www.reddit.com/r/selfhosted/comments/185zr5x/what%5Fis%5Feveryones%5Fgo%5Fto%5Faudio%5Fstreaming%5Fchoice/), [3](https://www.howtogeek.com/replaced-these-subscriptions-with-raspberry-pi-never-looked-back/), [4](https://www.reddit.com/r/selfhosted/comments/1e02iqu/whats%5Fyour%5Fpreferred%5Fselfhosted%5Fmusic%5Fstreaming/), [5](https://github.com/navidrome/navidrome/issues/1506)]

The right choice depends on your specific layout preference, library size, and hardware setup. \[[1](https://shop.zimaspace.com/blogs/zima-campaign-hub/top-12-home-media-servers?srsltid=AfmBOorvEXaMJDkIc89zEHuR%5FZB-DpC8VEo32x8jbzfRVScR-HL3Vl1T), [2](https://www.reddit.com/r/selfhosted/comments/1u56lgf/jellyfin%5Fvs%5Fnavidrome/)]

### The Best Self-Hosted Music Servers \[[1](https://github.com/navidrome/navidrome/issues/1506)]

- **Navidrome**: Best for a dedicated, lightweight Spotify-like experience.
  - Pros: Resource-friendly (runs flawlessly on a Raspberry Pi); excellent tag sorting; highly stable.
  - Cons: Web UI is basic; completely lacks folder browsing.
- **Jellyfin**: Best if you want a single hub for music, movies, and TV.
  - Pros: Consolidates all media; completely open-source.
  - Cons: Web client treats music like video files; memory-heavy; lacks strict 5-star rating systems.
- **Gonic**: Best lightweight alternative with folder browsing.
  - Pros: Also uses the Subsonic API; properly supports folder-based navigation.
  - Cons: Minimalist web interface; configuration requires text/config files.
- **Plex (with Plexamp)**: Best for a polished, commercial-grade user experience.
  - Pros: Plexamp is arguably the most beautiful audio client available; unmatched sonic analysis and mix generation.
  - Cons: Proprietary backend; some features require a paid subscription. \[[1](https://www.reddit.com/r/selfhosted/comments/1o760b3/alternative%5Fto%5Fnavidrome/), [2](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [3](https://news.ycombinator.com/item?id=43711754), [4](https://www.reddit.com/r/selfhosted/comments/z2ufjg/alternatives%5Fto%5Fnavidrome/), [5](https://www.reddit.com/r/selfhosted/comments/1g1zn7n/can%5Fsomeone%5Fsuggest%5Fa%5Fselfhosted%5Fmusic%5Fserver/), [6](https://www.reddit.com/r/selfhosted/comments/1bb8v8k/streaming%5Fmusic%5Flibrary%5Fto%5Fsmartphone%5Fnavidrome/), [7](https://www.howtogeek.com/replaced-these-subscriptions-with-raspberry-pi-never-looked-back/), [8](https://www.reddit.com/r/selfhosted/comments/1ayzlty/what%5Fserverclient%5Fdo%5Fyou%5Fuse%5Ffor%5Fmusic/), [9](https://www.reddit.com/r/selfhosted/comments/185zr5x/what%5Fis%5Feveryones%5Fgo%5Fto%5Faudio%5Fstreaming%5Fchoice/), [10](https://www.reddit.com/r/selfhosted/comments/1e02iqu/whats%5Fyour%5Fpreferred%5Fselfhosted%5Fmusic%5Fstreaming/)]

***

### Key Comparison

| Feature \[[1](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [2](https://www.reddit.com/r/selfhosted/comments/1o760b3/alternative%5Fto%5Fnavidrome/), [3](https://www.reddit.com/r/selfhosted/comments/1e02iqu/whats%5Fyour%5Fpreferred%5Fselfhosted%5Fmusic%5Fstreaming/), [4](https://news.ycombinator.com/item?id=43711754), [5](https://www.reddit.com/r/selfhosted/comments/z2ufjg/alternatives%5Fto%5Fnavidrome/), [6](https://www.reddit.com/r/selfhosted/comments/1bb8v8k/streaming%5Fmusic%5Flibrary%5Fto%5Fsmartphone%5Fnavidrome/), [7](https://www.reddit.com/r/selfhosted/comments/1ayzlty/what%5Fserverclient%5Fdo%5Fyou%5Fuse%5Ffor%5Fmusic/), [8](https://symfonium.app/)] | Navidrome               | Jellyfin        | Gonic         | Plex / Plexamp  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------- | ------------- | --------------- |
| **Primary Focus**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Music Only              | All Media       | Music Only    | All Media       |
| **Resource Usage**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Extremely Low           | Medium to High  | Extremely Low | Medium          |
| **Folder Browsing**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ❌ No                   | Yes             | Yes           | Yes             |
| **API Type**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Subsonic / OpenSubsonic | Native / Custom | Subsonic      | Native / Custom |

***

### Recommended Client Applications

If you choose a Subsonic-compatible server like Navidrome or Gonic, you do not have to use their default web interfaces. You can connect them to beautiful, modern player apps: \[[1](https://www.reddit.com/r/selfhosted/comments/1o760b3/alternative%5Fto%5Fnavidrome/), [2](https://www.howtogeek.com/replaced-these-subscriptions-with-raspberry-pi-never-looked-back/), [3](https://lab.uberspace.de/guide%5Fnavidrome/)]

- **Desktop PC / Mac**: Use Feishin, a stunning NextJS desktop client that essentially transforms your library into a custom Spotify interface.
- **Android**: Use [Symfonium](https://symfonium.app/) (highly customizable, paid) or **Finamp** (clean, free, tailored for Jellyfin).
- **iOS**: Use **Amperfy** or **substreamer** for smooth mobile playback and offline caching. \[[1](https://www.reddit.com/r/navidrome/comments/1q51i5o/is%5Fthere%5Fany%5Fclient%5Fthat%5Fyou%5Fwould%5Frecommend/), [2](https://www.markpitblado.me/blog/a-self-hosted-music-setup-that-rivals-spotify/), [3](https://news.ycombinator.com/item?id=43711754), [4](https://symfonium.app/), [5](https://www.reddit.com/r/selfhosted/comments/1g1zn7n/can%5Fsomeone%5Fsuggest%5Fa%5Fselfhosted%5Fmusic%5Fserver/), [6](https://www.reddit.com/r/selfhosted/comments/185zr5x/what%5Fis%5Feveryones%5Fgo%5Fto%5Faudio%5Fstreaming%5Fchoice/)]

If you tell me what **hardware** you plan to host this on and whether your music library has **clean metadata tags**, I can recommend the exact setup for you.

- [link](https://www.reddit.com/r/selfhosted/comments/1o760b3/alternative%5Fto%5Fnavidrome/)\
  Alternative to NaviDrome? : r/selfhosted\
  Oct 15, 2025 — \* Phreemium. • 8mo ago. It really is worth sorting out your music one time using “beets” or “Picard”. bdu-komrad. • 8mo ago. This ...\
  Reddit·r/selfhosted
- [link](https://www.reddit.com/r/selfhosted/comments/z2ufjg/alternatives%5Fto%5Fnavidrome/)\
  Alternatives to Navidrome ? : r/selfhosted - Reddit\
  Nov 23, 2022 — Alternatives to Navidrome ? \* stryke187. • 4y ago. If you're using the web client to play from a desktop, I'd highly recommend Son...\
  Reddit·r/selfhosted
- [link](https://www.reddit.com/r/selfhosted/comments/1ayzlty/what%5Fserverclient%5Fdo%5Fyou%5Fuse%5Ffor%5Fmusic/)\
  What server/client do you use for music? : r/selfhosted - Reddit\
  Feb 24, 2024 — Comments Section \* dereksalem. • 2y ago. Navidrome is definitely my main normal "music" streamer (aside from Spotify), but Plexamp...\
  Reddit·r/selfhosted

Show all

# install navidrome on ubuntu

To install **Navidrome** on Ubuntu, the most reliable and efficient method is <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">using <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Docker Compose</strong></mark>. This approach bundles the application and its dependencies, ensuring a quick and clean setup. \[[1](https://www.navidrome.org/docs/installation/docker/), [2](https://www.reddit.com/r/navidrome/comments/12udl4r/learning%5Fcurve/), [3](https://nas.ugreen.com/blogs/how-to/set-up-navidrome-on-nas)]

Follow these step-by-step instructions to get your personal music server running.

### 1. Install Dependencies

Update your package list and install Docker along with Docker Compose. \[[1](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7)]

bash

```
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose -y
```

Use code with caution.

### 2. Create Project Directories

Set up a dedicated folder on your host machine to store Navidrome's configurations and state. \[[1](https://www.youtube.com/watch?v=PeC8Nv0xhEU\&t=1), [2](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7)]

bash

```
mkdir -p ~/navidrome/data
```

Use code with caution.

_(Make sure you also know the absolute path to your existing music folder, for example: `/home/youruser/Music`)._ \[[1](https://www.reddit.com/r/navidrome/comments/12upieu/installation%5Fhelp%5Fa%5Fbrother%5Fout/), [2](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7)]

### 3. Configure Docker Compose \[[1](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7)]

Create a deployment configuration file inside your project directory. \[[1](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7)]

bash

```
nano ~/navidrome/docker-compose.yml
```

Use code with caution.

Paste the following configuration into the file. Be sure to replace `/home/youruser/Music` with the **actual path** to your music collection. \[[1](https://www.navidrome.org/docs/installation/docker/), [2](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7), [3](https://devconnected.com/how-to-setup-grafana-and-prometheus-on-linux/)]

yaml

```
version: "3"
services:
  navidrome:
    image: deluan/navidrome:latest
    user: "1000:1000" # Match your Ubuntu user UID:GID to avoid permission issues
    ports:
      - "4533:4533"
    restart: unless-stopped
    environment:
      ND_LOGLEVEL: "info"
    volumes:
      - ~/navidrome/data:/data
      - /home/youruser/Music:/music:ro # Change left side to your music folder path
```

Use code with caution.

_Press `Ctrl + O`, `Enter`, and `Ctrl + X` to save and exit._

### 4. Start the Server

Launch the container in detached background mode. \[[1](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7), [2](https://www.youtube.com/watch?v=PeC8Nv0xhEU\&t=1)]

bash

```
cd ~/navidrome
sudo docker-compose up -d
```

Use code with caution.

### 5. Access the Web Interface \[[1](https://nas.ugreen.com/blogs/how-to/set-up-navidrome-on-nas)]

1. Open your web browser.
2. Navigate to `http://localhost:4533` (or `http://your-server-ip:4533` if installing on a remote machine).
3. Follow the prompt to create your **administrator account**. \[[1](https://github.com/WB2024/WBs-Guide-to-Navidrome), [2](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7), [3](https://lindevs.com/install-navidrome-inside-docker-container-on-linux), [4](https://nas.ugreen.com/blogs/how-to/set-up-navidrome-on-nas)]

Once logged in, Navidrome will automatically scan your designated music directory and populate your library. \[[1](https://www.youtube.com/watch?v=7V5UUJlSknY), [2](https://www.youtube.com/watch?v=hYWehInea4Q\&t=7)]

If you would like to customize your setup further, let me know:

- Do you want to connect **mobile apps** (like Subsonic clients) to your server?

- Would you like to enable **secure remote access** from outside your home network?

- Do you need help setting up **Spotify or Last.fm metadata integration**? \[[1](https://www.youtube.com/watch?v=7V5UUJlSknY), [2](https://www.youtube.com/watch?v=K3DtR3g2S8Y\&t=9), [3](https://forum.cloudron.io/topic/4222/best-local-ubuntu-app-for-connecting-to-my-navidrome-app), [4](https://www.reddit.com/r/navidrome/comments/1qgcel8/installing%5Fnavidrome%5Fon%5Flinux%5Fconverting%5Fa/), [5](https://github.com/WB2024/WBs-Guide-to-Navidrome)]

- [link](https://www.youtube.com/watch?v=7V5UUJlSknY)\
  Lets Install: Navidrome Using Docker Compose (Open ...\
  Sep 4, 2021 — hello everyone and welcome back to another video now in this video I'll be showing you how to install Nid Romero using Docker Comp...\
  10:09\
  YouTube·Techdox

- [link](https://www.navidrome.org/docs/installation/docker/)\
  Installing with Docker - Navidrome\
  Jan 4, 2026 — Using the official docker images with Docker and Docker Compose. Docker images are available for the linux/amd64, linux/arm/v6, li...\
  Navidrome

- [link](https://www.reddit.com/r/navidrome/comments/1qgcel8/installing%5Fnavidrome%5Fon%5Flinux%5Fconverting%5Fa/)\
  Installing Navidrome on Linux, converting a Spotify ... - Reddit\
  Jan 18, 2026 — Installing Navidrome on a Linux-based system (using docker) Converting a Spotify Playlist and importing it into Navidrome. Accessi...\
  Reddit·r/navidrome

Show all

## You said: simpler

Here is the simplest and fastest way to install Navidrome directly on Ubuntu using pre-compiled binaries. This method avoids Docker entirely.

### 1. Install Dependencies

Run this command to install the required media software:

bash

```
sudo apt update && sudo apt install ffmpeg -y
```

Use code with caution.

### 2. Download and Extract Navidrome

Create a folder, download the application, and extract it:

bash

```
sudo mkdir -p /opt/navidrome /var/lib/navidrome
sudo wget https://github.com -O /tmp/navidrome.tar.gz
sudo tar -xvzf /tmp/navidrome.tar.gz -C /opt/navidrome/
```

Use code with caution.

### 3. Change Permissions

Give your current Ubuntu user ownership of the folders:

bash

```
sudo chown -R $USER:$USER /opt/navidrome /var/lib/navidrome
```

Use code with caution.

### 4. Create the Configuration File

Open a new configuration file:

bash

```
nano /opt/navidrome/navidrome.toml
```

Use code with caution.

Paste these three lines inside. Replace `/home/youruser/Music` with your **actual music folder path**:

toml

```
MusicFolder = "/home/youruser/Music"
DataFolder = "/var/lib/navidrome"
LogLevel = "info"
```

Use code with caution.

_Press `Ctrl+O`, `Enter`, then `Ctrl+X` to save and exit._

### 5. Run Navidrome

Start the server immediately:

bash

```
/opt/navidrome/navidrome
```

Use code with caution.

### 6. Access the Web View

- Open your browser to `http://localhost:4533`
- Create your admin account and start listening.

If you are ready for the next steps, tell me if you want to:

- Make it run **automatically in the background** when Ubuntu boots up.
- Add **multiple users** or accounts for family members.

# navidrome or jellyfin or opensubsonic

When choosing between Navidrome, Jellyfin, and OpenSubsonic, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">your decision depends on whether you need an <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">all-in-one media server</strong>, a <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">dedicated music server</strong>, or modern <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">protocol standards</strong></mark>. \[[1](https://www.reddit.com/r/selfhosted/comments/1tvlumg/any%5Fpointadvantage%5Fusing%5Fnavidrome%5Fif%5Fjellyfin%5Fis/), [2](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [3](https://www.navidrome.org/)]

Here is the direct breakdown:

- Choose **Navidrome** if you want a dedicated, lightweight, and blazing-fast server purely for music.
- Choose **Jellyfin** if you want a single server to host your entire media library, including video (movies/TV shows) alongside music.
- Choose **OpenSubsonic** if you are looking for the standardized API protocol that powers modern music streaming clients, rather than a standalone piece of software. \[[1](https://symfonium.app/android-music-player-plex-jellyfin-subsonic-navidrome/), [2](https://www.reddit.com/r/selfhosted/comments/1hrkffc/hosting%5Fmusic/), [3](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [4](https://www.navidrome.org/), [5](https://www.reddit.com/r/selfhosted/comments/1tvlumg/any%5Fpointadvantage%5Fusing%5Fnavidrome%5Fif%5Fjellyfin%5Fis/)]

***

### Understanding the Differences

To make the right choice, it helps to understand that you are not comparing three identical things. Navidrome and Jellyfin are **servers**, while OpenSubsonic is an **API standard**. \[[1](https://www.reddit.com/r/selfhosted/comments/1tvlumg/any%5Fpointadvantage%5Fusing%5Fnavidrome%5Fif%5Fjellyfin%5Fis/), [2](https://www.navidrome.org/), [3](https://apps.apple.com/gb/app/nautiline-opensubsonic-client/id6755918140), [4](https://symfonium.app/android-music-player-plex-jellyfin-subsonic-navidrome/), [5](https://news.ycombinator.com/item?id=42515657)]

| Feature / Attribute \[[1](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [2](https://www.reddit.com/r/selfhosted/comments/1hrkffc/hosting%5Fmusic/), [3](https://www.navidrome.org/), [4](https://symfonium.app/android-music-player-plex-jellyfin-subsonic-navidrome/), [5](https://www.reddit.com/r/selfhosted/comments/1ehiw0y/i%5Fnotice%5Fsome%5Fof%5Fyou%5Fhave%5Fboth%5Fjellyfin%5Fand/), [6](https://www.reddit.com/r/Symfonium/comments/1twq3mh/navidrome%5Fv%5Fjellyfin%5Fsymfonium/), [7](https://www.reddit.com/r/selfhosted/comments/1qizgy8/jellyfin%5Fvs%5Fnavidrome%5Ffor%5Fmusic/), [8](https://news.ycombinator.com/item?id=46515579)] | Navidrome                                        | Jellyfin                                              | OpenSubsonic                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------- |
| **Type**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Dedicated Music Server                           | All-in-One Media Server                               | API Protocol / Standard                       |
| **Media Supported**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Music & Audiobooks                               | Video, Music, & Photos                                | Audio streaming data                          |
| **Resource Usage**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Extremely low (~50MB RAM)                        | Moderate to high (heavy resource footprint)           | N/A (Implemented by servers)                  |
| **Library Scaling**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Instantaneous scans; easily handles 100k+ tracks | Slower indexing; can lag with massive music libraries | Dependent on the server implementation        |
| **Ecosystem**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Massive client pool (via Subsonic API)           | Limited to native apps or specialized music clients   | Standardizes advanced features across clients |

***

### Navidrome: The Best for Dedicated Music

[Navidrome](https://www.navidrome.org/) is a highly optimized, open-source music server written in Go. It acts as a backend that watches your music folder, reads metadata tags perfectly, and streams them efficiently. \[[1](https://www.reddit.com/r/selfhosted/comments/1nqhu7r/which%5Fmusic%5Fserver/), [2](https://www.navidrome.org/), [3](https://railway.com/deploy/navidrome), [4](https://www.navidrome.org/apps/), [5](https://mainvps.net/blog/how-to-connect-docker-navidrome-to-symphonium/)]

- **Blazing Fast**: It reads metadata instantly and does not bog down your hardware, making it perfect for a Raspberry Pi or low-spec NAS.
- **Massive Client Choice**: Because it uses the Subsonic API, you can use dozens of excellent mobile apps like Symfonium on Android or Amperfy and Play:Sub on iOS.
- **No Video**: It cannot stream movies or TV shows. \[[1](https://www.reddit.com/r/selfhosted/comments/1ehiw0y/i%5Fnotice%5Fsome%5Fof%5Fyou%5Fhave%5Fboth%5Fjellyfin%5Fand/), [2](https://www.navidrome.org/), [3](https://bit-101.com/blog/posts/2025-03-29/plex-navidrome-symfonium/), [4](https://idmforums.com/t/the-self-hosted-media-thread/7950), [5](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [6](https://www.reddit.com/r/selfhosted/comments/1qizgy8/jellyfin%5Fvs%5Fnavidrome%5Ffor%5Fmusic/)]

### Jellyfin: The Best for All-Media Consolidation \[[1](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026)]

[Jellyfin](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026) is a powerful, fully open-source media ecosystem designed to replace Plex. \[[1](https://www.reddit.com/r/selfhosted/comments/pz9dpb/lets%5Fmake%5Fa%5Fdefinitive%5Fguide%5Fto%5Fthe%5Fsubtle/), [2](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026), [3](https://www.lincplustech.com/es/news/best-nas-for-media-server.html), [4](https://blog.elest.io/the-2026-homelab-stack-what-self-hosters-are-actually-running-this-year/), [5](https://www.xda-developers.com/underrated-jellyfin-features-i-wish-id-discovered-sooner/)]

- **One Server to Rule Them All**: If you want your movies, home videos, live TV, and music available in a single unified interface, Jellyfin handles it out of the box.
- **The Downside for Audio**: Jellyfin treats music similarly to video files. Its metadata parser can occasionally miscategorize multi-artist compilation albums, and scrolling through a massive library of 50,000+ tracks can cause visible interface lag. \[[1](https://www.reddit.com/r/selfhosted/comments/1ehiw0y/i%5Fnotice%5Fsome%5Fof%5Fyou%5Fhave%5Fboth%5Fjellyfin%5Fand/), [2](https://www.xda-developers.com/single-music-app-plex-jellyfin-navidrome/), [3](https://www.reddit.com/r/selfhosted/comments/1hrkffc/hosting%5Fmusic/), [4](https://www.reddit.com/r/selfhosted/comments/1bml6zw/navidrome%5Fvs%5Fjellyfin%5F2024/), [5](https://www.reddit.com/r/selfhosted/comments/1qizgy8/jellyfin%5Fvs%5Fnavidrome%5Ffor%5Fmusic/)]

### OpenSubsonic: The Protocol Blueprint

[OpenSubsonic](https://www.navidrome.org/apps/) is not a program you download and install. It is a modern, community-driven extension of the legacy Subsonic API. \[[1](https://www.navidrome.org/apps/), [2](https://www.navidrome.org/), [3](https://news.ycombinator.com/item?id=42515657)]

- **The Standard**: It introduces newer capabilities like gapless playback, smarter transcoding, and synchronized lyrics across the self-hosted landscape.
- **How it fits**: Both Navidrome and modern music clients implement the OpenSubsonic standard to communicate smoothly with one another. \[[1](https://www.navidrome.org/apps/), [2](https://symfonium.app/android-music-player-plex-jellyfin-subsonic-navidrome/), [3](https://www.navidrome.org/), [4](https://www.navidrome.org/apps/)]

***

### The Ultimate Self-Hosted Setup

Many homelab enthusiasts choose to **run both**. You can point Jellyfin to your video folders, and point Navidrome to your music folders. \[[1](https://www.reddit.com/r/selfhosted/comments/1qizgy8/jellyfin%5Fvs%5Fnavidrome%5Ffor%5Fmusic/), [2](https://www.reddit.com/r/selfhosted/comments/1hrkffc/hosting%5Fmusic/), [3](https://www.reddit.com/r/selfhosted/comments/1tvlumg/any%5Fpointadvantage%5Fusing%5Fnavidrome%5Fif%5Fjellyfin%5Fis/), [4](https://www.reddit.com/r/selfhosted/comments/1o6h50r/music%5Fhosting/)]

If you use a meta-client like Symfonium on Android or Yuzic on iOS, you can even connect to **both servers simultaneously**, giving you a single, beautiful mobile interface that pools your music files together seamlessly. \[[1](https://apps.apple.com/lt/app/yuzic-navidrome-jellyfin/id6740042497), [2](https://www.xda-developers.com/single-music-app-plex-jellyfin-navidrome/)]

If you want to narrow down your choice, tell me:

- What **hardware** will you be hosting this on?

- How large is your **music library** (approximate number of tracks or gigabytes)?

- Do you also need to stream **movies or TV shows**?

- [link](https://www.reddit.com/r/selfhosted/comments/1ehiw0y/i%5Fnotice%5Fsome%5Fof%5Fyou%5Fhave%5Fboth%5Fjellyfin%5Fand/)\
  I notice some of you have both Jellyfin and Navidrome and ...\
  Aug 1, 2024 — What Jellyfin would do is split these into two artists, unless it was on a whitelist that the jellyfin devs maintained. Attempts t...\
  Reddit·r/selfhosted

- [link](https://www.reddit.com/r/selfhosted/comments/1qizgy8/jellyfin%5Fvs%5Fnavidrome%5Ffor%5Fmusic/)\
  Jellyfin vs. Navidrome For Music : r/selfhosted - Reddit\
  Jan 21, 2026 — \* batch\_dat. • 5mo ago. I have both available, and Navidrome is just, very simple. It works the best for me. I do think that you'r...\
  Reddit·r/selfhosted

- [link](https://www.reddit.com/r/selfhosted/comments/1nqhu7r/which%5Fmusic%5Fserver/)\
  Which music server : r/selfhosted - Reddit\
  Sep 26, 2025 — \* -dreamIIx. • 9mo ago. For me navidrome offers a way better metadata processing and it is completely album-illness free. It const...\
  Reddit·r/selfhosted

Show all

# all features of navidrome

[Navidrome](https://www.navidrome.org/) is a <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">lightweight, open-source, and self-hosted music streaming server</mark> that acts as a personal alternative to Spotify or Apple Music. It focuses exclusively on audio streaming, allowing you to manage large music collections directly from your own hardware. \[[1](https://www.navidrome.org/docs/overview/), [2](https://www.navidrome.org/about/), [3](https://jellywatch.app/blog/jellyfin-vs-navidrome-best-self-hosted-music-server-2026)]

### Core Server & Performance Features

- **Ultra-Lightweight**: Runs smoothly on low-resource hardware like old computers or a Raspberry Pi Zero.
- **Massive Library Handling**: Capable of indexing collections with hundreds of thousands of tracks without performance drops.
- **Automatic Monitoring**: Watches your folders for changes, instantly importing new files and refreshing metadata.
- **Cross-Platform**: Deploys natively across Windows, macOS, and Linux, and provides official Docker images. \[[1](https://www.navidrome.org/), [2](https://www.navidrome.org/docs/overview/), [3](https://www.navidrome.org/about/), [4](https://repocloud.io/details/Navidrome/)]

### Playback & Audio Processing

- **Broad Audio Support**: Streams virtually any modern audio format (including MP3, FLAC, OGG, and WAV).
- **On-the-Fly Transcoding**: Converts or downsamples audio files in real time based on user or player settings to save mobile data.
- **Native Opus Encoding**: Offers excellent audio compression efficiency during mobile streaming.
- **Jukebox Mode**: Routes audio playback directly through the host server's local audio hardware using the `mpv` player backend. \[[1](https://www.navidrome.org/docs/overview/), [2](https://www.navidrome.org/docs/usage/features/jukebox/), [3](https://nas.ugreen.com/blogs/how-to/set-up-navidrome-on-nas), [4](https://www.homedock.cloud/apps/navidrome/), [5](https://railway.com/deploy/navidrome)]

### User Interface & Content Discovery

- **Responsive Web UI**: Built using React and Material UI, the built-in browser client automatically scales seamlessly across desktops and smartphones.
- **Multi-Library Setup**: Partitions audio files into separate logical libraries (e.g., separating Lossless music, lossy tracks, or Audiobooks).
- **Smart Playlists**: Creates dynamic playlists using logic filters (similar to iTunes smart playlists) that update dynamically.
- **Tag-Based and Folder Browsing**: Navigates music using embedded metadata tags or through simulated folder structures.
- **Detailed Metadata Handling**: Fully processes box sets, compilation formats (Various Artists), comments, and custom sorting tags.
- **Multi-Language UI**: Localized and translated into over 34 languages. \[[1](https://www.navidrome.org/docs/overview/), [2](https://www.navidrome.org/docs/getting-started/), [3](https://www.navidrome.org/docs/usage/features/multi-library/), [4](https://www.navidrome.org/docs/usage/library/tagging/), [5](https://www.navidrome.org/docs/overview/)]

### Client Ecosystem & API

- **Subsonic/OpenSubsonic API Compatibility**: Integrates directly with a vast ecosystem of third-party clients.
- **Platform Diversity**: Accessible through popular apps for iOS and Android, desktop music clients, and smart systems like Android Auto, Apple CarPlay, or Android TV.
- **Play Queue Syncing**: Saves your current play queue state so you can pick up exactly where you left off across different devices. \[[1](https://www.navidrome.org/docs/overview/), [2](https://www.navidrome.org/)]

### Integrations & Community Extensions

- **External Scrobbling**: Syncs listening habits directly to Last.fm, ListenBrainz, and Maloja servers.
- **Local Scrobble History**: Tracks historical playback data locally to build personal analytics ("Navidrome Wrapped" metrics).
- **Metadata & Artwork Agents**: Enriches the library by pulling biography text and image assets from Last.fm, Spotify, or Deezer.
- **Lyrics Engine**: Extracts synced or plain text lyrics directly from embedded tags as well as sidecar `.lrc` or `.txt` files.
- **Plugin Architecture**: Supports community-developed plugins to automate tasks like AI playlist generation or playlist importing.
- **Internet Radio**: Allows users to save and stream external internet radio stations. \[[1](https://www.navidrome.org/docs/overview/), [2](https://github.com/WB2024/WBs-Guide-to-Navidrome), [3](https://www.navidrome.org/docs/usage/features/scrobbling/), [4](https://www.navidrome.org/docs/usage/integration/external-services/), [5](https://www.navidrome.org/docs/usage/configuration/options/), [6](https://www.navidrome.org/docs/usage/features/), [7](https://www.xda-developers.com/navidromes-plugin-system-adds-useful-spotify-like-features/), [8](https://www.navidrome.org/docs/usage/features/plugins/)]

### Multi-User & Security Configuration \[[1](https://www.navidrome.org/docs/getting-started/)]

- **Isolated User Profiles**: Allocates separate play counts, favorite flags, personal 5-star ratings, and custom playlists for every user account.
- **Access Control**: Grants restricted permissions to specific libraries per user profile.
- **Public Link Sharing**: Generates timed shareable web links for tracks, albums, or playlists so non-account holders can stream your music.
- **External Authentication**: Integrates seamlessly with Single Sign-On (SSO) systems, reverse proxies, OIDC, and 2FA instead of relying entirely on standard local passwords. \[[1](https://www.navidrome.org/docs/overview/), [2](https://www.navidrome.org/docs/usage/features/multi-library/), [3](https://www.navidrome.org/docs/usage/configuration/options/), [4](https://www.navidrome.org/docs/usage/features/sharing/), [5](https://www.navidrome.org/docs/getting-started/extauth-quickstart/)]

If you are thinking about setting up your own server, tell me:

- What **operating system** or environment will host it (Docker, Windows, Raspberry Pi, etc.)?
- Approximately **how many audio files** or gigabytes are in your collection?
- Do you intend to access it **outside your home network**? \[[1](https://www.navidrome.org/docs/overview/), [2](https://www.navidrome.org/docs/faq/), [3](https://github.com/topics/navidrome)]

I can provide step-by-step setup guides or recommend compatible mobile apps for your configuration.

- [link](https://www.navidrome.org/docs/overview/)\
  Navidrome Overview\
  Jan 4, 2026 — Navidrome Overview. ... Navidrome can be used as a standalone server, that allows you to browse and listen to your music collectio...\
  Navidrome
- [link](https://www.navidrome.org/docs/usage/features/)\
  Features | Navidrome\
  Jan 4, 2026 — Features \* How to Use Smart Playlists in Navidrome (Beta) Learn how to create and manage Smart Playlists in Navidrome, a dynamic w...\
  Navidrome
- [link](https://www.navidrome.org/docs/usage/features/multi-library/)\
  Multi-Library Support - Navidrome\
  Jan 4, 2026 — Overview. Navidrome supports multiple music libraries since v0. 58.0, allowing you to organize your music into separate collection...\
  Navidrome

Show all

## You said: all highly requested features of navidrome

While Navidrome is heavily praised for its performance, the community frequently requests features aimed at matching the convenience of mainstream apps like Spotify. \[[1](https://github.com/navidrome/navidrome/discussions/2230), [2](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/)]

The most **highly requested features** from the Navidrome [GitHub Issues](https://github.com/navidrome/navidrome/issues) and [Reddit discussions](https://www.reddit.com/r/navidrome/) center around casting, open standards, metadata editing, and social functionality: \[[1](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/), [2](https://github.com/navidrome/navidrome/discussions/categories/ideas)]

### 1. Advanced Casting & Device Streaming

Because Navidrome is treated as a centralized home server, users heavily request built-in capabilities to cast music to other hardware without relying entirely on a client phone app: \[[1](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/)]

- **Native Chromecast & AirPlay Support**: Direct casting capabilities right from the native Navidrome Web UI. \[[1](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/)]
- **DLNA / UPnP Player Target List**: The ability for the web player to discover and beam audio streams directly to smart speakers, network players, or AV receivers. \[[1](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/)]
- **Sonos Ecosystem Integration**: A dedicated controller protocol to directly play your self-hosted collection through Sonos home sound systems. \[[1](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/)]

### 2. Web UI Metadata Editing

Currently, Navidrome operates as a "read-only" architecture that requires users to organize their files using external tools like [MusicBrainz Picard](https://www.navidrome.org/docs/faq/) or Beets before scanning. \[[1](https://github.com/navidrome/navidrome/discussions/categories/ideas), [2](https://www.navidrome.org/docs/faq/), [3](https://www.navidrome.org/docs/usage/admin/security/), [4](https://www.navidrome.org/docs/usage/library/tagging/)]

- **In-App Tag Editing**: Modifying incorrect artist names, track titles, track numbers, and genre structures directly through the web interface.
- **Cover Art Management**: Uploading or changing album cover art directly in the browser when files lack embedded images. \[[1](https://github.com/navidrome/navidrome/discussions/categories/ideas)]

### 3. Expanded OpenSubsonic API Adoptions \[[1](https://www.navidrome.org/apps/), [2](https://www.reddit.com/r/navidrome/comments/1eoc0cz/generating%5Fweekly%5Frecommendations%5Fplaylists%5Ffor/)]

While Navidrome is compatible with OpenSubsonic, users are heavily pushing for deep integration of the newer v2 API extensions: \[[1](https://github.com/navidrome/navidrome/issues), [2](https://www.navidrome.org/apps/)]

- **SongLyrics v2 API Protocol**: A standard way to seamlessly serve time-synced `.lrc` text files to all compatible third-party player apps.
- **Dynamic Stream Radio Metadata**: Relaying active track titles and artist changes when hosting external internet radio streams (currently, it often just displays a static station name). \[[1](https://github.com/navidrome/navidrome/discussions/4881), [2](https://github.com/navidrome/navidrome/issues)]

### 4. Smart Playlist & Library Refinements

Navidrome recently implemented initial Smart Playlist parameters, but heavy collectors desire deeper playlist controls: \[[1](https://github.com/navidrome/navidrome/discussions/categories/ideas), [2](https://www.reddit.com/r/navidrome/comments/1roy1aq/update%5Fnavidrome%5Fsmart%5Fplaylist%5Fgenerator/)]

- **Comprehensive Multi-Rule Engines**: Linking complicated "AND/OR" parameters together (e.g., _Play count > 5_ AND _Year is between 1990-1999_ AND _Exclude Genre: Holiday_). \[[1](https://github.com/navidrome/navidrome/discussions/categories/ideas)]
- **Global Shuffle Exclusions**: A toggle to flag specific items—like audiobooks, podcasts, or stand-up comedy—to ensure they never pop up during a "Shuffle All" music session. \[[1](https://github.com/navidrome/navidrome/discussions/categories/ideas)]

### 5. Multi-User & Social Operations

Self-hosters who share their servers with family or friends often request features to make Navidrome feel more interactive: \[[1](https://github.com/navidrome/navidrome/discussions/2230)]

- **Open Public Registration**: An optional toggle allowing server owners to host open instances where new users can freely register their own accounts rather than requiring manual creation by an admin. \[[1](https://github.com/navidrome/navidrome/discussions/2230)]
- **Shared/Collaborative Playlists**: Giving multiple user accounts permission to concurrently view, add, and re-order the exact same playlist.
- **Explicit Content Filtering**: An administrative flag to hide or block tracks with explicit tags from specific user accounts (such as a child's profile). \[[1](https://www.reddit.com/r/navidrome/comments/12v5fom/feature%5Frequests/)]

If you are following these feature developments, let me know:

- Is there a **specific missing feature** that is currently holding you back from migrating to Navidrome?
- Would you like to know which **third-party client apps** bridge the gap by adding features like casting or advanced shuffle right now? \[[1](https://www.navidrome.org/apps/)]

I can recommend specific client workflows to help you work around these upstream server limitations!

- [link](https://www.navidrome.org/apps/)\
  Client Apps - Navidrome\
  Navic is a beautiful, modern, and open-source Navidrome client for both Android and iOS. Extremely customisable and boasts many fe...\
  Navidrome
- [link](https://github.com/navidrome/navidrome/discussions/4881)\
  \[Feature request] Radio song metadata #4881 - GitHub\
  Mar 5, 2026 — Mar 5, 2026. - Mentioning that it seems to be a standing issue from 2023, listed in section 2.6 in #2285. But I would love this as...\
  GitHub
- [link](https://github.com/navidrome/navidrome/discussions/categories/ideas)\
  navidrome navidrome Ideas · Discussions - GitHub\
  Nov 30, 2025 — Add option on webinterface for modifying metadata of the database files. Serikpg started 2 weeks ago in Ideas. 0. 7. 💡 Scrobble t...\
  GitHub

Show all

## You said: all opinionated choices of navidrome

The development of [Navidrome](https://www.navidrome.org/) is intentionally guided by strict architectural principles. Rather than trying to be a general-purpose "do everything" media server (like Plex or Jellyfin), its creator and maintainers have made several strict, opinionated choices that define its scope. \[[1](https://www.reddit.com/r/navidrome/comments/1qg5vv1/debating%5Fbetween%5Fplex%5Fand%5Fnavidrome/)]

These opinionated design decisions dictate exactly how the software behaves:

### 1. Metadata Over Folder Structure (Read-Only Tags) \[[1](https://www.navidrome.org/docs/usage/library/tagging/)]

Navidrome enforces a strict **"metadata-first" philosophy**. It reads the embedded ID3/Vorbis tags within your music files to build its entire database, rather than relying on how you name or organize files on your hard drive. \[[1](https://git.sr.ht/~ser/ostui), [2](https://www.navidrome.org/docs/faq/), [3](https://www.navidrome.org/docs/usage/library/tagging/)]

- **No Directory-Based Guessing**: If your tracks have missing or broken tags, Navidrome will not try to guess the album name based on the folder name. It will categorize them as "Unknown." \[[1](https://www.navidrome.org/docs/usage/library/tagging/)]
- **Strictly Read-Only**: [The official Navidrome FAQ](https://www.navidrome.org/docs/faq/) explicitly states that Navidrome will never include features to rename files, move folders, or edit metadata tags directly from the Web UI. File management and tagging must be done upstream using external tools like MusicBrainz Picard or Beets. \[[1](https://www.navidrome.org/docs/faq/), [2](https://nicholaslyz.com/blog/2023/02/01/music-management-with-navidrome-dsub-and-beets/)]

### 2. Strict Focus on Audio Only (No Video)

Unlike other media servers, Navidrome completely rejects video integration.

- **No Music Videos**: Even if you have concert footage or official music videos nested inside your music folders, Navidrome's scanner will completely ignore them.
- **No Video Concerts**: The developers maintain that adding video playback would bloat the server, destroy its lightweight performance footprint, and stray away from its purpose as a pure music streaming backend.

### 3. Server-Client Separation (Lean Web UI)

Navidrome is built to be a robust API server first, and a playback app second. It heavily relies on the Subsonic/OpenSubsonic API ecosystem. \[[1](https://nicholaslyz.com/blog/2023/02/01/music-management-with-navidrome-dsub-and-beets/), [2](https://nas.ugreen.com/blogs/how-to/set-up-navidrome-on-nas)]

- **The Web UI is Minimalist**: The built-in web interface is designed to be simple, fast, and responsive—not filled with flashy visual effects or highly customizable layouts. \[[1](https://www.navidrome.org/docs/overview/), [2](https://repocloud.io/details/Navidrome/)]
- **Delegation to Third-Party Clients**: For advanced playback features (like gapless playback, heavy caching, visual equalizers, offline downloading, or complex theme styling), Navidrome's stance is that these belong in the client app. Users wanting a rich desktop experience are directed to standalone apps like [Feishin](https://www.navidrome.org/apps/) rather than expecting the web interface to morph into Spotify. \[[1](https://www.reddit.com/r/navidrome/comments/1orncd0/how%5Fto%5Fget%5Fthe%5Fmost%5Fout%5Fof%5Fnavidrome%5Fwithout/), [2](https://www.reddit.com/r/selfhosted/comments/1r2n8g6/appreciation%5Fpost%5Ffor%5Fnavidrome/), [3](https://www.navidrome.org/apps/), [4](https://www.navidrome.org/apps/)]

### 4. Single-Binary, Ultra-Lightweight Footprint

The project prioritizes performance on minimal hardware (like a Raspberry Pi Zero) over bloated features.

- **Go and React Stack**: By writing the backend entirely in Go and the frontend in React, the application compiles down into a single standalone binary.
- **Rejection of Complex Dependencies**: Feature requests that require installing heavy external database engines, deep-learning AI models, or complex runtime environments are routinely turned down to keep the resource consumption near zero.

### 5. OpenSubsonic Standardization

Rather than creating its own proprietary API, Navidrome strictly anchors itself to the open Subsonic and OpenSubsonic API specifications. \[[1](https://www.navidrome.org/apps/), [2](https://nicholaslyz.com/blog/2023/02/01/music-management-with-navidrome-dsub-and-beets/)]

- **No Proprietary Lock-in**: By designing the server entirely around a shared, community-driven open standard, it ensures that if you ever decide to replace Navidrome with a different backend (like Gonic or Airsonic), all your mobile apps and clients will continue to work seamlessly without modification. \[[1](https://nicholaslyz.com/blog/2023/02/01/music-management-with-navidrome-dsub-and-beets/), [2](https://git.sr.ht/~ser/ostui)]

Are you planning to build a workflow around these constraints? Let me know:

- Do you prefer **tagging your music ahead of time**, or are you looking for a server that allows you to fix metadata on the fly?
- What **specific desktop or mobile devices** are you planning to stream your music to? \[[1](https://www.reddit.com/r/navidrome/comments/1qg5vv1/debating%5Fbetween%5Fplex%5Fand%5Fnavidrome/), [2](https://nicholaslyz.com/blog/2023/02/01/music-management-with-navidrome-dsub-and-beets/), [3](https://www.navidrome.org/apps/)]

I can recommend the best external taggers or client apps that fit perfectly into Navidrome's ecosystem!

- [link](https://www.navidrome.org/docs/faq/)\
  FAQ | Navidrome\
  Jun 7, 2026 — Navidrome doesn't allow you to rename or move files. However, it may be able to change or add cover art for artists, albums, and p...\
  Navidrome
- [link](https://www.navidrome.org/apps/)\
  Client Apps - Navidrome\
  Navidrome. NaviBeat Paid. 2026-06-18. A native Apple-ecosystem player for Subsonic, OpenSubsonic, and Navidrome: iPhone, iPad, Mac...\
  Navidrome
- [link](https://nicholaslyz.com/blog/2023/02/01/music-management-with-navidrome-dsub-and-beets/)\
  Music Management with Navidrome, DSub and Beets - Nicholas\
  Feb 1, 2023 — Previously on Windows, I was using MediaMonkey to manage my music. It offered wireless syncing (over LAN) for the associated Andro...\
  nicholaslyz.com

Show all

## You said: the ux of navidrome

The User Experience (UX) of Navidrome can be described as <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">functional, minimalist, and predictable</strong></mark>. Because it is heavily inspired by early versions of Google Play Music, it values immediate access to audio and blistering performance over visual flash, complex layouts, or animated transitions. \[[1](https://www.plerdy.com/blog/what-is-user-experience/), [2](https://www.eleken.co/blog-posts/ui-ux-trends)]

Here is a breakdown of how the UX behaves in practice across different aspects of the software:

### 1. Visual Design and Interface Layout

The web application uses a traditional, highly intuitive layouts built with React and Material UI: \[[1](https://slickplan.com/blog/what-is-ux-design)]

- **The Sidebar-Driven Anchor**: Navidrome uses a classic left-hand sidebar layout on desktop (collapsible on mobile) that lets you switch instantly between Albums, Artists, Songs, Playlists, and Radio Stations.
- **The Unified Bottom Player**: No matter where you navigate inside the application, the audio playback engine remains anchored as a sticky bar at the bottom of the screen with giant, high-contrast playback controls.
- **Light and Dark Modes**: Includes basic theme support (with a dark mode default) that changes the color accent layout without adding visual clutter. \[[1](https://www.youtube.com/watch?v=baAI7NTDx20), [2](https://www.navidrome.org/docs/developers/creating-themes/)]

### 2. Speed and Desktop Responsiveness

Performance _is_ a core feature of Navidrome's UX. The application prioritizes immediate responsiveness over styling: \[[1](https://www.designmonks.co/blog/ui-ux-design-trends-2026)]

- **Near-Instant Search**: Results appear in real time as you type each letter into the search bar, separating results instantly by artists, albums, and tracks.
- **Zero Loading Screens**: Clicking into a massive artist page with dozens of albums loads instantly without spinning wheels, as the database queries are highly optimized.
- **Infinite Scroll**: Long views (like a list of 10,000 individual tracks) load seamlessly as you scroll down, avoiding rigid page numbers. \[[1](https://www.navidrome.org/docs/gsoc/)]

### 3. Native Mobile Web UX

If you choose not to use a native app and instead load the Navidrome web address directly on an Android or iOS browser, the UX dynamically adapts:

- **Responsive Reflow**: The sidebar hides automatically into a top-left "hamburger" menu icon.
- **PWA Capability**: It behaves like a Progressive Web App (PWA). You can save it to your phone's home screen, hiding browser bars so it acts like a standalone application.
- **Thumb-Friendly Tapping**: Buttons and lists scale upward slightly to ensure you don't accidentally click the wrong song with your finger. \[[1](https://www.linode.com/docs/guides/red-team-adversary-emulation-with-caldera/)]

### 4. "Player" vs. "Manager" Distinctions

Because Navidrome is strictly read-only, it completely separates the _playback_ UX from the _management_ UX: \[[1](https://www.navidrome.org/docs/usage/admin/security/)]

- **Frictionless Playback**: Adding an entire album to the queue, creating a quick playlist, or starring a favorite song requires a single click on standard icons (plus signs, play buttons, and stars).
- **The "What You See is What You Have" Reality**: There are no menus to fix a misspelled track, change genre categorization, or swap out a low-resolution album image. If something looks incorrect in the UI, you have to close the app, edit the file on your computer, and wait for Navidrome to auto-rescan. This creates a highly predictable but strict boundary for the user. \[[1](https://www.navidrome.org/docs/usage/library/tagging/)]

### 5. Multi-Client Consistency

Because Navidrome's internal web client is purposely lean, a major component of the overarching Navidrome UX actually comes down to the external apps you connect to it (like **Feishin** on desktop, or **Symfonium** and **Amperfy** on mobile): \[[1](https://www.navidrome.org/docs/usage/features/smart-playlists/), [2](https://nas.ugreen.com/blogs/how-to/set-up-navidrome-on-nas)]

- Navidrome tracks your active play queue status on the server. If you pause a song on your computer, you can log into a phone client app and see your exact queue state preserved, making the handoff between different interfaces feel unified. \[[1](https://github.com/Blakeem/Navidrome-MCP)]

Are you evaluating Navidrome for yourself or a group of users? Let me know:

- Will you be using the **built-in web player** most of the time, or do you plan to connect **mobile phone apps**?
- Are the users tech-savvy self-hosters, or are you looking for a **Spotify-like experience for non-technical family members**?

I can help point out which third-party clients completely transform Navidrome's visual interface!

- [link](https://www.plerdy.com/blog/what-is-user-experience/)\
  What is User Experience: A Complete Guide – Plerdy\
  May 2, 2024 — Nielsen Norman Group deeply delves into UX history and its impact on modern design. Key Components of UX UX encompasses several ke...\
  \
  \
  Plerdy
- [link](https://www.eleken.co/blog-posts/ui-ux-trends)\
  UI/UX Trends: The Danger in Sacrificing Usability for Edgy Design\
  Mar 2, 2026 — Minimalist UI/UX design A minimalistic movement encourages designers to simplify interfaces by removing unnecessary elements or co...\
  \
  \
  Eleken
- [link](https://slickplan.com/blog/what-is-ux-design)\
  What is UX Design & What Does a User Experience Designer do?\
  Mar 9, 2026 — Going to a website or downloading an app where the navigation makes sense, the layout is intuitive and your overall interaction is...\
  \
  \
  Slickplan

Show all

## You said: all ux flaws of navidrome

While Navidrome is highly praised for its blazing-fast speed and low resource usage, its uncompromising minimalist design creates notable User Experience (UX) flaws. Because the primary web interface is treated more like a "reference client" than a direct competitor to commercial streaming services, several layout choices and missing interactive paradigms frustrate users.

The core **UX flaws and limitations** of the native Navidrome interface include:

### 1. The "Read-Only" Friction

Navidrome enforces a strict security separation between server streaming and library management. This architectural choice creates the app’s most significant workflow friction: \[[1](https://www.navidrome.org/docs/faq/)]

- **The Interrupted Fix Loop**: If you notice a typo in a song title, a missing track number, or a broken album cover, you cannot fix it in the app. You must leave Navidrome, open an external tool like [MusicBrainz Picard](https://www.navidrome.org/docs/faq/), fix the tag, save the file to your hard drive, and wait for Navidrome to auto-rescan. \[[1](https://github.com/navidrome/navidrome/discussions/3355), [2](https://www.navidrome.org/docs/faq/)]
- **The "Unknown" Graveyard**: Files with completely missing metadata are thrown into a generic `[Unknown Artist]` or `[Unknown Album]` folder. Navidrome provides no contextual UI clues or folder-path indicators within the app to help you identify which actual hard-drive files those tracks belong to. \[[1](https://github.com/navidrome/navidrome/issues/3191)]

### 2. Search Limitations

Navidrome's global search mechanism does not function like the fuzzy, intelligent search bars found in modern streaming apps:

- **Literal Matching Only**: The search engine lacks advanced Full-Text Search (FTS) capabilities. If you make a small typo or misspell a word, the system often returns zero results. \[[1](https://github.com/navidrome/navidrome/issues/255)]
- **No Filename Searching**: Search queries look strictly at embedded metadata tags. If a song is titled `Track_01_Final.mp3` on your disk but has an empty title tag, searching for "Track\_01" will yield absolutely nothing. \[[1](https://github.com/navidrome/navidrome/issues/3191)]
- **Filter vs. Global Search**: The main search bar operates as a filter for your current view rather than an intelligent global index, forcing extra navigation steps to search across the entire library. \[[1](https://github.com/navidrome/navidrome/issues/255)]

### 3. Rigid Screen Real Estate & Playlist Management

The UI layout struggles when processing complex interactive user commands:

- **Clunky Queue Re-ordering**: Managing a large play queue or moving songs around manually via the web interface lacks the fluid "drag-and-drop" animations seen on mainstream apps. It relies on stiff keyboard arrow mappings or repetitive context menu clicks. \[[1](https://github.com/navidrome/navidrome/issues/3833)]
- **Missing Personalized Dashboards**: Navidrome doesn't greet you with a tailored home screen. There is no central profile page aggregating your personal analytics—such as your top-played genres, historical favorites, or year-end milestones. \[[1](https://github.com/navidrome/navidrome/issues/1067)]
- **Hidden Global Actions**: Standard commands like "Shuffle All Tracks" or global genre shuffling are buried deep inside submenus rather than being presented as prominent, persistent control options on top-level pages.

### 4. Media Classification & Sorting Gaps

Because Navidrome views almost all audio through a traditional "Artist > Album > Song" lens, multi-genre collections face navigation friction:

- **The Audiobook & Podcast Penalty**: Spoken-word formats are treated identically to pop albums. Listening to a multi-hour audiobook can mess up your music queue because there are no built-in global shuffle filters to exclude specific folders, nor is there a unified interface to remember the exact timestamp where you paused a 5-hour file.
- **Handling Compilations & Split Releases**: Navidrome's default sorting can split collaborative albums into multiple fragmented artist pages if the upstream "Album Artist" tags aren't perfectly aligned. \[[1](https://apps.apple.com/gb/app/flo-navidrome-client/id6529533140)]

### 5. Lack of Native Playback Controls (Casting & Volume)

The built-in web browser player acts entirely localized to the device you are browsing from: \[[1](https://github.com/WB2024/WBs-Guide-to-Navidrome)]

- **No In-App Casting**: If you want to beam music from the web UI to a smart speaker, Sonos, or a Chromecast device, there are no native casting buttons. You are forced to cast your entire web browser tab manually via Chrome/Edge menus.
- **No Server-Side Volume State**: Volume levels and play states do not easily cross-sync through the native web client if you are trying to use your phone's web wrapper as a remote control for a desktop speaker system.

***

### How the Community Solves This

Most long-time Navidrome users bypass these native web UI flaws completely by using it strictly as a invisible background server, pairing it instead with **third-party client applications**: \[[1](https://github.com/navidrome/navidrome/discussions/3355)]

- **On Desktop**: Switching to [Feishin](https://www.navidrome.org/apps/) transforms the layout into a gorgeous, Spotify-like interface with far smoother queue handling.
- **On Mobile**: Apps like **Symfonium** (Android) or **Amperfy/flo** (iOS) add robust local caching, proper offline downloading, and advanced fuzzy search logic over your server's database. \[[1](https://www.reddit.com/r/navidrome/comments/1gqwh6j/why%5Fare%5Fall%5Fthe%5Fios%5Fclients%5Fkinda%5Fshitty/), [2](https://apps.apple.com/gb/app/flo-navidrome-client/id6529533140), [3](https://support.symfonium.app/t/mobile-transcoding-not-working-navidrome/12943)]

Are you running into one of these specific layout annoyances right now? Let me know:

- Which **view or layout behavior** is bothering you the most?
- What **client device** (iPhone, Android, Desktop) are you using to stream?

I can recommend the exact client app that fixes that specific visual or search limitation!

- [link](https://support.symfonium.app/t/mobile-transcoding-not-working-navidrome/12943)\
  Mobile Transcoding Not Working (Navidrome) - Support\
  Mar 10, 2026 — Any changes to the server configuration (navidrome. toml) ? deluan March 10, 2026, 9:34pm 6. I think I see the issue: The Target F...\
  Symfonium support
- [link](https://github.com/navidrome/navidrome/discussions/3355)\
  Hi! Just some newbie questions #3355 - GitHub\
  Oct 4, 2024 — Maintainer. Original comment in English - Translate to English. Apps: Check the ones that were tested with Navidrome here: https:/\
  GitHub
- [link](https://www.navidrome.org/docs/faq/)\
  FAQ - Navidrome\
  Jun 7, 2026 — You can group tracks by folder , for example, by setting the configuration option PID. Album="folder" . Check the PID documentatio...\
  Navidrome

Show all

## You said: all ux flaws of feishin

[Feishin](https://github.com/jeffvli/feishin) is widely praised as one of the best desktop clients for Navidrome and Jellyfin because it beautifully mimics the modern Spotify user interface. However, underneath its highly polished surface, its nature as a custom frontend player introduces unique User Experience (UX) flaws, navigation inconsistencies, and technical playback quirks. \[[1](https://github.com/jeffvli/feishin), [2](https://www.reddit.com/r/selfhosted/comments/1styguj/self%5Fhosted%5Fmusic%5Fapp/), [3](https://www.reddit.com/r/selfhosted/comments/1o6h50r/music%5Fhosting/)]

The most notable UX flaws and constraints reported by the Feishin community include:

### 1. Complex Playback Backend Configuration (MPV vs. Web) \[[1](https://github.com/jeffvli/feishin/issues/1551)]

Feishin allows you to choose between a standard "Web" audio player and an "MPV" player backend. This choice creates significant confusion and friction during the initial user setup: \[[1](https://github.com/jeffvli/feishin)]

- **The "Out-of-the-Box" MPV Requirement**: If you choose the superior MPV engine on Windows or Linux, the app often forces you to manually locate and link the exact `.exe` file path to your computer's MPV installation. This steep setup hurdle breaks the seamless installation flow expected of modern software. \[[1](https://github.com/jeffvli/feishin/issues/99)]
- **Feature Disparity Disconnection**: Certain features only work depending on your backend choice. For example, setting up high-end audio features like **Windows Exclusive Mode (Bitperfect audio)** blocks your keyboard's global volume hotkeys, creating an annoying UX tradeoff. Meanwhile, choosing the alternative Web backend can occasionally trigger a bug where tracks skip or rapidly flicker between play and pause. \[[1](https://github.com/jeffvli/feishin/discussions/1578), [2](https://www.reddit.com/r/selfhosted/comments/1q3nlnn/the%5Ficing%5Fon%5Fthe%5Fcake%5Fof%5Fselfhosting%5Ffor%5Fme%5Fwas/)]

### 2. Interaction & UI Inconsistencies

While Feishin's visual aesthetic is exceptionally strong, it suffers from functional predictability gaps across different views: \[[1](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/), [2](https://www.reddit.com/r/selfhosted/comments/1o6h50r/music%5Fhosting/)]

- **Unpredictable "Hold-to-Random" Inputs**: In many parts of Feishin, holding down a play button initiates a random shuffle session—a great, highly requested concept. However, the UX is inconsistent; trying to perform the exact same hold-down interaction on the main blue play buttons of Artist pages or specific playlists does nothing, frustrating user muscle memory. \[[1](https://github.com/jeffvli/feishin/issues/1374)]
- **System Tray Windows Breakdown**: When minimizing the desktop app to the system tray, restoring the window occasionally breaks the UI context layout or forces a hard desktop reset to bring the interface back smoothly. \[[1](https://github.com/jeffvli/feishin/issues)]

### 3. Visual Bugs with Heavy Audio Features

Feishin tries to incorporate highly visual, audiophile-friendly elements into the player bar, which sometimes compromises layout stability:

- **The Waveform Crash**: Selecting the **"Playerbar as Waveform"** option (which replaces the standard progress line with a calculated audio wave visual) can cause the entire app window to freeze or turn completely white when analyzing massive high-bitrate FLAC files. \[[1](https://github.com/jeffvli/feishin/issues)]
- **Missing Activity Cleans**: When connected to a Jellyfin backend, Feishin's stop button stops local audio playback but often fails to clear your active session profile on the host dashboard, tricking your server into thinking you are still streaming long after you closed the player. \[[1](https://github.com/jeffvli/feishin/issues)]

### 4. Rigid Media Categorization & Library Limitations

Feishin strictly adapts to whatever your Subsonic or Jellyfin backend serves, resulting in sorting limitations:

- **Singles Visibility Issues**: Tracks categorized strictly as "Singles" rather than traditional full albums occasionally fail to appear cleanly or refuse to play properly inside specific interface views. \[[1](https://github.com/jeffvli/feishin/issues)]
- **Aggressive Genre Traps**: When navigating your music collection via genres, Feishin forces deep track-level lists rather than sorting cleanly by artist name structure first, making massive multi-genre indexing tedious to sort through by eye. \[[1](https://github.com/jeffvli/feishin/issues)]

### 5. Lack of Native Local Caching Strategy

Unlike specialized mobile apps like Symfonium, Feishin operates strictly as a continuous network streamer: \[[1](https://www.reddit.com/r/selfhosted/comments/1pq0j47/fyi%5Ffeishin%5Fthe%5Fmusic%5Fplayer%5Ffor%5Fjellyfin%5Fand/)]

- **The High-Bandwidth Dependancy**: Because it lacks robust, predictive local caching strategies, users on slower internet or restricted network configurations notice slight lag spikes or momentary buffering delays when trying to skip between high-fidelity FLAC audio files. \[[1](https://www.reddit.com/r/selfhosted/comments/1pq0j47/fyi%5Ffeishin%5Fthe%5Fmusic%5Fplayer%5Ffor%5Fjellyfin%5Fand/)]

***

### Current Alternatives & Mitigations

If these desktop UX layout bugs disrupt your daily listening routine, you can explore community alternatives:

- **Alternative Desktop Client**: Consider looking into Feishin Forks or trying out **Sonixd** (the older project that heavily inspired Feishin's early architecture). \[[1](https://github.com/jeffvli/feishin)]
- **Web UI Alternates**: Many self-hosters choose to switch back to the stock Navidrome browser client when stability is their absolute top priority. \[[1](https://www.reddit.com/r/selfhosted/comments/1pq0j47/fyi%5Ffeishin%5Fthe%5Fmusic%5Fplayer%5Ffor%5Fjellyfin%5Fand/)]

Are you experiencing a specific error—such as an **audio device failure** or **stuck progress bars**—on your desktop? Let me know your **operating system (Windows, Mac, or Linux)**, and I can walk you through adjusting the backend settings to bypass these glitches!

- [link](https://github.com/jeffvli/feishin/issues/1374)\
  \[Feature]: Consistently play randomly when holding a ... - GitHub\
  Dec 12, 2025 — In many places, the play button can be held to play randomly. This is a great idea! But, one of the most important rule of UX is c...\
  GitHub
- [link](https://github.com/jeffvli/feishin/issues)\
  Issues · jeffvli/feishin · GitHub\
  There is a known issue with Feishin crashing with STATUS\_BREAKPOINT on every launch after reboot. Other issues include: \* \*\*App wi...\
  GitHub
- [link](https://github.com/jeffvli/feishin/issues/99)\
  Can't find mpv in Path on Linux · Issue #99 · jeffvli/feishin - GitHub\
  May 10, 2023 — jeffvli commented. ... This is intended behavior. I'm currently forcing all users to manually input the path to their mpv executab...\
  GitHub

Show all

## You said: all opinionated choices of feishin

[Feishin](https://github.com/jeffvli/feishin) is a modern music player client built with strong ideological preferences. Rather than operating as an open-ended, highly modular dashboard, its creator (jeffvli) enforced strict design philosophies to maintain code cleanliness and ensure a streamlined user experience. \[[1](https://www.reddit.com/r/softwarearchitecture/comments/1l01moi/clean%5Fcode%5Fvs%5Fphilosophy%5Fof%5Fsoftware%5Fdesign%5Fdeep/), [2](https://github.com/jeffvli/feishin)]

These highly opinionated design and architectural choices define exactly what the application will and will not do:

### 1. Rejecting Plex Support Natively

The application was built explicitly to serve the decentralized open-source community. \[[1](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/)]

- **No Direct Plex Integration**: Despite Plex being the largest self-hosted media platform, Feishin's project owner has explicitly stated "no" to official Plex backend support. \[[1](https://www.reddit.com/r/selfhosted/comments/1qyh63m/feishin%5Faudio%5Fvisualizer%5Fis%5Fnow%5Fsomething%5Felse/)]
- **Strict Open-API Commitment**: The app is strictly optimized for OpenSubsonic API standards and Jellyfin frameworks. Users wanting Plex are forced to use third-party community forks instead. \[[1](https://github.com/jeffvli/feishin), [2](https://github.com/jeffvli/feishin?ref=blog.matthewbrunelle.com)]

### 2. The "Spotify-Clone" Form Factor

Feishin rejects the multi-panel, heavily customizable interface approach used by older music managers like Foobar2000 or iTunes.

- **Strict Sidebar & Flow**: The visual layout strictly locks users into a modern, Spotify-like interface paradigm. You cannot tear down windows, reposition modules, or create custom complex matrices. \[[1](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/)]
- **Limited Theme Flexibility (Custom CSS Only)**: Instead of providing built-in toggles for drastic UI transformations or layout configurations, the app relies strictly on Custom CSS injecting. The developers do this partly for app security, avoiding malicious JavaScript execution that could exploit server credentials. \[[1](https://www.reddit.com/r/navidrome/comments/1nfl9ct/new%5Ffeishin%5Fskin%5Fjust%5Fdropped/)]

### 3. Separation of Player Backends (Web vs. MPV)

Feishin does not use a single internal audio framework, instead choosing a dual-backend split to satisfy two radically different types of listeners:

- **The Web Engine for Ease**: A built-in standard web audio option handles low-resource streaming instantly.
- **The MPV Engine for Audiophiles**: Feishin forces deep integration with the heavy command-line video/audio engine [MPV](https://codeberg.org/thororen/Feishin). By making MPV a foundational choice, the app prioritizes bit-perfect, uncompressed local desktop audio rendering even if it means users have to manually configure executive executable paths on installation. \[[1](https://github.com/jeffvli/feishin), [2](https://codeberg.org/thororen/Feishin)]

### 4. Continuous Streaming Over Local Offline Caching

Unlike mobile-centric audio apps that build massive local database caches, Feishin is designed primarily as a permanent network browser client:

- **Real-Time API Reliance**: The app expects a continuous, fast home-server link. It avoids building massive offline cache configurations or offline storage directories on your desktop hard drive, trusting your Navidrome or Jellyfin server to stream the audio assets dynamically. \[[1](https://github.com/jeffvli/feishin), [2](https://www.reddit.com/r/selfhosted/comments/1o3w7nw/what%5Fself%5Fhosted%5Fservices%5Fyou%5Factually%5Frely%5Fon/)]

### 5. Strict Separation of Music and Video

Even though Feishin pairs deeply with Jellyfin (which natively supports movies and television shows), it enforces a strict audio boundary:

- **Audio Collections Only**: It filters out all video components from its interface. The project refuses to adapt into a movie viewer or video playlist companion, remaining dedicated purely to track streaming, lyrics fetching, and visualizers. \[[1](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/), [2](https://www.reddit.com/r/selfhosted/comments/1qyh63m/feishin%5Faudio%5Fvisualizer%5Fis%5Fnow%5Fsomething%5Felse/), [3](https://codeberg.org/thororen/Feishin)]

Do you find yourself agreeing with Feishin's strict Spotify-like boundaries, or are you looking for a more modular player? Let me know:

- Do you use **Jellyfin or Navidrome** as your main media backend?
- Do you care about **audiophile bit-perfect playback**, or do you just want a clean UI? \[[1](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/), [2](https://github.com/jeffvli/feishin)]

I can recommend forks or configuration tweaks that align exactly with your goals!

- [link](https://github.com/jeffvli/feishin)\
  Feishin - A modern self-hosted music player. · GitHub\
  Feishin is available in the following ways: \* \*\*Web and Docker\*\* Visit https://feishin.vercel.app to use the hosted web version. T...\
  GitHub
- [link](https://www.reddit.com/r/softwarearchitecture/comments/1l01moi/clean%5Fcode%5Fvs%5Fphilosophy%5Fof%5Fsoftware%5Fdesign%5Fdeep/)\
  Clean Code vs. Philosophy of Software Design: Deep and Shallow ...\
  May 31, 2025 — So, my strategic approach is basically this: \* expose to the outside only the functions that are required. \* don't try to split me...\
  Reddit·r/softwarearchitecture
- [link](https://github.com/jeffvli/feishin?ref=blog.matthewbrunelle.com)\
  jeffvli/feishin at blog.matthewbrunelle.com - GitHub\
  Feishin supports any music server that implements a Navidrome, Jellyfin, or OpenSubsonic compatible API. \* Navidrome. \* Jellyfin. ...\
  GitHub

Show all

## You said: all highly requested features of feishin

The most **highly requested features of Feishin** center around transforming it from a continuous desktop network browser into a fully independent, heavy-duty offline media suite and casting dashboard.

Because the community views Feishin as the definitive modern interface for [Navidrome](https://github.com/jeffvli/feishin) and Jellyfin, users frequently request features to close the remaining gap between it and commercial desktop apps like Spotify: \[[1](https://www.newinlinux.com/the-self-hosted-streaming-app-feishin-got-a-major-update/)]

### 1. Robust Caching & True Offline Mode

Feishin is highly dependent on an active network connection to your home server. Consequently, local storage control is the absolute most requested feature on the [Feishin GitHub Issues tracker](https://github.com/jeffvli/feishin/issues/1753): \[[1](https://www.reddit.com/r/jellyfin/comments/1qdlfo6/any%5Fjellyfin%5Fmusic%5Fclient%5Ffor%5Fwindows%5Fwith/), [2](https://github.com/jeffvli/feishin/issues/1753)]

- **Predictive Local Caching**: Dynamically downloading the next 5 to 10 upcoming tracks in your play queue to RAM/disk to prevent audio buffering on unstable or slow remote networks.
- **Offline Album/Playlist Downloads**: A dedicated button to permanently download explicit audio files to a local laptop folder so you can listen to music during flights or when your home VPN cuts out. \[[1](https://www.reddit.com/r/jellyfin/comments/1qdlfo6/any%5Fjellyfin%5Fmusic%5Fclient%5Ffor%5Fwindows%5Fwith/), [2](https://github.com/jeffvli/feishin/issues/1753)]

### 2. Multi-Device Casting Controls

While users love the layout, Feishin behaves entirely as an isolated local player rather than a multi-room audio controller:

- **Native Chromecast & AirPlay Integration**: A dedicated casting menu to project audio streams from the desktop window straight to network smart speakers without forcing users to rely on operating system audio redirects.
- **Server/Client Playback Hand-off (Connect Feature)**: A Spotify Connect equivalent that would allow you to use your mobile phone as a remote control to skip tracks or alter the volume of the Feishin client running on your desktop.

### 3. Audiophile Audio Refinements \[[1](https://www.youtube.com/watch?v=%5FJYUrw9f7uk)]

Because Feishin bundles the powerful command-line player engine **MPV** under its hood, audio enthusiasts heavily push for deeper hardware processing controls: \[[1](https://github.com/jeffvli/feishin)]

- **Audio Loudness Normalization (ReplayGain)**: Implementing global gain calculation so that tracks from separate albums, eras, and volumes play back at a structurally consistent loudness without forcing the user to touch their volume knob.
- **Native Parametric Equalizer**: A built-in multi-band EQ layout module directly within the player settings to shape audio frequencies natively.
- **Crossfading & True Gapless Buffering**: While the MPV backend handles basic gapless playback well, users frequently request customizable crossfading sliders to seamlessly blend the trailing tail of a song into the start of the next track.

### 4. Interface Expansion & Personalization

Despite having beautiful dark themes and organic layouts, heavy music collectors desire more control over their views: \[[1](https://github.com/jeffvli/feishin/releases), [2](https://www.newinlinux.com/the-self-hosted-streaming-app-feishin-got-a-major-update/)]

- **Custom Layout Restructuring**: The option to tweak, collapse, or rearrange the primary dashboard panels (e.g., resizing the queue pane, hiding the lyrics module, or pinning a mini-player view).
- **Fuzzy & Advanced Full-Text Search**: Upgrading the top-level search query functionality to handle rough typos, multi-language symbols, or folder path strings, rather than strictly relying on exact metadata matches.
- **Local Stats & User Dashboards**: Incorporating historical listening charts, "top artist" listening blocks, and custom timeline graphs directly into the "Home" view using the scrobble database metrics it collects. \[[1](https://www.newinlinux.com/the-self-hosted-streaming-app-feishin-got-a-major-update/)]

### 5. Upstream Management Hooks

Although Feishin honors its separation of concerns as a _client app_, users consistently request tiny metadata hooks to avoid changing windows:

- **Upstream Lyric Embedding**: Feishin can beautifully pull synchronized lyrics in real time from providers like LRCLIB. Users highly request a button to write and save those discovered lyrics back onto the host server files permanently.
- **Album Art Swap Overrides**: The capability to upload a high-resolution cover image locally within the client to patch broken art without requiring server-side access to file directories. \[[1](https://www.reddit.com/r/selfhosted/comments/1s2q3sh/does%5Fa%5Fselfhosted%5Flyrics%5Fmanager%5Fexist%5Fscan/)]

If you are tracking these feature discussions, let me know:

- Is the lack of **offline downloading** or a **built-in equalizer** the primary dealbreaker for you?
- Are you connecting Feishin to a **Navidrome server or a Jellyfin server**?

I can recommend specific client alternatives or workflow workarounds to help bridge these functional gaps!

- [link](https://github.com/jeffvli/feishin)\
  Feishin - A modern self-hosted music player. · GitHub\
  Feishin is a rewrite of Sonixd that includes the following features: \* MPV player backend \* Web player backend \* Modern UI \* Scrob...\
  GitHub
- [link](https://github.com/jeffvli/feishin/releases)\
  Releases · jeffvli/feishin - GitHub\
  What's Changed \* fix playlist sort by id (#1867) by @kast3t in #1868. \* Waveform playerbar improvements by @darius-it in #1781. \* ...\
  GitHub
- [link](https://www.newinlinux.com/the-self-hosted-streaming-app-feishin-got-a-major-update/)\
  The self-hosted streaming app Feishin got a major update\
  May 27, 2026 — Themes: There are two new themes available, called Everforest, in both dark and light editions. They use green organic tones that ...\
  www.newinlinux.com

Show all

# do all ux have flaws

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, all User Experience (UX) designs have flaws</strong></mark> because a single, universally perfect design does not exist. \[[1](https://ixdf.org/literature/article/bad-ux-examples), [2](https://quicklyhire.com/is-ux-design-dying/), [3](https://uxplanet.org/10-quotes-from-a-bad-ux-designer-6ba589a76b7e)]

UX is inherently tied to human behavior, context, and business constraints, making complete perfection an impossibility. While a product can offer an exceptional experience for its primary target audience, it will inevitably fall short for others. \[[1](https://www.reddit.com/r/UXDesign/comments/12oeqg0/qa%5Ffinding%5Fux%5Fissues/), [2](https://www.smashingmagazine.com/2011/03/why-user-experience-cannot-be-designed/), [3](https://www.linkedin.com/pulse/ux-design-magic-why-quality-user-experience-takes-time-mahmoud-damer-hprtf), [4](https://yellowchalk.com/blog/4-principles-of-psychology-to-improve-ux/), [5](https://blog.adobe.com/en/publish/2017/09/15/the-imposter-syndrome-and-why-you-shouldnt-be-afraid-to-start-a-freelance-ux-design-career)]

### Why Perfect UX is Impossible

- **Users are diverse**: People have different digital literacy levels, physical abilities, cultural backgrounds, and personal preferences. What feels intuitive to a tech-savvy teenager may be highly confusing to an elderly user.
- **Context changes constantly**: A mobile app that features great UX when you are sitting on a couch might have terrible UX when you are walking outside in bright sunlight or holding a grocery bag.
- **Conflicting business goals**: Companies must balance user desires with business viability. For example, a business needs to display privacy policies or monetization loops that inherently add friction to a user's ideal, seamless flow.
- **Technical and resource limits**: UX is constrained by engineering scope, processing power, and timelines. Designers frequently make compromises due to data privacy laws, hardware limitations, or tight launch deadlines. \[[1](https://www.reddit.com/r/UXDesign/comments/1dw886e/what%5Fis%5Fthe%5Fbiggest%5Fproblem%5Fyou%5Fface%5Fin%5Fyour%5Fux/), [2](https://www.crazyegg.com/blog/ux-mistakes-every-unknowingly-commits/), [3](https://medium.com/design-bootcamp/7-obvious-ux-improvements-you-can-make-even-before-any-testing-f849d579a7f0), [4](https://www.gbnews.ch/ui-ux-design-across-cultures-why-the-same-solution-doesnt-work-everywhere/), [5](https://uxplanet.org/writing-for-everyone-a-beginners-guide-to-inclusive-ux-writing-92a0f887c81e)]

### The Core Goal: Mitigation Over Perfection

Instead of trying to eliminate every possible flaw, professional product teams focus on maximizing utility and reducing the impact of major issues. \[[1](https://www.linkedin.com/pulse/avoiding-common-pitfalls-user-experience-design-paul-geoghegan-rk51e)]

| UX Stage \[[1](https://ixdf.org/literature/article/bad-ux-examples), [2](https://www.reddit.com/r/UXDesign/comments/12oeqg0/qa%5Ffinding%5Fux%5Fissues/), [3](https://www.springboard.com/blog/design/11-ux-research-methods/), [4](https://www.springboard.com/blog/design/qualitative-research-methods/), [5](https://www.uxtweak.com/ux-design/mistakes/)] | Focus Area                                                                                      | Goal                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Research**                                                                                                                                                                                                                                                                                                                                                  | [Interaction Design Foundation](https://ixdf.org/literature/article/bad-ux-examples) guidelines | Understand user expectations to avoid blind spots.  |
| **Testing**                                                                                                                                                                                                                                                                                                                                                   | Usability metrics and QA loops                                                                  | Identify and rank flaws by severity before launch.  |
| **Iteration**                                                                                                                                                                                                                                                                                                                                                 | Continuous live updates                                                                         | Fix friction points based on real-world usage data. |

Ultimately, a "flawed" UX can still be highly successful if it solves a user's core problem efficiently and gracefully handles errors when things go wrong. \[[1](https://www.linkedin.com/pulse/avoiding-common-pitfalls-user-experience-design-paul-geoghegan-rk51e)]

If you are evaluating a specific system, let me know:

- Is this for a **mobile app, website, physical product**, or something else?
- What **specific UX issue** or frustration are you experiencing?
- Who is the **intended audience** for the product?

I can help you break down why those design flaws happen and how to address them. \[[1](https://www.crazyegg.com/blog/ux-mistakes-every-unknowingly-commits/)]

- [link](https://www.reddit.com/r/UXDesign/comments/12oeqg0/qa%5Ffinding%5Fux%5Fissues/)\
  QA finding UX issues : r/UXDesign - Reddit\
  Apr 16, 2023 — Comments Section \* kittyrocket. • 3y ago. Whoever told you that you can find or predict all UX issues is being an idiot on that po...\
  Reddit·r/UXDesign
- [link](https://www.reddit.com/r/UXDesign/comments/1dw886e/what%5Fis%5Fthe%5Fbiggest%5Fproblem%5Fyou%5Fface%5Fin%5Fyour%5Fux/)\
  What is the biggest problem you face in your UX roll today? - Reddit\
  Jul 5, 2024 — \* 1 challenge: lousy design leadership. This has been an issue everywhere, they're either too far removed from the day to day real...\
  Reddit·r/UXDesign
- [link](https://www.crazyegg.com/blog/ux-mistakes-every-unknowingly-commits/)\
  7 UX Mistakes Everyone Makes (+ How to Fix Them Today)\
  May 26, 2025 — 7 UX Mistakes Everyone Makes (+ How to Fix Them Today) Make your website better. 7 UX Mistakes Everyone Makes (+ How to Fix Them T...\
  Crazy Egg

Show all
