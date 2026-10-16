import { format, now } from "lib/time"

function log_time() {
  return now().format('%F %T%:z')
  // return format(now(), '%F %T%:z')
}

log(log_time())

log(now().format())

log(now().get_utc().format())

// log(now().get_local(10000).format())
