# 1

<!-- use method 1 -->

(to grok)

how to use clash on ubuntu

---

Here's a complete guide to install and use **Clash** on Ubuntu (as of 2025). There are several popular Clash variants. The most commonly used ones on Linux are:

1. **Clash for Windows (via clash-verge or clash-meta forks)** – GUI, easiest for beginners
2. **Clash Meta (mihomo)** – Newer, more powerful core, actively maintained
3. **Clash Premium (original)** – Older, less maintained now
4. **Clash Verge Rev** – Recommended GUI (supports Clash Meta core)
5. **Clash Nyanpasu** – Another modern GUI

I’ll give you the **easiest and most up-to-date method in 2025**: using **Clash Verge Rev** (supports the powerful Mihomo/Clash Meta core).

### Method 1: Clash Verge Rev (Recommended GUI – 2025 best choice)

1. **Download the latest AppImage or .deb**

   - Go to: https://github.com/clash-verge-rev/clash-verge-rev/releases
   - Download the latest:
     - `.deb` file (e.g., `clash-verge_*.deb`) → easiest
     - or `.AppImage` if you prefer portable

2. **Install the .deb (recommended)**

   ```bash
   sudo apt update
   sudo apt install ./clash-verge_*.deb
   ```

   (Or double-click the .deb file in your file manager)

   For AppImage:

   ```bash
   chmod +x clash-verge_*.AppImage
   ./clash-verge_*.AppImage
   ```

3. **First launch**

   - Open "Clash Verge Rev" from your app menu
   - It will ask to install the Mihomo core automatically → click Yes
   - Allow it to set up system proxy (it will modify your system proxy settings)

4. **Add your subscription**

   - Go to “Profiles” tab → “New Profile”
   - Paste your airport/subscription URL (e.g., from v2ray, trojan, ss, etc.)
   - Click “Update” or “Import”
   - Wait for nodes to load

5. **Enable proxy**
   - Go to “Proxies” tab
   - Choose “Rule” or “Global” mode
   - Pick a node (low latency ones are usually better)
   - Turn on “System Proxy” (red → green)

Done! Your Ubuntu traffic now goes through Clash.

### Method 2: Command-line only (clash-meta / mihomo) – for advanced users

```bash
# 1. Download latest mihomo (Clash Meta core)
wget https://github.com/MetaCubeX/mihomo/releases/latest/download/mihomo-linux-amd64-compatible.gz
gunzip mihomo-linux-amd64-compatible.gz
chmod +x mihomo-linux-amd64-compatible
sudo mv mihomo-linux-amd64-compatible /usr/local/bin/mihomo

# 2. Create config directory
mkdir -p ~/.config/clash

# 3. Download Country.mmdb (GeoIP database)
wget https://github.com/Loyalsoldier/geoip/releases/latest/download/Country.mmdb -O ~/.config/clash/Country.mmdb

# 4. Put your config.yaml in ~/.config/clash/config.yaml
#    (You can get it from your subscription → convert to Clash format)

# 5. Run
mihomo -d ~/.config/clash
```

Then set system proxy manually:

- Settings → Network → Network Proxy → Manual
  - HTTP/HTTPS: 127.0.0.1:7890
  - Socks: 127.0.0.1:7891 (if needed)

### Optional: Auto-start Clash Verge Rev

- Open Clash Verge Rev → Settings → Start at login → Enable

### Common Ports (for manual proxy or other apps)

- HTTP Proxy: `127.0.0.1:7890`
- SOCKS5 Proxy: `127.0.0.1:7891`
- Mixed port (Clash Verge default): usually `7854` or `9090` (check Settings → Proxy)

### Troubleshooting Tips

- If no internet after enabling proxy → switch to “Direct” node or disable system proxy
- Some apps (like Snap/Flatpak) ignore system proxy → use “TUN mode” in Clash Verge (requires extra setup)
- Enable TUN mode (recommended for full system proxy including snaps/docker):
  - Clash Verge → Settings → Enable “TUN Mode”
  - It will ask for root permission (uses wireguard-like virtual adapter)

That’s it! Clash Verge Rev + Mihomo core is currently the best experience on Ubuntu in 2025.

Let me know which airport/subscription provider you use (e.g., v2rayA, SSR, etc.), and I can help you convert the config if needed.

# 2

zsh: command not found: mihomo

---

The error `zsh: command not found: mihomo` means the `mihomo` binary is not in your `$PATH` or the name/move step failed.

Here’s how to fix it quickly (choose one method):

### Method 1: Fix the symbolic link (recommended)

Run these commands one by one:

```bash
# Download the latest compatible binary again (just to be safe)
cd /tmp
wget https://github.com/MetaCubeX/mihomo/releases/latest/download/mihomo-linux-amd64-compatible.gz
gunzip mihomo-linux-amd64-compatible.gz

# Move and rename it correctly to /usr/local/bin (this directory is always in PATH)
sudo mv mihomo-linux-amd64-compatible /usr/local/bin/mihomo
sudo chmod +x /usr/local/bin/mihomo
```

Now test:

```bash
mihomo --version
```

You should see something like `mihomo v1.x.x` → fixed!

### Method 2: If you still get “command not found” after that

Your system might not have `/usr/local/bin` in PATH (rare, but happens on some minimal Ubuntu setups).

Add it permanently:

```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Then try again:

```bash
mihomo --version
```

### Method 3: One-liner install (easiest, works 100% in 2025)

Just copy-paste this whole block:

```bash
sudo curl -L https://github.com/MetaCubeX/mihomo/releases/latest/download/mihomo-linux-amd64-compatible -o /usr/local/bin/mihomo && \
sudo chmod +x /usr/local/bin/mihomo
```

Now `mihomo` will work immediately in the current terminal and all future ones.

After it works, continue with the config:

```bash
mkdir -p ~/.config/clash
# Put your config.yaml + Country.mmdb there
mihomo -d ~/.config/clash
```

Let me know if you want me to give you a ready-to-use `config.yaml` template or help convert your subscription link.

# 3

how to remove that system tray icon

---

### Hiding the Clash Verge Rev System Tray Icon on Ubuntu

Based on the context of your Clash setup, I'm assuming you're referring to the Clash Verge Rev tray icon (the cat or default proxy icon in your top bar/panel). Unfortunately, **Clash Verge Rev does not have a built-in option to completely disable or hide the system tray icon on Linux** (as of December 2025). Developers have explicitly stated they won't add this feature, as the tray is considered essential for background control and quick access. A related feature request for partial hiding (e.g., showing only network speed) was closed without implementation.

However, you can **hide it using GNOME extensions** (Ubuntu's default desktop environment). This won't remove it entirely from the app but will prevent it from showing in the tray. Here's the easiest method:

#### Recommended: Use the "Icon Hider" GNOME Extension

This extension lets you selectively hide specific tray icons like Clash Verge's.

1. **Install the GNOME Extensions tool** (if not already installed):

   ```bash
   sudo apt update
   sudo apt install gnome-shell-extension-manager
   ```

2. **Install and enable the Icon Hider extension**:

   - Open the "Extensions" app (search for it in your menu).
   - Go to the "Browse" tab, search for "Icon Hider".
   - Install it (by `voldemortsen` or similar – it's free and open-source).
   - Enable it and restart GNOME (Alt + F2, type `r`, Enter) or log out/in.

3. **Configure it to hide the Clash icon**:
   - Open the extension's settings (via Extensions app or `gnome-extensions prefs icon-hider`).
   - Scroll to the list of tray icons at the bottom.
   - Find the entry for "Clash Verge" or the cat/proxy icon (it might show as "org.freedesktop.impl.portal.Desktop" or similar if generic).
   - Toggle it **off**.
   - Log out and back in (or restart) for the change to take effect.

This hides the icon without affecting Clash's functionality – you'll still control it via the main app window.

#### Alternative: Disable App Indicators Globally (Advanced, Not Recommended)

If you want to hide **all** third-party tray icons (including Clash), disable the Ubuntu AppIndicators extension:

```bash
gnome-extensions disable [email protected]
```

- Restart GNOME (`Alt + F2`, `r`) or log out/in.
- This affects other apps too (e.g., Discord, Steam), so use with caution. Re-enable with `gnome-extensions enable [email protected]`.
- Note: System updates might re-enable it.

#### If You're Using a Different Desktop Environment

- **KDE Plasma**: Right-click the icon in the system tray → "Always Hide Icon".
- **XFCE**: Right-click the panel → Panel → Add/Remove Items → Edit the Notification Area plugin → Hide specific items.
- **Cinnamon** (e.g., Linux Mint): Right-click the tray → Properties → Hide specific icons.

#### Other Workarounds

- **Minimize to Tray Only**: In Clash Verge Rev settings (gear icon → General), ensure "Minimize to Tray" is on, then close the main window – but the icon stays visible.
- **Custom Icon**: Download a transparent or blank icon from the official icon hub and set it in Settings → Tray Icon. This makes it "invisible" but still takes space.
- **Switch to CLI Mode**: If you don't need the GUI, stick with the `mihomo` command-line version (no tray at all):
  ```bash
  mihomo -d ~/.config/clash
  ```
  Add it to startup via `crontab -e` with `@reboot mihomo -d ~/.config/clash &`.

If this isn't the icon you meant (e.g., something from the mihomo CLI or another app), provide more details like a screenshot description or your DE (GNOME/KDE/etc.), and I'll refine the steps!

# 4 (android)

for android

---

### How to Use Clash on Android (Updated for December 2025)

Based on the ongoing conversation about Clash proxy setup (e.g., for VPN-like tunneling with subscriptions), I'll assume you're asking about **Clash for Android** or its modern fork, **Clash Meta for Android** (the recommended choice in 2025). These are rule-based proxy clients that support protocols like VMess, Shadowsocks, Trojan, Hysteria, and more. They're popular for bypassing restrictions, securing traffic, and managing subscriptions.

**Clash Meta for Android** is the best option right now: it's actively maintained, FOSS (free and open-source), supports the powerful Mihomo/Clash Meta core (same as on Ubuntu), and works on Android 5.0+. The original Clash for Android (by Kr328) is less updated, so avoid it unless you have a specific reason.

#### Quick Requirements

- Android 5.0+ (7.0+ recommended for best performance)
- Enable "Install from unknown sources" in Settings > Security (for APK installs)
- A Clash-compatible subscription (e.g., from your VPN provider – URL ending in .yaml or sub link)

### Method 1: Install Clash Meta for Android (Recommended – Easiest & Most Secure)

This is the go-to client in 2025, available on F-Droid for automatic updates.

1. **Download and Install**:

   - **Via F-Droid (safest, auto-updates)**:
     - Download the F-Droid app from https://f-droid.org (APK installer).
     - Open F-Droid, search for "Clash Meta for Android".
     - Install version 2.11.17 (latest as of Oct 2025) or newer.
   - **Direct APK (if you prefer GitHub)**:
     - Go to https://github.com/MetaCubeX/ClashMetaForAndroid/releases.
     - Download the latest `ClashMetaForAndroid-arm64-v8a-release.apk` (or matching your architecture: arm64-v8a for most modern phones).
     - Open the APK file and install.

2. **Launch and Grant Permissions**:

   - Open the app.
   - Grant VPN permission (it'll prompt – this is how it routes traffic).
   - Allow accessibility service if using advanced rules (optional).

3. **Import Your Subscription/Config**:

   - Tap the **Profiles** tab (or "Configuration" in some UIs).
   - Tap **+** > **Import from URL** (or "New Config" > "URL").
   - Paste your subscription URL (e.g., `https://your-provider.com/sub/clash`).
   - Set "Auto Update" to 1440 minutes (24 hours) for automatic node refreshes.
   - Tap **Save** – it downloads and parses the YAML config with your nodes/servers.

4. **Select a Node and Connect**:

   - Go to the **Proxies** tab.
   - Pick a low-latency node (sort by ping/delay).
   - Choose mode: **Rule** (recommended – routes based on rules, e.g., direct for local sites) or **Global** (all traffic via proxy).
   - Tap the power button (or "Start") on the main screen to connect.
   - Status should turn green. Your traffic is now proxied!

5. **Optional Tweaks**:
   - **Split Tunneling**: In Profiles > Edit Config, add rules for specific apps/sites (e.g., bypass for banking apps).
   - **TUN Mode**: Enable in Settings for full system-wide proxy (including games/apps that ignore VPN).
   - **Language**: Switch to English in Settings if needed (defaults to simplified Chinese in some builds).

You're connected! Test by visiting whatismyipaddress.com – it should show your proxy's IP.

### Method 2: Original Clash for Android (If You Prefer the Classic UI)

This is older but simpler for beginners. Use if Meta feels overwhelming.

1. **Download**:

   - APK from Uptodown: https://clash-for-android.en.uptodown.com/android (version 3.0.3.premium as of Jul 2025 – free version available).
   - Or GitHub mirrors: Search "Kr328/ClashForAndroid" releases.

2. **Setup**:
   - Install and open.
   - Go to **Config** > **New Config** > **URL**.
   - Paste your sub URL, save, and select it.
   - In **Proxy**, choose a server.
   - Tap **Start** on the home screen.

Note: It requires Android 7.0+ and may not support the latest protocols as well as Meta.

### Other Popular Alternatives in 2025

If Clash doesn't click, try these (all FOSS, similar setup):
| Client | Why Choose It? | Download | Min Android |
|--------|----------------|----------|-------------|
| **FlClash** | Lightweight, Meta core, great for low-end devices | GitHub: MetaCubeX/FlClash | 7.0+ |
| **Clash Mi** | Simple UI, auto-sub import | GitHub: Clash-Mi | 6.0+ |
| **v2rayNG** | Best for V2Ray/VMess only, no YAML needed | F-Droid or Play Store | 5.0+ |
| **Shadowsocks** | Ultra-simple for SS/SSR protocols | F-Droid | 4.1+ |

### Troubleshooting Tips

- **No Connection**: Check your sub URL (test in a YAML validator online). Switch to a different node or mode.
- **Battery Drain**: Disable in background via Settings > Battery > App optimization.
- **Play Store Blocked?**: These aren't on Google Play due to VPN rules – use F-Droid or direct APKs.
- **Convert Subs**: If your provider gives non-Clash format (e.g., V2Ray JSON), use a subconverter like https://subconverter.org to YAML.
- **Auto-Start**: Enable in app Settings > Startup.

If this is about **Clash of Clans/Royale** (the games) instead, let me know – setup is just download from Play Store/App Store and play! Or if you meant something else (e.g., removing a tray icon on Android), provide more details. What's your subscription provider? I can help convert configs.

# 5 (fix 3)

<!-- work -->

no icon hider

---

### Alternative Ways to Hide the Clash Verge Rev System Tray Icon on Ubuntu (Without Icon Hider)

Since Icon Hider is no longer maintained (as of 2025) and may not work reliably on modern GNOME versions (46+ in Ubuntu 24.04/25.04), here are other effective methods to hide just the Clash Verge tray icon (or all third-party ones) without it. These focus on GNOME (Ubuntu's default), assuming that's your setup from our earlier chat. They preserve Clash's functionality – you'll still control it via the main app window.

#### Method 1: Use Lilypad GNOME Extension (Recommended – Modern, Selective Hiding)

Lilypad is a 2024+ extension that lets you drag-and-drop to hide specific top-bar icons (like Clash's cat/proxy icon) into a collapsible "hidden" group. It's actively maintained, lightweight, and perfect for decluttering without affecting other apps.

1. **Install GNOME Extensions Manager** (if not already):

   ```bash
   sudo apt update
   sudo apt install gnome-shell-extension-manager
   ```

2. **Install Lilypad**:

   - Open the "Extensions" app.
   - Go to "Browse" tab, search for "Lilypad" (by GNOME extensions site).
   - Install and enable it.
   - Restart GNOME: Press `Alt + F2`, type `r`, Enter (or log out/in).

3. **Hide the Clash Icon**:
   - Click the Lilypad icon in your top bar (or open its settings via Extensions app).
   - A window shows all top-bar items (applets, tray icons).
   - Find "Clash Verge" or the proxy icon in the list.
   - Drag it to the "Lilypad" (hidden) section at the bottom.
   - Save changes – the icon vanishes from view but is accessible via a quick toggle in Lilypad (like a mini-menu bar).

This groups hidden icons together, similar to Windows' overflow tray. No restarts needed after setup.

#### Method 2: Disable Ubuntu AppIndicators Extension (Hides All Third-Party Tray Icons)

This removes support for all external tray icons (Clash, Discord, etc.) at once – great if you only want built-in GNOME ones (battery, network). It's reversible and doesn't touch system packages.

1. **Install GNOME Tweaks** (if needed):

   ```bash
   sudo apt install gnome-tweaks
   ```

2. **Disable the Extension**:
   - Open "Tweaks" app > "Extensions" tab.
   - Find "Ubuntu AppIndicators" (or "AppIndicators and Status Icons").
   - Toggle it **off**.
   - Restart GNOME (`Alt + F2`, `r`) or log out/in.

All third-party icons disappear. If you want it back: Toggle on and restart.

**Alternative Command-Line Way** (for Ubuntu 22.04+):

```bash
gnome-extensions disable [email protected]
```

Restart as above. Re-enable with `gnome-extensions enable [email protected]`.

#### Method 3: Hide-Tray-Icons Extension (For Legacy/Stubborn Icons)

If Clash uses a "legacy" tray format (rare but possible in Electron apps like Verge), this extension specifically targets and hides them.

1. **Download and Install**:

   - Go to https://github.com/jp7677/hide-tray-icons.
   - Download the ZIP, extract to `~/.local/share/gnome-shell/extensions/hideTrayIcons@jp7677/`.
   - Or run: `./install.sh` from the repo (after cloning).

2. **Enable**:
   - In Extensions app, enable "Hide Tray Icons".
   - Restart GNOME.

It auto-hides legacy icons like Clash's without config. Conflicts with other tray extensions? Disable those first.

#### Method 4: Edit AppIndicator.js File (Advanced, Permanent Hack)

This disables third-party indicators by modifying the core file – granular but resets on updates. Use only if others fail.

1. **Backup and Edit**:

   ```bash
   sudo cp /usr/share/gnome-shell/extensions/[email protected]/appIndicator.js /usr/share/gnome-shell/extensions/[email protected]/appIndicator.js.BAK
   sudo sed -i 's/this._indicators.add(indicator.actor);/\/\/ Hiding third-party indicators: this._indicators.add(indicator.actor);/' /usr/share/gnome-shell/extensions/[email protected]/appIndicator.js
   ```

2. **Restart**:
   - Log out/in or reboot.

To revert: `sudo mv /usr/share/gnome-shell/extensions/[email protected]/appIndicator.js.BAK /usr/share/gnome-shell/extensions/[email protected]/appIndicator.js` and restart.

**Note**: System updates may overwrite this – reapply if needed.

#### Other Tips

- **Switch to Vanilla GNOME**: For a tray-free experience overall, install `sudo apt install vanilla-gnome-desktop`, then select "GNOME" at login (cog icon). This disables Ubuntu's tray support entirely.
- **If Using KDE (Not GNOME)**: Right-click the Clash icon > "Always Hide This Icon" – built-in and instant.
- **Clash-Specific**: In Clash Verge settings > General > Tray, you can't fully disable, but set a transparent icon (download a blank PNG and point to it) for a "stealth" look.
- **Test**: After any change, run `clash-verge` to ensure the app still works (tray hidden, but proxy active).

If none of these work (e.g., you're on a different DE like XFCE), share your desktop environment (`echo $XDG_CURRENT_DESKTOP`) or a description of the issue. For Android (from your last query), tray icons aren't a thing – it's a notification shade icon, hidden via app settings or battery optimization. Let me know!

# b

(to grok)

compare clash and v2ray

---

### Overview

Clash and V2Ray are both popular open-source tools designed primarily for proxying traffic to bypass network restrictions (e.g., censorship). Clash is a rule-based proxy client that emphasizes user-friendliness and advanced routing, while V2Ray (and its fork Xray) is a more modular platform for building customizable proxies. They overlap in use cases like VPN-like setups but differ in architecture, ease of use, and features. Note that "Clash" often refers to clients like Clash for Windows (CFW) or Clash Meta (mihomo), and "V2Ray" commonly means clients like v2rayN built on the V2Ray core.

### Key Comparison

Here's a side-by-side comparison based on their core capabilities, drawn from official docs, user guides, and community discussions:

| Aspect                     | Clash                                                                                                                                                               | V2Ray (v2rayN/Xray)                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary Focus**          | Rule-based routing, load balancing, and user-friendly GUI for multi-protocol proxy management.                                                                      | Modular proxy platform with advanced obfuscation and transport protocols for building custom setups.                                  |
| **Supported Protocols**    | Shadowsocks (SS), ShadowsocksR (SSR), VMess, Trojan, SOCKS5/HTTP, Hysteria2/TUIC (in Clash Meta). Limited native VLESS without extensions.                          | VMess (core), VLESS, Trojan, Shadowsocks, SSR, mKCP, dynamic port forwarding. Strong in XTLS for enhanced security.                   |
| **Ease of Use**            | High: Graphical interface (e.g., in CFW or Clash Verge), one-click imports, YAML config. Ideal for beginners.                                                       | Medium: Command-line core, but GUI clients like v2rayN simplify it. More config-heavy for advanced tweaks.                            |
| **Platforms**              | Windows, macOS (ClashX), Android (Clash for Android), iOS (via forks like Shadowrocket integration), Linux.                                                         | Windows (v2rayN), Android (v2rayNG), macOS (Qv2ray), iOS (limited, e.g., Shadowrocket), Linux.                                        |
| **Performance & Speed**    | Excellent for load balancing and rule-based optimization; handles high traffic well but can be resource-intensive.                                                  | Superior obfuscation reduces detection; faster in raw throughput with XTLS but less optimized for multi-node switching.               |
| **Customization**          | Strong rule engine (e.g., domain/IP-based routing), but less granular transport options.                                                                            | Highly flexible: Inbound/outbound modules, dynamic ports, and plugins for deep tweaks.                                                |
| **Community & Updates**    | Active forks like Clash Meta (mihomo) keep it evolving; original repo archived in 2023 but widely forked. Large user base for "airport" (VPN service) integrations. | Mature, stable core with ongoing Xray forks. Bigger historical community, but slower GUI evolution.                                   |
| **Encryption & Anonymity** | Solid AES/TLS support; rule-based anonymity. Relies on upstream protocols for strength.                                                                             | Advanced: Built-in obfuscation (e.g., VMess over WebSocket), XTLS for post-quantum resistance. Better against deep packet inspection. |
| **Cost**                   | Free/open-source; some iOS clients (e.g., Shadowrocket) are paid (~$3).                                                                                             | Free/open-source; similar paid iOS options.                                                                                           |
| **Best For**               | Users wanting simple setup, speed testing across nodes, and gaming/Netflix streaming.                                                                               | Advanced users needing stealthy, custom proxies or specific protocols like VLESS.                                                     |

### Pros and Cons

#### Clash

- **Pros**: Intuitive UI, powerful load balancing for "airports" (shared VPN services), easy subscription imports, and broad compatibility. Clash Meta adds modern protocols like Hysteria2 for better UDP/gaming support.
- **Cons**: Original core is outdated (no VLESS native); can feel bloated on low-end devices. Some users report import issues when switching from V2Ray configs.

#### V2Ray

- **Pros**: Highly stealthy and reliable against censorship; excels in protocol versatility and one-click server scripts (e.g., v2ray-agent). Stable for long-term use.
- **Cons**: Steeper learning curve for config; less emphasis on GUI polish or multi-node management compared to Clash.

### Recommendation

- **Choose Clash** if you're a beginner, prioritize ease and speed optimization (e.g., for streaming or multiple nodes), or use services supporting SS/VMess. Start with Clash Verge for cross-platform simplicity.
- **Choose V2Ray** if you need advanced stealth (e.g., VLESS/XTLS) or custom server builds. It's more "set it and forget it" for stability.
  Both work well with paid "airports" for plug-and-play setups, and neither is inherently "better"—it depends on your protocols and needs. For 2025, Clash Meta bridges many gaps, making it a strong hybrid option. Always download from trusted GitHub forks to avoid malware.
