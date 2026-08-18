// @ts-nocheck
/* eslint-disable */

function regex(...args: ConstructorParameters<typeof RegExp>) {
  return new RegExp(...args)
}

function match(text: string, pattern: RegExp) {
  pattern = pattern.flags.includes('g') ? pattern : regex(pattern, pattern.flags + 'g')
  return Array.from(text.matchAll(pattern))
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

type item = {
  content: string[]
  year?: number
  month?: number
  date?: number
  hour?: number // 24h
  minute?: number
  index?: number
  is_keyword: boolean
}

type journal = item[]

function parse(journal_text: string) {
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
    merge(value, { index })
  }

  function compare(a: item, b: item) {
    const is_a_before_b = false
    const is_a_after_b = true

    for (const key of ['year', 'month', 'date', 'hour', 'minute', 'index']) {
      if (a[key] < b[key]) {
        return is_a_before_b
      } else if (a[key] > b[key]) {
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

function serialize(journal: journal) {
  const lines = []

  let year, month, date

  for (const item of journal) {
    if (item.is_keyword) {
      continue
    }

    if (item.year != year || item.month != month) {
      ({ year, month } = item)

      // reset date, 01 jan != 01 feb
      date = undefined

      lines.push(`${month_to_mon[month]} ${year}`, '')
    }

    if (item.date != date) {
      ({ date } = item)

      lines.push(`${date}`, '')
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

/**
 * telegram desktop select & copy
 */
type telegram = {

}

function parse_telegram(telegram_text: string) {
  // name, month, date, 
  const pattern = regex('(.*), [(\\d{1,2})]')
}

const test_telegram = `
Romandu, [5/23/26 12:16 AM]
Zhenfund 喜欢投小天才

Romandu, [5/23/26 12:17 AM]
拿个百级美元天使没问题

Romandu, [5/23/26 12:18 AM]
奇绩还有投高中生的，最小是 15 岁中科大少年班

Fodesu, [5/23/26 12:18 AM]
好复杂

Fodesu, [5/23/26 12:18 AM]
memoh 平均年龄有 20 岁吗？

Romandu, [5/23/26 12:19 AM]
徐小平在北美也投了不少高校 dropout

溏 🍬, [5/23/26 12:19 AM]
陆奇老师有他自己的品味

清凤, [5/23/26 12:19 AM]
小猫不清楚不要插嘴

Acbox Neko, [5/23/26 12:19 AM]
都是些小天才

盼兮, [5/23/26 12:19 AM]
群里都是成功人士

盼兮, [5/23/26 12:19 AM]
看死了

Acbox Neko, [5/23/26 12:19 AM]
我跟小天才说话总有种自卑感

溏 🍬, [5/23/26 12:19 AM]
我跟小盒子说话总有种自卑感

Fodesu, [5/23/26 12:19 AM]
你们都是小天才，除了我

Acbox Neko, [5/23/26 12:19 AM]
所以我会避免找那些高中青训营的人说话

Acbox Neko, [5/23/26 12:20 AM]
他们都是那种 十岁英语无障碍沟通 十五岁保送国内外各大名校

Acbox Neko, [5/23/26 12:20 AM]
简历都能发着光的那种

Acbox Neko, [5/23/26 12:20 AM]
我比不上

Acbox Neko, [5/23/26 12:21 AM]
我甚至有点害怕他们

Romandu, [5/23/26 12:21 AM]
现在国内风投已经不卡学历了

Romandu, [5/23/26 12:21 AM]
其他资本会卡，yc china 和 zhenfund 不卡

路上看见, [5/23/26 12:21 AM]
奇绩为什么对 dropout 未成年情有独钟

Acbox Neko, [5/23/26 12:22 AM]
我初中学历诶

Acbox Neko, [5/23/26 12:22 AM]
并非

Zhiqiang Yang, [5/23/26 12:22 AM]
细说？

Acbox Neko, [5/23/26 12:22 AM]
他们投的 dropout 的未成年也没多少

Acbox Neko, [5/23/26 12:22 AM]
大多都是大学辍学的

Romandu, [5/23/26 12:22 AM]
恋童癖

Acbox Neko, [5/23/26 12:23 AM]
有名校背书之后 再突然 drop

溏 🍬, [5/23/26 12:23 AM]
奇绩投了哪个未成年

Romandu, [5/23/26 12:23 AM]
奇绩喜欢劝人 drop

溏 🍬, [5/23/26 12:23 AM]
我比较好奇

盼兮, [5/23/26 12:23 AM]
只要非传统了感觉文盲也无所谓

Acbox Neko, [5/23/26 12:23 AM]
让 vc 觉得他很行 觉得他能 all in

盼兮, [5/23/26 12:23 AM]
反正都不是传统路径

Zhiqiang Yang, [5/23/26 12:23 AM]
能不能进大厂之后光速辞职？算 drop 吗？

路上看见, [5/23/26 12:23 AM]
有没有清华 drop

Romandu, [5/23/26 12:24 AM]
全是

Acbox Neko, [5/23/26 12:24 AM]
我高中 drop 的

Acbox Neko, [5/23/26 12:24 AM]
我今年 17

路上看见, [5/23/26 12:24 AM]
我小学文化

Romandu, [5/23/26 12:24 AM]
年龄越小要求越低

Romandu, [5/23/26 12:24 AM]
红衫 绿洲投老司机

Acbox Neko, [5/23/26 12:25 AM]
我达不到他们的最低要求

溏 🍬, [5/23/26 12:25 AM]
你这话负责任吗

佩奇, [5/23/26 12:25 AM]
羡慕年轻有为

Romandu, [5/23/26 12:25 AM]
真格喜欢小天才

Acbox Neko, [5/23/26 12:25 AM]
我一不会说话 二简历也不好看

Acbox Neko, [5/23/26 12:25 AM]
我也没有啥成就

Romandu, [5/23/26 12:26 AM]
工程师出身没一个会说话

Romandu, [5/23/26 12:26 AM]
风投行业又不是酒桌文化

Acbox Neko, [5/23/26 12:26 AM]
我如果创业也只能和别人合伙 然后沾点他们的光

Romandu, [5/23/26 12:26 AM]
现在他们投小天才都是让小天才找合伙人然后挂靠成 cto/principle eng

盼兮, [5/23/26 12:26 AM]
你的已经够好看了吧

盼兮, [5/23/26 12:26 AM]
持续有项目经历

Acbox Neko, [5/23/26 12:27 AM]
我给你看看那些少年小天才都是什么样的简历

盼兮, [5/23/26 12:27 AM]
那算了

盼兮, [5/23/26 12:27 AM]
别搞我

Acbox Neko, [5/23/26 12:27 AM]
比如，保送美本/英本

Acbox Neko, [5/23/26 12:27 AM]
某个很著名的国际学校的学生

Romandu, [5/23/26 12:27 AM]
那不是最基本的吗

Fodesu, [5/23/26 12:27 AM]
这只是资源的事情

溏 🍬, [5/23/26 12:27 AM]
美本是如何 保送 的

Acbox Neko, [5/23/26 12:28 AM]
得过信奥/各种比赛的金奖银奖

Acbox Neko, [5/23/26 12:28 AM]
参加过 MIT 的黑客松

Romandu, [5/23/26 12:28 AM]
0 含金量

Acbox Neko, [5/23/26 12:28 AM]
我简历上连这些都写不出来

盼兮, [5/23/26 12:28 AM]
这保送家庭因素更多吧

Acbox Neko, [5/23/26 12:28 AM]
我就是一个农村高中 drop 的地痞

Romandu, [5/23/26 12:28 AM]
noi 国家队都去量化私募了 1m eur+以上没人创业

溏 🍬, [5/23/26 12:29 AM]
美本又不像高考，保送制度是指的不管你高考考多少分，都能保录取

路上看见, [5/23/26 12:29 AM]
中国新码农是吧

Acbox Neko, [5/23/26 12:30 AM]
我不清楚这些

Romandu, [5/23/26 12:30 AM]
我还认识一堆 mit 计科的，找不到工作的

Romandu, [5/23/26 12:30 AM]
比比皆是

Acbox Neko, [5/23/26 12:30 AM]
反正他们简历就写了一大堆大学

佩奇, [5/23/26 12:30 AM]
你这假 bot 吧，太真人了

Romandu, [5/23/26 12:30 AM]
想要继续 h1b/o1 留在那

Romandu, [5/23/26 12:30 AM]
然后找不到滚回来的

Acbox Neko, [5/23/26 12:30 AM]
我简历顶多写写我在哪社交账号 github，做过什么项目

Acbox Neko, [5/23/26 12:31 AM]
教育经历写不出来 奖项写不出来

Acbox Neko, [5/23/26 12:31 AM]
大概也就 github 稍微能看点

Romandu, [5/23/26 12:31 AM]
出去学花了家庭 2m 以上

Romandu, [5/23/26 12:31 AM]
对于 a7 a8 中产家庭就是重灾区

溏 🍬, [5/23/26 12:31 AM]
所以我跟你说我们团队是 underdog 文化 😅

盼兮, [5/23/26 12:31 AM]
所以谁风险投资我几块显卡让我把实验继续下去

Fodesu, [5/23/26 12:31 AM]
A7 都敢这样的么。。

Romandu, [5/23/26 12:32 AM]
有一堆 a7.5 老板傻儿子想要出去混个东西去的

Romandu, [5/23/26 12:32 AM]
10 的时候最多，现在很明显都祛魅了少了

Acbox Neko, [5/23/26 12:33 AM]
哎 反正就是

Acbox Neko, [5/23/26 12:33 AM]
那些小天才从小受到的教育

Acbox Neko, [5/23/26 12:33 AM]
让他们身上发着一种光

Romandu, [5/23/26 12:33 AM]
我也见过不少 a7.5 家庭只 afford 起一年的，打算只学一年就 drop

溏 🍬, [5/23/26 12:33 AM]
老板自己就是一只 underdog😼

Acbox Neko, [5/23/26 12:33 AM]
相比之下我自己全身都是阴湿味

Acbox Neko, [5/23/26 12:33 AM]
所以我不敢接近他们

Romandu, [5/23/26 12:34 AM]
祛魅吧

Romandu, [5/23/26 12:34 AM]
学历没什么用

盼兮, [5/23/26 12:34 AM]
那就离远点就行

Romandu, [5/23/26 12:34 AM]
铁打还需自身硬

Fodesu, [5/23/26 12:34 AM]
那我算尸臭味了

Acbox Neko, [5/23/26 12:34 AM]
就是 让他们从小各种卷 得各种奖项

路上看见, [5/23/26 12:34 AM]
买小天才电话手表能变成小天才吗

Acbox Neko, [5/23/26 12:35 AM]
然后从来不会觉得自己不好或者自己不行

Romandu, [5/23/26 12:35 AM]
你要知道创业不能投一流的人

佩奇, [5/23/26 12:35 AM]
那我就该原地去世了

Acbox Neko, [5/23/26 12:35 AM]
遇到问题也敢去解决去说话

Romandu, [5/23/26 12:35 AM]
创业要选二流人

Romandu, [5/23/26 12:35 AM]
他们这些学历高的，创业失败还有后路的可以继续回去的现在 gp 们普遍给打低分

溏 🍬, [5/23/26 12:35 AM]
一流的不创业

盼兮, [5/23/26 12:35 AM]
哦 wc 那是因为他们能解决，各种意义上的能，想我这种就是各种意义上的不能解决，没有任何选择

Romandu, [5/23/26 12:36 AM]
最多投种子天使让他们试错

Acbox Neko, [5/23/26 12:36 AM]
所以有时候我就感觉这个世界很不公平

Fodesu, [5/23/26 12:36 AM]
有个文章说边缘人更能成功。。

Acbox Neko, [5/23/26 12:36 AM]
中产家的孩子能早早接触英语 计算机等科学 能去玩 ai 用 ai

0x24a, [5/23/26 12:36 AM]
想起来我小学时候用 termux 写代码

路上看见, [5/23/26 12:36 AM]
开哪吒仙饮也是创业

Acbox Neko, [5/23/26 12:37 AM]
然而中国很多小县城的家庭连给孩子买 claude code 都买不起

溏 🍬, [5/23/26 12:37 AM]

<!-- sticker: not backed by yc -->

Acbox Neko, [5/23/26 12:37 AM]
我看到这种也只能尽可能帮一点

Romandu, [5/23/26 12:37 AM]
也没几个创一代是家里富裕的出身

0x24a, [5/23/26 12:37 AM]
小时候完全没有在线支付方式，一个月 7 块的服务器都买不起

Acbox Neko, [5/23/26 12:37 AM]
我有时候真的很同情心泛滥

路上看见, [5/23/26 12:37 AM]
谁搞个勇哥 YC 创业说

0x24a, [5/23/26 12:38 AM]
只能拼命找办法薅免费在线服务（x

溏 🍬, [5/23/26 12:38 AM]
我会选择下定决心 all in 一个，其他全部放掉

Acbox Neko, [5/23/26 12:38 AM]
中国有不少家庭月收入不到五千

Acbox Neko, [5/23/26 12:39 AM]
互联网和 AI 是他们打破信息差的唯一途径

Acbox Neko, [5/23/26 12:40 AM]
一方面这种家庭家长认知有限 认为互联网 ai 是有害的

Acbox Neko, [5/23/26 12:40 AM]
但这也不能怪家长

Acbox Neko, [5/23/26 12:40 AM]
我以前认为我父母认知很低很无可救药

路上看见, [5/23/26 12:40 AM]
没事的

Acbox Neko, [5/23/26 12:40 AM]
但是后来我不这样觉得他们了 我开始同情他们了

路上看见, [5/23/26 12:41 AM]
我小时候开 idea 写码我奶说我在玩游戏

盼兮, [5/23/26 12:41 AM]
感觉我家的实际月收入就差不多这样，因为剩下的钱都还贷款给高位接盘的垃圾房产上了，感觉基本上跌去了大部分，那些钱都是给地方政府上供了属于，而他们仍然觉得习近平伟大共产党英明，愚蠢完了简直

Acbox Neko, [5/23/26 12:41 AM]
那些没钱的家庭的孩子就只能去高考

Fodesu, [5/23/26 12:41 AM]
我妈现在还这么觉得

Acbox Neko, [5/23/26 12:41 AM]
高考成功的人 走出去了

Romandu, [5/23/26 12:41 AM]
苦其心志，劳其筋骨

Acbox Neko, [5/23/26 12:41 AM]
后面会接触更多的人 走上自己的路

路上看见, [5/23/26 12:41 AM]
我奶现在觉得我不会英文

Acbox Neko, [5/23/26 12:41 AM]
那些没有成功的人呢？

路上看见, [5/23/26 12:42 AM]
然后电脑上一堆英文全是拼音

Acbox Neko, [5/23/26 12:42 AM]
他们最终只会时代的牺牲品

溏 🍬, [5/23/26 12:42 AM]
我妈现在宁愿我在玩游戏 😹

Romandu, [5/23/26 12:42 AM]
地球 online 这个游戏不是这样玩的

Romandu, [5/23/26 12:42 AM]
真要说那些富二代也不好过

Romandu, [5/23/26 12:43 AM]
一辈子达不到父辈的成就

Romandu, [5/23/26 12:43 AM]
笼罩在父辈规划好的路线上

Romandu, [5/23/26 12:43 AM]
虽然客观来说确实选了个好爹

Acbox Neko, [5/23/26 12:43 AM]
其中不知道有多少人被埋没了

溏 🍬, [5/23/26 12:43 AM]
看心气了

Romandu, [5/23/26 12:43 AM]
年轻人有点反叛精神也是好事

Acbox Neko, [5/23/26 12:43 AM]
他们成为了社会边缘群体

Acbox Neko, [5/23/26 12:44 AM]
成为了所谓的斩杀线

溏 🍬, [5/23/26 12:44 AM]
心气低的富二代就是开挂人生

路上看见, [5/23/26 12:44 AM]
之前我妈给我找了个关系让进厂我学 cnc 编程

Acbox Neko, [5/23/26 12:44 AM]
成为了精神小伙精神小妹

溏 🍬, [5/23/26 12:44 AM]
心气高的可以把自己折磨死

Acbox Neko, [5/23/26 12:44 AM]
或者进厂送外卖就这么活着

Romandu, [5/23/26 12:45 AM]
ego, 能力, 认知不可能三角

莫思奇多, [5/23/26 12:45 AM]
能自洽就好了。

Acbox Neko, [5/23/26 12:45 AM]
我真的感觉梁文峰在做一件很伟大的事

Acbox Neko, [5/23/26 12:46 AM]
想到这些我就有点想哭

Romandu, [5/23/26 12:46 AM]
中国最大的问题是父母容忍不了自家孩子在家里啥也不干不去打工沉淀几年

Acbox Neko, [5/23/26 12:46 AM]
我一次次告诉自己不要同情心泛滥

Acbox Neko, [5/23/26 12:46 AM]
告诉自己祛魅

Acbox Neko, [5/23/26 12:47 AM]
告诉自己不要在意别人说了什么

溏 🍬, [5/23/26 12:47 AM]
梁圣是宰辅之才

Romandu, [5/23/26 12:48 AM]
你还年轻

Romandu, [5/23/26 12:48 AM]
多试错几年

Romandu, [5/23/26 12:49 AM]
年轻是最大的资本了

Romandu, [5/23/26 12:50 AM]
如果上不了最 top 的院校，卷学历信价比也不是最大的

Romandu, [5/23/26 12:50 AM]
现在一堆酒吧舞也找不到工作

Romandu, [5/23/26 12:51 AM]
所以说能力也很重要

Romandu, [5/23/26 12:51 AM]
本质上这些经历铺开多维分数计算加权求和

Romandu, [5/23/26 12:52 AM]
不存在单维门槛

Romandu, [5/23/26 12:53 AM]
创业尽量低成本试错

Romandu, [5/23/26 12:53 AM]
多去尝试了

Romandu, [5/23/26 12:54 AM]
也不全是院校有三六九等，我更喜欢说有能力的人在哪都有能力

路上看见, [5/23/26 12:55 AM]
擅长考试

Romandu, [5/23/26 12:56 AM]
如果能混象牙塔里会考试也加分

Acbox Neko, [5/23/26 12:57 AM]
对

Acbox Neko, [5/23/26 12:57 AM]
我感觉 deepseek 的方向就是压成本

Acbox Neko, [5/23/26 12:57 AM]
然后卖最便宜的 api

路上看见, [5/23/26 12:57 AM]
放下脑子看看短剧逆袭龙王吧

Acbox Neko, [5/23/26 12:58 AM]
我觉得每一个孩子都应该有使用 ai 进行学习的权利和义务

Acbox Neko, [5/23/26 12:58 AM]
我不希望 ai 最后成为富人的玩具

溏 🍬, [5/23/26 12:58 AM]
你怎么开始发表暴论了

Acbox Neko, [5/23/26 12:58 AM]
对不起

Acbox Neko, [5/23/26 12:59 AM]
你帮我删了

Acbox Neko, [5/23/26 12:59 AM]
我吃 sns 上量了

Acbox Neko, [5/23/26 12:59 AM]
抱歉

路上看见, [5/23/26 12:59 AM]
claude 是中产的时尚单品

Acbox Neko, [5/23/26 12:59 AM]
刚才在说胡话

Acbox Neko, [5/23/26 12:59 AM]
我好晕

Romandu, [5/23/26 1:04 AM]
不是现在，从互联网刚出现小说的时候就有了。。。

Romandu, [5/23/26 1:04 AM]
都是意淫出来的

Romandu, [5/23/26 1:04 AM]
意淫文

Romandu, [5/23/26 1:05 AM]
富人休闲生活那些之类的也很难说不是意淫

溏 🍬, [5/23/26 1:11 AM]
可是

溏 🍬, [5/23/26 1:11 AM]
在量化从业就不能自己炒股了

溏 🍬, [5/23/26 1:12 AM]
而且高工资全部要拿去交税

Romandu, [5/23/26 1:12 AM]
quant 哪容得下这么多傻逼

Romandu, [5/23/26 1:12 AM]
quant 是智商游戏

Romandu, [5/23/26 1:12 AM]
靠 ngo 上的 mit 还是别凑这个热闹了

Zhiqiang Yang, [5/23/26 1:16 AM]
想给有钱人家的小孩做家教。有什么渠道吗？

溏 🍬, [5/23/26 1:17 AM]
出门在外，身份都是自己给的

Romandu, [5/23/26 1:17 AM]
没有

Romandu, [5/23/26 1:17 AM]
iykyk

Zhiqiang Yang, [5/23/26 1:17 AM]
可以教 mo，oi，以及全科。

溏 🍬, [5/23/26 1:18 AM]
反正家长也么法验证

溏 🍬, [5/23/26 1:18 AM]
XCPC 金牌起手

Zhiqiang Yang, [5/23/26 1:18 AM]
都有做题成绩，可验证。

Zhiqiang Yang, [5/23/26 1:18 AM]
前往数学会官网查询啊。

Zhiqiang Yang, [5/23/26 1:19 AM]
群内是否有大佬？或者认识需要家教的大佬的大佬？

Romandu, [5/23/26 1:20 AM]
我觉得你去抖音养个号在统计学上概率都比这个高

盼兮, [5/23/26 1:22 AM]
为什要教 oi

溏 🍬, [5/23/26 1:22 AM]
群里的小朋友还在需要找家教的阶段

盼兮, [5/23/26 1:22 AM]
我感觉 oi 真无聊又无聊

盼兮, [5/23/26 1:22 AM]
无聊透顶

溏 🍬, [5/23/26 1:22 AM]
你这一步到位给他们都发个娃了

Zhiqiang Yang, [5/23/26 1:22 AM]
主要提供陪伴。

Zhiqiang Yang, [5/23/26 1:22 AM]
陪伴做题。

盼兮, [5/23/26 1:23 AM]
做题还有陪伴啊

盼兮, [5/23/26 1:23 AM]
摸摸鱼得了

盼兮, [5/23/26 1:23 AM]
机房打游戏，别有一番风味

Zhiqiang Yang, [5/23/26 1:23 AM]
那怎么获取现金流呢？

Fodesu, [5/23/26 1:23 AM]
自媒体

Zhiqiang Yang, [5/23/26 1:24 AM]
怎样才能从富哥手里收 💰？

盼兮, [5/23/26 1:24 AM]
我做题都是不停喝水或者扣腿的

盼兮, [5/23/26 1:24 AM]
不咋需要陪伴（

盼兮, [5/23/26 1:26 AM]
做题怎么变现，有几个做题家能做题变现

盼兮, [5/23/26 1:27 AM]
oi 是真正夕阳行业吧

盼兮, [5/23/26 1:27 AM]
干嘛还弄

盼兮, [5/23/26 1:27 AM]
有一点意义吗

Zhiqiang Yang, [5/23/26 1:27 AM]
mo 呢？

Zhiqiang Yang, [5/23/26 1:28 AM]
我也擅长所有文化课。

盼兮, [5/23/26 1:28 AM]
那高考什么的不也是夕阳的

Zhiqiang Yang, [5/23/26 1:28 AM]
那什么事情朝阳？

溏 🍬, [5/23/26 1:28 AM]
如果这是能变现的，早就会有人来找你了

Zhiqiang Yang, [5/23/26 1:29 AM]
什么事情能建立护城河？积累护城河？

Romandu, [5/23/26 1:29 AM]
硬要说古琴，国画，舞蹈比信竞庞氏多了啊

Zhiqiang Yang, [5/23/26 1:29 AM]
准备去招聘平台试试，先从副业开始。

Zhiqiang Yang, [5/23/26 1:30 AM]
收取一波 mo 做题费。

Romandu, [5/23/26 1:31 AM]
经济下行期

Romandu, [5/23/26 1:32 AM]
经济上行期超发的化债的就是下行期还

Romandu, [5/23/26 1:33 AM]
城投央行造出来的房地产泡沫破了

Romandu, [5/23/26 1:34 AM]
东大做的还算好的

Romandu, [5/23/26 1:34 AM]
像 08 那种级别黑天鹅更动荡

Romandu, [5/23/26 1:36 AM]
经济学要是能解决，现在还有四大学派吗

Romandu, [5/23/26 1:36 AM]
现在经济学没一个派别是完全自洽的

Romandu, [5/23/26 1:36 AM]
都有漏洞

Romandu, [5/23/26 1:38 AM]
我是不可知论者

Romandu, [5/23/26 1:39 AM]
致命的自负 101

Romandu, [5/23/26 1:39 AM]
奥派入门必读书籍
`

`Romandu, [5/23/26 12:16 AM]`


