// at timestamp number, or iso string
function time() {
  
}

type time = ReturnType<typeof now>


function now(timezone) {
  const now = new Date();

  const year = now.getFullYear()
  const month = now.getMonth()
  const day = now.getDate()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()
  const offset = now.getTimezoneOffset() * 60
  
  // 2. Calculate the timezone offset (+hh:mm or -hh:mm)
  const offsetMinutes = now.getTimezoneOffset();
  const sign = offsetMinutes <= 0 ? '+' : '-';
  const absMinutes = Math.abs(offsetMinutes);
  const offsetHours = Math.floor(absMinutes / 60);
  const offsetMins = absMinutes % 60;

  return {
    year, month, day, hour, min, sec, offset
  }
}

function now_() {
  const now = new Date();

  const YYYY = now.getFullYear()
  const MM = now.getMonth()
  const DD = now.getDate()
  const hh = now.getHours()
  const mm = now.getMinutes()
  const ss = now.getSeconds()

  // 2. Calculate the timezone offset (+hh:mm or -hh:mm)
  const offsetMinutes = now.getTimezoneOffset();
  const sign = offsetMinutes <= 0 ? '+' : '-';
  const absMinutes = Math.abs(offsetMinutes);
  const offsetHours = Math.floor(absMinutes / 60);
  const offsetMins = absMinutes % 60;

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}${sign}${offsetHours}:${offsetMins}`;
}

export function format(time: time, pattern: string) {
  
}

// - Y four digit year
// - ~~y two digit year~~
// - m month padded
// - ~~B full month name captitalized~~
// - ~~b/h three letter month name~~
// - d mday padded
// - ~~e mday padded w a space~~
// - H hour in 24, padded
// - ~~I hour in 12, padded~~
// - M minute, padded
// - S second, padded
// - ~~L milisec~~
// - ~~N fractional sec~~
// - ~~P/p am/pm in uppercase/lowercase~~

// - F %Y-%m-%d
// - T %H:%M:%S
// - R %H:%M
// - ~~Z timezone abbr (e.g. UTC, PST)~~
// - z timezone offset (e.g. +0000, -0500)
// - :z timezone offset (e.g. +00:00, -05:00)
// - ~~X The preferred local time representation based on system locale settings.~~
// - ~~r %I:%M:%S %p (e.g., "03:30:45 PM")~~
// - ~~D Traditional US date format. Equivalent to %m/%d/%y (e.g., "10/12/26")~~
// - ~~v VMS style date. Equivalent to %e-%b-%Y (e.g., "12-Oct-2026")~~
// - ~~x The preferred local date representation based on system locale settings~~
// - ~~c Preferred date and time representation based on system locale settings (e.g., "Mon Oct 12 15:30:45 2026")~~
// - ~~s The Number of seconds since the Unix Epoch~~

