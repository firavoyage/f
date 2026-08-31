// // @ts-nocheck
// /* eslint-disable */

function regex(...args: ConstructorParameters<typeof RegExp>) {
  return new RegExp(...args)
}

function match(text: string, pattern: RegExp) {
  pattern = pattern.flags.includes('g') ? pattern : regex(pattern, pattern.flags + 'g')
  return Array.from(text.matchAll(pattern))
}

function can_match(text: string, pattern: RegExp) {
  return match(text, pattern).length > 0
}

const mon_to_month = {
  jan: 1, feb: 2, mar: 3, apr: 4,
  may: 5, jun: 6, jul: 7, aug: 8,
  sep: 9, oct: 10, nov: 11, dec: 12
};

const month_to_mon = reverse_map(mon_to_month)

// log(month_to_mon)

function parse_year_month(line: string) {
  const pattern = regex('^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\\s+(\\d{4})$', "i")

  const result = match(line, pattern)

  // @ts-expect-error regex must fit the type if it matches
  return result.length == 0 ? false : { month: mon_to_month[result[0][1].toLowerCase()], year: +result[0][2] }
}

function parse_date(line: string) {
  const pattern = regex('^(\\d{2})$', "i")

  const result = match(line, pattern)

  return result.length >= 1 && +result[0][1] >= 1 && +result[0][1] <= 31 ?
    +result[0][1] :
    false
}

function parse_time(line: string) {
  const pattern = regex('^(\\d{2}) (\\d{2}) .*')
  const result = match(line, pattern)

  return result.length == 0 ? false : { hour: +result[0][1], minute: +result[0][2] }
}

// log(parse_year_month('jun 2026'))

// log(parse_year_month('Jun 2026'))

// log(parse_year_month(' jun 2026'))

// log(parse_year_month('foo 2026'))

// log(parse_date('12'))

// log(parse_date('123'))

// log(parse_date('23'))

// log(parse_date('32'))

// log((parse_time('10 10')))

// log((parse_time('10 10 ')))

// log((parse_time('01 20 create sth')))

type journal_item = {
  content: string[]
  year?: number
  month?: number
  date?: number
  hour?: number // 24h
  minute?: number
  index?: number
  is_keyword?: boolean // default to false
}

type journal = journal_item[]

function parse_journal(journal_text: string): journal {
  // make empty input empty
  if (journal_text == '') {
    return []
  } 

  let year, month, date, hour, minute

  const journal = []
  let content = []
  let is_keyword = false

  function commit() {
    journal.push({
      content, year, month, date, hour, minute, is_keyword
    })

    is_keyword = false
    content = []
  }

  for (const line of journal_text.split('\n')) {
    if (parse_year_month(line) || parse_date(line) || parse_time(line)) {
      commit()
    }

    if (parse_year_month(line)) {
      ({ year, month } = parse_year_month(line))
      is_keyword = true
    } else if (parse_date(line)) {
      date = parse_date(line)
      is_keyword = true
    } else if (parse_time(line)) {
      ({ hour, minute } = parse_time(line))
    }

    // push anyway for consistency
    content.push(line)
  }

  commit()

  return journal
}

function sort(journal: journal) {
  for (const [index, value] of Object.entries(journal)) {
    merge(value, { index: +index })
  }

  function compare(a: journal_item, b: journal_item) {
    const is_a_before_b = -1
    const is_a_after_b = 1

    for (const key of ['year', 'month', 'date', 'hour', 'minute', 'index']) {
      // @ts-expect-error 
      const a_value = a[key] ?? -1
      // @ts-expect-error 
      const b_value = b[key] ?? -1

      if (a_value < b_value) {
        return is_a_before_b
      } else if (a_value > b_value) {
        return is_a_after_b
      }
    }

    /**
     * impossible w index
     */
    throw err('unable to determine the order while sorting')
  }

  return journal.sort(compare)
}

// log(undefined > undefined)
// log(undefined < undefined)
// log(null > null)
// log(null < null)

/**
 * prefix 0 to a fixed length
 * 
 * seems the length of everything defaults to 2.
 * 
 * date 01 09 10 31
 * 
 * hour 01 09 10 24
 * 
 * minute 01 09 10 60
 * 
 * (year and month do not need to be formatted)
 */
function format_number(n: number, length = 2) {
  let formatted_number = n.toString()

  if (formatted_number.length < length) {
    for (const _ of each(length - formatted_number.length)) {
      formatted_number = '0' + formatted_number
    }
  }

  return formatted_number
}

function serialize_journal(journal: journal) {
  const lines = []

  let year, month, date

  for (const item of journal) {
    if (item.is_keyword) {
      continue
    }

    if (is_given(item.year) && is_given(item.month) && (item.year != year || item.month != month)) {
      ({ year, month } = item)

      // reset date, 01 jan != 01 feb
      date = undefined

      lines.push(`${month_to_mon[month]} ${year}`, '')
    }

    if (is_given(item.date) && item.date != date) {
      ({ date } = item)

      lines.push(`${format_number(date)}`, '')
    }

    lines.push(...item.content)
  }

  return lines.join('\n')
}

// const test = `journal

// ---

// mar 2025

// 01

// 20 20 do somthing

// 02

// 10 20 do things

// apr 2026

// 10

// 21 20 do sth`

// log(serialize(sort(parse(test))))

type telegram_item = {
  content: string[]
  year?: number
  month?: number
  date?: number
  hour?: number // 24h
  minute?: number
  index?: number
}

type telegram = telegram_item[]

/**
 * parse messages copied from telegram desktop 
 * (on mobile you might not see the time)
 * 
 * it uses a thin space on like "12:16 AM"
 */
function parse_telegram(telegram_text: string): telegram {
  // name, month, date, year, hour, minute, am/pm
  const pattern = regex('^(.*), \\[(\\d{1,2})/(\\d{1,2})/(\\d{1,2}) (\\d{1,2}):(\\d{1,2}) (AM|PM)\\]')

  match(telegram_text, pattern)

  let year: number, month: number, date: number, hour: number, minute: number, name: string

  // @ts-expect-error 
  const telegram = []
  let content: string[] = []

  function commit() {
    telegram.push({
      content, year, month, date, hour, minute
    })

    content = []
  }

  for (const line of telegram_text.split('\n')) {
    if (can_match(line, pattern)) {
      commit()

      // slice: [start, end)
      const info = match(line, pattern)[0].slice(1, 8)

      // name, month, date, year (yy), hour, minute, am/pm
      name = info[0]
      month = +info[1]
      date = +info[2]
      year = +info[3] + 2000
      hour = info[6] == 'AM' ? +info[4] : +info[4] + 12
      /**
       * on tg, 12 am means 0 am that day. 12 pm means 12 am that day.
       */
      if (hour == 12 || hour == 24) {
        hour -= 12
      }
      minute = +info[5]
    }

    content.push(line)
  }

  commit()

  // @ts-expect-error 
  return telegram
}

// log('12' + 4)
// log(4 + '12')
// log(+'12' + 4)
// log(4 + +'12')

// const test_telegram = `
// Fodesu, [5/23/26 12:18 AM]
// 好复杂

// Fodesu, [5/23/26 12:18 AM]
// memoh 平均年龄有 20 岁吗？

// Romandu, [5/23/26 12:19 AM]
// 徐小平在北美也投了不少高校 dropout

// 溏 🍬, [5/23/26 12:19 AM]
// 陆奇老师有他自己的品味

// 清凤, [5/23/26 12:19 AM]
// 小猫不清楚不要插嘴

// Acbox Neko, [5/23/26 12:19 AM]
// 都是些小天才

// 盼兮, [5/23/26 12:19 AM]
// 群里都是成功人士

// 盼兮, [5/23/26 12:19 AM]
// 看死了

// Acbox Neko, [5/23/26 12:19 AM]
// 我跟小天才说话总有种自卑感

// 溏 🍬, [5/23/26 12:19 AM]
// 我跟小盒子说话总有种自卑感

// Fodesu, [5/23/26 12:19 AM]
// 你们都是小天才，除了我

// Acbox Neko, [5/23/26 12:19 AM]
// 所以我会避免找那些高中青训营的人说话

// Acbox Neko, [5/23/26 12:20 AM]
// 他们都是那种 十岁英语无障碍沟通 十五岁保送国内外各大名校

// Acbox Neko, [5/23/26 12:20 AM]
// 简历都能发着光的那种

// Acbox Neko, [5/23/26 12:20 AM]
// 我比不上

// Acbox Neko, [5/23/26 12:21 AM]
// 我甚至有点害怕他们

// Romandu, [5/23/26 12:21 AM]
// 现在国内风投已经不卡学历了

// Romandu, [5/23/26 12:21 AM]
// 其他资本会卡，yc china 和 zhenfund 不卡

// 路上看见, [5/23/26 12:21 AM]
// 奇绩为什么对 dropout 未成年情有独钟

// Acbox Neko, [5/23/26 12:22 AM]
// 我初中学历诶

// Acbox Neko, [5/23/26 12:22 AM]
// 并非

// Zhiqiang Yang, [5/23/26 12:22 AM]
// 细说？

// Acbox Neko, [5/23/26 12:22 AM]
// 他们投的 dropout 的未成年也没多少

// Acbox Neko, [5/23/26 12:22 AM]
// 大多都是大学辍学的

// Romandu, [5/23/26 12:22 AM]
// 恋童癖

// Acbox Neko, [5/23/26 12:23 AM]
// 有名校背书之后 再突然 drop

// 溏 🍬, [5/23/26 12:23 AM]
// 奇绩投了哪个未成年

// Romandu, [5/23/26 12:23 AM]
// 奇绩喜欢劝人 drop

// 溏 🍬, [5/23/26 12:23 AM]
// 我比较好奇

// 盼兮, [5/23/26 12:23 AM]
// 只要非传统了感觉文盲也无所谓

// Acbox Neko, [5/23/26 12:23 AM]
// 让 vc 觉得他很行 觉得他能 all in

// 盼兮, [5/23/26 12:23 AM]
// 反正都不是传统路径

// Zhiqiang Yang, [5/23/26 12:23 AM]
// 能不能进大厂之后光速辞职？算 drop 吗？

// 路上看见, [5/23/26 12:23 AM]
// 有没有清华 drop

// Romandu, [5/23/26 12:24 AM]
// 全是

// Acbox Neko, [5/23/26 12:24 AM]
// 我高中 drop 的

// Acbox Neko, [5/23/26 12:24 AM]
// 我今年 17

// 路上看见, [5/23/26 12:24 AM]
// 我小学文化

// Romandu, [5/23/26 12:24 AM]
// 年龄越小要求越低

// Romandu, [5/23/26 12:24 AM]
// 红衫 绿洲投老司机
// `

// log(parse_telegram(test_telegram))

/**
 * resolve to the smaller when exactly at the middle
 */
function round_minute(minute: number, targets: number[]) {
  targets = targets.sort()

  const { min, abs } = Math

  const differences = map(targets, target => abs(target - minute))
  const minimum_difference = min(...differences)

  let hour_delta = 0
  let rounded_minute = targets[differences.indexOf(minimum_difference)]

  if (abs(targets[0] + 60 - minute) < minimum_difference) {
    hour_delta = 1
    rounded_minute = targets[0]
  }

  return { hour_delta, minute: rounded_minute }
}

// function round_minute(minute: number, targets: number[]) {
//   const { min, abs } = Math

//   const differences = map(targets, target => min(
//     abs(target - 60 - minute),
//     abs(target - minute),
//     abs(target + 60 - minute),
//   ))

//   return targets[differences.indexOf(min(...differences))]
// }

// log([0,1,2,3].indexOf(2))

// log(round_minute(5, [0, 10, 20, 30, 40, 50]))
// log(round_minute(55, [0, 10, 20, 30, 40, 50]))
// log(round_minute(59, [0, 10, 20, 30, 40, 50]))

function round_journal(journal: journal, targets: number[]) {
  for (const item of journal) {
    if (!is_given(item.hour) || !is_given(item.minute)) {
      continue
    }
    const { minute, hour_delta } = round_minute(item.minute, targets)

    item.hour += hour_delta
    item.minute = minute
  }

  return journal
}

type merge_journal = {
  original_text: string
}

export function merge_journal(addition_text: string, { original_text }: merge_journal) {
  const original = parse_journal(original_text)
  const addition = parse_journal(addition_text)

  const merged = sort([...original, ...addition])

  return serialize_journal(merged)
}

// const test = `journal

// ---

// mar 2025

// 01

// 20 20 do somthing

// 02

// 10 20 do things

// apr 2026

// 10

// 21 20 do sth`

// log(merge_journal(test, test))

type telegram_to_journal = {
  rounding: true
  targets: number[]
} | Partial<{
  rounding: false
  targets: number[]
}>

function telegram_to_journal_util(telegram_text: string, options: telegram_to_journal = {}) {
  const { rounding, targets } = options

  let telegram = parse_telegram(telegram_text)

  if (rounding) {
    telegram = round_journal(telegram, targets)
  }

  telegram = map(telegram, item => {
    item.content = item.content.slice(1)
    if (is_given(item.content[0]) && is_given(item.hour) && is_given(item.minute)) {
      item.content[0] = `${format_number(item.hour)} ${format_number(item.minute)} ${item.content[0]}`
    }

    return item
  })

  const journal_text = serialize_journal(telegram)

  return journal_text
}

// const test_telegram = `
// Fodesu, [5/23/26 12:18 AM]
// 好复杂

// Fodesu, [5/23/26 12:18 AM]
// memoh 平均年龄有 20 岁吗？

// Romandu, [5/23/26 12:19 AM]
// 徐小平在北美也投了不少高校 dropout

// 溏 🍬, [5/23/26 12:19 AM]
// 陆奇老师有他自己的品味

// 清凤, [5/23/26 12:19 AM]
// 小猫不清楚不要插嘴

// Acbox Neko, [5/23/26 12:19 AM]
// 都是些小天才

// 盼兮, [5/23/26 12:19 AM]
// 群里都是成功人士

// 盼兮, [5/23/26 12:19 AM]
// 看死了

// Acbox Neko, [5/23/26 12:19 AM]
// 我跟小天才说话总有种自卑感

// 溏 🍬, [5/23/26 12:19 AM]
// 我跟小盒子说话总有种自卑感

// Fodesu, [5/23/26 12:19 AM]
// 你们都是小天才，除了我

// Acbox Neko, [5/23/26 12:19 AM]
// 所以我会避免找那些高中青训营的人说话

// Acbox Neko, [5/23/26 12:20 AM]
// 他们都是那种 十岁英语无障碍沟通 十五岁保送国内外各大名校

// Acbox Neko, [5/23/26 12:20 AM]
// 简历都能发着光的那种

// Acbox Neko, [5/23/26 12:20 AM]
// 我比不上

// Acbox Neko, [5/23/26 12:21 AM]
// 我甚至有点害怕他们

// Romandu, [5/23/26 12:21 AM]
// 现在国内风投已经不卡学历了

// Romandu, [5/23/26 12:21 AM]
// 其他资本会卡，yc china 和 zhenfund 不卡

// 路上看见, [5/23/26 12:21 AM]
// 奇绩为什么对 dropout 未成年情有独钟

// Acbox Neko, [5/23/26 12:22 AM]
// 我初中学历诶

// Acbox Neko, [5/23/26 12:22 AM]
// 并非

// Zhiqiang Yang, [5/23/26 12:22 AM]
// 细说？

// Acbox Neko, [5/23/26 12:22 AM]
// 他们投的 dropout 的未成年也没多少

// Acbox Neko, [5/23/26 12:22 AM]
// 大多都是大学辍学的

// Romandu, [5/23/26 12:22 AM]
// 恋童癖

// Acbox Neko, [5/23/26 12:23 AM]
// 有名校背书之后 再突然 drop

// 溏 🍬, [5/23/26 12:23 AM]
// 奇绩投了哪个未成年

// Romandu, [5/23/26 12:23 AM]
// 奇绩喜欢劝人 drop

// 溏 🍬, [5/23/26 12:23 AM]
// 我比较好奇

// 盼兮, [5/23/26 12:23 AM]
// 只要非传统了感觉文盲也无所谓

// Acbox Neko, [5/23/26 12:23 AM]
// 让 vc 觉得他很行 觉得他能 all in

// 盼兮, [5/23/26 12:23 AM]
// 反正都不是传统路径

// Zhiqiang Yang, [5/23/26 12:23 AM]
// 能不能进大厂之后光速辞职？算 drop 吗？

// 路上看见, [5/23/26 12:23 AM]
// 有没有清华 drop

// Romandu, [5/23/26 12:24 AM]
// 全是

// Acbox Neko, [5/23/26 12:24 AM]
// 我高中 drop 的

// Acbox Neko, [5/23/26 12:24 AM]
// 我今年 17

// 路上看见, [5/23/26 12:24 AM]
// 我小学文化

// Romandu, [5/23/26 12:24 AM]
// 年龄越小要求越低

// Romandu, [5/23/26 12:24 AM]
// 红衫 绿洲投老司机
// `

// log(telegram_to_journal(test_telegram, { rounding: true, targets: each(0, 50, 10) }))

export function telegram_to_journal(telegram_text: string) {
  return telegram_to_journal_util(telegram_text, { rounding: true, targets: each(0, 50, 10) })
}

function fix_telegram(journal_text: string) {
  const journal = parse_journal(journal_text)

  for (const item of journal) {
    if (item.hour == 12 || item.hour == 24) {
      item.hour -= 12

      item.content[0] = `${item.hour}` + item.content[0].slice(2)
    }
  }

  return serialize_journal(journal)
}

// const test1 = `
// aug 2026

// 01

// 00 40 begin aug. 01 00 archive chats on privacy, sec, and hacks. 03 40 automate to export zhihu. write a simple contributing guide. revise agent write. <!-- i realize i dont really need a simple variant. it should be simple by default. -->
// `

// const test2 = `
// jul 2026

// 08

// 18 20 See a msg from menci in the list...

// Eat memoh group. 
// `

// log(merge_journal(test2, {original_text: test1}))


