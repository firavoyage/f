type log = typeof log
declare global {
  var log: log
}

/**
 * Alias console.log as log
 * 
 * it might block stack trace (i.e. all errors are from log.ts) when wrapped in a fn
 */
export const log = console.log

export function format_log(message: string, type: 'info' | 'warn' | 'error' = 'info') {
  let line = `${datetime()} [${type}] ${message}`
  if (!line.endsWith('\n')) {
    line += '\n'
  }

  return line
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


