// at timestamp number, or iso string
function time() {
  
}

function now() {
  const now = new Date();

  const year = now.getFullYear()
  const month = now.getMonth()
  const date = now.getDate()
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

  return `${year}-${month}-${date} ${hour}:${min}:${sec}${sign}${offsetHours}:${offsetMins}`;
}

function now() {
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

log(now())