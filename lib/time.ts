import { TZDate } from '@date-fns/tz';
import { getTimezoneOffset } from 'date-fns-tz'

type time = {
  timestamp: number
  offset: number // offset in seconds
  year: number
  month: number
  day: number
  hour: number
  min: number
  sec: number
}

type iana_timezone_name = string
type offset = number

type timezone = 'utc' | 'local' | iana_timezone_name | offset

export function time(year: number, month: number, day: number, hour: number, min: number, sec: number, timezone?: timezone) {
  const tzDate = new TZDate(year, month - 1, day, hour, min, sec, format_offset(timezone_to_offset(timezone)));
  const timestamp = Math.floor(tzDate.getTime() / 1000);
  const offset = tzDate.getTimezoneOffset() * (-60);

  return Time({
    // core
    timestamp, offset,
    // derived
    year, month, day, hour, min, sec
  })
}

export function now(timezone?: timezone) {
  const { year, month, day, hour, min, sec } = js_time()

  return time(year, month, day, hour, min, sec, timezone)
}

export function at(timestamp: number, timezone?: timezone) {
  const timestamp_ms = timestamp * 1000
  const { year, month, day, hour, min, sec } = js_time(timestamp_ms)

  return time(year, month, day, hour, min, sec, timezone)
}

export function format(time: time, pattern: string) {
  const { year, month, day, hour, min, sec, offset } = time

  const macros = {
    Y: year,
    m: pad(month),
    d: pad(day),
    H: pad(hour),
    M: pad(min),
    S: pad(sec),
    z: format_offset(offset, false),
    ':z': format_offset(offset),
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

export function get_local(time: time, timezone?: timezone) {
  const tz_time = new TZDate(time.timestamp * 1000, format_offset(time.offset))
  const converted_tz_time = 

}

function pad(n: number, length = 2) {
  return str(n).padStart(length, '0')
}

function Time(data: time) {
  return chainable(data, {
    format
  })
}
// function Time<T>(data: T) {
//   return chainable(data, {
//     format
//   })
// }

function format_offset(offset: number, colon = true) {
  const offset_min = offset / 60
  const timezone_sign = offset_min <= 0 ? '+' : '-'
  const timezone_hour = pad(floor(abs(offset_min) / 60))
  const timezone_min = pad(abs(offset_min) % 60)

  if (colon) {
    return `${timezone_sign}${timezone_hour}:${timezone_min}`
  } else {
    return `${timezone_sign}${timezone_hour}${timezone_min}`
  }
}

function timezone_to_offset(timezone?: timezone) {
  if (timezone == 'utc' || timezone == 'gmt') {
    return 0
  } else if (timezone == 'local' || !is_given(timezone)) {
    const current_time = new Date();
    return current_time.getTimezoneOffset() * 60
  } else if (is(timezone, 'number')) {
    return timezone
  } else if (is(timezone, 'string')) {
    return getTimezoneOffset(timezone) / 1000
  }
}

function js_time(...args: ConstructorParameters<typeof Date>) {
  const _time = new Date(...args)

  const year = _time.getFullYear()
  const month = _time.getMonth() + 1
  const day = _time.getDate()
  const hour = _time.getHours()
  const min = _time.getMinutes()
  const sec = _time.getSeconds()

  return { year, month, day, hour, min, sec }
}
