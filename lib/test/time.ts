import { monotonic, now, sleep } from 'lib/time'

const current_time = now()
const current_precise_time =
  performance.timeOrigin / 1000 + performance.now() / 1000

log(current_time.format())

// log(current_time.timestamp * 1e9)

// log(current_precise_time * 1e9)

log(current_time.timestamp)

log(current_precise_time)

log(monotonic())

await sleep(1)

log(monotonic())
