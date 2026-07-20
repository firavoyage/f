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

# 
