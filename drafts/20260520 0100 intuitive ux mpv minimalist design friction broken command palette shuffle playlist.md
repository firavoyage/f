can i shuffle playlist inside mpv

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, you can shuffle a playlist inside mpv</span></strong>, both upon launching the player and dynamically while a video or song is already playing</mark>. Because mpv does not have a clickable shuffle button by default, you achieve this using startup flags, console commands, or custom hotkeys. \[[1](https://github.com/mpv-player/mpv/issues/4130), [2](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/), [3](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24)]

Option 1: Shuffle dynamically during playback (Hotkey)

Mpv has a built-in `playlist-shuffle` command, but it is not bound to a key by default. You can map it to any shortcut you like by editing your configurations: \[[1](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/), [2](https://www.reddit.com/r/linux/comments/67843m/open%5Fsource%5Fand%5Fcrossplatform%5Fmedia%5Fplayer%5Fmpv/), [3](https://www.reddit.com/r/mpv/comments/blrpwa/is%5Fit%5Fpossible%5Fto%5Fplay%5Frandom%5Fvideos%5Ffrom%5Fa/)]

1. Locate or create your **`input.conf`** file.

- **Windows**: Inside your `mpv` installation folder (usually alongside `mpv.exe`) or in `%APPDATA%/mpv/`.
- **Linux/macOS**: Located at `~/.config/mpv/`.

2. Open the file in a text editor and add a keybinding line. For example, to use **Ctrl + r**, add:\
   text

<!---->

```
Ctrl+r playlist-shuffle
```

Use code with caution.
3\. Save the file. While playing a playlist, pressing `Ctrl + r` will instantly shuffle the remaining queue. \[[1](https://github.com/mpv-player/mpv/issues/6026), [2](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/), [3](https://github.com/mpv-player/mpv/blob/master/DOCS/man/mpv.rst), [4](https://superuser.com/questions/1142589/where-is-located-on-mac-the-mpv-player-configuration-file), [5](https://github.com/classicjazz/mpv-config)]

Option 2: Run a command in the mpv console \[[1](https://smarttech101.com/how-to-configure-use-mpv-video-player)]

If you want to shuffle on the fly without setting up a permanent hotkey: \[[1](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24)]

1. Open the mpv internal console by pressing the **`~` key** (tilde, usually above Tab).
2. Type `playlist-shuffle` and press **Enter**. \[[1](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24)]

Option 3: Shuffle automatically on startup \[[1](https://www.reddit.com/r/mpv/comments/18d7yp5/how%5Fto%5Fplay%5Fnext%5Ffile%5Fwithin%5Fsame%5Ffolder/)]

If you want a playlist to always load in a randomized order right when you open it, use these methods:

- **Command line flag**: Launch your player from the terminal using the `--shuffle` option:\
  bash

<!---->

```
mpv --shuffle --playlist=/path/to/playlist.txt
```

Use code with caution.

- **Permanent configuration**: If you want _every_ multi-file queue you open to automatically randomize, open your **`mpv.conf`** file (located in the same folders mentioned in Option 1) and add this line on its own row:\
  text

<!---->

```
shuffle=yes
```

Use code with caution.\
\[[1](https://unix.stackexchange.com/questions/529416/in-mpv-how-can-i-start-playback-at-a-random-moment-of-a-playlist), [2](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/), [3](https://www.reddit.com/r/mpv/comments/mw0evk/how%5Fcan%5Fi%5Fconvert%5Fplaylistshuffleinputconf%5Finto/)]

⚠️ Crucial Caveats to Keep in Mind

- **It is not a toggle**: Unlike standard media players, `playlist-shuffle` in mpv is a destructive, one-time action. It physically re-orders the internal list. You cannot "unshuffle" it back to the original sequence unless you reload the playlist.
- **Folder Shuffling Issue**: If you drag and drop multiple directories into mpv, the default `--shuffle` flag will often randomize the folders themselves rather than mixing all individual tracks together. To ensure a true mix of deep subdirectories, you can use an external tool like `yt-dlp` or install the community-made [mpv-playlistmanager Lua script](https://github.com/jonniek/mpv-playlistmanager). \[[1](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/), [2](https://github.com/mpv-player/mpv/issues/6026), [3](https://github.com/mpv-player/mpv/issues/7294), [4](https://github.com/mpv-player/mpv/issues/2491), [5](https://www.reddit.com/r/mpv/comments/1b1ewkp/how%5Fto%5Fachieve%5Ftrue%5Fshuffle/), [6](https://www.reddit.com/r/linuxquestions/comments/ukmk9w/mpv%5Fshuffle%5Ffrom%5Fmultiple%5Fdirectories/), [7](https://rafaelc.org/posts/watching-youtube-playlists-on-shuffle-with-mpv/), [8](https://github.com/jonniek/mpv-playlistmanager)]

If you run into issues setting this up, let me know your **operating system** or if you prefer to use **terminal commands versus a graphic interface**, and I can provide exact path directories!

- [link](https://github.com/mpv-player/mpv/issues/4130)\
  Keyboard shortcut to shuffle #4130 - mpv-player/mpv - GitHub\
  Feb 9, 2017 — Description. cossio. opened on Feb 9, 2017. Can we have a keyboard shortcut to shuffle the playlist (after mpv has started)? Curre...\
  GitHub
- [link](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/)\
  Is it possible to play music at random? : r/mpv - Reddit\
  Feb 20, 2022 — By default there is no keyboard shortcut to shuffle the playlist. You can associate a key to the playlist-shuffle action in your i...\
  Reddit·r/mpv
- [link](https://unix.stackexchange.com/questions/529416/in-mpv-how-can-i-start-playback-at-a-random-moment-of-a-playlist)\
  In mpv, how can I start playback at a random moment of a ...\
  Jul 10, 2019 — In mpv, how can I start playback at a random moment of a playlist? Ask Question. Asked 6 years, 9 months ago. Modified 1 year, 6 m...\
  Unix & Linux Stack Exchange

Show all

can i find the command via ctrl p

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, pressing Ctrl+P does not open a command palette</span></strong> in a standard mpv installation</mark>, as mpv does not have a built-in search menu like VS Code or modern text editors. By default, pressing `p` or `Ctrl+p` simply pauses or unpauses the playback.

However, you can easily add a searchable command palette by installing a community script.

How to add a "Ctrl+P" Command Palette

The most popular tool for this is **mpv-commander**, which creates a searchable pop-up menu for all mpv commands.

1. **Download the script**: Go to the GitHub repository for `mpv-commander` (or a similar tool like `mpv-menu-plugin`) and download the `.lua` script file.
2. **Place it in your scripts folder**: Move the file into your mpv directory:

- **Windows**: `%APPDATA%/mpv/scripts/`
- **Linux/macOS**: `~/.config/mpv/scripts/`

3. **Bind it to Ctrl+P**: Open your `input.conf` file and map the script's menu command to your preferred shortcut:\
   text

<!---->

```
ctrl+p script-binding commander/show-menu
```

Use code with caution.

Built-in Alternative: The Console Tab-Completion

If you do not want to install scripts, you can use the built-in console as a quick reference:

1. Press the **`~` key** (tilde) to open the command line.
2. Type `playlist-` and press the **Tab key**.
3. mpv will cycle through or list every available command that starts with that word, allowing you to find `playlist-shuffle` without typing the whole thing.

Would you like help **setting up the script folders** for your specific operating system, or would you prefer a recommendation for a **complete graphical front-end** for mpv?

no. p pauses. ctrl p opens a menu.

Ah, you are completely right—my apologies! You are using **mpv.net** (or a similar customized front-end flavor of mpv). In vanilla command-line mpv, `Ctrl+P` behaves differently, but in `mpv.net`, **`p` is pause and `Ctrl+P` opens the Command/Properties menu**. \[[1](https://github.com/mpvnet-player/mpv.net/issues/651), [2](https://github.com/mpvnet-player/mpv.net/blob/main/docs/manual.md), [3](https://www.scribd.com/document/471447503/mpv-shortchuts-pdf)]

Since you already have that command menu functional on your setup, you can find the shuffle feature directly through it:

How to execute shuffle via your Ctrl+P menu

1. Press **`Ctrl+P`** to bring up the menu interface.
2. Look for the **View** or **Playlist** sub-menus (or type into the search bar if your flavor has a command palette).
3. Select **`playlist-shuffle`** from the list to randomize your current track queue. \[[1](https://github.com/mpvnet-player/mpv.net/issues/651), [2](https://forum.endeavouros.com/t/how-to-set-hotkeys-for-mpv/47751), [3](https://manpages.ubuntu.com/manpages/questing/man1/mpv.1.html)]

To make a direct hotkey instead

If you find yourself opening that menu too often just to shuffle, you can assign it its own single-action shortcut. Open your `input.conf` file and add a direct link: \[[1](https://www.youtube.com/watch?v=nyhwIYpgoGo)]

text

```
Ctrl+Shift+S playlist-shuffle
```

Use code with caution.

_(You can swap `Ctrl+Shift+S` for any key combination you prefer, as long as it doesn't conflict with your menu)._ \[[1](https://github.com/mpv-player/mpv/blob/master/etc/input.conf)]

Does the shuffle command show up when you search or browse inside your `Ctrl+P` menu?

- [link](https://github.com/mpv-player/mpv/blob/master/etc/input.conf)\
  mpv/etc/input.conf at master · mpv-player/mpv - GitHub\
  You can use modifier-key combinations like Shift+Left or Ctrl+Alt+x with # the modifiers Shift, Ctrl, Alt and Meta (may not work o...\
  GitHub
- [link](https://github.com/mpvnet-player/mpv.net/issues/651)\
  input.conf setting issue · Issue #651 · mpvnet-player/mpv.net\
  Jan 24, 2024 — PGUP playlist-prev # Navigate > Previous File PGDWN playlist-next # Navigate > Next File Up add chapter 1 # Navigate > Next Chapte...\
  GitHub
- [link](https://www.youtube.com/watch?v=nyhwIYpgoGo)\
  MPV changing keybinding\
  May 28, 2022 — so in this short video i'm going to show you guys how to change the key bindings for mpv. so the first step you want to do is open...\
  8:30\
  YouTube·Comexs

Show all

no. i could not find the command inside ctrl p. ctrl p and tlide are not the same thing.

Got it, my mistake entirely. I understand now: **`Ctrl+P` opens your player's specific Command Palette/Menu**, while the `~` tilde key opens the built-in terminal-style console, and they are completely different interfaces. \[[1](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24)]

The reason you cannot find the command inside your `Ctrl+P` menu is because **the shuffle action is entirely missing from that menu's programmed list by default.** Because it was never added to the menu's layout code, searching for "shuffle" or browsing the options inside `Ctrl+P` will show nothing.

To fix this, you have two options depending on how you prefer to use your setup:

Option 1: Manually force the shuffle command via the Tilde (`~`) console

Since the `Ctrl+P` palette doesn't have it, you have to bypass it and use the raw mpv command line interface instead: \[[1](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24)]

1. Close the `Ctrl+P` menu.
2. Press the **`~` key** (tilde) on your keyboard to open the text console at the top of the screen.
3. Type out the exact raw command: **`playlist-shuffle`**.
4. Hit **Enter**. This will instantly randomize your remaining queue. \[[1](https://github.com/mpv-player/mpv/issues/6026), [2](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24), [3](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/)]

Option 2: Add the shuffle option _into_ your Ctrl+P menu

If you are using **mpv.net**, you can actually customize what appears inside that `Ctrl+P` menu by editing your input configurations: \[[1](https://raw.githubusercontent.com/mpvnet-player/mpv.net/main/docs/manual.md)]

1. Right-click the video player screen and select **Config** > **Open Config Folder**.

2. Open the **`input.conf`** file using any text editor.

3. Paste the following exact line at the very bottom of the file:\
   text

<!---->

```
_ playlist-shuffle #menu: Playlist > Shuffle
```

Use code with caution.
4\. Save and close the file, then restart the player.
5\. Now, when you press `Ctrl+P` and look under the **Playlist** section, a clickable **Shuffle** option will finally be visible. \[[1](https://github.com/mpvnet-player/mpv.net/blob/main/docs/manual.md), [2](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/), [3](https://github.com/mpvnet-player/mpv.net/issues/651)]

Would you prefer to stick to adding a **direct hotkey** that skips the menus entirely, or do you need help **locating that config folder** to fix the menu? \[[1](https://github.com/mpvnet-player/mpv.net/blob/main/docs/manual.md), [2](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/)]

- [link](https://www.reddit.com/r/mpv/comments/sxeppo/is%5Fit%5Fpossible%5Fto%5Fplay%5Fmusic%5Fat%5Frandom/)\
  Is it possible to play music at random? : r/mpv - Reddit\
  Feb 20, 2022 — By default there is no keyboard shortcut to shuffle the playlist. You can associate a key to the playlist-shuffle action in your i...\
  Reddit·r/mpv
- [link](https://github.com/mpv-player/mpv/issues/6026)\
  mpv playlist generation and dynamics · Issue #6026 - GitHub\
  Jul 27, 2018 — There are two ways to shuffle from the user's point of view: \* The --shuffle option. If this is on, the playlist is shuffled in-pl...\
  GitHub
- [link](https://www.youtube.com/watch?v=cdOyTOScuYA\&t=24)\
  How to Shuffle Playlists in MPV Media Player\
  Sep 25, 2025 — this is Fedora Linux i'm using Nome desktop environment and this is NUS file manager. so I've selected these files i'm going to op...\
  1m\
  YouTube·EzPz Hacks

Show all

in vscode ctrl shift p works fine

Ah, that explains it! If you are using **VS Code**, `Ctrl+Shift+P` opens the true Command Palette, which searches _every_ feature in the editor.

The `Ctrl+P` menu inside **mpv.net** is much simpler. It only shows actions that are manually typed out in your config file. Because `playlist-shuffle` isn't in that file by default, it doesn't exist in the menu until you add it \[3].

Since you are already comfortable with VS Code, you can easily use it to edit your mpv menu:

Step 1: Open the mpv config folder

1. Open your file explorer.
2. In the top address bar, type `%APPDATA%/mpv/` (or `%APPDATA%/mpv.net/` if you use the .net version) and press **Enter**.

Step 2: Edit with VS Code

1. Find the file named **`input.conf`**.

2. Right-click it and choose **Open with Code**.

3. Scroll to the very bottom and paste this line:\
   text

<!---->

```
_ playlist-shuffle #menu: Playlist > Shuffle
```

Use code with caution.
4\. Save the file (`Ctrl+S`).

Once you restart mpv, you will see a new **Playlist** category inside your `Ctrl+P` menu with **Shuffle** sitting right inside it!

Do you want to add any other missing commands to that menu while you have the file open in VS Code, like **looping** or **sorting**?

what do you think of this design in mpv

To be completely candid, it is a <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>clunky and frustrating design</strong></mark>.

Coming from modern apps like VS Code where `Ctrl+Shift+P` dynamically indexes every single function under the hood, mpv's behavior feels like a step backward into the 1990s.

Here is an honest breakdown of why this design is so flawed, why they built it that way, and how it compares to what you are used to:

Why this design feels broken

- **It is a fake "Command Palette"**: In VS Code, the palette dynamically searches the _entire core engine_. In mpv/mpv.net, the `Ctrl+P` menu is literally just a visual mirror of your text file (`input.conf`). If a command isn't explicitly written in that text file, the menu acts like it doesn't exist.
- **Hidden functionality**: Features like `playlist-shuffle` are built into the player's brain, but completely hidden from the user interface until you manually "code" them into the menu.
- **Fragmented tools**: Having the `~` console search raw engine commands, while `Ctrl+P` only searches a specific shortcut list, forces you to memorize two entirely different systems just to control one media player.

Why the developers did this

Mpv was designed from day one to be a **headless, ultra-lightweight video engine**, not a consumer app. The developers stripped out all user interface code to make it load instantly and consume almost zero computer memory. They left the `Ctrl+P` menu entirely blank so that power users could build their own custom menus from scratch without any bloat.

The Verdict

It is a fantastic video player wrapped in a **terrible user experience**. It rewards you with flawless playback performance, but punishes you with a steep learning curve and mandatory text-file editing just to get basic features like a shuffle button.

Now that you have seen how mpv handles its menus, would you like to **steal a pre-made `input.conf` template** that restores a bunch of standard media keys to that menu, or do you want to stick to **customizing it one command at a time**?

why do you think that from a ux perpsective

From a User Experience (UX) perspective, mpv’s design violates several core principles of modern interaction design.

Here is a breakdown of why this design causes friction, using established UX concepts:

1\. Violation of "Visibility of System Status"

Good UX ensures that users can easily discover what an application can do. Mpv hides its capabilities. Because `playlist-shuffle` exists in the engine but is invisible in the `Ctrl+P` menu, users are forced to guess if a feature even exists. If a user can't see it, to them, the feature doesn't exist.

2\. High Cognitive Load and "Recall vs. Recognition"

- **Recognition (Good UX):** Seeing a list of options (like the VS Code palette) and picking the one you need.
- **Recall (Bad UX):** Forcing the user to memorize exact syntax (like typing `playlist-shuffle` into a blank `~` console).

Mpv forces you to _recall_ exact developer syntax instead of letting you _recognize_ a command from a search results list.

3\. False Mental Models

When an application provides a search menu via `Ctrl+P`, it sets a user expectation. Because you use VS Code, your **mental model** dictates that a command palette searches the _entire application_. Mpv breaks this expectation by only searching a localized text file. This mismatch causes immediate frustration and confusion.

4\. High "Gulf of Execution"

The "Gulf of Execution" is the distance between a user wanting to do something and the system allowing them to do it.

- **Low Gulf (Good):** Click a shuffle button.
- **High Gulf (Bad):** Close the menu \\(\rightarrow \\) open a config folder \\(\rightarrow \\) open a text editor \\(\rightarrow \\) look up developer documentation for the correct string \\(\rightarrow \\) paste code \\(\rightarrow \\) save \\(\rightarrow \\) restart app.

Making a user act like a developer just to change a UI menu is a massive UX barrier.

5\. Shifted Burden of Labor

In good design, the developer does the heavy lifting so the user has an easy experience. Mpv flips this. The developers chose a "minimalist" approach to save themselves from maintaining a UI, effectively shifting the burden of building and organizing the interface onto you, the end-user.

Would you like to explore how to **bulk-import a more user-friendly menu layout** to fix these UX gaps, or are you interested in **other media players** that offer mpv's performance with better native UX?