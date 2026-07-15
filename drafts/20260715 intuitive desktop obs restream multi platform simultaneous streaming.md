## how to live on many platforms via obs on ubuntu

To stream to multiple platforms simultaneously (restream) using OBS Studio on Ubuntu, you have two primary methods: using a free OBS plugin or setting up a local RTMP server.

Here is how to set up both methods.

### Method 1: The Multiple RTMP Outputs Plugin (Easiest)

This method adds a panel directly inside OBS to stream to additional destinations without re-encoding, saving CPU power.

#### 1. Install the Plugin

1. Open your terminal.

2. Download the Ubuntu `.deb` package for the **obs-multi-rtmp** plugin from its official GitHub releases page.

3. Install the package by running:\
   bash

<!---->

```
sudo apt install ./obs-multi-rtmp-*.deb
```

Use code with caution.
4\. Restart OBS Studio.

#### 2. Configure the Destinations

1. Open OBS Studio.
2. Look for the new **Multiple Output** dock (if missing, enable it via **Docs** > **Multiple Output**).
3. Click **Add new target**.
4. Enter a name (e.g., "YouTube").
5. Input the **RTMP server URL** and **Stream Key** from your platform.
6. Set **Video Settings** and **Audio Settings** to **Get from OBS** to avoid overloading your CPU.
7. Click **OK**.

#### 3. Start the Stream

1. Click **Start Streaming** in the main OBS controls (this activates your primary platform set in OBS Settings).
2. Click **Start** next to your added targets in the Multiple Output dock.

***

### Method 2: Nginx with RTMP Module (Advanced / No Plugins)

This method uses a lightweight local server to duplicate your single stream and send it to multiple platforms.

#### 1. Install Nginx and the RTMP Module

Open your terminal and run:

bash

```
sudo apt update
sudo apt install nginx libnginx-mod-rtmp
```

Use code with caution.

#### 2. Configure the RTMP Server

1. Open the Nginx configuration file:\
   bash

<!---->

```
sudo nano /etc/nginx/nginx.conf
```

Use code with caution.
2\. Scroll to the bottom of the file and paste the following block:\
nginx

```
rtmp {
    server {
        listen 1935;
        chunk_size 4000;

        application live {
            live on;
            record off;

            # Target 1: Twitch
            push rtmp://live.twitch.tv/app/YOUR_TWITCH_STREAM_KEY;

            # Target 2: YouTube
            push rtmp://://youtube.com;
        }
    }
}
```

Use code with caution.
3\. Replace `YOUR_TWITCH_STREAM_KEY` and `YOUR_YOUTUBE_STREAM_KEY` with your actual keys.
4\. Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).
5\. Restart Nginx to apply changes:\
bash

```
sudo systemctl restart nginx
```

Use code with caution.

#### 3. Configure OBS Studio

1. Open OBS and go to **Settings** > **Stream**.
2. Set **Service** to **Custom...**
3. Set **Server** to: `rtmp://localhost/live`
4. Leave **Stream Key** blank (or enter a placeholder character).
5. Click **Apply** and **OK**.
6. Click **Start Streaming**. Nginx will automatically split and forward your stream to all listed platforms.

***

### Crucial Hardware Requirements

- **Internet Bandwidth**: Your **upload speed** must be higher than the combined bitrates of your streams if you re-encode. If you use "Get from OBS" (Method 1) or Nginx (Method 2), you only need enough upload speed for a **single stream**.
- **OBS Installation**: Ensure you are using the official OBS Studio PPA or Flatpak version for the best plugin compatibility on Ubuntu.

To help narrow down the best setup for your hardware, please let me know:

- What **platforms** do you want to stream to?

- What is your internet **upload speed**?

- Do you know if your OBS was installed via **Flatpak, Snap, or APT**?

- [link](https://www.youtube.com/watch?v=RBXu1%5Fjaes8)\
  How to stream on multiple platforms using OBS - Totally FREE\
  Jun 9, 2021 — How to stream on multiple platforms using OBS - Totally FREE OBS now has a way to stream to Multiple platforms at the same time! I...\
  \
  \
  YouTube

- [link](https://wpstream.net/obs-multistream/)\
  Complete Guide: How to Stream to Multiple Platforms With OBS\
  Apr 4, 2023 — If you want to stream to multiple platforms simultaneously using OBS, there are two methods you can use.\
  \
  \
  WpStream

- [link](https://streamyard.com/blog/streaming-software-linux-guide-streamyard-vs-obs)\
  Streaming Software on Linux: The Practical Guide (and Why StreamYard Is a Strong Default)\
  Jan 9, 2026 — How to install OBS Studio on Ubuntu 24.04 (PPA vs Flatpak) Set up scenes and sources for your local capture Stream out to a single...\
  \
  \
  StreamYard

Show all

## how to method 2

To set up Method 2 (Nginx RTMP server) on Ubuntu, follow these step-by-step terminal and configuration instructions.

### 1. Install Nginx and the RTMP Module

Open your terminal (`Ctrl+Alt+T`) and run these commands to install the required packages:

bash

```
sudo apt update
sudo apt install nginx libnginx-mod-rtmp -y
```

Use code with caution.

***

### 2. Configure the Nginx Server

You need to tell Nginx where to receive your stream and where to forward it.

1. Open the Nginx configuration file in the text editor:\
   bash

<!---->

```
sudo nano /etc/nginx/nginx.conf
```

Use code with caution.
2\. Scroll to the very bottom of the file using your arrow keys.
3\. Paste the following configuration block. **Replace the placeholder keys** with your actual stream keys:

nginx

```
rtmp {
    server {
        listen 1935;
        chunk_size 4000;

        application live {
            live on;
            record off;

            # Destination 1: Twitch (Example)
            push rtmp://live.twitch.tv/app/live_123456_abcde;

            # Destination 2: YouTube (Example)
            push rtmp://://youtube.com;
        }
    }
}
```

Use code with caution.

1. Save and exit the editor:

- Press `Ctrl + O`, then press `Enter` to save.
- Press `Ctrl + X` to exit.

***

### 3. Start and Verify the Service

1. Test the configuration file for syntax errors:\
   bash

<!---->

```
sudo nginx -t
```

Use code with caution.\
_(If it says "test is successful", proceed. If it fails, check your brackets in the step above)._
2\. Restart Nginx to apply your changes:\
bash

```
sudo systemctl restart nginx
```

Use code with caution.
3\. Enable Nginx to automatically start whenever your computer boots up:\
bash

```
sudo systemctl enable nginx
```

Use code with caution.

***

### 4. Configure OBS Studio

Now, configure OBS to send your video stream to your newly created local server.

1. Open OBS Studio and click **Settings** (bottom right).
2. Click on the **Stream** tab in the left sidebar.
3. Change the **Service** dropdown menu to **Custom...**
4. In the **Server** field, type exactly: `rtmp://localhost/live`
5. Leave the **Stream Key** field completely blank (or type a single letter if OBS forces you to fill it).
6. Click **Apply** and then **OK**.

***

### 5. Go Live

Click **Start Streaming** in OBS.

Your stream will travel from OBS to your local Nginx server. Nginx will instantly duplicate the stream and push it out to all the platforms you listed in the configuration file simultaneously.

If you want to troubleshoot or customize this setup, let me know:

- Which **specific streaming platforms** are you using? (I can give you their exact RTMP URLs).
- Do you need to set up **stream authentication or security** to keep others from streaming to your machine?

## choose a custom port on localhost

To change the port from the default `1935` to a custom port (for example, `1940`), you must update both your Nginx configuration and your OBS settings.

Here is how to change it.

### 1. Update Nginx Configuration

1. Open your Nginx configuration file:\
   bash

<!---->

```
sudo nano /etc/nginx/nginx.conf
```

Use code with caution.
2\. Find the `rtmp` block you added earlier.
3\. Change the `listen` value to your custom port (e.g., `1940`):\
nginx

```
rtmp {
    server {
        listen 1940; # <--- Change this number
        chunk_size 4000;

        application live {
            live on;
            record off;
            push rtmp://live.twitch.tv/app/YOUR_KEY;
            push rtmp://://youtube.com;
        }
    }
}
```

Use code with caution.
4\. Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

### 2. Apply and Verify the Changes

1. Test your configuration for syntax errors:\
   bash

<!---->

```
sudo nginx -t
```

Use code with caution.
2\. Restart Nginx to apply the new port:\
bash

```
sudo systemctl restart nginx
```

Use code with caution.
3\. (Optional) Verify Nginx is successfully listening on your new port:\
bash

```
sudo ss -tulpn | grep 1940
```

Use code with caution.

### 3. Update OBS Studio

You must now tell OBS to send the stream to the new port by appending it to the localhost address.

1. Open OBS Studio and go to **Settings** > **Stream**.

2. Keep **Service** set to **Custom...**

3. Update the **Server** field to include your custom port using a colon (`:`):\
   text

<!---->

```
rtmp://localhost:1940/live
```

Use code with caution.
4\. Click **Apply** and **OK**.

***

### Firewall Notice (If applicable)

If you are running a firewall like UFW on your Ubuntu machine and you plan to stream to this server from _another_ computer on your network, remember to allow the new port:

bash

```
sudo ufw allow 1940/tcp
```

Use code with caution.

_(If OBS and Nginx are on the same Ubuntu machine, you do not need to change firewall settings)._

To ensure your stream goes through smoothly, let me know:

- Did Nginx **restart successfully** without errors?

- Are you streaming from the **same Ubuntu machine** or a **second PC**?

- [link](https://www.scaler.com/topics/linux-port-forwarding/)\
  How to Setup Port Forwarding on Linux?\
  Dec 31, 2023 — Restart Nginx to apply the new configuration with the sudo systemctl restart nginx command.\
  \
  \
  Scaler

- [link](https://phoenixnap.com/kb/iptables-port-forwarding)\
  How to Forward Ports With Iptables in Linux\
  Jan 12, 2023 — 7. Restart Nginx to apply the new configuration.\
  \
  \
  phoenixNAP

- [link](https://discourse.pi-hole.net/t/https-reverse-proxy-in-docker-host-mode/64034)\
  Https Reverse Proxy in Docker host Mode? - docker\
  Jul 21, 2023 — You can check ports locally with sudo ss -tulpn .\
  \
  Pi-hole Userspace

Show all

## full step by step

Here is the complete, start-to-finish guide to setting up an Nginx RTMP server on a custom port on Ubuntu and connecting it to OBS.

### Step 1: Install Nginx and the RTMP Module

1. Open your terminal (`Ctrl + Alt + T`).

2. Update your package lists:\
   bash

<!---->

```
sudo apt update
```

Use code with caution.
3\. Install Nginx and the RTMP module extension:\
bash

```
sudo apt install nginx libnginx-mod-rtmp -y
```

Use code with caution.

***

### Step 2: Configure Nginx with Your Custom Port and Stream Keys

1. Open the Nginx configuration file in the text editor:\
   bash

<!---->

```
sudo nano /etc/nginx/nginx.conf
```

Use code with caution.
2\. Use the down arrow key to scroll to the very bottom of the file.
3\. Paste the following configuration block.

- _Note: Change `1940` to any custom port you prefer._

- _Note: Replace the example URLs and stream keys with your actual platform details._\
  nginx

<!---->

```
rtmp {
    server {
        listen 1940;
        chunk_size 4000;

        application live {
            live on;
            record off;

            # Platform 1 (Example: Twitch)
            push rtmp://live.twitch.tv/app/YOUR_TWITCH_STREAM_KEY;

            # Platform 2 (Example: YouTube)
            push rtmp://://youtube.com;
        }
    }
}
```

Use code with caution.
4\. Save and exit the file:

- Press `Ctrl + O`, then press `Enter` to save.
- Press `Ctrl + X` to exit.

***

### Step 3: Validate and Restart the Nginx Service

1. Test your configuration file for typos or syntax errors:\
   bash

<!---->

```
sudo nginx -t
```

Use code with caution.\
_If successful, the output will say `syntax is ok` and `test is successful`._
2\. Restart Nginx to load your new custom port setup:\
bash

```
sudo systemctl restart nginx
```

Use code with caution.
3\. Enable Nginx so it starts automatically every time your system boots:\
bash

```
sudo systemctl enable nginx
```

Use code with caution.

***

### Step 4: Configure the Firewall (If needed)

If OBS and Nginx are on the **same machine**, you can skip this step.

If you are sending the stream to this Ubuntu machine from a **different computer** on your network, open your custom port in the Ubuntu firewall:

bash

```
sudo ufw allow 1940/tcp
```

Use code with caution.

***

### Step 5: Configure OBS Studio

1. Open OBS Studio.

2. Click **Settings** in the bottom right corner.

3. Click on the **Stream** tab in the left sidebar.

4. Set the **Service** dropdown to **Custom...**

5. In the **Server** field, enter your localhost IP followed by your custom port:\
   text

<!---->

```
rtmp://127.0.0.1:1940/live
```

Use code with caution.\
_(You can also use `rtmp://localhost:1940/live`)_
6\. Leave the **Stream Key** field blank.
7\. Click **Apply** and then **OK**.

***

### Step 6: Go Live

1. Click **Start Streaming** inside OBS Studio.
2. Check your streaming platform dashboards (Twitch, YouTube, etc.). Within a few seconds, they should all show your incoming live video feed.

If you encounter any issues getting the stream to appear, tell me:

- Did the `sudo nginx -t` command return any **error messages**?
- Which **streaming platforms** (Twitch, Kick, YouTube) are you targeting? _(I can provide their exact RTMP ingest URLs)._

## why is it called restream

It is called **restream** <mark>because it describes the act of taking a single live video stream and<span> </span><strong>re-streaming</strong><span> </span>(re-broadcasting) it to multiple destinations simultaneously</mark>.

The term combines two concepts:

- **Stream**: The original live video feed sent from your computer.
- **Re-**: A prefix meaning "again" or "anew."

Instead of your computer encoding and uploading separate video feeds for Twitch, YouTube, and Kick all at once—which would crash your internet and crush your CPU—you stream **once** to a central server (like Nginx or a cloud service). That server then duplicates your video and streams it _again_ to every other platform.

The name was also heavily popularized by **Restream.io**, a cloud-based company founded in 2015 that became the industry pioneer for multistreaming software. Over time, the brand name turned into a generic verb, much like how people use "Google" to mean searching the web.

If you are curious about the technical side of this process, I can explain:

- The difference between **hardware restreaming** (local Nginx) vs. **cloud restreaming**

- How restreaming affects your **internet data usage**

- [link](https://cloudinary.com/guides/alternative/restream-alternative)\
  Restream Alternative: Why Teams Choose Cloudinary for Scalable Video Delivery\
  Feb 21, 2026 — What Restream Can Do Before you can assess any Restream competitor, you need to know what Restream does. Restream is a live stream...\
  \
  \
  Cloudinary

- [link](https://www.youtube.com/watch?v=M%5FWLsbHGd0Q)\
  How To Re-Stream in SAM Broadcaster-A SAM Broadcaster Tutorial\
  Jun 14, 2015 — There are many reasons. The process of carrying someone else's stream through your SAM Broadcaster is called re-streaming. In this...\
  \
  \
  YouTube

- [link](https://www.brightwalldarkroom.com/2024/05/17/obscure-objectless-desire-smithereens-1982/)\
  That Obscure Objectless Desire: Smithereens (1982)\
  May 17, 2024 — The prefix “re-” comes up uncommonly often when you talk about movies, “re-” meaning “again,” and “again” being the fuel that fire...\
  \
  \
  Bright Wall/Dark Room

Show all