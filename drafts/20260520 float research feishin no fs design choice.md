#

i want to create a music player web app that follows gnome adwaita and ubuntu yaru ux. how can i do.

May 20, 2026

To create a music player web app that merges GNOME Adwaita and Ubuntu Yaru UX, you need to combine GNOME’s structural design with Ubuntu’s distinct color palette and styling.

Here is how you can build it.

🎨 Design Language Conversion

Translate desktop design systems into standard web technologies.

- **Adwaita Structure**: Use a unified header bar (HeaderBar) that combines window controls and app navigation into a single top panel. Use rounded corners (usually `12px` or `24px` for cards) and deep, flat layered surfaces.
- **Yaru Aesthetics**: Apply Ubuntu's signature aubergine (`#77216F`) or orange (`#E95420`) as your primary accent color. Use dark gray backgrounds (`#303030`) for the dark mode theme.
- **Typography**: Use the standard Ubuntu font or Inter as a clean, highly legible system font fallback. \[[1](https://discourse.ubuntu.com/t/adwaita-with-unity-8-colours/4041)]

🛠️ Recommended Tech Stack

Use modern web frameworks that offer pre-built components mimicking these desktop environments.

- **UI Library**: Use **Libadwaita-web** or **Adwaita.css**. These are community-driven CSS frameworks designed specifically to recreate GNOME interfaces in browser environments.
- **Frontend Framework**: Use **Svelte** or **React** to manage the complex states of a music player easily.
- **Iconography**: Use **GNOME Symbolic Icons** or the **FontAwesome** solid/regular set to match the clean, geometric style of Linux system icons.

📊 App Architecture & Layout

Structure your layout to mirror standard Linux media applications like Rhythmbox or Lollypop. \[[1](https://www.linuxtechi.com/top-8-music-player-for-ubuntu-linux-mint/)]

- **Sidebar**: Left-aligned navigation panel for Library, Playlists, Albums, and Settings.
- **Main View**: Grid layout for album art or a clean list view for track tables with soft hover states.
- **Bottom Player Bar**: Fixed bottom persistent bar containing playback controls, volume slider, progress bar, and current track metadata.
- **HeaderBar**: Top-aligned bar hosting search functionality, window control simulations, and view switchers.

💻 Code Blueprint (CSS Variables)

Implement these core CSS variables to establish the exact hybrid visual style.

css

```
:root {
  /* Adwaita Structural Colors */
  --window-bg-color: #fafafa;
  --view-bg-color: #ffffff;
  --card-bg-color: #ffffff;
  --card-radius: 12px;

  /* Ubuntu Yaru Accent Colors */
  --accent-color: #E95420; /* Ubuntu Orange */
  --accent-bg-color: #77216F; /* Ubuntu Aubergine */
  --text-color: #2d2d2d;
}

@media (prefers-color-scheme: dark) {
  :root {
    --window-bg-color: #242424;
    --view-bg-color: #1e1e1e;
    --card-bg-color: #2d2d2d;
    --text-color: #ffffff;
  }
}
```

Use code with caution.

🎵 Core Audio Implementation

Handle the actual music playing functionality using native web APIs.

- **HTML5 Audio API**: Use the native `Audio()` constructor to load, play, pause, and seek through tracks.
- **Media Session API**: Implement `navigator.mediaSession` so users can control your web app using hardware media keys on their keyboard or OS lock screen.

To help you get started on the technical setup, let me know:

- Which **frontend framework** do you prefer to use (React, Vue, Svelte, or vanilla JS)?
- Do you want to build this as a **standard website** or a **Progressive Web App (PWA)** that can be installed on the desktop?
- Will the music come from **local user files** or an **external API/streaming source**?

I can provide a targeted boilerplate code structure based on your choices.

- [link](https://discourse.ubuntu.com/t/adwaita-with-unity-8-colours/4041)\
  Adwaita with Unity 8 colours - Desktop\
  Can you make a version with orange selection bar (# e95420)?\
  \
  \
  Ubuntu Community Hub
- [link](https://www.linuxtechi.com/top-8-music-player-for-ubuntu-linux-mint/)\
  Top 8 Music Player for Ubuntu and Linux Mint

1. RhythmBox RhythmBox is the default music player for many Linux distributions including Ubuntu ( Ubuntu-Linux ) . It is nice mus...\
   \
   \
   LinuxTechi

You said: what are existing solutions in alt tech community, like self hosted music

May 20, 2026

In the self-hosted and alternative tech ("alt-tech") communities, the standard approach is decoupled: a **backend media server** manages your audio files, indexes metadata, and exposes a standardized streaming API, while a separate **frontend client app** connects to it to handle the user interface and playback.

**Navidrome** is the most widely adopted backend server for self-hosted music, alongside specialized frontends like **Nocturne** which already implement the exact GTK4/Libadwaita visual style you want to achieve. \[[1](https://www.reddit.com/r/navidrome/comments/1s317zt/new%5Fclient%5Ffor%5Flinux%5Fnocturne/), [2](https://www.reddit.com/r/selfhosted/comments/1o91bts/what%5Fsoftware%5Ffor%5Fself%5Fhosted%5Fmusic/), [3](https://www.navidrome.org/), [4](https://github.com/Jeffser/Nocturne)]

The dominant self-hosted music solutions are structured across these categories:

📡 The Core Standard: Subsonic / OpenSubsonic API

Instead of rewriting backend streaming logic, almost all indie and alt-tech music apps use the **Subsonic API ecosystem**. It is a mature, open-source protocol that handles user authentication, library scanning, playlist syncing, and on-the-fly audio transcoding. If you build your frontend client to hook into this API, it will instantly work with thousands of existing user setups. \[[1](https://www.jimwillis.org/2024/12/08/adventures-in-self-hosting-hifi-audio-streaming/), [2](https://linuxphoneapps.org/services/subsonic/), [3](https://flathub.org/en/apps/io.github.subsoundorg.Subsound), [4](https://www.navidrome.org/)]

🗄️ Leading Self-Hosted Backends (The Servers)

- **Navidrome**: A lightweight, modern music server written in Go. It uses minimal system resources, scales perfectly to massive libraries, handles on-the-fly transcoding, and acts as a standard OpenSubsonic API host.
- **Funkwhale**: A federated audio platform built on top of the W3C ActivityPub protocol (the same tech powering Mastodon). It allows self-hosted instances to talk to each other and share audio across a decentralized network.
- **Jellyfin**: An entirely open-source, community-driven media server forks away from Emby. While it handles videos, many use it primarily for music via specialized audio API endpoints. \[[1](https://www.reddit.com/r/selfhosted/comments/1jr7o3v/best%5Fself%5Fhosted%5Fwebmobile%5Fmusic%5Fstreamer%5Ffor%5Fown/), [2](https://www.navidrome.org/), [3](https://www.reddit.com/r/selfhosted/comments/1o91bts/what%5Fsoftware%5Ffor%5Fself%5Fhosted%5Fmusic/)]

💻 Inspiration for Your App: Adwaita & Linux Clients

If you want to see exactly how other developers have brought GNOME Adwaita elements to life for self-hosted music, look closely at these existing clients:

- **Nocturne**: A beautiful, modern desktop music client built explicitly with the **GTK4/Libadwaita framework**. It connects directly to Navidrome, OpenSubsonic servers, and local music files. Studying its layout will give you a concrete blueprint for your web UI.
- **Subsound**: A native Linux GTK4 application optimized for GNOME desktop integration that streams natively from Subsonic servers.
- **Lollypop**: A classic, native GNOME desktop music player. While it focuses heavily on local file management rather than remote web servers, it is considered the gold-standard reference UI for how an Adwaita music interface should look and behave. \[[1](https://www.reddit.com/r/navidrome/comments/1s317zt/new%5Fclient%5Ffor%5Flinux%5Fnocturne/), [2](https://github.com/Jeffser/Nocturne), [3](https://flathub.org/en/apps/io.github.subsoundorg.Subsound)]

🌐 Notable Web UI Frameworks

- **Koel**: A personal music streaming server where both the backend and frontend are packaged together. Its UI is web-first and looks highly polished, though it uses a custom interface rather than mimicking a specific desktop environment like GNOME.

Would you like to explore how to **design your frontend app's API layer** to easily connect with a standard Subsonic/Navidrome backend?

- [link](https://www.reddit.com/r/selfhosted/comments/1jr7o3v/best%5Fself%5Fhosted%5Fwebmobile%5Fmusic%5Fstreamer%5Ffor%5Fown/)\
  Best self hosted web/mobile music streamer for own ... - Reddit\
  As for actually streaming I use navidrome with symfonium as my (android) client and it's worked great for me. avdept. • 1y ago. Je...\
  Reddit
- [link](https://www.reddit.com/r/navidrome/comments/1s317zt/new%5Fclient%5Ffor%5Flinux%5Fnocturne/)\
  New Client For Linux: Nocturne : r/navidrome - Reddit\
  Hi everyone, I've been working on a new client for Navidrome using the GTK4 Libadwaita framework. In addition to the normal featur...\
  Reddit
- [link](https://www.reddit.com/r/selfhosted/comments/1o91bts/what%5Fsoftware%5Ffor%5Fself%5Fhosted%5Fmusic/)\
  What software for self hosted music? : r/selfhosted - Reddit\
  market school yoke pet attempt bells nine file birds plant. This post was mass deleted and anonymized with Redact. Known-Watercres...\
  Reddit

Show all

You said: i mean existing popular frontend solutions on different platforms

May 20, 2026

Popular self-hosted music backends (like Navidrome) rely on the standardized **Subsonic / OpenSubsonic API**. This has enabled a thriving ecosystem of community-developed frontend apps across different operating systems. \[[1](https://www.navidrome.org/), [2](https://github.com/dweymouth/supersonic), [3](https://penner.me/sharing-music-with-friends-using-flyio-azuracast-and-mopidy), [4](https://www.navidrome.org/docs/overview/)]

These existing popular frontend solutions are highly regarded on their respective platforms and serve as strong inspiration for functionality, performance, and layout logic.

***

💻 Desktop Frontends (Linux, Windows, macOS)

- **Feishin** (Windows, Linux, macOS)
  - **The Vibe**: Often called the "Spotify clone" for self-hosted music. It is arguably the most popular modern desktop client across the entire community.
  - **Tech & Design**: Built using **Electron and React**, it features a sleek, multi-pane modern interface. It handles large libraries flawlessly and includes features like lyrics syncing and smart playlist management.
- **Supersonic** (Windows, Linux, macOS)
  - **The Vibe**: A lightweight, lightning-fast native desktop application.
  - **Tech & Design**: Written in **Go**, its layout scales down cleanly into a compact widget or takes up a minimal footprint on your screen. It relies on **MPV** as its underlying audio engine, giving it robust gapless playback support.
- **Nocturne** (Linux Native)
  - **The Vibe**: Specifically tailored for the GNOME desktop environment.
  - **Tech & Design**: Built with **GTK4 and Libadwaita**, this is the exact design philosophy you are aiming for. It behaves like a core system app, adopting your exact layout choices (HeaderBars, unified view switchers, and native dark mode toggle handling). \[[1](https://www.reddit.com/r/navidrome/comments/1rszfni/best%5Ffront%5Fend%5Fapp%5Ffor%5Fnavidrome%5Fwith%5Ffull%5Fsync/), [2](https://www.markpitblado.me/blog/a-self-hosted-music-setup-that-rivals-spotify/), [3](https://www.reddit.com/r/navidrome/comments/1r4hshj/clients%5Fexperience%5Ffeedback/), [4](https://www.reddit.com/r/selfhosted/comments/1e02iqu/whats%5Fyour%5Fpreferred%5Fselfhosted%5Fmusic%5Fstreaming/), [5](https://github.com/dweymouth/supersonic), [6](https://idmforums.com/t/the-self-hosted-media-thread/7950)]

***

📱 Mobile Frontends (Android & iOS)

- **Symfonium** (Android)
  - **The Vibe**: Universally considered the "gold standard" music client for Android. It is a paid app but widely praised for its feature density.
  - **Tech & Design**: It uses modern Android Material You design principles. It stands out because it doesn't just act as a dummy player; it caches metadata aggressively to allow offline library browsing, offers complex smart filters, and manages seamless casting to Chromecast, UPnP, and Android Auto devices.
- **Amperfy** (iOS)
  - **The Vibe**: A clean, modern native iOS app that acts as an excellent, fluid player for Subsonic backends.
  - **Tech & Design**: Built using Swift, it features a native iOS aesthetic, supports Apple CarPlay, offers full offline download capabilities, and integrates with system media controls.
- **Substreamer** (Android & iOS)
  - **The Vibe**: One of the most reliable free, cross-platform mobile choices.
  - **Tech & Design**: It focuses on high-fidelity playback with a dark-themed user interface focused strictly on album-art-heavy grids and massive playlist queues. \[[1](https://www.reddit.com/r/navidrome/comments/1rsv77n/best%5Fclient%5Fapps%5Ffor%5Fnavidrome/), [2](https://bit-101.com/blog/posts/2025-03-29/plex-navidrome-symfonium/), [3](https://www.navidrome.org/docs/overview/), [4](https://forum.cloudron.io/topic/12545/saving-you-the-homework-recommended-windows-ios-apps-for-navidrome), [5](https://penner.me/sharing-music-with-friends-using-flyio-azuracast-and-mopidy), [6](https://www.reddit.com/r/selfhosted/comments/1e02iqu/whats%5Fyour%5Fpreferred%5Fselfhosted%5Fmusic%5Fstreaming/), [7](https://www.reddit.com/r/navidrome/comments/1r4hshj/clients%5Fexperience%5Ffeedback/)]

***

🌐 Web-First Client Solutions

- **Tempo / Tempus** (Web / Android Progressive Web App)
  - **The Vibe**: A minimalist music client that looks and feels exactly like Apple Music.
  - **Tech & Design**: Because it focuses on clean, flat surfaces and strict card padding, it is a great reference point for building a web app that needs to feel like a high-end, polished application rather than a busy dashboard. \[[1](https://github.com/dddevid/musly), [2](https://www.reddit.com/r/navidrome/comments/1rszfni/best%5Ffront%5Fend%5Fapp%5Ffor%5Fnavidrome%5Fwith%5Ffull%5Fsync/)]

***

💡 Takeaways for Your Web Project

Analyzing these apps highlights a few strategic insights for a web app built on GNOME Adwaita / Yaru styles:

1. **Separate UI from Audio Logic**: Apps like _Supersonic_ use external playback engines (like MPV), while web apps use the HTML5 audio state. Ensure your Adwaita components (the visual sliders, pause buttons) merely mirror an abstract `AudioContext` controller state so your UI stays smooth, even if the music buffers.
2. **State Management is King**: Look at how _Feishin_ or _Symfonium_ instantly switch views while the bottom bar remains entirely uninterrupted. Using a state management library (like Zustand for React or Svelte stores) will keep your persistent bottom playback panel completely decoupled from your main page navigation. \[[1](https://www.reddit.com/r/navidrome/comments/1rszfni/best%5Ffront%5Fend%5Fapp%5Ffor%5Fnavidrome%5Fwith%5Ffull%5Fsync/), [2](https://github.com/dweymouth/supersonic), [3](https://www.reddit.com/r/navidrome/comments/1r4hshj/clients%5Fexperience%5Ffeedback/)]

Since your design will follow **Linux Adwaita guidelines**, studying **Nocturne** (for layout structural flow) and **Feishin** (for cross-platform web component scaling) will give you the absolute best blueprint.

Would you like to drill down into how to **structure a mock layout** for your bottom audio bar or top header bar to look exactly like these apps?

- [link](https://www.reddit.com/r/navidrome/comments/1rszfni/best%5Ffront%5Fend%5Fapp%5Ffor%5Fnavidrome%5Fwith%5Ffull%5Fsync/)\
  Best front end app for navidrome with FULL sync for? - Reddit\
  Comments Section \* awriterabroad. • 2mo ago. I create playlists in navidrome and haven't had a problem with it showing in feishin.\
  Reddit
- [link](https://www.reddit.com/r/navidrome/comments/1rsv77n/best%5Fclient%5Fapps%5Ffor%5Fnavidrome/)\
  Best client Apps for Navidrome?\
  Symphonium on android is what I use, and one of the more popular. It's got a pretty deep feature set, with the only caveat being t...\
  Reddit
- [link](https://www.reddit.com/r/navidrome/comments/1r4hshj/clients%5Fexperience%5Ffeedback/)\
  Clients experience feedback : r/navidrome - Reddit\
  📱 Android: I tried almost all clients suggested in the navidrome website. I'll go briefly about my experience with them. ⭐ Symfon...\
  Reddit

Show all

#

Feishin app

May 20, 2026

Quick results from the web:

[link](https://github.com/jeffvli/feishin)

jeffvli/**feishin**: A modern self-hosted music player. - GitHub

**Feishin** supports any music server that implements a Navidrome, Jellyfin, or OpenSubsonic compatible API.

GitHub·https://github.com

[link](https://feishin.vercel.app/)

**Feishin**

Server required. Jellyfin. Navidrome. OpenSubsonic. Server Name \*. URL \*. Public URL. Username \*. Password. Add. —. —. A new version has been installed ...

Vercel·https://feishin.vercel.app

**Feishin** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a modern, free, and open-source desktop music player client built for self-hosted media servers</mark>. It is highly regarded by the self-hosting community as a polished, Spotify-like alternative for streaming personal digital music collections. \[[1](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/), [2](https://tech.yahoo.com/apps/articles/replaced-spotify-premium-jellyfin-app-123016274.html)]

The application is hosted on the [Feishin GitHub Repository](https://github.com/jeffvli/feishin). \[[1](https://github.com/jeffvli/feishin), [2](https://www.xda-developers.com/i-might-ditch-spotify-for-jellyfin-thanks-to-killer-app-feishin/)]

Key Features

- **Multi-Server Compatibility**: Natively streams music by connecting to Jellyfin, Navidrome, and OpenSubsonic API-compliant servers.
- **Dual Audio Backends**: Offers a robust **MPV player** backend for advanced desktop playback and a flexible **Web player** backend.
- **Spotify-Like Experience**: Features an **Auto DJ** function that plays similar music when a queue ends, displays latest server additions, and showcases artist bios with top tracks.
- **Lyrics Integration**: Pulls and renders both synchronized and unsynchronized lyrics during playback.
- **Customization**: Supports comprehensive UI modifications, audio visualizers, and pre-built design themes like Catppuccin and Dracula.
- **Server Syncing**: Automatically scrobbles your playback history straight back to your personal media server. \[[1](https://github.com/jeffvli/feishin?ref=blog.matthewbrunelle.com), [2](https://awesome-docker-compose.com/feishin), [3](https://www.xda-developers.com/i-might-ditch-spotify-for-jellyfin-thanks-to-killer-app-feishin/), [4](https://github.com/users/jeffvli/packages/container/package/feishin), [5](https://www.howtogeek.com/i-replaced-spotify-premium-with-jellyfin-and-this-app-sealed-the-deal/), [6](https://github.com/jeffvli/feishin/releases?ref=belginux.com), [7](https://github.com/jeffvli/feishin), [8](https://tech.yahoo.com/apps/articles/replaced-spotify-premium-jellyfin-app-123016274.html), [9](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/)]

Supported Platforms

Feishin is predominantly a desktop and web-based client: \[[1](https://selfh.st/weekly/2024-11-22/), [2](https://github.com/jeffvli/feishin?ref=blog.wellssanto.com), [3](https://github.com/jeffvli/feishin)]

- **Windows**: Easily installed via downloadable executables or [WinGet Package Manager](https://winstall.app/apps/jeffvli.Feishin).
- **macOS**: Supported natively, though it requires manually bypassing standard macOS gatekeeper quarantines due to being unsigned.
- **Linux**: Widely accessible as an AppImage, a Flatpak via [Flathub](https://flathub.org/en/apps/org.jeffvli.feishin), or via Pacstall.
- **Web & Docker**: Can be deployed using Docker or accessed through a standard web browser. \[[1](https://github.com/jeffvli/feishin/discussions), [2](https://winstall.app/apps/jeffvli.Feishin), [3](https://github.com/jeffvli/feishin/discussions/1757), [4](https://flathub.org/en/apps/org.jeffvli.feishin), [5](https://pacstall.dev/packages/feishin-app), [6](https://www.reddit.com/r/selfhosted/comments/1h55m2l/shoutout%5Fto%5Ffeishin%5Fa%5Fnavidromejellyfin%5Fplayer/), [7](https://github.com/jeffvli/feishin), [8](https://awesome-docker-compose.com/feishin)]

_(Note: There is no standalone mobile app, though the Docker deployment can be accessed responsively in mobile browsers)._ \[[1](https://www.reddit.com/r/navidrome/comments/1gutkqx/feishing%5Fmusic%5Fplayer%5F0120%5Freleased%5Fand%5Fnew/), [2](https://www.reddit.com/r/selfhosted/comments/1rzxjqd/feishin%5Fupdates%5Fand%5Fviability/), [3](https://www.xda-developers.com/i-might-ditch-spotify-for-jellyfin-thanks-to-killer-app-feishin/)]

Future Development

The original developer has begun working on a next-generation rewrite of the app named **Audioling**. This new iteration moves away from the resource-heavy Electron framework to **Tauri (Rust)** to provide an even more lightweight, responsive, and mobile-friendly interface. \[[1](https://www.reddit.com/r/selfhosted/comments/1h55m2l/shoutout%5Fto%5Ffeishin%5Fa%5Fnavidromejellyfin%5Fplayer/), [2](https://www.reddit.com/r/navidrome/comments/1gutkqx/feishing%5Fmusic%5Fplayer%5F0120%5Freleased%5Fand%5Fnew/)]

Are you looking for **installation instructions** for a specific operating system, or do you need help **connecting Feishin to your media server**?

- [link](https://github.com/jeffvli/feishin)\
  jeffvli/feishin: A modern self-hosted music player. - GitHub\
  Desktop (recommended) Download the latest desktop client. The desktop client is the recommended way to use Feishin. It supports bo...\
  GitHub
- [link](https://www.reddit.com/r/jellyfin/comments/1pysej4/you%5Fshould%5Ftry%5Ffeishin/)\
  You should try Feishin! : r/jellyfin - Reddit\
  I recently tried this new Jellyfin music client, and its been awesome! The UI Looks clean, there is a DJ mix option, anything in t...\
  Reddit
- [link](https://www.reddit.com/r/selfhosted/comments/1h55m2l/shoutout%5Fto%5Ffeishin%5Fa%5Fnavidromejellyfin%5Fplayer/)\
  Shoutout to Feishin - a Navidrome/Jellyfin player : r/selfhosted - Reddit\
  Isn't it in maintenance mode now while the dev moves onto something else? ... Feishin was, for me, the perfect music player for de...\
  Reddit

Show all

You said: install on ubuntu. flatpak.

May 20, 2026

Run the following commands in your terminal to install Feishin on Ubuntu using Flatpak:

1\. Enable Flatpak (If not already done)

bash

```
sudo apt update && sudo apt install flatpak -y
```

Use code with caution.

2\. Add the Flathub Repository

bash

```
flatpak remote-add --if-not-exists flathub https://flathub.org
```

Use code with caution.

3\. Restart Your System

bash

```
sudo reboot
```

Use code with caution.

_(Note: This ensures Ubuntu recognizes Flatpak application paths)._

4\. Install Feishin

bash

```
flatpak install flathub org.jeffvli.feishin -y
```

Use code with caution.

5\. Run the Application

bash

```
flatpak run org.jeffvli.feishin
```

Use code with caution.

_(Alternatively, look for the Feishin icon in your Ubuntu Applications menu)._

***

Would you like help **setting up your media server connection URL** inside the app, or do you need assistance troubleshooting any **audio backend permissions**?

You said: why does it only support jellyfin, navidrome, and opensubsonic, wo looking at my music in fs

May 20, 2026

Feishin is strictly designed as a **server-dependent streaming client**, meaning it intentionally lacks a built-in local file scanner or database engine. It does not look at your local file system because it acts purely as a front-end interface, leaving all the heavy lifting of library management to your backend server. \[[1](https://www.reddit.com/r/selfhosted/comments/1q3nlnn/the%5Ficing%5Fon%5Fthe%5Fcake%5Fof%5Fselfhosting%5Ffor%5Fme%5Fwas/), [2](https://github.com/jeffvli/feishin), [3](https://www.makeuseof.com/i-ditched-spotify-for-self-hosted-music-server-never-looked-back/)]

The application architecture relies entirely on the server for several key reasons:

1\. No Internal Database

Traditional music players (like VLC, Rhythmbox, or Foobar2000) have an internal database engine that crawls your local storage, reads ID3 tags, and builds an index. Feishin **does not have this indexing engine**. It relies completely on the database and APIs of Jellyfin, Navidrome, or OpenSubsonic to tell it what music exists. \[[1](https://github.com/jeffvli/feishin), [2](https://www.makeuseof.com/i-ditched-spotify-for-self-hosted-music-server-never-looked-back/)]

2\. Multi-Device Synchronization

Feishin is built for the self-hosting philosophy: **store once, access anywhere**. If Feishin read your local files directly, your playlists, play counts, and "favorite" markers would only exist on that specific Ubuntu machine. By offloading this to a server, your listening history and playlists instantly sync across your laptop, desktop, web browser, and phone. \[[1](https://news.ycombinator.com/item?id=45645510), [2](https://www.makeuseof.com/i-ditched-spotify-for-self-hosted-music-server-never-looked-back/), [3](https://www.reddit.com/r/selfhosted/comments/1q3nlnn/the%5Ficing%5Fon%5Fthe%5Fcake%5Fof%5Fselfhosting%5Ffor%5Fme%5Fwas/)]

3\. Server-Side Transcoding

If you have high-end FLAC files but need to stream over a weak network connection, Feishin doesn't process the audio downgrade itself. It asks the backend server to transcode the audio on-the-fly into a smaller format (like MP3 or OPUS) before sending it to the app.

How to use your local music with Feishin

To listen to the music files on your Ubuntu machine, you must point a lightweight server at your local music folder. \[[1](https://www.howtogeek.com/i-replaced-spotify-premium-with-jellyfin-and-this-app-sealed-the-deal/)]

The easiest way to do this on Ubuntu is to install **Navidrome** alongside Feishin:

1. Install Navidrome (which acts as the indexer for your local folders).
2. Point Navidrome to your Ubuntu music directory (e.g., `/home/username/Music`).
3. Connect Feishin to `http://localhost:4533`. \[[1](https://github.com/jeffvli/feishin/issues/655)]

Would you like a quick guide on **how to set up Navidrome on Ubuntu** so Feishin can see your local files?

- [link](https://www.reddit.com/r/selfhosted/comments/1q3nlnn/the%5Ficing%5Fon%5Fthe%5Fcake%5Fof%5Fselfhosting%5Ffor%5Fme%5Fwas/)\
  The icing on the cake of selfhosting for me was music, and I must say ...\
  \* It is designed to connect to your self hosted server as a media provider. \* Supports a lot of self hosted protocols. \* Is an off...\
  Reddit
- [link](https://github.com/jeffvli/feishin)\
  Feishin - A modern self-hosted music player. - GitHub\
  What music servers does Feishin support? Feishin supports any music server that implements a Navidrome, Jellyfin, or OpenSubsonic ...\
  GitHub
- [link](https://news.ycombinator.com/item?id=45645510)\
  What I Self Host | Hacker News\
  Most people have many devices: phones, tablets, laptops, etc... so this makes that stuff accessible from anywhere. And if you lose...\
  Hacker News

Show all

You said: what do you think of its design

May 20, 2026

Feishin’s design is one of its strongest selling points, especially for users migrating away from proprietary streaming platforms.

Here is an analysis of its user interface and overall design philosophy:

The Positives: What Makes It Great

- **Familiar Spotify-Like Layout**: The design features a standard left-hand sidebar navigation, central content grid, and a bottom playback bar. This layout eliminates the learning curve entirely.
- **Modern Aesthetic**: It uses crisp typography, sleek hover animations, and dynamic accent colors based on the playing album art. It looks like a premium, modern SaaS product, not an old-school local media player.
- **Excellent Visual Polish**: The inclusion of full-width artist banner images, top track rankings, and clean discography grids makes exploring a personal music library feel alive and curated.
- **Theme Support**: It natively integrates popular community color palettes like Catppuccin, Nord, and Dracula, allowing users to perfectly match their Linux desktop environments.
- **Responsive Layouts**: The UI handles window resizing gracefully, and the web-deployment version scales incredibly well across different screen sizes.

The Trade-offs: Where It Falls Short

- **Resource Heavy (Electron-based)**: Because it is built on Electron, the visual beauty comes at the cost of high RAM and CPU usage. It can feel heavy compared to native Linux music players.
- **Information Density**: The layout prioritizes large, beautiful artwork and whitespace. For power users with massive libraries who prefer dense spreadsheets or compact list views, Feishin can feel like it requires too much scrolling.
- **No Native Title Bars**: On Linux, it uses custom client-side decorations (CSD). While it looks cohesive, it sometimes doesn't blend perfectly with native Ubuntu window borders or system window managers.

The Verdict

Feishin bridges the gap between self-hosted privacy and commercial-grade user experience. It proves that managing a private music collection doesn't mean you have to settle for an interface that looks like it was built in 2005.

Would you like to know how to **change the theme** or **customize the sidebar** once you open the app?

You said: i mean what do you think of its design of not supporting fs

May 20, 2026

From a software architecture standpoint, the design choice to completely omit local file system (FS) support is **brilliant in its focus, but inherently polarizing for users.**

Here is a breakdown of why this design philosophy is both a masterclass in modern app development and a frustrating hurdle for traditional desktop users:

Why it is a Smart Design Choice

- **Extreme Scope Control:** By refusing to build a local file scanner, the developer avoided the hardest parts of making a music app: writing metadata parsers, handling corrupt ID3 tags, and managing a local database. This allowed them to focus 100% of their energy on making the user interface beautiful and fast.
- **Pure Separation of Concerns:** In modern software design, a client should just be a "dumb terminal" that renders data. Feishin embraces this perfectly. The server handles data storage and processing; Feishin handles pixels and audio output.
- **Immunity to Platform Quirks:** Reading files directly on Windows, macOS, and Linux requires handling three completely different file permission systems and path structures. By forcing everything through a web API (Subsonic/Jellyfin), Feishin works identically across all operating systems without platform-specific bugs.

Why it is a Flawed Design Choice (The User Friction)

- **High Barrier to Entry:** For a user who just wants to play a folder of MP3s on their laptop, Feishin forces them to learn docker, network ports, or server configuration. It turns a 1-click task into a multi-step weekend project.
- **Redundant Overhead for Local Playback:** If your music is already on your Ubuntu hard drive, running Feishin means your computer has to read the file, send it via a local network loop to a background server, and stream it back to the app. It is highly inefficient for offline, single-device use.

The Verdict

The design is **unapologetically opinionated**. It wasn't built to compete with local players like VLC or Foobar2000. It was built for the "Self-Hosted" community—people who already treat their home computer like a mini-cloud. For that specific audience, the design is perfect; for traditional desktop users, it feels like an artificial limitation.

Do you plan on **setting up a local server** to make your Ubuntu music work with Feishin, or does this server-only requirement make you want to **look for a different player**?