import { TZDate } from '@date-fns/tz';
import { getTimezoneOffset } from 'date-fns-tz'

type time = {
  timestamp: number // in seconds
  offset: number // in seconds
  year: number
  month: number
  day: number // day of month
  hour: number
  min: number
  sec: number
}

type iana_timezone_name = string
type offset = number

type timezone = 'utc' | 'local' | iana_timezone_name | offset

export function time(year: number, month: number, day: number, hour: number, min: number, sec: number, timezone?: timezone) {
  const tz_time = new TZDate(year, month - 1, day, hour, min, sec, format_offset(timezone_to_offset(timezone)));
  const { timestamp, offset } = parse_js_time(tz_time)

  return Time({
    // core
    timestamp, offset,
    // derived
    year, month, day, hour, min, sec
  })
}

export function now(timezone?: timezone) {
  const { year, month, day, hour, min, sec } = parse_js_time(new Date())
  return time(year, month, day, hour, min, sec, timezone)
}

export function at(timestamp: number, timezone?: timezone) {
  const timestamp_ms = timestamp * 1000
  const { year, month, day, hour, min, sec } = parse_js_time(new Date(timestamp_ms))
  return time(year, month, day, hour, min, sec, timezone)
}

export function format(t: time, pattern: string = '%F %T') {
  const { year, month, day, hour, min, sec, offset } = t

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

export function get_local(t: time, timezone?: timezone) {
  const old_tz_time = new TZDate(t.timestamp * 1000, format_offset(t.offset))
  const new_tz_time = new TZDate(old_tz_time, format_offset(timezone_to_offset(timezone)))

  const { year, month, day, hour, min, sec } = parse_js_time(new_tz_time)
  return time(year, month, day, hour, min, sec, timezone)
}

export function get_utc(t: time) {
  return get_local(t, 'utc')
}

function pad(n: number, length = 2) {
  return str(n).padStart(length, '0')
}

function Time(data: time) {
  return chainable(data, {
    format,
    get_local,
    get_utc
  })
}
// function Time<T>(data: T) {
//   return chainable(data, {
//     format
//   })
// }

function format_offset(offset: number, colon = true) {
  const offset_min = offset / 60
  const timezone_sign = offset_min >= 0 ? '+' : '-'
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
    const { offset } = parse_js_time(new Date())
    return offset
  } else if (is(timezone, 'number')) {
    return timezone
  } else if (is(timezone, 'string')) {
    return getTimezoneOffset(timezone) / 1000
  }
}

function parse_js_time(date) {
  const timestamp = floor(date.getTime() / 1000);
  const offset = date.getTimezoneOffset() * (-60);

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()

  return { timestamp, offset, year, month, day, hour, min, sec }
}
// function js_time(...args: ConstructorParameters<typeof Date>) {
//   const _time = new Date(...args)

//   const year = _time.getFullYear()
//   const month = _time.getMonth() + 1
//   const day = _time.getDate()
//   const hour = _time.getHours()
//   const min = _time.getMinutes()
//   const sec = _time.getSeconds()

//   return { year, month, day, hour, min, sec }
// }
