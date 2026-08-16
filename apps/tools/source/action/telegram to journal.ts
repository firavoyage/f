function regex(...args: ConstructorParameters<typeof RegExp>) {
  return new RegExp(...args)
}

function match(text: string, pattern: RegExp) {
  pattern = pattern.flags.includes('g')? pattern: regex(pattern, pattern.flags + 'g')
  return Array.from(text.matchAll(pattern))
}

function parse_year_month(line: string) {
  const pattern = regex('^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\\s+(\\d{4})$', "i")

  const map = {
    jan: 1, feb: 2, mar: 3, apr: 4, 
    may: 5, jun: 6, jul: 7, aug: 8, 
    sep: 9, oct: 10, nov: 11, dec: 12
  };
  
  return match(line, pattern)
}

log(parse_year_month('jun 2026'))

log(parse_year_month('Jun 2026'))

log(parse_year_month(' jun 2026'))

log(parse_year_month('foo 2026'))
