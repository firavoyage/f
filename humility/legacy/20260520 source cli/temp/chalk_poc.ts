import chalk from 'chalk';

log(JSON.stringify(chalk.blue(`123`)))

log(chalk.blue(`123`), chalk.bgBlack(chalk.yellow(`123`)))
log(chalk.bgCyan(`123`), chalk.bgCyan(chalk.yellow(`123`)), chalk.bgCyan(chalk.cyan(`123`)))

log(`[STDOUT] ${123424}`)

log(`[STDERR] ${123}`)
