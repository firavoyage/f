import { now } from "lib/time"

const current_time = now()
const current_precise_time = performance.timeOrigin / 1000 + performance.now() / 1000

log(current_time.format())

log(current_time.timestamp)

log(current_precise_time)
