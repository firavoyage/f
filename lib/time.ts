// at timestamp number, or iso string
function time() {

}

type time = ReturnType<typeof now>


function now(timezone) {
  const now = new Date();

  const year = now.getFullYear()
  const month = now.getMonth() + 1
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

function datetime() {
  const now = new Date();

  // 1. Get the local date & time components
  const pad = (num) => String(num).padStart(2, '0');
  const YYYY = now.getFullYear();
  const MM = pad(now.getMonth() + 1);
  const DD = pad(now.getDate());
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  // 2. Calculate the timezone offset (+hh:mm or -hh:mm)
  const offsetMinutes = now.getTimezoneOffset();
  const sign = offsetMinutes <= 0 ? '+' : '-';
  const absMinutes = Math.abs(offsetMinutes);
  const offsetHours = pad(Math.floor(absMinutes / 60));
  const offsetMins = pad(absMinutes % 60);

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}${sign}${offsetHours}:${offsetMins}`;
}

export function format(time: time, pattern: string) {
  const { year, month, day, hour, min, sec, offset } = time

  const offset_min = offset / 60
  const timezone_sign = offset_min <= 0 ? '+' : '-'
  const timezone_hour = pad(floor(abs(offset_min) / 60))
  const timezone_min = pad(abs(offset_min) % 60)

  const mapping = {
    Y: year,
    m: pad(month),
    d: pad(day),
    H: pad(hour),
    M: pad(min),
    S: pad(sec),
    z: `${timezone_sign}${timezone_hour}${timezone_min}`,
    ':z': `${timezone_sign}${timezone_hour}:${timezone_min}`,
  }

  const shortcuts = {
    F: '%Y-%m-%d',
    T: '%H:%M:%S',
    R: '%H:%M'
  }

  map(shortcuts, ([shortcut, value]) => {
    pattern = pattern.replaceAll(`%${shortcut}`, value)
  })

  map(mapping, ([shortcut, value]) => {
    pattern = pattern.replaceAll(`%${shortcut}`, value)
  })


}

function pad(n: number, length = 2) {
  return str(num).padStart(length, '0')
}

