const error_with_trace = new Error('err')

log(error_with_trace)

error_with_trace.type = 'foo'
error_with_trace.message = 'foo'
error_with_trace[Symbol('a symbol')] = true

log(error_with_trace)

log(merge(error_with_trace, {}))

log(merge(error_with_trace, {
  type: 'error',
  message: 'error',
  ['foo']: true
}))

