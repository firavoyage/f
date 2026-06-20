# .

```sh
 ~ % ruby -e 'puts rand(1024..65535)'
62286
```

```sh
 ~ % snap install nextcloud
nextcloud 33.0.5snap2 from Nextcloud✓ installed
 ~ % sudo snap services nextcloud

Service                    Startup  Current   Notes
nextcloud.apache           enabled  inactive  -
nextcloud.logrotate        enabled  inactive  timer-activated
nextcloud.mysql            enabled  active    -
nextcloud.nextcloud-cron   enabled  active    -
nextcloud.nextcloud-fixer  enabled  active    -
nextcloud.php-fpm          enabled  active    -
nextcloud.redis-server     enabled  active    -
nextcloud.renew-certs      enabled  active    -
 ~ % snap info nextcloud

name:      nextcloud
summary:   Nextcloud Server - A safe home for all your data
publisher: Nextcloud✓
store-url: https://snapcraft.io/nextcloud
contact:   https://github.com/nextcloud/nextcloud-snap
license:   unset
description: |
  Access, share and protect your files, calendars, contacts, communication and
  more at home and in your enterprise.

  The Nextcloud snap package is a community-supported project.
commands:
  - nextcloud.disable-https
  - nextcloud.enable-https
  - nextcloud.export
  - nextcloud.import
  - nextcloud.manual-install
  - nextcloud.mysql-client
  - nextcloud.mysqldump
  - nextcloud.occ
services:
  nextcloud.apache:          simple, enabled, inactive
  nextcloud.logrotate:       simple, enabled, inactive
  nextcloud.mysql:           simple, enabled, active
  nextcloud.nextcloud-cron:  simple, enabled, active
  nextcloud.nextcloud-fixer: simple, enabled, active
  nextcloud.php-fpm:         simple, enabled, active
  nextcloud.redis-server:    simple, enabled, active
  nextcloud.renew-certs:     simple, enabled, active
snap-id:      njObIbGQEaVx1H4nyWxchk1i8opy4h54
tracking:     latest/stable
refresh-date: today at 16:34 CST
channels:
  latest/stable:    33.0.5snap2               2026-06-13 (53545) 394MB -
  latest/candidate: ↑
  latest/beta:      33.0.5snap2+git4.c5deaba  2026-06-20 (53591) 394MB -
  latest/edge:      master-2026-06-20         2026-06-20 (53594) 397MB -
  32/stable:        32.0.11snap2              2026-06-13 (53537) 394MB -
  32/candidate:     ↑
  32/beta:          32.0.11snap2              2026-06-13 (53537) 394MB -
  32/edge:          32-2026-06-20             2026-06-20 (53595) 394MB -
  31/stable:        31.0.14snap1              2026-02-17 (52248) 353MB -
  31/candidate:     ↑
  31/beta:          ↑
  31/edge:          31-2026-04-13             2026-04-13 (53041) 366MB -
  30/stable:        30.0.16snap1              2025-09-28 (50557) 330MB -
  30/candidate:     ↑
  30/beta:          ↑
  30/edge:          30-2025-10-29             2025-10-29 (50982) 330MB -
  29/stable:        29.0.16snap1              2025-05-02 (47719) 349MB -
  29/candidate:     ↑
  29/beta:          ↑
  29/edge:          29-2025-07-22             2025-07-22 (49447) 348MB -
  28/stable:        28.0.12snap1              2024-11-13 (45118) 328MB -
  28/candidate:     ↑
  28/beta:          28.0.12snap1+git7.9bf11c0 2025-01-19 (46237) 330MB -
  28/edge:          28-2025-01-05             2025-01-05 (46041) 330MB -
  27/stable:        27.1.11snap1              2024-09-11 (44288) 321MB -
  27/candidate:     ↑
  27/beta:          ↑
  27/edge:          ↑
  26/stable:        26.0.13snap1              2024-04-08 (41513) 291MB -
  26/candidate:     ↑
  26/beta:          ↑
  26/edge:          ↑
  25/stable:        25.0.13snap1              2023-11-06 (38513) 280MB -
  25/candidate:     ↑
  25/beta:          ↑
  25/edge:          ↑
  24/stable:        24.0.12snap1              2023-09-07 (37381) 252MB -
  24/candidate:     ↑
  24/beta:          ↑
  24/edge:          ↑
  23/stable:        23.0.12snap1              2023-01-15 (33289) 268MB -
  23/candidate:     ↑
  23/beta:          ↑
  23/edge:          ↑
  22/stable:        22.2.10snap1              2022-07-29 (31269) 250MB -
  22/candidate:     ↑
  22/beta:          ↑
  22/edge:          ↑
  21/stable:        21.0.9snap1               2022-06-13 (29847) 245MB -
  21/candidate:     ↑
  21/beta:          ↑
  21/edge:          ↑
  20/stable:        20.0.14snap1              2021-11-25 (28695) 220MB -
  20/candidate:     ↑
  20/beta:          ↑
  20/edge:          ↑
  19/stable:        19.0.12snap1              2021-07-06 (28374) 266MB -
  19/candidate:     ↑
  19/beta:          ↑
  19/edge:          ↑
  18/stable:        18.0.12snap1              2020-12-16 (25109) 264MB -
  18/candidate:     ↑
  18/beta:          ↑
  18/edge:          ↑
  17/stable:        17.0.10snap1              2020-10-23 (23903) 250MB -
  17/candidate:     ↑
  17/beta:          ↑
  17/edge:          ↑
  16/stable:        16.0.11snap1              2020-06-08 (21459) 225MB -
  16/candidate:     ↑
  16/beta:          ↑
  16/edge:          ↑
  15/stable:        15.0.14snap1              2020-01-20 (18374) 216MB -
  15/candidate:     ↑
  15/beta:          ↑
  15/edge:          ↑
  14/stable:        14.0.10snap1              2019-05-04 (13208) 202MB -
  14/candidate:     ↑
  14/beta:          ↑
  14/edge:          ↑
  13/stable:        13.0.12snap1              2019-05-03 (13155) 193MB -
  13/candidate:     ↑
  13/beta:          ↑
  13/edge:          ↑
  12/stable:        12.0.13snap1              2019-01-07 (10632) 206MB -
  12/candidate:     ↑
  12/beta:          ↑
  12/edge:          ↑
  11/stable:        11.0.8snap1               2018-05-10  (6942) 202MB -
  11/candidate:     ↑
  11/beta:          ↑
  11/edge:          ↑
  10/stable:        10.0.2snap1               2020-06-26   (388) 145MB -
  10/candidate:     ↑
  10/beta:          ↑
  10/edge:          ↑
  9/stable:         9.0.53snap4               2020-06-26   (105) 138MB -
  9/candidate:      ↑
  9/beta:           ↑
  9/edge:           ↑
installed:          33.0.5snap2                          (53545) 394MB -
 ~ % snap info nextcloud

^C
 ~ % sudo snap services nextcloud
Service                    Startup  Current   Notes
nextcloud.apache           enabled  inactive  -
nextcloud.logrotate        enabled  inactive  timer-activated
nextcloud.mysql            enabled  active    -
nextcloud.nextcloud-cron   enabled  active    -
nextcloud.nextcloud-fixer  enabled  active    -
nextcloud.php-fpm          enabled  active    -
nextcloud.redis-server     enabled  active    -
nextcloud.renew-certs      enabled  active    -
 ~ % nextcloud.occ --help

chmod: changing permissions of '/tmp/pids': Operation not permitted
 ~ % sudo nextcloud.occ --help

Nextcloud is not installed - only a limited number of commands are available
Description:
  List commands

Usage:
  list [options] [--] [<namespace>]

Arguments:
  namespace             The namespace name

Options:
      --raw             To output raw command list
      --format=FORMAT   The output format (txt, xml, json, or md) [default: "txt"]
      --short           To skip describing commands' arguments
  -h, --help            Display help for the given command. When no command is given display help for the list command
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
      --ansi|--no-ansi  Force (or disable --no-ansi) ANSI output
  -n, --no-interaction  Do not ask any interactive question
      --no-warnings     Skip global warnings, show command output only
  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

Help:
  The list command lists all commands:

    /snap/nextcloud/53545/htdocs/occ list

  You can also display the commands for a specific namespace:

    /snap/nextcloud/53545/htdocs/occ list test

  You can also output the information in other formats by using the --format option:

    /snap/nextcloud/53545/htdocs/occ list --format=xml

  It's also possible to get raw list of commands (useful for embedding command runner):

    /snap/nextcloud/53545/htdocs/occ list --raw
```

```sh
 ~ % snap refresh --time

timer: 00:00~24:00/4
last: 2026-02-24
hold: forever
next: 5 days ago, at 19:17 CST (but held)
 ~ % snap refresh --time

timer: 00:00~24:00/4
last: 2026-02-24
hold: forever
next: 5 days ago, at 19:17 CST (but held)
 ~ % snap refresh --time

timer: 00:00~24:00/4
last: 2026-02-24
hold: forever
next: 5 days ago, at 19:17 CST (but held)
 ~ % snap refresh --time

timer: 00:00~24:00/4
last: 2026-02-24
hold: forever
next: 5 days ago, at 19:17 CST (but held)
```

```sh
 ~ % sudo snap set nextcloud ports.http=62286

 ~ % snap get nextcloud ports.http
62286
```

```sh
 ~ % sudo nextcloud.manual-install f f # sudo nextcloud.manual-install your_username your_password
Nextcloud was successfully installed
```

# 
