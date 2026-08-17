function regex(...args: ConstructorParameters<typeof RegExp>) {
  return new RegExp(...args)
}

function match(text: string, pattern: RegExp) {
  pattern = pattern.flags.includes('g') ? pattern : regex(pattern, pattern.flags + 'g')
  return Array.from(text.matchAll(pattern))
}

function parse_year_month(line: string) {
  const pattern = regex('^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\\s+(\\d{4})$', "i")

  const map = {
    jan: 1, feb: 2, mar: 3, apr: 4,
    may: 5, jun: 6, jul: 7, aug: 8,
    sep: 9, oct: 10, nov: 11, dec: 12
  };

  const result = match(line, pattern)

  // @ts-expect-error regex must fit the type if it matches
  return result.length == 0 ? false : { month: map[result[0][1].toLowerCase()], year: +result[0][2] }
}

function parse_date(line: string) {
  const pattern = regex('^(\\d{2})$', "i")

  const result = match(line, pattern)

  return result.length >= 1 && +result[0][1] >= 1 && +result[0][1] <= 31 ?
    +result[0][1] :
    false
}

// log(parse_year_month('jun 2026'))

// log(parse_year_month('Jun 2026'))

// log(parse_year_month(' jun 2026'))

// log(parse_year_month('foo 2026'))

// log(parse_date('12'))

// log(parse_date('123'))

// log(parse_date('23'))

// log(parse_date('32'))

type item = {
  content: string[]
  year?: number
  month?: number
  date?: number
  is_keyword: boolean
}

type journal = item[]

function parse_journal(journal_text: string) {
  let year, month, date

  const journal = []
  let content = []
  let is_keyword = false

  for (const line of journal_text.split('\n')) {
    if (!parse_date(line) && !parse_year_month(line)) {
      content.push(line)
    } else if (parse_date(line)) {
      
    } 
  }

  journal.push({
    content, year, month, date, is_keyword
  })
}
