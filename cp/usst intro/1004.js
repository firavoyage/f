// utils

let command_print
let command_readline
let command_write

try {
  // if (Bun || Deno || process.version) {
  // if (process.version) {
  if (Bun) {
    function readline() {
      const buffer = Buffer.alloc(1024)
      const bytesRead = require('fs').readSync(
        0,
        buffer,
        0,
        buffer.length,
        null,
      )
      return buffer.toString('utf8', 0, bytesRead).trimEnd()
    }
    function write(...args) {
      process.stdout.write(str(args.join('')))
    }

    command_write = write
    command_print = console.log
    command_readline = readline
  } else {
    // no window/global/global_this it seems
    command_write = this.write
    command_print = this.print
    command_readline = this.readline
  }
} catch (e) {
  // bun not defined
  command_write = this.write
  command_print = this.print
  command_readline = this.readline
}

function prn(...args) {
  command_print(...args)
}

function pr(...args) {
  command_write(...args)
}

function read(...args) {
  return command_readline(...args)
}

// fn statement hoists, and let/const just doesnt break "this"
const print = function print(...args) {
  if (is(args[0], 'number')) {
    command_print(args.join(' '))
  } else {
    command_print(args.join(''))
  } 
}

const log = print

// std

const nil = null

function is_given(v) {
  return v === nil || v === undefined
  // const missing_symbol = Symbol('missing')

  // if ((v ?? missing_symbol) == missing_symbol) {
  //   return false
  // } else {
  //   return true
  // }
}

function has(obj, key) {
  if (is(obj, 'array')) {
    return obj.includes(key)
  }

  if (is(obj, 'string')) {
    if (!is(key, 'string')) {
      return false
    }

    return obj.includes(key)
  }

  if (is(obj, Set)) {
    return obj.has(key)
  }

  if (is(obj, Map)) {
    return obj.has(key)
  }

  if (is(obj, 'object')) {
    return (
      is_given(key) &&
      (is(key, 'string') || is(key, 'number') || is(key, 'symbol')) &&
      Object.hasOwn(obj, key)
    )
  }
}

function entries(obj) {
  if (is(obj, Map)) {
    return Array.from(obj.entries())
  } else if (is(obj, 'object')) {
    /**
     * entries: enumerable non symbol
     * names: non symbol
     * symbol: non string
     */
    const keys = [
      // ...Object.entries(obj),
      ...Object.getOwnPropertyNames(obj),
      ...Object.getOwnPropertySymbols(obj),
    ]

    return map(keys, (key) => [key, obj[key]])
  } else if (is(obj, 'array')) {
    return obj.map((item, index) => [index, item])
  } else {
    return []
  }
}

// type variable_type = 'nil' | 'array' | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function |
//   'numeric' | 'iterable'
/**
 * @param {'nil' | 'array' | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | Function |'numeric' | 'iterable'} type
 */
function is(v, type) {
  if (v === nil) {
    return type == 'nil' || type === nil
  } else if (type == 'numeric') {
    return is(v, 'number') || is(v, 'bigint')
  } else if (type == 'iterable') {
    return is(v[Symbol.iterator], 'function') && !is(v, 'string')
  } else if (typeof type == 'function') {
    return v instanceof type
  } else {
    return real_type(v) == type
  }
}

function real_type(v) {
  if (v === nil || Number.isNaN(v)) {
    return 'nil'
  } else if (Array.isArray(v)) {
    return 'array'
  } else {
    return typeof v
  }
}

// numeric
function num(n) {
  const result = Number(n)
  if (Number.isNaN(result)) {
    return nil
  }

  return result
}

function int(n) {
  const result = parseInt(n)
  if (Number.isNaN(result)) {
    return nil
  }

  return result
}

function float(n) {
  const result = parseFloat(n)
  if (Number.isNaN(result)) {
    return nil
  }

  return result
}

function bool(v) {
  return Boolean(v)
}

function str(s) {
  return String(s)
}

/**
 * to pass spread args or an array
 *
 * it may not be used when individual items are be iterable
 */
function list(...args) {
  if (args.length == 1 && is(args[0], 'iterable')) {
    const [v] = args
    return Array.from(v)
  } else {
    const v = args
    return Array.from(v)
  }
}

function set(v) {
  return new Set(v)
}

function dict(v) {
  if (!is(v, 'iterable')) {
    v = entries(v)
  }
  // if (is(v, 'object')) {
  //   v = entries(v)
  // }

  return new Map(v)
}

function obj(v) {
  return Object.fromEntries(v)
}

// fp

const halt_symbol = Symbol('halt')
function halt(value) {
  return { [halt_symbol]: true, value }
}

/**
 * Map an array to a fn
 *
 * return void to continue
 *
 * return halt(v?) to break (or after pushing the last value)
 *
 * auto convert to entries for objects
 *
 * return v? <=> next v? in ruby
 *
 * halt v? <=> break v? in ruby
 *
 * @param {(item: any, index: number, array: any[]) => any} f
 */
function map(items, f) {
  if (is(items, Map)) {
    items = Array.from(items.entries())
  } else if (is(items, Set)) {
    items = Array.from(items)
  } else if (is(items, 'object')) {
    items = entries(items)
  }

  const result = []

  for (const [index, item] of entries(items)) {
    const value = f(item, index, items)

    if (value === undefined) {
      continue
    }
    // if (!is_given(value)) {
    //   continue
    // }

    if (value == halt) {
      break
    }

    if (has(value, halt_symbol)) {
      result.push(value.value)
      break
    }

    result.push(value)
  }

  return result
}

/**
 * Generate an array from begin = 0 to end (excluded) by step = 1
 *
 * @param {number[]} args
 */
function each(...args) {
  let begin = 0,
    end,
    step = 1

  if (args.length == 1) {
    end = args[0]
  } else if (args.length == 2) {
    begin = args[0]
    end = args[1]
  } else if (args.length == 3) {
    begin = args[0]
    end = args[1]
    step = args[2]
  }

  const numbers = []

  let index = begin
  while ((index - end) * step < 0) {
    numbers.push(index)
    index += step
  }

  return numbers
}

// thoughts

/**
 * zafu又迎来了新一届的小可爱们，19级的大家突然变成了学长学姐。
在这些学长学姐中，有那么一位备受欢迎的学姐，她各个方面都非常优秀，但是就是对编程提不起兴趣。
上学期的时候学姐决定从头开始复习C语言，刷起了PTA上的习题集，可是第一题的输出"Hello world!"她就做错了，输出成了"Helo word!"。

为了安慰这位可爱的学姐，学弟学妹们请同样输出"Helo word!"来告诉学姐不止她一个人会犯这个错。

?!

ZAFU stands for Zhejiang A&F University (浙江农林大学), a prominent provincial public university located in Hangzhou, Zhejiang Province, China. 

# zafu china uni

**ZAFU** stands for <mark><strong>Zhejiang A\&F University</strong></mark> (浙江农林大学), a prominent provincial public university located in **Hangzhou, Zhejiang Province, China**. [link](https://en.wikipedia.org/wiki/Zhejiang%5FA%26F%5FUniversity)

Here is an overview of the university:

### 🏫 Quick Profile

- **Established:** Founded in **1958**.
- **Location:** Headquartered in the **Lin'an District** of Hangzhou, known for its beautiful botanical and mountainous scenery.
- **Campuses:** It spans three main campuses (**Donghu, Yijin, and Zhuji**) covering over 213 hectares.
- **National Ranking:** Ranked **128th nationally** in China according to the Academic Ranking of World Universities (ARWU). [link](https://en.zafu.edu.cn/About/DEGREE%5FPROGRAMS.htm)

### 📚 Academic Strengths

While it is a comprehensive university covering 9 discipline categories (including engineering, economics, and medicine), its core world-class strengths lie in **agriculture, forestry, and biological environments**. [link](https://en.zafu.edu.cn/About/BASIC%5FFACTS.htm)

Four of its core fields rank in the **top 5‰ globally** of the Essential Science Indicators (ESI): [link](https://en.zafu.edu.cn/About/BASIC%5FFACTS.htm)

- Engineering
- Plant & Animal Science
- Agricultural Science
- Biological Environment [link](https://en.zafu.edu.cn/About/BASIC%5FFACTS.htm)

### 🌐 International & Programs

ZAFU hosts a sizable student body of over 32,000 students, including active undergraduate, graduate, and doctoral programs. It actively recruits international students and collaborates globally on research initiatives like animal health and environmental sustainability. [link](https://en.zafu.edu.cn/)

You can find more detailed admissions, faculty details, and campus news directly on the [Official Zhejiang A\&F University Website](https://en.zafu.edu.cn/).

Are you looking into ZAFU for **degree admissions**, **learning Chinese**, or looking up a specific **academic department**? Let me know what you need so I can guide you to the right resource!

- [link](https://en.zafu.edu.cn/)\
  Zhejiang A\&F University\
  Zhejiang A\&F University\
  TEACHING AND RESEARCH ZAFU International Students Attend. Advance Animal Health Research Cooperation. Livestock and Fisheries
- [link](https://en.wikipedia.org/wiki/Zhejiang%5FA%26F%5FUniversity)\
  Wikipedia\
  Zhejiang A\&F University - Wikipedia\
  Zhejiang A\&F University (ZAFU; 浙江农林大学), formerly Zhejiang Agriculture and Forestry University, is a provincial public university i...
- [link](https://en.zafu.edu.cn/About/BASIC%5FFACTS.htm)\
  Zhejiang A\&F University\
  BASIC FACTS-浙江农林大学\
  Zhejiang A\&F University (ZAFU) disciplines include Engineering, Plant & Animal Science, Biological Environment, and Agricultural S...

Show all

## rank

**Zhejiang A\&F University (ZAFU)** generally ranks within the **top 130 to 170 universities in China** and around the **top 900 globally**, depending on the ranking body. Its highest achievements are concentrated in its specialized research subjects.

### 🌐 Global & National Rankings

| Ranking Body                                      | Global Rank  | National Rank (China) |
| ------------------------------------------------- | ------------ | --------------------- |
| **CWUR (2026)**                                   | **#899**     | **#167**              |
| **US News Best Global Universities**              | **#967**     | **#135 (tie)**        |
| **Academic Ranking of World Universities (ARWU)** | **#701–800** | **#128**              |
| **QS Asian University Rankings**                  | **#474**     | _N/A_                 |

***

### 🧪 Subject-Specific Rankings

The university's most prestigious placement comes from its specialized science divisions. According to the [US News Subject Rankings](https://www.usnews.com/education/best-global-universities/zhejiang-af-university-529418), ZAFU excels significantly in specific fields:

- **Agricultural Sciences:** **#109 globally**
- **Polymer Science:** **#116 globally**
- **Food Science and Technology:** **#150 globally**
- **Plant and Animal Science:** **#156 globally** [link](https://www.usnews.com/education/best-global-universities/zhejiang-af-university-529418)

Additionally, its core disciplines—**Engineering, Plant & Animal Science, Agricultural Science, and Biological Environment**—regularly place within the **top 5‰ globally** of the Essential Science Indicators (ESI). [link](https://en.zafu.edu.cn/About/HISTORY.htm)

Are you trying to compare ZAFU against **another specific university in China**, or do you need to know how these rankings affect **scholarship options**?

- [link](https://www.usnews.com/education/best-global-universities/zhejiang-af-university-529418)\
  U.S. News & World Report\
  Zhejiang A\&F University in China - US News Best Global Universities\
  Zhejiang A\&F University (Hangzhou, China): - Global Rank: #967 (Score: 38.3) - Top Subjects: #109 Agricultural Sciences,
- [link](https://www.topuniversities.com/universities/zhejiang-af-university)\
  Top Universities\
  Zhejiang A\&F University : Rankings, Fees & Courses Details\
  Zhejiang A\&F University is one of the top universities in Zhejiang, China (Mainland). It is ranked #351-400 in QS WUR Ranking By S...
- [link](https://www.mastersportal.com/rankings-reviews/20495/zhejiang-a-f-university.html)\
  Mastersportal\
  Zhejiang A & F University - Rankings & Reviews | Mastersportal\
  Zhejiang A & F University is ranked 701 in Academic Ranking of World Universities by Shanghai Jiao Tong University. View all 0 Mas...

Show all

## is it 985 or 211

**No, ZAFU is neither a 985 nor a 211 university.**

Instead, it is classified as a **provincial key university** supported by the People's Government of Zhejiang Province and the National Forestry and Grassland Administration.

### What This Means for You:

- **The Context:** The "985" and "211" projects are older elite university designations initiated by the Chinese government in the 1990s.
- **The Current System:** China has largely phased out these titles in favor of a newer national excellence program called the **Double First-Class University Plan** (双一流). ZAFU is not currently on the Double First-Class list either, but it remains one of the top-tier institutions specifically for forestry and agricultural studies in eastern China.

If you are looking for **985 or 211 universities located in Hangzhou** (the same city as ZAFU), the main one is **Zhejiang University (ZJU)**, which holds both titles and is one of the top 3 universities in the country.

Are you checking its 985/211 status for **employment requirements in China**, or to see if you qualify for specific **Chinese Government Scholarships (CSC)**?

# how many 985 211 or double first class uni are there in china

There are <mark><strong>39 universities in Project 985</strong>,<span> </span><strong>112 to 116 universities in Project 211</strong></mark> (which fully includes all 39 from Project 985), and **147 universities in the Double First-Class Initiative** across China. [link](https://en.wikipedia.org/wiki/Project%5F985)

While the Chinese Ministry of Education officially unified and replaced the older "985" and "211" designations with the [Double First-Class Initiative](https://en.wikipedia.org/wiki/Double%5FFirst-Class%5FConstruction) in 2015, employers and students still frequently use all three terms to tier top schools. [link](https://en.wikipedia.org/wiki/Double%5FFirst-Class%5FConstruction)

### Quick Comparison of the Tiers

| Tier / Initiative      | Number of Universities | Focus & Status                                                                                                                                                                           |
| ---------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **C9 League**          | **9**                  | The "Ivy League" of China; elite research institutions selected from the absolute top of Project 985.                                                                                    |
| **Project 985**        | **39**                 | Highly elite national universities funded to achieve global prestige. All 985 schools are also part of Project 211.                                                                      |
| **Project 211**        | **112 – 116**          | Core national universities aimed at elevating scientific and economic research standards for the 21st century.                                                                           |
| **Double First-Class** | **147**                | The current official framework. It includes all previous 985 and 211 universities alongside newly elevated institutions recognized for overall excellence or specific elite disciplines. |

### Regional Distribution

These top-tier universities are heavily concentrated in China's major economic and cultural hubs: [link](https://www.e-square.com.my/en/985-211-universities-in-china)

- **Beijing** holds the highest concentration with over 26 top universities.
- **Jiangsu** (including Nanjing) follows closely with 11 institutions.
- **Shanghai** rounds out the top three with 10 institutions. [link](https://www.e-square.com.my/en/985-211-universities-in-china)

If you are looking at these universities for admissions or research purposes, let me know:

- Are you looking for information on a **specific field of study**?
- Do you want to see a list of the **elite C9 League universities**?
- Are you an **international student** planning to apply?

I can provide specific entry requirements or program details depending on your goals.

- [link](https://en.wikipedia.org/wiki/Double%5FFirst-Class%5FConstruction)\
  Wikipedia\
  Double First-Class Construction - Wikipedia\
  Double First-Class Initiative is a higher education development and sponsorship scheme of the Chinese central government, initiate...
- [link](https://en.wikipedia.org/wiki/Project%5F985)\
  Wikipedia\
  Project 985 - Wikipedia\
  39 elite public universities nationwide across Northern (10), Northeastern (4), Eastern (11), Southern (2), Southwestern (3), Cent...
- [link](https://www.china-admissions.com/blog/guide-to-chinese-universities-project-211-project-985-c9-league/)\
  China Admissions\
  Project 211, Project 985, C9 League, and Double First Class • China Admissions\
  Aug 11, 2020 — Project 211: Started 1995; funds 112 universities to elevate research and international standards.\nProject 985: Created 1998; 39 ...

Show all

## why are they called

The names behind these elite university tiers are actually code words for the exact dates or year-bound goals set by the Chinese government when they launched the initiatives.

Here is the breakdown of why each tier is named the way it is:

### 1. Project 985 (九八五工程)

The name **985** represents the year and month the initiative was announced: **May 1998 (1998/05)**.

- **The Origin:** On May 4, 1998, during the 100th anniversary of Peking University, the Chinese leadership announced a massive funding initiative to develop a small group of elite universities into world-class research institutions.

### 2. Project 211 (二一一工程)

The name **211** represents a strategic national goal: preparing **100** universities for the **21st** century.

- **The Origin:** Launched in 1995, the numbers are arranged as **21** (for the 21st century) and **1** (shorthand for roughly 100 universities). The goal was to drastically upgrade national standards across a core group of top schools to meet the technological demands of the new millennium.

### 3. Double First-Class Initiative (双一流)

The name **Double First-Class** refers to two specific, parallel targets set by the Ministry of Education when it replaced the 985 and 211 systems in 2015.

- **The Origin:** The official framework is aiming for two simultaneous "first-class" designations:
  1. Developing world **First-Class Universities** (as whole institutions).
  2. Developing world **First-Class Disciplines** (building world-leading specific departments, like physics, engineering, or medicine, even at schools that aren't elite across the board).

Would you like to look closer at a specific tier, or are you interested in **how employers view these titles** on a resume today?

## do they include uni outside mainland china

<mark><strong><span><span>No, they do not include any universities outside of<span> </span></span><u><span tabindex="0" role="button"><span>mainland China</span></span></u>.</span></strong></mark>

These designations are strictly internal funding and development schemes managed by the **Central Government of the People's Republic of China** (specifically the Ministry of Education). Because of how these programs are structurally and politically funded, they apply **exclusively to higher education institutions located within the borders of mainland China**. [link](https://internationaleducation.gov.au/international-network/china/PolicyUpdates-China/Pages/Double-First-Class-university-and-discipline-list-policy-update.aspx)

### Regions Excluded from the Tiers

- **Hong Kong & Macau:** Even though they are Special Administrative Regions (SARs) of China, they operate under completely independent education and governance systems. Elite schools like the [University of Hong Kong (HKU)](https://hku.hk/) or the [University of Macau (UM)](https://www.um.edu.mo/) do not carry labels like 985, 211, or Double First-Class.
- **Taiwan:** Taiwan operates entirely under its own government, budget, and education system, so top tier universities like [National Taiwan University (NTU)](https://www.ntu.edu.tw/) are completely separate from mainland initiatives.
- **International Universities:** These titles are not a global ranking system; they are state-sponsored development initiatives. Global institutions like Harvard, Oxford, or Tokyo University are never categorized under these tiers.

### The Only Exception: "Joint-Venture" Universities

There are a handful of unique **international joint-venture universities** built physically _inside_ mainland China through partnerships between local municipalities and prestigious overseas universities. [link](https://www.linkedin.com/posts/peterbshull%5Fnot-all-chinese-universities-are-the-same-activity-7477749555812294656-9Qsu)

Because they are legally registered higher-education institutions on the mainland, they occasionally get intertwined with local funding, but they generally stand outside the traditional 985/211/Double First-Class lists. Prominent examples include: [link](https://www.linkedin.com/posts/peterbshull%5Fnot-all-chinese-universities-are-the-same-activity-7477749555812294656-9Qsu)

- **Duke Kunshan University** (Partnered with Duke University)
- **Xi'an Jiaotong-Liverpool University** (Partnered with the University of Liverpool)
- **NYU Shanghai** (Partnered with New York University)
- **University of Nottingham Ningbo China** (Partnered with the University of Nottingham) [link](https://www.linkedin.com/posts/peterbshull%5Fnot-all-chinese-universities-are-the-same-activity-7477749555812294656-9Qsu)

Are you trying to figure out how universities in **Hong Kong or Taiwan compare** in prestige to the 985/211 mainland schools for **employment or graduate school applications**? I can break down how they stack up.

- [link](https://www.linkedin.com/posts/peterbshull%5Fnot-all-chinese-universities-are-the-same-activity-7477749555812294656-9Qsu)\
  LinkedIn·Peter Shull\
  Chinese University Rankings Matter: C9 League, 985, 211 ...\
  Jun 30, 2026 — Joint Foreign Universities -These foreign universities were established jointly with local governments in China. All courses are t...
- [link](https://en.wikipedia.org/wiki/Double%5FFirst-Class%5FConstruction)\
  Wikipedia\
  Double First-Class Construction - Wikipedia\
  Scheme: Double First-Class Initiative (World First-Class Universities and First-Class Academic Disciplines Construction) \* Region:
- [link](https://www.reddit.com/r/China/comments/1n34vme/can%5Fsomeone%5Fexplain%5Fhow%5Fchinas%5Funiversity%5Fsystem/)\
  Reddit·r/China\
  Can someone explain how China's university system works ...\
  these are central government development schemes tied to funding and support. this scheme helps sustain the existing hierarchy of ...

Show all

*/

// solution

pr('Helo word!')
