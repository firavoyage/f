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
  const offsetHours = pad(Math.floor(absMinutes / 60));
  const offsetMins = pad(absMinutes % 60);

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}${sign}${offsetHours}:${offsetMins}`;
}
