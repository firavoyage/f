time spec

<!-- paragraph: m/s, italic: c, strikethrough: w -->

methods

- create
  - time year month day hour min sec timezone = local
    - _utc/gm/gmt_
    - _local/mktime_
    - now timezone
  - at timestamp (in sec) timezone
- parse
  - _parse s pattern_
  - _(standard) s_
- check
  - _is utc/gmt_
  - _is dst_ <!-- daylight savings time -->
  - _is sunday/.../saturday_
- _calc_
  - time + delta (in sec) = time
  - time - time = delta
  - cmp a b = sgn a - b
  - (eq ieq l g leq geq)
- convert
  - get_utc
  - get_local timezone <!-- get_local offset? -->
  - _round, ceil, floor_ digit <!-- round the sec -->
- format
  - format pattern
    - "str" to_s/inspect

data

- year
- month/_mon_
- day/_mday_~~/date~~
- hour
- min
- sec
- _wday_
- _yday~~/date~~_
- _zone/timezone_
- offset/~~utc_offset/gmt_offset/gmt_off~~
- timestamp/~~to_i/to_f/to_r/to_a~~

pattern <!-- prefixed by % -->

- Y four digit year
- ~~y two digit year~~
- m month padded
- ~~B full month name captitalized~~
- ~~b/h three letter month name~~
- d mday padded
- ~~e mday padded w a space~~
- H hour in 24, padded
- ~~I hour in 12, padded~~
- M minute, padded
- S second, padded
- ~~L milisec~~
- ~~N fractional sec~~
- ~~P/p am/pm in uppercase/lowercase~~

- F %Y-%m-%d
- T %H:%M:%S
- R %H:%M
- ~~Z timezone abbr (e.g. UTC, PST)~~
- z timezone offset (e.g. +0000, -0500)
- :z timezone offset (e.g. +00:00, -05:00)
- ~~X The preferred local time representation based on system locale settings.~~
- ~~r %I:%M:%S %p (e.g., "03:30:45 PM")~~
- ~~D Traditional US date format. Equivalent to %m/%d/%y (e.g., "10/12/26")~~
- ~~v VMS style date. Equivalent to %e-%b-%Y (e.g., "12-Oct-2026")~~
- ~~x The preferred local date representation based on system locale settings~~
- ~~c Preferred date and time representation based on system locale settings (e.g., "Mon Oct 12 15:30:45 2026")~~
- ~~s The Number of seconds since the Unix Epoch~~

timezone

- utc/gmt
- _iana time zone names_
- number in sec <!-- it should be a realistic one, like at least by 30min -->
- '+/-hh:mm'
- ~~nato military code~~
- ~~{local_to_utc, utc_to_local, ~~is_dst~~}~~

