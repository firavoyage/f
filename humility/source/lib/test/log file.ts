import { log_info, log_warn, log_error } from 'lib/log';

await log_info('hello world')

await log_info('hello world again')

await log_warn('some warning', { foo: true, message: 'hello \nhi \nasdf' })

await log_error('some error', { [Symbol('a symbol')]: true, message: 'hello \nhi \nasdf' })
