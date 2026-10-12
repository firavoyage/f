// at timestamp number, or iso string
function time() {

}

type time = {
  timestamp: number
  year: number
  month: number
  day: number
  hour: number
  min: number
  sec: number
  offset: number
}

type timezone = 'utc' | number

export function now(timezone?: timezone) {
  const current_time = new Date();

  // core
  const timestamp = current_time.getTime()
  const offset = timezone == 'utc' ? 0 :
    is(timezone, 'number') ? timezone :
      current_time.getTimezoneOffset() * 60

  // derived
  const year = current_time.getFullYear()
  const month = current_time.getMonth() + 1
  const day = current_time.getDate()
  const hour = current_time.getHours()
  const min = current_time.getMinutes()
  const sec = current_time.getSeconds()

  return Time({
    timestamp, year, month, day, hour, min, sec, offset
  })
}

export function format(time: time, pattern: string) {
  const { year, month, day, hour, min, sec, offset } = time

  const offset_min = offset / 60
  const timezone_sign = offset_min <= 0 ? '+' : '-'
  const timezone_hour = pad(floor(abs(offset_min) / 60))
  const timezone_min = pad(abs(offset_min) % 60)

  const macros = {
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

  map(macros, ([macro, value]) => {
    pattern = pattern.replaceAll(`%${macro}`, value)
  })

  return pattern
}

function pad(n: number, length = 2) {
  return str(n).padStart(length, '0')
}

function Time<T>(data: T) {
  return chainable(data, {
    format
  })
}
