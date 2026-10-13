import { format, now } from "lib/time"

function log_time() {
  return now().format('%F %T%:z')
  // return format(now(), '%F %T%:z')
}

const foo = now().d

log(log_time())