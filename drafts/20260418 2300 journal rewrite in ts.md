<html><head></head><body><div><section dir="auto"><div><div><div><div dir="auto"><div><div><div>what's the shell command it's using.

i will test it in my shell now as a poc.

<pre><code>py
# window.py
import subprocess
import logging
from pathlib import Path
from typing import Optional
import os
from models import WindowState

logger = logging.getLogger("journal.window")


class x11_window_observer:
    """
    Fetch focused window information directly via X11 tools:
    - xdotool (to get focused window id and name)
    - xprop (to get WM_CLASS)

    Uses the first WM_CLASS entry (lowercase, instance name),
    matching typical shell parsing like:
        ghostty,com.mitchellh.ghostty
        code,Code
    """

    def __init__(self):
        pass

    def _run(self, cmd: list[str], timeout: float = 1.0) -&gt; Optional[str]:
        try:
            proc = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                timeout=timeout,
                check=False,
            )
            out = proc.stdout.strip()
            return out or None
        except FileNotFoundError:
            logger.debug("Tool not found: %s", cmd[0])
            return None
        except subprocess.TimeoutExpired:
            logger.debug("Command timed out: %s", " ".join(cmd))
            return None
        except Exception as e:
            logger.debug("Error running command %s: %s", " ".join(cmd), e)
            return None

    def get_active_window(self) -&gt; Optional[WindowState]:
        if not os.getenv("DISPLAY"):
            logger.debug("No DISPLAY environment variable set.")
            return None

        wid = self._run(["xdotool", "getwindowfocus"])
        print(wid)
        if not wid:
            logger.debug("No focused window id returned by xdotool.")
            return None

        title = self._run(["xdotool", "getwindowname", wid]) or ""
        title = title.strip()

        wm_class_raw = self._run(["xprop", "-id", wid, "WM_CLASS"])
        app = ""

        if wm_class_raw and "=" in wm_class_raw:
            try:
                # Example:
                # WM_CLASS(STRING) = "ghostty", "com.mitchellh.ghostty"
                rhs = wm_class_raw.split("=", 1)[1]
                parts = [
                    p.strip().strip('"')
                    for p in rhs.split(",")
                    if p.strip()
                ]
                if parts:
                    # Use first entry (instance name), like:
                    # ghostty (not com.mitchellh.ghostty)
                    # code (not Code)
                    app = parts[0].lower()
            except Exception as e:
                logger.debug("Error parsing WM_CLASS: %s", e)

        if not app and not title:
            logger.debug("No useful window information.")
            return None

        print(f"Focused Window - ID: {wid}, Title: {title}, Class: {app}")

        return WindowState(app=app, title=title)

class FileWindowObserver:
    """
    Read snapshots written by the GNOME extension at a JSON path
    (default: ~/.cache/journal-windows.json). The extension overwrites
    the file atomically, so reading is safe.
    """

    def __init__(self, path: Path):
        self.path = path

    def get_active_window(self) -&gt; Optional[WindowState]:
        """
        Return the focused window as WindowState or None.
        Missing file or parse error -&gt; None.
        """
        try:
            text = self.path.read_text(encoding="utf-8")
        except FileNotFoundError:
            logger.debug("snapshot file not found: %s", self.path)
            return None
        except Exception as e:
            logger.debug("error reading snapshot file %s: %s", self.path, e)
            return None

        try:
            data = json.loads(text)
        except Exception as e:
            logger.debug("invalid JSON in snapshot file %s: %s", self.path, e)
            return None

        focused = data.get("focused")
        if not focused:
            logger.debug("snapshot has no 'focused' object")
            return None

        app = (focused.get("class") or "").strip()
        title = (focused.get("title") or "").strip()

        if not app and not title:
            logger.debug("focused window has empty class/title")
            return None

        return WindowState(app=app, title=title)


# If this script is run directly, test it
if __name__ == "__main__":
    observer = x11_window_observer()
    observer.get_active_window()</code></pre></div></div></div></div></div><div></div></div></div></section><section dir="auto"><div><div><div><div dir="auto"><div><div><p>It isn’t doing anything hidden or special. It’s just running the same commands you would type by hand, one after the other.</p>
<p>In your shell, it’s effectively this:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div>xdotool getwindowfocus</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>That gives you a window ID — let’s call it <code>$WID</code>. Then:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div>xdotool getwindowname <span>"</span><span>$WID</span><span>"</span></div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>And:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div>xprop <span>-id</span> <span>"</span><span>$WID</span><span>"</span> WM_CLASS</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>If you want to mirror the whole flow as a quick proof:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div><span>WID</span><span>=</span>$(xdotool getwindowfocus)<br><span>echo</span> <span>"ID: </span><span>$WID</span><span>"</span><br><br>xdotool getwindowname <span>"</span><span>$WID</span><span>"</span><br><br>xprop <span>-id</span> <span>"</span><span>$WID</span><span>"</span> WM_CLASS</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>You’ll see output like:</p>
<pre><div><div><div><div><div><div><div><div></div><div><div><div><div dir="ltr"><div><div>WM_CLASS(STRING) = "code", "Code"</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>And your Python simply takes the first value (<code>code</code>), lowercases it, and treats that as the app name.</p>
<p>Nothing more than a thin wrapper around those three calls.</p></div></div></div></div><div></div></div></div></section><section dir="auto"><div><div><div><div dir="auto"><div><div><div>is there a command to get the first string easily wo parsing</div></div></div></div></div><div></div></div></div></section><section dir="auto"><div><div><div><div dir="auto" tabindex="0"><div><div><p>There isn’t a built-in flag in <code>xprop</code> that says “just give me the first string.” It always prints the full property unless you define a custom format. <span></span></p>
<p>So in practice, people still trim it in the shell—but you can make it very small and clean.</p>
<p>The simplest forms people settle into are:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div>xprop <span>-id</span> <span>"</span><span>$WID</span><span>"</span> WM_CLASS | <span>awk</span> <span>-F</span><span>'"'</span> <span>'{print $2}'</span></div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>That gives you the first string directly (the “instance”).<br>
This pattern is common because <code>WM_CLASS</code> is always quoted pairs, so splitting on <code>"</code> is reliable. <span></span></p>
<p>If you want something even tighter, almost “no parsing” feeling:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div>xprop <span>-id</span> <span>"</span><span>$WID</span><span>"</span> WM_CLASS | <span>cut</span> <span>-d</span> <span>'"'</span> <span>-f2</span></div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>Same idea, just simpler.</p>
<p>If you’re open to avoiding <code>xprop</code> entirely, there <em>is</em> a cleaner command:</p>
<pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div>xdotool getwindowfocus getwindowclassname</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre>
<p>That already returns a single class string, no parsing needed at all.</p>
<p>So the quiet truth is:</p>
<ul>
<li>
with <code>xprop</code> → you always trim a little
</li>
<li>
with <code>xdotool</code> → you can skip parsing entirely
</li>
</ul>
<p>And that difference is why many setups drift toward <code>xdotool</code> for this exact use case.</p>
</div></div></div></div><div></div></div></div></section></div><div></div></body></html>

---

<html><head></head><body><div><section dir="auto"><div><div><div><div dir="auto"><div><div><div>follow these:

- use:
  - ubuntu
  - zsh
  - pnpm
  - es module
  - typescript
  - parceljs
  - dont reinvent wheels, prefer modern proven tech
- naming:
  - snake case
  - verb noun for actions, predicate for bools
- style:
  - functional programming
  - modular and cohesive
  - object params
  - async if needed
  - always function statement, arrow function only as props
  - always type, never interface
  - no <code>undefined</code> or <code>null</code>
  - no <code>typeof</code> or <code>instanceof</code>.
  - no <code>try catch</code> unless external libraries need
  - no <code>throw</code>
- notes:
  - give me full working code of all changed files.

write only one file, journal.ts.

<pre><code>import config from './config.json';</code></pre>

<pre><code>{
  "log_interval": 60,
  "data_directory": "$HOME/Documents/f/journal/data/journal.log",
  "screenshot_interval": 300,
  "screenshot_directory": "$HOME/Pictures/journal/%Y-%m-%d %H-%M-%S.png",
  "screenshots_enabled": true
}</code></pre>

it runs forever.

for log interval, it gets the active window title and write a line to the log. if either the app (e.g. code) or the title is empty, dont write.

if screenshot enabled, for screenshot interval, it runs the screenshot command.

everything could fail or timeout (give each command 1 sec at most). catch them. make sure the program continues.

make <code>~/Pictures/journal</code> exist

get active window title

<pre><code>~ % WID=$(xdotool getwindowfocus)
echo "ID: $WID"

xdotool getwindowname "$WID"

xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ID: 58720260
WID=$(xdotool getwindowfocus)echo "ID: $WID"xdotool getwindowname "$WID"xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ghostty
 ~ % WID=$(xdotool getwindowfocus)
echo "ID: $WID"

xdotool getwindowname "$WID"

xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ID: 69206032
Branch · chat - Chromium
chromium
 ~ % WID=$(xdotool getwindowfocus)
echo "ID: $WID"

xdotool getwindowname "$WID"

xprop -id "$WID" WM_CLASS | awk -F'"' '{print $2}'
ID: 2097169
gnome-shell</code></pre>

screenshot

<pre><code>scrot "$HOME/Pictures/journal/%Y-%m-%d %H-%M-%S.png"</code></pre>

journal.log

<pre><code>2026-04-18 23:52:20+08:00 code readme.md - f (Workspace) - Visual Studio Code</code></pre>

dont hardcode the timezone.</div></div></div></div></div><div></div></div></div></section><section dir="auto"><div><div><div><div dir="auto"><div><div><pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div><span>import</span> { <span>exec</span> } <span>from</span> <span>'child_process'</span>;<br><span>import</span> { <span>promisify</span> } <span>from</span> <span>'util'</span>;<br><span>import</span> { <span>mkdirSync</span>, <span>appendFileSync</span> } <span>from</span> <span>'fs'</span>;<br><span>import</span> { <span>dirname</span> } <span>from</span> <span>'path'</span>;<br><span>import</span> <span>config</span> <span>from</span> <span>'./config.json'</span>;<br><br><span>type</span> <span>config_type</span> <span>=</span> {<br>  log_interval: <span>number</span>;<br>  data_directory: <span>string</span>;<br>  screenshot_interval: <span>number</span>;<br>  screenshot_directory: <span>string</span>;<br>  screenshots_enabled: <span>boolean</span>;<br>};<br><br><span>const</span> <span>exec_async</span> <span>=</span> <span>promisify</span>(<span>exec</span>);<br><br><span>function</span> <span>expand_home</span>({ path }: { path: <span>string</span> }): <span>string</span> {<br>  <span>const</span> <span>home</span> <span>=</span> <span>process</span><span>.</span>env<span>.</span>HOME <span>||</span> <span>''</span>;<br>  <span>return</span> <span>path</span><span>.</span>replace(<span>'$HOME'</span>, <span>home</span>);<br>}<br><br><span>function</span> <span>ensure_directory</span>({ file_path }: { file_path: <span>string</span> }): <span>void</span> {<br>  <span>const</span> <span>dir</span> <span>=</span> <span>dirname</span>(<span>file_path</span>);<br>  <span>mkdirSync</span>(<span>dir</span>, { recursive: <span>true</span> });<br>}<br><br><span>async</span> <span>function</span> <span>run_command</span>({<br>  command,<br>}: {<br>  command: <span>string</span>;<br>}): <span>Promise</span>&lt;<span>string</span>&gt; {<br>  <span>try</span> {<br>    <span>const</span> { stdout } <span>=</span> <span>await</span> <span>exec_async</span>(<span>command</span>, { timeout: <span>1000</span> });<br>    <span>return</span> <span>stdout</span><span>.</span>trim();<br>  } <span>catch</span> {<br>    <span>return</span> <span>''</span>;<br>  }<br>}<br><br><span>async</span> <span>function</span> <span>get_active_window</span>(): <span>Promise</span>&lt;{<br>  app: <span>string</span>;<br>  title: <span>string</span>;<br>}&gt; {<br>  <span>const</span> <span>wid</span> <span>=</span> <span>await</span> <span>run_command</span>({<br>    command: <span>'xdotool getwindowfocus'</span>,<br>  });<br><br>  <span>if</span> (<span>wid</span> <span>===</span> <span>''</span>) {<br>    <span>return</span> { app: <span>''</span>, title: <span>''</span> };<br>  }<br><br>  <span>const</span> <span>title</span> <span>=</span> <span>await</span> <span>run_command</span>({<br>    command: <span>`xdotool getwindowname "</span>${<span>wid</span>}<span>"`</span>,<br>  });<br><br>  <span>const</span> <span>app</span> <span>=</span> <span>await</span> <span>run_command</span>({<br>    command: <span>`xprop -id "</span>${<span>wid</span>}<span>" WM_CLASS | awk -F'"' '{print $2}'`</span>,<br>  });<br><br>  <span>return</span> { app, title };<br>}<br><br><span>function</span> <span>format_timestamp</span>(): <span>string</span> {<br>  <span>const</span> <span>date</span> <span>=</span> <span>new</span> <span>Date</span>();<br>  <span>return</span> <span>date</span><span>.</span>toISOString();<br>}<br><br><span>function</span> <span>write_log</span>({<br>  file_path,<br>  line,<br>}: {<br>  file_path: <span>string</span>;<br>  line: <span>string</span>;<br>}): <span>void</span> {<br>  <span>try</span> {<br>    <span>appendFileSync</span>(<span>file_path</span>, <span>line</span> <span>+</span> <span>'</span><span>\n</span><span>'</span>);<br>  } <span>catch</span> {<br>    <span>return</span>;<br>  }<br>}<br><br><span>async</span> <span>function</span> <span>log_tick</span>({<br>  cfg,<br>}: {<br>  cfg: <span>config_type</span>;<br>}): <span>Promise</span>&lt;<span>void</span>&gt; {<br>  <span>const</span> { app, title } <span>=</span> <span>await</span> <span>get_active_window</span>();<br><br>  <span>if</span> (<span>app</span> <span>===</span> <span>''</span> <span>||</span> <span>title</span> <span>===</span> <span>''</span>) {<br>    <span>return</span>;<br>  }<br><br>  <span>const</span> <span>timestamp</span> <span>=</span> <span>format_timestamp</span>();<br>  <span>const</span> <span>line</span> <span>=</span> <span>`</span>${<span>timestamp</span>}<span> </span>${<span>app</span>}<span> </span>${<span>title</span>}<span>`</span>;<br><br>  <span>write_log</span>({<br>    file_path: <span>expand_home</span>({ path: <span>cfg</span><span>.</span>data_directory }),<br>    line,<br>  });<br>}<br><br><span>async</span> <span>function</span> <span>screenshot_tick</span>({<br>  cfg,<br>}: {<br>  cfg: <span>config_type</span>;<br>}): <span>Promise</span>&lt;<span>void</span>&gt; {<br>  <span>if</span> (<span>!</span><span>cfg</span><span>.</span>screenshots_enabled) {<br>    <span>return</span>;<br>  }<br><br>  <span>const</span> <span>path</span> <span>=</span> <span>expand_home</span>({ path: <span>cfg</span><span>.</span>screenshot_directory });<br><br>  <span>ensure_directory</span>({ file_path: <span>path</span> });<br><br>  <span>await</span> <span>run_command</span>({<br>    command: <span>`scrot "</span>${<span>path</span>}<span>"`</span>,<br>  });<br>}<br><br><span>function</span> <span>start_loop</span>({ cfg }: { cfg: <span>config_type</span> }): <span>void</span> {<br>  <span>const</span> <span>log_path</span> <span>=</span> <span>expand_home</span>({ path: <span>cfg</span><span>.</span>data_directory });<br>  <span>ensure_directory</span>({ file_path: <span>log_path</span> });<br><br>  <span>const</span> <span>screenshot_path</span> <span>=</span> <span>expand_home</span>({<br>    path: <span>cfg</span><span>.</span>screenshot_directory,<br>  });<br>  <span>ensure_directory</span>({ file_path: <span>screenshot_path</span> });<br><br>  <span>setInterval</span>(() =&gt; {<br>    <span>log_tick</span>({ cfg });<br>  }, <span>cfg</span><span>.</span>log_interval <span>*</span> <span>1000</span>);<br><br>  <span>setInterval</span>(() =&gt; {<br>    <span>screenshot_tick</span>({ cfg });<br>  }, <span>cfg</span><span>.</span>screenshot_interval <span>*</span> <span>1000</span>);<br>}<br><br><span>function</span> <span>main</span>(): <span>void</span> {<br>  <span>const</span> <span>cfg</span> <span>=</span> <span>config</span> <span>as</span> <span>config_type</span>;<br>  <span>start_loop</span>({ cfg });<br>}<br><br><span>main</span>();</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre></div></div></div></div><div></div></div></div></section><section dir="auto"><div><div><div><div dir="auto"><div><div><div>i want something like <code>2026-04-18 23:52:20+08:00</code> not <code>2026-04-18T16:57:01.797Z</code></div></div></div></div></div><div></div></div></div></section><section dir="auto"><div><div><div><div dir="auto" tabindex="0"><div><div><pre><div><div><div><div><div><div><div><div><div><div></div></div></div><div><div><div><div dir="ltr"><div><div><span>import</span> { <span>exec</span> } <span>from</span> <span>'child_process'</span>;<br><span>import</span> { <span>promisify</span> } <span>from</span> <span>'util'</span>;<br><span>import</span> { <span>mkdirSync</span>, <span>appendFileSync</span> } <span>from</span> <span>'fs'</span>;<br><span>import</span> { <span>dirname</span> } <span>from</span> <span>'path'</span>;<br><span>import</span> <span>config</span> <span>from</span> <span>'./config.json'</span>;<br><br><span>type</span> <span>config_type</span> <span>=</span> {<br>  log_interval: <span>number</span>;<br>  data_directory: <span>string</span>;<br>  screenshot_interval: <span>number</span>;<br>  screenshot_directory: <span>string</span>;<br>  screenshots_enabled: <span>boolean</span>;<br>};<br><br><span>const</span> <span>exec_async</span> <span>=</span> <span>promisify</span>(<span>exec</span>);<br><br><span>function</span> <span>expand_home</span>({ path }: { path: <span>string</span> }): <span>string</span> {<br>  <span>const</span> <span>home</span> <span>=</span> <span>process</span><span>.</span>env<span>.</span>HOME <span>||</span> <span>''</span>;<br>  <span>return</span> <span>path</span><span>.</span>replace(<span>'$HOME'</span>, <span>home</span>);<br>}<br><br><span>function</span> <span>ensure_directory</span>({ file_path }: { file_path: <span>string</span> }): <span>void</span> {<br>  <span>const</span> <span>dir</span> <span>=</span> <span>dirname</span>(<span>file_path</span>);<br>  <span>mkdirSync</span>(<span>dir</span>, { recursive: <span>true</span> });<br>}<br><br><span>async</span> <span>function</span> <span>run_command</span>({<br>  command,<br>}: {<br>  command: <span>string</span>;<br>}): <span>Promise</span>&lt;<span>string</span>&gt; {<br>  <span>try</span> {<br>    <span>const</span> { stdout } <span>=</span> <span>await</span> <span>exec_async</span>(<span>command</span>, { timeout: <span>1000</span> });<br>    <span>return</span> <span>stdout</span><span>.</span>trim();<br>  } <span>catch</span> {<br>    <span>return</span> <span>''</span>;<br>  }<br>}<br><br><span>async</span> <span>function</span> <span>get_active_window</span>(): <span>Promise</span>&lt;{<br>  app: <span>string</span>;<br>  title: <span>string</span>;<br>}&gt; {<br>  <span>const</span> <span>wid</span> <span>=</span> <span>await</span> <span>run_command</span>({<br>    command: <span>'xdotool getwindowfocus'</span>,<br>  });<br><br>  <span>if</span> (<span>wid</span> <span>===</span> <span>''</span>) {<br>    <span>return</span> { app: <span>''</span>, title: <span>''</span> };<br>  }<br><br>  <span>const</span> <span>title</span> <span>=</span> <span>await</span> <span>run_command</span>({<br>    command: <span>`xdotool getwindowname "</span>${<span>wid</span>}<span>"`</span>,<br>  });<br><br>  <span>const</span> <span>app</span> <span>=</span> <span>await</span> <span>run_command</span>({<br>    command: <span>`xprop -id "</span>${<span>wid</span>}<span>" WM_CLASS | awk -F'"' '{print $2}'`</span>,<br>  });<br><br>  <span>return</span> { app, title };<br>}<br><br><span>function</span> <span>pad</span>({ value }: { value: <span>number</span> }): <span>string</span> {<br>  <span>return</span> <span>value</span> <span>&lt;</span> <span>10</span> <span>?</span> <span>`0</span>${<span>value</span>}<span>`</span> <span>:</span> <span>`</span>${<span>value</span>}<span>`</span>;<br>}<br><br><span>function</span> <span>format_timestamp</span>(): <span>string</span> {<br>  <span>const</span> <span>d</span> <span>=</span> <span>new</span> <span>Date</span>();<br><br>  <span>const</span> <span>year</span> <span>=</span> <span>d</span><span>.</span>getFullYear();<br>  <span>const</span> <span>month</span> <span>=</span> <span>pad</span>({ value: <span>d</span><span>.</span>getMonth() <span>+</span> <span>1</span> });<br>  <span>const</span> <span>day</span> <span>=</span> <span>pad</span>({ value: <span>d</span><span>.</span>getDate() });<br><br>  <span>const</span> <span>hours</span> <span>=</span> <span>pad</span>({ value: <span>d</span><span>.</span>getHours() });<br>  <span>const</span> <span>minutes</span> <span>=</span> <span>pad</span>({ value: <span>d</span><span>.</span>getMinutes() });<br>  <span>const</span> <span>seconds</span> <span>=</span> <span>pad</span>({ value: <span>d</span><span>.</span>getSeconds() });<br><br>  <span>const</span> <span>offset_minutes_total</span> <span>=</span> <span>-</span><span>d</span><span>.</span>getTimezoneOffset();<br>  <span>const</span> <span>offset_sign</span> <span>=</span> <span>offset_minutes_total</span> <span>&gt;=</span> <span>0</span> <span>?</span> <span>'+'</span> <span>:</span> <span>'-'</span>;<br>  <span>const</span> <span>offset_abs</span> <span>=</span> <span>Math</span><span>.</span>abs(<span>offset_minutes_total</span>);<br>  <span>const</span> <span>offset_hours</span> <span>=</span> <span>pad</span>({ value: <span>Math</span><span>.</span>floor(<span>offset_abs</span> <span>/</span> <span>60</span>) });<br>  <span>const</span> <span>offset_minutes</span> <span>=</span> <span>pad</span>({ value: <span>offset_abs</span> <span>%</span> <span>60</span> });<br><br>  <span>return</span> <span>`</span>${<span>year</span>}<span>-</span>${<span>month</span>}<span>-</span>${<span>day</span>}<span> </span>${<span>hours</span>}<span>:</span>${<span>minutes</span>}<span>:</span>${<span>seconds</span>}${<span>offset_sign</span>}${<span>offset_hours</span>}<span>:</span>${<span>offset_minutes</span>}<span>`</span>;<br>}<br><br><span>function</span> <span>write_log</span>({<br>  file_path,<br>  line,<br>}: {<br>  file_path: <span>string</span>;<br>  line: <span>string</span>;<br>}): <span>void</span> {<br>  <span>try</span> {<br>    <span>appendFileSync</span>(<span>file_path</span>, <span>line</span> <span>+</span> <span>'</span><span>\n</span><span>'</span>);<br>  } <span>catch</span> {<br>    <span>return</span>;<br>  }<br>}<br><br><span>async</span> <span>function</span> <span>log_tick</span>({<br>  cfg,<br>}: {<br>  cfg: <span>config_type</span>;<br>}): <span>Promise</span>&lt;<span>void</span>&gt; {<br>  <span>const</span> { app, title } <span>=</span> <span>await</span> <span>get_active_window</span>();<br><br>  <span>if</span> (<span>app</span> <span>===</span> <span>''</span> <span>||</span> <span>title</span> <span>===</span> <span>''</span>) {<br>    <span>return</span>;<br>  }<br><br>  <span>const</span> <span>timestamp</span> <span>=</span> <span>format_timestamp</span>();<br>  <span>const</span> <span>line</span> <span>=</span> <span>`</span>${<span>timestamp</span>}<span> </span>${<span>app</span>}<span> </span>${<span>title</span>}<span>`</span>;<br><br>  <span>write_log</span>({<br>    file_path: <span>expand_home</span>({ path: <span>cfg</span><span>.</span>data_directory }),<br>    line,<br>  });<br>}<br><br><span>async</span> <span>function</span> <span>screenshot_tick</span>({<br>  cfg,<br>}: {<br>  cfg: <span>config_type</span>;<br>}): <span>Promise</span>&lt;<span>void</span>&gt; {<br>  <span>if</span> (<span>!</span><span>cfg</span><span>.</span>screenshots_enabled) {<br>    <span>return</span>;<br>  }<br><br>  <span>const</span> <span>path</span> <span>=</span> <span>expand_home</span>({ path: <span>cfg</span><span>.</span>screenshot_directory });<br><br>  <span>ensure_directory</span>({ file_path: <span>path</span> });<br><br>  <span>await</span> <span>run_command</span>({<br>    command: <span>`scrot "</span>${<span>path</span>}<span>"`</span>,<br>  });<br>}<br><br><span>function</span> <span>start_loop</span>({ cfg }: { cfg: <span>config_type</span> }): <span>void</span> {<br>  <span>const</span> <span>log_path</span> <span>=</span> <span>expand_home</span>({ path: <span>cfg</span><span>.</span>data_directory });<br>  <span>ensure_directory</span>({ file_path: <span>log_path</span> });<br><br>  <span>const</span> <span>screenshot_path</span> <span>=</span> <span>expand_home</span>({<br>    path: <span>cfg</span><span>.</span>screenshot_directory,<br>  });<br>  <span>ensure_directory</span>({ file_path: <span>screenshot_path</span> });<br><br>  <span>setInterval</span>(() =&gt; {<br>    <span>log_tick</span>({ cfg });<br>  }, <span>cfg</span><span>.</span>log_interval <span>*</span> <span>1000</span>);<br><br>  <span>setInterval</span>(() =&gt; {<br>    <span>screenshot_tick</span>({ cfg });<br>  }, <span>cfg</span><span>.</span>screenshot_interval <span>*</span> <span>1000</span>);<br>}<br><br><span>function</span> <span>main</span>(): <span>void</span> {<br>  <span>const</span> <span>cfg</span> <span>=</span> <span>config</span> <span>as</span> <span>config_type</span>;<br>  <span>start_loop</span>({ cfg });<br>}<br><br><span>main</span>();</div></div></div></div></div></div></div></div></div></div><div><div></div></div></div></div></div></pre></div></div></div></div><div></div><div><div></div></div></div></div></section></div><div></div></body></html>
