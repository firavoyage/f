# . commands

```sh
 ~ % curl ipinfo.io/8.8.8.8

{
  "status": 429,
  "error": {
    "title": "Rate limit hit",
    "message": "Sign up at ipinfo.io"
  }
}%                                                                                                                                     ~ % curl ipinfo.io/8.8.8.8

{
  "status": 429,
  "error": {
    "title": "Rate limit hit",
    "message": "Sign up at ipinfo.io"
  }
}%                                                                                                                                     ~ % curl http://ip-api.com

{
  "status"       : "success",
  "continent"    : "Asia",
  "continentCode": "AS",
  "country"      : "Japan",
  "countryCode"  : "JP",
  "region"       : "13",
  "regionName"   : "Tokyo",
  "city"         : "Tokyo",
  "district"     : "",
  "zip"          : "140-0002",
  "lat"          : 35.6191,
  "lon"          : 139.7511,
  "timezone"     : "Asia/Tokyo",
  "offset"       : 32400,
  "currency"     : "JPY",
  "isp"          : "IKUUU NETWORK LTD",
  "org"          : "IKUUU NETWORK LTD",
  "as"           : "AS134972 IKUUU NETWORK LTD",
  "asname"       : "IKUUU-AS-AP",
  "mobile"       : false,
  "proxy"        : true,
  "hosting"      : false,
  "query"        : "103.151.173.95"
}
 ~ % curl -s http://ip-api.com/json/185.238.249.42 | jq
{
  "status": "success",
  "country": "United States",
  "countryCode": "US",
  "region": "CA",
  "regionName": "California",
  "city": "Los Angeles",
  "zip": "90060",
  "lat": 34.0544,
  "lon": -118.244,
  "timezone": "America/Los_Angeles",
  "isp": "GWY IT PTY LTD",
  "org": "Hostsymbol Pte. Ltd",
  "as": "AS199959 GWY IT PTY LTD",
  "query": "185.238.249.42"
}
 ~ % curl -s http://ip-api.com/json/207.148.100.204 | jq
{
  "status": "success",
  "country": "Japan",
  "countryCode": "JP",
  "region": "13",
  "regionName": "Tokyo",
  "city": "Minamishinagawa",
  "zip": "140-0001",
  "lat": 35.6164,
  "lon": 139.7425,
  "timezone": "Asia/Tokyo",
  "isp": "The Constant Company, LLC",
  "org": "TYO Vultr",
  "as": "AS20473 The Constant Company, LLC",
  "query": "207.148.100.204"
}
 ~ % curl -s http://ip-api.com/json/1.1.1.1 | jq
{
  "status": "success",
  "country": "Australia",
  "countryCode": "AU",
  "region": "QLD",
  "regionName": "Queensland",
  "city": "South Brisbane",
  "zip": "4101",
  "lat": -27.4766,
  "lon": 153.0166,
  "timezone": "Australia/Brisbane",
  "isp": "Cloudflare, Inc",
  "org": "APNIC and Cloudflare DNS Resolver project",
  "as": "AS13335 Cloudflare, Inc.",
  "query": "1.1.1.1"
}
 ~ % curl -s http://ip-api.com/json/8.8.8.8 | jq
{
  "status": "success",
  "country": "United States",
  "countryCode": "US",
  "region": "VA",
  "regionName": "Virginia",
  "city": "Ashburn",
  "zip": "20149",
  "lat": 39.03,
  "lon": -77.5,
  "timezone": "America/New_York",
  "isp": "Google LLC",
  "org": "Google Public DNS",
  "as": "AS15169 Google LLC",
  "query": "8.8.8.8"
}
```

```sh
 ~ % ssh root@207.148.100.204
Connection closed by 207.148.100.204 port 22
 ~ % ssh root@185.238.249.42

Linux fira 6.1.0-31-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.128-1 (2025-02-07) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Thu May  7 09:51:57 2026 from 103.151.173.201
root@fira:~# sudo apt update && sudo apt install -y nginx
Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
Get:2 http://deb.debian.org/debian bookworm-updates InRelease [55.4 kB]
Get:3 http://deb.debian.org/debian bookworm/main Sources [9,492 kB]
Get:4 http://deb.debian.org/debian bookworm/main amd64 Packages [8,790 kB]
Get:5 http://deb.debian.org/debian bookworm/main Translation-en [6,107 kB]
Get:6 http://security.debian.org/debian-security bookworm-security InRelease [34.8 kB]
Get:7 http://security.debian.org/debian-security bookworm-security/main Sources [220 kB]
Get:8 http://security.debian.org/debian-security bookworm-security/main amd64 Packages [318 kB]
Get:9 http://security.debian.org/debian-security bookworm-security/main Translation-en [194 kB]
Fetched 25.4 MB in 5s (4,777 kB/s)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
61 packages can be upgraded. Run 'apt list --upgradable' to see them.
N: Repository 'http://deb.debian.org/debian bookworm InRelease' changed its 'Version' value from '12.13' to '12.15'
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  nginx-common
Suggested packages:
  fcgiwrap nginx-doc ssl-cert
The following NEW packages will be installed:
  nginx nginx-common
0 upgraded, 2 newly installed, 0 to remove and 61 not upgraded.
Need to get 644 kB of archives.
After this operation, 1,703 kB of additional disk space will be used.
Get:1 http://deb.debian.org/debian bookworm/main amd64 nginx-common all 1.22.1-9+deb12u9 [115 kB]
Get:2 http://deb.debian.org/debian bookworm/main amd64 nginx amd64 1.22.1-9+deb12u9 [530 kB]
Fetched 644 kB in 0s (24.4 MB/s)
Preconfiguring packages ...
Selecting previously unselected package nginx-common.
(Reading database ... 33967 files and directories currently installed.)
Preparing to unpack .../nginx-common_1.22.1-9+deb12u9_all.deb ...
Unpacking nginx-common (1.22.1-9+deb12u9) ...
Selecting previously unselected package nginx.
Preparing to unpack .../nginx_1.22.1-9+deb12u9_amd64.deb ...
Unpacking nginx (1.22.1-9+deb12u9) ...
Setting up nginx-common (1.22.1-9+deb12u9) ...
Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.
Setting up nginx (1.22.1-9+deb12u9) ...
Upgrading binary: nginx.
Processing triggers for man-db (2.11.2-2) ...
root@fira:~# sudo mkdir -p /var/www/html/pwa
sudo chown -R $USER:$USER /var/www/html/pwa
cd /var/www/html/pwa
root@fira:~# sudo mkdir -p /var/www/html/pwa
root@fira:~# sudo chown -R $USER:$USER /var/www/html/pwa
root@fira:~# cd /var/www/html/pwa
root@fira:/var/www/html/pwa# cat << 'EOF' > index.html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Simple PWA</title>
>     <link rel="manifest" href="manifest.json">
> </head>
> <body>
>     <h1>Current Time</h1>
>     <div id="time">Loading...</div>
>
>     <script>
>         // Update time every second
>         function updateTime() {
>             document.getElementById('time').innerText = new Date().toLocaleTimeString();
>         }
>         setInterval(updateTime, 1000);
>         updateTime();
>
>         // Register Service Worker
>         if ('serviceWorker' in navigator) {
>             navigator.serviceWorker.register('sw.js')
>                 .then(() => console.log('Service Worker Registered'));
>         }
>     </script>
> </body>
> </html>
> EOF
root@fira:/var/www/html/pwa# cat index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple PWA</title>
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <h1>Current Time</h1>
    <div id="time">Loading...</div>

    <script>
        // Update time every second
        function updateTime() {
            document.getElementById('time').innerText = new Date().toLocaleTimeString();
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Register Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(() => console.log('Service Worker Registered'));
        }
    </script>
</body>
</html>
root@fira:/var/www/html/pwa# cat << 'EOF' > manifest.json
> {
>   "name": "Simple Time PWA",
>   "short_name": "TimePWA",
>   "start_url": ".",
>   "display": "standalone",
>   "background_color": "#ffffff",
>   "theme_color": "#000000",
>   "icons": [
>     {
>       "src": "icon.png",
>       "sizes": "192x192",
>       "type": "image/png"
>     },
>     {
>       "src": "icon.png",
>       "sizes": "512x512",
>       "type": "image/png"
>     }
>   ]
> }
> EOF
root@fira:/var/www/html/pwa# sudo apt install -y imagemagick
convert -size 512x512 xc:black icon.png
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  fontconfig fontconfig-config fonts-dejavu-core fonts-droid-fallback fonts-noto-mono fonts-urw-base35 ghostscript gsfonts
  hicolor-icon-theme imagemagick-6-common imagemagick-6.q16 libaom3 libavahi-client3 libavahi-common-data libavahi-common3 libcairo2
  libcups2 libdatrie1 libdav1d6 libde265-0 libdeflate0 libdjvulibre-text libdjvulibre21 libfftw3-double3 libfontconfig1 libfontenc1
  libfribidi0 libgomp1 libgraphite2-3 libgs-common libgs10 libgs10-common libharfbuzz0b libheif1 libice6 libidn12 libijs-0.35
  libimath-3-1-29 libjbig0 libjbig2dec0 libjpeg62-turbo libjxr-tools libjxr0 liblcms2-2 liblerc4 liblqr-1-0 libltdl7
  libmagickcore-6.q16-6 libmagickcore-6.q16-6-extra libmagickwand-6.q16-6 libnetpbm11 libopenexr-3-1-30 libopenjp2-7 libpango-1.0-0
  libpangocairo-1.0-0 libpangoft2-1.0-0 libpaper-utils libpaper1 libpixman-1-0 libsm6 libthai-data libthai0 libtiff6 libwebp7
  libwebpdemux2 libwebpmux3 libwmflite-0.2-7 libx265-199 libxcb-render0 libxcb-shm0 libxrender1 libxt6 netpbm poppler-data
  x11-common xfonts-encodings xfonts-utils
Suggested packages:
  fonts-noto fonts-freefont-otf | fonts-freefont-ttf fonts-texgyre imagemagick-doc autotrace cups-bsd | lpr | lprng enscript ffmpeg
  gimp gnuplot grads graphviz hp2xx html2ps libwmf-bin mplayer povray radiance sane-utils texlive-base-bin transfig ufraw-batch
  xdg-utils cups-common libfftw3-bin libfftw3-dev liblcms2-utils inkscape poppler-utils fonts-japanese-mincho | fonts-ipafont-mincho
  fonts-japanese-gothic | fonts-ipafont-gothic fonts-arphic-ukai fonts-arphic-uming fonts-nanum
The following NEW packages will be installed:
  fontconfig fontconfig-config fonts-dejavu-core fonts-droid-fallback fonts-noto-mono fonts-urw-base35 ghostscript gsfonts
  hicolor-icon-theme imagemagick imagemagick-6-common imagemagick-6.q16 libaom3 libavahi-client3 libavahi-common-data
  libavahi-common3 libcairo2 libcups2 libdatrie1 libdav1d6 libde265-0 libdeflate0 libdjvulibre-text libdjvulibre21 libfftw3-double3
  libfontconfig1 libfontenc1 libfribidi0 libgomp1 libgraphite2-3 libgs-common libgs10 libgs10-common libharfbuzz0b libheif1 libice6
  libidn12 libijs-0.35 libimath-3-1-29 libjbig0 libjbig2dec0 libjpeg62-turbo libjxr-tools libjxr0 liblcms2-2 liblerc4 liblqr-1-0
  libltdl7 libmagickcore-6.q16-6 libmagickcore-6.q16-6-extra libmagickwand-6.q16-6 libnetpbm11 libopenexr-3-1-30 libopenjp2-7
  libpango-1.0-0 libpangocairo-1.0-0 libpangoft2-1.0-0 libpaper-utils libpaper1 libpixman-1-0 libsm6 libthai-data libthai0 libtiff6
  libwebp7 libwebpdemux2 libwebpmux3 libwmflite-0.2-7 libx265-199 libxcb-render0 libxcb-shm0 libxrender1 libxt6 netpbm poppler-data
  x11-common xfonts-encodings xfonts-utils
0 upgraded, 78 newly installed, 0 to remove and 61 not upgraded.
Need to get 39.9 MB of archives.
After this operation, 140 MB of additional disk space will be used.
Get:1 http://security.debian.org/debian-security bookworm-security/main amd64 imagemagick-6-common all 8:6.9.11.60+dfsg-1.6+deb12u12 [174 kB]
Get:2 http://security.debian.org/debian-security bookworm-security/main amd64 libmagickcore-6.q16-6 amd64 8:6.9.11.60+dfsg-1.6+deb12u12 [1,805 kB]
Get:3 http://deb.debian.org/debian bookworm/main amd64 fonts-droid-fallback all 1:6.0.1r16-1.1 [1,807 kB]
Get:4 http://security.debian.org/debian-security bookworm-security/main amd64 libmagickwand-6.q16-6 amd64 8:6.9.11.60+dfsg-1.6+deb12u12 [417 kB]
Get:5 http://security.debian.org/debian-security bookworm-security/main amd64 imagemagick-6.q16 amd64 8:6.9.11.60+dfsg-1.6+deb12u12 [347 kB]
Get:6 http://deb.debian.org/debian bookworm/main amd64 libgomp1 amd64 12.2.0-14+deb12u1 [116 kB]
Get:7 http://deb.debian.org/debian bookworm/main amd64 libfftw3-double3 amd64 3.3.10-1 [776 kB]
Get:8 http://security.debian.org/debian-security bookworm-security/main amd64 imagemagick amd64 8:6.9.11.60+dfsg-1.6+deb12u12 [131 kB]
Get:9 http://security.debian.org/debian-security bookworm-security/main amd64 libmagickcore-6.q16-6-extra amd64 8:6.9.11.60+dfsg-1.6+deb12u12 [182 kB]
Get:10 http://deb.debian.org/debian bookworm/main amd64 fonts-dejavu-core all 2.37-6 [1,068 kB]
Get:11 http://deb.debian.org/debian bookworm/main amd64 libfontenc1 amd64 1:1.1.4-1 [24.3 kB]
Get:12 http://deb.debian.org/debian bookworm/main amd64 x11-common all 1:7.7+23 [252 kB]
Get:13 http://deb.debian.org/debian bookworm/main amd64 xfonts-encodings all 1:1.0.4-2.2 [577 kB]
Get:14 http://deb.debian.org/debian bookworm/main amd64 xfonts-utils amd64 1:7.7+6 [93.0 kB]
Get:15 http://deb.debian.org/debian bookworm/main amd64 fonts-urw-base35 all 20200910-7 [10.8 MB]
Get:16 http://deb.debian.org/debian bookworm/main amd64 fontconfig-config amd64 2.14.1-4 [315 kB]
Get:17 http://deb.debian.org/debian bookworm/main amd64 libfontconfig1 amd64 2.14.1-4 [386 kB]
Get:18 http://deb.debian.org/debian bookworm/main amd64 libaom3 amd64 3.6.0-1+deb12u2 [1,850 kB]
Get:19 http://deb.debian.org/debian bookworm/main amd64 libdav1d6 amd64 1.0.0-2+deb12u1 [513 kB]
Get:20 http://deb.debian.org/debian bookworm/main amd64 libde265-0 amd64 1.0.11-1+deb12u2 [185 kB]
Get:21 http://deb.debian.org/debian bookworm/main amd64 libx265-199 amd64 3.5-2+b1 [1,150 kB]
Get:22 http://deb.debian.org/debian bookworm/main amd64 libheif1 amd64 1.15.1-1+deb12u1 [215 kB]
Get:23 http://deb.debian.org/debian bookworm/main amd64 libjbig0 amd64 2.1-6.1 [31.7 kB]
Get:24 http://deb.debian.org/debian bookworm/main amd64 libjpeg62-turbo amd64 1:2.1.5-2 [166 kB]
Get:25 http://deb.debian.org/debian bookworm/main amd64 liblcms2-2 amd64 2.14-2+deb12u1 [154 kB]
Get:26 http://deb.debian.org/debian bookworm/main amd64 liblqr-1-0 amd64 0.4.2-2.1 [29.1 kB]
Get:27 http://deb.debian.org/debian bookworm/main amd64 libltdl7 amd64 2.4.7-7~deb12u1 [393 kB]
Get:28 http://deb.debian.org/debian bookworm/main amd64 libopenjp2-7 amd64 2.5.0-2+deb12u3 [189 kB]
Get:29 http://deb.debian.org/debian bookworm/main amd64 libdeflate0 amd64 1.14-1 [61.4 kB]
Get:30 http://deb.debian.org/debian bookworm/main amd64 liblerc4 amd64 4.0.0+ds-2 [170 kB]
Get:31 http://deb.debian.org/debian bookworm/main amd64 libwebp7 amd64 1.2.4-0.2+deb12u1 [286 kB]
Get:32 http://deb.debian.org/debian bookworm/main amd64 libtiff6 amd64 4.5.0-6+deb12u4 [316 kB]
Get:33 http://deb.debian.org/debian bookworm/main amd64 libwebpdemux2 amd64 1.2.4-0.2+deb12u1 [99.4 kB]
Get:34 http://deb.debian.org/debian bookworm/main amd64 libwebpmux3 amd64 1.2.4-0.2+deb12u1 [109 kB]
Get:35 http://deb.debian.org/debian bookworm/main amd64 poppler-data all 0.4.12-1 [1,601 kB]
Get:36 http://deb.debian.org/debian bookworm/main amd64 fontconfig amd64 2.14.1-4 [449 kB]
Get:37 http://deb.debian.org/debian bookworm/main amd64 fonts-noto-mono all 20201225-1 [402 kB]
Get:38 http://deb.debian.org/debian bookworm/main amd64 libgs-common all 10.0.0~dfsg-11+deb12u8 [149 kB]
Get:39 http://deb.debian.org/debian bookworm/main amd64 libgs10-common all 10.0.0~dfsg-11+deb12u8 [587 kB]
Get:40 http://deb.debian.org/debian bookworm/main amd64 libavahi-common-data amd64 0.8-10+deb12u1 [107 kB]
Get:41 http://deb.debian.org/debian bookworm/main amd64 libavahi-common3 amd64 0.8-10+deb12u1 [42.1 kB]
Get:42 http://deb.debian.org/debian bookworm/main amd64 libavahi-client3 amd64 0.8-10+deb12u1 [45.8 kB]
Get:43 http://deb.debian.org/debian bookworm/main amd64 libcups2 amd64 2.4.2-3+deb12u9 [245 kB]
Get:44 http://deb.debian.org/debian bookworm/main amd64 libidn12 amd64 1.41-1 [83.8 kB]
Get:45 http://deb.debian.org/debian bookworm/main amd64 libijs-0.35 amd64 0.35-15 [16.4 kB]
Get:46 http://deb.debian.org/debian bookworm/main amd64 libjbig2dec0 amd64 0.19-3 [67.2 kB]
Get:47 http://deb.debian.org/debian bookworm/main amd64 libpaper1 amd64 1.1.29 [12.5 kB]
Get:48 http://deb.debian.org/debian bookworm/main amd64 libice6 amd64 2:1.0.10-1 [58.5 kB]
Get:49 http://deb.debian.org/debian bookworm/main amd64 libsm6 amd64 2:1.2.3-1 [35.1 kB]
Get:50 http://deb.debian.org/debian bookworm/main amd64 libxt6 amd64 1:1.2.1-1.1 [186 kB]
Get:51 http://deb.debian.org/debian bookworm/main amd64 libgs10 amd64 10.0.0~dfsg-11+deb12u8 [2,467 kB]
Get:52 http://deb.debian.org/debian bookworm/main amd64 ghostscript amd64 10.0.0~dfsg-11+deb12u8 [57.8 kB]
Get:53 http://deb.debian.org/debian bookworm/main amd64 gsfonts all 2:20200910-7 [18.5 kB]
Get:54 http://deb.debian.org/debian bookworm/main amd64 hicolor-icon-theme all 0.17-2 [11.4 kB]
Get:55 http://deb.debian.org/debian bookworm/main amd64 libpixman-1-0 amd64 0.42.2-1 [546 kB]
Get:56 http://deb.debian.org/debian bookworm/main amd64 libxcb-render0 amd64 1.15-1 [115 kB]
Get:57 http://deb.debian.org/debian bookworm/main amd64 libxcb-shm0 amd64 1.15-1 [105 kB]
Get:58 http://deb.debian.org/debian bookworm/main amd64 libxrender1 amd64 1:0.9.10-1.1 [33.2 kB]
Get:59 http://deb.debian.org/debian bookworm/main amd64 libcairo2 amd64 1.16.0-7 [575 kB]
Get:60 http://deb.debian.org/debian bookworm/main amd64 libdatrie1 amd64 0.2.13-2+b1 [43.3 kB]
Get:61 http://deb.debian.org/debian bookworm/main amd64 libdjvulibre-text all 3.5.28-2.2~deb12u1 [52.1 kB]
Get:62 http://deb.debian.org/debian bookworm/main amd64 libdjvulibre21 amd64 3.5.28-2.2~deb12u1 [585 kB]
Get:63 http://deb.debian.org/debian bookworm/main amd64 libfribidi0 amd64 1.0.8-2.1 [65.0 kB]
Get:64 http://deb.debian.org/debian bookworm/main amd64 libgraphite2-3 amd64 1.3.14-1+deb12u1 [74.6 kB]
Get:65 http://deb.debian.org/debian bookworm/main amd64 libharfbuzz0b amd64 6.0.0+dfsg-3 [1,945 kB]
Get:66 http://deb.debian.org/debian bookworm/main amd64 libimath-3-1-29 amd64 3.1.6-1 [47.4 kB]
Get:67 http://deb.debian.org/debian bookworm/main amd64 libjxr0 amd64 1.2~git20170615.f752187-5 [162 kB]
Get:68 http://deb.debian.org/debian bookworm/main amd64 libjxr-tools amd64 1.2~git20170615.f752187-5 [17.3 kB]
Get:69 http://deb.debian.org/debian bookworm/main amd64 libopenexr-3-1-30 amd64 3.1.5-5 [923 kB]
Get:70 http://deb.debian.org/debian bookworm/main amd64 libthai-data all 0.1.29-1 [176 kB]
Get:71 http://deb.debian.org/debian bookworm/main amd64 libthai0 amd64 0.1.29-1 [57.5 kB]
Get:72 http://deb.debian.org/debian bookworm/main amd64 libpango-1.0-0 amd64 1.50.12+ds-1 [212 kB]
Get:73 http://deb.debian.org/debian bookworm/main amd64 libpangoft2-1.0-0 amd64 1.50.12+ds-1 [47.4 kB]
Get:74 http://deb.debian.org/debian bookworm/main amd64 libpangocairo-1.0-0 amd64 1.50.12+ds-1 [34.2 kB]
Get:75 http://deb.debian.org/debian bookworm/main amd64 libwmflite-0.2-7 amd64 0.2.12-5.1 [75.2 kB]
Get:76 http://deb.debian.org/debian bookworm/main amd64 libnetpbm11 amd64 2:11.01.00-2 [174 kB]
Get:77 http://deb.debian.org/debian bookworm/main amd64 libpaper-utils amd64 1.1.29 [8,868 B]
Get:78 http://deb.debian.org/debian bookworm/main amd64 netpbm amd64 2:11.01.00-2 [2,015 kB]
Fetched 39.9 MB in 2s (20.4 MB/s)
Extracting templates from packages: 100%
Preconfiguring packages ...
Selecting previously unselected package fonts-droid-fallback.
(Reading database ... 34021 files and directories currently installed.)
Preparing to unpack .../00-fonts-droid-fallback_1%3a6.0.1r16-1.1_all.deb ...
Unpacking fonts-droid-fallback (1:6.0.1r16-1.1) ...
Selecting previously unselected package libgomp1:amd64.
Preparing to unpack .../01-libgomp1_12.2.0-14+deb12u1_amd64.deb ...
Unpacking libgomp1:amd64 (12.2.0-14+deb12u1) ...
Selecting previously unselected package libfftw3-double3:amd64.
Preparing to unpack .../02-libfftw3-double3_3.3.10-1_amd64.deb ...
Unpacking libfftw3-double3:amd64 (3.3.10-1) ...
Selecting previously unselected package fonts-dejavu-core.
Preparing to unpack .../03-fonts-dejavu-core_2.37-6_all.deb ...
Unpacking fonts-dejavu-core (2.37-6) ...
Selecting previously unselected package libfontenc1:amd64.
Preparing to unpack .../04-libfontenc1_1%3a1.1.4-1_amd64.deb ...
Unpacking libfontenc1:amd64 (1:1.1.4-1) ...
Selecting previously unselected package x11-common.
Preparing to unpack .../05-x11-common_1%3a7.7+23_all.deb ...
Unpacking x11-common (1:7.7+23) ...
Selecting previously unselected package xfonts-encodings.
Preparing to unpack .../06-xfonts-encodings_1%3a1.0.4-2.2_all.deb ...
Unpacking xfonts-encodings (1:1.0.4-2.2) ...
Selecting previously unselected package xfonts-utils.
Preparing to unpack .../07-xfonts-utils_1%3a7.7+6_amd64.deb ...
Unpacking xfonts-utils (1:7.7+6) ...
Selecting previously unselected package fonts-urw-base35.
Preparing to unpack .../08-fonts-urw-base35_20200910-7_all.deb ...
Unpacking fonts-urw-base35 (20200910-7) ...
Selecting previously unselected package fontconfig-config.
Preparing to unpack .../09-fontconfig-config_2.14.1-4_amd64.deb ...
Unpacking fontconfig-config (2.14.1-4) ...
Selecting previously unselected package libfontconfig1:amd64.
Preparing to unpack .../10-libfontconfig1_2.14.1-4_amd64.deb ...
Unpacking libfontconfig1:amd64 (2.14.1-4) ...
Selecting previously unselected package libaom3:amd64.
Preparing to unpack .../11-libaom3_3.6.0-1+deb12u2_amd64.deb ...
Unpacking libaom3:amd64 (3.6.0-1+deb12u2) ...
Selecting previously unselected package libdav1d6:amd64.
Preparing to unpack .../12-libdav1d6_1.0.0-2+deb12u1_amd64.deb ...
Unpacking libdav1d6:amd64 (1.0.0-2+deb12u1) ...
Selecting previously unselected package libde265-0:amd64.
Preparing to unpack .../13-libde265-0_1.0.11-1+deb12u2_amd64.deb ...
Unpacking libde265-0:amd64 (1.0.11-1+deb12u2) ...
Selecting previously unselected package libx265-199:amd64.
Preparing to unpack .../14-libx265-199_3.5-2+b1_amd64.deb ...
Unpacking libx265-199:amd64 (3.5-2+b1) ...
Selecting previously unselected package libheif1:amd64.
Preparing to unpack .../15-libheif1_1.15.1-1+deb12u1_amd64.deb ...
Unpacking libheif1:amd64 (1.15.1-1+deb12u1) ...
Selecting previously unselected package libjbig0:amd64.
Preparing to unpack .../16-libjbig0_2.1-6.1_amd64.deb ...
Unpacking libjbig0:amd64 (2.1-6.1) ...
Selecting previously unselected package libjpeg62-turbo:amd64.
Preparing to unpack .../17-libjpeg62-turbo_1%3a2.1.5-2_amd64.deb ...
Unpacking libjpeg62-turbo:amd64 (1:2.1.5-2) ...
Selecting previously unselected package liblcms2-2:amd64.
Preparing to unpack .../18-liblcms2-2_2.14-2+deb12u1_amd64.deb ...
Unpacking liblcms2-2:amd64 (2.14-2+deb12u1) ...
Selecting previously unselected package liblqr-1-0:amd64.
Preparing to unpack .../19-liblqr-1-0_0.4.2-2.1_amd64.deb ...
Unpacking liblqr-1-0:amd64 (0.4.2-2.1) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../20-libltdl7_2.4.7-7~deb12u1_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.7-7~deb12u1) ...
Selecting previously unselected package libopenjp2-7:amd64.
Preparing to unpack .../21-libopenjp2-7_2.5.0-2+deb12u3_amd64.deb ...
Unpacking libopenjp2-7:amd64 (2.5.0-2+deb12u3) ...
Selecting previously unselected package libdeflate0:amd64.
Preparing to unpack .../22-libdeflate0_1.14-1_amd64.deb ...
Unpacking libdeflate0:amd64 (1.14-1) ...
Selecting previously unselected package liblerc4:amd64.
Preparing to unpack .../23-liblerc4_4.0.0+ds-2_amd64.deb ...
Unpacking liblerc4:amd64 (4.0.0+ds-2) ...
Selecting previously unselected package libwebp7:amd64.
Preparing to unpack .../24-libwebp7_1.2.4-0.2+deb12u1_amd64.deb ...
Unpacking libwebp7:amd64 (1.2.4-0.2+deb12u1) ...
Selecting previously unselected package libtiff6:amd64.
Preparing to unpack .../25-libtiff6_4.5.0-6+deb12u4_amd64.deb ...
Unpacking libtiff6:amd64 (4.5.0-6+deb12u4) ...
Selecting previously unselected package libwebpdemux2:amd64.
Preparing to unpack .../26-libwebpdemux2_1.2.4-0.2+deb12u1_amd64.deb ...
Unpacking libwebpdemux2:amd64 (1.2.4-0.2+deb12u1) ...
Selecting previously unselected package libwebpmux3:amd64.
Preparing to unpack .../27-libwebpmux3_1.2.4-0.2+deb12u1_amd64.deb ...
Unpacking libwebpmux3:amd64 (1.2.4-0.2+deb12u1) ...
Selecting previously unselected package imagemagick-6-common.
Preparing to unpack .../28-imagemagick-6-common_8%3a6.9.11.60+dfsg-1.6+deb12u12_all.deb ...
Unpacking imagemagick-6-common (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Selecting previously unselected package libmagickcore-6.q16-6:amd64.
Preparing to unpack .../29-libmagickcore-6.q16-6_8%3a6.9.11.60+dfsg-1.6+deb12u12_amd64.deb ...
Unpacking libmagickcore-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Selecting previously unselected package libmagickwand-6.q16-6:amd64.
Preparing to unpack .../30-libmagickwand-6.q16-6_8%3a6.9.11.60+dfsg-1.6+deb12u12_amd64.deb ...
Unpacking libmagickwand-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Selecting previously unselected package poppler-data.
Preparing to unpack .../31-poppler-data_0.4.12-1_all.deb ...
Unpacking poppler-data (0.4.12-1) ...
Selecting previously unselected package fontconfig.
Preparing to unpack .../32-fontconfig_2.14.1-4_amd64.deb ...
Unpacking fontconfig (2.14.1-4) ...
Selecting previously unselected package fonts-noto-mono.
Preparing to unpack .../33-fonts-noto-mono_20201225-1_all.deb ...
Unpacking fonts-noto-mono (20201225-1) ...
Selecting previously unselected package libgs-common.
Preparing to unpack .../34-libgs-common_10.0.0~dfsg-11+deb12u8_all.deb ...
Unpacking libgs-common (10.0.0~dfsg-11+deb12u8) ...
Selecting previously unselected package libgs10-common.
Preparing to unpack .../35-libgs10-common_10.0.0~dfsg-11+deb12u8_all.deb ...
Unpacking libgs10-common (10.0.0~dfsg-11+deb12u8) ...
Selecting previously unselected package libavahi-common-data:amd64.
Preparing to unpack .../36-libavahi-common-data_0.8-10+deb12u1_amd64.deb ...
Unpacking libavahi-common-data:amd64 (0.8-10+deb12u1) ...
Selecting previously unselected package libavahi-common3:amd64.
Preparing to unpack .../37-libavahi-common3_0.8-10+deb12u1_amd64.deb ...
Unpacking libavahi-common3:amd64 (0.8-10+deb12u1) ...
Selecting previously unselected package libavahi-client3:amd64.
Preparing to unpack .../38-libavahi-client3_0.8-10+deb12u1_amd64.deb ...
Unpacking libavahi-client3:amd64 (0.8-10+deb12u1) ...
Selecting previously unselected package libcups2:amd64.
Preparing to unpack .../39-libcups2_2.4.2-3+deb12u9_amd64.deb ...
Unpacking libcups2:amd64 (2.4.2-3+deb12u9) ...
Selecting previously unselected package libidn12:amd64.
Preparing to unpack .../40-libidn12_1.41-1_amd64.deb ...
Unpacking libidn12:amd64 (1.41-1) ...
Selecting previously unselected package libijs-0.35:amd64.
Preparing to unpack .../41-libijs-0.35_0.35-15_amd64.deb ...
Unpacking libijs-0.35:amd64 (0.35-15) ...
Selecting previously unselected package libjbig2dec0:amd64.
Preparing to unpack .../42-libjbig2dec0_0.19-3_amd64.deb ...
Unpacking libjbig2dec0:amd64 (0.19-3) ...
Selecting previously unselected package libpaper1:amd64.
Preparing to unpack .../43-libpaper1_1.1.29_amd64.deb ...
Unpacking libpaper1:amd64 (1.1.29) ...
Selecting previously unselected package libice6:amd64.
Preparing to unpack .../44-libice6_2%3a1.0.10-1_amd64.deb ...
Unpacking libice6:amd64 (2:1.0.10-1) ...
Selecting previously unselected package libsm6:amd64.
Preparing to unpack .../45-libsm6_2%3a1.2.3-1_amd64.deb ...
Unpacking libsm6:amd64 (2:1.2.3-1) ...
Selecting previously unselected package libxt6:amd64.
Preparing to unpack .../46-libxt6_1%3a1.2.1-1.1_amd64.deb ...
Unpacking libxt6:amd64 (1:1.2.1-1.1) ...
Selecting previously unselected package libgs10:amd64.
Preparing to unpack .../47-libgs10_10.0.0~dfsg-11+deb12u8_amd64.deb ...
Unpacking libgs10:amd64 (10.0.0~dfsg-11+deb12u8) ...
Selecting previously unselected package ghostscript.
Preparing to unpack .../48-ghostscript_10.0.0~dfsg-11+deb12u8_amd64.deb ...
Unpacking ghostscript (10.0.0~dfsg-11+deb12u8) ...
Selecting previously unselected package gsfonts.
Preparing to unpack .../49-gsfonts_2%3a20200910-7_all.deb ...
Unpacking gsfonts (2:20200910-7) ...
Selecting previously unselected package hicolor-icon-theme.
Preparing to unpack .../50-hicolor-icon-theme_0.17-2_all.deb ...
Unpacking hicolor-icon-theme (0.17-2) ...
Selecting previously unselected package imagemagick-6.q16.
Preparing to unpack .../51-imagemagick-6.q16_8%3a6.9.11.60+dfsg-1.6+deb12u12_amd64.deb ...
Unpacking imagemagick-6.q16 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Selecting previously unselected package imagemagick.
Preparing to unpack .../52-imagemagick_8%3a6.9.11.60+dfsg-1.6+deb12u12_amd64.deb ...
Unpacking imagemagick (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Selecting previously unselected package libpixman-1-0:amd64.
Preparing to unpack .../53-libpixman-1-0_0.42.2-1_amd64.deb ...
Unpacking libpixman-1-0:amd64 (0.42.2-1) ...
Selecting previously unselected package libxcb-render0:amd64.
Preparing to unpack .../54-libxcb-render0_1.15-1_amd64.deb ...
Unpacking libxcb-render0:amd64 (1.15-1) ...
Selecting previously unselected package libxcb-shm0:amd64.
Preparing to unpack .../55-libxcb-shm0_1.15-1_amd64.deb ...
Unpacking libxcb-shm0:amd64 (1.15-1) ...
Selecting previously unselected package libxrender1:amd64.
Preparing to unpack .../56-libxrender1_1%3a0.9.10-1.1_amd64.deb ...
Unpacking libxrender1:amd64 (1:0.9.10-1.1) ...
Selecting previously unselected package libcairo2:amd64.
Preparing to unpack .../57-libcairo2_1.16.0-7_amd64.deb ...
Unpacking libcairo2:amd64 (1.16.0-7) ...
Selecting previously unselected package libdatrie1:amd64.
Preparing to unpack .../58-libdatrie1_0.2.13-2+b1_amd64.deb ...
Unpacking libdatrie1:amd64 (0.2.13-2+b1) ...
Selecting previously unselected package libdjvulibre-text.
Preparing to unpack .../59-libdjvulibre-text_3.5.28-2.2~deb12u1_all.deb ...
Unpacking libdjvulibre-text (3.5.28-2.2~deb12u1) ...
Selecting previously unselected package libdjvulibre21:amd64.
Preparing to unpack .../60-libdjvulibre21_3.5.28-2.2~deb12u1_amd64.deb ...
Unpacking libdjvulibre21:amd64 (3.5.28-2.2~deb12u1) ...
Selecting previously unselected package libfribidi0:amd64.
Preparing to unpack .../61-libfribidi0_1.0.8-2.1_amd64.deb ...
Unpacking libfribidi0:amd64 (1.0.8-2.1) ...
Selecting previously unselected package libgraphite2-3:amd64.
Preparing to unpack .../62-libgraphite2-3_1.3.14-1+deb12u1_amd64.deb ...
Unpacking libgraphite2-3:amd64 (1.3.14-1+deb12u1) ...
Selecting previously unselected package libharfbuzz0b:amd64.
Preparing to unpack .../63-libharfbuzz0b_6.0.0+dfsg-3_amd64.deb ...
Unpacking libharfbuzz0b:amd64 (6.0.0+dfsg-3) ...
Selecting previously unselected package libimath-3-1-29:amd64.
Preparing to unpack .../64-libimath-3-1-29_3.1.6-1_amd64.deb ...
Unpacking libimath-3-1-29:amd64 (3.1.6-1) ...
Selecting previously unselected package libjxr0:amd64.
Preparing to unpack .../65-libjxr0_1.2~git20170615.f752187-5_amd64.deb ...
Unpacking libjxr0:amd64 (1.2~git20170615.f752187-5) ...
Selecting previously unselected package libjxr-tools.
Preparing to unpack .../66-libjxr-tools_1.2~git20170615.f752187-5_amd64.deb ...
Unpacking libjxr-tools (1.2~git20170615.f752187-5) ...
Selecting previously unselected package libopenexr-3-1-30:amd64.
Preparing to unpack .../67-libopenexr-3-1-30_3.1.5-5_amd64.deb ...
Unpacking libopenexr-3-1-30:amd64 (3.1.5-5) ...
Selecting previously unselected package libthai-data.
Preparing to unpack .../68-libthai-data_0.1.29-1_all.deb ...
Unpacking libthai-data (0.1.29-1) ...
Selecting previously unselected package libthai0:amd64.
Preparing to unpack .../69-libthai0_0.1.29-1_amd64.deb ...
Unpacking libthai0:amd64 (0.1.29-1) ...
Selecting previously unselected package libpango-1.0-0:amd64.
Preparing to unpack .../70-libpango-1.0-0_1.50.12+ds-1_amd64.deb ...
Unpacking libpango-1.0-0:amd64 (1.50.12+ds-1) ...
Selecting previously unselected package libpangoft2-1.0-0:amd64.
Preparing to unpack .../71-libpangoft2-1.0-0_1.50.12+ds-1_amd64.deb ...
Unpacking libpangoft2-1.0-0:amd64 (1.50.12+ds-1) ...
Selecting previously unselected package libpangocairo-1.0-0:amd64.
Preparing to unpack .../72-libpangocairo-1.0-0_1.50.12+ds-1_amd64.deb ...
Unpacking libpangocairo-1.0-0:amd64 (1.50.12+ds-1) ...
Selecting previously unselected package libwmflite-0.2-7:amd64.
Preparing to unpack .../73-libwmflite-0.2-7_0.2.12-5.1_amd64.deb ...
Unpacking libwmflite-0.2-7:amd64 (0.2.12-5.1) ...
Selecting previously unselected package libmagickcore-6.q16-6-extra:amd64.
Preparing to unpack .../74-libmagickcore-6.q16-6-extra_8%3a6.9.11.60+dfsg-1.6+deb12u12_amd64.deb ...
Unpacking libmagickcore-6.q16-6-extra:amd64 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Selecting previously unselected package libnetpbm11:amd64.
Preparing to unpack .../75-libnetpbm11_2%3a11.01.00-2_amd64.deb ...
Unpacking libnetpbm11:amd64 (2:11.01.00-2) ...
Selecting previously unselected package libpaper-utils.
Preparing to unpack .../76-libpaper-utils_1.1.29_amd64.deb ...
Unpacking libpaper-utils (1.1.29) ...
Selecting previously unselected package netpbm.
Preparing to unpack .../77-netpbm_2%3a11.01.00-2_amd64.deb ...
Unpacking netpbm (2:11.01.00-2) ...
Setting up libgraphite2-3:amd64 (1.3.14-1+deb12u1) ...
Setting up liblcms2-2:amd64 (2.14-2+deb12u1) ...
Setting up libpixman-1-0:amd64 (0.42.2-1) ...
Setting up libpaper1:amd64 (1.1.29) ...

Creating config file /etc/papersize with new version
Setting up libaom3:amd64 (3.6.0-1+deb12u2) ...
Setting up imagemagick-6-common (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Setting up liblerc4:amd64 (4.0.0+ds-2) ...
Setting up fonts-noto-mono (20201225-1) ...
Setting up hicolor-icon-theme (0.17-2) ...
Setting up libwmflite-0.2-7:amd64 (0.2.12-5.1) ...
Setting up libxrender1:amd64 (1:0.9.10-1.1) ...
Setting up libdatrie1:amd64 (0.2.13-2+b1) ...
Setting up libxcb-render0:amd64 (1.15-1) ...
Setting up libijs-0.35:amd64 (0.35-15) ...
Setting up libjxr0:amd64 (1.2~git20170615.f752187-5) ...
Setting up libgs-common (10.0.0~dfsg-11+deb12u8) ...
Setting up x11-common (1:7.7+23) ...
Setting up libnetpbm11:amd64 (2:11.01.00-2) ...
Setting up libdeflate0:amd64 (1.14-1) ...
Setting up libxcb-shm0:amd64 (1.15-1) ...
Setting up libpaper-utils (1.1.29) ...
Setting up libgomp1:amd64 (12.2.0-14+deb12u1) ...
Setting up libimath-3-1-29:amd64 (3.1.6-1) ...
Setting up libjbig0:amd64 (2.1-6.1) ...
Setting up poppler-data (0.4.12-1) ...
Setting up libfontenc1:amd64 (1:1.1.4-1) ...
Setting up libjpeg62-turbo:amd64 (1:2.1.5-2) ...
Setting up libjbig2dec0:amd64 (0.19-3) ...
Setting up libavahi-common-data:amd64 (0.8-10+deb12u1) ...
Setting up xfonts-encodings (1:1.0.4-2.2) ...
Setting up libopenexr-3-1-30:amd64 (3.1.5-5) ...
Setting up libfribidi0:amd64 (1.0.8-2.1) ...
Setting up libidn12:amd64 (1.41-1) ...
Setting up fonts-dejavu-core (2.37-6) ...
Setting up libdav1d6:amd64 (1.0.0-2+deb12u1) ...
Setting up libltdl7:amd64 (2.4.7-7~deb12u1) ...
Setting up libfftw3-double3:amd64 (3.3.10-1) ...
Setting up libx265-199:amd64 (3.5-2+b1) ...
Setting up libwebp7:amd64 (1.2.4-0.2+deb12u1) ...
Setting up liblqr-1-0:amd64 (0.4.2-2.1) ...
Setting up libtiff6:amd64 (4.5.0-6+deb12u4) ...
Setting up libopenjp2-7:amd64 (2.5.0-2+deb12u3) ...
Setting up libharfbuzz0b:amd64 (6.0.0+dfsg-3) ...
Setting up libthai-data (0.1.29-1) ...
Setting up fonts-droid-fallback (1:6.0.1r16-1.1) ...
Setting up libdjvulibre-text (3.5.28-2.2~deb12u1) ...
Setting up libde265-0:amd64 (1.0.11-1+deb12u2) ...
Setting up libwebpmux3:amd64 (1.2.4-0.2+deb12u1) ...
Setting up libice6:amd64 (2:1.0.10-1) ...
Setting up libjxr-tools (1.2~git20170615.f752187-5) ...
Setting up fontconfig-config (2.14.1-4) ...
Setting up libwebpdemux2:amd64 (1.2.4-0.2+deb12u1) ...
Setting up libheif1:amd64 (1.15.1-1+deb12u1) ...
Setting up libdjvulibre21:amd64 (3.5.28-2.2~deb12u1) ...
Setting up libavahi-common3:amd64 (0.8-10+deb12u1) ...
Setting up xfonts-utils (1:7.7+6) ...
Setting up libthai0:amd64 (0.1.29-1) ...
Setting up netpbm (2:11.01.00-2) ...
Setting up libfontconfig1:amd64 (2.14.1-4) ...
Setting up libsm6:amd64 (2:1.2.3-1) ...
Setting up libavahi-client3:amd64 (0.8-10+deb12u1) ...
Setting up fontconfig (2.14.1-4) ...
Regenerating fonts cache... done.
Setting up libpango-1.0-0:amd64 (1.50.12+ds-1) ...
Setting up fonts-urw-base35 (20200910-7) ...
Setting up libcairo2:amd64 (1.16.0-7) ...
Setting up libmagickcore-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Setting up gsfonts (2:20200910-7) ...
Setting up libxt6:amd64 (1:1.2.1-1.1) ...
Setting up libcups2:amd64 (2.4.2-3+deb12u9) ...
Setting up libmagickwand-6.q16-6:amd64 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Setting up libpangoft2-1.0-0:amd64 (1.50.12+ds-1) ...
Setting up libpangocairo-1.0-0:amd64 (1.50.12+ds-1) ...
Setting up libgs10-common (10.0.0~dfsg-11+deb12u8) ...
Setting up libmagickcore-6.q16-6-extra:amd64 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Setting up imagemagick-6.q16 (8:6.9.11.60+dfsg-1.6+deb12u12) ...
update-alternatives: using /usr/bin/compare-im6.q16 to provide /usr/bin/compare (compare) in auto mode
update-alternatives: using /usr/bin/compare-im6.q16 to provide /usr/bin/compare-im6 (compare-im6) in auto mode
update-alternatives: using /usr/bin/animate-im6.q16 to provide /usr/bin/animate (animate) in auto mode
update-alternatives: using /usr/bin/animate-im6.q16 to provide /usr/bin/animate-im6 (animate-im6) in auto mode
update-alternatives: using /usr/bin/convert-im6.q16 to provide /usr/bin/convert (convert) in auto mode
update-alternatives: using /usr/bin/convert-im6.q16 to provide /usr/bin/convert-im6 (convert-im6) in auto mode
update-alternatives: using /usr/bin/composite-im6.q16 to provide /usr/bin/composite (composite) in auto mode
update-alternatives: using /usr/bin/composite-im6.q16 to provide /usr/bin/composite-im6 (composite-im6) in auto mode
update-alternatives: using /usr/bin/conjure-im6.q16 to provide /usr/bin/conjure (conjure) in auto mode
update-alternatives: using /usr/bin/conjure-im6.q16 to provide /usr/bin/conjure-im6 (conjure-im6) in auto mode
update-alternatives: using /usr/bin/import-im6.q16 to provide /usr/bin/import (import) in auto mode
update-alternatives: using /usr/bin/import-im6.q16 to provide /usr/bin/import-im6 (import-im6) in auto mode
update-alternatives: using /usr/bin/identify-im6.q16 to provide /usr/bin/identify (identify) in auto mode
update-alternatives: using /usr/bin/identify-im6.q16 to provide /usr/bin/identify-im6 (identify-im6) in auto mode
update-alternatives: using /usr/bin/stream-im6.q16 to provide /usr/bin/stream (stream) in auto mode
update-alternatives: using /usr/bin/stream-im6.q16 to provide /usr/bin/stream-im6 (stream-im6) in auto mode
update-alternatives: using /usr/bin/display-im6.q16 to provide /usr/bin/display (display) in auto mode
update-alternatives: using /usr/bin/display-im6.q16 to provide /usr/bin/display-im6 (display-im6) in auto mode
update-alternatives: using /usr/bin/montage-im6.q16 to provide /usr/bin/montage (montage) in auto mode
update-alternatives: using /usr/bin/montage-im6.q16 to provide /usr/bin/montage-im6 (montage-im6) in auto mode
update-alternatives: using /usr/bin/mogrify-im6.q16 to provide /usr/bin/mogrify (mogrify) in auto mode
update-alternatives: using /usr/bin/mogrify-im6.q16 to provide /usr/bin/mogrify-im6 (mogrify-im6) in auto mode
Setting up libgs10:amd64 (10.0.0~dfsg-11+deb12u8) ...
Setting up ghostscript (10.0.0~dfsg-11+deb12u8) ...
Setting up imagemagick (8:6.9.11.60+dfsg-1.6+deb12u12) ...
Processing triggers for libc-bin (2.36-9+deb12u13) ...
Processing triggers for man-db (2.11.2-2) ...
Processing triggers for mailcap (3.70+nmu1) ...
root@fira:/var/www/html/pwa# convert -size 512x512 xc:black icon.png
root@fira:/var/www/html/pwa# cat << 'EOF' > sw.js
> const CACHE_NAME = 'time-pwa-v1';
> const ASSETS = ['./', './index.html', './manifest.json', './icon.png'];
>
> self.addEventListener('install', (e) => {
>     e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
> });
>
> self.addEventListener('fetch', (e) => {
>     e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
> });
> EOF
root@fira:/var/www/html/pwa# sudo cat << 'EOF' > /etc/nginx/sites-available/pwa
> server {
>     listen 80;
>     server_name _;
>     root /var/www/html/pwa;
>     index index.html;
>
>     location / {
>         try_files $uri $uri/ =404;
>     }
> }
> EOF
root@fira:/var/www/html/pwa#
root@fira:/var/www/html/pwa# # Enable the configuration and restart Nginx
root@fira:/var/www/html/pwa# sudo ln -sf /etc/etc/nginx/sites-available/pwa /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo systemctl restart nginx
root@fira:/var/www/html/pwa# sudo ln -sf /etc/etc/nginx/sites-available/pwa /etc/nginx/sites-enabled/
root@fira:/var/www/html/pwa# sudo rm -f /etc/nginx/sites-enabled/default
root@fira:/var/www/html/pwa# sudo systemctl restart nginx
Job for nginx.service failed because the control process exited with error code.
See "systemctl status nginx.service" and "journalctl -xeu nginx.service" for details.
root@fira:/var/www/html/pwa# sudo rm -f /etc/nginx/sites-enabled/pwa
root@fira:/var/www/html/pwa# sudo ln -sf /etc/nginx/sites-available/pwa /etc/nginx/sites-enabled/
root@fira:/var/www/html/pwa# sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
root@fira:/var/www/html/pwa# sudo systemctl restart nginx
```

```sh
root@fira:/var/www/html/pwa# sudo rm -f /etc/nginx/sites-enabled/pwa
root@fira:/var/www/html/pwa# sudo ln -sf /etc/nginx/sites-available/pwa /etc/nginx/sites-enabled/
root@fira:/var/www/html/pwa# sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
root@fira:/var/www/html/pwa# sudo systemctl restart nginx
root@fira:/var/www/html/pwa# Connection to 185.238.249.42 closed by remote host.
Connection to 185.238.249.42 closed.
```

# how to check ipinfo on ubuntu

You can check your IP details on Ubuntu using either the quick web API or the official dedicated command-line interface tool.

### Method 1: The Quick Web API (No Installation Required)

If you just want to quickly see your network details, you can use `curl` to query the IPinfo web API. [link](https://askubuntu.com/questions/958360/how-can-i-find-my-internet-service-provider-isp-using-a-bash-script)

- **View your full public IP details**:\
  bash

<!---->

```
curl ipinfo.io
```

Use code with caution.

- **View just your public IP address**:\
  bash

<!---->

```
curl ipinfo.io/ip
```

Use code with caution.

- **Check a specific external IP address**:\
  bash

<!---->

```
curl ipinfo.io/8.8.8.8
```

Use code with caution.

### Method 2: The Official IPinfo CLI Tool (Recommended for Power Users)

For automated tasks, bulk operations, or offline data lookup, install the official IPinfo CLI tool. [link](https://github.com/ipinfo/cli)

1. **Add the repository and install the application**:\
   bash

<!---->

```
echo "deb [trusted=yes] https://ppa.ipinfo.net/ /" | sudo tee "/etc/apt/sources.list.d/ipinfo.ppa.list"
sudo apt update
sudo apt install ipinfo
```

Use code with caution.
2\. **Initialize and log in (Optional)**:\
bash

```
ipinfo init
```

Use code with caution.\
_(Note: You can use it without a token, but registering a free account removes lookup limits.)_
3\. **Query an IP with the CLI tool**:\
bash

```
ipinfo 8.8.8.8
```

Use code with caution.\
[link](https://ipinfo.io/developers/cli)

### Method 3: Check Local Network Info Instead

If you meant you want to check internal network details rather than the external public IP metadata, use standard Ubuntu system commands:

- **View your local IP assignment**:\
  bash

<!---->

```
ip addr show
```

Use code with caution.

- **Get a clean readout of local IPs**:\
  bash

<!---->

```
hostname -I
```

Use code with caution.

If you are writing a script, let me know if you want to parse specific fields from the JSON payload like **geographic location**, **country flags**, or **ISP metadata**. [link](https://www.ucartz.com/clients/knowledgebase/1813/How-to-Find-Linux-Server-Geographic-Location-in-Terminal.html)

- [link](https://askubuntu.com/questions/430853/how-do-i-find-my-internal-ip-address)\
  How do I find my internal ip address?\
  Mar 7, 2014 — There are several ways to find your internal IP address: \* \*\*Click the network icon in the notification area and click Connection ...\
  Ask Ubuntu
- [link](https://github.com/ipinfo/cli)\
  ipinfo/cli: Official Command Line Interface for the ... - GitHub\
  Look up IP details in bulk or one-by-one. Look up ASN details. Summarize the details of up to 1000 IPs at a time. Open a map of IP...\
  GitHub
- [link](https://askubuntu.com/questions/958360/how-can-i-find-my-internet-service-provider-isp-using-a-bash-script)\
  How can I find my Internet Service Provider (ISP) using a bash script?\
  Sep 22, 2017 — 4 Answers. ... You could use e.g. the services of ipinfo.io to determine your public IP including some additional information like...\
  Ask Ubuntu

Show all

## limited. use alternative servers.

You can completely bypass IPinfo's free-tier rate limits and restrictions by querying alternative public API servers directly from your Ubuntu terminal. [link](https://www.iplocate.io/blog/ipinfo-alternatives-2026)

### Geolocation & Rich Metadata Servers

If you need location data, ISP details, or ASN info without registering for an API key, use these public endpoints:

- **[IP-API](https://ip-api.com/) (Most reliable metadata alternative)**:\
  bash

<!---->

```
curl http://ip-api.com
```

Use code with caution.

- **ipapi.co (Clean JSON layout)**:\
  bash

<!---->

```
curl https://ipapi.co
```

Use code with caution.\
[link](https://medium.com/@ipdata%5Fco/what-is-the-best-commercial-ip-geolocation-api-d8195cda7027)

### Plaintext IP-Only Servers

If your scripts are failing because IPinfo is blocking your automated lookups, use these ultra-lightweight text-only fallbacks:

- **[ifconfig.me](https://ifconfig.me/)**:\
  bash

<!---->

```
curl ifconfig.me
```

Use code with caution.

- **icanhazip.com**:\
  bash

<!---->

```
curl icanhazip.com
```

Use code with caution.

- **[ipify.org](https://www.ipify.org/) (High concurrency/No limits)**:\
  bash

<!---->

```
curl https://api.ipify.org
```

Use code with caution.\
[link](https://www.ipify.org/)

### Quick Script: Automatic Failover

If you are writing a Bash script and want it to never fail due to rate limits, paste this into your terminal to query alternative servers sequentially until one succeeds:

bash

```
PUBLIC_IP=$(curl -s ifconfig.me || curl -s icanhazip.com || curl -s api.ipify.org)
echo "Your Public IP is: $PUBLIC_IP"
```

Use code with caution.

Do you need help parsing specific parts of the JSON data (like extracting just the **city** or **ISP** name) using command-line tools like `jq`?

- [link](https://www.iplocate.io/blog/ipinfo-alternatives-2026)\
  5 best IPinfo alternatives in 2026: head-to-head - IPLocate.io\
  Jan 2, 2026 — 5 best IPinfo alternatives in 2026: head-to-head. Explore the top IPinfo alternatives in 2026, including IPLocate, Maxmind, and ot...\
  IPLocate.io
- [link](https://www.ipify.org/)\
  ipify - A Simple Public IP Address API\
  You should use ipify because: 1. You can use it without limit (even if you're doing millions of requests per minute. 2. It works f...\
  ipify
- [link](https://medium.com/@ipdata%5Fco/what-is-the-best-commercial-ip-geolocation-api-d8195cda7027)\
  What is the Best IP Geolocation API? | by The ipdata Team\
  Jul 5, 2018 — Maxmind GeoIP2 Precision Service. IPData.co. IPInfo.io. IP2Location.com. DP-IP.com. IP-API.com. IPGeolocation.io. IPGeolocation.co...\
  Medium·The ipdata Team

Show all

## i can use ipapi. i want to check a specific ip.

To check a specific IP address using **ip-api.com**, append the target IP address to the end of the URL.

### Method 1: Get Full JSON Data

Run this command to get all geolocation, ISP, and organizational data for a specific IP:

bash

```
curl http://ip-api.com
```

Use code with caution.

### Method 2: Pretty-Print the Output (Highly Recommended)

The raw output is a single compressed line. Install `jq` to format the text into an easy-to-read layout:

bash

```
sudo apt install jq -y
curl -s http://ip-api.com | jq
```

Use code with caution.

### Method 3: Filter Specific Fields

If you only need a single piece of information, you can instruct `jq` to extract exactly that data point:

- **Get only the country name**:\
  bash

<!---->

```
curl -s http://ip-api.com | jq '.country'
```

Use code with caution.

- **Get only the ISP name**:\
  bash

<!---->

```
curl -s http://ip-api.com | jq '.isp'
```

Use code with caution.

- **Get City and Country together**:\
  bash

<!---->

```
curl -s http://ip-api.com | jq '.city, .country'
```

Use code with caution.

_(Note: The free tier of ip-api.com allows up to 45 requests per minute. Use HTTP instead of HTTPS on the free tier to avoid connection rejections.)_

Would you like help writing a **Bash loop** to scan multiple IP addresses at once from a text file?

- [link](https://pub.dev/packages/ipapi)\
  ipapi | Dart package\
  Mar 8, 2025 — Additional information # We are not associated with IP-API.com in any way. Please note that the free version of IP-API.com's IP Ge...\
  \
  Dart packages

## give me the command in base64

Here is the basic `curl` command with `jq` formatting encoded into Base64:

text

```
Y3VybCAtcyBodHRwOi8vaXAtYXBpLmNvbS9qc29uLzguOC44LjggfCBqcQ==
```

Use code with caution.

### How to execute it on Ubuntu

You can pipe this Base64 string directly into `base64 -d` and `bash` to decode and run it instantly:

bash

```
echo "Y3VybCAtcyBodHRwOi8vaXAtYXBpLmNvbS9qc29uLzguOC44LjggfCBqcQ==" | base64 -d | bash
```

Use code with caution.

If you need the command encoded with a **different IP address** or formatted for a **specific programming language** (like Python or PHP), let me know!

- [link](https://phcode.io/tools/base64-encode-decode.html)\
  Base64 Encode & Decode Online | Text to Base64 & Base64 to Text\
  Encode text to Base64 ( Base64 encoding ) or decode Base64 ( Base64 encoding ) strings instantly. Full UTF-8 support.\
  \
  phcode.io

- [link](https://learn.microsoft.com/en-us/windows/win32/seccrypto/utilities-base64decode)\
  Utilities.Base64Decode method - Win32 apps\
  Mar 22, 2021 — The Base64Decode method decodes a string from base64 ( Base64 encoding ) .\
  \
  Microsoft Learn

- [link](https://qodex.ai/all-tools/base64-decoder)\
  Base64 Decode Online, Free Encoder & Decoder\
  How to Decode Base64 Using Command-Line Tools On Unix/Linux: Pipe your encoded string into the base64 utility with the -d flag to ...\
  \
  \
  Qodex.ai

# how well are pwa supported on modern phones

Support for Progressive Web Apps (PWAs) on modern phones is <mark><strong>highly capable but deeply fragmented</strong></mark>, creating a starkly different user and developer experience depending on whether you are using Android or iOS. [link](https://www.reddit.com/r/PWA/comments/1j8kfd5/pwa%5Fon%5Fandroid%5Fis%5Fso%5Fmuch%5Fbetter%5Fthan%5Fon%5Fios/)

While both platforms comfortably handle core PWA requirements—like offline functionality, smart caching, and basic hardware access (like GPS and cameras)—Android provides an almost completely native experience, whereas iOS imposes stricter security boundaries and feature limitations. [link](https://www.reddit.com/r/react/comments/1b780bj/can%5Fpwas%5Fever%5Fbe%5Fbecome%5Fas%5Fgood%5Fas%5Fnative%5Fapps/)

### Platform Breakdown: Android vs. iOS

```
+-----------------------------------+-----------------------------------+

| Feature                           | Android (Chrome/Chromium)         | iOS (Safari/WebKit)               |
+-----------------------------------+-----------------------------------+

| App Store Distribution            | Yes (via Google Play Store)       | Limited / Complicated             |
| Ambient Installation Prompts      | Full support (browser banners)    | Manual ("Add to Home Screen")     |
| Push Notifications                | Comprehensive, rich alerts        | Restricted (Requires user opt-in) |
| System Integration                | High (Web Share, Shortcuts)       | Low (No Widgets, isolated)        |
| Hardware Access                   | Broad (Bluetooth, USB, Sync)      | Minimal (Blocked Bluetooth/Sensors)|
+-----------------------------------+-----------------------------------+
```

### Android Support: Excellent and Near-Native

Android treats PWAs almost as first-class citizens, particularly when accessed through Google Chrome or other Chromium-based browsers. [link](https://web.dev/learn/pwa/progressive-web-apps)

- **Trusted Web Activities (TWAs):** Developers can package a PWA directly into an `.apk` file and publish it to the Google Play Store. This blurs the line between web and native for the end user.
- **Seamless Installation:** Chromium browsers actively prompt users to install the app via ambient banners or an obvious address-bar icon.
- **Deep System Access:** Android PWAs can access advanced capabilities like Web Bluetooth, contact pickers, file system APIs, background sync, and rich push notifications with images. [link](https://www.reddit.com/r/PWA/comments/1m69nmu/anyone%5Felse%5Ffeel%5Flike%5Fpwas%5Fare%5Fon%5Fthe%5Fedge%5Fof/)

### iOS Support: Functional but Highly Restricted

Apple has historically taken a cautious, web-sandbox approach to PWAs. This protects App Store revenue and maintains strict user privacy, but restricts app capabilities. [link](https://www.reddit.com/r/react/comments/1b780bj/can%5Fpwas%5Fever%5Fbe%5Fbecome%5Fas%5Fgood%5Fas%5Fnative%5Fapps/)

- **Installation Friction:** iOS does not allow automatic browser installation prompts. Users must manually open the Safari share sheet and tap **"Add to Home Screen"**.
- **Push Notification Hurdles:** While Apple does support Web Push Notifications (introduced in iOS 16.4), the user _must_ explicitly install the PWA to their home screen first, launch it, and then approve the notification prompt. Furthermore, iOS notifications lack support for custom images and local-only scheduling.
- **Strict Regional Rules:** In European Union countries, regulatory changes (like the Digital Markets Act) have complicated PWA behavior. This leaves standalone PWAs opening within standard Safari tabs without full system isolation or background support in certain instances.
- **Hardware Limitations:** iOS rigorously blocks PWAs from interacting with deep hardware like Bluetooth, serial ports, or system orientation sensors. They also isolate app storage, purging data if the app is left unused for too long. [link](https://www.reddit.com/r/react/comments/1b780bj/can%5Fpwas%5Fever%5Fbe%5Fbecome%5Fas%5Fgood%5Fas%5Fnative%5Fapps/)

### The Performance and UX Frontier

Modern mobile processors ensure that a well-optimized PWA feels incredibly smooth. Technologies like WebAssembly allow PWAs to execute complex code at nearly native speeds. [link](https://www.reddit.com/r/androiddev/comments/1q3hlj7/are%5Fpwa%5Fstill%5Fa%5Fthing/)

However, because PWAs ultimately run inside a browser engine (WebKit on iOS and Blink on Android), they still consume more battery power and fall short when handling intense 3D graphics, complex device gamification, or heavy background processes. [link](https://www.reddit.com/r/react/comments/1b780bj/can%5Fpwas%5Fever%5Fbe%5Fbecome%5Fas%5Fgood%5Fas%5Fnative%5Fapps/)

To see exactly what your current device can handle, you can run a real-time hardware compatibility test directly at [What PWA Can Do Today](https://whatpwacando.today/).

If you are planning a specific project, feel free to share:

- The **core features** your app needs (e.g., Bluetooth, background sync, offline maps).
- Your target **audience** (mostly Android, mostly iOS, or an even split). [link](https://oneuptime.com/blog/post/2025-08-19-native-apps-had-a-good-run-but-pwa-has-caught-up-and-is-the-future/view)

I can help you evaluate whether a PWA is the right choice or if you should look toward cross-platform native frameworks. [link](https://mediusware.com/blog/progressive-webapp-vs-react-native-app)

- [link](https://www.reddit.com/r/PWA/comments/1m69nmu/anyone%5Felse%5Ffeel%5Flike%5Fpwas%5Fare%5Fon%5Fthe%5Fedge%5Fof/)\
  Anyone else feel like PWAs are on the edge of replacing native apps ...\
  Jul 22, 2025 — Anyone else feel like PWAs are on the edge of replacing native apps... but just not quite there. ... One thing that stood out was ...\
  Reddit·r/PWA
- [link](https://www.reddit.com/r/react/comments/1b780bj/can%5Fpwas%5Fever%5Fbe%5Fbecome%5Fas%5Fgood%5Fas%5Fnative%5Fapps/)\
  Can PWAs ever be become as good as native apps? : r/react - Reddit\
  Mar 5, 2024 — The runaround is maddening. And Apple's entire development environment is overly complicated, requiring an app's digital signing t...\
  Reddit·r/react
- [link](https://www.reddit.com/r/PWA/comments/1uaxuj1/anyone%5Fusing%5Fa%5Fpwa%5Finstead%5Fof%5Fbuilding%5Fa%5Fnative/)\
  Anyone using a PWA instead of building a native app? - Reddit\
  Jun 20, 2026 — There are a few limitations though. \* The title from each push always has your app name in it, so “… from {your app name here}” 2)\
  Reddit·r/PWA

Show all

# how well are pwa supported on modern desktops

Progressive Web Apps (PWAs) are **exceptionally well-supported** on modern desktop operating systems, heavily blurring the line between websites and native desktop applications. However, the level of integration depends heavily on the web browser you use to install them. [link](https://www.reddit.com/r/PWA/comments/1m69nmu/anyone%5Felse%5Ffeel%5Flike%5Fpwas%5Fare%5Fon%5Fthe%5Fedge%5Fof/)

### Browser Support Matrix

The desktop PWA experience is highly fractured between browser engines: [link](https://web.dev/learn/pwa/progressive-web-apps)

| Browser                                | OS Compatibility                | PWA Installation & Standalone Window                               |
| -------------------------------------- | ------------------------------- | ------------------------------------------------------------------ |
| **Google Chrome / MS Edge** (Chromium) | Windows, macOS, Linux, ChromeOS | ✅ **Full Support** (Best-in-class desktop integration)            |
| **Mozilla Firefox**                    | Windows, macOS, Linux           | ⚠️ **Experimental / Limited** (Rolling out native taskbar pinning) |
| **Apple Safari**                       | macOS                           | ❌ **No Desktop Installation** (Supports background APIs only)     |

### Native Desktop Integration Features

If installed via a Chromium browser (Chrome or Edge), a PWA integrates deeply into Windows, macOS, and Linux using modern web APIs: [link](https://web.dev/learn/pwa/progressive-web-apps)

- **Standalone Windows**: Installed PWAs launch in their own dedicated windows without browser tabs, URLs, or navigation bars.
- **OS App Launchers**: PWAs appear in the Windows Start Menu, macOS Launchpad, and Linux app grids. They can be pinned directly to your desktop taskbar or dock.
- **Window Controls Overlay**: Developers can hide the traditional app title bar. This allows custom web content (like search bars or custom tabs) to be placed all the way to the top of the window, mirroring native apps.
- **App Badging**: PWAs can display a notification badge (e.g., an unread message count) directly on their taskbar or dock icon.
- **System Notifications**: PWAs leverage native OS notification centers to deliver rich push alerts, even when the app window is closed.
- **File System Access**: Modern APIs allow desktop PWAs to request user permission to read, edit, and save files directly to the host computer's hard drive. [link](https://www.outsystems.com/forums/discussion/65698/pwa-on-desktop/)

### Remaining Limitations

Despite massive growth, PWAs on desktop still face clear boundaries compared to purely native binary code or desktop wrappers like Electron: [link](https://www.reddit.com/r/PWA/comments/1nvyal6/pwas%5Ffor%5Fdesktop%5Fvs%5Felectron/)

- **Hardware Barriers**: PWAs lack deep hardware access, meaning they cannot interact freely with local USB/Bluetooth devices, custom drivers, or low-level GPU optimizations without strict browser security gates.
- **Background Processing**: Unlike native apps, desktop PWAs cannot easily run persistent background daemons or startup processes without the browser engine active.
- **Browser Dependency**: If a user clears their browser cache or uninstalls the host browser, the underlying PWA data can be altered or lost. [link](https://connect.mozilla.org/t5/discussions/how-can-firefox-create-the-best-support-for-web-apps-on-the/m-p/76683)

Are you looking at PWAs from a **user perspective** trying to replace desktop software, or are you a **developer** deciding between building a PWA versus an Electron app? Let me know so I can provide more specific details! [link](https://www.reddit.com/r/PWA/comments/1nvyal6/pwas%5Ffor%5Fdesktop%5Fvs%5Felectron/)

- [link](https://web.dev/learn/pwa/progressive-web-apps)\
  Progressive Web Apps - web.dev\
  Sep 20, 2024 — ... these browsers and stores are compatible with PWA installation and offline capabilities: Windows 10 and 11: Google Chrome (fro...\
  web.dev
- [link](https://www.outsystems.com/forums/discussion/65698/pwa-on-desktop/)\
  PWA on Desktop - OutSystems\
  Oct 22, 2020 — Desktop is a valid use case, with many desktop browsers now supporting pwa's being installed within the browser application instan...\
  OutSystems
- [link](https://en.wikipedia.org/wiki/Progressive%5Fweb%5Fapp)\
  Progressive web app - Wikipedia\
  Initial introduction. In 2015, designer Frances Berriman and Google Chrome engineer Alex Russell coined the term "progressive web ...\
  Wikipedia

Show all

## on firefox

Progressive Web App support on desktop Firefox is currently **highly experimental and fundamentally different** from Chromium browsers.

After completely removing its original Site Specific Browser (SSB) prototype years ago, Mozilla has introduced a new approach to native web apps. [link](https://www.youtube.com/watch?v=zdknI%5FLBu9M)

### The Current State: "Taskbar Tabs" (Windows Only)

Firefox features a native PWA implementation called **Taskbar Tabs**, which is hidden behind experimental flags. [link](https://www.youtube.com/watch?v=zdknI%5FLBu9M)

- **Availability**: It is strictly limited to **Windows**. Linux and macOS users do not have native access.
- **How to Enable**: You must manually enable it by navigating to `Settings > Labs` in your Firefox browser.
- **The Implementation Gap**: When you click the "Add to taskbar" icon in the URL bar, Firefox creates a shortcut on your taskbar. However, unlike Chrome, it **retains standard browser chrome** (the address bar, toolbars, and bookmarks) rather than launching a clean, frameless window. It also lacks robust offline caching compared to Chromium. [link](https://www.reddit.com/r/firefox/comments/1q24684/finally%5Ffound%5Fa%5Fgood%5Fway%5Fto%5Fuse%5Fpwas%5Fin%5Ffirefox/)

### The Best Alternative: "PWAs for Firefox" Extension

Because native support is still primitive, the Firefox community relies heavily on a highly popular, third-party extension project called **PWAs for Firefox**. [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)

This tool bridges the gap by installing a custom runtime on your computer to deliver a true native app experience: [link](https://www.reddit.com/r/firefox/comments/1q24684/finally%5Ffound%5Fa%5Fgood%5Fway%5Fto%5Fuse%5Fpwas%5Fin%5Ffirefox/)

- **Frameless Standalone Windows**: Completely hides tabs and the URL address bar.
- **True OS Integration**: Creates independent shortcuts in your Start Menu, macOS Launchpad, or Linux app grid.
- **Extension Compatibility**: Allows you to run your main Firefox extensions (like uBlock Origin) inside the standalone web app windows. [link](https://www.reddit.com/r/firefox/comments/1q24684/finally%5Ffound%5Fa%5Fgood%5Fway%5Fto%5Fuse%5Fpwas%5Fin%5Ffirefox/)

### Summary

If you need seamless, out-of-the-box desktop PWAs with full OS-level integration, Firefox is not quite there yet, making Chromium-based browsers the preferred choice. However, if you are dedicated to using Firefox, the **PWAs for Firefox extension** provides a powerful workaround. [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)

Would you like step-by-step instructions on **how to configure the PWA extension**, or are you looking to test the native **Firefox Labs feature** on Windows?

- [link](https://www.reddit.com/r/firefox/comments/1q24684/finally%5Ffound%5Fa%5Fgood%5Fway%5Fto%5Fuse%5Fpwas%5Fin%5Ffirefox/)\
  Finally found a good way to use PWAs in Firefox - Reddit\
  Jan 3, 2026 — Firefox actually got support for PWAs natively on Windows recently. You can enable it by going to a website and clicking the "Add ...\
  Reddit·r/firefox
- [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)\
  Progressive Web Apps for Firefox\
  Jun 23, 2026 — Progressive Web Apps (PWAs) are web apps that use web APIs and features along with progressive enhancement strategy to bring a nat...\
  Firefox Add-ons
- [link](https://www.youtube.com/watch?v=zdknI%5FLBu9M)\
  Firefox Is Reviving Progressive Web Apps\
  Feb 16, 2025 — pwa progressive web apps basically web apps that can be installed as if they were a desktop. application i don't mean an Electron.\
  17:27\
  YouTube·Brodie Robertson

Show all

## can users add a shortcut which launches a standalone window on firefox

<mark><span>Yes, users can add a shortcut that launches a site in its own window</span></mark>, but **Firefox cannot naturally remove the browser toolbars** to create a completely clean, frameless "standalone" window on its own.

How you achieve this depends entirely on whether you want to use Firefox's official tools or a community workaround:

### Option 1: Firefox's Native "Web Apps / Taskbar Tabs" (Windows Only)

Mozilla provides an official feature called **Taskbar Tabs** to launch sites as individual applications. [link](https://www.youtube.com/watch?v=AtJOPcUwnnc)

1. Navigate to `about:preferences#experimental` in Firefox.
2. Check the box for **Web Apps** (or Taskbar Tabs) and restart the browser.
3. Go to the website you want to add, and click the **"Add to taskbar"** button that appears on the right side of the URL bar.
4. **The Catch**: This places a dedicated shortcut on your Windows taskbar and Start menu. When launched, it opens in a separate, isolated window with its own icon, but it **still keeps Firefox's standard top toolbar** (the address bar, tabs, and bookmark bar). [link](https://support.mozilla.org/en-US/kb/web-apps-firefox-windows)

### Option 2: The Command-Line Flag (Cross-Platform)

You can force Firefox to open a website in a forced, dedicated window using basic OS shortcuts, though it will still retain the standard browser layout. [link](https://support.mozilla.org/km/questions/1287367)

1. Right-click on your desktop and select **New > Shortcut**.
2. In the target box, point it to your Firefox application and append the `-new-window` command followed by the URL. For example:\
   `"C:\Program Files\Mozilla Firefox\firefox.exe" -new-window https://whatsapp.com`
3. Launching this shortcut forces the site to open in its own separate browser window instantly. [link](https://support.mozilla.org/km/questions/1287367)

### Option 3: The True Frameless Solution (Best Choice)

If your goal is a true standalone window that hides the URL bar, tabs, and navigation buttons completely to look like a desktop app, you must use the **PWAs for Firefox Extension**. [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)

This free extension installs a lightweight framework on your computer that strips away the Firefox browser interface entirely, allowing you to launch sites in a pure, native-looking standalone window across Windows, macOS, and Linux. [link](https://developer.mozilla.org/en-US/docs/Web/Progressive%5Fweb%5Fapps/Guides/Installing)

Which of these approaches sounds closest to what you are trying to set up? I can walk you through the precise setup steps for any of them!

- [link](https://support.mozilla.org/km/questions/1287367)\
  Make desktop shortcut open new window - Mozilla Support\
  May 19, 2020 — Right click on the desktop shortcut you are using and select Properties. Add the -new-window command line option to the end of the...\
  Mozilla Support
- [link](https://support.mozilla.org/en-US/questions/1390708)\
  How to create a Windows 10 desktop shortcut which starts a new instance of Firefox with a specific URL\
  Sep 26, 2022 — To create a Windows 10 desktop shortcut that opens a new instance of Firefox with a specific URL, you can do the following: 1. Rig...\
  Mozilla Support
- [link](https://support.mozilla.org/en-US/kb/web-apps-firefox-windows)\
  Use web apps in Firefox for Windows - Mozilla Support\
  In Firefox, click the web apps button. that appears in the address bar. Firefox will install the site, and it will appear in your ...\
  Mozilla Support

Show all

## what if the user has the extension installed

If a user has the **PWAs for Firefox extension** and its native companion runtime installed, creating a shortcut that launches a true, clean standalone window is **fully automated and works seamlessly** across Windows, macOS, and Linux. [link](https://pwasforfirefox.filips.si/user-guide/extension/)

The extension bypasses all of Firefox's native interface limitations. When they use it, the setup behaves identically to Google Chrome or Microsoft Edge.

### How the User Installs and Launches a Site

1. **Spot the Install Icon**: When visiting an eligible website, an "Install Web App" icon (usually a small plus sign or app logo) automatically appears right inside the Firefox address bar. [link](https://pwasforfirefox.filips.si/user-guide/extension/)
2. **One-Click Install**: The user clicks that icon, and the extension instantly handles the configuration in the background. [link](https://pwasforfirefox.filips.si/user-guide/extension/)
3. **Automatic Shortcuts**: The extension automatically generates a fully customized desktop launcher:

- **Windows**: Places a shortcut in the **Start Menu** and on the **Desktop**.
- **macOS**: Generates an independent app package in the **Applications** folder that can be pinned to the Dock.
- **Linux**: Creates a `.desktop` file inside the system's application directory, making it instantly searchable in the **Activities/App Grid**. [link](https://askubuntu.com/questions/1272355/how-to-create-desktop-shortcut-for-firefox-on-ubuntu-20-04)

### What the Launched Window Looks Like

When the user double-clicks that newly created shortcut, it triggers a custom, highly isolated Firefox profile profile wrapper. The resulting window features: [link](https://discourse.ubuntubudgie.org/t/how-can-i-create-a-desktop-shortcut-to-my-favorite-website/6779)

- **Zero Browser UI**: The address bar, back/forward navigation arrows, refresh buttons, bookmarks bar, and standard Firefox tabs are completely removed. [link](https://superuser.com/questions/468580/create-application-shortcut-chromes-feature-in-firefox)
- **Custom Title Bar**: The window uses the website's specified theme colors and name at the very top, exactly like a native app installed from an App Store.
- **Isolated Session**: The app runs in its own containerized sandbox. The user can log into one account in their standalone PWA window while staying logged into a completely different account in their main Firefox browser window.
- **Extension Support**: Users can choose to let specific extensions (like ad blockers or password managers) pass through and function inside the frameless window.

If you are setting this up yourself and the desktop shortcut didn't appear automatically after clicking install, you can manually open the **PWA Extension Dashboard** from your extension toolbar, click on the installed site, and select **"Create Desktop Shortcut"** to force your operating system to generate the launcher.

Are you experiencing any specific issues getting a shortcut to appear on your desktop, or are you checking to see how smooth the experience will be for other users?

- [link](https://hiraniconfigmgr.com/deploy-progressive-web-apps-pwas-to-windows-devices-using-intune-configuration-profiles-and-microsoft-edge/)\
  Deploy Progressive Web Apps (PWAs) to Windows Devices ...\
  Dec 16, 2025 — ... here's what your users will see: Automatic Installation: The PWA appears in the Windows Start menu without any user action; If...\
  Hiraniconfigmgr
- [link](https://www.fastcompany.com/90597411/mozilla-firefox-no-ssb-pwa-support)\
  Firefox just walked away from a key piece of the open web\
  Jan 26, 2021 — It didn't integrate with any extensions that users might've installed, and it didn't let users easily add launch icons to the MacO...\
  Fast Company
- [link](https://askubuntu.com/questions/1272355/how-to-create-desktop-shortcut-for-firefox-on-ubuntu-20-04)\
  How to create desktop shortcut for Firefox on Ubuntu 20.04\
  Sep 3, 2020 — The Exec= value in the desktop file must contain the full path to the Firefox executable (e.g. /home/wonko/myapps/firefox/firefox ...\
  Ask Ubuntu

Show all

## how is the extension created and maintained

The "PWAs for Firefox" extension is an open-source, community-driven project created and maintained <mark>primarily by developer<span> </span><strong>Filip Štamcar</strong><span> </span>(known online as<span> </span><strong>filips123</strong>) alongside a community of open-source contributors</mark>.

Because browser extensions alone do not have permission to alter the operating system or launch deep, frameless code, the project is structured as a **two-part hybrid architecture**.

### How the Extension is Created (The Architecture)

The project consists of three main code layers built to work together:

1. **The Browser Extension (WebExtensions API)**:\
   This is the frontend component downloaded from the [Mozilla Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/reviews/?page=6). It is built using standard web technologies (HTML, CSS, JavaScript). Its primary job is to detect PWA manifests on websites, manage user profiles, and provide the user interface. [link](https://packagecloud.io/filips/FirefoxPWA/packages/any/any/firefoxpwa%5F2.4.0%5Famd64.deb?distro%5Fversion%5Fid=35)
2. **The Native Companion App (Rust)**:\
   Because a browser extension cannot communicate directly with your computer's OS file system, it connects to a **native background runtime** built in [Rust](https://github.com/filips123/PWAsForFirefox). This native program communicates with the extension using Firefox's secure _Native Messaging API_. It handles heavy-lifting tasks like generating OS desktop shortcuts, managing files, and spawning new windows. [link](https://pwasforfirefox.filips.si/user-guide/extension/)
3. **The Custom Profile Wrapper**:\
   When you launch a PWA, the Rust component instructs Firefox to boot an isolated profile container. It dynamically patches the layout settings on launch to strip away the tab bar, URL bar, and navigation UI, leaving a true frameless window. [link](https://www.reddit.com/r/firefox/comments/pmewcq/pwas%5Fon%5Ffirefox%5Fare%5Fnow%5Fpossible%5Fonce%5Fagain/)

### How the Project is Maintained

As an independent, volunteer-led utility, its maintenance relies entirely on open-source community mechanics:

- **GitHub Collaboration**: The entire codebase is hosted publicly on the PWAsForFirefox GitHub Repository. Anyone can report bugs, request new features, or submit pull requests to fix broken code. [link](https://packagecloud.io/filips/FirefoxPWA/packages/any/any/firefoxpwa%5F2.4.0%5Famd64.deb?distro%5Fversion%5Fid=35)
- **The "Firefox Breakage" Race**: Maintenance is an ongoing game of cat-and-mouse. Every time Mozilla pushes a major update to Firefox, it can change internal browser settings or profile behaviors. The maintainer must continuously update and patch the runtime to ensure new Firefox versions don't break existing standalone windows. [link](https://pwasforfirefox.filips.si/user-guide/extension/)
- **Cross-Platform Packaging**: Maintaining the native companion app requires compiling and testing installers for multiple platforms. The community helps package and maintain versions for Windows (`.msi`), macOS, and various Linux distribution packages (like Ubuntu `.deb`, Arch Linux AUR, and Fedora). [link](https://www.reddit.com/r/firefox/comments/pmewcq/pwas%5Fon%5Ffirefox%5Fare%5Fnow%5Fpossible%5Fonce%5Fagain/)
- **Community Donations**: The project is free and open-source, but it is financially sustained via donations through open donation platforms like Ko-fi, Liberapay, and Patreon. [link](https://github.com/filips123/PWAsForFirefox/discussions/684)

If you are looking to dig into the technical code or contribute to the project yourself, you can explore the developer's official documentation directly at the **[PWAsForFirefox Project Page](https://pwasforfirefox.filips.si/)**.

- [link](https://www.reddit.com/r/firefox/comments/pmewcq/pwas%5Fon%5Ffirefox%5Fare%5Fnow%5Fpossible%5Fonce%5Fagain/)\
  PWAs on Firefox are now possible once again! : r/firefox\
  Sep 12, 2021 — According to a post on r/firefox, the FirefoxPWA project allows you to grant a native feeling to your favorite PWAs. The project a...\
  Reddit
- [link](https://pwasforfirefox.filips.si/user-guide/extension/)\
  Extension Guide - PWAsForFirefox\
  The PWA extension can: \* Install PWAs with a few clicks \* Manage and launch PWAs \* Create and manage profiles \* Launch PWAs throug...\
  pwasforfirefox.filips.si
- [link](https://pwasforfirefox.filips.si/)\
  Progressive Web Apps for Firefox\
  Features \* Command-line tool to install, manage and run Progressive Web Apps in Firefox. \* Extension to set up native programs, an...\
  pwasforfirefox.filips.si

Show all

## why does a firefox extension have such power

Standing alone, a standard Firefox browser extension does _not_ actually possess the power to alter your operating system, hide address bars, or create standalone desktop shortcuts. Browser extensions are intentionally restricted to a strict security sandbox to prevent malicious code from harming your computer. [link](https://wiki.mozilla.org/WebExtensions/Native%5FMessaging)

The reason the "PWAs for Firefox" extension can pull off this trick is by utilizing a deliberate, secure loophole provided by browser developers: the **Native Messaging API**. [link](https://wiki.mozilla.org/WebExtensions/Native%5FMessaging)

### The Secret: The Native Companion Application

To break out of the browser sandbox, the extension relies on a separate, native binary program (the "runtime" written in Rust) that you must manually download and install on your operating system. [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)

The power dynamic shifts through this specific sequence:

```
[ Web Browser Sandbox ]                   [ Operating System ]
 Firefox Extension ──(Native Messaging API)──> Native Companion App ──> Launches Frameless Firefox Profiles & OS Shortcuts
```

1. **The Native Messaging Pipeline:** Firefox provides an official API called [Native Messaging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native%5Fmessaging). It allows approved extensions to pass JSON text messages back and forth with a specific executable file installed locally on your computer. This is the exact same method used by local password managers (like 1Password or Bitwarden) to securely pass credentials between a desktop app and your browser. [link](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native%5Fmessaging)
2. **Delegating the Power:** When you click "Install PWA" inside Firefox, the extension sends a message containing the website data down the pipe: _"Hey local companion app, please make a desktop shortcut for `https://whatsapp.com`."_ [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)
3. **The Companion Executes It:** Because the companion app is a native desktop program, it operates _outside_ the browser's sandbox. It has full user permissions to write files to your hard drive, create `.lnk` or `.desktop` files, and trigger command-line executions. [link](https://wiki.mozilla.org/WebExtensions/Native%5FMessaging)

### How it Forces Firefox to Go Frameless

The native companion app doesn't rewrite Firefox's source code. Instead, when you click the desktop shortcut it created, it tricks Firefox using advanced startup commands: [link](https://pwasforfirefox.filips.si/help/faq/)

- It commands Firefox to launch a brand new, separate **User Profile** dedicated entirely to that specific web app. [link](https://www.reddit.com/r/firefox/comments/pmewcq/pwas%5Fon%5Ffirefox%5Fare%5Fnow%5Fpossible%5Fonce%5Fagain/)
- It passes custom configuration arguments (like modifying internal `userChrome.css` layout parameters or experimental command-line flags) directly into that profile on launch. [link](https://pwasforfirefox.filips.si/help/faq/)
- This forces that specific Firefox instance to boot up with all of its toolbars, tab rows, and navigation elements hidden, resulting in a clean, standalone window. [link](https://pwasforfirefox.filips.si/help/faq/)

### Is This Safe?

Yes, because it requires explicit user consent at multiple levels. An extension cannot silently install a native companion app on its own. You have to download and run the installer for the companion app yourself. [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)

Once installed, Firefox will explicitly warn you that the extension is communicating with an external program. This architecture ensures you get the features of a native desktop application while maintaining the security boundaries of your browser. [link](https://wiki.mozilla.org/WebExtensions/Native%5FMessaging)

Would you like to know more about how **Native Messaging security** works, or are you curious about how other browsers handle this process internally?

- [link](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/)\
  Progressive Web Apps for Firefox – Get this Extension for 🦊 ...\
  Jun 23, 2026 — You can also check out the project's source code and more information on the GitHub repository. Note: When updating to 2.17. 2, yo...\
  Firefox Add-ons
- [link](https://pwasforfirefox.filips.si/help/faq/)\
  Frequently Asked Questions - PWAsForFirefox\
  What does this project do?¶. Although Firefox supports many of Progressive Web App APIs, it does not support functionality to inst...\
  pwasforfirefox.filips.si
- [link](https://www.reddit.com/r/firefox/comments/pmewcq/pwas%5Fon%5Ffirefox%5Fare%5Fnow%5Fpossible%5Fonce%5Fagain/)\
  PWAs on Firefox are now possible once again! - Reddit\
  Sep 12, 2021 — Thanks to the FirefoxPWA project, you can now grant a native feeling to your favourite PWAs. They also created an extension that l...\
  Reddit·r/firefox

Show all

# how well are pwa (i.e. browse a site, install an app, run locally, work as expected) supported on modern phones

<mark><strong><span>Progressive Web Apps (PWAs) are exceptionally well-supported on modern phones</span></strong></mark>**, capable of fulfilling roughly 80% of the use cases traditionally reserved for native apps.** While the core pillars—browsing, installing, running locally, and offline functionality—work seamlessly across platforms, there is still a noticeable gap in device integration between Android and iOS. [link](https://www.nashtechglobal.com/insights/progressive-web-apps-pwas-in-2025-are-they-still-the-future)

### Feature Support Matrix

The table below breaks down how effectively major PWA features perform across modern mobile operating systems: [link](https://progressier.com/pwa-vs-native-app-comparison-table)

| Capability                         | Android Support                             | iOS Support                                    |
| ---------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| **Browsing & Discoverability**     | Fully supported; indexed by search engines. | Fully supported; indexed by search engines.    |
| **Direct Installation**            | One-tap browser prompts & auto-banners.     | Manual via **Share -> Add to Home Screen**.    |
| **Offline Performance**            | Robust local caching via Service Workers.   | Supported, but storage cap is limited (~50MB). |
| **Push Notifications**             | Native prompts directly in-browser.         | Gated; app _must_ be installed to home screen. |
| **Biometrics (Face/Fingerprint)**  | Native-level WebAuthn support.              | Native-level WebAuthn support.                 |
| **Hardware Hooks (NFC/Bluetooth)** | Supported (WebNFC, WebBluetooth).           | Blocked/Unsupported.                           |

***

### 1. Browsing and Installation

- **The Android Experience:** Google Chrome, Samsung Internet, and Firefox offer seamless installations. You can easily find them via web searches. They trigger native-looking install banners as you browse.
- **The iOS Experience:** Users can install a PWA using any major browser (Safari, Chrome, Edge). However, Apple still introduces minor hurdles. There are no automatic install prompts. Users must manually open the **Share Sheet** and tap **Add to Home Screen**. [link](https://deepclick.com/resources/blog/progressive-web-apps-on-ios/)

### 2. Running Locally and Standalone Experience

- **App UI:** Once launched from the home screen, both platforms strip away browser tabs, URLs, and navigation buttons. The app runs in its own fullscreen window and integrates neatly with the system's multitasking app switcher.
- **Updates:** PWAs offer immediate updates. The app updates automatically in the background every time the user connects to the web. This completely bypasses the long review wait times of traditional app stores. [link](https://medium.com/@mrhotfix/the-rise-of-pwas-and-the-quiet-decline-of-mobile-app-stores-4039bdc2aa0f)

### 3. Working as Expected (Core Capabilities)

- **Offline Access:** Service Workers effectively manage offline states. Apps like e-commerce catalogs or text editors load their core interface instantaneously using local data.
- **Sensors and Core APIs:** Geolocation, camera, microphone, canvas graphics, audio playback, and secure payments work universally across devices.
- **Push Notifications:** Both platforms support push notifications. However, iOS limits push access strictly to apps already saved to the home screen. Unused iOS apps will occasionally clear out their cached storage data. [link](https://www.weweb.io/blog/progressive-web-application-guide)

### Where Modern PWAs Fall Short

Native apps remain the superior choice for heavy processing, immersive 3D games, and complex hardware management. PWAs struggle with system-level operations. They lack access to features like **iOS Live Activities**, phone contacts, and low-level background tasks. Additionally, Apple bars PWAs from connecting directly to **Bluetooth or NFC hardware**. [link](https://progressier.com/pwa-vs-native-app-comparison-table)

If you are evaluating whether to build one, let me know **what kind of app** you are planning to create or **which hardware features** you need to access, and I can tell you if a PWA will get the job done.

- [link](https://www.instinctools.com/blog/pwa-vs-native-app/)\
  Progressive Web Apps vs Native - PWA Pros Cons Compared\
  May 24, 2023 — Table\_title: Difference between PWA and native app at a glance Table\_content: | Parameters | PWA | Native app | | --- | --- | --- ...\
  instinctools
- [link](https://community.wappler.io/t/native-app-or-pwa-discuss/51272)\
  Native app or PWA? Discuss - Wappler Community\
  Jul 27, 2023 — \* Cannot be published to Apple App Store. Google and Microsoft are OK. \* No access to Bluetooth. \* No acces to fingerprint scanner...\
  Wappler Community
- [link](https://developer.mozilla.org/en-US/docs/Web/Progressive%5Fweb%5Fapps/Guides/Making%5FPWAs%5Finstallable)\
  Making PWAs installable - Progressive web apps | MDN\
  Nov 30, 2025 — On mobile: \* On Android, Firefox, Chrome, Edge, Opera, and Samsung Internet Browser all support installing PWAs. \* On iOS 16.3 and...\
  MDN Web Docs

Show all

# im now inside ssh of a fresh debian. create and host a simple pwa using commands. no styling. show the current time. i want to browse and install it.

To host and browse a installable Progressive Web App (PWA) on a fresh Debian server, you can use **Nginx** as the web server.

Run the following commands directly inside your SSH session to install Nginx, create the necessary PWA files, and start hosting it.

### 1. Update system and install Nginx

bash

```
sudo apt update && sudo apt install -y nginx
```

Use code with caution.

### 2. Create the PWA directory structure

bash

```
sudo mkdir -p /var/www/html/pwa
sudo chown -R $USER:$USER /var/www/html/pwa
cd /var/www/html/pwa
```

Use code with caution.

### 3. Create the HTML file

This file displays the current time and registers the Service Worker required for installation.

bash

```
cat << 'EOF' > index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple PWA</title>
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <h1>Current Time</h1>
    <div id="time">Loading...</div>

    <script>
        // Update time every second
        function updateTime() {
            document.getElementById('time').innerText = new Date().toLocaleTimeString();
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Register Service Worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(() => console.log('Service Worker Registered'));
        }
    </script>
</body>
</html>
EOF
```

Use code with caution.

### 4. Create the Manifest file

This file tells the browser your app is installable.

bash

```
cat << 'EOF' > manifest.json
{
  "name": "Simple Time PWA",
  "short_name": "TimePWA",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
EOF
```

Use code with caution.

### 5. Create a dummy icon

PWAs require an icon to be installable. This command generates a blank, valid 512x512 PNG icon using standard Debian tools.

bash

```
sudo apt install -y imagemagick
convert -size 512x512 xc:black icon.png
```

Use code with caution.

### 6. Create the Service Worker file

A Service Worker is required for the browser to trigger the install prompt.

bash

```
cat << 'EOF' > sw.js
const CACHE_NAME = 'time-pwa-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon.png'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
EOF
```

Use code with caution.

### 7. Configure Nginx routing

Point Nginx to your new PWA folder.

bash

```
sudo cat << 'EOF' > /etc/nginx/sites-available/pwa
server {
    listen 80;
    server_name _;
    root /var/www/html/pwa;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
EOF

# Enable the configuration and restart Nginx
sudo ln -sf /etc/etc/nginx/sites-available/pwa /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo systemctl restart nginx
```

Use code with caution.

### How to browse and install it

1. Open your browser and navigate to your server's IP address: `http://your_server_ip`
2. **Important Note on PWA Security**: Modern browsers (like Chrome, Edge, and Safari) **strictly require HTTPS** to display the PWA install icon.
3. **Testing over HTTP**: If you do not have an SSL certificate set up yet, you can test and install it locally by bypassing the restriction:

- **Chrome/Edge**: Open `chrome://flags/#unsafely-treat-insecure-origin-as-secure`, add your `http://your_server_ip`, enable the flag, and relaunch the browser. The "Install" icon (a monitor with a down arrow) will then appear in your URL bar.

If you plan to use this publicly, let me know if you would like the commands to quickly set up a **free Let's Encrypt SSL certificate** via Certbot so it works natively on mobile devices.

- [link](https://whatpwacando.today/installation/)\
  What PWA Can Do Today\
  The manifest. json file tells the browser how the PWA should appear and behave on the device and for a web app to be installable i...\
  \
  \
  What can PWA do today
- [link](https://dohost.us/index.php/2025/08/15/setting-up-a-web-server-on-debian-apache-and-nginx-configuration/)\
  Setting Up a Web Server on Debian: Apache and Nginx Configuration\
  Aug 15, 2025 — Step 4: Test the installation. Open a web browser and navigate to your server's public IP address. You should see the default Ngin...\
  \
  DoHost

## Job for nginx.service failed because the control process exited with error code.

See "systemctl status nginx.service" and "journalctl -xeu nginx.service" for details.

The error occurred because of a typo in the Nginx symlink path (`/etc/etc/nginx/`).

Run these exact commands in your SSH terminal to fix the path and start Nginx:

### 1. Fix the configuration link

bash

```
sudo rm -f /etc/nginx/sites-enabled/pwa
sudo ln -sf /etc/nginx/sites-available/pwa /etc/nginx/sites-enabled/
```

Use code with caution.

### 2. Test and restart Nginx

bash

```
sudo nginx -t
sudo systemctl restart nginx
```

Use code with caution.

If the `nginx -t` command outputs any other errors, let me know. I can help you **debug the configuration syntax** or look at your **port bindings** to get it online immediately.

## i can access on mobile browser. i can add to home screen. i can turn off network and run it. but it shows in browser (tabs, url, optoins) rather than a fullscreen app.

The app is opening in a browser tab because your mobile browser **does not recognize it as a valid, fully qualified PWA**.

Browsers will fall back to a standard web shortcut (showing tabs and URLs) if specific PWA criteria are missing. For mobile devices, this is almost always caused by **missing explicit icon sizes** in the manifest or serving the site over **unsecured HTTP**.

Run these commands to fix your manifest file, clear your cache, and test it correctly.

### 1. Fix the Manifest configuration

Mobile browsers (especially iOS Safari) require explicit definitions for multiple icon sizes and specific PWA settings. Rewrite your `manifest.json` with this fully compliant version:

bash

```
cat << 'EOF' > /var/www/html/pwa/manifest.json
{
  "name": "Simple Time PWA",
  "short_name": "TimePWA",
  "start_url": "/index.html",
  "display": "standalone",
  "display_override": ["standalone", "window-controls-overlay"],
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "prefer_related_applications": false,
  "icons": [
    {
      "src": "icon.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icon.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
EOF
```

Use code with caution.

### 2. Update your HTML for iOS / Safari

iOS requires unique meta tags to hide the browser UI. Inject them into your `index.html`:

bash

```
sed -i '/<head>/a \    <meta name="apple-mobile-web-app-capable" content="yes">\n    <meta name="apple-mobile-web-app-status-bar-style" content="black">' /var/www/html/pwa/index.html
```

Use code with caution.

### 3. Clear your phone's browser cache

Because your phone already cached the old, broken manifest, you **must remove the old shortcut first**:

1. **Delete** the current app shortcut from your phone's home screen.
2. Open your mobile browser and **clear the history/cache** for your server's IP address.
3. Reload the webpage.

### 4. Critical Step: The HTTPS Requirement

If you are accessing the app over `http://your_server_ip`, mobile browsers will deliberately block standalone mode for security reasons.

- **If you are on Android:** You must use the `chrome://flags` workaround on your phone's Chrome browser just like you did on desktop, or use a local port-forwarding tool.
- **If you are on iOS (Safari):** Safari completely blocks standalone PWA installation over insecure HTTP. You cannot bypass this without SSL.

Would you like to install **Certbot** right now to set up a **free HTTPS certificate**, or do you want to route it through a **local tunnel** for testing?

- [link](https://www.reddit.com/r/firefox/comments/1dh59j1/prevent%5Fwebsites%5Fto%5Fopen%5Flike%5Fapps/)\
  Prevent websites to open like apps : r/firefox\
  Jun 16, 2024 — Theres an app called "website shortcut". With this app you can create home screen shortcuts for each url and they will open normal...\
  \
  Reddit
- [link](https://catdoes.com/blog/add-to-homescreen-icon)\
  Add to Homescreen Icon: A Complete Guide\
  Apr 6, 2026 — This happens when you only provide one small icon file. The OS stretches it to fit, causing distortion on high-density screens. Th...\
  \
  \
  CatDoes

## im using firefox on android over http. can it fix it via flags or run some free acme cert. why can i run it offline, is it cached temporarily or it runs locally like pwa.

Firefox on Android handles PWAs differently than Chromium-based browsers, which directly impacts why your app behaves this way over HTTP.

***

### 1. Can Firefox on Android fix this via flags?

**No.** Firefox for Android does not have an equivalent to Chrome’s `unsafely-treat-insecure-origin-as-secure` flag.

Furthermore, Firefox on Android **does not support standard "standalone" PWA installation natively** for custom self-hosted sites in the same way Chrome does. Even over HTTPS, Firefox usually adds PWAs to the home screen as an enhanced bookmark (shortcut) that launches within a browser tab, rather than a standalone borderless window. [link](https://www.reddit.com/r/firefox/comments/t4yenw/bring%5Fback%5Fpwa%5Fprogressive%5Fweb%5Fapps%5Fconnect/)

If you want the **true app experience without tabs or URLs** on Android without a domain name:

- Use **Google Chrome** or **Samsung Internet** on your phone.
- Enable the flag in Chrome via `chrome://flags/#unsafely-treat-insecure-origin-as-secure`. [link](https://www.linkedin.com/posts/om-bhandari-0990b2220%5Fhow-to-use-chromeflagsunsafely-treat-insecure-origin-as-secure-activity-7288776923269230594-ISuC)

***

### 2. Why can I run it offline? Is it cached temporarily or running like a PWA?

It is running **exactly like a true PWA**. It is not a temporary browser cache.

Your application works completely offline because of the **Service Worker (`sw.js`)** code you executed in Step 6. Here is exactly what is happening under the hood: [link](https://softwareengineering.stackexchange.com/questions/421815/possible-to-have-completely-offline-pwa)

- **The Interception:** When you loaded the app online for the first time, Firefox ran the service worker and downloaded your `index.html`, `manifest.json`, and `icon.png` into a permanent API storage called **Cache Storage**. [link](https://softwareengineering.stackexchange.com/questions/421815/possible-to-have-completely-offline-pwa)
- **Offline Execution:** When you shut off your internet and open the page, Firefox attempts to hit the network. The Service Worker intercepts that request, stops it from failing, and pulls the files instantly out of your local Cache Storage. [link](https://softwareengineering.stackexchange.com/questions/421815/possible-to-have-completely-offline-pwa)
- **The Result:** The code runs locally on your phone's processor. The time updates every second because JavaScript's `setInterval()` function doesn't need an internet connection to ask your device hardware for the current time.

***

### 3. Quickest Fix: Run a Free ACME Certificate

To get standard PWA installation working normally on mobile without hacking browser flags, you must serve it over HTTPS. You can generate a free, automated ACME certificate right now from your Debian SSH terminal using **Let's Encrypt** and **Certbot**. [link](https://support.tmssoftware.com/t/pwa-not-running-offline/24282)

#### Prerequisites

You must have a **domain name** (or a free dynamic DNS subdomain from providers like DuckDNS) pointed directly to your Debian server's public IP address.

#### Execution Commands

Run these commands in your SSH terminal to obtain and auto-configure SSL for Nginx:

bash

```
# 1. Install Certbot and the Nginx plugin
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# 2. Run Certbot to acquire the certificate
# Replace "yourdomain.com" with your actual domain name
sudo certbot --nginx -d yourdomain.com
```

Use code with caution.

Certbot will ask for your email address, request the certificate via the ACME protocol, and **automatically rewrite your Nginx configuration files** to handle secure HTTPS and redirect all HTTP traffic. Once completed, refresh Firefox or Chrome on your mobile phone via `https://yourdomain.com` and the PWA mechanics will activate properly.

Would you like help setting up a **free dynamic domain name** to point to your server, or do you want to explore **port forwarding** your server to test it locally?

- [link](https://softwareengineering.stackexchange.com/questions/421815/possible-to-have-completely-offline-pwa)\
  Possible to have completely offline PWA?\
  Feb 3, 2021 — Progressive Web Apps (PWAs) are web apps that are hosted remotely. They can be installed on the app launcher or home screen and us...\
  Software Engineering Stack Exchange
- [link](https://www.reddit.com/r/firefox/comments/t4yenw/bring%5Fback%5Fpwa%5Fprogressive%5Fweb%5Fapps%5Fconnect/)\
  Bring back PWA (progressive web apps) - Connect Mozilla : r/firefox\
  Mar 2, 2022 — If the way you interact with a web app does not involve the browser chrome, it just takes up unnecessary space and attention. \* • ...\
  Reddit·r/firefox
- [link](https://www.reddit.com/r/firefox/comments/1q24684/finally%5Ffound%5Fa%5Fgood%5Fway%5Fto%5Fuse%5Fpwas%5Fin%5Ffirefox/)\
  Finally found a good way to use PWAs in Firefox - Reddit\
  Jan 3, 2026 — Firefox actually got support for PWAs natively on Windows recently. You can enable it by going to a website and clicking the "Add ...\
  Reddit

Show all

## how to fill chrome://flags/#unsafely-treat-insecure-origin-as-secure

To use this flag in Google Chrome on your Android phone, you need to input your server's IP address and port number explicitly.

Follow these steps exactly to configure it:

### 1. Open the flag page

1. Open **Google Chrome** on your Android device.
2. Type `chrome://flags` into the address bar and press Enter.
3. In the "Search flags" box at the top, type: `unsafely-treat`

### 2. Fill in the field

You will see a setting named **"Insecure origins treated as secure"**.

1. Look for the large text input box inside that setting block.

2. Type your server's protocol, IP address, and port 80. For example:\
   text

<!---->

```
http://192.168.1.50:80
```

Use code with caution.\
_(Replace `192.168.1.50` with your actual Debian server IP address)._
3\. If you have multiple testing servers, you can add them separated by a comma (e.g., `http://192.168.1.50:80,http://192.168.1.55:80`).

### 3. Enable and Relaunch

1. Tap the dropdown menu next to the setting (it usually says _Disabled_ by default).
2. Change it to **Enabled**.
3. A blue **Relaunch** button will appear at the bottom right of your screen. Tap it.
4. _Tip:_ For best results on Android, swipe Chrome completely closed from your phone's recent apps view, then reopen it manually.

### 4. Install the PWA

1. Navigate to your IP address (e.g., `http://192.168.1.50`).
2. Tap the **three vertical dots** (Chrome menu) in the top-right corner.
3. You will now see **Install app** or **Add to Home screen**.
4. Tap it, and it will now launch as a clean, borderless standalone app window without tabs or address bars.

Let me know if the **Install app** prompt doesn't show up after restarting Chrome, or if you need help finding your **internal/external IP address** from the Debian console!

- [link](https://wpclerks.com/fix-err-ssl-version-cipher-mismatch/)\
  How to Fix ERR\_SSL\_VERSION\_OR\_CIPHER\_MISMATCH - WPclerks\
  Jun 12, 2023 — Type “chrome://flags” (without quotes) in the address bar and press Enter.\
  \
  \
  WPClerks
- [link](https://support.google.com/chrome/thread/381028963/you-are-using-an-unsupported-command-line-flag-unsafely-treat-insecure-origin-as-secure?hl=en\&gl=us)\
  You are using an unsupported command-line flag: -- unsafely-treat-insecure-origin-as-secure= - Google Chrome Community\
  Oct 16, 2025 — You are using an unsupported command-line flag: -- unsafely-treat-insecure-origin-as-secure= In the Chrome ( Google Chrome ) addre...\
  \
  Google Help
- [link](https://aboutssl.org/how-to-fix-err-certificate-transparency-required-chrome/)\
  Fix ERR\_CERTIFICATE\_TRANSPARENCY\_REQUIRED?\
  Go to Insecure origins treated as secure option and enable it from the dropdown menu located beside it. (Disable it after visiting...\
  \
  \
  aboutssl.org

Show all

## seems it does create and install an app for it. it can run locally. even when i refresh it, it works. but it still does not work as a standalone app, it does popup as an app, but it simple popups chrome after launching, which is not borderless.

If Chrome is still launching a normal browser window with tabs and address bars after using the flag, it means Chrome's security engine is validating the PWA logic but still rejecting the **display configuration** or the **icon assets** during the actual installation process.

Run these final terminal commands to force Chrome to recognize it as a true standalone window.

### 1. Re-generate valid PWA Icons

Chrome strictly requires an icon that is a **perfect square** and explicitly matching the sizes declared in the manifest. Sometimes, `convert` creates a format Chrome dislikes.

Let's use a pure Python script (built into your Debian system) to generate flawless, standard 192x192 and 512x512 PNG files:

bash

```
cat << 'EOF' > generate_icons.py
import struct
import zlib

def make_png(width, height):
    # Generates a valid, tiny black PNG file purely in binary
    p = struct.pack
    png_signature = b'\x89PNG\r\n\x1a\n'
    ihdr = p('!4sIIBBBBB', b'IHDR', width, height, 8, 2, 0, 0, 0)
    ihdr = b'IHDR' + ihdr[4:] + p('!I', zlib.crc32(ihdr))

    # 1 pixel of black raw data expanded to rows
    raw_data = b''
    for _ in range(height):
        raw_data += b'\x00' + b'\x00\x00\x00' * width
    compressor = zlib.compressobj()
    idat_data = compressor.compress(raw_data) + compressor.flush()
    idat = b'IDAT' + idat_data
    idat = p('!I', len(idat_data)) + idat + p('!I', zlib.crc32(idat))

    iend = p('!I', 0) + b'IEND' + p('!I', zlib.crc32(b'IEND'))
    return png_signature + ihdr + idat + iend

with open('/var/www/html/pwa/icon-192.png', 'wb') as f:
    f.write(make_png(192, 192))

with open('/var/www/html/pwa/icon-512.png', 'wb') as f:
    f.write(make_png(512, 512))
EOF

python3 generate_icons.py
rm generate_icons.py
```

Use code with caution.

### 2. Update Manifest to explicitly match the new icons

Now we will update `manifest.json` to link directly to these separate, dedicated icon sizes. We will also add a critical key (`"id": "/"`) which forces Chrome to treat the shortcut as a distinct standalone app ID.

bash

```
cat << 'EOF' > /var/www/html/pwa/manifest.json
{
  "id": "/",
  "name": "Simple Time PWA",
  "short_name": "TimePWA",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
EOF
```

Use code with caution.

### 3. Clear Chrome's Deep App Cache

Chrome aggressively caches bad manifests. Even if you update the code, Chrome will keep installing the old "broken" version until you clear it entirely:

1. **Uninstall** the PWA app you just installed from your Android home screen.
2. Open Google Chrome on your phone and go to your app page (`http://your_server_ip`).
3. Tap the **lock/info icon** on the left side of Chrome's URL address bar.
4. Tap **Site settings** -> Tap **Clear & reset** (this wipes the old service worker and cached manifest).
5. **Reload** the page.

Tap the three dots menu in Chrome, hit **Install app**, and launch it from your home screen. It will now open as a completely borderless, standalone window.

Let me know if it still forces a browser shortcut, or if you need to verify that your **Nginx mime types** are serving the manifest correctly!

## search about possible reasons

The reason Chrome installs the PWA but still opens it in a normal browser window comes down to a hidden limitation in how Android handles PWAs locally: **the WebAPK build process relies on an external Google server that strictly rejects insecure HTTP connections.**

When you install a true standalone PWA on Android, Chrome doesn't just make a shortcut. It passes your PWA manifest data to a background Google service that compiles a lightweight Android app package called a **WebAPK** on the fly. [link](https://support.google.com/chrome/thread/444956798/chrome-android-pwa-install-issue?hl=en\&gl=us)

Here is exactly why that process is failing and falling back to a standard browser shortcut: [link](https://support.google.com/chrome/thread/444956798/chrome-android-pwa-install-issue?hl=en\&gl=us)

### 1. WebAPK generation blocks plain HTTP

Your `chrome://flags` setting only tricks your _local_ mobile Chrome browser app into thinking the site is secure. However, when Chrome requests Android to build the borderless WebAPK, the remote compilation server sees `http://YOUR_IP` and immediately rejects it for safety. Because the WebAPK build fails, Android falls back to a standard, non-borderless browser tab shortcut. [link](https://support.google.com/chrome/thread/444956798/chrome-android-pwa-install-issue?hl=en\&gl=us)

### 2. Nginx is serving the wrong Content-Type

By default, Nginx serves `.json` files as standard `application/json` or `text/plain`. However, mobile devices running Android Chrome strictly expect the official MIME type `application/manifest+json`. If the header doesn't match perfectly, Android's app installer ignores the `"display": "standalone"` instruction. [link](https://support.google.com/chrome/thread/444956798/chrome-android-pwa-install-issue?hl=en\&gl=us)

### 3. Missing a dedicated scope parameter

If you don't explicitly declare the navigation boundaries (`scope`) in the manifest, Chrome assumes any manual click inside the app is technically navigating away from the target folder, triggering the browser address bar to reappear as a security measure.

***

### How to solve it right now from SSH

Since we cannot bypass Google's remote WebAPK validation over plain HTTP, the best way to get a borderless app window on your phone is to spoof a secure connection locally or fix your manifest handling.

#### Fix A: Fix the Nginx MIME-type and scope (Try this first)

Open your configuration and force Nginx to use the correct headers while adding a structural scope line. Run this on your Debian machine:

bash

```
# 1. Update manifest with explicit scope matching the root
cat << 'EOF' > /var/www/html/pwa/manifest.json
{
  "id": "/",
  "name": "Simple Time PWA",
  "short_name": "TimePWA",
  "start_url": "/index.html",
  "scope": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
EOF

# 2. Force Nginx to serve the manifest with the required strict PWA header
sudo sed -i '/location \/ {/i \    location ~* \\.(json)$ {\n        types { }\n        default_type application/manifest+json;\n    }\n' /etc/nginx/sites-available/pwa

# 3. Restart Nginx
sudo systemctl restart nginx
```

Use code with caution.

_Note: Make sure to completely clear site cache data inside Chrome settings on your phone before tapping install again._

#### Fix B: Connect your phone to your PC via USB (ADB Reverse)

If you connect your Android phone to a computer using a USB cable, you can trick Chrome completely by running a **local proxy loopback**. Because `localhost` is universally trusted as a secure origin by Chromium, it bypasses the WebAPK security check entirely without a domain or an SSL cert. [link](https://stackoverflow.com/questions/59962926/pwa-app-beforeinstallprompt-not-firing-in-mobile-browser-but-working-in-normal-d)

1. Enable **USB Debugging** on your phone's Developer Options.

2. Connect your phone to a computer that has the Android SDK platform tools installed.

3. Run this command on your computer terminal:\
   bash

<!---->

```
adb reverse tcp:8080 tcp:80
```

Use code with caution.
4\. On your mobile Chrome browser, simply navigate to `http://localhost:8080`. Chrome will treat this exactly like native local hosting, unlock full WebAPK generation, and give you a borderless standalone app window. [link](https://stackoverflow.com/questions/59962926/pwa-app-beforeinstallprompt-not-firing-in-mobile-browser-but-working-in-normal-d)

Would you like to look into setting up a **free localized domain name** via a service like DuckDNS to quickly test genuine Let's Encrypt HTTPS, or would you prefer to test via **USB remote debugging**? [link](https://stackoverflow.com/questions/53264568/why-is-my-angular-pwa-standalone-display-not-working-in-chrome-on-android)

- [link](https://support.google.com/chrome/thread/444956798/chrome-android-pwa-install-issue?hl=en\&gl=us)\
  Chrome (Android) PWA install issue - Google Help\
  Jun 25, 2026 — Murias Digital. Jun 25, 2026. 6/25/2026, 7:50:48 AM. Based on everything you have tested, this does not look like a normal website...\
  Google Help
- [link](https://stackoverflow.com/questions/59962926/pwa-app-beforeinstallprompt-not-firing-in-mobile-browser-but-working-in-normal-d)\
  PWA app beforeInstallPrompt not firing in mobile browser but ...\
  Jan 29, 2020 — 2 Answers. ... first, Chrome, Edge, FireFox on iOS are all pseudo browsers, not real ones. They just use a webview so you can sync...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/53264568/why-is-my-angular-pwa-standalone-display-not-working-in-chrome-on-android)\
  Why is my Angular PWA standalone display not working in ...\
  Nov 12, 2018 — 2 Answers. Sorted by: 3. So I have been able to solve this by using this answer: https://stackoverflow.com/a/51706405/5798882. It ...\
  Stack Overflow

Show all

## what files have i written and what pkgs have i installed on the server

Based on the commands executed in your SSH session so far, here is the exact list of files you have created and packages you have installed on your Debian server.

### 📁 Files Written to the Server

You have written **5 distinct files** across your web root and system configuration directories:

- `/var/www/html/pwa/index.html` — The core application file that runs the JavaScript timer and triggers the service worker.
- `/var/www/html/pwa/manifest.json` — The JSON configuration configuration file containing your PWA standalone metadata and app scope.
- `/var/www/html/pwa/icon-192.png` — The 192x192 pixel binary PNG asset created by your python script.
- `/var/www/html/pwa/icon-512.png` — The 512x512 pixel binary PNG asset created by your python script.
- `/var/www/html/pwa/sw.js` — The service worker JavaScript file managing your offline asset caching.
- `/etc/nginx/sites-available/pwa` — Your custom Nginx server block routing rule (which is symlinked to `/etc/nginx/sites-enabled/pwa`).

_(Note: The temporary files `icon.png` and `generate_icons.py` were overwritten or deleted during the process)._

### 📦 Packages Installed on the Server

Your `apt` package manager has pulled down **3 primary software packages** along with their system dependencies:

- `nginx` — The core web server handling your HTTP traffic.
- `imagemagick` — Installed in step 5 to utilize the image conversion binaries (though later superseded by Python).
- `python3` — Utilized by default on modern Debian setups, but verified to execute your standalone binary image generation script.

If you want to clear out any of these files to start fresh or remove unused packages, let me know and I can give you the **cleanup commands** right away!

## why put them on var

Placing web files in `/var` follows a universal structural design pattern called the **Filesystem Hierarchy Standard (FHS)**, which defines where files must live in Linux operating systems.

Here is why web servers like Nginx and Apache use `/var/www/` by default instead of other system folders:

### 1. The definition of "Var"

The name `var` stands for **variable**. This directory is explicitly reserved for content that changes frequently during system operations, such as:

- Web application files
- Database records
- System logs (`/var/log`)
- Mail spools

### 2. Security isolation

Linux separates static, permanent system files (like software binaries in `/usr/bin` or system configurations in `/etc`) from variable data.

- By keeping web files in `/var`, you can configure strict read/write permissions.
- If a hacker exploits a vulnerability in your web app, they are trapped inside `/var/www/` and cannot easily overwrite critical system binaries located in other directories.

### 3. Storage management

On enterprise production servers, system administrators often format and place `/var` on a completely **separate physical drive or disk partition**.

- This ensures that if your web server suddenly receives millions of file uploads or massive log files, it will only fill up the `/var` disk space.
- The main operating system partition (`/`) will remain untouched, preventing the entire Linux server from crashing due to running out of space.

### 4. Why not use the root (`/`) or home (`/home`) directory?

- **The Root (`/`) directory** is meant strictly for the core operating system. Putting random web files there creates clutter and security holes.
- **The Home (`/home/user`) directory** is meant for personal user files. Nginx runs under a restricted system user account named `www-data`. By default, `www-data` does not have permission to read files inside your personal `/home` folder, which would cause an annoying `403 Forbidden` error when browsing your site.

If you are interested, we can look at changing the Nginx configuration to host your PWA from a **different directory**, or we can set up **custom permissions** for security. How would you like to proceed?

- [link](https://tonylixu.medium.com/devops-in-linux-var-6a22c8df65e8)\
  DevOps in Linux — /var. Deep dive into Linux /var directory | by Tony | Medium\
  Sep 8, 2023 — The origins of the /var directory in Unix and Linux systems can be traced back to the Unix Filesystem Hierarchy Standard (FHS). Th...\
  \
  \
  Medium

- [link](https://www.reddit.com/r/linux/comments/cpisy/anyone%5Fknow%5Fwhy%5Fvar%5Fand%5Fetc%5Fwerent%5Fnamed/)\
  Anyone know why /var and /etc weren't named something like /etc and /cfg? : r/linux\
  Jul 14, 2010 — Becaues /var doesn't mean "various" - it means "variable" - other parts of the system could generally be mounted read-only, but /v...\
  \
  \
  Reddit

- [link](https://tonylixu.medium.com/devops-in-linux-var-6a22c8df65e8)\
  DevOps in Linux — /var. Deep dive into Linux /var directory | by Tony | Medium\
  Sep 8, 2023 — The concept of the /var directory was part of these standards from early on. Its role was to provide a location for files that cha...\
  \
  \
  Medium

# how soon does ssh close by remote

By default, <mark>an SSH server<span> </span><strong>never automatically closes an inactive connection</strong><span> </span>unless a specific timeout policy has been configured or a network intermediary terminates the route</mark>. [link](https://unix.stackexchange.com/questions/263302/how-does-an-ssh-connection-become-inactive)

If your remote session is dropping, how soon it closes depends entirely on the settings defined in your server or client configurations, or how your network handles idle traffic.

### 1. Server-Controlled Inactivity Timeouts

If the remote host is explicitly dropping your connection, it is usually driven by two parameters located in the server's `/etc/ssh/sshd_config` file: [link](https://superuser.com/questions/522094/how-do-i-resolve-a-ssh-connection-closed-by-remote-host-due-to-inactivity)

- **`ClientAliveInterval`**: The number of seconds the server waits before sending a null packet to check if the client is still active.
- **`ClientAliveCountMax`**: The number of times the server will send this check without getting a response before terminating the connection. [link](https://superuser.com/questions/943436/when-why-does-ssh-close-a-connection)

> **The Math**: If `ClientAliveInterval` is set to `300` (5 minutes) and `ClientAliveCountMax` is `3`, the remote host will close the connection after exactly **15 minutes** of zero client responsiveness. If `ClientAliveCountMax` is set to `0`, the server drops the connection immediately after the first missed interval. [link](https://superuser.com/questions/699676/how-to-prevent-ssh-from-disconnecting-if-its-been-idle-for-a-while)

### 2. Firewall and NAT Timeouts

If the remote server configuration has no timeouts, stateful firewalls or NAT routers between you and the server often silently drop idle TCP connections to save resources. [link](https://unix.stackexchange.com/questions/125413/ssh-connection-closed-by-remote-host-randomly-while-working-on-an-interactive)

- Network appliances commonly drop unacknowledged TCP states after **30 to 60 minutes** of zero activity.
- Because the drop is silent, your local terminal will freeze or hang rather than closing cleanly right away. [link](https://serverfault.com/questions/283129/why-do-consoles-sometimes-hang-forever-when-ssh-connection-breaks)

### 3. Authentication Failures

If you are asking about how quickly a remote server drops an unauthenticated login attempt, OpenSSH defaults to **60 seconds** via the `LoginGraceTime` directive. If you do not successfully log in within that minute, the remote host closes the connection. [link](https://support.huawei.com/enterprise/en/doc/EDOC1100064353/babab71/ssh-server-timeout)

***

### How to Stop the Remote Host from Disconnecting

To force your client to constantly ping the remote host and keep the route active, you can configure your local settings. [link](https://serverfault.com/questions/283129/why-do-consoles-sometimes-hang-forever-when-ssh-connection-breaks)

1. Open your **local** SSH configuration file:\
   bash

<!---->

```
nano ~/.ssh/config
```

Use code with caution.
2\. Add the following rules to send a heartbeat packet every 60 seconds:\
text

```
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

Use code with caution.

To investigate further, let me know:

- Is your connection dropping **instantly upon login**, or after a **period of idling**?

- Do you see a specific **error message** (like "Connection reset by peer") when it drops? [link](https://stackoverflow.com/questions/61785078/ssh-closes-connection-immediately-after-successful-login-for-a-specific-user)

- [link](https://serverfault.com/questions/283129/why-do-consoles-sometimes-hang-forever-when-ssh-connection-breaks)\
  Why do consoles sometimes hang forever when SSH connection breaks?\
  Jun 22, 2011 — Here are some things you can try: \* \*\*Use a keyboard shortcut to force an exit\*\* \* From the frozen session, hit these keys in orde...\
  Server Fault

- [link](https://superuser.com/questions/522094/how-do-i-resolve-a-ssh-connection-closed-by-remote-host-due-to-inactivity)\
  How do I resolve a ssh connection closed by remote host due to inactivity?\
  Dec 20, 2012 — If you're getting a message that your SSH connection was closed by the remote host due to inactivity, you can try these steps: \* \*\
  Super User

- [link](https://superuser.com/questions/699676/how-to-prevent-ssh-from-disconnecting-if-its-been-idle-for-a-while)\
  How to prevent SSH from disconnecting if it's been idle for a while\
  Jan 10, 2014 — Example: If you set ServerAliveInterval to 60 and leave ServerAliveCountMax as it is, this means the keepalive will only wait for ...\
  Super User

Show all

## after idling

If your connection drops after idling, it is <mark>almost always caused by a<span> </span><strong>network firewall/router timeout</strong><span> </span>or specific<span> </span><strong>host-enforced security policies</strong></mark>.

When a session sits idle with no data flowing, intermediate network devices or the server itself will intentionally kill the connection to save resources or improve security.

### Why Your Idle Connection Drops

- **Silent Firewall Drops (The "Frozen" Terminal):** If your terminal completely freezes and you cannot type for several seconds before it finally disconnects, a network router or firewall is likely responsible. Stateful firewalls quietly delete idle connection records from their routing tables—usually after **15 to 30 minutes** of zero traffic.
- **Server-Enforced Disconnects (The "Clean" Drop):** If your terminal instantly kicks you back to your local prompt with a clean message like `Connection to host closed`, the remote server is actively enforcing an idle timeout policy.

### How to Fix It Immediately

You can fix both issues right now by forcing your SSH client to send a tiny "heartbeat" packet every few seconds, which tricks the firewalls and server into thinking you are constantly active.

Run your SSH command with these active keep-alive flags:

bash

```
ssh -o ServerAliveInterval=60 -o ServerAliveCountMax=3 user@remote_host
```

Use code with caution.

- **`ServerAliveInterval=60`**: Sends an automated, invisible ping to the server every 60 seconds.
- **`ServerAliveCountMax=3`**: Allows up to 3 missed responses before giving up on the connection.

***

To help you apply a permanent fix, could you tell me:

- Are you connecting from a **Mac, Linux, or Windows (e.g., PuTTY/WSL)** machine?
- Do you have **administrator/sudo access** to the remote server, or can you only modify your local computer?

## how does network fluctuation impact

Network fluctuations <mark>cause your SSH connection to drop</mark> because SSH relies on a continuous, stateful **TCP connection**. Unlike web browsing (HTTP), which loads a page and stops, SSH requires a persistent stream of communication to keep the session alive.

When your network fluctuates, it impacts your session in three distinct ways:

### 1. Packet Loss and Terminal Lag

When a network dips, data packets containing your keystrokes or the server's responses are lost in transit.

- **The Impact:** Your terminal will temporarily freeze.
- **The Mechanism:** Your local machine will keep trying to retransmit the missing data packets. If the fluctuation is brief (a few seconds), the network recovers, the packets finally arrive, and your terminal suddenly catches up.

### 2. TCP Timeout (The "Broken Pipe")

If the network fluctuation lasts too long, the operating system's underlying TCP stack gives up.

- **The Impact:** You are kicked out of the session, usually seeing the error: `client_loop: send disconnect: Broken pipe` or `Connection timed out`.
- **The Mechanism:** If the client receives no acknowledgment from the server after a specific number of retries (governed by your OS TCP timeout settings, often around 15 minutes by default), it assumes the route is permanently dead and closes the socket.

### 3. IP Address Changes (Roaming)

If your network fluctuation involves your device physically switching connections—such as dropping Wi-Fi and falling back to cellular data—your public IP address changes.

- **The Impact:** The connection terminates instantly.
- **The Mechanism:** Standard SSH binds a session strictly to a specific pair of IP addresses (Client IP\
  ↔\
  Server IP). The moment your client IP changes, the server rejects any incoming packets from the new IP for security reasons, instantly killing the old session.

***

### How to Make Your Sessions Fluctuation-Proof

If you work on an unstable network, standard SSH is frustrating. You can use these two tools to make your sessions completely immune to network drops:

1. **Use Mosh (Mobile Shell):**

- **Why it works:** Mosh replaces TCP with a UDP-based protocol designed specifically for roaming and bad connections.
- **The benefit:** If your network drops for an hour, or your IP address changes, you can simply reopen your laptop and keep typing exactly where you left off. No disconnects.

2. **Use Tmux or Screen:**

- **Why it works:** These are terminal multiplexers that run directly on the remote server.
- **The benefit:** If your network fluctuates and drops your SSH connection, your scripts, text editors, and tasks keep running safely on the server. You simply reconnect and run `tmux a` to resume your exact workspace.

To help you implement the best workaround, let me know:

- Are you running long-running **scripts/commands** that get ruined when the network drops?

- Are you allowed to **install new software** (like `mosh` or `tmux`) on the remote server?

- [link](https://repost.aws/knowledge-center/ec2-instance-exceeding-network-limits)\
  Troubleshoot EC2 instance that exceed network limits\
  Mar 20, 2025 — When a network drops a packet, the TCP automatically retransmits lost segments. Both packet queues and drops can result in higher ...\
  \
  \
  AWS re:Post

- [link](https://www.interserver.net/tips/kb/complete-guide-how-tcp-keepalives-keep-long-idle-connections-alive/)\
  Complete Guide: How TCP Keepalives Keep Long-Idle Connections Alive\
  Jul 1, 2026 — You have an SSH tunnel running to a VPS behind a corporate NAT gateway. You leave it open while you go to a meeting. When you come...\
  \
  InterServer

- [link](https://dlaycable.com/what-happens-if-an-ethernet-cable-is-too-long-the-ultimate-expert-guide/)\
  What Happens If an Ethernet Cable Is Too Long? The Ultimate Expert Guide - DLAY Template Project\
  Aug 28, 2025 — It ( the receiving device ) may discard these corrupted packets, a problem known as packet loss. Your devices will then have to re...\
  \
  dlaycable.com

Show all

## how soon does it close when network fluctuates

When your network fluctuates, your SSH connection will close in **as little as 15 seconds or up to 15+ minutes**, depending entirely on whether you are using **SSH keep-alive settings** or relying on your operating system's default **TCP timeout rules**.

### Scenario A: You configured SSH Keep-Alives (Fast Drop)

If you manually added `ServerAliveInterval` and `ServerAliveCountMax` to your SSH configuration to stop idle timeouts, these exact settings will backfire during a network fluctuation. They force a fast disconnect if the network drops completely. [link](https://oneuptime.com/blog/post/2026-03-02-configure-ssh-idle-timeout-keep-alive-ubuntu/view)

- **The Math:** If your `ServerAliveInterval` is `15` and `ServerAliveCountMax` is `3`, your client will actively kill your connection after exactly **45 seconds** of network instability.
- **The Result:** The client sends its pings, gets no response due to the network fluctuation, assumes the server is permanently dead, and aggressively terminates the session with a `broken pipe` error.

### Scenario B: Default SSH Settings (Slow Drop)

If you have **no** keep-alive rules configured in your SSH configuration, your terminal will freeze during a fluctuation, and your local operating system's underlying TCP kernel handles the waiting period.

- **Linux/Mac Defaults:** The operating system will attempt to resend unacknowledged data packets using an exponential backoff algorithm (governed by the system kernel parameter `tcp_retries2`). On standard Linux and macOS setups, it takes roughly **15 minutes** of continuous network disconnection before the OS gives up and closes the SSH socket.
- **Windows Defaults:** On Windows, the default TCP maximum retransmission timeout is significantly lower, usually forcing a connection drop after **2 to 3 minutes** of network loss.

### Scenario C: IP Address Change (Instant Drop)

If the network fluctuation forces your device to switch networks—such as dropping a weak Wi-Fi signal and instantly picking up a cellular data connection—the disconnection is **immediate** (under 1 second).

- The server will immediately drop or ignore packets sent from your new IP address for security reasons, causing the old session to break instantly.

***

### How to tolerate fluctuations without dropping

If you want your session to survive network fluctuations that last several minutes, you can adjust your local `~/.ssh/config` file to be highly tolerant: [link](https://unix.stackexchange.com/questions/653453/keep-ssh-connection-alive-if-internet-briefly-disconnects)

text

```
Host *
    ServerAliveInterval 15
    ServerAliveCountMax 120
```

Use code with caution.

> **Why this helps:** This tells your client to ping every 15 seconds, but allows up to 120 missed pings. This gives your network a **30-minute window** to fluctuate, drop, or completely disconnect before the client actively kills your terminal session.

Would you like help configuring your system to **increase this grace period**, or would you like to see how to install **Mosh**, which natively handles network changes without ever dropping? [link](https://unix.stackexchange.com/questions/653453/keep-ssh-connection-alive-if-internet-briefly-disconnects)

- [link](https://www.cyberciti.biz/tips/open-ssh-server-connection-drops-out-after-few-or-n-minutes-of-inactivity.html)\
  OpenSSH Server connection drops out after inactivity problem\
  Jan 16, 2025 — For example, when ServerAliveInterval is set to 15 and ServerAliveCountMax is left at the 3, if the server becomes unresponsive, s...\
  nixCraft
- [link](https://oneuptime.com/blog/post/2026-03-02-configure-ssh-idle-timeout-keep-alive-ubuntu/view)\
  How to Configure SSH Idle Timeout and Keep-Alive on Ubuntu\
  Mar 2, 2026 — Client-Side Configuration. The client side controls what happens when you're connecting to a remote server that drops idle connect...\
  OneUptime
- [link](https://unix.stackexchange.com/questions/653453/keep-ssh-connection-alive-if-internet-briefly-disconnects)\
  Keep ssh connection alive if internet briefly disconnects\
  Jun 8, 2021 — Here are some ways to keep an SSH connection alive if your internet briefly disconnects: \* \*\*Use a VPN\*\* A VPN can create an inter...\
  Unix & Linux Stack Exchange

Show all

# chrome flag to disable update

There is **no built-in Chrome flag** (`chrome://flags`) to disable browser updates.

Google handles Chrome updates through external system processes rather than internal browser configurations. To completely stop automatic updates, you must use system-level configurations depending on your operating system. [link](https://stackoverflow.com/questions/53088174/how-to-turn-off-chrome-browser-auto-update)

### 🛠️ Disabling Updates on Windows

#### Method 1: Windows Services (Easiest)

1. Press **Windows Key + R**, type `services.msc`, and press **Enter**.
2. Scroll down to find **Google Update Service (gupdate)** and **Google Update Service (gupdatem)**.
3. Right-click each service, select **Properties**, change the _Startup type_ to **Disabled**, and click **Apply**. [link](https://stackoverflow.com/questions/53088174/how-to-turn-off-chrome-browser-auto-update)

#### Method 2: System Configuration (MSConfig)

1. Press **Windows Key + R**, type `msconfig`, and click **OK**.
2. Select the **Services** tab.
3. Check the box at the bottom that says **Hide all Microsoft services**.
4. Look through the remaining list, uncheck **Google Update Service (gupdate)** and **Google Update Service (gupdatem)**, then click **Apply** and restart your PC. [link](https://www.youtube.com/watch?v=ysa7OaXvPVs\&t=88)

#### Method 3: Registry Editor (Permanent)

1. Press **Windows Key + R**, type `regedit`, and hit **Enter**.
2. Navigate to: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Update` _(If the "Update" folder doesn't exist, right-click "Google", select New > Key, and name it Update)_.
3. Right-click the blank space in the right pane, select **New > DWORD (32-bit) Value**, and name it `AutoUpdateCheckPeriodMinutes`.
4. Double-click it and ensure its value data is set to `0`. [link](https://www.chromium.org/administrators/turning-off-auto-updates/)

***

### 🍏 Disabling Updates on macOS

Because Mac handles updates through a background terminal agent, you must disable the Google Software Update daemon.

1. Open the **Terminal** app.

2. To turn off automatic checks completely, paste the following command and press **Enter**:\
   bash

<!---->

```
defaults write com.google.Keystone.Agent checkInterval 0
```

Use code with caution.

***

### 🛑 Disabling "Component" Updates (Alternative Command-Line Flag)

If you are looking to block background silent component updates (like Adobe Flash, Widevine DRM, or dictionary updates) rather than the main browser package, you can launch Chrome via the command line or terminal using a specific launch argument: [link](https://github.com/puppeteer/puppeteer/issues/13010)

text

```
--disable-component-update
```

Use code with caution.

_Note: This must be added to the end of the target shortcut path and will not prevent the core browser version from upgrading._ [link](https://support.google.com/chrome/a/answer/6350036?hl=en\&gl=us)

To help tailor this, what is your **operating system** and the **primary reason** you want to disable updates?

- [link](https://stackoverflow.com/questions/53088174/how-to-turn-off-chrome-browser-auto-update)\
  How to turn off chrome browser auto update - Stack Overflow\
  Oct 31, 2018 — Open run and then type services.msc then disable these two Google update services: Google update service (gupdate) Google update s...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=kVtbXM9G7nI\&t=28)\
  How to Disable Automatic Google Chrome Updates on ...\
  Jun 5, 2024 — to the online world so having it's patched is always a good idea. now for whatever reason if you don't want to have the automatic ...\
  3m\
  YouTube·BrenTech
- [link](https://www.youtube.com/watch?v=dOtUjQFhMXM)\
  How to Disable Chrome Auto Update (Advanced)\
  Feb 17, 2026 — hey everybody Today we are going to learn how to disable Google Chrome auto update on desktop. First close Chrome completely Open ...\
  0:42\
  YouTube·RDKtutorials

Show all

## does chrome auto update on android when i disabled everything on play

<mark><strong><span>No, Google Chrome will not auto-update its core application</span></strong><span> </span>if you have disabled all auto-update settings in the Google Play Store</mark>. [link](https://support.google.com/chrome/answer/95414?hl=en-GB\&co=GENIE.Platform%3DAndroid\&gl=us)

However, because Chrome is deeply integrated into the Android operating system, there are important catches regarding background components and unintended triggers you should look out for.

### ⚠️ The Catch: Hidden Component Updates

Even with the Play Store updates disabled, Chrome can still update its **internal web components silently** in the background. [link](https://android.stackexchange.com/questions/246911/what-is-google-up-to-google-play-store-updating-apps-even-though-auto-update-is)

- **What updates**: Security certifications, built-in dictionaries, and Widevine DRM components.
- **What stays the same**: Your core browser version, layout, interface, and features will remain exactly as they are.

### 🚨 Actions That Will Force an Accidental Update

Google Play will strictly respect your setting _until_ one of the following scenarios triggers a forced override:

- **Tapping "Update All"**: If you manually go to the Play Store to update other apps and hit "Update All", Chrome will be updated alongside them.
- **Android System WebView Updates**: Chrome and the Android System WebView share the same rendering engine. If WebView updates, it will often automatically force Chrome to update to maintain system stability.
- **Google Play Services Framework**: Major background system updates pushed directly by Google can occasionally reset or bypass individual app update preferences. [link](https://android.stackexchange.com/questions/246911/what-is-google-up-to-google-play-store-updating-apps-even-though-auto-update-is)

### 🔒 How to Ensure Chrome Absolutely Never Updates

If you want to guarantee Chrome remains frozen on your current version, you must change your Android system settings:

1. **Disable Android System WebView Updates**:

- Search for **Android System WebView** in the Google Play Store.
- Tap the three vertical dots in the top-right corner.
- Uncheck **Enable auto-update**.

2. **Restrict Background Data**:

- Go to your device **Settings > Apps > Chrome > Mobile data & Wi-Fi**.
- Toggle off **Background data**. (Note: This prevents Chrome from using mobile data when you aren't actively using the app, though it can still update over Wi-Fi if an override occurs).

3. **Turn Off "Auto-update apps" at the System Level**:

- Open the **Play Store**, tap your profile icon, and go to **Settings > Network preferences > Auto-update apps**.
- Ensure it is explicitly set to **Don't auto-update apps**.

Are you trying to hold onto a **specific old version** of Chrome, or are you trying to **save data and storage space**? Knowing your goal can help find the best workaround!

- [link](https://support.google.com/chrome/answer/95414?hl=en-GB\&co=GENIE.Platform%3DAndroid\&gl=us)\
  Update Google Chrome - Android\
  Get a Chrome update when available ... Chrome should automatically update based upon your Play Store settings. You can check if th...\
  Google Help
- [link](https://www.quora.com/I-am-in-trouble-I-have-mistakenly-uninstalled-updates-for-Chrome-in-Play-Store-How-do-I-update-Chrome-now)\
  I am in trouble. I have mistakenly uninstalled updates for Chrome in Play Store. How do I update Chrome now?\
  Sep 22, 2021 — You can update Chrome manually by following these steps: 1. Open the Google Play Store app 2. Tap your profile icon in the top rig...\
  Quora
- [link](https://www.wikihow.com/Completely-Disable-Google-Chrome-Update)\
  Disable Google Chrome Updates: Windows, Android, & iPhone\
  Jul 15, 2026 — Disable App Updates (Android) \* Open your Android's. Google Play Store. Tap the Google Play Store app icon, which resembles a mult...\
  wikiHow

Show all

## chrome flag to disable update prompt

There is **no internal Chrome flag** (`chrome://flags`) to disable the update prompt or the colored "Update" menu badge.

When you block updates at the system level (by disabling update services or renaming folders), Chrome notices it cannot reach the update servers. After a few weeks, it triggers a built-in fallback warning—such as a colored badge or a **"Can't update Chrome"** prompt—to alert you that the browser is falling behind on security patches.

To hide or bypass these prompts on a desktop browser, you must use command-line flags or system policies instead.

### 💻 Method 1: Use a Command-Line Flag (Bypass the Prompt)

You can trick Chrome into thinking it is not outdated by using a specific command-line launch argument. This fools Chrome's internal timer so it stops displaying the expiration warning. [link](https://www.reddit.com/r/chrome/comments/1k1ejk0/how%5Fcan%5Fi%5Fturn%5Foff%5Fthis%5Fcant%5Fupdate%5Fchrome%5Fprompt/)

1. Right-click your **Google Chrome shortcut** on your desktop and select **Properties**.

2. Locate the **Target** field. It will look something like this:\
   `"C:\Program Files\Google\Chrome\Application\chrome.exe"`

3. Click into the text box, go to the very end of that line, add a **space**, and paste the following string:\
   text

<!---->

```
--simulate-outdated-no-au="Tue, 31 Dec 2099 23:59:59 GMT"
```

Use code with caution.
4\. Click **Apply** and then **OK**.
5\. _Note: You must always launch Chrome using this specific shortcut for the prompt to stay hidden._ [link](https://www.reddit.com/r/chrome/comments/1k1ejk0/how%5Fcan%5Fi%5Fturn%5Foff%5Fthis%5Fcant%5Fupdate%5Fchrome%5Fprompt/)

***

### 🏛️ Method 2: Suppress the Windows 7/8/8.1 End-of-Life Prompt

If you are getting a persistent notification stating _"To get future Google Chrome updates, you'll need Windows 10 or later,"_ you can completely disable this specific pop-up via the Windows Registry: [link](https://www.reddit.com/r/chrome/comments/z9ay1h/how%5Fdo%5Fi%5Fdisable%5Fthe%5Fto%5Fget%5Ffuture%5Fgoogle%5Fchrome/)

1. Press **Windows Key + R**, type `regedit`, and hit **Enter** to open the Registry Editor.

2. Paste the following path into the top address bar and press Enter:\
   `HKEY_CURRENT_USER\Software\Policies\Google\Chrome`

3. _If the "Google" or "Chrome" folders do not exist:_ Right-click the parent folder, select **New > Key**, and name them accordingly.

4. Right-click any empty space in the right pane, select **New > DWORD (32-bit) Value**, and name it:\
   text

<!---->

```
SuppressUnsupportedOSWarning
```

Use code with caution.
5\. Double-click your new `SuppressUnsupportedOSWarning` file, change its **Value data to 1**, and click **OK**.
6\. Restart your computer. [link](https://www.reddit.com/r/chrome/comments/z9ay1h/how%5Fdo%5Fi%5Fdisable%5Fthe%5Fto%5Fget%5Ffuture%5Fgoogle%5Fchrome/)

***

### 🏢 Method 3: Use Enterprise Group Policies (Best for Relaunch Notifications)

If your browser is showing a force-relaunch prompt configured by an administrator or a third-party management tool, you can clear it using Chrome's policy hub:

1. Type `chrome://policy` into your Chrome address bar and hit Enter.
2. Look for policies named `RelaunchNotification` or `RelaunchNotificationPeriod`.
3. If they are present and active, they are forcing the prompt. If you have administrator access to the machine, you must delete these keys from your system's Registry Editor under `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome`. [link](https://superuser.com/questions/1774075/how-to-disable-to-get-future-google-chrome-updates-youll-need-windows-10-or-l)

Are you trying to hide the **"Can't update Chrome" badge**, an **Unsupported OS notification**, or a **relaunch prompt** set by an organization? Telling me which one you see can help narrow down the exact fix. [link](https://www.reddit.com/r/chrome/comments/1k1ejk0/how%5Fcan%5Fi%5Fturn%5Foff%5Fthis%5Fcant%5Fupdate%5Fchrome%5Fprompt/)

- [link](https://www.reddit.com/r/chrome/comments/1k1ejk0/how%5Fcan%5Fi%5Fturn%5Foff%5Fthis%5Fcant%5Fupdate%5Fchrome%5Fprompt/)\
  How can I turn off this "Can't update Chrome" prompt? - Reddit\
  Apr 17, 2025 — Create a shortcut to Chrome. Right click and go to Properties. Go to target. It should be something like: ".....\chrome.exe". Past...\
  Reddit·r/chrome
- [link](https://superuser.com/questions/1774075/how-to-disable-to-get-future-google-chrome-updates-youll-need-windows-10-or-l)\
  How to disable "To get future Google Chrome updates, you'll ...\
  Mar 16, 2023 — How to disable "To get future Google Chrome updates, you'll need Windows 10 or later" startup warning on portable Ungoogled Chromi...\
  Super User
- [link](https://www.geeksforgeeks.org/techtips/disable-chrome-auto-update-in-windows/)\
  How to Disable Chrome Automatic Update in Windows?\
  Jul 23, 2025 — Method 2: Disable Chrome's Updates via System Configuration Utility \* Step 1: Press Windows Key + R, type "msconfig", and hit Ente...\
  GeeksforGeeks

Show all

## i remember there does exist a flag to remove the update badge

You are correct that **experimental flags specifically targeting menu badges** did exist in Chrome’s history. However, Google routinely removes experimental flags once a feature goes completely live or becomes a permanent part of the browser's core architecture. [link](https://support.google.com/chrome/answer/16552482?hl=en\&gl=us)

Depending on exactly which badge or layout you remember, the flag you are thinking of likely falls into one of these categories:

### 1. The "#chrome-refresh-2023" Flags (Most Likely)

When Google forced its major "Material You" visual redesign, the three-dot menu changed significantly, and the **"Out of date" / "Update"** warning badge was heavily stylized into a bright green, orange, or red pill shape.

- **The Past Flag**: For a long time, users could search for `#chrome-refresh-2023` or `#chrome-webui-refresh-2023` in `chrome://flags` and set them to **Disabled**. This reverted Chrome to the older, classic UI theme, effectively erasing the modern pill-shaped update badge.
- **Current Status**: Google has entirely stripped the "Refresh 2023" toggle out of the flags ecosystem. The new UI—and its badge system—is now hardcoded into the browser.

### 2. The Menu "New" Badge Flags

If the badge you remember wasn't an update warning, but rather the bright blue **"New"** tags that appear next to newly added browser features in the drop-down menu:

- **The Past Flag**: You used to be able to type `#enable-new-badge-on-menu-items` into the flag search bar and select **Disabled** to clean up the menu layout.
- **Current Status**: This flag was also phased out once the UI changes became standard. [link](https://www.askvg.com/tip-remove-new-badge-or-label-from-menu-items-in-google-chrome/)

### 3. Custom Shortcut Workarounds (The Only Remaining "Fix")

Because the flags page can no longer clear the update badge, the only active way to remove a persistent colored update badge from your UI without actually updating the browser is to use the **Command-Line flag trick** in your shortcut properties: [link](https://support.google.com/chrome/answer/16552482?hl=en\&gl=us)

1. Right-click your Chrome desktop shortcut and select **Properties**.

2. Click the **Target** text box, scroll to the absolute end of the text line, and hit the **Spacebar** once.

3. Paste the following line at the very end:\
   text

<!---->

```
--simulate-outdated-no-au="Tue, 31 Dec 2099 23:59:59 GMT"
```

Use code with caution.
4\. Click **Apply** and **OK**.

When launched from this shortcut, Chrome's internal clock is tricked into thinking the browser version is fresh until the year 2099, removing the colored update warning entirely.

Does that custom shortcut trick clear the specific badge you are seeing, or are you trying to troubleshoot an **enterprise/managed device**? [link](https://support.google.com/chrome/a/answer/7679871?hl=en\&gl=us)

- [link](https://www.tenforums.com/browsers-email/210056-how-remove-new-badge-google-chrome-menus.html)\
  How to remove the "New" badge in Google Chrome menus?\
  Dec 27, 2023 — Bobby Phoenix said: 27 Dec 2023. How to remove the "New" badge in Google Chrome menus? The bright blue box with "New" is so annoyi...\
  Windows 10 Forums
- [link](https://support.google.com/chrome/answer/16552482?hl=en\&gl=us)\
  Learn about Chrome flags - Google Help\
  To help build and test new features or changes in Chrome, developers use Chrome flags. Chrome flags are temporary and may change, ...\
  Google Help
- [link](https://www.askvg.com/tip-remove-new-badge-or-label-from-menu-items-in-google-chrome/)\
  \[Tip] Remove “New” Badge or Label from Menu Items ... - AskVG\
  Mar 1, 2021 — If you don't like the “New” badge and want to get rid of it, it's possible by modifying a preference/flag in Chrome. The same pref...\
  AskVG

Show all

## "force update menu type"?

Yes, you nailed the exact technical name. **`force-update-menu-type`** is a legitimate hidden setting built into the Chromium source code. [link](https://chromium.googlesource.com/chromium/src/+/ce62d29d7552e62cc0fa2dcd911f3d4acf37cb18/chrome/browser/about%5Fflags.cc)

However, there are a few important technical details regarding how it behaves and why it might not have worked the way you expected:

### 📱 1. It is Exclusive to Android

This specific flag and command-line switch was developed by the Google Omaha (update engine) test teams specifically for **Chrome on Android**. It does not exist in the Windows or macOS versions of Chrome. [link](https://chromium.googlesource.com/chromium/src/+/6971cbb305a12cc402d2cb9929bc7e3d70632f4a/chrome/browser/flag-metadata.json)

### 🧪 2. It is an Internal Testing Tool

In the source code, this flag is classified under the `MULTI_VALUE_TYPE` category. Its intended purpose is to allow developers and quality assurance teams to force-simulate how Chrome behaves when an update is pending. [link](https://chromium.googlesource.com/chromium/src/+/6971cbb305a12cc402d2cb9929bc7e3d70632f4a/chrome/browser/flag-metadata.json)

By changing its values, developers can force the menu button to cycle through different update states, such as:

- An available inline update flow
- A customized update summary text
- Different variations of the colored update alert badge [link](https://chromium.googlesource.com/chromium/src/+/ecc5739ee2cb5019040e6ab5dce01edc7cfe34ae/chrome/browser/about%5Fflags.cc)

Because it is meant to _test_ the menu types rather than turn them off, setting it randomly or leaving it on "Default" typically defaults to whatever standard update badge your browser is trying to push.

### 🛑 3. How to check if it's still available to you

Because this is a permanent fixture in the code for mobile automation testing, it was added to Google's internal "never expire" list (`flag-never-expire-list.json`). To see if it is exposed on your current version of Android:

1. Open Chrome on your Android device.
2. Type **`chrome://flags`** into the address bar.
3. Search specifically for **`force-update-menu-type`**. [link](https://chromium.googlesource.com/chromium/src/+/6971cbb305a12cc402d2cb9929bc7e3d70632f4a/chrome/browser/flag-metadata.json)

If it appears, you will see a drop-down menu with several specific simulation states. If you select **Disabled**, it should theoretically stop forcing any simulated update UI layouts—though if your core browser is legitimately out of date, the system-level update badge may still override it. [link](https://support.google.com/chrome/answer/16552482?hl=en\&gl=us)

Are you trying to tweak this setting on an **Android device**, or were you hoping to use a similar function to clear a badge on a **desktop computer**?

- [link](https://chromium.googlesource.com/chromium/src/+/6971cbb305a12cc402d2cb9929bc7e3d70632f4a/chrome/browser/flag-metadata.json)\
  chrome/browser/flag-metadata.json - chromium/src - Google Git\
  ... // This file lists metadata for chrome://flags entries. This metadata is not. // ever used in the built browser or in any comp...\
  Google Open Source
- [link](https://chromium.googlesource.com/chromium/src/+/ce62d29d7552e62cc0fa2dcd911f3d4acf37cb18/chrome/browser/about%5Fflags.cc)\
  chrome/browser/about\_flags.cc - chromium/src - Git at Google\
  {"force-update-menu-type", flag\_descriptions::kUpdateMenuTypeName,. flag\_descriptions::kUpdateMenuTypeDescription, kOsAndroid,. MU...\
  Google Open Source
- [link](https://juejin.cn/post/7235946041954091068)\
  Selenium Chrome的最全常用Option及其一些加速优化 - 稀土掘金\
  May 22, 2023 — ... char kForceDisableSigninFRE\[] = "force-disable-signin-fre"; // Forces the update menu type to a specific type. const char kFor...\
  掘金

Show all

# 
